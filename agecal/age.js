const bt1=document.querySelector("#bt1");
const p2=document.querySelector("#p2");
let date1=document.querySelector("#date1");
let date2=document.querySelector("#date2");

bt1.addEventListener("click",()=>{
    let dateObj1=new Date(date1.value);
    let dateObj2=new Date(date2.value);
    let year1=dateObj1.getFullYear();
    let year2= dateObj2.getFullYear();
    let year=year1-year2;
    let month1=dateObj1.getMonth()+1;
    let month2=dateObj2.getMonth()+1;
    let month=month1-month2;
    if(date1.value==""||date2.value==""){
        alert("enter Dates")
    }
    else if(month===0){
        p2.innerText=`You are ${year}years old`
         p2.style.display="block"
    }
    else if(year===0){
    p2.innerText=`You are ${month}months old`
    p2.style.display="block"
    }
});

