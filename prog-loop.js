//write a program to print 3 times java script

i =0
while(i<3){
console.log(`java script`);
i++
}
console.log(`-------------------------------------------------------------------`);

//write a program to print numbers from 1 to 5  
//write a  program to print 5 to 1
//write a program to print all even numbers from 1 to 50
// write a program to print sum of all numbers from 1 to 10

i =1
while(i<=5){
    console.log(i);
    i++
}
console.log(`------------------------------`);

i=5
while(i>=1){
    console.log(i);
    i--
}
console.log(`--------------------------------------------------`);

i=1
while(i<=50){
    if(i%2==0){
        console.log(i);
    }
    i++
}
console.log(`-----------------------------------------------`);

i=1
while(i<=50){
    if(i%2!=0){
        console.log(i);
    }
    i++
}

console.log(`-------------------------------------------------------------------`);

i=1
sum=0
while(i<=10){
sum+=i
i++
}
console.log(`result :`, sum);

console.log(`----------------------------------------------------------------------------`);
  
//input    2      3         4
//output   24     369       4936
//         2*12   3*123     4*1234 
//         2+22   3+33+333  4+44+444+4444


input = 3
i=1
str=''
sum=0 
while(i<=input){
    str= str+input // 333
    sum=sum+ Number(str) //369
    i++
}
console.log(`result`, sum);

console.log(`---------------------------------------------------------------------`);

inp=3
j=0
str=''
pro=2
while(j<=inp){
    str=str+j
    j++
    console.log(typeof(str));
}
pro=inp*Number(str)
console.log(pro);

console.log(`--------------------------------------------------`);
