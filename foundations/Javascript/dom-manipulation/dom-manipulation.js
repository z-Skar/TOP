// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";

container.appendChild(redParagraph);

const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.setAttribute("style", "color: #0000FF;")

container.appendChild(header);


// New pink container.

const subcontainer = document.createElement("div");
subcontainer.setAttribute("style", "background-color: #F076FF; border: 2px solid black;");

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";
subcontainer.appendChild(header1);

const paragraph = document.createElement("p");
paragraph.textContent = "ME TOO!";
subcontainer.appendChild(paragraph);

container.appendChild(subcontainer);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});  
