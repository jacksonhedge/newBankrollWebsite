function OT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function LT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bv={exports:{}},Pc={},Sv={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),MT=Symbol.for("react.portal"),VT=Symbol.for("react.fragment"),FT=Symbol.for("react.strict_mode"),UT=Symbol.for("react.profiler"),$T=Symbol.for("react.provider"),zT=Symbol.for("react.context"),BT=Symbol.for("react.forward_ref"),qT=Symbol.for("react.suspense"),WT=Symbol.for("react.memo"),HT=Symbol.for("react.lazy"),Eg=Symbol.iterator;function GT(t){return t===null||typeof t!="object"?null:(t=Eg&&t[Eg]||t["@@iterator"],typeof t=="function"?t:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nv=Object.assign,Av={};function wi(t,e,n){this.props=t,this.context=e,this.refs=Av,this.updater=n||kv}wi.prototype.isReactComponent={};wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cv(){}Cv.prototype=wi.prototype;function pf(t,e,n){this.props=t,this.context=e,this.refs=Av,this.updater=n||kv}var mf=pf.prototype=new Cv;mf.constructor=pf;Nv(mf,wi.prototype);mf.isPureReactComponent=!0;var Tg=Array.isArray,Pv=Object.prototype.hasOwnProperty,gf={current:null},Rv={key:!0,ref:!0,__self:!0,__source:!0};function jv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Pv.call(e,r)&&!Rv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ca,type:t,key:i,ref:o,props:s,_owner:gf.current}}function KT(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function QT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ig=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QT(""+t.key):e.toString(36)}function gl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case MT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Bu(o,0):r,Tg(s)?(n="",t!=null&&(n=t.replace(Ig,"$&/")+"/"),gl(s,e,n,"",function(d){return d})):s!=null&&(yf(s)&&(s=KT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Ig,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Tg(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+Bu(i,l);o+=gl(i,e,n,c,s)}else if(c=GT(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+Bu(i,l++),o+=gl(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],s=0;return gl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function YT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},yl={transition:null},JT={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:yl,ReactCurrentOwner:gf};function Dv(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=wi;ie.Fragment=VT;ie.Profiler=UT;ie.PureComponent=pf;ie.StrictMode=FT;ie.Suspense=qT;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT;ie.act=Dv;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Nv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=gf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Pv.call(e,c)&&!Rv.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ca,type:t.type,key:s,ref:i,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:zT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$T,_context:t},t.Consumer=t};ie.createElement=jv;ie.createFactory=function(t){var e=jv.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:BT,render:t}};ie.isValidElement=yf;ie.lazy=function(t){return{$$typeof:HT,_payload:{_status:-1,_result:t},_init:YT}};ie.memo=function(t,e){return{$$typeof:WT,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};ie.unstable_act=Dv;ie.useCallback=function(t,e){return Et.current.useCallback(t,e)};ie.useContext=function(t){return Et.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Et.current.useEffect(t,e)};ie.useId=function(){return Et.current.useId()};ie.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Et.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};ie.useRef=function(t){return Et.current.useRef(t)};ie.useState=function(t){return Et.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Et.current.useTransition()};ie.version="18.3.1";Sv.exports=ie;var j=Sv.exports;const Ov=LT(j),XT=OT({__proto__:null,default:Ov},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT=j,eI=Symbol.for("react.element"),tI=Symbol.for("react.fragment"),nI=Object.prototype.hasOwnProperty,rI=ZT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sI={key:!0,ref:!0,__self:!0,__source:!0};function Lv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nI.call(e,r)&&!sI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:eI,type:t,key:i,ref:o,props:s,_owner:rI.current}}Pc.Fragment=tI;Pc.jsx=Lv;Pc.jsxs=Lv;bv.exports=Pc;var u=bv.exports,Fd={},Mv={exports:{}},Ft={},Vv={exports:{}},Fv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,G){var J=U.length;U.push(G);e:for(;0<J;){var re=J-1>>>1,ae=U[re];if(0<s(ae,G))U[re]=G,U[J]=ae,J=re;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var G=U[0],J=U.pop();if(J!==G){U[0]=J;e:for(var re=0,ae=U.length,be=ae>>>1;re<be;){var En=2*(re+1)-1,Tn=U[En],In=En+1,bn=U[In];if(0>s(Tn,J))In<ae&&0>s(bn,Tn)?(U[re]=bn,U[In]=J,re=In):(U[re]=Tn,U[En]=J,re=En);else if(In<ae&&0>s(bn,J))U[re]=bn,U[In]=J,re=In;else break e}}return G}function s(U,G){var J=U.sortIndex-G.sortIndex;return J!==0?J:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],d=[],f=1,m=null,g=3,_=!1,k=!1,N=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(U){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=U)r(d),G.sortIndex=G.expirationTime,e(c,G);else break;G=n(d)}}function D(U){if(N=!1,I(U),!k)if(n(c)!==null)k=!0,K(L);else{var G=n(d);G!==null&&B(D,G.startTime-U)}}function L(U,G){k=!1,N&&(N=!1,w(v),v=-1),_=!0;var J=g;try{for(I(G),m=n(c);m!==null&&(!(m.expirationTime>G)||U&&!A());){var re=m.callback;if(typeof re=="function"){m.callback=null,g=m.priorityLevel;var ae=re(m.expirationTime<=G);G=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(c)&&r(c),I(G)}else r(c);m=n(c)}if(m!==null)var be=!0;else{var En=n(d);En!==null&&B(D,En.startTime-G),be=!1}return be}finally{m=null,g=J,_=!1}}var F=!1,E=null,v=-1,T=5,b=-1;function A(){return!(t.unstable_now()-b<T)}function C(){if(E!==null){var U=t.unstable_now();b=U;var G=!0;try{G=E(!0,U)}finally{G?S():(F=!1,E=null)}}else F=!1}var S;if(typeof x=="function")S=function(){x(C)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,H=ve.port2;ve.port1.onmessage=C,S=function(){H.postMessage(null)}}else S=function(){P(C,0)};function K(U){E=U,F||(F=!0,S())}function B(U,G){v=P(function(){U(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){k||_||(k=!0,K(L))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var J=g;g=G;try{return U()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=g;g=U;try{return G()}finally{g=J}},t.unstable_scheduleCallback=function(U,G,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,U){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=J+ae,U={id:f++,callback:G,priorityLevel:U,startTime:J,expirationTime:ae,sortIndex:-1},J>re?(U.sortIndex=J,e(d,U),n(c)===null&&U===n(d)&&(N?(w(v),v=-1):N=!0,B(D,J-re))):(U.sortIndex=ae,e(c,U),k||_||(k=!0,K(L))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var G=g;return function(){var J=g;g=G;try{return U.apply(this,arguments)}finally{g=J}}}})(Fv);Vv.exports=Fv;var iI=Vv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI=j,Mt=iI;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uv=new Set,Co={};function ws(t,e){ii(t,e),ii(t+"Capture",e)}function ii(t,e){for(Co[t]=e,t=0;t<e.length;t++)Uv.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=Object.prototype.hasOwnProperty,aI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bg={},Sg={};function lI(t){return Ud.call(Sg,t)?!0:Ud.call(bg,t)?!1:aI.test(t)?Sg[t]=!0:(bg[t]=!0,!1)}function cI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uI(t,e,n,r){if(e===null||typeof e>"u"||cI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vf=/[\-:]([a-z])/g;function wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vf,wf);et[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vf,wf);et[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vf,wf);et[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _f(t,e,n,r){var s=et.hasOwnProperty(e)?et[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uI(e,n,s,r)&&(n=null),r||s===null?lI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=oI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Bd=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),kg=Symbol.iterator;function Hi(t){return t===null||typeof t!="object"?null:(t=kg&&t[kg]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,qu;function ro(t){if(qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||""}return`
`+qu+t}var Wu=!1;function Hu(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function dI(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Rs:return"Portal";case $d:return"Profiler";case xf:return"StrictMode";case zd:return"Suspense";case Bd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zv:return(t.displayName||"Context")+".Consumer";case $v:return(t._context.displayName||"Context")+".Provider";case Ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tf:return e=t.displayName||null,e!==null?e:qd(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return qd(t(e))}catch{}}return null}function hI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qd(e);case 8:return e===xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fI(t){var e=qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=fI(t))}function Wv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wd(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ng(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hv(t,e){e=e.checked,e!=null&&_f(t,"checked",e,!1)}function Hd(t,e){Hv(t,e);var n=Rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gd(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gd(t,e,n){(e!=="number"||Ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function Hs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(so(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function Gv(t,e){var n=Rr(e.value),r=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,Qv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pI=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){pI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function Yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function Jv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Yv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var mI=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yd(t,e){if(e){if(mI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=null;function If(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zd=null,Gs=null,Ks=null;function Rg(t){if(t=ha(t)){if(typeof Zd!="function")throw Error($(280));var e=t.stateNode;e&&(e=Lc(e),Zd(t.stateNode,t.type,e))}}function Xv(t){Gs?Ks?Ks.push(t):Ks=[t]:Gs=t}function Zv(){if(Gs){var t=Gs,e=Ks;if(Ks=Gs=null,Rg(t),e)for(t=0;t<e.length;t++)Rg(e[t])}}function ew(t,e){return t(e)}function tw(){}var Gu=!1;function nw(t,e,n){if(Gu)return t(e,n);Gu=!0;try{return ew(t,e,n)}finally{Gu=!1,(Gs!==null||Ks!==null)&&(tw(),Zv())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var eh=!1;if(Bn)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){eh=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{eh=!1}function gI(t,e,n,r,s,i,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var yo=!1,Vl=null,Fl=!1,th=null,yI={onError:function(t){yo=!0,Vl=t}};function vI(t,e,n,r,s,i,o,l,c){yo=!1,Vl=null,gI.apply(yI,arguments)}function wI(t,e,n,r,s,i,o,l,c){if(vI.apply(this,arguments),yo){if(yo){var d=Vl;yo=!1,Vl=null}else throw Error($(198));Fl||(Fl=!0,th=d)}}function _s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jg(t){if(_s(t)!==t)throw Error($(188))}function _I(t){var e=t.alternate;if(!e){if(e=_s(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return jg(s),t;if(i===r)return jg(s),e;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function sw(t){return t=_I(t),t!==null?iw(t):null}function iw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iw(t);if(e!==null)return e;t=t.sibling}return null}var ow=Mt.unstable_scheduleCallback,Dg=Mt.unstable_cancelCallback,xI=Mt.unstable_shouldYield,EI=Mt.unstable_requestPaint,je=Mt.unstable_now,TI=Mt.unstable_getCurrentPriorityLevel,bf=Mt.unstable_ImmediatePriority,aw=Mt.unstable_UserBlockingPriority,Ul=Mt.unstable_NormalPriority,II=Mt.unstable_LowPriority,lw=Mt.unstable_IdlePriority,Rc=null,hn=null;function bI(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Rc,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:NI,SI=Math.log,kI=Math.LN2;function NI(t){return t>>>=0,t===0?32:31-(SI(t)/kI|0)|0}var Xa=64,Za=4194304;function io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=io(l):(i&=o,i!==0&&(r=io(i)))}else o=n&~s,o!==0?r=io(o):i!==0&&(r=io(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),s=1<<n,r|=t[n],e&=~s;return r}function AI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-tn(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=AI(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cw(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function PI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-tn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var fe=0;function uw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dw,kf,hw,fw,pw,rh=!1,el=[],xr=null,Er=null,Tr=null,jo=new Map,Do=new Map,dr=[],RI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Og(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(e.pointerId)}}function Ki(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ha(e),e!==null&&kf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function jI(t,e,n,r,s){switch(e){case"focusin":return xr=Ki(xr,t,e,n,r,s),!0;case"dragenter":return Er=Ki(Er,t,e,n,r,s),!0;case"mouseover":return Tr=Ki(Tr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return jo.set(i,Ki(jo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Do.set(i,Ki(Do.get(i)||null,t,e,n,r,s)),!0}return!1}function mw(t){var e=Jr(t.target);if(e!==null){var n=_s(e);if(n!==null){if(e=n.tag,e===13){if(e=rw(n),e!==null){t.blockedOn=e,pw(t.priority,function(){hw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xd=r,n.target.dispatchEvent(r),Xd=null}else return e=ha(n),e!==null&&kf(e),t.blockedOn=n,!1;e.shift()}return!0}function Lg(t,e,n){vl(t)&&n.delete(e)}function DI(){rh=!1,xr!==null&&vl(xr)&&(xr=null),Er!==null&&vl(Er)&&(Er=null),Tr!==null&&vl(Tr)&&(Tr=null),jo.forEach(Lg),Do.forEach(Lg)}function Qi(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,DI)))}function Oo(t){function e(s){return Qi(s,t)}if(0<el.length){Qi(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xr!==null&&Qi(xr,t),Er!==null&&Qi(Er,t),Tr!==null&&Qi(Tr,t),jo.forEach(e),Do.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)mw(n),n.blockedOn===null&&dr.shift()}var Qs=Jn.ReactCurrentBatchConfig,zl=!0;function OI(t,e,n,r){var s=fe,i=Qs.transition;Qs.transition=null;try{fe=1,Nf(t,e,n,r)}finally{fe=s,Qs.transition=i}}function LI(t,e,n,r){var s=fe,i=Qs.transition;Qs.transition=null;try{fe=4,Nf(t,e,n,r)}finally{fe=s,Qs.transition=i}}function Nf(t,e,n,r){if(zl){var s=sh(t,e,n,r);if(s===null)sd(t,e,r,Bl,n),Og(t,r);else if(jI(s,t,e,n,r))r.stopPropagation();else if(Og(t,r),e&4&&-1<RI.indexOf(t)){for(;s!==null;){var i=ha(s);if(i!==null&&dw(i),i=sh(t,e,n,r),i===null&&sd(t,e,r,Bl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else sd(t,e,r,null,n)}}var Bl=null;function sh(t,e,n,r){if(Bl=null,t=If(r),t=Jr(t),t!==null)if(e=_s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bl=t,null}function gw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TI()){case bf:return 1;case aw:return 4;case Ul:case II:return 16;case lw:return 536870912;default:return 16}default:return 16}}var yr=null,Af=null,wl=null;function yw(){if(wl)return wl;var t,e=Af,n=e.length,r,s="value"in yr?yr.value:yr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return wl=s.slice(t,1<r?1-r:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Mg(){return!1}function Ut(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tl:Mg,this.isPropagationStopped=Mg,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cf=Ut(_i),da=Ne({},_i,{view:0,detail:0}),MI=Ut(da),Qu,Yu,Yi,jc=Ne({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yi&&(Yi&&t.type==="mousemove"?(Qu=t.screenX-Yi.screenX,Yu=t.screenY-Yi.screenY):Yu=Qu=0,Yi=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),Vg=Ut(jc),VI=Ne({},jc,{dataTransfer:0}),FI=Ut(VI),UI=Ne({},da,{relatedTarget:0}),Ju=Ut(UI),$I=Ne({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),zI=Ut($I),BI=Ne({},_i,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qI=Ut(BI),WI=Ne({},_i,{data:0}),Fg=Ut(WI),HI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KI[t])?!!e[t]:!1}function Pf(){return QI}var YI=Ne({},da,{key:function(t){if(t.key){var e=HI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JI=Ut(YI),XI=Ne({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ug=Ut(XI),ZI=Ne({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),eb=Ut(ZI),tb=Ne({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),nb=Ut(tb),rb=Ne({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sb=Ut(rb),ib=[9,13,27,32],Rf=Bn&&"CompositionEvent"in window,vo=null;Bn&&"documentMode"in document&&(vo=document.documentMode);var ob=Bn&&"TextEvent"in window&&!vo,vw=Bn&&(!Rf||vo&&8<vo&&11>=vo),$g=" ",zg=!1;function ww(t,e){switch(t){case"keyup":return ib.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _w(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function ab(t,e){switch(t){case"compositionend":return _w(e);case"keypress":return e.which!==32?null:(zg=!0,$g);case"textInput":return t=e.data,t===$g&&zg?null:t;default:return null}}function lb(t,e){if(Ds)return t==="compositionend"||!Rf&&ww(t,e)?(t=yw(),wl=Af=yr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vw&&e.locale!=="ko"?null:e.data;default:return null}}var cb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cb[t.type]:e==="textarea"}function xw(t,e,n,r){Xv(r),e=ql(e,"onChange"),0<e.length&&(n=new Cf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,Lo=null;function ub(t){Rw(t,0)}function Dc(t){var e=Ms(t);if(Wv(e))return t}function db(t,e){if(t==="change")return e}var Ew=!1;if(Bn){var Xu;if(Bn){var Zu="oninput"in document;if(!Zu){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),Zu=typeof qg.oninput=="function"}Xu=Zu}else Xu=!1;Ew=Xu&&(!document.documentMode||9<document.documentMode)}function Wg(){wo&&(wo.detachEvent("onpropertychange",Tw),Lo=wo=null)}function Tw(t){if(t.propertyName==="value"&&Dc(Lo)){var e=[];xw(e,Lo,t,If(t)),nw(ub,e)}}function hb(t,e,n){t==="focusin"?(Wg(),wo=e,Lo=n,wo.attachEvent("onpropertychange",Tw)):t==="focusout"&&Wg()}function fb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dc(Lo)}function pb(t,e){if(t==="click")return Dc(e)}function mb(t,e){if(t==="input"||t==="change")return Dc(e)}function gb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:gb;function Mo(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ud.call(e,s)||!sn(t[s],e[s]))return!1}return!0}function Hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gg(t,e){var n=Hg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hg(n)}}function Iw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Iw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bw(){for(var t=window,e=Ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ml(t.document)}return e}function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yb(t){var e=bw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Iw(n.ownerDocument.documentElement,n)){if(r!==null&&jf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Gg(n,i);var o=Gg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vb=Bn&&"documentMode"in document&&11>=document.documentMode,Os=null,ih=null,_o=null,oh=!1;function Kg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||Os==null||Os!==Ml(r)||(r=Os,"selectionStart"in r&&jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&Mo(_o,r)||(_o=r,r=ql(ih,"onSelect"),0<r.length&&(e=new Cf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Os)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},ed={},Sw={};Bn&&(Sw=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Oc(t){if(ed[t])return ed[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sw)return ed[t]=e[n];return t}var kw=Oc("animationend"),Nw=Oc("animationiteration"),Aw=Oc("animationstart"),Cw=Oc("transitionend"),Pw=new Map,Qg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Pw.set(t,e),ws(e,[t])}for(var td=0;td<Qg.length;td++){var nd=Qg[td],wb=nd.toLowerCase(),_b=nd[0].toUpperCase()+nd.slice(1);Mr(wb,"on"+_b)}Mr(kw,"onAnimationEnd");Mr(Nw,"onAnimationIteration");Mr(Aw,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(Cw,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xb=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Yg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wI(r,e,void 0,t),t.currentTarget=null}function Rw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Yg(s,l,d),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Yg(s,l,d),i=c}}}if(Fl)throw t=th,Fl=!1,th=null,t}function xe(t,e){var n=e[dh];n===void 0&&(n=e[dh]=new Set);var r=t+"__bubble";n.has(r)||(jw(e,t,2,!1),n.add(r))}function rd(t,e,n){var r=0;e&&(r|=4),jw(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[rl]){t[rl]=!0,Uv.forEach(function(n){n!=="selectionchange"&&(xb.has(n)||rd(n,!1,t),rd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,rd("selectionchange",!1,e))}}function jw(t,e,n,r){switch(gw(e)){case 1:var s=OI;break;case 4:s=LI;break;default:s=Nf}n=s.bind(null,e,n,t),s=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function sd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Jr(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}nw(function(){var d=i,f=If(n),m=[];e:{var g=Pw.get(t);if(g!==void 0){var _=Cf,k=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":_=JI;break;case"focusin":k="focus",_=Ju;break;case"focusout":k="blur",_=Ju;break;case"beforeblur":case"afterblur":_=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=FI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=eb;break;case kw:case Nw:case Aw:_=zI;break;case Cw:_=nb;break;case"scroll":_=MI;break;case"wheel":_=sb;break;case"copy":case"cut":case"paste":_=qI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ug}var N=(e&4)!==0,P=!N&&t==="scroll",w=N?g!==null?g+"Capture":null:g;N=[];for(var x=d,I;x!==null;){I=x;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,w!==null&&(D=Ro(x,w),D!=null&&N.push(Fo(x,D,I)))),P)break;x=x.return}0<N.length&&(g=new _(g,k,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==Xd&&(k=n.relatedTarget||n.fromElement)&&(Jr(k)||k[qn]))break e;if((_||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,_?(k=n.relatedTarget||n.toElement,_=d,k=k?Jr(k):null,k!==null&&(P=_s(k),k!==P||k.tag!==5&&k.tag!==6)&&(k=null)):(_=null,k=d),_!==k)){if(N=Vg,D="onMouseLeave",w="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(N=Ug,D="onPointerLeave",w="onPointerEnter",x="pointer"),P=_==null?g:Ms(_),I=k==null?g:Ms(k),g=new N(D,x+"leave",_,n,f),g.target=P,g.relatedTarget=I,D=null,Jr(f)===d&&(N=new N(w,x+"enter",k,n,f),N.target=I,N.relatedTarget=P,D=N),P=D,_&&k)t:{for(N=_,w=k,x=0,I=N;I;I=Ns(I))x++;for(I=0,D=w;D;D=Ns(D))I++;for(;0<x-I;)N=Ns(N),x--;for(;0<I-x;)w=Ns(w),I--;for(;x--;){if(N===w||w!==null&&N===w.alternate)break t;N=Ns(N),w=Ns(w)}N=null}else N=null;_!==null&&Jg(m,g,_,N,!1),k!==null&&P!==null&&Jg(m,P,k,N,!0)}}e:{if(g=d?Ms(d):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var L=db;else if(Bg(g))if(Ew)L=mb;else{L=fb;var F=hb}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=pb);if(L&&(L=L(t,d))){xw(m,L,n,f);break e}F&&F(t,g,d),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Gd(g,"number",g.value)}switch(F=d?Ms(d):window,t){case"focusin":(Bg(F)||F.contentEditable==="true")&&(Os=F,ih=d,_o=null);break;case"focusout":_o=ih=Os=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Kg(m,n,f);break;case"selectionchange":if(vb)break;case"keydown":case"keyup":Kg(m,n,f)}var E;if(Rf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ds?ww(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(vw&&n.locale!=="ko"&&(Ds||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ds&&(E=yw()):(yr=f,Af="value"in yr?yr.value:yr.textContent,Ds=!0)),F=ql(d,v),0<F.length&&(v=new Fg(v,t,null,n,f),m.push({event:v,listeners:F}),E?v.data=E:(E=_w(n),E!==null&&(v.data=E)))),(E=ob?ab(t,n):lb(t,n))&&(d=ql(d,"onBeforeInput"),0<d.length&&(f=new Fg("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=E))}Rw(m,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ro(t,n),i!=null&&r.unshift(Fo(t,i,s)),i=Ro(t,e),i!=null&&r.push(Fo(t,i,s))),t=t.return}return r}function Ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,s?(c=Ro(n,i),c!=null&&o.unshift(Fo(n,c,l))):s||(c=Ro(n,i),c!=null&&o.push(Fo(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Eb=/\r\n?/g,Tb=/\u0000|\uFFFD/g;function Xg(t){return(typeof t=="string"?t:""+t).replace(Eb,`
`).replace(Tb,"")}function sl(t,e,n){if(e=Xg(e),Xg(t)!==e&&n)throw Error($(425))}function Wl(){}var ah=null,lh=null;function ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,Ib=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,bb=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch(Sb)}:uh;function Sb(t){setTimeout(function(){throw t})}function id(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Oo(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ey(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xi=Math.random().toString(36).slice(2),un="__reactFiber$"+xi,Uo="__reactProps$"+xi,qn="__reactContainer$"+xi,dh="__reactEvents$"+xi,kb="__reactListeners$"+xi,Nb="__reactHandles$"+xi;function Jr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ey(t);t!==null;){if(n=t[un])return n;t=ey(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[un]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Lc(t){return t[Uo]||null}var hh=[],Vs=-1;function Vr(t){return{current:t}}function Te(t){0>Vs||(t.current=hh[Vs],hh[Vs]=null,Vs--)}function ge(t,e){Vs++,hh[Vs]=t.current,t.current=e}var jr={},pt=Vr(jr),St=Vr(!1),os=jr;function oi(t,e){var n=t.type.contextTypes;if(!n)return jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function kt(t){return t=t.childContextTypes,t!=null}function Hl(){Te(St),Te(pt)}function ty(t,e,n){if(pt.current!==jr)throw Error($(168));ge(pt,e),ge(St,n)}function Dw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error($(108,hI(t)||"Unknown",s));return Ne({},n,r)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,os=pt.current,ge(pt,t),ge(St,St.current),!0}function ny(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=Dw(t,e,os),r.__reactInternalMemoizedMergedChildContext=t,Te(St),Te(pt),ge(pt,t)):Te(St),ge(St,n)}var Pn=null,Mc=!1,od=!1;function Ow(t){Pn===null?Pn=[t]:Pn.push(t)}function Ab(t){Mc=!0,Ow(t)}function Fr(){if(!od&&Pn!==null){od=!0;var t=0,e=fe;try{var n=Pn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pn=null,Mc=!1}catch(s){throw Pn!==null&&(Pn=Pn.slice(t+1)),ow(bf,Fr),s}finally{fe=e,od=!1}}return null}var Fs=[],Us=0,Kl=null,Ql=0,$t=[],zt=0,as=null,Dn=1,On="";function Kr(t,e){Fs[Us++]=Ql,Fs[Us++]=Kl,Kl=t,Ql=e}function Lw(t,e,n){$t[zt++]=Dn,$t[zt++]=On,$t[zt++]=as,as=t;var r=Dn;t=On;var s=32-tn(r)-1;r&=~(1<<s),n+=1;var i=32-tn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Dn=1<<32-tn(e)+s|n<<s|r,On=i+t}else Dn=1<<i|n<<s|r,On=t}function Df(t){t.return!==null&&(Kr(t,1),Lw(t,1,0))}function Of(t){for(;t===Kl;)Kl=Fs[--Us],Fs[Us]=null,Ql=Fs[--Us],Fs[Us]=null;for(;t===as;)as=$t[--zt],$t[zt]=null,On=$t[--zt],$t[zt]=null,Dn=$t[--zt],$t[zt]=null}var Ot=null,Dt=null,Ie=!1,en=null;function Mw(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ry(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Dt=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Dn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Dt=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(Ie){var e=Dt;if(e){var n=e;if(!ry(t,e)){if(fh(t))throw Error($(418));e=Ir(n.nextSibling);var r=Ot;e&&ry(t,e)?Mw(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Ot=t)}}else{if(fh(t))throw Error($(418));t.flags=t.flags&-4097|2,Ie=!1,Ot=t}}}function sy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function il(t){if(t!==Ot)return!1;if(!Ie)return sy(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ch(t.type,t.memoizedProps)),e&&(e=Dt)){if(fh(t))throw Vw(),Error($(418));for(;e;)Mw(t,e),e=Ir(e.nextSibling)}if(sy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Ot?Ir(t.stateNode.nextSibling):null;return!0}function Vw(){for(var t=Dt;t;)t=Ir(t.nextSibling)}function ai(){Dt=Ot=null,Ie=!1}function Lf(t){en===null?en=[t]:en.push(t)}var Cb=Jn.ReactCurrentBatchConfig;function Ji(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iy(t){var e=t._init;return e(t._payload)}function Fw(t){function e(w,x){if(t){var I=w.deletions;I===null?(w.deletions=[x],w.flags|=16):I.push(x)}}function n(w,x){if(!t)return null;for(;x!==null;)e(w,x),x=x.sibling;return null}function r(w,x){for(w=new Map;x!==null;)x.key!==null?w.set(x.key,x):w.set(x.index,x),x=x.sibling;return w}function s(w,x){return w=Nr(w,x),w.index=0,w.sibling=null,w}function i(w,x,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<x?(w.flags|=2,x):I):(w.flags|=2,x)):(w.flags|=1048576,x)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,x,I,D){return x===null||x.tag!==6?(x=fd(I,w.mode,D),x.return=w,x):(x=s(x,I),x.return=w,x)}function c(w,x,I,D){var L=I.type;return L===js?f(w,x,I.props.children,D,I.key):x!==null&&(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===cr&&iy(L)===x.type)?(D=s(x,I.props),D.ref=Ji(w,x,I),D.return=w,D):(D=kl(I.type,I.key,I.props,null,w.mode,D),D.ref=Ji(w,x,I),D.return=w,D)}function d(w,x,I,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==I.containerInfo||x.stateNode.implementation!==I.implementation?(x=pd(I,w.mode,D),x.return=w,x):(x=s(x,I.children||[]),x.return=w,x)}function f(w,x,I,D,L){return x===null||x.tag!==7?(x=ss(I,w.mode,D,L),x.return=w,x):(x=s(x,I),x.return=w,x)}function m(w,x,I){if(typeof x=="string"&&x!==""||typeof x=="number")return x=fd(""+x,w.mode,I),x.return=w,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qa:return I=kl(x.type,x.key,x.props,null,w.mode,I),I.ref=Ji(w,null,x),I.return=w,I;case Rs:return x=pd(x,w.mode,I),x.return=w,x;case cr:var D=x._init;return m(w,D(x._payload),I)}if(so(x)||Hi(x))return x=ss(x,w.mode,I,null),x.return=w,x;ol(w,x)}return null}function g(w,x,I,D){var L=x!==null?x.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:l(w,x,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Qa:return I.key===L?c(w,x,I,D):null;case Rs:return I.key===L?d(w,x,I,D):null;case cr:return L=I._init,g(w,x,L(I._payload),D)}if(so(I)||Hi(I))return L!==null?null:f(w,x,I,D,null);ol(w,I)}return null}function _(w,x,I,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(I)||null,l(x,w,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Qa:return w=w.get(D.key===null?I:D.key)||null,c(x,w,D,L);case Rs:return w=w.get(D.key===null?I:D.key)||null,d(x,w,D,L);case cr:var F=D._init;return _(w,x,I,F(D._payload),L)}if(so(D)||Hi(D))return w=w.get(I)||null,f(x,w,D,L,null);ol(x,D)}return null}function k(w,x,I,D){for(var L=null,F=null,E=x,v=x=0,T=null;E!==null&&v<I.length;v++){E.index>v?(T=E,E=null):T=E.sibling;var b=g(w,E,I[v],D);if(b===null){E===null&&(E=T);break}t&&E&&b.alternate===null&&e(w,E),x=i(b,x,v),F===null?L=b:F.sibling=b,F=b,E=T}if(v===I.length)return n(w,E),Ie&&Kr(w,v),L;if(E===null){for(;v<I.length;v++)E=m(w,I[v],D),E!==null&&(x=i(E,x,v),F===null?L=E:F.sibling=E,F=E);return Ie&&Kr(w,v),L}for(E=r(w,E);v<I.length;v++)T=_(E,w,v,I[v],D),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?v:T.key),x=i(T,x,v),F===null?L=T:F.sibling=T,F=T);return t&&E.forEach(function(A){return e(w,A)}),Ie&&Kr(w,v),L}function N(w,x,I,D){var L=Hi(I);if(typeof L!="function")throw Error($(150));if(I=L.call(I),I==null)throw Error($(151));for(var F=L=null,E=x,v=x=0,T=null,b=I.next();E!==null&&!b.done;v++,b=I.next()){E.index>v?(T=E,E=null):T=E.sibling;var A=g(w,E,b.value,D);if(A===null){E===null&&(E=T);break}t&&E&&A.alternate===null&&e(w,E),x=i(A,x,v),F===null?L=A:F.sibling=A,F=A,E=T}if(b.done)return n(w,E),Ie&&Kr(w,v),L;if(E===null){for(;!b.done;v++,b=I.next())b=m(w,b.value,D),b!==null&&(x=i(b,x,v),F===null?L=b:F.sibling=b,F=b);return Ie&&Kr(w,v),L}for(E=r(w,E);!b.done;v++,b=I.next())b=_(E,w,v,b.value,D),b!==null&&(t&&b.alternate!==null&&E.delete(b.key===null?v:b.key),x=i(b,x,v),F===null?L=b:F.sibling=b,F=b);return t&&E.forEach(function(C){return e(w,C)}),Ie&&Kr(w,v),L}function P(w,x,I,D){if(typeof I=="object"&&I!==null&&I.type===js&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Qa:e:{for(var L=I.key,F=x;F!==null;){if(F.key===L){if(L=I.type,L===js){if(F.tag===7){n(w,F.sibling),x=s(F,I.props.children),x.return=w,w=x;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===cr&&iy(L)===F.type){n(w,F.sibling),x=s(F,I.props),x.ref=Ji(w,F,I),x.return=w,w=x;break e}n(w,F);break}else e(w,F);F=F.sibling}I.type===js?(x=ss(I.props.children,w.mode,D,I.key),x.return=w,w=x):(D=kl(I.type,I.key,I.props,null,w.mode,D),D.ref=Ji(w,x,I),D.return=w,w=D)}return o(w);case Rs:e:{for(F=I.key;x!==null;){if(x.key===F)if(x.tag===4&&x.stateNode.containerInfo===I.containerInfo&&x.stateNode.implementation===I.implementation){n(w,x.sibling),x=s(x,I.children||[]),x.return=w,w=x;break e}else{n(w,x);break}else e(w,x);x=x.sibling}x=pd(I,w.mode,D),x.return=w,w=x}return o(w);case cr:return F=I._init,P(w,x,F(I._payload),D)}if(so(I))return k(w,x,I,D);if(Hi(I))return N(w,x,I,D);ol(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,x!==null&&x.tag===6?(n(w,x.sibling),x=s(x,I),x.return=w,w=x):(n(w,x),x=fd(I,w.mode,D),x.return=w,w=x),o(w)):n(w,x)}return P}var li=Fw(!0),Uw=Fw(!1),Yl=Vr(null),Jl=null,$s=null,Mf=null;function Vf(){Mf=$s=Jl=null}function Ff(t){var e=Yl.current;Te(Yl),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Jl=t,Mf=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bt=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Mf!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Jl===null)throw Error($(308));$s=t,Jl.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var Xr=null;function Uf(t){Xr===null?Xr=[t]:Xr.push(t)}function $w(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Uf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function $f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Wn(t,n)}return s=r.interleaved,s===null?(e.next=e,Uf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Wn(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sf(t,n)}}function oy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xl(t,e,n,r){var s=t.updateQueue;ur=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(i!==null){var m=s.baseState;o=0,f=d=c=null,l=i;do{var g=l.lane,_=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,N=l;switch(g=e,_=n,N.tag){case 1:if(k=N.payload,typeof k=="function"){m=k.call(_,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,g=typeof k=="function"?k.call(_,m,g):k,g==null)break e;m=Ne({},m,g);break e;case 2:ur=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=_,c=m):f=f.next=_,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(c=m),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=m}}function ay(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error($(191,s));s.call(r)}}}var fa={},fn=Vr(fa),$o=Vr(fa),zo=Vr(fa);function Zr(t){if(t===fa)throw Error($(174));return t}function zf(t,e){switch(ge(zo,e),ge($o,t),ge(fn,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qd(e,t)}Te(fn),ge(fn,e)}function ci(){Te(fn),Te($o),Te(zo)}function Bw(t){Zr(zo.current);var e=Zr(fn.current),n=Qd(e,t.type);e!==n&&(ge($o,t),ge(fn,n))}function Bf(t){$o.current===t&&(Te(fn),Te($o))}var Se=Vr(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ad=[];function qf(){for(var t=0;t<ad.length;t++)ad[t]._workInProgressVersionPrimary=null;ad.length=0}var El=Jn.ReactCurrentDispatcher,ld=Jn.ReactCurrentBatchConfig,ls=0,ke=null,Ue=null,Be=null,ec=!1,xo=!1,Bo=0,Pb=0;function it(){throw Error($(321))}function Wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Hf(t,e,n,r,s,i){if(ls=i,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,El.current=t===null||t.memoizedState===null?Ob:Lb,t=n(r,s),xo){i=0;do{if(xo=!1,Bo=0,25<=i)throw Error($(301));i+=1,Be=Ue=null,e.updateQueue=null,El.current=Mb,t=n(r,s)}while(xo)}if(El.current=tc,e=Ue!==null&&Ue.next!==null,ls=0,Be=Ue=ke=null,ec=!1,e)throw Error($(300));return t}function Gf(){var t=Bo!==0;return Bo=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ke.memoizedState=Be=t:Be=Be.next=t,Be}function Gt(){if(Ue===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Be===null?ke.memoizedState:Be.next;if(e!==null)Be=e,Ue=t;else{if(t===null)throw Error($(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Be===null?ke.memoizedState=Be=t:Be=Be.next=t}return Be}function qo(t,e){return typeof e=="function"?e(t):e}function cd(t){var e=Gt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Ue,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,d=i;do{var f=d.lane;if((ls&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,ke.lanes|=f,cs|=f}d=d.next}while(d!==null&&d!==i);c===null?o=r:c.next=l,sn(r,e.memoizedState)||(bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ke.lanes|=i,cs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ud(t){var e=Gt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);sn(i,e.memoizedState)||(bt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function qw(){}function Ww(t,e){var n=ke,r=Gt(),s=e(),i=!sn(r.memoizedState,s);if(i&&(r.memoizedState=s,bt=!0),r=r.queue,Kf(Kw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Wo(9,Gw.bind(null,n,r,s,e),void 0,null),We===null)throw Error($(349));ls&30||Hw(n,e,s)}return s}function Hw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gw(t,e,n,r){e.value=n,e.getSnapshot=r,Qw(e)&&Yw(t)}function Kw(t,e,n){return n(function(){Qw(e)&&Yw(t)})}function Qw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function Yw(t){var e=Wn(t,1);e!==null&&nn(e,t,1,-1)}function ly(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},e.queue=t,t=t.dispatch=Db.bind(null,ke,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jw(){return Gt().memoizedState}function Tl(t,e,n,r){var s=cn();ke.flags|=t,s.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function Vc(t,e,n,r){var s=Gt();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&Wf(r,o.deps)){s.memoizedState=Wo(e,n,i,r);return}}ke.flags|=t,s.memoizedState=Wo(1|e,n,i,r)}function cy(t,e){return Tl(8390656,8,t,e)}function Kf(t,e){return Vc(2048,8,t,e)}function Xw(t,e){return Vc(4,2,t,e)}function Zw(t,e){return Vc(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,e_.bind(null,e,t),n)}function Qf(){}function n_(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function s_(t,e,n){return ls&21?(sn(n,e)||(n=cw(),ke.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=n)}function Rb(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=ld.transition;ld.transition={};try{t(!1),e()}finally{fe=n,ld.transition=r}}function i_(){return Gt().memoizedState}function jb(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))a_(e,n);else if(n=$w(t,e,n,r),n!==null){var s=wt();nn(n,t,r,s),l_(n,e,r)}}function Db(t,e,n){var r=kr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))a_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,sn(l,o)){var c=e.interleaved;c===null?(s.next=s,Uf(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=$w(t,e,s,r),n!==null&&(s=wt(),nn(n,t,r,s),l_(n,e,r))}}function o_(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function a_(t,e){xo=ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sf(t,n)}}var tc={readContext:Ht,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},Ob={readContext:Ht,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:cy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jb.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:ly,useDebugValue:Qf,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=ly(!1),e=t[0];return t=Rb.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,s=cn();if(Ie){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),We===null)throw Error($(349));ls&30||Hw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,cy(Kw.bind(null,r,i,t),[t]),r.flags|=2048,Wo(9,Gw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=cn(),e=We.identifierPrefix;if(Ie){var n=On,r=Dn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Pb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lb={readContext:Ht,useCallback:n_,useContext:Ht,useEffect:Kf,useImperativeHandle:t_,useInsertionEffect:Xw,useLayoutEffect:Zw,useMemo:r_,useReducer:cd,useRef:Jw,useState:function(){return cd(qo)},useDebugValue:Qf,useDeferredValue:function(t){var e=Gt();return s_(e,Ue.memoizedState,t)},useTransition:function(){var t=cd(qo)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:qw,useSyncExternalStore:Ww,useId:i_,unstable_isNewReconciler:!1},Mb={readContext:Ht,useCallback:n_,useContext:Ht,useEffect:Kf,useImperativeHandle:t_,useInsertionEffect:Xw,useLayoutEffect:Zw,useMemo:r_,useReducer:ud,useRef:Jw,useState:function(){return ud(qo)},useDebugValue:Qf,useDeferredValue:function(t){var e=Gt();return Ue===null?e.memoizedState=t:s_(e,Ue.memoizedState,t)},useTransition:function(){var t=ud(qo)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:qw,useSyncExternalStore:Ww,useId:i_,unstable_isNewReconciler:!1};function Xt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?_s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),s=kr(t),i=Fn(r,s);i.payload=e,n!=null&&(i.callback=n),e=br(t,i,s),e!==null&&(nn(e,t,s,r),xl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),s=kr(t),i=Fn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=br(t,i,s),e!==null&&(nn(e,t,s,r),xl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=kr(t),s=Fn(n,r);s.tag=2,e!=null&&(s.callback=e),e=br(t,s,r),e!==null&&(nn(e,t,r,n),xl(e,t,r))}};function uy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,r)||!Mo(s,i):!0}function c_(t,e,n){var r=!1,s=jr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ht(i):(s=kt(e)?os:pt.current,r=e.contextTypes,i=(r=r!=null)?oi(t,s):jr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function dy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},$f(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ht(i):(i=kt(e)?os:pt.current,s.context=oi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(gh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Fc.enqueueReplaceState(s,s.state,null),Xl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ui(t,e){try{var n="",r=e;do n+=dI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vb=typeof WeakMap=="function"?WeakMap:Map;function u_(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rc||(rc=!0,Nh=r),vh(t,e)},n}function d_(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){vh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){vh(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Vb;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Xb.bind(null,t,e,n),e.then(t,t))}function fy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function py(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var Fb=Jn.ReactCurrentOwner,bt=!1;function vt(t,e,n,r){e.child=t===null?Uw(e,null,n,r):li(e,t.child,n,r)}function my(t,e,n,r,s){n=n.render;var i=e.ref;return Ys(e,s),r=Hf(t,e,n,r,i,s),n=Gf(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Hn(t,e,s)):(Ie&&n&&Df(e),e.flags|=1,vt(t,e,r,s),e.child)}function gy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!rp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,h_(t,e,i,r,s)):(t=kl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(o,r)&&t.ref===e.ref)return Hn(t,e,s)}return e.flags|=1,t=Nr(i,r),t.ref=e.ref,t.return=e,e.child=t}function h_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Mo(i,r)&&t.ref===e.ref)if(bt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(bt=!0);else return e.lanes=t.lanes,Hn(t,e,s)}return wh(t,e,n,r,s)}function f_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Bs,Rt),Rt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Bs,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Bs,Rt),Rt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(Bs,Rt),Rt|=r;return vt(t,e,s,n),e.child}function p_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wh(t,e,n,r,s){var i=kt(n)?os:pt.current;return i=oi(e,i),Ys(e,s),n=Hf(t,e,n,r,i,s),r=Gf(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Hn(t,e,s)):(Ie&&r&&Df(e),e.flags|=1,vt(t,e,n,s),e.child)}function yy(t,e,n,r,s){if(kt(n)){var i=!0;Gl(e)}else i=!1;if(Ys(e,s),e.stateNode===null)Il(t,e),c_(e,n,r),yh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ht(d):(d=kt(n)?os:pt.current,d=oi(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&dy(e,o,r,d),ur=!1;var g=e.memoizedState;o.state=g,Xl(e,r,o,s),c=e.memoizedState,l!==r||g!==c||St.current||ur?(typeof f=="function"&&(gh(e,n,f,r),c=e.memoizedState),(l=ur||uy(e,n,l,r,g,c,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zw(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Xt(e.type,l),o.props=d,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ht(c):(c=kt(n)?os:pt.current,c=oi(e,c));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&dy(e,o,r,c),ur=!1,g=e.memoizedState,o.state=g,Xl(e,r,o,s);var k=e.memoizedState;l!==m||g!==k||St.current||ur?(typeof _=="function"&&(gh(e,n,_,r),k=e.memoizedState),(d=ur||uy(e,n,d,r,g,k,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return _h(t,e,n,r,i,s)}function _h(t,e,n,r,s,i){p_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&ny(e,n,!1),Hn(t,e,i);r=e.stateNode,Fb.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=li(e,t.child,null,i),e.child=li(e,null,l,i)):vt(t,e,l,i),e.memoizedState=r.state,s&&ny(e,n,!0),e.child}function m_(t){var e=t.stateNode;e.pendingContext?ty(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ty(t,e.context,!1),zf(t,e.containerInfo)}function vy(t,e,n,r,s){return ai(),Lf(s),e.flags|=256,vt(t,e,n,r),e.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function Eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function g_(t,e,n){var r=e.pendingProps,s=Se.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(Se,s&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=zc(o,r,0,null),t=ss(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Eh(n),e.memoizedState=xh,t):Yf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Ub(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Nr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Nr(l,i):(i=ss(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=xh,r}return i=t.child,t=i.sibling,r=Nr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yf(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&Lf(r),li(e,t.child,null,n),t=Yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ub(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=dd(Error($(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=zc({mode:"visible",children:r.children},s,0,null),i=ss(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&li(e,t.child,null,o),e.child.memoizedState=Eh(o),e.memoizedState=xh,i);if(!(e.mode&1))return al(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error($(419)),r=dd(i,r,void 0),al(t,e,o,r)}if(l=(o&t.childLanes)!==0,bt||l){if(r=We,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Wn(t,s),nn(r,t,s,-1))}return np(),r=dd(Error($(421))),al(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Zb.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Dt=Ir(s.nextSibling),Ot=e,Ie=!0,en=null,t!==null&&($t[zt++]=Dn,$t[zt++]=On,$t[zt++]=as,Dn=t.id,On=t.overflow,as=e),e=Yf(e,r.children),e.flags|=4096,e)}function wy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function hd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function y_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(vt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wy(t,n,e);else if(t.tag===19)wy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Se,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),hd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Zl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}hd(e,!0,n,null,i);break;case"together":hd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $b(t,e,n){switch(e.tag){case 3:m_(e),ai();break;case 5:Bw(e);break;case 1:kt(e.type)&&Gl(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(Yl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?g_(t,e,n):(ge(Se,Se.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);ge(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return y_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,f_(t,e,n)}return Hn(t,e,n)}var v_,Th,w_,__;v_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Th=function(){};w_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Zr(fn.current);var i=null;switch(n){case"input":s=Wd(t,s),r=Wd(t,r),i=[];break;case"select":s=Ne({},s,{value:void 0}),r=Ne({},r,{value:void 0}),i=[];break;case"textarea":s=Kd(t,s),r=Kd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wl)}Yd(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Co.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Co.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&xe("scroll",t),i||l===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};__=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xi(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zb(t,e,n){var r=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return kt(e.type)&&Hl(),ot(e),null;case 3:return r=e.stateNode,ci(),Te(St),Te(pt),qf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(Ph(en),en=null))),Th(t,e),ot(e),null;case 5:Bf(e);var s=Zr(zo.current);if(n=e.type,t!==null&&e.stateNode!=null)w_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return ot(e),null}if(t=Zr(fn.current),il(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[un]=e,r[Uo]=i,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(s=0;s<oo.length;s++)xe(oo[s],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Ng(r,i),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},xe("invalid",r);break;case"textarea":Cg(r,i),xe("invalid",r)}Yd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),s=["children",""+l]):Co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Ya(r),Ag(r,i,!0);break;case"textarea":Ya(r),Pg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[Uo]=r,v_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jd(n,r),n){case"dialog":xe("cancel",t),xe("close",t),s=r;break;case"iframe":case"object":case"embed":xe("load",t),s=r;break;case"video":case"audio":for(s=0;s<oo.length;s++)xe(oo[s],t);s=r;break;case"source":xe("error",t),s=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),s=r;break;case"details":xe("toggle",t),s=r;break;case"input":Ng(t,r),s=Wd(t,r),xe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ne({},r,{value:void 0}),xe("invalid",t);break;case"textarea":Cg(t,r),s=Kd(t,r),xe("invalid",t);break;default:s=r}Yd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Jv(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Qv(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Po(t,c):typeof c=="number"&&Po(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Co.hasOwnProperty(i)?c!=null&&i==="onScroll"&&xe("scroll",t):c!=null&&_f(t,i,c,o))}switch(n){case"input":Ya(t),Ag(t,r,!1);break;case"textarea":Ya(t),Pg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Hs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)__(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Zr(zo.current),Zr(fn.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(i=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return ot(e),null;case 13:if(Te(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Dt!==null&&e.mode&1&&!(e.flags&128))Vw(),ai(),e.flags|=98560,i=!1;else if(i=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error($(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[un]=e}else ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),i=!1}else en!==null&&(Ph(en),en=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?$e===0&&($e=3):np())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return ci(),Th(t,e),t===null&&Vo(e.stateNode.containerInfo),ot(e),null;case 10:return Ff(e.type._context),ot(e),null;case 17:return kt(e.type)&&Hl(),ot(e),null;case 19:if(Te(Se),i=e.memoizedState,i===null)return ot(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Xi(i,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zl(t),o!==null){for(e.flags|=128,Xi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Se,Se.current&1|2),e.child}t=t.sibling}i.tail!==null&&je()>di&&(e.flags|=128,r=!0,Xi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Zl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return ot(e),null}else 2*je()-i.renderingStartTime>di&&n!==1073741824&&(e.flags|=128,r=!0,Xi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=je(),e.sibling=null,n=Se.current,ge(Se,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return tp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Bb(t,e){switch(Of(e),e.tag){case 1:return kt(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ci(),Te(St),Te(pt),qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(Te(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Se),null;case 4:return ci(),null;case 10:return Ff(e.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var ll=!1,ut=!1,qb=typeof WeakSet=="function"?WeakSet:Set,q=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Ih(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var _y=!1;function Wb(t,e){if(ah=zl,t=bw(),jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,f=0,m=t,g=null;t:for(;;){for(var _;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===t)break t;if(g===n&&++d===s&&(l=o),g===i&&++f===r&&(c=o),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},zl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var N=k.memoizedProps,P=k.memoizedState,w=e.stateNode,x=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:Xt(e.type,N),P);w.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(D){Pe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return k=_y,_y=!1,k}function Eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ih(e,n,i)}s=s.next}while(s!==r)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x_(t){var e=t.alternate;e!==null&&(t.alternate=null,x_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[Uo],delete e[dh],delete e[kb],delete e[Nb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E_(t){return t.tag===5||t.tag===3||t.tag===4}function xy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}var Ke=null,Zt=!1;function ir(t,e,n){for(n=n.child;n!==null;)T_(t,e,n),n=n.sibling}function T_(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Rc,n)}catch{}switch(n.tag){case 5:ut||zs(n,e);case 6:var r=Ke,s=Zt;Ke=null,ir(t,e,n),Ke=r,Zt=s,Ke!==null&&(Zt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Zt?(t=Ke,n=n.stateNode,t.nodeType===8?id(t.parentNode,n):t.nodeType===1&&id(t,n),Oo(t)):id(Ke,n.stateNode));break;case 4:r=Ke,s=Zt,Ke=n.stateNode.containerInfo,Zt=!0,ir(t,e,n),Ke=r,Zt=s;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ih(n,e,o),s=s.next}while(s!==r)}ir(t,e,n);break;case 1:if(!ut&&(zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,ir(t,e,n),ut=r):ir(t,e,n);break;default:ir(t,e,n)}}function Ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qb),e.forEach(function(r){var s=eS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Zt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Zt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Zt=!0;break e}l=l.return}if(Ke===null)throw Error($(160));T_(i,o,s),Ke=null,Zt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){Pe(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)I_(e,t),e=e.sibling}function I_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),ln(t),r&4){try{Eo(3,t,t.return),Uc(3,t)}catch(N){Pe(t,t.return,N)}try{Eo(5,t,t.return)}catch(N){Pe(t,t.return,N)}}break;case 1:Jt(e,t),ln(t),r&512&&n!==null&&zs(n,n.return);break;case 5:if(Jt(e,t),ln(t),r&512&&n!==null&&zs(n,n.return),t.flags&32){var s=t.stateNode;try{Po(s,"")}catch(N){Pe(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Hv(s,i),Jd(l,o);var d=Jd(l,i);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?Jv(s,m):f==="dangerouslySetInnerHTML"?Qv(s,m):f==="children"?Po(s,m):_f(s,f,m,d)}switch(l){case"input":Hd(s,i);break;case"textarea":Gv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Hs(s,!!i.multiple,_,!1):g!==!!i.multiple&&(i.defaultValue!=null?Hs(s,!!i.multiple,i.defaultValue,!0):Hs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Uo]=i}catch(N){Pe(t,t.return,N)}}break;case 6:if(Jt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error($(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Pe(t,t.return,N)}}break;case 3:if(Jt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(e.containerInfo)}catch(N){Pe(t,t.return,N)}break;case 4:Jt(e,t),ln(t);break;case 13:Jt(e,t),ln(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Zf=je())),r&4&&Ey(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(d=ut)||f,Jt(e,t),ut=d):Jt(e,t),ln(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(g=q,_=g.child,g.tag){case 0:case 11:case 14:case 15:Eo(4,g,g.return);break;case 1:zs(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(N){Pe(r,n,N)}}break;case 5:zs(g,g.return);break;case 22:if(g.memoizedState!==null){Iy(m);continue}}_!==null?(_.return=g,q=_):Iy(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Yv("display",o))}catch(N){Pe(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(N){Pe(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Jt(e,t),ln(t),r&4&&Ey(t);break;case 21:break;default:Jt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E_(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Po(s,""),r.flags&=-33);var i=xy(t);kh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xy(t);Sh(t,l,o);break;default:throw Error($(161))}}catch(c){Pe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hb(t,e,n){q=t,b_(t)}function b_(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ll;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||ut;l=ll;var d=ut;if(ll=o,(ut=c)&&!d)for(q=s;q!==null;)o=q,c=o.child,o.tag===22&&o.memoizedState!==null?by(s):c!==null?(c.return=o,q=c):by(s);for(;i!==null;)q=i,b_(i),i=i.sibling;q=s,ll=l,ut=d}Ty(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Ty(t)}}function Ty(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Uc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&ay(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ay(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Oo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}ut||e.flags&512&&bh(e)}catch(g){Pe(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Iy(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function by(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(c){Pe(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){Pe(e,s,c)}}var i=e.return;try{bh(e)}catch(c){Pe(e,i,c)}break;case 5:var o=e.return;try{bh(e)}catch(c){Pe(e,o,c)}}}catch(c){Pe(e,e.return,c)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var Gb=Math.ceil,nc=Jn.ReactCurrentDispatcher,Jf=Jn.ReactCurrentOwner,Wt=Jn.ReactCurrentBatchConfig,ue=0,We=null,Me=null,Xe=0,Rt=0,Bs=Vr(0),$e=0,Ho=null,cs=0,$c=0,Xf=0,To=null,It=null,Zf=0,di=1/0,An=null,rc=!1,Nh=null,Sr=null,cl=!1,vr=null,sc=0,Io=0,Ah=null,bl=-1,Sl=0;function wt(){return ue&6?je():bl!==-1?bl:bl=je()}function kr(t){return t.mode&1?ue&2&&Xe!==0?Xe&-Xe:Cb.transition!==null?(Sl===0&&(Sl=cw()),Sl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:gw(t.type)),t):1}function nn(t,e,n,r){if(50<Io)throw Io=0,Ah=null,Error($(185));ua(t,n,r),(!(ue&2)||t!==We)&&(t===We&&(!(ue&2)&&($c|=n),$e===4&&hr(t,Xe)),Nt(t,r),n===1&&ue===0&&!(e.mode&1)&&(di=je()+500,Mc&&Fr()))}function Nt(t,e){var n=t.callbackNode;CI(t,e);var r=$l(t,t===We?Xe:0);if(r===0)n!==null&&Dg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dg(n),e===1)t.tag===0?Ab(Sy.bind(null,t)):Ow(Sy.bind(null,t)),bb(function(){!(ue&6)&&Fr()}),n=null;else{switch(uw(r)){case 1:n=bf;break;case 4:n=aw;break;case 16:n=Ul;break;case 536870912:n=lw;break;default:n=Ul}n=j_(n,S_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S_(t,e){if(bl=-1,Sl=0,ue&6)throw Error($(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var r=$l(t,t===We?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ic(t,r);else{e=r;var s=ue;ue|=2;var i=N_();(We!==t||Xe!==e)&&(An=null,di=je()+500,rs(t,e));do try{Yb();break}catch(l){k_(t,l)}while(!0);Vf(),nc.current=i,ue=s,Me!==null?e=0:(We=null,Xe=0,e=$e)}if(e!==0){if(e===2&&(s=nh(t),s!==0&&(r=s,e=Ch(t,s))),e===1)throw n=Ho,rs(t,0),hr(t,r),Nt(t,je()),n;if(e===6)hr(t,r);else{if(s=t.current.alternate,!(r&30)&&!Kb(s)&&(e=ic(t,r),e===2&&(i=nh(t),i!==0&&(r=i,e=Ch(t,i))),e===1))throw n=Ho,rs(t,0),hr(t,r),Nt(t,je()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Qr(t,It,An);break;case 3:if(hr(t,r),(r&130023424)===r&&(e=Zf+500-je(),10<e)){if($l(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=uh(Qr.bind(null,t,It,An),e);break}Qr(t,It,An);break;case 4:if(hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-tn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gb(r/1960))-r,10<r){t.timeoutHandle=uh(Qr.bind(null,t,It,An),r);break}Qr(t,It,An);break;case 5:Qr(t,It,An);break;default:throw Error($(329))}}}return Nt(t,je()),t.callbackNode===n?S_.bind(null,t):null}function Ch(t,e){var n=To;return t.current.memoizedState.isDehydrated&&(rs(t,e).flags|=256),t=ic(t,e),t!==2&&(e=It,It=n,e!==null&&Ph(e)),t}function Ph(t){It===null?It=t:It.push.apply(It,t)}function Kb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!sn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Xf,e&=~$c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Sy(t){if(ue&6)throw Error($(327));Js();var e=$l(t,0);if(!(e&1))return Nt(t,je()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=Ch(t,r))}if(n===1)throw n=Ho,rs(t,0),hr(t,e),Nt(t,je()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,It,An),Nt(t,je()),null}function ep(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(di=je()+500,Mc&&Fr())}}function us(t){vr!==null&&vr.tag===0&&!(ue&6)&&Js();var e=ue;ue|=1;var n=Wt.transition,r=fe;try{if(Wt.transition=null,fe=1,t)return t()}finally{fe=r,Wt.transition=n,ue=e,!(ue&6)&&Fr()}}function tp(){Rt=Bs.current,Te(Bs)}function rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ib(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Of(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hl();break;case 3:ci(),Te(St),Te(pt),qf();break;case 5:Bf(r);break;case 4:ci();break;case 13:Te(Se);break;case 19:Te(Se);break;case 10:Ff(r.type._context);break;case 22:case 23:tp()}n=n.return}if(We=t,Me=t=Nr(t.current,null),Xe=Rt=e,$e=0,Ho=null,Xf=$c=cs=0,It=To=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Xr=null}return t}function k_(t,e){do{var n=Me;try{if(Vf(),El.current=tc,ec){for(var r=ke.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ec=!1}if(ls=0,Be=Ue=ke=null,xo=!1,Bo=0,Jf.current=null,n===null||n.return===null){$e=1,Ho=e,Me=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=Xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=fy(o);if(_!==null){_.flags&=-257,py(_,o,l,i,e),_.mode&1&&hy(i,d,e),e=_,c=d;var k=e.updateQueue;if(k===null){var N=new Set;N.add(c),e.updateQueue=N}else k.add(c);break e}else{if(!(e&1)){hy(i,d,e),np();break e}c=Error($(426))}}else if(Ie&&l.mode&1){var P=fy(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),py(P,o,l,i,e),Lf(ui(c,l));break e}}i=c=ui(c,l),$e!==4&&($e=2),To===null?To=[i]:To.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=u_(i,c,e);oy(i,w);break e;case 1:l=c;var x=i.type,I=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Sr===null||!Sr.has(I)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=d_(i,l,e);oy(i,D);break e}}i=i.return}while(i!==null)}C_(n)}catch(L){e=L,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function N_(){var t=nc.current;return nc.current=tc,t===null?tc:t}function np(){($e===0||$e===3||$e===2)&&($e=4),We===null||!(cs&268435455)&&!($c&268435455)||hr(We,Xe)}function ic(t,e){var n=ue;ue|=2;var r=N_();(We!==t||Xe!==e)&&(An=null,rs(t,e));do try{Qb();break}catch(s){k_(t,s)}while(!0);if(Vf(),ue=n,nc.current=r,Me!==null)throw Error($(261));return We=null,Xe=0,$e}function Qb(){for(;Me!==null;)A_(Me)}function Yb(){for(;Me!==null&&!xI();)A_(Me)}function A_(t){var e=R_(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?C_(t):Me=e,Jf.current=null}function C_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Bb(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Me=null;return}}else if(n=zb(n,e,Rt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);$e===0&&($e=5)}function Qr(t,e,n){var r=fe,s=Wt.transition;try{Wt.transition=null,fe=1,Jb(t,e,n,r)}finally{Wt.transition=s,fe=r}return null}function Jb(t,e,n,r){do Js();while(vr!==null);if(ue&6)throw Error($(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(PI(t,i),t===We&&(Me=We=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,j_(Ul,function(){return Js(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Wt.transition,Wt.transition=null;var o=fe;fe=1;var l=ue;ue|=4,Jf.current=null,Wb(t,n),I_(n,t),yb(lh),zl=!!ah,lh=ah=null,t.current=n,Hb(n),EI(),ue=l,fe=o,Wt.transition=i}else t.current=n;if(cl&&(cl=!1,vr=t,sc=s),i=t.pendingLanes,i===0&&(Sr=null),bI(n.stateNode),Nt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(rc)throw rc=!1,t=Nh,Nh=null,t;return sc&1&&t.tag!==0&&Js(),i=t.pendingLanes,i&1?t===Ah?Io++:(Io=0,Ah=t):Io=0,Fr(),null}function Js(){if(vr!==null){var t=uw(sc),e=Wt.transition,n=fe;try{if(Wt.transition=null,fe=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,sc=0,ue&6)throw Error($(331));var s=ue;for(ue|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(q=d;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Eo(8,f,i)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var g=f.sibling,_=f.return;if(x_(f),f===d){q=null;break}if(g!==null){g.return=_,q=g;break}q=_}}}var k=i.alternate;if(k!==null){var N=k.child;if(N!==null){k.child=null;do{var P=N.sibling;N.sibling=null,N=P}while(N!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Eo(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,q=w;break e}q=i.return}}var x=t.current;for(q=x;q!==null;){o=q;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,q=I;else e:for(o=x;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Uc(9,l)}}catch(L){Pe(l,l.return,L)}if(l===o){q=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,q=D;break e}q=l.return}}if(ue=s,Fr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Rc,t)}catch{}r=!0}return r}finally{fe=n,Wt.transition=e}}return!1}function ky(t,e,n){e=ui(n,e),e=u_(t,e,1),t=br(t,e,1),e=wt(),t!==null&&(ua(t,1,e),Nt(t,e))}function Pe(t,e,n){if(t.tag===3)ky(t,t,n);else for(;e!==null;){if(e.tag===3){ky(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=ui(n,t),t=d_(e,t,1),e=br(e,t,1),t=wt(),e!==null&&(ua(e,1,t),Nt(e,t));break}}e=e.return}}function Xb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Xe&n)===n&&($e===4||$e===3&&(Xe&130023424)===Xe&&500>je()-Zf?rs(t,0):Xf|=n),Nt(t,e)}function P_(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=wt();t=Wn(t,e),t!==null&&(ua(t,e,n),Nt(t,n))}function Zb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),P_(t,n)}function eS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),P_(t,n)}var R_;R_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bt=!1,$b(t,e,n);bt=!!(t.flags&131072)}else bt=!1,Ie&&e.flags&1048576&&Lw(e,Ql,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Il(t,e),t=e.pendingProps;var s=oi(e,pt.current);Ys(e,n),s=Hf(null,e,r,t,s,n);var i=Gf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(i=!0,Gl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$f(e),s.updater=Fc,e.stateNode=s,s._reactInternals=e,yh(e,r,t,n),e=_h(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&Df(e),vt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=nS(r),t=Xt(r,t),s){case 0:e=wh(null,e,r,t,n);break e;case 1:e=yy(null,e,r,t,n);break e;case 11:e=my(null,e,r,t,n);break e;case 14:e=gy(null,e,r,Xt(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),wh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),yy(t,e,r,s,n);case 3:e:{if(m_(e),t===null)throw Error($(387));r=e.pendingProps,i=e.memoizedState,s=i.element,zw(t,e),Xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ui(Error($(423)),e),e=vy(t,e,r,n,s);break e}else if(r!==s){s=ui(Error($(424)),e),e=vy(t,e,r,n,s);break e}else for(Dt=Ir(e.stateNode.containerInfo.firstChild),Ot=e,Ie=!0,en=null,n=Uw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ai(),r===s){e=Hn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return Bw(e),t===null&&ph(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,ch(r,s)?o=null:i!==null&&ch(r,i)&&(e.flags|=32),p_(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return g_(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=li(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),my(t,e,r,s,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(Yl,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===s.children&&!St.current){e=Hn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Fn(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),mh(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}vt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ys(e,n),s=Ht(s),r=r(s),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,s=Xt(r,e.pendingProps),s=Xt(r.type,s),gy(t,e,r,s,n);case 15:return h_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Il(t,e),e.tag=1,kt(r)?(t=!0,Gl(e)):t=!1,Ys(e,n),c_(e,r,s),yh(e,r,s,n),_h(null,e,r,!0,t,n);case 19:return y_(t,e,n);case 22:return f_(t,e,n)}throw Error($(156,e.tag))};function j_(t,e){return ow(t,e)}function tS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new tS(t,e,n,r)}function rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nS(t){if(typeof t=="function")return rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ef)return 11;if(t===Tf)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return ss(n.children,s,i,e);case xf:o=8,s|=8;break;case $d:return t=Bt(12,n,e,s|2),t.elementType=$d,t.lanes=i,t;case zd:return t=Bt(13,n,e,s),t.elementType=zd,t.lanes=i,t;case Bd:return t=Bt(19,n,e,s),t.elementType=Bd,t.lanes=i,t;case Bv:return zc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $v:o=10;break e;case zv:o=9;break e;case Ef:o=11;break e;case Tf:o=14;break e;case cr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ss(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function zc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=Bv,t.lanes=n,t.stateNode={isHidden:!1},t}function fd(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function pd(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function sp(t,e,n,r,s,i,o,l,c){return t=new rS(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Bt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(i),t}function sS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D_(t){if(!t)return jr;t=t._reactInternals;e:{if(_s(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(kt(n))return Dw(t,n,e)}return e}function O_(t,e,n,r,s,i,o,l,c){return t=sp(n,r,!0,t,s,i,o,l,c),t.context=D_(null),n=t.current,r=wt(),s=kr(n),i=Fn(r,s),i.callback=e??null,br(n,i,s),t.current.lanes=s,ua(t,s,r),Nt(t,r),t}function Bc(t,e,n,r){var s=e.current,i=wt(),o=kr(s);return n=D_(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=br(s,e,o),t!==null&&(nn(t,s,o,i),xl(t,s,o)),o}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ny(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ip(t,e){Ny(t,e),(t=t.alternate)&&Ny(t,e)}function iS(){return null}var L_=typeof reportError=="function"?reportError:function(t){console.error(t)};function op(t){this._internalRoot=t}qc.prototype.render=op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Bc(t,e,null,null)};qc.prototype.unmount=op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){Bc(null,t,null,null)}),e[qn]=null}};function qc(t){this._internalRoot=t}qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=fw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&mw(t)}};function ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ay(){}function oS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=oc(o);i.call(d)}}var o=O_(e,r,t,0,null,!1,!1,"",Ay);return t._reactRootContainer=o,t[qn]=o.current,Vo(t.nodeType===8?t.parentNode:t),us(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=oc(c);l.call(d)}}var c=sp(t,0,!1,null,null,!1,!1,"",Ay);return t._reactRootContainer=c,t[qn]=c.current,Vo(t.nodeType===8?t.parentNode:t),us(function(){Bc(e,c,n,r)}),c}function Hc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=oc(o);l.call(c)}}Bc(e,o,t,s)}else o=oS(n,e,t,s,r);return oc(o)}dw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=io(e.pendingLanes);n!==0&&(Sf(e,n|1),Nt(e,je()),!(ue&6)&&(di=je()+500,Fr()))}break;case 13:us(function(){var r=Wn(t,1);if(r!==null){var s=wt();nn(r,t,1,s)}}),ip(t,1)}};kf=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=wt();nn(e,t,134217728,n)}ip(t,134217728)}};hw=function(t){if(t.tag===13){var e=kr(t),n=Wn(t,e);if(n!==null){var r=wt();nn(n,t,e,r)}ip(t,e)}};fw=function(){return fe};pw=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Zd=function(t,e,n){switch(e){case"input":if(Hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Lc(r);if(!s)throw Error($(90));Wv(r),Hd(r,s)}}}break;case"textarea":Gv(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};ew=ep;tw=us;var aS={usingClientEntryPoint:!1,Events:[ha,Ms,Lc,Xv,Zv,ep]},Zi={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lS={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sw(t),t===null?null:t.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance||iS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{Rc=ul.inject(lS),hn=ul}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(e))throw Error($(200));return sS(t,e,null,n)};Ft.createRoot=function(t,e){if(!ap(t))throw Error($(299));var n=!1,r="",s=L_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=sp(t,1,!1,null,null,n,!1,r,s),t[qn]=e.current,Vo(t.nodeType===8?t.parentNode:t),new op(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=sw(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return us(t)};Ft.hydrate=function(t,e,n){if(!Wc(e))throw Error($(200));return Hc(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!ap(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=L_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O_(e,null,t,1,n??null,s,!1,i,o),t[qn]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new qc(e)};Ft.render=function(t,e,n){if(!Wc(e))throw Error($(200));return Hc(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!Wc(t))throw Error($(40));return t._reactRootContainer?(us(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Ft.unstable_batchedUpdates=ep;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Hc(t,e,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function M_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M_)}catch(t){console.error(t)}}M_(),Mv.exports=Ft;var cS=Mv.exports,Cy=cS;Fd.createRoot=Cy.createRoot,Fd.hydrateRoot=Cy.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Go.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const Py="popstate";function uS(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return Rh("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ac(s)}return hS(e,n,null,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dS(){return Math.random().toString(36).substr(2,8)}function Ry(t,e){return{usr:t.state,key:t.key,idx:e}}function Rh(t,e,n,r){return n===void 0&&(n=null),Go({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ei(e):e,{state:n,key:e&&e.key||r||dS()})}function ac(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ei(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hS(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=wr.Pop,c=null,d=f();d==null&&(d=0,o.replaceState(Go({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=wr.Pop;let P=f(),w=P==null?null:P-d;d=P,c&&c({action:l,location:N.location,delta:w})}function g(P,w){l=wr.Push;let x=Rh(N.location,P,w);d=f()+1;let I=Ry(x,d),D=N.createHref(x);try{o.pushState(I,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;s.location.assign(D)}i&&c&&c({action:l,location:N.location,delta:1})}function _(P,w){l=wr.Replace;let x=Rh(N.location,P,w);d=f();let I=Ry(x,d),D=N.createHref(x);o.replaceState(I,"",D),i&&c&&c({action:l,location:N.location,delta:0})}function k(P){let w=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof P=="string"?P:ac(P);return De(w,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,w)}let N={get action(){return l},get location(){return t(s,o)},listen(P){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Py,m),c=P,()=>{s.removeEventListener(Py,m),c=null}},createHref(P){return e(s,P)},createURL:k,encodeLocation(P){let w=k(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:_,go(P){return o.go(P)}};return N}var jy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jy||(jy={}));function fS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ei(e):e,s=cp(r.pathname||"/",n);if(s==null)return null;let i=V_(t);pS(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=TS(i[l],SS(s));return o}function V_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(De(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Ar([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(De(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),V_(i.children,e,f,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:xS(d,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let c of F_(i.path))s(i,o,c)}),e}function F_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=F_(r.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function pS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ES(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mS=/^:[\w-]+$/,gS=3,yS=2,vS=1,wS=10,_S=-2,Dy=t=>t==="*";function xS(t,e){let n=t.split("/"),r=n.length;return n.some(Dy)&&(r+=_S),e&&(r+=yS),n.filter(s=>!Dy(s)).reduce((s,i)=>s+(mS.test(i)?gS:i===""?vS:wS),r)}function ES(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function TS(t,e){let{routesMeta:n}=t,r={},s="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=IS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d);if(!f)return null;Object.assign(r,f.params);let m=l.route;i.push({params:r,pathname:Ar([s,f.pathname]),pathnameBase:PS(Ar([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Ar([s,f.pathnameBase]))}return i}function IS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:g,isOptional:_}=f;if(g==="*"){let N=l[m]||"";o=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const k=l[m];return _&&!k?d[g]=void 0:d[g]=kS(k||"",g),d},{}),pathname:i,pathnameBase:o,pattern:t}}function bS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function SS(t){try{return decodeURI(t)}catch(e){return lp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kS(t,e){try{return decodeURIComponent(t)}catch(n){return lp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function cp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Ei(t):t;return{pathname:n?n.startsWith("/")?n:AS(n,e):e,search:RS(r),hash:jS(s)}}function AS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function md(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function up(t,e){let n=CS(t);return e?n.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dp(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Ei(t):(s=Go({},t),De(!s.pathname||!s.pathname.includes("?"),md("?","pathname","search",s)),De(!s.pathname||!s.pathname.includes("#"),md("#","pathname","hash",s)),De(!s.search||!s.search.includes("#"),md("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let c=NS(s,l),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}const Ar=t=>t.join("/").replace(/\/\/+/g,"/"),PS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function DS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const U_=["post","put","patch","delete"];new Set(U_);const OS=["get",...U_];new Set(OS);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(this,arguments)}const hp=j.createContext(null),LS=j.createContext(null),Ur=j.createContext(null),Gc=j.createContext(null),xn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),$_=j.createContext(null);function MS(t,e){let{relative:n}=e===void 0?{}:e;Ti()||De(!1);let{basename:r,navigator:s}=j.useContext(Ur),{hash:i,pathname:o,search:l}=B_(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Ar([r,o])),s.createHref({pathname:c,search:l,hash:i})}function Ti(){return j.useContext(Gc)!=null}function xs(){return Ti()||De(!1),j.useContext(Gc).location}function z_(t){j.useContext(Ur).static||j.useLayoutEffect(t)}function Xn(){let{isDataRoute:t}=j.useContext(xn);return t?ZS():VS()}function VS(){Ti()||De(!1);let t=j.useContext(hp),{basename:e,future:n,navigator:r}=j.useContext(Ur),{matches:s}=j.useContext(xn),{pathname:i}=xs(),o=JSON.stringify(up(s,n.v7_relativeSplatPath)),l=j.useRef(!1);return z_(()=>{l.current=!0}),j.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=dp(d,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Ar([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,i,t])}const FS=j.createContext(null);function US(t){let e=j.useContext(xn).outlet;return e&&j.createElement(FS.Provider,{value:t},e)}function $S(){let{matches:t}=j.useContext(xn),e=t[t.length-1];return e?e.params:{}}function B_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Ur),{matches:s}=j.useContext(xn),{pathname:i}=xs(),o=JSON.stringify(up(s,r.v7_relativeSplatPath));return j.useMemo(()=>dp(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function zS(t,e){return BS(t,e)}function BS(t,e,n,r){Ti()||De(!1);let{navigator:s}=j.useContext(Ur),{matches:i}=j.useContext(xn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=xs(),f;if(e){var m;let P=typeof e=="string"?Ei(e):e;c==="/"||(m=P.pathname)!=null&&m.startsWith(c)||De(!1),f=P}else f=d;let g=f.pathname||"/",_=c==="/"?g:g.slice(c.length)||"/",k=fS(t,{pathname:_}),N=KS(k&&k.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:Ar([c,s.encodeLocation?s.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?c:Ar([c,s.encodeLocation?s.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),i,n,r);return e&&N?j.createElement(Gc.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:wr.Pop}},N):N}function qS(){let t=XS(),e=DS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:s},n):null,null)}const WS=j.createElement(qS,null);class HS extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(xn.Provider,{value:this.props.routeContext},j.createElement($_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GS(t){let{routeContext:e,match:n,children:r}=t,s=j.useContext(hp);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(xn.Provider,{value:e},r)}function KS(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id]));f>=0||De(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:g,errors:_}=n,k=m.route.loader&&g[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||k){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let _,k=!1,N=null,P=null;n&&(_=l&&m.route.id?l[m.route.id]:void 0,N=m.route.errorElement||WS,c&&(d<0&&g===0?(k=!0,P=null):d===g&&(k=!0,P=m.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),x=()=>{let I;return _?I=N:k?I=P:m.route.Component?I=j.createElement(m.route.Component,null):m.route.element?I=m.route.element:I=f,j.createElement(GS,{match:m,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:I})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?j.createElement(HS,{location:n.location,revalidation:n.revalidation,component:N,error:_,children:x(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):x()},null)}var q_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(q_||{}),lc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(lc||{});function QS(t){let e=j.useContext(hp);return e||De(!1),e}function YS(t){let e=j.useContext(LS);return e||De(!1),e}function JS(t){let e=j.useContext(xn);return e||De(!1),e}function W_(t){let e=JS(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function XS(){var t;let e=j.useContext($_),n=YS(lc.UseRouteError),r=W_(lc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ZS(){let{router:t}=QS(q_.UseNavigateStable),e=W_(lc.UseNavigateStable),n=j.useRef(!1);return z_(()=>{n.current=!0}),j.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ko({fromRouteId:e},i)))},[t,e])}function ek(t){let{to:e,replace:n,state:r,relative:s}=t;Ti()||De(!1);let{future:i,static:o}=j.useContext(Ur),{matches:l}=j.useContext(xn),{pathname:c}=xs(),d=Xn(),f=dp(e,up(l,i.v7_relativeSplatPath),c,s==="path"),m=JSON.stringify(f);return j.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:s}),[d,m,s,n,r]),null}function tk(t){return US(t.context)}function Pt(t){De(!1)}function nk(t){let{basename:e="/",children:n=null,location:r,navigationType:s=wr.Pop,navigator:i,static:o=!1,future:l}=t;Ti()&&De(!1);let c=e.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:c,navigator:i,static:o,future:Ko({v7_relativeSplatPath:!1},l)}),[c,l,i,o]);typeof r=="string"&&(r=Ei(r));let{pathname:f="/",search:m="",hash:g="",state:_=null,key:k="default"}=r,N=j.useMemo(()=>{let P=cp(f,c);return P==null?null:{location:{pathname:P,search:m,hash:g,state:_,key:k},navigationType:s}},[c,f,m,g,_,k,s]);return N==null?null:j.createElement(Ur.Provider,{value:d},j.createElement(Gc.Provider,{children:n,value:N}))}function rk(t){let{children:e,location:n}=t;return zS(jh(e),n)}new Promise(()=>{});function jh(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,s)=>{if(!j.isValidElement(r))return;let i=[...e,s];if(r.type===j.Fragment){n.push.apply(n,jh(r.props.children,i));return}r.type!==Pt&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jh(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dh(){return Dh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dh.apply(this,arguments)}function sk(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function ik(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ok(t,e){return t.button===0&&(!e||e==="_self")&&!ik(t)}const ak=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],lk="6";try{window.__reactRouterVersion=lk}catch{}const ck="startTransition",Oy=XT[ck];function uk(t){let{basename:e,children:n,future:r,window:s}=t,i=j.useRef();i.current==null&&(i.current=uS({window:s,v5Compat:!0}));let o=i.current,[l,c]=j.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=j.useCallback(m=>{d&&Oy?Oy(()=>c(m)):c(m)},[c,d]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.createElement(nk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const dk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fk=j.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:c,to:d,preventScrollReset:f,unstable_viewTransition:m}=e,g=sk(e,ak),{basename:_}=j.useContext(Ur),k,N=!1;if(typeof d=="string"&&hk.test(d)&&(k=d,dk))try{let I=new URL(window.location.href),D=d.startsWith("//")?new URL(I.protocol+d):new URL(d),L=cp(D.pathname,_);D.origin===I.origin&&L!=null?d=L+D.search+D.hash:N=!0}catch{}let P=MS(d,{relative:s}),w=pk(d,{replace:o,state:l,target:c,preventScrollReset:f,relative:s,unstable_viewTransition:m});function x(I){r&&r(I),I.defaultPrevented||w(I)}return j.createElement("a",Dh({},g,{href:k||P,onClick:N||i?r:x,ref:n,target:c}))});var Ly;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ly||(Ly={}));var My;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(My||(My={}));function pk(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,c=Xn(),d=xs(),f=B_(t,{relative:o});return j.useCallback(m=>{if(ok(m,n)){m.preventDefault();let g=r!==void 0?r:ac(d)===ac(f);c(t,{replace:g,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:l})}},[d,c,f,r,s,n,t,i,o,l])}var Vy={};/**
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
 */const H_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},mk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},G_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,d=c?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,_=d&63;c||(_=64,o||(g=64)),r.push(n[f],n[m],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new gk;const g=i<<2|l>>4;if(r.push(g),d!==64){const _=l<<4&240|d>>2;if(r.push(_),m!==64){const k=d<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yk=function(t){const e=H_(t);return G_.encodeByteArray(e,!0)},cc=function(t){return yk(t).replace(/\./g,"")},K_=function(t){try{return G_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wk=()=>vk().__FIREBASE_DEFAULTS__,_k=()=>{if(typeof process>"u"||typeof Vy>"u")return;const t=Vy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&K_(t[1]);return e&&JSON.parse(e)},Kc=()=>{try{return wk()||_k()||xk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q_=t=>{var e,n;return(n=(e=Kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Y_=t=>{const e=Q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},J_=()=>{var t;return(t=Kc())===null||t===void 0?void 0:t.config},X_=t=>{var e;return(e=Kc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ek{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Tk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cc(JSON.stringify(n)),cc(JSON.stringify(o)),""].join(".")}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ik(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function bk(){var t;const e=(t=Kc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nk(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ak(){return!bk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fp(){try{return typeof indexedDB=="object"}catch{return!1}}function pp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ex(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ck="FirebaseError";class Kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ck,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Kt(s,l,r)}}function Pk(t,e){return t.replace(Rk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rk=/\{\$([^}]+)}/g;function jk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Fy(i)&&Fy(o)){if(!Qo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fy(t){return t!==null&&typeof t=="object"}/**
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
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dk(t,e){const n=new Ok(t,e);return n.subscribe.bind(n)}class Ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gd),s.error===void 0&&(s.error=gd),s.complete===void 0&&(s.complete=gd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gd(){}/**
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
 */const Mk=1e3,Vk=2,Fk=4*60*60*1e3,Uk=.5;function Uy(t,e=Mk,n=Vk){const r=e*Math.pow(n,t),s=Math.round(Uk*r*(Math.random()-.5)*2);return Math.min(Fk,r+s)}/**
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
 */function ye(t){return t&&t._delegate?t._delegate:t}class At{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class $k{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ek;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bk(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zk(t){return t===Yr?void 0:t}function Bk(t){return t.instantiationMode==="EAGER"}/**
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
 */class qk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $k(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Wk={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Hk=le.INFO,Gk={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Kk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Gk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qc{constructor(e){this.name=e,this._logLevel=Hk,this._logHandler=Kk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Qk=(t,e)=>e.some(n=>t instanceof n);let $y,zy;function Yk(){return $y||($y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jk(){return zy||(zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tx=new WeakMap,Oh=new WeakMap,nx=new WeakMap,yd=new WeakMap,mp=new WeakMap;function Xk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tx.set(n,t)}).catch(()=>{}),mp.set(e,t),e}function Zk(t){if(Oh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Oh.set(t,e)}let Lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eN(t){Lh=t(Lh)}function tN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vd(this),e,...n);return nx.set(r,e.sort?e.sort():[e]),Un(r)}:Jk().includes(t)?function(...e){return t.apply(vd(this),e),Un(tx.get(this))}:function(...e){return Un(t.apply(vd(this),e))}}function nN(t){return typeof t=="function"?tN(t):(t instanceof IDBTransaction&&Zk(t),Qk(t,Yk())?new Proxy(t,Lh):t)}function Un(t){if(t instanceof IDBRequest)return Xk(t);if(yd.has(t))return yd.get(t);const e=nN(t);return e!==t&&(yd.set(t,e),mp.set(e,t)),e}const vd=t=>mp.get(t);function Yc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function wd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Un(n).then(()=>{})}const rN=["get","getKey","getAll","getAllKeys","count"],sN=["put","add","delete","clear"],_d=new Map;function By(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_d.get(e))return _d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rN.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&c.done]))[0]};return _d.set(e,i),i}eN(t=>({...t,get:(e,n,r)=>By(e,n)||t.get(e,n,r),has:(e,n)=>!!By(e,n)||t.has(e,n)}));/**
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
 */class iN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",qy="0.10.13";/**
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
 */const Gn=new Qc("@firebase/app"),aN="@firebase/app-compat",lN="@firebase/analytics-compat",cN="@firebase/analytics",uN="@firebase/app-check-compat",dN="@firebase/app-check",hN="@firebase/auth",fN="@firebase/auth-compat",pN="@firebase/database",mN="@firebase/data-connect",gN="@firebase/database-compat",yN="@firebase/functions",vN="@firebase/functions-compat",wN="@firebase/installations",_N="@firebase/installations-compat",xN="@firebase/messaging",EN="@firebase/messaging-compat",TN="@firebase/performance",IN="@firebase/performance-compat",bN="@firebase/remote-config",SN="@firebase/remote-config-compat",kN="@firebase/storage",NN="@firebase/storage-compat",AN="@firebase/firestore",CN="@firebase/vertexai-preview",PN="@firebase/firestore-compat",RN="firebase",jN="10.14.1";/**
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
 */const Vh="[DEFAULT]",DN={[Mh]:"fire-core",[aN]:"fire-core-compat",[cN]:"fire-analytics",[lN]:"fire-analytics-compat",[dN]:"fire-app-check",[uN]:"fire-app-check-compat",[hN]:"fire-auth",[fN]:"fire-auth-compat",[pN]:"fire-rtdb",[mN]:"fire-data-connect",[gN]:"fire-rtdb-compat",[yN]:"fire-fn",[vN]:"fire-fn-compat",[wN]:"fire-iid",[_N]:"fire-iid-compat",[xN]:"fire-fcm",[EN]:"fire-fcm-compat",[TN]:"fire-perf",[IN]:"fire-perf-compat",[bN]:"fire-rc",[SN]:"fire-rc-compat",[kN]:"fire-gcs",[NN]:"fire-gcs-compat",[AN]:"fire-fst",[PN]:"fire-fst-compat",[CN]:"fire-vertex","fire-js":"fire-js",[RN]:"fire-js-all"};/**
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
 */const uc=new Map,ON=new Map,Fh=new Map;function Wy(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vt(t){const e=t.name;if(Fh.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;Fh.set(e,t);for(const n of uc.values())Wy(n,t);for(const n of ON.values())Wy(n,t);return!0}function Zn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
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
 */const LN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new $r("app","Firebase",LN);/**
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
 */class MN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=jN;function rx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Cr.create("bad-app-name",{appName:String(s)});if(n||(n=J_()),!n)throw Cr.create("no-options");const i=uc.get(s);if(i){if(Qo(n,i.options)&&Qo(r,i.config))return i;throw Cr.create("duplicate-app",{appName:s})}const o=new qk(s);for(const c of Fh.values())o.addComponent(c);const l=new MN(n,r,o);return uc.set(s,l),l}function ma(t=Vh){const e=uc.get(t);if(!e&&t===Vh&&J_())return rx();if(!e)throw Cr.create("no-app",{appName:t});return e}function ht(t,e,n){var r;let s=(r=DN[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}Vt(new At(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const VN="firebase-heartbeat-database",FN=1,Yo="firebase-heartbeat-store";let xd=null;function sx(){return xd||(xd=Yc(VN,FN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),xd}async function UN(t){try{const n=(await sx()).transaction(Yo),r=await n.objectStore(Yo).get(ix(t));return await n.done,r}catch(e){if(e instanceof Kt)Gn.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Hy(t,e){try{const r=(await sx()).transaction(Yo,"readwrite");await r.objectStore(Yo).put(e,ix(t)),await r.done}catch(n){if(n instanceof Kt)Gn.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function ix(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $N=1024,zN=30*24*60*60*1e3;class BN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=zN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gy(),{heartbeatsToSend:r,unsentEntries:s}=qN(this._heartbeatsCache.heartbeats),i=cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gn.warn(n),""}}}function Gy(){return new Date().toISOString().substring(0,10)}function qN(t,e=$N){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ky(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ky(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fp()?pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ky(t){return cc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function HN(t){Vt(new At("platform-logger",e=>new iN(e),"PRIVATE")),Vt(new At("heartbeat",e=>new BN(e),"PRIVATE")),ht(Mh,qy,t),ht(Mh,qy,"esm2017"),ht("fire-js","")}HN("");var GN="firebase",KN="10.14.1";/**
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
 */ht(GN,KN,"app");var Qy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,ox;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function T(){}T.prototype=v.prototype,E.D=v.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(b,A,C){for(var S=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)S[ve-2]=arguments[ve];return v.prototype[A].apply(b,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,v,T){T||(T=0);var b=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)b[A]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(A=0;16>A;++A)b[A]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=E.g[0],T=E.g[1],A=E.g[2];var C=E.g[3],S=v+(C^T&(A^C))+b[0]+3614090360&4294967295;v=T+(S<<7&4294967295|S>>>25),S=C+(A^v&(T^A))+b[1]+3905402710&4294967295,C=v+(S<<12&4294967295|S>>>20),S=A+(T^C&(v^T))+b[2]+606105819&4294967295,A=C+(S<<17&4294967295|S>>>15),S=T+(v^A&(C^v))+b[3]+3250441966&4294967295,T=A+(S<<22&4294967295|S>>>10),S=v+(C^T&(A^C))+b[4]+4118548399&4294967295,v=T+(S<<7&4294967295|S>>>25),S=C+(A^v&(T^A))+b[5]+1200080426&4294967295,C=v+(S<<12&4294967295|S>>>20),S=A+(T^C&(v^T))+b[6]+2821735955&4294967295,A=C+(S<<17&4294967295|S>>>15),S=T+(v^A&(C^v))+b[7]+4249261313&4294967295,T=A+(S<<22&4294967295|S>>>10),S=v+(C^T&(A^C))+b[8]+1770035416&4294967295,v=T+(S<<7&4294967295|S>>>25),S=C+(A^v&(T^A))+b[9]+2336552879&4294967295,C=v+(S<<12&4294967295|S>>>20),S=A+(T^C&(v^T))+b[10]+4294925233&4294967295,A=C+(S<<17&4294967295|S>>>15),S=T+(v^A&(C^v))+b[11]+2304563134&4294967295,T=A+(S<<22&4294967295|S>>>10),S=v+(C^T&(A^C))+b[12]+1804603682&4294967295,v=T+(S<<7&4294967295|S>>>25),S=C+(A^v&(T^A))+b[13]+4254626195&4294967295,C=v+(S<<12&4294967295|S>>>20),S=A+(T^C&(v^T))+b[14]+2792965006&4294967295,A=C+(S<<17&4294967295|S>>>15),S=T+(v^A&(C^v))+b[15]+1236535329&4294967295,T=A+(S<<22&4294967295|S>>>10),S=v+(A^C&(T^A))+b[1]+4129170786&4294967295,v=T+(S<<5&4294967295|S>>>27),S=C+(T^A&(v^T))+b[6]+3225465664&4294967295,C=v+(S<<9&4294967295|S>>>23),S=A+(v^T&(C^v))+b[11]+643717713&4294967295,A=C+(S<<14&4294967295|S>>>18),S=T+(C^v&(A^C))+b[0]+3921069994&4294967295,T=A+(S<<20&4294967295|S>>>12),S=v+(A^C&(T^A))+b[5]+3593408605&4294967295,v=T+(S<<5&4294967295|S>>>27),S=C+(T^A&(v^T))+b[10]+38016083&4294967295,C=v+(S<<9&4294967295|S>>>23),S=A+(v^T&(C^v))+b[15]+3634488961&4294967295,A=C+(S<<14&4294967295|S>>>18),S=T+(C^v&(A^C))+b[4]+3889429448&4294967295,T=A+(S<<20&4294967295|S>>>12),S=v+(A^C&(T^A))+b[9]+568446438&4294967295,v=T+(S<<5&4294967295|S>>>27),S=C+(T^A&(v^T))+b[14]+3275163606&4294967295,C=v+(S<<9&4294967295|S>>>23),S=A+(v^T&(C^v))+b[3]+4107603335&4294967295,A=C+(S<<14&4294967295|S>>>18),S=T+(C^v&(A^C))+b[8]+1163531501&4294967295,T=A+(S<<20&4294967295|S>>>12),S=v+(A^C&(T^A))+b[13]+2850285829&4294967295,v=T+(S<<5&4294967295|S>>>27),S=C+(T^A&(v^T))+b[2]+4243563512&4294967295,C=v+(S<<9&4294967295|S>>>23),S=A+(v^T&(C^v))+b[7]+1735328473&4294967295,A=C+(S<<14&4294967295|S>>>18),S=T+(C^v&(A^C))+b[12]+2368359562&4294967295,T=A+(S<<20&4294967295|S>>>12),S=v+(T^A^C)+b[5]+4294588738&4294967295,v=T+(S<<4&4294967295|S>>>28),S=C+(v^T^A)+b[8]+2272392833&4294967295,C=v+(S<<11&4294967295|S>>>21),S=A+(C^v^T)+b[11]+1839030562&4294967295,A=C+(S<<16&4294967295|S>>>16),S=T+(A^C^v)+b[14]+4259657740&4294967295,T=A+(S<<23&4294967295|S>>>9),S=v+(T^A^C)+b[1]+2763975236&4294967295,v=T+(S<<4&4294967295|S>>>28),S=C+(v^T^A)+b[4]+1272893353&4294967295,C=v+(S<<11&4294967295|S>>>21),S=A+(C^v^T)+b[7]+4139469664&4294967295,A=C+(S<<16&4294967295|S>>>16),S=T+(A^C^v)+b[10]+3200236656&4294967295,T=A+(S<<23&4294967295|S>>>9),S=v+(T^A^C)+b[13]+681279174&4294967295,v=T+(S<<4&4294967295|S>>>28),S=C+(v^T^A)+b[0]+3936430074&4294967295,C=v+(S<<11&4294967295|S>>>21),S=A+(C^v^T)+b[3]+3572445317&4294967295,A=C+(S<<16&4294967295|S>>>16),S=T+(A^C^v)+b[6]+76029189&4294967295,T=A+(S<<23&4294967295|S>>>9),S=v+(T^A^C)+b[9]+3654602809&4294967295,v=T+(S<<4&4294967295|S>>>28),S=C+(v^T^A)+b[12]+3873151461&4294967295,C=v+(S<<11&4294967295|S>>>21),S=A+(C^v^T)+b[15]+530742520&4294967295,A=C+(S<<16&4294967295|S>>>16),S=T+(A^C^v)+b[2]+3299628645&4294967295,T=A+(S<<23&4294967295|S>>>9),S=v+(A^(T|~C))+b[0]+4096336452&4294967295,v=T+(S<<6&4294967295|S>>>26),S=C+(T^(v|~A))+b[7]+1126891415&4294967295,C=v+(S<<10&4294967295|S>>>22),S=A+(v^(C|~T))+b[14]+2878612391&4294967295,A=C+(S<<15&4294967295|S>>>17),S=T+(C^(A|~v))+b[5]+4237533241&4294967295,T=A+(S<<21&4294967295|S>>>11),S=v+(A^(T|~C))+b[12]+1700485571&4294967295,v=T+(S<<6&4294967295|S>>>26),S=C+(T^(v|~A))+b[3]+2399980690&4294967295,C=v+(S<<10&4294967295|S>>>22),S=A+(v^(C|~T))+b[10]+4293915773&4294967295,A=C+(S<<15&4294967295|S>>>17),S=T+(C^(A|~v))+b[1]+2240044497&4294967295,T=A+(S<<21&4294967295|S>>>11),S=v+(A^(T|~C))+b[8]+1873313359&4294967295,v=T+(S<<6&4294967295|S>>>26),S=C+(T^(v|~A))+b[15]+4264355552&4294967295,C=v+(S<<10&4294967295|S>>>22),S=A+(v^(C|~T))+b[6]+2734768916&4294967295,A=C+(S<<15&4294967295|S>>>17),S=T+(C^(A|~v))+b[13]+1309151649&4294967295,T=A+(S<<21&4294967295|S>>>11),S=v+(A^(T|~C))+b[4]+4149444226&4294967295,v=T+(S<<6&4294967295|S>>>26),S=C+(T^(v|~A))+b[11]+3174756917&4294967295,C=v+(S<<10&4294967295|S>>>22),S=A+(v^(C|~T))+b[2]+718787259&4294967295,A=C+(S<<15&4294967295|S>>>17),S=T+(C^(A|~v))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var T=v-this.blockSize,b=this.B,A=this.h,C=0;C<v;){if(A==0)for(;C<=T;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<v;)if(b[A++]=E.charCodeAt(C++),A==this.blockSize){s(this,b),A=0;break}}else for(;C<v;)if(b[A++]=E[C++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var T=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=T&255,T/=256;for(this.u(E),E=Array(16),v=T=0;4>v;++v)for(var b=0;32>b;b+=8)E[T++]=this.g[v]>>>b&255;return E};function i(E,v){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=v(E)}function o(E,v){this.h=v;for(var T=[],b=!0,A=E.length-1;0<=A;A--){var C=E[A]|0;b&&C==v||(T[A]=C,b=!1)}this.g=T}var l={};function c(E){return-128<=E&&128>E?i(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return P(d(-E));for(var v=[],T=1,b=0;E>=T;b++)v[b]=E/T|0,T*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return P(f(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=d(Math.pow(v,8)),b=m,A=0;A<E.length;A+=8){var C=Math.min(8,E.length-A),S=parseInt(E.substring(A,A+C),v);8>C?(C=d(Math.pow(v,C)),b=b.j(C).add(d(S))):(b=b.j(T),b=b.add(d(S)))}return b}var m=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-P(this).m();for(var E=0,v=1,T=0;T<this.g.length;T++){var b=this.i(T);E+=(0<=b?b:4294967296+b)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(N(this))return"-"+P(this).toString(E);for(var v=d(Math.pow(E,6)),T=this,b="";;){var A=D(T,v).g;T=w(T,A.j(v));var C=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=A,k(T))return C+b;for(;6>C.length;)C="0"+C;b=C+b}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=w(this,E),N(E)?-1:k(E)?0:1};function P(E){for(var v=E.g.length,T=[],b=0;b<v;b++)T[b]=~E.g[b];return new o(T,~E.h).add(g)}t.abs=function(){return N(this)?P(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),T=[],b=0,A=0;A<=v;A++){var C=b+(this.i(A)&65535)+(E.i(A)&65535),S=(C>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);b=S>>>16,C&=65535,S&=65535,T[A]=S<<16|C}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,v){return E.add(P(v))}t.j=function(E){if(k(this)||k(E))return m;if(N(this))return N(E)?P(this).j(P(E)):P(P(this).j(E));if(N(E))return P(this.j(P(E)));if(0>this.l(_)&&0>E.l(_))return d(this.m()*E.m());for(var v=this.g.length+E.g.length,T=[],b=0;b<2*v;b++)T[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<E.g.length;A++){var C=this.i(b)>>>16,S=this.i(b)&65535,ve=E.i(A)>>>16,H=E.i(A)&65535;T[2*b+2*A]+=S*H,x(T,2*b+2*A),T[2*b+2*A+1]+=C*H,x(T,2*b+2*A+1),T[2*b+2*A+1]+=S*ve,x(T,2*b+2*A+1),T[2*b+2*A+2]+=C*ve,x(T,2*b+2*A+2)}for(b=0;b<v;b++)T[b]=T[2*b+1]<<16|T[2*b];for(b=v;b<2*v;b++)T[b]=0;return new o(T,0)};function x(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function I(E,v){this.g=E,this.h=v}function D(E,v){if(k(v))throw Error("division by zero");if(k(E))return new I(m,m);if(N(E))return v=D(P(E),v),new I(P(v.g),P(v.h));if(N(v))return v=D(E,P(v)),new I(P(v.g),v.h);if(30<E.g.length){if(N(E)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,b=v;0>=b.l(E);)T=L(T),b=L(b);var A=F(T,1),C=F(b,1);for(b=F(b,2),T=F(T,2);!k(b);){var S=C.add(b);0>=S.l(E)&&(A=A.add(T),C=S),b=F(b,1),T=F(T,1)}return v=w(E,A.j(v)),new I(A,v)}for(A=m;0<=E.l(v);){for(T=Math.max(1,Math.floor(E.m()/v.m())),b=Math.ceil(Math.log(T)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),C=d(T),S=C.j(v);N(S)||0<S.l(E);)T-=b,C=d(T),S=C.j(v);k(C)&&(C=g),A=A.add(C),E=w(E,S)}return new I(A,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),T=[],b=0;b<v;b++)T[b]=this.i(b)&E.i(b);return new o(T,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),T=[],b=0;b<v;b++)T[b]=this.i(b)|E.i(b);return new o(T,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),T=[],b=0;b<v;b++)T[b]=this.i(b)^E.i(b);return new o(T,this.h^E.h)};function L(E){for(var v=E.g.length+1,T=[],b=0;b<v;b++)T[b]=E.i(b)<<1|E.i(b-1)>>>31;return new o(T,E.h)}function F(E,v){var T=v>>5;v%=32;for(var b=E.g.length-T,A=[],C=0;C<b;C++)A[C]=0<v?E.i(C+T)>>>v|E.i(C+T+1)<<32-v:E.i(C+T);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ox=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,is=o}).apply(typeof Qy<"u"?Qy:typeof self<"u"?self:typeof window<"u"?window:{});var dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ax,co,lx,Nl,Uh,cx,ux,dx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof dl=="object"&&dl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in p))break e;p=p[R]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,y=!1,R={next:function(){if(!y&&p<a.length){var O=p++;return{value:h(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function m(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,y),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function _(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function k(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,R,O){for(var z=Array(arguments.length-2),me=2;me<arguments.length;me++)z[me-2]=arguments[me];return h.prototype[R].apply(y,z)}}function N(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function P(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(c(y)){const R=a.length||0,O=y.length||0;a.length=R+O;for(let z=0;z<O;z++)a[R+z]=y[z]}else a.push(y)}}class w{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function F(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function E(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let p,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(p in y)a[p]=y[p];for(let O=0;O<T.length;O++)p=T[O],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function A(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function C(a){l.setTimeout(()=>{throw a},0)}function S(){var a=G;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ve{constructor(){this.h=this.g=null}add(h,p){const y=H.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var H=new w(()=>new K,a=>a.reset());class K{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let B,U=!1,G=new ve,J=()=>{const a=l.Promise.resolve(void 0);B=()=>{a.then(re)}};var re=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(p){C(p)}var h=H;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}U=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var En=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Tn(a,h){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{D(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:In[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tn.aa.h.call(this)}}k(Tn,be);var In={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var bn="closure_listenable_"+(1e6*Math.random()|0),sT=0;function iT(a,h,p,y,R){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=R,this.key=++sT,this.da=this.fa=!1}function Ca(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pa(a){this.src=a,this.g={},this.h=0}Pa.prototype.add=function(a,h,p,y,R){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=xu(a,h,y,R);return-1<z?(h=a[z],p||(h.fa=!1)):(h=new iT(h,this.src,O,!!y,R),h.fa=p,a.push(h)),h};function _u(a,h){var p=h.type;if(p in a.g){var y=a.g[p],R=Array.prototype.indexOf.call(y,h,void 0),O;(O=0<=R)&&Array.prototype.splice.call(y,R,1),O&&(Ca(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function xu(a,h,p,y){for(var R=0;R<a.length;++R){var O=a[R];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==y)return R}return-1}var Eu="closure_lm_"+(1e6*Math.random()|0),Tu={};function Tm(a,h,p,y,R){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Tm(a,h[O],p,y,R);return null}return p=Sm(p),a&&a[bn]?a.K(h,p,d(y)?!!y.capture:!!y,R):oT(a,h,p,!1,y,R)}function oT(a,h,p,y,R,O){if(!h)throw Error("Invalid event type");var z=d(R)?!!R.capture:!!R,me=bu(a);if(me||(a[Eu]=me=new Pa(a)),p=me.add(h,p,y,z,O),p.proxy)return p;if(y=aT(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)En||(R=z),R===void 0&&(R=!1),a.addEventListener(h.toString(),y,R);else if(a.attachEvent)a.attachEvent(bm(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function aT(){function a(p){return h.call(a.src,a.listener,p)}const h=lT;return a}function Im(a,h,p,y,R){if(Array.isArray(h))for(var O=0;O<h.length;O++)Im(a,h[O],p,y,R);else y=d(y)?!!y.capture:!!y,p=Sm(p),a&&a[bn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],p=xu(O,p,y,R),-1<p&&(Ca(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=bu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=xu(h,p,y,R)),(p=-1<a?h[a]:null)&&Iu(p))}function Iu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[bn])_u(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(bm(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=bu(h))?(_u(p,a),p.h==0&&(p.src=null,h[Eu]=null)):Ca(a)}}}function bm(a){return a in Tu?Tu[a]:Tu[a]="on"+a}function lT(a,h){if(a.da)a=!0;else{h=new Tn(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&Iu(a),a=p.call(y,h)}return a}function bu(a){return a=a[Eu],a instanceof Pa?a:null}var Su="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sm(a){return typeof a=="function"?a:(a[Su]||(a[Su]=function(h){return a.handleEvent(h)}),a[Su])}function nt(){ae.call(this),this.i=new Pa(this),this.M=this,this.F=null}k(nt,ae),nt.prototype[bn]=!0,nt.prototype.removeEventListener=function(a,h,p,y){Im(this,a,h,p,y)};function gt(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new be(h,a);else if(h instanceof be)h.target=h.target||a;else{var R=h;h=new be(y,a),b(h,R)}if(R=!0,p)for(var O=p.length-1;0<=O;O--){var z=h.g=p[O];R=Ra(z,y,!0,h)&&R}if(z=h.g=a,R=Ra(z,y,!0,h)&&R,R=Ra(z,y,!1,h)&&R,p)for(O=0;O<p.length;O++)z=h.g=p[O],R=Ra(z,y,!1,h)&&R}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)Ca(p[y]);delete a.g[h],a.h--}}this.F=null},nt.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},nt.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function Ra(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,O=0;O<h.length;++O){var z=h[O];if(z&&!z.da&&z.capture==p){var me=z.listener,He=z.ha||z.src;z.fa&&_u(a.i,z),R=me.call(He,y)!==!1&&R}}return R&&!y.defaultPrevented}function km(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Nm(a){a.g=km(()=>{a.g=null,a.i&&(a.i=!1,Nm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class cT extends ae{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Nm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(a){ae.call(this),this.h=a,this.g={}}k(ji,ae);var Am=[];function Cm(a){F(a.g,function(h,p){this.g.hasOwnProperty(p)&&Iu(h)},a),a.g={}}ji.prototype.N=function(){ji.aa.N.call(this),Cm(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ku=l.JSON.stringify,uT=l.JSON.parse,dT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Nu(){}Nu.prototype.h=null;function Pm(a){return a.h||(a.h=a.i())}function Rm(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Au(){be.call(this,"d")}k(Au,be);function Cu(){be.call(this,"c")}k(Cu,be);var qr={},jm=null;function ja(){return jm=jm||new nt}qr.La="serverreachability";function Dm(a){be.call(this,qr.La,a)}k(Dm,be);function Oi(a){const h=ja();gt(h,new Dm(h))}qr.STAT_EVENT="statevent";function Om(a,h){be.call(this,qr.STAT_EVENT,a),this.stat=h}k(Om,be);function yt(a){const h=ja();gt(h,new Om(h,a))}qr.Ma="timingevent";function Lm(a,h){be.call(this,qr.Ma,a),this.size=h}k(Lm,be);function Li(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function hT(a,h,p,y,R,O){a.info(function(){if(a.g)if(O)for(var z="",me=O.split("&"),He=0;He<me.length;He++){var de=me[He].split("=");if(1<de.length){var rt=de[0];de=de[1];var st=rt.split("_");z=2<=st.length&&st[1]=="type"?z+(rt+"="+de+"&"):z+(rt+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+h+`
`+p+`
`+z})}function fT(a,h,p,y,R,O,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+h+`
`+p+`
`+O+" "+z})}function Is(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+mT(a,p)+(y?" "+y:"")})}function pT(a,h){a.info(function(){return"TIMEOUT: "+h})}Mi.prototype.info=function(){};function mT(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var R=y[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<R.length;z++)R[z]=""}}}}return ku(p)}catch{return h}}var Da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pu;function Oa(){}k(Oa,Nu),Oa.prototype.g=function(){return new XMLHttpRequest},Oa.prototype.i=function(){return{}},Pu=new Oa;function nr(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vm}function Vm(){this.i=null,this.g="",this.h=!1}var Fm={},Ru={};function ju(a,h,p){a.L=1,a.v=Fa(Sn(h)),a.m=p,a.P=!0,Um(a,null)}function Um(a,h){a.F=Date.now(),La(a),a.A=Sn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),eg(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Vm,a.g=vg(a.j,p?h:null,!a.m),0<a.O&&(a.M=new cT(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Am[0]=R.toString()),R=Am);for(var O=0;O<R.length;O++){var z=Tm(p,R[O],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Oi(),hT(a.i,a.u,a.A,a.l,a.R,a.m)}nr.prototype.ca=function(a){a=a.target;const h=this.M;h&&kn(a)==3?h.j():this.Y(a)},nr.prototype.Y=function(a){try{if(a==this.g)e:{const st=kn(this.g);var h=this.g.Ba();const ks=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||ag(this.g)))){this.J||st!=4||h==7||(h==8||0>=ks?Oi(3):Oi(2)),Du(this);var p=this.g.Z();this.X=p;t:if($m(this)){var y=ag(this.g);a="";var R=y.length,O=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),Vi(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(O&&h==R-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,fT(this.i,this.u,this.A,this.l,this.R,st,p),this.o){if(this.T&&!this.K){t:{if(this.g){var me,He=this.g;if((me=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(me)){var de=me;break t}}de=null}if(p=de)Is(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ou(this,p);else{this.o=!1,this.s=3,yt(12),Wr(this),Vi(this);break e}}if(this.P){p=!0;let Yt;for(;!this.J&&this.C<z.length;)if(Yt=gT(this,z),Yt==Ru){st==4&&(this.s=4,yt(14),p=!1),Is(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Fm){this.s=4,yt(15),Is(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Is(this.i,this.l,Yt,null),Ou(this,Yt);if($m(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||z.length!=0||this.h.h||(this.s=1,yt(16),p=!1),this.o=this.o&&p,!p)Is(this.i,this.l,z,"[Invalid Chunked Response]"),Wr(this),Vi(this);else if(0<z.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),$u(rt),rt.M=!0,yt(11))}}else Is(this.i,this.l,z,null),Ou(this,z);st==4&&Wr(this),this.o&&!this.J&&(st==4?pg(this.j,this):(this.o=!1,La(this)))}else jT(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Wr(this),Vi(this)}}}catch{}finally{}};function $m(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function gT(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Ru:(p=Number(h.substring(p,y)),isNaN(p)?Fm:(y+=1,y+p>h.length?Ru:(h=h.slice(y,y+p),a.C=y+p,h)))}nr.prototype.cancel=function(){this.J=!0,Wr(this)};function La(a){a.S=Date.now()+a.I,zm(a,a.I)}function zm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Li(g(a.ba,a),h)}function Du(a){a.B&&(l.clearTimeout(a.B),a.B=null)}nr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(pT(this.i,this.A),this.L!=2&&(Oi(),yt(17)),Wr(this),this.s=2,Vi(this)):zm(this,this.S-a)};function Vi(a){a.j.G==0||a.J||pg(a.j,a)}function Wr(a){Du(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Cm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ou(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Lu(p.h,a))){if(!a.K&&Lu(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Wa(p),Ba(p);else break e;Uu(p),yt(18)}}else p.za=R[1],0<p.za-p.T&&37500>R[2]&&p.F&&p.v==0&&!p.C&&(p.C=Li(g(p.Za,p),6e3));if(1>=Wm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Gr(p,11)}else if((a.K||p.g==a)&&Wa(p),!x(h))for(R=p.Da.g.parse(h),h=0;h<R.length;h++){let de=R[h];if(p.T=de[0],de=de[1],p.G==2)if(de[0]=="c"){p.K=de[1],p.ia=de[2];const rt=de[3];rt!=null&&(p.la=rt,p.j.info("VER="+p.la));const st=de[4];st!=null&&(p.Aa=st,p.j.info("SVER="+p.Aa));const ks=de[5];ks!=null&&typeof ks=="number"&&0<ks&&(y=1.5*ks,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Yt=a.g;if(Yt){const Ga=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ga){var O=y.h;O.g||Ga.indexOf("spdy")==-1&&Ga.indexOf("quic")==-1&&Ga.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Mu(O,O.h),O.h=null))}if(y.D){const zu=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;zu&&(y.ya=zu,we(y.I,y.D,zu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var z=a;if(y.qa=yg(y,y.J?y.ia:null,y.W),z.K){Hm(y.h,z);var me=z,He=y.L;He&&(me.I=He),me.B&&(Du(me),La(me)),y.g=z}else hg(y);0<p.i.length&&qa(p)}else de[0]!="stop"&&de[0]!="close"||Gr(p,7);else p.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Gr(p,7):Fu(p):de[0]!="noop"&&p.l&&p.l.ta(de),p.v=0)}}Oi(4)}catch{}}var yT=class{constructor(a,h){this.g=a,this.map=h}};function Bm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wm(a){return a.h?1:a.g?a.g.size:0}function Lu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Mu(a,h){a.g?a.g.add(h):a.h=h}function Hm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Bm.prototype.cancel=function(){if(this.i=Gm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return N(a.i)}function vT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function wT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function Km(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=wT(a),y=vT(a),R=y.length,O=0;O<R;O++)h.call(void 0,y[O],p&&p[O],a)}var Qm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _T(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),R=null;if(0<=y){var O=a[p].substring(0,y);R=a[p].substring(y+1)}else O=a[p];h(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Hr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Hr){this.h=a.h,Ma(this,a.j),this.o=a.o,this.g=a.g,Va(this,a.s),this.l=a.l;var h=a.i,p=new $i;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Ym(this,p),this.m=a.m}else a&&(h=String(a).match(Qm))?(this.h=!1,Ma(this,h[1]||"",!0),this.o=Fi(h[2]||""),this.g=Fi(h[3]||"",!0),Va(this,h[4]),this.l=Fi(h[5]||"",!0),Ym(this,h[6]||"",!0),this.m=Fi(h[7]||"")):(this.h=!1,this.i=new $i(null,this.h))}Hr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ui(h,Jm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ui(h,Jm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ui(p,p.charAt(0)=="/"?TT:ET,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ui(p,bT)),a.join("")};function Sn(a){return new Hr(a)}function Ma(a,h,p){a.j=p?Fi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Va(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ym(a,h,p){h instanceof $i?(a.i=h,ST(a.i,a.h)):(p||(h=Ui(h,IT)),a.i=new $i(h,a.h))}function we(a,h,p){a.i.set(h,p)}function Fa(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Fi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ui(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,xT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jm=/[#\/\?@]/g,ET=/[#\?:]/g,TT=/[#\?]/g,IT=/[#\?@]/g,bT=/#/g;function $i(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function rr(a){a.g||(a.g=new Map,a.h=0,a.i&&_T(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=$i.prototype,t.add=function(a,h){rr(this),this.i=null,a=bs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Xm(a,h){rr(a),h=bs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Zm(a,h){return rr(a),h=bs(a,h),a.g.has(h)}t.forEach=function(a,h){rr(this),this.g.forEach(function(p,y){p.forEach(function(R){a.call(h,R,y,this)},this)},this)},t.na=function(){rr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const R=a[y];for(let O=0;O<R.length;O++)p.push(h[y])}return p},t.V=function(a){rr(this);let h=[];if(typeof a=="string")Zm(this,a)&&(h=h.concat(this.g.get(bs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return rr(this),this.i=null,a=bs(this,a),Zm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function eg(a,h,p){Xm(a,h),0<p.length&&(a.i=null,a.g.set(bs(a,h),N(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const O=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var R=O;z[y]!==""&&(R+="="+encodeURIComponent(String(z[y]))),a.push(R)}}return this.i=a.join("&")};function bs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ST(a,h){h&&!a.j&&(rr(a),a.i=null,a.g.forEach(function(p,y){var R=y.toLowerCase();y!=R&&(Xm(this,y),eg(this,R,p))},a)),a.j=h}function kT(a,h){const p=new Mi;if(l.Image){const y=new Image;y.onload=_(sr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=_(sr,p,"TestLoadImage: error",!1,h,y),y.onabort=_(sr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=_(sr,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function NT(a,h){const p=new Mi,y=new AbortController,R=setTimeout(()=>{y.abort(),sr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(R),O.ok?sr(p,"TestPingServer: ok",!0,h):sr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),sr(p,"TestPingServer: error",!1,h)})}function sr(a,h,p,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(p)}catch{}}function AT(){this.g=new dT}function CT(a,h,p){const y=p||"";try{Km(a,function(R,O){let z=R;d(R)&&(z=ku(R)),h.push(y+O+"="+encodeURIComponent(z))})}catch(R){throw h.push(y+"type="+encodeURIComponent("_badmap")),R}}function Ua(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Ua,Nu),Ua.prototype.g=function(){return new $a(this.l,this.j)},Ua.prototype.i=function(a){return function(){return a}}({});function $a(a,h){nt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k($a,nt),t=$a.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Bi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function tg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zi(this):Bi(this),this.readyState==3&&tg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,zi(this))},t.Qa=function(a){this.g&&(this.response=a,zi(this))},t.ga=function(){this.g&&zi(this)};function zi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Bi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Bi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty($a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ng(a){let h="";return F(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Vu(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=ng(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):we(a,h,p))}function Ce(a){nt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ce,nt);var PT=/^https?$/i,RT=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pu.g(),this.v=this.o?Pm(this.o):Pm(Pu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){rg(this,O);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)p.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())p.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(RT,h,void 0))||y||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of p)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{og(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){rg(this,O)}};function rg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,sg(a),za(a)}function sg(a){a.A||(a.A=!0,gt(a,"complete"),gt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,gt(this,"complete"),gt(this,"abort"),za(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),za(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ig(this):this.bb())},t.bb=function(){ig(this)};function ig(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)km(a.Ea,0,a);else if(gt(a,"readystatechange"),kn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=z===0){var R=String(a.D).match(Qm)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),y=!PT.test(R?R.toLowerCase():"")}p=y}if(p)gt(a,"complete"),gt(a,"success");else{a.m=6;try{var O=2<kn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",sg(a)}}finally{za(a)}}}}function za(a,h){if(a.g){og(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||gt(a,"ready");try{p.onreadystatechange=y}catch{}}}function og(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),uT(h)}};function ag(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function jT(a){const h={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(x(a[y]))continue;var p=A(a[y]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[R]||[];h[R]=O,O.push(p)}E(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function lg(a){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qi("baseRetryDelayMs",5e3,a),this.cb=qi("retryDelaySeedMs",1e4,a),this.Wa=qi("forwardChannelMaxRetries",2,a),this.wa=qi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bm(a&&a.concurrentRequestLimit),this.Da=new AT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){yt(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=yg(this,null,this.W),qa(this)};function Fu(a){if(cg(a),a.G==3){var h=a.U++,p=Sn(a.I);if(we(p,"SID",a.K),we(p,"RID",h),we(p,"TYPE","terminate"),Wi(a,p),h=new nr(a,a.j,h),h.L=2,h.v=Fa(Sn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=vg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),La(h)}gg(a)}function Ba(a){a.g&&($u(a),a.g.cancel(),a.g=null)}function cg(a){Ba(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function qa(a){if(!qm(a.h)&&!a.s){a.s=!0;var h=a.Ga;B||J(),U||(B(),U=!0),G.add(h,a),a.B=0}}function DT(a,h){return Wm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Li(g(a.Ga,a,h),mg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new nr(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),b(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=dg(this,R,h),p=Sn(this.I),we(p,"RID",a),we(p,"CVER",22),this.D&&we(p,"X-HTTP-Session-Id",this.D),Wi(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(ng(O)))+"&"+h:this.m&&Vu(p,this.m,O)),Mu(this.h,R),this.Ua&&we(p,"TYPE","init"),this.P?(we(p,"$req",h),we(p,"SID","null"),R.T=!0,ju(R,p,null)):ju(R,p,h),this.G=2}}else this.G==3&&(a?ug(this,a):this.i.length==0||qm(this.h)||ug(this))};function ug(a,h){var p;h?p=h.l:p=a.U++;const y=Sn(a.I);we(y,"SID",a.K),we(y,"RID",p),we(y,"AID",a.T),Wi(a,y),a.m&&a.o&&Vu(y,a.m,a.o),p=new nr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=dg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mu(a.h,p),ju(p,y,h)}function Wi(a,h){a.H&&F(a.H,function(p,y){we(h,y,p)}),a.l&&Km({},function(p,y){we(h,y,p)})}function dg(a,h,p){p=Math.min(a.i.length,p);var y=a.l?g(a.l.Na,a.l,a):null;e:{var R=a.i;let O=-1;for(;;){const z=["count="+p];O==-1?0<p?(O=R[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let me=!0;for(let He=0;He<p;He++){let de=R[He].g;const rt=R[He].map;if(de-=O,0>de)O=Math.max(0,R[He].g-100),me=!1;else try{CT(rt,z,"req"+de+"_")}catch{y&&y(rt)}}if(me){y=z.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function hg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;B||J(),U||(B(),U=!0),G.add(h,a),a.v=0}}function Uu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Li(g(a.Fa,a),mg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,fg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Li(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Ba(this),fg(this))};function $u(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function fg(a){a.g=new nr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);we(h,"RID","rpc"),we(h,"SID",a.K),we(h,"AID",a.T),we(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(h,"TO",a.ja),we(h,"TYPE","xmlhttp"),Wi(a,h),a.m&&a.o&&Vu(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Fa(Sn(h)),p.m=null,p.P=!0,Um(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Ba(this),Uu(this),yt(19))};function Wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function pg(a,h){var p=null;if(a.g==h){Wa(a),$u(a),a.g=null;var y=2}else if(Lu(a.h,h))p=h.D,Hm(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;y=ja(),gt(y,new Lm(y,p)),qa(a)}else hg(a);else if(R=h.s,R==3||R==0&&0<h.X||!(y==1&&DT(a,h)||y==2&&Uu(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),R){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function mg(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Gr(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),y=a.Xa;const R=!y;y=new Hr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ma(y,"https"),Fa(y),R?kT(y.toString(),p):NT(y.toString(),p)}else yt(2);a.G=0,a.l&&a.l.sa(h),gg(a),cg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function gg(a){if(a.G=0,a.ka=[],a.l){const h=Gm(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function yg(a,h,p){var y=p instanceof Hr?Sn(p):new Hr(p);if(y.g!="")h&&(y.g=h+"."+y.g),Va(y,y.s);else{var R=l.location;y=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var O=new Hr(null);y&&Ma(O,y),h&&(O.g=h),R&&Va(O,R),p&&(O.l=p),y=O}return p=a.D,h=a.ya,p&&h&&we(y,p,h),we(y,"VER",a.la),Wi(a,y),y}function vg(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ce(new Ua({eb:p})):new Ce(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wg(){}t=wg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ha(){}Ha.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){nt.call(this),this.g=new lg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ss(this)}k(Ct,nt),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Fu(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ku(a),a=p);h.i.push(new yT(h.Ya++,a)),h.G==3&&qa(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Fu(this.g),delete this.g,Ct.aa.N.call(this)};function _g(a){Au.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}k(_g,Au);function xg(){Cu.call(this),this.status=1}k(xg,Cu);function Ss(a){this.g=a}k(Ss,wg),Ss.prototype.ua=function(){gt(this.g,"a")},Ss.prototype.ta=function(a){gt(this.g,new _g(a))},Ss.prototype.sa=function(a){gt(this.g,new xg)},Ss.prototype.ra=function(){gt(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,dx=function(){return new Ha},ux=function(){return ja()},cx=qr,Uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Da.NO_ERROR=0,Da.TIMEOUT=8,Da.HTTP_ERROR=6,Nl=Da,Mm.COMPLETE="complete",lx=Mm,Rm.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",nt.prototype.listen=nt.prototype.K,co=Rm,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,ax=Ce}).apply(typeof dl<"u"?dl:typeof self<"u"?self:typeof window<"u"?window:{});const Yy="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let bi="10.14.0";/**
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
 */const ds=new Qc("@firebase/firestore");function eo(){return ds.logLevel}function Q(t,...e){if(ds.logLevel<=le.DEBUG){const n=e.map(gp);ds.debug(`Firestore (${bi}): ${t}`,...n)}}function Kn(t,...e){if(ds.logLevel<=le.ERROR){const n=e.map(gp);ds.error(`Firestore (${bi}): ${t}`,...n)}}function hi(t,...e){if(ds.logLevel<=le.WARN){const n=e.map(gp);ds.warn(`Firestore (${bi}): ${t}`,...n)}}function gp(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: `+t;throw Kn(e),new Error(e)}function pe(t,e){t||Z()}function te(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class YN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JN{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new hx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new ct(e)}}class XN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new XN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){pe(this.o===void 0);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.R=n.token,new eA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class fx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=nA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function fi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Fe(0,0))}static max(){return new ee(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Jo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Jo{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const rA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Jo{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return rA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ee.fromString(e))}static fromName(e){return new Y(Ee.fromString(e).popFirst(5))}static empty(){return new Y(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ee(e.slice()))}}function sA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Dr(s,Y.empty(),e)}function iA(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(ee.min(),Y.empty(),-1)}static max(){return new Dr(ee.max(),Y.empty(),-1)}}function oA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const aA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ga(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==aA)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const d=c;n(e[d]).next(f=>{o[d]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function cA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ya(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}yp.oe=-1;function Jc(t){return t==null}function dc(t){return t===0&&1/t==-1/0}function uA(t){return typeof t=="number"&&Number.isInteger(t)&&!dc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function px(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hl(this.root,e,this.comparator,!0)}}class hl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xy(this.data.getIterator())}getIteratorFrom(e){return new Xy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Xy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new qt([])}unionWith(e){let n=new Ze(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mx("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const dA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(pe(!!t),typeof t=="string"){let e=0;const n=dA.exec(t);if(pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hs(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function vp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wp(t){const e=t.mapValue.fields.__previous_value__;return vp(e)?wp(e):e}function Xo(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class hA{constructor(e,n,r,s,i,o,l,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class Zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vp(t)?4:pA(t)?9007199254740991:fA(t)?10:11:Z()}function wn(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xo(t).isEqual(Xo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Or(s.timestampValue),l=Or(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return hs(s.bytesValue).isEqual(hs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Re(s.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Re(s.integerValue)===Re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Re(s.doubleValue),l=Re(i.doubleValue);return o===l?dc(o)===dc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return fi(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jy(o)!==Jy(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!wn(o[c],l[c])))return!1;return!0}(t,e);default:return Z()}}function ea(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function pi(t,e){if(t===e)return 0;const n=fs(t),r=fs(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Re(i.integerValue||i.doubleValue),c=Re(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Zy(t.timestampValue,e.timestampValue);case 4:return Zy(Xo(t),Xo(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const l=hs(i),c=hs(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const f=he(l[d],c[d]);if(f!==0)return f}return he(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=he(Re(i.latitude),Re(o.latitude));return l!==0?l:he(Re(i.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return e0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,d,f;const m=i.fields||{},g=o.fields||{},_=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=(c=g.value)===null||c===void 0?void 0:c.arrayValue,N=he(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:e0(_,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===fl.mapValue&&o===fl.mapValue)return 0;if(i===fl.mapValue)return 1;if(o===fl.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=o.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=he(c[m],f[m]);if(g!==0)return g;const _=pi(l[c[m]],d[f[m]]);if(_!==0)return _}return he(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Zy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Or(t),r=Or(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function e0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=pi(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function mi(t){return $h(t)}function $h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return hs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$h(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$h(n.fields[o])}`;return s+"}"}(t.mapValue):Z()}function t0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zh(t){return!!t&&"integerValue"in t}function _p(t){return!!t&&"arrayValue"in t}function n0(t){return!!t&&"nullValue"in t}function r0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Al(t){return!!t&&"mapValue"in t}function fA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=bo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Al(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new jt(bo(this.value))}}function gx(t){const e=[];return Es(t.fields,(n,r)=>{const s=new Je([n]);if(Al(r)){const i=gx(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
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
 */class dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,ee.min(),ee.min(),ee.min(),jt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,ee.min(),ee.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ee.min(),ee.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hc{constructor(e,n){this.position=e,this.inclusive=n}}function s0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=pi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function i0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fc{constructor(e,n="asc"){this.field=e,this.dir=n}}function mA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yx{}class Ve extends yx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yA(e,n,r):n==="array-contains"?new _A(e,r):n==="in"?new xA(e,r):n==="not-in"?new EA(e,r):n==="array-contains-any"?new TA(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vA(e,r):new wA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(pi(n,this.value)):n!==null&&fs(this.value)===fs(n)&&this.matchesComparison(pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends yx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new on(e,n)}matches(e){return vx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vx(t){return t.op==="and"}function wx(t){return gA(t)&&vx(t)}function gA(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Bh(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+mi(t.value);if(wx(t))return t.filters.map(e=>Bh(e)).join(",");{const e=t.filters.map(n=>Bh(n)).join(",");return`${t.op}(${e})`}}function _x(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)}(t,e):t instanceof on?function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&_x(o,s.filters[l]),!0):!1}(t,e):void Z()}function xx(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${mi(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(xx).join(" ,")+"}"}(t):"Filter"}class yA extends Ve{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class vA extends Ve{constructor(e,n){super(e,"in",n),this.keys=Ex("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wA extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Ex("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ex(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class _A extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _p(n)&&ea(n.arrayValue,this.value)}}class xA extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ea(this.value.arrayValue,n)}}class EA extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ea(this.value.arrayValue,n)}}class TA extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_p(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ea(this.value.arrayValue,r))}}/**
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
 */class IA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function o0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new IA(t,e,n,r,s,i,o)}function xp(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mi(r)).join(",")),e.ue=n}return e.ue}function Ep(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_x(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i0(t.startAt,e.startAt)&&i0(t.endAt,e.endAt)}function qh(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class va{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bA(t,e,n,r,s,i,o,l){return new va(t,e,n,r,s,i,o,l)}function Tp(t){return new va(t)}function a0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tx(t){return t.collectionGroup!==null}function So(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Je.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new fc(i,r))}),n.has(Je.keyField().canonicalString())||e.ce.push(new fc(Je.keyField(),r))}return e.ce}function pn(t){const e=te(t);return e.le||(e.le=SA(e,So(t))),e.le}function SA(t,e){if(t.limitType==="F")return o0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fc(s.field,i)});const n=t.endAt?new hc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hc(t.startAt.position,t.startAt.inclusive):null;return o0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wh(t,e){const n=t.filters.concat([e]);return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hh(t,e,n){return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xc(t,e){return Ep(pn(t),pn(e))&&t.limitType===e.limitType}function Ix(t){return`${xp(pn(t))}|lt:${t.limitType}`}function As(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>xx(s)).join(", ")}]`),Jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>mi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>mi(s)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Zc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of So(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const d=s0(o,l,c);return o.inclusive?d<=0:d<0}(r.startAt,So(r),s)||r.endAt&&!function(o,l,c){const d=s0(o,l,c);return o.inclusive?d>=0:d>0}(r.endAt,So(r),s))}(t,e)}function kA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bx(t){return(e,n)=>{let r=!1;for(const s of So(t)){const i=NA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function NA(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),d=l.data.field(i);return c!==null&&d!==null?pi(c,d):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return px(this.inner)}size(){return this.innerSize}}/**
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
 */const AA=new Ae(Y.comparator);function Qn(){return AA}const Sx=new Ae(Y.comparator);function uo(...t){let e=Sx;for(const n of t)e=e.insert(n.key,n);return e}function kx(t){let e=Sx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function es(){return ko()}function Nx(){return ko()}function ko(){return new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}const CA=new Ae(Y.comparator),PA=new Ze(Y.comparator);function oe(...t){let e=PA;for(const n of t)e=e.add(n);return e}const RA=new Ze(he);function jA(){return RA}/**
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
 */function Ip(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function Ax(t){return{integerValue:""+t}}function DA(t,e){return uA(e)?Ax(e):Ip(t,e)}/**
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
 */class eu{constructor(){this._=void 0}}function OA(t,e,n){return t instanceof ta?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vp(i)&&(i=wp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof na?Px(t,e):t instanceof ra?Rx(t,e):function(s,i){const o=Cx(s,i),l=l0(o)+l0(s.Pe);return zh(o)&&zh(s.Pe)?Ax(l):Ip(s.serializer,l)}(t,e)}function LA(t,e,n){return t instanceof na?Px(t,e):t instanceof ra?Rx(t,e):n}function Cx(t,e){return t instanceof pc?function(r){return zh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ta extends eu{}class na extends eu{constructor(e){super(),this.elements=e}}function Px(t,e){const n=jx(e);for(const r of t.elements)n.some(s=>wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ra extends eu{constructor(e){super(),this.elements=e}}function Rx(t,e){let n=jx(e);for(const r of t.elements)n=n.filter(s=>!wn(s,r));return{arrayValue:{values:n}}}class pc extends eu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function l0(t){return Re(t.integerValue||t.doubleValue)}function jx(t){return _p(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class MA{constructor(e,n){this.field=e,this.transform=n}}function VA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof na&&s instanceof na||r instanceof ra&&s instanceof ra?fi(r.elements,s.elements,wn):r instanceof pc&&s instanceof pc?wn(r.Pe,s.Pe):r instanceof ta&&s instanceof ta}(t.transform,e.transform)}class FA{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tu{}function Dx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lx(t.key,rn.none()):new wa(t.key,t.data,rn.none());{const n=t.data,r=jt.empty();let s=new Ze(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zr(t.key,r,new qt(s.toArray()),rn.none())}}function UA(t,e,n){t instanceof wa?function(s,i,o){const l=s.value.clone(),c=u0(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(s,i,o){if(!Cl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=u0(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ox(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function No(t,e,n,r){return t instanceof wa?function(i,o,l,c){if(!Cl(i.precondition,o))return l;const d=i.value.clone(),f=d0(i.fieldTransforms,c,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(i,o,l,c){if(!Cl(i.precondition,o))return l;const d=d0(i.fieldTransforms,c,o),f=o.data;return f.setAll(Ox(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Cl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function $A(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Cx(r.transform,s||null);i!=null&&(n===null&&(n=jt.empty()),n.set(r.field,i))}return n||null}function c0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fi(r,s,(i,o)=>VA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends tu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zr extends tu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ox(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function u0(t,e,n){const r=new Map;pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,LA(o,l,n[s]))}return r}function d0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OA(i,o,e))}return r}class Lx extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zA extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class BA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&UA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Nx();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Dx(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&fi(this.mutations,e.mutations,(n,r)=>c0(n,r))&&fi(this.baseMutations,e.baseMutations,(n,r)=>c0(n,r))}}class bp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){pe(e.mutations.length===r.length);let s=function(){return CA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new bp(e,n,r,s)}}/**
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
 */class qA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Oe,ce;function HA(t){switch(t){default:return Z();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Mx(t){if(t===void 0)return Kn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Oe.OK:return M.OK;case Oe.CANCELLED:return M.CANCELLED;case Oe.UNKNOWN:return M.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return M.INTERNAL;case Oe.UNAVAILABLE:return M.UNAVAILABLE;case Oe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Oe.NOT_FOUND:return M.NOT_FOUND;case Oe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Oe.ABORTED:return M.ABORTED;case Oe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Oe.DATA_LOSS:return M.DATA_LOSS;default:return Z()}}(ce=Oe||(Oe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GA(){return new TextEncoder}/**
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
 */const KA=new is([4294967295,4294967295],0);function h0(t){const e=GA().encode(t),n=new ox;return n.update(e),new Uint8Array(n.digest())}function f0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new is([n,r],0),new is([s,i],0)]}class Sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ho(`Invalid padding: ${n}`);if(r<0)throw new ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=is.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(is.fromNumber(r)));return s.compare(KA)===1&&(s=new is([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=h0(e),[r,s]=f0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Sp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=h0(e),[r,s]=f0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,_a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nu(ee.min(),s,new Ae(he),Qn(),oe())}}class _a{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _a(r,n,oe(),oe(),oe())}}/**
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
 */class Pl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Vx{constructor(e,n){this.targetId=e,this.me=n}}class Fx{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class p0{constructor(){this.fe=0,this.ge=g0(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new _a(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=g0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qn(),this.qe=m0(),this.Qe=new Ae(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(qh(i))if(r===0){const o=new Y(i.path);this.Ue(n,o,dt.newNoDocument(o,ee.min()))}else pe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=hs(r).toUint8Array()}catch(c){if(c instanceof mx)return hi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Sp(o,s,i)}catch(c){return hi(c instanceof ho?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&qh(l.target)){const c=new Y(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,dt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=oe();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new nu(e,n,this.Qe,this.ke,r);return this.ke=Qn(),this.qe=m0(),this.Qe=new Ae(he),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new p0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new p0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function m0(){return new Ae(Y.comparator)}function g0(){return new Ae(Y.comparator)}const YA={asc:"ASCENDING",desc:"DESCENDING"},JA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XA={and:"AND",or:"OR"};class ZA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gh(t,e){return t.useProto3Json||Jc(e)?e:{value:e}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ux(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eC(t,e){return mc(t,e.toTimestamp())}function mn(t){return pe(!!t),ee.fromTimestamp(function(n){const r=Or(n);return new Fe(r.seconds,r.nanos)}(t))}function kp(t,e){return Kh(t,e).canonicalString()}function Kh(t,e){const n=function(s){return new Ee(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $x(t){const e=Ee.fromString(t);return pe(Hx(e)),e}function Qh(t,e){return kp(t.databaseId,e.path)}function Ed(t,e){const n=$x(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Bx(n))}function zx(t,e){return kp(t.databaseId,e)}function tC(t){const e=$x(t);return e.length===4?Ee.emptyPath():Bx(e)}function Yh(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bx(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function y0(t,e,n){return{name:Qh(t,e),fields:n.value.mapValue.fields}}function nC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(pe(f===void 0||typeof f=="string"),tt.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),tt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?M.UNKNOWN:Mx(d.code);return new W(f,d.message||"")}(o);n=new Fx(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ed(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):ee.min(),l=new jt({mapValue:{fields:r.document.fields}}),c=dt.newFoundDocument(s,i,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Pl(d,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ed(t,r.document),i=r.readTime?mn(r.readTime):ee.min(),o=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Pl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ed(t,r.document),i=r.removedTargetIds||[];n=new Pl([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new WA(s,i),l=r.targetId;n=new Vx(l,o)}}return n}function rC(t,e){let n;if(e instanceof wa)n={update:y0(t,e.key,e.value)};else if(e instanceof Lx)n={delete:Qh(t,e.key)};else if(e instanceof zr)n={update:y0(t,e.key,e.data),updateMask:hC(e.fieldMask)};else{if(!(e instanceof zA))return Z();n={verify:Qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:eC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function sC(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(ee.min())&&(o=mn(i)),new FA(o,s.transformResults||[])}(n,e))):[]}function iC(t,e){return{documents:[zx(t,e.path)]}}function oC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zx(t,s);const i=function(d){if(d.length!==0)return Wx(on.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:Cs(g.field),direction:cC(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Gh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function aC(t){let e=tC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){pe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=qx(m);return g instanceof on&&wx(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new fc(Ps(k.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Jc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,_=m.values||[];return new hc(_,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,_=m.values||[];return new hc(_,g)}(n.endAt)),bA(e,s,o,i,l,"F",c,d)}function lC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ps(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ps(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ps(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>qx(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function cC(t){return YA[t]}function uC(t){return JA[t]}function dC(t){return XA[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function Ps(t){return Je.fromServerFormat(t.fieldPath)}function Wx(t){return t instanceof Ve?function(n){if(n.op==="=="){if(r0(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NAN"}};if(n0(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(r0(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NAN"}};if(n0(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(n.field),op:uC(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(s=>Wx(s));return r.length===1?r[0]:{compositeFilter:{op:dC(n.op),filters:r}}}(t):Z()}function hC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _r{constructor(e,n,r,s,i=ee.min(),o=ee.min(),l=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fC{constructor(e){this.ct=e}}function pC(t){const e=aC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
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
 */class mC{constructor(){this.un=new gC}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Dr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class gC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(Ee.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Ee.comparator)).toArray()}}/**
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
 */class gi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new gi(0)}static kn(){return new gi(-1)}}/**
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
 */class yC{constructor(){this.changes=new Si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class wC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&No(r.mutation,s,qt.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=uo();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Qn();const o=ko(),l=function(){return ko()}();return n.forEach((c,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof zr)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),No(f.mutation,d,f.mutation.getFieldMask(),Fe.now())):o.set(d.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var m;return l.set(d,new vC(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ko();let s=new Ae((o,l)=>o-l),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let f=r.get(c)||qt.empty();f=l.applyToLocalView(d,f),r.set(c,f);const m=(s.get(l.batchId)||oe()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,f=c.value,m=Nx();f.forEach(g=>{if(!i.has(g)){const _=Dx(n.get(g),r.get(g));_!==null&&m.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(es());let l=-1,c=i;return o.next(d=>V.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,oe())).next(f=>({batchId:l,changes:kx(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=uo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=uo();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const d=function(m,g){return new va(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let l=uo();return o.forEach((c,d)=>{const f=i.get(c);f!==void 0&&No(f.mutation,d,qt.empty(),Fe.now()),Zc(n,d)&&(l=l.insert(c,d))}),l})}}/**
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
 */class _C{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:pC(s.bundledQuery),readTime:mn(s.readTime)}}(n)),V.resolve()}}/**
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
 */class xC{constructor(){this.overlays=new Ae(Y.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=es();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=es(),i=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ae((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=es(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=es(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return V.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qA(n,r));let i=this.Ir.get(n);i===void 0&&(i=oe(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class EC{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Np{constructor(){this.Tr=new Ze(ze.Er),this.dr=new Ze(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Ee([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Ee([])),r=new ze(n,e),s=new ze(n,e+1);let i=oe();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
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
 */class TC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze(ze.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(he);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new ze(new Y(i),0);let l=new Ze(he);return this.br.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(c.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class IC{constructor(e){this.Mr=e,this.docs=function(){return new Ae(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const o=n.path,l=new Y(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||oA(iA(f),r)<=0||(s.has(f.key)||Zc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bC(this)}getSize(e){return V.resolve(this.size)}}class bC extends yC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class SC{constructor(e){this.persistence=e,this.Nr=new Si(n=>xp(n),Ep),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Np,this.targetCount=0,this.kr=gi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new gi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
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
 */class kC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new yp(0),this.Kr=!1,this.Kr=!0,this.$r=new EC,this.referenceDelegate=e(this),this.Ur=new SC(this),this.indexManager=new mC,this.remoteDocumentCache=function(s){return new IC(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new fC(n),this.Gr=new _C(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new TC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const s=new NC(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class NC extends lA{constructor(e){super(),this.currentSequenceNumber=e}}class Ap{constructor(e){this.persistence=e,this.Jr=new Np,this.Yr=null}static Zr(e){return new Ap(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=Y.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Cp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cp(e,n.fromCache,r,s)}}/**
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
 */class AC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ak()?8:cA(mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AC;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(eo()<=le.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",As(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(eo()<=le.DEBUG&&Q("QueryEngine","Query:",As(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(eo()<=le.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",As(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):V.resolve())}Yi(e,n){if(a0(n))return V.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hh(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.ts(n,l);return this.ns(n,d,o,c.readTime)?this.Yi(e,Hh(n,null,"F")):this.rs(e,d,n,c)}))})))}Zi(e,n,r,s){return a0(n)||s.isEqual(ee.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?V.resolve(null):(eo()<=le.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),As(n)),this.rs(e,o,n,sA(s,-1)).next(l=>l))})}ts(e,n){let r=new Ze(bx(e));return n.forEach((s,i)=>{Zc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return eo()<=le.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",As(n)),this.Ji.getDocumentsMatchingQuery(e,n,Dr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class PC{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ae(he),this._s=new Si(i=>xp(i),Ep),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function RC(t,e,n,r){return new PC(t,e,n,r)}async function Gx(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=oe();for(const d of s){o.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function jC(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,d,f){const m=d.batch,g=m.keys();let _=V.resolve();return g.forEach(k=>{_=_.next(()=>f.getEntry(c,k)).next(N=>{const P=d.docVersions.get(k);pe(P!==null),N.version.compareTo(P)<0&&(m.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=oe();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Kx(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function DC(t,e){const n=te(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(tt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(m,_),function(N,P,w){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,_,f)&&l.push(n.Ur.updateTargetData(i,_))});let c=Qn(),d=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(OC(i,o,e.documentUpdates).next(f=>{c=f.Ps,d=f.Is})),!r.isEqual(ee.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(n.os=s,i))}function OC(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qn();return n.forEach((l,c)=>{const d=i.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function LC(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function MC(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jh(t,e,n){const r=te(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ya(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function v0(t,e,n){const r=te(t);let s=ee.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,d,f){const m=te(c),g=m._s.get(f);return g!==void 0?V.resolve(m.os.get(g)):m.Ur.getTargetData(d,f)}(r,o,pn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:oe())).next(l=>(VC(r,kA(e),l),{documents:l,Ts:i})))}function VC(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class w0{constructor(){this.activeTargetIds=jA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FC{constructor(){this.so=new w0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new w0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UC{_o(e){}shutdown(){}}/**
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
 */class _0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pl=null;function Td(){return pl===null?pl=function(){return 268435456+Math.round(2147483648*Math.random())}():pl++,"0x"+pl.toString(16)}/**
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
 */const $C={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const at="WebChannelConnection";class BC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Td(),c=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,c,d,s).then(f=>(Q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw hi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=$C[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Td();return new Promise((o,l)=>{const c=new ax;c.setWithCredentials(!0),c.listenOnce(lx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Nl.NO_ERROR:const f=c.getResponseJson();Q(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Nl.TIMEOUT:Q(at,`RPC '${e}' ${i} timed out`),l(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Nl.HTTP_ERROR:const m=c.getStatus();if(Q(at,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const k=function(P){const w=P.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(w)>=0?w:M.UNKNOWN}(_.status);l(new W(k,_.message))}else l(new W(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new W(M.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{Q(at,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);Q(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=Td(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dx(),l=ux(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Q(at,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=o.createWebChannel(f,c);let g=!1,_=!1;const k=new zC({Io:P=>{_?Q(at,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(Q(at,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),Q(at,`RPC '${e}' stream ${s} sending:`,P),m.send(P))},To:()=>m.close()}),N=(P,w,x)=>{P.listen(w,I=>{try{x(I)}catch(D){setTimeout(()=>{throw D},0)}})};return N(m,co.EventType.OPEN,()=>{_||(Q(at,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),N(m,co.EventType.CLOSE,()=>{_||(_=!0,Q(at,`RPC '${e}' stream ${s} transport closed`),k.So())}),N(m,co.EventType.ERROR,P=>{_||(_=!0,hi(at,`RPC '${e}' stream ${s} transport errored:`,P),k.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),N(m,co.EventType.MESSAGE,P=>{var w;if(!_){const x=P.data[0];pe(!!x);const I=x,D=I.error||((w=I[0])===null||w===void 0?void 0:w.error);if(D){Q(at,`RPC '${e}' stream ${s} received error:`,D);const L=D.status;let F=function(T){const b=Oe[T];if(b!==void 0)return Mx(b)}(L),E=D.message;F===void 0&&(F=M.INTERNAL,E="Unknown error status: "+L+" with message "+D.message),_=!0,k.So(new W(F,E)),m.close()}else Q(at,`RPC '${e}' stream ${s} received:`,x),k.bo(x)}}),N(l,cx.STAT_EVENT,P=>{P.stat===Uh.PROXY?Q(at,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Uh.NOPROXY&&Q(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Id(){return typeof document<"u"?document:null}/**
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
 */function ru(t){return new ZA(t,!0)}/**
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
 */class Qx{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Yx{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Qx(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qC extends Yx{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=nC(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?mn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Yh(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=qh(c)?{documents:iC(i,c)}:{query:oC(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ux(i,o.resumeToken);const d=Gh(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=mc(i,o.snapshotVersion.toTimestamp());const d=Gh(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=lC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Yh(this.serializer),n.removeTarget=e,this.a_(n)}}class WC extends Yx{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return pe(!!e.streamToken),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=sC(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Yh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rC(this.serializer,r))};this.a_(n)}}/**
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
 */class HC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Kh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Kh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class GC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Kn(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class KC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ts(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=te(c);d.L_.add(4),await xa(d),d.q_.set("Unknown"),d.L_.delete(4),await su(d)}(this))})}),this.q_=new GC(r,s)}}async function su(t){if(Ts(t))for(const e of t.B_)await e(!0)}async function xa(t){for(const e of t.B_)await e(!1)}function Jx(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Dp(n)?jp(n):ki(n).r_()&&Rp(n,e))}function Pp(t,e){const n=te(t),r=ki(n);n.N_.delete(e),r.r_()&&Xx(n,e),n.N_.size===0&&(r.r_()?r.o_():Ts(n)&&n.q_.set("Unknown"))}function Rp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ki(t).A_(e)}function Xx(t,e){t.Q_.xe(e),ki(t).R_(e)}function jp(t){t.Q_=new QA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ki(t).start(),t.q_.v_()}function Dp(t){return Ts(t)&&!ki(t).n_()&&t.N_.size>0}function Ts(t){return te(t).L_.size===0}function Zx(t){t.Q_=void 0}async function QC(t){t.q_.set("Online")}async function YC(t){t.N_.forEach((e,n)=>{Rp(t,e)})}async function JC(t,e){Zx(t),Dp(t)?(t.q_.M_(e),jp(t)):t.q_.set("Unknown")}async function XC(t,e,n){if(t.q_.set("Online"),e instanceof Fx&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gc(t,r)}else if(e instanceof Pl?t.Q_.Ke(e):e instanceof Vx?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await Kx(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),Xx(i,c);const m=new _r(f.target,c,d,f.sequenceNumber);Rp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await gc(t,r)}}async function gc(t,e,n){if(!ya(e))throw e;t.L_.add(1),await xa(t),t.q_.set("Offline"),n||(n=()=>Kx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await su(t)})}function eE(t,e){return e().catch(n=>gc(t,n,e))}async function iu(t){const e=te(t),n=Lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ZC(e);)try{const s=await LC(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,e2(e,s)}catch(s){await gc(e,s)}tE(e)&&nE(e)}function ZC(t){return Ts(t)&&t.O_.length<10}function e2(t,e){t.O_.push(e);const n=Lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function tE(t){return Ts(t)&&!Lr(t).n_()&&t.O_.length>0}function nE(t){Lr(t).start()}async function t2(t){Lr(t).p_()}async function n2(t){const e=Lr(t);for(const n of t.O_)e.m_(n.mutations)}async function r2(t,e,n){const r=t.O_.shift(),s=bp.from(r,e,n);await eE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await iu(t)}async function s2(t,e){e&&Lr(t).V_&&await async function(r,s){if(function(o){return HA(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Lr(r).s_(),await eE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await iu(r)}}(t,e),tE(t)&&nE(t)}async function x0(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Ts(n);n.L_.add(3),await xa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await su(n)}async function i2(t,e){const n=te(t);e?(n.L_.delete(2),await su(n)):e||(n.L_.add(2),await xa(n),n.q_.set("Unknown"))}function ki(t){return t.K_||(t.K_=function(n,r,s){const i=te(n);return i.w_(),new qC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:QC.bind(null,t),Ro:YC.bind(null,t),mo:JC.bind(null,t),d_:XC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Dp(t)?jp(t):t.q_.set("Unknown")):(await t.K_.stop(),Zx(t))})),t.K_}function Lr(t){return t.U_||(t.U_=function(n,r,s){const i=te(n);return i.w_(),new WC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:t2.bind(null,t),mo:s2.bind(null,t),f_:n2.bind(null,t),g_:r2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await iu(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Op{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Op(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lp(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),ya(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=uo(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class E0{constructor(){this.W_=new Ae(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class yi{constructor(e,n,r,s,i,o,l,c,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new yi(e,n,Xs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class o2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class a2{constructor(){this.queries=T0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=te(n),i=s.queries;s.queries=T0(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function T0(){return new Si(t=>Ix(t),Xc)}async function rE(t,e){const n=te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new o2,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Lp(o,`Initialization of query '${As(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Mp(n)}async function sE(t,e){const n=te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function l2(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Mp(n)}function c2(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Mp(t){t.Y_.forEach(e=>{e.next()})}var Xh,I0;(I0=Xh||(Xh={})).ea="default",I0.Cache="cache";class iE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xh.Cache}}/**
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
 */class oE{constructor(e){this.key=e}}class aE{constructor(e){this.key=e}}class u2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=bx(e),this.Ra=new Xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new E0,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),_=Zc(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;g&&_?g.data.isEqual(_.data)?k!==N&&(r.track({type:3,doc:_}),P=!0):this.ga(g,_)||(r.track({type:2,doc:_}),P=!0,(c&&this.Aa(_,c)>0||d&&this.Aa(_,d)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),P=!0):g&&!_&&(r.track({type:1,doc:g}),P=!0,(c||d)&&(l=!0)),P&&(_?(o=o.add(_),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(_,k){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return N(_)-N(k)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,d=c!==this.Ea;return this.Ea=c,o.length!==0||d?{snapshot:new yi(this.query,e.Ra,i,o,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new E0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new aE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new oE(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return yi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class d2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class h2{constructor(e){this.key=e,this.va=!1}}class f2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Si(l=>Ix(l),Xc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(Y.comparator),this.Na=new Map,this.La=new Np,this.Ba={},this.ka=new Map,this.qa=gi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function p2(t,e,n=!0){const r=fE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await lE(r,e,n,!0),s}async function m2(t,e){const n=fE(t);await lE(n,e,!0,!1)}async function lE(t,e,n,r){const s=await MC(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await g2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Jx(t.remoteStore,s),l}async function g2(t,e,n,r,s){t.Ka=(m,g,_)=>async function(N,P,w,x){let I=P.view.ma(w);I.ns&&(I=await v0(N.localStore,P.query,!1).then(({documents:E})=>P.view.ma(E,I)));const D=x&&x.targetChanges.get(P.targetId),L=x&&x.targetMismatches.get(P.targetId)!=null,F=P.view.applyChanges(I,N.isPrimaryClient,D,L);return S0(N,P.targetId,F.wa),F.snapshot}(t,m,g,_);const i=await v0(t.localStore,e,!0),o=new u2(e,i.Ts),l=o.ma(i.documents),c=_a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,c);S0(t,n,d.wa);const f=new d2(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function y2(t,e,n){const r=te(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Xc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pp(r.remoteStore,s.targetId),Zh(r,s.targetId)}).catch(ga)):(Zh(r,s.targetId),await Jh(r.localStore,s.targetId,!0))}async function v2(t,e){const n=te(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pp(n.remoteStore,r.targetId))}async function w2(t,e,n){const r=S2(t);try{const s=await function(o,l){const c=te(o),d=Fe.now(),f=l.reduce((_,k)=>_.add(k.key),oe());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let k=Qn(),N=oe();return c.cs.getEntries(_,f).next(P=>{k=P,k.forEach((w,x)=>{x.isValidDocument()||(N=N.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,k)).next(P=>{m=P;const w=[];for(const x of l){const I=$A(x,m.get(x.key).overlayedDocument);I!=null&&w.push(new zr(x.key,I,gx(I.value.mapValue),rn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,d,w,l)}).next(P=>{g=P;const w=P.applyToLocalDocumentSet(m,N);return c.documentOverlayCache.saveOverlays(_,P.batchId,w)})}).then(()=>({batchId:g.batchId,changes:kx(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let d=o.Ba[o.currentUser.toKey()];d||(d=new Ae(he)),d=d.insert(l,c),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await Ea(r,s.changes),await iu(r.remoteStore)}catch(s){const i=Lp(s,"Failed to persist write");n.reject(i)}}async function cE(t,e){const n=te(t);try{const r=await DC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?pe(o.va):s.removedDocuments.size>0&&(pe(o.va),o.va=!1))}),await Ea(n,r,e)}catch(r){await ga(r)}}function b0(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=te(o);c.onlineState=l;let d=!1;c.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&Mp(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _2(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ae(Y.comparator);o=o.insert(i,dt.newNoDocument(i,ee.min()));const l=oe().add(i),c=new nu(ee.min(),new Map,new Ae(he),o,l);await cE(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Vp(r)}else await Jh(r.localStore,e,!1).then(()=>Zh(r,e,n)).catch(ga)}async function x2(t,e){const n=te(t),r=e.batch.batchId;try{const s=await jC(n.localStore,e);dE(n,r,null),uE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ea(n,s)}catch(s){await ga(s)}}async function E2(t,e,n){const r=te(t);try{const s=await function(o,l){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,l).next(m=>(pe(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(d,m))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(r.localStore,e);dE(r,e,n),uE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ea(r,s)}catch(s){await ga(s)}}function uE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function dE(t,e,n){const r=te(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||hE(t,r)})}function hE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Pp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Vp(t))}function S0(t,e,n){for(const r of n)r instanceof oE?(t.La.addReference(r.key,e),T2(t,r)):r instanceof aE?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||hE(t,r.key)):Z()}function T2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Vp(t))}function Vp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new h2(n)),t.Oa=t.Oa.insert(n,r),Jx(t.remoteStore,new _r(pn(Tp(n.path)),r,"TargetPurposeLimboResolution",yp.oe))}}async function Ea(t,e,n){const r=te(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Cp.Wi(c.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,d){const f=te(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(d,g=>V.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>V.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!ya(m))throw m;Q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const _=f.os.get(g),k=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(g,N)}}}(r.localStore,i))}async function I2(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await Gx(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new W(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ea(n,r.hs)}}function b2(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let s=oe();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function fE(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_2.bind(null,e),e.Ca.d_=l2.bind(null,e.eventManager),e.Ca.$a=c2.bind(null,e.eventManager),e}function S2(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=E2.bind(null,e),e}class yc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ru(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return RC(this.persistence,new CC,e.initialUser,this.serializer)}Ga(e){return new kC(Ap.Zr,this.serializer)}Wa(e){return new FC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yc.provider={build:()=>new yc};class ef{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>b0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=I2.bind(null,this.syncEngine),await i2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new a2}()}createDatastore(e){const n=ru(e.databaseInfo.databaseId),r=function(i){return new BC(i)}(e.databaseInfo);return function(i,o,l,c){return new HC(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new KC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>b0(this.syncEngine,n,0),function(){return _0.D()?new _0:new UC}())}createSyncEngine(e,n){return function(s,i,o,l,c,d,f){const m=new f2(s,i,o,l,c,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=te(s);Q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await xa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ef.provider={build:()=>new ef};/**
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
 */class pE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class k2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=fx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bd(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gx(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function k0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await N2(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>x0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>x0(e.remoteStore,s)),t._onlineComponents=e}async function N2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await bd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;hi("Error using user provided cache. Falling back to memory cache: "+n),await bd(t,new yc)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await bd(t,new yc);return t._offlineComponents}async function mE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await k0(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await k0(t,new ef))),t._onlineComponents}function A2(t){return mE(t).then(e=>e.syncEngine)}async function gE(t){const e=await mE(t),n=e.eventManager;return n.onListen=p2.bind(null,e.syncEngine),n.onUnlisten=y2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=m2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=v2.bind(null,e.syncEngine),n}function C2(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const f=new pE({next:g=>{f.Za(),o.enqueueAndForget(()=>sE(i,m));const _=g.docs.has(l);!_&&g.fromCache?d.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?d.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new iE(Tp(l.path),f,{includeMetadataChanges:!0,_a:!0});return rE(i,m)}(await gE(t),t.asyncQueue,e,n,r)),r.promise}function P2(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const f=new pE({next:g=>{f.Za(),o.enqueueAndForget(()=>sE(i,m)),g.fromCache&&c.source==="server"?d.reject(new W(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new iE(l,f,{includeMetadataChanges:!0,_a:!0});return rE(i,m)}(await gE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function yE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const N0=new Map;/**
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
 */function vE(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function R2(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function A0(t){if(!Y.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function C0(t){if(Y.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ou(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class P0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}R2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new P0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new P0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QN;switch(r.type){case"firstParty":return new ZN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=N0.get(n);r&&(Q("ComponentProvider","Removing Datastore"),N0.delete(n),r.terminate())}(this),Promise.resolve()}}function j2(t,e,n,r={}){var s;const i=(t=_n(t,au))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ct.MOCK_USER;else{l=Tk(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(d)}t._authCredentials=new YN(new hx(l,c))}}/**
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
 */class Ni{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ni(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class Pr extends Ni{constructor(e,n,r){super(e,n,Tp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new Y(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function sa(t,e,...n){if(t=ye(t),vE("collection","path",e),t instanceof au){const r=Ee.fromString(e,...n);return C0(r),new Pr(t,null,r)}{if(!(t instanceof _t||t instanceof Pr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return C0(r),new Pr(t.firestore,null,r)}}function gn(t,e,...n){if(t=ye(t),arguments.length===1&&(e=fx.newId()),vE("doc","path",e),t instanceof au){const r=Ee.fromString(e,...n);return A0(r),new _t(t,null,new Y(r))}{if(!(t instanceof _t||t instanceof Pr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return A0(r),new _t(t.firestore,t instanceof Pr?t.converter:null,new Y(r))}}/**
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
 */class R0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Qx(this,"async_queue_retry"),this.Vu=()=>{const r=Id();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Id();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Id();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new $n;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ya(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Op.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Ai extends au{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new R0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new R0(e),this._firestoreClient=void 0,await e}}}function wE(t,e){const n=typeof t=="object"?t:ma(),r=typeof t=="string"?t:"(default)",s=Zn(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Y_("firestore");i&&j2(s,...i)}return s}function Fp(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||D2(t),t._firestoreClient}function D2(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,d,f){return new hA(l,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new k2(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class vi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vi(tt.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vi(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class lu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cu{constructor(e){this._methodName=e}}/**
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
 */class Up{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */class $p{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const O2=/^__.*__$/;class L2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}class M2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class zp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new zp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_E(this.Cu)&&O2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class V2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ru(e)}Qu(e,n,r,s=!1){return new zp({Cu:e,methodName:n,qu:r,path:Je.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uu(t){const e=t._freezeSettings(),n=ru(t._databaseId);return new V2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Wp("Data must be an object, but it was:",o,r);const l=EE(r,o);let c,d;if(i.merge)c=new qt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=IE(e,m,n);if(!o.contains(g))throw new W(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);B2(f,g)||f.push(g)}c=new qt(f),d=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,d=o.fieldTransforms;return new L2(new jt(l),c,d)}class Bp extends cu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bp}}class qp extends cu{_toFieldTransform(e){return new MA(e.path,new ta)}isEqual(e){return e instanceof qp}}function F2(t,e,n,r){const s=t.Qu(1,e,n);Wp("Data must be an object, but it was:",s,r);const i=[],o=jt.empty();Es(r,(c,d)=>{const f=Hp(e,c,n);d=ye(d);const m=s.Nu(f);if(d instanceof Bp)i.push(f);else{const g=du(d,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new qt(i);return new M2(o,l,s.fieldTransforms)}function U2(t,e,n,r,s,i){if(t.Qu(1,e,n),IE(e,r,n),i.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`)}function $2(t,e,n,r=!1){return du(n,t.Qu(r?4:3,e))}function du(t,e){if(TE(t=ye(t)))return Wp("Unsupported field value:",e,t),EE(t,e);if(t instanceof cu)return function(r,s){if(!_E(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=du(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:mc(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mc(s.serializer,i)}}if(r instanceof Up)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vi)return{bytesValue:Ux(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $p)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ip(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ou(r)}`)}(t,e)}function EE(t,e){const n={};return px(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,s)=>{const i=du(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function TE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Up||t instanceof vi||t instanceof _t||t instanceof cu||t instanceof $p)}function Wp(t,e,n){if(!TE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ou(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function IE(t,e,n){if((e=ye(e))instanceof lu)return e._internalPath;if(typeof e=="string")return Hp(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const z2=new RegExp("[~\\*/\\[\\]]");function Hp(t,e,n){if(e.search(z2)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lu(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new W(M.INVALID_ARGUMENT,l+t+c)}function B2(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new q2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class q2 extends bE{data(){return super.data()}}function Gp(t,e){return typeof e=="string"?Hp(t,e):e instanceof lu?e._internalPath:e._delegate._internalPath}/**
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
 */function W2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kp{}class H2 extends Kp{}function wc(t,e,...n){let r=[];e instanceof Kp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Qp).length,l=i.filter(c=>c instanceof hu).length;if(o>1||o>0&&l>0)throw new W(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class hu extends H2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hu(e,n,r)}_apply(e){const n=this._parse(e);return SE(e._query,n),new Ni(e.firestore,e.converter,Wh(e._query,n))}_parse(e){const n=uu(e.firestore);return function(i,o,l,c,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){D0(m,f);const _=[];for(const k of m)_.push(j0(c,i,k));g={arrayValue:{values:_}}}else g=j0(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||D0(m,f),g=$2(l,o,m,f==="in"||f==="not-in");return Ve.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _c(t,e,n){const r=e,s=Gp("where",t);return hu._create(s,r,n)}class Qp extends Kp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)SE(o,c),o=Wh(o,c)}(e._query,n),new Ni(e.firestore,e.converter,Wh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function j0(t,e,n){if(typeof(n=ye(n))=="string"){if(n==="")throw new W(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tx(e)&&n.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!Y.isDocumentKey(r))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return t0(t,new Y(r))}if(n instanceof _t)return t0(t,n._key);throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ou(n)}.`)}function D0(t,e){if(!Array.isArray(t)||t.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class G2{convertValue(e,n="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Re(o.doubleValue));return new $p(i)}convertGeoPoint(e){return new Up(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xo(e));default:return null}}convertTimestamp(e){const n=Or(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);pe(Hx(r));const s=new Zo(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||Kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function kE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class fo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NE extends bE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Rl extends NE{data(e={}){return super.data(e)}}class K2{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rl(this._firestore,this._userDataWriter,r.key,r,new fo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Rl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Rl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Q2(l.type),doc:c,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Q2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function Ta(t){t=_n(t,_t);const e=_n(t.firestore,Ai);return C2(Fp(e),t._key).then(n=>Y2(e,t,n))}class AE extends G2{constructor(e){super(),this.firestore=e}convertBytes(e){return new vi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function xc(t){t=_n(t,Ni);const e=_n(t.firestore,Ai),n=Fp(e),r=new AE(e);return W2(t._query),P2(n,t._query).then(s=>new K2(e,r,t,s))}function CE(t,e,n){t=_n(t,_t);const r=_n(t.firestore,Ai),s=kE(t.converter,e,n);return Yp(r,[xE(uu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,rn.none())])}function tf(t,e,n,...r){t=_n(t,_t);const s=_n(t.firestore,Ai),i=uu(s);let o;return o=typeof(e=ye(e))=="string"||e instanceof lu?U2(i,"updateDoc",t._key,e,n,r):F2(i,"updateDoc",t._key,e),Yp(s,[o.toMutation(t._key,rn.exists(!0))])}function PE(t,e){const n=_n(t.firestore,Ai),r=gn(t),s=kE(t.converter,e);return Yp(n,[xE(uu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,rn.exists(!1))]).then(()=>r)}function Yp(t,e){return function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget(async()=>w2(await A2(r),s,i)),i.promise}(Fp(t),e)}function Y2(t,e,n){const r=n.docs.get(e._key),s=new AE(t);return new NE(t,s,e._key,r,new fo(n.hasPendingWrites,n.fromCache),e.converter)}function ts(){return new qp("serverTimestamp")}(function(e,n=!0){(function(s){bi=s})(Ii),Vt(new At("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ai(new JN(r.getProvider("auth-internal")),new tA(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zo(d.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ht(Yy,"4.7.3",e),ht(Yy,"4.7.3","esm2017")})();function Jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function RE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J2=RE,jE=new $r("auth","Firebase",RE());/**
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
 */const Ec=new Qc("@firebase/auth");function X2(t,...e){Ec.logLevel<=le.WARN&&Ec.warn(`Auth (${Ii}): ${t}`,...e)}function jl(t,...e){Ec.logLevel<=le.ERROR&&Ec.error(`Auth (${Ii}): ${t}`,...e)}/**
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
 */function an(t,...e){throw Xp(t,...e)}function yn(t,...e){return Xp(t,...e)}function DE(t,e,n){const r=Object.assign(Object.assign({},J2()),{[e]:n});return new $r("auth","Firebase",r).create(e,{appName:t.name})}function zn(t){return DE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jE.create(t,...e)}function X(t,e,...n){if(!t)throw Xp(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jl(e),new Error(e)}function Yn(t,e){t||Ln(e)}/**
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
 */function nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Z2(){return O0()==="http:"||O0()==="https:"}function O0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function eP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z2()||Z_()||"connection"in navigator)?navigator.onLine:!0}function tP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ik()||kk()}get(){return eP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zp(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class OE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rP=new Ia(3e4,6e4);function er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,s={}){return LE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=pa(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},i);return Sk()||(d.referrerPolicy="no-referrer"),OE.fetch()(ME(t,t.config.apiHost,n,l),d)})}async function LE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nP),e);try{const s=new iP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ml(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ml(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ml(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ml(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw DE(t,f,d);an(t,f)}}catch(s){if(s instanceof Kt)throw s;an(t,"network-request-failed",{message:String(s)})}}async function ba(t,e,n,r,s={}){const i=await tr(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ME(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Zp(t.config,s):`${t.config.apiScheme}://${s}`}function sP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),rP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yn(t,e,r);return s.customData._tokenResponse=n,s}function L0(t){return t!==void 0&&t.enterprise!==void 0}class oP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function aP(t,e){return tr(t,"GET","/v2/recaptchaConfig",er(t,e))}/**
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
 */async function lP(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function VE(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cP(t,e=!1){const n=ye(t),r=await n.getIdToken(e),s=em(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ao(Sd(s.auth_time)),issuedAtTime:Ao(Sd(s.iat)),expirationTime:Ao(Sd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sd(t){return Number(t)*1e3}function em(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const s=K_(n);return s?JSON.parse(s):(jl("Failed to decode base64 JWT payload"),null)}catch(s){return jl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function M0(t){const e=em(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kt&&uP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ia(t,VE(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?FE(i.providerUserInfo):[],l=fP(t.providerData,o),c=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new rf(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function hP(t){const e=ye(t);await Tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function FE(t){return t.map(e=>{var{providerId:n}=e,r=Jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function pP(t,e){const n=await LE(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ME(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",OE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mP(t,e){return tr(t,"POST","/v2/accounts:revokeToken",er(t,e))}/**
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
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):M0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=M0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Zs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function or(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ia(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cP(this,e)}reload(){return hP(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await ia(this,lP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(d=n.createdAt)!==null&&d!==void 0?d:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:D,isAnonymous:L,providerData:F,stsTokenManager:E}=n;X(I&&E,e,"internal-error");const v=Zs.fromJSON(this.name,E);X(typeof I=="string",e,"internal-error"),or(m,e.name),or(g,e.name),X(typeof D=="boolean",e,"internal-error"),X(typeof L=="boolean",e,"internal-error"),or(_,e.name),or(k,e.name),or(N,e.name),or(P,e.name),or(w,e.name),or(x,e.name);const T=new Mn({uid:I,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:L,photoURL:k,phoneNumber:_,tenantId:N,stsTokenManager:v,createdAt:w,lastLoginAt:x});return F&&Array.isArray(F)&&(T.providerData=F.map(b=>Object.assign({},b))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zs;s.updateFromServerResponse(n);const i=new Mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?FE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Zs;l.updateFromIdToken(r);const c=new Mn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new rf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
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
 */const V0=new Map;function Vn(t){Yn(t instanceof Function,"Expected a class definition");let e=V0.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,V0.set(t,e),e)}/**
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
 */class UE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}UE.type="NONE";const F0=UE;/**
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
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class ei{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Dl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Dl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ei(Vn(F0),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Vn(F0);const o=Dl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const m=Mn._fromJSON(e,f);d!==i&&(l=m),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ei(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new ei(i,e,r))}}/**
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
 */function U0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($E(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HE(e))return"Blackberry";if(GE(e))return"Webos";if(zE(e))return"Safari";if((e.includes("chrome/")||BE(e))&&!e.includes("edge/"))return"Chrome";if(WE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $E(t=mt()){return/firefox\//i.test(t)}function zE(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BE(t=mt()){return/crios\//i.test(t)}function qE(t=mt()){return/iemobile/i.test(t)}function WE(t=mt()){return/android/i.test(t)}function HE(t=mt()){return/blackberry/i.test(t)}function GE(t=mt()){return/webos/i.test(t)}function tm(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gP(t=mt()){var e;return tm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yP(){return Nk()&&document.documentMode===10}function KE(t=mt()){return tm(t)||WE(t)||GE(t)||HE(t)||/windows phone/i.test(t)||qE(t)}/**
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
 */function QE(t,e=[]){let n;switch(t){case"Browser":n=U0(mt());break;case"Worker":n=`${U0(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${r}`}/**
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
 */class vP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wP(t,e={}){return tr(t,"GET","/v2/passwordPolicy",er(t,e))}/**
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
 */const _P=6;class xP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_P,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class EP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $0(this),this.idTokenSubscription=new $0(this),this.beforeStateQueue=new vP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await VE(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(zn(this));const n=e?ye(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wP(this),n=new xP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $r("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=QE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&X2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Br(t){return ye(t)}class $0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dk(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TP(t){fu=t}function YE(t){return fu.loadJS(t)}function IP(){return fu.recaptchaEnterpriseScript}function bP(){return fu.gapiScript}function SP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kP="recaptcha-enterprise",NP="NO_RECAPTCHA";class AP{constructor(e){this.type=kP,this.auth=Br(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{aP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new oP(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;L0(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(NP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&L0(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=IP();c.length!==0&&(c+=l),YE(c).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function z0(t,e,n,r=!1){const s=new AP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ic(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await z0(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await z0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function CP(t,e){const n=Zn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qo(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function PP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RP(t,e,n){const r=Br(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=JE(e),{host:o,port:l}=jP(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),DP()}function JE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jP(t){const e=JE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:B0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:B0(o)}}}function B0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class nm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function OP(t,e){return tr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function LP(t,e){return ba(t,"POST","/v1/accounts:signInWithPassword",er(t,e))}async function MP(t,e){return tr(t,"POST","/v1/accounts:sendOobCode",er(t,e))}async function VP(t,e){return MP(t,e)}/**
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
 */async function FP(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}async function UP(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}/**
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
 */class oa extends nm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new oa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,n,"signInWithPassword",LP);case"emailLink":return FP(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,r,"signUpPassword",OP);case"emailLink":return UP(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ti(t,e){return ba(t,"POST","/v1/accounts:signInWithIdp",er(t,e))}/**
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
 */const $P="http://localhost";class ps extends nm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Jp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ti(e,n)}buildRequest(){const e={requestUri:$P,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
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
 */function zP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BP(t){const e=ao(lo(t)).link,n=e?ao(lo(e)).deep_link_id:null,r=ao(lo(t)).deep_link_id;return(r?ao(lo(r)).link:null)||r||n||e||t}class rm{constructor(e){var n,r,s,i,o,l;const c=ao(lo(e)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=zP((s=c.mode)!==null&&s!==void 0?s:null);X(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=BP(e);try{return new rm(n)}catch{return null}}}/**
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
 */class Ci{constructor(){this.providerId=Ci.PROVIDER_ID}static credential(e,n){return oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rm.parseLink(n);return X(r,"argument-error"),oa._fromEmailAndCode(e,r.code,r.tenantId)}}Ci.PROVIDER_ID="password";Ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class XE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sa extends XE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fr extends Sa{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
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
 */class pr extends Sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
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
 */class mr extends Sa{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
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
 */class gr extends Sa{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
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
 */async function qP(t,e){return ba(t,"POST","/v1/accounts:signUp",er(t,e))}/**
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
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mn._fromIdTokenResponse(e,r,s),o=q0(r);return new ms({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=q0(r);return new ms({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function q0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bc extends Kt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bc(e,n,r,s)}}function ZE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bc._fromErrorAndOperation(t,i,e,r):i})}async function WP(t,e,n=!1){const r=await ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
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
 */async function HP(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(zn(r));const s="reauthenticate";try{const i=await ia(t,ZE(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=em(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),ms._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
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
 */async function e1(t,e,n=!1){if(dn(t.app))return Promise.reject(zn(t));const r="signIn",s=await ZE(t,r,e),i=await ms._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function GP(t,e){return e1(Br(t),e)}/**
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
 */async function t1(t){const e=Br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KP(t,e,n){const r=Br(t);await Ic(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VP)}async function QP(t,e,n){if(dn(t.app))return Promise.reject(zn(t));const r=Br(t),o=await Ic(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&t1(t),c}),l=await ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function YP(t,e,n){return dn(t.app)?Promise.reject(zn(t)):GP(ye(t),Ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&t1(t),r})}function JP(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function XP(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function ZP(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}function eR(t){return ye(t).signOut()}const Sc="__sak";/**
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
 */class n1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sc,"1"),this.storage.removeItem(Sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tR=1e3,nR=10;class r1 extends n1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=KE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r1.type="LOCAL";const rR=r1;/**
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
 */class s1 extends n1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}s1.type="SESSION";const i1=s1;/**
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
 */function sR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),c=await sR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pu.receivers=[];/**
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
 */function sm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const d=sm("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function oR(t){vn().location.href=t}/**
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
 */function o1(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function aR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cR(){return o1()?self:null}/**
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
 */const a1="firebaseLocalStorageDb",uR=1,kc="firebaseLocalStorage",l1="fbase_key";class ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mu(t,e){return t.transaction([kc],e?"readwrite":"readonly").objectStore(kc)}function dR(){const t=indexedDB.deleteDatabase(a1);return new ka(t).toPromise()}function sf(){const t=indexedDB.open(a1,uR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kc,{keyPath:l1})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kc)?e(r):(r.close(),await dR(),e(await sf()))})})}async function W0(t,e,n){const r=mu(t,!0).put({[l1]:e,value:n});return new ka(r).toPromise()}async function hR(t,e){const n=mu(t,!1).get(e),r=await new ka(n).toPromise();return r===void 0?null:r.value}function H0(t,e){const n=mu(t,!0).delete(e);return new ka(n).toPromise()}const fR=800,pR=3;class c1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pu._getInstance(cR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aR(),!this.activeServiceWorker)return;this.sender=new iR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sf();return await W0(e,Sc,"1"),await H0(e,Sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>W0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>H0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mu(s,!1).getAll();return new ka(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c1.type="LOCAL";const mR=c1;new Ia(3e4,6e4);/**
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
 */function gR(t,e){return e?Vn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class im extends nm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yR(t){return e1(t.auth,new im(t),t.bypassAuthState)}function vR(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),HP(n,new im(t),t.bypassAuthState)}async function wR(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),WP(n,new im(t),t.bypassAuthState)}/**
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
 */class u1{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yR;case"linkViaPopup":case"linkViaRedirect":return wR;case"reauthViaPopup":case"reauthViaRedirect":return vR;default:an(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _R=new Ia(2e3,1e4);class qs extends u1{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_R.get())};e()}}qs.currentPopupAction=null;/**
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
 */const xR="pendingRedirect",Ol=new Map;class ER extends u1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await TR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TR(t,e){const n=SR(e),r=bR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function IR(t,e){Ol.set(t._key(),e)}function bR(t){return Vn(t._redirectPersistence)}function SR(t){return Dl(xR,t.config.apiKey,t.name)}async function kR(t,e,n=!1){if(dn(t.app))return Promise.reject(zn(t));const r=Br(t),s=gR(r,e),o=await new ER(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const NR=10*60*1e3;class AR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!d1(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NR&&this.cachedEventUids.clear(),this.cachedEventUids.has(G0(e))}saveEventToCache(e){this.cachedEventUids.add(G0(e)),this.lastProcessedEventTime=Date.now()}}function G0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d1(t);default:return!1}}/**
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
 */async function PR(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
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
 */const RR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jR=/^https?/;async function DR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PR(t);for(const n of e)try{if(OR(n))return}catch{}an(t,"unauthorized-domain")}function OR(t){const e=nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jR.test(n))return!1;if(RR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const LR=new Ia(3e4,6e4);function K0(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MR(t){return new Promise((e,n)=>{var r,s,i;function o(){K0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{K0(),n(yn(t,"network-request-failed"))},timeout:LR.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const l=SP("iframefcb");return vn()[l]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},YE(`${bP()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function VR(t){return Ll=Ll||MR(t),Ll}/**
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
 */const FR=new Ia(5e3,15e3),UR="__/auth/iframe",$R="emulator/auth/iframe",zR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qR(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zp(e,$R):`https://${t.config.authDomain}/${UR}`,r={apiKey:e.apiKey,appName:t.name,v:Ii},s=BR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pa(r).slice(1)}`}async function WR(t){const e=await VR(t),n=vn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:qR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=vn().setTimeout(()=>{i(o)},FR.get());function c(){vn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const HR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GR=500,KR=600,QR="_blank",YR="http://localhost";class Q0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JR(t,e,n,r=GR,s=KR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},HR),{width:r.toString(),height:s.toString(),top:i,left:o}),d=mt().toLowerCase();n&&(l=BE(d)?QR:n),$E(d)&&(e=e||YR,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,k])=>`${g}${_}=${k},`,"");if(gP(d)&&l!=="_self")return XR(e||"",l),new Q0(null);const m=window.open(e||"",l,f);X(m,t,"popup-blocked");try{m.focus()}catch{}return new Q0(m)}function XR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZR="__/auth/handler",ej="emulator/auth/handler",tj=encodeURIComponent("fac");async function Y0(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ii,eventId:s};if(e instanceof XE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Sa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),d=c?`#${tj}=${encodeURIComponent(c)}`:"";return`${nj(t)}?${pa(l).slice(1)}${d}`}function nj({config:t}){return t.emulator?Zp(t,ej):`https://${t.authDomain}/${ZR}`}/**
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
 */const kd="webStorageSupport";class rj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i1,this._completeRedirectFn=kR,this._overrideRedirectResult=IR}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Y0(e,n,r,nf(),s);return JR(e,o,sm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Y0(e,n,r,nf(),s);return oR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WR(e),r=new AR(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kd,{type:kd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kd];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return KE()||zE()||tm()}}const sj=rj;var J0="@firebase/auth",X0="1.7.9";/**
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
 */class ij{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aj(t){Vt(new At("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QE(t)},d=new EP(r,s,i,c);return PP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vt(new At("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(r=>new ij(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(J0,X0,oj(t)),ht(J0,X0,"esm2017")}/**
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
 */const lj=5*60,cj=X_("authIdTokenMaxAge")||lj;let Z0=null;const uj=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cj)return;const s=n==null?void 0:n.token;Z0!==s&&(Z0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dj(t=ma()){const e=Zn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CP(t,{popupRedirectResolver:sj,persistence:[mR,rR,i1]}),r=X_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=uj(i.toString());XP(n,o,()=>o(n.currentUser)),JP(n,l=>o(l))}}const s=Q_("auth");return s&&RP(n,`http://${s}`),n}function hj(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",hj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aj("Browser");const h1="@firebase/installations",om="0.6.9";/**
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
 */const f1=1e4,p1=`w:${om}`,m1="FIS_v2",fj="https://firebaseinstallations.googleapis.com/v1",pj=60*60*1e3,mj="installations",gj="Installations";/**
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
 */const yj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gs=new $r(mj,gj,yj);function g1(t){return t instanceof Kt&&t.code.includes("request-failed")}/**
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
 */function y1({projectId:t}){return`${fj}/projects/${t}/installations`}function v1(t){return{token:t.token,requestStatus:2,expiresIn:wj(t.expiresIn),creationTime:Date.now()}}async function w1(t,e){const r=(await e.json()).error;return gs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vj(t,{refreshToken:e}){const n=_1(t);return n.append("Authorization",_j(e)),n}async function x1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wj(t){return Number(t.replace("s","000"))}function _j(t){return`${m1} ${t}`}/**
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
 */async function xj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=y1(t),s=_1(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:n,authVersion:m1,appId:t.appId,sdkVersion:p1},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await x1(()=>fetch(r,l));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:v1(d.authToken)}}else throw await w1("Create Installation",c)}/**
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
 */function E1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Ej(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Tj=/^[cdef][\w-]{21}$/,of="";function Ij(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=bj(t);return Tj.test(n)?n:of}catch{return of}}function bj(t){return Ej(t).substr(0,22)}/**
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
 */function gu(t){return`${t.appName}!${t.appId}`}/**
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
 */const T1=new Map;function I1(t,e){const n=gu(t);b1(n,e),Sj(n,e)}function b1(t,e){const n=T1.get(t);if(n)for(const r of n)r(e)}function Sj(t,e){const n=kj();n&&n.postMessage({key:t,fid:e}),Nj()}let ns=null;function kj(){return!ns&&"BroadcastChannel"in self&&(ns=new BroadcastChannel("[Firebase] FID Change"),ns.onmessage=t=>{b1(t.data.key,t.data.fid)}),ns}function Nj(){T1.size===0&&ns&&(ns.close(),ns=null)}/**
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
 */const Aj="firebase-installations-database",Cj=1,ys="firebase-installations-store";let Nd=null;function am(){return Nd||(Nd=Yc(Aj,Cj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}})),Nd}async function Nc(t,e){const n=gu(t),s=(await am()).transaction(ys,"readwrite"),i=s.objectStore(ys),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&I1(t,e.fid),e}async function S1(t){const e=gu(t),r=(await am()).transaction(ys,"readwrite");await r.objectStore(ys).delete(e),await r.done}async function yu(t,e){const n=gu(t),s=(await am()).transaction(ys,"readwrite"),i=s.objectStore(ys),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&I1(t,l.fid),l}/**
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
 */async function lm(t){let e;const n=await yu(t.appConfig,r=>{const s=Pj(r),i=Rj(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===of?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Pj(t){const e=t||{fid:Ij(),registrationStatus:0};return k1(e)}function Rj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(gs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Dj(t)}:{installationEntry:e}}async function jj(t,e){try{const n=await xj(t,e);return Nc(t.appConfig,n)}catch(n){throw g1(n)&&n.customData.serverCode===409?await S1(t.appConfig):await Nc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Dj(t){let e=await ev(t.appConfig);for(;e.registrationStatus===1;)await E1(100),e=await ev(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await lm(t);return r||n}return e}function ev(t){return yu(t,e=>{if(!e)throw gs.create("installation-not-found");return k1(e)})}function k1(t){return Oj(t)?{fid:t.fid,registrationStatus:0}:t}function Oj(t){return t.registrationStatus===1&&t.registrationTime+f1<Date.now()}/**
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
 */async function Lj({appConfig:t,heartbeatServiceProvider:e},n){const r=Mj(t,n),s=vj(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:p1,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await x1(()=>fetch(r,l));if(c.ok){const d=await c.json();return v1(d)}else throw await w1("Generate Auth Token",c)}function Mj(t,{fid:e}){return`${y1(t)}/${e}/authTokens:generate`}/**
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
 */async function cm(t,e=!1){let n;const r=await yu(t.appConfig,i=>{if(!N1(i))throw gs.create("not-registered");const o=i.authToken;if(!e&&Uj(o))return i;if(o.requestStatus===1)return n=Vj(t,e),i;{if(!navigator.onLine)throw gs.create("app-offline");const l=zj(i);return n=Fj(t,l),l}});return n?await n:r.authToken}async function Vj(t,e){let n=await tv(t.appConfig);for(;n.authToken.requestStatus===1;)await E1(100),n=await tv(t.appConfig);const r=n.authToken;return r.requestStatus===0?cm(t,e):r}function tv(t){return yu(t,e=>{if(!N1(e))throw gs.create("not-registered");const n=e.authToken;return Bj(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Fj(t,e){try{const n=await Lj(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Nc(t.appConfig,r),n}catch(n){if(g1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await S1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Nc(t.appConfig,r)}throw n}}function N1(t){return t!==void 0&&t.registrationStatus===2}function Uj(t){return t.requestStatus===2&&!$j(t)}function $j(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pj}function zj(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Bj(t){return t.requestStatus===1&&t.requestTime+f1<Date.now()}/**
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
 */async function qj(t){const e=t,{installationEntry:n,registrationPromise:r}=await lm(e);return r?r.catch(console.error):cm(e).catch(console.error),n.fid}/**
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
 */async function Wj(t,e=!1){const n=t;return await Hj(n),(await cm(n,e)).token}async function Hj(t){const{registrationPromise:e}=await lm(t);e&&await e}/**
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
 */function Gj(t){if(!t||!t.options)throw Ad("App Configuration");if(!t.name)throw Ad("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ad(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ad(t){return gs.create("missing-app-config-values",{valueName:t})}/**
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
 */const A1="installations",Kj="installations-internal",Qj=t=>{const e=t.getProvider("app").getImmediate(),n=Gj(e),r=Zn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Yj=t=>{const e=t.getProvider("app").getImmediate(),n=Zn(e,A1).getImmediate();return{getId:()=>qj(n),getToken:s=>Wj(n,s)}};function Jj(){Vt(new At(A1,Qj,"PUBLIC")),Vt(new At(Kj,Yj,"PRIVATE"))}Jj();ht(h1,om);ht(h1,om,"esm2017");/**
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
 */const Ac="analytics",Xj="firebase_id",Zj="origin",eD=60*1e3,tD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",um="https://www.googletagmanager.com/gtag/js";/**
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
 */const xt=new Qc("@firebase/analytics");/**
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
 */const nD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Lt=new $r("analytics","Analytics",nD);/**
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
 */function rD(t){if(!t.startsWith(um)){const e=Lt.create("invalid-gtag-resource",{gtagURL:t});return xt.warn(e.message),""}return t}function C1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function sD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function iD(t,e){const n=sD("firebase-js-sdk-policy",{createScriptURL:rD}),r=document.createElement("script"),s=`${um}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function oD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function aD(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await C1(n)).find(d=>d.measurementId===s);c&&await e[c.appId]}}catch(l){xt.error(l)}t("config",s,i)}async function lD(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await C1(n);for(const c of o){const d=l.find(m=>m.measurementId===c),f=d&&e[d.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){xt.error(i)}}function cD(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await lD(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await aD(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,d]=o;t("get",l,c,d)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){xt.error(l)}}return s}function uD(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=cD(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function dD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(um)&&n.src.includes(t))return n;return null}/**
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
 */const hD=30,fD=1e3;class pD{constructor(e={},n=fD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const P1=new pD;function mD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gD(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:mD(r)},i=tD.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw Lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function yD(t,e=P1,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Lt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new _D;return setTimeout(async()=>{l.abort()},eD),R1({appId:r,apiKey:s,measurementId:i},o,l,e)}async function R1(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=P1){var i;const{appId:o,measurementId:l}=t;try{await vD(r,e)}catch(c){if(l)return xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await gD(t);return s.deleteThrottleMetadata(o),c}catch(c){const d=c;if(!wD(d)){if(s.deleteThrottleMetadata(o),l)return xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw c}const f=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?Uy(n,s.intervalMillis,hD):Uy(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,m),xt.debug(`Calling attemptFetch again in ${f} millis`),R1(t,m,r,s)}}function vD(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function wD(t){if(!(t instanceof Kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _D{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xD(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}async function ED(t,e,n,r){{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function TD(){if(fp())try{await pp()}catch(t){return xt.warn(Lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return xt.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ID(t,e,n,r,s,i,o){var l;const c=yD(t);c.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&xt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>xt.error(_)),e.push(c);const d=TD().then(_=>{if(_)return r.getId()}),[f,m]=await Promise.all([c,d]);dD(i)||iD(i,f.measurementId),s("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[Zj]="firebase",g.update=!0,m!=null&&(g[Xj]=m),s("config",f.measurementId,g),f.measurementId}/**
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
 */let bD=class{constructor(e){this.app=e}_delete(){return delete ni[this.app.options.appId],Promise.resolve()}},ni={},nv=[];const rv={};let Cd="dataLayer",SD="gtag",sv,dm,iv=!1;function kD(){const t=[];if(Z_()&&t.push("This is a browser extension environment."),ex()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});xt.warn(n.message)}}function ND(t,e,n){kD();const r=t.options.appId;if(!r)throw Lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Lt.create("no-api-key");if(ni[r]!=null)throw Lt.create("already-exists",{id:r});if(!iv){oD(Cd);const{wrappedGtag:i,gtagCore:o}=uD(ni,nv,rv,Cd,SD);dm=i,sv=o,iv=!0}return ni[r]=ID(t,nv,rv,e,sv,Cd,n),new bD(t)}function AD(t=ma()){t=ye(t);const e=Zn(t,Ac);return e.isInitialized()?e.getImmediate():CD(t)}function CD(t,e={}){const n=Zn(t,Ac);if(n.isInitialized()){const s=n.getImmediate();if(Qo(e,n.getOptions()))return s;throw Lt.create("already-initialized")}return n.initialize({options:e})}function PD(t,e,n){t=ye(t),ED(dm,ni[t.app.options.appId],e).catch(r=>xt.error(r))}function j1(t,e,n,r){t=ye(t),xD(dm,ni[t.app.options.appId],e,n,r).catch(s=>xt.error(s))}const ov="@firebase/analytics",av="0.10.8";function RD(){Vt(new At(Ac,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ND(r,s,n)},"PUBLIC")),Vt(new At("analytics-internal",t,"PRIVATE")),ht(ov,av),ht(ov,av,"esm2017");function t(e){try{const n=e.getProvider(Ac).getImmediate();return{logEvent:(r,s,i)=>j1(n,r,s,i)}}catch(n){throw Lt.create("interop-component-reg-failed",{reason:n})}}}RD();const jD={apiKey:"development-mode",authDomain:"development-mode",projectId:"development-mode",storageBucket:"development-mode",messagingSenderId:"development-mode",appId:"development-mode",measurementId:"development-mode"};let po=null,Le=null,lt=null,mo=null;try{po=rx(jD),Le=wE(po),lt=dj(po),mo=typeof window<"u"?AD(po):null}catch(t){console.warn("Firebase initialization error:",t)}const Pd=po,D1=j.createContext();function Qt(){return j.useContext(D1)}function DD({children:t}){const[e,n]=j.useState(null),[r,s]=j.useState(!0);async function i(m,g){if(!Le){console.warn("Firestore is not initialized (development mode)");return}try{const _=gn(Le,"users",m);await tf(_,{profileImage:g,lastUpdated:ts()}),n(k=>({...k,profileImage:g}))}catch(_){throw console.error("Error updating profile image:",_),_}}async function o(m,g,_){var k,N;if(!lt)return console.warn("Auth is not initialized (development mode)"),null;try{console.log("Starting signup process for:",m);const w=(await QP(lt,m,g)).user;if(console.log("User authentication created:",w.uid),!Le)return console.warn("Firestore is not initialized (development mode)"),w;const x=new Date(_.birthday),I=Fe.fromDate(x),D=(k=_.sleeperUsername)!=null&&k.startsWith("@")?_.sleeperUsername:`@${_.sleeperUsername}`,L=(N=_.venmoUsername)!=null&&N.startsWith("@")?_.venmoUsername:`@${_.venmoUsername}`;if(!_.username)throw new Error("Username is required");const F={firstName:_.firstName,lastName:_.lastName,email:_.email,username:_.username,venmoUsername:L,address1:_.address1||"",address2:_.address2||null,city:_.city||"",state:_.state||"",postalCode:_.postalCode||"",birthday:I,phoneNumber:_.phoneNumber,sleeperUsername:D,promoCode:_.promoCode||null,dwollaCustomerId:"",dwollaBalance:0,bonusBalance:0,id:w.uid,profileImage:null,lastUpdated:ts(),lastBalanceUpdate:ts(),createdAt:ts()};return console.log("Creating Firestore document for user:",F),await CE(gn(Le,"users",w.uid),F),console.log("Firestore document created successfully"),w}catch(P){throw console.error("Signup error:",{code:P.code,message:P.message,stack:P.stack}),P}}async function l(m,g){if(!lt||!Le)return console.warn("Auth/Firestore is not initialized (development mode)"),null;try{let _=m;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){const w=sa(Le,"users"),x=wc(w,_c("username","==",m)),I=await xc(x);if(I.empty)throw new Error("No user found with this username");_=I.docs[0].data().email}return(await YP(lt,_,g)).user}catch(_){throw console.error("Login error:",_),_}}async function c(){if(!lt){console.warn("Auth is not initialized (development mode)");return}try{await eR(lt)}catch(m){throw console.error("Error in logout:",m),m}}async function d(m){if(!lt){console.warn("Auth is not initialized (development mode)");return}try{await KP(lt,m)}catch(g){throw console.error("Error in password reset:",g),g}}j.useEffect(()=>{if(!lt){console.warn("Auth is not initialized (development mode)"),s(!1);return}return ZP(lt,async g=>{if(g&&Le)try{const _=await Ta(gn(Le,"users",g.uid));_.exists()?n({...g,..._.data()}):n(g)}catch(_){console.error("Error fetching user data:",_),n(g)}else n(null);s(!1)})},[]);const f={currentUser:e,signup:o,login:l,logout:c,resetPassword:d,updateProfileImage:i,loading:r};return u.jsx(D1.Provider,{value:f,children:!r&&t})}const Rd="https://api.sleeper.app/v1";class af{static async getUser(e){try{const n=await fetch(`${Rd}/user/${e}`);if(!n.ok)throw new Error("User not found");return await n.json()}catch(n){throw n}}static async getUserLeagues(e,n="2024",r="nfl"){try{const s=await fetch(`${Rd}/user/${e}/leagues/${r}/${n}`);if(!s.ok)throw new Error("Failed to fetch leagues");return await s.json()}catch(s){throw s}}static async getLeagueUsers(e){try{const n=await fetch(`${Rd}/league/${e}/users`);if(!n.ok)throw new Error("Failed to fetch league users");return await n.json()}catch(n){throw n}}static getAvatarUrl(e){return e?`https://sleepercdn.com/avatars/${e}`:null}static getLeagueAvatarUrl(e){return e?`https://sleepercdn.com/avatars/${e}`:null}}const O1=j.createContext(),hm=()=>{const t=j.useContext(O1);if(!t)throw new Error("useSleeperContext must be used within a SleeperProvider");return t},OD=({children:t})=>{const[e,n]=j.useState(()=>{const g=localStorage.getItem("sleeperUser");return g?JSON.parse(g):null}),[r,s]=j.useState(()=>{const g=localStorage.getItem("sleeperLeagues");return g?JSON.parse(g):[]}),[i,o]=j.useState(!1),[l,c]=j.useState("");j.useEffect(()=>{e?localStorage.setItem("sleeperUser",JSON.stringify(e)):localStorage.removeItem("sleeperUser")},[e]),j.useEffect(()=>{r.length>0?localStorage.setItem("sleeperLeagues",JSON.stringify(r)):localStorage.removeItem("sleeperLeagues")},[r]);const m={user:e,leagues:r,isLoading:i,errorMessage:l,fetchUser:async g=>{o(!0),c("");try{const _=await af.getUser(g);n(_);const k=await af.getUserLeagues(_.user_id);s(k)}catch(_){c("Failed to find Sleeper user"),console.error("Error fetching Sleeper user:",_)}finally{o(!1)}},disconnectSleeper:()=>{n(null),s([]),localStorage.removeItem("sleeperUser"),localStorage.removeItem("sleeperLeagues")}};return u.jsx(O1.Provider,{value:m,children:t})};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(t,e)=>{const n=j.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,...d},f)=>j.createElement("svg",{ref:f,...LD,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${MD(t)}`,l].join(" "),...d},[...e.map(([m,g])=>j.createElement(m,g)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=ne("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=ne("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=ne("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=ne("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=ne("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=ne("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=ne("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=ne("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=ne("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=ne("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=ne("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=ne("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=ne("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=ne("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=ne("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=ne("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=ne("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=ne("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=ne("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=ne("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ne("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=ne("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=ne("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=ne("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=ne("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=ne("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=ne("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=ne("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=ne("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=ne("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=ne("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=ne("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=ne("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ne("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=ne("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=ne("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=ne("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=ne("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=ne("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ne("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=ne("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=ne("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=ne("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),r4=()=>{const{currentUser:t,loading:e}=Qt(),{leagues:n}=hm(),r=xs(),i=[{name:"Banking",path:"/banking",icon:z1},{name:"My Leagues",path:"/leagues",icon:gm,badge:n.length>0?n.length:null},{name:"Send Money",path:"/send",icon:YD},{name:"Platforms",path:"/spend",icon:pm,badge:11},{name:"Profile",path:"/profile",icon:({className:o})=>t!=null&&t.profileImage?u.jsx("div",{className:"w-10 h-10",children:u.jsx("img",{src:t.profileImage,alt:"Profile",className:"w-full h-full rounded-full object-cover border-2 border-transparent hover:border-purple-500 transition-colors"})}):u.jsx(UD,{className:o})}];return e?u.jsx("div",{children:"Loading..."}):t?u.jsxs("div",{className:"min-h-screen bg-gray-900",children:[u.jsx("div",{className:"border-b border-purple-900",children:u.jsx("nav",{className:"max-w-7xl mx-auto px-4",children:u.jsxs("div",{className:"h-16 flex items-center justify-between",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("img",{src:"/images/BankrollLogoTransparent.png",alt:"Bankroll",className:"h-24 w-auto"})}),u.jsx("div",{className:"flex-1 max-w-2xl mx-8",children:u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:u.jsx(QD,{className:"h-5 w-5 text-gray-400"})}),u.jsx("input",{type:"text",placeholder:"Search",className:`w-full bg-gray-800 border border-purple-900/50 rounded-lg py-2 pl-10 pr-4 
                    text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 
                    focus:border-transparent`})]})}),u.jsxs("div",{className:"flex items-center space-x-1",children:[i.map(o=>{const l=r.pathname===o.path,c=o.icon;return u.jsxs(fk,{to:o.path,className:`
                      px-3 py-2 rounded-lg flex items-center space-x-2
                      transition-colors duration-200 text-sm relative
                      ${l?"bg-purple-900/50 text-white":"text-gray-400 hover:text-white hover:bg-purple-900/30"}
                      ${o.name==="Profile"?"pl-2":""}
                    `,children:[u.jsx(c,{className:o.name==="Profile"?"":"h-5 w-5"}),u.jsx("span",{className:o.name==="Profile"?"ml-2":"",children:o.name}),o.badge&&u.jsx("span",{className:"absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:o.badge})]},o.name)}),u.jsx("button",{className:"p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-900/30",children:u.jsx(lf,{className:"h-5 w-5"})})]})]})})}),u.jsx("main",{className:"max-w-7xl mx-auto px-4 py-6",children:u.jsx(tk,{})})]}):u.jsx(ek,{to:"/login",state:{from:r},replace:!0})},s4=()=>{const t=new Date().getFullYear();return u.jsx("footer",{className:"border-t border-purple-900/50 backdrop-blur-sm mt-20",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsx("img",{src:"/images/BankrollLogoTransparent.png",alt:"Bankroll",className:"h-8 w-auto"}),u.jsx("p",{className:"text-sm text-purple-200",children:"Your trusted platform for smart betting and bankroll management."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Products"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Spend Card"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Bankroll Manager"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Analytics"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Mobile App"})})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Company"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"About Us"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Careers"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Contact"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Blog"})})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Legal"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Privacy Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Terms of Service"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Responsible Gaming"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-purple-200 hover:text-white transition-colors",children:"Security"})})]})]})]}),u.jsx("div",{className:"border-t border-purple-900/50 mt-12 pt-8",children:u.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[u.jsxs("p",{className:"text-sm text-purple-200 mb-4 md:mb-0",children:["© ",t," Bankroll. All rights reserved."]}),u.jsxs("div",{className:"flex space-x-6",children:[u.jsx("a",{href:"#",className:"text-purple-200 hover:text-white transition-colors","aria-label":"Twitter",children:u.jsx(ZD,{className:"h-5 w-5"})}),u.jsx("a",{href:"#",className:"text-purple-200 hover:text-white transition-colors","aria-label":"Instagram",children:u.jsx(WD,{className:"h-5 w-5"})}),u.jsx("a",{href:"#",className:"text-purple-200 hover:text-white transition-colors","aria-label":"YouTube",children:u.jsx(n4,{className:"h-5 w-5"})}),u.jsx("a",{href:"#",className:"text-purple-200 hover:text-white transition-colors","aria-label":"Facebook",children:u.jsx(BD,{className:"h-5 w-5"})})]})]})})]})})},i4=()=>u.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-400 to-black animate-gradient",style:{animation:"gradient 15s ease infinite",backgroundSize:"400% 400%"}}),u.jsx("style",{jsx:"true",children:`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `})]}),o4=()=>{const t=Xn(),[e,n]=j.useState(!1),r=()=>{t("/signup")},s=()=>{t("/login")};return u.jsxs("div",{className:"min-h-screen text-white relative",children:[u.jsx(i4,{}),u.jsx("nav",{className:"border-b border-purple-900/50 backdrop-blur-sm sticky top-0 z-50",children:u.jsx("div",{className:"max-w-7xl mx-auto px-4",children:u.jsxs("div",{className:"flex justify-between items-center h-16",children:[u.jsxs("div",{className:"flex items-center space-x-8",children:[u.jsx("div",{className:"flex-shrink-0 cursor-pointer",onClick:()=>t("/"),children:u.jsx("img",{src:"/images/Bankroll Gradient 3.jpg",alt:"Bankroll Logo",className:"h-10 w-auto object-contain"})}),u.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[u.jsxs("div",{className:"relative",children:[u.jsxs("button",{className:"flex items-center space-x-1 hover:text-purple-400 transition-colors duration-300",onClick:()=>n(!e),children:[u.jsx("span",{children:"What We Offer"}),u.jsx(L1,{className:"h-4 w-4"})]}),e&&u.jsxs("div",{className:"absolute top-full left-0 mt-2 w-48 bg-purple-900/90 backdrop-blur-sm rounded-lg shadow-lg py-1 border border-purple-700",children:[u.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-purple-800/50 transition-colors duration-300",children:"Feature 1"}),u.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-purple-800/50 transition-colors duration-300",children:"Feature 2"}),u.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-purple-800/50 transition-colors duration-300",children:"Feature 3"})]})]}),u.jsx("a",{href:"#",className:"hover:text-purple-400 transition-colors duration-300",children:"Spend Card"}),u.jsx("a",{href:"#",className:"hover:text-purple-400 transition-colors duration-300",children:"Invest"}),u.jsx("a",{href:"#",className:"hover:text-purple-400 transition-colors duration-300",children:"Bankroll Manager"}),u.jsx("a",{href:"#",className:"hover:text-purple-400 transition-colors duration-300",children:"Learn"}),u.jsx("a",{href:"#",className:"hover:text-purple-400 transition-colors duration-300",children:"Support"})]})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("button",{className:"px-4 py-2 text-white hover:text-purple-400 transition-colors duration-300",onClick:s,children:"Log in"}),u.jsx("button",{className:"px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25",onClick:r,children:"Sign up"})]})]})})}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 py-32 relative z-10",children:u.jsxs("div",{className:"text-center",children:[u.jsx("img",{src:"/images/Bankroll Gradient 3.jpg",alt:"Bankroll Logo",className:"h-96 w-auto object-contain mx-auto mb-8"}),u.jsx("h1",{className:"text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent",children:"Your new betting wallet"}),u.jsx("p",{className:"text-2xl text-purple-300 mb-12",children:"Coming August 2024"}),u.jsx("button",{className:"px-8 py-4 bg-green-500 text-white rounded-full text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25",onClick:r,children:"Get Started"})]})}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 py-20 relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 transform hover:scale-105 border border-purple-700/50",children:[u.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Smart Spending"}),u.jsx("p",{className:"text-purple-200",children:"Track your spending and earn rewards on every transaction"})]}),u.jsxs("div",{className:"bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 transform hover:scale-105 border border-purple-700/50",children:[u.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Intelligent Investing"}),u.jsx("p",{className:"text-purple-200",children:"Make informed decisions with our advanced analytics"})]}),u.jsxs("div",{className:"bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl hover:bg-purple-800/40 transition-all duration-300 transform hover:scale-105 border border-purple-700/50",children:[u.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Bankroll Management"}),u.jsx("p",{className:"text-purple-200",children:"Keep your finances in check with our powerful tools"})]})]})}),u.jsx(s4,{})]})},B1=()=>u.jsxs("div",{className:"fixed inset-0 w-full h-full -z-10",children:[u.jsx("div",{className:"absolute inset-0 w-full h-full bg-[size:150%_150%] animate-gradient bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 opacity-90",style:{transform:"translateZ(0)"}}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-blue-900/10",style:{transform:"translateZ(0)"}}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/50",style:{transform:"translateZ(0)"}})]}),a4=()=>{const t=Xn(),{signup:e}=Qt(),[n,r]=j.useState(1),[s,i]=j.useState(!1),[o,l]=j.useState(!1),[c,d]=j.useState(!1),[f,m]=j.useState({email:"",firstName:"",lastName:"",password:"",confirmPassword:"",username:"",birthday:"",phoneNumber:"",venmoUsername:"",sleeperUsername:"",referrer:"",acceptTerms:!1,acceptDwolla:!1}),[g,_]=j.useState(""),[k,N]=j.useState({}),P=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,w=/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,x=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,I=(K,B)=>{switch(K){case"email":if(!P.test(B))return"Please enter a valid email address";break;case"firstName":if(B.trim().length<2)return"First name must be at least 2 characters";break;case"lastName":if(B.trim().length<2)return"Last name must be at least 2 characters";break;case"password":if(!w.test(B))return"Password must be at least 8 characters and contain one uppercase letter, one number, and one special character";break;case"confirmPassword":if(B!==f.password)return"Passwords do not match";break;case"username":if(!B)return"Username is required";if(B.length<3)return"Username must be at least 3 characters long";if(!/^[a-zA-Z0-9_]+$/.test(B))return"Username can only contain letters, numbers, and underscores";if(B.length>30)return"Username must be less than 30 characters";break;case"sleeperUsername":if(B&&B.length>0){if(!B.startsWith("@"))return"Sleeper username must start with @";if(B.length<2)return"Please enter a valid Sleeper username";if(B.length>30)return"Sleeper username must be less than 30 characters";if(!/^@[a-zA-Z0-9_]+$/.test(B))return"Sleeper username can only contain letters, numbers, and underscores after the @"}break;case"birthday":{const U=new Date(B),G=new Date;let J=G.getFullYear()-U.getFullYear();const re=G.getMonth()-U.getMonth();if((re<0||re===0&&G.getDate()<U.getDate())&&J--,J<18)return"You must be at least 18 years old";if(J>100)return"Please enter a valid birth date";break}case"phoneNumber":if(!x.test(B))return"Please enter a valid phone number (e.g., 123-456-7890)";break;case"venmoUsername":if(!B)return"Venmo username is required";if(!B.startsWith("@"))return"Venmo username must start with @";if(B.length<2)return"Please enter a valid Venmo username";if(B.length>30)return"Venmo username must be less than 30 characters";if(!/^@[a-zA-Z0-9_]+$/.test(B))return"Venmo username can only contain letters, numbers, and underscores after the @";break}return""},D=K=>{const{name:B,value:U,type:G,checked:J}=K.target,re=G==="checkbox"?J:U;if(m(ae=>({...ae,[B]:re})),k[B]&&N(ae=>({...ae,[B]:""})),B==="password"&&f.confirmPassword){const ae=f.confirmPassword!==U?"Passwords do not match":"";N(be=>({...be,confirmPassword:ae}))}},L=K=>{const B=K.replace(/\D/g,"");return B.length<=3?B:B.length<=6?`${B.slice(0,3)}-${B.slice(3)}`:`${B.slice(0,3)}-${B.slice(3,6)}-${B.slice(6,10)}`},F=K=>{const B=L(K.target.value);m(U=>({...U,phoneNumber:B}))},E=()=>{const K={};return["email","firstName","lastName","password","confirmPassword"].forEach(B=>{const U=I(B,f[B]);U&&(K[B]=U)}),N(K),Object.keys(K).length===0},v=()=>{const K={};if(["username","birthday","phoneNumber","venmoUsername"].forEach(B=>{const U=I(B,f[B]);U&&(K[B]=U)}),f.sleeperUsername){const B=I("sleeperUsername",f.sleeperUsername);B&&(K.sleeperUsername=B)}return f.acceptTerms||(K.acceptTerms="You must accept the terms and conditions"),f.acceptDwolla||(K.acceptDwolla="You must accept being a Dwolla user"),N(K),Object.keys(K).length===0},T=K=>{K.preventDefault(),_(""),E()&&(m(B=>({...B,username:"",birthday:"",phoneNumber:"",venmoUsername:"",sleeperUsername:"",referrer:"",acceptTerms:!1,acceptDwolla:!1})),r(2))},b=()=>{_(""),m(K=>({...K,username:"",birthday:"",phoneNumber:"",venmoUsername:"",sleeperUsername:"",referrer:"",acceptTerms:!1,acceptDwolla:!1})),r(1)},A=async K=>{if(K.preventDefault(),_(""),v()){i(!0);try{const U=`/images/profile_${Math.floor(Math.random()*30)+1}.png`,G={...f,profileImage:U};await e(f.email,f.password,G),t("/platforms")}catch(B){switch(console.error("Error during sign up:",B),B.code){case"auth/email-already-in-use":_("This email is already registered. Please use a different email or try logging in.");break;case"auth/invalid-email":_("Invalid email address format.");break;case"auth/operation-not-allowed":_("Email/password accounts are not enabled. Please contact support.");break;case"auth/weak-password":_("Please choose a stronger password. It should be at least 6 characters long.");break;default:_("An error occurred during sign up. Please try again.")}}finally{i(!1)}}},C="w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white",S="block text-sm font-medium text-purple-200 mb-2",ve="text-red-500 text-sm mt-1",H=(K,B,U="text",G=!0)=>{if(K==="password"||K==="confirmPassword"){const J=K==="password",re=J?o:c,ae=()=>{J?l(!o):d(!c)};return u.jsxs("div",{children:[u.jsxs("label",{htmlFor:K,className:S,children:[B,G&&"*"]}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:re?"text":"password",id:K,name:K,value:f[K],onChange:D,required:G,className:`${C} ${k[K]?"border-red-500":""}`}),u.jsx("button",{type:"button",onClick:ae,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-200 hover:text-green-400 focus:outline-none",children:re?u.jsx(F1,{className:"h-5 w-5"}):u.jsx(U1,{className:"h-5 w-5"})})]}),k[K]&&u.jsx("div",{className:ve,children:k[K]})]})}return u.jsxs("div",{children:[u.jsxs("label",{htmlFor:K,className:S,children:[B,G&&"*"]}),u.jsx("input",{type:U,id:K,name:K,value:f[K],onChange:K==="phoneNumber"?F:D,required:G,className:`${C} ${k[K]?"border-red-500":""}`}),k[K]&&u.jsx("div",{className:ve,children:k[K]})]})};return u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-start pt-8 text-white relative",children:[u.jsx(B1,{}),u.jsx("div",{className:"w-full max-w-md px-4 mb-8",children:u.jsx("img",{src:"/images/Bankroll Gradient 3.jpg",alt:"Bankroll",className:"h-20 w-auto mx-auto"})}),u.jsx("div",{className:"w-full max-w-md px-4",children:u.jsxs("div",{className:"backdrop-blur-md bg-gray-900/40 p-8 rounded-xl border border-purple-500/20 shadow-xl",children:[u.jsxs("div",{className:"flex items-center justify-between mb-8",children:[n>1&&u.jsxs("button",{onClick:b,className:"flex items-center text-purple-200 hover:text-green-400 transition-colors",children:[u.jsx(vu,{className:"h-5 w-5"}),u.jsx("span",{children:"Back"})]}),u.jsxs("h2",{className:"text-2xl font-bold text-center flex-grow",children:["Create your account ",n>1?"(2/2)":"(1/2)"]})]}),u.jsxs("form",{onSubmit:n===1?T:A,className:"space-y-6",children:[n===1?u.jsxs(u.Fragment,{children:[H("email","Email address","email"),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[H("firstName","First Name"),H("lastName","Last Name")]}),H("password","Password","password"),H("confirmPassword","Confirm Password","password")]}):u.jsxs(u.Fragment,{children:[H("username","Username"),H("birthday","Birthday (MM/DD/YYYY)","date"),H("phoneNumber","Phone Number","tel"),H("venmoUsername","Venmo Username"),H("sleeperUsername","Sleeper Username (Optional)","text",!1),H("referrer","Who referred you? (Optional)","text",!1),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{type:"checkbox",id:"acceptTerms",name:"acceptTerms",checked:f.acceptTerms,onChange:D,required:!0,className:"h-4 w-4 rounded border-purple-500/20 text-green-500 focus:ring-green-500"}),u.jsx("label",{htmlFor:"acceptTerms",className:"ml-2 text-sm text-purple-200",children:"I accept the Privacy Policy and Terms of Service*"})]}),k.acceptTerms&&u.jsx("div",{className:ve,children:k.acceptTerms}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{type:"checkbox",id:"acceptDwolla",name:"acceptDwolla",checked:f.acceptDwolla,onChange:D,required:!0,className:"h-4 w-4 rounded border-purple-500/20 text-green-500 focus:ring-green-500"}),u.jsx("label",{htmlFor:"acceptDwolla",className:"ml-2 text-sm text-purple-200",children:"I accept being a Dwolla user*"})]}),k.acceptDwolla&&u.jsx("div",{className:ve,children:k.acceptDwolla})]})]}),g&&u.jsx("div",{className:"text-red-500 text-sm text-center font-medium",children:g}),u.jsx("button",{type:"submit",disabled:s,className:`w-full px-6 py-3 bg-green-500 text-white rounded-lg 
                transition-all duration-200 transform hover:scale-105 font-medium 
                shadow-lg hover:shadow-green-500/25
                ${s?"opacity-50 cursor-not-allowed":"hover:bg-green-600"}
                ${g?"mt-6":"mt-4"}`,children:s?u.jsxs("div",{className:"flex items-center justify-center",children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Creating Account..."]}):n===1?"Next":"Complete Sign Up"})]}),u.jsx("div",{className:"mt-6 text-center",children:u.jsx("button",{onClick:()=>t("/"),className:"text-purple-200 hover:text-green-400 transition-colors duration-200",children:"Back to home"})})]})})]})},l4=()=>{var k,N;const t=Xn(),e=xs(),{login:n}=Qt(),[r,s]=j.useState(!1),[i,o]=j.useState(""),[l,c]=j.useState(!1),[d,f]=j.useState({emailOrUsername:"",password:""}),m=((N=(k=e.state)==null?void 0:k.from)==null?void 0:N.pathname)||"/banking",g=P=>{const{name:w,value:x}=P.target;f(I=>({...I,[w]:x})),i&&o("")},_=async P=>{P.preventDefault(),o(""),s(!0);try{await n(d.emailOrUsername,d.password),t(m,{replace:!0})}catch(w){console.error("Login error:",w),o(w.code==="auth/invalid-credential"?"Invalid email/username or password":"Failed to log in. Please try again.")}finally{s(!1)}};return u.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-start pt-8 text-white relative",children:[u.jsx(B1,{}),u.jsx("div",{className:"w-full max-w-md px-4 mb-8",children:u.jsx("img",{src:"/images/Bankroll Gradient 3.jpg",alt:"Bankroll",className:"h-20 w-auto mx-auto"})}),u.jsx("div",{className:"w-full max-w-md px-4",children:u.jsxs("div",{className:"backdrop-blur-md bg-gray-900/40 p-8 rounded-xl border border-purple-500/20 shadow-xl",children:[u.jsx("h2",{className:"text-2xl font-bold text-center mb-8",children:"Welcome back"}),u.jsxs("form",{onSubmit:_,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"emailOrUsername",className:"block text-sm font-medium text-purple-200 mb-2",children:"Email or Username"}),u.jsx("input",{type:"text",id:"emailOrUsername",name:"emailOrUsername",value:d.emailOrUsername,onChange:g,required:!0,className:`w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
                  text-white placeholder-gray-400`,placeholder:"Enter your email or username"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-purple-200 mb-2",children:"Password"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:l?"text":"password",id:"password",name:"password",value:d.password,onChange:g,required:!0,className:`w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
                    text-white placeholder-gray-400`,placeholder:"Enter your password"}),u.jsx("button",{type:"button",onClick:()=>c(!l),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-200 hover:text-green-400 focus:outline-none",children:l?u.jsx(F1,{className:"h-5 w-5"}):u.jsx(U1,{className:"h-5 w-5"})})]})]}),i&&u.jsx("div",{className:"p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center font-medium",children:i}),u.jsx("button",{type:"submit",disabled:r,className:`w-full px-6 py-3 bg-green-500 text-white rounded-lg 
                transition-all duration-200 transform hover:scale-105 font-medium 
                shadow-lg hover:shadow-green-500/25
                ${r?"opacity-50 cursor-not-allowed":"hover:bg-green-600"}
                ${i?"mt-6":"mt-4"}`,children:r?u.jsxs("div",{className:"flex items-center justify-center",children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Logging in..."]}):"Log In"}),u.jsx("p",{className:"text-sm text-gray-400 text-center mt-4",children:'By clicking "Log In", you agree to receive SMS text messages to verify your identity'}),u.jsxs("div",{className:"mt-6 space-y-3",children:[u.jsx("div",{className:"text-center",children:u.jsx("button",{type:"button",onClick:()=>t("/forgot-email"),className:"text-purple-200 hover:text-green-400 transition-colors text-sm underline",children:"Forgot your email or username?"})}),u.jsx("div",{className:"text-center",children:u.jsx("button",{type:"button",onClick:()=>t("/reset-password"),className:"text-purple-200 hover:text-green-400 transition-colors text-sm underline",children:"Forgot your password?"})})]}),u.jsx("div",{className:"mt-6 text-center",children:u.jsxs("p",{className:"text-purple-200",children:["Need to create an account?"," ",u.jsx("button",{type:"button",onClick:()=>t("/signup"),className:"text-green-400 hover:text-green-300 transition-colors underline",children:"Sign up!"})]})}),u.jsxs("div",{className:"mt-8 text-xs text-gray-400 space-y-4",children:[u.jsx("p",{children:"© 2024 Bankroll. All Rights Reserved."}),u.jsx("p",{children:"Banking Services provided by The Dwolla Bank, N.A., Member FDIC. The Bankroll Debit Card is issued by The Dwolla Bank, N.A. pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted. Please see back of your Card for its issuing bank."})]})]}),u.jsx("div",{className:"mt-6 text-center",children:u.jsxs("button",{type:"button",onClick:()=>t("/"),className:`text-purple-200 hover:text-green-400 transition-colors duration-200 
                flex items-center justify-center gap-2 mx-auto`,children:[u.jsx(vu,{className:"h-4 w-4"}),u.jsx("span",{children:"Back to home"})]})})]})})]})};function q1(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=q1(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function c4(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=q1(t))&&(r&&(r+=" "),r+=e);return r}const vm="-",u4=t=>{const e=h4(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split(vm);return l[0]===""&&l.length!==1&&l.shift(),W1(l,e)||d4(o)},getConflictingClassGroupIds:(o,l)=>{const c=n[o]||[];return l&&r[o]?[...c,...r[o]]:c}}},W1=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?W1(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(vm);return(o=e.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},fv=/^\[(.+)\]$/,d4=t=>{if(fv.test(t)){const e=fv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},h4=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return p4(Object.entries(t.classGroups),n).forEach(([i,o])=>{uf(o,r,i,e)}),r},uf=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:pv(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(f4(s)){uf(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{uf(o,pv(e,i),n,r)})})},pv=(t,e)=>{let n=t;return e.split(vm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},f4=t=>t.isThemeGetter,p4=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[n,s]}):t,m4=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},H1="!",g4=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=l=>{const c=[];let d=0,f=0,m;for(let P=0;P<l.length;P++){let w=l[P];if(d===0){if(w===s&&(r||l.slice(P,P+i)===e)){c.push(l.slice(f,P)),f=P+i;continue}if(w==="/"){m=P;continue}}w==="["?d++:w==="]"&&d--}const g=c.length===0?l:l.substring(f),_=g.startsWith(H1),k=_?g.substring(1):g,N=m&&m>f?m-f:void 0;return{modifiers:c,hasImportantModifier:_,baseClassName:k,maybePostfixModifierPosition:N}};return n?l=>n({className:l,parseClassName:o}):o},y4=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},v4=t=>({cache:m4(t.cacheSize),parseClassName:g4(t),...u4(t)}),w4=/\s+/,_4=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split(w4);let l="";for(let c=o.length-1;c>=0;c-=1){const d=o[c],{modifiers:f,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:_}=n(d);let k=!!_,N=r(k?g.substring(0,_):g);if(!N){if(!k){l=d+(l.length>0?" "+l:l);continue}if(N=r(g),!N){l=d+(l.length>0?" "+l:l);continue}k=!1}const P=y4(f).join(":"),w=m?P+H1:P,x=w+N;if(i.includes(x))continue;i.push(x);const I=s(N,k);for(let D=0;D<I.length;++D){const L=I[D];i.push(w+L)}l=d+(l.length>0?" "+l:l)}return l};function x4(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=G1(e))&&(r&&(r+=" "),r+=n);return r}const G1=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=G1(t[r]))&&(n&&(n+=" "),n+=e);return n};function E4(t,...e){let n,r,s,i=o;function o(c){const d=e.reduce((f,m)=>m(f),t());return n=v4(d),r=n.cache.get,s=n.cache.set,i=l,l(c)}function l(c){const d=r(c);if(d)return d;const f=_4(c,n);return s(c,f),f}return function(){return i(x4.apply(null,arguments))}}const _e=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},K1=/^\[(?:([a-z-]+):)?(.+)\]$/i,T4=/^\d+\/\d+$/,I4=new Set(["px","full","screen"]),b4=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,S4=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,k4=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,N4=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,A4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Nn=t=>ri(t)||I4.has(t)||T4.test(t),ar=t=>Pi(t,"length",M4),ri=t=>!!t&&!Number.isNaN(Number(t)),Dd=t=>Pi(t,"number",ri),to=t=>!!t&&Number.isInteger(Number(t)),C4=t=>t.endsWith("%")&&ri(t.slice(0,-1)),se=t=>K1.test(t),lr=t=>b4.test(t),P4=new Set(["length","size","percentage"]),R4=t=>Pi(t,P4,Q1),j4=t=>Pi(t,"position",Q1),D4=new Set(["image","url"]),O4=t=>Pi(t,D4,F4),L4=t=>Pi(t,"",V4),no=()=>!0,Pi=(t,e,n)=>{const r=K1.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},M4=t=>S4.test(t)&&!k4.test(t),Q1=()=>!1,V4=t=>N4.test(t),F4=t=>A4.test(t),U4=()=>{const t=_e("colors"),e=_e("spacing"),n=_e("blur"),r=_e("brightness"),s=_e("borderColor"),i=_e("borderRadius"),o=_e("borderSpacing"),l=_e("borderWidth"),c=_e("contrast"),d=_e("grayscale"),f=_e("hueRotate"),m=_e("invert"),g=_e("gap"),_=_e("gradientColorStops"),k=_e("gradientColorStopPositions"),N=_e("inset"),P=_e("margin"),w=_e("opacity"),x=_e("padding"),I=_e("saturate"),D=_e("scale"),L=_e("sepia"),F=_e("skew"),E=_e("space"),v=_e("translate"),T=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],A=()=>["auto",se,e],C=()=>[se,e],S=()=>["",Nn,ar],ve=()=>["auto",ri,se],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",se],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[ri,se];return{cacheSize:500,separator:":",theme:{colors:[no],spacing:[Nn,ar],blur:["none","",lr,se],brightness:re(),borderColor:[t],borderRadius:["none","","full",lr,se],borderSpacing:C(),borderWidth:S(),contrast:re(),grayscale:G(),hueRotate:re(),invert:G(),gap:C(),gradientColorStops:[t],gradientColorStopPositions:[C4,ar],inset:A(),margin:A(),opacity:re(),padding:C(),saturate:re(),scale:re(),sepia:G(),skew:re(),space:C(),translate:C()},classGroups:{aspect:[{aspect:["auto","square","video",se]}],container:["container"],columns:[{columns:[lr]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),se]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[N]}],"inset-x":[{"inset-x":[N]}],"inset-y":[{"inset-y":[N]}],start:[{start:[N]}],end:[{end:[N]}],top:[{top:[N]}],right:[{right:[N]}],bottom:[{bottom:[N]}],left:[{left:[N]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",to,se]}],basis:[{basis:A()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",se]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",to,se]}],"grid-cols":[{"grid-cols":[no]}],"col-start-end":[{col:["auto",{span:["full",to,se]},se]}],"col-start":[{"col-start":ve()}],"col-end":[{"col-end":ve()}],"grid-rows":[{"grid-rows":[no]}],"row-start-end":[{row:["auto",{span:[to,se]},se]}],"row-start":[{"row-start":ve()}],"row-end":[{"row-end":ve()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",se]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",se]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",se,e]}],"min-w":[{"min-w":[se,e,"min","max","fit"]}],"max-w":[{"max-w":[se,e,"none","full","min","max","fit","prose",{screen:[lr]},lr]}],h:[{h:[se,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[se,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[se,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[se,e,"auto","min","max","fit"]}],"font-size":[{text:["base",lr,ar]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Dd]}],"font-family":[{font:[no]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",se]}],"line-clamp":[{"line-clamp":["none",ri,Dd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Nn,se]}],"list-image":[{"list-image":["none",se]}],"list-style-type":[{list:["none","disc","decimal",se]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Nn,ar]}],"underline-offset":[{"underline-offset":["auto",Nn,se]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",se]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",se]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),j4]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",R4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},O4]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:K()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[Nn,se]}],"outline-w":[{outline:[Nn,ar]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:S()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[Nn,ar]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",lr,L4]}],"shadow-color":[{shadow:[no]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...B(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":B()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",lr,se]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[m]}],saturate:[{saturate:[I]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[I]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",se]}],duration:[{duration:re()}],ease:[{ease:["linear","in","out","in-out",se]}],delay:[{delay:re()}],animate:[{animate:["none","spin","ping","pulse","bounce",se]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[to,se]}],"translate-x":[{"translate-x":[v]}],"translate-y":[{"translate-y":[v]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",se]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",se]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",se]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Nn,ar,Dd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},$4=E4(U4);function Ri(...t){return $4(c4(t))}const qe=j.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Ri("rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",t),...e}));qe.displayName="Card";const Rn=j.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Ri("flex flex-col space-y-1.5 p-6",t),...e}));Rn.displayName="CardHeader";const jn=j.forwardRef(({className:t,...e},n)=>u.jsx("h3",{ref:n,className:Ri("text-2xl font-semibold leading-none tracking-tight",t),...e}));jn.displayName="CardTitle";const z4=j.forwardRef(({className:t,...e},n)=>u.jsx("p",{ref:n,className:Ri("text-sm text-gray-500 dark:text-gray-400",t),...e}));z4.displayName="CardDescription";const Ye=j.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Ri("p-6 pt-0",t),...e}));Ye.displayName="CardContent";const B4=j.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Ri("flex items-center p-6 pt-0",t),...e}));B4.displayName="CardFooter";function q4(){const{currentUser:t}=Qt(),[e,n]=j.useState(null),[r,s]=j.useState(!0),[i,o]=j.useState(null),[l,c]=j.useState(null),d=async()=>{var f;if(!(t!=null&&t.uid)){o("No user found"),s(!1);return}s(!0),o(null);try{const m=gn(Le,"users",t.uid),g=await Ta(m);if(g.exists()){const _=g.data();n(_.dwollaBalance||0),c(((f=_.lastBalanceUpdate)==null?void 0:f.toDate())||new Date)}else o("User data not found")}catch(m){console.error("Error fetching balance:",m),o("Failed to fetch balance")}finally{s(!1)}};return j.useEffect(()=>{d()},[t==null?void 0:t.uid]),t!=null&&t.uid?u.jsxs(qe,{className:"bg-gray-900/40 border-purple-500/20",children:[u.jsxs(Rn,{className:"flex flex-row items-center justify-between pb-2",children:[u.jsx(jn,{className:"text-white font-medium",children:"Bankroll Balance"}),u.jsx("button",{onClick:d,disabled:r,className:"p-2 hover:bg-purple-900/30 rounded-full transition-colors","aria-label":"Refresh balance",children:u.jsx(KD,{className:`h-4 w-4 text-purple-200 ${r?"animate-spin":""}`})})]}),u.jsx(Ye,{children:u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("div",{className:"p-2 bg-green-500/20 rounded-lg",children:u.jsx(Na,{className:"h-5 w-5 text-green-500"})}),u.jsxs("div",{children:[r?u.jsx("div",{className:"text-2xl font-bold text-white animate-pulse",children:"Loading..."}):i?u.jsx("div",{className:"text-sm text-red-400",children:i}):u.jsxs("div",{className:"text-2xl font-bold text-white",children:["$",(e||0).toFixed(2)]}),l&&!i&&u.jsxs("div",{className:"text-xs text-gray-400",children:["Last updated: ",l.toLocaleTimeString()]})]})]})})]}):null}class W4{constructor(){this.baseURL="https://api-sandbox.dwolla.com",this.tokenURL=`${this.baseURL}/token`,this.apiKey=void 0,this.apiSecret=void 0,this.accessToken=null,this.tokenExpirationDate=null}async authenticate(){try{if(this.accessToken&&this.tokenExpirationDate>new Date(Date.now()+6e4)){console.log("Using existing token, expires at:",this.tokenExpirationDate);return}console.log("Requesting new access token...");const e=`${this.apiKey}:${this.apiSecret}`,n=btoa(e),r=await fetch(this.tokenURL,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${n}`},body:"grant_type=client_credentials"});if(!r.ok)throw new Error(`Authentication failed: ${r.statusText}`);const s=await r.json();this.accessToken=s.access_token,this.tokenExpirationDate=new Date(Date.now()+s.expires_in*1e3),console.log("New token obtained, expires in:",s.expires_in,"seconds")}catch(e){throw console.error("Authentication error:",e),e}}async createDwollaCustomer(e){try{if(await this.authenticate(),!this.accessToken)throw new Error("No access token available");const n=new Date(e.birthday).toISOString().split("T")[0],r={firstName:e.firstName,lastName:e.lastName,email:e.email,type:"personal",dateOfBirth:n,address1:e.address1,city:e.city,state:e.state,postalCode:e.postalCode,ssn:e.ssn},s=await fetch(`${this.baseURL}/customers`,{method:"POST",headers:{Accept:"application/vnd.dwolla.v1.hal+json","Content-Type":"application/json",Authorization:`Bearer ${this.accessToken}`},body:JSON.stringify(r)});if(!s.ok){const l=await s.json();throw new Error(l.message||"Failed to create Dwolla customer")}const o=s.headers.get("Location").split("/").pop();return Le&&await this.storeDwollaCustomerId(e.id,o),o}catch(n){throw console.error("Error creating Dwolla customer:",n),n}}async storeDwollaCustomerId(e,n){if(!Le){console.warn("Skipping Dwolla customer ID storage in development mode");return}try{const r=gn(Le,"users",e);await tf(r,{dwollaCustomerId:n,dwollaVerificationStatus:"pending",dwollaBalance:0,bonusBalance:0,lastBalanceUpdate:ts(),lastUpdated:ts()})}catch(r){throw console.error("Error storing Dwolla customer ID:",r),r}}async fetchBalance(e){try{if(await this.authenticate(),!this.accessToken)throw new Error("No access token available");const n=await fetch(`${this.baseURL}/customers/${e}/funding-sources`,{headers:{Accept:"application/vnd.dwolla.v1.hal+json",Authorization:`Bearer ${this.accessToken}`}});if(!n.ok)throw new Error("Failed to fetch funding sources");const s=(await n.json())._embedded["funding-sources"].find(l=>l.type==="balance");if(!s)throw new Error("No balance account found");const i=await fetch(`${this.baseURL}/funding-sources/${s.id}/balance`,{headers:{Accept:"application/vnd.dwolla.v1.hal+json",Authorization:`Bearer ${this.accessToken}`}});if(!i.ok)throw new Error("Failed to fetch balance");const o=await i.json();return parseFloat(o.balance.value)}catch(n){throw console.error("Error fetching balance:",n),n}}async getUserByDwollaId(e){if(!Le)return null;try{const n=sa(Le,"users"),r=wc(n,_c("dwollaCustomerId","==",e)),s=await xc(r);return s.empty?null:s.docs[0].data()}catch(n){return console.error("Error getting user by Dwolla ID:",n),null}}async updateUserBalance(e,n){if(!Le){console.warn("Skipping balance update in development mode");return}try{const r=gn(Le,"users",e),s=await Ta(r);if(!s.exists())throw new Error("User document not found");s.data().dwollaBalance!==n&&await tf(r,{dwollaBalance:n,lastBalanceUpdate:ts()})}catch(r){throw console.error("Error updating user balance:",r),r}}async listFundingSources(e){try{if(await this.authenticate(),!this.accessToken)throw new Error("No access token available");const n=await fetch(`${this.baseURL}/customers/${e}/funding-sources`,{headers:{Accept:"application/vnd.dwolla.v1.hal+json",Authorization:`Bearer ${this.accessToken}`}});if(!n.ok)throw new Error("Failed to fetch funding sources");return(await n.json())._embedded["funding-sources"]}catch(n){throw console.error("Error listing funding sources:",n),n}}}const H4=new W4;function G4(){const{currentUser:t}=Qt(),[e,n]=j.useState(!1),[r,s]=j.useState(null),[i,o]=j.useState({firstName:"",lastName:"",email:(t==null?void 0:t.email)||"",birthday:"",ssn:"",address1:"",city:"",state:"",postalCode:""}),l=async d=>{d.preventDefault(),n(!0),s(null);try{await H4.createDwollaCustomer({...i,id:t.uid}),window.location.reload()}catch(f){console.error("Error creating Dwolla customer:",f),s(f.message||"Failed to create Dwolla account")}finally{n(!1)}},c=d=>{o(f=>({...f,[d.target.name]:d.target.value}))};return t!=null&&t.dwollaCustomerId?null:u.jsxs(qe,{className:"bg-gray-900/40 border-purple-500/20",children:[u.jsx(Rn,{children:u.jsx(jn,{className:"text-white",children:"Setup Dwolla Account"})}),u.jsx(Ye,{children:u.jsxs("form",{onSubmit:l,className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"First Name"}),u.jsx("input",{type:"text",name:"firstName",value:i.firstName,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Last Name"}),u.jsx("input",{type:"text",name:"lastName",value:i.lastName,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Email"}),u.jsx("input",{type:"email",name:"email",value:i.email,onChange:c,required:!0,disabled:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white opacity-50"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Date of Birth"}),u.jsx("input",{type:"date",name:"birthday",value:i.birthday,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"SSN"}),u.jsx("input",{type:"password",name:"ssn",value:i.ssn,onChange:c,required:!0,placeholder:"123-45-6789",className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Street Address"}),u.jsx("input",{type:"text",name:"address1",value:i.address1,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"City"}),u.jsx("input",{type:"text",name:"city",value:i.city,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"State"}),u.jsx("input",{type:"text",name:"state",value:i.state,onChange:c,required:!0,maxLength:"2",placeholder:"CA",className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"ZIP Code"}),u.jsx("input",{type:"text",name:"postalCode",value:i.postalCode,onChange:c,required:!0,placeholder:"12345",className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]})]}),r&&u.jsx("div",{className:"text-red-400 text-sm",children:r}),u.jsx("button",{type:"submit",disabled:e,className:`w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg 
              transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,children:e?"Setting up...":"Setup Account"})]})})]})}const K4={ValidationError:"Please check your information and try again.",NotFound:"The requested resource was not found.",Forbidden:"You do not have permission to perform this action.",InvalidCredentials:"Invalid credentials provided.",InvalidResourceState:"The resource is in an invalid state for this operation.",DuplicateResource:"This resource already exists.",InvalidFormat:"The provided information format is invalid.",InvalidScope:"The requested scope is invalid or unavailable.",ServerError:"An unexpected error occurred. Please try again later.",ServiceUnavailable:"The service is temporarily unavailable. Please try again later.",TooManyRequests:"Too many requests. Please wait a moment and try again.",InvalidSSN:"The provided SSN appears to be invalid.",InvalidDateOfBirth:"The provided date of birth appears to be invalid.",InvalidAddress:"The provided address could not be verified.",InvalidName:"The provided name appears to be invalid.",DocumentRequired:"Additional documentation is required for verification.",InsufficientFunds:"Insufficient funds available for this transaction.",TransferFailed:"The transfer could not be completed. Please try again.",InvalidAmount:"The specified amount is invalid.",ExceedsLimit:"This transaction exceeds the allowed limit.",AccountSuspended:"Your account has been suspended. Please contact support.",AccountDeactivated:"Your account has been deactivated.",VerificationRequired:"Account verification is required to perform this action.",getErrorMessage:function(t){if(this[t.code])return this[t.code];const e=t.message.toLowerCase();return e.includes("ssn")?this.InvalidSSN:e.includes("date of birth")?this.InvalidDateOfBirth:e.includes("address")?this.InvalidAddress:e.includes("funds")?this.InsufficientFunds:e.includes("verification")?this.VerificationRequired:"An error occurred. Please try again or contact support if the problem persists."}};function Y1({onClose:t}){const{currentUser:e}=Qt(),[n,r]=j.useState(""),[s,i]=j.useState(!1),[o,l]=j.useState(null),[c,d]=j.useState([]),[f,m]=j.useState(""),[g,_]=j.useState("ach"),k=async w=>{w.preventDefault(),i(!0),l(null);try{if(!(e!=null&&e.dwollaCustomerId))throw new Error("No Dwolla account found");const x=parseFloat(n);if(isNaN(x)||x<=0)throw new Error("Please enter a valid amount");await new Promise(I=>setTimeout(I,1e3)),t()}catch(x){console.error("Deposit error:",x),l(K4.getErrorMessage(x))}finally{i(!1)}},N=w=>{const x=w.target.value;(x===""||/^\d*\.?\d{0,2}$/.test(x))&&r(x)},P=[10,25,50,100,250,500];return u.jsxs(qe,{className:"bg-gray-900/40 border-purple-500/20",children:[u.jsx(Rn,{children:u.jsx(jn,{className:"text-white",children:"Deposit Funds"})}),u.jsx(Ye,{children:u.jsxs("form",{onSubmit:k,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Amount"}),u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:u.jsx(Na,{className:"h-5 w-5 text-gray-400"})}),u.jsx("input",{type:"text",value:n,onChange:N,placeholder:"0.00",className:`block w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 border-gray-700 
                  text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Deposit Method"}),u.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[u.jsxs("button",{type:"button",onClick:()=>_("ach"),className:`p-3 rounded-lg border flex flex-col items-center justify-center space-y-2 transition-colors
                  ${g==="ach"?"bg-purple-900/40 border-purple-500":"bg-gray-800 border-gray-700 hover:bg-gray-700"}`,children:[u.jsx(VD,{className:"h-6 w-6 text-white"}),u.jsx("span",{className:"text-sm text-white",children:"ACH"})]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{type:"button",disabled:!0,className:`w-full p-3 rounded-lg border border-gray-700 bg-gray-800/50 
                    flex flex-col items-center justify-center space-y-2 opacity-50 cursor-not-allowed`,children:[u.jsx("img",{src:"/images/venmo icon.png",alt:"Venmo",className:"h-6 w-6"}),u.jsx("span",{className:"text-sm text-white",children:"Venmo"})]}),u.jsx("span",{className:"absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-400",children:"Coming Soon"})]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{type:"button",disabled:!0,className:`w-full p-3 rounded-lg border border-gray-700 bg-gray-800/50 
                    flex flex-col items-center justify-center space-y-2 opacity-50 cursor-not-allowed`,children:[u.jsx(pm,{className:"h-6 w-6 text-white"}),u.jsx("span",{className:"text-sm text-white",children:"Debit Card"})]}),u.jsx("span",{className:"absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-400",children:"Coming Soon"})]})]})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2 mt-8",children:P.map(w=>u.jsxs("button",{type:"button",onClick:()=>r(w.toString()),className:`py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                  transition-colors border border-gray-700`,children:["$",w]},w))}),o&&u.jsx("div",{className:"text-red-400 text-sm",children:o}),u.jsxs("div",{className:"flex space-x-4",children:[u.jsx("button",{type:"button",onClick:t,className:`flex-1 py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                transition-colors`,children:"Cancel"}),u.jsx("button",{type:"submit",disabled:s||!n,className:`flex-1 py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg 
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,children:s?"Processing...":"Deposit"})]})]})})]})}const Q4=()=>{const[t,e]=j.useState(!1),n=[{id:1,description:"Connect your Season-Long Fantasy League",bounty:5,completed:!1,buttonColor:"bg-blue-500 hover:bg-blue-600",logos:[{src:"/images/espnFantasy.png",alt:"ESPN"},{src:"/images/sleeperFantasy.png",alt:"Sleeper"},{src:"/images/yahoofantasy.png",alt:"Yahoo"}]},{id:2,description:"Connect your FanDuel and DraftKings accounts",bounty:5,completed:!1,buttonColor:"bg-purple-500 hover:bg-purple-600",logos:[{src:"/images/fanduel.png",alt:"FanDuel"},{src:"/images/draftkingsFantasy.png",alt:"DraftKings"}]},{id:3,description:"Share with your best friend",bounty:10,completed:!1,buttonColor:"bg-green-500 hover:bg-green-600",emoji:"🤝"}],r=i=>{console.log(`Clicked bounty for challenge ${i}`)},s=()=>u.jsxs("div",{className:"fixed inset-0 bg-blue-500 flex flex-col items-center justify-start z-50 p-4",children:[u.jsx("button",{onClick:()=>e(!1),className:"text-white text-2xl font-medium mb-8 self-start",children:"Close"}),u.jsxs("div",{className:"space-y-4 w-full max-w-md mb-8",children:[u.jsxs("div",{className:"bg-blue-400/30 rounded-xl p-4 flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("img",{src:"/images/sleeperFantasy.png",alt:"Sleeper",className:"w-8 h-8 rounded"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-white",children:"$0.50 for your"}),u.jsx("div",{className:"text-white/70",children:"Sleeper League"})]})]}),u.jsx("div",{className:"text-white text-xl font-medium",children:"$0.50"})]}),u.jsxs("div",{className:"bg-blue-400/30 rounded-xl p-4 flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("img",{src:"/images/fanduel.png",alt:"FanDuel",className:"w-8 h-8 rounded"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-white",children:"$1.00 FanDuel"}),u.jsx("div",{className:"text-white/70",children:"Fanduel"})]})]}),u.jsx("div",{className:"text-white text-xl font-medium",children:"$1.00"})]})]}),u.jsxs("div",{className:"relative w-full max-w-md aspect-square",children:[u.jsx("div",{className:"absolute inset-0 bg-white rounded-full"}),u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full z-10"}),u.jsx("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 
                      border-l-[20px] border-l-transparent
                      border-b-[40px] border-b-white
                      border-r-[20px] border-r-transparent z-20`})]}),u.jsx("button",{className:"mt-8 bg-white text-blue-500 rounded-full px-12 py-4 text-xl font-bold",onClick:()=>{},children:"SPIN!"})]});return u.jsxs(qe,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(Ye,{className:"p-6",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsx("h3",{className:"text-lg font-semibold text-white",children:"Rewards and Challenges"}),u.jsx(gm,{className:"h-5 w-5 text-yellow-500"})]}),u.jsx("div",{className:"rounded-lg overflow-hidden",children:n.map((i,o)=>u.jsxs("div",{className:`flex items-center justify-between p-4 ${o%2===0?"bg-gray-800/50":"bg-gray-800/30"}`,children:[u.jsxs("div",{className:"flex items-center flex-1",children:[i.logos?u.jsx("div",{className:"flex -space-x-2 mr-4",children:i.logos.map((l,c)=>u.jsx("img",{src:l.src,alt:l.alt,className:"w-8 h-8 rounded-full border-2 border-gray-800 bg-white"},c))}):i.emoji?u.jsx("div",{className:"w-8 h-8 flex items-center justify-center mr-4 text-xl",children:i.emoji}):null,u.jsx("p",{className:"text-white",children:i.description})]}),u.jsxs("button",{onClick:()=>r(i.id),className:`ml-4 px-6 py-2 ${i.buttonColor} text-white rounded-lg transition-colors shadow-lg`,children:["Bounty: $",i.bounty]})]},i.id))}),u.jsxs("div",{className:"flex items-center justify-between mt-6 p-4 bg-gray-800/50 rounded-lg",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-white font-medium",children:"Daily Reward"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Spin for a chance to win rewards!"})]}),u.jsxs("div",{className:"relative",children:[u.jsx("button",{disabled:!0,className:"px-6 py-2 bg-gradient-to-r from-blue-500/50 to-purple-500/50 text-white/70 rounded-lg cursor-not-allowed shadow-lg",children:"Spin Now!"}),u.jsx("span",{className:"absolute -top-2 right-0 text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full",children:"Coming Soon"})]})]})]}),t&&u.jsx(s,{})]})};function Y4(){const{currentUser:t}=Qt(),[e,n]=j.useState(!1),[r,s]=j.useState("rewards"),i=[{id:1,type:"deposit",amount:500,description:"Deposit from Bank",date:"2024-03-15"},{id:2,type:"withdrawal",amount:-50,description:"NFL Bet Placement",date:"2024-03-14"},{id:3,type:"winning",amount:125,description:"Bet Payout",date:"2024-03-13"}];return t!=null&&t.dwollaCustomerId?u.jsxs("div",{className:"space-y-6",children:[(t==null?void 0:t.dwollaVerificationStatus)==="pending"&&u.jsx(qe,{className:"bg-yellow-500/10 border-yellow-500/20",children:u.jsx(Ye,{className:"py-4",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center",children:u.jsx(V1,{className:"h-5 w-5 text-yellow-500"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-white",children:"Verification In Progress"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Your account is being verified. This typically takes 1-2 business days. You'll receive a notification once verified."})]})]})})}),e&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsx("div",{className:"max-w-md w-full mx-4",children:u.jsx(Y1,{onClose:()=>n(!1)})})}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsx(q4,{}),u.jsxs(qe,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsx(Rn,{children:u.jsx(jn,{className:"text-lg font-medium text-purple-100",children:"Quick Actions"})}),u.jsx(Ye,{children:u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("button",{onClick:()=>n(!0),disabled:(t==null?void 0:t.dwollaVerificationStatus)==="pending",className:"flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[u.jsx(lv,{className:"h-5 w-5"}),u.jsx("span",{children:"Deposit"})]}),u.jsxs("button",{disabled:(t==null?void 0:t.dwollaVerificationStatus)==="pending",className:"flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[u.jsx(cv,{className:"h-5 w-5"}),u.jsx("span",{children:"Withdraw"})]})]})})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[u.jsx("button",{onClick:()=>s("rewards"),className:`p-4 rounded-lg font-medium transition-colors ${r==="rewards"?"bg-purple-600 text-white":"bg-gray-900/50 text-gray-300 hover:bg-gray-900/70"}`,children:"Rewards & Challenges"}),u.jsx("button",{onClick:()=>s("activity"),className:`p-4 rounded-lg font-medium transition-colors ${r==="activity"?"bg-purple-600 text-white":"bg-gray-900/50 text-gray-300 hover:bg-gray-900/70"}`,children:"Recent Activity"})]}),r==="rewards"?u.jsx(Q4,{}):u.jsxs(qe,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsx(Rn,{children:u.jsx(jn,{className:"text-lg font-medium text-purple-100",children:"Recent Activity"})}),u.jsx(Ye,{children:u.jsx("div",{className:"space-y-4",children:i.map(o=>u.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("div",{className:`p-2 rounded-full ${o.type==="deposit"?"bg-green-500/20 text-green-500":o.type==="withdrawal"?"bg-red-500/20 text-red-500":"bg-purple-500/20 text-purple-500"}`,children:o.type==="deposit"?u.jsx(lv,{className:"h-5 w-5"}):o.type==="withdrawal"?u.jsx(cv,{className:"h-5 w-5"}):u.jsx(jd,{className:"h-5 w-5"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-medium text-white",children:o.description}),u.jsx("p",{className:"text-xs text-gray-400",children:o.date})]})]}),u.jsxs("div",{className:`font-medium ${o.amount>0?"text-green-500":"text-red-500"}`,children:[o.amount>0?"+":"",o.amount.toFixed(2)]})]},o.id))})})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs(qe,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(Rn,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(jn,{className:"text-sm font-medium text-purple-100",children:"Total Winnings"}),u.jsx(Na,{className:"h-4 w-4 text-purple-200"})]}),u.jsxs(Ye,{children:[u.jsx("div",{className:"text-2xl font-bold text-green-500",children:"$1,234.56"}),u.jsx("p",{className:"text-xs text-purple-200 mt-1",children:"+12.5% from last month"})]})]}),u.jsxs(qe,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(Rn,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(jn,{className:"text-sm font-medium text-purple-100",children:"Active Bets"}),u.jsx(jd,{className:"h-4 w-4 text-purple-200"})]}),u.jsxs(Ye,{children:[u.jsx("div",{className:"text-2xl font-bold text-white",children:"5"}),u.jsx("p",{className:"text-xs text-purple-200 mt-1",children:"Total value: $250.00"})]})]}),u.jsxs(qe,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(Rn,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(jn,{className:"text-sm font-medium text-purple-100",children:"Win Rate"}),u.jsx(jd,{className:"h-4 w-4 text-purple-200"})]}),u.jsxs(Ye,{children:[u.jsx("div",{className:"text-2xl font-bold text-white",children:"62%"}),u.jsx("p",{className:"text-xs text-purple-200 mt-1",children:"Last 30 days"})]})]})]}),u.jsxs("div",{className:"text-xs text-gray-500",children:["Dwolla ID: ",t.dwollaCustomerId]})]}):u.jsx("div",{className:"max-w-2xl mx-auto",children:u.jsx(G4,{})})}const Ge=[];for(let t=0;t<256;++t)Ge.push((t+256).toString(16).slice(1));function J4(t,e=0){return(Ge[t[e+0]]+Ge[t[e+1]]+Ge[t[e+2]]+Ge[t[e+3]]+"-"+Ge[t[e+4]]+Ge[t[e+5]]+"-"+Ge[t[e+6]]+Ge[t[e+7]]+"-"+Ge[t[e+8]]+Ge[t[e+9]]+"-"+Ge[t[e+10]]+Ge[t[e+11]]+Ge[t[e+12]]+Ge[t[e+13]]+Ge[t[e+14]]+Ge[t[e+15]]).toLowerCase()}let Od;const X4=new Uint8Array(16);function Z4(){if(!Od){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Od=crypto.getRandomValues.bind(crypto)}return Od(X4)}const eO=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),mv={randomUUID:eO};function tO(t,e,n){if(mv.randomUUID&&!e&&!t)return mv.randomUUID();t=t||{};const r=t.random||(t.rng||Z4)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,J4(r)}class nO{constructor(){this.groupsCollection="groups"}async getUserGroups(e){try{const n=sa(Le,this.groupsCollection),r=wc(n,_c("members","array-contains",e)),s=wc(n,_c("coOwners","array-contains",e)),[i,o]=await Promise.all([xc(r),xc(s)]),l=new Set;return i.forEach(c=>{l.add({id:c.id,...c.data()})}),o.forEach(c=>{l.add({id:c.id,...c.data()})}),Array.from(l)}catch(n){throw console.error("Error fetching user groups:",n),n}}async getGroup(e){try{const n=gn(Le,this.groupsCollection,e),r=await Ta(n);if(r.exists())return{id:r.id,...r.data()};throw new Error("Group not found")}catch(n){throw console.error("Error fetching group:",n),n}}async createGroup(e,n){try{const r=tO(),s=sa(Le,this.groupsCollection),i=e.members.map(l=>({...l,username:l.username.startsWith("#")?l.username:`#${l.username}`})),o={dateCreated:new Date,emoji:e.emoji||"👥",id:r,inviteLink:`https://onbankroll.com/group/${r}`,isHidden:!1,members:i,memberIds:i.map(l=>l.id),name:e.name,creatorId:n,coOwners:e.coOwners||[n],pendingMembers:[],status:"Active",visibility:"private",platform:e.platform||null,platformId:e.sleeperLeagueId||null};return await PE(s,o),o}catch(r){throw console.error("Error creating group:",r),r}}async isUserInGroup(e,n){try{const r=await this.getGroup(n);return r.memberIds.includes(e)||r.coOwners.includes(e)}catch(r){throw console.error("Error checking user group membership:",r),r}}async isGroupCoOwner(e,n){try{return(await this.getGroup(n)).coOwners.includes(e)}catch(r){throw console.error("Error checking co-owner status:",r),r}}}const Aa=new nO,rO=({league:t,onClose:e,onGroupCreated:n,isConverted:r})=>{var b,A,C,S,ve;const[s,i]=j.useState([]),[o,l]=j.useState(!0),[c,d]=j.useState(!1),[f,m]=j.useState(!1),[g,_]=j.useState("High-Yield Savings"),[k,N]=j.useState(!1),{currentUser:P}=Qt(),w=[{name:"High-Yield Savings",return:"+4.5%",icon:"💰",isPositive:!0},{name:"Bitcoin",return:"+3.36%",icon:u.jsx("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-black text-white rounded-full",children:"₿"}),isPositive:!0},{name:"Apple Stock",return:"+0.18%",icon:"🍎",isPositive:!0}],x=.045,I={first:700,second:200,third:100},D=H=>{if(g==="High-Yield Savings"){const K=Math.round(H*x);return{base:H,increase:K,total:H+K}}return{base:H,increase:0,total:H}};j.useEffect(()=>{(async()=>{try{const K=await af.getLeagueUsers(t.league_id);i(K)}catch(K){console.error("Error fetching league users:",K)}finally{l(!1)}})()},[t.league_id]);const L=async()=>{if(P)try{d(!0);const H=s.find(B=>B.is_owner),K={name:t.name,emoji:"🏈",coOwners:[P.uid,H.user_id],members:s.map(B=>({id:B.user_id,username:B.username,displayName:B.display_name,avatar:B.avatar})),sleeperLeagueId:t.league_id,platform:"sleeper"};await Aa.createGroup(K,P.uid),n(t.league_id)}catch(H){console.error("Error creating group:",H)}finally{d(!1)}},F=D(I.first),E=D(I.second),v=D(I.third),T=H=>u.jsxs("span",{children:["$",H.total,H.increase>0&&u.jsxs("span",{className:"text-green-500 text-lg ml-1",children:["(+$",H.increase,")"]})]});return u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/90 p-8 rounded-2xl max-w-2xl w-full mx-4 relative border border-purple-200 dark:border-purple-700 max-h-[80vh] overflow-y-auto",children:[u.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-purple-500 dark:text-purple-300 hover:text-purple-700 dark:hover:text-white",children:u.jsx(vs,{className:"h-6 w-6"})}),u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[t.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${t.avatar}`,alt:t.name,className:"w-16 h-16 rounded-full"}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:t.name}),u.jsxs("p",{className:"text-purple-600 dark:text-purple-300",children:["Season ",t.season]})]})]}),!r&&u.jsxs("button",{onClick:L,disabled:c,className:`flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 
                text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,children:[u.jsx(wu,{className:"h-5 w-5"}),u.jsx("span",{children:c?"Creating...":"Create Bankroll Group"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[u.jsxs("div",{className:"bg-purple-100/50 dark:bg-purple-800/30 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-600 dark:text-purple-300",children:"Total Teams"}),u.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:t.total_rosters})]}),u.jsxs("div",{className:"bg-purple-100/50 dark:bg-purple-800/30 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-600 dark:text-purple-300",children:"League Type"}),u.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white capitalize",children:t.status||"Active"})]}),u.jsxs("div",{className:"bg-purple-100/50 dark:bg-purple-800/30 p-4 rounded-lg cursor-pointer hover:bg-purple-200/50 dark:hover:bg-purple-700/30 transition-colors",onClick:()=>m(!f),children:[u.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-600 dark:text-purple-300",children:"Prize Structure"}),u.jsx(uv,{className:"h-4 w-4 text-purple-400"})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(gm,{className:"h-5 w-5 text-yellow-400"}),u.jsxs("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:["1st Prize: ",T(F)]})]}),u.jsxs("div",{className:"mt-2 flex items-center text-sm text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100",children:[u.jsx("span",{children:"See More"}),u.jsx(fm,{className:"h-4 w-4 ml-1"})]}),f&&u.jsxs("div",{className:"mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300",children:[u.jsxs("p",{children:["2nd Prize: ",T(E)]}),u.jsxs("p",{children:["3rd Prize: ",T(v)]})]})]}),u.jsxs("div",{className:"bg-purple-100/50 dark:bg-purple-800/30 p-4 rounded-lg relative",children:[u.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-600 dark:text-purple-300",children:"League Holdings Type"}),u.jsx(uv,{className:"h-4 w-4 text-purple-400"})]}),u.jsxs("div",{className:"flex items-center justify-between cursor-pointer",onClick:()=>N(!k),children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[typeof((b=w.find(H=>H.name===g))==null?void 0:b.icon)=="string"?u.jsx("span",{children:(A=w.find(H=>H.name===g))==null?void 0:A.icon}):(C=w.find(H=>H.name===g))==null?void 0:C.icon,u.jsxs("div",{children:[u.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:g}),u.jsx("p",{className:`text-sm ${(S=w.find(H=>H.name===g))!=null&&S.isPositive?"text-green-500":"text-red-500"}`,children:(ve=w.find(H=>H.name===g))==null?void 0:ve.return})]})]}),u.jsx(L1,{className:`h-5 w-5 text-black dark:text-white transition-transform ${k?"transform rotate-180":""}`})]}),k&&u.jsx("div",{className:"absolute left-0 right-0 mt-2 bg-white dark:bg-purple-800 rounded-lg shadow-lg z-10 border border-purple-200 dark:border-purple-600",children:w.map(H=>u.jsx("div",{className:"px-4 py-2 hover:bg-purple-100 dark:hover:bg-purple-700 cursor-pointer first:rounded-t-lg last:rounded-b-lg",onClick:()=>{_(H.name),N(!1)},children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[typeof H.icon=="string"?u.jsx("span",{children:H.icon}):H.icon,u.jsx("span",{className:"text-gray-900 dark:text-white",children:H.name})]}),u.jsx("span",{className:`${H.isPositive?"text-green-500":"text-red-500"}`,children:H.return})]})},H.name))})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold mb-4 text-gray-900 dark:text-white",children:"League Members"}),o?u.jsx("div",{className:"text-center py-4 text-purple-600 dark:text-purple-300",children:"Loading members..."}):u.jsx("div",{className:"space-y-3",children:s.map(H=>u.jsxs("div",{className:"flex items-center space-x-3 bg-purple-100/50 dark:bg-purple-800/20 p-3 rounded-lg",children:[H.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${H.avatar}`,alt:H.display_name,className:"w-10 h-10 rounded-full"}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"font-medium text-gray-900 dark:text-white",children:H.display_name}),H.is_owner&&u.jsx($D,{className:"h-4 w-4 text-yellow-400",title:"Commissioner"})]}),u.jsxs("div",{className:"flex items-center space-x-1",children:[u.jsxs("p",{className:"text-purple-500 font-medium text-sm",children:["#",H.username]}),u.jsx(M1,{className:"h-4 w-4 text-green-500",title:"Verified User"})]})]}),u.jsx(cf,{className:"h-5 w-5 text-green-500",title:"Payment Received"})]},H.user_id))})]})]})})},sO=()=>{const{leagues:t}=hm(),[e,n]=j.useState(null),[r,s]=j.useState(new Set);if(!t||t.length===0)return u.jsx("div",{className:"text-center text-gray-400 py-4",children:"No leagues found"});const i=o=>{s(l=>new Set([...l,o]))};return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"space-y-4",children:t.map(o=>u.jsx("div",{className:`bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 
              dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-500/40 
              transition-all cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-900/40`,onClick:()=>n(o),children:u.jsxs("div",{className:"flex items-center space-x-4",children:[o.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${o.avatar}`,alt:o.name,className:"w-12 h-12 rounded-full"}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:o.name}),r.has(o.league_id)&&u.jsx(M1,{className:"h-5 w-5 text-green-500"})]}),u.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[o.total_rosters," participants • Season ",o.season]})]})]})},o.league_id))}),e&&u.jsx(rO,{league:e,onClose:()=>n(null),onGroupCreated:i,isConverted:r.has(e.league_id)})]})},iO=()=>{const[t,e]=j.useState("all"),[n,r]=j.useState(!1),[s,i]=j.useState(""),{user:o,fetchUser:l,isLoading:c,errorMessage:d,disconnectSleeper:f}=hm(),m=[{id:"all",label:"All"},{id:"sleeper",label:"Sleeper"},{id:"espn",label:"ESPN"},{id:"underdog",label:"Underdog"}],g=async w=>{w.preventDefault(),await l(s),d||(r(!1),i(""))},_=()=>{window.confirm("Are you sure you want to disconnect your Sleeper account?")&&f()},k=()=>u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between bg-purple-900/30 p-4 rounded-lg",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[o.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${o.avatar}`,alt:o.username,className:"w-10 h-10 rounded-full"}),u.jsxs("div",{children:[u.jsxs("h3",{className:"text-white font-medium",children:["Connected as: ",o.username]}),u.jsxs("p",{className:"text-sm text-gray-400",children:["User ID: ",o.user_id]})]})]}),u.jsxs("button",{onClick:_,className:`flex items-center space-x-2 px-3 py-2 bg-red-500/20 text-red-400 
            rounded-lg hover:bg-red-500/30 transition-colors`,children:[u.jsx($1,{className:"h-4 w-4"}),u.jsx("span",{children:"Disconnect"})]})]}),u.jsx(sO,{})]}),N=w=>u.jsxs("div",{className:"flex flex-col items-center justify-center py-12 space-y-8",children:[u.jsxs("div",{className:"text-center space-y-4",children:[u.jsx("div",{className:"p-4 rounded-full bg-purple-900/30 inline-block",children:u.jsx(dv,{className:"h-8 w-8 text-purple-400"})}),u.jsx("h3",{className:"text-xl font-medium text-white",children:"Integration Coming Soon"}),u.jsxs("p",{className:"text-sm text-gray-400",children:["Support for ",w," integration is coming soon"]})]}),u.jsxs("div",{className:"w-full max-w-md text-center space-y-4",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-700"})}),u.jsx("div",{className:"relative flex justify-center",children:u.jsx("span",{className:"px-4 text-sm text-gray-400 bg-gray-900",children:"or"})})]}),u.jsxs("button",{className:`group px-6 py-3 bg-purple-900/50 text-white rounded-lg hover:bg-purple-900/70 
            transition-all duration-200 flex items-center justify-center space-x-2 w-full`,children:[u.jsx(wu,{className:"h-5 w-5"}),u.jsx("span",{children:"Add Your League Manually"})]}),u.jsx("p",{className:"text-sm text-gray-400",children:"Create your league and add leaguemates manually"})]})]}),P=w=>w==="all"?o?u.jsx("div",{className:"space-y-6",children:o&&u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-white mb-4",children:"Connected Platforms"}),k()]})}):u.jsx("div",{className:"text-center text-gray-400 py-12",children:"Connect your fantasy platforms to view all your leagues in one place"}):w==="sleeper"?o?k():u.jsxs("div",{className:"flex flex-col items-center justify-center py-12 space-y-4",children:[u.jsx("div",{className:"p-4 rounded-full bg-purple-900/30",children:u.jsx(dv,{className:"h-8 w-8 text-purple-400"})}),u.jsx("button",{onClick:()=>r(!0),className:`px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
              transition-all duration-200 transform hover:scale-105 shadow-lg 
              hover:shadow-green-500/25`,children:"Connect Sleeper Account"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Import all your Sleeper fantasy leagues"})]}):N(w.charAt(0).toUpperCase()+w.slice(1));return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-gray-900/50 border border-purple-500/20 rounded-lg overflow-hidden",children:[u.jsx("div",{className:"p-6",children:u.jsx("h2",{className:"text-xl font-medium text-purple-100",children:"My Leagues"})}),u.jsx("div",{className:"border-b border-purple-900/50",children:u.jsx("div",{className:"flex space-x-1 px-6",children:m.map(w=>u.jsx("button",{onClick:()=>e(w.id),className:`
                  px-4 py-2 rounded-t-lg text-sm font-medium transition-colors duration-200
                  ${t===w.id?"bg-purple-900/50 text-white border-b-2 border-green-500":"text-gray-400 hover:text-white hover:bg-purple-900/30"}
                `,children:w.label},w.id))})}),u.jsx("div",{className:"p-6",children:P(t)})]}),n&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsxs("div",{className:"bg-purple-900/90 p-8 rounded-2xl max-w-md w-full mx-4 relative border border-purple-700",children:[u.jsx("button",{onClick:()=>r(!1),className:"absolute top-4 right-4 text-purple-300 hover:text-white",children:u.jsx(vs,{className:"h-6 w-6"})}),u.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Connect Sleeper Account"}),u.jsx("form",{onSubmit:g,children:u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"username",className:"block text-sm font-medium mb-2",children:"Sleeper Username"}),u.jsx("input",{type:"text",id:"username",value:s,onChange:w=>i(w.target.value),className:`w-full px-4 py-2 bg-purple-800/50 border border-purple-600 rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 text-white 
                      placeholder-gray-400`,placeholder:"Enter your Sleeper username"})]}),d&&u.jsx("p",{className:"text-red-400 text-sm",children:d}),u.jsx("button",{type:"submit",disabled:c,className:`w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`,children:c?"Connecting...":"Connect Account"})]})})]})})]})},oO=()=>{const[t,e]=j.useState("0"),[n,r]=j.useState(""),[s,i]=j.useState(""),o=l=>{const c=l.replace(/[^0-9]/g,"");e(c)};return u.jsxs("div",{className:"relative",children:[u.jsxs("div",{className:"max-w-md mx-auto p-6 space-y-8",children:[u.jsxs("div",{className:"text-center space-y-4",children:[u.jsx("h2",{className:"text-2xl font-bold text-white",children:"Send Money"}),u.jsxs("div",{className:"flex items-center justify-center text-6xl font-bold text-white",children:[u.jsx(Na,{className:"h-12 w-12"}),u.jsx("input",{type:"text",value:t,onChange:l=>o(l.target.value),className:"w-40 bg-transparent text-center focus:outline-none",placeholder:"0"})]})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("div",{className:"relative",children:u.jsx("input",{type:"text",value:n,onChange:l=>r(l.target.value),placeholder:"#username",className:"w-full p-4 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"})}),u.jsx("div",{className:"relative",children:u.jsx("input",{type:"text",value:s,onChange:l=>i(l.target.value),placeholder:"What's this for?",className:"w-full p-4 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"})})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx("button",{className:"w-full py-3 rounded-full bg-white text-purple-900 font-medium hover:bg-gray-100 transition-colors",children:"Request"}),u.jsx("button",{className:"w-full py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors",children:"Pay"})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"text-lg font-medium text-white",children:"Payment Source"}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx(qe,{className:"bg-white hover:shadow-lg transition-all duration-200 cursor-pointer",children:u.jsx(Ye,{className:"p-4",children:u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-full bg-blue-500",children:u.jsx(ym,{className:"h-6 w-6 text-white"})}),u.jsxs("div",{children:[u.jsx("div",{className:"font-medium",children:"Friends"}),u.jsx("div",{className:"text-sm text-gray-500",children:"0 friends"})]})]})})}),u.jsx(qe,{className:"bg-white hover:shadow-lg transition-all duration-200 cursor-pointer",children:u.jsx(Ye,{className:"p-4",children:u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-full bg-purple-500",children:u.jsx(t4,{className:"h-6 w-6 text-white"})}),u.jsxs("div",{children:[u.jsx("div",{className:"font-medium",children:"Groups"}),u.jsx("div",{className:"text-sm text-gray-500",children:"0 groups"})]})]})})})]})]})]}),u.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center",children:u.jsxs("div",{className:"max-w-md mx-auto p-8 text-center",children:[u.jsx("div",{className:"mb-6 flex justify-center",children:u.jsx("div",{className:"w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center",children:u.jsx(V1,{className:"h-8 w-8 text-purple-500"})})}),u.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Coming Soon"}),u.jsx("p",{className:"text-gray-300",children:"The Send Money feature is currently under development. Stay tuned for updates!"})]})})]})};class aO{logEvent(e,n={}){try{mo&&j1(mo,e,{...n,timestamp:new Date().toISOString()})}catch{}}logClick(e,n,r,s=null){this.logEvent("user_click",{element_id:e,element_type:n,page_name:r,click_timestamp:new Date().toISOString(),user_id:(s==null?void 0:s.uid)||"anonymous",user_email:(s==null?void 0:s.email)||"anonymous",user_display_name:(s==null?void 0:s.displayName)||"anonymous"})}startSession(e){this.logEvent("session_start",{user_id:e,session_start_time:new Date().toISOString()}),mo&&PD(mo,{last_session_start:new Date().toISOString(),user_id:e})}endSession(e,n){this.logEvent("session_end",{user_id:e,session_end_time:new Date().toISOString(),session_duration:n})}logPlatformView(e,n,r){this.logEvent("platform_view",{platform_id:e,platform_name:n,category:r})}logPlatformVisit(e,n){this.logEvent("platform_visit",{platform_id:e,platform_name:n})}logPlatformConnect(e,n){this.logEvent("platform_connect",{platform_id:e,platform_name:n})}logSleeperConnect(e){this.logEvent("sleeper_connect",{username:e})}logSleeperDisconnect(){this.logEvent("sleeper_disconnect")}logSleeperLeagueView(e,n){this.logEvent("sleeper_league_view",{league_id:e,league_name:n})}logPageView(e,n){this.logEvent("page_view",{page_name:e,page_title:n,url:window.location.pathname})}logNotificationPermissionRequested(){this.logEvent("notification_permission_requested")}logNotificationPermissionGranted(){this.logEvent("notification_permission_granted")}logNotificationPermissionDenied(){this.logEvent("notification_permission_denied")}logNotificationSettingsUpdated(e){this.logEvent("notification_settings_updated",{email_enabled:e.emailEnabled,push_enabled:e.pushEnabled,categories:e.categories})}}const df=new aO,lO=({platform:t,onClose:e})=>{const[n,r]=j.useState(!1),s=()=>{if(df.logPlatformVisit(t.id,t.name),t.url){const o=window.open();o&&(o.opener=null,o.location=t.url)}},i=()=>{df.logPlatformConnect(t.id,t.name),r(!0)};return u.jsxs("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:[u.jsxs("div",{className:"bg-gradient-to-b from-purple-100 to-pink-100 rounded-3xl max-w-md w-full mx-auto relative overflow-hidden",children:[u.jsx("button",{onClick:e,className:"absolute top-4 left-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors",children:u.jsx(vs,{className:"h-6 w-6 text-gray-600"})}),u.jsxs("div",{className:"p-6 space-y-6",children:[u.jsxs("div",{className:"flex flex-col items-center justify-center pt-8",children:[u.jsx("div",{className:"w-24 h-24 mb-4",children:u.jsx("img",{src:t.logo,alt:t.name,className:"w-full h-full object-contain rounded-lg"})}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:t.name})]}),u.jsx("div",{className:"text-center",children:u.jsxs("p",{className:"text-gray-600",children:["Legal States: ",t.legalStates||"Information not available"]})}),u.jsxs("div",{className:"bg-white/80 rounded-xl p-4 space-y-2",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Promotion Details"}),u.jsx("p",{className:"text-gray-700",children:t.promoDetails||"No current promotions"}),t.restrictions&&u.jsxs("div",{className:"mt-2",children:[u.jsx("h4",{className:"font-medium text-gray-900",children:"Restrictions"}),u.jsx("p",{className:"text-gray-600 text-sm",children:t.restrictions})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("button",{onClick:s,className:`w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 
                transition-colors duration-200 flex items-center justify-center space-x-2 group`,children:[u.jsxs("span",{children:["Visit ",t.name]}),u.jsx(zD,{className:"h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),u.jsxs("button",{onClick:i,className:`w-full py-3 bg-yellow-400 text-gray-900 rounded-xl font-medium 
                hover:bg-yellow-500 transition-colors duration-200`,children:["Connect ",t.name]})]}),u.jsx("div",{className:"text-center text-sm text-gray-600 pt-4",children:u.jsx("p",{children:"Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700"})})]})]}),n&&u.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[60]",children:u.jsxs("div",{className:"bg-gray-900 rounded-3xl p-8 max-w-lg mx-4 relative border border-gray-700 shadow-2xl",children:[u.jsx("button",{onClick:()=>r(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors",children:u.jsx(vs,{className:"h-6 w-6"})}),u.jsxs("div",{className:"text-center space-y-6",children:[u.jsx("div",{className:"flex justify-center",children:u.jsx("div",{className:"w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center",children:u.jsx(z1,{className:"h-10 w-10 text-yellow-400"})})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:"Coming Soon!"}),u.jsxs("p",{className:"text-gray-400 text-lg",children:["Get ready for seamless transactions with ",t.name]})]}),u.jsxs("div",{className:"space-y-4 py-4",children:[u.jsx("p",{className:"text-gray-300 text-lg",children:"We're building something special just for you:"}),u.jsxs("ul",{className:"text-gray-300 text-left space-y-3 max-w-md mx-auto",children:[u.jsxs("li",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),u.jsxs("span",{children:["Connect your ",t.name," account directly"]})]}),u.jsxs("li",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),u.jsx("span",{children:"Instant deposits with no hassle"})]}),u.jsxs("li",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),u.jsx("span",{children:"Lightning-fast withdrawals"})]}),u.jsxs("li",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),u.jsx("span",{children:"Track all your gaming activity in one place"})]})]})]}),u.jsx("button",{onClick:()=>r(!1),className:`px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl 
                  font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 
                  transform hover:scale-105`,children:"Can't Wait!"})]})]})})]})},cO=()=>{const[t,e]=j.useState("CASINO"),[n,r]=j.useState(null),s=[{id:"ALL",label:"ALL"},{id:"FANTASY",label:"FANTASY"},{id:"CASINO",label:"CASINO"},{id:"SPORTS BETTING",label:"SPORTS BETTING"},{id:"POKER",label:"POKER"}],i=[{id:"prizepicks",name:"PrizePicks (18+)",category:"FANTASY",logo:"/images/prizepicks.png",legalStates:"AK, CA, FL, GA, IL, KS, KY, MN, NE, NM, NC, OK, OR, RI, SC, SD, TX, UT, VT, WI, WY",promoDetails:"Get 100% deposit match up to $100",restrictions:"First-time users only. Must be 18+",url:"https://app.prizepicks.com/sign-up?invite_code=WINDAILY"},{id:"draftkings",name:"DraftKings Fantasy (18+)",category:"FANTASY",logo:"/images/draftkingsFantasy.png",legalStates:"Most US states",promoDetails:"New user bonus available",restrictions:"New users only. Must be 18+",url:"https://dkdfs.sng.link/Avkw3/ejal?_dl=draftkings%3A%2F%2Fgateway%3Fs%3D199744492&pcid=357597&psn=2003&pcn=xx&pscn=xx&pcrn=WDS&pscid=DFS&pcrid=xx&wpcid=357597&wpsrc=2003&wpcn=xx&wpscn=xx&wpcrn=WDS&wpscid=DFS&wpcrid=xx&_forward_params=1"},{id:"fanduel-fantasy",name:"FanDuel Fantasy (18+)",category:"FANTASY",logo:"/images/fanduel.png",legalStates:"Most US states",promoDetails:"Special signup bonus",restrictions:"New users only. Must be 18+",url:"https://wlfanduelus.adsrv.eacdn.com/C.ashx?btag=a_15755b_56c_&affid=11359&siteid=15755&adid=56&c="},{id:"underdog",name:"Underdog Fantasy (18+)",category:"FANTASY",logo:"/images/underdog.jpeg",legalStates:"Most US states",promoDetails:"Special welcome bonus",restrictions:"New users only. Must be 18+",url:"https://play.underdogfantasy.com/p-win-daily-sports"},{id:"myprize",name:"MyPrize Casino (18+)",category:"CASINO",logo:"/images/myPrizeLogo.jpeg",legalStates:"Available in most US states",promoDetails:"Get 5000 free coins on signup",restrictions:"Must be 18+",url:"https://myprize.us/invite/bankroll"},{id:"betmgm",name:"BetMGM Casino (21+)",category:"CASINO",logo:"/images/betmgm.png",legalStates:"MI, NJ, PA, WV",promoDetails:"100% deposit match up to $1000 + $25 free play",restrictions:"New customers only. Must be 21+",url:"https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1728250"},{id:"caesarspalace",name:"Caesars Casino (21+)",category:"CASINO",logo:"/images/caesarsCasino.png",legalStates:"MI, NJ, PA, WV",promoDetails:"100% deposit match up to $1000 + $10 free",restrictions:"New users only. Must be 21+",url:"https://wlwilliamhillus.adsrv.eacdn.com/C.ashx?btag=a_13325b_2658c_&affid=450&siteid=13325&adid=2658&c="},{id:"pokerstars",name:"PokerStars Casino (21+)",category:"CASINO",logo:"/images/pokerstars.png",legalStates:"MI, NJ, PA",promoDetails:"$50 free play with first deposit",restrictions:"New players only. Must be 21+",url:"https://star-casino.pxf.io/c/3732491/1574555/14251"},{id:"bet365",name:"Bet365 Casino (21+)",category:"CASINO",logo:"/images/bet365logo.png",legalStates:"NJ, CO, OH, VA, IA, KY",promoDetails:"Bet $1, Get $365 in Bonus Bets",restrictions:"New players only. Must be 21+",url:"https://casino.bet365.com/opening-bonus?affiliate=365_01276644"},{id:"wsop-casino",name:"WSOP Casino (21+)",category:"CASINO",logo:"/images/WSOP.png",legalStates:"MI, NJ, PA",promoDetails:"Special welcome bonus for new players",restrictions:"New players only. Must be 21+",url:"https://www.wsop.com/casino/"},{id:"wsop-poker",name:"WSOP Poker (21+)",category:"POKER",logo:"/images/WSOP.png",legalStates:"MI, NJ, PA",promoDetails:"Special poker welcome package",restrictions:"New players only. Must be 21+",url:"https://www.wsop.com/poker/"}],o=c=>{df.logPlatformView(c.id,c.name,c.category),r(c)},l=t==="ALL"?i:i.filter(c=>c.category===t);return u.jsxs("div",{className:"min-h-screen p-6 bg-gray-900",children:[u.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:s.map(c=>u.jsx("button",{onClick:()=>e(c.id),className:`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${t===c.id?"bg-yellow-400 text-gray-900":"bg-purple-900/30 text-white hover:bg-purple-900/50"}
            `,children:c.label},c.id))}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:l.map(c=>u.jsx(qe,{className:`hover:shadow-lg transition-all duration-200 cursor-pointer border-gray-700
              ${c.id==="myprize"?"bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500":"bg-gray-800"}`,onClick:()=>o(c),children:u.jsxs(Ye,{className:"p-6 flex flex-col items-center justify-center min-h-[200px]",children:[u.jsx("div",{className:`w-24 h-24 mb-4 relative ${c.id==="myprize"?"bg-yellow-300/20 rounded-xl p-2":""}`,children:u.jsx("img",{src:c.logo,alt:c.name,className:"w-full h-full object-contain rounded-lg",onError:d=>{const f=d.currentTarget.parentNode;if(f){const m=document.createElement("div");m.className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center",m.innerHTML=`<span class="text-xl font-bold text-gray-400">${c.name.charAt(0)}</span>`,f.replaceChild(m,d.currentTarget)}}})}),u.jsx("h3",{className:`text-center font-medium ${c.id==="myprize"?"text-gray-900":"text-white"}`,children:c.name})]})},c.id))}),n&&u.jsx(lO,{platform:n,onClose:()=>r(null)}),u.jsx("div",{className:"mt-8 text-center text-sm text-gray-300",children:"Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700"})]})},uO=({groupId:t,onClose:e})=>{const{currentUser:n}=Qt(),[r,s]=j.useState(null),[i,o]=j.useState(!0),l=["/images/profile_1.png","/images/profile_2.png","/images/profile_3.png","/images/profile_4.png","/images/profile_5.png"],c=[{type:"join",user:"Jon",time:"20d"},{type:"join",user:"Dan",time:"20d"},{type:"join",user:"You",time:"20d"},{type:"create",user:"You",time:"20d"}];return j.useEffect(()=>{(async()=>{try{const f=await Aa.getGroup(t);s(f)}catch(f){console.error("Error fetching group:",f)}finally{o(!1)}})()},[t]),i?u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsx("div",{className:"bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl",children:u.jsx("div",{className:"p-4",children:"Loading..."})})}):u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsxs("div",{className:"bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl",children:[u.jsxs("div",{className:"flex items-center justify-between p-4 bg-white sticky top-0 z-10",children:[u.jsx("button",{onClick:e,className:"p-2 rounded-full hover:bg-gray-100",children:u.jsx(vs,{className:"w-6 h-6 text-black"})}),u.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100",children:u.jsx(mm,{className:"w-6 h-6 text-black"})})]}),u.jsxs("div",{className:"px-4 pt-6 pb-8 space-y-6",children:[u.jsx("div",{className:"flex justify-center",children:u.jsx("div",{className:"w-20 h-20 flex items-center justify-center text-4xl",children:(r==null?void 0:r.emoji)||"🏈"})}),u.jsx("div",{className:"flex justify-center -space-x-2",children:l.map((d,f)=>u.jsx("img",{src:d,alt:`Member ${f+1}`,className:"w-10 h-10 rounded-full border-2 border-white"},f))}),u.jsx("h1",{className:"text-3xl font-bold text-center",children:(r==null?void 0:r.name)||"Test"}),u.jsxs("button",{className:"w-full py-3 px-4 bg-blue-500 text-white rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors",children:[u.jsx(wu,{className:"w-5 h-5"}),u.jsx("span",{children:"Add an expense"})]}),u.jsx("div",{className:"text-center",children:u.jsx("h2",{className:"text-2xl font-bold",children:"You're all paid up!"})}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-6xl font-bold",children:"$0"}),u.jsx("button",{className:"text-blue-500 font-medium mt-2",children:"How we do the math"})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("h3",{className:"text-xl font-bold",children:"Activity"}),u.jsx("button",{className:"text-blue-500 font-medium",children:"Group summary"})]}),u.jsx("div",{className:"space-y-4",children:c.map((d,f)=>u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("img",{src:"/images/profile_1.png",alt:d.user,className:"w-12 h-12 rounded-full"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:d.type==="create"?`${d.user} created the group`:`${d.user} joined the group`}),u.jsx("p",{className:"text-gray-500",children:d.time})]})]},f))})]})]})]})})},dO=()=>{const{currentUser:t,logout:e,updateProfileImage:n}=Qt(),[r,s]=j.useState(!1),[i,o]=j.useState(!1),[l,c]=j.useState(!1),[d,f]=j.useState([]),[m,g]=j.useState(!0),[_,k]=j.useState(null),N=Xn();j.useEffect(()=>{if(t&&!t.profileImage){const L=Math.floor(Math.random()*30)+1,F=[1,30].includes(L)?".jpeg":L===16?".jpg":".png",E=`/images/profile_${L}${F}`;n(t.id,E)}},[t]),j.useEffect(()=>{(async()=>{if(t)try{const F=await Aa.getUserGroups(t.id);f(F)}catch(F){console.error("Error fetching groups:",F)}finally{g(!1)}})()},[t]);const P=async()=>{try{await e(),N("/")}catch(L){console.error("Error signing out:",L)}},w=()=>{N("/create-group")},x=()=>{s(!1),N("/notifications")},I=()=>u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsxs("div",{className:"bg-gray-900 rounded-2xl p-8 max-w-md mx-4 relative border border-gray-700",children:[u.jsx("button",{onClick:()=>c(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:u.jsx(vs,{className:"h-6 w-6"})}),u.jsxs("div",{className:"text-center space-y-4",children:[u.jsx("h3",{className:"text-2xl font-bold text-white",children:"Coming Soon!"}),u.jsx("p",{className:"text-gray-300",children:"Direct transfers between users will be available soon! Stay tuned for this exciting feature."}),u.jsx("button",{onClick:()=>c(!1),className:"px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-4",children:"Got it!"})]})]})}),D=[{title:"ACCOUNT & SECURITY",items:[{icon:u.jsx(JD,{className:"w-5 h-5"}),label:"Security Settings",description:"Password, 2FA, login history",action:()=>{}},{icon:u.jsx(pm,{className:"w-5 h-5"}),label:"Payment Methods",description:"Manage your payment options",action:()=>{}}]},{title:"PREFERENCES",items:[{icon:u.jsx(lf,{className:"w-5 h-5"}),label:"Notifications",description:"Customize your alerts",action:x},{icon:u.jsx(ym,{className:"w-5 h-5"}),label:"Friends & Leagues",description:"Manage your connections",action:()=>{}},{icon:u.jsx(Na,{className:"w-5 h-5"}),label:"Transaction Settings",description:"Deposit & withdrawal preferences",action:()=>{}}]},{title:"SUPPORT & LEGAL",items:[{icon:u.jsx(FD,{className:"w-5 h-5"}),label:"Help Center",description:"FAQs and support resources",action:()=>{}},{icon:u.jsx(GD,{className:"w-5 h-5"}),label:"Contact Support",description:"Get help with your account",action:()=>{}},{icon:u.jsx(qD,{className:"w-5 h-5"}),label:"Terms of Service",description:"Read our terms and conditions",action:()=>{}},{icon:u.jsx(HD,{className:"w-5 h-5"}),label:"Privacy Policy",description:"Learn about data protection",action:()=>{}}]},{title:"APP INFO",items:[{icon:u.jsx(XD,{className:"w-5 h-5"}),label:"App Version",description:"Version 1.0.0",action:()=>{}}]}];return u.jsxs("div",{className:"max-w-2xl mx-auto p-6 space-y-6 relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-8",children:[u.jsx("h1",{className:"text-2xl font-bold",children:"Profile"}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("span",{className:"text-gray-400",children:"Rewards and Challenges"}),u.jsxs("button",{className:"relative",children:[u.jsx(lf,{className:"h-6 w-6 text-gray-400"}),u.jsx("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:"3"})]}),u.jsx("button",{onClick:()=>s(!r),className:"relative",children:u.jsx(mm,{className:"h-6 w-6 text-gray-400"})})]})]}),r&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:u.jsx("div",{className:"bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto",children:u.jsxs("div",{className:"p-6 space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Settings"}),u.jsxs("button",{onClick:()=>s(!1),className:"text-gray-400 hover:text-gray-500 transition-colors",children:[u.jsx("span",{className:"sr-only",children:"Close"}),u.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}),u.jsx("div",{className:"space-y-6",children:D.map((L,F)=>u.jsxs("div",{className:"space-y-3",children:[u.jsx("h3",{className:"text-sm font-medium text-gray-500",children:L.title}),u.jsx("div",{className:"space-y-1",children:L.items.map((E,v)=>u.jsxs("button",{onClick:E.action,className:"w-full p-3 flex items-center space-x-3 hover:bg-gray-50 rounded-lg transition-colors",children:[u.jsx("div",{className:"flex-shrink-0 text-gray-400",children:E.icon}),u.jsxs("div",{className:"flex-1 text-left",children:[u.jsx("p",{className:"text-sm font-medium text-gray-900",children:E.label}),u.jsx("p",{className:"text-sm text-gray-500",children:E.description})]}),u.jsx(fm,{className:"w-5 h-5 text-gray-400"})]},v))})]},F))}),u.jsxs("button",{onClick:P,className:"w-full p-3 flex items-center space-x-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:[u.jsx($1,{className:"w-5 h-5"}),u.jsx("span",{className:"font-medium",children:"Sign Out"})]}),u.jsx("div",{className:"text-center pt-4 border-t",children:u.jsx("p",{className:"text-sm text-gray-500",children:"Made with ❤️ in Pittsburgh, PA"})})]})})}),u.jsxs("div",{className:"text-center space-y-3",children:[u.jsx("div",{className:"w-24 h-24 mx-auto rounded-full overflow-hidden",children:u.jsx("img",{src:(t==null?void 0:t.profileImage)||"/images/profile_1.png",alt:"Profile",className:"w-full h-full object-cover"})}),u.jsxs("h2",{className:"text-3xl font-bold",children:[t==null?void 0:t.firstName," ",t==null?void 0:t.lastName]}),u.jsxs("p",{className:"text-gray-400 text-lg",children:["#",t==null?void 0:t.username]})]}),u.jsx(qe,{className:"bg-gray-900 border-gray-800",children:u.jsxs(Ye,{className:"p-6 space-y-4",children:[u.jsx("h3",{className:"text-gray-400 text-center",children:"Bankroll Balance"}),u.jsxs("div",{className:"text-4xl font-bold text-center text-white",children:["$",(t==null?void 0:t.dwollaBalance)||"0.00"]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("button",{onClick:()=>c(!0),className:"p-3 bg-gray-800 rounded-lg text-blue-400 font-medium flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors",children:[u.jsx("span",{children:"↔"}),u.jsx("span",{children:"Transfer"})]}),u.jsxs("button",{onClick:()=>o(!0),className:"p-3 bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors",children:[u.jsx("span",{children:"+"}),u.jsx("span",{children:"Add Money"})]})]})]})}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx(qe,{className:"bg-gray-900 border-gray-800",children:u.jsxs(Ye,{className:"p-6",children:[u.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Groups"}),u.jsxs("div",{className:"space-y-3",children:[m?u.jsx("p",{className:"text-gray-400",children:"Loading groups..."}):d.length>0?u.jsx("div",{className:"space-y-2",children:d.map(L=>u.jsxs("div",{className:"flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer",onClick:()=>k(L.id),children:[u.jsx("span",{className:"text-2xl",children:L.emoji}),u.jsx("span",{className:"text-white",children:L.name})]},L.id))}):u.jsx("p",{className:"text-gray-400",children:"No groups yet"}),u.jsxs("button",{onClick:w,className:"w-full p-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2",children:[u.jsx(e4,{className:"w-4 h-4"}),u.jsx("span",{children:"Create Group"})]})]})]})}),u.jsx(qe,{className:"bg-gray-900 border-gray-800",children:u.jsxs(Ye,{className:"p-6",children:[u.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Friends"}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("p",{className:"text-gray-400",children:"No friends yet"}),u.jsx("button",{className:"w-full p-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors",children:"Add Friends"})]})]})})]}),u.jsxs("div",{className:"text-center space-y-2 mt-8",children:[u.jsx("p",{className:"text-gray-400",children:"Last updated 1 sec"}),u.jsx("p",{className:"text-gray-400",children:"Made with care in Pittsburgh, PA"})]}),i&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsx("div",{className:"max-w-md w-full mx-4",children:u.jsx(Y1,{onClose:()=>o(!1)})})}),l&&u.jsx(I,{}),_&&u.jsx(uO,{groupId:_,onClose:()=>k(null)})]})},hO=["🏈","⚽️","🏀","⚾️","🎾","🏒","🏂","🎰","🎲","🎮","🏆","💰","🎯","🎪","🎨","🎭","🎪","🎢","🎡","🎪"],fO=()=>{const t=Xn(),{currentUser:e}=Qt(),[n,r]=j.useState(1),[s,i]=j.useState(!1),[o,l]=j.useState({name:"",emoji:"🏈",members:[]}),[c,d]=j.useState(""),f=()=>{if(n===1&&!o.name.trim()){d("Please enter a group name");return}d(""),r(k=>k+1)},m=()=>{r(k=>k-1),d("")},g=async()=>{try{i(!0),d(""),await Aa.createGroup({name:o.name,emoji:o.emoji},e.id),t("/profile")}catch(k){d("Failed to create group. Please try again."),console.error("Error creating group:",k)}finally{i(!1)}},_=()=>{switch(n){case 1:return u.jsxs("div",{className:"space-y-4",children:[u.jsx("h2",{className:"text-xl font-bold text-white",children:"Name your group"}),u.jsx("input",{type:"text",value:o.name,onChange:k=>l({...o,name:k.target.value}),placeholder:"Enter group name",className:"w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",maxLength:50})]});case 2:return u.jsxs("div",{className:"space-y-4",children:[u.jsx("h2",{className:"text-xl font-bold text-white",children:"Choose an emoji"}),u.jsx("div",{className:"grid grid-cols-5 gap-3",children:hO.map(k=>u.jsx("button",{onClick:()=>l({...o,emoji:k}),className:`text-2xl p-3 rounded-lg ${o.emoji===k?"bg-blue-500 hover:bg-blue-600":"bg-gray-800 hover:bg-gray-700"} transition-colors`,children:k},k))})]});case 3:return u.jsxs("div",{className:"space-y-4",children:[u.jsx("h2",{className:"text-xl font-bold text-white",children:"Add people (Optional)"}),u.jsx("p",{className:"text-gray-400",children:"You can add people to your group later"})]});default:return null}};return u.jsxs("div",{className:"min-h-screen bg-gray-900 flex flex-col",children:[u.jsx("div",{className:"border-b border-gray-800 p-4",children:u.jsxs("div",{className:"max-w-lg mx-auto flex items-center justify-between",children:[u.jsx("button",{onClick:()=>t("/profile"),className:"text-gray-400 hover:text-white transition-colors",children:u.jsx(vs,{className:"h-6 w-6"})}),u.jsx("h1",{className:"text-lg font-semibold text-white",children:"Create Group"}),u.jsx("div",{className:"w-6"})," "]})}),u.jsx("div",{className:"flex-1 p-4",children:u.jsx("div",{className:"max-w-lg mx-auto",children:u.jsx(qe,{className:"bg-gray-900 border-gray-800",children:u.jsxs("div",{className:"p-6 space-y-6",children:[u.jsx("div",{className:"flex items-center justify-center space-x-4 mb-8",children:[{icon:u.jsx(hv,{className:"w-5 h-5"}),label:"Name"},{icon:u.jsx(hv,{className:"w-5 h-5"}),label:"Emoji"},{icon:u.jsx(ym,{className:"w-5 h-5"}),label:"People"}].map((k,N)=>u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:`flex items-center justify-center w-8 h-8 rounded-full ${n>N?"bg-blue-500 text-white":n===N+1?"bg-blue-500/20 text-blue-500":"bg-gray-800 text-gray-400"}`,children:n>N?u.jsx(cf,{className:"w-5 h-5"}):k.icon}),N<2&&u.jsx("div",{className:`w-12 h-0.5 mx-2 ${n>N+1?"bg-blue-500":"bg-gray-800"}`})]},N))}),_(),c&&u.jsx("p",{className:"text-red-500 text-sm mt-2",children:c}),u.jsxs("div",{className:"flex justify-between mt-8",children:[u.jsxs("button",{onClick:m,className:`flex items-center space-x-2 px-4 py-2 rounded-lg ${n===1?"invisible":"bg-gray-800 text-white hover:bg-gray-700"} transition-colors`,disabled:n===1,children:[u.jsx(vu,{className:"w-5 h-5"}),u.jsx("span",{children:"Back"})]}),n<3?u.jsxs("button",{onClick:f,className:"flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:[u.jsx("span",{children:"Next"}),u.jsx(fm,{className:"w-5 h-5"})]}):u.jsxs("button",{onClick:g,disabled:s,className:"flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50",children:[u.jsx("span",{children:"Create Group"}),u.jsx(cf,{className:"w-5 h-5"})]})]})]})})})})]})},pO=()=>{const{id:t}=$S(),e=Xn(),{currentUser:n}=Qt(),[r,s]=j.useState(null),[i,o]=j.useState(!0),l=["/images/profile_1.png","/images/profile_2.png","/images/profile_3.png","/images/profile_4.png","/images/profile_5.png"],c=[{type:"join",user:"Jon",time:"20d"},{type:"join",user:"Dan",time:"20d"},{type:"join",user:"You",time:"20d"},{type:"create",user:"You",time:"20d"}];return j.useEffect(()=>{(async()=>{try{const f=await Aa.getGroup(t);s(f)}catch(f){console.error("Error fetching group:",f)}finally{o(!1)}})()},[t]),i?u.jsx("div",{className:"p-4",children:"Loading..."}):u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsxs("div",{className:"flex items-center justify-between p-4 bg-white",children:[u.jsx("button",{onClick:()=>e(-1),className:"p-2 rounded-full hover:bg-gray-100",children:u.jsx(vu,{className:"w-6 h-6"})}),u.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100",children:u.jsx(mm,{className:"w-6 h-6"})})]}),u.jsxs("div",{className:"px-4 pt-6 pb-8 space-y-6",children:[u.jsx("div",{className:"flex justify-center",children:u.jsx("div",{className:"w-20 h-20 flex items-center justify-center text-4xl",children:(r==null?void 0:r.emoji)||"🏈"})}),u.jsx("div",{className:"flex justify-center -space-x-2",children:l.map((d,f)=>u.jsx("img",{src:d,alt:`Member ${f+1}`,className:"w-10 h-10 rounded-full border-2 border-white"},f))}),u.jsx("h1",{className:"text-3xl font-bold text-center",children:(r==null?void 0:r.name)||"Test"}),u.jsxs("button",{className:"w-full py-3 px-4 bg-blue-500 text-white rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors",children:[u.jsx(wu,{className:"w-5 h-5"}),u.jsx("span",{children:"Add an expense"})]}),u.jsx("div",{className:"text-center",children:u.jsx("h2",{className:"text-2xl font-bold",children:"You're all paid up!"})}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-6xl font-bold",children:"$0"}),u.jsx("button",{className:"text-blue-500 font-medium mt-2",children:"How we do the math"})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("h3",{className:"text-xl font-bold",children:"Activity"}),u.jsx("button",{className:"text-blue-500 font-medium",children:"Group summary"})]}),u.jsx("div",{className:"space-y-4",children:c.map((d,f)=>u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("img",{src:"/images/profile_1.png",alt:d.user,className:"w-12 h-12 rounded-full"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:d.type==="create"?`${d.user} created the group`:`${d.user} joined the group`}),u.jsx("p",{className:"text-gray-500",children:d.time})]})]},f))})]})]})]})};/**
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
 */const mO="/firebase-messaging-sw.js",gO="/firebase-cloud-messaging-push-scope",J1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",yO="https://fcmregistrations.googleapis.com/v1",X1="google.c.a.c_id",vO="google.c.a.c_l",wO="google.c.a.ts",_O="google.c.a.e";var gv;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(gv||(gv={}));/**
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
 */var aa;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(aa||(aa={}));/**
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
 */function Cn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function xO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Ld="fcm_token_details_db",EO=5,yv="fcm_token_object_Store";async function TO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Ld))return null;let e=null;return(await Yc(Ld,EO,{upgrade:async(r,s,i,o)=>{var l;if(s<2||!r.objectStoreNames.contains(yv))return;const c=o.objectStore(yv),d=await c.index("fcmSenderId").get(t);if(await c.clear(),!!d){if(s===2){const f=d;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Cn(f.vapidKey)}}}else if(s===3){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Cn(f.auth),p256dh:Cn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Cn(f.vapidKey)}}}else if(s===4){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Cn(f.auth),p256dh:Cn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Cn(f.vapidKey)}}}}}})).close(),await wd(Ld),await wd("fcm_vapid_details_db"),await wd("undefined"),IO(e)?e:null}function IO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const bO="firebase-messaging-database",SO=1,la="firebase-messaging-store";let Md=null;function Z1(){return Md||(Md=Yc(bO,SO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(la)}}})),Md}async function kO(t){const e=eT(t),r=await(await Z1()).transaction(la).objectStore(la).get(e);if(r)return r;{const s=await TO(t.appConfig.senderId);if(s)return await wm(t,s),s}}async function wm(t,e){const n=eT(t),s=(await Z1()).transaction(la,"readwrite");return await s.objectStore(la).put(e,n),await s.done,e}function eT({appConfig:t}){return t.appId}/**
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
 */const NO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ft=new $r("messaging","Messaging",NO);/**
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
 */async function AO(t,e){const n=await xm(t),r=tT(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(_m(t.appConfig),s)).json()}catch(o){throw ft.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ft.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw ft.create("token-subscribe-no-token");return i.token}async function CO(t,e){const n=await xm(t),r=tT(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${_m(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw ft.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ft.create("token-update-failed",{errorInfo:o})}if(!i.token)throw ft.create("token-update-no-token");return i.token}async function PO(t,e){const r={method:"DELETE",headers:await xm(t)};try{const i=await(await fetch(`${_m(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw ft.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw ft.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function _m({projectId:t}){return`${yO}/projects/${t}/registrations`}async function xm({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function tT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==J1&&(s.web.applicationPubKey=r),s}/**
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
 */const RO=7*24*60*60*1e3;async function jO(t){const e=await OO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Cn(e.getKey("auth")),p256dh:Cn(e.getKey("p256dh"))},r=await kO(t.firebaseDependencies);if(r){if(LO(r.subscriptionOptions,n))return Date.now()>=r.createTime+RO?DO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await PO(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return vv(t.firebaseDependencies,n)}else return vv(t.firebaseDependencies,n)}async function DO(t,e){try{const n=await CO(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await wm(t.firebaseDependencies,r),n}catch(n){throw n}}async function vv(t,e){const r={token:await AO(t,e),createTime:Date.now(),subscriptionOptions:e};return await wm(t,r),r.token}async function OO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:xO(e)})}function LO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function wv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return MO(e,t),VO(e,t),FO(e,t),e}function MO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function VO(t,e){e.data&&(t.data=e.data)}function FO(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;l&&(t.fcmOptions.link=l);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function UO(t){return typeof t=="object"&&!!t&&X1 in t}/**
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
 */function $O(t){if(!t||!t.options)throw Vd("App Configuration Object");if(!t.name)throw Vd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Vd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Vd(t){return ft.create("missing-app-config-values",{valueName:t})}/**
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
 */class zO{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=$O(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function BO(t){try{t.swRegistration=await navigator.serviceWorker.register(mO,{scope:gO}),t.swRegistration.update().catch(()=>{})}catch(e){throw ft.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function qO(t,e){if(!e&&!t.swRegistration&&await BO(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ft.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function WO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=J1)}/**
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
 */async function nT(t,e){if(!navigator)throw ft.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ft.create("permission-blocked");return await WO(t,e==null?void 0:e.vapidKey),await qO(t,e==null?void 0:e.serviceWorkerRegistration),jO(t)}/**
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
 */async function HO(t,e,n){const r=GO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[X1],message_name:n[vO],message_time:n[wO],message_device_time:Math.floor(Date.now()/1e3)})}function GO(t){switch(t){case aa.NOTIFICATION_CLICKED:return"notification_open";case aa.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function KO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===aa.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(wv(n)):t.onMessageHandler.next(wv(n)));const r=n.data;UO(r)&&r[_O]==="1"&&await HO(t,n.messageType,r)}const _v="@firebase/messaging",xv="0.12.12";/**
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
 */const QO=t=>{const e=new zO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>KO(e,n)),e},YO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>nT(e,r)}};function JO(){Vt(new At("messaging",QO,"PUBLIC")),Vt(new At("messaging-internal",YO,"PRIVATE")),ht(_v,xv),ht(_v,xv,"esm2017")}/**
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
 */async function XO(){try{await pp()}catch{return!1}return typeof window<"u"&&fp()&&ex()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function ZO(t,e){if(!navigator)throw ft.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function eL(t=ma()){return XO().then(e=>{if(!e)throw ft.create("unsupported-browser")},e=>{throw ft.create("indexed-db-unsupported")}),Zn(ye(t),"messaging").getImmediate()}async function tL(t,e){return t=ye(t),nT(t,e)}function nL(t,e){return t=ye(t),ZO(t,e)}JO();/**
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
 */const rL="type.googleapis.com/google.protobuf.Int64Value",sL="type.googleapis.com/google.protobuf.UInt64Value";function rT(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function hf(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>hf(e));if(typeof t=="function"||typeof t=="object")return rT(t,e=>hf(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Cc(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case rL:case sL:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Cc(e)):typeof t=="function"||typeof t=="object"?rT(t,e=>Cc(e)):t}/**
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
 */const Em="functions";/**
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
 */const Ev={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class si extends Kt{constructor(e,n,r){super(`${Em}/${e}`,n||""),this.details=r}}function iL(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function oL(t,e){let n=iL(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!Ev[o])return new si("internal","internal");n=Ev[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=Cc(s))}}catch{}return n==="ok"?null:new si(n,r,s)}/**
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
 */class aL{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const ff="us-central1";function lL(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new si("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class cL{constructor(e,n,r,s,i=ff,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new aL(n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=ff}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function uL(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function dL(t,e,n){return r=>fL(t,e,r,{})}async function hL(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function fL(t,e,n,r){const s=t._url(e);return pL(t,s,n,r)}async function pL(t,e,n,r){n=hf(n);const s={data:n},i={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const l=r.timeout||7e4,c=lL(l),d=await Promise.race([hL(e,s,i,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!d)throw new si("cancelled","Firebase Functions instance was deleted.");const f=oL(d.status,d.json);if(f)throw f;if(!d.json)throw new si("internal","Response is not valid JSON object.");let m=d.json.data;if(typeof m>"u"&&(m=d.json.result),typeof m>"u")throw new si("internal","Response is missing data field.");return{data:Cc(m)}}const Tv="@firebase/functions",Iv="0.11.8";/**
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
 */const mL="auth-internal",gL="app-check-internal",yL="messaging-internal";function vL(t,e){const n=(r,{instanceIdentifier:s})=>{const i=r.getProvider("app").getImmediate(),o=r.getProvider(mL),l=r.getProvider(yL),c=r.getProvider(gL);return new cL(i,o,l,c,s,t)};Vt(new At(Em,n,"PUBLIC").setMultipleInstances(!0)),ht(Tv,Iv,e),ht(Tv,Iv,"esm2017")}/**
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
 */function wL(t=ma(),e=ff){const r=Zn(ye(t),Em).getImmediate({identifier:e}),s=Y_("functions");return s&&_L(r,...s),r}function _L(t,e,n){uL(ye(t),e,n)}function xL(t,e,n){return dL(ye(t),e)}vL(fetch.bind(self));class EL{constructor(){this.messaging=eL(Pd),this.db=wE(Pd),this.functions=wL(Pd)}async initializePushNotifications(){try{return await Notification.requestPermission()==="granted"?await tL(this.messaging,{vapidKey:void 0}):null}catch(e){return console.error("Error initializing push notifications:",e),null}}async saveNotificationPreferences(e,n){try{await CE(gn(this.db,"userPreferences",e),{notifications:{inApp:n.inApp??!0,sms:n.sms??!1,email:n.email??!1,pushToken:n.pushToken}},{merge:!0})}catch(r){throw console.error("Error saving notification preferences:",r),r}}async getNotificationPreferences(e){try{const n=gn(this.db,"userPreferences",e),r=await Ta(n);return r.exists()?r.data().notifications:{inApp:!0,sms:!1,email:!1,pushToken:null}}catch(n){throw console.error("Error getting notification preferences:",n),n}}async sendNotification(e,n){try{await xL(this.functions,"sendNotification")({userId:e,notification:n})}catch(r){throw console.error("Error sending notification:",r),r}}async storeInAppNotification(e,n){try{await PE(sa(this.db,"users",e,"notifications"),{...n,timestamp:new Date,read:!1})}catch(r){throw console.error("Error storing in-app notification:",r),r}}onPushNotification(e){return nL(this.messaging,n=>{e(n)})}}const Ws=new EL,TL=()=>{const t=Xn(),[e,n]=j.useState({inApp:!0,email:!1}),[r,s]=j.useState(!0),[i,o]=j.useState(null);j.useEffect(()=>{(async()=>{try{if(!lt.currentUser){t("/login");return}const d=await Ws.getNotificationPreferences(lt.currentUser.uid);n(d),s(!1)}catch{o("Failed to load notification preferences"),s(!1)}})()},[t]);const l=async c=>{try{const d={...e,[c]:!e[c]};if(n(d),await Ws.saveNotificationPreferences(lt.currentUser.uid,d),c==="inApp"&&d.inApp){const f=await Ws.initializePushNotifications();f&&await Ws.saveNotificationPreferences(lt.currentUser.uid,{...d,pushToken:f})}}catch{o("Failed to update preferences")}};return r?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:"Loading..."}):u.jsxs("div",{className:"max-w-2xl mx-auto p-6",children:[u.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Notification Settings"}),i&&u.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:i}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between p-4 bg-white rounded-lg shadow",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:"In-App Notifications"}),u.jsx("p",{className:"text-sm text-gray-600",children:"Receive notifications within the app and browser push notifications"})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:e.inApp,onChange:()=>l("inApp")}),u.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]}),u.jsxs("div",{className:"flex items-center justify-between p-4 bg-white rounded-lg shadow",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:"Email Notifications"}),u.jsx("p",{className:"text-sm text-gray-600",children:"Receive important updates via email"})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:e.email,onChange:()=>l("email")}),u.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]}),u.jsxs("div",{className:"mt-8 p-4 bg-gray-50 rounded-lg",children:[u.jsx("h4",{className:"font-semibold mb-2",children:"About Notifications"}),u.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-600",children:[u.jsx("li",{children:"In-app notifications appear in your notification center and as browser push notifications"}),u.jsx("li",{children:"Email notifications are sent to your registered email address for important updates"}),u.jsx("li",{children:"You can change these settings at any time"})]})]})]})]})};function IL(){return j.useEffect(()=>{const t=lt.onAuthStateChanged(async e=>{if(e)try{const n=await Ws.initializePushNotifications();n&&await Ws.saveNotificationPreferences(e.uid,{pushToken:n})}catch(n){console.error("Error initializing push notifications:",n)}});return()=>t()},[]),u.jsx(DD,{children:u.jsx(OD,{children:u.jsx(uk,{children:u.jsxs(rk,{children:[u.jsx(Pt,{path:"/",element:u.jsx(o4,{})}),u.jsx(Pt,{path:"/signup",element:u.jsx(a4,{})}),u.jsx(Pt,{path:"/login",element:u.jsx(l4,{})}),u.jsxs(Pt,{element:u.jsx(r4,{}),children:[u.jsx(Pt,{path:"/banking",element:u.jsx(Y4,{})}),u.jsx(Pt,{path:"/leagues",element:u.jsx(iO,{})}),u.jsx(Pt,{path:"/send",element:u.jsx(oO,{})}),u.jsx(Pt,{path:"/spend",element:u.jsx(cO,{})}),u.jsx(Pt,{path:"/profile",element:u.jsx(dO,{})}),u.jsx(Pt,{path:"/create-group",element:u.jsx(fO,{})}),u.jsx(Pt,{path:"/group/:id",element:u.jsx(pO,{})}),u.jsx(Pt,{path:"/notifications",element:u.jsx(TL,{})})]})]})})})})}Fd.createRoot(document.getElementById("root")).render(u.jsx(Ov.StrictMode,{children:u.jsx(IL,{})}));
//# sourceMappingURL=main-CLR1Ksg4.js.map
