// Funções que retornam outras funções
// function getMultiplier (multiplier) {
//     return function (aNumber) {
//         return aNumber * multiplier
//     }
// }

const getMultiplier = multiplier => aNumber => aNumber * multiplier

const single = getMultiplier(1)
const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)

console.log(
    single(10),
    double(10),
    triple(10),
    quadruple(10)
);

// output: 10 20 30 40