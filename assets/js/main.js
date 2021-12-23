// helper
const log = (val) => console.log(val);

// typewriter
const app = document.getElementById("changeText");
const listString = app.getAttribute("data-type").split(",");
const typewriter = new Typewriter(app, {
  loop: true,
});

// get arrat data-type from span
for (let i = 0; i < listString.length; i++) {
  typewriter
    .typeString(listString[i].toString())
    .pauseFor(2500)
    .deleteAll()
    .start();
}

// Start script //
// Navbar animation
const navbar = document.getElementById("navbar");
const navbarLink = navbar.querySelectorAll("ul li a");
navbar.classList.remove("navbar-fixed");
window.addEventListener("scroll", () => {
  // position == 65, change navbar to fixed
  if (window.scrollY >= 65) {
    navbar.classList.add("navbar-fixed");
  } else if (window.scrollY <= 0) {
    navbar.classList.remove("navbar-fixed");
  }
});

// Navbar collapse
const btnExpand = document.getElementById("btn-toggle");
btnExpand.addEventListener("click", () => {
  navbar.classList.toggle("collapse");
  navbar.classList.toggle("expand");
});

navbarLink.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.toggle("expand");
    navbar.classList.toggle("collapse");
  });
});

// Blogs //
const imgPosts = document.querySelectorAll("#img-posts");
imgPosts.forEach((img) => {
  img.addEventListener("click", (e) => {
    const parent = e.target.parentNode;
    parent.classList.toggle("collapse");
    parent.classList.toggle("show");
  });
});
