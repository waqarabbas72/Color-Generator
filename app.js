let btn = document.getElementById('btn');
let heading  = document.getElementById('heading')
// let body = document.getElementsByTagName('body');


btn.addEventListener('click' , changeColor)

function changeColor(e){
    let randomNumber = Math.random().toString(16).substring(2 , 8)
// console.log(randomNumber);
    
    document.body.style.backgroundColor = "#" + randomNumber;
    heading.innerText = "#" + randomNumber


}

