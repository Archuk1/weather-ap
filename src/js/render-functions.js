const weatherCardList = document.querySelector('.weather-card');

export default function renderCard (cards){
    const markup = cards.map(el => `<div class="weather-card">
  <div class="date">${el.date}</div>
  <img src="${el.icon}" alt="Cloudy" class="icon">
  <div class="summary">${el.summary}</div>
  <ul class="temps">
    <li>Min: ${el.min_c}°C</li>
    <li>Max: ${el.max_c}°C</li>
    <li>Avg: ${el.avg_c}°C</li>
  </ul>
</div>
`).join("");
return weatherCardList.innerHTML = markup;
}