const wrapper = document.getElementById('wrapper');
const box = document.getElementById('box');
//box.id = 'box';

const heading = getElementById('heading');

heading.addEventListener("click", () => {
    heading.style.color = "black";
})

const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    button.style.color = "red"; 
    box.style.color = input.Value;


    
})// why is this not working now?

wrapper.appendChild('div')


button.onclick = () => {
    button.id.toggle('hide');
}

//div.appendChild(button);

//div.appendChild(text); - create textNode?

//console.log(div);






