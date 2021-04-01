// return a random number from a list

const lista = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const randomNumGenerator = (arr) => {
    let random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random)
}

randomNumGenerator(lista)



