// this whole code will print "10,20,1" as it will run and exicute line one by one thats why. it initially created global exicution contest

var x= 1;
a();
b();

console.log(x);


//for every function a separate exicution contest will create and assign the memory and code part.
function a(){
    var x= 10;
    console.log(x);

}

// for this also separate exicution contest will create in the call stack aftewr deleting the previous one.

function b(){
    var x= 20;
    console.log(x);

}