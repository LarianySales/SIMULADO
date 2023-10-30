// modal de cadastro
// const modalCadastro = document.getElementById("dialog")
// const openCadastro=document.getElementById("cadastro")

// openCadastro.addEventListener("click",()=>{
//     modalCadastro.showModal()
// })
const Button = document.getElementsByClassName("login")
const dialog = document.querySelector('button');


function openModal() {
    
Button.onclick = dialog.showModal()
}
Button.forEach(function (button) {
    button.addEventListener("click", function () {
        var dialog = this.getAttribute("data-modal");
        openModal(dialog);
    });
});
