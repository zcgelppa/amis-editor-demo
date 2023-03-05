amis.define("72ed8a4",(function(e,a,b,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e("849c8c1"),n=e("8ba532b"),i=e("fb32b1a"),c=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"tasks"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/TasksSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:i.i18n("8a471486c6c7bbe43e14392c6b127aea")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:i.i18n("4f58f808d62c4e31c347e483898396d5")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/tasks"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[i.i18n("997c7a5d34f6fc628893f509d0df32e0")]}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"tasks-plugin"}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"tasks",name:"tasks",items:[{label:i.i18n("9ee043b0a77a26d22eec0f4ea99afbd3"),key:"hive",status:4,remark:i.i18n("2c8a99d35cb5704994cabcc61a4c3a4a")},{label:i.i18n("3709f71c9552ed5db76cbe8f3cb5d4be"),key:"partial",status:4},{label:i.i18n("c60ad696dee4e1eeff6f0f2c2e9b9fc0"),key:"full",status:4}]}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:t.__assign({},a.scaffold)}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:i.i18n("8a471486c6c7bbe43e14392c6b127aea")}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return n.getSchemaTpl("tabs",[{title:i.i18n("22b777e6fcb613b8ba83ced9594cd07e"),body:[n.getSchemaTpl("layout:originPosition",{value:"left-top"}),{name:"items",label:i.i18n("5c0dc424442c913c6d16a2cf43137da4"),type:"combo",multiple:!0,multiLine:!0,items:[n.getSchemaTpl("label",{label:i.i18n("78caf7115c5140f8913c581920239f22")}),{name:"key",type:"input-text",label:i.i18n("3a3778f20c0e1a55adafad4861a71216")},{name:"status",type:"input-number",label:i.i18n("bc7e74f7ccf8ed6fa5b7b7649b221daa")},n.getSchemaTpl("taskRemark")],addButtonText:i.i18n("76ba17faedd82297d09b2edd70c5914e"),scaffold:{label:i.i18n("d7ec2d3fea4756bc1642e0f10c180cf5"),key:"key",status:0,remark:i.i18n("f411d0f1f925d9b48d8c1d451bd809b1")},description:i.i18n("093bcd735847b8464d683464165adbb8")},n.getSchemaTpl("api",{name:"checkApi",label:i.i18n("7dca021cccc260dbe1d81dfc6b29f513")}),{name:"interval",type:"input-number",min:3e3,step:500,visibleOn:"data.checkApi",pipeIn:n.defaultValue(3e3),label:i.i18n("358e55678114f19424efbb42c0a927d9")},n.getSchemaTpl("api",{name:"submitApi",label:i.i18n("77bd60ba17a73ede5d81c4eeba0f830d")}),n.getSchemaTpl("api",{name:"reSubmitApi",label:i.i18n("1e057692fcf81e07e20b5f7c9073ea35")}),n.getSchemaTpl("loadingConfig",{},{context:e}),{type:"divider"},n.getSchemaTpl("taskNameLabel"),n.getSchemaTpl("operationLabel"),n.getSchemaTpl("statusLabel"),n.getSchemaTpl("remarkLabel"),{name:"btnText",label:i.i18n("cf6e87cb9edfa398ccfc3db377e34ca4"),type:"input-text",pipeIn:n.defaultValue(i.i18n("879eb99c7b1aa3223925b9b2dbad4c63"))},{name:"retryBtnText",label:i.i18n("804b6382fa6d8b53c5a2a409f30f7fe2"),type:"input-text",pipeIn:n.defaultValue(i.i18n("132c5cdcceb0f1f17c8c088a42959aa4"))},{name:"statusTextMap",pipeIn:n.defaultValue([i.i18n("dd4e55c39cee201b82dbc9cb2aca173f"),i.i18n("c0d2181d579cd1e965ed10d5183b1fc0"),i.i18n("fb852fc6cce168301447d1baff276dc5"),i.i18n("ad8e01fe719bf1a5af82ee0d100d246b"),i.i18n("fad5222ca0acfaee54f06458188d916a"),i.i18n("ad8e01fe719bf1a5af82ee0d100d246b")]),type:"input-array",label:i.i18n("7a4b9e6f14bda48d2c3bf0fa431bd2b3"),multiple:!0,addable:!1,removable:!1,items:n.getSchemaTpl("inputArrayItem")},{name:"initialStatusCode",label:i.i18n("f198581dbbc357ccc0283cfe02d56edd"),pipeIn:n.defaultValue(0),type:"input-number"},{name:"readyStatusCode",label:i.i18n("d6bab2368de31490741ed95f732aaa25"),pipeIn:n.defaultValue(1),type:"input-number"},{name:"loadingStatusCode",label:i.i18n("6eafca9359acbb0bedcf86d6b8609e41"),pipeIn:n.defaultValue(2),type:"input-number"},{name:"errorStatusCode",label:i.i18n("7e8b2e41a303cb8532b9ad2006da3c25"),pipeIn:n.defaultValue(3),type:"input-number"},{name:"finishStatusCode",label:i.i18n("231b6f799949f9a743d5193006a15af7"),pipeIn:n.defaultValue(4),type:"input-number"},{name:"canRetryStatusCode",label:i.i18n("003797f6b66c67cd87ec684cacb4ab70"),pipeIn:n.defaultValue(5),type:"input-number"}]},{title:i.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:[n.getSchemaTpl("className",{pipeIn:n.defaultValue("b-a bg-white table-responsive")}),n.getSchemaTpl("className",{name:"tableClassName",label:i.i18n("320f489db3dade075d69f155b346f98b"),pipeIn:n.defaultValue("table table-striped m-b-none")}),n.getSchemaTpl("className",{name:"btnClassName",label:i.i18n("89d19c1fda4906bd7a336895835ce20e"),pipeIn:n.defaultValue("btn-sm btn-default")}),n.getSchemaTpl("className",{name:"retryBtnClassName",label:i.i18n("c52b46333f6d5d2796ee64cb359cd58a"),pipeIn:n.defaultValue("btn-sm btn-danger")}),{name:"statusLabelMap",pipeIn:n.defaultValue(["label-warning","label-info","label-info","label-danger","label-success","label-danger"]),type:"input-array",label:i.i18n("b091a100499d48dd4ccf0b982aa37d68"),multiple:!0,addable:!1,removable:!1,items:{type:"input-text",placeholder:i.i18n("4434b33a8731a73613ba5fa1eb984efb")}}]},{title:i.i18n("33bf801796fd255b5f6147e33146669b"),body:[n.getSchemaTpl("visible")]}])}}),a}return t.__extends(a,e),a}(n.BasePlugin);n.registerEditorPlugin(c),a.TasksPlugin=c}));