(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),n=(c(13),c(8)),a=c(2),l=c(1),r=(c(14),c(15),c(16),c(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},j=(c(18),c(6)),m=c.n(j);var b=function(e){var t=e.onAddMovie,c=Object(l.useState)(""),i=Object(a.a)(c,2),s=i[0],n=i[1],d=Object(l.useState)(null),j=Object(a.a)(d,2),b=j[0],u=j[1],v=Object(l.useState)(null),h=Object(a.a)(v,2),O=h[0],x=h[1],f=Object(l.useState)(!1),p=Object(a.a)(f,2),N=p[0],g=p[1];return Object(l.useEffect)((function(){x(null)}),[s]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),g(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=859595bc","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(s).then((function(e){"Response"in e&&"False"===e.Response?x(e):u((function(){var t=e;return{title:t.Title,description:t.Plot,imgUrl:"N/A"===t.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":t.Poster,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID),imdbId:t.imdbID}}))})).finally((function(){return g(!1)}))},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":O}),value:s,onChange:function(e){n(e.target.value),x(null)}})}),O&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button","is-light",{"is-loading":N}),disabled:!s,children:"Find a movie"})}),!!b&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){b&&t(b),u(null),n("")},children:"Add to the list"})})]})]}),!!b&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(o,{movie:b})]})]})},u=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{onAddMovie:function(e){c.some((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f224fd01.chunk.js.map