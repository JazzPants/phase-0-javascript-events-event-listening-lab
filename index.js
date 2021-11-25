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

//anonymous function callback
// function addingEventListener() {
//     const input = document.getElementById('input');
//     input.addEventListener('click', function() {
//       alert('I was clicked!');
//     });
// }

addingEventListener();

// function divClick() {
    

//     for (let i=0; i<document.getElementsByTagName("div").length; i++) {
//         const input = document.getElementsByTagName("div")[i];
//     function clickAlert() {
//         alert(`I'm div ${i}!`);
        
//     }
//     input.addEventListener("click", clickAlert);
// }
    
// }
// console.log(document.getElementsByTagName("div").length)
// divClick();