// slide 78
const draw1 = (n) => {
    let star = "";
    for (let i = 0; i < n; i++) {
        star = star + "*"
    }
    console.log(star);
};
// test
console.log('slide 78');
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
console.log('slide 79');
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
console.log('slide 80');
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
console.log('slide 81');
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
console.log('slide 82');
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
console.log('slide 83');
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
console.log('slide 84');
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
console.log('slide 85');
draw8(2);
draw8(3);
draw8(4);
console.log('');

// slide 87
const draw9 = (n) => {
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
console.log('slide 87');
draw9(2);
draw9(3);
draw9(4);
console.log('');


// slide 88
const draw10 = (n) => {
    let star = "";
    for(let i = 0 ; i < n ; i++){
        let subStar = "";
        for(let j = 0 ; j < n; j++){
            let symbol = '*';
            if(j===i)
            {
                symbol = '_';
            }
            subStar = subStar + symbol;
        } 
        star = subStar;
        console.log(star);
    }

};
// test
console.log('slide 88');
draw10(2);
draw10(3);
draw10(4);
console.log('');

// slide 89
const draw11 = (n) => {
    let star = "";
    for(let i = n ; i > 0 ; i--){
        let subStar = "";
        for(let j = 1 ; j <= n; j++){
            let symbol = '*';
            if(j===i)
            {
                symbol = '_';
            }
            subStar = subStar + symbol;
        } 
        star = subStar;
        console.log(star);
    }

};
// test
console.log('slide 89');
draw11(2);
draw11(3);
draw11(4);
console.log('');


// slide 90
const draw12 = (n) => {
    let star = "";
    for(let i = 0 ; i < n ; i++){
        let subStar = "";
        for(let j = 0 ; j < n; j++){
            let symbol = '*';
            if(j>i)
            {
                symbol = '_';
            }
            subStar = subStar + symbol;
        } 
        star = subStar;
        console.log(star);
    }

};
// test
console.log('slide 90');
draw12(2);
draw12(3);
draw12(4);
console.log('');

// slide 91
const draw13 = (n) => {
    let star = "";
    for(let i = n ; i > 0 ; i--){
        let subStar = "";
        for(let j = 0 ; j < n; j++){
            let symbol = '*';
            if(j >= i){
                symbol = '_';
            }
            subStar = subStar + symbol;
        } 
        star = subStar;
        console.log(star);
    }

};
// test
console.log('slide 91');
draw13(2);
draw13(3);
draw13(4);
console.log('');


// slide 92
const draw14 = (n) => {
    let star = "";
    for(let i = 0 ; i < (n*2-1) ; i++){
        let subStar = "";
        if(i <n )
        {
            for(let j = 0 ; j < n; j++){
                let symbol = '*';
                if(j>i)
                {
                    symbol = '_';
                }
                subStar = subStar + symbol;
            } 
        } else {


            let count = -(i - (n*2)) - 1;

            for(let j = 1 ; j <= n; j++){
                let symbol = '*';
                if(j > count)
                {
                    symbol = '_';
                }
                subStar = subStar + symbol;
            } 
        }
        
        star = subStar;
        console.log(star);
    }

};
// test
console.log('slide 92');
draw14(2);
draw14(3);
draw14(4);
console.log('');


// slide 93
const draw15 = (n) => {
    let star = "";
    for(let i = 1 ; i <= (n*2-1) ; i++){
        let subStar = "";
        if(i <= n )
        {
            for(let j = 1 ; j <= n; j++){
                let symbol = i;
                if(j>i)
                {
                    symbol = '_';
                }
                subStar = subStar + symbol;
            } 
        } else {


            let count = -(i - (n*2)) ;

            for(let j = 1 ; j <= n; j++){
                let symbol = count;
                if(j > count)
                {
                    symbol = '_';
                }
                subStar = subStar + symbol;
            } 
        }
        
        star = subStar;
        console.log(star);
    }

};
// test
console.log('slide 93');
draw15(2);
draw15(3);
draw15(4);
console.log('');


// slide 94
const draw16 = (n) => {
    let star = "";
    for(let i = n ; i > 0 ; i--){
        let subStar = "";
            for(let j = 0 ; j < n; j++){
                let symbol = '*';
                if(j+1<i)
                {
                    symbol = '_';
                }
                subStar = subStar + symbol;
            } 
      
        star = subStar;
        console.log(star);
    }

};
// test
console.log('slide 94');
draw16(2);
draw16(3);
draw16(4);
console.log('');

// slide 95
const draw17 = (n) => {
    let star = "";
    for(let i = n ; i > 0 ; i--){
        let subStar = "";
            for(let j = n ; j >0 ; j--){
                let symbol = '*';
                if(j>i)
                {
                    symbol = '_';
                }
                subStar = subStar + symbol;
            } 
      
        star = subStar;
        console.log(star);
    }

};
// test
console.log('slide 95');
draw17(2);
draw17(3);
draw17(4);
console.log('');


// slide 96
const draw18 = (n) => {
    let star = "";
    for(let i = n*2-1 ; i > 0 ; i--){
        let subStar = "";
        if(i >= n){

            let count = i - n +1 ;

            for(let j = 0 ; j < n; j++){
                let symbol = '*';
                if(j+1<count)
                {
                    symbol = '_';
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
console.log('slide 96');
draw18(2);
draw18(3);
draw18(4);
console.log('');


// slide 97
const draw19= (n) => {
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
console.log('slide 97');
draw19(2);
draw19(3);
draw19(4);
console.log('');