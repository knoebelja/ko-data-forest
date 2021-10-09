import { main } from "./main"

const cmd = process.argv[2]
const options = process.argv.slice(3)

main(cmd, options)