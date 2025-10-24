const lampada = document.getElementById("lampada");

lampada.addEventListener("mouseover",acender);
lampada.addEventListener("mouseout",apagar);

function acender(){
    lampada.src = "on.png";
    document.body.style.background = "#c115e4ff"
}
function apagar(){
    lampada.src = "off.png";
    document.body.style.background = "#222"
}