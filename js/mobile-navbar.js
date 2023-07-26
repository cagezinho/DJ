class MobileNavbar {
    constructor(mobileMenu, listaLinkNav, linkNav) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.listaLinkNav = document.querySelector(listaLinkNav);
        this.linkNav = document.querySelectorAll(linkNav);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.listaLinkNav.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
    }
}

const mobileNavbar = new MobileNavbar (
    ".mobileMenu",
    ".listaLinkNav",
    ".linkNav",
);

mobileNavbar.init();
