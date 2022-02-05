// helper
const log = (val) => console.log(val);
const cHeight = (e) => document.getElementById(e).clientHeight;

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

// About //
const tabLinks = document.querySelectorAll(".tab-link");
const contentProfile = document.querySelectorAll(".content");

tabLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    tabLinks.forEach((e) => e.classList.remove("active"));
    e.preventDefault();
    e.target.classList.toggle("active");

    let content = e.target.getAttribute("id");
    contentProfile.forEach((e) => {
      e.classList.remove("show");

      if (e.classList[1] == content) {
        e.classList.toggle("show");
      }
    });
  });
});

// Contacts //
// G-Maps
function initMap() {
  // Location Bogor
  const bogorIndonesia = { lat: -6.60338104543418, lng: 106.79276760162645 };
  const map = new google.maps.Map(document.getElementById("g-map"), {
    zoom: 10,
    center: bogorIndonesia,
  });
  // marker
  const marker = new google.maps.Marker({
    position: bogorIndonesia,
    map: map,
  });
}

// Counter //
const counters = document.querySelectorAll(".countup");
const speed = 200;

const startCount = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Dynamic Content Height //
let hInital = 0;
let hHeader = (cHeight("home") + hInital - 60) / 1.5; // real height - 60px
let hAbout = cHeight("about") + hHeader;
let hServices = cHeight("services") + hAbout;
let hCounter = cHeight("counter") + hServices;
let hPortfolio = cHeight("portfolio") + hCounter;
let hBlog = cHeight("blog") + hPortfolio;
let hContact = cHeight("contact") + hBlog;

log("Init: " + hInital);
log("Header: " + hHeader);
log("About: " + hAbout);
log("Services: " + hServices);
log("Counter: " + hCounter);
log("Portfolio: " + hPortfolio);
log("Blog: " + hBlog);
log("Contact: " + hContact);

// Reveal Effect
const content = document.querySelectorAll(".reveal");
const mQuery = window.matchMedia("(max-width: 640px)");
const tQuery1 = window.matchMedia("(min-width: 641px)");
const tQuery2 = window.matchMedia("(max-width: 1024px)");

const toggleNavbar = (on) => {
  navbarLink[on].classList.add("active");
};

const toggleContent = (on) => {
  content[on].classList.add("show");
};

const clearContent = () => {
  navbarLink.forEach((i) => {
    i.classList.remove("active");
  });
  content.forEach((i) => {
    i.classList.remove("show");
  });
};

const animDesk = () => {
  let winSc = window.scrollY;
  clearContent();

  if (winSc < hHeader) {
    toggleNavbar(0);
  } else if (winSc >= hHeader && winSc < hAbout) {
    toggleNavbar(1);
    toggleContent(1);
    toggleContent(2);
  } else if (winSc >= hAbout && winSc < hServices) {
    toggleNavbar(2);
    toggleContent(3);
  } else if (winSc >= hServices && winSc < hCounter) {
    toggleNavbar(2);
    toggleContent(4);
    startCount();
  } else if (winSc >= hCounter && winSc < hPortfolio) {
    toggleNavbar(3);
    toggleContent(5);
    toggleContent(6);
    toggleContent(7);
    toggleContent(8);
    toggleContent(9);
    toggleContent(10);
    toggleContent(11);
  } else if (winSc >= hPortfolio && winSc < hBlog) {
    toggleNavbar(4);
    toggleContent(12);
  } else if (winSc >= hBlog && winSc < hContact) {
    toggleNavbar(5);
  }

  // Animation Jumbotron //
  window.onload = () => {
    toggleContent(0);
  };

  log(winSc);
};

const animTab = () => {
  let winSc = window.scrollY;
  clearContent();

  if (winSc < hHeader) {
    toggleNavbar(0);
  } else if (winSc >= hHeader && winSc < hAbout) {
    toggleNavbar(1);
    toggleContent(1);
    toggleContent(2);
  } else if (winSc >= hAbout && winSc < hServices) {
    toggleNavbar(2);
    toggleContent(3);
  } else if (winSc >= hServices && winSc < hCounter) {
    toggleNavbar(2);
    toggleContent(4);
    startCount();
  } else if (winSc >= hCounter && winSc < hPortfolio) {
    toggleNavbar(3);
    toggleContent(5);
    if (winSc > 2140) {
      toggleContent(6);
      toggleContent(7);
      if (winSc > 2480) {
        toggleContent(8);
        toggleContent(9);
        if (winSc > 2820) {
          toggleContent(10);
          toggleContent(11);
        }
      }
    }
  } else if (winSc >= hPortfolio && winSc < hBlog) {
    toggleNavbar(4);
    toggleContent(12);
  } else if (winSc >= hBlog && winSc < hContact) {
    toggleNavbar(5);
  }

  log(winSc);
};

const animMob = () => {
  let winSc = window.scrollY;
  clearContent();

  if (winSc < hHeader) {
    toggleNavbar(0);
  } else if (winSc >= hHeader && winSc < hAbout) {
    toggleNavbar(1);
    toggleContent(1);
    if (winSc >= 820) {
      toggleContent(2);
    }
  } else if (winSc >= hAbout && winSc < hServices) {
    toggleNavbar(2);
    toggleContent(3);
  } else if (winSc >= hServices && winSc < hCounter) {
    toggleContent(4);
    startCount();
  } else if (winSc >= hCounter && winSc < hPortfolio) {
    toggleNavbar(3);
    toggleContent(5);
    toggleContent(6);
    toggleContent(7);
    toggleContent(8);
    toggleContent(9);
    toggleContent(10);
    toggleContent(11);
  } else if (winSc >= hPortfolio && winSc < hBlog) {
    toggleNavbar(4);
    toggleContent(12);
  } else if (winSc >= hBlog && winSc < hContact) {
    toggleNavbar(5);
  }

  log(winSc);
};

if (mQuery.matches) {
  window.addEventListener("scroll", animMob);
} else if (tQuery1.matches && tQuery2.matches) {
  // alert("tablet");
  window.addEventListener("scroll", animTab);
} else {
  window.addEventListener("scroll", animDesk);
}

// Form Contact //
const form = document.getElementById("form-wrapper");
const sendBtn = document.getElementById("btn-submit");
const notif = document.getElementById("notification");
let fromName = document.getElementById("name");
let fromEmail = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

const checkRequired = () => {
  if (
    fromName.value == "" ||
    fromEmail.value == "" ||
    subject.value == "" ||
    message.value == ""
  ) {
    notif.querySelector(".msg").innerHTML = "Please fill all required field";
    notif.classList.add("show");
    setTimeout(() => notif.classList.remove("show"), 3000);
    return 0;
  }
  return 1;
};

const sendMail = () => {
  if (!checkRequired()) {
    return 1;
  }

  sendBtn.disabled = true;
  sendBtn.classList.add("disable");
  emailjs
    .send("service_mculcp8", "template_t16p207", {
      from_name: fromName.value,
      from_email: fromEmail.value,
      subject: subject.value,
      message: message.value,
      to_name: "Hanivan Rizky",
      email_to: "hanivan20@gmail.com",
    })
    .then(
      (res) => {
        // console.log(`Success ${res.status}`);
        notif.classList.add("show");
        setTimeout(() => notif.classList.remove("show"), 3000);

        sendBtn.disabled = false;
        sendBtn.classList.remove("disable");

        fromName.value = "";
        fromEmail.value = "";
        subject.value = "";
        message.value = "";
      },
      (err) => {
        console.log(err);
      }
    );
  return 1;
};

sendBtn.addEventListener("click", (e) => {
  if (sendMail()) {
    e.preventDefault();
  }
});

notif.addEventListener("click", () => {
  notif.classList.remove("show");
});
