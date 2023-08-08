let result=document.getElementById('input')
let copy=document.getElementById('symbol')
let length=document.getElementById('num')
let uppercase=document.getElementById('upper')
let lowercase=document.getElementById('lower')
let number=document.getElementById('no')
let symbol =document.getElementById('sym')
let generate=document.getElementById('generate')

generate.addEventListener("click",()=>{
    let len=length.value;
    const Upper=uppercase.checked;
    const Lower=lowercase.checked;
    const num=number.checked;
    const symb=symbol.checked;
   
    result.innerText=generatePassword(len,Upper,Lower,num,symb);
})
copy.addEventListener('click',()=>{
    let textarea=document.createElement("textarea");
   
    textarea.value=result.innerText;
    // console.log(textarea);
    document.body.appendChild(textarea)
    textarea.select();
    document.execCommand('copy')
    document.body.removeChild(textarea)

    
})


function generatePassword(len,upper,lower,num,symb) {
    let password='';
    let passselected='';
        if (lower) {
            passselected+='abcdefghijklmnopqrstuvwxyz'
        }
        if (upper) {
             passselected+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'   
        }
        if(num){
            passselected+='1234567890'
        }
        if (symb) {
            passselected+=['@','#','$','&','*','!','?','^','~','+','_']
        }
        if (passselected==0) {
            throw "Select atleast one option"
        }
        
    for (let i = 1; i <= len; i++) {
        let r=passselected[Math.floor(Math.random()*passselected.length)];
       password+=r;
    }
    return password;
    
}