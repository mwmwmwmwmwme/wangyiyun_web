"use strict";(self["webpackChunkwangyiyun_web"]=self["webpackChunkwangyiyun_web"]||[]).push([[934],{4376:function(e,s,t){t.d(s,{Fk:function(){return f},I3:function(){return r},XI:function(){return o},d4:function(){return u},dX:function(){return c},e_:function(){return g},hi:function(){return i},mf:function(){return a},n1:function(){return p},nz:function(){return l},rC:function(){return d}});var n=t(7344);function i(e,s,t){return(0,n.Z)({method:"GET",url:`/search?keywords=${e}}&type=1&limit=${s}&offset=${t}`})}function a(e,s){return(0,n.Z)({method:"GET",url:`/search?keywords=${e}&type=100&limit=${20*s}`})}function o(e,s,t){return(0,n.Z)({method:"GET",url:`/search?keywords=${e}&type=10&limit=${s}&offset=${t}`})}function r(e,s,t){return(0,n.Z)({method:"GET",url:`/search?keywords=${e}&type=1014&limit=${s}&offset=${t}`})}function l(e,s,t){return(0,n.Z)({method:"GET",url:`/search?keywords=${e}&type=1000&limit=${s}&offset=${t}`})}function c(e,s,t){return(0,n.Z)({method:"GET",url:`/search?keywords=${e}&type=1006&limit=${s}&offset=${t}`})}function u(e){return(0,n.Z)({method:"GET",url:`/search?keywords=${e}&type=1009`})}function d(e,s,t){return(0,n.Z)({method:"GET",url:`/search?keywords=${e}&type=2000&limit=${s}&offset=${t}`})}function p(e,s,t){return(0,n.Z)({method:"GET",url:`/search?keywords=${e}&type=1002&limit=${s}&offset=${t}`})}function f(e,s){return(0,n.Z)({method:"GET",url:`/artist/detail?id=${e}&cookie=${s}`})}function g(e,s){return(0,n.Z)({method:"GET",url:`/artist/follow/count?id=${e}&cookie=${s}`})}},6934:function(e,s,t){t.r(s),t.d(s,{default:function(){return pe}});var n=t(1132),i=(t(4484),t(2229)),a=(t(9619),t(3396)),o=t(9242),r=t(7139);const l=e=>((0,a.dD)("data-v-8508c986"),e=e(),(0,a.Cn)(),e),c={class:"searchLyric"},u=(0,a.Uk)("载入中..."),d={class:"songCount"},p=(0,a.uE)('<div class="lyric_top" data-v-8508c986><div class="title" data-v-8508c986><span data-v-8508c986>音乐标题</span></div><div class="singer" data-v-8508c986><span data-v-8508c986>歌手</span></div><div class="album" data-v-8508c986><span data-v-8508c986>专辑</span></div><div class="duration" data-v-8508c986><span data-v-8508c986>时长</span></div><div class="heat" data-v-8508c986><span data-v-8508c986>热度</span></div></div>',1),f={class:"lyrics"},g={class:"songInfo"},m={class:"songTitle"},y={class:"no"},h=l((()=>(0,a._)("svg",{class:"icon aixin","aria-hidden":"true"},[(0,a._)("use",{"xlink:href":"#icon-aixin"})],-1))),v=l((()=>(0,a._)("svg",{class:"icon xiazai1","aria-hidden":"true"},[(0,a._)("use",{"xlink:href":"#icon-xiazai1"})],-1))),_={class:"songNameBox"},k={class:"songName"},w={key:0,class:"brackets"},$={class:"songAlia"},x={key:1,class:"vertical"},b={class:"transName"},C={key:2,class:"brackets"},D={key:3,class:"tag vipTag"},T=l((()=>(0,a._)("span",null,"VIP",-1))),B=[T],S=["onClick"],I=l((()=>(0,a._)("span",null,"MV",-1))),L=l((()=>(0,a._)("svg",{class:"icon","aria-hidden":"true"},[(0,a._)("use",{"xlink:href":"#icon-yousanjiao"})],-1))),V=[I,L],z={class:"songSinger"},E={class:"singer"},Z=["innerHTML"],H={key:1,class:"diagonal"},P={class:"songAlbum"},K={class:"songDuration"},G=l((()=>(0,a._)("div",{class:"songHeatDegree"},[(0,a._)("div",{class:"progress_box"},[(0,a._)("div",{class:"progress"})])],-1))),W={class:"buttons"},q={class:"buttons1"},M=["onClick"],N=l((()=>(0,a._)("span",null,"展开歌词",-1))),Y=[N],F=["onClick"],A=l((()=>(0,a._)("span",null,"收起歌词",-1))),X=[A],U=l((()=>(0,a._)("span",null,"复制歌词",-1))),j=[U],O=["onClick"],Q=l((()=>(0,a._)("span",null,"展开歌词",-1))),R=[Q],J=["onClick"],ee=l((()=>(0,a._)("span",null,"收起歌词",-1))),se=[ee],te=l((()=>(0,a._)("div",{class:"copyButton"},[(0,a._)("span",null,"复制歌词")],-1))),ne={class:"copyTips",ref:"copyTips"},ie=l((()=>(0,a._)("span",null,"已复制到剪贴板",-1))),ae=[ie];function oe(e,s,t,l,T,I){const L=i.g,N=n.t;return(0,a.wg)(),(0,a.iD)("div",c,[(0,a.wy)((0,a.Wm)(L,{vertical:"",type:"spinner"},{default:(0,a.w5)((()=>[u])),_:1},512),[[o.F8,1==T.isLoading]]),(0,a._)("div",d,"找到"+(0,r.zw)(T.songCount)+"首歌词",1),p,(0,a._)("div",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(T.songs,((t,n)=>((0,a.wg)(),(0,a.iD)("div",{class:"lyric",key:t.id},[(0,a._)("div",g,[(0,a._)("div",m,[(0,a._)("div",y,(0,r.zw)(I.formatIndex(n+1+T.offset)),1),h,v,(0,a._)("div",_,[(0,a._)("span",k,(0,r.zw)(t.name),1),""!=t.alias||t.transNames?((0,a.wg)(),(0,a.iD)("span",w,"(")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.alias,((e,s)=>((0,a.wg)(),(0,a.iD)("span",{class:"songAlias",key:s},[(0,a._)("span",$,(0,r.zw)(e),1)])))),128)),""!=t.alias&&t.transNames?((0,a.wg)(),(0,a.iD)("span",x,"|")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.transNames,((e,s)=>((0,a.wg)(),(0,a.iD)("span",{class:"transNames",key:s},[(0,a._)("span",b,(0,r.zw)(e),1)])))),128)),""!=t.alias||t.transNames?((0,a.wg)(),(0,a.iD)("span",C,")")):(0,a.kq)("",!0),1==t.fee?((0,a.wg)(),(0,a.iD)("div",D,B)):(0,a.kq)("",!0),0!==t.mvid?((0,a.wg)(),(0,a.iD)("div",{key:4,class:"tag mvTag",onClick:e=>I.goVideoPlayer(t.mvid)},V,8,S)):(0,a.kq)("",!0)])]),(0,a._)("div",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.artists,((s,n)=>((0,a.wg)(),(0,a.iD)("span",{key:n},[(0,a._)("span",E,(0,r.zw)(I.activeSinger(s.name)),1),1==this.isVHtmlSinger?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"singer",innerHTML:e.vHtmlSinger},null,8,Z)):(0,a.kq)("",!0),n<t.artists.length-1?((0,a.wg)(),(0,a.iD)("span",H,"/")):(0,a.kq)("",!0)])))),128))]),(0,a._)("div",P,[(0,a._)("span",null,(0,r.zw)(t.album.name),1)]),(0,a._)("div",K,[(0,a._)("span",null,(0,r.zw)(I.formatDuration(t.duration)),1)]),G]),(0,a._)("div",{class:"lyricInfo",ref_for:!0,ref:"lyricInfo"},[(0,a._)("div",{class:"lyricBox",ref_for:!0,ref:"lyricBox"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(I.formatLyric(t.lyrics.txt),((e,s)=>((0,a.wg)(),(0,a.iD)("p",{key:s},(0,r.zw)(e),1)))),128))],512),(0,a._)("div",W,[(0,a._)("div",q,[(0,a._)("div",{class:"openButton",ref_for:!0,ref:"openButton1",onClick:e=>I.openLyrics(n)},Y,8,M),(0,a._)("div",{class:"closeButton",ref_for:!0,ref:"closeButton1",onClick:e=>I.closeLyrics(n)},X,8,F),(0,a._)("div",{class:"copyButton",onClick:s[0]||(s[0]=(...e)=>I.copyLyrics&&I.copyLyrics(...e))},j)]),(0,a._)("div",{class:"buttons2",ref_for:!0,ref:"buttons2"},[(0,a._)("div",{class:"openButton",ref_for:!0,ref:"openButton2",onClick:e=>I.openLyrics(n)},R,8,O),(0,a._)("div",{class:"closeButton",ref_for:!0,ref:"closeButton2",onClick:e=>I.closeLyrics(n)},se,8,J),te],512)])],512)])))),128))]),(0,a.Wm)(N,{class:"pagination",onChange:I.pageChange,modelValue:T.currentPage,"onUpdate:modelValue":s[1]||(s[1]=e=>T.currentPage=e),"prev-text":"<","next-text":">","total-items":T.songCount,"show-page-size":9,"items-per-page":T.limit,"force-ellipses":""},null,8,["onChange","modelValue","total-items","items-per-page"]),(0,a._)("div",ne,ae,512)])}var re=t(4239),le=t(4376),ce={data(){return{isLoading:1,limit:20,offset:0,currentPage:1,songCount:0,num:1,songs:[],searchKey:""}},mounted(){this.searchKey=re.Z.state.searchKey,sessionStorage.getItem("searchKey")&&this.getSearchLyric()},methods:{async getSearchLyric(){const e=await(0,le.dX)(sessionStorage.getItem("searchKey"),this.limit,this.offset);this.songs=e.data.result.songs,this.songCount=e.data.result.songCount,0!==this.songs.length&&(this.isLoading=0)},pageChange(){this.offset=(this.currentPage-1)*this.limit,this.getSearchLyric()},formatIndex(e){return this.$formatIndex(e)},activeSinger(e){let s=new RegExp(this.searchKey,"g"),t='<span style="color: rgb(27, 94, 195)">'+this.searchKey+"</span>";return e=e.replace(s,t),-1==e.indexOf(this.searchKey)?(this.isVHtmlSinger=0,e):(this.isVHtmlSinger=1,this.vHtmlSinger=e,"")},formatDuration(e){return this.$formatDuration(e)},formatLyric(e){let s;return s=e.split(/[(\r\n)\r\n]+/),s},openLyrics(e){this.$refs.openButton1[e].style.display="none",this.$refs.openButton2[e].style.display="none",this.$refs.closeButton1[e].style.display="block",this.$refs.closeButton2[e].style.display="block",this.$refs.lyricInfo[e].style.height="auto",this.$refs.buttons2[e].style.display="flex",this.$refs.buttons2[e].style.marginTop=this.$refs.lyricBox[e].offsetHeight-60+"px"},closeLyrics(e){this.$refs.openButton1[e].style.display="block",this.$refs.openButton2[e].style.display="block",this.$refs.closeButton1[e].style.display="none",this.$refs.closeButton2[e].style.display="none",this.$refs.lyricInfo[e].style.height="86px"},copyLyrics(){this.$refs.copyTips.style.opacity="1",setTimeout((()=>this.$refs.copyTips.style.opacity="0"),1e3)},goVideoPlayer(e){this.$router.push({path:"/VideoPlayer",query:{mvid:e,type:1}})}}},ue=t(89);const de=(0,ue.Z)(ce,[["render",oe],["__scopeId","data-v-8508c986"]]);var pe=de},1132:function(e,s,t){t.d(s,{t:function(){return y}});var n=t(1404),i=t(3396),a=t(610),o=t(5323),r=t(6048);const l="van-hairline",c=`${l}--surround`,[u,d,p]=(Symbol("van-form"),(0,a["do"])("pagination")),f=(e,s,t)=>({number:e,text:s,active:t}),g={mode:(0,o.SQ)("multi"),prevText:String,nextText:String,pageCount:(0,o.SI)(0),modelValue:(0,o.qM)(0),totalItems:(0,o.SI)(0),showPageSize:(0,o.SI)(5),itemsPerPage:(0,o.SI)(10),forceEllipses:Boolean};var m=(0,i.aZ)({name:u,props:g,emits:["change","update:modelValue"],setup(e,{emit:s,slots:t}){const n=(0,i.Fl)((()=>{const{pageCount:s,totalItems:t,itemsPerPage:n}=e,i=+s||Math.ceil(+t/+n);return Math.max(1,i)})),a=(0,i.Fl)((()=>{const s=[],t=n.value,i=+e.showPageSize,{modelValue:a,forceEllipses:o}=e;let r=1,l=t;const c=i<t;c&&(r=Math.max(a-Math.floor(i/2),1),l=r+i-1,l>t&&(l=t,r=l-i+1));for(let e=r;e<=l;e++){const t=f(e,e,e===a);s.push(t)}if(c&&i>0&&o){if(r>1){const e=f(r-1,"...");s.unshift(e)}if(l<t){const e=f(l+1,"...");s.push(e)}}return s})),o=(t,i)=>{t=(0,r.uZ)(t,1,n.value),e.modelValue!==t&&(s("update:modelValue",t),i&&s("change",t))};(0,i.m0)((()=>o(e.modelValue)));const l=()=>(0,i.Wm)("li",{class:d("page-desc")},[t.pageDesc?t.pageDesc():`${e.modelValue}/${n.value}`]),u=()=>{const{mode:s,modelValue:n}=e,a=t["prev-text"],r=1===n;return(0,i.Wm)("li",{class:[d("item",{disabled:r,border:"simple"===s,prev:!0}),c]},[(0,i.Wm)("button",{type:"button",disabled:r,onClick:()=>o(n-1,!0)},[a?a():e.prevText||p("prev")])])},g=()=>{const{mode:s,modelValue:a}=e,r=t["next-text"],l=a===n.value;return(0,i.Wm)("li",{class:[d("item",{disabled:l,border:"simple"===s,next:!0}),c]},[(0,i.Wm)("button",{type:"button",disabled:l,onClick:()=>o(a+1,!0)},[r?r():e.nextText||p("next")])])},m=()=>a.value.map((e=>(0,i.Wm)("li",{class:[d("item",{active:e.active,page:!0}),c]},[(0,i.Wm)("button",{type:"button","aria-current":e.active||void 0,onClick:()=>o(e.number,!0)},[t.page?t.page(e):e.text])])));return()=>(0,i.Wm)("nav",{role:"navigation",class:d()},[(0,i.Wm)("ul",{class:d("items")},[u(),"simple"===e.mode?l():m(),g()])])}});const y=(0,n.n)(m)},4484:function(e,s,t){t(1958)}}]);
//# sourceMappingURL=934.b0fb8d1f.js.map