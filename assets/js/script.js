var clic = document.getElementById("create-account-button")
var transparence = document.getElementById("overlay")
var popup = document.getElementById("register-popup")
var fermer = document.getElementById("close-register")

clic.addEventListener("click", (ev)=>{
    ev.preventDefault()
    popup.style.display = "block"
    transparence.style.display = "block"
});

fermer.addEventListener("click",()=>{
    popup.style.display = "none"
    transparence.style.display = "none"
});