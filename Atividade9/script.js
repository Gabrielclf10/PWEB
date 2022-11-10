let num = 0, cresNum = 0, maiorNum = 0, i;
let matriz = [];

function retornaMaior(matriz){
    maiorNum = Math.max.apply(null, matriz)
    return maiorNum
}

function retornaCres(matriz){
    cresNum = matriz.sort(function(a,b){return a-b});
    return cresNum
}

for(i = 0; i < 3; i++) {
    num = parseInt(prompt("Digite um número: " ));
    matriz.push(num)
}

alert("O maior número: " + retornaMaior(matriz));
alert("Em ordem crescente: " + retornaCres(matriz));