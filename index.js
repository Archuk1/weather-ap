import{a as c,i as a}from"./assets/vendor-Vjjz0Re7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function l(s,o){const i=`https://www.amdoren.com/api/weather.php?api_key=vcRK23EVDEbMBXvrVm8tmM73REsxVx&lat=${s}&lon=${o}`,e=`https://corsproxy.io/?${encodeURIComponent(i)}`;try{return(await c.get(e)).data}catch(r){throw console.error("Weather error:",r),r}}const d=document.querySelector(".weather-card");function u(s){const o=s.map(t=>`<div class="weather-card">
  <div class="date">${t.date}</div>
  <img src="${t.icon}" alt="Cloudy" class="icon">
  <div class="summary">${t.summary}</div>
  <ul class="temps">
    <li>Min: ${t.min_c}°C</li>
    <li>Max: ${t.max_c}°C</li>
    <li>Avg: ${t.avg_c}°C</li>
  </ul>
</div>
`).join("");return d.innerHTML=o}const m={form:document.querySelector(".js-form")};m.form.addEventListener("submit",async s=>{s.preventDefault();const o=new FormData(s.target),t=o.get("lat"),i=o.get("lon");try{if(t.trim()===""||i.trim()==="")return a.error({message:"Enter all fields",position:"topRight"});const e=await l(t,i);u(e.forecast)}catch(e){return a.error({message:e.message,position:"topRight"})}s.target.reset()});
//# sourceMappingURL=index.js.map
