/*｜by Akawatav｜jfunction｜v1.0.2｜関数追加するだけ｜*/
const getRandom = ( min, max ) => {
    if(max > min){
        return Math.floor( Math.random() * (max + 1 - min)) + min;
    } else {
        return "NaN";
    }
}
const division = (number1,number2) => Math.floor(number1 / number2);
const percent = (num1,num2) => num1 / 100 * num2;
const get = {
    byid: name => document.getElementById(name),
    byclass: name => document.getElementsByClassName(name)
}
const query = {
    single: name => document.querySelector(name),
    all: name => document.querySelectorAll(name)
}
const log = log => console.log(log)
const root = {
    square: num => Math.pow(num,0.5),
    cube: num => Math.pow(num,1/3)
}
const portion = {
    integer: num => Math.trunc(num),
    decimal: num =>{
        if(num > -1){
            return parseFloat('0.' + ('' + num).split('.')[1]);
        } else {
            return parseFloat('-0.' + ('' + num).split('.')[1]);
        }
    }
}
const jfunction={
    version: () => "v1.0.2",
    function: () => ["jfunction":"get":"getRandom":"log":"division":"query":"root":"portion":"percent"],
    number: () => '9'
}
