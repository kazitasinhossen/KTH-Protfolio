
var menu=document.querySelector(".menu__finder");
var button=document.querySelector(".menubutton");

var count=0;


button.addEventListener("click",function(){
    count++
   


if(count%2 !== 0){
    menu.classList.add("menu")
    menu.classList.remove("menuhide")
}
else{
    menu.classList.remove("menu")
    menu.classList.add("menuhide")
}
    
})
document.querySelector(".menu__link").addEventListenerK("click",function(){
        document.write(count++)
    })