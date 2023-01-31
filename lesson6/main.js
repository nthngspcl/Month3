// console.log('Loading...')
// setTimeout(() => {
//     const product = {
//         name: 'Product name',
//         price: '$680'
//     }
//     console.log(product, '1 step')
//     setTimeout(() => {
//         product.soldOut = true
//         console.log(product, '2 step')
//     }, 1000)
// }, 1000)


// console.log('Loading...')
// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const product = {
//         name: 'Product name',
//         price: '$680'
//     }
//     console.log(product, '1 step')
//         resolve(product)
//         reject()
// }, 2000)
// })
//
// const resolveData = (product) => {
//     setTimeout(() => {
//         product.soldOut = true
//         console.log(product, '2 step')
//     }, 1000)
// }
//
// const rejectData = () => {
//     console.log('ERROR')
// }
//
// request.then(resolveData, rejectData)

// console.log('Loading...')
// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Iphone XX',
//             price: '$680'
//         }
//         console.log(product, '1 step')
//         resolve(product)
//     }, 0)
// })
//
// request.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.soldOut = true
//             console.log(product, '2 step')
//             resolve(product)
//             reject()
//         }, 2000)
//     })
// }).then((product) => {
//     product.isModified = false
//     product.soldOut = false
//     console.log(product, '3 step')
// }).catch(() => {
//     console.log('ERROR')
// }).finally(() => {
//     console.log('FINALLY!')
// })


// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then((json) => {
//         json.forEach(item => console.log(item.title))
//     })


const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
let num = 1

btn.onclick = () => {
    num++
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
}