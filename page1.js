const abrir = document.querySelector("#abrir")
const fechar = document.querySelector("#fechar")
const modal = document.querySelector("#modal")

abrir.addEventListener("click", ()=>{
    modal.showModal()
})

fechar.addEventListener("click", ()=>{
    modal.close()
})

const themToglle = document.getElementById("themeToggle");

themeToggle.addEventlistener('change', () =>{
    document.body.classList.toggle('dark', themeToggle.checked);
})


