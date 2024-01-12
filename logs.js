// document.addEventListener('DOMContentLoaded', function () {
//     let records;
  
//     // Fetch data from the server
//     fetch('https://script.google.com/macros/s/AKfycbzCklZFzCabSrOMKJjEUs8Yv5lL9wGodMLhjKah7dx-bSAeB3yrjS2lMd7lTEpi3oz2/exec')
//       .then(res => res.json())
//       .then(data => {
//         records = data.content;
//         displayRecords(records);
//       });
  
//     // Function to display records in the table
//     function displayRecords(records) {
//       let tr = records.reduce((prev, cur) => {
//         let td = cur.map(e => {
//           if (typeof e === 'string' && e.includes('T') && e.includes('Z')) {
//             let date = new Date(e);
//             let strTime = date.toISOString();
//             return `<td>${strTime}</td>`;
//           } else {
//             return `<td>${e}</td>`;
//           }
//         });
//         return prev + `<tr>${td.join('')}</tr>`;
//       }, '');
//       document.querySelector('#table').innerHTML = tr;
//     }
  
//     // Event listener for form submission
//     document.querySelector('#show-range').addEventListener('click', function (e) {
//       e.preventDefault();
//       filterRecords();
//     });
  
//     // Function to filter records based on date range
//     function filterRecords() {
//       let startInput = document.querySelector('#start-date-time').value;
//       let endInput = document.querySelector('#end-date-time').value;
//       let startDate = new Date(startInput);
//       let endDate = new Date(endInput);
  
//       let filteredRecords = records.filter(record => {
//         let recordDate = new Date(record[0]); // assuming the date is in the first column
//         return recordDate >= startDate && recordDate <= endDate;
//       });
  
//       displayRecords(filteredRecords);
//     }
//   });
  