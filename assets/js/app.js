cl = console.log;
const toggleBtn = document.getElementById("toggleBtn");
const navbar = document.getElementById("navbar");

const onBtnclick = () => {
  let navbarClass = navbar.className;
  cl(navbarClass);
  if (navbarClass.includes("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
};

toggleBtn.addEventListener("click", onBtnclick);
