// let userInput = document.querySelector("#date");

// //only select the past days
// userInput.max = new Date().toISOString().split("T")[0];

// let result = document.querySelector("#result");

// function calculateAge(){
//     //user's Birthday
//     let birthDate = new Date(userInput.value);

//     let d1 = birthDate.getDate();
//     let m1 = birthDate.getMonth() + 1;
//     let y1 = birthDate.getFullYear();

//     //current day
//     let today = new Date();

//     let d2 = today.getDate();
//     let m2 = today.getMonth() + 1;
//     let y2 = today.getFullYear();

//     // difference in year, month and day
//     let d3,m3,y3;
//      y3= y3 - y1 ;

//      if(m2 >= m1){
//         m3 = m2 - m1;
//      }else{
//         y3--;
//         m3= 12 + m2 -m1;
//      }

//      if(d2 >= d1){
//         d3= d2 -d1;
//      }else{
//         m3--;
//         d3 = getDaysInMonth(y1,m1) + d2 -d1;
//      }

//      if(m3 < 0){
//         m3 = 11;
//         y3--;
//     }

//     //if user input birthday or doesn't input
//     if(isNaN(d1)){
//         result.innerHTML = "Please Select Your Birthday";
//     }else{
//         result.innerHTML = `You are <span class="results">${y3}</span> years, 
//         <span class="results">${m3}</span> months and 
//         <span class="results">${d3}</span> days old. `;
//     }
// }

// function getDaysInMonth(year, month){
//     return new Date(year,month,0).getDate();
// }


let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.querySelector("#result");

function calculateAge() {
    let birthDate = new Date(userInput.value); // Use 'value' instead of 'Value' to get the input value.

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // Months are 0-indexed, so add 1.
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) { // Use '>=', not '=>', for comparison.
        m3 = m2 - m1;
    } else {
        y3--; // Decrement the year, not 'y--'.
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    if (isNaN(d1)) {
        result.innerHTML = "Please Select Your Birthday.";
    } else {
        result.innerHTML = `You are <span class="results">${y3}</span> years, 
        <span class="results">${m3}</span> months and 
        <span class="results">${d3}</span> days old.`;
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
