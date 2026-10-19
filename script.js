
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-btn");
    const navigation = document.getElementById("nav-links");

    // Mobile navigation menu
    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("show");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuButton.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        // Close the menu when a navigation link is clicked
        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("show");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            });
        });

        // Close the mobile menu if the screen becomes larger
        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) {
                navigation.classList.remove("show");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }
        });
    }

    // Automatically update the copyright year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});