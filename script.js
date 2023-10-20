const wrapper =document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn =wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Gerando um Qr Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar Qr Code"
        wrapper.classList.add("active");
    });
   
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});
function coletardados () { 
    var respondeai = document.getElementById('nome').value; document.getElementById('nomecoletado').textContent = respondeai; 

    var respondeai = document.getElementById('senha').value; document.getElementById('senhacoletado').textContent = respondeai;

    var respondeai = document.getElementById('altura').value; document.getElementById('alturacoletado').textContent = respondeai; 

    var respondeai = document.getElementById('data').value; document.getElementById('datacoletado').textContent = respondeai;
 }


