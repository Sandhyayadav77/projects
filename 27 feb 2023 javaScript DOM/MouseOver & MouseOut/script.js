const paragraph = document.getElementById("showText");
const instruction = document.getElementsByClassName("instruction")[0];
paragraph.addEventListener('mouseover', ()=>{
    paragraph.style.background= "black";
    paragraph.style.color= "white";
    instruction.innerHTML = `MouseOut from the Box`;
})
paragraph.addEventListener('mouseout', ()=>{
    paragraph.style.background= "white";
    paragraph.style.color= "black";
    instruction.innerHTML = `Enter the Mouse again in the Box`;

})