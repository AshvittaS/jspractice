/*document.body.innerHTML = 'Hello';
alert("I");
document.body.innerHTML="";
document.body.innerHTML=Math.round(2894)/100;
alert(`Items ${5+3} $${3}`);*/
console.log('hello'.length);
console.log('hello'.toUpperCase());
//This is auto boxing
//it not work wiht null & undefined
const object1 = {
  //reference
   message: "hello",
};
const object2 =object1;
console.log(object1);
object1.mo=34;
console.log(object2);

const object3={
    message:'hello'
};
console.log(object3.message===object1.message);
console.log(object2===object1);
