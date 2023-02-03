
const url = 'https://jsonplaceholder.typicode.com/posts' 
const wrapper = document.querySelector('.wrapper');

fetch(url)
    .then(response => response.json())
    .then(item => {
        console.log(item)
        item.forEach(i => {
            const div = document.createElement('div');
            div.className = 'news_block'
            div.innerHTML = `
                <img src="https://picsum.photos/300?random=${i.id}">
                <h3>${i.title}</h3>
                <p>${i.body}</p>
            `
            wrapper.append(div)
        })
    })