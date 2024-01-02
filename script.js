

const myButton=document.getElementById("button-contact");
const myInput=document.getElementById("emailInput");
const myPhoneInput=document.getElementById("phoneInput");



myButton.addEventListener("click",(e)=> {
    e.preventDefault();
   const myInput=document.getElementById("emailInput").value;
    console.log(myInput);
});

function createParagraph(){
    const newParagraph=document.createElement("p");
    newParagraph.appendChild(document.createTextNode("Jag tänker bara på ditt bästa, var inte rädd att kontakta oss"));
    document.getElementById("text").append(newParagraph);
    return newParagraph;
};








    





const makeOver=document.querySelector(".siteheader");
makeOver.style.backgroundColor= "green";

const cars = ["Saab", "Volvo", "BMW"];
const listContainer = document.getElementById("car-list");
cars.forEach((car) => {
const listItem = document.createElement("li");
listItem.textContent = car;
listContainer.appendChild(listItem);
});

/* const myInput = document.getElementById("minInput");
const onlyNumber = document.getElementById("error");
myInput.addEventListener("input", function () {
if (isNaN(myInput.value)) {
onlyNumber.textContent = "You must enter a number!";
} else {
onlyNumber.textContent = "";
}
});
 */
/* function handlePhone(){
    const phoneValue=document.getElementById("phoneInput").value;
    console.log(phoneValue);
}
createParagraph(phoneValue);



 */

