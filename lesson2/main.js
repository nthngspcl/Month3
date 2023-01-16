console.log("hi");
// setTimeout(()=>{
//     console.log("Hello world!");
// }, 4000);

// const interval = setInterval(()=>{
//     console.log("Hello world!");
// }, 1000)
// console.log(interval)
// setTimeout(()=>{clearInterval(interval)}, 5000);

const box = document.querySelector('.box');

let positionX = 0;
let positionY = 0;

const move = ()=>{
    if(positionX <= 450 && positionY <=0){
        box.style.left = positionX + 'px';
        positionX++;
        setTimeout(move, 1);
    }else if(positionY <= 450 && positionX >= 450){
        box.style.top = positionY + 'px';
        positionY++;
        setTimeout(move,1);
    }else if(positionX >= 0 && positionY >= 450){
        box.style.left= positionX + 'px';
        positionX--;
        setTimeout(move,1);
    }else if(positionY >= 0 && positionX <= 0){
        positionY--;
        box.style.top = positionY + 'px';
        setTimeout(move,1);
    }

}
// move()
const doHomeWork = (finish, subject = prompt("Subject?"))=>{
    alert(`starting my ${subject} home work`);
    finish();
}
const alertFinish = ()=>{
    alert("Done!");
}
// doHomeWork(alertFinish);

const arr = [1,2,3,4,5,6,'Nur','Captains','Captcha']

arr.map(item => {
    const block = document.createElement('div');
    block.setAttribute('class', 'm_block');
    block.innerHTML = item;
    const wrapper = document.querySelector('.wrapper')
    wrapper.append(block)
})

