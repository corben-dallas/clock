(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{19:function(e,n,a){e.exports=a(29)},24:function(e,n,a){},28:function(e,n,a){},29:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),o=a(2),c=a.n(o),m=(a(24),a(8)),i=a(5),r=a(3),u=a(9),v=a(17),s=a(14),b=[{value:0,label:"UTC 00:00",name:"timeZone"},{value:1,label:"UTC+01:00",name:"timeZone"},{value:2,label:"UTC+02:00",name:"timeZone"},{value:3,label:"UTC+03:00",name:"timeZone"},{value:4,label:"UTC+04:00",name:"timeZone"},{value:5,label:"UTC+05:00",name:"timeZone"},{value:6,label:"UTC+06:00",name:"timeZone"},{value:7,label:"UTC+07:00",name:"timeZone"},{value:8,label:"UTC+08:00",name:"timeZone"},{value:9,label:"UTC+09:00",name:"timeZone"},{value:10,label:"UTC+10:00",name:"timeZone"},{value:11,label:"UTC+11:00",name:"timeZone"},{value:12,label:"UTC+12:00",name:"timeZone"},{value:-11,label:"UTC-11:00",name:"timeZone"},{value:-10,label:"UTC-10:00",name:"timeZone"},{value:-9,label:"UTC-09:00",name:"timeZone"},{value:-8,label:"UTC-08:00",name:"timeZone"},{value:-7,label:"UTC-07:00",name:"timeZone"},{value:-6,label:"UTC-06:00",name:"timeZone"},{value:-5,label:"UTC-05:00",name:"timeZone"},{value:-4,label:"UTC-04:00",name:"timeZone"},{value:-3,label:"UTC-03:00",name:"timeZone"},{value:-2,label:"UTC-02:00",name:"timeZone"},{value:-1,label:"UTC-01:00",name:"timeZone"}],f=function(e){var n=e.form,a=e.onInputChange,t=e.onSelectChange,o=e.onClockAdd;return l.a.createElement("div",{className:"form"},l.a.createElement("input",{type:"text",name:"clockName",value:n.clockName,onChange:a,className:"form__input",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),l.a.createElement(s.a,{isSearchable:!1,options:b,onChange:t,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0437\u043e\u043d\u0443",className:"form__select"}),l.a.createElement("button",{onClick:o,className:"form__btn ".concat(!n.clockName||!n.timeZone&&0!==n.timeZone?"form__btn--disabled":""),disabled:!n.clockName||!n.timeZone&&0!==n.timeZone},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))},C=a(12),Z=a(13),k=a(18),d=a(16),h=a(15),p=(a(27),function(e){return 3600*e*1e3}),T=function(e){Object(k.a)(a,e);var n=Object(d.a)(a);function a(){var e;Object(C.a)(this,a);for(var t=arguments.length,l=new Array(t),o=0;o<t;o++)l[o]=arguments[o];return(e=n.call.apply(n,[this].concat(l))).state={time:new Date(0)},e.getTime=function(){var n=e.props.timeZone,a=(new Date).getTime()+(p(n)-108e5);e.setState({time:new Date(a)})},e}return Object(Z.a)(a,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.getTime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.time,n=this.props,a=n.clockName,t=n.id,o=n.onClockRemove;return l.a.createElement("div",{className:"clock"},l.a.createElement("div",{className:"clock__content"},l.a.createElement("p",null,a),l.a.createElement("span",{className:"material-icons",onClick:function(){return o(t)}},"clear")),l.a.createElement(h.a,{value:e,renderNumbers:!0}))}}]),a}(t.Component);T.defaulProps={clockName:"",id:"",timeZone:0,onClockRemove:function(){}};var U=function(e){var n=e.time,a=e.onClockRemove;return n.length?l.a.createElement("div",{className:"clocks"},n.map((function(e){return l.a.createElement(T,Object.assign({},e,{key:e.id,onClockRemove:a}))}))):null};U.defaultProps={time:[],onClockRemove:function(){}};var N=U,j=(a(28),function(){var e=Object(t.useState)([]),n=Object(u.a)(e,2),a=n[0],o=n[1],c=Object(t.useState)({clockName:"",timeZone:NaN}),s=Object(u.a)(c,2),b=s[0],C=s[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{form:b,onInputChange:function(e){var n=e.target,a=n.name,t=n.value;C((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},a,t))}))},onSelectChange:function(e){var n=e.value,a=e.name;C((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},a,n))}))},onClockAdd:function(){var e=b.timeZone,n=b.clockName;o((function(a){return[].concat(Object(m.a)(a),[{id:Object(v.a)(),clockName:n,timeZone:e}])})),C((function(e){return Object(r.a)(Object(r.a)({},e),{},{clockName:"",timeZone:0})}))}}),l.a.createElement(N,{time:a,onClockRemove:function(e){o((function(n){return Object(m.a)(n.filter((function(n){return n.id!==e})))}))}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.21965557.chunk.js.map