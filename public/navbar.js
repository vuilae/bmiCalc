//For adding yellow color to navbar of the page you are located
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;

    const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navbarLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPage) 
        link.classList.add("active");
    });
})