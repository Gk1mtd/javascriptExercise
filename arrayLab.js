// Hunting Arrays

let games = []

games.push("Planetary Annihilation")
console.log(games)
games.push("SWINE HD Remaster")
console.log(games)
console.log(games.length)

console.log(games)
console.log(games.length)
games[1] = "StarCraft"
games[0] = "Warcraft 3"

games.push(5)
games.push(5.423)
games.push([])
games[4].push("Nested Array")
games[4].push("Risk")
console.log(games)
console.log(games[4][1])

let beispiel = "Hallo"
beispiel = beispiel + ", noch ein Test"
console.log(beispiel)
console.log(beispiel.toUpperCase())
beispiel.toUpperCase()
console.log(beispiel)