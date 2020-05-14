
//document.querySelector("h1").innerHTML = "Enter a search term and a number, let's look at some cool images!"
//const theHeading = document.getElementById("theHeading");

//theHeading.addEventListener("click", () => {
// theHeading.style.color = "purple";

//}) - I will not need the heading at the moment, however I want to keep this code as I have some plans to 
//come back to the project and extend it / add more code, more functionality etc..



//const numOfImg = document.getElementById("numberOf");
//const typeOfImg = document.getElementById("typeOf");
const makeBox = document.getElementById("makeBox");
const clearBox = document.getElementById("clearBox");
const wrapper = document.getElementById("wrapper");





let num = numberOf.value;

let searchType = type.value;





const createImg = (num, searchType) =>{

  for(let i = 0; i < num; i++); {
  let randomNum = Math.floor(Math.random() * 100 + 1); 
  let image = document.createElement('img');
  img.src = `https://source.unsplash.com/random/500x500/?sig=${randomNum}&${searchType}`;
  img.className.add = "box"
  wrapper.appendChild("box");
  }
}

createImg()


//This function will be used to clear the screen.

clearBox.addEventListener("click", () => {
    while(wrapper.hasChildNodes()) {
      wrapper.removeChild(wrapper.lastChild);
    }
  })












