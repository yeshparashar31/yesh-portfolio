const darkBtn = document.getElementById("darkBtn");
const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");



darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});



menuBtn.addEventListener("click", () => {

    menuList.classList.toggle("show");

});