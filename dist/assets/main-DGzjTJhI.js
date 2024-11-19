function AT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function CT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tv={exports:{}},Dc={},Iv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),RT=Symbol.for("react.portal"),PT=Symbol.for("react.fragment"),DT=Symbol.for("react.strict_mode"),jT=Symbol.for("react.profiler"),OT=Symbol.for("react.provider"),LT=Symbol.for("react.context"),MT=Symbol.for("react.forward_ref"),VT=Symbol.for("react.suspense"),FT=Symbol.for("react.memo"),UT=Symbol.for("react.lazy"),Ig=Symbol.iterator;function BT(t){return t===null||typeof t!="object"?null:(t=Ig&&t[Ig]||t["@@iterator"],typeof t=="function"?t:null)}var Sv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bv=Object.assign,kv={};function bi(t,e,n){this.props=t,this.context=e,this.refs=kv,this.updater=n||Sv}bi.prototype.isReactComponent={};bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nv(){}Nv.prototype=bi.prototype;function _f(t,e,n){this.props=t,this.context=e,this.refs=kv,this.updater=n||Sv}var wf=_f.prototype=new Nv;wf.constructor=_f;bv(wf,bi.prototype);wf.isPureReactComponent=!0;var Sg=Array.isArray,Av=Object.prototype.hasOwnProperty,xf={current:null},Cv={key:!0,ref:!0,__self:!0,__source:!0};function Rv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Av.call(e,r)&&!Cv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ha,type:t,key:i,ref:o,props:s,_owner:xf.current}}function zT(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function $T(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bg=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$T(""+t.key):e.toString(36)}function wl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case RT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Gu(o,0):r,Sg(s)?(n="",t!=null&&(n=t.replace(bg,"$&/")+"/"),wl(s,e,n,"",function(d){return d})):s!=null&&(Ef(s)&&(s=zT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(bg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Sg(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+Gu(i,l);o+=wl(i,e,n,c,s)}else if(c=BT(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+Gu(i,l++),o+=wl(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var r=[],s=0;return wl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function WT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},xl={transition:null},qT={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:xl,ReactCurrentOwner:xf};function Pv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=bi;ee.Fragment=PT;ee.Profiler=jT;ee.PureComponent=_f;ee.StrictMode=DT;ee.Suspense=VT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qT;ee.act=Pv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=xf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Av.call(e,c)&&!Cv.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ha,type:t.type,key:s,ref:i,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:LT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OT,_context:t},t.Consumer=t};ee.createElement=Rv;ee.createFactory=function(t){var e=Rv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:MT,render:t}};ee.isValidElement=Ef;ee.lazy=function(t){return{$$typeof:UT,_payload:{_status:-1,_result:t},_init:WT}};ee.memo=function(t,e){return{$$typeof:FT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};ee.unstable_act=Pv;ee.useCallback=function(t,e){return wt.current.useCallback(t,e)};ee.useContext=function(t){return wt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return wt.current.useEffect(t,e)};ee.useId=function(){return wt.current.useId()};ee.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return wt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};ee.useRef=function(t){return wt.current.useRef(t)};ee.useState=function(t){return wt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return wt.current.useTransition()};ee.version="18.3.1";Iv.exports=ee;var D=Iv.exports;const Tf=CT(D),HT=AT({__proto__:null,default:Tf},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GT=D,KT=Symbol.for("react.element"),QT=Symbol.for("react.fragment"),YT=Object.prototype.hasOwnProperty,JT=GT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XT={key:!0,ref:!0,__self:!0,__source:!0};function Dv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)YT.call(e,r)&&!XT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:KT,type:t,key:i,ref:o,props:s,_owner:JT.current}}Dc.Fragment=QT;Dc.jsx=Dv;Dc.jsxs=Dv;Tv.exports=Dc;var u=Tv.exports,Hd={},jv={exports:{}},Ft={},Ov={exports:{}},Lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var Y=z.length;z.push(G);e:for(;0<Y;){var se=Y-1>>>1,fe=z[se];if(0<s(fe,G))z[se]=G,z[Y]=fe,Y=se;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],Y=z.pop();if(Y!==G){z[0]=Y;e:for(var se=0,fe=z.length,Ae=fe>>>1;se<Ae;){var wn=2*(se+1)-1,xn=z[wn],En=wn+1,Tn=z[En];if(0>s(xn,Y))En<fe&&0>s(Tn,xn)?(z[se]=Tn,z[En]=Y,se=En):(z[se]=xn,z[wn]=Y,se=wn);else if(En<fe&&0>s(Tn,Y))z[se]=Tn,z[En]=Y,se=En;else break e}}return G}function s(z,G){var Y=z.sortIndex-G.sortIndex;return Y!==0?Y:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],d=[],f=1,m=null,g=3,_=!1,A=!1,C=!1,R=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=z)r(d),G.sortIndex=G.expirationTime,e(c,G);else break;G=n(d)}}function j(z){if(C=!1,x(z),!A)if(n(c)!==null)A=!0,ft(V);else{var G=n(d);G!==null&&Fe(j,G.startTime-z)}}function V(z,G){A=!1,C&&(C=!1,E(v),v=-1),_=!0;var Y=g;try{for(x(G),m=n(c);m!==null&&(!(m.expirationTime>G)||z&&!N());){var se=m.callback;if(typeof se=="function"){m.callback=null,g=m.priorityLevel;var fe=se(m.expirationTime<=G);G=t.unstable_now(),typeof fe=="function"?m.callback=fe:m===n(c)&&r(c),x(G)}else r(c);m=n(c)}if(m!==null)var Ae=!0;else{var wn=n(d);wn!==null&&Fe(j,wn.startTime-G),Ae=!1}return Ae}finally{m=null,g=Y,_=!1}}var U=!1,b=null,v=-1,T=5,k=-1;function N(){return!(t.unstable_now()-k<T)}function S(){if(b!==null){var z=t.unstable_now();k=z;var G=!0;try{G=b(!0,z)}finally{G?I():(U=!1,b=null)}}else U=!1}var I;if(typeof w=="function")I=function(){w(S)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Ve=de.port2;de.port1.onmessage=S,I=function(){Ve.postMessage(null)}}else I=function(){R(S,0)};function ft(z){b=z,U||(U=!0,I())}function Fe(z,G){v=R(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||_||(A=!0,ft(V))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Y=g;g=G;try{return z()}finally{g=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=g;g=z;try{return G()}finally{g=Y}},t.unstable_scheduleCallback=function(z,G,Y){var se=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?se+Y:se):Y=se,z){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Y+fe,z={id:f++,callback:G,priorityLevel:z,startTime:Y,expirationTime:fe,sortIndex:-1},Y>se?(z.sortIndex=Y,e(d,z),n(c)===null&&z===n(d)&&(C?(E(v),v=-1):C=!0,Fe(j,Y-se))):(z.sortIndex=fe,e(c,z),A||_||(A=!0,ft(V))),z},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(z){var G=g;return function(){var Y=g;g=G;try{return z.apply(this,arguments)}finally{g=Y}}}})(Lv);Ov.exports=Lv;var ZT=Ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eI=D,Mt=ZT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mv=new Set,Mo={};function Is(t,e){ui(t,e),ui(t+"Capture",e)}function ui(t,e){for(Mo[t]=e,t=0;t<e.length;t++)Mv.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,tI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kg={},Ng={};function nI(t){return Gd.call(Ng,t)?!0:Gd.call(kg,t)?!1:tI.test(t)?Ng[t]=!0:(kg[t]=!0,!1)}function rI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sI(t,e,n,r){if(e===null||typeof e>"u"||rI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var If=/[\-:]([a-z])/g;function Sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(If,Sf);Je[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(If,Sf);Je[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(If,Sf);Je[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bf(t,e,n,r){var s=Je.hasOwnProperty(e)?Je[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sI(e,n,s,r)&&(n=null),r||s===null?nI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=eI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),Us=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),Vv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Uv=Symbol.for("react.offscreen"),Ag=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=Ag&&t[Ag]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Ku;function fo(t){if(Ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+t}var Qu=!1;function Yu(t,e){if(!t||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function iI(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=Yu(t.type,!1),t;case 11:return t=Yu(t.type.render,!1),t;case 1:return t=Yu(t.type,!0),t;default:return""}}function Jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Us:return"Fragment";case Fs:return"Portal";case Kd:return"Profiler";case kf:return"StrictMode";case Qd:return"Suspense";case Yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fv:return(t.displayName||"Context")+".Consumer";case Vv:return(t._context.displayName||"Context")+".Provider";case Nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Af:return e=t.displayName||null,e!==null?e:Jd(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Jd(t(e))}catch{}}return null}function oI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aI(t){var e=Bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=aI(t))}function zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xd(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $v(t,e){e=e.checked,e!=null&&bf(t,"checked",e,!1)}function Zd(t,e){$v(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&eh(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function eh(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var po=Array.isArray;function Xs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(po(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function Wv(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,Hv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lI=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(t){lI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),To[e]=To[t]})});function Gv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||To.hasOwnProperty(t)&&To[t]?(""+e).trim():e+"px"}function Kv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Gv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var cI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rh(t,e){if(e){if(cI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function sh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=null;function Cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oh=null,Zs=null,ei=null;function jg(t){if(t=ma(t)){if(typeof oh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Vc(e),oh(t.stateNode,t.type,e))}}function Qv(t){Zs?ei?ei.push(t):ei=[t]:Zs=t}function Yv(){if(Zs){var t=Zs,e=ei;if(ei=Zs=null,jg(t),e)for(t=0;t<e.length;t++)jg(e[t])}}function Jv(t,e){return t(e)}function Xv(){}var Ju=!1;function Zv(t,e,n){if(Ju)return t(e,n);Ju=!0;try{return Jv(t,e,n)}finally{Ju=!1,(Zs!==null||ei!==null)&&(Xv(),Yv())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var r=Vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var ah=!1;if(Bn)try{var no={};Object.defineProperty(no,"passive",{get:function(){ah=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{ah=!1}function uI(t,e,n,r,s,i,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Io=!1,$l=null,Wl=!1,lh=null,dI={onError:function(t){Io=!0,$l=t}};function hI(t,e,n,r,s,i,o,l,c){Io=!1,$l=null,uI.apply(dI,arguments)}function fI(t,e,n,r,s,i,o,l,c){if(hI.apply(this,arguments),Io){if(Io){var d=$l;Io=!1,$l=null}else throw Error(F(198));Wl||(Wl=!0,lh=d)}}function Ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Og(t){if(Ss(t)!==t)throw Error(F(188))}function pI(t){var e=t.alternate;if(!e){if(e=Ss(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Og(s),t;if(i===r)return Og(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function t_(t){return t=pI(t),t!==null?n_(t):null}function n_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n_(t);if(e!==null)return e;t=t.sibling}return null}var r_=Mt.unstable_scheduleCallback,Lg=Mt.unstable_cancelCallback,mI=Mt.unstable_shouldYield,gI=Mt.unstable_requestPaint,Re=Mt.unstable_now,yI=Mt.unstable_getCurrentPriorityLevel,Rf=Mt.unstable_ImmediatePriority,s_=Mt.unstable_UserBlockingPriority,ql=Mt.unstable_NormalPriority,vI=Mt.unstable_LowPriority,i_=Mt.unstable_IdlePriority,jc=null,hn=null;function _I(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(jc,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:EI,wI=Math.log,xI=Math.LN2;function EI(t){return t>>>=0,t===0?32:31-(wI(t)/xI|0)|0}var Za=64,el=4194304;function mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=mo(l):(i&=o,i!==0&&(r=mo(i)))}else o=n&~s,o!==0?r=mo(o):i!==0&&(r=mo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),s=1<<n,r|=t[n],e&=~s;return r}function TI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function II(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-tn(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=TI(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function ch(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o_(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function SI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-tn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ce=0;function a_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l_,Df,c_,u_,d_,uh=!1,tl=[],Tr=null,Ir=null,Sr=null,Uo=new Map,Bo=new Map,cr=[],bI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mg(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function ro(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ma(e),e!==null&&Df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function kI(t,e,n,r,s){switch(e){case"focusin":return Tr=ro(Tr,t,e,n,r,s),!0;case"dragenter":return Ir=ro(Ir,t,e,n,r,s),!0;case"mouseover":return Sr=ro(Sr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Uo.set(i,ro(Uo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Bo.set(i,ro(Bo.get(i)||null,t,e,n,r,s)),!0}return!1}function h_(t){var e=ns(t.target);if(e!==null){var n=Ss(e);if(n!==null){if(e=n.tag,e===13){if(e=e_(n),e!==null){t.blockedOn=e,d_(t.priority,function(){c_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ih=r,n.target.dispatchEvent(r),ih=null}else return e=ma(n),e!==null&&Df(e),t.blockedOn=n,!1;e.shift()}return!0}function Vg(t,e,n){El(t)&&n.delete(e)}function NI(){uh=!1,Tr!==null&&El(Tr)&&(Tr=null),Ir!==null&&El(Ir)&&(Ir=null),Sr!==null&&El(Sr)&&(Sr=null),Uo.forEach(Vg),Bo.forEach(Vg)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,uh||(uh=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,NI)))}function zo(t){function e(s){return so(s,t)}if(0<tl.length){so(tl[0],t);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&so(Tr,t),Ir!==null&&so(Ir,t),Sr!==null&&so(Sr,t),Uo.forEach(e),Bo.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)h_(n),n.blockedOn===null&&cr.shift()}var ti=Qn.ReactCurrentBatchConfig,Gl=!0;function AI(t,e,n,r){var s=ce,i=ti.transition;ti.transition=null;try{ce=1,jf(t,e,n,r)}finally{ce=s,ti.transition=i}}function CI(t,e,n,r){var s=ce,i=ti.transition;ti.transition=null;try{ce=4,jf(t,e,n,r)}finally{ce=s,ti.transition=i}}function jf(t,e,n,r){if(Gl){var s=dh(t,e,n,r);if(s===null)ld(t,e,r,Kl,n),Mg(t,r);else if(kI(s,t,e,n,r))r.stopPropagation();else if(Mg(t,r),e&4&&-1<bI.indexOf(t)){for(;s!==null;){var i=ma(s);if(i!==null&&l_(i),i=dh(t,e,n,r),i===null&&ld(t,e,r,Kl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else ld(t,e,r,null,n)}}var Kl=null;function dh(t,e,n,r){if(Kl=null,t=Cf(r),t=ns(t),t!==null)if(e=Ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function f_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yI()){case Rf:return 1;case s_:return 4;case ql:case vI:return 16;case i_:return 536870912;default:return 16}default:return 16}}var mr=null,Of=null,Tl=null;function p_(){if(Tl)return Tl;var t,e=Of,n=e.length,r,s="value"in mr?mr.value:mr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Tl=s.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Fg(){return!1}function Ut(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?nl:Fg,this.isPropagationStopped=Fg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=Ut(ki),pa=Se({},ki,{view:0,detail:0}),RI=Ut(pa),Zu,ed,io,Oc=Se({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Zu=t.screenX-io.screenX,ed=t.screenY-io.screenY):ed=Zu=0,io=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:ed}}),Ug=Ut(Oc),PI=Se({},Oc,{dataTransfer:0}),DI=Ut(PI),jI=Se({},pa,{relatedTarget:0}),td=Ut(jI),OI=Se({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),LI=Ut(OI),MI=Se({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VI=Ut(MI),FI=Se({},ki,{data:0}),Bg=Ut(FI),UI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $I(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zI[t])?!!e[t]:!1}function Mf(){return $I}var WI=Se({},pa,{key:function(t){if(t.key){var e=UI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qI=Ut(WI),HI=Se({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zg=Ut(HI),GI=Se({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),KI=Ut(GI),QI=Se({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),YI=Ut(QI),JI=Se({},Oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XI=Ut(JI),ZI=[9,13,27,32],Vf=Bn&&"CompositionEvent"in window,So=null;Bn&&"documentMode"in document&&(So=document.documentMode);var eS=Bn&&"TextEvent"in window&&!So,m_=Bn&&(!Vf||So&&8<So&&11>=So),$g=" ",Wg=!1;function g_(t,e){switch(t){case"keyup":return ZI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function tS(t,e){switch(t){case"compositionend":return y_(e);case"keypress":return e.which!==32?null:(Wg=!0,$g);case"textInput":return t=e.data,t===$g&&Wg?null:t;default:return null}}function nS(t,e){if(Bs)return t==="compositionend"||!Vf&&g_(t,e)?(t=p_(),Tl=Of=mr=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m_&&e.locale!=="ko"?null:e.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rS[t.type]:e==="textarea"}function v_(t,e,n,r){Qv(r),e=Ql(e,"onChange"),0<e.length&&(n=new Lf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var bo=null,$o=null;function sS(t){A_(t,0)}function Lc(t){var e=Ws(t);if(zv(e))return t}function iS(t,e){if(t==="change")return e}var __=!1;if(Bn){var nd;if(Bn){var rd="oninput"in document;if(!rd){var Hg=document.createElement("div");Hg.setAttribute("oninput","return;"),rd=typeof Hg.oninput=="function"}nd=rd}else nd=!1;__=nd&&(!document.documentMode||9<document.documentMode)}function Gg(){bo&&(bo.detachEvent("onpropertychange",w_),$o=bo=null)}function w_(t){if(t.propertyName==="value"&&Lc($o)){var e=[];v_(e,$o,t,Cf(t)),Zv(sS,e)}}function oS(t,e,n){t==="focusin"?(Gg(),bo=e,$o=n,bo.attachEvent("onpropertychange",w_)):t==="focusout"&&Gg()}function aS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc($o)}function lS(t,e){if(t==="click")return Lc(e)}function cS(t,e){if(t==="input"||t==="change")return Lc(e)}function uS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:uS;function Wo(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Gd.call(e,s)||!rn(t[s],e[s]))return!1}return!0}function Kg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qg(t,e){var n=Kg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kg(n)}}function x_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?x_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E_(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dS(t){var e=E_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&x_(n.ownerDocument.documentElement,n)){if(r!==null&&Ff(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Qg(n,i);var o=Qg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hS=Bn&&"documentMode"in document&&11>=document.documentMode,zs=null,hh=null,ko=null,fh=!1;function Yg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fh||zs==null||zs!==zl(r)||(r=zs,"selectionStart"in r&&Ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&Wo(ko,r)||(ko=r,r=Ql(hh,"onSelect"),0<r.length&&(e=new Lf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zs)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},sd={},T_={};Bn&&(T_=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Mc(t){if(sd[t])return sd[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T_)return sd[t]=e[n];return t}var I_=Mc("animationend"),S_=Mc("animationiteration"),b_=Mc("animationstart"),k_=Mc("transitionend"),N_=new Map,Jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){N_.set(t,e),Is(e,[t])}for(var id=0;id<Jg.length;id++){var od=Jg[id],fS=od.toLowerCase(),pS=od[0].toUpperCase()+od.slice(1);Fr(fS,"on"+pS)}Fr(I_,"onAnimationEnd");Fr(S_,"onAnimationIteration");Fr(b_,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(k_,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Xg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fI(r,e,void 0,t),t.currentTarget=null}function A_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Xg(s,l,d),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Xg(s,l,d),i=c}}}if(Wl)throw t=lh,Wl=!1,lh=null,t}function _e(t,e){var n=e[vh];n===void 0&&(n=e[vh]=new Set);var r=t+"__bubble";n.has(r)||(C_(e,t,2,!1),n.add(r))}function ad(t,e,n){var r=0;e&&(r|=4),C_(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[sl]){t[sl]=!0,Mv.forEach(function(n){n!=="selectionchange"&&(mS.has(n)||ad(n,!1,t),ad(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,ad("selectionchange",!1,e))}}function C_(t,e,n,r){switch(f_(e)){case 1:var s=AI;break;case 4:s=CI;break;default:s=jf}n=s.bind(null,e,n,t),s=void 0,!ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function ld(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ns(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Zv(function(){var d=i,f=Cf(n),m=[];e:{var g=N_.get(t);if(g!==void 0){var _=Lf,A=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":_=qI;break;case"focusin":A="focus",_=td;break;case"focusout":A="blur",_=td;break;case"beforeblur":case"afterblur":_=td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=DI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=KI;break;case I_:case S_:case b_:_=LI;break;case k_:_=YI;break;case"scroll":_=RI;break;case"wheel":_=XI;break;case"copy":case"cut":case"paste":_=VI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=zg}var C=(e&4)!==0,R=!C&&t==="scroll",E=C?g!==null?g+"Capture":null:g;C=[];for(var w=d,x;w!==null;){x=w;var j=x.stateNode;if(x.tag===5&&j!==null&&(x=j,E!==null&&(j=Fo(w,E),j!=null&&C.push(Ho(w,j,x)))),R)break;w=w.return}0<C.length&&(g=new _(g,A,null,n,f),m.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==ih&&(A=n.relatedTarget||n.fromElement)&&(ns(A)||A[zn]))break e;if((_||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,_?(A=n.relatedTarget||n.toElement,_=d,A=A?ns(A):null,A!==null&&(R=Ss(A),A!==R||A.tag!==5&&A.tag!==6)&&(A=null)):(_=null,A=d),_!==A)){if(C=Ug,j="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(C=zg,j="onPointerLeave",E="onPointerEnter",w="pointer"),R=_==null?g:Ws(_),x=A==null?g:Ws(A),g=new C(j,w+"leave",_,n,f),g.target=R,g.relatedTarget=x,j=null,ns(f)===d&&(C=new C(E,w+"enter",A,n,f),C.target=x,C.relatedTarget=R,j=C),R=j,_&&A)t:{for(C=_,E=A,w=0,x=C;x;x=Ds(x))w++;for(x=0,j=E;j;j=Ds(j))x++;for(;0<w-x;)C=Ds(C),w--;for(;0<x-w;)E=Ds(E),x--;for(;w--;){if(C===E||E!==null&&C===E.alternate)break t;C=Ds(C),E=Ds(E)}C=null}else C=null;_!==null&&Zg(m,g,_,C,!1),A!==null&&R!==null&&Zg(m,R,A,C,!0)}}e:{if(g=d?Ws(d):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var V=iS;else if(qg(g))if(__)V=cS;else{V=aS;var U=oS}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=lS);if(V&&(V=V(t,d))){v_(m,V,n,f);break e}U&&U(t,g,d),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&eh(g,"number",g.value)}switch(U=d?Ws(d):window,t){case"focusin":(qg(U)||U.contentEditable==="true")&&(zs=U,hh=d,ko=null);break;case"focusout":ko=hh=zs=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,Yg(m,n,f);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":Yg(m,n,f)}var b;if(Vf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Bs?g_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(m_&&n.locale!=="ko"&&(Bs||v!=="onCompositionStart"?v==="onCompositionEnd"&&Bs&&(b=p_()):(mr=f,Of="value"in mr?mr.value:mr.textContent,Bs=!0)),U=Ql(d,v),0<U.length&&(v=new Bg(v,t,null,n,f),m.push({event:v,listeners:U}),b?v.data=b:(b=y_(n),b!==null&&(v.data=b)))),(b=eS?tS(t,n):nS(t,n))&&(d=Ql(d,"onBeforeInput"),0<d.length&&(f=new Bg("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=b))}A_(m,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Fo(t,n),i!=null&&r.unshift(Ho(t,i,s)),i=Fo(t,e),i!=null&&r.push(Ho(t,i,s))),t=t.return}return r}function Ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,s?(c=Fo(n,i),c!=null&&o.unshift(Ho(n,c,l))):s||(c=Fo(n,i),c!=null&&o.push(Ho(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function ey(t){return(typeof t=="string"?t:""+t).replace(gS,`
`).replace(yS,"")}function il(t,e,n){if(e=ey(e),ey(t)!==e&&n)throw Error(F(425))}function Yl(){}var ph=null,mh=null;function gh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yh=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,ty=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof ty<"u"?function(t){return ty.resolve(null).then(t).catch(wS)}:yh;function wS(t){setTimeout(function(){throw t})}function cd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);zo(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ny(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),un="__reactFiber$"+Ni,Go="__reactProps$"+Ni,zn="__reactContainer$"+Ni,vh="__reactEvents$"+Ni,xS="__reactListeners$"+Ni,ES="__reactHandles$"+Ni;function ns(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ny(t);t!==null;){if(n=t[un])return n;t=ny(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[un]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Vc(t){return t[Go]||null}var _h=[],qs=-1;function Ur(t){return{current:t}}function xe(t){0>qs||(t.current=_h[qs],_h[qs]=null,qs--)}function me(t,e){qs++,_h[qs]=t.current,t.current=e}var Or={},dt=Ur(Or),bt=Ur(!1),ds=Or;function di(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function kt(t){return t=t.childContextTypes,t!=null}function Jl(){xe(bt),xe(dt)}function ry(t,e,n){if(dt.current!==Or)throw Error(F(168));me(dt,e),me(bt,n)}function R_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,oI(t)||"Unknown",s));return Se({},n,r)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,ds=dt.current,me(dt,t),me(bt,bt.current),!0}function sy(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=R_(t,e,ds),r.__reactInternalMemoizedMergedChildContext=t,xe(bt),xe(dt),me(dt,t)):xe(bt),me(bt,n)}var An=null,Fc=!1,ud=!1;function P_(t){An===null?An=[t]:An.push(t)}function TS(t){Fc=!0,P_(t)}function Br(){if(!ud&&An!==null){ud=!0;var t=0,e=ce;try{var n=An;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,Fc=!1}catch(s){throw An!==null&&(An=An.slice(t+1)),r_(Rf,Br),s}finally{ce=e,ud=!1}}return null}var Hs=[],Gs=0,Zl=null,ec=0,Bt=[],zt=0,hs=null,Rn=1,Pn="";function Jr(t,e){Hs[Gs++]=ec,Hs[Gs++]=Zl,Zl=t,ec=e}function D_(t,e,n){Bt[zt++]=Rn,Bt[zt++]=Pn,Bt[zt++]=hs,hs=t;var r=Rn;t=Pn;var s=32-tn(r)-1;r&=~(1<<s),n+=1;var i=32-tn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Rn=1<<32-tn(e)+s|n<<s|r,Pn=i+t}else Rn=1<<i|n<<s|r,Pn=t}function Uf(t){t.return!==null&&(Jr(t,1),D_(t,1,0))}function Bf(t){for(;t===Zl;)Zl=Hs[--Gs],Hs[Gs]=null,ec=Hs[--Gs],Hs[Gs]=null;for(;t===hs;)hs=Bt[--zt],Bt[zt]=null,Pn=Bt[--zt],Bt[zt]=null,Rn=Bt[--zt],Bt[zt]=null}var jt=null,Pt=null,Ee=!1,Zt=null;function j_(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Pt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hs!==null?{id:Rn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Pt=null,!0):!1;default:return!1}}function wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xh(t){if(Ee){var e=Pt;if(e){var n=e;if(!iy(t,e)){if(wh(t))throw Error(F(418));e=br(n.nextSibling);var r=jt;e&&iy(t,e)?j_(r,n):(t.flags=t.flags&-4097|2,Ee=!1,jt=t)}}else{if(wh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ee=!1,jt=t}}}function oy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function ol(t){if(t!==jt)return!1;if(!Ee)return oy(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gh(t.type,t.memoizedProps)),e&&(e=Pt)){if(wh(t))throw O_(),Error(F(418));for(;e;)j_(t,e),e=br(e.nextSibling)}if(oy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=jt?br(t.stateNode.nextSibling):null;return!0}function O_(){for(var t=Pt;t;)t=br(t.nextSibling)}function hi(){Pt=jt=null,Ee=!1}function zf(t){Zt===null?Zt=[t]:Zt.push(t)}var IS=Qn.ReactCurrentBatchConfig;function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ay(t){var e=t._init;return e(t._payload)}function L_(t){function e(E,w){if(t){var x=E.deletions;x===null?(E.deletions=[w],E.flags|=16):x.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function s(E,w){return E=Cr(E,w),E.index=0,E.sibling=null,E}function i(E,w,x){return E.index=x,t?(x=E.alternate,x!==null?(x=x.index,x<w?(E.flags|=2,w):x):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,w,x,j){return w===null||w.tag!==6?(w=yd(x,E.mode,j),w.return=E,w):(w=s(w,x),w.return=E,w)}function c(E,w,x,j){var V=x.type;return V===Us?f(E,w,x.props.children,j,x.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ar&&ay(V)===w.type)?(j=s(w,x.props),j.ref=oo(E,w,x),j.return=E,j):(j=Rl(x.type,x.key,x.props,null,E.mode,j),j.ref=oo(E,w,x),j.return=E,j)}function d(E,w,x,j){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=vd(x,E.mode,j),w.return=E,w):(w=s(w,x.children||[]),w.return=E,w)}function f(E,w,x,j,V){return w===null||w.tag!==7?(w=ls(x,E.mode,j,V),w.return=E,w):(w=s(w,x),w.return=E,w)}function m(E,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=yd(""+w,E.mode,x),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ya:return x=Rl(w.type,w.key,w.props,null,E.mode,x),x.ref=oo(E,null,w),x.return=E,x;case Fs:return w=vd(w,E.mode,x),w.return=E,w;case ar:var j=w._init;return m(E,j(w._payload),x)}if(po(w)||to(w))return w=ls(w,E.mode,x,null),w.return=E,w;al(E,w)}return null}function g(E,w,x,j){var V=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return V!==null?null:l(E,w,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:return x.key===V?c(E,w,x,j):null;case Fs:return x.key===V?d(E,w,x,j):null;case ar:return V=x._init,g(E,w,V(x._payload),j)}if(po(x)||to(x))return V!==null?null:f(E,w,x,j,null);al(E,x)}return null}function _(E,w,x,j,V){if(typeof j=="string"&&j!==""||typeof j=="number")return E=E.get(x)||null,l(w,E,""+j,V);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ya:return E=E.get(j.key===null?x:j.key)||null,c(w,E,j,V);case Fs:return E=E.get(j.key===null?x:j.key)||null,d(w,E,j,V);case ar:var U=j._init;return _(E,w,x,U(j._payload),V)}if(po(j)||to(j))return E=E.get(x)||null,f(w,E,j,V,null);al(w,j)}return null}function A(E,w,x,j){for(var V=null,U=null,b=w,v=w=0,T=null;b!==null&&v<x.length;v++){b.index>v?(T=b,b=null):T=b.sibling;var k=g(E,b,x[v],j);if(k===null){b===null&&(b=T);break}t&&b&&k.alternate===null&&e(E,b),w=i(k,w,v),U===null?V=k:U.sibling=k,U=k,b=T}if(v===x.length)return n(E,b),Ee&&Jr(E,v),V;if(b===null){for(;v<x.length;v++)b=m(E,x[v],j),b!==null&&(w=i(b,w,v),U===null?V=b:U.sibling=b,U=b);return Ee&&Jr(E,v),V}for(b=r(E,b);v<x.length;v++)T=_(b,E,v,x[v],j),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?v:T.key),w=i(T,w,v),U===null?V=T:U.sibling=T,U=T);return t&&b.forEach(function(N){return e(E,N)}),Ee&&Jr(E,v),V}function C(E,w,x,j){var V=to(x);if(typeof V!="function")throw Error(F(150));if(x=V.call(x),x==null)throw Error(F(151));for(var U=V=null,b=w,v=w=0,T=null,k=x.next();b!==null&&!k.done;v++,k=x.next()){b.index>v?(T=b,b=null):T=b.sibling;var N=g(E,b,k.value,j);if(N===null){b===null&&(b=T);break}t&&b&&N.alternate===null&&e(E,b),w=i(N,w,v),U===null?V=N:U.sibling=N,U=N,b=T}if(k.done)return n(E,b),Ee&&Jr(E,v),V;if(b===null){for(;!k.done;v++,k=x.next())k=m(E,k.value,j),k!==null&&(w=i(k,w,v),U===null?V=k:U.sibling=k,U=k);return Ee&&Jr(E,v),V}for(b=r(E,b);!k.done;v++,k=x.next())k=_(b,E,v,k.value,j),k!==null&&(t&&k.alternate!==null&&b.delete(k.key===null?v:k.key),w=i(k,w,v),U===null?V=k:U.sibling=k,U=k);return t&&b.forEach(function(S){return e(E,S)}),Ee&&Jr(E,v),V}function R(E,w,x,j){if(typeof x=="object"&&x!==null&&x.type===Us&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:e:{for(var V=x.key,U=w;U!==null;){if(U.key===V){if(V=x.type,V===Us){if(U.tag===7){n(E,U.sibling),w=s(U,x.props.children),w.return=E,E=w;break e}}else if(U.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ar&&ay(V)===U.type){n(E,U.sibling),w=s(U,x.props),w.ref=oo(E,U,x),w.return=E,E=w;break e}n(E,U);break}else e(E,U);U=U.sibling}x.type===Us?(w=ls(x.props.children,E.mode,j,x.key),w.return=E,E=w):(j=Rl(x.type,x.key,x.props,null,E.mode,j),j.ref=oo(E,w,x),j.return=E,E=j)}return o(E);case Fs:e:{for(U=x.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(E,w.sibling),w=s(w,x.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=vd(x,E.mode,j),w.return=E,E=w}return o(E);case ar:return U=x._init,R(E,w,U(x._payload),j)}if(po(x))return A(E,w,x,j);if(to(x))return C(E,w,x,j);al(E,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(E,w.sibling),w=s(w,x),w.return=E,E=w):(n(E,w),w=yd(x,E.mode,j),w.return=E,E=w),o(E)):n(E,w)}return R}var fi=L_(!0),M_=L_(!1),tc=Ur(null),nc=null,Ks=null,$f=null;function Wf(){$f=Ks=nc=null}function qf(t){var e=tc.current;xe(tc),t._currentValue=e}function Eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){nc=t,$f=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if($f!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(nc===null)throw Error(F(308));Ks=t,nc.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var rs=null;function Hf(t){rs===null?rs=[t]:rs.push(t)}function V_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Hf(e)):(n.next=s.next,s.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,$n(t,n)}return s=r.interleaved,s===null?(e.next=e,Hf(r)):(e.next=s.next,s.next=e),r.interleaved=e,$n(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pf(t,n)}}function ly(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rc(t,e,n,r){var s=t.updateQueue;lr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(i!==null){var m=s.baseState;o=0,f=d=c=null,l=i;do{var g=l.lane,_=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,C=l;switch(g=e,_=n,C.tag){case 1:if(A=C.payload,typeof A=="function"){m=A.call(_,m,g);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=C.payload,g=typeof A=="function"?A.call(_,m,g):A,g==null)break e;m=Se({},m,g);break e;case 2:lr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=_,c=m):f=f.next=_,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(c=m),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=m}}function cy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var ga={},fn=Ur(ga),Ko=Ur(ga),Qo=Ur(ga);function ss(t){if(t===ga)throw Error(F(174));return t}function Kf(t,e){switch(me(Qo,e),me(Ko,t),me(fn,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nh(e,t)}xe(fn),me(fn,e)}function pi(){xe(fn),xe(Ko),xe(Qo)}function U_(t){ss(Qo.current);var e=ss(fn.current),n=nh(e,t.type);e!==n&&(me(Ko,t),me(fn,n))}function Qf(t){Ko.current===t&&(xe(fn),xe(Ko))}var Te=Ur(0);function sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dd=[];function Yf(){for(var t=0;t<dd.length;t++)dd[t]._workInProgressVersionPrimary=null;dd.length=0}var bl=Qn.ReactCurrentDispatcher,hd=Qn.ReactCurrentBatchConfig,fs=0,Ie=null,Le=null,Be=null,ic=!1,No=!1,Yo=0,SS=0;function nt(){throw Error(F(321))}function Jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function Xf(t,e,n,r,s,i){if(fs=i,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?AS:CS,t=n(r,s),No){i=0;do{if(No=!1,Yo=0,25<=i)throw Error(F(301));i+=1,Be=Le=null,e.updateQueue=null,bl.current=RS,t=n(r,s)}while(No)}if(bl.current=oc,e=Le!==null&&Le.next!==null,fs=0,Be=Le=Ie=null,ic=!1,e)throw Error(F(300));return t}function Zf(){var t=Yo!==0;return Yo=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ie.memoizedState=Be=t:Be=Be.next=t,Be}function Ht(){if(Le===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Be===null?Ie.memoizedState:Be.next;if(e!==null)Be=e,Le=t;else{if(t===null)throw Error(F(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Be===null?Ie.memoizedState=Be=t:Be=Be.next=t}return Be}function Jo(t,e){return typeof e=="function"?e(t):e}function fd(t){var e=Ht(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Le,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,d=i;do{var f=d.lane;if((fs&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,Ie.lanes|=f,ps|=f}d=d.next}while(d!==null&&d!==i);c===null?o=r:c.next=l,rn(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ie.lanes|=i,ps|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pd(t){var e=Ht(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);rn(i,e.memoizedState)||(St=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function B_(){}function z_(t,e){var n=Ie,r=Ht(),s=e(),i=!rn(r.memoizedState,s);if(i&&(r.memoizedState=s,St=!0),r=r.queue,ep(q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Xo(9,W_.bind(null,n,r,s,e),void 0,null),$e===null)throw Error(F(349));fs&30||$_(n,e,s)}return s}function $_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W_(t,e,n,r){e.value=n,e.getSnapshot=r,H_(e)&&G_(t)}function q_(t,e,n){return n(function(){H_(e)&&G_(t)})}function H_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function G_(t){var e=$n(t,1);e!==null&&nn(e,t,1,-1)}function uy(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=NS.bind(null,Ie,t),[e.memoizedState,t]}function Xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function K_(){return Ht().memoizedState}function kl(t,e,n,r){var s=cn();Ie.flags|=t,s.memoizedState=Xo(1|e,n,void 0,r===void 0?null:r)}function Uc(t,e,n,r){var s=Ht();r=r===void 0?null:r;var i=void 0;if(Le!==null){var o=Le.memoizedState;if(i=o.destroy,r!==null&&Jf(r,o.deps)){s.memoizedState=Xo(e,n,i,r);return}}Ie.flags|=t,s.memoizedState=Xo(1|e,n,i,r)}function dy(t,e){return kl(8390656,8,t,e)}function ep(t,e){return Uc(2048,8,t,e)}function Q_(t,e){return Uc(4,2,t,e)}function Y_(t,e){return Uc(4,4,t,e)}function J_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X_(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,J_.bind(null,e,t),n)}function tp(){}function Z_(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ew(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tw(t,e,n){return fs&21?(rn(n,e)||(n=o_(),Ie.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function bS(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=hd.transition;hd.transition={};try{t(!1),e()}finally{ce=n,hd.transition=r}}function nw(){return Ht().memoizedState}function kS(t,e,n){var r=Ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rw(t))sw(e,n);else if(n=V_(t,e,n,r),n!==null){var s=yt();nn(n,t,r,s),iw(n,e,r)}}function NS(t,e,n){var r=Ar(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rw(t))sw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,rn(l,o)){var c=e.interleaved;c===null?(s.next=s,Hf(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=V_(t,e,s,r),n!==null&&(s=yt(),nn(n,t,r,s),iw(n,e,r))}}function rw(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function sw(t,e){No=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pf(t,n)}}var oc={readContext:qt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},AS={readContext:qt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:dy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,J_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kS.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:uy,useDebugValue:tp,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=uy(!1),e=t[0];return t=bS.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,s=cn();if(Ee){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),$e===null)throw Error(F(349));fs&30||$_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,dy(q_.bind(null,r,i,t),[t]),r.flags|=2048,Xo(9,W_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=cn(),e=$e.identifierPrefix;if(Ee){var n=Pn,r=Rn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CS={readContext:qt,useCallback:Z_,useContext:qt,useEffect:ep,useImperativeHandle:X_,useInsertionEffect:Q_,useLayoutEffect:Y_,useMemo:ew,useReducer:fd,useRef:K_,useState:function(){return fd(Jo)},useDebugValue:tp,useDeferredValue:function(t){var e=Ht();return tw(e,Le.memoizedState,t)},useTransition:function(){var t=fd(Jo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:z_,useId:nw,unstable_isNewReconciler:!1},RS={readContext:qt,useCallback:Z_,useContext:qt,useEffect:ep,useImperativeHandle:X_,useInsertionEffect:Q_,useLayoutEffect:Y_,useMemo:ew,useReducer:pd,useRef:K_,useState:function(){return pd(Jo)},useDebugValue:tp,useDeferredValue:function(t){var e=Ht();return Le===null?e.memoizedState=t:tw(e,Le.memoizedState,t)},useTransition:function(){var t=pd(Jo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:z_,useId:nw,unstable_isNewReconciler:!1};function Jt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Th(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bc={isMounted:function(t){return(t=t._reactInternals)?Ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),s=Ar(t),i=Ln(r,s);i.payload=e,n!=null&&(i.callback=n),e=kr(t,i,s),e!==null&&(nn(e,t,s,r),Sl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),s=Ar(t),i=Ln(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=kr(t,i,s),e!==null&&(nn(e,t,s,r),Sl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=Ar(t),s=Ln(n,r);s.tag=2,e!=null&&(s.callback=e),e=kr(t,s,r),e!==null&&(nn(e,t,r,n),Sl(e,t,r))}};function hy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,r)||!Wo(s,i):!0}function ow(t,e,n){var r=!1,s=Or,i=e.contextType;return typeof i=="object"&&i!==null?i=qt(i):(s=kt(e)?ds:dt.current,r=e.contextTypes,i=(r=r!=null)?di(t,s):Or),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function fy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bc.enqueueReplaceState(e,e.state,null)}function Ih(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Gf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=qt(i):(i=kt(e)?ds:dt.current,s.context=di(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Th(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Bc.enqueueReplaceState(s,s.state,null),rc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function mi(t,e){try{var n="",r=e;do n+=iI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function md(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PS=typeof WeakMap=="function"?WeakMap:Map;function aw(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lc||(lc=!0,Oh=r),Sh(t,e)},n}function lw(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Sh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Sh(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function py(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=HS.bind(null,t,e,n),e.then(t,t))}function my(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var DS=Qn.ReactCurrentOwner,St=!1;function gt(t,e,n,r){e.child=t===null?M_(e,null,n,r):fi(e,t.child,n,r)}function yy(t,e,n,r,s){n=n.render;var i=e.ref;return ni(e,s),r=Xf(t,e,n,r,i,s),n=Zf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(Ee&&n&&Uf(e),e.flags|=1,gt(t,e,r,s),e.child)}function vy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!cp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,cw(t,e,i,r,s)):(t=Rl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,r)&&t.ref===e.ref)return Wn(t,e,s)}return e.flags|=1,t=Cr(i,r),t.ref=e.ref,t.return=e,e.child=t}function cw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Wo(i,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Wn(t,e,s)}return bh(t,e,n,r,s)}function uw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ys,Rt),Rt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Ys,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(Ys,Rt),Rt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,me(Ys,Rt),Rt|=r;return gt(t,e,s,n),e.child}function dw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bh(t,e,n,r,s){var i=kt(n)?ds:dt.current;return i=di(e,i),ni(e,s),n=Xf(t,e,n,r,i,s),r=Zf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(Ee&&r&&Uf(e),e.flags|=1,gt(t,e,n,s),e.child)}function _y(t,e,n,r,s){if(kt(n)){var i=!0;Xl(e)}else i=!1;if(ni(e,s),e.stateNode===null)Nl(t,e),ow(e,n,r),Ih(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=qt(d):(d=kt(n)?ds:dt.current,d=di(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&fy(e,o,r,d),lr=!1;var g=e.memoizedState;o.state=g,rc(e,r,o,s),c=e.memoizedState,l!==r||g!==c||bt.current||lr?(typeof f=="function"&&(Th(e,n,f,r),c=e.memoizedState),(l=lr||hy(e,n,l,r,g,c,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,F_(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Jt(e.type,l),o.props=d,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=qt(c):(c=kt(n)?ds:dt.current,c=di(e,c));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&fy(e,o,r,c),lr=!1,g=e.memoizedState,o.state=g,rc(e,r,o,s);var A=e.memoizedState;l!==m||g!==A||bt.current||lr?(typeof _=="function"&&(Th(e,n,_,r),A=e.memoizedState),(d=lr||hy(e,n,d,r,g,A,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return kh(t,e,n,r,i,s)}function kh(t,e,n,r,s,i){dw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&sy(e,n,!1),Wn(t,e,i);r=e.stateNode,DS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fi(e,t.child,null,i),e.child=fi(e,null,l,i)):gt(t,e,l,i),e.memoizedState=r.state,s&&sy(e,n,!0),e.child}function hw(t){var e=t.stateNode;e.pendingContext?ry(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ry(t,e.context,!1),Kf(t,e.containerInfo)}function wy(t,e,n,r,s){return hi(),zf(s),e.flags|=256,gt(t,e,n,r),e.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function Ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function fw(t,e,n){var r=e.pendingProps,s=Te.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),me(Te,s&1),t===null)return xh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Wc(o,r,0,null),t=ls(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ah(n),e.memoizedState=Nh,t):np(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return jS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Cr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Cr(l,i):(i=ls(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Nh,r}return i=t.child,t=i.sibling,r=Cr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function np(t,e){return e=Wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,r){return r!==null&&zf(r),fi(e,t.child,null,n),t=np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=md(Error(F(422))),ll(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Wc({mode:"visible",children:r.children},s,0,null),i=ls(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&fi(e,t.child,null,o),e.child.memoizedState=Ah(o),e.memoizedState=Nh,i);if(!(e.mode&1))return ll(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=md(i,r,void 0),ll(t,e,o,r)}if(l=(o&t.childLanes)!==0,St||l){if(r=$e,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,$n(t,s),nn(r,t,s,-1))}return lp(),r=md(Error(F(421))),ll(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=GS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Pt=br(s.nextSibling),jt=e,Ee=!0,Zt=null,t!==null&&(Bt[zt++]=Rn,Bt[zt++]=Pn,Bt[zt++]=hs,Rn=t.id,Pn=t.overflow,hs=e),e=np(e,r.children),e.flags|=4096,e)}function xy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Eh(t.return,e,n)}function gd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function pw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(gt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xy(t,n,e);else if(t.tag===19)xy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Te,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&sc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),gd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&sc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}gd(e,!0,n,null,i);break;case"together":gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OS(t,e,n){switch(e.tag){case 3:hw(e),hi();break;case 5:U_(e);break;case 1:kt(e.type)&&Xl(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;me(tc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?fw(t,e,n):(me(Te,Te.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);me(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return pw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),me(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,uw(t,e,n)}return Wn(t,e,n)}var mw,Ch,gw,yw;mw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ch=function(){};gw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ss(fn.current);var i=null;switch(n){case"input":s=Xd(t,s),r=Xd(t,r),i=[];break;case"select":s=Se({},s,{value:void 0}),r=Se({},r,{value:void 0}),i=[];break;case"textarea":s=th(t,s),r=th(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}rh(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Mo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&_e("scroll",t),i||l===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};yw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ao(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LS(t,e,n){var r=e.pendingProps;switch(Bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return kt(e.type)&&Jl(),rt(e),null;case 3:return r=e.stateNode,pi(),xe(bt),xe(dt),Yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(Vh(Zt),Zt=null))),Ch(t,e),rt(e),null;case 5:Qf(e);var s=ss(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)gw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return rt(e),null}if(t=ss(fn.current),ol(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[un]=e,r[Go]=i,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(s=0;s<go.length;s++)_e(go[s],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Cg(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":Pg(r,i),_e("invalid",r)}rh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&il(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&il(r.textContent,l,t),s=["children",""+l]):Mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ja(r),Rg(r,i,!0);break;case"textarea":Ja(r),Dg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[Go]=r,mw(t,e,!1,!1),e.stateNode=t;e:{switch(o=sh(n,r),n){case"dialog":_e("cancel",t),_e("close",t),s=r;break;case"iframe":case"object":case"embed":_e("load",t),s=r;break;case"video":case"audio":for(s=0;s<go.length;s++)_e(go[s],t);s=r;break;case"source":_e("error",t),s=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),s=r;break;case"details":_e("toggle",t),s=r;break;case"input":Cg(t,r),s=Xd(t,r),_e("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Se({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Pg(t,r),s=th(t,r),_e("invalid",t);break;default:s=r}rh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Kv(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Hv(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vo(t,c):typeof c=="number"&&Vo(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mo.hasOwnProperty(i)?c!=null&&i==="onScroll"&&_e("scroll",t):c!=null&&bf(t,i,c,o))}switch(n){case"input":Ja(t),Rg(t,r,!1);break;case"textarea":Ja(t),Dg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Xs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)yw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ss(Qo.current),ss(fn.current),ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(i=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return rt(e),null;case 13:if(xe(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Pt!==null&&e.mode&1&&!(e.flags&128))O_(),hi(),e.flags|=98560,i=!1;else if(i=ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[un]=e}else hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),i=!1}else Zt!==null&&(Vh(Zt),Zt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Me===0&&(Me=3):lp())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return pi(),Ch(t,e),t===null&&qo(e.stateNode.containerInfo),rt(e),null;case 10:return qf(e.type._context),rt(e),null;case 17:return kt(e.type)&&Jl(),rt(e),null;case 19:if(xe(Te),i=e.memoizedState,i===null)return rt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ao(i,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sc(t),o!==null){for(e.flags|=128,ao(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Te,Te.current&1|2),e.child}t=t.sibling}i.tail!==null&&Re()>gi&&(e.flags|=128,r=!0,ao(i,!1),e.lanes=4194304)}else{if(!r)if(t=sc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ee)return rt(e),null}else 2*Re()-i.renderingStartTime>gi&&n!==1073741824&&(e.flags|=128,r=!0,ao(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Re(),e.sibling=null,n=Te.current,me(Te,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function MS(t,e){switch(Bf(e),e.tag){case 1:return kt(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pi(),xe(bt),xe(dt),Yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qf(e),null;case 13:if(xe(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Te),null;case 4:return pi(),null;case 10:return qf(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var cl=!1,at=!1,VS=typeof WeakSet=="function"?WeakSet:Set,W=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Rh(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Ey=!1;function FS(t,e){if(ph=Gl,t=E_(),Ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,f=0,m=t,g=null;t:for(;;){for(var _;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===t)break t;if(g===n&&++d===s&&(l=o),g===i&&++f===r&&(c=o),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(mh={focusedElem:t,selectionRange:n},Gl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var C=A.memoizedProps,R=A.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?C:Jt(e.type,C),R);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(j){Ne(e,e.return,j)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return A=Ey,Ey=!1,A}function Ao(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Rh(e,n,i)}s=s.next}while(s!==r)}}function zc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vw(t){var e=t.alternate;e!==null&&(t.alternate=null,vw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[Go],delete e[vh],delete e[xS],delete e[ES])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _w(t){return t.tag===5||t.tag===3||t.tag===4}function Ty(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_w(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}var qe=null,Xt=!1;function rr(t,e,n){for(n=n.child;n!==null;)ww(t,e,n),n=n.sibling}function ww(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(jc,n)}catch{}switch(n.tag){case 5:at||Qs(n,e);case 6:var r=qe,s=Xt;qe=null,rr(t,e,n),qe=r,Xt=s,qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?cd(t.parentNode,n):t.nodeType===1&&cd(t,n),zo(t)):cd(qe,n.stateNode));break;case 4:r=qe,s=Xt,qe=n.stateNode.containerInfo,Xt=!0,rr(t,e,n),qe=r,Xt=s;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Rh(n,e,o),s=s.next}while(s!==r)}rr(t,e,n);break;case 1:if(!at&&(Qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,rr(t,e,n),at=r):rr(t,e,n);break;default:rr(t,e,n)}}function Iy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VS),e.forEach(function(r){var s=KS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Xt=!1;break e;case 3:qe=l.stateNode.containerInfo,Xt=!0;break e;case 4:qe=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(qe===null)throw Error(F(160));ww(i,o,s),qe=null,Xt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){Ne(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xw(e,t),e=e.sibling}function xw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),ln(t),r&4){try{Ao(3,t,t.return),zc(3,t)}catch(C){Ne(t,t.return,C)}try{Ao(5,t,t.return)}catch(C){Ne(t,t.return,C)}}break;case 1:Yt(e,t),ln(t),r&512&&n!==null&&Qs(n,n.return);break;case 5:if(Yt(e,t),ln(t),r&512&&n!==null&&Qs(n,n.return),t.flags&32){var s=t.stateNode;try{Vo(s,"")}catch(C){Ne(t,t.return,C)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&$v(s,i),sh(l,o);var d=sh(l,i);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?Kv(s,m):f==="dangerouslySetInnerHTML"?Hv(s,m):f==="children"?Vo(s,m):bf(s,f,m,d)}switch(l){case"input":Zd(s,i);break;case"textarea":Wv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Xs(s,!!i.multiple,_,!1):g!==!!i.multiple&&(i.defaultValue!=null?Xs(s,!!i.multiple,i.defaultValue,!0):Xs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Go]=i}catch(C){Ne(t,t.return,C)}}break;case 6:if(Yt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(C){Ne(t,t.return,C)}}break;case 3:if(Yt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(C){Ne(t,t.return,C)}break;case 4:Yt(e,t),ln(t);break;case 13:Yt(e,t),ln(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(ip=Re())),r&4&&Iy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(at=(d=at)||f,Yt(e,t),at=d):Yt(e,t),ln(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(g=W,_=g.child,g.tag){case 0:case 11:case 14:case 15:Ao(4,g,g.return);break;case 1:Qs(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(C){Ne(r,n,C)}}break;case 5:Qs(g,g.return);break;case 22:if(g.memoizedState!==null){by(m);continue}}_!==null?(_.return=g,W=_):by(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Gv("display",o))}catch(C){Ne(t,t.return,C)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(C){Ne(t,t.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Yt(e,t),ln(t),r&4&&Iy(t);break;case 21:break;default:Yt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_w(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Vo(s,""),r.flags&=-33);var i=Ty(t);jh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ty(t);Dh(t,l,o);break;default:throw Error(F(161))}}catch(c){Ne(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function US(t,e,n){W=t,Ew(t)}function Ew(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||cl;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||at;l=cl;var d=at;if(cl=o,(at=c)&&!d)for(W=s;W!==null;)o=W,c=o.child,o.tag===22&&o.memoizedState!==null?ky(s):c!==null?(c.return=o,W=c):ky(s);for(;i!==null;)W=i,Ew(i),i=i.sibling;W=s,cl=l,at=d}Sy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Sy(t)}}function Sy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||zc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&cy(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&zo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}at||e.flags&512&&Ph(e)}catch(g){Ne(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function by(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function ky(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zc(4,e)}catch(c){Ne(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){Ne(e,s,c)}}var i=e.return;try{Ph(e)}catch(c){Ne(e,i,c)}break;case 5:var o=e.return;try{Ph(e)}catch(c){Ne(e,o,c)}}}catch(c){Ne(e,e.return,c)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var BS=Math.ceil,ac=Qn.ReactCurrentDispatcher,rp=Qn.ReactCurrentOwner,Wt=Qn.ReactCurrentBatchConfig,ie=0,$e=null,je=null,Qe=0,Rt=0,Ys=Ur(0),Me=0,Zo=null,ps=0,$c=0,sp=0,Co=null,Tt=null,ip=0,gi=1/0,kn=null,lc=!1,Oh=null,Nr=null,ul=!1,gr=null,cc=0,Ro=0,Lh=null,Al=-1,Cl=0;function yt(){return ie&6?Re():Al!==-1?Al:Al=Re()}function Ar(t){return t.mode&1?ie&2&&Qe!==0?Qe&-Qe:IS.transition!==null?(Cl===0&&(Cl=o_()),Cl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:f_(t.type)),t):1}function nn(t,e,n,r){if(50<Ro)throw Ro=0,Lh=null,Error(F(185));fa(t,n,r),(!(ie&2)||t!==$e)&&(t===$e&&(!(ie&2)&&($c|=n),Me===4&&ur(t,Qe)),Nt(t,r),n===1&&ie===0&&!(e.mode&1)&&(gi=Re()+500,Fc&&Br()))}function Nt(t,e){var n=t.callbackNode;II(t,e);var r=Hl(t,t===$e?Qe:0);if(r===0)n!==null&&Lg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lg(n),e===1)t.tag===0?TS(Ny.bind(null,t)):P_(Ny.bind(null,t)),_S(function(){!(ie&6)&&Br()}),n=null;else{switch(a_(r)){case 1:n=Rf;break;case 4:n=s_;break;case 16:n=ql;break;case 536870912:n=i_;break;default:n=ql}n=Cw(n,Tw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Tw(t,e){if(Al=-1,Cl=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=Hl(t,t===$e?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var s=ie;ie|=2;var i=Sw();($e!==t||Qe!==e)&&(kn=null,gi=Re()+500,as(t,e));do try{WS();break}catch(l){Iw(t,l)}while(!0);Wf(),ac.current=i,ie=s,je!==null?e=0:($e=null,Qe=0,e=Me)}if(e!==0){if(e===2&&(s=ch(t),s!==0&&(r=s,e=Mh(t,s))),e===1)throw n=Zo,as(t,0),ur(t,r),Nt(t,Re()),n;if(e===6)ur(t,r);else{if(s=t.current.alternate,!(r&30)&&!zS(s)&&(e=uc(t,r),e===2&&(i=ch(t),i!==0&&(r=i,e=Mh(t,i))),e===1))throw n=Zo,as(t,0),ur(t,r),Nt(t,Re()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Xr(t,Tt,kn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=ip+500-Re(),10<e)){if(Hl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=yh(Xr.bind(null,t,Tt,kn),e);break}Xr(t,Tt,kn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-tn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BS(r/1960))-r,10<r){t.timeoutHandle=yh(Xr.bind(null,t,Tt,kn),r);break}Xr(t,Tt,kn);break;case 5:Xr(t,Tt,kn);break;default:throw Error(F(329))}}}return Nt(t,Re()),t.callbackNode===n?Tw.bind(null,t):null}function Mh(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=uc(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&Vh(e)),t}function Vh(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function zS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!rn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~sp,e&=~$c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Ny(t){if(ie&6)throw Error(F(327));ri();var e=Hl(t,0);if(!(e&1))return Nt(t,Re()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=ch(t);r!==0&&(e=r,n=Mh(t,r))}if(n===1)throw n=Zo,as(t,0),ur(t,e),Nt(t,Re()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,Tt,kn),Nt(t,Re()),null}function op(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(gi=Re()+500,Fc&&Br())}}function ms(t){gr!==null&&gr.tag===0&&!(ie&6)&&ri();var e=ie;ie|=1;var n=Wt.transition,r=ce;try{if(Wt.transition=null,ce=1,t)return t()}finally{ce=r,Wt.transition=n,ie=e,!(ie&6)&&Br()}}function ap(){Rt=Ys.current,xe(Ys)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vS(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Bf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:pi(),xe(bt),xe(dt),Yf();break;case 5:Qf(r);break;case 4:pi();break;case 13:xe(Te);break;case 19:xe(Te);break;case 10:qf(r.type._context);break;case 22:case 23:ap()}n=n.return}if($e=t,je=t=Cr(t.current,null),Qe=Rt=e,Me=0,Zo=null,sp=$c=ps=0,Tt=Co=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}rs=null}return t}function Iw(t,e){do{var n=je;try{if(Wf(),bl.current=oc,ic){for(var r=Ie.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ic=!1}if(fs=0,Be=Le=Ie=null,No=!1,Yo=0,rp.current=null,n===null||n.return===null){Me=1,Zo=e,je=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=Qe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=my(o);if(_!==null){_.flags&=-257,gy(_,o,l,i,e),_.mode&1&&py(i,d,e),e=_,c=d;var A=e.updateQueue;if(A===null){var C=new Set;C.add(c),e.updateQueue=C}else A.add(c);break e}else{if(!(e&1)){py(i,d,e),lp();break e}c=Error(F(426))}}else if(Ee&&l.mode&1){var R=my(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),gy(R,o,l,i,e),zf(mi(c,l));break e}}i=c=mi(c,l),Me!==4&&(Me=2),Co===null?Co=[i]:Co.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=aw(i,c,e);ly(i,E);break e;case 1:l=c;var w=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Nr===null||!Nr.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var j=lw(i,l,e);ly(i,j);break e}}i=i.return}while(i!==null)}kw(n)}catch(V){e=V,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function Sw(){var t=ac.current;return ac.current=oc,t===null?oc:t}function lp(){(Me===0||Me===3||Me===2)&&(Me=4),$e===null||!(ps&268435455)&&!($c&268435455)||ur($e,Qe)}function uc(t,e){var n=ie;ie|=2;var r=Sw();($e!==t||Qe!==e)&&(kn=null,as(t,e));do try{$S();break}catch(s){Iw(t,s)}while(!0);if(Wf(),ie=n,ac.current=r,je!==null)throw Error(F(261));return $e=null,Qe=0,Me}function $S(){for(;je!==null;)bw(je)}function WS(){for(;je!==null&&!mI();)bw(je)}function bw(t){var e=Aw(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?kw(t):je=e,rp.current=null}function kw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MS(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,je=null;return}}else if(n=LS(n,e,Rt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Me===0&&(Me=5)}function Xr(t,e,n){var r=ce,s=Wt.transition;try{Wt.transition=null,ce=1,qS(t,e,n,r)}finally{Wt.transition=s,ce=r}return null}function qS(t,e,n,r){do ri();while(gr!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(SI(t,i),t===$e&&(je=$e=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Cw(ql,function(){return ri(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Wt.transition,Wt.transition=null;var o=ce;ce=1;var l=ie;ie|=4,rp.current=null,FS(t,n),xw(n,t),dS(mh),Gl=!!ph,mh=ph=null,t.current=n,US(n),gI(),ie=l,ce=o,Wt.transition=i}else t.current=n;if(ul&&(ul=!1,gr=t,cc=s),i=t.pendingLanes,i===0&&(Nr=null),_I(n.stateNode),Nt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(lc)throw lc=!1,t=Oh,Oh=null,t;return cc&1&&t.tag!==0&&ri(),i=t.pendingLanes,i&1?t===Lh?Ro++:(Ro=0,Lh=t):Ro=0,Br(),null}function ri(){if(gr!==null){var t=a_(cc),e=Wt.transition,n=ce;try{if(Wt.transition=null,ce=16>t?16:t,gr===null)var r=!1;else{if(t=gr,gr=null,cc=0,ie&6)throw Error(F(331));var s=ie;for(ie|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(W=d;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Ao(8,f,i)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var g=f.sibling,_=f.return;if(vw(f),f===d){W=null;break}if(g!==null){g.return=_,W=g;break}W=_}}}var A=i.alternate;if(A!==null){var C=A.child;if(C!==null){A.child=null;do{var R=C.sibling;C.sibling=null,C=R}while(C!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ao(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,W=E;break e}W=i.return}}var w=t.current;for(W=w;W!==null;){o=W;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,W=x;else e:for(o=w;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zc(9,l)}}catch(V){Ne(l,l.return,V)}if(l===o){W=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,W=j;break e}W=l.return}}if(ie=s,Br(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(jc,t)}catch{}r=!0}return r}finally{ce=n,Wt.transition=e}}return!1}function Ay(t,e,n){e=mi(n,e),e=aw(t,e,1),t=kr(t,e,1),e=yt(),t!==null&&(fa(t,1,e),Nt(t,e))}function Ne(t,e,n){if(t.tag===3)Ay(t,t,n);else for(;e!==null;){if(e.tag===3){Ay(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=mi(n,t),t=lw(e,t,1),e=kr(e,t,1),t=yt(),e!==null&&(fa(e,1,t),Nt(e,t));break}}e=e.return}}function HS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Qe&n)===n&&(Me===4||Me===3&&(Qe&130023424)===Qe&&500>Re()-ip?as(t,0):sp|=n),Nt(t,e)}function Nw(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=yt();t=$n(t,e),t!==null&&(fa(t,e,n),Nt(t,n))}function GS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nw(t,n)}function KS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Nw(t,n)}var Aw;Aw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,OS(t,e,n);St=!!(t.flags&131072)}else St=!1,Ee&&e.flags&1048576&&D_(e,ec,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var s=di(e,dt.current);ni(e,n),s=Xf(null,e,r,t,s,n);var i=Zf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(i=!0,Xl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Gf(e),s.updater=Bc,e.stateNode=s,s._reactInternals=e,Ih(e,r,t,n),e=kh(null,e,r,!0,i,n)):(e.tag=0,Ee&&i&&Uf(e),gt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=YS(r),t=Jt(r,t),s){case 0:e=bh(null,e,r,t,n);break e;case 1:e=_y(null,e,r,t,n);break e;case 11:e=yy(null,e,r,t,n);break e;case 14:e=vy(null,e,r,Jt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Jt(r,s),bh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Jt(r,s),_y(t,e,r,s,n);case 3:e:{if(hw(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,F_(t,e),rc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=mi(Error(F(423)),e),e=wy(t,e,r,n,s);break e}else if(r!==s){s=mi(Error(F(424)),e),e=wy(t,e,r,n,s);break e}else for(Pt=br(e.stateNode.containerInfo.firstChild),jt=e,Ee=!0,Zt=null,n=M_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),r===s){e=Wn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return U_(e),t===null&&xh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,gh(r,s)?o=null:i!==null&&gh(r,i)&&(e.flags|=32),dw(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&xh(e),null;case 13:return fw(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fi(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Jt(r,s),yy(t,e,r,s,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,me(tc,r._currentValue),r._currentValue=o,i!==null)if(rn(i.value,o)){if(i.children===s.children&&!bt.current){e=Wn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ln(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Eh(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Eh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}gt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ni(e,n),s=qt(s),r=r(s),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,s=Jt(r,e.pendingProps),s=Jt(r.type,s),vy(t,e,r,s,n);case 15:return cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Jt(r,s),Nl(t,e),e.tag=1,kt(r)?(t=!0,Xl(e)):t=!1,ni(e,n),ow(e,r,s),Ih(e,r,s,n),kh(null,e,r,!0,t,n);case 19:return pw(t,e,n);case 22:return uw(t,e,n)}throw Error(F(156,e.tag))};function Cw(t,e){return r_(t,e)}function QS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new QS(t,e,n,r)}function cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YS(t){if(typeof t=="function")return cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nf)return 11;if(t===Af)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Us:return ls(n.children,s,i,e);case kf:o=8,s|=8;break;case Kd:return t=$t(12,n,e,s|2),t.elementType=Kd,t.lanes=i,t;case Qd:return t=$t(13,n,e,s),t.elementType=Qd,t.lanes=i,t;case Yd:return t=$t(19,n,e,s),t.elementType=Yd,t.lanes=i,t;case Uv:return Wc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vv:o=10;break e;case Fv:o=9;break e;case Nf:o=11;break e;case Af:o=14;break e;case ar:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=$t(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ls(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function Wc(t,e,n,r){return t=$t(22,t,r,e),t.elementType=Uv,t.lanes=n,t.stateNode={isHidden:!1},t}function yd(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function vd(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function up(t,e,n,r,s,i,o,l,c){return t=new JS(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=$t(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(i),t}function XS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Rw(t){if(!t)return Or;t=t._reactInternals;e:{if(Ss(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(kt(n))return R_(t,n,e)}return e}function Pw(t,e,n,r,s,i,o,l,c){return t=up(n,r,!0,t,s,i,o,l,c),t.context=Rw(null),n=t.current,r=yt(),s=Ar(n),i=Ln(r,s),i.callback=e??null,kr(n,i,s),t.current.lanes=s,fa(t,s,r),Nt(t,r),t}function qc(t,e,n,r){var s=e.current,i=yt(),o=Ar(s);return n=Rw(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(s,e,o),t!==null&&(nn(t,s,o,i),Sl(t,s,o)),o}function dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dp(t,e){Cy(t,e),(t=t.alternate)&&Cy(t,e)}function ZS(){return null}var Dw=typeof reportError=="function"?reportError:function(t){console.error(t)};function hp(t){this._internalRoot=t}Hc.prototype.render=hp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));qc(t,e,null,null)};Hc.prototype.unmount=hp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){qc(null,t,null,null)}),e[zn]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=u_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&h_(t)}};function fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ry(){}function eb(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=dc(o);i.call(d)}}var o=Pw(e,r,t,0,null,!1,!1,"",Ry);return t._reactRootContainer=o,t[zn]=o.current,qo(t.nodeType===8?t.parentNode:t),ms(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=dc(c);l.call(d)}}var c=up(t,0,!1,null,null,!1,!1,"",Ry);return t._reactRootContainer=c,t[zn]=c.current,qo(t.nodeType===8?t.parentNode:t),ms(function(){qc(e,c,n,r)}),c}function Kc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=dc(o);l.call(c)}}qc(e,o,t,s)}else o=eb(n,e,t,s,r);return dc(o)}l_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mo(e.pendingLanes);n!==0&&(Pf(e,n|1),Nt(e,Re()),!(ie&6)&&(gi=Re()+500,Br()))}break;case 13:ms(function(){var r=$n(t,1);if(r!==null){var s=yt();nn(r,t,1,s)}}),dp(t,1)}};Df=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=yt();nn(e,t,134217728,n)}dp(t,134217728)}};c_=function(t){if(t.tag===13){var e=Ar(t),n=$n(t,e);if(n!==null){var r=yt();nn(n,t,e,r)}dp(t,e)}};u_=function(){return ce};d_=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};oh=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Vc(r);if(!s)throw Error(F(90));zv(r),Zd(r,s)}}}break;case"textarea":Wv(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};Jv=op;Xv=ms;var tb={usingClientEntryPoint:!1,Events:[ma,Ws,Vc,Qv,Yv,op]},lo={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nb={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t_(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||ZS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{jc=dl.inject(nb),hn=dl}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tb;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fp(e))throw Error(F(200));return XS(t,e,null,n)};Ft.createRoot=function(t,e){if(!fp(t))throw Error(F(299));var n=!1,r="",s=Dw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=up(t,1,!1,null,null,n,!1,r,s),t[zn]=e.current,qo(t.nodeType===8?t.parentNode:t),new hp(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=t_(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return ms(t)};Ft.hydrate=function(t,e,n){if(!Gc(e))throw Error(F(200));return Kc(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!fp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Dw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pw(e,null,t,1,n??null,s,!1,i,o),t[zn]=e.current,qo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Hc(e)};Ft.render=function(t,e,n){if(!Gc(e))throw Error(F(200));return Kc(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(F(40));return t._reactRootContainer?(ms(function(){Kc(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Ft.unstable_batchedUpdates=op;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Kc(t,e,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function jw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jw)}catch(t){console.error(t)}}jw(),jv.exports=Ft;var rb=jv.exports,Py=rb;Hd.createRoot=Py.createRoot,Hd.hydrateRoot=Py.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ea.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const Dy="popstate";function sb(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return Fh("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:hc(s)}return ob(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ib(){return Math.random().toString(36).substr(2,8)}function jy(t,e){return{usr:t.state,key:t.key,idx:e}}function Fh(t,e,n,r){return n===void 0&&(n=null),ea({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ai(e):e,{state:n,key:e&&e.key||r||ib()})}function hc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ai(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ob(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=yr.Pop,c=null,d=f();d==null&&(d=0,o.replaceState(ea({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=yr.Pop;let R=f(),E=R==null?null:R-d;d=R,c&&c({action:l,location:C.location,delta:E})}function g(R,E){l=yr.Push;let w=Fh(C.location,R,E);d=f()+1;let x=jy(w,d),j=C.createHref(w);try{o.pushState(x,"",j)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;s.location.assign(j)}i&&c&&c({action:l,location:C.location,delta:1})}function _(R,E){l=yr.Replace;let w=Fh(C.location,R,E);d=f();let x=jy(w,d),j=C.createHref(w);o.replaceState(x,"",j),i&&c&&c({action:l,location:C.location,delta:0})}function A(R){let E=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof R=="string"?R:hc(R);return Pe(E,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,E)}let C={get action(){return l},get location(){return t(s,o)},listen(R){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Dy,m),c=R,()=>{s.removeEventListener(Dy,m),c=null}},createHref(R){return e(s,R)},createURL:A,encodeLocation(R){let E=A(R);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:_,go(R){return o.go(R)}};return C}var Oy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oy||(Oy={}));function ab(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ai(e):e,s=mp(r.pathname||"/",n);if(s==null)return null;let i=Ow(t);lb(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=vb(i[l],xb(s));return o}function Ow(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Pe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Rr([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(Pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Ow(i.children,e,f,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:gb(d,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let c of Lw(i.path))s(i,o,c)}),e}function Lw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=Lw(r.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function lb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cb=/^:[\w-]+$/,ub=3,hb=2,fb=1,pb=10,mb=-2,Ly=t=>t==="*";function gb(t,e){let n=t.split("/"),r=n.length;return n.some(Ly)&&(r+=mb),e&&(r+=hb),n.filter(s=>!Ly(s)).reduce((s,i)=>s+(cb.test(i)?ub:i===""?fb:pb),r)}function yb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function vb(t,e){let{routesMeta:n}=t,r={},s="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=_b({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d);if(!f)return null;Object.assign(r,f.params);let m=l.route;i.push({params:r,pathname:Rr([s,f.pathname]),pathnameBase:bb(Rr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Rr([s,f.pathnameBase]))}return i}function _b(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wb(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:g,isOptional:_}=f;if(g==="*"){let C=l[m]||"";o=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}const A=l[m];return _&&!A?d[g]=void 0:d[g]=Eb(A||"",g),d},{}),pathname:i,pathnameBase:o,pattern:t}}function wb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),pp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function xb(t){try{return decodeURI(t)}catch(e){return pp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Eb(t,e){try{return decodeURIComponent(t)}catch(n){return pp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function mp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Tb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Ai(t):t;return{pathname:n?n.startsWith("/")?n:Ib(n,e):e,search:kb(r),hash:Nb(s)}}function Ib(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function _d(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gp(t,e){let n=Sb(t);return e?n.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yp(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Ai(t):(s=ea({},t),Pe(!s.pathname||!s.pathname.includes("?"),_d("?","pathname","search",s)),Pe(!s.pathname||!s.pathname.includes("#"),_d("#","pathname","hash",s)),Pe(!s.search||!s.search.includes("#"),_d("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let c=Tb(s,l),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),bb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Nb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ab(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Mw=["post","put","patch","delete"];new Set(Mw);const Cb=["get",...Mw];new Set(Cb);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ta.apply(this,arguments)}const vp=D.createContext(null),Rb=D.createContext(null),zr=D.createContext(null),Qc=D.createContext(null),Yn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Vw=D.createContext(null);function Pb(t,e){let{relative:n}=e===void 0?{}:e;Ci()||Pe(!1);let{basename:r,navigator:s}=D.useContext(zr),{hash:i,pathname:o,search:l}=Uw(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Rr([r,o])),s.createHref({pathname:c,search:l,hash:i})}function Ci(){return D.useContext(Qc)!=null}function Ri(){return Ci()||Pe(!1),D.useContext(Qc).location}function Fw(t){D.useContext(zr).static||D.useLayoutEffect(t)}function Kt(){let{isDataRoute:t}=D.useContext(Yn);return t?Gb():Db()}function Db(){Ci()||Pe(!1);let t=D.useContext(vp),{basename:e,future:n,navigator:r}=D.useContext(zr),{matches:s}=D.useContext(Yn),{pathname:i}=Ri(),o=JSON.stringify(gp(s,n.v7_relativeSplatPath)),l=D.useRef(!1);return Fw(()=>{l.current=!0}),D.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=yp(d,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Rr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,i,t])}const jb=D.createContext(null);function Ob(t){let e=D.useContext(Yn).outlet;return e&&D.createElement(jb.Provider,{value:t},e)}function Uw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(zr),{matches:s}=D.useContext(Yn),{pathname:i}=Ri(),o=JSON.stringify(gp(s,r.v7_relativeSplatPath));return D.useMemo(()=>yp(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function Lb(t,e){return Mb(t,e)}function Mb(t,e,n,r){Ci()||Pe(!1);let{navigator:s}=D.useContext(zr),{matches:i}=D.useContext(Yn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Ri(),f;if(e){var m;let R=typeof e=="string"?Ai(e):e;c==="/"||(m=R.pathname)!=null&&m.startsWith(c)||Pe(!1),f=R}else f=d;let g=f.pathname||"/",_=c==="/"?g:g.slice(c.length)||"/",A=ab(t,{pathname:_}),C=zb(A&&A.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:Rr([c,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?c:Rr([c,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),i,n,r);return e&&C?D.createElement(Qc.Provider,{value:{location:ta({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yr.Pop}},C):C}function Vb(){let t=Hb(),e=Ab(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:s},n):null,null)}const Fb=D.createElement(Vb,null);class Ub extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Yn.Provider,{value:this.props.routeContext},D.createElement(Vw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bb(t){let{routeContext:e,match:n,children:r}=t,s=D.useContext(vp);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Yn.Provider,{value:e},r)}function zb(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id]));f>=0||Pe(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:g,errors:_}=n,A=m.route.loader&&g[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||A){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let _,A=!1,C=null,R=null;n&&(_=l&&m.route.id?l[m.route.id]:void 0,C=m.route.errorElement||Fb,c&&(d<0&&g===0?(A=!0,R=null):d===g&&(A=!0,R=m.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),w=()=>{let x;return _?x=C:A?x=R:m.route.Component?x=D.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=f,D.createElement(Bb,{match:m,routeContext:{outlet:f,matches:E,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?D.createElement(Ub,{location:n.location,revalidation:n.revalidation,component:C,error:_,children:w(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):w()},null)}var Bw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Bw||{}),fc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fc||{});function $b(t){let e=D.useContext(vp);return e||Pe(!1),e}function Wb(t){let e=D.useContext(Rb);return e||Pe(!1),e}function qb(t){let e=D.useContext(Yn);return e||Pe(!1),e}function zw(t){let e=qb(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function Hb(){var t;let e=D.useContext(Vw),n=Wb(fc.UseRouteError),r=zw(fc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Gb(){let{router:t}=$b(Bw.UseNavigateStable),e=zw(fc.UseNavigateStable),n=D.useRef(!1);return Fw(()=>{n.current=!0}),D.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ta({fromRouteId:e},i)))},[t,e])}function Kb(t){let{to:e,replace:n,state:r,relative:s}=t;Ci()||Pe(!1);let{future:i,static:o}=D.useContext(zr),{matches:l}=D.useContext(Yn),{pathname:c}=Ri(),d=Kt(),f=yp(e,gp(l,i.v7_relativeSplatPath),c,s==="path"),m=JSON.stringify(f);return D.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:s}),[d,m,s,n,r]),null}function Qb(t){return Ob(t.context)}function Et(t){Pe(!1)}function Yb(t){let{basename:e="/",children:n=null,location:r,navigationType:s=yr.Pop,navigator:i,static:o=!1,future:l}=t;Ci()&&Pe(!1);let c=e.replace(/^\/*/,"/"),d=D.useMemo(()=>({basename:c,navigator:i,static:o,future:ta({v7_relativeSplatPath:!1},l)}),[c,l,i,o]);typeof r=="string"&&(r=Ai(r));let{pathname:f="/",search:m="",hash:g="",state:_=null,key:A="default"}=r,C=D.useMemo(()=>{let R=mp(f,c);return R==null?null:{location:{pathname:R,search:m,hash:g,state:_,key:A},navigationType:s}},[c,f,m,g,_,A,s]);return C==null?null:D.createElement(zr.Provider,{value:d},D.createElement(Qc.Provider,{children:n,value:C}))}function Jb(t){let{children:e,location:n}=t;return Lb(Uh(e),n)}new Promise(()=>{});function Uh(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,s)=>{if(!D.isValidElement(r))return;let i=[...e,s];if(r.type===D.Fragment){n.push.apply(n,Uh(r.props.children,i));return}r.type!==Et&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Uh(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bh(){return Bh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bh.apply(this,arguments)}function Xb(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function Zb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ek(t,e){return t.button===0&&(!e||e==="_self")&&!Zb(t)}const tk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],nk="6";try{window.__reactRouterVersion=nk}catch{}const rk="startTransition",My=HT[rk];function sk(t){let{basename:e,children:n,future:r,window:s}=t,i=D.useRef();i.current==null&&(i.current=sb({window:s,v5Compat:!0}));let o=i.current,[l,c]=D.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=D.useCallback(m=>{d&&My?My(()=>c(m)):c(m)},[c,d]);return D.useLayoutEffect(()=>o.listen(f),[o,f]),D.createElement(Yb,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const ik=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ok=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vy=D.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:c,to:d,preventScrollReset:f,unstable_viewTransition:m}=e,g=Xb(e,tk),{basename:_}=D.useContext(zr),A,C=!1;if(typeof d=="string"&&ok.test(d)&&(A=d,ik))try{let x=new URL(window.location.href),j=d.startsWith("//")?new URL(x.protocol+d):new URL(d),V=mp(j.pathname,_);j.origin===x.origin&&V!=null?d=V+j.search+j.hash:C=!0}catch{}let R=Pb(d,{relative:s}),E=ak(d,{replace:o,state:l,target:c,preventScrollReset:f,relative:s,unstable_viewTransition:m});function w(x){r&&r(x),x.defaultPrevented||E(x)}return D.createElement("a",Bh({},g,{href:A||R,onClick:C||i?r:w,ref:n,target:c}))});var Fy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fy||(Fy={}));var Uy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Uy||(Uy={}));function ak(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,c=Kt(),d=Ri(),f=Uw(t,{relative:o});return D.useCallback(m=>{if(ek(m,n)){m.preventDefault();let g=r!==void 0?r:hc(d)===hc(f);c(t,{replace:g,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:l})}},[d,c,f,r,s,n,t,i,o,l])}var By={};/**
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
 */const $w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ww={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,d=c?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,_=d&63;c||(_=64,o||(g=64)),r.push(n[f],n[m],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new ck;const g=i<<2|l>>4;if(r.push(g),d!==64){const _=l<<4&240|d>>2;if(r.push(_),m!==64){const A=d<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ck extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uk=function(t){const e=$w(t);return Ww.encodeByteArray(e,!0)},pc=function(t){return uk(t).replace(/\./g,"")},qw=function(t){try{return Ww.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hk=()=>dk().__FIREBASE_DEFAULTS__,fk=()=>{if(typeof process>"u"||typeof By>"u")return;const t=By.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qw(t[1]);return e&&JSON.parse(e)},Yc=()=>{try{return hk()||fk()||pk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hw=t=>{var e,n;return(n=(e=Yc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mk=t=>{const e=Hw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gw=()=>{var t;return(t=Yc())===null||t===void 0?void 0:t.config},Kw=t=>{var e;return(e=Yc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class gk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function yk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pc(JSON.stringify(n)),pc(JSON.stringify(o)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function _k(){var t;const e=(t=Yc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _p(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ek(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tk(){return!_k()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jc(){try{return typeof indexedDB=="object"}catch{return!1}}function Xc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function wp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ik="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ik,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new an(s,l,r)}}function Sk(t,e){return t.replace(bk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bk=/\{\$([^}]+)}/g;function kk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zy(i)&&zy(o)){if(!gs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zy(t){return t!==null&&typeof t=="object"}/**
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
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Nk(t,e){const n=new Ak(t,e);return n.subscribe.bind(n)}class Ak{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ck(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wd),s.error===void 0&&(s.error=wd),s.complete===void 0&&(s.complete=wd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ck(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wd(){}/**
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
 */const Rk=1e3,Pk=2,Dk=4*60*60*1e3,jk=.5;function $y(t,e=Rk,n=Pk){const r=e*Math.pow(n,t),s=Math.round(jk*r*(Math.random()-.5)*2);return Math.min(Dk,r+s)}/**
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
 */function ge(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class Ok{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mk(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lk(t){return t===Zr?void 0:t}function Mk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Vk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ok(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Fk={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Uk=ne.INFO,Bk={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},zk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=Uk,this._logHandler=zk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const $k=(t,e)=>e.some(n=>t instanceof n);let Wy,qy;function Wk(){return Wy||(Wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qk(){return qy||(qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qw=new WeakMap,zh=new WeakMap,Yw=new WeakMap,xd=new WeakMap,xp=new WeakMap;function Hk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qw.set(n,t)}).catch(()=>{}),xp.set(e,t),e}function Gk(t){if(zh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kk(t){$h=t($h)}function Qk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ed(this),e,...n);return Yw.set(r,e.sort?e.sort():[e]),Mn(r)}:qk().includes(t)?function(...e){return t.apply(Ed(this),e),Mn(Qw.get(this))}:function(...e){return Mn(t.apply(Ed(this),e))}}function Yk(t){return typeof t=="function"?Qk(t):(t instanceof IDBTransaction&&Gk(t),$k(t,Wk())?new Proxy(t,$h):t)}function Mn(t){if(t instanceof IDBRequest)return Hk(t);if(xd.has(t))return xd.get(t);const e=Yk(t);return e!==t&&(xd.set(t,e),xp.set(e,t)),e}const Ed=t=>xp.get(t);function eu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Mn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function Td(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Mn(n).then(()=>{})}const Jk=["get","getKey","getAll","getAllKeys","count"],Xk=["put","add","delete","clear"],Id=new Map;function Hy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Id.get(e))return Id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jk.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&c.done]))[0]};return Id.set(e,i),i}Kk(t=>({...t,get:(e,n,r)=>Hy(e,n)||t.get(e,n,r),has:(e,n)=>!!Hy(e,n)||t.has(e,n)}));/**
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
 */class Zk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",Gy="0.10.13";/**
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
 */const qn=new Zc("@firebase/app"),tN="@firebase/app-compat",nN="@firebase/analytics-compat",rN="@firebase/analytics",sN="@firebase/app-check-compat",iN="@firebase/app-check",oN="@firebase/auth",aN="@firebase/auth-compat",lN="@firebase/database",cN="@firebase/data-connect",uN="@firebase/database-compat",dN="@firebase/functions",hN="@firebase/functions-compat",fN="@firebase/installations",pN="@firebase/installations-compat",mN="@firebase/messaging",gN="@firebase/messaging-compat",yN="@firebase/performance",vN="@firebase/performance-compat",_N="@firebase/remote-config",wN="@firebase/remote-config-compat",xN="@firebase/storage",EN="@firebase/storage-compat",TN="@firebase/firestore",IN="@firebase/vertexai-preview",SN="@firebase/firestore-compat",bN="firebase",kN="10.14.1";/**
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
 */const qh="[DEFAULT]",NN={[Wh]:"fire-core",[tN]:"fire-core-compat",[rN]:"fire-analytics",[nN]:"fire-analytics-compat",[iN]:"fire-app-check",[sN]:"fire-app-check-compat",[oN]:"fire-auth",[aN]:"fire-auth-compat",[lN]:"fire-rtdb",[cN]:"fire-data-connect",[uN]:"fire-rtdb-compat",[dN]:"fire-fn",[hN]:"fire-fn-compat",[fN]:"fire-iid",[pN]:"fire-iid-compat",[mN]:"fire-fcm",[gN]:"fire-fcm-compat",[yN]:"fire-perf",[vN]:"fire-perf-compat",[_N]:"fire-rc",[wN]:"fire-rc-compat",[xN]:"fire-gcs",[EN]:"fire-gcs-compat",[TN]:"fire-fst",[SN]:"fire-fst-compat",[IN]:"fire-vertex","fire-js":"fire-js",[bN]:"fire-js-all"};/**
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
 */const mc=new Map,AN=new Map,Hh=new Map;function Ky(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(Hh.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Hh.set(e,t);for(const n of mc.values())Ky(n,t);for(const n of AN.values())Ky(n,t);return!0}function Wr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
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
 */const CN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new $r("app","Firebase",CN);/**
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
 */class RN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Pi=kN;function Jw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pr.create("bad-app-name",{appName:String(s)});if(n||(n=Gw()),!n)throw Pr.create("no-options");const i=mc.get(s);if(i){if(gs(n,i.options)&&gs(r,i.config))return i;throw Pr.create("duplicate-app",{appName:s})}const o=new Vk(s);for(const c of Hh.values())o.addComponent(c);const l=new RN(n,r,o);return mc.set(s,l),l}function tu(t=qh){const e=mc.get(t);if(!e&&t===qh&&Gw())return Jw();if(!e)throw Pr.create("no-app",{appName:t});return e}function At(t,e,n){var r;let s=(r=NN[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}Gt(new Vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const PN="firebase-heartbeat-database",DN=1,na="firebase-heartbeat-store";let Sd=null;function Xw(){return Sd||(Sd=eu(PN,DN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(na)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Sd}async function jN(t){try{const n=(await Xw()).transaction(na),r=await n.objectStore(na).get(Zw(t));return await n.done,r}catch(e){if(e instanceof an)qn.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function Qy(t,e){try{const r=(await Xw()).transaction(na,"readwrite");await r.objectStore(na).put(e,Zw(t)),await r.done}catch(n){if(n instanceof an)qn.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function Zw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ON=1024,LN=30*24*60*60*1e3;class MN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=LN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yy(),{heartbeatsToSend:r,unsentEntries:s}=VN(this._heartbeatsCache.heartbeats),i=pc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qn.warn(n),""}}}function Yy(){return new Date().toISOString().substring(0,10)}function VN(t,e=ON){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jc()?Xc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jy(t){return pc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function UN(t){Gt(new Vt("platform-logger",e=>new Zk(e),"PRIVATE")),Gt(new Vt("heartbeat",e=>new MN(e),"PRIVATE")),At(Wh,Gy,t),At(Wh,Gy,"esm2017"),At("fire-js","")}UN("");var BN="firebase",zN="10.14.1";/**
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
 */At(BN,zN,"app");function Ep(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ex(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $N=ex,tx=new $r("auth","Firebase",ex());/**
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
 */const gc=new Zc("@firebase/auth");function WN(t,...e){gc.logLevel<=ne.WARN&&gc.warn(`Auth (${Pi}): ${t}`,...e)}function Pl(t,...e){gc.logLevel<=ne.ERROR&&gc.error(`Auth (${Pi}): ${t}`,...e)}/**
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
 */function sn(t,...e){throw Tp(t,...e)}function pn(t,...e){return Tp(t,...e)}function nx(t,e,n){const r=Object.assign(Object.assign({},$N()),{[e]:n});return new $r("auth","Firebase",r).create(e,{appName:t.name})}function Vn(t){return nx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tx.create(t,...e)}function K(t,e,...n){if(!t)throw Tp(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pl(e),new Error(e)}function Hn(t,e){t||Dn(e)}/**
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
 */function Gh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qN(){return Xy()==="http:"||Xy()==="https:"}function Xy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qN()||_p()||"connection"in navigator)?navigator.onLine:!0}function GN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class va{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=vk()||xk()}get(){return HN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ip(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QN=new va(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,s={}){return sx(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ya(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},i);return wk()||(d.referrerPolicy="no-referrer"),rx.fetch()(ix(t,t.config.apiHost,n,l),d)})}async function sx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KN),e);try{const s=new JN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw hl(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw nx(t,f,d);sn(t,f)}}catch(s){if(s instanceof an)throw s;sn(t,"network-request-failed",{message:String(s)})}}async function _a(t,e,n,r,s={}){const i=await Xn(t,e,n,r,s);return"mfaPendingCredential"in i&&sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ix(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ip(t.config,s):`${t.config.apiScheme}://${s}`}function YN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),QN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pn(t,e,r);return s.customData._tokenResponse=n,s}function Zy(t){return t!==void 0&&t.enterprise!==void 0}class XN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZN(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
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
 */async function eA(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function ox(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(t,e=!1){const n=ge(t),r=await n.getIdToken(e),s=Sp(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Po(bd(s.auth_time)),issuedAtTime:Po(bd(s.iat)),expirationTime:Po(bd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bd(t){return Number(t)*1e3}function Sp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pl("JWT malformed, contained fewer than 3 sections"),null;try{const s=qw(n);return s?JSON.parse(s):(Pl("Failed to decode base64 JWT payload"),null)}catch(s){return Pl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function e0(t){const e=Sp(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ra(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&nA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ra(t,ox(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ax(i.providerUserInfo):[],l=iA(t.providerData,o),c=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Kh(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function sA(t){const e=ge(t);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ax(t){return t.map(e=>{var{providerId:n}=e,r=Ep(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function oA(t,e){const n=await sx(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ix(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",rx.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aA(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
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
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):e0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=e0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new si;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function sr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ep(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ra(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await ra(this,eA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(d=n.createdAt)!==null&&d!==void 0?d:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:j,isAnonymous:V,providerData:U,stsTokenManager:b}=n;K(x&&b,e,"internal-error");const v=si.fromJSON(this.name,b);K(typeof x=="string",e,"internal-error"),sr(m,e.name),sr(g,e.name),K(typeof j=="boolean",e,"internal-error"),K(typeof V=="boolean",e,"internal-error"),sr(_,e.name),sr(A,e.name),sr(C,e.name),sr(R,e.name),sr(E,e.name),sr(w,e.name);const T=new jn({uid:x,auth:e,email:g,emailVerified:j,displayName:m,isAnonymous:V,photoURL:A,phoneNumber:_,tenantId:C,stsTokenManager:v,createdAt:E,lastLoginAt:w});return U&&Array.isArray(U)&&(T.providerData=U.map(k=>Object.assign({},k))),R&&(T._redirectEventId=R),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new si;s.updateFromServerResponse(n);const i=new jn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ax(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new si;l.updateFromIdToken(r);const c=new jn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
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
 */const t0=new Map;function On(t){Hn(t instanceof Function,"Expected a class definition");let e=t0.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,t0.set(t,e),e)}/**
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
 */class lx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lx.type="NONE";const n0=lx;/**
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
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Dl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Dl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ii(On(n0),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||On(n0);const o=Dl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const m=jn._fromJSON(e,f);d!==i&&(l=m),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ii(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new ii(i,e,r))}}/**
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
 */function r0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(px(e))return"Blackberry";if(mx(e))return"Webos";if(ux(e))return"Safari";if((e.includes("chrome/")||dx(e))&&!e.includes("edge/"))return"Chrome";if(fx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cx(t=ht()){return/firefox\//i.test(t)}function ux(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dx(t=ht()){return/crios\//i.test(t)}function hx(t=ht()){return/iemobile/i.test(t)}function fx(t=ht()){return/android/i.test(t)}function px(t=ht()){return/blackberry/i.test(t)}function mx(t=ht()){return/webos/i.test(t)}function bp(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lA(t=ht()){var e;return bp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cA(){return Ek()&&document.documentMode===10}function gx(t=ht()){return bp(t)||fx(t)||mx(t)||px(t)||/windows phone/i.test(t)||hx(t)}/**
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
 */function yx(t,e=[]){let n;switch(t){case"Browser":n=r0(ht());break;case"Worker":n=`${r0(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
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
 */class uA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dA(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
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
 */const hA=6;class fA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class pA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new s0(this),this.idTokenSubscription=new s0(this),this.beforeStateQueue=new uA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ox(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(Vn(this));const n=e?ge(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dA(this),n=new fA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $r("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qr(t){return ge(t)}class s0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nk(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(t){nu=t}function vx(t){return nu.loadJS(t)}function gA(){return nu.recaptchaEnterpriseScript}function yA(){return nu.gapiScript}function vA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _A="recaptcha-enterprise",wA="NO_RECAPTCHA";class xA{constructor(e){this.type=_A,this.auth=qr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ZN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new XN(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Zy(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(wA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Zy(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gA();c.length!==0&&(c+=l),vx(c).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function i0(t,e,n,r=!1){const s=new xA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function vc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await i0(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await i0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function EA(t,e){const n=Wr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(gs(i,e??{}))return s;sn(s,"already-initialized")}return n.initialize({options:e})}function TA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IA(t,e,n){const r=qr(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_x(e),{host:o,port:l}=SA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),bA()}function _x(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SA(t){const e=_x(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:o0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:o0(o)}}}function o0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function kA(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NA(t,e){return _a(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function AA(t,e){return Xn(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function CA(t,e){return AA(t,e)}/**
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
 */async function RA(t,e){return _a(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function PA(t,e){return _a(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
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
 */class sa extends kp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vc(e,n,"signInWithPassword",NA);case"emailLink":return RA(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vc(e,r,"signUpPassword",kA);case"emailLink":return PA(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function oi(t,e){return _a(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
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
 */const DA="http://localhost";class ys extends kp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ep(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ys(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
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
 */function jA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(t){const e=yo(vo(t)).link,n=e?yo(vo(e)).deep_link_id:null,r=yo(vo(t)).deep_link_id;return(r?yo(vo(r)).link:null)||r||n||e||t}class Np{constructor(e){var n,r,s,i,o,l;const c=yo(vo(e)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=jA((s=c.mode)!==null&&s!==void 0?s:null);K(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=OA(e);try{return new Np(n)}catch{return null}}}/**
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
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Np.parseLink(n);return K(r,"argument-error"),sa._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wa extends wx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dr extends wa{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
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
 */class hr extends wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
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
 */class fr extends wa{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class pr extends wa{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */async function LA(t,e){return _a(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
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
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jn._fromIdTokenResponse(e,r,s),o=a0(r);return new vs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=a0(r);return new vs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function a0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _c extends an{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _c(e,n,r,s)}}function xx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(t,i,e,r):i})}async function MA(t,e,n=!1){const r=await ra(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
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
 */async function VA(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(Vn(r));const s="reauthenticate";try{const i=await ra(t,xx(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Sp(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),vs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),i}}/**
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
 */async function Ex(t,e,n=!1){if(dn(t.app))return Promise.reject(Vn(t));const r="signIn",s=await xx(t,r,e),i=await vs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function FA(t,e){return Ex(qr(t),e)}/**
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
 */async function Tx(t){const e=qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UA(t,e,n){const r=qr(t);await vc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",CA)}async function Ix(t,e,n){if(dn(t.app))return Promise.reject(Vn(t));const r=qr(t),o=await vc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Tx(t),c}),l=await vs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function BA(t,e,n){return dn(t.app)?Promise.reject(Vn(t)):FA(ge(t),Di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tx(t),r})}function zA(t,e,n,r){return ge(t).onIdTokenChanged(e,n,r)}function $A(t,e,n){return ge(t).beforeAuthStateChanged(e,n)}function WA(t,e,n,r){return ge(t).onAuthStateChanged(e,n,r)}function qA(t){return ge(t).signOut()}const wc="__sak";/**
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
 */class Sx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HA=1e3,GA=10;class bx extends Sx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bx.type="LOCAL";const KA=bx;/**
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
 */class kx extends Sx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kx.type="SESSION";const Nx=kx;/**
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
 */function QA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),c=await QA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ru.receivers=[];/**
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
 */function Ap(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class YA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const d=Ap("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function JA(t){mn().location.href=t}/**
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
 */function Ax(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function XA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eC(){return Ax()?self:null}/**
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
 */const Cx="firebaseLocalStorageDb",tC=1,xc="firebaseLocalStorage",Rx="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function su(t,e){return t.transaction([xc],e?"readwrite":"readonly").objectStore(xc)}function nC(){const t=indexedDB.deleteDatabase(Cx);return new xa(t).toPromise()}function Qh(){const t=indexedDB.open(Cx,tC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xc,{keyPath:Rx})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xc)?e(r):(r.close(),await nC(),e(await Qh()))})})}async function l0(t,e,n){const r=su(t,!0).put({[Rx]:e,value:n});return new xa(r).toPromise()}async function rC(t,e){const n=su(t,!1).get(e),r=await new xa(n).toPromise();return r===void 0?null:r.value}function c0(t,e){const n=su(t,!0).delete(e);return new xa(n).toPromise()}const sC=800,iC=3;class Px{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ax()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ru._getInstance(eC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XA(),!this.activeServiceWorker)return;this.sender=new YA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qh();return await l0(e,wc,"1"),await c0(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>l0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>c0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=su(s,!1).getAll();return new xa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Px.type="LOCAL";const oC=Px;new va(3e4,6e4);/**
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
 */function aC(t,e){return e?On(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cp extends kp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lC(t){return Ex(t.auth,new Cp(t),t.bypassAuthState)}function cC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),VA(n,new Cp(t),t.bypassAuthState)}async function uC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),MA(n,new Cp(t),t.bypassAuthState)}/**
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
 */class Dx{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lC;case"linkViaPopup":case"linkViaRedirect":return uC;case"reauthViaPopup":case"reauthViaRedirect":return cC;default:sn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dC=new va(2e3,1e4);class Js extends Dx{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Js.currentPopupAction&&Js.currentPopupAction.cancel(),Js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Ap();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dC.get())};e()}}Js.currentPopupAction=null;/**
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
 */const hC="pendingRedirect",jl=new Map;class fC extends Dx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jl.get(this.auth._key());if(!e){try{const r=await pC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jl.set(this.auth._key(),e)}return this.bypassAuthState||jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pC(t,e){const n=yC(e),r=gC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mC(t,e){jl.set(t._key(),e)}function gC(t){return On(t._redirectPersistence)}function yC(t){return Dl(hC,t.config.apiKey,t.name)}async function vC(t,e,n=!1){if(dn(t.app))return Promise.reject(Vn(t));const r=qr(t),s=aC(r,e),o=await new fC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _C=10*60*1e3;class wC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jx(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_C&&this.cachedEventUids.clear(),this.cachedEventUids.has(u0(e))}saveEventToCache(e){this.cachedEventUids.add(u0(e)),this.lastProcessedEventTime=Date.now()}}function u0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jx(t);default:return!1}}/**
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
 */async function EC(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
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
 */const TC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IC=/^https?/;async function SC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EC(t);for(const n of e)try{if(bC(n))return}catch{}sn(t,"unauthorized-domain")}function bC(t){const e=Gh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IC.test(n))return!1;if(TC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const kC=new va(3e4,6e4);function d0(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NC(t){return new Promise((e,n)=>{var r,s,i;function o(){d0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{d0(),n(pn(t,"network-request-failed"))},timeout:kC.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const l=vA("iframefcb");return mn()[l]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},vx(`${yA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ol=null,e})}let Ol=null;function AC(t){return Ol=Ol||NC(t),Ol}/**
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
 */const CC=new va(5e3,15e3),RC="__/auth/iframe",PC="emulator/auth/iframe",DC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OC(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ip(e,PC):`https://${t.config.authDomain}/${RC}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},s=jC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ya(r).slice(1)}`}async function LC(t){const e=await AC(t),n=mn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:OC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),l=mn().setTimeout(()=>{i(o)},CC.get());function c(){mn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const MC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VC=500,FC=600,UC="_blank",BC="http://localhost";class h0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zC(t,e,n,r=VC,s=FC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},MC),{width:r.toString(),height:s.toString(),top:i,left:o}),d=ht().toLowerCase();n&&(l=dx(d)?UC:n),cx(d)&&(e=e||BC,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,A])=>`${g}${_}=${A},`,"");if(lA(d)&&l!=="_self")return $C(e||"",l),new h0(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new h0(m)}function $C(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const WC="__/auth/handler",qC="emulator/auth/handler",HC=encodeURIComponent("fac");async function f0(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:s};if(e instanceof wx){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof wa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),d=c?`#${HC}=${encodeURIComponent(c)}`:"";return`${GC(t)}?${ya(l).slice(1)}${d}`}function GC({config:t}){return t.emulator?Ip(t,qC):`https://${t.authDomain}/${WC}`}/**
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
 */const kd="webStorageSupport";class KC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nx,this._completeRedirectFn=vC,this._overrideRedirectResult=mC}async _openPopup(e,n,r,s){var i;Hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await f0(e,n,r,Gh(),s);return zC(e,o,Ap())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await f0(e,n,r,Gh(),s);return JA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LC(e),r=new wC(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kd,{type:kd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kd];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gx()||ux()||bp()}}const QC=KC;var p0="@firebase/auth",m0="1.7.9";/**
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
 */class YC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XC(t){Gt(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yx(t)},d=new pA(r,s,i,c);return TA(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gt(new Vt("auth-internal",e=>{const n=qr(e.getProvider("auth").getImmediate());return(r=>new YC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(p0,m0,JC(t)),At(p0,m0,"esm2017")}/**
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
 */const ZC=5*60,eR=Kw("authIdTokenMaxAge")||ZC;let g0=null;const tR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eR)return;const s=n==null?void 0:n.token;g0!==s&&(g0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nR(t=tu()){const e=Wr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EA(t,{popupRedirectResolver:QC,persistence:[oC,KA,Nx]}),r=Kw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tR(i.toString());$A(n,o,()=>o(n.currentUser)),zA(n,l=>o(l))}}const s=Hw("auth");return s&&IA(n,`http://${s}`),n}function rR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XC("Browser");var y0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,Ox;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function T(){}T.prototype=v.prototype,b.D=v.prototype,b.prototype=new T,b.prototype.constructor=b,b.C=function(k,N,S){for(var I=Array(arguments.length-2),de=2;de<arguments.length;de++)I[de-2]=arguments[de];return v.prototype[N].apply(k,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,T){T||(T=0);var k=Array(16);if(typeof v=="string")for(var N=0;16>N;++N)k[N]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(N=0;16>N;++N)k[N]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=b.g[0],T=b.g[1],N=b.g[2];var S=b.g[3],I=v+(S^T&(N^S))+k[0]+3614090360&4294967295;v=T+(I<<7&4294967295|I>>>25),I=S+(N^v&(T^N))+k[1]+3905402710&4294967295,S=v+(I<<12&4294967295|I>>>20),I=N+(T^S&(v^T))+k[2]+606105819&4294967295,N=S+(I<<17&4294967295|I>>>15),I=T+(v^N&(S^v))+k[3]+3250441966&4294967295,T=N+(I<<22&4294967295|I>>>10),I=v+(S^T&(N^S))+k[4]+4118548399&4294967295,v=T+(I<<7&4294967295|I>>>25),I=S+(N^v&(T^N))+k[5]+1200080426&4294967295,S=v+(I<<12&4294967295|I>>>20),I=N+(T^S&(v^T))+k[6]+2821735955&4294967295,N=S+(I<<17&4294967295|I>>>15),I=T+(v^N&(S^v))+k[7]+4249261313&4294967295,T=N+(I<<22&4294967295|I>>>10),I=v+(S^T&(N^S))+k[8]+1770035416&4294967295,v=T+(I<<7&4294967295|I>>>25),I=S+(N^v&(T^N))+k[9]+2336552879&4294967295,S=v+(I<<12&4294967295|I>>>20),I=N+(T^S&(v^T))+k[10]+4294925233&4294967295,N=S+(I<<17&4294967295|I>>>15),I=T+(v^N&(S^v))+k[11]+2304563134&4294967295,T=N+(I<<22&4294967295|I>>>10),I=v+(S^T&(N^S))+k[12]+1804603682&4294967295,v=T+(I<<7&4294967295|I>>>25),I=S+(N^v&(T^N))+k[13]+4254626195&4294967295,S=v+(I<<12&4294967295|I>>>20),I=N+(T^S&(v^T))+k[14]+2792965006&4294967295,N=S+(I<<17&4294967295|I>>>15),I=T+(v^N&(S^v))+k[15]+1236535329&4294967295,T=N+(I<<22&4294967295|I>>>10),I=v+(N^S&(T^N))+k[1]+4129170786&4294967295,v=T+(I<<5&4294967295|I>>>27),I=S+(T^N&(v^T))+k[6]+3225465664&4294967295,S=v+(I<<9&4294967295|I>>>23),I=N+(v^T&(S^v))+k[11]+643717713&4294967295,N=S+(I<<14&4294967295|I>>>18),I=T+(S^v&(N^S))+k[0]+3921069994&4294967295,T=N+(I<<20&4294967295|I>>>12),I=v+(N^S&(T^N))+k[5]+3593408605&4294967295,v=T+(I<<5&4294967295|I>>>27),I=S+(T^N&(v^T))+k[10]+38016083&4294967295,S=v+(I<<9&4294967295|I>>>23),I=N+(v^T&(S^v))+k[15]+3634488961&4294967295,N=S+(I<<14&4294967295|I>>>18),I=T+(S^v&(N^S))+k[4]+3889429448&4294967295,T=N+(I<<20&4294967295|I>>>12),I=v+(N^S&(T^N))+k[9]+568446438&4294967295,v=T+(I<<5&4294967295|I>>>27),I=S+(T^N&(v^T))+k[14]+3275163606&4294967295,S=v+(I<<9&4294967295|I>>>23),I=N+(v^T&(S^v))+k[3]+4107603335&4294967295,N=S+(I<<14&4294967295|I>>>18),I=T+(S^v&(N^S))+k[8]+1163531501&4294967295,T=N+(I<<20&4294967295|I>>>12),I=v+(N^S&(T^N))+k[13]+2850285829&4294967295,v=T+(I<<5&4294967295|I>>>27),I=S+(T^N&(v^T))+k[2]+4243563512&4294967295,S=v+(I<<9&4294967295|I>>>23),I=N+(v^T&(S^v))+k[7]+1735328473&4294967295,N=S+(I<<14&4294967295|I>>>18),I=T+(S^v&(N^S))+k[12]+2368359562&4294967295,T=N+(I<<20&4294967295|I>>>12),I=v+(T^N^S)+k[5]+4294588738&4294967295,v=T+(I<<4&4294967295|I>>>28),I=S+(v^T^N)+k[8]+2272392833&4294967295,S=v+(I<<11&4294967295|I>>>21),I=N+(S^v^T)+k[11]+1839030562&4294967295,N=S+(I<<16&4294967295|I>>>16),I=T+(N^S^v)+k[14]+4259657740&4294967295,T=N+(I<<23&4294967295|I>>>9),I=v+(T^N^S)+k[1]+2763975236&4294967295,v=T+(I<<4&4294967295|I>>>28),I=S+(v^T^N)+k[4]+1272893353&4294967295,S=v+(I<<11&4294967295|I>>>21),I=N+(S^v^T)+k[7]+4139469664&4294967295,N=S+(I<<16&4294967295|I>>>16),I=T+(N^S^v)+k[10]+3200236656&4294967295,T=N+(I<<23&4294967295|I>>>9),I=v+(T^N^S)+k[13]+681279174&4294967295,v=T+(I<<4&4294967295|I>>>28),I=S+(v^T^N)+k[0]+3936430074&4294967295,S=v+(I<<11&4294967295|I>>>21),I=N+(S^v^T)+k[3]+3572445317&4294967295,N=S+(I<<16&4294967295|I>>>16),I=T+(N^S^v)+k[6]+76029189&4294967295,T=N+(I<<23&4294967295|I>>>9),I=v+(T^N^S)+k[9]+3654602809&4294967295,v=T+(I<<4&4294967295|I>>>28),I=S+(v^T^N)+k[12]+3873151461&4294967295,S=v+(I<<11&4294967295|I>>>21),I=N+(S^v^T)+k[15]+530742520&4294967295,N=S+(I<<16&4294967295|I>>>16),I=T+(N^S^v)+k[2]+3299628645&4294967295,T=N+(I<<23&4294967295|I>>>9),I=v+(N^(T|~S))+k[0]+4096336452&4294967295,v=T+(I<<6&4294967295|I>>>26),I=S+(T^(v|~N))+k[7]+1126891415&4294967295,S=v+(I<<10&4294967295|I>>>22),I=N+(v^(S|~T))+k[14]+2878612391&4294967295,N=S+(I<<15&4294967295|I>>>17),I=T+(S^(N|~v))+k[5]+4237533241&4294967295,T=N+(I<<21&4294967295|I>>>11),I=v+(N^(T|~S))+k[12]+1700485571&4294967295,v=T+(I<<6&4294967295|I>>>26),I=S+(T^(v|~N))+k[3]+2399980690&4294967295,S=v+(I<<10&4294967295|I>>>22),I=N+(v^(S|~T))+k[10]+4293915773&4294967295,N=S+(I<<15&4294967295|I>>>17),I=T+(S^(N|~v))+k[1]+2240044497&4294967295,T=N+(I<<21&4294967295|I>>>11),I=v+(N^(T|~S))+k[8]+1873313359&4294967295,v=T+(I<<6&4294967295|I>>>26),I=S+(T^(v|~N))+k[15]+4264355552&4294967295,S=v+(I<<10&4294967295|I>>>22),I=N+(v^(S|~T))+k[6]+2734768916&4294967295,N=S+(I<<15&4294967295|I>>>17),I=T+(S^(N|~v))+k[13]+1309151649&4294967295,T=N+(I<<21&4294967295|I>>>11),I=v+(N^(T|~S))+k[4]+4149444226&4294967295,v=T+(I<<6&4294967295|I>>>26),I=S+(T^(v|~N))+k[11]+3174756917&4294967295,S=v+(I<<10&4294967295|I>>>22),I=N+(v^(S|~T))+k[2]+718787259&4294967295,N=S+(I<<15&4294967295|I>>>17),I=T+(S^(N|~v))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+N&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var T=v-this.blockSize,k=this.B,N=this.h,S=0;S<v;){if(N==0)for(;S<=T;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<v;)if(k[N++]=b.charCodeAt(S++),N==this.blockSize){s(this,k),N=0;break}}else for(;S<v;)if(k[N++]=b[S++],N==this.blockSize){s(this,k),N=0;break}}this.h=N,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var T=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=T&255,T/=256;for(this.u(b),b=Array(16),v=T=0;4>v;++v)for(var k=0;32>k;k+=8)b[T++]=this.g[v]>>>k&255;return b};function i(b,v){var T=l;return Object.prototype.hasOwnProperty.call(T,b)?T[b]:T[b]=v(b)}function o(b,v){this.h=v;for(var T=[],k=!0,N=b.length-1;0<=N;N--){var S=b[N]|0;k&&S==v||(T[N]=S,k=!1)}this.g=T}var l={};function c(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return R(d(-b));for(var v=[],T=1,k=0;b>=T;k++)v[k]=b/T|0,T*=4294967296;return new o(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return R(f(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=d(Math.pow(v,8)),k=m,N=0;N<b.length;N+=8){var S=Math.min(8,b.length-N),I=parseInt(b.substring(N,N+S),v);8>S?(S=d(Math.pow(v,S)),k=k.j(S).add(d(I))):(k=k.j(T),k=k.add(d(I)))}return k}var m=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-R(this).m();for(var b=0,v=1,T=0;T<this.g.length;T++){var k=this.i(T);b+=(0<=k?k:4294967296+k)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(C(this))return"-"+R(this).toString(b);for(var v=d(Math.pow(b,6)),T=this,k="";;){var N=j(T,v).g;T=E(T,N.j(v));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(b);if(T=N,A(T))return S+k;for(;6>S.length;)S="0"+S;k=S+k}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function C(b){return b.h==-1}t.l=function(b){return b=E(this,b),C(b)?-1:A(b)?0:1};function R(b){for(var v=b.g.length,T=[],k=0;k<v;k++)T[k]=~b.g[k];return new o(T,~b.h).add(g)}t.abs=function(){return C(this)?R(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),T=[],k=0,N=0;N<=v;N++){var S=k+(this.i(N)&65535)+(b.i(N)&65535),I=(S>>>16)+(this.i(N)>>>16)+(b.i(N)>>>16);k=I>>>16,S&=65535,I&=65535,T[N]=I<<16|S}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(b,v){return b.add(R(v))}t.j=function(b){if(A(this)||A(b))return m;if(C(this))return C(b)?R(this).j(R(b)):R(R(this).j(b));if(C(b))return R(this.j(R(b)));if(0>this.l(_)&&0>b.l(_))return d(this.m()*b.m());for(var v=this.g.length+b.g.length,T=[],k=0;k<2*v;k++)T[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<b.g.length;N++){var S=this.i(k)>>>16,I=this.i(k)&65535,de=b.i(N)>>>16,Ve=b.i(N)&65535;T[2*k+2*N]+=I*Ve,w(T,2*k+2*N),T[2*k+2*N+1]+=S*Ve,w(T,2*k+2*N+1),T[2*k+2*N+1]+=I*de,w(T,2*k+2*N+1),T[2*k+2*N+2]+=S*de,w(T,2*k+2*N+2)}for(k=0;k<v;k++)T[k]=T[2*k+1]<<16|T[2*k];for(k=v;k<2*v;k++)T[k]=0;return new o(T,0)};function w(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function x(b,v){this.g=b,this.h=v}function j(b,v){if(A(v))throw Error("division by zero");if(A(b))return new x(m,m);if(C(b))return v=j(R(b),v),new x(R(v.g),R(v.h));if(C(v))return v=j(b,R(v)),new x(R(v.g),v.h);if(30<b.g.length){if(C(b)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,k=v;0>=k.l(b);)T=V(T),k=V(k);var N=U(T,1),S=U(k,1);for(k=U(k,2),T=U(T,2);!A(k);){var I=S.add(k);0>=I.l(b)&&(N=N.add(T),S=I),k=U(k,1),T=U(T,1)}return v=E(b,N.j(v)),new x(N,v)}for(N=m;0<=b.l(v);){for(T=Math.max(1,Math.floor(b.m()/v.m())),k=Math.ceil(Math.log(T)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),S=d(T),I=S.j(v);C(I)||0<I.l(b);)T-=k,S=d(T),I=S.j(v);A(S)&&(S=g),N=N.add(S),b=E(b,I)}return new x(N,b)}t.A=function(b){return j(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),T=[],k=0;k<v;k++)T[k]=this.i(k)&b.i(k);return new o(T,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),T=[],k=0;k<v;k++)T[k]=this.i(k)|b.i(k);return new o(T,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),T=[],k=0;k<v;k++)T[k]=this.i(k)^b.i(k);return new o(T,this.h^b.h)};function V(b){for(var v=b.g.length+1,T=[],k=0;k<v;k++)T[k]=b.i(k)<<1|b.i(k-1)>>>31;return new o(T,b.h)}function U(b,v){var T=v>>5;v%=32;for(var k=b.g.length-T,N=[],S=0;S<k;S++)N[S]=0<v?b.i(S+T)>>>v|b.i(S+T+1)<<32-v:b.i(S+T);return new o(N,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ox=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,cs=o}).apply(typeof y0<"u"?y0:typeof self<"u"?self:typeof window<"u"?window:{});var fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lx,_o,Mx,Ll,Yh,Vx,Fx,Ux;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fl=="object"&&fl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in p))break e;p=p[P]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,y=!1,P={next:function(){if(!y&&p<a.length){var O=p++;return{value:h(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function m(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function _(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function A(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,P,O){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return h.prototype[P].apply(y,B)}}function C(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function R(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(c(y)){const P=a.length||0,O=y.length||0;a.length=P+O;for(let B=0;B<O;B++)a[P+B]=y[B]}else a.push(y)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var V=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function U(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function b(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,h){let p,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(p in y)a[p]=y[p];for(let O=0;O<T.length;O++)p=T[O],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function N(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function S(a){l.setTimeout(()=>{throw a},0)}function I(){var a=G;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class de{constructor(){this.h=this.g=null}add(h,p){const y=Ve.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Ve=new E(()=>new ft,a=>a.reset());class ft{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,z=!1,G=new de,Y=()=>{const a=l.Promise.resolve(void 0);Fe=()=>{a.then(se)}};var se=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(p){S(p)}var h=Ve;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var wn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function xn(a,h){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{j(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:En[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&xn.aa.h.call(this)}}A(xn,Ae);var En={2:"touch",3:"pen",4:"mouse"};xn.prototype.h=function(){xn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),X1=0;function Z1(a,h,p,y,P){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=P,this.key=++X1,this.da=this.fa=!1}function Ra(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pa(a){this.src=a,this.g={},this.h=0}Pa.prototype.add=function(a,h,p,y,P){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=Su(a,h,y,P);return-1<B?(h=a[B],p||(h.fa=!1)):(h=new Z1(h,this.src,O,!!y,P),h.fa=p,a.push(h)),h};function Iu(a,h){var p=h.type;if(p in a.g){var y=a.g[p],P=Array.prototype.indexOf.call(y,h,void 0),O;(O=0<=P)&&Array.prototype.splice.call(y,P,1),O&&(Ra(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Su(a,h,p,y){for(var P=0;P<a.length;++P){var O=a[P];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==y)return P}return-1}var bu="closure_lm_"+(1e6*Math.random()|0),ku={};function Sm(a,h,p,y,P){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Sm(a,h[O],p,y,P);return null}return p=Nm(p),a&&a[Tn]?a.K(h,p,d(y)?!!y.capture:!!y,P):eT(a,h,p,!1,y,P)}function eT(a,h,p,y,P,O){if(!h)throw Error("Invalid event type");var B=d(P)?!!P.capture:!!P,pe=Au(a);if(pe||(a[bu]=pe=new Pa(a)),p=pe.add(h,p,y,B,O),p.proxy)return p;if(y=tT(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)wn||(P=B),P===void 0&&(P=!1),a.addEventListener(h.toString(),y,P);else if(a.attachEvent)a.attachEvent(km(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function tT(){function a(p){return h.call(a.src,a.listener,p)}const h=nT;return a}function bm(a,h,p,y,P){if(Array.isArray(h))for(var O=0;O<h.length;O++)bm(a,h[O],p,y,P);else y=d(y)?!!y.capture:!!y,p=Nm(p),a&&a[Tn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],p=Su(O,p,y,P),-1<p&&(Ra(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Au(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Su(h,p,y,P)),(p=-1<a?h[a]:null)&&Nu(p))}function Nu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Tn])Iu(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(km(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Au(h))?(Iu(p,a),p.h==0&&(p.src=null,h[bu]=null)):Ra(a)}}}function km(a){return a in ku?ku[a]:ku[a]="on"+a}function nT(a,h){if(a.da)a=!0;else{h=new xn(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&Nu(a),a=p.call(y,h)}return a}function Au(a){return a=a[bu],a instanceof Pa?a:null}var Cu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nm(a){return typeof a=="function"?a:(a[Cu]||(a[Cu]=function(h){return a.handleEvent(h)}),a[Cu])}function Ze(){fe.call(this),this.i=new Pa(this),this.M=this,this.F=null}A(Ze,fe),Ze.prototype[Tn]=!0,Ze.prototype.removeEventListener=function(a,h,p,y){bm(this,a,h,p,y)};function pt(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Ae(h,a);else if(h instanceof Ae)h.target=h.target||a;else{var P=h;h=new Ae(y,a),k(h,P)}if(P=!0,p)for(var O=p.length-1;0<=O;O--){var B=h.g=p[O];P=Da(B,y,!0,h)&&P}if(B=h.g=a,P=Da(B,y,!0,h)&&P,P=Da(B,y,!1,h)&&P,p)for(O=0;O<p.length;O++)B=h.g=p[O],P=Da(B,y,!1,h)&&P}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)Ra(p[y]);delete a.g[h],a.h--}}this.F=null},Ze.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},Ze.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function Da(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,O=0;O<h.length;++O){var B=h[O];if(B&&!B.da&&B.capture==p){var pe=B.listener,We=B.ha||B.src;B.fa&&Iu(a.i,B),P=pe.call(We,y)!==!1&&P}}return P&&!y.defaultPrevented}function Am(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Cm(a){a.g=Am(()=>{a.g=null,a.i&&(a.i=!1,Cm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class rT extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Cm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(a){fe.call(this),this.h=a,this.g={}}A(zi,fe);var Rm=[];function Pm(a){U(a.g,function(h,p){this.g.hasOwnProperty(p)&&Nu(h)},a),a.g={}}zi.prototype.N=function(){zi.aa.N.call(this),Pm(this)},zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ru=l.JSON.stringify,sT=l.JSON.parse,iT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Pu(){}Pu.prototype.h=null;function Dm(a){return a.h||(a.h=a.i())}function jm(){}var $i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Du(){Ae.call(this,"d")}A(Du,Ae);function ju(){Ae.call(this,"c")}A(ju,Ae);var Gr={},Om=null;function ja(){return Om=Om||new Ze}Gr.La="serverreachability";function Lm(a){Ae.call(this,Gr.La,a)}A(Lm,Ae);function Wi(a){const h=ja();pt(h,new Lm(h))}Gr.STAT_EVENT="statevent";function Mm(a,h){Ae.call(this,Gr.STAT_EVENT,a),this.stat=h}A(Mm,Ae);function mt(a){const h=ja();pt(h,new Mm(h,a))}Gr.Ma="timingevent";function Vm(a,h){Ae.call(this,Gr.Ma,a),this.size=h}A(Vm,Ae);function qi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function oT(a,h,p,y,P,O){a.info(function(){if(a.g)if(O)for(var B="",pe=O.split("&"),We=0;We<pe.length;We++){var ae=pe[We].split("=");if(1<ae.length){var et=ae[0];ae=ae[1];var tt=et.split("_");B=2<=tt.length&&tt[1]=="type"?B+(et+"="+ae+"&"):B+(et+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+h+`
`+p+`
`+B})}function aT(a,h,p,y,P,O,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+h+`
`+p+`
`+O+" "+B})}function As(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+cT(a,p)+(y?" "+y:"")})}function lT(a,h){a.info(function(){return"TIMEOUT: "+h})}Hi.prototype.info=function(){};function cT(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<P.length;B++)P[B]=""}}}}return Ru(p)}catch{return h}}var Oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ou;function La(){}A(La,Pu),La.prototype.g=function(){return new XMLHttpRequest},La.prototype.i=function(){return{}},Ou=new La;function er(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Um}function Um(){this.i=null,this.g="",this.h=!1}var Bm={},Lu={};function Mu(a,h,p){a.L=1,a.v=Ua(In(h)),a.m=p,a.P=!0,zm(a,null)}function zm(a,h){a.F=Date.now(),Ma(a),a.A=In(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),ng(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Um,a.g=wg(a.j,p?h:null,!a.m),0<a.O&&(a.M=new rT(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Rm[0]=P.toString()),P=Rm);for(var O=0;O<P.length;O++){var B=Sm(p,P[O],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Wi(),oT(a.i,a.u,a.A,a.l,a.R,a.m)}er.prototype.ca=function(a){a=a.target;const h=this.M;h&&Sn(a)==3?h.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const tt=Sn(this.g);var h=this.g.Ba();const Ps=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||cg(this.g)))){this.J||tt!=4||h==7||(h==8||0>=Ps?Wi(3):Wi(2)),Vu(this);var p=this.g.Z();this.X=p;t:if($m(this)){var y=cg(this.g);a="";var P=y.length,O=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),Gi(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(O&&h==P-1)});y.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,aT(this.i,this.u,this.A,this.l,this.R,tt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,We=this.g;if((pe=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(pe)){var ae=pe;break t}}ae=null}if(p=ae)As(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fu(this,p);else{this.o=!1,this.s=3,mt(12),Kr(this),Gi(this);break e}}if(this.P){p=!0;let Qt;for(;!this.J&&this.C<B.length;)if(Qt=uT(this,B),Qt==Lu){tt==4&&(this.s=4,mt(14),p=!1),As(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==Bm){this.s=4,mt(15),As(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else As(this.i,this.l,Qt,null),Fu(this,Qt);if($m(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||B.length!=0||this.h.h||(this.s=1,mt(16),p=!1),this.o=this.o&&p,!p)As(this.i,this.l,B,"[Invalid Chunked Response]"),Kr(this),Gi(this);else if(0<B.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),qu(et),et.M=!0,mt(11))}}else As(this.i,this.l,B,null),Fu(this,B);tt==4&&Kr(this),this.o&&!this.J&&(tt==4?gg(this.j,this):(this.o=!1,Ma(this)))}else kT(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Kr(this),Gi(this)}}}catch{}finally{}};function $m(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uT(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Lu:(p=Number(h.substring(p,y)),isNaN(p)?Bm:(y+=1,y+p>h.length?Lu:(h=h.slice(y,y+p),a.C=y+p,h)))}er.prototype.cancel=function(){this.J=!0,Kr(this)};function Ma(a){a.S=Date.now()+a.I,Wm(a,a.I)}function Wm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qi(g(a.ba,a),h)}function Vu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}er.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(lT(this.i,this.A),this.L!=2&&(Wi(),mt(17)),Kr(this),this.s=2,Gi(this)):Wm(this,this.S-a)};function Gi(a){a.j.G==0||a.J||gg(a.j,a)}function Kr(a){Vu(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Pm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Fu(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Uu(p.h,a))){if(!a.K&&Uu(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ha(p),Wa(p);else break e;Wu(p),mt(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=qi(g(p.Za,p),6e3));if(1>=Gm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yr(p,11)}else if((a.K||p.g==a)&&Ha(p),!w(h))for(P=p.Da.g.parse(h),h=0;h<P.length;h++){let ae=P[h];if(p.T=ae[0],ae=ae[1],p.G==2)if(ae[0]=="c"){p.K=ae[1],p.ia=ae[2];const et=ae[3];et!=null&&(p.la=et,p.j.info("VER="+p.la));const tt=ae[4];tt!=null&&(p.Aa=tt,p.j.info("SVER="+p.Aa));const Ps=ae[5];Ps!=null&&typeof Ps=="number"&&0<Ps&&(y=1.5*Ps,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Qt=a.g;if(Qt){const Ka=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ka){var O=y.h;O.g||Ka.indexOf("spdy")==-1&&Ka.indexOf("quic")==-1&&Ka.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Bu(O,O.h),O.h=null))}if(y.D){const Hu=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Hu&&(y.ya=Hu,ye(y.I,y.D,Hu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var B=a;if(y.qa=_g(y,y.J?y.ia:null,y.W),B.K){Km(y.h,B);var pe=B,We=y.L;We&&(pe.I=We),pe.B&&(Vu(pe),Ma(pe)),y.g=B}else pg(y);0<p.i.length&&qa(p)}else ae[0]!="stop"&&ae[0]!="close"||Yr(p,7);else p.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Yr(p,7):$u(p):ae[0]!="noop"&&p.l&&p.l.ta(ae),p.v=0)}}Wi(4)}catch{}}var dT=class{constructor(a,h){this.g=a,this.map=h}};function qm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gm(a){return a.h?1:a.g?a.g.size:0}function Uu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Bu(a,h){a.g?a.g.add(h):a.h=h}function Km(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}qm.prototype.cancel=function(){if(this.i=Qm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return C(a.i)}function hT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function fT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function Ym(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=fT(a),y=hT(a),P=y.length,O=0;O<P;O++)h.call(void 0,y[O],p&&p[O],a)}var Jm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pT(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),P=null;if(0<=y){var O=a[p].substring(0,y);P=a[p].substring(y+1)}else O=a[p];h(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qr){this.h=a.h,Va(this,a.j),this.o=a.o,this.g=a.g,Fa(this,a.s),this.l=a.l;var h=a.i,p=new Yi;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Xm(this,p),this.m=a.m}else a&&(h=String(a).match(Jm))?(this.h=!1,Va(this,h[1]||"",!0),this.o=Ki(h[2]||""),this.g=Ki(h[3]||"",!0),Fa(this,h[4]),this.l=Ki(h[5]||"",!0),Xm(this,h[6]||"",!0),this.m=Ki(h[7]||"")):(this.h=!1,this.i=new Yi(null,this.h))}Qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Qi(h,Zm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qi(h,Zm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Qi(p,p.charAt(0)=="/"?yT:gT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Qi(p,_T)),a.join("")};function In(a){return new Qr(a)}function Va(a,h,p){a.j=p?Ki(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Xm(a,h,p){h instanceof Yi?(a.i=h,wT(a.i,a.h)):(p||(h=Qi(h,vT)),a.i=new Yi(h,a.h))}function ye(a,h,p){a.i.set(h,p)}function Ua(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ki(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,mT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function mT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zm=/[#\/\?@]/g,gT=/[#\?:]/g,yT=/[#\?]/g,vT=/[#\?@]/g,_T=/#/g;function Yi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&pT(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Yi.prototype,t.add=function(a,h){tr(this),this.i=null,a=Cs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function eg(a,h){tr(a),h=Cs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function tg(a,h){return tr(a),h=Cs(a,h),a.g.has(h)}t.forEach=function(a,h){tr(this),this.g.forEach(function(p,y){p.forEach(function(P){a.call(h,P,y,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const P=a[y];for(let O=0;O<P.length;O++)p.push(h[y])}return p},t.V=function(a){tr(this);let h=[];if(typeof a=="string")tg(this,a)&&(h=h.concat(this.g.get(Cs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return tr(this),this.i=null,a=Cs(this,a),tg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function ng(a,h,p){eg(a,h),0<p.length&&(a.i=null,a.g.set(Cs(a,h),C(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const O=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var P=O;B[y]!==""&&(P+="="+encodeURIComponent(String(B[y]))),a.push(P)}}return this.i=a.join("&")};function Cs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function wT(a,h){h&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(p,y){var P=y.toLowerCase();y!=P&&(eg(this,y),ng(this,P,p))},a)),a.j=h}function xT(a,h){const p=new Hi;if(l.Image){const y=new Image;y.onload=_(nr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=_(nr,p,"TestLoadImage: error",!1,h,y),y.onabort=_(nr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=_(nr,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function ET(a,h){const p=new Hi,y=new AbortController,P=setTimeout(()=>{y.abort(),nr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(P),O.ok?nr(p,"TestPingServer: ok",!0,h):nr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),nr(p,"TestPingServer: error",!1,h)})}function nr(a,h,p,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(p)}catch{}}function TT(){this.g=new iT}function IT(a,h,p){const y=p||"";try{Ym(a,function(P,O){let B=P;d(P)&&(B=Ru(P)),h.push(y+O+"="+encodeURIComponent(B))})}catch(P){throw h.push(y+"type="+encodeURIComponent("_badmap")),P}}function Ba(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Ba,Pu),Ba.prototype.g=function(){return new za(this.l,this.j)},Ba.prototype.i=function(a){return function(){return a}}({});function za(a,h){Ze.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(za,Ze),t=za.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Xi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function rg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ji(this):Xi(this),this.readyState==3&&rg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ji(this))},t.Qa=function(a){this.g&&(this.response=a,Ji(this))},t.ga=function(){this.g&&Ji(this)};function Ji(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Xi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sg(a){let h="";return U(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function zu(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=sg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ye(a,h,p))}function ke(a){Ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(ke,Ze);var ST=/^https?$/i,bT=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ou.g(),this.v=this.o?Dm(this.o):Dm(Ou),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){ig(this,O);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)p.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())p.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(bT,h,void 0))||y||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of p)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){ig(this,O)}};function ig(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,og(a),$a(a)}function og(a){a.A||(a.A=!0,pt(a,"complete"),pt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pt(this,"complete"),pt(this,"abort"),$a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$a(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ag(this):this.bb())},t.bb=function(){ag(this)};function ag(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)Am(a.Ea,0,a);else if(pt(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=B===0){var P=String(a.D).match(Jm)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!ST.test(P?P.toLowerCase():"")}p=y}if(p)pt(a,"complete"),pt(a,"success");else{a.m=6;try{var O=2<Sn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",og(a)}}finally{$a(a)}}}}function $a(a,h){if(a.g){lg(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pt(a,"ready");try{p.onreadystatechange=y}catch{}}}function lg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),sT(h)}};function cg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kT(a){const h={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var p=N(a[y]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[P]||[];h[P]=O,O.push(p)}b(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function ug(a){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zi("baseRetryDelayMs",5e3,a),this.cb=Zi("retryDelaySeedMs",1e4,a),this.Wa=Zi("forwardChannelMaxRetries",2,a),this.wa=Zi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new qm(a&&a.concurrentRequestLimit),this.Da=new TT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ug.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){mt(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=_g(this,null,this.W),qa(this)};function $u(a){if(dg(a),a.G==3){var h=a.U++,p=In(a.I);if(ye(p,"SID",a.K),ye(p,"RID",h),ye(p,"TYPE","terminate"),eo(a,p),h=new er(a,a.j,h),h.L=2,h.v=Ua(In(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=wg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ma(h)}vg(a)}function Wa(a){a.g&&(qu(a),a.g.cancel(),a.g=null)}function dg(a){Wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ha(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function qa(a){if(!Hm(a.h)&&!a.s){a.s=!0;var h=a.Ga;Fe||Y(),z||(Fe(),z=!0),G.add(h,a),a.B=0}}function NT(a,h){return Gm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qi(g(a.Ga,a,h),yg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new er(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),k(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=fg(this,P,h),p=In(this.I),ye(p,"RID",a),ye(p,"CVER",22),this.D&&ye(p,"X-HTTP-Session-Id",this.D),eo(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(sg(O)))+"&"+h:this.m&&zu(p,this.m,O)),Bu(this.h,P),this.Ua&&ye(p,"TYPE","init"),this.P?(ye(p,"$req",h),ye(p,"SID","null"),P.T=!0,Mu(P,p,null)):Mu(P,p,h),this.G=2}}else this.G==3&&(a?hg(this,a):this.i.length==0||Hm(this.h)||hg(this))};function hg(a,h){var p;h?p=h.l:p=a.U++;const y=In(a.I);ye(y,"SID",a.K),ye(y,"RID",p),ye(y,"AID",a.T),eo(a,y),a.m&&a.o&&zu(y,a.m,a.o),p=new er(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=fg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Bu(a.h,p),Mu(p,y,h)}function eo(a,h){a.H&&U(a.H,function(p,y){ye(h,y,p)}),a.l&&Ym({},function(p,y){ye(h,y,p)})}function fg(a,h,p){p=Math.min(a.i.length,p);var y=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let O=-1;for(;;){const B=["count="+p];O==-1?0<p?(O=P[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let pe=!0;for(let We=0;We<p;We++){let ae=P[We].g;const et=P[We].map;if(ae-=O,0>ae)O=Math.max(0,P[We].g-100),pe=!1;else try{IT(et,B,"req"+ae+"_")}catch{y&&y(et)}}if(pe){y=B.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function pg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Fe||Y(),z||(Fe(),z=!0),G.add(h,a),a.v=0}}function Wu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qi(g(a.Fa,a),yg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,mg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Wa(this),mg(this))};function qu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function mg(a){a.g=new er(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=In(a.qa);ye(h,"RID","rpc"),ye(h,"SID",a.K),ye(h,"AID",a.T),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(h,"TO",a.ja),ye(h,"TYPE","xmlhttp"),eo(a,h),a.m&&a.o&&zu(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ua(In(h)),p.m=null,p.P=!0,zm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Wa(this),Wu(this),mt(19))};function Ha(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function gg(a,h){var p=null;if(a.g==h){Ha(a),qu(a),a.g=null;var y=2}else if(Uu(a.h,h))p=h.D,Km(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;y=ja(),pt(y,new Vm(y,p)),qa(a)}else pg(a);else if(P=h.s,P==3||P==0&&0<h.X||!(y==1&&NT(a,h)||y==2&&Wu(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),P){case 1:Yr(a,5);break;case 4:Yr(a,10);break;case 3:Yr(a,6);break;default:Yr(a,2)}}}function yg(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Yr(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),y=a.Xa;const P=!y;y=new Qr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Va(y,"https"),Ua(y),P?xT(y.toString(),p):ET(y.toString(),p)}else mt(2);a.G=0,a.l&&a.l.sa(h),vg(a),dg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function vg(a){if(a.G=0,a.ka=[],a.l){const h=Qm(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ka,h),R(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function _g(a,h,p){var y=p instanceof Qr?In(p):new Qr(p);if(y.g!="")h&&(y.g=h+"."+y.g),Fa(y,y.s);else{var P=l.location;y=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var O=new Qr(null);y&&Va(O,y),h&&(O.g=h),P&&Fa(O,P),p&&(O.l=p),y=O}return p=a.D,h=a.ya,p&&h&&ye(y,p,h),ye(y,"VER",a.la),eo(a,y),y}function wg(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ke(new Ba({eb:p})):new ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xg(){}t=xg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ga(){}Ga.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){Ze.call(this),this.g=new ug(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Rs(this)}A(Ct,Ze),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){$u(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ru(a),a=p);h.i.push(new dT(h.Ya++,a)),h.G==3&&qa(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,$u(this.g),delete this.g,Ct.aa.N.call(this)};function Eg(a){Du.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Eg,Du);function Tg(){ju.call(this),this.status=1}A(Tg,ju);function Rs(a){this.g=a}A(Rs,xg),Rs.prototype.ua=function(){pt(this.g,"a")},Rs.prototype.ta=function(a){pt(this.g,new Eg(a))},Rs.prototype.sa=function(a){pt(this.g,new Tg)},Rs.prototype.ra=function(){pt(this.g,"b")},Ga.prototype.createWebChannel=Ga.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Ux=function(){return new Ga},Fx=function(){return ja()},Vx=Gr,Yh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oa.NO_ERROR=0,Oa.TIMEOUT=8,Oa.HTTP_ERROR=6,Ll=Oa,Fm.COMPLETE="complete",Mx=Fm,jm.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,_o=jm,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,Lx=ke}).apply(typeof fl<"u"?fl:typeof self<"u"?self:typeof window<"u"?window:{});const v0="@firebase/firestore";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let ji="10.14.0";/**
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
 */const _s=new Zc("@firebase/firestore");function co(){return _s.logLevel}function q(t,...e){if(_s.logLevel<=ne.DEBUG){const n=e.map(Rp);_s.debug(`Firestore (${ji}): ${t}`,...n)}}function Gn(t,...e){if(_s.logLevel<=ne.ERROR){const n=e.map(Rp);_s.error(`Firestore (${ji}): ${t}`,...n)}}function yi(t,...e){if(_s.logLevel<=ne.WARN){const n=e.map(Rp);_s.warn(`Firestore (${ji}): ${t}`,...n)}}function Rp(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function ue(t,e){t||Q()}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Bx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class iR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oR{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new Bx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new ot(e)}}class aR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new cR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class zx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function vi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */let ct=class Ml{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ml.fromMillis(Date.now())}static fromDate(e){return Ml.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ml(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new ct(0,0))}static max(){return new J(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ia{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ia.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ia?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends ia{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const hR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends ia{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return hR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(we.fromString(e))}static fromName(e){return new H(we.fromString(e).popFirst(5))}static empty(){return new H(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new we(e.slice()))}}function fR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Lr(s,H.empty(),e)}function pR(t){return new Lr(t.readTime,t.key,-1)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(J.min(),H.empty(),-1)}static max(){return new Lr(J.max(),H.empty(),-1)}}function mR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const gR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ea(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==gR)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const d=c;n(e[d]).next(f=>{o[d]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function vR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ta(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Pp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pp.oe=-1;function iu(t){return t==null}function Ec(t){return t===0&&1/t==-1/0}function _R(t){return typeof t=="number"&&Number.isInteger(t)&&!Ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function _0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $x(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pl(this.root,e,this.comparator,!0)}}class pl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new He(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,s,i){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new w0(this.data.getIterator())}getIteratorFrom(e){return new w0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class w0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Ye(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Wx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wx("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const wR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=wR.exec(t);if(ue(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function Dp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jp(t){const e=t.mapValue.fields.__previous_value__;return Dp(e)?jp(e):e}function oa(t){const e=Mr(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class xR{constructor(e,n,r,s,i,o,l,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class aa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new aa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof aa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ml={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dp(t)?4:TR(t)?9007199254740991:ER(t)?10:11:Q()}function vn(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oa(t).isEqual(oa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Mr(s.timestampValue),l=Mr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ws(s.bytesValue).isEqual(ws(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ce(s.doubleValue),l=Ce(i.doubleValue);return o===l?Ec(o)===Ec(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(_0(o)!==_0(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!vn(o[c],l[c])))return!1;return!0}(t,e);default:return Q()}}function la(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function _i(t,e){if(t===e)return 0;const n=xs(t),r=xs(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ce(i.integerValue||i.doubleValue),c=Ce(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return x0(t.timestampValue,e.timestampValue);case 4:return x0(oa(t),oa(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ws(i),c=ws(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const f=le(l[d],c[d]);if(f!==0)return f}return le(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=le(Ce(i.latitude),Ce(o.latitude));return l!==0?l:le(Ce(i.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return E0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,d,f;const m=i.fields||{},g=o.fields||{},_=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=(c=g.value)===null||c===void 0?void 0:c.arrayValue,C=le(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:E0(_,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ml.mapValue&&o===ml.mapValue)return 0;if(i===ml.mapValue)return 1;if(o===ml.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=o.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=le(c[m],f[m]);if(g!==0)return g;const _=_i(l[c[m]],d[f[m]]);if(_!==0)return _}return le(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function x0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Mr(t),r=Mr(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function E0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_i(n[s],r[s]);if(i)return i}return le(n.length,r.length)}function wi(t){return Jh(t)}function Jh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ws(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Jh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Jh(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function T0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xh(t){return!!t&&"integerValue"in t}function Op(t){return!!t&&"arrayValue"in t}function I0(t){return!!t&&"nullValue"in t}function S0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vl(t){return!!t&&"mapValue"in t}function ER(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Do(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Do(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Do(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Vl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){bs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Do(this.value))}}function qx(t){const e=[];return bs(t.fields,(n,r)=>{const s=new Ke([n]);if(Vl(r)){const i=qx(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dt(e)}/**
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
 */class lt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,J.min(),J.min(),J.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,J.min(),J.min(),It.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,J.min(),J.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tc{constructor(e,n){this.position=e,this.inclusive=n}}function b0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=_i(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function k0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ic{constructor(e,n="asc"){this.field=e,this.dir=n}}function IR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hx{}class Oe extends Hx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bR(e,n,r):n==="array-contains"?new AR(e,r):n==="in"?new CR(e,r):n==="not-in"?new RR(e,r):n==="array-contains-any"?new PR(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kR(e,r):new NR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_i(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(_i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends Hx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new on(e,n)}matches(e){return Gx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gx(t){return t.op==="and"}function Kx(t){return SR(t)&&Gx(t)}function SR(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Zh(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(Kx(t))return t.filters.map(e=>Zh(e)).join(",");{const e=t.filters.map(n=>Zh(n)).join(",");return`${t.op}(${e})`}}function Qx(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof on?function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Qx(o,s.filters[l]),!0):!1}(t,e):void Q()}function Yx(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${wi(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(Yx).join(" ,")+"}"}(t):"Filter"}class bR extends Oe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class kR extends Oe{constructor(e,n){super(e,"in",n),this.keys=Jx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NR extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=Jx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class AR extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Op(n)&&la(n.arrayValue,this.value)}}class CR extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&la(this.value.arrayValue,n)}}class RR extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(la(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!la(this.value.arrayValue,n)}}class PR extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Op(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>la(this.value.arrayValue,r))}}/**
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
 */class DR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function N0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DR(t,e,n,r,s,i,o)}function Lp(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),iu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.ue=n}return e.ue}function Mp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!k0(t.startAt,e.startAt)&&k0(t.endAt,e.endAt)}function ef(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ia{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jR(t,e,n,r,s,i,o,l){return new Ia(t,e,n,r,s,i,o,l)}function Vp(t){return new Ia(t)}function A0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xx(t){return t.collectionGroup!==null}function jo(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(Ke.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ic(i,r))}),n.has(Ke.keyField().canonicalString())||e.ce.push(new Ic(Ke.keyField(),r))}return e.ce}function gn(t){const e=X(t);return e.le||(e.le=OR(e,jo(t))),e.le}function OR(t,e){if(t.limitType==="F")return N0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ic(s.field,i)});const n=t.endAt?new Tc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tc(t.startAt.position,t.startAt.inclusive):null;return N0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function tf(t,e){const n=t.filters.concat([e]);return new Ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nf(t,e,n){return new Ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ou(t,e){return Mp(gn(t),gn(e))&&t.limitType===e.limitType}function Zx(t){return`${Lp(gn(t))}|lt:${t.limitType}`}function Os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Yx(s)).join(", ")}]`),iu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>wi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>wi(s)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function au(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of jo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const d=b0(o,l,c);return o.inclusive?d<=0:d<0}(r.startAt,jo(r),s)||r.endAt&&!function(o,l,c){const d=b0(o,l,c);return o.inclusive?d>=0:d>0}(r.endAt,jo(r),s))}(t,e)}function LR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eE(t){return(e,n)=>{let r=!1;for(const s of jo(t)){const i=MR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function MR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),d=l.data.field(i);return c!==null&&d!==null?_i(c,d):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $x(this.inner)}size(){return this.innerSize}}/**
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
 */const VR=new be(H.comparator);function Kn(){return VR}const tE=new be(H.comparator);function wo(...t){let e=tE;for(const n of t)e=e.insert(n.key,n);return e}function nE(t){let e=tE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function is(){return Oo()}function rE(){return Oo()}function Oo(){return new Oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const FR=new be(H.comparator),UR=new Ye(H.comparator);function te(...t){let e=UR;for(const n of t)e=e.add(n);return e}const BR=new Ye(le);function zR(){return BR}/**
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
 */function Fp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function sE(t){return{integerValue:""+t}}function $R(t,e){return _R(e)?sE(e):Fp(t,e)}/**
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
 */class lu{constructor(){this._=void 0}}function WR(t,e,n){return t instanceof ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Dp(i)&&(i=jp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof xi?oE(t,e):t instanceof Ei?aE(t,e):function(s,i){const o=iE(s,i),l=C0(o)+C0(s.Pe);return Xh(o)&&Xh(s.Pe)?sE(l):Fp(s.serializer,l)}(t,e)}function qR(t,e,n){return t instanceof xi?oE(t,e):t instanceof Ei?aE(t,e):n}function iE(t,e){return t instanceof Sc?function(r){return Xh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ca extends lu{}class xi extends lu{constructor(e){super(),this.elements=e}}function oE(t,e){const n=lE(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ei extends lu{constructor(e){super(),this.elements=e}}function aE(t,e){let n=lE(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class Sc extends lu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function C0(t){return Ce(t.integerValue||t.doubleValue)}function lE(t){return Op(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Up{constructor(e,n){this.field=e,this.transform=n}}function HR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof xi&&s instanceof xi||r instanceof Ei&&s instanceof Ei?vi(r.elements,s.elements,vn):r instanceof Sc&&s instanceof Sc?vn(r.Pe,s.Pe):r instanceof ca&&s instanceof ca}(t.transform,e.transform)}class GR{constructor(e,n){this.version=e,this.transformResults=n}}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cu{}function cE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bp(t.key,Ot.none()):new Sa(t.key,t.data,Ot.none());{const n=t.data,r=It.empty();let s=new Ye(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Hr(t.key,r,new Dt(s.toArray()),Ot.none())}}function KR(t,e,n){t instanceof Sa?function(s,i,o){const l=s.value.clone(),c=P0(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(s,i,o){if(!Fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=P0(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(uE(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Lo(t,e,n,r){return t instanceof Sa?function(i,o,l,c){if(!Fl(i.precondition,o))return l;const d=i.value.clone(),f=D0(i.fieldTransforms,c,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(i,o,l,c){if(!Fl(i.precondition,o))return l;const d=D0(i.fieldTransforms,c,o),f=o.data;return f.setAll(uE(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function QR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=iE(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function R0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vi(r,s,(i,o)=>HR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Sa extends cu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hr extends cu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function P0(t,e,n){const r=new Map;ue(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,qR(o,l,n[s]))}return r}function D0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,WR(i,o,e))}return r}class Bp extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YR extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&KR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=cE(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,r)=>R0(n,r))&&vi(this.baseMutations,e.baseMutations,(n,r)=>R0(n,r))}}class zp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ue(e.mutations.length===r.length);let s=function(){return FR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zp(e,n,r,s)}}/**
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
 */class XR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,re;function eP(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function dE(t){if(t===void 0)return Gn("GRPC error has no .code"),L.UNKNOWN;switch(t){case De.OK:return L.OK;case De.CANCELLED:return L.CANCELLED;case De.UNKNOWN:return L.UNKNOWN;case De.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case De.INTERNAL:return L.INTERNAL;case De.UNAVAILABLE:return L.UNAVAILABLE;case De.UNAUTHENTICATED:return L.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case De.NOT_FOUND:return L.NOT_FOUND;case De.ALREADY_EXISTS:return L.ALREADY_EXISTS;case De.PERMISSION_DENIED:return L.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case De.ABORTED:return L.ABORTED;case De.OUT_OF_RANGE:return L.OUT_OF_RANGE;case De.UNIMPLEMENTED:return L.UNIMPLEMENTED;case De.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tP(){return new TextEncoder}/**
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
 */const nP=new cs([4294967295,4294967295],0);function j0(t){const e=tP().encode(t),n=new Ox;return n.update(e),new Uint8Array(n.digest())}function O0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cs([n,r],0),new cs([s,i],0)]}class $p{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xo(`Invalid padding: ${n}`);if(r<0)throw new xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=cs.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(cs.fromNumber(r)));return s.compare(nP)===1&&(s=new cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=j0(e),[r,s]=O0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $p(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=j0(e),[r,s]=O0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class uu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ba.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uu(J.min(),s,new be(le),Kn(),te())}}class ba{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ba(r,n,te(),te(),te())}}/**
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
 */class Ul{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class hE{constructor(e,n){this.targetId=e,this.me=n}}class fE{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class L0{constructor(){this.fe=0,this.ge=V0(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new ba(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=V0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rP{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=M0(),this.Qe=new be(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ef(i))if(r===0){const o=new H(i.path);this.Ue(n,o,lt.newNoDocument(o,J.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ws(r).toUint8Array()}catch(c){if(c instanceof Wx)return yi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new $p(o,s,i)}catch(c){return yi(c instanceof xo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&ef(l.target)){const c=new H(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,lt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=te();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new uu(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=M0(),this.Qe=new be(le),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new L0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new L0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function M0(){return new be(H.comparator)}function V0(){return new be(H.comparator)}const sP={asc:"ASCENDING",desc:"DESCENDING"},iP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oP={and:"AND",or:"OR"};class aP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rf(t,e){return t.useProto3Json||iu(e)?e:{value:e}}function bc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lP(t,e){return bc(t,e.toTimestamp())}function yn(t){return ue(!!t),J.fromTimestamp(function(n){const r=Mr(n);return new ct(r.seconds,r.nanos)}(t))}function Wp(t,e){return sf(t,e).canonicalString()}function sf(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mE(t){const e=we.fromString(t);return ue(wE(e)),e}function of(t,e){return Wp(t.databaseId,e.path)}function Nd(t,e){const n=mE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(yE(n))}function gE(t,e){return Wp(t.databaseId,e)}function cP(t){const e=mE(t);return e.length===4?we.emptyPath():yE(e)}function af(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yE(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F0(t,e,n){return{name:of(t,e),fields:n.value.mapValue.fields}}function uP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(ue(f===void 0||typeof f=="string"),Xe.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Xe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?L.UNKNOWN:dE(d.code);return new $(f,d.message||"")}(o);n=new fE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nd(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):J.min(),l=new It({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(s,i,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Ul(d,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nd(t,r.document),i=r.readTime?yn(r.readTime):J.min(),o=lt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nd(t,r.document),i=r.removedTargetIds||[];n=new Ul([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ZR(s,i),l=r.targetId;n=new hE(l,o)}}return n}function dP(t,e){let n;if(e instanceof Sa)n={update:F0(t,e.key,e.value)};else if(e instanceof Bp)n={delete:of(t,e.key)};else if(e instanceof Hr)n={update:F0(t,e.key,e.data),updateMask:wP(e.fieldMask)};else{if(!(e instanceof YR))return Q();n={verify:of(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ei)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Sc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:lP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function hP(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(J.min())&&(o=yn(i)),new GR(o,s.transformResults||[])}(n,e))):[]}function fP(t,e){return{documents:[gE(t,e.path)]}}function pP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gE(t,s);const i=function(d){if(d.length!==0)return _E(on.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:Ls(g.field),direction:yP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=rf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function mP(t){let e=cP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ue(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=vE(m);return g instanceof on&&Kx(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(A){return new Ic(Ms(A.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,iu(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,_=m.values||[];return new Tc(_,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,_=m.values||[];return new Tc(_,g)}(n.endAt)),jR(e,s,o,i,l,"F",c,d)}function gP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ms(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ms(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ms(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Ms(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>vE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function yP(t){return sP[t]}function vP(t){return iP[t]}function _P(t){return oP[t]}function Ls(t){return{fieldPath:t.canonicalString()}}function Ms(t){return Ke.fromServerFormat(t.fieldPath)}function _E(t){return t instanceof Oe?function(n){if(n.op==="=="){if(S0(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NAN"}};if(I0(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(S0(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NAN"}};if(I0(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ls(n.field),op:vP(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(s=>_E(s));return r.length===1?r[0]:{compositeFilter:{op:_P(n.op),filters:r}}}(t):Q()}function wP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class vr{constructor(e,n,r,s,i=J.min(),o=J.min(),l=Xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xP{constructor(e){this.ct=e}}function EP(t){const e=mP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nf(e,e.limit,"L"):e}/**
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
 */class TP{constructor(){this.un=new IP}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Lr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class IP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(we.comparator)).toArray()}}/**
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
 */class Ti{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ti(0)}static kn(){return new Ti(-1)}}/**
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
 */class SP{constructor(){this.changes=new Oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Lo(r.mutation,s,Dt.empty(),ct.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=is();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=wo();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=is();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Kn();const o=Oo(),l=function(){return Oo()}();return n.forEach((c,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Hr)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Lo(f.mutation,d,f.mutation.getFieldMask(),ct.now())):o.set(d.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var m;return l.set(d,new bP(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Oo();let s=new be((o,l)=>o-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let f=r.get(c)||Dt.empty();f=l.applyToLocalView(d,f),r.set(c,f);const m=(s.get(l.batchId)||te()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,f=c.value,m=rE();f.forEach(g=>{if(!i.has(g)){const _=cE(n.get(g),r.get(g));_!==null&&m.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(is());let l=-1,c=i;return o.next(d=>M.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,te())).next(f=>({batchId:l,changes:nE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=wo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=wo();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const d=function(m,g){return new Ia(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,lt.newInvalidDocument(f)))});let l=wo();return o.forEach((c,d)=>{const f=i.get(c);f!==void 0&&Lo(f.mutation,d,Dt.empty(),ct.now()),au(n,d)&&(l=l.insert(c,d))}),l})}}/**
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
 */class NP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:EP(s.bundledQuery),readTime:yn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class AP{constructor(){this.overlays=new be(H.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=is();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=is(),i=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new be((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=is(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=is(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return M.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new XR(n,r));let i=this.Ir.get(n);i===void 0&&(i=te(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class CP{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class qp{constructor(){this.Tr=new Ye(Ue.Er),this.dr=new Ye(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new we([])),r=new Ue(n,e),s=new Ue(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new we([])),r=new Ue(n,e),s=new Ue(n,e+1);let i=te();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
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
 */class RP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ye(Ue.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Ue(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),s=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(le);return n.forEach(s=>{const i=new Ue(s,0),o=new Ue(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new H(i),0);let l=new Ye(le);return this.br.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(c.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,s=>{const i=new Ue(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),s=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class PP{constructor(e){this.Mr=e,this.docs=function(){return new be(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,l=new H(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||mR(pR(f),r)<=0||(s.has(f.key)||au(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DP(this)}getSize(e){return M.resolve(this.size)}}class DP extends SP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class jP{constructor(e){this.persistence=e,this.Nr=new Oi(n=>Lp(n),Mp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qp,this.targetCount=0,this.kr=Ti.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class OP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Pp(0),this.Kr=!1,this.Kr=!0,this.$r=new CP,this.referenceDelegate=e(this),this.Ur=new jP(this),this.indexManager=new TP,this.remoteDocumentCache=function(s){return new PP(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new xP(n),this.Gr=new NP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new RP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new LP(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class LP extends yR{constructor(e){super(),this.currentSequenceNumber=e}}class Hp{constructor(e){this.persistence=e,this.Jr=new qp,this.Yr=null}static Zr(e){return new Hp(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=H.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Gp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gp(e,n.fromCache,r,s)}}/**
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
 */class MP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Tk()?8:vR(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new MP;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(co()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(co()<=ne.DEBUG&&q("QueryEngine","Query:",Os(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(co()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):M.resolve())}Yi(e,n){if(A0(n))return M.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=nf(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.ts(n,l);return this.ns(n,d,o,c.readTime)?this.Yi(e,nf(n,null,"F")):this.rs(e,d,n,c)}))})))}Zi(e,n,r,s){return A0(n)||s.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?M.resolve(null):(co()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Os(n)),this.rs(e,o,n,fR(s,-1)).next(l=>l))})}ts(e,n){let r=new Ye(eE(e));return n.forEach((s,i)=>{au(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return co()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Os(n)),this.Ji.getDocumentsMatchingQuery(e,n,Lr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class FP{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new be(le),this._s=new Oi(i=>Lp(i),Mp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function UP(t,e,n,r){return new FP(t,e,n,r)}async function xE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=te();for(const d of s){o.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function BP(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,d,f){const m=d.batch,g=m.keys();let _=M.resolve();return g.forEach(A=>{_=_.next(()=>f.getEntry(c,A)).next(C=>{const R=d.docVersions.get(A);ue(R!==null),C.version.compareTo(R)<0&&(m.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),f.addEntry(C)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=te();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function EE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function zP(t,e){const n=X(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Xe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(m,_),function(C,R,E){return C.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,_,f)&&l.push(n.Ur.updateTargetData(i,_))});let c=Kn(),d=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push($P(i,o,e.documentUpdates).next(f=>{c=f.Ps,d=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(n.os=s,i))}function $P(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((l,c)=>{const d=i.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function WP(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qP(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function lf(t,e,n){const r=X(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ta(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function U0(t,e,n){const r=X(t);let s=J.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,d,f){const m=X(c),g=m._s.get(f);return g!==void 0?M.resolve(m.os.get(g)):m.Ur.getTargetData(d,f)}(r,o,gn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:te())).next(l=>(HP(r,LR(e),l),{documents:l,Ts:i})))}function HP(t,e,n){let r=t.us.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class B0{constructor(){this.activeTargetIds=zR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GP{constructor(){this.so=new B0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new B0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KP{_o(e){}shutdown(){}}/**
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
 */class z0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gl=null;function Ad(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
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
 */const QP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const st="WebChannelConnection";class JP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Ad(),c=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,c,d,s).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw yi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ji}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=QP[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ad();return new Promise((o,l)=>{const c=new Lx;c.setWithCredentials(!0),c.listenOnce(Mx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ll.NO_ERROR:const f=c.getResponseJson();q(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Ll.TIMEOUT:q(st,`RPC '${e}' ${i} timed out`),l(new $(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ll.HTTP_ERROR:const m=c.getStatus();if(q(st,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const A=function(R){const E=R.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(_.status);l(new $(A,_.message))}else l(new $(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new $(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{q(st,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);q(st,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=Ad(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ux(),l=Fx(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");q(st,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=o.createWebChannel(f,c);let g=!1,_=!1;const A=new YP({Io:R=>{_?q(st,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(g||(q(st,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),q(st,`RPC '${e}' stream ${s} sending:`,R),m.send(R))},To:()=>m.close()}),C=(R,E,w)=>{R.listen(E,x=>{try{w(x)}catch(j){setTimeout(()=>{throw j},0)}})};return C(m,_o.EventType.OPEN,()=>{_||(q(st,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),C(m,_o.EventType.CLOSE,()=>{_||(_=!0,q(st,`RPC '${e}' stream ${s} transport closed`),A.So())}),C(m,_o.EventType.ERROR,R=>{_||(_=!0,yi(st,`RPC '${e}' stream ${s} transport errored:`,R),A.So(new $(L.UNAVAILABLE,"The operation could not be completed")))}),C(m,_o.EventType.MESSAGE,R=>{var E;if(!_){const w=R.data[0];ue(!!w);const x=w,j=x.error||((E=x[0])===null||E===void 0?void 0:E.error);if(j){q(st,`RPC '${e}' stream ${s} received error:`,j);const V=j.status;let U=function(T){const k=De[T];if(k!==void 0)return dE(k)}(V),b=j.message;U===void 0&&(U=L.INTERNAL,b="Unknown error status: "+V+" with message "+j.message),_=!0,A.So(new $(U,b)),m.close()}else q(st,`RPC '${e}' stream ${s} received:`,w),A.bo(w)}}),C(l,Vx.STAT_EVENT,R=>{R.stat===Yh.PROXY?q(st,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Yh.NOPROXY&&q(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Cd(){return typeof document<"u"?document:null}/**
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
 */function du(t){return new aP(t,!0)}/**
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
 */class TE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class IE{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new TE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new $(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XP extends IE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=uP(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?yn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=af(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=ef(c)?{documents:fP(i,c)}:{query:pP(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=pE(i,o.resumeToken);const d=rf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=bc(i,o.snapshotVersion.toTimestamp());const d=rf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=gP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=af(this.serializer),n.removeTarget=e,this.a_(n)}}class ZP extends IE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=hP(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=af(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dP(this.serializer,r))};this.a_(n)}}/**
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
 */class e2 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,sf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,sf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class t2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class n2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ks(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=X(c);d.L_.add(4),await ka(d),d.q_.set("Unknown"),d.L_.delete(4),await hu(d)}(this))})}),this.q_=new t2(r,s)}}async function hu(t){if(ks(t))for(const e of t.B_)await e(!0)}async function ka(t){for(const e of t.B_)await e(!1)}function SE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Jp(n)?Yp(n):Li(n).r_()&&Qp(n,e))}function Kp(t,e){const n=X(t),r=Li(n);n.N_.delete(e),r.r_()&&bE(n,e),n.N_.size===0&&(r.r_()?r.o_():ks(n)&&n.q_.set("Unknown"))}function Qp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Li(t).A_(e)}function bE(t,e){t.Q_.xe(e),Li(t).R_(e)}function Yp(t){t.Q_=new rP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Li(t).start(),t.q_.v_()}function Jp(t){return ks(t)&&!Li(t).n_()&&t.N_.size>0}function ks(t){return X(t).L_.size===0}function kE(t){t.Q_=void 0}async function r2(t){t.q_.set("Online")}async function s2(t){t.N_.forEach((e,n)=>{Qp(t,e)})}async function i2(t,e){kE(t),Jp(t)?(t.q_.M_(e),Yp(t)):t.q_.set("Unknown")}async function o2(t,e,n){if(t.q_.set("Online"),e instanceof fE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kc(t,r)}else if(e instanceof Ul?t.Q_.Ke(e):e instanceof hE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await EE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(Xe.EMPTY_BYTE_STRING,f.snapshotVersion)),bE(i,c);const m=new vr(f.target,c,d,f.sequenceNumber);Qp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await kc(t,r)}}async function kc(t,e,n){if(!Ta(e))throw e;t.L_.add(1),await ka(t),t.q_.set("Offline"),n||(n=()=>EE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await hu(t)})}function NE(t,e){return e().catch(n=>kc(t,n,e))}async function fu(t){const e=X(t),n=Vr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;a2(e);)try{const s=await WP(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,l2(e,s)}catch(s){await kc(e,s)}AE(e)&&CE(e)}function a2(t){return ks(t)&&t.O_.length<10}function l2(t,e){t.O_.push(e);const n=Vr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function AE(t){return ks(t)&&!Vr(t).n_()&&t.O_.length>0}function CE(t){Vr(t).start()}async function c2(t){Vr(t).p_()}async function u2(t){const e=Vr(t);for(const n of t.O_)e.m_(n.mutations)}async function d2(t,e,n){const r=t.O_.shift(),s=zp.from(r,e,n);await NE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fu(t)}async function h2(t,e){e&&Vr(t).V_&&await async function(r,s){if(function(o){return eP(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();Vr(r).s_(),await NE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fu(r)}}(t,e),AE(t)&&CE(t)}async function $0(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ks(n);n.L_.add(3),await ka(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await hu(n)}async function f2(t,e){const n=X(t);e?(n.L_.delete(2),await hu(n)):e||(n.L_.add(2),await ka(n),n.q_.set("Unknown"))}function Li(t){return t.K_||(t.K_=function(n,r,s){const i=X(n);return i.w_(),new XP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:r2.bind(null,t),Ro:s2.bind(null,t),mo:i2.bind(null,t),d_:o2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Jp(t)?Yp(t):t.q_.set("Unknown")):(await t.K_.stop(),kE(t))})),t.K_}function Vr(t){return t.U_||(t.U_=function(n,r,s){const i=X(n);return i.w_(),new ZP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:c2.bind(null,t),mo:h2.bind(null,t),f_:u2.bind(null,t),g_:d2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await fu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Xp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Xp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zp(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Ta(t))return new $(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ai{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=wo(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class W0{constructor(){this.W_=new be(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ii{constructor(e,n,r,s,i,o,l,c,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ii(e,n,ai.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ou(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class p2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class m2{constructor(){this.queries=q0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=q0(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new $(L.ABORTED,"Firestore shutting down"))}}function q0(){return new Oi(t=>Zx(t),ou)}async function RE(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new p2,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Zp(o,`Initialization of query '${Os(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&em(n)}async function PE(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function g2(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&em(n)}function y2(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function em(t){t.Y_.forEach(e=>{e.next()})}var cf,H0;(H0=cf||(cf={})).ea="default",H0.Cache="cache";class DE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cf.Cache}}/**
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
 */class jE{constructor(e){this.key=e}}class OE{constructor(e){this.key=e}}class v2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=eE(e),this.Ra=new ai(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new W0,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),_=au(this.query,m)?m:null,A=!!g&&this.mutatedKeys.has(g.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;g&&_?g.data.isEqual(_.data)?A!==C&&(r.track({type:3,doc:_}),R=!0):this.ga(g,_)||(r.track({type:2,doc:_}),R=!0,(c&&this.Aa(_,c)>0||d&&this.Aa(_,d)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),R=!0):g&&!_&&(r.track({type:1,doc:g}),R=!0,(c||d)&&(l=!0)),R&&(_?(o=o.add(_),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(_,A){const C=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return C(_)-C(A)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,d=c!==this.Ea;return this.Ea=c,o.length!==0||d?{snapshot:new Ii(this.query,e.Ra,i,o,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new W0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new OE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new jE(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ii.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class w2{constructor(e){this.key=e,this.va=!1}}class x2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Oi(l=>Zx(l),ou),this.Ma=new Map,this.xa=new Set,this.Oa=new be(H.comparator),this.Na=new Map,this.La=new qp,this.Ba={},this.ka=new Map,this.qa=Ti.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function E2(t,e,n=!0){const r=BE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await LE(r,e,n,!0),s}async function T2(t,e){const n=BE(t);await LE(n,e,!0,!1)}async function LE(t,e,n,r){const s=await qP(t.localStore,gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await I2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&SE(t.remoteStore,s),l}async function I2(t,e,n,r,s){t.Ka=(m,g,_)=>async function(C,R,E,w){let x=R.view.ma(E);x.ns&&(x=await U0(C.localStore,R.query,!1).then(({documents:b})=>R.view.ma(b,x)));const j=w&&w.targetChanges.get(R.targetId),V=w&&w.targetMismatches.get(R.targetId)!=null,U=R.view.applyChanges(x,C.isPrimaryClient,j,V);return K0(C,R.targetId,U.wa),U.snapshot}(t,m,g,_);const i=await U0(t.localStore,e,!0),o=new v2(e,i.Ts),l=o.ma(i.documents),c=ba.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,c);K0(t,n,d.wa);const f=new _2(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function S2(t,e,n){const r=X(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ou(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await lf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Kp(r.remoteStore,s.targetId),uf(r,s.targetId)}).catch(Ea)):(uf(r,s.targetId),await lf(r.localStore,s.targetId,!0))}async function b2(t,e){const n=X(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Kp(n.remoteStore,r.targetId))}async function k2(t,e,n){const r=j2(t);try{const s=await function(o,l){const c=X(o),d=ct.now(),f=l.reduce((_,A)=>_.add(A.key),te());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=Kn(),C=te();return c.cs.getEntries(_,f).next(R=>{A=R,A.forEach((E,w)=>{w.isValidDocument()||(C=C.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,A)).next(R=>{m=R;const E=[];for(const w of l){const x=QR(w,m.get(w.key).overlayedDocument);x!=null&&E.push(new Hr(w.key,x,qx(x.value.mapValue),Ot.exists(!0)))}return c.mutationQueue.addMutationBatch(_,d,E,l)}).next(R=>{g=R;const E=R.applyToLocalDocumentSet(m,C);return c.documentOverlayCache.saveOverlays(_,R.batchId,E)})}).then(()=>({batchId:g.batchId,changes:nE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let d=o.Ba[o.currentUser.toKey()];d||(d=new be(le)),d=d.insert(l,c),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await Na(r,s.changes),await fu(r.remoteStore)}catch(s){const i=Zp(s,"Failed to persist write");n.reject(i)}}async function ME(t,e){const n=X(t);try{const r=await zP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ue(o.va):s.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await Na(n,r,e)}catch(r){await Ea(r)}}function G0(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=X(o);c.onlineState=l;let d=!1;c.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&em(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function N2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new be(H.comparator);o=o.insert(i,lt.newNoDocument(i,J.min()));const l=te().add(i),c=new uu(J.min(),new Map,new be(le),o,l);await ME(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),tm(r)}else await lf(r.localStore,e,!1).then(()=>uf(r,e,n)).catch(Ea)}async function A2(t,e){const n=X(t),r=e.batch.batchId;try{const s=await BP(n.localStore,e);FE(n,r,null),VE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Na(n,s)}catch(s){await Ea(s)}}async function C2(t,e,n){const r=X(t);try{const s=await function(o,l){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,l).next(m=>(ue(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(d,m))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(r.localStore,e);FE(r,e,n),VE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Na(r,s)}catch(s){await Ea(s)}}function VE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function FE(t,e,n){const r=X(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||UE(t,r)})}function UE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Kp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),tm(t))}function K0(t,e,n){for(const r of n)r instanceof jE?(t.La.addReference(r.key,e),R2(t,r)):r instanceof OE?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||UE(t,r.key)):Q()}function R2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),tm(t))}function tm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(we.fromString(e)),r=t.qa.next();t.Na.set(r,new w2(n)),t.Oa=t.Oa.insert(n,r),SE(t.remoteStore,new vr(gn(Vp(n.path)),r,"TargetPurposeLimboResolution",Pp.oe))}}async function Na(t,e,n){const r=X(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Gp.Wi(c.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,d){const f=X(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(d,g=>M.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>M.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!Ta(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const _=f.os.get(g),A=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(A);f.os=f.os.insert(g,C)}}}(r.localStore,i))}async function P2(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await xE(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new $(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Na(n,r.hs)}}function D2(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let s=te();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function BE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ME.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=D2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N2.bind(null,e),e.Ca.d_=g2.bind(null,e.eventManager),e.Ca.$a=y2.bind(null,e.eventManager),e}function j2(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C2.bind(null,e),e}class Nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return UP(this.persistence,new VP,e.initialUser,this.serializer)}Ga(e){return new OP(Hp.Zr,this.serializer)}Wa(e){return new GP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nc.provider={build:()=>new Nc};class df{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>G0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=P2.bind(null,this.syncEngine),await f2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new m2}()}createDatastore(e){const n=du(e.databaseInfo.databaseId),r=function(i){return new JP(i)}(e.databaseInfo);return function(i,o,l,c){return new e2(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new n2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>G0(this.syncEngine,n,0),function(){return z0.D()?new z0:new KP}())}createSyncEngine(e,n){return function(s,i,o,l,c,d,f){const m=new x2(s,i,o,l,c,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ka(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}df.provider={build:()=>new df};/**
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
 */class zE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class O2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=zx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rd(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await xE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Q0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await L2(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>$0(e.remoteStore,s)),t._onlineComponents=e}async function L2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;yi("Error using user provided cache. Falling back to memory cache: "+n),await Rd(t,new Nc)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Rd(t,new Nc);return t._offlineComponents}async function $E(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Q0(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Q0(t,new df))),t._onlineComponents}function M2(t){return $E(t).then(e=>e.syncEngine)}async function WE(t){const e=await $E(t),n=e.eventManager;return n.onListen=E2.bind(null,e.syncEngine),n.onUnlisten=S2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=T2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=b2.bind(null,e.syncEngine),n}function V2(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const f=new zE({next:g=>{f.Za(),o.enqueueAndForget(()=>PE(i,m));const _=g.docs.has(l);!_&&g.fromCache?d.reject(new $(L.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?d.reject(new $(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new DE(Vp(l.path),f,{includeMetadataChanges:!0,_a:!0});return RE(i,m)}(await WE(t),t.asyncQueue,e,n,r)),r.promise}function F2(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const f=new zE({next:g=>{f.Za(),o.enqueueAndForget(()=>PE(i,m)),g.fromCache&&c.source==="server"?d.reject(new $(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new DE(l,f,{includeMetadataChanges:!0,_a:!0});return RE(i,m)}(await WE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function qE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Y0=new Map;/**
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
 */function HE(t,e,n){if(!n)throw new $(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function U2(t,e,n,r){if(e===!0&&r===!0)throw new $(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function J0(t){if(!H.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function X0(t){if(H.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pu(t);throw new $(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Z0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sR;switch(r.type){case"firstParty":return new lR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Y0.get(n);r&&(q("ComponentProvider","Removing Datastore"),Y0.delete(n),r.terminate())}(this),Promise.resolve()}}function B2(t,e,n,r={}){var s;const i=(t=_n(t,mu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ot.MOCK_USER;else{l=yk(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new $(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ot(d)}t._authCredentials=new iR(new Bx(l,c))}}/**
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
 */class Mi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mi(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Dr extends Mi{constructor(e,n,r){super(e,n,Vp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new H(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function _r(t,e,...n){if(t=ge(t),HE("collection","path",e),t instanceof mu){const r=we.fromString(e,...n);return X0(r),new Dr(t,null,r)}{if(!(t instanceof vt||t instanceof Dr))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return X0(r),new Dr(t.firestore,null,r)}}function it(t,e,...n){if(t=ge(t),arguments.length===1&&(e=zx.newId()),HE("doc","path",e),t instanceof mu){const r=we.fromString(e,...n);return J0(r),new vt(t,null,new H(r))}{if(!(t instanceof vt||t instanceof Dr))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return J0(r),new vt(t.firestore,t instanceof Dr?t.converter:null,new H(r))}}/**
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
 */class ev{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new TE(this,"async_queue_retry"),this.Vu=()=>{const r=Cd();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Cd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Fn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ta(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Gn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Xp.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Vi extends mu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ev,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ev(e),this._firestoreClient=void 0,await e}}}function z2(t,e){const n=typeof t=="object"?t:tu(),r=typeof t=="string"?t:"(default)",s=Wr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=mk("firestore");i&&B2(s,...i)}return s}function gu(t){if(t._terminated)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$2(t),t._firestoreClient}function $2(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,d,f){return new xR(l,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,qE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new O2(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Si(Xe.fromBase64String(e))}catch(n){throw new $(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Si(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Aa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fi{constructor(e){this._methodName=e}}/**
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
 */class nm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */class rm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const W2=/^__.*__$/;class q2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Sa(e,this.data,n,this.fieldTransforms)}}class GE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function KE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class yu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ac(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(KE(this.Cu)&&W2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class H2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||du(e)}Qu(e,n,r,s=!1){return new yu({Cu:e,methodName:n,qu:r,path:Ke.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vu(t){const e=t._freezeSettings(),n=du(t._databaseId);return new H2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);am("Data must be an object, but it was:",o,r);const l=ZE(r,o);let c,d;if(i.merge)c=new Dt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=hf(e,m,n);if(!o.contains(g))throw new $(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);t1(f,g)||f.push(g)}c=new Dt(f),d=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,d=o.fieldTransforms;return new q2(new It(l),c,d)}class _u extends Fi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _u}}function YE(t,e,n){return new yu({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class sm extends Fi{_toFieldTransform(e){return new Up(e.path,new ca)}isEqual(e){return e instanceof sm}}class im extends Fi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=YE(this,e,!0),r=this.Ku.map(i=>Ns(i,n)),s=new xi(r);return new Up(e.path,s)}isEqual(e){return e instanceof im&&gs(this.Ku,e.Ku)}}class om extends Fi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=YE(this,e,!0),r=this.Ku.map(i=>Ns(i,n)),s=new Ei(r);return new Up(e.path,s)}isEqual(e){return e instanceof om&&gs(this.Ku,e.Ku)}}function JE(t,e,n,r){const s=t.Qu(1,e,n);am("Data must be an object, but it was:",s,r);const i=[],o=It.empty();bs(r,(c,d)=>{const f=lm(e,c,n);d=ge(d);const m=s.Nu(f);if(d instanceof _u)i.push(f);else{const g=Ns(d,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Dt(i);return new GE(o,l,s.fieldTransforms)}function XE(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[hf(e,r,n)],c=[s];if(i.length%2!=0)throw new $(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(hf(e,i[g])),c.push(i[g+1]);const d=[],f=It.empty();for(let g=l.length-1;g>=0;--g)if(!t1(d,l[g])){const _=l[g];let A=c[g];A=ge(A);const C=o.Nu(_);if(A instanceof _u)d.push(_);else{const R=Ns(A,C);R!=null&&(d.push(_),f.set(_,R))}}const m=new Dt(d);return new GE(f,m,o.fieldTransforms)}function G2(t,e,n,r=!1){return Ns(n,t.Qu(r?4:3,e))}function Ns(t,e){if(e1(t=ge(t)))return am("Unsupported field value:",e,t),ZE(t,e);if(t instanceof Fi)return function(r,s){if(!KE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ns(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $R(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:bc(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bc(s.serializer,i)}}if(r instanceof nm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Si)return{bytesValue:pE(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof rm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Fp(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${pu(r)}`)}(t,e)}function ZE(t,e){const n={};return $x(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(r,s)=>{const i=Ns(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function e1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof nm||t instanceof Si||t instanceof vt||t instanceof Fi||t instanceof rm)}function am(t,e,n){if(!e1(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=pu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function hf(t,e,n){if((e=ge(e))instanceof Aa)return e._internalPath;if(typeof e=="string")return lm(t,e);throw Ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const K2=new RegExp("[~\\*/\\[\\]]");function lm(t,e,n){if(e.search(K2)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Aa(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ac(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(L.INVALID_ARGUMENT,l+t+c)}function t1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class n1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Q2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Q2 extends n1{data(){return super.data()}}function cm(t,e){return typeof e=="string"?lm(t,e):e instanceof Aa?e._internalPath:e._delegate._internalPath}/**
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
 */function Y2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class um{}class J2 extends um{}function wr(t,e,...n){let r=[];e instanceof um&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof dm).length,l=i.filter(c=>c instanceof wu).length;if(o>1||o>0&&l>0)throw new $(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wu extends J2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wu(e,n,r)}_apply(e){const n=this._parse(e);return r1(e._query,n),new Mi(e.firestore,e.converter,tf(e._query,n))}_parse(e){const n=vu(e.firestore);return function(i,o,l,c,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){nv(m,f);const _=[];for(const A of m)_.push(tv(c,i,A));g={arrayValue:{values:_}}}else g=tv(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||nv(m,f),g=G2(l,o,m,f==="in"||f==="not-in");return Oe.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xr(t,e,n){const r=e,s=cm("where",t);return wu._create(s,r,n)}class dm extends um{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)r1(o,c),o=tf(o,c)}(e._query,n),new Mi(e.firestore,e.converter,tf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function tv(t,e,n){if(typeof(n=ge(n))=="string"){if(n==="")throw new $(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xx(e)&&n.indexOf("/")!==-1)throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!H.isDocumentKey(r))throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return T0(t,new H(r))}if(n instanceof vt)return T0(t,n._key);throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pu(n)}.`)}function nv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function r1(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class X2{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ce(o.doubleValue));return new rm(i)}convertGeoPoint(e){return new nm(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oa(e));default:return null}}convertTimestamp(e){const n=Mr(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);ue(wE(r));const s=new aa(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function s1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class i1 extends n1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bl extends i1{data(e={}){return super.data(e)}}class Z2{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Eo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new Eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Eo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Eo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:eD(l.type),doc:c,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function ff(t){t=_n(t,vt);const e=_n(t.firestore,Vi);return V2(gu(e),t._key).then(n=>tD(e,t,n))}class o1 extends X2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function Er(t){t=_n(t,Mi);const e=_n(t.firestore,Vi),n=gu(e),r=new o1(e);return Y2(t._query),F2(n,t._query).then(s=>new Z2(e,r,t,s))}function Cc(t,e,n){t=_n(t,vt);const r=_n(t.firestore,Vi),s=s1(t.converter,e,n);return hm(r,[QE(vu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ot.none())])}function pf(t,e,n,...r){t=_n(t,vt);const s=_n(t.firestore,Vi),i=vu(s);let o;return o=typeof(e=ge(e))=="string"||e instanceof Aa?XE(i,"updateDoc",t._key,e,n,r):JE(i,"updateDoc",t._key,e),hm(s,[o.toMutation(t._key,Ot.exists(!0))])}function hm(t,e){return function(r,s){const i=new Fn;return r.asyncQueue.enqueueAndForget(async()=>k2(await M2(r),s,i)),i.promise}(gu(t),e)}function tD(t,e,n){const r=n.docs.get(e._key),s=new o1(t);return new i1(t,s,e._key,r,new Eo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class nD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=vu(e)}set(e,n,r){this._verifyNotCommitted();const s=Pd(e,this._firestore),i=s1(s.converter,n,r),o=QE(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ot.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Pd(e,this._firestore);let o;return o=typeof(n=ge(n))=="string"||n instanceof Aa?XE(this._dataReader,"WriteBatch.update",i._key,n,r,s):JE(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ot.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Pd(e,this._firestore);return this._mutations=this._mutations.concat(new Bp(n._key,Ot.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Pd(t,e){if((t=ge(t)).firestore!==e)throw new $(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function us(){return new sm("serverTimestamp")}function Dd(...t){return new im("arrayUnion",t)}function jd(...t){return new om("arrayRemove",t)}/**
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
 */function yl(t){return gu(t=_n(t,Vi)),new nD(t,e=>hm(t,e))}(function(e,n=!0){(function(s){ji=s})(Pi),Gt(new Vt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Vi(new oR(r.getProvider("auth-internal")),new uR(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new $(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new aa(d.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),At(v0,"4.7.3",e),At(v0,"4.7.3","esm2017")})();const a1="@firebase/installations",fm="0.6.9";/**
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
 */const l1=1e4,c1=`w:${fm}`,u1="FIS_v2",rD="https://firebaseinstallations.googleapis.com/v1",sD=60*60*1e3,iD="installations",oD="Installations";/**
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
 */const aD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Es=new $r(iD,oD,aD);function d1(t){return t instanceof an&&t.code.includes("request-failed")}/**
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
 */function h1({projectId:t}){return`${rD}/projects/${t}/installations`}function f1(t){return{token:t.token,requestStatus:2,expiresIn:cD(t.expiresIn),creationTime:Date.now()}}async function p1(t,e){const r=(await e.json()).error;return Es.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function m1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lD(t,{refreshToken:e}){const n=m1(t);return n.append("Authorization",uD(e)),n}async function g1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cD(t){return Number(t.replace("s","000"))}function uD(t){return`${u1} ${t}`}/**
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
 */async function dD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=h1(t),s=m1(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:n,authVersion:u1,appId:t.appId,sdkVersion:c1},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await g1(()=>fetch(r,l));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:f1(d.authToken)}}else throw await p1("Create Installation",c)}/**
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
 */function y1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function hD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fD=/^[cdef][\w-]{21}$/,mf="";function pD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mD(t);return fD.test(n)?n:mf}catch{return mf}}function mD(t){return hD(t).substr(0,22)}/**
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
 */function xu(t){return`${t.appName}!${t.appId}`}/**
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
 */const v1=new Map;function _1(t,e){const n=xu(t);w1(n,e),gD(n,e)}function w1(t,e){const n=v1.get(t);if(n)for(const r of n)r(e)}function gD(t,e){const n=yD();n&&n.postMessage({key:t,fid:e}),vD()}let os=null;function yD(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=t=>{w1(t.data.key,t.data.fid)}),os}function vD(){v1.size===0&&os&&(os.close(),os=null)}/**
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
 */const _D="firebase-installations-database",wD=1,Ts="firebase-installations-store";let Od=null;function pm(){return Od||(Od=eu(_D,wD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ts)}}})),Od}async function Rc(t,e){const n=xu(t),s=(await pm()).transaction(Ts,"readwrite"),i=s.objectStore(Ts),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&_1(t,e.fid),e}async function x1(t){const e=xu(t),r=(await pm()).transaction(Ts,"readwrite");await r.objectStore(Ts).delete(e),await r.done}async function Eu(t,e){const n=xu(t),s=(await pm()).transaction(Ts,"readwrite"),i=s.objectStore(Ts),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&_1(t,l.fid),l}/**
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
 */async function mm(t){let e;const n=await Eu(t.appConfig,r=>{const s=xD(r),i=ED(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===mf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xD(t){const e=t||{fid:pD(),registrationStatus:0};return E1(e)}function ED(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Es.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=TD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ID(t)}:{installationEntry:e}}async function TD(t,e){try{const n=await dD(t,e);return Rc(t.appConfig,n)}catch(n){throw d1(n)&&n.customData.serverCode===409?await x1(t.appConfig):await Rc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ID(t){let e=await rv(t.appConfig);for(;e.registrationStatus===1;)await y1(100),e=await rv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mm(t);return r||n}return e}function rv(t){return Eu(t,e=>{if(!e)throw Es.create("installation-not-found");return E1(e)})}function E1(t){return SD(t)?{fid:t.fid,registrationStatus:0}:t}function SD(t){return t.registrationStatus===1&&t.registrationTime+l1<Date.now()}/**
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
 */async function bD({appConfig:t,heartbeatServiceProvider:e},n){const r=kD(t,n),s=lD(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:c1,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await g1(()=>fetch(r,l));if(c.ok){const d=await c.json();return f1(d)}else throw await p1("Generate Auth Token",c)}function kD(t,{fid:e}){return`${h1(t)}/${e}/authTokens:generate`}/**
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
 */async function gm(t,e=!1){let n;const r=await Eu(t.appConfig,i=>{if(!T1(i))throw Es.create("not-registered");const o=i.authToken;if(!e&&CD(o))return i;if(o.requestStatus===1)return n=ND(t,e),i;{if(!navigator.onLine)throw Es.create("app-offline");const l=PD(i);return n=AD(t,l),l}});return n?await n:r.authToken}async function ND(t,e){let n=await sv(t.appConfig);for(;n.authToken.requestStatus===1;)await y1(100),n=await sv(t.appConfig);const r=n.authToken;return r.requestStatus===0?gm(t,e):r}function sv(t){return Eu(t,e=>{if(!T1(e))throw Es.create("not-registered");const n=e.authToken;return DD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function AD(t,e){try{const n=await bD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Rc(t.appConfig,r),n}catch(n){if(d1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await x1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rc(t.appConfig,r)}throw n}}function T1(t){return t!==void 0&&t.registrationStatus===2}function CD(t){return t.requestStatus===2&&!RD(t)}function RD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+sD}function PD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function DD(t){return t.requestStatus===1&&t.requestTime+l1<Date.now()}/**
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
 */async function jD(t){const e=t,{installationEntry:n,registrationPromise:r}=await mm(e);return r?r.catch(console.error):gm(e).catch(console.error),n.fid}/**
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
 */async function OD(t,e=!1){const n=t;return await LD(n),(await gm(n,e)).token}async function LD(t){const{registrationPromise:e}=await mm(t);e&&await e}/**
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
 */function MD(t){if(!t||!t.options)throw Ld("App Configuration");if(!t.name)throw Ld("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ld(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ld(t){return Es.create("missing-app-config-values",{valueName:t})}/**
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
 */const I1="installations",VD="installations-internal",FD=t=>{const e=t.getProvider("app").getImmediate(),n=MD(e),r=Wr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},UD=t=>{const e=t.getProvider("app").getImmediate(),n=Wr(e,I1).getImmediate();return{getId:()=>jD(n),getToken:s=>OD(n,s)}};function BD(){Gt(new Vt(I1,FD,"PUBLIC")),Gt(new Vt(VD,UD,"PRIVATE"))}BD();At(a1,fm);At(a1,fm,"esm2017");/**
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
 */const zD="/firebase-messaging-sw.js",$D="/firebase-cloud-messaging-push-scope",S1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",WD="https://fcmregistrations.googleapis.com/v1",b1="google.c.a.c_id",qD="google.c.a.c_l",HD="google.c.a.ts",GD="google.c.a.e";var iv;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(iv||(iv={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ua;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ua||(ua={}));/**
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
 */function Nn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function KD(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Md="fcm_token_details_db",QD=5,ov="fcm_token_object_Store";async function YD(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Md))return null;let e=null;return(await eu(Md,QD,{upgrade:async(r,s,i,o)=>{var l;if(s<2||!r.objectStoreNames.contains(ov))return;const c=o.objectStore(ov),d=await c.index("fcmSenderId").get(t);if(await c.clear(),!!d){if(s===2){const f=d;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Nn(f.vapidKey)}}}else if(s===3){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Nn(f.auth),p256dh:Nn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Nn(f.vapidKey)}}}else if(s===4){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Nn(f.auth),p256dh:Nn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Nn(f.vapidKey)}}}}}})).close(),await Td(Md),await Td("fcm_vapid_details_db"),await Td("undefined"),JD(e)?e:null}function JD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const XD="firebase-messaging-database",ZD=1,da="firebase-messaging-store";let Vd=null;function k1(){return Vd||(Vd=eu(XD,ZD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(da)}}})),Vd}async function ej(t){const e=N1(t),r=await(await k1()).transaction(da).objectStore(da).get(e);if(r)return r;{const s=await YD(t.appConfig.senderId);if(s)return await ym(t,s),s}}async function ym(t,e){const n=N1(t),s=(await k1()).transaction(da,"readwrite");return await s.objectStore(da).put(e,n),await s.done,e}function N1({appConfig:t}){return t.appId}/**
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
 */const tj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ut=new $r("messaging","Messaging",tj);/**
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
 */async function nj(t,e){const n=await _m(t),r=A1(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(vm(t.appConfig),s)).json()}catch(o){throw ut.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ut.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw ut.create("token-subscribe-no-token");return i.token}async function rj(t,e){const n=await _m(t),r=A1(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${vm(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw ut.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ut.create("token-update-failed",{errorInfo:o})}if(!i.token)throw ut.create("token-update-no-token");return i.token}async function sj(t,e){const r={method:"DELETE",headers:await _m(t)};try{const i=await(await fetch(`${vm(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw ut.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw ut.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function vm({projectId:t}){return`${WD}/projects/${t}/registrations`}async function _m({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function A1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==S1&&(s.web.applicationPubKey=r),s}/**
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
 */const ij=7*24*60*60*1e3;async function oj(t){const e=await lj(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Nn(e.getKey("auth")),p256dh:Nn(e.getKey("p256dh"))},r=await ej(t.firebaseDependencies);if(r){if(cj(r.subscriptionOptions,n))return Date.now()>=r.createTime+ij?aj(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await sj(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return av(t.firebaseDependencies,n)}else return av(t.firebaseDependencies,n)}async function aj(t,e){try{const n=await rj(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await ym(t.firebaseDependencies,r),n}catch(n){throw n}}async function av(t,e){const r={token:await nj(t,e),createTime:Date.now(),subscriptionOptions:e};return await ym(t,r),r.token}async function lj(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:KD(e)})}function cj(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function lv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return uj(e,t),dj(e,t),hj(e,t),e}function uj(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function dj(t,e){e.data&&(t.data=e.data)}function hj(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;l&&(t.fcmOptions.link=l);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function fj(t){return typeof t=="object"&&!!t&&b1 in t}/**
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
 */function pj(t){if(!t||!t.options)throw Fd("App Configuration Object");if(!t.name)throw Fd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Fd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Fd(t){return ut.create("missing-app-config-values",{valueName:t})}/**
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
 */class mj{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=pj(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function gj(t){try{t.swRegistration=await navigator.serviceWorker.register(zD,{scope:$D}),t.swRegistration.update().catch(()=>{})}catch(e){throw ut.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function yj(t,e){if(!e&&!t.swRegistration&&await gj(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ut.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function vj(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=S1)}/**
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
 */async function C1(t,e){if(!navigator)throw ut.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ut.create("permission-blocked");return await vj(t,e==null?void 0:e.vapidKey),await yj(t,e==null?void 0:e.serviceWorkerRegistration),oj(t)}/**
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
 */async function _j(t,e,n){const r=wj(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[b1],message_name:n[qD],message_time:n[HD],message_device_time:Math.floor(Date.now()/1e3)})}function wj(t){switch(t){case ua.NOTIFICATION_CLICKED:return"notification_open";case ua.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function xj(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ua.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(lv(n)):t.onMessageHandler.next(lv(n)));const r=n.data;fj(r)&&r[GD]==="1"&&await _j(t,n.messageType,r)}const cv="@firebase/messaging",uv="0.12.12";/**
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
 */const Ej=t=>{const e=new mj(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>xj(e,n)),e},Tj=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>C1(e,r)}};function Ij(){Gt(new Vt("messaging",Ej,"PUBLIC")),Gt(new Vt("messaging-internal",Tj,"PRIVATE")),At(cv,uv),At(cv,uv,"esm2017")}/**
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
 */async function Sj(){try{await Xc()}catch{return!1}return typeof window<"u"&&Jc()&&wp()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function bj(t,e){if(!navigator)throw ut.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function kj(t=tu()){return Sj().then(e=>{if(!e)throw ut.create("unsupported-browser")},e=>{throw ut.create("indexed-db-unsupported")}),Wr(ge(t),"messaging").getImmediate()}async function Nj(t,e){return t=ge(t),C1(t,e)}function Aj(t,e){return t=ge(t),bj(t,e)}Ij();/**
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
 */const Pc="analytics",Cj="firebase_id",Rj="origin",Pj=60*1e3,Dj="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wm="https://www.googletagmanager.com/gtag/js";/**
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
 */const _t=new Zc("@firebase/analytics");/**
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
 */const jj={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Lt=new $r("analytics","Analytics",jj);/**
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
 */function Oj(t){if(!t.startsWith(wm)){const e=Lt.create("invalid-gtag-resource",{gtagURL:t});return _t.warn(e.message),""}return t}function R1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Lj(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Mj(t,e){const n=Lj("firebase-js-sdk-policy",{createScriptURL:Oj}),r=document.createElement("script"),s=`${wm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Vj(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Fj(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await R1(n)).find(d=>d.measurementId===s);c&&await e[c.appId]}}catch(l){_t.error(l)}t("config",s,i)}async function Uj(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await R1(n);for(const c of o){const d=l.find(m=>m.measurementId===c),f=d&&e[d.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){_t.error(i)}}function Bj(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await Uj(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await Fj(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,d]=o;t("get",l,c,d)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){_t.error(l)}}return s}function zj(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Bj(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function $j(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wm)&&n.src.includes(t))return n;return null}/**
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
 */const Wj=30,qj=1e3;class Hj{constructor(e={},n=qj){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const P1=new Hj;function Gj(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Kj(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Gj(r)},i=Dj.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw Lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Qj(t,e=P1,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Lt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Xj;return setTimeout(async()=>{l.abort()},Pj),D1({appId:r,apiKey:s,measurementId:i},o,l,e)}async function D1(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=P1){var i;const{appId:o,measurementId:l}=t;try{await Yj(r,e)}catch(c){if(l)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await Kj(t);return s.deleteThrottleMetadata(o),c}catch(c){const d=c;if(!Jj(d)){if(s.deleteThrottleMetadata(o),l)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw c}const f=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?$y(n,s.intervalMillis,Wj):$y(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,m),_t.debug(`Calling attemptFetch again in ${f} millis`),D1(t,m,r,s)}}function Yj(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Jj(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Xj{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Zj(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}async function eO(t,e,n,r){{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function tO(){if(Jc())try{await Xc()}catch(t){return _t.warn(Lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _t.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nO(t,e,n,r,s,i,o){var l;const c=Qj(t);c.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>_t.error(_)),e.push(c);const d=tO().then(_=>{if(_)return r.getId()}),[f,m]=await Promise.all([c,d]);$j(i)||Mj(i,f.measurementId),s("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[Rj]="firebase",g.update=!0,m!=null&&(g[Cj]=m),s("config",f.measurementId,g),f.measurementId}/**
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
 */let rO=class{constructor(e){this.app=e}_delete(){return delete li[this.app.options.appId],Promise.resolve()}},li={},dv=[];const hv={};let Ud="dataLayer",sO="gtag",fv,xm,pv=!1;function iO(){const t=[];if(_p()&&t.push("This is a browser extension environment."),wp()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});_t.warn(n.message)}}function oO(t,e,n){iO();const r=t.options.appId;if(!r)throw Lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Lt.create("no-api-key");if(li[r]!=null)throw Lt.create("already-exists",{id:r});if(!pv){Vj(Ud);const{wrappedGtag:i,gtagCore:o}=zj(li,dv,hv,Ud,sO);xm=i,fv=o,pv=!0}return li[r]=nO(t,dv,hv,e,fv,Ud,n),new rO(t)}function aO(t=tu()){t=ge(t);const e=Wr(t,Pc);return e.isInitialized()?e.getImmediate():lO(t)}function lO(t,e={}){const n=Wr(t,Pc);if(n.isInitialized()){const s=n.getImmediate();if(gs(e,n.getOptions()))return s;throw Lt.create("already-initialized")}return n.initialize({options:e})}async function cO(){if(_p()||!wp()||!Jc())return!1;try{return await Xc()}catch{return!1}}function uO(t,e,n){t=ge(t),eO(xm,li[t.app.options.appId],e).catch(r=>_t.error(r))}function j1(t,e,n,r){t=ge(t),Zj(xm,li[t.app.options.appId],e,n,r).catch(s=>_t.error(s))}const mv="@firebase/analytics",gv="0.10.8";function dO(){Gt(new Vt(Pc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return oO(r,s,n)},"PUBLIC")),Gt(new Vt("analytics-internal",t,"PRIVATE")),At(mv,gv),At(mv,gv,"esm2017");function t(e){try{const n=e.getProvider(Pc).getImmediate();return{logEvent:(r,s,i)=>j1(n,r,s,i)}}catch(n){throw Lt.create("interop-component-reg-failed",{reason:n})}}}dO();const hO={apiKey:"AIzaSyD7VNKg6Gqam8qHZiHUpzgleVYbk8Gc9qU",authDomain:"bankroll-2ccb4.firebaseapp.com",databaseURL:"https://bankroll-2ccb4-default-rtdb.firebaseio.com",projectId:"bankroll-2ccb4",storageBucket:"bankroll-2ccb4.firebasestorage.app",messagingSenderId:"443440711718",appId:"1:443440711718:web:dc3f58dfe81324edc3bee7",measurementId:"G-QZ2NEGJV6D"},Tu=Jw(hO),Vs=nR(Tu),he=z2(Tu);let O1=null;const fO=async()=>{try{await cO()&&(O1=aO(Tu))}catch(t){console.warn("Firebase Analytics initialization failed:",t)}};fO();const vl=O1;let Bd=null;const pO=()=>{if(!Bd)try{Bd=kj(Tu)}catch(t){return console.error("Error initializing messaging:",t),null}return Bd},mO=async()=>{if("serviceWorker"in navigator)try{const t=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/"});return console.log("Service Worker registered with scope:",t.scope),t}catch(t){return console.error("Service Worker registration failed:",t),null}return null},L1=D.createContext();function Zn(){return D.useContext(L1)}function gO({children:t}){const[e,n]=D.useState(null),[r,s]=D.useState(!0);async function i(f,m,g){var _,A;try{console.log("Starting signup process for:",f);const R=(await Ix(Vs,f,m)).user;console.log("User authentication created:",R.uid);const E=new Date(g.birthday),w=ct.fromDate(E),x=(_=g.sleeperUsername)!=null&&_.startsWith("@")?g.sleeperUsername:`@${g.sleeperUsername}`,j=(A=g.venmoUsername)!=null&&A.startsWith("@")?g.venmoUsername:`@${g.venmoUsername}`;if(!g.username)throw new Error("Username is required");const V={firstName:g.firstName,lastName:g.lastName,email:g.email,username:g.username,venmoUsername:j,address1:g.address1||"",address2:g.address2||null,city:g.city||"",state:g.state||"",postalCode:g.postalCode||"",birthday:w,phoneNumber:g.phoneNumber,sleeperUsername:x,promoCode:g.promoCode||null,dwollaCustomerId:"",dwollaBalance:0,bonusBalance:0,id:R.uid,lastUpdated:us(),lastBalanceUpdate:us(),createdAt:us()};return console.log("Creating Firestore document for user:",V),await Cc(it(he,"users",R.uid),V),console.log("Firestore document created successfully"),R}catch(C){throw console.error("Signup error:",{code:C.code,message:C.message,stack:C.stack}),C}}async function o(f,m){try{let g=f;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f)){const R=_r(he,"users"),E=wr(R,xr("username","==",f)),w=await Er(E);if(w.empty)throw new Error("No user found with this username");g=w.docs[0].data().email}return(await BA(Vs,g,m)).user}catch(g){throw console.error("Login error:",g),g}}async function l(){try{await qA(Vs)}catch(f){throw console.error("Error in logout:",f),f}}async function c(f){try{await UA(Vs,f)}catch(m){throw console.error("Error in password reset:",m),m}}D.useEffect(()=>WA(Vs,async m=>{if(m)try{const g=await ff(it(he,"users",m.uid));g.exists()?n({...m,...g.data()}):n(m)}catch(g){console.error("Error fetching user data:",g),n(m)}else n(null);s(!1)}),[]);const d={currentUser:e,signup:i,login:o,logout:l,resetPassword:c,loading:r};return u.jsx(L1.Provider,{value:d,children:!r&&t})}const zd="https://api.sleeper.app/v1";class gf{static async getUser(e){try{const n=await fetch(`${zd}/user/${e}`);if(!n.ok)throw new Error("User not found");return await n.json()}catch(n){throw n}}static async getUserLeagues(e,n="2024",r="nfl"){try{const s=await fetch(`${zd}/user/${e}/leagues/${r}/${n}`);if(!s.ok)throw new Error("Failed to fetch leagues");return await s.json()}catch(s){throw s}}static async getLeagueUsers(e){try{const n=await fetch(`${zd}/league/${e}/users`);if(!n.ok)throw new Error("Failed to fetch league users");return await n.json()}catch(n){throw n}}static getAvatarUrl(e){return e?`https://sleepercdn.com/avatars/${e}`:null}static getLeagueAvatarUrl(e){return e?`https://sleepercdn.com/avatars/${e}`:null}}const M1=D.createContext(),V1=()=>{const t=D.useContext(M1);if(!t)throw new Error("useSleeperContext must be used within a SleeperProvider");return t},yO=({children:t})=>{const[e,n]=D.useState(()=>{const g=localStorage.getItem("sleeperUser");return g?JSON.parse(g):null}),[r,s]=D.useState(()=>{const g=localStorage.getItem("sleeperLeagues");return g?JSON.parse(g):[]}),[i,o]=D.useState(!1),[l,c]=D.useState("");D.useEffect(()=>{e?localStorage.setItem("sleeperUser",JSON.stringify(e)):localStorage.removeItem("sleeperUser")},[e]),D.useEffect(()=>{r.length>0?localStorage.setItem("sleeperLeagues",JSON.stringify(r)):localStorage.removeItem("sleeperLeagues")},[r]);const m={user:e,leagues:r,isLoading:i,errorMessage:l,fetchUser:async g=>{o(!0),c("");try{const _=await gf.getUser(g);n(_);const A=await gf.getUserLeagues(_.user_id);s(A)}catch(_){c("Failed to find Sleeper user"),console.error("Error fetching Sleeper user:",_)}finally{o(!1)}},disconnectSleeper:()=>{n(null),s([]),localStorage.removeItem("sleeperUser"),localStorage.removeItem("sleeperLeagues")}};return u.jsx(M1.Provider,{value:m,children:t})};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,...d},f)=>D.createElement("svg",{ref:f,...vO,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${_O(t)}`,l].join(" "),...d},[...e.map(([m,g])=>D.createElement(m,g)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=oe("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=oe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=oe("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=oe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=oe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=oe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=oe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=oe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=oe("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=oe("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=oe("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=oe("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=oe("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=oe("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=oe("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=oe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=oe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=oe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=oe("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=oe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=oe("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=oe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=oe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=oe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=oe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=oe("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=oe("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=oe("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=oe("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);function UO(){const{currentUser:t,loading:e}=Zn(),n=Kt(),[r,s]=Tf.useState(""),i=Math.floor(Math.random()*30)+1,o=[1,30].includes(i)?".jpeg":i===16?".jpg":".png",l=`/images/profile_${i}${o}`;if(e)return u.jsx("div",{className:"min-h-screen bg-black flex items-center justify-center",children:u.jsx("div",{className:"text-white",children:"Loading..."})});if(!t)return u.jsx(Kb,{to:"/login"});const c=[{name:"Home",path:"/banking"},{name:"My Leagues",path:"/my-leagues"},{name:"Send Money",path:"/send-money"},{name:"Platforms",path:"/platforms"}];return u.jsxs("div",{className:"min-h-screen bg-black",children:[u.jsx("header",{className:"bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50",children:u.jsx("div",{className:"container mx-auto px-4",children:u.jsxs("div",{className:"flex items-center justify-between h-16",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx(Vy,{to:"/banking",children:u.jsx("img",{src:"/images/FullLogo_NoBuffer.jpg",alt:"Bankroll Logo",className:"h-11 w-auto"})})}),u.jsx("nav",{className:"hidden md:flex space-x-8",children:c.map(d=>u.jsx(Vy,{to:d.path,className:"text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors",children:d.name},d.path))}),u.jsx("div",{className:"flex-1 max-w-md mx-4",children:u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-y-0 left-3 flex items-center pointer-events-none",children:u.jsx(jO,{className:"h-5 w-5 text-gray-400"})}),u.jsx("input",{type:"text",placeholder:"Search...",value:r,onChange:d=>s(d.target.value),className:"w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"})]})}),u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("span",{className:"text-gray-300",children:"Profile"}),u.jsx("button",{onClick:()=>n("/profile"),className:"w-8 h-8 rounded-full overflow-hidden ring-2 ring-purple-500/20 hover:ring-purple-500/40 transition-all",children:u.jsx("img",{src:l,alt:"Profile",className:"w-full h-full object-cover"})})]})]})})}),u.jsx("div",{className:"container mx-auto px-4 py-8",children:u.jsx(Qb,{})})]})}const BO=()=>{const t=new Date().getFullYear();return u.jsx("footer",{className:"border-t border-purple-900/50 backdrop-blur-sm mt-20",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsx("img",{src:"/images/FullLogo_NoBuffer.jpg",alt:"Bankroll",className:"h-8 w-auto"}),u.jsx("p",{className:"text-sm text-purple-200",children:"Your trusted platform for smart betting and bankroll management."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Products"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Spend Card"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Bankroll Manager"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Analytics"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Mobile App"})})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Company"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"About Us"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Careers"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Contact"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Blog"})})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Legal"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Privacy Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Terms of Service"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Responsible Gaming"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Security"})})]})]})]}),u.jsx("div",{className:"border-t border-purple-900/50 mt-12 pt-8",children:u.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[u.jsxs("p",{className:"text-sm text-purple-200 mb-4 md:mb-0",children:["© ",t," Bankroll. All rights reserved."]}),u.jsxs("div",{className:"flex space-x-6",children:[u.jsx("a",{href:"#",className:"text-purple-200 hover:text-white transition-colors","aria-label":"Twitter",children:u.jsx(MO,{className:"h-5 w-5"})}),u.jsx("a",{href:"#",className:"text-purple-200 hover:text-white transition-colors","aria-label":"Instagram",children:u.jsx(kO,{className:"h-5 w-5"})}),u.jsx("a",{href:"#",className:"text-purple-200 hover:text-white transition-colors","aria-label":"YouTube",children:u.jsx(FO,{className:"h-5 w-5"})}),u.jsx("a",{href:"#",className:"text-purple-200 hover:text-white transition-colors","aria-label":"Facebook",children:u.jsx(bO,{className:"h-5 w-5"})})]})]})})]})})},Tm=()=>u.jsxs("div",{className:"fixed inset-0 w-full h-full -z-10",children:[u.jsx("div",{className:"absolute inset-0 w-full h-full bg-[size:150%_150%] animate-gradient bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 opacity-90",style:{transform:"translateZ(0)"}}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-blue-900/10",style:{transform:"translateZ(0)"}}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/50",style:{transform:"translateZ(0)"}})]}),zO=()=>{const t=Kt(),[e,n]=D.useState(!1),[r,s]=D.useState(!1),i=()=>{t("/signup")},o=()=>{t("/login")},l=[{name:"Spend Card",href:"#"},{name:"Invest",href:"#"},{name:"Bankroll Manager",href:"#"},{name:"Learn",href:"#"},{name:"Support",href:"#"}];return u.jsxs("div",{className:"min-h-screen text-white relative overflow-x-hidden",children:[u.jsx(Tm,{}),u.jsx("nav",{className:"border-b border-purple-900/50 backdrop-blur-sm sticky top-0 z-50",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[u.jsxs("div",{className:"flex justify-between items-center h-16",children:[u.jsxs("div",{className:"flex items-center space-x-8",children:[u.jsx("div",{className:"flex-shrink-0 cursor-pointer",onClick:()=>t("/"),children:u.jsx("img",{src:"/images/FullLogo_NoBuffer.jpg",alt:"Bankroll Logo",className:"h-10 w-auto"})}),u.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[u.jsxs("div",{className:"relative",children:[u.jsxs("button",{className:"flex items-center space-x-1 hover:text-purple-400 transition-colors duration-300",onClick:()=>n(!e),children:[u.jsx("span",{children:"What We Offer"}),u.jsx(_v,{className:"h-4 w-4"})]}),e&&u.jsxs("div",{className:"absolute top-full left-0 mt-2 w-48 bg-purple-900/90 backdrop-blur-sm rounded-lg shadow-lg py-1 border border-purple-700",children:[u.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-purple-800/50 transition-colors duration-300",children:"Feature 1"}),u.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-purple-800/50 transition-colors duration-300",children:"Feature 2"}),u.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-purple-800/50 transition-colors duration-300",children:"Feature 3"})]})]}),l.map(c=>u.jsx("a",{href:c.href,className:"hover:text-purple-400 transition-colors duration-300",children:c.name},c.name))]})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"hidden md:block",children:[u.jsx("button",{className:"px-4 py-2 text-white hover:text-purple-400 transition-colors duration-300",onClick:o,children:"Log in"}),u.jsx("button",{className:"px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25",onClick:i,children:"Sign up"})]}),u.jsx("button",{className:"md:hidden p-2 rounded-lg hover:bg-purple-800/50 transition-colors duration-300",onClick:()=>s(!r),children:r?u.jsx(Ca,{className:"h-6 w-6"}):u.jsx(RO,{className:"h-6 w-6"})})]})]}),r&&u.jsx("div",{className:"md:hidden py-4 border-t border-purple-900/50",children:u.jsxs("div",{className:"flex flex-col space-y-4",children:[u.jsxs("button",{className:"flex items-center justify-between px-4 py-2 hover:bg-purple-800/50 transition-colors duration-300",onClick:()=>n(!e),children:[u.jsx("span",{children:"What We Offer"}),u.jsx(_v,{className:"h-4 w-4"})]}),e&&u.jsxs("div",{className:"bg-purple-900/50 py-2 px-8 space-y-2",children:[u.jsx("a",{href:"#",className:"block py-2 hover:text-purple-400 transition-colors duration-300",children:"Feature 1"}),u.jsx("a",{href:"#",className:"block py-2 hover:text-purple-400 transition-colors duration-300",children:"Feature 2"}),u.jsx("a",{href:"#",className:"block py-2 hover:text-purple-400 transition-colors duration-300",children:"Feature 3"})]}),l.map(c=>u.jsx("a",{href:c.href,className:"block px-4 py-2 hover:bg-purple-800/50 transition-colors duration-300",children:c.name},c.name)),u.jsxs("div",{className:"px-4 pt-4 flex flex-col space-y-2",children:[u.jsx("button",{className:"w-full px-4 py-2 text-center border border-purple-500 rounded-lg hover:bg-purple-800/50 transition-colors duration-300",onClick:o,children:"Log in"}),u.jsx("button",{className:"w-full px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25",onClick:i,children:"Sign up"})]})]})})]})}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 py-16 md:py-32",children:u.jsxs("div",{className:"text-center",children:[u.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent",children:"Your new betting wallet"}),u.jsx("p",{className:"text-xl md:text-2xl text-purple-300 mb-8 md:mb-12",children:"Coming August 2024"}),u.jsx("button",{className:"px-6 md:px-8 py-3 md:py-4 bg-green-500 text-white rounded-full text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25",onClick:i,children:"Join the waitlist"})]})}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 py-16 md:py-20",children:u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",children:[u.jsxs("div",{className:"bg-purple-900/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 transform hover:scale-105 border border-purple-700/50",children:[u.jsx("h3",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Smart Spending"}),u.jsx("p",{className:"text-purple-200",children:"Track your spending and earn rewards on every transaction"})]}),u.jsxs("div",{className:"bg-purple-900/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 transform hover:scale-105 border border-purple-700/50",children:[u.jsx("h3",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Intelligent Investing"}),u.jsx("p",{className:"text-purple-200",children:"Make informed decisions with our advanced analytics"})]}),u.jsxs("div",{className:"bg-purple-900/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 transform hover:scale-105 border border-purple-700/50",children:[u.jsx("h3",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Bankroll Management"}),u.jsx("p",{className:"text-purple-200",children:"Keep your finances in check with our powerful tools"})]})]})}),u.jsx(BO,{})]})};function W1(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=W1(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function $O(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=W1(t))&&(r&&(r+=" "),r+=e);return r}const Im="-",WO=t=>{const e=HO(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split(Im);return l[0]===""&&l.length!==1&&l.shift(),q1(l,e)||qO(o)},getConflictingClassGroupIds:(o,l)=>{const c=n[o]||[];return l&&r[o]?[...c,...r[o]]:c}}},q1=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?q1(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Im);return(o=e.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},xv=/^\[(.+)\]$/,qO=t=>{if(xv.test(t)){const e=xv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},HO=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return KO(Object.entries(t.classGroups),n).forEach(([i,o])=>{yf(o,r,i,e)}),r},yf=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Ev(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(GO(s)){yf(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{yf(o,Ev(e,i),n,r)})})},Ev=(t,e)=>{let n=t;return e.split(Im).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},GO=t=>t.isThemeGetter,KO=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[n,s]}):t,QO=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},H1="!",YO=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=l=>{const c=[];let d=0,f=0,m;for(let R=0;R<l.length;R++){let E=l[R];if(d===0){if(E===s&&(r||l.slice(R,R+i)===e)){c.push(l.slice(f,R)),f=R+i;continue}if(E==="/"){m=R;continue}}E==="["?d++:E==="]"&&d--}const g=c.length===0?l:l.substring(f),_=g.startsWith(H1),A=_?g.substring(1):g,C=m&&m>f?m-f:void 0;return{modifiers:c,hasImportantModifier:_,baseClassName:A,maybePostfixModifierPosition:C}};return n?l=>n({className:l,parseClassName:o}):o},JO=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},XO=t=>({cache:QO(t.cacheSize),parseClassName:YO(t),...WO(t)}),ZO=/\s+/,e4=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split(ZO);let l="";for(let c=o.length-1;c>=0;c-=1){const d=o[c],{modifiers:f,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:_}=n(d);let A=!!_,C=r(A?g.substring(0,_):g);if(!C){if(!A){l=d+(l.length>0?" "+l:l);continue}if(C=r(g),!C){l=d+(l.length>0?" "+l:l);continue}A=!1}const R=JO(f).join(":"),E=m?R+H1:R,w=E+C;if(i.includes(w))continue;i.push(w);const x=s(C,A);for(let j=0;j<x.length;++j){const V=x[j];i.push(E+V)}l=d+(l.length>0?" "+l:l)}return l};function t4(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=G1(e))&&(r&&(r+=" "),r+=n);return r}const G1=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=G1(t[r]))&&(n&&(n+=" "),n+=e);return n};function n4(t,...e){let n,r,s,i=o;function o(c){const d=e.reduce((f,m)=>m(f),t());return n=XO(d),r=n.cache.get,s=n.cache.set,i=l,l(c)}function l(c){const d=r(c);if(d)return d;const f=e4(c,n);return s(c,f),f}return function(){return i(t4.apply(null,arguments))}}const ve=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},K1=/^\[(?:([a-z-]+):)?(.+)\]$/i,r4=/^\d+\/\d+$/,s4=new Set(["px","full","screen"]),i4=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,o4=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,a4=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,l4=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,c4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,bn=t=>ci(t)||s4.has(t)||r4.test(t),ir=t=>Ui(t,"length",y4),ci=t=>!!t&&!Number.isNaN(Number(t)),Wd=t=>Ui(t,"number",ci),uo=t=>!!t&&Number.isInteger(Number(t)),u4=t=>t.endsWith("%")&&ci(t.slice(0,-1)),Z=t=>K1.test(t),or=t=>i4.test(t),d4=new Set(["length","size","percentage"]),h4=t=>Ui(t,d4,Q1),f4=t=>Ui(t,"position",Q1),p4=new Set(["image","url"]),m4=t=>Ui(t,p4,_4),g4=t=>Ui(t,"",v4),ho=()=>!0,Ui=(t,e,n)=>{const r=K1.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},y4=t=>o4.test(t)&&!a4.test(t),Q1=()=>!1,v4=t=>l4.test(t),_4=t=>c4.test(t),w4=()=>{const t=ve("colors"),e=ve("spacing"),n=ve("blur"),r=ve("brightness"),s=ve("borderColor"),i=ve("borderRadius"),o=ve("borderSpacing"),l=ve("borderWidth"),c=ve("contrast"),d=ve("grayscale"),f=ve("hueRotate"),m=ve("invert"),g=ve("gap"),_=ve("gradientColorStops"),A=ve("gradientColorStopPositions"),C=ve("inset"),R=ve("margin"),E=ve("opacity"),w=ve("padding"),x=ve("saturate"),j=ve("scale"),V=ve("sepia"),U=ve("skew"),b=ve("space"),v=ve("translate"),T=()=>["auto","contain","none"],k=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto",Z,e],S=()=>[Z,e],I=()=>["",bn,ir],de=()=>["auto",ci,Z],Ve=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ft=()=>["solid","dashed","dotted","double","none"],Fe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],z=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",Z],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],se=()=>[ci,Z];return{cacheSize:500,separator:":",theme:{colors:[ho],spacing:[bn,ir],blur:["none","",or,Z],brightness:se(),borderColor:[t],borderRadius:["none","","full",or,Z],borderSpacing:S(),borderWidth:I(),contrast:se(),grayscale:G(),hueRotate:se(),invert:G(),gap:S(),gradientColorStops:[t],gradientColorStopPositions:[u4,ir],inset:N(),margin:N(),opacity:se(),padding:S(),saturate:se(),scale:se(),sepia:G(),skew:se(),space:S(),translate:S()},classGroups:{aspect:[{aspect:["auto","square","video",Z]}],container:["container"],columns:[{columns:[or]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ve(),Z]}],overflow:[{overflow:k()}],"overflow-x":[{"overflow-x":k()}],"overflow-y":[{"overflow-y":k()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",uo,Z]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Z]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",uo,Z]}],"grid-cols":[{"grid-cols":[ho]}],"col-start-end":[{col:["auto",{span:["full",uo,Z]},Z]}],"col-start":[{"col-start":de()}],"col-end":[{"col-end":de()}],"grid-rows":[{"grid-rows":[ho]}],"row-start-end":[{row:["auto",{span:[uo,Z]},Z]}],"row-start":[{"row-start":de()}],"row-end":[{"row-end":de()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Z]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[R]}],mx:[{mx:[R]}],my:[{my:[R]}],ms:[{ms:[R]}],me:[{me:[R]}],mt:[{mt:[R]}],mr:[{mr:[R]}],mb:[{mb:[R]}],ml:[{ml:[R]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Z,e]}],"min-w":[{"min-w":[Z,e,"min","max","fit"]}],"max-w":[{"max-w":[Z,e,"none","full","min","max","fit","prose",{screen:[or]},or]}],h:[{h:[Z,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Z,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Z,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Z,e,"auto","min","max","fit"]}],"font-size":[{text:["base",or,ir]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Wd]}],"font-family":[{font:[ho]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Z]}],"line-clamp":[{"line-clamp":["none",ci,Wd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",bn,Z]}],"list-image":[{"list-image":["none",Z]}],"list-style-type":[{list:["none","disc","decimal",Z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[E]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[E]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ft(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",bn,ir]}],"underline-offset":[{"underline-offset":["auto",bn,Z]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:S()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[E]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ve(),f4]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",h4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},m4]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[A]}],"gradient-via-pos":[{via:[A]}],"gradient-to-pos":[{to:[A]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[E]}],"border-style":[{border:[...ft(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[E]}],"divide-style":[{divide:ft()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...ft()]}],"outline-offset":[{"outline-offset":[bn,Z]}],"outline-w":[{outline:[bn,ir]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:I()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[E]}],"ring-offset-w":[{"ring-offset":[bn,ir]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",or,g4]}],"shadow-color":[{shadow:[ho]}],opacity:[{opacity:[E]}],"mix-blend":[{"mix-blend":[...Fe(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Fe()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",or,Z]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[m]}],saturate:[{saturate:[x]}],sepia:[{sepia:[V]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[E]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[V]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Z]}],duration:[{duration:se()}],ease:[{ease:["linear","in","out","in-out",Z]}],delay:[{delay:se()}],animate:[{animate:["none","spin","ping","pulse","bounce",Z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[uo,Z]}],"translate-x":[{"translate-x":[v]}],"translate-y":[{"translate-y":[v]}],"skew-x":[{"skew-x":[U]}],"skew-y":[{"skew-y":[U]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[bn,ir,Wd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},x4=n4(w4);function Bi(...t){return x4($O(t))}const ze=D.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Bi("rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",t),...e}));ze.displayName="Card";const es=D.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Bi("flex flex-col space-y-1.5 p-6",t),...e}));es.displayName="CardHeader";const ts=D.forwardRef(({className:t,...e},n)=>u.jsx("h3",{ref:n,className:Bi("text-2xl font-semibold leading-none tracking-tight",t),...e}));ts.displayName="CardTitle";const E4=D.forwardRef(({className:t,...e},n)=>u.jsx("p",{ref:n,className:Bi("text-sm text-gray-500 dark:text-gray-400",t),...e}));E4.displayName="CardDescription";const Ge=D.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Bi("p-6 pt-0",t),...e}));Ge.displayName="CardContent";const T4=D.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Bi("flex items-center p-6 pt-0",t),...e}));T4.displayName="CardFooter";const Y1=({isOpen:t,onClose:e,title:n,children:r})=>t?u.jsxs("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-32",children:[u.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm",onClick:e}),u.jsxs("div",{className:"relative bg-gray-900 rounded-xl w-full max-w-md mx-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-800",children:[u.jsx("h2",{className:"text-xl font-semibold text-white",children:n}),u.jsx("button",{onClick:e,className:"p-1 hover:bg-gray-800 rounded-lg transition-colors",children:u.jsx(Ca,{className:"h-5 w-5 text-gray-400"})})]}),u.jsx("div",{className:"p-4",children:r})]})]}):null;class I4{async createGroup(e,n,r,s=[],i="private"){try{const o=crypto.randomUUID(),l=`https://onbankroll.com/group/${o}`,c=[r,...s],d={id:o,name:e,emoji:n,ownerId:r,members:c,pendingMembers:[],dateCreated:new Date,isHidden:!1,visibility:i,inviteLink:l,status:"Active",sleeperLeagueId:null};await Cc(it(he,"groups",o),{...d,dateCreated:us()});const f=yl(he);return c.forEach(m=>{const g=it(he,"users",m);f.update(g,{groups:Dd(o)})}),await f.commit(),d}catch(o){throw console.error("Error creating group:",o),o}}async isSleeperLeagueGroup(e){try{const n=_r(he,"groups"),r=wr(n,xr("sleeperLeagueId","==",e));return!(await Er(r)).empty}catch(n){return console.error("Error checking Sleeper league group:",n),!1}}async createSleeperLeagueGroup(e,n,r,s,i){try{const o=await this.createGroup(e,n,r,s,"private");return await pf(it(he,"groups",o.id),{sleeperLeagueId:i}),{...o,sleeperLeagueId:i}}catch(o){throw console.error("Error creating Sleeper league group:",o),o}}async deleteGroup(e,n){try{const r=it(he,"groups",e),s=await Er(wr(_r(he,"groups"),xr("id","==",e)));if(!s.empty){const i=s.docs[0].data();if(i.ownerId!==n)throw new Error("Only the group owner can delete the group");const o=yl(he);o.delete(r),i.members.forEach(l=>{const c=it(he,"users",l);o.update(c,{groups:jd(e)})}),await o.commit()}}catch(r){throw console.error("Error deleting group:",r),r}}async leaveGroup(e,n){try{const r=it(he,"groups",e),s=await Er(wr(_r(he,"groups"),xr("id","==",e)));if(!s.empty){if(s.docs[0].data().ownerId===n)throw new Error("Group owner cannot leave the group");const o=yl(he);o.update(r,{members:jd(n)});const l=it(he,"users",n);o.update(l,{groups:jd(e)}),await o.commit()}}catch(r){throw console.error("Error leaving group:",r),r}}async addMembers(e,n){try{const r=it(he,"groups",e),s=await Er(wr(_r(he,"groups"),xr("id","==",e)));if(!s.empty){if(s.docs[0].data().members.length+n.length>50)throw new Error("Group has reached maximum capacity of 50 members");const o=yl(he);o.update(r,{members:Dd(...n)}),n.forEach(l=>{const c=it(he,"users",l);o.update(c,{groups:Dd(e)})}),await o.commit()}}catch(r){throw console.error("Error adding members:",r),r}}}const vf=new I4,S4=["😎","🍽️","🏂","🏠","✈️","🍕","🎉","🏈","🏀","⛱️","🛍️","💃","🎁","☀️","🚗"],b4=({onSuccess:t,onClose:e})=>{const{currentUser:n}=Zn(),r=Kt(),[s,i]=D.useState(""),[o,l]=D.useState(""),[c,d]=D.useState(""),[f,m]=D.useState(!1),g=async _=>{if(_.preventDefault(),!!n){m(!0),d("");try{const A=await vf.createGroup(s,o,n.uid,[],"private");t?t():r(`/group/${A.id}`),e==null||e()}catch(A){d("Failed to create group"),console.error(A)}finally{m(!1)}}};return u.jsxs("form",{onSubmit:g,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-white mb-2",children:"Group Name"}),u.jsx("input",{type:"text",value:s,onChange:_=>i(_.target.value),className:`w-full px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-lg
            text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500`,placeholder:"Enter group name",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-white mb-2",children:"Choose an emoji"}),u.jsx("div",{className:"grid grid-cols-5 gap-4",children:S4.map(_=>u.jsx("button",{type:"button",onClick:()=>l(_),className:`w-12 h-12 flex items-center justify-center rounded-lg
                ${o===_?"bg-purple-500":"bg-purple-900/30"}
                hover:bg-purple-800/50 transition-colors`,children:u.jsx("span",{className:"text-2xl",children:_})},_))})]}),c&&u.jsx("div",{className:"text-red-500 text-sm",children:c}),u.jsxs("div",{className:"flex space-x-4",children:[u.jsx("button",{type:"submit",disabled:f||!s||!o,className:`flex-1 py-3 bg-purple-500 text-white rounded-lg
            hover:bg-purple-600 transition-colors disabled:opacity-50`,children:f?"Creating...":"Create Group"}),e&&u.jsx("button",{type:"button",onClick:e,className:`px-6 py-3 bg-gray-700 text-white rounded-lg
              hover:bg-gray-600 transition-colors`,children:"Cancel"})]})]})},k4=()=>{const{currentUser:t}=Zn(),[e,n]=D.useState([]),[r,s]=D.useState(!0),[i,o]=D.useState(!1);return D.useEffect(()=>{(async()=>{if(t)try{const c=wr(_r(he,"groups"),xr("members","array-contains",t.uid)),f=(await Er(c)).docs.map(m=>m.data());n(f)}catch(c){console.error("Error fetching groups:",c)}finally{s(!1)}})()},[t]),r?u.jsx("div",{className:"text-center py-4",children:u.jsx("p",{className:"text-gray-400",children:"Loading groups..."})}):u.jsxs("div",{className:"space-y-4",children:[u.jsxs("button",{onClick:()=>o(!0),className:"w-full p-4 bg-purple-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-purple-600 transition-colors",children:[u.jsx(z1,{className:"h-5 w-5"}),u.jsx("span",{children:"Create New Group"})]}),u.jsx(Y1,{isOpen:i,onClose:()=>o(!1),title:"Create New Group",children:u.jsx(b4,{onSuccess:()=>{o(!1),window.location.reload()},onClose:()=>o(!1)})}),e.length>0?u.jsx("div",{className:"space-y-4",children:e.map(l=>u.jsx(ze,{className:"bg-gray-900/50 border-purple-500/20 hover:bg-gray-900/70 transition-colors cursor-pointer",children:u.jsx(Ge,{className:"p-4",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("span",{className:"text-2xl",children:l.emoji}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-medium text-white",children:l.name}),u.jsxs("p",{className:"text-sm text-gray-400",children:[l.members.length," members"]})]})]}),u.jsx(Em,{className:"h-5 w-5 text-gray-400"})]})})},l.id))}):u.jsx("div",{className:"text-center py-8",children:u.jsx("p",{className:"text-gray-400",children:"No groups yet. Create one to get started!"})})]})},N4=()=>{const{currentUser:t,logout:e}=Zn(),[n,r]=D.useState(!1),[s,i]=D.useState("wallet"),[o,l]=D.useState(0),[c,d]=D.useState(!1),f=Kt(),m=Math.floor(Math.random()*30)+1,g=[1,30].includes(m)?".jpeg":m===16?".jpg":".png",_=`/images/profile_${m}${g}`;D.useEffect(()=>{(async()=>{if(t)try{const x=_r(he,"groups"),j=wr(x,xr("members","array-contains",t.uid)),V=await Er(j);l(V.size)}catch(x){console.error("Error fetching group count:",x)}})()},[t]);const A=async()=>{try{await e(),f("/")}catch(w){console.error("Error signing out:",w)}},C=()=>{d(!0),i("groups")},R=w=>{r(!1),f(w)},E=()=>{switch(s){case"wallet":return u.jsx(ze,{className:"bg-white",children:u.jsxs(Ge,{className:"p-6 space-y-4",children:[u.jsx("h3",{className:"text-gray-500 text-center",children:"Bankroll Balance"}),u.jsx("div",{className:"text-4xl font-bold text-center text-black",children:"$0.00"}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("button",{className:"p-3 bg-blue-50 rounded-lg text-blue-500 font-medium flex items-center justify-center space-x-2",children:[u.jsx("span",{children:"↔"}),u.jsx("span",{children:"Transfer"})]}),u.jsxs("button",{className:"p-3 bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2",children:[u.jsx("span",{children:"+"}),u.jsx("span",{children:"Add Money"})]})]})]})});case"transactions":return u.jsx("div",{className:"text-center py-8",children:u.jsx("p",{className:"text-gray-400",children:"No transactions yet"})});default:return null}};return u.jsxs("div",{className:"max-w-lg mx-auto p-6 space-y-6 relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-8",children:[u.jsx("h1",{className:"text-2xl font-bold",children:"Profile"}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("button",{className:"relative",children:[u.jsx(F1,{className:"h-6 w-6 text-gray-400"}),u.jsx("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:"3"})]}),u.jsx("button",{onClick:()=>r(!n),className:"relative",children:u.jsx(OO,{className:"h-6 w-6 text-gray-400"})})]})]}),n&&u.jsxs("div",{className:"absolute right-0 top-16 w-80 bg-gray-900 rounded-xl shadow-lg z-50 overflow-hidden border border-gray-800",children:[u.jsx("div",{className:"p-4 border-b border-gray-800",children:u.jsx("h3",{className:"text-lg font-semibold text-white",children:"Settings"})}),u.jsxs("div",{className:"divide-y divide-gray-800",children:[u.jsxs("button",{onClick:()=>R("/settings/account"),className:"w-full px-4 py-3 flex items-center justify-between text-gray-300 hover:bg-gray-800 transition-colors",children:[u.jsx("span",{children:"Account Settings"}),u.jsx(_l,{className:"h-5 w-5"})]}),u.jsxs("button",{onClick:()=>R("/settings/privacy"),className:"w-full px-4 py-3 flex items-center justify-between text-gray-300 hover:bg-gray-800 transition-colors",children:[u.jsx("span",{children:"Privacy"}),u.jsx(_l,{className:"h-5 w-5"})]}),u.jsxs("button",{onClick:()=>R("/settings/notifications"),className:"w-full px-4 py-3 flex items-center justify-between text-gray-300 hover:bg-gray-800 transition-colors",children:[u.jsx("span",{children:"Notifications"}),u.jsx(_l,{className:"h-5 w-5"})]}),u.jsxs("button",{onClick:()=>R("/settings/help"),className:"w-full px-4 py-3 flex items-center justify-between text-gray-300 hover:bg-gray-800 transition-colors",children:[u.jsx("span",{children:"Help Center"}),u.jsx(_l,{className:"h-5 w-5"})]}),u.jsx("button",{onClick:A,className:"w-full px-4 py-3 text-left text-red-500 hover:bg-gray-800 transition-colors",children:"Sign Out"})]})]}),u.jsxs("div",{className:"text-center space-y-3",children:[u.jsx("div",{className:"w-24 h-24 mx-auto rounded-full overflow-hidden",children:u.jsx("img",{src:_,alt:"Profile",className:"w-full h-full object-cover"})}),u.jsx("h2",{className:"text-3xl font-bold",children:"Jackson Fitzgerald"}),u.jsx("p",{className:"text-gray-400 text-lg",children:"#jacksonaa"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx(ze,{className:"bg-white cursor-pointer hover:bg-gray-50 transition-colors",onClick:C,children:u.jsxs(Ge,{className:"p-6 text-center",children:[u.jsx("div",{className:"text-4xl font-bold text-black",children:o}),u.jsx("div",{className:"text-gray-600",children:"Active groups"})]})}),u.jsx(ze,{className:"bg-white",children:u.jsxs(Ge,{className:"p-6 text-center",children:[u.jsx("div",{className:"text-4xl font-bold text-black",children:"6"}),u.jsx("div",{className:"text-blue-500 text-sm",children:"See Friends on Bankroll"})]})})]}),u.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[u.jsx("button",{className:`p-4 rounded-lg font-medium ${s==="wallet"?"bg-white text-black":"bg-gray-200 text-gray-600"}`,onClick:()=>i("wallet"),children:"Wallet"}),u.jsx("button",{className:`p-4 rounded-lg font-medium ${s==="transactions"?"bg-white text-black":"bg-gray-200 text-gray-600"}`,onClick:()=>i("transactions"),children:"Transactions"}),u.jsx("button",{className:`p-4 rounded-lg font-medium ${s==="groups"?"bg-white text-black":"bg-gray-200 text-gray-600"}`,onClick:C,children:"Groups"})]}),E(),u.jsx(Y1,{isOpen:c,onClose:()=>d(!1),title:"Your Groups",children:u.jsx(k4,{})}),u.jsxs("div",{className:"text-center space-y-2 mt-8",children:[u.jsx("p",{className:"text-gray-400",children:"Last updated 1 sec"}),u.jsx("p",{className:"text-gray-400",children:"Made with care in Pittsburgh, PA"})]})]})},J1=({league:t,onClose:e})=>{const{currentUser:n}=Zn(),[r,s]=D.useState([]),[i,o]=D.useState(!0),[l,c]=D.useState(!1),[d,f]=D.useState(!1);D.useEffect(()=>{(async()=>{try{const _=await gf.getLeagueUsers(t.league_id);s(_);const A=await vf.isSleeperLeagueGroup(t.league_id);f(A)}catch(_){console.error("Error fetching data:",_)}finally{o(!1)}})()},[t.league_id]);const m=async()=>{if(n){c(!0);try{const g=r.map(_=>_.user_id);await vf.createSleeperLeagueGroup(t.name,"🏈",n.uid,g,t.league_id),f(!0)}catch(g){console.error("Error creating Bankroll group:",g)}finally{c(!1)}}};return u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsxs("div",{className:"bg-purple-900/90 p-8 rounded-2xl max-w-2xl w-full mx-4 relative border border-purple-700 max-h-[80vh] overflow-y-auto",children:[u.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-purple-300 hover:text-white",children:u.jsx(Ca,{className:"h-6 w-6"})}),u.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[t.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${t.avatar}`,alt:t.name,className:"w-16 h-16 rounded-full"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h2",{className:"text-2xl font-bold text-white",children:t.name}),u.jsxs("p",{className:"text-purple-300",children:["Season ",t.season]})]}),d?u.jsxs("div",{className:"flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-lg",children:[u.jsx(U1,{className:"h-5 w-5"}),u.jsx("span",{children:"Valid Bankroll Group"})]}):u.jsxs("button",{onClick:m,disabled:l,className:"flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50",children:[u.jsx(z1,{className:"h-5 w-5"}),u.jsx("span",{children:l?"Creating...":"Add as Bankroll Group"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[u.jsxs("div",{className:"bg-purple-800/30 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-300",children:"Total Teams"}),u.jsx("p",{className:"text-2xl font-bold text-white",children:t.total_rosters})]}),u.jsxs("div",{className:"bg-purple-800/30 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-300",children:"League Type"}),u.jsx("p",{className:"text-2xl font-bold text-white capitalize",children:t.status||"Active"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold mb-4 text-white",children:"League Members"}),i?u.jsx("div",{className:"text-center py-4 text-purple-300",children:"Loading members..."}):u.jsx("div",{className:"space-y-3",children:r.map(g=>u.jsxs("div",{className:"flex items-center space-x-3 bg-purple-800/20 p-3 rounded-lg",children:[g.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${g.avatar}`,alt:g.display_name,className:"w-10 h-10 rounded-full"}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"font-medium text-white",children:g.display_name}),g.is_owner&&u.jsx(SO,{className:"h-4 w-4 text-yellow-400",title:"Commissioner"})]}),u.jsxs("p",{className:"text-sm text-purple-300",children:["@",g.username]})]})]},g.user_id))})]})]})})},A4=()=>{const{leagues:t}=V1(),[e,n]=D.useState(null);return!t||t.length===0?u.jsx("div",{className:"text-center text-gray-400 py-4",children:"No leagues found"}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"space-y-4",children:t.map(r=>u.jsx("div",{className:`bg-purple-900/30 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 
              transition-all cursor-pointer hover:bg-purple-900/40`,onClick:()=>n(r),children:u.jsxs("div",{className:"flex items-center space-x-4",children:[r.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${r.avatar}`,alt:r.name,className:"w-12 h-12 rounded-full"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"text-lg font-semibold text-white",children:r.name}),u.jsxs("p",{className:"text-sm text-gray-400",children:[r.total_rosters," participants • Season ",r.season]})]})]})},r.league_id))}),e&&u.jsx(J1,{league:e,onClose:()=>n(null)})]})},C4=()=>{const[t,e]=D.useState("all"),[n,r]=D.useState(!1),[s,i]=D.useState(""),[o,l]=D.useState(null),{user:c,leagues:d,fetchUser:f,isLoading:m,errorMessage:g,disconnectSleeper:_}=V1(),A=[{id:"all",label:"All"},{id:"sleeper",label:"Sleeper"},{id:"espn",label:"ESPN"},{id:"underdog",label:"Underdog"}],C=async x=>{x.preventDefault(),await f(s),g||(r(!1),i(""))},R=()=>{window.confirm("Are you sure you want to disconnect your Sleeper account?")&&_()},E=x=>u.jsx("div",{className:`bg-purple-900/30 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 
        transition-all cursor-pointer hover:bg-purple-900/40`,onClick:()=>l(x),children:u.jsxs("div",{className:"flex items-center space-x-4",children:[x.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${x.avatar}`,alt:x.name,className:"w-12 h-12 rounded-full"}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("h3",{className:"text-lg font-semibold text-white",children:x.name}),u.jsx("span",{className:"px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full",children:"Sleeper"})]}),u.jsxs("p",{className:"text-sm text-gray-400",children:[x.total_rosters," participants • Season ",x.season]})]})]})},x.league_id),w=x=>x==="all"?c&&d&&d.length>0?u.jsx("div",{className:"space-y-4",children:d.map(E)}):u.jsx("div",{className:"text-center text-gray-400 py-12",children:"Connect your fantasy platforms to view all your leagues in one place"}):x==="sleeper"?c?u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between bg-purple-900/30 p-4 rounded-lg",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[c.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${c.avatar}`,alt:c.username,className:"w-10 h-10 rounded-full"}),u.jsxs("div",{children:[u.jsxs("h3",{className:"text-white font-medium",children:["Connected as: ",c.username]}),u.jsxs("p",{className:"text-sm text-gray-400",children:["User ID: ",c.user_id]})]})]}),u.jsxs("button",{onClick:R,className:`flex items-center space-x-2 px-3 py-2 bg-red-500/20 text-red-400 
                  rounded-lg hover:bg-red-500/30 transition-colors`,children:[u.jsx(NO,{className:"h-4 w-4"}),u.jsx("span",{children:"Disconnect"})]})]}),u.jsx(A4,{})]}):u.jsxs("div",{className:"flex flex-col items-center justify-center py-12 space-y-4",children:[u.jsx("div",{className:"p-4 rounded-full bg-purple-900/30",children:u.jsx(wv,{className:"h-8 w-8 text-purple-400"})}),u.jsx("button",{onClick:()=>r(!0),className:`px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
              transition-all duration-200 transform hover:scale-105 shadow-lg 
              hover:shadow-green-500/25`,children:"Connect Sleeper Account"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Import all your Sleeper fantasy leagues"})]}):u.jsxs("div",{className:"flex flex-col items-center justify-center py-12 space-y-4",children:[u.jsx("div",{className:"p-4 rounded-full bg-purple-900/30",children:u.jsx(wv,{className:"h-8 w-8 text-purple-400"})}),u.jsx("button",{className:"px-6 py-3 bg-gray-500 text-white rounded-lg cursor-not-allowed opacity-50",disabled:!0,children:"Coming Soon"}),u.jsxs("p",{className:"text-sm text-gray-400",children:["Support for ",x.charAt(0).toUpperCase()+x.slice(1)," coming soon"]})]});return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-gray-900/50 border border-purple-500/20 rounded-lg overflow-hidden",children:[u.jsx("div",{className:"p-6",children:u.jsx("h2",{className:"text-xl font-medium text-purple-100",children:"My Leagues"})}),u.jsx("div",{className:"border-b border-purple-900/50",children:u.jsx("div",{className:"flex space-x-1 px-6",children:A.map(x=>u.jsx("button",{onClick:()=>e(x.id),className:`
                  px-4 py-2 rounded-t-lg text-sm font-medium transition-colors duration-200
                  ${t===x.id?"bg-purple-900/50 text-white border-b-2 border-green-500":"text-gray-400 hover:text-white hover:bg-purple-900/30"}
                `,children:x.label},x.id))})}),u.jsx("div",{className:"p-6",children:w(t)})]}),o&&u.jsx(J1,{league:o,onClose:()=>l(null)}),n&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsxs("div",{className:"bg-purple-900/90 p-8 rounded-2xl max-w-md w-full mx-4 relative border border-purple-700",children:[u.jsx("button",{onClick:()=>r(!1),className:"absolute top-4 right-4 text-purple-300 hover:text-white",children:u.jsx(Ca,{className:"h-6 w-6"})}),u.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Connect Sleeper Account"}),u.jsx("form",{onSubmit:C,children:u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"username",className:"block text-sm font-medium mb-2",children:"Sleeper Username"}),u.jsx("input",{type:"text",id:"username",value:s,onChange:x=>i(x.target.value),className:`w-full px-4 py-2 bg-purple-800/50 border border-purple-600 rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 text-white 
                      placeholder-gray-400`,placeholder:"Enter your Sleeper username"})]}),g&&u.jsx("p",{className:"text-red-400 text-sm",children:g}),u.jsx("button",{type:"submit",disabled:m,className:`w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`,children:m?"Connecting...":"Connect Account"})]})})]})})]})},R4=()=>{var g,_;const t=Kt(),e=Ri(),{login:n}=Zn(),[r,s]=D.useState(!1),[i,o]=D.useState(""),[l,c]=D.useState({emailOrUsername:"",password:""}),d=((_=(g=e.state)==null?void 0:g.from)==null?void 0:_.pathname)||"/banking",f=A=>{const{name:C,value:R}=A.target;c(E=>({...E,[C]:R})),i&&o("")},m=async A=>{A.preventDefault(),o(""),s(!0);try{await n(l.emailOrUsername,l.password),t(d,{replace:!0})}catch(C){console.error("Login error:",C),o(C.code==="auth/invalid-credential"?"Invalid email/username or password":"Failed to log in. Please try again.")}finally{s(!1)}};return u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-start pt-8 text-white relative",children:[u.jsx(Tm,{}),u.jsx("div",{className:"w-full max-w-md px-4 mb-8",children:u.jsx("img",{src:"/api/placeholder/120/40",alt:"Bankroll Logo",className:"h-10 w-auto mx-auto"})}),u.jsx("div",{className:"w-full max-w-md px-4",children:u.jsxs("div",{className:"backdrop-blur-md bg-gray-900/40 p-8 rounded-xl border border-purple-500/20 shadow-xl",children:[u.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"Welcome back"}),u.jsxs("form",{onSubmit:m,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"emailOrUsername",className:"block text-sm font-medium text-purple-200 mb-2",children:"Email or Username"}),u.jsx("input",{type:"text",id:"emailOrUsername",name:"emailOrUsername",value:l.emailOrUsername,onChange:f,required:!0,className:`w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
                  text-white placeholder-gray-400`,placeholder:"Enter your email or username"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-purple-200 mb-2",children:"Password"}),u.jsx("input",{type:"password",id:"password",name:"password",value:l.password,onChange:f,required:!0,className:`w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
                  text-white placeholder-gray-400`,placeholder:"Enter your password"})]}),i&&u.jsx("div",{className:"p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center font-medium",children:i}),u.jsx("button",{type:"submit",disabled:r,className:`w-full px-6 py-3 bg-green-500 text-white rounded-lg 
                transition-all duration-200 transform hover:scale-105 font-medium 
                shadow-lg hover:shadow-green-500/25
                ${r?"opacity-50 cursor-not-allowed":"hover:bg-green-600"}
                ${i?"mt-6":"mt-4"}`,children:r?u.jsxs("div",{className:"flex items-center justify-center",children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Logging in..."]}):"Log In"}),u.jsx("p",{className:"text-sm text-gray-400 text-center mt-4",children:'By clicking "Log In", you agree to receive SMS text messages to verify your identity'}),u.jsxs("div",{className:"mt-6 space-y-3",children:[u.jsx("div",{className:"text-center",children:u.jsx("button",{type:"button",onClick:()=>t("/forgot-email"),className:"text-purple-200 hover:text-green-400 transition-colors text-sm underline",children:"Forgot your email or username?"})}),u.jsx("div",{className:"text-center",children:u.jsx("button",{type:"button",onClick:()=>t("/reset-password"),className:"text-purple-200 hover:text-green-400 transition-colors text-sm underline",children:"Forgot your password?"})})]}),u.jsx("div",{className:"mt-6 text-center",children:u.jsxs("p",{className:"text-purple-200",children:["Need to create an account?"," ",u.jsx("button",{type:"button",onClick:()=>t("/signup"),className:"text-green-400 hover:text-green-300 transition-colors underline",children:"Sign up!"})]})}),u.jsxs("div",{className:"mt-8 text-xs text-gray-400 space-y-4",children:[u.jsx("p",{children:"© 2024 Bankroll. All Rights Reserved."}),u.jsx("p",{children:"Banking Services provided by The Dwolla Bank, N.A., Member FDIC. The Bankroll Debit Card is issued by The Dwolla Bank, N.A. pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted. Please see back of your Card for its issuing bank."})]})]}),u.jsx("div",{className:"mt-6 text-center",children:u.jsxs("button",{type:"button",onClick:()=>t("/"),className:`text-purple-200 hover:text-green-400 transition-colors duration-200 
                flex items-center justify-center gap-2 mx-auto`,children:[u.jsx(EO,{className:"h-4 w-4"}),u.jsx("span",{children:"Back to home"})]})})]})})]})},P4=()=>{const t=Kt(),[e,n]=D.useState(1),[r,s]=D.useState(!1),[i,o]=D.useState({email:"",firstName:"",lastName:"",password:"",confirmPassword:"",address1:"",address2:"",city:"",state:"",postalCode:"",birthday:"",phoneNumber:"",sleeperUsername:"",promoCode:"",acceptTerms:!1,acceptDwolla:!1}),[l,c]=D.useState(""),[d,f]=D.useState({}),m=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,g=/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,_=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,A=(N,S)=>{switch(N){case"email":if(!m.test(S))return"Please enter a valid email address";break;case"firstName":if(S.trim().length<2)return"First name must be at least 2 characters";break;case"lastName":if(S.trim().length<2)return"Last name must be at least 2 characters";break;case"password":if(!g.test(S))return"Password must be at least 8 characters and contain one uppercase letter, one number, and one special character";break;case"confirmPassword":if(S!==i.password)return"Passwords do not match";break;case"username":if(!S)return"Username is required";if(S.length<3)return"Username must be at least 3 characters long";if(!/^[a-zA-Z0-9_]+$/.test(S))return"Username can only contain letters, numbers, and underscores";if(S.length>30)return"Username must be less than 30 characters";break;case"sleeperUsername":if(S&&S.length>0){if(!S.startsWith("@"))return"Sleeper username must start with @";if(S.length<2)return"Please enter a valid Sleeper username";if(S.length>30)return"Sleeper username must be less than 30 characters";if(!/^@[a-zA-Z0-9_]+$/.test(S))return"Sleeper username can only contain letters, numbers, and underscores after the @"}break;case"birthday":{const I=new Date(S),de=new Date;let Ve=de.getFullYear()-I.getFullYear();const ft=de.getMonth()-I.getMonth();if((ft<0||ft===0&&de.getDate()<I.getDate())&&Ve--,Ve<18)return"You must be at least 18 years old";if(Ve>100)return"Please enter a valid birth date";break}case"phoneNumber":if(!_.test(S))return"Please enter a valid phone number (e.g., 123-456-7890)";break;case"venmoUsername":if(!S)return"Venmo username is required";if(!S.startsWith("@"))return"Venmo username must start with @";if(S.length<2)return"Please enter a valid Venmo username";if(S.length>30)return"Venmo username must be less than 30 characters";if(!/^@[a-zA-Z0-9_]+$/.test(S))return"Venmo username can only contain letters, numbers, and underscores after the @";break}return""},C=N=>{const{name:S,value:I,type:de,checked:Ve}=N.target,ft=de==="checkbox"?Ve:I;if(o(Fe=>({...Fe,[S]:ft})),d[S]&&f(Fe=>({...Fe,[S]:""})),S==="password"&&i.confirmPassword){const Fe=i.confirmPassword!==I?"Passwords do not match":"";f(z=>({...z,confirmPassword:Fe}))}},R=N=>{const S=N.replace(/\D/g,"");return S.length<=3?S:S.length<=6?`${S.slice(0,3)}-${S.slice(3)}`:`${S.slice(0,3)}-${S.slice(3,6)}-${S.slice(6,10)}`},E=N=>{const S=R(N.target.value);o(I=>({...I,phoneNumber:S}))},w=()=>{const N={};return["email","firstName","lastName","password","confirmPassword"].forEach(S=>{const I=A(S,i[S]);I&&(N[S]=I)}),f(N),Object.keys(N).length===0},x=()=>{const N={};return["username","birthday","phoneNumber","venmoUsername"].forEach(S=>{const I=A(S,i[S]);I&&(N[S]=I)}),i.acceptTerms||(N.acceptTerms="You must accept the terms and conditions"),i.acceptDwolla||(N.acceptDwolla="You must accept being a Dwolla user"),f(N),Object.keys(N).length===0},j=N=>{N.preventDefault(),c(""),w()&&n(2)},V=()=>{c(""),n(1)},U=async N=>{if(N.preventDefault(),c(""),x()){s(!0);try{const I=(await Ix(Vs,i.email,i.password)).user,de=new Date(i.birthday),Ve=Timestamp.fromDate(de);await setDoc(doc(db,"users",I.uid),{firstName:i.firstName,lastName:i.lastName,email:i.email,address1:i.address1,address2:i.address2||null,city:i.city,state:i.state,postalCode:i.postalCode,birthday:Ve,phoneNumber:i.phoneNumber,sleeperUsername:i.sleeperUsername.startsWith("@")?i.sleeperUsername:`@${i.sleeperUsername}`,promoCode:i.promoCode||null,dwollaCustomerId:"",dwollaBalance:0,bonusBalance:0,id:I.uid,lastUpdated:serverTimestamp(),lastBalanceUpdate:serverTimestamp(),createdAt:serverTimestamp()}),t("/banking")}catch(S){switch(console.error("Error during sign up:",S),S.code){case"auth/email-already-in-use":c("This email is already registered. Please use a different email or try logging in.");break;case"auth/invalid-email":c("Invalid email address format.");break;case"auth/operation-not-allowed":c("Email/password accounts are not enabled. Please contact support.");break;case"auth/weak-password":c("Please choose a stronger password. It should be at least 6 characters long.");break;default:c("An error occurred during sign up. Please try again.")}}finally{s(!1)}}},b="w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white",v="block text-sm font-medium text-purple-200 mb-2",T="text-red-500 text-sm mt-1",k=(N,S,I="text",de=!0)=>u.jsxs("div",{children:[u.jsxs("label",{htmlFor:N,className:v,children:[S,de&&"*"]}),u.jsx("input",{type:I,id:N,name:N,value:i[N],onChange:N==="phoneNumber"?E:C,required:de,className:`${b} ${d[N]?"border-red-500":""}`}),d[N]&&u.jsx("div",{className:T,children:d[N]})]});return u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-start pt-8 text-white relative",children:[u.jsx(Tm,{}),u.jsx("div",{className:"w-full max-w-md px-4 mb-8",children:u.jsx("img",{src:"/api/placeholder/120/40",alt:"Bankroll",className:"h-10 w-auto mx-auto"})}),u.jsx("div",{className:"w-full max-w-md px-4",children:u.jsxs("div",{className:"backdrop-blur-md bg-gray-900/40 p-8 rounded-xl border border-purple-500/20 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between mb-8",children:[e>1&&u.jsxs("button",{onClick:V,className:"flex items-center text-purple-200 hover:text-green-400 transition-colors",children:[u.jsx(ChevronLeft,{className:"h-5 w-5"}),u.jsx("span",{children:"Back"})]}),u.jsxs("h2",{className:"text-2xl font-bold text-center flex-grow",children:["Create your account ",e>1?"(2/2)":"(1/2)"]})]}),u.jsxs("form",{onSubmit:e===1?j:U,className:"space-y-6",children:[e===1?u.jsxs(u.Fragment,{children:[k("email","Email address","email"),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[k("firstName","First Name"),k("lastName","Last Name")]}),k("password","Password","password"),k("confirmPassword","Confirm Password","password")]}):u.jsxs(u.Fragment,{children:[k("username","Username"),k("birthday","Birthday (MM/DD/YYYY)","date"),k("phoneNumber","Phone Number","tel"),k("venmoUsername","Venmo Username"),k("referrer","Who referred you?","text",!1),k("sleeperUsername","Sleeper Username","text",!1),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{type:"checkbox",id:"acceptTerms",name:"acceptTerms",checked:i.acceptTerms,onChange:C,required:!0,className:"h-4 w-4 rounded border-purple-500/20 text-green-500 focus:ring-green-500"}),u.jsx("label",{htmlFor:"acceptTerms",className:"ml-2 text-sm text-purple-200",children:"I accept the Privacy Policy and Terms of Service*"})]}),d.acceptTerms&&u.jsx("div",{className:T,children:d.acceptTerms}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{type:"checkbox",id:"acceptDwolla",name:"acceptDwolla",checked:i.acceptDwolla,onChange:C,required:!0,className:"h-4 w-4 rounded border-purple-500/20 text-green-500 focus:ring-green-500"}),u.jsx("label",{htmlFor:"acceptDwolla",className:"ml-2 text-sm text-purple-200",children:"I accept being a Dwolla user*"})]}),d.acceptDwolla&&u.jsx("div",{className:T,children:d.acceptDwolla})]})]}),l&&u.jsx("div",{className:"text-red-500 text-sm text-center font-medium",children:l}),u.jsx("button",{type:"submit",disabled:r,className:`w-full px-6 py-3 bg-green-500 text-white rounded-lg 
    transition-all duration-200 transform hover:scale-105 font-medium 
    shadow-lg hover:shadow-green-500/25
    ${r?"opacity-50 cursor-not-allowed":"hover:bg-green-600"}
    ${l?"mt-6":"mt-4"}`,children:r?u.jsxs("div",{className:"flex items-center justify-center",children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Creating Account..."]}):e===1?"Next":"Complete Sign Up"})]}),u.jsx("div",{className:"mt-6 text-center",children:u.jsx("button",{onClick:()=>t("/"),className:"text-purple-200 hover:text-green-400 transition-colors duration-200",children:"Back to home"})})]})})]})},D4=()=>{const[t,e]=D.useState("0"),[n,r]=D.useState(""),[s,i]=D.useState(""),o=l=>{const c=l.replace(/[^0-9]/g,"");e(c)};return u.jsxs("div",{className:"max-w-md mx-auto p-6 space-y-8",children:[u.jsxs("div",{className:"text-center space-y-4",children:[u.jsx("h2",{className:"text-2xl font-bold text-white",children:"Send Money"}),u.jsxs("div",{className:"flex items-center justify-center text-6xl font-bold text-white",children:[u.jsx(B1,{className:"h-12 w-12"}),u.jsx("input",{type:"text",value:t,onChange:l=>o(l.target.value),className:"w-40 bg-transparent text-center focus:outline-none",placeholder:"0"})]})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("div",{className:"relative",children:u.jsx("input",{type:"text",value:n,onChange:l=>r(l.target.value),placeholder:"#username",className:"w-full p-4 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"})}),u.jsx("div",{className:"relative",children:u.jsx("input",{type:"text",value:s,onChange:l=>i(l.target.value),placeholder:"What's this for?",className:"w-full p-4 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"})})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx("button",{className:"w-full py-3 rounded-full bg-white text-purple-900 font-medium hover:bg-gray-100 transition-colors",children:"Request"}),u.jsx("button",{className:"w-full py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors",children:"Pay"})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"text-lg font-medium text-white",children:"Payment Source"}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx(ze,{className:"bg-white hover:shadow-lg transition-all duration-200 cursor-pointer",children:u.jsx(Ge,{className:"p-4",children:u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-full bg-blue-500",children:u.jsx(Em,{className:"h-6 w-6 text-white"})}),u.jsxs("div",{children:[u.jsx("div",{className:"font-medium",children:"Friends"}),u.jsx("div",{className:"text-sm text-gray-500",children:"0 friends"})]})]})})}),u.jsx(ze,{className:"bg-white hover:shadow-lg transition-all duration-200 cursor-pointer",children:u.jsx(Ge,{className:"p-4",children:u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-full bg-purple-500",children:u.jsx(VO,{className:"h-6 w-6 text-white"})}),u.jsxs("div",{children:[u.jsx("div",{className:"font-medium",children:"Groups"}),u.jsx("div",{className:"text-sm text-gray-500",children:"0 groups"})]})]})})})]})]})]})};class en extends Error{constructor(e,n="",r=null){super(e),this.name="DwollaError",this.code=n,this.details=r}}const Un={AUTHENTICATION_FAILED:"authentication_failed",CUSTOMER_NOT_FOUND:"customer_not_found",INVALID_VERIFICATION_DATA:"invalid_verification_data",SERVER_ERROR:"server_error",NETWORK_ERROR:"network_error",RESOURCE_NOT_FOUND:"resource_not_found",INSUFFICIENT_PERMISSIONS:"insufficient_permissions",FUNDING_SOURCE_NOT_FOUND:"funding_source_not_found"};class j4 extends en{constructor(e=null){super("Authentication failed",Un.AUTHENTICATION_FAILED,e)}}class O4 extends en{constructor(e){super(`Customer not found: ${e}`,Un.CUSTOMER_NOT_FOUND)}}class L4 extends en{constructor(e=""){super(`Invalid verification data${e?": "+e:""}`,Un.INVALID_VERIFICATION_DATA)}}class M4 extends en{constructor(e="Server error occurred",n=null){super(e,Un.SERVER_ERROR,n)}}class V4 extends en{constructor(e=null){super("Network error occurred",Un.NETWORK_ERROR,e)}}class F4 extends en{constructor(e){super(`No balance funding source found for customer: ${e}`,Un.FUNDING_SOURCE_NOT_FOUND)}}function qd(t,e={}){if(console.error("Handling Dwolla error:",{error:t,context:e,stack:t.stack}),t instanceof en)return t;if(t.status)switch(t.status){case 401:return new j4(t.message);case 403:return new en("Insufficient permissions",Un.INSUFFICIENT_PERMISSIONS,t.message);case 404:return e.customerId?new O4(e.customerId):new en("Resource not found",Un.RESOURCE_NOT_FOUND,t.message);case 400:return new L4(t.message);case 500:return new M4(t.message);default:return new en(t.message||"An unknown error occurred","unknown_error",{status:t.status})}return t.name==="NetworkError"||t.message.includes("Failed to fetch")?new V4(t.message):t.message.includes("balance")?new F4(e.customerId):new en(t.message||"An unexpected error occurred",Un.UNKNOWN,{originalError:t})}class U4{constructor(){this.baseURL="/api/dwolla",this.apiKey="SmkOFfDd6KgmW8sVRKhMAVgUEp5RA0ggrGq8Mx0MWoPRbnxE7u",this.apiSecret="AJ4swL4AnFi79Jwkh3I7YpilW8Rgdu400b7V9xmLQqGIysb9zZ",this.isDevelopment=!1,console.log("DwollaService initialized")}async fetchBalance(e){try{console.log("Fetching balance for customer:",e),console.log("Fetching funding sources...");const n=await fetch(`${this.baseURL}/customers/${e}/funding-sources`);if(!n.ok){const g=await n.json();throw new Error(g.error||"Failed to fetch funding sources")}const r=await n.json();if(console.log("Funding sources response:",r),!r._embedded||!r._embedded["funding-sources"])throw new Error("Invalid funding sources response format");const s=r._embedded["funding-sources"].find(g=>g.type==="balance");if(!s)throw console.error("No balance account found in funding sources:",r),new Error("No balance account found");console.log("Found balance account:",s);const i=await fetch(`${this.baseURL}/funding-sources/${s.id}/balance`);if(!i.ok){const g=await i.json();throw new Error(g.error||"Failed to fetch balance")}const o=await i.json();if(console.log("Balance data:",o),!o.balance||typeof o.balance.value>"u")throw new Error("Invalid balance response format");const l=parseFloat(o.balance.value),c=_r(he,"users"),d=wr(c,xr("dwollaCustomerId","==",e)),f=await Er(d);if(f.empty)throw new Error("User not found with Dwolla customer ID");const m=f.docs[0];return await this.updateUserBalance(m.id,l),l}catch(n){throw console.error("Error in fetchBalance:",n),qd(n,{customerId:e})}}async storeDwollaCustomerId(e,n){try{console.log("Storing Dwolla customer ID in Firebase:",{userId:e,dwollaCustomerId:n});const r=it(he,"users",e);await pf(r,{dwollaCustomerId:n,dwollaBalance:0,bonusBalance:0,lastBalanceUpdate:us(),lastUpdated:us()}),console.log("Successfully stored Dwolla customer ID")}catch(r){throw console.error("Error storing Dwolla customer ID:",r),qd(r)}}async updateUserBalance(e,n){try{console.log("Updating user balance in Firebase:",{userId:e,balance:n});const r=it(he,"users",e);await pf(r,{dwollaBalance:n,lastBalanceUpdate:us()}),console.log("Successfully updated user balance")}catch(r){throw console.error("Error updating user balance:",r),qd(r)}}}const B4=new U4;function z4(){const{currentUser:t}=Zn(),e=Kt(),[n,r]=D.useState(null),[s,i]=D.useState(!1),[o,l]=D.useState(null),[c,d]=D.useState(null),f=150,m=[{id:1,type:"deposit",amount:500,description:"Deposit from Bank",date:"2024-03-15"},{id:2,type:"withdrawal",amount:-50,description:"NFL Bet Placement",date:"2024-03-14"},{id:3,type:"winning",amount:125,description:"Bet Payout",date:"2024-03-13"}],g=async()=>{if(!(t!=null&&t.dwollaCustomerId)){console.log("No Dwolla customer ID found"),l("Please verify your Dwolla account first");return}i(!0),l(null);try{console.log("Fetching balance for customer ID:",t.dwollaCustomerId);const _=await B4.fetchBalance(t.dwollaCustomerId);if(console.log("Received balance:",_),typeof _=="number"&&!isNaN(_))r(_),d(new Date),l(null);else throw new Error("Invalid balance received")}catch(_){console.error("Error fetching Dwolla balance:",_),l(_.message||"Failed to fetch balance"),r(null)}finally{i(!1)}};return D.useEffect(()=>{t!=null&&t.dwollaCustomerId?(console.log("Initial balance fetch for customer:",t.dwollaCustomerId),g()):l("Please verify your Dwolla account first")},[t==null?void 0:t.dwollaCustomerId]),t?u.jsxs("div",{className:"space-y-6",children:[u.jsxs("h1",{className:"text-2xl font-bold text-white mb-6",children:["Welcome to Bankroll, ",(t==null?void 0:t.displayName)||"User"]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs(ze,{className:"bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/20",children:[u.jsxs(es,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(ts,{className:"text-lg font-medium text-purple-100",children:"Available Balance"}),u.jsxs("div",{className:"flex items-center space-x-2",children:[(t==null?void 0:t.dwollaCustomerId)&&u.jsx("button",{onClick:g,disabled:s,className:"p-2 hover:bg-purple-900/30 rounded-full transition-colors",children:u.jsx(DO,{className:`h-4 w-4 text-purple-200 ${s?"animate-spin":""}`})}),u.jsx($1,{className:"h-5 w-5 text-purple-200"})]})]}),u.jsxs(Ge,{children:[u.jsxs("div",{className:"text-3xl font-bold text-white",children:["$",n!==null?n.toFixed(2):"0.00"]}),o?u.jsx("p",{className:"text-sm text-red-400 mt-2",children:o}):u.jsxs("div",{className:"space-y-1",children:[u.jsxs("p",{className:"text-sm text-purple-200",children:["Pending: $",f.toFixed(2)]}),c&&u.jsxs("p",{className:"text-xs text-purple-300",children:["Last updated: ",c.toLocaleTimeString()]})]})]})]}),u.jsxs(ze,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsx(es,{children:u.jsx(ts,{className:"text-lg font-medium text-purple-100",children:"Quick Actions"})}),u.jsx(Ge,{children:u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("button",{onClick:()=>e("/deposit"),className:"flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors",disabled:!(t!=null&&t.dwollaCustomerId),children:[u.jsx(yv,{className:"h-5 w-5"}),u.jsx("span",{children:"Deposit"})]}),u.jsxs("button",{className:"flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors",disabled:!(t!=null&&t.dwollaCustomerId),children:[u.jsx(vv,{className:"h-5 w-5"}),u.jsx("span",{children:"Withdraw"})]})]})})]})]}),u.jsx(ze,{className:"bg-gray-900/50 border-purple-500/20 cursor-pointer transition-all hover:bg-gray-900/70",onClick:()=>!(t!=null&&t.dwollaCustomerId)&&e("/setup-dwolla"),children:u.jsxs(Ge,{className:"flex flex-col p-6",children:[u.jsx("div",{className:"flex items-center space-x-4",children:t!=null&&t.dwollaCustomerId?u.jsxs(u.Fragment,{children:[u.jsx(U1,{className:"h-6 w-6 text-green-500"}),u.jsx("span",{className:"text-green-500 font-medium",children:"You have a verified Bankroll Wallet"})]}):u.jsxs(u.Fragment,{children:[u.jsx(TO,{className:"h-6 w-6 text-red-500"}),u.jsx("span",{className:"text-white font-medium",children:"Click to get verified and create a Dwolla wallet"})]})}),(t==null?void 0:t.dwollaCustomerId)&&u.jsxs("div",{className:"mt-2 ml-10 text-xs text-gray-400",children:["Dwolla ID: ",t.dwollaCustomerId]})]})}),u.jsxs(ze,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsx(es,{children:u.jsx(ts,{className:"text-lg font-medium text-purple-100",children:"Recent Activity"})}),u.jsx(Ge,{children:u.jsx("div",{className:"space-y-4",children:m.map(_=>u.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("div",{className:`p-2 rounded-full ${_.type==="deposit"?"bg-green-500/20 text-green-500":_.type==="withdrawal"?"bg-red-500/20 text-red-500":"bg-purple-500/20 text-purple-500"}`,children:_.type==="deposit"?u.jsx(yv,{className:"h-5 w-5"}):_.type==="withdrawal"?u.jsx(vv,{className:"h-5 w-5"}):u.jsx($d,{className:"h-5 w-5"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-medium text-white",children:_.description}),u.jsx("p",{className:"text-xs text-gray-400",children:_.date})]})]}),u.jsxs("div",{className:`font-medium ${_.amount>0?"text-green-500":"text-red-500"}`,children:[_.amount>0?"+":"",_.amount.toFixed(2)]})]},_.id))})})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs(ze,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(es,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(ts,{className:"text-sm font-medium text-purple-100",children:"Total Winnings"}),u.jsx(B1,{className:"h-4 w-4 text-purple-200"})]}),u.jsxs(Ge,{children:[u.jsx("div",{className:"text-2xl font-bold text-green-500",children:"$1,234.56"}),u.jsx("p",{className:"text-xs text-purple-200 mt-1",children:"+12.5% from last month"})]})]}),u.jsxs(ze,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(es,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(ts,{className:"text-sm font-medium text-purple-100",children:"Active Bets"}),u.jsx($d,{className:"h-4 w-4 text-purple-200"})]}),u.jsxs(Ge,{children:[u.jsx("div",{className:"text-2xl font-bold text-white",children:"5"}),u.jsx("p",{className:"text-xs text-purple-200 mt-1",children:"Total value: $250.00"})]})]}),u.jsxs(ze,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(es,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(ts,{className:"text-sm font-medium text-purple-100",children:"Win Rate"}),u.jsx($d,{className:"h-4 w-4 text-purple-200"})]}),u.jsxs(Ge,{children:[u.jsx("div",{className:"text-2xl font-bold text-white",children:"62%"}),u.jsx("p",{className:"text-xs text-purple-200 mt-1",children:"Last 30 days"})]})]})]})]}):u.jsx("div",{className:"flex items-center justify-center h-[60vh]",children:u.jsxs("div",{className:"text-center",children:[u.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Please log in to access banking features"}),u.jsx("button",{onClick:()=>e("/login"),className:"px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",children:"Log In"})]})})}class $4{logEvent(e,n={}){try{vl&&j1(vl,e,{...n,timestamp:new Date().toISOString()})}catch{}}logClick(e,n,r,s=null){this.logEvent("user_click",{element_id:e,element_type:n,page_name:r,click_timestamp:new Date().toISOString(),user_id:(s==null?void 0:s.uid)||"anonymous",user_email:(s==null?void 0:s.email)||"anonymous",user_display_name:(s==null?void 0:s.displayName)||"anonymous"})}startSession(e){this.logEvent("session_start",{user_id:e,session_start_time:new Date().toISOString()}),vl&&uO(vl,{last_session_start:new Date().toISOString(),user_id:e})}endSession(e,n){this.logEvent("session_end",{user_id:e,session_end_time:new Date().toISOString(),session_duration:n})}logPlatformView(e,n,r){this.logEvent("platform_view",{platform_id:e,platform_name:n,category:r})}logPlatformVisit(e,n){this.logEvent("platform_visit",{platform_id:e,platform_name:n})}logPlatformConnect(e,n){this.logEvent("platform_connect",{platform_id:e,platform_name:n})}logSleeperConnect(e){this.logEvent("sleeper_connect",{username:e})}logSleeperDisconnect(){this.logEvent("sleeper_disconnect")}logSleeperLeagueView(e,n){this.logEvent("sleeper_league_view",{league_id:e,league_name:n})}logPageView(e,n){this.logEvent("page_view",{page_name:e,page_title:n,url:window.location.pathname})}logNotificationPermissionRequested(){this.logEvent("notification_permission_requested")}logNotificationPermissionGranted(){this.logEvent("notification_permission_granted")}logNotificationPermissionDenied(){this.logEvent("notification_permission_denied")}logNotificationSettingsUpdated(e){this.logEvent("notification_settings_updated",{email_enabled:e.emailEnabled,push_enabled:e.pushEnabled,categories:e.categories})}}const Cn=new $4,W4=({platform:t,onClose:e})=>{const n=()=>{Cn.logPlatformVisit(t.id,t.name),t.url&&window.open(t.url,"_blank")},r=()=>{Cn.logPlatformConnect(t.id,t.name)};return u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:u.jsxs("div",{className:"bg-gradient-to-b from-purple-100 to-pink-100 rounded-3xl max-w-md w-full mx-auto relative overflow-hidden",children:[u.jsx("button",{onClick:e,className:"absolute top-4 left-4 z-10 bg-white/80 p-2 rounded-full",children:u.jsx(Ca,{className:"h-6 w-6 text-gray-600"})}),u.jsxs("div",{className:"p-6 space-y-6",children:[u.jsxs("div",{className:"flex flex-col items-center justify-center pt-8",children:[u.jsx("div",{className:"w-24 h-24 mb-4",children:u.jsx("img",{src:t.logo,alt:t.name,className:"w-full h-full object-contain rounded-lg"})}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:t.name})]}),u.jsx("div",{className:"text-center",children:u.jsxs("p",{className:"text-gray-600",children:["Legal States: ",t.legalStates||"Information not available"]})}),u.jsxs("div",{className:"bg-white/80 rounded-xl p-4 space-y-2",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Promotion Details"}),u.jsx("p",{className:"text-gray-700",children:t.promoDetails||"No current promotions"}),t.restrictions&&u.jsxs("div",{className:"mt-2",children:[u.jsx("h4",{className:"font-medium text-gray-900",children:"Restrictions"}),u.jsx("p",{className:"text-gray-600 text-sm",children:t.restrictions})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("button",{onClick:n,className:`w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 
                transition-colors duration-200`,children:["Visit ",t.name]}),u.jsxs("button",{onClick:r,className:`w-full py-3 bg-yellow-400 text-gray-900 rounded-xl font-medium 
                hover:bg-yellow-500 transition-colors duration-200`,children:["Connect ",t.name]})]}),u.jsx("div",{className:"text-center text-sm text-gray-600 pt-4",children:u.jsx("p",{children:"Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700"})})]})]})})},q4=()=>{const[t,e]=D.useState("FANTASY"),[n,r]=D.useState(null),s=c=>{Cn.logPlatformView(c.id,c.name,c.category),r(c)},i=[{id:"ALL",label:"ALL"},{id:"FANTASY",label:"FANTASY"},{id:"CASINO",label:"CASINO"},{id:"SPORTS BETTING",label:"SPORTS BETTING"},{id:"POKER",label:"POKER"}],o=[{id:"prizepicks",name:"PrizePicks (18+)",category:"FANTASY",logo:"/images/prizepicks.png",legalStates:"AK, CA, FL, GA, IL, KS, KY, MN, NE, NM, NC, OK, OR, RI, SC, SD, TX, UT, VT, WI, WY",promoDetails:"Get 100% deposit match up to $100",restrictions:"First-time users only. Must be 18+",url:"#prizepicks"},{id:"sleeper-fantasy",name:"Sleeper Fantasy (18+)",category:"FANTASY",logo:"/images/sleeperFantasy.png",legalStates:"All states except CT, DE, IL, LA, MT, NV",promoDetails:"$25 sign-up bonus",restrictions:"New users only. Must be 18+",url:"https://sleeper.com/promo/WINDAILY"},{id:"draftkings-fantasy",name:"DraftKings Fantasy (21+)",category:"FANTASY",logo:"/images/draftkingsFantasy.png",legalStates:"Available in most US states",promoDetails:"New User Bonus",restrictions:"Must be 21+",url:"https://dkdfs.sng.link/Avkw3/ejal?_dl=draftkings%3A%2F%2Fgateway%3Fs%3D199744492&pcid=357597&psn=2003&pcn=xx&pscn=xx&pcrn=WDS&pscid=DFS&pcrid=xx&wpcid=357597&wpsrc=2003&wpcn=xx&wpscn=xx&wpcrn=WDS&wpscid=DFS&wpcrid=xx&_forward_params=1"},{id:"fanduel-fantasy",name:"FanDuel Fantasy (21+)",category:"FANTASY",logo:"/images/fanduel.png",legalStates:"Available in most US states",promoDetails:"New User Bonus",restrictions:"Must be 21+",url:"https://wlfanduelus.adsrv.eacdn.com/C.ashx?btag=a_15755b_56c_&affid=11359&siteid=15755&adid=56&c="},{id:"underdog",name:"Underdog Fantasy (18+)",category:"FANTASY",logo:"/images/underdog.jpeg",legalStates:"Available in most US states",promoDetails:"New User Bonus",restrictions:"Must be 18+",url:"https://play.underdogfantasy.com/p-win-daily-sports"},{id:"fanduel-casino",name:"FanDuel Casino (21+)",category:"CASINO",logo:"/images/fanduelCasino.jpg",legalStates:"MI, NJ, PA, WV",promoDetails:"100% match up to $2000 + $100 in site credit",restrictions:"First-time casino players only. Must be 21+",url:"#fanduel-casino"},{id:"betmgm",name:"BetMGM Casino (21+)",category:"CASINO",logo:"/images/betmgm.png",legalStates:"MI, NJ, PA, WV",promoDetails:"100% deposit match up to $1000 + $25 free play",restrictions:"New customers only. Must be 21+",url:"https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1728250"},{id:"pokerstars",name:"PokerStars Casino (21+)",category:"CASINO",logo:"/images/pokerstars.png",legalStates:"MI, NJ, PA",promoDetails:"$50 free play with first deposit",restrictions:"New players only. Must be 21+",url:"https://star-casino.pxf.io/c/3732491/1574555/14251"},{id:"bet365",name:"Bet365 Casino (21+)",category:"CASINO",logo:"/images/bet365logo.png",legalStates:"NJ, CO, OH, VA, IA, KY",promoDetails:"Bet $1, Get $365 in Bonus Bets",restrictions:"New players only. Must be 21+",url:"https://casino.bet365.com/opening-bonus?affiliate=365_01276644"},{id:"caesars",name:"Caesars Casino (21+)",category:"CASINO",logo:"/images/caesarsCasino.png",legalStates:"MI, NJ, PA, WV",promoDetails:"100% deposit match up to $1000 + $10 free",restrictions:"New users only. Must be 21+",url:"https://wlwilliamhillus.adsrv.eacdn.com/C.ashx?btag=a_13325b_2658c_&affid=450&siteid=13325&adid=2658&c="},{id:"wsop",name:"World Series of Poker (21+)",category:"POKER",logo:"/images/WSOP.png",legalStates:"Available in most US states",promoDetails:"New User Bonus",restrictions:"Must be 21+",url:"https://wlcaesarsinteractive.adsrv.eacdn.com/C.ashx?btag=a_987658684b_2046c_&affid=2405&siteid=987658684&adid=2046&c="},{id:"rivers",name:"Rivers Casino (21+)",category:"CASINO",logo:"/images/betRivers.png",legalStates:"MI, PA",promoDetails:"100% deposit match up to $250",restrictions:"First deposit only. Must be 21+",url:"#rivers"},{id:"myprize",name:"MyPrize Casino (18+)",category:"CASINO",logo:"/images/myPrizeLogo.jpeg",legalStates:"Available in most US states",promoDetails:"Get 5000 free coins on signup",restrictions:"Must be 18+",url:"#myprize"}],l=t==="ALL"?o:o.filter(c=>c.category===t);return u.jsxs("div",{className:"min-h-screen p-6 bg-gray-900",children:[u.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:i.map(c=>u.jsx("button",{onClick:()=>e(c.id),className:`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${t===c.id?"bg-yellow-400 text-gray-900":"bg-purple-900/30 text-white hover:bg-purple-900/50"}
            `,children:c.label},c.id))}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:l.map(c=>u.jsx(ze,{className:"bg-gray-800 hover:shadow-lg transition-all duration-200 cursor-pointer border-gray-700",onClick:()=>s(c),children:u.jsxs(Ge,{className:"p-6 flex flex-col items-center justify-center min-h-[200px]",children:[u.jsx("div",{className:"w-24 h-24 mb-4 relative",children:u.jsx("img",{src:c.logo,alt:c.name,className:"w-full h-full object-contain rounded-lg",onError:d=>{const f=d.currentTarget.parentNode;if(f){const m=document.createElement("div");m.className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center",m.innerHTML=`<span class="text-xl font-bold text-gray-400">${c.name.charAt(0)}</span>`,f.replaceChild(m,d.currentTarget)}}})}),u.jsx("h3",{className:"text-center text-white font-medium",children:c.name})]})},c.id))}),n&&u.jsx(W4,{platform:n,onClose:()=>r(null)}),u.jsx("div",{className:"mt-8 text-center text-sm text-gray-300",children:"Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700"})]})},H4=()=>u.jsx("div",{className:"min-h-screen bg-gray-900 text-white p-8",children:u.jsxs("div",{className:"max-w-2xl mx-auto",children:[u.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Dwolla Setup"}),u.jsx("p",{className:"text-gray-300 mb-8",children:"Please complete your Dwolla account setup to continue."}),u.jsx("div",{className:"bg-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-purple-700/50",children:u.jsx("p",{className:"text-center text-gray-300",children:"Dwolla integration coming soon..."})})]})});function G4(){const t=Kt();return u.jsx(ze,{className:"p-8 text-center bg-gray-900/40 border-purple-500/20",children:u.jsxs("div",{className:"space-y-6",children:[u.jsx("div",{className:"flex justify-center",children:u.jsx("div",{className:"p-4 bg-green-500/20 rounded-full",children:u.jsx(PO,{className:"h-12 w-12 text-green-500"})})}),u.jsx("h2",{className:"text-2xl font-bold text-white",children:"Information Submitted!"}),u.jsxs("div",{className:"bg-purple-900/30 p-6 rounded-xl border border-purple-700/50",children:[u.jsx("h3",{className:"text-lg font-semibold text-purple-200 mb-2",children:"Verification in Progress"}),u.jsx("p",{className:"text-purple-300",children:"Please allow 12-24 hours for your bank information to be verified. We'll notify you when your account is ready."})]}),u.jsx("button",{onClick:()=>t("/banking"),className:`w-full px-6 py-3 bg-green-500 text-white rounded-lg 
            transition-all duration-200 transform hover:scale-105 font-medium 
            shadow-lg hover:shadow-green-500/25 hover:bg-green-600`,children:"Continue to Banking"})]})})}const K4=[10,25,50,100,200];function Q4(){const t=Kt(),{currentUser:e}=Zn(),[n,r]=D.useState(null),[s,i]=D.useState("ach"),o=()=>{n&&console.log("Processing deposit:",{amount:n,method:s,userId:e.uid})};return u.jsxs("div",{className:"max-w-md mx-auto",children:[u.jsx("div",{className:"flex justify-between items-center mb-8",children:u.jsx("button",{onClick:()=>t(-1),className:"text-white hover:text-purple-300 transition-colors",children:"← Back"})}),u.jsxs("div",{className:"space-y-8",children:[u.jsx("h1",{className:"text-2xl font-bold text-white text-center",children:"Select Amount"}),u.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[K4.map(l=>u.jsxs("button",{onClick:()=>r(l),className:`p-4 rounded-lg text-xl font-semibold transition-colors ${n===l?"bg-purple-600 text-white":"bg-gray-800/50 text-white hover:bg-gray-800"}`,children:["$",l]},l)),u.jsx("button",{className:"p-4 rounded-lg text-xl font-semibold bg-gray-800/50 text-white hover:bg-gray-800 transition-colors",children:"•••"})]}),u.jsxs("div",{className:"space-y-6",children:[u.jsx("h2",{className:"text-2xl font-bold text-white",children:"Payment Method"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("button",{onClick:()=>i("ach"),className:`w-full p-4 rounded-lg flex items-center justify-between transition-colors ${s==="ach"?"bg-gray-800 text-white":"bg-gray-800/50 text-white hover:bg-gray-800"}`,children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx(xO,{className:"h-6 w-6 text-green-500"}),u.jsx("span",{children:"ACH"})]}),s==="ach"&&u.jsx("div",{className:"h-6 w-6 rounded-full bg-green-500 flex items-center justify-center",children:u.jsx("span",{className:"text-white",children:"✓"})})]}),u.jsxs("button",{disabled:!0,className:"w-full p-4 rounded-lg flex items-center space-x-3 bg-gray-800/30 text-gray-500",children:[u.jsx("div",{className:"text-blue-500 font-bold",children:"V"}),u.jsx("span",{children:"Venmo - Coming Soon!"})]}),u.jsxs("button",{disabled:!0,className:"w-full p-4 rounded-lg flex items-center space-x-3 bg-gray-800/30 text-gray-500",children:[u.jsx(IO,{className:"h-6 w-6 text-purple-500"}),u.jsx("span",{children:"Debit Card - Coming Soon!"})]})]})]}),u.jsx("button",{onClick:o,disabled:!n,className:`w-full p-4 rounded-lg text-white text-lg font-semibold transition-colors ${n?"bg-purple-600 hover:bg-purple-700":"bg-gray-600 cursor-not-allowed"}`,children:"Continue"})]})]})}class Y4{constructor(){this.initialized=!1,this.messaging=null}async initialize(){if(this.initialized)return!0;try{if(!await mO())throw new Error("Failed to register service worker");if(this.messaging=pO(),!this.messaging)throw new Error("Failed to initialize messaging");return this.initialized=!0,!0}catch(e){return console.error("Notification service initialization failed:",e),!1}}async getUserNotificationSettings(e){if(!e)return console.error("No user ID provided"),this.getDefaultSettings();try{const n=it(he,"userSettings",e),r=await ff(n);if(r.exists()){const s=r.data();return{...this.getDefaultSettings(),...s.notifications}}return this.getDefaultSettings()}catch(n){return console.error("Error getting notification settings:",n),this.getDefaultSettings()}}getDefaultSettings(){return{emailEnabled:!0,categories:{transactions:!0,groupUpdates:!0,security:!0,marketing:!1}}}async updateNotificationSettings(e,n){if(!e)return console.error("No user ID provided"),!1;try{const r=it(he,"userSettings",e);return await Cc(r,{notifications:n,updatedAt:new Date().toISOString()},{merge:!0}),!0}catch(r){return console.error("Error updating notification settings:",r),!1}}async requestPermission(e){if(!e)return console.error("No user ID provided"),!1;try{if(!await this.initialize())throw new Error("Failed to initialize notification service");if(await Notification.requestPermission()==="granted"){const s=await this.getFCMToken();if(s)return await this.saveTokenToFirestore(e,s),!0}return!1}catch(n){return console.error("Error requesting notification permission:",n),!1}}async getFCMToken(){try{if(!await this.initialize()||!this.messaging)throw new Error("Messaging not initialized");return await Nj(this.messaging,{vapidKey:"BKRzveDtV1ulEtWclcuatsax4sWTr2gujyST5SAJEWVZc1IrNt8RQ5CeTg9XscTzrdsFeqdEOHfHq2SlrpYUIII"})}catch(e){return console.error("Error getting FCM token:",e),null}}async saveTokenToFirestore(e,n){if(!e||!n)return console.error("Missing userId or token"),!1;try{const r=it(he,"userTokens",e),s=await ff(r);let i=s.exists()?s.data().tokens:[];return i.includes(n)||(i.push(n),await Cc(r,{tokens:i,updatedAt:new Date().toISOString()},{merge:!0})),!0}catch(r){return console.error("Error saving token to Firestore:",r),!1}}async setupMessageHandler(e){try{if(!await this.initialize()||!this.messaging)throw new Error("Messaging not initialized");Aj(this.messaging,r=>{console.log("Received foreground message:",r),e(r)})}catch(n){console.error("Error setting up message handler:",n)}}}const js=new Y4,J4=()=>{const{currentUser:t}=Zn(),e=Kt(),[n,r]=D.useState(!0),[s,i]=D.useState(null),[o,l]=D.useState(!1),[c,d]=D.useState({pushEnabled:!1,emailEnabled:!0,categories:{transactions:!0,groupUpdates:!0,security:!0,marketing:!1}});D.useEffect(()=>{(async()=>{if(!t){r(!1);return}try{const A=await js.initialize();l(A);const C=await js.getUserNotificationSettings(t.uid);C&&d(C),Cn.logPageView("notification_settings","Notification Settings")}catch(A){console.error("Error initializing notifications:",A),i("Failed to load notification settings")}finally{r(!1)}})()},[t]);const f=async()=>{if(!o){i("Push notifications are not supported in this browser");return}try{Cn.logNotificationPermissionRequested(),await js.requestPermission(t.uid)?(Cn.logNotificationPermissionGranted(),d(A=>({...A,pushEnabled:!0})),await js.updateNotificationSettings(t.uid,{...c,pushEnabled:!0})):Cn.logNotificationPermissionDenied()}catch(_){console.error("Error toggling push notifications:",_),i("Failed to enable push notifications")}},m=async()=>{try{const _={...c,emailEnabled:!c.emailEnabled};d(_),await js.updateNotificationSettings(t.uid,_),Cn.logNotificationSettingsUpdated(_)}catch(_){console.error("Error toggling email notifications:",_),i("Failed to update email settings")}},g=async _=>{try{const A={...c,categories:{...c.categories,[_]:!c.categories[_]}};d(A),await js.updateNotificationSettings(t.uid,A),Cn.logNotificationSettingsUpdated(A)}catch(A){console.error("Error updating category settings:",A),i("Failed to update notification preferences")}};return n?u.jsx("div",{className:"flex items-center justify-center h-48",children:u.jsx("div",{className:"text-gray-400",children:"Loading..."})}):u.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[u.jsxs("div",{className:"flex items-center space-x-4 mb-8",children:[u.jsx("button",{onClick:()=>e(-1),className:"p-2 hover:bg-gray-800 rounded-lg transition-colors",children:u.jsx(wO,{className:"h-6 w-6 text-gray-400"})}),u.jsx("h1",{className:"text-2xl font-bold text-white",children:"Notification Settings"})]}),s&&u.jsx("div",{className:"bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-lg",children:s}),u.jsxs("div",{className:"space-y-6",children:[u.jsx(ze,{className:"bg-gray-900 border-gray-800",children:u.jsxs(Ge,{className:"p-6 space-y-6",children:[u.jsx("h2",{className:"text-xl font-semibold mb-4 text-white",children:"Delivery Methods"}),u.jsxs("div",{className:"space-y-4",children:[o&&u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx(F1,{className:"h-5 w-5 text-purple-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-white",children:"Push Notifications"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Receive notifications on your device"})]})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:c.pushEnabled,onChange:f}),u.jsx("div",{className:"w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"})]})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx(AO,{className:"h-5 w-5 text-purple-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-white",children:"Email Notifications"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Receive notifications via email"})]})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:c.emailEnabled,onChange:m}),u.jsx("div",{className:"w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"})]})]})]})]})}),u.jsx(ze,{className:"bg-gray-900 border-gray-800",children:u.jsxs(Ge,{className:"p-6 space-y-6",children:[u.jsx("h2",{className:"text-xl font-semibold mb-4 text-white",children:"Notification Categories"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx($1,{className:"h-5 w-5 text-purple-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-white",children:"Transactions"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Money sent, received, or requested"})]})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:c.categories.transactions,onChange:()=>g("transactions")}),u.jsx("div",{className:"w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"})]})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx(Em,{className:"h-5 w-5 text-purple-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-white",children:"Group Updates"}),u.jsx("p",{className:"text-sm text-gray-400",children:"New members, messages, and activities"})]})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:c.categories.groupUpdates,onChange:()=>g("groupUpdates")}),u.jsx("div",{className:"w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"})]})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx(LO,{className:"h-5 w-5 text-purple-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-white",children:"Security"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Sign-ins, password changes, and alerts"})]})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:c.categories.security,onChange:()=>g("security")}),u.jsx("div",{className:"w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"})]})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx(CO,{className:"h-5 w-5 text-purple-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-white",children:"Marketing"}),u.jsx("p",{className:"text-sm text-gray-400",children:"News, updates, and promotions"})]})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:c.categories.marketing,onChange:()=>g("marketing")}),u.jsx("div",{className:"w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"})]})]})]})]})})]})]})};function X4(){return u.jsx(sk,{children:u.jsx(gO,{children:u.jsx(yO,{children:u.jsxs(Jb,{children:[u.jsx(Et,{path:"/",element:u.jsx(zO,{})}),u.jsx(Et,{path:"/login",element:u.jsx(R4,{})}),u.jsx(Et,{path:"/signup",element:u.jsx(P4,{})}),u.jsx(Et,{path:"/setup-dwolla",element:u.jsx(H4,{})}),u.jsx(Et,{path:"/dwolla-confirmation",element:u.jsx(G4,{})}),u.jsxs(Et,{element:u.jsx(UO,{}),children:[u.jsx(Et,{path:"/profile",element:u.jsx(N4,{})}),u.jsx(Et,{path:"/my-leagues",element:u.jsx(C4,{})}),u.jsx(Et,{path:"/send-money",element:u.jsx(D4,{})}),u.jsx(Et,{path:"/banking",element:u.jsx(z4,{})}),u.jsx(Et,{path:"/deposit",element:u.jsx(Q4,{})}),u.jsx(Et,{path:"/platforms",element:u.jsx(q4,{})}),u.jsx(Et,{path:"/settings/notifications",element:u.jsx(J4,{})})]})]})})})})}Hd.createRoot(document.getElementById("root")).render(u.jsx(Tf.StrictMode,{children:u.jsx(X4,{})}));
//# sourceMappingURL=main-DGzjTJhI.js.map
