let input = document.getElementsByTagName("input")
console.log(input);
let click = 0 
let genotp = document.getElementById("genotp");
genotp.addEventListener("click",()=>{
    if(!click){
        click = 1
        let  OTP = ""
        let k=0;
for(i=1;i<=6;i++){
    OTP+=Math.floor(Math.random()*10)
}
alert(`the otp is ${OTP}`);
setInterval(()=>{
    if(k<OTP.length)
    input.item(k).value=OTP[k];
k++
},300);
setTimeout(()=>{
    genotp.style.backgroundColor="green"
    genotp.innerHTML="S U B M I T"
},1800)
        }else{
            alert(`You are direct to the Home Page`)
            window.open("./Home.html")
        }
    }
)

