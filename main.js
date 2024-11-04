let toggleMenu = document.querySelector('.toggle-menu');
let toggle = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function () {
    toggle.classList.toggle('toggle');


});



var eye = document.querySelectorAll(".eye");
var input = document.querySelectorAll(".ps");


eye[0].onclick = () => {
    if (input[0].type === "password") {
        input[0].type = "text";
        eye[0].classList.replace("fa-eye-slash", "fa-eye");
    } else {
        input[0].type = "password";
        eye[0].classList.replace("fa-eye", "fa-eye-slash");
    }

};
eye[1].onclick = () => {
    if (input[1].type === "password") {
        input[1].type = "text";
        eye[1].classList.replace("fa-eye-slash", "fa-eye");
    } else {
        input[1].type = "password";
        eye[1].classList.replace("fa-eye", "fa-eye-slash");
    }
};