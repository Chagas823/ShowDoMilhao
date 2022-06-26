let cadastrar = document.getElementById("cadastrar");
console.log(cadastrar);

cadastrar.addEventListener("click", ()=>{
    window.location.href = "cadastrar.html";
    console.log("clicado")
})

let login = document.getElementById("btnLogin");

login.addEventListener("click", ()=>{
    window.location.href = "login.html";
    console.log("clicado")
})