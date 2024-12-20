import{_ as l,o as a,c as r,a as m,r as d,b as k,w as u,d as s,e as c,f as g,F as i,g as j}from"./index-BVIDRizk.js";import{y as v,v as f}from"./vue_jobs_homepage-DmAxw03Z.js";const h={class:"hero"},S={__name:"Hero",props:{Title:{type:String,default:"Hello I'm Renko Brauckman"},Subtitle:{type:String,default:"I'm a frontend developer studying at The Hague University of Applied Sciences"},Subtitle2:{type:String,default:"I have great experience with CSS, HTML and Javascript"}},setup(t){return(n,o)=>(a(),r("section",h,o[0]||(o[0]=[m('<h1 class="title" data-v-2db980d5> Hello I&#39;m Renko Brauckman </h1><p class="subtitle" data-v-2db980d5> I&#39;m a frontend developer studying at The Hague University of Applied Sciences </p><p class="subtitle2" data-v-2db980d5> I have great experience with <span class="skill" data-v-2db980d5>CSS</span>, <span class="skill" data-v-2db980d5>HTML</span>, <span class="skill" data-v-2db980d5>Javascript</span> and the <span class="skill" data-v-2db980d5>Vue-framework</span></p>',3)])))}},y=l(S,[["__scopeId","data-v-2db980d5"]]),w=["src"],I={__name:"ProjectPhoto",props:{imageSrc:{type:String,required:!0},linkTo:{type:String,required:!0}},setup(t){return(n,o)=>{const e=d("RouterLink");return a(),k(e,{to:t.linkTo,class:"project-photo-container"},{default:u(()=>[s("img",{src:t.imageSrc,alt:"Project Image",class:"project-photo"},null,8,w)]),_:1},8,["to"])}}},P=l(I,[["__scopeId","data-v-7b9234a8"]]),x="/renko-portfolio-web/assets/browse_jobs-ByJQwWfv.png",B="/renko-portfolio-web/assets/view_job-CMdN85N4.png",H="/renko-portfolio-web/assets/edit_job-2DPGSNZn.png",T="/renko-portfolio-web/assets/added_job_succesfully-BFDyPBWE.png",L="/renko-portfolio-web/assets/add_job-BFcvIZhE.png",N={class:"projects-container"},R={__name:"ProjectsPhotos",setup(t){const n=[{image:v,link:"/projects/youtube"},{image:f,link:"/projects/vue-jobs"},{image:x,link:"/projects/vue-jobs"},{image:B,link:"/projects/vue-jobs"},{image:H,link:"/projects/vue-jobs"},{image:T,link:"/projects/vue-jobs"},{image:L,link:"/projects/vue-jobs"}];return(o,e)=>{const _=d("RouterLink");return a(),r(i,null,[s("section",null,[e[1]||(e[1]=s("h1",{class:"title"},"Here are some photo's of different projects i have worked on",-1)),c(_,{to:"/projects",class:"subtitle-link"},{default:u(()=>e[0]||(e[0]=[g("Want to see more?"),s("i",{class:"pi pi-chevron-right",style:{scale:"80%"}},null,-1)])),_:1})]),s("section",N,[(a(),r(i,null,j(n,(p,b)=>c(P,{key:b,imageSrc:p.image,linkTo:p.link},null,8,["imageSrc","linkTo"])),64))])],64)}}},V=l(R,[["__scopeId","data-v-df8489b4"]]),F={__name:"HomeView",setup(t){return(n,o)=>(a(),r(i,null,[c(y),c(V)],64))}};export{F as default};