const button = document.querySelector("#bt1");

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
    }
    const blob = await response.blob();
    const imageURl = URL.createObjectURL(blob);
    const qrimage=document.querySelector(".qrimage");
    const img = document.createElement("img");
      img.src = imageURl;
       qrimage.appendChild(img);

    console.log(`QrCode genrated sucessfully`);
  } catch (error) {
    console.error(`failure to genrate QrCode`);
  }
}

button.addEventListener("click", () => {
  const inputBox = document.querySelector(".qrCode input").value;
  
    QrCode(inputBox);
   
});
