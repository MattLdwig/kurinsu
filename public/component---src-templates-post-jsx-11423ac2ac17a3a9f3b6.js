(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),i=n(0),s=n.n(i),o=n(166),l=n.n(o),c=n(167),m=n(174),p=n(179),u=n(296),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.userTwitter,t=this.props.expanded;return s.a.createElement(u.Follow,{username:e,options:{count:!!t||"none"}})},t}(i.Component),h=(n(37),n(38)),d=n.n(h),g=n(379),E=n.n(g),v=n(171),y=n.n(v),N=n(165),k=n.n(N),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(d()(d()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(d()(d()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!k.a.disqusShortname)return null;var t=e.frontmatter,n=y()(k.a.siteUrl,e.fields.slug),a=t.title.replace(/\s+/g,"");return s.a.createElement(E.a,{shortname:k.a.disqusShortname,identifier:a,title:t.title,url:n,onNewComment:this.notifyAboutComment})},t}(i.Component),C=n(381),w=n.n(C),_=n(36),D=(i.Component,n(449)),L=n(450),T=n(451),x=n(452),A=n(455),P=n(453),S=n(454),I=(n(394),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,a=e.mobile,r=t.frontmatter,i=y()(k.a.siteUrl,n),o=a?36:48;return s.a.createElement("div",{className:"social-links"},s.a.createElement(D.a,{url:i,title:r.title},s.a.createElement(L.a,{round:!0,size:o})),s.a.createElement(T.a,{url:i,quote:t.excerpt},s.a.createElement(x.a,{round:!0,size:o}),s.a.createElement(A.a,{url:i},function(e){return function(e){return s.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))}(e)})),s.a.createElement(P.a,{url:i},s.a.createElement(S.a,{round:!0,size:o})))},t}(i.Component)),O=n(181);n(445),n(446);n.d(t,"default",function(){return U}),n.d(t,"pageQuery",function(){return R});var U=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,n=t.frontmatter;return n.id||(n.id=e),n.category_id||(n.category_id=k.a.postDefaultCategoryID),s.a.createElement(c.a,null,s.a.createElement("div",{className:"index-container"},s.a.createElement(l.a,null,s.a.createElement("title",null,n.title+" | "+k.a.siteTitle)),s.a.createElement(O.a,{postPath:e,postNode:t,postSEO:!0}),s.a.createElement(m.a,{config:k.a}),s.a.createElement("div",{className:"post-container"},s.a.createElement("h1",{className:"post-container__title"},n.title),s.a.createElement("img",{className:"post-container__hero",src:n.cover}),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),s.a.createElement("div",{className:"post-meta"},s.a.createElement(I,{postPath:e,postNode:t})),s.a.createElement(f,{config:k.a}),s.a.createElement(b,{postNode:t})),s.a.createElement(p.a,{config:k.a})))},t}(s.a.Component),R="822495912"},165:function(e,t,n){n(37);var a={siteTitle:"Kurinsu",siteTitleShort:"Kurinsu",siteTitleAlt:"Kurinsu",siteLogo:"/logos/logo.png",siteUrl:"https://kurinsu.com",pathPrefix:"",siteDescription:"Développement personnel, inspiration et productivité.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"UA-59515367-9",disqusShortname:"kurinsu",postDefaultCategoryID:"developpement",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Cala",userEmail:"hello@kurinsu.com",userTwitter:"",userLocation:"",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"Insta",url:"https://instagram.com/kurinsu",iconClassName:"fa fa-instagram",icon:"/icons/instagram.svg"},{label:"Twitter",url:"https://twitter.com/kurinsu",iconClassName:"fa fa-twitter",icon:"/icons/twitter.svg"},{label:"Facebook",url:"https://facebook.com/kurinsu",iconClassName:"fa fa-envelope",icon:"/icons/facebook.svg"},{label:"Medium",url:"https://medium.com/kurinsu",iconClassName:"fa fa-envelope",icon:"/icons/medium.svg"}],menuLink:[{name:"home",link:"/"},{name:"productivite",link:"/productivite"},{name:"inspiration",link:"/inspiration"},{name:"developpement",link:"/developpement"},{name:"newsletter",link:"#newsletter"}],copyright:"Copyright © 2019. Kurinsu",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===a.pathPrefix?a.pathPrefix="":a.pathPrefix="/"+a.pathPrefix.replace(/^\/|\/$/g,""),"/"===a.siteUrl.substr(-1)&&(a.siteUrl=a.siteUrl.slice(0,-1)),a.siteRss&&"/"!==a.siteRss[0]&&(a.siteRss="/"+a.siteRss),e.exports=a},167:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(8),r=n.n(a),i=n(0),s=n.n(i),o=n(166),l=n.n(o),c=n(165),m=n.n(c),p=(n(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"container"},s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:m.a.siteDescription})),e)},t}(s.a.Component))},168:function(e,t,n){},169:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),s=n.n(i),o=(n(36),n(177),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLinkElements=function(){var e=this.props.config.userLinks;this.props.labeled;return e.map(function(e){return s.a.createElement("a",{className:"user-links",key:e.label,href:e.url},s.a.createElement("img",{src:e.icon,className:"user-links__social"}))})},n.render=function(){return this.props.config.userLinks?s.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component));t.a=o},174:function(e,t,n){"use strict";n(175);var a=n(8),r=n.n(a),i=n(38),s=n.n(i),o=n(0),l=n.n(o),c=n(36),m=(n(169),n(178),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n.toggleNav=n.toggleNav.bind(s()(s()(n))),n}r()(t,e);var n=t.prototype;return n.toggleNav=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){var e=this.props.config,t=e.menuLink,n=e.copyright,a=e.siteLogo;if(!n)return null;var r=this.state.isOpen?"primary-nav visible":"primary-nav hidden",i=this.state.isOpen?"nav-toggle__bar half half_left":"nav-toggle__bar half";return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header--container"},l.a.createElement("div",{className:"header__mobile"},l.a.createElement(c.Link,{to:t[0].link},l.a.createElement("img",{className:"logo",src:a})),l.a.createElement("div",{className:"nav-toggle",onClick:this.toggleNav},l.a.createElement("div",{className:"nav-toggle__bar"}),l.a.createElement("div",{className:i}),l.a.createElement("div",{className:"nav-toggle__bar"}))),l.a.createElement("nav",{className:r},l.a.createElement("ul",{className:"primary-nav__items"},l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:t[1].link},"⚙️ PRODUCTIVITÉ")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:t[2].link},"💡 INSPIRATION")),l.a.createElement("li",{className:"item"},l.a.createElement(c.Link,{to:t[3].link},"🕊️ DÉVELOPPEMENT")),l.a.createElement("li",{className:"item no-margin"},l.a.createElement(c.Link,{to:t[4].link},"💌 NEWSLETTER"))))))},t}(o.Component));t.a=m},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),s=n.n(i),o=(n(36),n(169)),l=(n(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=(e.siteRss,e.copyright);return t?s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"notice-container"},s.a.createElement("span",null,"Made with ❤️️ in 🇪🇺 ",t)),s.a.createElement(o.a,{config:e,labeled:!0})):null},t}(i.Component));t.a=l},180:function(e,t,n){},181:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),s=n.n(i),o=n(166),l=n.n(o),c=n(171),m=n.n(c),p=n(165),u=n.n(p),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,o=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,n=p.cover,a=m()(u.a.siteUrl,u.a.pathPrefix,o)}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;n=m()(u.a.siteUrl,u.a.pathPrefix,n);var f=m()(u.a.siteUrl,u.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:t}),s.a.createElement("meta",{name:"image",content:n}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),s.a.createElement("meta",{property:"og:url",content:c?a:f}),c?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:e}),s.a.createElement("meta",{property:"og:description",content:t}),s.a.createElement("meta",{property:"og:image",content:n}),s.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),s.a.createElement("meta",{name:"twitter:title",content:e}),s.a.createElement("meta",{name:"twitter:description",content:t}),s.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=f},394:function(e,t,n){},445:function(e,t,n){},446:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-11423ac2ac17a3a9f3b6.js.map