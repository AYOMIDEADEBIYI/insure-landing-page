function myBars() {
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function () {
        if (nav.style.right == "0%") {
            nav.style.right = "-50%";
            bars.src = "images/menu.png"
        } else {
            nav.style.right = "0%";
            bars.src = "images/x.png"
        }
        nav.classList.toggle("new")
    }

}
myBars()

// alert("Hello");