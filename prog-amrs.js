// write a program to print armstrong

num=153
temp = num
rem=0
sum=0
while(num>0){
    rem =num%10 
    sum =sum + rem**3
    num  =parseInt(num/10)
}
if(temp ==sum){
console.log(` given number is armstrom`);
}
else{
    console.log(`given number is not armstrong`);
}

//write a program to display number are exponetial is in the range of 8 to 36 
//user can input power to find the exponential for a particular number 

