import{a as m,S as d,i as a}from"./assets/vendor-BfjKTZs6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="49539740-9fa855f5a07e4e22441b65a56",g="https://pixabay.com/api/";async function y(o){const r={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:r})).data}const l=document.querySelector(".gallery");function h(o){l.innerHTML=o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:f})=>`<li class="photo-card">
          <a href="${s}">
            <img class="photo-img" src="${r}" alt="${i}" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${e}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${t}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${n}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${f}
            </p>
          </div>
        </li>`).join(""),new d(".gallery a").refresh()}function b(){l.innerHTML=""}function c(o){document.querySelector(".loader").classList.toggle("hidden",!o)}const L=document.querySelector("button");L.classList.add("form-btn");const S=document.querySelector("input");S.classList.add("form-input");const u=document.querySelector(".form"),q=u.querySelector("input");u.addEventListener("submit",async o=>{o.preventDefault();const r=q.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term!"});return}b(),c(!0);try{const s=await y(r);s.hits.length===0?a.warning({message:"Sorry, no images found. Try again!"}):h(s.hits)}catch{a.error({title:"Error",message:"Something went wrong!"})}finally{c(!1)}});
//# sourceMappingURL=index.js.map
