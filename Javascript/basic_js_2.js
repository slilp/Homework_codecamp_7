// เขียนโปรแกรมที่รับค่า a และ b จาก prompt อย่างละครั้ง และให้เช็คว่า a / b 
// เป็นเศษส่วนอย่างต่ำไหม ถ้าเป็นให้แสดง alert(a / b) ออกมา ถ้าไม่เป็นเศษส่วนอย่างต่ำ 
// ให้หาเศษส่วนอย่างต่ำของ a และ b ก่อน หลังจากนั้น alert(a / b) ที่เป็นเศษส่วนอย่างต่ำแล้วออกมา

const problem1 = ()=>{

  let a = prompt('input a :');
  let b = prompt('input b :');

  for(let i = a;i>0;i--){
    if(a%i==0 && b%i==0){
      a = a/i;
      b = b/i;
    }
  }

  console.log(`${a}/${b}`);

}

// ให้เขียนโปรแกรมที่บวกเลข 160 + 162 + 164 + … + 2048 แล้ว alert คำตอบออกมา

const problem2 =(a1,an,d)=>{

    const n = (an-a1)/d + 1 ;

    const result = n/2*(an+a1);

    alert(result);
}

// problem2(160,2048,2);

// ให้เขียนโปรแกรมที่บวกเลข 163 + 167 + 171 + … + 815 แล้ว alert คำตอบออกมา

const problem3 =(a1,an,d)=>{

  const n = (an-a1)/d + 1 ;

  const result = n/2*(an+a1);

  alert(result);
}

// problem3(163,815,4);

// ให้เขียนโปรแกรมที่แสดงลำดับตัวที่ n ของลำดับ Fibonacci
// ลำดับ Fibonacci คือ
// 0, 1, 1, 2, 3, 5, 8, 13, …
// (ผลลัพธ์เกิดจากการบวกกันของสองตัวก่อนหน้า)

// INPUT
// n = 7
// OUTPUT
// 8
// -------------------
// INPUT
// n = 3
// OUTPUT
// 1

const fib=(n)=>{
  n = n - 1;
  const cal =(index)=>{
    if(index<=1){
      return index ;
    }else{
      return cal(index-1) + cal(index-2);
    }
  }
  return cal(n);
};

// ให้เขียนโปรแกรมที่หาผลลัพธ์ของ 1 - 2 + 3 - 4 + 5 - 6 + 7 - … + 18953 - 18954 แล้วแสดง alert คำตอบออกมา


const sum_series =(a1,an,d)=>{

  const n = (an-a1)/d + 1 ;

  const result = n/2*(an+a1);

  return result;
}

// alert(sum_series(1,18953,2) + sum_series(-2,-18954,-2));


// ให้เขียนโปรแกรมที่หาผลลัพธ์ของ 1x2 + 2x3 + 3x4 + … + 87x88 แล้ว alert ผลลัพธ์ออกมา

const problem6 =(n)=>{
  return n*(n+1)*(n+2)/3 ;
}

// alert(problem6(87));

// ให้เขียนโปรแกรมที่หาผลลัพธ์ของ 1x2x3 + 2x3x4 + 3x4x5 + … + 87x88x89 แล้ว alert ผลลัพธ์ออกมา

const problem7 =(n)=>{
  return (n*(n+1)*(n+2)*(n+3))/4 ;
}

// alert(problem7(87));


// ให้เขียนโปรแกรมที่หาผลลัพธ์ของ 1x3x5 + 3x5x7 + 5x7x9 + … + 155x157x159 แล้ว alert ผลลัพธ์ออกมา












// ให้เขียนโปรแกรมที่หาผลลัพธ์ของ 1x3x5 + 3x5x7 + 5x7x9 + … + 155x157x159 แล้ว alert ผลลัพธ์ออกมา











//ให้รับค่าจาก prompt มาเรื่อย ๆ จนกระทั่ง เจอคำว่า stop แล้วให้แสดงตัวเลขที่น้อยที่สุดออกมา

const min1 = ()=>{
  let stop = true;
  let num = [];

  while(stop){
    let n = prompt('input number :');
    if(n=='stop'){
      stop = false;
    }else{
      num.push(Number(n));
    }
  }
  let min = num[0];

  num.forEach((item)=>{
    if(item<min) min = item;
  });

  console.log(min);

};


// ให้รับค่าจาก prompt มาเรื่อย ๆ จนกระทั่ง เจอคำว่า stop แล้วให้แสดงตัวเลขที่น้อยที่สุดออกมา 3 อันดับแรก


const min2 = ()=>{
  let stop = true;
  let num = [];

  while(stop){
    let n = prompt('input number :');
    if(n=='stop'){
      stop = false;
    }else{
      num.push(Number(n));
    }
  }

  num.sort((a,b)=> a-b);

  console.log(num.slice(0,3));

};

// ให้รับค่าจาก prompt มาเรื่อย ๆ จนกระทั่ง เจอคำว่า stop แล้วให้แสดงตัวเลขที่น้อยที่สุด และ มากที่สุดออกมา

const minmax1 = ()=>{
  let stop = true;
  let num = [];

  while(stop){
    let n = prompt('input number :');
    if(n=='stop'){
      stop = false;
    }else{
      num.push(Number(n));
    }
  }

  let min = num[0];
  let max = num[0];

  num.forEach((item)=>{
    if(item<min) min = item;
  });

  num.forEach((item)=>{
    if(item>max) max = item;
  });

  console.log(`min : ${min} max : ${max}`);

};


// ให้รับค่าจาก prompt มาเรื่อย ๆ จนกระทั่ง เจอคำว่า stop แล้วให้แสดงผลต่างของตัวเลขที่น้อยที่สุด และ มากที่สุดออ

const minmax2 = ()=>{
  let stop = true;
  let num = [];

  while(stop){
    let n = prompt('input number :');
    if(n=='stop'){
      stop = false;
    }else{
      num.push(Number(n));
    }
  }

  let min = num[0];
  let max = num[0];

  num.forEach((item)=>{
    if(item<min) min = item;
  });

  num.forEach((item)=>{
    if(item>max) max = item;
  });

  console.log(max-min);

};

// ให้รับค่าจาก prompt มาเรื่อย ๆ จนกระทั่ง เจอคำว่า stop แล้วให้แสดงค่าเฉลี่ยของตัวเลขทั้งหมดที่ใส่เข้ามา

const avg1 = ()=>{
  let stop = true;
  let num = [];

  while(stop){
    let n = prompt('input number :');
    if(n=='stop'){
      stop = false;
    }else{
      num.push(Number(n));
    }
  }

  let sum = 0 ;

  num.forEach((item)=>{
    sum = sum + item;
  });

  let result = sum/num.length;

  console.log(result);

};

// ให้รับค่าจาก prompt ที่เป็น Number เข้ามา และให้ทำการสลับตัวเลขจากหลังไปหน้าและ alert ค่านั้นออกมา ถ้าเป็นลบให้คงค่าลบนั้นไว้ด้วย
// -------------------
// INPUT
// -35
// OUTPUT
// -53
// -------------------------
// INPUT
// 542763
// OUPUT
// 367245
// -------------------------
// INPUT
// 520
// OUPUT
// 25
// -------------------------

const reverse = ()=>{

  const n = prompt('input value : ');
  let text = '';
  let isMinus = false;
  for(let char of  String(n)){
    if(char!='-') {
      text= char + text ;
    }else{
      isMinus = true;
    }
  }

  console.log( isMinus? '-'+text:text);
}
