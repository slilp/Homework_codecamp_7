

const obj ={};
obj.name = "sonter";
obj.surname ="Pakorn";
console.log(obj); 

const isEmpty = (object)=>{
    for(let key in object){
        return false;
    }
    return true;
}

console.log(isEmpty(obj));

function Accumulator(startingValue){
    this.value = startingValue; 
    this.read =()=>{
        let add = prompt("add value");
        this.value += add;
    }
}



console.log(Math.floor(-1.9));