//1. ให้เขียนฟังก์ชัน checkCharacter(string) โดยคืนค่าเป็น stringโดยที่ 
// ถ้า string ที่เข้ามา เป็น พิมพ์ใหญ่ทั้งหมด ให้คืนค่าเป็น string ที่มีค่าเป็น “All character are capital.”
// ถ้า string ที่เข้ามา เป็น พิมพ์เล็กทั้งหมด ให้คืนค่าเป็น string ที่มีค่าเป็น “All character are small.”
// ถ้า string ที่เข้ามา เป็น พิมพ์ใหญ่และพิมเล็กผสมกัน ให้คืนค่าเป็น string ที่มีค่าเป็น “All character are mix.”


const checkCharacter =(word)=>{

    let haveLowerCase = false;
    let haveUpperCase = false;
    
    for(let i= 0; i < word.toString().length ; i++){
       if(word.toString()[i] == word.toString()[i].toUpperCase()) haveUpperCase = true;
       if(word.toString()[i] == word.toString()[i].toLowerCase()) haveLowerCase = true;
    }
  
   
    if(haveLowerCase && haveUpperCase) return 'All character are mix.';
    if(haveLowerCase) return 'All character are small.';
    if(haveUpperCase) return 'All character are capital.';
  
}
  
  console.log('\nข้อ 1');
  console.log('input 1 - STRING');
  console.log(checkCharacter('STRING'));
  console.log('input 2 - string');
  console.log(checkCharacter('string'));
  console.log('input 3 - StrIng');
  console.log(checkCharacter('StrIng'));


  //2. ให้เขียนฟังก์ชันยกกำลัง pow(a, n) โดยให้คืนค่าเป็น a ยกกำลัง n


  const pow =(a,n)=>{

      return a**n;
}
  
  console.log('\nข้อ 2');
  console.log('input 1 - (2,4)');
  console.log(pow(2,4));

  //3. ให้ฟังก์ชัน thaiTypeof( variable ) โดยฟังก์ชันดังกล่าวจะทำหน้าที่เหมือน typeof ทุกประการแต่ จะแสดงเป็นภาษาไทย

  const thaiTypeof =(variable)=>{ 

      switch(typeof(variable)){
        case 'string' : return 'ข้อความ';
        case 'boolean' : return 'ค่าความจริง';
        case 'number' : return 'ตัวเลข';
        case 'object' : return 'ออปเจ็คต์';
        case 'null' : return 'ค่าว่าง'  ;
        default : return 'ไม่ทราบค่า' ; break;
      }

  }

  console.log('\nข้อ 3');
  console.log('input 1 - Hello');
  console.log(thaiTypeof('Hello'));
  console.log('input 2 - 2');
  console.log(thaiTypeof(2));
  console.log('input 3 - {name:Hello}');
  console.log(thaiTypeof({name:'Hello'}));

//4. ให้เขียนฟังก์ชัน evenArraySum( array ) โดยที่ฟังก์ชันนี้จะรับอาเรย์ของตัวเลข array และคืนค่าออกมาเป็นผลรวมของตัวเลขที่เป็นเลขคู่ทั้งหมด

const evenArraySum =(arrayVal)=>{ 

  let result = 0 ;

  for(let items of arrayVal){
    if(items%2==0) result = result + items;
  }

  return result ;

}

console.log('\nข้อ 4');
console.log('input 1 - [1, 3, 5, 9]');
console.log( evenArraySum([1, 3, 5, 9]));
console.log('input 2 - [5, 8, 6, 7, 1]');
console.log(evenArraySum([5, 8, 6, 7, 1]));