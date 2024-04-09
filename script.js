let imgbox=document.getElementById("img-box");
let qrImage=document.getElementById("qrImage");
let inputfield=document.getElementById("textorurl");
function genQR()
{
    if(inputfield.value.length>0)
    {
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputfield.value;
        imgbox.classList.add("show-img");
    }
    else{
        inputfield.classList.add("error");
        setTimeout(() => {
            inputfield.classList.remove("error");
        }, 1000);
    }
}