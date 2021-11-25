/*
function addingEventListener() {
    const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
}
);
}
*/

//named function callback
function addingEventListener() {
    const input = document.getElementById("input");

    function clickAlert() {
        alert("I was clicked!");
    }
    input.addEventListener("click", clickAlert);
}
//invoke clickAlert WHEN the click action is received, so we are only referring to it
//until the the time comes to invoke it


//-- This solution doesn't work??
// const input = document.getElementById('input');

// function addingEventListener() {
//   input.addEventListener('click', function() {
//     return "clicked"
//   });
// }

addingEventListener();

//anonymous function callback
// function addingEventListener() {
//     const input = document.getElementById('input');
//     input.addEventListener('click', function() {
//       alert('I was clicked!');
//     });
// }



// function divClick() {
    

//     for (let i=0; i<document.getElementsByTagName("div").length; i++) {
//         let input = document.getElementsByTagName("div")[i];
//     function clickAlert() {
//         alert(`I'm div ${i}!`);
        
//     }
//     input.addEventListener("click", clickAlert);
// }
// }    

// console.log(document.getElementsByTagName("div").length)
// divClick();