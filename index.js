
// Q:1

for(i=1; i<=60;i++){
    console.log(i*6)
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

// condition:3=odd number;
for(let num3=81; num3<=131; num3=num3+2){
    console.log("num3",num3)
}

// condition:4=even number;


for(let num4=206;num4<=311;num4=num4+2){
    console.log("num4",num4)
}


// Q:3
for(let table=1; table<=10; table++){
    console.log(table*5)
}

// Q:4

for(let timer=21;timer>=15; timer--){
    console.log("timer",timer)
}


// Q:5
// condition=1:

for(let value=1;value<=500;value++){
    if(value%3==0){
        console.log("value",value)
    }
}
// condition=2:

for(let values=1;values<=500;values++){
    if(values%5==0){
        console.log("values",values)
    }
}


// Q:6
let arr=[ ]

for (let m=0; m<100; m++){
    if (m%2==0){
        arr.push(m)
      
    }
}
console.log(arr)