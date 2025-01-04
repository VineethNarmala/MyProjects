const button = document.querySelector("#bt1");
const inputBox = document.querySelector(".qrCode input");
const qrimage=document.querySelector(".qrimage");

async function QrCode(data) {
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/";

  const params = new URLSearchParams({
    size: `120x120`, 
    data: data,
    // Data to encode in the QR code
  });

  try {
    const response = await fetch(`${qrCodeUrl}?${params}`);

    if (!response.ok) {
      // const encodeData=encodeURIComponent(data);
      throw new Error(`error:${response.status}`);
      inputBox.classList.add("shake");
      qrimage.classList.remove("urlImg");
      
    }
    const blob = await response.blob();
    const imageURl = URL.createObjectURL(blob);
   
    const img = document.createElement("img");
      qrimage.classList.add("urlImg");
       img.src = imageURl;
       qrimage.appendChild(img);
       inputBox.classList.remove("shake");
    console.log(`QrCode genrated sucessfully`);
  } catch (error) {
    qrimage.classList.remove("urlImg");
    inputBox.classList.add("shake");
    setTimeout(()=>{
      inputBox.classList.remove("shake");
    },2000);
    console.error(`failure to genrate QrCode`);
  }
}

button.addEventListener("click", () => {
  let value=inputBox.value;
    QrCode(value);
});
