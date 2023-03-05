amis.define("9a27cbe",(function(e,a,n,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e("849c8c1"),l=e("8ba532b"),r=e("fb32b1a"),b=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"input-rich-text"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/RichTextControlSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("24b6d4c0892a8f3ee2a982e3ab0afe38")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-newspaper-o"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"input-rich-text-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("42c036311993897680ef37f11e4e20a8")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/input-rich-text"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[r.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"input-rich-text",label:r.i18n("e2591e971f4c28db7c80a5f546084a1d"),name:"rich-text",receiver:"/api/upload/image",vendor:"tinymce"}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[t.__assign({},a.scaffold)]}}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("e2591e971f4c28db7c80a5f546084a1d")}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var n,i=!!(null===(n=a.manager.env)||void 0===n?void 0:n.richTextToken);return[l.getSchemaTpl("layout:originPosition",{value:"left-top"}),l.getSchemaTpl("switchDefaultValue"),{type:"textarea",name:"value",label:r.i18n("225f3ed00750ae78ad1e6ea42c8f5087"),visibleOn:'typeof this.value !== "undefined"'},l.getSchemaTpl("api",{name:"receiver",label:r.i18n("b582587147013afc52c58de5fe34d7d7"),value:"/api/upload/image",__isUpload:!0}),{type:"select",name:"vendor",label:r.i18n("70209fc05c1a5b21f05b186a0f7ba2ee"),value:i?"froala":"tinymce",options:["tinymce","froala"]},l.getSchemaTpl("fieldSet",{title:r.i18n("eca97e97331bd76aab9f6160991e02bb"),visibleOn:'data.vendor === "froala"',body:[{type:"combo",name:"options",noBorder:!0,multiLine:!0,items:[{type:"select",name:"language",label:r.i18n("295bb704f5205801d57d672780b94117"),labelRemark:r.i18n("39624e820b79bbd62561357f6179c8d7"),defaultValue:"zh_cn",options:[{label:r.i18n("a7bac2239fcdcb3a067903d8077c4a07"),value:"zh_cn"},{label:r.i18n("f9fb6a063d1856da86a06def2dc6b921"),value:"en_us"}]},{type:"textarea",name:"toolbarButtons",label:r.i18n("81fafee54baebeb9591b5e7840d7e650"),labelRemark:r.i18n("0b6eee152cb2553ed4298ca2fe82d3f8"),description:r.i18n("d85a80d177db696b29b7338af1501055"),minRows:5,value:["paragraphFormat","quote","color","|","bold","italic","underline","strikeThrough","|","formatOL","formatUL","align","|","insertLink","insertImage","insertEmotion","insertTable","|","undo","redo","html"],pipeIn:function(e){return Array.isArray(e)?e.join(" "):""},pipeOut:function(e){return e.replace(/\s+/g," ").split(" ")}},{type:"textarea",name:"toolbarButtonsMD",label:r.i18n("f126c4368fbf51cfd470684e7c3d31c9"),labelRemark:r.i18n("3b8c320d14dba586c581ceb951917397"),description:r.i18n("d85a80d177db696b29b7338af1501055"),minRows:5,pipeIn:function(e){return Array.isArray(e)?e.join(" "):""},pipeOut:function(e){return e.replace(/\s+/g," ").split(" ")}},{type:"textarea",name:"toolbarButtonsSM",label:r.i18n("89bc688b5b497e515ce3c026a1d92669"),labelRemark:r.i18n("a849d8a0f59f3ae146b149b7b4fc7480"),description:r.i18n("d85a80d177db696b29b7338af1501055"),minRows:5,pipeIn:function(e){return Array.isArray(e)?e.join(" "):""},pipeOut:function(e){return e.replace(/\s+/g," ").split(" ")}}]}]}),l.getSchemaTpl("fieldSet",{title:r.i18n("b8c8f1c6a56e902bd837420da0f554b3"),visibleOn:'data.vendor === "tinymce"',body:[{type:"combo",name:"options",noBorder:!0,multiLine:!0,items:[l.getSchemaTpl("switch",{label:r.i18n("e4d0e65de0018b63698ff22d683d6dd5"),value:"true",name:"menubar"}),{type:"input-number",label:r.i18n("c1df04eec5fa0857bc0df2d68d8e953c"),min:0,value:400,name:"height"},{name:"plugins",label:r.i18n("63068211669d69b4028eebe0052425e7"),description:r.i18n("5e568c42a5ecb74db2dc3d8531079dd6"),type:"input-array",inline:!0,items:{type:"input-text",clearable:!0},value:["advlist","autolink","link","image","lists","charmap","preview","anchor","pagebreak","searchreplace","wordcount","visualblocks","visualchars","code","fullscreen","insertdatetime","media","nonbreaking","table","emoticons","template","help"]},{type:"textarea",name:"toolbar",label:r.i18n("012f602372cd2dbd639cd966c63e1f90"),value:"undo redo | formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"}]}]})]}}),a}return t.__extends(a,e),a}(l.BasePlugin);l.registerEditorPlugin(b),a.RichTextControlPlugin=b}));