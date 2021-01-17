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