(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(4),o=n.n(c),r=(n(16),n(5)),d=n(6),l=n(9),s=n(7),u=n(10),m=n(1),p=n(8),h=n.n(p),v=function(e){return i.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:h()(e.input)}})},w=(n(17)," a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.\n\n# Header\n## Header 2\n[I work here](www.wayfair.co.uk)\n```\n<div></div>\n```\n- List 1\n  - List 2 `sneaky code`\n   - List 3\n\n >Blocking a quote!\n\n![Christian](https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/49745714_2119476408108530_2252438745905102848_n.jpg?_nc_cat=101&_nc_ht=scontent-frx5-1.xx&oh=da603137e6bd1cc1551c0831d5511286&oe=5D1CA012)\n\n**pretty neat**\n"),b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={input:w},n.handleInput=n.handleInput.bind(Object(m.a)(Object(m.a)(n))),n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleInput",value:function(e){this.setState({input:e.target.value})}},{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js",e.async=!0,e.type="text/javascript",document.body.appendChild(e),console.log(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,"Markdown Previewer"),i.a.createElement("div",{id:"container"},i.a.createElement("div",{className:"column"},i.a.createElement("h2",{id:"editor-title"},"Editor"),i.a.createElement("div",{className:"box"},i.a.createElement("textarea",{id:"editor",type:"text",value:this.state.input,onChange:this.handleInput}))),i.a.createElement("div",{className:"column"},i.a.createElement("h2",{id:"preview-title"},"Previewer"),i.a.createElement("div",{className:"box",id:"preview-div"},i.a.createElement(v,{input:this.state.input})))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.12c7e37f.chunk.js.map