var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,a.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},e.parcelRequired7c6=a);var n=a("aNklI"),l=a("gjiCh"),i=a("b5rV1"),o=a("2nhTy"),d=a("7me8F"),s=a("krGWQ");const u=new(0,d.default),f=new(0,o.default);async function c(e=!1){const r=e||1;u.setPageNumber=r;try{await u.fetchSearchMovie().then((e=>{if(0===e.total_pages)return s.default.errorText.classList.remove("is-hidden");f.setCurrentPage=r,f.setTotalPages=e.total_pages,f.setCallback=c,f.renderPagination(),s.default.errorText.classList.add("is-hidden"),(0,n.renderFilmList)(e.results),(0,i.addCurrrentMoviesToLocalStorage)(e.results)}))}catch(e){console.log(e)}finally{(0,l.hidePreloader)()}}s.default.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),u.inputQuery=e.currentTarget.elements.query.value.trim(),""===s.default.inputEl.value)return s.default.errorText.classList.remove("is-hidden");s.default.errorText.classList.add("is-hidden"),c(),(0,l.preloaderShow)(),s.default.inputEl.value=""}));
//# sourceMappingURL=index.6aa1f8d5.js.map
