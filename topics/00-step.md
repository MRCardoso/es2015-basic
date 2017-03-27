```
// function with argument with default value
// in case argument do not be informed, the defaul value will be used
function test(param = 'es2015', val = null)
{
    return param+' - '+val;
}
// result will be 'es2015 novas funcionalidades de JavaScrip'
console.log(test(undefined, 'novas funcionalidades de JavaScrip'));
```
