// Callback => quando uma função é enviada como argumento

const myFunc = callback => {
    const value = 77

    // Invocação da função de callback
    callback(value)
}

// Invocação da função que recebe uma outra função como argumento
myFunc(number => {
    console.log(number)
})