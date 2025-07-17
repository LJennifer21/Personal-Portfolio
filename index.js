let themeButton = document.getElementById("theme-button");

const applysavetheme = () =>{
    const savetheme  = localStorage.getItem("theme");
    if (savetheme){
        document.body.classList.add(savetheme)
    }else{
        document.body.classList.add("light-mode");
    }
}

const toggleLightMode = () => {
    if (document.body.classList.contains("light-mode")){
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme","dark-mode");
        themeButton.textContent = "Light Mode";

    }
    else{
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        localStorage.setItem("theme","light-mode");
        themeButton.textContent="Dark Mode";
    }
}
themeButton.addEventListener("click", toggleLightMode);
applysavetheme();
