const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem() {
    let inputText = input.value;
    input.value = '';

    let li = document.createElement("li");
    let span = document.createElement("span");
    let deletebutton = document.createElement("button");

    li.appendChild(span);
    li.appendChild(deletebutton);

    span.textContent = inputText;
    deletebutton.textContent = "Delete";

    ul.appendChild(li);

    deletebutton.addEventListener("click", () => {
        ul.removeChild(li)
    })
    input.focus();
}

button.addEventListener("click", addItem);
input.addEventListener("keydown", key => {
    if (key.code === "Enter") {
        addItem();
    }
});