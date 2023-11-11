function setCurrentPage() {
    let currentPage = document.location.pathname
    let navbar = document.getElementsByClassName("navigation-panel")[0]
    for (let item = navbar.firstElementChild; item; item = item.nextElementSibling) {
        if (item.getAttribute('href') === currentPage) {
            let button = item.children[0]
            button.setAttribute('id', "selected-page")
            break
        }
    }
}

if (typeof window !== "undefined") {
    window.addEventListener("load", setCurrentPage);
}