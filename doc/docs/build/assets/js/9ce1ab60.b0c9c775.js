"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="What is a codec",s={unversionedId:"services/osana/codecs",id:"services/osana/codecs",title:"What is a codec",description:"A codec is a way to encode the URL that is shown to the user. This is to prevent the user from seeing the actual URL.",source:"@site/docs/services/osana/codecs.md",sourceDirName:"services/osana",slug:"/services/osana/codecs",permalink:"/docs/services/osana/codecs",draft:!1,editUrl:"https://github.com/NebulaServices/luminous-docs/docs/services/osana/codecs.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Quick deployment",permalink:"/docs/services/osana/deployment"},next:{title:"Osana Configuration",permalink:"/docs/services/osana/configuration"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-a-codec"},"What is a codec"),(0,a.kt)("p",null,"A codec is a way to encode the URL that is shown to the user. This is to prevent the user from seeing the actual URL. "),(0,a.kt)("h1",{id:"available-codecs"},"Available codecs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"none - ",(0,a.kt)("inlineCode",{parentName:"li"},"none")),(0,a.kt)("li",{parentName:"ul"},"planetext - ",(0,a.kt)("inlineCode",{parentName:"li"},"planetext")),(0,a.kt)("li",{parentName:"ul"},"base64 - ",(0,a.kt)("inlineCode",{parentName:"li"},"base64")),(0,a.kt)("li",{parentName:"ul"},"XOR - ",(0,a.kt)("inlineCode",{parentName:"li"},"xor")),(0,a.kt)("li",{parentName:"ul"},"WTFEncoder - ",(0,a.kt)("inlineCode",{parentName:"li"},"whatthefuck"))),(0,a.kt)("h1",{id:"explanation-of-codecs"},"Explanation of codecs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XOR is a lightweight yet effective encoding method that is used to encode the URL. It is recommended to use this as it is the most stealthy."),(0,a.kt)("li",{parentName:"ul"},"Base64 is a group of similar binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation"),(0,a.kt)("li",{parentName:"ul"},"Planetext is a simple encoding method that is used to encode the URL. We don't recommend using this as it is not secure or stealthy. Plaintext is the default encoding method."),(0,a.kt)("li",{parentName:"ul"},"Whatthefuck Encoding is a method that is used to encode the URL. While it is secure, at this time it is unstable and we don't recommend using it as it may not operate as intended or expected.")))}p.isMDXComponent=!0}}]);