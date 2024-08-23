function divCreator(className) {
    const DIV = document.createElement("div");
    DIV.className = className;
    return DIV;
}

const GRID = document.querySelector(".grid");
const GRID_FRAG = document.createDocumentFragment();

for (let i = 0; i < 16; i++) {
    const COL_FRAG = divCreator("col-grid")
    for (let j = 0; j < 16; j++) {
        COL_FRAG.appendChild(divCreator("div-in-grid"));
    };
    GRID_FRAG.appendChild(COL_FRAG);
};

GRID.appendChild(GRID_FRAG);