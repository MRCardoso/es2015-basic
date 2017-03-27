## Default Value, in function, destructors...
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

## Destructuring {} or []
```
// Object
var person = {name: 'Ana', age: 20};
var {name, age} = person;
console.log(name, age);// output Ana 20
// Array
var [n1,,n3,,n5,n6 = 0] = [10,7,9,8];
console.log(n1,n3,n5,n6);// output 10 9 undefined 0
```