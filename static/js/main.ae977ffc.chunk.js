(this.webpackJsonpsandbox=this.webpackJsonpsandbox||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(7),r=a.n(c),o=(a(13),a(1)),i=a(2),u=a(4),d=a(3),l=a(5),m=(a(14),function(t){return s.a.createElement("div",{className:t.done?"task__item alert alert-secondary":"task__item alert alert-success"},s.a.createElement("input",{type:"checkbox",checked:t.done&&"checked",onChange:t.checkItem,className:"task__checkbox"}),s.a.createElement("span",{onClick:t.checkItem,className:t.done?"task__text task__text--checked":"task__text"},t.text),s.a.createElement("span",{onClick:t.deleteItem,className:"task__button btn btn-danger"},"\u274c"))}),k=(a(15),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).changeTaskTitleValue=function(t){return a.setState({taskTitle:t.target.value})},a.addItem=function(){var t=a.state.taskTitle;t&&a.props.addItem(t.trim()),a.setState({taskTitle:""})},a.addOnEnterPressed=function(t){return"Enter"===t.key&&a.addItem()},a.state={taskTitle:""},a}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"add__task form-group"},s.a.createElement("input",{onChange:this.changeTaskTitleValue,onKeyPress:this.addOnEnterPressed,value:this.state.taskTitle,placeholder:"Add new task",type:"search",className:"add__input form-control",autoFocus:!0}),s.a.createElement("button",{className:"add__button btn btn-primary",onClick:this.addItem},"\u2795"))}}]),e}(s.a.Component)),h=(a(16),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).addItem=function(t){a.setState((function(e){return e.taskItems.push({id:Date.now(),text:t,done:!1})}))},a.checkItem=function(t){return a.setState((function(e){var n=a.state.taskItems.find((function(e){return e.id==t}));return n.done=!n.done}))},a.deleteItem=function(t){return a.setState({taskItems:a.state.taskItems.filter((function(e){return e.id!=t}))})},!localStorage.length&&localStorage.setItem("tasks","[]"),a.state={taskItems:JSON.parse(localStorage.getItem("tasks"))},a}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return localStorage.setItem("tasks",JSON.stringify(this.state.taskItems)),s.a.createElement("div",{className:"app"},this.state.taskItems.map((function(e){return s.a.createElement(m,{checkItem:function(){return t.checkItem(e.id)},deleteItem:function(){return t.deleteItem(e.id)},text:e.text,done:e.done,key:e.id})})),s.a.createElement(k,{addItem:this.addItem}))}}]),e}(s.a.Component));r.a.render(s.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.ae977ffc.chunk.js.map