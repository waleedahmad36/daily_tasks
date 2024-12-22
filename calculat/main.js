const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.btns button');
const cros = document.querySelector('.cros')
let screenVal = '' ;



cros.addEventListener('click', ()=> {
    screenVal = screenVal.toString().slice(0,-1);
    screen.value= screenVal;

    if(!screenVal){
        cros.style.opacity=0
        cros.style.visibility='hidden'
    }
})


document.querySelector('.clear').addEventListener('click',()=>{
    screenVal=''
    screen.value=''
    cros.style.opacity=0
    cros.style.visibility='hidden'
});


btns.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
        if(btn.textContent !=='C' && btn.textContent!=='='){
            screenVal += btn.textContent;
           screen.value = screenVal;
           if (screenVal !== '') {
            cros.style.opacity = 1; 
            cros.style.visibility='visible'
        }
        }
    })
})

document.querySelector('.result').addEventListener('click',()=> {
    try {
        const result = eval(screenVal);
        screenVal = result;
        screen.value = result
        if (screenVal !== '') {
            cros.style.opacity = 1; 
            cros.style.visibility='visible'
        }
    } catch (error) {
        screenVal='';
        screen.value='invalid';
        cros.style.opacity = 0;
        cros.style.visibility='hidden'
    }
})