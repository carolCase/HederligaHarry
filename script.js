

const myButton=document.getElementById("button-contact");
const myInput=document.getElementById("emailInput");
const myPhoneInput=document.getElementById("phoneInput");



myButton.addEventListener("click",(e)=> {
    e.preventDefault();
    console.log(myInput.value);
    console.log(createParagraph());
    console.log(myPhoneInput.value);
});

function createParagraph(){
    const newParagraph=document.createElement("p");
    newParagraph.appendChild(document.createTextNode("Jag tänker bara på ditt bästa, var inte rädd att kontakta oss"));
    document.getElementById("text").append(newParagraph);
    return newParagraph;
};
   


const makeOver=document.querySelector(".siteheader");
makeOver.style.backgroundColor= "green";

const cars = ["Saab", "Volvo", "BMW", "Nissan","volvo","Renault"];
const listContainer = document.getElementById("car-list");
cars.forEach((car) => {
const listItem = document.createElement("li");
listItem.textContent = car;
listContainer.appendChild(listItem);
});




