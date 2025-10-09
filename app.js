// get the popups
[popup, popup2, popup3, popup4] =
    document.getElementsByClassName("popup-project");
// get buttons that open the popups
[btn, btn2, btn3, btn4] = document.getElementsByClassName(
    "project-grid-button"
);
// get the <span> element that closes the popup
[span, span2, span3, span4] = document.getElementsByClassName("close");

// when the user clicks the button, open the popup
btn.onclick = function () {
    popup.style.display = "block";
};
// when the user clicks the button for project 2, open the popup
btn2.onclick = function () {
    popup2.style.display = "block";
};
// when the user clicks the button for project 3, open the popup
btn3.onclick = function () {
    popup3.style.display = "block";
};
// when the user clicks the button for project 4, open the popup
btn4.onclick = function () {
    popup4.style.display = "block";
};
// when the user clicks on <span> (x), close the popup
span.onclick = function () {
    popup.style.display = "none";
};
span2.onclick = function () {
    popup2.style.display = "none";
};
span3.onclick = function () {
    popup3.style.display = "none";
};
span4.onclick = function () {
    popup4.style.display = "none";
};
// when the user presses the "Escape" key, close the popup
window.onkeydown = function (event) {
    if (event.key === "Escape") {
        popup.style.display = "none";
        popup2.style.display = "none";
        popup3.style.display = "none";
        popup4.style.display = "none";
    }
};
// when the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
    if (event.target == popup2) {
        popup2.style.display = "none";
    }
    if (event.target == popup3) {
        popup3.style.display = "none";
    }
    if (event.target == popup4) {
        popup4.style.display = "none";
    }
};
