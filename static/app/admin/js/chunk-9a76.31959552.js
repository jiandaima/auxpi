(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9a76"],{Kos7:function(t,e,a){"use strict";a.d(e,"b",function(){return o}),a.d(e,"d",function(){return l}),a.d(e,"e",function(){return i}),a.d(e,"c",function(){return n}),a.d(e,"g",function(){return r}),a.d(e,"h",function(){return c}),a.d(e,"a",function(){return u}),a.d(e,"f",function(){return p});var s=a("t3Un");function o(){return Object(s.a)({url:"/admin/get_rsa_key",method:"get"})}function l(t){return Object(s.a)({url:"/admin/update_site_config",method:"post",data:t})}function i(t){return Object(s.a)({url:"/admin/update_menu",method:"post",data:t})}function n(t){return Object(s.a)({url:"/options/stores",method:"get",params:t})}function r(t,e){return console.log(t),Object(s.a)({url:"/admin/update_stores_options/"+e,method:"post",data:t})}function c(t){return Object(s.a)({url:"/admin/update_store/",method:"post",data:t})}function u(t){return Object(s.a)({url:"/options/info",method:"get",params:t})}function p(t,e){return Object(s.a)({url:"/options/update?key="+e.key+"&group="+e.group,method:"post",data:t})}},WNS7:function(t,e,a){},agRF:function(t,e,a){"use strict";var s=a("WNS7");a.n(s).a},"k+eM":function(t,e,a){"use strict";a.r(e);var s=a("4d7F"),o=a.n(s),l=a("Kos7"),i={name:"SiteConfig",data:function(){return{show:!1,tableData:[],sina:null,flickr:null,local:null,storeList:[],selectValue:"",sinaOptions:[{size:"square"},{size:"thumb150"},{size:"orj360"},{size:"orj480"},{size:"mw690"},{size:"mw1024"},{size:"mw2048"},{size:"small"},{size:"bmiddle"},{size:"large"}],sinaTimeOptions:[{size:"一小时",value:3600},{size:"半天",value:43200},{size:"一天",value:86400}],sinaEx:"",flickrOptions:[{size:"小正方形",value:"s"},{size:"大正方形",value:"q"},{size:"缩略图",value:"t"},{size:"小型图片",value:"m"},{size:"稍微小的图片",value:"n"},{size:"中等图片",value:""},{size:"中等偏大",value:"z"},{size:"中等大",value:"c"},{size:"大尺寸",value:"b"},{size:"高清尺寸",value:"h"},{size:"超大尺寸",value:"k"},{size:"原始图片",value:"o"}],mailPortList:[{info:"465 (ssl)",value:"465"},{info:"587 (tls)",value:"587"},{info:"22 (无加密)",value:"22"}],privateKey:"",publicKey:"",loading:!0,github:null,gitee:null,imgur:null,gb:{key:"github",group:"conf"},ge:{key:"gitee",group:"conf"},ll:{key:"local",group:"conf"},ir:{key:"imgur",group:"conf"},fr:{key:"flickr",group:"conf"},sa:{key:"sina",group:"conf"},github_info:null,gitee_info:null,local_info:null,flickr_info:null,imgur_info:null,sina_info:null}},created:function(){this.loadConfig()},methods:{loadConfig:function(){var t=this,e=Object(l.c)(this.gb).then(function(e){t.github=JSON.parse(e.data.account),t.github_info=e.data.store}),a=Object(l.c)(this.ge).then(function(e){t.gitee=JSON.parse(e.data.account),t.gitee_info=e.data.store}),s=Object(l.c)(this.ll).then(function(e){t.local=JSON.parse(e.data.account),t.local_info=e.data.store}),i=Object(l.c)(this.ir).then(function(e){t.imgur=JSON.parse(e.data.account),t.imgur_info=e.data.store,console.log(t.imgur.proxy.status)}),n=Object(l.c)(this.fr).then(function(e){t.flickr=JSON.parse(e.data.account),t.flickr_info=e.data.store}),r=Object(l.c)(this.sa).then(function(e){t.sina=JSON.parse(e.data.account),t.sina_info=e.data.store});o.a.all([e,a,s,i,n,r]).then(function(){console.log("allDone"),t.sinaEx="https://ww2.sinaimg.cn/"+t.sina.defult_pic_size+"/006A66c0ly1g2l330kewvj31hc0u0azk",t.show=!0,t.loading=!1})},resetLink:function(t){this.sinaEx="https://ww2.sinaimg.cn/"+t+"/006A66c0ly1g2l330kewvj31hc0u0azk"},reset:function(t,e){var a=this;Object(l.g)(t,e.api).then(function(t){a.$message({message:"修改成功",type:"success"})}),Object(l.h)(e)}}},n=(a("agRF"),a("KHd+")),r=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("el-row",[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[a("svg-icon",{staticStyle:{"font-size":"30px"},attrs:{"icon-class":"img-manager"}}),t._v(" 图床设置")],1)]),t._v(" "),t.loading?a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br")]):t._e(),t._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[t.show?a("el-row",{attrs:{gutter:8}},[a("el-col",{staticClass:"box",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("Github")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.github,t.github_info)}}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"box"},[a("el-row",[t._v("\n                  是否开启Github 存储:\n                  "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.github_info.status,callback:function(e){t.$set(t.github_info,"status",e)},expression:"github_info.status"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[t.github_info.status?a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-input",{attrs:{placeholder:"assess_token"},model:{value:t.github.access_token,callback:function(e){t.$set(t.github,"access_token",e)},expression:"github.access_token"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("您在 github 申请到的access_token")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Access_Token")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"owner"},model:{value:t.github.owner,callback:function(e){t.$set(t.github,"owner",e)},expression:"github.owner"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("仓库拥有者，一般填写您本人的 github 用户名即可")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Owner")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"repo"},model:{value:t.github.repo,callback:function(e){t.$set(t.github,"repo",e)},expression:"github.repo"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("填写您要使用的仓库即可")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Repo")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"email"},model:{value:t.github.email,callback:function(e){t.$set(t.github,"email",e)},expression:"github.email"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("填写您注册github 所使用的 Email 即可")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Email")])],1)],1)],2)],1),t._v(" "),a("el-row",[t._v("\n                      是否开启代理:\n                      "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.github.proxy.status,callback:function(e){t.$set(t.github.proxy,"status",e)},expression:"github.proxy.status"}}),t._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[t.github.proxy.status?a("el-card",[a("el-input",{attrs:{placeholder:"proxy"},model:{value:t.github.proxy.node,callback:function(e){t.$set(t.github.proxy,"node",e)},expression:"github.proxy.node"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("代理链接")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Proxy")])],1)],1)],2)],1):t._e()],1)],1)],1):t._e()],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("本地图床配置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.local,t.local_info)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[t._v("\n                  是否开启本地图床:\n                  "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.local_info.status,callback:function(e){t.$set(t.local_info,"status",e)},expression:"local_info.status"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:t.local_info.status,expression:"local_info.status"}],staticClass:"box-card"},[a("el-row",[a("el-button",{attrs:{round:""}},[t._v("点我查看配置教程")])],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"请输入您的默认链接地址"},model:{value:t.local.link,callback:function(e){t.$set(t.local,"link",e)},expression:"local.link"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v('开头必须要有"/",最后不能有 "/"')]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("软路径")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"请输入储存路径"},model:{value:t.local.storage_location,callback:function(e){t.$set(t.local,"storage_location",e)},expression:"local.storage_location"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v('开头不能有"/",最后也不能有"/"'),a("br"),t._v("也可以直接填写绝对地址")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("储存路径")])],1)],1)],2)],1)],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("Imgur")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.imgur,t.imgur_info)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[t._v("\n                  是否开启Imgur图床:\n                  "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.imgur_info.status,callback:function(e){t.$set(t.imgur_info,"status",e)},expression:"imgur_info.status"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:t.imgur_info.status,expression:"imgur_info.status"}],staticClass:"box-card"},[a("el-row",[a("el-button",{attrs:{round:""}},[t._v("点我查看配置教程")])],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"Client ID"},model:{value:t.imgur.imgur_id,callback:function(e){t.$set(t.imgur,"imgur_id",e)},expression:"imgur.imgur_id"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("从 imgur 申请到的 id")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Client ID")])],1)],1)],2)],1),t._v(" "),a("el-row",[t._v("\n                      是否开启代理:\n                      "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.imgur.proxy.status,callback:function(e){t.$set(t.imgur.proxy,"status",e)},expression:"imgur.proxy.status"}}),t._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[t.imgur.proxy.status?a("el-card",[a("el-input",{attrs:{placeholder:"proxy"},model:{value:t.imgur.proxy.node,callback:function(e){t.$set(t.imgur.proxy,"node",e)},expression:"imgur.proxy.node"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("代理链接")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Proxy")])],1)],1)],2)],1):t._e()],1)],1)],1)],1)],1)])],1),t._v(" "),a("el-col",{staticClass:"box",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("Gitee")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.gitee,t.gitee_info)}}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"box"},[a("el-row",[t._v("\n                  是否开启Gitee 存储:\n                  "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.gitee_info.status,callback:function(e){t.$set(t.gitee_info,"status",e)},expression:"gitee_info.status"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[t.gitee_info.status?a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-input",{attrs:{placeholder:"assess_token"},model:{value:t.gitee.access_token,callback:function(e){t.$set(t.gitee,"access_token",e)},expression:"gitee.access_token"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("您在 gitee 申请到的access_token")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Access_Token")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"owner"},model:{value:t.gitee.owner,callback:function(e){t.$set(t.gitee,"owner",e)},expression:"gitee.owner"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("仓库拥有者，一般填写您本人的 github 用户名即可")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Owner")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"repo"},model:{value:t.gitee.repo,callback:function(e){t.$set(t.gitee,"repo",e)},expression:"gitee.repo"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("填写您要使用的仓库即可")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Repo")])],1)],1)],2)],1)],1):t._e()],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("微博图床配置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.sina,t.sina_info)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[t._v("\n                  是否开启微博图床:\n                  "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.sina_info.status,callback:function(e){t.$set(t.sina_info,"status",e)},expression:"sina_info.status"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[t.sina_info.status?a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.sina.user_name,callback:function(e){t.$set(t.sina,"user_name",e)},expression:"sina.user_name"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("您的微博登录用来登录的用户名")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("微博用户名")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:t.sina.pass_word,callback:function(e){t.$set(t.sina,"pass_word",e)},expression:"sina.pass_word"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("您的微博登录用来登录的密码")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("微博密码")])],1)],1)],2)],1),t._v(" "),a("el-row",[t._v("\n                      默认图片大小 :\n                      "),a("el-select",{staticStyle:{"margin-left":"25px"},attrs:{placeholder:"请选择"},on:{change:function(e){t.resetLink(t.sina.defult_pic_size)}},model:{value:t.sina.defult_pic_size,callback:function(e){t.$set(t.sina,"defult_pic_size",e)},expression:"sina.defult_pic_size"}},t._l(t.sinaOptions,function(t){return a("el-option",{key:t.size,attrs:{label:t.size,value:t.size}})})),t._v(" "),a("el-card",{attrs:{shadow:"always"}},[t._v("\n                        链接效果 (点击可以直接查看图片) :"),a("br"),a("br"),t._v(" "),a("a",{attrs:{href:"https://images.weserv.nl/?url="+t.sinaEx,target:"_blank"}},[t._v(t._s(t.sinaEx))])])],1),t._v(" "),a("el-row",[a("span",[t._v(" Cookie 缓存时间:")]),t._v(" "),a("el-select",{staticStyle:{"margin-left":"25px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.sina.reset_sina_cookie_time,callback:function(e){t.$set(t.sina,"reset_sina_cookie_time",e)},expression:"sina.reset_sina_cookie_time"}},t._l(t.sinaTimeOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.size,value:t.value}})}))],1),t._v(" "),a("el-row",[t._v("\n                      是否开启代理:\n                      "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.sina.proxy.status,callback:function(e){t.$set(t.sina.proxy,"status",e)},expression:"sina.proxy.status"}}),t._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[t.sina.proxy.status?a("el-card",[a("el-input",{attrs:{placeholder:"proxy"},model:{value:t.sina.proxy.node,callback:function(e){t.$set(t.sina.proxy,"node",e)},expression:"sina.proxy.node"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("代理链接")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Proxy")])],1)],1)],2)],1):t._e()],1)],1)],1):t._e()],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-size":"25px"}},[t._v("Flickr图床配置")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(e){t.reset(t.flickr,t.flickr_info)}}},[t._v("保存")])],1),t._v(" "),a("div",[a("el-row",[t._v("\n                  是否开启Flickr图床:\n                  "),a("el-switch",{staticStyle:{"margin-left":"25px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.flickr_info.status,callback:function(e){t.$set(t.flickr_info,"status",e)},expression:"flickr_info.status"}})],1),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-center"}},[t.flickr_info.status?a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-input",{attrs:{placeholder:"Flickr ID"},model:{value:t.flickr.id,callback:function(e){t.$set(t.flickr,"id",e)},expression:"flickr.id"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("Flickr ID 及 Flickr 分配给您的用户 ID")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("ID")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"api_key"},model:{value:t.flickr.api_key,callback:function(e){t.$set(t.flickr,"api_key",e)},expression:"flickr.api_key"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("向 Flickr 申请到的 api_key")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Api_key")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"api_secret"},model:{value:t.flickr.api_secret,callback:function(e){t.$set(t.flickr,"api_secret",e)},expression:"flickr.api_secret"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("向 Flickr 申请到的 api_secret")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Api_secret")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"Oauth_token"},model:{value:t.flickr.oauth_token,callback:function(e){t.$set(t.flickr,"oauth_token",e)},expression:"flickr.oauth_token"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("通过 Flickr 工具获取到的Oauth_token")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Oauth_token")])],1)],1)],2)],1),t._v(" "),a("el-row",[a("el-input",{attrs:{placeholder:"Oauth_token_secret"},model:{value:t.flickr.oauth_token_secret,callback:function(e){t.$set(t.flickr,"oauth_token_secret",e)},expression:"flickr.oauth_token_secret"}},[a("template",{slot:"prepend"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("通过 Flickr 工具获取到的Oauth_token_secret")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Oauth_token_secret")])],1)],1)],2)],1),t._v(" "),a("el-row",[t._v("\n                      默认图片大小 :\n                      "),a("el-select",{staticStyle:{"margin-left":"25px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.flickr.default_size,callback:function(e){t.$set(t.flickr,"default_size",e)},expression:"flickr.default_size"}},t._l(t.flickrOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.size,value:t.value}})}))],1),t._v(" "),a("el-row",[a("el-button",{staticStyle:{float:"right"},attrs:{round:""}},[t._v("查看教程")])],1)],1):t._e()],1)],1)])],1)],1):t._e()],1)],1)],1)],1)},[],!1,null,"2194643e",null);r.options.__file="dispatch.vue";e.default=r.exports}}]);