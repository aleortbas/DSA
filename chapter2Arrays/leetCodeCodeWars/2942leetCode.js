const words = ["leet", "code", "sapo", "perro"]
const x = "e"

const indeces = []

for (let i = 0; i < words.length; i++) {
    if(words[i].toLocaleLowerCase().includes(x)){
        indeces.push(i)
    }
    return indeces
}

console.log("INDECES: ", indeces);
