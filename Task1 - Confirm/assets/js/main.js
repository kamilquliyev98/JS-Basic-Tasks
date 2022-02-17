let message = 'You can change background colour by clicking "OK"';
let body = document.getElementById("body");

// Bu hisseni ona gore comment'e aldim ki, almasam confirm dialog box 2 defe gelir sayt acilanda
// confirm(message);

if (confirm(message)) {
    body.style.backgroundColor = "black";
}