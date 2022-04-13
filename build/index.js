!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),l=n(1);var a=n(3),o=n(4);var i,s=n(5);Object(c.registerBlockType)("siejmy/tablogrid-column",{title:"Tablogrid column",description:"Column (internally used)",category:"layout",icon:"smiley",attributes:{columnIndex:{type:"string"}},supports:{inserter:!1,html:!1},edit:function(e){var t=e.className,n=e.attributes;return Object(r.createElement)("div",{className:t+" tgcol c"+n.columnIndex+" column"},Object(r.createElement)(l.InnerBlocks,{templateLock:!1}))},save:function(e){var t=e.className,n=e.attributes;return Object(r.createElement)("div",{className:t+" tgcol c"+n.columnIndex+" column"},Object(r.createElement)(l.InnerBlocks.Content,null))}}),i=[["siejmy/tablogrid-column",{columnIndex:"1"}],["siejmy/tablogrid-column",{columnIndex:"2"}],["siejmy/tablogrid-column",{columnIndex:"3"}]],Object(c.registerBlockType)("siejmy/tablogrid-row-ltb",{title:"Tablogrid LTB",description:"Left-top-bottom container",category:"layout",icon:"smiley",supports:{html:!1},edit:function(e){var t=e.className;return Object(r.createElement)("div",{className:t+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow ltb"},Object(r.createElement)(l.InnerBlocks,{template:i,templateLock:"all"})))},save:function(e){var t=e.className;return Object(r.createElement)("div",{className:t+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow ltb"},Object(r.createElement)(l.InnerBlocks.Content,null)))}}),function(){var e=[["siejmy/tablogrid-column",{columnIndex:"1"}],["siejmy/tablogrid-column",{columnIndex:"2"}],["siejmy/tablogrid-column",{columnIndex:"3"}]];Object(c.registerBlockType)("siejmy/tablogrid-row-tbr",{title:"Tablogrid TBR",description:"Top-bottom-right container",category:"layout",icon:"smiley",supports:{html:!1},edit:function(t){var n=t.className;return Object(r.createElement)("div",{className:n+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow tbr"},Object(r.createElement)(l.InnerBlocks,{template:e,templateLock:"all"})))},save:function(e){var t=e.className;return Object(r.createElement)("div",{className:t+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow tbr"},Object(r.createElement)(l.InnerBlocks.Content,null)))}})}(),function(){var e=[["siejmy/tablogrid-column",{columnIndex:"1"}]];Object(c.registerBlockType)("siejmy/tablogrid-row-uno",{title:"Tablogrid UNO",description:"Uno container",category:"layout",icon:"smiley",supports:{html:!1},edit:function(t){var n=t.className;return Object(r.createElement)("div",{className:n+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow uno"},Object(r.createElement)(l.InnerBlocks,{template:e,templateLock:"all"})))},save:function(e){var t=e.className;return Object(r.createElement)("div",{className:t+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow uno"},Object(r.createElement)(l.InnerBlocks.Content,null)))}})}(),Object(c.registerBlockType)("siejmy/tablogrid-row-midline",{title:"Tablogrid Midline",description:"Midline container",category:"layout",icon:"smiley",supports:{html:!1},edit:function(e){var t=e.className;return Object(r.createElement)("div",{className:t+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow midline"},Object(r.createElement)(l.InnerBlocks,null)))},save:function(e){var t=e.className;return Object(r.createElement)("div",{className:t+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow midline"},Object(r.createElement)(l.InnerBlocks.Content,null)))}}),function(){var e=[["siejmy/tablogrid-column",{columnIndex:"1"}],["siejmy/tablogrid-column",{columnIndex:"2"}]];Object(c.registerBlockType)("siejmy/tablogrid-row-duo",{title:"Tablogrid DUO",description:"Duo left-right container",category:"layout",icon:"smiley",supports:{html:!1},edit:function(t){var n=t.className;return Object(r.createElement)("div",{className:n+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow duo"},Object(r.createElement)(l.InnerBlocks,{template:e,templateLock:"all"})))},save:function(e){var t=e.className;return Object(r.createElement)("div",{className:t+" tgrow_prnt"},Object(r.createElement)("div",{className:"tgrow duo"},Object(r.createElement)(l.InnerBlocks.Content,null)))}})}(),Object(c.registerBlockType)("siejmy/tablogrid-client-post",{title:"Tablogrid Post",description:"Single post by ID",category:"widgets",icon:"smiley",supports:{html:!1},attributes:{postId:{type:"string"}},edit:Object(o.withState)({featuredImgId:0})(Object(a.withSelect)((function(e,t){var n=t.attributes,r=t.featuredImgId;return{post:n.postId?e("core").getEntityRecord("postType","post",n.postId):void 0,media:r?e("core").getMedia(r):void 0}}))((function(e){var t=e.post,n=e.media,c=e.className,l=e.attributes,a=e.setAttributes,o=e.setState,i=t?t.featured_media:0;setTimeout((function(){return o((function(e){return e.featuredImgId=i}))}),2);var s=t?t.title.raw:"Post",m=n?n.source_url:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23cccccc'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='26px' fill='%23333333'%3Ex%3C/text%3E%3C/svg%3E";return Object(r.createElement)("article",{className:c+" tablogrid_client tablopost"},Object(r.createElement)("div",{class:"featpost_a"},Object(r.createElement)("img",{src:m,alt:"Post image"}),Object(r.createElement)("div",{className:"herocaption"},Object(r.createElement)("div",{className:"tag"},"Kategoria"),Object(r.createElement)("h3",null,s),Object(r.createElement)("div",{className:"subline"},"ID wpisu:"," ",Object(r.createElement)("input",{type:"text",value:l.postId||"",onChange:function(e){return a({postId:e.target.value})}})))))})))}),Object(c.registerBlockType)("siejmy/tablogrid-client-twitter",{title:"Tablogrid Twitter",description:"Wyświetla ostatni tweet z danego konta",category:"widgets",icon:"smiley",supports:{html:!1},attributes:{twitterProfile:{type:"string"},bgImageId:{type:"string"},scaleMode:{type:"string"}},edit:Object(a.withSelect)((function(e,t){var n=t.attributes;return{media:n.bgImageId?e("core").getMedia(n.bgImageId):void 0}}))((function(e){var t=e.className,n=e.attributes,c=e.setAttributes,a=e.media,o=a?a.source_url:"";return console.log({imgSrc:o,attributes:n}),Object(r.createElement)("div",{className:t+" client_twitter tablogrid_client",style:{backgroundImage:"url("+o+")"}},Object(r.createElement)("div",{className:"media_upload_container"},Object(r.createElement)(l.MediaUploadCheck,null,Object(r.createElement)(l.MediaUpload,{onSelect:function(e){return c({bgImageId:e.id.toString()})},allowedTypes:["image"],value:n.bgImageId,render:function(e){var t=e.open;return Object(r.createElement)(s.Button,{className:"select-media-btn",onClick:t},"Zmień zdjęcie")}}))),Object(r.createElement)("div",null,Object(r.createElement)("span",null,"Profil Twitter: "),Object(r.createElement)("input",{type:"text",value:n.twitterProfile||"",onChange:function(e){return c({twitterProfile:e.target.value})}})),Object(r.createElement)("div",null,Object(r.createElement)("span",null,"Tryb skalowania: "),Object(r.createElement)("select",{value:n.scaleMode||"medium",onChange:function(e){return c({scaleMode:e.target.value})}},Object(r.createElement)("option",{value:"medium"},"Średnia szerokość"),Object(r.createElement)("option",{value:"full"},"Pełna szerokość"))),Object(r.createElement)("div",null,Object(r.createElement)("blockquote",null,Object(r.createElement)("i",null,"Wśród ludów będę chwalił Cię, Panie,",Object(r.createElement)("br",null),"zagram Ci wśród narodów,",Object(r.createElement)("br",null),"bo Twoja łaskawość [sięga] aż do niebios,",Object(r.createElement)("br",null),"a wierność Twoja po chmury.",Object(r.createElement)("br",null),"Bądź wywyższony, Boże, ponad niebo,",Object(r.createElement)("br",null),"a Twoja chwała ponad całą ziemię!",Object(r.createElement)("br",null)),"— Ps 108, 4-6")))}))})}]);