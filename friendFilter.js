<<<<<<< HEAD
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

let names = ["Ryan", "Kieran", "Jason", "Yous"];

function friend(friends) {
    let amigos = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            amigos.push(friends[i]);
        }
    }
    console.log(amigos);
    return amigos;
}

friend(names);
=======
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

let names = ["Ryan", "Kieran", "Jason", "Yous"];

function friend(friends) {
    let amigos = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            amigos.push(friends[i]);
        }
    }
    console.log(amigos);
    return amigos;
}

friend(names);
>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
