var container=document.querySelector(".formContainer");
var signup=document.querySelector(".signup");
var close=document.querySelector(".close");
var cancle=document.querySelector(".cancle");
close.addEventListener("click",function() {
    container.style.display="none";
    signup.style.opacity="1";
});
signup.addEventListener("click",function() {
    container.style.display="block";
    signup.style.opacity=".5";
});
window.onclick=function (event) {
    if(event.target==container){
       container.style.display="none";
       signup.style.opacity="1";
    }
}
cancle.addEventListener("click",function() {
    container.style.display="none";
    signup.style.opacity="1";
});