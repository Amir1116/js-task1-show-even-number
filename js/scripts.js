
// function 
//========================get dom elements========
const btnGetNum = document.querySelector('.get-number');
const btnShowNum = document.querySelector('.show-number');
const ouputUl = document.querySelector('.output__ul');
const outNum = document.querySelector('.number-out');
const numDescription = document.querySelector('.number-description');
const countEvenNumbers = document.querySelector('.count-even-numbers');






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
    let eventNumbers= 0;
    for(let i = 0;i<=n; i++){
        if(i%2===0){
            createLi(i,fr)
            eventNumbers+=1;
        }       
    }
    el.appendChild(fr);
    countEvenNumbers.textContent= `quantity of even numbers: ${eventNumbers}`;    
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


//============================================================ task 2

const array = [ 4, 3, 10, 14, 32];

//==================================================some
function useSome(arr){
    if(arr.some(item=> item%2===0)){
        console.log('useSome:Array include even number');
    }else{
        console.log('useSome:Array does not include even number');
    }
}
useSome(array);
//=======================================================includes 

function useIncludes(arr, el){
    if(arr.includes(el)){
        console.log(`useInclude: Array include ${el}`);
    }else{
        console.log(`useInclude: Array does not include ${el}`);
    }
}

useIncludes(array, 4);

//=================================================== map

function useMap(arr, el){
    const out = arr.map(item =>item+el);
    console.log(out);
};

useMap(array, 8);

//====================================================== reduce

function useReduce(arr){
    const sum = arr.reduce((acc,item)=> acc+item,0);
    console.log(sum);
};

useReduce(array);

//======================================================filter
const users = [
    {
        name:'user1',
        age: 20,
    },
    {
        name:'user2',
        age: 25,
    },
    {
        name:'user3',
        age: 17,
    },
    {
        name:'user4',
        age: 15,
    },
];

function older18(arr){
    const usersOlder18 = arr.filter(user=> user.age>=18);
    console.log(usersOlder18);
};

older18(users);

//=======================================================find 

function findUser(arr){
    const userName = arr.find(user => user.name === 'user1');
    console.log(userName);
};

findUser(users);

//========================================================findIndex

function indexUser(arr){
    const userIdx = arr.findIndex(user=>user.age===20);
    console.log(userIdx);
};

indexUser(users);

//======================================================= split
const string = "4 3 10 14 32";

function createArr(str){
    const arr = str.split(' ');
    console.log(arr);
}

createArr(string);