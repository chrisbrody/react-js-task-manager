(this.webpackJsonptaskmanager=this.webpackJsonptaskmanager||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),s=a(7),i=a(1),o=a(6),u=a.n(o),m=Object(n.createContext)(),d=function(e){var t=JSON.parse(localStorage.getItem("tasks"))||[],a=Object(n.useState)(t),r=Object(i.a)(a,2),l=r[0],o=r[1],d=Object(n.useState)(null),f=Object(i.a)(d,2),k=f[0],E=f[1];Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(l))}),[l]);return c.a.createElement(m.Provider,{value:{tasks:l,addTask:function(e){o([].concat(Object(s.a)(l),[{title:e,id:u()()}]))},removeTask:function(e){o(l.filter((function(t){return t.id!==e})))},clearList:function(){o([])},findItem:function(e){var t=l.find((function(t){return t.id===e}));E(t)},editTask:function(e,t){var a=l.map((function(a){return a.id===t?{title:e,id:t}:a}));o(a),E(null)},editItem:k}},e.children)},f=function(e){var t=e.task,a=Object(n.useContext)(m),r=a.removeTask,l=a.findItem;return c.a.createElement("li",{className:"list-item"},c.a.createElement("span",{id:"task"+t.id},t.title),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return r(t.id)},className:"btn-delete task-btn"},c.a.createElement("i",{className:"fas fa-trash-alt"})),c.a.createElement("button",{onClick:function(){return l(t.id)},className:"btn-edit task-btn"},c.a.createElement("i",{className:"fas fa-pen"}))))},k=function(){var e=Object(n.useContext)(m).tasks;return c.a.createElement("div",null,e.length?c.a.createElement("ul",{className:"list"},e.map((function(e){return c.a.createElement(f,{task:e,key:e.id})}))):c.a.createElement("div",{className:"no-tasks"},"No Tasks"))},E=function(){var e=Object(n.useContext)(m),t=e.addTask,a=e.clearList,r=e.editItem,l=e.editTask,s=Object(n.useState)(""),o=Object(i.a)(s,2),u=o[0],d=o[1];return Object(n.useEffect)((function(){d(r?r.title:"")}),[r]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r?l(u,r.id):(t(u),d(""))},className:"form"},c.a.createElement("input",{onChange:function(e){d(e.target.value)},type:"text",value:u,className:"task-input",required:!0}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"submit",className:"btn add-task-btn"},r?"Edit Task":"Add Task"),c.a.createElement("button",{onClick:a,className:"btn clear-btn"},"Clear")))},b=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Task Manager"))},v=(a(15),function(){return c.a.createElement(d,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"app-wrapper"},c.a.createElement("div",{className:"main"},c.a.createElement(b,null),c.a.createElement(E,null),c.a.createElement(k,null)))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.33a5b40d.chunk.js.map