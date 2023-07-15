let num=38;
function sumNumber(num){
    if(num<10) return num;
    let sum=0;
    let str=num.toString();
    let splited=str.split("");
    
    for(let i=0;i<splited.length;i++){
        sum += +splited[i];
    }
    return sumNumber(sum);
}
console.log(sumNumber(num));
