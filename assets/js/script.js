window.onload = function () {
    var options = {
        strings: ["eciavatta$"],
        typeSpeed: 40
    };

    new Typed('.typed', options);

    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementById("main-menu"); 

    console.log(menuButton)

    menuButton.onclick = function () {
        if (menu.classList.contains("is-active")) {
            menu.classList.remove("is-active");
            menuButton.classList.remove("is-active")
        } else {
            menu.classList.add("is-active");
            menuButton.classList.add("is-active")
        }
    }
    
}
