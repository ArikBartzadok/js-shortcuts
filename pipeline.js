// Encadeamento de elementos de processamento

const sum100 = num => num + 100

const divBy5 = num => num / 5

const multiBy10 = num => num * 10

// Executando um pipe
const combineOperations = (initialParam, arrayOfFunctions) => 
    arrayOfFunctions.reduce((acc, func) => func(acc), initialParam)

console.log(combineOperations(0, [sum100, multiBy10, divBy5]))
console.log(combineOperations(0, [sum100, multiBy10, multiBy10, multiBy10, sum100]))

// gerar novo array, a partir de um array, com mesma quantidade de itens ? .map()
// gerar novo array, a partir de um array, com menos itens? .filter()
// a partir deste array, gerar um outputs, cujo valo não seja necessáriamente um array? .reduce()

// return, força o acumulador a acumular seus valores [encadeamento]

/**
* @param {Array} func - cada função, do array de funções.
* @param {Number} acc - o valor inicial, e suas respectivas incrementações, de acordo com o output da função que o antecedeu.
*/
