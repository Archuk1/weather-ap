import getImagesByQuery from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery, clearGallery,hideLoader,showLoader } from "./js/render-functions";

const refs = {
    form: document.querySelector('.form')
}



refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const query =  e.target.elements.searchText.value;
    clearGallery();
      showLoader();

    getImagesByQuery(query)
    .then(response => 
        {    
        if(response.totalHits == 0)(
            iziToast.error({
                message:'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            })
        )       
        createGallery(response.hits)
         
    })
    .catch(err => console.log(err))
    .finally(() => {
        hideLoader();
    })
  
    e.target.reset();
})