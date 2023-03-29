/*｜by Akawatav｜jfunction｜v1.0.0｜関数追加するだけ｜*/
const getRandom = function ( min, max ){
    let random = Math.floor( Math.random() * (max + 1 - min)) + min;
    if(max > min){
        return random;
    } else {
        return "NaN";
    }
}
const division = function (number1,number2){
    let division = Math.floor(number1 / number2);
    return division;
}
const version = "v1.0.0";
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
