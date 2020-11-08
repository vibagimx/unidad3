function hacerclic(){

    lista=document.querySelectorAll("#principal p");
    lista[0].onclick=mostraralerta;
    lista[1].onclick=mostraralerta;
    }
    
    function changeColor(x){
     if(x==0){
        lista[x].style.color="purple";
        lista[x].innerHTML="Welcome to this web application";
     }
        else if(x==1){
            lista[x].style.color="blue";
            lista[x].innerHTML="I hope you like it";
            return false;
        }
        else{
            lista[0].style.color="orange";
            lista[0].innerHTML="Welcome to this web application";
            lista[1].style.color="yellow";
            lista[1].innerHTML="I hope you like it";
        }
    }
    function mostraralerta(){
        alert('Traduciendo el texto...');
    }
    /*function traducir(){
        document.getElementById("1").innerHTML = "Welcome to this web application";
        document.getElementById("2").innerHTML = "I hope you like it";
        document.style.color="pink";
    }*/
    window.onload=hacerclic;
    