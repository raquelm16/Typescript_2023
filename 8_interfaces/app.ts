function imprimirNome(obj: {nome:string}){
    console.log(obj.nome);
}

let pessoa = { nome: 'Matheus', idade: 29};
imprimirNome(pessoa);