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

//5. ให้เขียนฟังก์ชัน changeStringtoThaiDate() โดยฟังก์ชันนี้จะรับค่าวันที่ที่เป็นแบบตัวเลข และ คืนค่ามาเป็นวันที่แบบไทย แต่ถ้าวันที่ผิดพลาดหรือเดือน(กุมภาพันธ์ไม่ต้องเช็ค Leap year)ผิดพลาดให้แสดงค่าว่า “Error”

const changeStringToThaiDate=(dateValue)=>{

  if(!Date.parse(dateValue)) return 'Error';
  const d = new Date(dateValue);
  const months = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];

  return `วันที่ ${d.getDate()} ${months[d.getMonth()]} พ.ศ. ${d.getFullYear()+543}`;

}

console.log('\nข้อ 5');
console.log('input 1 - 12-11-1996');
console.log( changeStringToThaiDate('12-11-1996'));
console.log('input 2 - 31-11-2000');
console.log(changeStringToThaiDate('31-11-2000'));
console.log('input 2 - 12-13-1996');
console.log(changeStringToThaiDate('12-13-1996'));

//6. ให้เขียนฟังก์ชัน isTheSameAnagram( string1 , string2 ) โดยถ้า string ถ้าสองเป็น anagram กันให้คืนค่าาเป็น true ถ้าไม่ให้คืนเป็น false

const isTheSameAnagram =(s1, s2)=>{
  if (s1.length !== s2.length) {
    return false;
  }
  if (s1 === s2) {
    return true;
  }

  var c = '',
    i = 0,
    limit = s1.length,
    match = 0,
    idx;
  while(i < s1.length){
    c = s1.substr(i++, 1);
    idx = s2.indexOf(c);
    if (idx > -1) {
      match++;
      s2 = s2.substr(0, idx) + s2.substr(idx + 1);
    } else {
      return false;
    }
  }
  return match === s1.length;
}

console.log('\nข้อ 6');
console.log('input 1 cinema iceman');
console.log( isTheSameAnagram('cinema','iceman'));


//7. ให้เขียนฟังก์ชัน numberOfSquare( height , width ) โดยให้หาจำนวนสี่จัตุรัสที่ใหญ่ที่สุดที่สามารถวางได้พอดีเช่น

const numberOfSquare =(height,width)=>{
    const maxArea = height*width;
    let stop = height >= width? height : width;
    let result=0;
    for(let i = 1 ; i<= stop ; i++){
      let squareArea = i*i;
      if(squareArea <= maxArea){
        maxSquare= squareArea;
        result++;
      } 
    }

    return result;
}


console.log('\nข้อ 7');
console.log('input 1 15,15');
console.log( numberOfSquare(15,15));
console.log('input 2 20,15');
console.log( numberOfSquare(20,15));
console.log('input 3 2,8');
console.log( numberOfSquare(2,8));
console.log('input 4 1,5');
console.log( numberOfSquare(1,5));


//8.ให้เขียนฟังก์ชัน toChange( money ) โดยฟังก์ชันดังกล่าวจะแปลงเงินที่ได้รับมาเป็นเงินทอนโดยให้ใช้จำนวนแบงค์และเหรียญน้อยที่สุด

const toChange =(money)=>{
    let tempMoney = money;
    const c1000 = Math.floor(tempMoney/1000);
    tempMoney = tempMoney - c1000*1000;
    const c500 = Math.floor(tempMoney/500);
    tempMoney = tempMoney - c500*500;
    const c100 = Math.floor(tempMoney/100);
    tempMoney = tempMoney - c100*100;
    const c50 = Math.floor(tempMoney/50);
    tempMoney = tempMoney - c50*50;
    const c20 = Math.floor(tempMoney/20);
    tempMoney = tempMoney - c20*20;
    const c10 = Math.floor(tempMoney/10);
    tempMoney = tempMoney - c10*10;
    const c5 = Math.floor(tempMoney/5);
    tempMoney = tempMoney - c5*5;
    const c2 = Math.floor(tempMoney/2);
    tempMoney = tempMoney - c2*2;
    const c1 = tempMoney;

    return `แบงค์พัน ${c1000} ใบ / แบงค์ห้าร้อย ${c500} ใบ / แบงค์ร้อย ${c100} ใบ / 
    แบงค์ห้าสิบ ${c50} ใบ / แบงค์ยี่สิบ ${c20} ใบ / เหรียญสิบ ${c10} เหรียญ / 
    เหรียญห้า ${c5} เหรียญ / เหรียญสองบาท ${c2} เหรียญ / 
    เหรียญบาท ${c1} เหรียญ`;

}


console.log('\nข้อ 8');
console.log('input 1 788');
console.log(toChange(788));


