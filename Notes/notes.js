const addNotes=document.querySelector(".addNotes");
const inputText=document.querySelector(".inputBox");
const notesContainer=document.querySelector(".notesContainer");

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

addNotes.addEventListener("click",()=>{    
   let inputBox=document.createElement("p");
   let img=document.createElement("img");
   inputBox.innerText=`Write your Notes`;
   inputBox.classList.add("inputBox");
   inputBox.setAttribute("contenteditable","true");
   img.src="images/delete.png";
   notesContainer.appendChild(inputBox).appendChild(img);
})


notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove()
        updateStorage();
    }
    else if(e.target.tagName==="p"){
        notes=document.querySelectorAll("inputBox");
        notes.forEach( nt=>{
            nt.onkeyup=function(){
                updateStorage();

            }
            
        })
    }
    
});


