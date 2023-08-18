
//palindrom

num=121
temp = num
console.log(` given  number is : ${num}`);
remainder=0
reverse=0
while(num>0){
    remainder=num%10 // 123%10 =3
    reverse=(reverse*10)+remainder //0*10
    num  =parseInt(num/10)
}
if(temp ==reverse){
console.log(` given number is palindrom`);
}
else{
    console.log(`given number is not palindrom`);
}