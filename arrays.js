let num = [5,8,2,9,3]
console.log(`Vetor ORIGINAL:${num}`)
num.sort()
console.log(`Vetor ordem CRESCENTE ${num}`)
num.push(1)
console.log(`Adicionando mais um valor ao vetor ${num}`)
num.sort()
console.log(`Reordenando o vetor novamente para ORDEM CRESCENTE ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)

console.log(`******** PERECORRENDO O VETOR COM FOR ***********`)
let valores = [8,1,7,4,2,9]
for(let pos =0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`******** PERECORRENDO O VETOR COM FOR IN***********`)
for ( let pos in valores ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
