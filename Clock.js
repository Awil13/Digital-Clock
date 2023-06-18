let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000);

 let change = ()=>{
    let time = new Date();
    if (time.getHours()>18 && time.getHours()<6){
        document.getElementById("afternoon").id = "night";
    } else if (time.getHours()>5 && time.getHours<12){
        document.getElementById("afternoon").id = "day";
    } else{
        document.getElementById("afternoon").id = "afternoon";
    }
};



