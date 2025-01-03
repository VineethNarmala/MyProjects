const Baseurl="https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json";
 const dropdown=document.querySelectorAll(".dropdown .to select");
 const btn=document.querySelector("form button");
  const tocurr=document.querySelector(".to select");
  






for(let select of dropdown){
    for (currcode in countryList) {
     let newOption=document.createElement("option");
     newOption.innerText=currcode;
     newOption.value=currcode;
     if(select.name === "from" && currcode === "USD"){
        newOption.selected ="selected";
     } else if(select.name === "to" && currcode === "INR"){
       newOption.selected =  "selected";
     }
     select.append(newOption);
     }   
       select.addEventListener("change",(evt)=>{
            updateflag(evt.target);

        }) ;
        
    }
    const updateflag = (element)=>{
        let currcode=element.value;
        let countrycode=countryList[currcode];
        let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
          let img =element.parentElement.querySelector("img");
          img.src=newSrc;
         
        
    };
    btn.addEventListener("click", async (evt)=>{
          evt.preventDefault();
        let amount=document.querySelector(".amount input");
        let  amountvl=amount.value;
        if(amountvl==="" || amountvl<1){
            amountvl=1;
            amount.value="1";
        }    
            const response= await fetch(Baseurl);
            let data=await response.json();
            const exchange =Math.round(data.usd[tocurr.value.toLowerCase()]);
    
             let finalamount=amountvl*exchange;
             let msg=document.querySelector(".msg");
             msg.innerText=`${amountvl}USD = ${finalamount} ${tocurr.value}`;
             document.querySelector("#note").style.display="block";
    });


    

    

























