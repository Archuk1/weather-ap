import "./css/styles.css";
import fetchWeather from "./js/weather-api";
import renderCard from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  form: document.querySelector('.js-form'),
}


refs.form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const lat = formData.get('lat');
  const lon = formData.get('lon');
try{
  if(lat.trim() === "" || lon.trim() === ""){
    return iziToast.error({
      message: 'Enter all fields',
      position: 'topRight'
    })
  }

  const response = await fetchWeather(lat,lon);
  renderCard(response.forecast);

} catch(err) {
  return iziToast.error({
    message: err.message,
    position: 'topRight'
  })
}  
  
  
  e.target.reset();

})

