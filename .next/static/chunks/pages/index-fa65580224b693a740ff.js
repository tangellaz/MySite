_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"8OQS":function(e,i){e.exports=function(e,i){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(o[t]=e[t]);return o}},Aiso:function(e,i,t){e.exports=t("dQHF")},RNiq:function(e,i,t){"use strict";t.r(i);var n=t("nKUr"),o=t("8Kt/"),a=t.n(o),r=(t("YFqc"),t("Aiso"),t("FIap")),c=(t("q1tI"),t("zxYf")),s=t.n(c),d=function(){return Object(n.jsxs)("div",{className:s.a.card,children:[Object(n.jsx)("h3",{children:"H3 Header"}),Object(n.jsx)("p",{children:"Elit tempor laborum veniam pariatur officia do reprehenderit tempor proident ut in velit cillum laboris sit laborum laborum sunt incididunt aliqua irure labore qui voluptate consequat."})]})};i.default=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(a.a,{children:[Object(n.jsx)("title",{children:"MyWebsite"}),Object(n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),Object(n.jsx)("header",{className:s.a.blue,children:Object(n.jsx)("p",{className:s.a.headerTop,children:"Header Top"})}),Object(n.jsx)(r.a,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)("div",{className:(s.a.zone,s.a.red),children:Object(n.jsx)("div",{className:s.a.cover,children:Object(n.jsxs)("div",{className:s.a.container,children:[Object(n.jsx)("h1",{children:"My Homepage"}),Object(n.jsx)("h2",{children:"I make websites."}),Object(n.jsx)("p",{children:"Irure enim pariatur excepteur minim ut officia ut sed quis quis irure amet culpa eiusmod fugiat labore labore ut duis esse enim anim nisi ex laboris in consectetur minim officia occaecat nisi laborum duis in tempor est."})]})})}),Object(n.jsx)("div",{className:(s.a.zone,s.a.green),children:Object(n.jsxs)("div",{className:s.a.cardContainer,children:[Object(n.jsx)(d,{}),Object(n.jsx)(d,{}),Object(n.jsx)(d,{})]})})]}),Object(n.jsx)("div",{className:(s.a.zone,s.a.yellow),children:Object(n.jsx)("footer",{className:s.a.footer,children:"Footer"})})]})}},UWYU:function(e,i,t){"use strict";i.__esModule=!0,i.imageConfigDefault=i.VALID_LOADERS=void 0;i.VALID_LOADERS=["default","imgix","cloudinary","akamai"];i.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},dEHY:function(e,i,t){"use strict";i.__esModule=!0,i.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,i,t){"use strict";var n=t("J4zp"),o=t("RIqP"),a=t("TqRt");i.__esModule=!0,i.default=function(e){var i=e.src,t=e.sizes,a=e.unoptimized,c=void 0!==a&&a,l=e.priority,f=void 0!==l&&l,b=e.loading,m=e.className,p=e.quality,x=e.width,w=e.height,y=e.objectFit,A=e.objectPosition,O=(0,r.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),z=t?"responsive":"intrinsic",_=!1;"unsized"in O?(_=Boolean(O.unsized),delete O.unsized):"layout"in O&&(O.layout&&(z=O.layout),delete O.layout);0;var q=!f&&("lazy"===b||"undefined"===typeof b);i&&i.startsWith("data:")&&(c=!0,q=!1);var N,S,E,k=(0,u.useIntersection)({rootMargin:"200px",disabled:!q}),I=n(k,2),R=I[0],D=I[1],H=!q||D,L=g(x),W=g(w),F=g(p),P={visibility:H?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:y,objectPosition:A};if("undefined"!==typeof L&&"undefined"!==typeof W&&"fill"!==z){var B=W/L,M=isNaN(B)?"100%":"".concat(100*B,"%");"responsive"===z?(N={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},S={display:"block",boxSizing:"border-box",paddingTop:M}):"intrinsic"===z?(N={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},S={boxSizing:"border-box",display:"block",maxWidth:"100%"},E='<svg width="'.concat(L,'" height="').concat(W,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===z&&(N={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:L,height:W})}else"undefined"===typeof L&&"undefined"===typeof W&&"fill"===z&&(N={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var U={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};H&&(U=function(e){var i=e.src,t=e.unoptimized,n=e.layout,a=e.width,r=e.quality,c=e.sizes;if(t)return{src:i};var s=function(e,i){if("number"!==typeof e||"fill"===i||"responsive"===i)return{widths:h,kind:"w"};return{widths:o(new Set([e,2*e,3*e].map((function(e){return v.find((function(i){return i>=e}))||v[v.length-1]})))),kind:"x"}}(a,n),d=s.widths,l=s.kind,u=d.length-1,f=d.map((function(e,t){return"".concat(j({src:i,quality:r,width:e})," ").concat("w"===l?e:t+1).concat(l)})).join(", ");c||"w"!==l||(c=d.map((function(e,i){return i===u?"".concat(e,"px"):"(max-width: ".concat(e,"px) ").concat(e,"px")})).join(", "));return{src:i=j({src:i,quality:r,width:d[u]}),sizes:c,srcSet:f}}({src:i,unoptimized:c,layout:z,width:L,quality:F,sizes:t}));_&&(N=void 0,S=void 0,P=void 0);return s.default.createElement("div",{style:N},S?s.default.createElement("div",{style:S},E?s.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(E))}):null):null,s.default.createElement("img",Object.assign({},O,U,{decoding:"async",className:m,ref:R,style:P})))};var r=a(t("8OQS")),c=a(t("pVnL")),s=a(t("q1tI")),d=t("dEHY"),l=t("UWYU"),u=t("vNVm");var f=new Map([["imgix",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,a=["auto=format","fit=max","w="+n],r="";o&&a.push("q="+o);a.length&&(r="?"+a.join("&"));return"".concat(i).concat(w(t)).concat(r)}],["cloudinary",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,a=["f_auto","c_limit","w_"+n],r="";o&&a.push("q_"+o);a.length&&(r=a.join(",")+"/");return"".concat(i).concat(r).concat(w(t))}],["akamai",function(e){var i=e.root,t=e.src,n=e.width;return"".concat(i).concat(w(t),"?imwidth=").concat(n)}],["default",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality;0;return"".concat(i,"?url=").concat(encodeURIComponent(t),"&w=").concat(n,"&q=").concat(o||75)}]]),b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,h=b.deviceSizes,m=b.imageSizes,p=b.loader,x=b.path,v=(b.domains,[].concat(o(h),o(m)));function j(e){var i=f.get(p);if(i)return i((0,c.default)({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(p))}function g(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function w(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,i){return e-i})),v.sort((function(e,i){return e-i}))},pVnL:function(e,i){function t(){return e.exports=t=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}e.exports=t},vlRD:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1,3]]]);