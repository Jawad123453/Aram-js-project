let time1=document.querySelector(".time");
let mainhour=document.querySelector(".mainhour");
let mainmint=document.querySelector(".mainmint");
let pmam=document.querySelector(".pmam");
let btn=document.querySelector(".btn");


function setmaintime(){
  setInterval(() => {
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let p="AM";

    if(h >= 12){
      h=h-12;
      h=`0${h}`;
      p="PM";
    }
    if(m < 10){
      m=`0${m}`;
    }
    if(s < 10){
      s=`0${s}`;
    }
    time1.innerHTML=`${h}:${m}:${s} ${p}`;
  }, 1000);
}
setmaintime()

function checkif(){
  
}


btn.addEventListener("click",function(){
  checkif()
})