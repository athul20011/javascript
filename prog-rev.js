//write a program to revers a number
//

num=123
remainder=0
reverse=0
while(num>0){
    remainder=num%10 // 123%10 =3
    reverse=(reverse*10)+remainder //0*10+3=3 
    num  =parseInt(num/10) 
}
console.log(`reverse of a given number is: ${reverse}`);

