(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(166),l=n.n(s),c=n(168),m=n(180),p=n(177),u=n(304),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.userTwitter,t=this.props.expanded;return o.a.createElement(u.Follow,{username:e,options:{count:!!t||"none"}})},t}(i.Component),h=(n(37),n(38)),d=n.n(h),g=n(387),E=n.n(g),v=n(184),y=n.n(v),N=n(165),k=n.n(N),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(d()(d()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(d()(d()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!k.a.disqusShortname)return null;var t=e.frontmatter,n=y()(k.a.siteUrl,e.fields.slug),a=t.title.replace(/\s+/g,"");return o.a.createElement(E.a,{shortname:k.a.disqusShortname,identifier:a,title:t.title,url:n,onNewComment:this.notifyAboutComment})},t}(i.Component),C=n(389),_=n.n(C),w=n(36),D=(i.Component,n(457)),L=n(458),T=n(459),x=n(460),S=n(463),A=n(461),P=n(462),I=(n(402),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,a=e.mobile,r=t.frontmatter,i=y()(k.a.siteUrl,n),s=a?36:48;return o.a.createElement("div",{className:"social-links"},o.a.createElement(D.a,{url:i,title:r.title},o.a.createElement(L.a,{round:!0,size:s})),o.a.createElement(T.a,{url:i,quote:t.excerpt},o.a.createElement(x.a,{round:!0,size:s}),o.a.createElement(S.a,{url:i},function(e){return function(e){return o.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))}(e)})),o.a.createElement(A.a,{url:i},o.a.createElement(P.a,{round:!0,size:s})))},t}(i.Component)),O=n(179);n(453),n(454);n.d(t,"default",function(){return U}),n.d(t,"pageQuery",function(){return R});var U=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,n=t.frontmatter;return n.id||(n.id=e),n.category_id||(n.category_id=k.a.postDefaultCategoryID),o.a.createElement(c.a,null,o.a.createElement("div",{className:"index-container"},o.a.createElement(l.a,null,o.a.createElement("title",null,n.title+" | "+k.a.siteTitle)),o.a.createElement(O.a,{postPath:e,postNode:t,postSEO:!0}),o.a.createElement(m.a,{config:k.a}),o.a.createElement("div",{className:"post-container"},o.a.createElement("h1",{className:"post-container__title"},n.title),o.a.createElement("img",{className:"post-container__hero",src:n.cover}),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("div",{className:"post-meta"},o.a.createElement(I,{postPath:e,postNode:t})),o.a.createElement(f,{config:k.a}),o.a.createElement(b,{postNode:t})),o.a.createElement(p.a,{config:k.a})))},t}(o.a.Component),R="822495912"},165:function(e,t,n){n(37);var a={siteTitle:"Kurinsu",siteTitleShort:"Kurinsu",siteTitleAlt:"Kurinsu",siteLogo:"/logos/logo.png",siteUrl:"https://kurinsu.com",pathPrefix:"",siteDescription:"Développement personnel, inspiration et productivité.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-59515367-9",disqusShortname:"kurinsu",postDefaultCategoryID:"developpement",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Cala",userEmail:"hello@kurinsu.com",userTwitter:"",userLocation:"",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"Insta",url:"https://instagram.com/kurinsu",iconClassName:"fa fa-instagram",icon:"/icons/instagram.svg"},{label:"Twitter",url:"https://twitter.com/kurinsu",iconClassName:"fa fa-twitter",icon:"/icons/twitter.svg"},{label:"Facebook",url:"https://facebook.com/kurinsu",iconClassName:"fa fa-envelope",icon:"/icons/facebook.svg"},{label:"Medium",url:"https://medium.com/kurinsu",iconClassName:"fa fa-envelope",icon:"/icons/medium.svg"}],menuLink:[{name:"home",link:"/"},{name:"productivite",link:"/productivite"},{name:"inspiration",link:"/inspiration"},{name:"developpement",link:"/developpement"},{name:"newsletter",link:"#newsletter"}],copyright:"Copyright © 2019. Kurinsu",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===a.pathPrefix?a.pathPrefix="":a.pathPrefix="/"+a.pathPrefix.replace(/^\/|\/$/g,""),"/"===a.siteUrl.substr(-1)&&(a.siteUrl=a.siteUrl.slice(0,-1)),a.siteRss&&"/"!==a.siteRss[0]&&(a.siteRss="/"+a.siteRss),e.exports=a},167:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=(n(36),n(176),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLinkElements=function(){var e=this.props.config.userLinks;this.props.labeled;return e.map(function(e){return o.a.createElement("a",{className:"user-links",key:e.label,href:e.url},o.a.createElement("img",{src:e.icon,className:"user-links__social"}))})},n.render=function(){return this.props.config.userLinks?o.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component));t.a=s},168:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(166),l=n.n(s),c=n(165),m=n.n(c),p=(n(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"container"},o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:m.a.siteDescription})),e)},t}(o.a.Component))},169:function(e,t,n){},170:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=(n(36),n(167)),l=(n(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=(e.siteRss,e.copyright);return t?o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"notice-container"},o.a.createElement("span",null,"Made with ❤️️ in 🇪🇺 ",t)),o.a.createElement(s.a,{config:e,labeled:!0})):null},t}(i.Component));t.a=l},178:function(e,t,n){},179:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(166),l=n.n(s),c=n(184),m=n.n(c),p=n(165),u=n.n(p),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,s=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,n=p.cover,a=m()(u.a.siteUrl,u.a.pathPrefix,s)}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;n=m()(u.a.siteUrl,u.a.pathPrefix,n);var f=m()(u.a.siteUrl,u.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:c?a:f}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=f},180:function(e,t,n){"use strict";n(173);var a=n(8),r=n.n(a),i=n(38),o=n.n(i),s=n(0),l=n.n(s),c=n(36),m=(n(167),n(174)),p=n.n(m),u=(n(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.menuLink;return l.a.createElement("nav",{id:"menu"},l.a.createElement("ul",{className:"primary-nav__items"},l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:e[1].link},"⚙️ PRODUCTIVITÉ")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:e[2].link},"💡 INSPIRATION")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:e[3].link},"🕊️ DÉVELOPPEMENT")),l.a.createElement("li",{className:"item no-margin"},l.a.createElement(c.Link,{to:e[4].link},"💌 NEWSLETTER"))))},t}(s.Component)),f=n(197),h=n.n(f),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).open=function(){n.setState({isOpen:!n.state.isOpen})},n.state={isOpen:!1},n.toggleNav=n.toggleNav.bind(o()(o()(n))),n}r()(t,e);var n=t.prototype;return n.toggleNav=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){var e=this.props.config,t=e.menuLink,n=e.copyright,a=e.siteLogo;if(!n)return null;this.state.isOpen;var r=this.state.isOpen?"nav-toggle__bar half half_left":"nav-toggle__bar half";return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header--container"},l.a.createElement("div",{className:"header__mobile"},l.a.createElement(c.Link,{to:t[0].link},l.a.createElement("img",{className:"logo",src:a})),l.a.createElement("div",{className:"nav-toggle",onClick:this.open},l.a.createElement("div",{className:"nav-toggle__bar"}),l.a.createElement("div",{className:r}),l.a.createElement("div",{className:"nav-toggle__bar"}))),l.a.createElement(h.a,{maxWidth:1100},l.a.createElement(p.a,{isOpen:this.state.isOpen,onClose:this.open,labelledby:"nav-toggle",height:"100vh",className:"nav__offCanvas"},l.a.createElement(u,{config:e}))),l.a.createElement(h.a,{minWidth:1101},l.a.createElement(u,{config:e}))))},t}(s.Component);t.a=d},402:function(e,t,n){},453:function(e,t,n){},454:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-c44ab98dc78ae04ee592.js.map