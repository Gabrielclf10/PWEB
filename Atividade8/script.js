const totalPessoas = 45;
var pessoas = [];
var count = 0;

do{
    var idade = Number(prompt(`Pesquisa de opinião
    Qual a sua idade?`));

    var sexo = Number(prompt(`Qual o seu sexo?
    1 - Masculino
    2 - Feminino`));

    
    var opiniao = Number(prompt(`Qual a sua opinião sobre o filme?
    1 - Ótimo
    2 - Bom
    3 - Regular
    4 - Péssimo`));

    pessoas.push({idade,sexo,opiniao})
    count++

}while (count < totalPessoas);

var idades = pessoas.map((pessoa) => pessoa.idade);
var IdadeMedia = mediaIdade(idades);

function mediaIdade(idades){
    var soma = 0;
    for(let count in idades)
    soma += idades[count];
    return soma/idades.length;
}

function maiorIdade(idades){
    return Math.max.apply(null,idades)
}

function menorIdade(idades){
    return Math.min.apply(null,idades)
}

function contaPessimo(pessoas){
    var contagem = 0
    pessoas.forEach((obj)=>{
        if(obj.opiniao === 4) contagem++
    })
    return contagem;
}

function porcentagemOtimoBom(pessoas){
    var contagem = 0
    pessoas.forEach((obj)=>{
        if(obj.opiniao === 1 || obj.opiniao === 2) contagem++
    })
    return ((contagem/pessoas.length) * 100)+"%";
}

function contaHomens(pessoas){
    var contagem = 0
    pessoas.forEach((obj)=>{
        if(obj.sexo === 1) contagem++
    })
    return contagem;
}

function contaMulheres(pessoas){
    var contagem = 0
    pessoas.forEach((obj)=>{
        if(obj.sexo === 2) contagem++
    })
    return contagem;
}

alert(`Resultados da Pesquisa:
        Média da idade das pessoas: ${mediaIdade(idades)}
        Idade da pessoa mais velha: ${maiorIdade(idades)}
        Idade da pessoa mais nova: ${menorIdade(idades)}
        Quantidade de "Péssimo": ${contaPessimo(pessoas)}
        Porcentagem de "Otimo" ou "Bom": ${porcentagemOtimoBom(pessoas)}
        Quantidade total de mulheres: ${contaMulheres(pessoas)}
        Quantidade total de homens: ${contaHomens(pessoas)}
`);