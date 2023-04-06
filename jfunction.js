/*｜by Akawatav｜jfunction｜v1.0.4｜関数追加するだけ｜*/
const getRandom = ( min, max ) => (max > min) ? Math.floor( Math.random() * (max + 1 - min)) + min : NaN
const division = (number1,number2) => Math.floor(number1 / number2)
const percent = (num1,num2) => num1 / 100 * num2
const get = {
    byid: name => document.getElementById(name),
    byclass: name => document.getElementsByClassName(name),
    bytag: name => document.getElementsByTagName(name),
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    sec: new Date().getSeconds(),
    mllsec: new Date().getMilliseconds(),
    day: ['日','月','火','水','木','金','土'][new Date().getDay()],
    pi: 3.1415926535897932384626433832795028841971693993,
    triangle: (height,base) => height * base / 2,
    square: (height,width) => height * width,
    circle: radius => radius * radius * get.pi,
    queryall: name => querySelectorAll(name),
    query: name => querySelector(name)
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
    decimal: num => (num > -1) ? parseFloat('0.' + ('' + num).split('.')[1]) : parseFloat('-0.' + ('' + num).split('.')[1])
}
const jfunction = {
    version:"v1.0.4",
    function:[
      "jfunction",
      "get",
      "getRandom",
      "log",
      "division",
      "query",
      "root",
      "portion",
      "percent",
      "$",
      "wait",
      "changesgin",
      "Absolute",
      "minus",
      "factorial"
      ],
    number:14
}
const $ = jfunction
 const wait = milliseconds => {
 let start = new Date().getTime()
 let end = 0
 while ( (end-start) < milliseconds) {
     end = new Date().getTime()
   }
 }
const changesgin = num => num * -1
const Absolute = num => (0>num) ? num * -1 : num
const minus = num =>  (0>num) ? num : num * -1
const factorial = {
 none: n => (n === 0) ? 1 : (n*factorial.none(n-1)),
 double : n => Math.pow(2,n/2) * factorial.none(n/2)
}
const parse = str => (str == 'true') ? true : false
const pass = function(){}
