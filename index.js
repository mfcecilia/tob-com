//copyright

function copyrightYear() {
     'use strict';
     document.getElementById("year").innerHTML = new Date().getFullYear();
 }

 copyrightYear(); 


//countdown to burning man

// Set the date we're counting down to
var deadline = new Date("August 30, 2020").getTime();
//current date
var now = new Date().getTime();


//countdown to end of burning man
