/*! For license information please see querination.js.LICENSE.txt */
(()=>{var e={750:(e,t,n)=>{"use strict";n.r(t),n.d(t,{afterMain:()=>E,afterRead:()=>b,afterWrite:()=>j,applyStyles:()=>M,arrow:()=>G,auto:()=>s,basePlacements:()=>c,beforeMain:()=>w,beforeRead:()=>v,beforeWrite:()=>x,bottom:()=>o,clippingParents:()=>l,computeStyles:()=>te,createPopper:()=>Te,createPopperBase:()=>ke,createPopperLite:()=>Se,detectOverflow:()=>ge,end:()=>u,eventListeners:()=>re,flip:()=>ve,hide:()=>we,left:()=>a,main:()=>O,modifierPhases:()=>A,offset:()=>Oe,placements:()=>g,popper:()=>d,popperGenerator:()=>Pe,popperOffsets:()=>Ee,preventOverflow:()=>xe,read:()=>y,reference:()=>h,right:()=>i,start:()=>f,top:()=>r,variationPlacements:()=>m,viewport:()=>p,write:()=>_});var r="top",o="bottom",i="right",a="left",s="auto",c=[r,o,i,a],f="start",u="end",l="clippingParents",p="viewport",d="popper",h="reference",m=c.reduce((function(e,t){return e.concat([t+"-"+f,t+"-"+u])}),[]),g=[].concat(c,[s]).reduce((function(e,t){return e.concat([t,t+"-"+f,t+"-"+u])}),[]),v="beforeRead",y="read",b="afterRead",w="beforeMain",O="main",E="afterMain",x="beforeWrite",_="write",j="afterWrite",A=[v,y,b,w,O,E,x,_,j];function D(e){return e?(e.nodeName||"").toLowerCase():null}function P(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function k(e){return e instanceof P(e).Element||e instanceof Element}function T(e){return e instanceof P(e).HTMLElement||e instanceof HTMLElement}function S(e){return"undefined"!=typeof ShadowRoot&&(e instanceof P(e).ShadowRoot||e instanceof ShadowRoot)}const M={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];T(o)&&D(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});T(r)&&D(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function C(e){return e.split("-")[0]}var L=Math.round;function N(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(T(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=n.width/a||1),i>0&&(o=n.height/i||1)}return{width:L(n.width/r),height:L(n.height/o),top:L(n.top/o),right:L(n.right/r),bottom:L(n.bottom/o),left:L(n.left/r),x:L(n.left/r),y:L(n.top/o)}}function H(e){var t=N(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&S(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function B(e){return P(e).getComputedStyle(e)}function R(e){return["table","td","th"].indexOf(D(e))>=0}function W(e){return((k(e)?e.ownerDocument:e.document)||window.document).documentElement}function I(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(S(e)?e.host:null)||W(e)}function $(e){return T(e)&&"fixed"!==B(e).position?e.offsetParent:null}function V(e){for(var t=P(e),n=$(e);n&&R(n)&&"static"===B(n).position;)n=$(n);return n&&("html"===D(n)||"body"===D(n)&&"static"===B(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&T(e)&&"fixed"===B(e).position)return null;for(var n=I(e);T(n)&&["html","body"].indexOf(D(n))<0;){var r=B(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var K=Math.max,z=Math.min,F=Math.round;function U(e,t,n){return K(e,z(t,n))}function Q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function X(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const G={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,s=e.name,f=e.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,p=C(n.placement),d=Y(p),h=[a,i].indexOf(p)>=0?"height":"width";if(u&&l){var m=function(e,t){return Q("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:X(e,c))}(f.padding,n),g=H(u),v="y"===d?r:a,y="y"===d?o:i,b=n.rects.reference[h]+n.rects.reference[d]-l[d]-n.rects.popper[h],w=l[d]-n.rects.reference[d],O=V(u),E=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,x=b/2-w/2,_=m[v],j=E-g[h]-m[y],A=E/2-g[h]/2+x,D=U(_,A,j),P=d;n.modifiersData[s]=((t={})[P]=D,t.centerOffset=D-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&q(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Z(e){return e.split("-")[1]}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,s=e.popperRect,c=e.placement,f=e.variation,l=e.offsets,p=e.position,d=e.gpuAcceleration,h=e.adaptive,m=e.roundOffsets,g=!0===m?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:F(F(t*r)/r)||0,y:F(F(n*r)/r)||0}}(l):"function"==typeof m?m(l):l,v=g.x,y=void 0===v?0:v,b=g.y,w=void 0===b?0:b,O=l.hasOwnProperty("x"),E=l.hasOwnProperty("y"),x=a,_=r,j=window;if(h){var A=V(n),D="clientHeight",k="clientWidth";A===P(n)&&"static"!==B(A=W(n)).position&&"absolute"===p&&(D="scrollHeight",k="scrollWidth"),A=A,c!==r&&(c!==a&&c!==i||f!==u)||(_=o,w-=A[D]-s.height,w*=d?1:-1),c!==a&&(c!==r&&c!==o||f!==u)||(x=i,y-=A[k]-s.width,y*=d?1:-1)}var T,S=Object.assign({position:p},h&&J);return d?Object.assign({},S,((T={})[_]=E?"0":"",T[x]=O?"0":"",T.transform=(j.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",T)):Object.assign({},S,((t={})[_]=E?w+"px":"",t[x]=O?y+"px":"",t.transform="",t))}const te={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:C(t.placement),variation:Z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ne={passive:!0};const re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=P(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,ne)})),s&&c.addEventListener("resize",n.update,ne),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,ne)})),s&&c.removeEventListener("resize",n.update,ne)}},data:{}};var oe={left:"right",right:"left",bottom:"top",top:"bottom"};function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var ae={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function ce(e){var t=P(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function fe(e){return N(W(e)).left+ce(e).scrollLeft}function ue(e){var t=B(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function le(e){return["html","body","#document"].indexOf(D(e))>=0?e.ownerDocument.body:T(e)&&ue(e)?e:le(I(e))}function pe(e,t){var n;void 0===t&&(t=[]);var r=le(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=P(r),a=o?[i].concat(i.visualViewport||[],ue(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(pe(I(a)))}function de(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function he(e,t){return t===p?de(function(e){var t=P(e),n=W(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+fe(e),y:s}}(e)):T(t)?function(e){var t=N(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):de(function(e){var t,n=W(e),r=ce(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=K(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=K(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+fe(e),c=-r.scrollTop;return"rtl"===B(o||n).direction&&(s+=K(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(W(e)))}function me(e){var t,n=e.reference,s=e.element,c=e.placement,l=c?C(c):null,p=c?Z(c):null,d=n.x+n.width/2-s.width/2,h=n.y+n.height/2-s.height/2;switch(l){case r:t={x:d,y:n.y-s.height};break;case o:t={x:d,y:n.y+n.height};break;case i:t={x:n.x+n.width,y:h};break;case a:t={x:n.x-s.width,y:h};break;default:t={x:n.x,y:n.y}}var m=l?Y(l):null;if(null!=m){var g="y"===m?"height":"width";switch(p){case f:t[m]=t[m]-(n[g]/2-s[g]/2);break;case u:t[m]=t[m]+(n[g]/2-s[g]/2)}}return t}function ge(e,t){void 0===t&&(t={});var n=t,a=n.placement,s=void 0===a?e.placement:a,f=n.boundary,u=void 0===f?l:f,m=n.rootBoundary,g=void 0===m?p:m,v=n.elementContext,y=void 0===v?d:v,b=n.altBoundary,w=void 0!==b&&b,O=n.padding,E=void 0===O?0:O,x=Q("number"!=typeof E?E:X(E,c)),_=y===d?h:d,j=e.rects.popper,A=e.elements[w?_:y],P=function(e,t,n){var r="clippingParents"===t?function(e){var t=pe(I(e)),n=["absolute","fixed"].indexOf(B(e).position)>=0&&T(e)?V(e):e;return k(n)?t.filter((function(e){return k(e)&&q(e,n)&&"body"!==D(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=he(e,n);return t.top=K(r.top,t.top),t.right=z(r.right,t.right),t.bottom=z(r.bottom,t.bottom),t.left=K(r.left,t.left),t}),he(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(k(A)?A:A.contextElement||W(e.elements.popper),u,g),S=N(e.elements.reference),M=me({reference:S,element:j,strategy:"absolute",placement:s}),C=de(Object.assign({},j,M)),L=y===d?C:S,H={top:P.top-L.top+x.top,bottom:L.bottom-P.bottom+x.bottom,left:P.left-L.left+x.left,right:L.right-P.right+x.right},R=e.modifiersData.offset;if(y===d&&R){var $=R[s];Object.keys(H).forEach((function(e){var t=[i,o].indexOf(e)>=0?1:-1,n=[r,o].indexOf(e)>=0?"y":"x";H[e]+=$[n]*t}))}return H}const ve={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,u=e.name;if(!t.modifiersData[u]._skip){for(var l=n.mainAxis,p=void 0===l||l,d=n.altAxis,h=void 0===d||d,v=n.fallbackPlacements,y=n.padding,b=n.boundary,w=n.rootBoundary,O=n.altBoundary,E=n.flipVariations,x=void 0===E||E,_=n.allowedAutoPlacements,j=t.options.placement,A=C(j),D=v||(A!==j&&x?function(e){if(C(e)===s)return[];var t=ie(e);return[se(e),t,se(t)]}(j):[ie(j)]),P=[j].concat(D).reduce((function(e,n){return e.concat(C(n)===s?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,u=void 0===f?g:f,l=Z(r),p=l?s?m:m.filter((function(e){return Z(e)===l})):c,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var h=d.reduce((function(t,n){return t[n]=ge(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[C(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:n,boundary:b,rootBoundary:w,padding:y,flipVariations:x,allowedAutoPlacements:_}):n)}),[]),k=t.rects.reference,T=t.rects.popper,S=new Map,M=!0,L=P[0],N=0;N<P.length;N++){var H=P[N],q=C(H),B=Z(H)===f,R=[r,o].indexOf(q)>=0,W=R?"width":"height",I=ge(t,{placement:H,boundary:b,rootBoundary:w,altBoundary:O,padding:y}),$=R?B?i:a:B?o:r;k[W]>T[W]&&($=ie($));var V=ie($),Y=[];if(p&&Y.push(I[q]<=0),h&&Y.push(I[$]<=0,I[V]<=0),Y.every((function(e){return e}))){L=H,M=!1;break}S.set(H,Y)}if(M)for(var K=function(e){var t=P.find((function(t){var n=S.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},z=x?3:1;z>0&&"break"!==K(z);z--);t.placement!==L&&(t.modifiersData[u]._skip=!0,t.placement=L,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[r,i,o,a].some((function(t){return e[t]>=0}))}const we={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ge(t,{elementContext:"reference"}),s=ge(t,{altBoundary:!0}),c=ye(a,r),f=ye(s,o,i),u=be(c),l=be(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}},Oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,s=n.offset,c=void 0===s?[0,0]:s,f=g.reduce((function(e,n){return e[n]=function(e,t,n){var o=C(e),s=[a,r].indexOf(o)>=0?-1:1,c="function"==typeof n?n(Object.assign({},t,{placement:e})):n,f=c[0],u=c[1];return f=f||0,u=(u||0)*s,[a,i].indexOf(o)>=0?{x:u,y:f}:{x:f,y:u}}(n,t.rects,c),e}),{}),u=f[t.placement],l=u.x,p=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=f}},Ee={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=me({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},xe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,s=e.name,c=n.mainAxis,u=void 0===c||c,l=n.altAxis,p=void 0!==l&&l,d=n.boundary,h=n.rootBoundary,m=n.altBoundary,g=n.padding,v=n.tether,y=void 0===v||v,b=n.tetherOffset,w=void 0===b?0:b,O=ge(t,{boundary:d,rootBoundary:h,padding:g,altBoundary:m}),E=C(t.placement),x=Z(t.placement),_=!x,j=Y(E),A="x"===j?"y":"x",D=t.modifiersData.popperOffsets,P=t.rects.reference,k=t.rects.popper,T="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,S={x:0,y:0};if(D){if(u||p){var M="y"===j?r:a,L="y"===j?o:i,N="y"===j?"height":"width",q=D[j],B=D[j]+O[M],R=D[j]-O[L],W=y?-k[N]/2:0,I=x===f?P[N]:k[N],$=x===f?-k[N]:-P[N],F=t.elements.arrow,Q=y&&F?H(F):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=X[M],J=X[L],ee=U(0,P[N],Q[N]),te=_?P[N]/2-W-ee-G-T:I-ee-G-T,ne=_?-P[N]/2+W+ee+J+T:$+ee+J+T,re=t.elements.arrow&&V(t.elements.arrow),oe=re?"y"===j?re.clientTop||0:re.clientLeft||0:0,ie=t.modifiersData.offset?t.modifiersData.offset[t.placement][j]:0,ae=D[j]+te-ie-oe,se=D[j]+ne-ie;if(u){var ce=U(y?z(B,ae):B,q,y?K(R,se):R);D[j]=ce,S[j]=ce-q}if(p){var fe="x"===j?r:a,ue="x"===j?o:i,le=D[A],pe=le+O[fe],de=le-O[ue],he=U(y?z(pe,ae):pe,le,y?K(de,se):de);D[A]=he,S[A]=he-le}}t.modifiersData[s]=S}},requiresIfExists:["offset"]};function _e(e,t,n){void 0===n&&(n=!1);var r,o,i=T(t),a=T(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),s=W(t),c=N(e,a),f={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&(("body"!==D(t)||ue(s))&&(f=(r=t)!==P(r)&&T(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:ce(r)),T(t)?((u=N(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=fe(s))),{x:c.left+f.scrollLeft-u.x,y:c.top+f.scrollTop-u.y,width:c.width,height:c.height}}function je(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var Ae={placement:"bottom",modifiers:[],strategy:"absolute"};function De(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Pe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Ae:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ae,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],f=!1,u={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;l(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:k(e)?pe(e):e.contextElement?pe(e.contextElement):[],popper:pe(t)};var a,f,p=function(e){var t=je(e);return A.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),f=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(f).map((function(e){return f[e]}))));return s.orderedModifiers=p.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:r});c.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!f){var e=s.elements,t=e.reference,n=e.popper;if(De(t,n)){s.rects={reference:_e(t,V(n),"fixed"===s.options.strategy),popper:H(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,c=void 0===a?{}:a,l=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:l,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),f=!0}};if(!De(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var ke=Pe(),Te=Pe({defaultModifiers:[re,Ee,te,M,Oe,ve,xe,G,we]}),Se=Pe({defaultModifiers:[re,Ee,te,M]})},695:function(e,t,n){e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),o=n(t);const i="transitionend",a=e=>(e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType))(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,s=e=>{"function"==typeof e&&e()},c=(e,t,n=!0)=>{if(!n)return void s(e);const r=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let o=!1;const a=({target:n})=>{n===t&&(o=!0,t.removeEventListener(i,a),s(e))};t.addEventListener(i,a),setTimeout((()=>{o||t.dispatchEvent(new Event(i))}),r)};return class{constructor(e){(e=a(e))&&(this._element=e,r.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.default.remove(this._element,this.constructor.DATA_KEY),o.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){c(e,t,n)}static getInstance(e){return r.default.get(a(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.1.0"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}}(n(493),n(286))},493:function(e){e.exports=function(){"use strict";const e=new Map;return{set(t,n,r){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const r=e.get(t);r.delete(n),0===r.size&&e.delete(t)}}}()},286:function(e){e.exports=function(){"use strict";const e=/[^.]*(?=\..*)\.|.*/,t=/\..*/,n=/::\d+$/,r={};let o=1;const i={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,s=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function c(e,t){return t&&`${t}::${o++}`||e.uidEvent||o++}function f(e){const t=c(e);return e.uidEvent=t,r[t]=r[t]||{},r[t]}function u(e,t,n=null){const r=Object.keys(e);for(let o=0,i=r.length;o<i;o++){const i=e[r[o]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function l(e,t,n){const r="string"==typeof t,o=r?n:t;let i=h(e);return s.has(i)||(i=e),[r,o,i]}function p(t,n,r,o,i){if("string"!=typeof n||!t)return;if(r||(r=o,o=null),a.test(n)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o?o=e(o):r=e(r)}const[s,p,d]=l(n,r,o),h=f(t),g=h[d]||(h[d]={}),v=u(g,p,s?r:null);if(v)return void(v.oneOff=v.oneOff&&i);const y=c(p,n.replace(e,"")),b=s?function(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:a}=o;a&&a!==this;a=a.parentNode)for(let s=i.length;s--;)if(i[s]===a)return o.delegateTarget=a,r.oneOff&&m.off(e,o.type,t,n),n.apply(a,[o]);return null}}(t,r,o):function(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&m.off(e,r.type,t),t.apply(e,[r])}}(t,r);b.delegationSelector=s?r:null,b.originalHandler=p,b.oneOff=i,b.uidEvent=y,g[y]=b,t.addEventListener(d,b,s)}function d(e,t,n,r,o){const i=u(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function h(e){return e=e.replace(t,""),i[e]||e}const m={on(e,t,n,r){p(e,t,n,r,!1)},one(e,t,n,r){p(e,t,n,r,!0)},off(e,t,r,o){if("string"!=typeof t||!e)return;const[i,a,s]=l(t,r,o),c=s!==t,u=f(e),p=t.startsWith(".");if(void 0!==a){if(!u||!u[s])return;return void d(e,u,s,a,i?r:null)}p&&Object.keys(u).forEach((n=>{!function(e,t,n,r){const o=t[n]||{};Object.keys(o).forEach((i=>{if(i.includes(r)){const r=o[i];d(e,t,n,r.originalHandler,r.delegationSelector)}}))}(e,u,n,t.slice(1))}));const h=u[s]||{};Object.keys(h).forEach((r=>{const o=r.replace(n,"");if(!c||t.includes(o)){const t=h[r];d(e,u,s,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!=typeof t||!e)return null;const r=(()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null})(),o=h(t),i=t!==o,a=s.has(o);let c,f=!0,u=!0,l=!1,p=null;return i&&r&&(c=r.Event(t,n),r(e).trigger(c),f=!c.isPropagationStopped(),u=!c.isImmediatePropagationStopped(),l=c.isDefaultPrevented()),a?(p=document.createEvent("HTMLEvents"),p.initEvent(o,f,!0)):p=new CustomEvent(t,{bubbles:f,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((e=>{Object.defineProperty(p,e,{get:()=>n[e]})})),l&&p.preventDefault(),u&&e.dispatchEvent(p),p.defaultPrevented&&void 0!==c&&c.preventDefault(),p}};return m}()},175:function(e){e.exports=function(){"use strict";function e(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}return{setDataAttribute(e,n,r){e.setAttribute(`data-bs-${t(n)}`,r)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={};return Object.keys(t.dataset).filter((e=>e.startsWith("bs"))).forEach((r=>{let o=r.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=e(t.dataset[r])})),n},getDataAttribute:(n,r)=>e(n.getAttribute(`data-bs-${t(r)}`)),offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position:e=>({top:e.offsetTop,left:e.offsetLeft})}}()},737:function(e){e.exports=function(){"use strict";return{find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let r=e.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE&&3!==r.nodeType;)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!(e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")))(e)&&(e=>{return t=e,!(!t||"object"!=typeof t||(void 0!==t.jquery&&(t=t[0]),void 0===t.nodeType)||0===e.getClientRects().length||"visible"!==getComputedStyle(e).getPropertyValue("visibility"));var t})(e)))}}}()},872:function(e,t,n){e.exports=function(e,t,n,r,o){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var s=a(e),c=i(t),f=i(n),u=i(r),l=i(o);const p=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),d=e=>!(!p(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),h=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),m=()=>{},g=[],v=()=>"rtl"===document.documentElement.dir,y="dropdown",b="Escape",w="Space",O="ArrowUp",E="ArrowDown",x=new RegExp("ArrowUp|ArrowDown|Escape"),_="click.bs.dropdown.data-api",j="keydown.bs.dropdown.data-api",A="show",D='[data-bs-toggle="dropdown"]',P=".dropdown-menu",k=v()?"top-end":"top-start",T=v()?"top-start":"top-end",S=v()?"bottom-end":"bottom-start",M=v()?"bottom-start":"bottom-end",C=v()?"left-start":"right-start",L=v()?"right-start":"left-start",N={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},H={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class q extends l.default{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return N}static get DefaultType(){return H}static get NAME(){return y}toggle(){return this._isShown()?this.hide():this.show()}show(){if(h(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(c.default.trigger(this._element,"show.bs.dropdown",e).defaultPrevented)return;const t=q.getParentFromElement(this._element);this._inNavbar?f.default.setDataAttribute(this._menu,"popper","none"):this._createPopper(t),"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach((e=>c.default.on(e,"mouseover",m))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(A),this._element.classList.add(A),c.default.trigger(this._element,"shown.bs.dropdown",e)}hide(){if(h(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){c.default.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>c.default.off(e,"mouseover",m))),this._popper&&this._popper.destroy(),this._menu.classList.remove(A),this._element.classList.remove(A),this._element.setAttribute("aria-expanded","false"),f.default.removeDataAttribute(this._menu,"popper"),c.default.trigger(this._element,"hidden.bs.dropdown",e))}_getConfig(e){if(e={...this.constructor.Default,...f.default.getDataAttributes(this._element),...e},((e,t,n)=>{Object.keys(n).forEach((r=>{const o=n[r],i=t[r],a=i&&p(i)?"element":null==(s=i)?`${s}`:{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();var s;if(!new RegExp(o).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${o}".`)}))})(y,e,this.constructor.DefaultType),"object"==typeof e.reference&&!p(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${y.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if(void 0===s)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;var n;"parent"===this._config.reference?t=e:p(this._config.reference)?(n=this._config.reference,t=p(n)?n.jquery?n[0]:n:"string"==typeof n&&n.length>0?document.querySelector(n):null):"object"==typeof this._config.reference&&(t=this._config.reference);const r=this._getPopperConfig(),o=r.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=s.createPopper(t,this._menu,r),o&&f.default.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(A)}_getMenuElement(){return u.default.next(this._element,P)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains("dropend"))return C;if(e.classList.contains("dropstart"))return L;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?T:k:t?M:S}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=u.default.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(d);n.length&&((e,t,n,r)=>{let o=e.indexOf(t);if(-1===o)return e[!n&&r?e.length-1:0];const i=e.length;return o+=n?1:-1,r&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))]})(n,t,e===E,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=q.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const t=u.default.find(D);for(let n=0,r=t.length;n<r;n++){const r=q.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const o={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(o.clickEvent=e)}r._completeHide(o)}}static getParentFromElement(e){return(e=>{const t=(e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t})(e);return t?document.querySelector(t):null})(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===w||e.key!==b&&(e.key!==E&&e.key!==O||e.target.closest(P)):!x.test(e.key))return;const t=this.classList.contains(A);if(!t&&e.key===b)return;if(e.preventDefault(),e.stopPropagation(),h(this))return;const n=this.matches(D)?this:u.default.prev(this,D)[0],r=q.getOrCreateInstance(n);if(e.key!==b)return e.key===O||e.key===E?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==w||q.clearMenus());r.hide()}}return c.default.on(document,j,D,q.dataApiKeydownHandler),c.default.on(document,j,P,q.dataApiKeydownHandler),c.default.on(document,_,q.clearMenus),c.default.on(document,"keyup.bs.dropdown.data-api",q.clearMenus),c.default.on(document,_,D,(function(e){e.preventDefault(),q.getOrCreateInstance(this).toggle()})),B=q,R=()=>{const e=(()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null})();if(e){const t=B.NAME,n=e.fn[t];e.fn[t]=B.jQueryInterface,e.fn[t].Constructor=B,e.fn[t].noConflict=()=>(e.fn[t]=n,B.jQueryInterface)}},"loading"===document.readyState?(g.length||document.addEventListener("DOMContentLoaded",(()=>{g.forEach((e=>e()))})),g.push(R)):R(),q;var B,R}(n(750),n(286),n(175),n(737),n(695))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";n(872)})()})();