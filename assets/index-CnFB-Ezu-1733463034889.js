const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WalletsView-D-wCGvba-1733463034889.js","assets/gift-DVXT4gdV-1733463034889.js","assets/plus-B5R7HYuJ-1733463034889.js","assets/Profile-Cd__Gtfx-1733463034889.js","assets/GroupService-C2sUHHuc-1733463034889.js","assets/FriendsService-tha-zX3U-1733463034889.js","assets/NotificationSettings-0MJ7Ol5T-1733463034889.js","assets/mail-OLwrLDGL-1733463034889.js","assets/MyLeagues-593B3MLz-1733463034889.js","assets/check-Cy8j96ut-1733463034889.js","assets/SendMoney-qPQtZ72S-1733463034889.js","assets/dollar-sign-o-KjJxTx-1733463034889.js","assets/clock-DtCoxnid-1733463034889.js","assets/BankingView-DorLBrKY-1733463034889.js","assets/FriendsView-C26M_aIt-1733463034889.js","assets/UserAvatar-iCmYFxOQ-1733463034889.js","assets/user-plus-DxrUvOQJ-1733463034889.js","assets/Groups-CnABk4CR-1733463034889.js","assets/GroupView-CvMfbW9C-1733463034889.js","assets/CreateGroup-DiqOWNnN-1733463034889.js","assets/PaymentMethodsView-BNpsADeR-1733463034889.js","assets/RewardsView-C8jq5e0y-1733463034889.js"])))=>i.map(i=>d[i]);
var nA=Object.defineProperty;var rA=(t,e,n)=>e in t?nA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Nd=(t,e,n)=>rA(t,typeof e!="symbol"?e+"":e,n);function iA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rw={exports:{}},fc={},xw={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),sA=Symbol.for("react.portal"),oA=Symbol.for("react.fragment"),aA=Symbol.for("react.strict_mode"),lA=Symbol.for("react.profiler"),uA=Symbol.for("react.provider"),cA=Symbol.for("react.context"),dA=Symbol.for("react.forward_ref"),hA=Symbol.for("react.suspense"),fA=Symbol.for("react.memo"),pA=Symbol.for("react.lazy"),wy=Symbol.iterator;function mA(t){return t===null||typeof t!="object"?null:(t=wy&&t[wy]||t["@@iterator"],typeof t=="function"?t:null)}var bw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cw=Object.assign,Pw={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=Pw,this.updater=n||bw}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nw(){}Nw.prototype=Bs.prototype;function ip(t,e,n){this.props=t,this.context=e,this.refs=Pw,this.updater=n||bw}var sp=ip.prototype=new Nw;sp.constructor=ip;Cw(sp,Bs.prototype);sp.isPureReactComponent=!0;var Ey=Array.isArray,Dw=Object.prototype.hasOwnProperty,op={current:null},Ow={key:!0,ref:!0,__self:!0,__source:!0};function Lw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dw.call(e,r)&&!Ow.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ba,type:t,key:s,ref:o,props:i,_owner:op.current}}function gA(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ap(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function yA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ty=/\/+/g;function Dd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yA(""+t.key):e.toString(36)}function Hl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case sA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Dd(o,0):r,Ey(i)?(n="",t!=null&&(n=t.replace(Ty,"$&/")+"/"),Hl(i,e,n,"",function(c){return c})):i!=null&&(ap(i)&&(i=gA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ty,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ey(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Dd(s,a);o+=Hl(s,e,n,u,i)}else if(u=mA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Dd(s,a++),o+=Hl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gl(t,e,n){if(t==null)return t;var r=[],i=0;return Hl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},Gl={transition:null},_A={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:op};function Vw(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:gl,forEach:function(t,e,n){gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gl(t,function(){e++}),e},toArray:function(t){return gl(t,function(e){return e})||[]},only:function(t){if(!ap(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Bs;ee.Fragment=oA;ee.Profiler=lA;ee.PureComponent=ip;ee.StrictMode=aA;ee.Suspense=hA;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_A;ee.act=Vw;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=op.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Dw.call(e,u)&&!Ow.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ba,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:cA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uA,_context:t},t.Consumer=t};ee.createElement=Lw;ee.createFactory=function(t){var e=Lw.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:dA,render:t}};ee.isValidElement=ap;ee.lazy=function(t){return{$$typeof:pA,_payload:{_status:-1,_result:t},_init:vA}};ee.memo=function(t,e){return{$$typeof:fA,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Gl.transition;Gl.transition={};try{t()}finally{Gl.transition=e}};ee.unstable_act=Vw;ee.useCallback=function(t,e){return St.current.useCallback(t,e)};ee.useContext=function(t){return St.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ee.useEffect=function(t,e){return St.current.useEffect(t,e)};ee.useId=function(){return St.current.useId()};ee.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return St.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ee.useRef=function(t){return St.current.useRef(t)};ee.useState=function(t){return St.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return St.current.useTransition()};ee.version="18.3.1";xw.exports=ee;var C=xw.exports;const Mw=kw(C),wA=iA({__proto__:null,default:Mw},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EA=C,TA=Symbol.for("react.element"),IA=Symbol.for("react.fragment"),SA=Object.prototype.hasOwnProperty,AA=EA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kA={key:!0,ref:!0,__self:!0,__source:!0};function Uw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SA.call(e,r)&&!kA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TA,type:t,key:s,ref:o,props:i,_owner:AA.current}}fc.Fragment=IA;fc.jsx=Uw;fc.jsxs=Uw;Rw.exports=fc;var E=Rw.exports,bh={},Fw={exports:{}},zt={},jw={exports:{}},Bw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var J=$.length;$.push(G);e:for(;0<J;){var se=J-1>>>1,pe=$[se];if(0<i(pe,G))$[se]=G,$[J]=pe,J=se;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],J=$.pop();if(J!==G){$[0]=J;e:for(var se=0,pe=$.length,Ne=pe>>>1;se<Ne;){var On=2*(se+1)-1,Ln=$[On],Vn=On+1,Mn=$[Vn];if(0>i(Ln,J))Vn<pe&&0>i(Mn,Ln)?($[se]=Mn,$[Vn]=J,se=Vn):($[se]=Ln,$[On]=J,se=On);else if(Vn<pe&&0>i(Mn,J))$[se]=Mn,$[Vn]=J,se=Vn;else break e}}return G}function i($,G){var J=$.sortIndex-G.sortIndex;return J!==0?J:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,_=!1,T=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=$)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function D($){if(x=!1,S($),!T)if(n(u)!==null)T=!0,gn(M);else{var G=n(c);G!==null&&Gt(D,G.startTime-$)}}function M($,G){T=!1,x&&(x=!1,g(w),w=-1),_=!0;var J=m;try{for(S(G),f=n(u);f!==null&&(!(f.expirationTime>G)||$&&!P());){var se=f.callback;if(typeof se=="function"){f.callback=null,m=f.priorityLevel;var pe=se(f.expirationTime<=G);G=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(u)&&r(u),S(G)}else r(u);f=n(u)}if(f!==null)var Ne=!0;else{var On=n(c);On!==null&&Gt(D,On.startTime-G),Ne=!1}return Ne}finally{f=null,m=J,_=!1}}var U=!1,A=null,w=-1,I=5,k=-1;function P(){return!(t.unstable_now()-k<I)}function N(){if(A!==null){var $=t.unstable_now();k=$;var G=!0;try{G=A(!0,$)}finally{G?R():(U=!1,A=null)}}else U=!1}var R;if(typeof v=="function")R=function(){v(N)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Ht=je.port2;je.port1.onmessage=N,R=function(){Ht.postMessage(null)}}else R=function(){b(N,0)};function gn($){A=$,U||(U=!0,R())}function Gt($,G){w=b(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,gn(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var G=3;break;default:G=m}var J=m;m=G;try{return $()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=m;m=$;try{return G()}finally{m=J}},t.unstable_scheduleCallback=function($,G,J){var se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,$){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=J+pe,$={id:h++,callback:G,priorityLevel:$,startTime:J,expirationTime:pe,sortIndex:-1},J>se?($.sortIndex=J,e(c,$),n(u)===null&&$===n(c)&&(x?(g(w),w=-1):x=!0,Gt(D,J-se))):($.sortIndex=pe,e(u,$),T||_||(T=!0,gn(M))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var G=m;return function(){var J=m;m=G;try{return $.apply(this,arguments)}finally{m=J}}}})(Bw);jw.exports=Bw;var RA=jw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xA=C,Bt=RA;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $w=new Set,Jo={};function Di(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Jo[t]=e,t=0;t<e.length;t++)$w.add(e[t])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ch=Object.prototype.hasOwnProperty,bA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iy={},Sy={};function CA(t){return Ch.call(Sy,t)?!0:Ch.call(Iy,t)?!1:bA.test(t)?Sy[t]=!0:(Iy[t]=!0,!1)}function PA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NA(t,e,n,r){if(e===null||typeof e>"u"||PA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var lp=/[\-:]([a-z])/g;function up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lp,up);rt[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lp,up);rt[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lp,up);rt[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function cp(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NA(e,n,i,r)&&(n=null),r||i===null?CA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ar=xA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),dp=Symbol.for("react.strict_mode"),Ph=Symbol.for("react.profiler"),zw=Symbol.for("react.provider"),Ww=Symbol.for("react.context"),hp=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Dh=Symbol.for("react.suspense_list"),fp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),qw=Symbol.for("react.offscreen"),Ay=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=Ay&&t[Ay]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Od;function ko(t){if(Od===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Od=e&&e[1]||""}return`
`+Od+t}var Ld=!1;function Vd(t,e){if(!t||Ld)return"";Ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function DA(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=Vd(t.type,!1),t;case 11:return t=Vd(t.type.render,!1),t;case 1:return t=Vd(t.type,!0),t;default:return""}}function Oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zi:return"Fragment";case Ji:return"Portal";case Ph:return"Profiler";case dp:return"StrictMode";case Nh:return"Suspense";case Dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ww:return(t.displayName||"Context")+".Consumer";case zw:return(t._context.displayName||"Context")+".Provider";case hp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fp:return e=t.displayName||null,e!==null?e:Oh(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return Oh(t(e))}catch{}}return null}function OA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oh(e);case 8:return e===dp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LA(t){var e=Hw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vl(t){t._valueTracker||(t._valueTracker=LA(t))}function Gw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lh(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ky(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kw(t,e){e=e.checked,e!=null&&cp(t,"checked",e,!1)}function Vh(t,e){Kw(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mh(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ry(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mh(t,e,n){(e!=="number"||vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Uh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ro(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function Qw(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function by(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _l,Xw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VA=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){VA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function Jw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function Zw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var MA=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jh(t,e){if(e){if(MA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $h=null;function pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zh=null,ps=null,ms=null;function Cy(t){if(t=Na(t)){if(typeof zh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=vc(e),zh(t.stateNode,t.type,e))}}function e0(t){ps?ms?ms.push(t):ms=[t]:ps=t}function t0(){if(ps){var t=ps,e=ms;if(ms=ps=null,Cy(t),e)for(t=0;t<e.length;t++)Cy(e[t])}}function n0(t,e){return t(e)}function r0(){}var Md=!1;function i0(t,e,n){if(Md)return t(e,n);Md=!0;try{return n0(t,e,n)}finally{Md=!1,(ps!==null||ms!==null)&&(r0(),t0())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Wh=!1;if(Xn)try{var po={};Object.defineProperty(po,"passive",{get:function(){Wh=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Wh=!1}function UA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Mo=!1,_u=null,wu=!1,qh=null,FA={onError:function(t){Mo=!0,_u=t}};function jA(t,e,n,r,i,s,o,a,u){Mo=!1,_u=null,UA.apply(FA,arguments)}function BA(t,e,n,r,i,s,o,a,u){if(jA.apply(this,arguments),Mo){if(Mo){var c=_u;Mo=!1,_u=null}else throw Error(j(198));wu||(wu=!0,qh=c)}}function Oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Py(t){if(Oi(t)!==t)throw Error(j(188))}function $A(t){var e=t.alternate;if(!e){if(e=Oi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Py(i),t;if(s===r)return Py(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function o0(t){return t=$A(t),t!==null?a0(t):null}function a0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a0(t);if(e!==null)return e;t=t.sibling}return null}var l0=Bt.unstable_scheduleCallback,Ny=Bt.unstable_cancelCallback,zA=Bt.unstable_shouldYield,WA=Bt.unstable_requestPaint,Le=Bt.unstable_now,qA=Bt.unstable_getCurrentPriorityLevel,mp=Bt.unstable_ImmediatePriority,u0=Bt.unstable_UserBlockingPriority,Eu=Bt.unstable_NormalPriority,HA=Bt.unstable_LowPriority,c0=Bt.unstable_IdlePriority,pc=null,In=null;function GA(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(pc,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:YA,KA=Math.log,QA=Math.LN2;function YA(t){return t>>>=0,t===0?32:31-(KA(t)/QA|0)|0}var wl=64,El=4194304;function xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xo(a):(s&=o,s!==0&&(r=xo(s)))}else o=n&~i,o!==0?r=xo(o):s!==0&&(r=xo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function XA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=XA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Hh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d0(){var t=wl;return wl<<=1,!(wl&4194240)&&(wl=64),t}function Ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function ZA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function h0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f0,yp,p0,m0,g0,Gh=!1,Tl=[],Cr=null,Pr=null,Nr=null,ta=new Map,na=new Map,vr=[],ek="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dy(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Na(e),e!==null&&yp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tk(t,e,n,r,i){switch(e){case"focusin":return Cr=mo(Cr,t,e,n,r,i),!0;case"dragenter":return Pr=mo(Pr,t,e,n,r,i),!0;case"mouseover":return Nr=mo(Nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ta.set(s,mo(ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,na.set(s,mo(na.get(s)||null,t,e,n,r,i)),!0}return!1}function y0(t){var e=ui(t.target);if(e!==null){var n=Oi(e);if(n!==null){if(e=n.tag,e===13){if(e=s0(n),e!==null){t.blockedOn=e,g0(t.priority,function(){p0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$h=r,n.target.dispatchEvent(r),$h=null}else return e=Na(n),e!==null&&yp(e),t.blockedOn=n,!1;e.shift()}return!0}function Oy(t,e,n){Kl(t)&&n.delete(e)}function nk(){Gh=!1,Cr!==null&&Kl(Cr)&&(Cr=null),Pr!==null&&Kl(Pr)&&(Pr=null),Nr!==null&&Kl(Nr)&&(Nr=null),ta.forEach(Oy),na.forEach(Oy)}function go(t,e){t.blockedOn===e&&(t.blockedOn=null,Gh||(Gh=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,nk)))}function ra(t){function e(i){return go(i,t)}if(0<Tl.length){go(Tl[0],t);for(var n=1;n<Tl.length;n++){var r=Tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cr!==null&&go(Cr,t),Pr!==null&&go(Pr,t),Nr!==null&&go(Nr,t),ta.forEach(e),na.forEach(e),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)y0(n),n.blockedOn===null&&vr.shift()}var gs=ar.ReactCurrentBatchConfig,Iu=!0;function rk(t,e,n,r){var i=fe,s=gs.transition;gs.transition=null;try{fe=1,vp(t,e,n,r)}finally{fe=i,gs.transition=s}}function ik(t,e,n,r){var i=fe,s=gs.transition;gs.transition=null;try{fe=4,vp(t,e,n,r)}finally{fe=i,gs.transition=s}}function vp(t,e,n,r){if(Iu){var i=Kh(t,e,n,r);if(i===null)Kd(t,e,r,Su,n),Dy(t,r);else if(tk(i,t,e,n,r))r.stopPropagation();else if(Dy(t,r),e&4&&-1<ek.indexOf(t)){for(;i!==null;){var s=Na(i);if(s!==null&&f0(s),s=Kh(t,e,n,r),s===null&&Kd(t,e,r,Su,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kd(t,e,r,null,n)}}var Su=null;function Kh(t,e,n,r){if(Su=null,t=pp(r),t=ui(t),t!==null)if(e=Oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Su=t,null}function v0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qA()){case mp:return 1;case u0:return 4;case Eu:case HA:return 16;case c0:return 536870912;default:return 16}default:return 16}}var kr=null,_p=null,Ql=null;function _0(){if(Ql)return Ql;var t,e=_p,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ql=i.slice(t,1<r?1-r:void 0)}function Yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function Ly(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Il:Ly,this.isPropagationStopped=Ly,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wp=Wt($s),Pa=Ae({},$s,{view:0,detail:0}),sk=Wt(Pa),Fd,jd,yo,mc=Ae({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Fd=t.screenX-yo.screenX,jd=t.screenY-yo.screenY):jd=Fd=0,yo=t),Fd)},movementY:function(t){return"movementY"in t?t.movementY:jd}}),Vy=Wt(mc),ok=Ae({},mc,{dataTransfer:0}),ak=Wt(ok),lk=Ae({},Pa,{relatedTarget:0}),Bd=Wt(lk),uk=Ae({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),ck=Wt(uk),dk=Ae({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hk=Wt(dk),fk=Ae({},$s,{data:0}),My=Wt(fk),pk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gk[t])?!!e[t]:!1}function Ep(){return yk}var vk=Ae({},Pa,{key:function(t){if(t.key){var e=pk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_k=Wt(vk),wk=Ae({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uy=Wt(wk),Ek=Ae({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),Tk=Wt(Ek),Ik=Ae({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sk=Wt(Ik),Ak=Ae({},mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kk=Wt(Ak),Rk=[9,13,27,32],Tp=Xn&&"CompositionEvent"in window,Uo=null;Xn&&"documentMode"in document&&(Uo=document.documentMode);var xk=Xn&&"TextEvent"in window&&!Uo,w0=Xn&&(!Tp||Uo&&8<Uo&&11>=Uo),Fy=" ",jy=!1;function E0(t,e){switch(t){case"keyup":return Rk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function bk(t,e){switch(t){case"compositionend":return T0(e);case"keypress":return e.which!==32?null:(jy=!0,Fy);case"textInput":return t=e.data,t===Fy&&jy?null:t;default:return null}}function Ck(t,e){if(es)return t==="compositionend"||!Tp&&E0(t,e)?(t=_0(),Ql=_p=kr=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w0&&e.locale!=="ko"?null:e.data;default:return null}}var Pk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function By(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Pk[t.type]:e==="textarea"}function I0(t,e,n,r){e0(r),e=Au(e,"onChange"),0<e.length&&(n=new wp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fo=null,ia=null;function Nk(t){O0(t,0)}function gc(t){var e=rs(t);if(Gw(e))return t}function Dk(t,e){if(t==="change")return e}var S0=!1;if(Xn){var $d;if(Xn){var zd="oninput"in document;if(!zd){var $y=document.createElement("div");$y.setAttribute("oninput","return;"),zd=typeof $y.oninput=="function"}$d=zd}else $d=!1;S0=$d&&(!document.documentMode||9<document.documentMode)}function zy(){Fo&&(Fo.detachEvent("onpropertychange",A0),ia=Fo=null)}function A0(t){if(t.propertyName==="value"&&gc(ia)){var e=[];I0(e,ia,t,pp(t)),i0(Nk,e)}}function Ok(t,e,n){t==="focusin"?(zy(),Fo=e,ia=n,Fo.attachEvent("onpropertychange",A0)):t==="focusout"&&zy()}function Lk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gc(ia)}function Vk(t,e){if(t==="click")return gc(e)}function Mk(t,e){if(t==="input"||t==="change")return gc(e)}function Uk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:Uk;function sa(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ch.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function Wy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qy(t,e){var n=Wy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wy(n)}}function k0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var t=window,e=vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fk(t){var e=R0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k0(n.ownerDocument.documentElement,n)){if(r!==null&&Ip(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qy(n,s);var o=qy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jk=Xn&&"documentMode"in document&&11>=document.documentMode,ts=null,Qh=null,jo=null,Yh=!1;function Hy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yh||ts==null||ts!==vu(r)||(r=ts,"selectionStart"in r&&Ip(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jo&&sa(jo,r)||(jo=r,r=Au(Qh,"onSelect"),0<r.length&&(e=new wp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ts)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Wd={},x0={};Xn&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function yc(t){if(Wd[t])return Wd[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x0)return Wd[t]=e[n];return t}var b0=yc("animationend"),C0=yc("animationiteration"),P0=yc("animationstart"),N0=yc("transitionend"),D0=new Map,Gy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){D0.set(t,e),Di(e,[t])}for(var qd=0;qd<Gy.length;qd++){var Hd=Gy[qd],Bk=Hd.toLowerCase(),$k=Hd[0].toUpperCase()+Hd.slice(1);Gr(Bk,"on"+$k)}Gr(b0,"onAnimationEnd");Gr(C0,"onAnimationIteration");Gr(P0,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(N0,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Di("onBeforeInput",["compositionend","keypress","textInput","paste"]);Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zk=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Ky(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BA(r,e,void 0,t),t.currentTarget=null}function O0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Ky(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Ky(i,a,c),s=u}}}if(wu)throw t=qh,wu=!1,qh=null,t}function we(t,e){var n=e[tf];n===void 0&&(n=e[tf]=new Set);var r=t+"__bubble";n.has(r)||(L0(e,t,2,!1),n.add(r))}function Gd(t,e,n){var r=0;e&&(r|=4),L0(n,t,r,e)}var Al="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Al]){t[Al]=!0,$w.forEach(function(n){n!=="selectionchange"&&(zk.has(n)||Gd(n,!1,t),Gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Al]||(e[Al]=!0,Gd("selectionchange",!1,e))}}function L0(t,e,n,r){switch(v0(e)){case 1:var i=rk;break;case 4:i=ik;break;default:i=vp}n=i.bind(null,e,n,t),i=void 0,!Wh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ui(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}i0(function(){var c=s,h=pp(n),f=[];e:{var m=D0.get(t);if(m!==void 0){var _=wp,T=t;switch(t){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":_=_k;break;case"focusin":T="focus",_=Bd;break;case"focusout":T="blur",_=Bd;break;case"beforeblur":case"afterblur":_=Bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Vy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=ak;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Tk;break;case b0:case C0:case P0:_=ck;break;case N0:_=Sk;break;case"scroll":_=sk;break;case"wheel":_=kk;break;case"copy":case"cut":case"paste":_=hk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Uy}var x=(e&4)!==0,b=!x&&t==="scroll",g=x?m!==null?m+"Capture":null:m;x=[];for(var v=c,S;v!==null;){S=v;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,g!==null&&(D=ea(v,g),D!=null&&x.push(aa(v,D,S)))),b)break;v=v.return}0<x.length&&(m=new _(m,T,null,n,h),f.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==$h&&(T=n.relatedTarget||n.fromElement)&&(ui(T)||T[Jn]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=c,T=T?ui(T):null,T!==null&&(b=Oi(T),T!==b||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=c),_!==T)){if(x=Vy,D="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Uy,D="onPointerLeave",g="onPointerEnter",v="pointer"),b=_==null?m:rs(_),S=T==null?m:rs(T),m=new x(D,v+"leave",_,n,h),m.target=b,m.relatedTarget=S,D=null,ui(h)===c&&(x=new x(g,v+"enter",T,n,h),x.target=S,x.relatedTarget=b,D=x),b=D,_&&T)t:{for(x=_,g=T,v=0,S=x;S;S=Gi(S))v++;for(S=0,D=g;D;D=Gi(D))S++;for(;0<v-S;)x=Gi(x),v--;for(;0<S-v;)g=Gi(g),S--;for(;v--;){if(x===g||g!==null&&x===g.alternate)break t;x=Gi(x),g=Gi(g)}x=null}else x=null;_!==null&&Qy(f,m,_,x,!1),T!==null&&b!==null&&Qy(f,b,T,x,!0)}}e:{if(m=c?rs(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=Dk;else if(By(m))if(S0)M=Mk;else{M=Lk;var U=Ok}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=Vk);if(M&&(M=M(t,c))){I0(f,M,n,h);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Mh(m,"number",m.value)}switch(U=c?rs(c):window,t){case"focusin":(By(U)||U.contentEditable==="true")&&(ts=U,Qh=c,jo=null);break;case"focusout":jo=Qh=ts=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,Hy(f,n,h);break;case"selectionchange":if(jk)break;case"keydown":case"keyup":Hy(f,n,h)}var A;if(Tp)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else es?E0(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(w0&&n.locale!=="ko"&&(es||w!=="onCompositionStart"?w==="onCompositionEnd"&&es&&(A=_0()):(kr=h,_p="value"in kr?kr.value:kr.textContent,es=!0)),U=Au(c,w),0<U.length&&(w=new My(w,t,null,n,h),f.push({event:w,listeners:U}),A?w.data=A:(A=T0(n),A!==null&&(w.data=A)))),(A=xk?bk(t,n):Ck(t,n))&&(c=Au(c,"onBeforeInput"),0<c.length&&(h=new My("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=A))}O0(f,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Au(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ea(t,n),s!=null&&r.unshift(aa(t,s,i)),s=ea(t,e),s!=null&&r.push(aa(t,s,i))),t=t.return}return r}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ea(n,s),u!=null&&o.unshift(aa(n,u,a))):i||(u=ea(n,s),u!=null&&o.push(aa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wk=/\r\n?/g,qk=/\u0000|\uFFFD/g;function Yy(t){return(typeof t=="string"?t:""+t).replace(Wk,`
`).replace(qk,"")}function kl(t,e,n){if(e=Yy(e),Yy(t)!==e&&n)throw Error(j(425))}function ku(){}var Xh=null,Jh=null;function Zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ef=typeof setTimeout=="function"?setTimeout:void 0,Hk=typeof clearTimeout=="function"?clearTimeout:void 0,Xy=typeof Promise=="function"?Promise:void 0,Gk=typeof queueMicrotask=="function"?queueMicrotask:typeof Xy<"u"?function(t){return Xy.resolve(null).then(t).catch(Kk)}:ef;function Kk(t){setTimeout(function(){throw t})}function Qd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ra(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),wn="__reactFiber$"+zs,la="__reactProps$"+zs,Jn="__reactContainer$"+zs,tf="__reactEvents$"+zs,Qk="__reactListeners$"+zs,Yk="__reactHandles$"+zs;function ui(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jy(t);t!==null;){if(n=t[wn])return n;t=Jy(t)}return e}t=n,n=t.parentNode}return null}function Na(t){return t=t[wn]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function vc(t){return t[la]||null}var nf=[],is=-1;function Kr(t){return{current:t}}function Ee(t){0>is||(t.current=nf[is],nf[is]=null,is--)}function ye(t,e){is++,nf[is]=t.current,t.current=e}var zr={},pt=Kr(zr),bt=Kr(!1),vi=zr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Ru(){Ee(bt),Ee(pt)}function Zy(t,e,n){if(pt.current!==zr)throw Error(j(168));ye(pt,e),ye(bt,n)}function V0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,OA(t)||"Unknown",i));return Ae({},n,r)}function xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,vi=pt.current,ye(pt,t),ye(bt,bt.current),!0}function ev(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=V0(t,e,vi),r.__reactInternalMemoizedMergedChildContext=t,Ee(bt),Ee(pt),ye(pt,t)):Ee(bt),ye(bt,n)}var zn=null,_c=!1,Yd=!1;function M0(t){zn===null?zn=[t]:zn.push(t)}function Xk(t){_c=!0,M0(t)}function Qr(){if(!Yd&&zn!==null){Yd=!0;var t=0,e=fe;try{var n=zn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,_c=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),l0(mp,Qr),i}finally{fe=e,Yd=!1}}return null}var ss=[],os=0,bu=null,Cu=0,Qt=[],Yt=0,_i=null,Wn=1,qn="";function oi(t,e){ss[os++]=Cu,ss[os++]=bu,bu=t,Cu=e}function U0(t,e,n){Qt[Yt++]=Wn,Qt[Yt++]=qn,Qt[Yt++]=_i,_i=t;var r=Wn;t=qn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-un(e)+i|n<<i|r,qn=s+t}else Wn=1<<s|n<<i|r,qn=t}function Sp(t){t.return!==null&&(oi(t,1),U0(t,1,0))}function Ap(t){for(;t===bu;)bu=ss[--os],ss[os]=null,Cu=ss[--os],ss[os]=null;for(;t===_i;)_i=Qt[--Yt],Qt[Yt]=null,qn=Qt[--Yt],Qt[Yt]=null,Wn=Qt[--Yt],Qt[Yt]=null}var Ut=null,Ot=null,Te=!1,an=null;function F0(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Ot=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_i!==null?{id:Wn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Ot=null,!0):!1;default:return!1}}function rf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sf(t){if(Te){var e=Ot;if(e){var n=e;if(!tv(t,e)){if(rf(t))throw Error(j(418));e=Dr(n.nextSibling);var r=Ut;e&&tv(t,e)?F0(r,n):(t.flags=t.flags&-4097|2,Te=!1,Ut=t)}}else{if(rf(t))throw Error(j(418));t.flags=t.flags&-4097|2,Te=!1,Ut=t}}}function nv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Rl(t){if(t!==Ut)return!1;if(!Te)return nv(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zh(t.type,t.memoizedProps)),e&&(e=Ot)){if(rf(t))throw j0(),Error(j(418));for(;e;)F0(t,e),e=Dr(e.nextSibling)}if(nv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=Dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Ut?Dr(t.stateNode.nextSibling):null;return!0}function j0(){for(var t=Ot;t;)t=Dr(t.nextSibling)}function xs(){Ot=Ut=null,Te=!1}function kp(t){an===null?an=[t]:an.push(t)}var Jk=ar.ReactCurrentBatchConfig;function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function xl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rv(t){var e=t._init;return e(t._payload)}function B0(t){function e(g,v){if(t){var S=g.deletions;S===null?(g.deletions=[v],g.flags|=16):S.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(g,v){return g=Mr(g,v),g.index=0,g.sibling=null,g}function s(g,v,S){return g.index=S,t?(S=g.alternate,S!==null?(S=S.index,S<v?(g.flags|=2,v):S):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,S,D){return v===null||v.tag!==6?(v=rh(S,g.mode,D),v.return=g,v):(v=i(v,S),v.return=g,v)}function u(g,v,S,D){var M=S.type;return M===Zi?h(g,v,S.props.children,D,S.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gr&&rv(M)===v.type)?(D=i(v,S.props),D.ref=vo(g,v,S),D.return=g,D):(D=ru(S.type,S.key,S.props,null,g.mode,D),D.ref=vo(g,v,S),D.return=g,D)}function c(g,v,S,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=ih(S,g.mode,D),v.return=g,v):(v=i(v,S.children||[]),v.return=g,v)}function h(g,v,S,D,M){return v===null||v.tag!==7?(v=mi(S,g.mode,D,M),v.return=g,v):(v=i(v,S),v.return=g,v)}function f(g,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=rh(""+v,g.mode,S),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yl:return S=ru(v.type,v.key,v.props,null,g.mode,S),S.ref=vo(g,null,v),S.return=g,S;case Ji:return v=ih(v,g.mode,S),v.return=g,v;case gr:var D=v._init;return f(g,D(v._payload),S)}if(Ro(v)||fo(v))return v=mi(v,g.mode,S,null),v.return=g,v;xl(g,v)}return null}function m(g,v,S,D){var M=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:a(g,v,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case yl:return S.key===M?u(g,v,S,D):null;case Ji:return S.key===M?c(g,v,S,D):null;case gr:return M=S._init,m(g,v,M(S._payload),D)}if(Ro(S)||fo(S))return M!==null?null:h(g,v,S,D,null);xl(g,S)}return null}function _(g,v,S,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return g=g.get(S)||null,a(v,g,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case yl:return g=g.get(D.key===null?S:D.key)||null,u(v,g,D,M);case Ji:return g=g.get(D.key===null?S:D.key)||null,c(v,g,D,M);case gr:var U=D._init;return _(g,v,S,U(D._payload),M)}if(Ro(D)||fo(D))return g=g.get(S)||null,h(v,g,D,M,null);xl(v,D)}return null}function T(g,v,S,D){for(var M=null,U=null,A=v,w=v=0,I=null;A!==null&&w<S.length;w++){A.index>w?(I=A,A=null):I=A.sibling;var k=m(g,A,S[w],D);if(k===null){A===null&&(A=I);break}t&&A&&k.alternate===null&&e(g,A),v=s(k,v,w),U===null?M=k:U.sibling=k,U=k,A=I}if(w===S.length)return n(g,A),Te&&oi(g,w),M;if(A===null){for(;w<S.length;w++)A=f(g,S[w],D),A!==null&&(v=s(A,v,w),U===null?M=A:U.sibling=A,U=A);return Te&&oi(g,w),M}for(A=r(g,A);w<S.length;w++)I=_(A,g,w,S[w],D),I!==null&&(t&&I.alternate!==null&&A.delete(I.key===null?w:I.key),v=s(I,v,w),U===null?M=I:U.sibling=I,U=I);return t&&A.forEach(function(P){return e(g,P)}),Te&&oi(g,w),M}function x(g,v,S,D){var M=fo(S);if(typeof M!="function")throw Error(j(150));if(S=M.call(S),S==null)throw Error(j(151));for(var U=M=null,A=v,w=v=0,I=null,k=S.next();A!==null&&!k.done;w++,k=S.next()){A.index>w?(I=A,A=null):I=A.sibling;var P=m(g,A,k.value,D);if(P===null){A===null&&(A=I);break}t&&A&&P.alternate===null&&e(g,A),v=s(P,v,w),U===null?M=P:U.sibling=P,U=P,A=I}if(k.done)return n(g,A),Te&&oi(g,w),M;if(A===null){for(;!k.done;w++,k=S.next())k=f(g,k.value,D),k!==null&&(v=s(k,v,w),U===null?M=k:U.sibling=k,U=k);return Te&&oi(g,w),M}for(A=r(g,A);!k.done;w++,k=S.next())k=_(A,g,w,k.value,D),k!==null&&(t&&k.alternate!==null&&A.delete(k.key===null?w:k.key),v=s(k,v,w),U===null?M=k:U.sibling=k,U=k);return t&&A.forEach(function(N){return e(g,N)}),Te&&oi(g,w),M}function b(g,v,S,D){if(typeof S=="object"&&S!==null&&S.type===Zi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case yl:e:{for(var M=S.key,U=v;U!==null;){if(U.key===M){if(M=S.type,M===Zi){if(U.tag===7){n(g,U.sibling),v=i(U,S.props.children),v.return=g,g=v;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gr&&rv(M)===U.type){n(g,U.sibling),v=i(U,S.props),v.ref=vo(g,U,S),v.return=g,g=v;break e}n(g,U);break}else e(g,U);U=U.sibling}S.type===Zi?(v=mi(S.props.children,g.mode,D,S.key),v.return=g,g=v):(D=ru(S.type,S.key,S.props,null,g.mode,D),D.ref=vo(g,v,S),D.return=g,g=D)}return o(g);case Ji:e:{for(U=S.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(g,v.sibling),v=i(v,S.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=ih(S,g.mode,D),v.return=g,g=v}return o(g);case gr:return U=S._init,b(g,v,U(S._payload),D)}if(Ro(S))return T(g,v,S,D);if(fo(S))return x(g,v,S,D);xl(g,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(g,v.sibling),v=i(v,S),v.return=g,g=v):(n(g,v),v=rh(S,g.mode,D),v.return=g,g=v),o(g)):n(g,v)}return b}var bs=B0(!0),$0=B0(!1),Pu=Kr(null),Nu=null,as=null,Rp=null;function xp(){Rp=as=Nu=null}function bp(t){var e=Pu.current;Ee(Pu),t._currentValue=e}function of(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Nu=t,Rp=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(Rp!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(Nu===null)throw Error(j(308));as=t,Nu.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var ci=null;function Cp(t){ci===null?ci=[t]:ci.push(t)}function z0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function Pp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,Cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function Xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gp(t,n)}}function iv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Du(t,e,n,r){var i=t.updateQueue;yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,x=a;switch(m=e,_=n,x.tag){case 1:if(T=x.payload,typeof T=="function"){f=T.call(_,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=x.payload,m=typeof T=="function"?T.call(_,f,m):T,m==null)break e;f=Ae({},f,m);break e;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=f):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ei|=o,t.lanes=o,t.memoizedState=f}}function sv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Da={},Sn=Kr(Da),ua=Kr(Da),ca=Kr(Da);function di(t){if(t===Da)throw Error(j(174));return t}function Np(t,e){switch(ye(ca,e),ye(ua,t),ye(Sn,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fh(e,t)}Ee(Sn),ye(Sn,e)}function Cs(){Ee(Sn),Ee(ua),Ee(ca)}function q0(t){di(ca.current);var e=di(Sn.current),n=Fh(e,t.type);e!==n&&(ye(ua,t),ye(Sn,n))}function Dp(t){ua.current===t&&(Ee(Sn),Ee(ua))}var Ie=Kr(0);function Ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xd=[];function Op(){for(var t=0;t<Xd.length;t++)Xd[t]._workInProgressVersionPrimary=null;Xd.length=0}var Jl=ar.ReactCurrentDispatcher,Jd=ar.ReactCurrentBatchConfig,wi=0,Se=null,$e=null,qe=null,Lu=!1,Bo=!1,da=0,Zk=0;function lt(){throw Error(j(321))}function Lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function Vp(t,e,n,r,i,s){if(wi=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?rR:iR,t=n(r,i),Bo){s=0;do{if(Bo=!1,da=0,25<=s)throw Error(j(301));s+=1,qe=$e=null,e.updateQueue=null,Jl.current=sR,t=n(r,i)}while(Bo)}if(Jl.current=Vu,e=$e!==null&&$e.next!==null,wi=0,qe=$e=Se=null,Lu=!1,e)throw Error(j(300));return t}function Mp(){var t=da!==0;return da=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Se.memoizedState=qe=t:qe=qe.next=t,qe}function en(){if($e===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=qe===null?Se.memoizedState:qe.next;if(e!==null)qe=e,$e=t;else{if(t===null)throw Error(j(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},qe===null?Se.memoizedState=qe=t:qe=qe.next=t}return qe}function ha(t,e){return typeof e=="function"?e(t):e}function Zd(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((wi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Se.lanes|=h,Ei|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,dn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eh(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function H0(){}function G0(t,e){var n=Se,r=en(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,Up(Y0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,fa(9,Q0.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(j(349));wi&30||K0(n,e,i)}return i}function K0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q0(t,e,n,r){e.value=n,e.getSnapshot=r,X0(e)&&J0(t)}function Y0(t,e,n){return n(function(){X0(e)&&J0(t)})}function X0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function J0(t){var e=Zn(t,1);e!==null&&cn(e,t,1,-1)}function ov(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=nR.bind(null,Se,t),[e.memoizedState,t]}function fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z0(){return en().memoizedState}function Zl(t,e,n,r){var i=vn();Se.flags|=t,i.memoizedState=fa(1|e,n,void 0,r===void 0?null:r)}function wc(t,e,n,r){var i=en();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&Lp(r,o.deps)){i.memoizedState=fa(e,n,s,r);return}}Se.flags|=t,i.memoizedState=fa(1|e,n,s,r)}function av(t,e){return Zl(8390656,8,t,e)}function Up(t,e){return wc(2048,8,t,e)}function eE(t,e){return wc(4,2,t,e)}function tE(t,e){return wc(4,4,t,e)}function nE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rE(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,nE.bind(null,e,t),n)}function Fp(){}function iE(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sE(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function oE(t,e,n){return wi&21?(dn(n,e)||(n=d0(),Se.lanes|=n,Ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function eR(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Jd.transition;Jd.transition={};try{t(!1),e()}finally{fe=n,Jd.transition=r}}function aE(){return en().memoizedState}function tR(t,e,n){var r=Vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lE(t))uE(e,n);else if(n=z0(t,e,n,r),n!==null){var i=Et();cn(n,t,r,i),cE(n,e,r)}}function nR(t,e,n){var r=Vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lE(t))uE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,dn(a,o)){var u=e.interleaved;u===null?(i.next=i,Cp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=z0(t,e,i,r),n!==null&&(i=Et(),cn(n,t,r,i),cE(n,e,r))}}function lE(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function uE(t,e){Bo=Lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gp(t,n)}}var Vu={readContext:Zt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},rR={readContext:Zt,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:av,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4194308,4,nE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zl(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tR.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:ov,useDebugValue:Fp,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=ov(!1),e=t[0];return t=eR.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=vn();if(Te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ge===null)throw Error(j(349));wi&30||K0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,av(Y0.bind(null,r,s,t),[t]),r.flags|=2048,fa(9,Q0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vn(),e=Ge.identifierPrefix;if(Te){var n=qn,r=Wn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Zk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iR={readContext:Zt,useCallback:iE,useContext:Zt,useEffect:Up,useImperativeHandle:rE,useInsertionEffect:eE,useLayoutEffect:tE,useMemo:sE,useReducer:Zd,useRef:Z0,useState:function(){return Zd(ha)},useDebugValue:Fp,useDeferredValue:function(t){var e=en();return oE(e,$e.memoizedState,t)},useTransition:function(){var t=Zd(ha)[0],e=en().memoizedState;return[t,e]},useMutableSource:H0,useSyncExternalStore:G0,useId:aE,unstable_isNewReconciler:!1},sR={readContext:Zt,useCallback:iE,useContext:Zt,useEffect:Up,useImperativeHandle:rE,useInsertionEffect:eE,useLayoutEffect:tE,useMemo:sE,useReducer:eh,useRef:Z0,useState:function(){return eh(ha)},useDebugValue:Fp,useDeferredValue:function(t){var e=en();return $e===null?e.memoizedState=t:oE(e,$e.memoizedState,t)},useTransition:function(){var t=eh(ha)[0],e=en().memoizedState;return[t,e]},useMutableSource:H0,useSyncExternalStore:G0,useId:aE,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function af(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?Oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Vr(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,i),e!==null&&(cn(e,t,i,r),Xl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Vr(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,i),e!==null&&(cn(e,t,i,r),Xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Vr(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Or(t,i,r),e!==null&&(cn(e,t,r,n),Xl(e,t,r))}};function lv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,s):!0}function dE(t,e,n){var r=!1,i=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zt(s):(i=Ct(e)?vi:pt.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function uv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function lf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Zt(s):(s=Ct(e)?vi:pt.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(af(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Du(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",r=e;do n+=DA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oR=typeof WeakMap=="function"?WeakMap:Map;function hE(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uu||(Uu=!0,_f=r),uf(t,e)},n}function fE(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uf(t,e),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wR.bind(null,t,e,n),e.then(t,t))}function dv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Or(n,e,1))),n.lanes|=1),t)}var aR=ar.ReactCurrentOwner,xt=!1;function _t(t,e,n,r){e.child=t===null?$0(e,null,n,r):bs(e,t.child,n,r)}function fv(t,e,n,r,i){n=n.render;var s=e.ref;return ys(e,i),r=Vp(t,e,n,r,s,i),n=Mp(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Te&&n&&Sp(e),e.flags|=1,_t(t,e,r,i),e.child)}function pv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pE(t,e,s,r,i)):(t=ru(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=Mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function pE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sa(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,er(t,e,i)}return cf(t,e,n,r,i)}function mE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(us,Dt),Dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(us,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(us,Dt),Dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(us,Dt),Dt|=r;return _t(t,e,i,n),e.child}function gE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cf(t,e,n,r,i){var s=Ct(n)?vi:pt.current;return s=Rs(e,s),ys(e,i),n=Vp(t,e,n,r,s,i),r=Mp(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Te&&r&&Sp(e),e.flags|=1,_t(t,e,n,i),e.child)}function mv(t,e,n,r,i){if(Ct(n)){var s=!0;xu(e)}else s=!1;if(ys(e,i),e.stateNode===null)eu(t,e),dE(e,n,r),lf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zt(c):(c=Ct(n)?vi:pt.current,c=Rs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&uv(e,o,r,c),yr=!1;var m=e.memoizedState;o.state=m,Du(e,r,o,i),u=e.memoizedState,a!==r||m!==u||bt.current||yr?(typeof h=="function"&&(af(e,n,h,r),u=e.memoizedState),(a=yr||lv(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,W0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:sn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zt(u):(u=Ct(n)?vi:pt.current,u=Rs(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&uv(e,o,r,u),yr=!1,m=e.memoizedState,o.state=m,Du(e,r,o,i);var T=e.memoizedState;a!==f||m!==T||bt.current||yr?(typeof _=="function"&&(af(e,n,_,r),T=e.memoizedState),(c=yr||lv(e,n,c,r,m,T,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return df(t,e,n,r,s,i)}function df(t,e,n,r,i,s){gE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ev(e,n,!1),er(t,e,s);r=e.stateNode,aR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):_t(t,e,a,s),e.memoizedState=r.state,i&&ev(e,n,!0),e.child}function yE(t){var e=t.stateNode;e.pendingContext?Zy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zy(t,e.context,!1),Np(t,e.containerInfo)}function gv(t,e,n,r,i){return xs(),kp(i),e.flags|=256,_t(t,e,n,r),e.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function vE(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ie,i&1),t===null)return sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sc(o,r,0,null),t=mi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ff(n),e.memoizedState=hf,t):jp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=mi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hf,r}return s=t.child,t=s.sibling,r=Mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jp(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,n,r){return r!==null&&kp(r),bs(e,t.child,null,n),t=jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=th(Error(j(422))),bl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sc({mode:"visible",children:r.children},i,0,null),s=mi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=ff(o),e.memoizedState=hf,s);if(!(e.mode&1))return bl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=th(s,r,void 0),bl(t,e,o,r)}if(a=(o&t.childLanes)!==0,xt||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),cn(r,t,i,-1))}return Hp(),r=th(Error(j(421))),bl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ER.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=Dr(i.nextSibling),Ut=e,Te=!0,an=null,t!==null&&(Qt[Yt++]=Wn,Qt[Yt++]=qn,Qt[Yt++]=_i,Wn=t.id,qn=t.overflow,_i=e),e=jp(e,r.children),e.flags|=4096,e)}function yv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),of(t.return,e,n)}function nh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _E(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(_t(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yv(t,n,e);else if(t.tag===19)yv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ou(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nh(e,!0,n,null,s);break;case"together":nh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uR(t,e,n){switch(e.tag){case 3:yE(e),xs();break;case 5:q0(e);break;case 1:Ct(e.type)&&xu(e);break;case 4:Np(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Pu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?vE(t,e,n):(ye(Ie,Ie.current&1),t=er(t,e,n),t!==null?t.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _E(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,mE(t,e,n)}return er(t,e,n)}var wE,pf,EE,TE;wE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pf=function(){};EE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,di(Sn.current);var s=null;switch(n){case"input":i=Lh(t,i),r=Lh(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Uh(t,i),r=Uh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ku)}jh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};TE=function(t,e,n,r){n!==r&&(e.flags|=4)};function _o(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cR(t,e,n){var r=e.pendingProps;switch(Ap(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Ct(e.type)&&Ru(),ut(e),null;case 3:return r=e.stateNode,Cs(),Ee(bt),Ee(pt),Op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(Tf(an),an=null))),pf(t,e),ut(e),null;case 5:Dp(e);var i=di(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)EE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ut(e),null}if(t=di(Sn.current),Rl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wn]=e,r[la]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<bo.length;i++)we(bo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":ky(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":xy(r,s),we("invalid",r)}jh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":vl(r),Ry(r,s,!0);break;case"textarea":vl(r),by(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ku)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[la]=r,wE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<bo.length;i++)we(bo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":ky(t,r),i=Lh(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),we("invalid",t);break;case"textarea":xy(t,r),i=Uh(t,r),we("invalid",t);break;default:i=r}jh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Zw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zo(t,u):typeof u=="number"&&Zo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&cp(t,s,u,o))}switch(n){case"input":vl(t),Ry(t,r,!1);break;case"textarea":vl(t),by(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ku)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)TE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=di(ca.current),di(Sn.current),Rl(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return ut(e),null;case 13:if(Ee(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Ot!==null&&e.mode&1&&!(e.flags&128))j0(),xs(),e.flags|=98560,s=!1;else if(s=Rl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[wn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else an!==null&&(Tf(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?ze===0&&(ze=3):Hp())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return Cs(),pf(t,e),t===null&&oa(e.stateNode.containerInfo),ut(e),null;case 10:return bp(e.type._context),ut(e),null;case 17:return Ct(e.type)&&Ru(),ut(e),null;case 19:if(Ee(Ie),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_o(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ou(t),o!==null){for(e.flags|=128,_o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>Ns&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return ut(e),null}else 2*Le()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Ie.current,ye(Ie,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return qp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Dt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function dR(t,e){switch(Ap(e),e.tag){case 1:return Ct(e.type)&&Ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),Ee(bt),Ee(pt),Op(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dp(e),null;case 13:if(Ee(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ie),null;case 4:return Cs(),null;case 10:return bp(e.type._context),null;case 22:case 23:return qp(),null;case 24:return null;default:return null}}var Cl=!1,ht=!1,hR=typeof WeakSet=="function"?WeakSet:Set,W=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function mf(t,e,n){try{n()}catch(r){xe(t,e,r)}}var vv=!1;function fR(t,e){if(Xh=Iu,t=R0(),Ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jh={focusedElem:t,selectionRange:n},Iu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var x=T.memoizedProps,b=T.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?x:sn(e.type,x),b);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){xe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return T=vv,vv=!1,T}function $o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mf(e,n,s)}i=i.next}while(i!==r)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function IE(t){var e=t.alternate;e!==null&&(t.alternate=null,IE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[la],delete e[tf],delete e[Qk],delete e[Yk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function SE(t){return t.tag===5||t.tag===3||t.tag===4}function _v(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||SE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ku));else if(r!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}function vf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vf(t,e,n),t=t.sibling;t!==null;)vf(t,e,n),t=t.sibling}var Qe=null,on=!1;function hr(t,e,n){for(n=n.child;n!==null;)AE(t,e,n),n=n.sibling}function AE(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(pc,n)}catch{}switch(n.tag){case 5:ht||ls(n,e);case 6:var r=Qe,i=on;Qe=null,hr(t,e,n),Qe=r,on=i,Qe!==null&&(on?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(on?(t=Qe,n=n.stateNode,t.nodeType===8?Qd(t.parentNode,n):t.nodeType===1&&Qd(t,n),ra(t)):Qd(Qe,n.stateNode));break;case 4:r=Qe,i=on,Qe=n.stateNode.containerInfo,on=!0,hr(t,e,n),Qe=r,on=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mf(n,e,o),i=i.next}while(i!==r)}hr(t,e,n);break;case 1:if(!ht&&(ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,hr(t,e,n),ht=r):hr(t,e,n);break;default:hr(t,e,n)}}function wv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hR),e.forEach(function(r){var i=TR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,on=!1;break e;case 3:Qe=a.stateNode.containerInfo,on=!0;break e;case 4:Qe=a.stateNode.containerInfo,on=!0;break e}a=a.return}if(Qe===null)throw Error(j(160));AE(s,o,i),Qe=null,on=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kE(e,t),e=e.sibling}function kE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),yn(t),r&4){try{$o(3,t,t.return),Tc(3,t)}catch(x){xe(t,t.return,x)}try{$o(5,t,t.return)}catch(x){xe(t,t.return,x)}}break;case 1:rn(e,t),yn(t),r&512&&n!==null&&ls(n,n.return);break;case 5:if(rn(e,t),yn(t),r&512&&n!==null&&ls(n,n.return),t.flags&32){var i=t.stateNode;try{Zo(i,"")}catch(x){xe(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Kw(i,s),Bh(a,o);var c=Bh(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?Zw(i,f):h==="dangerouslySetInnerHTML"?Xw(i,f):h==="children"?Zo(i,f):cp(i,h,f,c)}switch(a){case"input":Vh(i,s);break;case"textarea":Qw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?fs(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?fs(i,!!s.multiple,s.defaultValue,!0):fs(i,!!s.multiple,s.multiple?[]:"",!1))}i[la]=s}catch(x){xe(t,t.return,x)}}break;case 6:if(rn(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){xe(t,t.return,x)}}break;case 3:if(rn(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(x){xe(t,t.return,x)}break;case 4:rn(e,t),yn(t);break;case 13:rn(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zp=Le())),r&4&&wv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(c=ht)||h,rn(e,t),ht=c):rn(e,t),yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(f=W=h;W!==null;){switch(m=W,_=m.child,m.tag){case 0:case 11:case 14:case 15:$o(4,m,m.return);break;case 1:ls(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(x){xe(r,n,x)}}break;case 5:ls(m,m.return);break;case 22:if(m.memoizedState!==null){Tv(f);continue}}_!==null?(_.return=m,W=_):Tv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Jw("display",o))}catch(x){xe(t,t.return,x)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){xe(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:rn(e,t),yn(t),r&4&&wv(t);break;case 21:break;default:rn(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(SE(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var s=_v(t);vf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_v(t);yf(t,a,o);break;default:throw Error(j(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pR(t,e,n){W=t,RE(t)}function RE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Cl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ht;a=Cl;var c=ht;if(Cl=o,(ht=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Iv(i):u!==null?(u.return=o,W=u):Iv(i);for(;s!==null;)W=s,RE(s),s=s.sibling;W=i,Cl=a,ht=c}Ev(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Ev(t)}}function Ev(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||Tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ra(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ht||e.flags&512&&gf(e)}catch(m){xe(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Tv(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Iv(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{gf(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{gf(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var mR=Math.ceil,Mu=ar.ReactCurrentDispatcher,Bp=ar.ReactCurrentOwner,Jt=ar.ReactCurrentBatchConfig,oe=0,Ge=null,Ue=null,et=0,Dt=0,us=Kr(0),ze=0,pa=null,Ei=0,Ic=0,$p=0,zo=null,Rt=null,zp=0,Ns=1/0,$n=null,Uu=!1,_f=null,Lr=null,Pl=!1,Rr=null,Fu=0,Wo=0,wf=null,tu=-1,nu=0;function Et(){return oe&6?Le():tu!==-1?tu:tu=Le()}function Vr(t){return t.mode&1?oe&2&&et!==0?et&-et:Jk.transition!==null?(nu===0&&(nu=d0()),nu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:v0(t.type)),t):1}function cn(t,e,n,r){if(50<Wo)throw Wo=0,wf=null,Error(j(185));Ca(t,n,r),(!(oe&2)||t!==Ge)&&(t===Ge&&(!(oe&2)&&(Ic|=n),ze===4&&_r(t,et)),Pt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ns=Le()+500,_c&&Qr()))}function Pt(t,e){var n=t.callbackNode;JA(t,e);var r=Tu(t,t===Ge?et:0);if(r===0)n!==null&&Ny(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ny(n),e===1)t.tag===0?Xk(Sv.bind(null,t)):M0(Sv.bind(null,t)),Gk(function(){!(oe&6)&&Qr()}),n=null;else{switch(h0(r)){case 1:n=mp;break;case 4:n=u0;break;case 16:n=Eu;break;case 536870912:n=c0;break;default:n=Eu}n=LE(n,xE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xE(t,e){if(tu=-1,nu=0,oe&6)throw Error(j(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var r=Tu(t,t===Ge?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ju(t,r);else{e=r;var i=oe;oe|=2;var s=CE();(Ge!==t||et!==e)&&($n=null,Ns=Le()+500,pi(t,e));do try{vR();break}catch(a){bE(t,a)}while(!0);xp(),Mu.current=s,oe=i,Ue!==null?e=0:(Ge=null,et=0,e=ze)}if(e!==0){if(e===2&&(i=Hh(t),i!==0&&(r=i,e=Ef(t,i))),e===1)throw n=pa,pi(t,0),_r(t,r),Pt(t,Le()),n;if(e===6)_r(t,r);else{if(i=t.current.alternate,!(r&30)&&!gR(i)&&(e=ju(t,r),e===2&&(s=Hh(t),s!==0&&(r=s,e=Ef(t,s))),e===1))throw n=pa,pi(t,0),_r(t,r),Pt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:ai(t,Rt,$n);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=zp+500-Le(),10<e)){if(Tu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ef(ai.bind(null,t,Rt,$n),e);break}ai(t,Rt,$n);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mR(r/1960))-r,10<r){t.timeoutHandle=ef(ai.bind(null,t,Rt,$n),r);break}ai(t,Rt,$n);break;case 5:ai(t,Rt,$n);break;default:throw Error(j(329))}}}return Pt(t,Le()),t.callbackNode===n?xE.bind(null,t):null}function Ef(t,e){var n=zo;return t.current.memoizedState.isDehydrated&&(pi(t,e).flags|=256),t=ju(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Tf(e)),t}function Tf(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function gR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~$p,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function Sv(t){if(oe&6)throw Error(j(327));vs();var e=Tu(t,0);if(!(e&1))return Pt(t,Le()),null;var n=ju(t,e);if(t.tag!==0&&n===2){var r=Hh(t);r!==0&&(e=r,n=Ef(t,r))}if(n===1)throw n=pa,pi(t,0),_r(t,e),Pt(t,Le()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ai(t,Rt,$n),Pt(t,Le()),null}function Wp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ns=Le()+500,_c&&Qr())}}function Ti(t){Rr!==null&&Rr.tag===0&&!(oe&6)&&vs();var e=oe;oe|=1;var n=Jt.transition,r=fe;try{if(Jt.transition=null,fe=1,t)return t()}finally{fe=r,Jt.transition=n,oe=e,!(oe&6)&&Qr()}}function qp(){Dt=us.current,Ee(us)}function pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hk(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Ap(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ru();break;case 3:Cs(),Ee(bt),Ee(pt),Op();break;case 5:Dp(r);break;case 4:Cs();break;case 13:Ee(Ie);break;case 19:Ee(Ie);break;case 10:bp(r.type._context);break;case 22:case 23:qp()}n=n.return}if(Ge=t,Ue=t=Mr(t.current,null),et=Dt=e,ze=0,pa=null,$p=Ic=Ei=0,Rt=zo=null,ci!==null){for(e=0;e<ci.length;e++)if(n=ci[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ci=null}return t}function bE(t,e){do{var n=Ue;try{if(xp(),Jl.current=Vu,Lu){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lu=!1}if(wi=0,qe=$e=Se=null,Bo=!1,da=0,Bp.current=null,n===null||n.return===null){ze=1,pa=e,Ue=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=et,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=dv(o);if(_!==null){_.flags&=-257,hv(_,o,a,s,e),_.mode&1&&cv(s,c,e),e=_,u=c;var T=e.updateQueue;if(T===null){var x=new Set;x.add(u),e.updateQueue=x}else T.add(u);break e}else{if(!(e&1)){cv(s,c,e),Hp();break e}u=Error(j(426))}}else if(Te&&a.mode&1){var b=dv(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),hv(b,o,a,s,e),kp(Ps(u,a));break e}}s=u=Ps(u,a),ze!==4&&(ze=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=hE(s,u,e);iv(s,g);break e;case 1:a=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Lr===null||!Lr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=fE(s,a,e);iv(s,D);break e}}s=s.return}while(s!==null)}NE(n)}catch(M){e=M,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function CE(){var t=Mu.current;return Mu.current=Vu,t===null?Vu:t}function Hp(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(Ei&268435455)&&!(Ic&268435455)||_r(Ge,et)}function ju(t,e){var n=oe;oe|=2;var r=CE();(Ge!==t||et!==e)&&($n=null,pi(t,e));do try{yR();break}catch(i){bE(t,i)}while(!0);if(xp(),oe=n,Mu.current=r,Ue!==null)throw Error(j(261));return Ge=null,et=0,ze}function yR(){for(;Ue!==null;)PE(Ue)}function vR(){for(;Ue!==null&&!zA();)PE(Ue)}function PE(t){var e=OE(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?NE(t):Ue=e,Bp.current=null}function NE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dR(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Ue=null;return}}else if(n=cR(n,e,Dt),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);ze===0&&(ze=5)}function ai(t,e,n){var r=fe,i=Jt.transition;try{Jt.transition=null,fe=1,_R(t,e,n,r)}finally{Jt.transition=i,fe=r}return null}function _R(t,e,n,r){do vs();while(Rr!==null);if(oe&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZA(t,s),t===Ge&&(Ue=Ge=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pl||(Pl=!0,LE(Eu,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=fe;fe=1;var a=oe;oe|=4,Bp.current=null,fR(t,n),kE(n,t),Fk(Jh),Iu=!!Xh,Jh=Xh=null,t.current=n,pR(n),WA(),oe=a,fe=o,Jt.transition=s}else t.current=n;if(Pl&&(Pl=!1,Rr=t,Fu=i),s=t.pendingLanes,s===0&&(Lr=null),GA(n.stateNode),Pt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uu)throw Uu=!1,t=_f,_f=null,t;return Fu&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===wf?Wo++:(Wo=0,wf=t):Wo=0,Qr(),null}function vs(){if(Rr!==null){var t=h0(Fu),e=Jt.transition,n=fe;try{if(Jt.transition=null,fe=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,Fu=0,oe&6)throw Error(j(331));var i=oe;for(oe|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:$o(8,h,s)}var f=h.child;if(f!==null)f.return=h,W=f;else for(;W!==null;){h=W;var m=h.sibling,_=h.return;if(IE(h),h===c){W=null;break}if(m!==null){m.return=_,W=m;break}W=_}}}var T=s.alternate;if(T!==null){var x=T.child;if(x!==null){T.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,W=g;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=v;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(M){xe(a,a.return,M)}if(a===o){W=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,W=D;break e}W=a.return}}if(oe=i,Qr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(pc,t)}catch{}r=!0}return r}finally{fe=n,Jt.transition=e}}return!1}function Av(t,e,n){e=Ps(n,e),e=hE(t,e,1),t=Or(t,e,1),e=Et(),t!==null&&(Ca(t,1,e),Pt(t,e))}function xe(t,e,n){if(t.tag===3)Av(t,t,n);else for(;e!==null;){if(e.tag===3){Av(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){t=Ps(n,t),t=fE(e,t,1),e=Or(e,t,1),t=Et(),e!==null&&(Ca(e,1,t),Pt(e,t));break}}e=e.return}}function wR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(et&n)===n&&(ze===4||ze===3&&(et&130023424)===et&&500>Le()-zp?pi(t,0):$p|=n),Pt(t,e)}function DE(t,e){e===0&&(t.mode&1?(e=El,El<<=1,!(El&130023424)&&(El=4194304)):e=1);var n=Et();t=Zn(t,e),t!==null&&(Ca(t,e,n),Pt(t,n))}function ER(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),DE(t,n)}function TR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),DE(t,n)}var OE;OE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,uR(t,e,n);xt=!!(t.flags&131072)}else xt=!1,Te&&e.flags&1048576&&U0(e,Cu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eu(t,e),t=e.pendingProps;var i=Rs(e,pt.current);ys(e,n),i=Vp(null,e,r,t,i,n);var s=Mp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,xu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pp(e),i.updater=Ec,e.stateNode=i,i._reactInternals=e,lf(e,r,t,n),e=df(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&Sp(e),_t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SR(r),t=sn(r,t),i){case 0:e=cf(null,e,r,t,n);break e;case 1:e=mv(null,e,r,t,n);break e;case 11:e=fv(null,e,r,t,n);break e;case 14:e=pv(null,e,r,sn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),cf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),mv(t,e,r,i,n);case 3:e:{if(yE(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,W0(t,e),Du(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ps(Error(j(423)),e),e=gv(t,e,r,n,i);break e}else if(r!==i){i=Ps(Error(j(424)),e),e=gv(t,e,r,n,i);break e}else for(Ot=Dr(e.stateNode.containerInfo.firstChild),Ut=e,Te=!0,an=null,n=$0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),r===i){e=er(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return q0(e),t===null&&sf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zh(r,i)?o=null:s!==null&&Zh(r,s)&&(e.flags|=32),gE(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&sf(e),null;case 13:return vE(t,e,n);case 4:return Np(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),fv(t,e,r,i,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Pu,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!bt.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Qn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),of(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),of(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ys(e,n),i=Zt(i),r=r(i),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),pv(t,e,r,i,n);case 15:return pE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),eu(t,e),e.tag=1,Ct(r)?(t=!0,xu(e)):t=!1,ys(e,n),dE(e,r,i),lf(e,r,i,n),df(null,e,r,!0,t,n);case 19:return _E(t,e,n);case 22:return mE(t,e,n)}throw Error(j(156,e.tag))};function LE(t,e){return l0(t,e)}function IR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new IR(t,e,n,r)}function Gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SR(t){if(typeof t=="function")return Gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hp)return 11;if(t===fp)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ru(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zi:return mi(n.children,i,s,e);case dp:o=8,i|=8;break;case Ph:return t=Xt(12,n,e,i|2),t.elementType=Ph,t.lanes=s,t;case Nh:return t=Xt(13,n,e,i),t.elementType=Nh,t.lanes=s,t;case Dh:return t=Xt(19,n,e,i),t.elementType=Dh,t.lanes=s,t;case qw:return Sc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zw:o=10;break e;case Ww:o=9;break e;case hp:o=11;break e;case fp:o=14;break e;case gr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mi(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function Sc(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=qw,t.lanes=n,t.stateNode={isHidden:!1},t}function rh(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function ih(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ud(0),this.expirationTimes=Ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kp(t,e,n,r,i,s,o,a,u){return t=new AR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pp(s),t}function kR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function VE(t){if(!t)return zr;t=t._reactInternals;e:{if(Oi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Ct(n))return V0(t,n,e)}return e}function ME(t,e,n,r,i,s,o,a,u){return t=Kp(n,r,!0,t,i,s,o,a,u),t.context=VE(null),n=t.current,r=Et(),i=Vr(n),s=Qn(r,i),s.callback=e??null,Or(n,s,i),t.current.lanes=i,Ca(t,i,r),Pt(t,r),t}function Ac(t,e,n,r){var i=e.current,s=Et(),o=Vr(i);return n=VE(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Or(i,e,o),t!==null&&(cn(t,i,o,s),Xl(t,i,o)),o}function Bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qp(t,e){kv(t,e),(t=t.alternate)&&kv(t,e)}function RR(){return null}var UE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yp(t){this._internalRoot=t}kc.prototype.render=Yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Ac(t,e,null,null)};kc.prototype.unmount=Yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ti(function(){Ac(null,t,null,null)}),e[Jn]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=m0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&y0(t)}};function Xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rv(){}function xR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Bu(o);s.call(c)}}var o=ME(e,r,t,0,null,!1,!1,"",Rv);return t._reactRootContainer=o,t[Jn]=o.current,oa(t.nodeType===8?t.parentNode:t),Ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Bu(u);a.call(c)}}var u=Kp(t,0,!1,null,null,!1,!1,"",Rv);return t._reactRootContainer=u,t[Jn]=u.current,oa(t.nodeType===8?t.parentNode:t),Ti(function(){Ac(e,u,n,r)}),u}function xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Bu(o);a.call(u)}}Ac(e,o,t,i)}else o=xR(n,e,t,i,r);return Bu(o)}f0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xo(e.pendingLanes);n!==0&&(gp(e,n|1),Pt(e,Le()),!(oe&6)&&(Ns=Le()+500,Qr()))}break;case 13:Ti(function(){var r=Zn(t,1);if(r!==null){var i=Et();cn(r,t,1,i)}}),Qp(t,1)}};yp=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=Et();cn(e,t,134217728,n)}Qp(t,134217728)}};p0=function(t){if(t.tag===13){var e=Vr(t),n=Zn(t,e);if(n!==null){var r=Et();cn(n,t,e,r)}Qp(t,e)}};m0=function(){return fe};g0=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};zh=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vc(r);if(!i)throw Error(j(90));Gw(r),Vh(r,i)}}}break;case"textarea":Qw(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};n0=Wp;r0=Ti;var bR={usingClientEntryPoint:!1,Events:[Na,rs,vc,e0,t0,Wp]},wo={findFiberByHostInstance:ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CR={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o0(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||RR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{pc=Nl.inject(CR),In=Nl}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bR;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xp(e))throw Error(j(200));return kR(t,e,null,n)};zt.createRoot=function(t,e){if(!Xp(t))throw Error(j(299));var n=!1,r="",i=UE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kp(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,oa(t.nodeType===8?t.parentNode:t),new Yp(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=o0(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Ti(t)};zt.hydrate=function(t,e,n){if(!Rc(e))throw Error(j(200));return xc(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!Xp(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ME(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kc(e)};zt.render=function(t,e,n){if(!Rc(e))throw Error(j(200));return xc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(j(40));return t._reactRootContainer?(Ti(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};zt.unstable_batchedUpdates=Wp;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return xc(t,e,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function FE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FE)}catch(t){console.error(t)}}FE(),Fw.exports=zt;var PR=Fw.exports,xv=PR;bh.createRoot=xv.createRoot,bh.hydrateRoot=xv.hydrateRoot;const NR="modulepreload",DR=function(t){return"/"+t},bv={},kt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=DR(u),u in bv)return;bv[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":NR,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ma.apply(this,arguments)}var xr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xr||(xr={}));const Cv="popstate";function OR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return If("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$u(i)}return VR(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LR(){return Math.random().toString(36).substr(2,8)}function Pv(t,e){return{usr:t.state,key:t.key,idx:e}}function If(t,e,n,r){return n===void 0&&(n=null),ma({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ws(e):e,{state:n,key:e&&e.key||r||LR()})}function $u(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function VR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=xr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ma({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=xr.Pop;let b=h(),g=b==null?null:b-c;c=b,u&&u({action:a,location:x.location,delta:g})}function m(b,g){a=xr.Push;let v=If(x.location,b,g);c=h()+1;let S=Pv(v,c),D=x.createHref(v);try{o.pushState(S,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&u&&u({action:a,location:x.location,delta:1})}function _(b,g){a=xr.Replace;let v=If(x.location,b,g);c=h();let S=Pv(v,c),D=x.createHref(v);o.replaceState(S,"",D),s&&u&&u({action:a,location:x.location,delta:0})}function T(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:$u(b);return Ve(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let x={get action(){return a},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Cv,f),u=b,()=>{i.removeEventListener(Cv,f),u=null}},createHref(b){return e(i,b)},createURL:T,encodeLocation(b){let g=T(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:_,go(b){return o.go(b)}};return x}var Nv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Nv||(Nv={}));function MR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ws(e):e,i=Zp(r.pathname||"/",n);if(i==null)return null;let s=jE(t);UR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=GR(s[a],YR(i));return o}function jE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ur([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),jE(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:qR(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of BE(s.path))i(s,o,u)}),e}function BE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=BE(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function UR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const FR=/^:[\w-]+$/,jR=3,BR=2,$R=1,zR=10,WR=-2,Dv=t=>t==="*";function qR(t,e){let n=t.split("/"),r=n.length;return n.some(Dv)&&(r+=WR),e&&(r+=BR),n.filter(i=>!Dv(i)).reduce((i,s)=>i+(FR.test(s)?jR:s===""?$R:zR),r)}function HR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function GR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=KR({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let f=a.route;s.push({params:r,pathname:Ur([i,h.pathname]),pathnameBase:tx(Ur([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=Ur([i,h.pathnameBase]))}return s}function KR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=QR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:_}=h;if(m==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const T=a[f];return _&&!T?c[m]=void 0:c[m]=XR(T||"",m),c},{}),pathname:s,pathnameBase:o,pattern:t}}function QR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function YR(t){try{return decodeURI(t)}catch(e){return Jp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function XR(t,e){try{return decodeURIComponent(t)}catch(n){return Jp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Zp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ws(t):t;return{pathname:n?n.startsWith("/")?n:ZR(n,e):e,search:nx(r),hash:rx(i)}}function ZR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ex(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function em(t,e){let n=ex(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function tm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ws(t):(i=ma({},t),Ve(!i.pathname||!i.pathname.includes("?"),sh("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),sh("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),sh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=JR(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ur=t=>t.join("/").replace(/\/\/+/g,"/"),tx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ix(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $E=["post","put","patch","delete"];new Set($E);const sx=["get",...$E];new Set(sx);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ga.apply(this,arguments)}const nm=C.createContext(null),ox=C.createContext(null),Yr=C.createContext(null),bc=C.createContext(null),Pn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),zE=C.createContext(null);function ax(t,e){let{relative:n}=e===void 0?{}:e;qs()||Ve(!1);let{basename:r,navigator:i}=C.useContext(Yr),{hash:s,pathname:o,search:a}=qE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ur([r,o])),i.createHref({pathname:u,search:a,hash:s})}function qs(){return C.useContext(bc)!=null}function Li(){return qs()||Ve(!1),C.useContext(bc).location}function WE(t){C.useContext(Yr).static||C.useLayoutEffect(t)}function Hs(){let{isDataRoute:t}=C.useContext(Pn);return t?Tx():lx()}function lx(){qs()||Ve(!1);let t=C.useContext(nm),{basename:e,future:n,navigator:r}=C.useContext(Yr),{matches:i}=C.useContext(Pn),{pathname:s}=Li(),o=JSON.stringify(em(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return WE(()=>{a.current=!0}),C.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=tm(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ur([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}const ux=C.createContext(null);function cx(t){let e=C.useContext(Pn).outlet;return e&&C.createElement(ux.Provider,{value:t},e)}function c4(){let{matches:t}=C.useContext(Pn),e=t[t.length-1];return e?e.params:{}}function qE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Yr),{matches:i}=C.useContext(Pn),{pathname:s}=Li(),o=JSON.stringify(em(i,r.v7_relativeSplatPath));return C.useMemo(()=>tm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function dx(t,e){return hx(t,e)}function hx(t,e,n,r){qs()||Ve(!1);let{navigator:i}=C.useContext(Yr),{matches:s}=C.useContext(Pn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Li(),h;if(e){var f;let b=typeof e=="string"?Ws(e):e;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||Ve(!1),h=b}else h=c;let m=h.pathname||"/",_=u==="/"?m:m.slice(u.length)||"/",T=MR(t,{pathname:_}),x=yx(T&&T.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Ur([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Ur([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&x?C.createElement(bc.Provider,{value:{location:ga({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:xr.Pop}},x):x}function fx(){let t=Ex(),e=ix(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const px=C.createElement(fx,null);class mx extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(Pn.Provider,{value:this.props.routeContext},C.createElement(zE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gx(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(nm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Pn.Provider,{value:e},r)}function yx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));h>=0||Ve(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:_}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let _,T=!1,x=null,b=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||px,u&&(c<0&&m===0?(T=!0,b=null):c===m&&(T=!0,b=f.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,m+1)),v=()=>{let S;return _?S=x:T?S=b:f.route.Component?S=C.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=h,C.createElement(gx,{match:f,routeContext:{outlet:h,matches:g,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?C.createElement(mx,{location:n.location,revalidation:n.revalidation,component:x,error:_,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var HE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(HE||{}),zu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zu||{});function vx(t){let e=C.useContext(nm);return e||Ve(!1),e}function _x(t){let e=C.useContext(ox);return e||Ve(!1),e}function wx(t){let e=C.useContext(Pn);return e||Ve(!1),e}function GE(t){let e=wx(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function Ex(){var t;let e=C.useContext(zE),n=_x(zu.UseRouteError),r=GE(zu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Tx(){let{router:t}=vx(HE.UseNavigateStable),e=GE(zu.UseNavigateStable),n=C.useRef(!1);return WE(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ga({fromRouteId:e},s)))},[t,e])}function Ix(t){let{to:e,replace:n,state:r,relative:i}=t;qs()||Ve(!1);let{future:s,static:o}=C.useContext(Yr),{matches:a}=C.useContext(Pn),{pathname:u}=Li(),c=Hs(),h=tm(e,em(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return C.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function KE(t){return cx(t.context)}function De(t){Ve(!1)}function Sx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=xr.Pop,navigator:s,static:o=!1,future:a}=t;qs()&&Ve(!1);let u=e.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:u,navigator:s,static:o,future:ga({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Ws(r));let{pathname:h="/",search:f="",hash:m="",state:_=null,key:T="default"}=r,x=C.useMemo(()=>{let b=Zp(h,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:_,key:T},navigationType:i}},[u,h,f,m,_,T,i]);return x==null?null:C.createElement(Yr.Provider,{value:c},C.createElement(bc.Provider,{children:n,value:x}))}function Ax(t){let{children:e,location:n}=t;return dx(Sf(e),n)}new Promise(()=>{});function Sf(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,Sf(r.props.children,s));return}r.type!==De&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Sf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Af(){return Af=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Af.apply(this,arguments)}function kx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Rx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function xx(t,e){return t.button===0&&(!e||e==="_self")&&!Rx(t)}const bx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Cx="6";try{window.__reactRouterVersion=Cx}catch{}const Px="startTransition",Ov=wA[Px];function Nx(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=OR({window:i,v5Compat:!0}));let o=s.current,[a,u]=C.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=C.useCallback(f=>{c&&Ov?Ov(()=>u(f)):u(f)},[u,c]);return C.useLayoutEffect(()=>o.listen(h),[o,h]),C.createElement(Sx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Dx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ox=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Be=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,unstable_viewTransition:f}=e,m=kx(e,bx),{basename:_}=C.useContext(Yr),T,x=!1;if(typeof c=="string"&&Ox.test(c)&&(T=c,Dx))try{let S=new URL(window.location.href),D=c.startsWith("//")?new URL(S.protocol+c):new URL(c),M=Zp(D.pathname,_);D.origin===S.origin&&M!=null?c=M+D.search+D.hash:x=!0}catch{}let b=ax(c,{relative:i}),g=Lx(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||g(S)}return C.createElement("a",Af({},m,{href:T||b,onClick:x||s?r:v,ref:n,target:u}))});var Lv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Lv||(Lv={}));var Vv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vv||(Vv={}));function Lx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=Hs(),c=Li(),h=qE(t,{relative:o});return C.useCallback(f=>{if(xx(f,n)){f.preventDefault();let m=r!==void 0?r:$u(c)===$u(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}const QE=C.createContext(),Vx=()=>{const t=C.useContext(QE);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Mx=({children:t})=>{const[e,n]=C.useState(()=>{const s=localStorage.getItem("theme");return s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});C.useEffect(()=>{const s=document.documentElement;e?(s.classList.add("dark"),localStorage.setItem("theme","dark")):(s.classList.remove("dark"),localStorage.setItem("theme","light"))},[e]),C.useEffect(()=>{const s=window.matchMedia("(prefers-color-scheme: dark)"),o=a=>{n(a.matches)};return s.addEventListener("change",o),()=>s.removeEventListener("change",o)},[]);const i={isDark:e,toggleTheme:()=>{n(s=>!s)}};return E.jsx(QE.Provider,{value:i,children:t})};var Mv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ux=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},XE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[h],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(YE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ux(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Fx;const m=s<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jx=function(t){const e=YE(t);return XE.encodeByteArray(e,!0)},Wu=function(t){return jx(t).replace(/\./g,"")},JE=function(t){try{return XE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=()=>Bx().__FIREBASE_DEFAULTS__,zx=()=>{if(typeof process>"u"||typeof Mv>"u")return;const t=Mv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&JE(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return $x()||zx()||Wx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ZE=t=>{var e,n;return(n=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rm=t=>{const e=ZE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eT=()=>{var t;return(t=Cc())===null||t===void 0?void 0:t.config},tT=t=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wu(JSON.stringify(n)),Wu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function Gx(){var t;const e=(t=Cc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yx(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xx(){return!Gx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iT(){try{return typeof indexedDB=="object"}catch{return!1}}function sT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Jx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx="FirebaseError";class qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Zx,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function eb(t,e){return t.replace(tb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tb=/\{\$([^}]+)}/g;function nb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ii(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Uv(s)&&Uv(o)){if(!Ii(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rb(t,e){const n=new ib(t,e);return n.subscribe.bind(n)}class ib{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oh),i.error===void 0&&(i.error=oh),i.complete===void 0&&(i.complete=oh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=1e3,ab=2,lb=4*60*60*1e3,ub=.5;function Fv(t,e=ob,n=ab){const r=e*Math.pow(n,t),i=Math.round(ub*r*(Math.random()-.5)*2);return Math.min(lb,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t){return t&&t._delegate?t._delegate:t}class $t{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cb=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hb(e))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=li){return this.instances.has(e)}getOptions(e=li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:db(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=li){return this.component?this.component.multipleInstances?e:li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function db(t){return t===li?void 0:t}function hb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const pb={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},mb=ne.INFO,gb={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},yb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=mb,this._logHandler=yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const vb=(t,e)=>e.some(n=>t instanceof n);let jv,Bv;function _b(){return jv||(jv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wb(){return Bv||(Bv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oT=new WeakMap,kf=new WeakMap,aT=new WeakMap,ah=new WeakMap,im=new WeakMap;function Eb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oT.set(n,t)}).catch(()=>{}),im.set(e,t),e}function Tb(t){if(kf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kf.set(t,e)}let Rf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ib(t){Rf=t(Rf)}function Sb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lh(this),e,...n);return aT.set(r,e.sort?e.sort():[e]),Fr(r)}:wb().includes(t)?function(...e){return t.apply(lh(this),e),Fr(oT.get(this))}:function(...e){return Fr(t.apply(lh(this),e))}}function Ab(t){return typeof t=="function"?Sb(t):(t instanceof IDBTransaction&&Tb(t),vb(t,_b())?new Proxy(t,Rf):t)}function Fr(t){if(t instanceof IDBRequest)return Eb(t);if(ah.has(t))return ah.get(t);const e=Ab(t);return e!==t&&(ah.set(t,e),im.set(e,t)),e}const lh=t=>im.get(t);function lT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Fr(o.result),u.oldVersion,u.newVersion,Fr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kb=["get","getKey","getAll","getAllKeys","count"],Rb=["put","add","delete","clear"],uh=new Map;function $v(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uh.get(e))return uh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Rb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kb.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return uh.set(e,s),s}Ib(t=>({...t,get:(e,n,r)=>$v(e,n)||t.get(e,n,r),has:(e,n)=>!!$v(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xf="@firebase/app",zv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Pc("@firebase/app"),Cb="@firebase/app-compat",Pb="@firebase/analytics-compat",Nb="@firebase/analytics",Db="@firebase/app-check-compat",Ob="@firebase/app-check",Lb="@firebase/auth",Vb="@firebase/auth-compat",Mb="@firebase/database",Ub="@firebase/data-connect",Fb="@firebase/database-compat",jb="@firebase/functions",Bb="@firebase/functions-compat",$b="@firebase/installations",zb="@firebase/installations-compat",Wb="@firebase/messaging",qb="@firebase/messaging-compat",Hb="@firebase/performance",Gb="@firebase/performance-compat",Kb="@firebase/remote-config",Qb="@firebase/remote-config-compat",Yb="@firebase/storage",Xb="@firebase/storage-compat",Jb="@firebase/firestore",Zb="@firebase/vertexai-preview",eC="@firebase/firestore-compat",tC="firebase",nC="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="[DEFAULT]",rC={[xf]:"fire-core",[Cb]:"fire-core-compat",[Nb]:"fire-analytics",[Pb]:"fire-analytics-compat",[Ob]:"fire-app-check",[Db]:"fire-app-check-compat",[Lb]:"fire-auth",[Vb]:"fire-auth-compat",[Mb]:"fire-rtdb",[Ub]:"fire-data-connect",[Fb]:"fire-rtdb-compat",[jb]:"fire-fn",[Bb]:"fire-fn-compat",[$b]:"fire-iid",[zb]:"fire-iid-compat",[Wb]:"fire-fcm",[qb]:"fire-fcm-compat",[Hb]:"fire-perf",[Gb]:"fire-perf-compat",[Kb]:"fire-rc",[Qb]:"fire-rc-compat",[Yb]:"fire-gcs",[Xb]:"fire-gcs-compat",[Jb]:"fire-fst",[eC]:"fire-fst-compat",[Zb]:"fire-vertex","fire-js":"fire-js",[tC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map,iC=new Map,Cf=new Map;function Wv(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tn(t){const e=t.name;if(Cf.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,t);for(const n of qu.values())Wv(n,t);for(const n of iC.values())Wv(n,t);return!0}function lr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function En(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new Vi("app","Firebase",sC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=nC;function uT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jr.create("bad-app-name",{appName:String(i)});if(n||(n=eT()),!n)throw jr.create("no-options");const s=qu.get(i);if(s){if(Ii(n,s.options)&&Ii(r,s.config))return s;throw jr.create("duplicate-app",{appName:i})}const o=new fb(i);for(const u of Cf.values())o.addComponent(u);const a=new oC(n,r,o);return qu.set(i,a),a}function La(t=bf){const e=qu.get(t);if(!e&&t===bf&&eT())return uT();if(!e)throw jr.create("no-app",{appName:t});return e}function ft(t,e,n){var r;let i=(r=rC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(a.join(" "));return}tn(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="firebase-heartbeat-database",lC=1,ya="firebase-heartbeat-store";let ch=null;function cT(){return ch||(ch=lT(aC,lC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ya)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),ch}async function uC(t){try{const n=(await cT()).transaction(ya),r=await n.objectStore(ya).get(dT(t));return await n.done,r}catch(e){if(e instanceof qt)tr.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(n.message)}}}async function qv(t,e){try{const r=(await cT()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,dT(t)),await r.done}catch(n){if(n instanceof qt)tr.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function dT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=1024,dC=30*24*60*60*1e3;class hC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=dC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hv(),{heartbeatsToSend:r,unsentEntries:i}=fC(this._heartbeatsCache.heartbeats),s=Wu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return tr.warn(n),""}}}function Hv(){return new Date().toISOString().substring(0,10)}function fC(t,e=cC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iT()?sT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gv(t){return Wu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){tn(new $t("platform-logger",e=>new xb(e),"PRIVATE")),tn(new $t("heartbeat",e=>new hC(e),"PRIVATE")),ft(xf,zv,t),ft(xf,zv,"esm2017"),ft("fire-js","")}mC("");var gC="firebase",yC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(gC,yC,"app");var Kv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi,hT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,w){function I(){}I.prototype=w.prototype,A.D=w.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(k,P,N){for(var R=Array(arguments.length-2),je=2;je<arguments.length;je++)R[je-2]=arguments[je];return w.prototype[P].apply(k,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,w,I){I||(I=0);var k=Array(16);if(typeof w=="string")for(var P=0;16>P;++P)k[P]=w.charCodeAt(I++)|w.charCodeAt(I++)<<8|w.charCodeAt(I++)<<16|w.charCodeAt(I++)<<24;else for(P=0;16>P;++P)k[P]=w[I++]|w[I++]<<8|w[I++]<<16|w[I++]<<24;w=A.g[0],I=A.g[1],P=A.g[2];var N=A.g[3],R=w+(N^I&(P^N))+k[0]+3614090360&4294967295;w=I+(R<<7&4294967295|R>>>25),R=N+(P^w&(I^P))+k[1]+3905402710&4294967295,N=w+(R<<12&4294967295|R>>>20),R=P+(I^N&(w^I))+k[2]+606105819&4294967295,P=N+(R<<17&4294967295|R>>>15),R=I+(w^P&(N^w))+k[3]+3250441966&4294967295,I=P+(R<<22&4294967295|R>>>10),R=w+(N^I&(P^N))+k[4]+4118548399&4294967295,w=I+(R<<7&4294967295|R>>>25),R=N+(P^w&(I^P))+k[5]+1200080426&4294967295,N=w+(R<<12&4294967295|R>>>20),R=P+(I^N&(w^I))+k[6]+2821735955&4294967295,P=N+(R<<17&4294967295|R>>>15),R=I+(w^P&(N^w))+k[7]+4249261313&4294967295,I=P+(R<<22&4294967295|R>>>10),R=w+(N^I&(P^N))+k[8]+1770035416&4294967295,w=I+(R<<7&4294967295|R>>>25),R=N+(P^w&(I^P))+k[9]+2336552879&4294967295,N=w+(R<<12&4294967295|R>>>20),R=P+(I^N&(w^I))+k[10]+4294925233&4294967295,P=N+(R<<17&4294967295|R>>>15),R=I+(w^P&(N^w))+k[11]+2304563134&4294967295,I=P+(R<<22&4294967295|R>>>10),R=w+(N^I&(P^N))+k[12]+1804603682&4294967295,w=I+(R<<7&4294967295|R>>>25),R=N+(P^w&(I^P))+k[13]+4254626195&4294967295,N=w+(R<<12&4294967295|R>>>20),R=P+(I^N&(w^I))+k[14]+2792965006&4294967295,P=N+(R<<17&4294967295|R>>>15),R=I+(w^P&(N^w))+k[15]+1236535329&4294967295,I=P+(R<<22&4294967295|R>>>10),R=w+(P^N&(I^P))+k[1]+4129170786&4294967295,w=I+(R<<5&4294967295|R>>>27),R=N+(I^P&(w^I))+k[6]+3225465664&4294967295,N=w+(R<<9&4294967295|R>>>23),R=P+(w^I&(N^w))+k[11]+643717713&4294967295,P=N+(R<<14&4294967295|R>>>18),R=I+(N^w&(P^N))+k[0]+3921069994&4294967295,I=P+(R<<20&4294967295|R>>>12),R=w+(P^N&(I^P))+k[5]+3593408605&4294967295,w=I+(R<<5&4294967295|R>>>27),R=N+(I^P&(w^I))+k[10]+38016083&4294967295,N=w+(R<<9&4294967295|R>>>23),R=P+(w^I&(N^w))+k[15]+3634488961&4294967295,P=N+(R<<14&4294967295|R>>>18),R=I+(N^w&(P^N))+k[4]+3889429448&4294967295,I=P+(R<<20&4294967295|R>>>12),R=w+(P^N&(I^P))+k[9]+568446438&4294967295,w=I+(R<<5&4294967295|R>>>27),R=N+(I^P&(w^I))+k[14]+3275163606&4294967295,N=w+(R<<9&4294967295|R>>>23),R=P+(w^I&(N^w))+k[3]+4107603335&4294967295,P=N+(R<<14&4294967295|R>>>18),R=I+(N^w&(P^N))+k[8]+1163531501&4294967295,I=P+(R<<20&4294967295|R>>>12),R=w+(P^N&(I^P))+k[13]+2850285829&4294967295,w=I+(R<<5&4294967295|R>>>27),R=N+(I^P&(w^I))+k[2]+4243563512&4294967295,N=w+(R<<9&4294967295|R>>>23),R=P+(w^I&(N^w))+k[7]+1735328473&4294967295,P=N+(R<<14&4294967295|R>>>18),R=I+(N^w&(P^N))+k[12]+2368359562&4294967295,I=P+(R<<20&4294967295|R>>>12),R=w+(I^P^N)+k[5]+4294588738&4294967295,w=I+(R<<4&4294967295|R>>>28),R=N+(w^I^P)+k[8]+2272392833&4294967295,N=w+(R<<11&4294967295|R>>>21),R=P+(N^w^I)+k[11]+1839030562&4294967295,P=N+(R<<16&4294967295|R>>>16),R=I+(P^N^w)+k[14]+4259657740&4294967295,I=P+(R<<23&4294967295|R>>>9),R=w+(I^P^N)+k[1]+2763975236&4294967295,w=I+(R<<4&4294967295|R>>>28),R=N+(w^I^P)+k[4]+1272893353&4294967295,N=w+(R<<11&4294967295|R>>>21),R=P+(N^w^I)+k[7]+4139469664&4294967295,P=N+(R<<16&4294967295|R>>>16),R=I+(P^N^w)+k[10]+3200236656&4294967295,I=P+(R<<23&4294967295|R>>>9),R=w+(I^P^N)+k[13]+681279174&4294967295,w=I+(R<<4&4294967295|R>>>28),R=N+(w^I^P)+k[0]+3936430074&4294967295,N=w+(R<<11&4294967295|R>>>21),R=P+(N^w^I)+k[3]+3572445317&4294967295,P=N+(R<<16&4294967295|R>>>16),R=I+(P^N^w)+k[6]+76029189&4294967295,I=P+(R<<23&4294967295|R>>>9),R=w+(I^P^N)+k[9]+3654602809&4294967295,w=I+(R<<4&4294967295|R>>>28),R=N+(w^I^P)+k[12]+3873151461&4294967295,N=w+(R<<11&4294967295|R>>>21),R=P+(N^w^I)+k[15]+530742520&4294967295,P=N+(R<<16&4294967295|R>>>16),R=I+(P^N^w)+k[2]+3299628645&4294967295,I=P+(R<<23&4294967295|R>>>9),R=w+(P^(I|~N))+k[0]+4096336452&4294967295,w=I+(R<<6&4294967295|R>>>26),R=N+(I^(w|~P))+k[7]+1126891415&4294967295,N=w+(R<<10&4294967295|R>>>22),R=P+(w^(N|~I))+k[14]+2878612391&4294967295,P=N+(R<<15&4294967295|R>>>17),R=I+(N^(P|~w))+k[5]+4237533241&4294967295,I=P+(R<<21&4294967295|R>>>11),R=w+(P^(I|~N))+k[12]+1700485571&4294967295,w=I+(R<<6&4294967295|R>>>26),R=N+(I^(w|~P))+k[3]+2399980690&4294967295,N=w+(R<<10&4294967295|R>>>22),R=P+(w^(N|~I))+k[10]+4293915773&4294967295,P=N+(R<<15&4294967295|R>>>17),R=I+(N^(P|~w))+k[1]+2240044497&4294967295,I=P+(R<<21&4294967295|R>>>11),R=w+(P^(I|~N))+k[8]+1873313359&4294967295,w=I+(R<<6&4294967295|R>>>26),R=N+(I^(w|~P))+k[15]+4264355552&4294967295,N=w+(R<<10&4294967295|R>>>22),R=P+(w^(N|~I))+k[6]+2734768916&4294967295,P=N+(R<<15&4294967295|R>>>17),R=I+(N^(P|~w))+k[13]+1309151649&4294967295,I=P+(R<<21&4294967295|R>>>11),R=w+(P^(I|~N))+k[4]+4149444226&4294967295,w=I+(R<<6&4294967295|R>>>26),R=N+(I^(w|~P))+k[11]+3174756917&4294967295,N=w+(R<<10&4294967295|R>>>22),R=P+(w^(N|~I))+k[2]+718787259&4294967295,P=N+(R<<15&4294967295|R>>>17),R=I+(N^(P|~w))+k[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,A.g[2]=A.g[2]+P&4294967295,A.g[3]=A.g[3]+N&4294967295}r.prototype.u=function(A,w){w===void 0&&(w=A.length);for(var I=w-this.blockSize,k=this.B,P=this.h,N=0;N<w;){if(P==0)for(;N<=I;)i(this,A,N),N+=this.blockSize;if(typeof A=="string"){for(;N<w;)if(k[P++]=A.charCodeAt(N++),P==this.blockSize){i(this,k),P=0;break}}else for(;N<w;)if(k[P++]=A[N++],P==this.blockSize){i(this,k),P=0;break}}this.h=P,this.o+=w},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;var I=8*this.o;for(w=A.length-8;w<A.length;++w)A[w]=I&255,I/=256;for(this.u(A),A=Array(16),w=I=0;4>w;++w)for(var k=0;32>k;k+=8)A[I++]=this.g[w]>>>k&255;return A};function s(A,w){var I=a;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=w(A)}function o(A,w){this.h=w;for(var I=[],k=!0,P=A.length-1;0<=P;P--){var N=A[P]|0;k&&N==w||(I[P]=N,k=!1)}this.g=I}var a={};function u(A){return-128<=A&&128>A?s(A,function(w){return new o([w|0],0>w?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return f;if(0>A)return b(c(-A));for(var w=[],I=1,k=0;A>=I;k++)w[k]=A/I|0,I*=4294967296;return new o(w,0)}function h(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return b(h(A.substring(1),w));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(w,8)),k=f,P=0;P<A.length;P+=8){var N=Math.min(8,A.length-P),R=parseInt(A.substring(P,P+N),w);8>N?(N=c(Math.pow(w,N)),k=k.j(N).add(c(R))):(k=k.j(I),k=k.add(c(R)))}return k}var f=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-b(this).m();for(var A=0,w=1,I=0;I<this.g.length;I++){var k=this.i(I);A+=(0<=k?k:4294967296+k)*w,w*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(T(this))return"0";if(x(this))return"-"+b(this).toString(A);for(var w=c(Math.pow(A,6)),I=this,k="";;){var P=D(I,w).g;I=g(I,P.j(w));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=P,T(I))return N+k;for(;6>N.length;)N="0"+N;k=N+k}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function T(A){if(A.h!=0)return!1;for(var w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function x(A){return A.h==-1}t.l=function(A){return A=g(this,A),x(A)?-1:T(A)?0:1};function b(A){for(var w=A.g.length,I=[],k=0;k<w;k++)I[k]=~A.g[k];return new o(I,~A.h).add(m)}t.abs=function(){return x(this)?b(this):this},t.add=function(A){for(var w=Math.max(this.g.length,A.g.length),I=[],k=0,P=0;P<=w;P++){var N=k+(this.i(P)&65535)+(A.i(P)&65535),R=(N>>>16)+(this.i(P)>>>16)+(A.i(P)>>>16);k=R>>>16,N&=65535,R&=65535,I[P]=R<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function g(A,w){return A.add(b(w))}t.j=function(A){if(T(this)||T(A))return f;if(x(this))return x(A)?b(this).j(b(A)):b(b(this).j(A));if(x(A))return b(this.j(b(A)));if(0>this.l(_)&&0>A.l(_))return c(this.m()*A.m());for(var w=this.g.length+A.g.length,I=[],k=0;k<2*w;k++)I[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<A.g.length;P++){var N=this.i(k)>>>16,R=this.i(k)&65535,je=A.i(P)>>>16,Ht=A.i(P)&65535;I[2*k+2*P]+=R*Ht,v(I,2*k+2*P),I[2*k+2*P+1]+=N*Ht,v(I,2*k+2*P+1),I[2*k+2*P+1]+=R*je,v(I,2*k+2*P+1),I[2*k+2*P+2]+=N*je,v(I,2*k+2*P+2)}for(k=0;k<w;k++)I[k]=I[2*k+1]<<16|I[2*k];for(k=w;k<2*w;k++)I[k]=0;return new o(I,0)};function v(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function S(A,w){this.g=A,this.h=w}function D(A,w){if(T(w))throw Error("division by zero");if(T(A))return new S(f,f);if(x(A))return w=D(b(A),w),new S(b(w.g),b(w.h));if(x(w))return w=D(A,b(w)),new S(b(w.g),w.h);if(30<A.g.length){if(x(A)||x(w))throw Error("slowDivide_ only works with positive integers.");for(var I=m,k=w;0>=k.l(A);)I=M(I),k=M(k);var P=U(I,1),N=U(k,1);for(k=U(k,2),I=U(I,2);!T(k);){var R=N.add(k);0>=R.l(A)&&(P=P.add(I),N=R),k=U(k,1),I=U(I,1)}return w=g(A,P.j(w)),new S(P,w)}for(P=f;0<=A.l(w);){for(I=Math.max(1,Math.floor(A.m()/w.m())),k=Math.ceil(Math.log(I)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),N=c(I),R=N.j(w);x(R)||0<R.l(A);)I-=k,N=c(I),R=N.j(w);T(N)&&(N=m),P=P.add(N),A=g(A,R)}return new S(P,A)}t.A=function(A){return D(this,A).h},t.and=function(A){for(var w=Math.max(this.g.length,A.g.length),I=[],k=0;k<w;k++)I[k]=this.i(k)&A.i(k);return new o(I,this.h&A.h)},t.or=function(A){for(var w=Math.max(this.g.length,A.g.length),I=[],k=0;k<w;k++)I[k]=this.i(k)|A.i(k);return new o(I,this.h|A.h)},t.xor=function(A){for(var w=Math.max(this.g.length,A.g.length),I=[],k=0;k<w;k++)I[k]=this.i(k)^A.i(k);return new o(I,this.h^A.h)};function M(A){for(var w=A.g.length+1,I=[],k=0;k<w;k++)I[k]=A.i(k)<<1|A.i(k-1)>>>31;return new o(I,A.h)}function U(A,w){var I=w>>5;w%=32;for(var k=A.g.length-I,P=[],N=0;N<k;N++)P[N]=0<w?A.i(N+I)>>>w|A.i(N+I+1)<<32-w:A.i(N+I);return new o(P,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,gi=o}).apply(typeof Kv<"u"?Kv:typeof self<"u"?self:typeof window<"u"?window:{});var Dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fT,No,pT,iu,Pf,mT,gT,yT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dl=="object"&&Dl];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var O=l[y];if(!(O in p))break e;p=p[O]}l=l[l.length-1],y=p[l],d=d(y),d!=y&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,y=!1,O={next:function(){if(!y&&p<l.length){var L=p++;return{value:d(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),l.apply(d,O)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function _(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function T(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,O,L){for(var B=Array(arguments.length-2),me=2;me<arguments.length;me++)B[me-2]=arguments[me];return d.prototype[O].apply(y,B)}}function x(l){const d=l.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=l[y];return p}return[]}function b(l,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const O=l.length||0,L=y.length||0;l.length=O+L;for(let B=0;B<L;B++)l[O+B]=y[B]}else l.push(y)}}class g{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(l,d,p){for(const y in l)d.call(p,l[y],y,l)}function A(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function w(l){const d={};for(const p in l)d[p]=l[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,d){let p,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(p in y)l[p]=y[p];for(let L=0;L<I.length;L++)p=I[L],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function P(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function R(){var l=G;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class je{constructor(){this.h=this.g=null}add(d,p){const y=Ht.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Ht=new g(()=>new gn,l=>l.reset());class gn{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Gt,$=!1,G=new je,J=()=>{const l=a.Promise.resolve(void 0);Gt=()=>{l.then(se)}};var se=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){N(p)}var d=Ht;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}$=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var On=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Ln(l,d){if(Ne.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(M){e:{try{D(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Vn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ln.aa.h.call(this)}}T(Ln,Ne);var Vn={2:"touch",3:"pen",4:"mouse"};Ln.prototype.h=function(){Ln.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),AS=0;function kS(l,d,p,y,O){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=O,this.key=++AS,this.da=this.fa=!1}function Ja(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Za(l){this.src=l,this.g={},this.h=0}Za.prototype.add=function(l,d,p,y,O){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var B=cd(l,d,y,O);return-1<B?(d=l[B],p||(d.fa=!1)):(d=new kS(d,this.src,L,!!y,O),d.fa=p,l.push(d)),d};function ud(l,d){var p=d.type;if(p in l.g){var y=l.g[p],O=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=O)&&Array.prototype.splice.call(y,O,1),L&&(Ja(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function cd(l,d,p,y){for(var O=0;O<l.length;++O){var L=l[O];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==y)return O}return-1}var dd="closure_lm_"+(1e6*Math.random()|0),hd={};function Eg(l,d,p,y,O){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Eg(l,d[L],p,y,O);return null}return p=Sg(p),l&&l[Mn]?l.K(d,p,c(y)?!!y.capture:!!y,O):RS(l,d,p,!1,y,O)}function RS(l,d,p,y,O,L){if(!d)throw Error("Invalid event type");var B=c(O)?!!O.capture:!!O,me=pd(l);if(me||(l[dd]=me=new Za(l)),p=me.add(d,p,y,B,L),p.proxy)return p;if(y=xS(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)On||(O=B),O===void 0&&(O=!1),l.addEventListener(d.toString(),y,O);else if(l.attachEvent)l.attachEvent(Ig(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function xS(){function l(p){return d.call(l.src,l.listener,p)}const d=bS;return l}function Tg(l,d,p,y,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)Tg(l,d[L],p,y,O);else y=c(y)?!!y.capture:!!y,p=Sg(p),l&&l[Mn]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],p=cd(L,p,y,O),-1<p&&(Ja(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=pd(l))&&(d=l.g[d.toString()],l=-1,d&&(l=cd(d,p,y,O)),(p=-1<l?d[l]:null)&&fd(p))}function fd(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Mn])ud(d.i,l);else{var p=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(p,y,l.capture):d.detachEvent?d.detachEvent(Ig(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=pd(d))?(ud(p,l),p.h==0&&(p.src=null,d[dd]=null)):Ja(l)}}}function Ig(l){return l in hd?hd[l]:hd[l]="on"+l}function bS(l,d){if(l.da)l=!0;else{d=new Ln(d,this);var p=l.listener,y=l.ha||l.src;l.fa&&fd(l),l=p.call(y,d)}return l}function pd(l){return l=l[dd],l instanceof Za?l:null}var md="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sg(l){return typeof l=="function"?l:(l[md]||(l[md]=function(d){return l.handleEvent(d)}),l[md])}function st(){pe.call(this),this.i=new Za(this),this.M=this,this.F=null}T(st,pe),st.prototype[Mn]=!0,st.prototype.removeEventListener=function(l,d,p,y){Tg(this,l,d,p,y)};function gt(l,d){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new Ne(d,l);else if(d instanceof Ne)d.target=d.target||l;else{var O=d;d=new Ne(y,l),k(d,O)}if(O=!0,p)for(var L=p.length-1;0<=L;L--){var B=d.g=p[L];O=el(B,y,!0,d)&&O}if(B=d.g=l,O=el(B,y,!0,d)&&O,O=el(B,y,!1,d)&&O,p)for(L=0;L<p.length;L++)B=d.g=p[L],O=el(B,y,!1,d)&&O}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],y=0;y<p.length;y++)Ja(p[y]);delete l.g[d],l.h--}}this.F=null},st.prototype.K=function(l,d,p,y){return this.i.add(String(l),d,!1,p,y)},st.prototype.L=function(l,d,p,y){return this.i.add(String(l),d,!0,p,y)};function el(l,d,p,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,L=0;L<d.length;++L){var B=d[L];if(B&&!B.da&&B.capture==p){var me=B.listener,Ke=B.ha||B.src;B.fa&&ud(l.i,B),O=me.call(Ke,y)!==!1&&O}}return O&&!y.defaultPrevented}function Ag(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function kg(l){l.g=Ag(()=>{l.g=null,l.i&&(l.i=!1,kg(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class CS extends pe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:kg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zs(l){pe.call(this),this.h=l,this.g={}}T(Zs,pe);var Rg=[];function xg(l){U(l.g,function(d,p){this.g.hasOwnProperty(p)&&fd(d)},l),l.g={}}Zs.prototype.N=function(){Zs.aa.N.call(this),xg(this)},Zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gd=a.JSON.stringify,PS=a.JSON.parse,NS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function yd(){}yd.prototype.h=null;function bg(l){return l.h||(l.h=l.i())}function Cg(){}var eo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vd(){Ne.call(this,"d")}T(vd,Ne);function _d(){Ne.call(this,"c")}T(_d,Ne);var ti={},Pg=null;function tl(){return Pg=Pg||new st}ti.La="serverreachability";function Ng(l){Ne.call(this,ti.La,l)}T(Ng,Ne);function to(l){const d=tl();gt(d,new Ng(d))}ti.STAT_EVENT="statevent";function Dg(l,d){Ne.call(this,ti.STAT_EVENT,l),this.stat=d}T(Dg,Ne);function yt(l){const d=tl();gt(d,new Dg(d,l))}ti.Ma="timingevent";function Og(l,d){Ne.call(this,ti.Ma,l),this.size=d}T(Og,Ne);function no(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function ro(){this.g=!0}ro.prototype.xa=function(){this.g=!1};function DS(l,d,p,y,O,L){l.info(function(){if(l.g)if(L)for(var B="",me=L.split("&"),Ke=0;Ke<me.length;Ke++){var le=me[Ke].split("=");if(1<le.length){var ot=le[0];le=le[1];var at=ot.split("_");B=2<=at.length&&at[1]=="type"?B+(ot+"="+le+"&"):B+(ot+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+d+`
`+p+`
`+B})}function OS(l,d,p,y,O,L,B){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+d+`
`+p+`
`+L+" "+B})}function zi(l,d,p,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+VS(l,p)+(y?" "+y:"")})}function LS(l,d){l.info(function(){return"TIMEOUT: "+d})}ro.prototype.info=function(){};function VS(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<O.length;B++)O[B]=""}}}}return gd(p)}catch{return d}}var nl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wd;function rl(){}T(rl,yd),rl.prototype.g=function(){return new XMLHttpRequest},rl.prototype.i=function(){return{}},wd=new rl;function ur(l,d,p,y){this.j=l,this.i=d,this.l=p,this.R=y||1,this.U=new Zs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vg}function Vg(){this.i=null,this.g="",this.h=!1}var Mg={},Ed={};function Td(l,d,p){l.L=1,l.v=al(Un(d)),l.m=p,l.P=!0,Ug(l,null)}function Ug(l,d){l.F=Date.now(),il(l),l.A=Un(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Jg(p.i,"t",y),l.C=0,p=l.j.J,l.h=new Vg,l.g=gy(l.j,p?d:null,!l.m),0<l.O&&(l.M=new CS(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,y=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Rg[0]=O.toString()),O=Rg);for(var L=0;L<O.length;L++){var B=Eg(p,O[L],y||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),to(),DS(l.i,l.u,l.A,l.l,l.R,l.m)}ur.prototype.ca=function(l){l=l.target;const d=this.M;d&&Fn(l)==3?d.j():this.Y(l)},ur.prototype.Y=function(l){try{if(l==this.g)e:{const at=Fn(this.g);var d=this.g.Ba();const Hi=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||sy(this.g)))){this.J||at!=4||d==7||(d==8||0>=Hi?to(3):to(2)),Id(this);var p=this.g.Z();this.X=p;t:if(Fg(this)){var y=sy(this.g);l="";var O=y.length,L=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),io(this);var B="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(L&&d==O-1)});y.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,OS(this.i,this.u,this.A,this.l,this.R,at,p),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ke=this.g;if((me=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(me)){var le=me;break t}}le=null}if(p=le)zi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sd(this,p);else{this.o=!1,this.s=3,yt(12),ni(this),io(this);break e}}if(this.P){p=!0;let nn;for(;!this.J&&this.C<B.length;)if(nn=MS(this,B),nn==Ed){at==4&&(this.s=4,yt(14),p=!1),zi(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Mg){this.s=4,yt(15),zi(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else zi(this.i,this.l,nn,null),Sd(this,nn);if(Fg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||B.length!=0||this.h.h||(this.s=1,yt(16),p=!1),this.o=this.o&&p,!p)zi(this.i,this.l,B,"[Invalid Chunked Response]"),ni(this),io(this);else if(0<B.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Cd(ot),ot.M=!0,yt(11))}}else zi(this.i,this.l,B,null),Sd(this,B);at==4&&ni(this),this.o&&!this.J&&(at==4?hy(this.j,this):(this.o=!1,il(this)))}else eA(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),ni(this),io(this)}}}catch{}finally{}};function Fg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function MS(l,d){var p=l.C,y=d.indexOf(`
`,p);return y==-1?Ed:(p=Number(d.substring(p,y)),isNaN(p)?Mg:(y+=1,y+p>d.length?Ed:(d=d.slice(y,y+p),l.C=y+p,d)))}ur.prototype.cancel=function(){this.J=!0,ni(this)};function il(l){l.S=Date.now()+l.I,jg(l,l.I)}function jg(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=no(m(l.ba,l),d)}function Id(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ur.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(LS(this.i,this.A),this.L!=2&&(to(),yt(17)),ni(this),this.s=2,io(this)):jg(this,this.S-l)};function io(l){l.j.G==0||l.J||hy(l.j,l)}function ni(l){Id(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,xg(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Sd(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Ad(p.h,l))){if(!l.K&&Ad(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)fl(p),dl(p);else break e;bd(p),yt(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=no(m(p.Za,p),6e3));if(1>=zg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ii(p,11)}else if((l.K||p.g==l)&&fl(p),!v(d))for(O=p.Da.g.parse(d),d=0;d<O.length;d++){let le=O[d];if(p.T=le[0],le=le[1],p.G==2)if(le[0]=="c"){p.K=le[1],p.ia=le[2];const ot=le[3];ot!=null&&(p.la=ot,p.j.info("VER="+p.la));const at=le[4];at!=null&&(p.Aa=at,p.j.info("SVER="+p.Aa));const Hi=le[5];Hi!=null&&typeof Hi=="number"&&0<Hi&&(y=1.5*Hi,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const nn=l.g;if(nn){const ml=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ml){var L=y.h;L.g||ml.indexOf("spdy")==-1&&ml.indexOf("quic")==-1&&ml.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(kd(L,L.h),L.h=null))}if(y.D){const Pd=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pd&&(y.ya=Pd,ve(y.I,y.D,Pd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var B=l;if(y.qa=my(y,y.J?y.ia:null,y.W),B.K){Wg(y.h,B);var me=B,Ke=y.L;Ke&&(me.I=Ke),me.B&&(Id(me),il(me)),y.g=B}else cy(y);0<p.i.length&&hl(p)}else le[0]!="stop"&&le[0]!="close"||ii(p,7);else p.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?ii(p,7):xd(p):le[0]!="noop"&&p.l&&p.l.ta(le),p.v=0)}}to(4)}catch{}}var US=class{constructor(l,d){this.g=l,this.map=d}};function Bg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $g(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function zg(l){return l.h?1:l.g?l.g.size:0}function Ad(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function kd(l,d){l.g?l.g.add(d):l.h=d}function Wg(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Bg.prototype.cancel=function(){if(this.i=qg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function qg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return x(l.i)}function FS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,y=0;y<p;y++)d.push(l[y]);return d}d=[],p=0;for(y in l)d[p++]=l[y];return d}function jS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const y in l)d[p++]=y;return d}}}function Hg(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=jS(l),y=FS(l),O=y.length,L=0;L<O;L++)d.call(void 0,y[L],p&&p[L],l)}var Gg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BS(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),O=null;if(0<=y){var L=l[p].substring(0,y);O=l[p].substring(y+1)}else L=l[p];d(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ri(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ri){this.h=l.h,sl(this,l.j),this.o=l.o,this.g=l.g,ol(this,l.s),this.l=l.l;var d=l.i,p=new ao;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Kg(this,p),this.m=l.m}else l&&(d=String(l).match(Gg))?(this.h=!1,sl(this,d[1]||"",!0),this.o=so(d[2]||""),this.g=so(d[3]||"",!0),ol(this,d[4]),this.l=so(d[5]||"",!0),Kg(this,d[6]||"",!0),this.m=so(d[7]||"")):(this.h=!1,this.i=new ao(null,this.h))}ri.prototype.toString=function(){var l=[],d=this.j;d&&l.push(oo(d,Qg,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(oo(d,Qg,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(oo(p,p.charAt(0)=="/"?WS:zS,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",oo(p,HS)),l.join("")};function Un(l){return new ri(l)}function sl(l,d,p){l.j=p?so(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function ol(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Kg(l,d,p){d instanceof ao?(l.i=d,GS(l.i,l.h)):(p||(d=oo(d,qS)),l.i=new ao(d,l.h))}function ve(l,d,p){l.i.set(d,p)}function al(l){return ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function so(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function oo(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,$S),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $S(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Qg=/[#\/\?@]/g,zS=/[#\?:]/g,WS=/[#\?]/g,qS=/[#\?@]/g,HS=/#/g;function ao(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function cr(l){l.g||(l.g=new Map,l.h=0,l.i&&BS(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=ao.prototype,t.add=function(l,d){cr(this),this.i=null,l=Wi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Yg(l,d){cr(l),d=Wi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Xg(l,d){return cr(l),d=Wi(l,d),l.g.has(d)}t.forEach=function(l,d){cr(this),this.g.forEach(function(p,y){p.forEach(function(O){l.call(d,O,y,this)},this)},this)},t.na=function(){cr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const O=l[y];for(let L=0;L<O.length;L++)p.push(d[y])}return p},t.V=function(l){cr(this);let d=[];if(typeof l=="string")Xg(this,l)&&(d=d.concat(this.g.get(Wi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return cr(this),this.i=null,l=Wi(this,l),Xg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Jg(l,d,p){Yg(l,d),0<p.length&&(l.i=null,l.g.set(Wi(l,d),x(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const L=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var O=L;B[y]!==""&&(O+="="+encodeURIComponent(String(B[y]))),l.push(O)}}return this.i=l.join("&")};function Wi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function GS(l,d){d&&!l.j&&(cr(l),l.i=null,l.g.forEach(function(p,y){var O=y.toLowerCase();y!=O&&(Yg(this,y),Jg(this,O,p))},l)),l.j=d}function KS(l,d){const p=new ro;if(a.Image){const y=new Image;y.onload=_(dr,p,"TestLoadImage: loaded",!0,d,y),y.onerror=_(dr,p,"TestLoadImage: error",!1,d,y),y.onabort=_(dr,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=_(dr,p,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function QS(l,d){const p=new ro,y=new AbortController,O=setTimeout(()=>{y.abort(),dr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(O),L.ok?dr(p,"TestPingServer: ok",!0,d):dr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),dr(p,"TestPingServer: error",!1,d)})}function dr(l,d,p,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(p)}catch{}}function YS(){this.g=new NS}function XS(l,d,p){const y=p||"";try{Hg(l,function(O,L){let B=O;c(O)&&(B=gd(O)),d.push(y+L+"="+encodeURIComponent(B))})}catch(O){throw d.push(y+"type="+encodeURIComponent("_badmap")),O}}function ll(l){this.l=l.Ub||null,this.j=l.eb||!1}T(ll,yd),ll.prototype.g=function(){return new ul(this.l,this.j)},ll.prototype.i=function(l){return function(){return l}}({});function ul(l,d){st.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ul,st),t=ul.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,uo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,uo(this)),this.g&&(this.readyState=3,uo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?lo(this):uo(this),this.readyState==3&&Zg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,lo(this))},t.Qa=function(l){this.g&&(this.response=l,lo(this))},t.ga=function(){this.g&&lo(this)};function lo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,uo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function uo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ey(l){let d="";return U(l,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function Rd(l,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=ey(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):ve(l,d,p))}function Re(l){st.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Re,st);var JS=/^https?$/i,ZS=["POST","PUT"];t=Re.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wd.g(),this.v=this.o?bg(this.o):bg(wd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){ty(this,L);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)p.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ZS,d,void 0))||y||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of p)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{iy(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){ty(this,L)}};function ty(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,ny(l),cl(l)}function ny(l){l.A||(l.A=!0,gt(l,"complete"),gt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,gt(this,"complete"),gt(this,"abort"),cl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cl(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ry(this):this.bb())},t.bb=function(){ry(this)};function ry(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Fn(l)!=4||l.Z()!=2)){if(l.u&&Fn(l)==4)Ag(l.Ea,0,l);else if(gt(l,"readystatechange"),Fn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=B===0){var O=String(l.D).match(Gg)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),y=!JS.test(O?O.toLowerCase():"")}p=y}if(p)gt(l,"complete"),gt(l,"success");else{l.m=6;try{var L=2<Fn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",ny(l)}}finally{cl(l)}}}}function cl(l,d){if(l.g){iy(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||gt(l,"ready");try{p.onreadystatechange=y}catch{}}}function iy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Fn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),PS(d)}};function sy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function eA(l){const d={};l=(l.g&&2<=Fn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(v(l[y]))continue;var p=P(l[y]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[O]||[];d[O]=L,L.push(p)}A(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function co(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function oy(l){this.Aa=0,this.i=[],this.j=new ro,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=co("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=co("baseRetryDelayMs",5e3,l),this.cb=co("retryDelaySeedMs",1e4,l),this.Wa=co("forwardChannelMaxRetries",2,l),this.wa=co("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Bg(l&&l.concurrentRequestLimit),this.Da=new YS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=oy.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,y){yt(0),this.W=l,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=my(this,null,this.W),hl(this)};function xd(l){if(ay(l),l.G==3){var d=l.U++,p=Un(l.I);if(ve(p,"SID",l.K),ve(p,"RID",d),ve(p,"TYPE","terminate"),ho(l,p),d=new ur(l,l.j,d),d.L=2,d.v=al(Un(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=gy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),il(d)}py(l)}function dl(l){l.g&&(Cd(l),l.g.cancel(),l.g=null)}function ay(l){dl(l),l.u&&(a.clearTimeout(l.u),l.u=null),fl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function hl(l){if(!$g(l.h)&&!l.s){l.s=!0;var d=l.Ga;Gt||J(),$||(Gt(),$=!0),G.add(d,l),l.B=0}}function tA(l,d){return zg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=no(m(l.Ga,l,d),fy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new ur(this,this.j,l);let L=this.o;if(this.S&&(L?(L=w(L),k(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=uy(this,O,d),p=Un(this.I),ve(p,"RID",l),ve(p,"CVER",22),this.D&&ve(p,"X-HTTP-Session-Id",this.D),ho(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(ey(L)))+"&"+d:this.m&&Rd(p,this.m,L)),kd(this.h,O),this.Ua&&ve(p,"TYPE","init"),this.P?(ve(p,"$req",d),ve(p,"SID","null"),O.T=!0,Td(O,p,null)):Td(O,p,d),this.G=2}}else this.G==3&&(l?ly(this,l):this.i.length==0||$g(this.h)||ly(this))};function ly(l,d){var p;d?p=d.l:p=l.U++;const y=Un(l.I);ve(y,"SID",l.K),ve(y,"RID",p),ve(y,"AID",l.T),ho(l,y),l.m&&l.o&&Rd(y,l.m,l.o),p=new ur(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=uy(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),kd(l.h,p),Td(p,y,d)}function ho(l,d){l.H&&U(l.H,function(p,y){ve(d,y,p)}),l.l&&Hg({},function(p,y){ve(d,y,p)})}function uy(l,d,p){p=Math.min(l.i.length,p);var y=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let L=-1;for(;;){const B=["count="+p];L==-1?0<p?(L=O[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let me=!0;for(let Ke=0;Ke<p;Ke++){let le=O[Ke].g;const ot=O[Ke].map;if(le-=L,0>le)L=Math.max(0,O[Ke].g-100),me=!1;else try{XS(ot,B,"req"+le+"_")}catch{y&&y(ot)}}if(me){y=B.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,y}function cy(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Gt||J(),$||(Gt(),$=!0),G.add(d,l),l.v=0}}function bd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=no(m(l.Fa,l),fy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,dy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=no(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),dl(this),dy(this))};function Cd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function dy(l){l.g=new ur(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Un(l.qa);ve(d,"RID","rpc"),ve(d,"SID",l.K),ve(d,"AID",l.T),ve(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ve(d,"TO",l.ja),ve(d,"TYPE","xmlhttp"),ho(l,d),l.m&&l.o&&Rd(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=al(Un(d)),p.m=null,p.P=!0,Ug(p,l)}t.Za=function(){this.C!=null&&(this.C=null,dl(this),bd(this),yt(19))};function fl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function hy(l,d){var p=null;if(l.g==d){fl(l),Cd(l),l.g=null;var y=2}else if(Ad(l.h,d))p=d.D,Wg(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var O=l.B;y=tl(),gt(y,new Og(y,p)),hl(l)}else cy(l);else if(O=d.s,O==3||O==0&&0<d.X||!(y==1&&tA(l,d)||y==2&&bd(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),O){case 1:ii(l,5);break;case 4:ii(l,10);break;case 3:ii(l,6);break;default:ii(l,2)}}}function fy(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function ii(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),y=l.Xa;const O=!y;y=new ri(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||sl(y,"https"),al(y),O?KS(y.toString(),p):QS(y.toString(),p)}else yt(2);l.G=0,l.l&&l.l.sa(d),py(l),ay(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function py(l){if(l.G=0,l.ka=[],l.l){const d=qg(l.h);(d.length!=0||l.i.length!=0)&&(b(l.ka,d),b(l.ka,l.i),l.h.i.length=0,x(l.i),l.i.length=0),l.l.ra()}}function my(l,d,p){var y=p instanceof ri?Un(p):new ri(p);if(y.g!="")d&&(y.g=d+"."+y.g),ol(y,y.s);else{var O=a.location;y=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var L=new ri(null);y&&sl(L,y),d&&(L.g=d),O&&ol(L,O),p&&(L.l=p),y=L}return p=l.D,d=l.ya,p&&d&&ve(y,p,d),ve(y,"VER",l.la),ho(l,y),y}function gy(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Re(new ll({eb:p})):new Re(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yy(){}t=yy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function pl(){}pl.prototype.g=function(l,d){return new Nt(l,d)};function Nt(l,d){st.call(this),this.g=new oy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!v(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new qi(this)}T(Nt,st),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){xd(this.g)},Nt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=gd(l),l=p);d.i.push(new US(d.Ya++,l)),d.G==3&&hl(d)},Nt.prototype.N=function(){this.g.l=null,delete this.j,xd(this.g),delete this.g,Nt.aa.N.call(this)};function vy(l){vd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T(vy,vd);function _y(){_d.call(this),this.status=1}T(_y,_d);function qi(l){this.g=l}T(qi,yy),qi.prototype.ua=function(){gt(this.g,"a")},qi.prototype.ta=function(l){gt(this.g,new vy(l))},qi.prototype.sa=function(l){gt(this.g,new _y)},qi.prototype.ra=function(){gt(this.g,"b")},pl.prototype.createWebChannel=pl.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,yT=function(){return new pl},gT=function(){return tl()},mT=ti,Pf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},nl.NO_ERROR=0,nl.TIMEOUT=8,nl.HTTP_ERROR=6,iu=nl,Lg.COMPLETE="complete",pT=Lg,Cg.EventType=eo,eo.OPEN="a",eo.CLOSE="b",eo.ERROR="c",eo.MESSAGE="d",st.prototype.listen=st.prototype.K,No=Cg,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,fT=Re}).apply(typeof Dl<"u"?Dl:typeof self<"u"?self:typeof window<"u"?window:{});const Qv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Pc("@firebase/firestore");function Eo(){return Si.logLevel}function q(t,...e){if(Si.logLevel<=ne.DEBUG){const n=e.map(sm);Si.debug(`Firestore (${Gs}): ${t}`,...n)}}function nr(t,...e){if(Si.logLevel<=ne.ERROR){const n=e.map(sm);Si.error(`Firestore (${Gs}): ${t}`,...n)}}function Ds(t,...e){if(Si.logLevel<=ne.WARN){const n=e.map(sm);Si.warn(`Firestore (${Gs}): ${t}`,...n)}}function sm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: `+t;throw nr(e),new Error(e)}function ae(t,e){t||K()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class _C{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wC{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new An;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new An,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new An)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new vT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new dt(e)}}class EC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new EC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new IC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Os(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new de(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new de(0,0))}static max(){return new Q(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return va.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof va?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends va{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const kC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends va{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return kC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ge.fromString(e))}static fromName(e){return new H(ge.fromString(e).popFirst(5))}static empty(){return new H(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ge(e.slice()))}}function RC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new Wr(i,H.empty(),e)}function xC(t){return new Wr(t.readTime,t.key,-1)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(Q.min(),H.empty(),-1)}static max(){return new Wr(Q.max(),H.empty(),-1)}}function bC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==CC)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function NC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ma(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}om.oe=-1;function Ua(t){return t==null}function Hu(t){return t===0&&1/t==-1/0}function DC(t){return typeof t=="number"&&Number.isInteger(t)&&!Hu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ol(this.root,e,this.comparator,!0)}}class Ol{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xv(this.data.getIterator())}getIteratorFrom(e){return new Xv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Xv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new tt(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ET("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const OC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=OC.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ai(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lm(t){const e=t.mapValue.fields.__previous_value__;return am(e)?lm(e):e}function _a(t){const e=qr(t.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class wa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?am(t)?4:MC(t)?9007199254740991:VC(t)?10:11:K()}function bn(t,e){if(t===e)return!0;const n=ki(t);if(n!==ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _a(t).isEqual(_a(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qr(i.timestampValue),a=qr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ai(i.bytesValue).isEqual(Ai(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?Hu(o)===Hu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Yv(o)!==Yv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!bn(o[u],a[u])))return!1;return!0}(t,e);default:return K()}}function Ea(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=ki(t),r=ki(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Jv(t.timestampValue,e.timestampValue);case 4:return Jv(_a(t),_a(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ai(s),u=Ai(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ce(a[c],u[c]);if(h!==0)return h}return ce(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(Oe(s.latitude),Oe(o.latitude));return a!==0?a:ce(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=m.value)===null||u===void 0?void 0:u.arrayValue,x=ce(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return x!==0?x:Zv(_,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ll.mapValue&&o===Ll.mapValue)return 0;if(s===Ll.mapValue)return 1;if(o===Ll.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=ce(u[f],h[f]);if(m!==0)return m;const _=Ls(a[u[f]],c[h[f]]);if(_!==0)return _}return ce(u.length,h.length)}(t.mapValue,e.mapValue);default:throw K()}}function Jv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=qr(t),r=qr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Zv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ls(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function Vs(t){return Nf(t)}function Nf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Nf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Nf(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function e_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Df(t){return!!t&&"integerValue"in t}function um(t){return!!t&&"arrayValue"in t}function t_(t){return!!t&&"nullValue"in t}function n_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function su(t){return!!t&&"mapValue"in t}function VC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(qo(this.value))}}function TT(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new Xe([n]);if(su(r)){const s=TT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new He(e,0,Q.min(),Q.min(),Q.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new He(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new He(e,2,n,Q.min(),Q.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new He(e,3,n,Q.min(),Q.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n){this.position=e,this.inclusive=n}}function r_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function i_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n="asc"){this.field=e,this.dir=n}}function UC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{}class Fe extends IT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jC(e,n,r):n==="array-contains"?new zC(e,r):n==="in"?new WC(e,r):n==="not-in"?new qC(e,r):n==="array-contains-any"?new HC(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BC(e,r):new $C(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ls(n,this.value)):n!==null&&ki(this.value)===ki(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends IT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return ST(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ST(t){return t.op==="and"}function AT(t){return FC(t)&&ST(t)}function FC(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Of(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(AT(t))return t.filters.map(e=>Of(e)).join(",");{const e=t.filters.map(n=>Of(n)).join(",");return`${t.op}(${e})`}}function kT(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&bn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&kT(o,i.filters[a]),!0):!1}(t,e):void K()}function RT(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(RT).join(" ,")+"}"}(t):"Filter"}class jC extends Fe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class BC extends Fe{constructor(e,n){super(e,"in",n),this.keys=xT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $C extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=xT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class zC extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return um(n)&&Ea(n.arrayValue,this.value)}}class WC extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ea(this.value.arrayValue,n)}}class qC extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ea(this.value.arrayValue,n)}}class HC extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!um(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function s_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new GC(t,e,n,r,i,s,o)}function cm(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Of(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vs(r)).join(",")),e.ue=n}return e.ue}function dm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i_(t.startAt,e.startAt)&&i_(t.endAt,e.endAt)}function Lf(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KC(t,e,n,r,i,s,o,a){return new Ks(t,e,n,r,i,s,o,a)}function Nc(t){return new Ks(t)}function o_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bT(t){return t.collectionGroup!==null}function Ho(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ta(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new Ta(Xe.keyField(),r))}return e.ce}function kn(t){const e=X(t);return e.le||(e.le=QC(e,Ho(t))),e.le}function QC(t,e){if(t.limitType==="F")return s_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ta(i.field,s)});const n=t.endAt?new Gu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gu(t.startAt.position,t.startAt.inclusive):null;return s_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vf(t,e){const n=t.filters.concat([e]);return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Mf(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return dm(kn(t),kn(e))&&t.limitType===e.limitType}function CT(t){return`${cm(kn(t))}|lt:${t.limitType}`}function Qi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>RT(i)).join(", ")}]`),Ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vs(i)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=r_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ho(r),i)||r.endAt&&!function(o,a,u){const c=r_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ho(r),i))}(t,e)}function YC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PT(t){return(e,n)=>{let r=!1;for(const i of Ho(t)){const s=XC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XC(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ls(u,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=new ke(H.comparator);function rr(){return JC}const NT=new ke(H.comparator);function Do(...t){let e=NT;for(const n of t)e=e.insert(n.key,n);return e}function DT(t){let e=NT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hi(){return Go()}function OT(){return Go()}function Go(){return new Qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZC=new ke(H.comparator),eP=new tt(H.comparator);function te(...t){let e=eP;for(const n of t)e=e.add(n);return e}const tP=new tt(ce);function nP(){return tP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hu(e)?"-0":e}}function LT(t){return{integerValue:""+t}}function VT(t,e){return DC(e)?LT(e):hm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this._=void 0}}function rP(t,e,n){return t instanceof Ia?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&am(s)&&(s=lm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ms?UT(t,e):t instanceof Us?FT(t,e):function(i,s){const o=MT(i,s),a=a_(o)+a_(i.Pe);return Df(o)&&Df(i.Pe)?LT(a):hm(i.serializer,a)}(t,e)}function iP(t,e,n){return t instanceof Ms?UT(t,e):t instanceof Us?FT(t,e):n}function MT(t,e){return t instanceof Sa?function(r){return Df(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ia extends Lc{}class Ms extends Lc{constructor(e){super(),this.elements=e}}function UT(t,e){const n=jT(e);for(const r of t.elements)n.some(i=>bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Us extends Lc{constructor(e){super(),this.elements=e}}function FT(t,e){let n=jT(e);for(const r of t.elements)n=n.filter(i=>!bn(i,r));return{arrayValue:{values:n}}}class Sa extends Lc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function a_(t){return Oe(t.integerValue||t.doubleValue)}function jT(t){return um(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.field=e,this.transform=n}}function sP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ms&&i instanceof Ms||r instanceof Us&&i instanceof Us?Os(r.elements,i.elements,bn):r instanceof Sa&&i instanceof Sa?bn(r.Pe,i.Pe):r instanceof Ia&&i instanceof Ia}(t.transform,e.transform)}class oP{constructor(e,n){this.version=e,this.transformResults=n}}class Je{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Je}static exists(e){return new Je(void 0,e)}static updateTime(e){return new Je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mc{}function BT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uc(t.key,Je.none()):new Fa(t.key,t.data,Je.none());{const n=t.data,r=wt.empty();let i=new tt(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new Lt(i.toArray()),Je.none())}}function aP(t,e,n){t instanceof Fa?function(i,s,o){const a=i.value.clone(),u=u_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(i,s,o){if(!ou(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=u_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll($T(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof Fa?function(s,o,a,u){if(!ou(s.precondition,o))return a;const c=s.value.clone(),h=c_(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(s,o,a,u){if(!ou(s.precondition,o))return a;const c=c_(s.fieldTransforms,u,o),h=o.data;return h.setAll($T(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return ou(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=MT(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function l_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Os(r,i,(s,o)=>sP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fa extends Mc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends Mc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $T(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function u_(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,iP(o,a,n[i]))}return r}function c_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rP(s,o,e))}return r}class Uc extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zT extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=BT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,r)=>l_(n,r))&&Os(this.baseMutations,e.baseMutations,(n,r)=>l_(n,r))}}class fm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return ZC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new fm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,ie;function WT(t){switch(t){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function qT(t){if(t===void 0)return nr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Me.OK:return V.OK;case Me.CANCELLED:return V.CANCELLED;case Me.UNKNOWN:return V.UNKNOWN;case Me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Me.INTERNAL:return V.INTERNAL;case Me.UNAVAILABLE:return V.UNAVAILABLE;case Me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Me.NOT_FOUND:return V.NOT_FOUND;case Me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Me.ABORTED:return V.ABORTED;case Me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Me.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(ie=Me||(Me={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new gi([4294967295,4294967295],0);function d_(t){const e=hP().encode(t),n=new hT;return n.update(e),new Uint8Array(n.digest())}function h_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new gi([n,r],0),new gi([i,s],0)]}class pm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Oo(`Invalid padding: ${n}`);if(r<0)throw new Oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Oo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Oo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=gi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(gi.fromNumber(r)));return i.compare(fP)===1&&(i=new gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=d_(e),[r,i]=h_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=d_(e),[r,i]=h_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fc(Q.min(),i,new ke(ce),rr(),te())}}class ja{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ja(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class HT{constructor(e,n){this.targetId=e,this.me=n}}class GT{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class f_{constructor(){this.fe=0,this.ge=m_(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new ja(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=m_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pP{constructor(e){this.Le=e,this.Be=new Map,this.ke=rr(),this.qe=p_(),this.Qe=new ke(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Lf(s))if(r===0){const o=new H(s.path);this.Ue(n,o,He.newNoDocument(o,Q.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ai(r).toUint8Array()}catch(u){if(u instanceof ET)return Ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new pm(o,i,s)}catch(u){return Ds(u instanceof Oo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Lf(a.target)){const u=new H(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,He.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Fc(e,n,this.Qe,this.ke,r);return this.ke=rr(),this.qe=p_(),this.Qe=new ke(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new f_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new f_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function p_(){return new ke(H.comparator)}function m_(){return new ke(H.comparator)}const mP={asc:"ASCENDING",desc:"DESCENDING"},gP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yP={and:"AND",or:"OR"};class vP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uf(t,e){return t.useProto3Json||Ua(e)?e:{value:e}}function Ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _P(t,e){return Ku(t,e.toTimestamp())}function Ft(t){return ae(!!t),Q.fromTimestamp(function(n){const r=qr(n);return new de(r.seconds,r.nanos)}(t))}function mm(t,e){return Ff(t,e).canonicalString()}function Ff(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function QT(t){const e=ge.fromString(t);return ae(tI(e)),e}function Qu(t,e){return mm(t.databaseId,e.path)}function Qo(t,e){const n=QT(e);if(n.get(1)!==t.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(XT(n))}function YT(t,e){return mm(t.databaseId,e)}function wP(t){const e=QT(t);return e.length===4?ge.emptyPath():XT(e)}function jf(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XT(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g_(t,e,n){return{name:Qu(t,e),fields:n.value.mapValue.fields}}function EP(t,e){return"found"in e?function(r,i){ae(!!i.found),i.found.name,i.found.updateTime;const s=Qo(r,i.found.name),o=Ft(i.found.updateTime),a=i.found.createTime?Ft(i.found.createTime):Q.min(),u=new wt({mapValue:{fields:i.found.fields}});return He.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){ae(!!i.missing),ae(!!i.readTime);const s=Qo(r,i.missing),o=Ft(i.readTime);return He.newNoDocument(s,o)}(t,e):K()}function TP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ae(h===void 0||typeof h=="string"),it.fromBase64String(h||"")):(ae(h===void 0||h instanceof Buffer||h instanceof Uint8Array),it.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:qT(c.code);return new z(h,c.message||"")}(o);n=new GT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qo(t,r.document.name),s=Ft(r.document.updateTime),o=r.document.createTime?Ft(r.document.createTime):Q.min(),a=new wt({mapValue:{fields:r.document.fields}}),u=He.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new au(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qo(t,r.document),s=r.readTime?Ft(r.readTime):Q.min(),o=He.newNoDocument(i,s),a=r.removedTargetIds||[];n=new au([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qo(t,r.document),s=r.removedTargetIds||[];n=new au([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dP(i,s),a=r.targetId;n=new HT(a,o)}}return n}function JT(t,e){let n;if(e instanceof Fa)n={update:g_(t,e.key,e.value)};else if(e instanceof Uc)n={delete:Qu(t,e.key)};else if(e instanceof Xr)n={update:g_(t,e.key,e.data),updateMask:PP(e.fieldMask)};else{if(!(e instanceof zT))return K();n={verify:Qu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ms)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Us)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Sa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_P(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function IP(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ft(i.updateTime):Ft(s);return o.isEqual(Q.min())&&(o=Ft(s)),new oP(o,i.transformResults||[])}(n,e))):[]}function SP(t,e){return{documents:[YT(t,e.path)]}}function AP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=YT(t,i);const s=function(c){if(c.length!==0)return eI(hn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Yi(m.field),direction:xP(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Uf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function kP(t){let e=wP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=ZT(f);return m instanceof hn&&AT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Ta(Xi(T.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Ua(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,_=f.values||[];return new Gu(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Gu(_,m)}(n.endAt)),KC(e,i,o,s,a,"F",u,c)}function RP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xi(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xi(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xi(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xi(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(Xi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>ZT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function xP(t){return mP[t]}function bP(t){return gP[t]}function CP(t){return yP[t]}function Yi(t){return{fieldPath:t.canonicalString()}}function Xi(t){return Xe.fromServerFormat(t.fieldPath)}function eI(t){return t instanceof Fe?function(n){if(n.op==="=="){if(n_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NAN"}};if(t_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(n_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NOT_NAN"}};if(t_(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yi(n.field),op:bP(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>eI(i));return r.length===1?r[0]:{compositeFilter:{op:CP(n.op),filters:r}}}(t):K()}function PP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=it.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.ct=e}}function DP(t){const e=kP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.un=new LP}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Wr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class LP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fs(0)}static kn(){return new Fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.changes=new Qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ko(r.mutation,i,Lt.empty(),de.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=hi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Do();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=rr();const o=Go(),a=function(){return Go()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Xr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ko(h.mutation,c,h.mutation.getFieldMask(),de.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new MP(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Go();let i=new ke((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Lt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||te()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=OT();h.forEach(m=>{if(!s.has(m)){const _=BT(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(hi());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(h=>({batchId:a,changes:DT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Do();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Do();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,m){return new Ks(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,He.newInvalidDocument(h)))});let a=Do();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Ko(h.mutation,c,Lt.empty(),de.now()),Oc(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ft(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:DP(i.bundledQuery),readTime:Ft(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(){this.overlays=new ke(H.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=hi(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=hi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=hi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cP(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.Tr=new tt(We.Er),this.dr=new tt(We.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new We(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ge([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ge([])),r=new We(n,e),i=new We(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(We.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uP(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ce);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new We(new H(s),0);let a=new tt(ce);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new We(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.Mr=e,this.docs=function(){return new ke(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():He.newInvalidDocument(n))}getEntries(e,n){let r=rr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=rr();const o=n.path,a=new H(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||bC(xC(h),r)<=0||(i.has(h.key)||Oc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WP(this)}getSize(e){return F.resolve(this.size)}}class WP extends VP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.persistence=e,this.Nr=new Qs(n=>cm(n),dm),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gm,this.targetCount=0,this.kr=Fs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new om(0),this.Kr=!1,this.Kr=!0,this.$r=new BP,this.referenceDelegate=e(this),this.Ur=new qP(this),this.indexManager=new OP,this.remoteDocumentCache=function(i){return new zP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new NP(n),this.Gr=new FP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $P(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new GP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class GP extends PC{constructor(e){super(),this.currentSequenceNumber=e}}class ym{constructor(e){this.persistence=e,this.Jr=new gm,this.Yr=null}static Zr(e){return new ym(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Xx()?8:NC(mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KP;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Eo()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Eo()<=ne.DEBUG&&q("QueryEngine","Query:",Qi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Eo()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):F.resolve())}Yi(e,n){if(o_(n))return F.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mf(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Mf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return o_(n)||i.isEqual(Q.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Eo()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qi(n)),this.rs(e,o,n,RC(i,-1)).next(a=>a))})}ts(e,n){let r=new tt(PT(e));return n.forEach((i,s)=>{Oc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Eo()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Qi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Wr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ke(ce),this._s=new Qs(s=>cm(s),dm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function XP(t,e,n,r){return new YP(t,e,n,r)}async function nI(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function JP(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let _=F.resolve();return m.forEach(T=>{_=_.next(()=>h.getEntry(u,T)).next(x=>{const b=c.docVersions.get(T);ae(b!==null),x.version.compareTo(b)<0&&(f.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),h.addEntry(x)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rI(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ZP(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(it.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(f,_),function(x,b,g){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(m,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let u=rr(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(eN(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(Q.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function eN(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=rr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function tN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Bf(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ma(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function y_(t,e,n){const r=X(t);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=X(u),m=f._s.get(h);return m!==void 0?F.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:te())).next(a=>(rN(r,YC(e),a),{documents:a,Ts:s})))}function rN(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class v_{constructor(){this.activeTargetIds=nP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iN{constructor(){this.so=new v_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new v_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl=null;function dh(){return Vl===null?Vl=function(){return 268435456+Math.round(2147483648*Math.random())}():Vl++,"0x"+Vl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class lN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=dh(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ds("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=oN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=dh();return new Promise((o,a)=>{const u=new fT;u.setWithCredentials(!0),u.listenOnce(pT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case iu.NO_ERROR:const h=u.getResponseJson();q(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case iu.TIMEOUT:q(ct,`RPC '${e}' ${s} timed out`),a(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case iu.HTTP_ERROR:const f=u.getStatus();if(q(ct,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const T=function(b){const g=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(g)>=0?g:V.UNKNOWN}(_.status);a(new z(T,_.message))}else a(new z(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new z(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{q(ct,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(ct,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=dh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yT(),a=gT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");q(ct,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,_=!1;const T=new aN({Io:b=>{_?q(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(q(ct,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),q(ct,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},To:()=>f.close()}),x=(b,g,v)=>{b.listen(g,S=>{try{v(S)}catch(D){setTimeout(()=>{throw D},0)}})};return x(f,No.EventType.OPEN,()=>{_||(q(ct,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),x(f,No.EventType.CLOSE,()=>{_||(_=!0,q(ct,`RPC '${e}' stream ${i} transport closed`),T.So())}),x(f,No.EventType.ERROR,b=>{_||(_=!0,Ds(ct,`RPC '${e}' stream ${i} transport errored:`,b),T.So(new z(V.UNAVAILABLE,"The operation could not be completed")))}),x(f,No.EventType.MESSAGE,b=>{var g;if(!_){const v=b.data[0];ae(!!v);const S=v,D=S.error||((g=S[0])===null||g===void 0?void 0:g.error);if(D){q(ct,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let U=function(I){const k=Me[I];if(k!==void 0)return qT(k)}(M),A=D.message;U===void 0&&(U=V.INTERNAL,A="Unknown error status: "+M+" with message "+D.message),_=!0,T.So(new z(U,A)),f.close()}else q(ct,`RPC '${e}' stream ${i} received:`,v),T.bo(v)}}),x(a,mT.STAT_EVENT,b=>{b.stat===Pf.PROXY?q(ct,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Pf.NOPROXY&&q(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function hh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){return new vP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _m(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(nr(n.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uN extends iI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=TP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Ft(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Lf(u)?{documents:SP(s,u)}:{query:AP(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=KT(s,o.resumeToken);const c=Uf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=Ku(s,o.snapshotVersion.toTimestamp());const c=Uf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=RP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jf(this.serializer),n.removeTarget=e,this.a_(n)}}class cN extends iI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=IP(e.writeResults,e.commitTime),r=Ft(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JT(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ff(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Ff(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class hN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(nr(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Fi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await Ba(c),c.q_.set("Unknown"),c.L_.delete(4),await Bc(c)}(this))})}),this.q_=new hN(r,i)}}async function Bc(t){if(Fi(t))for(const e of t.B_)await e(!0)}async function Ba(t){for(const e of t.B_)await e(!1)}function sI(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Im(n)?Tm(n):Ys(n).r_()&&Em(n,e))}function wm(t,e){const n=X(t),r=Ys(n);n.N_.delete(e),r.r_()&&oI(n,e),n.N_.size===0&&(r.r_()?r.o_():Fi(n)&&n.q_.set("Unknown"))}function Em(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ys(t).A_(e)}function oI(t,e){t.Q_.xe(e),Ys(t).R_(e)}function Tm(t){t.Q_=new pP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ys(t).start(),t.q_.v_()}function Im(t){return Fi(t)&&!Ys(t).n_()&&t.N_.size>0}function Fi(t){return X(t).L_.size===0}function aI(t){t.Q_=void 0}async function pN(t){t.q_.set("Online")}async function mN(t){t.N_.forEach((e,n)=>{Em(t,e)})}async function gN(t,e){aI(t),Im(t)?(t.q_.M_(e),Tm(t)):t.q_.set("Unknown")}async function yN(t,e,n){if(t.q_.set("Online"),e instanceof GT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yu(t,r)}else if(e instanceof au?t.Q_.Ke(e):e instanceof HT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await rI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(it.EMPTY_BYTE_STRING,h.snapshotVersion)),oI(s,u);const f=new br(h.target,u,c,h.sequenceNumber);Em(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Yu(t,r)}}async function Yu(t,e,n){if(!Ma(e))throw e;t.L_.add(1),await Ba(t),t.q_.set("Offline"),n||(n=()=>rI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Bc(t)})}function lI(t,e){return e().catch(n=>Yu(t,n,e))}async function $c(t){const e=X(t),n=Hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;vN(e);)try{const i=await tN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,_N(e,i)}catch(i){await Yu(e,i)}uI(e)&&cI(e)}function vN(t){return Fi(t)&&t.O_.length<10}function _N(t,e){t.O_.push(e);const n=Hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function uI(t){return Fi(t)&&!Hr(t).n_()&&t.O_.length>0}function cI(t){Hr(t).start()}async function wN(t){Hr(t).p_()}async function EN(t){const e=Hr(t);for(const n of t.O_)e.m_(n.mutations)}async function TN(t,e,n){const r=t.O_.shift(),i=fm.from(r,e,n);await lI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $c(t)}async function IN(t,e){e&&Hr(t).V_&&await async function(r,i){if(function(o){return WT(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();Hr(r).s_(),await lI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $c(r)}}(t,e),uI(t)&&cI(t)}async function w_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Fi(n);n.L_.add(3),await Ba(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Bc(n)}async function SN(t,e){const n=X(t);e?(n.L_.delete(2),await Bc(n)):e||(n.L_.add(2),await Ba(n),n.q_.set("Unknown"))}function Ys(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new uN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:pN.bind(null,t),Ro:mN.bind(null,t),mo:gN.bind(null,t),d_:yN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Im(t)?Tm(t):t.q_.set("Unknown")):(await t.K_.stop(),aI(t))})),t.K_}function Hr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new cN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wN.bind(null,t),mo:IN.bind(null,t),f_:EN.bind(null,t),g_:TN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await $c(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Am(t,e){if(nr("AsyncQueue",`${e}: ${t}`),Ma(t))return new z(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Do(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.W_=new ke(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class js{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new js(e,n,_s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kN{constructor(){this.queries=T_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=T_(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function T_(){return new Qs(t=>CT(t),Dc)}async function km(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new AN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Am(o,`Initialization of query '${Qi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&xm(n)}async function Rm(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RN(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&xm(n)}function xN(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function xm(t){t.Y_.forEach(e=>{e.next()})}var $f,I_;(I_=$f||($f={})).ea="default",I_.Cache="cache";class bm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$f.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.key=e}}class hI{constructor(e){this.key=e}}class bN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=PT(e),this.Ra=new _s(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new E_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),_=Oc(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),x=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let b=!1;m&&_?m.data.isEqual(_.data)?T!==x&&(r.track({type:3,doc:_}),b=!0):this.ga(m,_)||(r.track({type:2,doc:_}),b=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),b=!0):m&&!_&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(a=!0)),b&&(_?(o=o.add(_),s=x?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,T){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return x(_)-x(T)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new js(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new E_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new hI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new dI(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return js.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class CN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PN{constructor(e){this.key=e,this.va=!1}}class NN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Qs(a=>CT(a),Dc),this.Ma=new Map,this.xa=new Set,this.Oa=new ke(H.comparator),this.Na=new Map,this.La=new gm,this.Ba={},this.ka=new Map,this.qa=Fs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function DN(t,e,n=!0){const r=vI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await fI(r,e,n,!0),i}async function ON(t,e){const n=vI(t);await fI(n,e,!0,!1)}async function fI(t,e,n,r){const i=await nN(t.localStore,kn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await LN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&sI(t.remoteStore,i),a}async function LN(t,e,n,r,i){t.Ka=(f,m,_)=>async function(x,b,g,v){let S=b.view.ma(g);S.ns&&(S=await y_(x.localStore,b.query,!1).then(({documents:A})=>b.view.ma(A,S)));const D=v&&v.targetChanges.get(b.targetId),M=v&&v.targetMismatches.get(b.targetId)!=null,U=b.view.applyChanges(S,x.isPrimaryClient,D,M);return A_(x,b.targetId,U.wa),U.snapshot}(t,f,m,_);const s=await y_(t.localStore,e,!0),o=new bN(e,s.Ts),a=o.ma(s.documents),u=ja.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);A_(t,n,c.wa);const h=new CN(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function VN(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Dc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&wm(r.remoteStore,i.targetId),zf(r,i.targetId)}).catch(Va)):(zf(r,i.targetId),await Bf(r.localStore,i.targetId,!0))}async function MN(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wm(n.remoteStore,r.targetId))}async function UN(t,e,n){const r=qN(t);try{const i=await function(o,a){const u=X(o),c=de.now(),h=a.reduce((_,T)=>_.add(T.key),te());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=rr(),x=te();return u.cs.getEntries(_,h).next(b=>{T=b,T.forEach((g,v)=>{v.isValidDocument()||(x=x.add(g))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(b=>{f=b;const g=[];for(const v of a){const S=lP(v,f.get(v.key).overlayedDocument);S!=null&&g.push(new Xr(v.key,S,TT(S.value.mapValue),Je.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,g,a)}).next(b=>{m=b;const g=b.applyToLocalDocumentSet(f,x);return u.documentOverlayCache.saveOverlays(_,b.batchId,g)})}).then(()=>({batchId:m.batchId,changes:DT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new ke(ce)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await $a(r,i.changes),await $c(r.remoteStore)}catch(i){const s=Am(i,"Failed to persist write");n.reject(s)}}async function pI(t,e){const n=X(t);try{const r=await ZP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await $a(n,r,e)}catch(r){await Va(r)}}function S_(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=X(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&xm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FN(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ke(H.comparator);o=o.insert(s,He.newNoDocument(s,Q.min()));const a=te().add(s),u=new Fc(Q.min(),new Map,new ke(ce),o,a);await pI(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Cm(r)}else await Bf(r.localStore,e,!1).then(()=>zf(r,e,n)).catch(Va)}async function jN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await JP(n.localStore,e);gI(n,r,null),mI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $a(n,i)}catch(i){await Va(i)}}async function BN(t,e,n){const r=X(t);try{const i=await function(o,a){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ae(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);gI(r,e,n),mI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $a(r,i)}catch(i){await Va(i)}}function mI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function gI(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function zf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||yI(t,r)})}function yI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(wm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Cm(t))}function A_(t,e,n){for(const r of n)r instanceof dI?(t.La.addReference(r.key,e),$N(t,r)):r instanceof hI?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||yI(t,r.key)):K()}function $N(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Cm(t))}function Cm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new PN(n)),t.Oa=t.Oa.insert(n,r),sI(t.remoteStore,new br(kn(Nc(n.path)),r,"TargetPurposeLimboResolution",om.oe))}}async function $a(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=vm.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=X(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.$i,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>F.forEach(m.Ui,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!Ma(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=h.os.get(m),T=_.snapshotVersion,x=_.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(m,x)}}}(r.localStore,s))}async function zN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await nI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new z(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $a(n,r.hs)}}function WN(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function vI(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FN.bind(null,e),e.Ca.d_=RN.bind(null,e.eventManager),e.Ca.$a=xN.bind(null,e.eventManager),e}function qN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BN.bind(null,e),e}class Xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return XP(this.persistence,new QP,e.initialUser,this.serializer)}Ga(e){return new HP(ym.Zr,this.serializer)}Wa(e){return new iN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xu.provider={build:()=>new Xu};class Wf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>S_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zN.bind(null,this.syncEngine),await SN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kN}()}createDatastore(e){const n=jc(e.databaseInfo.databaseId),r=function(s){return new lN(s)}(e.databaseInfo);return function(s,o,a,u){return new dN(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new fN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>S_(this.syncEngine,n,0),function(){return __.D()?new __:new sN}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new NN(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ba(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Wf.provider={build:()=>new Wf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=X(i),a={documents:s.map(f=>Qu(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ge.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const m=EP(o.serializer,f);c.set(m.key.toString(),m)});const h=[];return s.forEach(f=>{const m=c.get(f.toString());ae(!!m),h.push(m)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Uc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=H.fromPath(r);this.mutations.push(new zT(i,this.precondition(i)))}),await async function(r,i){const s=X(r),o={writes:i.map(a=>JT(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,ge.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Q.min())?Je.exists(!1):Je.updateTime(n):Je.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new z(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Je.updateTime(n)}return Je.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new _m(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new HN(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!Ua(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!WT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=_T.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function k_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QN(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>w_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>w_(e.remoteStore,i)),t._onlineComponents=e}async function QN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new Xu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await fh(t,new Xu);return t._offlineComponents}async function Nm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await k_(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await k_(t,new Wf))),t._onlineComponents}function YN(t){return Nm(t).then(e=>e.syncEngine)}function XN(t){return Nm(t).then(e=>e.datastore)}async function Ju(t){const e=await Nm(t),n=e.eventManager;return n.onListen=DN.bind(null,e.syncEngine),n.onUnlisten=VN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ON.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MN.bind(null,e.syncEngine),n}function JN(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Pm({next:m=>{h.Za(),o.enqueueAndForget(()=>Rm(s,f));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new bm(Nc(a.path),h,{includeMetadataChanges:!0,_a:!0});return km(s,f)}(await Ju(t),t.asyncQueue,e,n,r)),r.promise}function ZN(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Pm({next:m=>{h.Za(),o.enqueueAndForget(()=>Rm(s,f)),m.fromCache&&u.source==="server"?c.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new bm(a,h,{includeMetadataChanges:!0,_a:!0});return km(s,f)}(await Ju(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t,e,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eD(t,e,n,r){if(e===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function x_(t){if(!H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function b_(t){if(H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Tt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zc(t);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_I((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vC;switch(r.type){case"firstParty":return new TC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=R_.get(n);r&&(q("ComponentProvider","Removing Datastore"),R_.delete(n),r.terminate())}(this),Promise.resolve()}}function tD(t,e,n,r={}){var i;const s=(t=Tt(t,Wc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=dt.MOCK_USER;else{a=nT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new dt(c)}t._authCredentials=new _C(new vT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class Br extends Jr{constructor(e,n,r){super(e,n,Nc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new H(e))}withConverter(e){return new Br(this.firestore,e,this._path)}}function za(t,e,...n){if(t=re(t),wI("collection","path",e),t instanceof Wc){const r=ge.fromString(e,...n);return b_(r),new Br(t,null,r)}{if(!(t instanceof nt||t instanceof Br))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return b_(r),new Br(t.firestore,null,r)}}function be(t,e,...n){if(t=re(t),arguments.length===1&&(e=_T.newId()),wI("doc","path",e),t instanceof Wc){const r=ge.fromString(e,...n);return x_(r),new nt(t,null,new H(r))}{if(!(t instanceof nt||t instanceof Br))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return x_(r),new nt(t.firestore,t instanceof Br?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _m(this,"async_queue_retry"),this.Vu=()=>{const r=hh();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=hh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=hh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new An;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ma(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw nr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Sm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function N_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Cn extends Wc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new P_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new P_(e),this._firestoreClient=void 0,await e}}}function Dm(t,e){const n=typeof t=="object"?t:La(),r=typeof t=="string"?t:"(default)",i=lr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rm("firestore");s&&tD(i,...s)}return i}function Wa(t){if(t._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||nD(t),t._firestoreClient}function nD(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new LC(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,_I(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new KN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ri(it.fromBase64String(e))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ri(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=/^__.*__$/;class iD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fa(e,this.data,n,this.fieldTransforms)}}class EI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function TI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class qc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new qc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Zu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(TI(this.Cu)&&rD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jc(e)}Qu(e,n,r,i=!1){return new qc({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ha(t){const e=t._freezeSettings(),n=jc(t._databaseId);return new sD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vm(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Bm("Data must be an object, but it was:",o,r);const a=kI(r,o);let u,c;if(s.merge)u=new Lt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=qf(e,f,n);if(!o.contains(m))throw new z(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xI(h,m)||h.push(m)}u=new Lt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new iD(new wt(a),u,c)}class Hc extends ji{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hc}}function II(t,e,n){return new qc({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Mm extends ji{_toFieldTransform(e){return new Vc(e.path,new Ia)}isEqual(e){return e instanceof Mm}}class Um extends ji{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=II(this,e,!0),r=this.Ku.map(s=>Bi(s,n)),i=new Ms(r);return new Vc(e.path,i)}isEqual(e){return e instanceof Um&&Ii(this.Ku,e.Ku)}}class Fm extends ji{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=II(this,e,!0),r=this.Ku.map(s=>Bi(s,n)),i=new Us(r);return new Vc(e.path,i)}isEqual(e){return e instanceof Fm&&Ii(this.Ku,e.Ku)}}class jm extends ji{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Sa(e.serializer,VT(e.serializer,this.$u));return new Vc(e.path,n)}isEqual(e){return e instanceof jm&&this.$u===e.$u}}function SI(t,e,n,r){const i=t.Qu(1,e,n);Bm("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();Ui(r,(u,c)=>{const h=$m(e,u,n);c=re(c);const f=i.Nu(h);if(c instanceof Hc)s.push(h);else{const m=Bi(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new Lt(s);return new EI(o,a,i.fieldTransforms)}function AI(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[qf(e,r,n)],u=[i];if(s.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(qf(e,s[m])),u.push(s[m+1]);const c=[],h=wt.empty();for(let m=a.length-1;m>=0;--m)if(!xI(c,a[m])){const _=a[m];let T=u[m];T=re(T);const x=o.Nu(_);if(T instanceof Hc)c.push(_);else{const b=Bi(T,x);b!=null&&(c.push(_),h.set(_,b))}}const f=new Lt(c);return new EI(h,f,o.fieldTransforms)}function oD(t,e,n,r=!1){return Bi(n,t.Qu(r?4:3,e))}function Bi(t,e){if(RI(t=re(t)))return Bm("Unsupported field value:",e,t),kI(t,e);if(t instanceof ji)return function(r,i){if(!TI(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Bi(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return VT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=de.fromDate(r);return{timestampValue:Ku(i.serializer,s)}}if(r instanceof de){const s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ku(i.serializer,s)}}if(r instanceof Om)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ri)return{bytesValue:KT(i.serializer,r._byteString)};if(r instanceof nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Lm)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return hm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${zc(r)}`)}(t,e)}function kI(t,e){const n={};return wT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=Bi(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function RI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof Om||t instanceof Ri||t instanceof nt||t instanceof ji||t instanceof Lm)}function Bm(t,e,n){if(!RI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=zc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function qf(t,e,n){if((e=re(e))instanceof qa)return e._internalPath;if(typeof e=="string")return $m(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const aD=new RegExp("[~\\*/\\[\\]]");function $m(t,e,n){if(e.search(aD)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qa(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(V.INVALID_ARGUMENT,a+t+u)}function xI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lD extends ec{data(){return super.data()}}function Gc(t,e){return typeof e=="string"?$m(t,e):e instanceof qa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zm{}class CI extends zm{}function Kc(t,e,...n){let r=[];e instanceof zm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Wm).length,a=s.filter(u=>u instanceof Qc).length;if(o>1||o>0&&a>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Qc extends CI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qc(e,n,r)}_apply(e){const n=this._parse(e);return PI(e._query,n),new Jr(e.firestore,e.converter,Vf(e._query,n))}_parse(e){const n=Ha(e.firestore);return function(s,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){O_(f,h);const _=[];for(const T of f)_.push(D_(u,s,T));m={arrayValue:{values:_}}}else m=D_(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||O_(f,h),m=oD(a,o,f,h==="in"||h==="not-in");return Fe.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Yc(t,e,n){const r=e,i=Gc("where",t);return Qc._create(i,r,n)}class Wm extends zm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)PI(o,u),o=Vf(o,u)}(e._query,n),new Jr(e.firestore,e.converter,Vf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qm extends CI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ta(s,o)}(e._query,this._field,this._direction);return new Jr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ks(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function g4(t,e="asc"){const n=e,r=Gc("orderBy",t);return qm._create(r,n)}function D_(t,e,n){if(typeof(n=re(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bT(e)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!H.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return e_(t,new H(r))}if(n instanceof nt)return e_(t,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zc(n)}.`)}function O_(t,e){if(!Array.isArray(t)||t.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function PI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class NI{convertValue(e,n="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Oe(o.doubleValue));return new Lm(s)}convertGeoPoint(e){return new Om(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_a(e));default:return null}}convertTimestamp(e){const n=qr(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ae(tI(r));const i=new wa(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||nr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class uD extends NI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gm extends ec{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lu extends Gm{data(e={}){return super.data(e)}}class DI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lu(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:cD(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){t=Tt(t,nt);const e=Tt(t.firestore,Cn);return JN(Wa(e),t._key).then(n=>OI(e,t,n))}class Xc extends NI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function Jc(t){t=Tt(t,Jr);const e=Tt(t.firestore,Cn),n=Wa(e),r=new Xc(e);return bI(t._query),ZN(n,t._query).then(i=>new DI(e,r,t,i))}function Km(t,e,n){t=Tt(t,nt);const r=Tt(t.firestore,Cn),i=Hm(t.converter,e,n);return td(r,[Vm(Ha(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Je.none())])}function Zc(t,e,n,...r){t=Tt(t,nt);const i=Tt(t.firestore,Cn),s=Ha(i);let o;return o=typeof(e=re(e))=="string"||e instanceof qa?AI(s,"updateDoc",t._key,e,n,r):SI(s,"updateDoc",t._key,e),td(i,[o.toMutation(t._key,Je.exists(!0))])}function dD(t){return td(Tt(t.firestore,Cn),[new Uc(t._key,Je.none())])}function Qm(t,e){const n=Tt(t.firestore,Cn),r=be(t),i=Hm(t.converter,e);return td(n,[Vm(Ha(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Je.exists(!1))]).then(()=>r)}function ed(t,...e){var n,r,i;t=re(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||N_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(N_(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof nt)c=Tt(t.firestore,Cn),h=Nc(t._key.path),u={next:f=>{e[o]&&e[o](OI(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Tt(t,Jr);c=Tt(f.firestore,Cn),h=f._query;const m=new Xc(c);u={next:_=>{e[o]&&e[o](new DI(c,m,f,_))},error:e[o+1],complete:e[o+2]},bI(t._query)}return function(m,_,T,x){const b=new Pm(x),g=new bm(_,b,T);return m.asyncQueue.enqueueAndForget(async()=>km(await Ju(m),g)),()=>{b.Za(),m.asyncQueue.enqueueAndForget(async()=>Rm(await Ju(m),g))}}(Wa(c),h,a,u)}function td(t,e){return function(r,i){const s=new An;return r.asyncQueue.enqueueAndForget(async()=>UN(await YN(r),i,s)),s.promise}(Wa(t),e)}function OI(t,e,n){const r=n.docs.get(e._key),i=new Xc(t);return new Gm(t,i,e._key,r,new cs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD={maxAttempts:5};function To(t,e){if((t=re(t)).firestore!==e)throw new z(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ha(n)}get(n){const r=To(n,this._firestore),i=new uD(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const o=s[0];if(o.isFoundDocument())return new ec(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new ec(this._firestore,i,r._key,null,r.converter);throw K()})}set(n,r,i){const s=To(n,this._firestore),o=Hm(s.converter,r,i),a=Vm(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=To(n,this._firestore);let a;return a=typeof(r=re(r))=="string"||r instanceof qa?AI(this._dataReader,"Transaction.update",o._key,r,i,s):SI(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=To(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=To(e,this._firestore),r=new Xc(this._firestore);return super.get(e).then(i=>new Gm(this._firestore,r,n._key,i._document,new cs(!1,!1),n.converter))}}function Aa(t,e,n){t=Tt(t,Cn);const r=Object.assign(Object.assign({},hD),n);return function(s){if(s.maxAttempts<1)throw new z(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new An;return s.asyncQueue.enqueueAndForget(async()=>{const c=await XN(s);new GN(s.asyncQueue,c,a,o,u).au()}),u.promise}(Wa(t),i=>e(new fD(t,i)),r)}function Ml(){return new Mm("serverTimestamp")}function v4(...t){return new Um("arrayUnion",t)}function _4(...t){return new Fm("arrayRemove",t)}function pD(t){return new jm("increment",t)}(function(e,n=!0){(function(i){Gs=i})(Mi),tn(new $t("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Cn(new wC(r.getProvider("auth-internal")),new SC(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wa(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ft(Qv,"4.7.3",e),ft(Qv,"4.7.3","esm2017")})();function Ym(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function LI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mD=LI,VI=new Vi("auth","Firebase",LI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new Pc("@firebase/auth");function gD(t,...e){tc.logLevel<=ne.WARN&&tc.warn(`Auth (${Mi}): ${t}`,...e)}function uu(t,...e){tc.logLevel<=ne.ERROR&&tc.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw Xm(t,...e)}function Rn(t,...e){return Xm(t,...e)}function MI(t,e,n){const r=Object.assign(Object.assign({},mD()),{[e]:n});return new Vi("auth","Firebase",r).create(e,{appName:t.name})}function Yn(t){return MI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VI.create(t,...e)}function Y(t,e,...n){if(!t)throw Xm(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uu(e),new Error(e)}function ir(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UI(){return L_()==="http:"||L_()==="https:"}function L_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UI()||rT()||"connection"in navigator)?navigator.onLine:!0}function vD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=Hx()||Qx()}get(){return yD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=new Ga(3e4,6e4);function Nn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dn(t,e,n,r,i={}){return jI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Oa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Kx()||(c.referrerPolicy="no-referrer"),FI.fetch()(BI(t,t.config.apiHost,n,a),c)})}async function jI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_D),e);try{const i=new TD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ul(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ul(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ul(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw MI(t,h,c);fn(t,h)}}catch(i){if(i instanceof qt)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function Ka(t,e,n,r,i={}){const s=await Dn(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function BI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Jm(t.config,i):`${t.config.apiScheme}://${i}`}function ED(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),wD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function V_(t){return t!==void 0&&t.enterprise!==void 0}class ID{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ED(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function SD(t,e){return Dn(t,"GET","/v2/recaptchaConfig",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function $I(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kD(t,e=!1){const n=re(t),r=await n.getIdToken(e),i=Zm(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(ph(i.auth_time)),issuedAtTime:Yo(ph(i.iat)),expirationTime:Yo(ph(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ph(t){return Number(t)*1e3}function Zm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uu("JWT malformed, contained fewer than 3 sections"),null;try{const i=JE(n);return i?JSON.parse(i):(uu("Failed to decode base64 JWT payload"),null)}catch(i){return uu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function M_(t){const e=Zm(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qt&&RD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ka(t,$I(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?zI(s.providerUserInfo):[],a=CD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function bD(t){const e=re(t);await rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zI(t){return t.map(e=>{var{providerId:n}=e,r=Ym(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PD(t,e){const n=await jI(t,{},async()=>{const r=Oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=BI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",FI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ND(t,e){return Dn(t,"POST","/v2/accounts:revokeToken",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):M_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=M_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ws;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ym(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ka(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kD(this,e)}reload(){return bD(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await ka(this,AD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:D,isAnonymous:M,providerData:U,stsTokenManager:A}=n;Y(S&&A,e,"internal-error");const w=ws.fromJSON(this.name,A);Y(typeof S=="string",e,"internal-error"),fr(f,e.name),fr(m,e.name),Y(typeof D=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),fr(_,e.name),fr(T,e.name),fr(x,e.name),fr(b,e.name),fr(g,e.name),fr(v,e.name);const I=new Gn({uid:S,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:M,photoURL:T,phoneNumber:_,tenantId:x,stsTokenManager:w,createdAt:g,lastLoginAt:v});return U&&Array.isArray(U)&&(I.providerData=U.map(k=>Object.assign({},k))),b&&(I._redirectEventId=b),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new ws;i.updateFromServerResponse(n);const s=new Gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await rc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?zI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ws;a.updateFromIdToken(r);const u=new Gn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Map;function Kn(t){ir(t instanceof Function,"Expected a class definition");let e=U_.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,U_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}WI.type="NONE";const F_=WI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cu(this.userKey,i.apiKey,s),this.fullPersistenceKey=cu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(Kn(F_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Kn(F_);const o=cu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Gn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Es(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Es(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YI(e))return"Blackberry";if(XI(e))return"Webos";if(HI(e))return"Safari";if((e.includes("chrome/")||GI(e))&&!e.includes("edge/"))return"Chrome";if(QI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qI(t=mt()){return/firefox\//i.test(t)}function HI(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GI(t=mt()){return/crios\//i.test(t)}function KI(t=mt()){return/iemobile/i.test(t)}function QI(t=mt()){return/android/i.test(t)}function YI(t=mt()){return/blackberry/i.test(t)}function XI(t=mt()){return/webos/i.test(t)}function eg(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DD(t=mt()){var e;return eg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OD(){return Yx()&&document.documentMode===10}function JI(t=mt()){return eg(t)||QI(t)||XI(t)||YI(t)||/windows phone/i.test(t)||KI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e=[]){let n;switch(t){case"Browser":n=j_(mt());break;case"Worker":n=`${j_(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e={}){return Dn(t,"GET","/v2/passwordPolicy",Nn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=6;class UD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new B_(this),this.idTokenSubscription=new B_(this),this.beforeStateQueue=new LD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $I(this,{idToken:e}),r=await Gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(En(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Yn(this));const n=e?re(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VD(this),n=new UD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ND(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zr(t){return re(t)}class B_{constructor(e){this.auth=e,this.observer=null,this.addObserver=rb(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jD(t){nd=t}function e1(t){return nd.loadJS(t)}function BD(){return nd.recaptchaEnterpriseScript}function $D(){return nd.gapiScript}function zD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WD="recaptcha-enterprise",qD="NO_RECAPTCHA";class HD{constructor(e){this.type=WD,this.auth=Zr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{SD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ID(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;V_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&V_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=BD();u.length!==0&&(u+=a),e1(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $_(t,e,n,r=!1){const i=new HD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ic(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t,e){const n=lr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ii(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function KD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QD(t,e,n){const r=Zr(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=t1(e),{host:o,port:a}=YD(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),XD()}function t1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YD(t){const e=t1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:z_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:z_(o)}}}function z_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function JD(t,e){return Dn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(t,e){return Ka(t,"POST","/v1/accounts:signInWithPassword",Nn(t,e))}async function e2(t,e){return Dn(t,"POST","/v1/accounts:sendOobCode",Nn(t,e))}async function t2(t,e){return e2(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Nn(t,e))}async function r2(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends tg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ic(e,n,"signInWithPassword",ZD);case"emailLink":return n2(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ic(e,r,"signUpPassword",JD);case"emailLink":return r2(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e){return Ka(t,"POST","/v1/accounts:signInWithIdp",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2="http://localhost";class xi extends tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ym(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:i2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function o2(t){const e=Co(Po(t)).link,n=e?Co(Po(e)).deep_link_id:null,r=Co(Po(t)).deep_link_id;return(r?Co(Po(r)).link:null)||r||n||e||t}class ng{constructor(e){var n,r,i,s,o,a;const u=Co(Po(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=s2((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=o2(e);try{return new ng(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,n){return Ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ng.parseLink(n);return Y(r,"argument-error"),Ra._fromEmailAndCode(e,r.code,r.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends n1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Qa{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Qa{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Qa{constructor(){super("twitter.com")}static credential(e,n){return xi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(t,e){return Ka(t,"POST","/v1/accounts:signUp",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gn._fromIdTokenResponse(e,r,i),o=W_(r);return new bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=W_(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function W_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sc(e,n,r,i)}}function r1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(t,s,e,r):s})}async function l2(t,e,n=!1){const r=await ka(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e,n=!1){const{auth:r}=t;if(En(r.app))return Promise.reject(Yn(r));const i="reauthenticate";try{const s=await ka(t,r1(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Zm(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e,n=!1){if(En(t.app))return Promise.reject(Yn(t));const r="signIn",i=await r1(t,r,e),s=await bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function c2(t,e){return i1(Zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(t){const e=Zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function d2(t,e,n){const r=Zr(t);await ic(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",t2)}async function h2(t,e,n){if(En(t.app))return Promise.reject(Yn(t));const r=Zr(t),o=await ic(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",a2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&s1(t),u}),a=await bi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function f2(t,e,n){return En(t.app)?Promise.reject(Yn(t)):c2(re(t),Xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&s1(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e){return Dn(t,"POST","/v1/accounts:createAuthUri",Nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m2(t,e){const n=UI()?nc():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await p2(re(t),r);return i||[]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(t,e){return re(t).setPersistence(e)}function y2(t,e,n,r){return re(t).onIdTokenChanged(e,n,r)}function v2(t,e,n){return re(t).beforeAuthStateChanged(e,n)}function _2(t,e,n,r){return re(t).onAuthStateChanged(e,n,r)}function w2(t){return re(t).signOut()}async function E2(t){return re(t).delete()}const oc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oc,"1"),this.storage.removeItem(oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=1e3,I2=10;class a1 extends o1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=JI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,I2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},T2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a1.type="LOCAL";const l1=a1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1 extends o1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u1.type="SESSION";const c1=u1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await S2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=rg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function k2(t){xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function R2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function b2(){return d1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="firebaseLocalStorageDb",C2=1,ac="firebaseLocalStorage",f1="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function id(t,e){return t.transaction([ac],e?"readwrite":"readonly").objectStore(ac)}function P2(){const t=indexedDB.deleteDatabase(h1);return new Ya(t).toPromise()}function Gf(){const t=indexedDB.open(h1,C2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ac,{keyPath:f1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ac)?e(r):(r.close(),await P2(),e(await Gf()))})})}async function q_(t,e,n){const r=id(t,!0).put({[f1]:e,value:n});return new Ya(r).toPromise()}async function N2(t,e){const n=id(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function H_(t,e){const n=id(t,!0).delete(e);return new Ya(n).toPromise()}const D2=800,O2=3;class p1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>O2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rd._getInstance(b2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await R2(),!this.activeServiceWorker)return;this.sender=new A2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||x2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gf();return await q_(e,oc,"1"),await H_(e,oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>q_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>N2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>H_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=id(i,!1).getAll();return new Ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p1.type="LOCAL";const L2=p1;new Ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t,e){return e?Kn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig extends tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M2(t){return i1(t.auth,new ig(t),t.bypassAuthState)}function U2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),u2(n,new ig(t),t.bypassAuthState)}async function F2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),l2(n,new ig(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M2;case"linkViaPopup":case"linkViaRedirect":return F2;case"reauthViaPopup":case"reauthViaRedirect":return U2;default:fn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=new Ga(2e3,1e4);class ds extends m1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,j2.get())};e()}}ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2="pendingRedirect",du=new Map;class $2 extends m1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=du.get(this.auth._key());if(!e){try{const r=await z2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}du.set(this.auth._key(),e)}return this.bypassAuthState||du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z2(t,e){const n=H2(e),r=q2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function W2(t,e){du.set(t._key(),e)}function q2(t){return Kn(t._redirectPersistence)}function H2(t){return cu(B2,t.config.apiKey,t.name)}async function G2(t,e,n=!1){if(En(t.app))return Promise.reject(Yn(t));const r=Zr(t),i=V2(r,e),o=await new $2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=10*60*1e3;class Q2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!g1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K2&&this.cachedEventUids.clear(),this.cachedEventUids.has(G_(e))}saveEventToCache(e){this.cachedEventUids.add(G_(e)),this.lastProcessedEventTime=Date.now()}}function G_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function g1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z2=/^https?/;async function eO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await X2(t);for(const n of e)try{if(tO(n))return}catch{}fn(t,"unauthorized-domain")}function tO(t){const e=nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Z2.test(n))return!1;if(J2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new Ga(3e4,6e4);function K_(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rO(t){return new Promise((e,n)=>{var r,i,s;function o(){K_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{K_(),n(Rn(t,"network-request-failed"))},timeout:nO.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const a=zD("iframefcb");return xn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},e1(`${$D()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw hu=null,e})}let hu=null;function iO(t){return hu=hu||rO(t),hu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=new Ga(5e3,15e3),oO="__/auth/iframe",aO="emulator/auth/iframe",lO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cO(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jm(e,aO):`https://${t.config.authDomain}/${oO}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},i=uO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oa(r).slice(1)}`}async function dO(t){const e=await iO(t),n=xn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:cO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=xn().setTimeout(()=>{s(o)},sO.get());function u(){xn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fO=500,pO=600,mO="_blank",gO="http://localhost";class Q_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yO(t,e,n,r=fO,i=pO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},hO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=mt().toLowerCase();n&&(a=GI(c)?mO:n),qI(c)&&(e=e||gO,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[_,T])=>`${m}${_}=${T},`,"");if(DD(c)&&a!=="_self")return vO(e||"",a),new Q_(null);const f=window.open(e||"",a,h);Y(f,t,"popup-blocked");try{f.focus()}catch{}return new Q_(f)}function vO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O="__/auth/handler",wO="emulator/auth/handler",EO=encodeURIComponent("fac");async function Y_(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:i};if(e instanceof n1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Qa){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${EO}=${encodeURIComponent(u)}`:"";return`${TO(t)}?${Oa(a).slice(1)}${c}`}function TO({config:t}){return t.emulator?Jm(t,wO):`https://${t.authDomain}/${_O}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="webStorageSupport";class IO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c1,this._completeRedirectFn=G2,this._overrideRedirectResult=W2}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Y_(e,n,r,nc(),i);return yO(e,o,rg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Y_(e,n,r,nc(),i);return k2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dO(e),r=new Q2(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mh,{type:mh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mh];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JI()||HI()||eg()}}const SO=IO;var X_="@firebase/auth",J_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RO(t){tn(new $t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZI(t)},c=new FD(r,i,s,u);return KD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tn(new $t("auth-internal",e=>{const n=Zr(e.getProvider("auth").getImmediate());return(r=>new AO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(X_,J_,kO(t)),ft(X_,J_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=5*60,bO=tT("authIdTokenMaxAge")||xO;let Z_=null;const CO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bO)return;const i=n==null?void 0:n.token;Z_!==i&&(Z_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PO(t=La()){const e=lr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GD(t,{popupRedirectResolver:SO,persistence:[L2,l1,c1]}),r=tT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=CO(s.toString());v2(n,o,()=>o(n.currentUser)),y2(n,a=>o(a))}}const i=ZE("auth");return i&&QD(n,`http://${i}`),n}function NO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",NO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RO("Browser");const y1="@firebase/installations",sg="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=1e4,_1=`w:${sg}`,w1="FIS_v2",DO="https://firebaseinstallations.googleapis.com/v1",OO=60*60*1e3,LO="installations",VO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ci=new Vi(LO,VO,MO);function E1(t){return t instanceof qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1({projectId:t}){return`${DO}/projects/${t}/installations`}function I1(t){return{token:t.token,requestStatus:2,expiresIn:FO(t.expiresIn),creationTime:Date.now()}}async function S1(t,e){const r=(await e.json()).error;return Ci.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function A1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function UO(t,{refreshToken:e}){const n=A1(t);return n.append("Authorization",jO(e)),n}async function k1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function FO(t){return Number(t.replace("s","000"))}function jO(t){return`${w1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=T1(t),i=A1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:w1,appId:t.appId,sdkVersion:_1},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await k1(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:I1(c.authToken)}}else throw await S1("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=/^[cdef][\w-]{21}$/,Kf="";function WO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qO(t);return zO.test(n)?n:Kf}catch{return Kf}}function qO(t){return $O(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new Map;function b1(t,e){const n=sd(t);C1(n,e),HO(n,e)}function C1(t,e){const n=x1.get(t);if(n)for(const r of n)r(e)}function HO(t,e){const n=GO();n&&n.postMessage({key:t,fid:e}),KO()}let fi=null;function GO(){return!fi&&"BroadcastChannel"in self&&(fi=new BroadcastChannel("[Firebase] FID Change"),fi.onmessage=t=>{C1(t.data.key,t.data.fid)}),fi}function KO(){x1.size===0&&fi&&(fi.close(),fi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO="firebase-installations-database",YO=1,Pi="firebase-installations-store";let gh=null;function og(){return gh||(gh=lT(QO,YO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pi)}}})),gh}async function lc(t,e){const n=sd(t),i=(await og()).transaction(Pi,"readwrite"),s=i.objectStore(Pi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&b1(t,e.fid),e}async function P1(t){const e=sd(t),r=(await og()).transaction(Pi,"readwrite");await r.objectStore(Pi).delete(e),await r.done}async function od(t,e){const n=sd(t),i=(await og()).transaction(Pi,"readwrite"),s=i.objectStore(Pi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&b1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t){let e;const n=await od(t.appConfig,r=>{const i=XO(r),s=JO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Kf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function XO(t){const e=t||{fid:WO(),registrationStatus:0};return N1(e)}function JO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ci.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ZO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eL(t)}:{installationEntry:e}}async function ZO(t,e){try{const n=await BO(t,e);return lc(t.appConfig,n)}catch(n){throw E1(n)&&n.customData.serverCode===409?await P1(t.appConfig):await lc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eL(t){let e=await ew(t.appConfig);for(;e.registrationStatus===1;)await R1(100),e=await ew(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ag(t);return r||n}return e}function ew(t){return od(t,e=>{if(!e)throw Ci.create("installation-not-found");return N1(e)})}function N1(t){return tL(t)?{fid:t.fid,registrationStatus:0}:t}function tL(t){return t.registrationStatus===1&&t.registrationTime+v1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL({appConfig:t,heartbeatServiceProvider:e},n){const r=rL(t,n),i=UO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:_1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await k1(()=>fetch(r,a));if(u.ok){const c=await u.json();return I1(c)}else throw await S1("Generate Auth Token",u)}function rL(t,{fid:e}){return`${T1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t,e=!1){let n;const r=await od(t.appConfig,s=>{if(!D1(s))throw Ci.create("not-registered");const o=s.authToken;if(!e&&oL(o))return s;if(o.requestStatus===1)return n=iL(t,e),s;{if(!navigator.onLine)throw Ci.create("app-offline");const a=lL(s);return n=sL(t,a),a}});return n?await n:r.authToken}async function iL(t,e){let n=await tw(t.appConfig);for(;n.authToken.requestStatus===1;)await R1(100),n=await tw(t.appConfig);const r=n.authToken;return r.requestStatus===0?lg(t,e):r}function tw(t){return od(t,e=>{if(!D1(e))throw Ci.create("not-registered");const n=e.authToken;return uL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sL(t,e){try{const n=await nL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await lc(t.appConfig,r),n}catch(n){if(E1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await P1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lc(t.appConfig,r)}throw n}}function D1(t){return t!==void 0&&t.registrationStatus===2}function oL(t){return t.requestStatus===2&&!aL(t)}function aL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+OO}function lL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uL(t){return t.requestStatus===1&&t.requestTime+v1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cL(t){const e=t,{installationEntry:n,registrationPromise:r}=await ag(e);return r?r.catch(console.error):lg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dL(t,e=!1){const n=t;return await hL(n),(await lg(n,e)).token}async function hL(t){const{registrationPromise:e}=await ag(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(t){if(!t||!t.options)throw yh("App Configuration");if(!t.name)throw yh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw yh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function yh(t){return Ci.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="installations",pL="installations-internal",mL=t=>{const e=t.getProvider("app").getImmediate(),n=fL(e),r=lr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},gL=t=>{const e=t.getProvider("app").getImmediate(),n=lr(e,O1).getImmediate();return{getId:()=>cL(n),getToken:i=>dL(n,i)}};function yL(){tn(new $t(O1,mL,"PUBLIC")),tn(new $t(pL,gL,"PRIVATE"))}yL();ft(y1,sg);ft(y1,sg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="analytics",vL="firebase_id",_L="origin",wL=60*1e3,EL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ug="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Pc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jt=new Vi("analytics","Analytics",TL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t){if(!t.startsWith(ug)){const e=jt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function L1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function SL(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function AL(t,e){const n=SL("firebase-js-sdk-policy",{createScriptURL:IL}),r=document.createElement("script"),i=`${ug}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function kL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function RL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await L1(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){It.error(a)}t("config",i,s)}async function xL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await L1(n);for(const u of o){const c=a.find(f=>f.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){It.error(s)}}function bL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await xL(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await RL(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){It.error(a)}}return i}function CL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=bL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function PL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ug)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=30,DL=1e3;class OL{constructor(e={},n=DL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const V1=new OL;function LL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function VL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:LL(r)},s=EL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw jt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ML(t,e=V1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw jt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw jt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jL;return setTimeout(async()=>{a.abort()},wL),M1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function M1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=V1){var s;const{appId:o,measurementId:a}=t;try{await UL(r,e)}catch(u){if(a)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await VL(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!FL(c)){if(i.deleteThrottleMetadata(o),a)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Fv(n,i.intervalMillis,NL):Fv(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),It.debug(`Calling attemptFetch again in ${h} millis`),M1(t,f,r,i)}}function UL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(jt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function FL(t){if(!(t instanceof qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function BL(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}async function $L(t,e,n,r){{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL(){if(iT())try{await sT()}catch(t){return It.warn(jt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(jt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WL(t,e,n,r,i,s,o){var a;const u=ML(t);u.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>It.error(_)),e.push(u);const c=zL().then(_=>{if(_)return r.getId()}),[h,f]=await Promise.all([u,c]);PL(s)||AL(s,h.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[_L]="firebase",m.update=!0,f!=null&&(m[vL]=f),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qL=class{constructor(e){this.app=e}_delete(){return delete Is[this.app.options.appId],Promise.resolve()}},Is={},nw=[];const rw={};let vh="dataLayer",HL="gtag",iw,cg,sw=!1;function GL(){const t=[];if(rT()&&t.push("This is a browser extension environment."),Jx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=jt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function KL(t,e,n){GL();const r=t.options.appId;if(!r)throw jt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jt.create("no-api-key");if(Is[r]!=null)throw jt.create("already-exists",{id:r});if(!sw){kL(vh);const{wrappedGtag:s,gtagCore:o}=CL(Is,nw,rw,vh,HL);cg=s,iw=o,sw=!0}return Is[r]=WL(t,nw,rw,e,iw,vh,n),new qL(t)}function QL(t=La()){t=re(t);const e=lr(t,uc);return e.isInitialized()?e.getImmediate():YL(t)}function YL(t,e={}){const n=lr(t,uc);if(n.isInitialized()){const i=n.getImmediate();if(Ii(e,n.getOptions()))return i;throw jt.create("already-initialized")}return n.initialize({options:e})}function XL(t,e,n){t=re(t),$L(cg,Is[t.app.options.appId],e).catch(r=>It.error(r))}function U1(t,e,n,r){t=re(t),BL(cg,Is[t.app.options.appId],e,n,r).catch(i=>It.error(i))}const ow="@firebase/analytics",aw="0.10.8";function JL(){tn(new $t(uc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return KL(r,i,n)},"PUBLIC")),tn(new $t("analytics-internal",t,"PRIVATE")),ft(ow,aw),ft(ow,aw,"esm2017");function t(e){try{const n=e.getProvider(uc).getImmediate();return{logEvent:(r,i,s)=>U1(n,r,i,s)}}catch(n){throw jt.create("interop-component-reg-failed",{reason:n})}}}JL();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="firebasestorage.googleapis.com",j1="storageBucket",ZL=2*60*1e3,eV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends qt{constructor(e,n,r=0){super(_h(e),`Firebase Storage: ${n} (${_h(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function _h(t){return"storage/"+t}function dg(){const t="An unknown error occurred, please check the error payload for server response.";return new Pe(Ce.UNKNOWN,t)}function tV(t){return new Pe(Ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function nV(t){return new Pe(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(Ce.UNAUTHENTICATED,t)}function iV(){return new Pe(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sV(t){return new Pe(Ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function oV(){return new Pe(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aV(){return new Pe(Ce.CANCELED,"User canceled the upload/download.")}function lV(t){return new Pe(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function uV(t){return new Pe(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cV(){return new Pe(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+j1+"' property when initializing the app?")}function dV(){return new Pe(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hV(){return new Pe(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fV(t){return new Pe(Ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qf(t){return new Pe(Ce.INVALID_ARGUMENT,t)}function B1(){return new Pe(Ce.APP_DELETED,"The Firebase app was deleted.")}function pV(t){return new Pe(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xo(t,e){return new Pe(Ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Io(t){throw new Pe(Ce.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Vt.makeFromUrl(e,n)}catch{return new Vt(e,"")}if(r.path==="")return r;throw uV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),T={bucket:1,path:3},x=n===F1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",g=new RegExp(`^https?://${x}/${i}/${b}`,"i"),S=[{regex:a,indices:u,postModify:s},{regex:_,indices:T,postModify:c},{regex:g,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<S.length;D++){const M=S[D],U=M.regex.exec(e);if(U){const A=U[M.indices.bucket];let w=U[M.indices.path];w||(w=""),r=new Vt(A,w),M.postModify(r);break}}if(r==null)throw lV(e);return r}}class mV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(_,u())},b)}function m(){s&&clearTimeout(s)}function _(b,...g){if(c){m();return}if(b){m(),h.call(null,b,...g);return}if(u()||o){m(),h.call(null,b,...g);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,f(S)}let T=!1;function x(b){T||(T=!0,m(),!c&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function yV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(t){return t!==void 0}function _V(t){return typeof t=="object"&&!Array.isArray(t)}function hg(t){return typeof t=="string"||t instanceof String}function lw(t){return fg()&&t instanceof Blob}function fg(){return typeof Blob<"u"}function uw(t,e,n,r){if(r<e)throw Qf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var yi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yi||(yi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e,n,r,i,s,o,a,u,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Fl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===yi.NO_ERROR,u=s.getStatus();if(!a||wV(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===yi.ABORT;r(!1,new Fl(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Fl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());vV(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=dg();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?B1():aV();o(u)}else{const u=oV();o(u)}};this.canceled_?n(!1,new Fl(!1,null,!0)):this.backoffId_=gV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function TV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function SV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kV(t,e,n,r,i,s,o=!0){const a=$1(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return SV(c,e),TV(c,n),IV(c,s),AV(c,r),new EV(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xV(...t){const e=RV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(fg())return new Blob(t);throw new Pe(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){if(typeof atob>"u")throw fV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wh{constructor(e,n){this.data=e,this.contentType=n||null}}function PV(t,e){switch(t){case Tn.RAW:return new wh(z1(e));case Tn.BASE64:case Tn.BASE64URL:return new wh(W1(t,e));case Tn.DATA_URL:return new wh(DV(e),OV(e))}throw dg()}function z1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function NV(t){let e;try{e=decodeURIComponent(t)}catch{throw Xo(Tn.DATA_URL,"Malformed data URL.")}return z1(e)}function W1(t,e){switch(t){case Tn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Xo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Tn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Xo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=CV(e)}catch(i){throw i.message.includes("polyfill")?i:Xo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class q1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xo(Tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=LV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DV(t){const e=new q1(t);return e.base64?W1(Tn.BASE64,e.rest):NV(e.rest)}function OV(t){return new q1(t).contentType}function LV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){let r=0,i="";lw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(lw(this.data_)){const r=this.data_,i=bV(r,e,n);return i===null?null:new Sr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Sr(r,!0)}}static getBlob(...e){if(fg()){const n=e.map(r=>r instanceof Sr?r.data_:r);return new Sr(xV.apply(null,n))}else{const n=e.map(o=>hg(o)?PV(Tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Sr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){let e;try{e=JSON.parse(t)}catch{return null}return _V(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function G1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(t,e){return e}class vt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||UV}}let jl=null;function FV(t){return!hg(t)||t.length<2?t:G1(t)}function K1(){if(jl)return jl;const t=[];t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));function e(s,o){return FV(o)}const n=new vt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new vt("size");return i.xform=r,t.push(i),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),jl=t,jl}function jV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Vt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function BV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return jV(r,t),r}function Q1(t,e,n){const r=H1(e);return r===null?null:BV(t,r,n)}function $V(t,e,n,r){const i=H1(e);if(i===null||!hg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),_=ad(m,n,r),T=$1({alt:"media",token:c});return _+T})[0]}function zV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class pg{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){if(!t)throw dg()}function WV(t,e){function n(r,i){const s=Q1(t,i,e);return Y1(s!==null),s}return n}function qV(t,e){function n(r,i){const s=Q1(t,i,e);return Y1(s!==null),$V(s,i,t.host,t._protocol)}return n}function X1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=iV():i=rV():n.getStatus()===402?i=nV(t.bucket):n.getStatus()===403?i=sV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function J1(t){const e=X1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=tV(t.path)),s.serverResponse=i.serverResponse,s}return n}function HV(t,e,n){const r=e.fullServerUrl(),i=ad(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new pg(i,s,qV(t,n),o);return a.errorHandler=J1(e),a}function GV(t,e){const n=e.fullServerUrl(),r=ad(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const a=new pg(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=J1(e),a}function KV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function QV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=KV(null,e)),r}function YV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let D=0;D<2;D++)S=S+Math.random().toString().slice(2);return S}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=QV(e,r,i),h=zV(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",_=Sr.getBlob(f,r,m);if(_===null)throw dV();const T={name:c.fullPath},x=ad(s,t.host,t._protocol),b="POST",g=t.maxUploadRetryTime,v=new pg(x,b,WV(t,n),g);return v.urlParams=T,v.headers=o,v.body=_.uploadData(),v.errorHandler=X1(e),v}class XV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class JV extends XV{initXhr(){this.xhr_.responseType="text"}}function mg(){return new JV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this._service=e,n instanceof Vt?this._location=n:this._location=Vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ni(e,n)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return G1(this._location.path)}get storage(){return this._service}get parent(){const e=VV(this._location.path);if(e===null)return null;const n=new Vt(this._location.bucket,e);return new Ni(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pV(e)}}function ZV(t,e,n){t._throwIfRoot("uploadBytes");const r=YV(t.storage,t._location,K1(),new Sr(e,!0),n);return t.storage.makeRequestWithTokens(r,mg).then(i=>({metadata:i,ref:t}))}function eM(t){t._throwIfRoot("getDownloadURL");const e=HV(t.storage,t._location,K1());return t.storage.makeRequestWithTokens(e,mg).then(n=>{if(n===null)throw hV();return n})}function tM(t){t._throwIfRoot("deleteObject");const e=GV(t.storage,t._location);return t.storage.makeRequestWithTokens(e,mg)}function nM(t,e){const n=MV(t._location.path,e),r=new Vt(t._location.bucket,n);return new Ni(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(t){return/^[A-Za-z]+:\/\//.test(t)}function iM(t,e){return new Ni(t,e)}function Z1(t,e){if(t instanceof gg){const n=t;if(n._bucket==null)throw cV();const r=new Ni(n,n._bucket);return e!=null?Z1(r,e):r}else return e!==void 0?nM(t,e):t}function sM(t,e){if(e&&rM(e)){if(t instanceof gg)return iM(t,e);throw Qf("To use ref(service, url), the first argument must be a Storage instance.")}else return Z1(t,e)}function cw(t,e){const n=e==null?void 0:e[j1];return n==null?null:Vt.makeFromBucketSpec(n,t)}function oM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:nT(i,t.app.options.projectId))}class gg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=F1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZL,this._maxUploadRetryTime=eV,this._requests=new Set,i!=null?this._bucket=Vt.makeFromBucketSpec(i,this._host):this._bucket=cw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=cw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){uw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){uw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ni(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new mV(B1());{const o=kV(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const dw="@firebase/storage",hw="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="storage";function fw(t,e,n){return t=re(t),ZV(t,e,n)}function Eh(t){return t=re(t),eM(t)}function aM(t){return t=re(t),tM(t)}function Bl(t,e){return t=re(t),sM(t,e)}function lM(t=La(),e){t=re(t);const r=lr(t,eS).getImmediate({identifier:e}),i=rm("storage");return i&&uM(r,...i),r}function uM(t,e,n,r={}){oM(t,e,n,r)}function cM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new gg(n,r,i,e,Mi)}function dM(){tn(new $t(eS,cM,"PUBLIC").setMultipleInstances(!0)),ft(dw,hw,""),ft(dw,hw,"esm2017")}dM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM="type.googleapis.com/google.protobuf.Int64Value",fM="type.googleapis.com/google.protobuf.UInt64Value";function tS(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Yf(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Yf(e));if(typeof t=="function"||typeof t=="object")return tS(t,e=>Yf(e));throw new Error("Data cannot be encoded in JSON: "+t)}function cc(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case hM:case fM:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>cc(e)):typeof t=="function"||typeof t=="object"?tS(t,e=>cc(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ss extends qt{constructor(e,n,r){super(`${yg}/${e}`,n||""),this.details=r}}function pM(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function mM(t,e){let n=pM(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!pw[o])return new Ss("internal","internal");n=pw[o],r=o}const a=s.message;typeof a=="string"&&(r=a),i=s.details,i!==void 0&&(i=cc(i))}}catch{}return n==="ok"?null:new Ss(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="us-central1";function yM(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Ss("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class vM{constructor(e,n,r,i,s=Xf,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new gM(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=Xf}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function _M(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function wM(t,e,n){return r=>TM(t,e,r,{})}async function EM(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function TM(t,e,n,r){const i=t._url(e);return IM(t,i,n,r)}async function IM(t,e,n,r){n=Yf(n);const i={data:n},s={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,u=yM(a),c=await Promise.race([EM(e,i,s,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!c)throw new Ss("cancelled","Firebase Functions instance was deleted.");const h=mM(c.status,c.json);if(h)throw h;if(!c.json)throw new Ss("internal","Response is not valid JSON object.");let f=c.json.data;if(typeof f>"u"&&(f=c.json.result),typeof f>"u")throw new Ss("internal","Response is missing data field.");return{data:cc(f)}}const mw="@firebase/functions",gw="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM="auth-internal",AM="app-check-internal",kM="messaging-internal";function RM(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(SM),a=r.getProvider(kM),u=r.getProvider(AM);return new vM(s,o,a,u,i,t)};tn(new $t(yg,n,"PUBLIC").setMultipleInstances(!0)),ft(mw,gw,e),ft(mw,gw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t=La(),e=Xf){const r=lr(re(t),yg).getImmediate({identifier:e}),i=rm("functions");return i&&xM(r,...i),r}function xM(t,e,n){_M(re(t),e,n)}function fu(t,e,n){return wM(re(t),e)}RM(fetch.bind(self));const bM={apiKey:"AIzaSyD7VNKg6Gqam8qHZiHUpzgleVYbk8Gc9qU",authDomain:"bankroll-2ccb4.firebaseapp.com",databaseURL:"https://bankroll-2ccb4-default-rtdb.firebaseio.com",projectId:"bankroll-2ccb4",storageBucket:"bankroll-2ccb4.firebasestorage.app",messagingSenderId:"443440711718",appId:"1:443440711718:web:dc3f58dfe81324edc3bee7",measurementId:"G-QZ2NEGJV6D"};let si=null,he=null,ue=null,hs=null,Kt=null,yw=null;try{console.log("Initializing Firebase app..."),si=uT(bM),console.log("Firebase app initialized successfully"),console.log("Initializing Firestore..."),he=Dm(si),console.log("Firestore initialized successfully"),console.log("Initializing Auth..."),ue=PO(si),console.log("Auth initialized successfully"),console.log("Initializing Storage..."),Kt=lM(si),console.log("Storage initialized successfully"),console.log("Initializing Functions..."),yw=vg(si),console.log("Functions initialized successfully"),console.log("Initializing Analytics..."),typeof window<"u"?(hs=QL(si),console.log("Analytics initialized successfully")):console.log("Analytics skipped - not in browser environment")}catch(t){console.error("Firebase initialization error:",t),console.error("Error details:",{code:t.code,message:t.message,stack:t.stack}),si||console.error("Failed to initialize Firebase app"),he||console.error("Failed to initialize Firestore"),ue||console.error("Failed to initialize Auth"),Kt||console.error("Failed to initialize Storage"),yw||console.error("Failed to initialize Functions"),!hs&&typeof window<"u"&&console.error("Failed to initialize Analytics")}var Aw;if(he)try{const t=(Aw=he._firestoreClient)==null?void 0:Aw.connectivityMonitor;t&&t.addCallback(e=>{console.log("Firestore connection state:",e?"CONNECTED":"DISCONNECTED")})}catch(t){console.error("Error setting up Firestore connection listener:",t)}Kt?console.log("Storage bucket:",Kt.app.options.storageBucket):console.error("Storage is not initialized");const Ki=new Map;class sr{static async getStaticAssetUrl(e,n){try{if(!Kt)throw new Error("Firebase Storage is not initialized");const r=`${e}/${n}`;if(Ki.has(r))return console.log("Using cached URL for:",r),Ki.get(r);const i=[`${e}/${n}`,n,`static/${e}/${n}`,`platform-logos/${n}`];let s=null,o=null;for(const u of i)try{console.log("Attempting to fetch URL for path:",u);const c=Bl(Kt,u);if(s=await Eh(c),s)return Ki.set(r,s),console.log("Successfully fetched and cached URL for:",u),s}catch(c){console.log(`Failed to fetch from path ${u}:`,c.message),o=c;continue}console.log("Attempting to use local public image as fallback:",n);const a=`/images/${n}`;try{if((await fetch(a,{method:"HEAD"})).ok)return console.log("Successfully found local image:",a),Ki.set(r,a),a}catch(u){console.log("Failed to fetch local image:",u)}throw o||new Error("Failed to get URL from any path")}catch(r){throw console.error("Error getting static asset URL:",{category:e,filename:n,error:{code:r.code,message:r.message,stack:r.stack}}),new Error(`Failed to get static asset URL: ${r.message}`)}}static async uploadStaticAsset(e,n,r){try{if(!Kt)throw new Error("Firebase Storage is not initialized");if(!e||!n||!r)throw new Error("File, category, and filename are required");const i=Bl(Kt,`${n}/${r}`),s={contentType:e.type,customMetadata:{category:n,uploadedAt:new Date().toISOString()},cacheControl:"public,max-age=31536000"};console.log("Uploading static asset...");const o=await fw(i,e,s);if(!o)throw new Error("Upload failed - no snapshot returned");console.log("Getting download URL...");const a=await Eh(o.ref);if(!a)throw new Error("Failed to get download URL");const u=`${n}/${r}`;return Ki.set(u,a),console.log("Static asset upload complete. URL:",a),a}catch(i){throw console.error("Detailed error in uploadStaticAsset:",{code:i.code,message:i.message,stack:i.stack,name:i.name,category:n,fileName:r}),new Error(`Failed to upload static asset: ${i.message}`)}}static async uploadProfileImage(e,n){try{if(!Kt)throw new Error("Firebase Storage is not initialized");if(!e||!n)throw new Error("File and user ID are required");const r=Date.now(),i=Math.random().toString(36).substring(2,15),s=e.name.split(".").pop(),o=`${r}-${i}.${s}`,a=Bl(Kt,`profile-images/${n}/${o}`),u={contentType:e.type,customMetadata:{userId:n,uploadedAt:new Date().toISOString()},cacheControl:"public,max-age=31536000"};console.log("Uploading file...");const c=await fw(a,e,u);if(!c)throw new Error("Upload failed - no snapshot returned");console.log("Getting download URL...");const h=await Eh(c.ref);if(!h)throw new Error("Failed to get download URL");const f=`${h}?t=${r}`;return console.log("Upload complete. URL:",f),f}catch(r){throw console.error("Error in uploadProfileImage:",r),r}}static async deleteProfileImage(e){try{if(!Kt)throw new Error("Firebase Storage is not initialized");const n=e.split("?")[0];if(!n||!n.includes("firebasestorage.googleapis.com")){console.log("Invalid or non-Firebase URL, skipping deletion");return}try{const r=Bl(Kt,n);await aM(r),console.log("Old profile image deleted successfully")}catch(r){if(r.code==="storage/object-not-found"){console.log("Old profile image not found, skipping deletion");return}throw r}}catch(n){console.warn("Failed to delete old profile image:",n.message)}}static clearCache(){Ki.clear(),console.log("Storage URL cache cleared")}}function nS(t){return t?t instanceof de?t.toDate():t:new Date}function Jf(t){if(!t||t.length===0)return 0;const e=new Date;return t.filter(n=>n.status==="active"&&(!n.dateExpires||nS(n.dateExpires)>e)).reduce((n,r)=>n+(r.amount||0),0)}function CM(t,e,n){return{platformId:t,name:e,logo:n,cashBalance:0,bonusBalances:[],totalBonusBalance:0,lastUpdated:new Date,status:"active",connected:!1,created:!1,loading:!1,notifiedRedeemable:!1}}class xa{static async getImageUrl(e){try{const n=["static/platform-logos","platform-logos","static"];let r=null;for(const s of n)try{if(r=await sr.getStaticAssetUrl(s,e),r)return console.log(`Successfully loaded image from path: ${s}/${e}`),r}catch(o){console.log(`Failed to load from path ${s}/${e}:`,o.message);continue}const i=`/images/${e}`;try{if((await fetch(i,{method:"HEAD"})).ok)return console.log("Successfully loaded from public/images:",i),i}catch(s){console.log("Failed to load from public/images:",s)}throw new Error("Failed to load image from any path")}catch(n){return console.error(`Error getting platform image URL for ${e}:`,n),null}}static async uploadPlatformImage(e,n){try{const r=["static/platform-logos","platform-logos","static"];let i=null;for(const s of r)try{if(i=await sr.uploadStaticAsset(e,s,n),i)return console.log(`Successfully uploaded to path: ${s}/${n}`),i}catch(o){console.log(`Failed to upload to path ${s}/${n}:`,o.message);continue}throw new Error("Failed to upload image to any path")}catch(r){throw console.error(`Error uploading platform image ${n}:`,r),r}}}const ln={fanduel:{id:"fanduel",name:"FanDuel",logo:"fanduel.png"},draftkings:{id:"draftkings",name:"DraftKings",logo:"draftkingsFantasy.png"},underdog:{id:"underdog",name:"Underdog",logo:"underdog.jpeg"},sleeper:{id:"sleeper",name:"Sleeper",logo:"sleeperFantasy.png"},cbs:{id:"cbs",name:"CBS",logo:"CBS Sports.png"},yahoo:{id:"yahoo",name:"Yahoo",logo:"yahoofantasy.png"},espnbet:{id:"espnbet",name:"ESPNBet",logo:"espnBet.png"},espnfantasy:{id:"espnfantasy",name:"ESPN Fantasy",logo:"espnFantasy.png"},fanatics:{id:"fanatics",name:"Fanatics",logo:"fanatics.png"},betmgm:{id:"betmgm",name:"BetMGM",logo:"betmgm.png"},caesars:{id:"caesars",name:"Caesars",logo:"caesars.png"},pokerstars:{id:"pokerstars",name:"PokerStars",logo:"pokerstars.png"},betr:{id:"betr",name:"Betr",logo:"betrFantasy.png"},prizepicks:{id:"prizepicks",name:"PrizePicks",logo:"prizepicks.png"},dwolla:{id:"dwolla",name:"Dwolla Balance",logo:"BankrollLogoTransparent.png"}},$l="/images/default.png";class PM{constructor(){Nd(this,"firestore");if(!he)throw new Error("Firestore must be initialized before using WalletService");this.firestore=he,sr.clearCache()}validatePlatformId(e){return e in ln}async getPlatformInfo(e){if(this.validatePlatformId(e)){const n=ln[e];try{const r=await xa.getImageUrl(n.logo);return{id:n.id,name:n.name,logo:r||$l}}catch(r){return console.error("Error loading platform logo:",r),{id:n.id,name:n.name,logo:$l}}}return{id:e,name:`Platform ${e}`,logo:$l}}calculateTotalBonusBalance(e=[]){return e.filter(n=>n.status==="active"&&(!n.dateExpires||nS(n.dateExpires)>new Date)).reduce((n,r)=>n+(r.amount||0),0)}async createInitialSubWallet(e){const n=await this.getPlatformInfo(e);return{platformId:n.id,name:n.name,logo:n.logo,cashBalance:0,bonusBalances:[],totalBonusBalance:0,lastUpdated:de.now(),status:"active",connected:!0,created:!0,loading:!1,notifiedRedeemable:!1}}async createSubWallet(e,n){var i;if(!this.validatePlatformId(n))throw new Error(`Invalid platform ID: ${n}`);const r=be(this.firestore,"users",e);try{await Aa(this.firestore,async u=>{const c=await u.get(r);if(!c.exists())throw new Error("User document not found");if((c.data().subWallets||{})[n]){console.log("SubWallet already exists:",n);return}const m=await this.createInitialSubWallet(n);m.bonusBalances=[],m.totalBonusBalance=0,m.created=!0,m.connected=!0,u.update(r,{[`subWallets.${n}`]:m,lastUpdated:de.now()}),console.log("Creating subWallet:",{platformId:n,subWallet:m})});const o=(await Ze(r)).data(),a=(i=o==null?void 0:o.subWallets)==null?void 0:i[n];if(console.log("Created subWallet in Firebase:",{platformId:n,subWallet:a}),!a)throw new Error("Failed to verify wallet creation")}catch(s){throw console.error("Error creating wallet:",s),s}}async initializeUserWallet(e){const n=be(this.firestore,"users",e);try{sr.clearCache(),await Aa(this.firestore,async s=>{const o=await s.get(n),a=await xa.getImageUrl("BankrollLogoTransparent.png"),u={id:e,totalCashBalance:0,totalBonusBalance:0,availableWithdrawal:0,investableBalance:0,subWallets:{},bankroll:{balance:0,logo:a||$l},lastUpdated:de.now()};for(const c of Object.keys(ln))u.subWallets[c]=await this.createInitialSubWallet(c);if(!o.exists())await s.set(n,u),console.log("Initializing new user wallet:",u);else{const h=o.data().subWallets||{};for(const f of Object.keys(ln))h[f]||(h[f]=await this.createInitialSubWallet(f));await s.update(n,{subWallets:h,lastUpdated:de.now()})}console.log("Initialized wallet structure:",{userId:e,subWallets:u.subWallets})});const r=await Ze(n);if(!r.exists())throw new Error("Failed to verify wallet initialization - document not found");const i=r.data();if(!i.subWallets)throw new Error("Failed to verify wallet initialization - subWallets not found");Object.keys(ln).forEach(s=>{if(!i.subWallets[s])throw new Error(`Failed to verify wallet initialization - ${s} wallet not found`)}),console.log("Successfully verified wallet initialization")}catch(r){throw console.error("Error initializing wallet:",r),r}}}const NM=new PM;class DM{constructor(){Nd(this,"firestore");if(!he)throw new Error("Firestore must be initialized before using BonusWalletService");this.firestore=he}validatePlatformId(e){return e in ln}getPlatformInfo(e){return this.validatePlatformId(e)?ln[e]:{id:e,name:`Platform ${e}`,logo:"/images/default.png"}}createInitialSubWallet(e){const n=this.getPlatformInfo(e);return CM(n.id,n.name,n.logo)}async createTransactionRecord(e,n,r,i){const s=this.getPlatformInfo(n),o=crypto.randomUUID(),a=be(this.firestore,"wallet_transactions",o),u={id:o,userId:e,type:"BONUS_TRANSFER",status:"COMPLETED",amount:r,bonusId:i,fromAccount:"MAIN_BONUS_BALANCE",toAccount:`${s.name.toUpperCase()}_SUBWALLET`,platformId:n,platformName:s.name,timestamp:de.now(),description:`Bonus transfer to ${s.name}`,metadata:{platformLogo:s.logo}};return(await Ze(a)).exists()||await Km(a,u),u}async createBonus(e,n){var s;if(!this.validatePlatformId(n.platformId))throw new Error(`Invalid platform ID: ${n.platformId}`);const r=be(this.firestore,"users",e),i=crypto.randomUUID();try{await Aa(this.firestore,async h=>{const f=await h.get(r);if(!f.exists())throw new Error("User document not found");const m=f.data();m.subWallets||(console.log("Initializing subWallets object..."),h.update(r,{subWallets:{}}));let T=(m.subWallets||{})[n.platformId]||this.createInitialSubWallet(n.platformId);const x={id:i,amount:n.amount,initialAmount:n.amount,dateGranted:de.now(),dateExpires:n.expiryDate?de.fromDate(n.expiryDate):void 0,status:"active",description:n.description,restrictions:[{platformId:n.platformId}]},b=[...T.bonusBalances||[],x],g=Jf(b),v={...T,bonusBalances:b,totalBonusBalance:g,created:!0,connected:!0,loading:!1,lastUpdated:de.now()};h.update(r,{[`subWallets.${n.platformId}`]:v,lastUpdated:de.now()}),console.log("Bonus creation transaction completed:",{platformId:n.platformId,bonusId:i,amount:n.amount,totalBonusBalance:g})});const o=await Ze(r);if(!o.exists())throw new Error("Failed to verify bonus creation - document not found");const a=o.data(),u=(s=a==null?void 0:a.subWallets)==null?void 0:s[n.platformId];if(!(u!=null&&u.bonusBalances))throw new Error("Failed to verify bonus creation - bonus balances not found");const c=u.bonusBalances.find(h=>h.id===i);if(!c)throw new Error("Failed to verify bonus creation - bonus not found");if(c.amount!==n.amount)throw new Error("Failed to verify bonus creation - amount mismatch");return console.log("Bonus creation verified successfully"),i}catch(o){throw console.error("Error creating bonus:",o),o}}async transferBonusToSubWallet(e,n,r){var i;if(!this.validatePlatformId(n))throw new Error(`Invalid platform ID: ${n}`);try{const s=be(this.firestore,"users",e),o=crypto.randomUUID();await this.createTransactionRecord(e,n,r,o),await Aa(this.firestore,async f=>{var D;const m=await f.get(s);if(!m.exists())throw new Error("User document not found");const _=m.data();if(console.log("Current user data:",{bonusBalance:_.bonusBalance,platformId:n,amount:r,currentWallet:(D=_.subWallets)==null?void 0:D[n]}),!_.bonusBalance||_.bonusBalance<r)throw new Error("Insufficient bonus balance");_.subWallets||f.update(s,{subWallets:{}});let x=(_.subWallets||{})[n]||this.createInitialSubWallet(n);const b={id:o,amount:r,initialAmount:r,dateGranted:de.now(),status:"active",description:"Bonus Transfer",restrictions:[{platformId:n}]},g=[...x.bonusBalances||[],b],v=Jf(g),S={...x,bonusBalances:g,totalBonusBalance:v,created:!0,connected:!0,loading:!1,lastUpdated:de.now()};f.update(s,{bonusBalance:pD(-r),[`subWallets.${n}`]:S,lastUpdated:de.now()}),console.log("Bonus transfer transaction completed:",{platformId:n,bonusId:o,amount:r,newTotalBonusBalance:v})});const a=await Ze(s);if(!a.exists())throw new Error("Failed to verify bonus transfer - document not found");const u=a.data(),c=(i=u==null?void 0:u.subWallets)==null?void 0:i[n];if(!(c!=null&&c.bonusBalances))throw new Error("Failed to verify bonus transfer - bonus balances not found");const h=c.bonusBalances.find(f=>f.id===o);if(!h)throw new Error("Failed to verify bonus transfer - bonus not found");if(h.amount!==r)throw new Error("Failed to verify bonus transfer - amount mismatch");console.log("Bonus transfer verified successfully")}catch(s){throw console.error("Error in bonus transfer:",s),s}}}const OM=new DM,rS=C.createContext(),Th="/images/profile_1.jpeg",LM=["admin@bankroll.com","jackson@bankroll.com","jackson@hedgepay.co"],VM=()=>Math.floor(Math.random()*30)+1;function pn(){return C.useContext(rS)}const iS=C.memo(({children:t})=>{const[e,n]=C.useState(null),[r,i]=C.useState(!0),[s,o]=C.useState(!1),[a,u]=C.useState(null),c=C.useCallback(g=>g&&LM.includes(g.email),[]),h=C.useCallback(async(g,v)=>{if(!he){console.warn("Firestore is not initialized");return}try{const S=be(he,"users",g);await Zc(S,{...v,lastUpdated:Ml()});const M=(await Ze(S)).data();return n(U=>({...U,...M})),M}catch(S){throw console.error("Error in updateUserData:",S),S}},[]),f=C.useCallback(async(g,v)=>{if(!ue){console.warn("Auth is not initialized");return}try{if((await m2(ue,g)).length>0)throw new Error("Email is already in use");return u({email:g,password:v}),o(!0),!0}catch(S){throw console.error("Signup validation error:",S),S}},[]),m=C.useCallback(async g=>{var S;if(!he||!a){console.warn("Firestore is not initialized or no signup data");return}let v=null;try{console.log("Creating Firebase Auth user..."),v=(await h2(ue,a.email,a.password)).user,console.log("Firebase Auth user created:",v.uid);const U=`/images/profile_${VM()}.jpeg`,A={id:v.uid,email:a.email,firstName:g.firstName||"",lastName:g.lastName||"",username:g.username||`#user${v.uid.substring(0,6)}`,phoneNumbers:[{number:g.phoneNumber||"",verified:!1,primary:!0,dateAdded:new Date().toISOString()}],identifiers:{username:g.username||`#user${v.uid.substring(0,6)}`,sleeperUsername:null,venmoUsername:null},profileImage:U,notificationPreferences:{inApp:!0,email:((S=g.notificationPreferences)==null?void 0:S.email)??!0,pushToken:null},notifications:[],dwollaCustomerId:"",dwollaBalance:0,bonusBalance:25,lastUpdated:Ml(),lastBalanceUpdate:Ml(),createdAt:Ml(),subWallets:{}};console.log("Creating initial user document...");const w=be(he,"users",v.uid);await Km(w,A),console.log("Initial user document created successfully"),console.log("Initializing wallet structure..."),await NM.initializeUserWallet(v.uid),console.log("Wallet structure initialized successfully"),console.log("Adding welcome bonuses..."),await Aa(he,async P=>{const N=Object.keys(ln);for(const R of N)await OM.createBonus(v.uid,{platformId:R,amount:5,description:"Welcome Bonus",expiryDate:new Date(Date.now()+30*24*60*60*1e3)})}),console.log("All welcome bonuses added successfully");const k=(await Ze(w)).data();return o(!1),u(null),n({...v,...k}),k}catch(D){if(console.error("Signup completion error:",D),v)try{console.log("Cleaning up temporary user..."),await E2(v),console.log("Temporary user cleaned up successfully")}catch(M){console.error("Error cleaning up temporary user:",M)}throw D}},[a]),_=C.useCallback(async(g,v)=>{if(!ue||!he)return console.warn("Auth/Firestore is not initialized"),null;try{await g2(ue,l1),console.log("Auth persistence set to LOCAL");let S=g;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){console.log("Looking up user by username:",g);const w=za(he,"users"),I=Kc(w,Yc("username","==",g)),k=await Jc(I);if(k.empty)throw new Error("No user found with this username");S=k.docs[0].data().email,console.log("Found email for username:",S)}console.log("Attempting to sign in with email:",S);const U=await f2(ue,S,v);console.log("Sign in successful, user ID:",U.user.uid);const A=await Ze(be(he,"users",U.user.uid));if(A.exists()){const w=A.data();console.log("Fetched user data from Firestore:",w),n({...U.user,...w})}else console.warn("No Firestore document found for user:",U.user.uid),n(U.user);return U.user}catch(S){throw console.error("Login error:",S),S}},[]),T=C.useCallback(async()=>{if(!ue){console.warn("Auth is not initialized");return}try{await w2(ue),n(null),o(!1),u(null),sr.clearCache(),console.log("User signed out successfully")}catch(g){throw console.error("Error in logout:",g),g}},[]),x=C.useCallback(async g=>{if(!ue){console.warn("Auth is not initialized");return}try{await d2(ue,g)}catch(v){throw console.error("Error in password reset:",v),v}},[]);C.useEffect(()=>{if(!ue){console.warn("Auth is not initialized"),i(!1);return}return console.log("Setting up auth state change listener"),_2(ue,async v=>{if(console.log("Auth state changed. User:",v?v.uid:"null"),v&&he&&!s)try{console.log("Fetching additional user data from Firestore");const S=await Ze(be(he,"users",v.uid));if(S.exists()){const D=S.data();console.log("User data fetched successfully:",D),n({...v,...D,profileImage:D.profileImage||Th,isAdmin:c(v)})}else console.warn("No Firestore document found for user:",v.uid),n({...v,profileImage:Th,isAdmin:c(v)})}catch(S){console.error("Error fetching user data:",S),n({...v,profileImage:Th,isAdmin:c(v)})}else console.log("No user logged in or new user in signup process"),n(null);i(!1)})},[s,c]);const b={currentUser:e,validateSignupStep1:f,completeSignup:m,login:_,logout:T,resetPassword:x,updateUserData:h,loading:r,isNewUser:s,isAdmin:e?c(e):!1};return E.jsx(rS.Provider,{value:b,children:!r&&t})});iS.displayName="AuthProvider";const sS=C.createContext(),E4=()=>{const t=C.useContext(sS);if(!t)throw new Error("useWallet must be used within a WalletProvider");return t},_n="/images/default.png",Ih=()=>({bankroll:{balance:0,logo:_n},subWallets:Object.keys(ln).reduce((t,e)=>(t[e]={platformId:e,name:ln[e].name,logo:_n,cashBalance:0,bonusBalances:[],totalBonusBalance:0,lastUpdated:new Date,status:"active",connected:!1,created:!1,loading:!1,notifiedRedeemable:!1},t),{}),lastUpdated:new Date}),MM=({children:t})=>{const{currentUser:e}=pn(),[n,r]=C.useState(null),[i,s]=C.useState(!1),[o,a]=C.useState(!1);C.useEffect(()=>{if(!e||o)return;(async()=>{try{const f=await xa.getImageUrl("BankrollLogoTransparent.png"),m=Object.entries(ln).map(async([x,b])=>{try{const g=await xa.getImageUrl(b.logo);return[x,g||_n]}catch(g){return console.error(`Error loading logo for ${x}:`,g),[x,_n]}}),_=await Promise.all(m),T=Object.fromEntries(_);r(x=>{if(!x)return Ih();const b={...x.subWallets};return Object.entries(b).forEach(([g,v])=>{b[g]={...v,logo:T[g]||_n}}),{...x,bankroll:{...x.bankroll,logo:f||_n},subWallets:b}}),a(!0)}catch(f){console.error("Error loading wallet images:",f),r(m=>m?{...m,bankroll:{...m.bankroll,logo:_n},subWallets:Object.entries(m.subWallets).reduce((_,[T,x])=>({..._,[T]:{...x,logo:_n}}),{})}:Ih()),a(!0)}})()},[e,o]),C.useEffect(()=>{if(!e){r(null),s(!1),a(!1);return}s(!0);const h=be(he,"users",e.uid),f=ed(h,m=>{if(m.exists()){const _=m.data();r(T=>{var b;const x={...(T==null?void 0:T.subWallets)||{}};return Object.entries(_.subWallets||{}).forEach(([g,v])=>{var S,D,M;x[g]={...((S=T==null?void 0:T.subWallets)==null?void 0:S[g])||{},...v,logo:((M=(D=T==null?void 0:T.subWallets)==null?void 0:D[g])==null?void 0:M.logo)||_n,bonusBalances:v.bonusBalances||[],totalBonusBalance:Jf(v.bonusBalances||[])}}),{..._,bankroll:{..._.bankroll,logo:((b=T==null?void 0:T.bankroll)==null?void 0:b.logo)||_n},subWallets:x}})}else r(Ih());s(!1)},m=>{console.error("Error in wallet listener:",m),s(!1)});return()=>{f()}},[e]);const c={wallets:n,loading:i,refreshWallet:async()=>Promise.resolve()};return E.jsx(sS.Provider,{value:c,children:t})},Sh="https://api.sleeper.app/v1";class UM{async getUser(e){try{const n=await fetch(`${Sh}/user/${e}`);if(!n.ok)throw new Error("User not found");return await n.json()}catch(n){throw n}}async getUserLeagues(e,n="2024",r="nfl"){try{const i=await fetch(`${Sh}/user/${e}/leagues/${r}/${n}`);if(!i.ok)throw new Error("Failed to fetch leagues");return await i.json()}catch(i){throw i}}async getLeagueUsers(e){try{const n=await fetch(`${Sh}/league/${e}/users`);if(!n.ok)throw new Error("Failed to fetch league users");return await n.json()}catch(n){throw n}}getAvatarUrl(e){return e?`https://sleepercdn.com/avatars/${e}`:null}getLeagueAvatarUrl(e){return e?`https://sleepercdn.com/avatars/${e}`:null}}const Ah=new UM,oS=C.createContext(null);function T4(){const t=C.useContext(oS);if(!t)throw new Error("useSleeper must be used within a SleeperProvider");return t}function FM({children:t}){const[e,n]=C.useState([]),[r,i]=C.useState(null),[s,o]=C.useState(!0),[a,u]=C.useState(null),{currentUser:c}=pn(),h=async _=>{try{o(!0),u(null);const T=await Ah.getUser(_);i(T);const x=await Ah.getUserLeagues(T.user_id);return n(x),T}catch(T){throw console.error("Error fetching Sleeper user:",T),u("Failed to find Sleeper user"),T}finally{o(!1)}},f=()=>{i(null),n([])};C.useEffect(()=>{(async()=>{if(!c||!r){n([]),o(!1);return}try{u(null);const T=await Ah.getUserLeagues(r.user_id);n(T)}catch(T){console.error("Error fetching Sleeper leagues:",T),u("Failed to load Sleeper leagues")}finally{o(!1)}})()},[c,r]);const m={leagues:e,user:r,loading:s,error:a,fetchUser:h,disconnectSleeper:f};return E.jsx(oS.Provider,{value:m,children:t})}class jM{constructor(){this.leaguesCollection=za(he,"espn_leagues")}async getLeaguesByUserId(e){try{if(!e)throw new Error("User ID is required to fetch leagues");const n=Kc(this.leaguesCollection,Yc("userId","==",e));return(await Jc(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){throw console.error("Error getting ESPN leagues:",n),n}}async createLeague(e){var n,r,i,s,o,a;try{if(await new Promise(f=>{const m=ue.onAuthStateChanged(_=>{m(),f(_)})}),!ue.currentUser)throw new Error("User must be authenticated to create a league");if(!((n=e.name)!=null&&n.trim()))throw new Error("League name is required");if(console.log("Current user:",ue.currentUser.uid),console.log("League data userId:",e.userId),e.userId!==ue.currentUser.uid)throw new Error("League userId must match authenticated user");const u={userId:ue.currentUser.uid,platform:"espn",status:e.status||"pending",createdAt:new Date().toISOString(),name:e.name.trim(),isCommissioner:!!e.isCommissioner,leagueSize:Number(e.leagueSize),hasBuyIn:!!e.hasBuyIn,buyInAmount:Number(e.buyInAmount||0),payouts:{first:Number(((r=e.payouts)==null?void 0:r.first)||0),second:Number(((i=e.payouts)==null?void 0:i.second)||0),third:Number(((s=e.payouts)==null?void 0:s.third)||0),fourth:Number(((o=e.payouts)==null?void 0:o.fourth)||0)},hasWeeklyPayouts:!!e.hasWeeklyPayouts,weeklyPayoutDetails:e.weeklyPayoutDetails||"",wantToInvest:!!e.wantToInvest,invitedUsers:Array.isArray(e.invitedUsers)?e.invitedUsers:[],convertToSleeper:e.convertToSleeper||!1,bountyToLeaguePot:e.bountyToLeaguePot||!1};console.log("Creating league with formatted data:",u);const c=await Qm(this.leaguesCollection,u);if(!(await Ze(c)).exists())throw new Error("Failed to create league document");return{id:c.id,...u}}catch(u){throw console.error("Error creating ESPN league:",u),u.code==="permission-denied"&&console.error("Permission denied. Current auth state:",{isAuthenticated:!!ue.currentUser,userId:(a=ue.currentUser)==null?void 0:a.uid,attemptedUserId:e==null?void 0:e.userId}),u}}async updateLeague(e,n){try{if(!ue.currentUser)throw new Error("User must be authenticated to update a league");const r=be(he,"espn_leagues",e),i=await Ze(r);if(!i.exists())throw new Error("League not found");if(i.data().userId!==ue.currentUser.uid)throw new Error("You do not have permission to update this league");const s={...n,updatedAt:new Date().toISOString()};return await Zc(r,s),{id:e,...i.data(),...s}}catch(r){throw console.error("Error updating ESPN league:",r),r}}async deleteLeague(e){try{if(!ue.currentUser)throw new Error("User must be authenticated to delete a league");const n=be(he,"espn_leagues",e),r=await Ze(n);if(!r.exists())throw new Error("League not found");if(r.data().userId!==ue.currentUser.uid)throw new Error("You do not have permission to delete this league");return await dD(n),!0}catch(n){throw console.error("Error deleting ESPN league:",n),n}}}const vw=new jM,aS=C.createContext();function I4(){return C.useContext(aS)}const lS=C.memo(({children:t})=>{const[e,n]=C.useState([]),[r,i]=C.useState(!0),[s,o]=C.useState(null),{currentUser:a}=pn(),u=async()=>{if(!a){n([]),i(!1);return}try{o(null);const f=await vw.getLeaguesByUserId(a.uid);n(f)}catch(f){console.error("Error fetching ESPN leagues:",f),o("Failed to load ESPN leagues")}finally{i(!1)}};C.useEffect(()=>{u()},[a]);const h={leagues:e,loading:r,error:s,createLeague:async f=>{if(!a)throw new Error("User must be logged in to create a league");try{i(!0),o(null);const m=await vw.createLeague({...f,userId:a.uid});return n(_=>[..._,m]),m}catch(m){throw console.error("Error creating ESPN league:",m),o("Failed to create ESPN league"),m}finally{i(!1)}},fetchLeagues:u,isLoading:r};return E.jsx(aS.Provider,{value:h,children:t})});lS.displayName="ESPNProvider";class BM{constructor(){this.leaguesCollection=za(he,"yahoo_leagues")}async getUserLeagues(e){try{if(!e)throw new Error("User ID is required to fetch leagues");const n=Kc(this.leaguesCollection,Yc("userId","==",e));return(await Jc(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){throw console.error("Error fetching user Yahoo leagues:",n),n}}async createLeague(e){var n,r,i,s,o,a;try{if(await new Promise(f=>{const m=ue.onAuthStateChanged(_=>{m(),f(_)})}),!ue.currentUser)throw new Error("User must be authenticated to create a league");if(!((n=e.name)!=null&&n.trim()))throw new Error("League name is required");if(console.log("Current user:",ue.currentUser.uid),console.log("League data userId:",e.userId),e.userId!==ue.currentUser.uid)throw new Error("League userId must match authenticated user");const u={userId:ue.currentUser.uid,platform:"yahoo",status:e.status||"pending",createdAt:new Date().toISOString(),name:e.name.trim(),isCommissioner:!!e.isCommissioner,leagueSize:Number(e.leagueSize),hasBuyIn:!!e.hasBuyIn,buyInAmount:Number(e.buyInAmount||0),payouts:{first:Number(((r=e.payouts)==null?void 0:r.first)||0),second:Number(((i=e.payouts)==null?void 0:i.second)||0),third:Number(((s=e.payouts)==null?void 0:s.third)||0),fourth:Number(((o=e.payouts)==null?void 0:o.fourth)||0)},hasWeeklyPayouts:!!e.hasWeeklyPayouts,weeklyPayoutDetails:e.weeklyPayoutDetails||"",wantToInvest:!!e.wantToInvest,invitedUsers:Array.isArray(e.invitedUsers)?e.invitedUsers:[],convertToSleeper:e.convertToSleeper||!1,bountyToLeaguePot:e.bountyToLeaguePot||!1};console.log("Creating league with formatted data:",u);const c=await Qm(this.leaguesCollection,u);if(!(await Ze(c)).exists())throw new Error("Failed to create league document");return{id:c.id,...u}}catch(u){throw console.error("Error creating Yahoo league:",u),u.code==="permission-denied"&&console.error("Permission denied. Current auth state:",{isAuthenticated:!!ue.currentUser,userId:(a=ue.currentUser)==null?void 0:a.uid,attemptedUserId:e==null?void 0:e.userId}),u}}}const _w=new BM,uS=C.createContext(),S4=()=>{const t=C.useContext(uS);if(!t)throw new Error("useYahoo must be used within a YahooProvider");return t},$M=({children:t})=>{const[e,n]=C.useState([]),[r,i]=C.useState(!1),[s,o]=C.useState(null),{currentUser:a}=pn(),u=async()=>{try{if(!a)throw new Error("You must be logged in to fetch leagues");i(!0),o(null);const f=await _w.getUserLeagues(a.uid);n(f)}catch(f){o(f.message),console.error("Error fetching Yahoo leagues:",f)}finally{i(!1)}};C.useEffect(()=>{a?u():n([])},[a]);const h={leagues:e,isLoading:r,error:s,fetchLeagues:u,createLeague:async f=>{try{if(!a)throw new Error("You must be logged in to create a league");if(i(!0),o(null),f.userId!==a.uid)throw new Error("Invalid user ID for league creation");const m=await _w.createLeague(f);return n(_=>[..._,m]),await u(),m}catch(m){const _=m.message||"Failed to create league";throw o(_),console.error("Error creating Yahoo league:",m),new Error(_)}finally{i(!1)}}};return E.jsx(uS.Provider,{value:h,children:t})},zM=C.createContext(void 0);function WM({children:t}){const[e,n]=C.useState(0),{currentUser:r}=pn(),i=Dm();C.useEffect(()=>{if(!(r!=null&&r.uid))return;const a=be(i,"users",r.uid),u=ed(a,c=>{if(c.exists()){const m=(c.data().notifications||[]).filter(_=>!_.read);n(m.length)}});return()=>u()},[r==null?void 0:r.uid]);const o={unreadCount:e,markAllAsRead:async()=>{if(!(r!=null&&r.uid))return;const a=be(i,"users",r.uid);try{const u=await Ze(a);if(u.exists()){const f=(u.data().notifications||[]).map(m=>({...m,read:!0}));await Zc(a,{notifications:f}),n(0)}}catch(u){console.error("Error marking notifications as read:",u)}}};return E.jsx(zM.Provider,{value:o,children:t})}class qM{constructor(){this.db=Dm(),this.functions=vg()}async getPreferences(e){try{const n=await Ze(be(this.db,"users",e));if(!n.exists()){const r={email:!1,inApp:!0,pushToken:null};return await this.setPreferences(e,r),r}return n.data().notificationPreferences||{email:!1,inApp:!0,pushToken:null}}catch(n){throw console.error("Error getting notification preferences:",n),n}}async setPreferences(e,n){try{await Zc(be(this.db,"users",e),{notificationPreferences:{email:n.email??!1,inApp:!0,pushToken:n.pushToken||null}})}catch(r){throw console.error("Error setting notification preferences:",r),r}}async sendNotification(e,n,r={}){try{const i=await Ze(be(this.db,"users",e));if(!i.exists())throw new Error("User not found");const s=i.data(),o=s.notificationPreferences||{email:!1,inApp:!0};if(await fu(this.functions,"sendNotification")({userId:e,notification:{title:n.title,body:this.replaceVariables(n.body,r),type:n.type,data:r}}),n.defaultChannels.includes("email")&&o.email&&s.email){const u={to:s.email,type:n.type,message:{subject:this.replaceVariables(n.title,r),text:this.replaceVariables(n.body,r),...r}};await Km(be(this.db,"mail",`${Date.now()}-${e}`),u)}return!0}catch(i){throw console.error("Error sending notification:",i),i}}replaceVariables(e,n){return e.replace(/\{\{(\w+)\}\}/g,(r,i)=>n[i]||r)}}const HM=new qM,GM=C.createContext();function KM({children:t}){const{currentUser:e}=pn(),r={inviteUserToGroup:async(i,s)=>{if(!e)throw new Error("User must be authenticated");try{const o=await Ze(be(he,"groups",i));if(!o.exists())throw new Error("Group not found");const a=o.data();await Qm(za(he,"invitations"),{groupId:i,groupName:a.name,inviterUid:e.uid,inviterName:e.displayName||"A user",inviteeEmail:s,status:"pending",createdAt:new Date}),await HM.sendNotification(e.uid,{type:"GROUP_INVITE",title:"Group Invitation",body:`${e.displayName||"A user"} has invited you to join ${a.name}`,data:{groupId:i,groupName:a.name}})}catch(o){throw console.error("Error inviting user to group:",o),o}}};return E.jsx(GM.Provider,{value:r,children:t})}class QM{constructor(){this.functions=vg(),this.createDwollaCustomerFn=fu(this.functions,"createDwollaCustomer"),this.fetchDwollaBalanceFn=fu(this.functions,"fetchDwollaBalance"),this.listDwollaFundingSourcesFn=fu(this.functions,"listDwollaFundingSources")}async createDwollaCustomer(e){try{return(await this.createDwollaCustomerFn(e)).data.customerId}catch(n){throw console.error("Error creating Dwolla customer:",n),n}}async fetchBalance(e){try{return(await this.fetchDwollaBalanceFn({customerId:e})).data.balance}catch(n){throw console.error("Error fetching Dwolla balance:",n),n}}async listFundingSources(e){try{return(await this.listDwollaFundingSourcesFn({customerId:e})).data.fundingSources}catch(n){throw console.error("Error listing funding sources:",n),n}}async getUserByDwollaId(e){if(!he)return null;try{const n=za(he,"users"),r=Kc(n,Yc("dwollaCustomerId","==",e)),i=await Jc(r);return i.empty?null:i.docs[0].data()}catch(n){return console.error("Error getting user by Dwolla ID:",n),null}}}const ww=new QM,cS=C.createContext();function YM({children:t}){const{currentUser:e}=pn(),[n,r]=C.useState(0),[i,s]=C.useState(0),[o,a]=C.useState(0),[u,c]=C.useState(!0);C.useEffect(()=>{if(!e){r(0),s(0),a(0),c(!1);return}const f=ed(be(he,"users",e.uid),async m=>{if(m.exists()){const _=m.data();if(r(_.dwollaBalance||0),s(_.savingsBalance||0),a(_.bonusBalance||0),_.dwollaCustomerId)try{const T=await ww.fetchBalance(_.dwollaCustomerId);T!==_.dwollaBalance&&await ww.updateUserBalance(e.uid,T)}catch(T){console.error("Error fetching Dwolla balance:",T)}}c(!1)},m=>{console.error("Error listening to user document:",m),c(!1)});return()=>f()},[e]);const h={balance:n,savingsBalance:i,bonusBalance:o,isLoading:u};return E.jsx(cS.Provider,{value:h,children:t})}function A4(){const t=C.useContext(cS);if(t===void 0)throw new Error("useDwolla must be used within a DwollaProvider");return t}let XM={data:""},JM=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||XM,ZM=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,eU=/\/\*[^]*?\*\/|  +/g,Ew=/\n+/g,Ar=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Ar(o,s):s+"{"+Ar(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Ar(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Ar.p?Ar.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},jn={},dS=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+dS(t[n]);return e}return t},tU=(t,e,n,r,i)=>{let s=dS(t),o=jn[s]||(jn[s]=(u=>{let c=0,h=11;for(;c<u.length;)h=101*h+u.charCodeAt(c++)>>>0;return"go"+h})(s));if(!jn[o]){let u=s!==t?t:(c=>{let h,f,m=[{}];for(;h=ZM.exec(c.replace(eU,""));)h[4]?m.shift():h[3]?(f=h[3].replace(Ew," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(Ew," ").trim();return m[0]})(t);jn[o]=Ar(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let a=n&&jn.g?jn.g:null;return n&&(jn.g=jn[o]),((u,c,h,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=h?u+c.data:c.data+u)})(jn[o],e,r,a),o},nU=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=u?"."+u:a&&typeof a=="object"?a.props?"":Ar(a,""):a===!1?"":a}return r+i+(o??"")},"");function ld(t){let e=this||{},n=t.call?t(e.p):t;return tU(n.unshift?n.raw?nU(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,JM(e.target),e.g,e.o,e.k)}let hS,Zf,ep;ld.bind({g:1});let or=ld.bind({k:1});function rU(t,e,n,r){Ar.p=e,hS=t,Zf=n,ep=r}function ei(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),u=a.className||i.className;n.p=Object.assign({theme:Zf&&Zf()},a),n.o=/ *go\d+/.test(u),a.className=ld.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),ep&&c[0]&&ep(a),hS(c,a)}return i}}var iU=t=>typeof t=="function",dc=(t,e)=>iU(t)?t(e):t,sU=(()=>{let t=0;return()=>(++t).toString()})(),fS=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),oU=20,pu=new Map,aU=1e3,Tw=t=>{if(pu.has(t))return;let e=setTimeout(()=>{pu.delete(t),$i({type:4,toastId:t})},aU);pu.set(t,e)},lU=t=>{let e=pu.get(t);e&&clearTimeout(e)},tp=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,oU)};case 1:return e.toast.id&&lU(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?tp(t,{type:1,toast:n}):tp(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?Tw(r):t.toasts.forEach(s=>{Tw(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},mu=[],gu={toasts:[],pausedAt:void 0},$i=t=>{gu=tp(gu,t),mu.forEach(e=>{e(gu)})},uU={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},cU=(t={})=>{let[e,n]=C.useState(gu);C.useEffect(()=>(mu.push(n),()=>{let i=mu.indexOf(n);i>-1&&mu.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||uU[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},dU=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||sU()}),Xa=t=>(e,n)=>{let r=dU(e,t,n);return $i({type:2,toast:r}),r.id},Mt=(t,e)=>Xa("blank")(t,e);Mt.error=Xa("error");Mt.success=Xa("success");Mt.loading=Xa("loading");Mt.custom=Xa("custom");Mt.dismiss=t=>{$i({type:3,toastId:t})};Mt.remove=t=>$i({type:4,toastId:t});Mt.promise=(t,e,n)=>{let r=Mt.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Mt.success(dc(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Mt.error(dc(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var hU=(t,e)=>{$i({type:1,toast:{id:t,height:e}})},fU=()=>{$i({type:5,time:Date.now()})},pU=t=>{let{toasts:e,pausedAt:n}=cU(t);C.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let u=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(u<0){a.visible&&Mt.dismiss(a.id);return}return setTimeout(()=>Mt.dismiss(a.id),u)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=C.useCallback(()=>{n&&$i({type:6,time:Date.now()})},[n]),i=C.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:u=8,defaultPosition:c}=o||{},h=e.filter(_=>(_.position||c)===(s.position||c)&&_.height),f=h.findIndex(_=>_.id===s.id),m=h.filter((_,T)=>T<f&&_.visible).length;return h.filter(_=>_.visible).slice(...a?[m+1]:[0,m]).reduce((_,T)=>_+(T.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:hU,startPause:fU,endPause:r,calculateOffset:i}}},mU=or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,gU=or`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,yU=or`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,vU=ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mU} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${gU} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${yU} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,_U=or`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,wU=ei("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${_U} 1s linear infinite;
`,EU=or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,TU=or`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,IU=ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${EU} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${TU} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,SU=ei("div")`
  position: absolute;
`,AU=ei("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,kU=or`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,RU=ei("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${kU} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,xU=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?C.createElement(RU,null,e):e:n==="blank"?null:C.createElement(AU,null,C.createElement(wU,{...r}),n!=="loading"&&C.createElement(SU,null,n==="error"?C.createElement(vU,{...r}):C.createElement(IU,{...r})))},bU=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,CU=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,PU="0%{opacity:0;} 100%{opacity:1;}",NU="0%{opacity:1;} 100%{opacity:0;}",DU=ei("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,OU=ei("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,LU=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=fS()?[PU,NU]:[bU(n),CU(n)];return{animation:e?`${or(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${or(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},VU=C.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?LU(t.position||e||"top-center",t.visible):{opacity:0},s=C.createElement(xU,{toast:t}),o=C.createElement(OU,{...t.ariaProps},dc(t.message,t));return C.createElement(DU,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):C.createElement(C.Fragment,null,s,o))});rU(C.createElement);var MU=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=C.useCallback(o=>{if(o){let a=()=>{let u=o.getBoundingClientRect().height;r(t,u)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return C.createElement("div",{ref:s,className:e,style:n},i)},UU=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:fS()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},FU=ld`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,zl=16,jU=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:u}=pU(n);return C.createElement("div",{style:{position:"fixed",zIndex:9999,top:zl,left:zl,right:zl,bottom:zl,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},a.map(c=>{let h=c.position||e,f=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),m=UU(h,f);return C.createElement(MU,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?FU:"",style:m},c.type==="custom"?dc(c.message,c):i?i(c):C.createElement(VU,{toast:c,position:h}))}))},kh=Mt;/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BU={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $U=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=(t,e)=>{const n=C.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...c},h)=>C.createElement("svg",{ref:h,...BU,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${$U(t)}`,a].join(" "),...c},[...e.map(([f,m])=>C.createElement(f,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zU=mn("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WU=mn("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qU=mn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HU=mn("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GU=mn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KU=mn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QU=mn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YU=mn("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XU=mn("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JU=mn("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=mn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ZU=()=>{const{isDark:t,toggleTheme:e}=Vx();return E.jsx("button",{onClick:e,className:`p-2 rounded-lg transition-all duration-200 ease-in-out transform ${t?"bg-gray-800 text-yellow-400 hover:bg-gray-700":"bg-gray-100 text-gray-900 hover:bg-gray-200"}`,"aria-label":t?"Switch to light mode":"Switch to dark mode",children:E.jsx("div",{className:"relative w-5 h-5",children:t?E.jsx(QU,{className:"absolute inset-0 transition-transform duration-200 ease-in-out"}):E.jsx(KU,{className:"absolute inset-0 transition-transform duration-200 ease-in-out"})})})};var pS={exports:{}},eF="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tF=eF,nF=tF;function mS(){}function gS(){}gS.resetWarningCache=mS;var rF=function(){function t(r,i,s,o,a,u){if(u!==nF){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gS,resetWarningCache:mS};return n.PropTypes=n,n};pS.exports=rF();var iF=pS.exports;const Wl=kw(iF),_g=({size:t="md",color:e="blue",fullScreen:n=!1,text:r="Loading..."})=>{const i={sm:"h-8 w-8",md:"h-12 w-12",lg:"h-16 w-16"},s={blue:"border-blue-500",green:"border-green-500",purple:"border-purple-500",white:"border-white"},o=n?"fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50":"flex flex-col items-center justify-center";return E.jsx("div",{className:o,children:E.jsxs("div",{className:"flex flex-col items-center gap-4",children:[E.jsx("div",{className:`
            ${i[t]} 
            ${s[e]}
            border-4 
            border-t-transparent 
            rounded-full 
            animate-spin
          `}),r&&E.jsx("p",{className:"text-gray-600 dark:text-gray-300 animate-pulse",children:r})]})})};_g.propTypes={size:Wl.oneOf(["sm","md","lg"]),color:Wl.oneOf(["blue","green","purple","white"]),fullScreen:Wl.bool,text:Wl.string};const sF="/images/BankrollLogoTransparent.png",oF=(t,e)=>{const n=t?t.charAt(0).toUpperCase():"",r=e?e.charAt(0).toUpperCase():"";return`${n}${r}`},aF=({initials:t})=>E.jsx("div",{className:"h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm",children:t}),lF=({notificationError:t})=>{const[e,n]=C.useState(!1),[r,i]=C.useState(!1),[s,o]=C.useState(""),[a,u]=C.useState(!1),[c,h]=C.useState(!1),[f,m]=C.useState(0),[_,T]=C.useState(!0),[x,b]=C.useState(!1),{currentUser:g,logout:v}=pn(),S=Hs(),D=Li();C.useEffect(()=>{T(!0);const I=setTimeout(()=>{T(!1)},500);return()=>clearTimeout(I)},[D.pathname]),C.useEffect(()=>{if(!(g!=null&&g.uid))return;const I=be(he,"users",g.uid),k=ed(I,P=>{if(P.exists()){const je=(P.data().notifications||[]).filter(Ht=>!Ht.read);m(je.length)}});return()=>k()},[g==null?void 0:g.uid]),C.useEffect(()=>{if(t){h(!0);const I=setTimeout(()=>h(!1),5e3);return()=>clearTimeout(I)}},[t]),C.useEffect(()=>{(async()=>{try{u(!1);const k=await sr.getStaticAssetUrl("static/site-images","Bankroll Gradient.jpg");o(k)}catch(k){console.error("Error fetching logo:",k),u(!0)}})()},[]),C.useEffect(()=>{const I=k=>{r&&!k.target.closest(".profile-dropdown")&&i(!1)};return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[r]);const M=async()=>{try{await v(),sr.clearCache(),S("/")}catch(I){console.error("Failed to log out:",I)}},U=[{name:"Partners",href:"/app/partners"},{name:"Banking",href:"/app/banking"},{name:"Wallets",href:"/app/wallets"},{name:"Leagues",href:"/app/leagues"},{name:"Friends",href:"/app/friends"},{name:"Groups",href:"/app/groups"},{name:"Send",href:"/app/send"}],A=I=>D.pathname===I,w=I=>{I.target.style.display="none",b(!0)};return E.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200",children:[_&&E.jsx(_g,{fullScreen:!0,color:"blue",text:"Loading..."}),c&&t&&E.jsx("div",{className:"bg-red-600 text-white px-4 py-3",children:E.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[E.jsxs("div",{className:"flex items-center",children:[E.jsx(WU,{className:"h-5 w-5 mr-2"}),E.jsx("p",{className:"text-sm",children:t.includes("Service Worker")?"Unable to enable notifications. Please try refreshing the page.":t})]}),E.jsx("button",{onClick:()=>h(!1),className:"text-white hover:text-gray-200",children:E.jsx(hc,{className:"h-5 w-5"})})]})}),g&&E.jsxs("nav",{className:"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200",children:[E.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:E.jsxs("div",{className:"flex items-center justify-between h-16",children:[E.jsxs("div",{className:"flex items-center",children:[E.jsx("div",{className:"flex-shrink-0",children:E.jsx(Be,{to:"/",children:E.jsx("img",{className:"h-8 w-auto",src:s||sF,alt:"Bankroll",onError:w})})}),E.jsx("div",{className:"hidden md:block",children:E.jsx("div",{className:"ml-10 flex items-baseline space-x-4",children:U.map(I=>E.jsx(Be,{to:I.href,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${A(I.href)?"bg-blue-600 text-white":"text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"}`,children:I.name},I.name))})})]}),E.jsxs("div",{className:"flex items-center",children:[E.jsx(ZU,{}),E.jsx(Be,{to:"/app/rewards",className:"relative p-2 ml-2 transition-colors duration-200",children:E.jsxs("div",{className:`${A("/app/rewards")?"text-white bg-blue-600 rounded-md":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,children:[E.jsx(YU,{className:"h-6 w-6"}),E.jsx("span",{className:"absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full",children:"1"})]})}),E.jsx(Be,{to:"/app/notifications",className:"relative p-2 ml-2 transition-colors duration-200",children:E.jsxs("div",{className:`${A("/app/notifications")?"text-white bg-blue-600 rounded-md":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,children:[E.jsx(zU,{className:"h-6 w-6"}),f>0&&E.jsx("span",{className:"absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full",children:f})]})}),E.jsxs("div",{className:"relative ml-3 profile-dropdown",children:[E.jsx("button",{onClick:()=>i(!r),className:`flex items-center transition-colors duration-200 ${A("/app/profile")||r?"ring-2 ring-blue-600 rounded-full":"hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 rounded-full"}`,children:x?E.jsx(aF,{initials:oF(g==null?void 0:g.firstName,g==null?void 0:g.lastName)}):E.jsx("img",{className:"h-8 w-8 rounded-full",src:g==null?void 0:g.profileImage,alt:g==null?void 0:g.firstName,onError:w})}),r&&E.jsx("div",{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50",children:E.jsxs("div",{className:"py-1",children:[E.jsxs(Be,{to:"/app/profile",className:"flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",onClick:()=>i(!1),children:[E.jsx(XU,{className:"h-4 w-4 mr-2"}),"Profile"]}),E.jsxs("button",{onClick:()=>{i(!1),M()},className:"flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",children:[E.jsx(HU,{className:"h-4 w-4 mr-2"}),"Sign out"]})]})})]}),E.jsx("div",{className:"ml-3 md:hidden",children:E.jsx("button",{onClick:()=>n(!e),className:"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",children:e?E.jsx(hc,{className:"h-6 w-6"}):E.jsx(GU,{className:"h-6 w-6"})})})]})]})}),e&&E.jsx("div",{className:"md:hidden",children:E.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[U.map(I=>E.jsx(Be,{to:I.href,className:`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${A(I.href)?"bg-blue-600 text-white":"text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"}`,onClick:()=>n(!1),children:I.name},I.name)),E.jsx("button",{onClick:M,className:"text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium",children:"Sign out"})]})})]}),E.jsx("main",{className:"flex-1",children:E.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:E.jsx(KE,{})})})]})},uF=()=>{const[t,e]=C.useState(""),[n,r]=C.useState(""),[i,s]=C.useState(""),[o,a]=C.useState(!1),u=Hs(),c=Li(),{login:h,currentUser:f}=pn();C.useEffect(()=>{var _,T;if(f){console.log("User already logged in, redirecting to intended path");const x=((T=(_=c.state)==null?void 0:_.from)==null?void 0:T.pathname)||"/";u(x)}},[f,u,c]);const m=async _=>{var T,x;_.preventDefault();try{s(""),a(!0),console.log("Attempting login with identifier:",t),await h(t,n),console.log("Login successful");const b=((x=(T=c.state)==null?void 0:T.from)==null?void 0:x.pathname)||"/";u(b)}catch(b){console.error("Login error:",b),s("Failed to sign in. Please check your credentials.")}finally{a(!1)}};return f?null:E.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8",children:E.jsxs("div",{className:"max-w-md w-full space-y-8",children:[E.jsxs("div",{children:[E.jsx("img",{className:"mx-auto h-48 w-auto",src:"/images/BankrollLogoTransparent.png",alt:"Bankroll"}),E.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white",children:"Sign in to your account"})]}),E.jsxs("form",{className:"mt-8 space-y-6",onSubmit:m,children:[E.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"identifier",className:"sr-only",children:"Email or Username"}),E.jsx("input",{id:"identifier",name:"identifier",type:"text",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-800",placeholder:"Email or Username",value:t,onChange:_=>e(_.target.value)})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),E.jsx("input",{id:"password",name:"password",type:"password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-800",placeholder:"Password",value:n,onChange:_=>r(_.target.value)})]})]}),i&&E.jsx("div",{className:"text-red-500 text-sm text-center bg-red-100 dark:bg-red-900 p-2 rounded",children:i}),E.jsx("div",{children:E.jsx("button",{type:"submit",disabled:o,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",children:o?E.jsxs("div",{className:"flex items-center",children:[E.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[E.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),E.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing in..."]}):"Sign in"})})]}),E.jsx("div",{className:"text-center mt-4",children:E.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Don't have an account?"," ",E.jsx(Be,{to:"/signup",className:"font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300",children:"Sign up"})]})})]})})};function yS(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=yS(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function cF(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=yS(t))&&(r&&(r+=" "),r+=e);return r}const wg="-",dF=t=>{const e=fF(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const a=o.split(wg);return a[0]===""&&a.length!==1&&a.shift(),vS(a,e)||hF(o)},getConflictingClassGroupIds:(o,a)=>{const u=n[o]||[];return a&&r[o]?[...u,...r[o]]:u}}},vS=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?vS(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=t.join(wg);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},Iw=/^\[(.+)\]$/,hF=t=>{if(Iw.test(t)){const e=Iw.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},fF=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return mF(Object.entries(t.classGroups),n).forEach(([s,o])=>{np(o,r,s,e)}),r},np=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const s=i===""?e:Sw(e,i);s.classGroupId=n;return}if(typeof i=="function"){if(pF(i)){np(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{np(o,Sw(e,s),n,r)})})},Sw=(t,e)=>{let n=t;return e.split(wg).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},pF=t=>t.isThemeGetter,mF=(t,e)=>e?t.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,i]}):t,gF=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}},_S="!",yF=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],s=e.length,o=a=>{const u=[];let c=0,h=0,f;for(let b=0;b<a.length;b++){let g=a[b];if(c===0){if(g===i&&(r||a.slice(b,b+s)===e)){u.push(a.slice(h,b)),h=b+s;continue}if(g==="/"){f=b;continue}}g==="["?c++:g==="]"&&c--}const m=u.length===0?a:a.substring(h),_=m.startsWith(_S),T=_?m.substring(1):m,x=f&&f>h?f-h:void 0;return{modifiers:u,hasImportantModifier:_,baseClassName:T,maybePostfixModifierPosition:x}};return n?a=>n({className:a,parseClassName:o}):o},vF=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},_F=t=>({cache:gF(t.cacheSize),parseClassName:yF(t),...dF(t)}),wF=/\s+/,EF=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=[],o=t.trim().split(wF);let a="";for(let u=o.length-1;u>=0;u-=1){const c=o[u],{modifiers:h,hasImportantModifier:f,baseClassName:m,maybePostfixModifierPosition:_}=n(c);let T=!!_,x=r(T?m.substring(0,_):m);if(!x){if(!T){a=c+(a.length>0?" "+a:a);continue}if(x=r(m),!x){a=c+(a.length>0?" "+a:a);continue}T=!1}const b=vF(h).join(":"),g=f?b+_S:b,v=g+x;if(s.includes(v))continue;s.push(v);const S=i(x,T);for(let D=0;D<S.length;++D){const M=S[D];s.push(g+M)}a=c+(a.length>0?" "+a:a)}return a};function TF(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=wS(e))&&(r&&(r+=" "),r+=n);return r}const wS=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=wS(t[r]))&&(n&&(n+=" "),n+=e);return n};function IF(t,...e){let n,r,i,s=o;function o(u){const c=e.reduce((h,f)=>f(h),t());return n=_F(c),r=n.cache.get,i=n.cache.set,s=a,a(u)}function a(u){const c=r(u);if(c)return c;const h=EF(u,n);return i(u,h),h}return function(){return s(TF.apply(null,arguments))}}const _e=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},ES=/^\[(?:([a-z-]+):)?(.+)\]$/i,SF=/^\d+\/\d+$/,AF=new Set(["px","full","screen"]),kF=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,RF=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xF=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,bF=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,CF=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Bn=t=>As(t)||AF.has(t)||SF.test(t),pr=t=>Js(t,"length",UF),As=t=>!!t&&!Number.isNaN(Number(t)),Rh=t=>Js(t,"number",As),So=t=>!!t&&Number.isInteger(Number(t)),PF=t=>t.endsWith("%")&&As(t.slice(0,-1)),Z=t=>ES.test(t),mr=t=>kF.test(t),NF=new Set(["length","size","percentage"]),DF=t=>Js(t,NF,TS),OF=t=>Js(t,"position",TS),LF=new Set(["image","url"]),VF=t=>Js(t,LF,jF),MF=t=>Js(t,"",FF),Ao=()=>!0,Js=(t,e,n)=>{const r=ES.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},UF=t=>RF.test(t)&&!xF.test(t),TS=()=>!1,FF=t=>bF.test(t),jF=t=>CF.test(t),BF=()=>{const t=_e("colors"),e=_e("spacing"),n=_e("blur"),r=_e("brightness"),i=_e("borderColor"),s=_e("borderRadius"),o=_e("borderSpacing"),a=_e("borderWidth"),u=_e("contrast"),c=_e("grayscale"),h=_e("hueRotate"),f=_e("invert"),m=_e("gap"),_=_e("gradientColorStops"),T=_e("gradientColorStopPositions"),x=_e("inset"),b=_e("margin"),g=_e("opacity"),v=_e("padding"),S=_e("saturate"),D=_e("scale"),M=_e("sepia"),U=_e("skew"),A=_e("space"),w=_e("translate"),I=()=>["auto","contain","none"],k=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",Z,e],N=()=>[Z,e],R=()=>["",Bn,pr],je=()=>["auto",As,Z],Ht=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],gn=()=>["solid","dashed","dotted","double","none"],Gt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",Z],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],se=()=>[As,Z];return{cacheSize:500,separator:":",theme:{colors:[Ao],spacing:[Bn,pr],blur:["none","",mr,Z],brightness:se(),borderColor:[t],borderRadius:["none","","full",mr,Z],borderSpacing:N(),borderWidth:R(),contrast:se(),grayscale:G(),hueRotate:se(),invert:G(),gap:N(),gradientColorStops:[t],gradientColorStopPositions:[PF,pr],inset:P(),margin:P(),opacity:se(),padding:N(),saturate:se(),scale:se(),sepia:G(),skew:se(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",Z]}],container:["container"],columns:[{columns:[mr]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ht(),Z]}],overflow:[{overflow:k()}],"overflow-x":[{"overflow-x":k()}],"overflow-y":[{"overflow-y":k()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",So,Z]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Z]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",So,Z]}],"grid-cols":[{"grid-cols":[Ao]}],"col-start-end":[{col:["auto",{span:["full",So,Z]},Z]}],"col-start":[{"col-start":je()}],"col-end":[{"col-end":je()}],"grid-rows":[{"grid-rows":[Ao]}],"row-start-end":[{row:["auto",{span:[So,Z]},Z]}],"row-start":[{"row-start":je()}],"row-end":[{"row-end":je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Z]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Z,e]}],"min-w":[{"min-w":[Z,e,"min","max","fit"]}],"max-w":[{"max-w":[Z,e,"none","full","min","max","fit","prose",{screen:[mr]},mr]}],h:[{h:[Z,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Z,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Z,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Z,e,"auto","min","max","fit"]}],"font-size":[{text:["base",mr,pr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Rh]}],"font-family":[{font:[Ao]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Z]}],"line-clamp":[{"line-clamp":["none",As,Rh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Bn,Z]}],"list-image":[{"list-image":["none",Z]}],"list-style-type":[{list:["none","disc","decimal",Z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...gn(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Bn,pr]}],"underline-offset":[{"underline-offset":["auto",Bn,Z]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ht(),OF]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",DF]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},VF]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[T]}],"gradient-via-pos":[{via:[T]}],"gradient-to-pos":[{to:[T]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...gn(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:gn()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...gn()]}],"outline-offset":[{"outline-offset":[Bn,Z]}],"outline-w":[{outline:[Bn,pr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:R()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Bn,pr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",mr,MF]}],"shadow-color":[{shadow:[Ao]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...Gt(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Gt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",mr,Z]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[f]}],saturate:[{saturate:[S]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Z]}],duration:[{duration:se()}],ease:[{ease:["linear","in","out","in-out",Z]}],delay:[{delay:se()}],animate:[{animate:["none","spin","ping","pulse","bounce",Z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[So,Z]}],"translate-x":[{"translate-x":[w]}],"translate-y":[{"translate-y":[w]}],"skew-x":[{"skew-x":[U]}],"skew-y":[{"skew-y":[U]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Bn,pr,Rh]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},$F=IF(BF);function IS(...t){return $F(cF(t))}const SS=C.forwardRef(({className:t,children:e,...n},r)=>E.jsx("button",{ref:r,className:IS("px-4 py-2 rounded-md font-medium transition-colors duration-200",t||""),...n,children:e}));SS.displayName="Button";const yu=C.forwardRef(({className:t,type:e,...n},r)=>E.jsx("input",{type:e,className:IS("flex h-10 w-full rounded-md border border-purple-500/20 bg-gray-900/40 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t||""),ref:r,...n}));yu.displayName="Input";const Lo=({className:t="",children:e,onClick:n,...r})=>{const i="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-200",s=n?"cursor-pointer hover:scale-105":"";return E.jsx("div",{className:`${i} ${s} ${t}`,onClick:n,...r,children:e})},xh=({className:t="",children:e,...n})=>E.jsx("div",{className:`p-6 border-b border-gray-700 ${t}`,...n,children:e}),k4=({className:t="",children:e,...n})=>E.jsx("h3",{className:`text-xl font-bold text-white ${t}`,...n,children:e}),ql=({className:t="",children:e,...n})=>E.jsx("div",{className:`p-6 ${t}`,...n,children:e}),zF=()=>{const[t,e]=C.useState(""),[n,r]=C.useState(""),[i,s]=C.useState(""),[o,a]=C.useState(!1),[u,c]=C.useState("/images/Bankroll Gradient.jpg"),{validateSignupStep1:h,completeSignup:f}=pn(),m=Hs();C.useEffect(()=>{(async()=>{try{const x=await sr.getStaticAssetUrl("static/site-images","Bankroll Gradient.jpg");x&&c(x)}catch(x){console.error("Error loading logo:",x)}})()},[]);const _=async T=>{if(T.preventDefault(),n!==i){kh.error("Passwords do not match");return}try{a(!0),await h(t,n),await f({firstName:"",lastName:"",username:"#",phoneNumber:"",notificationPreferences:{email:!0}}),m("/"),kh.success("Account created successfully!")}catch(x){console.error("Signup error:",x),kh.error(x.message||"Failed to create an account")}finally{a(!1)}};return E.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8",children:E.jsx(Lo,{className:"w-full max-w-md space-y-8 bg-gray-800 border-gray-700",children:E.jsxs("div",{className:"mt-8 p-6",children:[E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("img",{className:"mx-auto h-24 w-auto object-contain",src:u,alt:"Bankroll",onError:T=>{T.target.onerror=null,T.target.src="/images/Bankroll Gradient.jpg"}}),E.jsx("h2",{className:"mt-6 text-center text-3xl font-bold tracking-tight text-white",children:"Create your account"})]}),E.jsxs("form",{className:"mt-8 space-y-6",onSubmit:_,children:[E.jsxs("div",{className:"space-y-4 rounded-md shadow-sm",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),E.jsx(yu,{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"bg-gray-700 border-gray-600 text-white placeholder-gray-400",placeholder:"Email address",value:t,onChange:T=>e(T.target.value)})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),E.jsx(yu,{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,className:"bg-gray-700 border-gray-600 text-white placeholder-gray-400",placeholder:"Password",value:n,onChange:T=>r(T.target.value)})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"confirm-password",className:"sr-only",children:"Confirm Password"}),E.jsx(yu,{id:"confirm-password",name:"confirm-password",type:"password",autoComplete:"new-password",required:!0,className:"bg-gray-700 border-gray-600 text-white placeholder-gray-400",placeholder:"Confirm Password",value:i,onChange:T=>s(T.target.value)})]})]}),E.jsx("div",{children:E.jsx(SS,{type:"submit",className:"w-full bg-blue-600 hover:bg-blue-700 text-white",disabled:o,children:o?"Creating account...":"Sign up"})})]}),E.jsx("div",{className:"mt-6 text-center",children:E.jsxs("p",{className:"text-sm text-gray-400",children:["Already have an account?"," ",E.jsx(Be,{to:"/login",className:"font-medium text-blue-500 hover:text-blue-400",children:"Sign in"})]})})]})})})};class WF{logEvent(e,n={}){try{hs&&U1(hs,e,{...n,timestamp:new Date().toISOString()})}catch{}}logClick(e,n,r,i=null){this.logEvent("user_click",{element_id:e,element_type:n,page_name:r,click_timestamp:new Date().toISOString(),user_id:(i==null?void 0:i.uid)||"anonymous",user_email:(i==null?void 0:i.email)||"anonymous",user_display_name:(i==null?void 0:i.displayName)||"anonymous"})}startSession(e){this.logEvent("session_start",{user_id:e,session_start_time:new Date().toISOString()}),hs&&XL(hs,{last_session_start:new Date().toISOString(),user_id:e})}endSession(e,n){this.logEvent("session_end",{user_id:e,session_end_time:new Date().toISOString(),session_duration:n})}logPlatformView(e,n,r){this.logEvent("platform_view",{platform_id:e,platform_name:n,category:r})}logPlatformVisit(e,n){this.logEvent("platform_visit",{platform_id:e,platform_name:n})}logPlatformConnect(e,n){this.logEvent("platform_connect",{platform_id:e,platform_name:n})}logSleeperConnect(e){this.logEvent("sleeper_connect",{username:e})}logSleeperDisconnect(){this.logEvent("sleeper_disconnect")}logSleeperLeagueView(e,n){this.logEvent("sleeper_league_view",{league_id:e,league_name:n})}logPageView(e,n){this.logEvent("page_view",{page_name:e,page_title:n,url:window.location.pathname})}logNotificationPermissionRequested(){this.logEvent("notification_permission_requested")}logNotificationPermissionGranted(){this.logEvent("notification_permission_granted")}logNotificationPermissionDenied(){this.logEvent("notification_permission_denied")}logNotificationSettingsUpdated(e){this.logEvent("notification_settings_updated",{email_enabled:e.emailEnabled,push_enabled:e.pushEnabled,categories:e.categories})}}const rp=new WF,qF=({platform:t,onClose:e})=>{const[n,r]=C.useState(!1),i=()=>{if(rp.logPlatformVisit(t.id,t.name),t.url){const o=window.open();o&&(o.opener=null,o.location=t.url)}},s=()=>{rp.logPlatformConnect(t.id,t.name),r(!0)};return E.jsxs("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:[E.jsxs("div",{className:"bg-gradient-to-b from-purple-100 to-pink-100 rounded-3xl max-w-md w-full mx-auto relative overflow-hidden",children:[E.jsx("button",{onClick:e,className:"absolute top-4 left-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors",children:E.jsx(hc,{className:"h-6 w-6 text-gray-600"})}),E.jsxs("div",{className:"p-6 space-y-6",children:[E.jsxs("div",{className:"flex flex-col items-center justify-center pt-8",children:[E.jsx("div",{className:"w-24 h-24 mb-4",children:E.jsx("img",{src:t.logo,alt:t.name,className:"w-full h-full object-contain rounded-lg"})}),E.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:t.name})]}),E.jsx("div",{className:"text-center",children:E.jsxs("p",{className:"text-gray-600",children:["Legal States: ",t.legalStates||"Information not available"]})}),E.jsxs("div",{className:"bg-white/80 rounded-xl p-4 space-y-2",children:[E.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Promotion Details"}),E.jsx("p",{className:"text-gray-700",children:t.promoDetails||"No current promotions"}),t.restrictions&&E.jsxs("div",{className:"mt-2",children:[E.jsx("h4",{className:"font-medium text-gray-900",children:"Restrictions"}),E.jsx("p",{className:"text-gray-600 text-sm",children:t.restrictions})]})]}),E.jsxs("div",{className:"space-y-3",children:[E.jsxs("button",{onClick:i,className:`w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 
                transition-colors duration-200 flex items-center justify-center space-x-2 group`,children:[E.jsxs("span",{children:["Visit ",t.name]}),E.jsx(qU,{className:"h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),E.jsxs("button",{onClick:s,className:`w-full py-3 bg-yellow-400 text-gray-900 rounded-xl font-medium 
                hover:bg-yellow-500 transition-colors duration-200`,children:["Connect ",t.name]})]}),E.jsx("div",{className:"text-center text-sm text-gray-600 pt-4",children:E.jsx("p",{children:"Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700"})})]})]}),n&&E.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[60]",children:E.jsxs("div",{className:"bg-gray-900 rounded-3xl p-8 max-w-lg mx-4 relative border border-gray-700 shadow-2xl",children:[E.jsx("button",{onClick:()=>r(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors",children:E.jsx(hc,{className:"h-6 w-6"})}),E.jsxs("div",{className:"text-center space-y-6",children:[E.jsx("div",{className:"flex justify-center",children:E.jsx("div",{className:"w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center",children:E.jsx(JU,{className:"h-10 w-10 text-yellow-400"})})}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:"Coming Soon!"}),E.jsxs("p",{className:"text-gray-400 text-lg",children:["Get ready for seamless transactions with ",t.name]})]}),E.jsxs("div",{className:"space-y-4 py-4",children:[E.jsx("p",{className:"text-gray-300 text-lg",children:"We're building something special just for you:"}),E.jsxs("ul",{className:"text-gray-300 text-left space-y-3 max-w-md mx-auto",children:[E.jsxs("li",{className:"flex items-center space-x-3",children:[E.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),E.jsxs("span",{children:["Connect your ",t.name," account directly"]})]}),E.jsxs("li",{className:"flex items-center space-x-3",children:[E.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),E.jsx("span",{children:"Instant deposits with no hassle"})]}),E.jsxs("li",{className:"flex items-center space-x-3",children:[E.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),E.jsx("span",{children:"Lightning-fast withdrawals"})]}),E.jsxs("li",{className:"flex items-center space-x-3",children:[E.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),E.jsx("span",{children:"Track all your gaming activity in one place"})]})]})]}),E.jsx("button",{onClick:()=>r(!1),className:`px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl 
                  font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 
                  transform hover:scale-105`,children:"Can't Wait!"})]})]})})]})},HF=()=>{const{currentUser:t,loading:e}=pn();Hs();const[n,r]=C.useState(null),[i,s]=C.useState({}),[o,a]=C.useState(!0),[u,c]=C.useState(0),[h,f]=C.useState({}),m=[{id:"BET365",name:"Bet365",category:"SPORTS",imageFile:"bet365logo.png",legalStates:"Multiple states",promoDetails:"Special welcome bonus",restrictions:"Must be 21+",url:"https://casino.bet365.com/opening-bonus?affiliate=365_01276644"},{id:"BETMGM",name:"BetMGM Casino",category:"CASINO",imageFile:"betmgm.png",legalStates:"MI, NJ, PA, WV",promoDetails:"100% deposit match up to $1000",restrictions:"Must be 21+",url:"https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1728250"},{id:"DRAFTKINGSCASINO",name:"DraftKings Casino",category:"CASINO",imageFile:"draftkingsCasino.jpeg",legalStates:"Multiple states",promoDetails:"Casino welcome bonus",restrictions:"Must be 21+",url:"https://dksb.sng.link/As9kz/izao?_dl=https%3A%2F%2Fsportsbook.draftkings.com%2Fgateway%3Fs%3D264661052%26wpcid%3D211766%26wpcn%3D1000DB%26wpsrc%3DWinDaily%26wpcrid%3D%26wpscn%3D&pcid=211766&pscn=WD2&pcn=1000DB"},{id:"DRAFTKINGSFANTASY",name:"DraftKings Fantasy",category:"FANTASY",imageFile:"draftkingsFantasy.png",legalStates:"Most US states",promoDetails:"Fantasy sports bonus",restrictions:"Must be 18+",url:"https://dkdfs.sng.link/Avkw3/ejal?_dl=draftkings%3A%2F%2Fgateway%3Fs%3D199744492&pcid=357597&psn=2003&pcn=xx&pscn=xx&pcrn=WDS&pcscid=DFS&pcrid=xx&wpcid=357597&wpsrc=2003&wpcn=xx&wpscn=xx&wpcrn=WDS&wpscid=DFS&wpcrid=xx&_forward_params=1"},{id:"ESPNBET",name:"ESPN Bet",category:"SPORTS",imageFile:"espnBet.png",legalStates:"Multiple states",promoDetails:"Sports betting bonus",restrictions:"Must be 21+",url:"https://espnbet.com"},{id:"FANDUEL",name:"FanDuel",category:"SPORTS",imageFile:"fanduel.png",legalStates:"Multiple states",promoDetails:"Sports betting bonus",restrictions:"Must be 21+",url:"https://wlfanduelus.adsrv.eacdn.com/C.ashx?btag=a_23414b_84c_&affid=11359&siteid=23414&adid=84&c="},{id:"POKERSTARS",name:"PokerStars Casino",category:"CASINO",imageFile:"pokerstars casino.jpeg",legalStates:"MI, NJ, PA",promoDetails:"Poker welcome bonus",restrictions:"Must be 21+",url:"https://star-casino.pxf.io/c/3732491/1130845/14251"},{id:"CAESARS",name:"Caesars Sportsbook",category:"SPORTS",imageFile:"caesars.png",legalStates:"Multiple states",promoDetails:"Sports betting welcome bonus",restrictions:"Must be 21+",url:"https://www.caesars.com/sportsbook-and-casino"},{id:"CAESARSPALACE",name:"Caesars Palace",category:"CASINO",imageFile:"caesars.png",legalStates:"MI, NJ, PA, WV",promoDetails:"Casino welcome bonus",restrictions:"Must be 21+",url:"https://wlwilliamhillus.adsrv.eacdn.com/C.ashx?btag=a_13325b_2658c_&affid=450&siteid=13325&adid=2658&c="},{id:"UNDERDOG",name:"Underdog",category:"FANTASY",imageFile:"underdog.jpeg",legalStates:"Most US states",promoDetails:"Fantasy sports bonus",restrictions:"Must be 18+",url:"https://play.underdogfantasy.com/p-win-daily-sports"}];C.useEffect(()=>{(async()=>{a(!0),c(0),sr.clearCache();const x={},b={};let g=0;for(const v of m)try{const S=await xa.getImageUrl(v.imageFile);S?(x[v.id]=S,g++,c(g)):b[v.id]="No URL returned"}catch(S){b[v.id]=S.message}s(x),f(b),setTimeout(()=>{a(!1)},1e3)})()},[]);const _=T=>{t&&rp.logPlatformView(T.id,T.name,T.category),r(T)};return e?E.jsx("div",{className:"min-h-screen bg-gray-900 text-white",children:E.jsx("div",{className:"container mx-auto px-4 py-16",children:E.jsxs("div",{className:"text-center mb-16",children:[E.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Welcome to Bankroll"}),E.jsx("p",{className:"text-xl text-gray-400",children:"Your all-in-one platform for managing sports betting and fantasy sports"})]})})}):E.jsxs("div",{className:"min-h-screen bg-gray-900 text-white",children:[E.jsx("nav",{className:"border-b border-gray-800 backdrop-blur-sm sticky top-0 z-50 bg-gray-900/95",children:E.jsx("div",{className:"max-w-7xl mx-auto px-4",children:E.jsxs("div",{className:"flex justify-between items-center h-16",children:[E.jsx("div",{className:"flex items-center",children:E.jsx(Be,{to:"/",className:"flex-shrink-0",children:E.jsx("img",{src:"/images/BankrollLogoTransparent.png",alt:"Bankroll Logo",className:"h-8 w-auto"})})}),E.jsx("div",{className:"flex items-center space-x-4",children:!t&&E.jsxs(E.Fragment,{children:[E.jsx(Be,{to:"/login",className:"px-4 py-2 text-white hover:text-blue-400 transition-colors duration-300",children:"Log in"}),E.jsx(Be,{to:"/signup",className:"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg",children:"Sign up"})]})})]})})}),E.jsxs("div",{className:"container mx-auto px-4 py-16",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Welcome to Bankroll"}),E.jsx("p",{className:"text-xl text-gray-400",children:"Your all-in-one platform for managing sports betting and fantasy sports"})]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[E.jsxs(Lo,{className:"bg-gray-800 border-gray-700",children:[E.jsx(xh,{children:E.jsx("h2",{className:"text-2xl font-bold text-white text-center",children:"Track Your Bets"})}),E.jsxs(ql,{className:"text-center",children:[E.jsx("p",{className:"text-gray-400 mb-6",children:"Keep track of all your sports bets across different platforms in one place"}),t?E.jsx(Be,{to:"/wallets",className:"inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"View Wallets"}):E.jsx(Be,{to:"/login",className:"inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"Get Started"})]})]}),E.jsxs(Lo,{className:"bg-gray-800 border-gray-700",children:[E.jsx(xh,{children:E.jsx("h2",{className:"text-2xl font-bold text-white text-center",children:"Fantasy Sports"})}),E.jsxs(ql,{className:"text-center",children:[E.jsx("p",{className:"text-gray-400 mb-6",children:"Connect your fantasy sports accounts and manage them all in one dashboard"}),t?E.jsx(Be,{to:"/leagues",className:"inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"View Leagues"}):E.jsx(Be,{to:"/login",className:"inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"Get Started"})]})]}),E.jsxs(Lo,{className:"bg-gray-800 border-gray-700",children:[E.jsx(xh,{children:E.jsx("h2",{className:"text-2xl font-bold text-white text-center",children:"Social Features"})}),E.jsxs(ql,{className:"text-center",children:[E.jsx("p",{className:"text-gray-400 mb-6",children:"Connect with friends, share picks, and compete in friendly competitions"}),t?E.jsx(Be,{to:"/friends",className:"inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"Find Friends"}):E.jsx(Be,{to:"/login",className:"inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"Get Started"})]})]})]}),E.jsx("div",{className:"mt-16 text-center",children:E.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Our Partners"})}),o&&E.jsx(_g,{fullScreen:!1,color:"blue",text:`Loading partners... ${Math.round(u/m.length*100)}%`}),E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8",children:m.map(T=>E.jsx(Lo,{className:"bg-gray-900/40 border-gray-700 hover:border-blue-500/20 transition-all duration-200 cursor-pointer",onClick:()=>_(T),children:E.jsxs(ql,{className:"p-6 flex flex-col items-center justify-center min-h-[200px]",children:[E.jsx("div",{className:"w-24 h-24 mb-4 relative",children:o?E.jsx("div",{className:"w-full h-full bg-gray-700 rounded-lg animate-pulse"}):i[T.id]?E.jsx("img",{src:i[T.id],alt:T.name,className:"w-full h-full object-contain rounded-lg",onError:x=>{const b=x.currentTarget.parentNode;if(b){const g=document.createElement("div");g.className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center",g.innerHTML=`<span class="text-xl font-bold text-gray-400">${T.name.charAt(0)}</span>`,b.replaceChild(g,x.currentTarget)}}}):E.jsxs("div",{className:"w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center",children:[E.jsx("span",{className:"text-xl font-bold text-gray-400",children:T.name.charAt(0)}),h[T.id]&&E.jsx("span",{className:"absolute bottom-0 left-0 right-0 text-xs text-red-500 text-center",children:"Error loading image"})]})}),E.jsx("h3",{className:"text-center font-medium text-white",children:T.name})]})},T.id))}),n&&E.jsx(qF,{platform:{...n,logo:i[n.id]},onClose:()=>r(null)}),E.jsxs("div",{className:"mt-16 text-center",children:[E.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Ready to get started?"}),t?E.jsx(Be,{to:"/partners",className:"inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors",children:"View All Partners"}):E.jsx(Be,{to:"/signup",className:"inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors",children:"Create Account"})]}),E.jsx("div",{className:"mt-8 text-center text-sm text-gray-300",children:"Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700"})]})]})},GF=C.lazy(()=>kt(()=>import("./WalletsView-D-wCGvba-1733463034889.js"),__vite__mapDeps([0,1,2]))),KF=C.lazy(()=>kt(()=>import("./Profile-Cd__Gtfx-1733463034889.js"),__vite__mapDeps([3,4,5]))),QF=C.lazy(()=>kt(()=>import("./NotificationSettings-0MJ7Ol5T-1733463034889.js"),__vite__mapDeps([6,7]))),YF=C.lazy(()=>kt(()=>import("./MyLeagues-593B3MLz-1733463034889.js"),__vite__mapDeps([8,4,2,9]))),XF=C.lazy(()=>kt(()=>import("./SendMoney-qPQtZ72S-1733463034889.js"),__vite__mapDeps([10,11,12]))),JF=C.lazy(()=>kt(()=>import("./BankingView-DorLBrKY-1733463034889.js"),__vite__mapDeps([13,11,1]))),ZF=C.lazy(()=>kt(()=>import("./FriendsView-C26M_aIt-1733463034889.js"),__vite__mapDeps([14,5,15,4,16,9]))),e4=C.lazy(()=>kt(()=>import("./Groups-CnABk4CR-1733463034889.js"),__vite__mapDeps([17,4,15]))),t4=C.lazy(()=>kt(()=>import("./GroupView-CvMfbW9C-1733463034889.js"),__vite__mapDeps([18,4,7,2,9,15,11,16,12]))),n4=C.lazy(()=>kt(()=>import("./CreateGroup-DiqOWNnN-1733463034889.js"),__vite__mapDeps([19,4]))),r4=C.lazy(()=>kt(()=>import("./Platforms-DXAwCIqJ-1733463034889.js"),[])),i4=C.lazy(()=>kt(()=>import("./PaymentMethodsView-BNpsADeR-1733463034889.js"),__vite__mapDeps([20,11]))),s4=C.lazy(()=>kt(()=>import("./GiftCardDemo-D6WuXZZX-1733463034889.js"),[])),o4=C.lazy(()=>kt(()=>import("./RewardsView-C8jq5e0y-1733463034889.js"),__vite__mapDeps([21,12]))),a4=C.lazy(()=>kt(()=>import("./AdminView-B7tK6czu-1733463034889.js"),[])),l4=()=>E.jsx(Mx,{children:E.jsx(Nx,{children:E.jsxs(iS,{children:[E.jsxs(Ax,{children:[E.jsx(De,{path:"/",element:E.jsx(HF,{})}),E.jsx(De,{path:"/login",element:E.jsx(uF,{})}),E.jsx(De,{path:"/signup",element:E.jsx(zF,{})}),E.jsxs(De,{path:"/app",element:E.jsx(MM,{children:E.jsx(YM,{children:E.jsx(WM,{children:E.jsx(FM,{children:E.jsx(lS,{children:E.jsx($M,{children:E.jsx(KM,{children:E.jsx(lF,{children:E.jsx(C.Suspense,{fallback:E.jsx("div",{className:"min-h-screen bg-gray-900"}),children:E.jsx(KE,{})})})})})})})})})}),children:[E.jsx(De,{path:"wallets",element:E.jsx(GF,{})}),E.jsx(De,{path:"leagues",element:E.jsx(YF,{})}),E.jsx(De,{path:"friends",element:E.jsx(ZF,{})}),E.jsx(De,{path:"groups/create",element:E.jsx(n4,{})}),E.jsx(De,{path:"groups/:groupId",element:E.jsx(t4,{})}),E.jsx(De,{path:"groups",element:E.jsx(e4,{})}),E.jsx(De,{path:"send",element:E.jsx(XF,{})}),E.jsx(De,{path:"profile",element:E.jsx(KF,{})}),E.jsx(De,{path:"notifications",element:E.jsx(QF,{})}),E.jsx(De,{path:"banking",element:E.jsx(JF,{})}),E.jsx(De,{path:"partners",element:E.jsx(r4,{})}),E.jsx(De,{path:"payment-methods",element:E.jsx(i4,{})}),E.jsx(De,{path:"gift-card",element:E.jsx(s4,{})}),E.jsx(De,{path:"rewards",element:E.jsx(o4,{})}),E.jsx(De,{path:"admin",element:E.jsx(a4,{})})]}),E.jsx(De,{path:"*",element:E.jsx(Ix,{to:"/",replace:!0})})]}),E.jsx(jU,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#333",color:"#fff"},success:{iconTheme:{primary:"#10B981",secondary:"#fff"}},error:{iconTheme:{primary:"#EF4444",secondary:"#fff"}}}})]})})});"serviceWorker"in navigator&&window.addEventListener("load",async()=>{try{const t=await navigator.serviceWorker.register("/firebase-messaging-sw.js");console.log("ServiceWorker registration successful:",t)}catch(t){console.error("ServiceWorker registration failed:",t)}});bh.createRoot(document.getElementById("root")).render(E.jsx(Mw.StrictMode,{children:E.jsx(l4,{})}));export{Km as $,Ze as A,zU as B,Lo as C,be as D,Zc as E,v4 as F,_4 as G,WU as H,c4 as I,yu as J,Aa as K,Be as L,PO as M,si as N,vg as O,ln as P,fu as Q,Mw as R,dD as S,YU as T,Qm as U,sr as V,_g as W,hc as X,rp as Y,qF as Z,JU as _,za as a,Wl as a0,E4 as b,mn as c,he as d,OM as e,ql as f,Jc as g,CM as h,Hs as i,E as j,HM as k,T4 as l,xa as m,Mt as n,g4 as o,I4 as p,Kc as q,C as r,Ah as s,S4 as t,pn as u,HU as v,Yc as w,A4 as x,xh as y,k4 as z};
