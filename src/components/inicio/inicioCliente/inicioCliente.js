document.addEventListener("DOMContentLoaded", function () {
    const btnConfig = document.getElementById("btnConfig");
    const menuDisplay = document.getElementById("menuDisplay");
    btnConfig.addEventListener("click", function(){
        //Despliega el menu
        menuDisplay.style.display = (menuDisplay.style.display === "none" || menuDisplay.style.display === "") ? "block" : "none";
    });
    document.addEventListener("click", function(event){
        if (!btnConfig.contains(event.target) && !menuDisplay.contains(event.target)) {
            menuDisplay.style.display = "none";
        }
    });
});