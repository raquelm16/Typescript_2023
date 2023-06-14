//jeito errado
let iDontKnow: any
iDontKnow = 'Test'
iDontKnow = 3
iDontKnow = true
console.log(iDontKnow);  //só vai imprimir o último, porque tá sempre sobre-escrevendo

//jeito certo
let undefinedList : any[] = ['Test', 3, true]
console.log(undefinedList);
