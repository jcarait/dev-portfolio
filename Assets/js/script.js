aboutLinkEl = $("#link-about");
projectLinkEl = $("#projects-link");
contactLinkEl = $("#contact-link");


aboutLinkEl.hover(navLink(aboutLinkEl));

function navLink(link) {
    link.attr("class", "nav-link active")
} 