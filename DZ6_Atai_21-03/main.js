const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const block = document.querySelector('.block');
const btn = document.querySelector('.btn');
let num = 0
// 1
nextBtn.onclick = () => {
    num++;
    blockClick(num);
}
prevBtn.onclick = () => {
    num--;
    blockClick(num);
}

function blockClick(num) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>            
            `
        })
    if(num > 1){
        prevBtn.disabled = false
    }else if (num === 1){
        prevBtn.disabled = true
    }
}
// 2
btn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
        })
        .then((response) => response.json())
        .then((json) => {
            json.forEach(item => console.log(item));
        })
}