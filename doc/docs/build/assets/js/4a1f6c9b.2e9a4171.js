"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5836],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={},a="Deployment Configuration Guide",c={unversionedId:"services/nebulaweb/deployment-config",id:"services/nebulaweb/deployment-config",title:"Deployment Configuration Guide",description:"(Example configuration with none-json notes)",source:"@site/docs/services/nebulaweb/deployment-config.md",sourceDirName:"services/nebulaweb",slug:"/services/nebulaweb/deployment-config",permalink:"/docs/services/nebulaweb/deployment-config",draft:!1,editUrl:"https://github.com/NebulaServices/luminous-docs/docs/services/nebulaweb/deployment-config.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Deployment",permalink:"/docs/services/nebulaweb/deployment"},next:{title:"Osana // Explore Faster",permalink:"/docs/services/osana/"}},l={},s=[],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment-configuration-guide"},"Deployment Configuration Guide"),(0,o.kt)("p",null,"(Example configuration with none-json notes) "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "verification": false, // disabled by default \n  "api_key":" Your sendgrid API key used to access your account from the API to send emails",\n  "sendFromEmail":"The email that will send the one time password (MUST BE VERIFIED IN SENDGRID)",\n  "type": "code", // DO NOT TOUCH\n  "email": " The email you want to use for recieving OTP "\n}\n')))}m.isMDXComponent=!0}}]);