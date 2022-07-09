(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{308:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"enable-captcha-when-blocking-requests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-captcha-when-blocking-requests"}},[t._v("#")]),t._v(" Enable CAPTCHA when blocking requests "),e("Badge",{attrs:{text:">=v10.0.0",type:"tip"}})],1),t._v(" "),e("p",[t._v("Today, many attackers use automated tools to attack servers. These automated tools try every vulnerability, some of which are blocked by security measures, and some of which can evade detection.\nSometimes attackers will manually attack your service. We do not have a perfect defense against these attacks, but it is simple to increase the cost of the attack.")]),t._v(" "),e("p",[t._v("When a request is blocked, ngx_waf will use the CAPTCHA to challenge subsequent requests from this IP until the challenge is successful. This counteracts most automated attack tools, which try every exploit, and we can always identify some obvious attack requests and enable CAPTCHA, which is very difficult for automated tools to challenge successfully. For manual attackers, this greatly increases the cost of their time.")]),t._v(" "),e("p",[t._v("Here is an example.")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_zone")]),t._v(" name=waf size=20m")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_captcha")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")]),t._v(" prov=xxx sitekey=xxx secret=xxx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_action")]),t._v(" blacklist=CAPTCHA zone=waf:action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);