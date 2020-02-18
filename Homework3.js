


// ex 1

let s1 = "_, we have a _.";
let arr = ["Houston","problem"];
for(i = 0; i < arr.length; i++){
    s1 = s1.replace("_" , arr[i])
}
console.log(s1);




// ex 2

let arr = [8, 0 , 1, 'hey', 12, 5, true, '2', null, 7, 3];
let b = [];
let j = 0, i = 0;
for(i = 0 ; i < arr.length; i++){
  if( Number.isInteger(arr[i]) == true){
    //if(arr[i] !== null){
      b[j] = arr[i];
      j++;
    }
  } 
//}
j=0;
//console.log(b.length);
//console.log(b);
let k = b.length - 1;
let c = [b.length];
for(i = 0 ; i < b.length; i++){
  if(b[i]==0 || b[i] % 2 == 0 ){
    c[k] = b[i];
    k--;
  }else{
    c[j] = b[i];
   j++;
  }
}
console.log(c);







// ex 3

let arr = [1, '10', 'hi', 2, 3];
let i = 0, j = 0, k = 0;
for(i = 0; i < arr.length; i++){
  if(Number.isInteger(arr[i])== true){
    j++;
  }else{
    k++;
  }
}
//console.log(j);
//console.log(k);
let s = "Numbers:" + j + ", Strings:" + k;
console.log(s);






// ex 4

let arr = ["anymore", "raven", "me", "communicate"];
let i = 0;
let j = 0;
let k = 0;
let b = [];
for(i = 0; i < arr.length; i++){
    b[i] = arr[i].length;
}
console.log(b);
let max = 0;
let min = 0;
let l = b.length;
max = b[0];
min = 0;
for(i =0; i < l ; i++){
    if(b[i] > max){
        max = b[i];
    }
}
min = max;
for(i =0; i < l ; i++){
    if(b[i] < min){
        min = b[i];
    }
}
//console.log(max);
//console.log(min);
console.log(min + max);





// ex 5

let arr = [1, 12, 4];
let i = 0;
let s = 0;
for(i =0; i < arr.length; i++){
    s = s + arr[i];
}
console.log(s);







// ex 6


let arr = [3, 7, 12 ,5, 20, 0];
let p = 1;
let i = 0;
let j = 0;
let b = [];
for(i = 0; i< arr.length -1 ; i++){
b[i]= arr[i] * arr[i + 1];
}
console.log(b);






