```
    // denição de valor default
    function test(param = 'es2015', val = null){
        return param+' - '+val;
    }
    // caso parametro não seja será atribuido valor default definido no metodo
    console.log(test(undefined, 'novas funcionalidades de JavaScrip'));
```