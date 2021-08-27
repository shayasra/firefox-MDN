let myLogo = document.querySelector("img");

myLogo.onclick = function () {
    let logoSrc = myLogo.getAttribute("src");
    if (logoSrc === "images/firefox-01.png") {
        myLogo.setAttribute("src", "images/firefox-02.png");
    } else {
        myLogo.setAttribute("src","images/firefox-01.png")
    }
}