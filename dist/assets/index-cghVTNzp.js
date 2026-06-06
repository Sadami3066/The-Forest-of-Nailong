(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ol(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const oe={},Ms=[],In=()=>{},df=()=>!1,Aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),wa=n=>n.startsWith("onUpdate:"),be=Object.assign,Bl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},ld=Object.prototype.hasOwnProperty,Qt=(n,t)=>ld.call(n,t),Ut=Array.isArray,Ss=n=>vr(n)==="[object Map]",pf=n=>vr(n)==="[object Set]",bc=n=>vr(n)==="[object Date]",Gt=n=>typeof n=="function",_e=n=>typeof n=="string",Nn=n=>typeof n=="symbol",te=n=>n!==null&&typeof n=="object",mf=n=>(te(n)||Gt(n))&&Gt(n.then)&&Gt(n.catch),_f=Object.prototype.toString,vr=n=>_f.call(n),cd=n=>vr(n).slice(8,-1),gf=n=>vr(n)==="[object Object]",zl=n=>_e(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,tr=Ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ra=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},ud=/-\w/g,xn=Ra(n=>n.replace(ud,t=>t.slice(1).toUpperCase())),fd=/\B([A-Z])/g,ji=Ra(n=>n.replace(fd,"-$1").toLowerCase()),vf=Ra(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xa=Ra(n=>n?`on${vf(n)}`:""),Ln=(n,t)=>!Object.is(n,t),Ya=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},xf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},hd=n=>{const t=parseFloat(n);return isNaN(t)?n:t},dd=n=>{const t=_e(n)?Number(n):NaN;return isNaN(t)?n:t};let Tc;const Ca=()=>Tc||(Tc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pa(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=_e(i)?gd(i):Pa(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(_e(n)||te(n))return n}const pd=/;(?![^(]*\))/g,md=/:([^]+)/,_d=/\/\*[^]*?\*\//g;function gd(n){const t={};return n.replace(_d,"").split(pd).forEach(e=>{if(e){const i=e.split(md);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Un(n){let t="";if(_e(n))t=n;else if(Ut(n))for(let e=0;e<n.length;e++){const i=Un(n[e]);i&&(t+=i+" ")}else if(te(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const vd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xd=Ol(vd);function Mf(n){return!!n||n===""}function Md(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Gl(n[i],t[i]);return e}function Gl(n,t){if(n===t)return!0;let e=bc(n),i=bc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Nn(n),i=Nn(t),e||i)return n===t;if(e=Ut(n),i=Ut(t),e||i)return e&&i?Md(n,t):!1;if(e=te(n),i=te(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Gl(n[a],t[a]))return!1}}return String(n)===String(t)}const Sf=n=>!!(n&&n.__v_isRef===!0),ae=n=>_e(n)?n:n==null?"":Ut(n)||te(n)&&(n.toString===_f||!Gt(n.toString))?Sf(n)?ae(n.value):JSON.stringify(n,yf,2):String(n),yf=(n,t)=>Sf(t)?yf(n,t.value):Ss(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[qa(i,r)+" =>"]=s,e),{})}:pf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>qa(e))}:Nn(t)?qa(t):te(t)&&!Ut(t)&&!gf(t)?String(t):t,qa=(n,t="")=>{var e;return Nn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class Sd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Te&&(Te.active?(this.parent=Te,this.index=(Te.scopes||(Te.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Te;try{return Te=this,t()}finally{Te=e}}}on(){++this._on===1&&(this.prevScope=Te,Te=this)}off(){if(this._on>0&&--this._on===0){if(Te===this)Te=this.prevScope;else{let t=Te;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function yd(){return Te}let ce;const $a=new WeakSet;class Ef{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&(Te.active?Te.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ac(this),Af(this);const t=ce,e=Mn;ce=this,Mn=!0;try{return this.fn()}finally{wf(this),ce=t,Mn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)kl(t);this.deps=this.depsTail=void 0,Ac(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Uo(this)&&this.run()}get dirty(){return Uo(this)}}let bf=0,er,nr;function Tf(n,t=!1){if(n.flags|=8,t){n.next=nr,nr=n;return}n.next=er,er=n}function Hl(){bf++}function Vl(){if(--bf>0)return;if(nr){let t=nr;for(nr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;er;){let t=er;for(er=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Af(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function wf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),kl(i),Ed(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Uo(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Rf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Rf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===cr)||(n.globalVersion=cr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Uo(n))))return;n.flags|=2;const t=n.dep,e=ce,i=Mn;ce=n,Mn=!0;try{Af(n);const s=n.fn(n._value);(t.version===0||Ln(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ce=e,Mn=i,wf(n),n.flags&=-3}}function kl(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)kl(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ed(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Mn=!0;const Cf=[];function ei(){Cf.push(Mn),Mn=!1}function ni(){const n=Cf.pop();Mn=n===void 0?!0:n}function Ac(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ce;ce=void 0;try{t()}finally{ce=e}}}let cr=0;class bd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!Mn||ce===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ce)e=this.activeLink=new bd(ce,this),ce.deps?(e.prevDep=ce.depsTail,ce.depsTail.nextDep=e,ce.depsTail=e):ce.deps=ce.depsTail=e,Pf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ce.depsTail,e.nextDep=void 0,ce.depsTail.nextDep=e,ce.depsTail=e,ce.deps===e&&(ce.deps=i)}return e}trigger(t){this.version++,cr++,this.notify(t)}notify(t){Hl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Vl()}}}function Pf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Pf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const No=new WeakMap,Xi=Symbol(""),Fo=Symbol(""),ur=Symbol("");function Ce(n,t,e){if(Mn&&ce){let i=No.get(n);i||No.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Wl),s.map=i,s.key=e),s.track()}}function Kn(n,t,e,i,s,r){const a=No.get(n);if(!a){cr++;return}const o=l=>{l&&l.trigger()};if(Hl(),t==="clear")a.forEach(o);else{const l=Ut(n),c=l&&zl(e);if(l&&e==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===ur||!Nn(h)&&h>=u)&&o(f)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),c&&o(a.get(ur)),t){case"add":l?c&&o(a.get("length")):(o(a.get(Xi)),Ss(n)&&o(a.get(Fo)));break;case"delete":l||(o(a.get(Xi)),Ss(n)&&o(a.get(Fo)));break;case"set":Ss(n)&&o(a.get(Xi));break}}Vl()}function Ji(n){const t=jt(n);return t===n?t:(Ce(t,"iterate",ur),cn(n)?t:t.map(yn))}function La(n){return Ce(n=jt(n),"iterate",ur),n}function wn(n,t){return ii(n)?As(Yi(n)?yn(t):t):yn(t)}const Td={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,n=>wn(this,n))},concat(...n){return Ji(this).concat(...n.map(t=>Ut(t)?Ji(t):t))},entries(){return Ka(this,"entries",n=>(n[1]=wn(this,n[1]),n))},every(n,t){return zn(this,"every",n,t,void 0,arguments)},filter(n,t){return zn(this,"filter",n,t,e=>e.map(i=>wn(this,i)),arguments)},find(n,t){return zn(this,"find",n,t,e=>wn(this,e),arguments)},findIndex(n,t){return zn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return zn(this,"findLast",n,t,e=>wn(this,e),arguments)},findLastIndex(n,t){return zn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return zn(this,"forEach",n,t,void 0,arguments)},includes(...n){return ja(this,"includes",n)},indexOf(...n){return ja(this,"indexOf",n)},join(n){return Ji(this).join(n)},lastIndexOf(...n){return ja(this,"lastIndexOf",n)},map(n,t){return zn(this,"map",n,t,void 0,arguments)},pop(){return zs(this,"pop")},push(...n){return zs(this,"push",n)},reduce(n,...t){return wc(this,"reduce",n,t)},reduceRight(n,...t){return wc(this,"reduceRight",n,t)},shift(){return zs(this,"shift")},some(n,t){return zn(this,"some",n,t,void 0,arguments)},splice(...n){return zs(this,"splice",n)},toReversed(){return Ji(this).toReversed()},toSorted(n){return Ji(this).toSorted(n)},toSpliced(...n){return Ji(this).toSpliced(...n)},unshift(...n){return zs(this,"unshift",n)},values(){return Ka(this,"values",n=>wn(this,n))}};function Ka(n,t,e){const i=La(n),s=i[t]();return i!==n&&!cn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Ad=Array.prototype;function zn(n,t,e,i,s,r){const a=La(n),o=a!==n&&!cn(n),l=a[t];if(l!==Ad[t]){const f=l.apply(n,r);return o?yn(f):f}let c=e;a!==n&&(o?c=function(f,h){return e.call(this,wn(n,f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function wc(n,t,e,i){const s=La(n),r=s!==n&&!cn(n);let a=e,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=wn(n,c)),e.call(this,c,wn(n,u),f,n)}):e.length>3&&(a=function(c,u,f){return e.call(this,c,u,f,n)}));const l=s[t](a,...i);return o?wn(n,l):l}function ja(n,t,e){const i=jt(n);Ce(i,"iterate",ur);const s=i[t](...e);return(s===-1||s===!1)&&ql(e[0])?(e[0]=jt(e[0]),i[t](...e)):s}function zs(n,t,e=[]){ei(),Hl();const i=jt(n)[t].apply(n,e);return Vl(),ni(),i}const wd=Ol("__proto__,__v_isRef,__isVue"),Lf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Nn));function Rd(n){Nn(n)||(n=String(n));const t=jt(this);return Ce(t,"has",n),t.hasOwnProperty(n)}class Df{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Bd:Ff:r?Nf:Uf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Ut(t);if(!s){let l;if(a&&(l=Td[e]))return l;if(e==="hasOwnProperty")return Rd}const o=Reflect.get(t,e,Pe(t)?t:i);if((Nn(e)?Lf.has(e):wd(e))||(s||Ce(t,"get",e),r))return o;if(Pe(o)){const l=a&&zl(e)?o:o.value;return s&&te(l)?Bo(l):l}return te(o)?s?Bo(o):xr(o):o}}class If extends Df{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const a=Ut(t)&&zl(e);if(!this._isShallow){const c=ii(r);if(!cn(i)&&!ii(i)&&(r=jt(r),i=jt(i)),!a&&Pe(r)&&!Pe(i))return c||(r.value=i),!0}const o=a?Number(e)<t.length:Qt(t,e),l=Reflect.set(t,e,i,Pe(t)?t:s);return t===jt(s)&&(o?Ln(i,r)&&Kn(t,"set",e,i):Kn(t,"add",e,i)),l}deleteProperty(t,e){const i=Qt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Kn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Nn(e)||!Lf.has(e))&&Ce(t,"has",e),i}ownKeys(t){return Ce(t,"iterate",Ut(t)?"length":Xi),Reflect.ownKeys(t)}}class Cd extends Df{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Pd=new If,Ld=new Cd,Dd=new If(!0);const Oo=n=>n,Rr=n=>Reflect.getPrototypeOf(n);function Id(n,t,e){return function(...i){const s=this.__v_raw,r=jt(s),a=Ss(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=e?Oo:t?As:yn;return!t&&Ce(r,"iterate",l?Fo:Xi),be(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Cr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Ud(n,t){const e={get(s){const r=this.__v_raw,a=jt(r),o=jt(s);n||(Ln(s,o)&&Ce(a,"get",s),Ce(a,"get",o));const{has:l}=Rr(a),c=t?Oo:n?As:yn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ce(jt(s),"iterate",Xi),s.size},has(s){const r=this.__v_raw,a=jt(r),o=jt(s);return n||(Ln(s,o)&&Ce(a,"has",s),Ce(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=jt(o),c=t?Oo:n?As:yn;return!n&&Ce(l,"iterate",Xi),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return be(e,n?{add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear")}:{add(s){const r=jt(this),a=Rr(r),o=jt(s),l=!t&&!cn(s)&&!ii(s)?o:s;return a.has.call(r,l)||Ln(s,l)&&a.has.call(r,s)||Ln(o,l)&&a.has.call(r,o)||(r.add(l),Kn(r,"add",l,l)),this},set(s,r){!t&&!cn(r)&&!ii(r)&&(r=jt(r));const a=jt(this),{has:o,get:l}=Rr(a);let c=o.call(a,s);c||(s=jt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Ln(r,u)&&Kn(a,"set",s,r):Kn(a,"add",s,r),this},delete(s){const r=jt(this),{has:a,get:o}=Rr(r);let l=a.call(r,s);l||(s=jt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Kn(r,"delete",s,void 0),c},clear(){const s=jt(this),r=s.size!==0,a=s.clear();return r&&Kn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Id(s,n,t)}),e}function Xl(n,t){const e=Ud(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Qt(e,s)&&s in i?e:i,s,r)}const Nd={get:Xl(!1,!1)},Fd={get:Xl(!1,!0)},Od={get:Xl(!0,!1)};const Uf=new WeakMap,Nf=new WeakMap,Ff=new WeakMap,Bd=new WeakMap;function zd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xr(n){return ii(n)?n:Yl(n,!1,Pd,Nd,Uf)}function Gd(n){return Yl(n,!1,Dd,Fd,Nf)}function Bo(n){return Yl(n,!0,Ld,Od,Ff)}function Yl(n,t,e,i,s){if(!te(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=zd(cd(n));if(a===0)return n;const o=new Proxy(n,a===2?i:e);return s.set(n,o),o}function Yi(n){return ii(n)?Yi(n.__v_raw):!!(n&&n.__v_isReactive)}function ii(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function ql(n){return n?!!n.__v_raw:!1}function jt(n){const t=n&&n.__v_raw;return t?jt(t):n}function Hd(n){return!Qt(n,"__v_skip")&&Object.isExtensible(n)&&xf(n,"__v_skip",!0),n}const yn=n=>te(n)?xr(n):n,As=n=>te(n)?Bo(n):n;function Pe(n){return n?n.__v_isRef===!0:!1}function Rn(n){return Vd(n,!1)}function Vd(n,t){return Pe(n)?n:new kd(n,t)}class kd{constructor(t,e){this.dep=new Wl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:jt(t),this._value=e?t:yn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||cn(t)||ii(t);t=i?t:jt(t),Ln(t,e)&&(this._rawValue=t,this._value=i?t:yn(t),this.dep.trigger())}}function $l(n){return Pe(n)?n.value:n}const Wd={get:(n,t,e)=>t==="__v_raw"?n:$l(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Pe(s)&&!Pe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Of(n){return Yi(n)?n:new Proxy(n,Wd)}class Xd{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Wl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Tf(this,!0),!0}get value(){const t=this.dep.track();return Rf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Yd(n,t,e=!1){let i,s;return Gt(n)?i=n:(i=n.get,s=n.set),new Xd(i,s,e)}const Pr={},da=new WeakMap;let Ii;function qd(n,t=!1,e=Ii){if(e){let i=da.get(e);i||da.set(e,i=[]),i.push(n)}}function $d(n,t,e=oe){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=e,c=S=>s?S:cn(S)||s===!1||s===0?jn(S,1):jn(S);let u,f,h,p,g=!1,x=!1;if(Pe(n)?(f=()=>n.value,g=cn(n)):Yi(n)?(f=()=>c(n),g=!0):Ut(n)?(x=!0,g=n.some(S=>Yi(S)||cn(S)),f=()=>n.map(S=>{if(Pe(S))return S.value;if(Yi(S))return c(S);if(Gt(S))return l?l(S,2):S()})):Gt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){ei();try{h()}finally{ni()}}const S=Ii;Ii=u;try{return l?l(n,3,[p]):n(p)}finally{Ii=S}}:f=In,t&&s){const S=f,F=s===!0?1/0:s;f=()=>jn(S(),F)}const m=yd(),d=()=>{u.stop(),m&&m.active&&Bl(m.effects,u)};if(r&&t){const S=t;t=(...F)=>{S(...F),d()}}let A=x?new Array(n.length).fill(Pr):Pr;const T=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const F=u.run();if(s||g||(x?F.some((L,P)=>Ln(L,A[P])):Ln(F,A))){h&&h();const L=Ii;Ii=u;try{const P=[F,A===Pr?void 0:x&&A[0]===Pr?[]:A,p];A=F,l?l(t,3,P):t(...P)}finally{Ii=L}}}else u.run()};return o&&o(T),u=new Ef(f),u.scheduler=a?()=>a(T,!1):T,p=S=>qd(S,!1,u),h=u.onStop=()=>{const S=da.get(u);if(S){if(l)l(S,4);else for(const F of S)F();da.delete(u)}},t?i?T(!0):A=u.run():a?a(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function jn(n,t=1/0,e){if(t<=0||!te(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Pe(n))jn(n.value,t,e);else if(Ut(n))for(let i=0;i<n.length;i++)jn(n[i],t,e);else if(pf(n)||Ss(n))n.forEach(i=>{jn(i,t,e)});else if(gf(n)){for(const i in n)jn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mr(n,t,e,i){try{return i?n(...i):n()}catch(s){Da(s,t,e)}}function un(n,t,e,i){if(Gt(n)){const s=Mr(n,t,e,i);return s&&mf(s)&&s.catch(r=>{Da(r,t,e)}),s}if(Ut(n)){const s=[];for(let r=0;r<n.length;r++)s.push(un(n[r],t,e,i));return s}}function Da(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||oe;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){ei(),Mr(r,null,10,[n,l,c]),ni();return}}Kd(n,e,s,i,a)}function Kd(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ne=[];let An=-1;const ys=[];let mi=null,gs=0;const Bf=Promise.resolve();let pa=null;function jd(n){const t=pa||Bf;return n?t.then(this?n.bind(this):n):t}function Zd(n){let t=An+1,e=Ne.length;for(;t<e;){const i=t+e>>>1,s=Ne[i],r=fr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Kl(n){if(!(n.flags&1)){const t=fr(n),e=Ne[Ne.length-1];!e||!(n.flags&2)&&t>=fr(e)?Ne.push(n):Ne.splice(Zd(t),0,n),n.flags|=1,zf()}}function zf(){pa||(pa=Bf.then(Hf))}function Jd(n){Ut(n)?ys.push(...n):mi&&n.id===-1?mi.splice(gs+1,0,n):n.flags&1||(ys.push(n),n.flags|=1),zf()}function Rc(n,t,e=An+1){for(;e<Ne.length;e++){const i=Ne[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ne.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gf(n){if(ys.length){const t=[...new Set(ys)].sort((e,i)=>fr(e)-fr(i));if(ys.length=0,mi){mi.push(...t);return}for(mi=t,gs=0;gs<mi.length;gs++){const e=mi[gs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}mi=null,gs=0}}const fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Hf(n){try{for(An=0;An<Ne.length;An++){const t=Ne[An];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;An<Ne.length;An++){const t=Ne[An];t&&(t.flags&=-2)}An=-1,Ne.length=0,Gf(),pa=null,(Ne.length||ys.length)&&Hf()}}let ln=null,Vf=null;function ma(n){const t=ln;return ln=n,Vf=n&&n.type.__scopeId||null,t}function jl(n,t=ln,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&xa(-1);const r=ma(t);let a;try{a=n(...s)}finally{ma(r),i._d&&xa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Cc(n,t){if(ln===null)return n;const e=Ba(ln),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,o,l=oe]=t[s];r&&(Gt(r)&&(r={mounted:r,updated:r}),r.deep&&jn(a),i.push({dir:r,instance:e,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ei(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(ei(),un(l,e,8,[n.el,o,n,t]),ni())}}function Qd(n,t){if(Be){let e=Be.provides;const i=Be.parent&&Be.parent.provides;i===e&&(e=Be.provides=Object.create(i)),e[n]=t}}function sa(n,t,e=!1){const i=xh();if(i||Es){let s=Es?Es._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Gt(t)?t.call(i&&i.proxy):t}}const tp=Symbol.for("v-scx"),ep=()=>sa(tp);function Za(n,t,e){return kf(n,t,e)}function kf(n,t,e=oe){const{immediate:i,deep:s,flush:r,once:a}=e,o=be({},e),l=t&&i||!t&&r!=="post";let c;if(pr){if(r==="sync"){const p=ep();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=In,p.resume=In,p.pause=In,p}}const u=Be;o.call=(p,g,x)=>un(p,u,g,x);let f=!1;r==="post"?o.scheduler=p=>{Ve(p,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(p,g)=>{g?p():Kl(p)}),o.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=$d(n,t,o);return pr&&(c?c.push(h):l&&h()),h}function np(n,t,e){const i=this.proxy,s=_e(n)?n.includes(".")?Wf(i,n):()=>i[n]:n.bind(i,i);let r;Gt(t)?r=t:(r=t.handler,e=t);const a=Sr(this),o=kf(s,r.bind(i),e);return a(),o}function Wf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const ip=Symbol("_vte"),Xf=n=>n.__isTeleport,rn=Symbol("_leaveCb"),Gs=Symbol("_enterCb");function sp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zl(()=>{n.isMounted=!0}),Qf(()=>{n.isUnmounting=!0}),n}const nn=[Function,Array],Yf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},qf=n=>{const t=n.subTree;return t.component?qf(t.component):t},rp={name:"BaseTransition",props:Yf,setup(n,{slots:t}){const e=xh(),i=sp();return()=>{const s=t.default&&jf(t.default(),!0),r=s&&s.length?$f(s):e.subTree?Qe():void 0;if(!r)return;const a=jt(n),{mode:o}=a;if(i.isLeaving)return Ja(r);const l=Pc(r);if(!l)return Ja(r);let c=zo(l,a,i,e,f=>c=f);l.type!==Oe&&hr(l,c);let u=e.subTree&&Pc(e.subTree);if(u&&u.type!==Oe&&!Fi(u,l)&&qf(e).type!==Oe){let f=zo(u,a,i,e);if(hr(u,f),o==="out-in"&&l.type!==Oe)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,u=void 0},Ja(r);o==="in-out"&&l.type!==Oe?f.delayLeave=(h,p,g)=>{const x=Kf(i,u);x[String(u.key)]=u,h[rn]=()=>{p(),h[rn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function $f(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Oe){t=e;break}}return t}const ap=rp;function Kf(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function zo(n,t,e,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:m,onAppear:d,onAfterAppear:A,onAppearCancelled:T}=t,S=String(n.key),F=Kf(e,n),L=(y,M)=>{y&&un(y,i,9,M)},P=(y,M)=>{const R=M[1];L(y,M),Ut(y)?y.every(I=>I.length<=1)&&R():y.length<=1&&R()},U={mode:a,persisted:o,beforeEnter(y){let M=l;if(!e.isMounted)if(r)M=m||l;else return;y[rn]&&y[rn](!0);const R=F[S];R&&Fi(n,R)&&R.el[rn]&&R.el[rn](),L(M,[y])},enter(y){if(F[S]===n)return;let M=c,R=u,I=f;if(!e.isMounted)if(r)M=d||c,R=A||u,I=T||f;else return;let z=!1;y[Gs]=nt=>{z||(z=!0,nt?L(I,[y]):L(R,[y]),U.delayedLeave&&U.delayedLeave(),y[Gs]=void 0)};const Z=y[Gs].bind(null,!1);M?P(M,[y,Z]):Z()},leave(y,M){const R=String(n.key);if(y[Gs]&&y[Gs](!0),e.isUnmounting)return M();L(h,[y]);let I=!1;y[rn]=Z=>{I||(I=!0,M(),Z?L(x,[y]):L(g,[y]),y[rn]=void 0,F[R]===n&&delete F[R])};const z=y[rn].bind(null,!1);F[R]=n,p?P(p,[y,z]):z()},clone(y){const M=zo(y,t,e,i,s);return s&&s(M),M}};return U}function Ja(n){if(Ia(n))return n=xi(n),n.children=null,n}function Pc(n){if(!Ia(n))return Xf(n.type)&&n.children?$f(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Gt(e.default))return e.default()}}function hr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,hr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function jf(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=e==null?a.key:String(e)+String(a.key!=null?a.key:r);a.type===ke?(a.patchFlag&128&&s++,i=i.concat(jf(a.children,t,o))):(t||a.type!==Oe)&&i.push(o!=null?xi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Zf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Lc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const _a=new WeakMap;function ir(n,t,e,i,s=!1){if(Ut(n)){n.forEach((x,m)=>ir(x,t&&(Ut(t)?t[m]:t),e,i,s));return}if(sr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ir(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ba(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=t&&t.r,u=o.refs===oe?o.refs={}:o.refs,f=o.setupState,h=jt(f),p=f===oe?df:x=>Lc(u,x)?!1:Qt(h,x),g=(x,m)=>!(m&&Lc(u,m));if(c!=null&&c!==l){if(Dc(t),_e(c))u[c]=null,p(c)&&(f[c]=null);else if(Pe(c)){const x=t;g(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Gt(l))Mr(l,o,12,[a,u]);else{const x=_e(l),m=Pe(l);if(x||m){const d=()=>{if(n.f){const A=x?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ut(A)&&Bl(A,r);else if(Ut(A))A.includes(r)||A.push(r);else if(x)u[l]=[r],p(l)&&(f[l]=u[l]);else{const T=[r];g(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else x?(u[l]=a,p(l)&&(f[l]=a)):m&&(g(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const A=()=>{d(),_a.delete(n)};A.id=-1,_a.set(n,A),Ve(A,e)}else Dc(n),d()}}}function Dc(n){const t=_a.get(n);t&&(t.flags|=8,_a.delete(n))}Ca().requestIdleCallback;Ca().cancelIdleCallback;const sr=n=>!!n.type.__asyncLoader,Ia=n=>n.type.__isKeepAlive;function op(n,t){Jf(n,"a",t)}function lp(n,t){Jf(n,"da",t)}function Jf(n,t,e=Be){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ua(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Ia(s.parent.vnode)&&cp(i,t,e,s),s=s.parent}}function cp(n,t,e,i){const s=Ua(t,n,i,!0);Na(()=>{Bl(i[t],s)},e)}function Ua(n,t,e=Be,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...a)=>{ei();const o=Sr(e),l=un(t,e,n,a);return o(),ni(),l});return i?s.unshift(r):s.push(r),r}}const ri=n=>(t,e=Be)=>{(!pr||n==="sp")&&Ua(n,(...i)=>t(...i),e)},up=ri("bm"),Zl=ri("m"),fp=ri("bu"),hp=ri("u"),Qf=ri("bum"),Na=ri("um"),dp=ri("sp"),pp=ri("rtg"),mp=ri("rtc");function _p(n,t=Be){Ua("ec",n,t)}const gp=Symbol.for("v-ndc");function ga(n,t,e,i){let s;const r=e,a=Ut(n);if(a||_e(n)){const o=a&&Yi(n);let l=!1,c=!1;o&&(l=!cn(n),c=ii(n),n=La(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=t(l?c?As(yn(n[u])):yn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r)}else if(te(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>t(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Go=n=>n?Mh(n)?Ba(n):Go(n.parent):null,rr=be(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Go(n.parent),$root:n=>Go(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>eh(n),$forceUpdate:n=>n.f||(n.f=()=>{Kl(n.update)}),$nextTick:n=>n.n||(n.n=jd.bind(n.proxy)),$watch:n=>np.bind(n)}),Qa=(n,t)=>n!==oe&&!n.__isScriptSetup&&Qt(n,t),vp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Qa(i,t))return a[t]=1,i[t];if(s!==oe&&Qt(s,t))return a[t]=2,s[t];if(Qt(r,t))return a[t]=3,r[t];if(e!==oe&&Qt(e,t))return a[t]=4,e[t];Ho&&(a[t]=0)}}const c=rr[t];let u,f;if(c)return t==="$attrs"&&Ce(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[t]))return u;if(e!==oe&&Qt(e,t))return a[t]=4,e[t];if(f=l.config.globalProperties,Qt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Qa(s,t)?(s[t]=e,!0):i!==oe&&Qt(i,t)?(i[t]=e,!0):Qt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(e[o]||n!==oe&&o[0]!=="$"&&Qt(n,o)||Qa(t,o)||Qt(r,o)||Qt(i,o)||Qt(rr,o)||Qt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Qt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ic(n){return Ut(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ho=!0;function xp(n){const t=eh(n),e=n.proxy,i=n.ctx;Ho=!1,t.beforeCreate&&Uc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:T,unmounted:S,render:F,renderTracked:L,renderTriggered:P,errorCaptured:U,serverPrefetch:y,expose:M,inheritAttrs:R,components:I,directives:z,filters:Z}=t;if(c&&Mp(c,i,null),a)for(const tt in a){const V=a[tt];Gt(V)&&(i[tt]=V.bind(e))}if(s){const tt=s.call(e,e);te(tt)&&(n.data=xr(tt))}if(Ho=!0,r)for(const tt in r){const V=r[tt],it=Gt(V)?V.bind(e,e):Gt(V.get)?V.get.bind(e,e):In,ot=!Gt(V)&&Gt(V.set)?V.set.bind(e):In,Et=nc({get:it,set:ot});Object.defineProperty(i,tt,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Dt=>Et.value=Dt})}if(o)for(const tt in o)th(o[tt],i,e,tt);if(l){const tt=Gt(l)?l.call(e):l;Reflect.ownKeys(tt).forEach(V=>{Qd(V,tt[V])})}u&&Uc(u,n,"c");function $(tt,V){Ut(V)?V.forEach(it=>tt(it.bind(e))):V&&tt(V.bind(e))}if($(up,f),$(Zl,h),$(fp,p),$(hp,g),$(op,x),$(lp,m),$(_p,U),$(mp,L),$(pp,P),$(Qf,A),$(Na,S),$(dp,y),Ut(M))if(M.length){const tt=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(tt,V,{get:()=>e[V],set:it=>e[V]=it,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===In&&(n.render=F),R!=null&&(n.inheritAttrs=R),I&&(n.components=I),z&&(n.directives=z),y&&Zf(n)}function Mp(n,t,e=In){Ut(n)&&(n=Vo(n));for(const i in n){const s=n[i];let r;te(s)?"default"in s?r=sa(s.from||i,s.default,!0):r=sa(s.from||i):r=sa(s),Pe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function Uc(n,t,e){un(Ut(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function th(n,t,e,i){let s=i.includes(".")?Wf(e,i):()=>e[i];if(_e(n)){const r=t[n];Gt(r)&&Za(s,r)}else if(Gt(n))Za(s,n.bind(e));else if(te(n))if(Ut(n))n.forEach(r=>th(r,t,e,i));else{const r=Gt(n.handler)?n.handler.bind(e):t[n.handler];Gt(r)&&Za(s,r,n)}}function eh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>va(l,c,a,!0)),va(l,t,a)),te(t)&&r.set(t,l),l}function va(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&va(n,r,e,!0),s&&s.forEach(a=>va(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=Sp[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const Sp={data:Nc,props:Fc,emits:Fc,methods:js,computed:js,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:js,directives:js,watch:Ep,provide:Nc,inject:yp};function Nc(n,t){return t?n?function(){return be(Gt(n)?n.call(this,this):n,Gt(t)?t.call(this,this):t)}:t:n}function yp(n,t){return js(Vo(n),Vo(t))}function Vo(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ie(n,t){return n?[...new Set([].concat(n,t))]:t}function js(n,t){return n?be(Object.create(null),n,t):t}function Fc(n,t){return n?Ut(n)&&Ut(t)?[...new Set([...n,...t])]:be(Object.create(null),Ic(n),Ic(t??{})):t}function Ep(n,t){if(!n)return t;if(!t)return n;const e=be(Object.create(null),n);for(const i in t)e[i]=Ie(n[i],t[i]);return e}function nh(){return{app:null,config:{isNativeTag:df,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bp=0;function Tp(n,t){return function(i,s=null){Gt(i)||(i=be({},i)),s!=null&&!te(s)&&(s=null);const r=nh(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:bp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:rm,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&Gt(u.install)?(a.add(u),u.install(c,...f)):Gt(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||me(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ba(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(un(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Es;Es=c;try{return u()}finally{Es=f}}};return c}}let Es=null;const Ap=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${xn(t)}Modifiers`]||n[`${ji(t)}Modifiers`];function wp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||oe;let s=e;const r=t.startsWith("update:"),a=r&&Ap(i,t.slice(7));a&&(a.trim&&(s=e.map(u=>_e(u)?u.trim():u)),a.number&&(s=e.map(hd)));let o,l=i[o=Xa(t)]||i[o=Xa(xn(t))];!l&&r&&(l=i[o=Xa(ji(t))]),l&&un(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,un(c,n,6,s)}}const Rp=new WeakMap;function ih(n,t,e=!1){const i=e?Rp:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Gt(n)){const l=c=>{const u=ih(c,t,!0);u&&(o=!0,be(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(te(n)&&i.set(n,null),null):(Ut(r)?r.forEach(l=>a[l]=null):be(a,r),te(n)&&i.set(n,a),a)}function Fa(n,t){return!n||!Aa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Qt(n,t[0].toLowerCase()+t.slice(1))||Qt(n,ji(t))||Qt(n,t))}function Oc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:x}=n,m=ma(n);let d,A;try{if(e.shapeFlag&4){const S=s||i,F=S;d=Cn(c.call(F,S,u,f,p,h,g)),A=o}else{const S=t;d=Cn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),A=t.props?o:Cp(o)}}catch(S){ar.length=0,Da(S,n,1),d=me(Oe)}let T=d;if(A&&x!==!1){const S=Object.keys(A),{shapeFlag:F}=T;S.length&&F&7&&(r&&S.some(wa)&&(A=Pp(A,r)),T=xi(T,A,!1,!0))}return e.dirs&&(T=xi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition&&hr(T,e.transition),d=T,ma(m),d}const Cp=n=>{let t;for(const e in n)(e==="class"||e==="style"||Aa(e))&&((t||(t={}))[e]=n[e]);return t},Pp=(n,t)=>{const e={};for(const i in n)(!wa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Lp(n,t,e){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Bc(i,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(sh(a,i,h)&&!Fa(c,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Bc(i,a,c):!0:!!a;return!1}function Bc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(sh(t,n,r)&&!Fa(e,r))return!0}return!1}function sh(n,t,e){const i=n[e],s=t[e];return e==="style"&&te(i)&&te(s)?!Gl(i,s):i!==s}function Dp({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const rh={},ah=()=>Object.create(rh),oh=n=>Object.getPrototypeOf(n)===rh;function Ip(n,t,e,i=!1){const s={},r=ah();n.propsDefaults=Object.create(null),lh(n,t,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=i?s:Gd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Up(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=jt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Fa(n.emitsOptions,h))continue;const p=t[h];if(l)if(Qt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=xn(h);s[g]=ko(l,o,g,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{lh(n,t,s,r)&&(c=!0);let u;for(const f in o)(!t||!Qt(t,f)&&((u=ji(f))===f||!Qt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=ko(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!t||!Qt(t,f))&&(delete r[f],c=!0)}c&&Kn(n.attrs,"set","")}function lh(n,t,e,i){const[s,r]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(tr(l))continue;const c=t[l];let u;s&&Qt(s,u=xn(l))?!r||!r.includes(u)?e[u]=c:(o||(o={}))[u]=c:Fa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=jt(e),c=o||oe;for(let u=0;u<r.length;u++){const f=r[u];e[f]=ko(s,l,f,c[f],n,!Qt(c,f))}}return a}function ko(n,t,e,i,s,r){const a=n[e];if(a!=null){const o=Qt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Gt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Sr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ji(e))&&(i=!0))}return i}const Np=new WeakMap;function ch(n,t,e=!1){const i=e?Np:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Gt(n)){const u=f=>{l=!0;const[h,p]=ch(f,t,!0);be(a,h),p&&o.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return te(n)&&i.set(n,Ms),Ms;if(Ut(r))for(let u=0;u<r.length;u++){const f=xn(r[u]);zc(f)&&(a[f]=oe)}else if(r)for(const u in r){const f=xn(u);if(zc(f)){const h=r[u],p=a[f]=Ut(h)||Gt(h)?{type:h}:be({},h),g=p.type;let x=!1,m=!0;if(Ut(g))for(let d=0;d<g.length;++d){const A=g[d],T=Gt(A)&&A.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(m=!1)}else x=Gt(g)&&g.name==="Boolean";p[0]=x,p[1]=m,(x||Qt(p,"default"))&&o.push(f)}}const c=[a,o];return te(n)&&i.set(n,c),c}function zc(n){return n[0]!=="$"&&!tr(n)}const Jl=n=>n==="_"||n==="_ctx"||n==="$stable",Ql=n=>Ut(n)?n.map(Cn):[Cn(n)],Fp=(n,t,e)=>{if(t._n)return t;const i=jl((...s)=>Ql(t(...s)),e);return i._c=!1,i},uh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Jl(s))continue;const r=n[s];if(Gt(r))t[s]=Fp(s,r,i);else if(r!=null){const a=Ql(r);t[s]=()=>a}}},fh=(n,t)=>{const e=Ql(t);n.slots.default=()=>e},hh=(n,t,e)=>{for(const i in t)(e||!Jl(i))&&(n[i]=t[i])},Op=(n,t,e)=>{const i=n.slots=ah();if(n.vnode.shapeFlag&32){const s=t._;s?(hh(i,t,e),e&&xf(i,"_",s,!0)):uh(t,i)}else t&&fh(n,t)},Bp=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,a=oe;if(i.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:hh(s,t,e):(r=!t.$stable,uh(t,s)),a=t}else t&&(fh(n,t),a={default:1});if(r)for(const o in s)!Jl(o)&&a[o]==null&&delete s[o]},Ve=kp;function zp(n){return Gp(n)}function Gp(n,t){const e=Ca();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=In,insertStaticContent:g}=n,x=(w,D,b,st=null,K=null,q=null,Q=void 0,at=null,j=!!D.dynamicChildren)=>{if(w===D)return;w&&!Fi(w,D)&&(st=_t(w),Dt(w,K,q,!0),w=null),D.patchFlag===-2&&(j=!1,D.dynamicChildren=null);const{type:v,ref:_,shapeFlag:C}=D;switch(v){case Oa:m(w,D,b,st);break;case Oe:d(w,D,b,st);break;case ra:w==null&&A(D,b,st,Q);break;case ke:I(w,D,b,st,K,q,Q,at,j);break;default:C&1?F(w,D,b,st,K,q,Q,at,j):C&6?z(w,D,b,st,K,q,Q,at,j):(C&64||C&128)&&v.process(w,D,b,st,K,q,Q,at,j,Bt)}_!=null&&K?ir(_,w&&w.ref,q,D||w,!D):_==null&&w&&w.ref!=null&&ir(w.ref,null,q,w,!0)},m=(w,D,b,st)=>{if(w==null)i(D.el=o(D.children),b,st);else{const K=D.el=w.el;D.children!==w.children&&c(K,D.children)}},d=(w,D,b,st)=>{w==null?i(D.el=l(D.children||""),b,st):D.el=w.el},A=(w,D,b,st)=>{[w.el,w.anchor]=g(w.children,D,b,st,w.el,w.anchor)},T=({el:w,anchor:D},b,st)=>{let K;for(;w&&w!==D;)K=h(w),i(w,b,st),w=K;i(D,b,st)},S=({el:w,anchor:D})=>{let b;for(;w&&w!==D;)b=h(w),s(w),w=b;s(D)},F=(w,D,b,st,K,q,Q,at,j)=>{if(D.type==="svg"?Q="svg":D.type==="math"&&(Q="mathml"),w==null)L(D,b,st,K,q,Q,at,j);else{const v=w.el&&w.el._isVueCE?w.el:null;try{v&&v._beginPatch(),y(w,D,K,q,Q,at,j)}finally{v&&v._endPatch()}}},L=(w,D,b,st,K,q,Q,at)=>{let j,v;const{props:_,shapeFlag:C,transition:H,dirs:W}=w;if(j=w.el=a(w.type,q,_&&_.is,_),C&8?u(j,w.children):C&16&&U(w.children,j,null,st,K,to(w,q),Q,at),W&&Ei(w,null,st,"created"),P(j,w,w.scopeId,Q,st),_){for(const pt in _)pt!=="value"&&!tr(pt)&&r(j,pt,null,_[pt],q,st);"value"in _&&r(j,"value",null,_.value,q),(v=_.onVnodeBeforeMount)&&Tn(v,st,w)}W&&Ei(w,null,st,"beforeMount");const k=Hp(K,H);k&&H.beforeEnter(j),i(j,D,b),((v=_&&_.onVnodeMounted)||k||W)&&Ve(()=>{try{v&&Tn(v,st,w),k&&H.enter(j),W&&Ei(w,null,st,"mounted")}finally{}},K)},P=(w,D,b,st,K)=>{if(b&&p(w,b),st)for(let q=0;q<st.length;q++)p(w,st[q]);if(K){let q=K.subTree;if(D===q||_h(q.type)&&(q.ssContent===D||q.ssFallback===D)){const Q=K.vnode;P(w,Q,Q.scopeId,Q.slotScopeIds,K.parent)}}},U=(w,D,b,st,K,q,Q,at,j=0)=>{for(let v=j;v<w.length;v++){const _=w[v]=at?$n(w[v]):Cn(w[v]);x(null,_,D,b,st,K,q,Q,at)}},y=(w,D,b,st,K,q,Q)=>{const at=D.el=w.el;let{patchFlag:j,dynamicChildren:v,dirs:_}=D;j|=w.patchFlag&16;const C=w.props||oe,H=D.props||oe;let W;if(b&&bi(b,!1),(W=H.onVnodeBeforeUpdate)&&Tn(W,b,D,w),_&&Ei(D,w,b,"beforeUpdate"),b&&bi(b,!0),(C.innerHTML&&H.innerHTML==null||C.textContent&&H.textContent==null)&&u(at,""),v?M(w.dynamicChildren,v,at,b,st,to(D,K),q):Q||V(w,D,at,null,b,st,to(D,K),q,!1),j>0){if(j&16)R(at,C,H,b,K);else if(j&2&&C.class!==H.class&&r(at,"class",null,H.class,K),j&4&&r(at,"style",C.style,H.style,K),j&8){const k=D.dynamicProps;for(let pt=0;pt<k.length;pt++){const lt=k[pt],ht=C[lt],Lt=H[lt];(Lt!==ht||lt==="value")&&r(at,lt,ht,Lt,K,b)}}j&1&&w.children!==D.children&&u(at,D.children)}else!Q&&v==null&&R(at,C,H,b,K);((W=H.onVnodeUpdated)||_)&&Ve(()=>{W&&Tn(W,b,D,w),_&&Ei(D,w,b,"updated")},st)},M=(w,D,b,st,K,q,Q)=>{for(let at=0;at<D.length;at++){const j=w[at],v=D[at],_=j.el&&(j.type===ke||!Fi(j,v)||j.shapeFlag&198)?f(j.el):b;x(j,v,_,null,st,K,q,Q,!0)}},R=(w,D,b,st,K)=>{if(D!==b){if(D!==oe)for(const q in D)!tr(q)&&!(q in b)&&r(w,q,D[q],null,K,st);for(const q in b){if(tr(q))continue;const Q=b[q],at=D[q];Q!==at&&q!=="value"&&r(w,q,at,Q,K,st)}"value"in b&&r(w,"value",D.value,b.value,K)}},I=(w,D,b,st,K,q,Q,at,j)=>{const v=D.el=w?w.el:o(""),_=D.anchor=w?w.anchor:o("");let{patchFlag:C,dynamicChildren:H,slotScopeIds:W}=D;W&&(at=at?at.concat(W):W),w==null?(i(v,b,st),i(_,b,st),U(D.children||[],b,_,K,q,Q,at,j)):C>0&&C&64&&H&&w.dynamicChildren&&w.dynamicChildren.length===H.length?(M(w.dynamicChildren,H,b,K,q,Q,at),(D.key!=null||K&&D===K.subTree)&&dh(w,D,!0)):V(w,D,b,_,K,q,Q,at,j)},z=(w,D,b,st,K,q,Q,at,j)=>{D.slotScopeIds=at,w==null?D.shapeFlag&512?K.ctx.activate(D,b,st,Q,j):Z(D,b,st,K,q,Q,j):nt(w,D,j)},Z=(w,D,b,st,K,q,Q)=>{const at=w.component=Jp(w,st,K);if(Ia(w)&&(at.ctx.renderer=Bt),Qp(at,!1,Q),at.asyncDep){if(K&&K.registerDep(at,$,Q),!w.el){const j=at.subTree=me(Oe);d(null,j,D,b),w.placeholder=j.el}}else $(at,w,D,b,K,q,Q)},nt=(w,D,b)=>{const st=D.component=w.component;if(Lp(w,D,b))if(st.asyncDep&&!st.asyncResolved){tt(st,D,b);return}else st.next=D,st.update();else D.el=w.el,st.vnode=D},$=(w,D,b,st,K,q,Q)=>{const at=()=>{if(w.isMounted){let{next:C,bu:H,u:W,parent:k,vnode:pt}=w;{const vt=ph(w);if(vt){C&&(C.el=pt.el,tt(w,C,Q)),vt.asyncDep.then(()=>{Ve(()=>{w.isUnmounted||v()},K)});return}}let lt=C,ht;bi(w,!1),C?(C.el=pt.el,tt(w,C,Q)):C=pt,H&&Ya(H),(ht=C.props&&C.props.onVnodeBeforeUpdate)&&Tn(ht,k,C,pt),bi(w,!0);const Lt=Oc(w),ct=w.subTree;w.subTree=Lt,x(ct,Lt,f(ct.el),_t(ct),w,K,q),C.el=Lt.el,lt===null&&Dp(w,Lt.el),W&&Ve(W,K),(ht=C.props&&C.props.onVnodeUpdated)&&Ve(()=>Tn(ht,k,C,pt),K)}else{let C;const{el:H,props:W}=D,{bm:k,m:pt,parent:lt,root:ht,type:Lt}=w,ct=sr(D);bi(w,!1),k&&Ya(k),!ct&&(C=W&&W.onVnodeBeforeMount)&&Tn(C,lt,D),bi(w,!0);{ht.ce&&ht.ce._hasShadowRoot()&&ht.ce._injectChildStyle(Lt,w.parent?w.parent.type:void 0);const vt=w.subTree=Oc(w);x(null,vt,b,st,w,K,q),D.el=vt.el}if(pt&&Ve(pt,K),!ct&&(C=W&&W.onVnodeMounted)){const vt=D;Ve(()=>Tn(C,lt,vt),K)}(D.shapeFlag&256||lt&&sr(lt.vnode)&&lt.vnode.shapeFlag&256)&&w.a&&Ve(w.a,K),w.isMounted=!0,D=b=st=null}};w.scope.on();const j=w.effect=new Ef(at);w.scope.off();const v=w.update=j.run.bind(j),_=w.job=j.runIfDirty.bind(j);_.i=w,_.id=w.uid,j.scheduler=()=>Kl(_),bi(w,!0),v()},tt=(w,D,b)=>{D.component=w;const st=w.vnode.props;w.vnode=D,w.next=null,Up(w,D.props,st,b),Bp(w,D.children,b),ei(),Rc(w),ni()},V=(w,D,b,st,K,q,Q,at,j=!1)=>{const v=w&&w.children,_=w?w.shapeFlag:0,C=D.children,{patchFlag:H,shapeFlag:W}=D;if(H>0){if(H&128){ot(v,C,b,st,K,q,Q,at,j);return}else if(H&256){it(v,C,b,st,K,q,Q,at,j);return}}W&8?(_&16&&bt(v,K,q),C!==v&&u(b,C)):_&16?W&16?ot(v,C,b,st,K,q,Q,at,j):bt(v,K,q,!0):(_&8&&u(b,""),W&16&&U(C,b,st,K,q,Q,at,j))},it=(w,D,b,st,K,q,Q,at,j)=>{w=w||Ms,D=D||Ms;const v=w.length,_=D.length,C=Math.min(v,_);let H;for(H=0;H<C;H++){const W=D[H]=j?$n(D[H]):Cn(D[H]);x(w[H],W,b,null,K,q,Q,at,j)}v>_?bt(w,K,q,!0,!1,C):U(D,b,st,K,q,Q,at,j,C)},ot=(w,D,b,st,K,q,Q,at,j)=>{let v=0;const _=D.length;let C=w.length-1,H=_-1;for(;v<=C&&v<=H;){const W=w[v],k=D[v]=j?$n(D[v]):Cn(D[v]);if(Fi(W,k))x(W,k,b,null,K,q,Q,at,j);else break;v++}for(;v<=C&&v<=H;){const W=w[C],k=D[H]=j?$n(D[H]):Cn(D[H]);if(Fi(W,k))x(W,k,b,null,K,q,Q,at,j);else break;C--,H--}if(v>C){if(v<=H){const W=H+1,k=W<_?D[W].el:st;for(;v<=H;)x(null,D[v]=j?$n(D[v]):Cn(D[v]),b,k,K,q,Q,at,j),v++}}else if(v>H)for(;v<=C;)Dt(w[v],K,q,!0),v++;else{const W=v,k=v,pt=new Map;for(v=k;v<=H;v++){const mt=D[v]=j?$n(D[v]):Cn(D[v]);mt.key!=null&&pt.set(mt.key,v)}let lt,ht=0;const Lt=H-k+1;let ct=!1,vt=0;const Ct=new Array(Lt);for(v=0;v<Lt;v++)Ct[v]=0;for(v=W;v<=C;v++){const mt=w[v];if(ht>=Lt){Dt(mt,K,q,!0);continue}let Ft;if(mt.key!=null)Ft=pt.get(mt.key);else for(lt=k;lt<=H;lt++)if(Ct[lt-k]===0&&Fi(mt,D[lt])){Ft=lt;break}Ft===void 0?Dt(mt,K,q,!0):(Ct[Ft-k]=v+1,Ft>=vt?vt=Ft:ct=!0,x(mt,D[Ft],b,null,K,q,Q,at,j),ht++)}const It=ct?Vp(Ct):Ms;for(lt=It.length-1,v=Lt-1;v>=0;v--){const mt=k+v,Ft=D[mt],zt=D[mt+1],ee=mt+1<_?zt.el||mh(zt):st;Ct[v]===0?x(null,Ft,b,ee,K,q,Q,at,j):ct&&(lt<0||v!==It[lt]?Et(Ft,b,ee,2):lt--)}}},Et=(w,D,b,st,K=null)=>{const{el:q,type:Q,transition:at,children:j,shapeFlag:v}=w;if(v&6){Et(w.component.subTree,D,b,st);return}if(v&128){w.suspense.move(D,b,st);return}if(v&64){Q.move(w,D,b,Bt);return}if(Q===ke){i(q,D,b);for(let C=0;C<j.length;C++)Et(j[C],D,b,st);i(w.anchor,D,b);return}if(Q===ra){T(w,D,b);return}if(st!==2&&v&1&&at)if(st===0)at.persisted&&!q[rn]?i(q,D,b):(at.beforeEnter(q),i(q,D,b),Ve(()=>at.enter(q),K));else{const{leave:C,delayLeave:H,afterLeave:W}=at,k=()=>{w.ctx.isUnmounted?s(q):i(q,D,b)},pt=()=>{const lt=q._isLeaving||!!q[rn];q._isLeaving&&q[rn](!0),at.persisted&&!lt?k():C(q,()=>{k(),W&&W()})};H?H(q,k,pt):pt()}else i(q,D,b)},Dt=(w,D,b,st=!1,K=!1)=>{const{type:q,props:Q,ref:at,children:j,dynamicChildren:v,shapeFlag:_,patchFlag:C,dirs:H,cacheIndex:W,memo:k}=w;if(C===-2&&(K=!1),at!=null&&(ei(),ir(at,null,b,w,!0),ni()),W!=null&&(D.renderCache[W]=void 0),_&256){D.ctx.deactivate(w);return}const pt=_&1&&H,lt=!sr(w);let ht;if(lt&&(ht=Q&&Q.onVnodeBeforeUnmount)&&Tn(ht,D,w),_&6)ut(w.component,b,st);else{if(_&128){w.suspense.unmount(b,st);return}pt&&Ei(w,null,D,"beforeUnmount"),_&64?w.type.remove(w,D,b,Bt,st):v&&!v.hasOnce&&(q!==ke||C>0&&C&64)?bt(v,D,b,!1,!0):(q===ke&&C&384||!K&&_&16)&&bt(j,D,b),st&&Kt(w)}const Lt=k!=null&&W==null;(lt&&(ht=Q&&Q.onVnodeUnmounted)||pt||Lt)&&Ve(()=>{ht&&Tn(ht,D,w),pt&&Ei(w,null,D,"unmounted"),Lt&&(w.el=null)},b)},Kt=w=>{const{type:D,el:b,anchor:st,transition:K}=w;if(D===ke){et(b,st);return}if(D===ra){S(w);return}const q=()=>{s(b),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(w.shapeFlag&1&&K&&!K.persisted){const{leave:Q,delayLeave:at}=K,j=()=>Q(b,q);at?at(w.el,q,j):j()}else q()},et=(w,D)=>{let b;for(;w!==D;)b=h(w),s(w),w=b;s(D)},ut=(w,D,b)=>{const{bum:st,scope:K,job:q,subTree:Q,um:at,m:j,a:v}=w;Gc(j),Gc(v),st&&Ya(st),K.stop(),q&&(q.flags|=8,Dt(Q,w,D,b)),at&&Ve(at,D),Ve(()=>{w.isUnmounted=!0},D)},bt=(w,D,b,st=!1,K=!1,q=0)=>{for(let Q=q;Q<w.length;Q++)Dt(w[Q],D,b,st,K)},_t=w=>{if(w.shapeFlag&6)return _t(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const D=h(w.anchor||w.el),b=D&&D[ip];return b?h(b):D};let Pt=!1;const Nt=(w,D,b)=>{let st;w==null?D._vnode&&(Dt(D._vnode,null,null,!0),st=D._vnode.component):x(D._vnode||null,w,D,null,null,null,b),D._vnode=w,Pt||(Pt=!0,Rc(st),Gf(),Pt=!1)},Bt={p:x,um:Dt,m:Et,r:Kt,mt:Z,mc:U,pc:V,pbc:M,n:_t,o:n};return{render:Nt,hydrate:void 0,createApp:Tp(Nt)}}function to({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function bi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Hp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function dh(n,t,e=!1){const i=n.children,s=t.children;if(Ut(i)&&Ut(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=$n(s[r]),o.el=a.el),!e&&o.patchFlag!==-2&&dh(a,o)),o.type===Oa&&(o.patchFlag===-1&&(o=s[r]=$n(o)),o.el=a.el),o.type===Oe&&!o.el&&(o.el=a.el)}}function Vp(n){const t=n.slice(),e=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,n[e[o]]<c?r=o+1:a=o;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}function ph(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ph(t)}function Gc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function mh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?mh(t.subTree):null}const _h=n=>n.__isSuspense;function kp(n,t){t&&t.pendingBranch?Ut(n)?t.effects.push(...n):t.effects.push(n):Jd(n)}const ke=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),Oe=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),ar=[];let Je=null;function re(n=!1){ar.push(Je=n?null:[])}function Wp(){ar.pop(),Je=ar[ar.length-1]||null}let dr=1;function xa(n,t=!1){dr+=n,n<0&&Je&&t&&(Je.hasOnce=!0)}function gh(n){return n.dynamicChildren=dr>0?Je||Ms:null,Wp(),dr>0&&Je&&Je.push(n),n}function he(n,t,e,i,s,r){return gh(ft(n,t,e,i,s,r,!0))}function tc(n,t,e,i,s){return gh(me(n,t,e,i,s,!0))}function Ma(n){return n?n.__v_isVNode===!0:!1}function Fi(n,t){return n.type===t.type&&n.key===t.key}const vh=({key:n})=>n??null,aa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?_e(n)||Pe(n)||Gt(n)?{i:ln,r:n,k:t,f:!!e}:n:null);function ft(n,t=null,e=null,i=0,s=null,r=n===ke?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&vh(t),ref:t&&aa(t),scopeId:Vf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ln};return o?(ec(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=_e(e)?8:16),dr>0&&!a&&Je&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Je.push(l),l}const me=Xp;function Xp(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===gp)&&(n=Oe),Ma(n)){const o=xi(n,t,!0);return e&&ec(o,e),dr>0&&!r&&Je&&(o.shapeFlag&6?Je[Je.indexOf(n)]=o:Je.push(o)),o.patchFlag=-2,o}if(im(n)&&(n=n.__vccOpts),t){t=Yp(t);let{class:o,style:l}=t;o&&!_e(o)&&(t.class=Un(o)),te(l)&&(ql(l)&&!Ut(l)&&(l=be({},l)),t.style=Pa(l))}const a=_e(n)?1:_h(n)?128:Xf(n)?64:te(n)?4:Gt(n)?2:0;return ft(n,t,e,i,s,a,r,!0)}function Yp(n){return n?ql(n)||oh(n)?be({},n):n:null}function xi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=t?Kp(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vh(c),ref:t&&t.ref?e&&r?Ut(r)?r.concat(aa(t)):[r,aa(t)]:aa(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ke?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&xi(n.ssContent),ssFallback:n.ssFallback&&xi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&hr(u,l.clone(u)),u}function qp(n=" ",t=0){return me(Oa,null,n,t)}function $p(n,t){const e=me(ra,null,n);return e.staticCount=t,e}function Qe(n="",t=!1){return t?(re(),tc(Oe,null,n)):me(Oe,null,n)}function Cn(n){return n==null||typeof n=="boolean"?me(Oe):Ut(n)?me(ke,null,n.slice()):Ma(n)?$n(n):me(Oa,null,String(n))}function $n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:xi(n)}function ec(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ut(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ec(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!oh(t)?t._ctx=ln:s===3&&ln&&(ln.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Gt(t)?(t={default:t,_ctx:ln},e=32):(t=String(t),i&64?(e=16,t=[qp(t)]):e=8);n.children=t,n.shapeFlag|=e}function Kp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Un([t.class,i.class]));else if(s==="style")t.style=Pa([t.style,i.style]);else if(Aa(s)){const r=t[s],a=i[s];a&&r!==a&&!(Ut(r)&&r.includes(a))?t[s]=r?[].concat(r,a):a:a==null&&r==null&&!wa(s)&&(t[s]=a)}else s!==""&&(t[s]=i[s])}return t}function Tn(n,t,e,i=null){un(n,t,7,[e,i])}const jp=nh();let Zp=0;function Jp(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||jp,r={uid:Zp++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ch(i,s),emitsOptions:ih(i,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:i.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=wp.bind(null,r),n.ce&&n.ce(r),r}let Be=null;const xh=()=>Be||ln;let Sa,Wo;{const n=Ca(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Sa=t("__VUE_INSTANCE_SETTERS__",e=>Be=e),Wo=t("__VUE_SSR_SETTERS__",e=>pr=e)}const Sr=n=>{const t=Be;return Sa(n),n.scope.on(),()=>{n.scope.off(),Sa(t)}},Hc=()=>{Be&&Be.scope.off(),Sa(null)};function Mh(n){return n.vnode.shapeFlag&4}let pr=!1;function Qp(n,t=!1,e=!1){t&&Wo(t);const{props:i,children:s}=n.vnode,r=Mh(n);Ip(n,i,r,t),Op(n,s,e||t);const a=r?tm(n,t):void 0;return t&&Wo(!1),a}function tm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,vp);const{setup:i}=e;if(i){ei();const s=n.setupContext=i.length>1?nm(n):null,r=Sr(n),a=Mr(i,n,0,[n.props,s]),o=mf(a);if(ni(),r(),(o||n.sp)&&!sr(n)&&Zf(n),o){if(a.then(Hc,Hc),t)return a.then(l=>{Vc(n,l)}).catch(l=>{Da(l,n,0)});n.asyncDep=a}else Vc(n,a)}else Sh(n)}function Vc(n,t,e){Gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:te(t)&&(n.setupState=Of(t)),Sh(n)}function Sh(n,t,e){const i=n.type;n.render||(n.render=i.render||In);{const s=Sr(n);ei();try{xp(n)}finally{ni(),s()}}}const em={get(n,t){return Ce(n,"get",""),n[t]}};function nm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,em),slots:n.slots,emit:n.emit,expose:t}}function Ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Of(Hd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in rr)return rr[e](n)},has(t,e){return e in t||e in rr}})):n.proxy}function im(n){return Gt(n)&&"__vccOpts"in n}const nc=(n,t)=>Yd(n,t,pr);function sm(n,t,e){try{xa(-1);const i=arguments.length;return i===2?te(t)&&!Ut(t)?Ma(t)?me(n,null,[t]):me(n,t):me(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ma(e)&&(e=[e]),me(n,t,e))}finally{xa(1)}}const rm="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xo;const kc=typeof window<"u"&&window.trustedTypes;if(kc)try{Xo=kc.createPolicy("vue",{createHTML:n=>n})}catch{}const yh=Xo?n=>Xo.createHTML(n):n=>n,am="http://www.w3.org/2000/svg",om="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,Wc=qn&&qn.createElement("template"),lm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?qn.createElementNS(am,n):t==="mathml"?qn.createElementNS(om,n):e?qn.createElement(n,{is:e}):qn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>qn.createTextNode(n),createComment:n=>qn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>qn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Wc.innerHTML=yh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Wc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},li="transition",Hs="animation",mr=Symbol("_vtc"),Eh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cm=be({},Yf,Eh),um=n=>(n.displayName="Transition",n.props=cm,n),bh=um((n,{slots:t})=>sm(ap,fm(n),t)),Ti=(n,t=[])=>{Ut(n)?n.forEach(e=>e(...t)):n&&n(...t)},Xc=n=>n?Ut(n)?n.some(t=>t.length>1):n.length>1:!1;function fm(n){const t={};for(const I in n)I in Eh||(t[I]=n[I]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:a=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,g=hm(s),x=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:A,onEnterCancelled:T,onLeave:S,onLeaveCancelled:F,onBeforeAppear:L=d,onAppear:P=A,onAppearCancelled:U=T}=t,y=(I,z,Z,nt)=>{I._enterCancelled=nt,Ai(I,z?u:o),Ai(I,z?c:a),Z&&Z()},M=(I,z)=>{I._isLeaving=!1,Ai(I,f),Ai(I,p),Ai(I,h),z&&z()},R=I=>(z,Z)=>{const nt=I?P:A,$=()=>y(z,I,Z);Ti(nt,[z,$]),Yc(()=>{Ai(z,I?l:r),Gn(z,I?u:o),Xc(nt)||qc(z,i,x,$)})};return be(t,{onBeforeEnter(I){Ti(d,[I]),Gn(I,r),Gn(I,a)},onBeforeAppear(I){Ti(L,[I]),Gn(I,l),Gn(I,c)},onEnter:R(!1),onAppear:R(!0),onLeave(I,z){I._isLeaving=!0;const Z=()=>M(I,z);Gn(I,f),I._enterCancelled?(Gn(I,h),jc(I)):(jc(I),Gn(I,h)),Yc(()=>{I._isLeaving&&(Ai(I,f),Gn(I,p),Xc(S)||qc(I,i,m,Z))}),Ti(S,[I,Z])},onEnterCancelled(I){y(I,!1,void 0,!0),Ti(T,[I])},onAppearCancelled(I){y(I,!0,void 0,!0),Ti(U,[I])},onLeaveCancelled(I){M(I),Ti(F,[I])}})}function hm(n){if(n==null)return null;if(te(n))return[eo(n.enter),eo(n.leave)];{const t=eo(n);return[t,t]}}function eo(n){return dd(n)}function Gn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[mr]||(n[mr]=new Set)).add(t)}function Ai(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[mr];e&&(e.delete(t),e.size||(n[mr]=void 0))}function Yc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let dm=0;function qc(n,t,e,i){const s=n._endId=++dm,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:a,timeout:o,propCount:l}=pm(n,t);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,h)}function pm(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${li}Delay`),r=i(`${li}Duration`),a=$c(s,r),o=i(`${Hs}Delay`),l=i(`${Hs}Duration`),c=$c(o,l);let u=null,f=0,h=0;t===li?a>0&&(u=li,f=a,h=r.length):t===Hs?c>0&&(u=Hs,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?li:Hs:null,h=u?u===li?r.length:l.length:0);const p=u===li&&/\b(?:transform|all)(?:,|$)/.test(i(`${li}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function $c(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Kc(e)+Kc(n[i])))}function Kc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function jc(n){return(n?n.ownerDocument:document).body.offsetHeight}function mm(n,t,e){const i=n[mr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ya=Symbol("_vod"),Th=Symbol("_vsh"),Zc={name:"show",beforeMount(n,{value:t},{transition:e}){n[ya]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Vs(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Vs(n,!0),i.enter(n)):i.leave(n,()=>{Vs(n,!1)}):Vs(n,t))},beforeUnmount(n,{value:t}){Vs(n,t)}};function Vs(n,t){n.style.display=t?n[ya]:"none",n[Th]=!t}const _m=Symbol(""),gm=/(?:^|;)\s*display\s*:/;function vm(n,t,e){const i=n.style,s=_e(e);let r=!1;if(e&&!s){if(t)if(_e(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&Zs(i,o,"")}else for(const a in t)e[a]==null&&Zs(i,a,"");for(const a in e){a==="display"&&(r=!0);const o=e[a];o!=null?Mm(n,a,!_e(t)&&t?t[a]:void 0,o)||Zs(i,a,o):Zs(i,a,"")}}else if(s){if(t!==e){const a=i[_m];a&&(e+=";"+a),i.cssText=e,r=gm.test(e)}}else t&&n.removeAttribute("style");ya in n&&(n[ya]=r?i.display:"",n[Th]&&(i.display="none"))}const Jc=/\s*!important$/;function Zs(n,t,e){if(Ut(e))e.forEach(i=>Zs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=xm(n,t);Jc.test(e)?n.setProperty(ji(i),e.replace(Jc,""),"important"):n[i]=e}}const Qc=["Webkit","Moz","ms"],no={};function xm(n,t){const e=no[t];if(e)return e;let i=xn(t);if(i!=="filter"&&i in n)return no[t]=i;i=vf(i);for(let s=0;s<Qc.length;s++){const r=Qc[s]+i;if(r in n)return no[t]=r}return t}function Mm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&_e(i)&&e===i}const tu="http://www.w3.org/1999/xlink";function eu(n,t,e,i,s,r=xd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(tu,t.slice(6,t.length)):n.setAttributeNS(tu,t,e):e==null||r&&!Mf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Nn(e)?String(e):e)}function nu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?yh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=Mf(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function Sm(n,t,e,i){n.addEventListener(t,e,i)}function ym(n,t,e,i){n.removeEventListener(t,e,i)}const iu=Symbol("_vei");function Em(n,t,e,i,s=null){const r=n[iu]||(n[iu]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=bm(t);if(i){const c=r[t]=wm(i,s);Sm(n,o,c,l)}else a&&(ym(n,o,a,l),r[t]=void 0)}}const su=/(?:Once|Passive|Capture)$/;function bm(n){let t;if(su.test(n)){t={};let i;for(;i=n.match(su);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ji(n.slice(2)),t]}let io=0;const Tm=Promise.resolve(),Am=()=>io||(Tm.then(()=>io=0),io=Date.now());function wm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ut(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&un(c,t,5,o)}}else un(s,t,5,[i])};return e.value=n,e.attached=Am(),e}const ru=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Rm=(n,t,e,i,s,r)=>{const a=s==="svg";t==="class"?mm(n,i,a):t==="style"?vm(n,e,i):Aa(t)?wa(t)||Em(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cm(n,t,i,a))?(nu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&eu(n,t,i,a,r,t!=="value")):n._isVueCE&&(Pm(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!_e(i)))?nu(n,xn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),eu(n,t,i,a))};function Cm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&ru(t)&&Gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ru(t)&&_e(e)?!1:t in n}function Pm(n,t){const e=n._def.props;if(!e)return!1;const i=xn(t);return Array.isArray(e)?e.some(s=>xn(s)===i):Object.keys(e).some(s=>xn(s)===i)}const Lm=["ctrl","shift","alt","meta"],Dm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Lm.some(e=>n[`${e}Key`]&&!t.includes(e))},Yo=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let a=0;a<t.length;a++){const o=Dm[t[a]];if(o&&o(s,t))return}return n(s,...r)}))},Im=be({patchProp:Rm},lm);let au;function Um(){return au||(au=zp(Im))}const Nm=((...n)=>{const t=Um().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Om(i);if(!s)return;const r=t._component;!Gt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,Fm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function Fm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Om(n){return _e(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="170",Bm=0,ou=1,zm=2,Ah=1,Gm=2,Yn=3,Mi=0,We=1,Ze=2,gi=0,qi=1,Oi=2,lu=3,cu=4,Hm=5,Bi=100,Vm=101,km=102,Wm=103,Xm=104,Ym=200,qm=201,$m=202,Km=203,qo=204,$o=205,jm=206,Zm=207,Jm=208,Qm=209,t_=210,e_=211,n_=212,i_=213,s_=214,Ko=0,jo=1,Zo=2,ws=3,Jo=4,Qo=5,tl=6,el=7,wh=0,r_=1,a_=2,vi=0,o_=1,l_=2,c_=3,u_=4,f_=5,h_=6,d_=7,Rh=300,Rs=301,Cs=302,nl=303,il=304,za=306,sl=1e3,Vi=1001,rl=1002,Sn=1003,p_=1004,Lr=1005,Dn=1006,so=1007,ki=1008,si=1009,Ch=1010,Ph=1011,_r=1012,sc=1013,$i=1014,Zn=1015,yr=1016,rc=1017,ac=1018,Ps=1020,Lh=35902,Dh=1021,Ih=1022,vn=1023,Uh=1024,Nh=1025,bs=1026,Ls=1027,Fh=1028,oc=1029,Oh=1030,lc=1031,cc=1033,oa=33776,la=33777,ca=33778,ua=33779,al=35840,ol=35841,ll=35842,cl=35843,ul=36196,fl=37492,hl=37496,dl=37808,pl=37809,ml=37810,_l=37811,gl=37812,vl=37813,xl=37814,Ml=37815,Sl=37816,yl=37817,El=37818,bl=37819,Tl=37820,Al=37821,fa=36492,wl=36494,Rl=36495,Bh=36283,Cl=36284,Pl=36285,Ll=36286,m_=3200,__=3201,g_=0,v_=1,_i="",je="srgb",Is="srgb-linear",Ga="linear",se="srgb",Qi=7680,uu=519,x_=512,M_=513,S_=514,zh=515,y_=516,E_=517,b_=518,T_=519,Dl=35044,fu="300 es",Jn=2e3,Ea=2001;class Us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hu=1234567;const or=Math.PI/180,gr=180/Math.PI;function Qn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function uc(n,t){return(n%t+t)%t}function A_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function w_(n,t,e){return n!==t?(e-n)/(t-n):0}function lr(n,t,e){return(1-e)*n+e*t}function R_(n,t,e,i){return lr(n,t,1-Math.exp(-e*i))}function C_(n,t=1){return t-Math.abs(uc(n,t*2)-t)}function P_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function L_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function D_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function I_(n,t){return n+Math.random()*(t-n)}function U_(n){return n*(.5-Math.random())}function N_(n){n!==void 0&&(hu=n);let t=hu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function F_(n){return n*or}function O_(n){return n*gr}function B_(n){return(n&n-1)===0&&n!==0}function z_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function G_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function H_(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),f=r((t-i)/2),h=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const zi={DEG2RAD:or,RAD2DEG:gr,generateUUID:Qn,clamp:Fe,euclideanModulo:uc,mapLinear:A_,inverseLerp:w_,lerp:lr,damp:R_,pingpong:C_,smoothstep:P_,smootherstep:L_,randInt:D_,randFloat:I_,randFloatSpread:U_,seededRandom:N_,degToRad:F_,radToDeg:O_,isPowerOfTwo:B_,ceilPowerOfTwo:z_,floorPowerOfTwo:G_,setQuaternionFromProperEuler:H_,normalize:ie,denormalize:gn};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],A=s[1],T=s[4],S=s[7],F=s[2],L=s[5],P=s[8];return r[0]=a*x+o*A+l*F,r[3]=a*m+o*T+l*L,r[6]=a*d+o*S+l*P,r[1]=c*x+u*A+f*F,r[4]=c*m+u*T+f*L,r[7]=c*d+u*S+f*P,r[2]=h*x+p*A+g*F,r[5]=h*m+p*T+g*L,r[8]=h*d+p*S+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,g=e*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*a)*x,t[3]=h*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ro.makeScale(t,e)),this}rotate(t){return this.premultiply(ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new kt;function Gh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function V_(){const n=ba("canvas");return n.style.display="block",n}const du={};function Js(n){n in du||(du[n]=!0,console.warn(n))}function k_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function W_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function X_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(n.r=ti(n.r),n.g=ti(n.g),n.b=ti(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(n.r=Ts(n.r),n.g=Ts(n.g),n.b=Ts(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===_i?Ga:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const pu=[.64,.33,.3,.6,.15,.06],mu=[.2126,.7152,.0722],_u=[.3127,.329],gu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Is]:{primaries:pu,whitePoint:_u,transfer:Ga,toXYZ:gu,fromXYZ:vu,luminanceCoefficients:mu,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:pu,whitePoint:_u,transfer:se,toXYZ:gu,fromXYZ:vu,luminanceCoefficients:mu,outputColorSpaceConfig:{drawingBufferColorSpace:je}}});let ts;class Y_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=ba("canvas")),ts.width=t.width,ts.height=t.height;const i=ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ba("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ti(e[i]/255)*255):e[i]=ti(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let q_=0;class Hh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ao(s[a].image)):r.push(ao(s[a]))}else r=ao(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Y_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $_=0;class ze extends Us{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=Vi,s=Vi,r=Dn,a=ki,o=vn,l=si,c=ze.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Qn(),this.name="",this.source=new Hh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sl:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sl:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Rh;ze.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,i=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(p+1)/2,F=(d+1)/2,L=(u+h)/4,P=(f+x)/4,U=(g+m)/4;return T>S&&T>F?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=L/i,r=P/i):S>F?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=L/s,r=U/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=P/r,s=U/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends Us{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends K_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Vh extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class j_ extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==h||c!==p||u!==g){let m=1-o;const d=l*h+c*p+u*g+f*x,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const F=Math.sqrt(T),L=Math.atan2(F,d*A);m=Math.sin(m*L)/F,o=Math.sin(o*L)/F}const S=o*A;if(l=l*m+h*S,c=c*m+p*S,u=u*m+g*S,f=f*m+x*S,m===1-o){const F=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=F,c*=F,u*=F,f*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*p-c*h,t[e+1]=l*g+u*h+c*f-o*p,t[e+2]=c*g+u*p+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new G,xu=new Er;class br{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Ir.subVectors(this.max,ks),es.subVectors(t.a,ks),ns.subVectors(t.b,ks),is.subVectors(t.c,ks),ci.subVectors(ns,es),ui.subVectors(is,ns),wi.subVectors(es,is);let e=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-wi.z,wi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!lo(e,es,ns,is,Ir)||(e=[1,0,0,0,1,0,0,0,1],!lo(e,es,ns,is,Ir))?!1:(Ur.crossVectors(ci,ui),e=[Ur.x,Ur.y,Ur.z],lo(e,es,ns,is,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new G,new G,new G,new G,new G,new G,new G,new G],dn=new G,Dr=new br,es=new G,ns=new G,is=new G,ci=new G,ui=new G,wi=new G,ks=new G,Ir=new G,Ur=new G,Ri=new G;function lo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ri.fromArray(n,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Z_=new br,Ws=new G,co=new G;class Ha{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Z_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(co)),this.expandByPoint(Ws.copy(t.center).sub(co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new G,uo=new G,Nr=new G,fi=new G,fo=new G,Fr=new G,ho=new G;class fc{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){uo.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(uo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=fi.dot(this.direction),l=-fi.dot(Nr),c=fi.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(uo).addScaledVector(Nr,h),p}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const i=Vn.dot(this.direction),s=Vn.dot(Vn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,i,s,r){fo.subVectors(e,t),Fr.subVectors(i,t),ho.crossVectors(fo,Fr);let a=this.direction.dot(ho),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);const l=o*this.direction.dot(Fr.crossVectors(fi,Fr));if(l<0)return null;const c=o*this.direction.dot(fo.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(ho);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,i,s,r,a,o,l,c,u,f,h,p,g,x,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,f,h,p,g,x,m)}set(t,e,i,s,r,a,o,l,c,u,f,h,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=h-x*c,e[9]=-o*l,e[2]=x-h*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,g=c*u,x=c*f;e[0]=h+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,g=c*u,x=c*f;e[0]=h-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-h*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=h-x*f}else if(t.order==="XZY"){const h=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(J_,t,Q_)}lookAt(t,e,i){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),hi.crossVectors(i,qe),hi.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),hi.crossVectors(i,qe)),hi.normalize(),Or.crossVectors(qe,hi),s[0]=hi.x,s[4]=Or.x,s[8]=qe.x,s[1]=hi.y,s[5]=Or.y,s[9]=qe.y,s[2]=hi.z,s[6]=Or.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],A=i[3],T=i[7],S=i[11],F=i[15],L=s[0],P=s[4],U=s[8],y=s[12],M=s[1],R=s[5],I=s[9],z=s[13],Z=s[2],nt=s[6],$=s[10],tt=s[14],V=s[3],it=s[7],ot=s[11],Et=s[15];return r[0]=a*L+o*M+l*Z+c*V,r[4]=a*P+o*R+l*nt+c*it,r[8]=a*U+o*I+l*$+c*ot,r[12]=a*y+o*z+l*tt+c*Et,r[1]=u*L+f*M+h*Z+p*V,r[5]=u*P+f*R+h*nt+p*it,r[9]=u*U+f*I+h*$+p*ot,r[13]=u*y+f*z+h*tt+p*Et,r[2]=g*L+x*M+m*Z+d*V,r[6]=g*P+x*R+m*nt+d*it,r[10]=g*U+x*I+m*$+d*ot,r[14]=g*y+x*z+m*tt+d*Et,r[3]=A*L+T*M+S*Z+F*V,r[7]=A*P+T*R+S*nt+F*it,r[11]=A*U+T*I+S*$+F*ot,r[15]=A*y+T*z+S*tt+F*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*f-s*c*f-r*o*h+i*c*h+s*o*p-i*l*p)+x*(+e*l*p-e*c*h+r*a*h-s*a*p+s*c*u-r*l*u)+m*(+e*c*f-e*o*p-r*a*f+i*a*p+r*o*u-i*c*u)+d*(-s*o*u-e*l*f+e*o*h+s*a*f-i*a*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],A=f*m*c-x*h*c+x*l*p-o*m*p-f*l*d+o*h*d,T=g*h*c-u*m*c-g*l*p+a*m*p+u*l*d-a*h*d,S=u*x*c-g*f*c+g*o*p-a*x*p-u*o*d+a*f*d,F=g*f*l-u*x*l-g*o*h+a*x*h+u*o*m-a*f*m,L=e*A+i*T+s*S+r*F;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=A*P,t[1]=(x*h*r-f*m*r-x*s*p+i*m*p+f*s*d-i*h*d)*P,t[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*d+i*l*d)*P,t[3]=(f*l*r-o*h*r-f*s*c+i*h*c+o*s*p-i*l*p)*P,t[4]=T*P,t[5]=(u*m*r-g*h*r+g*s*p-e*m*p-u*s*d+e*h*d)*P,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*P,t[7]=(a*h*r-u*l*r+u*s*c-e*h*c-a*s*p+e*l*p)*P,t[8]=S*P,t[9]=(g*f*r-u*x*r-g*i*p+e*x*p+u*i*d-e*f*d)*P,t[10]=(a*x*r-g*o*r+g*i*c-e*x*c-a*i*d+e*o*d)*P,t[11]=(u*o*r-a*f*r-u*i*c+e*f*c+a*i*p-e*o*p)*P,t[12]=F*P,t[13]=(u*x*s-g*f*s+g*i*h-e*x*h-u*i*m+e*f*m)*P,t[14]=(g*o*s-a*x*s-g*i*l+e*x*l+a*i*m-e*o*m)*P,t[15]=(a*f*s-u*o*s+u*i*l-e*f*l-a*i*h+e*o*h)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,g=r*f,x=a*u,m=a*f,d=o*f,A=l*c,T=l*u,S=l*f,F=i.x,L=i.y,P=i.z;return s[0]=(1-(x+d))*F,s[1]=(p+S)*F,s[2]=(g-T)*F,s[3]=0,s[4]=(p-S)*L,s[5]=(1-(h+d))*L,s[6]=(m+A)*L,s[7]=0,s[8]=(g+T)*P,s[9]=(m-A)*P,s[10]=(1-(h+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/r,u=1/a,f=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Jn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s);let p,g;if(o===Jn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ea)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Jn){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(a-r),h=(e+t)*c,p=(i+s)*u;let g,x;if(o===Jn)g=(a+r)*f,x=-2*f;else if(o===Ea)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ss=new G,pn=new ge,J_=new G(0,0,0),Q_=new G(1,1,1),hi=new G,Or=new G,qe=new G,Mu=new ge,Su=new Er;class En{constructor(t=0,e=0,i=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tg=0;const yu=new G,rs=new Er,kn=new ge,Br=new G,Xs=new G,eg=new G,ng=new Er,Eu=new G(1,0,0),bu=new G(0,1,0),Tu=new G(0,0,1),Au={type:"added"},ig={type:"removed"},as={type:"childadded",child:null},po={type:"childremoved",child:null};class Ge extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new G,e=new En,i=new Er,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new kt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Eu,t)}rotateY(t){return this.rotateOnAxis(bu,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eu,t)}translateY(t){return this.translateOnAxis(bu,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Br.copy(t):Br.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Xs,Br,this.up):kn.lookAt(Br,Xs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(kn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Au),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ig),po.child=t,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Au),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,ng,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new G(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new G,Wn=new G,mo=new G,Xn=new G,os=new G,ls=new G,wu=new G,_o=new G,go=new G,vo=new G,xo=new xe,Mo=new xe,So=new xe;class on{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){mn.subVectors(s,e),Wn.subVectors(i,e),mo.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Wn),l=mn.dot(mo),c=Wn.dot(Wn),u=Wn.dot(mo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return xo.setScalar(0),Mo.setScalar(0),So.setScalar(0),xo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,i),So.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xo,r.x),a.addScaledVector(Mo,r.y),a.addScaledVector(So,r.z),a}static isFrontFacing(t,e,i,s){return mn.subVectors(i,e),Wn.subVectors(t,e),mn.cross(Wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),mn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,i),ls.subVectors(r,i),_o.subVectors(t,i);const l=os.dot(_o),c=ls.dot(_o);if(l<=0&&c<=0)return e.copy(i);go.subVectors(t,s);const u=os.dot(go),f=ls.dot(go);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(os,a);vo.subVectors(t,r);const p=os.dot(vo),g=ls.dot(vo);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ls,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return wu.subVectors(r,s),o=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(wu,o);const d=1/(m+x+h);return a=x*d,o=h*d,e.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},zr={h:0,s:0,l:0};function yo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=uc(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=yo(a,r,t+1/3),this.g=yo(a,r,t),this.b=yo(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const i=kh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Yt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Fe(Re.r*255,0,255))*65536+Math.round(Fe(Re.g*255,0,255))*256+Math.round(Fe(Re.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,s=Re.g,r=Re.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=je){Yt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,s=Re.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(zr);const i=lr(di.h,zr.h,e),s=lr(di.s,zr.s,e),r=lr(di.l,zr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new qt;qt.NAMES=kh;let sg=0;class Ns extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Qn(),this.name="",this.blending=qi,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=$o,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qo&&(i.blendSrc=this.blendSrc),this.blendDst!==$o&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _n extends Ns{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new G,Gr=new Xt;class tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Dl,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}}class Wh extends tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Xh extends tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Le extends tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let rg=0;const sn=new ge,Eo=new Ge,cs=new G,$e=new br,Ys=new br,Ee=new G;class Xe extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?Xh:Wh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors($e.min,Ys.min),$e.expandByPoint(Ee),Ee.addVectors($e.max,Ys.max),$e.expandByPoint(Ee)):($e.expandByPoint(Ys.min),$e.expandByPoint(Ys.max))}$e.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ee.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(t,c),Ee.add(cs)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new G,l[U]=new G;const c=new G,u=new G,f=new G,h=new Xt,p=new Xt,g=new Xt,x=new G,m=new G;function d(U,y,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),h.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[U].add(x),o[y].add(x),o[M].add(x),l[U].add(m),l[y].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let U=0,y=A.length;U<y;++U){const M=A[U],R=M.start,I=M.count;for(let z=R,Z=R+I;z<Z;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const T=new G,S=new G,F=new G,L=new G;function P(U){F.fromBufferAttribute(s,U),L.copy(F);const y=o[U];T.copy(y),T.sub(F.multiplyScalar(F.dot(y))).normalize(),S.crossVectors(L,y);const R=S.dot(l[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,R)}for(let U=0,y=A.length;U<y;++U){const M=A[U],R=M.start,I=M.count;for(let z=R,Z=R+I;z<Z;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new tn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ru=new ge,Ci=new fc,Hr=new Ha,Cu=new G,Vr=new G,kr=new G,Wr=new G,bo=new G,Xr=new G,Pu=new G,Yr=new G;class pe extends Ge{constructor(t=new Xe,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(bo.fromBufferAttribute(f,t),a?Xr.addScaledVector(bo,u):Xr.addScaledVector(bo.sub(e),u))}e.add(Xr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(Hr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Hr,Cu)===null||Ci.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Ru.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(Ru),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,F=T;S<F;S+=3){const L=o.getX(S),P=o.getX(S+1),U=o.getX(S+2);s=qr(this,d,t,i,c,u,f,L,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);s=qr(this,a,t,i,c,u,f,A,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,F=T;S<F;S+=3){const L=S,P=S+1,U=S+2;s=qr(this,d,t,i,c,u,f,L,P,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=m,T=m+1,S=m+2;s=qr(this,a,t,i,c,u,f,A,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ag(n,t,e,i,s,r,a,o){let l;if(t.side===We?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Mi,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:n}}function qr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Vr),n.getVertexPosition(l,kr),n.getVertexPosition(c,Wr);const u=ag(n,t,e,i,Vr,kr,Wr,Pu);if(u){const f=new G;on.getBarycoord(Pu,Vr,kr,Wr,f),s&&(u.uv=on.getInterpolatedAttribute(s,o,l,c,f,new Xt)),r&&(u.uv1=on.getInterpolatedAttribute(r,o,l,c,f,new Xt)),a&&(u.normal=on.getInterpolatedAttribute(a,o,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};on.getNormal(Vr,kr,Wr,h.normal),u.face=h,u.barycoord=f}return u}class Tr extends Xe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function g(x,m,d,A,T,S,F,L,P,U,y){const M=S/P,R=F/U,I=S/2,z=F/2,Z=L/2,nt=P+1,$=U+1;let tt=0,V=0;const it=new G;for(let ot=0;ot<$;ot++){const Et=ot*R-z;for(let Dt=0;Dt<nt;Dt++){const Kt=Dt*M-I;it[x]=Kt*A,it[m]=Et*T,it[d]=Z,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[d]=L>0?1:-1,u.push(it.x,it.y,it.z),f.push(Dt/P),f.push(1-ot/U),tt+=1}}for(let ot=0;ot<U;ot++)for(let Et=0;Et<P;Et++){const Dt=h+Et+nt*ot,Kt=h+Et+nt*(ot+1),et=h+(Et+1)+nt*(ot+1),ut=h+(Et+1)+nt*ot;l.push(Dt,Kt,ut),l.push(Kt,et,ut),V+=6}o.addGroup(p,V,y),p+=V,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=Ds(n[e]);for(const s in i)t[s]=i[s]}return t}function og(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const lg={clone:Ds,merge:Ue};var cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Ns{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=og(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class qh extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new G,Lu=new Xt,Du=new Xt;class an extends qh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Lu,Du),e.subVectors(Du,Lu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,fs=1;class fg extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(us,fs,t,e);s.layers=this.layers,this.add(s);const r=new an(us,fs,t,e);r.layers=this.layers,this.add(r);const a=new an(us,fs,t,e);a.layers=this.layers,this.add(a);const o=new an(us,fs,t,e);o.layers=this.layers,this.add(o);const l=new an(us,fs,t,e);l.layers=this.layers,this.add(l);const c=new an(us,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $h extends ze{constructor(t,e,i,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hg extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $h(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tr(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:gi});r.uniforms.tEquirect.value=e;const a=new pe(s,r),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=Dn),new fg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const To=new G,dg=new G,pg=new kt;class Ui{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=To.subVectors(i,e).cross(dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(To),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||pg.getNormalMatrix(t),s=this.coplanarPoint(To).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Ha,$r=new G;class Kh{constructor(t=new Ui,e=new Ui,i=new Ui,s=new Ui,r=new Ui,a=new Ui){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Jn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],A=s[13],T=s[14],S=s[15];if(i[0].setComponents(l-r,h-c,m-p,S-d).normalize(),i[1].setComponents(l+r,h+c,m+p,S+d).normalize(),i[2].setComponents(l+a,h+u,m+g,S+A).normalize(),i[3].setComponents(l-a,h-u,m-g,S-A).normalize(),i[4].setComponents(l-o,h-f,m-x,S-T).normalize(),e===Jn)i[5].setComponents(l+o,h+f,m+x,S+T).normalize();else if(e===Ea)i[5].setComponents(o,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function mg(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Va extends Xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const A=d*h-a;for(let T=0;T<c;T++){const S=T*f-r;g.push(S,-A,0),x.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const T=A+c*d,S=A+c*(d+1),F=A+1+c*(d+1),L=A+1+c*d;p.push(T,S,L),p.push(S,F,L)}this.setIndex(p),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.width,t.height,t.widthSegments,t.heightSegments)}}var _g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
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
#endif`,vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
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
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
#endif`,Tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
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
#endif`,Pg=`#ifdef USE_BUMPMAP
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zg=`#define PI 3.141592653589793
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
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",qg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iv=`#ifdef USE_GRADIENTMAP
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
}`,sv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ov=`uniform bool receiveShadow;
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
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dv=`PhysicalMaterial material;
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
#endif`,pv=`struct PhysicalMaterial {
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
}`,mv=`
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
#endif`,_v=`#if defined( RE_IndirectDiffuse )
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tv=`#if defined( USE_POINTS_UV )
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
#endif`,Av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
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
#endif`,Dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
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
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t0=`float getShadowMask() {
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
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,y0=`#if DEPTH_PACKING == 3200
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
}`,E0=`#define DISTANCE
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
}`,b0=`#define DISTANCE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,F0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,B0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
}`,H0=`#define TOON
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
}`,V0=`#define TOON
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
}`,k0=`uniform float size;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,q0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:_g,alphahash_pars_fragment:gg,alphamap_fragment:vg,alphamap_pars_fragment:xg,alphatest_fragment:Mg,alphatest_pars_fragment:Sg,aomap_fragment:yg,aomap_pars_fragment:Eg,batching_pars_vertex:bg,batching_vertex:Tg,begin_vertex:Ag,beginnormal_vertex:wg,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Ug,color_fragment:Ng,color_pars_fragment:Fg,color_pars_vertex:Og,color_vertex:Bg,common:zg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Vg,displacementmap_vertex:kg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:Yg,colorspace_pars_fragment:qg,envmap_fragment:$g,envmap_common_pars_fragment:Kg,envmap_pars_fragment:jg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:lv,envmap_vertex:Jg,fog_vertex:Qg,fog_pars_vertex:tv,fog_fragment:ev,fog_pars_fragment:nv,gradientmap_pars_fragment:iv,lightmap_pars_fragment:sv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:av,lights_pars_begin:ov,lights_toon_fragment:cv,lights_toon_pars_fragment:uv,lights_phong_fragment:fv,lights_phong_pars_fragment:hv,lights_physical_fragment:dv,lights_physical_pars_fragment:pv,lights_fragment_begin:mv,lights_fragment_maps:_v,lights_fragment_end:gv,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:Sv,map_fragment:yv,map_pars_fragment:Ev,map_particle_fragment:bv,map_particle_pars_fragment:Tv,metalnessmap_fragment:Av,metalnessmap_pars_fragment:wv,morphinstance_vertex:Rv,morphcolor_vertex:Cv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Dv,normal_fragment_begin:Iv,normal_fragment_maps:Uv,normal_pars_fragment:Nv,normal_pars_vertex:Fv,normal_vertex:Ov,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:Gv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:Vv,opaque_fragment:kv,packing:Wv,premultiplied_alpha_fragment:Xv,project_vertex:Yv,dithering_fragment:qv,dithering_pars_fragment:$v,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:jv,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:Jv,shadowmap_vertex:Qv,shadowmask_pars_fragment:t0,skinbase_vertex:e0,skinning_pars_vertex:n0,skinning_vertex:i0,skinnormal_vertex:s0,specularmap_fragment:r0,specularmap_pars_fragment:a0,tonemapping_fragment:o0,tonemapping_pars_fragment:l0,transmission_fragment:c0,transmission_pars_fragment:u0,uv_pars_fragment:f0,uv_pars_vertex:h0,uv_vertex:d0,worldpos_vertex:p0,background_vert:m0,background_frag:_0,backgroundCube_vert:g0,backgroundCube_frag:v0,cube_vert:x0,cube_frag:M0,depth_vert:S0,depth_frag:y0,distanceRGBA_vert:E0,distanceRGBA_frag:b0,equirect_vert:T0,equirect_frag:A0,linedashed_vert:w0,linedashed_frag:R0,meshbasic_vert:C0,meshbasic_frag:P0,meshlambert_vert:L0,meshlambert_frag:D0,meshmatcap_vert:I0,meshmatcap_frag:U0,meshnormal_vert:N0,meshnormal_frag:F0,meshphong_vert:O0,meshphong_frag:B0,meshphysical_vert:z0,meshphysical_frag:G0,meshtoon_vert:H0,meshtoon_frag:V0,points_vert:k0,points_frag:W0,shadow_vert:X0,shadow_frag:Y0,sprite_vert:q0,sprite_frag:$0},gt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ue([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ue([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ue([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ue([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ue([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ue([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ue([gt.points,gt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ue([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ue([gt.common,gt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ue([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ue([gt.sprite,gt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ue([gt.common,gt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ue([gt.lights,gt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Pn.physical={uniforms:Ue([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Kr={r:0,b:0,g:0},Li=new En,K0=new ge;function j0(n,t,e,i,s,r,a){const o=new qt(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function x(A){let T=!1;const S=g(A);S===null?d(o,l):S&&S.isColor&&(d(S,1),T=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,T){const S=g(T);S&&(S.isCubeTexture||S.mapping===za)?(u===void 0&&(u=new pe(new Tr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Ds(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Li.copy(T.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(Li)),u.material.toneMapped=Yt.getTransfer(S.colorSpace)!==se,(f!==S||h!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new pe(new Va(2,2),new Si({name:"BackgroundMaterial",uniforms:Ds(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(S.colorSpace)!==se,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,T){A.getRGB(Kr,Yh(n)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:x,addToRenderList:m}}function Z0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(M,R,I,z,Z){let nt=!1;const $=f(z,I,R);r!==$&&(r=$,c(r.object)),nt=p(M,z,I,Z),nt&&g(M,z,I,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,S(M,R,I,z),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,R,I){const z=I.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let nt=Z[R.id];nt===void 0&&(nt={},Z[R.id]=nt);let $=nt[z];return $===void 0&&($=h(l()),nt[z]=$),$}function h(M){const R=[],I=[],z=[];for(let Z=0;Z<e;Z++)R[Z]=0,I[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,R,I,z){const Z=r.attributes,nt=R.attributes;let $=0;const tt=I.getAttributes();for(const V in tt)if(tt[V].location>=0){const ot=Z[V];let Et=nt[V];if(Et===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),ot===void 0||ot.attribute!==Et||Et&&ot.data!==Et.data)return!0;$++}return r.attributesNum!==$||r.index!==z}function g(M,R,I,z){const Z={},nt=R.attributes;let $=0;const tt=I.getAttributes();for(const V in tt)if(tt[V].location>=0){let ot=nt[V];ot===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor));const Et={};Et.attribute=ot,ot&&ot.data&&(Et.data=ot.data),Z[V]=Et,$++}r.attributes=Z,r.attributesNum=$,r.index=z}function x(){const M=r.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function m(M){d(M,0)}function d(M,R){const I=r.newAttributes,z=r.enabledAttributes,Z=r.attributeDivisors;I[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),Z[M]!==R&&(n.vertexAttribDivisor(M,R),Z[M]=R)}function A(){const M=r.newAttributes,R=r.enabledAttributes;for(let I=0,z=R.length;I<z;I++)R[I]!==M[I]&&(n.disableVertexAttribArray(I),R[I]=0)}function T(M,R,I,z,Z,nt,$){$===!0?n.vertexAttribIPointer(M,R,I,Z,nt):n.vertexAttribPointer(M,R,I,z,Z,nt)}function S(M,R,I,z){x();const Z=z.attributes,nt=I.getAttributes(),$=R.defaultAttributeValues;for(const tt in nt){const V=nt[tt];if(V.location>=0){let it=Z[tt];if(it===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const ot=it.normalized,Et=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;const Kt=Dt.buffer,et=Dt.type,ut=Dt.bytesPerElement,bt=et===n.INT||et===n.UNSIGNED_INT||it.gpuType===sc;if(it.isInterleavedBufferAttribute){const _t=it.data,Pt=_t.stride,Nt=it.offset;if(_t.isInstancedInterleavedBuffer){for(let Bt=0;Bt<V.locationSize;Bt++)d(V.location+Bt,_t.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Bt=0;Bt<V.locationSize;Bt++)m(V.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let Bt=0;Bt<V.locationSize;Bt++)T(V.location+Bt,Et/V.locationSize,et,ot,Pt*ut,(Nt+Et/V.locationSize*Bt)*ut,bt)}else{if(it.isInstancedBufferAttribute){for(let _t=0;_t<V.locationSize;_t++)d(V.location+_t,it.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let _t=0;_t<V.locationSize;_t++)m(V.location+_t);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let _t=0;_t<V.locationSize;_t++)T(V.location+_t,Et/V.locationSize,et,ot,Et*ut,Et/V.locationSize*_t*ut,bt)}}else if($!==void 0){const ot=$[tt];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(V.location,ot);break;case 3:n.vertexAttrib3fv(V.location,ot);break;case 4:n.vertexAttrib4fv(V.location,ot);break;default:n.vertexAttrib1fv(V.location,ot)}}}}A()}function F(){U();for(const M in i){const R=i[M];for(const I in R){const z=R[I];for(const Z in z)u(z[Z].object),delete z[Z];delete R[I]}delete i[M]}}function L(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const I in R){const z=R[I];for(const Z in z)u(z[Z].object),delete z[Z];delete R[I]}delete i[M.id]}function P(M){for(const R in i){const I=i[R];if(I[M.id]===void 0)continue;const z=I[M.id];for(const Z in z)u(z[Z].object),delete z[Z];delete I[M.id]}}function U(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function J0(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*h[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Q0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==si&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zn&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:F,maxSamples:L}}function tx(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Ui,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,T=A*4;let S=d.clippingState||null;l.value=S,S=u(g,h,T,p);for(let F=0;F!==T;++F)S[F]=e[F];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,S=p;T!==x;++T,S+=4)a.copy(f[T]).applyMatrix4(A,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ex(n){let t=new WeakMap;function e(a,o){return o===nl?a.mapping=Rs:o===il&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===nl||o===il)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hg(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class nx extends qh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vs=4,Iu=[.125,.215,.35,.446,.526,.582],Gi=20,Ao=new nx,Uu=new qt;let wo=null,Ro=0,Co=0,Po=!1;const Ni=(1+Math.sqrt(5))/2,hs=1/Ni,Nu=[new G(-Ni,hs,0),new G(Ni,hs,0),new G(-hs,0,Ni),new G(hs,0,Ni),new G(0,Ni,-hs),new G(0,Ni,hs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){wo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,Ro,Co),this._renderer.xr.enabled=Po,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:yr,format:vn,colorSpace:Is,depthBuffer:!1},s=Ou(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(r)),this._blurMaterial=sx(r,t,e)}return s}_compileMaterial(t){const e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,Ao)}_sceneToCubeUV(t,e,i,s){const o=new an(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Uu),u.toneMapping=vi,u.autoClear=!1;const p=new _n({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new pe(new Tr,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Uu),x=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):A===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const T=this._cubeSize;jr(s,A*T,d>2?T:0,T,T),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Rs||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;jr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ao)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nu[(s-r-1)%Nu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pe(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const d=[];let A=0;for(let P=0;P<Gi;++P){const U=P/x,y=Math.exp(-U*U/2);d.push(y),P===0?A+=y:P<m&&(A+=2*y)}for(let P=0;P<d.length;P++)d[P]=d[P]/A;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const S=this._sizeLods[s],F=3*S*(s>T-vs?s-T+vs:0),L=4*(this._cubeSize-S);jr(e,F,L,3*S,2*S),l.setRenderTarget(e),l.render(f,Ao)}}function ix(n){const t=[],e=[],i=[];let s=n;const r=n-vs+1+Iu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-vs?l=Iu[a-n+vs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,d=1,A=new Float32Array(x*g*p),T=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let L=0;L<p;L++){const P=L%3*2/3-1,U=L>2?0:-1,y=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(y,x*g*L),T.set(h,m*g*L);const M=[L,L,L,L,L,L];S.set(M,d*g*L)}const F=new Xe;F.setAttribute("position",new tn(A,x)),F.setAttribute("uv",new tn(T,m)),F.setAttribute("faceIndex",new tn(S,d)),t.push(F),s>vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ou(n,t,e){const i=new Ki(n,t,e);return i.texture.mapping=za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function sx(n,t,e){const i=new Float32Array(Gi),s=new G(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Bu(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function zu(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function rx(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===nl||l===il,u=l===Rs||l===Cs;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Fu(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Fu(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function ax(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Js("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ox(n,t,e,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let T=0,S=A.length;T<S;T+=3){const F=A[T+0],L=A[T+1],P=A[T+2];h.push(F,L,L,P,P,F)}}else if(g!==void 0){const A=g.array;x=g.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const F=T+0,L=T+1,P=T+2;h.push(F,L,L,P,P,F)}}else return;const m=new(Gh(h)?Xh:Wh)(h,1);m.version=x;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function lx(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*a),e.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,h*a,g),e.update(p,i,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function f(h,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,x,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*x[A];e.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function cx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ux(n,t,e){const i=new WeakMap,s=new xe;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let F=o.attributes.position.count*S,L=1;F>t.maxTextureSize&&(L=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const P=new Float32Array(F*L*4*f),U=new Vh(P,F,L,f);U.type=Zn,U.needsUpdate=!0;const y=S*4;for(let R=0;R<f;R++){const I=d[R],z=A[R],Z=T[R],nt=F*L*4*R;for(let $=0;$<I.count;$++){const tt=$*y;g===!0&&(s.fromBufferAttribute(I,$),P[nt+tt+0]=s.x,P[nt+tt+1]=s.y,P[nt+tt+2]=s.z,P[nt+tt+3]=0),x===!0&&(s.fromBufferAttribute(z,$),P[nt+tt+4]=s.x,P[nt+tt+5]=s.y,P[nt+tt+6]=s.z,P[nt+tt+7]=0),m===!0&&(s.fromBufferAttribute(Z,$),P[nt+tt+8]=s.x,P[nt+tt+9]=s.y,P[nt+tt+10]=s.z,P[nt+tt+11]=Z.itemSize===4?s.w:1)}}h={count:f,texture:U,size:new Xt(F,L)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function fx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Zh extends ze{constructor(t,e,i,s,r,a,o,l,c,u=bs){if(u!==bs&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===bs&&(i=$i),i===void 0&&u===Ls&&(i=Ps),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jh=new ze,Gu=new Zh(1,1),Qh=new Vh,td=new j_,ed=new $h,Hu=[],Vu=[],ku=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function Fs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ka(n,t){let e=Vu[t];e===void 0&&(e=new Int32Array(t),Vu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function hx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function _x(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Xu.set(i),n.uniformMatrix2fv(this.addr,!1,Xu),ye(e,i)}}function gx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Wu.set(i),n.uniformMatrix3fv(this.addr,!1,Wu),ye(e,i)}}function vx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),ye(e,i)}}function xx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function Sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function Ex(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function Tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function Ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function wx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gu.compareFunction=zh,r=Gu):r=Jh,e.setTexture2D(t||r,s)}function Rx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||td,s)}function Cx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ed,s)}function Px(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Qh,s)}function Lx(n){switch(n){case 5126:return hx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return _x;case 35675:return gx;case 35676:return vx;case 5124:case 35670:return xx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return yx;case 5125:return Ex;case 36294:return bx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}function Dx(n,t){n.uniform1fv(this.addr,t)}function Ix(n,t){const e=Fs(t,this.size,2);n.uniform2fv(this.addr,e)}function Ux(n,t){const e=Fs(t,this.size,3);n.uniform3fv(this.addr,e)}function Nx(n,t){const e=Fs(t,this.size,4);n.uniform4fv(this.addr,e)}function Fx(n,t){const e=Fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ox(n,t){const e=Fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Bx(n,t){const e=Fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zx(n,t){n.uniform1iv(this.addr,t)}function Gx(n,t){n.uniform2iv(this.addr,t)}function Hx(n,t){n.uniform3iv(this.addr,t)}function Vx(n,t){n.uniform4iv(this.addr,t)}function kx(n,t){n.uniform1uiv(this.addr,t)}function Wx(n,t){n.uniform2uiv(this.addr,t)}function Xx(n,t){n.uniform3uiv(this.addr,t)}function Yx(n,t){n.uniform4uiv(this.addr,t)}function qx(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Jh,r[a])}function $x(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||td,r[a])}function Kx(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ed,r[a])}function jx(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qh,r[a])}function Zx(n){switch(n){case 5126:return Dx;case 35664:return Ix;case 35665:return Ux;case 35666:return Nx;case 35674:return Fx;case 35675:return Ox;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return Gx;case 35668:case 35672:return Hx;case 35669:case 35673:return Vx;case 5125:return kx;case 36294:return Wx;case 36295:return Xx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return jx}}class Jx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lx(e.type)}}class Qx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zx(e.type)}}class tM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function Yu(n,t){n.seq.push(t),n.map[t.id]=t}function eM(n,t,e){const i=n.name,s=i.length;for(Lo.lastIndex=0;;){const r=Lo.exec(i),a=Lo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yu(e,c===void 0?new Jx(o,n,t):new Qx(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new tM(o),Yu(e,f)),e=f}}}class ha{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);eM(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function qu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const nM=37297;let iM=0;function sM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const $u=new kt;function rM(n){Yt._getMatrix($u,Yt.workingColorSpace,n);const t=`mat3( ${$u.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Ga:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ku(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sM(n.getShaderSource(t),a)}else return s}function aM(n,t){const e=rM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function oM(n,t){let e;switch(t){case o_:e="Linear";break;case l_:e="Reinhard";break;case c_:e="Cineon";break;case u_:e="ACESFilmic";break;case h_:e="AgX";break;case d_:e="Neutral";break;case f_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new G;function lM(){Yt.getLuminanceCoefficients(Zr);const n=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function uM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Qs(n){return n!==""}function ju(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(n){return n.replace(hM,pM)}const dM=new Map;function pM(n,t){let e=Wt[t];if(e===void 0){const i=dM.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Il(e)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(mM,_M)}function _M(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function gM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function vM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function MM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wh:t="ENVMAP_BLENDING_MULTIPLY";break;case r_:t="ENVMAP_BLENDING_MIX";break;case a_:t="ENVMAP_BLENDING_ADD";break}return t}function SM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function yM(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=gM(e),c=vM(e),u=xM(e),f=MM(e),h=SM(e),p=cM(e),g=uM(r),x=s.createProgram();let m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),d.length>0&&(d+=`
`)):(m=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),d=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==vi?oM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,aM("linearToOutputTexel",e.outputColorSpace),lM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Il(a),a=ju(a,e),a=Zu(a,e),o=Il(o),o=ju(o,e),o=Zu(o,e),a=Ju(a),o=Ju(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=A+m+a,S=A+d+o,F=qu(s,s.VERTEX_SHADER,T),L=qu(s,s.FRAGMENT_SHADER,S);s.attachShader(x,F),s.attachShader(x,L),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(R){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(F).trim(),Z=s.getShaderInfoLog(L).trim();let nt=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,L);else{const tt=Ku(s,F,"vertex"),V=Ku(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+tt+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||Z==="")&&($=!1);$&&(R.diagnostics={runnable:nt,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(F),s.deleteShader(L),U=new ha(s,x),y=fM(s,x)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,nM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=L,this}let EM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new TM(t),e.set(t,i)),i}}class TM{constructor(t){this.id=EM++,this.code=t,this.usedTimes=0}}function AM(n,t,e,i,s,r,a){const o=new hc,l=new bM,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,I,z){const Z=I.fog,nt=z.geometry,$=y.isMeshStandardMaterial?I.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||$),V=tt&&tt.mapping===za?tt.image.height:null,it=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ot=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Et=ot!==void 0?ot.length:0;let Dt=0;nt.morphAttributes.position!==void 0&&(Dt=1),nt.morphAttributes.normal!==void 0&&(Dt=2),nt.morphAttributes.color!==void 0&&(Dt=3);let Kt,et,ut,bt;if(it){const ne=Pn[it];Kt=ne.vertexShader,et=ne.fragmentShader}else Kt=y.vertexShader,et=y.fragmentShader,l.update(y),ut=l.getVertexShaderID(y),bt=l.getFragmentShaderID(y);const _t=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Nt=z.isInstancedMesh===!0,Bt=z.isBatchedMesh===!0,de=!!y.map,w=!!y.matcap,D=!!tt,b=!!y.aoMap,st=!!y.lightMap,K=!!y.bumpMap,q=!!y.normalMap,Q=!!y.displacementMap,at=!!y.emissiveMap,j=!!y.metalnessMap,v=!!y.roughnessMap,_=y.anisotropy>0,C=y.clearcoat>0,H=y.dispersion>0,W=y.iridescence>0,k=y.sheen>0,pt=y.transmission>0,lt=_&&!!y.anisotropyMap,ht=C&&!!y.clearcoatMap,Lt=C&&!!y.clearcoatNormalMap,ct=C&&!!y.clearcoatRoughnessMap,vt=W&&!!y.iridescenceMap,Ct=W&&!!y.iridescenceThicknessMap,It=k&&!!y.sheenColorMap,mt=k&&!!y.sheenRoughnessMap,Ft=!!y.specularMap,zt=!!y.specularColorMap,ee=!!y.specularIntensityMap,N=pt&&!!y.transmissionMap,xt=pt&&!!y.thicknessMap,J=!!y.gradientMap,rt=!!y.alphaMap,yt=y.alphaTest>0,Mt=!!y.alphaHash,Ht=!!y.extensions;let ve=vi;y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Ae={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Kt,fragmentShader:et,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:bt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&z._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&z.instanceColor!==null,instancingMorph:Nt&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Is,alphaToCoverage:!!y.alphaToCoverage,map:de,matcap:w,envMap:D,envMapMode:D&&tt.mapping,envMapCubeUVHeight:V,aoMap:b,lightMap:st,bumpMap:K,normalMap:q,displacementMap:h&&Q,emissiveMap:at,normalMapObjectSpace:q&&y.normalMapType===v_,normalMapTangentSpace:q&&y.normalMapType===g_,metalnessMap:j,roughnessMap:v,anisotropy:_,anisotropyMap:lt,clearcoat:C,clearcoatMap:ht,clearcoatNormalMap:Lt,clearcoatRoughnessMap:ct,dispersion:H,iridescence:W,iridescenceMap:vt,iridescenceThicknessMap:Ct,sheen:k,sheenColorMap:It,sheenRoughnessMap:mt,specularMap:Ft,specularColorMap:zt,specularIntensityMap:ee,transmission:pt,transmissionMap:N,thicknessMap:xt,gradientMap:J,opaque:y.transparent===!1&&y.blending===qi&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:yt,alphaHash:Mt,combine:y.combine,mapUv:de&&x(y.map.channel),aoMapUv:b&&x(y.aoMap.channel),lightMapUv:st&&x(y.lightMap.channel),bumpMapUv:K&&x(y.bumpMap.channel),normalMapUv:q&&x(y.normalMap.channel),displacementMapUv:Q&&x(y.displacementMap.channel),emissiveMapUv:at&&x(y.emissiveMap.channel),metalnessMapUv:j&&x(y.metalnessMap.channel),roughnessMapUv:v&&x(y.roughnessMap.channel),anisotropyMapUv:lt&&x(y.anisotropyMap.channel),clearcoatMapUv:ht&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(y.sheenRoughnessMap.channel),specularMapUv:Ft&&x(y.specularMap.channel),specularColorMapUv:zt&&x(y.specularColorMap.channel),specularIntensityMapUv:ee&&x(y.specularIntensityMap.channel),transmissionMapUv:N&&x(y.transmissionMap.channel),thicknessMapUv:xt&&x(y.thicknessMap.channel),alphaMapUv:rt&&x(y.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(q||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!nt.attributes.uv&&(de||rt),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pt,skinning:z.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:de&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===se,decodeVideoTextureEmissive:at&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ze,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ht&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&y.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(A(M,y),T(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=g[y.type];let R;if(M){const I=Pn[M];R=lg.clone(I.uniforms)}else R=y.uniforms;return R}function F(y,M){let R;for(let I=0,z=u.length;I<z;I++){const Z=u[I];if(Z.cacheKey===M){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new yM(n,M,y,r),u.push(R)),R}function L(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:F,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:U}}function wM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function RM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function tf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ef(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,h,p,g,x,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function o(f,h,p,g,x,m){const d=a(f,h,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(f,h,p,g,x,m){const d=a(f,h,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||RM),i.length>1&&i.sort(h||tf),s.length>1&&s.sort(h||tf)}function u(){for(let f=t,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function CM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new ef,n.set(i,[a])):s>=r.length?(a=new ef,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function PM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new qt};break;case"SpotLight":e={position:new G,direction:new G,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function LM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let DM=0;function IM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function UM(n){const t=new PM,e=LM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new ge,a=new ge;function o(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,A=0,T=0,S=0,F=0,L=0,P=0;c.sort(IM);for(let y=0,M=c.length;y<M;y++){const R=c[y],I=R.color,z=R.intensity,Z=R.distance,nt=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*z,f+=I.g*z,h+=I.b*z;else if(R.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(R.sh.coefficients[$],z);P++}else if(R.isDirectionalLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const tt=R.shadow,V=e.get(R);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=nt,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=$,p++}else if(R.isSpotLight){const $=t.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(I).multiplyScalar(z),$.distance=Z,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,i.spot[x]=$;const tt=R.shadow;if(R.map&&(i.spotLightMap[F]=R.map,F++,tt.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[x]=tt.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=nt,S++}x++}else if(R.isRectAreaLight){const $=t.get(R);$.color.copy(I).multiplyScalar(z),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=$,m++}else if(R.isPointLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const tt=R.shadow,V=e.get(R);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=nt,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=$,g++}else if(R.isHemisphereLight){const $=t.get(R);$.skyColor.copy(R.color).multiplyScalar(z),$.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[d]=$,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==F||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+F-L,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=F,U.numLightProbes=P,i.version=DM++)}function l(c,u){let f=0,h=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const T=c[d];if(T.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(T.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function nf(n){const t=new UM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function NM(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new nf(n),t.set(s,[o])):r>=a.length?(o=new nf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class FM extends Ns{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OM extends Ns{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
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
}`;function GM(n,t,e){let i=new Kh;const s=new Xt,r=new Xt,a=new xe,o=new FM({depthPacking:__}),l=new OM,c={},u=e.maxTextureSize,f={[Mi]:We,[We]:Mi,[Ze]:Ze},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:BM,fragmentShader:zM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let d=this.type;this.render=function(L,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(gi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=d!==Yn&&this.type===Yn,Z=d===Yn&&this.type!==Yn;for(let nt=0,$=L.length;nt<$;nt++){const tt=L[nt],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const it=V.getFrameExtents();if(s.multiply(it),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||z===!0||Z===!0){const Et=this.type!==Yn?{minFilter:Sn,magFilter:Sn}:{};V.map!==null&&V.map.dispose(),V.map=new Ki(s.x,s.y,Et),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ot=V.getViewportCount();for(let Et=0;Et<ot;Et++){const Dt=V.getViewport(Et);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),I.viewport(a),V.updateMatrices(tt,Et),i=V.getFrustum(),S(P,U,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Yn&&A(V,U),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,R)};function A(L,P){const U=t.update(x);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ki(s.x,s.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,U,h,x,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,U,p,x,null)}function T(L,P,U,y){let M=null;const R=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)M=R;else if(M=U.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const I=M.uuid,z=P.uuid;let Z=c[I];Z===void 0&&(Z={},c[I]=Z);let nt=Z[z];nt===void 0&&(nt=M.clone(),Z[z]=nt,P.addEventListener("dispose",F)),M=nt}if(M.visible=P.visible,M.wireframe=P.wireframe,y===Yn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=U}return M}function S(L,P,U,y,M){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===Yn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const z=t.update(L),Z=L.material;if(Array.isArray(Z)){const nt=z.groups;for(let $=0,tt=nt.length;$<tt;$++){const V=nt[$],it=Z[V.materialIndex];if(it&&it.visible){const ot=T(L,it,y,M);L.onBeforeShadow(n,L,P,U,z,ot,V),n.renderBufferDirect(U,null,z,ot,L,V),L.onAfterShadow(n,L,P,U,z,ot,V)}}}else if(Z.visible){const nt=T(L,Z,y,M);L.onBeforeShadow(n,L,P,U,z,nt,null),n.renderBufferDirect(U,null,z,nt,L,null),L.onAfterShadow(n,L,P,U,z,nt,null)}}const I=L.children;for(let z=0,Z=I.length;z<Z;z++)S(I[z],P,U,y,M)}function F(L){L.target.removeEventListener("dispose",F);for(const U in c){const y=c[U],M=L.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const HM={[Ko]:jo,[Zo]:tl,[Jo]:el,[ws]:Qo,[jo]:Ko,[tl]:Zo,[el]:Jo,[Qo]:ws};function VM(n,t){function e(){let N=!1;const xt=new xe;let J=null;const rt=new xe(0,0,0,0);return{setMask:function(yt){J!==yt&&!N&&(n.colorMask(yt,yt,yt,yt),J=yt)},setLocked:function(yt){N=yt},setClear:function(yt,Mt,Ht,ve,Ae){Ae===!0&&(yt*=ve,Mt*=ve,Ht*=ve),xt.set(yt,Mt,Ht,ve),rt.equals(xt)===!1&&(n.clearColor(yt,Mt,Ht,ve),rt.copy(xt))},reset:function(){N=!1,J=null,rt.set(-1,0,0,0)}}}function i(){let N=!1,xt=!1,J=null,rt=null,yt=null;return{setReversed:function(Mt){if(xt!==Mt){const Ht=t.get("EXT_clip_control");xt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const ve=yt;yt=null,this.setClear(ve)}xt=Mt},getReversed:function(){return xt},setTest:function(Mt){Mt?_t(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(Mt){J!==Mt&&!N&&(n.depthMask(Mt),J=Mt)},setFunc:function(Mt){if(xt&&(Mt=HM[Mt]),rt!==Mt){switch(Mt){case Ko:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case Zo:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case Qo:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=Mt}},setLocked:function(Mt){N=Mt},setClear:function(Mt){yt!==Mt&&(xt&&(Mt=1-Mt),n.clearDepth(Mt),yt=Mt)},reset:function(){N=!1,J=null,rt=null,yt=null,xt=!1}}}function s(){let N=!1,xt=null,J=null,rt=null,yt=null,Mt=null,Ht=null,ve=null,Ae=null;return{setTest:function(ne){N||(ne?_t(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(ne){xt!==ne&&!N&&(n.stencilMask(ne),xt=ne)},setFunc:function(ne,fn,On){(J!==ne||rt!==fn||yt!==On)&&(n.stencilFunc(ne,fn,On),J=ne,rt=fn,yt=On)},setOp:function(ne,fn,On){(Mt!==ne||Ht!==fn||ve!==On)&&(n.stencilOp(ne,fn,On),Mt=ne,Ht=fn,ve=On)},setLocked:function(ne){N=ne},setClear:function(ne){Ae!==ne&&(n.clearStencil(ne),Ae=ne)},reset:function(){N=!1,xt=null,J=null,rt=null,yt=null,Mt=null,Ht=null,ve=null,Ae=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,T=null,S=null,F=null,L=null,P=new qt(0,0,0),U=0,y=!1,M=null,R=null,I=null,z=null,Z=null;const nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,tt=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=tt>=2);let it=null,ot={};const Et=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),Kt=new xe().fromArray(Et),et=new xe().fromArray(Dt);function ut(N,xt,J,rt){const yt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(N,Mt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<J;Ht++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(xt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return Mt}const bt={};bt[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(n.DEPTH_TEST),a.setFunc(ws),K(!1),q(ou),_t(n.CULL_FACE),b(gi);function _t(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Pt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Nt(N,xt){return f[N]!==xt?(n.bindFramebuffer(N,xt),f[N]=xt,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xt),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function Bt(N,xt){let J=p,rt=!1;if(N){J=h.get(xt),J===void 0&&(J=[],h.set(xt,J));const yt=N.textures;if(J.length!==yt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Ht=yt.length;Mt<Ht;Mt++)J[Mt]=n.COLOR_ATTACHMENT0+Mt;J.length=yt.length,rt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,rt=!0);rt&&n.drawBuffers(J)}function de(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const w={[Bi]:n.FUNC_ADD,[Vm]:n.FUNC_SUBTRACT,[km]:n.FUNC_REVERSE_SUBTRACT};w[Wm]=n.MIN,w[Xm]=n.MAX;const D={[Ym]:n.ZERO,[qm]:n.ONE,[$m]:n.SRC_COLOR,[qo]:n.SRC_ALPHA,[t_]:n.SRC_ALPHA_SATURATE,[Jm]:n.DST_COLOR,[jm]:n.DST_ALPHA,[Km]:n.ONE_MINUS_SRC_COLOR,[$o]:n.ONE_MINUS_SRC_ALPHA,[Qm]:n.ONE_MINUS_DST_COLOR,[Zm]:n.ONE_MINUS_DST_ALPHA,[e_]:n.CONSTANT_COLOR,[n_]:n.ONE_MINUS_CONSTANT_COLOR,[i_]:n.CONSTANT_ALPHA,[s_]:n.ONE_MINUS_CONSTANT_ALPHA};function b(N,xt,J,rt,yt,Mt,Ht,ve,Ae,ne){if(N===gi){x===!0&&(Pt(n.BLEND),x=!1);return}if(x===!1&&(_t(n.BLEND),x=!0),N!==Hm){if(N!==m||ne!==y){if((d!==Bi||S!==Bi)&&(n.blendEquation(n.FUNC_ADD),d=Bi,S=Bi),ne)switch(N){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFunc(n.ONE,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,T=null,F=null,L=null,P.set(0,0,0),U=0,m=N,y=ne}return}yt=yt||xt,Mt=Mt||J,Ht=Ht||rt,(xt!==d||yt!==S)&&(n.blendEquationSeparate(w[xt],w[yt]),d=xt,S=yt),(J!==A||rt!==T||Mt!==F||Ht!==L)&&(n.blendFuncSeparate(D[J],D[rt],D[Mt],D[Ht]),A=J,T=rt,F=Mt,L=Ht),(ve.equals(P)===!1||Ae!==U)&&(n.blendColor(ve.r,ve.g,ve.b,Ae),P.copy(ve),U=Ae),m=N,y=!1}function st(N,xt){N.side===Ze?Pt(n.CULL_FACE):_t(n.CULL_FACE);let J=N.side===We;xt&&(J=!J),K(J),N.blending===qi&&N.transparent===!1?b(gi):b(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const rt=N.stencilWrite;o.setTest(rt),rt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function q(N){N!==Bm?(_t(n.CULL_FACE),N!==R&&(N===ou?n.cullFace(n.BACK):N===zm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),R=N}function Q(N){N!==I&&($&&n.lineWidth(N),I=N)}function at(N,xt,J){N?(_t(n.POLYGON_OFFSET_FILL),(z!==xt||Z!==J)&&(n.polygonOffset(xt,J),z=xt,Z=J)):Pt(n.POLYGON_OFFSET_FILL)}function j(N){N?_t(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function v(N){N===void 0&&(N=n.TEXTURE0+nt-1),it!==N&&(n.activeTexture(N),it=N)}function _(N,xt,J){J===void 0&&(it===null?J=n.TEXTURE0+nt-1:J=it);let rt=ot[J];rt===void 0&&(rt={type:void 0,texture:void 0},ot[J]=rt),(rt.type!==N||rt.texture!==xt)&&(it!==J&&(n.activeTexture(J),it=J),n.bindTexture(N,xt||bt[N]),rt.type=N,rt.texture=xt)}function C(){const N=ot[it];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(N){Kt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Kt.copy(N))}function mt(N){et.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function Ft(N,xt){let J=c.get(xt);J===void 0&&(J=new WeakMap,c.set(xt,J));let rt=J.get(N);rt===void 0&&(rt=n.getUniformBlockIndex(xt,N.name),J.set(N,rt))}function zt(N,xt){const rt=c.get(xt).get(N);l.get(xt)!==rt&&(n.uniformBlockBinding(xt,rt,N.__bindingPointIndex),l.set(xt,rt))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},it=null,ot={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,T=null,S=null,F=null,L=null,P=new qt(0,0,0),U=0,y=!1,M=null,R=null,I=null,z=null,Z=null,Kt.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Pt,bindFramebuffer:Nt,drawBuffers:Bt,useProgram:de,setBlending:b,setMaterial:st,setFlipSided:K,setCullFace:q,setLineWidth:Q,setPolygonOffset:at,setScissorTest:j,activeTexture:v,bindTexture:_,unbindTexture:C,compressedTexImage2D:H,compressedTexImage3D:W,texImage2D:vt,texImage3D:Ct,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:Lt,texStorage3D:ct,texSubImage2D:k,texSubImage3D:pt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ht,scissor:It,viewport:mt,reset:ee}}function sf(n,t,e,i){const s=kM(i);switch(e){case Dh:return n*t;case Uh:return n*t;case Nh:return n*t*2;case Fh:return n*t/s.components*s.byteLength;case oc:return n*t/s.components*s.byteLength;case Oh:return n*t*2/s.components*s.byteLength;case lc:return n*t*2/s.components*s.byteLength;case Ih:return n*t*3/s.components*s.byteLength;case vn:return n*t*4/s.components*s.byteLength;case cc:return n*t*4/s.components*s.byteLength;case oa:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ca:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:case cl:return Math.max(n,16)*Math.max(t,8)/4;case al:case ll:return Math.max(n,8)*Math.max(t,8)/2;case ul:case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fa:case wl:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bh:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Pl:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kM(n){switch(n){case si:case Ch:return{byteLength:1,components:1};case _r:case Ph:case yr:return{byteLength:2,components:1};case rc:case ac:return{byteLength:2,components:4};case $i:case sc:case Zn:return{byteLength:4,components:1};case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function WM(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,_){return p?new OffscreenCanvas(v,_):ba("canvas")}function x(v,_,C){let H=1;const W=j(v);if((W.width>C||W.height>C)&&(H=C/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const k=Math.floor(H*W.width),pt=Math.floor(H*W.height);f===void 0&&(f=g(k,pt));const lt=_?g(k,pt):f;return lt.width=k,lt.height=pt,lt.getContext("2d").drawImage(v,0,0,k,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+pt+")."),lt}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),v;return v}function m(v){return v.generateMipmaps}function d(v){n.generateMipmap(v)}function A(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(v,_,C,H,W=!1){if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let k=_;if(_===n.RED&&(C===n.FLOAT&&(k=n.R32F),C===n.HALF_FLOAT&&(k=n.R16F),C===n.UNSIGNED_BYTE&&(k=n.R8)),_===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.R8UI),C===n.UNSIGNED_SHORT&&(k=n.R16UI),C===n.UNSIGNED_INT&&(k=n.R32UI),C===n.BYTE&&(k=n.R8I),C===n.SHORT&&(k=n.R16I),C===n.INT&&(k=n.R32I)),_===n.RG&&(C===n.FLOAT&&(k=n.RG32F),C===n.HALF_FLOAT&&(k=n.RG16F),C===n.UNSIGNED_BYTE&&(k=n.RG8)),_===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RG8UI),C===n.UNSIGNED_SHORT&&(k=n.RG16UI),C===n.UNSIGNED_INT&&(k=n.RG32UI),C===n.BYTE&&(k=n.RG8I),C===n.SHORT&&(k=n.RG16I),C===n.INT&&(k=n.RG32I)),_===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGB8UI),C===n.UNSIGNED_SHORT&&(k=n.RGB16UI),C===n.UNSIGNED_INT&&(k=n.RGB32UI),C===n.BYTE&&(k=n.RGB8I),C===n.SHORT&&(k=n.RGB16I),C===n.INT&&(k=n.RGB32I)),_===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),C===n.UNSIGNED_INT&&(k=n.RGBA32UI),C===n.BYTE&&(k=n.RGBA8I),C===n.SHORT&&(k=n.RGBA16I),C===n.INT&&(k=n.RGBA32I)),_===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),_===n.RGBA){const pt=W?Ga:Yt.getTransfer(H);C===n.FLOAT&&(k=n.RGBA32F),C===n.HALF_FLOAT&&(k=n.RGBA16F),C===n.UNSIGNED_BYTE&&(k=pt===se?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function S(v,_){let C;return v?_===null||_===$i||_===Ps?C=n.DEPTH24_STENCIL8:_===Zn?C=n.DEPTH32F_STENCIL8:_===_r&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===$i||_===Ps?C=n.DEPTH_COMPONENT24:_===Zn?C=n.DEPTH_COMPONENT32F:_===_r&&(C=n.DEPTH_COMPONENT16),C}function F(v,_){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==Sn&&v.minFilter!==Dn?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function L(v){const _=v.target;_.removeEventListener("dispose",L),U(_),_.isVideoTexture&&u.delete(_)}function P(v){const _=v.target;_.removeEventListener("dispose",P),M(_)}function U(v){const _=i.get(v);if(_.__webglInit===void 0)return;const C=v.source,H=h.get(C);if(H){const W=H[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&y(v),Object.keys(H).length===0&&h.delete(C)}i.remove(v)}function y(v){const _=i.get(v);n.deleteTexture(_.__webglTexture);const C=v.source,H=h.get(C);delete H[_.__cacheKey],a.memory.textures--}function M(v){const _=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let W=0;W<_.__webglFramebuffer[H].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[H][W]);else n.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)n.deleteFramebuffer(_.__webglFramebuffer[H]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=v.textures;for(let H=0,W=C.length;H<W;H++){const k=i.get(C[H]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(C[H])}i.remove(v)}let R=0;function I(){R=0}function z(){const v=R;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),R+=1,v}function Z(v){const _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.colorSpace),_.join()}function nt(v,_){const C=i.get(v);if(v.isVideoTexture&&Q(v),v.isRenderTargetTexture===!1&&v.version>0&&C.__version!==v.version){const H=v.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(C,v,_);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+_)}function $(v,_){const C=i.get(v);if(v.version>0&&C.__version!==v.version){et(C,v,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+_)}function tt(v,_){const C=i.get(v);if(v.version>0&&C.__version!==v.version){et(C,v,_);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+_)}function V(v,_){const C=i.get(v);if(v.version>0&&C.__version!==v.version){ut(C,v,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+_)}const it={[sl]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},ot={[Sn]:n.NEAREST,[p_]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},Et={[x_]:n.NEVER,[T_]:n.ALWAYS,[M_]:n.LESS,[zh]:n.LEQUAL,[S_]:n.EQUAL,[b_]:n.GEQUAL,[y_]:n.GREATER,[E_]:n.NOTEQUAL};function Dt(v,_){if(_.type===Zn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Dn||_.magFilter===so||_.magFilter===Lr||_.magFilter===ki||_.minFilter===Dn||_.minFilter===so||_.minFilter===Lr||_.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,it[_.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,it[_.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,it[_.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,ot[_.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,ot[_.minFilter]),_.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,Et[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Sn||_.minFilter!==Lr&&_.minFilter!==ki||_.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(v,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(v,_){let C=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",L));const H=_.source;let W=h.get(H);W===void 0&&(W={},h.set(H,W));const k=Z(_);if(k!==v.__cacheKey){W[k]===void 0&&(W[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),W[k].usedTimes++;const pt=W[v.__cacheKey];pt!==void 0&&(W[v.__cacheKey].usedTimes--,pt.usedTimes===0&&y(_)),v.__cacheKey=k,v.__webglTexture=W[k].texture}return C}function et(v,_,C){let H=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=n.TEXTURE_3D);const W=Kt(v,_),k=_.source;e.bindTexture(H,v.__webglTexture,n.TEXTURE0+C);const pt=i.get(k);if(k.version!==pt.__version||W===!0){e.activeTexture(n.TEXTURE0+C);const lt=Yt.getPrimaries(Yt.workingColorSpace),ht=_.colorSpace===_i?null:Yt.getPrimaries(_.colorSpace),Lt=_.colorSpace===_i||lt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ct=x(_.image,!1,s.maxTextureSize);ct=at(_,ct);const vt=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type);let It=T(_.internalFormat,vt,Ct,_.colorSpace,_.isVideoTexture);Dt(H,_);let mt;const Ft=_.mipmaps,zt=_.isVideoTexture!==!0,ee=pt.__version===void 0||W===!0,N=k.dataReady,xt=F(_,ct);if(_.isDepthTexture)It=S(_.format===Ls,_.type),ee&&(zt?e.texStorage2D(n.TEXTURE_2D,1,It,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,It,ct.width,ct.height,0,vt,Ct,null));else if(_.isDataTexture)if(Ft.length>0){zt&&ee&&e.texStorage2D(n.TEXTURE_2D,xt,It,Ft[0].width,Ft[0].height);for(let J=0,rt=Ft.length;J<rt;J++)mt=Ft[J],zt?N&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,mt.width,mt.height,vt,Ct,mt.data):e.texImage2D(n.TEXTURE_2D,J,It,mt.width,mt.height,0,vt,Ct,mt.data);_.generateMipmaps=!1}else zt?(ee&&e.texStorage2D(n.TEXTURE_2D,xt,It,ct.width,ct.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,vt,Ct,ct.data)):e.texImage2D(n.TEXTURE_2D,0,It,ct.width,ct.height,0,vt,Ct,ct.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,It,Ft[0].width,Ft[0].height,ct.depth);for(let J=0,rt=Ft.length;J<rt;J++)if(mt=Ft[J],_.format!==vn)if(vt!==null)if(zt){if(N)if(_.layerUpdates.size>0){const yt=sf(mt.width,mt.height,_.format,_.type);for(const Mt of _.layerUpdates){const Ht=mt.data.subarray(Mt*yt/mt.data.BYTES_PER_ELEMENT,(Mt+1)*yt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Mt,mt.width,mt.height,1,vt,Ht)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,mt.width,mt.height,ct.depth,vt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,It,mt.width,mt.height,ct.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,mt.width,mt.height,ct.depth,vt,Ct,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,It,mt.width,mt.height,ct.depth,0,vt,Ct,mt.data)}else{zt&&ee&&e.texStorage2D(n.TEXTURE_2D,xt,It,Ft[0].width,Ft[0].height);for(let J=0,rt=Ft.length;J<rt;J++)mt=Ft[J],_.format!==vn?vt!==null?zt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,mt.width,mt.height,vt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,It,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,mt.width,mt.height,vt,Ct,mt.data):e.texImage2D(n.TEXTURE_2D,J,It,mt.width,mt.height,0,vt,Ct,mt.data)}else if(_.isDataArrayTexture)if(zt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,It,ct.width,ct.height,ct.depth),N)if(_.layerUpdates.size>0){const J=sf(ct.width,ct.height,_.format,_.type);for(const rt of _.layerUpdates){const yt=ct.data.subarray(rt*J/ct.data.BYTES_PER_ELEMENT,(rt+1)*J/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,ct.width,ct.height,1,vt,Ct,yt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,vt,Ct,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,ct.width,ct.height,ct.depth,0,vt,Ct,ct.data);else if(_.isData3DTexture)zt?(ee&&e.texStorage3D(n.TEXTURE_3D,xt,It,ct.width,ct.height,ct.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,vt,Ct,ct.data)):e.texImage3D(n.TEXTURE_3D,0,It,ct.width,ct.height,ct.depth,0,vt,Ct,ct.data);else if(_.isFramebufferTexture){if(ee)if(zt)e.texStorage2D(n.TEXTURE_2D,xt,It,ct.width,ct.height);else{let J=ct.width,rt=ct.height;for(let yt=0;yt<xt;yt++)e.texImage2D(n.TEXTURE_2D,yt,It,J,rt,0,vt,Ct,null),J>>=1,rt>>=1}}else if(Ft.length>0){if(zt&&ee){const J=j(Ft[0]);e.texStorage2D(n.TEXTURE_2D,xt,It,J.width,J.height)}for(let J=0,rt=Ft.length;J<rt;J++)mt=Ft[J],zt?N&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,vt,Ct,mt):e.texImage2D(n.TEXTURE_2D,J,It,vt,Ct,mt);_.generateMipmaps=!1}else if(zt){if(ee){const J=j(ct);e.texStorage2D(n.TEXTURE_2D,xt,It,J.width,J.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Ct,ct)}else e.texImage2D(n.TEXTURE_2D,0,It,vt,Ct,ct);m(_)&&d(H),pt.__version=k.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function ut(v,_,C){if(_.image.length!==6)return;const H=Kt(v,_),W=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+C);const k=i.get(W);if(W.version!==k.__version||H===!0){e.activeTexture(n.TEXTURE0+C);const pt=Yt.getPrimaries(Yt.workingColorSpace),lt=_.colorSpace===_i?null:Yt.getPrimaries(_.colorSpace),ht=_.colorSpace===_i||pt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Lt=_.isCompressedTexture||_.image[0].isCompressedTexture,ct=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let rt=0;rt<6;rt++)!Lt&&!ct?vt[rt]=x(_.image[rt],!0,s.maxCubemapSize):vt[rt]=ct?_.image[rt].image:_.image[rt],vt[rt]=at(_,vt[rt]);const Ct=vt[0],It=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),Ft=T(_.internalFormat,It,mt,_.colorSpace),zt=_.isVideoTexture!==!0,ee=k.__version===void 0||H===!0,N=W.dataReady;let xt=F(_,Ct);Dt(n.TEXTURE_CUBE_MAP,_);let J;if(Lt){zt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ft,Ct.width,Ct.height);for(let rt=0;rt<6;rt++){J=vt[rt].mipmaps;for(let yt=0;yt<J.length;yt++){const Mt=J[yt];_.format!==vn?It!==null?zt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt,0,0,Mt.width,Mt.height,It,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt,Ft,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt,0,0,Mt.width,Mt.height,It,mt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt,Ft,Mt.width,Mt.height,0,It,mt,Mt.data)}}}else{if(J=_.mipmaps,zt&&ee){J.length>0&&xt++;const rt=j(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ft,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ct){zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,vt[rt].width,vt[rt].height,It,mt,vt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ft,vt[rt].width,vt[rt].height,0,It,mt,vt[rt].data);for(let yt=0;yt<J.length;yt++){const Ht=J[yt].image[rt].image;zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt+1,0,0,Ht.width,Ht.height,It,mt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt+1,Ft,Ht.width,Ht.height,0,It,mt,Ht.data)}}else{zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,It,mt,vt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ft,It,mt,vt[rt]);for(let yt=0;yt<J.length;yt++){const Mt=J[yt];zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt+1,0,0,It,mt,Mt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt+1,Ft,It,mt,Mt.image[rt])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),k.__version=W.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function bt(v,_,C,H,W,k){const pt=r.convert(C.format,C.colorSpace),lt=r.convert(C.type),ht=T(C.internalFormat,pt,lt,C.colorSpace),Lt=i.get(_),ct=i.get(C);if(ct.__renderTarget=_,!Lt.__hasExternalTextures){const vt=Math.max(1,_.width>>k),Ct=Math.max(1,_.height>>k);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,k,ht,vt,Ct,_.depth,0,pt,lt,null):e.texImage2D(W,k,ht,vt,Ct,0,pt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,v),q(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,W,ct.__webglTexture,0,K(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,W,ct.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(v,_,C){if(n.bindRenderbuffer(n.RENDERBUFFER,v),_.depthBuffer){const H=_.depthTexture,W=H&&H.isDepthTexture?H.type:null,k=S(_.stencilBuffer,W),pt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=K(_);q(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,k,_.width,_.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,k,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,k,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,v)}else{const H=_.textures;for(let W=0;W<H.length;W++){const k=H[W],pt=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),ht=T(k.internalFormat,pt,lt,k.colorSpace),Lt=K(_);C&&q(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,ht,_.width,_.height):q(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,ht,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ht,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),nt(_.depthTexture,0);const W=H.__webglTexture,k=K(_);if(_.depthTexture.format===bs)q(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(_.depthTexture.format===Ls)q(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Nt(v){const _=i.get(v),C=v.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==v.depthTexture){const H=v.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=H}if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Pt(_.__webglFramebuffer,v)}else if(C){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=n.createRenderbuffer(),_t(_.__webglDepthbuffer[H],v,!1);else{const W=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),_t(_.__webglDepthbuffer,v,!1);else{const H=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,W)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(v,_,C){const H=i.get(v);_!==void 0&&bt(H.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Nt(v)}function de(v){const _=v.texture,C=i.get(v),H=i.get(_);v.addEventListener("dispose",P);const W=v.textures,k=v.isWebGLCubeRenderTarget===!0,pt=W.length>1;if(pt||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=_.version,a.memory.textures++),k){C.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[lt]=[];for(let ht=0;ht<_.mipmaps.length;ht++)C.__webglFramebuffer[lt][ht]=n.createFramebuffer()}else C.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let lt=0;lt<_.mipmaps.length;lt++)C.__webglFramebuffer[lt]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(pt)for(let lt=0,ht=W.length;lt<ht;lt++){const Lt=i.get(W[lt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&q(v)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let lt=0;lt<W.length;lt++){const ht=W[lt];C.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[lt]);const Lt=r.convert(ht.format,ht.colorSpace),ct=r.convert(ht.type),vt=T(ht.internalFormat,Lt,ct,ht.colorSpace,v.isXRRenderTarget===!0),Ct=K(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,vt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,C.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(C.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,_);for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)bt(C.__webglFramebuffer[lt][ht],v,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ht);else bt(C.__webglFramebuffer[lt],v,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(_)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let lt=0,ht=W.length;lt<ht;lt++){const Lt=W[lt],ct=i.get(Lt);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),Dt(n.TEXTURE_2D,Lt),bt(C.__webglFramebuffer,v,Lt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(Lt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(lt=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,H.__webglTexture),Dt(lt,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)bt(C.__webglFramebuffer[ht],v,_,n.COLOR_ATTACHMENT0,lt,ht);else bt(C.__webglFramebuffer,v,_,n.COLOR_ATTACHMENT0,lt,0);m(_)&&d(lt),e.unbindTexture()}v.depthBuffer&&Nt(v)}function w(v){const _=v.textures;for(let C=0,H=_.length;C<H;C++){const W=_[C];if(m(W)){const k=A(v),pt=i.get(W).__webglTexture;e.bindTexture(k,pt),d(k),e.unbindTexture()}}}const D=[],b=[];function st(v){if(v.samples>0){if(q(v)===!1){const _=v.textures,C=v.width,H=v.height;let W=n.COLOR_BUFFER_BIT;const k=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(v),lt=_.length>1;if(lt)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);const Lt=i.get(_[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,C,H,0,0,C,H,W,n.NEAREST),l===!0&&(D.length=0,b.length=0,D.push(n.COLOR_ATTACHMENT0+ht),v.depthBuffer&&v.resolveDepthBuffer===!1&&(D.push(k),b.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);const Lt=i.get(_[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const _=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function K(v){return Math.min(s.maxSamples,v.samples)}function q(v){const _=i.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Q(v){const _=a.render.frame;u.get(v)!==_&&(u.set(v,_),v.update())}function at(v,_){const C=v.colorSpace,H=v.format,W=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||C!==Is&&C!==_i&&(Yt.getTransfer(C)===se?(H!==vn||W!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function j(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=nt,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=Bt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=q}function XM(n,t){function e(i,s=_i){let r;const a=Yt.getTransfer(s);if(i===si)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ch)return n.BYTE;if(i===Ph)return n.SHORT;if(i===_r)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===$i)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===Dh)return n.ALPHA;if(i===Ih)return n.RGB;if(i===vn)return n.RGBA;if(i===Uh)return n.LUMINANCE;if(i===Nh)return n.LUMINANCE_ALPHA;if(i===bs)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===Fh)return n.RED;if(i===oc)return n.RED_INTEGER;if(i===Oh)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===oa||i===la||i===ca||i===ua)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===al||i===ol||i===ll||i===cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===fl||i===hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ul||i===fl)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===pl||i===ml||i===_l||i===gl||i===vl||i===xl||i===Ml||i===Sl||i===yl||i===El||i===bl||i===Tl||i===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_l)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ml)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===El)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Al)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fa||i===wl||i===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===fa)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===Cl||i===Pl||i===Ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class YM extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jr extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qM={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const $M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
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

}`;class jM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Si({vertexShader:$M,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends Us{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const x=new jM,m=e.getContextAttributes();let d=null,A=null;const T=[],S=[],F=new Xt;let L=null;const P=new an;P.viewport=new xe;const U=new an;U.viewport=new xe;const y=[P,U],M=new YM;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=T[et];return ut===void 0&&(ut=new Do,T[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=T[et];return ut===void 0&&(ut=new Do,T[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=T[et];return ut===void 0&&(ut=new Do,T[et]=ut),ut.getHandSpace()};function z(et){const ut=S.indexOf(et.inputSource);if(ut===-1)return;const bt=T[ut];bt!==void 0&&(bt.update(et.inputSource,et.frame,c||a),bt.dispatchEvent({type:et.type,data:et.inputSource}))}function Z(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",nt);for(let et=0;et<T.length;et++){const ut=S[et];ut!==null&&(S[et]=null,T[et].disconnect(ut))}R=null,I=null,x.reset(),t.setRenderTarget(d),p=null,h=null,f=null,s=null,A=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Ki(p.framebufferWidth,p.framebufferHeight,{format:vn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,bt=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?Ls:bs,bt=m.stencil?Ps:$i);const Pt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),A=new Ki(h.textureWidth,h.textureHeight,{format:vn,type:si,depthTexture:new Zh(h.textureWidth,h.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function nt(et){for(let ut=0;ut<et.removed.length;ut++){const bt=et.removed[ut],_t=S.indexOf(bt);_t>=0&&(S[_t]=null,T[_t].disconnect(bt))}for(let ut=0;ut<et.added.length;ut++){const bt=et.added[ut];let _t=S.indexOf(bt);if(_t===-1){for(let Nt=0;Nt<T.length;Nt++)if(Nt>=S.length){S.push(bt),_t=Nt;break}else if(S[Nt]===null){S[Nt]=bt,_t=Nt;break}if(_t===-1)break}const Pt=T[_t];Pt&&Pt.connect(bt)}}const $=new G,tt=new G;function V(et,ut,bt){$.setFromMatrixPosition(ut.matrixWorld),tt.setFromMatrixPosition(bt.matrixWorld);const _t=$.distanceTo(tt),Pt=ut.projectionMatrix.elements,Nt=bt.projectionMatrix.elements,Bt=Pt[14]/(Pt[10]-1),de=Pt[14]/(Pt[10]+1),w=(Pt[9]+1)/Pt[5],D=(Pt[9]-1)/Pt[5],b=(Pt[8]-1)/Pt[0],st=(Nt[8]+1)/Nt[0],K=Bt*b,q=Bt*st,Q=_t/(-b+st),at=Q*-b;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(at),et.translateZ(Q),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Pt[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const j=Bt+Q,v=de+Q,_=K-at,C=q+(_t-at),H=w*de/v*j,W=D*de/v*j;et.projectionMatrix.makePerspective(_,C,H,W,j,v),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function it(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ut=et.near,bt=et.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),M.near=U.near=P.near=ut,M.far=U.far=P.far=bt,(R!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,I=M.far),P.layers.mask=et.layers.mask|2,U.layers.mask=et.layers.mask|4,M.layers.mask=P.layers.mask|U.layers.mask;const _t=et.parent,Pt=M.cameras;it(M,_t);for(let Nt=0;Nt<Pt.length;Nt++)it(Pt[Nt],_t);Pt.length===2?V(M,P,U):M.projectionMatrix.copy(P.projectionMatrix),ot(et,M,_t)};function ot(et,ut,bt){bt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(bt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=gr*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(et){l=et,h!==null&&(h.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Et=null;function Dt(et,ut){if(u=ut.getViewerPose(c||a),g=ut,u!==null){const bt=u.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let _t=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let Nt=0;Nt<bt.length;Nt++){const Bt=bt[Nt];let de=null;if(p!==null)de=p.getViewport(Bt);else{const D=f.getViewSubImage(h,Bt);de=D.viewport,Nt===0&&(t.setRenderTargetTextures(A,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(A))}let w=y[Nt];w===void 0&&(w=new an,w.layers.enable(Nt),w.viewport=new xe,y[Nt]=w),w.matrix.fromArray(Bt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Bt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(de.x,de.y,de.width,de.height),Nt===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(w)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Nt=f.getDepthInformation(bt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let bt=0;bt<T.length;bt++){const _t=S[bt],Pt=T[bt];_t!==null&&Pt!==void 0&&Pt.update(_t,ut,c||a)}Et&&Et(et,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}const Kt=new jh;Kt.setAnimationLoop(Dt),this.setAnimationLoop=function(et){Et=et},this.dispose=function(){}}}const Di=new En,JM=new ge;function QM(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Yh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,T,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===We&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===We&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=t.get(d),T=A.envMap,S=A.envMapRotation;T&&(m.envMap.value=T,Di.copy(S),Di.x*=-1,Di.y*=-1,Di.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(Di)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===We&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tS(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=s[A.id];S===void 0&&(g(A),S=u(A),s[A.id]=S,A.addEventListener("dispose",m));const F=T.program;i.updateUBOMapping(A,F);const L=t.render.frame;r[A.id]!==L&&(h(A),r[A.id]=L)}function u(A){const T=f();A.__bindingPointIndex=T;const S=n.createBuffer(),F=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,F,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const T=s[A.id],S=A.uniforms,F=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let L=0,P=S.length;L<P;L++){const U=Array.isArray(S[L])?S[L]:[S[L]];for(let y=0,M=U.length;y<M;y++){const R=U[y];if(p(R,L,y,F)===!0){const I=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let Z=0;for(let nt=0;nt<z.length;nt++){const $=z[nt],tt=x($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,I+Z,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,Z),Z+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,S,F){const L=A.value,P=T+"_"+S;if(F[P]===void 0)return typeof L=="number"||typeof L=="boolean"?F[P]=L:F[P]=L.clone(),!0;{const U=F[P];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return F[P]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function g(A){const T=A.uniforms;let S=0;const F=16;for(let P=0,U=T.length;P<U;P++){const y=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,R=y.length;M<R;M++){const I=y[M],z=Array.isArray(I.value)?I.value:[I.value];for(let Z=0,nt=z.length;Z<nt;Z++){const $=z[Z],tt=x($),V=S%F,it=V%tt.boundary,ot=V+it;S+=it,ot!==0&&F-ot<tt.storage&&(S+=F-ot),I.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=tt.storage}}}const L=S%F;return L>0&&(S+=F-L),A.__size=S,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class eS{constructor(t={}){const{canvas:e=V_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=vi,this.toneMappingExposure=1;const S=this;let F=!1,L=0,P=0,U=null,y=-1,M=null;const R=new xe,I=new xe;let z=null;const Z=new qt(0);let nt=0,$=e.width,tt=e.height,V=1,it=null,ot=null;const Et=new xe(0,0,$,tt),Dt=new xe(0,0,$,tt);let Kt=!1;const et=new Kh;let ut=!1,bt=!1;const _t=new ge,Pt=new ge,Nt=new G,Bt=new xe,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function D(){return U===null?V:1}let b=i;function st(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ic}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),b===null){const O="webgl2";if(b=st(O,E),b===null)throw st(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let K,q,Q,at,j,v,_,C,H,W,k,pt,lt,ht,Lt,ct,vt,Ct,It,mt,Ft,zt,ee,N;function xt(){K=new ax(b),K.init(),zt=new XM(b,K),q=new Q0(b,K,t,zt),Q=new VM(b,K),q.reverseDepthBuffer&&h&&Q.buffers.depth.setReversed(!0),at=new cx(b),j=new wM,v=new WM(b,K,Q,j,q,zt,at),_=new ex(S),C=new rx(S),H=new mg(b),ee=new Z0(b,H),W=new ox(b,H,at,ee),k=new fx(b,W,H,at),It=new ux(b,q,v),ct=new tx(j),pt=new AM(S,_,C,K,q,ee,ct),lt=new QM(S,j),ht=new CM,Lt=new NM(K),Ct=new j0(S,_,C,Q,k,p,l),vt=new GM(S,k,q),N=new tS(b,at,q,Q),mt=new J0(b,K,at),Ft=new lx(b,K,at),at.programs=pt.programs,S.capabilities=q,S.extensions=K,S.properties=j,S.renderLists=ht,S.shadowMap=vt,S.state=Q,S.info=at}xt();const J=new ZM(S,b);this.xr=J,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=K.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=K.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize($,tt,!1))},this.getSize=function(E){return E.set($,tt)},this.setSize=function(E,O,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,tt=O,e.width=Math.floor(E*V),e.height=Math.floor(O*V),X===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set($*V,tt*V).floor()},this.setDrawingBufferSize=function(E,O,X){$=E,tt=O,V=X,e.width=Math.floor(E*X),e.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,O,X,Y){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,O,X,Y),Q.viewport(R.copy(Et).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Dt)},this.setScissor=function(E,O,X,Y){E.isVector4?Dt.set(E.x,E.y,E.z,E.w):Dt.set(E,O,X,Y),Q.scissor(I.copy(Dt).multiplyScalar(V).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){Q.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){it=E},this.setTransparentSort=function(E){ot=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(E=!0,O=!0,X=!0){let Y=0;if(E){let B=!1;if(U!==null){const dt=U.texture.format;B=dt===cc||dt===lc||dt===oc}if(B){const dt=U.texture.type,St=dt===si||dt===$i||dt===_r||dt===Ps||dt===rc||dt===ac,Tt=Ct.getClearColor(),At=Ct.getClearAlpha(),Ot=Tt.r,Vt=Tt.g,wt=Tt.b;St?(g[0]=Ot,g[1]=Vt,g[2]=wt,g[3]=At,b.clearBufferuiv(b.COLOR,0,g)):(x[0]=Ot,x[1]=Vt,x[2]=wt,x[3]=At,b.clearBufferiv(b.COLOR,0,x))}else Y|=b.COLOR_BUFFER_BIT}O&&(Y|=b.DEPTH_BUFFER_BIT),X&&(Y|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),ht.dispose(),Lt.dispose(),j.dispose(),_.dispose(),C.dispose(),k.dispose(),ee.dispose(),N.dispose(),pt.dispose(),J.dispose(),J.removeEventListener("sessionstart",_c),J.removeEventListener("sessionend",gc),yi.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const E=at.autoReset,O=vt.enabled,X=vt.autoUpdate,Y=vt.needsUpdate,B=vt.type;xt(),at.autoReset=E,vt.enabled=O,vt.autoUpdate=X,vt.needsUpdate=Y,vt.type=B}function Mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ht(E){const O=E.target;O.removeEventListener("dispose",Ht),ve(O)}function ve(E){Ae(E),j.remove(E)}function Ae(E){const O=j.get(E).programs;O!==void 0&&(O.forEach(function(X){pt.releaseProgram(X)}),E.isShaderMaterial&&pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,Y,B,dt){O===null&&(O=de);const St=B.isMesh&&B.matrixWorld.determinant()<0,Tt=rd(E,O,X,Y,B);Q.setMaterial(Y,St);let At=X.index,Ot=1;if(Y.wireframe===!0){if(At=W.getWireframeAttribute(X),At===void 0)return;Ot=2}const Vt=X.drawRange,wt=X.attributes.position;let $t=Vt.start*Ot,le=(Vt.start+Vt.count)*Ot;dt!==null&&($t=Math.max($t,dt.start*Ot),le=Math.min(le,(dt.start+dt.count)*Ot)),At!==null?($t=Math.max($t,0),le=Math.min(le,At.count)):wt!=null&&($t=Math.max($t,0),le=Math.min(le,wt.count));const ue=le-$t;if(ue<0||ue===1/0)return;ee.setup(B,Y,Tt,X,At);let He,Zt=mt;if(At!==null&&(He=H.get(At),Zt=Ft,Zt.setIndex(He)),B.isMesh)Y.wireframe===!0?(Q.setLineWidth(Y.wireframeLinewidth*D()),Zt.setMode(b.LINES)):Zt.setMode(b.TRIANGLES);else if(B.isLine){let Rt=Y.linewidth;Rt===void 0&&(Rt=1),Q.setLineWidth(Rt*D()),B.isLineSegments?Zt.setMode(b.LINES):B.isLineLoop?Zt.setMode(b.LINE_LOOP):Zt.setMode(b.LINE_STRIP)}else B.isPoints?Zt.setMode(b.POINTS):B.isSprite&&Zt.setMode(b.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Zt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Zt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Rt=B._multiDrawStarts,Bn=B._multiDrawCounts,Jt=B._multiDrawCount,hn=At?H.get(At).bytesPerElement:1,Zi=j.get(Y).currentProgram.getUniforms();for(let Ye=0;Ye<Jt;Ye++)Zi.setValue(b,"_gl_DrawID",Ye),Zt.render(Rt[Ye]/hn,Bn[Ye])}else if(B.isInstancedMesh)Zt.renderInstances($t,ue,B.count);else if(X.isInstancedBufferGeometry){const Rt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Bn=Math.min(X.instanceCount,Rt);Zt.renderInstances($t,ue,Bn)}else Zt.render($t,ue)};function ne(E,O,X){E.transparent===!0&&E.side===Ze&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,wr(E,O,X),E.side=Mi,E.needsUpdate=!0,wr(E,O,X),E.side=Ze):wr(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),d=Lt.get(X),d.init(O),T.push(d),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const Y=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const dt=B.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Tt=dt[St];ne(Tt,X,B),Y.add(Tt)}else ne(dt,X,B),Y.add(dt)}),T.pop(),d=null,Y},this.compileAsync=function(E,O,X=null){const Y=this.compile(E,O,X);return new Promise(B=>{function dt(){if(Y.forEach(function(St){j.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){B(E);return}setTimeout(dt,10)}K.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let fn=null;function On(E){fn&&fn(E)}function _c(){yi.stop()}function gc(){yi.start()}const yi=new jh;yi.setAnimationLoop(On),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(E){fn=E,J.setAnimationLoop(E),E===null?yi.stop():yi.start()},J.addEventListener("sessionstart",_c),J.addEventListener("sessionend",gc),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,O,U),d=Lt.get(E,T.length),d.init(O),T.push(d),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),et.setFromProjectionMatrix(Pt),bt=this.localClippingEnabled,ut=ct.init(this.clippingPlanes,bt),m=ht.get(E,A.length),m.init(),A.push(m),J.enabled===!0&&J.isPresenting===!0){const dt=S.xr.getDepthSensingMesh();dt!==null&&Wa(dt,O,-1/0,S.sortObjects)}Wa(E,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(it,ot),w=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,w&&Ct.addToRenderList(m,E),this.info.render.frame++,ut===!0&&ct.beginShadows();const X=d.state.shadowsArray;vt.render(X,E,O),ut===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,B=m.transmissive;if(d.setupLights(),O.isArrayCamera){const dt=O.cameras;if(B.length>0)for(let St=0,Tt=dt.length;St<Tt;St++){const At=dt[St];xc(Y,B,E,At)}w&&Ct.render(E);for(let St=0,Tt=dt.length;St<Tt;St++){const At=dt[St];vc(m,E,At,At.viewport)}}else B.length>0&&xc(Y,B,E,O),w&&Ct.render(E),vc(m,E,O);U!==null&&(v.updateMultisampleRenderTarget(U),v.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(S,E,O),ee.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],ut===!0&&ct.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Wa(E,O,X,Y){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){Y&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);const St=k.update(E),Tt=E.material;Tt.visible&&m.push(E,St,Tt,X,Bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const St=k.update(E),Tt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Bt.copy(St.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(Tt)){const At=St.groups;for(let Ot=0,Vt=At.length;Ot<Vt;Ot++){const wt=At[Ot],$t=Tt[wt.materialIndex];$t&&$t.visible&&m.push(E,St,$t,X,Bt.z,wt)}}else Tt.visible&&m.push(E,St,Tt,X,Bt.z,null)}}const dt=E.children;for(let St=0,Tt=dt.length;St<Tt;St++)Wa(dt[St],O,X,Y)}function vc(E,O,X,Y){const B=E.opaque,dt=E.transmissive,St=E.transparent;d.setupLightsView(X),ut===!0&&ct.setGlobalState(S.clippingPlanes,X),Y&&Q.viewport(R.copy(Y)),B.length>0&&Ar(B,O,X),dt.length>0&&Ar(dt,O,X),St.length>0&&Ar(St,O,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function xc(E,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new Ki(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?yr:si,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const dt=d.state.transmissionRenderTarget[Y.id],St=Y.viewport||R;dt.setSize(St.z,St.w);const Tt=S.getRenderTarget();S.setRenderTarget(dt),S.getClearColor(Z),nt=S.getClearAlpha(),nt<1&&S.setClearColor(16777215,.5),S.clear(),w&&Ct.render(X);const At=S.toneMapping;S.toneMapping=vi;const Ot=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),ut===!0&&ct.setGlobalState(S.clippingPlanes,Y),Ar(E,X,Y),v.updateMultisampleRenderTarget(dt),v.updateRenderTargetMipmap(dt),K.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let wt=0,$t=O.length;wt<$t;wt++){const le=O[wt],ue=le.object,He=le.geometry,Zt=le.material,Rt=le.group;if(Zt.side===Ze&&ue.layers.test(Y.layers)){const Bn=Zt.side;Zt.side=We,Zt.needsUpdate=!0,Mc(ue,X,Y,He,Zt,Rt),Zt.side=Bn,Zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(v.updateMultisampleRenderTarget(dt),v.updateRenderTargetMipmap(dt))}S.setRenderTarget(Tt),S.setClearColor(Z,nt),Ot!==void 0&&(Y.viewport=Ot),S.toneMapping=At}function Ar(E,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,dt=E.length;B<dt;B++){const St=E[B],Tt=St.object,At=St.geometry,Ot=Y===null?St.material:Y,Vt=St.group;Tt.layers.test(X.layers)&&Mc(Tt,O,X,At,Ot,Vt)}}function Mc(E,O,X,Y,B,dt){E.onBeforeRender(S,O,X,Y,B,dt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(S,O,X,Y,E,dt),B.transparent===!0&&B.side===Ze&&B.forceSinglePass===!1?(B.side=We,B.needsUpdate=!0,S.renderBufferDirect(X,O,Y,B,E,dt),B.side=Mi,B.needsUpdate=!0,S.renderBufferDirect(X,O,Y,B,E,dt),B.side=Ze):S.renderBufferDirect(X,O,Y,B,E,dt),E.onAfterRender(S,O,X,Y,B,dt)}function wr(E,O,X){O.isScene!==!0&&(O=de);const Y=j.get(E),B=d.state.lights,dt=d.state.shadowsArray,St=B.state.version,Tt=pt.getParameters(E,B.state,dt,O,X),At=pt.getProgramCacheKey(Tt);let Ot=Y.programs;Y.environment=E.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(E.isMeshStandardMaterial?C:_).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",Ht),Ot=new Map,Y.programs=Ot);let Vt=Ot.get(At);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===St)return yc(E,Tt),Vt}else Tt.uniforms=pt.getUniforms(E),E.onBeforeCompile(Tt,S),Vt=pt.acquireProgram(Tt,At),Ot.set(At,Vt),Y.uniforms=Tt.uniforms;const wt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=ct.uniform),yc(E,Tt),Y.needsLights=od(E),Y.lightsStateVersion=St,Y.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function Sc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ha.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function yc(E,O){const X=j.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function rd(E,O,X,Y,B){O.isScene!==!0&&(O=de),v.resetTextureUnits();const dt=O.fog,St=Y.isMeshStandardMaterial?O.environment:null,Tt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Is,At=(Y.isMeshStandardMaterial?C:_).get(Y.envMap||St),Ot=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),wt=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,le=!!X.morphAttributes.color;let ue=vi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ue=S.toneMapping);const He=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=He!==void 0?He.length:0,Rt=j.get(Y),Bn=d.state.lights;if(ut===!0&&(bt===!0||E!==M)){const en=E===M&&Y.id===y;ct.setState(Y,E,en)}let Jt=!1;Y.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Bn.state.version||Rt.outputColorSpace!==Tt||B.isBatchedMesh&&Rt.batching===!1||!B.isBatchedMesh&&Rt.batching===!0||B.isBatchedMesh&&Rt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Rt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Rt.instancing===!1||!B.isInstancedMesh&&Rt.instancing===!0||B.isSkinnedMesh&&Rt.skinning===!1||!B.isSkinnedMesh&&Rt.skinning===!0||B.isInstancedMesh&&Rt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Rt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Rt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Rt.instancingMorph===!1&&B.morphTexture!==null||Rt.envMap!==At||Y.fog===!0&&Rt.fog!==dt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ct.numPlanes||Rt.numIntersection!==ct.numIntersection)||Rt.vertexAlphas!==Ot||Rt.vertexTangents!==Vt||Rt.morphTargets!==wt||Rt.morphNormals!==$t||Rt.morphColors!==le||Rt.toneMapping!==ue||Rt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Rt.__version=Y.version);let hn=Rt.currentProgram;Jt===!0&&(hn=wr(Y,O,B));let Zi=!1,Ye=!1,Os=!1;const fe=hn.getUniforms(),bn=Rt.uniforms;if(Q.useProgram(hn.program)&&(Zi=!0,Ye=!0,Os=!0),Y.id!==y&&(y=Y.id,Ye=!0),Zi||M!==E){Q.buffers.depth.getReversed()?(_t.copy(E.projectionMatrix),W_(_t),X_(_t),fe.setValue(b,"projectionMatrix",_t)):fe.setValue(b,"projectionMatrix",E.projectionMatrix),fe.setValue(b,"viewMatrix",E.matrixWorldInverse);const ai=fe.map.cameraPosition;ai!==void 0&&ai.setValue(b,Nt.setFromMatrixPosition(E.matrixWorld)),q.logarithmicDepthBuffer&&fe.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&fe.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ye=!0,Os=!0)}if(B.isSkinnedMesh){fe.setOptional(b,B,"bindMatrix"),fe.setOptional(b,B,"bindMatrixInverse");const en=B.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),fe.setValue(b,"boneTexture",en.boneTexture,v))}B.isBatchedMesh&&(fe.setOptional(b,B,"batchingTexture"),fe.setValue(b,"batchingTexture",B._matricesTexture,v),fe.setOptional(b,B,"batchingIdTexture"),fe.setValue(b,"batchingIdTexture",B._indirectTexture,v),fe.setOptional(b,B,"batchingColorTexture"),B._colorsTexture!==null&&fe.setValue(b,"batchingColorTexture",B._colorsTexture,v));const Bs=X.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&It.update(B,X,hn),(Ye||Rt.receiveShadow!==B.receiveShadow)&&(Rt.receiveShadow=B.receiveShadow,fe.setValue(b,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(bn.envMap.value=At,bn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(bn.envMapIntensity.value=O.environmentIntensity),Ye&&(fe.setValue(b,"toneMappingExposure",S.toneMappingExposure),Rt.needsLights&&ad(bn,Os),dt&&Y.fog===!0&&lt.refreshFogUniforms(bn,dt),lt.refreshMaterialUniforms(bn,Y,V,tt,d.state.transmissionRenderTarget[E.id]),ha.upload(b,Sc(Rt),bn,v)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ha.upload(b,Sc(Rt),bn,v),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&fe.setValue(b,"center",B.center),fe.setValue(b,"modelViewMatrix",B.modelViewMatrix),fe.setValue(b,"normalMatrix",B.normalMatrix),fe.setValue(b,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const en=Y.uniformsGroups;for(let ai=0,oi=en.length;ai<oi;ai++){const Ec=en[ai];N.update(Ec,hn),N.bind(Ec,hn)}}return hn}function ad(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function od(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,O,X){j.get(E.texture).__webglTexture=O,j.get(E.depthTexture).__webglTexture=X;const Y=j.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const X=j.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,X=0){U=E,L=O,P=X;let Y=!0,B=null,dt=!1,St=!1;if(E){const At=j.get(E);if(At.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(b.FRAMEBUFFER,null),Y=!1;else if(At.__webglFramebuffer===void 0)v.setupRenderTarget(E);else if(At.__hasExternalTextures)v.rebindTextures(E,j.get(E.texture).__webglTexture,j.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(At.__boundDepthTexture!==wt){if(wt!==null&&j.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(E)}}const Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(St=!0);const Vt=j.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?B=Vt[O][X]:B=Vt[O],dt=!0):E.samples>0&&v.useMultisampledRTT(E)===!1?B=j.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?B=Vt[X]:B=Vt,R.copy(E.viewport),I.copy(E.scissor),z=E.scissorTest}else R.copy(Et).multiplyScalar(V).floor(),I.copy(Dt).multiplyScalar(V).floor(),z=Kt;if(Q.bindFramebuffer(b.FRAMEBUFFER,B)&&Y&&Q.drawBuffers(E,B),Q.viewport(R),Q.scissor(I),Q.setScissorTest(z),dt){const At=j.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,At.__webglTexture,X)}else if(St){const At=j.get(E.texture),Ot=O||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,At.__webglTexture,X||0,Ot)}y=-1},this.readRenderTargetPixels=function(E,O,X,Y,B,dt,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){Q.bindFramebuffer(b.FRAMEBUFFER,Tt);try{const At=E.texture,Ot=At.format,Vt=At.type;if(!q.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Y&&X>=0&&X<=E.height-B&&b.readPixels(O,X,Y,B,zt.convert(Ot),zt.convert(Vt),dt)}finally{const At=U!==null?j.get(U).__webglFramebuffer:null;Q.bindFramebuffer(b.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,Y,B,dt,St){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){const At=E.texture,Ot=At.format,Vt=At.type;if(!q.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-Y&&X>=0&&X<=E.height-B){Q.bindFramebuffer(b.FRAMEBUFFER,Tt);const wt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,wt),b.bufferData(b.PIXEL_PACK_BUFFER,dt.byteLength,b.STREAM_READ),b.readPixels(O,X,Y,B,zt.convert(Ot),zt.convert(Vt),0);const $t=U!==null?j.get(U).__webglFramebuffer:null;Q.bindFramebuffer(b.FRAMEBUFFER,$t);const le=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await k_(b,le,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,wt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,dt),b.deleteBuffer(wt),b.deleteSync(le),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,X=0){E.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-X),B=Math.floor(E.image.width*Y),dt=Math.floor(E.image.height*Y),St=O!==null?O.x:0,Tt=O!==null?O.y:0;v.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,X,0,0,St,Tt,B,dt),Q.unbindTexture()},this.copyTextureToTexture=function(E,O,X=null,Y=null,B=0){E.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,X=null);let dt,St,Tt,At,Ot,Vt,wt,$t,le;const ue=E.isCompressedTexture?E.mipmaps[B]:E.image;X!==null?(dt=X.max.x-X.min.x,St=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,Ot=X.min.y,Vt=X.isBox3?X.min.z:0):(dt=ue.width,St=ue.height,Tt=ue.depth||1,At=0,Ot=0,Vt=0),Y!==null?(wt=Y.x,$t=Y.y,le=Y.z):(wt=0,$t=0,le=0);const He=zt.convert(O.format),Zt=zt.convert(O.type);let Rt;O.isData3DTexture?(v.setTexture3D(O,0),Rt=b.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(v.setTexture2DArray(O,0),Rt=b.TEXTURE_2D_ARRAY):(v.setTexture2D(O,0),Rt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const Bn=b.getParameter(b.UNPACK_ROW_LENGTH),Jt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),hn=b.getParameter(b.UNPACK_SKIP_PIXELS),Zi=b.getParameter(b.UNPACK_SKIP_ROWS),Ye=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ue.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ue.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,At),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ot),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Vt);const Os=E.isDataArrayTexture||E.isData3DTexture,fe=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const bn=j.get(E),Bs=j.get(O),en=j.get(bn.__renderTarget),ai=j.get(Bs.__renderTarget);Q.bindFramebuffer(b.READ_FRAMEBUFFER,en.__webglFramebuffer),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let oi=0;oi<Tt;oi++)Os&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,j.get(E).__webglTexture,B,Vt+oi),E.isDepthTexture?(fe&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,j.get(O).__webglTexture,B,le+oi),b.blitFramebuffer(At,Ot,dt,St,wt,$t,dt,St,b.DEPTH_BUFFER_BIT,b.NEAREST)):fe?b.copyTexSubImage3D(Rt,B,wt,$t,le+oi,At,Ot,dt,St):b.copyTexSubImage2D(Rt,B,wt,$t,le+oi,At,Ot,dt,St);Q.bindFramebuffer(b.READ_FRAMEBUFFER,null),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(Rt,B,wt,$t,le,dt,St,Tt,He,Zt,ue.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(Rt,B,wt,$t,le,dt,St,Tt,He,ue.data):b.texSubImage3D(Rt,B,wt,$t,le,dt,St,Tt,He,Zt,ue):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,B,wt,$t,dt,St,He,Zt,ue.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,B,wt,$t,ue.width,ue.height,He,ue.data):b.texSubImage2D(b.TEXTURE_2D,B,wt,$t,dt,St,He,Zt,ue);b.pixelStorei(b.UNPACK_ROW_LENGTH,Bn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Jt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,hn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Zi),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ye),B===0&&O.generateMipmaps&&b.generateMipmap(Rt),Q.unbindTexture()},this.copyTextureToTexture3D=function(E,O,X=null,Y=null,B=0){return E.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,X,Y,B)},this.initRenderTarget=function(E){j.get(E).__webglFramebuffer===void 0&&v.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?v.setTextureCube(E,0):E.isData3DTexture?v.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?v.setTexture2DArray(E,0):v.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){L=0,P=0,U=null,Q.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class pc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nS extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class iS{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dl,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new G;class Ta{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ta(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nd extends Ns{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const qs=new G,ps=new G,ms=new G,_s=new Xt,$s=new Xt,id=new ge,Qr=new G,Ks=new G,ta=new G,rf=new Xt,Io=new Xt,af=new Xt;class sS extends Ge{constructor(t=new nd){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new iS(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Ta(i,3,0,!1)),ds.setAttribute("uv",new Ta(i,2,3,!1))}this.geometry=ds,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),id.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ea(Qr.set(-.5,-.5,0),ms,a,ps,s,r),ea(Ks.set(.5,-.5,0),ms,a,ps,s,r),ea(ta.set(.5,.5,0),ms,a,ps,s,r),rf.set(0,0),Io.set(1,0),af.set(1,1);let o=t.ray.intersectTriangle(Qr,Ks,ta,!1,qs);if(o===null&&(ea(Ks.set(-.5,.5,0),ms,a,ps,s,r),Io.set(0,1),o=t.ray.intersectTriangle(Qr,ta,Ks,!1,qs),o===null))return;const l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:on.getInterpolation(qs,Qr,Ks,ta,rf,Io,af,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ea(n,t,e,i,s,r){_s.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?($s.x=r*_s.x-s*_s.y,$s.y=s*_s.x+r*_s.y):$s.copy(_s),n.copy(t),n.x+=$s.x,n.y+=$s.y,n.applyMatrix4(id)}class Ul extends Ns{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const of=new ge,Nl=new fc,na=new Ha,ia=new G;class lf extends Ge{constructor(t=new Xe,e=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;of.copy(s).invert(),Nl.copy(t.ray).applyMatrix4(of);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,x=p;g<x;g++){const m=c.getX(g);ia.fromBufferAttribute(f,m),cf(ia,m,l,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,x=p;g<x;g++)ia.fromBufferAttribute(f,g),cf(ia,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cf(n,t,e,i,s,r,a){const o=Nl.distanceSqToPoint(n);if(o<e){const l=new G;Nl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class xs extends Xe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new G,u=new Xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const p=i+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wi extends Xe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let g=0;const x=[],m=i/2;let d=0;A(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(p,2));function A(){const S=new G,F=new G;let L=0;const P=(e-t)/i;for(let U=0;U<=r;U++){const y=[],M=U/r,R=M*(e-t)+t;for(let I=0;I<=s;I++){const z=I/s,Z=z*l+o,nt=Math.sin(Z),$=Math.cos(Z);F.x=R*nt,F.y=-M*i+m,F.z=R*$,f.push(F.x,F.y,F.z),S.set(nt,P,$).normalize(),h.push(S.x,S.y,S.z),p.push(z,1-M),y.push(g++)}x.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){const M=x[y][U],R=x[y+1][U],I=x[y+1][U+1],z=x[y][U+1];(t>0||y!==0)&&(u.push(M,R,z),L+=3),(e>0||y!==r-1)&&(u.push(R,I,z),L+=3)}c.addGroup(d,L,0),d+=L}function T(S){const F=g,L=new Xt,P=new G;let U=0;const y=S===!0?t:e,M=S===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let I=0;I<=s;I++){const Z=I/s*l+o,nt=Math.cos(Z),$=Math.sin(Z);P.x=y*$,P.y=m*M,P.z=y*nt,f.push(P.x,P.y,P.z),h.push(0,M,0),L.x=nt*.5+.5,L.y=$*.5*M+.5,p.push(L.x,L.y),g++}for(let I=0;I<s;I++){const z=F+I,Z=R+I;S===!0?u.push(Z,Z+1,z):u.push(Z+1,Z,z),U+=3}c.addGroup(d,U,S===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mc extends Wi{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new mc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hi extends Xe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new G,h=new G,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){const A=[],T=d/i;let S=0;d===0&&a===0?S=.5/e:d===i&&l===Math.PI&&(S=-.5/e);for(let F=0;F<=e;F++){const L=F/e;f.x=-t*Math.cos(s+L*r)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(s+L*r)*Math.sin(a+T*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(L+S,1-T),A.push(c++)}u.push(A)}for(let d=0;d<i;d++)for(let A=0;A<e;A++){const T=u[d][A+1],S=u[d][A],F=u[d+1][A],L=u[d+1][A+1];(d!==0||a>0)&&p.push(T,S,L),(d!==i-1||l<Math.PI)&&p.push(S,F,L)}this.setIndex(p),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const uf=new ge;class rS{constructor(t,e,i=0,s=1/0){this.ray=new fc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(t,e=!0,i=[]){return Fl(t,this,i,e),i.sort(ff),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Fl(t[s],this,i,e);return i.sort(ff),i}}function ff(n,t){return n.distance-t.distance}function Fl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Fl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);const aS="/assets/home-BIXm6qNe.png",Fn=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},oS={class:"home-screen"},lS={class:"home-content"},cS={class:"menu-buttons"},uS={key:0,class:"record-line"},fS={__name:"StartScreen",props:{bestScore:{type:Number,default:0}},emits:["start","tutorial","settings"],setup(n){return(t,e)=>(re(),he("div",oS,[ft("div",{class:"bg-full",style:Pa({backgroundImage:`url(${$l(aS)})`})},null,4),e[8]||(e[8]=ft("div",{class:"bg-overlay"},null,-1)),e[9]||(e[9]=ft("div",{class:"scanlines"},null,-1)),e[10]||(e[10]=ft("div",{class:"noise"},null,-1)),ft("div",lS,[e[6]||(e[6]=ft("div",{class:"title-block"},[ft("h1",{class:"title-main"},"奶 蛙 之 森"),ft("p",{class:"title-sub"},"— 听 声 辨 位 · 黑 暗 求 生 —")],-1)),e[7]||(e[7]=ft("div",{class:"spacer"},null,-1)),ft("div",cS,[ft("button",{class:"menu-btn",onClick:e[0]||(e[0]=i=>t.$emit("start"))},[...e[3]||(e[3]=[ft("span",{class:"btn-text"},"进 入 森 林",-1)])]),ft("button",{class:"menu-btn secondary",onClick:e[1]||(e[1]=i=>t.$emit("tutorial"))},[...e[4]||(e[4]=[ft("span",{class:"btn-text"},"新 手 教 程",-1)])]),ft("button",{class:"menu-btn secondary",onClick:e[2]||(e[2]=i=>t.$emit("settings"))},[...e[5]||(e[5]=[ft("span",{class:"btn-text"},"设 置",-1)])])]),n.bestScore>0?(re(),he("div",uS,[ft("span",null,"★ 最佳记录 "+ae(n.bestScore)+" ★",1)])):Qe("",!0)])]))}},hS=Fn(fS,[["__scopeId","data-v-9f4f016e"]]),dS={},pS={class:"crosshair"};function mS(n,t){return re(),he("div",pS,[...t[0]||(t[0]=[$p('<div class="crosshair-top" data-v-2a0c6c66></div><div class="crosshair-bottom" data-v-2a0c6c66></div><div class="crosshair-left" data-v-2a0c6c66></div><div class="crosshair-right" data-v-2a0c6c66></div><div class="crosshair-dot" data-v-2a0c6c66></div>',5)])])}const _S=Fn(dS,[["render",mS],["__scopeId","data-v-2a0c6c66"]]),gS={class:"flash-container"},vS={class:"flash-label"},xS=600,MS={__name:"FireButton",emits:["fire"],setup(n,{emit:t}){const e=t,i=Rn(!1);function s(){i.value||(e("fire"),i.value=!0,setTimeout(()=>{i.value=!1},xS))}return(r,a)=>(re(),he("div",gS,[ft("button",{class:Un(["flash-btn",{cooldown:i.value}]),onPointerdown:Yo(s,["stop","prevent"]),onTouchstart:Yo(s,["stop","prevent"])},[a[0]||(a[0]=ft("span",{class:"flash-icon"},"🔦",-1)),ft("span",vS,ae(i.value?"...":"手电"),1)],34)]))}},SS=Fn(MS,[["__scopeId","data-v-71a5b0fb"]]),yS={class:"scoreboard"},ES={class:"score-box hud-panel"},bS={class:"score-value"},TS={class:"time-value"},AS={class:"kills-box"},wS={class:"kills-value"},RS={class:"combo-num"},CS={__name:"ScoreBoard",props:{score:{type:Number,default:0},timeRemaining:{type:Number,default:60},kills:{type:Number,default:0},combo:{type:Number,default:0}},setup(n){const t=n,e=nc(()=>{const i=Math.floor(t.timeRemaining/60),s=t.timeRemaining%60;return`${i}:${String(s).padStart(2,"0")}`});return(i,s)=>(re(),he("div",yS,[ft("div",ES,[s[0]||(s[0]=ft("span",{class:"score-label"},"得分",-1)),ft("span",bS,ae(n.score),1)]),ft("div",{class:Un(["time-box hud-panel",{urgent:n.timeRemaining<=10}])},[s[1]||(s[1]=ft("span",{class:"time-label"},"剩余",-1)),ft("span",TS,ae(e.value),1)],2),ft("div",AS,[s[2]||(s[2]=ft("span",{class:"kills-icon"},"🔦",-1)),ft("span",wS,ae(n.kills),1)]),me(bh,{name:"combo-pop"},{default:jl(()=>[n.combo>1?(re(),he("div",{class:"combo-badge",key:n.combo},[ft("span",RS,ae(n.combo)+"x",1),s[3]||(s[3]=ft("span",{class:"combo-label"},"COMBO",-1))])):Qe("",!0)]),_:1})]))}},PS=Fn(CS,[["__scopeId","data-v-7357b55f"]]),sd="/assets/%E5%A5%B6%E9%BE%99%E5%A4%A7%E7%AC%91-B401vx2T.gif",LS={key:0,class:"gameover-overlay"},DS={class:"gameover-panel"},IS=["src"],US={class:"result-title"},NS={class:"stats-grid"},FS={class:"stat-item"},OS={class:"stat-val"},BS={class:"stat-item"},zS={class:"stat-val"},GS={class:"stat-item"},HS={class:"stat-val"},VS={class:"stat-item"},kS={class:"stat-val"},WS={key:1},XS={class:"ach-icon"},YS={class:"ach-name"},qS={class:"leaderboard"},$S={class:"lb-rank"},KS={class:"lb-score"},jS={class:"lb-detail"},ZS={class:"gameover-actions"},JS={__name:"GameOverModal",props:{gameState:{type:Object,required:!0},visible:{type:Boolean,default:!0}},emits:["restart","backToMenu"],setup(n){const t=n,e=Rn(null);function i(){const s=e.value;if(!s)return;const r=s.getContext("2d"),a=t.gameState,o=600,l=400;r.fillStyle="#000a10",r.fillRect(0,0,o,l);for(let c=0;c<l;c+=4)r.fillStyle="rgba(0,0,0,0.05)",r.fillRect(0,c,o,2);r.fillStyle="#00ff41",r.font="bold 36px monospace",r.textAlign="center",r.shadowColor="rgba(0,255,65,0.6)",r.shadowBlur=15,r.fillText("奶 蛙 之 森",o/2,55),r.shadowBlur=0,r.fillStyle=a.getRating()==="S"?"#ffaa00":"#00ff41",r.font="bold 80px monospace",r.fillText(a.getRating(),o/2,150),r.fillStyle="#ccddcc",r.font="18px monospace",[`得分: ${a.score}    照中: ${a.kills}次`,`最高连击: ${a.maxCombo}x    命中率: ${a.getAccuracy()}%`,`结果: ${a.won?"胜利 ✨":"失败 💀"}`].forEach((c,u)=>r.fillText(c,o/2,210+u*32)),r.fillStyle="rgba(0,255,65,0.4)",r.font="14px monospace",r.fillText("naiwa forest · 听声辨位黑暗求生",o/2,l-30),s.toBlob(c=>{const u=URL.createObjectURL(c),f=document.createElement("a");f.href=u,f.download="奶蛙之森-成绩.png",f.click(),URL.revokeObjectURL(u)})}return(s,r)=>n.visible?(re(),he("div",LS,[ft("div",DS,[n.gameState.won?Qe("",!0):(re(),he("img",{key:0,src:$l(sd),class:"laugh-gif",alt:""},null,8,IS)),ft("div",{class:Un(["result-badge",n.gameState.won?"win":"lose"])},[ft("h2",US,ae(n.gameState.won?"✨ 你赢了！":"💀 你输了"),1),ft("div",{class:Un(["rating-badge","rating-"+n.gameState.getRating()])},ae(n.gameState.getRating()),3)],2),r[8]||(r[8]=ft("div",{class:"hud-divider"},null,-1)),ft("div",NS,[ft("div",FS,[ft("span",OS,ae(n.gameState.score),1),r[2]||(r[2]=ft("span",{class:"stat-lbl"},"得分",-1))]),ft("div",BS,[ft("span",zS,ae(n.gameState.kills),1),r[3]||(r[3]=ft("span",{class:"stat-lbl"},"照中",-1))]),ft("div",GS,[ft("span",HS,ae(n.gameState.maxCombo)+"x",1),r[4]||(r[4]=ft("span",{class:"stat-lbl"},"最高连击",-1))]),ft("div",VS,[ft("span",kS,ae(n.gameState.getAccuracy())+"%",1),r[5]||(r[5]=ft("span",{class:"stat-lbl"},"命中率",-1))])]),n.gameState.getJustUnlocked().length>0?(re(),he("div",WS,[r[6]||(r[6]=ft("div",{class:"hud-divider"},null,-1)),r[7]||(r[7]=ft("p",{class:"section-label"},"🏆 新成就解锁！",-1)),(re(!0),he(ke,null,ga(n.gameState.getJustUnlocked(),a=>(re(),he("div",{key:a.id,class:"achievement-item"},[ft("span",XS,ae(a.icon),1),ft("span",YS,ae(a.name),1)]))),128))])):Qe("",!0),r[9]||(r[9]=ft("div",{class:"hud-divider"},null,-1)),r[10]||(r[10]=ft("p",{class:"section-label"},"📋 排行榜",-1)),ft("div",qS,[(re(!0),he(ke,null,ga(n.gameState.getLeaderboard().slice(0,5),(a,o)=>(re(),he("div",{key:o,class:Un(["lb-row",{highlight:a.score===n.gameState.score}])},[ft("span",$S,ae(o+1),1),ft("span",KS,ae(a.score),1),ft("span",jS,ae(a.kills)+"杀 "+ae(a.combo)+"x "+ae(a.won?"🏆":""),1)],2))),128))]),r[11]||(r[11]=ft("div",{class:"hud-divider"},null,-1)),ft("div",ZS,[ft("button",{class:"btn btn-primary",onClick:r[0]||(r[0]=a=>s.$emit("restart"))},"再来一局"),ft("button",{class:"btn btn-share",onClick:i},"📤 分享成绩"),ft("button",{class:"btn btn-secondary",onClick:r[1]||(r[1]=a=>s.$emit("backToMenu"))},"返回主页")])]),ft("canvas",{ref_key:"shareCanvas",ref:e,style:{display:"none"},width:"600",height:"400"},null,512)])):Qe("",!0)}},QS=Fn(JS,[["__scopeId","data-v-4f36fc5e"]]),ty="/assets/%E5%A5%B6%E9%BE%99%E5%93%AD%E6%B3%A3-ChJ2TT0N.gif",ey=["src"],ny={__name:"NaiwaGif",props:{type:{type:String,default:"none"},visible:{type:Boolean,default:!1}},setup(n){const t=n,e=nc(()=>t.type==="kill"?ty:sd);return(i,s)=>(re(),tc(bh,{name:"gif-pop"},{default:jl(()=>[n.visible?(re(),he("div",{key:0,class:Un(["naiwa-gif",n.type])},[ft("img",{src:e.value,alt:""},null,8,ey)],2)):Qe("",!0)]),_:1}))}},iy=Fn(ny,[["__scopeId","data-v-997810d4"]]),sy={class:"game-view"},ry={class:"game-overlay"},ay={__name:"GameView",props:{gameState:{type:Object,required:!0},gifType:{type:String,default:"none"}},emits:["fire","restart","backToMenu"],setup(n){const t=Rn(null);function e(){const r=t.value;r&&(r.width=window.innerWidth,r.height=window.innerHeight,r.style.cssText="display:block;position:fixed;top:0;left:0;z-index:1")}let i=null;function s(){clearTimeout(i),i=setTimeout(e,200)}return Zl(()=>{var r,a;e(),window.addEventListener("resize",s),window.addEventListener("orientationchange",()=>setTimeout(e,300)),console.log("canvas mounted:",(r=t.value)==null?void 0:r.width,"x",(a=t.value)==null?void 0:a.height)}),Na(()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}),(r,a)=>(re(),he("div",sy,[ft("canvas",{id:"game-canvas",ref_key:"canvasRef",ref:t},null,512),me(iy,{type:n.gifType,visible:n.gifType!=="none"},null,8,["type","visible"]),ft("div",ry,[me(PS,{score:n.gameState.score,"time-remaining":n.gameState.timeRemaining,kills:n.gameState.kills,combo:n.gameState.combo},null,8,["score","time-remaining","kills","combo"]),me(_S),me(SS,{onFire:a[0]||(a[0]=o=>r.$emit("fire"))})]),n.gameState.state==="game_over"?(re(),tc(QS,{key:0,"game-state":n.gameState,visible:!0,onRestart:a[1]||(a[1]=o=>r.$emit("restart")),onBackToMenu:a[2]||(a[2]=o=>r.$emit("backToMenu"))},null,8,["game-state"])):Qe("",!0)]))}},oy=Fn(ay,[["__scopeId","data-v-b91dcc76"]]),ly={key:0,class:"tutorial-overlay"},cy={class:"tutorial-card"},uy={class:"step-indicator"},fy={class:"step-icon"},hy={class:"step-title"},dy={class:"step-desc"},py={class:"tutorial-actions"},my={__name:"TutorialOverlay",props:{visible:{type:Boolean,default:!1}},emits:["start","skip"],setup(n){const t=Rn(1),e=[{icon:"🌲",title:"欢迎来到黑暗森林",desc:"你正站在森林的中心。四周一片漆黑，只能隐约看到树木的轮廓。奶蛙就藏在这片森林的某个角落..."},{icon:"👂",title:"用耳朵来寻找",desc:"奶蛙会不断发出笑声。转动手机或移动鼠标，仔细听笑声传来的方向。戴上耳机可以获得最精准的3D空间音效。"},{icon:"🎯",title:"对准声音的方向",desc:"听到声音后，将屏幕中央的准星对准声音传来的方向。你无法看到奶蛙——只能依靠听觉来判断它的位置。"},{icon:"🔦",title:"打开手电筒",desc:"当你确定奶蛙就在那个方向时，点击底部的手电筒按钮（或按空格键）。照中奶蛙它会暂时消失，并在新的位置重生。"},{icon:"⏱️",title:"坚持60秒",desc:"奶蛙会一步步向你靠近。你需要在黑暗中坚持60秒。心跳声会随奶蛙接近而加快——那是你唯一的警示。被奶蛙碰到，游戏就结束了。"}];function i(){t.value<e.length&&t.value++}function s(){t.value>1&&t.value--}return(r,a)=>{var o,l,c;return n.visible?(re(),he("div",ly,[ft("div",cy,[ft("div",uy,[(re(!0),he(ke,null,ga(e.length,u=>(re(),he("span",{key:u,class:Un(["step-dot",{active:u===t.value,done:u<t.value}])},null,2))),128))]),ft("div",fy,ae((o=e[t.value-1])==null?void 0:o.icon),1),ft("h3",hy,ae((l=e[t.value-1])==null?void 0:l.title),1),ft("p",dy,ae((c=e[t.value-1])==null?void 0:c.desc),1),ft("div",py,[t.value>1?(re(),he("button",{key:0,class:"btn btn-ghost",onClick:s},"上一步")):Qe("",!0),t.value<e.length?(re(),he("button",{key:1,class:"btn btn-primary",onClick:i},ae(t.value===e.length-1?"开始游戏":"下一步"),1)):Qe("",!0),t.value===e.length?(re(),he("button",{key:2,class:"btn btn-primary",onClick:a[0]||(a[0]=u=>r.$emit("start"))}," 进 入 森 林 ")):Qe("",!0)]),ft("button",{class:"skip-btn",onClick:a[1]||(a[1]=u=>r.$emit("skip"))},"跳过教程")])])):Qe("",!0)}}},_y=Fn(my,[["__scopeId","data-v-f3ba43a9"]]),gy={class:"settings-panel"},vy={class:"slider-header"},xy={class:"slider-icon"},My={class:"slider-label"},Sy={class:"slider-value"},yy=["value","onInput"],Ey={__name:"SettingsPanel",props:{visible:{type:Boolean,default:!1},volumes:{type:Object,default:()=>({master:.7,naiwa:.55,heartbeat:.7,bgm:.5,sfx:.8})}},emits:["update","close"],setup(n,{emit:t}){const e=n,i=t,s=xr([{key:"master",icon:"🔊",label:"主音量",value:e.volumes.master},{key:"naiwa",icon:"👹",label:"奶蛙笑声",value:e.volumes.naiwa},{key:"heartbeat",icon:"💓",label:"心跳声",value:e.volumes.heartbeat},{key:"bgm",icon:"🎵",label:"背景音乐",value:e.volumes.bgm},{key:"sfx",icon:"💥",label:"UI音效",value:e.volumes.sfx}]);function r(a,o){const l=parseInt(o.target.value)/100,c=s.find(u=>u.key===a);c&&(c.value=l),i("update",{key:a,value:l})}return(a,o)=>n.visible?(re(),he("div",{key:0,class:"settings-overlay",onClick:o[1]||(o[1]=Yo(l=>a.$emit("close"),["self"]))},[ft("div",gy,[o[2]||(o[2]=ft("h2",{class:"panel-title"},"⚙️ 设置",-1)),o[3]||(o[3]=ft("div",{class:"hud-divider"},null,-1)),(re(!0),he(ke,null,ga(s,l=>(re(),he("div",{class:"slider-group",key:l.key},[ft("div",vy,[ft("span",xy,ae(l.icon),1),ft("span",My,ae(l.label),1),ft("span",Sy,ae(Math.round(l.value*100))+"%",1)]),ft("input",{type:"range",min:"0",max:"100",value:Math.round(l.value*100),class:"hud-slider",onInput:c=>r(l.key,c)},null,40,yy)]))),128)),ft("button",{class:"close-btn",onClick:o[0]||(o[0]=l=>a.$emit("close"))},"关 闭")])])):Qe("",!0)}},by=Fn(Ey,[["__scopeId","data-v-9dce76a2"]]);class Ty{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.raycaster=null,this.naiwaCollider=null,this.hitFlashMesh=null,this.hitFlashTimer=null,this.isRunning=!1,this._shakeAmount=0,this._hitParticles=[],this._afterimages=[],this._afterimageTexture=null,this._afterimagesEnabled=!1}shakeScreen(t=.08){this._shakeAmount=t}spawnHitParticles(t){for(let i=0;i<25;i++){const s=new Hi(.06,3,3),r=new _n({color:16737826,transparent:!0,opacity:1,blending:Oi,depthWrite:!1}),a=new pe(s,r);a.position.copy(t),a.userData={vel:new G((Math.random()-.5)*4,Math.random()*4,(Math.random()-.5)*4),life:.5+Math.random()*.3},this.scene.add(a),this._hitParticles.push(a)}}init(t){try{const e=t.clientWidth||t.width||window.innerWidth||800,i=t.clientHeight||t.height||window.innerHeight||600;t.width=e,t.height=i,this.scene=new nS,this.scene.background=new qt(518),this.scene.fog=new pc(518,3,14);const s=e/Math.max(i,1),r=s<1?100:75;this.camera=new an(r,s,.1,60),this.camera.position.set(0,1.6,0),this.camera.quaternion.setFromEuler(new En(.15,0,0,"YXZ")),this.renderer=new eS({canvas:t,antialias:!0,alpha:!1}),this.renderer.setSize(e,i,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(518),this.raycaster=new rS,this._createSky(),this._createGround(),this._createTrees(),this._createFireflies(),this._createMist(),this._createNaiwaCollider(),this._createHitFlash(),this._resizeCanvas=t,this._onResizeHandler=()=>this._onResize(this._resizeCanvas),window.addEventListener("resize",this._onResizeHandler),this.isRunning=!0,this.renderer.render(this.scene,this.camera),console.log("Forest scene initialized",{w:e,h:i,fov:r})}catch(e){throw console.error("GameEngine.init failed:",e),e}}_createSky(){const t=new xs(3.5,64),e=new _n({color:14535816,side:Ze,transparent:!0,opacity:.6,depthWrite:!1});this._moon=new pe(t,e),this._moon.position.set(10,14,-25),this.scene.add(this._moon);const i=new xs(6,64),s=new _n({color:14535816,side:Ze,transparent:!0,opacity:.1,depthWrite:!1}),r=new pe(i,s);r.position.copy(this._moon.position),this.scene.add(r),this._moonHalo=r;const a=300,o=new Float32Array(a*3);for(let u=0;u<a;u++){const f=Math.random()*Math.PI*2,h=Math.random()*Math.PI*.45+.1,p=22+Math.random()*25;o[u*3]=Math.cos(f)*Math.cos(h)*p,o[u*3+1]=Math.sin(h)*p+1.6,o[u*3+2]=Math.sin(f)*Math.cos(h)*p}const l=new Xe;l.setAttribute("position",new tn(o,3));const c=new Ul({color:15658717,size:.25,transparent:!0,opacity:.7,blending:Oi,depthWrite:!1});this._stars=new lf(l,c),this.scene.add(this._stars)}_createGround(){const t=new xs(17,56),e=new _n({color:1714709,side:Ze,depthWrite:!0}),i=new pe(t,e);i.rotation.x=-Math.PI/2,i.position.y=-1.6,this.scene.add(i);const s=new xs(3.5,36),r=new _n({color:2371614,side:Ze,depthWrite:!0}),a=new pe(s,r);a.rotation.x=-Math.PI/2,a.position.y=-1.59,this.scene.add(a)}_createTrees(){for(let s=0;s<40;s++){const r=s/40*Math.PI*2+(Math.random()-.5)*.6,a=3.5+Math.pow(Math.random(),.5)*(16-3.5),o=Math.cos(r)*a,l=Math.sin(r)*a,c=2.5+Math.random()*6,u=.1+Math.random()*.35,f=Math.random();f<.6?this._createPineTree(o,l,c,u):f<.85?this._createBroadTree(o,l,c,u):this._createDeadTree(o,l,c,u)}}_treeMat(t,e=1){return new _n({color:new qt(t*.6,t*(.7+e*.8),t*.3),depthWrite:!0})}_createPineTree(t,e,i,s){const r=.04+Math.random()*.04,a=new Wi(s*.5,s*.8,i*.5,6),o=new pe(a,this._treeMat(r,0));o.position.set(t,-1.6+i*.25,e),this.scene.add(o);const l=2+Math.floor(Math.random()*2);for(let c=0;c<l;c++){const u=i*(.35+c*.2),f=s*(3-c*.7),h=new mc(f,u,8),p=new pe(h,this._treeMat(r,1.5));p.position.set(t,-1.6+i*.3+c*i*.25,e),this.scene.add(p)}}_createBroadTree(t,e,i,s){const r=.035+Math.random()*.035,a=new Wi(s*.5,s*.7,i*.55,8),o=new pe(a,this._treeMat(r,0));o.position.set(t,-1.6+i*.27,e),this.scene.add(o);const l=new Hi(s*2.5,8,6),c=new pe(l,this._treeMat(r,1.6));c.position.set(t,-1.6+i*.6,e),c.scale.y=.7,this.scene.add(c)}_createDeadTree(t,e,i,s){const r=.05+Math.random()*.03,a=new Wi(s*.4,s*.6,i,5),o=new pe(a,this._treeMat(r,0));o.position.set(t,-1.6+i*.5,e),this.scene.add(o);for(let l=0;l<3;l++){const c=s*3,u=new Wi(s*.12,s*.2,c,4),f=new pe(u,this._treeMat(r,.2)),h=l/3*Math.PI*2+Math.random()*.5,p=-1.6+i*(.4+Math.random()*.4);f.position.set(t+Math.cos(h)*c*.5,p,e+Math.sin(h)*c*.5),f.rotation.z=(Math.random()-.5)*1.2,f.rotation.y=h,this.scene.add(f)}}_createFireflies(){this._fireflies=[];for(let e=0;e<30;e++){const i=new Hi(.04,4,4),s=new _n({color:11193446,transparent:!0,opacity:0,blending:Oi,depthWrite:!1}),r=new pe(i,s);r.userData={baseX:(Math.random()-.5)*24,baseY:-1.2+Math.random()*4,baseZ:(Math.random()-.5)*24,speed:.3+Math.random()*.8,phase:Math.random()*Math.PI*2,amplitude:.2+Math.random()*.6},r.position.set(r.userData.baseX,r.userData.baseY,r.userData.baseZ),this.scene.add(r),this._fireflies.push(r)}}_createMist(){const e=new Float32Array(150);for(let r=0;r<50;r++)e[r*3]=(Math.random()-.5)*30,e[r*3+1]=-1.5+Math.random()*1.5,e[r*3+2]=(Math.random()-.5)*30;const i=new Xe;i.setAttribute("position",new tn(e,3));const s=new Ul({color:3359795,size:.6,transparent:!0,opacity:.15,blending:qi,depthWrite:!1});this._mist=new lf(i,s),this.scene.add(this._mist)}_createNaiwaCollider(){const t=new Hi(.84,16,16),e=new _n({visible:!1});this.naiwaCollider=new pe(t,e),this.naiwaCollider.visible=!1,this.scene.add(this.naiwaCollider)}_createHitFlash(){const t=new Hi(1.8,16,16),e=new _n({color:16755200,transparent:!0,opacity:0,blending:Oi,depthWrite:!1});this.hitFlashMesh=new pe(t,e),this.hitFlashMesh.visible=!1,this.scene.add(this.hitFlashMesh)}setNaiwaPosition(t,e,i){this.naiwaCollider&&this.naiwaCollider.position.set(t,e,i)}checkAim(){if(!this.naiwaCollider)return{hit:!1,distance:1/0,point:null};this.raycaster.setFromCamera(new Xt(0,0),this.camera);const t=this.naiwaCollider.visible;this.naiwaCollider.visible=!0;const e=this.raycaster.intersectObject(this.naiwaCollider);return this.naiwaCollider.visible=t,e.length>0?{hit:!0,distance:e[0].distance,point:e[0].point.clone()}:{hit:!1,distance:1/0,point:null}}showHitFlash(t){if(!this.hitFlashMesh)return;this.hitFlashMesh.position.copy(t),this.hitFlashMesh.visible=!0,this.hitFlashMesh.material.opacity=1,this.hitFlashTimer&&cancelAnimationFrame(this.hitFlashTimer);const e=performance.now(),i=s=>{const r=Math.max(0,1-(s-e)/400);this.hitFlashMesh.material.opacity=r,r>0?this.hitFlashTimer=requestAnimationFrame(i):this.hitFlashMesh.visible=!1};this.hitFlashTimer=requestAnimationFrame(i)}updateCameraRotation(t){this.camera.quaternion.setFromEuler(t)}getCameraForward(){const t=new G(0,0,-1);return t.applyQuaternion(this.camera.quaternion),t}render(){if(!this.isRunning||!this.renderer||!this.scene||!this.camera)return;if(this._fireflies){const e=performance.now()*.001;for(const i of this._fireflies){const s=i.userData;i.position.x=s.baseX+Math.sin(e*s.speed+s.phase)*s.amplitude,i.position.y=s.baseY+Math.cos(e*s.speed*.7+s.phase)*s.amplitude*.5,i.position.z=s.baseZ+Math.cos(e*s.speed*.6+s.phase+1)*s.amplitude;const r=.3+.7*Math.abs(Math.sin(e*2+s.phase));i.material.opacity=r*.6}}this._mist&&(this._mist.rotation.y+=1e-4),this._moon&&this.camera&&(this._moon.lookAt(this.camera.position),this._moonHalo&&this._moonHalo.lookAt(this.camera.position)),this._shakeAmount>.001&&(this.camera.position.x+=(Math.random()-.5)*this._shakeAmount,this.camera.position.y+=(Math.random()-.5)*this._shakeAmount*.5,this._shakeAmount*=.85);const t=.016;for(let e=this._hitParticles.length-1;e>=0;e--){const i=this._hitParticles[e];i.userData.life-=t,i.userData.life<=0?(this.scene.remove(i),i.material.dispose(),i.geometry.dispose(),this._hitParticles.splice(e,1)):(i.position.add(i.userData.vel.clone().multiplyScalar(t)),i.userData.vel.y+=2*t,i.material.opacity=i.userData.life/.8)}this.renderer.render(this.scene,this.camera),this._shakeAmount>.001&&this.camera.position.set(0,1.6,0)}enableAfterimages(){if(this._afterimagesEnabled)return;this._afterimagesEnabled=!0;const t=new Image;t.src=naiwaGifUrl,t.onload=()=>{this._afterimageTexture=new ze(t),this._afterimageTexture.needsUpdate=!0,this._afterimageTexture.colorSpace=je;for(let e=0;e<5;e++){const i=new nd({map:this._afterimageTexture,blending:Oi,transparent:!0,opacity:.08,depthWrite:!1,depthTest:!0}),s=new sS(i);s.scale.set(2.5,2.5,1),s.visible=!1,this.scene.add(s),this._afterimages.push(s)}}}disableAfterimages(){this._afterimagesEnabled=!1,this._afterimages.forEach(t=>{var e,i;t.visible=!1,(e=t.material)==null||e.dispose(),(i=this.scene)==null||i.remove(t)}),this._afterimages=[],this._afterimageTexture&&(this._afterimageTexture.dispose(),this._afterimageTexture=null)}updateAfterimages(t){if(!this._afterimagesEnabled||!this._afterimages.length)return;const e=this._afterimages.length;for(let i=0;i<e;i++){const s=t.length-1-i*Math.max(1,Math.floor(t.length/e));s>=0&&s<t.length?(this._afterimages[i].position.copy(t[s]),this._afterimages[i].visible=!0,this._afterimages[i].material.opacity=.03+(1-i/e)*.05):this._afterimages[i].visible=!1}}_onResize(t){var a;const e=t.clientWidth||window.innerWidth||800,i=t.clientHeight||window.innerHeight||600,s=e/Math.max(i,1),r=s<1?100:75;r!==((a=this.camera)==null?void 0:a.fov)&&(this.camera.fov=r),this.camera&&(this.camera.aspect=s,this.camera.updateProjectionMatrix()),this.renderer&&this.renderer.setSize(e,i)}dispose(){var t,e;this.isRunning=!1,this.hitFlashTimer&&cancelAnimationFrame(this.hitFlashTimer),this._onResizeHandler&&window.removeEventListener("resize",this._onResizeHandler),this.disableAfterimages(),(t=this.renderer)==null||t.dispose(),(e=this.scene)==null||e.clear(),this.scene=null,this.renderer=null}}const Ay="/assets/%E5%A5%B6%E9%BE%99%E5%A4%A7%E7%AC%91-CsVr7tpk.mp3",wy="/assets/%E5%BC%80%E6%9E%AA%E9%9F%B3%E6%95%88-aE3QZQiK.mp3",Ry="/assets/bgm-BmZQ2Jdj.mp3",Cy="/assets/nervous1-IHWX-kia.mp3",Py="/assets/nervous2-BtMJPB1v.mp3",Ly="/assets/nervous3-BSRlof_i.mp3";class Dy{constructor(){this.ctx=null,this.listener=null,this._naiwaPanner=null,this._naiwaGain=null,this._naiwaSource=null,this._naiwaBuffer=null,this._isNaiwaPlaying=!1,this._flashBuffer=null,this._heartbeatGain=null,this._heartbeatSource=null,this._heartbeatBuffers={},this._heartbeatPlaying=!1,this._currentHeartLevel=0,this._bgmGain=null,this._bgmSource=null,this._bgmBuffer=null,this._bgmPlaying=!1,this.masterGain=.7,this.naiwaVolume=.55,this._heartbeatVol=.7,this._bgmVolume=.5,this._isLoaded=!1}async init(){(!this.ctx||this.ctx.state==="closed")&&(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&await this.ctx.resume(),this.listener=this.ctx.listener,this.listener.positionX.value=0,this.listener.positionY.value=0,this.listener.positionZ.value=0,this.listener.forwardX.value=0,this.listener.forwardY.value=0,this.listener.forwardZ.value=-1,this.listener.upX.value=0,this.listener.upY.value=1,this.listener.upZ.value=0,this._isLoaded||await this._loadAudioFiles(),console.log("AudioManager initialized")}async _loadAudioFiles(){try{const[t,e,i,s,r,a]=await Promise.all([this._loadBuffer(Ay),this._loadBuffer(wy),this._loadBuffer(Ry).catch(()=>null),this._loadBuffer(Cy).catch(()=>null),this._loadBuffer(Py).catch(()=>null),this._loadBuffer(Ly).catch(()=>null)]);this._naiwaBuffer=t,this._flashBuffer=e,this._bgmBuffer=i,this._heartbeatBuffers={1:s,2:r,3:a},this._isLoaded=!0,console.log("Audio files loaded")}catch(t){console.warn("Audio load failed, using synthetic fallback:",t.message)}}async _loadBuffer(t){const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);return await this.ctx.decodeAudioData(await e.arrayBuffer())}startNaiwaSound(){if(!(!this.ctx||this._isNaiwaPlaying)){if(this._naiwaPanner=this.ctx.createPanner(),this._naiwaPanner.panningModel="HRTF",this._naiwaPanner.distanceModel="inverse",this._naiwaPanner.refDistance=4,this._naiwaPanner.maxDistance=18,this._naiwaPanner.rolloffFactor=1.5,this._naiwaGain=this.ctx.createGain(),this._naiwaGain.gain.value=0,this._isLoaded&&this._naiwaBuffer){const t=this.ctx.createBufferSource();t.buffer=this._naiwaBuffer,t.loop=!0,t.connect(this._naiwaPanner),t.start(0),this._naiwaSource=t}else this._playNaiwaSynthetic();this._naiwaPanner.connect(this._naiwaGain),this._naiwaGain.connect(this.ctx.destination),this._naiwaGain.gain.setTargetAtTime(this.naiwaVolume*this.masterGain,this.ctx.currentTime,.3),this._isNaiwaPlaying=!0}}_playNaiwaSynthetic(){const t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.value=180;const e=this.ctx.createOscillator();e.type="sine",e.frequency.value=2.5;const i=this.ctx.createGain();i.gain.value=.5;const s=this.ctx.createGain();s.gain.value=0,e.connect(i),i.connect(s.gain),t.connect(s),s.connect(this._naiwaPanner),t.start(),e.start(),this._naiwaSource=t,this._synthNodes=[t,e,i,s]}stopNaiwaSound(){var t,e,i,s,r;if(this._isNaiwaPlaying){try{(e=(t=this._naiwaSource)==null?void 0:t.stop)==null||e.call(t)}catch{}if(this._synthNodes){for(const a of this._synthNodes){try{a.stop()}catch{}a==null||a.disconnect()}this._synthNodes=null}(i=this._naiwaSource)==null||i.disconnect(),(s=this._naiwaGain)==null||s.disconnect(),(r=this._naiwaPanner)==null||r.disconnect(),this._naiwaSource=null,this._naiwaGain=null,this._naiwaPanner=null,this._isNaiwaPlaying=!1}}updateNaiwaPosition(t,e,i){this._naiwaPanner&&(this._naiwaPanner.positionX.value=t,this._naiwaPanner.positionY.value=e,this._naiwaPanner.positionZ.value=i)}setNaiwaVolumeByDistance(t){if(!this._naiwaGain)return;const e=Math.min(1,1/Math.max(1,t/4));this._naiwaGain.gain.setTargetAtTime(e*this.naiwaVolume*this.masterGain,this.ctx.currentTime,.2)}startHeartbeat(){!this.ctx||this._heartbeatPlaying||(this._heartbeatGain=this.ctx.createGain(),this._heartbeatGain.gain.value=.4*this.masterGain,this._heartbeatGain.connect(this.ctx.destination),this._heartbeatPlaying=!0,this._currentHeartLevel=0)}updateHeartbeatRate(t){if(!this._heartbeatPlaying||!this.ctx)return;let e=3;t<=4?e=1:t<=8&&(e=2),e!==this._currentHeartLevel&&this._switchHeartbeat(e)}_switchHeartbeat(t){if(this._heartbeatSource){try{this._heartbeatSource.stop()}catch{}this._heartbeatSource.disconnect(),this._heartbeatSource=null}const e=this._heartbeatBuffers[t];if(!e)return;const i=this.ctx.createBufferSource();i.buffer=e,i.loop=!0,i.connect(this._heartbeatGain),i.start(0),this._heartbeatSource=i,this._currentHeartLevel=t}stopHeartbeat(){var t;if(this._heartbeatPlaying=!1,this._heartbeatSource){try{this._heartbeatSource.stop()}catch{}this._heartbeatSource.disconnect(),this._heartbeatSource=null}(t=this._heartbeatGain)==null||t.disconnect(),this._heartbeatGain=null,this._currentHeartLevel=0}startBGM(){if(!this.ctx||this._bgmPlaying||!this._bgmBuffer)return;this._bgmGain=this.ctx.createGain(),this._bgmGain.gain.value=(this._bgmVolume||.5)*this.masterGain,this._bgmGain.connect(this.ctx.destination);const t=this.ctx.createBufferSource();t.buffer=this._bgmBuffer,t.loop=!0,t.connect(this._bgmGain),t.start(0),this._bgmSource=t,this._bgmPlaying=!0}stopBGM(){var t,e,i,s;this._bgmPlaying=!1;try{(e=(t=this._bgmSource)==null?void 0:t.stop)==null||e.call(t)}catch{}(i=this._bgmSource)==null||i.disconnect(),(s=this._bgmGain)==null||s.disconnect(),this._bgmSource=null,this._bgmGain=null}playFlashSound(){if(this.ctx)if(this._flashBuffer){const t=this.ctx.createBufferSource();t.buffer=this._flashBuffer;const e=this.ctx.createGain();e.gain.value=.6*this.masterGain,t.connect(e),e.connect(this.ctx.destination),t.start(0)}else this._playSyntheticFlash()}_playSyntheticFlash(){const t=this.ctx.currentTime,e=this.ctx.createBuffer(1,this.ctx.sampleRate*.08,this.ctx.sampleRate),i=e.getChannelData(0);for(let o=0;o<i.length;o++)i[o]=(Math.random()*2-1)*Math.exp(-o/i.length*30)*.5;const s=this.ctx.createBufferSource();s.buffer=e;const r=this.ctx.createGain();r.gain.value=.6*this.masterGain;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=2e3,s.connect(a),a.connect(r),r.connect(this.ctx.destination),s.start(t),s.stop(t+.1)}playHitSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=(i,s,r,a)=>{const o=this.ctx.createOscillator();o.type="sine",o.frequency.value=i;const l=this.ctx.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(a,s+.02),l.gain.exponentialRampToValueAtTime(.001,s+r),o.connect(l),l.connect(this.ctx.destination),o.start(s),o.stop(s+r)};e(800,t,.15,.5*this.masterGain),e(1200,t+.08,.12,.35*this.masterGain)}playMissSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(200,t),e.frequency.linearRampToValueAtTime(80,t+.2);const i=this.ctx.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.2*this.masterGain,t+.05),i.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.3)}playWinSound(){if(!this.ctx)return;const t=this.ctx.currentTime;[523,659,784,1047].forEach((e,i)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t+i*.15),r.gain.linearRampToValueAtTime(.3*this.masterGain,t+i*.15+.05),r.gain.exponentialRampToValueAtTime(.001,t+i*.15+.4),s.connect(r),r.connect(this.ctx.destination),s.start(t+i*.15),s.stop(t+i*.15+.5)})}playLoseSound(){if(!this.ctx)return;const t=this.ctx.currentTime;[400,300,200].forEach((e,i)=>{const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t+i*.25),r.gain.linearRampToValueAtTime(.25*this.masterGain,t+i*.25+.05),r.gain.exponentialRampToValueAtTime(.001,t+i*.25+.5),s.connect(r),r.connect(this.ctx.destination),s.start(t+i*.25),s.stop(t+i*.25+.6)})}setMasterVolume(t){this.masterGain=zi.clamp(t,0,1),this._naiwaGain&&this._naiwaGain.gain.setTargetAtTime(this.naiwaVolume*this.masterGain,this.ctx.currentTime,.1),this._heartbeatGain&&this._heartbeatGain.gain.setTargetAtTime((this._heartbeatVol||.7)*this.masterGain,this.ctx.currentTime,.1)}setNaiwaVolume(t){this.naiwaVolume=zi.clamp(t,0,1)}setHeartbeatVolume(t){this._heartbeatVol=zi.clamp(t,0,1),this._heartbeatGain&&this._heartbeatGain.gain.setTargetAtTime(this._heartbeatVol*this.masterGain,this.ctx.currentTime,.1)}setBGMVolume(t){this._bgmVolume=zi.clamp(t,0,1)}setSFXVolume(t){this.sfxVolume=zi.clamp(t,0,1)}getVolumes(){return{master:this.masterGain,naiwa:this.naiwaVolume,heartbeat:this._heartbeatVol||.7,bgm:this._bgmVolume||.5,sfx:this.sfxVolume}}updateListenerOrientation(t,e){this.listener&&(this.listener.forwardX.value=t.x,this.listener.forwardY.value=t.y,this.listener.forwardZ.value=t.z,this.listener.upX.value=e.x,this.listener.upY.value=e.y,this.listener.upZ.value=e.z)}dispose(){this.stopNaiwaSound(),this.stopHeartbeat(),this.stopBGM(),this.ctx&&this.ctx.state!=="closed"&&this.ctx.close(),this.ctx=null}}class Iy{constructor(){this.yaw=0,this.pitch=0,this._targetYaw=0,this._targetPitch=0,this._calibrationYaw=0,this._calibrationPitch=0,this.mouseSensitivity=.0025,this.touchSensitivity=.008,this.gyroSensitivity=1,this.smoothFactor=.15,this.maxPitch=Math.PI/2.2,this.minPitch=-Math.PI/2.2,this.isEnabled=!1,this.isCalibrated=!1,this._mouseActive=!1,this._isGyroActive=!1,this._permissionGranted=!1,this._lastGyroTime=0,this._lastMouseX=null,this._lastMouseY=null,this._lastTouchId=null,this._lastTouchX=null,this._lastTouchY=null,this._lastAlpha=null,this._accumYaw=0,this._calibrationBeta=45,this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onDeviceOrientation=this._onDeviceOrientation.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this)}async requestPermission(){if(!window.isSecureContext)return console.log("[Gyro] ⚠️ 非安全上下文，陀螺仪不可用。需 HTTPS 或 localhost"),this._permissionGranted=!1,"insecure";if(!window.DeviceOrientationEvent)return console.log("[Gyro] 设备不支持 DeviceOrientationEvent"),this._permissionGranted=!1,"unavailable";if(typeof DeviceOrientationEvent.requestPermission=="function")try{const e=await DeviceOrientationEvent.requestPermission();return this._permissionGranted=e==="granted",console.log("[Gyro] iOS 权限:",e),e}catch{return this._permissionGranted=!1,"denied"}return this._permissionGranted=!0,console.log("[Gyro] 安全上下文，陀螺仪可用"),"granted"}init(){this._removeAllListeners(),this._addAllListeners()}_removeAllListeners(){window.removeEventListener("deviceorientation",this._onDeviceOrientation),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("touchstart",this._onTouchStart),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),this._mouseActive=!1,this._isGyroActive=!1,this.isEnabled=!1,this._lastMouseX=null,this._lastMouseY=null,this._lastTouchId=null,this._lastAlpha=null,this._accumYaw=0}_addAllListeners(){document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("touchstart",this._onTouchStart,{passive:!1}),document.addEventListener("touchmove",this._onTouchMove,{passive:!1}),document.addEventListener("touchend",this._onTouchEnd),this._permissionGranted&&(window.addEventListener("deviceorientation",this._onDeviceOrientation),console.log("[Gyro] deviceorientation 监听已添加"))}_onDeviceOrientation(t){if(!this.isEnabled||t.alpha===null||t.alpha===void 0)return;this._lastGyroTime=performance.now();const e=t.alpha,i=t.beta,s=t.gamma;if(!this._isGyroActive){this._isGyroActive=!0,this._lastAlpha=null,this._accumYaw=0,this._calibrationBeta=i,console.log("[Gyro] ✅ 陀螺仪激活, 初始 beta=%.1f°",i);return}if(this._lastAlpha!==null){let l=e-this._lastAlpha;l>180&&(l-=360),l<-180&&(l+=360),this._accumYaw+=l}this._lastAlpha=e;const r=i-this._calibrationBeta,a=window.innerWidth>window.innerHeight;let o=r;a&&(o=-s),this._targetYaw=zi.degToRad(this._accumYaw)*this.gyroSensitivity,this._targetPitch=zi.degToRad(o)*this.gyroSensitivity*.7}_isGyroTimedOut(){return!this._isGyroActive||performance.now()-this._lastGyroTime>2e3}_onMouseDown(t){if(!this.isEnabled)return;const e=t.target;e&&(e.id==="game-canvas"||e.closest("#game-canvas"))&&(this._mouseActive=!0,this._lastMouseX=t.clientX,this._lastMouseY=t.clientY,console.log("[Input] 🖱️ 鼠标已激活（点击画布）"))}_onMouseMove(t){if(this.isEnabled&&this._mouseActive){if(this._lastMouseX!==null){const e=t.clientX-this._lastMouseX,i=t.clientY-this._lastMouseY;(Math.abs(e)>0||Math.abs(i)>0)&&(this._targetYaw-=e*this.mouseSensitivity,this._targetPitch-=i*this.mouseSensitivity)}this._lastMouseX=t.clientX,this._lastMouseY=t.clientY}}_onTouchStart(t){if(this.isEnabled&&this._isGyroTimedOut()){if(t.touches.length===1){const e=t.touches[0];this._lastTouchId=e.identifier,this._lastTouchX=e.clientX,this._lastTouchY=e.clientY}t.preventDefault()}}_onTouchMove(t){if(!this.isEnabled||!this._isGyroTimedOut()||t.touches.length!==1)return;const e=t.touches[0];if(this._lastTouchId===e.identifier){const i=e.clientX-this._lastTouchX,s=e.clientY-this._lastTouchY;(Math.abs(i)>0||Math.abs(s)>0)&&(this._targetYaw+=i*this.touchSensitivity,this._targetPitch+=s*this.touchSensitivity)}this._lastTouchX=e.clientX,this._lastTouchY=e.clientY,t.preventDefault()}_onTouchEnd(t){this._lastTouchId=null}calibrate(){this._isGyroActive?(this._accumYaw=0,this._lastAlpha=null,this._targetYaw=0,this._targetPitch=.2,console.log("[Gyro] 校准完成 — 视角归零")):(this._targetYaw=0,this._targetPitch=.2,this._lastMouseX=null,this._lastMouseY=null,this._mouseActive=!1,console.log("[Input] 桌面校准：视角归零（需点击画布激活鼠标）")),this.isCalibrated=!0}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}update(){this._targetPitch=Math.max(this.minPitch,Math.min(this.maxPitch,this._targetPitch)),this.yaw+=(this._targetYaw-this.yaw)*this.smoothFactor,this.pitch+=(this._targetPitch-this.pitch)*this.smoothFactor}getEuler(){return new En(this.pitch,this.yaw,0,"YXZ")}dispose(){this.disable(),this._removeAllListeners()}}class Uy{constructor(){this.position=new G,this._target=new G,this._velocity=new G,this.state="idle",this._hitTimer=0,this._moveSpeed=0,this.config={minSpawnDist:10,maxSpawnDist:16,minSpeed:.8,maxSpeed:2.5,killDistance:2,hitCooldown:2}}reset(){this.state="idle",this._hitTimer=0}spawn(t=new G,e=null){this.position.copy(this._randomForestPoint(t,e)),this._moveSpeed=this.config.minSpeed+Math.random()*(this.config.maxSpeed-this.config.minSpeed),this.state="moving",this._hitTimer=0}onHit(){this.state="hit",this._hitTimer=this.config.hitCooldown}update(t,e){if(this.state==="hit")return this._hitTimer-=t,this._hitTimer<=0&&this.spawn(e,this.position.clone()),{gameOver:!1};if(this.state==="moving"){const s=new G().subVectors(e,this.position);if(s.length()<=this.config.killDistance)return{gameOver:!0};s.normalize(),this.position.add(s.multiplyScalar(this._moveSpeed*t))}return this.position.length()>this.config.maxSpawnDist&&this.position.normalize().multiplyScalar(this.config.maxSpawnDist-.5),{gameOver:!1}}distanceTo(t=new G){return this.position.distanceTo(t)}_randomForestPoint(t,e=null){for(let i=0;i<20;i++){const s=Math.random()*Math.PI*2,r=this.config.minSpawnDist+Math.random()*(this.config.maxSpawnDist-this.config.minSpawnDist),a=-1.2+Math.random()*2,o=new G(t.x+Math.cos(s)*r,t.y+a,t.z+Math.sin(s)*r);if(!(e&&o.distanceTo(e)<4))return o}return new G(this.config.minSpawnDist,0,0)}dispose(){}}const Ke={IDLE:"idle",STARTING:"starting",PLAYING:"playing",GAME_OVER:"game_over"},hf=[{id:"first_kill",name:"新手猎人",icon:"🌱",desc:"首次照中奶蛙",threshold:1},{id:"hunter_10",name:"森林巡护",icon:"🔦",desc:"累计照中10次",threshold:10},{id:"hunter_30",name:"黑暗猎手",icon:"⚔️",desc:"累计照中30次",threshold:30},{id:"hunter_60",name:"暗夜传说",icon:"👻",desc:"累计照中60次",threshold:60},{id:"hunter_100",name:"奶蛙克星",icon:"🏆",desc:"累计照中100次",threshold:100}];class Ny{constructor(){this.state=Ke.IDLE,this.score=0,this.kills=0,this.shotsFired=0,this.timeRemaining=60,this.roundTime=60,this.bestScore=0,this.won=!1,this.combo=0,this.maxCombo=0,this.totalKills=0,this._unlockedAchievements=[],this._justUnlocked=[],this._leaderboard=[],this._timerInterval=null,this._loadPersistent()}start(){this.score=0,this.kills=0,this.shotsFired=0,this.timeRemaining=this.roundTime,this.combo=0,this.maxCombo=0,this._justUnlocked=[],this._transition(Ke.STARTING)}ready(){this.state===Ke.STARTING&&(this._transition(Ke.PLAYING),this._startTimer())}recordShot(){this.state===Ke.PLAYING&&this.shotsFired++}recordKill(){if(this.state!==Ke.PLAYING)return;this.kills++,this.totalKills++,this.combo++,this.combo>this.maxCombo&&(this.maxCombo=this.combo);const t=Math.min(this.combo,5);this.score+=100*t,this._checkAchievements()}recordMiss(){this.combo=0}getMultiplier(){return Math.min(this.combo,5)}_checkAchievements(){for(const t of hf)this.totalKills>=t.threshold&&!this._unlockedAchievements.includes(t.id)&&(this._unlockedAchievements.push(t.id),this._justUnlocked.push(t))}getJustUnlocked(){return this._justUnlocked}getUnlockedAchievements(){return hf.filter(t=>this._unlockedAchievements.includes(t.id))}addToLeaderboard(){const t={score:this.score,kills:this.kills,combo:this.maxCombo,won:this.won,date:Date.now()};return this._leaderboard.push(t),this._leaderboard.sort((e,i)=>i.score-e.score),this._leaderboard=this._leaderboard.slice(0,10),this._savePersistent(),this._leaderboard.findIndex(e=>e===t)+1}getLeaderboard(){return this._leaderboard}getRank(){if(this._leaderboard.length===0)return 1;let t=1;for(const e of this._leaderboard){if(this.score>e.score)break;t++}return t}getRating(){const t=this.shotsFired>0?this.kills/this.shotsFired:0;return this.won&&t>=.7?"S":this.won&&t>=.5?"A":this.won?"B":this.kills>=3?"C":"D"}endGame(){this._stopTimer(),this._transition(Ke.GAME_OVER),this.score>this.bestScore&&(this.bestScore=this.score,this._savePersistent()),this.addToLeaderboard()}backToMenu(){this._stopTimer(),this._transition(Ke.IDLE)}getAccuracy(){return this.shotsFired===0?0:Math.round(this.kills/this.shotsFired*100)}_transition(t){this.state=t}_startTimer(){this._stopTimer(),this._timerInterval=setInterval(()=>{this.timeRemaining--,this.timeRemaining<=0&&this._stopTimer()},1e3)}_stopTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}_loadPersistent(){try{const t=localStorage.getItem("nw_achievements");t&&(this._unlockedAchievements=JSON.parse(t));const e=localStorage.getItem("nw_totalKills");e&&(this.totalKills=parseInt(e)||0);const i=localStorage.getItem("nw_bestScore");i&&(this.bestScore=parseInt(i)||0);const s=localStorage.getItem("nw_leaderboard");s&&(this._leaderboard=JSON.parse(s))}catch{}}_savePersistent(){try{localStorage.setItem("nw_achievements",JSON.stringify(this._unlockedAchievements)),localStorage.setItem("nw_totalKills",String(this.totalKills)),localStorage.setItem("nw_bestScore",String(this.bestScore)),localStorage.setItem("nw_leaderboard",JSON.stringify(this._leaderboard))}catch{}}dispose(){this._stopTimer()}}const Fy={id:"app-root"},Oy={__name:"App",setup(n){const t=new Ty,e=new Dy,i=new Iy,s=new Uy,r=new Ny,a=Rn("idle"),o=Rn("none"),l=Rn(r.bestScore),c=Rn(!1),u=Rn(!1),f=xr(e.getVolumes());let h=!1;async function p(){if(!h){h=!0;try{await e.init(),e.startBGM(),console.log("主页BGM已启动")}catch(it){console.warn("BGM启动失败:",it)}}}document.addEventListener("click",p,{once:!0}),document.addEventListener("touchstart",p,{once:!0});const g=Rn({state:"idle",score:0,kills:0,timeRemaining:60,bestScore:0,won:!1,combo:0,maxCombo:0,getAccuracy:()=>0,getRating:()=>"C",getJustUnlocked:()=>[],getLeaderboard:()=>[],getRank:()=>1});function x(){g.value={state:r.state,score:r.score,kills:r.kills,timeRemaining:r.timeRemaining,bestScore:r.bestScore,won:r.won,combo:r.combo,maxCombo:r.maxCombo,getAccuracy:()=>r.getAccuracy(),getRating:()=>r.getRating(),getJustUnlocked:()=>r.getJustUnlocked(),getLeaderboard:()=>r.getLeaderboard(),getRank:()=>r.getRank()}}let m=null,d=0,A=!1,T="idle",S=null;const F=new G(0,0,0),L=new G(0,1,0);function P(it){if(!A)return;const ot=Math.min((it-d)/1e3,.1);d=it,i.update();const Et=i.getEuler();t.updateCameraRotation(Et);const Dt=t.getCameraForward();if(e.updateListenerOrientation(Dt,L),r.state===Ke.PLAYING){if(s.update(ot,F).gameOver){y(!1);return}const et=s.position;t.setNaiwaPosition(et.x,et.y,et.z),e.updateNaiwaPosition(et.x,et.y,et.z);const ut=s.distanceTo(F);e.updateHeartbeatRate(ut),T==="hit"&&s.state!=="hit"&&e.startNaiwaSound(),T=s.state}t.render(),m=requestAnimationFrame(P)}async function U(){console.log("handleStart"),r.start(),a.value=r.state,x();try{await i.requestPermission()}catch{}if(await new Promise(ot=>requestAnimationFrame(()=>requestAnimationFrame(ot))),!t.isRunning){const ot=document.getElementById("game-canvas");if(ot)t.init(ot);else{console.error("canvas not found");return}}try{await e.init()}catch(ot){console.error("audio init:",ot)}i.init(),i.calibrate(),i.enable(),s.reset(),s.spawn(F),T="idle";const it=s.position;t.setNaiwaPosition(it.x,it.y,it.z),e.updateNaiwaPosition(it.x,it.y,it.z),e.startNaiwaSound(),e.startHeartbeat(),e.startBGM(),document.addEventListener("keydown",I),document.addEventListener("click",z),A||(A=!0,d=performance.now(),m=requestAnimationFrame(P)),r.ready(),a.value=r.state,x(),console.log("game ready")}function y(it){console.log("Game over:",it?"WIN":"LOSE"),A=!1,m&&cancelAnimationFrame(m),it?e.playWinSound():e.playLoseSound(),e.stopHeartbeat(),e.stopNaiwaSound(),document.removeEventListener("keydown",I),document.removeEventListener("click",z),i.disable(),r.won=it,it&&r.score>l.value&&(l.value=r.score),r.endGame(),a.value=r.state,x()}function M(){if(r.state!==Ke.PLAYING)return;e.playFlashSound();const it=t.checkAim();it.hit?(r.recordKill(),x(),e.playHitSound(),t.showHitFlash(it.point),t.spawnHitParticles(it.point),t.shakeScreen(.06),s.onHit(),e.stopNaiwaSound(),T="hit",R("kill",2e3)):(e.playMissSound(),r.recordMiss(),x())}function R(it,ot=1800){S&&clearTimeout(S),o.value=it,S=setTimeout(()=>{o.value="none"},ot)}function I(it){(it.code==="Space"||it.key===" ")&&(it.preventDefault(),M())}function z(it){if(!("ontouchstart"in window))return;const ot=it.target;ot&&(ot.closest(".flash-btn")||ot.closest(".flash-container"))||M()}function Z(){c.value=!1,U()}function nt(){const it=e.getVolumes();Object.assign(f,it),u.value=!0}function $({key:it,value:ot}){switch(f[it]=ot,it){case"master":e.setMasterVolume(ot);break;case"naiwa":e.setNaiwaVolume(ot);break;case"heartbeat":e.setHeartbeatVolume(ot);break;case"bgm":e.setBGMVolume(ot);break;case"sfx":e.setSFXVolume(ot);break}}function tt(){A=!1,m&&cancelAnimationFrame(m),S&&clearTimeout(S),o.value="none",i.disable(),e.stopNaiwaSound(),e.stopHeartbeat(),e.stopBGM(),t.dispose(),document.removeEventListener("keydown",I),document.removeEventListener("click",z),r.backToMenu(),a.value=r.state,x()}const V=setInterval(()=>{(r.state===Ke.PLAYING||r.state===Ke.GAME_OVER)&&(x(),r.timeRemaining<=0&&r.state===Ke.PLAYING&&y(!0))},500);return Na(()=>{clearInterval(V),A=!1,m&&cancelAnimationFrame(m),S&&clearTimeout(S),document.removeEventListener("keydown",I),document.removeEventListener("click",z),i.dispose(),e.dispose(),t.dispose(),r.dispose()}),(it,ot)=>(re(),he("div",Fy,[Cc(me(hS,{"best-score":l.value,onStart:ot[0]||(ot[0]=Et=>{p(),U()}),onTutorial:ot[1]||(ot[1]=Et=>{p(),c.value=!0}),onSettings:ot[2]||(ot[2]=Et=>{p(),nt()})},null,8,["best-score"]),[[Zc,a.value==="idle"&&!c.value&&!u.value]]),Cc(me(oy,{"game-state":g.value,"gif-type":o.value,onFire:M,onRestart:U,onBackToMenu:tt},null,8,["game-state","gif-type"]),[[Zc,a.value!=="idle"&&!c.value]]),me(_y,{visible:c.value,onStart:Z,onSkip:ot[3]||(ot[3]=Et=>c.value=!1)},null,8,["visible"]),me(by,{visible:u.value,volumes:f,onUpdate:$,onClose:ot[4]||(ot[4]=Et=>u.value=!1)},null,8,["visible","volumes"])]))}},By=Fn(Oy,[["__scopeId","data-v-c0769fff"]]);Nm(By).mount("#app");
