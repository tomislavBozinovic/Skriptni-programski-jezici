const imageGallery = document.querySelector(".image--container");
const imageContainer = document.querySelector(".image--selection");
const apiUrl =
  "https://api.unsplash.com/photos/?client_id=8dd839a74ceea72e92afe3771beb91e0f2aae03d661286914f7cad77ba63e157";
let output = "";
const loading = '<h1 class="loader">Loading...</h1>';

let urlArray = [];

// Arrows
const arrowContainer = document.querySelector(".arrow-container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const showImages = () => {
  // Show loading text if no data
  if (imageContainer.children.length === 0) imageContainer.innerHTML = loading;

  fetch(apiUrl)
    .then((res) => {
      res.json().then((images) => {
        // first image on the viewer
        imageGallery.innerHTML = `<img src="${images[0].urls.regular}" class="animate-entrance image--gallery" alt="${images[0].alt_description}"
        >`;
        setTimeout(() => {
          imageGallery.children[0].classList.remove("animate-entrance");
        }, 500);
        // show unselected images
        images.forEach(({ urls, alt_description }) => {
          urlArray.push(urls.regular);
          output += `<img src="${urls.regular}" alt="${alt_description}" class="image__item" 
          />`;
        });
        imageContainer.innerHTML = output;
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

const changeImage = (e) => {
  // Get the viewer image element
  const image = imageGallery.children[0];
  if (e.target.src) {
    // change the image
    image.classList.add("animate-entrance");
    image.src = e.target.src;
    setTimeout(() => {
      image.classList.remove("animate-entrance");
    }, 800);
  }
};
// Event listeners
document.addEventListener("DOMContentLoaded", showImages);
imageContainer.addEventListener("click", changeImage);

// Domaci Rad
const slideNext = function () {
  const currentImageSrc = imageGallery.children[0].src;
  const imgPositionArray = Number(urlArray.indexOf(currentImageSrc));
  const nextPosition = imgPositionArray == 9 ? 0 : imgPositionArray + 1;
  // Change image
  const image = imageGallery.children[0];
  image.classList.add("animate-entrance");
  image.src = urlArray[nextPosition];
  setTimeout(() => {
    image.classList.remove("animate-entrance");
  }, 800);
};

const slidePrevious = function () {
  const currentImageSrc = imageGallery.children[0].src;
  const imgPositionArray = Number(urlArray.indexOf(currentImageSrc));
  const nextPosition = imgPositionArray == 0 ? 9 : imgPositionArray - 1;
  // Change image
  const image = imageGallery.children[0];
  image.classList.add("animate-entrance");
  image.src = urlArray[nextPosition];
  setTimeout(() => {
    image.classList.remove("animate-entrance");
  }, 800);
};

rightArrow.addEventListener("click", slideNext);
leftArrow.addEventListener("click", slidePrevious);

// Mouse scroll
window.addEventListener("wheel", function (event) {
  event.deltaY < 0 ? slideNext() : slidePrevious();
});
