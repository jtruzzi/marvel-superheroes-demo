(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t(92)},89:function(e){e.exports={code:200,status:"ok",data:{results:[{id:"11111",name:"Spiderman",description:"Description of spiderman",modified:null,urls:[{type:"string",url:"http://www.marvel.com"}],thumbnail:{path:"https://www.tienda-pinturas.com/wp-content/uploads/2018/11/266.jpg",extension:"jpg"},comics:{available:2},stories:{available:2},events:{available:2},series:{available:2}},{id:"22222",name:"Hulk",description:"Description of Hulk",modified:null,urls:[{type:"string",url:"http://www.marvel.com"}],thumbnail:{path:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-increible-hulk-1554403044.jpg?resize=480:*",extension:"jpg"},comics:{available:2},stories:{available:2},events:{available:0},series:{available:2}},{id:"3333",name:"Captain America",description:"Description of Captain America",modified:null,urls:[{type:"string",url:"http://www.marvel.com"},{type:"string",url:"http://www.marvel2.com"}],thumbnail:{path:"https://www.sideshow.com/storage/product-images/300524/captain-america_marvel_gallery_5c4cf2a84e18f.jpg",extension:"jpg"},comics:{available:2},stories:{available:0},events:{available:2},series:{available:0}},{id:"4444",name:"Iron Man",description:"Description of Iron Man",modified:null,urls:[{type:"string",url:"http://www.marvel.com"}],thumbnail:{path:"https://static.posters.cz/image/1300/fotomurales/iron-man-marvel-avengers-152-5x104-cm-130g/m2-vlies-non-woven-i44208.jpg",extension:"jpg"},comics:{available:2},stories:{available:2},events:{available:2},series:{available:2}}]}}},90:function(e){e.exports={code:200,status:"ok",data:{results:{id:"4444",name:"Hulk",description:"Description of Hulk",modified:null,urls:[{type:"string",url:"http://www.marvel.com"},{type:"string",url:"http://www.marvel.com"},{type:"string",url:"http://www.marvel.com"}],thumbnail:{path:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-increible-hulk-1554403044.jpg?resize=480:*",extension:"jpg"},comics:{available:2},stories:{available:2},events:{available:2},series:{available:2}}}}},92:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(26),i=t.n(c),s=t(9),o=t(10),l=t(12),u=t(11),p=t(13),d=t(28),h=t(18),m=t(2),f=t(16),b=t(5),v=t.n(b),g=t(17),E=t(33),w=t.n(E),j=(t(43),function(){var e=Object(g.a)(v.a.mark(function e(){var a,t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return a={apikey:"847f34f01b56fa82a33a08b57a2ba608"},e.next=5,fetch("".concat("http://gateway.marvel.com/v1/public","/characters?").concat(w.a.stringify(a)));case 5:if(!(t=e.sent).ok){e.next=8;break}return e.abrupt("return",t.json());case 8:throw new Error("Failed to get characters");case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),x=function(){var e=Object(g.a)(v.a.mark(function e(a){var t,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return t={apikey:"847f34f01b56fa82a33a08b57a2ba608"},e.next=5,fetch("".concat("http://gateway.marvel.com/v1/public","/characters/").concat(a,"?").concat(w.a.stringify(t)));case 5:if(!(r=e.sent).ok){e.next=8;break}return e.abrupt("return",r.json());case 8:throw new Error("Failed to get details");case 9:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();function O(e){return{type:"CHARACTERS_IS_LOADING",isLoading:e}}function C(e){return{type:"CHARACTERS_FETCH_DATA_SUCCESS",characters:e}}var y=t(94),A=t(95),k=t(96),R=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).handleCharacterChange=function(){var e=t.props,a=e.history,r=e.character;a.push("/marvel-superheroes-demo/".concat(r.id))},t.renderFlag=function(e){var a=t.props.character;if(a[e]&&parseInt(a[e].available)>0)return n.a.createElement("span",{className:"".concat(H)},e)},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.key,t=e.character,r=e.selected;return n.a.createElement(y.a,{key:a,className:"".concat(D," ").concat(r&&S),onClick:this.handleCharacterChange},n.a.createElement(A.a,null,n.a.createElement(k.a,{xs:12},n.a.createElement("div",{className:"".concat(T)},t.name),n.a.createElement("img",{className:"".concat(L),src:t.thumbnail.path,alt:t.name}),n.a.createElement("div",{className:"".concat(_)},this.renderFlag("comics"),this.renderFlag("stories"),this.renderFlag("events"),this.renderFlag("series"))),n.a.createElement(k.a,{xs:12})))}}]),a}(r.Component),D=Object(m.css)({borderBottom:"1px solid black",margin:"16px auto",padding:"16px 16px",cursor:"pointer","&:hover":{backgroundColor:"#f31d24"}}),S=Object(m.css)({backgroundColor:"#f31d24"}),_=Object(m.css)({margin:"8px",display:"flex",justifyContent:"space-around",width:"100%"}),L=Object(m.css)({width:"100%",textAlign:"left"}),T=Object(m.css)({fontSize:"20px"}),H=Object(m.css)({border:"1px solid black",padding:"5px 15px",marginRight:"5px",borderRadius:"5px",textTransform:"uppercase",fontSize:"12px"}),I=Object(h.e)(R),F=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=this.props,a=e.characters,t=e.details,r=e.hasErrored,c=e.isLoading;return r?n.a.createElement("p",null,"No results"):n.a.createElement(n.a.Fragment,null,!c&&n.a.createElement("div",{className:"".concat(N)},n.a.createElement("h4",null,"Marvel characters"),a&&a.map(function(e,a){return n.a.createElement(I,{key:"characters-".concat(a),character:e,selected:t&&e&&e.id===t.id})})))}}]),a}(r.Component),N=Object(m.css)({"> h4":{margin:"20px"},flexGrow:1,flexDirection:"column",backgroundColor:"#000",color:"#FFF",position:"fixed",left:0,top:0,bottom:0,width:"400px",overflowY:"scroll",boxShadow:"5px 0 6px -4px #888"}),z=Object(f.b)(function(e){return{characters:e.charactersReducer.characters,details:e.characterDetailsReducer.details,hasErrored:e.charactersReducer.hasErrored,isLoading:e.charactersReducer.isLoading}},function(e){return{fetchData:function(){return e(function(){var e=Object(g.a)(v.a.mark(function e(a){var t,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(O(!0)),e.prev=1,e.next=4,j();case 4:t=e.sent,r=t.data.results,a(C(r)),a(O(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a({type:"CHARACTERS_HAS_ERRORED",hasErrored:!0});case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(a){return e.apply(this,arguments)}}())}}})(F);function G(e){return{type:"CHARACTER_DETAILS_IS_LOADING",isLoading:e}}var M=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).componentDidUpdate=function(e){var a=t.props.match.params.characterId;a&&a!==e.match.params.characterId&&t.props.fetchData(a)},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.match.params.characterId;e&&this.props.fetchData(e)}},{key:"render",value:function(){var e=this.props,a=e.details,t=e.hasErrored,r=e.isLoading,c=e.match.params.characterId;return n.a.createElement(n.a.Fragment,null,!r&&n.a.createElement("div",{className:"".concat(U)},!c&&n.a.createElement("p",null,"Please choose a character"),t&&n.a.createElement("p",null,"Character not found"),a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,a.name),n.a.createElement("div",{className:"".concat(B)},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"title"}),n.a.createElement("div",{className:"description"},a.description)),n.a.createElement("img",{src:a.thumbnail.path,alt:a.name})),n.a.createElement("div",null,a.urls&&a.urls.map(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:e.url,target:"blank",alt:a.name},e.url),n.a.createElement("br",null))})))))}}]),a}(r.PureComponent),U=Object(m.css)({flexGrow:1,flexDirection:"column",padding:"30px",marginLeft:"400px"}),B=Object(m.css)({display:"inline-grid",gridTemplateRows:"auto 100%",gridColumnGap:"13px","> img":{width:"500px"},"> .content":{textAlign:"left","> .title":{fontSize:"20px"},"> .description":{fontSize:"16px"}}}),J=Object(h.e)(Object(f.b)(function(e){return{details:e.characterDetailsReducer.details,hasErrored:e.characterDetailsReducer.hasErrored,isLoading:e.characterDetailsReducer.isLoading}},function(e){return{fetchData:function(a){return e(function(e){return function(){var a=Object(g.a)(v.a.mark(function a(t){var r,n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t(G(!0)),a.prev=1,a.next=4,x(e);case 4:r=a.sent,n=r.data.results,t({type:"CHARACTER_DETAILS_FETCH_DATA_SUCCESS",details:n}),t(G(!1)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),t({type:"CHARACTER_DETAILS_HAS_ERRORED",hasErrored:!0});case 13:case"end":return a.stop()}},a,null,[[1,10]])}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(M)),P=m.css.keyframes({from:{left:"-200px",width:"30%"},"50%":{width:"30%"},"70%":{width:"70%"},"80%":{left:"50%"},"95%":{left:"120%"},to:{left:"100%"}}),W=Object(m.css)({height:"4px",width:"100%",top:"0",right:"0",left:"0",position:"fixed",overflow:"hidden",backgroundColor:"#ddd","&:before":{display:"block",position:"absolute",content:" ",left:"-200px",width:"200px",height:"4px",backgroundColor:"#f31d24",animation:"".concat(P," 2s linear infinite")}}),Y=Object(f.b)(function(e){return{isLoading:e.charactersReducer.isLoading||e.characterDetailsReducer.isLoading}},null)(function(e){return e.isLoading?n.a.createElement("div",{className:"".concat(W)}):null}),q=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,null),n.a.createElement(z,null),n.a.createElement(J,null))}}]),a}(n.a.Component),K=t(7).createBrowserHistory,Q=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,{history:K},n.a.createElement(h.a,{path:"/marvel-superheroes-demo/:characterId?",component:q}))}}]),a}(r.Component),V=t(22),X=t(46),Z={hasErrored:!1,isLoading:!1,characters:[]};function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHARACTERS_HAS_ERRORED":e=Object.assign({},e,{hasErrored:a.hasErrored});break;case"CHARACTERS_IS_LOADING":e=Object.assign({},e,{isLoading:a.isLoading});break;case"CHARACTERS_FETCH_DATA_SUCCESS":e=Object.assign({},e,{characters:a.characters});break;default:return e}return e}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHARACTER_DETAILS_HAS_ERRORED":e=Object.assign({},e,{hasErrored:a.hasErrored});break;case"CHARACTER_DETAILS_IS_LOADING":e=Object.assign({},e,{isLoading:a.isLoading});break;case"CHARACTER_DETAILS_FETCH_DATA_SUCCESS":e=Object.assign({},e,{details:a.details});break;default:return e}return e}var ae,te=Object(V.d)(Object(V.c)({charactersReducer:$,characterDetailsReducer:ee}),ae,Object(V.a)(X.a));i.a.render(n.a.createElement(f.a,{store:te},n.a.createElement(Q,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.6dbcf85b.chunk.js.map