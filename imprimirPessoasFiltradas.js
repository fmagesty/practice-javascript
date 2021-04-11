<<<<<<< HEAD
const todos = [
    {
        "nome": "Buda",
        "pais": "India",
        "idade": 33
    },
    {
        "nome": "Jesus Cristo",
        "pais": "Israel",
        "idade": 33
    },
    {
        "nome": "Moises",
        "pais": "Israel",
        "idade": 33
    },
    {
        "nome": "Maome",
        "pais": "Arabia",
        "idade": 40
    },
    {
        "nome": "Ronaldinho Gaucho",
        "pais": "Brasil",
        "idade": 40
    }
];



function filtrarPessoas(pessoas, atributo, valor) {
    let pessoasFiltradas = [];
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i];
        if (pessoa[atributo] == valor) {
            pessoasFiltradas.push(pessoa);
        }
    }
    return pessoasFiltradas;
}


function imprimirPessoas(pessoas) {
    console.log('nome,idade,pais');
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i];
        console.log(`${pessoa['nome']},${pessoa['pais']},${pessoa['idade']}`);
    }
}

function imprimirPessoasFiltradas(pessoas, atributo, valor) {
    console.log(`Imprimindo pessoas com atributo = ${atributo} e valor = ${valor}`)
    const pessoasFiltradas = filtrarPessoas(pessoas, atributo, valor);
    imprimirPessoas(pessoasFiltradas);
}


// filtrarPessoas(todos, 'pais', 'Arabia');
// imprimirPessoas(todos);
imprimirPessoasFiltradas(todos, 'idade', 33);
=======
const todos = [
    {
        "nome": "Buda",
        "pais": "India",
        "idade": 33
    },
    {
        "nome": "Jesus Cristo",
        "pais": "Israel",
        "idade": 33
    },
    {
        "nome": "Moises",
        "pais": "Israel",
        "idade": 33
    },
    {
        "nome": "Maome",
        "pais": "Arabia",
        "idade": 40
    },
    {
        "nome": "Ronaldinho Gaucho",
        "pais": "Brasil",
        "idade": 40
    }
];



function filtrarPessoas(pessoas, atributo, valor) {
    let pessoasFiltradas = [];
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i];
        if (pessoa[atributo] == valor) {
            pessoasFiltradas.push(pessoa);
        }
    }
    return pessoasFiltradas;
}


function imprimirPessoas(pessoas) {
    console.log('nome,idade,pais');
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i];
        console.log(`${pessoa['nome']},${pessoa['pais']},${pessoa['idade']}`);
    }
}

function imprimirPessoasFiltradas(pessoas, atributo, valor) {
    console.log(`Imprimindo pessoas com atributo = ${atributo} e valor = ${valor}`)
    const pessoasFiltradas = filtrarPessoas(pessoas, atributo, valor);
    imprimirPessoas(pessoasFiltradas);
}


// filtrarPessoas(todos, 'pais', 'Arabia');
// imprimirPessoas(todos);
imprimirPessoasFiltradas(todos, 'idade', 33);
>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
