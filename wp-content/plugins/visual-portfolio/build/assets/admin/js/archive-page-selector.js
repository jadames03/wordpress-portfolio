!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.jQuery,n=e.n(t);const{ajaxurl:r,VPAdminVariables:a}=window;n()('select[name="vp_general[portfolio_archive_page]"]').select2({ajax:{url:r,dataType:"json",delay:250,data(e){return{q:e.term,selected:this[0].value,nonce:a.nonce,action:"vp_get_pages_list"}},processResults(e){const t=[],r=this.$element.select2("data");let a=!1;return r&&r[0]&&r[0].selected&&(a=Number(r[0].id),t.push({id:a,text:r[0].text})),e&&n().each(e,((e,n)=>{a&&a===n[0]||t.push({id:n[0],text:n[1]})})),{results:t}},cache:!0}})}();