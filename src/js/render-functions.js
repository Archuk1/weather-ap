import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader')
}

let modal = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt'});


export function createGallery(images) {
  refs.gallery.innerHTML = images
    .map(
      el => `
      <li class="gallery-item">
        <a class="gallery-link" href="${el.largeImageURL}">
          <img
            class="gallery-image"
            src="${el.webformatURL}"
            alt="${el.tags}"
          />
        </a>
        <div class="info">
          <p><b>Likes</b> ${el.likes}</p>
          <p><b>Views</b> ${el.views}</p>
          <p><b>Comments</b> ${el.comments}</p>
          <p><b>Downloads</b> ${el.downloads}</p>
        </div>
      </li>
    `
    )
    .join("");
    modal.refresh();
}


export function clearGallery(){
    refs.gallery.innerHTML = "";
};

export function showLoader(){
 refs.loader.classList.remove('hiden')
};

export function hideLoader(){
    refs.loader.classList.add('hiden')
};
