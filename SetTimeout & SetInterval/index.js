// simple way SetTimeout
function display(){
    console.log("Abhishek")
}
display();
setTimeout(display, 9000);

//by passin g anonymous function
setTimeout(function(){
    console.log("Giri learning Js");
}, 2000)


//setInterval
function fn(){
    if(counter ==5){
        clearInterval(timer) //this will stop from goes in infinity loop
    }else{
        console.log("hello")
        counter++
    }
}
let timer= setInterval(fn, 1000)
let counter=0