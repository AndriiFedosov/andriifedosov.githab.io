/**
 * Created by Andry on 24.06.2017.
 */
function move(){
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame(){
        if(width>=79){
            clearInterval(id);
        }else{
            width++;
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width*1 + '%';
        }
    }
}
function move1(){
    var elem = document.getElementById("myBar1");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame(){
        if(width>=90){
            clearInterval(id);
        }else{
            width++;
            elem.style.width = width + '%';
            document.getElementById("label2").innerHTML = width*1 + '%';
        }
    }
}
function move2(){
    var elem = document.getElementById("myBar2");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame(){
        if(width>=69){
            clearInterval(id);
        }else{
            width++;
            elem.style.width = width + '%';
            document.getElementById("label3").innerHTML = width*1 + '%';
        }
    }
}
function move3(){
    var elem = document.getElementById("myBar3");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame(){
        if(width>=92){
            clearInterval(id);
        }else{
            width++;
            elem.style.width = width + '%';
            document.getElementById("label4").innerHTML = width*1 + '%';
        }
    }
}