import { v4 as uuidv4 } from "uuid"

export function generateJobId(type: string) : string {
    return `${type}-${uuidv4()}`;
}  