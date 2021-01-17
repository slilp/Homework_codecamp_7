//11. จงหาจำนวนเลขโดดตั้งแต่ 1 ถึง 4,129,980

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