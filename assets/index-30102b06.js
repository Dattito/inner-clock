(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function A(){}function $e(e){return e()}function ce(){return Object.create(null)}function U(e){e.forEach($e)}function we(e){return typeof e=="function"}function De(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Fe(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function Me(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function I(){return $(" ")}function Le(){return $("")}function X(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function s(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function He(e){return e===""?null:+e}function Ce(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function fe(e,t){e.value=t??""}let j;function C(e){j=e}function je(){if(!j)throw new Error("Function called outside component initialization");return j}function Ue(e){je().$$.on_destroy.push(e)}const H=[],de=[],Q=[],he=[],Ye=Promise.resolve();let re=!1;function Be(){re||(re=!0,Ye.then(Se))}function oe(e){Q.push(e)}const ee=new Set;let J=0;function Se(){const e=j;do{for(;J<H.length;){const t=H[J];J++,C(t),Re(t.$$)}for(C(null),H.length=0,J=0;de.length;)de.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];ee.has(n)||(ee.add(n),n())}Q.length=0}while(H.length);for(;he.length;)he.pop()();re=!1,ee.clear(),C(e)}function Re(e){if(e.fragment!==null){e.update(),U(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(oe)}}const q=new Set;let Je;function Ie(e,t){e&&e.i&&(q.delete(e),e.i(t))}function ze(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),Je.c.push(()=>{q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Ge(e){e&&e.c()}function Ee(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||oe(()=>{const a=e.$$.on_mount.map($e).filter(we);e.$$.on_destroy?e.$$.on_destroy.push(...a):U(a),e.$$.on_mount=[]}),i.forEach(oe)}function Pe(e,t){const n=e.$$;n.fragment!==null&&(U(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Qe(e,t){e.$$.dirty[0]===-1&&(H.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ke(e,t,n,r,o,i,a,c=[-1]){const m=j;C(e);const l=e.$$={fragment:null,ctx:[],props:i,update:A,not_equal:o,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:ce(),dirty:c,skip_bound:!1,root:t.target||m.$$.root};a&&a(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(h,_,...f)=>{const y=f.length?f[0]:_;return l.ctx&&o(l.ctx[h],l.ctx[h]=y)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](y),d&&Qe(e,h)),_}):[],l.update(),d=!0,U(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const h=Ce(t.target);l.fragment&&l.fragment.l(h),h.forEach(E)}else l.fragment&&l.fragment.c();t.intro&&Ie(e.$$.fragment),Ee(e,t.target,t.anchor,t.customElement),Se()}C(m)}class Ne{$destroy(){Pe(this,1),this.$destroy=A}$on(t,n){if(!we(n))return A;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var le={};Object.defineProperty(le,"__esModule",{value:!0});const Te=90.8333,z=360/24,qe=60*60*1e3;function xe(e){return Math.ceil((e.getTime()-new Date(e.getFullYear(),0,1).getTime())/864e5)}function G(e){return Math.sin(e*2*Math.PI/360)}function ge(e){return Math.acos(e)*360/(2*Math.PI)}function Ke(e){return Math.asin(e)*360/(2*Math.PI)}function Ze(e){return Math.tan(e*2*Math.PI/360)}function te(e){return Math.cos(e*2*Math.PI/360)}function ne(e,t){const n=e%t;return n<0?n+t:n}function Oe(e,t,n,r,o){const i=xe(o),a=t/z,c=n?i+(6-a)/24:i+(18-a)/24,m=.9856*c-3.289,l=ne(m+1.916*G(m)+.02*G(2*m)+282.634,360),d=.91764*Ze(l);let h;h=360/(2*Math.PI)*Math.atan(d),h=ne(h,360);const _=Math.floor(l/90)*90,f=Math.floor(h/90)*90;h=h+(_-f),h/=z;const y=.39782*G(l),p=te(Ke(y)),D=(te(r)-y*G(e))/(p*te(e)),L=(n?360-ge(D):ge(D))/z+h-.06571*c-6.622,Y=ne(L-t/z,24),B=Date.UTC(o.getFullYear(),o.getMonth(),o.getDate());return new Date(B+Y*qe)}function Ve(e,t,n=new Date){return Oe(e,t,!0,Te,n)}function We(e,t,n=new Date){return Oe(e,t,!1,Te,n)}var me=le.getSunrise=Ve;le.getSunset=We;const pe=e=>{const t=r=>{const o=new Date(r);return o.setMinutes(o.getMinutes()-o.getTimezoneOffset()),o};return((r,o)=>(+t(o)-+t(r))/864e5)(new Date(new Date().getFullYear(),0,1),e)};function Xe(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Ae(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function x(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(n){return typeof n}:x=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(e)}function et(e){Ae(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||x(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function tt(e,t){Ae(2,arguments);var n=et(e),r=Xe(t);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}function _e(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function be(e){let t,n,r,o;return{c(){t=b("div"),n=b("div"),r=b("div"),o=$(e[5]),s(r,"class","absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 font-bold"),s(n,"class","relative"),s(t,"id",`n-${e[5]}`),s(t,"class","absolute origin-bottom"),s(t,"style",`transform: translate(${7*Math.sin(Math.PI*2*(1/24)*e[7])}rem, ${-7*Math.cos(Math.PI*2*(1/24)*e[7])}rem)`)},m(i,a){k(i,t,a),u(t,n),u(n,r),u(r,o)},p:A,d(i){i&&E(t)}}}function nt(e){let t,n,r,o,i,a,c,m,l,d,h=["🧑‍🦰",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],_=[];for(let f=0;f<24;f+=1)_[f]=be(_e(e,h,f));return{c(){for(let f=0;f<24;f+=1)_[f].c();t=I(),n=b("div"),r=b("div"),i=I(),a=b("div"),m=I(),l=b("div"),s(r,"id","seconds"),s(r,"class","absolute rounded border-[1px] h-24 w-0 left-1/2 origin-top border-red-500 bg-red-500"),s(r,"style",o=`transform: rotate(${e[2]*6+180}deg)`),s(a,"id","minutes"),s(a,"class","absolute rounded border-[1px] h-20 w-0 left-1/2 origin-top border-green-500 bg-green-500"),s(a,"style",c=`transform: rotate(${e[1]*6+180}deg)`),s(l,"id","hours"),s(l,"class","absolute rounded border-[2px] h-16 w-0 left-1/2 origin-top border-green-500 bg-green-500"),s(l,"style",d=`transform: rotate(${e[0]*30+180}deg)`),s(n,"class","scale-75")},m(f,y){for(let p=0;p<24;p+=1)_[p].m(f,y);k(f,t,y),k(f,n,y),u(n,r),u(n,i),u(n,a),u(n,m),u(n,l)},p(f,[y]){if(y&0){h=["🧑‍🦰",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];let p;for(p=0;p<24;p+=1){const D=_e(f,h,p);_[p]?_[p].p(D,y):(_[p]=be(D),_[p].c(),_[p].m(t.parentNode,t))}for(;p<24;p+=1)_[p].d(1)}y&4&&o!==(o=`transform: rotate(${f[2]*6+180}deg)`)&&s(r,"style",o),y&2&&c!==(c=`transform: rotate(${f[1]*6+180}deg)`)&&s(a,"style",c),y&1&&d!==(d=`transform: rotate(${f[0]*30+180}deg)`)&&s(l,"style",d)},i:A,o:A,d(f){Me(_,f),f&&E(t),f&&E(n)}}}function rt(e,t,n){let r,o,i,a=new Date;const c=setInterval(()=>n(3,a=new Date),500);return Ue(()=>clearInterval(c)),e.$$.update=()=>{e.$$.dirty&8&&n(2,r=a.getSeconds()),e.$$.dirty&8&&n(1,o=a.getMinutes()),e.$$.dirty&8&&n(0,i=a.getHours())},[i,o,r,a]}class ot extends Ne{constructor(t){super(),ke(this,t,rt,nt,De,{})}}function ye(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function lt(e){let t,n;return{c(){t=b("div"),s(t,"id",`n-${e[9]}-path`),s(t,"class","absolute border-[1px] border-black h-32 w-0 origin-bottom bottom-0"),s(t,"style",n=`transform: rotate(${15*e[1](e[9])}deg)`)},m(r,o){k(r,t,o)},p(r,o){o&2&&n!==(n=`transform: rotate(${15*r[1](r[9])}deg)`)&&s(t,"style",n)},d(r){r&&E(t)}}}function ve(e){let t,n,r,o,i,a,c,m=(e[9]==6||e[9]==18)&&lt(e);return{c(){t=b("div"),n=b("div"),r=b("div"),o=$(e[7]),a=I(),m&&m.c(),c=Le(),s(r,"class","absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 font-bold"),s(n,"class","relative"),s(t,"id",`n-${e[9]}`),s(t,"class","absolute origin-bottom text-white"),s(t,"style",i=`transform: translate(${(e[9]>12?-9:9)*Math.sin(Math.PI*2*(1/24)*e[1](e[9]))}rem, ${-9*Math.cos(Math.PI*2*(1/24)*e[1](e[9]))}rem)`)},m(l,d){k(l,t,d),u(t,n),u(n,r),u(r,o),k(l,a,d),m&&m.m(l,d),k(l,c,d)},p(l,d){d&2&&i!==(i=`transform: translate(${(l[9]>12?-9:9)*Math.sin(Math.PI*2*(1/24)*l[1](l[9]))}rem, ${-9*Math.cos(Math.PI*2*(1/24)*l[1](l[9]))}rem)`)&&s(t,"style",i),(l[9]==6||l[9]==18)&&m.p(l,d)},d(l){l&&E(t),l&&E(a),m&&m.d(l),l&&E(c)}}}function st(e){let t,n,r,o,i,a,c,m,l=e[2].toLocaleDateString("de-DE")+"",d,h,_=(e[0]+1).toFixed(0)+"",f,y,p=e[3](e[0]+1).toFixed(2)+"",D,K,F=me(50.1109,8.6821,e[2]).toLocaleTimeString()+"",L,Y,B,N,M,se,T,ie,Z,O,P,V,ae,W=["🐱",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],w=[];for(let g=0;g<24;g+=1)w[g]=ve(ye(e,W,g));return O=new ot({}),{c(){t=b("div"),n=b("div"),r=b("div"),o=b("div"),i=b("h1"),i.textContent="Inner Clock",a=I(),c=b("h2"),m=$("Tag: "),d=$(l),h=$(" ("),f=$(_),y=$(`. Tag im Jahr) =>
					Tageslänge: `),D=$(p),K=$("h; Sonnenaufgang (Frankfurt): "),L=$(F),Y=$(" Uhr"),B=I(),N=b("div"),M=b("input"),se=I(),T=b("input"),ie=I();for(let g=0;g<24;g+=1)w[g].c();Z=I(),Ge(O.$$.fragment),s(i,"class","absolute bottom-64 text-2xl font-semibold whitespace-nowrap left-1/2 -translate-x-1/2"),s(c,"class","absolute bottom-44 left-1/2 -translate-x-1/2 whitespace-nowrap"),s(M,"type","range"),s(M,"min","0"),s(M,"max","364"),s(T,"type","button"),T.value="Heute",s(T,"class","bg-gray-400 p-1 rounded hover:shadow border-2 border-transparent active:border-2 active:border-black"),s(N,"class","absolute bottom-52 left-1/2 -translate-x-1/2 flex space-x-2"),s(o,"id","middle"),s(o,"class","h-0 w-0 rounded-full bg-black relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black"),s(r,"id","analog"),s(r,"class","h-64 w-64 bg-white rounded-full border-black border-[1px]"),s(n,"class","bg-black rounded-full p-8"),s(t,"class","h-screen grid place-items-center grid-cols-1 bg-gray-200")},m(g,S){k(g,t,S),u(t,n),u(n,r),u(r,o),u(o,i),u(o,a),u(o,c),u(c,m),u(c,d),u(c,h),u(c,f),u(c,y),u(c,D),u(c,K),u(c,L),u(c,Y),u(o,B),u(o,N),u(N,M),fe(M,e[0]),u(N,se),u(N,T),u(o,ie);for(let v=0;v<24;v+=1)w[v].m(o,null);u(o,Z),Ee(O,o,null),P=!0,V||(ae=[X(M,"change",e[4]),X(M,"input",e[4]),X(T,"click",e[5])],V=!0)},p(g,[S]){if((!P||S&4)&&l!==(l=g[2].toLocaleDateString("de-DE")+"")&&R(d,l),(!P||S&1)&&_!==(_=(g[0]+1).toFixed(0)+"")&&R(f,_),(!P||S&1)&&p!==(p=g[3](g[0]+1).toFixed(2)+"")&&R(D,p),(!P||S&4)&&F!==(F=me(50.1109,8.6821,g[2]).toLocaleTimeString()+"")&&R(L,F),S&1&&fe(M,g[0]),S&2){W=["🐱",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];let v;for(v=0;v<24;v+=1){const ue=ye(g,W,v);w[v]?w[v].p(ue,S):(w[v]=ve(ue),w[v].c(),w[v].m(o,Z))}for(;v<24;v+=1)w[v].d(1)}},i(g){P||(Ie(O.$$.fragment,g),P=!0)},o(g){ze(O.$$.fragment,g),P=!1},d(g){g&&E(t),Me(w,g),Pe(O),V=!1,U(ae)}}}function it(e,t,n){let r,o,i=new Date(new Date().getFullYear(),0,1),a=pe(new Date);const c=d=>Math.sin(2*Math.PI*d/365-Math.PI/2-2*Math.PI*355/365)*4+12;function m(){a=He(this.value),n(0,a)}const l=()=>n(0,a=pe(new Date));return e.$$.update=()=>{e.$$.dirty&1&&n(2,r=tt(i,a)),e.$$.dirty&1&&n(1,o=d=>{const h=.051*((c(a+1)-8)/8),_=1-12*h;return d>12&&(d=24-d),h*d**2+_*d})},[a,o,r,c,m,l]}class at extends Ne{constructor(t){super(),ke(this,t,it,st,De,{})}}new at({target:document.getElementById("app")});