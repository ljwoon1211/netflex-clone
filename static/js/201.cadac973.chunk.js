"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[201],{1917:(t,e,i)=>{function n(t,e){return`https://image.tmdb.org/t/p/${e||"original"}/${t}`}i.d(e,{l:()=>n})},7201:(t,e,i)=>{i.r(e),i.d(e,{default:()=>W});var n=i(5043),r=i(5475),o=i(9011);const l="4a5a5119e9fcd0278acd7d83262df70d",a="https://api.themoviedb.org/3";var d=i(5464),s=i(1674),c=i(5014),h=i(3546),p=i(3216),g=i(1917),x=i(579);const u=d.Ay.div`
  position: relative;
  width: 100%;
  height: 200px;
`,v=(0,d.Ay)(s.P.div)`
  display: grid;
  gap: 10px;
  margin-bottom: 5px;
  grid-template-columns: repeat(${6}, 1fr);
  position: absolute;
  width: 100%;
`,y=(0,d.Ay)(s.P.div)`
  ${t=>{let{$bgPhoto:e}=t;return d.AH`
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
`,w=(0,d.Ay)(s.P.div)`
  padding: 10px;
  background-color: ${t=>{let{theme:e}=t;return e.black.lighter}};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`,f=d.Ay.div`
  position: absolute;
  ${t=>{let{$left:e}=t;return e?"left: 0;":"right: 0;"}}
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
`,m=(0,d.Ay)(s.P.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`,b=(0,d.Ay)(s.P.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  top: ${t=>t.$scrollY+100}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${t=>t.theme.black.lighter};
  border-radius: 15px;
  overflow: hidden;
`,k=d.Ay.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`,j=d.Ay.h3`
  color: ${t=>t.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`,$=d.Ay.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${t=>t.theme.white.lighter};
`,A={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duration:.1,type:"tween"}}},z={hidden:t=>({x:t>0?window.outerWidth+5:-window.outerWidth-5}),visible:{x:0},exit:t=>({x:t>0?-window.outerWidth-5:window.outerWidth+5})},P={hover:{opacity:1,transition:{delay:.5,duration:.1,type:"tween"}}},C=t=>{let{data:e}=t;const i=(0,p.Zp)(),[o,l]=(0,n.useState)(0),[a,d]=(0,n.useState)(1),[s,C]=(0,n.useState)(null),[M]=(0,r.ok)(),S=M.get("keyword")||"",F=t=>{e&&(d(t),l((i=>{const n=Math.ceil(e.results.length/6)-1;return t>0?i===n?0:i+1:0===i?n:i-1})))},{scrollY:I}=(0,c.L)(),W=s&&[e].flatMap((t=>(null===t||void 0===t?void 0:t.results)||[])).find((t=>String(t.id)===s));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u,{children:[(0,x.jsx)(h.N,{custom:a,initial:!1,children:(0,x.jsx)(v,{variants:z,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},custom:a,children:null===e||void 0===e?void 0:e.results.slice(1).slice(6*o,6*(o+1)).map((t=>(0,x.jsx)(y,{layoutId:String(t.id),variants:A,whileHover:"hover",initial:"normal",transition:{type:"tween"},$bgPhoto:(0,g.l)(t.backdrop_path,"w500"),onClick:()=>{return e=String(t.id),C(e);var e},children:(0,x.jsx)(w,{variants:P,children:(0,x.jsx)("h4",{children:t.name})})},t.id)))},o)}),(0,x.jsx)(f,{$left:!0,onClick:()=>F(-1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,x.jsx)("path",{d:"M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3l0-57.7 96 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-96 0 0-57.7c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"})})}),(0,x.jsx)(f,{$left:!1,onClick:()=>F(1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,x.jsx)("path",{d:"M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z"})})})]}),(0,x.jsx)(h.N,{children:s?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{onClick:()=>{C(null),i(`/search?keyword=${S}`)},exit:{opacity:0},animate:{opacity:1}}),(0,x.jsx)(b,{layoutId:s,$scrollY:I.get(),children:W&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(k,{style:{backgroundImage:`linear-gradient(to top, black, transparent), url(${(0,g.l)(W.backdrop_path,"w500")})`}}),(0,x.jsx)(j,{children:W.name}),(0,x.jsx)($,{children:W.overview})]})})]}):null})]})},M=d.Ay.div`
  background: black;
`,S=d.Ay.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,F=(d.Ay.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* padding: 60px; */

  // 이렇게 하면 위쪽은 밝고, 아래쪽이 어두운 이미지 형태 백그라운드 만들기 가능
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${t=>t.$bgPhoto});
  background-size: cover;
`,d.Ay.div`
  /* position: relative; */
  padding: 20px 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`),I=(d.Ay.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  gap: 20px;
`,d.Ay.h2`
  font-size: 68px;
  margin-bottom: 20px;
`,d.Ay.p`
  font-size: 30px;
  width: 50%;
`,d.Ay.h6`
  padding-top: 20px;
  font-size: 40px;
  color: ${t=>t.theme.white.lighter};
`);function W(){const[t]=(0,r.ok)(),e=t.get("keyword")||"",{data:i,isPending:n,isError:d}=(0,o.I)({queryKey:["collections",e],queryFn:()=>fetch(`${a}/search/collection?query=${e}&api_key=${l}`).then((t=>t.json()))});return(0,x.jsx)(M,{children:n?(0,x.jsx)(S,{children:" Loading..."}):(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(F,{children:[(0,x.jsxs)(I,{children:["Search Results for : ",e]}),(0,x.jsx)(C,{data:i})]})})})}}}]);
//# sourceMappingURL=201.cadac973.chunk.js.map