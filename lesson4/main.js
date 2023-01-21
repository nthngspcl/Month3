// const obj = {
//     name: "Sample",
//     age: 20
// }

// const data = JSON.stringify(obj);

// console.log(data);

// const obj1 = JSON.parse(data);

// console.log(obj1);

const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load",()=>{
        const data = JSON.parse(request.response);
        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".age").innerHTML = data.age;
        console.log(request);
    });
})




