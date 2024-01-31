const buttonElem = document.querySelector(".clickMe");
const bodyElem = document.body;
let isWhite = false;
buttonElem.addEventListener("click", ()=>{
    console.log("I am clicked");
    if (isWhite) bodyElem.style.backgroundColor = "";
    else bodyElem.style.backgroundColor = "#CEDEBD";
    isWhite = !isWhite;
});

//# sourceMappingURL=index.377278e2.js.map
