(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t(92)},89:function(e){e.exports={code:200,status:"ok",data:{results:[{id:"11111",name:"Spiderman",description:"Description of spiderman",modified:null,urls:[{type:"string",url:"http://www.marvel.com"}],thumbnail:{path:"https://www.tienda-pinturas.com/wp-content/uploads/2018/11/266.jpg",extension:"jpg"},comics:{available:2},stories:{available:2},events:{available:2},series:{available:2}},{id:"22222",name:"Hulk",description:"Description of Hulk",modified:null,urls:[{type:"string",url:"http://www.marvel.com"}],thumbnail:{path:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-increible-hulk-1554403044.jpg?resize=480:*",extension:"jpg"},comics:{available:2},stories:{available:2},events:{available:0},series:{available:2}},{id:"3333",name:"Captain America",description:"Description of Captain America",modified:null,urls:[{type:"string",url:"http://www.marvel.com"},{type:"string",url:"http://www.marvel2.com"}],thumbnail:{path:"https://www.sideshow.com/storage/product-images/300524/captain-america_marvel_gallery_5c4cf2a84e18f.jpg",extension:"jpg"},comics:{available:2},stories:{available:0},events:{available:2},series:{available:0}},{id:"4444",name:"Iron Man",description:"Description of Iron Man",modified:null,urls:[{type:"string",url:"http://www.marvel.com"}],thumbnail:{path:"https://static.posters.cz/image/1300/fotomurales/iron-man-marvel-avengers-152-5x104-cm-130g/m2-vlies-non-woven-i44208.jpg",extension:"jpg"},comics:{available:2},stories:{available:2},events:{available:2},series:{available:2}}]}}},90:function(e){e.exports={code:200,status:"ok",data:{results:{id:"4444",name:"Hulk",description:"Description of Hulk",modified:null,urls:[{type:"string",url:"http://www.marvel.com"},{type:"string",url:"http://www.marvel.com"},{type:"string",url:"http://www.marvel.com"}],thumbnail:{path:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-increible-hulk-1554403044.jpg?resize=480:*",extension:"jpg"},comics:{available:2},stories:{available:2},events:{available:2},series:{available:2}}}}},92:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(26),i=t.n(c),s=t(9),o=t(10),l=t(12),u=t(11),p=t(13),d=t(28),h=t(18),m=t(2),f=t(16),b=t(5),v=t.n(b),g=t(17),E=t(33),w=t.n(E),j=t(43),x=t.n(j),O=function(){var e=Object(g.a)(v.a.mark(function e(){var a,t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return a=y(),e.next=5,fetch("".concat("https://gateway.marvel.com/v1/public","/characters?").concat(w.a.stringify(a)));case 5:if(!(t=e.sent).ok){e.next=8;break}return e.abrupt("return",t.json());case 8:throw new Error("Failed to get characters");case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(v.a.mark(function e(a){var t,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return t=y(),e.next=5,fetch("".concat("https://gateway.marvel.com/v1/public","/characters/").concat(a,"?").concat(w.a.stringify(t)));case 5:if(!(r=e.sent).ok){e.next=8;break}return e.abrupt("return",r.json());case 8:throw new Error("Failed to get details");case 9:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),y=function(){var e=Math.floor(Date.now());return{apikey:"847f34f01b56fa82a33a08b57a2ba608",ts:e,hash:A(e)}},A=function(e){return x()(e+"ff43e5eec5defd4c66f87e17f6777e7509b7efea847f34f01b56fa82a33a08b57a2ba608")};function k(e){return{type:"CHARACTERS_IS_LOADING",isLoading:e}}function R(e){return{type:"CHARACTERS_FETCH_DATA_SUCCESS",characters:e}}var D=t(94),S=t(95),_=t(96),L=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).handleCharacterChange=function(){var e=t.props,a=e.history,r=e.character;a.push("".concat("/marvel-superheroes-demo","/").concat(r.id))},t.renderFlag=function(e){var a=t.props.character;if(a[e]&&parseInt(a[e].available)>0)return n.a.createElement("span",{className:"".concat(z)},e)},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.key,t=e.character,r=e.selected;return n.a.createElement(D.a,{key:a,className:"".concat(T," ").concat(r&&H),onClick:this.handleCharacterChange},n.a.createElement(S.a,null,n.a.createElement(_.a,{xs:12},n.a.createElement("div",{className:"".concat(N)},t.name),n.a.createElement("img",{className:"".concat(F),src:t.thumbnail.path,alt:t.name}),n.a.createElement("div",{className:"".concat(I)},this.renderFlag("comics"),this.renderFlag("stories"),this.renderFlag("events"),this.renderFlag("series"))),n.a.createElement(_.a,{xs:12})))}}]),a}(r.Component),T=Object(m.css)({borderBottom:"1px solid black",margin:"16px auto",padding:"16px 16px",cursor:"pointer","&:hover":{backgroundColor:"#f31d24"}}),H=Object(m.css)({backgroundColor:"#f31d24"}),I=Object(m.css)({margin:"8px",display:"flex",justifyContent:"space-around",width:"100%"}),F=Object(m.css)({width:"100%",textAlign:"left"}),N=Object(m.css)({fontSize:"20px"}),z=Object(m.css)({border:"1px solid black",padding:"5px 15px",marginRight:"5px",borderRadius:"5px",textTransform:"uppercase",fontSize:"12px"}),G=Object(h.e)(L),M=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=this.props,a=e.characters,t=e.details,r=e.hasErrored,c=e.isLoading;return r?n.a.createElement("p",null,"No results"):n.a.createElement(n.a.Fragment,null,!c&&n.a.createElement("div",{className:"".concat(U)},n.a.createElement("h4",null,"Marvel characters"),a&&a.map(function(e,a){return n.a.createElement(G,{key:"characters-".concat(a),character:e,selected:t&&e&&e.id===t.id})})))}}]),a}(r.Component),U=Object(m.css)({"> h4":{margin:"20px"},flexGrow:1,flexDirection:"column",backgroundColor:"#000",color:"#FFF",position:"fixed",left:0,top:0,bottom:0,width:"400px",overflowY:"scroll",boxShadow:"5px 0 6px -4px #888"}),B=Object(f.b)(function(e){return{characters:e.charactersReducer.characters,details:e.characterDetailsReducer.details,hasErrored:e.charactersReducer.hasErrored,isLoading:e.charactersReducer.isLoading}},function(e){return{fetchData:function(){return e(function(){var e=Object(g.a)(v.a.mark(function e(a){var t,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(k(!0)),e.prev=1,e.next=4,O();case 4:t=e.sent,r=t.data.results,a(R(r)),a(k(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a({type:"CHARACTERS_HAS_ERRORED",hasErrored:!0});case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(a){return e.apply(this,arguments)}}())}}})(M);function J(e){return{type:"CHARACTER_DETAILS_IS_LOADING",isLoading:e}}var P=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).componentDidUpdate=function(e){var a=t.props.match.params.characterId;a&&a!==e.match.params.characterId&&t.props.fetchData(a)},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.match.params.characterId;e&&this.props.fetchData(e)}},{key:"render",value:function(){var e=this.props,a=e.details,t=e.hasErrored,r=e.isLoading,c=e.match.params.characterId;return n.a.createElement(n.a.Fragment,null,!r&&n.a.createElement("div",{className:"".concat(W)},!c&&n.a.createElement("p",null,"Please choose a character"),t&&n.a.createElement("p",null,"Character not found"),a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,a.name),n.a.createElement("div",{className:"".concat(Y)},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"title"}),n.a.createElement("div",{className:"description"},a.description)),n.a.createElement("img",{src:a.thumbnail.path,alt:a.name})),n.a.createElement("div",null,a.urls&&a.urls.map(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:e.url,target:"blank",alt:a.name},e.url),n.a.createElement("br",null))})))))}}]),a}(r.PureComponent),W=Object(m.css)({flexGrow:1,flexDirection:"column",padding:"30px",marginLeft:"400px"}),Y=Object(m.css)({display:"inline-grid",gridTemplateRows:"auto 100%",gridColumnGap:"13px","> img":{width:"500px"},"> .content":{textAlign:"left","> .title":{fontSize:"20px"},"> .description":{fontSize:"16px"}}}),q=Object(h.e)(Object(f.b)(function(e){return{details:e.characterDetailsReducer.details,hasErrored:e.characterDetailsReducer.hasErrored,isLoading:e.characterDetailsReducer.isLoading}},function(e){return{fetchData:function(a){return e(function(e){return function(){var a=Object(g.a)(v.a.mark(function a(t){var r,n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t(J(!0)),a.prev=1,a.next=4,C(e);case 4:r=a.sent,n=r.data.results,t({type:"CHARACTER_DETAILS_FETCH_DATA_SUCCESS",details:n}),t(J(!1)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),t({type:"CHARACTER_DETAILS_HAS_ERRORED",hasErrored:!0});case 13:case"end":return a.stop()}},a,null,[[1,10]])}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(P)),K=m.css.keyframes({from:{left:"-200px",width:"30%"},"50%":{width:"30%"},"70%":{width:"70%"},"80%":{left:"50%"},"95%":{left:"120%"},to:{left:"100%"}}),Q=Object(m.css)({height:"4px",width:"100%",top:"0",right:"0",left:"0",position:"fixed",overflow:"hidden",backgroundColor:"#ddd","&:before":{display:"block",position:"absolute",content:" ",left:"-200px",width:"200px",height:"4px",backgroundColor:"#f31d24",animation:"".concat(K," 2s linear infinite")}}),V=Object(f.b)(function(e){return{isLoading:e.charactersReducer.isLoading||e.characterDetailsReducer.isLoading}},null)(function(e){return e.isLoading?n.a.createElement("div",{className:"".concat(Q)}):null}),X=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(V,null),n.a.createElement(B,null),n.a.createElement(q,null))}}]),a}(n.a.Component),Z=t(7).createBrowserHistory,$=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,{history:Z},n.a.createElement(h.a,{path:"".concat("/marvel-superheroes-demo","/:characterId?"),component:X}))}}]),a}(r.Component),ee=t(22),ae=t(46),te={hasErrored:!1,isLoading:!1,characters:[]};function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHARACTERS_HAS_ERRORED":e=Object.assign({},e,{hasErrored:a.hasErrored});break;case"CHARACTERS_IS_LOADING":e=Object.assign({},e,{isLoading:a.isLoading});break;case"CHARACTERS_FETCH_DATA_SUCCESS":e=Object.assign({},e,{characters:a.characters});break;default:return e}return e}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHARACTER_DETAILS_HAS_ERRORED":e=Object.assign({},e,{hasErrored:a.hasErrored});break;case"CHARACTER_DETAILS_IS_LOADING":e=Object.assign({},e,{isLoading:a.isLoading});break;case"CHARACTER_DETAILS_FETCH_DATA_SUCCESS":e=Object.assign({},e,{details:a.details});break;default:return e}return e}var ce,ie=Object(ee.d)(Object(ee.c)({charactersReducer:re,characterDetailsReducer:ne}),ce,Object(ee.a)(ae.a));i.a.render(n.a.createElement(f.a,{store:ie},n.a.createElement($,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.afb7e2be.chunk.js.map