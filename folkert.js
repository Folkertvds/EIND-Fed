 /*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
 /*eslint-env browser*/
 /*eslint 'no-console': 0*/
 /*bij "click" gaat de functie inwerking */


 var button = document.querySelector("button");
 var element = document.querySelector("div");

 button.addEventListener("click", function () {
     element.classList.toggle("sub");
 });
