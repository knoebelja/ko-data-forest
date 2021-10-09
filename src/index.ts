import { search, help } from "./cmd"

const args = process.argv.slice(2)

const main = args[0]
const options = args.slice(1)

switch (main) {
    case "search":
        search(options)
        break
    case "help":
        help()
        break
    default:
        console.log("invalid command")
        console.log("")
        help()
}

