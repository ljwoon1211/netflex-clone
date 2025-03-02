"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[628],{1628:(i,t,e)=>{e.r(t),e.d(t,{default:()=>Y});var n=e(5043),r=e(5464),o=e(1917),a=e(1674),l=e(5014),s=e(3546),d=e(3216),c=e(9011);const h="4a5a5119e9fcd0278acd7d83262df70d",p="https://api.themoviedb.org/3";function u(){return fetch(`${p}/tv/on_the_air?api_key=${h}`).then((i=>i.json()))}function g(){return fetch(`${p}/tv/airing_today?api_key=${h}`).then((i=>i.json()))}function x(){return fetch(`${p}/tv/top_rated?api_key=${h}`).then((i=>i.json()))}function v(){return fetch(`${p}/tv/popular?api_key=${h}`).then((i=>i.json()))}const y=()=>{const i=(0,c.I)({queryKey:["onTheAir"],queryFn:u}),t=(0,c.I)({queryKey:["airingTvs"],queryFn:g}),e=(0,c.I)({queryKey:["popularTvs"],queryFn:v}),n=(0,c.I)({queryKey:["topRatedTvs"],queryFn:x});return{onTheAirTvs:i.data||null,airingTvs:t.data||null,popularTvs:e.data||null,topRatedTvs:n.data||null,isFetchingOnTheAir:i.isFetching,isFetchingAiring:t.isFetching,isFetchingPopular:e.isFetching,isFetchingTopRated:n.isFetching,error:i.error||t.error||e.error||n.error}};var f=e(579);const m=r.Ay.div`
  position: relative;
  width: 100%;
  height: 200px;
`,w=(0,r.Ay)(a.P.div)`
  display: grid;
  gap: 10px;
  margin-bottom: 5px;
  grid-template-columns: repeat(${6}, 1fr);
  position: absolute;
  width: 100%;
`,j=(0,r.Ay)(a.P.div)`
  ${i=>{let{$bgPhoto:t}=i;return r.AH`
    background: url(${t}) center/cover no-repeat, white;
  `}}
  height: 200px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`,b=(0,r.Ay)(a.P.div)`
  padding: 10px;
  background-color: ${i=>{let{theme:t}=i;return t.black.lighter}};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`,A=r.Ay.div`
  position: absolute;
  ${i=>{let{$left:t}=i;return t?"left: 0;":"right: 0;"}}
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 50px;
    height: 50px;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out, fill 0.2s ease-in-out;
  }

  &:hover svg {
    fill: white;
    opacity: 1;
  }
`,$={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duration:.1,type:"tween"}}},k={hidden:i=>({x:i>0?window.outerWidth+5:-window.outerWidth-5}),visible:{x:0},exit:i=>({x:i>0?-window.outerWidth-5:window.outerWidth+5})},T={hover:{opacity:1,transition:{delay:.5,duration:.1,type:"tween"}}},F=i=>{let{data:t}=i;const e=(0,d.Zp)(),[r,a]=(0,n.useState)(0),[l,c]=(0,n.useState)(1),h=i=>{t&&(c(i),a((e=>{const n=Math.ceil(t.results.length/6)-1;return i>0?e===n?0:e+1:0===e?n:e-1})))};return(0,f.jsxs)(m,{children:[(0,f.jsx)(s.N,{custom:l,initial:!1,children:(0,f.jsx)(w,{variants:k,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},custom:l,children:null===t||void 0===t?void 0:t.results.slice(1).slice(6*r,6*(r+1)).map((i=>(0,f.jsx)(j,{layoutId:String(i.id),variants:$,whileHover:"hover",initial:"normal",transition:{type:"tween"},$bgPhoto:(0,o.l)(i.backdrop_path,"w500"),onClick:()=>{return t=i.id,e(`/tvs/${t}`);var t},children:(0,f.jsx)(b,{variants:T,children:(0,f.jsx)("h4",{children:i.name})})},i.id)))},r)}),(0,f.jsx)(A,{$left:!0,onClick:()=>h(-1),children:(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,f.jsx)("path",{d:"M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3l0-57.7 96 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-96 0 0-57.7c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"})})}),(0,f.jsx)(A,{$left:!1,onClick:()=>h(1),children:(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,f.jsx)("path",{d:"M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z"})})})]})},z=r.Ay.div`
  background: black;
`,P=r.Ay.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,_=r.Ay.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* padding: 60px; */

  // 이렇게 하면 위쪽은 밝고, 아래쪽이 어두운 이미지 형태 백그라운드 만들기 가능
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${i=>i.$bgPhoto});
  background-size: cover;
`,q=r.Ay.div`
  /* position: relative; */
  padding: 20px 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,C=r.Ay.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  gap: 20px;
`,I=r.Ay.h2`
  font-size: 68px;
  margin-bottom: 20px;
`,M=r.Ay.p`
  font-size: 30px;
  width: 50%;
`,R=(0,r.Ay)(a.P.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`,K=(0,r.Ay)(a.P.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  top: ${i=>i.$scrollY+100}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${i=>i.theme.black.lighter};
  border-radius: 15px;
  overflow: hidden;
`,S=r.Ay.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`,W=r.Ay.h3`
  color: ${i=>i.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`,L=r.Ay.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${i=>i.theme.white.lighter};
`,O=r.Ay.h6`
  font-size: 40px;
  color: ${i=>i.theme.white.lighter};
`;function Y(){const i=(0,d.Zp)(),t=(0,d.RQ)("/tvs/:id"),{onTheAirTvs:e,airingTvs:n,popularTvs:r,topRatedTvs:a,isFetchingOnTheAir:c,isFetchingAiring:h,isFetchingPopular:p,isFetchingTopRated:u}=y(),{scrollY:g}=(0,l.L)(),x=(null===t||void 0===t?void 0:t.params.id)&&[e,n,a,r].flatMap((i=>(null===i||void 0===i?void 0:i.results)||[])).find((i=>String(i.id)===t.params.id));return(0,f.jsx)(z,{children:c||h||p||u?(0,f.jsx)(P,{children:" Loading..."}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(_,{$bgPhoto:(0,o.l)((null===n||void 0===n?void 0:n.results[0].backdrop_path)||""),children:[(0,f.jsx)(I,{children:null===n||void 0===n?void 0:n.results[0].original_name}),(0,f.jsx)(M,{children:null===n||void 0===n?void 0:n.results[0].overview}),(0,f.jsxs)(q,{children:[(0,f.jsx)(O,{children:"Airing Today"}),(0,f.jsx)(F,{data:n})]})]}),(0,f.jsxs)(C,{children:[(0,f.jsx)(O,{children:"On The Air"}),(0,f.jsx)(F,{data:e}),(0,f.jsx)(O,{children:"Popular movies"}),(0,f.jsx)(F,{data:r}),(0,f.jsx)(O,{children:"Top Rated"}),(0,f.jsx)(F,{data:a})]}),(0,f.jsx)(s.N,{children:t?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(R,{onClick:()=>i("/tvs"),exit:{opacity:0},animate:{opacity:1}}),(0,f.jsx)(K,{layoutId:t.params.id,$scrollY:g.get(),children:x&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(S,{style:{backgroundImage:`linear-gradient(to top, black, transparent), url(${(0,o.l)(x.backdrop_path,"w500")})`}}),(0,f.jsx)(W,{children:x.name}),(0,f.jsx)(L,{children:x.overview})]})})]}):null})]})})}},1917:(i,t,e)=>{function n(i,t){return`https://image.tmdb.org/t/p/${t||"original"}/${i}`}e.d(t,{l:()=>n})}}]);
//# sourceMappingURL=628.8ef1f20e.chunk.js.map