(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),s=(t(17),t(1)),m=t(2),i=t(4),o=t(3),u=t(5),d=t(7),p=t(10),E=t.n(p),h=(t(20),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data){this.props.data.name,this.props.data.occupation,this.props.data.description,this.props.data.address.city;var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})}return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Education")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#experience"},"Experience")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("iframe",{id:"myiframe",src:"terminal.html"}),l.a.createElement("ul",{className:"social"},e))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2019 Praveen Patil"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,r=this.props.data.address.city,c=this.props.data.address.state,s=this.props.data.address.zip,m=this.props.data.phone,i=this.props.data.email,o=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Praveen Patil Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",{className:"bio"},l.a.createElement("i",null,t)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n,l.a.createElement("br",null),r," ",c,", ",s),l.a.createElement("br",null),l.a.createElement("span",null,m),l.a.createElement("br",null),l.a.createElement("span",null,i))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:o,className:"button",target:"_blank"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),b=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.skillmessage,a=this.props.data.education.map(function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",{className:"edu"},e.description))});this.props.data.skills.map(function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))})}return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e))))}}]),a}(n.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data){this.props.data.name,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email;var e=this.props.data.contactmessage}return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},e))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange,required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange,required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage",required:!0})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null)))))}}]),a}(n.Component),j=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map(function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title,target:"_blank"},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))});return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Projects."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.work.map(function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))});return l.a.createElement("section",{id:"experience"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e)))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"getResumeData",value:function(){E.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(b,{data:this.state.resumeData.resume}),l.a.createElement(g,{data:this.state.resumeData.resume}),l.a.createElement(j,{data:this.state.resumeData.portfolio}),l.a.createElement(N,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component);c.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.21790d7b.chunk.js.map