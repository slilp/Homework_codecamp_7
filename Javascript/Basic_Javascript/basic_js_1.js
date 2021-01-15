//node basic_js_1.js to see the result

// slide 78
const draw1 = (n) => {
    let star = "";
    for (let i = 0; i < n; i++) {
        star = star + "*"
    }
    console.log(star);
};
// test
console.log('ข้อ 1 slide 78');
draw1(2);
draw1(3);
draw1(4);
console.log('');

//slide 79
const draw2 = (n) => {
    let star = "";
    for (let i = 0; i < n; i++) {
        let subStar = "";
        for (let j = 0; j < n; j++) {
            subStar = subStar + '*';
        }
        star = subStar;
        console.log(star);
    }
};
// test
console.log('ข้อ 2 slide 79');
draw2(2);
draw2(3);
draw2(4);
console.log('');

// slide 80
const draw3 = (n) => {
    let num = "";
    for (let i = 1; i < n + 1; i++) {
        let subNum = "";
        for (let j = 1; j < n + 1; j++) {
            subNum = subNum + j
        }
        num = subNum;
        console.log(num);
    }

};
// test
console.log('ข้อ 3 slide 80');
draw3(2);
draw3(3);
draw3(4);
console.log('');

// slide 81
const draw4 = (n) => {
    let num = "";
    for (let i = 1; i < n + 1; i++) {
        let subNum = "";
        for (let j = 1; j < n + 1; j++) {
            subNum = subNum + i
        }
        num = subNum;
        console.log(num);
    }

};
// test
console.log('ข้อ 4 slide 81');
draw4(2);
draw4(3);
draw4(4);
console.log('');


// slide 82
const draw5 = (n) => {
    let num = "";
    for (let i = n; i >= 1; i--) {
        let subNum = "";
        for (let j = 1; j < n + 1; j++) {
            subNum = subNum + i
        }
        num = subNum;
        console.log(num);
    }

};
// test
console.log('ข้อ 5 slide 82');
draw5(2);
draw5(3);
draw5(4);
console.log('');


// slide 83
const draw6 = (n) => {
    let subNum = 0;
    for (let i = 1; i <= n; i++) {
        let num = "";
        let nextNum = subNum;
        for (let j = 1; j <= n; j++) {
            nextNum++;
            num = num + nextNum;
        }
        subNum = nextNum;
        console.log(num);
    }

};
// test
console.log('ข้อ 6 slide 83');
draw6(2);
draw6(3);
draw6(4);
console.log('');


// slide 84
const draw7 = (n) => {
    let subNum = n*n;
    for (let i = 1; i <= n; i++) {
        let num = "";
        let nextNum = subNum;
        for (let j = 1; j <= n; j++) {
            num = num + nextNum;
            nextNum--;
        }
        subNum = nextNum;
        console.log(num);
    }
};
// test
console.log('ข้อ 7 slide 84');
draw7(2);
draw7(3);
draw7(4);
console.log('');


// slide 85
const draw8 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i*2);
    }
};
// test
console.log('ข้อ 8 slide 85');
draw8(2);
draw8(3);
draw8(4);
console.log('');

//slide 86
const draw9 = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i*2);
    }
};
// test
console.log('ข้อ 9 slide 86');
draw9(2);
draw9(3);
draw9(4);
console.log('');


// slide 87
const draw10 = (n) => {
    let num = "";
    for (let i = 1; i < n + 1; i++) {
        let subNum = "";
        for (let j = 1; j < n + 1; j++) {
            subNum = subNum + (i*j)
        }
        num = subNum;
        console.log(num);
    }
};
// test
console.log('ข้อ 10 slide 87');
draw10(2);
draw10(3);
draw10(4);
console.log('');


// slide 88
const draw11 = (n) => {
    let star = "";
    for(let i = 0 ; i < n ; i++){
        let subStar = "";
        for(let j = 0 ; j < n; j++){
            let symbol = '*';
            if(j===i)
            {
                symbol = '-';
            }
            subStar = subStar + symbol;
        } 
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 11 slide 88');
draw11(2);
draw11(3);
draw11(4);
console.log('');

// slide 89
const draw12 = (n) => {
    let star = "";
    for(let i = n ; i > 0 ; i--){
        let subStar = "";
        for(let j = 1 ; j <= n; j++){
            let symbol = '*';
            if(j===i)
            {
                symbol = '-';
            }
            subStar = subStar + symbol;
        } 
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 12 slide 89');
draw12(2);
draw12(3);
draw12(4);
console.log('');


// slide 90
const draw13 = (n) => {
    let star = "";
    for(let i = 0 ; i < n ; i++){
        let subStar = "";
        for(let j = 0 ; j < n; j++){
            let symbol = '*';
            if(j>i)
            {
                symbol = '-';
            }
            subStar = subStar + symbol;
        } 
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 13 slide 90');
draw13(2);
draw13(3);
draw13(4);
console.log('');

// slide 91
const draw14 = (n) => {
    let star = "";
    for(let i = n ; i > 0 ; i--){
        let subStar = "";
        for(let j = 0 ; j < n; j++){
            let symbol = '*';
            if(j >= i){
                symbol = '-';
            }
            subStar = subStar + symbol;
        } 
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 14 slide 91');
draw14(2);
draw14(3);
draw14(4);
console.log('');


// slide 92
const draw15 = (n) => {
    let star = "";
    for(let i = 0 ; i < (n*2-1) ; i++){
        let subStar = "";
        if(i <n )
        {
            for(let j = 0 ; j < n; j++){
                let symbol = '*';
                if(j>i)
                {
                    symbol = '-';
                }
                subStar = subStar + symbol;
            } 
        } else {


            let count = -(i - (n*2)) - 1;

            for(let j = 1 ; j <= n; j++){
                let symbol = '*';
                if(j > count)
                {
                    symbol = '-';
                }
                subStar = subStar + symbol;
            } 
        }
        
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 15 slide 92');
draw15(2);
draw15(3);
draw15(4);
console.log('');


// slide 93
const draw16 = (n) => {
    let star = "";
    for(let i = 1 ; i <= (n*2-1) ; i++){
        let subStar = "";
        if(i <= n )
        {
            for(let j = 1 ; j <= n; j++){
                let symbol = i;
                if(j>i)
                {
                    symbol = '-';
                }
                subStar = subStar + symbol;
            } 
        } else {


            let count = -(i - (n*2)) ;

            for(let j = 1 ; j <= n; j++){
                let symbol = count;
                if(j > count)
                {
                    symbol = '-';
                }
                subStar = subStar + symbol;
            } 
        }
        
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 16 slide 93');
draw16(2);
draw16(3);
draw16(4);
console.log('');


// slide 94
const draw17 = (n) => {
    let star = "";
    for(let i = n ; i > 0 ; i--){
        let subStar = "";
            for(let j = 0 ; j < n; j++){
                let symbol = '*';
                if(j+1<i)
                {
                    symbol = '-';
                }
                subStar = subStar + symbol;
            } 
      
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 17 slide 94');
draw17(2);
draw17(3);
draw17(4);
console.log('');

// slide 95
const draw18 = (n) => {
    let star = "";
    for(let i = n ; i > 0 ; i--){
        let subStar = "";
            for(let j = n ; j >0 ; j--){
                let symbol = '*';
                if(j>i)
                {
                    symbol = '-';
                }
                subStar = subStar + symbol;
            } 
      
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 18 slide 95');
draw18(2);
draw18(3);
draw18(4);
console.log('');


// slide 96
const draw19 = (n) => {
    let star = "";
    for(let i = n*2-1 ; i > 0 ; i--){
        let subStar = "";
        if(i >= n){

            let count = i - n +1 ;

            for(let j = 0 ; j < n; j++){
                let symbol = '*';
                if(j+1<count)
                {
                    symbol = '-';
                }
                subStar = subStar + symbol;
            } 
        } else {
            for(let j = n ; j > 0; j--){
                let symbol = '-';
                if(j-1 < i)
                {
                    symbol = '*';
                }
                subStar = subStar + symbol;
            } 
        }
           
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 19 slide 96');
draw19(2);
draw19(3);
draw19(4);
console.log('');


// slide 97
const draw20= (n) => {
    let star = "";
    let printCount = 0;
    for(let i = n*2-1 ; i > 0 ; i--){
        let subStar = "";
        if(i >= n){

            let count = i - n +1 ;

            for(let j = 0 ; j < n; j++){
                printCount++;
                let symbol = printCount;
                if(j+1<count)
                {
                    printCount--;
                    symbol = '-';
                }
                subStar = subStar + symbol;
            } 
        } else {
            for(let j = n ; j > 0; j--){
                let symbol = '-';
                if(j-1 < i)
                {
                    printCount++;
                    symbol = printCount;
                }
                subStar = subStar + symbol;
            } 
        }
           
        star = subStar;
        console.log(star);
    }

};
// test
console.log('ข้อ 20 slide 97');
draw20(2);
draw20(3);
draw20(4);
console.log('');


// slide 98
const draw21= (n) => {
    for(let i = 1 ; i <= n ; i++){
        let result = "";
        let symbol = "";
        let star = "";
            for(let k = 1 ; k <= n-i ; k++){
                symbol = symbol + '-';
            }
            for(let j = 1 ; j <= i*2-1; j++){
                star = star + '*';
            } 


         result = symbol + star + symbol;
        console.log(result);
    }

};
// test
console.log('ข้อ 21 slide 98');
draw21(2);
draw21(3);
draw21(4);
console.log('');



// slide 99
const draw22= (n) => {
    for(let i = n ; i >= 1 ; i--){
        let result = "";
        let symbol = "";
        let star = "";
            for(let k = 1 ; k <= n-i ; k++){
                symbol = symbol + '-';
            }
            for(let j = 1 ; j <= i*2-1; j++){
                star = star + '*';
            } 


         result = symbol + star + symbol;
        console.log(result);
    }

};
// test
console.log('ข้อ 22 slide 99');
draw22(2);
draw22(3);
draw22(4);
console.log('');


// slide 100
const draw23= (n) => {

    for(let i = 1 ; i <= n*2-1 ; i++){
        let result = "";
        let symbol = "";
        let star = "";

            let startK = n-i;
            let startJ = i*2-1;

            if(i > n) {
                startK  = i-n;
                startJ =  (i-2*(i-n))*2-1;
            }

            for(let k = 1 ; k <= startK ; k++){
                symbol = symbol + '-';
            }

            for(let j = 1 ; j <= startJ; j++){
                star = star + '*';
            } 
      

        result = symbol + star + symbol;

        console.log(result);
    }

};
// test
console.log('ข้อ 23 slide 100');
draw23(2);
draw23(3);
draw23(4);
console.log('');

// slide 101
const draw24= (n) => {
    let count = 1;

    for(let i = 1 ; i <= n*2-1 ; i++){
        let result = "";
        let symbol = "";
        let star = "";

            let startK = n-i;
            let startJ = i*2-1;

            if(i > n) {
                startK  = i-n;
                startJ =  (i-2*(i-n))*2-1;
            }

            for(let k = 1 ; k <= startK ; k++){
                symbol = symbol + '-';
            }

            for(let j = 1 ; j <= startJ; j++){
                star = star + count;
                count++ ;
            } 
      

        result = symbol + star + symbol;

        console.log(result);
    }

};
// test
console.log('ข้อ 24 slide 101');
draw24(2);
draw24(3);
draw24(4);
console.log('');