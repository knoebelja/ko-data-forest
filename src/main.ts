import { search, parse, help } from "./cmd"

export function main(command?: string, options?: string[]) {
    switch (command) {
        case "search":
            search(options)
            break
        case "parse":
            parse(options)
            break
        case "help":
            help()
            break
        default:
            console.log("invalid command")
            console.log("")
            help()
    }
}
