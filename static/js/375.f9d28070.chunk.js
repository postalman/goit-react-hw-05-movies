"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{375:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var t,i,s,a,o,c,d=r(861),p=r(439),l=r(757),x=r.n(l),h=r(791),u=r(689),f=r(243),v=r(168),m=r(444),g=r(87),j=(0,m.ZP)(g.rU)(t||(t=(0,v.Z)(["\n    font-size: 21px;\n    font-weight:600;\n    &:hover{\n        color:red;\n    }\n"]))),b=m.ZP.div(i||(i=(0,v.Z)(["\n    display:flex;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);\n    margin-bottom: 40px;\n"]))),Z=m.ZP.div(s||(s=(0,v.Z)(["\n    margin-left: 20px;\n    padding-left: 10px;\n    \n"]))),w=m.ZP.img(a||(a=(0,v.Z)(["\n    height: 350px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);\n"]))),k=m.ZP.div(o||(o=(0,v.Z)(["\n    padding-bottom: 10px;\n    padding-top:10px;\n    padding-left:10px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);\n"]))),_=m.ZP.button(c||(c=(0,v.Z)(["\n    background-color: grey;\n        color: white;\n        padding: 10px 20px;\n        border-radius: 5px;\n        border: none;\n        cursor: pointer;\n        margin-top:10px;\n        margin-bottom: 10px;\n"]))),y=r(184),P=(0,h.lazy)((function(){return r.e(387).then(r.bind(r,387))})),S=(0,h.lazy)((function(){return r.e(186).then(r.bind(r,186))})),C=function(){var n=(0,u.UO)().movieId,e=(0,h.useState)(null),r=(0,p.Z)(e,2),t=r[0],i=r[1],s=(0,h.useState)(null),a=(0,p.Z)(s,2),o=a[0],c=a[1],l=(0,h.useState)(!1),v=(0,p.Z)(l,2),m=v[0],g=v[1],C=(0,h.useState)(!1),I=(0,p.Z)(C,2),z=I[0],E=I[1],U=(0,u.TH)(),F=(0,u.s0)();if((0,h.useEffect)((function(){var e=function(){var e=(0,d.Z)(x().mark((function e(){var r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"4b5f3337782451842d3d2458bd4af72e",e.next=4,f.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat("4b5f3337782451842d3d2458bd4af72e"));case 4:r=e.sent,i(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,h.useEffect)((function(){g(U.pathname.includes("cast")),E(U.pathname.includes("reviews"))}),[U]),o)return(0,y.jsxs)("div",{children:["Error fetching movie details: ",o]});if(!t)return(0,y.jsx)("div",{children:"Loading..."});var G=t.poster_path,O=t.title,A=t.release_date,H=t.vote_average,L=t.overview,R=t.genres;return(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{children:(0,y.jsx)(_,{onClick:function(){F("/")},children:"Go back"})}),(0,y.jsxs)(b,{children:[(0,y.jsx)("div",{children:(0,y.jsx)(w,{src:"https://image.tmdb.org/t/p/w500/".concat(G),alt:O})}),(0,y.jsxs)(Z,{children:[(0,y.jsxs)("h2",{children:[O," (",A.substring(0,4),")"]}),(0,y.jsxs)("p",{children:["User Score: ",H," %"]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:L}),(0,y.jsx)("h3",{children:"Genres"}),(0,y.jsx)("p",{children:R.map((function(n){return n.name})).join(", ")})]})]}),(0,y.jsxs)(k,{children:[(0,y.jsx)("p",{children:"Additional Information:"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"/movie/".concat(n,"/cast"),children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"/movie/".concat(n,"/reviews"),children:"Reviews"})})]})]}),m&&!z&&(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(P,{movieId:n})}),z&&!m&&(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(S,{movieId:n})}),(0,y.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=375.f9d28070.chunk.js.map