
let redes=document.getElementById("redes");
redes.addEventListener("click", hacia_abajo);

function hacia_abajo(){
    window.scrollTo(0,document.body.scrollHeight);
}