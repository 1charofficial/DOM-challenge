
//document.querySelector("h1").innerHTML = "Enter a search term and a number, let's look at some cool images!"
//const theHeading = document.getElementById("theHeading");

//theHeading.addEventListener("click", () => {
// theHeading.style.color = "purple";

//}) - I will not need the heading at the moment, however I want to keep this code as I have some plans to 
//come back to the project and extend it / add more code, more functionality etc..



const numberOf = document.getElementById("num");
const searchType = document.getElementById("type");
const makeBox = document.getElementById("makeBox");
const clearBox = document.getElementById("clearBox");
const wrapper = document.getElementById("wrapper");





//Adding an event in order to initiate the function that will generate the images.

makeBox.addEventListener("click", () => {

  let numberOf = parseInt(num.value);
  let searchType = type.value;
    createImg()

  while(isNaN(numberOf.value)) {
    document.querySelector('p').innerHTML = 'Please enter a valid search query! Lets go!';

  }
  else if(searchType === undefined){

  
    document.querySelector('p').innerHTML = ''
    let numberOf = parseInt(num.value);
    let searchType = type.value;
    createImg()
  }



  }

// ----- > I am still working on the final function in order to make it run. 
  
  




const createImg = () => {

  for(let i = 0; i < numberOf; i++); {
  let randomNum = Math.floor(Math.random() * 100 + 1); 
  let img = document.createElement('img');
  img.src = `https://source.unsplash.com/random/500x500/?sig=${randomNum}&${searchType}`;
  img.className.add = "box"
  wrapper.appendChild("box");
  }
}


//This function will be used to clear the screen.

clearBox.addEventListener("click", () => {
    while(wrapper.hasChildNodes()) {
      wrapper.removeChild(wrapper.lastChild);
    }
  })









