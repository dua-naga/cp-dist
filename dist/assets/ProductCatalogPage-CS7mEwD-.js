const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CatalogProductDetailsDialog-DCgtbEjj.js","assets/index-Bx4W_xK3.js","assets/index-6LtYeXJq.css","assets/DataNotFound.vue_vue_type_script_setup_true_lang-D4ogHQct.js","assets/cart-CSjYbghQ.js","assets/index-DLfLfmVv.js","assets/AppLoading-CvcxhyWa.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/app-toast-DJ0iMKCx.js","assets/Api-DXpP5ham.js","assets/CatalogProductCategory-QcXpCEBq.js","assets/AppPaginator.vue_vue_type_script_setup_true_lang-B0kvS-3d.js","assets/index-Dj-02ixo.js","assets/index-BhYt9Q08.js","assets/index-D9BhMZPq.js","assets/index-ZMCdNXxJ.js","assets/index-B9AbhMQn.js","assets/index-LiBe83ku.js","assets/index-O-dTXy2X.js","assets/title-BSStnSF8.js","assets/entity-CF3BxAvb.js","assets/index-BC2AJbO3.js"])))=>i.map(i=>d[i]);
var H=Object.defineProperty;var J=(i,s,c)=>s in i?H(i,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):i[s]=c;var M=(i,s,c)=>J(i,typeof s!="symbol"?s+"":s,c);import{ah as Q,ai as W,A as X,d as Y,f as Z,a3 as ee,s as te,g as S,B as ae,C as se,z as oe,x as le,aj as re,ak as ce,j as B,al as ie,w as b,h as a,e as n,b as l,c as u,k as D,F as R,m as N,t as h,am as ne,n as O,i as ue,a4 as de,a5 as pe,a as r}from"./index-Bx4W_xK3.js";import{A as fe}from"./Api-DXpP5ham.js";import{C as me}from"./CatalogProductCategory-QcXpCEBq.js";import{_ as z,a as ge}from"./DataNotFound.vue_vue_type_script_setup_true_lang-D4ogHQct.js";import{A as ve}from"./AppLoading-CvcxhyWa.js";import{_ as _e,s as ye}from"./AppPaginator.vue_vue_type_script_setup_true_lang-B0kvS-3d.js";import{u as he}from"./app-toast-DJ0iMKCx.js";import{u as xe}from"./title-BSStnSF8.js";import{u as we}from"./entity-CF3BxAvb.js";import{s as ke}from"./index-BC2AJbO3.js";import{a as Ce,s as be}from"./index-D9BhMZPq.js";import{s as Pe}from"./index-ZMCdNXxJ.js";class $e extends fe{constructor(){super(...arguments);M(this,"resource","customer-portal/products")}}const je=new $e,qe=Q("product-catalog",()=>{const{entities:i,selected:s,meta:c,links:x,loading:w,refetch:P,notFound:$}=we(),{storagePrefix:d}=X(),j=W(`${d}product_catalog_layout_mode`,"grid");return{products:i,selected:s,meta:c,links:x,loading:w,refetch:P,notFound:$,layout:j}}),Ve={class:"flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between"},Ae={class:"text-lg font-bold"},Ee={class:"flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center md:gap-4"},Se={class:"flex items-center gap-2"},Be={class:"divide-surface-200 border-y-surface-200 flex flex-col divide-y border-y border-t"},De={key:0,class:"grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"},Re=["onClick"],Te=["src","alt"],Fe={class:"mt-4 flex-1"},Le={class:"font-bold"},Ue={class:"text-sm text-gray-600"},Me={key:1,class:"divide-surface-200 border-y-surface-200 flex flex-col divide-y"},Ne=["onClick"],Oe=["src","alt"],ze={class:"flex flex-1 flex-col gap-4"},Ie={class:"text-lg font-bold"},Ke={class:"text-sm text-gray-600"},Ge={class:"flex justify-end sm:items-end"},He=Y({__name:"ProductCatalogPage",setup(i){const{t:s}=Z();xe(s("product_catalog"));const c=se(),x=ue(),{toastError:w}=he(),P=ee(),$=qe(),{products:d,selected:j,meta:k,links:T,refetch:F,loading:p,notFound:q,layout:f}=te($),m=S([]),V=S(null),g=S(null),C=ae(()=>c.query);oe(F,o=>{o&&A(C.value)}),le(()=>{g.value=C.value.search,A(C.value),L(C.value)}),re(()=>{d.value=[],k.value=null,T.value=null}),ce(o=>{const t=o.query;g.value=t.search,A(t),L(t)});const A=async o=>{F.value=!1,q.value=!1,p.value=!0;try{const t=await je.paginate({...o});d.value=t.data,k.value=t.meta,T.value=t.links,d.value.length<1&&(q.value=!0)}catch(t){w(t.message)}finally{p.value=!1}},L=async o=>{p.value=!0;try{const t=await me.get();m.value=t,m.value.unshift({name:s("all_data",{data:s("category")}),id:0}),V.value=m.value.find(e=>e.id.toString()===o.category)??m.value[0]}catch(t){w(t.message)}finally{p.value=!1}},I=()=>{x.push({query:{...c.query,page:void 0,search:g.value}})},K=o=>{x.push({query:{...c.query,page:void 0,category:o.id===0?void 0:o.id}})},U=o=>{j.value=o,P.open(de(()=>pe(()=>import("./CatalogProductDetailsDialog-DCgtbEjj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]))),{props:{header:s("details_data",{data:s("product")}),modal:!0}})};return(o,t)=>(r(),B(a(ke),{"pt:root:class":"flex! flex-col h-full justify-between","pt:content-container:class":"flex! flex-col flex-1","pt:content:class":"flex-1"},ie({header:b(()=>[l("div",Ve,[l("div",Ae,h(a(s)("product_catalog")),1),l("div",Ee,[n(a(ye),{modelValue:V.value,"onUpdate:modelValue":[t[0]||(t[0]=e=>V.value=e),K],options:m.value,"option-label":"name",placeholder:a(s)("choose_data",{data:a(s)("category")}),class:"w-full md:w-auto"},null,8,["modelValue","options","placeholder"]),n(a(be),{class:"w-full"},{default:b(()=>[n(a(Ce),{class:"pi pi-search"}),n(a(Pe),{modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=e=>g.value=e),type:"search",placeholder:a(s)("search_data",{data:a(s)("product")}),class:"w-full",onKeyup:ne(I,["enter"])},null,8,["modelValue","placeholder"])]),_:1}),l("div",Se,[n(a(O),{icon:"pi pi-bars",outlined:"",severity:a(f)==="list"?"primary":"secondary",onClick:t[2]||(t[2]=e=>f.value="list")},null,8,["severity"]),n(a(O),{icon:"pi pi-th-large",outlined:"",severity:a(f)==="grid"?"primary":"secondary",onClick:t[3]||(t[3]=e=>f.value="grid")},null,8,["severity"])])])])]),default:b(()=>[l("div",Be,[a(d).length?(r(),u(R,{key:0},[a(f)==="grid"?(r(),u("div",De,[(r(!0),u(R,null,N(a(d),(e,E)=>{var v,_,y;return r(),u("div",{key:E,class:"flex cursor-pointer flex-col justify-between rounded-xl border border-gray-200 p-4 shadow-sm",onClick:G=>U(e)},[(_=(v=e.images)==null?void 0:v[0])!=null&&_.url?(r(),u("img",{key:0,src:e.images[0].url,alt:e.name,class:"aspect-square object-cover"},null,8,Te)):D("",!0),l("div",Fe,[l("div",Le,h(e.name),1),l("div",Ue,h((y=e.catalog_product_category)==null?void 0:y.name),1)]),n(z,{item:e,"cart-type":"inquiry",class:"mt-4"},null,8,["item"])],8,Re)}),128))])):(r(),u("div",Me,[(r(!0),u(R,null,N(a(d),(e,E)=>{var v,_,y;return r(),u("div",{key:E,class:"hover:bg-surface-100 flex w-full cursor-pointer flex-col gap-4 p-4 sm:flex-row",onClick:G=>U(e)},[(_=(v=e.images)==null?void 0:v[0])!=null&&_.url?(r(),u("img",{key:0,src:e.images[0].url,alt:e.name,class:"aspect-square h-full w-full max-w-[100px] rounded object-cover"},null,8,Oe)):D("",!0),l("div",ze,[l("div",null,[l("div",Ie,h(e.name),1),l("div",Ke,h((y=e.catalog_product_category)==null?void 0:y.name),1)])]),l("div",Ge,[n(z,{item:e,"cart-type":"inquiry"},null,8,["item"])])],8,Ne)}),128))]))],64)):a(p)?(r(),B(ve,{key:1})):a(q)?(r(),B(ge,{key:2})):D("",!0)])]),_:2},[a(k)?{name:"footer",fn:b(()=>[n(_e,{meta:a(k)},null,8,["meta"])]),key:"0"}:void 0]),1024))}}),ct=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"}));export{je as C,ct as P,qe as u};
