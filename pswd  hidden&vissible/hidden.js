const pswdLock = document.querySelector("#pswdLock");
const eyeClose = document.querySelector("#eyeClose");

eyeClose.addEventListener("click", () => {
  if (pswdLock.type == "password") {
    pswdLock.type = "text";
    eyeClose.classList.add("fa-eye");
    eyeClose.classList.remove("fa-eye-slash")
    
    
  } else {
    pswdLock.type="password";
    eyeClose.classList.remove("fa-eye");
    eyeClose.classList.add("fa-eye-slash");
  }
    
    
  });
// eyeClose.onclick=function(){
//     if (pswdLock.type == "password") {
//         pswdLock.type = "text";
//         eyeClose.classList.add("fa-eye");
//         eyeClose.classList.remove("fa-eye-slash")
        
        
//       } else {
//         pswdLock.type="password";
//         eyeClose.classList.remove("fa-eye");
//         eyeClose.classList.add("fa-eye-slash")
         
       
        
        
//       }
//     }
