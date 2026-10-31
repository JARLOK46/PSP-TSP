const menuButton = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

if (menuButton && primaryNavigation) {
    const setMenuOpen = (isOpen) => {
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
        );
        primaryNavigation.classList.toggle("is-open", isOpen);
    };

    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    primaryNavigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        if (event.key === "Escape" && isOpen) {
            setMenuOpen(false);
            menuButton.focus();
        }
    });
}
