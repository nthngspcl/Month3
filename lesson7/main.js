// const apiKey = 'e417df62e04d3b1b111abeab19cea714'
// const cityName = document.querySelector('.city');
// const temperature = document.querySelector('.temp');
// const kelv = 273.15

// const citySearch = () => {
//     const city = document.querySelector('.cityName');
//     city.addEventListener('input', (e) => {
//         const cityTargetValue = e.target.value;
//         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityTargetValue}&appid=${apiKey}`)
//             .then(resp => resp.json())
//             .then(data => {
//                 cityName.innerHTML = data.name ? data.name : 'Город не найден';
//                 temperature.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - kelv) + '&deg' + 'C': '_';
//             })
//     })
// }
// citySearch();
const url = 'https://jsonplaceholder.typicode.com/todos/1' 
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        },ms)
    })
}
const fetchData = () => {
    console.log('start');
    return delay(2000)
        .then(() => fetch(url))
        .then(resp => resp.json())

}
fetchData()
    .then(data => console.log(data))
    .finally(() => console.warn('complete'));