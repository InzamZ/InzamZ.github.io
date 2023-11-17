import{_ as H}from"./YunFooter.vue_vue_type_script_setup_true_lang-03d5cb33.js";import{g as x,o as n,j as a,b as i,r as Y,m as C,q as f,K as M,t as y,a as v,_ as B,as as V,a0 as g,n as b,F as N,k as L,a6 as S,l as _,c as $,e as w,at as z,C as A,au as F,u as R,i as j,ae as D}from"./app-4f30d306.js";const E={class:"yun-notice m-auto"},G=["innerHTML"],P=x({__name:"YunNotice",props:{content:{}},setup(d){return(e,o)=>(n(),a("div",E,[i("span",{innerHTML:e.content},null,8,G),Y(e.$slots,"default")]))}});const q={class:"say"},K={key:0,class:"say-content animate-fade-in animate-iteration-1"},O={key:1,class:"say-author"},W={key:2,class:"say-from"},I=x({__name:"YunSay",setup(d){const e=C(),o=f(""),c=f(""),u=f("");function h(){const s=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;s&&fetch(s).then(t=>{if(t.ok)t.json().then(r=>{if(e.value.say.hitokoto.enable)o.value=r.hitokoto,c.value=r.from_who,u.value=r.from;else{const l=r[Math.floor(Math.random()*r.length)];l.content?(o.value=l.content,c.value=l.author,u.value=l.from):o.value=l}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${t.status}`)}).catch(t=>{console.error(t.message)})}return M(()=>{h()}),(s,t)=>(n(),a("div",q,[o.value?(n(),a("span",K,y(o.value),1)):v("v-if",!0),c.value?(n(),a("span",O,y(c.value),1)):v("v-if",!0),u.value?(n(),a("span",W,y(u.value),1)):v("v-if",!0)]))}});const J={},Q={class:"go-down","aria-label":"go-down",href:"javascript:window.scrollTo(0, window.banner.clientHeight);"},U=i("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),X=[U];function Z(d,e){return n(),a("a",Q,X)}const ee=B(J,[["render",Z]]);const ne={},te={class:"yun-cloud"},se=V('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),ae=[se];function oe(d,e){return n(),a("div",te,ae)}const ce=B(ne,[["render",oe]]),re={class:"banner-line-container"},le={class:"banner-char-container"},ie={class:"char"},ue={class:"banner-line-container bottom"},_e=x({__name:"YunBanner",setup(d){const e=C(),o=g(()=>{const s=[];for(let t=0;t<e.value.banner.title.length;t++){const r=z(1.5,3.5);s.push(r)}return s}),c=g(()=>o.value.reduce((s,t)=>s+t,0)/2),u=g(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${c.value}rem)`})),h=f(!0);return(s,t)=>{var m;const r=ce,l=ee;return n(),a("div",{id:"yun-banner",style:S(u.value)},[i("div",re,[i("div",{class:b(["banner-line vertical-line-top",{active:h.value}])},null,2)]),i("div",le,[(n(!0),a(N,null,L(_(e).banner.title,(k,p)=>(n(),a("div",{key:p,class:"char-box"},[i("span",{class:b([p%2!==0?"char-right":"char-left"]),style:S({"--banner-char-size":`${o.value[p]}rem`})},[i("span",ie,y(k),1)],6)]))),128))]),i("div",ue,[i("div",{class:b(["banner-line vertical-line-bottom",{active:h.value}])},null,2)]),(m=_(e).banner.cloud)!=null&&m.enable?(n(),$(r,{key:0})):v("v-if",!0),w(l)],4)}}});const de=x({__name:"home",setup(d){const e=A(),o=F("home"),c=C(),u=R(),h=g(()=>u.path.startsWith("/page"));return(s,t)=>{const r=D,l=_e,m=I,k=P,p=j("RouterView"),T=H;return n(),a("main",{class:b(["yun-main flex-center",_(o)&&!_(e).isSidebarOpen?"pl-0":"md:pl-$va-sidebar-width"]),flex:"~ col",w:"full"},[w(r,{"show-hamburger":!0}),h.value?v("v-if",!0):(n(),a(N,{key:0},[_(c).banner.enable?(n(),$(l,{key:0})):v("v-if",!0),_(c).say.enable?(n(),$(m,{key:1,w:"full"})):v("v-if",!0)],64)),_(c).notice.enable?(n(),$(k,{key:1,content:_(c).notice.content,mt:"4"},null,8,["content"])):v("v-if",!0),Y(s.$slots,"board"),Y(s.$slots,"default",{},()=>[w(p)]),w(T)],2)}}});export{de as default};
