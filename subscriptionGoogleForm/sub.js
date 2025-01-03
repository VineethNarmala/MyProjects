const scriptURL = 'https://script.google.com/macros/s/AKfycbxSTB85BYTnZDsR4VNQ4vOoZsLMpevrUcO7EdPyNKCpcIoGkxpIG_96anZwl6FNiTgZ-A/exec';
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
     msg.innerHTML=`Thank You for Subscribing!!`;
     setTimeout(()=>{
        msg.innerHTML=``;
     },3000)
     form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})