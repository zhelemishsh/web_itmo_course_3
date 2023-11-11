(function () {
    document.addEventListener('DOMContentLoaded', () => {
        let path = window.location.pathname;
        let index = path.lastIndexOf("/") + 1;
        let currentPage = path.substring(index);
        let navbar = document.getElementsByClassName("navigation-panel")[0]
        for (let item = navbar.firstElementChild; item; item = item.nextElementSibling) {
            if (item.getAttribute('href') === currentPage) {
                let button = item.children[0]
                button.setAttribute('id', "selected-page")
                break
            }
        }
    })
}())