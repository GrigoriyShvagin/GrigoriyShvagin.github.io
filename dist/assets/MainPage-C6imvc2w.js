import{d as u,r as p,o as f,a as h,b as l,c as i,e,t as c,u as v,F as C,f as k,n as g,g as d,w as _}from"./index-Bfv9klXE.js";const x="/me.jpg",S={class:"main_page_block"},y=e("div",{class:"bg_text"},[e("h1",null,"Frontend Developer")],-1),T={class:"text_block"},V=e("div",{class:"text_name"},"Shvagin Grigoriy",-1),w={class:"text_profession"},F={class:"skill_set"},B=e("div",{class:"header"},"Skill Set",-1),D={class:"skills_list"},E={class:"bttn_block"},G=e("button",{type:"button",class:"bttn resume_bttn"}," Resume ",-1),O=e("button",{type:"button",class:"bttn contact_bttn"}," Contact ",-1),P=e("div",{class:"img_block"},[e("img",{src:x,alt:""})],-1),M=u({__name:"MainPage",setup(R){const s="Frontend Developer".split(""),b={vue3:{name:"Vue3",borderColor:"#20ff93"},compOpt:{name:"Comp + Opt API",borderColor:"#2245d4"},Ts:{name:"TypeScript",borderColor:"#e8ff76"},Scss:{name:"Sass",borderColor:"#76b8ff"},Vite:{name:"Vite",borderColor:"#4aa12a"},Webpack:{name:"webpack",borderColor:"#2b71e9"},Vuex:{name:"Vuex + Pinia",borderColor:"#ee5903"},Tailwind:{name:"Tailwind",borderColor:"#ef7171"},Rest:{name:"Rest + WSS",borderColor:"#aaaaf8"},Eslint:{name:"Eslint",borderColor:"#ff76d6"},Git:{name:"Git",borderColor:"#c2cbff"}};let t=p("");function m(o){return{border:"2px solid "+o.borderColor,"--color-hover":o.borderColor+"25"}}function n(){t.value.length<s.length&&(t.value+=s[t.value.length],setTimeout(n,100))}return f(n),(o,j)=>{const r=h("router-link");return l(),i("div",S,[y,e("div",T,[V,e("div",w,c(v(t)),1),e("div",F,[B,e("div",D,[(l(),i(C,null,k(b,a=>e("div",{class:"skill",style:g({...m(a)})},c(a.name),5)),64))])]),e("div",E,[d(r,{to:"/resume"},{default:_(()=>[G]),_:1}),d(r,{to:"/contact"},{default:_(()=>[O]),_:1})])]),P])}}});export{M as default};
