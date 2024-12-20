const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn button');
let screenVal = '' ;

document.querySelector('.clear').addEventListener('click',()=>{
    screenVal=''
    screen.value=''
});


btns.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
        if(btn.textContent !=='C' && btn.textContent!=='='){
            screenVal += btn.textContent;
           screen.value = screenVal;
        }
    })
})

document.querySelector('.result').addEventListener('click',()=> {
    const result = eval(screenVal);
    screenVal = result;
    screen.value = result
})
