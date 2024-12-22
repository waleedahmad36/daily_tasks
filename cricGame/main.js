const btns = document.querySelectorAll('.game button span');
const values = ['bat', 'ball' , 'wicket']
const result = document.querySelector('.result span')

btns.forEach((btn , i ) => {
    btn.addEventListener('click' , ()=> {
        const randomNo = Math.floor(Math.random()*3);
        const computerCall = values[randomNo];
        result.textContent = 'checking ...'   //loading effect

        //showing result after 1 second delay
       setTimeout(()=>{
        if(btn.textContent.toLowerCase()===computerCall){
            result.textContent=`Tied you both choose ${computerCall}`
        }else if(btn.textContent.toLowerCase()==='bat' && computerCall==='ball'){
            result.textContent=`You win 🌟 you choose ${btn.textContent.toLowerCase()} and machine choose ${computerCall}`
        }else if(btn.textContent.toLowerCase()==='ball' && computerCall==='bat'){
            result.textContent=`You Loose 🙂 bcz u choose ${btn.textContent.toLowerCase()} and machine choose ${computerCall}`
        }else if(btn.textContent.toLowerCase()==='wicket' && computerCall==='bat'){
            result.textContent=`You win 🌟 you choose ${btn.textContent.toLowerCase()} and machine choose ${computerCall}`
        }else if(btn.textContent.toLowerCase()==='bat' && computerCall==='wicket'){
            result.textContent=`You Loose 🙂 bcz u choose ${btn.textContent.toLowerCase()} and machine choose ${computerCall}`
        }else if(btn.textContent.toLowerCase()==='ball' && computerCall==='wicket'){
            result.textContent=`You win 🌟 you choose ${btn.textContent.toLowerCase()} and machine choose ${computerCall}`
        }else if(btn.textContent.toLowerCase()==='wicket' && computerCall==='ball'){
            result.textContent=`You Loose 🙂 bcz u choose ${btn.textContent.toLowerCase()} and machine choose ${computerCall}`
        }
       },1000)
       
    })
})