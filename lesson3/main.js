const btns = document.querySelectorAll('button');

// btns.forEach( btn => {
//     console.log(btn)
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', (event) =>{
//         if (event.target.classList.contains('red')){
//             btn.classList.remove('red');
//         }else{
//             btn.classList.add('red');
//         }
//     })
// })

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = (event) =>{
        if (event.target.classList.contains('red')){
            btns[i].classList.remove('red');
        }else{
            btns[i].classList.add('red');
        }
    }
}
