const getRandom=(n,t)=>t>n?Math.floor(Math.random()*(t+1-n))+n:NaN,division=(n,t)=>Math.floor(n/t),percent=(n,t)=>n/100*t,get={byid:n=>document.getElementById(n),byclass:n=>document.getElementsByClassName(n),bytag:n=>document.getElementsByTagName(n),year:(new Date).getFullYear(),month:(new Date).getMonth()+1,date:(new Date).getDate(),hour:(new Date).getHours(),minutes:(new Date).getMinutes(),sec:(new Date).getSeconds(),mllsec:(new Date).getMilliseconds(),day:["日","月","火","水","木","金","土"][(new Date).getDay()],pi:3.1415926535897931,triangle:(n,t)=>n*t/2,square:(n,t)=>n*t,circle:n=>n*n*get.pi,queryall:n=>querySelectorAll(n),query:n=>querySelector(n)},query={single:n=>document.querySelector(n),all:n=>document.querySelectorAll(n)},log=n=>console.log(n),root={square:n=>Math.pow(n,.5),cube:n=>Math.pow(n,1/3)},portion={integer:n=>Math.trunc(n),decimal:n=>n>-1?parseFloat("0."+(""+n).split(".")[1]):parseFloat("-0."+(""+n).split(".")[1])},jfunction={version:"v1.0.4","function":["jfunction","get","getRandom","log","division","query","root","portion","percent","$","wait","changesgin","Absolute","minus","factorial"],number:14},$=jfunction,wait=n=>{let i=(new Date).getTime(),t=0;while(t-i<n)t=(new Date).getTime()},changesgin=n=>n*-1,Absolute=n=>0>n?n*-1:n,minus=n=>0>n?n:n*-1,factorial={none:n=>n===0?1:n*factorial.none(n-1),double:n=>Math.pow(2,n/2)*factorial.none(n/2)},parse=n=>n=="true"?!0:!1,pass=function(){}
