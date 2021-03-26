// Função que recebe array como argumento, e retorna um objeto
const getErrorMessage = errorType => ({
    'erro-1': 'o tipo de erro ocorrido foi 1',
    'erro-2': 'o tipo de erro ocorrido foi 2',
    'erro-3': 'o tipo de erro ocorrido foi 3',
    'erro-3': 'o tipo de erro ocorrido foi 3',
})[errorType] || 'Mensagem genérica do curto-circuito OR'

const request = {
    "result": "error",
    "error-type": "erro-a1"
}

const printError = getErrorMessage(request['error-type'])

console.log(printError)