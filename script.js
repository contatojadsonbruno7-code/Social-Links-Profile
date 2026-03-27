const btnToggle = document.getElementById ("toggle-theme");
const html = document.documentElement;
    
btnToggle.addEventListener("click", toggleTheme);

function toggleTheme(){
    if(html.classList.contains ("light")) {
        html.classList.remove("light");
        btnToggle.innerHTML = `<i class="fa-regular fa-lightbulb"></i>`;
        
    } else{
        btnToggle.innerHTML= `<i class="fa-solid fa-power-off"></i>`
        html.classList.add("light");
    }

}