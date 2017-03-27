// function with argument with default value
// in case argument do not be informed, the defaul value will be used
function test(param = 'es2015', val = null)
{
    return param+' - '+val;
}
// result will be 'es2015 novas funcionalidades de JavaScrip'
console.log(test(undefined, 'novas funcionalidades de JavaScrip'));

// need edit
// ==================valor padrao===============================
// forma antiga:
// 1 maneira
function soma1(a, b){
    // se for verdadeiro retorna parametro, qualquer valor maior que 0
    // quando o valor for 0, será false, e pega valor default 1
    a = a || 1;
    b = b || 1;
    return a + b;
}
console.log(soma1(), soma1(2,3), soma1(0)/*gera bug*/);
//2 maneira
function soma2(a, b){
    // se for verdadeiro retorna parametro, qualquer valor maior que 0
    // quando o valor for 0, será false, e pega valor default 1
    a = a !== undefined ? a : 1;
    b = b !== undefined ? b : 1;
    return a + b;
}
console.log(soma2(), soma2(2,3), soma2(0));
// 3 maneira
function soma3(a,b){
    // toda função js tem implicitamente acesso a um array(arguments) que são os argumento do metodo 
    a = (0 in arguments) ? a : 1;
    b = (1 in arguments) ? b : 1;
    return a + b;
}
console.log(soma3(), soma3(2,3), soma3(0));
// ======================nova sintaxe==============================
function somaNova(a = 1, b = 1){ return a + b; }
console.log(somaNova(), somaNova(2,3), somaNova(0));
// aceita tanto expressão como chamada de função
function defVal(){ return 2;}
function somaFunc(a = defVal() + 1, b = defVal()){ return a + b; }
console.log(somaFunc(), somaFunc(2,3), somaFunc(0));

function click(callback = function(){}){
    callback();
}
click(); // ok
click(undefined);//ok
click(null);//erro 'typeError: callback is not a function'
