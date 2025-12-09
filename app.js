// get the popups
popups = document.getElementsByClassName("popup-project");
// get buttons that open the popups
buttons = document.getElementsByClassName("project-grid-button");
// get the <span> element that closes the popup
popupCloses = document.getElementsByClassName("closePopup");

// when the user clicks the button, open the popup
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => (popups[i].style.display = "block");
}
// when the user clicks on <span> (x), close the popup
for (let i = 0; i < popupCloses.length; i++) {
    popupCloses[i].onclick = () => (popups[i].style.display = "none");
}

// when the user presses the "Escape" key, close the popup
window.onkeydown = function (event) {
    if (event.key === "Escape") {
        popups.forEach((popup) => {
            popup.style.display = "none";
        });
    }
};
// when the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
    for (let i = 0; i < popups.length; i++) {
        if (event.target == popups[i]) {
            popups[i].style.display = "none";
        }
    }
};
