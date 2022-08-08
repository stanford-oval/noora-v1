import { writeResultToLocal } from "./local-storage-utils";

export function saveSessionResult(progressObj: any) {
    let result = progressObj // temp

    console.log("### Saving to progress: ", result)
    writeResultToLocal(result)
    console.log("### Done saving to progress")
}