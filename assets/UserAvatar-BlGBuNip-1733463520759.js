import{j as r}from"./index-dYk9kCLd-1733463520759.js";const l={sm:"w-6 h-6 text-xs",md:"w-10 h-10 text-sm",lg:"w-14 h-14 text-base"},p=({user:e,size:m="md",className:a=""})=>{const o=t=>{if(t.firstName&&t.lastName)return`${t.firstName[0]}${t.lastName[0]}`.toUpperCase();if(t.displayName){const s=t.displayName.split(" ");return s.length>=2?`${s[0][0]}${s[1][0]}`.toUpperCase():s[0][0].toUpperCase()}return t.email?t.email[0].toUpperCase():"?"},i=l[m]||l.md;return e.photoURL?r.jsx("img",{src:e.photoURL,alt:e.displayName||"User",className:`${i} ${a} rounded-full object-cover`}):r.jsx("div",{className:`${i} ${a} rounded-full bg-purple-600 flex items-center justify-center text-white font-medium`,children:o(e)})};export{p as U};