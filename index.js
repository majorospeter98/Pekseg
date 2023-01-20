const navbar=document.querySelector(".navbar");


const button2=document.querySelector(".menulogo");
console.log(button2);
button2.addEventListener("click", (e) =>{
    navbar.classList.toggle("open");
   
})