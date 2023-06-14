enum boat {
    engine = 2,
    bow = 1,
    stern = 1
}

let numberOfEngine = boat.engine
console.log('Engines: '+numberOfEngine);

//é somente para a leitura dos valores. por isso que a linha de baixo dá erro.
//boat.engine = '2 engines'
//é como se fosse uma constante fiel, que ñ altera o valor nunca