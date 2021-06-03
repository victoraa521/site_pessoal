
var width = window.innerWidth;
if(width < 930){
    function comum(){
        document.getElementById("uul").style.left = "-100%";
        document.getElementById("uul").style.transition=".3s"
    }

    var botao0 = document.getElementById("bot0");
    botao0.addEventListener('click',function(){
        comum()
    })

    var botao1 = document.getElementById("bot1");

    botao1.addEventListener('click',function(){
        comum()
    })

    var botao2 = document.getElementById("bot2");

    botao2.addEventListener('click', function(){
        comum()
    })

    var botao3 = document.getElementById("bot3");

    botao3.addEventListener('click', function(){
        comum()
    })


    var menu_lateral = document.getElementById("menu_lateral")
    menu_lateral.addEventListener('click', function(){
        if (document.getElementById("uul").style.left < "0px"){
            document.getElementById("uul").style.left = "0";
        }else{
            document.getElementById("uul").style.left = "-100%";
            
        }
        document.getElementById("uul").style.transition=".5s"
    })
}

