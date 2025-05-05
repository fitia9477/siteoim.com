let menu = document.querySelector('.menu');
let closebtn = document.querySelector('.closebtn');

function openMenu(){
    closebtn.style.display ="block";
    menu.style.width = '100%';  
}

function closeMenu(){
    closebtn.style.display ="none";
    menu.style.width = '0%'; 
}   