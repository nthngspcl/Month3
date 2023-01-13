//регулярные выражения
//i - Нерегистрозависимый поиск
// let string = prompt("Name:");

// const regExp = /a/i

// console.log(string.match(regExp));

//g Глобальный поиск
// const symbols = "AsadqAWQrCascasccc";

// const regExp2 = /c/gi

// console.log(symbols.match(regExp2))

//m Многострочный поиск
//y Выполняет поиск начиная с символа

// const number = "1231423536356";
// const regExp = new RegExp('')
//d === [0-9]
//w === [Aa-Zz0-9]
// const regExp = /[0-2]/g
// console.log(number.match(regExp));
// console.log(number.replace(regExp,'--'));

//DOM

// const phoneInput = document.querySelector('#phoneInput');
// const phoneCheck = document.querySelector('#phoneCheck');
// const phoneResult = document.querySelector('.phoneResult');

// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

// phoneCheck.addEventListener('click', () => {
//     if(phoneRegExp.test(phoneInput.value)){
//         phoneResult.innerText = 'Ok'
//     }else{
//         phoneResult.innerText = 'Not ok'
//     }
// });

//Рекурсия
// let num = 0;
// const count = () => {
//     console.log(num);
//     num++
//     if(num <= 500){
//         count()
//     }
// }
// count()

// const people = {
//     John:{
//         age: 25,
//         parents:{
//             Nick: {
//                 age: 25,
//                 parents:{
//                     June:{
//                         age: 50,
//                     }
//                 }
//             }
//         }
//     },
//     Dave:{
//         age: 15,
//         parents:{
//             Ret: {
//                 age: 35,
//             }
//         }
//     }
// }
// console.log(people);
// const parentsList = (obj) => {
//     if(obj.parents){
//         for (let i in obj.parents){
//             console.log(i);
//             parentsList(obj.parents[i]);
//         }
//     }
// }
// for (let j in people){
//     parentsList(people[j]);
// }

