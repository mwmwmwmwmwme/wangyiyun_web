"use strict";(self["webpackChunkwangyiyun_web"]=self["webpackChunkwangyiyun_web"]||[]).push([[10],{4376:function(e,t,i){i.d(t,{Fk:function(){return g},I3:function(){return r},XI:function(){return o},d4:function(){return c},dX:function(){return u},e_:function(){return d},hi:function(){return n},mf:function(){return s},n1:function(){return h},nz:function(){return l},rC:function(){return m}});var a=i(7344);function n(e,t,i){return(0,a.Z)({method:"GET",url:`/search?keywords=${e}}&type=1&limit=${t}&offset=${i}`})}function s(e,t){return(0,a.Z)({method:"GET",url:`/search?keywords=${e}&type=100&limit=${20*t}`})}function o(e,t,i){return(0,a.Z)({method:"GET",url:`/search?keywords=${e}&type=10&limit=${t}&offset=${i}`})}function r(e,t,i){return(0,a.Z)({method:"GET",url:`/search?keywords=${e}&type=1014&limit=${t}&offset=${i}`})}function l(e,t,i){return(0,a.Z)({method:"GET",url:`/search?keywords=${e}&type=1000&limit=${t}&offset=${i}`})}function u(e,t,i){return(0,a.Z)({method:"GET",url:`/search?keywords=${e}&type=1006&limit=${t}&offset=${i}`})}function c(e){return(0,a.Z)({method:"GET",url:`/search?keywords=${e}&type=1009`})}function m(e,t,i){return(0,a.Z)({method:"GET",url:`/search?keywords=${e}&type=2000&limit=${t}&offset=${i}`})}function h(e,t,i){return(0,a.Z)({method:"GET",url:`/search?keywords=${e}&type=1002&limit=${t}&offset=${i}`})}function g(e,t){return(0,a.Z)({method:"GET",url:`/artist/detail?id=${e}&cookie=${t}`})}function d(e,t){return(0,a.Z)({method:"GET",url:`/artist/follow/count?id=${e}&cookie=${t}`})}},6010:function(e,t,i){i.r(t),i.d(t,{default:function(){return H}});var a=i(1132),n=(i(4484),i(2229)),s=(i(9619),i(3396)),o=i(9242),r=i(7139),l=i(1492);const u=e=>((0,s.dD)("data-v-1d11caec"),e=e(),(0,s.Cn)(),e),c={class:"albums"},m=(0,s.Uk)("载入中..."),h={class:"albumCount"},g=["onClick"],d={class:"head_box"},p={class:"head_smallBox"},E=["src"],f=u((()=>(0,s._)("img",{src:l},null,-1))),y={class:"name"},Q={class:"songName"},A={key:0,class:"songSecName"},I={class:"artists"},C={class:"singerName"},v=["innerHTML"],S={key:1,class:"secName"};function R(e,t,i,l,u,R){const b=n.g,k=a.t,w=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s.wy)((0,s.Wm)(b,{vertical:"",type:"spinner"},{default:(0,s.w5)((()=>[m])),_:1},512),[[o.F8,1==u.isLoading]]),(0,s._)("div",h,"找到"+(0,r.zw)(u.albumCount)+"张专辑",1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.albums,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:(0,r.C_)(t==u.zero||t%2==0?"even album":"odd album"),onClick:t=>R.goDetail(e.id)},[(0,s._)("div",d,[(0,s._)("div",p,[(0,s.wy)((0,s._)("img",{src:e.picUrl,class:"head_pic"},null,8,E),[[w,e.picUrl]])]),f]),(0,s._)("div",y,[(0,s._)("div",Q,(0,r.zw)(e.name),1),0!==e.alias.length?((0,s.wg)(),(0,s.iD)("div",A,"("+(0,r.zw)(e.alias[0])+")",1)):(0,s.kq)("",!0)]),(0,s._)("div",I,[(0,s._)("span",C,(0,r.zw)(R.activeSinger(e.artist.name)),1),1==this.isVHtmlSinger?((0,s.wg)(),(0,s.iD)("span",{key:0,class:"singerName",innerHTML:u.vHtmlSinger},null,8,v)):(0,s.kq)("",!0),0!==e.artist.alia.length?((0,s.wg)(),(0,s.iD)("span",S,"("+(0,r.zw)(e.artist.alia[0])+")",1)):(0,s.kq)("",!0)])],10,g)))),128)),(0,s.Wm)(k,{class:"pagination",onChange:R.pageChange,modelValue:u.currentPage,"onUpdate:modelValue":t[0]||(t[0]=e=>u.currentPage=e),"prev-text":"<","next-text":">","total-items":u.albumCount,"show-page-size":9,"items-per-page":u.limit,"force-ellipses":""},null,8,["onChange","modelValue","total-items","items-per-page"])])}var b=i(4239),k=i(4376),w={data(){return{isLoading:1,limit:20,offset:0,currentPage:1,albums:[],zero:0,searchKey:"",albumCount:0,vHtmlSinger:"",isVHtmlSinger:0}},mounted(){this.searchKey=b.Z.state.searchKey,sessionStorage.getItem("searchKey")&&this.getSearchAlbum()},methods:{async getSearchAlbum(){let e=await(0,k.XI)(sessionStorage.getItem("searchKey"),this.limit,this.offset);this.albumCount=e.data.result.albumCount,this.albums=e.data.result.albums,0!==this.albums.length&&(this.isLoading=0)},activeSinger(e){let t=new RegExp(this.searchKey,"g"),i='<span style="color: rgb(27, 94, 195)">'+this.searchKey+"</span>";return e=e.replace(t,i),-1==e.indexOf(this.searchKey)?(this.isVHtmlSinger=0,e):(this.isVHtmlSinger=1,this.vHtmlSinger=e,"")},goDetail(e){this.$router.push({path:"/SongListDetail",query:{id:e,type:2}})},pageChange(){this.offset=(this.currentPage-1)*this.limit,this.getSearchAlbum()}}},D=i(89);const Z=(0,D.Z)(w,[["render",R],["__scopeId","data-v-1d11caec"]]);var H=Z},1492:function(e){e.exports="data:image/png;base64,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"},1132:function(e,t,i){i.d(t,{t:function(){return E}});var a=i(1404),n=i(3396),s=i(610),o=i(5323),r=i(6048);const l="van-hairline",u=`${l}--surround`,[c,m,h]=(Symbol("van-form"),(0,s["do"])("pagination")),g=(e,t,i)=>({number:e,text:t,active:i}),d={mode:(0,o.SQ)("multi"),prevText:String,nextText:String,pageCount:(0,o.SI)(0),modelValue:(0,o.qM)(0),totalItems:(0,o.SI)(0),showPageSize:(0,o.SI)(5),itemsPerPage:(0,o.SI)(10),forceEllipses:Boolean};var p=(0,n.aZ)({name:c,props:d,emits:["change","update:modelValue"],setup(e,{emit:t,slots:i}){const a=(0,n.Fl)((()=>{const{pageCount:t,totalItems:i,itemsPerPage:a}=e,n=+t||Math.ceil(+i/+a);return Math.max(1,n)})),s=(0,n.Fl)((()=>{const t=[],i=a.value,n=+e.showPageSize,{modelValue:s,forceEllipses:o}=e;let r=1,l=i;const u=n<i;u&&(r=Math.max(s-Math.floor(n/2),1),l=r+n-1,l>i&&(l=i,r=l-n+1));for(let e=r;e<=l;e++){const i=g(e,e,e===s);t.push(i)}if(u&&n>0&&o){if(r>1){const e=g(r-1,"...");t.unshift(e)}if(l<i){const e=g(l+1,"...");t.push(e)}}return t})),o=(i,n)=>{i=(0,r.uZ)(i,1,a.value),e.modelValue!==i&&(t("update:modelValue",i),n&&t("change",i))};(0,n.m0)((()=>o(e.modelValue)));const l=()=>(0,n.Wm)("li",{class:m("page-desc")},[i.pageDesc?i.pageDesc():`${e.modelValue}/${a.value}`]),c=()=>{const{mode:t,modelValue:a}=e,s=i["prev-text"],r=1===a;return(0,n.Wm)("li",{class:[m("item",{disabled:r,border:"simple"===t,prev:!0}),u]},[(0,n.Wm)("button",{type:"button",disabled:r,onClick:()=>o(a-1,!0)},[s?s():e.prevText||h("prev")])])},d=()=>{const{mode:t,modelValue:s}=e,r=i["next-text"],l=s===a.value;return(0,n.Wm)("li",{class:[m("item",{disabled:l,border:"simple"===t,next:!0}),u]},[(0,n.Wm)("button",{type:"button",disabled:l,onClick:()=>o(s+1,!0)},[r?r():e.nextText||h("next")])])},p=()=>s.value.map((e=>(0,n.Wm)("li",{class:[m("item",{active:e.active,page:!0}),u]},[(0,n.Wm)("button",{type:"button","aria-current":e.active||void 0,onClick:()=>o(e.number,!0)},[i.page?i.page(e):e.text])])));return()=>(0,n.Wm)("nav",{role:"navigation",class:m()},[(0,n.Wm)("ul",{class:m("items")},[c(),"simple"===e.mode?l():p(),d()])])}});const E=(0,a.n)(p)},4484:function(e,t,i){i(1958)}}]);
//# sourceMappingURL=10.2a4656ba.js.map