const menuButton = document.querySelector(".menu-button")
const navbar = document.querySelector(".navbar")

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("clicked")
  navbar.classList.toggle("open")
})
