const usd = document.querySelector('#usd');
const som = document.querySelector('#som');
const euro = document.querySelector('#euro');

const convert = (elem, somOrUsd, usdOrEuro,) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open('GET', "data.json");
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onload = () => {
            const response = JSON.parse(request.response)
            if(elem === som){
                somOrUsd.value = (elem.value / response.usd).toFixed(2);
                usdOrEuro.value = (elem.value / response.euro).toFixed(2)
            }else if(elem === usd){
                somOrUsd.value = (elem.value * response.usd).toFixed(2);
                usdOrEuro.value = (somOrUsd.value / response.euro).toFixed(2);
            }else if(elem === euro){
                somOrUsd.value = (elem.value * response.euro).toFixed(2);
                usdOrEuro.value = (somOrUsd.value / response.usd).toFixed(2);
            }
            // isTrue ? target1.value = (elem.value / response.usd).toFixed(2): target1.value = (elem.value * response.usd).toFixed(2)
            elem.value === '' && ( somOrUsd.value = '');
            somOrUsd.value === '' && ( usdOrEuro.value = '');
        };
    })
}
convert(som, usd, euro);
convert(usd, som, euro);
convert(euro, som, usd);