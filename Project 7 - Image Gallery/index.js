const imageGallery = document.querySelector(".image-gallery")

const fetchImages = async () => {
  const response = await fetch(
    // Replace YOUR_CLIENT_ID with the access key of the app you created in the unsplash dashboard
    "https://api.unsplash.com/photos?client_id=YOUR_CLIENT_ID"
  )
  const data = await response.json()

  const articleElement = document.createElement("div")

  articleElement.innerHTML = data
    .map(
      (item) =>
        `
          <article>
            <img src=${item.urls.full} alt=${item.user.name} />

            <ul>
              <li>${item.user.name}</li>
              <li>${item.likes} Likes</li>
            </ul>
          </article>
      `
    )
    .join("")

  /* 
    FIND OUT WHY THERE WAS A TRAILING COMMA 
    https://stackoverflow.com/questions/45812160/unexpected-comma-using-map
  */

  imageGallery.append(articleElement)
}

fetchImages()
