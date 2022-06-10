const questions = document.querySelectorAll(".question")

// questions.forEach((question) => {
//   question.addEventListener("click", () => {
//     question.classList.toggle("open")
//   })
// })

// questions.forEach((question) => {
//   question.addEventListener("click", () => {
//     if (question.classList.contains("open")) {
//       question.classList.remove("open")
//     } else {
//       question.classList.add("open")
//     }
//   })
// })

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("open")) {
      question.classList.remove("open")
    } else {
      const questionsIsOpen = document.querySelectorAll(".open")

      questionsIsOpen.forEach((quest) => {
        quest.classList.remove("open")
      })

      question.classList.add("open")
    }
  })
})
