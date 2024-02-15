const perguntas = [
    {
      pergunta: 'Qual é a função do operador "typeof" em JavaScript?',
      respostas: [
        ' Retorna o tipo de dado de uma variável ou expressão.',
        ' Retorna o valor de uma variável ou expressão.',
        ' Retorna se uma variável ou expressão é verdadeira ou falsa.',
      ],
      correta: 0,
    },
    {
      pergunta: 'O que o método "concat()" faz em JavaScript?',
      respostas: [
        ' Remove um elemento de um array.',
        ' Adiciona um elemento no início de um array.',
        ' Concatena dois ou mais arrays e retorna um novo array.',
      ],
      correta: 2,
    },
    {
      pergunta: 'Qual é a sintaxe correta para declarar uma função em JavaScript?',
      respostas: [
        ' function: minhaFuncao() {}',
        ' function minhaFuncao() {}',
        ' minhaFuncao = function() {}',
      ],
      correta: 1,
    },
    {
      pergunta: 'O que é um closure em JavaScript?',
      respostas: [
        ' Um tipo de loop.',
        ' Uma estrutura de controle de fluxo.',
        ' Uma função que tem acesso ao escopo externo no qual foi definida.',
      ],
      correta: 2,
    },
    {
      pergunta: 'Qual é a finalidade do método "forEach()" em um array em JavaScript?',
      respostas: [
        'Filtrar os elementos do array com base em uma condição.',
        'Executar uma função para cada elemento do array.',
        'Ordenar os elementos do array em ordem alfabética.',
      ],
      correta: 1,
    },
    {
      pergunta: 'O que o operador "===" faz em JavaScript?',
      respostas: [
        ' Verifica se dois valores são iguais, sem verificar o tipo de dados.',
        ' Verifica se dois valores são iguais, incluindo o tipo de dados.',
        ' Verifica se um valor é maior ou igual a outro valor.',
      ],
      correta: 1,
    },
    {
      pergunta: 'Como você declara uma variável global em JavaScript?',
      respostas: [
        ' Utilizando a palavra-chave "let" ou "const" fora de uma função.',
        ' Utilizando a palavra-chave "global" antes do nome da variável.',
        ' Utilizando a palavra-chave "var" fora de uma função.',
      ],
      correta: 2,
    },
    {
      pergunta: 'O que é JSON em JavaScript?',
      respostas: [
        ' Um método para selecionar elementos do DOM.',
        ' Um formato de dados para troca de informações.',
        ' Uma função para executar cálculos matemáticos complexos.',
      ],
      correta: 1,
    },
    {
      pergunta: 'Qual é o resultado de 10 + "5" em JavaScript?',
      respostas: [
        ' 105',
        ' 15',
        ' "105"',
      ],
      correta: 0,
    },
    {
      pergunta: 'O que o método "slice()" faz em uma string em JavaScript?',
      respostas: [
        ' Divide uma string em substrings com base em um separador.',
        ' Remove espaços em branco do início e do fim de uma string.',
        ' Retorna uma parte da string, selecionada a partir do início até o fim (ou até uma posição específica).',
      ],
      correta: 2,
    },
  ];
  
  const template = document.querySelector('template')
  const quiz = document.querySelector('#quiz')
  const corretas = new Set()
  
  const totalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span');
  
  for (let item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    for (let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent= resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (e) =>{
        const correta = e.target.value == item.correta
        corretas.delete(item);
        if (correta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de '+ totalPerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }