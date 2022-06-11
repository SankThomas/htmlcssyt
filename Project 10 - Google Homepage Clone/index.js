const menu = document.getElementById("menu")
const article = document.querySelector(".icons")

menu.addEventListener("click", () => {
  article.classList.toggle("open")
})
