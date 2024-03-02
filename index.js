 const day=document.querySelector("#day");
 const hour=document.querySelector("#hour");
 const min=document.querySelector("#min");
 const sec=document.querySelector("#sec"); 


function updatedtime(){
    const getYear=new Date().getFullYear();
    const newYear=new Date(`January 1 ${getYear+1   } 00:00:00`);
    const getDAte=new Date();
    const Difference=newYear-getDAte; 
    const Daysleft=Math.floor(Difference/1000/60/60/24)
    const Hourleft=Math.floor(Difference/1000/60/60)%24;
    const Minleft=Math.floor(Difference/1000/60)%60;
    const Secleft=Math.floor(Difference/1000)%60;
    // console.log(Daysleft+" "+Hourleft+" "+Minleft+" "+Secleft);
    day.innerHTML=Daysleft<10?"0"+Daysleft:Daysleft;
    hour.innerHTML=Hourleft<10?"0"+Hourleft:Hourleft;
    min.innerHTML=Minleft<10?"0"+Minleft:Minleft;
    sec.innerHTML=Secleft<10?"0"+Secleft:Secleft;
}
// updatedtime();
setInterval(updatedtime,1000)