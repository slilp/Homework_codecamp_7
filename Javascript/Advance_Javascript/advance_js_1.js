
//1. ให้เขียนโปรแกรมที่หาจำนวนเฉพาะตั้งแต่ 1 ถึง 100

const primeNumber1 =(fromNum,toNum)=>{
    for(let i = fromNum ; i <= toNum ; i++){
      if(isPrime(i)){
        console.log(i);
      }
    }
}


const isPrime =(n)=>{
  if(n<=1) return false;

  for(let i = 2; i< n;i++){
    if(n%i ==0)
      return false;
  }

  return true;
}

console.log('ข้อ 1');
primeNumber1(1,100);



//2. ให้เขียนโปรแกรมที่รับ input เป็นตัวแปรชื่อ n โดยเมื่อรับมาแล้วให้คืนค่าออกมาเป็น List ของจำนวนเฉพาะที่มีค่าไม่มากกว่า n

const primeNumber2 =(num)=>{
  let result = [];
  for(let i = 1 ; i <= num ; i++){
    if(isPrime(i) ){
      result.push(i);
    }
  }
  return result;
}

console.log('\nข้อ 2');
console.log('input 9');
console.log(primeNumber2(9));
console.log('input 11');
console.log(primeNumber2(11));
console.log('input 942');
console.log(primeNumber2(942));


//3. ให้เขียนโปรแกรมที่รับ input n และแสดง Array ของจำนวนเฉพาะ n ตัวแรก

const primeNumber3 =(num)=>{
  let stopCount = 0 ;
  let stop = true;
  let result = [];
  let i = 1;
  while(stop){
    if(isPrime(i)){
      result.push(i);
      stopCount++;
      if(stopCount == num) stop = false;
    }
    i++;
  }

  return result;

}

console.log('\nข้อ 3');
console.log('input 4');
console.log(primeNumber3(4));
console.log('input 5');
console.log(primeNumber3(5));
console.log('input 160');
console.log(primeNumber3(160));


//4. ให้เขียนโปรแกรมที่หาผลบวกจำนวนเฉพาะ n ตัวแรก

const primeNumber4 =(num)=>{
  const result = primeNumber3(num);
  return result.reduce((a, b) => a + b, 0);
}

console.log('\nข้อ 4');
console.log('input 4');
console.log(primeNumber4(4));

//5. ให้เขียนโปรแกรมที่รับค่า n เข้ามาและให้บวกค่าของลำดับต่อไปนี้ 1 + 2 + 2 + 3 + 3 + 3 + ... + n + ... + n (n ตัว)

const sumDupNum =(num)=>{
  let result = 0 ;

  for(let i=1;i<=num;i++){
    result = result + (i*i);
  }

  return result;
}

console.log('\nข้อ 5');
console.log('input 3');
console.log(sumDupNum(3));

//6. ให้เขียนโปรแกรมหาผลบวกลำดับต่อไปนี้ 1 - 2 - 3 + 4 - 5 + 6 - 7 + 8 + 9 + 10 - 11 + ... (จำนวนที่เป็นจำนวนเฉพาะให้ติดลบ)

const primeNumber101 =(num)=>{

  let result = 0 ;

  for(let i=1;i<=num;i++){
    let add = +i;
    if(isPrime(i)) add = -i;
    result = result + add ;
  }

  return result;

}

console.log('\nข้อ 6');
console.log('input 11');
console.log(primeNumber101(11));


//7. ให้เขียนโปรแกรมหา ห.ร.ม ของ List ของตัวเลข

const gratestCommonFactor =(num)=>{

  let result = num[0];

  for(let i= 0 ; i<num.length ;i++){
      result = gcd(result,num[i+1]);
  }

  return result;

}

const gcd = (a, b)=> {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}


console.log('\nข้อ 7');
console.log('input [ 6, 8, 16 ]');
console.log(gratestCommonFactor([ 6, 8, 16 ]));


//8. ให้เขียนโปรแกรมหา ค.ร.น. ของ List ของตัวเลข

const leastCommonMultiple  =(num)=>{

  let result = num[0];

  for(let i= 0 ; i<num.length ;i++){
    if(num[i+1])
      result = lcm(result,num[i+1]);
  }

  return result;

}

const lcm =(a, b)=>{
  return a*b/gcd(a,b);
} 

console.log('\nข้อ 8');
console.log('input [ 24, 48, 96 ]');
console.log(leastCommonMultiple([ 24, 48, 96 ]));
console.log('input [ 2, 3, 5, 7 ]');
console.log(leastCommonMultiple([ 2, 3, 5, 7 ]));

//9.  ให้เขียนโปรแกรมหา factorial n ( n! = 1×2×3×4×...×n )

const factorial =(n)=>{
  let result = 1 ;
  for(let i =1 ; i<= n ; i++){
    result = result * i
  }
  return result;
}

console.log('\nข้อ 9');
console.log('input 4');
console.log(factorial(4));

//10. ให้เขียน function ที่รับ List ของ ตัวเลข และ รับค่า boolean ถ้า boolean มีค่าเป็น true เรียงลำดับตัวเลขจากน้อยไปหามาก ถ้า boolean เป็น false เรียงลำดับตัวเลขจากมากไปน้อย

const typeSort =(num,type)=>{
  if(type){
    return num.sort(s=>1);
  }else{
    return num.sort(s=>-1);
  }
}

console.log('\nข้อ 10');
console.log('input [1,5,6] จากน้อยไปมาก');
console.log(typeSort([1,5,6],true));
console.log('input [1,5,6] จากมากไปน้อย');
console.log(typeSort([1,5,6],false));


//11.  ทำเหมือนข้อ 10 แต่ห้ามใช้ฟังก์ชัน sort() และ reverse()

const typeSort2 =(num,type)=>{
  if(type){
    return lowToHigh(num);
  }else{
    return highToLow(num);
  }
}

const lowToHigh =(num)=>{

  for(let i=0;i<num.length-1;i++){
    for(let j=i;j<num.length-1;j++){
      if(num[j+1]<num[i]){
        let temp = num[i];
        num[i] = num[j+1];
        num[j+1] = temp;
      }
    }
  }

  return num;

}

const highToLow =(num)=>{
  for(let i=0;i<num.length-1;i++){
    for(let j=i;j<num.length-1;j++){
      if(num[j+1]>num[i]){
        let temp = num[i];
        num[i] = num[j+1];
        num[j+1] = temp;
      }
    }
  }

  return num;
}

console.log('\nข้อ 11');
console.log('input [10,5,6,1] จากน้อยไปมาก');
console.log(typeSort2([10,5,6,1],true));
console.log('input [10,5,6,1]จากมากไปน้อย');
console.log(typeSort2([10,5,6,1],false));


//12. ถ้าจำนวนนับที่น้อยกว่า 16 ที่เป็นพหุคูณของ 3 หรือ 5 เท่ากับ 3, 5, 6, 9, 10, 12 และ 15 โดยมีผลรวมเท่ากับ 60 แล้ว (3 + 5 + 6 + 9 + 10 + 12 + 15 = 60) 
//จงหาผลรวมของจำนวนนับ ที่เป็นพหุคูณของ 3 หรือ 5 ที่มีค่าน้อยกว่า 1000








//13.หาผลรวมของเลขที่ใส่เข้ามา เช่น 130,120 จะได้ 1+3+0+1+2+0 = 7


const sumInput =(...num)=>{
    let result = 0 ;

    for(let i = 0 ; i < num.length ; i++){
      for(let j=0 ; j < num[i].toString().length ; j++){
        result = result + parseInt(num[i].toString()[j])
      }
    }
    return  result;
}

console.log('\nข้อ 13');
console.log('input 130,120');
console.log(sumInput(130,120));


//14. ผลรวมของเลขโดดของ n! เช่น 6! = 120 1 + 2 + 0 = 3

const sumInput2 =(num)=>{

  let result = 0 ;
  let fac = factorial(num);
  for(let i = 0 ; i < fac.toString().length ; i++){
      result = result + parseInt(fac.toString()[i])
  }

  return  result;

}

console.log('\nข้อ 14');
console.log('input 6');
console.log(sumInput2(6));

//15. จงหาจำนวนเลขโดดตั้งแต่ 1 ถึง 4,129,980

const sumDigit =(firstNum,lastNum)=>{

  let result = 0 ;

  for(let i= firstNum; i <= lastNum ; i++){
    result  = result + sumInput(i) ;
  }

  return  result;

}

console.log('\nข้อ 15');
console.log('input 1 - 4129980');
console.log(sumDigit(1,4129980));