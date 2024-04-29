let dob1;
const settingel = document.getElementById("settingsicon");
const contentsetel =document.getElementById("contentset");
const initialtextel = document.getElementById("initialtext");
const afterdobtext = document.getElementById("afterdobtext");
const buttel = document.getElementById("butt");
const dob= document.getElementById("dob");
const yearel = document.getElementById("year");
const monthel = document.getElementById("month");
const dayel = document.getElementById("day");
const hourel = document.getElementById("hour");
const miniuteel = document.getElementById("minute");
const secondel = document.getElementById("seconds");

let isdobopen = false;
const toggledata = () =>{
 if(isdobopen){
    contentsetel.classList.add("hide");
    
 }
 else{
    contentsetel.classList.remove("hide")
 }
 isdobopen = !isdobopen;

console.log('Toggle',isdobopen);

};

const updateage=()=>{
    const currentDate = new Date();
    const dateDiff = currentDate - dob1;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12; // Consider average days in a month
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30; // Adjust for actual days in a month
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
    const seconds = Math.floor(dateDiff / 1000) % 60;
    yearel.innerHTML = year;
    monthel.innerHTML = month;
    dayel.innerHTML = day;
    hourel.innerHTML = hour;
    miniuteel.innerHTML = minute;
    secondel.innerHTML = seconds;
   
    

};
const setdob=()=>{

const dateString = dob.value;

dob1 = dateString ? new Date(dateString) : null;


if(dob1){
    initialtextel.classList.add("hide");
    afterdobtext.classList.remove("hide");
  
    setInterval(()=>updateage(),1000)

}
else{
    afterdobtext.classList.add("hide");
    initialtextel.classList.remove("hide");
    
   

}


};


setdob();

settingel.addEventListener("click",toggledata);
buttel.addEventListener("click",setdob);