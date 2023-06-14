class Animal {
    andar(){
        console.log("O animal andou");
        
    }
}

class Cachorro extends Animal {
    nome: string;
    constructor(nome: string){
        super();
        this.nome = nome;
    }
    latir() {
        console.log("Au au");
    }
}