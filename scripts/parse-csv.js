const papa = require('papaparse');
const fs = require('fs');
const pick = require('lodash/pick');
const groupBy = require('lodash/groupBy');
const uniq = require('lodash/uniq')

const parse = async () => {
    const file = fs.readFileSync('./data/free-zipcode-database-Primary.csv', 'utf8');
    const csv = papa.parse(file, {
        header: true,
        skipEmptyLines: true
    })

    const result = csv.data.map(row => pick(row, ['Zipcode', 'State']))
    result.sort((a, b) => a.Zipcode.localeCompare(b.Zipcode));

    const masterKey = {}

    for (let i = 1; i < 5; i++) {
        const grouped = groupBy(result, (row) => row.Zipcode.substring(0, i))
        // Go through each group and find number sets that only represent one state.
        Object.entries(grouped).forEach(([key, value]) => {
            const deduped = uniq(value.map(row => row.State))
            let hasAncestralMatch
            for (let j = 0; j < i; j++) {
                const ancestorKey = key.substring(0, j)
                if (masterKey[ancestorKey]) {
                    hasAncestralMatch = true
                    break
                }
            }

            if (deduped.length === 1 && !hasAncestralMatch) {
                masterKey[key] = deduped[0]
            }
        })
    }

    const zipStateCondensed = []
    for ([zip, state] of Object.entries(masterKey)) {
        zipStateCondensed.push(`${zip}:${state}`)
    }

    const edgeCases = fs.readFileSync('./data/edgecases.txt', 'utf-8').split("\n")

    const contentToWrite = [zipStateCondensed.join("|"), edgeCases.join('|')].join("_")
    fs.writeFileSync('./data/zip-state.txt', contentToWrite)
}

parse()
