import{u as F}from"./title-CDEYmsUA.js";import{s as j}from"./index-C7gjogKq.js";import{D as $,E as T,H as s,j as u,y as m,a as l,w as r,V as D,k,I as f,b as v,ao as E,W as U,p as P,R as O,G as L,O as V,af as K,Q as z,U as M,r as I,c as x,F as Q,m as R,e as d,t as w,d as q,f as G,h as i,l as g}from"./index-pIQTk0BI.js";import{s as J}from"./index-Ckly0Tp_.js";import{s as S}from"./index-CX9XhWue.js";import{s as W}from"./index-K4N9tHW4.js";var X={root:"p-accordioncontent",content:"p-accordioncontent-content"},Y=$.extend({name:"accordioncontent",classes:X}),Z={name:"BaseAccordionContent",extends:T,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Y,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},b={name:"AccordionContent",extends:Z,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return s(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function ee(e,n,o,a,p,t){return e.asChild?m(e.$slots,"default",{key:1,class:P(e.cx("root")),active:t.$pcAccordionPanel.active,a11yAttrs:t.a11yAttrs}):(l(),u(U,s({key:0,name:"p-toggleable-content"},e.ptm("transition",t.ptParams)),{default:r(function(){return[!t.$pcAccordion.lazy||t.$pcAccordionPanel.active?D((l(),u(f(e.as),s({key:0,class:e.cx("root")},t.attrs),{default:r(function(){return[v("div",s({class:e.cx("content")},e.ptm("content",t.ptParams)),[m(e.$slots,"default")],16)]}),_:3},16,["class"])),[[E,t.$pcAccordion.lazy?!0:t.$pcAccordionPanel.active]]):k("",!0)]}),_:3},16))}b.render=ee;var ne={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},ae=$.extend({name:"accordionheader",classes:ne}),te={name:"BaseAccordionHeader",extends:T,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:ae,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},A={name:"AccordionHeader",extends:te,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var o=this.findNextPanel(this.findPanel(n.currentTarget));o?this.changeFocusedPanel(n,o):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var o=this.findPrevPanel(this.findPanel(n.currentTarget));o?this.changeFocusedPanel(n,o):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var o=this.findFirstPanel();this.changeFocusedPanel(n,o),n.preventDefault()},onEndKey:function(n){var o=this.findLastPanel();this.changeFocusedPanel(n,o),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n==null?void 0:n.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return z(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=o?n:n.nextElementSibling;return a?K(a,"data-p-disabled")?this.findNextPanel(a):this.findHeader(a):null},findPrevPanel:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=o?n:n.previousElementSibling;return a?K(a,"data-p-disabled")?this.findPrevPanel(a):this.findHeader(a):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,o){V(this.findHeader(o))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return s(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return L({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:S,ChevronDownIcon:J},directives:{ripple:O}};function oe(e,n,o,a,p,t){var C=M("ripple");return e.asChild?m(e.$slots,"default",{key:1,class:P(e.cx("root")),active:t.$pcAccordionPanel.active,a11yAttrs:t.a11yAttrs,onClick:t.onClick}):D((l(),u(f(e.as),s({key:0,"data-p":t.dataP,class:e.cx("root"),onClick:t.onClick},t.attrs),{default:r(function(){return[m(e.$slots,"default",{active:t.$pcAccordionPanel.active}),m(e.$slots,"toggleicon",{active:t.$pcAccordionPanel.active,class:P(e.cx("toggleicon"))},function(){return[t.$pcAccordionPanel.active?(l(),u(f(t.$pcAccordion.$slots.collapseicon?t.$pcAccordion.$slots.collapseicon:t.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),s({key:0,class:[t.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",t.ptParams)),null,16,["class"])):(l(),u(f(t.$pcAccordion.$slots.expandicon?t.$pcAccordion.$slots.expandicon:t.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),s({key:1,class:[t.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",t.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[C]])}A.render=oe;var re={root:function(n){var o=n.instance,a=n.props;return["p-accordionpanel",{"p-accordionpanel-active":o.active,"p-disabled":a.disabled}]}},ce=$.extend({name:"accordionpanel",classes:re}),ie={name:"BaseAccordionPanel",extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:ce,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},y={name:"AccordionPanel",extends:ie,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return s(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function de(e,n,o,a,p,t){return e.asChild?m(e.$slots,"default",{key:1,class:P(e.cx("root")),active:t.active,a11yAttrs:t.a11yAttrs}):(l(),u(f(e.as),s({key:0,class:e.cx("root")},t.attrs),{default:r(function(){return[m(e.$slots,"default")]}),_:3},16,["class"]))}y.render=de;var se=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,le={root:"p-accordion p-component"},ue=$.extend({name:"accordion",style:se,classes:le}),pe={name:"BaseAccordion",extends:T,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:ue,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},H={name:"Accordion",extends:pe,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(n){this.d_value=n},activeIndex:{immediate:!0,handler:function(n){this.hasAccordionTab&&(this.d_value=this.multiple?n==null?void 0:n.map(String):n==null?void 0:n.toString())}}},methods:{isItemActive:function(n){var o;return this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.includes(n):this.d_value===n},updateValue:function(n){var o,a=this.isItemActive(n);this.multiple?a?this.d_value=this.d_value.filter(function(p){return p!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=a?null:n,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.map(Number):Number(this.d_value)),this.$emit(a?"tab-close":"tab-open",{originalEvent:void 0,index:Number(n)})},isAccordionTab:function(n){return n.type.name==="AccordionTab"},getTabProp:function(n,o){return n.props?n.props[o]:void 0},getKey:function(n,o){return this.getTabProp(n,"header")||o},getHeaderPT:function(n,o){var a=this;return{root:s({onClick:function(t){return a.onTabClick(t,o)}},this.getTabProp(n,"headerProps"),this.getTabPT(n,"header",o)),toggleicon:s(this.getTabProp(n,"headeractionprops"),this.getTabPT(n,"headeraction",o))}},getContentPT:function(n,o){return{root:s(this.getTabProp(n,"contentProps"),this.getTabPT(n,"toggleablecontent",o)),transition:this.getTabPT(n,"transition",o),content:this.getTabPT(n,"content",o)}},getTabPT:function(n,o,a){var p=this.tabs.length,t={props:n.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:p,first:a===0,last:a===p-1,active:this.isItemActive("".concat(a))}};return s(this.ptm("accordiontab.".concat(o),t),this.ptmo(this.getTabProp(n,"pt"),o,t))},onTabClick:function(n,o){this.$emit("tab-click",{originalEvent:n,index:o})}},computed:{tabs:function(){var n=this;return this.$slots.default().reduce(function(o,a){return n.isAccordionTab(a)?o.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(p){n.isAccordionTab(p)&&o.push(p)}),o},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:y,AccordionHeader:A,AccordionContent:b,ChevronUpIcon:S,ChevronRightIcon:W}};function he(e,n,o,a,p,t){var C=I("AccordionHeader"),B=I("AccordionContent"),N=I("AccordionPanel");return l(),x("div",s({class:e.cx("root")},e.ptmi("root")),[t.hasAccordionTab?(l(!0),x(Q,{key:0},R(t.tabs,function(c,h){return l(),u(N,{key:t.getKey(c,h),value:"".concat(h),pt:{root:t.getTabPT(c,"root",h)},disabled:t.getTabProp(c,"disabled")},{default:r(function(){return[d(C,{class:P(t.getTabProp(c,"headerClass")),pt:t.getHeaderPT(c,h)},{toggleicon:r(function(_){return[_.active?(l(),u(f(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[e.collapseIcon,_.class],"aria-hidden":"true"},{ref_for:!0},t.getTabPT(c,"headericon",h)),null,16,["class"])):(l(),u(f(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[e.expandIcon,_.class],"aria-hidden":"true"},{ref_for:!0},t.getTabPT(c,"headericon",h)),null,16,["class"]))]}),default:r(function(){return[c.children&&c.children.headericon?(l(),u(f(c.children.headericon),{key:0,isTabActive:t.isItemActive("".concat(h)),active:t.isItemActive("".concat(h)),index:h},null,8,["isTabActive","active","index"])):k("",!0),c.props&&c.props.header?(l(),x("span",s({key:1,ref_for:!0},t.getTabPT(c,"headertitle",h)),w(c.props.header),17)):k("",!0),c.children&&c.children.header?(l(),u(f(c.children.header),{key:2})):k("",!0)]}),_:2},1032,["class","pt"]),d(B,{pt:t.getContentPT(c,h)},{default:r(function(){return[(l(),u(f(c)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):m(e.$slots,"default",{key:1})],16)}H.render=he;const fe={class:"flex w-full justify-center"},ve={class:"text-center text-xl font-bold"},me={class:"m-0"},$e=q({__name:"FAQPage",setup(e){const{t:n}=G();return F(n("faq")),(o,a)=>(l(),u(i(j),{"pt:root:class":"flex! flex-col h-full justify-between","pt:content-container:class":"flex! flex-col flex-1","pt:content:class":"flex-1"},{header:r(()=>[v("div",fe,[v("div",ve,w(i(n)("faq")),1)])]),default:r(()=>[d(i(H),{value:"0"},{default:r(()=>[d(i(y),{value:"0"},{default:r(()=>[d(i(A),null,{default:r(()=>a[0]||(a[0]=[g(" Bagaimana cara melacak pesanan saya? ")])),_:1,__:[0]}),d(i(b),null,{default:r(()=>[v("p",me,[a[1]||(a[1]=g(" Setelah pesanan Anda dikonfirmasi, Anda dapat melacak status pengiriman melalui halaman ")),v("strong",null,w(i(n)("my_orders")),1),a[2]||(a[2]=g(". Nomor resi akan muncul ketika pesanan telah dikirim. "))])]),_:1})]),_:1}),d(i(y),{value:"1"},{default:r(()=>[d(i(A),null,{default:r(()=>a[3]||(a[3]=[g(" Apakah saya bisa membatalkan pesanan? ")])),_:1,__:[3]}),d(i(b),null,{default:r(()=>a[4]||(a[4]=[v("p",{class:"m-0"}," Pesanan hanya bisa dibatalkan sebelum statusnya berubah menjadi “Diproses”. Silakan hubungi tim customer service kami secepatnya untuk permintaan pembatalan. ",-1)])),_:1,__:[4]})]),_:1}),d(i(y),{value:"2"},{default:r(()=>[d(i(A),null,{default:r(()=>a[5]||(a[5]=[g(" Apa yang harus saya lakukan jika produk yang diterima rusak? ")])),_:1,__:[5]}),d(i(b),null,{default:r(()=>a[6]||(a[6]=[v("p",{class:"m-0"}," Jika produk yang Anda terima rusak, segera laporkan ke tim kami maksimal 2x24 jam setelah produk diterima dengan menyertakan foto produk dan nomor pesanan. ",-1)])),_:1,__:[6]})]),_:1}),d(i(y),{value:"3"},{default:r(()=>[d(i(A),null,{default:r(()=>a[7]||(a[7]=[g(" Metode pembayaran apa saja yang tersedia? ")])),_:1,__:[7]}),d(i(b),null,{default:r(()=>a[8]||(a[8]=[v("p",{class:"m-0"}," Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, Dana), dan kartu kredit (Visa, MasterCard). ",-1)])),_:1,__:[8]})]),_:1}),d(i(y),{value:"4"},{default:r(()=>[d(i(A),null,{default:r(()=>a[9]||(a[9]=[g(" Berapa lama proses pengiriman? ")])),_:1,__:[9]}),d(i(b),null,{default:r(()=>a[10]||(a[10]=[v("p",{class:"m-0"}," Estimasi pengiriman tergantung lokasi Anda. Untuk wilayah Jabodetabek, biasanya 1-3 hari kerja. Di luar itu bisa mencapai 5-7 hari kerja. ",-1)])),_:1,__:[10]})]),_:1})]),_:1})]),_:1}))}});export{$e as default};
