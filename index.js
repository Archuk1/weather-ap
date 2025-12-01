import{a as L,S as v,i as a}from"./assets/vendor-DeKi_rfE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function f(s,e){return(await L.get("https://pixabay.com/api/",{params:{key:"53395315-8c17e52e5e4d7b2c0ffc17b33",q:s,image_type:"photo",safesearch:!0,orientation:"horizontal",page:e,per_page:15}})).data}const l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-loadbtn")};let w=new v(".gallery a",{captionDelay:250,captionsData:"alt"});function g(s){const e=s.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="info">
          <p><b>Likes</b> ${r.likes}</p>
          <p><b>Views</b> ${r.views}</p>
          <p><b>Comments</b> ${r.comments}</p>
          <p><b>Downloads</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");l.gallery.insertAdjacentHTML("beforeend",e),w.refresh()}function q(){l.gallery.innerHTML=""}function y(){l.loader.classList.remove("hidden")}function i(){l.loader.classList.add("hidden")}function h(){l.loadMoreBtn.classList.remove("hidden")}function d(){l.loadMoreBtn.classList.add("hidden")}const b={form:document.querySelector(".form"),loadMoreBtn:document.querySelector(".js-loadbtn")};let n,c,m;b.form.addEventListener("submit",async s=>{if(s.preventDefault(),d(),q(),y(),n=1,c=s.target.elements.searchText.value,c.trim()==="")return i(),a.error({message:"Please enter query!",position:"topRight"});try{const e=await f(c,n);if(m=Math.ceil(e.totalHits/15),e.totalHits==0)return i(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});g(e.hits),i(),n<m?h():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(e){i(),d(),a.error({message:e.message,position:"topRight"})}s.target.reset()});b.loadMoreBtn.addEventListener("click",async()=>{n+=1,d();let e=document.querySelector(".gallery-item").getBoundingClientRect();try{y();const r=await f(c,n);g(r.hits),i(),window.scrollBy({top:e.height*2,behavior:"smooth"}),n<m?h():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(r){i(),d(),a.error({message:r.message,position:"topRight"})}});
//# sourceMappingURL=index.js.map
