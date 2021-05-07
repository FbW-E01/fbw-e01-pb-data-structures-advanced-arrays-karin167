//1
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
const ordersamount = orders.map(function(thing){
    return thing.amount;
})
const total = ordersamount.reduce(function(acc, current){
    return acc + current;
})

 console.log(total);
 console.log(ordersamount);

console.log("=================================")
//2

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const foo = (arr)=> {
      const total2 = arr.map(function(x){
      return x + 1;
    }) 
      return total2;
}

console.log(foo(arrayOfNumbers));



console.log("=================================")
//3
const filterEvens = (arr) => {
const filter = arr.filter(function(y){
    return y % 2 === 0;
})
return filter
}
console.log (filterEvens([1,2,3,11,12,13]));
console.log (filterEvens([22,2,31,110,6,13]));

console.log("=================================")
//4
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterName = (arr, arr6) => {
    const filter3 = arr.filter(function(g){
         if (g.includes(arr6)) { 
             return true;
            }
         return false;
        
        });
        return filter3
}
console.log(filterName(friends, "ka"));
console.log(filterName(friends, "e"));

console.log("=================================")
//5

const sum = (arr1) => {
    const red = arr1.reduce(function(num1, num2){
        return num1 + num2;
    })
    return red;
}
console.log(sum([1,2,3,4,5]));
console.log(sum([6,7,7]));

console.log("=================================")
//6

const numbers = (arr0) => {
    const namarr = arr0.map(function(x){
        return Math.sqrt(x);
    })
    return namarr;
}
console.log(numbers([9,30,60,3,2]));