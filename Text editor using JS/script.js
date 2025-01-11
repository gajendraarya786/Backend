let h1 = document.querySelector("h1");
let para = document.querySelector("#para");
let inp = document.querySelector("#input");

inp.addEventListener("input", function(){
    console.log(inp.value);
    para.innerText = inp.value;
})