/*
    Student Name: Lakhwinder Singh 
    File Name: script.js-Solution
    Date: 01/01/2020
*/

//Hamburger menu function
function hamburger(){
    var menu =document.getElementById("menu-links");
    if(menu.style.display === "block"){
        menu.style.display ="none"
    }
    else{
        menu.style.display = "block";
    }
}
