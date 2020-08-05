import galleryItems from "../module-08/gallery-items.js";
import { createGalleryItem } from "../module-08/template.js";

const galleryRef = document.querySelector(".gallery");
const overlay = document.querySelector(".lightbox");
const modalImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');

const galleryRefItems = galleryItems
  .map((item) => createGalleryItem(item))
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", galleryRefItems);

galleryRef.addEventListener("click", showModal);
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", clickPastModal);

function showModal(event) {
  event.preventDefault();
  window.addEventListener("keydown", escapeModal);
  window.addEventListener("keydown", swipeImage);

  if (event.target !== event.currentTarget) {
    const { source } = event.target.dataset;
    overlay.classList.add("is-open");
    modalImage.src = source;
    modalImage.alt = event.target.description;
  }
}

function closeModal() {
  window.removeEventListener("keydown", escapeModal);
  window.removeEventListener("keydown", swipeImage);

  overlay.classList.remove("is-open");
  modalImage.src = undefined;
  modalImage.alt = undefined;
}

function clickPastModal(event) {
  if (event.target.nodeName !== "IMG") {
    closeModal();
  }
}

function escapeModal(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}

function swipeImage(event) {
  if (modalImage.src !== event.target.href) {
    const currentImage = modalImage.src;
    detectedIndex = galleryItems.findIndex(
      (item) => item.original === currentImage
    );
  } else {
    const imageToFind = event.target.href;
    detectedIndex = galleryItems.findIndex(
      (item) => item.original === imageToFind
    );
  }
}
