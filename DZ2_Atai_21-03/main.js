const box = document.querySelector('.box');
const startBtn = document.querySelector('#startMove');
const endBtn = document.querySelector('#endMove');

let positionX = 0;
let positionY = 0;

const move_act = ()=>{
    if(positionX <= 450 && positionY <=0){
        box.style.left = positionX + 'px';
        positionX++;
    }else if(positionY <= 450 && positionX >= 450){
        box.style.top = positionY + 'px';
        positionY++;
    }else if(positionX >= 0 && positionY >= 450){
        box.style.left= positionX + 'px';
        positionX--;
    }else if(positionY >= 0 && positionX <= 0){
        positionY--;
        box.style.top = positionY + 'px';
    }
}
let move;
function startMove(){
    move = setInterval(()=>move_act(),1);
}
function endMove(){
    clearInterval(move);
}
startBtn.addEventListener('click', ()=>{
    startMove()
    startBtn.disabled = true;
    startBtn.style.backgroundColor = 'green';
    endBtn.disabled = false;
    endBtn.style.backgroundColor = 'buttonface'
})
endBtn.addEventListener('click', ()=>{
    endMove()
    endBtn.disabled = true;
    endBtn.style.backgroundColor = 'red'
    startBtn.disabled = false;
    startBtn.style.backgroundColor = 'buttonface'
});


const count = document.querySelector('#count');
const stopCountBtn = document.querySelector('#stop');
const startCountBtn = document.querySelector('#start');
let counter;
function countStart(){counter = setInterval(()=>count.innerText++, 800)}
function countStop() {clearInterval(counter);}

startCountBtn.addEventListener('click',() => {
    countStart();
    startCountBtn.disabled = true;
});
stopCountBtn.addEventListener('click',() => {
    countStop();
    startCountBtn.disabled = false;
});
