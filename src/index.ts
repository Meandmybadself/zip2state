import { readFileSync } from "fs";
import { join } from "path";

let [zipStatesStr, edgecasesStr] = readFileSync(join(__dirname, "../data/zip-state.txt"), "utf8").split("__")

const zipStates = zipStatesStr.split('|').reduce((acc, line) => {
    const [zip, state] = line.split(":")
    acc[zip] = state
    return acc
}, {})

const edgecases = edgecasesStr.split('|')

export default (zip: string): string | undefined => {
    for (let i = 1; i < zip.length; i++) {
        const key: string = zip.substring(0, i)
        if (edgecases[key]) {
            return ""
        }
        if (zipStates[key]) {
            return zipStates[key];
        }
    }
    return ''
}