const result = document.getElementById("result");
let iskeydown = false;
document.addEventListener("keydown", (event)=>{
    if(!keydown){
        keydown = true;
        result.textContent += event.key + "  [keydown]  ";
    }
})
document.addEventListener("keyup", (event)=>{
    keydown = false;
    result.textContent += event.key + "  [keyup]  ";
})