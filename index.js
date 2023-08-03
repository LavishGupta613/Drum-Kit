var n=document.querySelectorAll(".drum").length;
var ans=document.querySelectorAll(".drum");
function sound(key){
    switch(key){
        case "w":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;  
        default:
}
}
function animation(clas){
    document.querySelector("."+clas).classList.add("pressed");
    const myTimeout = setTimeout(function(){
        document.querySelector("."+clas).classList.remove("pressed");
    }, 100);
}


for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var inerHTML=this.innerHTML;
        sound(inerHTML);  
        animation(inerHTML);//
        //const myTimeout = setTimeout(removeani, 100);
        //removeani(inerHTML);          
    })
}

document.addEventListener("keypress",function(event){
    sound(event.key);
})
//document.querySelector("h1").attribute.setAttribute("")