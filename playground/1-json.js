const fs = require('fs')
const dataBuffer = fs.readFileSync('./1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.age = 45
user.name = 'Vlad'
user.planet = 'Moon'

const userJSON = JSON.stringify(user)

fs.writeFileSync('./1-json.json', userJSON)

console.log(user)
console.log(dataJSON)
console.log(dataBuffer)