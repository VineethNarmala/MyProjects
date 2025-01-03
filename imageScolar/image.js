let scrollBar=document.querySelector(".gallery");
let backBtn=document.querySelector("#backWard");
let nextBtn=document.querySelector("#forWard");


scrollBar.addEventListener("wheel",(event)=>{
    event.preventDefault();
    scrollBar.scrollLeft+=event.deltaX;
     scrollBar.style.scrollBehavior="auto";
});
backBtn.addEventListener("click",()=>{
    scrollBar.style.scrollBehavior="smooth";
        scrollBar.scrollLeft -=900;
   
    
    
})
nextBtn.addEventListener("click",()=>{
    scrollBar.style.scrollBehavior="smooth";
        scrollBar.scrollLeft +=900;
   
})