i=0
j=1
sum=0
num=0
while(num<10){
    sum=i+j//5
    i=j//2
    j=sum//3
    console.log(i);
    num++  
}
console.log(`----------------------------------------------------------------`);
///exponesal


power=2
num=1
while(num<=36){
    if(8<=num**power && num**power<=36){
        console.log(num);
    }
    num++
}
