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

    let button = document.querySelector(".rotate");
    let wrapper = document.querySelector(".skill-wrapper");

    button.onclick = function () {
        wrapper.classList.toggle("active");
        wrapper1.classList.remove("active1");
    }

    let button1 = document.querySelector(".rotate1");
    let wrapper1 = document.querySelector(".skill-wrapper1");

    button1.onclick = function () {
        wrapper1.classList.toggle("active1");
        wrapper.classList.remove("active");
    }
});