import{a as c,S as d,i as n}from"./assets/vendor-DeKi_rfE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();function u(o){return c.get("https://pixabay.com/api/",{params:{key:"53395315-8c17e52e5e4d7b2c0ffc17b33",q:o,image_type:"photo",safesearch:!0,orientation:"horizontal"}}).then(e=>e.data)}const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let f=new d(".gallery a",{captionDelay:250,captionsData:"alt"});function m(o){i.gallery.innerHTML=o.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>
        <div class="info">
          <p><b>Likes</b> ${e.likes}</p>
          <p><b>Views</b> ${e.views}</p>
          <p><b>Comments</b> ${e.comments}</p>
          <p><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>
    `).join(""),f.refresh()}function p(){i.gallery.innerHTML=""}function g(){i.loader.classList.remove("hidden")}function y(){i.loader.classList.add("hidden")}const h={form:document.querySelector(".form")};h.form.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.searchText.value;if(e.trim()==="")return n.error({message:"Please enter query!",position:"topRight"});p(),g(),u(e).then(a=>{a.totalHits==0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(a.hits)}).catch(a=>n.error({message:a})).finally(()=>{y()}),o.target.reset()});
//# sourceMappingURL=index.js.map
