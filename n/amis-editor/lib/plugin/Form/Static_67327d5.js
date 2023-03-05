amis.define("5826d25",(function(e,a,t,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("849c8c1"),n=e("cc4bbf0"),r=e("167c905"),c=e("8ba532b"),b=e("fb32b1a");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=d(n),f=void 0;c.setSchemaTpl("quickEdit",{type:"ae-switch-more",mode:"normal",name:"quickEdit",label:b.i18n("663a93dacbba9f7860dca783cf772419"),value:!1,hiddenOnDefault:!0,formType:"extend",pipeIn:function(e){return!!e},form:{body:[{label:"编辑模式",name:"quickEdit.mode",type:"button-group-select",inputClassName:"items-center",visibleOn:"data.quickEdit",pipeIn:c.defaultValue("popOver"),options:[{label:b.i18n("78f395c15aaf8c92d9223f6ca69b41a4"),value:"popOver"},{label:b.i18n("c6e1b91d329a61b691d0d5d2eb343ddd"),value:"inline"}]},c.getSchemaTpl("switch",{name:"quickEdit.saveImmediately",label:c.tipedLabel(b.i18n("5e2d1e872682befd5350687f94a6b417"),b.i18n("2d2eb2ac28f074d1caef0d332d61cfb0")),visibleOn:"data.quickEdit",pipeIn:function(e){return!!e}}),c.getSchemaTpl("apiControl",{name:"quickEdit.saveImmediately.api",label:b.i18n("ff7cc75cc43c25c823d05d87cb8190b0"),mode:"row",description:"单独给立即保存配置接口，如果不配置，则默认使用quickSaveItemApi。",visibleOn:"this.quickEdit && this.quickEdit.saveImmediately"}),{name:"quickEdit",asFormItem:!0,visibleOn:"data.quickEdit",mode:"row",children:function(e){var a=e.value,t=e.onChange,l=e.data;!0===a&&(a={});var n=a.mode;return delete(a=i.__assign({type:"input-text",name:l.name},a)).mode,o.default.createElement(r.Button,{block:!0,level:"primary",onClick:function(){f.manager.openSubEditor({title:b.i18n("c3ed36e4abb96c18a6c83350994cdea7"),value:a,slot:{type:"form",mode:"normal",body:["$$"],wrapWithPanel:!1},onChange:function(e){return t(i.__assign(i.__assign({},e),{mode:n}),"quickEdit")}})}},"配置快速编辑")}}]}}),c.setSchemaTpl("morePopOver",{type:"ae-switch-more",mode:"normal",name:"popOver",label:b.i18n("3f337f436989e9847790e4435423f77e"),value:!1,hiddenOnDefault:!0,formType:"extend",pipeIn:function(e){return!!e},form:{body:[{label:b.i18n("f7247cd14bd964b883bbb481892c440b"),name:"popOver.mode",type:"button-group-select",visibleOn:"data.popOver",pipeIn:c.defaultValue("popOver"),options:[{label:b.i18n("a553741d5ebb9c80d7d2a63b202cf4b8"),value:"popOver"},{label:b.i18n("ab3aec075a09d055b2a28c8b61925ee0"),value:"dialog"},{label:b.i18n("2a2924380dfcaea998bd8a49703545a9"),value:"drawer"}]},{name:"popOver.position",label:b.i18n("a06e8df4e9232cc606e0202e06a198d8"),type:"select",visibleOn:'data.popOver && (data.popOver.mode === "popOver" || !data.popOver.mode)',pipeIn:c.defaultValue("center"),options:[{label:b.i18n("e18459c93769a5afec01e1ce60f9b9fd"),value:"left-top"},{label:b.i18n("1fc3cdd8437f5057774cde2f2c51f97c"),value:"right-top"},{label:b.i18n("68b54e7b408c4fb83561c931aa668eae"),value:"center"},{label:b.i18n("63dd9faca92bccfd436ff21a6b4b3151"),value:"left-bottom"},{label:b.i18n("d01c239688b9c8fc145191ee642dc080"),value:"right-bottom"},{label:b.i18n("8fcf9802436282672a8e28ebd6262390"),value:"fixed-left-top"},{label:b.i18n("aed25160b4e8cfc613a743c4549e9222"),value:"fixed-right-top"},{label:b.i18n("d4a4ab1916187e09b9c037705fd49ffa"),value:"fixed-left-bottom"},{label:b.i18n("921fccbb84c829bf8c6f0b9957029f44"),value:"fixed-right-bottom"}]},{visibleOn:"data.popOver",name:"popOver",mode:"row",asFormItem:!0,children:function(e){var a=e.value,t=e.onChange;return a=i.__assign({type:"panel",title:b.i18n("5b48dbb8dc710cffe6313bb56a7f6d47"),body:b.i18n("1d53f83df1d889a70131b7a93c819575")},a),o.default.createElement(r.Button,{block:!0,level:"primary",onClick:function(){f.manager.openSubEditor({title:b.i18n("8dda45360dcf9ca501fd7d0eb53045b5"),value:a,onChange:function(e){return t(e,"quickEdit")}})}},"查看更多内容配置")}}]}}),c.setSchemaTpl("copyable",{type:"ae-switch-more",mode:"normal",name:"copyable",label:b.i18n("f9a9fcc3bf6a3c8ff1e99fa48ed6d03d"),value:!1,hiddenOnDefault:!0,formType:"extend",pipeIn:function(e){return!!e},form:{body:[{label:b.i18n("deb65aca8dba2ff9d0cfaed0a3441068"),name:"copyable.content",type:"textarea",mode:"row",maxRow:2,visibleOn:"data.copyable",description:b.i18n("622e14515c4fd5ca6fe6946e3a1bfb4a")}]}});var u=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"static"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/StaticControlSchema.json"}),Object.defineProperty(a,"order",{enumerable:!0,configurable:!0,writable:!0,value:-390}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("33e7b7433fdbeafa1ef71105ee28c061")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-info"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"static-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("b4482a3d9523f48e83a816fa85911185")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/static"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[b.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"static",label:b.i18n("3bdd08adab6ea90b9164b20a0e4151ac")}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[i.__assign(i.__assign({},a.scaffold),{value:b.i18n("134492cd10a0646da6f23a743feee6d4")})]}}),Object.defineProperty(a,"multifactor",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"notRenderFormZone",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("04f5f12c49c2a6fdc43da049591328ad")}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var a=e.info.renderer;return c.getSchemaTpl("tabs",[{title:b.i18n("24d67862f87f439db7ca957aecb77cce"),body:c.getSchemaTpl("collapseGroup",[{title:b.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[{type:"alert",inline:!1,level:"warning",className:"text-sm",body:'<p>当前组件已停止维护，建议您使用<a href="https://baidu.gitee.io/amis/zh-CN/components/form/formitem#%E9%85%8D%E7%BD%AE%E9%9D%99%E6%80%81%E5%B1%95%E7%A4%BA" target="_blank">静态展示</a>新特性实现表单项的静态展示。</p>'},c.getSchemaTpl("formItemName",{required:!1}),c.getSchemaTpl("label")]},c.getSchemaTpl("status",{isFormItem:!0,unsupportStatic:!0})])},{title:b.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:c.getSchemaTpl("collapseGroup",[c.getSchemaTpl("style:formItem",{renderer:a}),{title:b.i18n("e1b2f870112bd38f8d7e14a0ad589930"),body:[c.getSchemaTpl("borderMode")]},{title:b.i18n("261bba7ad82914e477f4b37f6a83874e"),body:[c.getSchemaTpl("className",{label:b.i18n("16a20243f9b741c08216dc9548de2968")}),c.getSchemaTpl("className",{label:b.i18n("14d342362f66aa86e2aa1c1e11aa1204"),name:"labelClassName"}),c.getSchemaTpl("className",{label:b.i18n("e1b2f870112bd38f8d7e14a0ad589930"),name:"inputClassName"}),c.getSchemaTpl("className",{label:b.i18n("3bdd08adab6ea90b9164b20a0e4151ac"),name:"descriptionClassName",visibleOn:"this.description"})]}])}])}}),a}return i.__extends(a,e),Object.defineProperty(a.prototype,"filterProps",{enumerable:!1,configurable:!0,writable:!0,value:function(e,a){return e.$$id=a.id,void 0===e.value&&(e.value=c.mockValue(e)),e}}),a}(c.BasePlugin);c.registerEditorPlugin(u),a.StaticControlPlugin=u}));