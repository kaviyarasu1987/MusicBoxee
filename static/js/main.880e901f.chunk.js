(this.webpackJsonpmusicboxbackend=this.webpackJsonpmusicboxbackend||[]).push([[0],{404:function(e,t,n){e.exports=n(523)},408:function(e,t,n){},409:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},410:function(e,t,n){},523:function(e,t,n){"use strict";n.r(t);var r=n(16),o=n.n(r),c=(n(408),n(0)),i=n.n(c),s=(n(409),n(410),n(92)),a=n.n(s),u=(n(199),n(200),n(100)),l=n.n(u),d=n(95),p=n.n(d),f=n(99),m=n.n(f),h=n(63),b=n.n(h),y=n(97),g=n.n(y),v=n(98),E=n.n(v),L=n(104),T=n.n(L),S=n(94),O=n.n(S),I=n(96),x=n.n(I),w=n(101),_=n.n(w),A=n(102),C=n.n(A),R=n(103),j=n.n(R),D=n(118),U=n.n(D),k=n(352),M=n(276),P=n.n(M);P.a.initializeApp({apiKey:"AIzaSyCEm7vA-msgcnmh0zmGMQRpwygZs5QI_-c",authDomain:"musicbox-b9c5e.firebaseapp.com",databaseURL:"https://musicbox-b9c5e.firebaseio.com",projectId:"musicbox-b9c5e",storageBucket:"musicbox-b9c5e.appspot.com",messagingSenderId:"165520597198",appId:"1:165520597198:web:e0022ea222fa058752709f"});var W=P.a,Y=W.firestore();Object(k.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));var G=Object(k.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function N(e){G();return i.a.createElement("div",{style:{float:"left",color:"blue",width:"95%",paddingLeft:"20px"}},i.a.createElement("h1",null,"Music List"),i.a.createElement(a.a,{title:"Music List",icons:{Check:O.a,DetailPanel:b.a,Export:p.a,Filter:x.a,FirstPage:g.a,LastPage:E.a,NextPage:b.a,PreviousPage:m.a,Search:l.a,ThirdStateCheck:_.a,Delete:C.a,Edit:j.a,Add:T.a,Clear:U.a},columns:[{title:"Name",type:"text",field:"albumName"},{title:"Lyric Description",type:"text",field:"lyricsDescription"},{title:"Lyric Text",type:"text",field:"lyricsText"},{title:"Lyric Value",type:"text",field:"lyricsValue"},{title:"Speed",type:"numeric",field:"lyricSpeed"},{title:"Video/Audio",type:"text",field:"lyricImageURI"}],data:e.musicSource.lyricsmaster.map((function(e){return Object.assign({},e)})),editable:{onRowAdd:function(t){return new Promise((function(n,r){setTimeout((function(){return t.lyricsValue?t.lyricsText?t.lyricsDescription?t.albumName?t.lyricsValue.split(" ").length!=t.lyricsText.split(" ").length?(alert("Lyric value and text spaces should be same"),void r()):(e.musicSource.oncreate(t,"Lyrics","INSERT_LYRICS",e.musicSource),void n()):(alert("Lyric name should not be empty"),void r()):(alert("Lyric descrypton should not be empty"),void r()):(alert("Lyric text should not be empty"),void r()):(alert("Lyric value should not be empty"),void r())}),600)}))},onRowUpdate:function(t,n){return new Promise((function(r,o){return t.lyricsValue?t.lyricsText?t.lyricsDescription?t.albumName?t.lyricsValue.split(" ").length!=t.lyricsText.split(" ").length?(alert("Lyric value and text spaces should be same"),void o()):void setTimeout((function(){r(),e.musicSource.onupdate(t,"MusicList","UPDATE_LYRICS_MASTER",n)}),600):(alert("Lyric name should not be empty"),void o()):(alert("Lyric descrypton should not be empty"),void o()):(alert("Lyric text should not be empty"),void o()):(alert("Lyric value should not be empty"),void o())}))},onRowDelete:function(t){return new Promise((function(n){e.musicSource.lyricsmaster.splice(t.tableData.id,1),setTimeout((function(){n(),e.musicSource.ondelete(t,"MusicList","GET_MUSIC_LIST",e.musicSource.lyricsmaster)}),600)}))},onSelectionChange:function(e){return new Promise((function(e){setTimeout((function(){e()}),600)}))}}}))}n(366),n(519),Object(k.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));n(556),Object(k.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));var B=n(105);var V=Object(B.b)((function(e,t){return console.log("state params"+e),{type:e.type,albums:e.albums,woods:e.woods,lyrics:e.lyrics,currentWoodIndex:e.currentWoodIndex,currentAlbumIndex:e.currentAlbumIndex,lyricsmaster:e.lyricsmaster,initialLoad:!0}}),(function(e,t){return{oncreate:function(t,n,r,o){return e(function(e,t,n,r){return function(t){var o={};o="CREATE_WOOD"==n?e:r.woods[r.currentWoodIndex],"INSERT_LYRICS"!=n?Y.collection("Users").add(o).then((function(){t({type:n,response:e})})).catch((function(e){!0})):Y.collection("MusicList").doc().set(e).then((function(){t({type:n,response:e})})).catch((function(e){!0}))}}(t,0,r,o))},onupdate:function(t,n,r,o,c){return e(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){Y.collection(t[1]).doc(t[3].id?t[3].id:t[0].id).update(t[0]).then((function(){e({type:t[2],response:t[0]})})).catch((function(e){}))}}(t,n,r,o,c))},onget:function(t,n){return e(function(e,t){return function(n){Y.collection(e).get().then((function(e){var r=e.docs.map((function(e){var t={};return t.id=e.id,Object.assign(t,e.data()),t}));console.log(r),n({type:t,response:r})})).catch((function(e){alert("error occured")}))}}(t,n))},onselect:function(t,n,r){return e(function(e,t,n){return function(r){r({type:t,response:{selectedDocument:n,selectedIndex:e}})}}(t,n,r))},ondelete:function(t,n,r,o){return e(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){Y.collection(t[1]).doc(t[3].id?t[3].id:t[0].id).delete().then((function(n){e({type:t[2],response:t[3]})})).catch((function(e){}))}}(t,n,r,o))}}}))((function(e){return Object(c.useEffect)((function(){e.onget("MusicList","GET_MUSIC_LIST")}),[e.initialLoad]),i.a.createElement("div",{className:"App"},i.a.createElement(N,{musicSource:e}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(393),F=n(56);n(520);var J=Object(F.c)({type:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LYRICS":return"GET_LYRICS";case"UPDATE_LYRICS":return"UPDATE_LYRICS";case"CREATE_LYRICS":return"CREATE_LYRICS";default:return e}},woods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WOOD":return t.response?(e=t.response,Object.assign([],e)):e;case"UPDATE_WOOD":return t.response&&e.forEach((function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];r[0].id==t.oldObject.id&&(e[r[1]]=t.response)})),Object.assign([],e);case"CREATE_WOOD":return t.response?(e.push(t.response),Object.assign([],e)):[];case"DELETE_WOOD":return t.response?(e.forEach((function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];r[0].name==t.oldObject.name&&e.splice(r[1],1)})),Object.assign([],e)):[];default:return e}},albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALBUM":return[];case"UPDATE_ALBUM":return e=t.oldObject,Object.assign([],e);case"CREATE_ALBUM":return e.push(t.response),Object.assign([],e);case"SELECT_WOOD":e=t.response.selectedDocument;for(var n=0;n<e.length;n++)e[n].albumDate&&e[n].albumDate.seconds&&(e[n].albumDate=new Date(1e3*e[n].albumDate.seconds));return Object.assign([],e);default:return e}},lyrics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LYRICS":return t.response?t.response:[];case"UPDATE_LYRICS_MASTER":return e=t.oldObject,Object.assign([],e);case"CREATE_LYRICS":return t.response?(e.push(t.response),Object.assign([],e)):Object.assign([],e);case"SELECT_ALBUM":return e=t.response.selectedDocument,Object.assign([],e);default:return e}},currentWoodIndex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_WOOD":return e=t.response.selectedIndex;default:return e}},currentAlbumIndex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_ALBUM":return e=t.response.selectedIndex;default:return e}},lyricsmaster:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_LYRICS":return t.response?(e.push(t.response),Object.assign([],e)):Object.assign([],e);case"GET_MUSIC_LIST":return t.response?(e=t.response,Object.assign([],e)):e;case"UPDATE_LYRICS_MASTER":if(t.response){var n=e.findIndex((function(e){return e.id==t.response.id}));return e[n]=t.response,Object.assign([],e)}return e;default:return e}}}),Q=Object(F.d)(Object(F.a)(z.a)),K=Object(F.e)(J,Q);console.log(K.getState()),o.a.render(i.a.createElement(B.a,{store:K},i.a.createElement(V,{aRandomprops:"check"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[404,1,2]]]);
//# sourceMappingURL=main.880e901f.chunk.js.map