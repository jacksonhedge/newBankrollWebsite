function D1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function O1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sw={exports:{}},Qc={},iw={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),L1=Symbol.for("react.portal"),M1=Symbol.for("react.fragment"),V1=Symbol.for("react.strict_mode"),F1=Symbol.for("react.profiler"),U1=Symbol.for("react.provider"),B1=Symbol.for("react.context"),$1=Symbol.for("react.forward_ref"),z1=Symbol.for("react.suspense"),q1=Symbol.for("react.memo"),W1=Symbol.for("react.lazy"),Hg=Symbol.iterator;function G1(t){return t===null||typeof t!="object"?null:(t=Hg&&t[Hg]||t["@@iterator"],typeof t=="function"?t:null)}var ow={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aw=Object.assign,lw={};function Ui(t,e,n){this.props=t,this.context=e,this.refs=lw,this.updater=n||ow}Ui.prototype.isReactComponent={};Ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cw(){}cw.prototype=Ui.prototype;function Vf(t,e,n){this.props=t,this.context=e,this.refs=lw,this.updater=n||ow}var Ff=Vf.prototype=new cw;Ff.constructor=Vf;aw(Ff,Ui.prototype);Ff.isPureReactComponent=!0;var Kg=Array.isArray,uw=Object.prototype.hasOwnProperty,Uf={current:null},dw={key:!0,ref:!0,__self:!0,__source:!0};function hw(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)uw.call(e,r)&&!dw.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ja,type:t,key:i,ref:o,props:s,_owner:Uf.current}}function H1(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function K1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qg=/\/+/g;function dd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K1(""+t.key):e.toString(36)}function Ml(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ja:case L1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+dd(o,0):r,Kg(s)?(n="",t!=null&&(n=t.replace(Qg,"$&/")+"/"),Ml(s,e,n,"",function(d){return d})):s!=null&&(Bf(s)&&(s=H1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Qg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Kg(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+dd(i,l);o+=Ml(i,e,n,c,s)}else if(c=G1(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+dd(i,l++),o+=Ml(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var r=[],s=0;return Ml(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Q1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Vl={transition:null},Y1={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:Uf};function fw(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!Bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Ui;te.Fragment=M1;te.Profiler=F1;te.PureComponent=Vf;te.StrictMode=V1;te.Suspense=z1;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;te.act=fw;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=aw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Uf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)uw.call(e,c)&&!dw.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ja,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:B1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:U1,_context:t},t.Consumer=t};te.createElement=hw;te.createFactory=function(t){var e=hw.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:$1,render:t}};te.isValidElement=Bf;te.lazy=function(t){return{$$typeof:W1,_payload:{_status:-1,_result:t},_init:Q1}};te.memo=function(t,e){return{$$typeof:q1,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Vl.transition;Vl.transition={};try{t()}finally{Vl.transition=e}};te.unstable_act=fw;te.useCallback=function(t,e){return kt.current.useCallback(t,e)};te.useContext=function(t){return kt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};te.useEffect=function(t,e){return kt.current.useEffect(t,e)};te.useId=function(){return kt.current.useId()};te.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return kt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};te.useRef=function(t){return kt.current.useRef(t)};te.useState=function(t){return kt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return kt.current.useTransition()};te.version="18.3.1";iw.exports=te;var P=iw.exports;const or=O1(P),X1=D1({__proto__:null,default:or},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1=P,Z1=Symbol.for("react.element"),eI=Symbol.for("react.fragment"),tI=Object.prototype.hasOwnProperty,nI=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rI={key:!0,ref:!0,__self:!0,__source:!0};function pw(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tI.call(e,r)&&!rI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Z1,type:t,key:i,ref:o,props:s,_owner:nI.current}}Qc.Fragment=eI;Qc.jsx=pw;Qc.jsxs=pw;sw.exports=Qc;var u=sw.exports,ch={},mw={exports:{}},Wt={},gw={exports:{}},yw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var X=$.length;$.push(K);e:for(;0<X;){var ie=X-1>>>1,fe=$[ie];if(0<s(fe,K))$[ie]=K,$[X]=fe,X=ie;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],X=$.pop();if(X!==K){$[0]=X;e:for(var ie=0,fe=$.length,Pe=fe>>>1;ie<Pe;){var jn=2*(ie+1)-1,Dn=$[jn],On=jn+1,Ln=$[On];if(0>s(Dn,X))On<fe&&0>s(Ln,Dn)?($[ie]=Ln,$[On]=X,ie=On):($[ie]=Dn,$[jn]=X,ie=jn);else if(On<fe&&0>s(Ln,X))$[ie]=Ln,$[On]=X,ie=On;else break e}}return K}function s($,K){var X=$.sortIndex-K.sortIndex;return X!==0?X:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],d=[],f=1,m=null,g=3,v=!1,S=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b($){for(var K=n(d);K!==null;){if(K.callback===null)r(d);else if(K.startTime<=$)r(d),K.sortIndex=K.expirationTime,e(c,K);else break;K=n(d)}}function D($){if(A=!1,b($),!S)if(n(c)!==null)S=!0,$e(M);else{var K=n(d);K!==null&&ze(D,K.startTime-$)}}function M($,K){S=!1,A&&(A=!1,w(_),_=-1),v=!0;var X=g;try{for(b(K),m=n(c);m!==null&&(!(m.expirationTime>K)||$&&!C());){var ie=m.callback;if(typeof ie=="function"){m.callback=null,g=m.priorityLevel;var fe=ie(m.expirationTime<=K);K=t.unstable_now(),typeof fe=="function"?m.callback=fe:m===n(c)&&r(c),b(K)}else r(c);m=n(c)}if(m!==null)var Pe=!0;else{var jn=n(d);jn!==null&&ze(D,jn.startTime-K),Pe=!1}return Pe}finally{m=null,g=X,v=!1}}var F=!1,I=null,_=-1,E=5,T=-1;function C(){return!(t.unstable_now()-T<E)}function R(){if(I!==null){var $=t.unstable_now();T=$;var K=!0;try{K=I(!0,$)}finally{K?k():(F=!1,I=null)}}else F=!1}var k;if(typeof x=="function")k=function(){x(R)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,H=Le.port2;Le.port1.onmessage=R,k=function(){H.postMessage(null)}}else k=function(){N(R,0)};function $e($){I=$,F||(F=!0,k())}function ze($,K){_=N(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||v||(S=!0,$e(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var X=g;g=K;try{return $()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var X=g;g=$;try{return K()}finally{g=X}},t.unstable_scheduleCallback=function($,K,X){var ie=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ie+X:ie):X=ie,$){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=X+fe,$={id:f++,callback:K,priorityLevel:$,startTime:X,expirationTime:fe,sortIndex:-1},X>ie?($.sortIndex=X,e(d,$),n(c)===null&&$===n(d)&&(A?(w(_),_=-1):A=!0,ze(D,X-ie))):($.sortIndex=fe,e(c,$),S||v||(S=!0,$e(M))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var K=g;return function(){var X=g;g=K;try{return $.apply(this,arguments)}finally{g=X}}}})(yw);gw.exports=yw;var sI=gw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI=P,qt=sI;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vw=new Set,Xo={};function Os(t,e){Ii(t,e),Ii(t+"Capture",e)}function Ii(t,e){for(Xo[t]=e,t=0;t<e.length;t++)vw.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uh=Object.prototype.hasOwnProperty,oI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yg={},Xg={};function aI(t){return uh.call(Xg,t)?!0:uh.call(Yg,t)?!1:oI.test(t)?Xg[t]=!0:(Yg[t]=!0,!1)}function lI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cI(t,e,n,r){if(e===null||typeof e>"u"||lI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new Nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new Nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new Nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new Nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new Nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new Nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new Nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new Nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new Nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $f=/[\-:]([a-z])/g;function zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($f,zf);st[e]=new Nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($f,zf);st[e]=new Nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($f,zf);st[e]=new Nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new Nt(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new Nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qf(t,e,n,r){var s=st.hasOwnProperty(e)?st[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cI(e,n,s,r)&&(n=null),r||s===null?aI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ar=iI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),ww=Symbol.for("react.provider"),_w=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),fh=Symbol.for("react.suspense_list"),Hf=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),xw=Symbol.for("react.offscreen"),Jg=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=Jg&&t[Jg]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,hd;function Io(t){if(hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hd=e&&e[1]||""}return`
`+hd+t}var fd=!1;function pd(t,e){if(!t||fd)return"";fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{fd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function uI(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=pd(t.type,!1),t;case 11:return t=pd(t.type.render,!1),t;case 1:return t=pd(t.type,!0),t;default:return""}}function ph(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Js:return"Fragment";case Xs:return"Portal";case dh:return"Profiler";case Wf:return"StrictMode";case hh:return"Suspense";case fh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _w:return(t.displayName||"Context")+".Consumer";case ww:return(t._context.displayName||"Context")+".Provider";case Gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hf:return e=t.displayName||null,e!==null?e:ph(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return ph(t(e))}catch{}}return null}function dI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ph(e);case 8:return e===Wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ew(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hI(t){var e=Ew(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=hI(t))}function bw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ew(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tw(t,e){e=e.checked,e!=null&&qf(t,"checked",e,!1)}function gh(t,e){Tw(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yh(t,e.type,n):e.hasOwnProperty("defaultValue")&&yh(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ey(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yh(t,e,n){(e!=="number"||sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var So=Array.isArray;function hi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function vh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ty(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(So(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function Iw(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ny(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,kw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fI=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){fI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function Nw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function Aw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Nw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var pI=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _h(t,e){if(e){if(pI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eh=null;function Kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bh=null,fi=null,pi=null;function ry(t){if(t=La(t)){if(typeof bh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=eu(e),bh(t.stateNode,t.type,e))}}function Cw(t){fi?pi?pi.push(t):pi=[t]:fi=t}function Rw(){if(fi){var t=fi,e=pi;if(pi=fi=null,ry(t),e)for(t=0;t<e.length;t++)ry(e[t])}}function Pw(t,e){return t(e)}function jw(){}var md=!1;function Dw(t,e,n){if(md)return t(e,n);md=!0;try{return Pw(t,e,n)}finally{md=!1,(fi!==null||pi!==null)&&(jw(),Rw())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var r=eu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Th=!1;if(Jn)try{var po={};Object.defineProperty(po,"passive",{get:function(){Th=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Th=!1}function mI(t,e,n,r,s,i,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Lo=!1,ic=null,oc=!1,Ih=null,gI={onError:function(t){Lo=!0,ic=t}};function yI(t,e,n,r,s,i,o,l,c){Lo=!1,ic=null,mI.apply(gI,arguments)}function vI(t,e,n,r,s,i,o,l,c){if(yI.apply(this,arguments),Lo){if(Lo){var d=ic;Lo=!1,ic=null}else throw Error(U(198));oc||(oc=!0,Ih=d)}}function Ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ow(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sy(t){if(Ls(t)!==t)throw Error(U(188))}function wI(t){var e=t.alternate;if(!e){if(e=Ls(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return sy(s),t;if(i===r)return sy(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Lw(t){return t=wI(t),t!==null?Mw(t):null}function Mw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mw(t);if(e!==null)return e;t=t.sibling}return null}var Vw=qt.unstable_scheduleCallback,iy=qt.unstable_cancelCallback,_I=qt.unstable_shouldYield,xI=qt.unstable_requestPaint,De=qt.unstable_now,EI=qt.unstable_getCurrentPriorityLevel,Qf=qt.unstable_ImmediatePriority,Fw=qt.unstable_UserBlockingPriority,ac=qt.unstable_NormalPriority,bI=qt.unstable_LowPriority,Uw=qt.unstable_IdlePriority,Yc=null,Tn=null;function TI(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Yc,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:kI,II=Math.log,SI=Math.LN2;function kI(t){return t>>>=0,t===0?32:31-(II(t)/SI|0)|0}var yl=64,vl=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ko(l):(i&=o,i!==0&&(r=ko(i)))}else o=n&~s,o!==0?r=ko(o):i!==0&&(r=ko(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),s=1<<n,r|=t[n],e&=~s;return r}function NI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-dn(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=NI(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function Sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bw(){var t=yl;return yl<<=1,!(yl&4194240)&&(yl=64),t}function gd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function CI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-dn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function $w(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zw,Xf,qw,Ww,Gw,kh=!1,wl=[],Rr=null,Pr=null,jr=null,ea=new Map,ta=new Map,_r=[],RI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oy(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function mo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=La(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function PI(t,e,n,r,s){switch(e){case"focusin":return Rr=mo(Rr,t,e,n,r,s),!0;case"dragenter":return Pr=mo(Pr,t,e,n,r,s),!0;case"mouseover":return jr=mo(jr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ea.set(i,mo(ea.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ta.set(i,mo(ta.get(i)||null,t,e,n,r,s)),!0}return!1}function Hw(t){var e=us(t.target);if(e!==null){var n=Ls(e);if(n!==null){if(e=n.tag,e===13){if(e=Ow(n),e!==null){t.blockedOn=e,Gw(t.priority,function(){qw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Eh=r,n.target.dispatchEvent(r),Eh=null}else return e=La(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function ay(t,e,n){Fl(t)&&n.delete(e)}function jI(){kh=!1,Rr!==null&&Fl(Rr)&&(Rr=null),Pr!==null&&Fl(Pr)&&(Pr=null),jr!==null&&Fl(jr)&&(jr=null),ea.forEach(ay),ta.forEach(ay)}function go(t,e){t.blockedOn===e&&(t.blockedOn=null,kh||(kh=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,jI)))}function na(t){function e(s){return go(s,t)}if(0<wl.length){go(wl[0],t);for(var n=1;n<wl.length;n++){var r=wl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&go(Rr,t),Pr!==null&&go(Pr,t),jr!==null&&go(jr,t),ea.forEach(e),ta.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)Hw(n),n.blockedOn===null&&_r.shift()}var mi=ar.ReactCurrentBatchConfig,cc=!0;function DI(t,e,n,r){var s=de,i=mi.transition;mi.transition=null;try{de=1,Jf(t,e,n,r)}finally{de=s,mi.transition=i}}function OI(t,e,n,r){var s=de,i=mi.transition;mi.transition=null;try{de=4,Jf(t,e,n,r)}finally{de=s,mi.transition=i}}function Jf(t,e,n,r){if(cc){var s=Nh(t,e,n,r);if(s===null)Sd(t,e,r,uc,n),oy(t,r);else if(PI(s,t,e,n,r))r.stopPropagation();else if(oy(t,r),e&4&&-1<RI.indexOf(t)){for(;s!==null;){var i=La(s);if(i!==null&&zw(i),i=Nh(t,e,n,r),i===null&&Sd(t,e,r,uc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Sd(t,e,r,null,n)}}var uc=null;function Nh(t,e,n,r){if(uc=null,t=Kf(r),t=us(t),t!==null)if(e=Ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ow(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uc=t,null}function Kw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(EI()){case Qf:return 1;case Fw:return 4;case ac:case bI:return 16;case Uw:return 536870912;default:return 16}default:return 16}}var kr=null,Zf=null,Ul=null;function Qw(){if(Ul)return Ul;var t,e=Zf,n=e.length,r,s="value"in kr?kr.value:kr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ul=s.slice(t,1<r?1-r:void 0)}function Bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function ly(){return!1}function Gt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_l:ly,this.isPropagationStopped=ly,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=Gt(Bi),Oa=Ie({},Bi,{view:0,detail:0}),LI=Gt(Oa),yd,vd,yo,Xc=Ie({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(yd=t.screenX-yo.screenX,vd=t.screenY-yo.screenY):vd=yd=0,yo=t),yd)},movementY:function(t){return"movementY"in t?t.movementY:vd}}),cy=Gt(Xc),MI=Ie({},Xc,{dataTransfer:0}),VI=Gt(MI),FI=Ie({},Oa,{relatedTarget:0}),wd=Gt(FI),UI=Ie({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),BI=Gt(UI),$I=Ie({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zI=Gt($I),qI=Ie({},Bi,{data:0}),uy=Gt(qI),WI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HI[t])?!!e[t]:!1}function tp(){return KI}var QI=Ie({},Oa,{key:function(t){if(t.key){var e=WI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YI=Gt(QI),XI=Ie({},Xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dy=Gt(XI),JI=Ie({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),ZI=Gt(JI),eS=Ie({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=Gt(eS),nS=Ie({},Xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=Gt(nS),sS=[9,13,27,32],np=Jn&&"CompositionEvent"in window,Mo=null;Jn&&"documentMode"in document&&(Mo=document.documentMode);var iS=Jn&&"TextEvent"in window&&!Mo,Yw=Jn&&(!np||Mo&&8<Mo&&11>=Mo),hy=" ",fy=!1;function Xw(t,e){switch(t){case"keyup":return sS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function oS(t,e){switch(t){case"compositionend":return Jw(e);case"keypress":return e.which!==32?null:(fy=!0,hy);case"textInput":return t=e.data,t===hy&&fy?null:t;default:return null}}function aS(t,e){if(Zs)return t==="compositionend"||!np&&Xw(t,e)?(t=Qw(),Ul=Zf=kr=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yw&&e.locale!=="ko"?null:e.data;default:return null}}var lS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function py(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lS[t.type]:e==="textarea"}function Zw(t,e,n,r){Cw(r),e=dc(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vo=null,ra=null;function cS(t){u_(t,0)}function Jc(t){var e=ni(t);if(bw(e))return t}function uS(t,e){if(t==="change")return e}var e_=!1;if(Jn){var _d;if(Jn){var xd="oninput"in document;if(!xd){var my=document.createElement("div");my.setAttribute("oninput","return;"),xd=typeof my.oninput=="function"}_d=xd}else _d=!1;e_=_d&&(!document.documentMode||9<document.documentMode)}function gy(){Vo&&(Vo.detachEvent("onpropertychange",t_),ra=Vo=null)}function t_(t){if(t.propertyName==="value"&&Jc(ra)){var e=[];Zw(e,ra,t,Kf(t)),Dw(cS,e)}}function dS(t,e,n){t==="focusin"?(gy(),Vo=e,ra=n,Vo.attachEvent("onpropertychange",t_)):t==="focusout"&&gy()}function hS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(ra)}function fS(t,e){if(t==="click")return Jc(e)}function pS(t,e){if(t==="input"||t==="change")return Jc(e)}function mS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fn=typeof Object.is=="function"?Object.is:mS;function sa(t,e){if(fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!uh.call(e,s)||!fn(t[s],e[s]))return!1}return!0}function yy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vy(t,e){var n=yy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yy(n)}}function n_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r_(){for(var t=window,e=sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sc(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gS(t){var e=r_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n_(n.ownerDocument.documentElement,n)){if(r!==null&&rp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=vy(n,i);var o=vy(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yS=Jn&&"documentMode"in document&&11>=document.documentMode,ei=null,Ah=null,Fo=null,Ch=!1;function wy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||ei==null||ei!==sc(r)||(r=ei,"selectionStart"in r&&rp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&sa(Fo,r)||(Fo=r,r=dc(Ah,"onSelect"),0<r.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ei)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ti={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Ed={},s_={};Jn&&(s_=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Zc(t){if(Ed[t])return Ed[t];if(!ti[t])return t;var e=ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in s_)return Ed[t]=e[n];return t}var i_=Zc("animationend"),o_=Zc("animationiteration"),a_=Zc("animationstart"),l_=Zc("transitionend"),c_=new Map,_y="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,e){c_.set(t,e),Os(e,[t])}for(var bd=0;bd<_y.length;bd++){var Td=_y[bd],vS=Td.toLowerCase(),wS=Td[0].toUpperCase()+Td.slice(1);Hr(vS,"on"+wS)}Hr(i_,"onAnimationEnd");Hr(o_,"onAnimationIteration");Hr(a_,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(l_,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Os("onBeforeInput",["compositionend","keypress","textInput","paste"]);Os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function xy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vI(r,e,void 0,t),t.currentTarget=null}function u_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;xy(s,l,d),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;xy(s,l,d),i=c}}}if(oc)throw t=Ih,oc=!1,Ih=null,t}function we(t,e){var n=e[Oh];n===void 0&&(n=e[Oh]=new Set);var r=t+"__bubble";n.has(r)||(d_(e,t,2,!1),n.add(r))}function Id(t,e,n){var r=0;e&&(r|=4),d_(n,t,r,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[El]){t[El]=!0,vw.forEach(function(n){n!=="selectionchange"&&(_S.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,Id("selectionchange",!1,e))}}function d_(t,e,n,r){switch(Kw(e)){case 1:var s=DI;break;case 4:s=OI;break;default:s=Jf}n=s.bind(null,e,n,t),s=void 0,!Th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Sd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=us(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Dw(function(){var d=i,f=Kf(n),m=[];e:{var g=c_.get(t);if(g!==void 0){var v=ep,S=t;switch(t){case"keypress":if(Bl(n)===0)break e;case"keydown":case"keyup":v=YI;break;case"focusin":S="focus",v=wd;break;case"focusout":S="blur",v=wd;break;case"beforeblur":case"afterblur":v=wd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=cy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=VI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ZI;break;case i_:case o_:case a_:v=BI;break;case l_:v=tS;break;case"scroll":v=LI;break;case"wheel":v=rS;break;case"copy":case"cut":case"paste":v=zI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=dy}var A=(e&4)!==0,N=!A&&t==="scroll",w=A?g!==null?g+"Capture":null:g;A=[];for(var x=d,b;x!==null;){b=x;var D=b.stateNode;if(b.tag===5&&D!==null&&(b=D,w!==null&&(D=Zo(x,w),D!=null&&A.push(oa(x,D,b)))),N)break;x=x.return}0<A.length&&(g=new v(g,S,null,n,f),m.push({event:g,listeners:A}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==Eh&&(S=n.relatedTarget||n.fromElement)&&(us(S)||S[Zn]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=d,S=S?us(S):null,S!==null&&(N=Ls(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=d),v!==S)){if(A=cy,D="onMouseLeave",w="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(A=dy,D="onPointerLeave",w="onPointerEnter",x="pointer"),N=v==null?g:ni(v),b=S==null?g:ni(S),g=new A(D,x+"leave",v,n,f),g.target=N,g.relatedTarget=b,D=null,us(f)===d&&(A=new A(w,x+"enter",S,n,f),A.target=b,A.relatedTarget=N,D=A),N=D,v&&S)t:{for(A=v,w=S,x=0,b=A;b;b=Hs(b))x++;for(b=0,D=w;D;D=Hs(D))b++;for(;0<x-b;)A=Hs(A),x--;for(;0<b-x;)w=Hs(w),b--;for(;x--;){if(A===w||w!==null&&A===w.alternate)break t;A=Hs(A),w=Hs(w)}A=null}else A=null;v!==null&&Ey(m,g,v,A,!1),S!==null&&N!==null&&Ey(m,N,S,A,!0)}}e:{if(g=d?ni(d):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var M=uS;else if(py(g))if(e_)M=pS;else{M=hS;var F=dS}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=fS);if(M&&(M=M(t,d))){Zw(m,M,n,f);break e}F&&F(t,g,d),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&yh(g,"number",g.value)}switch(F=d?ni(d):window,t){case"focusin":(py(F)||F.contentEditable==="true")&&(ei=F,Ah=d,Fo=null);break;case"focusout":Fo=Ah=ei=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,wy(m,n,f);break;case"selectionchange":if(yS)break;case"keydown":case"keyup":wy(m,n,f)}var I;if(np)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Zs?Xw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Yw&&n.locale!=="ko"&&(Zs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Zs&&(I=Qw()):(kr=f,Zf="value"in kr?kr.value:kr.textContent,Zs=!0)),F=dc(d,_),0<F.length&&(_=new uy(_,t,null,n,f),m.push({event:_,listeners:F}),I?_.data=I:(I=Jw(n),I!==null&&(_.data=I)))),(I=iS?oS(t,n):aS(t,n))&&(d=dc(d,"onBeforeInput"),0<d.length&&(f=new uy("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=I))}u_(m,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Zo(t,n),i!=null&&r.unshift(oa(t,i,s)),i=Zo(t,e),i!=null&&r.push(oa(t,i,s))),t=t.return}return r}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ey(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,s?(c=Zo(n,i),c!=null&&o.unshift(oa(n,c,l))):s||(c=Zo(n,i),c!=null&&o.push(oa(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xS=/\r\n?/g,ES=/\u0000|\uFFFD/g;function by(t){return(typeof t=="string"?t:""+t).replace(xS,`
`).replace(ES,"")}function bl(t,e,n){if(e=by(e),by(t)!==e&&n)throw Error(U(425))}function hc(){}var Rh=null,Ph=null;function jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dh=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,Ty=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ty<"u"?function(t){return Ty.resolve(null).then(t).catch(IS)}:Dh;function IS(t){setTimeout(function(){throw t})}function kd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),na(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);na(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $i=Math.random().toString(36).slice(2),wn="__reactFiber$"+$i,aa="__reactProps$"+$i,Zn="__reactContainer$"+$i,Oh="__reactEvents$"+$i,SS="__reactListeners$"+$i,kS="__reactHandles$"+$i;function us(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iy(t);t!==null;){if(n=t[wn])return n;t=Iy(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[wn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function eu(t){return t[aa]||null}var Lh=[],ri=-1;function Kr(t){return{current:t}}function xe(t){0>ri||(t.current=Lh[ri],Lh[ri]=null,ri--)}function ge(t,e){ri++,Lh[ri]=t.current,t.current=e}var zr={},gt=Kr(zr),jt=Kr(!1),_s=zr;function Si(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Dt(t){return t=t.childContextTypes,t!=null}function fc(){xe(jt),xe(gt)}function Sy(t,e,n){if(gt.current!==zr)throw Error(U(168));ge(gt,e),ge(jt,n)}function h_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,dI(t)||"Unknown",s));return Ie({},n,r)}function pc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,_s=gt.current,ge(gt,t),ge(jt,jt.current),!0}function ky(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=h_(t,e,_s),r.__reactInternalMemoizedMergedChildContext=t,xe(jt),xe(gt),ge(gt,t)):xe(jt),ge(jt,n)}var $n=null,tu=!1,Nd=!1;function f_(t){$n===null?$n=[t]:$n.push(t)}function NS(t){tu=!0,f_(t)}function Qr(){if(!Nd&&$n!==null){Nd=!0;var t=0,e=de;try{var n=$n;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,tu=!1}catch(s){throw $n!==null&&($n=$n.slice(t+1)),Vw(Qf,Qr),s}finally{de=e,Nd=!1}}return null}var si=[],ii=0,mc=null,gc=0,Kt=[],Qt=0,xs=null,zn=1,qn="";function ss(t,e){si[ii++]=gc,si[ii++]=mc,mc=t,gc=e}function p_(t,e,n){Kt[Qt++]=zn,Kt[Qt++]=qn,Kt[Qt++]=xs,xs=t;var r=zn;t=qn;var s=32-dn(r)-1;r&=~(1<<s),n+=1;var i=32-dn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,zn=1<<32-dn(e)+s|n<<s|r,qn=i+t}else zn=1<<i|n<<s|r,qn=t}function sp(t){t.return!==null&&(ss(t,1),p_(t,1,0))}function ip(t){for(;t===mc;)mc=si[--ii],si[ii]=null,gc=si[--ii],si[ii]=null;for(;t===xs;)xs=Kt[--Qt],Kt[Qt]=null,qn=Kt[--Qt],Kt[Qt]=null,zn=Kt[--Qt],Kt[Qt]=null}var $t=null,Ut=null,Ee=!1,cn=null;function m_(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ny(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Ut=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xs!==null?{id:zn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Ut=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vh(t){if(Ee){var e=Ut;if(e){var n=e;if(!Ny(t,e)){if(Mh(t))throw Error(U(418));e=Dr(n.nextSibling);var r=$t;e&&Ny(t,e)?m_(r,n):(t.flags=t.flags&-4097|2,Ee=!1,$t=t)}}else{if(Mh(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ee=!1,$t=t}}}function Ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function Tl(t){if(t!==$t)return!1;if(!Ee)return Ay(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jh(t.type,t.memoizedProps)),e&&(e=Ut)){if(Mh(t))throw g_(),Error(U(418));for(;e;)m_(t,e),e=Dr(e.nextSibling)}if(Ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=$t?Dr(t.stateNode.nextSibling):null;return!0}function g_(){for(var t=Ut;t;)t=Dr(t.nextSibling)}function ki(){Ut=$t=null,Ee=!1}function op(t){cn===null?cn=[t]:cn.push(t)}var AS=ar.ReactCurrentBatchConfig;function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cy(t){var e=t._init;return e(t._payload)}function y_(t){function e(w,x){if(t){var b=w.deletions;b===null?(w.deletions=[x],w.flags|=16):b.push(x)}}function n(w,x){if(!t)return null;for(;x!==null;)e(w,x),x=x.sibling;return null}function r(w,x){for(w=new Map;x!==null;)x.key!==null?w.set(x.key,x):w.set(x.index,x),x=x.sibling;return w}function s(w,x){return w=Vr(w,x),w.index=0,w.sibling=null,w}function i(w,x,b){return w.index=b,t?(b=w.alternate,b!==null?(b=b.index,b<x?(w.flags|=2,x):b):(w.flags|=2,x)):(w.flags|=1048576,x)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,x,b,D){return x===null||x.tag!==6?(x=Od(b,w.mode,D),x.return=w,x):(x=s(x,b),x.return=w,x)}function c(w,x,b,D){var M=b.type;return M===Js?f(w,x,b.props.children,D,b.key):x!==null&&(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===vr&&Cy(M)===x.type)?(D=s(x,b.props),D.ref=vo(w,x,b),D.return=w,D):(D=Kl(b.type,b.key,b.props,null,w.mode,D),D.ref=vo(w,x,b),D.return=w,D)}function d(w,x,b,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Ld(b,w.mode,D),x.return=w,x):(x=s(x,b.children||[]),x.return=w,x)}function f(w,x,b,D,M){return x===null||x.tag!==7?(x=ys(b,w.mode,D,M),x.return=w,x):(x=s(x,b),x.return=w,x)}function m(w,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Od(""+x,w.mode,b),x.return=w,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pl:return b=Kl(x.type,x.key,x.props,null,w.mode,b),b.ref=vo(w,null,x),b.return=w,b;case Xs:return x=Ld(x,w.mode,b),x.return=w,x;case vr:var D=x._init;return m(w,D(x._payload),b)}if(So(x)||fo(x))return x=ys(x,w.mode,b,null),x.return=w,x;Il(w,x)}return null}function g(w,x,b,D){var M=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return M!==null?null:l(w,x,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case pl:return b.key===M?c(w,x,b,D):null;case Xs:return b.key===M?d(w,x,b,D):null;case vr:return M=b._init,g(w,x,M(b._payload),D)}if(So(b)||fo(b))return M!==null?null:f(w,x,b,D,null);Il(w,b)}return null}function v(w,x,b,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(b)||null,l(x,w,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case pl:return w=w.get(D.key===null?b:D.key)||null,c(x,w,D,M);case Xs:return w=w.get(D.key===null?b:D.key)||null,d(x,w,D,M);case vr:var F=D._init;return v(w,x,b,F(D._payload),M)}if(So(D)||fo(D))return w=w.get(b)||null,f(x,w,D,M,null);Il(x,D)}return null}function S(w,x,b,D){for(var M=null,F=null,I=x,_=x=0,E=null;I!==null&&_<b.length;_++){I.index>_?(E=I,I=null):E=I.sibling;var T=g(w,I,b[_],D);if(T===null){I===null&&(I=E);break}t&&I&&T.alternate===null&&e(w,I),x=i(T,x,_),F===null?M=T:F.sibling=T,F=T,I=E}if(_===b.length)return n(w,I),Ee&&ss(w,_),M;if(I===null){for(;_<b.length;_++)I=m(w,b[_],D),I!==null&&(x=i(I,x,_),F===null?M=I:F.sibling=I,F=I);return Ee&&ss(w,_),M}for(I=r(w,I);_<b.length;_++)E=v(I,w,_,b[_],D),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?_:E.key),x=i(E,x,_),F===null?M=E:F.sibling=E,F=E);return t&&I.forEach(function(C){return e(w,C)}),Ee&&ss(w,_),M}function A(w,x,b,D){var M=fo(b);if(typeof M!="function")throw Error(U(150));if(b=M.call(b),b==null)throw Error(U(151));for(var F=M=null,I=x,_=x=0,E=null,T=b.next();I!==null&&!T.done;_++,T=b.next()){I.index>_?(E=I,I=null):E=I.sibling;var C=g(w,I,T.value,D);if(C===null){I===null&&(I=E);break}t&&I&&C.alternate===null&&e(w,I),x=i(C,x,_),F===null?M=C:F.sibling=C,F=C,I=E}if(T.done)return n(w,I),Ee&&ss(w,_),M;if(I===null){for(;!T.done;_++,T=b.next())T=m(w,T.value,D),T!==null&&(x=i(T,x,_),F===null?M=T:F.sibling=T,F=T);return Ee&&ss(w,_),M}for(I=r(w,I);!T.done;_++,T=b.next())T=v(I,w,_,T.value,D),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?_:T.key),x=i(T,x,_),F===null?M=T:F.sibling=T,F=T);return t&&I.forEach(function(R){return e(w,R)}),Ee&&ss(w,_),M}function N(w,x,b,D){if(typeof b=="object"&&b!==null&&b.type===Js&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case pl:e:{for(var M=b.key,F=x;F!==null;){if(F.key===M){if(M=b.type,M===Js){if(F.tag===7){n(w,F.sibling),x=s(F,b.props.children),x.return=w,w=x;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===vr&&Cy(M)===F.type){n(w,F.sibling),x=s(F,b.props),x.ref=vo(w,F,b),x.return=w,w=x;break e}n(w,F);break}else e(w,F);F=F.sibling}b.type===Js?(x=ys(b.props.children,w.mode,D,b.key),x.return=w,w=x):(D=Kl(b.type,b.key,b.props,null,w.mode,D),D.ref=vo(w,x,b),D.return=w,w=D)}return o(w);case Xs:e:{for(F=b.key;x!==null;){if(x.key===F)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){n(w,x.sibling),x=s(x,b.children||[]),x.return=w,w=x;break e}else{n(w,x);break}else e(w,x);x=x.sibling}x=Ld(b,w.mode,D),x.return=w,w=x}return o(w);case vr:return F=b._init,N(w,x,F(b._payload),D)}if(So(b))return S(w,x,b,D);if(fo(b))return A(w,x,b,D);Il(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(n(w,x.sibling),x=s(x,b),x.return=w,w=x):(n(w,x),x=Od(b,w.mode,D),x.return=w,w=x),o(w)):n(w,x)}return N}var Ni=y_(!0),v_=y_(!1),yc=Kr(null),vc=null,oi=null,ap=null;function lp(){ap=oi=vc=null}function cp(t){var e=yc.current;xe(yc),t._currentValue=e}function Fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gi(t,e){vc=t,ap=oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},oi===null){if(vc===null)throw Error(U(308));oi=t,vc.dependencies={lanes:0,firstContext:t}}else oi=oi.next=t;return e}var ds=null;function up(t){ds===null?ds=[t]:ds.push(t)}function w_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,up(e)):(n.next=s.next,s.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function __(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,er(t,n)}return s=r.interleaved,s===null?(e.next=e,up(r)):(e.next=s.next,s.next=e),r.interleaved=e,er(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yf(t,n)}}function Ry(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wc(t,e,n,r){var s=t.updateQueue;wr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(i!==null){var m=s.baseState;o=0,f=d=c=null,l=i;do{var g=l.lane,v=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,A=l;switch(g=e,v=n,A.tag){case 1:if(S=A.payload,typeof S=="function"){m=S.call(v,m,g);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,g=typeof S=="function"?S.call(v,m,g):S,g==null)break e;m=Ie({},m,g);break e;case 2:wr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=v,c=m):f=f.next=v,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(c=m),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);bs|=o,t.lanes=o,t.memoizedState=m}}function Py(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Ma={},In=Kr(Ma),la=Kr(Ma),ca=Kr(Ma);function hs(t){if(t===Ma)throw Error(U(174));return t}function hp(t,e){switch(ge(ca,e),ge(la,t),ge(In,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wh(e,t)}xe(In),ge(In,e)}function Ai(){xe(In),xe(la),xe(ca)}function x_(t){hs(ca.current);var e=hs(In.current),n=wh(e,t.type);e!==n&&(ge(la,t),ge(In,n))}function fp(t){la.current===t&&(xe(In),xe(la))}var be=Kr(0);function _c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ad=[];function pp(){for(var t=0;t<Ad.length;t++)Ad[t]._workInProgressVersionPrimary=null;Ad.length=0}var zl=ar.ReactCurrentDispatcher,Cd=ar.ReactCurrentBatchConfig,Es=0,Te=null,qe=null,He=null,xc=!1,Uo=!1,ua=0,CS=0;function ct(){throw Error(U(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fn(t[n],e[n]))return!1;return!0}function gp(t,e,n,r,s,i){if(Es=i,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?DS:OS,t=n(r,s),Uo){i=0;do{if(Uo=!1,ua=0,25<=i)throw Error(U(301));i+=1,He=qe=null,e.updateQueue=null,zl.current=LS,t=n(r,s)}while(Uo)}if(zl.current=Ec,e=qe!==null&&qe.next!==null,Es=0,He=qe=Te=null,xc=!1,e)throw Error(U(300));return t}function yp(){var t=ua!==0;return ua=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Te.memoizedState=He=t:He=He.next=t,He}function nn(){if(qe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=He===null?Te.memoizedState:He.next;if(e!==null)He=e,qe=t;else{if(t===null)throw Error(U(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},He===null?Te.memoizedState=He=t:He=He.next=t}return He}function da(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=nn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=qe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,d=i;do{var f=d.lane;if((Es&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,Te.lanes|=f,bs|=f}d=d.next}while(d!==null&&d!==i);c===null?o=r:c.next=l,fn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Te.lanes|=i,bs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pd(t){var e=nn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);fn(i,e.memoizedState)||(Pt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function E_(){}function b_(t,e){var n=Te,r=nn(),s=e(),i=!fn(r.memoizedState,s);if(i&&(r.memoizedState=s,Pt=!0),r=r.queue,vp(S_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,ha(9,I_.bind(null,n,r,s,e),void 0,null),Ke===null)throw Error(U(349));Es&30||T_(n,e,s)}return s}function T_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I_(t,e,n,r){e.value=n,e.getSnapshot=r,k_(e)&&N_(t)}function S_(t,e,n){return n(function(){k_(e)&&N_(t)})}function k_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fn(t,n)}catch{return!0}}function N_(t){var e=er(t,1);e!==null&&hn(e,t,1,-1)}function jy(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=jS.bind(null,Te,t),[e.memoizedState,t]}function ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function A_(){return nn().memoizedState}function ql(t,e,n,r){var s=vn();Te.flags|=t,s.memoizedState=ha(1|e,n,void 0,r===void 0?null:r)}function nu(t,e,n,r){var s=nn();r=r===void 0?null:r;var i=void 0;if(qe!==null){var o=qe.memoizedState;if(i=o.destroy,r!==null&&mp(r,o.deps)){s.memoizedState=ha(e,n,i,r);return}}Te.flags|=t,s.memoizedState=ha(1|e,n,i,r)}function Dy(t,e){return ql(8390656,8,t,e)}function vp(t,e){return nu(2048,8,t,e)}function C_(t,e){return nu(4,2,t,e)}function R_(t,e){return nu(4,4,t,e)}function P_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j_(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,P_.bind(null,e,t),n)}function wp(){}function D_(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function O_(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function L_(t,e,n){return Es&21?(fn(n,e)||(n=Bw(),Te.lanes|=n,bs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function RS(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Cd.transition;Cd.transition={};try{t(!1),e()}finally{de=n,Cd.transition=r}}function M_(){return nn().memoizedState}function PS(t,e,n){var r=Mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},V_(t))F_(e,n);else if(n=w_(t,e,n,r),n!==null){var s=bt();hn(n,t,r,s),U_(n,e,r)}}function jS(t,e,n){var r=Mr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(V_(t))F_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,fn(l,o)){var c=e.interleaved;c===null?(s.next=s,up(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=w_(t,e,s,r),n!==null&&(s=bt(),hn(n,t,r,s),U_(n,e,r))}}function V_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function F_(t,e){Uo=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yf(t,n)}}var Ec={readContext:tn,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},DS={readContext:tn,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:Dy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ql(4194308,4,P_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return ql(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PS.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:jy,useDebugValue:wp,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=jy(!1),e=t[0];return t=RS.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,s=vn();if(Ee){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ke===null)throw Error(U(349));Es&30||T_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Dy(S_.bind(null,r,i,t),[t]),r.flags|=2048,ha(9,I_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=vn(),e=Ke.identifierPrefix;if(Ee){var n=qn,r=zn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OS={readContext:tn,useCallback:D_,useContext:tn,useEffect:vp,useImperativeHandle:j_,useInsertionEffect:C_,useLayoutEffect:R_,useMemo:O_,useReducer:Rd,useRef:A_,useState:function(){return Rd(da)},useDebugValue:wp,useDeferredValue:function(t){var e=nn();return L_(e,qe.memoizedState,t)},useTransition:function(){var t=Rd(da)[0],e=nn().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:b_,useId:M_,unstable_isNewReconciler:!1},LS={readContext:tn,useCallback:D_,useContext:tn,useEffect:vp,useImperativeHandle:j_,useInsertionEffect:C_,useLayoutEffect:R_,useMemo:O_,useReducer:Pd,useRef:A_,useState:function(){return Pd(da)},useDebugValue:wp,useDeferredValue:function(t){var e=nn();return qe===null?e.memoizedState=t:L_(e,qe.memoizedState,t)},useTransition:function(){var t=Pd(da)[0],e=nn().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:b_,useId:M_,unstable_isNewReconciler:!1};function on(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?Ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),s=Mr(t),i=Kn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Or(t,i,s),e!==null&&(hn(e,t,s,r),$l(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),s=Mr(t),i=Kn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Or(t,i,s),e!==null&&(hn(e,t,s,r),$l(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Mr(t),s=Kn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Or(t,s,r),e!==null&&(hn(e,t,r,n),$l(e,t,r))}};function Oy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(s,i):!0}function B_(t,e,n){var r=!1,s=zr,i=e.contextType;return typeof i=="object"&&i!==null?i=tn(i):(s=Dt(e)?_s:gt.current,r=e.contextTypes,i=(r=r!=null)?Si(t,s):zr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Ly(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function Bh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},dp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=tn(i):(i=Dt(e)?_s:gt.current,s.context=Si(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Uh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ru.enqueueReplaceState(s,s.state,null),wc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e){try{var n="",r=e;do n+=uI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function jd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function $_(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tc||(Tc=!0,Jh=r),$h(t,e)},n}function z_(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){$h(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$h(t,e),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function My(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=XS.bind(null,t,e,n),e.then(t,t))}function Vy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Or(n,e,1))),n.lanes|=1),t)}var VS=ar.ReactCurrentOwner,Pt=!1;function Et(t,e,n,r){e.child=t===null?v_(e,null,n,r):Ni(e,t.child,n,r)}function Uy(t,e,n,r,s){n=n.render;var i=e.ref;return gi(e,s),r=gp(t,e,n,r,i,s),n=yp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,tr(t,e,s)):(Ee&&n&&sp(e),e.flags|=1,Et(t,e,r,s),e.child)}function By(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!kp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,q_(t,e,i,r,s)):(t=Kl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return tr(t,e,s)}return e.flags|=1,t=Vr(i,r),t.ref=e.ref,t.return=e,e.child=t}function q_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(sa(i,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,tr(t,e,s)}return zh(t,e,n,r,s)}function W_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(li,Vt),Vt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(li,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(li,Vt),Vt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(li,Vt),Vt|=r;return Et(t,e,s,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zh(t,e,n,r,s){var i=Dt(n)?_s:gt.current;return i=Si(e,i),gi(e,s),n=gp(t,e,n,r,i,s),r=yp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,tr(t,e,s)):(Ee&&r&&sp(e),e.flags|=1,Et(t,e,n,s),e.child)}function $y(t,e,n,r,s){if(Dt(n)){var i=!0;pc(e)}else i=!1;if(gi(e,s),e.stateNode===null)Wl(t,e),B_(e,n,r),Bh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=tn(d):(d=Dt(n)?_s:gt.current,d=Si(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&Ly(e,o,r,d),wr=!1;var g=e.memoizedState;o.state=g,wc(e,r,o,s),c=e.memoizedState,l!==r||g!==c||jt.current||wr?(typeof f=="function"&&(Uh(e,n,f,r),c=e.memoizedState),(l=wr||Oy(e,n,l,r,g,c,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,__(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:on(e.type,l),o.props=d,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=tn(c):(c=Dt(n)?_s:gt.current,c=Si(e,c));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&Ly(e,o,r,c),wr=!1,g=e.memoizedState,o.state=g,wc(e,r,o,s);var S=e.memoizedState;l!==m||g!==S||jt.current||wr?(typeof v=="function"&&(Uh(e,n,v,r),S=e.memoizedState),(d=wr||Oy(e,n,d,r,g,S,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return qh(t,e,n,r,i,s)}function qh(t,e,n,r,s,i){G_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&ky(e,n,!1),tr(t,e,i);r=e.stateNode,VS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,i),e.child=Ni(e,null,l,i)):Et(t,e,l,i),e.memoizedState=r.state,s&&ky(e,n,!0),e.child}function H_(t){var e=t.stateNode;e.pendingContext?Sy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sy(t,e.context,!1),hp(t,e.containerInfo)}function zy(t,e,n,r,s){return ki(),op(s),e.flags|=256,Et(t,e,n,r),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function Gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function K_(t,e,n){var r=e.pendingProps,s=be.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(be,s&1),t===null)return Vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ou(o,r,0,null),t=ys(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Gh(n),e.memoizedState=Wh,t):_p(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return FS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Vr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Vr(l,i):(i=ys(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Gh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Wh,r}return i=t.child,t=i.sibling,r=Vr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _p(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sl(t,e,n,r){return r!==null&&op(r),Ni(e,t.child,null,n),t=_p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=jd(Error(U(422))),Sl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ou({mode:"visible",children:r.children},s,0,null),i=ys(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=Gh(o),e.memoizedState=Wh,i);if(!(e.mode&1))return Sl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=jd(i,r,void 0),Sl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Pt||l){if(r=Ke,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,er(t,s),hn(r,t,s,-1))}return Sp(),r=jd(Error(U(421))),Sl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=JS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ut=Dr(s.nextSibling),$t=e,Ee=!0,cn=null,t!==null&&(Kt[Qt++]=zn,Kt[Qt++]=qn,Kt[Qt++]=xs,zn=t.id,qn=t.overflow,xs=e),e=_p(e,r.children),e.flags|=4096,e)}function qy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fh(t.return,e,n)}function Dd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Q_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Et(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qy(t,n,e);else if(t.tag===19)qy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(be,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&_c(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&_c(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dd(e,!0,n,null,i);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function US(t,e,n){switch(e.tag){case 3:H_(e),ki();break;case 5:x_(e);break;case 1:Dt(e.type)&&pc(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(yc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?K_(t,e,n):(ge(be,be.current&1),t=tr(t,e,n),t!==null?t.sibling:null);ge(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Q_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,W_(t,e,n)}return tr(t,e,n)}var Y_,Hh,X_,J_;Y_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hh=function(){};X_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,hs(In.current);var i=null;switch(n){case"input":s=mh(t,s),r=mh(t,r),i=[];break;case"select":s=Ie({},s,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":s=vh(t,s),r=vh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hc)}_h(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&we("scroll",t),i||l===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};J_=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function BS(t,e,n){var r=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Dt(e.type)&&fc(),ut(e),null;case 3:return r=e.stateNode,Ai(),xe(jt),xe(gt),pp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(tf(cn),cn=null))),Hh(t,e),ut(e),null;case 5:fp(e);var s=hs(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)X_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return ut(e),null}if(t=hs(In.current),Tl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[wn]=e,r[aa]=i,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(s=0;s<No.length;s++)we(No[s],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Zg(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":ty(r,i),we("invalid",r)}_h(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&bl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&bl(r.textContent,l,t),s=["children",""+l]):Xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":ml(r),ey(r,i,!0);break;case"textarea":ml(r),ny(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[aa]=r,Y_(t,e,!1,!1),e.stateNode=t;e:{switch(o=xh(n,r),n){case"dialog":we("cancel",t),we("close",t),s=r;break;case"iframe":case"object":case"embed":we("load",t),s=r;break;case"video":case"audio":for(s=0;s<No.length;s++)we(No[s],t);s=r;break;case"source":we("error",t),s=r;break;case"img":case"image":case"link":we("error",t),we("load",t),s=r;break;case"details":we("toggle",t),s=r;break;case"input":Zg(t,r),s=mh(t,r),we("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ie({},r,{value:void 0}),we("invalid",t);break;case"textarea":ty(t,r),s=vh(t,r),we("invalid",t);break;default:s=r}_h(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Aw(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&kw(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Jo(t,c):typeof c=="number"&&Jo(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xo.hasOwnProperty(i)?c!=null&&i==="onScroll"&&we("scroll",t):c!=null&&qf(t,i,c,o))}switch(n){case"input":ml(t),ey(t,r,!1);break;case"textarea":ml(t),ny(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?hi(t,!!r.multiple,i,!1):r.defaultValue!=null&&hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=hc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)J_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=hs(ca.current),hs(In.current),Tl(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(i=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return ut(e),null;case 13:if(xe(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ut!==null&&e.mode&1&&!(e.flags&128))g_(),ki(),e.flags|=98560,i=!1;else if(i=Tl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[wn]=e}else ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),i=!1}else cn!==null&&(tf(cn),cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?We===0&&(We=3):Sp())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return Ai(),Hh(t,e),t===null&&ia(e.stateNode.containerInfo),ut(e),null;case 10:return cp(e.type._context),ut(e),null;case 17:return Dt(e.type)&&fc(),ut(e),null;case 19:if(xe(be),i=e.memoizedState,i===null)return ut(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)wo(i,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_c(t),o!==null){for(e.flags|=128,wo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(be,be.current&1|2),e.child}t=t.sibling}i.tail!==null&&De()>Ri&&(e.flags|=128,r=!0,wo(i,!1),e.lanes=4194304)}else{if(!r)if(t=_c(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ee)return ut(e),null}else 2*De()-i.renderingStartTime>Ri&&n!==1073741824&&(e.flags|=128,r=!0,wo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=De(),e.sibling=null,n=be.current,ge(be,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Ip(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function $S(t,e){switch(ip(e),e.tag){case 1:return Dt(e.type)&&fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ai(),xe(jt),xe(gt),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fp(e),null;case 13:if(xe(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(be),null;case 4:return Ai(),null;case 10:return cp(e.type._context),null;case 22:case 23:return Ip(),null;case 24:return null;default:return null}}var kl=!1,ft=!1,zS=typeof WeakSet=="function"?WeakSet:Set,q=null;function ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Kh(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Wy=!1;function qS(t,e){if(Rh=cc,t=r_(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,f=0,m=t,g=null;t:for(;;){for(var v;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===t)break t;if(g===n&&++d===s&&(l=o),g===i&&++f===r&&(c=o),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ph={focusedElem:t,selectionRange:n},cc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,N=S.memoizedState,w=e.stateNode,x=w.getSnapshotBeforeUpdate(e.elementType===e.type?A:on(e.type,A),N);w.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Ne(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return S=Wy,Wy=!1,S}function Bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Kh(e,n,i)}s=s.next}while(s!==r)}}function su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Z_(t){var e=t.alternate;e!==null&&(t.alternate=null,Z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[aa],delete e[Oh],delete e[SS],delete e[kS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ex(t){return t.tag===5||t.tag===3||t.tag===4}function Gy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ex(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hc));else if(r!==4&&(t=t.child,t!==null))for(Yh(t,e,n),t=t.sibling;t!==null;)Yh(t,e,n),t=t.sibling}function Xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xh(t,e,n),t=t.sibling;t!==null;)Xh(t,e,n),t=t.sibling}var Je=null,an=!1;function pr(t,e,n){for(n=n.child;n!==null;)tx(t,e,n),n=n.sibling}function tx(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Yc,n)}catch{}switch(n.tag){case 5:ft||ai(n,e);case 6:var r=Je,s=an;Je=null,pr(t,e,n),Je=r,an=s,Je!==null&&(an?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(an?(t=Je,n=n.stateNode,t.nodeType===8?kd(t.parentNode,n):t.nodeType===1&&kd(t,n),na(t)):kd(Je,n.stateNode));break;case 4:r=Je,s=an,Je=n.stateNode.containerInfo,an=!0,pr(t,e,n),Je=r,an=s;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Kh(n,e,o),s=s.next}while(s!==r)}pr(t,e,n);break;case 1:if(!ft&&(ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,pr(t,e,n),ft=r):pr(t,e,n);break;default:pr(t,e,n)}}function Hy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zS),e.forEach(function(r){var s=ZS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,an=!1;break e;case 3:Je=l.stateNode.containerInfo,an=!0;break e;case 4:Je=l.stateNode.containerInfo,an=!0;break e}l=l.return}if(Je===null)throw Error(U(160));tx(i,o,s),Je=null,an=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){Ne(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nx(e,t),e=e.sibling}function nx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),yn(t),r&4){try{Bo(3,t,t.return),su(3,t)}catch(A){Ne(t,t.return,A)}try{Bo(5,t,t.return)}catch(A){Ne(t,t.return,A)}}break;case 1:sn(e,t),yn(t),r&512&&n!==null&&ai(n,n.return);break;case 5:if(sn(e,t),yn(t),r&512&&n!==null&&ai(n,n.return),t.flags&32){var s=t.stateNode;try{Jo(s,"")}catch(A){Ne(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Tw(s,i),xh(l,o);var d=xh(l,i);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?Aw(s,m):f==="dangerouslySetInnerHTML"?kw(s,m):f==="children"?Jo(s,m):qf(s,f,m,d)}switch(l){case"input":gh(s,i);break;case"textarea":Iw(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?hi(s,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?hi(s,!!i.multiple,i.defaultValue,!0):hi(s,!!i.multiple,i.multiple?[]:"",!1))}s[aa]=i}catch(A){Ne(t,t.return,A)}}break;case 6:if(sn(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){Ne(t,t.return,A)}}break;case 3:if(sn(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(A){Ne(t,t.return,A)}break;case 4:sn(e,t),yn(t);break;case 13:sn(e,t),yn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(bp=De())),r&4&&Hy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(d=ft)||f,sn(e,t),ft=d):sn(e,t),yn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(g=q,v=g.child,g.tag){case 0:case 11:case 14:case 15:Bo(4,g,g.return);break;case 1:ai(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(A){Ne(r,n,A)}}break;case 5:ai(g,g.return);break;case 22:if(g.memoizedState!==null){Qy(m);continue}}v!==null?(v.return=g,q=v):Qy(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Nw("display",o))}catch(A){Ne(t,t.return,A)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(A){Ne(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:sn(e,t),yn(t),r&4&&Hy(t);break;case 21:break;default:sn(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ex(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Jo(s,""),r.flags&=-33);var i=Gy(t);Xh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Gy(t);Yh(t,l,o);break;default:throw Error(U(161))}}catch(c){Ne(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WS(t,e,n){q=t,rx(t)}function rx(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||kl;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||ft;l=kl;var d=ft;if(kl=o,(ft=c)&&!d)for(q=s;q!==null;)o=q,c=o.child,o.tag===22&&o.memoizedState!==null?Yy(s):c!==null?(c.return=o,q=c):Yy(s);for(;i!==null;)q=i,rx(i),i=i.sibling;q=s,kl=l,ft=d}Ky(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Ky(t)}}function Ky(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||su(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Py(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Py(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&na(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ft||e.flags&512&&Qh(e)}catch(g){Ne(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Qy(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Yy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{su(4,e)}catch(c){Ne(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){Ne(e,s,c)}}var i=e.return;try{Qh(e)}catch(c){Ne(e,i,c)}break;case 5:var o=e.return;try{Qh(e)}catch(c){Ne(e,o,c)}}}catch(c){Ne(e,e.return,c)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var GS=Math.ceil,bc=ar.ReactCurrentDispatcher,xp=ar.ReactCurrentOwner,Zt=ar.ReactCurrentBatchConfig,oe=0,Ke=null,Fe=null,nt=0,Vt=0,li=Kr(0),We=0,fa=null,bs=0,iu=0,Ep=0,$o=null,Ct=null,bp=0,Ri=1/0,Un=null,Tc=!1,Jh=null,Lr=null,Nl=!1,Nr=null,Ic=0,zo=0,Zh=null,Gl=-1,Hl=0;function bt(){return oe&6?De():Gl!==-1?Gl:Gl=De()}function Mr(t){return t.mode&1?oe&2&&nt!==0?nt&-nt:AS.transition!==null?(Hl===0&&(Hl=Bw()),Hl):(t=de,t!==0||(t=window.event,t=t===void 0?16:Kw(t.type)),t):1}function hn(t,e,n,r){if(50<zo)throw zo=0,Zh=null,Error(U(185));Da(t,n,r),(!(oe&2)||t!==Ke)&&(t===Ke&&(!(oe&2)&&(iu|=n),We===4&&xr(t,nt)),Ot(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ri=De()+500,tu&&Qr()))}function Ot(t,e){var n=t.callbackNode;AI(t,e);var r=lc(t,t===Ke?nt:0);if(r===0)n!==null&&iy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&iy(n),e===1)t.tag===0?NS(Xy.bind(null,t)):f_(Xy.bind(null,t)),TS(function(){!(oe&6)&&Qr()}),n=null;else{switch($w(r)){case 1:n=Qf;break;case 4:n=Fw;break;case 16:n=ac;break;case 536870912:n=Uw;break;default:n=ac}n=dx(n,sx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sx(t,e){if(Gl=-1,Hl=0,oe&6)throw Error(U(327));var n=t.callbackNode;if(yi()&&t.callbackNode!==n)return null;var r=lc(t,t===Ke?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sc(t,r);else{e=r;var s=oe;oe|=2;var i=ox();(Ke!==t||nt!==e)&&(Un=null,Ri=De()+500,gs(t,e));do try{QS();break}catch(l){ix(t,l)}while(!0);lp(),bc.current=i,oe=s,Fe!==null?e=0:(Ke=null,nt=0,e=We)}if(e!==0){if(e===2&&(s=Sh(t),s!==0&&(r=s,e=ef(t,s))),e===1)throw n=fa,gs(t,0),xr(t,r),Ot(t,De()),n;if(e===6)xr(t,r);else{if(s=t.current.alternate,!(r&30)&&!HS(s)&&(e=Sc(t,r),e===2&&(i=Sh(t),i!==0&&(r=i,e=ef(t,i))),e===1))throw n=fa,gs(t,0),xr(t,r),Ot(t,De()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:is(t,Ct,Un);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=bp+500-De(),10<e)){if(lc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Dh(is.bind(null,t,Ct,Un),e);break}is(t,Ct,Un);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-dn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GS(r/1960))-r,10<r){t.timeoutHandle=Dh(is.bind(null,t,Ct,Un),r);break}is(t,Ct,Un);break;case 5:is(t,Ct,Un);break;default:throw Error(U(329))}}}return Ot(t,De()),t.callbackNode===n?sx.bind(null,t):null}function ef(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&tf(e)),t}function tf(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function HS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!fn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~Ep,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function Xy(t){if(oe&6)throw Error(U(327));yi();var e=lc(t,0);if(!(e&1))return Ot(t,De()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var r=Sh(t);r!==0&&(e=r,n=ef(t,r))}if(n===1)throw n=fa,gs(t,0),xr(t,e),Ot(t,De()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,is(t,Ct,Un),Ot(t,De()),null}function Tp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ri=De()+500,tu&&Qr())}}function Ts(t){Nr!==null&&Nr.tag===0&&!(oe&6)&&yi();var e=oe;oe|=1;var n=Zt.transition,r=de;try{if(Zt.transition=null,de=1,t)return t()}finally{de=r,Zt.transition=n,oe=e,!(oe&6)&&Qr()}}function Ip(){Vt=li.current,xe(li)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bS(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fc();break;case 3:Ai(),xe(jt),xe(gt),pp();break;case 5:fp(r);break;case 4:Ai();break;case 13:xe(be);break;case 19:xe(be);break;case 10:cp(r.type._context);break;case 22:case 23:Ip()}n=n.return}if(Ke=t,Fe=t=Vr(t.current,null),nt=Vt=e,We=0,fa=null,Ep=iu=bs=0,Ct=$o=null,ds!==null){for(e=0;e<ds.length;e++)if(n=ds[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ds=null}return t}function ix(t,e){do{var n=Fe;try{if(lp(),zl.current=Ec,xc){for(var r=Te.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xc=!1}if(Es=0,He=qe=Te=null,Uo=!1,ua=0,xp.current=null,n===null||n.return===null){We=1,fa=e,Fe=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=nt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Vy(o);if(v!==null){v.flags&=-257,Fy(v,o,l,i,e),v.mode&1&&My(i,d,e),e=v,c=d;var S=e.updateQueue;if(S===null){var A=new Set;A.add(c),e.updateQueue=A}else S.add(c);break e}else{if(!(e&1)){My(i,d,e),Sp();break e}c=Error(U(426))}}else if(Ee&&l.mode&1){var N=Vy(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Fy(N,o,l,i,e),op(Ci(c,l));break e}}i=c=Ci(c,l),We!==4&&(We=2),$o===null?$o=[i]:$o.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=$_(i,c,e);Ry(i,w);break e;case 1:l=c;var x=i.type,b=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Lr===null||!Lr.has(b)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=z_(i,l,e);Ry(i,D);break e}}i=i.return}while(i!==null)}lx(n)}catch(M){e=M,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function ox(){var t=bc.current;return bc.current=Ec,t===null?Ec:t}function Sp(){(We===0||We===3||We===2)&&(We=4),Ke===null||!(bs&268435455)&&!(iu&268435455)||xr(Ke,nt)}function Sc(t,e){var n=oe;oe|=2;var r=ox();(Ke!==t||nt!==e)&&(Un=null,gs(t,e));do try{KS();break}catch(s){ix(t,s)}while(!0);if(lp(),oe=n,bc.current=r,Fe!==null)throw Error(U(261));return Ke=null,nt=0,We}function KS(){for(;Fe!==null;)ax(Fe)}function QS(){for(;Fe!==null&&!_I();)ax(Fe)}function ax(t){var e=ux(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?lx(t):Fe=e,xp.current=null}function lx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$S(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Fe=null;return}}else if(n=BS(n,e,Vt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);We===0&&(We=5)}function is(t,e,n){var r=de,s=Zt.transition;try{Zt.transition=null,de=1,YS(t,e,n,r)}finally{Zt.transition=s,de=r}return null}function YS(t,e,n,r){do yi();while(Nr!==null);if(oe&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(CI(t,i),t===Ke&&(Fe=Ke=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,dx(ac,function(){return yi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Zt.transition,Zt.transition=null;var o=de;de=1;var l=oe;oe|=4,xp.current=null,qS(t,n),nx(n,t),gS(Ph),cc=!!Rh,Ph=Rh=null,t.current=n,WS(n),xI(),oe=l,de=o,Zt.transition=i}else t.current=n;if(Nl&&(Nl=!1,Nr=t,Ic=s),i=t.pendingLanes,i===0&&(Lr=null),TI(n.stateNode),Ot(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Tc)throw Tc=!1,t=Jh,Jh=null,t;return Ic&1&&t.tag!==0&&yi(),i=t.pendingLanes,i&1?t===Zh?zo++:(zo=0,Zh=t):zo=0,Qr(),null}function yi(){if(Nr!==null){var t=$w(Ic),e=Zt.transition,n=de;try{if(Zt.transition=null,de=16>t?16:t,Nr===null)var r=!1;else{if(t=Nr,Nr=null,Ic=0,oe&6)throw Error(U(331));var s=oe;for(oe|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(q=d;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Bo(8,f,i)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var g=f.sibling,v=f.return;if(Z_(f),f===d){q=null;break}if(g!==null){g.return=v,q=g;break}q=v}}}var S=i.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bo(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,q=w;break e}q=i.return}}var x=t.current;for(q=x;q!==null;){o=q;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,q=b;else e:for(o=x;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:su(9,l)}}catch(M){Ne(l,l.return,M)}if(l===o){q=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,q=D;break e}q=l.return}}if(oe=s,Qr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Yc,t)}catch{}r=!0}return r}finally{de=n,Zt.transition=e}}return!1}function Jy(t,e,n){e=Ci(n,e),e=$_(t,e,1),t=Or(t,e,1),e=bt(),t!==null&&(Da(t,1,e),Ot(t,e))}function Ne(t,e,n){if(t.tag===3)Jy(t,t,n);else for(;e!==null;){if(e.tag===3){Jy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){t=Ci(n,t),t=z_(e,t,1),e=Or(e,t,1),t=bt(),e!==null&&(Da(e,1,t),Ot(e,t));break}}e=e.return}}function XS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(nt&n)===n&&(We===4||We===3&&(nt&130023424)===nt&&500>De()-bp?gs(t,0):Ep|=n),Ot(t,e)}function cx(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=bt();t=er(t,e),t!==null&&(Da(t,e,n),Ot(t,n))}function JS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cx(t,n)}function ZS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),cx(t,n)}var ux;ux=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||jt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,US(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,Ee&&e.flags&1048576&&p_(e,gc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wl(t,e),t=e.pendingProps;var s=Si(e,gt.current);gi(e,n),s=gp(null,e,r,t,s,n);var i=yp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(i=!0,pc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,dp(e),s.updater=ru,e.stateNode=s,s._reactInternals=e,Bh(e,r,t,n),e=qh(null,e,r,!0,i,n)):(e.tag=0,Ee&&i&&sp(e),Et(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=tk(r),t=on(r,t),s){case 0:e=zh(null,e,r,t,n);break e;case 1:e=$y(null,e,r,t,n);break e;case 11:e=Uy(null,e,r,t,n);break e;case 14:e=By(null,e,r,on(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),zh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),$y(t,e,r,s,n);case 3:e:{if(H_(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,__(t,e),wc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ci(Error(U(423)),e),e=zy(t,e,r,n,s);break e}else if(r!==s){s=Ci(Error(U(424)),e),e=zy(t,e,r,n,s);break e}else for(Ut=Dr(e.stateNode.containerInfo.firstChild),$t=e,Ee=!0,cn=null,n=v_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===s){e=tr(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return x_(e),t===null&&Vh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,jh(r,s)?o=null:i!==null&&jh(r,i)&&(e.flags|=32),G_(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Vh(e),null;case 13:return K_(t,e,n);case 4:return hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),Uy(t,e,r,s,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(yc,r._currentValue),r._currentValue=o,i!==null)if(fn(i.value,o)){if(i.children===s.children&&!jt.current){e=tr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Kn(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Fh(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Et(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,gi(e,n),s=tn(s),r=r(s),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,s=on(r,e.pendingProps),s=on(r.type,s),By(t,e,r,s,n);case 15:return q_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),Wl(t,e),e.tag=1,Dt(r)?(t=!0,pc(e)):t=!1,gi(e,n),B_(e,r,s),Bh(e,r,s,n),qh(null,e,r,!0,t,n);case 19:return Q_(t,e,n);case 22:return W_(t,e,n)}throw Error(U(156,e.tag))};function dx(t,e){return Vw(t,e)}function ek(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new ek(t,e,n,r)}function kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tk(t){if(typeof t=="function")return kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gf)return 11;if(t===Hf)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")kp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Js:return ys(n.children,s,i,e);case Wf:o=8,s|=8;break;case dh:return t=Xt(12,n,e,s|2),t.elementType=dh,t.lanes=i,t;case hh:return t=Xt(13,n,e,s),t.elementType=hh,t.lanes=i,t;case fh:return t=Xt(19,n,e,s),t.elementType=fh,t.lanes=i,t;case xw:return ou(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ww:o=10;break e;case _w:o=9;break e;case Gf:o=11;break e;case Hf:o=14;break e;case vr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ys(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function ou(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=xw,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nk(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gd(0),this.expirationTimes=gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Np(t,e,n,r,s,i,o,l,c){return t=new nk(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Xt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(i),t}function rk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hx(t){if(!t)return zr;t=t._reactInternals;e:{if(Ls(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Dt(n))return h_(t,n,e)}return e}function fx(t,e,n,r,s,i,o,l,c){return t=Np(n,r,!0,t,s,i,o,l,c),t.context=hx(null),n=t.current,r=bt(),s=Mr(n),i=Kn(r,s),i.callback=e??null,Or(n,i,s),t.current.lanes=s,Da(t,s,r),Ot(t,r),t}function au(t,e,n,r){var s=e.current,i=bt(),o=Mr(s);return n=hx(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Or(s,e,o),t!==null&&(hn(t,s,o,i),$l(t,s,o)),o}function kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){Zy(t,e),(t=t.alternate)&&Zy(t,e)}function sk(){return null}var px=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}lu.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));au(t,e,null,null)};lu.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ts(function(){au(null,t,null,null)}),e[Zn]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ww();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&Hw(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function e0(){}function ik(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=kc(o);i.call(d)}}var o=fx(e,r,t,0,null,!1,!1,"",e0);return t._reactRootContainer=o,t[Zn]=o.current,ia(t.nodeType===8?t.parentNode:t),Ts(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=kc(c);l.call(d)}}var c=Np(t,0,!1,null,null,!1,!1,"",e0);return t._reactRootContainer=c,t[Zn]=c.current,ia(t.nodeType===8?t.parentNode:t),Ts(function(){au(e,c,n,r)}),c}function uu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=kc(o);l.call(c)}}au(e,o,t,s)}else o=ik(n,e,t,s,r);return kc(o)}zw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(Yf(e,n|1),Ot(e,De()),!(oe&6)&&(Ri=De()+500,Qr()))}break;case 13:Ts(function(){var r=er(t,1);if(r!==null){var s=bt();hn(r,t,1,s)}}),Ap(t,1)}};Xf=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=bt();hn(e,t,134217728,n)}Ap(t,134217728)}};qw=function(t){if(t.tag===13){var e=Mr(t),n=er(t,e);if(n!==null){var r=bt();hn(n,t,e,r)}Ap(t,e)}};Ww=function(){return de};Gw=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};bh=function(t,e,n){switch(e){case"input":if(gh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=eu(r);if(!s)throw Error(U(90));bw(r),gh(r,s)}}}break;case"textarea":Iw(t,n);break;case"select":e=n.value,e!=null&&hi(t,!!n.multiple,e,!1)}};Pw=Tp;jw=Ts;var ok={usingClientEntryPoint:!1,Events:[La,ni,eu,Cw,Rw,Tp]},_o={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ak={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lw(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||sk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Yc=Al.inject(ak),Tn=Al}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ok;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(U(200));return rk(t,e,null,n)};Wt.createRoot=function(t,e){if(!Rp(t))throw Error(U(299));var n=!1,r="",s=px;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Np(t,1,!1,null,null,n,!1,r,s),t[Zn]=e.current,ia(t.nodeType===8?t.parentNode:t),new Cp(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Lw(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return Ts(t)};Wt.hydrate=function(t,e,n){if(!cu(e))throw Error(U(200));return uu(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=px;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fx(e,null,t,1,n??null,s,!1,i,o),t[Zn]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new lu(e)};Wt.render=function(t,e,n){if(!cu(e))throw Error(U(200));return uu(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!cu(t))throw Error(U(40));return t._reactRootContainer?(Ts(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};Wt.unstable_batchedUpdates=Tp;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return uu(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mx)}catch(t){console.error(t)}}mx(),mw.exports=Wt;var lk=mw.exports,t0=lk;ch.createRoot=t0.createRoot,ch.hydrateRoot=t0.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}var Ar;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ar||(Ar={}));const n0="popstate";function ck(t){t===void 0&&(t={});function e(s,i){let{pathname:o="/",search:l="",hash:c=""}=Ms(s.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),nf("",{pathname:o,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(s,i){let o=s.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let c=s.location.href,d=c.indexOf("#");l=d===-1?c:c.slice(0,d)}return l+"#"+(typeof i=="string"?i:Nc(i))}function r(s,i){du(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return dk(e,n,r,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function du(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uk(){return Math.random().toString(36).substr(2,8)}function r0(t,e){return{usr:t.state,key:t.key,idx:e}}function nf(t,e,n,r){return n===void 0&&(n=null),pa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ms(e):e,{state:n,key:e&&e.key||r||uk()})}function Nc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dk(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=Ar.Pop,c=null,d=f();d==null&&(d=0,o.replaceState(pa({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=Ar.Pop;let N=f(),w=N==null?null:N-d;d=N,c&&c({action:l,location:A.location,delta:w})}function g(N,w){l=Ar.Push;let x=nf(A.location,N,w);n&&n(x,N),d=f()+1;let b=r0(x,d),D=A.createHref(x);try{o.pushState(b,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;s.location.assign(D)}i&&c&&c({action:l,location:A.location,delta:1})}function v(N,w){l=Ar.Replace;let x=nf(A.location,N,w);n&&n(x,N),d=f();let b=r0(x,d),D=A.createHref(x);o.replaceState(b,"",D),i&&c&&c({action:l,location:A.location,delta:0})}function S(N){let w=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof N=="string"?N:Nc(N);return Oe(w,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,w)}let A={get action(){return l},get location(){return t(s,o)},listen(N){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(n0,m),c=N,()=>{s.removeEventListener(n0,m),c=null}},createHref(N){return e(s,N)},createURL:S,encodeLocation(N){let w=S(N);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:v,go(N){return o.go(N)}};return A}var s0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(s0||(s0={}));function hk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ms(e):e,s=Pp(r.pathname||"/",n);if(s==null)return null;let i=gx(t);fk(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=Ek(i[l],Ik(s));return o}function gx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Oe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Fr([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(Oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),gx(i.children,e,f,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:_k(d,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let c of yx(i.path))s(i,o,c)}),e}function yx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=yx(r.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function fk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pk=/^:[\w-]+$/,mk=3,gk=2,yk=1,vk=10,wk=-2,i0=t=>t==="*";function _k(t,e){let n=t.split("/"),r=n.length;return n.some(i0)&&(r+=wk),e&&(r+=gk),n.filter(s=>!i0(s)).reduce((s,i)=>s+(pk.test(i)?mk:i===""?yk:vk),r)}function xk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function Ek(t,e){let{routesMeta:n}=t,r={},s="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=bk({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d);if(!f)return null;Object.assign(r,f.params);let m=l.route;i.push({params:r,pathname:Fr([s,f.pathname]),pathnameBase:Ck(Fr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Fr([s,f.pathnameBase]))}return i}function bk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Tk(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let A=l[m]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const S=l[m];return v&&!S?d[g]=void 0:d[g]=Sk(S||"",g),d},{}),pathname:i,pathnameBase:o,pattern:t}}function Tk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),du(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function Ik(t){try{return decodeURI(t)}catch(e){return du(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sk(t,e){try{return decodeURIComponent(t)}catch(n){return du(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Pp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function kk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Ms(t):t;return{pathname:n?n.startsWith("/")?n:Nk(n,e):e,search:Rk(r),hash:Pk(s)}}function Nk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Md(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ak(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jp(t,e){let n=Ak(t);return e?n.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dp(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Ms(t):(s=pa({},t),Oe(!s.pathname||!s.pathname.includes("?"),Md("?","pathname","search",s)),Oe(!s.pathname||!s.pathname.includes("#"),Md("#","pathname","hash",s)),Oe(!s.search||!s.search.includes("#"),Md("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let c=kk(s,l),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}const Fr=t=>t.join("/").replace(/\/\/+/g,"/"),Ck=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Rk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Pk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vx=["post","put","patch","delete"];new Set(vx);const Dk=["get",...vx];new Set(Dk);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ma.apply(this,arguments)}const Op=P.createContext(null),Ok=P.createContext(null),Yr=P.createContext(null),hu=P.createContext(null),Rn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),wx=P.createContext(null);function Lk(t,e){let{relative:n}=e===void 0?{}:e;zi()||Oe(!1);let{basename:r,navigator:s}=P.useContext(Yr),{hash:i,pathname:o,search:l}=xx(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Fr([r,o])),s.createHref({pathname:c,search:l,hash:i})}function zi(){return P.useContext(hu)!=null}function qi(){return zi()||Oe(!1),P.useContext(hu).location}function _x(t){P.useContext(Yr).static||P.useLayoutEffect(t)}function lr(){let{isDataRoute:t}=P.useContext(Rn);return t?Jk():Mk()}function Mk(){zi()||Oe(!1);let t=P.useContext(Op),{basename:e,future:n,navigator:r}=P.useContext(Yr),{matches:s}=P.useContext(Rn),{pathname:i}=qi(),o=JSON.stringify(jp(s,n.v7_relativeSplatPath)),l=P.useRef(!1);return _x(()=>{l.current=!0}),P.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=Dp(d,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Fr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,i,t])}const Vk=P.createContext(null);function Fk(t){let e=P.useContext(Rn).outlet;return e&&P.createElement(Vk.Provider,{value:t},e)}function Uk(){let{matches:t}=P.useContext(Rn),e=t[t.length-1];return e?e.params:{}}function xx(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=P.useContext(Yr),{matches:s}=P.useContext(Rn),{pathname:i}=qi(),o=JSON.stringify(jp(s,r.v7_relativeSplatPath));return P.useMemo(()=>Dp(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function Bk(t,e){return $k(t,e)}function $k(t,e,n,r){zi()||Oe(!1);let{navigator:s}=P.useContext(Yr),{matches:i}=P.useContext(Rn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=qi(),f;if(e){var m;let N=typeof e=="string"?Ms(e):e;c==="/"||(m=N.pathname)!=null&&m.startsWith(c)||Oe(!1),f=N}else f=d;let g=f.pathname||"/",v=c==="/"?g:g.slice(c.length)||"/",S=hk(t,{pathname:v}),A=Hk(S&&S.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Fr([c,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:Fr([c,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,n,r);return e&&A?P.createElement(hu.Provider,{value:{location:ma({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ar.Pop}},A):A}function zk(){let t=Xk(),e=jk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:s},n):null,null)}const qk=P.createElement(zk,null);class Wk extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(Rn.Provider,{value:this.props.routeContext},P.createElement(wx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gk(t){let{routeContext:e,match:n,children:r}=t,s=P.useContext(Op);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Rn.Provider,{value:e},r)}function Hk(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id]));f>=0||Oe(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:g,errors:v}=n,S=m.route.loader&&g[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||S){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let v,S=!1,A=null,N=null;n&&(v=l&&m.route.id?l[m.route.id]:void 0,A=m.route.errorElement||qk,c&&(d<0&&g===0?(S=!0,N=null):d===g&&(S=!0,N=m.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),x=()=>{let b;return v?b=A:S?b=N:m.route.Component?b=P.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=f,P.createElement(Gk,{match:m,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:b})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?P.createElement(Wk,{location:n.location,revalidation:n.revalidation,component:A,error:v,children:x(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):x()},null)}var Ex=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ex||{}),Ac=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ac||{});function Kk(t){let e=P.useContext(Op);return e||Oe(!1),e}function Qk(t){let e=P.useContext(Ok);return e||Oe(!1),e}function Yk(t){let e=P.useContext(Rn);return e||Oe(!1),e}function bx(t){let e=Yk(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function Xk(){var t;let e=P.useContext(wx),n=Qk(Ac.UseRouteError),r=bx(Ac.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Jk(){let{router:t}=Kk(Ex.UseNavigateStable),e=bx(Ac.UseNavigateStable),n=P.useRef(!1);return _x(()=>{n.current=!0}),P.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ma({fromRouteId:e},i)))},[t,e])}function qo(t){let{to:e,replace:n,state:r,relative:s}=t;zi()||Oe(!1);let{future:i,static:o}=P.useContext(Yr),{matches:l}=P.useContext(Rn),{pathname:c}=qi(),d=lr(),f=Dp(e,jp(l,i.v7_relativeSplatPath),c,s==="path"),m=JSON.stringify(f);return P.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:s}),[d,m,s,n,r]),null}function Zk(t){return Fk(t.context)}function At(t){Oe(!1)}function eN(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Ar.Pop,navigator:i,static:o=!1,future:l}=t;zi()&&Oe(!1);let c=e.replace(/^\/*/,"/"),d=P.useMemo(()=>({basename:c,navigator:i,static:o,future:ma({v7_relativeSplatPath:!1},l)}),[c,l,i,o]);typeof r=="string"&&(r=Ms(r));let{pathname:f="/",search:m="",hash:g="",state:v=null,key:S="default"}=r,A=P.useMemo(()=>{let N=Pp(f,c);return N==null?null:{location:{pathname:N,search:m,hash:g,state:v,key:S},navigationType:s}},[c,f,m,g,v,S,s]);return A==null?null:P.createElement(Yr.Provider,{value:d},P.createElement(hu.Provider,{children:n,value:A}))}function tN(t){let{children:e,location:n}=t;return Bk(rf(e),n)}new Promise(()=>{});function rf(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,s)=>{if(!P.isValidElement(r))return;let i=[...e,s];if(r.type===P.Fragment){n.push.apply(n,rf(r.props.children,i));return}r.type!==At&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rf(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sf(){return sf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sf.apply(this,arguments)}function nN(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function rN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function sN(t,e){return t.button===0&&(!e||e==="_self")&&!rN(t)}const iN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],oN="6";try{window.__reactRouterVersion=oN}catch{}const aN="startTransition",o0=X1[aN];function lN(t){let{basename:e,children:n,future:r,window:s}=t,i=P.useRef();i.current==null&&(i.current=ck({window:s,v5Compat:!0}));let o=i.current,[l,c]=P.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=P.useCallback(m=>{d&&o0?o0(()=>c(m)):c(m)},[c,d]);return P.useLayoutEffect(()=>o.listen(f),[o,f]),P.createElement(eN,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const cN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,un=P.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:c,to:d,preventScrollReset:f,unstable_viewTransition:m}=e,g=nN(e,iN),{basename:v}=P.useContext(Yr),S,A=!1;if(typeof d=="string"&&uN.test(d)&&(S=d,cN))try{let b=new URL(window.location.href),D=d.startsWith("//")?new URL(b.protocol+d):new URL(d),M=Pp(D.pathname,v);D.origin===b.origin&&M!=null?d=M+D.search+D.hash:A=!0}catch{}let N=Lk(d,{relative:s}),w=dN(d,{replace:o,state:l,target:c,preventScrollReset:f,relative:s,unstable_viewTransition:m});function x(b){r&&r(b),b.defaultPrevented||w(b)}return P.createElement("a",sf({},g,{href:S||N,onClick:A||i?r:x,ref:n,target:c}))});var a0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(a0||(a0={}));var l0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(l0||(l0={}));function dN(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,c=lr(),d=qi(),f=xx(t,{relative:o});return P.useCallback(m=>{if(sN(m,n)){m.preventDefault();let g=r!==void 0?r:Nc(d)===Nc(f);c(t,{replace:g,state:s,preventScrollReset:i,relative:o,unstable_viewTransition:l})}},[d,c,f,r,s,n,t,i,o,l])}var c0={};/**
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
 */const Tx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ix={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,d=c?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,v=d&63;c||(v=64,o||(g=64)),r.push(n[f],n[m],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new fN;const g=i<<2|l>>4;if(r.push(g),d!==64){const v=l<<4&240|d>>2;if(r.push(v),m!==64){const S=d<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pN=function(t){const e=Tx(t);return Ix.encodeByteArray(e,!0)},Cc=function(t){return pN(t).replace(/\./g,"")},Sx=function(t){try{return Ix.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gN=()=>mN().__FIREBASE_DEFAULTS__,yN=()=>{if(typeof process>"u"||typeof c0>"u")return;const t=c0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sx(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return gN()||yN()||vN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kx=t=>{var e,n;return(n=(e=fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lp=t=>{const e=kx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nx=()=>{var t;return(t=fu())===null||t===void 0?void 0:t.config},Ax=t=>{var e;return(e=fu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class wN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Cx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cc(JSON.stringify(n)),Cc(JSON.stringify(o)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _N(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function xN(){var t;const e=(t=fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TN(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IN(){return!xN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mp(){try{return typeof indexedDB=="object"}catch{return!1}}function Vp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Px(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const SN="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SN,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr.prototype.create)}}class Xr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?kN(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Ht(s,l,r)}}function kN(t,e){return t.replace(NN,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const NN=/\{\$([^}]+)}/g;function AN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ga(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(u0(i)&&u0(o)){if(!ga(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function u0(t){return t!==null&&typeof t=="object"}/**
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
 */function Va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CN(t,e){const n=new RN(t,e);return n.subscribe.bind(n)}class RN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PN(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vd),s.error===void 0&&(s.error=Vd),s.complete===void 0&&(s.complete=Vd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vd(){}/**
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
 */const jN=1e3,DN=2,ON=4*60*60*1e3,LN=.5;function d0(t,e=jN,n=DN){const r=e*Math.pow(n,t),s=Math.round(LN*r*(Math.random()-.5)*2);return Math.min(ON,r+s)}/**
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
 */function ue(t){return t&&t._delegate?t._delegate:t}class St{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const os="[DEFAULT]";/**
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
 */class MN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FN(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VN(t){return t===os?void 0:t}function FN(t){return t.instantiationMode==="EAGER"}/**
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
 */class UN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const BN={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},$N=re.INFO,zN={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},qN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zN[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=$N,this._logHandler=qN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const WN=(t,e)=>e.some(n=>t instanceof n);let h0,f0;function GN(){return h0||(h0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HN(){return f0||(f0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jx=new WeakMap,of=new WeakMap,Dx=new WeakMap,Fd=new WeakMap,Fp=new WeakMap;function KN(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jx.set(n,t)}).catch(()=>{}),Fp.set(e,t),e}function QN(t){if(of.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});of.set(t,e)}let af={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return of.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YN(t){af=t(af)}function XN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ud(this),e,...n);return Dx.set(r,e.sort?e.sort():[e]),Qn(r)}:HN().includes(t)?function(...e){return t.apply(Ud(this),e),Qn(jx.get(this))}:function(...e){return Qn(t.apply(Ud(this),e))}}function JN(t){return typeof t=="function"?XN(t):(t instanceof IDBTransaction&&QN(t),WN(t,GN())?new Proxy(t,af):t)}function Qn(t){if(t instanceof IDBRequest)return KN(t);if(Fd.has(t))return Fd.get(t);const e=JN(t);return e!==t&&(Fd.set(t,e),Fp.set(e,t)),e}const Ud=t=>Fp.get(t);function mu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Qn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qn(o.result),c.oldVersion,c.newVersion,Qn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function Bd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Qn(n).then(()=>{})}const ZN=["get","getKey","getAll","getAllKeys","count"],eA=["put","add","delete","clear"],$d=new Map;function p0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($d.get(e))return $d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=eA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ZN.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&c.done]))[0]};return $d.set(e,i),i}YN(t=>({...t,get:(e,n,r)=>p0(e,n)||t.get(e,n,r),has:(e,n)=>!!p0(e,n)||t.has(e,n)}));/**
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
 */class tA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lf="@firebase/app",m0="0.10.13";/**
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
 */const nr=new pu("@firebase/app"),rA="@firebase/app-compat",sA="@firebase/analytics-compat",iA="@firebase/analytics",oA="@firebase/app-check-compat",aA="@firebase/app-check",lA="@firebase/auth",cA="@firebase/auth-compat",uA="@firebase/database",dA="@firebase/data-connect",hA="@firebase/database-compat",fA="@firebase/functions",pA="@firebase/functions-compat",mA="@firebase/installations",gA="@firebase/installations-compat",yA="@firebase/messaging",vA="@firebase/messaging-compat",wA="@firebase/performance",_A="@firebase/performance-compat",xA="@firebase/remote-config",EA="@firebase/remote-config-compat",bA="@firebase/storage",TA="@firebase/storage-compat",IA="@firebase/firestore",SA="@firebase/vertexai-preview",kA="@firebase/firestore-compat",NA="firebase",AA="10.14.1";/**
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
 */const cf="[DEFAULT]",CA={[lf]:"fire-core",[rA]:"fire-core-compat",[iA]:"fire-analytics",[sA]:"fire-analytics-compat",[aA]:"fire-app-check",[oA]:"fire-app-check-compat",[lA]:"fire-auth",[cA]:"fire-auth-compat",[uA]:"fire-rtdb",[dA]:"fire-data-connect",[hA]:"fire-rtdb-compat",[fA]:"fire-fn",[pA]:"fire-fn-compat",[mA]:"fire-iid",[gA]:"fire-iid-compat",[yA]:"fire-fcm",[vA]:"fire-fcm-compat",[wA]:"fire-perf",[_A]:"fire-perf-compat",[xA]:"fire-rc",[EA]:"fire-rc-compat",[bA]:"fire-gcs",[TA]:"fire-gcs-compat",[IA]:"fire-fst",[kA]:"fire-fst-compat",[SA]:"fire-vertex","fire-js":"fire-js",[NA]:"fire-js-all"};/**
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
 */const Rc=new Map,RA=new Map,uf=new Map;function g0(t,e){try{t.container.addComponent(e)}catch(n){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lt(t){const e=t.name;if(uf.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;uf.set(e,t);for(const n of Rc.values())g0(n,t);for(const n of RA.values())g0(n,t);return!0}function Pn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function En(t){return t.settings!==void 0}/**
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
 */const PA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new Xr("app","Firebase",PA);/**
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
 */class jA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=AA;function Ox(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ur.create("bad-app-name",{appName:String(s)});if(n||(n=Nx()),!n)throw Ur.create("no-options");const i=Rc.get(s);if(i){if(ga(n,i.options)&&ga(r,i.config))return i;throw Ur.create("duplicate-app",{appName:s})}const o=new UN(s);for(const c of uf.values())o.addComponent(c);const l=new jA(n,r,o);return Rc.set(s,l),l}function Wi(t=cf){const e=Rc.get(t);if(!e&&t===cf&&Nx())return Ox();if(!e)throw Ur.create("no-app",{appName:t});return e}function Qe(t,e,n){var r;let s=(r=CA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(l.join(" "));return}Lt(new St(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const DA="firebase-heartbeat-database",OA=1,ya="firebase-heartbeat-store";let zd=null;function Lx(){return zd||(zd=mu(DA,OA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ya)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),zd}async function LA(t){try{const n=(await Lx()).transaction(ya),r=await n.objectStore(ya).get(Mx(t));return await n.done,r}catch(e){if(e instanceof Ht)nr.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nr.warn(n.message)}}}async function y0(t,e){try{const r=(await Lx()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,Mx(t)),await r.done}catch(n){if(n instanceof Ht)nr.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nr.warn(r.message)}}}function Mx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MA=1024,VA=30*24*60*60*1e3;class FA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=v0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=VA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){nr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=v0(),{heartbeatsToSend:r,unsentEntries:s}=UA(this._heartbeatsCache.heartbeats),i=Cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return nr.warn(n),""}}}function v0(){return new Date().toISOString().substring(0,10)}function UA(t,e=MA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),w0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),w0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mp()?Vp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return y0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return y0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function w0(t){return Cc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $A(t){Lt(new St("platform-logger",e=>new tA(e),"PRIVATE")),Lt(new St("heartbeat",e=>new FA(e),"PRIVATE")),Qe(lf,m0,t),Qe(lf,m0,"esm2017"),Qe("fire-js","")}$A("");var zA="firebase",qA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(zA,qA,"app");var _0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,Vx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.D=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(T,C,R){for(var k=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)k[Le-2]=arguments[Le];return _.prototype[C].apply(T,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,E){E||(E=0);var T=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)T[C]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(C=0;16>C;++C)T[C]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],C=I.g[2];var R=I.g[3],k=_+(R^E&(C^R))+T[0]+3614090360&4294967295;_=E+(k<<7&4294967295|k>>>25),k=R+(C^_&(E^C))+T[1]+3905402710&4294967295,R=_+(k<<12&4294967295|k>>>20),k=C+(E^R&(_^E))+T[2]+606105819&4294967295,C=R+(k<<17&4294967295|k>>>15),k=E+(_^C&(R^_))+T[3]+3250441966&4294967295,E=C+(k<<22&4294967295|k>>>10),k=_+(R^E&(C^R))+T[4]+4118548399&4294967295,_=E+(k<<7&4294967295|k>>>25),k=R+(C^_&(E^C))+T[5]+1200080426&4294967295,R=_+(k<<12&4294967295|k>>>20),k=C+(E^R&(_^E))+T[6]+2821735955&4294967295,C=R+(k<<17&4294967295|k>>>15),k=E+(_^C&(R^_))+T[7]+4249261313&4294967295,E=C+(k<<22&4294967295|k>>>10),k=_+(R^E&(C^R))+T[8]+1770035416&4294967295,_=E+(k<<7&4294967295|k>>>25),k=R+(C^_&(E^C))+T[9]+2336552879&4294967295,R=_+(k<<12&4294967295|k>>>20),k=C+(E^R&(_^E))+T[10]+4294925233&4294967295,C=R+(k<<17&4294967295|k>>>15),k=E+(_^C&(R^_))+T[11]+2304563134&4294967295,E=C+(k<<22&4294967295|k>>>10),k=_+(R^E&(C^R))+T[12]+1804603682&4294967295,_=E+(k<<7&4294967295|k>>>25),k=R+(C^_&(E^C))+T[13]+4254626195&4294967295,R=_+(k<<12&4294967295|k>>>20),k=C+(E^R&(_^E))+T[14]+2792965006&4294967295,C=R+(k<<17&4294967295|k>>>15),k=E+(_^C&(R^_))+T[15]+1236535329&4294967295,E=C+(k<<22&4294967295|k>>>10),k=_+(C^R&(E^C))+T[1]+4129170786&4294967295,_=E+(k<<5&4294967295|k>>>27),k=R+(E^C&(_^E))+T[6]+3225465664&4294967295,R=_+(k<<9&4294967295|k>>>23),k=C+(_^E&(R^_))+T[11]+643717713&4294967295,C=R+(k<<14&4294967295|k>>>18),k=E+(R^_&(C^R))+T[0]+3921069994&4294967295,E=C+(k<<20&4294967295|k>>>12),k=_+(C^R&(E^C))+T[5]+3593408605&4294967295,_=E+(k<<5&4294967295|k>>>27),k=R+(E^C&(_^E))+T[10]+38016083&4294967295,R=_+(k<<9&4294967295|k>>>23),k=C+(_^E&(R^_))+T[15]+3634488961&4294967295,C=R+(k<<14&4294967295|k>>>18),k=E+(R^_&(C^R))+T[4]+3889429448&4294967295,E=C+(k<<20&4294967295|k>>>12),k=_+(C^R&(E^C))+T[9]+568446438&4294967295,_=E+(k<<5&4294967295|k>>>27),k=R+(E^C&(_^E))+T[14]+3275163606&4294967295,R=_+(k<<9&4294967295|k>>>23),k=C+(_^E&(R^_))+T[3]+4107603335&4294967295,C=R+(k<<14&4294967295|k>>>18),k=E+(R^_&(C^R))+T[8]+1163531501&4294967295,E=C+(k<<20&4294967295|k>>>12),k=_+(C^R&(E^C))+T[13]+2850285829&4294967295,_=E+(k<<5&4294967295|k>>>27),k=R+(E^C&(_^E))+T[2]+4243563512&4294967295,R=_+(k<<9&4294967295|k>>>23),k=C+(_^E&(R^_))+T[7]+1735328473&4294967295,C=R+(k<<14&4294967295|k>>>18),k=E+(R^_&(C^R))+T[12]+2368359562&4294967295,E=C+(k<<20&4294967295|k>>>12),k=_+(E^C^R)+T[5]+4294588738&4294967295,_=E+(k<<4&4294967295|k>>>28),k=R+(_^E^C)+T[8]+2272392833&4294967295,R=_+(k<<11&4294967295|k>>>21),k=C+(R^_^E)+T[11]+1839030562&4294967295,C=R+(k<<16&4294967295|k>>>16),k=E+(C^R^_)+T[14]+4259657740&4294967295,E=C+(k<<23&4294967295|k>>>9),k=_+(E^C^R)+T[1]+2763975236&4294967295,_=E+(k<<4&4294967295|k>>>28),k=R+(_^E^C)+T[4]+1272893353&4294967295,R=_+(k<<11&4294967295|k>>>21),k=C+(R^_^E)+T[7]+4139469664&4294967295,C=R+(k<<16&4294967295|k>>>16),k=E+(C^R^_)+T[10]+3200236656&4294967295,E=C+(k<<23&4294967295|k>>>9),k=_+(E^C^R)+T[13]+681279174&4294967295,_=E+(k<<4&4294967295|k>>>28),k=R+(_^E^C)+T[0]+3936430074&4294967295,R=_+(k<<11&4294967295|k>>>21),k=C+(R^_^E)+T[3]+3572445317&4294967295,C=R+(k<<16&4294967295|k>>>16),k=E+(C^R^_)+T[6]+76029189&4294967295,E=C+(k<<23&4294967295|k>>>9),k=_+(E^C^R)+T[9]+3654602809&4294967295,_=E+(k<<4&4294967295|k>>>28),k=R+(_^E^C)+T[12]+3873151461&4294967295,R=_+(k<<11&4294967295|k>>>21),k=C+(R^_^E)+T[15]+530742520&4294967295,C=R+(k<<16&4294967295|k>>>16),k=E+(C^R^_)+T[2]+3299628645&4294967295,E=C+(k<<23&4294967295|k>>>9),k=_+(C^(E|~R))+T[0]+4096336452&4294967295,_=E+(k<<6&4294967295|k>>>26),k=R+(E^(_|~C))+T[7]+1126891415&4294967295,R=_+(k<<10&4294967295|k>>>22),k=C+(_^(R|~E))+T[14]+2878612391&4294967295,C=R+(k<<15&4294967295|k>>>17),k=E+(R^(C|~_))+T[5]+4237533241&4294967295,E=C+(k<<21&4294967295|k>>>11),k=_+(C^(E|~R))+T[12]+1700485571&4294967295,_=E+(k<<6&4294967295|k>>>26),k=R+(E^(_|~C))+T[3]+2399980690&4294967295,R=_+(k<<10&4294967295|k>>>22),k=C+(_^(R|~E))+T[10]+4293915773&4294967295,C=R+(k<<15&4294967295|k>>>17),k=E+(R^(C|~_))+T[1]+2240044497&4294967295,E=C+(k<<21&4294967295|k>>>11),k=_+(C^(E|~R))+T[8]+1873313359&4294967295,_=E+(k<<6&4294967295|k>>>26),k=R+(E^(_|~C))+T[15]+4264355552&4294967295,R=_+(k<<10&4294967295|k>>>22),k=C+(_^(R|~E))+T[6]+2734768916&4294967295,C=R+(k<<15&4294967295|k>>>17),k=E+(R^(C|~_))+T[13]+1309151649&4294967295,E=C+(k<<21&4294967295|k>>>11),k=_+(C^(E|~R))+T[4]+4149444226&4294967295,_=E+(k<<6&4294967295|k>>>26),k=R+(E^(_|~C))+T[11]+3174756917&4294967295,R=_+(k<<10&4294967295|k>>>22),k=C+(_^(R|~E))+T[2]+718787259&4294967295,C=R+(k<<15&4294967295|k>>>17),k=E+(R^(C|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var E=_-this.blockSize,T=this.B,C=this.h,R=0;R<_;){if(C==0)for(;R<=E;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<_;)if(T[C++]=I.charCodeAt(R++),C==this.blockSize){s(this,T),C=0;break}}else for(;R<_;)if(T[C++]=I[R++],C==this.blockSize){s(this,T),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var E=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=E&255,E/=256;for(this.u(I),I=Array(16),_=E=0;4>_;++_)for(var T=0;32>T;T+=8)I[E++]=this.g[_]>>>T&255;return I};function i(I,_){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function o(I,_){this.h=_;for(var E=[],T=!0,C=I.length-1;0<=C;C--){var R=I[C]|0;T&&R==_||(E[C]=R,T=!1)}this.g=E}var l={};function c(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return N(d(-I));for(var _=[],E=1,T=0;I>=E;T++)_[T]=I/E|0,E*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return N(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(_,8)),T=m,C=0;C<I.length;C+=8){var R=Math.min(8,I.length-C),k=parseInt(I.substring(C,C+R),_);8>R?(R=d(Math.pow(_,R)),T=T.j(R).add(d(k))):(T=T.j(E),T=T.add(d(k)))}return T}var m=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(A(this))return-N(this).m();for(var I=0,_=1,E=0;E<this.g.length;E++){var T=this.i(E);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(A(this))return"-"+N(this).toString(I);for(var _=d(Math.pow(I,6)),E=this,T="";;){var C=D(E,_).g;E=w(E,C.j(_));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=C,S(E))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function A(I){return I.h==-1}t.l=function(I){return I=w(this,I),A(I)?-1:S(I)?0:1};function N(I){for(var _=I.g.length,E=[],T=0;T<_;T++)E[T]=~I.g[T];return new o(E,~I.h).add(g)}t.abs=function(){return A(this)?N(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0,C=0;C<=_;C++){var R=T+(this.i(C)&65535)+(I.i(C)&65535),k=(R>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);T=k>>>16,R&=65535,k&=65535,E[C]=k<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(I,_){return I.add(N(_))}t.j=function(I){if(S(this)||S(I))return m;if(A(this))return A(I)?N(this).j(N(I)):N(N(this).j(I));if(A(I))return N(this.j(N(I)));if(0>this.l(v)&&0>I.l(v))return d(this.m()*I.m());for(var _=this.g.length+I.g.length,E=[],T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<I.g.length;C++){var R=this.i(T)>>>16,k=this.i(T)&65535,Le=I.i(C)>>>16,H=I.i(C)&65535;E[2*T+2*C]+=k*H,x(E,2*T+2*C),E[2*T+2*C+1]+=R*H,x(E,2*T+2*C+1),E[2*T+2*C+1]+=k*Le,x(E,2*T+2*C+1),E[2*T+2*C+2]+=R*Le,x(E,2*T+2*C+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function x(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function b(I,_){this.g=I,this.h=_}function D(I,_){if(S(_))throw Error("division by zero");if(S(I))return new b(m,m);if(A(I))return _=D(N(I),_),new b(N(_.g),N(_.h));if(A(_))return _=D(I,N(_)),new b(N(_.g),_.h);if(30<I.g.length){if(A(I)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,T=_;0>=T.l(I);)E=M(E),T=M(T);var C=F(E,1),R=F(T,1);for(T=F(T,2),E=F(E,2);!S(T);){var k=R.add(T);0>=k.l(I)&&(C=C.add(E),R=k),T=F(T,1),E=F(E,1)}return _=w(I,C.j(_)),new b(C,_)}for(C=m;0<=I.l(_);){for(E=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(E),k=R.j(_);A(k)||0<k.l(I);)E-=T,R=d(E),k=R.j(_);S(R)&&(R=g),C=C.add(R),I=w(I,k)}return new b(C,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)&I.i(T);return new o(E,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)|I.i(T);return new o(E,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)^I.i(T);return new o(E,this.h^I.h)};function M(I){for(var _=I.g.length+1,E=[],T=0;T<_;T++)E[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(E,I.h)}function F(I,_){var E=_>>5;_%=32;for(var T=I.g.length-E,C=[],R=0;R<T;R++)C[R]=0<_?I.i(R+E)>>>_|I.i(R+E+1)<<32-_:I.i(R+E);return new o(C,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vx=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,vs=o}).apply(typeof _0<"u"?_0:typeof self<"u"?self:typeof window<"u"?window:{});var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fx,Ro,Ux,Ql,df,Bx,$x,zx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cl=="object"&&Cl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var j=a[y];if(!(j in p))break e;p=p[j]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,y=!1,j={next:function(){if(!y&&p<a.length){var O=p++;return{value:h(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function m(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,y),a.apply(h,j)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function v(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function S(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,j,O){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return h.prototype[j].apply(y,B)}}function A(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function N(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(c(y)){const j=a.length||0,O=y.length||0;a.length=j+O;for(let B=0;B<O;B++)a[j+B]=y[B]}else a.push(y)}}class w{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function b(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var M=b().indexOf("Gecko")!=-1&&!(b().toLowerCase().indexOf("webkit")!=-1&&b().indexOf("Edge")==-1)&&!(b().indexOf("Trident")!=-1||b().indexOf("MSIE")!=-1)&&b().indexOf("Edge")==-1;function F(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function I(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function _(a){const h={};for(const p in a)h[p]=a[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let p,y;for(let j=1;j<arguments.length;j++){y=arguments[j];for(p in y)a[p]=y[p];for(let O=0;O<E.length;O++)p=E[O],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function C(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function R(a){l.setTimeout(()=>{throw a},0)}function k(){var a=K;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Le{constructor(){this.h=this.g=null}add(h,p){const y=H.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var H=new w(()=>new $e,a=>a.reset());class $e{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,$=!1,K=new Le,X=()=>{const a=l.Promise.resolve(void 0);ze=()=>{a.then(ie)}};var ie=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(p){R(p)}var h=H;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var jn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Dn(a,h){if(Pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{D(h.nodeName);var j=!0;break e}catch{}j=!1}j||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:On[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Dn.aa.h.call(this)}}S(Dn,Pe);var On={2:"touch",3:"pen",4:"mouse"};Dn.prototype.h=function(){Dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ln="closure_listenable_"+(1e6*Math.random()|0),r1=0;function s1(a,h,p,y,j){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=j,this.key=++r1,this.da=this.fa=!1}function Qa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ya(a){this.src=a,this.g={},this.h=0}Ya.prototype.add=function(a,h,p,y,j){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=zu(a,h,y,j);return-1<B?(h=a[B],p||(h.fa=!1)):(h=new s1(h,this.src,O,!!y,j),h.fa=p,a.push(h)),h};function $u(a,h){var p=h.type;if(p in a.g){var y=a.g[p],j=Array.prototype.indexOf.call(y,h,void 0),O;(O=0<=j)&&Array.prototype.splice.call(y,j,1),O&&(Qa(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function zu(a,h,p,y){for(var j=0;j<a.length;++j){var O=a[j];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==y)return j}return-1}var qu="closure_lm_"+(1e6*Math.random()|0),Wu={};function Km(a,h,p,y,j){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Km(a,h[O],p,y,j);return null}return p=Xm(p),a&&a[Ln]?a.K(h,p,d(y)?!!y.capture:!!y,j):i1(a,h,p,!1,y,j)}function i1(a,h,p,y,j,O){if(!h)throw Error("Invalid event type");var B=d(j)?!!j.capture:!!j,pe=Hu(a);if(pe||(a[qu]=pe=new Ya(a)),p=pe.add(h,p,y,B,O),p.proxy)return p;if(y=o1(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)jn||(j=B),j===void 0&&(j=!1),a.addEventListener(h.toString(),y,j);else if(a.attachEvent)a.attachEvent(Ym(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function o1(){function a(p){return h.call(a.src,a.listener,p)}const h=a1;return a}function Qm(a,h,p,y,j){if(Array.isArray(h))for(var O=0;O<h.length;O++)Qm(a,h[O],p,y,j);else y=d(y)?!!y.capture:!!y,p=Xm(p),a&&a[Ln]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],p=zu(O,p,y,j),-1<p&&(Qa(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Hu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=zu(h,p,y,j)),(p=-1<a?h[a]:null)&&Gu(p))}function Gu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ln])$u(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(Ym(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Hu(h))?($u(p,a),p.h==0&&(p.src=null,h[qu]=null)):Qa(a)}}}function Ym(a){return a in Wu?Wu[a]:Wu[a]="on"+a}function a1(a,h){if(a.da)a=!0;else{h=new Dn(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&Gu(a),a=p.call(y,h)}return a}function Hu(a){return a=a[qu],a instanceof Ya?a:null}var Ku="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xm(a){return typeof a=="function"?a:(a[Ku]||(a[Ku]=function(h){return a.handleEvent(h)}),a[Ku])}function ot(){fe.call(this),this.i=new Ya(this),this.M=this,this.F=null}S(ot,fe),ot.prototype[Ln]=!0,ot.prototype.removeEventListener=function(a,h,p,y){Qm(this,a,h,p,y)};function wt(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Pe(h,a);else if(h instanceof Pe)h.target=h.target||a;else{var j=h;h=new Pe(y,a),T(h,j)}if(j=!0,p)for(var O=p.length-1;0<=O;O--){var B=h.g=p[O];j=Xa(B,y,!0,h)&&j}if(B=h.g=a,j=Xa(B,y,!0,h)&&j,j=Xa(B,y,!1,h)&&j,p)for(O=0;O<p.length;O++)B=h.g=p[O],j=Xa(B,y,!1,h)&&j}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)Qa(p[y]);delete a.g[h],a.h--}}this.F=null},ot.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},ot.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function Xa(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var j=!0,O=0;O<h.length;++O){var B=h[O];if(B&&!B.da&&B.capture==p){var pe=B.listener,Ye=B.ha||B.src;B.fa&&$u(a.i,B),j=pe.call(Ye,y)!==!1&&j}}return j&&!y.defaultPrevented}function Jm(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Zm(a){a.g=Jm(()=>{a.g=null,a.i&&(a.i=!1,Zm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class l1 extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Zm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(a){fe.call(this),this.h=a,this.g={}}S(Zi,fe);var eg=[];function tg(a){F(a.g,function(h,p){this.g.hasOwnProperty(p)&&Gu(h)},a),a.g={}}Zi.prototype.N=function(){Zi.aa.N.call(this),tg(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qu=l.JSON.stringify,c1=l.JSON.parse,u1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Yu(){}Yu.prototype.h=null;function ng(a){return a.h||(a.h=a.i())}function rg(){}var eo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xu(){Pe.call(this,"d")}S(Xu,Pe);function Ju(){Pe.call(this,"c")}S(Ju,Pe);var es={},sg=null;function Ja(){return sg=sg||new ot}es.La="serverreachability";function ig(a){Pe.call(this,es.La,a)}S(ig,Pe);function to(a){const h=Ja();wt(h,new ig(h))}es.STAT_EVENT="statevent";function og(a,h){Pe.call(this,es.STAT_EVENT,a),this.stat=h}S(og,Pe);function _t(a){const h=Ja();wt(h,new og(h,a))}es.Ma="timingevent";function ag(a,h){Pe.call(this,es.Ma,a),this.size=h}S(ag,Pe);function no(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ro(){this.g=!0}ro.prototype.xa=function(){this.g=!1};function d1(a,h,p,y,j,O){a.info(function(){if(a.g)if(O)for(var B="",pe=O.split("&"),Ye=0;Ye<pe.length;Ye++){var le=pe[Ye].split("=");if(1<le.length){var at=le[0];le=le[1];var lt=at.split("_");B=2<=lt.length&&lt[1]=="type"?B+(at+"="+le+"&"):B+(at+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+j+"]: "+h+`
`+p+`
`+B})}function h1(a,h,p,y,j,O,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+j+"]: "+h+`
`+p+`
`+O+" "+B})}function zs(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+p1(a,p)+(y?" "+y:"")})}function f1(a,h){a.info(function(){return"TIMEOUT: "+h})}ro.prototype.info=function(){};function p1(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var j=y[1];if(Array.isArray(j)&&!(1>j.length)){var O=j[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<j.length;B++)j[B]=""}}}}return Qu(p)}catch{return h}}var Za={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},lg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zu;function el(){}S(el,Yu),el.prototype.g=function(){return new XMLHttpRequest},el.prototype.i=function(){return{}},Zu=new el;function dr(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new Zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cg}function cg(){this.i=null,this.g="",this.h=!1}var ug={},ed={};function td(a,h,p){a.L=1,a.v=sl(Mn(h)),a.m=p,a.P=!0,dg(a,null)}function dg(a,h){a.F=Date.now(),tl(a),a.A=Mn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Ig(p.i,"t",y),a.C=0,p=a.j.J,a.h=new cg,a.g=zg(a.j,p?h:null,!a.m),0<a.O&&(a.M=new l1(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var j="readystatechange";Array.isArray(j)||(j&&(eg[0]=j.toString()),j=eg);for(var O=0;O<j.length;O++){var B=Km(p,j[O],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),to(),d1(a.i,a.u,a.A,a.l,a.R,a.m)}dr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Vn(a)==3?h.j():this.Y(a)},dr.prototype.Y=function(a){try{if(a==this.g)e:{const lt=Vn(this.g);var h=this.g.Ba();const Gs=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Pg(this.g)))){this.J||lt!=4||h==7||(h==8||0>=Gs?to(3):to(2)),nd(this);var p=this.g.Z();this.X=p;t:if(hg(this)){var y=Pg(this.g);a="";var j=y.length,O=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ts(this),so(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<j;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(O&&h==j-1)});y.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,h1(this.i,this.u,this.A,this.l,this.R,lt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ye=this.g;if((pe=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(pe)){var le=pe;break t}}le=null}if(p=le)zs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rd(this,p);else{this.o=!1,this.s=3,_t(12),ts(this),so(this);break e}}if(this.P){p=!0;let rn;for(;!this.J&&this.C<B.length;)if(rn=m1(this,B),rn==ed){lt==4&&(this.s=4,_t(14),p=!1),zs(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==ug){this.s=4,_t(15),zs(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else zs(this.i,this.l,rn,null),rd(this,rn);if(hg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||B.length!=0||this.h.h||(this.s=1,_t(16),p=!1),this.o=this.o&&p,!p)zs(this.i,this.l,B,"[Invalid Chunked Response]"),ts(this),so(this);else if(0<B.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),cd(at),at.M=!0,_t(11))}}else zs(this.i,this.l,B,null),rd(this,B);lt==4&&ts(this),this.o&&!this.J&&(lt==4?Fg(this.j,this):(this.o=!1,tl(this)))}else P1(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ts(this),so(this)}}}catch{}finally{}};function hg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function m1(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?ed:(p=Number(h.substring(p,y)),isNaN(p)?ug:(y+=1,y+p>h.length?ed:(h=h.slice(y,y+p),a.C=y+p,h)))}dr.prototype.cancel=function(){this.J=!0,ts(this)};function tl(a){a.S=Date.now()+a.I,fg(a,a.I)}function fg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=no(g(a.ba,a),h)}function nd(a){a.B&&(l.clearTimeout(a.B),a.B=null)}dr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(f1(this.i,this.A),this.L!=2&&(to(),_t(17)),ts(this),this.s=2,so(this)):fg(this,this.S-a)};function so(a){a.j.G==0||a.J||Fg(a.j,a)}function ts(a){nd(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,tg(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function rd(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||sd(p.h,a))){if(!a.K&&sd(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var j=y;if(j[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)ul(p),ll(p);else break e;ld(p),_t(18)}}else p.za=j[1],0<p.za-p.T&&37500>j[2]&&p.F&&p.v==0&&!p.C&&(p.C=no(g(p.Za,p),6e3));if(1>=gg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else rs(p,11)}else if((a.K||p.g==a)&&ul(p),!x(h))for(j=p.Da.g.parse(h),h=0;h<j.length;h++){let le=j[h];if(p.T=le[0],le=le[1],p.G==2)if(le[0]=="c"){p.K=le[1],p.ia=le[2];const at=le[3];at!=null&&(p.la=at,p.j.info("VER="+p.la));const lt=le[4];lt!=null&&(p.Aa=lt,p.j.info("SVER="+p.Aa));const Gs=le[5];Gs!=null&&typeof Gs=="number"&&0<Gs&&(y=1.5*Gs,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const rn=a.g;if(rn){const hl=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hl){var O=y.h;O.g||hl.indexOf("spdy")==-1&&hl.indexOf("quic")==-1&&hl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(id(O,O.h),O.h=null))}if(y.D){const ud=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;ud&&(y.ya=ud,ye(y.I,y.D,ud))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var B=a;if(y.qa=$g(y,y.J?y.ia:null,y.W),B.K){yg(y.h,B);var pe=B,Ye=y.L;Ye&&(pe.I=Ye),pe.B&&(nd(pe),tl(pe)),y.g=B}else Mg(y);0<p.i.length&&cl(p)}else le[0]!="stop"&&le[0]!="close"||rs(p,7);else p.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?rs(p,7):ad(p):le[0]!="noop"&&p.l&&p.l.ta(le),p.v=0)}}to(4)}catch{}}var g1=class{constructor(a,h){this.g=a,this.map=h}};function pg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gg(a){return a.h?1:a.g?a.g.size:0}function sd(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function id(a,h){a.g?a.g.add(h):a.h=h}function yg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}pg.prototype.cancel=function(){if(this.i=vg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return A(a.i)}function y1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function v1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function wg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=v1(a),y=y1(a),j=y.length,O=0;O<j;O++)h.call(void 0,y[O],p&&p[O],a)}var _g=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w1(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),j=null;if(0<=y){var O=a[p].substring(0,y);j=a[p].substring(y+1)}else O=a[p];h(O,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function ns(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ns){this.h=a.h,nl(this,a.j),this.o=a.o,this.g=a.g,rl(this,a.s),this.l=a.l;var h=a.i,p=new ao;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),xg(this,p),this.m=a.m}else a&&(h=String(a).match(_g))?(this.h=!1,nl(this,h[1]||"",!0),this.o=io(h[2]||""),this.g=io(h[3]||"",!0),rl(this,h[4]),this.l=io(h[5]||"",!0),xg(this,h[6]||"",!0),this.m=io(h[7]||"")):(this.h=!1,this.i=new ao(null,this.h))}ns.prototype.toString=function(){var a=[],h=this.j;h&&a.push(oo(h,Eg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(oo(h,Eg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(oo(p,p.charAt(0)=="/"?E1:x1,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",oo(p,T1)),a.join("")};function Mn(a){return new ns(a)}function nl(a,h,p){a.j=p?io(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function rl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function xg(a,h,p){h instanceof ao?(a.i=h,I1(a.i,a.h)):(p||(h=oo(h,b1)),a.i=new ao(h,a.h))}function ye(a,h,p){a.i.set(h,p)}function sl(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function io(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function oo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,_1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Eg=/[#\/\?@]/g,x1=/[#\?:]/g,E1=/[#\?]/g,b1=/[#\?@]/g,T1=/#/g;function ao(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function hr(a){a.g||(a.g=new Map,a.h=0,a.i&&w1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ao.prototype,t.add=function(a,h){hr(this),this.i=null,a=qs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function bg(a,h){hr(a),h=qs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Tg(a,h){return hr(a),h=qs(a,h),a.g.has(h)}t.forEach=function(a,h){hr(this),this.g.forEach(function(p,y){p.forEach(function(j){a.call(h,j,y,this)},this)},this)},t.na=function(){hr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const j=a[y];for(let O=0;O<j.length;O++)p.push(h[y])}return p},t.V=function(a){hr(this);let h=[];if(typeof a=="string")Tg(this,a)&&(h=h.concat(this.g.get(qs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return hr(this),this.i=null,a=qs(this,a),Tg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ig(a,h,p){bg(a,h),0<p.length&&(a.i=null,a.g.set(qs(a,h),A(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const O=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var j=O;B[y]!==""&&(j+="="+encodeURIComponent(String(B[y]))),a.push(j)}}return this.i=a.join("&")};function qs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function I1(a,h){h&&!a.j&&(hr(a),a.i=null,a.g.forEach(function(p,y){var j=y.toLowerCase();y!=j&&(bg(this,y),Ig(this,j,p))},a)),a.j=h}function S1(a,h){const p=new ro;if(l.Image){const y=new Image;y.onload=v(fr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=v(fr,p,"TestLoadImage: error",!1,h,y),y.onabort=v(fr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(fr,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function k1(a,h){const p=new ro,y=new AbortController,j=setTimeout(()=>{y.abort(),fr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(j),O.ok?fr(p,"TestPingServer: ok",!0,h):fr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(j),fr(p,"TestPingServer: error",!1,h)})}function fr(a,h,p,y,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),y(p)}catch{}}function N1(){this.g=new u1}function A1(a,h,p){const y=p||"";try{wg(a,function(j,O){let B=j;d(j)&&(B=Qu(j)),h.push(y+O+"="+encodeURIComponent(B))})}catch(j){throw h.push(y+"type="+encodeURIComponent("_badmap")),j}}function il(a){this.l=a.Ub||null,this.j=a.eb||!1}S(il,Yu),il.prototype.g=function(){return new ol(this.l,this.j)},il.prototype.i=function(a){return function(){return a}}({});function ol(a,h){ot.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ol,ot),t=ol.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,co(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,co(this)),this.g&&(this.readyState=3,co(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?lo(this):co(this),this.readyState==3&&Sg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,lo(this))},t.Qa=function(a){this.g&&(this.response=a,lo(this))},t.ga=function(){this.g&&lo(this)};function lo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,co(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function co(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function kg(a){let h="";return F(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function od(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=kg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ye(a,h,p))}function ke(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ke,ot);var C1=/^https?$/i,R1=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zu.g(),this.v=this.o?ng(this.o):ng(Zu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Ng(this,O);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var j in y)p.set(j,y[j]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())p.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),j=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(R1,h,void 0))||y||j||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of p)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Ng(this,O)}};function Ng(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ag(a),al(a)}function Ag(a){a.A||(a.A=!0,wt(a,"complete"),wt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,wt(this,"complete"),wt(this,"abort"),al(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),al(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Cg(this):this.bb())},t.bb=function(){Cg(this)};function Cg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Vn(a)!=4||a.Z()!=2)){if(a.u&&Vn(a)==4)Jm(a.Ea,0,a);else if(wt(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=B===0){var j=String(a.D).match(_g)[1]||null;!j&&l.self&&l.self.location&&(j=l.self.location.protocol.slice(0,-1)),y=!C1.test(j?j.toLowerCase():"")}p=y}if(p)wt(a,"complete"),wt(a,"success");else{a.m=6;try{var O=2<Vn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Ag(a)}}finally{al(a)}}}}function al(a,h){if(a.g){Rg(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||wt(a,"ready");try{p.onreadystatechange=y}catch{}}}function Rg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),c1(h)}};function Pg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function P1(a){const h={};a=(a.g&&2<=Vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(x(a[y]))continue;var p=C(a[y]);const j=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[j]||[];h[j]=O,O.push(p)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function uo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function jg(a){this.Aa=0,this.i=[],this.j=new ro,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=uo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=uo("baseRetryDelayMs",5e3,a),this.cb=uo("retryDelaySeedMs",1e4,a),this.Wa=uo("forwardChannelMaxRetries",2,a),this.wa=uo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new pg(a&&a.concurrentRequestLimit),this.Da=new N1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){_t(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=$g(this,null,this.W),cl(this)};function ad(a){if(Dg(a),a.G==3){var h=a.U++,p=Mn(a.I);if(ye(p,"SID",a.K),ye(p,"RID",h),ye(p,"TYPE","terminate"),ho(a,p),h=new dr(a,a.j,h),h.L=2,h.v=sl(Mn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=zg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),tl(h)}Bg(a)}function ll(a){a.g&&(cd(a),a.g.cancel(),a.g=null)}function Dg(a){ll(a),a.u&&(l.clearTimeout(a.u),a.u=null),ul(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function cl(a){if(!mg(a.h)&&!a.s){a.s=!0;var h=a.Ga;ze||X(),$||(ze(),$=!0),K.add(h,a),a.B=0}}function j1(a,h){return gg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=no(g(a.Ga,a,h),Ug(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const j=new dr(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(j.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Lg(this,j,h),p=Mn(this.I),ye(p,"RID",a),ye(p,"CVER",22),this.D&&ye(p,"X-HTTP-Session-Id",this.D),ho(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(kg(O)))+"&"+h:this.m&&od(p,this.m,O)),id(this.h,j),this.Ua&&ye(p,"TYPE","init"),this.P?(ye(p,"$req",h),ye(p,"SID","null"),j.T=!0,td(j,p,null)):td(j,p,h),this.G=2}}else this.G==3&&(a?Og(this,a):this.i.length==0||mg(this.h)||Og(this))};function Og(a,h){var p;h?p=h.l:p=a.U++;const y=Mn(a.I);ye(y,"SID",a.K),ye(y,"RID",p),ye(y,"AID",a.T),ho(a,y),a.m&&a.o&&od(y,a.m,a.o),p=new dr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Lg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),id(a.h,p),td(p,y,h)}function ho(a,h){a.H&&F(a.H,function(p,y){ye(h,y,p)}),a.l&&wg({},function(p,y){ye(h,y,p)})}function Lg(a,h,p){p=Math.min(a.i.length,p);var y=a.l?g(a.l.Na,a.l,a):null;e:{var j=a.i;let O=-1;for(;;){const B=["count="+p];O==-1?0<p?(O=j[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let pe=!0;for(let Ye=0;Ye<p;Ye++){let le=j[Ye].g;const at=j[Ye].map;if(le-=O,0>le)O=Math.max(0,j[Ye].g-100),pe=!1;else try{A1(at,B,"req"+le+"_")}catch{y&&y(at)}}if(pe){y=B.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function Mg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ze||X(),$||(ze(),$=!0),K.add(h,a),a.v=0}}function ld(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=no(g(a.Fa,a),Ug(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Vg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=no(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),ll(this),Vg(this))};function cd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Vg(a){a.g=new dr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Mn(a.qa);ye(h,"RID","rpc"),ye(h,"SID",a.K),ye(h,"AID",a.T),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(h,"TO",a.ja),ye(h,"TYPE","xmlhttp"),ho(a,h),a.m&&a.o&&od(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=sl(Mn(h)),p.m=null,p.P=!0,dg(p,a)}t.Za=function(){this.C!=null&&(this.C=null,ll(this),ld(this),_t(19))};function ul(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Fg(a,h){var p=null;if(a.g==h){ul(a),cd(a),a.g=null;var y=2}else if(sd(a.h,h))p=h.D,yg(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var j=a.B;y=Ja(),wt(y,new ag(y,p)),cl(a)}else Mg(a);else if(j=h.s,j==3||j==0&&0<h.X||!(y==1&&j1(a,h)||y==2&&ld(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),j){case 1:rs(a,5);break;case 4:rs(a,10);break;case 3:rs(a,6);break;default:rs(a,2)}}}function Ug(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function rs(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),y=a.Xa;const j=!y;y=new ns(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||nl(y,"https"),sl(y),j?S1(y.toString(),p):k1(y.toString(),p)}else _t(2);a.G=0,a.l&&a.l.sa(h),Bg(a),Dg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Bg(a){if(a.G=0,a.ka=[],a.l){const h=vg(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function $g(a,h,p){var y=p instanceof ns?Mn(p):new ns(p);if(y.g!="")h&&(y.g=h+"."+y.g),rl(y,y.s);else{var j=l.location;y=j.protocol,h=h?h+"."+j.hostname:j.hostname,j=+j.port;var O=new ns(null);y&&nl(O,y),h&&(O.g=h),j&&rl(O,j),p&&(O.l=p),y=O}return p=a.D,h=a.ya,p&&h&&ye(y,p,h),ye(y,"VER",a.la),ho(a,y),y}function zg(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ke(new il({eb:p})):new ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qg(){}t=qg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function dl(){}dl.prototype.g=function(a,h){return new Mt(a,h)};function Mt(a,h){ot.call(this),this.g=new jg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ws(this)}S(Mt,ot),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){ad(this.g)},Mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Qu(a),a=p);h.i.push(new g1(h.Ya++,a)),h.G==3&&cl(h)},Mt.prototype.N=function(){this.g.l=null,delete this.j,ad(this.g),delete this.g,Mt.aa.N.call(this)};function Wg(a){Xu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Wg,Xu);function Gg(){Ju.call(this),this.status=1}S(Gg,Ju);function Ws(a){this.g=a}S(Ws,qg),Ws.prototype.ua=function(){wt(this.g,"a")},Ws.prototype.ta=function(a){wt(this.g,new Wg(a))},Ws.prototype.sa=function(a){wt(this.g,new Gg)},Ws.prototype.ra=function(){wt(this.g,"b")},dl.prototype.createWebChannel=dl.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,zx=function(){return new dl},$x=function(){return Ja()},Bx=es,df={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Za.NO_ERROR=0,Za.TIMEOUT=8,Za.HTTP_ERROR=6,Ql=Za,lg.COMPLETE="complete",Ux=lg,rg.EventType=eo,eo.OPEN="a",eo.CLOSE="b",eo.ERROR="c",eo.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Ro=rg,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,Fx=ke}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});const x0="@firebase/firestore";/**
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
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let Gi="10.14.0";/**
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
 */const Is=new pu("@firebase/firestore");function xo(){return Is.logLevel}function W(t,...e){if(Is.logLevel<=re.DEBUG){const n=e.map(Up);Is.debug(`Firestore (${Gi}): ${t}`,...n)}}function rr(t,...e){if(Is.logLevel<=re.ERROR){const n=e.map(Up);Is.error(`Firestore (${Gi}): ${t}`,...n)}}function Pi(t,...e){if(Is.logLevel<=re.WARN){const n=e.map(Up);Is.warn(`Firestore (${Gi}): ${t}`,...n)}}function Up(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+t;throw rr(e),new Error(e)}function he(t,e){t||Y()}function Z(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class GA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HA{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new qx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new ht(e)}}class KA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new KA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){he(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new YA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Wx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=JA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function ji(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Be(0,0))}static max(){return new J(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class va{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return va.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof va?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends va{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const ZA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends va{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return ZA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(_e.fromString(e))}static fromName(e){return new G(_e.fromString(e).popFirst(5))}static empty(){return new G(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new _e(e.slice()))}}function eC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new qr(s,G.empty(),e)}function tC(t){return new qr(t.readTime,t.key,-1)}class qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qr(J.min(),G.empty(),-1)}static max(){return new qr(J.max(),G.empty(),-1)}}function nC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fa(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==rC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const d=c;n(e[d]).next(f=>{o[d]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function iC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ua(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Bp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Bp.oe=-1;function gu(t){return t==null}function Pc(t){return t===0&&1/t==-1/0}function oC(t){return typeof t=="number"&&Number.isInteger(t)&&!Pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function E0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rl(this.root,e,this.comparator,!0)}}class Rl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b0(this.data.getIterator())}getIteratorFrom(e){return new b0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class b0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new rt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Hx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hx("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const aC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(t){if(he(!!t),typeof t=="string"){let e=0;const n=aC.exec(t);if(he(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ss(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zp(t){const e=t.mapValue.fields.__previous_value__;return $p(e)?zp(e):e}function wa(t){const e=Wr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class lC{constructor(e,n,r,s,i,o,l,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class _a{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _a("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _a&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$p(t)?4:uC(t)?9007199254740991:cC(t)?10:11:Y()}function Cn(t,e){if(t===e)return!0;const n=ks(t);if(n!==ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wa(t).isEqual(wa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Wr(s.timestampValue),l=Wr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ss(s.bytesValue).isEqual(Ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),l=je(i.doubleValue);return o===l?Pc(o)===Pc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(E0(o)!==E0(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Cn(o[c],l[c])))return!1;return!0}(t,e);default:return Y()}}function xa(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=ks(t),r=ks(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=je(i.integerValue||i.doubleValue),c=je(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return T0(t.timestampValue,e.timestampValue);case 4:return T0(wa(t),wa(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ss(i),c=Ss(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const f=ce(l[d],c[d]);if(f!==0)return f}return ce(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ce(je(i.latitude),je(o.latitude));return l!==0?l:ce(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return I0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,d,f;const m=i.fields||{},g=o.fields||{},v=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,A=ce(((d=v==null?void 0:v.values)===null||d===void 0?void 0:d.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return A!==0?A:I0(v,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Pl.mapValue&&o===Pl.mapValue)return 0;if(i===Pl.mapValue)return 1;if(o===Pl.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=o.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=ce(c[m],f[m]);if(g!==0)return g;const v=Di(l[c[m]],d[f[m]]);if(v!==0)return v}return ce(c.length,f.length)}(t.mapValue,e.mapValue);default:throw Y()}}function T0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Wr(t),r=Wr(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function I0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Di(n[s],r[s]);if(i)return i}return ce(n.length,r.length)}function Oi(t){return hf(t)}function hf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hf(n.fields[o])}`;return s+"}"}(t.mapValue):Y()}function S0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ff(t){return!!t&&"integerValue"in t}function qp(t){return!!t&&"arrayValue"in t}function k0(t){return!!t&&"nullValue"in t}function N0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yl(t){return!!t&&"mapValue"in t}function cC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wo(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Wo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Fs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(Wo(this.value))}}function Kx(t){const e=[];return Fs(t.fields,(n,r)=>{const s=new tt([n]);if(Yl(r)){const i=Kx(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Jt(e)}/**
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
 */class pt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,J.min(),J.min(),J.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,J.min(),J.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,J.min(),J.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jc{constructor(e,n){this.position=e,this.inclusive=n}}function A0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function C0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ea{constructor(e,n="asc"){this.field=e,this.dir=n}}function dC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Qx{}class Ue extends Qx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fC(e,n,r):n==="array-contains"?new gC(e,r):n==="in"?new yC(e,r):n==="not-in"?new vC(e,r):n==="array-contains-any"?new wC(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pC(e,r):new mC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Di(n,this.value)):n!==null&&ks(this.value)===ks(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends Qx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pn(e,n)}matches(e){return Yx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yx(t){return t.op==="and"}function Xx(t){return hC(t)&&Yx(t)}function hC(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function pf(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Oi(t.value);if(Xx(t))return t.filters.map(e=>pf(e)).join(",");{const e=t.filters.map(n=>pf(n)).join(",");return`${t.op}(${e})`}}function Jx(t,e){return t instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Jx(o,s.filters[l]),!0):!1}(t,e):void Y()}function Zx(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Oi(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(Zx).join(" ,")+"}"}(t):"Filter"}class fC extends Ue{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class pC extends Ue{constructor(e,n){super(e,"in",n),this.keys=eE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mC extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=eE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class gC extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qp(n)&&xa(n.arrayValue,this.value)}}class yC extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xa(this.value.arrayValue,n)}}class vC extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xa(this.value.arrayValue,n)}}class wC extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xa(this.value.arrayValue,r))}}/**
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
 */class _C{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function R0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new _C(t,e,n,r,s,i,o)}function Wp(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oi(r)).join(",")),e.ue=n}return e.ue}function Gp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!C0(t.startAt,e.startAt)&&C0(t.endAt,e.endAt)}function mf(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xC(t,e,n,r,s,i,o,l){return new Hi(t,e,n,r,s,i,o,l)}function Hp(t){return new Hi(t)}function P0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tE(t){return t.collectionGroup!==null}function Go(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ea(i,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new Ea(tt.keyField(),r))}return e.ce}function Sn(t){const e=Z(t);return e.le||(e.le=EC(e,Go(t))),e.le}function EC(t,e){if(t.limitType==="F")return R0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ea(s.field,i)});const n=t.endAt?new jc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jc(t.startAt.position,t.startAt.inclusive):null;return R0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gf(t,e){const n=t.filters.concat([e]);return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yf(t,e,n){return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yu(t,e){return Gp(Sn(t),Sn(e))&&t.limitType===e.limitType}function nE(t){return`${Wp(Sn(t))}|lt:${t.limitType}`}function Ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zx(s)).join(", ")}]`),gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Oi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Oi(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function vu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const d=A0(o,l,c);return o.inclusive?d<=0:d<0}(r.startAt,Go(r),s)||r.endAt&&!function(o,l,c){const d=A0(o,l,c);return o.inclusive?d>=0:d>0}(r.endAt,Go(r),s))}(t,e)}function bC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rE(t){return(e,n)=>{let r=!1;for(const s of Go(t)){const i=TC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function TC(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),d=l.data.field(i);return c!==null&&d!==null?Di(c,d):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Gx(this.inner)}size(){return this.innerSize}}/**
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
 */const IC=new Se(G.comparator);function sr(){return IC}const sE=new Se(G.comparator);function Po(...t){let e=sE;for(const n of t)e=e.insert(n.key,n);return e}function iE(t){let e=sE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fs(){return Ho()}function oE(){return Ho()}function Ho(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const SC=new Se(G.comparator),kC=new rt(G.comparator);function ne(...t){let e=kC;for(const n of t)e=e.add(n);return e}const NC=new rt(ce);function AC(){return NC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pc(e)?"-0":e}}function aE(t){return{integerValue:""+t}}function CC(t,e){return oC(e)?aE(e):Kp(t,e)}/**
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
 */class wu{constructor(){this._=void 0}}function RC(t,e,n){return t instanceof ba?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$p(i)&&(i=zp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ta?cE(t,e):t instanceof Ia?uE(t,e):function(s,i){const o=lE(s,i),l=j0(o)+j0(s.Pe);return ff(o)&&ff(s.Pe)?aE(l):Kp(s.serializer,l)}(t,e)}function PC(t,e,n){return t instanceof Ta?cE(t,e):t instanceof Ia?uE(t,e):n}function lE(t,e){return t instanceof Dc?function(r){return ff(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ba extends wu{}class Ta extends wu{constructor(e){super(),this.elements=e}}function cE(t,e){const n=dE(e);for(const r of t.elements)n.some(s=>Cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ia extends wu{constructor(e){super(),this.elements=e}}function uE(t,e){let n=dE(e);for(const r of t.elements)n=n.filter(s=>!Cn(s,r));return{arrayValue:{values:n}}}class Dc extends wu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function j0(t){return je(t.integerValue||t.doubleValue)}function dE(t){return qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class jC{constructor(e,n){this.field=e,this.transform=n}}function DC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ta&&s instanceof Ta||r instanceof Ia&&s instanceof Ia?ji(r.elements,s.elements,Cn):r instanceof Dc&&s instanceof Dc?Cn(r.Pe,s.Pe):r instanceof ba&&s instanceof ba}(t.transform,e.transform)}class OC{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _u{}function hE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qp(t.key,en.none()):new Ba(t.key,t.data,en.none());{const n=t.data,r=Ft.empty();let s=new rt(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jr(t.key,r,new Jt(s.toArray()),en.none())}}function LC(t,e,n){t instanceof Ba?function(s,i,o){const l=s.value.clone(),c=O0(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(s,i,o){if(!Xl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=O0(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(fE(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof Ba?function(i,o,l,c){if(!Xl(i.precondition,o))return l;const d=i.value.clone(),f=L0(i.fieldTransforms,c,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(i,o,l,c){if(!Xl(i.precondition,o))return l;const d=L0(i.fieldTransforms,c,o),f=o.data;return f.setAll(fE(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Xl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function MC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=lE(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function D0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ji(r,s,(i,o)=>DC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ba extends _u{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jr extends _u{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function O0(t,e,n){const r=new Map;he(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,PC(o,l,n[s]))}return r}function L0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,RC(i,o,e))}return r}class Qp extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VC extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&LC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=oE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=hE(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>D0(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>D0(n,r))}}class Yp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){he(e.mutations.length===r.length);let s=function(){return SC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yp(e,n,r,s)}}/**
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
 */class UC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class BC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,se;function $C(t){switch(t){default:return Y();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function pE(t){if(t===void 0)return rr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Me.OK:return L.OK;case Me.CANCELLED:return L.CANCELLED;case Me.UNKNOWN:return L.UNKNOWN;case Me.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Me.INTERNAL:return L.INTERNAL;case Me.UNAVAILABLE:return L.UNAVAILABLE;case Me.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Me.NOT_FOUND:return L.NOT_FOUND;case Me.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Me.ABORTED:return L.ABORTED;case Me.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Me.DATA_LOSS:return L.DATA_LOSS;default:return Y()}}(se=Me||(Me={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zC(){return new TextEncoder}/**
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
 */const qC=new vs([4294967295,4294967295],0);function M0(t){const e=zC().encode(t),n=new Vx;return n.update(e),new Uint8Array(n.digest())}function V0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vs([n,r],0),new vs([s,i],0)]}class Xp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new jo(`Invalid padding: ${n}`);if(r<0)throw new jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new jo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=vs.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(vs.fromNumber(r)));return s.compare(qC)===1&&(s=new vs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=M0(e),[r,s]=V0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=M0(e),[r,s]=V0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xu(J.min(),s,new Se(ce),sr(),ne())}}class $a{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $a(r,n,ne(),ne(),ne())}}/**
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
 */class Jl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class mE{constructor(e,n){this.targetId=e,this.me=n}}class gE{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class F0{constructor(){this.fe=0,this.ge=B0(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new $a(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=B0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class WC{constructor(e){this.Le=e,this.Be=new Map,this.ke=sr(),this.qe=U0(),this.Qe=new Se(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(mf(i))if(r===0){const o=new G(i.path);this.Ue(n,o,pt.newNoDocument(o,J.min()))}else he(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ss(r).toUint8Array()}catch(c){if(c instanceof Hx)return Pi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Xp(o,s,i)}catch(c){return Pi(c instanceof jo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&mf(l.target)){const c=new G(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,pt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ne();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new xu(e,n,this.Qe,this.ke,r);return this.ke=sr(),this.qe=U0(),this.Qe=new Se(ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new F0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new F0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function U0(){return new Se(G.comparator)}function B0(){return new Se(G.comparator)}const GC={asc:"ASCENDING",desc:"DESCENDING"},HC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KC={and:"AND",or:"OR"};class QC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vf(t,e){return t.useProto3Json||gu(e)?e:{value:e}}function Oc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YC(t,e){return Oc(t,e.toTimestamp())}function kn(t){return he(!!t),J.fromTimestamp(function(n){const r=Wr(n);return new Be(r.seconds,r.nanos)}(t))}function Jp(t,e){return wf(t,e).canonicalString()}function wf(t,e){const n=function(s){return new _e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vE(t){const e=_e.fromString(t);return he(bE(e)),e}function _f(t,e){return Jp(t.databaseId,e.path)}function qd(t,e){const n=vE(e);if(n.get(1)!==t.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(_E(n))}function wE(t,e){return Jp(t.databaseId,e)}function XC(t){const e=vE(t);return e.length===4?_e.emptyPath():_E(e)}function xf(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _E(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $0(t,e,n){return{name:_f(t,e),fields:n.value.mapValue.fields}}function JC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(he(f===void 0||typeof f=="string"),it.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array),it.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?L.UNKNOWN:pE(d.code);return new z(f,d.message||"")}(o);n=new gE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qd(t,r.document.name),i=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):J.min(),l=new Ft({mapValue:{fields:r.document.fields}}),c=pt.newFoundDocument(s,i,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Jl(d,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qd(t,r.document),i=r.readTime?kn(r.readTime):J.min(),o=pt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Jl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qd(t,r.document),i=r.removedTargetIds||[];n=new Jl([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BC(s,i),l=r.targetId;n=new mE(l,o)}}return n}function ZC(t,e){let n;if(e instanceof Ba)n={update:$0(t,e.key,e.value)};else if(e instanceof Qp)n={delete:_f(t,e.key)};else if(e instanceof Jr)n={update:$0(t,e.key,e.data),updateMask:lR(e.fieldMask)};else{if(!(e instanceof VC))return Y();n={verify:_f(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ba)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Dc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:YC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function eR(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?kn(s.updateTime):kn(i);return o.isEqual(J.min())&&(o=kn(i)),new OC(o,s.transformResults||[])}(n,e))):[]}function tR(t,e){return{documents:[wE(t,e.path)]}}function nR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=wE(t,s);const i=function(d){if(d.length!==0)return EE(pn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:Qs(g.field),direction:iR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=vf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function rR(t){let e=XC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){he(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=xE(m);return g instanceof pn&&Xx(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(S){return new Ea(Ys(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,gu(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,v=m.values||[];return new jc(v,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,v=m.values||[];return new jc(v,g)}(n.endAt)),xC(e,s,o,i,l,"F",c,d)}function sR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ys(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ys(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ys(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ys(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>xE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function iR(t){return GC[t]}function oR(t){return HC[t]}function aR(t){return KC[t]}function Qs(t){return{fieldPath:t.canonicalString()}}function Ys(t){return tt.fromServerFormat(t.fieldPath)}function EE(t){return t instanceof Ue?function(n){if(n.op==="=="){if(N0(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NAN"}};if(k0(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(N0(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NAN"}};if(k0(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(n.field),op:oR(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>EE(s));return r.length===1?r[0]:{compositeFilter:{op:aR(n.op),filters:r}}}(t):Y()}function lR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Cr{constructor(e,n,r,s,i=J.min(),o=J.min(),l=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cR{constructor(e){this.ct=e}}function uR(t){const e=rR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yf(e,e.limit,"L"):e}/**
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
 */class dR{constructor(){this.un=new hR}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(qr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(qr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class hR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(_e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(_e.comparator)).toArray()}}/**
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
 */class Li{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Li(0)}static kn(){return new Li(-1)}}/**
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
 */class fR{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class mR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ko(r.mutation,s,Jt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Po();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=sr();const o=Ho(),l=function(){return Ho()}();return n.forEach((c,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Jr)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Ko(f.mutation,d,f.mutation.getFieldMask(),Be.now())):o.set(d.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var m;return l.set(d,new pR(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ho();let s=new Se((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let f=r.get(c)||Jt.empty();f=l.applyToLocalView(d,f),r.set(c,f);const m=(s.get(l.batchId)||ne()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,f=c.value,m=oE();f.forEach(g=>{if(!i.has(g)){const v=hE(n.get(g),r.get(g));v!==null&&m.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(fs());let l=-1,c=i;return o.next(d=>V.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,ne())).next(f=>({batchId:l,changes:iE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=Po();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Po();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const d=function(m,g){return new Hi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,pt.newInvalidDocument(f)))});let l=Po();return o.forEach((c,d)=>{const f=i.get(c);f!==void 0&&Ko(f.mutation,d,Jt.empty(),Be.now()),vu(n,d)&&(l=l.insert(c,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:kn(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:uR(s.bundledQuery),readTime:kn(s.readTime)}}(n)),V.resolve()}}/**
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
 */class yR{constructor(){this.overlays=new Se(G.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fs();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=fs(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=fs(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=fs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return V.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UC(n,r));let i=this.Ir.get(n);i===void 0&&(i=ne(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class vR{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Zp{constructor(){this.Tr=new rt(Ge.Er),this.dr=new rt(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new _e([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new _e([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ne();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class wR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new rt(Ge.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ce);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new G(i),0);let l=new rt(ce);return this.br.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(c.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){he(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),s=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _R{constructor(e){this.Mr=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=sr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=sr();const o=n.path,l=new G(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||nC(tC(f),r)<=0||(s.has(f.key)||vu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xR(this)}getSize(e){return V.resolve(this.size)}}class xR extends fR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class ER{constructor(e){this.persistence=e,this.Nr=new Ki(n=>Wp(n),Gp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zp,this.targetCount=0,this.kr=Li.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
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
 */class bR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Bp(0),this.Kr=!1,this.Kr=!0,this.$r=new vR,this.referenceDelegate=e(this),this.Ur=new ER(this),this.indexManager=new dR,this.remoteDocumentCache=function(s){return new _R(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new cR(n),this.Gr=new gR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new wR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new TR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class TR extends sC{constructor(e){super(),this.currentSequenceNumber=e}}class em{constructor(e){this.persistence=e,this.Jr=new Zp,this.Yr=null}static Zr(e){return new em(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=G.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class tm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new tm(e,n.fromCache,r,s)}}/**
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
 */class IR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return IN()?8:iC(yt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new IR;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(xo()<=re.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(xo()<=re.DEBUG&&W("QueryEngine","Query:",Ks(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(xo()<=re.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):V.resolve())}Yi(e,n){if(P0(n))return V.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=yf(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.ts(n,l);return this.ns(n,d,o,c.readTime)?this.Yi(e,yf(n,null,"F")):this.rs(e,d,n,c)}))})))}Zi(e,n,r,s){return P0(n)||s.isEqual(J.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?V.resolve(null):(xo()<=re.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ks(n)),this.rs(e,o,n,eC(s,-1)).next(l=>l))})}ts(e,n){let r=new rt(rE(e));return n.forEach((s,i)=>{vu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return xo()<=re.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ks(n)),this.Ji.getDocumentsMatchingQuery(e,n,qr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Se(ce),this._s=new Ki(i=>Wp(i),Gp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function NR(t,e,n,r){return new kR(t,e,n,r)}async function TE(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ne();for(const d of s){o.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function AR(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,d,f){const m=d.batch,g=m.keys();let v=V.resolve();return g.forEach(S=>{v=v.next(()=>f.getEntry(c,S)).next(A=>{const N=d.docVersions.get(S);he(N!==null),A.version.compareTo(N)<0&&(m.applyToRemoteDocument(A,d),A.isValidDocument()&&(A.setReadTime(d.commitVersion),f.addEntry(A)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ne();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function IE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function CR(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(it.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(m,v),function(A,N,w){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,v,f)&&l.push(n.Ur.updateTargetData(i,v))});let c=sr(),d=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(RR(i,o,e.documentUpdates).next(f=>{c=f.Ps,d=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(n.os=s,i))}function RR(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=sr();return n.forEach((l,c)=>{const d=i.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function PR(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ef(t,e,n){const r=Z(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ua(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function z0(t,e,n){const r=Z(t);let s=J.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,d,f){const m=Z(c),g=m._s.get(f);return g!==void 0?V.resolve(m.os.get(g)):m.Ur.getTargetData(d,f)}(r,o,Sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ne())).next(l=>(DR(r,bC(e),l),{documents:l,Ts:i})))}function DR(t,e,n){let r=t.us.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class q0{constructor(){this.activeTargetIds=AC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OR{constructor(){this.so=new q0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new q0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class LR{_o(e){}shutdown(){}}/**
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
 */class W0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jl=null;function Wd(){return jl===null?jl=function(){return 268435456+Math.round(2147483648*Math.random())}():jl++,"0x"+jl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class VR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const dt="WebChannelConnection";class FR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Wd(),c=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,c,d,s).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Pi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=MR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Wd();return new Promise((o,l)=>{const c=new Fx;c.setWithCredentials(!0),c.listenOnce(Ux.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ql.NO_ERROR:const f=c.getResponseJson();W(dt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Ql.TIMEOUT:W(dt,`RPC '${e}' ${i} timed out`),l(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ql.HTTP_ERROR:const m=c.getStatus();if(W(dt,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const S=function(N){const w=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(v.status);l(new z(S,v.message))}else l(new z(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new z(L.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{W(dt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);W(dt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=Wd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zx(),l=$x(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");W(dt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=o.createWebChannel(f,c);let g=!1,v=!1;const S=new VR({Io:N=>{v?W(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(W(dt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),W(dt,`RPC '${e}' stream ${s} sending:`,N),m.send(N))},To:()=>m.close()}),A=(N,w,x)=>{N.listen(w,b=>{try{x(b)}catch(D){setTimeout(()=>{throw D},0)}})};return A(m,Ro.EventType.OPEN,()=>{v||(W(dt,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),A(m,Ro.EventType.CLOSE,()=>{v||(v=!0,W(dt,`RPC '${e}' stream ${s} transport closed`),S.So())}),A(m,Ro.EventType.ERROR,N=>{v||(v=!0,Pi(dt,`RPC '${e}' stream ${s} transport errored:`,N),S.So(new z(L.UNAVAILABLE,"The operation could not be completed")))}),A(m,Ro.EventType.MESSAGE,N=>{var w;if(!v){const x=N.data[0];he(!!x);const b=x,D=b.error||((w=b[0])===null||w===void 0?void 0:w.error);if(D){W(dt,`RPC '${e}' stream ${s} received error:`,D);const M=D.status;let F=function(E){const T=Me[E];if(T!==void 0)return pE(T)}(M),I=D.message;F===void 0&&(F=L.INTERNAL,I="Unknown error status: "+M+" with message "+D.message),v=!0,S.So(new z(F,I)),m.close()}else W(dt,`RPC '${e}' stream ${s} received:`,x),S.bo(x)}}),A(l,Bx.STAT_EVENT,N=>{N.stat===df.PROXY?W(dt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===df.NOPROXY&&W(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Gd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){return new QC(t,!0)}/**
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
 */class SE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class kE{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new SE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UR extends kE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=JC(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?kn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=xf(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=mf(c)?{documents:tR(i,c)}:{query:nR(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=yE(i,o.resumeToken);const d=vf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Oc(i,o.snapshotVersion.toTimestamp());const d=vf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=sR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=xf(this.serializer),n.removeTarget=e,this.a_(n)}}class BR extends kE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=eR(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=xf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZC(this.serializer,r))};this.a_(n)}}/**
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
 */class $R extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,wf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,wf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class zR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(rr(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class qR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Us(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=Z(c);d.L_.add(4),await za(d),d.q_.set("Unknown"),d.L_.delete(4),await bu(d)}(this))})}),this.q_=new zR(r,s)}}async function bu(t){if(Us(t))for(const e of t.B_)await e(!0)}async function za(t){for(const e of t.B_)await e(!1)}function NE(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),im(n)?sm(n):Qi(n).r_()&&rm(n,e))}function nm(t,e){const n=Z(t),r=Qi(n);n.N_.delete(e),r.r_()&&AE(n,e),n.N_.size===0&&(r.r_()?r.o_():Us(n)&&n.q_.set("Unknown"))}function rm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qi(t).A_(e)}function AE(t,e){t.Q_.xe(e),Qi(t).R_(e)}function sm(t){t.Q_=new WC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qi(t).start(),t.q_.v_()}function im(t){return Us(t)&&!Qi(t).n_()&&t.N_.size>0}function Us(t){return Z(t).L_.size===0}function CE(t){t.Q_=void 0}async function WR(t){t.q_.set("Online")}async function GR(t){t.N_.forEach((e,n)=>{rm(t,e)})}async function HR(t,e){CE(t),im(t)?(t.q_.M_(e),sm(t)):t.q_.set("Unknown")}async function KR(t,e,n){if(t.q_.set("Online"),e instanceof gE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lc(t,r)}else if(e instanceof Jl?t.Q_.Ke(e):e instanceof mE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await IE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(it.EMPTY_BYTE_STRING,f.snapshotVersion)),AE(i,c);const m=new Cr(f.target,c,d,f.sequenceNumber);rm(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Lc(t,r)}}async function Lc(t,e,n){if(!Ua(e))throw e;t.L_.add(1),await za(t),t.q_.set("Offline"),n||(n=()=>IE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await bu(t)})}function RE(t,e){return e().catch(n=>Lc(t,n,e))}async function Tu(t){const e=Z(t),n=Gr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;QR(e);)try{const s=await PR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,YR(e,s)}catch(s){await Lc(e,s)}PE(e)&&jE(e)}function QR(t){return Us(t)&&t.O_.length<10}function YR(t,e){t.O_.push(e);const n=Gr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function PE(t){return Us(t)&&!Gr(t).n_()&&t.O_.length>0}function jE(t){Gr(t).start()}async function XR(t){Gr(t).p_()}async function JR(t){const e=Gr(t);for(const n of t.O_)e.m_(n.mutations)}async function ZR(t,e,n){const r=t.O_.shift(),s=Yp.from(r,e,n);await RE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Tu(t)}async function eP(t,e){e&&Gr(t).V_&&await async function(r,s){if(function(o){return $C(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();Gr(r).s_(),await RE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Tu(r)}}(t,e),PE(t)&&jE(t)}async function G0(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Us(n);n.L_.add(3),await za(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await bu(n)}async function tP(t,e){const n=Z(t);e?(n.L_.delete(2),await bu(n)):e||(n.L_.add(2),await za(n),n.q_.set("Unknown"))}function Qi(t){return t.K_||(t.K_=function(n,r,s){const i=Z(n);return i.w_(),new UR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:WR.bind(null,t),Ro:GR.bind(null,t),mo:HR.bind(null,t),d_:KR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),im(t)?sm(t):t.q_.set("Unknown")):(await t.K_.stop(),CE(t))})),t.K_}function Gr(t){return t.U_||(t.U_=function(n,r,s){const i=Z(n);return i.w_(),new BR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:XR.bind(null,t),mo:eP.bind(null,t),f_:JR.bind(null,t),g_:ZR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Tu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class om{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new om(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function am(t,e){if(rr("AsyncQueue",`${e}: ${t}`),Ua(t))return new z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Po(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class H0{constructor(){this.W_=new Se(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,s,i,o,l,c,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Mi(e,n,vi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class nP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class rP{constructor(){this.queries=K0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=K0(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new z(L.ABORTED,"Firestore shutting down"))}}function K0(){return new Ki(t=>nE(t),yu)}async function DE(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new nP,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=am(o,`Initialization of query '${Ks(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&lm(n)}async function OE(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sP(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&lm(n)}function iP(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function lm(t){t.Y_.forEach(e=>{e.next()})}var bf,Q0;(Q0=bf||(bf={})).ea="default",Q0.Cache="cache";class LE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bf.Cache}}/**
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
 */class ME{constructor(e){this.key=e}}class VE{constructor(e){this.key=e}}class oP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=rE(e),this.Ra=new vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new H0,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),v=vu(this.query,m)?m:null,S=!!g&&this.mutatedKeys.has(g.key),A=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;g&&v?g.data.isEqual(v.data)?S!==A&&(r.track({type:3,doc:v}),N=!0):this.ga(g,v)||(r.track({type:2,doc:v}),N=!0,(c&&this.Aa(v,c)>0||d&&this.Aa(v,d)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),N=!0):g&&!v&&(r.track({type:1,doc:g}),N=!0,(c||d)&&(l=!0)),N&&(v?(o=o.add(v),i=A?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(v,S){const A=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return A(v)-A(S)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,d=c!==this.Ea;return this.Ea=c,o.length!==0||d?{snapshot:new Mi(this.query,e.Ra,i,o,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new H0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new VE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new ME(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Mi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class aP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lP{constructor(e){this.key=e,this.va=!1}}class cP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ki(l=>nE(l),yu),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(G.comparator),this.Na=new Map,this.La=new Zp,this.Ba={},this.ka=new Map,this.qa=Li.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function uP(t,e,n=!0){const r=qE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await FE(r,e,n,!0),s}async function dP(t,e){const n=qE(t);await FE(n,e,!0,!1)}async function FE(t,e,n,r){const s=await jR(t.localStore,Sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await hP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&NE(t.remoteStore,s),l}async function hP(t,e,n,r,s){t.Ka=(m,g,v)=>async function(A,N,w,x){let b=N.view.ma(w);b.ns&&(b=await z0(A.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,b)));const D=x&&x.targetChanges.get(N.targetId),M=x&&x.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(b,A.isPrimaryClient,D,M);return X0(A,N.targetId,F.wa),F.snapshot}(t,m,g,v);const i=await z0(t.localStore,e,!0),o=new oP(e,i.Ts),l=o.ma(i.documents),c=$a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,c);X0(t,n,d.wa);const f=new aP(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function fP(t,e,n){const r=Z(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!yu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ef(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&nm(r.remoteStore,s.targetId),Tf(r,s.targetId)}).catch(Fa)):(Tf(r,s.targetId),await Ef(r.localStore,s.targetId,!0))}async function pP(t,e){const n=Z(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nm(n.remoteStore,r.targetId))}async function mP(t,e,n){const r=EP(t);try{const s=await function(o,l){const c=Z(o),d=Be.now(),f=l.reduce((v,S)=>v.add(S.key),ne());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let S=sr(),A=ne();return c.cs.getEntries(v,f).next(N=>{S=N,S.forEach((w,x)=>{x.isValidDocument()||(A=A.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,S)).next(N=>{m=N;const w=[];for(const x of l){const b=MC(x,m.get(x.key).overlayedDocument);b!=null&&w.push(new Jr(x.key,b,Kx(b.value.mapValue),en.exists(!0)))}return c.mutationQueue.addMutationBatch(v,d,w,l)}).next(N=>{g=N;const w=N.applyToLocalDocumentSet(m,A);return c.documentOverlayCache.saveOverlays(v,N.batchId,w)})}).then(()=>({batchId:g.batchId,changes:iE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let d=o.Ba[o.currentUser.toKey()];d||(d=new Se(ce)),d=d.insert(l,c),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await qa(r,s.changes),await Tu(r.remoteStore)}catch(s){const i=am(s,"Failed to persist write");n.reject(i)}}async function UE(t,e){const n=Z(t);try{const r=await CR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?he(o.va):s.removedDocuments.size>0&&(he(o.va),o.va=!1))}),await qa(n,r,e)}catch(r){await Fa(r)}}function Y0(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=Z(o);c.onlineState=l;let d=!1;c.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&lm(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gP(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Se(G.comparator);o=o.insert(i,pt.newNoDocument(i,J.min()));const l=ne().add(i),c=new xu(J.min(),new Map,new Se(ce),o,l);await UE(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),cm(r)}else await Ef(r.localStore,e,!1).then(()=>Tf(r,e,n)).catch(Fa)}async function yP(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await AR(n.localStore,e);$E(n,r,null),BE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qa(n,s)}catch(s){await Fa(s)}}async function vP(t,e,n){const r=Z(t);try{const s=await function(o,l){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,l).next(m=>(he(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(d,m))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(r.localStore,e);$E(r,e,n),BE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qa(r,s)}catch(s){await Fa(s)}}function BE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function $E(t,e,n){const r=Z(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Tf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||zE(t,r)})}function zE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(nm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),cm(t))}function X0(t,e,n){for(const r of n)r instanceof ME?(t.La.addReference(r.key,e),wP(t,r)):r instanceof VE?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||zE(t,r.key)):Y()}function wP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),cm(t))}function cm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new lP(n)),t.Oa=t.Oa.insert(n,r),NE(t.remoteStore,new Cr(Sn(Hp(n.path)),r,"TargetPurposeLimboResolution",Bp.oe))}}async function qa(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(d){s.push(d);const m=tm.Wi(c.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,d){const f=Z(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(d,g=>V.forEach(g.$i,v=>f.persistence.referenceDelegate.addReference(m,g.targetId,v)).next(()=>V.forEach(g.Ui,v=>f.persistence.referenceDelegate.removeReference(m,g.targetId,v)))))}catch(m){if(!Ua(m))throw m;W("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const v=f.os.get(g),S=v.snapshotVersion,A=v.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(g,A)}}}(r.localStore,i))}async function _P(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await TE(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new z(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qa(n,r.hs)}}function xP(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let s=ne();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function qE(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=UE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gP.bind(null,e),e.Ca.d_=sP.bind(null,e.eventManager),e.Ca.$a=iP.bind(null,e.eventManager),e}function EP(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vP.bind(null,e),e}class Mc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return NR(this.persistence,new SR,e.initialUser,this.serializer)}Ga(e){return new bR(em.Zr,this.serializer)}Wa(e){return new OR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mc.provider={build:()=>new Mc};class If{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Y0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_P.bind(null,this.syncEngine),await tP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rP}()}createDatastore(e){const n=Eu(e.databaseInfo.databaseId),r=function(i){return new FR(i)}(e.databaseInfo);return function(i,o,l,c){return new $R(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new qR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Y0(this.syncEngine,n,0),function(){return W0.D()?new W0:new LR}())}createSyncEngine(e,n){return function(s,i,o,l,c,d,f){const m=new cP(s,i,o,l,c,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);W("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await za(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}If.provider={build:()=>new If};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class bP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=Wx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await TE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function J0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TP(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>G0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>G0(e.remoteStore,s)),t._onlineComponents=e}async function TP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await Hd(t,new Mc)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Hd(t,new Mc);return t._offlineComponents}async function GE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await J0(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await J0(t,new If))),t._onlineComponents}function IP(t){return GE(t).then(e=>e.syncEngine)}async function HE(t){const e=await GE(t),n=e.eventManager;return n.onListen=uP.bind(null,e.syncEngine),n.onUnlisten=fP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=pP.bind(null,e.syncEngine),n}function SP(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const f=new WE({next:g=>{f.Za(),o.enqueueAndForget(()=>OE(i,m));const v=g.docs.has(l);!v&&g.fromCache?d.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?d.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new LE(Hp(l.path),f,{includeMetadataChanges:!0,_a:!0});return DE(i,m)}(await HE(t),t.asyncQueue,e,n,r)),r.promise}function kP(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const f=new WE({next:g=>{f.Za(),o.enqueueAndForget(()=>OE(i,m)),g.fromCache&&c.source==="server"?d.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new LE(l,f,{includeMetadataChanges:!0,_a:!0});return DE(i,m)}(await HE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function KE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new Map;/**
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
 */function QE(t,e,n){if(!n)throw new z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NP(t,e,n,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ev(t){if(!G.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tv(t){if(G.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Iu(t);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Su{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WA;switch(r.type){case"firstParty":return new QA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Z0.get(n);r&&(W("ComponentProvider","Removing Datastore"),Z0.delete(n),r.terminate())}(this),Promise.resolve()}}function AP(t,e,n,r={}){var s;const i=(t=mn(t,Su))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ht.MOCK_USER;else{l=Cx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ht(d)}t._authCredentials=new GA(new qx(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bs(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Br extends Bs{constructor(e,n,r){super(e,n,Hp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new G(e))}withConverter(e){return new Br(this.firestore,e,this._path)}}function Vi(t,e,...n){if(t=ue(t),QE("collection","path",e),t instanceof Su){const r=_e.fromString(e,...n);return tv(r),new Br(t,null,r)}{if(!(t instanceof Tt||t instanceof Br))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return tv(r),new Br(t.firestore,null,r)}}function Rt(t,e,...n){if(t=ue(t),arguments.length===1&&(e=Wx.newId()),QE("doc","path",e),t instanceof Su){const r=_e.fromString(e,...n);return ev(r),new Tt(t,null,new G(r))}{if(!(t instanceof Tt||t instanceof Br))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return ev(r),new Tt(t.firestore,t instanceof Br?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new SE(this,"async_queue_retry"),this.Vu=()=>{const r=Gd();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Gd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Gd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Yn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ua(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw rr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=om.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class $s extends Su{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new rv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rv(e),this._firestoreClient=void 0,await e}}}function YE(t,e){const n=typeof t=="object"?t:Wi(),r=typeof t=="string"?t:"(default)",s=Pn(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Lp("firestore");i&&AP(s,...i)}return s}function um(t){if(t._terminated)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CP(t),t._firestoreClient}function CP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,d,f){return new lC(l,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,KE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new bP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fi(it.fromBase64String(e))}catch(n){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fi(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this._methodName=e}}/**
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
 */class dm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class hm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const RP=/^__.*__$/;class PP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ba(e,this.data,n,this.fieldTransforms)}}class jP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function XE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class fm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new fm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Vc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(XE(this.Cu)&&RP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class DP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Eu(e)}Qu(e,n,r,s=!1){return new fm({Cu:e,methodName:n,qu:r,path:tt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Au(t){const e=t._freezeSettings(),n=Eu(t._databaseId);return new DP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);gm("Data must be an object, but it was:",o,r);const l=ZE(r,o);let c,d;if(i.merge)c=new Jt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=tb(e,m,n);if(!o.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);FP(f,g)||f.push(g)}c=new Jt(f),d=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,d=o.fieldTransforms;return new PP(new Ft(l),c,d)}class pm extends Nu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pm}}class mm extends Nu{_toFieldTransform(e){return new jC(e.path,new ba)}isEqual(e){return e instanceof mm}}function OP(t,e,n,r){const s=t.Qu(1,e,n);gm("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();Fs(r,(c,d)=>{const f=ym(e,c,n);d=ue(d);const m=s.Nu(f);if(d instanceof pm)i.push(f);else{const g=Cu(d,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Jt(i);return new jP(o,l,s.fieldTransforms)}function LP(t,e,n,r,s,i){if(t.Qu(1,e,n),tb(e,r,n),i.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`)}function MP(t,e,n,r=!1){return Cu(n,t.Qu(r?4:3,e))}function Cu(t,e){if(eb(t=ue(t)))return gm("Unsupported field value:",e,t),ZE(t,e);if(t instanceof Nu)return function(r,s){if(!XE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Cu(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Oc(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oc(s.serializer,i)}}if(r instanceof dm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fi)return{bytesValue:yE(s.serializer,r._byteString)};if(r instanceof Tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof hm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Kp(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Iu(r)}`)}(t,e)}function ZE(t,e){const n={};return Gx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fs(t,(r,s)=>{const i=Cu(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function eb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof dm||t instanceof Fi||t instanceof Tt||t instanceof Nu||t instanceof hm)}function gm(t,e,n){if(!eb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Iu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function tb(t,e,n){if((e=ue(e))instanceof ku)return e._internalPath;if(typeof e=="string")return ym(t,e);throw Vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const VP=new RegExp("[~\\*/\\[\\]]");function ym(t,e,n){if(e.search(VP)>=0)throw Vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ku(...e.split("."))._internalPath}catch{throw Vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new z(L.INVALID_ARGUMENT,l+t+c)}function FP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ru("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UP extends nb{data(){return super.data()}}function Ru(t,e){return typeof e=="string"?ym(t,e):e instanceof ku?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vm{}class rb extends vm{}function Sa(t,e,...n){let r=[];e instanceof vm&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof wm).length,l=i.filter(c=>c instanceof Pu).length;if(o>1||o>0&&l>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Pu extends rb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pu(e,n,r)}_apply(e){const n=this._parse(e);return sb(e._query,n),new Bs(e.firestore,e.converter,gf(e._query,n))}_parse(e){const n=Au(e.firestore);return function(i,o,l,c,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){iv(m,f);const v=[];for(const S of m)v.push(sv(c,i,S));g={arrayValue:{values:v}}}else g=sv(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||iv(m,f),g=MP(l,o,m,f==="in"||f==="not-in");return Ue.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Fc(t,e,n){const r=e,s=Ru("where",t);return Pu._create(s,r,n)}class wm extends vm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)sb(o,c),o=gf(o,c)}(e._query,n),new Bs(e.firestore,e.converter,gf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _m extends rb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _m(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ea(i,o)}(e._query,this._field,this._direction);return new Bs(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Hi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function $P(t,e="asc"){const n=e,r=Ru("orderBy",t);return _m._create(r,n)}function sv(t,e,n){if(typeof(n=ue(n))=="string"){if(n==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tE(e)&&n.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!G.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return S0(t,new G(r))}if(n instanceof Tt)return S0(t,n._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Iu(n)}.`)}function iv(t,e){if(!Array.isArray(t)||t.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sb(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class zP{convertValue(e,n="none"){switch(ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>je(o.doubleValue));return new hm(i)}convertGeoPoint(e){return new dm(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wa(e));default:return null}}convertTimestamp(e){const n=Wr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);he(bE(r));const s=new _a(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||rr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ob extends nb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ru("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zl extends ob{data(e={}){return super.data(e)}}class qP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Do(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zl(this._firestore,this._userDataWriter,r.key,r,new Do(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Do(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Do(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:WP(l.type),doc:c,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){t=mn(t,Tt);const e=mn(t.firestore,$s);return SP(um(e),t._key).then(n=>HP(e,t,n))}class ab extends zP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function ka(t){t=mn(t,Bs);const e=mn(t.firestore,$s),n=um(e),r=new ab(e);return BP(t._query),kP(n,t._query).then(s=>new qP(e,r,t,s))}function lb(t,e,n){t=mn(t,Tt);const r=mn(t.firestore,$s),s=ib(t.converter,e,n);return ju(r,[JE(Au(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function Na(t,e,n,...r){t=mn(t,Tt);const s=mn(t.firestore,$s),i=Au(s);let o;return o=typeof(e=ue(e))=="string"||e instanceof ku?LP(i,"updateDoc",t._key,e,n,r):OP(i,"updateDoc",t._key,e),ju(s,[o.toMutation(t._key,en.exists(!0))])}function GP(t){return ju(mn(t.firestore,$s),[new Qp(t._key,en.none())])}function cb(t,e){const n=mn(t.firestore,$s),r=Rt(t),s=ib(t.converter,e);return ju(n,[JE(Au(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function ju(t,e){return function(r,s){const i=new Yn;return r.asyncQueue.enqueueAndForget(async()=>mP(await IP(r),s,i)),i.promise}(um(t),e)}function HP(t,e,n){const r=n.docs.get(e._key),s=new ab(t);return new ob(t,s,e._key,r,new Do(n.hasPendingWrites,n.fromCache),e.converter)}function ps(){return new mm("serverTimestamp")}(function(e,n=!0){(function(s){Gi=s})(Vs),Lt(new St("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new $s(new HA(r.getProvider("auth-internal")),new XA(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _a(d.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qe(x0,"4.7.3",e),Qe(x0,"4.7.3","esm2017")})();function xm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ub(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KP=ub,db=new Xr("auth","Firebase",ub());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new pu("@firebase/auth");function QP(t,...e){Uc.logLevel<=re.WARN&&Uc.warn(`Auth (${Vs}): ${t}`,...e)}function ec(t,...e){Uc.logLevel<=re.ERROR&&Uc.error(`Auth (${Vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw Em(t,...e)}function Nn(t,...e){return Em(t,...e)}function hb(t,e,n){const r=Object.assign(Object.assign({},KP()),{[e]:n});return new Xr("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return hb(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Em(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return db.create(t,...e)}function Q(t,e,...n){if(!t)throw Em(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ec(e),new Error(e)}function ir(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YP(){return ov()==="http:"||ov()==="https:"}function ov(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YP()||Rx()||"connection"in navigator)?navigator.onLine:!0}function JP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=_N()||bN()}get(){return XP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=new Wa(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ur(t,e,n,r,s={}){return pb(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Va(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},i);return EN()||(d.referrerPolicy="no-referrer"),fb.fetch()(mb(t,t.config.apiHost,n,l),d)})}async function pb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZP),e);try{const s=new n2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Dl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Dl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Dl(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw hb(t,f,d);gn(t,f)}}catch(s){if(s instanceof Ht)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function Ga(t,e,n,r,s={}){const i=await ur(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function mb(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bm(t.config,s):`${t.config.apiScheme}://${s}`}function t2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class n2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),e2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nn(t,e,r);return s.customData._tokenResponse=n,s}function av(t){return t!==void 0&&t.enterprise!==void 0}class r2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return t2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function s2(t,e){return ur(t,"GET","/v2/recaptchaConfig",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t,e){return ur(t,"POST","/v1/accounts:delete",e)}async function gb(t,e){return ur(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function o2(t,e=!1){const n=ue(t),r=await n.getIdToken(e),s=Tm(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qo(Kd(s.auth_time)),issuedAtTime:Qo(Kd(s.iat)),expirationTime:Qo(Kd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Kd(t){return Number(t)*1e3}function Tm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const s=Sx(n);return s?JSON.parse(s):(ec("Failed to decode base64 JWT payload"),null)}catch(s){return ec("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lv(t){const e=Tm(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&a2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function a2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qo(this.lastLoginAt),this.creationTime=Qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Aa(t,gb(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yb(i.providerUserInfo):[],l=u2(t.providerData,o),c=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new kf(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function c2(t){const e=ue(t);await Bc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yb(t){return t.map(e=>{var{providerId:n}=e,r=xm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e){const n=await pb(t,{},async()=>{const r=Va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=mb(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fb.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function h2(t,e){return ur(t,"POST","/v2/accounts:revokeToken",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=lv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await d2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new l2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return o2(this,e)}reload(){return c2(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await Aa(this,i2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(d=n.createdAt)!==null&&d!==void 0?d:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:b,emailVerified:D,isAnonymous:M,providerData:F,stsTokenManager:I}=n;Q(b&&I,e,"internal-error");const _=wi.fromJSON(this.name,I);Q(typeof b=="string",e,"internal-error"),mr(m,e.name),mr(g,e.name),Q(typeof D=="boolean",e,"internal-error"),Q(typeof M=="boolean",e,"internal-error"),mr(v,e.name),mr(S,e.name),mr(A,e.name),mr(N,e.name),mr(w,e.name),mr(x,e.name);const E=new Gn({uid:b,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:M,photoURL:S,phoneNumber:v,tenantId:A,stsTokenManager:_,createdAt:w,lastLoginAt:x});return F&&Array.isArray(F)&&(E.providerData=F.map(T=>Object.assign({},T))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new wi;s.updateFromServerResponse(n);const i=new Gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yb(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new wi;l.updateFromIdToken(r);const c=new Gn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Map;function Hn(t){ir(t instanceof Function,"Expected a class definition");let e=cv.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cv.set(t,e),e)}/**
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
 */class vb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vb.type="NONE";const uv=vb;/**
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
 */function tc(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=tc(this.userKey,s.apiKey,i),this.fullPersistenceKey=tc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _i(Hn(uv),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Hn(uv);const o=tc(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const m=Gn._fromJSON(e,f);d!==i&&(l=m),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _i(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new _i(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tb(e))return"Blackberry";if(Ib(e))return"Webos";if(_b(e))return"Safari";if((e.includes("chrome/")||xb(e))&&!e.includes("edge/"))return"Chrome";if(bb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wb(t=yt()){return/firefox\//i.test(t)}function _b(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xb(t=yt()){return/crios\//i.test(t)}function Eb(t=yt()){return/iemobile/i.test(t)}function bb(t=yt()){return/android/i.test(t)}function Tb(t=yt()){return/blackberry/i.test(t)}function Ib(t=yt()){return/webos/i.test(t)}function Im(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function f2(t=yt()){var e;return Im(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function p2(){return TN()&&document.documentMode===10}function Sb(t=yt()){return Im(t)||bb(t)||Ib(t)||Tb(t)||/windows phone/i.test(t)||Eb(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t,e=[]){let n;switch(t){case"Browser":n=dv(yt());break;case"Worker":n=`${dv(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class m2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function g2(t,e={}){return ur(t,"GET","/v2/passwordPolicy",cr(t,e))}/**
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
 */const y2=6;class v2{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:y2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hv(this),this.idTokenSubscription=new hv(this),this.beforeStateQueue=new m2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=db,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gb(this,{idToken:e}),r=await Gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(En(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Xn(this));const n=e?ue(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await g2(this),n=new v2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await h2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zr(t){return ue(t)}class hv{constructor(e){this.auth=e,this.observer=null,this.addObserver=CN(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _2(t){Du=t}function Nb(t){return Du.loadJS(t)}function x2(){return Du.recaptchaEnterpriseScript}function E2(){return Du.gapiScript}function b2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const T2="recaptcha-enterprise",I2="NO_RECAPTCHA";class S2{constructor(e){this.type=T2,this.auth=Zr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{s2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new r2(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;av(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(I2)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&av(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=x2();c.length!==0&&(c+=l),Nb(c).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function fv(t,e,n,r=!1){const s=new S2(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $c(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await fv(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t,e){const n=Pn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ga(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function N2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function A2(t,e,n){const r=Zr(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ab(e),{host:o,port:l}=C2(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),R2()}function Ab(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function C2(t){const e=Ab(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pv(o)}}}function pv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function P2(t,e){return ur(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e){return Ga(t,"POST","/v1/accounts:signInWithPassword",cr(t,e))}async function D2(t,e){return ur(t,"POST","/v1/accounts:sendOobCode",cr(t,e))}async function O2(t,e){return D2(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}async function M2(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Sm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ca(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ca(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,n,"signInWithPassword",j2);case"emailLink":return L2(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,r,"signUpPassword",P2);case"emailLink":return M2(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e){return Ga(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2="http://localhost";class As extends Sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xm(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new As(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:V2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U2(t){const e=Ao(Co(t)).link,n=e?Ao(Co(e)).deep_link_id:null,r=Ao(Co(t)).deep_link_id;return(r?Ao(Co(r)).link:null)||r||n||e||t}class km{constructor(e){var n,r,s,i,o,l;const c=Ao(Co(e)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=F2((s=c.mode)!==null&&s!==void 0?s:null);Q(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=U2(e);try{return new km(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.providerId=Yi.PROVIDER_ID}static credential(e,n){return Ca._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=km.parseLink(n);return Q(r,"argument-error"),Ca._fromEmailAndCode(e,r.code,r.tenantId)}}Yi.PROVIDER_ID="password";Yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ha extends Cb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ha{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return As._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Ha{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ha{constructor(){super("twitter.com")}static credential(e,n){return As._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e){return Ga(t,"POST","/v1/accounts:signUp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Gn._fromIdTokenResponse(e,r,s),o=mv(r);return new Cs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mv(r);return new Cs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Ht{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zc(e,n,r,s)}}function Rb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zc._fromErrorAndOperation(t,i,e,r):i})}async function $2(t,e,n=!1){const r=await Aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",r)}/**
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
 */async function z2(t,e,n=!1){const{auth:r}=t;if(En(r.app))return Promise.reject(Xn(r));const s="reauthenticate";try{const i=await Aa(t,Rb(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Tm(i.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Cs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pb(t,e,n=!1){if(En(t.app))return Promise.reject(Xn(t));const r="signIn",s=await Rb(t,r,e),i=await Cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function q2(t,e){return Pb(Zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t){const e=Zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function W2(t,e,n){const r=Zr(t);await $c(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",O2)}async function G2(t,e,n){if(En(t.app))return Promise.reject(Xn(t));const r=Zr(t),o=await $c(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",B2).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&jb(t),c}),l=await Cs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function H2(t,e,n){return En(t.app)?Promise.reject(Xn(t)):q2(ue(t),Yi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jb(t),r})}function K2(t,e,n,r){return ue(t).onIdTokenChanged(e,n,r)}function Q2(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function Y2(t,e,n,r){return ue(t).onAuthStateChanged(e,n,r)}function X2(t){return ue(t).signOut()}const qc="__sak";/**
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
 */class Db{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qc,"1"),this.storage.removeItem(qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=1e3,Z2=10;class Ob extends Db{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);p2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ob.type="LOCAL";const ej=Ob;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb extends Db{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lb.type="SESSION";const Mb=Lb;/**
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
 */function tj(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),c=await tj(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ou.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nj{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const d=Nm("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function rj(t){An().location.href=t}/**
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
 */function Vb(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function sj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ij(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oj(){return Vb()?self:null}/**
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
 */const Fb="firebaseLocalStorageDb",aj=1,Wc="firebaseLocalStorage",Ub="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lu(t,e){return t.transaction([Wc],e?"readwrite":"readonly").objectStore(Wc)}function lj(){const t=indexedDB.deleteDatabase(Fb);return new Ka(t).toPromise()}function Nf(){const t=indexedDB.open(Fb,aj);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wc,{keyPath:Ub})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wc)?e(r):(r.close(),await lj(),e(await Nf()))})})}async function gv(t,e,n){const r=Lu(t,!0).put({[Ub]:e,value:n});return new Ka(r).toPromise()}async function cj(t,e){const n=Lu(t,!1).get(e),r=await new Ka(n).toPromise();return r===void 0?null:r.value}function yv(t,e){const n=Lu(t,!0).delete(e);return new Ka(n).toPromise()}const uj=800,dj=3;class Bb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dj)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ou._getInstance(oj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sj(),!this.activeServiceWorker)return;this.sender=new nj(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ij()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nf();return await gv(e,qc,"1"),await yv(e,qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cj(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Lu(s,!1).getAll();return new Ka(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bb.type="LOCAL";const hj=Bb;new Wa(3e4,6e4);/**
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
 */function fj(t,e){return e?Hn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Am extends Sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pj(t){return Pb(t.auth,new Am(t),t.bypassAuthState)}function mj(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),z2(n,new Am(t),t.bypassAuthState)}async function gj(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),$2(n,new Am(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pj;case"linkViaPopup":case"linkViaRedirect":return gj;case"reauthViaPopup":case"reauthViaRedirect":return mj;default:gn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yj=new Wa(2e3,1e4);class ci extends $b{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yj.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vj="pendingRedirect",nc=new Map;class wj extends $b{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nc.get(this.auth._key());if(!e){try{const r=await _j(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nc.set(this.auth._key(),e)}return this.bypassAuthState||nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _j(t,e){const n=bj(e),r=Ej(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xj(t,e){nc.set(t._key(),e)}function Ej(t){return Hn(t._redirectPersistence)}function bj(t){return tc(vj,t.config.apiKey,t.name)}async function Tj(t,e,n=!1){if(En(t.app))return Promise.reject(Xn(t));const r=Zr(t),s=fj(r,e),o=await new wj(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ij=10*60*1e3;class Sj{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kj(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zb(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ij&&this.cachedEventUids.clear(),this.cachedEventUids.has(vv(e))}saveEventToCache(e){this.cachedEventUids.add(vv(e)),this.lastProcessedEventTime=Date.now()}}function vv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nj(t,e={}){return ur(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cj=/^https?/;async function Rj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nj(t);for(const n of e)try{if(Pj(n))return}catch{}gn(t,"unauthorized-domain")}function Pj(t){const e=Sf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Cj.test(n))return!1;if(Aj.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jj=new Wa(3e4,6e4);function wv(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dj(t){return new Promise((e,n)=>{var r,s,i;function o(){wv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wv(),n(Nn(t,"network-request-failed"))},timeout:jj.get()})}if(!((s=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=An().gapi)===null||i===void 0)&&i.load)o();else{const l=b2("iframefcb");return An()[l]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},Nb(`${E2()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw rc=null,e})}let rc=null;function Oj(t){return rc=rc||Dj(t),rc}/**
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
 */const Lj=new Wa(5e3,15e3),Mj="__/auth/iframe",Vj="emulator/auth/iframe",Fj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bj(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bm(e,Vj):`https://${t.config.authDomain}/${Mj}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},s=Uj.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Va(r).slice(1)}`}async function $j(t){const e=await Oj(t),n=An().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:Bj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fj,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),l=An().setTimeout(()=>{i(o)},Lj.get());function c(){An().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const zj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qj=500,Wj=600,Gj="_blank",Hj="http://localhost";class _v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kj(t,e,n,r=qj,s=Wj){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},zj),{width:r.toString(),height:s.toString(),top:i,left:o}),d=yt().toLowerCase();n&&(l=xb(d)?Gj:n),wb(d)&&(e=e||Hj,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[v,S])=>`${g}${v}=${S},`,"");if(f2(d)&&l!=="_self")return Qj(e||"",l),new _v(null);const m=window.open(e||"",l,f);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new _v(m)}function Qj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Yj="__/auth/handler",Xj="emulator/auth/handler",Jj=encodeURIComponent("fac");async function xv(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:s};if(e instanceof Cb){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",AN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ha){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),d=c?`#${Jj}=${encodeURIComponent(c)}`:"";return`${Zj(t)}?${Va(l).slice(1)}${d}`}function Zj({config:t}){return t.emulator?bm(t,Xj):`https://${t.authDomain}/${Yj}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="webStorageSupport";class eD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mb,this._completeRedirectFn=Tj,this._overrideRedirectResult=xj}async _openPopup(e,n,r,s){var i;ir((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xv(e,n,r,Sf(),s);return Kj(e,o,Nm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await xv(e,n,r,Sf(),s);return rj(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $j(e),r=new Sj(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qd,{type:Qd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qd];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sb()||_b()||Im()}}const tD=eD;var Ev="@firebase/auth",bv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sD(t){Lt(new St("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kb(t)},d=new w2(r,s,i,c);return N2(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Lt(new St("auth-internal",e=>{const n=Zr(e.getProvider("auth").getImmediate());return(r=>new nD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Ev,bv,rD(t)),Qe(Ev,bv,"esm2017")}/**
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
 */const iD=5*60,oD=Ax("authIdTokenMaxAge")||iD;let Tv=null;const aD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oD)return;const s=n==null?void 0:n.token;Tv!==s&&(Tv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lD(t=Wi()){const e=Pn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=k2(t,{popupRedirectResolver:tD,persistence:[hj,ej,Mb]}),r=Ax("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=aD(i.toString());Q2(n,o,()=>o(n.currentUser)),K2(n,l=>o(l))}}const s=kx("auth");return s&&A2(n,`http://${s}`),n}function cD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sD("Browser");const qb="@firebase/installations",Cm="0.6.9";/**
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
 */const Wb=1e4,Gb=`w:${Cm}`,Hb="FIS_v2",uD="https://firebaseinstallations.googleapis.com/v1",dD=60*60*1e3,hD="installations",fD="Installations";/**
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
 */const pD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rs=new Xr(hD,fD,pD);function Kb(t){return t instanceof Ht&&t.code.includes("request-failed")}/**
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
 */function Qb({projectId:t}){return`${uD}/projects/${t}/installations`}function Yb(t){return{token:t.token,requestStatus:2,expiresIn:gD(t.expiresIn),creationTime:Date.now()}}async function Xb(t,e){const r=(await e.json()).error;return Rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Jb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mD(t,{refreshToken:e}){const n=Jb(t);return n.append("Authorization",yD(e)),n}async function Zb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gD(t){return Number(t.replace("s","000"))}function yD(t){return`${Hb} ${t}`}/**
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
 */async function vD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Qb(t),s=Jb(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:n,authVersion:Hb,appId:t.appId,sdkVersion:Gb},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await Zb(()=>fetch(r,l));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Yb(d.authToken)}}else throw await Xb("Create Installation",c)}/**
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
 */function eT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function wD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const _D=/^[cdef][\w-]{21}$/,Af="";function xD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ED(t);return _D.test(n)?n:Af}catch{return Af}}function ED(t){return wD(t).substr(0,22)}/**
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
 */function Mu(t){return`${t.appName}!${t.appId}`}/**
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
 */const tT=new Map;function nT(t,e){const n=Mu(t);rT(n,e),bD(n,e)}function rT(t,e){const n=tT.get(t);if(n)for(const r of n)r(e)}function bD(t,e){const n=TD();n&&n.postMessage({key:t,fid:e}),ID()}let ms=null;function TD(){return!ms&&"BroadcastChannel"in self&&(ms=new BroadcastChannel("[Firebase] FID Change"),ms.onmessage=t=>{rT(t.data.key,t.data.fid)}),ms}function ID(){tT.size===0&&ms&&(ms.close(),ms=null)}/**
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
 */const SD="firebase-installations-database",kD=1,Ps="firebase-installations-store";let Yd=null;function Rm(){return Yd||(Yd=mu(SD,kD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ps)}}})),Yd}async function Gc(t,e){const n=Mu(t),s=(await Rm()).transaction(Ps,"readwrite"),i=s.objectStore(Ps),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&nT(t,e.fid),e}async function sT(t){const e=Mu(t),r=(await Rm()).transaction(Ps,"readwrite");await r.objectStore(Ps).delete(e),await r.done}async function Vu(t,e){const n=Mu(t),s=(await Rm()).transaction(Ps,"readwrite"),i=s.objectStore(Ps),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&nT(t,l.fid),l}/**
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
 */async function Pm(t){let e;const n=await Vu(t.appConfig,r=>{const s=ND(r),i=AD(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Af?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ND(t){const e=t||{fid:xD(),registrationStatus:0};return iT(e)}function AD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Rs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RD(t)}:{installationEntry:e}}async function CD(t,e){try{const n=await vD(t,e);return Gc(t.appConfig,n)}catch(n){throw Kb(n)&&n.customData.serverCode===409?await sT(t.appConfig):await Gc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RD(t){let e=await Iv(t.appConfig);for(;e.registrationStatus===1;)await eT(100),e=await Iv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pm(t);return r||n}return e}function Iv(t){return Vu(t,e=>{if(!e)throw Rs.create("installation-not-found");return iT(e)})}function iT(t){return PD(t)?{fid:t.fid,registrationStatus:0}:t}function PD(t){return t.registrationStatus===1&&t.registrationTime+Wb<Date.now()}/**
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
 */async function jD({appConfig:t,heartbeatServiceProvider:e},n){const r=DD(t,n),s=mD(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:Gb,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await Zb(()=>fetch(r,l));if(c.ok){const d=await c.json();return Yb(d)}else throw await Xb("Generate Auth Token",c)}function DD(t,{fid:e}){return`${Qb(t)}/${e}/authTokens:generate`}/**
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
 */async function jm(t,e=!1){let n;const r=await Vu(t.appConfig,i=>{if(!oT(i))throw Rs.create("not-registered");const o=i.authToken;if(!e&&MD(o))return i;if(o.requestStatus===1)return n=OD(t,e),i;{if(!navigator.onLine)throw Rs.create("app-offline");const l=FD(i);return n=LD(t,l),l}});return n?await n:r.authToken}async function OD(t,e){let n=await Sv(t.appConfig);for(;n.authToken.requestStatus===1;)await eT(100),n=await Sv(t.appConfig);const r=n.authToken;return r.requestStatus===0?jm(t,e):r}function Sv(t){return Vu(t,e=>{if(!oT(e))throw Rs.create("not-registered");const n=e.authToken;return UD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function LD(t,e){try{const n=await jD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Gc(t.appConfig,r),n}catch(n){if(Kb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Gc(t.appConfig,r)}throw n}}function oT(t){return t!==void 0&&t.registrationStatus===2}function MD(t){return t.requestStatus===2&&!VD(t)}function VD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+dD}function FD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UD(t){return t.requestStatus===1&&t.requestTime+Wb<Date.now()}/**
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
 */async function BD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Pm(e);return r?r.catch(console.error):jm(e).catch(console.error),n.fid}/**
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
 */async function $D(t,e=!1){const n=t;return await zD(n),(await jm(n,e)).token}async function zD(t){const{registrationPromise:e}=await Pm(t);e&&await e}/**
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
 */function qD(t){if(!t||!t.options)throw Xd("App Configuration");if(!t.name)throw Xd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xd(t){return Rs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="installations",WD="installations-internal",GD=t=>{const e=t.getProvider("app").getImmediate(),n=qD(e),r=Pn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},HD=t=>{const e=t.getProvider("app").getImmediate(),n=Pn(e,aT).getImmediate();return{getId:()=>BD(n),getToken:s=>$D(n,s)}};function KD(){Lt(new St(aT,GD,"PUBLIC")),Lt(new St(WD,HD,"PRIVATE"))}KD();Qe(qb,Cm);Qe(qb,Cm,"esm2017");/**
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
 */const Hc="analytics",QD="firebase_id",YD="origin",XD=60*1e3,JD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dm="https://www.googletagmanager.com/gtag/js";/**
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
 */const It=new pu("@firebase/analytics");/**
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
 */const ZD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new Xr("analytics","Analytics",ZD);/**
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
 */function eO(t){if(!t.startsWith(Dm)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function lT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function tO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nO(t,e){const n=tO("firebase-js-sdk-policy",{createScriptURL:eO}),r=document.createElement("script"),s=`${Dm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function rO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function sO(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await lT(n)).find(d=>d.measurementId===s);c&&await e[c.appId]}}catch(l){It.error(l)}t("config",s,i)}async function iO(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await lT(n);for(const c of o){const d=l.find(m=>m.measurementId===c),f=d&&e[d.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){It.error(i)}}function oO(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await iO(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await sO(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,d]=o;t("get",l,c,d)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){It.error(l)}}return s}function aO(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=oO(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function lO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=30,uO=1e3;class dO{constructor(e={},n=uO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const cT=new dO;function hO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fO(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:hO(r)},i=JD.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function pO(t,e=cT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw zt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new yO;return setTimeout(async()=>{l.abort()},XD),uT({appId:r,apiKey:s,measurementId:i},o,l,e)}async function uT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=cT){var i;const{appId:o,measurementId:l}=t;try{await mO(r,e)}catch(c){if(l)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await fO(t);return s.deleteThrottleMetadata(o),c}catch(c){const d=c;if(!gO(d)){if(s.deleteThrottleMetadata(o),l)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw c}const f=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?d0(n,s.intervalMillis,cO):d0(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,m),It.debug(`Calling attemptFetch again in ${f} millis`),uT(t,m,r,s)}}function mO(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gO(t){if(!(t instanceof Ht)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class yO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vO(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}async function wO(t,e,n,r){{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(){if(Mp())try{await Vp()}catch(t){return It.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xO(t,e,n,r,s,i,o){var l;const c=pO(t);c.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>It.error(v)),e.push(c);const d=_O().then(v=>{if(v)return r.getId()}),[f,m]=await Promise.all([c,d]);lO(i)||nO(i,f.measurementId),s("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[YD]="firebase",g.update=!0,m!=null&&(g[QD]=m),s("config",f.measurementId,g),f.measurementId}/**
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
 */let EO=class{constructor(e){this.app=e}_delete(){return delete Ei[this.app.options.appId],Promise.resolve()}},Ei={},kv=[];const Nv={};let Jd="dataLayer",bO="gtag",Av,Om,Cv=!1;function TO(){const t=[];if(Rx()&&t.push("This is a browser extension environment."),Px()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function IO(t,e,n){TO();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(Ei[r]!=null)throw zt.create("already-exists",{id:r});if(!Cv){rO(Jd);const{wrappedGtag:i,gtagCore:o}=aO(Ei,kv,Nv,Jd,bO);Om=i,Av=o,Cv=!0}return Ei[r]=xO(t,kv,Nv,e,Av,Jd,n),new EO(t)}function SO(t=Wi()){t=ue(t);const e=Pn(t,Hc);return e.isInitialized()?e.getImmediate():kO(t)}function kO(t,e={}){const n=Pn(t,Hc);if(n.isInitialized()){const s=n.getImmediate();if(ga(e,n.getOptions()))return s;throw zt.create("already-initialized")}return n.initialize({options:e})}function NO(t,e,n){t=ue(t),wO(Om,Ei[t.app.options.appId],e).catch(r=>It.error(r))}function dT(t,e,n,r){t=ue(t),vO(Om,Ei[t.app.options.appId],e,n,r).catch(s=>It.error(s))}const Rv="@firebase/analytics",Pv="0.10.8";function AO(){Lt(new St(Hc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return IO(r,s,n)},"PUBLIC")),Lt(new St("analytics-internal",t,"PRIVATE")),Qe(Rv,Pv),Qe(Rv,Pv,"esm2017");function t(e){try{const n=e.getProvider(Hc).getImmediate();return{logEvent:(r,s,i)=>dT(n,r,s,i)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}AO();/**
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
 */const hT="firebasestorage.googleapis.com",fT="storageBucket",CO=2*60*1e3,RO=10*60*1e3;/**
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
 */class Re extends Ht{constructor(e,n,r=0){super(Zd(e),`Firebase Storage: ${n} (${Zd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function Zd(t){return"storage/"+t}function Lm(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(Ce.UNKNOWN,t)}function PO(t){return new Re(Ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jO(t){return new Re(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function DO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(Ce.UNAUTHENTICATED,t)}function OO(){return new Re(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LO(t){return new Re(Ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function MO(){return new Re(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VO(){return new Re(Ce.CANCELED,"User canceled the upload/download.")}function FO(t){return new Re(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function UO(t){return new Re(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function BO(){return new Re(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fT+"' property when initializing the app?")}function $O(){return new Re(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zO(){return new Re(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qO(t){return new Re(Ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cf(t){return new Re(Ce.INVALID_ARGUMENT,t)}function pT(){return new Re(Ce.APP_DELETED,"The Firebase app was deleted.")}function WO(t){return new Re(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Yo(t,e){return new Re(Ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Eo(t){throw new Re(Ce.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw UO(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function d(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),S={bucket:1,path:3},A=n===hT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",w=new RegExp(`^https?://${A}/${s}/${N}`,"i"),b=[{regex:l,indices:c,postModify:i},{regex:v,indices:S,postModify:d},{regex:w,indices:{bucket:1,path:2},postModify:d}];for(let D=0;D<b.length;D++){const M=b[D],F=M.regex.exec(e);if(F){const I=F[M.indices.bucket];let _=F[M.indices.path];_||(_=""),r=new Bt(I,_),M.postModify(r);break}}if(r==null)throw FO(e);return r}}class GO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function HO(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let d=!1;function f(...N){d||(d=!0,e.apply(null,N))}function m(N){s=setTimeout(()=>{s=null,t(v,c())},N)}function g(){i&&clearTimeout(i)}function v(N,...w){if(d){g();return}if(N){g(),f.call(null,N,...w);return}if(c()||o){g(),f.call(null,N,...w);return}r<64&&(r*=2);let b;l===1?(l=2,b=0):b=(r+Math.random())*1e3,m(b)}let S=!1;function A(N){S||(S=!0,g(),!d&&(s!==null?(N||(l=2),clearTimeout(s),m(0)):N||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function KO(t){t(!1)}/**
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
 */function QO(t){return t!==void 0}function YO(t){return typeof t=="object"&&!Array.isArray(t)}function Mm(t){return typeof t=="string"||t instanceof String}function jv(t){return Vm()&&t instanceof Blob}function Vm(){return typeof Blob<"u"}function Dv(t,e,n,r){if(r<e)throw Cf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Cf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Fu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function mT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ws;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ws||(ws={}));/**
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
 */function XO(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class JO{constructor(e,n,r,s,i,o,l,c,d,f,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,S)=>{this.resolve_=v,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ol(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ws.NO_ERROR,c=i.getStatus();if(!l||XO(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ws.ABORT;r(!1,new Ol(!1,null,f));return}const d=this.successCodes_.indexOf(c)!==-1;r(!0,new Ol(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());QO(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Lm();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?pT():VO();o(c)}else{const c=MO();o(c)}};this.canceled_?n(!1,new Ol(!1,null,!0)):this.backoffId_=HO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ol{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rL(t,e,n,r,s,i,o=!0){const l=mT(t.urlParams),c=t.url+l,d=Object.assign({},t.headers);return tL(d,e),ZO(d,n),eL(d,i),nL(d,r),new JO(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function sL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iL(...t){const e=sL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Vm())return new Blob(t);throw new Re(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aL(t){if(typeof atob>"u")throw qO("base-64");return atob(t)}/**
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
 */const bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class eh{constructor(e,n){this.data=e,this.contentType=n||null}}function lL(t,e){switch(t){case bn.RAW:return new eh(gT(e));case bn.BASE64:case bn.BASE64URL:return new eh(yT(t,e));case bn.DATA_URL:return new eh(uL(e),dL(e))}throw Lm()}function gT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cL(t){let e;try{e=decodeURIComponent(t)}catch{throw Yo(bn.DATA_URL,"Malformed data URL.")}return gT(e)}function yT(t,e){switch(t){case bn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Yo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case bn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Yo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aL(e)}catch(s){throw s.message.includes("polyfill")?s:Yo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class vT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Yo(bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=hL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uL(t){const e=new vT(t);return e.base64?yT(bn.BASE64,e.rest):cL(e.rest)}function dL(t){return new vT(t).contentType}function hL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Sr{constructor(e,n){let r=0,s="";jv(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(jv(this.data_)){const r=this.data_,s=oL(r,e,n);return s===null?null:new Sr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Sr(r,!0)}}static getBlob(...e){if(Vm()){const n=e.map(r=>r instanceof Sr?r.data_:r);return new Sr(iL.apply(null,n))}else{const n=e.map(o=>Mm(o)?lL(bn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Sr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function wT(t){let e;try{e=JSON.parse(t)}catch{return null}return YO(e)?e:null}/**
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
 */function fL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function _T(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function mL(t,e){return e}class xt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||mL}}let Ll=null;function gL(t){return!Mm(t)||t.length<2?t:_T(t)}function xT(){if(Ll)return Ll;const t=[];t.push(new xt("bucket")),t.push(new xt("generation")),t.push(new xt("metageneration")),t.push(new xt("name","fullPath",!0));function e(i,o){return gL(o)}const n=new xt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new xt("size");return s.xform=r,t.push(s),t.push(new xt("timeCreated")),t.push(new xt("updated")),t.push(new xt("md5Hash",null,!0)),t.push(new xt("cacheControl",null,!0)),t.push(new xt("contentDisposition",null,!0)),t.push(new xt("contentEncoding",null,!0)),t.push(new xt("contentLanguage",null,!0)),t.push(new xt("contentType",null,!0)),t.push(new xt("metadata","customMetadata",!0)),Ll=t,Ll}function yL(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Bt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function vL(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return yL(r,t),r}function ET(t,e,n){const r=wT(e);return r===null?null:vL(t,r,n)}function wL(t,e,n,r){const s=wT(e);if(s===null||!Mm(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),v=Fu(g,n,r),S=mT({alt:"media",token:d});return v+S})[0]}function _L(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Fm{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function bT(t){if(!t)throw Lm()}function xL(t,e){function n(r,s){const i=ET(t,s,e);return bT(i!==null),i}return n}function EL(t,e){function n(r,s){const i=ET(t,s,e);return bT(i!==null),wL(i,s,t.host,t._protocol)}return n}function TT(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=OO():s=DO():n.getStatus()===402?s=jO(t.bucket):n.getStatus()===403?s=LO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function IT(t){const e=TT(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=PO(t.path)),i.serverResponse=s.serverResponse,i}return n}function bL(t,e,n){const r=e.fullServerUrl(),s=Fu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Fm(s,i,EL(t,n),o);return l.errorHandler=IT(e),l}function TL(t,e){const n=e.fullServerUrl(),r=Fu(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,d){}const l=new Fm(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=IT(e),l}function IL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function SL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=IL(null,e)),r}function kL(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let b="";for(let D=0;D<2;D++)b=b+Math.random().toString().slice(2);return b}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const d=SL(e,r,s),f=_L(d,n),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+c+"--",v=Sr.getBlob(m,r,g);if(v===null)throw $O();const S={name:d.fullPath},A=Fu(i,t.host,t._protocol),N="POST",w=t.maxUploadRetryTime,x=new Fm(A,N,xL(t,n),w);return x.urlParams=S,x.headers=o,x.body=v.uploadData(),x.errorHandler=TT(e),x}class NL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Eo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AL extends NL{initXhr(){this.xhr_.responseType="text"}}function Um(){return new AL}/**
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
 */class js{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new js(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _T(this._location.path)}get storage(){return this._service}get parent(){const e=fL(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new js(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WO(e)}}function CL(t,e,n){t._throwIfRoot("uploadBytes");const r=kL(t.storage,t._location,xT(),new Sr(e,!0),n);return t.storage.makeRequestWithTokens(r,Um).then(s=>({metadata:s,ref:t}))}function RL(t){t._throwIfRoot("getDownloadURL");const e=bL(t.storage,t._location,xT());return t.storage.makeRequestWithTokens(e,Um).then(n=>{if(n===null)throw zO();return n})}function PL(t){t._throwIfRoot("deleteObject");const e=TL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Um)}function jL(t,e){const n=pL(t._location.path,e),r=new Bt(t._location.bucket,n);return new js(t.storage,r)}/**
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
 */function DL(t){return/^[A-Za-z]+:\/\//.test(t)}function OL(t,e){return new js(t,e)}function ST(t,e){if(t instanceof Bm){const n=t;if(n._bucket==null)throw BO();const r=new js(n,n._bucket);return e!=null?ST(r,e):r}else return e!==void 0?jL(t,e):t}function LL(t,e){if(e&&DL(e)){if(t instanceof Bm)return OL(t,e);throw Cf("To use ref(service, url), the first argument must be a Storage instance.")}else return ST(t,e)}function Ov(t,e){const n=e==null?void 0:e[fT];return n==null?null:Bt.makeFromBucketSpec(n,t)}function ML(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Cx(s,t.app.options.projectId))}class Bm{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=hT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CO,this._maxUploadRetryTime=RO,this._requests=new Set,s!=null?this._bucket=Bt.makeFromBucketSpec(s,this._host):this._bucket=Ov(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=Ov(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new GO(pT());{const o=rL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Lv="@firebase/storage",Mv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="storage";function VL(t,e,n){return t=ue(t),CL(t,e,n)}function FL(t){return t=ue(t),RL(t)}function UL(t){return t=ue(t),PL(t)}function Vv(t,e){return t=ue(t),LL(t,e)}function BL(t=Wi(),e){t=ue(t);const r=Pn(t,kT).getImmediate({identifier:e}),s=Lp("storage");return s&&$L(r,...s),r}function $L(t,e,n,r={}){ML(t,e,n,r)}function zL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Bm(n,r,s,e,Vs)}function qL(){Lt(new St(kT,zL,"PUBLIC").setMultipleInstances(!0)),Qe(Lv,Mv,""),Qe(Lv,Mv,"esm2017")}qL();const WL={apiKey:"AIzaSyD7VNKg6Gqam8qHZiHUpzgleVYbk8Gc9qU",authDomain:"bankroll-2ccb4.firebaseapp.com",databaseURL:"https://bankroll-2ccb4-default-rtdb.firebaseio.com",projectId:"bankroll-2ccb4",storageBucket:"bankroll-2ccb4.firebasestorage.app",messagingSenderId:"443440711718",appId:"1:443440711718:web:dc3f58dfe81324edc3bee7",measurementId:"G-QZ2NEGJV6D"};let as=null,me=null,Ze=null,ui=null,ln=null;try{console.log("Initializing Firebase app..."),as=Ox(WL),console.log("Firebase app initialized successfully"),console.log("Initializing Firestore..."),me=YE(as),console.log("Firestore initialized successfully"),console.log("Initializing Auth..."),Ze=lD(as),console.log("Auth initialized successfully"),console.log("Initializing Storage..."),ln=BL(as),console.log("Storage initialized successfully"),console.log("Initializing Analytics..."),typeof window<"u"?(ui=SO(as),console.log("Analytics initialized successfully")):console.log("Analytics skipped - not in browser environment")}catch(t){console.error("Firebase initialization error:",t),console.error("Error details:",{code:t.code,message:t.message,stack:t.stack}),as||console.error("Failed to initialize Firebase app"),me||console.error("Failed to initialize Firestore"),Ze||console.error("Failed to initialize Auth"),ln||console.error("Failed to initialize Storage"),!ui&&typeof window<"u"&&console.error("Failed to initialize Analytics")}var rw;if(me)try{const t=(rw=me._firestoreClient)==null?void 0:rw.connectivityMonitor;t&&t.addCallback(e=>{console.log("Firestore connection state:",e?"CONNECTED":"DISCONNECTED")})}catch(t){console.error("Error setting up Firestore connection listener:",t)}ln?console.log("Storage bucket:",ln.app.options.storageBucket):console.error("Storage is not initialized");const th=as;class GL{static async uploadProfileImage(e,n){var r,s;try{if(!ln)throw new Error("Firebase Storage is not initialized");if(!e||!n)throw new Error("File and user ID are required");const i=Date.now(),o=Math.random().toString(36).substring(2,15),l=e.name.split(".").pop(),c=`${i}-${o}.${l}`,d=Vv(ln,`profile-images/${n}/${c}`),f={contentType:e.type,customMetadata:{userId:n,uploadedAt:new Date().toISOString()},cacheControl:"public,max-age=31536000"};console.log("Uploading file...");const m=await VL(d,e,f);if(!m)throw new Error("Upload failed - no snapshot returned");console.log("Getting download URL...");const g=await FL(m.ref);if(!g)throw new Error("Failed to get download URL");const v=`${g}?t=${i}`;return console.log("Upload complete. URL:",v),v}catch(i){throw console.error("Detailed error in uploadProfileImage:",{code:i.code,message:i.message,stack:i.stack,name:i.name,userId:n,fileName:e==null?void 0:e.name,storageBucket:(s=(r=ln==null?void 0:ln.app)==null?void 0:r.options)==null?void 0:s.storageBucket}),i.code==="storage/unauthorized"?new Error("Permission denied. Please check your authentication."):i.code==="storage/canceled"?new Error("Upload was canceled."):i.code==="storage/unknown"?new Error("An unknown error occurred. Please try again."):new Error(`Failed to upload image: ${i.message}`)}}static async deleteProfileImage(e){try{if(!ln)throw new Error("Firebase Storage is not initialized");const n=e.split("?")[0];if(!n||!n.includes("firebasestorage.googleapis.com")){console.log("Invalid or non-Firebase URL, skipping deletion");return}try{const r=Vv(ln,n);await UL(r),console.log("Old profile image deleted successfully")}catch(r){if(r.code==="storage/object-not-found"){console.log("Old profile image not found, skipping deletion");return}throw r}}catch(n){console.error("Detailed error in deleteProfileImage:",{code:n.code,message:n.message,stack:n.stack,name:n.name,imageUrl:e}),console.warn("Failed to delete old profile image:",n.message)}}}const NT=P.createContext();function vt(){return P.useContext(NT)}function HL({children:t}){const[e,n]=P.useState(null),[r,s]=P.useState(!0);async function i(m,g){if(!me){console.warn("Firestore is not initialized (development mode)");return}try{console.log("Starting profile image update for user:",m);let v;g instanceof File?(console.log("Uploading new image file to Storage"),v=await GL.uploadProfileImage(g,m),console.log("Image uploaded successfully, URL:",v)):(console.log("Using provided image URL"),v=g);const S=Rt(me,"users",m);await Na(S,{profileImage:v,lastUpdated:ps()}),console.log("Firestore document updated with new image URL");const N=(await Ns(S)).data();return n(w=>({...w,...N})),console.log("Local state updated with new user data"),v}catch(v){throw console.error("Detailed error in updateProfileImage:",{code:v.code,message:v.message,stack:v.stack,name:v.name}),v}}async function o(m,g,v){var S,A;if(!Ze)return console.warn("Auth is not initialized (development mode)"),null;try{console.log("Starting signup process for:",m);const w=(await G2(Ze,m,g)).user;if(console.log("User authentication created:",w.uid),!me)return console.warn("Firestore is not initialized (development mode)"),w;const x=new Date(v.birthday),b=Be.fromDate(x),D=(S=v.sleeperUsername)!=null&&S.startsWith("@")?v.sleeperUsername:`@${v.sleeperUsername}`,M=(A=v.venmoUsername)!=null&&A.startsWith("@")?v.venmoUsername:`@${v.venmoUsername}`;if(!v.username)throw new Error("Username is required");const F={firstName:v.firstName,lastName:v.lastName,email:v.email,username:v.username,venmoUsername:M,address1:v.address1||"",address2:v.address2||null,city:v.city||"",state:v.state||"",postalCode:v.postalCode||"",birthday:b,phoneNumber:v.phoneNumber,sleeperUsername:D,promoCode:v.promoCode||null,dwollaCustomerId:"",dwollaBalance:0,bonusBalance:0,id:w.uid,profileImage:null,lastUpdated:ps(),lastBalanceUpdate:ps(),createdAt:ps()};return console.log("Creating Firestore document for user:",F),await lb(Rt(me,"users",w.uid),F),console.log("Firestore document created successfully"),w}catch(N){throw console.error("Signup error:",{code:N.code,message:N.message,stack:N.stack}),N}}async function l(m,g){if(!Ze||!me)return console.warn("Auth/Firestore is not initialized (development mode)"),null;try{let v=m;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){const w=Vi(me,"users"),x=Sa(w,Fc("username","==",m)),b=await ka(x);if(b.empty)throw new Error("No user found with this username");v=b.docs[0].data().email}return(await H2(Ze,v,g)).user}catch(v){throw console.error("Login error:",v),v}}async function c(){if(!Ze){console.warn("Auth is not initialized (development mode)");return}try{await X2(Ze)}catch(m){throw console.error("Error in logout:",m),m}}async function d(m){if(!Ze){console.warn("Auth is not initialized (development mode)");return}try{await W2(Ze,m)}catch(g){throw console.error("Error in password reset:",g),g}}P.useEffect(()=>{if(!Ze){console.warn("Auth is not initialized (development mode)"),s(!1);return}return Y2(Ze,async g=>{if(g&&me)try{const v=await Ns(Rt(me,"users",g.uid));v.exists()?n({...g,...v.data()}):n(g)}catch(v){console.error("Error fetching user data:",v),n(g)}else n(null);s(!1)})},[]);const f={currentUser:e,signup:o,login:l,logout:c,resetPassword:d,updateProfileImage:i,loading:r};return u.jsx(NT.Provider,{value:f,children:!r&&t})}const nh="https://api.sleeper.app/v1";class Rf{static async getUser(e){try{const n=await fetch(`${nh}/user/${e}`);if(!n.ok)throw new Error("User not found");return await n.json()}catch(n){throw n}}static async getUserLeagues(e,n="2024",r="nfl"){try{const s=await fetch(`${nh}/user/${e}/leagues/${r}/${n}`);if(!s.ok)throw new Error("Failed to fetch leagues");return await s.json()}catch(s){throw s}}static async getLeagueUsers(e){try{const n=await fetch(`${nh}/league/${e}/users`);if(!n.ok)throw new Error("Failed to fetch league users");return await n.json()}catch(n){throw n}}static getAvatarUrl(e){return e?`https://sleepercdn.com/avatars/${e}`:null}static getLeagueAvatarUrl(e){return e?`https://sleepercdn.com/avatars/${e}`:null}}const AT=P.createContext(),CT=()=>{const t=P.useContext(AT);if(!t)throw new Error("useSleeperContext must be used within a SleeperProvider");return t},KL=({children:t})=>{const[e,n]=P.useState(()=>{const g=localStorage.getItem("sleeperUser");return g?JSON.parse(g):null}),[r,s]=P.useState(()=>{const g=localStorage.getItem("sleeperLeagues");return g?JSON.parse(g):[]}),[i,o]=P.useState(!1),[l,c]=P.useState("");P.useEffect(()=>{e?localStorage.setItem("sleeperUser",JSON.stringify(e)):localStorage.removeItem("sleeperUser")},[e]),P.useEffect(()=>{r.length>0?localStorage.setItem("sleeperLeagues",JSON.stringify(r)):localStorage.removeItem("sleeperLeagues")},[r]);const m={user:e,leagues:r,isLoading:i,errorMessage:l,fetchUser:async g=>{o(!0),c("");try{const v=await Rf.getUser(g);n(v);const S=await Rf.getUserLeagues(v.user_id);s(S)}catch(v){c("Failed to find Sleeper user"),console.error("Error fetching Sleeper user:",v)}finally{o(!1)}},disconnectSleeper:()=>{n(null),s([]),localStorage.removeItem("sleeperUser"),localStorage.removeItem("sleeperLeagues")}};return u.jsx(AT.Provider,{value:m,children:t})},Xe=[];for(let t=0;t<256;++t)Xe.push((t+256).toString(16).slice(1));function QL(t,e=0){return(Xe[t[e+0]]+Xe[t[e+1]]+Xe[t[e+2]]+Xe[t[e+3]]+"-"+Xe[t[e+4]]+Xe[t[e+5]]+"-"+Xe[t[e+6]]+Xe[t[e+7]]+"-"+Xe[t[e+8]]+Xe[t[e+9]]+"-"+Xe[t[e+10]]+Xe[t[e+11]]+Xe[t[e+12]]+Xe[t[e+13]]+Xe[t[e+14]]+Xe[t[e+15]]).toLowerCase()}let rh;const YL=new Uint8Array(16);function XL(){if(!rh){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");rh=crypto.getRandomValues.bind(crypto)}return rh(YL)}const JL=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Fv={randomUUID:JL};function ZL(t,e,n){if(Fv.randomUUID&&!e&&!t)return Fv.randomUUID();t=t||{};const r=t.random||(t.rng||XL)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,QL(r)}class e4{constructor(){this.groupsCollection="groups",this.usersCollection="users"}async getUserData(e){try{console.log("Fetching user data for:",e);const n=await Ns(Rt(me,this.usersCollection,e));if(n.exists()){const r=n.data();return console.log("Found user data:",r),{uid:e,displayName:`${r.firstName} ${r.lastName}`,photoURL:r.profileImage,firstName:r.firstName,lastName:r.lastName}}return console.log("No user data found for:",e),null}catch(n){throw console.error("Error fetching user data:",n),n}}async getUserGroups(e){try{if(console.log("Fetching groups for user:",e),!e)throw new Error("User ID is required");const n=Vi(me,this.groupsCollection),r=Sa(n,Fc("memberIds","array-contains",e)),s=Sa(n,Fc("ownerId","==",e)),[i,o]=await Promise.all([ka(r),ka(s)]),l=new Set;i.forEach(d=>{console.log("Found member group:",d.id,d.data()),l.add({id:d.id,...d.data()})}),o.forEach(d=>{console.log("Found owner group:",d.id,d.data()),l.add({id:d.id,...d.data()})});const c=Array.from(l);return console.log("Total groups found:",c.length,c),c}catch(n){throw console.error("Error fetching user groups:",n),n}}async getGroup(e){try{if(console.log("Fetching group:",e),!e)throw new Error("Group ID is required");const n=Rt(me,this.groupsCollection,e),r=await Ns(n);if(console.log("Group doc exists:",r.exists()),r.exists()){const s=r.data();console.log("Raw group data:",s),console.log("Fetching owner data for:",s.ownerId);const i=await this.getUserData(s.ownerId);console.log("Owner data:",i),console.log("Fetching member data for:",s.memberIds);const o=(s.memberIds||[]).map(d=>this.getUserData(d)),l=await Promise.all(o);console.log("Member data:",l);const c={id:r.id,...s,owner:i,members:l.filter(d=>d!==null)};return console.log("Full group data:",c),c}else throw console.log("Group not found with ID:",e),new Error("Group not found")}catch(n){throw console.error("Error fetching group:",n),n}}async createGroup(e,n){try{if(console.log("Creating group with data:",{groupData:e,creator:n}),!e||!n)throw new Error("Group data and creator information are required");if(!e.name)throw new Error("Group name is required");const r=ZL(),s=Vi(me,this.groupsCollection),i=await this.getUserData(n.id);console.log("Creator data:",i);const o={id:r,name:e.name,emoji:e.emoji||"👥",description:e.description||"",ownerId:n.id,owner:i,members:[i],memberIds:[n.id],pendingMembers:[],dateCreated:new Date().toISOString(),isHidden:!1,visibility:e.visibility||"private",inviteLink:`https://onbankroll.com/group/${r}`,status:"active"};console.log("Creating new group:",o);const l=await cb(s,o);console.log("Group created with ID:",l.id);const c={...o,id:l.id};return await Na(Rt(s,l.id),{id:l.id}),console.log("Group updated with ID"),c}catch(r){throw console.error("Error creating group:",r),r}}async updateGroup(e,n,r){var s;try{const i=await this.getGroup(e);if(i.ownerId!==r&&!((s=i.coOwners)!=null&&s.includes(r)))throw new Error("User does not have permission to update this group");const o=Rt(me,this.groupsCollection,e);return await Na(o,n),await this.getGroup(e)}catch(i){throw console.error("Error updating group:",i),i}}async deleteGroup(e,n){try{if((await this.getGroup(e)).ownerId!==n)throw new Error("Only the group owner can delete the group");const s=Rt(me,this.groupsCollection,e);await GP(s)}catch(r){throw console.error("Error deleting group:",r),r}}async leaveGroup(e,n){var r;try{const s=await this.getGroup(e);if(s.ownerId===n)throw new Error("Group owner cannot leave the group");const i=s.members.filter(c=>c.uid!==n),o=s.memberIds.filter(c=>c!==n),l=((r=s.coOwners)==null?void 0:r.filter(c=>c!==n))||[];await this.updateGroup(e,{members:i,memberIds:o,coOwners:l},s.ownerId)}catch(s){throw console.error("Error leaving group:",s),s}}async addMembers(e,n){try{const r=await this.getGroup(e),s=n.map(c=>this.getUserData(c.id)),i=await Promise.all(s),o=[...r.members],l=[...r.memberIds];return i.forEach(c=>{c&&!l.includes(c.uid)&&(o.push(c),l.push(c.uid))}),await this.updateGroup(e,{members:o,memberIds:l},r.ownerId),await this.getGroup(e)}catch(r){throw console.error("Error adding members:",r),r}}async isUserInGroup(e,n){try{if(!e||!n)throw new Error("User ID and Group ID are required");const r=await this.getGroup(n);return r.memberIds.includes(e)||r.ownerId===e}catch(r){throw console.error("Error checking user group membership:",r),r}}}const Yt=new e4,t4=P.createContext(),n4=({children:t})=>{const{currentUser:e}=vt(),[n,r]=P.useState([]),[s,i]=P.useState(!0),[o,l]=P.useState(null),c=async()=>{if(e!=null&&e.uid)try{i(!0);const A=await Yt.getUserGroups(e.uid);r(A),l(null)}catch(A){l(A instanceof Error?A.message:"Failed to fetch groups"),console.error("Error fetching groups:",A)}finally{i(!1)}};P.useEffect(()=>{c()},[e==null?void 0:e.uid]);const S={groups:n,loading:s,error:o,createGroup:async A=>{if(!e)throw new Error("User must be logged in to create a group");try{const N=await Yt.createGroup(A,{id:e.uid,firstName:e.firstName,lastName:e.lastName,profileImage:e.profileImage});return r(w=>[...w,N]),N}catch(N){const w=N instanceof Error?N.message:"Failed to create group";throw l(w),N}},updateGroup:async(A,N)=>{if(!(e!=null&&e.uid))throw new Error("User must be logged in to update a group");try{await Yt.updateGroup(A,N,e.uid),await c()}catch(w){const x=w instanceof Error?w.message:"Failed to update group";throw l(x),w}},deleteGroup:async A=>{if(!(e!=null&&e.uid))throw new Error("User must be logged in to delete a group");try{await Yt.deleteGroup(A,e.uid),r(N=>N.filter(w=>w.id!==A))}catch(N){const w=N instanceof Error?N.message:"Failed to delete group";throw l(w),N}},leaveGroup:async A=>{if(!(e!=null&&e.uid))throw new Error("User must be logged in to leave a group");try{await Yt.leaveGroup(A,e.uid),r(N=>N.filter(w=>w.id!==A))}catch(N){const w=N instanceof Error?N.message:"Failed to leave group";throw l(w),N}},addMembers:async(A,N)=>{try{await Yt.addMembers(A,N),await c()}catch(w){const x=w instanceof Error?w.message:"Failed to add members";throw l(x),w}},refreshGroups:c};return u.jsx(t4.Provider,{value:S,children:t})};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(t,e)=>{const n=P.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,...d},f)=>P.createElement("svg",{ref:f,...r4,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${s4(t)}`,l].join(" "),...d},[...e.map(([m,g])=>P.createElement(m,g)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ae("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ae("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=ae("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=ae("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=ae("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=ae("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=ae("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=ae("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=ae("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=ae("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=ae("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=ae("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=ae("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=ae("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=ae("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=ae("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ae("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=ae("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=ae("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=ae("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=ae("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=ae("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=ae("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=ae("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=ae("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=ae("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=ae("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=ae("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=ae("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=ae("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),w4=()=>{const[t,e]=P.useState(!1),{currentUser:n,logout:r}=vt(),s=lr(),i=qi(),o=async()=>{try{await r(),s("/login")}catch(d){console.error("Failed to log out:",d)}},l=[{name:"Partners",href:"/spend"},{name:"Banking",href:"/banking"},{name:"Leagues",href:"/leagues"},{name:"Send",href:"/send"}],c=d=>i.pathname===d;return u.jsxs("div",{className:"min-h-screen bg-gray-900",children:[u.jsxs("nav",{className:"bg-gray-800",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex items-center justify-between h-16",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx(un,{to:"/spend",children:u.jsx("img",{className:"h-8 w-auto",src:"/newBankrollWebsite/public/images/Bankroll Gradient.jpg",alt:"Bankroll"})})}),u.jsx("div",{className:"hidden md:block",children:u.jsx("div",{className:"ml-10 flex items-baseline space-x-4",children:l.map(d=>u.jsx(un,{to:d.href,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${c(d.href)?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"}`,children:d.name},d.name))})})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx(un,{to:"/notifications",className:`p-2 transition-colors duration-200 ${c("/notifications")?"text-white bg-blue-600 rounded-md":"text-gray-400 hover:text-white"}`,children:u.jsx(RT,{className:"h-6 w-6"})}),u.jsx(un,{to:"/profile",className:`ml-3 flex items-center transition-colors duration-200 ${c("/profile")?"ring-2 ring-blue-600 rounded-full":"text-gray-300 hover:text-white"}`,children:u.jsx("img",{className:"h-8 w-8 rounded-full",src:(n==null?void 0:n.profileImage)||"/newBankrollWebsite/public/images/profile_1.jpeg",alt:n==null?void 0:n.firstName})}),u.jsx("div",{className:"ml-3 md:hidden",children:u.jsx("button",{onClick:()=>e(!t),className:"text-gray-400 hover:text-white",children:t?u.jsx(Ds,{className:"h-6 w-6"}):u.jsx(h4,{className:"h-6 w-6"})})})]})]})}),t&&u.jsx("div",{className:"md:hidden",children:u.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[l.map(d=>u.jsx(un,{to:d.href,className:`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${c(d.href)?"bg-blue-600 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"}`,onClick:()=>e(!1),children:d.name},d.name)),u.jsx("button",{onClick:o,className:"text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium",children:"Sign out"})]})})]}),u.jsx("main",{children:u.jsx("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:u.jsx(Zk,{})})})]})};function FT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=FT(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function _4(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=FT(t))&&(r&&(r+=" "),r+=e);return r}const zm="-",x4=t=>{const e=b4(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split(zm);return l[0]===""&&l.length!==1&&l.shift(),UT(l,e)||E4(o)},getConflictingClassGroupIds:(o,l)=>{const c=n[o]||[];return l&&r[o]?[...c,...r[o]]:c}}},UT=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?UT(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(zm);return(o=e.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},Wv=/^\[(.+)\]$/,E4=t=>{if(Wv.test(t)){const e=Wv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},b4=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return I4(Object.entries(t.classGroups),n).forEach(([i,o])=>{jf(o,r,i,e)}),r},jf=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Gv(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(T4(s)){jf(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{jf(o,Gv(e,i),n,r)})})},Gv=(t,e)=>{let n=t;return e.split(zm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},T4=t=>t.isThemeGetter,I4=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[n,s]}):t,S4=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},BT="!",k4=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=l=>{const c=[];let d=0,f=0,m;for(let N=0;N<l.length;N++){let w=l[N];if(d===0){if(w===s&&(r||l.slice(N,N+i)===e)){c.push(l.slice(f,N)),f=N+i;continue}if(w==="/"){m=N;continue}}w==="["?d++:w==="]"&&d--}const g=c.length===0?l:l.substring(f),v=g.startsWith(BT),S=v?g.substring(1):g,A=m&&m>f?m-f:void 0;return{modifiers:c,hasImportantModifier:v,baseClassName:S,maybePostfixModifierPosition:A}};return n?l=>n({className:l,parseClassName:o}):o},N4=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},A4=t=>({cache:S4(t.cacheSize),parseClassName:k4(t),...x4(t)}),C4=/\s+/,R4=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split(C4);let l="";for(let c=o.length-1;c>=0;c-=1){const d=o[c],{modifiers:f,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:v}=n(d);let S=!!v,A=r(S?g.substring(0,v):g);if(!A){if(!S){l=d+(l.length>0?" "+l:l);continue}if(A=r(g),!A){l=d+(l.length>0?" "+l:l);continue}S=!1}const N=N4(f).join(":"),w=m?N+BT:N,x=w+A;if(i.includes(x))continue;i.push(x);const b=s(A,S);for(let D=0;D<b.length;++D){const M=b[D];i.push(w+M)}l=d+(l.length>0?" "+l:l)}return l};function P4(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=$T(e))&&(r&&(r+=" "),r+=n);return r}const $T=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=$T(t[r]))&&(n&&(n+=" "),n+=e);return n};function j4(t,...e){let n,r,s,i=o;function o(c){const d=e.reduce((f,m)=>m(f),t());return n=A4(d),r=n.cache.get,s=n.cache.set,i=l,l(c)}function l(c){const d=r(c);if(d)return d;const f=R4(c,n);return s(c,f),f}return function(){return i(P4.apply(null,arguments))}}const ve=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},zT=/^\[(?:([a-z-]+):)?(.+)\]$/i,D4=/^\d+\/\d+$/,O4=new Set(["px","full","screen"]),L4=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,M4=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,V4=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,F4=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,U4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Fn=t=>bi(t)||O4.has(t)||D4.test(t),gr=t=>Xi(t,"length",K4),bi=t=>!!t&&!Number.isNaN(Number(t)),ih=t=>Xi(t,"number",bi),bo=t=>!!t&&Number.isInteger(Number(t)),B4=t=>t.endsWith("%")&&bi(t.slice(0,-1)),ee=t=>zT.test(t),yr=t=>L4.test(t),$4=new Set(["length","size","percentage"]),z4=t=>Xi(t,$4,qT),q4=t=>Xi(t,"position",qT),W4=new Set(["image","url"]),G4=t=>Xi(t,W4,Y4),H4=t=>Xi(t,"",Q4),To=()=>!0,Xi=(t,e,n)=>{const r=zT.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},K4=t=>M4.test(t)&&!V4.test(t),qT=()=>!1,Q4=t=>F4.test(t),Y4=t=>U4.test(t),X4=()=>{const t=ve("colors"),e=ve("spacing"),n=ve("blur"),r=ve("brightness"),s=ve("borderColor"),i=ve("borderRadius"),o=ve("borderSpacing"),l=ve("borderWidth"),c=ve("contrast"),d=ve("grayscale"),f=ve("hueRotate"),m=ve("invert"),g=ve("gap"),v=ve("gradientColorStops"),S=ve("gradientColorStopPositions"),A=ve("inset"),N=ve("margin"),w=ve("opacity"),x=ve("padding"),b=ve("saturate"),D=ve("scale"),M=ve("sepia"),F=ve("skew"),I=ve("space"),_=ve("translate"),E=()=>["auto","contain","none"],T=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",ee,e],R=()=>[ee,e],k=()=>["",Fn,gr],Le=()=>["auto",bi,ee],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$e=()=>["solid","dashed","dotted","double","none"],ze=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],K=()=>["","0",ee],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>[bi,ee];return{cacheSize:500,separator:":",theme:{colors:[To],spacing:[Fn,gr],blur:["none","",yr,ee],brightness:ie(),borderColor:[t],borderRadius:["none","","full",yr,ee],borderSpacing:R(),borderWidth:k(),contrast:ie(),grayscale:K(),hueRotate:ie(),invert:K(),gap:R(),gradientColorStops:[t],gradientColorStopPositions:[B4,gr],inset:C(),margin:C(),opacity:ie(),padding:R(),saturate:ie(),scale:ie(),sepia:K(),skew:ie(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",ee]}],container:["container"],columns:[{columns:[yr]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),ee]}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[A]}],"inset-x":[{"inset-x":[A]}],"inset-y":[{"inset-y":[A]}],start:[{start:[A]}],end:[{end:[A]}],top:[{top:[A]}],right:[{right:[A]}],bottom:[{bottom:[A]}],left:[{left:[A]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",bo,ee]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ee]}],grow:[{grow:K()}],shrink:[{shrink:K()}],order:[{order:["first","last","none",bo,ee]}],"grid-cols":[{"grid-cols":[To]}],"col-start-end":[{col:["auto",{span:["full",bo,ee]},ee]}],"col-start":[{"col-start":Le()}],"col-end":[{"col-end":Le()}],"grid-rows":[{"grid-rows":[To]}],"row-start-end":[{row:["auto",{span:[bo,ee]},ee]}],"row-start":[{"row-start":Le()}],"row-end":[{"row-end":Le()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ee]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ee]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ee,e]}],"min-w":[{"min-w":[ee,e,"min","max","fit"]}],"max-w":[{"max-w":[ee,e,"none","full","min","max","fit","prose",{screen:[yr]},yr]}],h:[{h:[ee,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ee,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ee,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ee,e,"auto","min","max","fit"]}],"font-size":[{text:["base",yr,gr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ih]}],"font-family":[{font:[To]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ee]}],"line-clamp":[{"line-clamp":["none",bi,ih]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Fn,ee]}],"list-image":[{"list-image":["none",ee]}],"list-style-type":[{list:["none","disc","decimal",ee]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$e(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Fn,gr]}],"underline-offset":[{"underline-offset":["auto",Fn,ee]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),q4]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",z4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},G4]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...$e(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:$e()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...$e()]}],"outline-offset":[{"outline-offset":[Fn,ee]}],"outline-w":[{outline:[Fn,gr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:k()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[Fn,gr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",yr,H4]}],"shadow-color":[{shadow:[To]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...ze(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ze()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",yr,ee]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[m]}],saturate:[{saturate:[b]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ee]}],duration:[{duration:ie()}],ease:[{ease:["linear","in","out","in-out",ee]}],delay:[{delay:ie()}],animate:[{animate:["none","spin","ping","pulse","bounce",ee]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[bo,ee]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ee]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ee]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ee]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Fn,gr,ih]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},J4=j4(X4);function Ji(...t){return J4(_4(t))}const Ae=P.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Ji("rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",t),...e}));Ae.displayName="Card";const _n=P.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Ji("flex flex-col space-y-1.5 p-6",t),...e}));_n.displayName="CardHeader";const xn=P.forwardRef(({className:t,...e},n)=>u.jsx("h3",{ref:n,className:Ji("text-2xl font-semibold leading-none tracking-tight",t),...e}));xn.displayName="CardTitle";const Z4=P.forwardRef(({className:t,...e},n)=>u.jsx("p",{ref:n,className:Ji("text-sm text-gray-500 dark:text-gray-400",t),...e}));Z4.displayName="CardDescription";const Ve=P.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Ji("p-6 pt-0",t),...e}));Ve.displayName="CardContent";const eM=P.forwardRef(({className:t,...e},n)=>u.jsx("div",{ref:n,className:Ji("flex items-center p-6 pt-0",t),...e}));eM.displayName="CardFooter";const tM=()=>{const{currentUser:t}=vt();return u.jsxs("div",{className:"min-h-screen bg-gray-900 text-white",children:[u.jsx("div",{className:"relative overflow-hidden",children:u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16",children:u.jsxs("div",{className:"text-center",children:[u.jsx("img",{className:"h-24 sm:h-32 w-auto mx-auto mb-6 sm:mb-8",src:"/images/BankrollLogoTransparent.png",alt:"Bankroll Logo"}),u.jsx("h1",{className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight px-4",children:"Your Fantasy Sports Bank"}),u.jsx("p",{className:"text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4",children:"Manage your fantasy sports and sports betting bankroll all in one place. Connect with friends, join leagues, and compete for prizes!"}),u.jsx("div",{className:"flex flex-col sm:flex-row justify-center gap-4 px-4",children:t?u.jsxs(u.Fragment,{children:[u.jsx(un,{to:"/create-group",className:"w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-center",children:"Create a Group"}),u.jsx(un,{to:"/groups",className:"w-full sm:w-auto px-8 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors text-center",children:"View My Groups"})]}):u.jsxs(u.Fragment,{children:[u.jsx(un,{to:"/signup",className:"w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-center",children:"Get Started"}),u.jsx(un,{to:"/login",className:"w-full sm:w-auto px-8 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors text-center",children:"Sign In"})]})})]})})}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8",children:[u.jsx(Ae,{className:"bg-gray-800 border-gray-700 h-full",children:u.jsxs(Ve,{className:"p-6",children:[u.jsx("div",{className:"flex items-center justify-center mb-4",children:u.jsx("span",{className:"text-4xl",children:"👥"})}),u.jsx("h3",{className:"text-xl font-bold mb-3",children:"Group Management"}),u.jsx("p",{className:"text-gray-300",children:"Create and join groups with friends. Share leagues, track group performance, and compete together across multiple platforms."})]})}),u.jsx(Ae,{className:"bg-gray-800 border-gray-700 h-full",children:u.jsxs(Ve,{className:"p-6",children:[u.jsx("div",{className:"flex items-center justify-center mb-4",children:u.jsx("span",{className:"text-4xl",children:"🏦"})}),u.jsx("h3",{className:"text-xl font-bold mb-3",children:"Unified Banking"}),u.jsx("p",{className:"text-gray-300",children:"Connect all your fantasy sports and betting accounts in one place. Track your balances and manage transfers easily."})]})}),u.jsx(Ae,{className:"bg-gray-800 border-gray-700 h-full",children:u.jsxs(Ve,{className:"p-6",children:[u.jsx("div",{className:"flex items-center justify-center mb-4",children:u.jsx("span",{className:"text-4xl",children:"🔒"})}),u.jsx("h3",{className:"text-xl font-bold mb-3",children:"Secure & Private"}),u.jsx("p",{className:"text-gray-300",children:"Bank-level security for your transactions. Your data is encrypted and protected."})]})})]})}),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-800",children:[u.jsxs("div",{className:"text-center mb-12",children:[u.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Powerful Group Features"}),u.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Create private groups, invite friends, and manage your fantasy sports experience together."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"bg-gray-700 p-6 rounded-lg",children:[u.jsx("div",{className:"text-2xl mb-4",children:"🤝"}),u.jsx("h3",{className:"text-xl font-bold mb-2",children:"League Sharing"}),u.jsx("p",{className:"text-gray-300",children:"Share and track leagues across multiple platforms within your group."})]}),u.jsxs("div",{className:"bg-gray-700 p-6 rounded-lg",children:[u.jsx("div",{className:"text-2xl mb-4",children:"📊"}),u.jsx("h3",{className:"text-xl font-bold mb-2",children:"Performance Tracking"}),u.jsx("p",{className:"text-gray-300",children:"Monitor group members' performance and compete for the top spot."})]}),u.jsxs("div",{className:"bg-gray-700 p-6 rounded-lg",children:[u.jsx("div",{className:"text-2xl mb-4",children:"🏆"}),u.jsx("h3",{className:"text-xl font-bold mb-2",children:"Group Challenges"}),u.jsx("p",{className:"text-gray-300",children:"Create and participate in group-specific challenges and competitions."})]})]})]}),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:[u.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12",children:"Supported Platforms"}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8",children:[u.jsx("div",{className:"flex items-center justify-center bg-gray-800 rounded-lg p-4",children:u.jsx("img",{src:"/images/betmgm.png",alt:"BetMGM",className:"max-h-12 w-auto object-contain"})}),u.jsx("div",{className:"flex items-center justify-center bg-gray-800 rounded-lg p-4",children:u.jsx("img",{src:"/images/caesars.png",alt:"Caesars",className:"max-h-12 w-auto object-contain"})}),u.jsx("div",{className:"flex items-center justify-center bg-gray-800 rounded-lg p-4",children:u.jsx("img",{src:"/images/betespn.png",alt:"ESPN",className:"max-h-12 w-auto object-contain"})}),u.jsx("div",{className:"flex items-center justify-center bg-gray-800 rounded-lg p-4",children:u.jsx("img",{src:"/images/betrFantasy.png",alt:"Betr Fantasy",className:"max-h-12 w-auto object-contain"})})]})]}),u.jsx("footer",{className:"bg-gray-800 py-8 sm:py-12 mt-8",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-8",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"text-lg font-bold mb-4",children:"About"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Company"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Team"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Careers"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-lg font-bold mb-4",children:"Resources"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Documentation"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Help Center"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"FAQ"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-lg font-bold mb-4",children:"Legal"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Privacy Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Terms of Service"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Security"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-lg font-bold mb-4",children:"Connect"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Twitter"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Discord"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Email"})})]})]})]}),u.jsx("div",{className:"mt-8 sm:mt-12 text-center text-gray-400",children:u.jsx("p",{children:"© 2024 Bankroll. All rights reserved."})})]})})]})},nM=()=>{const[t,e]=P.useState({firstName:"",lastName:"",username:"",email:"",password:"",confirmPassword:""}),[n,r]=P.useState(""),[s,i]=P.useState(!1),{signup:o}=vt(),l=lr(),c=f=>{const{name:m,value:g}=f.target;e(v=>({...v,[m]:g}))},d=async f=>{if(f.preventDefault(),t.password!==t.confirmPassword)return r("Passwords do not match");try{r(""),i(!0),await o(t.email,t.password,{firstName:t.firstName,lastName:t.lastName,username:t.username}),l("/")}catch(m){r("Failed to create an account: "+m.message)}finally{i(!1)}};return u.jsxs("div",{className:"min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[u.jsx("img",{className:"mx-auto h-24 w-auto",src:"/newBankrollWebsite/public/images/Bankroll Gradient.jpg",alt:"Bankroll"}),u.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-white",children:"Create your account"})]}),u.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:u.jsxs("div",{className:"bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[n&&u.jsx("div",{className:"mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",children:n}),u.jsxs("form",{className:"space-y-6",onSubmit:d,children:[u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"firstName",className:"block text-sm font-medium text-gray-300",children:"First Name"}),u.jsx("input",{id:"firstName",name:"firstName",type:"text",required:!0,value:t.firstName,onChange:c,className:"mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"lastName",className:"block text-sm font-medium text-gray-300",children:"Last Name"}),u.jsx("input",{id:"lastName",name:"lastName",type:"text",required:!0,value:t.lastName,onChange:c,className:"mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-300",children:"Username"}),u.jsx("input",{id:"username",name:"username",type:"text",required:!0,value:t.username,onChange:c,className:"mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300",children:"Email address"}),u.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:t.email,onChange:c,className:"mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-300",children:"Password"}),u.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,value:t.password,onChange:c,className:"mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-300",children:"Confirm Password"}),u.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",autoComplete:"new-password",required:!0,value:t.confirmPassword,onChange:c,className:"mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),u.jsx("div",{children:u.jsx("button",{type:"submit",disabled:s,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${s?"bg-blue-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"}`,children:s?"Creating Account...":"Sign Up"})})]}),u.jsxs("div",{className:"mt-6",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-600"})}),u.jsx("div",{className:"relative flex justify-center text-sm",children:u.jsx("span",{className:"px-2 bg-gray-800 text-gray-400",children:"Already have an account?"})})]}),u.jsx("div",{className:"mt-6",children:u.jsx(un,{to:"/login",className:"w-full flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600",children:"Sign In"})})]})]})})]})},rM=()=>{const[t,e]=P.useState({email:"",password:""}),[n,r]=P.useState(""),[s,i]=P.useState(!1),{login:o}=vt(),l=lr(),c=f=>{const{name:m,value:g}=f.target;e(v=>({...v,[m]:g}))},d=async f=>{f.preventDefault();try{r(""),i(!0),await o(t.email,t.password),l("/")}catch(m){r("Failed to sign in: "+m.message)}finally{i(!1)}};return u.jsxs("div",{className:"min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[u.jsx("img",{className:"mx-auto h-24 w-auto",src:"/newBankrollWebsite/public/images/Bankroll Gradient.jpg",alt:"Bankroll"}),u.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-white",children:"Sign in to your account"})]}),u.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:u.jsxs("div",{className:"bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[n&&u.jsx("div",{className:"mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",children:n}),u.jsxs("form",{className:"space-y-6",onSubmit:d,children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300",children:"Email address"}),u.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:t.email,onChange:c,className:"mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-300",children:"Password"}),u.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:t.password,onChange:c,className:"mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"}),u.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-300",children:"Remember me"})]}),u.jsx("div",{className:"text-sm",children:u.jsx("a",{href:"#",className:"font-medium text-blue-400 hover:text-blue-300",children:"Forgot your password?"})})]}),u.jsx("div",{children:u.jsx("button",{type:"submit",disabled:s,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${s?"bg-blue-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"}`,children:s?"Signing in...":"Sign in"})})]}),u.jsxs("div",{className:"mt-6",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-600"})}),u.jsx("div",{className:"relative flex justify-center text-sm",children:u.jsx("span",{className:"px-2 bg-gray-800 text-gray-400",children:"Don't have an account?"})})]}),u.jsx("div",{className:"mt-6",children:u.jsx(un,{to:"/signup",className:"w-full flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600",children:"Create an account"})})]})]})})]})};function sM(){const{currentUser:t}=vt(),[e,n]=P.useState(null),[r,s]=P.useState(!0),[i,o]=P.useState(null),[l,c]=P.useState(null),d=async()=>{var f;if(!(t!=null&&t.uid)){o("No user found"),s(!1);return}s(!0),o(null);try{const m=Rt(me,"users",t.uid),g=await Ns(m);if(g.exists()){const v=g.data();n(v.dwollaBalance||0),c(((f=v.lastBalanceUpdate)==null?void 0:f.toDate())||new Date)}else o("User data not found")}catch(m){console.error("Error fetching balance:",m),o("Failed to fetch balance")}finally{s(!1)}};return P.useEffect(()=>{d()},[t==null?void 0:t.uid]),t!=null&&t.uid?u.jsxs(Ae,{className:"bg-gray-900/40 border-purple-500/20",children:[u.jsxs(_n,{className:"flex flex-row items-center justify-between pb-2",children:[u.jsx(xn,{className:"text-white font-medium",children:"Bankroll Balance"}),u.jsx("button",{onClick:d,disabled:r,className:"p-2 hover:bg-purple-900/30 rounded-full transition-colors","aria-label":"Refresh balance",children:u.jsx(f4,{className:`h-4 w-4 text-purple-200 ${r?"animate-spin":""}`})})]}),u.jsx(Ve,{children:u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("div",{className:"p-2 bg-green-500/20 rounded-lg",children:u.jsx(Uu,{className:"h-5 w-5 text-green-500"})}),u.jsxs("div",{children:[r?u.jsx("div",{className:"text-2xl font-bold text-white animate-pulse",children:"Loading..."}):i?u.jsx("div",{className:"text-sm text-red-400",children:i}):u.jsxs("div",{className:"text-2xl font-bold text-white",children:["$",(e||0).toFixed(2)]}),l&&!i&&u.jsxs("div",{className:"text-xs text-gray-400",children:["Last updated: ",l.toLocaleTimeString()]})]})]})})]}):null}class iM{constructor(){this.baseURL="https://api-sandbox.dwolla.com",this.tokenURL=`${this.baseURL}/token`,this.apiKey=void 0,this.apiSecret=void 0,this.accessToken=null,this.tokenExpirationDate=null}async authenticate(){try{if(this.accessToken&&this.tokenExpirationDate>new Date(Date.now()+6e4)){console.log("Using existing token, expires at:",this.tokenExpirationDate);return}console.log("Requesting new access token...");const e=`${this.apiKey}:${this.apiSecret}`,n=btoa(e),r=await fetch(this.tokenURL,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${n}`},body:"grant_type=client_credentials"});if(!r.ok)throw new Error(`Authentication failed: ${r.statusText}`);const s=await r.json();this.accessToken=s.access_token,this.tokenExpirationDate=new Date(Date.now()+s.expires_in*1e3),console.log("New token obtained, expires in:",s.expires_in,"seconds")}catch(e){throw console.error("Authentication error:",e),e}}async createDwollaCustomer(e){try{if(await this.authenticate(),!this.accessToken)throw new Error("No access token available");const n=new Date(e.birthday).toISOString().split("T")[0],r={firstName:e.firstName,lastName:e.lastName,email:e.email,type:"personal",dateOfBirth:n,address1:e.address1,city:e.city,state:e.state,postalCode:e.postalCode,ssn:e.ssn},s=await fetch(`${this.baseURL}/customers`,{method:"POST",headers:{Accept:"application/vnd.dwolla.v1.hal+json","Content-Type":"application/json",Authorization:`Bearer ${this.accessToken}`},body:JSON.stringify(r)});if(!s.ok){const l=await s.json();throw new Error(l.message||"Failed to create Dwolla customer")}const o=s.headers.get("Location").split("/").pop();return me&&await this.storeDwollaCustomerId(e.id,o),o}catch(n){throw console.error("Error creating Dwolla customer:",n),n}}async storeDwollaCustomerId(e,n){if(!me){console.warn("Skipping Dwolla customer ID storage in development mode");return}try{const r=Rt(me,"users",e);await Na(r,{dwollaCustomerId:n,dwollaVerificationStatus:"pending",dwollaBalance:0,bonusBalance:0,lastBalanceUpdate:ps(),lastUpdated:ps()})}catch(r){throw console.error("Error storing Dwolla customer ID:",r),r}}async fetchBalance(e){try{if(await this.authenticate(),!this.accessToken)throw new Error("No access token available");const n=await fetch(`${this.baseURL}/customers/${e}/funding-sources`,{headers:{Accept:"application/vnd.dwolla.v1.hal+json",Authorization:`Bearer ${this.accessToken}`}});if(!n.ok)throw new Error("Failed to fetch funding sources");const s=(await n.json())._embedded["funding-sources"].find(l=>l.type==="balance");if(!s)throw new Error("No balance account found");const i=await fetch(`${this.baseURL}/funding-sources/${s.id}/balance`,{headers:{Accept:"application/vnd.dwolla.v1.hal+json",Authorization:`Bearer ${this.accessToken}`}});if(!i.ok)throw new Error("Failed to fetch balance");const o=await i.json();return parseFloat(o.balance.value)}catch(n){throw console.error("Error fetching balance:",n),n}}async getUserByDwollaId(e){if(!me)return null;try{const n=Vi(me,"users"),r=Sa(n,Fc("dwollaCustomerId","==",e)),s=await ka(r);return s.empty?null:s.docs[0].data()}catch(n){return console.error("Error getting user by Dwolla ID:",n),null}}async updateUserBalance(e,n){if(!me){console.warn("Skipping balance update in development mode");return}try{const r=Rt(me,"users",e),s=await Ns(r);if(!s.exists())throw new Error("User document not found");s.data().dwollaBalance!==n&&await Na(r,{dwollaBalance:n,lastBalanceUpdate:ps()})}catch(r){throw console.error("Error updating user balance:",r),r}}async listFundingSources(e){try{if(await this.authenticate(),!this.accessToken)throw new Error("No access token available");const n=await fetch(`${this.baseURL}/customers/${e}/funding-sources`,{headers:{Accept:"application/vnd.dwolla.v1.hal+json",Authorization:`Bearer ${this.accessToken}`}});if(!n.ok)throw new Error("Failed to fetch funding sources");return(await n.json())._embedded["funding-sources"]}catch(n){throw console.error("Error listing funding sources:",n),n}}}const oM=new iM;function aM(){const{currentUser:t}=vt(),[e,n]=P.useState(!1),[r,s]=P.useState(null),[i,o]=P.useState({firstName:"",lastName:"",email:(t==null?void 0:t.email)||"",birthday:"",ssn:"",address1:"",city:"",state:"",postalCode:""}),l=async d=>{d.preventDefault(),n(!0),s(null);try{await oM.createDwollaCustomer({...i,id:t.uid}),window.location.reload()}catch(f){console.error("Error creating Dwolla customer:",f),s(f.message||"Failed to create Dwolla account")}finally{n(!1)}},c=d=>{o(f=>({...f,[d.target.name]:d.target.value}))};return t!=null&&t.dwollaCustomerId?null:u.jsxs(Ae,{className:"bg-gray-900/40 border-purple-500/20",children:[u.jsx(_n,{children:u.jsx(xn,{className:"text-white",children:"Setup Dwolla Account"})}),u.jsx(Ve,{children:u.jsxs("form",{onSubmit:l,className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"First Name"}),u.jsx("input",{type:"text",name:"firstName",value:i.firstName,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Last Name"}),u.jsx("input",{type:"text",name:"lastName",value:i.lastName,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Email"}),u.jsx("input",{type:"email",name:"email",value:i.email,onChange:c,required:!0,disabled:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white opacity-50"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Date of Birth"}),u.jsx("input",{type:"date",name:"birthday",value:i.birthday,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"SSN"}),u.jsx("input",{type:"password",name:"ssn",value:i.ssn,onChange:c,required:!0,placeholder:"123-45-6789",className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Street Address"}),u.jsx("input",{type:"text",name:"address1",value:i.address1,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"City"}),u.jsx("input",{type:"text",name:"city",value:i.city,onChange:c,required:!0,className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"State"}),u.jsx("input",{type:"text",name:"state",value:i.state,onChange:c,required:!0,maxLength:"2",placeholder:"CA",className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"ZIP Code"}),u.jsx("input",{type:"text",name:"postalCode",value:i.postalCode,onChange:c,required:!0,placeholder:"12345",className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"})]})]}),r&&u.jsx("div",{className:"text-red-400 text-sm",children:r}),u.jsx("button",{type:"submit",disabled:e,className:`w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg 
              transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,children:e?"Setting up...":"Setup Account"})]})})]})}const lM={ValidationError:"Please check your information and try again.",NotFound:"The requested resource was not found.",Forbidden:"You do not have permission to perform this action.",InvalidCredentials:"Invalid credentials provided.",InvalidResourceState:"The resource is in an invalid state for this operation.",DuplicateResource:"This resource already exists.",InvalidFormat:"The provided information format is invalid.",InvalidScope:"The requested scope is invalid or unavailable.",ServerError:"An unexpected error occurred. Please try again later.",ServiceUnavailable:"The service is temporarily unavailable. Please try again later.",TooManyRequests:"Too many requests. Please wait a moment and try again.",InvalidSSN:"The provided SSN appears to be invalid.",InvalidDateOfBirth:"The provided date of birth appears to be invalid.",InvalidAddress:"The provided address could not be verified.",InvalidName:"The provided name appears to be invalid.",DocumentRequired:"Additional documentation is required for verification.",InsufficientFunds:"Insufficient funds available for this transaction.",TransferFailed:"The transfer could not be completed. Please try again.",InvalidAmount:"The specified amount is invalid.",ExceedsLimit:"This transaction exceeds the allowed limit.",AccountSuspended:"Your account has been suspended. Please contact support.",AccountDeactivated:"Your account has been deactivated.",VerificationRequired:"Account verification is required to perform this action.",getErrorMessage:function(t){if(this[t.code])return this[t.code];const e=t.message.toLowerCase();return e.includes("ssn")?this.InvalidSSN:e.includes("date of birth")?this.InvalidDateOfBirth:e.includes("address")?this.InvalidAddress:e.includes("funds")?this.InsufficientFunds:e.includes("verification")?this.VerificationRequired:"An error occurred. Please try again or contact support if the problem persists."}};function WT({onClose:t}){const{currentUser:e}=vt(),[n,r]=P.useState(""),[s,i]=P.useState(!1),[o,l]=P.useState(null),[c,d]=P.useState([]),[f,m]=P.useState(""),[g,v]=P.useState("ach"),S=async w=>{w.preventDefault(),i(!0),l(null);try{if(!(e!=null&&e.dwollaCustomerId))throw new Error("No Dwolla account found");const x=parseFloat(n);if(isNaN(x)||x<=0)throw new Error("Please enter a valid amount");await new Promise(b=>setTimeout(b,1e3)),t()}catch(x){console.error("Deposit error:",x),l(lM.getErrorMessage(x))}finally{i(!1)}},A=w=>{const x=w.target.value;(x===""||/^\d*\.?\d{0,2}$/.test(x))&&r(x)},N=[10,25,50,100,250,500];return u.jsxs(Ae,{className:"bg-gray-900/40 border-purple-500/20",children:[u.jsx(_n,{children:u.jsx(xn,{className:"text-white",children:"Deposit Funds"})}),u.jsx(Ve,{children:u.jsxs("form",{onSubmit:S,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Amount"}),u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:u.jsx(Uu,{className:"h-5 w-5 text-gray-400"})}),u.jsx("input",{type:"text",value:n,onChange:A,placeholder:"0.00",className:`block w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 border-gray-700 
                  text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Deposit Method"}),u.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[u.jsxs("button",{type:"button",onClick:()=>v("ach"),className:`p-3 rounded-lg border flex flex-col items-center justify-center space-y-2 transition-colors
                  ${g==="ach"?"bg-purple-900/40 border-purple-500":"bg-gray-800 border-gray-700 hover:bg-gray-700"}`,children:[u.jsx(i4,{className:"h-6 w-6 text-white"}),u.jsx("span",{className:"text-sm text-white",children:"ACH"})]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{type:"button",disabled:!0,className:`w-full p-3 rounded-lg border border-gray-700 bg-gray-800/50 
                    flex flex-col items-center justify-center space-y-2 opacity-50 cursor-not-allowed`,children:[u.jsx("img",{src:"/images/venmo icon.png",alt:"Venmo",className:"h-6 w-6"}),u.jsx("span",{className:"text-sm text-white",children:"Venmo"})]}),u.jsx("span",{className:"absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-400",children:"Coming Soon"})]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{type:"button",disabled:!0,className:`w-full p-3 rounded-lg border border-gray-700 bg-gray-800/50 
                    flex flex-col items-center justify-center space-y-2 opacity-50 cursor-not-allowed`,children:[u.jsx(l4,{className:"h-6 w-6 text-white"}),u.jsx("span",{className:"text-sm text-white",children:"Debit Card"})]}),u.jsx("span",{className:"absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-400",children:"Coming Soon"})]})]})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2 mt-8",children:N.map(w=>u.jsxs("button",{type:"button",onClick:()=>r(w.toString()),className:`py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                  transition-colors border border-gray-700`,children:["$",w]},w))}),o&&u.jsx("div",{className:"text-red-400 text-sm",children:o}),u.jsxs("div",{className:"flex space-x-4",children:[u.jsx("button",{type:"button",onClick:t,className:`flex-1 py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                transition-colors`,children:"Cancel"}),u.jsx("button",{type:"submit",disabled:s||!n,className:`flex-1 py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg 
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,children:s?"Processing...":"Deposit"})]})]})})]})}const cM=()=>{const[t,e]=P.useState(!1),n=[{id:1,description:"Connect your Season-Long Fantasy League",bounty:5,completed:!1,buttonColor:"bg-blue-500 hover:bg-blue-600",logos:[{src:"/newBankrollWebsite/images/espnFantasy.png",alt:"ESPN"},{src:"/newBankrollWebsite/images/sleeperFantasy.png",alt:"Sleeper"},{src:"/newBankrollWebsite/images/yahoofantasy.png",alt:"Yahoo"}]},{id:2,description:"Connect your FanDuel and DraftKings accounts",bounty:5,completed:!1,buttonColor:"bg-purple-500 hover:bg-purple-600",logos:[{src:"/newBankrollWebsite/images/fanduel.png",alt:"FanDuel"},{src:"/newBankrollWebsite/images/draftkingsFantasy.png",alt:"DraftKings"}]},{id:3,description:"Share with your best friend",bounty:10,completed:!1,buttonColor:"bg-green-500 hover:bg-green-600",emoji:"🤝"}],r=i=>{console.log(`Clicked bounty for challenge ${i}`)},s=()=>u.jsxs("div",{className:"fixed inset-0 bg-blue-500 flex flex-col items-center justify-start z-50 p-4",children:[u.jsx("button",{onClick:()=>e(!1),className:"text-white text-2xl font-medium mb-8 self-start",children:"Close"}),u.jsxs("div",{className:"space-y-4 w-full max-w-md mb-8",children:[u.jsxs("div",{className:"bg-blue-400/30 rounded-xl p-4 flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("img",{src:"/newBankrollWebsite/images/sleeperFantasy.png",alt:"Sleeper",className:"w-8 h-8 rounded"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-white",children:"$0.50 for your"}),u.jsx("div",{className:"text-white/70",children:"Sleeper League"})]})]}),u.jsx("div",{className:"text-white text-xl font-medium",children:"$0.50"})]}),u.jsxs("div",{className:"bg-blue-400/30 rounded-xl p-4 flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("img",{src:"/newBankrollWebsite/images/fanduel.png",alt:"FanDuel",className:"w-8 h-8 rounded"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-white",children:"$1.00 FanDuel"}),u.jsx("div",{className:"text-white/70",children:"Fanduel"})]})]}),u.jsx("div",{className:"text-white text-xl font-medium",children:"$1.00"})]})]}),u.jsxs("div",{className:"relative w-full max-w-md aspect-square",children:[u.jsx("div",{className:"absolute inset-0 bg-white rounded-full"}),u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full z-10"}),u.jsx("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 
                      border-l-[20px] border-l-transparent
                      border-b-[40px] border-b-white
                      border-r-[20px] border-r-transparent z-20`})]}),u.jsx("button",{className:"mt-8 bg-white text-blue-500 rounded-full px-12 py-4 text-xl font-bold",onClick:()=>{},children:"SPIN!"})]});return u.jsxs(Ae,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(Ve,{className:"p-6",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsx("h3",{className:"text-lg font-semibold text-white",children:"Rewards and Challenges"}),u.jsx(VT,{className:"h-5 w-5 text-yellow-500"})]}),u.jsx("div",{className:"rounded-lg overflow-hidden",children:n.map((i,o)=>u.jsxs("div",{className:`flex items-center justify-between p-4 ${o%2===0?"bg-gray-800/50":"bg-gray-800/30"}`,children:[u.jsxs("div",{className:"flex items-center flex-1",children:[i.logos?u.jsx("div",{className:"flex -space-x-2 mr-4",children:i.logos.map((l,c)=>u.jsx("img",{src:l.src,alt:l.alt,className:"w-8 h-8 rounded-full border-2 border-gray-800 bg-white"},c))}):i.emoji?u.jsx("div",{className:"w-8 h-8 flex items-center justify-center mr-4 text-xl",children:i.emoji}):null,u.jsx("p",{className:"text-white",children:i.description})]}),u.jsxs("button",{onClick:()=>r(i.id),className:`ml-4 px-6 py-2 ${i.buttonColor} text-white rounded-lg transition-colors shadow-lg`,children:["Bounty: $",i.bounty]})]},i.id))}),u.jsxs("div",{className:"flex items-center justify-between mt-6 p-4 bg-gray-800/50 rounded-lg",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-white font-medium",children:"Daily Reward"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Spin for a chance to win rewards!"})]}),u.jsxs("div",{className:"relative",children:[u.jsx("button",{disabled:!0,className:"px-6 py-2 bg-gradient-to-r from-blue-500/50 to-purple-500/50 text-white/70 rounded-lg cursor-not-allowed shadow-lg",children:"Spin Now!"}),u.jsx("span",{className:"absolute -top-2 right-0 text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full",children:"Coming Soon"})]})]})]}),t&&u.jsx(s,{})]})};function uM(){const{currentUser:t}=vt(),[e,n]=P.useState(!1),[r,s]=P.useState("rewards"),i=[{id:1,type:"deposit",amount:500,description:"Deposit from Bank",date:"2024-03-15"},{id:2,type:"withdrawal",amount:-50,description:"NFL Bet Placement",date:"2024-03-14"},{id:3,type:"winning",amount:125,description:"Bet Payout",date:"2024-03-13"}];return t!=null&&t.dwollaCustomerId?u.jsxs("div",{className:"space-y-6",children:[(t==null?void 0:t.dwollaVerificationStatus)==="pending"&&u.jsx(Ae,{className:"bg-yellow-500/10 border-yellow-500/20",children:u.jsx(Ve,{className:"py-4",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center",children:u.jsx(OT,{className:"h-5 w-5 text-yellow-500"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-white",children:"Verification In Progress"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Your account is being verified. This typically takes 1-2 business days. You'll receive a notification once verified."})]})]})})}),e&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsx("div",{className:"max-w-md w-full mx-4",children:u.jsx(WT,{onClose:()=>n(!1)})})}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsx(sM,{}),u.jsxs(Ae,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsx(_n,{children:u.jsx(xn,{className:"text-lg font-medium text-purple-100",children:"Quick Actions"})}),u.jsx(Ve,{children:u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("button",{onClick:()=>n(!0),disabled:(t==null?void 0:t.dwollaVerificationStatus)==="pending",className:"flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[u.jsx(Uv,{className:"h-5 w-5"}),u.jsx("span",{children:"Deposit"})]}),u.jsxs("button",{disabled:(t==null?void 0:t.dwollaVerificationStatus)==="pending",className:"flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:[u.jsx(Bv,{className:"h-5 w-5"}),u.jsx("span",{children:"Withdraw"})]})]})})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[u.jsx("button",{onClick:()=>s("rewards"),className:`p-4 rounded-lg font-medium transition-colors ${r==="rewards"?"bg-purple-600 text-white":"bg-gray-900/50 text-gray-300 hover:bg-gray-900/70"}`,children:"Rewards & Challenges"}),u.jsx("button",{onClick:()=>s("activity"),className:`p-4 rounded-lg font-medium transition-colors ${r==="activity"?"bg-purple-600 text-white":"bg-gray-900/50 text-gray-300 hover:bg-gray-900/70"}`,children:"Recent Activity"})]}),r==="rewards"?u.jsx(cM,{}):u.jsxs(Ae,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsx(_n,{children:u.jsx(xn,{className:"text-lg font-medium text-purple-100",children:"Recent Activity"})}),u.jsx(Ve,{children:u.jsx("div",{className:"space-y-4",children:i.map(o=>u.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("div",{className:`p-2 rounded-full ${o.type==="deposit"?"bg-green-500/20 text-green-500":o.type==="withdrawal"?"bg-red-500/20 text-red-500":"bg-purple-500/20 text-purple-500"}`,children:o.type==="deposit"?u.jsx(Uv,{className:"h-5 w-5"}):o.type==="withdrawal"?u.jsx(Bv,{className:"h-5 w-5"}):u.jsx(sh,{className:"h-5 w-5"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-medium text-white",children:o.description}),u.jsx("p",{className:"text-xs text-gray-400",children:o.date})]})]}),u.jsxs("div",{className:`font-medium ${o.amount>0?"text-green-500":"text-red-500"}`,children:[o.amount>0?"+":"",o.amount.toFixed(2)]})]},o.id))})})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs(Ae,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(_n,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(xn,{className:"text-sm font-medium text-purple-100",children:"Total Winnings"}),u.jsx(Uu,{className:"h-4 w-4 text-purple-200"})]}),u.jsxs(Ve,{children:[u.jsx("div",{className:"text-2xl font-bold text-green-500",children:"$1,234.56"}),u.jsx("p",{className:"text-xs text-purple-200 mt-1",children:"+12.5% from last month"})]})]}),u.jsxs(Ae,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(_n,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(xn,{className:"text-sm font-medium text-purple-100",children:"Active Bets"}),u.jsx(sh,{className:"h-4 w-4 text-purple-200"})]}),u.jsxs(Ve,{children:[u.jsx("div",{className:"text-2xl font-bold text-white",children:"5"}),u.jsx("p",{className:"text-xs text-purple-200 mt-1",children:"Total value: $250.00"})]})]}),u.jsxs(Ae,{className:"bg-gray-900/50 border-purple-500/20",children:[u.jsxs(_n,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(xn,{className:"text-sm font-medium text-purple-100",children:"Win Rate"}),u.jsx(sh,{className:"h-4 w-4 text-purple-200"})]}),u.jsxs(Ve,{children:[u.jsx("div",{className:"text-2xl font-bold text-white",children:"62%"}),u.jsx("p",{className:"text-xs text-purple-200 mt-1",children:"Last 30 days"})]})]})]}),u.jsxs("div",{className:"text-xs text-gray-500",children:["Dwolla ID: ",t.dwollaCustomerId]})]}):u.jsx("div",{className:"max-w-2xl mx-auto",children:u.jsx(aM,{})})}const dM=({league:t,onClose:e,onGroupCreated:n,isConverted:r})=>{var T,C,R,k,Le;const[s,i]=P.useState([]),[o,l]=P.useState(!0),[c,d]=P.useState(!1),[f,m]=P.useState(!1),[g,v]=P.useState("High-Yield Savings"),[S,A]=P.useState(!1),{currentUser:N}=vt(),w=[{name:"High-Yield Savings",return:"+4.5%",icon:"💰",isPositive:!0},{name:"Bitcoin",return:"+3.36%",icon:u.jsx("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-black text-white rounded-full",children:"₿"}),isPositive:!0},{name:"Apple Stock",return:"+0.18%",icon:"🍎",isPositive:!0}],x=.045,b={first:700,second:200,third:100},D=H=>{if(g==="High-Yield Savings"){const $e=Math.round(H*x);return{base:H,increase:$e,total:H+$e}}return{base:H,increase:0,total:H}};P.useEffect(()=>{(async()=>{try{const $e=await Rf.getLeagueUsers(t.league_id);i($e)}catch($e){console.error("Error fetching league users:",$e)}finally{l(!1)}})()},[t.league_id]);const M=async()=>{if(N)try{d(!0);const H=s.find(ze=>ze.is_owner),$e={name:t.name,emoji:"🏈",coOwners:[N.uid,H.user_id],members:s.map(ze=>({id:ze.user_id,username:ze.username,displayName:ze.display_name,avatar:ze.avatar})),sleeperLeagueId:t.league_id,platform:"sleeper"};await Yt.createGroup($e,N.uid),n(t.league_id)}catch(H){console.error("Error creating group:",H)}finally{d(!1)}},F=D(b.first),I=D(b.second),_=D(b.third),E=H=>u.jsxs("span",{children:["$",H.total,H.increase>0&&u.jsxs("span",{className:"text-green-500 text-lg ml-1",children:["(+$",H.increase,")"]})]});return u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/90 p-8 rounded-2xl max-w-2xl w-full mx-4 relative border border-purple-200 dark:border-purple-700 max-h-[80vh] overflow-y-auto",children:[u.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-purple-500 dark:text-purple-300 hover:text-purple-700 dark:hover:text-white",children:u.jsx(Ds,{className:"h-6 w-6"})}),u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[t.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${t.avatar}`,alt:t.name,className:"w-16 h-16 rounded-full"}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:t.name}),u.jsxs("p",{className:"text-purple-600 dark:text-purple-300",children:["Season ",t.season]})]})]}),!r&&u.jsxs("button",{onClick:M,disabled:c,className:`flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 
                text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,children:[u.jsx($m,{className:"h-5 w-5"}),u.jsx("span",{children:c?"Creating...":"Create Bankroll Group"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[u.jsxs("div",{className:"bg-purple-100/50 dark:bg-purple-800/30 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-600 dark:text-purple-300",children:"Total Teams"}),u.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:t.total_rosters})]}),u.jsxs("div",{className:"bg-purple-100/50 dark:bg-purple-800/30 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-600 dark:text-purple-300",children:"League Type"}),u.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white capitalize",children:t.status||"Active"})]}),u.jsxs("div",{className:"bg-purple-100/50 dark:bg-purple-800/30 p-4 rounded-lg cursor-pointer hover:bg-purple-200/50 dark:hover:bg-purple-700/30 transition-colors",onClick:()=>m(!f),children:[u.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-600 dark:text-purple-300",children:"Prize Structure"}),u.jsx($v,{className:"h-4 w-4 text-purple-400"})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(VT,{className:"h-5 w-5 text-yellow-400"}),u.jsxs("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:["1st Prize: ",E(F)]})]}),u.jsxs("div",{className:"mt-2 flex items-center text-sm text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100",children:[u.jsx("span",{children:"See More"}),u.jsx(jT,{className:"h-4 w-4 ml-1"})]}),f&&u.jsxs("div",{className:"mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300",children:[u.jsxs("p",{children:["2nd Prize: ",E(I)]}),u.jsxs("p",{children:["3rd Prize: ",E(_)]})]})]}),u.jsxs("div",{className:"bg-purple-100/50 dark:bg-purple-800/30 p-4 rounded-lg relative",children:[u.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[u.jsx("h3",{className:"text-sm font-medium text-purple-600 dark:text-purple-300",children:"League Holdings Type"}),u.jsx($v,{className:"h-4 w-4 text-purple-400"})]}),u.jsxs("div",{className:"flex items-center justify-between cursor-pointer",onClick:()=>A(!S),children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[typeof((T=w.find(H=>H.name===g))==null?void 0:T.icon)=="string"?u.jsx("span",{children:(C=w.find(H=>H.name===g))==null?void 0:C.icon}):(R=w.find(H=>H.name===g))==null?void 0:R.icon,u.jsxs("div",{children:[u.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:g}),u.jsx("p",{className:`text-sm ${(k=w.find(H=>H.name===g))!=null&&k.isPositive?"text-green-500":"text-red-500"}`,children:(Le=w.find(H=>H.name===g))==null?void 0:Le.return})]})]}),u.jsx(a4,{className:`h-5 w-5 text-black dark:text-white transition-transform ${S?"transform rotate-180":""}`})]}),S&&u.jsx("div",{className:"absolute left-0 right-0 mt-2 bg-white dark:bg-purple-800 rounded-lg shadow-lg z-10 border border-purple-200 dark:border-purple-600",children:w.map(H=>u.jsx("div",{className:"px-4 py-2 hover:bg-purple-100 dark:hover:bg-purple-700 cursor-pointer first:rounded-t-lg last:rounded-b-lg",onClick:()=>{v(H.name),A(!1)},children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[typeof H.icon=="string"?u.jsx("span",{children:H.icon}):H.icon,u.jsx("span",{className:"text-gray-900 dark:text-white",children:H.name})]}),u.jsx("span",{className:`${H.isPositive?"text-green-500":"text-red-500"}`,children:H.return})]})},H.name))})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold mb-4 text-gray-900 dark:text-white",children:"League Members"}),o?u.jsx("div",{className:"text-center py-4 text-purple-600 dark:text-purple-300",children:"Loading members..."}):u.jsx("div",{className:"space-y-3",children:s.map(H=>u.jsxs("div",{className:"flex items-center space-x-3 bg-purple-100/50 dark:bg-purple-800/20 p-3 rounded-lg",children:[H.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${H.avatar}`,alt:H.display_name,className:"w-10 h-10 rounded-full"}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"font-medium text-gray-900 dark:text-white",children:H.display_name}),H.is_owner&&u.jsx(c4,{className:"h-4 w-4 text-yellow-400",title:"Commissioner"})]}),u.jsxs("div",{className:"flex items-center space-x-1",children:[u.jsxs("p",{className:"text-purple-500 font-medium text-sm",children:["#",H.username]}),u.jsx(DT,{className:"h-4 w-4 text-green-500",title:"Verified User"})]})]}),u.jsx(Pf,{className:"h-5 w-5 text-green-500",title:"Payment Received"})]},H.user_id))})]})]})})},hM=()=>{const{leagues:t}=CT(),[e,n]=P.useState(null),[r,s]=P.useState(new Set);if(!t||t.length===0)return u.jsx("div",{className:"text-center text-gray-400 py-4",children:"No leagues found"});const i=o=>{s(l=>new Set([...l,o]))};return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"space-y-4",children:t.map(o=>u.jsx("div",{className:`bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 
              dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-500/40 
              transition-all cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-900/40`,onClick:()=>n(o),children:u.jsxs("div",{className:"flex items-center space-x-4",children:[o.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${o.avatar}`,alt:o.name,className:"w-12 h-12 rounded-full"}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:o.name}),r.has(o.league_id)&&u.jsx(DT,{className:"h-5 w-5 text-green-500"})]}),u.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[o.total_rosters," participants • Season ",o.season]})]})]})},o.league_id))}),e&&u.jsx(dM,{league:e,onClose:()=>n(null),onGroupCreated:i,isConverted:r.has(e.league_id)})]})},fM=()=>{const[t,e]=P.useState("all"),[n,r]=P.useState(!1),[s,i]=P.useState(""),{user:o,fetchUser:l,isLoading:c,errorMessage:d,disconnectSleeper:f}=CT(),m=[{id:"all",label:"All"},{id:"sleeper",label:"Sleeper"},{id:"espn",label:"ESPN"},{id:"underdog",label:"Underdog"}],g=async w=>{w.preventDefault(),await l(s),d||(r(!1),i(""))},v=()=>{window.confirm("Are you sure you want to disconnect your Sleeper account?")&&f()},S=()=>u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between bg-purple-900/30 p-4 rounded-lg",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[o.avatar&&u.jsx("img",{src:`https://sleepercdn.com/avatars/${o.avatar}`,alt:o.username,className:"w-10 h-10 rounded-full"}),u.jsxs("div",{children:[u.jsxs("h3",{className:"text-white font-medium",children:["Connected as: ",o.username]}),u.jsxs("p",{className:"text-sm text-gray-400",children:["User ID: ",o.user_id]})]})]}),u.jsxs("button",{onClick:v,className:`flex items-center space-x-2 px-3 py-2 bg-red-500/20 text-red-400 
            rounded-lg hover:bg-red-500/30 transition-colors`,children:[u.jsx(LT,{className:"h-4 w-4"}),u.jsx("span",{children:"Disconnect"})]})]}),u.jsx(hM,{})]}),A=w=>u.jsxs("div",{className:"flex flex-col items-center justify-center py-12 space-y-8",children:[u.jsxs("div",{className:"text-center space-y-4",children:[u.jsx("div",{className:"p-4 rounded-full bg-purple-900/30 inline-block",children:u.jsx(zv,{className:"h-8 w-8 text-purple-400"})}),u.jsx("h3",{className:"text-xl font-medium text-white",children:"Integration Coming Soon"}),u.jsxs("p",{className:"text-sm text-gray-400",children:["Support for ",w," integration is coming soon"]})]}),u.jsxs("div",{className:"w-full max-w-md text-center space-y-4",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-700"})}),u.jsx("div",{className:"relative flex justify-center",children:u.jsx("span",{className:"px-4 text-sm text-gray-400 bg-gray-900",children:"or"})})]}),u.jsxs("button",{className:`group px-6 py-3 bg-purple-900/50 text-white rounded-lg hover:bg-purple-900/70 
            transition-all duration-200 flex items-center justify-center space-x-2 w-full`,children:[u.jsx($m,{className:"h-5 w-5"}),u.jsx("span",{children:"Add Your League Manually"})]}),u.jsx("p",{className:"text-sm text-gray-400",children:"Create your league and add leaguemates manually"})]})]}),N=w=>w==="all"?o?u.jsx("div",{className:"space-y-6",children:o&&u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-white mb-4",children:"Connected Platforms"}),S()]})}):u.jsx("div",{className:"text-center text-gray-400 py-12",children:"Connect your fantasy platforms to view all your leagues in one place"}):w==="sleeper"?o?S():u.jsxs("div",{className:"flex flex-col items-center justify-center py-12 space-y-4",children:[u.jsx("div",{className:"p-4 rounded-full bg-purple-900/30",children:u.jsx(zv,{className:"h-8 w-8 text-purple-400"})}),u.jsx("button",{onClick:()=>r(!0),className:`px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
              transition-all duration-200 transform hover:scale-105 shadow-lg 
              hover:shadow-green-500/25`,children:"Connect Sleeper Account"}),u.jsx("p",{className:"text-sm text-gray-400",children:"Import all your Sleeper fantasy leagues"})]}):A(w.charAt(0).toUpperCase()+w.slice(1));return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-gray-900/50 border border-purple-500/20 rounded-lg overflow-hidden",children:[u.jsx("div",{className:"p-6",children:u.jsx("h2",{className:"text-xl font-medium text-purple-100",children:"My Leagues"})}),u.jsx("div",{className:"border-b border-purple-900/50",children:u.jsx("div",{className:"flex space-x-1 px-6",children:m.map(w=>u.jsx("button",{onClick:()=>e(w.id),className:`
                  px-4 py-2 rounded-t-lg text-sm font-medium transition-colors duration-200
                  ${t===w.id?"bg-purple-900/50 text-white border-b-2 border-green-500":"text-gray-400 hover:text-white hover:bg-purple-900/30"}
                `,children:w.label},w.id))})}),u.jsx("div",{className:"p-6",children:N(t)})]}),n&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsxs("div",{className:"bg-purple-900/90 p-8 rounded-2xl max-w-md w-full mx-4 relative border border-purple-700",children:[u.jsx("button",{onClick:()=>r(!1),className:"absolute top-4 right-4 text-purple-300 hover:text-white",children:u.jsx(Ds,{className:"h-6 w-6"})}),u.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Connect Sleeper Account"}),u.jsx("form",{onSubmit:g,children:u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"username",className:"block text-sm font-medium mb-2",children:"Sleeper Username"}),u.jsx("input",{type:"text",id:"username",value:s,onChange:w=>i(w.target.value),className:`w-full px-4 py-2 bg-purple-800/50 border border-purple-600 rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 text-white 
                      placeholder-gray-400`,placeholder:"Enter your Sleeper username"})]}),d&&u.jsx("p",{className:"text-red-400 text-sm",children:d}),u.jsx("button",{type:"submit",disabled:c,className:`w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`,children:c?"Connecting...":"Connect Account"})]})})]})})]})},pM=()=>{const[t,e]=P.useState("0"),[n,r]=P.useState(""),[s,i]=P.useState(""),o=l=>{const c=l.replace(/[^0-9]/g,"");e(c)};return u.jsxs("div",{className:"relative",children:[u.jsxs("div",{className:"max-w-md mx-auto p-6 space-y-8",children:[u.jsxs("div",{className:"text-center space-y-4",children:[u.jsx("h2",{className:"text-2xl font-bold text-white",children:"Send Money"}),u.jsxs("div",{className:"flex items-center justify-center text-6xl font-bold text-white",children:[u.jsx(Uu,{className:"h-12 w-12"}),u.jsx("input",{type:"text",value:t,onChange:l=>o(l.target.value),className:"w-40 bg-transparent text-center focus:outline-none",placeholder:"0"})]})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("div",{className:"relative",children:u.jsx("input",{type:"text",value:n,onChange:l=>r(l.target.value),placeholder:"#username",className:"w-full p-4 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"})}),u.jsx("div",{className:"relative",children:u.jsx("input",{type:"text",value:s,onChange:l=>i(l.target.value),placeholder:"What's this for?",className:"w-full p-4 rounded-lg bg-purple-900/30 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"})})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx("button",{className:"w-full py-3 rounded-full bg-white text-purple-900 font-medium hover:bg-gray-100 transition-colors",children:"Request"}),u.jsx("button",{className:"w-full py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors",children:"Pay"})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"text-lg font-medium text-white",children:"Payment Source"}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx(Ae,{className:"bg-white hover:shadow-lg transition-all duration-200 cursor-pointer",children:u.jsx(Ve,{className:"p-4",children:u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-full bg-blue-500",children:u.jsx(Bu,{className:"h-6 w-6 text-white"})}),u.jsxs("div",{children:[u.jsx("div",{className:"font-medium",children:"Friends"}),u.jsx("div",{className:"text-sm text-gray-500",children:"0 friends"})]})]})})}),u.jsx(Ae,{className:"bg-white hover:shadow-lg transition-all duration-200 cursor-pointer",children:u.jsx(Ve,{className:"p-4",children:u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-full bg-purple-500",children:u.jsx(y4,{className:"h-6 w-6 text-white"})}),u.jsxs("div",{children:[u.jsx("div",{className:"font-medium",children:"Groups"}),u.jsx("div",{className:"text-sm text-gray-500",children:"0 groups"})]})]})})})]})]})]}),u.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center",children:u.jsxs("div",{className:"max-w-md mx-auto p-8 text-center",children:[u.jsx("div",{className:"mb-6 flex justify-center",children:u.jsx("div",{className:"w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center",children:u.jsx(OT,{className:"h-8 w-8 text-purple-500"})})}),u.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Coming Soon"}),u.jsx("p",{className:"text-gray-300",children:"The Send Money feature is currently under development. Stay tuned for updates!"})]})})]})};class mM{logEvent(e,n={}){try{ui&&dT(ui,e,{...n,timestamp:new Date().toISOString()})}catch{}}logClick(e,n,r,s=null){this.logEvent("user_click",{element_id:e,element_type:n,page_name:r,click_timestamp:new Date().toISOString(),user_id:(s==null?void 0:s.uid)||"anonymous",user_email:(s==null?void 0:s.email)||"anonymous",user_display_name:(s==null?void 0:s.displayName)||"anonymous"})}startSession(e){this.logEvent("session_start",{user_id:e,session_start_time:new Date().toISOString()}),ui&&NO(ui,{last_session_start:new Date().toISOString(),user_id:e})}endSession(e,n){this.logEvent("session_end",{user_id:e,session_end_time:new Date().toISOString(),session_duration:n})}logPlatformView(e,n,r){this.logEvent("platform_view",{platform_id:e,platform_name:n,category:r})}logPlatformVisit(e,n){this.logEvent("platform_visit",{platform_id:e,platform_name:n})}logPlatformConnect(e,n){this.logEvent("platform_connect",{platform_id:e,platform_name:n})}logSleeperConnect(e){this.logEvent("sleeper_connect",{username:e})}logSleeperDisconnect(){this.logEvent("sleeper_disconnect")}logSleeperLeagueView(e,n){this.logEvent("sleeper_league_view",{league_id:e,league_name:n})}logPageView(e,n){this.logEvent("page_view",{page_name:e,page_title:n,url:window.location.pathname})}logNotificationPermissionRequested(){this.logEvent("notification_permission_requested")}logNotificationPermissionGranted(){this.logEvent("notification_permission_granted")}logNotificationPermissionDenied(){this.logEvent("notification_permission_denied")}logNotificationSettingsUpdated(e){this.logEvent("notification_settings_updated",{email_enabled:e.emailEnabled,push_enabled:e.pushEnabled,categories:e.categories})}}const Df=new mM,gM=({platform:t,onClose:e})=>{const[n,r]=P.useState(!1),s=()=>{if(Df.logPlatformVisit(t.id,t.name),t.url){const o=window.open();o&&(o.opener=null,o.location=t.url)}},i=()=>{Df.logPlatformConnect(t.id,t.name),r(!0)};return u.jsxs("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:[u.jsxs("div",{className:"bg-gradient-to-b from-purple-100 to-pink-100 rounded-3xl max-w-md w-full mx-auto relative overflow-hidden",children:[u.jsx("button",{onClick:e,className:"absolute top-4 left-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors",children:u.jsx(Ds,{className:"h-6 w-6 text-gray-600"})}),u.jsxs("div",{className:"p-6 space-y-6",children:[u.jsxs("div",{className:"flex flex-col items-center justify-center pt-8",children:[u.jsx("div",{className:"w-24 h-24 mb-4",children:u.jsx("img",{src:t.logo,alt:t.name,className:"w-full h-full object-contain rounded-lg"})}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:t.name})]}),u.jsx("div",{className:"text-center",children:u.jsxs("p",{className:"text-gray-600",children:["Legal States: ",t.legalStates||"Information not available"]})}),u.jsxs("div",{className:"bg-white/80 rounded-xl p-4 space-y-2",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Promotion Details"}),u.jsx("p",{className:"text-gray-700",children:t.promoDetails||"No current promotions"}),t.restrictions&&u.jsxs("div",{className:"mt-2",children:[u.jsx("h4",{className:"font-medium text-gray-900",children:"Restrictions"}),u.jsx("p",{className:"text-gray-600 text-sm",children:t.restrictions})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("button",{onClick:s,className:`w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 
                transition-colors duration-200 flex items-center justify-center space-x-2 group`,children:[u.jsxs("span",{children:["Visit ",t.name]}),u.jsx(u4,{className:"h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),u.jsxs("button",{onClick:i,className:`w-full py-3 bg-yellow-400 text-gray-900 rounded-xl font-medium 
                hover:bg-yellow-500 transition-colors duration-200`,children:["Connect ",t.name]})]}),u.jsx("div",{className:"text-center text-sm text-gray-600 pt-4",children:u.jsx("p",{children:"Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700"})})]})]}),n&&u.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[60]",children:u.jsxs("div",{className:"bg-gray-900 rounded-3xl p-8 max-w-lg mx-4 relative border border-gray-700 shadow-2xl",children:[u.jsx("button",{onClick:()=>r(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors",children:u.jsx(Ds,{className:"h-6 w-6"})}),u.jsxs("div",{className:"text-center space-y-6",children:[u.jsx("div",{className:"flex justify-center",children:u.jsx("div",{className:"w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center",children:u.jsx(v4,{className:"h-10 w-10 text-yellow-400"})})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:"Coming Soon!"}),u.jsxs("p",{className:"text-gray-400 text-lg",children:["Get ready for seamless transactions with ",t.name]})]}),u.jsxs("div",{className:"space-y-4 py-4",children:[u.jsx("p",{className:"text-gray-300 text-lg",children:"We're building something special just for you:"}),u.jsxs("ul",{className:"text-gray-300 text-left space-y-3 max-w-md mx-auto",children:[u.jsxs("li",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),u.jsxs("span",{children:["Connect your ",t.name," account directly"]})]}),u.jsxs("li",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),u.jsx("span",{children:"Instant deposits with no hassle"})]}),u.jsxs("li",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),u.jsx("span",{children:"Lightning-fast withdrawals"})]}),u.jsxs("li",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),u.jsx("span",{children:"Track all your gaming activity in one place"})]})]})]}),u.jsx("button",{onClick:()=>r(!1),className:`px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl 
                  font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 
                  transform hover:scale-105`,children:"Can't Wait!"})]})]})})]})},yM=()=>{const[t,e]=P.useState("CASINO"),[n,r]=P.useState(null),s=[{id:"ALL",label:"ALL"},{id:"FANTASY",label:"FANTASY"},{id:"CASINO",label:"CASINO"},{id:"SPORTS BETTING",label:"SPORTS BETTING"},{id:"POKER",label:"POKER"}],i=[{id:"prizepicks",name:"PrizePicks (18+)",category:"FANTASY",logo:"/newBankrollWebsite/images/prizepicks.png",legalStates:"AK, CA, FL, GA, IL, KS, KY, MN, NE, NM, NC, OK, OR, RI, SC, SD, TX, UT, VT, WI, WY",promoDetails:"Get 100% deposit match up to $100",restrictions:"First-time users only. Must be 18+",url:"https://app.prizepicks.com/sign-up?invite_code=WINDAILY"},{id:"draftkings",name:"DraftKings Fantasy (18+)",category:"FANTASY",logo:"/newBankrollWebsite/images/draftkingsFantasy.png",legalStates:"Most US states",promoDetails:"New user bonus available",restrictions:"New users only. Must be 18+",url:"https://dkdfs.sng.link/Avkw3/ejal?_dl=draftkings%3A%2F%2Fgateway%3Fs%3D199744492&pcid=357597&psn=2003&pcn=xx&pscn=xx&pcrn=WDS&pscid=DFS&pcrid=xx&wpcid=357597&wpsrc=2003&wpcn=xx&wpscn=xx&wpcrn=WDS&wpscid=DFS&wpcrid=xx&_forward_params=1"},{id:"fanduel-fantasy",name:"FanDuel Fantasy (18+)",category:"FANTASY",logo:"/newBankrollWebsite/images/fanduel.png",legalStates:"Most US states",promoDetails:"Special signup bonus",restrictions:"New users only. Must be 18+",url:"https://wlfanduelus.adsrv.eacdn.com/C.ashx?btag=a_15755b_56c_&affid=11359&siteid=15755&adid=56&c="},{id:"underdog",name:"Underdog Fantasy (18+)",category:"FANTASY",logo:"/newBankrollWebsite/images/underdog.jpeg",legalStates:"Most US states",promoDetails:"Special welcome bonus",restrictions:"New users only. Must be 18+",url:"https://play.underdogfantasy.com/p-win-daily-sports"},{id:"myprize",name:"MyPrize Casino (18+)",category:"CASINO",logo:"/newBankrollWebsite/images/myPrizeLogo.jpeg",legalStates:"Available in most US states",promoDetails:"Get 5000 free coins on signup",restrictions:"Must be 18+",url:"https://myprize.us/invite/bankroll"},{id:"betmgm",name:"BetMGM Casino (21+)",category:"CASINO",logo:"/newBankrollWebsite/images/betmgm.png",legalStates:"MI, NJ, PA, WV",promoDetails:"100% deposit match up to $1000 + $25 free play",restrictions:"New customers only. Must be 21+",url:"https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1728250"},{id:"caesarspalace",name:"Caesars Casino (21+)",category:"CASINO",logo:"/newBankrollWebsite/images/caesarsCasino.png",legalStates:"MI, NJ, PA, WV",promoDetails:"100% deposit match up to $1000 + $10 free",restrictions:"New users only. Must be 21+",url:"https://wlwilliamhillus.adsrv.eacdn.com/C.ashx?btag=a_13325b_2658c_&affid=450&siteid=13325&adid=2658&c="},{id:"pokerstars",name:"PokerStars Casino (21+)",category:"CASINO",logo:"/newBankrollWebsite/images/pokerstars.png",legalStates:"MI, NJ, PA",promoDetails:"$50 free play with first deposit",restrictions:"New players only. Must be 21+",url:"https://star-casino.pxf.io/c/3732491/1574555/14251"},{id:"bet365",name:"Bet365 Casino (21+)",category:"CASINO",logo:"/newBankrollWebsite/images/bet365logo.png",legalStates:"NJ, CO, OH, VA, IA, KY",promoDetails:"Bet $1, Get $365 in Bonus Bets",restrictions:"New players only. Must be 21+",url:"https://casino.bet365.com/opening-bonus?affiliate=365_01276644"},{id:"wsop-casino",name:"WSOP Casino (21+)",category:"CASINO",logo:"/newBankrollWebsite/images/WSOP.png",legalStates:"MI, NJ, PA",promoDetails:"Special welcome bonus for new players",restrictions:"New players only. Must be 21+",url:"https://www.wsop.com/casino/"},{id:"wsop-poker",name:"WSOP Poker (21+)",category:"POKER",logo:"/newBankrollWebsite/images/WSOP.png",legalStates:"MI, NJ, PA",promoDetails:"Special poker welcome package",restrictions:"New players only. Must be 21+",url:"https://www.wsop.com/poker/"}],o=c=>{Df.logPlatformView(c.id,c.name,c.category),r(c)},l=t==="ALL"?i:i.filter(c=>c.category===t);return u.jsxs("div",{className:"min-h-screen p-6 bg-gray-900",children:[u.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:s.map(c=>u.jsx("button",{onClick:()=>e(c.id),className:`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${t===c.id?"bg-yellow-400 text-gray-900":"bg-purple-900/30 text-white hover:bg-purple-900/50"}
            `,children:c.label},c.id))}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:l.map(c=>u.jsx(Ae,{className:`hover:shadow-lg transition-all duration-200 cursor-pointer border-gray-700
              ${c.id==="myprize"?"bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500":"bg-gray-800"}`,onClick:()=>o(c),children:u.jsxs(Ve,{className:"p-6 flex flex-col items-center justify-center min-h-[200px]",children:[u.jsx("div",{className:`w-24 h-24 mb-4 relative ${c.id==="myprize"?"bg-yellow-300/20 rounded-xl p-2":""}`,children:u.jsx("img",{src:c.logo,alt:c.name,className:"w-full h-full object-contain rounded-lg",onError:d=>{const f=d.currentTarget.parentNode;if(f){const m=document.createElement("div");m.className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center",m.innerHTML=`<span class="text-xl font-bold text-gray-400">${c.name.charAt(0)}</span>`,f.replaceChild(m,d.currentTarget)}}})}),u.jsx("h3",{className:`text-center font-medium ${c.id==="myprize"?"text-gray-900":"text-white"}`,children:c.name})]})},c.id))}),n&&u.jsx(gM,{platform:n,onClose:()=>r(null)}),u.jsx("div",{className:"mt-8 text-center text-sm text-gray-300",children:"Responsible Gaming: Please gamble responsibly. If you or someone you know has a gambling problem and wants help, call 1-800-522-4700"})]})},vM=()=>{const{currentUser:t,logout:e,updateProfileImage:n}=vt(),[r,s]=P.useState(!1),[i,o]=P.useState(!1),[l,c]=P.useState(!1),[d,f]=P.useState([]),[m,g]=P.useState(!0),[v,S]=P.useState(!1),[A,N]=P.useState(null),[w,x]=P.useState(Date.now()),b=P.useRef(null),D=lr();P.useEffect(()=>{if(t&&!t.profileImage){let E;do E=Math.floor(Math.random()*30)+1;while(E===26);let T;E===1||E===30?T=".jpeg":E===4||E===16?T=".jpg":T=".png";const C=`/newBankrollWebsite/public/images/profile_${E}${T}`;n(t.id,C)}},[t]),P.useEffect(()=>{(async()=>{if(t)try{console.log("Fetching groups for user:",t.id);const T=await Yt.getUserGroups(t.id);console.log("Fetched groups:",T),f(T)}catch(T){console.error("Error fetching groups:",T)}finally{g(!1)}})()},[t]);const M=()=>{D("/create-group")},F=E=>{console.log("Navigating to group:",E),D(`/group/${E}`)},I=async E=>{const T=E.target.files[0];if(T){N(null),S(!0);try{if(!T.type.startsWith("image/"))throw new Error("Please upload an image file");if(T.size>5*1024*1024)throw new Error("Please upload an image smaller than 5MB");if(!(t!=null&&t.id))throw new Error("User ID is not available");await n(t.id,T),console.log("Profile image updated successfully"),x(Date.now()),N(null)}catch(C){console.error("Error uploading profile image:",C),N(C.message||"Failed to upload image. Please try again.")}finally{S(!1),b.current&&(b.current.value="")}}},_=()=>u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsxs("div",{className:"bg-gray-900 rounded-2xl p-8 max-w-md mx-4 relative border border-gray-700",children:[u.jsx("button",{onClick:()=>c(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:u.jsx(Ds,{className:"h-6 w-6"})}),u.jsxs("div",{className:"text-center space-y-4",children:[u.jsx("h3",{className:"text-2xl font-bold text-white",children:"Coming Soon!"}),u.jsx("p",{className:"text-gray-300",children:"Direct transfers between users will be available soon! Stay tuned for this exciting feature."}),u.jsx("button",{onClick:()=>c(!1),className:"px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-4",children:"Got it!"})]})]})});return u.jsxs("div",{className:"max-w-2xl mx-auto p-6 space-y-6 relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-8",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"w-16 h-16 rounded-full overflow-hidden bg-gray-700",children:t!=null&&t.profileImage?u.jsx("img",{src:`${t.profileImage}?t=${w}`,alt:"Profile",className:"w-full h-full object-cover",onError:E=>{console.error("Error loading profile image:",E),E.target.src="",E.target.className="hidden"}},w):u.jsx("div",{className:"w-full h-full bg-gray-600 flex items-center justify-center",children:u.jsx(Bu,{className:"w-8 h-8 text-gray-400"})})}),u.jsx("button",{onClick:()=>{var E;return(E=b.current)==null?void 0:E.click()},className:"absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",disabled:v,children:v?u.jsx(d4,{className:"w-4 h-4 text-white animate-spin"}):u.jsx(o4,{className:"w-4 h-4 text-white"})}),u.jsx("input",{type:"file",ref:b,onChange:I,accept:"image/*",className:"hidden",disabled:v})]}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl font-bold",children:"Profile"}),A&&u.jsx("p",{className:"text-red-500 text-sm mt-1",children:A})]})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("span",{className:"text-gray-400",children:"Rewards and Challenges"}),u.jsxs("button",{className:"relative",children:[u.jsx(RT,{className:"h-6 w-6 text-gray-400"}),u.jsx("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:"3"})]}),u.jsx("button",{onClick:()=>s(!r),className:"relative",children:u.jsx(MT,{className:"h-6 w-6 text-gray-400"})})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsx(Ae,{className:"bg-gray-900 border-gray-800",children:u.jsxs(Ve,{className:"p-6",children:[u.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Groups"}),u.jsxs("div",{className:"space-y-3",children:[m?u.jsx("p",{className:"text-gray-400",children:"Loading groups..."}):d.length>0?u.jsx("div",{className:"space-y-2",children:d.map(E=>u.jsxs("div",{className:"flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer",onClick:()=>F(E.id),children:[u.jsx("span",{className:"text-2xl",children:E.emoji}),u.jsx("span",{className:"text-white",children:E.name})]},E.id))}):u.jsx("p",{className:"text-gray-400",children:"No groups yet"}),u.jsxs("button",{onClick:M,className:"w-full p-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2",children:[u.jsx(g4,{className:"w-4 h-4"}),u.jsx("span",{children:"Create Group"})]})]})]})}),u.jsx(Ae,{className:"bg-gray-900 border-gray-800",children:u.jsxs(Ve,{className:"p-6",children:[u.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Friends"}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("p",{className:"text-gray-400",children:"No friends yet"}),u.jsx("button",{className:"w-full p-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors",children:"Add Friends"})]})]})})]}),i&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",children:u.jsx("div",{className:"max-w-md w-full mx-4",children:u.jsx(WT,{onClose:()=>o(!1)})})}),l&&u.jsx(_,{})]})},wM=["🏈","⚽️","🏀","⚾️","🎾","🏒","🏂","🎰","🎲","🎮","🏆","💰","🎯","🎪","🎨","🎭","🎪","🎢","🎡","🎪"],_M=()=>{const t=lr(),{currentUser:e}=vt(),[n,r]=P.useState(1),[s,i]=P.useState(!1),[o,l]=P.useState({name:"",emoji:"🏈",members:[]}),[c,d]=P.useState(""),f=()=>{if(n===1&&!o.name.trim()){d("Please enter a group name");return}d(""),r(S=>S+1)},m=()=>{r(S=>S-1),d("")},g=async()=>{try{i(!0),d(""),await Yt.createGroup({name:o.name,emoji:o.emoji,members:[]},e.uid),t("/profile")}catch(S){d("Failed to create group. Please try again."),console.error("Error creating group:",S)}finally{i(!1)}},v=()=>{switch(n){case 1:return u.jsxs("div",{className:"space-y-4",children:[u.jsx("h2",{className:"text-xl font-bold text-white",children:"Name your group"}),u.jsx("input",{type:"text",value:o.name,onChange:S=>l({...o,name:S.target.value}),placeholder:"Enter group name",className:"w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",maxLength:50})]});case 2:return u.jsxs("div",{className:"space-y-4",children:[u.jsx("h2",{className:"text-xl font-bold text-white",children:"Choose an emoji"}),u.jsx("div",{className:"grid grid-cols-5 gap-3",children:wM.map(S=>u.jsx("button",{onClick:()=>l({...o,emoji:S}),className:`text-2xl p-3 rounded-lg ${o.emoji===S?"bg-blue-500 hover:bg-blue-600":"bg-gray-800 hover:bg-gray-700"} transition-colors`,children:S},S))})]});case 3:return u.jsxs("div",{className:"space-y-4",children:[u.jsx("h2",{className:"text-xl font-bold text-white",children:"Add people (Optional)"}),u.jsx("p",{className:"text-gray-400",children:"You can add people to your group later"})]});default:return null}};return u.jsxs("div",{className:"min-h-screen bg-gray-900 flex flex-col",children:[u.jsx("div",{className:"border-b border-gray-800 p-4",children:u.jsxs("div",{className:"max-w-lg mx-auto flex items-center justify-between",children:[u.jsx("button",{onClick:()=>t("/profile"),className:"text-gray-400 hover:text-white transition-colors",children:u.jsx(Ds,{className:"h-6 w-6"})}),u.jsx("h1",{className:"text-lg font-semibold text-white",children:"Create Group"}),u.jsx("div",{className:"w-6"})," "]})}),u.jsx("div",{className:"flex-1 p-4",children:u.jsx("div",{className:"max-w-lg mx-auto",children:u.jsx(Ae,{className:"bg-gray-900 border-gray-800",children:u.jsxs("div",{className:"p-6 space-y-6",children:[u.jsx("div",{className:"flex items-center justify-center space-x-4 mb-8",children:[{icon:u.jsx(qv,{className:"w-5 h-5"}),label:"Name"},{icon:u.jsx(qv,{className:"w-5 h-5"}),label:"Emoji"},{icon:u.jsx(Bu,{className:"w-5 h-5"}),label:"People"}].map((S,A)=>u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:`flex items-center justify-center w-8 h-8 rounded-full ${n>A?"bg-blue-500 text-white":n===A+1?"bg-blue-500/20 text-blue-500":"bg-gray-800 text-gray-400"}`,children:n>A?u.jsx(Pf,{className:"w-5 h-5"}):S.icon}),A<2&&u.jsx("div",{className:`w-12 h-0.5 mx-2 ${n>A+1?"bg-blue-500":"bg-gray-800"}`})]},A))}),v(),c&&u.jsx("p",{className:"text-red-500 text-sm mt-2",children:c}),u.jsxs("div",{className:"flex justify-between mt-8",children:[u.jsxs("button",{onClick:m,className:`flex items-center space-x-2 px-4 py-2 rounded-lg ${n===1?"invisible":"bg-gray-800 text-white hover:bg-gray-700"} transition-colors`,disabled:n===1,children:[u.jsx(PT,{className:"w-5 h-5"}),u.jsx("span",{children:"Back"})]}),n<3?u.jsxs("button",{onClick:f,className:"flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:[u.jsx("span",{children:"Next"}),u.jsx(jT,{className:"w-5 h-5"})]}):u.jsxs("button",{onClick:g,disabled:s,className:"flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50",children:[u.jsx("span",{children:"Create Group"}),u.jsx(Pf,{className:"w-5 h-5"})]})]})]})})})})]})},xM=()=>{const{id:t}=Uk(),e=lr(),{currentUser:n}=vt(),[r,s]=P.useState(null),[i,o]=P.useState(!0),[l,c]=P.useState(!1);P.useEffect(()=>{(async()=>{try{console.log("Fetching group with ID:",t);const v=await Yt.getGroup(t);console.log("Group data received:",v),s(v)}catch(v){console.error("Error fetching group:",v)}finally{o(!1)}})()},[t]);const d=async()=>{if(window.confirm("Are you sure you want to delete this group? This action cannot be undone."))try{await Yt.deleteGroup(t,n.id),e("/profile")}catch(g){console.error("Error deleting group:",g)}},f=async()=>{if(window.confirm("Are you sure you want to leave this group?"))try{await Yt.leaveGroup(t,n.id),e("/profile")}catch(g){console.error("Error leaving group:",g)}};if(i)return u.jsx("div",{className:"fixed inset-0 bg-[#FFD700] flex items-center justify-center",children:u.jsx("div",{className:"text-black text-xl",children:"Loading..."})});if(!r)return u.jsx("div",{className:"fixed inset-0 bg-[#FFD700] flex items-center justify-center",children:u.jsx("div",{className:"text-black text-xl",children:"Group not found"})});const m=r.ownerId===(n==null?void 0:n.id);return u.jsxs("div",{className:"fixed inset-0 bg-[#FFD700] overflow-auto",children:[u.jsxs("div",{className:"sticky top-0 z-10 flex items-center justify-between p-4 bg-[#FFD700] shadow-sm",children:[u.jsx("button",{onClick:()=>e("/profile"),className:"p-2 rounded-full hover:bg-[#FFE55C] text-black",children:u.jsx(PT,{className:"w-6 h-6"})}),u.jsxs("button",{onClick:()=>c(!l),className:"p-2 rounded-full hover:bg-[#FFE55C] text-black relative",children:[u.jsx(MT,{className:"w-6 h-6"}),l&&u.jsx("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 text-left",children:m?u.jsxs("button",{onClick:d,className:"w-full px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center",children:[u.jsx(m4,{className:"w-4 h-4 mr-2"}),"Delete Group"]}):u.jsxs("button",{onClick:f,className:"w-full px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center",children:[u.jsx(LT,{className:"w-4 h-4 mr-2"}),"Leave Group"]})})]})]}),u.jsxs("div",{className:"max-w-2xl mx-auto px-4 pt-6 pb-8 space-y-8",children:[u.jsx("h1",{className:"text-4xl font-bold text-center text-black mb-6",children:r.name}),u.jsx("div",{className:"flex justify-center",children:u.jsx("div",{className:"w-20 h-20 flex items-center justify-center text-4xl bg-[#FFE55C] rounded-full shadow-md",children:r.emoji})}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-5xl font-bold text-black",children:"$0"}),u.jsx("p",{className:"text-gray-700 mt-2",children:"Group Balance"})]}),u.jsxs("button",{className:"w-full py-3 px-4 bg-blue-500 text-white rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors shadow-md",children:[u.jsx($m,{className:"w-5 h-5"}),u.jsx("span",{children:"Add an expense"})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("h2",{className:"text-xl font-semibold text-black",children:"Members"}),r.owner&&u.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-[#FFE55C] rounded-lg shadow-sm",children:[u.jsx("img",{src:r.owner.photoURL||"/images/profile_1.png",alt:r.owner.displayName,className:"w-12 h-12 rounded-full object-cover"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("p",{className:"font-medium text-black",children:r.owner.displayName}),u.jsx("p",{className:"text-sm text-gray-700",children:"Owner"})]})]}),r.members&&r.members.length>0&&u.jsx("div",{className:"grid grid-cols-1 gap-3",children:r.members.filter(g=>g.uid!==r.ownerId).map((g,v)=>u.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-[#FFE55C] rounded-lg shadow-sm",children:[u.jsx("img",{src:g.photoURL||"/images/profile_1.png",alt:g.displayName,className:"w-12 h-12 rounded-full object-cover"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("p",{className:"font-medium text-black",children:g.displayName}),u.jsx("p",{className:"text-sm text-gray-700",children:"Member"})]})]},v))})]}),u.jsx("div",{className:"text-center",children:u.jsx("button",{className:"text-blue-700 font-medium hover:text-blue-800",children:"How we do the math"})}),u.jsx("div",{className:"text-center",children:u.jsx("button",{className:"text-blue-700 font-medium hover:text-blue-800",children:"Group summary"})})]})]})};/**
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
 */const EM="/firebase-messaging-sw.js",bM="/firebase-cloud-messaging-push-scope",GT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",TM="https://fcmregistrations.googleapis.com/v1",HT="google.c.a.c_id",IM="google.c.a.c_l",SM="google.c.a.ts",kM="google.c.a.e";var Hv;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Hv||(Hv={}));/**
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
 */var Ra;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ra||(Ra={}));/**
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
 */function Bn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function NM(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const oh="fcm_token_details_db",AM=5,Kv="fcm_token_object_Store";async function CM(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(oh))return null;let e=null;return(await mu(oh,AM,{upgrade:async(r,s,i,o)=>{var l;if(s<2||!r.objectStoreNames.contains(Kv))return;const c=o.objectStore(Kv),d=await c.index("fcmSenderId").get(t);if(await c.clear(),!!d){if(s===2){const f=d;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Bn(f.vapidKey)}}}else if(s===3){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Bn(f.auth),p256dh:Bn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Bn(f.vapidKey)}}}else if(s===4){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Bn(f.auth),p256dh:Bn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Bn(f.vapidKey)}}}}}})).close(),await Bd(oh),await Bd("fcm_vapid_details_db"),await Bd("undefined"),RM(e)?e:null}function RM(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const PM="firebase-messaging-database",jM=1,Pa="firebase-messaging-store";let ah=null;function KT(){return ah||(ah=mu(PM,jM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pa)}}})),ah}async function DM(t){const e=QT(t),r=await(await KT()).transaction(Pa).objectStore(Pa).get(e);if(r)return r;{const s=await CM(t.appConfig.senderId);if(s)return await qm(t,s),s}}async function qm(t,e){const n=QT(t),s=(await KT()).transaction(Pa,"readwrite");return await s.objectStore(Pa).put(e,n),await s.done,e}function QT({appConfig:t}){return t.appId}/**
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
 */const OM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},mt=new Xr("messaging","Messaging",OM);/**
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
 */async function LM(t,e){const n=await Gm(t),r=YT(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Wm(t.appConfig),s)).json()}catch(o){throw mt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw mt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw mt.create("token-subscribe-no-token");return i.token}async function MM(t,e){const n=await Gm(t),r=YT(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Wm(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw mt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw mt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw mt.create("token-update-no-token");return i.token}async function VM(t,e){const r={method:"DELETE",headers:await Gm(t)};try{const i=await(await fetch(`${Wm(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw mt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw mt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Wm({projectId:t}){return`${TM}/projects/${t}/registrations`}async function Gm({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function YT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==GT&&(s.web.applicationPubKey=r),s}/**
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
 */const FM=7*24*60*60*1e3;async function UM(t){const e=await $M(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Bn(e.getKey("auth")),p256dh:Bn(e.getKey("p256dh"))},r=await DM(t.firebaseDependencies);if(r){if(zM(r.subscriptionOptions,n))return Date.now()>=r.createTime+FM?BM(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await VM(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Qv(t.firebaseDependencies,n)}else return Qv(t.firebaseDependencies,n)}async function BM(t,e){try{const n=await MM(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await qm(t.firebaseDependencies,r),n}catch(n){throw n}}async function Qv(t,e){const r={token:await LM(t,e),createTime:Date.now(),subscriptionOptions:e};return await qm(t,r),r.token}async function $M(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:NM(e)})}function zM(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return qM(e,t),WM(e,t),GM(e,t),e}function qM(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function WM(t,e){e.data&&(t.data=e.data)}function GM(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;l&&(t.fcmOptions.link=l);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function HM(t){return typeof t=="object"&&!!t&&HT in t}/**
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
 */function KM(t){if(!t||!t.options)throw lh("App Configuration Object");if(!t.name)throw lh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw lh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function lh(t){return mt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=KM(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YM(t){try{t.swRegistration=await navigator.serviceWorker.register(EM,{scope:bM}),t.swRegistration.update().catch(()=>{})}catch(e){throw mt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XM(t,e){if(!e&&!t.swRegistration&&await YM(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw mt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JM(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=GT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e){if(!navigator)throw mt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw mt.create("permission-blocked");return await JM(t,e==null?void 0:e.vapidKey),await XM(t,e==null?void 0:e.serviceWorkerRegistration),UM(t)}/**
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
 */async function ZM(t,e,n){const r=eV(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[HT],message_name:n[IM],message_time:n[SM],message_device_time:Math.floor(Date.now()/1e3)})}function eV(t){switch(t){case Ra.NOTIFICATION_CLICKED:return"notification_open";case Ra.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function tV(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ra.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Yv(n)):t.onMessageHandler.next(Yv(n)));const r=n.data;HM(r)&&r[kM]==="1"&&await ZM(t,n.messageType,r)}const Xv="@firebase/messaging",Jv="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV=t=>{const e=new QM(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>tV(e,n)),e},rV=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>XT(e,r)}};function sV(){Lt(new St("messaging",nV,"PUBLIC")),Lt(new St("messaging-internal",rV,"PRIVATE")),Qe(Xv,Jv),Qe(Xv,Jv,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iV(){try{await Vp()}catch{return!1}return typeof window<"u"&&Mp()&&Px()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t,e){if(!navigator)throw mt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function aV(t=Wi()){return iV().then(e=>{if(!e)throw mt.create("unsupported-browser")},e=>{throw mt.create("indexed-db-unsupported")}),Pn(ue(t),"messaging").getImmediate()}async function lV(t,e){return t=ue(t),XT(t,e)}function cV(t,e){return t=ue(t),oV(t,e)}sV();/**
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
 */const uV="type.googleapis.com/google.protobuf.Int64Value",dV="type.googleapis.com/google.protobuf.UInt64Value";function JT(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Of(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Of(e));if(typeof t=="function"||typeof t=="object")return JT(t,e=>Of(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Kc(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case uV:case dV:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Kc(e)):typeof t=="function"||typeof t=="object"?JT(t,e=>Kc(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="functions";/**
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
 */const Zv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ti extends Ht{constructor(e,n,r){super(`${Hm}/${e}`,n||""),this.details=r}}function hV(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function fV(t,e){let n=hV(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!Zv[o])return new Ti("internal","internal");n=Zv[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=Kc(s))}}catch{}return n==="ok"?null:new Ti(n,r,s)}/**
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
 */class pV{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const Lf="us-central1";function mV(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Ti("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class gV{constructor(e,n,r,s,i=Lf,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new pV(n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Lf}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function yV(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function vV(t,e,n){return r=>_V(t,e,r,{})}async function wV(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function _V(t,e,n,r){const s=t._url(e);return xV(t,s,n,r)}async function xV(t,e,n,r){n=Of(n);const s={data:n},i={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const l=r.timeout||7e4,c=mV(l),d=await Promise.race([wV(e,s,i,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!d)throw new Ti("cancelled","Firebase Functions instance was deleted.");const f=fV(d.status,d.json);if(f)throw f;if(!d.json)throw new Ti("internal","Response is not valid JSON object.");let m=d.json.data;if(typeof m>"u"&&(m=d.json.result),typeof m>"u")throw new Ti("internal","Response is missing data field.");return{data:Kc(m)}}const ew="@firebase/functions",tw="0.11.8";/**
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
 */const EV="auth-internal",bV="app-check-internal",TV="messaging-internal";function IV(t,e){const n=(r,{instanceIdentifier:s})=>{const i=r.getProvider("app").getImmediate(),o=r.getProvider(EV),l=r.getProvider(TV),c=r.getProvider(bV);return new gV(i,o,l,c,s,t)};Lt(new St(Hm,n,"PUBLIC").setMultipleInstances(!0)),Qe(ew,tw,e),Qe(ew,tw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SV(t=Wi(),e=Lf){const r=Pn(ue(t),Hm).getImmediate({identifier:e}),s=Lp("functions");return s&&kV(r,...s),r}function kV(t,e,n){yV(ue(t),e,n)}function NV(t,e,n){return vV(ue(t),e)}IV(fetch.bind(self));class AV{constructor(){this.messaging=aV(th),this.db=YE(th),this.functions=SV(th)}async initializePushNotifications(){try{return await Notification.requestPermission()==="granted"?await lV(this.messaging,{vapidKey:void 0}):null}catch(e){return console.error("Error initializing push notifications:",e),null}}async saveNotificationPreferences(e,n){try{await lb(Rt(this.db,"userPreferences",e),{notifications:{inApp:n.inApp??!0,sms:n.sms??!1,email:n.email??!1,pushToken:n.pushToken}},{merge:!0})}catch(r){throw console.error("Error saving notification preferences:",r),r}}async getNotificationPreferences(e){try{const n=Rt(this.db,"userPreferences",e),r=await Ns(n);return r.exists()?r.data().notifications:{inApp:!0,sms:!1,email:!1,pushToken:null}}catch(n){throw console.error("Error getting notification preferences:",n),n}}async sendNotification(e,n){try{await NV(this.functions,"sendNotification")({userId:e,notification:n})}catch(r){throw console.error("Error sending notification:",r),r}}async storeInAppNotification(e,n){try{await cb(Vi(this.db,"users",e,"notifications"),{...n,timestamp:new Date,read:!1})}catch(r){throw console.error("Error storing in-app notification:",r),r}}onPushNotification(e){return cV(this.messaging,n=>{e(n)})}}const di=new AV,CV=()=>{const t=lr(),[e,n]=P.useState({inApp:!0,email:!1}),[r,s]=P.useState(!0),[i,o]=P.useState(null);P.useEffect(()=>{(async()=>{try{if(!Ze.currentUser){t("/login");return}const d=await di.getNotificationPreferences(Ze.currentUser.uid);n(d),s(!1)}catch{o("Failed to load notification preferences"),s(!1)}})()},[t]);const l=async c=>{try{const d={...e,[c]:!e[c]};if(n(d),await di.saveNotificationPreferences(Ze.currentUser.uid,d),c==="inApp"&&d.inApp){const f=await di.initializePushNotifications();f&&await di.saveNotificationPreferences(Ze.currentUser.uid,{...d,pushToken:f})}}catch{o("Failed to update preferences")}};return r?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:"Loading..."}):u.jsxs("div",{className:"max-w-2xl mx-auto p-6",children:[u.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Notification Settings"}),i&&u.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:i}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between p-4 bg-white rounded-lg shadow",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:"In-App Notifications"}),u.jsx("p",{className:"text-sm text-gray-600",children:"Receive notifications within the app and browser push notifications"})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:e.inApp,onChange:()=>l("inApp")}),u.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]}),u.jsxs("div",{className:"flex items-center justify-between p-4 bg-white rounded-lg shadow",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold",children:"Email Notifications"}),u.jsx("p",{className:"text-sm text-gray-600",children:"Receive important updates via email"})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",className:"sr-only peer",checked:e.email,onChange:()=>l("email")}),u.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]}),u.jsxs("div",{className:"mt-8 p-4 bg-gray-50 rounded-lg",children:[u.jsx("h4",{className:"font-semibold mb-2",children:"About Notifications"}),u.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-600",children:[u.jsx("li",{children:"In-app notifications appear in your notification center and as browser push notifications"}),u.jsx("li",{children:"Email notifications are sent to your registered email address for important updates"}),u.jsx("li",{children:"You can change these settings at any time"})]})]})]})]})},ZT=or.forwardRef(({className:t,...e},n)=>u.jsx("table",{ref:n,className:`w-full caption-bottom text-sm ${t}`,...e}));ZT.displayName="Table";const e1=or.forwardRef(({className:t,...e},n)=>u.jsx("thead",{ref:n,className:`border-b border-purple-500/20 ${t}`,...e}));e1.displayName="TableHeader";const t1=or.forwardRef(({className:t,...e},n)=>u.jsx("tbody",{ref:n,className:`${t}`,...e}));t1.displayName="TableBody";const Mf=or.forwardRef(({className:t,...e},n)=>u.jsx("tr",{ref:n,className:`border-b border-purple-500/20 transition-colors hover:bg-gray-800/50 ${t}`,...e}));Mf.displayName="TableRow";const ls=or.forwardRef(({className:t,...e},n)=>u.jsx("th",{ref:n,className:`h-12 px-4 text-left align-middle font-medium text-white ${t}`,...e}));ls.displayName="TableHead";const cs=or.forwardRef(({className:t,...e},n)=>u.jsx("td",{ref:n,className:`p-4 align-middle text-white ${t}`,...e}));cs.displayName="TableCell";const n1=or.forwardRef(({className:t,type:e,...n},r)=>u.jsx("input",{type:e,className:`flex h-10 w-full rounded-md border border-purple-500/20 bg-gray-900/40 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${t}`,ref:r,...n}));n1.displayName="Input";const RV=()=>{const[t,e]=P.useState([]),[n,r]=P.useState(!0),[s,i]=P.useState(""),[o,l]=P.useState(null);P.useEffect(()=>{(async()=>{try{const f=Vi(me,"users"),m=Sa(f,$P("createdAt","desc")),v=(await ka(m)).docs.map(S=>{var A;return{id:S.id,...S.data(),createdAt:(A=S.data().createdAt)==null?void 0:A.toDate()}});e(v)}catch(f){l("Failed to fetch users"),console.error("Error fetching users:",f)}finally{r(!1)}})()},[]);const c=t.filter(d=>{var m,g,v,S;const f=s.toLowerCase();return((m=d.email)==null?void 0:m.toLowerCase().includes(f))||((g=d.username)==null?void 0:g.toLowerCase().includes(f))||((v=d.firstName)==null?void 0:v.toLowerCase().includes(f))||((S=d.lastName)==null?void 0:S.toLowerCase().includes(f))});return o?u.jsx("div",{className:"p-4 bg-red-500/10 text-red-500 rounded-lg border border-red-500/20",children:o}):u.jsxs(Ae,{className:"bg-gray-900/40 border-purple-500/20",children:[u.jsx(_n,{className:"space-y-1",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs(xn,{className:"text-2xl font-bold flex items-center gap-2",children:[u.jsx(Bu,{className:"h-6 w-6"}),"User Management"]}),u.jsxs("div",{className:"relative w-64",children:[u.jsx(p4,{className:"absolute left-3 top-2.5 h-4 w-4 text-gray-400"}),u.jsx(n1,{placeholder:"Search users...",value:s,onChange:d=>i(d.target.value),className:"pl-9 bg-gray-800/50 border-purple-500/20"})]})]})}),u.jsx(Ve,{children:n?u.jsx("div",{className:"text-center py-4",children:"Loading users..."}):u.jsx("div",{className:"overflow-x-auto",children:u.jsxs(ZT,{children:[u.jsx(e1,{children:u.jsxs(Mf,{children:[u.jsx(ls,{children:"Username"}),u.jsx(ls,{children:"Email"}),u.jsx(ls,{children:"Name"}),u.jsx(ls,{children:"Phone"}),u.jsx(ls,{children:"Created"}),u.jsx(ls,{children:"Dwolla Status"})]})}),u.jsx(t1,{children:c.map(d=>{var f;return u.jsxs(Mf,{children:[u.jsx(cs,{className:"font-medium",children:d.username}),u.jsx(cs,{children:d.email}),u.jsx(cs,{children:`${d.firstName||""} ${d.lastName||""}`}),u.jsx(cs,{children:d.phoneNumber}),u.jsx(cs,{children:((f=d.createdAt)==null?void 0:f.toLocaleDateString())||"N/A"}),u.jsx(cs,{children:u.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium
                          ${d.dwollaCustomerId?"bg-green-500/20 text-green-500":"bg-yellow-500/20 text-yellow-500"}`,children:d.dwollaCustomerId?"Verified":"Pending"})})]},d.id)})})]})})})]})},PV="BankrollAdmin2024!",nw="bankroll_admin_auth",jV=({children:t})=>{const{currentUser:e}=vt(),[n,r]=P.useState(!0),[s,i]=P.useState(""),[o,l]=P.useState(""),[c,d]=P.useState(()=>localStorage.getItem(nw)==="true");if(!e)return u.jsx(qo,{to:"/",replace:!0});const f=m=>{m.preventDefault(),s===PV?(d(!0),r(!1),localStorage.setItem(nw,"true")):l("Incorrect password")};return c?t:u.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:u.jsxs(Ae,{className:"w-full max-w-md bg-gray-800 p-6",children:[u.jsx("h2",{className:"text-2xl font-bold text-white mb-6",children:"Admin Authentication"}),u.jsxs("form",{onSubmit:f,className:"space-y-4",children:[o&&u.jsx("div",{className:"bg-red-500/10 border border-red-500/20 text-red-500 rounded p-3",children:o}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-300 mb-2",children:"Enter Admin Password"}),u.jsx("input",{type:"password",id:"password",value:s,onChange:m=>i(m.target.value),className:"w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter password"})]}),u.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800",children:"Access Admin Panel"})]})]})})},DV=({children:t})=>{const{currentUser:e}=vt();return e?t:u.jsx(qo,{to:"/",replace:!0})};function OV(){const{currentUser:t}=vt();return P.useEffect(()=>{const e=Ze.onAuthStateChanged(async n=>{if(n)try{const r=await di.initializePushNotifications();r&&await di.saveNotificationPreferences(n.uid,{pushToken:r})}catch(r){console.error("Error initializing push notifications:",r)}});return()=>e()},[]),u.jsx(lN,{children:u.jsxs(tN,{children:[u.jsx(At,{path:"/",element:t?u.jsx(qo,{to:"/spend",replace:!0}):u.jsx(tM,{})}),u.jsx(At,{path:"/signup",element:t?u.jsx(qo,{to:"/spend",replace:!0}):u.jsx(nM,{})}),u.jsx(At,{path:"/login",element:t?u.jsx(qo,{to:"/spend",replace:!0}):u.jsx(rM,{})}),u.jsxs(At,{element:u.jsx(DV,{children:u.jsx(w4,{})}),children:[u.jsx(At,{path:"/banking",element:u.jsx(uM,{})}),u.jsx(At,{path:"/leagues",element:u.jsx(fM,{})}),u.jsx(At,{path:"/send",element:u.jsx(pM,{})}),u.jsx(At,{path:"/spend",element:u.jsx(yM,{})}),u.jsx(At,{path:"/profile",element:u.jsx(vM,{})}),u.jsx(At,{path:"/create-group",element:u.jsx(_M,{})}),u.jsx(At,{path:"/group/:id",element:u.jsx(xM,{})}),u.jsx(At,{path:"/notifications",element:u.jsx(CV,{})}),u.jsx(At,{path:"/admin",element:u.jsx(jV,{children:u.jsx(RV,{})})})]})]})})}function LV(){return u.jsx(HL,{children:u.jsx(KL,{children:u.jsx(n4,{children:u.jsx(OV,{})})})})}ch.createRoot(document.getElementById("root")).render(u.jsx(or.StrictMode,{children:u.jsx(LV,{})}));
//# sourceMappingURL=main-CeEZzJ50.js.map
