const GRID = document.querySelector(".grid");
const GRID_FRAG = document.createDocumentFragment();
const IN_RATIO = document.querySelector("#proportion-input");
const OUT_RATIO = document.querySelector("#proportion-output");

function divCreator(className, proportion) {
    const DIV = document.createElement("div");
    DIV.className = className;
    DIV.style.flex = `0 0 ${parseFloat(getComputedStyle(GRID).width)/(proportion)}px`;
    return DIV;
}

function gridCreator(proportion) {
    for (let i = 0; i < proportion; i++) {
        for (let j = 0; j < proportion; j++) {
            GRID_FRAG.appendChild(divCreator("div-in-grid", proportion));
        };
    };
    GRID.appendChild(GRID_FRAG);
};

OUT_RATIO.textContent = IN_RATIO.value;
gridCreator(IN_RATIO.value);

IN_RATIO.addEventListener("input", (event) => {
    OUT_RATIO.textContent = event.target.value;
    GRID.replaceChildren();
    gridCreator(OUT_RATIO.textContent);
});

GRID.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#FF0000";
});