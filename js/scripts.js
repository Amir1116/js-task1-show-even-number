
// function 
//========================get dom elements========
const btnGetNum = document.querySelector('.get-number');
const btnShowNum = document.querySelector('.show-number');
const ouputUl = document.querySelector('.output__ul');
const outNum = document.querySelector('.number-out');
const numDescription = document.querySelector('.number-description');






function getNumber(){    
    const number = prompt('enter number', 'number 0-10');
    if((/^[0-9]+$/).test(number)&&(+number>=0&&+number<=Number.MAX_SAFE_INTEGER)){
            elementText(number,'You Number!')
    }else{
        alert('number is not valid!');
        elementText('Try again!','Your number is no valid!');
        btnDisable(btnShowNum, btnGetNum);
        
    }    
}

function elementText(txt1,txt2){
    outNum.textContent=txt1;
    numDescription.textContent =txt2; 
}

function showNumber(n,el){
    const fr = document.createDocumentFragment();
    for(let i = 0;i<=n; i++){
        if(i%2===0){
            createLi(i,fr)
        }       
    }
    el.appendChild(fr);
    showLoader(loader,el)
}

function createLi(n,el){
    const li = document.createElement('li');
        li.classList.add('output__item');
        li.textContent = n;
    el.appendChild(li);    
}

function btnDisable(btn1,btn2){
    btn1.disabled = true;
    btn2.disabled = false;
}


btnGetNum.addEventListener('click',(e)=>{
   
    btnDisable(e.target, btnShowNum);
    getNumber()
});
btnShowNum.addEventListener('click',(e)=>{
    ouputUl.innerHTML = '';    
   btnDisable(e.target,btnGetNum);
   let num = Number(outNum.textContent);  
    showNumber(num,ouputUl);
});