/*function greet(name)
{
    let msg="Hello"+name+" World";
    console.log(msg);
}
greet("suresh");
let name1="Unknown";
console.log(name1);*/
localStorage.getItem('msg');
const product={name:"Socks",price:4.6,rating:{
    star:4.5
},
fun  :function hello(){
    console.log("hello");
}
};
/*console.log(product);
console.log(product.name);
product.extra='Extra';
console.log(product);
delete product.extra;
console.log(product);
console.log(product.rating);
product.fun();

console.log( JSON.stringify(product));

const jsonString = JSON.stringify(product);
console.log(JSON.parse(jsonString));*/
localStorage.setItem('msg','hello');