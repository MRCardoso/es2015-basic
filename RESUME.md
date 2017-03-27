## New resenved words  and const
#### let
```
var number = 1;
{
    let number = 2;
    console.log('block scope=', number); // output block scope=2
}
console.log('global scope=', number);// output global scope=1
```

#### const
    * Cannot be declared without value
    * Your value cannot be change after defined
    * Internal properties can be change
```
const PI = 3.14;
PI = 2;// output 'TypeError: Assignment to constant variable.'
const webApp = {
    "frontEnd": ['javascript','css','html'],
    "backEnd": ['PHP', 'Java']
};
webApp.frontEnd = ['angular'];
console.log(webApp.frontEnd)// output ['angular']
webApp = {}; output 'TypeError: Assignment to constant variable.'
```

## Default Value
```
function whoIAm(name = 'Marlon')
{
    return name;
}
whoIAm(); // output 'Marlon'
whoIAm('calr');// output 'calr'
```

## Template String
```
var name = 'Marlon';
var birthYear = 1992;
var template  = `My name is: ${name}, I was born in ${birthYear}`
console.log(template);// output 'My name is Marlon, I was born in 1992'
```

## Destructuring
#### Object {}
```
var person = {name: 'Ana', age: 20};
var {name, age} = person;
console.log(name, age);// output Ana 20
```
#### Array []
```
var [n1,,n3,,n5,n6 = 0] = [10,7,9,8];
console.log(n1,n3,n5,n6);// output 10 9 undefined 0
```

## spread AND rest
#### Spread
```
function info(name, lastName)
{
    return `Name: ${name}, Last Name: ${lastName}`
}
var params = ['Marlon', 'Cardoso'];
console.log(info(...params)); // output Name: Marlon, Last Name: Cardoso
```
#### Rest
```
function cenverter(...params)
{
    return `Radiations: ${params.join('')}`;
}
console.log(cenverter(['Alfa', 'Beta','Gama'])); // output Alfa,Beta,Gama
```

## Arrow function
```
// FODA do.ca.ra.le.o...
var animes = [{name:'DragonBall'},{name:'Naruto'},{name: 'Bleach'}];
console.log(animes.map(item => item.name));// output wait a minute....[ 'DragonBall', 'Naruto', 'Bleach' ]
```

[&laquo; back](https://github.com/MRCardoso/es2015-basic) |
[next &raquo;](https://github.com/MRCardoso/es2015-basic/blob/master/default_value.js)
