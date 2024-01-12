let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}






let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);



let circularProgress2 = document.querySelector(".circular-progress2"),
    progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,    
    progressEndValue2 = 90,    
    speed2 = 100;
    
let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }    
}, speed2);



let circularProgress3 = document.querySelector(".circular-progress3"),
    progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,    
    progressEndValue3 = 90,    
    speed3 = 100;
    
let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background = `conic-gradient(#7d2ae8 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }    
}, speed3);




