(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{563:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/news",function(){return n(4729)}])},4729:function(e,t,n){"use strict";n.r(t);var a=n(5893),s=n(7294),l=n(7066),i=n(9292),o=n.n(i);t.default=()=>{let[e,t]=(0,s.useState)([]),[n,i]=(0,s.useState)(""),[d,c]=(0,s.useState)(""),[r,u]=(0,s.useState)(null),[m,p]=(0,s.useState)(null),[h,_]=(0,s.useState)(null);(0,s.useEffect)(()=>{w()},[]);let w=async()=>{try{let e=await l.Z.get("http://localhost:5000/api/news");t(e.data)}catch(e){console.error("Failed to fetch news data",e)}},N=async e=>{e.preventDefault();let t=new FormData;t.append("title",n),t.append("link",d),r&&t.append("image",r),m&&t.append("document",m);try{null!==h?await l.Z.put("http://localhost:5000/api/news/".concat(h),t,{headers:{"Content-Type":"multipart/form-data"}}):await l.Z.post("http://localhost:5000/api/news",t,{headers:{"Content-Type":"multipart/form-data"}}),i(""),c(""),u(null),p(null),_(null),w()}catch(e){console.error("Failed to save news data",e)}},f=t=>{let n=e.find(e=>e.id===t);n&&(i(n.title),c(n.link),u(null),p(null),_(t))},g=async e=>{try{await l.Z.delete("http://localhost:5000/api/news/".concat(e)),w()}catch(e){console.error("Failed to delete news data",e)}};return(0,a.jsxs)("div",{className:o().adminNewsContainer,children:[(0,a.jsx)("h1",{className:o().heading,children:"Manage News"}),(0,a.jsxs)("form",{onSubmit:N,className:o().form,children:[(0,a.jsx)("input",{type:"text",value:n,onChange:e=>i(e.target.value),placeholder:"Title",className:o().input}),(0,a.jsx)("input",{type:"text",value:d,onChange:e=>c(e.target.value),placeholder:"Link",className:o().input}),(0,a.jsx)("input",{type:"file",onChange:e=>u(e.target.files?e.target.files[0]:null),placeholder:"Upload Image",className:o().input}),(0,a.jsx)("input",{type:"file",onChange:e=>p(e.target.files?e.target.files[0]:null),placeholder:"Upload Document",className:o().input}),(0,a.jsx)("button",{type:"submit",className:o().button,children:null!==h?"Update":"Add"})]}),(0,a.jsx)("div",{className:o().newsList,children:e.map(e=>(0,a.jsxs)("div",{className:o().newsItem,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:e.title}),(0,a.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.link}),e.image&&(0,a.jsx)("img",{src:"http://localhost:5000/uploads/".concat(e.image),alt:e.title,className:o().newsImage}),e.document&&(0,a.jsx)("a",{href:"http://localhost:5000/uploads/".concat(e.document),target:"_blank",rel:"noopener noreferrer",className:o().newsDocument,children:"Download Document"})]}),(0,a.jsxs)("div",{className:o().actions,children:[(0,a.jsx)("button",{onClick:()=>f(e.id),className:o().editButton,children:"Edit"}),(0,a.jsx)("button",{onClick:()=>g(e.id),className:o().deleteButton,children:"Delete"})]})]},e.id))})]})}},9292:function(e){e.exports={adminNewsContainer:"AdminNews_adminNewsContainer__l1l3_",heading:"AdminNews_heading__FQxCC",form:"AdminNews_form__bPFKm",input:"AdminNews_input__khthA",button:"AdminNews_button__sFU5Q",newsList:"AdminNews_newsList__A_NhQ",newsItem:"AdminNews_newsItem__dXEZ5",editButton:"AdminNews_editButton__Rs5OF",deleteButton:"AdminNews_deleteButton__qzzCW",newsImage:"AdminNews_newsImage__EHWeK",newsDocument:"AdminNews_newsDocument__LwgL2"}}},function(e){e.O(0,[66,888,774,179],function(){return e(e.s=563)}),_N_E=e.O()}]);