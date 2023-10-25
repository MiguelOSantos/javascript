let num = [5, 8, 2, 6]

num.length // Ver quantas posições tem
num[3] = 6 //colocar em qualquer posição
num.push(7) // adicionar na ultima posição
num.sort() // colocar elementos em ordem crescente 
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}
