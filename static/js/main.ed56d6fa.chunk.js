(this.webpackJsonpreact__portfolio=this.webpackJsonpreact__portfolio||[]).push([[0],{13:function(e,a,t){},22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),m=t(7),o=t(1);var s=function(e){return l.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};var i=function(e){return l.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var u=function(e){var a=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return l.a.createElement("div",Object.assign({className:a},e))};var p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s,null,l.a.createElement(i,null,l.a.createElement(u,{size:"md-6"},l.a.createElement("a",{href:e.href},l.a.createElement("img",{src:e.image,class:"img-fluid",alt:"foodradar",target:"_blank"}))),l.a.createElement(u,{size:"md-6"},l.a.createElement("a",{href:e.href2},l.a.createElement("img",{src:e.image2,class:"img-fluid",alt:"foodradar",target:"_blank"}))))))};var d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{href:"https://foodradar.herokuapp.com/",image:"../assets/images/foodradar.png",href2:"https://tracksnax.herokuapp.com/",image2:"../assets/images/snacktrax.png"}))};t(27);var E=function(e){return l.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)};var g=function(){return Object(n.useEffect)((function(){if("/"!==window.location.pathname)return"/"===window.location.pathname}),[]),l.a.createElement("div",null,l.a.createElement(E,{backgroundImage:"./background.jpg"},l.a.createElement("section",null,l.a.createElement("div",{className:"heading"},l.a.createElement("h1",null,"Coding Skillset"),l.a.createElement("h3",{className:"cd-headline clip is-full-width"},l.a.createElement("span",{className:"cd-words-wrapper"},l.a.createElement("b",{className:"is-visible"}," HTML5"),l.a.createElement("b",null,"CSS/BOOTSTRAP"),l.a.createElement("b",null,"JAVASCRIPT/JQUERY"),l.a.createElement("b",null,"NODE/EXPRESS"),l.a.createElement("b",null,"MYSQL/MONGODB"),l.a.createElement("b",null,"REACT")))))),l.a.createElement(s,{style:{marginTop:30}}))},h=t(16),f=t(17),v=t(18),b=t(21),N=t(20),k=(t(13),function(e){Object(b.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={firstName:"",lastName:"",message:""},e.handleInputChange=function(a){var t=a.target.value,n=a.target.name;e.setState(Object(h.a)({},n,t))},e.handleFormSubmit=function(a){a.preventDefault(),alert("Thank you"),e.setState({firstName:"",lastName:"",message:""})},e}return Object(v.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.firstName,name:"firstName",onChange:this.handleInputChange,type:"text",placeholder:"First Name"}),l.a.createElement("input",{value:this.state.lastName,name:"lastName",onChange:this.handleInputChange,type:"text",placeholder:"Last Name"}),l.a.createElement("input",{className:"contact-form",value:this.state.message,name:"text",onChange:this.handleInputChange,type:"text",placeholder:"Message"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),t}(n.Component));t(28);var C=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light "},l.a.createElement(m.b,{className:"navbar-brand",to:"/"},"Emanuil Vartanyan"),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/projects",className:"/projects"===window.location.pathname?"nav-link active":"nav-link"},"Projects")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/contact",className:"/contact"===window.location.pathname?"nav-link active":"nav-link"},"Contact")))))};var S=function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(o.a,{exact:!0,path:"/",component:g}),l.a.createElement(o.a,{exact:!0,path:"/about",component:g}),l.a.createElement(o.a,{exact:!0,path:"/projects",component:d}),l.a.createElement(o.a,{exact:!0,path:"/contact",component:k})))};c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ed56d6fa.chunk.js.map