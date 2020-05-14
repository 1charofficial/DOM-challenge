
//document.querySelector("h1").innerHTML = "Enter a search term and a number, let's look at some cool images!"
//const theHeading = document.getElementById("theHeading");

//theHeading.addEventListener("click", () => {
// theHeading.style.color = "purple";

//}) - I will not need the heading at the moment, however I want to keep this code as I have some plans to 
//come back to the project and extend it / add more code, more functionality etc..



const numOfImg = document.getElementById("numberOf");
const typeOfImg = document.getElementById("typeOf");
const makeBox = document.getElementById("makeBox");
const clearBox = document.getElementById("clearBox");
const wrapper = document.getElementById("wrapper");





const createImg = (numOfImg, typeOfImg) =>{

  for(let i =0; i < numOfImg; i++);
  {
    let image = document.createElement('img');
    image.src = `https://source.unsplash.com/random/500x500/?sig=${numOfImg}&${typeOfImg}`;
    let image = document.getElementById("box");
  }
  
  wrapper.appendChild("box");
  


}



const clearScreen = (clearBox) => {
  
  clearBox.document("click", () => {
    while(wrapper.hasChildNodes()) {
      wrapper.removeChild(wrapper.lastChild);
    }
  })
}

//This function will be used to clear the screen and start again.
















//I need to produce a number of boxes (pre-determined). 

//I then need to be able to produce boxes on request of the user.

//I need to then let the user request a type of image as well as a number of images.

//I need to connect the number of things and the type of things to the image generator, im thinking of a loop, that can run the function 
//a number of times based on the users request.

//a function to feed back images based on two queries

//a function to make the feeding of images happen - event - on click

//a function to clear the screen - an event - onclick

//a function to re start the function that took the queries so it starts from a fresh
