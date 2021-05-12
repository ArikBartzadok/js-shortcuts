// Gerando números aleatórios
// Math.floor(Math.random() * (3 - 0 + 1)) + 0

const words = [
    'one',
    'two',
    'three',
    'four'
]

const getRandomIntegerInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

// arrays -> expressões zero-based
const getRandomWord = () => words[getRandomIntegerInclusive(0, words.length - 1)]

console.log(getRandomWord())