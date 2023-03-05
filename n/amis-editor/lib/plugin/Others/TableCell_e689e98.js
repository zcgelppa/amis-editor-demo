amis.define("b83c2ca",(function(e,a,l,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e("849c8c1"),c=e("167c905"),i=e("cc4bbf0"),d=e("8ba532b"),b=e("c2555e3"),f=e("fb32b1a");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(i),p=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:f.i18n("dc7558211f2990370954c2e7ca498ee9")}),Object.defineProperty(a,"panelIcon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-columns"}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return[d.getSchemaTpl("tabs",[{title:f.i18n("22b777e6fcb613b8ba83ced9594cd07e"),body:[d.getSchemaTpl("label",{label:f.i18n("bcee820bc20342a4d388a35ed32a35fe")}),d.getSchemaTpl("formItemName",{label:f.i18n("41a344642681efaaa418c228ba7fb45c")}),d.getSchemaTpl("tableCellRemark"),{name:"placeholder",type:"input-text",label:f.i18n("4c1cff4d8c05daa6ed9352a241ee628c"),value:"-",description:f.i18n("ff88d5db9d61f14bce6e3397fd4652a5")},d.getSchemaTpl("switch",{name:"sortable",label:f.i18n("233662283039ded8c29f070d1a807029"),description:f.i18n("348097cc50579e489f0bcb5433637d3a")})]},{title:f.i18n("dfac151de712ab0b3618072c8a7f0a0f"),body:[{name:"groupName",label:f.i18n("9db64f772c11c614ee00bb3cc066f46f"),type:"input-text",description:f.i18n("fea0f3f456153564218a9eefb78d8cec")},d.getSchemaTpl("switch",{name:"quickEdit",label:f.i18n("19c4f5e98ad302574202de30dddbaf66"),pipeIn:function(e){return!!e}}),{visibleOn:"data.quickEdit",name:"quickEdit.mode",type:"button-group-select",value:"popOver",label:f.i18n("abd733d00ec656e7b0cfd88deedf102f"),size:"xs",mode:"inline",className:"w-full",options:[{label:f.i18n("78f395c15aaf8c92d9223f6ca69b41a4"),value:"popOver"},{label:f.i18n("c6e1b91d329a61b691d0d5d2eb343ddd"),value:"inline"}]},d.getSchemaTpl("switch",{name:"quickEdit.saveImmediately",label:f.i18n("15c3796e07e33afc7252df751f610c5d"),visibleOn:"data.quickEdit",description:f.i18n("2d2eb2ac28f074d1caef0d332d61cfb0"),descriptionClassName:"help-block m-b-none",pipeIn:function(e){return!!e}}),d.getSchemaTpl("api",{label:f.i18n("eccba4475f3144e417e55fd96e831e09"),description:f.i18n("c8e5c062d5ad38e54413abd9c7cfb2f4"),name:"quickEdit.saveImmediately.api",visibleOn:"this.quickEdit && this.quickEdit.saveImmediately"}),{visibleOn:"data.quickEdit",name:"quickEdit",asFormItem:!0,children:function(e){var l=e.value,n=e.onChange,i=e.data;!0===l?l={}:void 0===l&&(l=b.getVariable(i,"quickEdit"));var d=l.mode;return delete(l=t.__assign({type:"input-text",name:i.name},l)).mode,r.default.createElement(c.Button,{level:"info",className:"m-b",size:"sm",block:!0,onClick:function(){a.manager.openSubEditor({title:f.i18n("c3ed36e4abb96c18a6c83350994cdea7"),value:l,slot:{type:"form",mode:"normal",body:["$$"],wrapWithPanel:!1},onChange:function(e){return n(t.__assign(t.__assign({},e),{mode:d}),"quickEdit")}})}},"配置快速编辑")}},d.getSchemaTpl("switch",{name:"popOver",label:f.i18n("ba5a0a1ff2c438ae7719ca48b0ce3af7"),pipeIn:function(e){return!!e}}),{name:"popOver.mode",label:f.i18n("d689e3c38fdb32c98fb27f8f35a26552"),type:"select",visibleOn:"data.popOver",pipeIn:d.defaultValue("popOver"),options:[{label:f.i18n("18c63459a2c069022c7790430f761214"),value:"popOver"},{label:f.i18n("ab3aec075a09d055b2a28c8b61925ee0"),value:"dialog"},{label:f.i18n("33e6c41fed95c25e3b426d596d504579"),value:"drawer"}]},{name:"popOver.position",label:f.i18n("d689e3c38fdb32c98fb27f8f35a26552"),type:"select",visibleOn:'data.popOver && data.popOver.mode === "popOver"',pipeIn:d.defaultValue("center"),options:[{label:f.i18n("68b54e7b408c4fb83561c931aa668eae"),value:"center"},{label:f.i18n("e18459c93769a5afec01e1ce60f9b9fd"),value:"left-top"},{label:f.i18n("1fc3cdd8437f5057774cde2f2c51f97c"),value:"right-top"},{label:f.i18n("63dd9faca92bccfd436ff21a6b4b3151"),value:"left-bottom"},{label:f.i18n("d01c239688b9c8fc145191ee642dc080"),value:"right-bottom"},{label:f.i18n("8fcf9802436282672a8e28ebd6262390"),value:"fixed-left-top"},{label:f.i18n("aed25160b4e8cfc613a743c4549e9222"),value:"fixed-right-top"},{label:f.i18n("d4a4ab1916187e09b9c037705fd49ffa"),value:"fixed-left-bottom"},{label:f.i18n("921fccbb84c829bf8c6f0b9957029f44"),value:"fixed-right-bottom"}]},{visibleOn:"data.popOver",name:"popOver",asFormItem:!0,children:function(e){var l=e.value,n=e.onChange;return l=t.__assign({type:"panel",title:f.i18n("5b48dbb8dc710cffe6313bb56a7f6d47"),body:f.i18n("1d53f83df1d889a70131b7a93c819575")},l),r.default.createElement(c.Button,{level:"info",className:"m-b",size:"sm",block:!0,onClick:function(){a.manager.openSubEditor({title:f.i18n("8dda45360dcf9ca501fd7d0eb53045b5"),value:l,onChange:function(e){return n(e,"popOver")}})}},"查看更多内容配置")}},d.getSchemaTpl("switch",{name:"copyable",label:f.i18n("6e78b595d6a296938201a3c80660bf35"),pipeIn:function(e){return!!e}}),{visibleOn:"data.copyable",name:"copyable.content",type:"textarea",label:f.i18n("deb65aca8dba2ff9d0cfaed0a3441068"),description:f.i18n("622e14515c4fd5ca6fe6946e3a1bfb4a")}]},{title:f.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:[{name:"fixed",type:"button-group-select",label:f.i18n("65f7e01d58cb5065f49e0e8f48cc16be"),pipeIn:d.defaultValue(""),size:"xs",mode:"inline",className:"w-full",options:[{value:"",label:f.i18n("9ed8a4c5d1b3726121175dc986268b0c")},{value:"left",label:f.i18n("39a2cb79c6d9762783e20522ea86dcff")},{value:"right",label:f.i18n("de2a774bf98944b8f0ec8755d5f59d64")}]},d.getSchemaTpl("switch",{name:"toggled",label:f.i18n("0a5ac2f5c327e28c58d51db967a0e603"),pipeIn:d.defaultValue(!0)}),{name:"breakpoint",type:"button-group-select",label:f.i18n("a3bd2104e3df81df713de636b907462c"),visibleOn:"data.tableFootableEnabled",size:"xs",multiple:!0,options:[{label:f.i18n("986a5f50e946674bb91c9408fc974497"),value:"*"},{label:f.i18n("a165f0fe5fb904049f6b6961105e433f"),value:"xs"},{label:f.i18n("03ee8b948c9b34daca9584811bcca17d"),value:"sm"},{label:f.i18n("82d9f1f96084674e2b0101ecc04d5d58"),value:"md"},{label:f.i18n("f4166de371b5dfb87efce228b17a3fbb"),value:"lg"}],pipeIn:function(e){return e?"string"==typeof e?e:"*":""},pipeOut:function(e){return"string"==typeof e&&~e.indexOf("*")&&/xs|sm|md|lg/.test(e)?e.replace(/\*\s*,\s*|\s*,\s*\*/g,""):e}},d.getSchemaTpl("switch",{name:"className",label:f.i18n("f8cffd4d3fcdca390a3a3de24d209bb6"),pipeIn:function(e){return"string"==typeof e&&/\word\-break\b/.test(e)},pipeOut:function(e,a){return(e?"word-break ":"")+(a||"").replace(/\bword\-break\b/g,"").trim()}}),d.getSchemaTpl("className"),d.getSchemaTpl("className",{name:"innerClassName",label:f.i18n("4619988f1c5d9093dc00d1430633b2bd")}),{name:"width",type:"input-number",label:f.i18n("bdd9d38d7e2929024089363dc8f48b7a"),description:f.i18n("b198805e7a6b35830ba813f51db2fdc4")}]}])]}}),a}return t.__extends(a,e),Object.defineProperty(a.prototype,"getRendererInfo",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var a=e.renderer,l=e.schema;if("table-cell"===a.name)return{name:l.label?"<".concat(l.label,">列"):f.i18n("044892c0c637f2d9e78e78956b1ded01"),$schema:"/schemas/TableColumn.json",multifactor:!0,wrapperResolve:function(e){var a=[].slice.call(e.parentElement.children).indexOf(e)+1,n=e.closest("table");return[].slice.call(n.querySelectorAll("th:nth-child(".concat(a,'):not([data-editor-id="').concat(l.id,'"]),\n              td:nth-child(').concat(a,'):not([data-editor-id="').concat(l.id,'"])')))}}}}),Object.defineProperty(a.prototype,"beforeReplace",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var a=e.context;a.info.plugin===this&&a.data&&(a.data.label=a.data.label||a.schema.label,a.data.name=a.data.name||a.schema.name)}}),a}(d.BasePlugin);d.registerEditorPlugin(p),a.TableCellPlugin=p}));