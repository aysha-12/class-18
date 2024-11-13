
// Q:1

for(i=1; i<=60;i++){
    console.log("I will invest at least 6 hrs every single day for next 60 days!-",i)
}

// Q:2

// condition:1=odd number;

for(let num=61;num<100; num+=2){
    

    console.log("num=",num)

}
// condition:2=even number;

for(let num2=78; num2<=98;num2=num2+2){
    console.log("num2",num2)
}

// // condition:3=odd number;

let sum=0;
for(let num3=81; num3<=131; num3++){
    
      if(num3%2 !== 0){
        sum=sum+num3
        // console.log(num3)

      }
}
console.log(sum)

// condition:4=even number;

let take=0;
for(let num4=206;num4<=311;num4=num4+2){
   if(num4%2 === 0){
    take=take+num4;
   }
}
console.log(take)


// Q:3
for(let table=1; table<=10; table++){
    console.log(table*5)
}

// Q:4

for(let timer=21;timer>=15; timer--){
    console.log("timer=",timer)
}


// Q:5
// condition=1:

let sumnumber=0;
for(let value=1;value<=500;value++){
    if(value%3==0 && value%5==0){
        // console.log("value",value)
      sumnumber+=value
    }
}

console.log(sumnumber)



// Q:6

let keep=[23,15,28,50,69,60,40,28,46,20,23,37,42];
let arr=[ ];

for (let m=0; m<keep.length; m++){
    // console.log(keep[m])
     if (keep[m]%2 == 0){
         arr.push(keep[m])
      
    }
}
 console.log(arr)