// number checking
const phoneInput = document.querySelector('#phoneInput');
const phoneCheck = document.querySelector('#phoneCheck');
const phoneResult = document.querySelector('.phoneResult');

const phoneRegExp = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/

phoneCheck.addEventListener('click', () => {
    if(phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'Ok'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerText = 'Not ok'
        phoneResult.style.color = 'red'
    }
});
let p = 0;

// block moving
const block = document.querySelector('.block_move');

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const up = document.querySelector('#up');
const down = document.querySelector('#down');

right.addEventListener('click', ()=>{
    moveRight()
})
left.addEventListener('click', ()=>{
    moveLeft()
})
down.addEventListener('click', ()=>{
    moveBottom()
})
up.addEventListener('click', ()=>{
    moveTop()
})
function moveLeft() {
    if(p === 450){
        if(block.style.left === 0 + "px"){
            return;
        }else{
            p -= 450;
            block.style.left = p + "px";
            moveLeft();
        }
    }else{
        p = 450;
        moveLeft();
    }
  }
function moveRight() {
    if(p === 0){
        if(block.style.left === 450 + "px"){
            return;
        }else{
            p += 450;
            block.style.left = p + "px";
            moveRight();
        }
    }else{
        p = 0;
        moveRight();
    }
  }
function moveTop(){ 
    if(p === 0){
        if(block.style.bottom === 450 + "px"){
            return;
        }else{
            p += 450;
            block.style.bottom = p + "px";
            moveTop();
        }
    }else{
        p = 0;
        moveTop();
    }
  }
function moveBottom(){
    if(p === 450){
        if(block.style.bottom === 0 + "px"){
            return;
        }else{
            p -= 450;
            block.style.bottom = p + "px";
            moveBottom();
        }
    }
    else{
        p = 450;
        moveBottom();
    }
}
