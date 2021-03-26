// // curryng - conceito de "pf", onde uma função recebe multiplos parâmetros, um de cada vez.
// // const add = (n1, n2) => n1 + n2
// const add = num1 => num2 => num1 + num2

// // const increment = add(1)
// // console.log(increment(2));

// console.log(add(10)(20));

const getDiscount = discount => price => price * discount

// Flexibulizando a função, com curry, e oferendo diferentes discontos, para diferentes hierarquias de clientes
const ironClient = getDiscount(.10)
const platinumClient = getDiscount(.20)
const goldenClient = getDiscount(.30)

console.log(
    ironClient(100),
    platinumClient(100),
    goldenClient(100)
);

// Output: 10 20 30

debugger