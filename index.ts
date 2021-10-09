import { search } from "./cmd"

const args = process.argv.slice(2)

switch (args[0]) {
    case "search":
        search(args.slice(1))
        break
    case "help":
        help()
        break
    default:
        console.log("invalid command")
        help()
}

function help() {
    console.log(`available commands:
    search  look up the meaning of a word
    help    print available commands
    `
    )
}