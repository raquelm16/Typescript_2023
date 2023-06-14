function somar(x:number,y:number):number{
    return x+y
}

console.log(somar(5,6));
console.log(somar(5,'5')); //tipo string dá erro, já colocamos um parametro pra obrigá-lo a usar number


function bemVindo(saudacao?:string, nome:string){
    if(saudacao){
        console.log(`Olá $(saudacao) $(nome)`);
    } else {
        console.log(`Olá $(nome)`);
    }
}

bemVindo('Sr','Matheus');
bemVindo(undefined,'Lucas');

