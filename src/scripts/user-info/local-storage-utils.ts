export function writeResultToLocal(result: any) {
    let results = JSON.parse(getFromLocal(result) as string)
    let newResults = results.append(result)
    writeToLocal("progress", JSON.stringify(newResults))
}

export function writeToLocal(key: string, value: any) {
    if (typeof window !== "undefined") {
        console.log("Writing to local storage for key: " + key)
        localStorage.setItem(key, value)
    }
    console.log("Could not write to local storage for key: " + key)
}

export function getFromLocal(key: string) {
    if (typeof window !== "undefined")
        return localStorage.getItem(key)
}
