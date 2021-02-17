const argon2 = require("argon2")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter your password:", async (password) => {
  const hash = await argon2.hash(password, {type: argon2.argon2id})
  console.log(`Hash: ${hash}`)
})
