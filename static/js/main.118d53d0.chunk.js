(this["webpackJsonpMovei-App-2021"]=this["webpackJsonpMovei-App-2021"]||[]).push([[0],{43:function(e,s,t){},45:function(e,s,t){},46:function(e,s,t){"use strict";t.r(s);var a=t(2),n=t.n(a),r=t(13),i=t.n(r),c=t(4),o=t.n(c),l=t(14),m=t(15),j=t(16),d=t(19),u=t(18),v=t(17),h=t.n(v),p=(t(43),t(0));var b=function(e){var s=e.title,t=e.summary,a=e.poster,n=e.rating,r=e.genres,i=e.url;return Object(p.jsx)("div",{className:"movie",children:Object(p.jsxs)("figure",{children:[Object(p.jsx)("div",{className:"scale",children:Object(p.jsx)("a",{href:i,children:Object(p.jsx)("img",{src:a,className:"poster",alt:"profile"})})}),Object(p.jsxs)("div",{className:"movies-data",children:[Object(p.jsx)("h3",{className:"movies-title",children:s}),Object(p.jsx)("span",{className:"summary",children:t}),Object(p.jsxs)("div",{className:"star",children:[Object(p.jsxs)("p",{className:" movies-rating",children:[n,"/10"]}),Object(p.jsx)("ul",{className:"genres",children:r.map((function(e){return Object(p.jsx)("li",{className:"genres-genre",children:e})}))})]})]})]})})},g=(t(45),function(e){Object(d.a)(t,e);var s=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function s(){var t,a;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=s.sent,a=t.data.data.movies,e.setState({isLoading:!1,movies:a});case 5:case"end":return s.stop()}}),s)}))),e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.isLoading,t=e.movies;return Object(p.jsx)("section",{className:"container",children:s?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"loader-in",children:"Loadgin..."})}):Object(p.jsx)("div",{className:"movies",children:t.map((function(e){return Object(p.jsx)(b,{id:e.id,year:e.year,title:e.title_long,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,genres:e.genres,url:e.url},e.id)}))})})}}]),t}(n.a.Component));i.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.118d53d0.chunk.js.map