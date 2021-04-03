// Just practing how to use the reduce method in JS.

numerosArr = [2, 3, 7, 10];

const multiplicacaoReduce = numerosArr.reduce((valorAcumulado, numeroDoArray) => valorAcumulado * numeroDoArray, 1)

console.log(multiplicacaoReduce)

const pessoas = [
      {
        nome: 'Ayrton',
        idade: 27
      },
      {
        nome: 'João',
        idade: 14
      },
      {
        nome: 'Maria',
        idade: 23
      },
      {
        nome: 'Joana',
        idade: 21
      },
      {
        nome: 'Lucas',
        idade: 32
      },
      {
        nome: 'Mateus',
        idade: 15
      },
      {
        nome: 'Isa',
        idade: 23
      },
      {
        nome: 'Luiza',
        idade: 17
      }
    ];

const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';

valorAcumulador[propMaiorOuMenor].push(valorArray);

    return valorAcumulador;
}, { maiores: [], menores: []})

console.log('pessoasAgrupadas', pessoasAgrupadas);