import{o as r,c as s,a as t,t as n,D as u,F as m}from"./index-82YUfLJa.js";const p={class:"form-label"},c=["value","placeholder"],i={__name:"BaseInput",props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""}},setup(e){return(l,a)=>(r(),s(m,null,[t("label",p,n(e.label),1),t("input",u({onInput:a[0]||(a[0]=o=>l.$emit("update:modelValue",o.target.value)),class:"form-control",value:e.modelValue,placeholder:e.label},l.$attrs),null,16,c)],64))}};export{i as _};
