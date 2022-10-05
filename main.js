
const todoInput = document.querySelector('#todo_form #todo')
const todoButton =document.querySelector('#button')
const todoBoard =document.querySelector('#todo_board')
const one =document.querySelector('.one')
const wrap =document.querySelector('.wrap')
const checkon =document.querySelector('#checkon')
const count =document.querySelector('#count')

const day=document.querySelector('#day')
let date=new Date
day.innerHTML=`${date.getFullYear()}년  ${date.getMonth()+1}월  ${date.getDate()}일`

todoButton.addEventListener("click",addTodo);

//Enter 누르고  새로고침 안되게
wrap.addEventListener('keydown', (event) => { 
    const keyCode=event.keyCode
    if (keyCode === 13) { 
        event.preventDefault();
    }
})

//Enter 누르고  리스트 추가되도록
todoInput.addEventListener('keydown',(event) => {   
    const keyCode=event.keyCode
    if (keyCode === 13) { 
        addTodo();
    }
});


function addTodo(){
    const text =todoInput.value;
    const li =document.createElement('li')
    let checkbox =document.createElement('input')
    checkbox.type="checkbox"
    const textNode=document.createTextNode(text)
    const button=document.createElement('button')
    li.appendChild(checkbox)
    li.appendChild(textNode)
    li.appendChild(button)

    todoBoard.append(li)
    
    todoInput.value=null;
    
    button.innerHTML='X'

    //체크박스 카운터 이벤트
    checkbox.addEventListener("click" ,todoCheck)

    button.addEventListener('click',todoDelete)

    
    //체크박스 체크일 경우 X버튼 누르면 카운트 -1 이벤트
    button.addEventListener('click',to)
    //체크박스 체크일 경우 X버튼 누르면 카운트 -1
    function to(){
        if(checkbox.checked){
            b--;
            count.innerHTML=b
        }
    }
}
//할일 카운드 변수
let b = 0

function todoCheck(e){
    const li = e.target.parentNode;
    //체크박스 체크시 카운트 +1
    if(e.target.checked){
        b++;
        count.innerHTML=b+'개'
        li.style.color="lightgray"
    }
    //체크박스 체크취소 카운트 -1
    else{
        li.style.color="black"
        b--;
        count.innerHTML=b+'개'
    }
}

function todoDelete(e){
    const li=e.target.parentNode
    li.remove()
}

//전체삭제 버튼
one.addEventListener("click",aded);

function aded(){
    let adede=document.querySelectorAll('#todo_board li')
    b= null;
    for(let i=0; i<adede.length; i++){
        adede[i].remove()
    }
    count.innerHTML=b
}