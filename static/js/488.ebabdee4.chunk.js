"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[488],{3546:(e,t,r)=>{r.d(t,{N:()=>m});var s=r(579),n=r(5043),i=r(2190),u=r(4930),o=r(9674),a=r(1051);class c extends n.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,r=e instanceof HTMLElement&&e.offsetWidth||0,s=this.props.sizeRef.current;s.height=t.offsetHeight||0,s.width=t.offsetWidth||0,s.top=t.offsetTop,s.left=t.offsetLeft,s.right=r-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function h(e){let{children:t,isPresent:r,anchorX:i}=e;const u=(0,n.useId)(),o=(0,n.useRef)(null),h=(0,n.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,n.useContext)(a.Q);return(0,n.useInsertionEffect)((()=>{const{width:e,height:t,top:s,left:n,right:a}=h.current;if(r||!o.current||!e||!t)return;const c="left"===i?`left: ${n}`:`right: ${a}`;o.current.dataset.motionPopId=u;const d=document.createElement("style");return l&&(d.nonce=l),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`\n          [data-motion-pop-id="${u}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${c}px !important;\n            top: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(d)}}),[r]),(0,s.jsx)(c,{isPresent:r,childRef:o,sizeRef:h,children:n.cloneElement(t,{ref:o})})}const l=e=>{let{children:t,initial:r,isPresent:i,onExitComplete:a,custom:c,presenceAffectsLayout:l,mode:p,anchorX:f}=e;const y=(0,u.M)(d),R=(0,n.useId)(),m=(0,n.useCallback)((e=>{y.set(e,!0);for(const t of y.values())if(!t)return;a&&a()}),[y,a]),v=(0,n.useMemo)((()=>({id:R,initial:r,isPresent:i,custom:c,onExitComplete:m,register:e=>(y.set(e,!1),()=>y.delete(e))})),l?[Math.random(),m]:[i,m]);return(0,n.useMemo)((()=>{y.forEach(((e,t)=>y.set(t,!1)))}),[i]),n.useEffect((()=>{!i&&!y.size&&a&&a()}),[i]),"popLayout"===p&&(t=(0,s.jsx)(h,{isPresent:i,anchorX:f,children:t})),(0,s.jsx)(o.t.Provider,{value:v,children:t})};function d(){return new Map}var p=r(8917);const f=e=>e.key||"";function y(e){const t=[];return n.Children.forEach(e,(e=>{(0,n.isValidElement)(e)&&t.push(e)})),t}var R=r(293);const m=e=>{let{children:t,custom:r,initial:o=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:h="sync",propagate:d=!1,anchorX:m="left"}=e;const[v,g]=(0,p.xQ)(d),b=(0,n.useMemo)((()=>y(t)),[t]),Q=d&&!v?[]:b.map(f),E=(0,n.useRef)(!0),I=(0,n.useRef)(b),C=(0,u.M)((()=>new Map)),[x,O]=(0,n.useState)(b),[S,T]=(0,n.useState)(b);(0,R.E)((()=>{E.current=!1,I.current=b;for(let e=0;e<S.length;e++){const t=f(S[e]);Q.includes(t)?C.delete(t):!0!==C.get(t)&&C.set(t,!1)}}),[S,Q.length,Q.join("-")]);const w=[];if(b!==x){let e=[...b];for(let t=0;t<S.length;t++){const r=S[t],s=f(r);Q.includes(s)||(e.splice(t,0,r),w.push(r))}return"wait"===h&&w.length&&(e=w),T(y(e)),O(b),null}const{forceRender:P}=(0,n.useContext)(i.L);return(0,s.jsx)(s.Fragment,{children:S.map((e=>{const t=f(e),n=!(d&&!v)&&(b===S||Q.includes(t));return(0,s.jsx)(l,{isPresent:n,initial:!(E.current&&!o)&&void 0,custom:r,presenceAffectsLayout:c,mode:h,onExitComplete:n?void 0:()=>{if(!C.has(t))return;C.set(t,!0);let e=!0;C.forEach((t=>{t||(e=!1)})),e&&(null===P||void 0===P||P(),T(I.current),d&&(null===g||void 0===g||g()),a&&a())},anchorX:m,children:e},t)}))})}},9011:(e,t,r)=>{r.d(t,{I:()=>w});var s=r(3491),n=r(1454),i=r(9210),u=r(329),o=r(9567),a=r(9723),c=class extends u.Q{constructor(e,t){super(),this.options=t,this.#e=e,this.#t=null,this.#r=(0,o.T)(),this.options.experimental_prefetchInRender||this.#r.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(t)}#e;#s=void 0;#n=void 0;#i=void 0;#u;#o;#r;#t;#a;#c;#h;#l;#d;#p;#f=(()=>new Set)();bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#s.addObserver(this),h(this.#s,this.options)?this.#y():this.updateResult(),this.#R())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return l(this.#s,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.#s,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#m(),this.#v(),this.#s.removeObserver(this)}setOptions(e,t){const r=this.options,s=this.#s;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!==typeof this.options.enabled&&"function"!==typeof this.options.enabled&&"boolean"!==typeof(0,a.Eh)(this.options.enabled,this.#s))throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#g(),this.#s.setOptions(this.options),r._defaulted&&!(0,a.f8)(this.options,r)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#s,observer:this});const n=this.hasListeners();n&&d(this.#s,s,this.options,r)&&this.#y(),this.updateResult(t),!n||this.#s===s&&(0,a.Eh)(this.options.enabled,this.#s)===(0,a.Eh)(r.enabled,this.#s)&&(0,a.d2)(this.options.staleTime,this.#s)===(0,a.d2)(r.staleTime,this.#s)||this.#b();const i=this.#Q();!n||this.#s===s&&(0,a.Eh)(this.options.enabled,this.#s)===(0,a.Eh)(r.enabled,this.#s)&&i===this.#p||this.#E(i)}getOptimisticResult(e){const t=this.#e.getQueryCache().build(this.#e,e),r=this.createResult(t,e);return function(e,t){if(!(0,a.f8)(e.getCurrentResult(),t))return!0;return!1}(this,r)&&(this.#i=r,this.#o=this.options,this.#u=this.#s.state),r}getCurrentResult(){return this.#i}trackResult(e,t){const r={};return Object.keys(e).forEach((s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),t?.(s),e[s])})})),r}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#s}refetch(){let{...e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.fetch({...e})}fetchOptimistic(e){const t=this.#e.defaultQueryOptions(e),r=this.#e.getQueryCache().build(this.#e,t);return r.fetch().then((()=>this.createResult(r,t)))}fetch(e){return this.#y({...e,cancelRefetch:e.cancelRefetch??!0}).then((()=>(this.updateResult(),this.#i)))}#y(e){this.#g();let t=this.#s.fetch(this.options,e);return e?.throwOnError||(t=t.catch(a.lQ)),t}#b(){this.#m();const e=(0,a.d2)(this.options.staleTime,this.#s);if(a.S$||this.#i.isStale||!(0,a.gn)(e))return;const t=(0,a.j3)(this.#i.dataUpdatedAt,e)+1;this.#l=setTimeout((()=>{this.#i.isStale||this.updateResult()}),t)}#Q(){return("function"===typeof this.options.refetchInterval?this.options.refetchInterval(this.#s):this.options.refetchInterval)??!1}#E(e){this.#v(),this.#p=e,!a.S$&&!1!==(0,a.Eh)(this.options.enabled,this.#s)&&(0,a.gn)(this.#p)&&0!==this.#p&&(this.#d=setInterval((()=>{(this.options.refetchIntervalInBackground||s.m.isFocused())&&this.#y()}),this.#p))}#R(){this.#b(),this.#E(this.#Q())}#m(){this.#l&&(clearTimeout(this.#l),this.#l=void 0)}#v(){this.#d&&(clearInterval(this.#d),this.#d=void 0)}createResult(e,t){const r=this.#s,s=this.options,n=this.#i,u=this.#u,c=this.#o,l=e!==r?e.state:this.#n,{state:f}=e;let y,R={...f},m=!1;if(t._optimisticResults){const n=this.hasListeners(),u=!n&&h(e,t),o=n&&d(e,r,t,s);(u||o)&&(R={...R,...(0,i.k)(f.data,e.options)}),"isRestoring"===t._optimisticResults&&(R.fetchStatus="idle")}let{error:v,errorUpdatedAt:g,status:b}=R;if(t.select&&void 0!==R.data)if(n&&R.data===u?.data&&t.select===this.#a)y=this.#c;else try{this.#a=t.select,y=t.select(R.data),y=(0,a.pl)(n?.data,y,t),this.#c=y,this.#t=null}catch(S){this.#t=S}else y=R.data;if(void 0!==t.placeholderData&&void 0===y&&"pending"===b){let e;if(n?.isPlaceholderData&&t.placeholderData===c?.placeholderData)e=n.data;else if(e="function"===typeof t.placeholderData?t.placeholderData(this.#h?.state.data,this.#h):t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.#t=null}catch(S){this.#t=S}void 0!==e&&(b="success",y=(0,a.pl)(n?.data,e,t),m=!0)}this.#t&&(v=this.#t,y=this.#c,g=Date.now(),b="error");const Q="fetching"===R.fetchStatus,E="pending"===b,I="error"===b,C=E&&Q,x=void 0!==y,O={status:b,fetchStatus:R.fetchStatus,isPending:E,isSuccess:"success"===b,isError:I,isInitialLoading:C,isLoading:C,data:y,dataUpdatedAt:R.dataUpdatedAt,error:v,errorUpdatedAt:g,failureCount:R.fetchFailureCount,failureReason:R.fetchFailureReason,errorUpdateCount:R.errorUpdateCount,isFetched:R.dataUpdateCount>0||R.errorUpdateCount>0,isFetchedAfterMount:R.dataUpdateCount>l.dataUpdateCount||R.errorUpdateCount>l.errorUpdateCount,isFetching:Q,isRefetching:Q&&!E,isLoadingError:I&&!x,isPaused:"paused"===R.fetchStatus,isPlaceholderData:m,isRefetchError:I&&x,isStale:p(e,t),refetch:this.refetch,promise:this.#r};if(this.options.experimental_prefetchInRender){const t=e=>{"error"===O.status?e.reject(O.error):void 0!==O.data&&e.resolve(O.data)},s=()=>{const e=this.#r=O.promise=(0,o.T)();t(e)},n=this.#r;switch(n.status){case"pending":e.queryHash===r.queryHash&&t(n);break;case"fulfilled":"error"!==O.status&&O.data===n.value||s();break;case"rejected":"error"===O.status&&O.error===n.reason||s()}}return O}updateResult(e){const t=this.#i,r=this.createResult(this.#s,this.options);if(this.#u=this.#s.state,this.#o=this.options,void 0!==this.#u.data&&(this.#h=this.#s),(0,a.f8)(r,t))return;this.#i=r;const s={};!1!==e?.listeners&&(()=>{if(!t)return!0;const{notifyOnChangeProps:e}=this.options,r="function"===typeof e?e():e;if("all"===r||!r&&!this.#f.size)return!0;const s=new Set(r??this.#f);return this.options.throwOnError&&s.add("error"),Object.keys(this.#i).some((e=>{const r=e;return this.#i[r]!==t[r]&&s.has(r)}))})()&&(s.listeners=!0),this.#I({...s,...e})}#g(){const e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#s)return;const t=this.#s;this.#s=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#R()}#I(e){n.j.batch((()=>{e.listeners&&this.listeners.forEach((e=>{e(this.#i)})),this.#e.getQueryCache().notify({query:this.#s,type:"observerResultsUpdated"})}))}};function h(e,t){return function(e,t){return!1!==(0,a.Eh)(t.enabled,e)&&void 0===e.state.data&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||void 0!==e.state.data&&l(e,t,t.refetchOnMount)}function l(e,t,r){if(!1!==(0,a.Eh)(t.enabled,e)){const s="function"===typeof r?r(e):r;return"always"===s||!1!==s&&p(e,t)}return!1}function d(e,t,r,s){return(e!==t||!1===(0,a.Eh)(s.enabled,e))&&(!r.suspense||"error"!==e.state.status)&&p(e,r)}function p(e,t){return!1!==(0,a.Eh)(t.enabled,e)&&e.isStaleByTime((0,a.d2)(t.staleTime,e))}var f=r(5043),y=r(3248);r(579);function R(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var m=f.createContext(R()),v=()=>f.useContext(m);function g(){}var b=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},Q=e=>{f.useEffect((()=>{e.clearReset()}),[e])},E=e=>{let{result:t,errorResetBoundary:r,throwOnError:s,query:n,suspense:i}=e;return t.isError&&!r.isReset()&&!t.isFetching&&n&&(i&&void 0===t.data||(u=s,o=[t.error,n],"function"===typeof u?u(...o):!!u));var u,o},I=f.createContext(!1),C=()=>f.useContext(I),x=(I.Provider,e=>{const t=e.staleTime;e.suspense&&(e.staleTime="function"===typeof t?function(){return Math.max(t(...arguments),1e3)}:Math.max(t??1e3,1e3),"number"===typeof e.gcTime&&(e.gcTime=Math.max(e.gcTime,1e3)))}),O=(e,t)=>e.isLoading&&e.isFetching&&!t,S=(e,t)=>e?.suspense&&t.isPending,T=(e,t,r)=>t.fetchOptimistic(e).catch((()=>{r.clearReset()}));function w(e,t){return function(e,t,r){const s=(0,y.jE)(r),i=C(),u=v(),o=s.defaultQueryOptions(e);s.getDefaultOptions().queries?._experimental_beforeQuery?.(o),o._optimisticResults=i?"isRestoring":"optimistic",x(o),b(o,u),Q(u);const c=!s.getQueryCache().get(o.queryHash),[h]=f.useState((()=>new t(s,o))),l=h.getOptimisticResult(o),d=!i&&!1!==e.subscribed;if(f.useSyncExternalStore(f.useCallback((e=>{const t=d?h.subscribe(n.j.batchCalls(e)):g;return h.updateResult(),t}),[h,d]),(()=>h.getCurrentResult()),(()=>h.getCurrentResult())),f.useEffect((()=>{h.setOptions(o,{listeners:!1})}),[o,h]),S(o,l))throw T(o,h,u);if(E({result:l,errorResetBoundary:u,throwOnError:o.throwOnError,query:s.getQueryCache().get(o.queryHash),suspense:o.suspense}))throw l.error;if(s.getDefaultOptions().queries?._experimental_afterQuery?.(o,l),o.experimental_prefetchInRender&&!a.S$&&O(l,i)){const e=c?T(o,h,u):s.getQueryCache().get(o.queryHash)?.promise;e?.catch(g).finally((()=>{h.updateResult()}))}return o.notifyOnChangeProps?l:h.trackResult(l)}(e,c,t)}}}]);
//# sourceMappingURL=488.ebabdee4.chunk.js.map