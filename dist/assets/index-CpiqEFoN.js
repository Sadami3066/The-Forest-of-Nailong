(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const oe={},Ms=[],In=()=>{},_f=()=>!1,wa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ra=n=>n.startsWith("onUpdate:"),be=Object.assign,Hl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},cd=Object.prototype.hasOwnProperty,Qt=(n,t)=>cd.call(n,t),Ut=Array.isArray,Ss=n=>vr(n)==="[object Map]",gf=n=>vr(n)==="[object Set]",Ac=n=>vr(n)==="[object Date]",Gt=n=>typeof n=="function",_e=n=>typeof n=="string",Nn=n=>typeof n=="symbol",te=n=>n!==null&&typeof n=="object",vf=n=>(te(n)||Gt(n))&&Gt(n.then)&&Gt(n.catch),xf=Object.prototype.toString,vr=n=>xf.call(n),ud=n=>vr(n).slice(8,-1),Mf=n=>vr(n)==="[object Object]",Vl=n=>_e(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,tr=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},fd=/-\w/g,Mn=Ca(n=>n.replace(fd,t=>t.slice(1).toUpperCase())),hd=/\B([A-Z])/g,ji=Ca(n=>n.replace(hd,"-$1").toLowerCase()),Sf=Ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),qa=Ca(n=>n?`on${Sf(n)}`:""),Ln=(n,t)=>!Object.is(n,t),$a=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},yf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},dd=n=>{const t=parseFloat(n);return isNaN(t)?n:t},pd=n=>{const t=_e(n)?Number(n):NaN;return isNaN(t)?n:t};let wc;const Pa=()=>wc||(wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function La(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=_e(i)?vd(i):La(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(_e(n)||te(n))return n}const md=/;(?![^(]*\))/g,_d=/:([^]+)/,gd=/\/\*[^]*?\*\//g;function vd(n){const t={};return n.replace(gd,"").split(md).forEach(e=>{if(e){const i=e.split(_d);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Un(n){let t="";if(_e(n))t=n;else if(Ut(n))for(let e=0;e<n.length;e++){const i=Un(n[e]);i&&(t+=i+" ")}else if(te(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const xd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Md=Gl(xd);function Ef(n){return!!n||n===""}function Sd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=kl(n[i],t[i]);return e}function kl(n,t){if(n===t)return!0;let e=Ac(n),i=Ac(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Nn(n),i=Nn(t),e||i)return n===t;if(e=Ut(n),i=Ut(t),e||i)return e&&i?Sd(n,t):!1;if(e=te(n),i=te(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!kl(n[a],t[a]))return!1}}return String(n)===String(t)}const bf=n=>!!(n&&n.__v_isRef===!0),ae=n=>_e(n)?n:n==null?"":Ut(n)||te(n)&&(n.toString===xf||!Gt(n.toString))?bf(n)?ae(n.value):JSON.stringify(n,Tf,2):String(n),Tf=(n,t)=>bf(t)?Tf(n,t.value):Ss(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ka(i,r)+" =>"]=s,e),{})}:gf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ka(e))}:Nn(t)?Ka(t):te(t)&&!Ut(t)&&!Mf(t)?String(t):t,Ka=(n,t="")=>{var e;return Nn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class yd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Te&&(Te.active?(this.parent=Te,this.index=(Te.scopes||(Te.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Te;try{return Te=this,t()}finally{Te=e}}}on(){++this._on===1&&(this.prevScope=Te,Te=this)}off(){if(this._on>0&&--this._on===0){if(Te===this)Te=this.prevScope;else{let t=Te;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ed(){return Te}let ce;const ja=new WeakSet;class Af{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&(Te.active?Te.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ja.has(this)&&(ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rc(this),Cf(this);const t=ce,e=Sn;ce=this,Sn=!0;try{return this.fn()}finally{Pf(this),ce=t,Sn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Yl(t);this.deps=this.depsTail=void 0,Rc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fo(this)&&this.run()}get dirty(){return Fo(this)}}let wf=0,er,nr;function Rf(n,t=!1){if(n.flags|=8,t){n.next=nr,nr=n;return}n.next=er,er=n}function Wl(){wf++}function Xl(){if(--wf>0)return;if(nr){let t=nr;for(nr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;er;){let t=er;for(er=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Cf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Pf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Yl(i),bd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Fo(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Lf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Lf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===cr)||(n.globalVersion=cr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Fo(n))))return;n.flags|=2;const t=n.dep,e=ce,i=Sn;ce=n,Sn=!0;try{Cf(n);const s=n.fn(n._value);(t.version===0||Ln(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ce=e,Sn=i,Pf(n),n.flags&=-3}}function Yl(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Yl(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function bd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Sn=!0;const Df=[];function ei(){Df.push(Sn),Sn=!1}function ni(){const n=Df.pop();Sn=n===void 0?!0:n}function Rc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ce;ce=void 0;try{t()}finally{ce=e}}}let cr=0;class Td{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ql{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!Sn||ce===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ce)e=this.activeLink=new Td(ce,this),ce.deps?(e.prevDep=ce.depsTail,ce.depsTail.nextDep=e,ce.depsTail=e):ce.deps=ce.depsTail=e,If(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ce.depsTail,e.nextDep=void 0,ce.depsTail.nextDep=e,ce.depsTail=e,ce.deps===e&&(ce.deps=i)}return e}trigger(t){this.version++,cr++,this.notify(t)}notify(t){Wl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Xl()}}}function If(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)If(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Oo=new WeakMap,Xi=Symbol(""),Bo=Symbol(""),ur=Symbol("");function Ce(n,t,e){if(Sn&&ce){let i=Oo.get(n);i||Oo.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new ql),s.map=i,s.key=e),s.track()}}function Kn(n,t,e,i,s,r){const a=Oo.get(n);if(!a){cr++;return}const o=l=>{l&&l.trigger()};if(Wl(),t==="clear")a.forEach(o);else{const l=Ut(n),c=l&&Vl(e);if(l&&e==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===ur||!Nn(d)&&d>=u)&&o(f)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),c&&o(a.get(ur)),t){case"add":l?c&&o(a.get("length")):(o(a.get(Xi)),Ss(n)&&o(a.get(Bo)));break;case"delete":l||(o(a.get(Xi)),Ss(n)&&o(a.get(Bo)));break;case"set":Ss(n)&&o(a.get(Xi));break}}Xl()}function Ji(n){const t=jt(n);return t===n?t:(Ce(t,"iterate",ur),cn(n)?t:t.map(En))}function Da(n){return Ce(n=jt(n),"iterate",ur),n}function Rn(n,t){return ii(n)?As(Yi(n)?En(t):t):En(t)}const Ad={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,n=>Rn(this,n))},concat(...n){return Ji(this).concat(...n.map(t=>Ut(t)?Ji(t):t))},entries(){return Za(this,"entries",n=>(n[1]=Rn(this,n[1]),n))},every(n,t){return zn(this,"every",n,t,void 0,arguments)},filter(n,t){return zn(this,"filter",n,t,e=>e.map(i=>Rn(this,i)),arguments)},find(n,t){return zn(this,"find",n,t,e=>Rn(this,e),arguments)},findIndex(n,t){return zn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return zn(this,"findLast",n,t,e=>Rn(this,e),arguments)},findLastIndex(n,t){return zn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return zn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ja(this,"includes",n)},indexOf(...n){return Ja(this,"indexOf",n)},join(n){return Ji(this).join(n)},lastIndexOf(...n){return Ja(this,"lastIndexOf",n)},map(n,t){return zn(this,"map",n,t,void 0,arguments)},pop(){return zs(this,"pop")},push(...n){return zs(this,"push",n)},reduce(n,...t){return Cc(this,"reduce",n,t)},reduceRight(n,...t){return Cc(this,"reduceRight",n,t)},shift(){return zs(this,"shift")},some(n,t){return zn(this,"some",n,t,void 0,arguments)},splice(...n){return zs(this,"splice",n)},toReversed(){return Ji(this).toReversed()},toSorted(n){return Ji(this).toSorted(n)},toSpliced(...n){return Ji(this).toSpliced(...n)},unshift(...n){return zs(this,"unshift",n)},values(){return Za(this,"values",n=>Rn(this,n))}};function Za(n,t,e){const i=Da(n),s=i[t]();return i!==n&&!cn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const wd=Array.prototype;function zn(n,t,e,i,s,r){const a=Da(n),o=a!==n&&!cn(n),l=a[t];if(l!==wd[t]){const f=l.apply(n,r);return o?En(f):f}let c=e;a!==n&&(o?c=function(f,d){return e.call(this,Rn(n,f),d,n)}:e.length>2&&(c=function(f,d){return e.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Cc(n,t,e,i){const s=Da(n),r=s!==n&&!cn(n);let a=e,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=Rn(n,c)),e.call(this,c,Rn(n,u),f,n)}):e.length>3&&(a=function(c,u,f){return e.call(this,c,u,f,n)}));const l=s[t](a,...i);return o?Rn(n,l):l}function Ja(n,t,e){const i=jt(n);Ce(i,"iterate",ur);const s=i[t](...e);return(s===-1||s===!1)&&jl(e[0])?(e[0]=jt(e[0]),i[t](...e)):s}function zs(n,t,e=[]){ei(),Wl();const i=jt(n)[t].apply(n,e);return Xl(),ni(),i}const Rd=Gl("__proto__,__v_isRef,__isVue"),Uf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Nn));function Cd(n){Nn(n)||(n=String(n));const t=jt(this);return Ce(t,"has",n),t.hasOwnProperty(n)}class Nf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?zd:zf:r?Bf:Of).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Ut(t);if(!s){let l;if(a&&(l=Ad[e]))return l;if(e==="hasOwnProperty")return Cd}const o=Reflect.get(t,e,Pe(t)?t:i);if((Nn(e)?Uf.has(e):Rd(e))||(s||Ce(t,"get",e),r))return o;if(Pe(o)){const l=a&&Vl(e)?o:o.value;return s&&te(l)?Go(l):l}return te(o)?s?Go(o):xr(o):o}}class Ff extends Nf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const a=Ut(t)&&Vl(e);if(!this._isShallow){const c=ii(r);if(!cn(i)&&!ii(i)&&(r=jt(r),i=jt(i)),!a&&Pe(r)&&!Pe(i))return c||(r.value=i),!0}const o=a?Number(e)<t.length:Qt(t,e),l=Reflect.set(t,e,i,Pe(t)?t:s);return t===jt(s)&&(o?Ln(i,r)&&Kn(t,"set",e,i):Kn(t,"add",e,i)),l}deleteProperty(t,e){const i=Qt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Kn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Nn(e)||!Uf.has(e))&&Ce(t,"has",e),i}ownKeys(t){return Ce(t,"iterate",Ut(t)?"length":Xi),Reflect.ownKeys(t)}}class Pd extends Nf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Ld=new Ff,Dd=new Pd,Id=new Ff(!0);const zo=n=>n,Rr=n=>Reflect.getPrototypeOf(n);function Ud(n,t,e){return function(...i){const s=this.__v_raw,r=jt(s),a=Ss(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=e?zo:t?As:En;return!t&&Ce(r,"iterate",l?Bo:Xi),be(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Cr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Nd(n,t){const e={get(s){const r=this.__v_raw,a=jt(r),o=jt(s);n||(Ln(s,o)&&Ce(a,"get",s),Ce(a,"get",o));const{has:l}=Rr(a),c=t?zo:n?As:En;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ce(jt(s),"iterate",Xi),s.size},has(s){const r=this.__v_raw,a=jt(r),o=jt(s);return n||(Ln(s,o)&&Ce(a,"has",s),Ce(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=jt(o),c=t?zo:n?As:En;return!n&&Ce(l,"iterate",Xi),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return be(e,n?{add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear")}:{add(s){const r=jt(this),a=Rr(r),o=jt(s),l=!t&&!cn(s)&&!ii(s)?o:s;return a.has.call(r,l)||Ln(s,l)&&a.has.call(r,s)||Ln(o,l)&&a.has.call(r,o)||(r.add(l),Kn(r,"add",l,l)),this},set(s,r){!t&&!cn(r)&&!ii(r)&&(r=jt(r));const a=jt(this),{has:o,get:l}=Rr(a);let c=o.call(a,s);c||(s=jt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Ln(r,u)&&Kn(a,"set",s,r):Kn(a,"add",s,r),this},delete(s){const r=jt(this),{has:a,get:o}=Rr(r);let l=a.call(r,s);l||(s=jt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Kn(r,"delete",s,void 0),c},clear(){const s=jt(this),r=s.size!==0,a=s.clear();return r&&Kn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ud(s,n,t)}),e}function $l(n,t){const e=Nd(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Qt(e,s)&&s in i?e:i,s,r)}const Fd={get:$l(!1,!1)},Od={get:$l(!1,!0)},Bd={get:$l(!0,!1)};const Of=new WeakMap,Bf=new WeakMap,zf=new WeakMap,zd=new WeakMap;function Gd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xr(n){return ii(n)?n:Kl(n,!1,Ld,Fd,Of)}function Hd(n){return Kl(n,!1,Id,Od,Bf)}function Go(n){return Kl(n,!0,Dd,Bd,zf)}function Kl(n,t,e,i,s){if(!te(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=Gd(ud(n));if(a===0)return n;const o=new Proxy(n,a===2?i:e);return s.set(n,o),o}function Yi(n){return ii(n)?Yi(n.__v_raw):!!(n&&n.__v_isReactive)}function ii(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function jl(n){return n?!!n.__v_raw:!1}function jt(n){const t=n&&n.__v_raw;return t?jt(t):n}function Vd(n){return!Qt(n,"__v_skip")&&Object.isExtensible(n)&&yf(n,"__v_skip",!0),n}const En=n=>te(n)?xr(n):n,As=n=>te(n)?Go(n):n;function Pe(n){return n?n.__v_isRef===!0:!1}function gn(n){return kd(n,!1)}function kd(n,t){return Pe(n)?n:new Wd(n,t)}class Wd{constructor(t,e){this.dep=new ql,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:jt(t),this._value=e?t:En(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||cn(t)||ii(t);t=i?t:jt(t),Ln(t,e)&&(this._rawValue=t,this._value=i?t:En(t),this.dep.trigger())}}function Zl(n){return Pe(n)?n.value:n}const Xd={get:(n,t,e)=>t==="__v_raw"?n:Zl(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Pe(s)&&!Pe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Gf(n){return Yi(n)?n:new Proxy(n,Xd)}class Yd{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new ql(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Rf(this,!0),!0}get value(){const t=this.dep.track();return Lf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function qd(n,t,e=!1){let i,s;return Gt(n)?i=n:(i=n.get,s=n.set),new Yd(i,s,e)}const Pr={},da=new WeakMap;let Ui;function $d(n,t=!1,e=Ui){if(e){let i=da.get(e);i||da.set(e,i=[]),i.push(n)}}function Kd(n,t,e=oe){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=e,c=M=>s?M:cn(M)||s===!1||s===0?jn(M,1):jn(M);let u,f,d,p,g=!1,x=!1;if(Pe(n)?(f=()=>n.value,g=cn(n)):Yi(n)?(f=()=>c(n),g=!0):Ut(n)?(x=!0,g=n.some(M=>Yi(M)||cn(M)),f=()=>n.map(M=>{if(Pe(M))return M.value;if(Yi(M))return c(M);if(Gt(M))return l?l(M,2):M()})):Gt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){ei();try{d()}finally{ni()}}const M=Ui;Ui=u;try{return l?l(n,3,[p]):n(p)}finally{Ui=M}}:f=In,t&&s){const M=f,U=s===!0?1/0:s;f=()=>jn(M(),U)}const m=Ed(),h=()=>{u.stop(),m&&m.active&&Hl(m.effects,u)};if(r&&t){const M=t;t=(...U)=>{M(...U),h()}}let A=x?new Array(n.length).fill(Pr):Pr;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(t){const U=u.run();if(s||g||(x?U.some((C,L)=>Ln(C,A[L])):Ln(U,A))){d&&d();const C=Ui;Ui=u;try{const L=[U,A===Pr?void 0:x&&A[0]===Pr?[]:A,p];A=U,l?l(t,3,L):t(...L)}finally{Ui=C}}}else u.run()};return o&&o(T),u=new Af(f),u.scheduler=a?()=>a(T,!1):T,p=M=>$d(M,!1,u),d=u.onStop=()=>{const M=da.get(u);if(M){if(l)l(M,4);else for(const U of M)U();da.delete(u)}},t?i?T(!0):A=u.run():a?a(T.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function jn(n,t=1/0,e){if(t<=0||!te(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Pe(n))jn(n.value,t,e);else if(Ut(n))for(let i=0;i<n.length;i++)jn(n[i],t,e);else if(gf(n)||Ss(n))n.forEach(i=>{jn(i,t,e)});else if(Mf(n)){for(const i in n)jn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mr(n,t,e,i){try{return i?n(...i):n()}catch(s){Ia(s,t,e)}}function un(n,t,e,i){if(Gt(n)){const s=Mr(n,t,e,i);return s&&vf(s)&&s.catch(r=>{Ia(r,t,e)}),s}if(Ut(n)){const s=[];for(let r=0;r<n.length;r++)s.push(un(n[r],t,e,i));return s}}function Ia(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||oe;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){ei(),Mr(r,null,10,[n,l,c]),ni();return}}jd(n,e,s,i,a)}function jd(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Fe=[];let wn=-1;const ys=[];let mi=null,gs=0;const Hf=Promise.resolve();let pa=null;function Zd(n){const t=pa||Hf;return n?t.then(this?n.bind(this):n):t}function Jd(n){let t=wn+1,e=Fe.length;for(;t<e;){const i=t+e>>>1,s=Fe[i],r=fr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Jl(n){if(!(n.flags&1)){const t=fr(n),e=Fe[Fe.length-1];!e||!(n.flags&2)&&t>=fr(e)?Fe.push(n):Fe.splice(Jd(t),0,n),n.flags|=1,Vf()}}function Vf(){pa||(pa=Hf.then(Wf))}function Qd(n){Ut(n)?ys.push(...n):mi&&n.id===-1?mi.splice(gs+1,0,n):n.flags&1||(ys.push(n),n.flags|=1),Vf()}function Pc(n,t,e=wn+1){for(;e<Fe.length;e++){const i=Fe[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Fe.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function kf(n){if(ys.length){const t=[...new Set(ys)].sort((e,i)=>fr(e)-fr(i));if(ys.length=0,mi){mi.push(...t);return}for(mi=t,gs=0;gs<mi.length;gs++){const e=mi[gs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}mi=null,gs=0}}const fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wf(n){try{for(wn=0;wn<Fe.length;wn++){const t=Fe[wn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;wn<Fe.length;wn++){const t=Fe[wn];t&&(t.flags&=-2)}wn=-1,Fe.length=0,kf(),pa=null,(Fe.length||ys.length)&&Wf()}}let ln=null,Xf=null;function ma(n){const t=ln;return ln=n,Xf=n&&n.type.__scopeId||null,t}function Ua(n,t=ln,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&xa(-1);const r=ma(t);let a;try{a=n(...s)}finally{ma(r),i._d&&xa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Lc(n,t){if(ln===null)return n;const e=Ga(ln),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,o,l=oe]=t[s];r&&(Gt(r)&&(r={mounted:r,updated:r}),r.deep&&jn(a),i.push({dir:r,instance:e,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function bi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(ei(),un(l,e,8,[n.el,o,n,t]),ni())}}function tp(n,t){if(ze){let e=ze.provides;const i=ze.parent&&ze.parent.provides;i===e&&(e=ze.provides=Object.create(i)),e[n]=t}}function sa(n,t,e=!1){const i=yh();if(i||Es){let s=Es?Es._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Gt(t)?t.call(i&&i.proxy):t}}const ep=Symbol.for("v-scx"),np=()=>sa(ep);function Qa(n,t,e){return Yf(n,t,e)}function Yf(n,t,e=oe){const{immediate:i,deep:s,flush:r,once:a}=e,o=be({},e),l=t&&i||!t&&r!=="post";let c;if(pr){if(r==="sync"){const p=np();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=In,p.resume=In,p.pause=In,p}}const u=ze;o.call=(p,g,x)=>un(p,u,g,x);let f=!1;r==="post"?o.scheduler=p=>{Ve(p,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(p,g)=>{g?p():Jl(p)}),o.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Kd(n,t,o);return pr&&(c?c.push(d):l&&d()),d}function ip(n,t,e){const i=this.proxy,s=_e(n)?n.includes(".")?qf(i,n):()=>i[n]:n.bind(i,i);let r;Gt(t)?r=t:(r=t.handler,e=t);const a=Sr(this),o=Yf(s,r.bind(i),e);return a(),o}function qf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const sp=Symbol("_vte"),$f=n=>n.__isTeleport,rn=Symbol("_leaveCb"),Gs=Symbol("_enterCb");function rp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ql(()=>{n.isMounted=!0}),nh(()=>{n.isUnmounting=!0}),n}const nn=[Function,Array],Kf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},jf=n=>{const t=n.subTree;return t.component?jf(t.component):t},ap={name:"BaseTransition",props:Kf,setup(n,{slots:t}){const e=yh(),i=rp();return()=>{const s=t.default&&Qf(t.default(),!0),r=s&&s.length?Zf(s):e.subTree?Xe():void 0;if(!r)return;const a=jt(n),{mode:o}=a;if(i.isLeaving)return to(r);const l=Dc(r);if(!l)return to(r);let c=Ho(l,a,i,e,f=>c=f);l.type!==Be&&hr(l,c);let u=e.subTree&&Dc(e.subTree);if(u&&u.type!==Be&&!Oi(u,l)&&jf(e).type!==Be){let f=Ho(u,a,i,e);if(hr(u,f),o==="out-in"&&l.type!==Be)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,u=void 0},to(r);o==="in-out"&&l.type!==Be?f.delayLeave=(d,p,g)=>{const x=Jf(i,u);x[String(u.key)]=u,d[rn]=()=>{p(),d[rn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Zf(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Be){t=e;break}}return t}const op=ap;function Jf(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Ho(n,t,e,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:m,onAppear:h,onAfterAppear:A,onAppearCancelled:T}=t,M=String(n.key),U=Jf(e,n),C=(y,S)=>{y&&un(y,i,9,S)},L=(y,S)=>{const R=S[1];C(y,S),Ut(y)?y.every(I=>I.length<=1)&&R():y.length<=1&&R()},N={mode:a,persisted:o,beforeEnter(y){let S=l;if(!e.isMounted)if(r)S=m||l;else return;y[rn]&&y[rn](!0);const R=U[M];R&&Oi(n,R)&&R.el[rn]&&R.el[rn](),C(S,[y])},enter(y){if(U[M]===n)return;let S=c,R=u,I=f;if(!e.isMounted)if(r)S=h||c,R=A||u,I=T||f;else return;let z=!1;y[Gs]=et=>{z||(z=!0,et?C(I,[y]):C(R,[y]),N.delayedLeave&&N.delayedLeave(),y[Gs]=void 0)};const j=y[Gs].bind(null,!1);S?L(S,[y,j]):j()},leave(y,S){const R=String(n.key);if(y[Gs]&&y[Gs](!0),e.isUnmounting)return S();C(d,[y]);let I=!1;y[rn]=j=>{I||(I=!0,S(),j?C(x,[y]):C(g,[y]),y[rn]=void 0,U[R]===n&&delete U[R])};const z=y[rn].bind(null,!1);U[R]=n,p?L(p,[y,z]):z()},clone(y){const S=Ho(y,t,e,i,s);return s&&s(S),S}};return N}function to(n){if(Na(n))return n=Mi(n),n.children=null,n}function Dc(n){if(!Na(n))return $f(n.type)&&n.children?Zf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Gt(e.default))return e.default()}}function hr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,hr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Qf(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=e==null?a.key:String(e)+String(a.key!=null?a.key:r);a.type===We?(a.patchFlag&128&&s++,i=i.concat(Qf(a.children,t,o))):(t||a.type!==Be)&&i.push(o!=null?Mi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function th(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ic(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const _a=new WeakMap;function ir(n,t,e,i,s=!1){if(Ut(n)){n.forEach((x,m)=>ir(x,t&&(Ut(t)?t[m]:t),e,i,s));return}if(sr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ir(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ga(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=t&&t.r,u=o.refs===oe?o.refs={}:o.refs,f=o.setupState,d=jt(f),p=f===oe?_f:x=>Ic(u,x)?!1:Qt(d,x),g=(x,m)=>!(m&&Ic(u,m));if(c!=null&&c!==l){if(Uc(t),_e(c))u[c]=null,p(c)&&(f[c]=null);else if(Pe(c)){const x=t;g(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Gt(l))Mr(l,o,12,[a,u]);else{const x=_e(l),m=Pe(l);if(x||m){const h=()=>{if(n.f){const A=x?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ut(A)&&Hl(A,r);else if(Ut(A))A.includes(r)||A.push(r);else if(x)u[l]=[r],p(l)&&(f[l]=u[l]);else{const T=[r];g(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else x?(u[l]=a,p(l)&&(f[l]=a)):m&&(g(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const A=()=>{h(),_a.delete(n)};A.id=-1,_a.set(n,A),Ve(A,e)}else Uc(n),h()}}}function Uc(n){const t=_a.get(n);t&&(t.flags|=8,_a.delete(n))}Pa().requestIdleCallback;Pa().cancelIdleCallback;const sr=n=>!!n.type.__asyncLoader,Na=n=>n.type.__isKeepAlive;function lp(n,t){eh(n,"a",t)}function cp(n,t){eh(n,"da",t)}function eh(n,t,e=ze){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Fa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Na(s.parent.vnode)&&up(i,t,e,s),s=s.parent}}function up(n,t,e,i){const s=Fa(t,n,i,!0);Oa(()=>{Hl(i[t],s)},e)}function Fa(n,t,e=ze,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...a)=>{ei();const o=Sr(e),l=un(t,e,n,a);return o(),ni(),l});return i?s.unshift(r):s.push(r),r}}const ri=n=>(t,e=ze)=>{(!pr||n==="sp")&&Fa(n,(...i)=>t(...i),e)},fp=ri("bm"),Ql=ri("m"),hp=ri("bu"),dp=ri("u"),nh=ri("bum"),Oa=ri("um"),pp=ri("sp"),mp=ri("rtg"),_p=ri("rtc");function gp(n,t=ze){Fa("ec",n,t)}const vp=Symbol.for("v-ndc");function ga(n,t,e,i){let s;const r=e,a=Ut(n);if(a||_e(n)){const o=a&&Yi(n);let l=!1,c=!1;o&&(l=!cn(n),c=ii(n),n=Da(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=t(l?c?As(En(n[u])):En(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r)}else if(te(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>t(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Vo=n=>n?Eh(n)?Ga(n):Vo(n.parent):null,rr=be(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Vo(n.parent),$root:n=>Vo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>sh(n),$forceUpdate:n=>n.f||(n.f=()=>{Jl(n.update)}),$nextTick:n=>n.n||(n.n=Zd.bind(n.proxy)),$watch:n=>ip.bind(n)}),eo=(n,t)=>n!==oe&&!n.__isScriptSetup&&Qt(n,t),xp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(eo(i,t))return a[t]=1,i[t];if(s!==oe&&Qt(s,t))return a[t]=2,s[t];if(Qt(r,t))return a[t]=3,r[t];if(e!==oe&&Qt(e,t))return a[t]=4,e[t];ko&&(a[t]=0)}}const c=rr[t];let u,f;if(c)return t==="$attrs"&&Ce(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[t]))return u;if(e!==oe&&Qt(e,t))return a[t]=4,e[t];if(f=l.config.globalProperties,Qt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return eo(s,t)?(s[t]=e,!0):i!==oe&&Qt(i,t)?(i[t]=e,!0):Qt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(e[o]||n!==oe&&o[0]!=="$"&&Qt(n,o)||eo(t,o)||Qt(r,o)||Qt(i,o)||Qt(rr,o)||Qt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Qt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Nc(n){return Ut(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let ko=!0;function Mp(n){const t=sh(n),e=n.proxy,i=n.ctx;ko=!1,t.beforeCreate&&Fc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:A,destroyed:T,unmounted:M,render:U,renderTracked:C,renderTriggered:L,errorCaptured:N,serverPrefetch:y,expose:S,inheritAttrs:R,components:I,directives:z,filters:j}=t;if(c&&Sp(c,i,null),a)for(const tt in a){const V=a[tt];Gt(V)&&(i[tt]=V.bind(e))}if(s){const tt=s.call(e,e);te(tt)&&(n.data=xr(tt))}if(ko=!0,r)for(const tt in r){const V=r[tt],mt=Gt(V)?V.bind(e,e):Gt(V.get)?V.get.bind(e,e):In,at=!Gt(V)&&Gt(V.set)?V.set.bind(e):In,lt=ya({get:mt,set:at});Object.defineProperty(i,tt,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Ct=>lt.value=Ct})}if(o)for(const tt in o)ih(o[tt],i,e,tt);if(l){const tt=Gt(l)?l.call(e):l;Reflect.ownKeys(tt).forEach(V=>{tp(V,tt[V])})}u&&Fc(u,n,"c");function $(tt,V){Ut(V)?V.forEach(mt=>tt(mt.bind(e))):V&&tt(V.bind(e))}if($(fp,f),$(Ql,d),$(hp,p),$(dp,g),$(lp,x),$(cp,m),$(gp,N),$(_p,C),$(mp,L),$(nh,A),$(Oa,M),$(pp,y),Ut(S))if(S.length){const tt=n.exposed||(n.exposed={});S.forEach(V=>{Object.defineProperty(tt,V,{get:()=>e[V],set:mt=>e[V]=mt,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===In&&(n.render=U),R!=null&&(n.inheritAttrs=R),I&&(n.components=I),z&&(n.directives=z),y&&th(n)}function Sp(n,t,e=In){Ut(n)&&(n=Wo(n));for(const i in n){const s=n[i];let r;te(s)?"default"in s?r=sa(s.from||i,s.default,!0):r=sa(s.from||i):r=sa(s),Pe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function Fc(n,t,e){un(Ut(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ih(n,t,e,i){let s=i.includes(".")?qf(e,i):()=>e[i];if(_e(n)){const r=t[n];Gt(r)&&Qa(s,r)}else if(Gt(n))Qa(s,n.bind(e));else if(te(n))if(Ut(n))n.forEach(r=>ih(r,t,e,i));else{const r=Gt(n.handler)?n.handler.bind(e):t[n.handler];Gt(r)&&Qa(s,r,n)}}function sh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>va(l,c,a,!0)),va(l,t,a)),te(t)&&r.set(t,l),l}function va(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&va(n,r,e,!0),s&&s.forEach(a=>va(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=yp[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const yp={data:Oc,props:Bc,emits:Bc,methods:js,computed:js,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:js,directives:js,watch:bp,provide:Oc,inject:Ep};function Oc(n,t){return t?n?function(){return be(Gt(n)?n.call(this,this):n,Gt(t)?t.call(this,this):t)}:t:n}function Ep(n,t){return js(Wo(n),Wo(t))}function Wo(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ue(n,t){return n?[...new Set([].concat(n,t))]:t}function js(n,t){return n?be(Object.create(null),n,t):t}function Bc(n,t){return n?Ut(n)&&Ut(t)?[...new Set([...n,...t])]:be(Object.create(null),Nc(n),Nc(t??{})):t}function bp(n,t){if(!n)return t;if(!t)return n;const e=be(Object.create(null),n);for(const i in t)e[i]=Ue(n[i],t[i]);return e}function rh(){return{app:null,config:{isNativeTag:_f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tp=0;function Ap(n,t){return function(i,s=null){Gt(i)||(i=be({},i)),s!=null&&!te(s)&&(s=null);const r=rh(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Tp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:am,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&Gt(u.install)?(a.add(u),u.install(c,...f)):Gt(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||pe(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Ga(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(un(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Es;Es=c;try{return u()}finally{Es=f}}};return c}}let Es=null;const wp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Mn(t)}Modifiers`]||n[`${ji(t)}Modifiers`];function Rp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||oe;let s=e;const r=t.startsWith("update:"),a=r&&wp(i,t.slice(7));a&&(a.trim&&(s=e.map(u=>_e(u)?u.trim():u)),a.number&&(s=e.map(dd)));let o,l=i[o=qa(t)]||i[o=qa(Mn(t))];!l&&r&&(l=i[o=qa(ji(t))]),l&&un(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,un(c,n,6,s)}}const Cp=new WeakMap;function ah(n,t,e=!1){const i=e?Cp:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Gt(n)){const l=c=>{const u=ah(c,t,!0);u&&(o=!0,be(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(te(n)&&i.set(n,null),null):(Ut(r)?r.forEach(l=>a[l]=null):be(a,r),te(n)&&i.set(n,a),a)}function Ba(n,t){return!n||!wa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Qt(n,t[0].toLowerCase()+t.slice(1))||Qt(n,ji(t))||Qt(n,t))}function zc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:x}=n,m=ma(n);let h,A;try{if(e.shapeFlag&4){const M=s||i,U=M;h=Cn(c.call(U,M,u,f,p,d,g)),A=o}else{const M=t;h=Cn(M.length>1?M(f,{attrs:o,slots:a,emit:l}):M(f,null)),A=t.props?o:Pp(o)}}catch(M){ar.length=0,Ia(M,n,1),h=pe(Be)}let T=h;if(A&&x!==!1){const M=Object.keys(A),{shapeFlag:U}=T;M.length&&U&7&&(r&&M.some(Ra)&&(A=Lp(A,r)),T=Mi(T,A,!1,!0))}return e.dirs&&(T=Mi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition&&hr(T,e.transition),h=T,ma(m),h}const Pp=n=>{let t;for(const e in n)(e==="class"||e==="style"||wa(e))&&((t||(t={}))[e]=n[e]);return t},Lp=(n,t)=>{const e={};for(const i in n)(!Ra(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Dp(n,t,e){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Gc(i,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(oh(a,i,d)&&!Ba(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Gc(i,a,c):!0:!!a;return!1}function Gc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(oh(t,n,r)&&!Ba(e,r))return!0}return!1}function oh(n,t,e){const i=n[e],s=t[e];return e==="style"&&te(i)&&te(s)?!kl(i,s):i!==s}function Ip({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const lh={},ch=()=>Object.create(lh),uh=n=>Object.getPrototypeOf(n)===lh;function Up(n,t,e,i=!1){const s={},r=ch();n.propsDefaults=Object.create(null),fh(n,t,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=i?s:Hd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Np(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=jt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ba(n.emitsOptions,d))continue;const p=t[d];if(l)if(Qt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Mn(d);s[g]=Xo(l,o,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{fh(n,t,s,r)&&(c=!0);let u;for(const f in o)(!t||!Qt(t,f)&&((u=ji(f))===f||!Qt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=Xo(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!t||!Qt(t,f))&&(delete r[f],c=!0)}c&&Kn(n.attrs,"set","")}function fh(n,t,e,i){const[s,r]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(tr(l))continue;const c=t[l];let u;s&&Qt(s,u=Mn(l))?!r||!r.includes(u)?e[u]=c:(o||(o={}))[u]=c:Ba(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=jt(e),c=o||oe;for(let u=0;u<r.length;u++){const f=r[u];e[f]=Xo(s,l,f,c[f],n,!Qt(c,f))}}return a}function Xo(n,t,e,i,s,r){const a=n[e];if(a!=null){const o=Qt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Gt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Sr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ji(e))&&(i=!0))}return i}const Fp=new WeakMap;function hh(n,t,e=!1){const i=e?Fp:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Gt(n)){const u=f=>{l=!0;const[d,p]=hh(f,t,!0);be(a,d),p&&o.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return te(n)&&i.set(n,Ms),Ms;if(Ut(r))for(let u=0;u<r.length;u++){const f=Mn(r[u]);Hc(f)&&(a[f]=oe)}else if(r)for(const u in r){const f=Mn(u);if(Hc(f)){const d=r[u],p=a[f]=Ut(d)||Gt(d)?{type:d}:be({},d),g=p.type;let x=!1,m=!0;if(Ut(g))for(let h=0;h<g.length;++h){const A=g[h],T=Gt(A)&&A.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(m=!1)}else x=Gt(g)&&g.name==="Boolean";p[0]=x,p[1]=m,(x||Qt(p,"default"))&&o.push(f)}}const c=[a,o];return te(n)&&i.set(n,c),c}function Hc(n){return n[0]!=="$"&&!tr(n)}const tc=n=>n==="_"||n==="_ctx"||n==="$stable",ec=n=>Ut(n)?n.map(Cn):[Cn(n)],Op=(n,t,e)=>{if(t._n)return t;const i=Ua((...s)=>ec(t(...s)),e);return i._c=!1,i},dh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(tc(s))continue;const r=n[s];if(Gt(r))t[s]=Op(s,r,i);else if(r!=null){const a=ec(r);t[s]=()=>a}}},ph=(n,t)=>{const e=ec(t);n.slots.default=()=>e},mh=(n,t,e)=>{for(const i in t)(e||!tc(i))&&(n[i]=t[i])},Bp=(n,t,e)=>{const i=n.slots=ch();if(n.vnode.shapeFlag&32){const s=t._;s?(mh(i,t,e),e&&yf(i,"_",s,!0)):dh(t,i)}else t&&ph(n,t)},zp=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,a=oe;if(i.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:mh(s,t,e):(r=!t.$stable,dh(t,s)),a=t}else t&&(ph(n,t),a={default:1});if(r)for(const o in s)!tc(o)&&a[o]==null&&delete s[o]},Ve=Wp;function Gp(n){return Hp(n)}function Hp(n,t){const e=Pa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=In,insertStaticContent:g}=n,x=(w,D,b,it=null,K=null,q=null,Q=void 0,rt=null,Z=!!D.dynamicChildren)=>{if(w===D)return;w&&!Oi(w,D)&&(it=gt(w),Ct(w,K,q,!0),w=null),D.patchFlag===-2&&(Z=!1,D.dynamicChildren=null);const{type:v,ref:_,shapeFlag:P}=D;switch(v){case za:m(w,D,b,it);break;case Be:h(w,D,b,it);break;case ra:w==null&&A(D,b,it,Q);break;case We:I(w,D,b,it,K,q,Q,rt,Z);break;default:P&1?U(w,D,b,it,K,q,Q,rt,Z):P&6?z(w,D,b,it,K,q,Q,rt,Z):(P&64||P&128)&&v.process(w,D,b,it,K,q,Q,rt,Z,Bt)}_!=null&&K?ir(_,w&&w.ref,q,D||w,!D):_==null&&w&&w.ref!=null&&ir(w.ref,null,q,w,!0)},m=(w,D,b,it)=>{if(w==null)i(D.el=o(D.children),b,it);else{const K=D.el=w.el;D.children!==w.children&&c(K,D.children)}},h=(w,D,b,it)=>{w==null?i(D.el=l(D.children||""),b,it):D.el=w.el},A=(w,D,b,it)=>{[w.el,w.anchor]=g(w.children,D,b,it,w.el,w.anchor)},T=({el:w,anchor:D},b,it)=>{let K;for(;w&&w!==D;)K=d(w),i(w,b,it),w=K;i(D,b,it)},M=({el:w,anchor:D})=>{let b;for(;w&&w!==D;)b=d(w),s(w),w=b;s(D)},U=(w,D,b,it,K,q,Q,rt,Z)=>{if(D.type==="svg"?Q="svg":D.type==="math"&&(Q="mathml"),w==null)C(D,b,it,K,q,Q,rt,Z);else{const v=w.el&&w.el._isVueCE?w.el:null;try{v&&v._beginPatch(),y(w,D,K,q,Q,rt,Z)}finally{v&&v._endPatch()}}},C=(w,D,b,it,K,q,Q,rt)=>{let Z,v;const{props:_,shapeFlag:P,transition:H,dirs:W}=w;if(Z=w.el=a(w.type,q,_&&_.is,_),P&8?u(Z,w.children):P&16&&N(w.children,Z,null,it,K,no(w,q),Q,rt),W&&bi(w,null,it,"created"),L(Z,w,w.scopeId,Q,it),_){for(const pt in _)pt!=="value"&&!tr(pt)&&r(Z,pt,null,_[pt],q,it);"value"in _&&r(Z,"value",null,_.value,q),(v=_.onVnodeBeforeMount)&&An(v,it,w)}W&&bi(w,null,it,"beforeMount");const k=Vp(K,H);k&&H.beforeEnter(Z),i(Z,D,b),((v=_&&_.onVnodeMounted)||k||W)&&Ve(()=>{try{v&&An(v,it,w),k&&H.enter(Z),W&&bi(w,null,it,"mounted")}finally{}},K)},L=(w,D,b,it,K)=>{if(b&&p(w,b),it)for(let q=0;q<it.length;q++)p(w,it[q]);if(K){let q=K.subTree;if(D===q||xh(q.type)&&(q.ssContent===D||q.ssFallback===D)){const Q=K.vnode;L(w,Q,Q.scopeId,Q.slotScopeIds,K.parent)}}},N=(w,D,b,it,K,q,Q,rt,Z=0)=>{for(let v=Z;v<w.length;v++){const _=w[v]=rt?$n(w[v]):Cn(w[v]);x(null,_,D,b,it,K,q,Q,rt)}},y=(w,D,b,it,K,q,Q)=>{const rt=D.el=w.el;let{patchFlag:Z,dynamicChildren:v,dirs:_}=D;Z|=w.patchFlag&16;const P=w.props||oe,H=D.props||oe;let W;if(b&&Ti(b,!1),(W=H.onVnodeBeforeUpdate)&&An(W,b,D,w),_&&bi(D,w,b,"beforeUpdate"),b&&Ti(b,!0),(P.innerHTML&&H.innerHTML==null||P.textContent&&H.textContent==null)&&u(rt,""),v?S(w.dynamicChildren,v,rt,b,it,no(D,K),q):Q||V(w,D,rt,null,b,it,no(D,K),q,!1),Z>0){if(Z&16)R(rt,P,H,b,K);else if(Z&2&&P.class!==H.class&&r(rt,"class",null,H.class,K),Z&4&&r(rt,"style",P.style,H.style,K),Z&8){const k=D.dynamicProps;for(let pt=0;pt<k.length;pt++){const ot=k[pt],ht=P[ot],Dt=H[ot];(Dt!==ht||ot==="value")&&r(rt,ot,ht,Dt,K,b)}}Z&1&&w.children!==D.children&&u(rt,D.children)}else!Q&&v==null&&R(rt,P,H,b,K);((W=H.onVnodeUpdated)||_)&&Ve(()=>{W&&An(W,b,D,w),_&&bi(D,w,b,"updated")},it)},S=(w,D,b,it,K,q,Q)=>{for(let rt=0;rt<D.length;rt++){const Z=w[rt],v=D[rt],_=Z.el&&(Z.type===We||!Oi(Z,v)||Z.shapeFlag&198)?f(Z.el):b;x(Z,v,_,null,it,K,q,Q,!0)}},R=(w,D,b,it,K)=>{if(D!==b){if(D!==oe)for(const q in D)!tr(q)&&!(q in b)&&r(w,q,D[q],null,K,it);for(const q in b){if(tr(q))continue;const Q=b[q],rt=D[q];Q!==rt&&q!=="value"&&r(w,q,rt,Q,K,it)}"value"in b&&r(w,"value",D.value,b.value,K)}},I=(w,D,b,it,K,q,Q,rt,Z)=>{const v=D.el=w?w.el:o(""),_=D.anchor=w?w.anchor:o("");let{patchFlag:P,dynamicChildren:H,slotScopeIds:W}=D;W&&(rt=rt?rt.concat(W):W),w==null?(i(v,b,it),i(_,b,it),N(D.children||[],b,_,K,q,Q,rt,Z)):P>0&&P&64&&H&&w.dynamicChildren&&w.dynamicChildren.length===H.length?(S(w.dynamicChildren,H,b,K,q,Q,rt),(D.key!=null||K&&D===K.subTree)&&_h(w,D,!0)):V(w,D,b,_,K,q,Q,rt,Z)},z=(w,D,b,it,K,q,Q,rt,Z)=>{D.slotScopeIds=rt,w==null?D.shapeFlag&512?K.ctx.activate(D,b,it,Q,Z):j(D,b,it,K,q,Q,Z):et(w,D,Z)},j=(w,D,b,it,K,q,Q)=>{const rt=w.component=Qp(w,it,K);if(Na(w)&&(rt.ctx.renderer=Bt),tm(rt,!1,Q),rt.asyncDep){if(K&&K.registerDep(rt,$,Q),!w.el){const Z=rt.subTree=pe(Be);h(null,Z,D,b),w.placeholder=Z.el}}else $(rt,w,D,b,K,q,Q)},et=(w,D,b)=>{const it=D.component=w.component;if(Dp(w,D,b))if(it.asyncDep&&!it.asyncResolved){tt(it,D,b);return}else it.next=D,it.update();else D.el=w.el,it.vnode=D},$=(w,D,b,it,K,q,Q)=>{const rt=()=>{if(w.isMounted){let{next:P,bu:H,u:W,parent:k,vnode:pt}=w;{const xt=gh(w);if(xt){P&&(P.el=pt.el,tt(w,P,Q)),xt.asyncDep.then(()=>{Ve(()=>{w.isUnmounted||v()},K)});return}}let ot=P,ht;Ti(w,!1),P?(P.el=pt.el,tt(w,P,Q)):P=pt,H&&$a(H),(ht=P.props&&P.props.onVnodeBeforeUpdate)&&An(ht,k,P,pt),Ti(w,!0);const Dt=zc(w),ct=w.subTree;w.subTree=Dt,x(ct,Dt,f(ct.el),gt(ct),w,K,q),P.el=Dt.el,ot===null&&Ip(w,Dt.el),W&&Ve(W,K),(ht=P.props&&P.props.onVnodeUpdated)&&Ve(()=>An(ht,k,P,pt),K)}else{let P;const{el:H,props:W}=D,{bm:k,m:pt,parent:ot,root:ht,type:Dt}=w,ct=sr(D);Ti(w,!1),k&&$a(k),!ct&&(P=W&&W.onVnodeBeforeMount)&&An(P,ot,D),Ti(w,!0);{ht.ce&&ht.ce._hasShadowRoot()&&ht.ce._injectChildStyle(Dt,w.parent?w.parent.type:void 0);const xt=w.subTree=zc(w);x(null,xt,b,it,w,K,q),D.el=xt.el}if(pt&&Ve(pt,K),!ct&&(P=W&&W.onVnodeMounted)){const xt=D;Ve(()=>An(P,ot,xt),K)}(D.shapeFlag&256||ot&&sr(ot.vnode)&&ot.vnode.shapeFlag&256)&&w.a&&Ve(w.a,K),w.isMounted=!0,D=b=it=null}};w.scope.on();const Z=w.effect=new Af(rt);w.scope.off();const v=w.update=Z.run.bind(Z),_=w.job=Z.runIfDirty.bind(Z);_.i=w,_.id=w.uid,Z.scheduler=()=>Jl(_),Ti(w,!0),v()},tt=(w,D,b)=>{D.component=w;const it=w.vnode.props;w.vnode=D,w.next=null,Np(w,D.props,it,b),zp(w,D.children,b),ei(),Pc(w),ni()},V=(w,D,b,it,K,q,Q,rt,Z=!1)=>{const v=w&&w.children,_=w?w.shapeFlag:0,P=D.children,{patchFlag:H,shapeFlag:W}=D;if(H>0){if(H&128){at(v,P,b,it,K,q,Q,rt,Z);return}else if(H&256){mt(v,P,b,it,K,q,Q,rt,Z);return}}W&8?(_&16&&bt(v,K,q),P!==v&&u(b,P)):_&16?W&16?at(v,P,b,it,K,q,Q,rt,Z):bt(v,K,q,!0):(_&8&&u(b,""),W&16&&N(P,b,it,K,q,Q,rt,Z))},mt=(w,D,b,it,K,q,Q,rt,Z)=>{w=w||Ms,D=D||Ms;const v=w.length,_=D.length,P=Math.min(v,_);let H;for(H=0;H<P;H++){const W=D[H]=Z?$n(D[H]):Cn(D[H]);x(w[H],W,b,null,K,q,Q,rt,Z)}v>_?bt(w,K,q,!0,!1,P):N(D,b,it,K,q,Q,rt,Z,P)},at=(w,D,b,it,K,q,Q,rt,Z)=>{let v=0;const _=D.length;let P=w.length-1,H=_-1;for(;v<=P&&v<=H;){const W=w[v],k=D[v]=Z?$n(D[v]):Cn(D[v]);if(Oi(W,k))x(W,k,b,null,K,q,Q,rt,Z);else break;v++}for(;v<=P&&v<=H;){const W=w[P],k=D[H]=Z?$n(D[H]):Cn(D[H]);if(Oi(W,k))x(W,k,b,null,K,q,Q,rt,Z);else break;P--,H--}if(v>P){if(v<=H){const W=H+1,k=W<_?D[W].el:it;for(;v<=H;)x(null,D[v]=Z?$n(D[v]):Cn(D[v]),b,k,K,q,Q,rt,Z),v++}}else if(v>H)for(;v<=P;)Ct(w[v],K,q,!0),v++;else{const W=v,k=v,pt=new Map;for(v=k;v<=H;v++){const _t=D[v]=Z?$n(D[v]):Cn(D[v]);_t.key!=null&&pt.set(_t.key,v)}let ot,ht=0;const Dt=H-k+1;let ct=!1,xt=0;const Pt=new Array(Dt);for(v=0;v<Dt;v++)Pt[v]=0;for(v=W;v<=P;v++){const _t=w[v];if(ht>=Dt){Ct(_t,K,q,!0);continue}let Ft;if(_t.key!=null)Ft=pt.get(_t.key);else for(ot=k;ot<=H;ot++)if(Pt[ot-k]===0&&Oi(_t,D[ot])){Ft=ot;break}Ft===void 0?Ct(_t,K,q,!0):(Pt[Ft-k]=v+1,Ft>=xt?xt=Ft:ct=!0,x(_t,D[Ft],b,null,K,q,Q,rt,Z),ht++)}const It=ct?kp(Pt):Ms;for(ot=It.length-1,v=Dt-1;v>=0;v--){const _t=k+v,Ft=D[_t],zt=D[_t+1],ee=_t+1<_?zt.el||vh(zt):it;Pt[v]===0?x(null,Ft,b,ee,K,q,Q,rt,Z):ct&&(ot<0||v!==It[ot]?lt(Ft,b,ee,2):ot--)}}},lt=(w,D,b,it,K=null)=>{const{el:q,type:Q,transition:rt,children:Z,shapeFlag:v}=w;if(v&6){lt(w.component.subTree,D,b,it);return}if(v&128){w.suspense.move(D,b,it);return}if(v&64){Q.move(w,D,b,Bt);return}if(Q===We){i(q,D,b);for(let P=0;P<Z.length;P++)lt(Z[P],D,b,it);i(w.anchor,D,b);return}if(Q===ra){T(w,D,b);return}if(it!==2&&v&1&&rt)if(it===0)rt.persisted&&!q[rn]?i(q,D,b):(rt.beforeEnter(q),i(q,D,b),Ve(()=>rt.enter(q),K));else{const{leave:P,delayLeave:H,afterLeave:W}=rt,k=()=>{w.ctx.isUnmounted?s(q):i(q,D,b)},pt=()=>{const ot=q._isLeaving||!!q[rn];q._isLeaving&&q[rn](!0),rt.persisted&&!ot?k():P(q,()=>{k(),W&&W()})};H?H(q,k,pt):pt()}else i(q,D,b)},Ct=(w,D,b,it=!1,K=!1)=>{const{type:q,props:Q,ref:rt,children:Z,dynamicChildren:v,shapeFlag:_,patchFlag:P,dirs:H,cacheIndex:W,memo:k}=w;if(P===-2&&(K=!1),rt!=null&&(ei(),ir(rt,null,b,w,!0),ni()),W!=null&&(D.renderCache[W]=void 0),_&256){D.ctx.deactivate(w);return}const pt=_&1&&H,ot=!sr(w);let ht;if(ot&&(ht=Q&&Q.onVnodeBeforeUnmount)&&An(ht,D,w),_&6)ut(w.component,b,it);else{if(_&128){w.suspense.unmount(b,it);return}pt&&bi(w,null,D,"beforeUnmount"),_&64?w.type.remove(w,D,b,Bt,it):v&&!v.hasOnce&&(q!==We||P>0&&P&64)?bt(v,D,b,!1,!0):(q===We&&P&384||!K&&_&16)&&bt(Z,D,b),it&&$t(w)}const Dt=k!=null&&W==null;(ot&&(ht=Q&&Q.onVnodeUnmounted)||pt||Dt)&&Ve(()=>{ht&&An(ht,D,w),pt&&bi(w,null,D,"unmounted"),Dt&&(w.el=null)},b)},$t=w=>{const{type:D,el:b,anchor:it,transition:K}=w;if(D===We){nt(b,it);return}if(D===ra){M(w);return}const q=()=>{s(b),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(w.shapeFlag&1&&K&&!K.persisted){const{leave:Q,delayLeave:rt}=K,Z=()=>Q(b,q);rt?rt(w.el,q,Z):Z()}else q()},nt=(w,D)=>{let b;for(;w!==D;)b=d(w),s(w),w=b;s(D)},ut=(w,D,b)=>{const{bum:it,scope:K,job:q,subTree:Q,um:rt,m:Z,a:v}=w;Vc(Z),Vc(v),it&&$a(it),K.stop(),q&&(q.flags|=8,Ct(Q,w,D,b)),rt&&Ve(rt,D),Ve(()=>{w.isUnmounted=!0},D)},bt=(w,D,b,it=!1,K=!1,q=0)=>{for(let Q=q;Q<w.length;Q++)Ct(w[Q],D,b,it,K)},gt=w=>{if(w.shapeFlag&6)return gt(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const D=d(w.anchor||w.el),b=D&&D[sp];return b?d(b):D};let Lt=!1;const Nt=(w,D,b)=>{let it;w==null?D._vnode&&(Ct(D._vnode,null,null,!0),it=D._vnode.component):x(D._vnode||null,w,D,null,null,null,b),D._vnode=w,Lt||(Lt=!0,Pc(it),kf(),Lt=!1)},Bt={p:x,um:Ct,m:lt,r:$t,mt:j,mc:N,pc:V,pbc:S,n:gt,o:n};return{render:Nt,hydrate:void 0,createApp:Ap(Nt)}}function no({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ti({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Vp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function _h(n,t,e=!1){const i=n.children,s=t.children;if(Ut(i)&&Ut(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=$n(s[r]),o.el=a.el),!e&&o.patchFlag!==-2&&_h(a,o)),o.type===za&&(o.patchFlag===-1&&(o=s[r]=$n(o)),o.el=a.el),o.type===Be&&!o.el&&(o.el=a.el)}}function kp(n){const t=n.slice(),e=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,n[e[o]]<c?r=o+1:a=o;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}function gh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gh(t)}function Vc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function vh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?vh(t.subTree):null}const xh=n=>n.__isSuspense;function Wp(n,t){t&&t.pendingBranch?Ut(n)?t.effects.push(...n):t.effects.push(n):Qd(n)}const We=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),Be=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),ar=[];let Qe=null;function se(n=!1){ar.push(Qe=n?null:[])}function Xp(){ar.pop(),Qe=ar[ar.length-1]||null}let dr=1;function xa(n,t=!1){dr+=n,n<0&&Qe&&t&&(Qe.hasOnce=!0)}function Mh(n){return n.dynamicChildren=dr>0?Qe||Ms:null,Xp(),dr>0&&Qe&&Qe.push(n),n}function ue(n,t,e,i,s,r){return Mh(ft(n,t,e,i,s,r,!0))}function nc(n,t,e,i,s){return Mh(pe(n,t,e,i,s,!0))}function Ma(n){return n?n.__v_isVNode===!0:!1}function Oi(n,t){return n.type===t.type&&n.key===t.key}const Sh=({key:n})=>n??null,aa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?_e(n)||Pe(n)||Gt(n)?{i:ln,r:n,k:t,f:!!e}:n:null);function ft(n,t=null,e=null,i=0,s=null,r=n===We?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Sh(t),ref:t&&aa(t),scopeId:Xf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ln};return o?(ic(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=_e(e)?8:16),dr>0&&!a&&Qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Qe.push(l),l}const pe=Yp;function Yp(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===vp)&&(n=Be),Ma(n)){const o=Mi(n,t,!0);return e&&ic(o,e),dr>0&&!r&&Qe&&(o.shapeFlag&6?Qe[Qe.indexOf(n)]=o:Qe.push(o)),o.patchFlag=-2,o}if(sm(n)&&(n=n.__vccOpts),t){t=qp(t);let{class:o,style:l}=t;o&&!_e(o)&&(t.class=Un(o)),te(l)&&(jl(l)&&!Ut(l)&&(l=be({},l)),t.style=La(l))}const a=_e(n)?1:xh(n)?128:$f(n)?64:te(n)?4:Gt(n)?2:0;return ft(n,t,e,i,s,a,r,!0)}function qp(n){return n?jl(n)||uh(n)?be({},n):n:null}function Mi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=t?jp(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Sh(c),ref:t&&t.ref?e&&r?Ut(r)?r.concat(aa(t)):[r,aa(t)]:aa(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==We?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Mi(n.ssContent),ssFallback:n.ssFallback&&Mi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&hr(u,l.clone(u)),u}function $p(n=" ",t=0){return pe(za,null,n,t)}function Kp(n,t){const e=pe(ra,null,n);return e.staticCount=t,e}function Xe(n="",t=!1){return t?(se(),nc(Be,null,n)):pe(Be,null,n)}function Cn(n){return n==null||typeof n=="boolean"?pe(Be):Ut(n)?pe(We,null,n.slice()):Ma(n)?$n(n):pe(za,null,String(n))}function $n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Mi(n)}function ic(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ut(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ic(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!uh(t)?t._ctx=ln:s===3&&ln&&(ln.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Gt(t)?(t={default:t,_ctx:ln},e=32):(t=String(t),i&64?(e=16,t=[$p(t)]):e=8);n.children=t,n.shapeFlag|=e}function jp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Un([t.class,i.class]));else if(s==="style")t.style=La([t.style,i.style]);else if(wa(s)){const r=t[s],a=i[s];a&&r!==a&&!(Ut(r)&&r.includes(a))?t[s]=r?[].concat(r,a):a:a==null&&r==null&&!Ra(s)&&(t[s]=a)}else s!==""&&(t[s]=i[s])}return t}function An(n,t,e,i=null){un(n,t,7,[e,i])}const Zp=rh();let Jp=0;function Qp(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Zp,r={uid:Jp++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hh(i,s),emitsOptions:ah(i,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:i.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Rp.bind(null,r),n.ce&&n.ce(r),r}let ze=null;const yh=()=>ze||ln;let Sa,Yo;{const n=Pa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Sa=t("__VUE_INSTANCE_SETTERS__",e=>ze=e),Yo=t("__VUE_SSR_SETTERS__",e=>pr=e)}const Sr=n=>{const t=ze;return Sa(n),n.scope.on(),()=>{n.scope.off(),Sa(t)}},kc=()=>{ze&&ze.scope.off(),Sa(null)};function Eh(n){return n.vnode.shapeFlag&4}let pr=!1;function tm(n,t=!1,e=!1){t&&Yo(t);const{props:i,children:s}=n.vnode,r=Eh(n);Up(n,i,r,t),Bp(n,s,e||t);const a=r?em(n,t):void 0;return t&&Yo(!1),a}function em(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,xp);const{setup:i}=e;if(i){ei();const s=n.setupContext=i.length>1?im(n):null,r=Sr(n),a=Mr(i,n,0,[n.props,s]),o=vf(a);if(ni(),r(),(o||n.sp)&&!sr(n)&&th(n),o){if(a.then(kc,kc),t)return a.then(l=>{Wc(n,l)}).catch(l=>{Ia(l,n,0)});n.asyncDep=a}else Wc(n,a)}else bh(n)}function Wc(n,t,e){Gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:te(t)&&(n.setupState=Gf(t)),bh(n)}function bh(n,t,e){const i=n.type;n.render||(n.render=i.render||In);{const s=Sr(n);ei();try{Mp(n)}finally{ni(),s()}}}const nm={get(n,t){return Ce(n,"get",""),n[t]}};function im(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,nm),slots:n.slots,emit:n.emit,expose:t}}function Ga(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Gf(Vd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in rr)return rr[e](n)},has(t,e){return e in t||e in rr}})):n.proxy}function sm(n){return Gt(n)&&"__vccOpts"in n}const ya=(n,t)=>qd(n,t,pr);function rm(n,t,e){try{xa(-1);const i=arguments.length;return i===2?te(t)&&!Ut(t)?Ma(t)?pe(n,null,[t]):pe(n,t):pe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ma(e)&&(e=[e]),pe(n,t,e))}finally{xa(1)}}const am="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qo;const Xc=typeof window<"u"&&window.trustedTypes;if(Xc)try{qo=Xc.createPolicy("vue",{createHTML:n=>n})}catch{}const Th=qo?n=>qo.createHTML(n):n=>n,om="http://www.w3.org/2000/svg",lm="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,Yc=qn&&qn.createElement("template"),cm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?qn.createElementNS(om,n):t==="mathml"?qn.createElementNS(lm,n):e?qn.createElement(n,{is:e}):qn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>qn.createTextNode(n),createComment:n=>qn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>qn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Yc.innerHTML=Th(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Yc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},li="transition",Hs="animation",mr=Symbol("_vtc"),Ah={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},um=be({},Kf,Ah),fm=n=>(n.displayName="Transition",n.props=um,n),sc=fm((n,{slots:t})=>rm(op,hm(n),t)),Ai=(n,t=[])=>{Ut(n)?n.forEach(e=>e(...t)):n&&n(...t)},qc=n=>n?Ut(n)?n.some(t=>t.length>1):n.length>1:!1;function hm(n){const t={};for(const I in n)I in Ah||(t[I]=n[I]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:a=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,g=dm(s),x=g&&g[0],m=g&&g[1],{onBeforeEnter:h,onEnter:A,onEnterCancelled:T,onLeave:M,onLeaveCancelled:U,onBeforeAppear:C=h,onAppear:L=A,onAppearCancelled:N=T}=t,y=(I,z,j,et)=>{I._enterCancelled=et,wi(I,z?u:o),wi(I,z?c:a),j&&j()},S=(I,z)=>{I._isLeaving=!1,wi(I,f),wi(I,p),wi(I,d),z&&z()},R=I=>(z,j)=>{const et=I?L:A,$=()=>y(z,I,j);Ai(et,[z,$]),$c(()=>{wi(z,I?l:r),Gn(z,I?u:o),qc(et)||Kc(z,i,x,$)})};return be(t,{onBeforeEnter(I){Ai(h,[I]),Gn(I,r),Gn(I,a)},onBeforeAppear(I){Ai(C,[I]),Gn(I,l),Gn(I,c)},onEnter:R(!1),onAppear:R(!0),onLeave(I,z){I._isLeaving=!0;const j=()=>S(I,z);Gn(I,f),I._enterCancelled?(Gn(I,d),Jc(I)):(Jc(I),Gn(I,d)),$c(()=>{I._isLeaving&&(wi(I,f),Gn(I,p),qc(M)||Kc(I,i,m,j))}),Ai(M,[I,j])},onEnterCancelled(I){y(I,!1,void 0,!0),Ai(T,[I])},onAppearCancelled(I){y(I,!0,void 0,!0),Ai(N,[I])},onLeaveCancelled(I){S(I),Ai(U,[I])}})}function dm(n){if(n==null)return null;if(te(n))return[io(n.enter),io(n.leave)];{const t=io(n);return[t,t]}}function io(n){return pd(n)}function Gn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[mr]||(n[mr]=new Set)).add(t)}function wi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[mr];e&&(e.delete(t),e.size||(n[mr]=void 0))}function $c(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let pm=0;function Kc(n,t,e,i){const s=n._endId=++pm,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:a,timeout:o,propCount:l}=mm(n,t);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,d),r()},d=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,d)}function mm(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${li}Delay`),r=i(`${li}Duration`),a=jc(s,r),o=i(`${Hs}Delay`),l=i(`${Hs}Duration`),c=jc(o,l);let u=null,f=0,d=0;t===li?a>0&&(u=li,f=a,d=r.length):t===Hs?c>0&&(u=Hs,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?li:Hs:null,d=u?u===li?r.length:l.length:0);const p=u===li&&/\b(?:transform|all)(?:,|$)/.test(i(`${li}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function jc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Zc(e)+Zc(n[i])))}function Zc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Jc(n){return(n?n.ownerDocument:document).body.offsetHeight}function _m(n,t,e){const i=n[mr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Ea=Symbol("_vod"),wh=Symbol("_vsh"),Qc={name:"show",beforeMount(n,{value:t},{transition:e}){n[Ea]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Vs(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Vs(n,!0),i.enter(n)):i.leave(n,()=>{Vs(n,!1)}):Vs(n,t))},beforeUnmount(n,{value:t}){Vs(n,t)}};function Vs(n,t){n.style.display=t?n[Ea]:"none",n[wh]=!t}const gm=Symbol(""),vm=/(?:^|;)\s*display\s*:/;function xm(n,t,e){const i=n.style,s=_e(e);let r=!1;if(e&&!s){if(t)if(_e(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&Zs(i,o,"")}else for(const a in t)e[a]==null&&Zs(i,a,"");for(const a in e){a==="display"&&(r=!0);const o=e[a];o!=null?Sm(n,a,!_e(t)&&t?t[a]:void 0,o)||Zs(i,a,o):Zs(i,a,"")}}else if(s){if(t!==e){const a=i[gm];a&&(e+=";"+a),i.cssText=e,r=vm.test(e)}}else t&&n.removeAttribute("style");Ea in n&&(n[Ea]=r?i.display:"",n[wh]&&(i.display="none"))}const tu=/\s*!important$/;function Zs(n,t,e){if(Ut(e))e.forEach(i=>Zs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Mm(n,t);tu.test(e)?n.setProperty(ji(i),e.replace(tu,""),"important"):n[i]=e}}const eu=["Webkit","Moz","ms"],so={};function Mm(n,t){const e=so[t];if(e)return e;let i=Mn(t);if(i!=="filter"&&i in n)return so[t]=i;i=Sf(i);for(let s=0;s<eu.length;s++){const r=eu[s]+i;if(r in n)return so[t]=r}return t}function Sm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&_e(i)&&e===i}const nu="http://www.w3.org/1999/xlink";function iu(n,t,e,i,s,r=Md(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(nu,t.slice(6,t.length)):n.setAttributeNS(nu,t,e):e==null||r&&!Ef(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Nn(e)?String(e):e)}function su(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Th(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=Ef(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function ym(n,t,e,i){n.addEventListener(t,e,i)}function Em(n,t,e,i){n.removeEventListener(t,e,i)}const ru=Symbol("_vei");function bm(n,t,e,i,s=null){const r=n[ru]||(n[ru]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=Tm(t);if(i){const c=r[t]=Rm(i,s);ym(n,o,c,l)}else a&&(Em(n,o,a,l),r[t]=void 0)}}const au=/(?:Once|Passive|Capture)$/;function Tm(n){let t;if(au.test(n)){t={};let i;for(;i=n.match(au);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ji(n.slice(2)),t]}let ro=0;const Am=Promise.resolve(),wm=()=>ro||(Am.then(()=>ro=0),ro=Date.now());function Rm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ut(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&un(c,t,5,o)}}else un(s,t,5,[i])};return e.value=n,e.attached=wm(),e}const ou=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Cm=(n,t,e,i,s,r)=>{const a=s==="svg";t==="class"?_m(n,i,a):t==="style"?xm(n,e,i):wa(t)?Ra(t)||bm(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pm(n,t,i,a))?(su(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&iu(n,t,i,a,r,t!=="value")):n._isVueCE&&(Lm(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!_e(i)))?su(n,Mn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),iu(n,t,i,a))};function Pm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&ou(t)&&Gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ou(t)&&_e(e)?!1:t in n}function Lm(n,t){const e=n._def.props;if(!e)return!1;const i=Mn(t);return Array.isArray(e)?e.some(s=>Mn(s)===i):Object.keys(e).some(s=>Mn(s)===i)}const Dm=["ctrl","shift","alt","meta"],Im={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Dm.some(e=>n[`${e}Key`]&&!t.includes(e))},$o=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let a=0;a<t.length;a++){const o=Im[t[a]];if(o&&o(s,t))return}return n(s,...r)}))},Um=be({patchProp:Cm},cm);let lu;function Nm(){return lu||(lu=Gp(Um))}const Fm=((...n)=>{const t=Nm().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Bm(i);if(!s)return;const r=t._component;!Gt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,Om(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function Om(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Bm(n){return _e(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="170",zm=0,cu=1,Gm=2,Rh=1,Hm=2,Yn=3,Si=0,Ye=1,Je=2,vi=0,qi=1,_i=2,uu=3,fu=4,Vm=5,Bi=100,km=101,Wm=102,Xm=103,Ym=104,qm=200,$m=201,Km=202,jm=203,Ko=204,jo=205,Zm=206,Jm=207,Qm=208,t_=209,e_=210,n_=211,i_=212,s_=213,r_=214,Zo=0,Jo=1,Qo=2,ws=3,tl=4,el=5,nl=6,il=7,Ch=0,a_=1,o_=2,xi=0,l_=1,c_=2,u_=3,f_=4,h_=5,d_=6,p_=7,Ph=300,Rs=301,Cs=302,sl=303,rl=304,Ha=306,al=1e3,Vi=1001,ol=1002,yn=1003,m_=1004,Lr=1005,Dn=1006,ao=1007,ki=1008,si=1009,Lh=1010,Dh=1011,_r=1012,ac=1013,$i=1014,Zn=1015,yr=1016,oc=1017,lc=1018,Ps=1020,Ih=35902,Uh=1021,Nh=1022,xn=1023,Fh=1024,Oh=1025,bs=1026,Ls=1027,Bh=1028,cc=1029,zh=1030,uc=1031,fc=1033,oa=33776,la=33777,ca=33778,ua=33779,ll=35840,cl=35841,ul=35842,fl=35843,hl=36196,dl=37492,pl=37496,ml=37808,_l=37809,gl=37810,vl=37811,xl=37812,Ml=37813,Sl=37814,yl=37815,El=37816,bl=37817,Tl=37818,Al=37819,wl=37820,Rl=37821,fa=36492,Cl=36494,Pl=36495,Gh=36283,Ll=36284,Dl=36285,Il=36286,__=3200,g_=3201,v_=0,x_=1,gi="",ke="srgb",Is="srgb-linear",Va="linear",re="srgb",Qi=7680,hu=519,M_=512,S_=513,y_=514,Hh=515,E_=516,b_=517,T_=518,A_=519,Ul=35044,du="300 es",Jn=2e3,ba=2001;class Us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pu=1234567;const or=Math.PI/180,gr=180/Math.PI;function Qn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function Oe(n,t,e){return Math.max(t,Math.min(e,n))}function hc(n,t){return(n%t+t)%t}function w_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function R_(n,t,e){return n!==t?(e-n)/(t-n):0}function lr(n,t,e){return(1-e)*n+e*t}function C_(n,t,e,i){return lr(n,t,1-Math.exp(-e*i))}function P_(n,t=1){return t-Math.abs(hc(n,t*2)-t)}function L_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function D_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function I_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function U_(n,t){return n+Math.random()*(t-n)}function N_(n){return n*(.5-Math.random())}function F_(n){n!==void 0&&(pu=n);let t=pu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function O_(n){return n*or}function B_(n){return n*gr}function z_(n){return(n&n-1)===0&&n!==0}function G_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function H_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function V_(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),f=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const zi={DEG2RAD:or,RAD2DEG:gr,generateUUID:Qn,clamp:Oe,euclideanModulo:hc,mapLinear:w_,inverseLerp:R_,lerp:lr,damp:C_,pingpong:P_,smoothstep:L_,smootherstep:D_,randInt:I_,randFloat:U_,randFloatSpread:N_,seededRandom:F_,degToRad:O_,radToDeg:B_,isPowerOfTwo:z_,ceilPowerOfTwo:G_,floorPowerOfTwo:H_,setQuaternionFromProperEuler:V_,normalize:ie,denormalize:vn};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],h=s[6],A=s[1],T=s[4],M=s[7],U=s[2],C=s[5],L=s[8];return r[0]=a*x+o*A+l*U,r[3]=a*m+o*T+l*C,r[6]=a*h+o*M+l*L,r[1]=c*x+u*A+f*U,r[4]=c*m+u*T+f*C,r[7]=c*h+u*M+f*L,r[2]=d*x+p*A+g*U,r[5]=d*m+p*T+g*C,r[8]=d*h+p*M+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=e*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*a)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new kt;function Vh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function k_(){const n=Ta("canvas");return n.style.display="block",n}const mu={};function Js(n){n in mu||(mu[n]=!0,console.warn(n))}function W_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function X_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Y_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(n.r=ti(n.r),n.g=ti(n.g),n.b=ti(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(n.r=Ts(n.r),n.g=Ts(n.g),n.b=Ts(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===gi?Va:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const _u=[.64,.33,.3,.6,.15,.06],gu=[.2126,.7152,.0722],vu=[.3127,.329],xu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Is]:{primaries:_u,whitePoint:vu,transfer:Va,toXYZ:xu,fromXYZ:Mu,luminanceCoefficients:gu,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:_u,whitePoint:vu,transfer:re,toXYZ:xu,fromXYZ:Mu,luminanceCoefficients:gu,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let ts;class q_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=Ta("canvas")),ts.width=t.width,ts.height=t.height;const i=ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ta("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ti(e[i]/255)*255):e[i]=ti(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $_=0;class kh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function lo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?q_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K_=0;class Le extends Us{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=Vi,s=Vi,r=Dn,a=ki,o=xn,l=si,c=Le.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Qn(),this.name="",this.source=new kh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case al:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case al:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Ph;Le.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,i=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,M=(p+1)/2,U=(h+1)/2,C=(u+d)/4,L=(f+x)/4,N=(g+m)/4;return T>M&&T>U?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=C/i,r=L/i):M>U?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=C/s,r=N/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=L/r,s=N/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-x)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j_ extends Us{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Le(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends j_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wh extends Le{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z_ extends Le{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==d||c!==p||u!==g){let m=1-o;const h=l*d+c*p+u*g+f*x,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const U=Math.sqrt(T),C=Math.atan2(U,h*A);m=Math.sin(m*C)/U,o=Math.sin(o*C)/U}const M=o*A;if(l=l*m+d*M,c=c*m+p*M,u=u*m+g*M,f=f*m+x*M,m===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*p-c*d,t[e+1]=l*g+u*d+c*f-o*p,t[e+2]=c*g+u*p+o*d-l*f,t[e+3]=u*g-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Su.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return co.copy(this).projectOnVector(t),this.sub(co)}reflect(t){return this.sub(co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new G,Su=new Er;class br{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Ir.subVectors(this.max,ks),es.subVectors(t.a,ks),ns.subVectors(t.b,ks),is.subVectors(t.c,ks),ci.subVectors(ns,es),ui.subVectors(is,ns),Ri.subVectors(es,is);let e=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ri.y,Ri.x,0];return!uo(e,es,ns,is,Ir)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,es,ns,is,Ir))?!1:(Ur.crossVectors(ci,ui),e=[Ur.x,Ur.y,Ur.z],uo(e,es,ns,is,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new G,new G,new G,new G,new G,new G,new G,new G],dn=new G,Dr=new br,es=new G,ns=new G,is=new G,ci=new G,ui=new G,Ri=new G,ks=new G,Ir=new G,Ur=new G,Ci=new G;function uo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ci.fromArray(n,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const J_=new br,Ws=new G,fo=new G;class ka{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):J_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(fo)),this.expandByPoint(Ws.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new G,ho=new G,Nr=new G,fi=new G,po=new G,Fr=new G,mo=new G;class dc{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ho.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(ho);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=fi.dot(this.direction),l=-fi.dot(Nr),c=fi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*l-o,d=a*o-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ho).addScaledVector(Nr,d),p}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const i=Vn.dot(this.direction),s=Vn.dot(Vn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,i,s,r){po.subVectors(e,t),Fr.subVectors(i,t),mo.crossVectors(po,Fr);let a=this.direction.dot(mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);const l=o*this.direction.dot(Fr.crossVectors(fi,Fr));if(l<0)return null;const c=o*this.direction.dot(po.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(mo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,i,s,r,a,o,l,c,u,f,d,p,g,x,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,f,d,p,g,x,m)}set(t,e,i,s,r,a,o,l,c,u,f,d,p,g,x,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*f,g=c*u,x=c*f;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*f,g=c*u,x=c*f;e[0]=d-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+x,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Q_,t,tg)}lookAt(t,e,i){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),hi.crossVectors(i,Ke),hi.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),hi.crossVectors(i,Ke)),hi.normalize(),Or.crossVectors(Ke,hi),s[0]=hi.x,s[4]=Or.x,s[8]=Ke.x,s[1]=hi.y,s[5]=Or.y,s[9]=Ke.y,s[2]=hi.z,s[6]=Or.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],A=i[3],T=i[7],M=i[11],U=i[15],C=s[0],L=s[4],N=s[8],y=s[12],S=s[1],R=s[5],I=s[9],z=s[13],j=s[2],et=s[6],$=s[10],tt=s[14],V=s[3],mt=s[7],at=s[11],lt=s[15];return r[0]=a*C+o*S+l*j+c*V,r[4]=a*L+o*R+l*et+c*mt,r[8]=a*N+o*I+l*$+c*at,r[12]=a*y+o*z+l*tt+c*lt,r[1]=u*C+f*S+d*j+p*V,r[5]=u*L+f*R+d*et+p*mt,r[9]=u*N+f*I+d*$+p*at,r[13]=u*y+f*z+d*tt+p*lt,r[2]=g*C+x*S+m*j+h*V,r[6]=g*L+x*R+m*et+h*mt,r[10]=g*N+x*I+m*$+h*at,r[14]=g*y+x*z+m*tt+h*lt,r[3]=A*C+T*S+M*j+U*V,r[7]=A*L+T*R+M*et+U*mt,r[11]=A*N+T*I+M*$+U*at,r[15]=A*y+T*z+M*tt+U*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],h=t[15];return g*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*p-i*l*p)+x*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+e*c*f-e*o*p-r*a*f+i*a*p+r*o*u-i*c*u)+h*(-s*o*u-e*l*f+e*o*d+s*a*f-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],h=t[15],A=f*m*c-x*d*c+x*l*p-o*m*p-f*l*h+o*d*h,T=g*d*c-u*m*c-g*l*p+a*m*p+u*l*h-a*d*h,M=u*x*c-g*f*c+g*o*p-a*x*p-u*o*h+a*f*h,U=g*f*l-u*x*l-g*o*d+a*x*d+u*o*m-a*f*m,C=e*A+i*T+s*M+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=A*L,t[1]=(x*d*r-f*m*r-x*s*p+i*m*p+f*s*h-i*d*h)*L,t[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*h+i*l*h)*L,t[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*p-i*l*p)*L,t[4]=T*L,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*h+e*d*h)*L,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*h-e*l*h)*L,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*p+e*l*p)*L,t[8]=M*L,t[9]=(g*f*r-u*x*r-g*i*p+e*x*p+u*i*h-e*f*h)*L,t[10]=(a*x*r-g*o*r+g*i*c-e*x*c-a*i*h+e*o*h)*L,t[11]=(u*o*r-a*f*r-u*i*c+e*f*c+a*i*p-e*o*p)*L,t[12]=U*L,t[13]=(u*x*s-g*f*s+g*i*d-e*x*d-u*i*m+e*f*m)*L,t[14]=(g*o*s-a*x*s-g*i*l+e*x*l+a*i*m-e*o*m)*L,t[15]=(a*f*s-u*o*s+u*i*l-e*f*l-a*i*d+e*o*d)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,g=r*f,x=a*u,m=a*f,h=o*f,A=l*c,T=l*u,M=l*f,U=i.x,C=i.y,L=i.z;return s[0]=(1-(x+h))*U,s[1]=(p+M)*U,s[2]=(g-T)*U,s[3]=0,s[4]=(p-M)*C,s[5]=(1-(d+h))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+T)*L,s[9]=(m-A)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/r,u=1/a,f=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Jn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let p,g;if(o===Jn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ba)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Jn){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(a-r),d=(e+t)*c,p=(i+s)*u;let g,x;if(o===Jn)g=(a+r)*f,x=-2*f;else if(o===ba)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ss=new G,pn=new ge,Q_=new G(0,0,0),tg=new G(1,1,1),hi=new G,Or=new G,Ke=new G,yu=new ge,Eu=new Er;class bn{constructor(t=0,e=0,i=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eg=0;const bu=new G,rs=new Er,kn=new ge,Br=new G,Xs=new G,ng=new G,ig=new Er,Tu=new G(1,0,0),Au=new G(0,1,0),wu=new G(0,0,1),Ru={type:"added"},sg={type:"removed"},as={type:"childadded",child:null},_o={type:"childremoved",child:null};class Ge extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new G,e=new bn,i=new Er,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new kt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Tu,t)}rotateY(t){return this.rotateOnAxis(Au,t)}rotateZ(t){return this.rotateOnAxis(wu,t)}translateOnAxis(t,e){return bu.copy(t).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tu,t)}translateY(t){return this.translateOnAxis(Au,t)}translateZ(t){return this.translateOnAxis(wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Br.copy(t):Br.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Xs,Br,this.up):kn.lookAt(Br,Xs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(kn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ru),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sg),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ru),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new G(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new G,Wn=new G,go=new G,Xn=new G,os=new G,ls=new G,Cu=new G,vo=new G,xo=new G,Mo=new G,So=new xe,yo=new xe,Eo=new xe;class on{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){mn.subVectors(s,e),Wn.subVectors(i,e),go.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Wn),l=mn.dot(go),c=Wn.dot(Wn),u=Wn.dot(go),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return So.setScalar(0),yo.setScalar(0),Eo.setScalar(0),So.fromBufferAttribute(t,e),yo.fromBufferAttribute(t,i),Eo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(So,r.x),a.addScaledVector(yo,r.y),a.addScaledVector(Eo,r.z),a}static isFrontFacing(t,e,i,s){return mn.subVectors(i,e),Wn.subVectors(t,e),mn.cross(Wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),mn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,i),ls.subVectors(r,i),vo.subVectors(t,i);const l=os.dot(vo),c=ls.dot(vo);if(l<=0&&c<=0)return e.copy(i);xo.subVectors(t,s);const u=os.dot(xo),f=ls.dot(xo);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(os,a);Mo.subVectors(t,r);const p=os.dot(Mo),g=ls.dot(Mo);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ls,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Cu.subVectors(r,s),o=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(Cu,o);const h=1/(m+x+d);return a=x*h,o=d*h,e.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},zr={h:0,s:0,l:0};function bo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=hc(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=bo(a,r,t+1/3),this.g=bo(a,r,t),this.b=bo(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const i=Xh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Yt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Oe(Re.r*255,0,255))*65536+Math.round(Oe(Re.g*255,0,255))*256+Math.round(Oe(Re.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,s=Re.g,r=Re.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=ke){Yt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,s=Re.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(zr);const i=lr(di.h,zr.h,e),s=lr(di.s,zr.s,e),r=lr(di.l,zr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new qt;qt.NAMES=Xh;let rg=0;class Ns extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Qn(),this.name="",this.blending=qi,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=jo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ko&&(i.blendSrc=this.blendSrc),this.blendDst!==jo&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _n extends Ns{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new G,Gr=new Xt;class tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ul,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),t}}class Yh extends tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class qh extends tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class De extends tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ag=0;const sn=new ge,To=new Ge,cs=new G,je=new br,Ys=new br,Ee=new G;class qe extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?qh:Yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(je.min,Ys.min),je.expandByPoint(Ee),Ee.addVectors(je.max,Ys.max),je.expandByPoint(Ee)):(je.expandByPoint(Ys.min),je.expandByPoint(Ys.max))}je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ee.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(t,c),Ee.add(cs)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new G,l[N]=new G;const c=new G,u=new G,f=new G,d=new Xt,p=new Xt,g=new Xt,x=new G,m=new G;function h(N,y,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,S),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[N].add(x),o[y].add(x),o[S].add(x),l[N].add(m),l[y].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let N=0,y=A.length;N<y;++N){const S=A[N],R=S.start,I=S.count;for(let z=R,j=R+I;z<j;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const T=new G,M=new G,U=new G,C=new G;function L(N){U.fromBufferAttribute(s,N),C.copy(U);const y=o[N];T.copy(y),T.sub(U.multiplyScalar(U.dot(y))).normalize(),M.crossVectors(C,y);const R=M.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,R)}for(let N=0,y=A.length;N<y;++N){const S=A[N],R=S.start,I=S.count;for(let z=R,j=R+I;z<j;z+=3)L(t.getX(z+0)),L(t.getX(z+1)),L(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new tn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new ge,Pi=new dc,Hr=new ka,Lu=new G,Vr=new G,kr=new G,Wr=new G,Ao=new G,Xr=new G,Du=new G,Yr=new G;class me extends Ge{constructor(t=new qe,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Ao.fromBufferAttribute(f,t),a?Xr.addScaledVector(Ao,u):Xr.addScaledVector(Ao.sub(e),u))}e.add(Xr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Hr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Hr,Lu)===null||Pi.origin.distanceToSquared(Lu)>(t.far-t.near)**2))&&(Pu.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Pu),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,U=T;M<U;M+=3){const C=o.getX(M),L=o.getX(M+1),N=o.getX(M+2);s=qr(this,h,t,i,c,u,f,C,L,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const A=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=qr(this,a,t,i,c,u,f,A,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,U=T;M<U;M+=3){const C=M,L=M+1,N=M+2;s=qr(this,h,t,i,c,u,f,C,L,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const A=m,T=m+1,M=m+2;s=qr(this,a,t,i,c,u,f,A,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function og(n,t,e,i,s,r,a,o){let l;if(t.side===Ye?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:n}}function qr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Vr),n.getVertexPosition(l,kr),n.getVertexPosition(c,Wr);const u=og(n,t,e,i,Vr,kr,Wr,Du);if(u){const f=new G;on.getBarycoord(Du,Vr,kr,Wr,f),s&&(u.uv=on.getInterpolatedAttribute(s,o,l,c,f,new Xt)),r&&(u.uv1=on.getInterpolatedAttribute(r,o,l,c,f,new Xt)),a&&(u.normal=on.getInterpolatedAttribute(a,o,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};on.getNormal(Vr,kr,Wr,d.normal),u.face=d,u.barycoord=f}return u}class Tr extends qe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(f,2));function g(x,m,h,A,T,M,U,C,L,N,y){const S=M/L,R=U/N,I=M/2,z=U/2,j=C/2,et=L+1,$=N+1;let tt=0,V=0;const mt=new G;for(let at=0;at<$;at++){const lt=at*R-z;for(let Ct=0;Ct<et;Ct++){const $t=Ct*S-I;mt[x]=$t*A,mt[m]=lt*T,mt[h]=j,c.push(mt.x,mt.y,mt.z),mt[x]=0,mt[m]=0,mt[h]=C>0?1:-1,u.push(mt.x,mt.y,mt.z),f.push(Ct/L),f.push(1-at/N),tt+=1}}for(let at=0;at<N;at++)for(let lt=0;lt<L;lt++){const Ct=d+lt+et*at,$t=d+lt+et*(at+1),nt=d+(lt+1)+et*(at+1),ut=d+(lt+1)+et*at;l.push(Ct,$t,ut),l.push($t,nt,ut),V+=6}o.addGroup(p,V,y),p+=V,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ne(n){const t={};for(let e=0;e<n.length;e++){const i=Ds(n[e]);for(const s in i)t[s]=i[s]}return t}function lg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $h(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const cg={clone:Ds,merge:Ne};var ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Ns{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=lg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Kh extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new G,Iu=new Xt,Uu=new Xt;class an extends Kh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Uu),e.subVectors(Uu,Iu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,fs=1;class hg extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(us,fs,t,e);s.layers=this.layers,this.add(s);const r=new an(us,fs,t,e);r.layers=this.layers,this.add(r);const a=new an(us,fs,t,e);a.layers=this.layers,this.add(a);const o=new an(us,fs,t,e);o.layers=this.layers,this.add(o);const l=new an(us,fs,t,e);l.layers=this.layers,this.add(l);const c=new an(us,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jh extends Le{constructor(t,e,i,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dg extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new jh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tr(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:vi});r.uniforms.tEquirect.value=e;const a=new me(s,r),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=Dn),new hg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const wo=new G,pg=new G,mg=new kt;class Ni{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wo.subVectors(i,e).cross(pg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||mg.getNormalMatrix(t),s=this.coplanarPoint(wo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new ka,$r=new G;class Zh{constructor(t=new Ni,e=new Ni,i=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Jn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],h=s[12],A=s[13],T=s[14],M=s[15];if(i[0].setComponents(l-r,d-c,m-p,M-h).normalize(),i[1].setComponents(l+r,d+c,m+p,M+h).normalize(),i[2].setComponents(l+a,d+u,m+g,M+A).normalize(),i[3].setComponents(l-a,d-u,m-g,M-A).normalize(),i[4].setComponents(l-o,d-f,m-x,M-T).normalize(),e===Jn)i[5].setComponents(l+o,d+f,m+x,M+T).normalize();else if(e===ba)i[5].setComponents(o,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _g(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Wa extends qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const A=h*d-a;for(let T=0;T<c;T++){const M=T*f-r;g.push(M,-A,0),x.push(0,0,1),m.push(T/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const T=A+c*h,M=A+c*(h+1),U=A+1+c*(h+1),C=A+1+c*h;p.push(T,M,C),p.push(M,U,C)}this.setIndex(p),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.width,t.height,t.widthSegments,t.heightSegments)}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
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
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
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
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gg=`#define PI 3.141592653589793
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
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vg=`vec3 transformedNormal = objectNormal;
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
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
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
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
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
#endif`,m0=`struct PhysicalMaterial {
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
}`,_0=`
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ev=`float getShadowMask() {
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
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
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
#endif`,fv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
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
}`,Ev=`#if DEPTH_PACKING == 3200
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
}`,bv=`#define DISTANCE
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
}`,Tv=`#define DISTANCE
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Pv=`#include <common>
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#define LAMBERT
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
}`,Iv=`#define LAMBERT
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
}`,Uv=`#define MATCAP
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
}`,Nv=`#define MATCAP
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
}`,Fv=`#define NORMAL
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
}`,Ov=`#define NORMAL
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
}`,Bv=`#define PHONG
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
}`,zv=`#define PHONG
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
}`,Gv=`#define STANDARD
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
}`,Hv=`#define STANDARD
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
}`,Vv=`#define TOON
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
}`,kv=`#define TOON
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
}`,Wv=`uniform float size;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,qv=`uniform vec3 color;
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
}`,$v=`uniform float rotation;
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
}`,Kv=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:gg,alphahash_pars_fragment:vg,alphamap_fragment:xg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:yg,aomap_fragment:Eg,aomap_pars_fragment:bg,batching_pars_vertex:Tg,batching_vertex:Ag,begin_vertex:wg,beginnormal_vertex:Rg,bsdfs:Cg,iridescence_fragment:Pg,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Ng,color_fragment:Fg,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:zg,common:Gg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Vg,displacementmap_pars_vertex:kg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:Yg,colorspace_fragment:qg,colorspace_pars_fragment:$g,envmap_fragment:Kg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Zg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:c0,envmap_vertex:Qg,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:r0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:o0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:f0,lights_phong_fragment:h0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:_0,lights_fragment_maps:g0,lights_fragment_end:v0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:y0,map_fragment:E0,map_pars_fragment:b0,map_particle_fragment:T0,map_particle_pars_fragment:A0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:I0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:F0,normal_pars_vertex:O0,normal_vertex:B0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:k0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:Y0,project_vertex:q0,dithering_fragment:$0,dithering_pars_fragment:K0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tv,shadowmask_pars_fragment:ev,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:sv,skinnormal_vertex:rv,specularmap_fragment:av,specularmap_pars_fragment:ov,tonemapping_fragment:lv,tonemapping_pars_fragment:cv,transmission_fragment:uv,transmission_pars_fragment:fv,uv_pars_fragment:hv,uv_pars_vertex:dv,uv_vertex:pv,worldpos_vertex:mv,background_vert:_v,background_frag:gv,backgroundCube_vert:vv,backgroundCube_frag:xv,cube_vert:Mv,cube_frag:Sv,depth_vert:yv,depth_frag:Ev,distanceRGBA_vert:bv,distanceRGBA_frag:Tv,equirect_vert:Av,equirect_frag:wv,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Pv,meshbasic_frag:Lv,meshlambert_vert:Dv,meshlambert_frag:Iv,meshmatcap_vert:Uv,meshmatcap_frag:Nv,meshnormal_vert:Fv,meshnormal_frag:Ov,meshphong_vert:Bv,meshphong_frag:zv,meshphysical_vert:Gv,meshphysical_frag:Hv,meshtoon_vert:Vv,meshtoon_frag:kv,points_vert:Wv,points_frag:Xv,shadow_vert:Yv,shadow_frag:qv,sprite_vert:$v,sprite_frag:Kv},vt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ne([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ne([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ne([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ne([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ne([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ne([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ne([vt.points,vt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ne([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ne([vt.common,vt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ne([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ne([vt.sprite,vt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ne([vt.common,vt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ne([vt.lights,vt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Pn.physical={uniforms:Ne([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Kr={r:0,b:0,g:0},Di=new bn,jv=new ge;function Zv(n,t,e,i,s,r,a){const o=new qt(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function x(A){let T=!1;const M=g(A);M===null?h(o,l):M&&M.isColor&&(h(M,1),T=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,T){const M=g(T);M&&(M.isCubeTexture||M.mapping===Ha)?(u===void 0&&(u=new me(new Tr(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Ds(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(T.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(Di)),u.material.toneMapped=Yt.getTransfer(M.colorSpace)!==re,(f!==M||d!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new me(new Wa(2,2),new yi({name:"BackgroundMaterial",uniforms:Ds(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(M.colorSpace)!==re,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,T){A.getRGB(Kr,$h(n)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:x,addToRenderList:m}}function Jv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(S,R,I,z,j){let et=!1;const $=f(z,I,R);r!==$&&(r=$,c(r.object)),et=p(S,z,I,j),et&&g(S,z,I,j),j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,M(S,R,I,z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,R,I){const z=I.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let et=j[R.id];et===void 0&&(et={},j[R.id]=et);let $=et[z];return $===void 0&&($=d(l()),et[z]=$),$}function d(S){const R=[],I=[],z=[];for(let j=0;j<e;j++)R[j]=0,I[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,R,I,z){const j=r.attributes,et=R.attributes;let $=0;const tt=I.getAttributes();for(const V in tt)if(tt[V].location>=0){const at=j[V];let lt=et[V];if(lt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),at===void 0||at.attribute!==lt||lt&&at.data!==lt.data)return!0;$++}return r.attributesNum!==$||r.index!==z}function g(S,R,I,z){const j={},et=R.attributes;let $=0;const tt=I.getAttributes();for(const V in tt)if(tt[V].location>=0){let at=et[V];at===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));const lt={};lt.attribute=at,at&&at.data&&(lt.data=at.data),j[V]=lt,$++}r.attributes=j,r.attributesNum=$,r.index=z}function x(){const S=r.newAttributes;for(let R=0,I=S.length;R<I;R++)S[R]=0}function m(S){h(S,0)}function h(S,R){const I=r.newAttributes,z=r.enabledAttributes,j=r.attributeDivisors;I[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),j[S]!==R&&(n.vertexAttribDivisor(S,R),j[S]=R)}function A(){const S=r.newAttributes,R=r.enabledAttributes;for(let I=0,z=R.length;I<z;I++)R[I]!==S[I]&&(n.disableVertexAttribArray(I),R[I]=0)}function T(S,R,I,z,j,et,$){$===!0?n.vertexAttribIPointer(S,R,I,j,et):n.vertexAttribPointer(S,R,I,z,j,et)}function M(S,R,I,z){x();const j=z.attributes,et=I.getAttributes(),$=R.defaultAttributeValues;for(const tt in et){const V=et[tt];if(V.location>=0){let mt=j[tt];if(mt===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor)),mt!==void 0){const at=mt.normalized,lt=mt.itemSize,Ct=t.get(mt);if(Ct===void 0)continue;const $t=Ct.buffer,nt=Ct.type,ut=Ct.bytesPerElement,bt=nt===n.INT||nt===n.UNSIGNED_INT||mt.gpuType===ac;if(mt.isInterleavedBufferAttribute){const gt=mt.data,Lt=gt.stride,Nt=mt.offset;if(gt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<V.locationSize;Bt++)h(V.location+Bt,gt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Bt=0;Bt<V.locationSize;Bt++)m(V.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let Bt=0;Bt<V.locationSize;Bt++)T(V.location+Bt,lt/V.locationSize,nt,at,Lt*ut,(Nt+lt/V.locationSize*Bt)*ut,bt)}else{if(mt.isInstancedBufferAttribute){for(let gt=0;gt<V.locationSize;gt++)h(V.location+gt,mt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let gt=0;gt<V.locationSize;gt++)m(V.location+gt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let gt=0;gt<V.locationSize;gt++)T(V.location+gt,lt/V.locationSize,nt,at,lt*ut,lt/V.locationSize*gt*ut,bt)}}else if($!==void 0){const at=$[tt];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(V.location,at);break;case 3:n.vertexAttrib3fv(V.location,at);break;case 4:n.vertexAttrib4fv(V.location,at);break;default:n.vertexAttrib1fv(V.location,at)}}}}A()}function U(){N();for(const S in i){const R=i[S];for(const I in R){const z=R[I];for(const j in z)u(z[j].object),delete z[j];delete R[I]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const I in R){const z=R[I];for(const j in z)u(z[j].object),delete z[j];delete R[I]}delete i[S.id]}function L(S){for(const R in i){const I=i[R];if(I[S.id]===void 0)continue;const z=I[S.id];for(const j in z)u(z[j].object),delete z[j];delete I[S.id]}}function N(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function Qv(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==xn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const N=L===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==si&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Zn&&!N)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:U,maxSamples:C}}function ex(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Ni,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,T=A*4;let M=h.clippingState||null;l.value=M,M=u(g,d,T,p);for(let U=0;U!==T;++U)M[U]=e[U];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,M=p;T!==x;++T,M+=4)a.copy(f[T]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function nx(n){let t=new WeakMap;function e(a,o){return o===sl?a.mapping=Rs:o===rl&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===sl||o===rl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dg(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class ix extends Kh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vs=4,Nu=[.125,.215,.35,.446,.526,.582],Gi=20,Ro=new ix,Fu=new qt;let Co=null,Po=0,Lo=0,Do=!1;const Fi=(1+Math.sqrt(5))/2,hs=1/Fi,Ou=[new G(-Fi,hs,0),new G(Fi,hs,0),new G(-hs,0,Fi),new G(hs,0,Fi),new G(0,Fi,-hs),new G(0,Fi,hs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Bu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Co,Po,Lo),this._renderer.xr.enabled=Do,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:yr,format:xn,colorSpace:Is,depthBuffer:!1},s=zu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(r)),this._blurMaterial=rx(r,t,e)}return s}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,Ro)}_sceneToCubeUV(t,e,i,s){const o=new an(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Fu),u.toneMapping=xi,u.autoClear=!1;const p=new _n({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new me(new Tr,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Fu),x=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const T=this._cubeSize;jr(s,A*T,h>2?T:0,T,T),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Rs||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;jr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ro)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ou[(s-r-1)%Ou.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new me(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const h=[];let A=0;for(let L=0;L<Gi;++L){const N=L/x,y=Math.exp(-N*N/2);h.push(y),L===0?A+=y:L<m&&(A+=2*y)}for(let L=0;L<h.length;L++)h[L]=h[L]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const M=this._sizeLods[s],U=3*M*(s>T-vs?s-T+vs:0),C=4*(this._cubeSize-M);jr(e,U,C,3*M,2*M),l.setRenderTarget(e),l.render(f,Ro)}}function sx(n){const t=[],e=[],i=[];let s=n;const r=n-vs+1+Nu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-vs?l=Nu[a-n+vs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,h=1,A=new Float32Array(x*g*p),T=new Float32Array(m*g*p),M=new Float32Array(h*g*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,N=C>2?0:-1,y=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];A.set(y,x*g*C),T.set(d,m*g*C);const S=[C,C,C,C,C,C];M.set(S,h*g*C)}const U=new qe;U.setAttribute("position",new tn(A,x)),U.setAttribute("uv",new tn(T,m)),U.setAttribute("faceIndex",new tn(M,h)),t.push(U),s>vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function zu(n,t,e){const i=new Ki(n,t,e);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function rx(n,t,e){const i=new Float32Array(Gi),s=new G(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Gu(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Hu(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function ax(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===sl||l===rl,u=l===Rs||l===Cs;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Bu(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Bu(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function ox(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Js("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lx(n,t,e,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,h=x.length;m<h;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,h=x.length;m<h;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let T=0,M=A.length;T<M;T+=3){const U=A[T+0],C=A[T+1],L=A[T+2];d.push(U,C,C,L,L,U)}}else if(g!==void 0){const A=g.array;x=g.version;for(let T=0,M=A.length/3-1;T<M;T+=3){const U=T+0,C=T+1,L=T+2;d.push(U,C,C,L,L,U)}}else return;const m=new(Vh(d)?qh:Yh)(d,1);m.version=x;const h=r.get(f);h&&t.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function cx(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,i,1)}function f(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,g);let h=0;for(let A=0;A<g;A++)h+=p[A]*x[A];e.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ux(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function fx(n,t,e){const i=new WeakMap,s=new xe;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let S=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let U=o.attributes.position.count*M,C=1;U>t.maxTextureSize&&(C=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const L=new Float32Array(U*C*4*f),N=new Wh(L,U,C,f);N.type=Zn,N.needsUpdate=!0;const y=M*4;for(let R=0;R<f;R++){const I=h[R],z=A[R],j=T[R],et=U*C*4*R;for(let $=0;$<I.count;$++){const tt=$*y;g===!0&&(s.fromBufferAttribute(I,$),L[et+tt+0]=s.x,L[et+tt+1]=s.y,L[et+tt+2]=s.z,L[et+tt+3]=0),x===!0&&(s.fromBufferAttribute(z,$),L[et+tt+4]=s.x,L[et+tt+5]=s.y,L[et+tt+6]=s.z,L[et+tt+7]=0),m===!0&&(s.fromBufferAttribute(j,$),L[et+tt+8]=s.x,L[et+tt+9]=s.y,L[et+tt+10]=s.z,L[et+tt+11]=j.itemSize===4?s.w:1)}}d={count:f,texture:N,size:new Xt(U,C)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function hx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Qh extends Le{constructor(t,e,i,s,r,a,o,l,c,u=bs){if(u!==bs&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===bs&&(i=$i),i===void 0&&u===Ls&&(i=Ps),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const td=new Le,Vu=new Qh(1,1),ed=new Wh,nd=new Z_,id=new jh,ku=[],Wu=[],Xu=new Float32Array(16),Yu=new Float32Array(9),qu=new Float32Array(4);function Fs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ku[s];if(r===void 0&&(r=new Float32Array(s),ku[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xa(n,t){let e=Wu[t];e===void 0&&(e=new Int32Array(t),Wu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function _x(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function gx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;qu.set(i),n.uniformMatrix2fv(this.addr,!1,qu),ye(e,i)}}function vx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Yu.set(i),n.uniformMatrix3fv(this.addr,!1,Yu),ye(e,i)}}function xx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Xu.set(i),n.uniformMatrix4fv(this.addr,!1,Xu),ye(e,i)}}function Mx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function Ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function bx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function Ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function Rx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vu.compareFunction=Hh,r=Vu):r=td,e.setTexture2D(t||r,s)}function Cx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||nd,s)}function Px(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||id,s)}function Lx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ed,s)}function Dx(n){switch(n){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return _x;case 35674:return gx;case 35675:return vx;case 35676:return xx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return yx;case 35669:case 35673:return Ex;case 5125:return bx;case 36294:return Tx;case 36295:return Ax;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}function Ix(n,t){n.uniform1fv(this.addr,t)}function Ux(n,t){const e=Fs(t,this.size,2);n.uniform2fv(this.addr,e)}function Nx(n,t){const e=Fs(t,this.size,3);n.uniform3fv(this.addr,e)}function Fx(n,t){const e=Fs(t,this.size,4);n.uniform4fv(this.addr,e)}function Ox(n,t){const e=Fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Bx(n,t){const e=Fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function zx(n,t){const e=Fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Gx(n,t){n.uniform1iv(this.addr,t)}function Hx(n,t){n.uniform2iv(this.addr,t)}function Vx(n,t){n.uniform3iv(this.addr,t)}function kx(n,t){n.uniform4iv(this.addr,t)}function Wx(n,t){n.uniform1uiv(this.addr,t)}function Xx(n,t){n.uniform2uiv(this.addr,t)}function Yx(n,t){n.uniform3uiv(this.addr,t)}function qx(n,t){n.uniform4uiv(this.addr,t)}function $x(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||td,r[a])}function Kx(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nd,r[a])}function jx(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||id,r[a])}function Zx(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ed,r[a])}function Jx(n){switch(n){case 5126:return Ix;case 35664:return Ux;case 35665:return Nx;case 35666:return Fx;case 35674:return Ox;case 35675:return Bx;case 35676:return zx;case 5124:case 35670:return Gx;case 35667:case 35671:return Hx;case 35668:case 35672:return Vx;case 35669:case 35673:return kx;case 5125:return Wx;case 36294:return Xx;case 36295:return Yx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Zx}}class Qx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dx(e.type)}}class tM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jx(e.type)}}class eM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function $u(n,t){n.seq.push(t),n.map[t.id]=t}function nM(n,t,e){const i=n.name,s=i.length;for(Io.lastIndex=0;;){const r=Io.exec(i),a=Io.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$u(e,c===void 0?new Qx(o,n,t):new tM(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new eM(o),$u(e,f)),e=f}}}class ha{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);nM(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Ku(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const iM=37297;let sM=0;function rM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const ju=new kt;function aM(n){Yt._getMatrix(ju,Yt.workingColorSpace,n);const t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Va:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rM(n.getShaderSource(t),a)}else return s}function oM(n,t){const e=aM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lM(n,t){let e;switch(t){case l_:e="Linear";break;case c_:e="Reinhard";break;case u_:e="Cineon";break;case f_:e="ACESFilmic";break;case d_:e="AgX";break;case p_:e="Neutral";break;case h_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new G;function cM(){Yt.getLuminanceCoefficients(Zr);const n=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function fM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Qs(n){return n!==""}function Ju(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(n){return n.replace(dM,mM)}const pM=new Map;function mM(n,t){let e=Wt[t];if(e===void 0){const i=pM.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}const _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(n){return n.replace(_M,gM)}function gM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ef(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function vM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function xM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case Ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function MM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function SM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ch:t="ENVMAP_BLENDING_MULTIPLY";break;case a_:t="ENVMAP_BLENDING_MIX";break;case o_:t="ENVMAP_BLENDING_ADD";break}return t}function yM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function EM(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vM(e),c=xM(e),u=MM(e),f=SM(e),d=yM(e),p=uM(e),g=fM(r),x=s.createProgram();let m,h,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),h.length>0&&(h+=`
`)):(m=[ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),h=[ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==xi?lM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,oM("linearToOutputTexel",e.outputColorSpace),cM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Nl(a),a=Ju(a,e),a=Qu(a,e),o=Nl(o),o=Ju(o,e),o=Qu(o,e),a=tf(a),o=tf(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+m+a,M=A+h+o,U=Ku(s,s.VERTEX_SHADER,T),C=Ku(s,s.FRAGMENT_SHADER,M);s.attachShader(x,U),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(R){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(U).trim(),j=s.getShaderInfoLog(C).trim();let et=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,U,C);else{const tt=Zu(s,U,"vertex"),V=Zu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+tt+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||j==="")&&($=!1);$&&(R.diagnostics={runnable:et,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:h}})}s.deleteShader(U),s.deleteShader(C),N=new ha(s,x),y=hM(s,x)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,iM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=C,this}let bM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new AM(t),e.set(t,i)),i}}class AM{constructor(t){this.id=bM++,this.code=t,this.usedTimes=0}}function wM(n,t,e,i,s,r,a){const o=new pc,l=new TM,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,I,z){const j=I.fog,et=z.geometry,$=y.isMeshStandardMaterial?I.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||$),V=tt&&tt.mapping===Ha?tt.image.height:null,mt=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const at=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,lt=at!==void 0?at.length:0;let Ct=0;et.morphAttributes.position!==void 0&&(Ct=1),et.morphAttributes.normal!==void 0&&(Ct=2),et.morphAttributes.color!==void 0&&(Ct=3);let $t,nt,ut,bt;if(mt){const ne=Pn[mt];$t=ne.vertexShader,nt=ne.fragmentShader}else $t=y.vertexShader,nt=y.fragmentShader,l.update(y),ut=l.getVertexShaderID(y),bt=l.getFragmentShaderID(y);const gt=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),Nt=z.isInstancedMesh===!0,Bt=z.isBatchedMesh===!0,de=!!y.map,w=!!y.matcap,D=!!tt,b=!!y.aoMap,it=!!y.lightMap,K=!!y.bumpMap,q=!!y.normalMap,Q=!!y.displacementMap,rt=!!y.emissiveMap,Z=!!y.metalnessMap,v=!!y.roughnessMap,_=y.anisotropy>0,P=y.clearcoat>0,H=y.dispersion>0,W=y.iridescence>0,k=y.sheen>0,pt=y.transmission>0,ot=_&&!!y.anisotropyMap,ht=P&&!!y.clearcoatMap,Dt=P&&!!y.clearcoatNormalMap,ct=P&&!!y.clearcoatRoughnessMap,xt=W&&!!y.iridescenceMap,Pt=W&&!!y.iridescenceThicknessMap,It=k&&!!y.sheenColorMap,_t=k&&!!y.sheenRoughnessMap,Ft=!!y.specularMap,zt=!!y.specularColorMap,ee=!!y.specularIntensityMap,F=pt&&!!y.transmissionMap,Mt=pt&&!!y.thicknessMap,J=!!y.gradientMap,st=!!y.alphaMap,Et=y.alphaTest>0,St=!!y.alphaHash,Ht=!!y.extensions;let ve=xi;y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Ae={shaderID:mt,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:nt,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:bt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&z._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&z.instanceColor!==null,instancingMorph:Nt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:gt===null?n.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Is,alphaToCoverage:!!y.alphaToCoverage,map:de,matcap:w,envMap:D,envMapMode:D&&tt.mapping,envMapCubeUVHeight:V,aoMap:b,lightMap:it,bumpMap:K,normalMap:q,displacementMap:d&&Q,emissiveMap:rt,normalMapObjectSpace:q&&y.normalMapType===x_,normalMapTangentSpace:q&&y.normalMapType===v_,metalnessMap:Z,roughnessMap:v,anisotropy:_,anisotropyMap:ot,clearcoat:P,clearcoatMap:ht,clearcoatNormalMap:Dt,clearcoatRoughnessMap:ct,dispersion:H,iridescence:W,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:k,sheenColorMap:It,sheenRoughnessMap:_t,specularMap:Ft,specularColorMap:zt,specularIntensityMap:ee,transmission:pt,transmissionMap:F,thicknessMap:Mt,gradientMap:J,opaque:y.transparent===!1&&y.blending===qi&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:Et,alphaHash:St,combine:y.combine,mapUv:de&&x(y.map.channel),aoMapUv:b&&x(y.aoMap.channel),lightMapUv:it&&x(y.lightMap.channel),bumpMapUv:K&&x(y.bumpMap.channel),normalMapUv:q&&x(y.normalMap.channel),displacementMapUv:Q&&x(y.displacementMap.channel),emissiveMapUv:rt&&x(y.emissiveMap.channel),metalnessMapUv:Z&&x(y.metalnessMap.channel),roughnessMapUv:v&&x(y.roughnessMap.channel),anisotropyMapUv:ot&&x(y.anisotropyMap.channel),clearcoatMapUv:ht&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(y.sheenRoughnessMap.channel),specularMapUv:Ft&&x(y.specularMap.channel),specularColorMapUv:zt&&x(y.specularColorMap.channel),specularIntensityMapUv:ee&&x(y.specularIntensityMap.channel),transmissionMapUv:F&&x(y.transmissionMap.channel),thicknessMapUv:Mt&&x(y.thicknessMap.channel),alphaMapUv:st&&x(y.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(q||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!et.attributes.uv&&(de||st),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Lt,skinning:z.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:de&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===re,decodeVideoTextureEmissive:rt&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Je,flipSided:y.side===Ye,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ht&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&y.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function h(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(A(S,y),T(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function A(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function T(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const S=g[y.type];let R;if(S){const I=Pn[S];R=cg.clone(I.uniforms)}else R=y.uniforms;return R}function U(y,S){let R;for(let I=0,z=u.length;I<z;I++){const j=u[I];if(j.cacheKey===S){R=j,++R.usedTimes;break}}return R===void 0&&(R=new EM(n,S,y,r),u.push(R)),R}function C(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function L(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:U,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:N}}function RM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function CM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function nf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function sf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,d,p,g,x,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=m),t++,h}function o(f,d,p,g,x,m){const h=a(f,d,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,d,p,g,x,m){const h=a(f,d,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||CM),i.length>1&&i.sort(d||nf),s.length>1&&s.sort(d||nf)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function PM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new sf,n.set(i,[a])):s>=r.length?(a=new sf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function LM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new qt};break;case"SpotLight":e={position:new G,direction:new G,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function DM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let IM=0;function UM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function NM(n){const t=new LM,e=DM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new ge,a=new ge;function o(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,A=0,T=0,M=0,U=0,C=0,L=0;c.sort(UM);for(let y=0,S=c.length;y<S;y++){const R=c[y],I=R.color,z=R.intensity,j=R.distance,et=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*z,f+=I.g*z,d+=I.b*z;else if(R.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(R.sh.coefficients[$],z);L++}else if(R.isDirectionalLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const tt=R.shadow,V=e.get(R);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=et,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=$,p++}else if(R.isSpotLight){const $=t.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(I).multiplyScalar(z),$.distance=j,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,i.spot[x]=$;const tt=R.shadow;if(R.map&&(i.spotLightMap[U]=R.map,U++,tt.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[x]=tt.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=et,M++}x++}else if(R.isRectAreaLight){const $=t.get(R);$.color.copy(I).multiplyScalar(z),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=$,m++}else if(R.isPointLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const tt=R.shadow,V=e.get(R);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=et,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=$,g++}else if(R.isHemisphereLight){const $=t.get(R);$.skyColor.copy(R.color).multiplyScalar(z),$.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[h]=$,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==M||N.numSpotMaps!==U||N.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=M,N.numSpotMaps=U,N.numLightProbes=L,i.version=IM++)}function l(c,u){let f=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const T=c[h];if(T.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(T.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function rf(n){const t=new NM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function FM(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new rf(n),t.set(s,[o])):r>=a.length?(o=new rf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class OM extends Ns{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=__,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class BM extends Ns{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
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
}`;function HM(n,t,e){let i=new Zh;const s=new Xt,r=new Xt,a=new xe,o=new OM({depthPacking:g_}),l=new BM,c={},u=e.maxTextureSize,f={[Si]:Ye,[Ye]:Si,[Je]:Je},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:zM,fragmentShader:GM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new me(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let h=this.type;this.render=function(C,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(vi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=h!==Yn&&this.type===Yn,j=h===Yn&&this.type!==Yn;for(let et=0,$=C.length;et<$;et++){const tt=C[et],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const mt=V.getFrameExtents();if(s.multiply(mt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,V.mapSize.y=r.y)),V.map===null||z===!0||j===!0){const lt=this.type!==Yn?{minFilter:yn,magFilter:yn}:{};V.map!==null&&V.map.dispose(),V.map=new Ki(s.x,s.y,lt),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const at=V.getViewportCount();for(let lt=0;lt<at;lt++){const Ct=V.getViewport(lt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),I.viewport(a),V.updateMatrices(tt,lt),i=V.getFrustum(),M(L,N,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Yn&&A(V,N),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(y,S,R)};function A(C,L){const N=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ki(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,N,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,N,p,x,null)}function T(C,L,N,y){let S=null;const R=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=N.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const I=S.uuid,z=L.uuid;let j=c[I];j===void 0&&(j={},c[I]=j);let et=j[z];et===void 0&&(et=S.clone(),j[z]=et,L.addEventListener("dispose",U)),S=et}if(S.visible=L.visible,S.wireframe=L.wireframe,y===Yn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=N}return S}function M(C,L,N,y,S){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Yn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const z=t.update(C),j=C.material;if(Array.isArray(j)){const et=z.groups;for(let $=0,tt=et.length;$<tt;$++){const V=et[$],mt=j[V.materialIndex];if(mt&&mt.visible){const at=T(C,mt,y,S);C.onBeforeShadow(n,C,L,N,z,at,V),n.renderBufferDirect(N,null,z,at,C,V),C.onAfterShadow(n,C,L,N,z,at,V)}}}else if(j.visible){const et=T(C,j,y,S);C.onBeforeShadow(n,C,L,N,z,et,null),n.renderBufferDirect(N,null,z,et,C,null),C.onAfterShadow(n,C,L,N,z,et,null)}}const I=C.children;for(let z=0,j=I.length;z<j;z++)M(I[z],L,N,y,S)}function U(C){C.target.removeEventListener("dispose",U);for(const N in c){const y=c[N],S=C.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const VM={[Zo]:Jo,[Qo]:nl,[tl]:il,[ws]:el,[Jo]:Zo,[nl]:Qo,[il]:tl,[el]:ws};function kM(n,t){function e(){let F=!1;const Mt=new xe;let J=null;const st=new xe(0,0,0,0);return{setMask:function(Et){J!==Et&&!F&&(n.colorMask(Et,Et,Et,Et),J=Et)},setLocked:function(Et){F=Et},setClear:function(Et,St,Ht,ve,Ae){Ae===!0&&(Et*=ve,St*=ve,Ht*=ve),Mt.set(Et,St,Ht,ve),st.equals(Mt)===!1&&(n.clearColor(Et,St,Ht,ve),st.copy(Mt))},reset:function(){F=!1,J=null,st.set(-1,0,0,0)}}}function i(){let F=!1,Mt=!1,J=null,st=null,Et=null;return{setReversed:function(St){if(Mt!==St){const Ht=t.get("EXT_clip_control");Mt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const ve=Et;Et=null,this.setClear(ve)}Mt=St},getReversed:function(){return Mt},setTest:function(St){St?gt(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(St){J!==St&&!F&&(n.depthMask(St),J=St)},setFunc:function(St){if(Mt&&(St=VM[St]),st!==St){switch(St){case Zo:n.depthFunc(n.NEVER);break;case Jo:n.depthFunc(n.ALWAYS);break;case Qo:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case tl:n.depthFunc(n.EQUAL);break;case el:n.depthFunc(n.GEQUAL);break;case nl:n.depthFunc(n.GREATER);break;case il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}st=St}},setLocked:function(St){F=St},setClear:function(St){Et!==St&&(Mt&&(St=1-St),n.clearDepth(St),Et=St)},reset:function(){F=!1,J=null,st=null,Et=null,Mt=!1}}}function s(){let F=!1,Mt=null,J=null,st=null,Et=null,St=null,Ht=null,ve=null,Ae=null;return{setTest:function(ne){F||(ne?gt(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(ne){Mt!==ne&&!F&&(n.stencilMask(ne),Mt=ne)},setFunc:function(ne,fn,On){(J!==ne||st!==fn||Et!==On)&&(n.stencilFunc(ne,fn,On),J=ne,st=fn,Et=On)},setOp:function(ne,fn,On){(St!==ne||Ht!==fn||ve!==On)&&(n.stencilOp(ne,fn,On),St=ne,Ht=fn,ve=On)},setLocked:function(ne){F=ne},setClear:function(ne){Ae!==ne&&(n.clearStencil(ne),Ae=ne)},reset:function(){F=!1,Mt=null,J=null,st=null,Et=null,St=null,Ht=null,ve=null,Ae=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,A=null,T=null,M=null,U=null,C=null,L=new qt(0,0,0),N=0,y=!1,S=null,R=null,I=null,z=null,j=null;const et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,tt=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=tt>=2);let mt=null,at={};const lt=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),$t=new xe().fromArray(lt),nt=new xe().fromArray(Ct);function ut(F,Mt,J,st){const Et=new Uint8Array(4),St=n.createTexture();n.bindTexture(F,St),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<J;Ht++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(Mt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return St}const bt={};bt[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),a.setFunc(ws),K(!1),q(cu),gt(n.CULL_FACE),b(vi);function gt(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Lt(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Nt(F,Mt){return f[F]!==Mt?(n.bindFramebuffer(F,Mt),f[F]=Mt,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Mt),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Bt(F,Mt){let J=p,st=!1;if(F){J=d.get(Mt),J===void 0&&(J=[],d.set(Mt,J));const Et=F.textures;if(J.length!==Et.length||J[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Ht=Et.length;St<Ht;St++)J[St]=n.COLOR_ATTACHMENT0+St;J.length=Et.length,st=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,st=!0);st&&n.drawBuffers(J)}function de(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const w={[Bi]:n.FUNC_ADD,[km]:n.FUNC_SUBTRACT,[Wm]:n.FUNC_REVERSE_SUBTRACT};w[Xm]=n.MIN,w[Ym]=n.MAX;const D={[qm]:n.ZERO,[$m]:n.ONE,[Km]:n.SRC_COLOR,[Ko]:n.SRC_ALPHA,[e_]:n.SRC_ALPHA_SATURATE,[Qm]:n.DST_COLOR,[Zm]:n.DST_ALPHA,[jm]:n.ONE_MINUS_SRC_COLOR,[jo]:n.ONE_MINUS_SRC_ALPHA,[t_]:n.ONE_MINUS_DST_COLOR,[Jm]:n.ONE_MINUS_DST_ALPHA,[n_]:n.CONSTANT_COLOR,[i_]:n.ONE_MINUS_CONSTANT_COLOR,[s_]:n.CONSTANT_ALPHA,[r_]:n.ONE_MINUS_CONSTANT_ALPHA};function b(F,Mt,J,st,Et,St,Ht,ve,Ae,ne){if(F===vi){x===!0&&(Lt(n.BLEND),x=!1);return}if(x===!1&&(gt(n.BLEND),x=!0),F!==Vm){if(F!==m||ne!==y){if((h!==Bi||M!==Bi)&&(n.blendEquation(n.FUNC_ADD),h=Bi,M=Bi),ne)switch(F){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _i:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _i:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}A=null,T=null,U=null,C=null,L.set(0,0,0),N=0,m=F,y=ne}return}Et=Et||Mt,St=St||J,Ht=Ht||st,(Mt!==h||Et!==M)&&(n.blendEquationSeparate(w[Mt],w[Et]),h=Mt,M=Et),(J!==A||st!==T||St!==U||Ht!==C)&&(n.blendFuncSeparate(D[J],D[st],D[St],D[Ht]),A=J,T=st,U=St,C=Ht),(ve.equals(L)===!1||Ae!==N)&&(n.blendColor(ve.r,ve.g,ve.b,Ae),L.copy(ve),N=Ae),m=F,y=!1}function it(F,Mt){F.side===Je?Lt(n.CULL_FACE):gt(n.CULL_FACE);let J=F.side===Ye;Mt&&(J=!J),K(J),F.blending===qi&&F.transparent===!1?b(vi):b(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const st=F.stencilWrite;o.setTest(st),st&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),rt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function q(F){F!==zm?(gt(n.CULL_FACE),F!==R&&(F===cu?n.cullFace(n.BACK):F===Gm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),R=F}function Q(F){F!==I&&($&&n.lineWidth(F),I=F)}function rt(F,Mt,J){F?(gt(n.POLYGON_OFFSET_FILL),(z!==Mt||j!==J)&&(n.polygonOffset(Mt,J),z=Mt,j=J)):Lt(n.POLYGON_OFFSET_FILL)}function Z(F){F?gt(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function v(F){F===void 0&&(F=n.TEXTURE0+et-1),mt!==F&&(n.activeTexture(F),mt=F)}function _(F,Mt,J){J===void 0&&(mt===null?J=n.TEXTURE0+et-1:J=mt);let st=at[J];st===void 0&&(st={type:void 0,texture:void 0},at[J]=st),(st.type!==F||st.texture!==Mt)&&(mt!==J&&(n.activeTexture(J),mt=J),n.bindTexture(F,Mt||bt[F]),st.type=F,st.texture=Mt)}function P(){const F=at[mt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(F){$t.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),$t.copy(F))}function _t(F){nt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function Ft(F,Mt){let J=c.get(Mt);J===void 0&&(J=new WeakMap,c.set(Mt,J));let st=J.get(F);st===void 0&&(st=n.getUniformBlockIndex(Mt,F.name),J.set(F,st))}function zt(F,Mt){const st=c.get(Mt).get(F);l.get(Mt)!==st&&(n.uniformBlockBinding(Mt,st,F.__bindingPointIndex),l.set(Mt,st))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},mt=null,at={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,A=null,T=null,M=null,U=null,C=null,L=new qt(0,0,0),N=0,y=!1,S=null,R=null,I=null,z=null,j=null,$t.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Lt,bindFramebuffer:Nt,drawBuffers:Bt,useProgram:de,setBlending:b,setMaterial:it,setFlipSided:K,setCullFace:q,setLineWidth:Q,setPolygonOffset:rt,setScissorTest:Z,activeTexture:v,bindTexture:_,unbindTexture:P,compressedTexImage2D:H,compressedTexImage3D:W,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:Dt,texStorage3D:ct,texSubImage2D:k,texSubImage3D:pt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ht,scissor:It,viewport:_t,reset:ee}}function af(n,t,e,i){const s=WM(i);switch(e){case Uh:return n*t;case Fh:return n*t;case Oh:return n*t*2;case Bh:return n*t/s.components*s.byteLength;case cc:return n*t/s.components*s.byteLength;case zh:return n*t*2/s.components*s.byteLength;case uc:return n*t*2/s.components*s.byteLength;case Nh:return n*t*3/s.components*s.byteLength;case xn:return n*t*4/s.components*s.byteLength;case fc:return n*t*4/s.components*s.byteLength;case oa:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ca:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cl:case fl:return Math.max(n,16)*Math.max(t,8)/4;case ll:case ul:return Math.max(n,8)*Math.max(t,8)/2;case hl:case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fa:case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Gh:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Dl:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function WM(n){switch(n){case si:case Lh:return{byteLength:1,components:1};case _r:case Dh:case yr:return{byteLength:2,components:1};case oc:case lc:return{byteLength:2,components:4};case $i:case ac:case Zn:return{byteLength:4,components:1};case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function XM(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,_){return p?new OffscreenCanvas(v,_):Ta("canvas")}function x(v,_,P){let H=1;const W=Z(v);if((W.width>P||W.height>P)&&(H=P/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const k=Math.floor(H*W.width),pt=Math.floor(H*W.height);f===void 0&&(f=g(k,pt));const ot=_?g(k,pt):f;return ot.width=k,ot.height=pt,ot.getContext("2d").drawImage(v,0,0,k,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+pt+")."),ot}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),v;return v}function m(v){return v.generateMipmaps}function h(v){n.generateMipmap(v)}function A(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(v,_,P,H,W=!1){if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let k=_;if(_===n.RED&&(P===n.FLOAT&&(k=n.R32F),P===n.HALF_FLOAT&&(k=n.R16F),P===n.UNSIGNED_BYTE&&(k=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.R8UI),P===n.UNSIGNED_SHORT&&(k=n.R16UI),P===n.UNSIGNED_INT&&(k=n.R32UI),P===n.BYTE&&(k=n.R8I),P===n.SHORT&&(k=n.R16I),P===n.INT&&(k=n.R32I)),_===n.RG&&(P===n.FLOAT&&(k=n.RG32F),P===n.HALF_FLOAT&&(k=n.RG16F),P===n.UNSIGNED_BYTE&&(k=n.RG8)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RG8UI),P===n.UNSIGNED_SHORT&&(k=n.RG16UI),P===n.UNSIGNED_INT&&(k=n.RG32UI),P===n.BYTE&&(k=n.RG8I),P===n.SHORT&&(k=n.RG16I),P===n.INT&&(k=n.RG32I)),_===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RGB8UI),P===n.UNSIGNED_SHORT&&(k=n.RGB16UI),P===n.UNSIGNED_INT&&(k=n.RGB32UI),P===n.BYTE&&(k=n.RGB8I),P===n.SHORT&&(k=n.RGB16I),P===n.INT&&(k=n.RGB32I)),_===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),P===n.UNSIGNED_INT&&(k=n.RGBA32UI),P===n.BYTE&&(k=n.RGBA8I),P===n.SHORT&&(k=n.RGBA16I),P===n.INT&&(k=n.RGBA32I)),_===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),_===n.RGBA){const pt=W?Va:Yt.getTransfer(H);P===n.FLOAT&&(k=n.RGBA32F),P===n.HALF_FLOAT&&(k=n.RGBA16F),P===n.UNSIGNED_BYTE&&(k=pt===re?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function M(v,_){let P;return v?_===null||_===$i||_===Ps?P=n.DEPTH24_STENCIL8:_===Zn?P=n.DEPTH32F_STENCIL8:_===_r&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===$i||_===Ps?P=n.DEPTH_COMPONENT24:_===Zn?P=n.DEPTH_COMPONENT32F:_===_r&&(P=n.DEPTH_COMPONENT16),P}function U(v,_){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==yn&&v.minFilter!==Dn?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function C(v){const _=v.target;_.removeEventListener("dispose",C),N(_),_.isVideoTexture&&u.delete(_)}function L(v){const _=v.target;_.removeEventListener("dispose",L),S(_)}function N(v){const _=i.get(v);if(_.__webglInit===void 0)return;const P=v.source,H=d.get(P);if(H){const W=H[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&y(v),Object.keys(H).length===0&&d.delete(P)}i.remove(v)}function y(v){const _=i.get(v);n.deleteTexture(_.__webglTexture);const P=v.source,H=d.get(P);delete H[_.__cacheKey],a.memory.textures--}function S(v){const _=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let W=0;W<_.__webglFramebuffer[H].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[H][W]);else n.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)n.deleteFramebuffer(_.__webglFramebuffer[H]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=v.textures;for(let H=0,W=P.length;H<W;H++){const k=i.get(P[H]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(P[H])}i.remove(v)}let R=0;function I(){R=0}function z(){const v=R;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),R+=1,v}function j(v){const _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.colorSpace),_.join()}function et(v,_){const P=i.get(v);if(v.isVideoTexture&&Q(v),v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){const H=v.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(P,v,_);return}}e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function $(v,_){const P=i.get(v);if(v.version>0&&P.__version!==v.version){nt(P,v,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function tt(v,_){const P=i.get(v);if(v.version>0&&P.__version!==v.version){nt(P,v,_);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function V(v,_){const P=i.get(v);if(v.version>0&&P.__version!==v.version){ut(P,v,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}const mt={[al]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},at={[yn]:n.NEAREST,[m_]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[ao]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},lt={[M_]:n.NEVER,[A_]:n.ALWAYS,[S_]:n.LESS,[Hh]:n.LEQUAL,[y_]:n.EQUAL,[T_]:n.GEQUAL,[E_]:n.GREATER,[b_]:n.NOTEQUAL};function Ct(v,_){if(_.type===Zn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Dn||_.magFilter===ao||_.magFilter===Lr||_.magFilter===ki||_.minFilter===Dn||_.minFilter===ao||_.minFilter===Lr||_.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,mt[_.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,mt[_.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,mt[_.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,at[_.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,at[_.minFilter]),_.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,lt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===yn||_.minFilter!==Lr&&_.minFilter!==ki||_.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(v,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $t(v,_){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",C));const H=_.source;let W=d.get(H);W===void 0&&(W={},d.set(H,W));const k=j(_);if(k!==v.__cacheKey){W[k]===void 0&&(W[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),W[k].usedTimes++;const pt=W[v.__cacheKey];pt!==void 0&&(W[v.__cacheKey].usedTimes--,pt.usedTimes===0&&y(_)),v.__cacheKey=k,v.__webglTexture=W[k].texture}return P}function nt(v,_,P){let H=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=n.TEXTURE_3D);const W=$t(v,_),k=_.source;e.bindTexture(H,v.__webglTexture,n.TEXTURE0+P);const pt=i.get(k);if(k.version!==pt.__version||W===!0){e.activeTexture(n.TEXTURE0+P);const ot=Yt.getPrimaries(Yt.workingColorSpace),ht=_.colorSpace===gi?null:Yt.getPrimaries(_.colorSpace),Dt=_.colorSpace===gi||ot===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ct=x(_.image,!1,s.maxTextureSize);ct=rt(_,ct);const xt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type);let It=T(_.internalFormat,xt,Pt,_.colorSpace,_.isVideoTexture);Ct(H,_);let _t;const Ft=_.mipmaps,zt=_.isVideoTexture!==!0,ee=pt.__version===void 0||W===!0,F=k.dataReady,Mt=U(_,ct);if(_.isDepthTexture)It=M(_.format===Ls,_.type),ee&&(zt?e.texStorage2D(n.TEXTURE_2D,1,It,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,It,ct.width,ct.height,0,xt,Pt,null));else if(_.isDataTexture)if(Ft.length>0){zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Mt,It,Ft[0].width,Ft[0].height);for(let J=0,st=Ft.length;J<st;J++)_t=Ft[J],zt?F&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,_t.width,_t.height,xt,Pt,_t.data):e.texImage2D(n.TEXTURE_2D,J,It,_t.width,_t.height,0,xt,Pt,_t.data);_.generateMipmaps=!1}else zt?(ee&&e.texStorage2D(n.TEXTURE_2D,Mt,It,ct.width,ct.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,xt,Pt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,It,ct.width,ct.height,0,xt,Pt,ct.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,It,Ft[0].width,Ft[0].height,ct.depth);for(let J=0,st=Ft.length;J<st;J++)if(_t=Ft[J],_.format!==xn)if(xt!==null)if(zt){if(F)if(_.layerUpdates.size>0){const Et=af(_t.width,_t.height,_.format,_.type);for(const St of _.layerUpdates){const Ht=_t.data.subarray(St*Et/_t.data.BYTES_PER_ELEMENT,(St+1)*Et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,St,_t.width,_t.height,1,xt,Ht)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_t.width,_t.height,ct.depth,xt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,It,_t.width,_t.height,ct.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_t.width,_t.height,ct.depth,xt,Pt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,It,_t.width,_t.height,ct.depth,0,xt,Pt,_t.data)}else{zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Mt,It,Ft[0].width,Ft[0].height);for(let J=0,st=Ft.length;J<st;J++)_t=Ft[J],_.format!==xn?xt!==null?zt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,J,It,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?F&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,_t.width,_t.height,xt,Pt,_t.data):e.texImage2D(n.TEXTURE_2D,J,It,_t.width,_t.height,0,xt,Pt,_t.data)}else if(_.isDataArrayTexture)if(zt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,It,ct.width,ct.height,ct.depth),F)if(_.layerUpdates.size>0){const J=af(ct.width,ct.height,_.format,_.type);for(const st of _.layerUpdates){const Et=ct.data.subarray(st*J/ct.data.BYTES_PER_ELEMENT,(st+1)*J/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,ct.width,ct.height,1,xt,Pt,Et)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,Pt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,ct.width,ct.height,ct.depth,0,xt,Pt,ct.data);else if(_.isData3DTexture)zt?(ee&&e.texStorage3D(n.TEXTURE_3D,Mt,It,ct.width,ct.height,ct.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,Pt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,It,ct.width,ct.height,ct.depth,0,xt,Pt,ct.data);else if(_.isFramebufferTexture){if(ee)if(zt)e.texStorage2D(n.TEXTURE_2D,Mt,It,ct.width,ct.height);else{let J=ct.width,st=ct.height;for(let Et=0;Et<Mt;Et++)e.texImage2D(n.TEXTURE_2D,Et,It,J,st,0,xt,Pt,null),J>>=1,st>>=1}}else if(Ft.length>0){if(zt&&ee){const J=Z(Ft[0]);e.texStorage2D(n.TEXTURE_2D,Mt,It,J.width,J.height)}for(let J=0,st=Ft.length;J<st;J++)_t=Ft[J],zt?F&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,xt,Pt,_t):e.texImage2D(n.TEXTURE_2D,J,It,xt,Pt,_t);_.generateMipmaps=!1}else if(zt){if(ee){const J=Z(ct);e.texStorage2D(n.TEXTURE_2D,Mt,It,J.width,J.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Pt,ct)}else e.texImage2D(n.TEXTURE_2D,0,It,xt,Pt,ct);m(_)&&h(H),pt.__version=k.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function ut(v,_,P){if(_.image.length!==6)return;const H=$t(v,_),W=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+P);const k=i.get(W);if(W.version!==k.__version||H===!0){e.activeTexture(n.TEXTURE0+P);const pt=Yt.getPrimaries(Yt.workingColorSpace),ot=_.colorSpace===gi?null:Yt.getPrimaries(_.colorSpace),ht=_.colorSpace===gi||pt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Dt=_.isCompressedTexture||_.image[0].isCompressedTexture,ct=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!Dt&&!ct?xt[st]=x(_.image[st],!0,s.maxCubemapSize):xt[st]=ct?_.image[st].image:_.image[st],xt[st]=rt(_,xt[st]);const Pt=xt[0],It=r.convert(_.format,_.colorSpace),_t=r.convert(_.type),Ft=T(_.internalFormat,It,_t,_.colorSpace),zt=_.isVideoTexture!==!0,ee=k.__version===void 0||H===!0,F=W.dataReady;let Mt=U(_,Pt);Ct(n.TEXTURE_CUBE_MAP,_);let J;if(Dt){zt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Ft,Pt.width,Pt.height);for(let st=0;st<6;st++){J=xt[st].mipmaps;for(let Et=0;Et<J.length;Et++){const St=J[Et];_.format!==xn?It!==null?zt?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,St.width,St.height,It,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Ft,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,St.width,St.height,It,_t,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Ft,St.width,St.height,0,It,_t,St.data)}}}else{if(J=_.mipmaps,zt&&ee){J.length>0&&Mt++;const st=Z(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Ft,st.width,st.height)}for(let st=0;st<6;st++)if(ct){zt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,It,_t,xt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,xt[st].width,xt[st].height,0,It,_t,xt[st].data);for(let Et=0;Et<J.length;Et++){const Ht=J[Et].image[st].image;zt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,Ht.width,Ht.height,It,_t,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Ft,Ht.width,Ht.height,0,It,_t,Ht.data)}}else{zt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,It,_t,xt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,It,_t,xt[st]);for(let Et=0;Et<J.length;Et++){const St=J[Et];zt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,It,_t,St.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Ft,It,_t,St.image[st])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),k.__version=W.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function bt(v,_,P,H,W,k){const pt=r.convert(P.format,P.colorSpace),ot=r.convert(P.type),ht=T(P.internalFormat,pt,ot,P.colorSpace),Dt=i.get(_),ct=i.get(P);if(ct.__renderTarget=_,!Dt.__hasExternalTextures){const xt=Math.max(1,_.width>>k),Pt=Math.max(1,_.height>>k);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,k,ht,xt,Pt,_.depth,0,pt,ot,null):e.texImage2D(W,k,ht,xt,Pt,0,pt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,v),q(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,W,ct.__webglTexture,0,K(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,W,ct.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(v,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,v),_.depthBuffer){const H=_.depthTexture,W=H&&H.isDepthTexture?H.type:null,k=M(_.stencilBuffer,W),pt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=K(_);q(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,k,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,k,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,k,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,v)}else{const H=_.textures;for(let W=0;W<H.length;W++){const k=H[W],pt=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),ht=T(k.internalFormat,pt,ot,k.colorSpace),Dt=K(_);P&&q(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,ht,_.width,_.height):q(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt,ht,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ht,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),et(_.depthTexture,0);const W=H.__webglTexture,k=K(_);if(_.depthTexture.format===bs)q(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(_.depthTexture.format===Ls)q(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Nt(v){const _=i.get(v),P=v.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==v.depthTexture){const H=v.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=H}if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Lt(_.__webglFramebuffer,v)}else if(P){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=n.createRenderbuffer(),gt(_.__webglDepthbuffer[H],v,!1);else{const W=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),gt(_.__webglDepthbuffer,v,!1);else{const H=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,W)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(v,_,P){const H=i.get(v);_!==void 0&&bt(H.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Nt(v)}function de(v){const _=v.texture,P=i.get(v),H=i.get(_);v.addEventListener("dispose",L);const W=v.textures,k=v.isWebGLCubeRenderTarget===!0,pt=W.length>1;if(pt||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=_.version,a.memory.textures++),k){P.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[ot]=[];for(let ht=0;ht<_.mipmaps.length;ht++)P.__webglFramebuffer[ot][ht]=n.createFramebuffer()}else P.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)P.__webglFramebuffer[ot]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(pt)for(let ot=0,ht=W.length;ot<ht;ot++){const Dt=i.get(W[ot]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&q(v)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ot=0;ot<W.length;ot++){const ht=W[ot];P.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ot]);const Dt=r.convert(ht.format,ht.colorSpace),ct=r.convert(ht.type),xt=T(ht.internalFormat,Dt,ct,ht.colorSpace,v.isXRRenderTarget===!0),Pt=K(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,xt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,P.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(P.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ct(n.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)bt(P.__webglFramebuffer[ot][ht],v,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else bt(P.__webglFramebuffer[ot],v,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ot=0,ht=W.length;ot<ht;ot++){const Dt=W[ot],ct=i.get(Dt);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),Ct(n.TEXTURE_2D,Dt),bt(P.__webglFramebuffer,v,Dt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Dt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ot=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,H.__webglTexture),Ct(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)bt(P.__webglFramebuffer[ht],v,_,n.COLOR_ATTACHMENT0,ot,ht);else bt(P.__webglFramebuffer,v,_,n.COLOR_ATTACHMENT0,ot,0);m(_)&&h(ot),e.unbindTexture()}v.depthBuffer&&Nt(v)}function w(v){const _=v.textures;for(let P=0,H=_.length;P<H;P++){const W=_[P];if(m(W)){const k=A(v),pt=i.get(W).__webglTexture;e.bindTexture(k,pt),h(k),e.unbindTexture()}}}const D=[],b=[];function it(v){if(v.samples>0){if(q(v)===!1){const _=v.textures,P=v.width,H=v.height;let W=n.COLOR_BUFFER_BIT;const k=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(v),ot=_.length>1;if(ot)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);const Dt=i.get(_[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Dt,0)}n.blitFramebuffer(0,0,P,H,0,0,P,H,W,n.NEAREST),l===!0&&(D.length=0,b.length=0,D.push(n.COLOR_ATTACHMENT0+ht),v.depthBuffer&&v.resolveDepthBuffer===!1&&(D.push(k),b.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);const Dt=i.get(_[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const _=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function K(v){return Math.min(s.maxSamples,v.samples)}function q(v){const _=i.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Q(v){const _=a.render.frame;u.get(v)!==_&&(u.set(v,_),v.update())}function rt(v,_){const P=v.colorSpace,H=v.format,W=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||P!==Is&&P!==gi&&(Yt.getTransfer(P)===re?(H!==xn||W!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function Z(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=et,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=Bt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=q}function YM(n,t){function e(i,s=gi){let r;const a=Yt.getTransfer(s);if(i===si)return n.UNSIGNED_BYTE;if(i===oc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ih)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return n.BYTE;if(i===Dh)return n.SHORT;if(i===_r)return n.UNSIGNED_SHORT;if(i===ac)return n.INT;if(i===$i)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===Uh)return n.ALPHA;if(i===Nh)return n.RGB;if(i===xn)return n.RGBA;if(i===Fh)return n.LUMINANCE;if(i===Oh)return n.LUMINANCE_ALPHA;if(i===bs)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===Bh)return n.RED;if(i===cc)return n.RED_INTEGER;if(i===zh)return n.RG;if(i===uc)return n.RG_INTEGER;if(i===fc)return n.RGBA_INTEGER;if(i===oa||i===la||i===ca||i===ua)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ll||i===cl||i===ul||i===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hl||i===dl||i===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hl||i===dl)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ml||i===_l||i===gl||i===vl||i===xl||i===Ml||i===Sl||i===yl||i===El||i===bl||i===Tl||i===Al||i===wl||i===Rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ml)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_l)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===El)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fa||i===Cl||i===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===fa)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===Ll||i===Dl||i===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class qM extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jr extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $M={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($M)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const KM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
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

}`;class ZM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yi({vertexShader:KM,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JM extends Us{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const x=new ZM,m=e.getContextAttributes();let h=null,A=null;const T=[],M=[],U=new Xt;let C=null;const L=new an;L.viewport=new xe;const N=new an;N.viewport=new xe;const y=[L,N],S=new qM;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=T[nt];return ut===void 0&&(ut=new Uo,T[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=T[nt];return ut===void 0&&(ut=new Uo,T[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=T[nt];return ut===void 0&&(ut=new Uo,T[nt]=ut),ut.getHandSpace()};function z(nt){const ut=M.indexOf(nt.inputSource);if(ut===-1)return;const bt=T[ut];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,c||a),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",et);for(let nt=0;nt<T.length;nt++){const ut=M[nt];ut!==null&&(M[nt]=null,T[nt].disconnect(ut))}R=null,I=null,x.reset(),t.setRenderTarget(h),p=null,d=null,f=null,s=null,A=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Ki(p.framebufferWidth,p.framebufferHeight,{format:xn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,bt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?Ls:bs,bt=m.stencil?Ps:$i);const Lt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new Ki(d.textureWidth,d.textureHeight,{format:xn,type:si,depthTexture:new Qh(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function et(nt){for(let ut=0;ut<nt.removed.length;ut++){const bt=nt.removed[ut],gt=M.indexOf(bt);gt>=0&&(M[gt]=null,T[gt].disconnect(bt))}for(let ut=0;ut<nt.added.length;ut++){const bt=nt.added[ut];let gt=M.indexOf(bt);if(gt===-1){for(let Nt=0;Nt<T.length;Nt++)if(Nt>=M.length){M.push(bt),gt=Nt;break}else if(M[Nt]===null){M[Nt]=bt,gt=Nt;break}if(gt===-1)break}const Lt=T[gt];Lt&&Lt.connect(bt)}}const $=new G,tt=new G;function V(nt,ut,bt){$.setFromMatrixPosition(ut.matrixWorld),tt.setFromMatrixPosition(bt.matrixWorld);const gt=$.distanceTo(tt),Lt=ut.projectionMatrix.elements,Nt=bt.projectionMatrix.elements,Bt=Lt[14]/(Lt[10]-1),de=Lt[14]/(Lt[10]+1),w=(Lt[9]+1)/Lt[5],D=(Lt[9]-1)/Lt[5],b=(Lt[8]-1)/Lt[0],it=(Nt[8]+1)/Nt[0],K=Bt*b,q=Bt*it,Q=gt/(-b+it),rt=Q*-b;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(rt),nt.translateZ(Q),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Lt[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Z=Bt+Q,v=de+Q,_=K-rt,P=q+(gt-rt),H=w*de/v*Z,W=D*de/v*Z;nt.projectionMatrix.makePerspective(_,P,H,W,Z,v),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function mt(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ut=nt.near,bt=nt.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),S.near=N.near=L.near=ut,S.far=N.far=L.far=bt,(R!==S.near||I!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,I=S.far),L.layers.mask=nt.layers.mask|2,N.layers.mask=nt.layers.mask|4,S.layers.mask=L.layers.mask|N.layers.mask;const gt=nt.parent,Lt=S.cameras;mt(S,gt);for(let Nt=0;Nt<Lt.length;Nt++)mt(Lt[Nt],gt);Lt.length===2?V(S,L,N):S.projectionMatrix.copy(L.projectionMatrix),at(nt,S,gt)};function at(nt,ut,bt){bt===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=gr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let lt=null;function Ct(nt,ut){if(u=ut.getViewerPose(c||a),g=ut,u!==null){const bt=u.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let gt=!1;bt.length!==S.cameras.length&&(S.cameras.length=0,gt=!0);for(let Nt=0;Nt<bt.length;Nt++){const Bt=bt[Nt];let de=null;if(p!==null)de=p.getViewport(Bt);else{const D=f.getViewSubImage(d,Bt);de=D.viewport,Nt===0&&(t.setRenderTargetTextures(A,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(A))}let w=y[Nt];w===void 0&&(w=new an,w.layers.enable(Nt),w.viewport=new xe,y[Nt]=w),w.matrix.fromArray(Bt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Bt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(de.x,de.y,de.width,de.height),Nt===0&&(S.matrix.copy(w.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),gt===!0&&S.cameras.push(w)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Nt=f.getDepthInformation(bt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let bt=0;bt<T.length;bt++){const gt=M[bt],Lt=T[bt];gt!==null&&Lt!==void 0&&Lt.update(gt,ut,c||a)}lt&&lt(nt,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}const $t=new Jh;$t.setAnimationLoop(Ct),this.setAnimationLoop=function(nt){lt=nt},this.dispose=function(){}}}const Ii=new bn,QM=new ge;function tS(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,$h(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,A,T,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,A,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ye&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ye&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=t.get(h),T=A.envMap,M=A.envMapRotation;T&&(m.envMap.value=T,Ii.copy(M),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(Ii)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=T*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ye&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const A=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eS(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const M=T.program;i.uniformBlockBinding(A,M)}function c(A,T){let M=s[A.id];M===void 0&&(g(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",m));const U=T.program;i.updateUBOMapping(A,U);const C=t.render.frame;r[A.id]!==C&&(d(A),r[A.id]=C)}function u(A){const T=f();A.__bindingPointIndex=T;const M=n.createBuffer(),U=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,U,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=s[A.id],M=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,L=M.length;C<L;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,S=N.length;y<S;y++){const R=N[y];if(p(R,C,y,U)===!0){const I=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let et=0;et<z.length;et++){const $=z[et],tt=x($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,I+j,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,j),j+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,M,U){const C=A.value,L=T+"_"+M;if(U[L]===void 0)return typeof C=="number"||typeof C=="boolean"?U[L]=C:U[L]=C.clone(),!0;{const N=U[L];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return U[L]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(A){const T=A.uniforms;let M=0;const U=16;for(let L=0,N=T.length;L<N;L++){const y=Array.isArray(T[L])?T[L]:[T[L]];for(let S=0,R=y.length;S<R;S++){const I=y[S],z=Array.isArray(I.value)?I.value:[I.value];for(let j=0,et=z.length;j<et;j++){const $=z[j],tt=x($),V=M%U,mt=V%tt.boundary,at=V+mt;M+=mt,at!==0&&U-at<tt.storage&&(M+=U-at),I.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=tt.storage}}}const C=M%U;return C>0&&(M+=U-C),A.__size=M,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class nS{constructor(t={}){const{canvas:e=k_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=xi,this.toneMappingExposure=1;const M=this;let U=!1,C=0,L=0,N=null,y=-1,S=null;const R=new xe,I=new xe;let z=null;const j=new qt(0);let et=0,$=e.width,tt=e.height,V=1,mt=null,at=null;const lt=new xe(0,0,$,tt),Ct=new xe(0,0,$,tt);let $t=!1;const nt=new Zh;let ut=!1,bt=!1;const gt=new ge,Lt=new ge,Nt=new G,Bt=new xe,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function D(){return N===null?V:1}let b=i;function it(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",St,!1),b===null){const O="webgl2";if(b=it(O,E),b===null)throw it(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let K,q,Q,rt,Z,v,_,P,H,W,k,pt,ot,ht,Dt,ct,xt,Pt,It,_t,Ft,zt,ee,F;function Mt(){K=new ox(b),K.init(),zt=new YM(b,K),q=new tx(b,K,t,zt),Q=new kM(b,K),q.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),rt=new ux(b),Z=new RM,v=new XM(b,K,Q,Z,q,zt,rt),_=new nx(M),P=new ax(M),H=new _g(b),ee=new Jv(b,H),W=new lx(b,H,rt,ee),k=new hx(b,W,H,rt),It=new fx(b,q,v),ct=new ex(Z),pt=new wM(M,_,P,K,q,ee,ct),ot=new tS(M,Z),ht=new PM,Dt=new FM(K),Pt=new Zv(M,_,P,Q,k,p,l),xt=new HM(M,k,q),F=new eS(b,rt,q,Q),_t=new Qv(b,K,rt),Ft=new cx(b,K,rt),rt.programs=pt.programs,M.capabilities=q,M.extensions=K,M.properties=Z,M.renderLists=ht,M.shadowMap=xt,M.state=Q,M.info=rt}Mt();const J=new JM(M,b);this.xr=J,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=K.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=K.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize($,tt,!1))},this.getSize=function(E){return E.set($,tt)},this.setSize=function(E,O,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,tt=O,e.width=Math.floor(E*V),e.height=Math.floor(O*V),X===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set($*V,tt*V).floor()},this.setDrawingBufferSize=function(E,O,X){$=E,tt=O,V=X,e.width=Math.floor(E*X),e.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(lt)},this.setViewport=function(E,O,X,Y){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,O,X,Y),Q.viewport(R.copy(lt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ct)},this.setScissor=function(E,O,X,Y){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,O,X,Y),Q.scissor(I.copy(Ct).multiplyScalar(V).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(E){Q.setScissorTest($t=E)},this.setOpaqueSort=function(E){mt=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(E=!0,O=!0,X=!0){let Y=0;if(E){let B=!1;if(N!==null){const dt=N.texture.format;B=dt===fc||dt===uc||dt===cc}if(B){const dt=N.texture.type,yt=dt===si||dt===$i||dt===_r||dt===Ps||dt===oc||dt===lc,Tt=Pt.getClearColor(),At=Pt.getClearAlpha(),Ot=Tt.r,Vt=Tt.g,wt=Tt.b;yt?(g[0]=Ot,g[1]=Vt,g[2]=wt,g[3]=At,b.clearBufferuiv(b.COLOR,0,g)):(x[0]=Ot,x[1]=Vt,x[2]=wt,x[3]=At,b.clearBufferiv(b.COLOR,0,x))}else Y|=b.COLOR_BUFFER_BIT}O&&(Y|=b.DEPTH_BUFFER_BIT),X&&(Y|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ht.dispose(),Dt.dispose(),Z.dispose(),_.dispose(),P.dispose(),k.dispose(),ee.dispose(),F.dispose(),pt.dispose(),J.dispose(),J.removeEventListener("sessionstart",vc),J.removeEventListener("sessionend",xc),Ei.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const E=rt.autoReset,O=xt.enabled,X=xt.autoUpdate,Y=xt.needsUpdate,B=xt.type;Mt(),rt.autoReset=E,xt.enabled=O,xt.autoUpdate=X,xt.needsUpdate=Y,xt.type=B}function St(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ht(E){const O=E.target;O.removeEventListener("dispose",Ht),ve(O)}function ve(E){Ae(E),Z.remove(E)}function Ae(E){const O=Z.get(E).programs;O!==void 0&&(O.forEach(function(X){pt.releaseProgram(X)}),E.isShaderMaterial&&pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,Y,B,dt){O===null&&(O=de);const yt=B.isMesh&&B.matrixWorld.determinant()<0,Tt=ad(E,O,X,Y,B);Q.setMaterial(Y,yt);let At=X.index,Ot=1;if(Y.wireframe===!0){if(At=W.getWireframeAttribute(X),At===void 0)return;Ot=2}const Vt=X.drawRange,wt=X.attributes.position;let Kt=Vt.start*Ot,le=(Vt.start+Vt.count)*Ot;dt!==null&&(Kt=Math.max(Kt,dt.start*Ot),le=Math.min(le,(dt.start+dt.count)*Ot)),At!==null?(Kt=Math.max(Kt,0),le=Math.min(le,At.count)):wt!=null&&(Kt=Math.max(Kt,0),le=Math.min(le,wt.count));const fe=le-Kt;if(fe<0||fe===1/0)return;ee.setup(B,Y,Tt,X,At);let He,Zt=_t;if(At!==null&&(He=H.get(At),Zt=Ft,Zt.setIndex(He)),B.isMesh)Y.wireframe===!0?(Q.setLineWidth(Y.wireframeLinewidth*D()),Zt.setMode(b.LINES)):Zt.setMode(b.TRIANGLES);else if(B.isLine){let Rt=Y.linewidth;Rt===void 0&&(Rt=1),Q.setLineWidth(Rt*D()),B.isLineSegments?Zt.setMode(b.LINES):B.isLineLoop?Zt.setMode(b.LINE_LOOP):Zt.setMode(b.LINE_STRIP)}else B.isPoints?Zt.setMode(b.POINTS):B.isSprite&&Zt.setMode(b.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Zt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Zt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Rt=B._multiDrawStarts,Bn=B._multiDrawCounts,Jt=B._multiDrawCount,hn=At?H.get(At).bytesPerElement:1,Zi=Z.get(Y).currentProgram.getUniforms();for(let $e=0;$e<Jt;$e++)Zi.setValue(b,"_gl_DrawID",$e),Zt.render(Rt[$e]/hn,Bn[$e])}else if(B.isInstancedMesh)Zt.renderInstances(Kt,fe,B.count);else if(X.isInstancedBufferGeometry){const Rt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Bn=Math.min(X.instanceCount,Rt);Zt.renderInstances(Kt,fe,Bn)}else Zt.render(Kt,fe)};function ne(E,O,X){E.transparent===!0&&E.side===Je&&E.forceSinglePass===!1?(E.side=Ye,E.needsUpdate=!0,wr(E,O,X),E.side=Si,E.needsUpdate=!0,wr(E,O,X),E.side=Je):wr(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),h=Dt.get(X),h.init(O),T.push(h),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const Y=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const dt=B.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){const Tt=dt[yt];ne(Tt,X,B),Y.add(Tt)}else ne(dt,X,B),Y.add(dt)}),T.pop(),h=null,Y},this.compileAsync=function(E,O,X=null){const Y=this.compile(E,O,X);return new Promise(B=>{function dt(){if(Y.forEach(function(yt){Z.get(yt).currentProgram.isReady()&&Y.delete(yt)}),Y.size===0){B(E);return}setTimeout(dt,10)}K.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let fn=null;function On(E){fn&&fn(E)}function vc(){Ei.stop()}function xc(){Ei.start()}const Ei=new Jh;Ei.setAnimationLoop(On),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){fn=E,J.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},J.addEventListener("sessionstart",vc),J.addEventListener("sessionend",xc),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,O,N),h=Dt.get(E,T.length),h.init(O),T.push(h),Lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),nt.setFromProjectionMatrix(Lt),bt=this.localClippingEnabled,ut=ct.init(this.clippingPlanes,bt),m=ht.get(E,A.length),m.init(),A.push(m),J.enabled===!0&&J.isPresenting===!0){const dt=M.xr.getDepthSensingMesh();dt!==null&&Ya(dt,O,-1/0,M.sortObjects)}Ya(E,O,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(mt,at),w=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,w&&Pt.addToRenderList(m,E),this.info.render.frame++,ut===!0&&ct.beginShadows();const X=h.state.shadowsArray;xt.render(X,E,O),ut===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,B=m.transmissive;if(h.setupLights(),O.isArrayCamera){const dt=O.cameras;if(B.length>0)for(let yt=0,Tt=dt.length;yt<Tt;yt++){const At=dt[yt];Sc(Y,B,E,At)}w&&Pt.render(E);for(let yt=0,Tt=dt.length;yt<Tt;yt++){const At=dt[yt];Mc(m,E,At,At.viewport)}}else B.length>0&&Sc(Y,B,E,O),w&&Pt.render(E),Mc(m,E,O);N!==null&&(v.updateMultisampleRenderTarget(N),v.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(M,E,O),ee.resetDefaultState(),y=-1,S=null,T.pop(),T.length>0?(h=T[T.length-1],ut===!0&&ct.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ya(E,O,X,Y){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||nt.intersectsSprite(E)){Y&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const yt=k.update(E),Tt=E.material;Tt.visible&&m.push(E,yt,Tt,X,Bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||nt.intersectsObject(E))){const yt=k.update(E),Tt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Bt.copy(yt.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(Tt)){const At=yt.groups;for(let Ot=0,Vt=At.length;Ot<Vt;Ot++){const wt=At[Ot],Kt=Tt[wt.materialIndex];Kt&&Kt.visible&&m.push(E,yt,Kt,X,Bt.z,wt)}}else Tt.visible&&m.push(E,yt,Tt,X,Bt.z,null)}}const dt=E.children;for(let yt=0,Tt=dt.length;yt<Tt;yt++)Ya(dt[yt],O,X,Y)}function Mc(E,O,X,Y){const B=E.opaque,dt=E.transmissive,yt=E.transparent;h.setupLightsView(X),ut===!0&&ct.setGlobalState(M.clippingPlanes,X),Y&&Q.viewport(R.copy(Y)),B.length>0&&Ar(B,O,X),dt.length>0&&Ar(dt,O,X),yt.length>0&&Ar(yt,O,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Sc(E,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Ki(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?yr:si,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const dt=h.state.transmissionRenderTarget[Y.id],yt=Y.viewport||R;dt.setSize(yt.z,yt.w);const Tt=M.getRenderTarget();M.setRenderTarget(dt),M.getClearColor(j),et=M.getClearAlpha(),et<1&&M.setClearColor(16777215,.5),M.clear(),w&&Pt.render(X);const At=M.toneMapping;M.toneMapping=xi;const Ot=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),ut===!0&&ct.setGlobalState(M.clippingPlanes,Y),Ar(E,X,Y),v.updateMultisampleRenderTarget(dt),v.updateRenderTargetMipmap(dt),K.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let wt=0,Kt=O.length;wt<Kt;wt++){const le=O[wt],fe=le.object,He=le.geometry,Zt=le.material,Rt=le.group;if(Zt.side===Je&&fe.layers.test(Y.layers)){const Bn=Zt.side;Zt.side=Ye,Zt.needsUpdate=!0,yc(fe,X,Y,He,Zt,Rt),Zt.side=Bn,Zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(v.updateMultisampleRenderTarget(dt),v.updateRenderTargetMipmap(dt))}M.setRenderTarget(Tt),M.setClearColor(j,et),Ot!==void 0&&(Y.viewport=Ot),M.toneMapping=At}function Ar(E,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,dt=E.length;B<dt;B++){const yt=E[B],Tt=yt.object,At=yt.geometry,Ot=Y===null?yt.material:Y,Vt=yt.group;Tt.layers.test(X.layers)&&yc(Tt,O,X,At,Ot,Vt)}}function yc(E,O,X,Y,B,dt){E.onBeforeRender(M,O,X,Y,B,dt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(M,O,X,Y,E,dt),B.transparent===!0&&B.side===Je&&B.forceSinglePass===!1?(B.side=Ye,B.needsUpdate=!0,M.renderBufferDirect(X,O,Y,B,E,dt),B.side=Si,B.needsUpdate=!0,M.renderBufferDirect(X,O,Y,B,E,dt),B.side=Je):M.renderBufferDirect(X,O,Y,B,E,dt),E.onAfterRender(M,O,X,Y,B,dt)}function wr(E,O,X){O.isScene!==!0&&(O=de);const Y=Z.get(E),B=h.state.lights,dt=h.state.shadowsArray,yt=B.state.version,Tt=pt.getParameters(E,B.state,dt,O,X),At=pt.getProgramCacheKey(Tt);let Ot=Y.programs;Y.environment=E.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(E.isMeshStandardMaterial?P:_).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",Ht),Ot=new Map,Y.programs=Ot);let Vt=Ot.get(At);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===yt)return bc(E,Tt),Vt}else Tt.uniforms=pt.getUniforms(E),E.onBeforeCompile(Tt,M),Vt=pt.acquireProgram(Tt,At),Ot.set(At,Vt),Y.uniforms=Tt.uniforms;const wt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=ct.uniform),bc(E,Tt),Y.needsLights=ld(E),Y.lightsStateVersion=yt,Y.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function Ec(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ha.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function bc(E,O){const X=Z.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function ad(E,O,X,Y,B){O.isScene!==!0&&(O=de),v.resetTextureUnits();const dt=O.fog,yt=Y.isMeshStandardMaterial?O.environment:null,Tt=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Is,At=(Y.isMeshStandardMaterial?P:_).get(Y.envMap||yt),Ot=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),wt=!!X.morphAttributes.position,Kt=!!X.morphAttributes.normal,le=!!X.morphAttributes.color;let fe=xi;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(fe=M.toneMapping);const He=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=He!==void 0?He.length:0,Rt=Z.get(Y),Bn=h.state.lights;if(ut===!0&&(bt===!0||E!==S)){const en=E===S&&Y.id===y;ct.setState(Y,E,en)}let Jt=!1;Y.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Bn.state.version||Rt.outputColorSpace!==Tt||B.isBatchedMesh&&Rt.batching===!1||!B.isBatchedMesh&&Rt.batching===!0||B.isBatchedMesh&&Rt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Rt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Rt.instancing===!1||!B.isInstancedMesh&&Rt.instancing===!0||B.isSkinnedMesh&&Rt.skinning===!1||!B.isSkinnedMesh&&Rt.skinning===!0||B.isInstancedMesh&&Rt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Rt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Rt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Rt.instancingMorph===!1&&B.morphTexture!==null||Rt.envMap!==At||Y.fog===!0&&Rt.fog!==dt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ct.numPlanes||Rt.numIntersection!==ct.numIntersection)||Rt.vertexAlphas!==Ot||Rt.vertexTangents!==Vt||Rt.morphTargets!==wt||Rt.morphNormals!==Kt||Rt.morphColors!==le||Rt.toneMapping!==fe||Rt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Rt.__version=Y.version);let hn=Rt.currentProgram;Jt===!0&&(hn=wr(Y,O,B));let Zi=!1,$e=!1,Os=!1;const he=hn.getUniforms(),Tn=Rt.uniforms;if(Q.useProgram(hn.program)&&(Zi=!0,$e=!0,Os=!0),Y.id!==y&&(y=Y.id,$e=!0),Zi||S!==E){Q.buffers.depth.getReversed()?(gt.copy(E.projectionMatrix),X_(gt),Y_(gt),he.setValue(b,"projectionMatrix",gt)):he.setValue(b,"projectionMatrix",E.projectionMatrix),he.setValue(b,"viewMatrix",E.matrixWorldInverse);const ai=he.map.cameraPosition;ai!==void 0&&ai.setValue(b,Nt.setFromMatrixPosition(E.matrixWorld)),q.logarithmicDepthBuffer&&he.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&he.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,$e=!0,Os=!0)}if(B.isSkinnedMesh){he.setOptional(b,B,"bindMatrix"),he.setOptional(b,B,"bindMatrixInverse");const en=B.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),he.setValue(b,"boneTexture",en.boneTexture,v))}B.isBatchedMesh&&(he.setOptional(b,B,"batchingTexture"),he.setValue(b,"batchingTexture",B._matricesTexture,v),he.setOptional(b,B,"batchingIdTexture"),he.setValue(b,"batchingIdTexture",B._indirectTexture,v),he.setOptional(b,B,"batchingColorTexture"),B._colorsTexture!==null&&he.setValue(b,"batchingColorTexture",B._colorsTexture,v));const Bs=X.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&It.update(B,X,hn),($e||Rt.receiveShadow!==B.receiveShadow)&&(Rt.receiveShadow=B.receiveShadow,he.setValue(b,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Tn.envMap.value=At,Tn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Tn.envMapIntensity.value=O.environmentIntensity),$e&&(he.setValue(b,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&od(Tn,Os),dt&&Y.fog===!0&&ot.refreshFogUniforms(Tn,dt),ot.refreshMaterialUniforms(Tn,Y,V,tt,h.state.transmissionRenderTarget[E.id]),ha.upload(b,Ec(Rt),Tn,v)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ha.upload(b,Ec(Rt),Tn,v),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&he.setValue(b,"center",B.center),he.setValue(b,"modelViewMatrix",B.modelViewMatrix),he.setValue(b,"normalMatrix",B.normalMatrix),he.setValue(b,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const en=Y.uniformsGroups;for(let ai=0,oi=en.length;ai<oi;ai++){const Tc=en[ai];F.update(Tc,hn),F.bind(Tc,hn)}}return hn}function od(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function ld(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,O,X){Z.get(E.texture).__webglTexture=O,Z.get(E.depthTexture).__webglTexture=X;const Y=Z.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const X=Z.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,X=0){N=E,C=O,L=X;let Y=!0,B=null,dt=!1,yt=!1;if(E){const At=Z.get(E);if(At.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(b.FRAMEBUFFER,null),Y=!1;else if(At.__webglFramebuffer===void 0)v.setupRenderTarget(E);else if(At.__hasExternalTextures)v.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(At.__boundDepthTexture!==wt){if(wt!==null&&Z.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(E)}}const Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(yt=!0);const Vt=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?B=Vt[O][X]:B=Vt[O],dt=!0):E.samples>0&&v.useMultisampledRTT(E)===!1?B=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?B=Vt[X]:B=Vt,R.copy(E.viewport),I.copy(E.scissor),z=E.scissorTest}else R.copy(lt).multiplyScalar(V).floor(),I.copy(Ct).multiplyScalar(V).floor(),z=$t;if(Q.bindFramebuffer(b.FRAMEBUFFER,B)&&Y&&Q.drawBuffers(E,B),Q.viewport(R),Q.scissor(I),Q.setScissorTest(z),dt){const At=Z.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,At.__webglTexture,X)}else if(yt){const At=Z.get(E.texture),Ot=O||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,At.__webglTexture,X||0,Ot)}y=-1},this.readRenderTargetPixels=function(E,O,X,Y,B,dt,yt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){Q.bindFramebuffer(b.FRAMEBUFFER,Tt);try{const At=E.texture,Ot=At.format,Vt=At.type;if(!q.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Y&&X>=0&&X<=E.height-B&&b.readPixels(O,X,Y,B,zt.convert(Ot),zt.convert(Vt),dt)}finally{const At=N!==null?Z.get(N).__webglFramebuffer:null;Q.bindFramebuffer(b.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,Y,B,dt,yt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){const At=E.texture,Ot=At.format,Vt=At.type;if(!q.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-Y&&X>=0&&X<=E.height-B){Q.bindFramebuffer(b.FRAMEBUFFER,Tt);const wt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,wt),b.bufferData(b.PIXEL_PACK_BUFFER,dt.byteLength,b.STREAM_READ),b.readPixels(O,X,Y,B,zt.convert(Ot),zt.convert(Vt),0);const Kt=N!==null?Z.get(N).__webglFramebuffer:null;Q.bindFramebuffer(b.FRAMEBUFFER,Kt);const le=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await W_(b,le,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,wt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,dt),b.deleteBuffer(wt),b.deleteSync(le),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,X=0){E.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-X),B=Math.floor(E.image.width*Y),dt=Math.floor(E.image.height*Y),yt=O!==null?O.x:0,Tt=O!==null?O.y:0;v.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,X,0,0,yt,Tt,B,dt),Q.unbindTexture()},this.copyTextureToTexture=function(E,O,X=null,Y=null,B=0){E.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,X=null);let dt,yt,Tt,At,Ot,Vt,wt,Kt,le;const fe=E.isCompressedTexture?E.mipmaps[B]:E.image;X!==null?(dt=X.max.x-X.min.x,yt=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,Ot=X.min.y,Vt=X.isBox3?X.min.z:0):(dt=fe.width,yt=fe.height,Tt=fe.depth||1,At=0,Ot=0,Vt=0),Y!==null?(wt=Y.x,Kt=Y.y,le=Y.z):(wt=0,Kt=0,le=0);const He=zt.convert(O.format),Zt=zt.convert(O.type);let Rt;O.isData3DTexture?(v.setTexture3D(O,0),Rt=b.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(v.setTexture2DArray(O,0),Rt=b.TEXTURE_2D_ARRAY):(v.setTexture2D(O,0),Rt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const Bn=b.getParameter(b.UNPACK_ROW_LENGTH),Jt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),hn=b.getParameter(b.UNPACK_SKIP_PIXELS),Zi=b.getParameter(b.UNPACK_SKIP_ROWS),$e=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,fe.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,fe.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,At),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ot),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Vt);const Os=E.isDataArrayTexture||E.isData3DTexture,he=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Tn=Z.get(E),Bs=Z.get(O),en=Z.get(Tn.__renderTarget),ai=Z.get(Bs.__renderTarget);Q.bindFramebuffer(b.READ_FRAMEBUFFER,en.__webglFramebuffer),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let oi=0;oi<Tt;oi++)Os&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,B,Vt+oi),E.isDepthTexture?(he&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Z.get(O).__webglTexture,B,le+oi),b.blitFramebuffer(At,Ot,dt,yt,wt,Kt,dt,yt,b.DEPTH_BUFFER_BIT,b.NEAREST)):he?b.copyTexSubImage3D(Rt,B,wt,Kt,le+oi,At,Ot,dt,yt):b.copyTexSubImage2D(Rt,B,wt,Kt,le+oi,At,Ot,dt,yt);Q.bindFramebuffer(b.READ_FRAMEBUFFER,null),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else he?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(Rt,B,wt,Kt,le,dt,yt,Tt,He,Zt,fe.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(Rt,B,wt,Kt,le,dt,yt,Tt,He,fe.data):b.texSubImage3D(Rt,B,wt,Kt,le,dt,yt,Tt,He,Zt,fe):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,B,wt,Kt,dt,yt,He,Zt,fe.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,B,wt,Kt,fe.width,fe.height,He,fe.data):b.texSubImage2D(b.TEXTURE_2D,B,wt,Kt,dt,yt,He,Zt,fe);b.pixelStorei(b.UNPACK_ROW_LENGTH,Bn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Jt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,hn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Zi),b.pixelStorei(b.UNPACK_SKIP_IMAGES,$e),B===0&&O.generateMipmaps&&b.generateMipmap(Rt),Q.unbindTexture()},this.copyTextureToTexture3D=function(E,O,X=null,Y=null,B=0){return E.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,X,Y,B)},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&v.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?v.setTextureCube(E,0):E.isData3DTexture?v.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?v.setTexture2DArray(E,0):v.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){C=0,L=0,N=null,Q.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class _c{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new _c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class iS extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sS{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ul,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new G;class Aa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Aa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fl extends Ns{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const qs=new G,ps=new G,ms=new G,_s=new Xt,$s=new Xt,sd=new ge,Qr=new G,Ks=new G,ta=new G,of=new Xt,No=new Xt,lf=new Xt;class cf extends Ge{constructor(t=new Fl){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sS(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Aa(i,3,0,!1)),ds.setAttribute("uv",new Aa(i,2,3,!1))}this.geometry=ds,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),sd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ea(Qr.set(-.5,-.5,0),ms,a,ps,s,r),ea(Ks.set(.5,-.5,0),ms,a,ps,s,r),ea(ta.set(.5,.5,0),ms,a,ps,s,r),of.set(0,0),No.set(1,0),lf.set(1,1);let o=t.ray.intersectTriangle(Qr,Ks,ta,!1,qs);if(o===null&&(ea(Ks.set(-.5,.5,0),ms,a,ps,s,r),No.set(0,1),o=t.ray.intersectTriangle(Qr,ta,Ks,!1,qs),o===null))return;const l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:on.getInterpolation(qs,Qr,Ks,ta,of,No,lf,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ea(n,t,e,i,s,r){_s.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?($s.x=r*_s.x-s*_s.y,$s.y=s*_s.x+r*_s.y):$s.copy(_s),n.copy(t),n.x+=$s.x,n.y+=$s.y,n.applyMatrix4(sd)}class Ol extends Ns{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uf=new ge,Bl=new dc,na=new ka,ia=new G;class ff extends Ge{constructor(t=new qe,e=new Ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;uf.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(uf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,x=p;g<x;g++){const m=c.getX(g);ia.fromBufferAttribute(f,m),hf(ia,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,x=p;g<x;g++)ia.fromBufferAttribute(f,g),hf(ia,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hf(n,t,e,i,s,r,a){const o=Bl.distanceSqToPoint(n);if(o<e){const l=new G;Bl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class xs extends qe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new G,u=new Xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const p=i+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wi extends qe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],p=[];let g=0;const x=[],m=i/2;let h=0;A(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new De(f,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(p,2));function A(){const M=new G,U=new G;let C=0;const L=(e-t)/i;for(let N=0;N<=r;N++){const y=[],S=N/r,R=S*(e-t)+t;for(let I=0;I<=s;I++){const z=I/s,j=z*l+o,et=Math.sin(j),$=Math.cos(j);U.x=R*et,U.y=-S*i+m,U.z=R*$,f.push(U.x,U.y,U.z),M.set(et,L,$).normalize(),d.push(M.x,M.y,M.z),p.push(z,1-S),y.push(g++)}x.push(y)}for(let N=0;N<s;N++)for(let y=0;y<r;y++){const S=x[y][N],R=x[y+1][N],I=x[y+1][N+1],z=x[y][N+1];(t>0||y!==0)&&(u.push(S,R,z),C+=3),(e>0||y!==r-1)&&(u.push(R,I,z),C+=3)}c.addGroup(h,C,0),h+=C}function T(M){const U=g,C=new Xt,L=new G;let N=0;const y=M===!0?t:e,S=M===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const R=g;for(let I=0;I<=s;I++){const j=I/s*l+o,et=Math.cos(j),$=Math.sin(j);L.x=y*$,L.y=m*S,L.z=y*et,f.push(L.x,L.y,L.z),d.push(0,S,0),C.x=et*.5+.5,C.y=$*.5*S+.5,p.push(C.x,C.y),g++}for(let I=0;I<s;I++){const z=U+I,j=R+I;M===!0?u.push(j,j+1,z):u.push(j+1,j,z),N+=3}c.addGroup(h,N,M===!0?1:2),h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gc extends Wi{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new gc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hi extends qe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new G,d=new G,p=[],g=[],x=[],m=[];for(let h=0;h<=i;h++){const A=[],T=h/i;let M=0;h===0&&a===0?M=.5/e:h===i&&l===Math.PI&&(M=-.5/e);for(let U=0;U<=e;U++){const C=U/e;f.x=-t*Math.cos(s+C*r)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(s+C*r)*Math.sin(a+T*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(C+M,1-T),A.push(c++)}u.push(A)}for(let h=0;h<i;h++)for(let A=0;A<e;A++){const T=u[h][A+1],M=u[h][A],U=u[h+1][A],C=u[h+1][A+1];(h!==0||a>0)&&p.push(T,M,C),(h!==i-1||l<Math.PI)&&p.push(M,U,C)}this.setIndex(p),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const df=new ge;class rS{constructor(t,e,i=0,s=1/0){this.ray=new dc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return df.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(df),this}intersectObject(t,e=!0,i=[]){return zl(t,this,i,e),i.sort(pf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,i,e);return i.sort(pf),i}}function pf(n,t){return n.distance-t.distance}function zl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)zl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);const aS="/assets/home-BIXm6qNe.png",Fn=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},oS={class:"home-screen"},lS={class:"home-content"},cS={class:"menu-buttons"},uS={key:0,class:"record-line"},fS={__name:"StartScreen",props:{bestScore:{type:Number,default:0}},emits:["start","tutorial","settings"],setup(n){return(t,e)=>(se(),ue("div",oS,[ft("div",{class:"bg-full",style:La({backgroundImage:`url(${Zl(aS)})`})},null,4),e[8]||(e[8]=ft("div",{class:"bg-overlay"},null,-1)),e[9]||(e[9]=ft("div",{class:"scanlines"},null,-1)),e[10]||(e[10]=ft("div",{class:"noise"},null,-1)),ft("div",lS,[e[6]||(e[6]=ft("div",{class:"title-block"},[ft("h1",{class:"title-main"},"奶 蛙 之 森"),ft("p",{class:"title-sub"},"— 听 声 辨 位 · 黑 暗 求 生 —")],-1)),e[7]||(e[7]=ft("div",{class:"spacer"},null,-1)),ft("div",cS,[ft("button",{class:"menu-btn",onClick:e[0]||(e[0]=i=>t.$emit("start"))},[...e[3]||(e[3]=[ft("span",{class:"btn-text"},"进 入 森 林",-1)])]),ft("button",{class:"menu-btn secondary",onClick:e[1]||(e[1]=i=>t.$emit("tutorial"))},[...e[4]||(e[4]=[ft("span",{class:"btn-text"},"新 手 教 程",-1)])]),ft("button",{class:"menu-btn secondary",onClick:e[2]||(e[2]=i=>t.$emit("settings"))},[...e[5]||(e[5]=[ft("span",{class:"btn-text"},"设 置",-1)])])]),n.bestScore>0?(se(),ue("div",uS,[ft("span",null,"★ 最佳记录 "+ae(n.bestScore)+" ★",1)])):Xe("",!0)])]))}},hS=Fn(fS,[["__scopeId","data-v-9f4f016e"]]),dS={},pS={class:"crosshair"};function mS(n,t){return se(),ue("div",pS,[...t[0]||(t[0]=[Kp('<div class="crosshair-top" data-v-2a0c6c66></div><div class="crosshair-bottom" data-v-2a0c6c66></div><div class="crosshair-left" data-v-2a0c6c66></div><div class="crosshair-right" data-v-2a0c6c66></div><div class="crosshair-dot" data-v-2a0c6c66></div>',5)])])}const _S=Fn(dS,[["render",mS],["__scopeId","data-v-2a0c6c66"]]),gS={class:"flash-container"},vS={class:"flash-label"},xS=600,MS={__name:"FireButton",emits:["fire"],setup(n,{emit:t}){const e=t,i=gn(!1);function s(){i.value||(e("fire"),i.value=!0,setTimeout(()=>{i.value=!1},xS))}return(r,a)=>(se(),ue("div",gS,[ft("button",{class:Un(["flash-btn",{cooldown:i.value}]),onPointerdown:$o(s,["stop","prevent"]),onTouchstart:$o(s,["stop","prevent"])},[a[0]||(a[0]=ft("span",{class:"flash-icon"},"🔦",-1)),ft("span",vS,ae(i.value?"...":"手电"),1)],34)]))}},SS=Fn(MS,[["__scopeId","data-v-71a5b0fb"]]),yS={class:"scoreboard"},ES={class:"score-box hud-panel"},bS={class:"score-value"},TS={class:"time-label"},AS={class:"time-value"},wS={class:"kills-box"},RS={class:"kills-value"},CS={class:"combo-num"},PS={__name:"ScoreBoard",props:{score:{type:Number,default:0},timeRemaining:{type:Number,default:60},kills:{type:Number,default:0},combo:{type:Number,default:0}},setup(n){const t=n,e=ya(()=>{const r=18+(180-t.timeRemaining)/180*12,a=Math.floor(r)%24,o=Math.floor(r%1*60);return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}`}),i=ya(()=>{const r=18+(180-t.timeRemaining)/180*12;return r>=28||r<=6});return(s,r)=>(se(),ue("div",yS,[ft("div",ES,[r[0]||(r[0]=ft("span",{class:"score-label"},"得分",-1)),ft("span",bS,ae(n.score),1)]),ft("div",{class:Un(["time-box hud-panel",{dawn:i.value}])},[ft("span",TS,ae(i.value?"🌅 黎明":"🌙 时间"),1),ft("span",AS,ae(e.value),1)],2),ft("div",wS,[r[1]||(r[1]=ft("span",{class:"kills-icon"},"🔦",-1)),ft("span",RS,ae(n.kills),1)]),pe(sc,{name:"combo-pop"},{default:Ua(()=>[n.combo>1?(se(),ue("div",{class:"combo-badge",key:n.combo},[ft("span",CS,ae(n.combo)+"x",1),r[2]||(r[2]=ft("span",{class:"combo-label"},"COMBO",-1))])):Xe("",!0)]),_:1})]))}},LS=Fn(PS,[["__scopeId","data-v-70ed3b1d"]]),rd="/assets/%E5%A5%B6%E9%BE%99%E5%A4%A7%E7%AC%91-B401vx2T.gif",DS={key:0,class:"gameover-overlay"},IS={class:"gameover-panel"},US=["src"],NS={class:"result-title"},FS={class:"stats-grid"},OS={class:"stat-item"},BS={class:"stat-val"},zS={class:"stat-item"},GS={class:"stat-val"},HS={class:"stat-item"},VS={class:"stat-val"},kS={class:"stat-item"},WS={class:"stat-val"},XS={key:1},YS={class:"ach-icon"},qS={class:"ach-name"},$S={class:"leaderboard"},KS={class:"lb-rank"},jS={class:"lb-score"},ZS={class:"lb-detail"},JS={class:"gameover-actions"},QS={__name:"GameOverModal",props:{gameState:{type:Object,required:!0},visible:{type:Boolean,default:!0}},emits:["restart","backToMenu"],setup(n){const t=n,e=gn(null);function i(){const s=e.value;if(!s)return;const r=s.getContext("2d"),a=t.gameState,o=800,l=500,c=r.createLinearGradient(0,0,0,l);c.addColorStop(0,"#000a10"),c.addColorStop(.5,"#020f08"),c.addColorStop(1,"#000508"),r.fillStyle=c,r.fillRect(0,0,o,l);for(let M=0;M<l;M+=5)r.fillStyle="rgba(0,0,0,0.04)",r.fillRect(0,M,o,3);r.strokeStyle="rgba(0,255,65,0.3)",r.lineWidth=3,r.strokeRect(10,10,o-20,l-20),r.strokeStyle="rgba(0,255,65,0.08)",r.lineWidth=1,r.strokeRect(18,18,o-36,l-36),[[30,30],[o-30,30],[30,l-30],[o-30,l-30]].forEach(([M,U])=>{r.fillStyle="rgba(0,255,65,0.5)",r.fillRect(M-15,U-2,15,4),r.fillRect(M-2,U-15,4,15)}),r.textAlign="center",r.strokeStyle="rgba(0,255,65,0.15)",r.lineWidth=1,r.beginPath(),r.moveTo(o/2-150,60),r.lineTo(o/2+150,60),r.stroke(),r.fillStyle="#00ff41",r.font='bold 40px "Courier New", monospace',r.shadowColor="rgba(0,255,65,0.6)",r.shadowBlur=20,r.fillText("奶 蛙 之 森",o/2,85),r.shadowBlur=0,r.fillStyle="rgba(0,255,65,0.35)",r.font='16px "Courier New", monospace',r.fillText("—— 听声辨位 · 黑暗求生 ——",o/2,110);const f=a.getRating(),p={S:"#ffaa00",A:"#00ff41",B:"#88cc44",C:"#cccc44",D:"#884444"}[f]||"#00ff41";r.beginPath(),r.arc(o/2,195,55,0,Math.PI*2),r.strokeStyle=p,r.lineWidth=4,r.stroke(),r.beginPath(),r.arc(o/2,195,48,0,Math.PI*2),r.strokeStyle=p+"44",r.lineWidth=1,r.stroke(),r.fillStyle=p,r.font='bold 72px "Courier New", monospace',r.shadowColor=p+"88",r.shadowBlur=25,r.fillText(f,o/2,218),r.shadowBlur=0;const g={S:"传奇猎手",A:"精英猎手",B:"熟练猎手",C:"新手猎手",D:"见习猎手"};r.fillStyle=p,r.font='14px "Courier New", monospace',r.fillText(g[f]||"",o/2,260);const x=285;r.fillStyle="rgba(0,15,8,0.6)",r.strokeStyle="rgba(0,255,65,0.1)",r.lineWidth=1,r.beginPath(),r.roundRect(o/2-240,x,480,105,8),r.fill(),r.stroke();const m=[{label:"得分",value:a.score,color:"#ffaa00"},{label:"照中",value:`${a.kills}次`,color:"#00ff41"},{label:"连击",value:`${a.maxCombo}x`,color:"#ffaa00"},{label:"命中率",value:`${a.getAccuracy()}%`,color:"#00ff41"}],h=480/m.length;m.forEach((M,U)=>{const C=o/2-240+h*U+h/2;r.fillStyle=M.color,r.font='bold 28px "Courier New", monospace',r.textAlign="center",r.fillText(M.value,C,x+42),r.fillStyle="rgba(200,220,200,0.5)",r.font='12px "Courier New", monospace',r.fillText(M.label,C,x+64),U<m.length-1&&(r.strokeStyle="rgba(0,255,65,0.08)",r.lineWidth=1,r.beginPath(),r.moveTo(C+h/2,x+10),r.lineTo(C+h/2,x+95),r.stroke())});const A=415,T=a.won;r.fillStyle=T?"rgba(0,255,65,0.1)":"rgba(255,50,50,0.1)",r.strokeStyle=T?"rgba(0,255,65,0.3)":"rgba(255,50,50,0.3)",r.beginPath(),r.roundRect(o/2-100,A,200,36,18),r.fill(),r.stroke(),r.fillStyle=T?"#00ff41":"#ff3333",r.font='bold 18px "Courier New", monospace',r.fillText(T?"✨ 生 还 ✨":"💀 阵 亡 💀",o/2,A+26),r.fillStyle="rgba(0,255,65,0.2)",r.font='12px "Courier New", monospace',r.fillText("NAIWA FOREST · SURVIVAL HORROR",o/2,l-25),r.strokeStyle="rgba(0,255,65,0.1)",r.lineWidth=1,r.beginPath(),r.moveTo(o/2-120,l-40),r.lineTo(o/2+120,l-40),r.stroke(),s.toBlob(M=>{const U=URL.createObjectURL(M),C=document.createElement("a");C.href=U,C.download="奶蛙之森-成绩.png",C.click(),URL.revokeObjectURL(U)})}return(s,r)=>n.visible?(se(),ue("div",DS,[ft("div",IS,[n.gameState.won?Xe("",!0):(se(),ue("img",{key:0,src:Zl(rd),class:"laugh-gif",alt:""},null,8,US)),ft("div",{class:Un(["result-badge",n.gameState.won?"win":"lose"])},[ft("h2",NS,ae(n.gameState.won?"✨ 你赢了！":"💀 你输了"),1),ft("div",{class:Un(["rating-badge","rating-"+n.gameState.getRating()])},ae(n.gameState.getRating()),3)],2),r[8]||(r[8]=ft("div",{class:"hud-divider"},null,-1)),ft("div",FS,[ft("div",OS,[ft("span",BS,ae(n.gameState.score),1),r[2]||(r[2]=ft("span",{class:"stat-lbl"},"得分",-1))]),ft("div",zS,[ft("span",GS,ae(n.gameState.kills),1),r[3]||(r[3]=ft("span",{class:"stat-lbl"},"照中",-1))]),ft("div",HS,[ft("span",VS,ae(n.gameState.maxCombo)+"x",1),r[4]||(r[4]=ft("span",{class:"stat-lbl"},"最高连击",-1))]),ft("div",kS,[ft("span",WS,ae(n.gameState.getAccuracy())+"%",1),r[5]||(r[5]=ft("span",{class:"stat-lbl"},"命中率",-1))])]),n.gameState.getJustUnlocked().length>0?(se(),ue("div",XS,[r[6]||(r[6]=ft("div",{class:"hud-divider"},null,-1)),r[7]||(r[7]=ft("p",{class:"section-label"},"🏆 新成就解锁！",-1)),(se(!0),ue(We,null,ga(n.gameState.getJustUnlocked(),a=>(se(),ue("div",{key:a.id,class:"achievement-item"},[ft("span",YS,ae(a.icon),1),ft("span",qS,ae(a.name),1)]))),128))])):Xe("",!0),r[9]||(r[9]=ft("div",{class:"hud-divider"},null,-1)),r[10]||(r[10]=ft("p",{class:"section-label"},"📋 排行榜",-1)),ft("div",$S,[(se(!0),ue(We,null,ga(n.gameState.getLeaderboard().slice(0,5),(a,o)=>(se(),ue("div",{key:o,class:Un(["lb-row",{highlight:a.score===n.gameState.score}])},[ft("span",KS,ae(o+1),1),ft("span",jS,ae(a.score),1),ft("span",ZS,ae(a.kills)+"杀 "+ae(a.combo)+"x "+ae(a.won?"🏆":""),1)],2))),128))]),r[11]||(r[11]=ft("div",{class:"hud-divider"},null,-1)),ft("div",JS,[ft("button",{class:"btn btn-primary",onClick:r[0]||(r[0]=a=>s.$emit("restart"))},"再来一局"),ft("button",{class:"btn btn-share",onClick:i},"📤 分享成绩"),ft("button",{class:"btn btn-secondary",onClick:r[1]||(r[1]=a=>s.$emit("backToMenu"))},"返回主页")])]),ft("canvas",{ref_key:"shareCanvas",ref:e,style:{display:"none"},width:"800",height:"500"},null,512)])):Xe("",!0)}},ty=Fn(QS,[["__scopeId","data-v-67410968"]]),ey="/assets/%E5%A5%B6%E9%BE%99%E5%93%AD%E6%B3%A3-ChJ2TT0N.gif",ny=["src"],iy={__name:"NaiwaGif",props:{type:{type:String,default:"none"},visible:{type:Boolean,default:!1}},setup(n){const t=n,e=ya(()=>t.type==="kill"?ey:rd);return(i,s)=>(se(),nc(sc,{name:"gif-pop"},{default:Ua(()=>[n.visible?(se(),ue("div",{key:0,class:Un(["naiwa-gif",n.type])},[ft("img",{src:e.value,alt:""},null,8,ny)],2)):Xe("",!0)]),_:1}))}},sy=Fn(iy,[["__scopeId","data-v-997810d4"]]),ry={class:"game-view"},ay={class:"game-overlay"},oy={__name:"GameView",props:{gameState:{type:Object,required:!0},gifType:{type:String,default:"none"}},emits:["fire","restart","backToMenu"],setup(n){const t=gn(null);function e(){const r=t.value;r&&(r.width=window.innerWidth,r.height=window.innerHeight,r.style.cssText="display:block;position:fixed;top:0;left:0;z-index:1")}let i=null;function s(){clearTimeout(i),i=setTimeout(e,200)}return Ql(()=>{var r,a;e(),window.addEventListener("resize",s),window.addEventListener("orientationchange",()=>setTimeout(e,300)),console.log("canvas mounted:",(r=t.value)==null?void 0:r.width,"x",(a=t.value)==null?void 0:a.height)}),Oa(()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}),(r,a)=>(se(),ue("div",ry,[ft("canvas",{id:"game-canvas",ref_key:"canvasRef",ref:t},null,512),pe(sy,{type:n.gifType,visible:n.gifType!=="none"},null,8,["type","visible"]),ft("div",ay,[pe(LS,{score:n.gameState.score,"time-remaining":n.gameState.timeRemaining,kills:n.gameState.kills,combo:n.gameState.combo},null,8,["score","time-remaining","kills","combo"]),pe(_S),pe(SS,{onFire:a[0]||(a[0]=o=>r.$emit("fire"))})]),n.gameState.state==="game_over"?(se(),nc(ty,{key:0,"game-state":n.gameState,visible:!0,onRestart:a[1]||(a[1]=o=>r.$emit("restart")),onBackToMenu:a[2]||(a[2]=o=>r.$emit("backToMenu"))},null,8,["game-state"])):Xe("",!0)]))}},ly=Fn(oy,[["__scopeId","data-v-b91dcc76"]]),cy={key:0,class:"tutorial-overlay"},uy={class:"tutorial-card"},fy={class:"step-indicator"},hy={class:"step-icon"},dy={class:"step-title"},py={class:"step-desc"},my={class:"tutorial-actions"},_y={__name:"TutorialOverlay",props:{visible:{type:Boolean,default:!1}},emits:["start","skip"],setup(n){const t=gn(1),e=[{icon:"🌲",title:"欢迎来到黑暗森林",desc:"你正站在森林的中心。四周一片漆黑，只能隐约看到树木的轮廓。奶蛙就藏在这片森林的某个角落..."},{icon:"👂",title:"用耳朵来寻找",desc:"奶蛙会不断发出笑声。转动手机或移动鼠标，仔细听笑声传来的方向。戴上耳机可以获得最精准的3D空间音效。"},{icon:"🎯",title:"对准声音的方向",desc:"听到声音后，将屏幕中央的准星对准声音传来的方向。你无法看到奶蛙——只能依靠听觉来判断它的位置。"},{icon:"🔦",title:"打开手电筒",desc:"当你确定奶蛙就在那个方向时，点击底部的手电筒按钮（或按空格键）。照中奶蛙它会暂时消失，并在新的位置重生。"},{icon:"⏱️",title:"坚持60秒",desc:"奶蛙会一步步向你靠近。你需要在黑暗中坚持60秒。心跳声会随奶蛙接近而加快——那是你唯一的警示。被奶蛙碰到，游戏就结束了。"}];function i(){t.value<e.length&&t.value++}function s(){t.value>1&&t.value--}return(r,a)=>{var o,l,c;return n.visible?(se(),ue("div",cy,[ft("div",uy,[ft("div",fy,[(se(!0),ue(We,null,ga(e.length,u=>(se(),ue("span",{key:u,class:Un(["step-dot",{active:u===t.value,done:u<t.value}])},null,2))),128))]),ft("div",hy,ae((o=e[t.value-1])==null?void 0:o.icon),1),ft("h3",dy,ae((l=e[t.value-1])==null?void 0:l.title),1),ft("p",py,ae((c=e[t.value-1])==null?void 0:c.desc),1),ft("div",my,[t.value>1?(se(),ue("button",{key:0,class:"btn btn-ghost",onClick:s},"上一步")):Xe("",!0),t.value<e.length?(se(),ue("button",{key:1,class:"btn btn-primary",onClick:i},ae(t.value===e.length-1?"开始游戏":"下一步"),1)):Xe("",!0),t.value===e.length?(se(),ue("button",{key:2,class:"btn btn-primary",onClick:a[0]||(a[0]=u=>r.$emit("start"))}," 进 入 森 林 ")):Xe("",!0)]),ft("button",{class:"skip-btn",onClick:a[1]||(a[1]=u=>r.$emit("skip"))},"跳过教程")])])):Xe("",!0)}}},gy=Fn(_y,[["__scopeId","data-v-f3ba43a9"]]),vy={class:"settings-panel"},xy={class:"slider-header"},My={class:"slider-icon"},Sy={class:"slider-label"},yy={class:"slider-value"},Ey=["value","onInput"],by={__name:"SettingsPanel",props:{visible:{type:Boolean,default:!1},volumes:{type:Object,default:()=>({master:.7,naiwa:.55,heartbeat:.7,bgm:.5,sfx:.8})}},emits:["update","close"],setup(n,{emit:t}){const e=n,i=t,s=xr([{key:"master",icon:"🔊",label:"主音量",value:e.volumes.master},{key:"naiwa",icon:"👹",label:"奶蛙笑声",value:e.volumes.naiwa},{key:"heartbeat",icon:"💓",label:"心跳声",value:e.volumes.heartbeat},{key:"bgm",icon:"🎵",label:"背景音乐",value:e.volumes.bgm},{key:"sfx",icon:"💥",label:"UI音效",value:e.volumes.sfx}]);function r(a,o){const l=parseInt(o.target.value)/100,c=s.find(u=>u.key===a);c&&(c.value=l),i("update",{key:a,value:l})}return(a,o)=>n.visible?(se(),ue("div",{key:0,class:"settings-overlay",onClick:o[1]||(o[1]=$o(l=>a.$emit("close"),["self"]))},[ft("div",vy,[o[2]||(o[2]=ft("h2",{class:"panel-title"},"⚙️ 设置",-1)),o[3]||(o[3]=ft("div",{class:"hud-divider"},null,-1)),(se(!0),ue(We,null,ga(s,l=>(se(),ue("div",{class:"slider-group",key:l.key},[ft("div",xy,[ft("span",My,ae(l.icon),1),ft("span",Sy,ae(l.label),1),ft("span",yy,ae(Math.round(l.value*100))+"%",1)]),ft("input",{type:"range",min:"0",max:"100",value:Math.round(l.value*100),class:"hud-slider",onInput:c=>r(l.key,c)},null,40,Ey)]))),128)),ft("button",{class:"close-btn",onClick:o[0]||(o[0]=l=>a.$emit("close"))},"关 闭")])])):Xe("",!0)}},Ty=Fn(by,[["__scopeId","data-v-9dce76a2"]]),Ay="/assets/%E5%A5%B6%E9%BE%99%E5%B0%8F%E7%AC%91-BwtB9DYU.gif";class wy{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.raycaster=null,this.naiwaCollider=null,this.hitFlashMesh=null,this.hitFlashTimer=null,this.isRunning=!1,this._shakeAmount=0,this._hitParticles=[],this._afterimages=[],this._afterimageTexture=null,this._afterimagesEnabled=!1}shakeScreen(t=.08){this._shakeAmount=t}spawnHitParticles(t){for(let i=0;i<25;i++){const s=new Hi(.06,3,3),r=new _n({color:16737826,transparent:!0,opacity:1,blending:_i,depthWrite:!1}),a=new me(s,r);a.position.copy(t),a.userData={vel:new G((Math.random()-.5)*4,Math.random()*4,(Math.random()-.5)*4),life:.5+Math.random()*.3},this.scene.add(a),this._hitParticles.push(a)}}init(t){try{const e=t.clientWidth||t.width||window.innerWidth||800,i=t.clientHeight||t.height||window.innerHeight||600;t.width=e,t.height=i,this.scene=new iS,this.scene.background=new qt(518),this.scene.fog=new _c(518,3,14);const s=e/Math.max(i,1),r=s<1?100:75;this.camera=new an(r,s,.1,60),this.camera.position.set(0,1.6,0),this.camera.quaternion.setFromEuler(new bn(.15,0,0,"YXZ")),this.renderer=new nS({canvas:t,antialias:!0,alpha:!1}),this.renderer.setSize(e,i,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(518),this.raycaster=new rS,this._createSky(),this._createGround(),this._createTrees(),this._createFireflies(),this._createMist(),this._createNaiwaCollider(),this._createHitFlash(),this._resizeCanvas=t,this._onResizeHandler=()=>this._onResize(this._resizeCanvas),window.addEventListener("resize",this._onResizeHandler),this.isRunning=!0,this.renderer.render(this.scene,this.camera),console.log("Forest scene initialized",{w:e,h:i,fov:r})}catch(e){throw console.error("GameEngine.init failed:",e),e}}_createSky(){const t=new xs(3.5,64),e=new _n({color:14535816,side:Je,transparent:!0,opacity:.6,depthWrite:!1});this._moon=new me(t,e),this._moon.position.set(10,14,-25),this.scene.add(this._moon);const i=new xs(6,64),s=new _n({color:14535816,side:Je,transparent:!0,opacity:.1,depthWrite:!1}),r=new me(i,s);r.position.copy(this._moon.position),this.scene.add(r),this._moonHalo=r;const a=300,o=new Float32Array(a*3);for(let u=0;u<a;u++){const f=Math.random()*Math.PI*2,d=Math.random()*Math.PI*.45+.1,p=22+Math.random()*25;o[u*3]=Math.cos(f)*Math.cos(d)*p,o[u*3+1]=Math.sin(d)*p+1.6,o[u*3+2]=Math.sin(f)*Math.cos(d)*p}const l=new qe;l.setAttribute("position",new tn(o,3));const c=new Ol({color:15658717,size:.25,transparent:!0,opacity:.7,blending:_i,depthWrite:!1});this._stars=new ff(l,c),this.scene.add(this._stars)}_createGround(){const t=new xs(17,56),e=new _n({color:1714709,side:Je,depthWrite:!0}),i=new me(t,e);i.rotation.x=-Math.PI/2,i.position.y=-1.6,this.scene.add(i);const s=new xs(3.5,36),r=new _n({color:2371614,side:Je,depthWrite:!0}),a=new me(s,r);a.rotation.x=-Math.PI/2,a.position.y=-1.59,this.scene.add(a)}_createTrees(){for(let s=0;s<40;s++){const r=s/40*Math.PI*2+(Math.random()-.5)*.6,a=3.5+Math.pow(Math.random(),.5)*(16-3.5),o=Math.cos(r)*a,l=Math.sin(r)*a,c=2.5+Math.random()*6,u=.1+Math.random()*.35,f=Math.random();f<.6?this._createPineTree(o,l,c,u):f<.85?this._createBroadTree(o,l,c,u):this._createDeadTree(o,l,c,u)}}_treeMat(t,e=1){return new _n({color:new qt(t*.6,t*(.7+e*.8),t*.3),depthWrite:!0})}_createPineTree(t,e,i,s){const r=.04+Math.random()*.04,a=new Wi(s*.5,s*.8,i*.5,6),o=new me(a,this._treeMat(r,0));o.position.set(t,-1.6+i*.25,e),this.scene.add(o);const l=2+Math.floor(Math.random()*2);for(let c=0;c<l;c++){const u=i*(.35+c*.2),f=s*(3-c*.7),d=new gc(f,u,8),p=new me(d,this._treeMat(r,1.5));p.position.set(t,-1.6+i*.3+c*i*.25,e),this.scene.add(p)}}_createBroadTree(t,e,i,s){const r=.035+Math.random()*.035,a=new Wi(s*.5,s*.7,i*.55,8),o=new me(a,this._treeMat(r,0));o.position.set(t,-1.6+i*.27,e),this.scene.add(o);const l=new Hi(s*2.5,8,6),c=new me(l,this._treeMat(r,1.6));c.position.set(t,-1.6+i*.6,e),c.scale.y=.7,this.scene.add(c)}_createDeadTree(t,e,i,s){const r=.05+Math.random()*.03,a=new Wi(s*.4,s*.6,i,5),o=new me(a,this._treeMat(r,0));o.position.set(t,-1.6+i*.5,e),this.scene.add(o);for(let l=0;l<3;l++){const c=s*3,u=new Wi(s*.12,s*.2,c,4),f=new me(u,this._treeMat(r,.2)),d=l/3*Math.PI*2+Math.random()*.5,p=-1.6+i*(.4+Math.random()*.4);f.position.set(t+Math.cos(d)*c*.5,p,e+Math.sin(d)*c*.5),f.rotation.z=(Math.random()-.5)*1.2,f.rotation.y=d,this.scene.add(f)}}_createFireflies(){this._fireflies=[];for(let e=0;e<30;e++){const i=new Hi(.04,4,4),s=new _n({color:11193446,transparent:!0,opacity:0,blending:_i,depthWrite:!1}),r=new me(i,s);r.userData={baseX:(Math.random()-.5)*24,baseY:-1.2+Math.random()*4,baseZ:(Math.random()-.5)*24,speed:.3+Math.random()*.8,phase:Math.random()*Math.PI*2,amplitude:.2+Math.random()*.6},r.position.set(r.userData.baseX,r.userData.baseY,r.userData.baseZ),this.scene.add(r),this._fireflies.push(r)}}_createMist(){const e=new Float32Array(150);for(let r=0;r<50;r++)e[r*3]=(Math.random()-.5)*30,e[r*3+1]=-1.5+Math.random()*1.5,e[r*3+2]=(Math.random()-.5)*30;const i=new qe;i.setAttribute("position",new tn(e,3));const s=new Ol({color:3359795,size:.6,transparent:!0,opacity:.15,blending:qi,depthWrite:!1});this._mist=new ff(i,s),this.scene.add(this._mist)}_createNaiwaCollider(){const t=new Hi(.84,16,16),e=new _n({visible:!1});this.naiwaCollider=new me(t,e),this.naiwaCollider.visible=!1,this.scene.add(this.naiwaCollider)}_createHitFlash(){const t=new Hi(1.8,16,16),e=new _n({color:16755200,transparent:!0,opacity:0,blending:_i,depthWrite:!1});this.hitFlashMesh=new me(t,e),this.hitFlashMesh.visible=!1,this.scene.add(this.hitFlashMesh)}setNaiwaPosition(t,e,i){this.naiwaCollider&&this.naiwaCollider.position.set(t,e,i)}checkAim(){if(!this.naiwaCollider)return{hit:!1,distance:1/0,point:null};this.raycaster.setFromCamera(new Xt(0,0),this.camera);const t=this.naiwaCollider.visible;this.naiwaCollider.visible=!0;const e=this.raycaster.intersectObject(this.naiwaCollider);return this.naiwaCollider.visible=t,e.length>0?{hit:!0,distance:e[0].distance,point:e[0].point.clone()}:{hit:!1,distance:1/0,point:null}}showJumpscare(t){if(!this.scene)return;const e=new Image;e.src=Ay,e.onload=()=>{const i=new Le(e);i.needsUpdate=!0,i.colorSpace=ke;const s=new Fl({map:i,blending:_i,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1}),r=new cf(s);r.position.copy(t),r.position.y+=1,r.scale.set(5,5,1),this.scene.add(r);let a=0;const o=l=>{a+=16,r.material.opacity=.9*(1-a/400),r.scale.set(5+a*.02,5+a*.02,1),a<400?requestAnimationFrame(o):(this.scene.remove(r),r.material.dispose(),i.dispose())};requestAnimationFrame(o)}}showHitFlash(t){if(!this.hitFlashMesh)return;this.hitFlashMesh.position.copy(t),this.hitFlashMesh.visible=!0,this.hitFlashMesh.material.opacity=1,this.hitFlashTimer&&cancelAnimationFrame(this.hitFlashTimer);const e=performance.now(),i=s=>{const r=Math.max(0,1-(s-e)/400);this.hitFlashMesh.material.opacity=r,r>0?this.hitFlashTimer=requestAnimationFrame(i):this.hitFlashMesh.visible=!1};this.hitFlashTimer=requestAnimationFrame(i)}updateCameraRotation(t){this.camera.quaternion.setFromEuler(t)}getCameraForward(){const t=new G(0,0,-1);return t.applyQuaternion(this.camera.quaternion),t}render(){if(!this.isRunning||!this.renderer||!this.scene||!this.camera)return;if(this._fireflies){const e=performance.now()*.001;for(const i of this._fireflies){const s=i.userData;i.position.x=s.baseX+Math.sin(e*s.speed+s.phase)*s.amplitude,i.position.y=s.baseY+Math.cos(e*s.speed*.7+s.phase)*s.amplitude*.5,i.position.z=s.baseZ+Math.cos(e*s.speed*.6+s.phase+1)*s.amplitude;const r=.3+.7*Math.abs(Math.sin(e*2+s.phase));i.material.opacity=r*.6}}this._mist&&(this._mist.rotation.y+=1e-4),this._moon&&this.camera&&(this._moon.lookAt(this.camera.position),this._moonHalo&&this._moonHalo.lookAt(this.camera.position)),this._shakeAmount>.001&&(this.camera.position.x+=(Math.random()-.5)*this._shakeAmount,this.camera.position.y+=(Math.random()-.5)*this._shakeAmount*.5,this._shakeAmount*=.85);const t=.016;for(let e=this._hitParticles.length-1;e>=0;e--){const i=this._hitParticles[e];i.userData.life-=t,i.userData.life<=0?(this.scene.remove(i),i.material.dispose(),i.geometry.dispose(),this._hitParticles.splice(e,1)):(i.position.add(i.userData.vel.clone().multiplyScalar(t)),i.userData.vel.y+=2*t,i.material.opacity=i.userData.life/.8)}this.renderer.render(this.scene,this.camera),this._shakeAmount>.001&&this.camera.position.set(0,1.6,0)}enableAfterimages(){if(this._afterimagesEnabled)return;this._afterimagesEnabled=!0;const t=new Image;t.src=naiwaGifUrl,t.onload=()=>{this._afterimageTexture=new Le(t),this._afterimageTexture.needsUpdate=!0,this._afterimageTexture.colorSpace=ke;for(let e=0;e<5;e++){const i=new Fl({map:this._afterimageTexture,blending:_i,transparent:!0,opacity:.08,depthWrite:!1,depthTest:!0}),s=new cf(i);s.scale.set(2.5,2.5,1),s.visible=!1,this.scene.add(s),this._afterimages.push(s)}}}disableAfterimages(){this._afterimagesEnabled=!1,this._afterimages.forEach(t=>{var e,i;t.visible=!1,(e=t.material)==null||e.dispose(),(i=this.scene)==null||i.remove(t)}),this._afterimages=[],this._afterimageTexture&&(this._afterimageTexture.dispose(),this._afterimageTexture=null)}updateAfterimages(t){if(!this._afterimagesEnabled||!this._afterimages.length)return;const e=this._afterimages.length;for(let i=0;i<e;i++){const s=t.length-1-i*Math.max(1,Math.floor(t.length/e));s>=0&&s<t.length?(this._afterimages[i].position.copy(t[s]),this._afterimages[i].visible=!0,this._afterimages[i].material.opacity=.03+(1-i/e)*.05):this._afterimages[i].visible=!1}}_onResize(t){var a;const e=t.clientWidth||window.innerWidth||800,i=t.clientHeight||window.innerHeight||600,s=e/Math.max(i,1),r=s<1?100:75;r!==((a=this.camera)==null?void 0:a.fov)&&(this.camera.fov=r),this.camera&&(this.camera.aspect=s,this.camera.updateProjectionMatrix()),this.renderer&&this.renderer.setSize(e,i)}dispose(){var t,e;this.isRunning=!1,this.hitFlashTimer&&cancelAnimationFrame(this.hitFlashTimer),this._onResizeHandler&&window.removeEventListener("resize",this._onResizeHandler),this.disableAfterimages(),(t=this.renderer)==null||t.dispose(),(e=this.scene)==null||e.clear(),this.scene=null,this.renderer=null}}const Ry="/assets/%E5%A5%B6%E9%BE%99%E5%A4%A7%E7%AC%91-CsVr7tpk.mp3",Cy="/assets/%E5%BC%80%E6%9E%AA%E9%9F%B3%E6%95%88-aE3QZQiK.mp3",Py="/assets/bgm-BmZQ2Jdj.mp3",Ly="/assets/nervous1-IHWX-kia.mp3",Dy="/assets/nervous2-BtMJPB1v.mp3",Iy="/assets/nervous3-BSRlof_i.mp3";class Uy{constructor(){this.ctx=null,this.listener=null,this._naiwaPanner=null,this._naiwaGain=null,this._naiwaSource=null,this._naiwaBuffer=null,this._isNaiwaPlaying=!1,this._flashBuffer=null,this._heartbeatGain=null,this._heartbeatSource=null,this._heartbeatBuffers={},this._heartbeatPlaying=!1,this._currentHeartLevel=0,this._bgmGain=null,this._bgmSource=null,this._bgmBuffer=null,this._bgmPlaying=!1,this.masterGain=.7,this.naiwaVolume=.55,this._heartbeatVol=.7,this._bgmVolume=.5,this._isLoaded=!1}async init(){(!this.ctx||this.ctx.state==="closed")&&(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&await this.ctx.resume(),this.listener=this.ctx.listener,this.listener.positionX.value=0,this.listener.positionY.value=0,this.listener.positionZ.value=0,this.listener.forwardX.value=0,this.listener.forwardY.value=0,this.listener.forwardZ.value=-1,this.listener.upX.value=0,this.listener.upY.value=1,this.listener.upZ.value=0,this._isLoaded||await this._loadAudioFiles(),console.log("AudioManager initialized")}async _loadAudioFiles(){try{const[t,e,i,s,r,a]=await Promise.all([this._loadBuffer(Ry),this._loadBuffer(Cy),this._loadBuffer(Py).catch(()=>null),this._loadBuffer(Ly).catch(()=>null),this._loadBuffer(Dy).catch(()=>null),this._loadBuffer(Iy).catch(()=>null)]);this._naiwaBuffer=t,this._flashBuffer=e,this._bgmBuffer=i,this._heartbeatBuffers={1:s,2:r,3:a},this._isLoaded=!0,console.log("Audio files loaded")}catch(t){console.warn("Audio load failed, using synthetic fallback:",t.message)}}async _loadBuffer(t){const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);return await this.ctx.decodeAudioData(await e.arrayBuffer())}startNaiwaSound(){if(!(!this.ctx||this._isNaiwaPlaying)){if(this._naiwaPanner=this.ctx.createPanner(),this._naiwaPanner.panningModel="HRTF",this._naiwaPanner.distanceModel="inverse",this._naiwaPanner.refDistance=4,this._naiwaPanner.maxDistance=18,this._naiwaPanner.rolloffFactor=1.5,this._naiwaGain=this.ctx.createGain(),this._naiwaGain.gain.value=0,this._isLoaded&&this._naiwaBuffer){const t=this.ctx.createBufferSource();t.buffer=this._naiwaBuffer,t.loop=!0,t.connect(this._naiwaPanner),t.start(0),this._naiwaSource=t}else this._playNaiwaSynthetic();this._naiwaPanner.connect(this._naiwaGain),this._naiwaGain.connect(this.ctx.destination),this._naiwaGain.gain.setTargetAtTime(this.naiwaVolume*this.masterGain,this.ctx.currentTime,.3),this._isNaiwaPlaying=!0}}_playNaiwaSynthetic(){const t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.value=180;const e=this.ctx.createOscillator();e.type="sine",e.frequency.value=2.5;const i=this.ctx.createGain();i.gain.value=.5;const s=this.ctx.createGain();s.gain.value=0,e.connect(i),i.connect(s.gain),t.connect(s),s.connect(this._naiwaPanner),t.start(),e.start(),this._naiwaSource=t,this._synthNodes=[t,e,i,s]}stopNaiwaSound(){var t,e,i,s,r;if(this._isNaiwaPlaying){try{(e=(t=this._naiwaSource)==null?void 0:t.stop)==null||e.call(t)}catch{}if(this._synthNodes){for(const a of this._synthNodes){try{a.stop()}catch{}a==null||a.disconnect()}this._synthNodes=null}(i=this._naiwaSource)==null||i.disconnect(),(s=this._naiwaGain)==null||s.disconnect(),(r=this._naiwaPanner)==null||r.disconnect(),this._naiwaSource=null,this._naiwaGain=null,this._naiwaPanner=null,this._isNaiwaPlaying=!1}}updateNaiwaPosition(t,e,i){this._naiwaPanner&&(this._naiwaPanner.positionX.value=t,this._naiwaPanner.positionY.value=e,this._naiwaPanner.positionZ.value=i)}setNaiwaVolumeByDistance(t){if(!this._naiwaGain)return;const e=Math.min(1,1/Math.max(1,t/4));this._naiwaGain.gain.setTargetAtTime(e*this.naiwaVolume*this.masterGain,this.ctx.currentTime,.2)}startHeartbeat(){!this.ctx||this._heartbeatPlaying||(this._heartbeatGain=this.ctx.createGain(),this._heartbeatGain.gain.value=.4*this.masterGain,this._heartbeatGain.connect(this.ctx.destination),this._heartbeatPlaying=!0,this._currentHeartLevel=0)}updateHeartbeatRate(t){if(!this._heartbeatPlaying||!this.ctx)return;let e=3;t<=4?e=1:t<=8&&(e=2),e!==this._currentHeartLevel&&this._switchHeartbeat(e)}_switchHeartbeat(t){if(this._heartbeatSource){try{this._heartbeatSource.stop()}catch{}this._heartbeatSource.disconnect(),this._heartbeatSource=null}const e=this._heartbeatBuffers[t];if(!e)return;const i=this.ctx.createBufferSource();i.buffer=e,i.loop=!0,i.connect(this._heartbeatGain),i.start(0),this._heartbeatSource=i,this._currentHeartLevel=t}stopHeartbeat(){var t;if(this._heartbeatPlaying=!1,this._heartbeatSource){try{this._heartbeatSource.stop()}catch{}this._heartbeatSource.disconnect(),this._heartbeatSource=null}(t=this._heartbeatGain)==null||t.disconnect(),this._heartbeatGain=null,this._currentHeartLevel=0}startBGM(){if(!this.ctx||this._bgmPlaying||!this._bgmBuffer)return;this._bgmGain=this.ctx.createGain(),this._bgmGain.gain.value=(this._bgmVolume||.5)*this.masterGain,this._bgmGain.connect(this.ctx.destination);const t=this.ctx.createBufferSource();t.buffer=this._bgmBuffer,t.loop=!0,t.connect(this._bgmGain),t.start(0),this._bgmSource=t,this._bgmPlaying=!0}stopBGM(){var t,e,i,s;this._bgmPlaying=!1;try{(e=(t=this._bgmSource)==null?void 0:t.stop)==null||e.call(t)}catch{}(i=this._bgmSource)==null||i.disconnect(),(s=this._bgmGain)==null||s.disconnect(),this._bgmSource=null,this._bgmGain=null}playFlashSound(){if(this.ctx)if(this._flashBuffer){const t=this.ctx.createBufferSource();t.buffer=this._flashBuffer;const e=this.ctx.createGain();e.gain.value=.6*this.masterGain,t.connect(e),e.connect(this.ctx.destination),t.start(0)}else this._playSyntheticFlash()}_playSyntheticFlash(){const t=this.ctx.currentTime,e=this.ctx.createBuffer(1,this.ctx.sampleRate*.08,this.ctx.sampleRate),i=e.getChannelData(0);for(let o=0;o<i.length;o++)i[o]=(Math.random()*2-1)*Math.exp(-o/i.length*30)*.5;const s=this.ctx.createBufferSource();s.buffer=e;const r=this.ctx.createGain();r.gain.value=.6*this.masterGain;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=2e3,s.connect(a),a.connect(r),r.connect(this.ctx.destination),s.start(t),s.stop(t+.1)}playHitSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=(i,s,r,a)=>{const o=this.ctx.createOscillator();o.type="sine",o.frequency.value=i;const l=this.ctx.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(a,s+.02),l.gain.exponentialRampToValueAtTime(.001,s+r),o.connect(l),l.connect(this.ctx.destination),o.start(s),o.stop(s+r)};e(800,t,.15,.5*this.masterGain),e(1200,t+.08,.12,.35*this.masterGain)}playMissSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(200,t),e.frequency.linearRampToValueAtTime(80,t+.2);const i=this.ctx.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.2*this.masterGain,t+.05),i.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.3)}playWinSound(){if(!this.ctx)return;const t=this.ctx.currentTime;[523,659,784,1047].forEach((e,i)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t+i*.15),r.gain.linearRampToValueAtTime(.3*this.masterGain,t+i*.15+.05),r.gain.exponentialRampToValueAtTime(.001,t+i*.15+.4),s.connect(r),r.connect(this.ctx.destination),s.start(t+i*.15),s.stop(t+i*.15+.5)})}playLoseSound(){if(!this.ctx)return;const t=this.ctx.currentTime;[400,300,200].forEach((e,i)=>{const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t+i*.25),r.gain.linearRampToValueAtTime(.25*this.masterGain,t+i*.25+.05),r.gain.exponentialRampToValueAtTime(.001,t+i*.25+.5),s.connect(r),r.connect(this.ctx.destination),s.start(t+i*.25),s.stop(t+i*.25+.6)})}setMasterVolume(t){this.masterGain=zi.clamp(t,0,1),this._naiwaGain&&this._naiwaGain.gain.setTargetAtTime(this.naiwaVolume*this.masterGain,this.ctx.currentTime,.1),this._heartbeatGain&&this._heartbeatGain.gain.setTargetAtTime((this._heartbeatVol||.7)*this.masterGain,this.ctx.currentTime,.1)}setNaiwaVolume(t){this.naiwaVolume=zi.clamp(t,0,1)}setHeartbeatVolume(t){this._heartbeatVol=zi.clamp(t,0,1),this._heartbeatGain&&this._heartbeatGain.gain.setTargetAtTime(this._heartbeatVol*this.masterGain,this.ctx.currentTime,.1)}setBGMVolume(t){this._bgmVolume=zi.clamp(t,0,1)}setSFXVolume(t){this.sfxVolume=zi.clamp(t,0,1)}getVolumes(){return{master:this.masterGain,naiwa:this.naiwaVolume,heartbeat:this._heartbeatVol||.7,bgm:this._bgmVolume||.5,sfx:this.sfxVolume}}updateListenerOrientation(t,e){this.listener&&(this.listener.forwardX.value=t.x,this.listener.forwardY.value=t.y,this.listener.forwardZ.value=t.z,this.listener.upX.value=e.x,this.listener.upY.value=e.y,this.listener.upZ.value=e.z)}dispose(){this.stopNaiwaSound(),this.stopHeartbeat(),this.stopBGM(),this.ctx&&this.ctx.state!=="closed"&&this.ctx.close(),this.ctx=null}}class Ny{constructor(){this.yaw=0,this.pitch=0,this._targetYaw=0,this._targetPitch=0,this._calibrationYaw=0,this._calibrationPitch=0,this.mouseSensitivity=.0025,this.touchSensitivity=.008,this.gyroSensitivity=1,this.smoothFactor=.15,this.maxPitch=Math.PI/2.2,this.minPitch=-Math.PI/2.2,this.isEnabled=!1,this.isCalibrated=!1,this._mouseActive=!1,this._isGyroActive=!1,this._permissionGranted=!1,this._lastGyroTime=0,this._lastMouseX=null,this._lastMouseY=null,this._lastTouchId=null,this._lastTouchX=null,this._lastTouchY=null,this._lastAlpha=null,this._accumYaw=0,this._calibrationBeta=45,this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onDeviceOrientation=this._onDeviceOrientation.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this)}async requestPermission(){if(!window.isSecureContext)return console.log("[Gyro] ⚠️ 非安全上下文，陀螺仪不可用。需 HTTPS 或 localhost"),this._permissionGranted=!1,"insecure";if(!window.DeviceOrientationEvent)return console.log("[Gyro] 设备不支持 DeviceOrientationEvent"),this._permissionGranted=!1,"unavailable";if(typeof DeviceOrientationEvent.requestPermission=="function")try{const e=await DeviceOrientationEvent.requestPermission();return this._permissionGranted=e==="granted",console.log("[Gyro] iOS 权限:",e),e}catch{return this._permissionGranted=!1,"denied"}return this._permissionGranted=!0,console.log("[Gyro] 安全上下文，陀螺仪可用"),"granted"}init(){this._removeAllListeners(),this._addAllListeners()}_removeAllListeners(){window.removeEventListener("deviceorientation",this._onDeviceOrientation),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("touchstart",this._onTouchStart),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),this._mouseActive=!1,this._isGyroActive=!1,this.isEnabled=!1,this._lastMouseX=null,this._lastMouseY=null,this._lastTouchId=null,this._lastAlpha=null,this._accumYaw=0}_addAllListeners(){document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("touchstart",this._onTouchStart,{passive:!1}),document.addEventListener("touchmove",this._onTouchMove,{passive:!1}),document.addEventListener("touchend",this._onTouchEnd),this._permissionGranted&&(window.addEventListener("deviceorientation",this._onDeviceOrientation),console.log("[Gyro] deviceorientation 监听已添加"))}_onDeviceOrientation(t){if(!this.isEnabled||t.alpha===null||t.alpha===void 0)return;this._lastGyroTime=performance.now();const e=t.alpha,i=t.beta,s=t.gamma;if(!this._isGyroActive){this._isGyroActive=!0,this._lastAlpha=null,this._accumYaw=0,this._calibrationBeta=i,console.log("[Gyro] ✅ 陀螺仪激活, 初始 beta=%.1f°",i);return}if(this._lastAlpha!==null){let l=e-this._lastAlpha;l>180&&(l-=360),l<-180&&(l+=360),this._accumYaw+=l}this._lastAlpha=e;const r=i-this._calibrationBeta,a=window.innerWidth>window.innerHeight;let o=r;a&&(o=-s),this._targetYaw=zi.degToRad(this._accumYaw)*this.gyroSensitivity,this._targetPitch=zi.degToRad(o)*this.gyroSensitivity*.7}_isGyroTimedOut(){return!this._isGyroActive||performance.now()-this._lastGyroTime>2e3}_onMouseDown(t){if(!this.isEnabled)return;const e=t.target;e&&(e.id==="game-canvas"||e.closest("#game-canvas"))&&(this._mouseActive=!0,this._lastMouseX=t.clientX,this._lastMouseY=t.clientY,console.log("[Input] 🖱️ 鼠标已激活（点击画布）"))}_onMouseMove(t){if(this.isEnabled&&this._mouseActive){if(this._lastMouseX!==null){const e=t.clientX-this._lastMouseX,i=t.clientY-this._lastMouseY;(Math.abs(e)>0||Math.abs(i)>0)&&(this._targetYaw-=e*this.mouseSensitivity,this._targetPitch-=i*this.mouseSensitivity)}this._lastMouseX=t.clientX,this._lastMouseY=t.clientY}}_onTouchStart(t){if(this.isEnabled&&this._isGyroTimedOut()){if(t.touches.length===1){const e=t.touches[0];this._lastTouchId=e.identifier,this._lastTouchX=e.clientX,this._lastTouchY=e.clientY}t.preventDefault()}}_onTouchMove(t){if(!this.isEnabled||!this._isGyroTimedOut()||t.touches.length!==1)return;const e=t.touches[0];if(this._lastTouchId===e.identifier){const i=e.clientX-this._lastTouchX,s=e.clientY-this._lastTouchY;(Math.abs(i)>0||Math.abs(s)>0)&&(this._targetYaw+=i*this.touchSensitivity,this._targetPitch+=s*this.touchSensitivity)}this._lastTouchX=e.clientX,this._lastTouchY=e.clientY,t.preventDefault()}_onTouchEnd(t){this._lastTouchId=null}calibrate(){this._isGyroActive?(this._accumYaw=0,this._lastAlpha=null,this._targetYaw=0,this._targetPitch=.2,console.log("[Gyro] 校准完成 — 视角归零")):(this._targetYaw=0,this._targetPitch=.2,this._lastMouseX=null,this._lastMouseY=null,this._mouseActive=!1,console.log("[Input] 桌面校准：视角归零（需点击画布激活鼠标）")),this.isCalibrated=!0}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}update(){this._targetPitch=Math.max(this.minPitch,Math.min(this.maxPitch,this._targetPitch)),this.yaw+=(this._targetYaw-this.yaw)*this.smoothFactor,this.pitch+=(this._targetPitch-this.pitch)*this.smoothFactor}getEuler(){return new bn(this.pitch,this.yaw,0,"YXZ")}dispose(){this.disable(),this._removeAllListeners()}}class Fy{constructor(){this.position=new G,this._target=new G,this._velocity=new G,this.state="idle",this._hitTimer=0,this._moveSpeed=0,this.config={minSpawnDist:10,maxSpawnDist:16,minSpeed:.8,maxSpeed:2.5,killDistance:2,hitCooldown:2}}reset(){this.state="idle",this._hitTimer=0}spawn(t=new G,e=null){this.position.copy(this._randomForestPoint(t,e)),this._moveSpeed=this.config.minSpeed+Math.random()*(this.config.maxSpeed-this.config.minSpeed),this.state="moving",this._hitTimer=0}onHit(){this.state="hit",this._hitTimer=this.config.hitCooldown}update(t,e){if(this.state==="hit")return this._hitTimer-=t,this._hitTimer<=0&&this.spawn(e,this.position.clone()),{gameOver:!1};if(this.state==="moving"){const s=new G().subVectors(e,this.position);if(s.length()<=this.config.killDistance)return{gameOver:!0};s.normalize(),this.position.add(s.multiplyScalar(this._moveSpeed*t))}return this.position.length()>this.config.maxSpawnDist&&this.position.normalize().multiplyScalar(this.config.maxSpawnDist-.5),{gameOver:!1}}distanceTo(t=new G){return this.position.distanceTo(t)}_randomForestPoint(t,e=null){for(let i=0;i<20;i++){const s=Math.random()*Math.PI*2,r=this.config.minSpawnDist+Math.random()*(this.config.maxSpawnDist-this.config.minSpawnDist),a=-1.2+Math.random()*2,o=new G(t.x+Math.cos(s)*r,t.y+a,t.z+Math.sin(s)*r);if(!(e&&o.distanceTo(e)<4))return o}return new G(this.config.minSpawnDist,0,0)}dispose(){}}const Ze={IDLE:"idle",STARTING:"starting",PLAYING:"playing",GAME_OVER:"game_over"},mf=[{id:"first_kill",name:"新手猎人",icon:"🌱",desc:"首次照中奶蛙",threshold:1},{id:"hunter_10",name:"森林巡护",icon:"🔦",desc:"累计照中10次",threshold:10},{id:"hunter_30",name:"黑暗猎手",icon:"⚔️",desc:"累计照中30次",threshold:30},{id:"hunter_60",name:"暗夜传说",icon:"👻",desc:"累计照中60次",threshold:60},{id:"hunter_100",name:"奶蛙克星",icon:"🏆",desc:"累计照中100次",threshold:100}];class Oy{constructor(){this.state=Ze.IDLE,this.score=0,this.kills=0,this.shotsFired=0,this.timeRemaining=180,this.roundTime=180,this.bestScore=0,this.won=!1,this.combo=0,this.maxCombo=0,this.totalKills=0,this._unlockedAchievements=[],this._justUnlocked=[],this._leaderboard=[],this._timerInterval=null,this._loadPersistent()}start(){this.score=0,this.kills=0,this.shotsFired=0,this.timeRemaining=this.roundTime,this.combo=0,this.maxCombo=0,this._justUnlocked=[],this._transition(Ze.STARTING)}ready(){this.state===Ze.STARTING&&(this._transition(Ze.PLAYING),this._startTimer())}recordShot(){this.state===Ze.PLAYING&&this.shotsFired++}recordKill(){if(this.state!==Ze.PLAYING)return;this.kills++,this.totalKills++,this.combo++,this.combo>this.maxCombo&&(this.maxCombo=this.combo);const t=Math.min(this.combo,5);this.score+=100*t,this._checkAchievements()}recordMiss(){this.combo=0}getMultiplier(){return Math.min(this.combo,5)}_checkAchievements(){for(const t of mf)this.totalKills>=t.threshold&&!this._unlockedAchievements.includes(t.id)&&(this._unlockedAchievements.push(t.id),this._justUnlocked.push(t))}getJustUnlocked(){return this._justUnlocked}getUnlockedAchievements(){return mf.filter(t=>this._unlockedAchievements.includes(t.id))}addToLeaderboard(){const t={score:this.score,kills:this.kills,combo:this.maxCombo,won:this.won,date:Date.now()};return this._leaderboard.push(t),this._leaderboard.sort((e,i)=>i.score-e.score),this._leaderboard=this._leaderboard.slice(0,10),this._savePersistent(),this._leaderboard.findIndex(e=>e===t)+1}getLeaderboard(){return this._leaderboard}getRank(){if(this._leaderboard.length===0)return 1;let t=1;for(const e of this._leaderboard){if(this.score>e.score)break;t++}return t}getRating(){const t=this.shotsFired>0?this.kills/this.shotsFired:0;return this.won&&t>=.7?"S":this.won&&t>=.5?"A":this.won?"B":this.kills>=3?"C":"D"}endGame(){this._stopTimer(),this._transition(Ze.GAME_OVER),this.score>this.bestScore&&(this.bestScore=this.score,this._savePersistent()),this.addToLeaderboard()}backToMenu(){this._stopTimer(),this._transition(Ze.IDLE)}getAccuracy(){return this.shotsFired===0?0:Math.round(this.kills/this.shotsFired*100)}_transition(t){this.state=t}_startTimer(){this._stopTimer(),this._timerInterval=setInterval(()=>{this.timeRemaining--,this.timeRemaining<=0&&this._stopTimer()},1e3)}_stopTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}_loadPersistent(){try{const t=localStorage.getItem("nw_achievements");t&&(this._unlockedAchievements=JSON.parse(t));const e=localStorage.getItem("nw_totalKills");e&&(this.totalKills=parseInt(e)||0);const i=localStorage.getItem("nw_bestScore");i&&(this.bestScore=parseInt(i)||0);const s=localStorage.getItem("nw_leaderboard");s&&(this._leaderboard=JSON.parse(s))}catch{}}_savePersistent(){try{localStorage.setItem("nw_achievements",JSON.stringify(this._unlockedAchievements)),localStorage.setItem("nw_totalKills",String(this.totalKills)),localStorage.setItem("nw_bestScore",String(this.bestScore)),localStorage.setItem("nw_leaderboard",JSON.stringify(this._leaderboard))}catch{}}dispose(){this._stopTimer()}}const By={id:"app-root"},zy={key:0,class:"gyro-hint-overlay"},Gy={__name:"App",setup(n){const t=new wy,e=new Uy,i=new Ny,s=new Fy,r=new Oy,a=gn("idle"),o=gn("none"),l=gn(r.bestScore),c=gn(!1),u=gn(!1),f=gn(!1),d=xr(e.getVolumes());let p=!1;async function g(){if(!p){p=!0;try{await e.init(),e.startBGM(),console.log("主页BGM已启动")}catch(at){console.warn("BGM启动失败:",at)}}}document.addEventListener("click",g,{once:!0}),document.addEventListener("touchstart",g,{once:!0});const x=gn({state:"idle",score:0,kills:0,timeRemaining:60,bestScore:0,won:!1,combo:0,maxCombo:0,getAccuracy:()=>0,getRating:()=>"C",getJustUnlocked:()=>[],getLeaderboard:()=>[],getRank:()=>1});function m(){x.value={state:r.state,score:r.score,kills:r.kills,timeRemaining:r.timeRemaining,bestScore:r.bestScore,won:r.won,combo:r.combo,maxCombo:r.maxCombo,getAccuracy:()=>r.getAccuracy(),getRating:()=>r.getRating(),getJustUnlocked:()=>r.getJustUnlocked(),getLeaderboard:()=>r.getLeaderboard(),getRank:()=>r.getRank()}}let h=null,A=0,T=!1,M="idle",U=null;const C=new G(0,0,0),L=new G(0,1,0);function N(at){if(!T)return;const lt=Math.min((at-A)/1e3,.1);A=at,i.update();const Ct=i.getEuler();t.updateCameraRotation(Ct);const $t=t.getCameraForward();if(e.updateListenerOrientation($t,L),r.state===Ze.PLAYING){if(s.update(lt,C).gameOver){T=!1,t.shakeScreen(.15),t.showJumpscare(s.position),setTimeout(()=>S(!1),500);return}const ut=s.position;t.setNaiwaPosition(ut.x,ut.y,ut.z),e.updateNaiwaPosition(ut.x,ut.y,ut.z);const bt=s.distanceTo(C);e.updateHeartbeatRate(bt),M==="hit"&&s.state!=="hit"&&e.startNaiwaSound(),M=s.state}t.render(),h=requestAnimationFrame(N)}async function y(){console.log("handleStart"),r.start(),a.value=r.state,m();try{await i.requestPermission()}catch{}if(await new Promise(lt=>requestAnimationFrame(()=>requestAnimationFrame(lt))),!t.isRunning){const lt=document.getElementById("game-canvas");if(lt)t.init(lt);else{console.error("canvas not found");return}}try{await e.init()}catch(lt){console.error("audio init:",lt)}i.init(),i.calibrate(),i.enable(),s.reset(),s.spawn(C),M="idle";const at=s.position;t.setNaiwaPosition(at.x,at.y,at.z),e.updateNaiwaPosition(at.x,at.y,at.z),e.startNaiwaSound(),e.startHeartbeat(),e.startBGM(),document.addEventListener("keydown",z),document.addEventListener("click",j),T||(T=!0,A=performance.now(),h=requestAnimationFrame(N)),r.ready(),a.value=r.state,m(),"ontouchstart"in window&&(f.value=!0,setTimeout(()=>{f.value=!1},3e3)),console.log("game ready")}function S(at){console.log("Game over:",at?"WIN":"LOSE"),T=!1,h&&cancelAnimationFrame(h),at?e.playWinSound():e.playLoseSound(),e.stopHeartbeat(),e.stopNaiwaSound(),document.removeEventListener("keydown",z),document.removeEventListener("click",j),i.disable(),r.won=at,at&&r.score>l.value&&(l.value=r.score),r.endGame(),a.value=r.state,m()}function R(){if(r.state!==Ze.PLAYING)return;e.playFlashSound();const at=t.checkAim();at.hit?(r.recordKill(),m(),e.playHitSound(),t.showHitFlash(at.point),t.spawnHitParticles(at.point),t.shakeScreen(.06),s.onHit(),e.stopNaiwaSound(),M="hit",I("kill",2e3)):(e.playMissSound(),r.recordMiss(),m())}function I(at,lt=1800){U&&clearTimeout(U),o.value=at,U=setTimeout(()=>{o.value="none"},lt)}function z(at){(at.code==="Space"||at.key===" ")&&(at.preventDefault(),R())}function j(at){if(!("ontouchstart"in window))return;const lt=at.target;lt&&(lt.closest(".flash-btn")||lt.closest(".flash-container"))||R()}function et(){c.value=!1,y()}function $(){const at=e.getVolumes();Object.assign(d,at),u.value=!0}function tt({key:at,value:lt}){switch(d[at]=lt,at){case"master":e.setMasterVolume(lt);break;case"naiwa":e.setNaiwaVolume(lt);break;case"heartbeat":e.setHeartbeatVolume(lt);break;case"bgm":e.setBGMVolume(lt);break;case"sfx":e.setSFXVolume(lt);break}}function V(){T=!1,h&&cancelAnimationFrame(h),U&&clearTimeout(U),o.value="none",i.disable(),e.stopNaiwaSound(),e.stopHeartbeat(),t.dispose(),document.removeEventListener("keydown",z),document.removeEventListener("click",j),r.backToMenu(),a.value=r.state,m()}const mt=setInterval(()=>{(r.state===Ze.PLAYING||r.state===Ze.GAME_OVER)&&(m(),r.timeRemaining<=0&&r.state===Ze.PLAYING&&S(!0))},500);return Oa(()=>{clearInterval(mt),T=!1,h&&cancelAnimationFrame(h),U&&clearTimeout(U),document.removeEventListener("keydown",z),document.removeEventListener("click",j),i.dispose(),e.dispose(),t.dispose(),r.dispose()}),(at,lt)=>(se(),ue("div",By,[Lc(pe(hS,{"best-score":l.value,onStart:lt[0]||(lt[0]=Ct=>{g(),y()}),onTutorial:lt[1]||(lt[1]=Ct=>{g(),c.value=!0}),onSettings:lt[2]||(lt[2]=Ct=>{g(),$()})},null,8,["best-score"]),[[Qc,a.value==="idle"&&!c.value&&!u.value]]),Lc(pe(ly,{"game-state":x.value,"gif-type":o.value,onFire:R,onRestart:y,onBackToMenu:V},null,8,["game-state","gif-type"]),[[Qc,a.value!=="idle"&&!c.value]]),pe(gy,{visible:c.value,onStart:et,onSkip:lt[3]||(lt[3]=Ct=>c.value=!1)},null,8,["visible"]),pe(Ty,{visible:u.value,volumes:d,onUpdate:tt,onClose:lt[4]||(lt[4]=Ct=>u.value=!1)},null,8,["visible","volumes"]),pe(sc,{name:"fade"},{default:Ua(()=>[f.value?(se(),ue("div",zy,[...lt[5]||(lt[5]=[ft("div",{class:"gyro-hint-card"},[ft("span",{class:"gyro-hint-icon"},"📱"),ft("p",{class:"gyro-hint-text"},"将手机举至与地面垂直"),ft("p",{class:"gyro-hint-sub"},"保持自然握持姿势即可")],-1)])])):Xe("",!0)]),_:1})]))}},Hy=Fn(Gy,[["__scopeId","data-v-e9b23ce0"]]);Fm(Hy).mount("#app");
