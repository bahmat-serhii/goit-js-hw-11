import{a as p,S as h,i as l}from"./assets/vendor-BfjKTZs6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g="49539740-9fa855f5a07e4e22441b65a56",y="https://pixabay.com/api/";function b(t){return p.get(y,{params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),new Error("Failed to fetch images. Please try again later.")})}const u=document.querySelector(".gallery");function L(t){u.innerHTML=t.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:o,comments:n,downloads:m})=>`<li class="photo-card">
          <a href="${i}">
            <img class="photo-img" src="${r}" alt="${s}" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${e}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${o}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${n}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${m}
            </p>
          </div>
        </li>`).join(""),new h(".gallery a").refresh()}function S(){u.innerHTML=""}function a(t){const r=document.querySelector(".loader");t?r.classList.remove("hidden"):r.classList.add("hidden")}const f=document.querySelector(".form"),d=f.querySelector("input");f.addEventListener("submit",t=>{t.preventDefault(),w(),d.value=""});function w(){const t=d.value.trim();if(!t)return c("Please enter a search term!");S(),a(!0),b(t).then(r=>{r.hits.length?L(r.hits):q("Sorry, there are no images matching your search query. Please try again!")}).catch(()=>c("Something went wrong!")).finally(()=>a(!1))}function c(t){l.error({title:"Error",message:t})}function q(t){l.warning({message:t})}const v=document.querySelector("button");v.classList.add("form-btn");const E=document.querySelector("input");E.classList.add("form-input");
//# sourceMappingURL=index.js.map
