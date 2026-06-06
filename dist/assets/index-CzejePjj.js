(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ll(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const re={},ms=[],Pn=()=>{},nf=()=>!1,ya=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ea=n=>n.startsWith("onUpdate:"),ye=Object.assign,Dl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},td=Object.prototype.hasOwnProperty,Qt=(n,t)=>td.call(n,t),Ut=Array.isArray,gs=n=>dr(n)==="[object Map]",sf=n=>dr(n)==="[object Set]",vc=n=>dr(n)==="[object Date]",Gt=n=>typeof n=="function",he=n=>typeof n=="string",Ln=n=>typeof n=="symbol",te=n=>n!==null&&typeof n=="object",rf=n=>(te(n)||Gt(n))&&Gt(n.then)&&Gt(n.catch),af=Object.prototype.toString,dr=n=>af.call(n),ed=n=>dr(n).slice(8,-1),of=n=>dr(n)==="[object Object]",Il=n=>he(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ks=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ta=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},nd=/-\w/g,gn=Ta(n=>n.replace(nd,t=>t.slice(1).toUpperCase())),id=/\B([A-Z])/g,Yi=Ta(n=>n.replace(id,"-$1").toLowerCase()),lf=Ta(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ha=Ta(n=>n?`on${lf(n)}`:""),Rn=(n,t)=>!Object.is(n,t),Va=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},cf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},sd=n=>{const t=parseFloat(n);return isNaN(t)?n:t},rd=n=>{const t=he(n)?Number(n):NaN;return isNaN(t)?n:t};let xc;const ba=()=>xc||(xc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Aa(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=he(i)?cd(i):Aa(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(he(n)||te(n))return n}const ad=/;(?![^(]*\))/g,od=/:([^]+)/,ld=/\/\*[^]*?\*\//g;function cd(n){const t={};return n.replace(ld,"").split(ad).forEach(e=>{if(e){const i=e.split(od);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function yi(n){let t="";if(he(n))t=n;else if(Ut(n))for(let e=0;e<n.length;e++){const i=yi(n[e]);i&&(t+=i+" ")}else if(te(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fd=Ll(ud);function uf(n){return!!n||n===""}function hd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Ul(n[i],t[i]);return e}function Ul(n,t){if(n===t)return!0;let e=vc(n),i=vc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Ln(n),i=Ln(t),e||i)return n===t;if(e=Ut(n),i=Ut(t),e||i)return e&&i?hd(n,t):!1;if(e=te(n),i=te(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Ul(n[a],t[a]))return!1}}return String(n)===String(t)}const ff=n=>!!(n&&n.__v_isRef===!0),Re=n=>he(n)?n:n==null?"":Ut(n)||te(n)&&(n.toString===af||!Gt(n.toString))?ff(n)?Re(n.value):JSON.stringify(n,hf,2):String(n),hf=(n,t)=>ff(t)?hf(n,t.value):gs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[ka(i,r)+" =>"]=s,e),{})}:sf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ka(e))}:Ln(t)?ka(t):te(t)&&!Ut(t)&&!of(t)?String(t):t,ka=(n,t="")=>{var e;return Ln(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class dd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ee&&(Ee.active?(this.parent=Ee,this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ee;try{return Ee=this,t()}finally{Ee=e}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){if(this._on>0&&--this._on===0){if(Ee===this)Ee=this.prevScope;else{let t=Ee;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pd(){return Ee}let oe;const Wa=new WeakSet;class df{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&(Ee.active?Ee.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mc(this),gf(this);const t=oe,e=_n;oe=this,_n=!0;try{return this.fn()}finally{_f(this),oe=t,_n=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ol(t);this.deps=this.depsTail=void 0,Mc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Po(this)&&this.run()}get dirty(){return Po(this)}}let pf=0,js,Zs;function mf(n,t=!1){if(n.flags|=8,t){n.next=Zs,Zs=n;return}n.next=js,js=n}function Nl(){pf++}function Fl(){if(--pf>0)return;if(Zs){let t=Zs;for(Zs=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;js;){let t=js;for(js=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function gf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function _f(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Ol(i),md(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Po(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(vf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function vf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===sr)||(n.globalVersion=sr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Po(n))))return;n.flags|=2;const t=n.dep,e=oe,i=_n;oe=n,_n=!0;try{gf(n);const s=n.fn(n._value);(t.version===0||Rn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{oe=e,_n=i,_f(n),n.flags&=-3}}function Ol(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Ol(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function md(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let _n=!0;const xf=[];function Qn(){xf.push(_n),_n=!1}function ti(){const n=xf.pop();_n=n===void 0?!0:n}function Mc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=oe;oe=void 0;try{t()}finally{oe=e}}}let sr=0;class gd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!oe||!_n||oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==oe)e=this.activeLink=new gd(oe,this),oe.deps?(e.prevDep=oe.depsTail,oe.depsTail.nextDep=e,oe.depsTail=e):oe.deps=oe.depsTail=e,Mf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=oe.depsTail,e.nextDep=void 0,oe.depsTail.nextDep=e,oe.depsTail=e,oe.deps===e&&(oe.deps=i)}return e}trigger(t){this.version++,sr++,this.notify(t)}notify(t){Nl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Fl()}}}function Mf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Mf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Lo=new WeakMap,Vi=Symbol(""),Do=Symbol(""),rr=Symbol("");function we(n,t,e){if(_n&&oe){let i=Lo.get(n);i||Lo.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Bl),s.map=i,s.key=e),s.track()}}function qn(n,t,e,i,s,r){const a=Lo.get(n);if(!a){sr++;return}const o=l=>{l&&l.trigger()};if(Nl(),t==="clear")a.forEach(o);else{const l=Ut(n),u=l&&Il(e);if(l&&e==="length"){const c=Number(i);a.forEach((f,d)=>{(d==="length"||d===rr||!Ln(d)&&d>=c)&&o(f)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),u&&o(a.get(rr)),t){case"add":l?u&&o(a.get("length")):(o(a.get(Vi)),gs(n)&&o(a.get(Do)));break;case"delete":l||(o(a.get(Vi)),gs(n)&&o(a.get(Do)));break;case"set":gs(n)&&o(a.get(Vi));break}}Fl()}function $i(n){const t=Kt(n);return t===n?t:(we(t,"iterate",rr),rn(n)?t:t.map(Mn))}function wa(n){return we(n=Kt(n),"iterate",rr),n}function bn(n,t){return ei(n)?ys(ki(n)?Mn(t):t):Mn(t)}const _d={__proto__:null,[Symbol.iterator](){return Xa(this,Symbol.iterator,n=>bn(this,n))},concat(...n){return $i(this).concat(...n.map(t=>Ut(t)?$i(t):t))},entries(){return Xa(this,"entries",n=>(n[1]=bn(this,n[1]),n))},every(n,t){return Fn(this,"every",n,t,void 0,arguments)},filter(n,t){return Fn(this,"filter",n,t,e=>e.map(i=>bn(this,i)),arguments)},find(n,t){return Fn(this,"find",n,t,e=>bn(this,e),arguments)},findIndex(n,t){return Fn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Fn(this,"findLast",n,t,e=>bn(this,e),arguments)},findLastIndex(n,t){return Fn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Fn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ya(this,"includes",n)},indexOf(...n){return Ya(this,"indexOf",n)},join(n){return $i(this).join(n)},lastIndexOf(...n){return Ya(this,"lastIndexOf",n)},map(n,t){return Fn(this,"map",n,t,void 0,arguments)},pop(){return Us(this,"pop")},push(...n){return Us(this,"push",n)},reduce(n,...t){return Sc(this,"reduce",n,t)},reduceRight(n,...t){return Sc(this,"reduceRight",n,t)},shift(){return Us(this,"shift")},some(n,t){return Fn(this,"some",n,t,void 0,arguments)},splice(...n){return Us(this,"splice",n)},toReversed(){return $i(this).toReversed()},toSorted(n){return $i(this).toSorted(n)},toSpliced(...n){return $i(this).toSpliced(...n)},unshift(...n){return Us(this,"unshift",n)},values(){return Xa(this,"values",n=>bn(this,n))}};function Xa(n,t,e){const i=wa(n),s=i[t]();return i!==n&&!rn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const vd=Array.prototype;function Fn(n,t,e,i,s,r){const a=wa(n),o=a!==n&&!rn(n),l=a[t];if(l!==vd[t]){const f=l.apply(n,r);return o?Mn(f):f}let u=e;a!==n&&(o?u=function(f,d){return e.call(this,bn(n,f),d,n)}:e.length>2&&(u=function(f,d){return e.call(this,f,d,n)}));const c=l.call(a,u,i);return o&&s?s(c):c}function Sc(n,t,e,i){const s=wa(n),r=s!==n&&!rn(n);let a=e,o=!1;s!==n&&(r?(o=i.length===0,a=function(u,c,f){return o&&(o=!1,u=bn(n,u)),e.call(this,u,bn(n,c),f,n)}):e.length>3&&(a=function(u,c,f){return e.call(this,u,c,f,n)}));const l=s[t](a,...i);return o?bn(n,l):l}function Ya(n,t,e){const i=Kt(n);we(i,"iterate",rr);const s=i[t](...e);return(s===-1||s===!1)&&Hl(e[0])?(e[0]=Kt(e[0]),i[t](...e)):s}function Us(n,t,e=[]){Qn(),Nl();const i=Kt(n)[t].apply(n,e);return Fl(),ti(),i}const xd=Ll("__proto__,__v_isRef,__isVue"),Sf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ln));function Md(n){Ln(n)||(n=String(n));const t=Kt(this);return we(t,"has",n),t.hasOwnProperty(n)}class yf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Pd:Af:r?bf:Tf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Ut(t);if(!s){let l;if(a&&(l=_d[e]))return l;if(e==="hasOwnProperty")return Md}const o=Reflect.get(t,e,Ce(t)?t:i);if((Ln(e)?Sf.has(e):xd(e))||(s||we(t,"get",e),r))return o;if(Ce(o)){const l=a&&Il(e)?o:o.value;return s&&te(l)?Uo(l):l}return te(o)?s?Uo(o):pr(o):o}}class Ef extends yf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const a=Ut(t)&&Il(e);if(!this._isShallow){const u=ei(r);if(!rn(i)&&!ei(i)&&(r=Kt(r),i=Kt(i)),!a&&Ce(r)&&!Ce(i))return u||(r.value=i),!0}const o=a?Number(e)<t.length:Qt(t,e),l=Reflect.set(t,e,i,Ce(t)?t:s);return t===Kt(s)&&(o?Rn(i,r)&&qn(t,"set",e,i):qn(t,"add",e,i)),l}deleteProperty(t,e){const i=Qt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&qn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Ln(e)||!Sf.has(e))&&we(t,"has",e),i}ownKeys(t){return we(t,"iterate",Ut(t)?"length":Vi),Reflect.ownKeys(t)}}class Sd extends yf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const yd=new Ef,Ed=new Sd,Td=new Ef(!0);const Io=n=>n,Tr=n=>Reflect.getPrototypeOf(n);function bd(n,t,e){return function(...i){const s=this.__v_raw,r=Kt(s),a=gs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=s[n](...i),c=e?Io:t?ys:Mn;return!t&&we(r,"iterate",l?Do:Vi),ye(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:o?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function br(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Ad(n,t){const e={get(s){const r=this.__v_raw,a=Kt(r),o=Kt(s);n||(Rn(s,o)&&we(a,"get",s),we(a,"get",o));const{has:l}=Tr(a),u=t?Io:n?ys:Mn;if(l.call(a,s))return u(r.get(s));if(l.call(a,o))return u(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&we(Kt(s),"iterate",Vi),s.size},has(s){const r=this.__v_raw,a=Kt(r),o=Kt(s);return n||(Rn(s,o)&&we(a,"has",s),we(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=Kt(o),u=t?Io:n?ys:Mn;return!n&&we(l,"iterate",Vi),o.forEach((c,f)=>s.call(r,u(c),u(f),a))}};return ye(e,n?{add:br("add"),set:br("set"),delete:br("delete"),clear:br("clear")}:{add(s){const r=Kt(this),a=Tr(r),o=Kt(s),l=!t&&!rn(s)&&!ei(s)?o:s;return a.has.call(r,l)||Rn(s,l)&&a.has.call(r,s)||Rn(o,l)&&a.has.call(r,o)||(r.add(l),qn(r,"add",l,l)),this},set(s,r){!t&&!rn(r)&&!ei(r)&&(r=Kt(r));const a=Kt(this),{has:o,get:l}=Tr(a);let u=o.call(a,s);u||(s=Kt(s),u=o.call(a,s));const c=l.call(a,s);return a.set(s,r),u?Rn(r,c)&&qn(a,"set",s,r):qn(a,"add",s,r),this},delete(s){const r=Kt(this),{has:a,get:o}=Tr(r);let l=a.call(r,s);l||(s=Kt(s),l=a.call(r,s)),o&&o.call(r,s);const u=r.delete(s);return l&&qn(r,"delete",s,void 0),u},clear(){const s=Kt(this),r=s.size!==0,a=s.clear();return r&&qn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=bd(s,n,t)}),e}function zl(n,t){const e=Ad(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Qt(e,s)&&s in i?e:i,s,r)}const wd={get:zl(!1,!1)},Rd={get:zl(!1,!0)},Cd={get:zl(!0,!1)};const Tf=new WeakMap,bf=new WeakMap,Af=new WeakMap,Pd=new WeakMap;function Ld(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pr(n){return ei(n)?n:Gl(n,!1,yd,wd,Tf)}function Dd(n){return Gl(n,!1,Td,Rd,bf)}function Uo(n){return Gl(n,!0,Ed,Cd,Af)}function Gl(n,t,e,i,s){if(!te(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=Ld(ed(n));if(a===0)return n;const o=new Proxy(n,a===2?i:e);return s.set(n,o),o}function ki(n){return ei(n)?ki(n.__v_raw):!!(n&&n.__v_isReactive)}function ei(n){return!!(n&&n.__v_isReadonly)}function rn(n){return!!(n&&n.__v_isShallow)}function Hl(n){return n?!!n.__v_raw:!1}function Kt(n){const t=n&&n.__v_raw;return t?Kt(t):n}function Id(n){return!Qt(n,"__v_skip")&&Object.isExtensible(n)&&cf(n,"__v_skip",!0),n}const Mn=n=>te(n)?pr(n):n,ys=n=>te(n)?Uo(n):n;function Ce(n){return n?n.__v_isRef===!0:!1}function Xn(n){return Ud(n,!1)}function Ud(n,t){return Ce(n)?n:new Nd(n,t)}class Nd{constructor(t,e){this.dep=new Bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Kt(t),this._value=e?t:Mn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||rn(t)||ei(t);t=i?t:Kt(t),Rn(t,e)&&(this._rawValue=t,this._value=i?t:Mn(t),this.dep.trigger())}}function wf(n){return Ce(n)?n.value:n}const Fd={get:(n,t,e)=>t==="__v_raw"?n:wf(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ce(s)&&!Ce(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Rf(n){return ki(n)?n:new Proxy(n,Fd)}class Od{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return mf(this,!0),!0}get value(){const t=this.dep.track();return vf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bd(n,t,e=!1){let i,s;return Gt(n)?i=n:(i=n.get,s=n.set),new Od(i,s,e)}const Ar={},oa=new WeakMap;let Ui;function zd(n,t=!1,e=Ui){if(e){let i=oa.get(e);i||oa.set(e,i=[]),i.push(n)}}function Gd(n,t,e=re){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=e,u=S=>s?S:rn(S)||s===!1||s===0?$n(S,1):$n(S);let c,f,d,p,_=!1,x=!1;if(Ce(n)?(f=()=>n.value,_=rn(n)):ki(n)?(f=()=>u(n),_=!0):Ut(n)?(x=!0,_=n.some(S=>ki(S)||rn(S)),f=()=>n.map(S=>{if(Ce(S))return S.value;if(ki(S))return u(S);if(Gt(S))return l?l(S,2):S()})):Gt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){Qn();try{d()}finally{ti()}}const S=Ui;Ui=c;try{return l?l(n,3,[p]):n(p)}finally{Ui=S}}:f=Pn,t&&s){const S=f,F=s===!0?1/0:s;f=()=>$n(S(),F)}const m=pd(),h=()=>{c.stop(),m&&m.active&&Dl(m.effects,c)};if(r&&t){const S=t;t=(...F)=>{S(...F),h()}}let b=x?new Array(n.length).fill(Ar):Ar;const A=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const F=c.run();if(s||_||(x?F.some((L,P)=>Rn(L,b[P])):Rn(F,b))){d&&d();const L=Ui;Ui=c;try{const P=[F,b===Ar?void 0:x&&b[0]===Ar?[]:b,p];b=F,l?l(t,3,P):t(...P)}finally{Ui=L}}}else c.run()};return o&&o(A),c=new df(f),c.scheduler=a?()=>a(A,!1):A,p=S=>zd(S,!1,c),d=c.onStop=()=>{const S=oa.get(c);if(S){if(l)l(S,4);else for(const F of S)F();oa.delete(c)}},t?i?A(!0):b=c.run():a?a(A.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function $n(n,t=1/0,e){if(t<=0||!te(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ce(n))$n(n.value,t,e);else if(Ut(n))for(let i=0;i<n.length;i++)$n(n[i],t,e);else if(sf(n)||gs(n))n.forEach(i=>{$n(i,t,e)});else if(of(n)){for(const i in n)$n(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$n(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(n,t,e,i){try{return i?n(...i):n()}catch(s){Ra(s,t,e)}}function an(n,t,e,i){if(Gt(n)){const s=mr(n,t,e,i);return s&&rf(s)&&s.catch(r=>{Ra(r,t,e)}),s}if(Ut(n)){const s=[];for(let r=0;r<n.length;r++)s.push(an(n[r],t,e,i));return s}}function Ra(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||re;if(t){let o=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(r){Qn(),mr(r,null,10,[n,l,u]),ti();return}}Hd(n,e,s,i,a)}function Hd(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ue=[];let Tn=-1;const _s=[];let di=null,ds=0;const Cf=Promise.resolve();let la=null;function Vd(n){const t=la||Cf;return n?t.then(this?n.bind(this):n):t}function kd(n){let t=Tn+1,e=Ue.length;for(;t<e;){const i=t+e>>>1,s=Ue[i],r=ar(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Vl(n){if(!(n.flags&1)){const t=ar(n),e=Ue[Ue.length-1];!e||!(n.flags&2)&&t>=ar(e)?Ue.push(n):Ue.splice(kd(t),0,n),n.flags|=1,Pf()}}function Pf(){la||(la=Cf.then(Df))}function Wd(n){Ut(n)?_s.push(...n):di&&n.id===-1?di.splice(ds+1,0,n):n.flags&1||(_s.push(n),n.flags|=1),Pf()}function yc(n,t,e=Tn+1){for(;e<Ue.length;e++){const i=Ue[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ue.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Lf(n){if(_s.length){const t=[...new Set(_s)].sort((e,i)=>ar(e)-ar(i));if(_s.length=0,di){di.push(...t);return}for(di=t,ds=0;ds<di.length;ds++){const e=di[ds];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}di=null,ds=0}}const ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Df(n){try{for(Tn=0;Tn<Ue.length;Tn++){const t=Ue[Tn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Tn<Ue.length;Tn++){const t=Ue[Tn];t&&(t.flags&=-2)}Tn=-1,Ue.length=0,Lf(),la=null,(Ue.length||_s.length)&&Df()}}let sn=null,If=null;function ca(n){const t=sn;return sn=n,If=n&&n.type.__scopeId||null,t}function Uf(n,t=sn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ha(-1);const r=ca(t);let a;try{a=n(...s)}finally{ca(r),i._d&&ha(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ec(n,t){if(sn===null)return n;const e=Ua(sn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,o,l=re]=t[s];r&&(Gt(r)&&(r={mounted:r,updated:r}),r.deep&&$n(a),i.push({dir:r,instance:e,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ti(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Qn(),an(l,e,8,[n.el,o,n,t]),ti())}}function Xd(n,t){if(Be){let e=Be.provides;const i=Be.parent&&Be.parent.provides;i===e&&(e=Be.provides=Object.create(i)),e[n]=t}}function Jr(n,t,e=!1){const i=hh();if(i||vs){let s=vs?vs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Gt(t)?t.call(i&&i.proxy):t}}const Yd=Symbol.for("v-scx"),qd=()=>Jr(Yd);function qa(n,t,e){return Nf(n,t,e)}function Nf(n,t,e=re){const{immediate:i,deep:s,flush:r,once:a}=e,o=ye({},e),l=t&&i||!t&&r!=="post";let u;if(cr){if(r==="sync"){const p=qd();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Pn,p.resume=Pn,p.pause=Pn,p}}const c=Be;o.call=(p,_,x)=>an(p,c,_,x);let f=!1;r==="post"?o.scheduler=p=>{He(p,c&&c.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():Vl(p)}),o.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=Gd(n,t,o);return cr&&(u?u.push(d):l&&d()),d}function $d(n,t,e){const i=this.proxy,s=he(n)?n.includes(".")?Ff(i,n):()=>i[n]:n.bind(i,i);let r;Gt(t)?r=t:(r=t.handler,e=t);const a=gr(this),o=Nf(s,r.bind(i),e);return a(),o}function Ff(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Kd=Symbol("_vte"),Of=n=>n.__isTeleport,tn=Symbol("_leaveCb"),Ns=Symbol("_enterCb");function jd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kl(()=>{n.isMounted=!0}),Xf(()=>{n.isUnmounting=!0}),n}const Je=[Function,Array],Bf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},zf=n=>{const t=n.subTree;return t.component?zf(t.component):t},Zd={name:"BaseTransition",props:Bf,setup(n,{slots:t}){const e=hh(),i=jd();return()=>{const s=t.default&&Vf(t.default(),!0),r=s&&s.length?Gf(s):e.subTree?pn():void 0;if(!r)return;const a=Kt(n),{mode:o}=a;if(i.isLeaving)return $a(r);const l=Tc(r);if(!l)return $a(r);let u=No(l,a,i,e,f=>u=f);l.type!==Oe&&or(l,u);let c=e.subTree&&Tc(e.subTree);if(c&&c.type!==Oe&&!Oi(c,l)&&zf(e).type!==Oe){let f=No(c,a,i,e);if(or(c,f),o==="out-in"&&l.type!==Oe)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},$a(r);o==="in-out"&&l.type!==Oe?f.delayLeave=(d,p,_)=>{const x=Hf(i,c);x[String(c.key)]=c,d[tn]=()=>{p(),d[tn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function Gf(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Oe){t=e;break}}return t}const Jd=Zd;function Hf(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function No(n,t,e,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:h,onAfterAppear:b,onAppearCancelled:A}=t,S=String(n.key),F=Hf(e,n),L=(E,M)=>{E&&an(E,i,9,M)},P=(E,M)=>{const R=M[1];L(E,M),Ut(E)?E.every(I=>I.length<=1)&&R():E.length<=1&&R()},U={mode:a,persisted:o,beforeEnter(E){let M=l;if(!e.isMounted)if(r)M=m||l;else return;E[tn]&&E[tn](!0);const R=F[S];R&&Oi(n,R)&&R.el[tn]&&R.el[tn](),L(M,[E])},enter(E){if(F[S]===n)return;let M=u,R=c,I=f;if(!e.isMounted)if(r)M=h||u,R=b||c,I=A||f;else return;let z=!1;E[Ns]=et=>{z||(z=!0,et?L(I,[E]):L(R,[E]),U.delayedLeave&&U.delayedLeave(),E[Ns]=void 0)};const J=E[Ns].bind(null,!1);M?P(M,[E,J]):J()},leave(E,M){const R=String(n.key);if(E[Ns]&&E[Ns](!0),e.isUnmounting)return M();L(d,[E]);let I=!1;E[tn]=J=>{I||(I=!0,M(),J?L(x,[E]):L(_,[E]),E[tn]=void 0,F[R]===n&&delete F[R])};const z=E[tn].bind(null,!1);F[R]=n,p?P(p,[E,z]):z()},clone(E){const M=No(E,t,e,i,s);return s&&s(M),M}};return U}function $a(n){if(Ca(n))return n=xi(n),n.children=null,n}function Tc(n){if(!Ca(n))return Of(n.type)&&n.children?Gf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Gt(e.default))return e.default()}}function or(n,t){n.shapeFlag&6&&n.component?(n.transition=t,or(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Vf(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=e==null?a.key:String(e)+String(a.key!=null?a.key:r);a.type===Ke?(a.patchFlag&128&&s++,i=i.concat(Vf(a.children,t,o))):(t||a.type!==Oe)&&i.push(o!=null?xi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function kf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function bc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const ua=new WeakMap;function Js(n,t,e,i,s=!1){if(Ut(n)){n.forEach((x,m)=>Js(x,t&&(Ut(t)?t[m]:t),e,i,s));return}if(Qs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Js(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ua(i.component):i.el,a=s?null:r,{i:o,r:l}=n,u=t&&t.r,c=o.refs===re?o.refs={}:o.refs,f=o.setupState,d=Kt(f),p=f===re?nf:x=>bc(c,x)?!1:Qt(d,x),_=(x,m)=>!(m&&bc(c,m));if(u!=null&&u!==l){if(Ac(t),he(u))c[u]=null,p(u)&&(f[u]=null);else if(Ce(u)){const x=t;_(u,x.k)&&(u.value=null),x.k&&(c[x.k]=null)}}if(Gt(l))mr(l,o,12,[a,c]);else{const x=he(l),m=Ce(l);if(x||m){const h=()=>{if(n.f){const b=x?p(l)?f[l]:c[l]:_()||!n.k?l.value:c[n.k];if(s)Ut(b)&&Dl(b,r);else if(Ut(b))b.includes(r)||b.push(r);else if(x)c[l]=[r],p(l)&&(f[l]=c[l]);else{const A=[r];_(l,n.k)&&(l.value=A),n.k&&(c[n.k]=A)}}else x?(c[l]=a,p(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(c[n.k]=a))};if(a){const b=()=>{h(),ua.delete(n)};b.id=-1,ua.set(n,b),He(b,e)}else Ac(n),h()}}}function Ac(n){const t=ua.get(n);t&&(t.flags|=8,ua.delete(n))}ba().requestIdleCallback;ba().cancelIdleCallback;const Qs=n=>!!n.type.__asyncLoader,Ca=n=>n.type.__isKeepAlive;function Qd(n,t){Wf(n,"a",t)}function tp(n,t){Wf(n,"da",t)}function Wf(n,t,e=Be){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Ca(s.parent.vnode)&&ep(i,t,e,s),s=s.parent}}function ep(n,t,e,i){const s=Pa(t,n,i,!0);La(()=>{Dl(i[t],s)},e)}function Pa(n,t,e=Be,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...a)=>{Qn();const o=gr(e),l=an(t,e,n,a);return o(),ti(),l});return i?s.unshift(r):s.push(r),r}}const ii=n=>(t,e=Be)=>{(!cr||n==="sp")&&Pa(n,(...i)=>t(...i),e)},np=ii("bm"),kl=ii("m"),ip=ii("bu"),sp=ii("u"),Xf=ii("bum"),La=ii("um"),rp=ii("sp"),ap=ii("rtg"),op=ii("rtc");function lp(n,t=Be){Pa("ec",n,t)}const cp=Symbol.for("v-ndc");function Wl(n,t,e,i){let s;const r=e,a=Ut(n);if(a||he(n)){const o=a&&ki(n);let l=!1,u=!1;o&&(l=!rn(n),u=ei(n),n=wa(n)),s=new Array(n.length);for(let c=0,f=n.length;c<f;c++)s[c]=t(l?u?ys(Mn(n[c])):Mn(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r)}else if(te(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>t(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];s[l]=t(n[c],c,l,r)}}else s=[];return s}const Fo=n=>n?dh(n)?Ua(n):Fo(n.parent):null,tr=ye(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Fo(n.parent),$root:n=>Fo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>qf(n),$forceUpdate:n=>n.f||(n.f=()=>{Vl(n.update)}),$nextTick:n=>n.n||(n.n=Vd.bind(n.proxy)),$watch:n=>$d.bind(n)}),Ka=(n,t)=>n!==re&&!n.__isScriptSetup&&Qt(n,t),up={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ka(i,t))return a[t]=1,i[t];if(s!==re&&Qt(s,t))return a[t]=2,s[t];if(Qt(r,t))return a[t]=3,r[t];if(e!==re&&Qt(e,t))return a[t]=4,e[t];Oo&&(a[t]=0)}}const u=tr[t];let c,f;if(u)return t==="$attrs"&&we(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[t]))return c;if(e!==re&&Qt(e,t))return a[t]=4,e[t];if(f=l.config.globalProperties,Qt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ka(s,t)?(s[t]=e,!0):i!==re&&Qt(i,t)?(i[t]=e,!0):Qt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(e[o]||n!==re&&o[0]!=="$"&&Qt(n,o)||Ka(t,o)||Qt(r,o)||Qt(i,o)||Qt(tr,o)||Qt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Qt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function wc(n){return Ut(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Oo=!0;function fp(n){const t=qf(n),e=n.proxy,i=n.ctx;Oo=!1,t.beforeCreate&&Rc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:b,destroyed:A,unmounted:S,render:F,renderTracked:L,renderTriggered:P,errorCaptured:U,serverPrefetch:E,expose:M,inheritAttrs:R,components:I,directives:z,filters:J}=t;if(u&&hp(u,i,null),a)for(const W in a){const k=a[W];Gt(k)&&(i[W]=k.bind(e))}if(s){const W=s.call(e,e);te(W)&&(n.data=pr(W))}if(Oo=!0,r)for(const W in r){const k=r[W],ht=Gt(k)?k.bind(e,e):Gt(k.get)?k.get.bind(e,e):Pn,vt=!Gt(k)&&Gt(k.set)?k.set.bind(e):Pn,yt=Kl({get:ht,set:vt});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Dt=>yt.value=Dt})}if(o)for(const W in o)Yf(o[W],i,e,W);if(l){const W=Gt(l)?l.call(e):l;Reflect.ownKeys(W).forEach(k=>{Xd(k,W[k])})}c&&Rc(c,n,"c");function G(W,k){Ut(k)?k.forEach(ht=>W(ht.bind(e))):k&&W(k.bind(e))}if(G(np,f),G(kl,d),G(ip,p),G(sp,_),G(Qd,x),G(tp,m),G(lp,U),G(op,L),G(ap,P),G(Xf,b),G(La,S),G(rp,E),Ut(M))if(M.length){const W=n.exposed||(n.exposed={});M.forEach(k=>{Object.defineProperty(W,k,{get:()=>e[k],set:ht=>e[k]=ht,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===Pn&&(n.render=F),R!=null&&(n.inheritAttrs=R),I&&(n.components=I),z&&(n.directives=z),E&&kf(n)}function hp(n,t,e=Pn){Ut(n)&&(n=Bo(n));for(const i in n){const s=n[i];let r;te(s)?"default"in s?r=Jr(s.from||i,s.default,!0):r=Jr(s.from||i):r=Jr(s),Ce(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function Rc(n,t,e){an(Ut(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Yf(n,t,e,i){let s=i.includes(".")?Ff(e,i):()=>e[i];if(he(n)){const r=t[n];Gt(r)&&qa(s,r)}else if(Gt(n))qa(s,n.bind(e));else if(te(n))if(Ut(n))n.forEach(r=>Yf(r,t,e,i));else{const r=Gt(n.handler)?n.handler.bind(e):t[n.handler];Gt(r)&&qa(s,r,n)}}function qf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(u=>fa(l,u,a,!0)),fa(l,t,a)),te(t)&&r.set(t,l),l}function fa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&fa(n,r,e,!0),s&&s.forEach(a=>fa(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=dp[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const dp={data:Cc,props:Pc,emits:Pc,methods:Xs,computed:Xs,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Xs,directives:Xs,watch:mp,provide:Cc,inject:pp};function Cc(n,t){return t?n?function(){return ye(Gt(n)?n.call(this,this):n,Gt(t)?t.call(this,this):t)}:t:n}function pp(n,t){return Xs(Bo(n),Bo(t))}function Bo(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function De(n,t){return n?[...new Set([].concat(n,t))]:t}function Xs(n,t){return n?ye(Object.create(null),n,t):t}function Pc(n,t){return n?Ut(n)&&Ut(t)?[...new Set([...n,...t])]:ye(Object.create(null),wc(n),wc(t??{})):t}function mp(n,t){if(!n)return t;if(!t)return n;const e=ye(Object.create(null),n);for(const i in t)e[i]=De(n[i],t[i]);return e}function $f(){return{app:null,config:{isNativeTag:nf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gp=0;function _p(n,t){return function(i,s=null){Gt(i)||(i=ye({},i)),s!=null&&!te(s)&&(s=null);const r=$f(),a=new WeakSet,o=[];let l=!1;const u=r.app={_uid:gp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:jp,get config(){return r.config},set config(c){},use(c,...f){return a.has(c)||(c&&Gt(c.install)?(a.add(c),c.install(u,...f)):Gt(c)&&(a.add(c),c(u,...f))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,f){return f?(r.components[c]=f,u):r.components[c]},directive(c,f){return f?(r.directives[c]=f,u):r.directives[c]},mount(c,f,d){if(!l){const p=u._ceVNode||pe(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,c,d),l=!0,u._container=c,c.__vue_app__=u,Ua(p.component)}},onUnmount(c){o.push(c)},unmount(){l&&(an(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return r.provides[c]=f,u},runWithContext(c){const f=vs;vs=u;try{return c()}finally{vs=f}}};return u}}let vs=null;const vp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${gn(t)}Modifiers`]||n[`${Yi(t)}Modifiers`];function xp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||re;let s=e;const r=t.startsWith("update:"),a=r&&vp(i,t.slice(7));a&&(a.trim&&(s=e.map(c=>he(c)?c.trim():c)),a.number&&(s=e.map(sd)));let o,l=i[o=Ha(t)]||i[o=Ha(gn(t))];!l&&r&&(l=i[o=Ha(Yi(t))]),l&&an(l,n,6,s);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,an(u,n,6,s)}}const Mp=new WeakMap;function Kf(n,t,e=!1){const i=e?Mp:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Gt(n)){const l=u=>{const c=Kf(u,t,!0);c&&(o=!0,ye(a,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(te(n)&&i.set(n,null),null):(Ut(r)?r.forEach(l=>a[l]=null):ye(a,r),te(n)&&i.set(n,a),a)}function Da(n,t){return!n||!ya(t)?!1:(t=t.slice(2).replace(/Once$/,""),Qt(n,t[0].toLowerCase()+t.slice(1))||Qt(n,Yi(t))||Qt(n,t))}function Lc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:d,setupState:p,ctx:_,inheritAttrs:x}=n,m=ca(n);let h,b;try{if(e.shapeFlag&4){const S=s||i,F=S;h=An(u.call(F,S,c,f,p,d,_)),b=o}else{const S=t;h=An(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),b=t.props?o:Sp(o)}}catch(S){er.length=0,Ra(S,n,1),h=pe(Oe)}let A=h;if(b&&x!==!1){const S=Object.keys(b),{shapeFlag:F}=A;S.length&&F&7&&(r&&S.some(Ea)&&(b=yp(b,r)),A=xi(A,b,!1,!0))}return e.dirs&&(A=xi(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&or(A,e.transition),h=A,ca(m),h}const Sp=n=>{let t;for(const e in n)(e==="class"||e==="style"||ya(e))&&((t||(t={}))[e]=n[e]);return t},yp=(n,t)=>{const e={};for(const i in n)(!Ea(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Ep(n,t,e){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Dc(i,a,u):!!a;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(jf(a,i,d)&&!Da(u,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Dc(i,a,u):!0:!!a;return!1}function Dc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(jf(t,n,r)&&!Da(e,r))return!0}return!1}function jf(n,t,e){const i=n[e],s=t[e];return e==="style"&&te(i)&&te(s)?!Ul(i,s):i!==s}function Tp({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Zf={},Jf=()=>Object.create(Zf),Qf=n=>Object.getPrototypeOf(n)===Zf;function bp(n,t,e,i=!1){const s={},r=Jf();n.propsDefaults=Object.create(null),th(n,t,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=i?s:Dd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Ap(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=Kt(s),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Da(n.emitsOptions,d))continue;const p=t[d];if(l)if(Qt(r,d))p!==r[d]&&(r[d]=p,u=!0);else{const _=gn(d);s[_]=zo(l,o,_,p,n,!1)}else p!==r[d]&&(r[d]=p,u=!0)}}}else{th(n,t,s,r)&&(u=!0);let c;for(const f in o)(!t||!Qt(t,f)&&((c=Yi(f))===f||!Qt(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(s[f]=zo(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!t||!Qt(t,f))&&(delete r[f],u=!0)}u&&qn(n.attrs,"set","")}function th(n,t,e,i){const[s,r]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(Ks(l))continue;const u=t[l];let c;s&&Qt(s,c=gn(l))?!r||!r.includes(c)?e[c]=u:(o||(o={}))[c]=u:Da(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(r){const l=Kt(e),u=o||re;for(let c=0;c<r.length;c++){const f=r[c];e[f]=zo(s,l,f,u[f],n,!Qt(u,f))}}return a}function zo(n,t,e,i,s,r){const a=n[e];if(a!=null){const o=Qt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Gt(l)){const{propsDefaults:u}=s;if(e in u)i=u[e];else{const c=gr(s);i=u[e]=l.call(null,t),c()}}else i=l;s.ce&&s.ce._setProp(e,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Yi(e))&&(i=!0))}return i}const wp=new WeakMap;function eh(n,t,e=!1){const i=e?wp:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Gt(n)){const c=f=>{l=!0;const[d,p]=eh(f,t,!0);ye(a,d),p&&o.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return te(n)&&i.set(n,ms),ms;if(Ut(r))for(let c=0;c<r.length;c++){const f=gn(r[c]);Ic(f)&&(a[f]=re)}else if(r)for(const c in r){const f=gn(c);if(Ic(f)){const d=r[c],p=a[f]=Ut(d)||Gt(d)?{type:d}:ye({},d),_=p.type;let x=!1,m=!0;if(Ut(_))for(let h=0;h<_.length;++h){const b=_[h],A=Gt(b)&&b.name;if(A==="Boolean"){x=!0;break}else A==="String"&&(m=!1)}else x=Gt(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||Qt(p,"default"))&&o.push(f)}}const u=[a,o];return te(n)&&i.set(n,u),u}function Ic(n){return n[0]!=="$"&&!Ks(n)}const Xl=n=>n==="_"||n==="_ctx"||n==="$stable",Yl=n=>Ut(n)?n.map(An):[An(n)],Rp=(n,t,e)=>{if(t._n)return t;const i=Uf((...s)=>Yl(t(...s)),e);return i._c=!1,i},nh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Xl(s))continue;const r=n[s];if(Gt(r))t[s]=Rp(s,r,i);else if(r!=null){const a=Yl(r);t[s]=()=>a}}},ih=(n,t)=>{const e=Yl(t);n.slots.default=()=>e},sh=(n,t,e)=>{for(const i in t)(e||!Xl(i))&&(n[i]=t[i])},Cp=(n,t,e)=>{const i=n.slots=Jf();if(n.vnode.shapeFlag&32){const s=t._;s?(sh(i,t,e),e&&cf(i,"_",s,!0)):nh(t,i)}else t&&ih(n,t)},Pp=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,a=re;if(i.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:sh(s,t,e):(r=!t.$stable,nh(t,s)),a=t}else t&&(ih(n,t),a={default:1});if(r)for(const o in s)!Xl(o)&&a[o]==null&&delete s[o]},He=Np;function Lp(n){return Dp(n)}function Dp(n,t){const e=ba();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:p=Pn,insertStaticContent:_}=n,x=(w,D,T,it=null,j=null,K=null,tt=void 0,rt=null,Z=!!D.dynamicChildren)=>{if(w===D)return;w&&!Oi(w,D)&&(it=pt(w),Dt(w,j,K,!0),w=null),D.patchFlag===-2&&(Z=!1,D.dynamicChildren=null);const{type:v,ref:g,shapeFlag:C}=D;switch(v){case Ia:m(w,D,T,it);break;case Oe:h(w,D,T,it);break;case Qr:w==null&&b(D,T,it,tt);break;case Ke:I(w,D,T,it,j,K,tt,rt,Z);break;default:C&1?F(w,D,T,it,j,K,tt,rt,Z):C&6?z(w,D,T,it,j,K,tt,rt,Z):(C&64||C&128)&&v.process(w,D,T,it,j,K,tt,rt,Z,Bt)}g!=null&&j?Js(g,w&&w.ref,K,D||w,!D):g==null&&w&&w.ref!=null&&Js(w.ref,null,K,w,!0)},m=(w,D,T,it)=>{if(w==null)i(D.el=o(D.children),T,it);else{const j=D.el=w.el;D.children!==w.children&&u(j,D.children)}},h=(w,D,T,it)=>{w==null?i(D.el=l(D.children||""),T,it):D.el=w.el},b=(w,D,T,it)=>{[w.el,w.anchor]=_(w.children,D,T,it,w.el,w.anchor)},A=({el:w,anchor:D},T,it)=>{let j;for(;w&&w!==D;)j=d(w),i(w,T,it),w=j;i(D,T,it)},S=({el:w,anchor:D})=>{let T;for(;w&&w!==D;)T=d(w),s(w),w=T;s(D)},F=(w,D,T,it,j,K,tt,rt,Z)=>{if(D.type==="svg"?tt="svg":D.type==="math"&&(tt="mathml"),w==null)L(D,T,it,j,K,tt,rt,Z);else{const v=w.el&&w.el._isVueCE?w.el:null;try{v&&v._beginPatch(),E(w,D,j,K,tt,rt,Z)}finally{v&&v._endPatch()}}},L=(w,D,T,it,j,K,tt,rt)=>{let Z,v;const{props:g,shapeFlag:C,transition:V,dirs:Y}=w;if(Z=w.el=a(w.type,K,g&&g.is,g),C&8?c(Z,w.children):C&16&&U(w.children,Z,null,it,j,ja(w,K),tt,rt),Y&&Ti(w,null,it,"created"),P(Z,w,w.scopeId,tt,it),g){for(const ft in g)ft!=="value"&&!Ks(ft)&&r(Z,ft,null,g[ft],K,it);"value"in g&&r(Z,"value",null,g.value,K),(v=g.onVnodeBeforeMount)&&En(v,it,w)}Y&&Ti(w,null,it,"beforeMount");const X=Ip(j,V);X&&V.beforeEnter(Z),i(Z,D,T),((v=g&&g.onVnodeMounted)||X||Y)&&He(()=>{try{v&&En(v,it,w),X&&V.enter(Z),Y&&Ti(w,null,it,"mounted")}finally{}},j)},P=(w,D,T,it,j)=>{if(T&&p(w,T),it)for(let K=0;K<it.length;K++)p(w,it[K]);if(j){let K=j.subTree;if(D===K||lh(K.type)&&(K.ssContent===D||K.ssFallback===D)){const tt=j.vnode;P(w,tt,tt.scopeId,tt.slotScopeIds,j.parent)}}},U=(w,D,T,it,j,K,tt,rt,Z=0)=>{for(let v=Z;v<w.length;v++){const g=w[v]=rt?Yn(w[v]):An(w[v]);x(null,g,D,T,it,j,K,tt,rt)}},E=(w,D,T,it,j,K,tt)=>{const rt=D.el=w.el;let{patchFlag:Z,dynamicChildren:v,dirs:g}=D;Z|=w.patchFlag&16;const C=w.props||re,V=D.props||re;let Y;if(T&&bi(T,!1),(Y=V.onVnodeBeforeUpdate)&&En(Y,T,D,w),g&&Ti(D,w,T,"beforeUpdate"),T&&bi(T,!0),(C.innerHTML&&V.innerHTML==null||C.textContent&&V.textContent==null)&&c(rt,""),v?M(w.dynamicChildren,v,rt,T,it,ja(D,j),K):tt||k(w,D,rt,null,T,it,ja(D,j),K,!1),Z>0){if(Z&16)R(rt,C,V,T,j);else if(Z&2&&C.class!==V.class&&r(rt,"class",null,V.class,j),Z&4&&r(rt,"style",C.style,V.style,j),Z&8){const X=D.dynamicProps;for(let ft=0;ft<X.length;ft++){const at=X[ft],ct=C[at],Lt=V[at];(Lt!==ct||at==="value")&&r(rt,at,ct,Lt,j,T)}}Z&1&&w.children!==D.children&&c(rt,D.children)}else!tt&&v==null&&R(rt,C,V,T,j);((Y=V.onVnodeUpdated)||g)&&He(()=>{Y&&En(Y,T,D,w),g&&Ti(D,w,T,"updated")},it)},M=(w,D,T,it,j,K,tt)=>{for(let rt=0;rt<D.length;rt++){const Z=w[rt],v=D[rt],g=Z.el&&(Z.type===Ke||!Oi(Z,v)||Z.shapeFlag&198)?f(Z.el):T;x(Z,v,g,null,it,j,K,tt,!0)}},R=(w,D,T,it,j)=>{if(D!==T){if(D!==re)for(const K in D)!Ks(K)&&!(K in T)&&r(w,K,D[K],null,j,it);for(const K in T){if(Ks(K))continue;const tt=T[K],rt=D[K];tt!==rt&&K!=="value"&&r(w,K,rt,tt,j,it)}"value"in T&&r(w,"value",D.value,T.value,j)}},I=(w,D,T,it,j,K,tt,rt,Z)=>{const v=D.el=w?w.el:o(""),g=D.anchor=w?w.anchor:o("");let{patchFlag:C,dynamicChildren:V,slotScopeIds:Y}=D;Y&&(rt=rt?rt.concat(Y):Y),w==null?(i(v,T,it),i(g,T,it),U(D.children||[],T,g,j,K,tt,rt,Z)):C>0&&C&64&&V&&w.dynamicChildren&&w.dynamicChildren.length===V.length?(M(w.dynamicChildren,V,T,j,K,tt,rt),(D.key!=null||j&&D===j.subTree)&&rh(w,D,!0)):k(w,D,T,g,j,K,tt,rt,Z)},z=(w,D,T,it,j,K,tt,rt,Z)=>{D.slotScopeIds=rt,w==null?D.shapeFlag&512?j.ctx.activate(D,T,it,tt,Z):J(D,T,it,j,K,tt,Z):et(w,D,Z)},J=(w,D,T,it,j,K,tt)=>{const rt=w.component=kp(w,it,j);if(Ca(w)&&(rt.ctx.renderer=Bt),Wp(rt,!1,tt),rt.asyncDep){if(j&&j.registerDep(rt,G,tt),!w.el){const Z=rt.subTree=pe(Oe);h(null,Z,D,T),w.placeholder=Z.el}}else G(rt,w,D,T,j,K,tt)},et=(w,D,T)=>{const it=D.component=w.component;if(Ep(w,D,T))if(it.asyncDep&&!it.asyncResolved){W(it,D,T);return}else it.next=D,it.update();else D.el=w.el,it.vnode=D},G=(w,D,T,it,j,K,tt)=>{const rt=()=>{if(w.isMounted){let{next:C,bu:V,u:Y,parent:X,vnode:ft}=w;{const gt=ah(w);if(gt){C&&(C.el=ft.el,W(w,C,tt)),gt.asyncDep.then(()=>{He(()=>{w.isUnmounted||v()},j)});return}}let at=C,ct;bi(w,!1),C?(C.el=ft.el,W(w,C,tt)):C=ft,V&&Va(V),(ct=C.props&&C.props.onVnodeBeforeUpdate)&&En(ct,X,C,ft),bi(w,!0);const Lt=Lc(w),ot=w.subTree;w.subTree=Lt,x(ot,Lt,f(ot.el),pt(ot),w,j,K),C.el=Lt.el,at===null&&Tp(w,Lt.el),Y&&He(Y,j),(ct=C.props&&C.props.onVnodeUpdated)&&He(()=>En(ct,X,C,ft),j)}else{let C;const{el:V,props:Y}=D,{bm:X,m:ft,parent:at,root:ct,type:Lt}=w,ot=Qs(D);bi(w,!1),X&&Va(X),!ot&&(C=Y&&Y.onVnodeBeforeMount)&&En(C,at,D),bi(w,!0);{ct.ce&&ct.ce._hasShadowRoot()&&ct.ce._injectChildStyle(Lt,w.parent?w.parent.type:void 0);const gt=w.subTree=Lc(w);x(null,gt,T,it,w,j,K),D.el=gt.el}if(ft&&He(ft,j),!ot&&(C=Y&&Y.onVnodeMounted)){const gt=D;He(()=>En(C,at,gt),j)}(D.shapeFlag&256||at&&Qs(at.vnode)&&at.vnode.shapeFlag&256)&&w.a&&He(w.a,j),w.isMounted=!0,D=T=it=null}};w.scope.on();const Z=w.effect=new df(rt);w.scope.off();const v=w.update=Z.run.bind(Z),g=w.job=Z.runIfDirty.bind(Z);g.i=w,g.id=w.uid,Z.scheduler=()=>Vl(g),bi(w,!0),v()},W=(w,D,T)=>{D.component=w;const it=w.vnode.props;w.vnode=D,w.next=null,Ap(w,D.props,it,T),Pp(w,D.children,T),Qn(),yc(w),ti()},k=(w,D,T,it,j,K,tt,rt,Z=!1)=>{const v=w&&w.children,g=w?w.shapeFlag:0,C=D.children,{patchFlag:V,shapeFlag:Y}=D;if(V>0){if(V&128){vt(v,C,T,it,j,K,tt,rt,Z);return}else if(V&256){ht(v,C,T,it,j,K,tt,rt,Z);return}}Y&8?(g&16&&Tt(v,j,K),C!==v&&c(T,C)):g&16?Y&16?vt(v,C,T,it,j,K,tt,rt,Z):Tt(v,j,K,!0):(g&8&&c(T,""),Y&16&&U(C,T,it,j,K,tt,rt,Z))},ht=(w,D,T,it,j,K,tt,rt,Z)=>{w=w||ms,D=D||ms;const v=w.length,g=D.length,C=Math.min(v,g);let V;for(V=0;V<C;V++){const Y=D[V]=Z?Yn(D[V]):An(D[V]);x(w[V],Y,T,null,j,K,tt,rt,Z)}v>g?Tt(w,j,K,!0,!1,C):U(D,T,it,j,K,tt,rt,Z,C)},vt=(w,D,T,it,j,K,tt,rt,Z)=>{let v=0;const g=D.length;let C=w.length-1,V=g-1;for(;v<=C&&v<=V;){const Y=w[v],X=D[v]=Z?Yn(D[v]):An(D[v]);if(Oi(Y,X))x(Y,X,T,null,j,K,tt,rt,Z);else break;v++}for(;v<=C&&v<=V;){const Y=w[C],X=D[V]=Z?Yn(D[V]):An(D[V]);if(Oi(Y,X))x(Y,X,T,null,j,K,tt,rt,Z);else break;C--,V--}if(v>C){if(v<=V){const Y=V+1,X=Y<g?D[Y].el:it;for(;v<=V;)x(null,D[v]=Z?Yn(D[v]):An(D[v]),T,X,j,K,tt,rt,Z),v++}}else if(v>V)for(;v<=C;)Dt(w[v],j,K,!0),v++;else{const Y=v,X=v,ft=new Map;for(v=X;v<=V;v++){const dt=D[v]=Z?Yn(D[v]):An(D[v]);dt.key!=null&&ft.set(dt.key,v)}let at,ct=0;const Lt=V-X+1;let ot=!1,gt=0;const Ct=new Array(Lt);for(v=0;v<Lt;v++)Ct[v]=0;for(v=Y;v<=C;v++){const dt=w[v];if(ct>=Lt){Dt(dt,j,K,!0);continue}let Ft;if(dt.key!=null)Ft=ft.get(dt.key);else for(at=X;at<=V;at++)if(Ct[at-X]===0&&Oi(dt,D[at])){Ft=at;break}Ft===void 0?Dt(dt,j,K,!0):(Ct[Ft-X]=v+1,Ft>=gt?gt=Ft:ot=!0,x(dt,D[Ft],T,null,j,K,tt,rt,Z),ct++)}const It=ot?Up(Ct):ms;for(at=It.length-1,v=Lt-1;v>=0;v--){const dt=X+v,Ft=D[dt],zt=D[dt+1],ee=dt+1<g?zt.el||oh(zt):it;Ct[v]===0?x(null,Ft,T,ee,j,K,tt,rt,Z):ot&&(at<0||v!==It[at]?yt(Ft,T,ee,2):at--)}}},yt=(w,D,T,it,j=null)=>{const{el:K,type:tt,transition:rt,children:Z,shapeFlag:v}=w;if(v&6){yt(w.component.subTree,D,T,it);return}if(v&128){w.suspense.move(D,T,it);return}if(v&64){tt.move(w,D,T,Bt);return}if(tt===Ke){i(K,D,T);for(let C=0;C<Z.length;C++)yt(Z[C],D,T,it);i(w.anchor,D,T);return}if(tt===Qr){A(w,D,T);return}if(it!==2&&v&1&&rt)if(it===0)rt.persisted&&!K[tn]?i(K,D,T):(rt.beforeEnter(K),i(K,D,T),He(()=>rt.enter(K),j));else{const{leave:C,delayLeave:V,afterLeave:Y}=rt,X=()=>{w.ctx.isUnmounted?s(K):i(K,D,T)},ft=()=>{const at=K._isLeaving||!!K[tn];K._isLeaving&&K[tn](!0),rt.persisted&&!at?X():C(K,()=>{X(),Y&&Y()})};V?V(K,X,ft):ft()}else i(K,D,T)},Dt=(w,D,T,it=!1,j=!1)=>{const{type:K,props:tt,ref:rt,children:Z,dynamicChildren:v,shapeFlag:g,patchFlag:C,dirs:V,cacheIndex:Y,memo:X}=w;if(C===-2&&(j=!1),rt!=null&&(Qn(),Js(rt,null,T,w,!0),ti()),Y!=null&&(D.renderCache[Y]=void 0),g&256){D.ctx.deactivate(w);return}const ft=g&1&&V,at=!Qs(w);let ct;if(at&&(ct=tt&&tt.onVnodeBeforeUnmount)&&En(ct,D,w),g&6)lt(w.component,T,it);else{if(g&128){w.suspense.unmount(T,it);return}ft&&Ti(w,null,D,"beforeUnmount"),g&64?w.type.remove(w,D,T,Bt,it):v&&!v.hasOnce&&(K!==Ke||C>0&&C&64)?Tt(v,D,T,!1,!0):(K===Ke&&C&384||!j&&g&16)&&Tt(Z,D,T),it&&jt(w)}const Lt=X!=null&&Y==null;(at&&(ct=tt&&tt.onVnodeUnmounted)||ft||Lt)&&He(()=>{ct&&En(ct,D,w),ft&&Ti(w,null,D,"unmounted"),Lt&&(w.el=null)},T)},jt=w=>{const{type:D,el:T,anchor:it,transition:j}=w;if(D===Ke){nt(T,it);return}if(D===Qr){S(w);return}const K=()=>{s(T),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(w.shapeFlag&1&&j&&!j.persisted){const{leave:tt,delayLeave:rt}=j,Z=()=>tt(T,K);rt?rt(w.el,K,Z):Z()}else K()},nt=(w,D)=>{let T;for(;w!==D;)T=d(w),s(w),w=T;s(D)},lt=(w,D,T)=>{const{bum:it,scope:j,job:K,subTree:tt,um:rt,m:Z,a:v}=w;Uc(Z),Uc(v),it&&Va(it),j.stop(),K&&(K.flags|=8,Dt(tt,w,D,T)),rt&&He(rt,D),He(()=>{w.isUnmounted=!0},D)},Tt=(w,D,T,it=!1,j=!1,K=0)=>{for(let tt=K;tt<w.length;tt++)Dt(w[tt],D,T,it,j)},pt=w=>{if(w.shapeFlag&6)return pt(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const D=d(w.anchor||w.el),T=D&&D[Kd];return T?d(T):D};let Pt=!1;const Nt=(w,D,T)=>{let it;w==null?D._vnode&&(Dt(D._vnode,null,null,!0),it=D._vnode.component):x(D._vnode||null,w,D,null,null,null,T),D._vnode=w,Pt||(Pt=!0,yc(it),Lf(),Pt=!1)},Bt={p:x,um:Dt,m:yt,r:jt,mt:J,mc:U,pc:k,pbc:M,n:pt,o:n};return{render:Nt,hydrate:void 0,createApp:_p(Nt)}}function ja({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function bi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Ip(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function rh(n,t,e=!1){const i=n.children,s=t.children;if(Ut(i)&&Ut(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Yn(s[r]),o.el=a.el),!e&&o.patchFlag!==-2&&rh(a,o)),o.type===Ia&&(o.patchFlag===-1&&(o=s[r]=Yn(o)),o.el=a.el),o.type===Oe&&!o.el&&(o.el=a.el)}}function Up(n){const t=n.slice(),e=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=e[e.length-1],n[s]<u){t[i]=s,e.push(i);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,n[e[o]]<u?r=o+1:a=o;u<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}function ah(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ah(t)}function Uc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function oh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?oh(t.subTree):null}const lh=n=>n.__isSuspense;function Np(n,t){t&&t.pendingBranch?Ut(n)?t.effects.push(...n):t.effects.push(n):Wd(n)}const Ke=Symbol.for("v-fgt"),Ia=Symbol.for("v-txt"),Oe=Symbol.for("v-cmt"),Qr=Symbol.for("v-stc"),er=[];let je=null;function fe(n=!1){er.push(je=n?null:[])}function Fp(){er.pop(),je=er[er.length-1]||null}let lr=1;function ha(n,t=!1){lr+=n,n<0&&je&&t&&(je.hasOnce=!0)}function ch(n){return n.dynamicChildren=lr>0?je||ms:null,Fp(),lr>0&&je&&je.push(n),n}function ve(n,t,e,i,s,r){return ch(Et(n,t,e,i,s,r,!0))}function ql(n,t,e,i,s){return ch(pe(n,t,e,i,s,!0))}function da(n){return n?n.__v_isVNode===!0:!1}function Oi(n,t){return n.type===t.type&&n.key===t.key}const uh=({key:n})=>n??null,ta=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?he(n)||Ce(n)||Gt(n)?{i:sn,r:n,k:t,f:!!e}:n:null);function Et(n,t=null,e=null,i=0,s=null,r=n===Ke?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&uh(t),ref:t&&ta(t),scopeId:If,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return o?($l(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=he(e)?8:16),lr>0&&!a&&je&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&je.push(l),l}const pe=Op;function Op(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===cp)&&(n=Oe),da(n)){const o=xi(n,t,!0);return e&&$l(o,e),lr>0&&!r&&je&&(o.shapeFlag&6?je[je.indexOf(n)]=o:je.push(o)),o.patchFlag=-2,o}if($p(n)&&(n=n.__vccOpts),t){t=Bp(t);let{class:o,style:l}=t;o&&!he(o)&&(t.class=yi(o)),te(l)&&(Hl(l)&&!Ut(l)&&(l=ye({},l)),t.style=Aa(l))}const a=he(n)?1:lh(n)?128:Of(n)?64:te(n)?4:Gt(n)?2:0;return Et(n,t,e,i,s,a,r,!0)}function Bp(n){return n?Hl(n)||Qf(n)?ye({},n):n:null}function xi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,u=t?Gp(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&uh(u),ref:t&&t.ref?e&&r?Ut(r)?r.concat(ta(t)):[r,ta(t)]:ta(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ke?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&xi(n.ssContent),ssFallback:n.ssFallback&&xi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&or(c,l.clone(c)),c}function zp(n=" ",t=0){return pe(Ia,null,n,t)}function fh(n,t){const e=pe(Qr,null,n);return e.staticCount=t,e}function pn(n="",t=!1){return t?(fe(),ql(Oe,null,n)):pe(Oe,null,n)}function An(n){return n==null||typeof n=="boolean"?pe(Oe):Ut(n)?pe(Ke,null,n.slice()):da(n)?Yn(n):pe(Ia,null,String(n))}function Yn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:xi(n)}function $l(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ut(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),$l(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Qf(t)?t._ctx=sn:s===3&&sn&&(sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Gt(t)?(t={default:t,_ctx:sn},e=32):(t=String(t),i&64?(e=16,t=[zp(t)]):e=8);n.children=t,n.shapeFlag|=e}function Gp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=yi([t.class,i.class]));else if(s==="style")t.style=Aa([t.style,i.style]);else if(ya(s)){const r=t[s],a=i[s];a&&r!==a&&!(Ut(r)&&r.includes(a))?t[s]=r?[].concat(r,a):a:a==null&&r==null&&!Ea(s)&&(t[s]=a)}else s!==""&&(t[s]=i[s])}return t}function En(n,t,e,i=null){an(n,t,7,[e,i])}const Hp=$f();let Vp=0;function kp(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Hp,r={uid:Vp++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eh(i,s),emitsOptions:Kf(i,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:i.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=xp.bind(null,r),n.ce&&n.ce(r),r}let Be=null;const hh=()=>Be||sn;let pa,Go;{const n=ba(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};pa=t("__VUE_INSTANCE_SETTERS__",e=>Be=e),Go=t("__VUE_SSR_SETTERS__",e=>cr=e)}const gr=n=>{const t=Be;return pa(n),n.scope.on(),()=>{n.scope.off(),pa(t)}},Nc=()=>{Be&&Be.scope.off(),pa(null)};function dh(n){return n.vnode.shapeFlag&4}let cr=!1;function Wp(n,t=!1,e=!1){t&&Go(t);const{props:i,children:s}=n.vnode,r=dh(n);bp(n,i,r,t),Cp(n,s,e||t);const a=r?Xp(n,t):void 0;return t&&Go(!1),a}function Xp(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,up);const{setup:i}=e;if(i){Qn();const s=n.setupContext=i.length>1?qp(n):null,r=gr(n),a=mr(i,n,0,[n.props,s]),o=rf(a);if(ti(),r(),(o||n.sp)&&!Qs(n)&&kf(n),o){if(a.then(Nc,Nc),t)return a.then(l=>{Fc(n,l)}).catch(l=>{Ra(l,n,0)});n.asyncDep=a}else Fc(n,a)}else ph(n)}function Fc(n,t,e){Gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:te(t)&&(n.setupState=Rf(t)),ph(n)}function ph(n,t,e){const i=n.type;n.render||(n.render=i.render||Pn);{const s=gr(n);Qn();try{fp(n)}finally{ti(),s()}}}const Yp={get(n,t){return we(n,"get",""),n[t]}};function qp(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Yp),slots:n.slots,emit:n.emit,expose:t}}function Ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Rf(Id(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in tr)return tr[e](n)},has(t,e){return e in t||e in tr}})):n.proxy}function $p(n){return Gt(n)&&"__vccOpts"in n}const Kl=(n,t)=>Bd(n,t,cr);function Kp(n,t,e){try{ha(-1);const i=arguments.length;return i===2?te(t)&&!Ut(t)?da(t)?pe(n,null,[t]):pe(n,t):pe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&da(e)&&(e=[e]),pe(n,t,e))}finally{ha(1)}}const jp="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ho;const Oc=typeof window<"u"&&window.trustedTypes;if(Oc)try{Ho=Oc.createPolicy("vue",{createHTML:n=>n})}catch{}const mh=Ho?n=>Ho.createHTML(n):n=>n,Zp="http://www.w3.org/2000/svg",Jp="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,Bc=Wn&&Wn.createElement("template"),Qp={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Wn.createElementNS(Zp,n):t==="mathml"?Wn.createElementNS(Jp,n):e?Wn.createElement(n,{is:e}):Wn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Wn.createTextNode(n),createComment:n=>Wn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Wn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Bc.innerHTML=mh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Bc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ai="transition",Fs="animation",ur=Symbol("_vtc"),gh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tm=ye({},Bf,gh),em=n=>(n.displayName="Transition",n.props=tm,n),nm=em((n,{slots:t})=>Kp(Jd,im(n),t)),Ai=(n,t=[])=>{Ut(n)?n.forEach(e=>e(...t)):n&&n(...t)},zc=n=>n?Ut(n)?n.some(t=>t.length>1):n.length>1:!1;function im(n){const t={};for(const I in n)I in gh||(t[I]=n[I]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:a=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,_=sm(s),x=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:b,onEnterCancelled:A,onLeave:S,onLeaveCancelled:F,onBeforeAppear:L=h,onAppear:P=b,onAppearCancelled:U=A}=t,E=(I,z,J,et)=>{I._enterCancelled=et,wi(I,z?c:o),wi(I,z?u:a),J&&J()},M=(I,z)=>{I._isLeaving=!1,wi(I,f),wi(I,p),wi(I,d),z&&z()},R=I=>(z,J)=>{const et=I?P:b,G=()=>E(z,I,J);Ai(et,[z,G]),Gc(()=>{wi(z,I?l:r),On(z,I?c:o),zc(et)||Hc(z,i,x,G)})};return ye(t,{onBeforeEnter(I){Ai(h,[I]),On(I,r),On(I,a)},onBeforeAppear(I){Ai(L,[I]),On(I,l),On(I,u)},onEnter:R(!1),onAppear:R(!0),onLeave(I,z){I._isLeaving=!0;const J=()=>M(I,z);On(I,f),I._enterCancelled?(On(I,d),Wc(I)):(Wc(I),On(I,d)),Gc(()=>{I._isLeaving&&(wi(I,f),On(I,p),zc(S)||Hc(I,i,m,J))}),Ai(S,[I,J])},onEnterCancelled(I){E(I,!1,void 0,!0),Ai(A,[I])},onAppearCancelled(I){E(I,!0,void 0,!0),Ai(U,[I])},onLeaveCancelled(I){M(I),Ai(F,[I])}})}function sm(n){if(n==null)return null;if(te(n))return[Za(n.enter),Za(n.leave)];{const t=Za(n);return[t,t]}}function Za(n){return rd(n)}function On(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[ur]||(n[ur]=new Set)).add(t)}function wi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[ur];e&&(e.delete(t),e.size||(n[ur]=void 0))}function Gc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let rm=0;function Hc(n,t,e,i){const s=n._endId=++rm,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:a,timeout:o,propCount:l}=am(n,t);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,d),r()},d=p=>{p.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,d)}function am(n,t){const e=window.getComputedStyle(n),i=_=>(e[_]||"").split(", "),s=i(`${ai}Delay`),r=i(`${ai}Duration`),a=Vc(s,r),o=i(`${Fs}Delay`),l=i(`${Fs}Duration`),u=Vc(o,l);let c=null,f=0,d=0;t===ai?a>0&&(c=ai,f=a,d=r.length):t===Fs?u>0&&(c=Fs,f=u,d=l.length):(f=Math.max(a,u),c=f>0?a>u?ai:Fs:null,d=c?c===ai?r.length:l.length:0);const p=c===ai&&/\b(?:transform|all)(?:,|$)/.test(i(`${ai}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:p}}function Vc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>kc(e)+kc(n[i])))}function kc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Wc(n){return(n?n.ownerDocument:document).body.offsetHeight}function om(n,t,e){const i=n[ur];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ma=Symbol("_vod"),_h=Symbol("_vsh"),Xc={name:"show",beforeMount(n,{value:t},{transition:e}){n[ma]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Os(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Os(n,!0),i.enter(n)):i.leave(n,()=>{Os(n,!1)}):Os(n,t))},beforeUnmount(n,{value:t}){Os(n,t)}};function Os(n,t){n.style.display=t?n[ma]:"none",n[_h]=!t}const lm=Symbol(""),cm=/(?:^|;)\s*display\s*:/;function um(n,t,e){const i=n.style,s=he(e);let r=!1;if(e&&!s){if(t)if(he(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&Ys(i,o,"")}else for(const a in t)e[a]==null&&Ys(i,a,"");for(const a in e){a==="display"&&(r=!0);const o=e[a];o!=null?hm(n,a,!he(t)&&t?t[a]:void 0,o)||Ys(i,a,o):Ys(i,a,"")}}else if(s){if(t!==e){const a=i[lm];a&&(e+=";"+a),i.cssText=e,r=cm.test(e)}}else t&&n.removeAttribute("style");ma in n&&(n[ma]=r?i.display:"",n[_h]&&(i.display="none"))}const Yc=/\s*!important$/;function Ys(n,t,e){if(Ut(e))e.forEach(i=>Ys(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=fm(n,t);Yc.test(e)?n.setProperty(Yi(i),e.replace(Yc,""),"important"):n[i]=e}}const qc=["Webkit","Moz","ms"],Ja={};function fm(n,t){const e=Ja[t];if(e)return e;let i=gn(t);if(i!=="filter"&&i in n)return Ja[t]=i;i=lf(i);for(let s=0;s<qc.length;s++){const r=qc[s]+i;if(r in n)return Ja[t]=r}return t}function hm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&he(i)&&e===i}const $c="http://www.w3.org/1999/xlink";function Kc(n,t,e,i,s,r=fd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS($c,t.slice(6,t.length)):n.setAttributeNS($c,t,e):e==null||r&&!uf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Ln(e)?String(e):e)}function jc(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?mh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=uf(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function dm(n,t,e,i){n.addEventListener(t,e,i)}function pm(n,t,e,i){n.removeEventListener(t,e,i)}const Zc=Symbol("_vei");function mm(n,t,e,i,s=null){const r=n[Zc]||(n[Zc]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=gm(t);if(i){const u=r[t]=xm(i,s);dm(n,o,u,l)}else a&&(pm(n,o,a,l),r[t]=void 0)}}const Jc=/(?:Once|Passive|Capture)$/;function gm(n){let t;if(Jc.test(n)){t={};let i;for(;i=n.match(Jc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Yi(n.slice(2)),t]}let Qa=0;const _m=Promise.resolve(),vm=()=>Qa||(_m.then(()=>Qa=0),Qa=Date.now());function xm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ut(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const u=a[l];u&&an(u,t,5,o)}}else an(s,t,5,[i])};return e.value=n,e.attached=vm(),e}const Qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Mm=(n,t,e,i,s,r)=>{const a=s==="svg";t==="class"?om(n,i,a):t==="style"?um(n,e,i):ya(t)?Ea(t)||mm(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sm(n,t,i,a))?(jc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Kc(n,t,i,a,r,t!=="value")):n._isVueCE&&(ym(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!he(i)))?jc(n,gn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Kc(n,t,i,a))};function Sm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Qc(t)&&Gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qc(t)&&he(e)?!1:t in n}function ym(n,t){const e=n._def.props;if(!e)return!1;const i=gn(t);return Array.isArray(e)?e.some(s=>gn(s)===i):Object.keys(e).some(s=>gn(s)===i)}const Em=["ctrl","shift","alt","meta"],Tm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Em.some(e=>n[`${e}Key`]&&!t.includes(e))},Vo=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let a=0;a<t.length;a++){const o=Tm[t[a]];if(o&&o(s,t))return}return n(s,...r)}))},bm=ye({patchProp:Mm},Qp);let tu;function Am(){return tu||(tu=Lp(bm))}const wm=((...n)=>{const t=Am().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Cm(i);if(!s)return;const r=t._component;!Gt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,Rm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function Rm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Cm(n){return he(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="170",Pm=0,eu=1,Lm=2,vh=1,Dm=2,kn=3,Mi=0,ke=1,hn=2,_i=0,xs=1,ga=2,nu=3,iu=4,Im=5,Bi=100,Um=101,Nm=102,Fm=103,Om=104,Bm=200,zm=201,Gm=202,Hm=203,ko=204,Wo=205,Vm=206,km=207,Wm=208,Xm=209,Ym=210,qm=211,$m=212,Km=213,jm=214,Xo=0,Yo=1,qo=2,Es=3,$o=4,Ko=5,jo=6,Zo=7,xh=0,Zm=1,Jm=2,vi=0,Qm=1,tg=2,eg=3,ng=4,ig=5,sg=6,rg=7,Mh=300,Ts=301,bs=302,Jo=303,Qo=304,Na=306,tl=1e3,Gi=1001,el=1002,vn=1003,ag=1004,wr=1005,Cn=1006,to=1007,Hi=1008,ni=1009,Sh=1010,yh=1011,fr=1012,Zl=1013,Wi=1014,Kn=1015,_r=1016,Jl=1017,Ql=1018,As=1020,Eh=35902,Th=1021,bh=1022,mn=1023,Ah=1024,wh=1025,Ms=1026,ws=1027,Rh=1028,tc=1029,Ch=1030,ec=1031,nc=1033,ea=33776,na=33777,ia=33778,sa=33779,nl=35840,il=35841,sl=35842,rl=35843,al=36196,ol=37492,ll=37496,cl=37808,ul=37809,fl=37810,hl=37811,dl=37812,pl=37813,ml=37814,gl=37815,_l=37816,vl=37817,xl=37818,Ml=37819,Sl=37820,yl=37821,ra=36492,El=36494,Tl=36495,Ph=36283,bl=36284,Al=36285,wl=36286,og=3200,lg=3201,cg=0,ug=1,gi="",$e="srgb",Cs="srgb-linear",Fa="linear",se="srgb",Ki=7680,su=519,fg=512,hg=513,dg=514,Lh=515,pg=516,mg=517,gg=518,_g=519,Rl=35044,ru="300 es",jn=2e3,_a=2001;class Ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const nr=Math.PI/180,hr=180/Math.PI;function Zn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]).toLowerCase()}function Ne(n,t,e){return Math.max(t,Math.min(e,n))}function ic(n,t){return(n%t+t)%t}function vg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xg(n,t,e){return n!==t?(e-n)/(t-n):0}function ir(n,t,e){return(1-e)*n+e*t}function Mg(n,t,e,i){return ir(n,t,1-Math.exp(-e*i))}function Sg(n,t=1){return t-Math.abs(ic(n,t*2)-t)}function yg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Eg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Tg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function bg(n,t){return n+Math.random()*(t-n)}function Ag(n){return n*(.5-Math.random())}function wg(n){n!==void 0&&(au=n);let t=au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rg(n){return n*nr}function Cg(n){return n*hr}function Pg(n){return(n&n-1)===0&&n!==0}function Lg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ig(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),u=r((t+i)/2),c=a((t+i)/2),f=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*c,l*f,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*f,o*u);break;case"ZXZ":n.set(l*f,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*_,l*p,o*u);break;case"YXY":n.set(l*p,o*c,l*_,o*u);break;case"ZYZ":n.set(l*_,l*p,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pi={DEG2RAD:nr,RAD2DEG:hr,generateUUID:Zn,clamp:Ne,euclideanModulo:ic,mapLinear:vg,inverseLerp:xg,lerp:ir,damp:Mg,pingpong:Sg,smoothstep:yg,smootherstep:Eg,randInt:Tg,randFloat:bg,randFloatSpread:Ag,seededRandom:wg,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:Pg,ceilPowerOfTwo:Lg,floorPowerOfTwo:Dg,setQuaternionFromProperEuler:Ig,normalize:ie,denormalize:dn};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,a,o,l,u){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,u)}set(t,e,i,s,r,a,o,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=s[0],m=s[3],h=s[6],b=s[1],A=s[4],S=s[7],F=s[2],L=s[5],P=s[8];return r[0]=a*x+o*b+l*F,r[3]=a*m+o*A+l*L,r[6]=a*h+o*S+l*P,r[1]=u*x+c*b+f*F,r[4]=u*m+c*A+f*L,r[7]=u*h+c*S+f*P,r[2]=d*x+p*b+_*F,r[5]=d*m+p*A+_*L,r[8]=d*h+p*S+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return e*a*c-e*o*u-i*r*c+i*o*l+s*r*u-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=c*a-o*u,d=o*l-c*r,p=u*r-a*l,_=e*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(s*u-c*i)*x,t[2]=(o*i-s*a)*x,t[3]=d*x,t[4]=(c*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(i*l-u*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*a+u*o)+a+t,-s*u,s*l,-s*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new kt;function Dh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ug(){const n=va("canvas");return n.style.display="block",n}const ou={};function qs(n){n in ou||(ou[n]=!0,console.warn(n))}function Ng(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Fg(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Og(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(n.r=Jn(n.r),n.g=Jn(n.g),n.b=Jn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(n.r=Ss(n.r),n.g=Ss(n.g),n.b=Ss(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===gi?Fa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const lu=[.64,.33,.3,.6,.15,.06],cu=[.2126,.7152,.0722],uu=[.3127,.329],fu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Cs]:{primaries:lu,whitePoint:uu,transfer:Fa,toXYZ:fu,fromXYZ:hu,luminanceCoefficients:cu,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:lu,whitePoint:uu,transfer:se,toXYZ:fu,fromXYZ:hu,luminanceCoefficients:cu,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});let ji;class Bg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=va("canvas")),ji.width=t.width,ji.height=t.height;const i=ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=va("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Jn(e[i]/255)*255):e[i]=Jn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zg=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(no(s[a].image)):r.push(no(s[a]))}else r=no(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function no(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gg=0;class ze extends Ps{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=Gi,s=Gi,r=Cn,a=Hi,o=mn,l=ni,u=ze.DEFAULT_ANISOTROPY,c=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Zn(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tl:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tl:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Mh;ze.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(u+1)/2,S=(p+1)/2,F=(h+1)/2,L=(c+d)/4,P=(f+x)/4,U=(_+m)/4;return A>S&&A>F?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=L/i,r=P/i):S>F?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=L/s,r=U/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=P/r,s=U/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-x)/b,this.z=(d-c)/b,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hg extends Ps{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ih(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Hg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Uh extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vg extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],u=i[s+1],c=i[s+2],f=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(f!==x||l!==d||u!==p||c!==_){let m=1-o;const h=l*d+u*p+c*_+f*x,b=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const F=Math.sqrt(A),L=Math.atan2(F,h*b);m=Math.sin(m*L)/F,o=Math.sin(o*L)/F}const S=o*b;if(l=l*m+d*S,u=u*m+p*S,c=c*m+_*S,f=f*m+x*S,m===1-o){const F=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=F,u*=F,c*=F,f*=F}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],u=i[s+2],c=i[s+3],f=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+c*f+l*p-u*d,t[e+1]=l*_+c*d+u*f-o*p,t[e+2]=u*_+c*p+o*d-l*f,t[e+3]=c*_-o*f-l*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(s/2),f=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],u=e[2],c=e[6],f=e[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+a*o+s*u-r*l,this._y=s*c+a*l+r*o-i*u,this._z=r*c+a*u+i*l-s*o,this._w=a*c-i*o-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*s-o*i),c=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*u+a*f-o*c,this.y=i+l*c+o*u-r*f,this.z=s+l*f+r*c-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new H,du=new vr;class xr{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Cr.subVectors(this.max,Bs),Zi.subVectors(t.a,Bs),Ji.subVectors(t.b,Bs),Qi.subVectors(t.c,Bs),oi.subVectors(Ji,Zi),li.subVectors(Qi,Ji),Ri.subVectors(Zi,Qi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ri.z,Ri.y,oi.z,0,-oi.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!so(e,Zi,Ji,Qi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Zi,Ji,Qi,Cr))?!1:(Pr.crossVectors(oi,li),e=[Pr.x,Pr.y,Pr.z],so(e,Zi,Ji,Qi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new H,new H,new H,new H,new H,new H,new H,new H],cn=new H,Rr=new xr,Zi=new H,Ji=new H,Qi=new H,oi=new H,li=new H,Ri=new H,Bs=new H,Cr=new H,Pr=new H,Ci=new H;function so(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ci.fromArray(n,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),u=e.dot(Ci),c=i.dot(Ci);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const kg=new xr,zs=new H,ro=new H;class sc{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):kg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(ro)),this.expandByPoint(zs.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new H,ao=new H,Lr=new H,ci=new H,oo=new H,Dr=new H,lo=new H;class Nh{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ao.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(ao);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Lr),o=ci.dot(this.direction),l=-ci.dot(Lr),u=ci.lengthSq(),c=Math.abs(1-a*a);let f,d,p,_;if(c>0)if(f=a*l-o,d=a*o-l,_=r*c,f>=0)if(d>=-_)if(d<=_){const x=1/c;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ao).addScaledVector(Lr,d),p}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(i=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),c>=0?(r=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,i,s,r){oo.subVectors(e,t),Dr.subVectors(i,t),lo.crossVectors(oo,Dr);let a=this.direction.dot(lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,t);const l=o*this.direction.dot(Dr.crossVectors(ci,Dr));if(l<0)return null;const u=o*this.direction.dot(oo.cross(ci));if(u<0||l+u>a)return null;const c=-o*ci.dot(lo);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,i,s,r,a,o,l,u,c,f,d,p,_,x,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,u,c,f,d,p,_,x,m)}set(t,e,i,s,r,a,o,l,u,c,f,d,p,_,x,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*c,p=a*f,_=o*c,x=o*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=p+_*u,e[5]=d-x*u,e[9]=-o*l,e[2]=x-d*u,e[6]=_+p*u,e[10]=a*l}else if(t.order==="YXZ"){const d=l*c,p=l*f,_=u*c,x=u*f;e[0]=d+x*o,e[4]=_*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*c,e[9]=-o,e[2]=p*o-_,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*c,p=l*f,_=u*c,x=u*f;e[0]=d-x*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*c,e[9]=x-d*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*c,p=a*f,_=o*c,x=o*f;e[0]=l*c,e[4]=_*u-p,e[8]=d*u+x,e[1]=l*f,e[5]=x*u+d,e[9]=p*u-_,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*u,_=o*l,x=o*u;e[0]=l*c,e[4]=x-d*f,e[8]=_*f+p,e[1]=f,e[5]=a*c,e[9]=-o*c,e[2]=-u*c,e[6]=p*f+_,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*l,p=a*u,_=o*l,x=o*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=d*f+x,e[5]=a*c,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*c,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wg,t,Xg)}lookAt(t,e,i){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),ui.crossVectors(i,Ye),ui.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),ui.crossVectors(i,Ye)),ui.normalize(),Ir.crossVectors(Ye,ui),s[0]=ui.x,s[4]=Ir.x,s[8]=Ye.x,s[1]=ui.y,s[5]=Ir.y,s[9]=Ye.y,s[2]=ui.z,s[6]=Ir.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],b=i[3],A=i[7],S=i[11],F=i[15],L=s[0],P=s[4],U=s[8],E=s[12],M=s[1],R=s[5],I=s[9],z=s[13],J=s[2],et=s[6],G=s[10],W=s[14],k=s[3],ht=s[7],vt=s[11],yt=s[15];return r[0]=a*L+o*M+l*J+u*k,r[4]=a*P+o*R+l*et+u*ht,r[8]=a*U+o*I+l*G+u*vt,r[12]=a*E+o*z+l*W+u*yt,r[1]=c*L+f*M+d*J+p*k,r[5]=c*P+f*R+d*et+p*ht,r[9]=c*U+f*I+d*G+p*vt,r[13]=c*E+f*z+d*W+p*yt,r[2]=_*L+x*M+m*J+h*k,r[6]=_*P+x*R+m*et+h*ht,r[10]=_*U+x*I+m*G+h*vt,r[14]=_*E+x*z+m*W+h*yt,r[3]=b*L+A*M+S*J+F*k,r[7]=b*P+A*R+S*et+F*ht,r[11]=b*U+A*I+S*G+F*vt,r[15]=b*E+A*z+S*W+F*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],u=t[13],c=t[2],f=t[6],d=t[10],p=t[14],_=t[3],x=t[7],m=t[11],h=t[15];return _*(+r*l*f-s*u*f-r*o*d+i*u*d+s*o*p-i*l*p)+x*(+e*l*p-e*u*d+r*a*d-s*a*p+s*u*c-r*l*c)+m*(+e*u*f-e*o*p-r*a*f+i*a*p+r*o*c-i*u*c)+h*(-s*o*c-e*l*f+e*o*d+s*a*f-i*a*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=t[9],d=t[10],p=t[11],_=t[12],x=t[13],m=t[14],h=t[15],b=f*m*u-x*d*u+x*l*p-o*m*p-f*l*h+o*d*h,A=_*d*u-c*m*u-_*l*p+a*m*p+c*l*h-a*d*h,S=c*x*u-_*f*u+_*o*p-a*x*p-c*o*h+a*f*h,F=_*f*l-c*x*l-_*o*d+a*x*d+c*o*m-a*f*m,L=e*b+i*A+s*S+r*F;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=b*P,t[1]=(x*d*r-f*m*r-x*s*p+i*m*p+f*s*h-i*d*h)*P,t[2]=(o*m*r-x*l*r+x*s*u-i*m*u-o*s*h+i*l*h)*P,t[3]=(f*l*r-o*d*r-f*s*u+i*d*u+o*s*p-i*l*p)*P,t[4]=A*P,t[5]=(c*m*r-_*d*r+_*s*p-e*m*p-c*s*h+e*d*h)*P,t[6]=(_*l*r-a*m*r-_*s*u+e*m*u+a*s*h-e*l*h)*P,t[7]=(a*d*r-c*l*r+c*s*u-e*d*u-a*s*p+e*l*p)*P,t[8]=S*P,t[9]=(_*f*r-c*x*r-_*i*p+e*x*p+c*i*h-e*f*h)*P,t[10]=(a*x*r-_*o*r+_*i*u-e*x*u-a*i*h+e*o*h)*P,t[11]=(c*o*r-a*f*r-c*i*u+e*f*u+a*i*p-e*o*p)*P,t[12]=F*P,t[13]=(c*x*s-_*f*s+_*i*d-e*x*d-c*i*m+e*f*m)*P,t[14]=(_*o*s-a*x*s-_*i*l+e*x*l+a*i*m-e*o*m)*P,t[15]=(a*f*s-c*o*s+c*i*l-e*f*l-a*i*d+e*o*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,u=r*a,c=r*o;return this.set(u*a+i,u*o-s*l,u*l+s*o,0,u*o+s*l,c*o+i,c*l-s*a,0,u*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,u=r+r,c=a+a,f=o+o,d=r*u,p=r*c,_=r*f,x=a*c,m=a*f,h=o*f,b=l*u,A=l*c,S=l*f,F=i.x,L=i.y,P=i.z;return s[0]=(1-(x+h))*F,s[1]=(p+S)*F,s[2]=(_-A)*F,s[3]=0,s[4]=(p-S)*L,s[5]=(1-(d+h))*L,s[6]=(m+b)*L,s[7]=0,s[8]=(_+A)*P,s[9]=(m-b)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const u=1/r,c=1/a,f=1/o;return un.elements[0]*=u,un.elements[1]*=u,un.elements[2]*=u,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,e.setFromRotationMatrix(un),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=jn){const l=this.elements,u=2*r/(e-t),c=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let p,_;if(o===jn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===_a)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=jn){const l=this.elements,u=1/(e-t),c=1/(i-s),f=1/(a-r),d=(e+t)*u,p=(i+s)*c;let _,x;if(o===jn)_=(a+r)*f,x=-2*f;else if(o===_a)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ts=new H,un=new me,Wg=new H(0,0,0),Xg=new H(1,1,1),ui=new H,Ir=new H,Ye=new H,pu=new me,mu=new vr;class Dn{constructor(t=0,e=0,i=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],c=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mu.setFromEuler(this),this.setFromQuaternion(mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yg=0;const gu=new H,es=new vr,Gn=new me,Ur=new H,Gs=new H,qg=new H,$g=new vr,_u=new H(1,0,0),vu=new H(0,1,0),xu=new H(0,0,1),Mu={type:"added"},Kg={type:"removed"},ns={type:"childadded",child:null},co={type:"childremoved",child:null};class We extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new H,e=new Dn,i=new vr,s=new H(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new kt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(vu,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(vu,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ur.copy(t):Ur.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Gs,Ur,this.up):Gn.lookAt(Ur,Gs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Gn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mu),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kg),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mu),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,qg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,$g,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),c=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}We.DEFAULT_UP=new H(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new H,Hn=new H,uo=new H,Vn=new H,is=new H,ss=new H,Su=new H,fo=new H,ho=new H,po=new H,mo=new ge,go=new ge,_o=new ge;class nn{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){fn.subVectors(s,e),Hn.subVectors(i,e),uo.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Hn),l=fn.dot(uo),u=Hn.dot(Hn),c=Hn.dot(uo),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(u*l-o*c)*d,_=(a*c-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,i),_o.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(go,r.y),a.addScaledVector(_o,r.z),a}static isFrontFacing(t,e,i,s){return fn.subVectors(i,e),Hn.subVectors(t,e),fn.cross(Hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),fn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;is.subVectors(s,i),ss.subVectors(r,i),fo.subVectors(t,i);const l=is.dot(fo),u=ss.dot(fo);if(l<=0&&u<=0)return e.copy(i);ho.subVectors(t,s);const c=is.dot(ho),f=ss.dot(ho);if(c>=0&&f<=c)return e.copy(s);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(i).addScaledVector(is,a);po.subVectors(t,r);const p=is.dot(po),_=ss.dot(po);if(_>=0&&p<=_)return e.copy(r);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),e.copy(i).addScaledVector(ss,o);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return Su.subVectors(r,s),o=(f-c)/(f-c+(p-_)),e.copy(s).addScaledVector(Su,o);const h=1/(m+x+d);return a=x*h,o=d*h,e.copy(i).addScaledVector(is,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function vo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=ic(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=vo(a,r,t+1/3),this.g=vo(a,r,t),this.b=vo(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=Fh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Yt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ne(Ae.r*255,0,255))*65536+Math.round(Ne(Ae.g*255,0,255))*256+Math.round(Ne(Ae.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ae.copy(this),e);const i=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=$e){Yt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,i=Ae.g,s=Ae.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Nr);const i=ir(fi.h,Nr.h,e),s=ir(fi.s,Nr.s,e),r=ir(fi.l,Nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new qt;qt.NAMES=Fh;let jg=0;class Mr extends Ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Zn(),this.name="",this.blending=xs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Wo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ko&&(i.blendSrc=this.blendSrc),this.blendDst!==Wo&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mi extends Mr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new H,Fr=new Xt;class xn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rl,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}}class Oh extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bh extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Pe extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Zg=0;const Qe=new me,xo=new We,rs=new H,qe=new xr,Hs=new xr,Se=new H;class Sn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dh(t)?Bh:Oh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(qe.min,Hs.min),qe.expandByPoint(Se),Se.addVectors(qe.max,Hs.max),qe.expandByPoint(Se)):(qe.expandByPoint(Hs.min),qe.expandByPoint(Hs.max))}qe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Se.fromBufferAttribute(o,u),l&&(rs.fromBufferAttribute(t,u),Se.add(rs)),s=Math.max(s,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new H,l[U]=new H;const u=new H,c=new H,f=new H,d=new Xt,p=new Xt,_=new Xt,x=new H,m=new H;function h(U,E,M){u.fromBufferAttribute(i,U),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,M),c.sub(u),f.sub(u),p.sub(d),_.sub(d);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(R),o[U].add(x),o[E].add(x),o[M].add(x),l[U].add(m),l[E].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,E=b.length;U<E;++U){const M=b[U],R=M.start,I=M.count;for(let z=R,J=R+I;z<J;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const A=new H,S=new H,F=new H,L=new H;function P(U){F.fromBufferAttribute(s,U),L.copy(F);const E=o[U];A.copy(E),A.sub(F.multiplyScalar(F.dot(E))).normalize(),S.crossVectors(L,E);const R=S.dot(l[U])<0?-1:1;a.setXYZW(U,A.x,A.y,A.z,R)}for(let U=0,E=b.length;U<E;++U){const M=b[U],R=M.start,I=M.count;for(let z=R,J=R+I;z<J;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,u=new H,c=new H,f=new H;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new xn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Sn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=t(l,i);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],f=r[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new me,Pi=new Nh,Or=new sc,Eu=new H,Br=new H,zr=new H,Gr=new H,Mo=new H,Hr=new H,Tu=new H,Vr=new H;class Fe extends We{constructor(t=new Sn,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=o[l],f=r[l];c!==0&&(Mo.fromBufferAttribute(f,t),a?Hr.addScaledVector(Mo,c):Hr.addScaledVector(Mo.sub(e),c))}e.add(Hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Or.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Or,Eu)===null||Pi.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(yu.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(yu),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,F=A;S<F;S+=3){const L=o.getX(S),P=o.getX(S+1),U=o.getX(S+2);s=kr(this,h,t,i,u,c,f,L,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const b=o.getX(m),A=o.getX(m+1),S=o.getX(m+2);s=kr(this,a,t,i,u,c,f,b,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,F=A;S<F;S+=3){const L=S,P=S+1,U=S+2;s=kr(this,h,t,i,u,c,f,L,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const b=m,A=m+1,S=m+2;s=kr(this,a,t,i,u,c,f,b,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Jg(n,t,e,i,s,r,a,o){let l;if(t.side===ke?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Mi,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Vr);return u<e.near||u>e.far?null:{distance:u,point:Vr.clone(),object:n}}function kr(n,t,e,i,s,r,a,o,l,u){n.getVertexPosition(o,Br),n.getVertexPosition(l,zr),n.getVertexPosition(u,Gr);const c=Jg(n,t,e,i,Br,zr,Gr,Tu);if(c){const f=new H;nn.getBarycoord(Tu,Br,zr,Gr,f),s&&(c.uv=nn.getInterpolatedAttribute(s,o,l,u,f,new Xt)),r&&(c.uv1=nn.getInterpolatedAttribute(r,o,l,u,f,new Xt)),a&&(c.normal=nn.getInterpolatedAttribute(a,o,l,u,f,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new H,materialIndex:0};nn.getNormal(Br,zr,Gr,d.normal),c.face=d,c.barycoord=f}return c}class Sr extends Sn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(f,2));function _(x,m,h,b,A,S,F,L,P,U,E){const M=S/P,R=F/U,I=S/2,z=F/2,J=L/2,et=P+1,G=U+1;let W=0,k=0;const ht=new H;for(let vt=0;vt<G;vt++){const yt=vt*R-z;for(let Dt=0;Dt<et;Dt++){const jt=Dt*M-I;ht[x]=jt*b,ht[m]=yt*A,ht[h]=J,u.push(ht.x,ht.y,ht.z),ht[x]=0,ht[m]=0,ht[h]=L>0?1:-1,c.push(ht.x,ht.y,ht.z),f.push(Dt/P),f.push(1-vt/U),W+=1}}for(let vt=0;vt<U;vt++)for(let yt=0;yt<P;yt++){const Dt=d+yt+et*vt,jt=d+yt+et*(vt+1),nt=d+(yt+1)+et*(vt+1),lt=d+(yt+1)+et*vt;l.push(Dt,jt,lt),l.push(jt,nt,lt),k+=6}o.addGroup(p,k,E),p+=k,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ie(n){const t={};for(let e=0;e<n.length;e++){const i=Rs(n[e]);for(const s in i)t[s]=i[s]}return t}function Qg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const t_={clone:Rs,merge:Ie};var e_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Mr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e_,this.fragmentShader=n_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Qg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gh extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new H,bu=new Xt,Au=new Xt;class en extends Gh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,bu,Au),e.subVectors(Au,bu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/u,s*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,os=1;class i_ extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(as,os,t,e);s.layers=this.layers,this.add(s);const r=new en(as,os,t,e);r.layers=this.layers,this.add(r);const a=new en(as,os,t,e);a.layers=this.layers,this.add(a);const o=new en(as,os,t,e);o.layers=this.layers,this.add(o);const l=new en(as,os,t,e);l.layers=this.layers,this.add(l);const u=new en(as,os,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const u of e)this.remove(u);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,c]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(f,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hh extends ze{constructor(t,e,i,s,r,a,o,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,i,s,r,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class s_ extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Hh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sr(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:_i});r.uniforms.tEquirect.value=e;const a=new Fe(s,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Cn),new i_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const So=new H,r_=new H,a_=new kt;class Ni{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=So.subVectors(i,e).cross(r_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(So),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||a_.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new sc,Wr=new H;class Vh{constructor(t=new Ni,e=new Ni,i=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=jn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],c=s[5],f=s[6],d=s[7],p=s[8],_=s[9],x=s[10],m=s[11],h=s[12],b=s[13],A=s[14],S=s[15];if(i[0].setComponents(l-r,d-u,m-p,S-h).normalize(),i[1].setComponents(l+r,d+u,m+p,S+h).normalize(),i[2].setComponents(l+a,d+c,m+_,S+b).normalize(),i[3].setComponents(l-a,d-c,m-_,S-b).normalize(),i[4].setComponents(l-o,d-f,m-x,S-A).normalize(),e===jn)i[5].setComponents(l+o,d+f,m+x,S+A).normalize();else if(e===_a)i[5].setComponents(o,f,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function o_(n){const t=new WeakMap;function e(o,l){const u=o.array,c=o.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];n.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:s,remove:r,update:a}}class Oa extends Sn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),u=o+1,c=l+1,f=t/o,d=e/l,p=[],_=[],x=[],m=[];for(let h=0;h<c;h++){const b=h*d-a;for(let A=0;A<u;A++){const S=A*f-r;_.push(S,-b,0),x.push(0,0,1),m.push(A/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const A=b+u*h,S=b+u*(h+1),F=b+1+u*(h+1),L=b+1+u*h;p.push(A,S,L),p.push(S,F,L)}this.setIndex(p),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.width,t.height,t.widthSegments,t.heightSegments)}}var l_=`#ifdef USE_ALPHAHASH
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
}`,G_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hv=`float roughnessFactor = roughness;
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
}`,G0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:l_,alphahash_pars_fragment:c_,alphamap_fragment:u_,alphamap_pars_fragment:f_,alphatest_fragment:h_,alphatest_pars_fragment:d_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:g_,batching_vertex:__,begin_vertex:v_,beginnormal_vertex:x_,bsdfs:M_,iridescence_fragment:S_,bumpmap_pars_fragment:y_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:A_,color_fragment:w_,color_pars_fragment:R_,color_pars_vertex:C_,color_vertex:P_,common:L_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:I_,displacementmap_pars_vertex:U_,displacementmap_vertex:N_,emissivemap_fragment:F_,emissivemap_pars_fragment:O_,colorspace_fragment:B_,colorspace_pars_fragment:z_,envmap_fragment:G_,envmap_common_pars_fragment:H_,envmap_pars_fragment:V_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:tv,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:Y_,fog_fragment:q_,fog_pars_fragment:$_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:j_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:J_,lights_pars_begin:Q_,lights_toon_fragment:ev,lights_toon_pars_fragment:nv,lights_phong_fragment:iv,lights_phong_pars_fragment:sv,lights_physical_fragment:rv,lights_physical_pars_fragment:av,lights_fragment_begin:ov,lights_fragment_maps:lv,lights_fragment_end:cv,logdepthbuf_fragment:uv,logdepthbuf_pars_fragment:fv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:dv,map_fragment:pv,map_pars_fragment:mv,map_particle_fragment:gv,map_particle_pars_fragment:_v,metalnessmap_fragment:vv,metalnessmap_pars_fragment:xv,morphinstance_vertex:Mv,morphcolor_vertex:Sv,morphnormal_vertex:yv,morphtarget_pars_vertex:Ev,morphtarget_vertex:Tv,normal_fragment_begin:bv,normal_fragment_maps:Av,normal_pars_fragment:wv,normal_pars_vertex:Rv,normal_vertex:Cv,normalmap_pars_fragment:Pv,clearcoat_normal_fragment_begin:Lv,clearcoat_normal_fragment_maps:Dv,clearcoat_pars_fragment:Iv,iridescence_pars_fragment:Uv,opaque_fragment:Nv,packing:Fv,premultiplied_alpha_fragment:Ov,project_vertex:Bv,dithering_fragment:zv,dithering_pars_fragment:Gv,roughnessmap_fragment:Hv,roughnessmap_pars_fragment:Vv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:Wv,shadowmap_vertex:Xv,shadowmask_pars_fragment:Yv,skinbase_vertex:qv,skinning_pars_vertex:$v,skinning_vertex:Kv,skinnormal_vertex:jv,specularmap_fragment:Zv,specularmap_pars_fragment:Jv,tonemapping_fragment:Qv,tonemapping_pars_fragment:t0,transmission_fragment:e0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:a0,background_vert:o0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:u0,cube_vert:f0,cube_frag:h0,depth_vert:d0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:_0,equirect_frag:v0,linedashed_vert:x0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:y0,meshlambert_vert:E0,meshlambert_frag:T0,meshmatcap_vert:b0,meshmatcap_frag:A0,meshnormal_vert:w0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:I0,meshtoon_frag:U0,points_vert:N0,points_frag:F0,shadow_vert:O0,shadow_frag:B0,sprite_vert:z0,sprite_frag:G0},mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},wn={basic:{uniforms:Ie([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ie([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ie([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ie([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ie([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ie([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ie([mt.points,mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ie([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ie([mt.common,mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ie([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ie([mt.sprite,mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ie([mt.common,mt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ie([mt.lights,mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};wn.physical={uniforms:Ie([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Xr={r:0,b:0,g:0},Di=new Dn,H0=new me;function V0(n,t,e,i,s,r,a){const o=new qt(0);let l=r===!0?0:1,u,c,f=null,d=0,p=null;function _(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?e:t).get(A)),A}function x(b){let A=!1;const S=_(b);S===null?h(o,l):S&&S.isColor&&(h(S,1),A=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,A){const S=_(A);S&&(S.isCubeTexture||S.mapping===Na)?(c===void 0&&(c=new Fe(new Sr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Rs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Di.copy(A.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(Di)),c.material.toneMapped=Yt.getTransfer(S.colorSpace)!==se,(f!==S||d!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Fe(new Oa(2,2),new Si({name:"BackgroundMaterial",uniforms:Rs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=Yt.getTransfer(S.colorSpace)!==se,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function h(b,A){b.getRGB(Xr,zh(n)),i.buffers.color.setClear(Xr.r,Xr.g,Xr.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),l=A,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:x,addToRenderList:m}}function k0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(M,R,I,z,J){let et=!1;const G=f(z,I,R);r!==G&&(r=G,u(r.object)),et=p(M,z,I,J),et&&_(M,z,I,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,S(M,R,I,z),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function f(M,R,I){const z=I.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let et=J[R.id];et===void 0&&(et={},J[R.id]=et);let G=et[z];return G===void 0&&(G=d(l()),et[z]=G),G}function d(M){const R=[],I=[],z=[];for(let J=0;J<e;J++)R[J]=0,I[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,R,I,z){const J=r.attributes,et=R.attributes;let G=0;const W=I.getAttributes();for(const k in W)if(W[k].location>=0){const vt=J[k];let yt=et[k];if(yt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),vt===void 0||vt.attribute!==yt||yt&&vt.data!==yt.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function _(M,R,I,z){const J={},et=R.attributes;let G=0;const W=I.getAttributes();for(const k in W)if(W[k].location>=0){let vt=et[k];vt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor));const yt={};yt.attribute=vt,vt&&vt.data&&(yt.data=vt.data),J[k]=yt,G++}r.attributes=J,r.attributesNum=G,r.index=z}function x(){const M=r.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function m(M){h(M,0)}function h(M,R){const I=r.newAttributes,z=r.enabledAttributes,J=r.attributeDivisors;I[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),J[M]!==R&&(n.vertexAttribDivisor(M,R),J[M]=R)}function b(){const M=r.newAttributes,R=r.enabledAttributes;for(let I=0,z=R.length;I<z;I++)R[I]!==M[I]&&(n.disableVertexAttribArray(I),R[I]=0)}function A(M,R,I,z,J,et,G){G===!0?n.vertexAttribIPointer(M,R,I,J,et):n.vertexAttribPointer(M,R,I,z,J,et)}function S(M,R,I,z){x();const J=z.attributes,et=I.getAttributes(),G=R.defaultAttributeValues;for(const W in et){const k=et[W];if(k.location>=0){let ht=J[W];if(ht===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ht!==void 0){const vt=ht.normalized,yt=ht.itemSize,Dt=t.get(ht);if(Dt===void 0)continue;const jt=Dt.buffer,nt=Dt.type,lt=Dt.bytesPerElement,Tt=nt===n.INT||nt===n.UNSIGNED_INT||ht.gpuType===Zl;if(ht.isInterleavedBufferAttribute){const pt=ht.data,Pt=pt.stride,Nt=ht.offset;if(pt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<k.locationSize;Bt++)h(k.location+Bt,pt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Bt=0;Bt<k.locationSize;Bt++)m(k.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let Bt=0;Bt<k.locationSize;Bt++)A(k.location+Bt,yt/k.locationSize,nt,vt,Pt*lt,(Nt+yt/k.locationSize*Bt)*lt,Tt)}else{if(ht.isInstancedBufferAttribute){for(let pt=0;pt<k.locationSize;pt++)h(k.location+pt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let pt=0;pt<k.locationSize;pt++)m(k.location+pt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let pt=0;pt<k.locationSize;pt++)A(k.location+pt,yt/k.locationSize,nt,vt,yt*lt,yt/k.locationSize*pt*lt,Tt)}}else if(G!==void 0){const vt=G[W];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(k.location,vt);break;case 3:n.vertexAttrib3fv(k.location,vt);break;case 4:n.vertexAttrib4fv(k.location,vt);break;default:n.vertexAttrib1fv(k.location,vt)}}}}b()}function F(){U();for(const M in i){const R=i[M];for(const I in R){const z=R[I];for(const J in z)c(z[J].object),delete z[J];delete R[I]}delete i[M]}}function L(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const I in R){const z=R[I];for(const J in z)c(z[J].object),delete z[J];delete R[I]}delete i[M.id]}function P(M){for(const R in i){const I=i[R];if(I[M.id]===void 0)continue;const z=I[M.id];for(const J in z)c(z[J].object),delete z[J];delete I[M.id]}}function U(){E(),a=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function W0(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function a(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function o(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];e.update(p,i,1)}function l(u,c,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],c[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=c[x]*d[x];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function X0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==mn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===_r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ni&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Kn&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:F,maxSamples:L}}function Y0(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Ni,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?c(null):u();else{const b=r?0:i,A=b*4;let S=h.clippingState||null;l.value=S,S=c(_,d,A,p);for(let F=0;F!==A;++F)S[F]=e[F];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let A=0,S=p;A!==x;++A,S+=4)a.copy(f[A]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function q0(n){let t=new WeakMap;function e(a,o){return o===Jo?a.mapping=Ts:o===Qo&&(a.mapping=bs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jo||o===Qo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new s_(l.height);return u.fromEquirectangularTexture(n,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class $0 extends Gh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,wu=[.125,.215,.35,.446,.526,.582],zi=20,yo=new $0,Ru=new qt;let Eo=null,To=0,bo=0,Ao=!1;const Fi=(1+Math.sqrt(5))/2,ls=1/Fi,Cu=[new H(-Fi,ls,0),new H(Fi,ls,0),new H(-ls,0,Fi),new H(ls,0,Fi),new H(0,Fi,-ls),new H(0,Fi,ls),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Pu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eo,To,bo),this._renderer.xr.enabled=Ao,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:_r,format:mn,colorSpace:Cs,depthBuffer:!1},s=Lu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(r)),this._blurMaterial=j0(r,t,e)}return s}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,yo)}_sceneToCubeUV(t,e,i,s){const o=new en(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Ru),c.toneMapping=vi,c.autoClear=!1;const p=new mi({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),_=new Fe(new Sr,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Ru),x=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const A=this._cubeSize;Yr(s,b*A,h>2?A:0,A,A),c.setRenderTarget(s),x&&c.render(_,o),c.render(t,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ts||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,yo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cu[(s-r-1)%Cu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Fe(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),x=r/_,m=isFinite(r)?1+Math.floor(c*x):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const h=[];let b=0;for(let P=0;P<zi;++P){const U=P/x,E=Math.exp(-U*U/2);h.push(E),P===0?b+=E:P<m&&(b+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=_,d.mipInt.value=A-i;const S=this._sizeLods[s],F=3*S*(s>A-ps?s-A+ps:0),L=4*(this._cubeSize-S);Yr(e,F,L,3*S,2*S),l.setRenderTarget(e),l.render(f,yo)}}function K0(n){const t=[],e=[],i=[];let s=n;const r=n-ps+1+wu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ps?l=wu[a-n+ps-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,x=3,m=2,h=1,b=new Float32Array(x*_*p),A=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let L=0;L<p;L++){const P=L%3*2/3-1,U=L>2?0:-1,E=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];b.set(E,x*_*L),A.set(d,m*_*L);const M=[L,L,L,L,L,L];S.set(M,h*_*L)}const F=new Sn;F.setAttribute("position",new xn(b,x)),F.setAttribute("uv",new xn(A,m)),F.setAttribute("faceIndex",new xn(S,h)),t.push(F),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Lu(n,t,e){const i=new Xi(n,t,e);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function j0(n,t,e){const i=new Float32Array(zi),s=new H(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Du(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Iu(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function Z0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Jo||l===Qo,c=l===Ts||l===bs;if(u||c){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Pu(n)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new Pu(n)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function J0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&qs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Q0(n,t,e,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,h=x.length;m<h;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,h=x.length;m<h;m++)t.update(x[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let A=0,S=b.length;A<S;A+=3){const F=b[A+0],L=b[A+1],P=b[A+2];d.push(F,L,L,P,P,F)}}else if(_!==void 0){const b=_.array;x=_.version;for(let A=0,S=b.length/3-1;A<S;A+=3){const F=A+0,L=A+1,P=A+2;d.push(F,L,L,P,P,F)}}else return;const m=new(Dh(d)?Bh:Oh)(d,1);m.version=x;const h=r.get(f);h&&t.remove(h),r.set(f,m)}function c(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function tx(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),e.update(p,i,1)}function u(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*a,_),e.update(p,i,_))}function c(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,i,1)}function f(d,p,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,_);let h=0;for(let b=0;b<_;b++)h+=p[b]*x[b];e.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function ex(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function nx(n,t,e){const i=new WeakMap,s=new ge;function r(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let F=o.attributes.position.count*S,L=1;F>t.maxTextureSize&&(L=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const P=new Float32Array(F*L*4*f),U=new Uh(P,F,L,f);U.type=Kn,U.needsUpdate=!0;const E=S*4;for(let R=0;R<f;R++){const I=h[R],z=b[R],J=A[R],et=F*L*4*R;for(let G=0;G<I.count;G++){const W=G*E;_===!0&&(s.fromBufferAttribute(I,G),P[et+W+0]=s.x,P[et+W+1]=s.y,P[et+W+2]=s.z,P[et+W+3]=0),x===!0&&(s.fromBufferAttribute(z,G),P[et+W+4]=s.x,P[et+W+5]=s.y,P[et+W+6]=s.z,P[et+W+7]=0),m===!0&&(s.fromBufferAttribute(J,G),P[et+W+8]=s.x,P[et+W+9]=s.y,P[et+W+10]=s.z,P[et+W+11]=J.itemSize===4?s.w:1)}}d={count:f,texture:U,size:new Xt(F,L)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ix(n,t,e,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}class Wh extends ze{constructor(t,e,i,s,r,a,o,l,u,c=Ms){if(c!==Ms&&c!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ms&&(i=Wi),i===void 0&&c===ws&&(i=As),super(null,s,r,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xh=new ze,Uu=new Wh(1,1),Yh=new Uh,qh=new Vg,$h=new Hh,Nu=[],Fu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function Ls(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ba(n,t){let e=Fu[t];e===void 0&&(e=new Int32Array(t),Fu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function lx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),Me(e,i)}}function cx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,i))return;Bu.set(i),n.uniformMatrix3fv(this.addr,!1,Bu),Me(e,i)}}function ux(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),Me(e,i)}}function fx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function mx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function _x(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function xx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Uu.compareFunction=Lh,r=Uu):r=Xh,e.setTexture2D(t||r,s)}function Mx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qh,s)}function Sx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$h,s)}function yx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yh,s)}function Ex(n){switch(n){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return ux;case 5124:case 35670:return fx;case 35667:case 35671:return hx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return yx}}function Tx(n,t){n.uniform1fv(this.addr,t)}function bx(n,t){const e=Ls(t,this.size,2);n.uniform2fv(this.addr,e)}function Ax(n,t){const e=Ls(t,this.size,3);n.uniform3fv(this.addr,e)}function wx(n,t){const e=Ls(t,this.size,4);n.uniform4fv(this.addr,e)}function Rx(n,t){const e=Ls(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cx(n,t){const e=Ls(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Px(n,t){const e=Ls(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Lx(n,t){n.uniform1iv(this.addr,t)}function Dx(n,t){n.uniform2iv(this.addr,t)}function Ix(n,t){n.uniform3iv(this.addr,t)}function Ux(n,t){n.uniform4iv(this.addr,t)}function Nx(n,t){n.uniform1uiv(this.addr,t)}function Fx(n,t){n.uniform2uiv(this.addr,t)}function Ox(n,t){n.uniform3uiv(this.addr,t)}function Bx(n,t){n.uniform4uiv(this.addr,t)}function zx(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Xh,r[a])}function Gx(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qh,r[a])}function Hx(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$h,r[a])}function Vx(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yh,r[a])}function kx(n){switch(n){case 5126:return Tx;case 35664:return bx;case 35665:return Ax;case 35666:return wx;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Ix;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Fx;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}class Wx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ex(e.type)}}class Xx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kx(e.type)}}class Yx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function Gu(n,t){n.seq.push(t),n.map[t.id]=t}function qx(n,t,e){const i=n.name,s=i.length;for(wo.lastIndex=0;;){const r=wo.exec(i),a=wo.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){Gu(e,u===void 0?new Wx(o,n,t):new Xx(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Yx(o),Gu(e,f)),e=f}}}class aa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qx(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Hu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const $x=37297;let Kx=0;function jx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Vu=new kt;function Zx(n){Yt._getMatrix(Vu,Yt.workingColorSpace,n);const t=`mat3( ${Vu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Fa:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ku(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jx(n.getShaderSource(t),a)}else return s}function Jx(n,t){const e=Zx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qx(n,t){let e;switch(t){case Qm:e="Linear";break;case tg:e="Reinhard";break;case eg:e="Cineon";break;case ng:e="ACESFilmic";break;case sg:e="AgX";break;case rg:e="Neutral";break;case ig:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new H;function tM(){Yt.getLuminanceCoefficients(qr);const n=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function nM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function iM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function $s(n){return n!==""}function Wu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(n){return n.replace(sM,aM)}const rM=new Map;function aM(n,t){let e=Wt[t];if(e===void 0){const i=rM.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}const oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(n){return n.replace(oM,lM)}function lM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function cM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function uM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case bs:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function hM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zm:t="ENVMAP_BLENDING_MIX";break;case Jm:t="ENVMAP_BLENDING_ADD";break}return t}function dM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function pM(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=cM(e),u=uM(e),c=fM(e),f=hM(e),d=dM(e),p=eM(e),_=nM(r),x=s.createProgram();let m,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($s).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($s).join(`
`),h.length>0&&(h+=`
`)):(m=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),h=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==vi?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Jx("linearToOutputTexel",e.outputColorSpace),tM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),a=Cl(a),a=Wu(a,e),a=Xu(a,e),o=Cl(o),o=Wu(o,e),o=Xu(o,e),a=Yu(a),o=Yu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=b+m+a,S=b+h+o,F=Hu(s,s.VERTEX_SHADER,A),L=Hu(s,s.FRAGMENT_SHADER,S);s.attachShader(x,F),s.attachShader(x,L),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(R){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(F).trim(),J=s.getShaderInfoLog(L).trim();let et=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,L);else{const W=ku(s,F,"vertex"),k=ku(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+k)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||J==="")&&(G=!1);G&&(R.diagnostics={runnable:et,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:J,prefix:h}})}s.deleteShader(F),s.deleteShader(L),U=new aa(s,x),E=iM(s,x)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,$x)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=L,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _M(t),e.set(t,i)),i}}class _M{constructor(t){this.id=mM++,this.code=t,this.usedTimes=0}}function vM(n,t,e,i,s,r,a){const o=new rc,l=new gM,u=new Set,c=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,M,R,I,z){const J=I.fog,et=z.geometry,G=E.isMeshStandardMaterial?I.environment:null,W=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),k=W&&W.mapping===Na?W.image.height:null,ht=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const vt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,yt=vt!==void 0?vt.length:0;let Dt=0;et.morphAttributes.position!==void 0&&(Dt=1),et.morphAttributes.normal!==void 0&&(Dt=2),et.morphAttributes.color!==void 0&&(Dt=3);let jt,nt,lt,Tt;if(ht){const ne=wn[ht];jt=ne.vertexShader,nt=ne.fragmentShader}else jt=E.vertexShader,nt=E.fragmentShader,l.update(E),lt=l.getVertexShaderID(E),Tt=l.getFragmentShaderID(E);const pt=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Nt=z.isInstancedMesh===!0,Bt=z.isBatchedMesh===!0,ue=!!E.map,w=!!E.matcap,D=!!W,T=!!E.aoMap,it=!!E.lightMap,j=!!E.bumpMap,K=!!E.normalMap,tt=!!E.displacementMap,rt=!!E.emissiveMap,Z=!!E.metalnessMap,v=!!E.roughnessMap,g=E.anisotropy>0,C=E.clearcoat>0,V=E.dispersion>0,Y=E.iridescence>0,X=E.sheen>0,ft=E.transmission>0,at=g&&!!E.anisotropyMap,ct=C&&!!E.clearcoatMap,Lt=C&&!!E.clearcoatNormalMap,ot=C&&!!E.clearcoatRoughnessMap,gt=Y&&!!E.iridescenceMap,Ct=Y&&!!E.iridescenceThicknessMap,It=X&&!!E.sheenColorMap,dt=X&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,zt=!!E.specularColorMap,ee=!!E.specularIntensityMap,N=ft&&!!E.transmissionMap,_t=ft&&!!E.thicknessMap,Q=!!E.gradientMap,st=!!E.alphaMap,St=E.alphaTest>0,xt=!!E.alphaHash,Ht=!!E.extensions;let de=vi;E.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(de=n.toneMapping);const Te={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:jt,fragmentShader:nt,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:Tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&z._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&z.instanceColor!==null,instancingMorph:Nt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Cs,alphaToCoverage:!!E.alphaToCoverage,map:ue,matcap:w,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:k,aoMap:T,lightMap:it,bumpMap:j,normalMap:K,displacementMap:d&&tt,emissiveMap:rt,normalMapObjectSpace:K&&E.normalMapType===ug,normalMapTangentSpace:K&&E.normalMapType===cg,metalnessMap:Z,roughnessMap:v,anisotropy:g,anisotropyMap:at,clearcoat:C,clearcoatMap:ct,clearcoatNormalMap:Lt,clearcoatRoughnessMap:ot,dispersion:V,iridescence:Y,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:X,sheenColorMap:It,sheenRoughnessMap:dt,specularMap:Ft,specularColorMap:zt,specularIntensityMap:ee,transmission:ft,transmissionMap:N,thicknessMap:_t,gradientMap:Q,opaque:E.transparent===!1&&E.blending===xs&&E.alphaToCoverage===!1,alphaMap:st,alphaTest:St,alphaHash:xt,combine:E.combine,mapUv:ue&&x(E.map.channel),aoMapUv:T&&x(E.aoMap.channel),lightMapUv:it&&x(E.lightMap.channel),bumpMapUv:j&&x(E.bumpMap.channel),normalMapUv:K&&x(E.normalMap.channel),displacementMapUv:tt&&x(E.displacementMap.channel),emissiveMapUv:rt&&x(E.emissiveMap.channel),metalnessMapUv:Z&&x(E.metalnessMap.channel),roughnessMapUv:v&&x(E.roughnessMap.channel),anisotropyMapUv:at&&x(E.anisotropyMap.channel),clearcoatMapUv:ct&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(E.sheenRoughnessMap.channel),specularMapUv:Ft&&x(E.specularMap.channel),specularColorMapUv:zt&&x(E.specularColorMap.channel),specularIntensityMapUv:ee&&x(E.specularIntensityMap.channel),transmissionMapUv:N&&x(E.transmissionMap.channel),thicknessMapUv:_t&&x(E.thicknessMap.channel),alphaMapUv:st&&x(E.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(K||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!et.attributes.uv&&(ue||st),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pt,skinning:z.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:ue&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===se,decodeVideoTextureEmissive:rt&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hn,flipSided:E.side===ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ht&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&E.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Te.vertexUv1s=u.has(1),Te.vertexUv2s=u.has(2),Te.vertexUv3s=u.has(3),u.clear(),Te}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)M.push(R),M.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(b(M,E),A(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function A(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const M=_[E.type];let R;if(M){const I=wn[M];R=t_.clone(I.uniforms)}else R=E.uniforms;return R}function F(E,M){let R;for(let I=0,z=c.length;I<z;I++){const J=c[I];if(J.cacheKey===M){R=J,++R.usedTimes;break}}return R===void 0&&(R=new pM(n,M,E,r),c.push(R)),R}function L(E){if(--E.usedTimes===0){const M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),E.destroy()}}function P(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:F,releaseProgram:L,releaseShaderCache:P,programs:c,dispose:U}}function xM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function MM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function $u(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ku(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,d,p,_,x,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=m),t++,h}function o(f,d,p,_,x,m){const h=a(f,d,p,_,x,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,d,p,_,x,m){const h=a(f,d,p,_,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function u(f,d){e.length>1&&e.sort(f||MM),i.length>1&&i.sort(d||$u),s.length>1&&s.sort(d||$u)}function c(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:c,sort:u}}function SM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Ku,n.set(i,[a])):s>=r.length?(a=new Ku,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function yM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new qt};break;case"SpotLight":e={position:new H,direction:new H,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function EM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let TM=0;function bM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function AM(n){const t=new yM,e=EM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const s=new H,r=new me,a=new me;function o(u){let c=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,b=0,A=0,S=0,F=0,L=0,P=0;u.sort(bM);for(let E=0,M=u.length;E<M;E++){const R=u[E],I=R.color,z=R.intensity,J=R.distance,et=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=I.r*z,f+=I.g*z,d+=I.b*z;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],z);P++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,k=e.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=et,i.directionalShadowMatrix[p]=R.shadow.matrix,b++}i.directional[p]=G,p++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(I).multiplyScalar(z),G.distance=J,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[x]=G;const W=R.shadow;if(R.map&&(i.spotLightMap[F]=R.map,F++,W.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[x]=W.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=et,S++}x++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(I).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const W=R.shadow,k=e.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=et,i.pointShadowMatrix[_]=R.shadow.matrix,A++}i.point[_]=G,_++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(z),G.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[h]=G,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==A||U.numSpotShadows!==S||U.numSpotMaps!==F||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+F-L,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,U.directionalLength=p,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=A,U.numSpotShadows=S,U.numSpotMaps=F,U.numLightProbes=P,i.version=TM++)}function l(u,c){let f=0,d=0,p=0,_=0,x=0;const m=c.matrixWorldInverse;for(let h=0,b=u.length;h<b;h++){const A=u[h];if(A.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(A.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function ju(n){const t=new AM(n),e=[],i=[];function s(c){u.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function a(c){i.push(c)}function o(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function wM(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ju(n),t.set(s,[o])):r>=a.length?(o=new ju(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class RM extends Mr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CM extends Mr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const PM=`void main() {
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
}`;function DM(n,t,e){let i=new Vh;const s=new Xt,r=new Xt,a=new ge,o=new RM({depthPacking:lg}),l=new CM,u={},c=e.maxTextureSize,f={[Mi]:ke,[ke]:Mi,[hn]:hn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:PM,fragmentShader:LM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Sn;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Fe(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let h=this.type;this.render=function(L,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(_i),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=h!==kn&&this.type===kn,J=h===kn&&this.type!==kn;for(let et=0,G=L.length;et<G;et++){const W=L[et],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ht=k.getFrameExtents();if(s.multiply(ht),r.copy(k.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ht.x),s.x=r.x*ht.x,k.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ht.y),s.y=r.y*ht.y,k.mapSize.y=r.y)),k.map===null||z===!0||J===!0){const yt=this.type!==kn?{minFilter:vn,magFilter:vn}:{};k.map!==null&&k.map.dispose(),k.map=new Xi(s.x,s.y,yt),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const vt=k.getViewportCount();for(let yt=0;yt<vt;yt++){const Dt=k.getViewport(yt);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),I.viewport(a),k.updateMatrices(W,yt),i=k.getFrustum(),S(P,U,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===kn&&b(k,U),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,R)};function b(L,P){const U=t.update(x);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,U,d,x,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,U,p,x,null)}function A(L,P,U,E){let M=null;const R=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)M=R;else if(M=U.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const I=M.uuid,z=P.uuid;let J=u[I];J===void 0&&(J={},u[I]=J);let et=J[z];et===void 0&&(et=M.clone(),J[z]=et,P.addEventListener("dispose",F)),M=et}if(M.visible=P.visible,M.wireframe=P.wireframe,E===kn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=U}return M}function S(L,P,U,E,M){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===kn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const z=t.update(L),J=L.material;if(Array.isArray(J)){const et=z.groups;for(let G=0,W=et.length;G<W;G++){const k=et[G],ht=J[k.materialIndex];if(ht&&ht.visible){const vt=A(L,ht,E,M);L.onBeforeShadow(n,L,P,U,z,vt,k),n.renderBufferDirect(U,null,z,vt,L,k),L.onAfterShadow(n,L,P,U,z,vt,k)}}}else if(J.visible){const et=A(L,J,E,M);L.onBeforeShadow(n,L,P,U,z,et,null),n.renderBufferDirect(U,null,z,et,L,null),L.onAfterShadow(n,L,P,U,z,et,null)}}const I=L.children;for(let z=0,J=I.length;z<J;z++)S(I[z],P,U,E,M)}function F(L){L.target.removeEventListener("dispose",F);for(const U in u){const E=u[U],M=L.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const IM={[Xo]:Yo,[qo]:jo,[$o]:Zo,[Es]:Ko,[Yo]:Xo,[jo]:qo,[Zo]:$o,[Ko]:Es};function UM(n,t){function e(){let N=!1;const _t=new ge;let Q=null;const st=new ge(0,0,0,0);return{setMask:function(St){Q!==St&&!N&&(n.colorMask(St,St,St,St),Q=St)},setLocked:function(St){N=St},setClear:function(St,xt,Ht,de,Te){Te===!0&&(St*=de,xt*=de,Ht*=de),_t.set(St,xt,Ht,de),st.equals(_t)===!1&&(n.clearColor(St,xt,Ht,de),st.copy(_t))},reset:function(){N=!1,Q=null,st.set(-1,0,0,0)}}}function i(){let N=!1,_t=!1,Q=null,st=null,St=null;return{setReversed:function(xt){if(_t!==xt){const Ht=t.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const de=St;St=null,this.setClear(de)}_t=xt},getReversed:function(){return _t},setTest:function(xt){xt?pt(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(xt){Q!==xt&&!N&&(n.depthMask(xt),Q=xt)},setFunc:function(xt){if(_t&&(xt=IM[xt]),st!==xt){switch(xt){case Xo:n.depthFunc(n.NEVER);break;case Yo:n.depthFunc(n.ALWAYS);break;case qo:n.depthFunc(n.LESS);break;case Es:n.depthFunc(n.LEQUAL);break;case $o:n.depthFunc(n.EQUAL);break;case Ko:n.depthFunc(n.GEQUAL);break;case jo:n.depthFunc(n.GREATER);break;case Zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}st=xt}},setLocked:function(xt){N=xt},setClear:function(xt){St!==xt&&(_t&&(xt=1-xt),n.clearDepth(xt),St=xt)},reset:function(){N=!1,Q=null,st=null,St=null,_t=!1}}}function s(){let N=!1,_t=null,Q=null,st=null,St=null,xt=null,Ht=null,de=null,Te=null;return{setTest:function(ne){N||(ne?pt(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(ne){_t!==ne&&!N&&(n.stencilMask(ne),_t=ne)},setFunc:function(ne,on,Un){(Q!==ne||st!==on||St!==Un)&&(n.stencilFunc(ne,on,Un),Q=ne,st=on,St=Un)},setOp:function(ne,on,Un){(xt!==ne||Ht!==on||de!==Un)&&(n.stencilOp(ne,on,Un),xt=ne,Ht=on,de=Un)},setLocked:function(ne){N=ne},setClear:function(ne){Te!==ne&&(n.clearStencil(ne),Te=ne)},reset:function(){N=!1,_t=null,Q=null,st=null,St=null,xt=null,Ht=null,de=null,Te=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,b=null,A=null,S=null,F=null,L=null,P=new qt(0,0,0),U=0,E=!1,M=null,R=null,I=null,z=null,J=null;const et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=W>=2);let ht=null,vt={};const yt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),jt=new ge().fromArray(yt),nt=new ge().fromArray(Dt);function lt(N,_t,Q,st){const St=new Uint8Array(4),xt=n.createTexture();n.bindTexture(N,xt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<Q;Ht++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(_t+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return xt}const Tt={};Tt[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(n.DEPTH_TEST),a.setFunc(Es),j(!1),K(eu),pt(n.CULL_FACE),T(_i);function pt(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function Pt(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Nt(N,_t){return f[N]!==_t?(n.bindFramebuffer(N,_t),f[N]=_t,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_t),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function Bt(N,_t){let Q=p,st=!1;if(N){Q=d.get(_t),Q===void 0&&(Q=[],d.set(_t,Q));const St=N.textures;if(Q.length!==St.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Ht=St.length;xt<Ht;xt++)Q[xt]=n.COLOR_ATTACHMENT0+xt;Q.length=St.length,st=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,st=!0);st&&n.drawBuffers(Q)}function ue(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const w={[Bi]:n.FUNC_ADD,[Um]:n.FUNC_SUBTRACT,[Nm]:n.FUNC_REVERSE_SUBTRACT};w[Fm]=n.MIN,w[Om]=n.MAX;const D={[Bm]:n.ZERO,[zm]:n.ONE,[Gm]:n.SRC_COLOR,[ko]:n.SRC_ALPHA,[Ym]:n.SRC_ALPHA_SATURATE,[Wm]:n.DST_COLOR,[Vm]:n.DST_ALPHA,[Hm]:n.ONE_MINUS_SRC_COLOR,[Wo]:n.ONE_MINUS_SRC_ALPHA,[Xm]:n.ONE_MINUS_DST_COLOR,[km]:n.ONE_MINUS_DST_ALPHA,[qm]:n.CONSTANT_COLOR,[$m]:n.ONE_MINUS_CONSTANT_COLOR,[Km]:n.CONSTANT_ALPHA,[jm]:n.ONE_MINUS_CONSTANT_ALPHA};function T(N,_t,Q,st,St,xt,Ht,de,Te,ne){if(N===_i){x===!0&&(Pt(n.BLEND),x=!1);return}if(x===!1&&(pt(n.BLEND),x=!0),N!==Im){if(N!==m||ne!==E){if((h!==Bi||S!==Bi)&&(n.blendEquation(n.FUNC_ADD),h=Bi,S=Bi),ne)switch(N){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ga:n.blendFunc(n.ONE,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ga:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case iu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,A=null,F=null,L=null,P.set(0,0,0),U=0,m=N,E=ne}return}St=St||_t,xt=xt||Q,Ht=Ht||st,(_t!==h||St!==S)&&(n.blendEquationSeparate(w[_t],w[St]),h=_t,S=St),(Q!==b||st!==A||xt!==F||Ht!==L)&&(n.blendFuncSeparate(D[Q],D[st],D[xt],D[Ht]),b=Q,A=st,F=xt,L=Ht),(de.equals(P)===!1||Te!==U)&&(n.blendColor(de.r,de.g,de.b,Te),P.copy(de),U=Te),m=N,E=!1}function it(N,_t){N.side===hn?Pt(n.CULL_FACE):pt(n.CULL_FACE);let Q=N.side===ke;_t&&(Q=!Q),j(Q),N.blending===xs&&N.transparent===!1?T(_i):T(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const st=N.stencilWrite;o.setTest(st),st&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function K(N){N!==Pm?(pt(n.CULL_FACE),N!==R&&(N===eu?n.cullFace(n.BACK):N===Lm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),R=N}function tt(N){N!==I&&(G&&n.lineWidth(N),I=N)}function rt(N,_t,Q){N?(pt(n.POLYGON_OFFSET_FILL),(z!==_t||J!==Q)&&(n.polygonOffset(_t,Q),z=_t,J=Q)):Pt(n.POLYGON_OFFSET_FILL)}function Z(N){N?pt(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function v(N){N===void 0&&(N=n.TEXTURE0+et-1),ht!==N&&(n.activeTexture(N),ht=N)}function g(N,_t,Q){Q===void 0&&(ht===null?Q=n.TEXTURE0+et-1:Q=ht);let st=vt[Q];st===void 0&&(st={type:void 0,texture:void 0},vt[Q]=st),(st.type!==N||st.texture!==_t)&&(ht!==Q&&(n.activeTexture(Q),ht=Q),n.bindTexture(N,_t||Tt[N]),st.type=N,st.texture=_t)}function C(){const N=vt[ht];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(N){jt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),jt.copy(N))}function dt(N){nt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),nt.copy(N))}function Ft(N,_t){let Q=u.get(_t);Q===void 0&&(Q=new WeakMap,u.set(_t,Q));let st=Q.get(N);st===void 0&&(st=n.getUniformBlockIndex(_t,N.name),Q.set(N,st))}function zt(N,_t){const st=u.get(_t).get(N);l.get(_t)!==st&&(n.uniformBlockBinding(_t,st,N.__bindingPointIndex),l.set(_t,st))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ht=null,vt={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,b=null,A=null,S=null,F=null,L=null,P=new qt(0,0,0),U=0,E=!1,M=null,R=null,I=null,z=null,J=null,jt.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:Pt,bindFramebuffer:Nt,drawBuffers:Bt,useProgram:ue,setBlending:T,setMaterial:it,setFlipSided:j,setCullFace:K,setLineWidth:tt,setPolygonOffset:rt,setScissorTest:Z,activeTexture:v,bindTexture:g,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:Y,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:Lt,texStorage3D:ot,texSubImage2D:X,texSubImage3D:ft,compressedTexSubImage2D:at,compressedTexSubImage3D:ct,scissor:It,viewport:dt,reset:ee}}function Zu(n,t,e,i){const s=NM(i);switch(e){case Th:return n*t;case Ah:return n*t;case wh:return n*t*2;case Rh:return n*t/s.components*s.byteLength;case tc:return n*t/s.components*s.byteLength;case Ch:return n*t*2/s.components*s.byteLength;case ec:return n*t*2/s.components*s.byteLength;case bh:return n*t*3/s.components*s.byteLength;case mn:return n*t*4/s.components*s.byteLength;case nc:return n*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(n,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(n,8)*Math.max(t,8)/2;case al:case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case pl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ra:case El:case Tl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ph:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Al:case wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function NM(n){switch(n){case ni:case Sh:return{byteLength:1,components:1};case fr:case yh:case _r:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case Wi:case Zl:case Kn:return{byteLength:4,components:1};case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function FM(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xt,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(v,g){return p?new OffscreenCanvas(v,g):va("canvas")}function x(v,g,C){let V=1;const Y=Z(v);if((Y.width>C||Y.height>C)&&(V=C/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const X=Math.floor(V*Y.width),ft=Math.floor(V*Y.height);f===void 0&&(f=_(X,ft));const at=g?_(X,ft):f;return at.width=X,at.height=ft,at.getContext("2d").drawImage(v,0,0,X,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+ft+")."),at}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),v;return v}function m(v){return v.generateMipmaps}function h(v){n.generateMipmap(v)}function b(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(v,g,C,V,Y=!1){if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let X=g;if(g===n.RED&&(C===n.FLOAT&&(X=n.R32F),C===n.HALF_FLOAT&&(X=n.R16F),C===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(X=n.R8UI),C===n.UNSIGNED_SHORT&&(X=n.R16UI),C===n.UNSIGNED_INT&&(X=n.R32UI),C===n.BYTE&&(X=n.R8I),C===n.SHORT&&(X=n.R16I),C===n.INT&&(X=n.R32I)),g===n.RG&&(C===n.FLOAT&&(X=n.RG32F),C===n.HALF_FLOAT&&(X=n.RG16F),C===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(X=n.RG8UI),C===n.UNSIGNED_SHORT&&(X=n.RG16UI),C===n.UNSIGNED_INT&&(X=n.RG32UI),C===n.BYTE&&(X=n.RG8I),C===n.SHORT&&(X=n.RG16I),C===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(X=n.RGB8UI),C===n.UNSIGNED_SHORT&&(X=n.RGB16UI),C===n.UNSIGNED_INT&&(X=n.RGB32UI),C===n.BYTE&&(X=n.RGB8I),C===n.SHORT&&(X=n.RGB16I),C===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),C===n.UNSIGNED_INT&&(X=n.RGBA32UI),C===n.BYTE&&(X=n.RGBA8I),C===n.SHORT&&(X=n.RGBA16I),C===n.INT&&(X=n.RGBA32I)),g===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),g===n.RGBA){const ft=Y?Fa:Yt.getTransfer(V);C===n.FLOAT&&(X=n.RGBA32F),C===n.HALF_FLOAT&&(X=n.RGBA16F),C===n.UNSIGNED_BYTE&&(X=ft===se?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(v,g){let C;return v?g===null||g===Wi||g===As?C=n.DEPTH24_STENCIL8:g===Kn?C=n.DEPTH32F_STENCIL8:g===fr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Wi||g===As?C=n.DEPTH_COMPONENT24:g===Kn?C=n.DEPTH_COMPONENT32F:g===fr&&(C=n.DEPTH_COMPONENT16),C}function F(v,g){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==vn&&v.minFilter!==Cn?Math.log2(Math.max(g.width,g.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?g.mipmaps.length:1}function L(v){const g=v.target;g.removeEventListener("dispose",L),U(g),g.isVideoTexture&&c.delete(g)}function P(v){const g=v.target;g.removeEventListener("dispose",P),M(g)}function U(v){const g=i.get(v);if(g.__webglInit===void 0)return;const C=v.source,V=d.get(C);if(V){const Y=V[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(v),Object.keys(V).length===0&&d.delete(C)}i.remove(v)}function E(v){const g=i.get(v);n.deleteTexture(g.__webglTexture);const C=v.source,V=d.get(C);delete V[g.__cacheKey],a.memory.textures--}function M(v){const g=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let Y=0;Y<g.__webglFramebuffer[V].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[V][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)n.deleteFramebuffer(g.__webglFramebuffer[V]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const C=v.textures;for(let V=0,Y=C.length;V<Y;V++){const X=i.get(C[V]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(C[V])}i.remove(v)}let R=0;function I(){R=0}function z(){const v=R;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),R+=1,v}function J(v){const g=[];return g.push(v.wrapS),g.push(v.wrapT),g.push(v.wrapR||0),g.push(v.magFilter),g.push(v.minFilter),g.push(v.anisotropy),g.push(v.internalFormat),g.push(v.format),g.push(v.type),g.push(v.generateMipmaps),g.push(v.premultiplyAlpha),g.push(v.flipY),g.push(v.unpackAlignment),g.push(v.colorSpace),g.join()}function et(v,g){const C=i.get(v);if(v.isVideoTexture&&tt(v),v.isRenderTargetTexture===!1&&v.version>0&&C.__version!==v.version){const V=v.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(C,v,g);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+g)}function G(v,g){const C=i.get(v);if(v.version>0&&C.__version!==v.version){nt(C,v,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+g)}function W(v,g){const C=i.get(v);if(v.version>0&&C.__version!==v.version){nt(C,v,g);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+g)}function k(v,g){const C=i.get(v);if(v.version>0&&C.__version!==v.version){lt(C,v,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+g)}const ht={[tl]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},vt={[vn]:n.NEAREST,[ag]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[to]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},yt={[fg]:n.NEVER,[_g]:n.ALWAYS,[hg]:n.LESS,[Lh]:n.LEQUAL,[dg]:n.EQUAL,[gg]:n.GEQUAL,[pg]:n.GREATER,[mg]:n.NOTEQUAL};function Dt(v,g){if(g.type===Kn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Cn||g.magFilter===to||g.magFilter===wr||g.magFilter===Hi||g.minFilter===Cn||g.minFilter===to||g.minFilter===wr||g.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ht[g.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ht[g.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ht[g.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,vt[g.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,vt[g.minFilter]),g.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,yt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===vn||g.minFilter!==wr&&g.minFilter!==Hi||g.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(v,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function jt(v,g){let C=!1;v.__webglInit===void 0&&(v.__webglInit=!0,g.addEventListener("dispose",L));const V=g.source;let Y=d.get(V);Y===void 0&&(Y={},d.set(V,Y));const X=J(g);if(X!==v.__cacheKey){Y[X]===void 0&&(Y[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),Y[X].usedTimes++;const ft=Y[v.__cacheKey];ft!==void 0&&(Y[v.__cacheKey].usedTimes--,ft.usedTimes===0&&E(g)),v.__cacheKey=X,v.__webglTexture=Y[X].texture}return C}function nt(v,g,C){let V=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=n.TEXTURE_3D);const Y=jt(v,g),X=g.source;e.bindTexture(V,v.__webglTexture,n.TEXTURE0+C);const ft=i.get(X);if(X.version!==ft.__version||Y===!0){e.activeTexture(n.TEXTURE0+C);const at=Yt.getPrimaries(Yt.workingColorSpace),ct=g.colorSpace===gi?null:Yt.getPrimaries(g.colorSpace),Lt=g.colorSpace===gi||at===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ot=x(g.image,!1,s.maxTextureSize);ot=rt(g,ot);const gt=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type);let It=A(g.internalFormat,gt,Ct,g.colorSpace,g.isVideoTexture);Dt(V,g);let dt;const Ft=g.mipmaps,zt=g.isVideoTexture!==!0,ee=ft.__version===void 0||Y===!0,N=X.dataReady,_t=F(g,ot);if(g.isDepthTexture)It=S(g.format===ws,g.type),ee&&(zt?e.texStorage2D(n.TEXTURE_2D,1,It,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,It,ot.width,ot.height,0,gt,Ct,null));else if(g.isDataTexture)if(Ft.length>0){zt&&ee&&e.texStorage2D(n.TEXTURE_2D,_t,It,Ft[0].width,Ft[0].height);for(let Q=0,st=Ft.length;Q<st;Q++)dt=Ft[Q],zt?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,dt.width,dt.height,gt,Ct,dt.data):e.texImage2D(n.TEXTURE_2D,Q,It,dt.width,dt.height,0,gt,Ct,dt.data);g.generateMipmaps=!1}else zt?(ee&&e.texStorage2D(n.TEXTURE_2D,_t,It,ot.width,ot.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,gt,Ct,ot.data)):e.texImage2D(n.TEXTURE_2D,0,It,ot.width,ot.height,0,gt,Ct,ot.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){zt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,It,Ft[0].width,Ft[0].height,ot.depth);for(let Q=0,st=Ft.length;Q<st;Q++)if(dt=Ft[Q],g.format!==mn)if(gt!==null)if(zt){if(N)if(g.layerUpdates.size>0){const St=Zu(dt.width,dt.height,g.format,g.type);for(const xt of g.layerUpdates){const Ht=dt.data.subarray(xt*St/dt.data.BYTES_PER_ELEMENT,(xt+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,xt,dt.width,dt.height,1,gt,Ht)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,ot.depth,gt,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,It,dt.width,dt.height,ot.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,ot.depth,gt,Ct,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,It,dt.width,dt.height,ot.depth,0,gt,Ct,dt.data)}else{zt&&ee&&e.texStorage2D(n.TEXTURE_2D,_t,It,Ft[0].width,Ft[0].height);for(let Q=0,st=Ft.length;Q<st;Q++)dt=Ft[Q],g.format!==mn?gt!==null?zt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,dt.width,dt.height,gt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,It,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,dt.width,dt.height,gt,Ct,dt.data):e.texImage2D(n.TEXTURE_2D,Q,It,dt.width,dt.height,0,gt,Ct,dt.data)}else if(g.isDataArrayTexture)if(zt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,It,ot.width,ot.height,ot.depth),N)if(g.layerUpdates.size>0){const Q=Zu(ot.width,ot.height,g.format,g.type);for(const st of g.layerUpdates){const St=ot.data.subarray(st*Q/ot.data.BYTES_PER_ELEMENT,(st+1)*Q/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,ot.width,ot.height,1,gt,Ct,St)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,gt,Ct,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,ot.width,ot.height,ot.depth,0,gt,Ct,ot.data);else if(g.isData3DTexture)zt?(ee&&e.texStorage3D(n.TEXTURE_3D,_t,It,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,gt,Ct,ot.data)):e.texImage3D(n.TEXTURE_3D,0,It,ot.width,ot.height,ot.depth,0,gt,Ct,ot.data);else if(g.isFramebufferTexture){if(ee)if(zt)e.texStorage2D(n.TEXTURE_2D,_t,It,ot.width,ot.height);else{let Q=ot.width,st=ot.height;for(let St=0;St<_t;St++)e.texImage2D(n.TEXTURE_2D,St,It,Q,st,0,gt,Ct,null),Q>>=1,st>>=1}}else if(Ft.length>0){if(zt&&ee){const Q=Z(Ft[0]);e.texStorage2D(n.TEXTURE_2D,_t,It,Q.width,Q.height)}for(let Q=0,st=Ft.length;Q<st;Q++)dt=Ft[Q],zt?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,gt,Ct,dt):e.texImage2D(n.TEXTURE_2D,Q,It,gt,Ct,dt);g.generateMipmaps=!1}else if(zt){if(ee){const Q=Z(ot);e.texStorage2D(n.TEXTURE_2D,_t,It,Q.width,Q.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Ct,ot)}else e.texImage2D(n.TEXTURE_2D,0,It,gt,Ct,ot);m(g)&&h(V),ft.__version=X.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function lt(v,g,C){if(g.image.length!==6)return;const V=jt(v,g),Y=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+C);const X=i.get(Y);if(Y.version!==X.__version||V===!0){e.activeTexture(n.TEXTURE0+C);const ft=Yt.getPrimaries(Yt.workingColorSpace),at=g.colorSpace===gi?null:Yt.getPrimaries(g.colorSpace),ct=g.colorSpace===gi||ft===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Lt=g.isCompressedTexture||g.image[0].isCompressedTexture,ot=g.image[0]&&g.image[0].isDataTexture,gt=[];for(let st=0;st<6;st++)!Lt&&!ot?gt[st]=x(g.image[st],!0,s.maxCubemapSize):gt[st]=ot?g.image[st].image:g.image[st],gt[st]=rt(g,gt[st]);const Ct=gt[0],It=r.convert(g.format,g.colorSpace),dt=r.convert(g.type),Ft=A(g.internalFormat,It,dt,g.colorSpace),zt=g.isVideoTexture!==!0,ee=X.__version===void 0||V===!0,N=Y.dataReady;let _t=F(g,Ct);Dt(n.TEXTURE_CUBE_MAP,g);let Q;if(Lt){zt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ft,Ct.width,Ct.height);for(let st=0;st<6;st++){Q=gt[st].mipmaps;for(let St=0;St<Q.length;St++){const xt=Q[St];g.format!==mn?It!==null?zt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,xt.width,xt.height,It,xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Ft,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,xt.width,xt.height,It,dt,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Ft,xt.width,xt.height,0,It,dt,xt.data)}}}else{if(Q=g.mipmaps,zt&&ee){Q.length>0&&_t++;const st=Z(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ft,st.width,st.height)}for(let st=0;st<6;st++)if(ot){zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,gt[st].width,gt[st].height,It,dt,gt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,gt[st].width,gt[st].height,0,It,dt,gt[st].data);for(let St=0;St<Q.length;St++){const Ht=Q[St].image[st].image;zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,Ht.width,Ht.height,It,dt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Ft,Ht.width,Ht.height,0,It,dt,Ht.data)}}else{zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,It,dt,gt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,It,dt,gt[st]);for(let St=0;St<Q.length;St++){const xt=Q[St];zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,It,dt,xt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Ft,It,dt,xt.image[st])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),X.__version=Y.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function Tt(v,g,C,V,Y,X){const ft=r.convert(C.format,C.colorSpace),at=r.convert(C.type),ct=A(C.internalFormat,ft,at,C.colorSpace),Lt=i.get(g),ot=i.get(C);if(ot.__renderTarget=g,!Lt.__hasExternalTextures){const gt=Math.max(1,g.width>>X),Ct=Math.max(1,g.height>>X);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?e.texImage3D(Y,X,ct,gt,Ct,g.depth,0,ft,at,null):e.texImage2D(Y,X,ct,gt,Ct,0,ft,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,v),K(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Y,ot.__webglTexture,0,j(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Y,ot.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(v,g,C){if(n.bindRenderbuffer(n.RENDERBUFFER,v),g.depthBuffer){const V=g.depthTexture,Y=V&&V.isDepthTexture?V.type:null,X=S(g.stencilBuffer,Y),ft=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=j(g);K(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,X,g.width,g.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,v)}else{const V=g.textures;for(let Y=0;Y<V.length;Y++){const X=V[Y],ft=r.convert(X.format,X.colorSpace),at=r.convert(X.type),ct=A(X.internalFormat,ft,at,X.colorSpace),Lt=j(g);C&&K(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,ct,g.width,g.height):K(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,ct,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ct,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(v,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,v),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),et(g.depthTexture,0);const Y=V.__webglTexture,X=j(g);if(g.depthTexture.format===Ms)K(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(g.depthTexture.format===ws)K(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Nt(v){const g=i.get(v),C=v.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==v.depthTexture){const V=v.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=V}if(v.depthTexture&&!g.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Pt(g.__webglFramebuffer,v)}else if(C){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=n.createRenderbuffer(),pt(g.__webglDepthbuffer[V],v,!1);else{const Y=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,X)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),pt(g.__webglDepthbuffer,v,!1);else{const V=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,Y)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(v,g,C){const V=i.get(v);g!==void 0&&Tt(V.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Nt(v)}function ue(v){const g=v.texture,C=i.get(v),V=i.get(g);v.addEventListener("dispose",P);const Y=v.textures,X=v.isWebGLCubeRenderTarget===!0,ft=Y.length>1;if(ft||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,a.memory.textures++),X){C.__webglFramebuffer=[];for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[at]=[];for(let ct=0;ct<g.mipmaps.length;ct++)C.__webglFramebuffer[at][ct]=n.createFramebuffer()}else C.__webglFramebuffer[at]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let at=0;at<g.mipmaps.length;at++)C.__webglFramebuffer[at]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ft)for(let at=0,ct=Y.length;at<ct;at++){const Lt=i.get(Y[at]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&K(v)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let at=0;at<Y.length;at++){const ct=Y[at];C.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[at]);const Lt=r.convert(ct.format,ct.colorSpace),ot=r.convert(ct.type),gt=A(ct.internalFormat,Lt,ot,ct.colorSpace,v.isXRRenderTarget===!0),Ct=j(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,gt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,C.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(C.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,g);for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)Tt(C.__webglFramebuffer[at][ct],v,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else Tt(C.__webglFramebuffer[at],v,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(g)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let at=0,ct=Y.length;at<ct;at++){const Lt=Y[at],ot=i.get(Lt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),Dt(n.TEXTURE_2D,Lt),Tt(C.__webglFramebuffer,v,Lt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(Lt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(at=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,V.__webglTexture),Dt(at,g),g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)Tt(C.__webglFramebuffer[ct],v,g,n.COLOR_ATTACHMENT0,at,ct);else Tt(C.__webglFramebuffer,v,g,n.COLOR_ATTACHMENT0,at,0);m(g)&&h(at),e.unbindTexture()}v.depthBuffer&&Nt(v)}function w(v){const g=v.textures;for(let C=0,V=g.length;C<V;C++){const Y=g[C];if(m(Y)){const X=b(v),ft=i.get(Y).__webglTexture;e.bindTexture(X,ft),h(X),e.unbindTexture()}}}const D=[],T=[];function it(v){if(v.samples>0){if(K(v)===!1){const g=v.textures,C=v.width,V=v.height;let Y=n.COLOR_BUFFER_BIT;const X=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(v),at=g.length>1;if(at)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);const Lt=i.get(g[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,C,V,0,0,C,V,Y,n.NEAREST),l===!0&&(D.length=0,T.length=0,D.push(n.COLOR_ATTACHMENT0+ct),v.depthBuffer&&v.resolveDepthBuffer===!1&&(D.push(X),T.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);const Lt=i.get(g[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const g=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function j(v){return Math.min(s.maxSamples,v.samples)}function K(v){const g=i.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function tt(v){const g=a.render.frame;c.get(v)!==g&&(c.set(v,g),v.update())}function rt(v,g){const C=v.colorSpace,V=v.format,Y=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||C!==Cs&&C!==gi&&(Yt.getTransfer(C)===se?(V!==mn||Y!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),g}function Z(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(u.width=v.naturalWidth||v.width,u.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(u.width=v.displayWidth,u.height=v.displayHeight):(u.width=v.width,u.height=v.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=et,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=Bt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=K}function OM(n,t){function e(i,s=gi){let r;const a=Yt.getTransfer(s);if(i===ni)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sh)return n.BYTE;if(i===yh)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===_r)return n.HALF_FLOAT;if(i===Th)return n.ALPHA;if(i===bh)return n.RGB;if(i===mn)return n.RGBA;if(i===Ah)return n.LUMINANCE;if(i===wh)return n.LUMINANCE_ALPHA;if(i===Ms)return n.DEPTH_COMPONENT;if(i===ws)return n.DEPTH_STENCIL;if(i===Rh)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===Ch)return n.RG;if(i===ec)return n.RG_INTEGER;if(i===nc)return n.RGBA_INTEGER;if(i===ea||i===na||i===ia||i===sa)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===ol||i===ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===al||i===ol)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ll)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Ml||i===Sl||i===yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ul)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ml)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_l)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ra||i===El||i===Tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ra)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ph||i===bl||i===Al||i===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class BM extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $r extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zM={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),h=this._getHandJoint(u,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $r;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
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

}`;class VM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Si({vertexShader:GM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kM extends Ps{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const x=new VM,m=e.getContextAttributes();let h=null,b=null;const A=[],S=[],F=new Xt;let L=null;const P=new en;P.viewport=new ge;const U=new en;U.viewport=new ge;const E=[P,U],M=new BM;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let lt=A[nt];return lt===void 0&&(lt=new Ro,A[nt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let lt=A[nt];return lt===void 0&&(lt=new Ro,A[nt]=lt),lt.getGripSpace()},this.getHand=function(nt){let lt=A[nt];return lt===void 0&&(lt=new Ro,A[nt]=lt),lt.getHandSpace()};function z(nt){const lt=S.indexOf(nt.inputSource);if(lt===-1)return;const Tt=A[lt];Tt!==void 0&&(Tt.update(nt.inputSource,nt.frame,u||a),Tt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function J(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",et);for(let nt=0;nt<A.length;nt++){const lt=S[nt];lt!==null&&(S[nt]=null,A[nt].disconnect(lt))}R=null,I=null,x.reset(),t.setRenderTarget(h),p=null,d=null,f=null,s=null,b=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(nt){u=nt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Xi(p.framebufferWidth,p.framebufferHeight,{format:mn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,Tt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?ws:Ms,Tt=m.stencil?As:Wi);const Pt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Xi(d.textureWidth,d.textureHeight,{format:mn,type:ni,depthTexture:new Wh(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function et(nt){for(let lt=0;lt<nt.removed.length;lt++){const Tt=nt.removed[lt],pt=S.indexOf(Tt);pt>=0&&(S[pt]=null,A[pt].disconnect(Tt))}for(let lt=0;lt<nt.added.length;lt++){const Tt=nt.added[lt];let pt=S.indexOf(Tt);if(pt===-1){for(let Nt=0;Nt<A.length;Nt++)if(Nt>=S.length){S.push(Tt),pt=Nt;break}else if(S[Nt]===null){S[Nt]=Tt,pt=Nt;break}if(pt===-1)break}const Pt=A[pt];Pt&&Pt.connect(Tt)}}const G=new H,W=new H;function k(nt,lt,Tt){G.setFromMatrixPosition(lt.matrixWorld),W.setFromMatrixPosition(Tt.matrixWorld);const pt=G.distanceTo(W),Pt=lt.projectionMatrix.elements,Nt=Tt.projectionMatrix.elements,Bt=Pt[14]/(Pt[10]-1),ue=Pt[14]/(Pt[10]+1),w=(Pt[9]+1)/Pt[5],D=(Pt[9]-1)/Pt[5],T=(Pt[8]-1)/Pt[0],it=(Nt[8]+1)/Nt[0],j=Bt*T,K=Bt*it,tt=pt/(-T+it),rt=tt*-T;if(lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(rt),nt.translateZ(tt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Pt[10]===-1)nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Z=Bt+tt,v=ue+tt,g=j-rt,C=K+(pt-rt),V=w*ue/v*Z,Y=D*ue/v*Z;nt.projectionMatrix.makePerspective(g,C,V,Y,Z,v),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ht(nt,lt){lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let lt=nt.near,Tt=nt.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),M.near=U.near=P.near=lt,M.far=U.far=P.far=Tt,(R!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,I=M.far),P.layers.mask=nt.layers.mask|2,U.layers.mask=nt.layers.mask|4,M.layers.mask=P.layers.mask|U.layers.mask;const pt=nt.parent,Pt=M.cameras;ht(M,pt);for(let Nt=0;Nt<Pt.length;Nt++)ht(Pt[Nt],pt);Pt.length===2?k(M,P,U):M.projectionMatrix.copy(P.projectionMatrix),vt(nt,M,pt)};function vt(nt,lt,Tt){Tt===null?nt.matrix.copy(lt.matrixWorld):(nt.matrix.copy(Tt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=hr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let yt=null;function Dt(nt,lt){if(c=lt.getViewerPose(u||a),_=lt,c!==null){const Tt=c.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let pt=!1;Tt.length!==M.cameras.length&&(M.cameras.length=0,pt=!0);for(let Nt=0;Nt<Tt.length;Nt++){const Bt=Tt[Nt];let ue=null;if(p!==null)ue=p.getViewport(Bt);else{const D=f.getViewSubImage(d,Bt);ue=D.viewport,Nt===0&&(t.setRenderTargetTextures(b,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(b))}let w=E[Nt];w===void 0&&(w=new en,w.layers.enable(Nt),w.viewport=new ge,E[Nt]=w),w.matrix.fromArray(Bt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Bt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(ue.x,ue.y,ue.width,ue.height),Nt===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pt===!0&&M.cameras.push(w)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Nt=f.getDepthInformation(Tt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let Tt=0;Tt<A.length;Tt++){const pt=S[Tt],Pt=A[Tt];pt!==null&&Pt!==void 0&&Pt.update(pt,lt,u||a)}yt&&yt(nt,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),_=null}const jt=new kh;jt.setAnimationLoop(Dt),this.setAnimationLoop=function(nt){yt=nt},this.dispose=function(){}}}const Ii=new Dn,WM=new me;function XM(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,zh(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,b,A,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),c(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,b,A):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ke&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ke&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=t.get(h),A=b.envMap,S=b.envMapRotation;A&&(m.envMap.value=A,Ii.copy(S),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(WM.makeRotationFromEuler(Ii)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,b,A){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=A*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ke&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const b=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YM(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const S=A.program;i.uniformBlockBinding(b,S)}function u(b,A){let S=s[b.id];S===void 0&&(_(b),S=c(b),s[b.id]=S,b.addEventListener("dispose",m));const F=A.program;i.updateUBOMapping(b,F);const L=t.render.frame;r[b.id]!==L&&(d(b),r[b.id]=L)}function c(b){const A=f();b.__bindingPointIndex=A;const S=n.createBuffer(),F=b.__size,L=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,F,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,S),S}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const A=s[b.id],S=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let L=0,P=S.length;L<P;L++){const U=Array.isArray(S[L])?S[L]:[S[L]];for(let E=0,M=U.length;E<M;E++){const R=U[E];if(p(R,L,E,F)===!0){const I=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let J=0;for(let et=0;et<z.length;et++){const G=z[et],W=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,I+J,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,J),J+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,A,S,F){const L=b.value,P=A+"_"+S;if(F[P]===void 0)return typeof L=="number"||typeof L=="boolean"?F[P]=L:F[P]=L.clone(),!0;{const U=F[P];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return F[P]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function _(b){const A=b.uniforms;let S=0;const F=16;for(let P=0,U=A.length;P<U;P++){const E=Array.isArray(A[P])?A[P]:[A[P]];for(let M=0,R=E.length;M<R;M++){const I=E[M],z=Array.isArray(I.value)?I.value:[I.value];for(let J=0,et=z.length;J<et;J++){const G=z[J],W=x(G),k=S%F,ht=k%W.boundary,vt=k+ht;S+=ht,vt!==0&&F-vt<W.storage&&(S+=F-vt),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=W.storage}}}const L=S%F;return L>0&&(S+=F-L),b.__size=S,b.__cache={},this}function x(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){const A=b.target;A.removeEventListener("dispose",m);const S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:u,dispose:h}}class qM{constructor(t={}){const{canvas:e=Ug(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const b=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=vi,this.toneMappingExposure=1;const S=this;let F=!1,L=0,P=0,U=null,E=-1,M=null;const R=new ge,I=new ge;let z=null;const J=new qt(0);let et=0,G=e.width,W=e.height,k=1,ht=null,vt=null;const yt=new ge(0,0,G,W),Dt=new ge(0,0,G,W);let jt=!1;const nt=new Vh;let lt=!1,Tt=!1;const pt=new me,Pt=new me,Nt=new H,Bt=new ge,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function D(){return U===null?k:1}let T=i;function it(y,O){return e.getContext(y,O)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",xt,!1),T===null){const O="webgl2";if(T=it(O,y),T===null)throw it(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let j,K,tt,rt,Z,v,g,C,V,Y,X,ft,at,ct,Lt,ot,gt,Ct,It,dt,Ft,zt,ee,N;function _t(){j=new J0(T),j.init(),zt=new OM(T,j),K=new X0(T,j,t,zt),tt=new UM(T,j),K.reverseDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),rt=new ex(T),Z=new xM,v=new FM(T,j,tt,Z,K,zt,rt),g=new q0(S),C=new Z0(S),V=new o_(T),ee=new k0(T,V),Y=new Q0(T,V,rt,ee),X=new ix(T,Y,V,rt),It=new nx(T,K,v),ot=new Y0(Z),ft=new vM(S,g,C,j,K,ee,ot),at=new XM(S,Z),ct=new SM,Lt=new wM(j),Ct=new V0(S,g,C,tt,X,p,l),gt=new DM(S,X,K),N=new YM(T,rt,K,tt),dt=new W0(T,j,rt),Ft=new tx(T,j,rt),rt.programs=ft.programs,S.capabilities=K,S.extensions=j,S.properties=Z,S.renderLists=ct,S.shadowMap=gt,S.state=tt,S.info=rt}_t();const Q=new kM(S,T);this.xr=Q,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=j.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=j.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(G,W,!1))},this.getSize=function(y){return y.set(G,W)},this.setSize=function(y,O,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,W=O,e.width=Math.floor(y*k),e.height=Math.floor(O*k),q===!0&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(G*k,W*k).floor()},this.setDrawingBufferSize=function(y,O,q){G=y,W=O,k=q,e.width=Math.floor(y*q),e.height=Math.floor(O*q),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(yt)},this.setViewport=function(y,O,q,$){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,O,q,$),tt.viewport(R.copy(yt).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(Dt)},this.setScissor=function(y,O,q,$){y.isVector4?Dt.set(y.x,y.y,y.z,y.w):Dt.set(y,O,q,$),tt.scissor(I.copy(Dt).multiplyScalar(k).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(y){tt.setScissorTest(jt=y)},this.setOpaqueSort=function(y){ht=y},this.setTransparentSort=function(y){vt=y},this.getClearColor=function(y){return y.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(y=!0,O=!0,q=!0){let $=0;if(y){let B=!1;if(U!==null){const ut=U.texture.format;B=ut===nc||ut===ec||ut===tc}if(B){const ut=U.texture.type,Mt=ut===ni||ut===Wi||ut===fr||ut===As||ut===Jl||ut===Ql,bt=Ct.getClearColor(),At=Ct.getClearAlpha(),Ot=bt.r,Vt=bt.g,wt=bt.b;Mt?(_[0]=Ot,_[1]=Vt,_[2]=wt,_[3]=At,T.clearBufferuiv(T.COLOR,0,_)):(x[0]=Ot,x[1]=Vt,x[2]=wt,x[3]=At,T.clearBufferiv(T.COLOR,0,x))}else $|=T.COLOR_BUFFER_BIT}O&&($|=T.DEPTH_BUFFER_BIT),q&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ct.dispose(),Lt.dispose(),Z.dispose(),g.dispose(),C.dispose(),X.dispose(),ee.dispose(),N.dispose(),ft.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",uc),Q.removeEventListener("sessionend",fc),Ei.stop()};function st(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const y=rt.autoReset,O=gt.enabled,q=gt.autoUpdate,$=gt.needsUpdate,B=gt.type;_t(),rt.autoReset=y,gt.enabled=O,gt.autoUpdate=q,gt.needsUpdate=$,gt.type=B}function xt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ht(y){const O=y.target;O.removeEventListener("dispose",Ht),de(O)}function de(y){Te(y),Z.remove(y)}function Te(y){const O=Z.get(y).programs;O!==void 0&&(O.forEach(function(q){ft.releaseProgram(q)}),y.isShaderMaterial&&ft.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,q,$,B,ut){O===null&&(O=ue);const Mt=B.isMesh&&B.matrixWorld.determinant()<0,bt=Zh(y,O,q,$,B);tt.setMaterial($,Mt);let At=q.index,Ot=1;if($.wireframe===!0){if(At=Y.getWireframeAttribute(q),At===void 0)return;Ot=2}const Vt=q.drawRange,wt=q.attributes.position;let $t=Vt.start*Ot,ae=(Vt.start+Vt.count)*Ot;ut!==null&&($t=Math.max($t,ut.start*Ot),ae=Math.min(ae,(ut.start+ut.count)*Ot)),At!==null?($t=Math.max($t,0),ae=Math.min(ae,At.count)):wt!=null&&($t=Math.max($t,0),ae=Math.min(ae,wt.count));const le=ae-$t;if(le<0||le===1/0)return;ee.setup(B,$,bt,q,At);let Ge,Zt=dt;if(At!==null&&(Ge=V.get(At),Zt=Ft,Zt.setIndex(Ge)),B.isMesh)$.wireframe===!0?(tt.setLineWidth($.wireframeLinewidth*D()),Zt.setMode(T.LINES)):Zt.setMode(T.TRIANGLES);else if(B.isLine){let Rt=$.linewidth;Rt===void 0&&(Rt=1),tt.setLineWidth(Rt*D()),B.isLineSegments?Zt.setMode(T.LINES):B.isLineLoop?Zt.setMode(T.LINE_LOOP):Zt.setMode(T.LINE_STRIP)}else B.isPoints?Zt.setMode(T.POINTS):B.isSprite&&Zt.setMode(T.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Zt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Zt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Rt=B._multiDrawStarts,Nn=B._multiDrawCounts,Jt=B._multiDrawCount,ln=At?V.get(At).bytesPerElement:1,qi=Z.get($).currentProgram.getUniforms();for(let Xe=0;Xe<Jt;Xe++)qi.setValue(T,"_gl_DrawID",Xe),Zt.render(Rt[Xe]/ln,Nn[Xe])}else if(B.isInstancedMesh)Zt.renderInstances($t,le,B.count);else if(q.isInstancedBufferGeometry){const Rt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Nn=Math.min(q.instanceCount,Rt);Zt.renderInstances($t,le,Nn)}else Zt.render($t,le)};function ne(y,O,q){y.transparent===!0&&y.side===hn&&y.forceSinglePass===!1?(y.side=ke,y.needsUpdate=!0,Er(y,O,q),y.side=Mi,y.needsUpdate=!0,Er(y,O,q),y.side=hn):Er(y,O,q)}this.compile=function(y,O,q=null){q===null&&(q=y),h=Lt.get(q),h.init(O),A.push(h),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),y!==q&&y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const $=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ut=B.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){const bt=ut[Mt];ne(bt,q,B),$.add(bt)}else ne(ut,q,B),$.add(ut)}),A.pop(),h=null,$},this.compileAsync=function(y,O,q=null){const $=this.compile(y,O,q);return new Promise(B=>{function ut(){if($.forEach(function(Mt){Z.get(Mt).currentProgram.isReady()&&$.delete(Mt)}),$.size===0){B(y);return}setTimeout(ut,10)}j.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let on=null;function Un(y){on&&on(y)}function uc(){Ei.stop()}function fc(){Ei.start()}const Ei=new kh;Ei.setAnimationLoop(Un),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(y){on=y,Q.setAnimationLoop(y),y===null?Ei.stop():Ei.start()},Q.addEventListener("sessionstart",uc),Q.addEventListener("sessionend",fc),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,O,U),h=Lt.get(y,A.length),h.init(O),A.push(h),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),nt.setFromProjectionMatrix(Pt),Tt=this.localClippingEnabled,lt=ot.init(this.clippingPlanes,Tt),m=ct.get(y,b.length),m.init(),b.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ut=S.xr.getDepthSensingMesh();ut!==null&&Ga(ut,O,-1/0,S.sortObjects)}Ga(y,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ht,vt),w=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,w&&Ct.addToRenderList(m,y),this.info.render.frame++,lt===!0&&ot.beginShadows();const q=h.state.shadowsArray;gt.render(q,y,O),lt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,B=m.transmissive;if(h.setupLights(),O.isArrayCamera){const ut=O.cameras;if(B.length>0)for(let Mt=0,bt=ut.length;Mt<bt;Mt++){const At=ut[Mt];dc($,B,y,At)}w&&Ct.render(y);for(let Mt=0,bt=ut.length;Mt<bt;Mt++){const At=ut[Mt];hc(m,y,At,At.viewport)}}else B.length>0&&dc($,B,y,O),w&&Ct.render(y),hc(m,y,O);U!==null&&(v.updateMultisampleRenderTarget(U),v.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(S,y,O),ee.resetDefaultState(),E=-1,M=null,A.pop(),A.length>0?(h=A[A.length-1],lt===!0&&ot.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ga(y,O,q,$){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||nt.intersectsSprite(y)){$&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pt);const Mt=X.update(y),bt=y.material;bt.visible&&m.push(y,Mt,bt,q,Bt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||nt.intersectsObject(y))){const Mt=X.update(y),bt=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Bt.copy(Mt.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(Pt)),Array.isArray(bt)){const At=Mt.groups;for(let Ot=0,Vt=At.length;Ot<Vt;Ot++){const wt=At[Ot],$t=bt[wt.materialIndex];$t&&$t.visible&&m.push(y,Mt,$t,q,Bt.z,wt)}}else bt.visible&&m.push(y,Mt,bt,q,Bt.z,null)}}const ut=y.children;for(let Mt=0,bt=ut.length;Mt<bt;Mt++)Ga(ut[Mt],O,q,$)}function hc(y,O,q,$){const B=y.opaque,ut=y.transmissive,Mt=y.transparent;h.setupLightsView(q),lt===!0&&ot.setGlobalState(S.clippingPlanes,q),$&&tt.viewport(R.copy($)),B.length>0&&yr(B,O,q),ut.length>0&&yr(ut,O,q),Mt.length>0&&yr(Mt,O,q),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function dc(y,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[$.id]===void 0&&(h.state.transmissionRenderTarget[$.id]=new Xi(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?_r:ni,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const ut=h.state.transmissionRenderTarget[$.id],Mt=$.viewport||R;ut.setSize(Mt.z,Mt.w);const bt=S.getRenderTarget();S.setRenderTarget(ut),S.getClearColor(J),et=S.getClearAlpha(),et<1&&S.setClearColor(16777215,.5),S.clear(),w&&Ct.render(q);const At=S.toneMapping;S.toneMapping=vi;const Ot=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),h.setupLightsView($),lt===!0&&ot.setGlobalState(S.clippingPlanes,$),yr(y,q,$),v.updateMultisampleRenderTarget(ut),v.updateRenderTargetMipmap(ut),j.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let wt=0,$t=O.length;wt<$t;wt++){const ae=O[wt],le=ae.object,Ge=ae.geometry,Zt=ae.material,Rt=ae.group;if(Zt.side===hn&&le.layers.test($.layers)){const Nn=Zt.side;Zt.side=ke,Zt.needsUpdate=!0,pc(le,q,$,Ge,Zt,Rt),Zt.side=Nn,Zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(v.updateMultisampleRenderTarget(ut),v.updateRenderTargetMipmap(ut))}S.setRenderTarget(bt),S.setClearColor(J,et),Ot!==void 0&&($.viewport=Ot),S.toneMapping=At}function yr(y,O,q){const $=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ut=y.length;B<ut;B++){const Mt=y[B],bt=Mt.object,At=Mt.geometry,Ot=$===null?Mt.material:$,Vt=Mt.group;bt.layers.test(q.layers)&&pc(bt,O,q,At,Ot,Vt)}}function pc(y,O,q,$,B,ut){y.onBeforeRender(S,O,q,$,B,ut),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(S,O,q,$,y,ut),B.transparent===!0&&B.side===hn&&B.forceSinglePass===!1?(B.side=ke,B.needsUpdate=!0,S.renderBufferDirect(q,O,$,B,y,ut),B.side=Mi,B.needsUpdate=!0,S.renderBufferDirect(q,O,$,B,y,ut),B.side=hn):S.renderBufferDirect(q,O,$,B,y,ut),y.onAfterRender(S,O,q,$,B,ut)}function Er(y,O,q){O.isScene!==!0&&(O=ue);const $=Z.get(y),B=h.state.lights,ut=h.state.shadowsArray,Mt=B.state.version,bt=ft.getParameters(y,B.state,ut,O,q),At=ft.getProgramCacheKey(bt);let Ot=$.programs;$.environment=y.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(y.isMeshStandardMaterial?C:g).get(y.envMap||$.environment),$.envMapRotation=$.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ot===void 0&&(y.addEventListener("dispose",Ht),Ot=new Map,$.programs=Ot);let Vt=Ot.get(At);if(Vt!==void 0){if($.currentProgram===Vt&&$.lightsStateVersion===Mt)return gc(y,bt),Vt}else bt.uniforms=ft.getUniforms(y),y.onBeforeCompile(bt,S),Vt=ft.acquireProgram(bt,At),Ot.set(At,Vt),$.uniforms=bt.uniforms;const wt=$.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=ot.uniform),gc(y,bt),$.needsLights=Qh(y),$.lightsStateVersion=Mt,$.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=Vt,$.uniformsList=null,Vt}function mc(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=aa.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function gc(y,O){const q=Z.get(y);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Zh(y,O,q,$,B){O.isScene!==!0&&(O=ue),v.resetTextureUnits();const ut=O.fog,Mt=$.isMeshStandardMaterial?O.environment:null,bt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Cs,At=($.isMeshStandardMaterial?C:g).get($.envMap||Mt),Ot=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Vt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),wt=!!q.morphAttributes.position,$t=!!q.morphAttributes.normal,ae=!!q.morphAttributes.color;let le=vi;$.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(le=S.toneMapping);const Ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=Ge!==void 0?Ge.length:0,Rt=Z.get($),Nn=h.state.lights;if(lt===!0&&(Tt===!0||y!==M)){const Ze=y===M&&$.id===E;ot.setState($,y,Ze)}let Jt=!1;$.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Nn.state.version||Rt.outputColorSpace!==bt||B.isBatchedMesh&&Rt.batching===!1||!B.isBatchedMesh&&Rt.batching===!0||B.isBatchedMesh&&Rt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Rt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Rt.instancing===!1||!B.isInstancedMesh&&Rt.instancing===!0||B.isSkinnedMesh&&Rt.skinning===!1||!B.isSkinnedMesh&&Rt.skinning===!0||B.isInstancedMesh&&Rt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Rt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Rt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Rt.instancingMorph===!1&&B.morphTexture!==null||Rt.envMap!==At||$.fog===!0&&Rt.fog!==ut||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ot.numPlanes||Rt.numIntersection!==ot.numIntersection)||Rt.vertexAlphas!==Ot||Rt.vertexTangents!==Vt||Rt.morphTargets!==wt||Rt.morphNormals!==$t||Rt.morphColors!==ae||Rt.toneMapping!==le||Rt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Rt.__version=$.version);let ln=Rt.currentProgram;Jt===!0&&(ln=Er($,O,B));let qi=!1,Xe=!1,Ds=!1;const ce=ln.getUniforms(),yn=Rt.uniforms;if(tt.useProgram(ln.program)&&(qi=!0,Xe=!0,Ds=!0),$.id!==E&&(E=$.id,Xe=!0),qi||M!==y){tt.buffers.depth.getReversed()?(pt.copy(y.projectionMatrix),Fg(pt),Og(pt),ce.setValue(T,"projectionMatrix",pt)):ce.setValue(T,"projectionMatrix",y.projectionMatrix),ce.setValue(T,"viewMatrix",y.matrixWorldInverse);const si=ce.map.cameraPosition;si!==void 0&&si.setValue(T,Nt.setFromMatrixPosition(y.matrixWorld)),K.logarithmicDepthBuffer&&ce.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ce.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Xe=!0,Ds=!0)}if(B.isSkinnedMesh){ce.setOptional(T,B,"bindMatrix"),ce.setOptional(T,B,"bindMatrixInverse");const Ze=B.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ce.setValue(T,"boneTexture",Ze.boneTexture,v))}B.isBatchedMesh&&(ce.setOptional(T,B,"batchingTexture"),ce.setValue(T,"batchingTexture",B._matricesTexture,v),ce.setOptional(T,B,"batchingIdTexture"),ce.setValue(T,"batchingIdTexture",B._indirectTexture,v),ce.setOptional(T,B,"batchingColorTexture"),B._colorsTexture!==null&&ce.setValue(T,"batchingColorTexture",B._colorsTexture,v));const Is=q.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&It.update(B,q,ln),(Xe||Rt.receiveShadow!==B.receiveShadow)&&(Rt.receiveShadow=B.receiveShadow,ce.setValue(T,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(yn.envMap.value=At,yn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(yn.envMapIntensity.value=O.environmentIntensity),Xe&&(ce.setValue(T,"toneMappingExposure",S.toneMappingExposure),Rt.needsLights&&Jh(yn,Ds),ut&&$.fog===!0&&at.refreshFogUniforms(yn,ut),at.refreshMaterialUniforms(yn,$,k,W,h.state.transmissionRenderTarget[y.id]),aa.upload(T,mc(Rt),yn,v)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(aa.upload(T,mc(Rt),yn,v),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ce.setValue(T,"center",B.center),ce.setValue(T,"modelViewMatrix",B.modelViewMatrix),ce.setValue(T,"normalMatrix",B.normalMatrix),ce.setValue(T,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ze=$.uniformsGroups;for(let si=0,ri=Ze.length;si<ri;si++){const _c=Ze[si];N.update(_c,ln),N.bind(_c,ln)}}return ln}function Jh(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Qh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,O,q){Z.get(y.texture).__webglTexture=O,Z.get(y.depthTexture).__webglTexture=q;const $=Z.get(y);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const q=Z.get(y);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,q=0){U=y,L=O,P=q;let $=!0,B=null,ut=!1,Mt=!1;if(y){const At=Z.get(y);if(At.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(T.FRAMEBUFFER,null),$=!1;else if(At.__webglFramebuffer===void 0)v.setupRenderTarget(y);else if(At.__hasExternalTextures)v.rebindTextures(y,Z.get(y.texture).__webglTexture,Z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const wt=y.depthTexture;if(At.__boundDepthTexture!==wt){if(wt!==null&&Z.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(y)}}const Ot=y.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Mt=!0);const Vt=Z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?B=Vt[O][q]:B=Vt[O],ut=!0):y.samples>0&&v.useMultisampledRTT(y)===!1?B=Z.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?B=Vt[q]:B=Vt,R.copy(y.viewport),I.copy(y.scissor),z=y.scissorTest}else R.copy(yt).multiplyScalar(k).floor(),I.copy(Dt).multiplyScalar(k).floor(),z=jt;if(tt.bindFramebuffer(T.FRAMEBUFFER,B)&&$&&tt.drawBuffers(y,B),tt.viewport(R),tt.scissor(I),tt.setScissorTest(z),ut){const At=Z.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+O,At.__webglTexture,q)}else if(Mt){const At=Z.get(y.texture),Ot=O||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.__webglTexture,q||0,Ot)}E=-1},this.readRenderTargetPixels=function(y,O,q,$,B,ut,Mt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){tt.bindFramebuffer(T.FRAMEBUFFER,bt);try{const At=y.texture,Ot=At.format,Vt=At.type;if(!K.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-$&&q>=0&&q<=y.height-B&&T.readPixels(O,q,$,B,zt.convert(Ot),zt.convert(Vt),ut)}finally{const At=U!==null?Z.get(U).__webglFramebuffer:null;tt.bindFramebuffer(T.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,O,q,$,B,ut,Mt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){const At=y.texture,Ot=At.format,Vt=At.type;if(!K.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-$&&q>=0&&q<=y.height-B){tt.bindFramebuffer(T.FRAMEBUFFER,bt);const wt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,wt),T.bufferData(T.PIXEL_PACK_BUFFER,ut.byteLength,T.STREAM_READ),T.readPixels(O,q,$,B,zt.convert(Ot),zt.convert(Vt),0);const $t=U!==null?Z.get(U).__webglFramebuffer:null;tt.bindFramebuffer(T.FRAMEBUFFER,$t);const ae=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Ng(T,ae,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,wt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ut),T.deleteBuffer(wt),T.deleteSync(ae),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,q=0){y.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const $=Math.pow(2,-q),B=Math.floor(y.image.width*$),ut=Math.floor(y.image.height*$),Mt=O!==null?O.x:0,bt=O!==null?O.y:0;v.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,q,0,0,Mt,bt,B,ut),tt.unbindTexture()},this.copyTextureToTexture=function(y,O,q=null,$=null,B=0){y.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,y=arguments[1],O=arguments[2],B=arguments[3]||0,q=null);let ut,Mt,bt,At,Ot,Vt,wt,$t,ae;const le=y.isCompressedTexture?y.mipmaps[B]:y.image;q!==null?(ut=q.max.x-q.min.x,Mt=q.max.y-q.min.y,bt=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,Ot=q.min.y,Vt=q.isBox3?q.min.z:0):(ut=le.width,Mt=le.height,bt=le.depth||1,At=0,Ot=0,Vt=0),$!==null?(wt=$.x,$t=$.y,ae=$.z):(wt=0,$t=0,ae=0);const Ge=zt.convert(O.format),Zt=zt.convert(O.type);let Rt;O.isData3DTexture?(v.setTexture3D(O,0),Rt=T.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(v.setTexture2DArray(O,0),Rt=T.TEXTURE_2D_ARRAY):(v.setTexture2D(O,0),Rt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);const Nn=T.getParameter(T.UNPACK_ROW_LENGTH),Jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ln=T.getParameter(T.UNPACK_SKIP_PIXELS),qi=T.getParameter(T.UNPACK_SKIP_ROWS),Xe=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,le.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,le.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,At),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ot),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Vt);const Ds=y.isDataArrayTexture||y.isData3DTexture,ce=O.isDataArrayTexture||O.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const yn=Z.get(y),Is=Z.get(O),Ze=Z.get(yn.__renderTarget),si=Z.get(Is.__renderTarget);tt.bindFramebuffer(T.READ_FRAMEBUFFER,Ze.__webglFramebuffer),tt.bindFramebuffer(T.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<bt;ri++)Ds&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Z.get(y).__webglTexture,B,Vt+ri),y.isDepthTexture?(ce&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Z.get(O).__webglTexture,B,ae+ri),T.blitFramebuffer(At,Ot,ut,Mt,wt,$t,ut,Mt,T.DEPTH_BUFFER_BIT,T.NEAREST)):ce?T.copyTexSubImage3D(Rt,B,wt,$t,ae+ri,At,Ot,ut,Mt):T.copyTexSubImage2D(Rt,B,wt,$t,ae+ri,At,Ot,ut,Mt);tt.bindFramebuffer(T.READ_FRAMEBUFFER,null),tt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ce?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Rt,B,wt,$t,ae,ut,Mt,bt,Ge,Zt,le.data):O.isCompressedArrayTexture?T.compressedTexSubImage3D(Rt,B,wt,$t,ae,ut,Mt,bt,Ge,le.data):T.texSubImage3D(Rt,B,wt,$t,ae,ut,Mt,bt,Ge,Zt,le):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,B,wt,$t,ut,Mt,Ge,Zt,le.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,B,wt,$t,le.width,le.height,Ge,le.data):T.texSubImage2D(T.TEXTURE_2D,B,wt,$t,ut,Mt,Ge,Zt,le);T.pixelStorei(T.UNPACK_ROW_LENGTH,Nn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ln),T.pixelStorei(T.UNPACK_SKIP_ROWS,qi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xe),B===0&&O.generateMipmaps&&T.generateMipmap(Rt),tt.unbindTexture()},this.copyTextureToTexture3D=function(y,O,q=null,$=null,B=0){return y.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,y=arguments[2],O=arguments[3],B=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,q,$,B)},this.initRenderTarget=function(y){Z.get(y).__webglFramebuffer===void 0&&v.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?v.setTextureCube(y,0):y.isData3DTexture?v.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?v.setTexture2DArray(y,0):v.setTexture2D(y,0),tt.unbindTexture()},this.resetState=function(){L=0,P=0,U=null,tt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class oc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new oc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $M extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class KM{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rl,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new H;class xa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kh extends Mr{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let cs;const Vs=new H,us=new H,fs=new H,hs=new Xt,ks=new Xt,jh=new me,Kr=new H,Ws=new H,jr=new H,Ju=new Xt,Co=new Xt,Qu=new Xt;class jM extends We{constructor(t=new Kh){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Sn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new KM(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new xa(i,3,0,!1)),cs.setAttribute("uv",new xa(i,2,3,!1))}this.geometry=cs,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),jh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-fs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Zr(Kr.set(-.5,-.5,0),fs,a,us,s,r),Zr(Ws.set(.5,-.5,0),fs,a,us,s,r),Zr(jr.set(.5,.5,0),fs,a,us,s,r),Ju.set(0,0),Co.set(1,0),Qu.set(1,1);let o=t.ray.intersectTriangle(Kr,Ws,jr,!1,Vs);if(o===null&&(Zr(Ws.set(-.5,.5,0),fs,a,us,s,r),Co.set(0,1),o=t.ray.intersectTriangle(Kr,jr,Ws,!1,Vs),o===null))return;const l=t.ray.origin.distanceTo(Vs);l<t.near||l>t.far||e.push({distance:l,point:Vs.clone(),uv:nn.getInterpolation(Vs,Kr,Ws,jr,Ju,Co,Qu,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zr(n,t,e,i,s,r){hs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ks.x=r*hs.x-s*hs.y,ks.y=s*hs.x+r*hs.y):ks.copy(hs),n.copy(t),n.x+=ks.x,n.y+=ks.y,n.applyMatrix4(jh)}class Ma extends Sn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],u=new H,c=new Xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const p=i+f/e*s;u.x=t*Math.cos(p),u.y=t*Math.sin(p),a.push(u.x,u.y,u.z),o.push(0,0,1),c.x=(a[d]/t+1)/2,c.y=(a[d+1]/t+1)/2,l.push(c.x,c.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class za extends Sn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],f=[],d=[],p=[];let _=0;const x=[],m=i/2;let h=0;b(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(c),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(p,2));function b(){const S=new H,F=new H;let L=0;const P=(e-t)/i;for(let U=0;U<=r;U++){const E=[],M=U/r,R=M*(e-t)+t;for(let I=0;I<=s;I++){const z=I/s,J=z*l+o,et=Math.sin(J),G=Math.cos(J);F.x=R*et,F.y=-M*i+m,F.z=R*G,f.push(F.x,F.y,F.z),S.set(et,P,G).normalize(),d.push(S.x,S.y,S.z),p.push(z,1-M),E.push(_++)}x.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){const M=x[E][U],R=x[E+1][U],I=x[E+1][U+1],z=x[E][U+1];(t>0||E!==0)&&(c.push(M,R,z),L+=3),(e>0||E!==r-1)&&(c.push(R,I,z),L+=3)}u.addGroup(h,L,0),h+=L}function A(S){const F=_,L=new Xt,P=new H;let U=0;const E=S===!0?t:e,M=S===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),_++;const R=_;for(let I=0;I<=s;I++){const J=I/s*l+o,et=Math.cos(J),G=Math.sin(J);P.x=E*G,P.y=m*M,P.z=E*et,f.push(P.x,P.y,P.z),d.push(0,M,0),L.x=et*.5+.5,L.y=G*.5*M+.5,p.push(L.x,L.y),_++}for(let I=0;I<s;I++){const z=F+I,J=R+I;S===!0?c.push(J,J+1,z):c.push(J+1,J,z),U+=3}u.addGroup(h,U,S===!0?1:2),h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lc extends za{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new lc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sa extends Sn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],f=new H,d=new H,p=[],_=[],x=[],m=[];for(let h=0;h<=i;h++){const b=[],A=h/i;let S=0;h===0&&a===0?S=.5/e:h===i&&l===Math.PI&&(S=-.5/e);for(let F=0;F<=e;F++){const L=F/e;f.x=-t*Math.cos(s+L*r)*Math.sin(a+A*o),f.y=t*Math.cos(a+A*o),f.z=t*Math.sin(s+L*r)*Math.sin(a+A*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(L+S,1-A),b.push(u++)}c.push(b)}for(let h=0;h<i;h++)for(let b=0;b<e;b++){const A=c[h][b+1],S=c[h][b],F=c[h+1][b],L=c[h+1][b+1];(h!==0||a>0)&&p.push(A,S,L),(h!==i-1||l<Math.PI)&&p.push(S,F,L)}this.setIndex(p),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const tf=new me;class ZM{constructor(t,e,i=0,s=1/0){this.ray=new Nh(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tf),this}intersectObject(t,e=!0,i=[]){return Pl(t,this,i,e),i.sort(ef),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Pl(t[s],this,i,e);return i.sort(ef),i}}function ef(n,t){return n.distance-t.distance}function Pl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Pl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);const In=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},JM={class:"home-screen"},QM={class:"bg-particles"},tS={class:"home-content"},eS={class:"menu-buttons"},nS={key:0,class:"record-badge"},iS={class:"record-value"},sS={__name:"StartScreen",props:{bestScore:{type:Number,default:0}},emits:["start","tutorial","settings"],setup(n){function t(e){return{left:`${10+e*37%80}%`,animationDelay:`${e*.7%5}s`,animationDuration:`${6+e*1.3%8}s`,width:`${2+e%3}px`,height:`${2+e%3}px`}}return(e,i)=>(fe(),ve("div",JM,[i[11]||(i[11]=Et("div",{class:"bg-ambient"},null,-1)),i[12]||(i[12]=Et("div",{class:"bg-fog"},null,-1)),Et("div",QM,[(fe(),ve(Ke,null,Wl(12,s=>Et("span",{key:s,class:"float-particle",style:Aa(t(s))},null,4)),64))]),Et("div",tS,[i[8]||(i[8]=fh('<div class="deco-line top" data-v-8626ad4f></div><div class="title-block" data-v-8626ad4f><h1 class="title-main" data-v-8626ad4f>射 杀 奶 龙</h1><p class="title-sub" data-v-8626ad4f>— 暗 黑 森 林 · 听 声 辨 位 —</p></div><div class="section-divider" data-v-8626ad4f><span class="divider-dot" data-v-8626ad4f></span><span class="divider-line" data-v-8626ad4f></span><span class="divider-diamond" data-v-8626ad4f>◆</span><span class="divider-line" data-v-8626ad4f></span><span class="divider-dot" data-v-8626ad4f></span></div>',3)),Et("div",eS,[Et("button",{class:"menu-btn primary",onClick:i[0]||(i[0]=s=>e.$emit("tutorial"))},[...i[3]||(i[3]=[Et("span",{class:"menu-btn-icon"},"📖",-1),Et("span",{class:"menu-btn-text"},"新手教程",-1),Et("span",{class:"menu-btn-hint"},"了解游戏玩法",-1)])]),Et("button",{class:"menu-btn danger",onClick:i[1]||(i[1]=s=>e.$emit("start"))},[...i[4]||(i[4]=[Et("span",{class:"menu-btn-icon"},"🌲",-1),Et("span",{class:"menu-btn-text"},"进入森林",-1),Et("span",{class:"menu-btn-hint"},"开始游戏",-1)])]),Et("button",{class:"menu-btn ghost",onClick:i[2]||(i[2]=s=>e.$emit("settings"))},[...i[5]||(i[5]=[Et("span",{class:"menu-btn-icon"},"⚙️",-1),Et("span",{class:"menu-btn-text"},"设置",-1),Et("span",{class:"menu-btn-hint"},"音量调节",-1)])])]),n.bestScore>0?(fe(),ve("div",nS,[i[6]||(i[6]=Et("span",{class:"record-star"},"★",-1)),i[7]||(i[7]=Et("span",{class:"record-label"},"最佳记录",-1)),Et("span",iS,Re(n.bestScore),1)])):pn("",!0),i[9]||(i[9]=Et("div",{class:"deco-line bottom"},null,-1)),i[10]||(i[10]=Et("p",{class:"footer-hint"},"🎧 佩戴耳机 · 手机陀螺仪 · 空格键发射",-1))])]))}},rS=In(sS,[["__scopeId","data-v-8626ad4f"]]),aS={},oS={class:"crosshair"};function lS(n,t){return fe(),ve("div",oS,[...t[0]||(t[0]=[fh('<div class="crosshair-top" data-v-f3b4ed19></div><div class="crosshair-bottom" data-v-f3b4ed19></div><div class="crosshair-left" data-v-f3b4ed19></div><div class="crosshair-right" data-v-f3b4ed19></div><div class="crosshair-dot" data-v-f3b4ed19></div><div class="crosshair-ring" data-v-f3b4ed19></div>',6)])])}const cS=In(aS,[["render",lS],["__scopeId","data-v-f3b4ed19"]]),uS={class:"flash-container"},fS={class:"flash-label"},hS=600,dS={__name:"FireButton",emits:["fire"],setup(n,{emit:t}){const e=t,i=Xn(!1);function s(){i.value||(e("fire"),i.value=!0,setTimeout(()=>{i.value=!1},hS))}return(r,a)=>(fe(),ve("div",uS,[Et("button",{class:yi(["flash-btn",{cooldown:i.value}]),onPointerdown:Vo(s,["stop","prevent"]),onTouchstart:Vo(s,["stop","prevent"])},[a[0]||(a[0]=Et("span",{class:"flash-icon"},"🔦",-1)),Et("span",fS,Re(i.value?"...":"手电"),1)],34)]))}},pS=In(dS,[["__scopeId","data-v-71a5b0fb"]]),mS={class:"scoreboard"},gS={class:"score-box hud-panel"},_S={class:"score-value"},vS={class:"time-value"},xS={class:"kills-box"},MS={class:"kills-value"},SS={__name:"ScoreBoard",props:{score:{type:Number,default:0},timeRemaining:{type:Number,default:60},kills:{type:Number,default:0}},setup(n){const t=n,e=Kl(()=>{const i=Math.floor(t.timeRemaining/60),s=t.timeRemaining%60;return`${i}:${String(s).padStart(2,"0")}`});return(i,s)=>(fe(),ve("div",mS,[Et("div",gS,[s[0]||(s[0]=Et("span",{class:"score-label"},"得分",-1)),Et("span",_S,Re(n.score),1)]),Et("div",{class:yi(["time-box hud-panel",{urgent:n.timeRemaining<=10}])},[s[1]||(s[1]=Et("span",{class:"time-label"},"剩余",-1)),Et("span",vS,Re(e.value),1)],2),Et("div",xS,[s[2]||(s[2]=Et("span",{class:"kills-icon"},"💀",-1)),Et("span",MS,Re(n.kills),1)])]))}},yS=In(SS,[["__scopeId","data-v-ec0ea2dc"]]),cc="/assets/%E5%A5%B6%E9%BE%99%E5%A4%A7%E7%AC%91-B401vx2T.gif",ES={key:0,class:"gameover-overlay"},TS={class:"gameover-panel"},bS=["src"],AS={class:"gameover-sub"},wS={class:"final-stats"},RS={class:"stat-row main-stat"},CS={class:"stat-value"},PS={class:"gameover-actions"},LS={__name:"GameOverModal",props:{gameState:{type:Object,required:!0},visible:{type:Boolean,default:!0}},emits:["restart","backToMenu"],setup(n){return(t,e)=>n.visible?(fe(),ve("div",ES,[Et("div",TS,[n.gameState.won?pn("",!0):(fe(),ve("img",{key:0,src:wf(cc),class:"laugh-gif",alt:""},null,8,bS)),Et("h2",{class:yi(["gameover-title",n.gameState.won?"win":"lose"])},Re(n.gameState.won?"✨ 你赢了！":"💀 你输了"),3),Et("p",AS,Re(n.gameState.won?"成功在黑暗中存活了60秒":"奶龙找到了你..."),1),e[3]||(e[3]=Et("div",{class:"hud-divider"},null,-1)),Et("div",wS,[Et("div",RS,[e[2]||(e[2]=Et("span",{class:"stat-label"},"照中次数",-1)),Et("span",CS,Re(n.gameState.score/100),1)])]),e[4]||(e[4]=Et("div",{class:"hud-divider"},null,-1)),Et("div",PS,[Et("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=i=>t.$emit("restart"))},"再来一次"),Et("button",{class:"btn btn-secondary",onClick:e[1]||(e[1]=i=>t.$emit("backToMenu"))},"返回主页")])])])):pn("",!0)}},DS=In(LS,[["__scopeId","data-v-56160923"]]),IS="/assets/%E5%A5%B6%E9%BE%99%E5%93%AD%E6%B3%A3-ChJ2TT0N.gif",US=["src"],NS={__name:"NailongGif",props:{type:{type:String,default:"none"},visible:{type:Boolean,default:!1}},setup(n){const t=n,e=Kl(()=>t.type==="kill"?IS:cc);return(i,s)=>(fe(),ql(nm,{name:"gif-pop"},{default:Uf(()=>[n.visible?(fe(),ve("div",{key:0,class:yi(["nailong-gif",n.type])},[Et("img",{src:e.value,alt:""},null,8,US)],2)):pn("",!0)]),_:1}))}},FS=In(NS,[["__scopeId","data-v-98b863b4"]]),OS={class:"game-view"},BS={class:"game-overlay"},zS={__name:"GameView",props:{gameState:{type:Object,required:!0},gifType:{type:String,default:"none"}},emits:["fire","restart","backToMenu"],setup(n){const t=Xn(null);function e(){const r=t.value;r&&(r.width=window.innerWidth,r.height=window.innerHeight,r.style.cssText="display:block;position:fixed;top:0;left:0;z-index:1")}let i=null;function s(){clearTimeout(i),i=setTimeout(e,200)}return kl(()=>{var r,a;e(),window.addEventListener("resize",s),window.addEventListener("orientationchange",()=>setTimeout(e,300)),console.log("canvas mounted:",(r=t.value)==null?void 0:r.width,"x",(a=t.value)==null?void 0:a.height)}),La(()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}),(r,a)=>(fe(),ve("div",OS,[Et("canvas",{id:"game-canvas",ref_key:"canvasRef",ref:t},null,512),pe(FS,{type:n.gifType,visible:n.gifType!=="none"},null,8,["type","visible"]),Et("div",BS,[pe(yS,{score:n.gameState.score,"time-remaining":n.gameState.timeRemaining,kills:n.gameState.kills},null,8,["score","time-remaining","kills"]),pe(cS),pe(pS,{onFire:a[0]||(a[0]=o=>r.$emit("fire"))})]),n.gameState.state==="game_over"?(fe(),ql(DS,{key:0,"game-state":n.gameState,visible:!0,onRestart:a[1]||(a[1]=o=>r.$emit("restart")),onBackToMenu:a[2]||(a[2]=o=>r.$emit("backToMenu"))},null,8,["game-state"])):pn("",!0)]))}},GS=In(zS,[["__scopeId","data-v-e414bfc1"]]),HS={key:0,class:"tutorial-overlay"},VS={class:"tutorial-card"},kS={class:"step-indicator"},WS={class:"step-icon"},XS={class:"step-title"},YS={class:"step-desc"},qS={class:"tutorial-actions"},$S={__name:"TutorialOverlay",props:{visible:{type:Boolean,default:!1}},emits:["start","skip"],setup(n){const t=Xn(1),e=[{icon:"🌲",title:"欢迎来到黑暗森林",desc:"你正站在森林的中心。四周一片漆黑，只能隐约看到树木的轮廓。奶龙就藏在这片森林的某个角落..."},{icon:"👂",title:"用耳朵来寻找",desc:"奶龙会不断发出笑声。转动手机或移动鼠标，仔细听笑声传来的方向。戴上耳机可以获得最精准的3D空间音效。"},{icon:"🎯",title:"对准声音的方向",desc:"听到声音后，将屏幕中央的准星对准声音传来的方向。你无法看到奶龙——只能依靠听觉来判断它的位置。"},{icon:"🔦",title:"打开手电筒",desc:"当你确定奶龙就在那个方向时，点击底部的手电筒按钮（或按空格键）。照中奶龙它会暂时消失，并在新的位置重生。"},{icon:"⏱️",title:"坚持60秒",desc:"奶龙会一步步向你靠近。你需要在黑暗中坚持60秒。心跳声会随奶龙接近而加快——那是你唯一的警示。被奶龙碰到，游戏就结束了。"}];function i(){t.value<e.length&&t.value++}function s(){t.value>1&&t.value--}return(r,a)=>{var o,l,u;return n.visible?(fe(),ve("div",HS,[Et("div",VS,[Et("div",kS,[(fe(!0),ve(Ke,null,Wl(e.length,c=>(fe(),ve("span",{key:c,class:yi(["step-dot",{active:c===t.value,done:c<t.value}])},null,2))),128))]),Et("div",WS,Re((o=e[t.value-1])==null?void 0:o.icon),1),Et("h3",XS,Re((l=e[t.value-1])==null?void 0:l.title),1),Et("p",YS,Re((u=e[t.value-1])==null?void 0:u.desc),1),Et("div",qS,[t.value>1?(fe(),ve("button",{key:0,class:"btn btn-ghost",onClick:s},"上一步")):pn("",!0),t.value<e.length?(fe(),ve("button",{key:1,class:"btn btn-primary",onClick:i},Re(t.value===e.length-1?"开始游戏":"下一步"),1)):pn("",!0),t.value===e.length?(fe(),ve("button",{key:2,class:"btn btn-primary",onClick:a[0]||(a[0]=c=>r.$emit("start"))}," 进 入 森 林 ")):pn("",!0)]),Et("button",{class:"skip-btn",onClick:a[1]||(a[1]=c=>r.$emit("skip"))},"跳过教程")])])):pn("",!0)}}},KS=In($S,[["__scopeId","data-v-82617695"]]),jS={class:"settings-panel"},ZS={class:"slider-header"},JS={class:"slider-icon"},QS={class:"slider-label"},ty={class:"slider-value"},ey=["value","onInput"],ny={__name:"SettingsPanel",props:{visible:{type:Boolean,default:!1},volumes:{type:Object,default:()=>({master:.7,nailong:.55,heartbeat:.7,bgm:.5,sfx:.8})}},emits:["update","close"],setup(n,{emit:t}){const e=n,i=t,s=pr([{key:"master",icon:"🔊",label:"主音量",value:e.volumes.master},{key:"nailong",icon:"👹",label:"奶龙笑声",value:e.volumes.nailong},{key:"heartbeat",icon:"💓",label:"心跳声",value:e.volumes.heartbeat},{key:"bgm",icon:"🎵",label:"背景音乐",value:e.volumes.bgm},{key:"sfx",icon:"💥",label:"UI音效",value:e.volumes.sfx}]);function r(a,o){const l=parseInt(o.target.value)/100,u=s.find(c=>c.key===a);u&&(u.value=l),i("update",{key:a,value:l})}return(a,o)=>n.visible?(fe(),ve("div",{key:0,class:"settings-overlay",onClick:o[1]||(o[1]=Vo(l=>a.$emit("close"),["self"]))},[Et("div",jS,[o[2]||(o[2]=Et("h2",{class:"panel-title"},"⚙️ 设置",-1)),o[3]||(o[3]=Et("div",{class:"hud-divider"},null,-1)),(fe(!0),ve(Ke,null,Wl(s,l=>(fe(),ve("div",{class:"slider-group",key:l.key},[Et("div",ZS,[Et("span",JS,Re(l.icon),1),Et("span",QS,Re(l.label),1),Et("span",ty,Re(Math.round(l.value*100))+"%",1)]),Et("input",{type:"range",min:"0",max:"100",value:Math.round(l.value*100),class:"hud-slider",onInput:u=>r(l.key,u)},null,40,ey)]))),128)),Et("button",{class:"close-btn",onClick:o[0]||(o[0]=l=>a.$emit("close"))},"关 闭")])])):pn("",!0)}},iy=In(ny,[["__scopeId","data-v-879c4e81"]]);class sy{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.raycaster=null,this.nailongCollider=null,this.hitFlashMesh=null,this.hitFlashTimer=null,this.isRunning=!1,this._afterimages=[],this._afterimageTexture=null,this._afterimagesEnabled=!1}init(t){try{const e=t.clientWidth||t.width||window.innerWidth||800,i=t.clientHeight||t.height||window.innerHeight||600;t.width=e,t.height=i,this.scene=new $M,this.scene.background=new qt(518),this.scene.fog=new oc(518,3,14);const s=e/Math.max(i,1),r=s<1?100:75;this.camera=new en(r,s,.1,60),this.camera.position.set(0,1.6,0),this.renderer=new qM({canvas:t,antialias:!0,alpha:!1}),this.renderer.setSize(e,i,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(518),this.raycaster=new ZM,this._createGround(),this._createTrees(),this._createNailongCollider(),this._createHitFlash(),this._resizeCanvas=t,this._onResizeHandler=()=>this._onResize(this._resizeCanvas),window.addEventListener("resize",this._onResizeHandler),this.isRunning=!0,this.renderer.render(this.scene,this.camera),console.log("Forest scene initialized",{w:e,h:i,fov:r})}catch(e){throw console.error("GameEngine.init failed:",e),e}}_createGround(){const t=new Ma(16,48),e=new mi({color:657926,side:hn,depthWrite:!0}),i=new Fe(t,e);i.rotation.x=-Math.PI/2,i.position.y=-1.6,this.scene.add(i);const s=new Ma(4,32),r=new mi({color:1118472,side:hn,depthWrite:!0}),a=new Fe(s,r);a.rotation.x=-Math.PI/2,a.position.y=-1.59,this.scene.add(a)}_createTrees(){for(let s=0;s<35;s++){const r=s/35*Math.PI*2+(Math.random()-.5)*.4,a=5+Math.random()*10,o=Math.cos(r)*a,l=Math.sin(r)*a,u=3+Math.random()*4,c=.15+Math.random()*.3,f=new za(c*.7,c,u,8),d=.03+Math.random()*.04,p=new mi({color:new qt(d,d*.8,d*.5)}),_=new Fe(f,p);_.position.set(o,-1.6+u/2,l),_.castShadow=!1,_.receiveShadow=!1,this.scene.add(_);const x=new lc(.8+Math.random()*1.2,2+Math.random()*3,8),m=.02+Math.random()*.03,h=new mi({color:new qt(m,m*1.2,m*.6)}),b=new Fe(x,h);b.position.set(o,-1.6+u+1,l),this.scene.add(b)}}_createNailongCollider(){const t=new Sa(.84,16,16),e=new mi({visible:!1});this.nailongCollider=new Fe(t,e),this.nailongCollider.visible=!1,this.scene.add(this.nailongCollider)}_createHitFlash(){const t=new Sa(1.8,16,16),e=new mi({color:16755200,transparent:!0,opacity:0,blending:ga,depthWrite:!1});this.hitFlashMesh=new Fe(t,e),this.hitFlashMesh.visible=!1,this.scene.add(this.hitFlashMesh)}setNailongPosition(t,e,i){this.nailongCollider&&this.nailongCollider.position.set(t,e,i)}checkAim(){if(!this.nailongCollider)return{hit:!1,distance:1/0,point:null};this.raycaster.setFromCamera(new Xt(0,0),this.camera);const t=this.nailongCollider.visible;this.nailongCollider.visible=!0;const e=this.raycaster.intersectObject(this.nailongCollider);return this.nailongCollider.visible=t,e.length>0?{hit:!0,distance:e[0].distance,point:e[0].point.clone()}:{hit:!1,distance:1/0,point:null}}showHitFlash(t){if(!this.hitFlashMesh)return;this.hitFlashMesh.position.copy(t),this.hitFlashMesh.visible=!0,this.hitFlashMesh.material.opacity=1,this.hitFlashTimer&&cancelAnimationFrame(this.hitFlashTimer);const e=performance.now(),i=s=>{const r=Math.max(0,1-(s-e)/400);this.hitFlashMesh.material.opacity=r,r>0?this.hitFlashTimer=requestAnimationFrame(i):this.hitFlashMesh.visible=!1};this.hitFlashTimer=requestAnimationFrame(i)}updateCameraRotation(t){this.camera.quaternion.setFromEuler(t)}getCameraForward(){const t=new H(0,0,-1);return t.applyQuaternion(this.camera.quaternion),t}render(){!this.isRunning||!this.renderer||!this.scene||!this.camera||this.renderer.render(this.scene,this.camera)}enableAfterimages(){if(this._afterimagesEnabled)return;this._afterimagesEnabled=!0;const t=new Image;t.src=cc,t.onload=()=>{this._afterimageTexture=new ze(t),this._afterimageTexture.needsUpdate=!0,this._afterimageTexture.colorSpace=$e;for(let e=0;e<5;e++){const i=new Kh({map:this._afterimageTexture,blending:ga,transparent:!0,opacity:.08,depthWrite:!1,depthTest:!0}),s=new jM(i);s.scale.set(2.5,2.5,1),s.visible=!1,this.scene.add(s),this._afterimages.push(s)}}}disableAfterimages(){this._afterimagesEnabled=!1,this._afterimages.forEach(t=>{var e,i;t.visible=!1,(e=t.material)==null||e.dispose(),(i=this.scene)==null||i.remove(t)}),this._afterimages=[],this._afterimageTexture&&(this._afterimageTexture.dispose(),this._afterimageTexture=null)}updateAfterimages(t){if(!this._afterimagesEnabled||!this._afterimages.length)return;const e=this._afterimages.length;for(let i=0;i<e;i++){const s=t.length-1-i*Math.max(1,Math.floor(t.length/e));s>=0&&s<t.length?(this._afterimages[i].position.copy(t[s]),this._afterimages[i].visible=!0,this._afterimages[i].material.opacity=.03+(1-i/e)*.05):this._afterimages[i].visible=!1}}_onResize(t){var a;const e=t.clientWidth||window.innerWidth||800,i=t.clientHeight||window.innerHeight||600,s=e/Math.max(i,1),r=s<1?100:75;r!==((a=this.camera)==null?void 0:a.fov)&&(this.camera.fov=r),this.camera&&(this.camera.aspect=s,this.camera.updateProjectionMatrix()),this.renderer&&this.renderer.setSize(e,i)}dispose(){var t,e;this.isRunning=!1,this.hitFlashTimer&&cancelAnimationFrame(this.hitFlashTimer),this._onResizeHandler&&window.removeEventListener("resize",this._onResizeHandler),this.disableAfterimages(),(t=this.renderer)==null||t.dispose(),(e=this.scene)==null||e.clear(),this.scene=null,this.renderer=null}}const ry="/assets/%E5%A5%B6%E9%BE%99%E5%A4%A7%E7%AC%91-X8as31JQ.mp3",ay="/assets/%E5%BC%80%E6%9E%AA%E9%9F%B3%E6%95%88-aE3QZQiK.mp3";class oy{constructor(){this.ctx=null,this.listener=null,this._nailongPanner=null,this._nailongGain=null,this._nailongSource=null,this._nailongBuffer=null,this._isNailongPlaying=!1,this._flashBuffer=null,this._heartbeatGain=null,this._heartbeatSource=null,this._heartbeatBuffer=null,this._heartbeatPlaying=!1,this._heartbeatRate=1,this._bgmGain=null,this._bgmSource=null,this._bgmBuffer=null,this._bgmPlaying=!1,this.masterGain=.7,this.nailongVolume=.55,this._isLoaded=!1}async init(){this.ctx&&this.ctx.state!=="closed"&&await this.ctx.close(),this.ctx=new(window.AudioContext||window.webkitAudioContext),this.ctx.state==="suspended"&&await this.ctx.resume(),this.listener=this.ctx.listener,this.listener.positionX.value=0,this.listener.positionY.value=0,this.listener.positionZ.value=0,this.listener.forwardX.value=0,this.listener.forwardY.value=0,this.listener.forwardZ.value=-1,this.listener.upX.value=0,this.listener.upY.value=1,this.listener.upZ.value=0,await this._loadAudioFiles(),console.log("AudioManager initialized")}async _loadAudioFiles(){try{const[t,e]=await Promise.all([this._loadBuffer(ry),this._loadBuffer(ay)]);this._nailongBuffer=t,this._flashBuffer=e,this._isLoaded=!0,console.log("Audio files loaded")}catch(t){console.warn("Audio load failed, using synthetic fallback:",t.message)}}async _loadBuffer(t){const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);return await this.ctx.decodeAudioData(await e.arrayBuffer())}startNailongSound(){if(!(!this.ctx||this._isNailongPlaying)){if(this._nailongPanner=this.ctx.createPanner(),this._nailongPanner.panningModel="HRTF",this._nailongPanner.distanceModel="inverse",this._nailongPanner.refDistance=4,this._nailongPanner.maxDistance=18,this._nailongPanner.rolloffFactor=1.5,this._nailongGain=this.ctx.createGain(),this._nailongGain.gain.value=0,this._isLoaded&&this._nailongBuffer){const t=this.ctx.createBufferSource();t.buffer=this._nailongBuffer,t.loop=!0,t.connect(this._nailongPanner),t.start(0),this._nailongSource=t}else this._playNailongSynthetic();this._nailongPanner.connect(this._nailongGain),this._nailongGain.connect(this.ctx.destination),this._nailongGain.gain.setTargetAtTime(this.nailongVolume*this.masterGain,this.ctx.currentTime,.3),this._isNailongPlaying=!0}}_playNailongSynthetic(){const t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.value=180;const e=this.ctx.createOscillator();e.type="sine",e.frequency.value=2.5;const i=this.ctx.createGain();i.gain.value=.5;const s=this.ctx.createGain();s.gain.value=0,e.connect(i),i.connect(s.gain),t.connect(s),s.connect(this._nailongPanner),t.start(),e.start(),this._nailongSource=t,this._synthNodes=[t,e,i,s]}stopNailongSound(){var t,e,i,s,r;if(this._isNailongPlaying){try{(e=(t=this._nailongSource)==null?void 0:t.stop)==null||e.call(t)}catch{}if(this._synthNodes){for(const a of this._synthNodes){try{a.stop()}catch{}a==null||a.disconnect()}this._synthNodes=null}(i=this._nailongSource)==null||i.disconnect(),(s=this._nailongGain)==null||s.disconnect(),(r=this._nailongPanner)==null||r.disconnect(),this._nailongSource=null,this._nailongGain=null,this._nailongPanner=null,this._isNailongPlaying=!1}}updateNailongPosition(t,e,i){this._nailongPanner&&(this._nailongPanner.positionX.value=t,this._nailongPanner.positionY.value=e,this._nailongPanner.positionZ.value=i)}setNailongVolumeByDistance(t){if(!this._nailongGain)return;const e=Math.min(1,1/Math.max(1,t/4));this._nailongGain.gain.setTargetAtTime(e*this.nailongVolume*this.masterGain,this.ctx.currentTime,.2)}startHeartbeat(){!this.ctx||this._heartbeatPlaying||(this._heartbeatGain=this.ctx.createGain(),this._heartbeatGain.gain.value=0,this._heartbeatGain.connect(this.ctx.destination),this._heartbeatPlaying=!0,this._beatHeart())}_beatHeart(){if(!this._heartbeatPlaying||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(50,t),e.frequency.linearRampToValueAtTime(30,t+.15);const i=this.ctx.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.5,t+.05),i.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(i),i.connect(this._heartbeatGain),e.start(t),e.stop(t+.25);const s=.6/Math.max(.5,this._heartbeatRate);this._heartbeatTimer=setTimeout(()=>this._beatHeart(),s*1e3)}stopHeartbeat(){var t;this._heartbeatPlaying=!1,this._heartbeatTimer&&clearTimeout(this._heartbeatTimer),(t=this._heartbeatGain)==null||t.disconnect(),this._heartbeatGain=null}updateHeartbeatRate(t){if(this._heartbeatRate=pi.clamp(3/Math.max(1,t/3),.6,3.5),this._heartbeatGain){const e=.25+.45/Math.max(1,t/4);this._heartbeatGain.gain.setTargetAtTime(e*this.masterGain,this.ctx.currentTime,.3)}}startBGM(){}stopBGM(){var t,e,i;this._bgmPlaying=!1,(e=(t=this._bgmSource)==null?void 0:t.stop)==null||e.call(t),(i=this._bgmGain)==null||i.disconnect(),this._bgmGain=null}playFlashSound(){if(this.ctx)if(this._flashBuffer){const t=this.ctx.createBufferSource();t.buffer=this._flashBuffer;const e=this.ctx.createGain();e.gain.value=.6*this.masterGain,t.connect(e),e.connect(this.ctx.destination),t.start(0)}else this._playSyntheticFlash()}_playSyntheticFlash(){const t=this.ctx.currentTime,e=this.ctx.createBuffer(1,this.ctx.sampleRate*.08,this.ctx.sampleRate),i=e.getChannelData(0);for(let o=0;o<i.length;o++)i[o]=(Math.random()*2-1)*Math.exp(-o/i.length*30)*.5;const s=this.ctx.createBufferSource();s.buffer=e;const r=this.ctx.createGain();r.gain.value=.6*this.masterGain;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=2e3,s.connect(a),a.connect(r),r.connect(this.ctx.destination),s.start(t),s.stop(t+.1)}playHitSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=(i,s,r,a)=>{const o=this.ctx.createOscillator();o.type="sine",o.frequency.value=i;const l=this.ctx.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(a,s+.02),l.gain.exponentialRampToValueAtTime(.001,s+r),o.connect(l),l.connect(this.ctx.destination),o.start(s),o.stop(s+r)};e(800,t,.15,.5*this.masterGain),e(1200,t+.08,.12,.35*this.masterGain)}playMissSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(200,t),e.frequency.linearRampToValueAtTime(80,t+.2);const i=this.ctx.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.2*this.masterGain,t+.05),i.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.3)}playWinSound(){if(!this.ctx)return;const t=this.ctx.currentTime;[523,659,784,1047].forEach((e,i)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t+i*.15),r.gain.linearRampToValueAtTime(.3*this.masterGain,t+i*.15+.05),r.gain.exponentialRampToValueAtTime(.001,t+i*.15+.4),s.connect(r),r.connect(this.ctx.destination),s.start(t+i*.15),s.stop(t+i*.15+.5)})}playLoseSound(){if(!this.ctx)return;const t=this.ctx.currentTime;[400,300,200].forEach((e,i)=>{const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t+i*.25),r.gain.linearRampToValueAtTime(.25*this.masterGain,t+i*.25+.05),r.gain.exponentialRampToValueAtTime(.001,t+i*.25+.5),s.connect(r),r.connect(this.ctx.destination),s.start(t+i*.25),s.stop(t+i*.25+.6)})}setMasterVolume(t){if(this.masterGain=pi.clamp(t,0,1),this._nailongGain&&this._nailongGain.gain.setTargetAtTime(this.nailongVolume*this.masterGain,this.ctx.currentTime,.1),this._heartbeatGain){const e=.25+.45/Math.max(1,(this._lastNailongDist||10)/4);this._heartbeatGain.gain.setTargetAtTime(e*this.masterGain,this.ctx.currentTime,.1)}}setNailongVolume(t){this.nailongVolume=pi.clamp(t,0,1)}setHeartbeatVolume(t){this._heartbeatBaseVolume=pi.clamp(t,0,1)}setBGMVolume(t){this._bgmVolume=pi.clamp(t,0,1)}setSFXVolume(t){this.sfxVolume=pi.clamp(t,0,1)}getVolumes(){return{master:this.masterGain,nailong:this.nailongVolume,heartbeat:this._heartbeatBaseVolume||.7,bgm:this._bgmVolume||.5,sfx:this.sfxVolume}}updateListenerOrientation(t,e){this.listener&&(this.listener.forwardX.value=t.x,this.listener.forwardY.value=t.y,this.listener.forwardZ.value=t.z,this.listener.upX.value=e.x,this.listener.upY.value=e.y,this.listener.upZ.value=e.z)}dispose(){this.stopNailongSound(),this.stopHeartbeat(),this.stopBGM(),this.ctx&&this.ctx.state!=="closed"&&this.ctx.close(),this.ctx=null}}class ly{constructor(){this.yaw=0,this.pitch=0,this._targetYaw=0,this._targetPitch=0,this._calibrationYaw=0,this._calibrationPitch=0,this.mouseSensitivity=.0025,this.touchSensitivity=.008,this.gyroSensitivity=1,this.smoothFactor=.15,this.maxPitch=Math.PI/2.2,this.minPitch=-Math.PI/2.2,this.isEnabled=!1,this.isCalibrated=!1,this._mouseActive=!1,this._isGyroActive=!1,this._permissionGranted=!1,this._lastGyroTime=0,this._lastMouseX=null,this._lastMouseY=null,this._lastTouchId=null,this._lastTouchX=null,this._lastTouchY=null,this._lastAlpha=null,this._accumYaw=0,this._calibrationBeta=45,this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onDeviceOrientation=this._onDeviceOrientation.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this)}async requestPermission(){if(!window.isSecureContext)return console.log("[Gyro] ⚠️ 非安全上下文，陀螺仪不可用。需 HTTPS 或 localhost"),this._permissionGranted=!1,"insecure";if(!window.DeviceOrientationEvent)return console.log("[Gyro] 设备不支持 DeviceOrientationEvent"),this._permissionGranted=!1,"unavailable";if(typeof DeviceOrientationEvent.requestPermission=="function")try{const e=await DeviceOrientationEvent.requestPermission();return this._permissionGranted=e==="granted",console.log("[Gyro] iOS 权限:",e),e}catch{return this._permissionGranted=!1,"denied"}return this._permissionGranted=!0,console.log("[Gyro] 安全上下文，陀螺仪可用"),"granted"}init(){this._removeAllListeners(),this._addAllListeners()}_removeAllListeners(){window.removeEventListener("deviceorientation",this._onDeviceOrientation),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("touchstart",this._onTouchStart),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),this._mouseActive=!1,this._isGyroActive=!1,this.isEnabled=!1,this._lastMouseX=null,this._lastMouseY=null,this._lastTouchId=null,this._lastAlpha=null,this._accumYaw=0}_addAllListeners(){document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("touchstart",this._onTouchStart,{passive:!1}),document.addEventListener("touchmove",this._onTouchMove,{passive:!1}),document.addEventListener("touchend",this._onTouchEnd),this._permissionGranted&&(window.addEventListener("deviceorientation",this._onDeviceOrientation),console.log("[Gyro] deviceorientation 监听已添加"))}_onDeviceOrientation(t){if(!this.isEnabled||t.alpha===null||t.alpha===void 0)return;this._lastGyroTime=performance.now();const e=t.alpha,i=t.beta,s=t.gamma;if(!this._isGyroActive){this._isGyroActive=!0,this._lastAlpha=null,this._accumYaw=0,this._calibrationBeta=i,console.log("[Gyro] ✅ 陀螺仪激活, 初始 beta=%.1f°",i);return}if(this._lastAlpha!==null){let l=e-this._lastAlpha;l>180&&(l-=360),l<-180&&(l+=360),this._accumYaw+=l}this._lastAlpha=e;const r=i-this._calibrationBeta,a=window.innerWidth>window.innerHeight;let o=r;a&&(o=-s),this._targetYaw=pi.degToRad(this._accumYaw)*this.gyroSensitivity,this._targetPitch=pi.degToRad(o)*this.gyroSensitivity*.7}_isGyroTimedOut(){return!this._isGyroActive||performance.now()-this._lastGyroTime>2e3}_onMouseDown(t){if(!this.isEnabled)return;const e=t.target;e&&(e.id==="game-canvas"||e.closest("#game-canvas"))&&(this._mouseActive=!0,this._lastMouseX=t.clientX,this._lastMouseY=t.clientY,console.log("[Input] 🖱️ 鼠标已激活（点击画布）"))}_onMouseMove(t){if(this.isEnabled&&this._mouseActive){if(this._lastMouseX!==null){const e=t.clientX-this._lastMouseX,i=t.clientY-this._lastMouseY;(Math.abs(e)>0||Math.abs(i)>0)&&(this._targetYaw-=e*this.mouseSensitivity,this._targetPitch-=i*this.mouseSensitivity)}this._lastMouseX=t.clientX,this._lastMouseY=t.clientY}}_onTouchStart(t){if(this.isEnabled&&this._isGyroTimedOut()){if(t.touches.length===1){const e=t.touches[0];this._lastTouchId=e.identifier,this._lastTouchX=e.clientX,this._lastTouchY=e.clientY}t.preventDefault()}}_onTouchMove(t){if(!this.isEnabled||!this._isGyroTimedOut()||t.touches.length!==1)return;const e=t.touches[0];if(this._lastTouchId===e.identifier){const i=e.clientX-this._lastTouchX,s=e.clientY-this._lastTouchY;(Math.abs(i)>0||Math.abs(s)>0)&&(this._targetYaw+=i*this.touchSensitivity,this._targetPitch+=s*this.touchSensitivity)}this._lastTouchX=e.clientX,this._lastTouchY=e.clientY,t.preventDefault()}_onTouchEnd(t){this._lastTouchId=null}calibrate(){this._isGyroActive?(this._accumYaw=0,this._lastAlpha=null,this._targetYaw=0,this._targetPitch=0,console.log("[Gyro] 校准完成 — 视角归零")):(this._targetYaw=0,this._targetPitch=0,this._lastMouseX=null,this._lastMouseY=null,this._mouseActive=!1,console.log("[Input] 桌面校准：视角归零（需点击画布激活鼠标）")),this.isCalibrated=!0}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}update(){this._targetPitch=Math.max(this.minPitch,Math.min(this.maxPitch,this._targetPitch)),this.yaw+=(this._targetYaw-this.yaw)*this.smoothFactor,this.pitch+=(this._targetPitch-this.pitch)*this.smoothFactor}getEuler(){return new Dn(this.pitch,this.yaw,0,"YXZ")}dispose(){this.disable(),this._removeAllListeners()}}class cy{constructor(){this.position=new H,this._target=new H,this._velocity=new H,this.state="idle",this._hitTimer=0,this._moveSpeed=0,this.config={minSpawnDist:10,maxSpawnDist:16,minSpeed:.8,maxSpeed:2.5,killDistance:2,hitCooldown:2}}reset(){this.state="idle",this._hitTimer=0}spawn(t=new H,e=null){this.position.copy(this._randomForestPoint(t,e)),this._moveSpeed=this.config.minSpeed+Math.random()*(this.config.maxSpeed-this.config.minSpeed),this.state="moving",this._hitTimer=0}onHit(){this.state="hit",this._hitTimer=this.config.hitCooldown}update(t,e){if(this.state==="hit")return this._hitTimer-=t,this._hitTimer<=0&&this.spawn(e,this.position.clone()),{gameOver:!1};if(this.state==="moving"){const s=new H().subVectors(e,this.position);if(s.length()<=this.config.killDistance)return{gameOver:!0};s.normalize(),this.position.add(s.multiplyScalar(this._moveSpeed*t))}return this.position.length()>this.config.maxSpawnDist&&this.position.normalize().multiplyScalar(this.config.maxSpawnDist-.5),{gameOver:!1}}distanceTo(t=new H){return this.position.distanceTo(t)}_randomForestPoint(t,e=null){for(let i=0;i<20;i++){const s=Math.random()*Math.PI*2,r=this.config.minSpawnDist+Math.random()*(this.config.maxSpawnDist-this.config.minSpawnDist),a=-1.2+Math.random()*2,o=new H(t.x+Math.cos(s)*r,t.y+a,t.z+Math.sin(s)*r);if(!(e&&o.distanceTo(e)<4))return o}return new H(this.config.minSpawnDist,0,0)}dispose(){}}const Ve={IDLE:"idle",STARTING:"starting",PLAYING:"playing",GAME_OVER:"game_over"};class uy{constructor(){this.state=Ve.IDLE,this.score=0,this.kills=0,this.shotsFired=0,this.timeRemaining=60,this.roundTime=60,this.bestScore=0,this.won=!1,this._onStateChange=null,this._onScoreChange=null,this._onTimeChange=null,this._timerInterval=null,this._loadBestScore()}onStateChange(t){this._onStateChange=t}onScoreChange(t){this._onScoreChange=t}onTimeChange(t){this._onTimeChange=t}start(){this.score=0,this.kills=0,this.shotsFired=0,this.timeRemaining=this.roundTime,this._transition(Ve.STARTING)}ready(){this.state===Ve.STARTING&&(this._transition(Ve.PLAYING),this._startTimer())}recordShot(){this.state===Ve.PLAYING&&this.shotsFired++}recordKill(){this.state===Ve.PLAYING&&(this.kills++,this.score+=100,this._onScoreChange&&this._onScoreChange(this.score,this.kills))}_onTimeUp(){this._stopTimer(),this._transition(Ve.GAME_OVER),this.score>this.bestScore&&(this.bestScore=this.score,this._saveBestScore())}endGame(){this._stopTimer(),this._transition(Ve.GAME_OVER),this.score>this.bestScore&&(this.bestScore=this.score,this._saveBestScore())}backToMenu(){this._stopTimer(),this._transition(Ve.IDLE)}getAccuracy(){return this.shotsFired===0?0:Math.round(this.kills/this.shotsFired*100)}_transition(t){const e=this.state;this.state=t,this._onStateChange&&this._onStateChange(t,e)}_startTimer(){this._stopTimer(),this._timerInterval=setInterval(()=>{this.timeRemaining--,this._onTimeChange&&this._onTimeChange(this.timeRemaining),this.timeRemaining<=0&&this._onTimeUp()},1e3)}_stopTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}_loadBestScore(){try{const t=localStorage.getItem("kill_nailong_best");t&&(this.bestScore=parseInt(t,10)||0)}catch{}}_saveBestScore(){try{localStorage.setItem("kill_nailong_best",String(this.bestScore))}catch{}}dispose(){this._stopTimer()}}const fy={id:"app-root"},hy={__name:"App",setup(n){const t=new sy,e=new oy,i=new ly,s=new cy,r=new uy,a=Xn("idle"),o=Xn("none"),l=Xn(r.bestScore),u=Xn(!1),c=Xn(!1),f=pr(e.getVolumes()),d=Xn({state:"idle",score:0,timeRemaining:60,bestScore:0,won:!1,getAccuracy:()=>0});function p(){d.value={state:r.state,score:r.score,timeRemaining:r.timeRemaining,bestScore:r.bestScore,won:r.won,getAccuracy:()=>r.getAccuracy()}}let _=null,x=0,m=!1,h="idle",b=null;const A=new H(0,0,0),S=new H(0,1,0);function F(G){if(!m)return;const W=Math.min((G-x)/1e3,.1);x=G,i.update();const k=i.getEuler();t.updateCameraRotation(k);const ht=t.getCameraForward();if(e.updateListenerOrientation(ht,S),r.state===Ve.PLAYING){if(s.update(W,A).gameOver){P(!1);return}const yt=s.position;t.setNailongPosition(yt.x,yt.y,yt.z),e.updateNailongPosition(yt.x,yt.y,yt.z);const Dt=s.distanceTo(A);e.updateHeartbeatRate(Dt),h==="hit"&&s.state!=="hit"&&e.startNailongSound(),h=s.state}t.render(),_=requestAnimationFrame(F)}async function L(){console.log("handleStart"),r.start(),a.value=r.state,p();try{await i.requestPermission()}catch{}if(await new Promise(W=>requestAnimationFrame(()=>requestAnimationFrame(W))),!t.isRunning){const W=document.getElementById("game-canvas");if(W)t.init(W);else{console.error("canvas not found");return}}try{await e.init()}catch(W){console.error("audio init:",W)}i.init(),i.calibrate(),i.enable(),s.reset(),s.spawn(A),h="idle";const G=s.position;t.setNailongPosition(G.x,G.y,G.z),e.updateNailongPosition(G.x,G.y,G.z),e.startNailongSound(),e.startHeartbeat(),document.addEventListener("keydown",M),m||(m=!0,x=performance.now(),_=requestAnimationFrame(F)),r.ready(),a.value=r.state,p(),console.log("game ready")}function P(G){console.log("Game over:",G?"WIN":"LOSE"),m=!1,_&&cancelAnimationFrame(_),G?e.playWinSound():e.playLoseSound(),e.stopHeartbeat(),e.stopNailongSound(),document.removeEventListener("keydown",M),i.disable(),r.won=G,G&&r.score>l.value&&(l.value=r.score),r.endGame(),a.value=r.state,p()}function U(){if(r.state!==Ve.PLAYING)return;e.playFlashSound();const G=t.checkAim();G.hit?(r.recordKill(),p(),e.playHitSound(),t.showHitFlash(G.point),s.onHit(),e.stopNailongSound(),h="hit",E("kill",2e3)):e.playMissSound()}function E(G,W=1800){b&&clearTimeout(b),o.value=G,b=setTimeout(()=>{o.value="none"},W)}function M(G){(G.code==="Space"||G.key===" ")&&(G.preventDefault(),U())}function R(){u.value=!1,L()}function I(){const G=e.getVolumes();Object.assign(f,G),c.value=!0}function z({key:G,value:W}){switch(f[G]=W,G){case"master":e.setMasterVolume(W);break;case"nailong":e.setNailongVolume(W);break;case"heartbeat":e.setHeartbeatVolume(W);break;case"bgm":e.setBGMVolume(W);break;case"sfx":e.setSFXVolume(W);break}}function J(){m=!1,_&&cancelAnimationFrame(_),b&&clearTimeout(b),o.value="none",i.disable(),e.stopNailongSound(),e.stopHeartbeat(),e.stopBGM(),t.dispose(),document.removeEventListener("keydown",M),r.backToMenu(),a.value=r.state,p()}const et=setInterval(()=>{(r.state===Ve.PLAYING||r.state===Ve.GAME_OVER)&&(p(),r.timeRemaining<=0&&r.state===Ve.PLAYING&&P(!0))},500);return La(()=>{clearInterval(et),m=!1,_&&cancelAnimationFrame(_),b&&clearTimeout(b),document.removeEventListener("keydown",M),i.dispose(),e.dispose(),t.dispose(),r.dispose()}),(G,W)=>(fe(),ve("div",fy,[Ec(pe(rS,{"best-score":l.value,onStart:L,onTutorial:W[0]||(W[0]=k=>u.value=!0),onSettings:I},null,8,["best-score"]),[[Xc,a.value==="idle"&&!u.value&&!c.value]]),Ec(pe(GS,{"game-state":d.value,"gif-type":o.value,onFire:U,onRestart:L,onBackToMenu:J},null,8,["game-state","gif-type"]),[[Xc,a.value!=="idle"&&!u.value]]),pe(KS,{visible:u.value,onStart:R,onSkip:W[1]||(W[1]=k=>u.value=!1)},null,8,["visible"]),pe(iy,{visible:c.value,volumes:f,onUpdate:z,onClose:W[2]||(W[2]=k=>c.value=!1)},null,8,["visible","volumes"])]))}},dy=In(hy,[["__scopeId","data-v-edd1a192"]]);wm(dy).mount("#app");
