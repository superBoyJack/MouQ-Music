(function(e){function t(t){for(var i,o,l=t[0],r=t[1],c=t[2],u=0,g=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);d&&d(t);while(g.length)g.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(i=!1)}i&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={app:0},s=[];function o(e){return l.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"50472ddd"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=a[e]=[t,i]}));t.push(n[2]=i);var s,r=document.createElement("script");r.charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.src=o(e);var c=new Error;s=function(t){r.onerror=r.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,n[1](c)}a[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:r})}),12e4);r.onerror=r.onload=s,document.head.appendChild(r)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("d9a3"),n("c9db"),n("de3e"),n("618d");var i=n("2ca7"),a=n.n(i),s=(n("46c6"),n("a59a")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("解析歌单")]),e._v(" | "),n("router-link",{attrs:{to:"/help"}},[e._v("帮助")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("关于")])],1),n("router-view")],1)},l=[],r=(n("5c0b"),n("623f")),c={},u=Object(r["a"])(c,o,l,!1,null,null,null),d=u.exports,g=n("82ae"),f=n.n(g),p=n("e7aa"),h=n.n(p);n("c69f");s["default"].use(a.a);n("3a20");var m=n("1bee"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("PlayList")],1)},y=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-main",[n("el-row",[n("el-col",{attrs:{xs:24,sm:18,md:14,lg:10,id:"main"}},[n("label",[e._v("请粘贴某Q音乐歌单链接或者id：")]),n("el-input",{attrs:{clearable:"",placeholder:"请输入歌单链接或者id"},on:{input:e.formatLink},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}}),n("el-button",{staticClass:"btn-auto",attrs:{type:"primary",icon:"el-icon-search",plain:"",loading:e.loading},on:{click:e.search}},[e._v("解析")]),null!=e.listinfo?n("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"info-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(e.listinfo.name)+" 来自:"+e._s(e.listinfo.user)+" 共有:"+e._s(e.listinfo.total)+"首歌")])]),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("el-row",[e.aplayermusic.show?n("aplayer",{ref:"aplayer",attrs:{music:e.aplayermusic,autoplay:"",repeat:"repeat-one"}}):e._e()],1)],1)],1):e._e(),[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tablesonglist,align:"left"},on:{"row-click":e.rowClick,"row-dblclick":e.rowClick,"cell-mouse-enter":e.mouseEnter,"cell-mouse-leave":e.mouseLeave,"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"50"}}),n("el-table-column",{attrs:{prop:"name",label:"歌名"}}),n("el-table-column",{attrs:{prop:"singer",label:"歌手"}}),n("el-table-column",{attrs:{width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.tablesonglist[t.$index].size,placement:"left"}},[n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-download",plain:"",circle:""},on:{click:function(n){return e.download(t.$index)}}})],1),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.tablesonglist[t.$index].playShow,expression:"tablesonglist[a.$index].playShow"}],attrs:{size:"small",icon:"el-icon-video-play",plain:"",circle:""},on:{click:function(n){return e.startPlayOrPause(e.tablesonglist[t.$index].mid,e.tablesonglist[t.$index].name,e.tablesonglist[t.$index].singer)}}})]}}])},[n("template",{slot:"header"},[n("el-button",{attrs:{type:"primary",plain:"",disabled:e.disabledChoose},on:{click:e.downloadChoose}},[e._v("下载选中")])],1)],2)],1)]],2)],1)],1),n("el-footer")],1)},w=[],x=(n("af82"),n("4045"),n("c1f4"),n("c1b0"),n("c354"),n("1c77"),n("9a14"),"tabale-vuejs"),k="listinfo",O={fetch:function(){return JSON.parse(window.localStorage.getItem(x)||"[]")},save:function(e){window.localStorage.setItem(x,JSON.stringify(e))},getsonglist:function(){return JSON.parse(window.localStorage.getItem(x)||"[]")},getinfo:function(){return JSON.parse(window.localStorage.getItem(k)||null)},updatainfo:function(e){window.localStorage.setItem(k,JSON.stringify(e))}},S=(n("3c4a"),n("f1ac")),_={formatSize:function(e){var t="";t=e<1024?e.toFixed(2)+"B":e<1048576?(e/1024).toFixed(2)+"KB":e<1073741824?(e/1048576).toFixed(2)+"MB":(e/1073741824).toFixed(2)+"GB";var n=t+"",i=n.indexOf("."),a=n.substr(i+1,2);return"00"==a?n.substring(0,i)+n.substr(i+3,2):n},makeNameInfo:function(e){S.writeFile("info.json",e,"utf8",(function(e){if(e)return console.log(e),!1;console.log("信息文件写入成功")}))},getIndexInArray:function(e,t){var n=e.length;while(n--)if(e[n]===t)return n;return!1}},C=n("f197"),z=n.n(C),j={name:"PlayList",components:{aplayer:z.a},data:function(){return{link:"",playlistid:"",song:{id:"",mid:"",name:"",singer:"",album:"",type:"",size:""},songlist:[],Selection:[],loading:!1,disabledChoose:!0,audiosrc:null,audio:{playing:!1},aplayermusic:{show:!1},playingmid:null,tablesonglist:O.getsonglist(),listinfo:O.getinfo()}},methods:{formatLink:function(){var e,t;-1!=this.link.indexOf("i.y.qq.com")?(e=this.link.indexOf("id="),t=this.link.indexOf("&ADTAG"),this.playlistid=-1!=t?this.link.slice(e+3,t):this.link.slice(e+3)):-1!=this.link.indexOf("y.qq.com")?(e=this.link.indexOf("/playlist/"),t=this.link.indexOf(".html"),this.playlistid=this.link.slice(e+10,t)):this.playlistid=this.link},search:function(){var e=this;e.loading=!0,this.axios.get("https://api.qq.jsososo.com/songlist",{params:{id:this.playlistid}}).then((function(t){if(e.loading=!1,500!=t.data.result)if("{}"!==JSON.stringify(t.data.data)){e.$message({showClose:!0,message:"解析成功",type:"success"}),e.tablesonglist.splice(0,e.tablesonglist.length),e.loading=!1,e.listinfo={name:t.data.data.dissname,user:t.data.data.nick,logo:t.data.data.logo,headurl:t.data.data.headurl,total:t.data.data.total_song_num};for(var n=t.data.data.songlist.length,i={},a=0;a<n;a++){e.songlist=t.data.data.songlist,e.song={id:e.songlist[a].songid,mid:e.songlist[a].songmid,name:e.songlist[a].songname,album:e.songlist[a].albumname,playShow:!1};for(var s=0;s<e.songlist[a].singer.length;s++)e.song.singer=0!=s?e.song.singer+" / "+e.songlist[a].singer[s].name:e.songlist[a].singer[s].name;0!=e.songlist[a].sizeflac?(e.song.type="flac",e.song.size=e.songlist[a].sizeflac):0!=e.songlist[a].sizeape?(e.song.type="ape",e.song.size=e.songlist[a].sizeape):0!=e.songlist[a].size320||0!=e.songlist[a].size128?(e.song.type="128",e.song.size=e.songlist[a].size128):(e.song.type=null,e.song.size=0),i[e.songlist[a].songmid]=e.songlist[a].songname+"-"+e.song.singer,e.song.size=_.formatSize(e.song.size),e.tablesonglist.push(e.song),e.song={id:"",mid:"",name:"",singer:"",album:"",type:"",size:""}}}else e.$message({showClose:!0,message:"未能解析到歌单,请检查输入是否正确",type:"warning"});else e.$message({showClose:!0,message:t.data.errMsg,type:"error"})})).catch((function(t){e.loading=!1,console.log(t)}))},downloadFile:function(e,t,n){try{var i=window.require("electron").ipcRenderer;i.send("setname",t)}catch(s){}var a=document.createElement("a");a.style.display="none",a.href=e,a.setAttribute("download",t+"."+n),document.body.appendChild(a),a.click()},download:function(e){var t=this;this.axios.get("https://api.qq.jsososo.com/song/url",{params:{id:this.tablesonglist[e].mid,type:this.tablesonglist[e].type}}).then((function(n){var i=t.tablesonglist[e].name,a=t.tablesonglist[e].type;if("320"!=a&&"128"!=a||(a="mp3"),i=i+"-"+t.tablesonglist[e].singer,"undefined"!=typeof n.data.data){var s=n.data.data.indexOf(".com"),o=n.data.data;-1!=s&&t.downloadFile(o,i,a)}else t.$message({showClose:!0,message:i+"这首歌已经下架了,无能为力哦",type:"warning"})})).catch((function(e){console.log(e)}))},downloadChoose:function(){var e=this,t=this;this.$message({showClose:!0,message:"开始下载选中的"+this.Selection.length+"首歌"}),this.Selection.forEach((function(n){e.timer=setTimeout((function(){t.download(_.getIndexInArray(e.tablesonglist,n))}),200)}))},rowClick:function(e){var t=this.tablesonglist.indexOf(e),n=this.tablesonglist[t].mid,i=this.tablesonglist[t].name,a=this.tablesonglist[t].singer;this.startPlayOrPause(n,i,a)},mouseEnter:function(e){var t=this.tablesonglist.indexOf(e);this.tablesonglist[t].playShow=!0},mouseLeave:function(e){var t=this.tablesonglist.indexOf(e);this.tablesonglist[t].playShow=!1},handleSelectionChange:function(e){this.Selection=e,0==this.Selection.length?this.disabledChoose=!0:this.disabledChoose=!1},getAudioUrl:function(e){var t=this;this.axios.get("https://api.qq.jsososo.com/song/urls",{params:{id:e}}).then((function(n){var i=n.data.data[e];"undefined"!=typeof i?(t.audiosrc=i,t.playingmid=e):t.$message({showClose:!0,message:"这首歌已经找不到了,换一首听听吧",type:"warning"})})).catch((function(e){console.log(e)}))},startPlayOrPause:function(e,t,n){var i=this,a=this;a.getAudioUrl(e),clearTimeout(this.timer),this.timer=setTimeout((function(){null!=i.audiosrc&&i.play(t,n)}),1e3)},play:function(e,t){var n=this,i=this;this.aplayermusic.show=!1,this.timer=setTimeout((function(){n.aplayermusic={src:i.audiosrc,title:e,artist:t,show:!0}}),20)}},watch:{tablesonglist:{handler:function(e){O.save(e)},deep:!0},listinfo:{handler:function(e){O.updatainfo(e)},deep:!0}}},P=j,$=(n("6880"),Object(r["a"])(P,v,w,!1,null,null,null)),q=$.exports,E={name:"Home",components:{PlayList:q}},I=E,L=Object(r["a"])(I,b,y,!1,null,null,null),N=L.exports;s["default"].use(m["a"]);var T=[{path:"/",name:"Home",component:N},{path:"/help",name:"Help",component:function(){return n.e("about").then(n.bind(null,"c3ef"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/playlist",name:"PlayList",component:q}],A=new m["a"]({routes:T}),J=A;s["default"].use(a.a),s["default"].use(h.a,f.a),s["default"].use(z.a),s["default"].config.productionTip=!1,new s["default"]({router:J,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("b673"),a=n.n(i);a.a},6880:function(e,t,n){"use strict";var i=n("b4d6"),a=n.n(i);a.a},b4d6:function(e,t,n){},b673:function(e,t,n){},c69f:function(e,t,n){}});
//# sourceMappingURL=app.4d7fb721.js.map