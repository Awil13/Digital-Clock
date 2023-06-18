let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let currentTime = new Date();
 
let change = ()=>{
    if (currentTime.getHours() >= 5 && currentTime.getHours() < 12){
    document.body.className = "day";
    } else if( currentTime.getHours() >= 12  && currentTime.getHours()< 18 ){
        document.body.className = "afternoon";
    } else {
        document.body.className = "night";
    }
};

let double = ()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
};

setInterval(()=>{
    change();
    double();
   
},1000);
