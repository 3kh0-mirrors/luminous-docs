"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(r),d=i,y=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(7462),i=(r(7294),r(3905));const a={title:"Summary"},o=void 0,c={unversionedId:"services/dynamic/implementation/Summary",id:"services/dynamic/implementation/Summary",title:"Summary",description:"Here's what we've done",source:"@site/docs/services/dynamic/implementation/Summary.md",sourceDirName:"services/dynamic/implementation",slug:"/services/dynamic/implementation/Summary",permalink:"/docs/services/dynamic/implementation/Summary",draft:!1,editUrl:"https://github.com/NebulaServices/luminous-docs/docs/services/dynamic/implementation/Summary.md",tags:[],version:"current",frontMatter:{title:"Summary"},sidebar:"sdkSidebar",previous:{title:"Final Touches",permalink:"/docs/services/dynamic/implementation/Final-Touches"},next:{title:"Headless Dynamic",permalink:"/docs/services/dynamic/guides/headless/"}},l={},m=[{value:"Here&#39;s what we&#39;ve done",id:"heres-what-weve-done",level:2}],s={toc:m},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"heres-what-weve-done"},"Here's what we've done"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We moved Dynamics bundle files into ",(0,i.kt)("inlineCode",{parentName:"li"},"public/dynamic/")," directory. "),(0,i.kt)("li",{parentName:"ol"},"We have modified the path in the config to match the new directory structure."),(0,i.kt)("li",{parentName:"ol"},"We created a service worker and scoped it to the appropriate ",(0,i.kt)("inlineCode",{parentName:"li"},"/service/")," path."),(0,i.kt)("li",{parentName:"ol"},"We registered the service worker in our JavaScript file."),(0,i.kt)("li",{parentName:"ol"},"Boom. That's it. You're done.")))}u.isMDXComponent=!0}}]);