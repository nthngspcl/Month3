const btn = document.querySelector('.btn');
const dataBox = document.createElement('div');
document.body.append(dataBox);
dataBox.className = 'dataBox';

btn.onclick = ()=> {
    const request = new XMLHttpRequest();
    request.open('GET','peoples.json');
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = ()=> {
        const data = JSON.parse(request.response);
        data.forEach(people => {
            const dataDiv = document.createElement('div');
            dataDiv.className = 'dataDiv';
            const dataName = document.createElement('span');
            const dataAge = document.createElement('span');
            dataBox.appendChild(dataDiv);
            dataDiv.appendChild(dataName);
            dataDiv.appendChild(dataAge);
            dataName.innerHTML = `Name: <b>${people.name}</b>`;
            dataAge.innerHTML = `Age: <b>${people.age}</b>`;
        })
    }
}




