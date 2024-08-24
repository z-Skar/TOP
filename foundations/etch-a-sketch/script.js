const GRID = document.querySelector(".grid");

function divCreator(className, proportion) {
    const DIV = document.createElement("div");
    DIV.className = className;
    DIV.setAttribute("style", `flex: 0 0 ${parseFloat(getComputedStyle(GRID).width)/(proportion)}px`)
    return DIV;
}

function gridCreator(proportion) {
    const GRID_FRAG = document.createDocumentFragment();
    for (let i = 0; i < proportion; i++) {
        for (let j = 0; j < proportion; j++) {
            GRID_FRAG.appendChild(divCreator("div-in-grid", proportion));
        };
    };
    GRID.appendChild(GRID_FRAG);
};

gridCreator(10);