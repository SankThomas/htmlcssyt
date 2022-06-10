const getRandomQuote = async () => {
  const response = await fetch("https://api.quotable.io/random?tags=technology")
  const data = await response.json()

  const author = document.getElementById("author")
  const quote = document.getElementById("quote")

  author.innerHTML = data.author
  quote.innerHTML = data.content
}

getRandomQuote()

setInterval(getRandomQuote, 30000)
