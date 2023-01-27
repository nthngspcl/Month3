const usd = document.querySelector('#usd');
const som = document.querySelector('#som');

const convert = (elem, target, isTrue) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open('GET', "data.json");
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onload = () => {
            const response = JSON.parse(request.response)
            isTrue ? target.value = (elem.value / response.usd).toFixed(2) : target.value = (elem.value * response.usd).toFixed(2)
            elem.value === '' && ( target.value = '')
        };
    })
}
convert(som, usd, true);
convert(usd, som);