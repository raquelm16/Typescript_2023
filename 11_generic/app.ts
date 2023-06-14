function identity<T>(arg:T): T{
    console.log(typeof arg);
    return arg
}

console.log(identity('asd'));
console.log(identity(1));
