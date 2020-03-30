const readline = require('readline-sync')
function start() {
        const content = {}
        content.searchTerm = askAndReturnSearchTerm()
        content.prefix = askAndReturnPrefix()
        function askAndReturnSearchTerm() {
                return readline.question('Type a Wikipedia search term: ')
        }
function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'choose one option: ') // devolve os indices
    const selectedPrefixText = prefixes[selectedPrefixIndex] // retorna o texto do índice escolhido
    return selectedPrefixText // vai retornar o valor do texto e injetar na propriedade content.prefix
        }
        console.log(content)
}

start() 