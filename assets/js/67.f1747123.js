(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{342:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"被攻击时降低带宽占用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#被攻击时降低带宽占用"}},[t._v("#")]),t._v(" 被攻击时降低带宽占用")]),t._v(" "),s("p",[t._v("当你受到 CC 攻击时，攻击者的 IP 已经被 CC 防护拉黑，但是你的上下行带宽依然很高，\n这是因为 CC 防护会返回一个 503 状态码，因此占用了你的带宽。")]),t._v(" "),s("p",[t._v("你可以使用下面的配置来降低带宽占用。")]),t._v(" "),s("h2",{attrs:{id:"lts-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lts-版本"}},[t._v("#")]),t._v(" LTS 版本")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_http_status")]),t._v(" cc_deny=444")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"current-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#current-版本"}},[t._v("#")]),t._v(" Current 版本")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_action")]),t._v(" cc_deny=444")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("444 状态码是 nginx 定义的一个非标准的 HTTP 状态码，其作用就是直接关闭连接，不再发送任何数据。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("如果你使用了 444 状态码，那么在用户看来你的网站就像是不存在一样。这是因为网站出错一般都会有 HTTP 状态码用来提示错误，\n如果访问一个网站连错误提示都没有，那么大概率是这个网站不存在。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);