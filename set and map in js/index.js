//Set:"prints unique values of any data types. the elementscan not be repeatative.


let nums = new Set();

nums.add(1);
nums.add("abhi");
nums.add(1);
nums.add("giri");

console.log(nums);
console.log(nums.has(2));// check the value is present or not

//=================================================================================================================
//map:store information in key value pairs
console.log("map examples");
let map = new Map();
map.set(1,"abhi");
map.set(2,"kum");
map.set(3,"giri");
map.set(1,"abhishek");// replace fist value with abhishek
for(let [k,v] of map){
    console.log(k ,":" ,v);
}

