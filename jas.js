

let popup = document.querySelector('.popup-section');
let getbtn = document.getElementById("btn")

popup.addEventListener('click', function () {
    popup.style.display = "none";
})

getbtn.addEventListener('click', function () {

    popup.style.display = "block";
    event.preventDefault();
})

