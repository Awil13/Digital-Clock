let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000);

//fix code for changing background with time
if(currentTime>17&&currentTime<6){
    document.body.style.background= 'linear-gradient(45deg, #c86b98, #280f36)';
} else if(currentTime>5&&currentTime<12){
    document.body.style.background= 'linear-gradient(45deg, #c86b98, #280f36)';
};
