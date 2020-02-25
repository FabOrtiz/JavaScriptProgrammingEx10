/* 
Author: Fabio Ortiz
Title: JavaScriptProgrammingEx10
Date: 02/25/2020 
*/

// Create a div
let myDiv =document.createElement("div");

//Set attributes of the div
myDiv.setAttribute('íd', 'newDiv');

//Creating Text Node
let divContent = document.createTextNode("We are creating a new div!");

//Add text node to the node div element variable
myDiv.appendChild(divContent);

//Add the div to the html body tag
document.body.appendChild(myDiv);

//Create a paragraph
let newParagraph = document.createElement("p");
newParagraph.setAttribute("id","newParagraph");
newParagraph.innerHTML = "<strong>This is my paragraph</strong>";

myDiv.appendChild(newParagraph);

let myButton = document.createElement("button");
myButton.setAttribute("id","myButton");
myButton.setAttribute("class","but");
myButton.innerHTML = "Click me";
//myDiv.appendChild(myButton);
myDiv.insertBefore(myButton, newParagraph);