import{u as M,k as R,l,r as A,m as L,c as _,a as e,t as j,d as F,_ as O,e as h,w as U,n as x,v as S,g as T,p as q,f as P,h as $,j as z,o as d,q as V,S as B}from"./index-82YUfLJa.js";const H={class:"page-wrapper"},I={class:"container-xl"},J={class:"page-header d-print-none"},Z={class:"row g-2 align-items-center"},G={class:"col"},K={class:"page-title"},Q={class:"page-body"},W={class:"container-xl"},X={class:"row row-cards"},Y={class:"col-12"},ee={class:"row"},se={form:"form-fieldset"},te={class:"mb-3"},oe=e("label",{for:"title",class:"form-label"},"Name",-1),ae={class:"mb-3"},le=e("label",{for:"title",class:"form-label"},"Email",-1),re={class:"form-label mb-3"},ne={key:0,class:"mb-3",width:"150",height:"150"},ie=["src"],ce={key:1,class:"progress mb-2"},de=e("button",{type:"submit",class:"btn btn-primary"},"Envoyer",-1),ue={class:"row mt-5"},me=e("h3",{class:"text-danger"},"Zone de danger",-1),_e={__name:"DashboardView",setup(pe){var b,y,k,C;const n=M(),v=R(),g=l(null),i=l((b=n.getUser)==null?void 0:b.name),w=l(""),c=l((y=n.getUser)==null?void 0:y.email),u=l((C=(k=n.getUser)==null?void 0:k.avatar)==null?void 0:C.thumbnail_url),m=l(null),p=l(!1),f=l(0),r=A({errors:[]});L(()=>{w.value=document.querySelector("head title").innerHTML});const N=a=>{g.value=m.value=a.target.files[0];const t=new FileReader;t.onload=function(s){u.value=s.target.result},t.readAsDataURL(a.target.files[0])},D=async()=>{var t;await V.get("/sanctum/csrf-cookie"),r.errors=[];const a=new FormData;a.append("file",m.value),a.append("name",i.value),a.append("email",c.value),await V.post("/user/update/"+((t=n.getUser)==null?void 0:t.id),a,{headers:{"Content-Type":"multipart/form-data;charset=utf-8"},onUploadProgress:s=>{if(i.value&&c.value&&m.value){p.value=!0;let o=Math.round(s.loaded*100/s.total);f.value=o,o===100&&setTimeout(()=>{f.value=0,p.value=!1},2e3)}}}).then(s=>{console.log(s),localStorage.setItem("user",JSON.stringify(s.data.user)),v.go(0)}).catch(s=>{if(console.log(s),s.response.status===422)for(const o in s.response.data.errors)r.errors.push(s.response.data.errors[o][0]+" ");s.response.status===500&&(r.errors.push(s.response.data.message),console.log(s)),r.errors.length&&B.fire({icon:"error",title:"Error",allowOutsideClick:!1,html:r.errors.join("<br>")}).then(o=>{o.isConfirmed&&v.go(0)})})},E=async()=>{B.fire({icon:"warning",title:"Attention",allowOutsideClick:!1,text:"Confirmation de suppression du compte ?",cancelButtonText:"Annuler",showCancelButton:!0}).then(a=>{a.isConfirmed&&n.deleteUser()})};return(a,t)=>{const s=z("RouterLink");return d(),_("div",H,[e("div",I,[e("div",J,[e("div",Z,[e("div",G,[e("h2",K,j(w.value),1)])])])]),e("div",Q,[e("div",W,[e("div",X,[e("div",Y,[r.errors.length?(d(),F(O,{key:0,errors:r.errors},null,8,["errors"])):h("",!0),e("form",{onSubmit:U(D,["prevent"]),action:"/user/update/{{user.getUser?.id}}",method:"post",enctype:"multipart/form-data"},[e("div",ee,[e("fieldset",se,[e("div",te,[oe,x(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>i.value=o),type:"text",class:"form-control",placeholder:"name",autofocus:""},null,512),[[S,i.value]])]),e("div",ae,[le,x(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>c.value=o),type:"email",class:"form-control",placeholder:"Email",autofocus:""},null,512),[[S,c.value]])]),e("div",re,[T(" Ajouter une image "),e("input",{onChange:t[2]||(t[2]=o=>N(o)),ref_key:"file",ref:g,type:"file",class:"form-control"},null,544),u.value?(d(),_("div",ne,[e("img",{src:u.value,alt:"image",class:"img-fluid",width:"150",height:"150"},null,8,ie)])):h("",!0),p.value?(d(),_("div",ce,[e("div",{class:"progress-bar",style:q("width:"+f.value+"%")},null,4)])):h("",!0)])]),de,P(s,{to:{name:"password.update"}},{default:$(()=>[T("Changer mode de passe")]),_:1})]),e("div",ue,[e("fieldset",null,[me,e("button",{onClick:t[3]||(t[3]=U(o=>E(),["prevent"])),class:"btn btn-danger"}," Supprimer le compte ")])])],32)])])])])])}}};export{_e as default};
