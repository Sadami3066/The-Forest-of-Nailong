(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const re={},ds=[],Rn=()=>{},ef=()=>!1,Ma=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Sa=n=>n.startsWith("onUpdate:"),Me=Object.assign,Pl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Qh=Object.prototype.hasOwnProperty,Qt=(n,t)=>Qh.call(n,t),It=Array.isArray,ps=n=>hr(n)==="[object Map]",nf=n=>hr(n)==="[object Set]",gc=n=>hr(n)==="[object Date]",Ht=n=>typeof n=="function",fe=n=>typeof n=="string",Cn=n=>typeof n=="symbol",te=n=>n!==null&&typeof n=="object",sf=n=>(te(n)||Ht(n))&&Ht(n.then)&&Ht(n.catch),rf=Object.prototype.toString,hr=n=>rf.call(n),td=n=>hr(n).slice(8,-1),af=n=>hr(n)==="[object Object]",Ll=n=>fe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},ed=/-\w/g,dn=ya(n=>n.replace(ed,t=>t.slice(1).toUpperCase())),nd=/\B([A-Z])/g,Vi=ya(n=>n.replace(nd,"-$1").toLowerCase()),of=ya(n=>n.charAt(0).toUpperCase()+n.slice(1)),za=ya(n=>n?`on${of(n)}`:""),An=(n,t)=>!Object.is(n,t),Ha=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},lf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},id=n=>{const t=parseFloat(n);return isNaN(t)?n:t},sd=n=>{const t=fe(n)?Number(n):NaN;return isNaN(t)?n:t};let _c;const Ea=()=>_c||(_c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ta(n){if(It(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=fe(i)?ld(i):Ta(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(fe(n)||te(n))return n}const rd=/;(?![^(]*\))/g,ad=/:([^]+)/,od=/\/\*[^]*?\*\//g;function ld(n){const t={};return n.replace(od,"").split(rd).forEach(e=>{if(e){const i=e.split(ad);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ki(n){let t="";if(fe(n))t=n;else if(It(n))for(let e=0;e<n.length;e++){const i=ki(n[e]);i&&(t+=i+" ")}else if(te(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const cd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ud=Cl(cd);function cf(n){return!!n||n===""}function fd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Dl(n[i],t[i]);return e}function Dl(n,t){if(n===t)return!0;let e=gc(n),i=gc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Cn(n),i=Cn(t),e||i)return n===t;if(e=It(n),i=It(t),e||i)return e&&i?fd(n,t):!1;if(e=te(n),i=te(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Dl(n[a],t[a]))return!1}}return String(n)===String(t)}const uf=n=>!!(n&&n.__v_isRef===!0),qn=n=>fe(n)?n:n==null?"":It(n)||te(n)&&(n.toString===rf||!Ht(n.toString))?uf(n)?qn(n.value):JSON.stringify(n,ff,2):String(n),ff=(n,t)=>uf(t)?ff(n,t.value):ps(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ga(i,r)+" =>"]=s,e),{})}:nf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ga(e))}:Cn(t)?Ga(t):te(t)&&!It(t)&&!af(t)?String(t):t,Ga=(n,t="")=>{var e;return Cn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class hd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Se&&(Se.active?(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Se;try{return Se=this,t()}finally{Se=e}}}on(){++this._on===1&&(this.prevScope=Se,Se=this)}off(){if(this._on>0&&--this._on===0){if(Se===this)Se=this.prevScope;else{let t=Se;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dd(){return Se}let oe;const Va=new WeakSet;class hf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&(Se.active?Se.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Va.has(this)&&(Va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vc(this),mf(this);const t=oe,e=pn;oe=this,pn=!0;try{return this.fn()}finally{gf(this),oe=t,pn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Nl(t);this.deps=this.depsTail=void 0,vc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ro(this)&&this.run()}get dirty(){return Ro(this)}}let df=0,Ks,js;function pf(n,t=!1){if(n.flags|=8,t){n.next=js,js=n;return}n.next=Ks,Ks=n}function Il(){df++}function Ul(){if(--df>0)return;if(js){let t=js;for(js=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ks;){let t=Ks;for(Ks=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function mf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function gf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Nl(i),pd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Ro(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(_f(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function _f(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ir)||(n.globalVersion=ir,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ro(n))))return;n.flags|=2;const t=n.dep,e=oe,i=pn;oe=n,pn=!0;try{mf(n);const s=n.fn(n._value);(t.version===0||An(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{oe=e,pn=i,gf(n),n.flags&=-3}}function Nl(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Nl(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function pd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let pn=!0;const vf=[];function jn(){vf.push(pn),pn=!1}function Zn(){const n=vf.pop();pn=n===void 0?!0:n}function vc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=oe;oe=void 0;try{t()}finally{oe=e}}}let ir=0;class md{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!oe||!pn||oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==oe)e=this.activeLink=new md(oe,this),oe.deps?(e.prevDep=oe.depsTail,oe.depsTail.nextDep=e,oe.depsTail=e):oe.deps=oe.depsTail=e,xf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=oe.depsTail,e.nextDep=void 0,oe.depsTail.nextDep=e,oe.depsTail=e,oe.deps===e&&(oe.deps=i)}return e}trigger(t){this.version++,ir++,this.notify(t)}notify(t){Il();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ul()}}}function xf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)xf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Co=new WeakMap,Bi=Symbol(""),Po=Symbol(""),sr=Symbol("");function be(n,t,e){if(pn&&oe){let i=Co.get(n);i||Co.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Fl),s.map=i,s.key=e),s.track()}}function kn(n,t,e,i,s,r){const a=Co.get(n);if(!a){ir++;return}const o=l=>{l&&l.trigger()};if(Il(),t==="clear")a.forEach(o);else{const l=It(n),u=l&&Ll(e);if(l&&e==="length"){const c=Number(i);a.forEach((f,d)=>{(d==="length"||d===sr||!Cn(d)&&d>=c)&&o(f)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),u&&o(a.get(sr)),t){case"add":l?u&&o(a.get("length")):(o(a.get(Bi)),ps(n)&&o(a.get(Po)));break;case"delete":l||(o(a.get(Bi)),ps(n)&&o(a.get(Po)));break;case"set":ps(n)&&o(a.get(Bi));break}}Ul()}function Xi(n){const t=Kt(n);return t===n?t:(be(t,"iterate",sr),en(n)?t:t.map(vn))}function ba(n){return be(n=Kt(n),"iterate",sr),n}function En(n,t){return Jn(n)?Ms(zi(n)?vn(t):t):vn(t)}const gd={__proto__:null,[Symbol.iterator](){return ka(this,Symbol.iterator,n=>En(this,n))},concat(...n){return Xi(this).concat(...n.map(t=>It(t)?Xi(t):t))},entries(){return ka(this,"entries",n=>(n[1]=En(this,n[1]),n))},every(n,t){return In(this,"every",n,t,void 0,arguments)},filter(n,t){return In(this,"filter",n,t,e=>e.map(i=>En(this,i)),arguments)},find(n,t){return In(this,"find",n,t,e=>En(this,e),arguments)},findIndex(n,t){return In(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return In(this,"findLast",n,t,e=>En(this,e),arguments)},findLastIndex(n,t){return In(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return In(this,"forEach",n,t,void 0,arguments)},includes(...n){return Wa(this,"includes",n)},indexOf(...n){return Wa(this,"indexOf",n)},join(n){return Xi(this).join(n)},lastIndexOf(...n){return Wa(this,"lastIndexOf",n)},map(n,t){return In(this,"map",n,t,void 0,arguments)},pop(){return Is(this,"pop")},push(...n){return Is(this,"push",n)},reduce(n,...t){return xc(this,"reduce",n,t)},reduceRight(n,...t){return xc(this,"reduceRight",n,t)},shift(){return Is(this,"shift")},some(n,t){return In(this,"some",n,t,void 0,arguments)},splice(...n){return Is(this,"splice",n)},toReversed(){return Xi(this).toReversed()},toSorted(n){return Xi(this).toSorted(n)},toSpliced(...n){return Xi(this).toSpliced(...n)},unshift(...n){return Is(this,"unshift",n)},values(){return ka(this,"values",n=>En(this,n))}};function ka(n,t,e){const i=ba(n),s=i[t]();return i!==n&&!en(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const _d=Array.prototype;function In(n,t,e,i,s,r){const a=ba(n),o=a!==n&&!en(n),l=a[t];if(l!==_d[t]){const f=l.apply(n,r);return o?vn(f):f}let u=e;a!==n&&(o?u=function(f,d){return e.call(this,En(n,f),d,n)}:e.length>2&&(u=function(f,d){return e.call(this,f,d,n)}));const c=l.call(a,u,i);return o&&s?s(c):c}function xc(n,t,e,i){const s=ba(n),r=s!==n&&!en(n);let a=e,o=!1;s!==n&&(r?(o=i.length===0,a=function(u,c,f){return o&&(o=!1,u=En(n,u)),e.call(this,u,En(n,c),f,n)}):e.length>3&&(a=function(u,c,f){return e.call(this,u,c,f,n)}));const l=s[t](a,...i);return o?En(n,l):l}function Wa(n,t,e){const i=Kt(n);be(i,"iterate",sr);const s=i[t](...e);return(s===-1||s===!1)&&Hl(e[0])?(e[0]=Kt(e[0]),i[t](...e)):s}function Is(n,t,e=[]){jn(),Il();const i=Kt(n)[t].apply(n,e);return Ul(),Zn(),i}const vd=Cl("__proto__,__v_isRef,__isVue"),Mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cn));function xd(n){Cn(n)||(n=String(n));const t=Kt(this);return be(t,"has",n),t.hasOwnProperty(n)}class Sf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Cd:bf:r?Tf:Ef).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=It(t);if(!s){let l;if(a&&(l=gd[e]))return l;if(e==="hasOwnProperty")return xd}const o=Reflect.get(t,e,Ae(t)?t:i);if((Cn(e)?Mf.has(e):vd(e))||(s||be(t,"get",e),r))return o;if(Ae(o)){const l=a&&Ll(e)?o:o.value;return s&&te(l)?Do(l):l}return te(o)?s?Do(o):Bl(o):o}}class yf extends Sf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const a=It(t)&&Ll(e);if(!this._isShallow){const u=Jn(r);if(!en(i)&&!Jn(i)&&(r=Kt(r),i=Kt(i)),!a&&Ae(r)&&!Ae(i))return u||(r.value=i),!0}const o=a?Number(e)<t.length:Qt(t,e),l=Reflect.set(t,e,i,Ae(t)?t:s);return t===Kt(s)&&(o?An(i,r)&&kn(t,"set",e,i):kn(t,"add",e,i)),l}deleteProperty(t,e){const i=Qt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&kn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Cn(e)||!Mf.has(e))&&be(t,"has",e),i}ownKeys(t){return be(t,"iterate",It(t)?"length":Bi),Reflect.ownKeys(t)}}class Md extends Sf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Sd=new yf,yd=new Md,Ed=new yf(!0);const Lo=n=>n,yr=n=>Reflect.getPrototypeOf(n);function Td(n,t,e){return function(...i){const s=this.__v_raw,r=Kt(s),a=ps(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=s[n](...i),c=e?Lo:t?Ms:vn;return!t&&be(r,"iterate",l?Po:Bi),Me(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:o?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function Er(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function bd(n,t){const e={get(s){const r=this.__v_raw,a=Kt(r),o=Kt(s);n||(An(s,o)&&be(a,"get",s),be(a,"get",o));const{has:l}=yr(a),u=t?Lo:n?Ms:vn;if(l.call(a,s))return u(r.get(s));if(l.call(a,o))return u(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&be(Kt(s),"iterate",Bi),s.size},has(s){const r=this.__v_raw,a=Kt(r),o=Kt(s);return n||(An(s,o)&&be(a,"has",s),be(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=Kt(o),u=t?Lo:n?Ms:vn;return!n&&be(l,"iterate",Bi),o.forEach((c,f)=>s.call(r,u(c),u(f),a))}};return Me(e,n?{add:Er("add"),set:Er("set"),delete:Er("delete"),clear:Er("clear")}:{add(s){const r=Kt(this),a=yr(r),o=Kt(s),l=!t&&!en(s)&&!Jn(s)?o:s;return a.has.call(r,l)||An(s,l)&&a.has.call(r,s)||An(o,l)&&a.has.call(r,o)||(r.add(l),kn(r,"add",l,l)),this},set(s,r){!t&&!en(r)&&!Jn(r)&&(r=Kt(r));const a=Kt(this),{has:o,get:l}=yr(a);let u=o.call(a,s);u||(s=Kt(s),u=o.call(a,s));const c=l.call(a,s);return a.set(s,r),u?An(r,c)&&kn(a,"set",s,r):kn(a,"add",s,r),this},delete(s){const r=Kt(this),{has:a,get:o}=yr(r);let l=a.call(r,s);l||(s=Kt(s),l=a.call(r,s)),o&&o.call(r,s);const u=r.delete(s);return l&&kn(r,"delete",s,void 0),u},clear(){const s=Kt(this),r=s.size!==0,a=s.clear();return r&&kn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Td(s,n,t)}),e}function Ol(n,t){const e=bd(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Qt(e,s)&&s in i?e:i,s,r)}const Ad={get:Ol(!1,!1)},wd={get:Ol(!1,!0)},Rd={get:Ol(!0,!1)};const Ef=new WeakMap,Tf=new WeakMap,bf=new WeakMap,Cd=new WeakMap;function Pd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bl(n){return Jn(n)?n:zl(n,!1,Sd,Ad,Ef)}function Ld(n){return zl(n,!1,Ed,wd,Tf)}function Do(n){return zl(n,!0,yd,Rd,bf)}function zl(n,t,e,i,s){if(!te(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=Pd(td(n));if(a===0)return n;const o=new Proxy(n,a===2?i:e);return s.set(n,o),o}function zi(n){return Jn(n)?zi(n.__v_raw):!!(n&&n.__v_isReactive)}function Jn(n){return!!(n&&n.__v_isReadonly)}function en(n){return!!(n&&n.__v_isShallow)}function Hl(n){return n?!!n.__v_raw:!1}function Kt(n){const t=n&&n.__v_raw;return t?Kt(t):n}function Dd(n){return!Qt(n,"__v_skip")&&Object.isExtensible(n)&&lf(n,"__v_skip",!0),n}const vn=n=>te(n)?Bl(n):n,Ms=n=>te(n)?Do(n):n;function Ae(n){return n?n.__v_isRef===!0:!1}function fs(n){return Id(n,!1)}function Id(n,t){return Ae(n)?n:new Ud(n,t)}class Ud{constructor(t,e){this.dep=new Fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Kt(t),this._value=e?t:vn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||en(t)||Jn(t);t=i?t:Kt(t),An(t,e)&&(this._rawValue=t,this._value=i?t:vn(t),this.dep.trigger())}}function Af(n){return Ae(n)?n.value:n}const Nd={get:(n,t,e)=>t==="__v_raw"?n:Af(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ae(s)&&!Ae(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function wf(n){return zi(n)?n:new Proxy(n,Nd)}class Fd{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ir-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return pf(this,!0),!0}get value(){const t=this.dep.track();return _f(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Od(n,t,e=!1){let i,s;return Ht(n)?i=n:(i=n.get,s=n.set),new Fd(i,s,e)}const Tr={},ra=new WeakMap;let Pi;function Bd(n,t=!1,e=Pi){if(e){let i=ra.get(e);i||ra.set(e,i=[]),i.push(n)}}function zd(n,t,e=re){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=e,u=S=>s?S:en(S)||s===!1||s===0?Wn(S,1):Wn(S);let c,f,d,p,_=!1,M=!1;if(Ae(n)?(f=()=>n.value,_=en(n)):zi(n)?(f=()=>u(n),_=!0):It(n)?(M=!0,_=n.some(S=>zi(S)||en(S)),f=()=>n.map(S=>{if(Ae(S))return S.value;if(zi(S))return u(S);if(Ht(S))return l?l(S,2):S()})):Ht(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){jn();try{d()}finally{Zn()}}const S=Pi;Pi=c;try{return l?l(n,3,[p]):n(p)}finally{Pi=S}}:f=Rn,t&&s){const S=f,F=s===!0?1/0:s;f=()=>Wn(S(),F)}const m=dd(),h=()=>{c.stop(),m&&m.active&&Pl(m.effects,c)};if(r&&t){const S=t;t=(...F)=>{S(...F),h()}}let A=M?new Array(n.length).fill(Tr):Tr;const b=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const F=c.run();if(s||_||(M?F.some((L,C)=>An(L,A[C])):An(F,A))){d&&d();const L=Pi;Pi=c;try{const C=[F,A===Tr?void 0:M&&A[0]===Tr?[]:A,p];A=F,l?l(t,3,C):t(...C)}finally{Pi=L}}}else c.run()};return o&&o(b),c=new hf(f),c.scheduler=a?()=>a(b,!1):b,p=S=>Bd(S,!1,c),d=c.onStop=()=>{const S=ra.get(c);if(S){if(l)l(S,4);else for(const F of S)F();ra.delete(c)}},t?i?b(!0):A=c.run():a?a(b.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function Wn(n,t=1/0,e){if(t<=0||!te(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ae(n))Wn(n.value,t,e);else if(It(n))for(let i=0;i<n.length;i++)Wn(n[i],t,e);else if(nf(n)||ps(n))n.forEach(i=>{Wn(i,t,e)});else if(af(n)){for(const i in n)Wn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dr(n,t,e,i){try{return i?n(...i):n()}catch(s){Aa(s,t,e)}}function nn(n,t,e,i){if(Ht(n)){const s=dr(n,t,e,i);return s&&sf(s)&&s.catch(r=>{Aa(r,t,e)}),s}if(It(n)){const s=[];for(let r=0;r<n.length;r++)s.push(nn(n[r],t,e,i));return s}}function Aa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||re;if(t){let o=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(r){jn(),dr(r,null,10,[n,l,u]),Zn();return}}Hd(n,e,s,i,a)}function Hd(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Le=[];let yn=-1;const ms=[];let ui=null,us=0;const Rf=Promise.resolve();let aa=null;function Gd(n){const t=aa||Rf;return n?t.then(this?n.bind(this):n):t}function Vd(n){let t=yn+1,e=Le.length;for(;t<e;){const i=t+e>>>1,s=Le[i],r=rr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Gl(n){if(!(n.flags&1)){const t=rr(n),e=Le[Le.length-1];!e||!(n.flags&2)&&t>=rr(e)?Le.push(n):Le.splice(Vd(t),0,n),n.flags|=1,Cf()}}function Cf(){aa||(aa=Rf.then(Lf))}function kd(n){It(n)?ms.push(...n):ui&&n.id===-1?ui.splice(us+1,0,n):n.flags&1||(ms.push(n),n.flags|=1),Cf()}function Mc(n,t,e=yn+1){for(;e<Le.length;e++){const i=Le[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Le.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Pf(n){if(ms.length){const t=[...new Set(ms)].sort((e,i)=>rr(e)-rr(i));if(ms.length=0,ui){ui.push(...t);return}for(ui=t,us=0;us<ui.length;us++){const e=ui[us];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ui=null,us=0}}const rr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Lf(n){try{for(yn=0;yn<Le.length;yn++){const t=Le[yn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),dr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;yn<Le.length;yn++){const t=Le[yn];t&&(t.flags&=-2)}yn=-1,Le.length=0,Pf(),aa=null,(Le.length||ms.length)&&Lf()}}let tn=null,Df=null;function oa(n){const t=tn;return tn=n,Df=n&&n.type.__scopeId||null,t}function If(n,t=tn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ua(-1);const r=oa(t);let a;try{a=n(...s)}finally{oa(r),i._d&&ua(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Sc(n,t){if(tn===null)return n;const e=Da(tn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,o,l=re]=t[s];r&&(Ht(r)&&(r={mounted:r,updated:r}),r.deep&&Wn(a),i.push({dir:r,instance:e,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Mi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(jn(),nn(l,e,8,[n.el,o,n,t]),Zn())}}function Wd(n,t){if(Ne){let e=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===e&&(e=Ne.provides=Object.create(i)),e[n]=t}}function jr(n,t,e=!1){const i=fh();if(i||gs){let s=gs?gs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Ht(t)?t.call(i&&i.proxy):t}}const Xd=Symbol.for("v-scx"),Yd=()=>jr(Xd);function Xa(n,t,e){return Uf(n,t,e)}function Uf(n,t,e=re){const{immediate:i,deep:s,flush:r,once:a}=e,o=Me({},e),l=t&&i||!t&&r!=="post";let u;if(lr){if(r==="sync"){const p=Yd();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Rn,p.resume=Rn,p.pause=Rn,p}}const c=Ne;o.call=(p,_,M)=>nn(p,c,_,M);let f=!1;r==="post"?o.scheduler=p=>{Be(p,c&&c.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():Gl(p)}),o.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=zd(n,t,o);return lr&&(u?u.push(d):l&&d()),d}function qd(n,t,e){const i=this.proxy,s=fe(n)?n.includes(".")?Nf(i,n):()=>i[n]:n.bind(i,i);let r;Ht(t)?r=t:(r=t.handler,e=t);const a=pr(this),o=Uf(s,r.bind(i),e);return a(),o}function Nf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const $d=Symbol("_vte"),Ff=n=>n.__isTeleport,Ze=Symbol("_leaveCb"),Us=Symbol("_enterCb");function Kd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vl(()=>{n.isMounted=!0}),Wf(()=>{n.isUnmounting=!0}),n}const Ke=[Function,Array],Of={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},Bf=n=>{const t=n.subTree;return t.component?Bf(t.component):t},jd={name:"BaseTransition",props:Of,setup(n,{slots:t}){const e=fh(),i=Kd();return()=>{const s=t.default&&Gf(t.default(),!0),r=s&&s.length?zf(s):e.subTree?Ss():void 0;if(!r)return;const a=Kt(n),{mode:o}=a;if(i.isLeaving)return Ya(r);const l=yc(r);if(!l)return Ya(r);let u=Io(l,a,i,e,f=>u=f);l.type!==Ue&&ar(l,u);let c=e.subTree&&yc(e.subTree);if(c&&c.type!==Ue&&!Ii(c,l)&&Bf(e).type!==Ue){let f=Io(c,a,i,e);if(ar(c,f),o==="out-in"&&l.type!==Ue)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},Ya(r);o==="in-out"&&l.type!==Ue?f.delayLeave=(d,p,_)=>{const M=Hf(i,c);M[String(c.key)]=c,d[Ze]=()=>{p(),d[Ze]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function zf(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ue){t=e;break}}return t}const Zd=jd;function Hf(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Io(n,t,e,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:_,onLeaveCancelled:M,onBeforeAppear:m,onAppear:h,onAfterAppear:A,onAppearCancelled:b}=t,S=String(n.key),F=Hf(e,n),L=(E,v)=>{E&&nn(E,i,9,v)},C=(E,v)=>{const R=v[1];L(E,v),It(E)?E.every(I=>I.length<=1)&&R():E.length<=1&&R()},U={mode:a,persisted:o,beforeEnter(E){let v=l;if(!e.isMounted)if(r)v=m||l;else return;E[Ze]&&E[Ze](!0);const R=F[S];R&&Ii(n,R)&&R.el[Ze]&&R.el[Ze](),L(v,[E])},enter(E){if(F[S]===n)return;let v=u,R=c,I=f;if(!e.isMounted)if(r)v=h||u,R=A||c,I=b||f;else return;let z=!1;E[Us]=tt=>{z||(z=!0,tt?L(I,[E]):L(R,[E]),U.delayedLeave&&U.delayedLeave(),E[Us]=void 0)};const Z=E[Us].bind(null,!1);v?C(v,[E,Z]):Z()},leave(E,v){const R=String(n.key);if(E[Us]&&E[Us](!0),e.isUnmounting)return v();L(d,[E]);let I=!1;E[Ze]=Z=>{I||(I=!0,v(),Z?L(M,[E]):L(_,[E]),E[Ze]=void 0,F[R]===n&&delete F[R])};const z=E[Ze].bind(null,!1);F[R]=n,p?C(p,[E,z]):z()},clone(E){const v=Io(E,t,e,i,s);return s&&s(v),v}};return U}function Ya(n){if(wa(n))return n=mi(n),n.children=null,n}function yc(n){if(!wa(n))return Ff(n.type)&&n.children?zf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Ht(e.default))return e.default()}}function ar(n,t){n.shapeFlag&6&&n.component?(n.transition=t,ar(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Gf(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=e==null?a.key:String(e)+String(a.key!=null?a.key:r);a.type===cn?(a.patchFlag&128&&s++,i=i.concat(Gf(a.children,t,o))):(t||a.type!==Ue)&&i.push(o!=null?mi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Vf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ec(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const la=new WeakMap;function Zs(n,t,e,i,s=!1){if(It(n)){n.forEach((M,m)=>Zs(M,t&&(It(t)?t[m]:t),e,i,s));return}if(Js(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Zs(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Da(i.component):i.el,a=s?null:r,{i:o,r:l}=n,u=t&&t.r,c=o.refs===re?o.refs={}:o.refs,f=o.setupState,d=Kt(f),p=f===re?ef:M=>Ec(c,M)?!1:Qt(d,M),_=(M,m)=>!(m&&Ec(c,m));if(u!=null&&u!==l){if(Tc(t),fe(u))c[u]=null,p(u)&&(f[u]=null);else if(Ae(u)){const M=t;_(u,M.k)&&(u.value=null),M.k&&(c[M.k]=null)}}if(Ht(l))dr(l,o,12,[a,c]);else{const M=fe(l),m=Ae(l);if(M||m){const h=()=>{if(n.f){const A=M?p(l)?f[l]:c[l]:_()||!n.k?l.value:c[n.k];if(s)It(A)&&Pl(A,r);else if(It(A))A.includes(r)||A.push(r);else if(M)c[l]=[r],p(l)&&(f[l]=c[l]);else{const b=[r];_(l,n.k)&&(l.value=b),n.k&&(c[n.k]=b)}}else M?(c[l]=a,p(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(c[n.k]=a))};if(a){const A=()=>{h(),la.delete(n)};A.id=-1,la.set(n,A),Be(A,e)}else Tc(n),h()}}}function Tc(n){const t=la.get(n);t&&(t.flags|=8,la.delete(n))}Ea().requestIdleCallback;Ea().cancelIdleCallback;const Js=n=>!!n.type.__asyncLoader,wa=n=>n.type.__isKeepAlive;function Jd(n,t){kf(n,"a",t)}function Qd(n,t){kf(n,"da",t)}function kf(n,t,e=Ne){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ra(t,i,e),e){let s=e.parent;for(;s&&s.parent;)wa(s.parent.vnode)&&tp(i,t,e,s),s=s.parent}}function tp(n,t,e,i){const s=Ra(t,n,i,!0);Ca(()=>{Pl(i[t],s)},e)}function Ra(n,t,e=Ne,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...a)=>{jn();const o=pr(e),l=nn(t,e,n,a);return o(),Zn(),l});return i?s.unshift(r):s.push(r),r}}const ti=n=>(t,e=Ne)=>{(!lr||n==="sp")&&Ra(n,(...i)=>t(...i),e)},ep=ti("bm"),Vl=ti("m"),np=ti("bu"),ip=ti("u"),Wf=ti("bum"),Ca=ti("um"),sp=ti("sp"),rp=ti("rtg"),ap=ti("rtc");function op(n,t=Ne){Ra("ec",n,t)}const lp=Symbol.for("v-ndc");function cp(n,t,e,i){let s;const r=e,a=It(n);if(a||fe(n)){const o=a&&zi(n);let l=!1,u=!1;o&&(l=!en(n),u=Jn(n),n=ba(n)),s=new Array(n.length);for(let c=0,f=n.length;c<f;c++)s[c]=t(l?u?Ms(vn(n[c])):vn(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r)}else if(te(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>t(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];s[l]=t(n[c],c,l,r)}}else s=[];return s}const Uo=n=>n?hh(n)?Da(n):Uo(n.parent):null,Qs=Me(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Uo(n.parent),$root:n=>Uo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yf(n),$forceUpdate:n=>n.f||(n.f=()=>{Gl(n.update)}),$nextTick:n=>n.n||(n.n=Gd.bind(n.proxy)),$watch:n=>qd.bind(n)}),qa=(n,t)=>n!==re&&!n.__isScriptSetup&&Qt(n,t),up={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(qa(i,t))return a[t]=1,i[t];if(s!==re&&Qt(s,t))return a[t]=2,s[t];if(Qt(r,t))return a[t]=3,r[t];if(e!==re&&Qt(e,t))return a[t]=4,e[t];No&&(a[t]=0)}}const u=Qs[t];let c,f;if(u)return t==="$attrs"&&be(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[t]))return c;if(e!==re&&Qt(e,t))return a[t]=4,e[t];if(f=l.config.globalProperties,Qt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return qa(s,t)?(s[t]=e,!0):i!==re&&Qt(i,t)?(i[t]=e,!0):Qt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(e[o]||n!==re&&o[0]!=="$"&&Qt(n,o)||qa(t,o)||Qt(r,o)||Qt(i,o)||Qt(Qs,o)||Qt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Qt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function bc(n){return It(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let No=!0;function fp(n){const t=Yf(n),e=n.proxy,i=n.ctx;No=!1,t.beforeCreate&&Ac(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:M,deactivated:m,beforeDestroy:h,beforeUnmount:A,destroyed:b,unmounted:S,render:F,renderTracked:L,renderTriggered:C,errorCaptured:U,serverPrefetch:E,expose:v,inheritAttrs:R,components:I,directives:z,filters:Z}=t;if(u&&hp(u,i,null),a)for(const et in a){const V=a[et];Ht(V)&&(i[et]=V.bind(e))}if(s){const et=s.call(e,e);te(et)&&(n.data=Bl(et))}if(No=!0,r)for(const et in r){const V=r[et],ht=Ht(V)?V.bind(e,e):Ht(V.get)?V.get.bind(e,e):Rn,Mt=!Ht(V)&&Ht(V.set)?V.set.bind(e):Rn,Et=ql({get:ht,set:Mt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Lt=>Et.value=Lt})}if(o)for(const et in o)Xf(o[et],i,e,et);if(l){const et=Ht(l)?l.call(e):l;Reflect.ownKeys(et).forEach(V=>{Wd(V,et[V])})}c&&Ac(c,n,"c");function $(et,V){It(V)?V.forEach(ht=>et(ht.bind(e))):V&&et(V.bind(e))}if($(ep,f),$(Vl,d),$(np,p),$(ip,_),$(Jd,M),$(Qd,m),$(op,U),$(ap,L),$(rp,C),$(Wf,A),$(Ca,S),$(sp,E),It(v))if(v.length){const et=n.exposed||(n.exposed={});v.forEach(V=>{Object.defineProperty(et,V,{get:()=>e[V],set:ht=>e[V]=ht,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===Rn&&(n.render=F),R!=null&&(n.inheritAttrs=R),I&&(n.components=I),z&&(n.directives=z),E&&Vf(n)}function hp(n,t,e=Rn){It(n)&&(n=Fo(n));for(const i in n){const s=n[i];let r;te(s)?"default"in s?r=jr(s.from||i,s.default,!0):r=jr(s.from||i):r=jr(s),Ae(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function Ac(n,t,e){nn(It(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Xf(n,t,e,i){let s=i.includes(".")?Nf(e,i):()=>e[i];if(fe(n)){const r=t[n];Ht(r)&&Xa(s,r)}else if(Ht(n))Xa(s,n.bind(e));else if(te(n))if(It(n))n.forEach(r=>Xf(r,t,e,i));else{const r=Ht(n.handler)?n.handler.bind(e):t[n.handler];Ht(r)&&Xa(s,r,n)}}function Yf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(u=>ca(l,u,a,!0)),ca(l,t,a)),te(t)&&r.set(t,l),l}function ca(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ca(n,r,e,!0),s&&s.forEach(a=>ca(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=dp[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const dp={data:wc,props:Rc,emits:Rc,methods:Ws,computed:Ws,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Ws,directives:Ws,watch:mp,provide:wc,inject:pp};function wc(n,t){return t?n?function(){return Me(Ht(n)?n.call(this,this):n,Ht(t)?t.call(this,this):t)}:t:n}function pp(n,t){return Ws(Fo(n),Fo(t))}function Fo(n){if(It(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ce(n,t){return n?[...new Set([].concat(n,t))]:t}function Ws(n,t){return n?Me(Object.create(null),n,t):t}function Rc(n,t){return n?It(n)&&It(t)?[...new Set([...n,...t])]:Me(Object.create(null),bc(n),bc(t??{})):t}function mp(n,t){if(!n)return t;if(!t)return n;const e=Me(Object.create(null),n);for(const i in t)e[i]=Ce(n[i],t[i]);return e}function qf(){return{app:null,config:{isNativeTag:ef,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gp=0;function _p(n,t){return function(i,s=null){Ht(i)||(i=Me({},i)),s!=null&&!te(s)&&(s=null);const r=qf(),a=new WeakSet,o=[];let l=!1;const u=r.app={_uid:gp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:jp,get config(){return r.config},set config(c){},use(c,...f){return a.has(c)||(c&&Ht(c.install)?(a.add(c),c.install(u,...f)):Ht(c)&&(a.add(c),c(u,...f))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,f){return f?(r.components[c]=f,u):r.components[c]},directive(c,f){return f?(r.directives[c]=f,u):r.directives[c]},mount(c,f,d){if(!l){const p=u._ceVNode||ge(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,c,d),l=!0,u._container=c,c.__vue_app__=u,Da(p.component)}},onUnmount(c){o.push(c)},unmount(){l&&(nn(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return r.provides[c]=f,u},runWithContext(c){const f=gs;gs=u;try{return c()}finally{gs=f}}};return u}}let gs=null;const vp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${dn(t)}Modifiers`]||n[`${Vi(t)}Modifiers`];function xp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||re;let s=e;const r=t.startsWith("update:"),a=r&&vp(i,t.slice(7));a&&(a.trim&&(s=e.map(c=>fe(c)?c.trim():c)),a.number&&(s=e.map(id)));let o,l=i[o=za(t)]||i[o=za(dn(t))];!l&&r&&(l=i[o=za(Vi(t))]),l&&nn(l,n,6,s);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,nn(u,n,6,s)}}const Mp=new WeakMap;function $f(n,t,e=!1){const i=e?Mp:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ht(n)){const l=u=>{const c=$f(u,t,!0);c&&(o=!0,Me(a,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(te(n)&&i.set(n,null),null):(It(r)?r.forEach(l=>a[l]=null):Me(a,r),te(n)&&i.set(n,a),a)}function Pa(n,t){return!n||!Ma(t)?!1:(t=t.slice(2).replace(/Once$/,""),Qt(n,t[0].toLowerCase()+t.slice(1))||Qt(n,Vi(t))||Qt(n,t))}function Cc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:d,setupState:p,ctx:_,inheritAttrs:M}=n,m=oa(n);let h,A;try{if(e.shapeFlag&4){const S=s||i,F=S;h=Tn(u.call(F,S,c,f,p,d,_)),A=o}else{const S=t;h=Tn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),A=t.props?o:Sp(o)}}catch(S){tr.length=0,Aa(S,n,1),h=ge(Ue)}let b=h;if(A&&M!==!1){const S=Object.keys(A),{shapeFlag:F}=b;S.length&&F&7&&(r&&S.some(Sa)&&(A=yp(A,r)),b=mi(b,A,!1,!0))}return e.dirs&&(b=mi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&ar(b,e.transition),h=b,oa(m),h}const Sp=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ma(e))&&((t||(t={}))[e]=n[e]);return t},yp=(n,t)=>{const e={};for(const i in n)(!Sa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Ep(n,t,e){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Pc(i,a,u):!!a;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(Kf(a,i,d)&&!Pa(u,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Pc(i,a,u):!0:!!a;return!1}function Pc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Kf(t,n,r)&&!Pa(e,r))return!0}return!1}function Kf(n,t,e){const i=n[e],s=t[e];return e==="style"&&te(i)&&te(s)?!Dl(i,s):i!==s}function Tp({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const jf={},Zf=()=>Object.create(jf),Jf=n=>Object.getPrototypeOf(n)===jf;function bp(n,t,e,i=!1){const s={},r=Zf();n.propsDefaults=Object.create(null),Qf(n,t,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=i?s:Ld(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Ap(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=Kt(s),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Pa(n.emitsOptions,d))continue;const p=t[d];if(l)if(Qt(r,d))p!==r[d]&&(r[d]=p,u=!0);else{const _=dn(d);s[_]=Oo(l,o,_,p,n,!1)}else p!==r[d]&&(r[d]=p,u=!0)}}}else{Qf(n,t,s,r)&&(u=!0);let c;for(const f in o)(!t||!Qt(t,f)&&((c=Vi(f))===f||!Qt(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(s[f]=Oo(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!t||!Qt(t,f))&&(delete r[f],u=!0)}u&&kn(n.attrs,"set","")}function Qf(n,t,e,i){const[s,r]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if($s(l))continue;const u=t[l];let c;s&&Qt(s,c=dn(l))?!r||!r.includes(c)?e[c]=u:(o||(o={}))[c]=u:Pa(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(r){const l=Kt(e),u=o||re;for(let c=0;c<r.length;c++){const f=r[c];e[f]=Oo(s,l,f,u[f],n,!Qt(u,f))}}return a}function Oo(n,t,e,i,s,r){const a=n[e];if(a!=null){const o=Qt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ht(l)){const{propsDefaults:u}=s;if(e in u)i=u[e];else{const c=pr(s);i=u[e]=l.call(null,t),c()}}else i=l;s.ce&&s.ce._setProp(e,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Vi(e))&&(i=!0))}return i}const wp=new WeakMap;function th(n,t,e=!1){const i=e?wp:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ht(n)){const c=f=>{l=!0;const[d,p]=th(f,t,!0);Me(a,d),p&&o.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return te(n)&&i.set(n,ds),ds;if(It(r))for(let c=0;c<r.length;c++){const f=dn(r[c]);Lc(f)&&(a[f]=re)}else if(r)for(const c in r){const f=dn(c);if(Lc(f)){const d=r[c],p=a[f]=It(d)||Ht(d)?{type:d}:Me({},d),_=p.type;let M=!1,m=!0;if(It(_))for(let h=0;h<_.length;++h){const A=_[h],b=Ht(A)&&A.name;if(b==="Boolean"){M=!0;break}else b==="String"&&(m=!1)}else M=Ht(_)&&_.name==="Boolean";p[0]=M,p[1]=m,(M||Qt(p,"default"))&&o.push(f)}}const u=[a,o];return te(n)&&i.set(n,u),u}function Lc(n){return n[0]!=="$"&&!$s(n)}const kl=n=>n==="_"||n==="_ctx"||n==="$stable",Wl=n=>It(n)?n.map(Tn):[Tn(n)],Rp=(n,t,e)=>{if(t._n)return t;const i=If((...s)=>Wl(t(...s)),e);return i._c=!1,i},eh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(kl(s))continue;const r=n[s];if(Ht(r))t[s]=Rp(s,r,i);else if(r!=null){const a=Wl(r);t[s]=()=>a}}},nh=(n,t)=>{const e=Wl(t);n.slots.default=()=>e},ih=(n,t,e)=>{for(const i in t)(e||!kl(i))&&(n[i]=t[i])},Cp=(n,t,e)=>{const i=n.slots=Zf();if(n.vnode.shapeFlag&32){const s=t._;s?(ih(i,t,e),e&&lf(i,"_",s,!0)):eh(t,i)}else t&&nh(n,t)},Pp=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,a=re;if(i.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:ih(s,t,e):(r=!t.$stable,eh(t,s)),a=t}else t&&(nh(n,t),a={default:1});if(r)for(const o in s)!kl(o)&&a[o]==null&&delete s[o]},Be=Np;function Lp(n){return Dp(n)}function Dp(n,t){const e=Ea();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:p=Rn,insertStaticContent:_}=n,M=(w,D,T,it=null,K=null,q=null,Q=void 0,rt=null,j=!!D.dynamicChildren)=>{if(w===D)return;w&&!Ii(w,D)&&(it=pt(w),Lt(w,K,q,!0),w=null),D.patchFlag===-2&&(j=!1,D.dynamicChildren=null);const{type:x,ref:g,shapeFlag:P}=D;switch(x){case La:m(w,D,T,it);break;case Ue:h(w,D,T,it);break;case Zr:w==null&&A(D,T,it,Q);break;case cn:I(w,D,T,it,K,q,Q,rt,j);break;default:P&1?F(w,D,T,it,K,q,Q,rt,j):P&6?z(w,D,T,it,K,q,Q,rt,j):(P&64||P&128)&&x.process(w,D,T,it,K,q,Q,rt,j,Ot)}g!=null&&K?Zs(g,w&&w.ref,q,D||w,!D):g==null&&w&&w.ref!=null&&Zs(w.ref,null,q,w,!0)},m=(w,D,T,it)=>{if(w==null)i(D.el=o(D.children),T,it);else{const K=D.el=w.el;D.children!==w.children&&u(K,D.children)}},h=(w,D,T,it)=>{w==null?i(D.el=l(D.children||""),T,it):D.el=w.el},A=(w,D,T,it)=>{[w.el,w.anchor]=_(w.children,D,T,it,w.el,w.anchor)},b=({el:w,anchor:D},T,it)=>{let K;for(;w&&w!==D;)K=d(w),i(w,T,it),w=K;i(D,T,it)},S=({el:w,anchor:D})=>{let T;for(;w&&w!==D;)T=d(w),s(w),w=T;s(D)},F=(w,D,T,it,K,q,Q,rt,j)=>{if(D.type==="svg"?Q="svg":D.type==="math"&&(Q="mathml"),w==null)L(D,T,it,K,q,Q,rt,j);else{const x=w.el&&w.el._isVueCE?w.el:null;try{x&&x._beginPatch(),E(w,D,K,q,Q,rt,j)}finally{x&&x._endPatch()}}},L=(w,D,T,it,K,q,Q,rt)=>{let j,x;const{props:g,shapeFlag:P,transition:G,dirs:W}=w;if(j=w.el=a(w.type,q,g&&g.is,g),P&8?c(j,w.children):P&16&&U(w.children,j,null,it,K,$a(w,q),Q,rt),W&&Mi(w,null,it,"created"),C(j,w,w.scopeId,Q,it),g){for(const ft in g)ft!=="value"&&!$s(ft)&&r(j,ft,null,g[ft],q,it);"value"in g&&r(j,"value",null,g.value,q),(x=g.onVnodeBeforeMount)&&Sn(x,it,w)}W&&Mi(w,null,it,"beforeMount");const k=Ip(K,G);k&&G.beforeEnter(j),i(j,D,T),((x=g&&g.onVnodeMounted)||k||W)&&Be(()=>{try{x&&Sn(x,it,w),k&&G.enter(j),W&&Mi(w,null,it,"mounted")}finally{}},K)},C=(w,D,T,it,K)=>{if(T&&p(w,T),it)for(let q=0;q<it.length;q++)p(w,it[q]);if(K){let q=K.subTree;if(D===q||oh(q.type)&&(q.ssContent===D||q.ssFallback===D)){const Q=K.vnode;C(w,Q,Q.scopeId,Q.slotScopeIds,K.parent)}}},U=(w,D,T,it,K,q,Q,rt,j=0)=>{for(let x=j;x<w.length;x++){const g=w[x]=rt?Vn(w[x]):Tn(w[x]);M(null,g,D,T,it,K,q,Q,rt)}},E=(w,D,T,it,K,q,Q)=>{const rt=D.el=w.el;let{patchFlag:j,dynamicChildren:x,dirs:g}=D;j|=w.patchFlag&16;const P=w.props||re,G=D.props||re;let W;if(T&&Si(T,!1),(W=G.onVnodeBeforeUpdate)&&Sn(W,T,D,w),g&&Mi(D,w,T,"beforeUpdate"),T&&Si(T,!0),(P.innerHTML&&G.innerHTML==null||P.textContent&&G.textContent==null)&&c(rt,""),x?v(w.dynamicChildren,x,rt,T,it,$a(D,K),q):Q||V(w,D,rt,null,T,it,$a(D,K),q,!1),j>0){if(j&16)R(rt,P,G,T,K);else if(j&2&&P.class!==G.class&&r(rt,"class",null,G.class,K),j&4&&r(rt,"style",P.style,G.style,K),j&8){const k=D.dynamicProps;for(let ft=0;ft<k.length;ft++){const at=k[ft],ct=P[at],Pt=G[at];(Pt!==ct||at==="value")&&r(rt,at,ct,Pt,K,T)}}j&1&&w.children!==D.children&&c(rt,D.children)}else!Q&&x==null&&R(rt,P,G,T,K);((W=G.onVnodeUpdated)||g)&&Be(()=>{W&&Sn(W,T,D,w),g&&Mi(D,w,T,"updated")},it)},v=(w,D,T,it,K,q,Q)=>{for(let rt=0;rt<D.length;rt++){const j=w[rt],x=D[rt],g=j.el&&(j.type===cn||!Ii(j,x)||j.shapeFlag&198)?f(j.el):T;M(j,x,g,null,it,K,q,Q,!0)}},R=(w,D,T,it,K)=>{if(D!==T){if(D!==re)for(const q in D)!$s(q)&&!(q in T)&&r(w,q,D[q],null,K,it);for(const q in T){if($s(q))continue;const Q=T[q],rt=D[q];Q!==rt&&q!=="value"&&r(w,q,rt,Q,K,it)}"value"in T&&r(w,"value",D.value,T.value,K)}},I=(w,D,T,it,K,q,Q,rt,j)=>{const x=D.el=w?w.el:o(""),g=D.anchor=w?w.anchor:o("");let{patchFlag:P,dynamicChildren:G,slotScopeIds:W}=D;W&&(rt=rt?rt.concat(W):W),w==null?(i(x,T,it),i(g,T,it),U(D.children||[],T,g,K,q,Q,rt,j)):P>0&&P&64&&G&&w.dynamicChildren&&w.dynamicChildren.length===G.length?(v(w.dynamicChildren,G,T,K,q,Q,rt),(D.key!=null||K&&D===K.subTree)&&sh(w,D,!0)):V(w,D,T,g,K,q,Q,rt,j)},z=(w,D,T,it,K,q,Q,rt,j)=>{D.slotScopeIds=rt,w==null?D.shapeFlag&512?K.ctx.activate(D,T,it,Q,j):Z(D,T,it,K,q,Q,j):tt(w,D,j)},Z=(w,D,T,it,K,q,Q)=>{const rt=w.component=kp(w,it,K);if(wa(w)&&(rt.ctx.renderer=Ot),Wp(rt,!1,Q),rt.asyncDep){if(K&&K.registerDep(rt,$,Q),!w.el){const j=rt.subTree=ge(Ue);h(null,j,D,T),w.placeholder=j.el}}else $(rt,w,D,T,K,q,Q)},tt=(w,D,T)=>{const it=D.component=w.component;if(Ep(w,D,T))if(it.asyncDep&&!it.asyncResolved){et(it,D,T);return}else it.next=D,it.update();else D.el=w.el,it.vnode=D},$=(w,D,T,it,K,q,Q)=>{const rt=()=>{if(w.isMounted){let{next:P,bu:G,u:W,parent:k,vnode:ft}=w;{const gt=rh(w);if(gt){P&&(P.el=ft.el,et(w,P,Q)),gt.asyncDep.then(()=>{Be(()=>{w.isUnmounted||x()},K)});return}}let at=P,ct;Si(w,!1),P?(P.el=ft.el,et(w,P,Q)):P=ft,G&&Ha(G),(ct=P.props&&P.props.onVnodeBeforeUpdate)&&Sn(ct,k,P,ft),Si(w,!0);const Pt=Cc(w),ot=w.subTree;w.subTree=Pt,M(ot,Pt,f(ot.el),pt(ot),w,K,q),P.el=Pt.el,at===null&&Tp(w,Pt.el),W&&Be(W,K),(ct=P.props&&P.props.onVnodeUpdated)&&Be(()=>Sn(ct,k,P,ft),K)}else{let P;const{el:G,props:W}=D,{bm:k,m:ft,parent:at,root:ct,type:Pt}=w,ot=Js(D);Si(w,!1),k&&Ha(k),!ot&&(P=W&&W.onVnodeBeforeMount)&&Sn(P,at,D),Si(w,!0);{ct.ce&&ct.ce._hasShadowRoot()&&ct.ce._injectChildStyle(Pt,w.parent?w.parent.type:void 0);const gt=w.subTree=Cc(w);M(null,gt,T,it,w,K,q),D.el=gt.el}if(ft&&Be(ft,K),!ot&&(P=W&&W.onVnodeMounted)){const gt=D;Be(()=>Sn(P,at,gt),K)}(D.shapeFlag&256||at&&Js(at.vnode)&&at.vnode.shapeFlag&256)&&w.a&&Be(w.a,K),w.isMounted=!0,D=T=it=null}};w.scope.on();const j=w.effect=new hf(rt);w.scope.off();const x=w.update=j.run.bind(j),g=w.job=j.runIfDirty.bind(j);g.i=w,g.id=w.uid,j.scheduler=()=>Gl(g),Si(w,!0),x()},et=(w,D,T)=>{D.component=w;const it=w.vnode.props;w.vnode=D,w.next=null,Ap(w,D.props,it,T),Pp(w,D.children,T),jn(),Mc(w),Zn()},V=(w,D,T,it,K,q,Q,rt,j=!1)=>{const x=w&&w.children,g=w?w.shapeFlag:0,P=D.children,{patchFlag:G,shapeFlag:W}=D;if(G>0){if(G&128){Mt(x,P,T,it,K,q,Q,rt,j);return}else if(G&256){ht(x,P,T,it,K,q,Q,rt,j);return}}W&8?(g&16&&yt(x,K,q),P!==x&&c(T,P)):g&16?W&16?Mt(x,P,T,it,K,q,Q,rt,j):yt(x,K,q,!0):(g&8&&c(T,""),W&16&&U(P,T,it,K,q,Q,rt,j))},ht=(w,D,T,it,K,q,Q,rt,j)=>{w=w||ds,D=D||ds;const x=w.length,g=D.length,P=Math.min(x,g);let G;for(G=0;G<P;G++){const W=D[G]=j?Vn(D[G]):Tn(D[G]);M(w[G],W,T,null,K,q,Q,rt,j)}x>g?yt(w,K,q,!0,!1,P):U(D,T,it,K,q,Q,rt,j,P)},Mt=(w,D,T,it,K,q,Q,rt,j)=>{let x=0;const g=D.length;let P=w.length-1,G=g-1;for(;x<=P&&x<=G;){const W=w[x],k=D[x]=j?Vn(D[x]):Tn(D[x]);if(Ii(W,k))M(W,k,T,null,K,q,Q,rt,j);else break;x++}for(;x<=P&&x<=G;){const W=w[P],k=D[G]=j?Vn(D[G]):Tn(D[G]);if(Ii(W,k))M(W,k,T,null,K,q,Q,rt,j);else break;P--,G--}if(x>P){if(x<=G){const W=G+1,k=W<g?D[W].el:it;for(;x<=G;)M(null,D[x]=j?Vn(D[x]):Tn(D[x]),T,k,K,q,Q,rt,j),x++}}else if(x>G)for(;x<=P;)Lt(w[x],K,q,!0),x++;else{const W=x,k=x,ft=new Map;for(x=k;x<=G;x++){const dt=D[x]=j?Vn(D[x]):Tn(D[x]);dt.key!=null&&ft.set(dt.key,x)}let at,ct=0;const Pt=G-k+1;let ot=!1,gt=0;const Rt=new Array(Pt);for(x=0;x<Pt;x++)Rt[x]=0;for(x=W;x<=P;x++){const dt=w[x];if(ct>=Pt){Lt(dt,K,q,!0);continue}let Nt;if(dt.key!=null)Nt=ft.get(dt.key);else for(at=k;at<=G;at++)if(Rt[at-k]===0&&Ii(dt,D[at])){Nt=at;break}Nt===void 0?Lt(dt,K,q,!0):(Rt[Nt-k]=x+1,Nt>=gt?gt=Nt:ot=!0,M(dt,D[Nt],T,null,K,q,Q,rt,j),ct++)}const Dt=ot?Up(Rt):ds;for(at=Dt.length-1,x=Pt-1;x>=0;x--){const dt=k+x,Nt=D[dt],Bt=D[dt+1],ee=dt+1<g?Bt.el||ah(Bt):it;Rt[x]===0?M(null,Nt,T,ee,K,q,Q,rt,j):ot&&(at<0||x!==Dt[at]?Et(Nt,T,ee,2):at--)}}},Et=(w,D,T,it,K=null)=>{const{el:q,type:Q,transition:rt,children:j,shapeFlag:x}=w;if(x&6){Et(w.component.subTree,D,T,it);return}if(x&128){w.suspense.move(D,T,it);return}if(x&64){Q.move(w,D,T,Ot);return}if(Q===cn){i(q,D,T);for(let P=0;P<j.length;P++)Et(j[P],D,T,it);i(w.anchor,D,T);return}if(Q===Zr){b(w,D,T);return}if(it!==2&&x&1&&rt)if(it===0)rt.persisted&&!q[Ze]?i(q,D,T):(rt.beforeEnter(q),i(q,D,T),Be(()=>rt.enter(q),K));else{const{leave:P,delayLeave:G,afterLeave:W}=rt,k=()=>{w.ctx.isUnmounted?s(q):i(q,D,T)},ft=()=>{const at=q._isLeaving||!!q[Ze];q._isLeaving&&q[Ze](!0),rt.persisted&&!at?k():P(q,()=>{k(),W&&W()})};G?G(q,k,ft):ft()}else i(q,D,T)},Lt=(w,D,T,it=!1,K=!1)=>{const{type:q,props:Q,ref:rt,children:j,dynamicChildren:x,shapeFlag:g,patchFlag:P,dirs:G,cacheIndex:W,memo:k}=w;if(P===-2&&(K=!1),rt!=null&&(jn(),Zs(rt,null,T,w,!0),Zn()),W!=null&&(D.renderCache[W]=void 0),g&256){D.ctx.deactivate(w);return}const ft=g&1&&G,at=!Js(w);let ct;if(at&&(ct=Q&&Q.onVnodeBeforeUnmount)&&Sn(ct,D,w),g&6)lt(w.component,T,it);else{if(g&128){w.suspense.unmount(T,it);return}ft&&Mi(w,null,D,"beforeUnmount"),g&64?w.type.remove(w,D,T,Ot,it):x&&!x.hasOnce&&(q!==cn||P>0&&P&64)?yt(x,D,T,!1,!0):(q===cn&&P&384||!K&&g&16)&&yt(j,D,T),it&&jt(w)}const Pt=k!=null&&W==null;(at&&(ct=Q&&Q.onVnodeUnmounted)||ft||Pt)&&Be(()=>{ct&&Sn(ct,D,w),ft&&Mi(w,null,D,"unmounted"),Pt&&(w.el=null)},T)},jt=w=>{const{type:D,el:T,anchor:it,transition:K}=w;if(D===cn){nt(T,it);return}if(D===Zr){S(w);return}const q=()=>{s(T),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(w.shapeFlag&1&&K&&!K.persisted){const{leave:Q,delayLeave:rt}=K,j=()=>Q(T,q);rt?rt(w.el,q,j):j()}else q()},nt=(w,D)=>{let T;for(;w!==D;)T=d(w),s(w),w=T;s(D)},lt=(w,D,T)=>{const{bum:it,scope:K,job:q,subTree:Q,um:rt,m:j,a:x}=w;Dc(j),Dc(x),it&&Ha(it),K.stop(),q&&(q.flags|=8,Lt(Q,w,D,T)),rt&&Be(rt,D),Be(()=>{w.isUnmounted=!0},D)},yt=(w,D,T,it=!1,K=!1,q=0)=>{for(let Q=q;Q<w.length;Q++)Lt(w[Q],D,T,it,K)},pt=w=>{if(w.shapeFlag&6)return pt(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const D=d(w.anchor||w.el),T=D&&D[$d];return T?d(T):D};let Ct=!1;const Ut=(w,D,T)=>{let it;w==null?D._vnode&&(Lt(D._vnode,null,null,!0),it=D._vnode.component):M(D._vnode||null,w,D,null,null,null,T),D._vnode=w,Ct||(Ct=!0,Mc(it),Pf(),Ct=!1)},Ot={p:M,um:Lt,m:Et,r:jt,mt:Z,mc:U,pc:V,pbc:v,n:pt,o:n};return{render:Ut,hydrate:void 0,createApp:_p(Ut)}}function $a({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Si({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Ip(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function sh(n,t,e=!1){const i=n.children,s=t.children;if(It(i)&&It(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Vn(s[r]),o.el=a.el),!e&&o.patchFlag!==-2&&sh(a,o)),o.type===La&&(o.patchFlag===-1&&(o=s[r]=Vn(o)),o.el=a.el),o.type===Ue&&!o.el&&(o.el=a.el)}}function Up(n){const t=n.slice(),e=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=e[e.length-1],n[s]<u){t[i]=s,e.push(i);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,n[e[o]]<u?r=o+1:a=o;u<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}function rh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:rh(t)}function Dc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ah(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ah(t.subTree):null}const oh=n=>n.__isSuspense;function Np(n,t){t&&t.pendingBranch?It(n)?t.effects.push(...n):t.effects.push(n):kd(n)}const cn=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),Ue=Symbol.for("v-cmt"),Zr=Symbol.for("v-stc"),tr=[];let qe=null;function He(n=!1){tr.push(qe=n?null:[])}function Fp(){tr.pop(),qe=tr[tr.length-1]||null}let or=1;function ua(n,t=!1){or+=n,n<0&&qe&&t&&(qe.hasOnce=!0)}function lh(n){return n.dynamicChildren=or>0?qe||ds:null,Fp(),or>0&&qe&&qe.push(n),n}function mn(n,t,e,i,s,r){return lh(zt(n,t,e,i,s,r,!0))}function Xl(n,t,e,i,s){return lh(ge(n,t,e,i,s,!0))}function fa(n){return n?n.__v_isVNode===!0:!1}function Ii(n,t){return n.type===t.type&&n.key===t.key}const ch=({key:n})=>n??null,Jr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?fe(n)||Ae(n)||Ht(n)?{i:tn,r:n,k:t,f:!!e}:n:null);function zt(n,t=null,e=null,i=0,s=null,r=n===cn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&ch(t),ref:t&&Jr(t),scopeId:Df,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tn};return o?(Yl(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=fe(e)?8:16),or>0&&!a&&qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qe.push(l),l}const ge=Op;function Op(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===lp)&&(n=Ue),fa(n)){const o=mi(n,t,!0);return e&&Yl(o,e),or>0&&!r&&qe&&(o.shapeFlag&6?qe[qe.indexOf(n)]=o:qe.push(o)),o.patchFlag=-2,o}if($p(n)&&(n=n.__vccOpts),t){t=Bp(t);let{class:o,style:l}=t;o&&!fe(o)&&(t.class=ki(o)),te(l)&&(Hl(l)&&!It(l)&&(l=Me({},l)),t.style=Ta(l))}const a=fe(n)?1:oh(n)?128:Ff(n)?64:te(n)?4:Ht(n)?2:0;return zt(n,t,e,i,s,a,r,!0)}function Bp(n){return n?Hl(n)||Jf(n)?Me({},n):n:null}function mi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,u=t?Hp(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&ch(u),ref:t&&t.ref?e&&r?It(r)?r.concat(Jr(t)):[r,Jr(t)]:Jr(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==cn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mi(n.ssContent),ssFallback:n.ssFallback&&mi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ar(c,l.clone(c)),c}function zp(n=" ",t=0){return ge(La,null,n,t)}function uh(n,t){const e=ge(Zr,null,n);return e.staticCount=t,e}function Ss(n="",t=!1){return t?(He(),Xl(Ue,null,n)):ge(Ue,null,n)}function Tn(n){return n==null||typeof n=="boolean"?ge(Ue):It(n)?ge(cn,null,n.slice()):fa(n)?Vn(n):ge(La,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mi(n)}function Yl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(It(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Yl(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Jf(t)?t._ctx=tn:s===3&&tn&&(tn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ht(t)?(t={default:t,_ctx:tn},e=32):(t=String(t),i&64?(e=16,t=[zp(t)]):e=8);n.children=t,n.shapeFlag|=e}function Hp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ki([t.class,i.class]));else if(s==="style")t.style=Ta([t.style,i.style]);else if(Ma(s)){const r=t[s],a=i[s];a&&r!==a&&!(It(r)&&r.includes(a))?t[s]=r?[].concat(r,a):a:a==null&&r==null&&!Sa(s)&&(t[s]=a)}else s!==""&&(t[s]=i[s])}return t}function Sn(n,t,e,i=null){nn(n,t,7,[e,i])}const Gp=qf();let Vp=0;function kp(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Gp,r={uid:Vp++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:th(i,s),emitsOptions:$f(i,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:i.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=xp.bind(null,r),n.ce&&n.ce(r),r}let Ne=null;const fh=()=>Ne||tn;let ha,Bo;{const n=Ea(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};ha=t("__VUE_INSTANCE_SETTERS__",e=>Ne=e),Bo=t("__VUE_SSR_SETTERS__",e=>lr=e)}const pr=n=>{const t=Ne;return ha(n),n.scope.on(),()=>{n.scope.off(),ha(t)}},Ic=()=>{Ne&&Ne.scope.off(),ha(null)};function hh(n){return n.vnode.shapeFlag&4}let lr=!1;function Wp(n,t=!1,e=!1){t&&Bo(t);const{props:i,children:s}=n.vnode,r=hh(n);bp(n,i,r,t),Cp(n,s,e||t);const a=r?Xp(n,t):void 0;return t&&Bo(!1),a}function Xp(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,up);const{setup:i}=e;if(i){jn();const s=n.setupContext=i.length>1?qp(n):null,r=pr(n),a=dr(i,n,0,[n.props,s]),o=sf(a);if(Zn(),r(),(o||n.sp)&&!Js(n)&&Vf(n),o){if(a.then(Ic,Ic),t)return a.then(l=>{Uc(n,l)}).catch(l=>{Aa(l,n,0)});n.asyncDep=a}else Uc(n,a)}else dh(n)}function Uc(n,t,e){Ht(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:te(t)&&(n.setupState=wf(t)),dh(n)}function dh(n,t,e){const i=n.type;n.render||(n.render=i.render||Rn);{const s=pr(n);jn();try{fp(n)}finally{Zn(),s()}}}const Yp={get(n,t){return be(n,"get",""),n[t]}};function qp(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Yp),slots:n.slots,emit:n.emit,expose:t}}function Da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(wf(Dd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Qs)return Qs[e](n)},has(t,e){return e in t||e in Qs}})):n.proxy}function $p(n){return Ht(n)&&"__vccOpts"in n}const ql=(n,t)=>Od(n,t,lr);function Kp(n,t,e){try{ua(-1);const i=arguments.length;return i===2?te(t)&&!It(t)?fa(t)?ge(n,null,[t]):ge(n,t):ge(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&fa(e)&&(e=[e]),ge(n,t,e))}finally{ua(1)}}const jp="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zo;const Nc=typeof window<"u"&&window.trustedTypes;if(Nc)try{zo=Nc.createPolicy("vue",{createHTML:n=>n})}catch{}const ph=zo?n=>zo.createHTML(n):n=>n,Zp="http://www.w3.org/2000/svg",Jp="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Fc=Gn&&Gn.createElement("template"),Qp={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Gn.createElementNS(Zp,n):t==="mathml"?Gn.createElementNS(Jp,n):e?Gn.createElement(n,{is:e}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Fc.innerHTML=ph(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Fc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ii="transition",Ns="animation",cr=Symbol("_vtc"),mh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tm=Me({},Of,mh),em=n=>(n.displayName="Transition",n.props=tm,n),nm=em((n,{slots:t})=>Kp(Zd,im(n),t)),yi=(n,t=[])=>{It(n)?n.forEach(e=>e(...t)):n&&n(...t)},Oc=n=>n?It(n)?n.some(t=>t.length>1):n.length>1:!1;function im(n){const t={};for(const I in n)I in mh||(t[I]=n[I]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:a=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,_=sm(s),M=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:A,onEnterCancelled:b,onLeave:S,onLeaveCancelled:F,onBeforeAppear:L=h,onAppear:C=A,onAppearCancelled:U=b}=t,E=(I,z,Z,tt)=>{I._enterCancelled=tt,Ei(I,z?c:o),Ei(I,z?u:a),Z&&Z()},v=(I,z)=>{I._isLeaving=!1,Ei(I,f),Ei(I,p),Ei(I,d),z&&z()},R=I=>(z,Z)=>{const tt=I?C:A,$=()=>E(z,I,Z);yi(tt,[z,$]),Bc(()=>{Ei(z,I?l:r),Un(z,I?c:o),Oc(tt)||zc(z,i,M,$)})};return Me(t,{onBeforeEnter(I){yi(h,[I]),Un(I,r),Un(I,a)},onBeforeAppear(I){yi(L,[I]),Un(I,l),Un(I,u)},onEnter:R(!1),onAppear:R(!0),onLeave(I,z){I._isLeaving=!0;const Z=()=>v(I,z);Un(I,f),I._enterCancelled?(Un(I,d),Vc(I)):(Vc(I),Un(I,d)),Bc(()=>{I._isLeaving&&(Ei(I,f),Un(I,p),Oc(S)||zc(I,i,m,Z))}),yi(S,[I,Z])},onEnterCancelled(I){E(I,!1,void 0,!0),yi(b,[I])},onAppearCancelled(I){E(I,!0,void 0,!0),yi(U,[I])},onLeaveCancelled(I){v(I),yi(F,[I])}})}function sm(n){if(n==null)return null;if(te(n))return[Ka(n.enter),Ka(n.leave)];{const t=Ka(n);return[t,t]}}function Ka(n){return sd(n)}function Un(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[cr]||(n[cr]=new Set)).add(t)}function Ei(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[cr];e&&(e.delete(t),e.size||(n[cr]=void 0))}function Bc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let rm=0;function zc(n,t,e,i){const s=n._endId=++rm,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:a,timeout:o,propCount:l}=am(n,t);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,d),r()},d=p=>{p.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,d)}function am(n,t){const e=window.getComputedStyle(n),i=_=>(e[_]||"").split(", "),s=i(`${ii}Delay`),r=i(`${ii}Duration`),a=Hc(s,r),o=i(`${Ns}Delay`),l=i(`${Ns}Duration`),u=Hc(o,l);let c=null,f=0,d=0;t===ii?a>0&&(c=ii,f=a,d=r.length):t===Ns?u>0&&(c=Ns,f=u,d=l.length):(f=Math.max(a,u),c=f>0?a>u?ii:Ns:null,d=c?c===ii?r.length:l.length:0);const p=c===ii&&/\b(?:transform|all)(?:,|$)/.test(i(`${ii}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:p}}function Hc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Gc(e)+Gc(n[i])))}function Gc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Vc(n){return(n?n.ownerDocument:document).body.offsetHeight}function om(n,t,e){const i=n[cr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const da=Symbol("_vod"),gh=Symbol("_vsh"),kc={name:"show",beforeMount(n,{value:t},{transition:e}){n[da]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Fs(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Fs(n,!0),i.enter(n)):i.leave(n,()=>{Fs(n,!1)}):Fs(n,t))},beforeUnmount(n,{value:t}){Fs(n,t)}};function Fs(n,t){n.style.display=t?n[da]:"none",n[gh]=!t}const lm=Symbol(""),cm=/(?:^|;)\s*display\s*:/;function um(n,t,e){const i=n.style,s=fe(e);let r=!1;if(e&&!s){if(t)if(fe(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&Xs(i,o,"")}else for(const a in t)e[a]==null&&Xs(i,a,"");for(const a in e){a==="display"&&(r=!0);const o=e[a];o!=null?hm(n,a,!fe(t)&&t?t[a]:void 0,o)||Xs(i,a,o):Xs(i,a,"")}}else if(s){if(t!==e){const a=i[lm];a&&(e+=";"+a),i.cssText=e,r=cm.test(e)}}else t&&n.removeAttribute("style");da in n&&(n[da]=r?i.display:"",n[gh]&&(i.display="none"))}const Wc=/\s*!important$/;function Xs(n,t,e){if(It(e))e.forEach(i=>Xs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=fm(n,t);Wc.test(e)?n.setProperty(Vi(i),e.replace(Wc,""),"important"):n[i]=e}}const Xc=["Webkit","Moz","ms"],ja={};function fm(n,t){const e=ja[t];if(e)return e;let i=dn(t);if(i!=="filter"&&i in n)return ja[t]=i;i=of(i);for(let s=0;s<Xc.length;s++){const r=Xc[s]+i;if(r in n)return ja[t]=r}return t}function hm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&fe(i)&&e===i}const Yc="http://www.w3.org/1999/xlink";function qc(n,t,e,i,s,r=ud(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Yc,t.slice(6,t.length)):n.setAttributeNS(Yc,t,e):e==null||r&&!cf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Cn(e)?String(e):e)}function $c(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?ph(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=cf(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function dm(n,t,e,i){n.addEventListener(t,e,i)}function pm(n,t,e,i){n.removeEventListener(t,e,i)}const Kc=Symbol("_vei");function mm(n,t,e,i,s=null){const r=n[Kc]||(n[Kc]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=gm(t);if(i){const u=r[t]=xm(i,s);dm(n,o,u,l)}else a&&(pm(n,o,a,l),r[t]=void 0)}}const jc=/(?:Once|Passive|Capture)$/;function gm(n){let t;if(jc.test(n)){t={};let i;for(;i=n.match(jc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Vi(n.slice(2)),t]}let Za=0;const _m=Promise.resolve(),vm=()=>Za||(_m.then(()=>Za=0),Za=Date.now());function xm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(It(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const u=a[l];u&&nn(u,t,5,o)}}else nn(s,t,5,[i])};return e.value=n,e.attached=vm(),e}const Zc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Mm=(n,t,e,i,s,r)=>{const a=s==="svg";t==="class"?om(n,i,a):t==="style"?um(n,e,i):Ma(t)?Sa(t)||mm(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sm(n,t,i,a))?($c(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&qc(n,t,i,a,r,t!=="value")):n._isVueCE&&(ym(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!fe(i)))?$c(n,dn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),qc(n,t,i,a))};function Sm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Zc(t)&&Ht(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zc(t)&&fe(e)?!1:t in n}function ym(n,t){const e=n._def.props;if(!e)return!1;const i=dn(t);return Array.isArray(e)?e.some(s=>dn(s)===i):Object.keys(e).some(s=>dn(s)===i)}const Em=["ctrl","shift","alt","meta"],Tm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Em.some(e=>n[`${e}Key`]&&!t.includes(e))},Jc=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let a=0;a<t.length;a++){const o=Tm[t[a]];if(o&&o(s,t))return}return n(s,...r)}))},bm=Me({patchProp:Mm},Qp);let Qc;function Am(){return Qc||(Qc=Lp(bm))}const wm=((...n)=>{const t=Am().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Cm(i);if(!s)return;const r=t._component;!Ht(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,Rm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function Rm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Cm(n){return fe(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $l="170",Pm=0,tu=1,Lm=2,_h=1,Dm=2,Hn=3,gi=0,Ge=1,un=2,di=0,_s=1,pa=2,eu=3,nu=4,Im=5,Ui=100,Um=101,Nm=102,Fm=103,Om=104,Bm=200,zm=201,Hm=202,Gm=203,Ho=204,Go=205,Vm=206,km=207,Wm=208,Xm=209,Ym=210,qm=211,$m=212,Km=213,jm=214,Vo=0,ko=1,Wo=2,ys=3,Xo=4,Yo=5,qo=6,$o=7,vh=0,Zm=1,Jm=2,pi=0,Qm=1,tg=2,eg=3,ng=4,ig=5,sg=6,rg=7,xh=300,Es=301,Ts=302,Ko=303,jo=304,Ia=306,Zo=1e3,Fi=1001,Jo=1002,gn=1003,ag=1004,br=1005,wn=1006,Ja=1007,Oi=1008,Qn=1009,Mh=1010,Sh=1011,ur=1012,Kl=1013,Hi=1014,Xn=1015,mr=1016,jl=1017,Zl=1018,bs=1020,yh=35902,Eh=1021,Th=1022,hn=1023,bh=1024,Ah=1025,vs=1026,As=1027,wh=1028,Jl=1029,Rh=1030,Ql=1031,tc=1033,Qr=33776,ta=33777,ea=33778,na=33779,Qo=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,al=37808,ol=37809,ll=37810,cl=37811,ul=37812,fl=37813,hl=37814,dl=37815,pl=37816,ml=37817,gl=37818,_l=37819,vl=37820,xl=37821,ia=36492,Ml=36494,Sl=36495,Ch=36283,yl=36284,El=36285,Tl=36286,og=3200,lg=3201,cg=0,ug=1,hi="",Ye="srgb",Rs="srgb-linear",Ua="linear",se="srgb",Yi=7680,iu=519,fg=512,hg=513,dg=514,Ph=515,pg=516,mg=517,gg=518,_g=519,bl=35044,su="300 es",Yn=2e3,ma=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ru=1234567;const er=Math.PI/180,fr=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function De(n,t,e){return Math.max(t,Math.min(e,n))}function ec(n,t){return(n%t+t)%t}function vg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xg(n,t,e){return n!==t?(e-n)/(t-n):0}function nr(n,t,e){return(1-e)*n+e*t}function Mg(n,t,e,i){return nr(n,t,1-Math.exp(-e*i))}function Sg(n,t=1){return t-Math.abs(ec(n,t*2)-t)}function yg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Eg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Tg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function bg(n,t){return n+Math.random()*(t-n)}function Ag(n){return n*(.5-Math.random())}function wg(n){n!==void 0&&(ru=n);let t=ru+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rg(n){return n*er}function Cg(n){return n*fr}function Pg(n){return(n&n-1)===0&&n!==0}function Lg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ig(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),u=r((t+i)/2),c=a((t+i)/2),f=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*c,l*f,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*f,o*u);break;case"ZXZ":n.set(l*f,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*_,l*p,o*u);break;case"YXY":n.set(l*p,o*c,l*_,o*u);break;case"ZYZ":n.set(l*_,l*p,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Al={DEG2RAD:er,RAD2DEG:fr,generateUUID:$n,clamp:De,euclideanModulo:ec,mapLinear:vg,inverseLerp:xg,lerp:nr,damp:Mg,pingpong:Sg,smoothstep:yg,smootherstep:Eg,randInt:Tg,randFloat:bg,randFloatSpread:Ag,seededRandom:wg,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:Pg,ceilPowerOfTwo:Lg,floorPowerOfTwo:Dg,setQuaternionFromProperEuler:Ig,normalize:ie,denormalize:fn};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,a,o,l,u){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,u)}set(t,e,i,s,r,a,o,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],M=s[0],m=s[3],h=s[6],A=s[1],b=s[4],S=s[7],F=s[2],L=s[5],C=s[8];return r[0]=a*M+o*A+l*F,r[3]=a*m+o*b+l*L,r[6]=a*h+o*S+l*C,r[1]=u*M+c*A+f*F,r[4]=u*m+c*b+f*L,r[7]=u*h+c*S+f*C,r[2]=d*M+p*A+_*F,r[5]=d*m+p*b+_*L,r[8]=d*h+p*S+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return e*a*c-e*o*u-i*r*c+i*o*l+s*r*u-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=c*a-o*u,d=o*l-c*r,p=u*r-a*l,_=e*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=f*M,t[1]=(s*u-c*i)*M,t[2]=(o*i-s*a)*M,t[3]=d*M,t[4]=(c*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(i*l-u*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*a+u*o)+a+t,-s*u,s*l,-s*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new kt;function Lh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ug(){const n=ga("canvas");return n.style.display="block",n}const au={};function Ys(n){n in au||(au[n]=!0,console.warn(n))}function Ng(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Fg(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Og(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(n.r=Kn(n.r),n.g=Kn(n.g),n.b=Kn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(n.r=xs(n.r),n.g=xs(n.g),n.b=xs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hi?Ua:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ou=[.64,.33,.3,.6,.15,.06],lu=[.2126,.7152,.0722],cu=[.3127,.329],uu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Rs]:{primaries:ou,whitePoint:cu,transfer:Ua,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:lu,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:ou,whitePoint:cu,transfer:se,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:lu,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}});let qi;class Bg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=ga("canvas")),qi.width=t.width,qi.height=t.height;const i=qi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Kn(e[i]/255)*255):e[i]=Kn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zg=0;class Dh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(to(s[a].image)):r.push(to(s[a]))}else r=to(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function to(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hg=0;class Fe extends Cs{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,i=Fi,s=Fi,r=wn,a=Oi,o=hn,l=Qn,u=Fe.DEFAULT_ANISOTROPY,c=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=$n(),this.name="",this.source=new Dh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=xh;Fe.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],M=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(u+1)/2,S=(p+1)/2,F=(h+1)/2,L=(c+d)/4,C=(f+M)/4,U=(_+m)/4;return b>S&&b>F?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=L/i,r=C/i):S>F?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=L/s,r=U/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=C/r,s=U/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(d-c)*(d-c));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-M)/A,this.z=(d-c)/A,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gg extends Cs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Fe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Gg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ih extends Fe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vg extends Fe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],u=i[s+1],c=i[s+2],f=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=M;return}if(f!==M||l!==d||u!==p||c!==_){let m=1-o;const h=l*d+u*p+c*_+f*M,A=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const F=Math.sqrt(b),L=Math.atan2(F,h*A);m=Math.sin(m*L)/F,o=Math.sin(o*L)/F}const S=o*A;if(l=l*m+d*S,u=u*m+p*S,c=c*m+_*S,f=f*m+M*S,m===1-o){const F=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=F,u*=F,c*=F,f*=F}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],u=i[s+2],c=i[s+3],f=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+c*f+l*p-u*d,t[e+1]=l*_+c*d+u*f-o*p,t[e+2]=u*_+c*p+o*d-l*f,t[e+3]=c*_-o*f-l*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(s/2),f=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],u=e[2],c=e[6],f=e[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+a*o+s*u-r*l,this._y=s*c+a*l+r*o-i*u,this._z=r*c+a*u+i*l-s*o,this._w=a*c-i*o-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*s-o*i),c=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*u+a*f-o*c,this.y=i+l*c+o*u-r*f,this.z=s+l*f+r*c-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new H,hu=new gr;class _r{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ar.copy(i.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),wr.subVectors(this.max,Os),$i.subVectors(t.a,Os),Ki.subVectors(t.b,Os),ji.subVectors(t.c,Os),si.subVectors(Ki,$i),ri.subVectors(ji,Ki),Ti.subVectors($i,ji);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ti.z,Ti.y,si.z,0,-si.x,ri.z,0,-ri.x,Ti.z,0,-Ti.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ti.y,Ti.x,0];return!no(e,$i,Ki,ji,wr)||(e=[1,0,0,0,1,0,0,0,1],!no(e,$i,Ki,ji,wr))?!1:(Rr.crossVectors(si,ri),e=[Rr.x,Rr.y,Rr.z],no(e,$i,Ki,ji,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new H,new H,new H,new H,new H,new H,new H,new H],an=new H,Ar=new _r,$i=new H,Ki=new H,ji=new H,si=new H,ri=new H,Ti=new H,Os=new H,wr=new H,Rr=new H,bi=new H;function no(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){bi.fromArray(n,r);const o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),u=e.dot(bi),c=i.dot(bi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const kg=new _r,Bs=new H,io=new H;class nc{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):kg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Bs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(io)),this.expandByPoint(Bs.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new H,so=new H,Cr=new H,ai=new H,ro=new H,Pr=new H,ao=new H;class Uh{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){so.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(so);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=ai.dot(this.direction),l=-ai.dot(Cr),u=ai.lengthSq(),c=Math.abs(1-a*a);let f,d,p,_;if(c>0)if(f=a*l-o,d=a*o-l,_=r*c,f>=0)if(d>=-_)if(d<=_){const M=1/c;f*=M,d*=M,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(so).addScaledVector(Cr,d),p}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(i=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),c>=0?(r=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,s,r){ro.subVectors(e,t),Pr.subVectors(i,t),ao.crossVectors(ro,Pr);let a=this.direction.dot(ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,t);const l=o*this.direction.dot(Pr.crossVectors(ai,Pr));if(l<0)return null;const u=o*this.direction.dot(ro.cross(ai));if(u<0||l+u>a)return null;const c=-o*ai.dot(ao);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,s,r,a,o,l,u,c,f,d,p,_,M,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,u,c,f,d,p,_,M,m)}set(t,e,i,s,r,a,o,l,u,c,f,d,p,_,M,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=M,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*c,p=a*f,_=o*c,M=o*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=p+_*u,e[5]=d-M*u,e[9]=-o*l,e[2]=M-d*u,e[6]=_+p*u,e[10]=a*l}else if(t.order==="YXZ"){const d=l*c,p=l*f,_=u*c,M=u*f;e[0]=d+M*o,e[4]=_*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*c,e[9]=-o,e[2]=p*o-_,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*c,p=l*f,_=u*c,M=u*f;e[0]=d-M*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*c,e[9]=M-d*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*c,p=a*f,_=o*c,M=o*f;e[0]=l*c,e[4]=_*u-p,e[8]=d*u+M,e[1]=l*f,e[5]=M*u+d,e[9]=p*u-_,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*u,_=o*l,M=o*u;e[0]=l*c,e[4]=M-d*f,e[8]=_*f+p,e[1]=f,e[5]=a*c,e[9]=-o*c,e[2]=-u*c,e[6]=p*f+_,e[10]=d-M*f}else if(t.order==="XZY"){const d=a*l,p=a*u,_=o*l,M=o*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=d*f+M,e[5]=a*c,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*c,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wg,t,Xg)}lookAt(t,e,i){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),oi.crossVectors(i,We),oi.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),oi.crossVectors(i,We)),oi.normalize(),Lr.crossVectors(We,oi),s[0]=oi.x,s[4]=Lr.x,s[8]=We.x,s[1]=oi.y,s[5]=Lr.y,s[9]=We.y,s[2]=oi.z,s[6]=Lr.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],M=i[6],m=i[10],h=i[14],A=i[3],b=i[7],S=i[11],F=i[15],L=s[0],C=s[4],U=s[8],E=s[12],v=s[1],R=s[5],I=s[9],z=s[13],Z=s[2],tt=s[6],$=s[10],et=s[14],V=s[3],ht=s[7],Mt=s[11],Et=s[15];return r[0]=a*L+o*v+l*Z+u*V,r[4]=a*C+o*R+l*tt+u*ht,r[8]=a*U+o*I+l*$+u*Mt,r[12]=a*E+o*z+l*et+u*Et,r[1]=c*L+f*v+d*Z+p*V,r[5]=c*C+f*R+d*tt+p*ht,r[9]=c*U+f*I+d*$+p*Mt,r[13]=c*E+f*z+d*et+p*Et,r[2]=_*L+M*v+m*Z+h*V,r[6]=_*C+M*R+m*tt+h*ht,r[10]=_*U+M*I+m*$+h*Mt,r[14]=_*E+M*z+m*et+h*Et,r[3]=A*L+b*v+S*Z+F*V,r[7]=A*C+b*R+S*tt+F*ht,r[11]=A*U+b*I+S*$+F*Mt,r[15]=A*E+b*z+S*et+F*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],u=t[13],c=t[2],f=t[6],d=t[10],p=t[14],_=t[3],M=t[7],m=t[11],h=t[15];return _*(+r*l*f-s*u*f-r*o*d+i*u*d+s*o*p-i*l*p)+M*(+e*l*p-e*u*d+r*a*d-s*a*p+s*u*c-r*l*c)+m*(+e*u*f-e*o*p-r*a*f+i*a*p+r*o*c-i*u*c)+h*(-s*o*c-e*l*f+e*o*d+s*a*f-i*a*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=t[9],d=t[10],p=t[11],_=t[12],M=t[13],m=t[14],h=t[15],A=f*m*u-M*d*u+M*l*p-o*m*p-f*l*h+o*d*h,b=_*d*u-c*m*u-_*l*p+a*m*p+c*l*h-a*d*h,S=c*M*u-_*f*u+_*o*p-a*M*p-c*o*h+a*f*h,F=_*f*l-c*M*l-_*o*d+a*M*d+c*o*m-a*f*m,L=e*A+i*b+s*S+r*F;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return t[0]=A*C,t[1]=(M*d*r-f*m*r-M*s*p+i*m*p+f*s*h-i*d*h)*C,t[2]=(o*m*r-M*l*r+M*s*u-i*m*u-o*s*h+i*l*h)*C,t[3]=(f*l*r-o*d*r-f*s*u+i*d*u+o*s*p-i*l*p)*C,t[4]=b*C,t[5]=(c*m*r-_*d*r+_*s*p-e*m*p-c*s*h+e*d*h)*C,t[6]=(_*l*r-a*m*r-_*s*u+e*m*u+a*s*h-e*l*h)*C,t[7]=(a*d*r-c*l*r+c*s*u-e*d*u-a*s*p+e*l*p)*C,t[8]=S*C,t[9]=(_*f*r-c*M*r-_*i*p+e*M*p+c*i*h-e*f*h)*C,t[10]=(a*M*r-_*o*r+_*i*u-e*M*u-a*i*h+e*o*h)*C,t[11]=(c*o*r-a*f*r-c*i*u+e*f*u+a*i*p-e*o*p)*C,t[12]=F*C,t[13]=(c*M*s-_*f*s+_*i*d-e*M*d-c*i*m+e*f*m)*C,t[14]=(_*o*s-a*M*s-_*i*l+e*M*l+a*i*m-e*o*m)*C,t[15]=(a*f*s-c*o*s+c*i*l-e*f*l-a*i*d+e*o*d)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,u=r*a,c=r*o;return this.set(u*a+i,u*o-s*l,u*l+s*o,0,u*o+s*l,c*o+i,c*l-s*a,0,u*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,u=r+r,c=a+a,f=o+o,d=r*u,p=r*c,_=r*f,M=a*c,m=a*f,h=o*f,A=l*u,b=l*c,S=l*f,F=i.x,L=i.y,C=i.z;return s[0]=(1-(M+h))*F,s[1]=(p+S)*F,s[2]=(_-b)*F,s[3]=0,s[4]=(p-S)*L,s[5]=(1-(d+h))*L,s[6]=(m+A)*L,s[7]=0,s[8]=(_+b)*C,s[9]=(m-A)*C,s[10]=(1-(d+M))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const a=Zi.set(s[4],s[5],s[6]).length(),o=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const u=1/r,c=1/a,f=1/o;return on.elements[0]*=u,on.elements[1]*=u,on.elements[2]*=u,on.elements[4]*=c,on.elements[5]*=c,on.elements[6]*=c,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Yn){const l=this.elements,u=2*r/(e-t),c=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let p,_;if(o===Yn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ma)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Yn){const l=this.elements,u=1/(e-t),c=1/(i-s),f=1/(a-r),d=(e+t)*u,p=(i+s)*c;let _,M;if(o===Yn)_=(a+r)*f,M=-2*f;else if(o===ma)_=r*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Zi=new H,on=new de,Wg=new H(0,0,0),Xg=new H(1,1,1),oi=new H,Lr=new H,We=new H,du=new de,pu=new gr;class Pn{constructor(t=0,e=0,i=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],c=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-De(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yg=0;const mu=new H,Ji=new gr,On=new de,Dr=new H,zs=new H,qg=new H,$g=new gr,gu=new H(1,0,0),_u=new H(0,1,0),vu=new H(0,0,1),xu={type:"added"},Kg={type:"removed"},Qi={type:"childadded",child:null},oo={type:"childremoved",child:null};class Ve extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new H,e=new Pn,i=new gr,s=new H(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new kt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Dr.copy(t):Dr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(zs,Dr,this.up):On.lookAt(Dr,zs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(On),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kg),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,qg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,$g,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),c=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new H(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new H,Bn=new H,lo=new H,zn=new H,ts=new H,es=new H,Mu=new H,co=new H,uo=new H,fo=new H,ho=new pe,po=new pe,mo=new pe;class Qe{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ln.subVectors(s,e),Bn.subVectors(i,e),lo.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(Bn),l=ln.dot(lo),u=Bn.dot(Bn),c=Bn.dot(lo),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(u*l-o*c)*d,_=(a*c-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ho.setScalar(0),po.setScalar(0),mo.setScalar(0),ho.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ho,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,i,s){return ln.subVectors(i,e),Bn.subVectors(t,e),ln.cross(Bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),ln.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,i),es.subVectors(r,i),co.subVectors(t,i);const l=ts.dot(co),u=es.dot(co);if(l<=0&&u<=0)return e.copy(i);uo.subVectors(t,s);const c=ts.dot(uo),f=es.dot(uo);if(c>=0&&f<=c)return e.copy(s);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(i).addScaledVector(ts,a);fo.subVectors(t,r);const p=ts.dot(fo),_=es.dot(fo);if(_>=0&&p<=_)return e.copy(r);const M=p*u-l*_;if(M<=0&&u>=0&&_<=0)return o=u/(u-_),e.copy(i).addScaledVector(es,o);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return Mu.subVectors(r,s),o=(f-c)/(f-c+(p-_)),e.copy(s).addScaledVector(Mu,o);const h=1/(m+M+d);return a=M*h,o=d*h,e.copy(i).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function go(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=ec(t,1),e=De(e,0,1),i=De(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=go(a,r,t+1/3),this.g=go(a,r,t),this.b=go(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const i=Nh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return Yt.fromWorkingColorSpace(Te.copy(this),t),Math.round(De(Te.r*255,0,255))*65536+Math.round(De(Te.g*255,0,255))*256+Math.round(De(Te.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,s=Te.g,r=Te.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ye){Yt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,s=Te.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Ir);const i=nr(li.h,Ir.h,e),s=nr(li.s,Ir.s,e),r=nr(li.l,Ir.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new qt;qt.NAMES=Nh;let jg=0;class vr extends Cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=$n(),this.name="",this.blending=_s,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Go,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ho&&(i.blendSrc=this.blendSrc),this.blendDst!==Go&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fi extends vr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new H,Ur=new Xt;class _n{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bl,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bl&&(t.usage=this.usage),t}}class Fh extends _n{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Oh extends _n{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends _n{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Zg=0;const je=new de,_o=new Ve,ns=new H,Xe=new _r,Hs=new _r,xe=new H;class xn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Oh:Fh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,i){return je.makeTranslation(t,e,i),this.applyMatrix4(je),this}scale(t,e,i){return je.makeScale(t,e,i),this.applyMatrix4(je),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Xe.min,Hs.min),Xe.expandByPoint(xe),xe.addVectors(Xe.max,Hs.max),Xe.expandByPoint(xe)):(Xe.expandByPoint(Hs.min),Xe.expandByPoint(Hs.max))}Xe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)xe.fromBufferAttribute(o,u),l&&(ns.fromBufferAttribute(t,u),xe.add(ns)),s=Math.max(s,i.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new H,l[U]=new H;const u=new H,c=new H,f=new H,d=new Xt,p=new Xt,_=new Xt,M=new H,m=new H;function h(U,E,v){u.fromBufferAttribute(i,U),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,v),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,v),c.sub(u),f.sub(u),p.sub(d),_.sub(d);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(M.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(R),o[U].add(M),o[E].add(M),o[v].add(M),l[U].add(m),l[E].add(m),l[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let U=0,E=A.length;U<E;++U){const v=A[U],R=v.start,I=v.count;for(let z=R,Z=R+I;z<Z;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new H,S=new H,F=new H,L=new H;function C(U){F.fromBufferAttribute(s,U),L.copy(F);const E=o[U];b.copy(E),b.sub(F.multiplyScalar(F.dot(E))).normalize(),S.crossVectors(L,E);const R=S.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,R)}for(let U=0,E=A.length;U<E;++U){const v=A[U],R=v.start,I=v.count;for(let z=R,Z=R+I;z<Z;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,u=new H,c=new H,f=new H;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new _n(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=t(l,i);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],f=r[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new de,Ai=new Uh,Nr=new nc,yu=new H,Fr=new H,Or=new H,Br=new H,vo=new H,zr=new H,Eu=new H,Hr=new H;class Ie extends Ve{constructor(t=new xn,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){zr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=o[l],f=r[l];c!==0&&(vo.fromBufferAttribute(f,t),a?zr.addScaledVector(vo,c):zr.addScaledVector(vo.sub(e),c))}e.add(zr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Nr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Nr,yu)===null||Ai.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(Su.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Su),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const m=d[_],h=a[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,F=b;S<F;S+=3){const L=o.getX(S),C=o.getX(S+1),U=o.getX(S+2);s=Gr(this,h,t,i,u,c,f,L,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,h=M;m<h;m+=3){const A=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=Gr(this,a,t,i,u,c,f,A,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const m=d[_],h=a[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,F=b;S<F;S+=3){const L=S,C=S+1,U=S+2;s=Gr(this,h,t,i,u,c,f,L,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,h=M;m<h;m+=3){const A=m,b=m+1,S=m+2;s=Gr(this,a,t,i,u,c,f,A,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Jg(n,t,e,i,s,r,a,o){let l;if(t.side===Ge?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===gi,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Hr);return u<e.near||u>e.far?null:{distance:u,point:Hr.clone(),object:n}}function Gr(n,t,e,i,s,r,a,o,l,u){n.getVertexPosition(o,Fr),n.getVertexPosition(l,Or),n.getVertexPosition(u,Br);const c=Jg(n,t,e,i,Fr,Or,Br,Eu);if(c){const f=new H;Qe.getBarycoord(Eu,Fr,Or,Br,f),s&&(c.uv=Qe.getInterpolatedAttribute(s,o,l,u,f,new Xt)),r&&(c.uv1=Qe.getInterpolatedAttribute(r,o,l,u,f,new Xt)),a&&(c.normal=Qe.getInterpolatedAttribute(a,o,l,u,f,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new H,materialIndex:0};Qe.getNormal(Fr,Or,Br,d.normal),c.face=d,c.barycoord=f}return c}class xr extends xn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(f,2));function _(M,m,h,A,b,S,F,L,C,U,E){const v=S/C,R=F/U,I=S/2,z=F/2,Z=L/2,tt=C+1,$=U+1;let et=0,V=0;const ht=new H;for(let Mt=0;Mt<$;Mt++){const Et=Mt*R-z;for(let Lt=0;Lt<tt;Lt++){const jt=Lt*v-I;ht[M]=jt*A,ht[m]=Et*b,ht[h]=Z,u.push(ht.x,ht.y,ht.z),ht[M]=0,ht[m]=0,ht[h]=L>0?1:-1,c.push(ht.x,ht.y,ht.z),f.push(Lt/C),f.push(1-Mt/U),et+=1}}for(let Mt=0;Mt<U;Mt++)for(let Et=0;Et<C;Et++){const Lt=d+Et+tt*Mt,jt=d+Et+tt*(Mt+1),nt=d+(Et+1)+tt*(Mt+1),lt=d+(Et+1)+tt*Mt;l.push(Lt,jt,lt),l.push(jt,nt,lt),V+=6}o.addGroup(p,V,E),p+=V,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Pe(n){const t={};for(let e=0;e<n.length;e++){const i=ws(n[e]);for(const s in i)t[s]=i[s]}return t}function Qg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const t_={clone:ws,merge:Pe};var e_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends vr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e_,this.fragmentShader=n_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Qg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zh extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new H,Tu=new Xt,bu=new Xt;class Je extends zh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,bu),e.subVectors(bu,Tu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/u,s*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class i_ extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new Je(is,ss,t,e);r.layers=this.layers,this.add(r);const a=new Je(is,ss,t,e);a.layers=this.layers,this.add(a);const o=new Je(is,ss,t,e);o.layers=this.layers,this.add(o);const l=new Je(is,ss,t,e);l.layers=this.layers,this.add(l);const u=new Je(is,ss,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const u of e)this.remove(u);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,c]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(f,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hh extends Fe{constructor(t,e,i,s,r,a,o,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,i,s,r,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class s_ extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Hh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xr(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:di});r.uniforms.tEquirect.value=e;const a=new Ie(s,r),o=e.minFilter;return e.minFilter===Oi&&(e.minFilter=wn),new i_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const xo=new H,r_=new H,a_=new kt;class Li{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=xo.subVectors(i,e).cross(r_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||a_.getNormalMatrix(t),s=this.coplanarPoint(xo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new nc,Vr=new H;class Gh{constructor(t=new Li,e=new Li,i=new Li,s=new Li,r=new Li,a=new Li){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],c=s[5],f=s[6],d=s[7],p=s[8],_=s[9],M=s[10],m=s[11],h=s[12],A=s[13],b=s[14],S=s[15];if(i[0].setComponents(l-r,d-u,m-p,S-h).normalize(),i[1].setComponents(l+r,d+u,m+p,S+h).normalize(),i[2].setComponents(l+a,d+c,m+_,S+A).normalize(),i[3].setComponents(l-a,d-c,m-_,S-A).normalize(),i[4].setComponents(l-o,d-f,m-M,S-b).normalize(),e===Yn)i[5].setComponents(l+o,d+f,m+M,S+b).normalize();else if(e===ma)i[5].setComponents(o,f,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function o_(n){const t=new WeakMap;function e(o,l){const u=o.array,c=o.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],M=f[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,f[d]=M)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const M=f[p];n.bufferSubData(u,M.start*c.BYTES_PER_ELEMENT,c,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:s,remove:r,update:a}}class Na extends xn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),u=o+1,c=l+1,f=t/o,d=e/l,p=[],_=[],M=[],m=[];for(let h=0;h<c;h++){const A=h*d-a;for(let b=0;b<u;b++){const S=b*f-r;_.push(S,-A,0),M.push(0,0,1),m.push(b/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const b=A+u*h,S=A+u*(h+1),F=A+1+u*(h+1),L=A+1+u*h;p.push(b,S,L),p.push(S,F,L)}this.setIndex(p),this.setAttribute("position",new we(_,3)),this.setAttribute("normal",new we(M,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.width,t.height,t.widthSegments,t.heightSegments)}}var l_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,av=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ov=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_v=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Av=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:l_,alphahash_pars_fragment:c_,alphamap_fragment:u_,alphamap_pars_fragment:f_,alphatest_fragment:h_,alphatest_pars_fragment:d_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:g_,batching_vertex:__,begin_vertex:v_,beginnormal_vertex:x_,bsdfs:M_,iridescence_fragment:S_,bumpmap_pars_fragment:y_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:A_,color_fragment:w_,color_pars_fragment:R_,color_pars_vertex:C_,color_vertex:P_,common:L_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:I_,displacementmap_pars_vertex:U_,displacementmap_vertex:N_,emissivemap_fragment:F_,emissivemap_pars_fragment:O_,colorspace_fragment:B_,colorspace_pars_fragment:z_,envmap_fragment:H_,envmap_common_pars_fragment:G_,envmap_pars_fragment:V_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:tv,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:Y_,fog_fragment:q_,fog_pars_fragment:$_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:j_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:J_,lights_pars_begin:Q_,lights_toon_fragment:ev,lights_toon_pars_fragment:nv,lights_phong_fragment:iv,lights_phong_pars_fragment:sv,lights_physical_fragment:rv,lights_physical_pars_fragment:av,lights_fragment_begin:ov,lights_fragment_maps:lv,lights_fragment_end:cv,logdepthbuf_fragment:uv,logdepthbuf_pars_fragment:fv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:dv,map_fragment:pv,map_pars_fragment:mv,map_particle_fragment:gv,map_particle_pars_fragment:_v,metalnessmap_fragment:vv,metalnessmap_pars_fragment:xv,morphinstance_vertex:Mv,morphcolor_vertex:Sv,morphnormal_vertex:yv,morphtarget_pars_vertex:Ev,morphtarget_vertex:Tv,normal_fragment_begin:bv,normal_fragment_maps:Av,normal_pars_fragment:wv,normal_pars_vertex:Rv,normal_vertex:Cv,normalmap_pars_fragment:Pv,clearcoat_normal_fragment_begin:Lv,clearcoat_normal_fragment_maps:Dv,clearcoat_pars_fragment:Iv,iridescence_pars_fragment:Uv,opaque_fragment:Nv,packing:Fv,premultiplied_alpha_fragment:Ov,project_vertex:Bv,dithering_fragment:zv,dithering_pars_fragment:Hv,roughnessmap_fragment:Gv,roughnessmap_pars_fragment:Vv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:Wv,shadowmap_vertex:Xv,shadowmask_pars_fragment:Yv,skinbase_vertex:qv,skinning_pars_vertex:$v,skinning_vertex:Kv,skinnormal_vertex:jv,specularmap_fragment:Zv,specularmap_pars_fragment:Jv,tonemapping_fragment:Qv,tonemapping_pars_fragment:t0,transmission_fragment:e0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:a0,background_vert:o0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:u0,cube_vert:f0,cube_frag:h0,depth_vert:d0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:_0,equirect_frag:v0,linedashed_vert:x0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:y0,meshlambert_vert:E0,meshlambert_frag:T0,meshmatcap_vert:b0,meshmatcap_frag:A0,meshnormal_vert:w0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:I0,meshtoon_frag:U0,points_vert:N0,points_frag:F0,shadow_vert:O0,shadow_frag:B0,sprite_vert:z0,sprite_frag:H0},mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},bn={basic:{uniforms:Pe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Pe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Pe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Pe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Pe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Pe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Pe([mt.points,mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Pe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Pe([mt.common,mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Pe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Pe([mt.sprite,mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Pe([mt.common,mt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Pe([mt.lights,mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};bn.physical={uniforms:Pe([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const kr={r:0,b:0,g:0},Ri=new Pn,G0=new de;function V0(n,t,e,i,s,r,a){const o=new qt(0);let l=r===!0?0:1,u,c,f=null,d=0,p=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?e:t).get(b)),b}function M(A){let b=!1;const S=_(A);S===null?h(o,l):S&&S.isColor&&(h(S,1),b=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,b){const S=_(b);S&&(S.isCubeTexture||S.mapping===Ia)?(c===void 0&&(c=new Ie(new xr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ws(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ri.copy(b.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(Ri)),c.material.toneMapped=Yt.getTransfer(S.colorSpace)!==se,(f!==S||d!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Ie(new Na(2,2),new _i({name:"BackgroundMaterial",uniforms:ws(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=Yt.getTransfer(S.colorSpace)!==se,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function h(A,b){A.getRGB(kr,Bh(n)),i.buffers.color.setClear(kr.r,kr.g,kr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),l=b,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:M,addToRenderList:m}}function k0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(v,R,I,z,Z){let tt=!1;const $=f(z,I,R);r!==$&&(r=$,u(r.object)),tt=p(v,z,I,Z),tt&&_(v,z,I,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,S(v,R,I,z),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return n.createVertexArray()}function u(v){return n.bindVertexArray(v)}function c(v){return n.deleteVertexArray(v)}function f(v,R,I){const z=I.wireframe===!0;let Z=i[v.id];Z===void 0&&(Z={},i[v.id]=Z);let tt=Z[R.id];tt===void 0&&(tt={},Z[R.id]=tt);let $=tt[z];return $===void 0&&($=d(l()),tt[z]=$),$}function d(v){const R=[],I=[],z=[];for(let Z=0;Z<e;Z++)R[Z]=0,I[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,R,I,z){const Z=r.attributes,tt=R.attributes;let $=0;const et=I.getAttributes();for(const V in et)if(et[V].location>=0){const Mt=Z[V];let Et=tt[V];if(Et===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Et=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Et=v.instanceColor)),Mt===void 0||Mt.attribute!==Et||Et&&Mt.data!==Et.data)return!0;$++}return r.attributesNum!==$||r.index!==z}function _(v,R,I,z){const Z={},tt=R.attributes;let $=0;const et=I.getAttributes();for(const V in et)if(et[V].location>=0){let Mt=tt[V];Mt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor));const Et={};Et.attribute=Mt,Mt&&Mt.data&&(Et.data=Mt.data),Z[V]=Et,$++}r.attributes=Z,r.attributesNum=$,r.index=z}function M(){const v=r.newAttributes;for(let R=0,I=v.length;R<I;R++)v[R]=0}function m(v){h(v,0)}function h(v,R){const I=r.newAttributes,z=r.enabledAttributes,Z=r.attributeDivisors;I[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),Z[v]!==R&&(n.vertexAttribDivisor(v,R),Z[v]=R)}function A(){const v=r.newAttributes,R=r.enabledAttributes;for(let I=0,z=R.length;I<z;I++)R[I]!==v[I]&&(n.disableVertexAttribArray(I),R[I]=0)}function b(v,R,I,z,Z,tt,$){$===!0?n.vertexAttribIPointer(v,R,I,Z,tt):n.vertexAttribPointer(v,R,I,z,Z,tt)}function S(v,R,I,z){M();const Z=z.attributes,tt=I.getAttributes(),$=R.defaultAttributeValues;for(const et in tt){const V=tt[et];if(V.location>=0){let ht=Z[et];if(ht===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){const Mt=ht.normalized,Et=ht.itemSize,Lt=t.get(ht);if(Lt===void 0)continue;const jt=Lt.buffer,nt=Lt.type,lt=Lt.bytesPerElement,yt=nt===n.INT||nt===n.UNSIGNED_INT||ht.gpuType===Kl;if(ht.isInterleavedBufferAttribute){const pt=ht.data,Ct=pt.stride,Ut=ht.offset;if(pt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)h(V.location+Ot,pt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let Ot=0;Ot<V.locationSize;Ot++)b(V.location+Ot,Et/V.locationSize,nt,Mt,Ct*lt,(Ut+Et/V.locationSize*Ot)*lt,yt)}else{if(ht.isInstancedBufferAttribute){for(let pt=0;pt<V.locationSize;pt++)h(V.location+pt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let pt=0;pt<V.locationSize;pt++)m(V.location+pt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let pt=0;pt<V.locationSize;pt++)b(V.location+pt,Et/V.locationSize,nt,Mt,Et*lt,Et/V.locationSize*pt*lt,yt)}}else if($!==void 0){const Mt=$[et];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(V.location,Mt);break;case 3:n.vertexAttrib3fv(V.location,Mt);break;case 4:n.vertexAttrib4fv(V.location,Mt);break;default:n.vertexAttrib1fv(V.location,Mt)}}}}A()}function F(){U();for(const v in i){const R=i[v];for(const I in R){const z=R[I];for(const Z in z)c(z[Z].object),delete z[Z];delete R[I]}delete i[v]}}function L(v){if(i[v.id]===void 0)return;const R=i[v.id];for(const I in R){const z=R[I];for(const Z in z)c(z[Z].object),delete z[Z];delete R[I]}delete i[v.id]}function C(v){for(const R in i){const I=i[R];if(I[v.id]===void 0)continue;const z=I[v.id];for(const Z in z)c(z[Z].object),delete z[Z];delete I[v.id]}}function U(){E(),a=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:A}}function W0(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function a(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function o(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];e.update(p,i,1)}function l(u,c,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],c[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let _=0;for(let M=0;M<f;M++)_+=c[M]*d[M];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function X0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==hn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Qn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!U)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:F,maxSamples:L}}function Y0(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Li,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?c(null):u();else{const A=r?0:i,b=A*4;let S=h.clippingState||null;l.value=S,S=c(_,d,b,p);for(let F=0;F!==b;++F)S[F]=e[F];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,d,p,_){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const h=p+M*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,S=p;b!==M;++b,S+=4)a.copy(f[b]).applyMatrix4(A,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function q0(n){let t=new WeakMap;function e(a,o){return o===Ko?a.mapping=Es:o===jo&&(a.mapping=Ts),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ko||o===jo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new s_(l.height);return u.fromEquirectangularTexture(n,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class $0 extends zh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hs=4,Au=[.125,.215,.35,.446,.526,.582],Ni=20,Mo=new $0,wu=new qt;let So=null,yo=0,Eo=0,To=!1;const Di=(1+Math.sqrt(5))/2,rs=1/Di,Ru=[new H(-Di,rs,0),new H(Di,rs,0),new H(-rs,0,Di),new H(rs,0,Di),new H(0,Di,-rs),new H(0,Di,rs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Cu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){So=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(So,yo,Eo),this._renderer.xr.enabled=To,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),So=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:mr,format:hn,colorSpace:Rs,depthBuffer:!1},s=Pu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(r)),this._blurMaterial=j0(r,t,e)}return s}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,i,s){const o=new Je(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(wu),c.toneMapping=pi,c.autoClear=!1;const p=new fi({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),_=new Ie(new xr,p);let M=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,M=!0):(p.color.copy(wu),M=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const b=this._cubeSize;Wr(s,A*b,h>2?b:0,b,b),c.setRenderTarget(s),M&&c.render(_,o),c.render(t,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Es||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Wr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Mo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ru[(s-r-1)%Ru.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ie(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),M=r/_,m=isFinite(r)?1+Math.floor(c*M):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const h=[];let A=0;for(let C=0;C<Ni;++C){const U=C/M,E=Math.exp(-U*U/2);h.push(E),C===0?A+=E:C<m&&(A+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-i;const S=this._sizeLods[s],F=3*S*(s>b-hs?s-b+hs:0),L=4*(this._cubeSize-S);Wr(e,F,L,3*S,2*S),l.setRenderTarget(e),l.render(f,Mo)}}function K0(n){const t=[],e=[],i=[];let s=n;const r=n-hs+1+Au.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-hs?l=Au[a-n+hs-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,M=3,m=2,h=1,A=new Float32Array(M*_*p),b=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let L=0;L<p;L++){const C=L%3*2/3-1,U=L>2?0:-1,E=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];A.set(E,M*_*L),b.set(d,m*_*L);const v=[L,L,L,L,L,L];S.set(v,h*_*L)}const F=new xn;F.setAttribute("position",new _n(A,M)),F.setAttribute("uv",new _n(b,m)),F.setAttribute("faceIndex",new _n(S,h)),t.push(F),s>hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Pu(n,t,e){const i=new Gi(n,t,e);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function j0(n,t,e){const i=new Float32Array(Ni),s=new H(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Lu(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Du(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ko||l===jo,c=l===Es||l===Ts;if(u||c){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Cu(n)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new Cu(n)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function J0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Q0(n,t,e,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const M=d.morphAttributes[_];for(let m=0,h=M.length;m<h;m++)t.remove(M[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const M=p[_];for(let m=0,h=M.length;m<h;m++)t.update(M[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let M=0;if(p!==null){const A=p.array;M=p.version;for(let b=0,S=A.length;b<S;b+=3){const F=A[b+0],L=A[b+1],C=A[b+2];d.push(F,L,L,C,C,F)}}else if(_!==void 0){const A=_.array;M=_.version;for(let b=0,S=A.length/3-1;b<S;b+=3){const F=b+0,L=b+1,C=b+2;d.push(F,L,L,C,C,F)}}else return;const m=new(Lh(d)?Oh:Fh)(d,1);m.version=M;const h=r.get(f);h&&t.remove(h),r.set(f,m)}function c(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function tx(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),e.update(p,i,1)}function u(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*a,_),e.update(p,i,_))}function c(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,i,1)}function f(d,p,_,M){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/a,p[h],M[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,M,0,_);let h=0;for(let A=0;A<_;A++)h+=p[A]*M[A];e.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function ex(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function nx(n,t,e){const i=new WeakMap,s=new pe;function r(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let v=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let F=o.attributes.position.count*S,L=1;F>t.maxTextureSize&&(L=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const C=new Float32Array(F*L*4*f),U=new Ih(C,F,L,f);U.type=Xn,U.needsUpdate=!0;const E=S*4;for(let R=0;R<f;R++){const I=h[R],z=A[R],Z=b[R],tt=F*L*4*R;for(let $=0;$<I.count;$++){const et=$*E;_===!0&&(s.fromBufferAttribute(I,$),C[tt+et+0]=s.x,C[tt+et+1]=s.y,C[tt+et+2]=s.z,C[tt+et+3]=0),M===!0&&(s.fromBufferAttribute(z,$),C[tt+et+4]=s.x,C[tt+et+5]=s.y,C[tt+et+6]=s.z,C[tt+et+7]=0),m===!0&&(s.fromBufferAttribute(Z,$),C[tt+et+8]=s.x,C[tt+et+9]=s.y,C[tt+et+10]=s.z,C[tt+et+11]=Z.itemSize===4?s.w:1)}}d={count:f,texture:U,size:new Xt(F,L)},i.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ix(n,t,e,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}class kh extends Fe{constructor(t,e,i,s,r,a,o,l,u,c=vs){if(c!==vs&&c!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===vs&&(i=Hi),i===void 0&&c===As&&(i=bs),super(null,s,r,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wh=new Fe,Iu=new kh(1,1),Xh=new Ih,Yh=new Vg,qh=new Hh,Uu=[],Nu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function Ps(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fa(n,t){let e=Nu[t];e===void 0&&(e=new Int32Array(t),Nu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function lx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;Bu.set(i),n.uniformMatrix2fv(this.addr,!1,Bu),ve(e,i)}}function cx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;Ou.set(i),n.uniformMatrix3fv(this.addr,!1,Ou),ve(e,i)}}function ux(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;Fu.set(i),n.uniformMatrix4fv(this.addr,!1,Fu),ve(e,i)}}function fx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function mx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function _x(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function xx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Iu.compareFunction=Ph,r=Iu):r=Wh,e.setTexture2D(t||r,s)}function Mx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yh,s)}function Sx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qh,s)}function yx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xh,s)}function Ex(n){switch(n){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return ux;case 5124:case 35670:return fx;case 35667:case 35671:return hx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return yx}}function Tx(n,t){n.uniform1fv(this.addr,t)}function bx(n,t){const e=Ps(t,this.size,2);n.uniform2fv(this.addr,e)}function Ax(n,t){const e=Ps(t,this.size,3);n.uniform3fv(this.addr,e)}function wx(n,t){const e=Ps(t,this.size,4);n.uniform4fv(this.addr,e)}function Rx(n,t){const e=Ps(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cx(n,t){const e=Ps(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Px(n,t){const e=Ps(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Lx(n,t){n.uniform1iv(this.addr,t)}function Dx(n,t){n.uniform2iv(this.addr,t)}function Ix(n,t){n.uniform3iv(this.addr,t)}function Ux(n,t){n.uniform4iv(this.addr,t)}function Nx(n,t){n.uniform1uiv(this.addr,t)}function Fx(n,t){n.uniform2uiv(this.addr,t)}function Ox(n,t){n.uniform3uiv(this.addr,t)}function Bx(n,t){n.uniform4uiv(this.addr,t)}function zx(n,t,e){const i=this.cache,s=t.length,r=Fa(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Wh,r[a])}function Hx(n,t,e){const i=this.cache,s=t.length,r=Fa(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yh,r[a])}function Gx(n,t,e){const i=this.cache,s=t.length,r=Fa(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qh,r[a])}function Vx(n,t,e){const i=this.cache,s=t.length,r=Fa(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xh,r[a])}function kx(n){switch(n){case 5126:return Tx;case 35664:return bx;case 35665:return Ax;case 35666:return wx;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Ix;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Fx;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Vx}}class Wx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ex(e.type)}}class Xx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kx(e.type)}}class Yx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function zu(n,t){n.seq.push(t),n.map[t.id]=t}function qx(n,t,e){const i=n.name,s=i.length;for(bo.lastIndex=0;;){const r=bo.exec(i),a=bo.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){zu(e,u===void 0?new Wx(o,n,t):new Xx(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Yx(o),zu(e,f)),e=f}}}class sa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qx(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Hu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const $x=37297;let Kx=0;function jx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Gu=new kt;function Zx(n){Yt._getMatrix(Gu,Yt.workingColorSpace,n);const t=`mat3( ${Gu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Ua:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jx(n.getShaderSource(t),a)}else return s}function Jx(n,t){const e=Zx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qx(n,t){let e;switch(t){case Qm:e="Linear";break;case tg:e="Reinhard";break;case eg:e="Cineon";break;case ng:e="ACESFilmic";break;case sg:e="AgX";break;case rg:e="Neutral";break;case ig:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new H;function tM(){Yt.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function nM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function iM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function qs(n){return n!==""}function ku(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(n){return n.replace(sM,aM)}const rM=new Map;function aM(n,t){let e=Wt[t];if(e===void 0){const i=rM.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wl(e)}const oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(oM,lM)}function lM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function uM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Es:case Ts:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function hM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zm:t="ENVMAP_BLENDING_MIX";break;case Jm:t="ENVMAP_BLENDING_ADD";break}return t}function dM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function pM(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=cM(e),u=uM(e),c=fM(e),f=hM(e),d=dM(e),p=eM(e),_=nM(r),M=s.createProgram();let m,h,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qs).join(`
`),h.length>0&&(h+=`
`)):(m=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),h=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==pi?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Jx("linearToOutputTexel",e.outputColorSpace),tM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),a=wl(a),a=ku(a,e),a=Wu(a,e),o=wl(o),o=ku(o,e),o=Wu(o,e),a=Xu(a),o=Xu(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=A+m+a,S=A+h+o,F=Hu(s,s.VERTEX_SHADER,b),L=Hu(s,s.FRAGMENT_SHADER,S);s.attachShader(M,F),s.attachShader(M,L),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(R){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(M).trim(),z=s.getShaderInfoLog(F).trim(),Z=s.getShaderInfoLog(L).trim();let tt=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,F,L);else{const et=Vu(s,F,"vertex"),V=Vu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+et+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||Z==="")&&($=!1);$&&(R.diagnostics={runnable:tt,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:Z,prefix:h}})}s.deleteShader(F),s.deleteShader(L),U=new sa(s,M),E=iM(s,M)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,$x)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=L,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _M(t),e.set(t,i)),i}}class _M{constructor(t){this.id=mM++,this.code=t,this.usedTimes=0}}function vM(n,t,e,i,s,r,a){const o=new ic,l=new gM,u=new Set,c=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,v,R,I,z){const Z=I.fog,tt=z.geometry,$=E.isMeshStandardMaterial?I.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),V=et&&et.mapping===Ia?et.image.height:null,ht=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Mt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Et=Mt!==void 0?Mt.length:0;let Lt=0;tt.morphAttributes.position!==void 0&&(Lt=1),tt.morphAttributes.normal!==void 0&&(Lt=2),tt.morphAttributes.color!==void 0&&(Lt=3);let jt,nt,lt,yt;if(ht){const ne=bn[ht];jt=ne.vertexShader,nt=ne.fragmentShader}else jt=E.vertexShader,nt=E.fragmentShader,l.update(E),lt=l.getVertexShaderID(E),yt=l.getFragmentShaderID(E);const pt=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Ut=z.isInstancedMesh===!0,Ot=z.isBatchedMesh===!0,ue=!!E.map,w=!!E.matcap,D=!!et,T=!!E.aoMap,it=!!E.lightMap,K=!!E.bumpMap,q=!!E.normalMap,Q=!!E.displacementMap,rt=!!E.emissiveMap,j=!!E.metalnessMap,x=!!E.roughnessMap,g=E.anisotropy>0,P=E.clearcoat>0,G=E.dispersion>0,W=E.iridescence>0,k=E.sheen>0,ft=E.transmission>0,at=g&&!!E.anisotropyMap,ct=P&&!!E.clearcoatMap,Pt=P&&!!E.clearcoatNormalMap,ot=P&&!!E.clearcoatRoughnessMap,gt=W&&!!E.iridescenceMap,Rt=W&&!!E.iridescenceThicknessMap,Dt=k&&!!E.sheenColorMap,dt=k&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,Bt=!!E.specularColorMap,ee=!!E.specularIntensityMap,N=ft&&!!E.transmissionMap,_t=ft&&!!E.thicknessMap,J=!!E.gradientMap,st=!!E.alphaMap,St=E.alphaTest>0,vt=!!E.alphaHash,Gt=!!E.extensions;let he=pi;E.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(he=n.toneMapping);const ye={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:jt,fragmentShader:nt,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&z._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&z.instanceColor!==null,instancingMorph:Ut&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Rs,alphaToCoverage:!!E.alphaToCoverage,map:ue,matcap:w,envMap:D,envMapMode:D&&et.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:it,bumpMap:K,normalMap:q,displacementMap:d&&Q,emissiveMap:rt,normalMapObjectSpace:q&&E.normalMapType===ug,normalMapTangentSpace:q&&E.normalMapType===cg,metalnessMap:j,roughnessMap:x,anisotropy:g,anisotropyMap:at,clearcoat:P,clearcoatMap:ct,clearcoatNormalMap:Pt,clearcoatRoughnessMap:ot,dispersion:G,iridescence:W,iridescenceMap:gt,iridescenceThicknessMap:Rt,sheen:k,sheenColorMap:Dt,sheenRoughnessMap:dt,specularMap:Nt,specularColorMap:Bt,specularIntensityMap:ee,transmission:ft,transmissionMap:N,thicknessMap:_t,gradientMap:J,opaque:E.transparent===!1&&E.blending===_s&&E.alphaToCoverage===!1,alphaMap:st,alphaTest:St,alphaHash:vt,combine:E.combine,mapUv:ue&&M(E.map.channel),aoMapUv:T&&M(E.aoMap.channel),lightMapUv:it&&M(E.lightMap.channel),bumpMapUv:K&&M(E.bumpMap.channel),normalMapUv:q&&M(E.normalMap.channel),displacementMapUv:Q&&M(E.displacementMap.channel),emissiveMapUv:rt&&M(E.emissiveMap.channel),metalnessMapUv:j&&M(E.metalnessMap.channel),roughnessMapUv:x&&M(E.roughnessMap.channel),anisotropyMapUv:at&&M(E.anisotropyMap.channel),clearcoatMapUv:ct&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&M(E.sheenRoughnessMap.channel),specularMapUv:Nt&&M(E.specularMap.channel),specularColorMapUv:Bt&&M(E.specularColorMap.channel),specularIntensityMapUv:ee&&M(E.specularIntensityMap.channel),transmissionMapUv:N&&M(E.transmissionMap.channel),thicknessMapUv:_t&&M(E.thicknessMap.channel),alphaMapUv:st&&M(E.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(q||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!tt.attributes.uv&&(ue||st),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Lt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:ue&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===se,decodeVideoTextureEmissive:rt&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===un,flipSided:E.side===Ge,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Gt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&E.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ye.vertexUv1s=u.has(1),ye.vertexUv2s=u.has(2),ye.vertexUv3s=u.has(3),u.clear(),ye}function h(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)v.push(R),v.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(A(v,E),b(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function A(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function b(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const v=_[E.type];let R;if(v){const I=bn[v];R=t_.clone(I.uniforms)}else R=E.uniforms;return R}function F(E,v){let R;for(let I=0,z=c.length;I<z;I++){const Z=c[I];if(Z.cacheKey===v){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new pM(n,v,E,r),c.push(R)),R}function L(E){if(--E.usedTimes===0){const v=c.indexOf(E);c[v]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:F,releaseProgram:L,releaseShaderCache:C,programs:c,dispose:U}}function xM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function MM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $u(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,d,p,_,M,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:M,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=M,h.group=m),t++,h}function o(f,d,p,_,M,m){const h=a(f,d,p,_,M,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,d,p,_,M,m){const h=a(f,d,p,_,M,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function u(f,d){e.length>1&&e.sort(f||MM),i.length>1&&i.sort(d||qu),s.length>1&&s.sort(d||qu)}function c(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:c,sort:u}}function SM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new $u,n.set(i,[a])):s>=r.length?(a=new $u,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function yM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new qt};break;case"SpotLight":e={position:new H,direction:new H,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function EM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let TM=0;function bM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function AM(n){const t=new yM,e=EM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const s=new H,r=new de,a=new de;function o(u){let c=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,M=0,m=0,h=0,A=0,b=0,S=0,F=0,L=0,C=0;u.sort(bM);for(let E=0,v=u.length;E<v;E++){const R=u[E],I=R.color,z=R.intensity,Z=R.distance,tt=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=I.r*z,f+=I.g*z,d+=I.b*z;else if(R.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(R.sh.coefficients[$],z);C++}else if(R.isDirectionalLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const et=R.shadow,V=e.get(R);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=tt,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=$,p++}else if(R.isSpotLight){const $=t.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(I).multiplyScalar(z),$.distance=Z,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,i.spot[M]=$;const et=R.shadow;if(R.map&&(i.spotLightMap[F]=R.map,F++,et.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[M]=et.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=tt,S++}M++}else if(R.isRectAreaLight){const $=t.get(R);$.color.copy(I).multiplyScalar(z),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=$,m++}else if(R.isPointLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const et=R.shadow,V=e.get(R);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,V.shadowCameraNear=et.camera.near,V.shadowCameraFar=et.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=tt,i.pointShadowMatrix[_]=R.shadow.matrix,b++}i.point[_]=$,_++}else if(R.isHemisphereLight){const $=t.get(R);$.skyColor.copy(R.color).multiplyScalar(z),$.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[h]=$,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==M||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==A||U.numPointShadows!==b||U.numSpotShadows!==S||U.numSpotMaps!==F||U.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+F-L,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,U.directionalLength=p,U.pointLength=_,U.spotLength=M,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=A,U.numPointShadows=b,U.numSpotShadows=S,U.numSpotMaps=F,U.numLightProbes=C,i.version=TM++)}function l(u,c){let f=0,d=0,p=0,_=0,M=0;const m=c.matrixWorldInverse;for(let h=0,A=u.length;h<A;h++){const b=u[h];if(b.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(b.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Ku(n){const t=new AM(n),e=[],i=[];function s(c){u.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function a(c){i.push(c)}function o(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function wM(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ku(n),t.set(s,[o])):r>=a.length?(o=new Ku(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class RM extends vr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CM extends vr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DM(n,t,e){let i=new Gh;const s=new Xt,r=new Xt,a=new pe,o=new RM({depthPacking:lg}),l=new CM,u={},c=e.maxTextureSize,f={[gi]:Ge,[Ge]:gi,[un]:un},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:PM,fragmentShader:LM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new xn;_.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ie(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let h=this.type;this.render=function(L,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(di),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=h!==Hn&&this.type===Hn,Z=h===Hn&&this.type!==Hn;for(let tt=0,$=L.length;tt<$;tt++){const et=L[tt],V=et.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ht=V.getFrameExtents();if(s.multiply(ht),r.copy(V.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ht.x),s.x=r.x*ht.x,V.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ht.y),s.y=r.y*ht.y,V.mapSize.y=r.y)),V.map===null||z===!0||Z===!0){const Et=this.type!==Hn?{minFilter:gn,magFilter:gn}:{};V.map!==null&&V.map.dispose(),V.map=new Gi(s.x,s.y,Et),V.map.texture.name=et.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Mt=V.getViewportCount();for(let Et=0;Et<Mt;Et++){const Lt=V.getViewport(Et);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),I.viewport(a),V.updateMatrices(et,Et),i=V.getFrustum(),S(C,U,V.camera,et,this.type)}V.isPointLightShadow!==!0&&this.type===Hn&&A(V,U),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,v,R)};function A(L,C){const U=t.update(M);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Gi(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(C,null,U,d,M,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(C,null,U,p,M,null)}function b(L,C,U,E){let v=null;const R=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)v=R;else if(v=U.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const I=v.uuid,z=C.uuid;let Z=u[I];Z===void 0&&(Z={},u[I]=Z);let tt=Z[z];tt===void 0&&(tt=v.clone(),Z[z]=tt,C.addEventListener("dispose",F)),v=tt}if(v.visible=C.visible,v.wireframe=C.wireframe,E===Hn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:f[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=n.properties.get(v);I.light=U}return v}function S(L,C,U,E,v){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&v===Hn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const z=t.update(L),Z=L.material;if(Array.isArray(Z)){const tt=z.groups;for(let $=0,et=tt.length;$<et;$++){const V=tt[$],ht=Z[V.materialIndex];if(ht&&ht.visible){const Mt=b(L,ht,E,v);L.onBeforeShadow(n,L,C,U,z,Mt,V),n.renderBufferDirect(U,null,z,Mt,L,V),L.onAfterShadow(n,L,C,U,z,Mt,V)}}}else if(Z.visible){const tt=b(L,Z,E,v);L.onBeforeShadow(n,L,C,U,z,tt,null),n.renderBufferDirect(U,null,z,tt,L,null),L.onAfterShadow(n,L,C,U,z,tt,null)}}const I=L.children;for(let z=0,Z=I.length;z<Z;z++)S(I[z],C,U,E,v)}function F(L){L.target.removeEventListener("dispose",F);for(const U in u){const E=u[U],v=L.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const IM={[Vo]:ko,[Wo]:qo,[Xo]:$o,[ys]:Yo,[ko]:Vo,[qo]:Wo,[$o]:Xo,[Yo]:ys};function UM(n,t){function e(){let N=!1;const _t=new pe;let J=null;const st=new pe(0,0,0,0);return{setMask:function(St){J!==St&&!N&&(n.colorMask(St,St,St,St),J=St)},setLocked:function(St){N=St},setClear:function(St,vt,Gt,he,ye){ye===!0&&(St*=he,vt*=he,Gt*=he),_t.set(St,vt,Gt,he),st.equals(_t)===!1&&(n.clearColor(St,vt,Gt,he),st.copy(_t))},reset:function(){N=!1,J=null,st.set(-1,0,0,0)}}}function i(){let N=!1,_t=!1,J=null,st=null,St=null;return{setReversed:function(vt){if(_t!==vt){const Gt=t.get("EXT_clip_control");_t?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const he=St;St=null,this.setClear(he)}_t=vt},getReversed:function(){return _t},setTest:function(vt){vt?pt(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(vt){J!==vt&&!N&&(n.depthMask(vt),J=vt)},setFunc:function(vt){if(_t&&(vt=IM[vt]),st!==vt){switch(vt){case Vo:n.depthFunc(n.NEVER);break;case ko:n.depthFunc(n.ALWAYS);break;case Wo:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case Yo:n.depthFunc(n.GEQUAL);break;case qo:n.depthFunc(n.GREATER);break;case $o:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}st=vt}},setLocked:function(vt){N=vt},setClear:function(vt){St!==vt&&(_t&&(vt=1-vt),n.clearDepth(vt),St=vt)},reset:function(){N=!1,J=null,st=null,St=null,_t=!1}}}function s(){let N=!1,_t=null,J=null,st=null,St=null,vt=null,Gt=null,he=null,ye=null;return{setTest:function(ne){N||(ne?pt(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(ne){_t!==ne&&!N&&(n.stencilMask(ne),_t=ne)},setFunc:function(ne,sn,Ln){(J!==ne||st!==sn||St!==Ln)&&(n.stencilFunc(ne,sn,Ln),J=ne,st=sn,St=Ln)},setOp:function(ne,sn,Ln){(vt!==ne||Gt!==sn||he!==Ln)&&(n.stencilOp(ne,sn,Ln),vt=ne,Gt=sn,he=Ln)},setLocked:function(ne){N=ne},setClear:function(ne){ye!==ne&&(n.clearStencil(ne),ye=ne)},reset:function(){N=!1,_t=null,J=null,st=null,St=null,vt=null,Gt=null,he=null,ye=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,p=[],_=null,M=!1,m=null,h=null,A=null,b=null,S=null,F=null,L=null,C=new qt(0,0,0),U=0,E=!1,v=null,R=null,I=null,z=null,Z=null;const tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,et=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=et>=2);let ht=null,Mt={};const Et=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),jt=new pe().fromArray(Et),nt=new pe().fromArray(Lt);function lt(N,_t,J,st){const St=new Uint8Array(4),vt=n.createTexture();n.bindTexture(N,vt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<J;Gt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(_t+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return vt}const yt={};yt[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(n.DEPTH_TEST),a.setFunc(ys),K(!1),q(tu),pt(n.CULL_FACE),T(di);function pt(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function Ct(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Ut(N,_t){return f[N]!==_t?(n.bindFramebuffer(N,_t),f[N]=_t,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_t),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function Ot(N,_t){let J=p,st=!1;if(N){J=d.get(_t),J===void 0&&(J=[],d.set(_t,J));const St=N.textures;if(J.length!==St.length||J[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Gt=St.length;vt<Gt;vt++)J[vt]=n.COLOR_ATTACHMENT0+vt;J.length=St.length,st=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,st=!0);st&&n.drawBuffers(J)}function ue(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const w={[Ui]:n.FUNC_ADD,[Um]:n.FUNC_SUBTRACT,[Nm]:n.FUNC_REVERSE_SUBTRACT};w[Fm]=n.MIN,w[Om]=n.MAX;const D={[Bm]:n.ZERO,[zm]:n.ONE,[Hm]:n.SRC_COLOR,[Ho]:n.SRC_ALPHA,[Ym]:n.SRC_ALPHA_SATURATE,[Wm]:n.DST_COLOR,[Vm]:n.DST_ALPHA,[Gm]:n.ONE_MINUS_SRC_COLOR,[Go]:n.ONE_MINUS_SRC_ALPHA,[Xm]:n.ONE_MINUS_DST_COLOR,[km]:n.ONE_MINUS_DST_ALPHA,[qm]:n.CONSTANT_COLOR,[$m]:n.ONE_MINUS_CONSTANT_COLOR,[Km]:n.CONSTANT_ALPHA,[jm]:n.ONE_MINUS_CONSTANT_ALPHA};function T(N,_t,J,st,St,vt,Gt,he,ye,ne){if(N===di){M===!0&&(Ct(n.BLEND),M=!1);return}if(M===!1&&(pt(n.BLEND),M=!0),N!==Im){if(N!==m||ne!==E){if((h!==Ui||S!==Ui)&&(n.blendEquation(n.FUNC_ADD),h=Ui,S=Ui),ne)switch(N){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pa:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,F=null,L=null,C.set(0,0,0),U=0,m=N,E=ne}return}St=St||_t,vt=vt||J,Gt=Gt||st,(_t!==h||St!==S)&&(n.blendEquationSeparate(w[_t],w[St]),h=_t,S=St),(J!==A||st!==b||vt!==F||Gt!==L)&&(n.blendFuncSeparate(D[J],D[st],D[vt],D[Gt]),A=J,b=st,F=vt,L=Gt),(he.equals(C)===!1||ye!==U)&&(n.blendColor(he.r,he.g,he.b,ye),C.copy(he),U=ye),m=N,E=!1}function it(N,_t){N.side===un?Ct(n.CULL_FACE):pt(n.CULL_FACE);let J=N.side===Ge;_t&&(J=!J),K(J),N.blending===_s&&N.transparent===!1?T(di):T(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const st=N.stencilWrite;o.setTest(st),st&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){v!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),v=N)}function q(N){N!==Pm?(pt(n.CULL_FACE),N!==R&&(N===tu?n.cullFace(n.BACK):N===Lm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),R=N}function Q(N){N!==I&&($&&n.lineWidth(N),I=N)}function rt(N,_t,J){N?(pt(n.POLYGON_OFFSET_FILL),(z!==_t||Z!==J)&&(n.polygonOffset(_t,J),z=_t,Z=J)):Ct(n.POLYGON_OFFSET_FILL)}function j(N){N?pt(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function x(N){N===void 0&&(N=n.TEXTURE0+tt-1),ht!==N&&(n.activeTexture(N),ht=N)}function g(N,_t,J){J===void 0&&(ht===null?J=n.TEXTURE0+tt-1:J=ht);let st=Mt[J];st===void 0&&(st={type:void 0,texture:void 0},Mt[J]=st),(st.type!==N||st.texture!==_t)&&(ht!==J&&(n.activeTexture(J),ht=J),n.bindTexture(N,_t||yt[N]),st.type=N,st.texture=_t)}function P(){const N=Mt[ht];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(N){jt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),jt.copy(N))}function dt(N){nt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),nt.copy(N))}function Nt(N,_t){let J=u.get(_t);J===void 0&&(J=new WeakMap,u.set(_t,J));let st=J.get(N);st===void 0&&(st=n.getUniformBlockIndex(_t,N.name),J.set(N,st))}function Bt(N,_t){const st=u.get(_t).get(N);l.get(_t)!==st&&(n.uniformBlockBinding(_t,st,N.__bindingPointIndex),l.set(_t,st))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ht=null,Mt={},f={},d=new WeakMap,p=[],_=null,M=!1,m=null,h=null,A=null,b=null,S=null,F=null,L=null,C=new qt(0,0,0),U=0,E=!1,v=null,R=null,I=null,z=null,Z=null,jt.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:Ct,bindFramebuffer:Ut,drawBuffers:Ot,useProgram:ue,setBlending:T,setMaterial:it,setFlipSided:K,setCullFace:q,setLineWidth:Q,setPolygonOffset:rt,setScissorTest:j,activeTexture:x,bindTexture:g,unbindTexture:P,compressedTexImage2D:G,compressedTexImage3D:W,texImage2D:gt,texImage3D:Rt,updateUBOMapping:Nt,uniformBlockBinding:Bt,texStorage2D:Pt,texStorage3D:ot,texSubImage2D:k,texSubImage3D:ft,compressedTexSubImage2D:at,compressedTexSubImage3D:ct,scissor:Dt,viewport:dt,reset:ee}}function ju(n,t,e,i){const s=NM(i);switch(e){case Eh:return n*t;case bh:return n*t;case Ah:return n*t*2;case wh:return n*t/s.components*s.byteLength;case Jl:return n*t/s.components*s.byteLength;case Rh:return n*t*2/s.components*s.byteLength;case Ql:return n*t*2/s.components*s.byteLength;case Th:return n*t*3/s.components*s.byteLength;case hn:return n*t*4/s.components*s.byteLength;case tc:return n*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(n,16)*Math.max(t,8)/4;case Qo:case el:return Math.max(n,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ia:case Ml:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ch:case yl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case El:case Tl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function NM(n){switch(n){case Qn:case Mh:return{byteLength:1,components:1};case ur:case Sh:case mr:return{byteLength:2,components:1};case jl:case Zl:return{byteLength:2,components:4};case Hi:case Kl:case Xn:return{byteLength:4,components:1};case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function FM(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xt,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return p?new OffscreenCanvas(x,g):ga("canvas")}function M(x,g,P){let G=1;const W=j(x);if((W.width>P||W.height>P)&&(G=P/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const k=Math.floor(G*W.width),ft=Math.floor(G*W.height);f===void 0&&(f=_(k,ft));const at=g?_(k,ft):f;return at.width=k,at.height=ft,at.getContext("2d").drawImage(x,0,0,k,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+ft+")."),at}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),x;return x}function m(x){return x.generateMipmaps}function h(x){n.generateMipmap(x)}function A(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(x,g,P,G,W=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let k=g;if(g===n.RED&&(P===n.FLOAT&&(k=n.R32F),P===n.HALF_FLOAT&&(k=n.R16F),P===n.UNSIGNED_BYTE&&(k=n.R8)),g===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.R8UI),P===n.UNSIGNED_SHORT&&(k=n.R16UI),P===n.UNSIGNED_INT&&(k=n.R32UI),P===n.BYTE&&(k=n.R8I),P===n.SHORT&&(k=n.R16I),P===n.INT&&(k=n.R32I)),g===n.RG&&(P===n.FLOAT&&(k=n.RG32F),P===n.HALF_FLOAT&&(k=n.RG16F),P===n.UNSIGNED_BYTE&&(k=n.RG8)),g===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RG8UI),P===n.UNSIGNED_SHORT&&(k=n.RG16UI),P===n.UNSIGNED_INT&&(k=n.RG32UI),P===n.BYTE&&(k=n.RG8I),P===n.SHORT&&(k=n.RG16I),P===n.INT&&(k=n.RG32I)),g===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RGB8UI),P===n.UNSIGNED_SHORT&&(k=n.RGB16UI),P===n.UNSIGNED_INT&&(k=n.RGB32UI),P===n.BYTE&&(k=n.RGB8I),P===n.SHORT&&(k=n.RGB16I),P===n.INT&&(k=n.RGB32I)),g===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),P===n.UNSIGNED_INT&&(k=n.RGBA32UI),P===n.BYTE&&(k=n.RGBA8I),P===n.SHORT&&(k=n.RGBA16I),P===n.INT&&(k=n.RGBA32I)),g===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),g===n.RGBA){const ft=W?Ua:Yt.getTransfer(G);P===n.FLOAT&&(k=n.RGBA32F),P===n.HALF_FLOAT&&(k=n.RGBA16F),P===n.UNSIGNED_BYTE&&(k=ft===se?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function S(x,g){let P;return x?g===null||g===Hi||g===bs?P=n.DEPTH24_STENCIL8:g===Xn?P=n.DEPTH32F_STENCIL8:g===ur&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Hi||g===bs?P=n.DEPTH_COMPONENT24:g===Xn?P=n.DEPTH_COMPONENT32F:g===ur&&(P=n.DEPTH_COMPONENT16),P}function F(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==gn&&x.minFilter!==wn?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function L(x){const g=x.target;g.removeEventListener("dispose",L),U(g),g.isVideoTexture&&c.delete(g)}function C(x){const g=x.target;g.removeEventListener("dispose",C),v(g)}function U(x){const g=i.get(x);if(g.__webglInit===void 0)return;const P=x.source,G=d.get(P);if(G){const W=G[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&E(x),Object.keys(G).length===0&&d.delete(P)}i.remove(x)}function E(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const P=x.source,G=d.get(P);delete G[g.__cacheKey],a.memory.textures--}function v(x){const g=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let W=0;W<g.__webglFramebuffer[G].length;W++)n.deleteFramebuffer(g.__webglFramebuffer[G][W]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=x.textures;for(let G=0,W=P.length;G<W;G++){const k=i.get(P[G]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(P[G])}i.remove(x)}let R=0;function I(){R=0}function z(){const x=R;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),R+=1,x}function Z(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function tt(x,g){const P=i.get(x);if(x.isVideoTexture&&Q(x),x.isRenderTargetTexture===!1&&x.version>0&&P.__version!==x.version){const G=x.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(P,x,g);return}}e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+g)}function $(x,g){const P=i.get(x);if(x.version>0&&P.__version!==x.version){nt(P,x,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+g)}function et(x,g){const P=i.get(x);if(x.version>0&&P.__version!==x.version){nt(P,x,g);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+g)}function V(x,g){const P=i.get(x);if(x.version>0&&P.__version!==x.version){lt(P,x,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+g)}const ht={[Zo]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},Mt={[gn]:n.NEAREST,[ag]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Ja]:n.LINEAR_MIPMAP_NEAREST,[Oi]:n.LINEAR_MIPMAP_LINEAR},Et={[fg]:n.NEVER,[_g]:n.ALWAYS,[hg]:n.LESS,[Ph]:n.LEQUAL,[dg]:n.EQUAL,[gg]:n.GEQUAL,[pg]:n.GREATER,[mg]:n.NOTEQUAL};function Lt(x,g){if(g.type===Xn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===wn||g.magFilter===Ja||g.magFilter===br||g.magFilter===Oi||g.minFilter===wn||g.minFilter===Ja||g.minFilter===br||g.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ht[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ht[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ht[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Mt[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Mt[g.minFilter]),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Et[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===gn||g.minFilter!==br&&g.minFilter!==Oi||g.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function jt(x,g){let P=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",L));const G=g.source;let W=d.get(G);W===void 0&&(W={},d.set(G,W));const k=Z(g);if(k!==x.__cacheKey){W[k]===void 0&&(W[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),W[k].usedTimes++;const ft=W[x.__cacheKey];ft!==void 0&&(W[x.__cacheKey].usedTimes--,ft.usedTimes===0&&E(g)),x.__cacheKey=k,x.__webglTexture=W[k].texture}return P}function nt(x,g,P){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);const W=jt(x,g),k=g.source;e.bindTexture(G,x.__webglTexture,n.TEXTURE0+P);const ft=i.get(k);if(k.version!==ft.__version||W===!0){e.activeTexture(n.TEXTURE0+P);const at=Yt.getPrimaries(Yt.workingColorSpace),ct=g.colorSpace===hi?null:Yt.getPrimaries(g.colorSpace),Pt=g.colorSpace===hi||at===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let ot=M(g.image,!1,s.maxTextureSize);ot=rt(g,ot);const gt=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type);let Dt=b(g.internalFormat,gt,Rt,g.colorSpace,g.isVideoTexture);Lt(G,g);let dt;const Nt=g.mipmaps,Bt=g.isVideoTexture!==!0,ee=ft.__version===void 0||W===!0,N=k.dataReady,_t=F(g,ot);if(g.isDepthTexture)Dt=S(g.format===As,g.type),ee&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Dt,ot.width,ot.height,0,gt,Rt,null));else if(g.isDataTexture)if(Nt.length>0){Bt&&ee&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,Nt[0].width,Nt[0].height);for(let J=0,st=Nt.length;J<st;J++)dt=Nt[J],Bt?N&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,dt.width,dt.height,gt,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,J,Dt,dt.width,dt.height,0,gt,Rt,dt.data);g.generateMipmaps=!1}else Bt?(ee&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,ot.width,ot.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,gt,Rt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,ot.width,ot.height,0,gt,Rt,ot.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Bt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Dt,Nt[0].width,Nt[0].height,ot.depth);for(let J=0,st=Nt.length;J<st;J++)if(dt=Nt[J],g.format!==hn)if(gt!==null)if(Bt){if(N)if(g.layerUpdates.size>0){const St=ju(dt.width,dt.height,g.format,g.type);for(const vt of g.layerUpdates){const Gt=dt.data.subarray(vt*St/dt.data.BYTES_PER_ELEMENT,(vt+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,vt,dt.width,dt.height,1,gt,Gt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,ot.depth,gt,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Dt,dt.width,dt.height,ot.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,ot.depth,gt,Rt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,Dt,dt.width,dt.height,ot.depth,0,gt,Rt,dt.data)}else{Bt&&ee&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,Nt[0].width,Nt[0].height);for(let J=0,st=Nt.length;J<st;J++)dt=Nt[J],g.format!==hn?gt!==null?Bt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,dt.width,dt.height,gt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,Dt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?N&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,dt.width,dt.height,gt,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,J,Dt,dt.width,dt.height,0,gt,Rt,dt.data)}else if(g.isDataArrayTexture)if(Bt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Dt,ot.width,ot.height,ot.depth),N)if(g.layerUpdates.size>0){const J=ju(ot.width,ot.height,g.format,g.type);for(const st of g.layerUpdates){const St=ot.data.subarray(st*J/ot.data.BYTES_PER_ELEMENT,(st+1)*J/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,ot.width,ot.height,1,gt,Rt,St)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,gt,Rt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,gt,Rt,ot.data);else if(g.isData3DTexture)Bt?(ee&&e.texStorage3D(n.TEXTURE_3D,_t,Dt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,gt,Rt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,gt,Rt,ot.data);else if(g.isFramebufferTexture){if(ee)if(Bt)e.texStorage2D(n.TEXTURE_2D,_t,Dt,ot.width,ot.height);else{let J=ot.width,st=ot.height;for(let St=0;St<_t;St++)e.texImage2D(n.TEXTURE_2D,St,Dt,J,st,0,gt,Rt,null),J>>=1,st>>=1}}else if(Nt.length>0){if(Bt&&ee){const J=j(Nt[0]);e.texStorage2D(n.TEXTURE_2D,_t,Dt,J.width,J.height)}for(let J=0,st=Nt.length;J<st;J++)dt=Nt[J],Bt?N&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,gt,Rt,dt):e.texImage2D(n.TEXTURE_2D,J,Dt,gt,Rt,dt);g.generateMipmaps=!1}else if(Bt){if(ee){const J=j(ot);e.texStorage2D(n.TEXTURE_2D,_t,Dt,J.width,J.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Rt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Dt,gt,Rt,ot);m(g)&&h(G),ft.__version=k.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function lt(x,g,P){if(g.image.length!==6)return;const G=jt(x,g),W=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+P);const k=i.get(W);if(W.version!==k.__version||G===!0){e.activeTexture(n.TEXTURE0+P);const ft=Yt.getPrimaries(Yt.workingColorSpace),at=g.colorSpace===hi?null:Yt.getPrimaries(g.colorSpace),ct=g.colorSpace===hi||ft===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Pt=g.isCompressedTexture||g.image[0].isCompressedTexture,ot=g.image[0]&&g.image[0].isDataTexture,gt=[];for(let st=0;st<6;st++)!Pt&&!ot?gt[st]=M(g.image[st],!0,s.maxCubemapSize):gt[st]=ot?g.image[st].image:g.image[st],gt[st]=rt(g,gt[st]);const Rt=gt[0],Dt=r.convert(g.format,g.colorSpace),dt=r.convert(g.type),Nt=b(g.internalFormat,Dt,dt,g.colorSpace),Bt=g.isVideoTexture!==!0,ee=k.__version===void 0||G===!0,N=W.dataReady;let _t=F(g,Rt);Lt(n.TEXTURE_CUBE_MAP,g);let J;if(Pt){Bt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Nt,Rt.width,Rt.height);for(let st=0;st<6;st++){J=gt[st].mipmaps;for(let St=0;St<J.length;St++){const vt=J[St];g.format!==hn?Dt!==null?Bt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,vt.width,vt.height,Dt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Nt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,vt.width,vt.height,Dt,dt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Nt,vt.width,vt.height,0,Dt,dt,vt.data)}}}else{if(J=g.mipmaps,Bt&&ee){J.length>0&&_t++;const st=j(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Nt,st.width,st.height)}for(let st=0;st<6;st++)if(ot){Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,gt[st].width,gt[st].height,Dt,dt,gt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Nt,gt[st].width,gt[st].height,0,Dt,dt,gt[st].data);for(let St=0;St<J.length;St++){const Gt=J[St].image[st].image;Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,Gt.width,Gt.height,Dt,dt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Nt,Gt.width,Gt.height,0,Dt,dt,Gt.data)}}else{Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,dt,gt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Nt,Dt,dt,gt[st]);for(let St=0;St<J.length;St++){const vt=J[St];Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,Dt,dt,vt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Nt,Dt,dt,vt.image[st])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),k.__version=W.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function yt(x,g,P,G,W,k){const ft=r.convert(P.format,P.colorSpace),at=r.convert(P.type),ct=b(P.internalFormat,ft,at,P.colorSpace),Pt=i.get(g),ot=i.get(P);if(ot.__renderTarget=g,!Pt.__hasExternalTextures){const gt=Math.max(1,g.width>>k),Rt=Math.max(1,g.height>>k);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,k,ct,gt,Rt,g.depth,0,ft,at,null):e.texImage2D(W,k,ct,gt,Rt,0,ft,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),q(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,W,ot.__webglTexture,0,K(g)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,W,ot.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(x,g,P){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer){const G=g.depthTexture,W=G&&G.isDepthTexture?G.type:null,k=S(g.stencilBuffer,W),ft=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=K(g);q(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,k,g.width,g.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,k,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,x)}else{const G=g.textures;for(let W=0;W<G.length;W++){const k=G[W],ft=r.convert(k.format,k.colorSpace),at=r.convert(k.type),ct=b(k.internalFormat,ft,at,k.colorSpace),Pt=K(g);P&&q(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,ct,g.width,g.height):q(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,ct,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ct,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(g.depthTexture);G.__renderTarget=g,(!G.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),tt(g.depthTexture,0);const W=G.__webglTexture,k=K(g);if(g.depthTexture.format===vs)q(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(g.depthTexture.format===As)q(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ut(x){const g=i.get(x),P=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){const G=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=G}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Ct(g.__webglFramebuffer,x)}else if(P){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),pt(g.__webglDepthbuffer[G],x,!1);else{const W=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),pt(g.__webglDepthbuffer,x,!1);else{const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,W)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(x,g,P){const G=i.get(x);g!==void 0&&yt(G.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Ut(x)}function ue(x){const g=x.texture,P=i.get(x),G=i.get(g);x.addEventListener("dispose",C);const W=x.textures,k=x.isWebGLCubeRenderTarget===!0,ft=W.length>1;if(ft||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,a.memory.textures++),k){P.__webglFramebuffer=[];for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[at]=[];for(let ct=0;ct<g.mipmaps.length;ct++)P.__webglFramebuffer[at][ct]=n.createFramebuffer()}else P.__webglFramebuffer[at]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let at=0;at<g.mipmaps.length;at++)P.__webglFramebuffer[at]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ft)for(let at=0,ct=W.length;at<ct;at++){const Pt=i.get(W[at]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&q(x)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let at=0;at<W.length;at++){const ct=W[at];P.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[at]);const Pt=r.convert(ct.format,ct.colorSpace),ot=r.convert(ct.type),gt=b(ct.internalFormat,Pt,ot,ct.colorSpace,x.isXRRenderTarget===!0),Rt=K(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,gt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,P.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(P.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,g);for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)yt(P.__webglFramebuffer[at][ct],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else yt(P.__webglFramebuffer[at],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(g)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let at=0,ct=W.length;at<ct;at++){const Pt=W[at],ot=i.get(Pt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),Lt(n.TEXTURE_2D,Pt),yt(P.__webglFramebuffer,x,Pt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(Pt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(at=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,G.__webglTexture),Lt(at,g),g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)yt(P.__webglFramebuffer[ct],x,g,n.COLOR_ATTACHMENT0,at,ct);else yt(P.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,at,0);m(g)&&h(at),e.unbindTexture()}x.depthBuffer&&Ut(x)}function w(x){const g=x.textures;for(let P=0,G=g.length;P<G;P++){const W=g[P];if(m(W)){const k=A(x),ft=i.get(W).__webglTexture;e.bindTexture(k,ft),h(k),e.unbindTexture()}}}const D=[],T=[];function it(x){if(x.samples>0){if(q(x)===!1){const g=x.textures,P=x.width,G=x.height;let W=n.COLOR_BUFFER_BIT;const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(x),at=g.length>1;if(at)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);const Pt=i.get(g[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,P,G,0,0,P,G,W,n.NEAREST),l===!0&&(D.length=0,T.length=0,D.push(n.COLOR_ATTACHMENT0+ct),x.depthBuffer&&x.resolveDepthBuffer===!1&&(D.push(k),T.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);const Pt=i.get(g[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const g=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function K(x){return Math.min(s.maxSamples,x.samples)}function q(x){const g=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Q(x){const g=a.render.frame;c.get(x)!==g&&(c.set(x,g),x.update())}function rt(x,g){const P=x.colorSpace,G=x.format,W=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||P!==Rs&&P!==hi&&(Yt.getTransfer(P)===se?(G!==hn||W!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function j(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(u.width=x.naturalWidth||x.width,u.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(u.width=x.displayWidth,u.height=x.displayHeight):(u.width=x.width,u.height=x.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=tt,this.setTexture2DArray=$,this.setTexture3D=et,this.setTextureCube=V,this.rebindTextures=Ot,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=q}function OM(n,t){function e(i,s=hi){let r;const a=Yt.getTransfer(s);if(i===Qn)return n.UNSIGNED_BYTE;if(i===jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===ur)return n.UNSIGNED_SHORT;if(i===Kl)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===mr)return n.HALF_FLOAT;if(i===Eh)return n.ALPHA;if(i===Th)return n.RGB;if(i===hn)return n.RGBA;if(i===bh)return n.LUMINANCE;if(i===Ah)return n.LUMINANCE_ALPHA;if(i===vs)return n.DEPTH_COMPONENT;if(i===As)return n.DEPTH_STENCIL;if(i===wh)return n.RED;if(i===Jl)return n.RED_INTEGER;if(i===Rh)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===tc)return n.RGBA_INTEGER;if(i===Qr||i===ta||i===ea||i===na)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qo||i===tl||i===el||i===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===il||i===sl)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===al)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ul)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ia||i===Ml||i===Sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ia)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ch||i===yl||i===El||i===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class BM extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yr extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zM={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,i),h=this._getHandJoint(u,M);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Yr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const HM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new _i({vertexShader:HM,fragmentShader:GM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kM extends Cs{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const M=new VM,m=e.getContextAttributes();let h=null,A=null;const b=[],S=[],F=new Xt;let L=null;const C=new Je;C.viewport=new pe;const U=new Je;U.viewport=new pe;const E=[C,U],v=new BM;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let lt=b[nt];return lt===void 0&&(lt=new Ao,b[nt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let lt=b[nt];return lt===void 0&&(lt=new Ao,b[nt]=lt),lt.getGripSpace()},this.getHand=function(nt){let lt=b[nt];return lt===void 0&&(lt=new Ao,b[nt]=lt),lt.getHandSpace()};function z(nt){const lt=S.indexOf(nt.inputSource);if(lt===-1)return;const yt=b[lt];yt!==void 0&&(yt.update(nt.inputSource,nt.frame,u||a),yt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function Z(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",tt);for(let nt=0;nt<b.length;nt++){const lt=S[nt];lt!==null&&(S[nt]=null,b[nt].disconnect(lt))}R=null,I=null,M.reset(),t.setRenderTarget(h),p=null,d=null,f=null,s=null,A=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(nt){u=nt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Gi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,yt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?As:vs,yt=m.stencil?bs:Hi);const Ct={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new Gi(d.textureWidth,d.textureHeight,{format:hn,type:Qn,depthTexture:new kh(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function tt(nt){for(let lt=0;lt<nt.removed.length;lt++){const yt=nt.removed[lt],pt=S.indexOf(yt);pt>=0&&(S[pt]=null,b[pt].disconnect(yt))}for(let lt=0;lt<nt.added.length;lt++){const yt=nt.added[lt];let pt=S.indexOf(yt);if(pt===-1){for(let Ut=0;Ut<b.length;Ut++)if(Ut>=S.length){S.push(yt),pt=Ut;break}else if(S[Ut]===null){S[Ut]=yt,pt=Ut;break}if(pt===-1)break}const Ct=b[pt];Ct&&Ct.connect(yt)}}const $=new H,et=new H;function V(nt,lt,yt){$.setFromMatrixPosition(lt.matrixWorld),et.setFromMatrixPosition(yt.matrixWorld);const pt=$.distanceTo(et),Ct=lt.projectionMatrix.elements,Ut=yt.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),ue=Ct[14]/(Ct[10]+1),w=(Ct[9]+1)/Ct[5],D=(Ct[9]-1)/Ct[5],T=(Ct[8]-1)/Ct[0],it=(Ut[8]+1)/Ut[0],K=Ot*T,q=Ot*it,Q=pt/(-T+it),rt=Q*-T;if(lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(rt),nt.translateZ(Q),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ct[10]===-1)nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const j=Ot+Q,x=ue+Q,g=K-rt,P=q+(pt-rt),G=w*ue/x*j,W=D*ue/x*j;nt.projectionMatrix.makePerspective(g,P,G,W,j,x),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ht(nt,lt){lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let lt=nt.near,yt=nt.far;M.texture!==null&&(M.depthNear>0&&(lt=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),v.near=U.near=C.near=lt,v.far=U.far=C.far=yt,(R!==v.near||I!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,I=v.far),C.layers.mask=nt.layers.mask|2,U.layers.mask=nt.layers.mask|4,v.layers.mask=C.layers.mask|U.layers.mask;const pt=nt.parent,Ct=v.cameras;ht(v,pt);for(let Ut=0;Ut<Ct.length;Ut++)ht(Ct[Ut],pt);Ct.length===2?V(v,C,U):v.projectionMatrix.copy(C.projectionMatrix),Mt(nt,v,pt)};function Mt(nt,lt,yt){yt===null?nt.matrix.copy(lt.matrixWorld):(nt.matrix.copy(yt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=fr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let Et=null;function Lt(nt,lt){if(c=lt.getViewerPose(u||a),_=lt,c!==null){const yt=c.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let pt=!1;yt.length!==v.cameras.length&&(v.cameras.length=0,pt=!0);for(let Ut=0;Ut<yt.length;Ut++){const Ot=yt[Ut];let ue=null;if(p!==null)ue=p.getViewport(Ot);else{const D=f.getViewSubImage(d,Ot);ue=D.viewport,Ut===0&&(t.setRenderTargetTextures(A,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(A))}let w=E[Ut];w===void 0&&(w=new Je,w.layers.enable(Ut),w.viewport=new pe,E[Ut]=w),w.matrix.fromArray(Ot.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ot.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(ue.x,ue.y,ue.width,ue.height),Ut===0&&(v.matrix.copy(w.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pt===!0&&v.cameras.push(w)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Ut=f.getDepthInformation(yt[0]);Ut&&Ut.isValid&&Ut.texture&&M.init(t,Ut,s.renderState)}}for(let yt=0;yt<b.length;yt++){const pt=S[yt],Ct=b[yt];pt!==null&&Ct!==void 0&&Ct.update(pt,lt,u||a)}Et&&Et(nt,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),_=null}const jt=new Vh;jt.setAnimationLoop(Lt),this.setAnimationLoop=function(nt){Et=nt},this.dispose=function(){}}}const Ci=new Pn,WM=new de;function XM(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Bh(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,A,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),c(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),M(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,A,b):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ge&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ge&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=t.get(h),b=A.envMap,S=A.envMapRotation;b&&(m.envMap.value=b,Ci.copy(S),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(WM.makeRotationFromEuler(Ci)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=b*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ge&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function M(m,h){const A=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YM(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const S=b.program;i.uniformBlockBinding(A,S)}function u(A,b){let S=s[A.id];S===void 0&&(_(A),S=c(A),s[A.id]=S,A.addEventListener("dispose",m));const F=b.program;i.updateUBOMapping(A,F);const L=t.render.frame;r[A.id]!==L&&(d(A),r[A.id]=L)}function c(A){const b=f();A.__bindingPointIndex=b;const S=n.createBuffer(),F=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,F,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=s[A.id],S=A.uniforms,F=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,C=S.length;L<C;L++){const U=Array.isArray(S[L])?S[L]:[S[L]];for(let E=0,v=U.length;E<v;E++){const R=U[E];if(p(R,L,E,F)===!0){const I=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let Z=0;for(let tt=0;tt<z.length;tt++){const $=z[tt],et=M($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,I+Z,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,Z),Z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,b,S,F){const L=A.value,C=b+"_"+S;if(F[C]===void 0)return typeof L=="number"||typeof L=="boolean"?F[C]=L:F[C]=L.clone(),!0;{const U=F[C];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return F[C]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function _(A){const b=A.uniforms;let S=0;const F=16;for(let C=0,U=b.length;C<U;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let v=0,R=E.length;v<R;v++){const I=E[v],z=Array.isArray(I.value)?I.value:[I.value];for(let Z=0,tt=z.length;Z<tt;Z++){const $=z[Z],et=M($),V=S%F,ht=V%et.boundary,Mt=V+ht;S+=ht,Mt!==0&&F-Mt<et.storage&&(S+=F-Mt),I.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=et.storage}}}const L=S%F;return L>0&&(S+=F-L),A.__size=S,A.__cache={},this}function M(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:u,dispose:h}}class qM{constructor(t={}){const{canvas:e=Ug(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),M=new Int32Array(4);let m=null,h=null;const A=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=pi,this.toneMappingExposure=1;const S=this;let F=!1,L=0,C=0,U=null,E=-1,v=null;const R=new pe,I=new pe;let z=null;const Z=new qt(0);let tt=0,$=e.width,et=e.height,V=1,ht=null,Mt=null;const Et=new pe(0,0,$,et),Lt=new pe(0,0,$,et);let jt=!1;const nt=new Gh;let lt=!1,yt=!1;const pt=new de,Ct=new de,Ut=new H,Ot=new pe,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function D(){return U===null?V:1}let T=i;function it(y,O){return e.getContext(y,O)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$l}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",vt,!1),T===null){const O="webgl2";if(T=it(O,y),T===null)throw it(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let K,q,Q,rt,j,x,g,P,G,W,k,ft,at,ct,Pt,ot,gt,Rt,Dt,dt,Nt,Bt,ee,N;function _t(){K=new J0(T),K.init(),Bt=new OM(T,K),q=new X0(T,K,t,Bt),Q=new UM(T,K),q.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),rt=new ex(T),j=new xM,x=new FM(T,K,Q,j,q,Bt,rt),g=new q0(S),P=new Z0(S),G=new o_(T),ee=new k0(T,G),W=new Q0(T,G,rt,ee),k=new ix(T,W,G,rt),Dt=new nx(T,q,x),ot=new Y0(j),ft=new vM(S,g,P,K,q,ee,ot),at=new XM(S,j),ct=new SM,Pt=new wM(K),Rt=new V0(S,g,P,Q,k,p,l),gt=new DM(S,k,q),N=new YM(T,rt,q,Q),dt=new W0(T,K,rt),Nt=new tx(T,K,rt),rt.programs=ft.programs,S.capabilities=q,S.extensions=K,S.properties=j,S.renderLists=ct,S.shadowMap=gt,S.state=Q,S.info=rt}_t();const J=new kM(S,T);this.xr=J,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=K.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=K.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize($,et,!1))},this.getSize=function(y){return y.set($,et)},this.setSize=function(y,O,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,et=O,e.width=Math.floor(y*V),e.height=Math.floor(O*V),X===!0&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set($*V,et*V).floor()},this.setDrawingBufferSize=function(y,O,X){$=y,et=O,V=X,e.width=Math.floor(y*X),e.height=Math.floor(O*X),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(Et)},this.setViewport=function(y,O,X,Y){y.isVector4?Et.set(y.x,y.y,y.z,y.w):Et.set(y,O,X,Y),Q.viewport(R.copy(Et).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Lt)},this.setScissor=function(y,O,X,Y){y.isVector4?Lt.set(y.x,y.y,y.z,y.w):Lt.set(y,O,X,Y),Q.scissor(I.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(y){Q.setScissorTest(jt=y)},this.setOpaqueSort=function(y){ht=y},this.setTransparentSort=function(y){Mt=y},this.getClearColor=function(y){return y.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(y=!0,O=!0,X=!0){let Y=0;if(y){let B=!1;if(U!==null){const ut=U.texture.format;B=ut===tc||ut===Ql||ut===Jl}if(B){const ut=U.texture.type,xt=ut===Qn||ut===Hi||ut===ur||ut===bs||ut===jl||ut===Zl,Tt=Rt.getClearColor(),bt=Rt.getClearAlpha(),Ft=Tt.r,Vt=Tt.g,At=Tt.b;xt?(_[0]=Ft,_[1]=Vt,_[2]=At,_[3]=bt,T.clearBufferuiv(T.COLOR,0,_)):(M[0]=Ft,M[1]=Vt,M[2]=At,M[3]=bt,T.clearBufferiv(T.COLOR,0,M))}else Y|=T.COLOR_BUFFER_BIT}O&&(Y|=T.DEPTH_BUFFER_BIT),X&&(Y|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ct.dispose(),Pt.dispose(),j.dispose(),g.dispose(),P.dispose(),k.dispose(),ee.dispose(),N.dispose(),ft.dispose(),J.dispose(),J.removeEventListener("sessionstart",lc),J.removeEventListener("sessionend",cc),xi.stop()};function st(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const y=rt.autoReset,O=gt.enabled,X=gt.autoUpdate,Y=gt.needsUpdate,B=gt.type;_t(),rt.autoReset=y,gt.enabled=O,gt.autoUpdate=X,gt.needsUpdate=Y,gt.type=B}function vt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Gt(y){const O=y.target;O.removeEventListener("dispose",Gt),he(O)}function he(y){ye(y),j.remove(y)}function ye(y){const O=j.get(y).programs;O!==void 0&&(O.forEach(function(X){ft.releaseProgram(X)}),y.isShaderMaterial&&ft.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,X,Y,B,ut){O===null&&(O=ue);const xt=B.isMesh&&B.matrixWorld.determinant()<0,Tt=jh(y,O,X,Y,B);Q.setMaterial(Y,xt);let bt=X.index,Ft=1;if(Y.wireframe===!0){if(bt=W.getWireframeAttribute(X),bt===void 0)return;Ft=2}const Vt=X.drawRange,At=X.attributes.position;let $t=Vt.start*Ft,ae=(Vt.start+Vt.count)*Ft;ut!==null&&($t=Math.max($t,ut.start*Ft),ae=Math.min(ae,(ut.start+ut.count)*Ft)),bt!==null?($t=Math.max($t,0),ae=Math.min(ae,bt.count)):At!=null&&($t=Math.max($t,0),ae=Math.min(ae,At.count));const le=ae-$t;if(le<0||le===1/0)return;ee.setup(B,Y,Tt,X,bt);let Oe,Zt=dt;if(bt!==null&&(Oe=G.get(bt),Zt=Nt,Zt.setIndex(Oe)),B.isMesh)Y.wireframe===!0?(Q.setLineWidth(Y.wireframeLinewidth*D()),Zt.setMode(T.LINES)):Zt.setMode(T.TRIANGLES);else if(B.isLine){let wt=Y.linewidth;wt===void 0&&(wt=1),Q.setLineWidth(wt*D()),B.isLineSegments?Zt.setMode(T.LINES):B.isLineLoop?Zt.setMode(T.LINE_LOOP):Zt.setMode(T.LINE_STRIP)}else B.isPoints?Zt.setMode(T.POINTS):B.isSprite&&Zt.setMode(T.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Zt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Zt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const wt=B._multiDrawStarts,Dn=B._multiDrawCounts,Jt=B._multiDrawCount,rn=bt?G.get(bt).bytesPerElement:1,Wi=j.get(Y).currentProgram.getUniforms();for(let ke=0;ke<Jt;ke++)Wi.setValue(T,"_gl_DrawID",ke),Zt.render(wt[ke]/rn,Dn[ke])}else if(B.isInstancedMesh)Zt.renderInstances($t,le,B.count);else if(X.isInstancedBufferGeometry){const wt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dn=Math.min(X.instanceCount,wt);Zt.renderInstances($t,le,Dn)}else Zt.render($t,le)};function ne(y,O,X){y.transparent===!0&&y.side===un&&y.forceSinglePass===!1?(y.side=Ge,y.needsUpdate=!0,Sr(y,O,X),y.side=gi,y.needsUpdate=!0,Sr(y,O,X),y.side=un):Sr(y,O,X)}this.compile=function(y,O,X=null){X===null&&(X=y),h=Pt.get(X),h.init(O),b.push(h),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),y!==X&&y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const Y=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ut=B.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Tt=ut[xt];ne(Tt,X,B),Y.add(Tt)}else ne(ut,X,B),Y.add(ut)}),b.pop(),h=null,Y},this.compileAsync=function(y,O,X=null){const Y=this.compile(y,O,X);return new Promise(B=>{function ut(){if(Y.forEach(function(xt){j.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){B(y);return}setTimeout(ut,10)}K.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let sn=null;function Ln(y){sn&&sn(y)}function lc(){xi.stop()}function cc(){xi.start()}const xi=new Vh;xi.setAnimationLoop(Ln),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(y){sn=y,J.setAnimationLoop(y),y===null?xi.stop():xi.start()},J.addEventListener("sessionstart",lc),J.addEventListener("sessionend",cc),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,O,U),h=Pt.get(y,b.length),h.init(O),b.push(h),Ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),nt.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,lt=ot.init(this.clippingPlanes,yt),m=ct.get(y,A.length),m.init(),A.push(m),J.enabled===!0&&J.isPresenting===!0){const ut=S.xr.getDepthSensingMesh();ut!==null&&Ba(ut,O,-1/0,S.sortObjects)}Ba(y,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ht,Mt),w=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,w&&Rt.addToRenderList(m,y),this.info.render.frame++,lt===!0&&ot.beginShadows();const X=h.state.shadowsArray;gt.render(X,y,O),lt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,B=m.transmissive;if(h.setupLights(),O.isArrayCamera){const ut=O.cameras;if(B.length>0)for(let xt=0,Tt=ut.length;xt<Tt;xt++){const bt=ut[xt];fc(Y,B,y,bt)}w&&Rt.render(y);for(let xt=0,Tt=ut.length;xt<Tt;xt++){const bt=ut[xt];uc(m,y,bt,bt.viewport)}}else B.length>0&&fc(Y,B,y,O),w&&Rt.render(y),uc(m,y,O);U!==null&&(x.updateMultisampleRenderTarget(U),x.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(S,y,O),ee.resetDefaultState(),E=-1,v=null,b.pop(),b.length>0?(h=b[b.length-1],lt===!0&&ot.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ba(y,O,X,Y){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||nt.intersectsSprite(y)){Y&&Ot.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ct);const xt=k.update(y),Tt=y.material;Tt.visible&&m.push(y,xt,Tt,X,Ot.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||nt.intersectsObject(y))){const xt=k.update(y),Tt=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ot.copy(y.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ot.copy(xt.boundingSphere.center)),Ot.applyMatrix4(y.matrixWorld).applyMatrix4(Ct)),Array.isArray(Tt)){const bt=xt.groups;for(let Ft=0,Vt=bt.length;Ft<Vt;Ft++){const At=bt[Ft],$t=Tt[At.materialIndex];$t&&$t.visible&&m.push(y,xt,$t,X,Ot.z,At)}}else Tt.visible&&m.push(y,xt,Tt,X,Ot.z,null)}}const ut=y.children;for(let xt=0,Tt=ut.length;xt<Tt;xt++)Ba(ut[xt],O,X,Y)}function uc(y,O,X,Y){const B=y.opaque,ut=y.transmissive,xt=y.transparent;h.setupLightsView(X),lt===!0&&ot.setGlobalState(S.clippingPlanes,X),Y&&Q.viewport(R.copy(Y)),B.length>0&&Mr(B,O,X),ut.length>0&&Mr(ut,O,X),xt.length>0&&Mr(xt,O,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function fc(y,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Gi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?mr:Qn,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const ut=h.state.transmissionRenderTarget[Y.id],xt=Y.viewport||R;ut.setSize(xt.z,xt.w);const Tt=S.getRenderTarget();S.setRenderTarget(ut),S.getClearColor(Z),tt=S.getClearAlpha(),tt<1&&S.setClearColor(16777215,.5),S.clear(),w&&Rt.render(X);const bt=S.toneMapping;S.toneMapping=pi;const Ft=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),lt===!0&&ot.setGlobalState(S.clippingPlanes,Y),Mr(y,X,Y),x.updateMultisampleRenderTarget(ut),x.updateRenderTargetMipmap(ut),K.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let At=0,$t=O.length;At<$t;At++){const ae=O[At],le=ae.object,Oe=ae.geometry,Zt=ae.material,wt=ae.group;if(Zt.side===un&&le.layers.test(Y.layers)){const Dn=Zt.side;Zt.side=Ge,Zt.needsUpdate=!0,hc(le,X,Y,Oe,Zt,wt),Zt.side=Dn,Zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(x.updateMultisampleRenderTarget(ut),x.updateRenderTargetMipmap(ut))}S.setRenderTarget(Tt),S.setClearColor(Z,tt),Ft!==void 0&&(Y.viewport=Ft),S.toneMapping=bt}function Mr(y,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ut=y.length;B<ut;B++){const xt=y[B],Tt=xt.object,bt=xt.geometry,Ft=Y===null?xt.material:Y,Vt=xt.group;Tt.layers.test(X.layers)&&hc(Tt,O,X,bt,Ft,Vt)}}function hc(y,O,X,Y,B,ut){y.onBeforeRender(S,O,X,Y,B,ut),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(S,O,X,Y,y,ut),B.transparent===!0&&B.side===un&&B.forceSinglePass===!1?(B.side=Ge,B.needsUpdate=!0,S.renderBufferDirect(X,O,Y,B,y,ut),B.side=gi,B.needsUpdate=!0,S.renderBufferDirect(X,O,Y,B,y,ut),B.side=un):S.renderBufferDirect(X,O,Y,B,y,ut),y.onAfterRender(S,O,X,Y,B,ut)}function Sr(y,O,X){O.isScene!==!0&&(O=ue);const Y=j.get(y),B=h.state.lights,ut=h.state.shadowsArray,xt=B.state.version,Tt=ft.getParameters(y,B.state,ut,O,X),bt=ft.getProgramCacheKey(Tt);let Ft=Y.programs;Y.environment=y.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(y.isMeshStandardMaterial?P:g).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ft===void 0&&(y.addEventListener("dispose",Gt),Ft=new Map,Y.programs=Ft);let Vt=Ft.get(bt);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===xt)return pc(y,Tt),Vt}else Tt.uniforms=ft.getUniforms(y),y.onBeforeCompile(Tt,S),Vt=ft.acquireProgram(Tt,bt),Ft.set(bt,Vt),Y.uniforms=Tt.uniforms;const At=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=ot.uniform),pc(y,Tt),Y.needsLights=Jh(y),Y.lightsStateVersion=xt,Y.needsLights&&(At.ambientLightColor.value=B.state.ambient,At.lightProbe.value=B.state.probe,At.directionalLights.value=B.state.directional,At.directionalLightShadows.value=B.state.directionalShadow,At.spotLights.value=B.state.spot,At.spotLightShadows.value=B.state.spotShadow,At.rectAreaLights.value=B.state.rectArea,At.ltc_1.value=B.state.rectAreaLTC1,At.ltc_2.value=B.state.rectAreaLTC2,At.pointLights.value=B.state.point,At.pointLightShadows.value=B.state.pointShadow,At.hemisphereLights.value=B.state.hemi,At.directionalShadowMap.value=B.state.directionalShadowMap,At.directionalShadowMatrix.value=B.state.directionalShadowMatrix,At.spotShadowMap.value=B.state.spotShadowMap,At.spotLightMatrix.value=B.state.spotLightMatrix,At.spotLightMap.value=B.state.spotLightMap,At.pointShadowMap.value=B.state.pointShadowMap,At.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function dc(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=sa.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function pc(y,O){const X=j.get(y);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function jh(y,O,X,Y,B){O.isScene!==!0&&(O=ue),x.resetTextureUnits();const ut=O.fog,xt=Y.isMeshStandardMaterial?O.environment:null,Tt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Rs,bt=(Y.isMeshStandardMaterial?P:g).get(Y.envMap||xt),Ft=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),At=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,ae=!!X.morphAttributes.color;let le=pi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(le=S.toneMapping);const Oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=Oe!==void 0?Oe.length:0,wt=j.get(Y),Dn=h.state.lights;if(lt===!0&&(yt===!0||y!==v)){const $e=y===v&&Y.id===E;ot.setState(Y,y,$e)}let Jt=!1;Y.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Dn.state.version||wt.outputColorSpace!==Tt||B.isBatchedMesh&&wt.batching===!1||!B.isBatchedMesh&&wt.batching===!0||B.isBatchedMesh&&wt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&wt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&wt.instancing===!1||!B.isInstancedMesh&&wt.instancing===!0||B.isSkinnedMesh&&wt.skinning===!1||!B.isSkinnedMesh&&wt.skinning===!0||B.isInstancedMesh&&wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&wt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&wt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&wt.instancingMorph===!1&&B.morphTexture!==null||wt.envMap!==bt||Y.fog===!0&&wt.fog!==ut||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==ot.numPlanes||wt.numIntersection!==ot.numIntersection)||wt.vertexAlphas!==Ft||wt.vertexTangents!==Vt||wt.morphTargets!==At||wt.morphNormals!==$t||wt.morphColors!==ae||wt.toneMapping!==le||wt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,wt.__version=Y.version);let rn=wt.currentProgram;Jt===!0&&(rn=Sr(Y,O,B));let Wi=!1,ke=!1,Ls=!1;const ce=rn.getUniforms(),Mn=wt.uniforms;if(Q.useProgram(rn.program)&&(Wi=!0,ke=!0,Ls=!0),Y.id!==E&&(E=Y.id,ke=!0),Wi||v!==y){Q.buffers.depth.getReversed()?(pt.copy(y.projectionMatrix),Fg(pt),Og(pt),ce.setValue(T,"projectionMatrix",pt)):ce.setValue(T,"projectionMatrix",y.projectionMatrix),ce.setValue(T,"viewMatrix",y.matrixWorldInverse);const ei=ce.map.cameraPosition;ei!==void 0&&ei.setValue(T,Ut.setFromMatrixPosition(y.matrixWorld)),q.logarithmicDepthBuffer&&ce.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ce.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,ke=!0,Ls=!0)}if(B.isSkinnedMesh){ce.setOptional(T,B,"bindMatrix"),ce.setOptional(T,B,"bindMatrixInverse");const $e=B.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ce.setValue(T,"boneTexture",$e.boneTexture,x))}B.isBatchedMesh&&(ce.setOptional(T,B,"batchingTexture"),ce.setValue(T,"batchingTexture",B._matricesTexture,x),ce.setOptional(T,B,"batchingIdTexture"),ce.setValue(T,"batchingIdTexture",B._indirectTexture,x),ce.setOptional(T,B,"batchingColorTexture"),B._colorsTexture!==null&&ce.setValue(T,"batchingColorTexture",B._colorsTexture,x));const Ds=X.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Dt.update(B,X,rn),(ke||wt.receiveShadow!==B.receiveShadow)&&(wt.receiveShadow=B.receiveShadow,ce.setValue(T,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mn.envMap.value=bt,Mn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Mn.envMapIntensity.value=O.environmentIntensity),ke&&(ce.setValue(T,"toneMappingExposure",S.toneMappingExposure),wt.needsLights&&Zh(Mn,Ls),ut&&Y.fog===!0&&at.refreshFogUniforms(Mn,ut),at.refreshMaterialUniforms(Mn,Y,V,et,h.state.transmissionRenderTarget[y.id]),sa.upload(T,dc(wt),Mn,x)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(sa.upload(T,dc(wt),Mn,x),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ce.setValue(T,"center",B.center),ce.setValue(T,"modelViewMatrix",B.modelViewMatrix),ce.setValue(T,"normalMatrix",B.normalMatrix),ce.setValue(T,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const $e=Y.uniformsGroups;for(let ei=0,ni=$e.length;ei<ni;ei++){const mc=$e[ei];N.update(mc,rn),N.bind(mc,rn)}}return rn}function Zh(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Jh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,O,X){j.get(y.texture).__webglTexture=O,j.get(y.depthTexture).__webglTexture=X;const Y=j.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const X=j.get(y);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,X=0){U=y,L=O,C=X;let Y=!0,B=null,ut=!1,xt=!1;if(y){const bt=j.get(y);if(bt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(T.FRAMEBUFFER,null),Y=!1;else if(bt.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(bt.__hasExternalTextures)x.rebindTextures(y,j.get(y.texture).__webglTexture,j.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const At=y.depthTexture;if(bt.__boundDepthTexture!==At){if(At!==null&&j.has(At)&&(y.width!==At.image.width||y.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(xt=!0);const Vt=j.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?B=Vt[O][X]:B=Vt[O],ut=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?B=j.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?B=Vt[X]:B=Vt,R.copy(y.viewport),I.copy(y.scissor),z=y.scissorTest}else R.copy(Et).multiplyScalar(V).floor(),I.copy(Lt).multiplyScalar(V).floor(),z=jt;if(Q.bindFramebuffer(T.FRAMEBUFFER,B)&&Y&&Q.drawBuffers(y,B),Q.viewport(R),Q.scissor(I),Q.setScissorTest(z),ut){const bt=j.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,X)}else if(xt){const bt=j.get(y.texture),Ft=O||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,bt.__webglTexture,X||0,Ft)}E=-1},this.readRenderTargetPixels=function(y,O,X,Y,B,ut,xt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){Q.bindFramebuffer(T.FRAMEBUFFER,Tt);try{const bt=y.texture,Ft=bt.format,Vt=bt.type;if(!q.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-Y&&X>=0&&X<=y.height-B&&T.readPixels(O,X,Y,B,Bt.convert(Ft),Bt.convert(Vt),ut)}finally{const bt=U!==null?j.get(U).__webglFramebuffer:null;Q.bindFramebuffer(T.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,O,X,Y,B,ut,xt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){const bt=y.texture,Ft=bt.format,Vt=bt.type;if(!q.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-Y&&X>=0&&X<=y.height-B){Q.bindFramebuffer(T.FRAMEBUFFER,Tt);const At=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,At),T.bufferData(T.PIXEL_PACK_BUFFER,ut.byteLength,T.STREAM_READ),T.readPixels(O,X,Y,B,Bt.convert(Ft),Bt.convert(Vt),0);const $t=U!==null?j.get(U).__webglFramebuffer:null;Q.bindFramebuffer(T.FRAMEBUFFER,$t);const ae=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Ng(T,ae,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,At),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ut),T.deleteBuffer(At),T.deleteSync(ae),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,X=0){y.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const Y=Math.pow(2,-X),B=Math.floor(y.image.width*Y),ut=Math.floor(y.image.height*Y),xt=O!==null?O.x:0,Tt=O!==null?O.y:0;x.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,X,0,0,xt,Tt,B,ut),Q.unbindTexture()},this.copyTextureToTexture=function(y,O,X=null,Y=null,B=0){y.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],O=arguments[2],B=arguments[3]||0,X=null);let ut,xt,Tt,bt,Ft,Vt,At,$t,ae;const le=y.isCompressedTexture?y.mipmaps[B]:y.image;X!==null?(ut=X.max.x-X.min.x,xt=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,bt=X.min.x,Ft=X.min.y,Vt=X.isBox3?X.min.z:0):(ut=le.width,xt=le.height,Tt=le.depth||1,bt=0,Ft=0,Vt=0),Y!==null?(At=Y.x,$t=Y.y,ae=Y.z):(At=0,$t=0,ae=0);const Oe=Bt.convert(O.format),Zt=Bt.convert(O.type);let wt;O.isData3DTexture?(x.setTexture3D(O,0),wt=T.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(x.setTexture2DArray(O,0),wt=T.TEXTURE_2D_ARRAY):(x.setTexture2D(O,0),wt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const Dn=T.getParameter(T.UNPACK_ROW_LENGTH),Jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),rn=T.getParameter(T.UNPACK_SKIP_PIXELS),Wi=T.getParameter(T.UNPACK_SKIP_ROWS),ke=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,le.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,le.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,bt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ft),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Vt);const Ls=y.isDataArrayTexture||y.isData3DTexture,ce=O.isDataArrayTexture||O.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Mn=j.get(y),Ds=j.get(O),$e=j.get(Mn.__renderTarget),ei=j.get(Ds.__renderTarget);Q.bindFramebuffer(T.READ_FRAMEBUFFER,$e.__webglFramebuffer),Q.bindFramebuffer(T.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ni=0;ni<Tt;ni++)Ls&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,j.get(y).__webglTexture,B,Vt+ni),y.isDepthTexture?(ce&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,j.get(O).__webglTexture,B,ae+ni),T.blitFramebuffer(bt,Ft,ut,xt,At,$t,ut,xt,T.DEPTH_BUFFER_BIT,T.NEAREST)):ce?T.copyTexSubImage3D(wt,B,At,$t,ae+ni,bt,Ft,ut,xt):T.copyTexSubImage2D(wt,B,At,$t,ae+ni,bt,Ft,ut,xt);Q.bindFramebuffer(T.READ_FRAMEBUFFER,null),Q.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ce?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(wt,B,At,$t,ae,ut,xt,Tt,Oe,Zt,le.data):O.isCompressedArrayTexture?T.compressedTexSubImage3D(wt,B,At,$t,ae,ut,xt,Tt,Oe,le.data):T.texSubImage3D(wt,B,At,$t,ae,ut,xt,Tt,Oe,Zt,le):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,B,At,$t,ut,xt,Oe,Zt,le.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,B,At,$t,le.width,le.height,Oe,le.data):T.texSubImage2D(T.TEXTURE_2D,B,At,$t,ut,xt,Oe,Zt,le);T.pixelStorei(T.UNPACK_ROW_LENGTH,Dn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,rn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ke),B===0&&O.generateMipmaps&&T.generateMipmap(wt),Q.unbindTexture()},this.copyTextureToTexture3D=function(y,O,X=null,Y=null,B=0){return y.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],O=arguments[3],B=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,X,Y,B)},this.initRenderTarget=function(y){j.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),Q.unbindTexture()},this.resetState=function(){L=0,C=0,U=null,Q.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class rc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $M extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class KM{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new H;class _a{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new _n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _a(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $h extends vr{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const Gs=new H,os=new H,ls=new H,cs=new Xt,Vs=new Xt,Kh=new de,qr=new H,ks=new H,$r=new H,Zu=new Xt,wo=new Xt,Ju=new Xt;class jM extends Ve{constructor(t=new $h){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new xn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new KM(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new _a(i,3,0,!1)),as.setAttribute("uv",new _a(i,2,3,!1))}this.geometry=as,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Kh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Kr(qr.set(-.5,-.5,0),ls,a,os,s,r),Kr(ks.set(.5,-.5,0),ls,a,os,s,r),Kr($r.set(.5,.5,0),ls,a,os,s,r),Zu.set(0,0),wo.set(1,0),Ju.set(1,1);let o=t.ray.intersectTriangle(qr,ks,$r,!1,Gs);if(o===null&&(Kr(ks.set(-.5,.5,0),ls,a,os,s,r),wo.set(0,1),o=t.ray.intersectTriangle(qr,$r,ks,!1,Gs),o===null))return;const l=t.ray.origin.distanceTo(Gs);l<t.near||l>t.far||e.push({distance:l,point:Gs.clone(),uv:Qe.getInterpolation(Gs,qr,ks,$r,Zu,wo,Ju,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Kr(n,t,e,i,s,r){cs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Vs.x=r*cs.x-s*cs.y,Vs.y=s*cs.x+r*cs.y):Vs.copy(cs),n.copy(t),n.x+=Vs.x,n.y+=Vs.y,n.applyMatrix4(Kh)}class va extends xn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],u=new H,c=new Xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const p=i+f/e*s;u.x=t*Math.cos(p),u.y=t*Math.sin(p),a.push(u.x,u.y,u.z),o.push(0,0,1),c.x=(a[d]/t+1)/2,c.y=(a[d+1]/t+1)/2,l.push(c.x,c.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Oa extends xn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],f=[],d=[],p=[];let _=0;const M=[],m=i/2;let h=0;A(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(p,2));function A(){const S=new H,F=new H;let L=0;const C=(e-t)/i;for(let U=0;U<=r;U++){const E=[],v=U/r,R=v*(e-t)+t;for(let I=0;I<=s;I++){const z=I/s,Z=z*l+o,tt=Math.sin(Z),$=Math.cos(Z);F.x=R*tt,F.y=-v*i+m,F.z=R*$,f.push(F.x,F.y,F.z),S.set(tt,C,$).normalize(),d.push(S.x,S.y,S.z),p.push(z,1-v),E.push(_++)}M.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){const v=M[E][U],R=M[E+1][U],I=M[E+1][U+1],z=M[E][U+1];(t>0||E!==0)&&(c.push(v,R,z),L+=3),(e>0||E!==r-1)&&(c.push(R,I,z),L+=3)}u.addGroup(h,L,0),h+=L}function b(S){const F=_,L=new Xt,C=new H;let U=0;const E=S===!0?t:e,v=S===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),_++;const R=_;for(let I=0;I<=s;I++){const Z=I/s*l+o,tt=Math.cos(Z),$=Math.sin(Z);C.x=E*$,C.y=m*v,C.z=E*tt,f.push(C.x,C.y,C.z),d.push(0,v,0),L.x=tt*.5+.5,L.y=$*.5*v+.5,p.push(L.x,L.y),_++}for(let I=0;I<s;I++){const z=F+I,Z=R+I;S===!0?c.push(Z,Z+1,z):c.push(Z+1,Z,z),U+=3}u.addGroup(h,U,S===!0?1:2),h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ac extends Oa{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ac(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xa extends xn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],f=new H,d=new H,p=[],_=[],M=[],m=[];for(let h=0;h<=i;h++){const A=[],b=h/i;let S=0;h===0&&a===0?S=.5/e:h===i&&l===Math.PI&&(S=-.5/e);for(let F=0;F<=e;F++){const L=F/e;f.x=-t*Math.cos(s+L*r)*Math.sin(a+b*o),f.y=t*Math.cos(a+b*o),f.z=t*Math.sin(s+L*r)*Math.sin(a+b*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),m.push(L+S,1-b),A.push(u++)}c.push(A)}for(let h=0;h<i;h++)for(let A=0;A<e;A++){const b=c[h][A+1],S=c[h][A],F=c[h+1][A],L=c[h+1][A+1];(h!==0||a>0)&&p.push(b,S,L),(h!==i-1||l<Math.PI)&&p.push(S,F,L)}this.setIndex(p),this.setAttribute("position",new we(_,3)),this.setAttribute("normal",new we(M,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const Qu=new de;class ZM{constructor(t,e,i=0,s=1/0){this.ray=new Uh(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qu),this}intersectObject(t,e=!0,i=[]){return Rl(t,this,i,e),i.sort(tf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Rl(t[s],this,i,e);return i.sort(tf),i}}function tf(n,t){return n.distance-t.distance}function Rl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Rl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);const vi=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},JM={class:"home-screen"},QM={class:"bg-particles"},tS={class:"home-content"},eS={key:0,class:"record-badge"},nS={class:"record-value"},iS={__name:"StartScreen",props:{bestScore:{type:Number,default:0}},emits:["start"],setup(n){function t(e){const i=10+e*37%80,s=e*.7%5,r=2+e%3,a=6+e*1.3%8;return{left:`${i}%`,animationDelay:`${s}s`,animationDuration:`${a}s`,width:`${r}px`,height:`${r}px`}}return(e,i)=>(He(),mn("div",JM,[i[7]||(i[7]=zt("div",{class:"bg-ambient"},null,-1)),i[8]||(i[8]=zt("div",{class:"bg-fog"},null,-1)),zt("div",QM,[(He(),mn(cn,null,cp(12,s=>zt("span",{key:s,class:"float-particle",style:Ta(t(s))},null,4)),64))]),zt("div",tS,[i[4]||(i[4]=uh('<div class="deco-line top" data-v-6b8e3b93></div><div class="title-block" data-v-6b8e3b93><h1 class="title-main" data-v-6b8e3b93>射 杀 奶 龙</h1><p class="title-sub" data-v-6b8e3b93>— 暗 黑 森 林 · 听 声 辨 位 —</p></div><div class="section-divider" data-v-6b8e3b93><span class="divider-dot" data-v-6b8e3b93></span><span class="divider-line" data-v-6b8e3b93></span><span class="divider-diamond" data-v-6b8e3b93>◆</span><span class="divider-line" data-v-6b8e3b93></span><span class="divider-dot" data-v-6b8e3b93></span></div><div class="guide-box" data-v-6b8e3b93><div class="guide-row" data-v-6b8e3b93><span class="guide-icon" data-v-6b8e3b93>👂</span><span class="guide-text" data-v-6b8e3b93>聆听森林中的笑声</span></div><div class="guide-row" data-v-6b8e3b93><span class="guide-icon" data-v-6b8e3b93>🔦</span><span class="guide-text" data-v-6b8e3b93>手电筒照向声音来源</span></div><div class="guide-row" data-v-6b8e3b93><span class="guide-icon" data-v-6b8e3b93>⏱️</span><span class="guide-text" data-v-6b8e3b93>坚持 60 秒逃离黑暗</span></div></div>',4)),n.bestScore>0?(He(),mn("div",eS,[i[1]||(i[1]=zt("span",{class:"record-star"},"★",-1)),i[2]||(i[2]=zt("span",{class:"record-label"},"最佳记录",-1)),zt("span",nS,qn(n.bestScore),1)])):Ss("",!0),zt("button",{class:"enter-btn",onClick:i[0]||(i[0]=s=>e.$emit("start"))},[...i[3]||(i[3]=[zt("span",{class:"enter-btn-glow"},null,-1),zt("span",{class:"enter-btn-text"},"进 入 森 林",-1),zt("span",{class:"enter-btn-hint"},"PRESS START",-1)])]),i[5]||(i[5]=zt("p",{class:"footer-hint"},"🎧 佩戴耳机获得最佳体验  |  📱 支持陀螺仪",-1)),i[6]||(i[6]=zt("div",{class:"deco-line bottom"},null,-1))])]))}},sS=vi(iS,[["__scopeId","data-v-6b8e3b93"]]),rS={},aS={class:"crosshair"};function oS(n,t){return He(),mn("div",aS,[...t[0]||(t[0]=[uh('<div class="crosshair-top" data-v-f3b4ed19></div><div class="crosshair-bottom" data-v-f3b4ed19></div><div class="crosshair-left" data-v-f3b4ed19></div><div class="crosshair-right" data-v-f3b4ed19></div><div class="crosshair-dot" data-v-f3b4ed19></div><div class="crosshair-ring" data-v-f3b4ed19></div>',6)])])}const lS=vi(rS,[["render",oS],["__scopeId","data-v-f3b4ed19"]]),cS={class:"flash-container"},uS={class:"flash-label"},fS=600,hS={__name:"FireButton",emits:["fire"],setup(n,{emit:t}){const e=t,i=fs(!1);function s(){i.value||(e("fire"),i.value=!0,setTimeout(()=>{i.value=!1},fS))}return(r,a)=>(He(),mn("div",cS,[zt("button",{class:ki(["flash-btn",{cooldown:i.value}]),onPointerdown:Jc(s,["stop","prevent"]),onTouchstart:Jc(s,["stop","prevent"])},[a[0]||(a[0]=zt("span",{class:"flash-icon"},"🔦",-1)),zt("span",uS,qn(i.value?"...":"手电"),1)],34)]))}},dS=vi(hS,[["__scopeId","data-v-71a5b0fb"]]),pS={class:"scoreboard"},mS={class:"score-box hud-panel"},gS={class:"score-value"},_S={class:"time-value"},vS={class:"kills-box"},xS={class:"kills-value"},MS={__name:"ScoreBoard",props:{score:{type:Number,default:0},timeRemaining:{type:Number,default:60},kills:{type:Number,default:0}},setup(n){const t=n,e=ql(()=>{const i=Math.floor(t.timeRemaining/60),s=t.timeRemaining%60;return`${i}:${String(s).padStart(2,"0")}`});return(i,s)=>(He(),mn("div",pS,[zt("div",mS,[s[0]||(s[0]=zt("span",{class:"score-label"},"得分",-1)),zt("span",gS,qn(n.score),1)]),zt("div",{class:ki(["time-box hud-panel",{urgent:n.timeRemaining<=10}])},[s[1]||(s[1]=zt("span",{class:"time-label"},"剩余",-1)),zt("span",_S,qn(e.value),1)],2),zt("div",vS,[s[2]||(s[2]=zt("span",{class:"kills-icon"},"💀",-1)),zt("span",xS,qn(n.kills),1)])]))}},SS=vi(MS,[["__scopeId","data-v-ec0ea2dc"]]),oc="/assets/%E5%A5%B6%E9%BE%99%E5%A4%A7%E7%AC%91-B401vx2T.gif",yS={key:0,class:"gameover-overlay"},ES={class:"gameover-panel"},TS=["src"],bS={class:"gameover-sub"},AS={class:"final-stats"},wS={class:"stat-row main-stat"},RS={class:"stat-value"},CS={class:"gameover-actions"},PS={__name:"GameOverModal",props:{gameState:{type:Object,required:!0},visible:{type:Boolean,default:!0}},emits:["restart","backToMenu"],setup(n){return(t,e)=>n.visible?(He(),mn("div",yS,[zt("div",ES,[n.gameState.won?Ss("",!0):(He(),mn("img",{key:0,src:Af(oc),class:"laugh-gif",alt:""},null,8,TS)),zt("h2",{class:ki(["gameover-title",n.gameState.won?"win":"lose"])},qn(n.gameState.won?"✨ 你赢了！":"💀 你输了"),3),zt("p",bS,qn(n.gameState.won?"成功在黑暗中存活了60秒":"奶龙找到了你..."),1),e[3]||(e[3]=zt("div",{class:"hud-divider"},null,-1)),zt("div",AS,[zt("div",wS,[e[2]||(e[2]=zt("span",{class:"stat-label"},"照中次数",-1)),zt("span",RS,qn(n.gameState.score/100),1)])]),e[4]||(e[4]=zt("div",{class:"hud-divider"},null,-1)),zt("div",CS,[zt("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=i=>t.$emit("restart"))},"再来一次"),zt("button",{class:"btn btn-secondary",onClick:e[1]||(e[1]=i=>t.$emit("backToMenu"))},"返回主页")])])])):Ss("",!0)}},LS=vi(PS,[["__scopeId","data-v-56160923"]]),DS="/assets/%E5%A5%B6%E9%BE%99%E5%93%AD%E6%B3%A3-ChJ2TT0N.gif",IS=["src"],US={__name:"NailongGif",props:{type:{type:String,default:"none"},visible:{type:Boolean,default:!1}},setup(n){const t=n,e=ql(()=>t.type==="kill"?DS:oc);return(i,s)=>(He(),Xl(nm,{name:"gif-pop"},{default:If(()=>[n.visible?(He(),mn("div",{key:0,class:ki(["nailong-gif",n.type])},[zt("img",{src:e.value,alt:""},null,8,IS)],2)):Ss("",!0)]),_:1}))}},NS=vi(US,[["__scopeId","data-v-98b863b4"]]),FS={class:"game-view"},OS={class:"game-overlay"},BS={__name:"GameView",props:{gameState:{type:Object,required:!0},gifType:{type:String,default:"none"}},emits:["fire","restart","backToMenu"],setup(n){const t=fs(null);function e(){const r=t.value;r&&(r.width=window.innerWidth,r.height=window.innerHeight,r.style.cssText="display:block;position:fixed;top:0;left:0;z-index:1")}let i=null;function s(){clearTimeout(i),i=setTimeout(e,200)}return Vl(()=>{var r,a;e(),window.addEventListener("resize",s),window.addEventListener("orientationchange",()=>setTimeout(e,300)),console.log("canvas mounted:",(r=t.value)==null?void 0:r.width,"x",(a=t.value)==null?void 0:a.height)}),Ca(()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}),(r,a)=>(He(),mn("div",FS,[zt("canvas",{id:"game-canvas",ref_key:"canvasRef",ref:t},null,512),ge(NS,{type:n.gifType,visible:n.gifType!=="none"},null,8,["type","visible"]),zt("div",OS,[ge(SS,{score:n.gameState.score,"time-remaining":n.gameState.timeRemaining,kills:n.gameState.kills},null,8,["score","time-remaining","kills"]),ge(lS),ge(dS,{onFire:a[0]||(a[0]=o=>r.$emit("fire"))})]),n.gameState.state==="game_over"?(He(),Xl(LS,{key:0,"game-state":n.gameState,visible:!0,onRestart:a[1]||(a[1]=o=>r.$emit("restart")),onBackToMenu:a[2]||(a[2]=o=>r.$emit("backToMenu"))},null,8,["game-state"])):Ss("",!0)]))}},zS=vi(BS,[["__scopeId","data-v-e414bfc1"]]);class HS{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.raycaster=null,this.nailongCollider=null,this.hitFlashMesh=null,this.hitFlashTimer=null,this.isRunning=!1,this._afterimages=[],this._afterimageTexture=null,this._afterimagesEnabled=!1}init(t){try{const e=t.clientWidth||t.width||window.innerWidth||800,i=t.clientHeight||t.height||window.innerHeight||600;t.width=e,t.height=i,this.scene=new $M,this.scene.background=new qt(518),this.scene.fog=new rc(518,3,14);const s=e/Math.max(i,1),r=s<1?100:75;this.camera=new Je(r,s,.1,60),this.camera.position.set(0,1.6,0),this.renderer=new qM({canvas:t,antialias:!0,alpha:!1}),this.renderer.setSize(e,i,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(518),this.raycaster=new ZM,this._createGround(),this._createTrees(),this._createNailongCollider(),this._createHitFlash(),this._resizeCanvas=t,this._onResizeHandler=()=>this._onResize(this._resizeCanvas),window.addEventListener("resize",this._onResizeHandler),this.isRunning=!0,this.renderer.render(this.scene,this.camera),console.log("Forest scene initialized",{w:e,h:i,fov:r})}catch(e){throw console.error("GameEngine.init failed:",e),e}}_createGround(){const t=new va(16,48),e=new fi({color:657926,side:un,depthWrite:!0}),i=new Ie(t,e);i.rotation.x=-Math.PI/2,i.position.y=-1.6,this.scene.add(i);const s=new va(4,32),r=new fi({color:1118472,side:un,depthWrite:!0}),a=new Ie(s,r);a.rotation.x=-Math.PI/2,a.position.y=-1.59,this.scene.add(a)}_createTrees(){for(let s=0;s<35;s++){const r=s/35*Math.PI*2+(Math.random()-.5)*.4,a=5+Math.random()*10,o=Math.cos(r)*a,l=Math.sin(r)*a,u=3+Math.random()*4,c=.15+Math.random()*.3,f=new Oa(c*.7,c,u,8),d=.03+Math.random()*.04,p=new fi({color:new qt(d,d*.8,d*.5)}),_=new Ie(f,p);_.position.set(o,-1.6+u/2,l),_.castShadow=!1,_.receiveShadow=!1,this.scene.add(_);const M=new ac(.8+Math.random()*1.2,2+Math.random()*3,8),m=.02+Math.random()*.03,h=new fi({color:new qt(m,m*1.2,m*.6)}),A=new Ie(M,h);A.position.set(o,-1.6+u+1,l),this.scene.add(A)}}_createNailongCollider(){const t=new xa(.84,16,16),e=new fi({visible:!1});this.nailongCollider=new Ie(t,e),this.nailongCollider.visible=!1,this.scene.add(this.nailongCollider)}_createHitFlash(){const t=new xa(1.8,16,16),e=new fi({color:16755200,transparent:!0,opacity:0,blending:pa,depthWrite:!1});this.hitFlashMesh=new Ie(t,e),this.hitFlashMesh.visible=!1,this.scene.add(this.hitFlashMesh)}setNailongPosition(t,e,i){this.nailongCollider&&this.nailongCollider.position.set(t,e,i)}checkAim(){if(!this.nailongCollider)return{hit:!1,distance:1/0,point:null};this.raycaster.setFromCamera(new Xt(0,0),this.camera);const t=this.nailongCollider.visible;this.nailongCollider.visible=!0;const e=this.raycaster.intersectObject(this.nailongCollider);return this.nailongCollider.visible=t,e.length>0?{hit:!0,distance:e[0].distance,point:e[0].point.clone()}:{hit:!1,distance:1/0,point:null}}showHitFlash(t){if(!this.hitFlashMesh)return;this.hitFlashMesh.position.copy(t),this.hitFlashMesh.visible=!0,this.hitFlashMesh.material.opacity=1,this.hitFlashTimer&&cancelAnimationFrame(this.hitFlashTimer);const e=performance.now(),i=s=>{const r=Math.max(0,1-(s-e)/400);this.hitFlashMesh.material.opacity=r,r>0?this.hitFlashTimer=requestAnimationFrame(i):this.hitFlashMesh.visible=!1};this.hitFlashTimer=requestAnimationFrame(i)}updateCameraRotation(t){this.camera.quaternion.setFromEuler(t)}getCameraForward(){const t=new H(0,0,-1);return t.applyQuaternion(this.camera.quaternion),t}render(){!this.isRunning||!this.renderer||!this.scene||!this.camera||this.renderer.render(this.scene,this.camera)}enableAfterimages(){if(this._afterimagesEnabled)return;this._afterimagesEnabled=!0;const t=new Image;t.src=oc,t.onload=()=>{this._afterimageTexture=new Fe(t),this._afterimageTexture.needsUpdate=!0,this._afterimageTexture.colorSpace=Ye;for(let e=0;e<5;e++){const i=new $h({map:this._afterimageTexture,blending:pa,transparent:!0,opacity:.08,depthWrite:!1,depthTest:!0}),s=new jM(i);s.scale.set(2.5,2.5,1),s.visible=!1,this.scene.add(s),this._afterimages.push(s)}}}disableAfterimages(){this._afterimagesEnabled=!1,this._afterimages.forEach(t=>{var e,i;t.visible=!1,(e=t.material)==null||e.dispose(),(i=this.scene)==null||i.remove(t)}),this._afterimages=[],this._afterimageTexture&&(this._afterimageTexture.dispose(),this._afterimageTexture=null)}updateAfterimages(t){if(!this._afterimagesEnabled||!this._afterimages.length)return;const e=this._afterimages.length;for(let i=0;i<e;i++){const s=t.length-1-i*Math.max(1,Math.floor(t.length/e));s>=0&&s<t.length?(this._afterimages[i].position.copy(t[s]),this._afterimages[i].visible=!0,this._afterimages[i].material.opacity=.03+(1-i/e)*.05):this._afterimages[i].visible=!1}}_onResize(t){var a;const e=t.clientWidth||window.innerWidth||800,i=t.clientHeight||window.innerHeight||600,s=e/Math.max(i,1),r=s<1?100:75;r!==((a=this.camera)==null?void 0:a.fov)&&(this.camera.fov=r),this.camera&&(this.camera.aspect=s,this.camera.updateProjectionMatrix()),this.renderer&&this.renderer.setSize(e,i)}dispose(){var t,e;this.isRunning=!1,this.hitFlashTimer&&cancelAnimationFrame(this.hitFlashTimer),this._onResizeHandler&&window.removeEventListener("resize",this._onResizeHandler),this.disableAfterimages(),(t=this.renderer)==null||t.dispose(),(e=this.scene)==null||e.clear(),this.scene=null,this.renderer=null}}const GS="/assets/%E5%A5%B6%E9%BE%99%E5%A4%A7%E7%AC%91-X8as31JQ.mp3",VS="/assets/%E5%BC%80%E6%9E%AA%E9%9F%B3%E6%95%88-aE3QZQiK.mp3";class kS{constructor(){this.ctx=null,this.listener=null,this._nailongPanner=null,this._nailongGain=null,this._nailongSource=null,this._nailongBuffer=null,this._isNailongPlaying=!1,this._flashBuffer=null,this._heartbeatGain=null,this._heartbeatSource=null,this._heartbeatBuffer=null,this._heartbeatPlaying=!1,this._heartbeatRate=1,this._bgmGain=null,this._bgmSource=null,this._bgmBuffer=null,this._bgmPlaying=!1,this.masterGain=.7,this.nailongVolume=.55,this._isLoaded=!1}async init(){this.ctx&&this.ctx.state!=="closed"&&await this.ctx.close(),this.ctx=new(window.AudioContext||window.webkitAudioContext),this.ctx.state==="suspended"&&await this.ctx.resume(),this.listener=this.ctx.listener,this.listener.positionX.value=0,this.listener.positionY.value=0,this.listener.positionZ.value=0,this.listener.forwardX.value=0,this.listener.forwardY.value=0,this.listener.forwardZ.value=-1,this.listener.upX.value=0,this.listener.upY.value=1,this.listener.upZ.value=0,await this._loadAudioFiles(),console.log("AudioManager initialized")}async _loadAudioFiles(){try{const[t,e]=await Promise.all([this._loadBuffer(GS),this._loadBuffer(VS)]);this._nailongBuffer=t,this._flashBuffer=e,this._isLoaded=!0,console.log("Audio files loaded")}catch(t){console.warn("Audio load failed, using synthetic fallback:",t.message)}}async _loadBuffer(t){const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);return await this.ctx.decodeAudioData(await e.arrayBuffer())}startNailongSound(){if(!(!this.ctx||this._isNailongPlaying)){if(this._nailongPanner=this.ctx.createPanner(),this._nailongPanner.panningModel="HRTF",this._nailongPanner.distanceModel="inverse",this._nailongPanner.refDistance=4,this._nailongPanner.maxDistance=18,this._nailongPanner.rolloffFactor=1.5,this._nailongGain=this.ctx.createGain(),this._nailongGain.gain.value=0,this._isLoaded&&this._nailongBuffer){const t=this.ctx.createBufferSource();t.buffer=this._nailongBuffer,t.loop=!0,t.connect(this._nailongPanner),t.start(0),this._nailongSource=t}else this._playNailongSynthetic();this._nailongPanner.connect(this._nailongGain),this._nailongGain.connect(this.ctx.destination),this._nailongGain.gain.setTargetAtTime(this.nailongVolume*this.masterGain,this.ctx.currentTime,.3),this._isNailongPlaying=!0}}_playNailongSynthetic(){const t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.value=180;const e=this.ctx.createOscillator();e.type="sine",e.frequency.value=2.5;const i=this.ctx.createGain();i.gain.value=.5;const s=this.ctx.createGain();s.gain.value=0,e.connect(i),i.connect(s.gain),t.connect(s),s.connect(this._nailongPanner),t.start(),e.start(),this._nailongSource=t,this._synthNodes=[t,e,i,s]}stopNailongSound(){var t,e,i,s,r;if(this._isNailongPlaying){try{(e=(t=this._nailongSource)==null?void 0:t.stop)==null||e.call(t)}catch{}if(this._synthNodes){for(const a of this._synthNodes){try{a.stop()}catch{}a==null||a.disconnect()}this._synthNodes=null}(i=this._nailongSource)==null||i.disconnect(),(s=this._nailongGain)==null||s.disconnect(),(r=this._nailongPanner)==null||r.disconnect(),this._nailongSource=null,this._nailongGain=null,this._nailongPanner=null,this._isNailongPlaying=!1}}updateNailongPosition(t,e,i){this._nailongPanner&&(this._nailongPanner.positionX.value=t,this._nailongPanner.positionY.value=e,this._nailongPanner.positionZ.value=i)}setNailongVolumeByDistance(t){if(!this._nailongGain)return;const e=Math.min(1,1/Math.max(1,t/4));this._nailongGain.gain.setTargetAtTime(e*this.nailongVolume*this.masterGain,this.ctx.currentTime,.2)}startHeartbeat(){!this.ctx||this._heartbeatPlaying||(this._heartbeatGain=this.ctx.createGain(),this._heartbeatGain.gain.value=0,this._heartbeatGain.connect(this.ctx.destination),this._heartbeatPlaying=!0,this._beatHeart())}_beatHeart(){if(!this._heartbeatPlaying||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(50,t),e.frequency.linearRampToValueAtTime(30,t+.15);const i=this.ctx.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.5,t+.05),i.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(i),i.connect(this._heartbeatGain),e.start(t),e.stop(t+.25);const s=.6/Math.max(.5,this._heartbeatRate);this._heartbeatTimer=setTimeout(()=>this._beatHeart(),s*1e3)}stopHeartbeat(){var t;this._heartbeatPlaying=!1,this._heartbeatTimer&&clearTimeout(this._heartbeatTimer),(t=this._heartbeatGain)==null||t.disconnect(),this._heartbeatGain=null}updateHeartbeatRate(t){if(this._heartbeatRate=Al.clamp(3/Math.max(1,t/3),.6,3.5),this._heartbeatGain){const e=.25+.45/Math.max(1,t/4);this._heartbeatGain.gain.setTargetAtTime(e*this.masterGain,this.ctx.currentTime,.3)}}startBGM(){}stopBGM(){var t,e,i;this._bgmPlaying=!1,(e=(t=this._bgmSource)==null?void 0:t.stop)==null||e.call(t),(i=this._bgmGain)==null||i.disconnect(),this._bgmGain=null}playFlashSound(){if(this.ctx)if(this._flashBuffer){const t=this.ctx.createBufferSource();t.buffer=this._flashBuffer;const e=this.ctx.createGain();e.gain.value=.6*this.masterGain,t.connect(e),e.connect(this.ctx.destination),t.start(0)}else this._playSyntheticFlash()}_playSyntheticFlash(){const t=this.ctx.currentTime,e=this.ctx.createBuffer(1,this.ctx.sampleRate*.08,this.ctx.sampleRate),i=e.getChannelData(0);for(let o=0;o<i.length;o++)i[o]=(Math.random()*2-1)*Math.exp(-o/i.length*30)*.5;const s=this.ctx.createBufferSource();s.buffer=e;const r=this.ctx.createGain();r.gain.value=.6*this.masterGain;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=2e3,s.connect(a),a.connect(r),r.connect(this.ctx.destination),s.start(t),s.stop(t+.1)}playHitSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=(i,s,r,a)=>{const o=this.ctx.createOscillator();o.type="sine",o.frequency.value=i;const l=this.ctx.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(a,s+.02),l.gain.exponentialRampToValueAtTime(.001,s+r),o.connect(l),l.connect(this.ctx.destination),o.start(s),o.stop(s+r)};e(800,t,.15,.5*this.masterGain),e(1200,t+.08,.12,.35*this.masterGain)}playMissSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(200,t),e.frequency.linearRampToValueAtTime(80,t+.2);const i=this.ctx.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.2*this.masterGain,t+.05),i.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.3)}playWinSound(){if(!this.ctx)return;const t=this.ctx.currentTime;[523,659,784,1047].forEach((e,i)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t+i*.15),r.gain.linearRampToValueAtTime(.3*this.masterGain,t+i*.15+.05),r.gain.exponentialRampToValueAtTime(.001,t+i*.15+.4),s.connect(r),r.connect(this.ctx.destination),s.start(t+i*.15),s.stop(t+i*.15+.5)})}playLoseSound(){if(!this.ctx)return;const t=this.ctx.currentTime;[400,300,200].forEach((e,i)=>{const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t+i*.25),r.gain.linearRampToValueAtTime(.25*this.masterGain,t+i*.25+.05),r.gain.exponentialRampToValueAtTime(.001,t+i*.25+.5),s.connect(r),r.connect(this.ctx.destination),s.start(t+i*.25),s.stop(t+i*.25+.6)})}updateListenerOrientation(t,e){this.listener&&(this.listener.forwardX.value=t.x,this.listener.forwardY.value=t.y,this.listener.forwardZ.value=t.z,this.listener.upX.value=e.x,this.listener.upY.value=e.y,this.listener.upZ.value=e.z)}dispose(){this.stopNailongSound(),this.stopHeartbeat(),this.stopBGM(),this.ctx&&this.ctx.state!=="closed"&&this.ctx.close(),this.ctx=null}}class WS{constructor(){this.yaw=0,this.pitch=0,this._targetYaw=0,this._targetPitch=0,this._calibrationYaw=0,this._calibrationPitch=0,this.mouseSensitivity=.0025,this.touchSensitivity=.008,this.gyroSensitivity=1,this.smoothFactor=.15,this.maxPitch=Math.PI/2.2,this.minPitch=-Math.PI/2.2,this.isEnabled=!1,this.isCalibrated=!1,this._mouseActive=!1,this._isGyroActive=!1,this._permissionGranted=!1,this._lastGyroTime=0,this._lastMouseX=null,this._lastMouseY=null,this._lastTouchId=null,this._lastTouchX=null,this._lastTouchY=null,this._lastAlpha=null,this._accumYaw=0,this._calibrationBeta=45,this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onDeviceOrientation=this._onDeviceOrientation.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this)}async requestPermission(){if(!window.isSecureContext)return console.log("[Gyro] ⚠️ 非安全上下文，陀螺仪不可用。需 HTTPS 或 localhost"),this._permissionGranted=!1,"insecure";if(!window.DeviceOrientationEvent)return console.log("[Gyro] 设备不支持 DeviceOrientationEvent"),this._permissionGranted=!1,"unavailable";if(typeof DeviceOrientationEvent.requestPermission=="function")try{const e=await DeviceOrientationEvent.requestPermission();return this._permissionGranted=e==="granted",console.log("[Gyro] iOS 权限:",e),e}catch{return this._permissionGranted=!1,"denied"}return this._permissionGranted=!0,console.log("[Gyro] 安全上下文，陀螺仪可用"),"granted"}init(){this._removeAllListeners(),this._addAllListeners()}_removeAllListeners(){window.removeEventListener("deviceorientation",this._onDeviceOrientation),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("touchstart",this._onTouchStart),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),this._mouseActive=!1,this._isGyroActive=!1,this.isEnabled=!1,this._lastMouseX=null,this._lastMouseY=null,this._lastTouchId=null,this._lastAlpha=null,this._accumYaw=0}_addAllListeners(){document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("touchstart",this._onTouchStart,{passive:!1}),document.addEventListener("touchmove",this._onTouchMove,{passive:!1}),document.addEventListener("touchend",this._onTouchEnd),this._permissionGranted&&(window.addEventListener("deviceorientation",this._onDeviceOrientation),console.log("[Gyro] deviceorientation 监听已添加"))}_onDeviceOrientation(t){if(!this.isEnabled||t.alpha===null||t.alpha===void 0)return;this._lastGyroTime=performance.now();const e=t.alpha,i=t.beta,s=t.gamma;if(!this._isGyroActive){this._isGyroActive=!0,this._lastAlpha=null,this._accumYaw=0,this._calibrationBeta=i,console.log("[Gyro] ✅ 陀螺仪激活, 初始 beta=%.1f°",i);return}if(this._lastAlpha!==null){let l=e-this._lastAlpha;l>180&&(l-=360),l<-180&&(l+=360),this._accumYaw+=l}this._lastAlpha=e;const r=i-this._calibrationBeta,a=window.innerWidth>window.innerHeight;let o=r;a&&(o=-s),this._targetYaw=Al.degToRad(this._accumYaw)*this.gyroSensitivity,this._targetPitch=Al.degToRad(o)*this.gyroSensitivity*.7}_isGyroTimedOut(){return!this._isGyroActive||performance.now()-this._lastGyroTime>2e3}_onMouseDown(t){if(!this.isEnabled)return;const e=t.target;e&&(e.id==="game-canvas"||e.closest("#game-canvas"))&&(this._mouseActive=!0,this._lastMouseX=t.clientX,this._lastMouseY=t.clientY,console.log("[Input] 🖱️ 鼠标已激活（点击画布）"))}_onMouseMove(t){if(this.isEnabled&&this._mouseActive){if(this._lastMouseX!==null){const e=t.clientX-this._lastMouseX,i=t.clientY-this._lastMouseY;(Math.abs(e)>0||Math.abs(i)>0)&&(this._targetYaw-=e*this.mouseSensitivity,this._targetPitch-=i*this.mouseSensitivity)}this._lastMouseX=t.clientX,this._lastMouseY=t.clientY}}_onTouchStart(t){if(this.isEnabled&&this._isGyroTimedOut()){if(t.touches.length===1){const e=t.touches[0];this._lastTouchId=e.identifier,this._lastTouchX=e.clientX,this._lastTouchY=e.clientY}t.preventDefault()}}_onTouchMove(t){if(!this.isEnabled||!this._isGyroTimedOut()||t.touches.length!==1)return;const e=t.touches[0];if(this._lastTouchId===e.identifier){const i=e.clientX-this._lastTouchX,s=e.clientY-this._lastTouchY;(Math.abs(i)>0||Math.abs(s)>0)&&(this._targetYaw+=i*this.touchSensitivity,this._targetPitch+=s*this.touchSensitivity)}this._lastTouchX=e.clientX,this._lastTouchY=e.clientY,t.preventDefault()}_onTouchEnd(t){this._lastTouchId=null}calibrate(){this._isGyroActive?(this._accumYaw=0,this._lastAlpha=null,this._targetYaw=0,this._targetPitch=0,console.log("[Gyro] 校准完成 — 视角归零")):(this._targetYaw=0,this._targetPitch=0,this._lastMouseX=null,this._lastMouseY=null,this._mouseActive=!1,console.log("[Input] 桌面校准：视角归零（需点击画布激活鼠标）")),this.isCalibrated=!0}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}update(){this._targetPitch=Math.max(this.minPitch,Math.min(this.maxPitch,this._targetPitch)),this.yaw+=(this._targetYaw-this.yaw)*this.smoothFactor,this.pitch+=(this._targetPitch-this.pitch)*this.smoothFactor}getEuler(){return new Pn(this.pitch,this.yaw,0,"YXZ")}dispose(){this.disable(),this._removeAllListeners()}}class XS{constructor(){this.position=new H,this._target=new H,this._velocity=new H,this.state="idle",this._hitTimer=0,this._moveSpeed=0,this.config={minSpawnDist:10,maxSpawnDist:16,minSpeed:.8,maxSpeed:2.5,killDistance:2,hitCooldown:2}}reset(){this.state="idle",this._hitTimer=0}spawn(t=new H,e=null){this.position.copy(this._randomForestPoint(t,e)),this._moveSpeed=this.config.minSpeed+Math.random()*(this.config.maxSpeed-this.config.minSpeed),this.state="moving",this._hitTimer=0}onHit(){this.state="hit",this._hitTimer=this.config.hitCooldown}update(t,e){if(this.state==="hit")return this._hitTimer-=t,this._hitTimer<=0&&this.spawn(e,this.position.clone()),{gameOver:!1};if(this.state==="moving"){const s=new H().subVectors(e,this.position);if(s.length()<=this.config.killDistance)return{gameOver:!0};s.normalize(),this.position.add(s.multiplyScalar(this._moveSpeed*t))}return this.position.length()>this.config.maxSpawnDist&&this.position.normalize().multiplyScalar(this.config.maxSpawnDist-.5),{gameOver:!1}}distanceTo(t=new H){return this.position.distanceTo(t)}_randomForestPoint(t,e=null){for(let i=0;i<20;i++){const s=Math.random()*Math.PI*2,r=this.config.minSpawnDist+Math.random()*(this.config.maxSpawnDist-this.config.minSpawnDist),a=-1.2+Math.random()*2,o=new H(t.x+Math.cos(s)*r,t.y+a,t.z+Math.sin(s)*r);if(!(e&&o.distanceTo(e)<4))return o}return new H(this.config.minSpawnDist,0,0)}dispose(){}}const ze={IDLE:"idle",STARTING:"starting",PLAYING:"playing",GAME_OVER:"game_over"};class YS{constructor(){this.state=ze.IDLE,this.score=0,this.kills=0,this.shotsFired=0,this.timeRemaining=60,this.roundTime=60,this.bestScore=0,this.won=!1,this._onStateChange=null,this._onScoreChange=null,this._onTimeChange=null,this._timerInterval=null,this._loadBestScore()}onStateChange(t){this._onStateChange=t}onScoreChange(t){this._onScoreChange=t}onTimeChange(t){this._onTimeChange=t}start(){this.score=0,this.kills=0,this.shotsFired=0,this.timeRemaining=this.roundTime,this._transition(ze.STARTING)}ready(){this.state===ze.STARTING&&(this._transition(ze.PLAYING),this._startTimer())}recordShot(){this.state===ze.PLAYING&&this.shotsFired++}recordKill(){this.state===ze.PLAYING&&(this.kills++,this.score+=100,this._onScoreChange&&this._onScoreChange(this.score,this.kills))}_onTimeUp(){this._stopTimer(),this._transition(ze.GAME_OVER),this.score>this.bestScore&&(this.bestScore=this.score,this._saveBestScore())}endGame(){this._stopTimer(),this._transition(ze.GAME_OVER),this.score>this.bestScore&&(this.bestScore=this.score,this._saveBestScore())}backToMenu(){this._stopTimer(),this._transition(ze.IDLE)}getAccuracy(){return this.shotsFired===0?0:Math.round(this.kills/this.shotsFired*100)}_transition(t){const e=this.state;this.state=t,this._onStateChange&&this._onStateChange(t,e)}_startTimer(){this._stopTimer(),this._timerInterval=setInterval(()=>{this.timeRemaining--,this._onTimeChange&&this._onTimeChange(this.timeRemaining),this.timeRemaining<=0&&this._onTimeUp()},1e3)}_stopTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}_loadBestScore(){try{const t=localStorage.getItem("kill_nailong_best");t&&(this.bestScore=parseInt(t,10)||0)}catch{}}_saveBestScore(){try{localStorage.setItem("kill_nailong_best",String(this.bestScore))}catch{}}dispose(){this._stopTimer()}}const qS={id:"app-root"},$S={__name:"App",setup(n){const t=new HS,e=new kS,i=new WS,s=new XS,r=new YS,a=fs("idle"),o=fs("none"),l=fs(r.bestScore),u=fs({state:"idle",score:0,timeRemaining:60,bestScore:0,won:!1,getAccuracy:()=>0});function c(){u.value={state:r.state,score:r.score,timeRemaining:r.timeRemaining,bestScore:r.bestScore,won:r.won,getAccuracy:()=>r.getAccuracy()}}let f=null,d=0,p=!1,_="idle",M=null;const m=new H(0,0,0),h=new H(0,1,0);function A(v){if(!p)return;const R=Math.min((v-d)/1e3,.1);d=v,i.update();const I=i.getEuler();t.updateCameraRotation(I);const z=t.getCameraForward();if(e.updateListenerOrientation(z,h),r.state===ze.PLAYING){if(s.update(R,m).gameOver){S(!1);return}const tt=s.position;t.setNailongPosition(tt.x,tt.y,tt.z),e.updateNailongPosition(tt.x,tt.y,tt.z);const $=s.distanceTo(m);e.updateHeartbeatRate($),_==="hit"&&s.state!=="hit"&&e.startNailongSound(),_=s.state}t.render(),f=requestAnimationFrame(A)}async function b(){console.log("handleStart"),r.start(),a.value=r.state,c();try{await i.requestPermission()}catch{}if(await new Promise(R=>requestAnimationFrame(()=>requestAnimationFrame(R))),!t.isRunning){const R=document.getElementById("game-canvas");if(R)t.init(R);else{console.error("canvas not found");return}}try{await e.init()}catch(R){console.error("audio init:",R)}i.init(),i.calibrate(),i.enable(),s.reset(),s.spawn(m),_="idle";const v=s.position;t.setNailongPosition(v.x,v.y,v.z),e.updateNailongPosition(v.x,v.y,v.z),e.startNailongSound(),e.startHeartbeat(),document.addEventListener("keydown",C),p||(p=!0,d=performance.now(),f=requestAnimationFrame(A)),r.ready(),a.value=r.state,c(),console.log("game ready")}function S(v){console.log("Game over:",v?"WIN":"LOSE"),p=!1,f&&cancelAnimationFrame(f),v?e.playWinSound():e.playLoseSound(),e.stopHeartbeat(),e.stopNailongSound(),document.removeEventListener("keydown",C),i.disable(),r.won=v,v&&r.score>l.value&&(l.value=r.score),r.endGame(),a.value=r.state,c()}function F(){if(r.state!==ze.PLAYING)return;e.playFlashSound();const v=t.checkAim();v.hit?(r.recordKill(),c(),e.playHitSound(),t.showHitFlash(v.point),s.onHit(),e.stopNailongSound(),_="hit",L("kill",2e3)):e.playMissSound()}function L(v,R=1800){M&&clearTimeout(M),o.value=v,M=setTimeout(()=>{o.value="none"},R)}function C(v){(v.code==="Space"||v.key===" ")&&(v.preventDefault(),F())}function U(){p=!1,f&&cancelAnimationFrame(f),M&&clearTimeout(M),o.value="none",i.disable(),e.stopNailongSound(),e.stopHeartbeat(),e.stopBGM(),t.dispose(),document.removeEventListener("keydown",C),r.backToMenu(),a.value=r.state,c()}const E=setInterval(()=>{(r.state===ze.PLAYING||r.state===ze.GAME_OVER)&&(c(),r.timeRemaining<=0&&r.state===ze.PLAYING&&S(!0))},500);return Ca(()=>{clearInterval(E),p=!1,f&&cancelAnimationFrame(f),M&&clearTimeout(M),document.removeEventListener("keydown",C),i.dispose(),e.dispose(),t.dispose(),r.dispose()}),(v,R)=>(He(),mn("div",qS,[Sc(ge(sS,{"best-score":l.value,onStart:b},null,8,["best-score"]),[[kc,a.value==="idle"]]),Sc(ge(zS,{"game-state":u.value,"gif-type":o.value,onFire:F,onRestart:b,onBackToMenu:U},null,8,["game-state","gif-type"]),[[kc,a.value!=="idle"]])]))}},KS=vi($S,[["__scopeId","data-v-2dd59501"]]);wm(KS).mount("#app");
