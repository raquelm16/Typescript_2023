function somar(x, y) {
    return x + y;
}
console.log(somar(5, 6));
console.log(somar(5, '5')); //tipo string dá erro, já colocamos um parametro pra obrigá-lo a usar number
function bemVindo(saudacao, nome) {
    if (saudacao) {
        console.log("Ol\u00E1 $(saudacao) $(nome)");
    }
    else {
        console.log("Ol\u00E1 $(nome)");
    }
}
bemVindo('Sr', 'Matheus');
bemVindo(undefined, 'Lucas');
