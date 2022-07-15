function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6

function newFunction2(name = 'oscar', age = 32, country = "MX"){
    console.log(name, age, country)
}

newFunction2();
newFunction2('Ricardo', 23 , "CO");

let hello = "Hello" ;
let world = "World" ;
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhhrase2 = `${hello} ${world}`; //ECMA SCRIPT 6
console.log(epicPhhrase2);

let lorem = "There are many variations of passages of Lorem Ipsum \n"
+ "otra frase epica que necesitamos" 

//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log (lorem);
console.log (lorem2);

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX',
}

console.log(person.name, person.age, person.country)

let {name, country} = person;
console.log(name, country);


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);


{
    var globalVar = "Global Var";       // Ejemplificacion
}                                       // ---------------
{
    let globalLet = 'Global let';       //  Scope 
    console.log(globalLet);             //  global (var)
}                                       //  VS
console.log(globalVar);                 //  Scope
console.log(globalLet);                 //  Local (let)

const a = 'b'; // constante por lo tanto ya no puede cambiar
a = 'a' // su valor
console.log (a);

let name = 'oscar';
let age = 32;

obj = { name: name, age: age};

obj2 = {name, age};
console.log(obj2)

const names = [
    { name: 'Oscar', age: 32},
    { name: 'Yesica', age: 27}
]

let listOfNames = names.map(function (item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve ('Hey!');
        } else {
            reject ('Ups!!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));

const hello = require('./module');
console.log(hello());

function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);