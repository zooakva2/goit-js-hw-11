import{i as l,S as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function u(o){return o=encodeURIComponent(o),fetch(`https://pixabay.com/api/?key=43144570-5608d834234b71965ee211368&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(r.ok)return r.json();throw new Error(r.status)}).catch(r=>{console.error("Помилка запиту:",r.message)})}function h(o){a.innerHTML="";const r=o.hits;r.length==0&&l.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const s=r.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}" 
            data-source="${e.largeImageURL}" 
            alt="${e.tags}"
            />
            <ul class="gallery-description">
            <li><h3>Likes</h3><p>${e.likes}</p></li>
            <li><h3>Views</h3><p>${e.views}</p></li>
            <li><h3>Comments</h3><p>${e.comments}</p></li>
            <li><h3>Downloads</h3><p>${e.downloads}</p></li>
            </ul>
            </a>
            </li>`).join("");a.insertAdjacentHTML("beforeend",s);const i={captionsData:"alt"};let t=new c(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const a=document.querySelector("ul.gallery"),p=()=>{a.innerHTML+='<span class="loader"></span>'},d=document.querySelector(".search-bar");d.addEventListener("submit",o=>{o.preventDefault();const r=document.getElementById("search-input").value.trim();r&&r.length>=3?(p(),u(r).then(s=>{h(s),document.getElementById("search-input").value=""}).catch(s=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),document.getElementById("search-input").value=""})):l.info({title:"Info",message:"Please enter a valid search query with at least 3 characters.",position:"topRight"})});
//# sourceMappingURL=commonHelpers.js.map
