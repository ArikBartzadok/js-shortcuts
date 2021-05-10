// A invocação da função deve retornar um objeto, a partir de um array
// ['prop1', 'value1'] => { prop1: 'value1'}

// reduce => usado quando se deja converter um array em um outro tipo de dado

// Forma intuitiva:
const arrayToObj = arr => arr.reduce((acc, item) => {
    acc[item[0]] = item[1]
    return acc
}, {})


// Forma convencional:
const arrayToObj = arr => arr.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
}, {})


// Refatoração para facilitar futuras manutenções evitando funções anônimas
// Callback function
createObj = (acc, [key, value]) => {
    acc[key] = value
    return acc
}

// Function with callback
const arrayToObj = arr => arr.reduce(createObj, {})


console.log(
    arrayToObj([
        ['prop1', 'value1'],
        ['prop2', 'value2'],
        ['prop3', 'value3']
    ])
)