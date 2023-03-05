amis.define("da6565c",(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("849c8c1"),r=e("cc4bbf0"),l=e("ec160b7"),o=e("5850c09"),c=e("af1cc81"),d=e("167c905"),u=e("d32df82"),s=e("2426036"),p=e("c2555e3"),f=e("8ba532b"),b=e("fb32b1a");function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var h=m(r),y=m(l),v=m(o),g=m(c),_=function(e){function t(t){var a=e.call(this,t)||this;return Object.defineProperty(a,"input",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),a.state={apiStr:a.transformApi2Str(t.value),selectedItem:[],schema:t.pickerSchema,loading:!1},a}return i.__extends(t,e),Object.defineProperty(t.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.updatePickerOptions()}}),Object.defineProperty(t.prototype,"componentDidUpdate",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this.props;e.value!==t.value&&(this.setState({apiStr:this.transformApi2Str(t.value)}),this.updatePickerOptions()),f.anyChanged(["enablePickerMode","pickerSchema"],e,t)&&this.setState({schema:t.pickerSchema}),p.isApiOutdated(null==e?void 0:e.pickerSource,null==t?void 0:t.pickerSource,e.data,t.data)&&this.fetchOptions()}}),Object.defineProperty(t.prototype,"updatePickerOptions",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e;return i.__awaiter(this,void 0,void 0,(function(){var t,a;return i.__generator(this,(function(n){switch(n.label){case 0:if(t=p.normalizeApi(this.props.value),!(null===(e=null==t?void 0:t.url)||void 0===e?void 0:e.startsWith("api://")))return[3,4];this.setState({loading:!0}),a=t.url.replace("api://",""),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.fetchOptions(a)];case 2:case 3:return n.sent(),[3,4];case 4:return this.setState({loading:!1}),[2]}}))}))}}),Object.defineProperty(t.prototype,"transformApi2Str",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=p.normalizeApi(e);return t.url?"".concat(t.method&&"get"!==t.method.toLowerCase()?"".concat(t.method,":"):"").concat(t.url):""}}),Object.defineProperty(t.prototype,"fetchOptions",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t,a,n,r;return i.__awaiter(this,void 0,void 0,(function(){var l,o,c,d,u,b,m,h,y,v,g,_,O,k,C;return i.__generator(this,(function(P){switch(P.label){case 0:return l=this.props,o=l.value,c=l.data,d=l.env,u=l.searchField,b=l.searchType,m=this.props.pickerSource,h=p.normalizeApi(o),m&&(null==h?void 0:h.url)?(y=null===(a=null===(t=null==h?void 0:h.url)||void 0===t?void 0:t.split("api://"))||void 0===a?void 0:a[1],v=f.createObject(c,i.__assign({value:o,op:"loadOptions"},e&&u?((C={})[u]=e,C.searchType=b,C):{})),(g=s.getEnv(window.editorStore).schemaFilter)&&(m=g({api:m}).api),p.isEffectiveApi(m,v)?[4,d.fetcher(m,v)]:[3,2]):[2];case 1:_=P.sent(),(O=(null===(n=_.data)||void 0===n?void 0:n.items)||(null===(r=null==_?void 0:_.data)||void 0===r?void 0:r.rows)).length&&(k=O.find((function(e){return e.key===y})),this.setState({selectedItem:k?[k]:[]})),P.label=2;case 2:return[2]}}))}))}}),Object.defineProperty(t.prototype,"inputRef",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.input=e}}),Object.defineProperty(t.prototype,"focus",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.input&&this.input.focus()}}),Object.defineProperty(t.prototype,"clearPickerValue",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=this.props.onChange;this.setState({apiStr:this.transformApi2Str(void 0),selectedItem:[]},(function(){null==t||t(void 0),e.focus()}))}}),Object.defineProperty(t.prototype,"handleSimpleInputChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=e.currentTarget.value;this.handleSubmit(t,"input")}}),Object.defineProperty(t.prototype,"handleSubmit",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var a=this.props,n=a.onChange,i=a.value,r=e;(e||"picker-submit"!==t)&&("string"==typeof i&&"string"==typeof e||(r=y.default({},p.normalizeApi(i),p.normalizeApi(e),(function(e,t,a){if(["data","responseData","headers"].includes(a))return t})),["data","responseData","headers"].forEach((function(e){null==r[e]&&delete r[e]}))),null==n||n(r))}}),Object.defineProperty(t.prototype,"handleAction",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,a,n){var i=this.props.onAction;null==i||i(e,t,a,n)}}),Object.defineProperty(t.prototype,"normalizeValue",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var a=v.default(e);return"function"==typeof t&&(a=t(e)),a}}),Object.defineProperty(t.prototype,"handlePickerConfirm",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this.props.onPickerConfirm;this.handleSubmit(this.normalizeValue(e,t),"picker-submit")}}),Object.defineProperty(t.prototype,"handlePickerClose",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props.onPickerClose;null==e||e()}}),Object.defineProperty(t.prototype,"renderHeader",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t=this.props,a=t.render,n=t.labelRemark,i=t.useMobileUI,r=t.popOverContainer,l=t.env,o=this.props.label,c=null===(e=null==l?void 0:l.theme)||void 0===e?void 0:e.classPrefix;return h.default.createElement("header",{className:"ApiControl-header",key:"header"},h.default.createElement("label",{className:g.default("".concat(c,"Form-label"))},(null==o?void 0:o.type)?a("label",o):o||"",n?a("label-remark",{type:"remark",icon:n.icon||"warning-mark",tooltip:n,className:g.default("Form-lableRemark",null==n?void 0:n.className),useMobileUI:i,container:r||(l&&l.getModalContainer?l.getModalContainer:void 0)}):null))}}),Object.defineProperty(t.prototype,"renderPickerSchema",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=this.props,a=t.render,n=t.pickerTitle;t.pickerName;var r=t.pickerSize,l=t.pickerHeaderClassName,o=t.pickerBtnSchema,c=t.enablePickerMode,s=t.onPickerSelect,p=this.state,f=p.selectedItem,b=p.schema;return b?h.default.createElement(u.PickerContainer,{title:n,headerClassName:g.default(l,"font-bold"),onConfirm:this.handlePickerConfirm,onCancel:this.handlePickerClose,size:r,bodyRender:function(t){var n=t.onChange,i=t.setState;return a("api-control-picker",b,{value:f,onSelect:function(t){i({selectedItem:t}),n(e.normalizeValue(t,s))}})}},(function(t){var n=t.onClick,r=t.isOpened;return a("picker-action",i.__assign(i.__assign({icon:h.default.createElement(d.Icon,{icon:"picker-icon",className:"icon ae-ApiControl-icon"})},o),{className:g.default("ae-ApiControl-PickerBtn",null==o?void 0:o.className)}),{onClick:function(t){return i.__awaiter(e,void 0,void 0,(function(){return i.__generator(this,(function(e){switch(e.label){case 0:if(r||!c)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.fetchOptions()];case 2:case 3:return e.sent(),[3,4];case 4:return n(t),[2]}}))}))}})})):null}}),Object.defineProperty(t.prototype,"renderApiDialog",{enumerable:!1,configurable:!0,writable:!0,value:function(){return{label:"",type:"action",acitonType:"dialog",size:"sm",icon:h.default.createElement(d.Icon,{icon:"setting",className:"icon ae-ApiControl-icon"}),className:"ae-ApiControl-setting-button",actionType:"dialog",dialog:{title:b.i18n("e370757f933a8ecd87bf0255c3ce45d0"),size:"md",className:"ae-ApiControl-dialog",headerClassName:"font-bold",bodyClassName:"ae-ApiControl-dialog-body",closeOnEsc:!0,closeOnOutside:!1,showCloseButton:!0,body:[this.renderApiConfigTabs()]}}}}),Object.defineProperty(t.prototype,"renderApiConfigTabs",{enumerable:!1,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=!1);var t=this.props;t.messageDesc;var a=t.debug,n=void 0!==a&&a;return{type:"form",className:"ae-ApiControl-form",mode:"horizontal",submitOnChange:e,wrapWithPanel:!1,onSubmit:this.handleSubmit,debug:n,body:[{type:"tabs",className:"ae-ApiControl-tabs",contentClassName:"ae-ApiControl-tabContent",tabs:[{title:b.i18n("7c57a563ab87bc6eb5edd8f5b953f499"),tab:[{label:b.i18n("6aa351f5dacd13d3d862d9c93e4a0241"),name:"method",value:"get",type:"button-group-select",mode:"horizontal",options:[{value:"get",label:"GET"},{value:"post",label:"POST"},{value:"put",label:"PUT"},{value:"patch",label:"PATCH"},{value:"delete",label:"DELETE"}]},{label:b.i18n("85624c8e8b0fc98954eecbe508e8b59d"),type:"input-text",name:"url",mode:"horizontal",size:"lg",placeholder:"http://",required:!0},{label:b.i18n("8dc91bca9bc83efea73150e3478657fc"),type:"input-text",name:"sendOn",mode:"horizontal",size:"lg",placeholder:b.i18n("bf9e242338d2c26b182aa6b9c015d84c"),description:b.i18n("91ee84292a5bf5e59d3b6309f948f2f1")},{label:b.i18n("7c6722203327e8173be987f36fadf610"),type:"button-group-select",name:"dataType",size:"sm",mode:"horizontal",description:"".concat(b.i18n("55409342e28d37db86fb23efbd84a025"),'：<%= data.dataType === "json" ? "application/json" : (data.dataType === "form-data" ? "multipart/form-data" : (data.dataType === "form" ? "application/x-www-form-urlencoded" : "")) %>，').concat(b.i18n("e06a14abe7ef66a8ead143db4ae9786e")),options:[{label:"JSON",value:"json"},{label:"FormData",value:"form-data"},{label:"Form",value:"form"}],disabled:!1},{type:"switch",label:b.i18n("773a0e8384fd6f784088b829d7cc2f68"),name:"cache",mode:"horizontal",pipeIn:function(e){return!!e},pipeOut:function(e){return e?3e3:void 0}},{label:"",type:"input-number",name:"cache",mode:"horizontal",size:"md",min:0,step:500,visibleOn:"this.cache",description:b.i18n("c1b110f13431df9662299f26def71df1"),pipeIn:function(e){return"number"==typeof e?e:0}},{label:b.i18n("a18ea11244325dd3d20c5988bc7f6e39"),name:"responseType",type:"switch",mode:"horizontal",description:b.i18n("68caa6082eda1745aa3f6b6d12efe423"),pipeIn:function(e){return"blob"===e},pipeOut:function(e){return e?"blob":void 0}},{label:b.i18n("91831507074270c0da8a31ad9ff87495"),name:"replaceData",type:"switch",mode:"horizontal",description:b.i18n("42be3061671b38468cc6ac84f6a0dd77")},{label:"",name:"interval",type:"input-number",mode:"horizontal",size:"md",visibleOn:'typeof this.interval === "number"',step:500,description:b.i18n("81fe75a5216d4f612f1809c122f5145a")},{label:b.i18n("19c5410b23fba4bbfd1a58bbd5268c9b"),name:"silentPolling",type:"switch",mode:"horizontal",visibleOn:"!!data.interval",description:b.i18n("04f840b0772f4b5d59954a29a76f4e7b")},{label:f.tipedLabel(b.i18n("83f16354dd1532422dc8b3581d096e7b"),b.i18n("620f826a77f079c5683a9d3c59461ea1")),name:"stopAutoRefreshWhen",type:"input-text",mode:"horizontal",horizontal:{leftFixed:"md"},size:"lg",visibleOn:"!!data.interval",placeholder:b.i18n("6037dae99e9446deaed45f7e408f47ab")}]},{title:b.i18n("90260d55567cfd97ec2f085963a60bcf"),tab:[{type:"switch",label:f.tipedLabel(b.i18n("be47bd270e7756d4233e59bbe4cd5b96"),b.i18n("f80cc88446cc10da4838556666f6b9f1")),name:"headers",mode:"horizontal",className:"m-b-xs",pipeIn:function(e){return!!e},pipeOut:function(e){return e?{"":""}:null}},{type:"combo",name:"headers",mode:"horizontal",syncDefaultValue:!1,multiple:!0,visibleOn:"this.headers",items:[{type:"input-text",name:"key",placeholder:"Key",unique:!0,required:!0,options:[{label:"Content-Encoding",value:"Content-Encoding"},{label:"Content-Type",value:"Content-Type"}]},{type:"input-text",name:"value",placeholder:"Value",disabled:!1}],pipeIn:function(e){if(!f.isObject(e))return e;var t=[];return Object.keys(e).forEach((function(a){t.push({key:a||"",value:"string"==typeof e[a]?e[a]:JSON.stringify(e[a])})})),t},pipeOut:function(e){if(!Array.isArray(e))return e;var t={};return e.forEach((function(e){var a=e.key||"",n=e.value;try{n=JSON.parse(n)}catch(e){}t[a]=n})),t}},{type:"switch",label:f.tipedLabel(b.i18n("8f0064a9cfd7dcbb3c729f1357f11772"),b.i18n("0fcbf036057c6dd88b7b809daa0c5eb7")),name:"data",mode:"horizontal",pipeIn:function(e){return!!e},pipeOut:function(e){return e?{"&":"$$"}:null}},{type:"combo",syncDefaultValue:!1,name:"data",mode:"horizontal",renderLabel:!1,visibleOn:"this.data",descriptionClassName:"help-block text-xs m-b-none",description:b.i18n("5414824fb8efdb7d59beae4bf95fdefd"),multiple:!0,pipeIn:function(e){if(!f.isObject(e))return e;var t=[];return Object.keys(e).forEach((function(a){t.push({key:a||"",value:"string"==typeof e[a]?e[a]:JSON.stringify(e[a])})})),t},pipeOut:function(e){if(!Array.isArray(e))return e;var t={};return e.forEach((function(e){var a=e.key||"",n=e.value;try{n=JSON.parse(n)}catch(e){}t[a]=n})),t},items:[{placeholder:"Key",type:"input-text",unique:!0,name:"key",required:!0},{placeholder:"Value",type:"ae-DataPickerControl",name:"value"}]},{label:b.i18n("417125a06b1d2bfff025e83a4e067bf0"),name:"requestAdaptor",type:"js-editor",mode:"horizontal",horizontal:{justify:!0},clasName:"m-t-sm",allowFullscreen:!0,description:b.i18n("62efcb25e5b21da47c09780119da3458")},{type:"switch",label:f.tipedLabel(b.i18n("6d33298a54888a30753373ca5bfe3bc2"),b.i18n("542e06175ff4f7407c467bbde90de56a")),name:"responseData",mode:"horizontal",pipeIn:function(e){return!!e},pipeOut:function(e){return e?{"&":"$$"}:null}},{type:"combo",syncDefaultValue:!1,name:"responseData",mode:"horizontal",renderLabel:!1,visibleOn:"this.responseData",descriptionClassName:"help-block text-xs m-b-none",multiple:!0,pipeIn:function(e){if(!f.isObject(e))return e;var t=[];return Object.keys(e).forEach((function(a){t.push({key:a||"",value:"string"==typeof e[a]?e[a]:JSON.stringify(e[a])})})),t},pipeOut:function(e){if(!Array.isArray(e))return e;var t={};return e.forEach((function(e){var a=e.key||"",n=e.value;try{n=JSON.parse(n)}catch(e){}t[a]=n})),t},items:[{placeholder:"Key",type:"input-text",unique:!0,name:"key",required:!0},{placeholder:"Value",type:"input-text",name:"value"}]},{label:b.i18n("6eb8944029108ad3b6bb3572a648fafa"),name:"adaptor",type:"js-editor",mode:"horizontal",horizontal:{justify:!0},clasName:"m-t-sm",allowFullscreen:!0,description:b.i18n("e83cbec70e17988749c4a02a3b73f55c")}]},{title:b.i18n("99c74120cc62f4bf31d661e3212b7121"),tab:[{label:b.i18n("7c583ecdf795ce4f1f40d7960ead9344"),type:"combo",name:"messages",mode:"normal",multiLine:!0,items:[{label:b.i18n("70941a02776496ec446f21f98ebf754e"),type:"input-text",name:"success"},{label:b.i18n("f50bf418323ee425eca7208c09a4577e"),type:"input-text",name:"failed"}]}]}]}]}}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t,a=this.props,n=a.render,i=a.className,r=a.footerClassName;a.classPrefix,a.label,a.labelRemark;var l=a.value,o=a.footer,c=a.border,s=void 0!==c&&c,f=a.onlyTabs,b=void 0!==f&&f;a.messageDesc;var m=a.enablePickerMode,y=a.disabled;a.mode;var v=a.enableHighlight,_=a.labelField,O=void 0===_?"label":_;a.useMobileUI,a.popOverContainer,a.env;var k=a.renderLabel,C=this.state,P=C.apiStr,A=C.selectedItem,S=C.loading,w=null!==(t=null===(e=null==(A=Array.isArray(A)&&0!==A.length?A:[])?void 0:A[0])||void 0===e?void 0:e[O])&&void 0!==t?t:"";return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:g.default("ae-ApiControl",i,{border:s})},b?n("api-control-tabs",this.renderApiConfigTabs(!0),{data:p.normalizeApi(l)}):h.default.createElement(h.default.Fragment,null,!k&&this.renderHeader(),h.default.createElement("div",{className:"ae-ApiControl-content",key:"content"},h.default.createElement("div",{className:g.default("ae-ApiControl-input")},v&&w?h.default.createElement("div",{className:g.default("ae-ApiControl-highlight")},S?h.default.createElement(u.Spinner,{show:!0,icon:"reload",size:"sm",spinnerClassName:g.default("Select-spinner")}):h.default.createElement("span",{className:g.default("ae-ApiControl-highlight-tag")},h.default.createElement("span",null,w),h.default.createElement("a",{onClick:this.clearPickerValue,className:g.default("Modal-close")},h.default.createElement(d.Icon,{icon:"close",className:g.default("icon","ae-ApiControl-highlight-close")})))):h.default.createElement(u.Input,{ref:this.inputRef,value:P,type:"text",disabled:y,placeholder:"http://",onChange:this.handleSimpleInputChange}),m?this.renderPickerSchema():null),n("api-control-dialog",this.renderApiDialog(),{data:p.normalizeApi(l)})))),Array.isArray(o)&&0!==o.length?h.default.createElement("footer",{className:g.default("mt-3",r),key:"footer"},n("api-control-footer",o)):null)}}),Object.defineProperty(t,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{pickerBtnSchema:{type:"button",level:"link",size:"sm"},labelField:"label",searchType:"key"}}),i.__decorate([f.autobind,i.__metadata("design:type",Function),i.__metadata("design:paramtypes",[Object]),i.__metadata("design:returntype",void 0)],t.prototype,"inputRef",null),i.__decorate([f.autobind,i.__metadata("design:type",Function),i.__metadata("design:paramtypes",[]),i.__metadata("design:returntype",void 0)],t.prototype,"clearPickerValue",null),i.__decorate([f.autobind,i.__metadata("design:type",Function),i.__metadata("design:paramtypes",[Object]),i.__metadata("design:returntype",void 0)],t.prototype,"handleSimpleInputChange",null),i.__decorate([f.autobind,i.__metadata("design:type",Function),i.__metadata("design:paramtypes",[Object,String]),i.__metadata("design:returntype",void 0)],t.prototype,"handleSubmit",null),i.__decorate([f.autobind,i.__metadata("design:type",Function),i.__metadata("design:paramtypes",[Object]),i.__metadata("design:returntype",void 0)],t.prototype,"handlePickerConfirm",null),i.__decorate([f.autobind,i.__metadata("design:type",Function),i.__metadata("design:paramtypes",[]),i.__metadata("design:returntype",void 0)],t.prototype,"handlePickerClose",null),i.__decorate([f.autobind,i.__metadata("design:type",Function),i.__metadata("design:paramtypes",[]),i.__metadata("design:returntype",void 0)],t.prototype,"renderHeader",null),t}(h.default.Component);!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}i.__extends(t,e),t=i.__decorate([d.FormItem({type:"ae-apiControl",renderLabel:!1})],t)}(_),t.default=_}));