let themeButton = document.getElementById("theme-button");

const applysavetheme = () =>{
    const savetheme  = localStorage.getItem("theme");
    if (savetheme){
        document.body.classList.add(savetheme);
        if (savetheme === "dark-mode"){
            themeButton.textContent="Light Mode";

        }
        else{
            themeButton.textContent = "Dark Mode";
        }
        
    }else{
        document.body.classList.add("light-mode");//defult dark mode
        themeButton.textContent = "Light Mode";
    }
}

const toggleLightMode = () => {
    if (document.body.classList.contains("light-mode")){//when light mode is on 
        document.body.classList.remove("light-mode");//remove light mode
        document.body.classList.add("dark-mode");//add dark mode
        
        themeButton.textContent = "Light Mode";//button will say light mode
        localStorage.setItem("theme","dark-mode");//stores dark mode

    }
    else{
        document.body.classList.remove("dark-mode");//when dark mode remove dark mode
        document.body.classList.add("light-mode");//add in light mode
        
        themeButton.textContent="Dark Mode";//button will say dark mode 
        localStorage.setItem("theme","light-mode");//set as light mode as the theme
    }
}
themeButton.addEventListener("click", toggleLightMode);//click to go from light to dark or dark to light mode
applysavetheme();//letting apply save theme
