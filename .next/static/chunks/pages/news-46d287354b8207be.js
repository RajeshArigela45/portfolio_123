(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{8097:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return s(418)}])},418:function(e,n,s){"use strict";s.r(n);var t=s(5893),a=s(7294),o=s(7066),r=s(2560),i=s.n(r);n.default=()=>{let[e,n]=(0,a.useState)([]);return(0,a.useEffect)(()=>{(async()=>{try{let e=await o.Z.get("http://localhost:5000/api/news");n(e.data)}catch(e){console.error("Failed to fetch news items",e)}})()},[]),(0,t.jsxs)("div",{className:i().newsContainer,children:[(0,t.jsx)("h1",{className:i().heading,children:"All News"}),(0,t.jsx)("div",{className:i().newsList,children:e.map(e=>(0,t.jsx)("div",{className:i().newsBox,children:(0,t.jsxs)("div",{className:i().newsContent,children:[(0,t.jsx)("h3",{className:i().newsTitle,children:e.title}),(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:i().link,children:"Read More"}),e.image&&(0,t.jsx)("img",{src:"http://localhost:5000/uploads/".concat(e.image),alt:e.title,className:i().newsImage}),e.document&&(0,t.jsx)("a",{href:"http://localhost:5000/uploads/".concat(e.document),target:"_blank",rel:"noopener noreferrer",className:i().newsDocument,children:"Download Document"})]})},e.id))})]})}},2560:function(e){e.exports={newsContainer:"News_newsContainer__vPwUZ",heading:"News_heading__zI_JO",newsList:"News_newsList__13ab3",newsBox:"News_newsBox__DLs7a",newsContent:"News_newsContent__D6s92",newsTitle:"News_newsTitle__qWX1D",link:"News_link__ylsKs",newsDescription:"News_newsDescription__uBmeu",newsImage:"News_newsImage__iaRUh",newsDocument:"News_newsDocument__I0TgZ",readMoreContainer:"News_readMoreContainer__h53c5",readMoreButton:"News_readMoreButton__hl5xS"}}},function(e){e.O(0,[66,888,774,179],function(){return e(e.s=8097)}),_N_E=e.O()}]);