const dark = document.getElementsByClassName("dark-mode")[0];
// const body = document.getElementsByTagName("body");
dark.addEventListener('click', () => {
    if (dark.innerHTML == "Enable Dark Mode") {
        document.body.style.backgroundColor = "Black";
        document.body.style.color = "white";
        dark.innerHTML = "Enable Light Mode"
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        dark.innerHTML = "Enable Dark Mode"
    }
})
