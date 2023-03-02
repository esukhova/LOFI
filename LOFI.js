
    function showValue(newValue) {
        document.getElementById("range").innerHTML=newValue;
    }
    
    function changetopink(){  
        document.getElementById("html").className = "pink";
    }
        
    function changetoyellow(){  
        document.getElementById("html").className = "yellow";
    }
        
    function changetogreen(){  
        document.getElementById("html").className = "green";
    }
        
    function message(){
        alert ('Вы отправили анкету, спасибо!');
    }
        
        
    function thank(){
        var thank = document.createElement("span");
        var textthank = document.createTextNode("Спасибо!");
        thank.appendChild(textthank);
        var main = document.getElementById("main");
        var afterthank = document.getElementById("afterthank");
        afterthank.appendChild(thank);
    }