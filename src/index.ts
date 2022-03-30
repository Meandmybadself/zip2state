import data from '../data/zip-state.json'

export default (zip: string): string => {
    for (let i = 1; i < zip.length; i++) {
        const key = zip.substr(0, i)
        if (data[key]) {
            return data[key];
        }
    }
    return ''
}