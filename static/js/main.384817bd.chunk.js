(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),s=n(4),r=n(1),u=n.n(r),d=(n(12),n(0)),m=function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:(new Date).toUTCString().slice(-12,-4),timerId:0},t.getToday=function(){var e=(new Date).toUTCString().slice(-12,-4);null!==t.state.timerId&&t.setState({today:e})},t.stopTimer=function(){null!==t.state.timerId&&(window.clearInterval(t.state.timerId),t.setState({timerId:null}))},t.getTime=function(){var e=window.setInterval((function(){t.getToday(),console.info(t.state.today)}),1e3);t.setState({timerId:e})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getTime()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:this.state.today})]})}}]),n}(u.a.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var k=function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.timerId=0,t.handleInterval=function(){t.setState({clockName:h()})},t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handleLeftClick=function(e){e.preventDefault(),t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.handleInterval,3300),document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick)}},{key:"componentDidUpdate",value:function(t,e){this.state.hasClock&&e.clockName!==this.state.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleRightClick),document.removeEventListener("click",this.handleLeftClick)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(d.jsx)(m,{name:this.state.clockName})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.384817bd.chunk.js.map