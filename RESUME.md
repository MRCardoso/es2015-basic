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