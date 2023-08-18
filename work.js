num1=410
num2=70
num3=100
num4=890

if(num1>num2 && num1>num2 && num1>num4){
    console.log(`${num1} is smalest`);
}
else if( num2>num3){
    console.log(`${num2} is smalest`);
}
else if(num3>num4){
console.log(`${num3} is smalest`);
}
else{
    console.log(`${num4}`);
}
console.log(`-----------------------------------------------------`);

num1=40
num2=78
num3=98
 
if(num1>num2 && num1>num3){
    if(num2>num3){

    console.log(`second largest number is ${num2}`);
    console.log(`decending order is ${num1},${num2},${num3}`);
}
else{
    console.log(`second largest number is ${num3}`);
    console.log(`decending order ${num1},${num3},${num2}`);
}
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`second largest number is ${num3}`);
        console.log(`decending order is ${num2},${num3},${num1}`);
    }
    else{
        console.log(`second largest number is ${num2}`);
        console.log(`decending order is ${num2},${num1},${num3}`);
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`second largest number is ${num1}`);
        console.log(`decending order is ${num3},${num1},${num2}`);
    }
    else{
        console.log(`second largest number is ${num2}`);
        console.log(`decending order is ${num3},${num2},${num1}`);
    }
}
console.log(`---------------------------------------------------------------`);

i=0
while(i<3){
    console.log(`athul `);
    i++
    
}
console.log(`----------------------------------------------------------------------`);

i=1
while(i<=5){
    console.log(i);
    i++
}
console.log(`---------------------------------------------------------------------------`);
i=5
while(i>=1){
    console.log(i);
    i--
}
console.log(`-------------------------------------------------------------------------------`);
i=1
while(i<=50){
if(i%2==0){
    console.log(i);
}
    i++
}  
console.log(`-------------------------------------------------------------------------------------`);

i=1
sum=0
while(i<=10){
    sum+=i
    i++
    console.log('result:', sum);
}

console.log(`-----------------------------------------------------------------`);

i=1
while(i<50){
    if(i%2==1)
    console.log(i);
    i++
}
console.log(`------------------------------------------`);

i=1
sum=0
while(i<=5){
    sum+=i
    i++
}
console.log(`result is:${sum}`);

console.log(`-------------------------------------------------------`);


//4 4936

i=0
input=4
sum=0
str=''
while(i<input){
    str=str+input
    sum=sum+Number(str)
    i++
}
console.log(sum);

console.log(`-------------------------------------------------------------`);

input=3
j=0
pro=2
str=''
while(i<input){
    str=str+j
    j++
}
pro=input*Number(str)
console.log(pro);

console.log(`---------------------------------------------------------`);

num=123
rem=0
rev=0
while(num>0){
    rem=num%10
    rev=rev(rev*10)+rem
    num= parseInt(num/10)
}
console.log(`revers of the num : ${rem}`);


console.log(`---------------------------------------------`);

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
 
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));