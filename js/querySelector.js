function hacerclic(){
    document.querySelector("#p1").onclick=mostraralerta;
    document.querySelector("#p2").onclick=mostraralerta2;
}

function mostraralerta(){
    alert('hizo click');
    document.getElementById("p1").style.color = "blue"
}

function mostraralerta2(){
    alert('hizo clic donde no debia');
    document.getElementById("p2").style.color = "red"
}

window.onload = hacerclic;