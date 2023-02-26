import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", openGallery);

function openGallery(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const linkToOriginalImage = event.target.dataset.source;
  console.log(linkToOriginalImage);
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${linkToOriginalImage}">
	`
    )
    .show();
}

// Some helper functions to render gallery items
console.log(galleryItems);
createGalleryItems();

function createGalleryItems() {
  const items = [];
  for (let i = 0; i < galleryItems.length; i++) {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");
    galleryItem.appendChild(createGalleryLink(galleryItems[i]));
    items.push(galleryItem);
  }
  gallery.append(...items);
}

function createGalleryLink(galleryItemFromList) {
  let a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = galleryItemFromList.original;
  a.appendChild(createGalleryImage(galleryItemFromList));
  return a;
}

function createGalleryImage(galleryItemFromList) {
  let img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = galleryItemFromList.preview;
  img.setAttribute("data-source", galleryItemFromList.original);
  img.alt = galleryItemFromList.description;
  return img;
}
