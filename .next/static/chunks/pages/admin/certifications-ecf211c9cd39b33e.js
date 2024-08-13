(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{2554:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/certifications",function(){return e(3753)}])},3753:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return l}});var n=e(5893),a=e(7294),c=e(7066),s=e(9856),o=e.n(s),r=()=>{let[t,i]=(0,a.useState)([]),[e,s]=(0,a.useState)(""),[r,l]=(0,a.useState)(""),[d,u]=(0,a.useState)(null);(0,a.useEffect)(()=>{f()},[]);let f=async()=>{try{let t=await c.Z.get("http://localhost:5000/api/certifications");i(t.data)}catch(t){console.error("Failed to fetch certifications",t)}},_=async t=>{t.preventDefault();try{null!==d?await c.Z.put("http://localhost:5000/api/certifications/".concat(d),{title:e,description:r}):await c.Z.post("http://localhost:5000/api/certifications",{title:e,description:r}),s(""),l(""),u(null),f()}catch(t){console.error("Failed to save certification",t)}},h=i=>{let e=t.find(t=>t.id===i);e&&(s(e.title),l(e.description),u(i))},m=async t=>{try{await c.Z.delete("http://localhost:5000/api/certifications/".concat(t)),f()}catch(t){console.error("Failed to delete certification",t)}};return(0,n.jsxs)("div",{className:o().adminContainer,children:[(0,n.jsx)("h1",{className:o().heading,children:"Manage Certifications"}),(0,n.jsxs)("form",{onSubmit:_,className:o().form,children:[(0,n.jsx)("input",{type:"text",value:e,onChange:t=>s(t.target.value),placeholder:"Title",className:o().input}),(0,n.jsx)("textarea",{value:r,onChange:t=>l(t.target.value),placeholder:"Description",className:o().textarea}),(0,n.jsx)("button",{type:"submit",className:o().button,children:null!==d?"Update":"Add"})]}),(0,n.jsx)("div",{className:o().certificationList,children:t.map(t=>(0,n.jsxs)("div",{className:o().certificationItem,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:t.title}),(0,n.jsx)("p",{children:t.description})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{onClick:()=>h(t.id),className:o().editButton,children:"Edit"}),(0,n.jsx)("button",{onClick:()=>m(t.id),className:o().deleteButton,children:"Delete"})]})]},t.id))})]})},l=()=>(0,n.jsx)("div",{children:(0,n.jsx)(r,{})})},9856:function(t){t.exports={adminContainer:"AdminCertifications_adminContainer__q2rId",heading:"AdminCertifications_heading__vzia5",form:"AdminCertifications_form__bOhkP",input:"AdminCertifications_input__xb5cW",textarea:"AdminCertifications_textarea__M8v7T",button:"AdminCertifications_button__gMUJg",certificationList:"AdminCertifications_certificationList__tZviG",certificationItem:"AdminCertifications_certificationItem__3Otu7",editButton:"AdminCertifications_editButton__3DFlQ",deleteButton:"AdminCertifications_deleteButton__TKLIZ"}}},function(t){t.O(0,[66,888,774,179],function(){return t(t.s=2554)}),_N_E=t.O()}]);