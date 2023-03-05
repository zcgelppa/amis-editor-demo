amis.define("539ceb6",(function(e,a,n,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("849c8c1"),l=e("8ba532b"),r=e("fb32b1a"),c=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"collapse-group"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/CollapseGroupSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("d09980a88568f75e9267ca7b531c74eb")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("0d571a7ab19e098820e8cea4d5a80f7d")}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[r.i18n("027446c2f9070b0f5b16a18208bf5fc7"),r.i18n("22c799040acdb2601b437ed5449de076")]}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-align-justify"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"collapse-plugin"}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"collapse-group",activeKey:["1"],body:[{type:"collapse",key:"1",active:!0,header:r.i18n("17dcbf1f144607d4af0bb718e008682f"),body:[{type:"tpl",tpl:r.i18n("f7fb20f6cacd5e40c7f5732cb377d0bf"),inline:!1}]},{type:"collapse",key:"2",header:r.i18n("72d41bd9eb3882f7da6f55d0ff0a39f6"),body:[{type:"tpl",tpl:r.i18n("f7fb20f6cacd5e40c7f5732cb377d0bf"),inline:!1}]}]}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:i.__assign({},a.scaffold)}),Object.defineProperty(a,"activeKeyData",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("d09980a88568f75e9267ca7b531c74eb")}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return[l.getSchemaTpl("tabs",[{title:r.i18n("24d67862f87f439db7ca957aecb77cce"),body:l.getSchemaTpl("collapseGroup",[{title:r.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[l.getSchemaTpl("layout:originPosition",{value:"left-top"}),{name:"expandIconPosition",label:r.i18n("0431ee7033364800e261d1e560808231"),type:"button-group-select",pipeIn:l.defaultValue("left"),options:[{label:r.i18n("a7eaff29603a9c40927f726013d2c016"),value:"left",icon:"fa fa-align-left"},{label:r.i18n("128d58f066a18ddb2ddb701921d5c77c"),value:"right",icon:"fa fa-align-right"}]},{type:"ae-switch-more",label:r.i18n("7372dc9f39a173dd0c75a185373245b1"),bulk:!0,mode:"normal",value:!1,formType:"extend",autoFocus:!1,form:{body:[l.getSchemaTpl("icon",{name:"expandIcon",label:r.i18n("5ef69f62dc668c1a3e68b51c50a2530a"),pipeIn:function(e){return null==e?void 0:e.icon},pipeOut:function(e){return{type:"icon",vendor:"",icon:e}}})]},pipeIn:function(e){if("string"==typeof e&&e.length)return{character:e}},pipeOut:function(e){if(l.isObject(e))return"string"==typeof e.character?e.character:void 0}},{name:"accordion",label:l.tipedLabel(r.i18n("47b4e22880eb59ce9989b8419222e88a"),r.i18n("bb3548f0bb97ab11ee92284ecf37ec16")),mode:"row",inputClassName:"inline-flex justify-between flex-row-reverse",type:"switch",pipeIn:l.defaultValue(!1)},l.getSchemaTpl("combo-container",{name:"body",type:"combo",label:r.i18n("f24544b06700857ec11b434cb2916692"),mode:"normal",multiple:!0,addable:!0,columnClassName:"w-20",addButtonText:r.i18n("c5ceab33d3e275262b4992a8cb43317f"),minLength:1,draggable:!0,draggableTip:"",placeholder:r.i18n("b839e579e920068bd817d34cd7927069"),items:[{type:"container",columnClassName:"flex-none",body:l.tipedLabel([{name:"active",type:"checkbox"}],r.i18n("030a54b0afb54fc7f90e1a0f64eb8205"))},{name:"header",placeholder:r.i18n("32c65d8d7431e76029678ec7bb73a5ab"),type:"input-text"}],onChange:function(e,a,n,t){var i=e.reduce((function(e,a){return!0===a.active&&e.push(a.key),e}),[]);t.setValues({activeKey:i})},pipeOut:function(e,a,n){var t=e.map((function(e){return e.key}));return e.forEach((function(a){if(!a.key){var n=function(e,a){for(var n=1;n<=a;n++)if(!e.includes(String(n)))return String(n)}(t,e.length);a.key=n,a.header="标题".concat(n)}})),e},scaffold:{type:"collapse",header:r.i18n("32c65d8d7431e76029678ec7bb73a5ab"),body:[{type:"tpl",tpl:r.i18n("2d711b09bd0db0ad240cc83b30dd8014"),inline:!1}],key:""}})]}])},{title:r.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:l.getSchemaTpl("collapseGroup",[l.getSchemaTpl("style:classNames",{isFormItem:!1})])}])]}}),Object.defineProperty(a,"regions",{enumerable:!0,configurable:!0,writable:!0,value:[{key:"body",label:r.i18n("132a78bdf68d6d17bde00aa807bbf032"),renderMethod:"render",insertPosition:"inner"}]}),a}return i.__extends(a,e),a}(l.BasePlugin);l.registerEditorPlugin(c),a.CollapseGroupPlugin=c}));