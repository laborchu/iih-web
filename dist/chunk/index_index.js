(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"11":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return k});var o=n(0),a=n(87),i=n(90),c=n(86),l=n(94),r=n(1),s=n(93),p=n(89),u=n(92),d=n(78),h=n(84),f=n(91),m=n(81),b=(n(32),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),y=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0};var k=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"甲亢测评"},e.checkboxOption=[{"value":"accept","label":"我同意【使用及免责申明】"}],e.state={"checkedList":["accept"],"showDialog":!1,"upload":!1,"showFeedback":!1,"feedback":-1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r["a"].Component),b(Index,[{"key":"handleChange","value":function handleChange(e){this.setState({"checkedList":e})}},{"key":"feedbackItemHandle","value":function feedbackItemHandle(e){this.setState({"feedback":e})}},{"key":"feedbackHandle","value":function feedbackHandle(e){this.setState({"showFeedback":!1})}},{"key":"handleConfirmDialog","value":function handleConfirmDialog(){this.setState({"showDialog":!1})}},{"key":"chooseImage","value":function chooseImage(){var e=this;this.state.upload||(this.state.checkedList.length?Object(c.a)({"count":1,"sizeType":["original","compressed"],"sourceType":["album"],"success":function success(t){var n=t.tempFiles[0],o=n.type.split("/")[1];e.setState({"upload":!0}),Object(l.a)({"url":"http://iih.88644.cn/images","filePath":n.path,"name":"file","formData":{"fileName":(new Date).getTime()+"."+o},"success":function success(){e.setState({"showFeedback":!0})},"complete":function complete(){e.setState({"upload":!1})}})}}):this.setState({"showDialog":!0}))}},{"key":"render","value":function render(){return o.i.createElement(a.a,{"className":"check-body"},o.i.createElement(a.a,{"className":"check-title"},"甲亢检测"),o.i.createElement(a.a,{"className":"check-header"},o.i.createElement(a.a,{"className":"check-image","onClick":this.chooseImage.bind(this)},this.state.upload?o.i.createElement(s.a,{"size":64}):o.i.createElement(a.a,{"className":"at-icon at-icon-image"}),o.i.createElement(a.a,{"className":"upload-label"},this.state.upload?"正在上传":"上传照片"))),o.i.createElement(a.a,{"className":"disclaimer-body"},o.i.createElement(p.a,{"options":this.checkboxOption,"selectedList":this.state.checkedList,"onChange":this.handleChange.bind(this)}),o.i.createElement(a.a,{"className":"disclaimer-text"},o.i.createElement(a.a,null,"1、本软件用于测定是否存在甲亢面容，面容需正面、自然，避免头发、帽子、眼镜等遮挡，避免做出不自然的表情，影响则定结果。"),o.i.createElement(a.a,null,"2、面容与疾病的关联是临床经验性判断，无法作为诊断的标准。"),o.i.createElement(a.a,null,"3、测定结果阳性不可作为疾病的诊断、治疗依据，仍以专科医生诊断为准。"),o.i.createElement(a.a,null,"4、测定结果阴性不可作为疾病的排除依裾，如有其他不适症状，仍以专科医生诊断为准。"),o.i.createElement(a.a,null,"5、测定结果存在高度怀疑的，建设至医院进一步检查，明确诊断，及时治疗。"),o.i.createElement(a.a,null,"6、欢迎对使用结果给出反馈，使用过程中的个人隐私将被保护。"))),this.state.showDialog&&o.i.createElement(u.a,{"isOpened":!0,"title":"提示","confirmText":"确认","onConfirm":this.handleConfirmDialog.bind(this),"content":"请先勾选同意【使用及免责申明】"}),this.state.showFeedback&&o.i.createElement(u.a,{"isOpened":!0},o.i.createElement(d.a,null,"检测结果"),o.i.createElement(h.a,null,o.i.createElement(a.a,{"className":"check-result"},"结果：得甲亢概率60%"),o.i.createElement(f.a,{"options":[{"label":"准确，我已经确认甲亢","value":"1"},{"label":"不准确，我体检确认未患甲亢","value":"2"},{"label":"其他","value":"0"}],"value":this.state.feedback,"onClick":this.feedbackItemHandle.bind(this)})),o.i.createElement(m.a,null,o.i.createElement(i.a,{"onClick":this.feedbackHandle.bind(this)},"反馈"))))}},{"key":"componentDidMount","value":function componentDidMount(){y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&y(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}()},"32":function(e,t,n){}}]);