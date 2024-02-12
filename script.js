document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".logo").addEventListener("click", () => {
        location.href = "#";
    });

    let previousScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;
        if (previousScrollY > currentScrollY) {
            document.querySelector(".main").style.top = '0';
        } else {
            document.querySelector(".main").style.top = "-9vh";
            document.querySelector(".main").addEventListener("mouseover", () => {
                document.querySelector(".main").style.top = "0";
            });

        }
        previousScrollY = currentScrollY;
    });

    document.querySelector(".menu").addEventListener("click", () => { 
        document.querySelector(".nav-bar").classList.add("active");
    })
    document.querySelector(".close").addEventListener("click", () => { 
        document.querySelector(".nav-bar").classList.remove("active") 
    })
    document.querySelectorAll(".element").forEach((element) => {
        element.addEventListener("click", () => { document.querySelector(".nav-bar").classList.remove("active") })
    });

});


// document.getElementById("text-area").addEventListener("blur", () => {
//     if (!textarea.value.trim()) { document.getElementById("three-text").style = "transform: translate(10px, 10px); background: transparent; z-index: 0;"; }
// });

