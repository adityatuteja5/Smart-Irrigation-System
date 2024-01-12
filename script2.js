const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});


sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})


































// let circularProgress = document.querySelector(".circular-progress"),
//     progressValue = document.querySelector(".progress-value");

// let speed = 100;

// let progressEndValues = [46,46,47,47,47,10,12,26,27,28,27,26,46,46,47,47,47,48,12,6,7,7,8,46,46,47,47,47,25,25,26,27,28,27,26,42,42,43,43,44,45];

// let i = 0;

// function animateProgressBar() {
//   let progressStartValue = 0;
//   let progressEndValue = progressEndValues[i];

//   let progress = setInterval(() => {
//     progressStartValue++;
//     progressValue.textContent = `${progressStartValue}`;
//     circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

//     if(progressStartValue == progressEndValue){
//         clearInterval(progress);
//         i++;

//         // Check if we have reached the end of the array
//         if(i < progressEndValues.length) {
//           // If not, add a delay and trigger the next animation
//           setTimeout(() => {
//             animateProgressBar();
//           }, 1000);
//         } else {
//           // If we have reached the end, reset the index
//           i = 0;
//         }
//     }
//   }, speed);
// }

// animateProgressBar();




// // let circularProgress = document.querySelector(".circular-progress"),
// //     progressValue = document.querySelector(".progress-value");

// // let progressStartValue = 0,    
// //     progressEndValue = 0,    
// //     speed = 100;


    
// // let progress = setInterval(() => {
// //     progressStartValue++;

// //     progressValue.textContent = `${progressStartValue}`
// //     circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

// //     if(progressStartValue == progressEndValue){
// //         clearInterval(progress);
// //     }    
// // }, speed);



// let circularProgress2 = document.querySelector(".circular-progress2"),
//     progressValue2 = document.querySelector(".progress-value2");

// let progressStartValue2 = 0,    
//     progressEndValue2 = 0,    
//     speed2 = 100;


    
// let progress2 = setInterval(() => {
//     progressStartValue2++;

//     progressValue2.textContent = `${progressStartValue2}`
//     circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

//     if(progressStartValue2 == progressEndValue2){
//         clearInterval(progress2);
//     }    
// }, speed2);




// let circularProgress3 = document.querySelector(".circular-progress3"),
//     progressEndValue3 = document.querySelector(".progress-value3");

// let speed3 = 100;

// let progressEndValues3 = [46,46,47,47,47,10,12,26,27,28,27,26,46,46,47,47,47,48,12,6,7,7,8,46,46,47,47,47,25,25,26,27,28,27,26,42,42,43,43,44,45];

// let i3 = 0;

// function animateProgressBar3() {
//   let progressStartValue3 = 0;
//   let progressEndValues3 = progressEndValues3[i];

//   let progress3 = setInterval(() => {
//     progressStartValue3++;
//     progressValue3.textContent = `${progressStartValue3}`;
//     circularProgress3.style.background = `conic-gradient(#7d2ae8 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`;

//     if(progressStartValue3 == progressEndValue3){
//         clearInterval(progress3);
//         i3++;

//         // Check if we have reached the end of the array
//         if(i3 < progressEndValues3.length) {
//           // If not, add a delay and trigger the next animation
//           setTimeout(() => {
//             animateProgressBar3();
//           }, 1000);
//         } else {
//           // If we have reached the end, reset the index
//           i3 = 0;
//         }
//     }
//   }, speed3);
// }

// animateProgressBar3();

// let progressEndValue3;

// fetch('https://script.google.com/macros/s/AKfycbxVQXsWSasxNBOGBmnOppjWIc5EIsDaFD_zShudUKVxC9Czkht8bjaysMwh6xe4T0M5vQ/exec')
//   .then(res => res.json())
//   .then(data => {
//     progressEndValue3 = data.data;
//     // Use the retrieved value as needed
//     console.log(progressEndValue3);

//     // Call your function or perform other operations using progressEndValue3
//     circularProgress(progressEndValue3);
//   });



// let progressEndValue3;

// function fetchData() {
//   fetch('https://script.google.com/macros/s/AKfycbxVQXsWSasxNBOGBmnOppjWIc5EIsDaFD_zShudUKVxC9Czkht8bjaysMwh6xe4T0M5vQ/exec')
//     .then(response => response.text())
//     .then(data => {
//       const value = parseInt(data.trim());
//       console.log(value);

//       // Check if the value is a valid number
//       if (isNaN(value)) {
//         console.error('Invalid value:', data);
//         progressEndValue3 = null; // Set the variable to null if the value is invalid
//       } else {
//         progressEndValue3 = value; // Store the valid value in the variable
//       }

//       // Call your function or perform other operations using progressEndValue3
//       circularProgress(progressEndValue3);

//       // Fetch the updated value again after 5 seconds
//       setTimeout(fetchData, 5000);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       progressEndValue3 = null; // Set the variable to null on error

//       // Fetch the value again after 5 seconds
//       setTimeout(fetchData, 5000);
//     });
// }

// // Fetch the initial value
// fetchData();

// function circularProgress(value) {
//   // Your circular progress bar logic here
//   // Use the 'value' variable as needed
// }


let progressEndValue;

function fetchProgressValue() {
  fetch('https://script.google.com/macros/s/AKfycbz6JdX4SzW7022wXe9bORAtnqN6wYMSFCqNomLdLNDN9ryRTpwGBNHo97RcVurnvQmIbw/exec')
    .then(res => res.text())
    .then(data => {
      const newValue = Number(data);
      if (newValue !== progressEndValue) {
        progressEndValue = newValue;
        console.log(progressEndValue);
        updateProgressBar();
      }
    })
    .catch(error => {
      console.error('Error fetching progress value:', error);
    });
}

function updateProgressBar() {
  let circularProgress = document.querySelector(".circular-progress");
  let progressValue = document.querySelector(".progress-value");
  let progressStartValue = 0;
  let speed = 100;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}`;
    circularProgress.style.background = `conic-gradient(#7d3ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

// Fetch progress value initially
fetchProgressValue();

// Fetch progress value every 30 seconds
setInterval(fetchProgressValue, 30000);



let progressEndValue2;

function fetchProgressValue2() {
  fetch('https://script.google.com/macros/s/AKfycbzNPp76oZ9sRoDmZEW64Dee51QJbbfZ4L6Z1vCLJ30AXgb_65ghOkycmDlxbgLmMyRITQ/exec')
    .then(res => res.text())
    .then(data => {
      const newValue = Number(data);
      if (newValue !== progressEndValue2) {
        progressEndValue2 = newValue;
        console.log(progressEndValue2);
        updateProgressBar2();
      }
    })
    .catch(error => {
      console.error('Error fetching progress value:', error);
    });
}

function updateProgressBar2() {
  let circularProgress2 = document.querySelector(".circular-progress2");
  let progressValue2 = document.querySelector(".progress-value2");
  let progressStartValue2 = 0;
  let speed2 = 100;

  let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}`;
    circularProgress2.style.background = `conic-gradient(#7d3ae8 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`;

    if (progressStartValue2 == progressEndValue2) {
      clearInterval(progress2);
    }
  }, speed2);
}

// Fetch progress value initially
fetchProgressValue2();

// Fetch progress value every 30 seconds
setInterval(fetchProgressValue2, 30000);
























let progressEndValue3;

function fetchProgressValue3() {
  fetch('https://script.google.com/macros/s/AKfycbyzf5kjk-RvAEcUjWxW9fqg6-f6i7eS1NGMBCOYnx7hdHMagTBQkOoo8lITu7JVr5NrCQ/exec')
    .then(res => res.text())
    .then(data => {
      const newValue = Number(data);
      if (newValue !== progressEndValue3) {
        progressEndValue3 = newValue;
        console.log(progressEndValue3);
        updateProgressBar3();
      }
    })
    .catch(error => {
      console.error('Error fetching progress value:', error);
    });
}

function updateProgressBar3() {
  let circularProgress3 = document.querySelector(".circular-progress3");
  let progressValue3 = document.querySelector(".progress-value3");
  let progressStartValue3 = 0;
  let speed3 = 100;

  let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}`;
    circularProgress3.style.background = `conic-gradient(#7d3ae8 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`;

    if (progressStartValue3 == progressEndValue3) {
      clearInterval(progress3);
    }
  }, speed3);
}

// Fetch progress value initially
fetchProgressValue3();

// Fetch progress value every 30 seconds
setInterval(fetchProgressValue3, 30000);















// let circularProgress4= document.querySelector(".circular-progress4"),
//     progressValue4 = document.querySelector(".progress-value4");

// let progressStartValue4 = 0,    
//     progressEndValue4 = 0,    
//     speed4 = 100;


    
// let progress4 = setInterval(() => {
//     progressStartValue4++;

//     progressValue4.textContent = `${progressStartValue4}`
//     circularProgress4.style.background = `conic-gradient(#7d3ae8 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`

//     if(progressStartValue4 == progressEndValue4){
//         clearInterval(progress4);
//     }    
// }, speed4);







// let circularProgress5= document.querySelector(".circular-progress5"),
//     progressValue5 = document.querySelector(".progress-value5");

// let progressStartValue5 = 0,    
//     progressEndValue5 = 0,    
//     speed5 = 100;


    
// let progress5 = setInterval(() => {
//     progressStartValue5++;

//     progressValue5.textContent = `${progressStartValue5}`
//     circularProgress5.style.background = `conic-gradient(#7d3ae8 ${progressStartValue5* 3.6}deg, #ededed 0deg)`

//     if(progressStartValue5 == progressEndValue5){
//         clearInterval(progress5);
//     }    
// }, speed5);

