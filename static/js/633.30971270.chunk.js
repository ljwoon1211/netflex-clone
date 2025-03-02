"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[633],{1917:(i,e,t)=>{function n(i,e){return`https://image.tmdb.org/t/p/${e||"original"}/${i}`}t.d(e,{l:()=>n})},6633:(i,e,t)=>{t.r(e),t.d(e,{default:()=>U});var n=t(5043),o=t(5464),r=t(1917),l=t(1674),s=t(5014),a=t(3546),d=t(3216),c=t(579);const h=o.Ay.div`
  position: relative;
  width: 100%;
  height: 200px;
`,p=(0,o.Ay)(l.P.div)`
  display: grid;
  gap: 10px;
  margin-bottom: 5px;
  grid-template-columns: repeat(${6}, 1fr);
  position: absolute;
  width: 100%;
`,g=(0,o.Ay)(l.P.div)`
  ${i=>{let{$bgPhoto:e}=i;return o.AH`
    background: url(${e}) center/cover no-repeat, white;
  `}}
  height: 200px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`,u=(0,o.Ay)(l.P.div)`
  padding: 10px;
  background-color: ${i=>{let{theme:e}=i;return e.black.lighter}};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`,x=o.Ay.div`
  position: absolute;
  ${i=>{let{$left:e}=i;return e?"left: 0;":"right: 0;"}}
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
`,v={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duration:.1,type:"tween"}}},y={hidden:i=>({x:i>0?window.outerWidth+5:-window.outerWidth-5}),visible:{x:0},exit:i=>({x:i>0?-window.outerWidth-5:window.outerWidth+5})},m={hover:{opacity:1,transition:{delay:.5,duration:.1,type:"tween"}}},f=i=>{let{data:e}=i;const t=(0,d.Zp)(),[o,l]=(0,n.useState)(0),[s,f]=(0,n.useState)(1),w=i=>{e&&(f(i),l((t=>{const n=Math.ceil(e.results.length/6)-1;return i>0?t===n?0:t+1:0===t?n:t-1})))};return(0,c.jsxs)(h,{children:[(0,c.jsx)(a.N,{custom:s,initial:!1,children:(0,c.jsx)(p,{variants:y,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},custom:s,children:null===e||void 0===e?void 0:e.results.slice(1).slice(6*o,6*(o+1)).map((i=>(0,c.jsx)(g,{layoutId:String(i.id),variants:v,whileHover:"hover",initial:"normal",transition:{type:"tween"},$bgPhoto:(0,r.l)(i.backdrop_path,"w500"),onClick:()=>{return e=i.id,t(`/movies/${e}`);var e},children:(0,c.jsx)(u,{variants:m,children:(0,c.jsx)("h4",{children:i.title})})},i.id)))},o)}),(0,c.jsx)(x,{$left:!0,onClick:()=>w(-1),children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,c.jsx)("path",{d:"M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3l0-57.7 96 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-96 0 0-57.7c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"})})}),(0,c.jsx)(x,{$left:!1,onClick:()=>w(1),children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,c.jsx)("path",{d:"M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z"})})})]})};var w=t(9011);const b="4a5a5119e9fcd0278acd7d83262df70d",j="https://api.themoviedb.org/3";function k(){return fetch(`${j}/movie/now_playing?api_key=${b}`).then((i=>i.json()))}function $(){return fetch(`${j}/movie/top_rated?api_key=${b}`).then((i=>i.json()))}function A(){return fetch(`${j}/movie/upcoming?api_key=${b}`).then((i=>i.json()))}const M=()=>{const i=(0,w.I)({queryKey:["latestMovies","nowPlaying"],queryFn:k}),e=(0,w.I)({queryKey:["topRatedMovies","topRated"],queryFn:$}),t=(0,w.I)({queryKey:["upcomingMovies","upcoming"],queryFn:A});return{latestMovies:i.data||null,topRatedMovies:e.data||null,upcomingMovies:t.data||null,isFetchingLatest:i.isFetching,isFetchingTopRated:e.isFetching,isFetchingUpcoming:t.isFetching,error:i.error||e.error||t.error}},F=o.Ay.div`
  background: black;
`,z=o.Ay.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,P=o.Ay.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* padding: 60px; */

  // 이렇게 하면 위쪽은 밝고, 아래쪽이 어두운 이미지 형태 백그라운드 만들기 가능
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${i=>i.$bgPhoto});
  background-size: cover;
`,R=o.Ay.div`
  /* position: relative; */
  padding: 20px 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,_=o.Ay.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  gap: 20px;
`,C=o.Ay.h2`
  font-size: 68px;
  margin-bottom: 20px;
`,q=o.Ay.p`
  font-size: 30px;
  width: 50%;
`,I=(0,o.Ay)(l.P.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`,L=(0,o.Ay)(l.P.div)`
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
`,S=o.Ay.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`,W=o.Ay.h3`
  color: ${i=>i.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`,K=o.Ay.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${i=>i.theme.white.lighter};
`,T=o.Ay.h6`
  font-size: 40px;
  color: ${i=>i.theme.white.lighter};
`;function U(){const i=(0,d.Zp)(),e=(0,d.RQ)("/movies/:id"),{latestMovies:t,topRatedMovies:n,upcomingMovies:o,isFetchingLatest:l,isFetchingTopRated:h,isFetchingUpcoming:p}=M(),{scrollY:g}=(0,s.L)(),u=(null===e||void 0===e?void 0:e.params.id)&&[t,n,o].flatMap((i=>(null===i||void 0===i?void 0:i.results)||[])).find((i=>String(i.id)===e.params.id));return(0,c.jsx)(F,{children:l||h||p?(0,c.jsx)(z,{children:" Loading..."}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(P,{$bgPhoto:(0,r.l)((null===t||void 0===t?void 0:t.results[0].backdrop_path)||""),children:[(0,c.jsx)(C,{children:null===t||void 0===t?void 0:t.results[0].title}),(0,c.jsx)(q,{children:null===t||void 0===t?void 0:t.results[0].overview}),(0,c.jsxs)(R,{children:[(0,c.jsx)(T,{children:"Latest movies"}),(0,c.jsx)(f,{data:t})]})]}),(0,c.jsxs)(_,{children:[(0,c.jsx)(T,{children:"Top Rated movies"}),(0,c.jsx)(f,{data:n}),(0,c.jsx)(T,{children:"Upcoming movies"}),(0,c.jsx)(f,{data:o})]}),(0,c.jsx)(a.N,{children:e?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(I,{onClick:()=>i("/"),exit:{opacity:0},animate:{opacity:1}}),(0,c.jsx)(L,{layoutId:e.params.id,$scrollY:g.get(),children:u&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S,{style:{backgroundImage:`linear-gradient(to top, black, transparent), url(${(0,r.l)(u.backdrop_path,"w500")})`}}),(0,c.jsx)(W,{children:u.title}),(0,c.jsx)(K,{children:u.overview})]})})]}):null})]})})}}}]);
//# sourceMappingURL=633.30971270.chunk.js.map