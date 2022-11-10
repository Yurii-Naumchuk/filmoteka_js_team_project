var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;function d(e){let t="No information";return e.overview&&(t=e.overview),`\n  <div class="modal-wrap">\n      \n      <div class="modal-container">\n        <div class="modal-left">\n      \n          <img src="${null===e.poster_path?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":`https://image.tmdb.org/t/p/w500${e.poster_path}`}"class="film-image" />\n      \n        </div>\n        <div class="modal-right">\n      \n          <h2 class="film-modal-title">${e.original_title}</h2>\n          <table class="film-info">\n            <tr>\n              <td class="table-name">Vote / Votes</td>\n             <td class="table-value"><span class="rating-value">${e.vote_average.toFixed(1)}</span>/ ${e.vote_count}</td>\n             </tr>\n            <tr>\n              <td class="table-name">Popularity</td>\n              <td class="table-value">${e.popularity.toFixed(1)}</td>\n            </tr>\n            <tr>\n              <td class="table-name">Original title</td>\n              <td class="table-value">${e.original_title}</td>\n            </tr>\n            <tr>\n              <td class="table-name">Genre</td>\n              <td class="table-value">${function([...e]){const t=localStorage.getItem("GENRES"),n=JSON.parse(t);let a;const d=[...e];for(let e=0;e<n.length;e++)for(let t=0;t<d.length;t++)d[t]===n[e].id&&(a=n[e].name,d[t]=a);return 0===d.length?"":1===d.length?`${d[0]}`:2===d.length?`${d[0]}, ${d[1]}`:3===d.length?`${d[0]}, ${d[1]}, ${d[2]}`:4===d.length?`${d[0]}, ${d[1]}, ${d[2]}, ${d[3]}`:5===d.length?`${d[0]}, ${d[1]}, ${d[2]}, ${d[3]}, ${d[4]}`:void 0}(e.genre_ids)}</td>\n            </tr>\n          </table>\n<div class="modal-about">\n          <h3 class="about-title">About</h3>\n          <p class="about-desc">${t}</p>\n      </div>\n      <div class="modal-button">\n        <button class="btn watched-btn" type="button" data-addwatched>ADD TO WATCHED</button>\n         <button class="btn watched-btn is-hidden" type="button" data-removewatched>REMOVE FROM WATCHED</button>\n        <button class="btn queue-btn" type="button" data-addqueue>ADD TO QUEUE</button>\n        <button class="btn queue-btn is-hidden" type="button" data-removequeue>REMOVE FROM QUEUE</button>\n      </div>\n          </div>\n        </div>\n      </div>  \n    </div>`}null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,a.call(d.exports,d,d.exports),d.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var i=a("krGWQ"),s=a("jAPMa"),o=a("b5rV1");const l=new(0,o.default);let c=l.watched,r=l.queue;function u(e){const t=document.querySelector("[data-addwatched]"),n=document.querySelector("[data-removewatched]"),a=localStorage.getItem("WATCHED_LIST"),d=function(e){const t=localStorage.getItem("WATCHED_LIST");if(t){return JSON.parse(t).find((t=>t.id===e))}return null}(e);function i(i){i.preventDefault();const o=m(e);d&&a||(l.addToLSwathced("WATCHED_LIST"),c.push(o),t.classList.add("is-hidden"),n.classList.remove("is-hidden"),n.addEventListener("click",s)),l.addToLSwathced("WATCHED_LIST")}function s(a){t.classList.remove("is-hidden"),n.classList.add("is-hidden"),t.addEventListener("click",i);const d=m(e),s=localStorage.getItem("WATCHED_LIST"),o=JSON.parse(s).findIndex((e=>e.id===d.id));c.splice(o,1),l.addToLSwathced("WATCHED_LIST")}a&&d?(t.classList.add("is-hidden"),n.classList.remove("is-hidden"),n.addEventListener("click",s)):t.addEventListener("click",i)}function v(e){const t=document.querySelector("[data-addqueue]"),n=document.querySelector("[data-removequeue]"),a=function(e){const t=localStorage.getItem("QUEUE_LIST");if(t){return JSON.parse(t).find((t=>t.id===e))}return null}(e),d=localStorage.getItem("QUEUE_LIST");function i(i){i.preventDefault();const o=m(e);a&&!d||(l.addToLSqueue("QUEUE_LIST"),r.push(o),t.classList.add("is-hidden"),n.classList.remove("is-hidden"),n.addEventListener("click",s)),l.addToLSqueue("QUEUE_LIST")}function s(a){t.classList.remove("is-hidden"),n.classList.add("is-hidden"),t.addEventListener("click",i);const d=m(e),s=localStorage.getItem("QUEUE_LIST"),o=JSON.parse(s).findIndex((e=>e.id===d.id));r.splice(o,1),localStorage.setItem("QUEUE_LIST",JSON.stringify(r))}d&&a?(t.classList.add("is-hidden"),n.classList.remove("is-hidden"),n.addEventListener("click",s)):t.addEventListener("click",i)}function m(e){const t=localStorage.getItem("MOVIE_LIST");return JSON.parse(t).find((t=>t.id===e))}let f="";f||document.removeEventListener("click",s.escExit),i.default.containerBox.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"H2"===e.target.nodeName){i.default.modal.classList.remove("is-hidden");const n=Number(e.target.dataset.id);t=n,function(e){const t=localStorage.getItem(e);return JSON.parse(t)}("MOVIE_LIST").find((e=>{if(e.id===t){const t=d(e);i.default.modalContent.insertAdjacentHTML("beforeend",t)}})),u(n),v(n),document.body.style.overflowY="hidden"}var t;f=!0,f&&document.addEventListener("keydown",s.escExit)})),i.default.onBtnClose.addEventListener("click",s.closeModal),i.default.modal.addEventListener("click",s.outOfModal);
//# sourceMappingURL=index.ded4951a.js.map
