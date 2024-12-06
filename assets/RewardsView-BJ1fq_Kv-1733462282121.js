import{D,d as $,E as F,A,$ as z,r as c,j as e,a0 as b,u as O,P as v,V as M,C as L,f as P,T as W,X as G,e as K,n as U}from"./index-BRL3oD8D-1733462282121.js";import{C as V}from"./clock-B4DlbOnf-1733462282121.js";class C{static async updateMeldCustomerId(a,t){try{const r=D($,"users",a);await F(r,{meldCustomerId:t,lastUpdated:new Date})}catch(r){throw console.error("Error updating Meld customer ID:",r),r}}static async initializeUserIfNeeded(a){try{const t=D($,"users",a);(await A(t)).exists()||await z(t,{createdAt:new Date().toISOString(),lastSpinTime:null})}catch(t){throw console.error("Error initializing user:",t),t}}static async updateLastSpinTime(a){try{const t=D($,"users",a);(await A(t)).exists()||await this.initializeUserIfNeeded(a),await F(t,{lastSpinTime:new Date().toISOString()})}catch(t){throw console.error("Error updating last spin time:",t),t}}static async getLastSpinTime(a){try{await this.initializeUserIfNeeded(a);const t=D($,"users",a),r=await A(t);return r.exists()?r.data().lastSpinTime:null}catch(t){throw console.error("Error getting last spin time:",t),t}}static canUserSpin(a){if(!a)return!0;const t=new Date(a);return(new Date-t)/(1e3*60*60)>=24}}const q=({prizes:l,onSpinComplete:a})=>{const[t,r]=c.useState(!1),[y,h]=c.useState(0),[j,p]=c.useState({});c.useEffect(()=>{(async()=>{const o={};for(const w of l)try{const x=new Image;x.src=`/images/${w.image}`,await x.decode(),o[w.name]=x.src}catch(x){console.error(`Error loading image for ${w.name}:`,x)}p(o)})()},[l]);const f=c.useCallback(()=>{if(t)return;const n=1440+Math.random()*720,o=y+n;r(!0),h(o),setTimeout(()=>{r(!1),a&&a(o%360)},5e3)},[t,y,a]),u=150,m=150,S=l.map((n,o)=>{const w=o*60*Math.PI/180,x=(o+1)*60*Math.PI/180,E=m+u*Math.cos(w),R=m+u*Math.sin(w),I=m+u*Math.cos(x),k=m+u*Math.sin(x);return{path:`M${m},${m} L${E},${R} A${u},${u} 0 0,1 ${I},${k} Z`,prize:n,angle:o*60}});return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("button",{onClick:f,disabled:t,className:`mb-8 px-8 py-3 text-white rounded-lg font-medium transition-all duration-200
          ${t?"bg-gray-600 cursor-not-allowed opacity-50":"bg-green-500 hover:bg-green-600 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"}`,children:t?"Spinning...":"Spin"}),e.jsx("div",{className:"grid grid-cols-2 gap-6 mb-8 text-white text-lg",children:l.map((n,o)=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-6 h-6 rounded-full flex-shrink-0",style:{background:`linear-gradient(135deg, ${n.gradientStart}, ${n.gradientEnd})`}}),e.jsxs("span",{className:"flex-shrink-0 font-medium",children:[n.name," - $",n.value.toFixed(2)]}),j[n.name]&&e.jsx("img",{src:j[n.name],alt:n.name,className:"w-10 h-10 object-contain rounded bg-white/10 p-1"})]},o))}),e.jsxs("div",{className:"relative w-96 h-96",children:[e.jsx("div",{className:`absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 
          border-t-[24px] border-l-[12px] border-r-[12px]
          border-t-green-500 border-l-transparent border-r-transparent
          filter drop-shadow-md z-20`}),e.jsx("div",{style:{transform:`rotate(${y}deg)`,transition:t?"transform 5s cubic-bezier(0.3, 0, 0.2, 1)":"none"},className:"absolute inset-0",children:e.jsxs("svg",{viewBox:"0 0 300 300",className:`w-full h-full transform ${t?"scale-105":"scale-100"} transition-transform duration-300`,children:[e.jsx("defs",{children:l.map((n,o)=>e.jsxs("radialGradient",{id:`gradient-${o}`,cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%",children:[e.jsx("stop",{offset:"0%",stopColor:n.gradientStart}),e.jsx("stop",{offset:"100%",stopColor:n.gradientEnd})]},o))}),S.map(({path:n},o)=>e.jsx("g",{children:e.jsx("path",{d:n,fill:`url(#gradient-${o})`,className:"stroke-white stroke-[3]",filter:"url(#shadow)"})},o)),e.jsx("circle",{cx:m,cy:m,r:"20",fill:"white",className:"shadow-lg",filter:"url(#shadow)"}),e.jsx("defs",{children:e.jsx("filter",{id:"shadow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:e.jsx("feDropShadow",{dx:"0",dy:"1",stdDeviation:"2",floodOpacity:"0.3"})})})]})})]}),e.jsxs("div",{className:`mt-8 text-center transition-opacity duration-300
        ${t?"opacity-100":"opacity-0"}`,children:[e.jsx("div",{className:"w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"}),e.jsx("p",{className:"mt-4 text-purple-200 text-sm",children:"Good luck!"})]})]})};q.propTypes={prizes:b.arrayOf(b.shape({name:b.string.isRequired,value:b.number.isRequired,image:b.string.isRequired,gradientStart:b.string.isRequired,gradientEnd:b.string.isRequired,platformId:b.string.isRequired})).isRequired,onSpinComplete:b.func.isRequired};const B=({lastSpinTime:l})=>{const[a,t]=c.useState({hours:0,minutes:0,seconds:0});return c.useEffect(()=>{const r=()=>{if(!l){t({hours:0,minutes:0,seconds:0});return}try{const h=new Date(l),f=new Date(h.getTime()+24*60*60*1e3)-new Date;if(f>0){const u=Math.floor(f/36e5),m=Math.floor(f%(1e3*60*60)/(1e3*60)),S=Math.floor(f%(1e3*60)/1e3);console.log("Time remaining:",{hours:u,minutes:m,seconds:S}),t({hours:u,minutes:m,seconds:S})}else t({hours:0,minutes:0,seconds:0})}catch(h){console.error("Error calculating time remaining:",h),t({hours:0,minutes:0,seconds:0})}};r();const y=setInterval(r,1e3);return()=>clearInterval(y)},[l]),e.jsxs("div",{className:"flex items-center justify-center space-x-2 text-white bg-gray-800/50 rounded-lg p-2",children:[e.jsx(V,{className:"h-5 w-5 text-blue-400"}),e.jsxs("div",{className:"text-xl font-medium tabular-nums",children:[String(a.hours).padStart(2,"0"),":",String(a.minutes).padStart(2,"0"),":",String(a.seconds).padStart(2,"0")]})]})},T=[{...v.draftkings,value:5,gradientStart:"#FBBF24",gradientEnd:"#D97706"},{...v.fanduel,value:3,gradientStart:"#60A5FA",gradientEnd:"#2563EB"},{...v.sleeper,value:2,gradientStart:"#34D399",gradientEnd:"#059669"},{...v.espnfantasy,value:1,gradientStart:"#F87171",gradientEnd:"#DC2626"},{...v.prizepicks,value:.5,gradientStart:"#A78BFA",gradientEnd:"#7C3AED"},{...v.pokerstars,value:.25,gradientStart:"#F472B6",gradientEnd:"#DB2777"}],X=()=>{const{user:l}=O(),[a,t]=c.useState(!1),[r,y]=c.useState({}),[h,j]=c.useState(null),[p,f]=c.useState(!1),[u,m]=c.useState(null),[S,n]=c.useState(!0),[o,w]=c.useState(!1);c.useEffect(()=>{(async()=>{try{const d={};for(const i of T)try{const g=await M.getStaticAssetUrl("rewards-images",i.logo);d[i.id]=g}catch(g){console.error(`Error loading image for ${i.name}:`,g);try{const N=await M.getStaticAssetUrl("",i.logo);d[i.id]=N}catch(N){console.error(`Error loading image from root for ${i.name}:`,N)}}y(d)}catch(d){console.error("Error loading images:",d)}})()},[]),c.useEffect(()=>{const s=async()=>{if(!l){n(!1);return}try{n(!0),await C.initializeUserIfNeeded(l.uid);const i=await C.getLastSpinTime(l.uid);console.log("Last spin time:",i),m(i);const g=C.canUserSpin(i);console.log("Can user spin:",g),f(g)}catch(i){console.error("Error checking spin availability:",i)}finally{n(!1)}};s();const d=setInterval(s,6e4);return()=>clearInterval(d)},[l]);const x=[{id:1,description:"Connect your Season-Long Fantasy League",bounty:5,completed:!1,buttonColor:"bg-blue-500 hover:bg-blue-600",logos:[{src:r.espnfantasy,alt:"ESPN"},{src:r.sleeper,alt:"Sleeper"}]},{id:2,description:"Connect your FanDuel and DraftKings accounts",bounty:5,completed:!0,buttonColor:"bg-purple-500 hover:bg-purple-600",logos:[{src:r.fanduel,alt:"FanDuel"},{src:r.draftkings,alt:"DraftKings"}]},{id:3,description:"Share with your best friend",bounty:10,completed:!1,buttonColor:"bg-green-500 hover:bg-green-600",emoji:"🤝"}],E=s=>{console.log(`Clicked bounty for challenge ${s}`)},R=async(s,d)=>{try{w(!0);const i={platformId:s,amount:d,description:"Daily Spin Reward",expiryDate:new Date(Date.now()+30*24*60*60*1e3)};await K.createBonus(l.uid,i),U.success(`$${d.toFixed(2)} bonus added to your ${s} wallet!`)}catch(i){console.error("Error creating bonus wallet:",i),U.error("Failed to add bonus to wallet. Please try again.")}finally{w(!1)}},I=async s=>{if(!l)return;const d=(s+30)%360,i=Math.floor(d/60),g=T[i];j(g),await R(g.id,g.value);const N=new Date().toISOString();await C.updateLastSpinTime(l.uid),m(N),f(!1)},k=()=>e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:()=>t(!1)}),e.jsxs("div",{className:"relative bg-blue-500/90 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl",children:[e.jsx("button",{onClick:()=>{t(!1),j(null)},className:"absolute top-4 right-4 text-white/80 hover:text-white transition-colors",disabled:o,children:e.jsx(G,{className:"h-6 w-6"})}),h&&e.jsxs("div",{className:"mb-6 bg-white/10 rounded-xl p-4 text-center",children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Congratulations!"}),e.jsxs("p",{className:"text-xl text-white",children:["You won $",h.value.toFixed(2)," for ",h.name,"!"]}),o&&e.jsx("p",{className:"text-sm text-white/80 mt-2",children:"Adding bonus to your wallet..."})]}),!p&&u&&e.jsxs("div",{className:"mb-6 bg-white/10 rounded-xl p-4 text-center",children:[e.jsx("h3",{className:"text-lg font-medium text-white mb-2",children:"Next Spin Available In:"}),e.jsx(B,{lastSpinTime:u})]}),e.jsx(q,{prizes:T,onSpinComplete:I})]})]});return S?e.jsx(L,{className:"bg-gray-900/50 border-purple-500/20",children:e.jsx(P,{className:"p-6",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("p",{className:"text-white",children:"Loading..."})})})}):e.jsxs(L,{className:"bg-gray-900/50 border-purple-500/20",children:[e.jsxs(P,{className:"p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-white",children:"Rewards and Challenges"}),e.jsx(W,{className:"h-5 w-5 text-yellow-500"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-800/50 rounded-lg mb-6",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-white font-medium",children:"Daily Reward"}),e.jsx("p",{className:"text-sm text-gray-400",children:p?"Spin for a chance to win rewards!":"Next spin available in:"}),!p&&u&&e.jsx("div",{className:"mt-2",children:e.jsx(B,{lastSpinTime:u})})]}),e.jsx("div",{className:"ml-4",children:e.jsx("button",{onClick:()=>t(!0),className:`px-6 py-2 rounded-lg shadow-lg transition-all flex items-center space-x-2
                ${p?"bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:scale-105 active:scale-95":"bg-gray-600 text-gray-300 cursor-not-allowed"}`,disabled:!p,children:e.jsx("span",{children:p?"Spin Now!":"Wait"})})})]}),e.jsx("div",{className:"rounded-lg overflow-hidden",children:x.map((s,d)=>e.jsxs("div",{className:`flex items-center justify-between p-4 ${d%2===0?"bg-gray-800/50":"bg-gray-800/30"}`,children:[e.jsxs("div",{className:"flex items-center flex-1",children:[s.logos?e.jsx("div",{className:"flex -space-x-2 mr-4",children:s.logos.map((i,g)=>e.jsx("img",{src:i.src,alt:i.alt,className:"w-8 h-8 rounded-full border-2 border-gray-800 bg-white"},g))}):s.emoji?e.jsx("div",{className:"w-8 h-8 flex items-center justify-center mr-4 text-xl",children:s.emoji}):null,e.jsx("p",{className:"text-white",children:s.description})]}),e.jsx("button",{onClick:()=>E(s.id),className:`ml-4 px-6 py-2 ${s.completed?"bg-gray-500":s.buttonColor} text-white rounded-lg transition-colors shadow-lg hover:scale-105 active:scale-95`,children:s.completed?"Connected":`Bounty: $${s.bounty}`})]},s.id))})]}),a&&e.jsx(k,{})]})},_=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Rewards"}),e.jsx(X,{})]});export{_ as default};
