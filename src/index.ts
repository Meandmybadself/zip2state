import fs from "fs";
import path from "path";

const dataAsArr = fs.readFileSync(path.join(__dirname, "../data/zip-state.txt"), "utf8").split("|")
const data = dataAsArr.reduce((acc, line) => {
    const [zip, state] = line.split(":")
    acc[zip] = state
    return acc
}, {})

export default (zip: string): string | undefined => {
    for (let i = 1; i < zip.length; i++) {
        const key = zip.substr(0, i)
        if (data[key]) {
            return data[key];
        }
    }
    return ''
}