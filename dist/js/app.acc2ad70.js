(function(t){function e(e){for(var r,c,a=e[0],u=e[1],s=e[2],l=0,f=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function c(t){return a.p+"js/"+({Blog:"Blog"}[t]||t)+"."+{Blog:"510cf2c8"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=c(t);var s=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="dist/",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"Blog",(function(){return C})),n.d(r,"BlogFeed",(function(){return k})),n.d(r,"BlogPost",(function(){return S}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),o=!0,c=Object(i["i"])("div",{class:"test"},null,-1);function a(t,e,n,r,o,a){var u=Object(i["y"])("router-view");return Object(i["r"])(),Object(i["f"])(i["a"],null,[Object(i["i"])(u),c],64)}var u={name:"App",setup:function(){return{name:"111"}}};u.render=a;var s=u,l=(n("7dc4"),n("7db0"),n("4160"),n("a630"),n("3ca3"),n("159b"),{inserted:function(t){function e(){var e=Array.from(t.children).find((function(t){return"IMG"===t.nodeName}));e&&(e.addEventListener("load",(function(){setTimeout((function(){return t.classList.add("loaded")}),100)})),e.addEventListener("error",(function(){return console.log("error")})),e.src=e.dataset.url)}function n(n,r){n.forEach((function(n){n.isIntersecting&&(e(),r.unobserve(t))}))}function r(){var e={root:null,threshold:"0"},r=new IntersectionObserver(n,e);r.observe(t)}window.IntersectionObserver?r():e()}}),d=(n("c975"),n("a434"),n("5530")),f=n("dea4");function m(t,e,n,r,o,c){var a=Object(i["y"])("comments-overlay");return Object(i["r"])(),Object(i["f"])("div",null,[(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(c.targets,(function(t){return Object(i["r"])(),Object(i["f"])(a,{target:t,key:t.id},null,8,["target"])})),128))])}var p=void 0,h=Object(i["H"])("data-v-17d6a6ac");Object(i["u"])("data-v-17d6a6ac");var g={class:"comments-overlay"},b={key:1,class:"comments-overlay__form"};Object(i["s"])();var v=h((function(t,e,n,r,o,c){return Object(i["r"])(),Object(i["f"])("div",g,[(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(n.target.comments,(function(t){return Object(i["r"])(),Object(i["f"])("div",{class:"comments-overlay__container",key:t.id,style:c.getCommentPostition(t)},[o.editting!=t?(Object(i["r"])(),Object(i["f"])("button",{key:0,class:"comments-overlay__indicator",onClick:function(e){return c.onIndicatorClick(t)}},Object(i["B"])(t.commenter.initials),9,["onClick"])):(Object(i["r"])(),Object(i["f"])("div",b,[Object(i["i"])("p",null,Object(i["B"])(c.getCommentMetaString(t)),1),Object(i["G"])(Object(i["i"])("textarea",{ref:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.text=t})},null,512),[[i["D"],o.text]]),Object(i["i"])("button",{onClick:e[2]||(e[2]=function(){return c.edit&&c.edit.apply(c,arguments)}),disabled:!o.text},"Save",8,["disabled"]),Object(i["i"])("button",{onClick:e[3]||(e[3]=function(){return c.cancel&&c.cancel.apply(c,arguments)})},"Cancel"),Object(i["i"])("button",{onClick:e[4]||(e[4]=function(){return c.remove&&c.remove.apply(c,arguments)})},"Remove")]))],4)})),128)),p.creating?(Object(i["r"])(),Object(i["f"])("div",{key:0,class:"comments-overlay__form",style:c.getCommentPostition(p.creating)},[Object(i["G"])(Object(i["i"])("textarea",{ref:"text","onUpdate:modelValue":e[5]||(e[5]=function(t){return o.text=t})},null,512),[[i["D"],o.text]]),Object(i["i"])("button",{onClick:e[6]||(e[6]=function(){return c.create&&c.create.apply(c,arguments)}),disabled:!o.text},"Save",8,["disabled"]),Object(i["i"])("button",{onClick:e[7]||(e[7]=function(){return c.cancel&&c.cancel.apply(c,arguments)})},"Cancel")],4)):Object(i["g"])("",!0)])})),O=(n("99af"),{props:["target"],data:function(){return{text:null,editting:null,creating:null}},methods:{onTargetClick:function(t){this._resetState();var e=this.target.getRect();this.creating={id:t.id,targetId:this.target.id,commenter:t.commenter,ratioX:(t.clientX-e.left)/e.width,ratioY:(t.clientY-e.top)/e.height}},onIndicatorClick:function(t){this._resetState(),this.text=t.text,this.editting=t},getCommentPostition:function(t){var e=this.target.getRect(),n=t.ratioX*e.width+e.left,r=t.ratioY*e.height+e.top;return{left:"".concat(n,"px"),top:"".concat(r,"px")}},getCommentMetaString:function(t){return"string"===typeof t.timestamp&&(t.timestamp=new Date(t.timestamp)),"".concat(t.commenter.fullName," - ").concat(t.timestamp.getMonth(),"/").concat(t.timestamp.getDate(),"/").concat(t.timestamp.getFullYear())},edit:function(){this.editting.text=this.text,this.editting.timestamp=new Date,this._emit("edit",this.editting),this._resetState()},create:function(){this.creating.text=this.text,this.creating.timestamp=new Date,this._emit("create",this.creating),this._resetState()},cancel:function(){this._resetState()},remove:function(){this._emit("remove",this.editting),this._resetState()},_emit:function(t,e){this.$root.$emit(t,e)},_resetState:function(){this.text=null,this.editting=null,this.creating=null}},mounted:function(){this.$root.$on("commentTargetClicked__".concat(this.target.id),this.onTargetClick)},beforeUnmount:function(){this.$root.$off("commentTargetClicked__".concat(this.target.id),this.onTargetClick)}});n("ac0e");O.render=v,O.__scopeId="data-v-17d6a6ac";var j=O,y={components:{CommentsOverlay:j},computed:{targets:function(){return this.$root.targets}}};y.render=m;var w=y,x={commenterSelector:function(){return{id:null,fullName:"Anonymous",initials:"--",email:null}},data:{targets:{},onCreate:function(t){this.targets[t.targetId].comments.push(t)},onEdit:function(t){var e=this.targets[t.targetId].comments;e.splice(e.indexOf(t),1,t)},onRemove:function(t){console.log(t);var e=this.targets[t.targetId].comments;console.log(e.indexOf(t)),e.splice(e.indexOf(t),1)}}},_={install:function(t,e){var n=Object(d["a"])(Object(d["a"])({},x),e),r=Object(i["e"])({data:function(){return{targets:n.data.targets}},render:function(){return Object(i["l"])(w,{onCreate:n.data.onCreate,onEdit:n.data.onEdit,onRemove:n.data.onRemove})}});r.mount(document.body.appendChild(document.createElement("div"))),t.directive("comments-enabled",{mounted:function(t,e){r.$set(r.targets,e.value,{id:e.value,comments:[],getRect:function(){return t.getBoundingClientRect()}}),t.addEventListener("click",(function(t){r.$emit("commentTargetClicked__".concat(e.value),{id:Object(f["d"])(),commenter:n.commenterSelector(),clientX:t.clientX,clientY:t.clientY})}))}})}},C={blog:function(){return{path:"/blog.json",resolve:function(t,e){var n=t.results[0];return e.merge({title:n.title,labels:{post:n.post_label,author:n.author_label}})}}}},k={feed:function(){return{path:"/feed.json",resolve:function(t,e){return e.pipe(t.results)}}}},S=(n("a15b"),n("ac1f"),n("1276"),{post:function(t){return{path:"/post/".concat(t,".json"),resolve:function(t,e){var n=t.results[0],r=n.title,i=n.content,o=n.meta;return i="<p>"+i.split("\n\n").join("</p><p>")+"</p>",e.merge(Object(d["a"])({title:r,content:i},o))}}}}),P=(n("b64b"),n("d3b7"),function(){var t={};return{has:function(e){return!!t[e]},get:function(e){return JSON.parse(t[e])},set:function(e,n){return t[e]=JSON.stringify(n),Promise.resolve(n)}}}()),E=n("da81"),$=n.n(E),I={install:function(t,e){var n=e.endpoint,r=void 0===n?"":n,i=e.resources,o=void 0===i?{}:i;t.config.globalProperties.$getResource=function(t,e){var n=this,i=this.$options.resource;if(i&&o[i]&&o[i][t]){var c=o[i][t](e),a=c.path,u=c.resolve,s=r+a,l={pipe:function(t){return Promise.resolve(t)},merge:function(t){return $()(n.$data,t),Promise.resolve(t)},set:function(t){return Object.keys(t).forEach((function(e){n.$set(n.$data,e,t[e])})),Promise.resolve(t)}};return P.has(s)?u(P.get(s),l):fetch(s).then((function(t){return t.json()})).then((function(t){return P.set(s,t)})).then((function(t){return u(t,l)}))}}}},T=(n("5319"),n("3835")),M=function(){var t=[],e=!0,n=function(){var t=document.createElement("div"),e=document.createElement("style");return t.id="match-media-node",e.innerHTML="#match-media-node {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      bottom: 100%;\n      overflow: scroll;\n    }",document.head.appendChild(e),document.body.insertBefore(t,document.body.children[0]),{get width(){return t.clientWidth},get height(){return t.clientHeight},get orientation(){return t.clientHeight>t.clientWidth?"portrait":"landscape"},get fontSize(){return window.getComputedStyle(document.documentElement).getPropertyValue("font-size")}}}(),r=function(t,e){if("orientation"===t)return function(){return e===n.orientation};var r=t.split("-").reverse(),i=Object(T["a"])(r,2),o=i[0],c=i[1],a=c?"min"===c?"<":">":"==",u=function(){return~e.indexOf("em")?function(){return parseFloat(e)*n.fontSize}:function(){return parseFloat(e)}}(),s={width:function(){return u()+a+n.width},height:function(){return u()+a+n.height}};return s[o]},i=function(t){var e=t.replace(/[()\s]/g,"").split(":"),n=Object(T["a"])(e,2),i=n[0],o=n[1];return r(i,o)};return window.addEventListener("resize",(function(){if(e){e=!1;var r=n.width,i=n.height,o=setInterval((function(){r!==n.width||i!==n.height?(r=n.width,i=n.height):(clearTimeout(o),t.forEach((function(t){return t()})),e=!0)}),100)}})),function(e){var n=i(e),r={get matches(){return n()}};return Object(d["a"])(Object(d["a"])({},r),{},{addListener:function(e){var n=function(){return e(r)};t.push(n)}})}},B=window.matchMedia||M(),L={install:function(t,e){var n=Object(i["v"])({devices:{}}),r=function(t,e){return n.devices[t]=e,function(e){var r=e.matches;n.devices[t]=r}};Object.keys(e).forEach((function(t){var n=B("(".concat(e[t],")")),i=r(t,n.matches);n.addListener(i)})),t.config.globalProperties.$device=n.devices}},R=n("6c02"),A=function(){return n.e("Blog").then(n.bind(null,"2d33"))},D=[{path:"/",name:"feed",component:A},{path:"/by/:author",name:"author",props:!0,component:A},{path:"/read/:post",name:"post",props:!0,component:A}],N=Object(R["a"])({history:Object(R["b"])(),linkActiveClass:"active",routes:D}),Y=N,z=Object(i["e"])({render:function(){return Object(i["l"])(s)},mounted:function(){window.rootVue=this}});z.use(Y),z.use(_,{commenterSelector:function(){return{id:Object(f["d"])(),fullName:"Mick Keeper",initials:"MK",email:"young@goldmorning.cn"}}}),z.use(I,{resources:r,endpoint:o?"./dist/static/api":"./static/api"}),z.use(L,{phone:"max-width: 567px",tablet:"min-width: 568px",mobile:"max-width: 1024px",laptop:"min-width: 1025px",desktop:"min-width: 1280px",monitor:"min-width: 1448px"}),z.directive("lazyload",l),z.mount("#app")},"7bd2":function(t,e,n){},"7dc4":function(t,e,n){},ac0e:function(t,e,n){"use strict";n("7bd2")},dea4:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c}));n("a15b"),n("fb6a"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7");function r(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}var i=function(t){return t.toLowerCase().replace(" ","-")},o=function(t){return new Date(t).toString().split(" ").slice(0,4).join(" ").replace(/( \d+)$/,",$1")},c=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.2;if(t===e||t<e)return!1;var i=0;i=t<e?e-t:t-e;var o=function t(){if(i=parseInt(i/r),i<1)return n(i,!1),0;n(i),requestAnimationFrame(t)};o()}}});
//# sourceMappingURL=app.acc2ad70.js.map