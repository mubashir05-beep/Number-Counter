let display= document.querySelector('.outputDisp');
let number=0;
let decrease=()=>{
if(number>0){
 number=number-1;
dispNumber(number);
}
}
let increase=()=>{
number=number+1;
console.log(number)
dispNumber(number)
}
let reset=()=>{
number=0;
dispNumber(number)
}
let dispNumber=(num)=>{
display.innerText=num;
}
let multiplTwo=()=>{
    if(number==0){
        number++;
    }
number=number*2;
dispNumber(number);
};
let multiplThree=()=>{
    if(number==0){
        number++;
    }
number=number*3;
dispNumber(number);
};