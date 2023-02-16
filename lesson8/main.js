const url = 'https://jsonplaceholder.typicode.com/photos'
const wrapper = document.querySelector('.wrapper');

fetch(url)
    .then(response => response.json())
    .then(images  => {
        images.slice(0,50).forEach(image =>{
            console.log(image);
            const img = document.createElement('div');
            img.innerHTML = `<img src = "${image.url}">`;
            wrapper.append(img);
        })
    })