let qrimg = document.getElementById("qrimg");
let input = document.getElementById("input");
let genarate = document.getElementById("generatebtn");

genarate.addEventListener("click",()=>{
    let url = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${input.value}`
    qrimg.src = url
})