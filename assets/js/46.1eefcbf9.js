(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{324:function(e,_,r){"use strict";r.r(_);var t=r(13),a=Object(t.a)({},(function(){var e=this,_=e._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"更新日志-2-x-x"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更新日志-2-x-x"}},[e._v("#")]),e._v(" 更新日志（2.x.x）")]),e._v(" "),_("p",[e._v("本文件的格式基于"),_("a",{attrs:{href:"https://keepachangelog.com/zh-CN/1.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何维护更新日志"),_("OutboundLink")],1),e._v("，\n并且本项目遵守"),_("a",{attrs:{href:"https://semver.org/lang/zh-CN/spec/v2.0.0.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("语义化版本"),_("OutboundLink")],1),e._v("。")]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("何为「不兼容的修改」？")]),e._v(" "),_("ul",[_("li",[e._v("原有的配置文件可能无法使用，比如删除或者重命名了某个配置项。")]),e._v(" "),_("li",[e._v("可能需要更新编译环境，比如安装新的依赖。")])])]),e._v(" "),_("h2",{attrs:{id:"_2-1-1-2020-12-10"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-2020-12-10"}},[e._v("#")]),e._v(" [2.1.1] - 2020-12-10")]),e._v(" "),_("h3",{attrs:{id:"新增"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[e._v("#")]),e._v(" 新增")]),e._v(" "),_("h3",{attrs:{id:"改动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改动"}},[e._v("#")]),e._v(" 改动")]),e._v(" "),_("h3",{attrs:{id:"修复"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修复"}},[e._v("#")]),e._v(" 修复")]),e._v(" "),_("ul",[_("li",[e._v("修复了模块启动失败的 bug。此 bug 的报错信息为 "),_("code",[e._v('nginx: [alert] could not open error log file: open() "ngx_waf: /logs/error.log" failed (2: No such file or directory)')]),e._v("（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/0dfc46f2dfc7ed91977b501c868abf961966d4e1",target:"_blank",rel:"noopener noreferrer"}},[e._v("0dfc46f"),_("OutboundLink")],1),e._v("）。")])]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"_2-1-0-2020-12-09"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-0-2020-12-09"}},[e._v("#")]),e._v(" [2.1.0] - 2020-12-09")]),e._v(" "),_("h3",{attrs:{id:"新增-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增-2"}},[e._v("#")]),e._v(" 新增")]),e._v(" "),_("ul",[_("li",[e._v("兼容了 Mainline 版本的 nginx（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/f31f906b11fb00f54bfea504ca7c8c147a0be1d8",target:"_blank",rel:"noopener noreferrer"}},[e._v("f31f906"),_("OutboundLink")],1),e._v(" & "),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/7b4f897a4a332b43bf94de874f8ba8c3098aaee4",target:"_blank",rel:"noopener noreferrer"}},[e._v("65277d1"),_("OutboundLink")],1),e._v("）。")])]),e._v(" "),_("h3",{attrs:{id:"改动-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改动-2"}},[e._v("#")]),e._v(" 改动")]),e._v(" "),_("h3",{attrs:{id:"修复-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修复-2"}},[e._v("#")]),e._v(" 修复")]),e._v(" "),_("h2",{attrs:{id:"_2-0-2-2020-12-07"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-2-2020-12-07"}},[e._v("#")]),e._v(" [2.0.2] - 2020-12-07")]),e._v(" "),_("h3",{attrs:{id:"新增-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增-3"}},[e._v("#")]),e._v(" 新增")]),e._v(" "),_("h3",{attrs:{id:"改动-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改动-3"}},[e._v("#")]),e._v(" 改动")]),e._v(" "),_("h3",{attrs:{id:"修复-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修复-3"}},[e._v("#")]),e._v(" 修复")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("修复了一个 CC 防御失效的 bug。此 bug 会导致当 "),_("code",[e._v("waf_mult_mount")]),e._v(" 未启用时，CC 防御会失效（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/048fe5c15863d9a3106387225774305aa5564726",target:"_blank",rel:"noopener noreferrer"}},[e._v("048fe5c"),_("OutboundLink")],1),e._v("）。")])]),e._v(" "),_("li",[_("p",[e._v("修复了一个因错误的 "),_("code",[e._v("#include")]),e._v(" 指令而导致编译失败的 bug（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/3fa298c6184618ea0cd6336783a4d7a2ed27469c",target:"_blank",rel:"noopener noreferrer"}},[e._v("3fa298c"),_("OutboundLink")],1),e._v("）。")])])]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"_2-0-1-2020-12-03"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-1-2020-12-03"}},[e._v("#")]),e._v(" [2.0.1] - 2020-12-03")]),e._v(" "),_("h3",{attrs:{id:"新增-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增-4"}},[e._v("#")]),e._v(" 新增")]),e._v(" "),_("h3",{attrs:{id:"改动-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改动-4"}},[e._v("#")]),e._v(" 改动")]),e._v(" "),_("ul",[_("li",[e._v("不再手动下载 uthash 依赖，改用 system library。可以使用 "),_("code",[e._v("yum install uthash-devel")]),e._v(" 或 "),_("code",[e._v("apt-get install uthash-dev")]),e._v(" 安装 system library（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/7cfc94bc64fa4f2c29bdf3b24e21aeb1ba412054",target:"_blank",rel:"noopener noreferrer"}},[e._v("7cfc94b"),_("OutboundLink")],1),e._v("）。")])]),e._v(" "),_("h3",{attrs:{id:"修复-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修复-4"}},[e._v("#")]),e._v(" 修复")]),e._v(" "),_("ul",[_("li",[e._v("修复了因为宏的重定义导致的在 CentOS/RHEL 6 or 7 下编译失败的错误（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/28e1c8aca03375089c75df21c5db3c38013edde7",target:"_blank",rel:"noopener noreferrer"}},[e._v("28e1c8a"),_("OutboundLink")],1),e._v(" & "),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/566ae4a50f855674b256db84305a24e1b2a6bc6d",target:"_blank",rel:"noopener noreferrer"}},[e._v("566ae4a"),_("OutboundLink")],1),e._v("）。")])]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"_2-0-0-2020-09-29"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-0-2020-09-29"}},[e._v("#")]),e._v(" [2.0.0] - 2020-09-29")]),e._v(" "),_("h3",{attrs:{id:"新增-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增-5"}},[e._v("#")]),e._v(" 新增")]),e._v(" "),_("ul",[_("li",[e._v("支持以动态模块安装到 nginx 上，感谢 "),_("a",{attrs:{href:"https://github.com/dvershinin",target:"_blank",rel:"noopener noreferrer"}},[e._v("dvershinin"),_("OutboundLink")],1),e._v("的 PR（https://github.com/ADD-SP/ngx_waf/pull/4）。")])]),e._v(" "),_("h3",{attrs:{id:"改动-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改动-5"}},[e._v("#")]),e._v(" 改动")]),e._v(" "),_("ul",[_("li",[e._v("配置指令合并 ("),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/ba92cfd53ce78da8ff4ed22d2bc71a47de4cbe25",target:"_blank",rel:"noopener noreferrer"}},[e._v("ba92cfd"),_("OutboundLink")],1),e._v(")。这些配置指令将被合并："),_("code",[e._v("waf_check_ipv4")]),e._v("，"),_("code",[e._v("waf_check_url")]),e._v("，"),_("code",[e._v("waf_check_args")]),e._v("，"),_("code",[e._v("waf_check_ua")]),e._v("，"),_("code",[e._v("waf_check_referer")]),e._v("，"),_("code",[e._v("waf_check_cookie")]),e._v("，"),_("code",[e._v("waf_check_post")]),e._v("，"),_("code",[e._v("waf_check_cookie")]),e._v("，"),_("code",[e._v("waf_cc_deny")]),e._v("。合并后的新指令为"),_("code",[e._v("waf_mode")]),e._v("，详情见"),_("RouterLink",{attrs:{to:"/zh-cn/changes/README-ZH.html"}},[e._v("README")]),e._v("。")],1)]),e._v(" "),_("h3",{attrs:{id:"修复-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修复-5"}},[e._v("#")]),e._v(" 修复")]),e._v(" "),_("ul",[_("li",[e._v("删除一个默认的 User-Agent 规则，规则内容为"),_("code",[e._v("(?i)(?:Sogou web spider)")]),e._v("，原因是会拦截非恶意的网络爬虫（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/827d4e5bc48894ff9147e49799d3a9656fe7dd8a",target:"_blank",rel:"noopener noreferrer"}},[e._v("827d4e5"),_("OutboundLink")],1),e._v("）。")]),e._v(" "),_("li",[e._v("现在可以正确处理规则文件中的空行了（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/955cf2d240c4d66f815890e3ee9b88ccf906cf1d",target:"_blank",rel:"noopener noreferrer"}},[e._v("955cf2d"),_("OutboundLink")],1),e._v("）。")])]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"_1-0-1-2020-08-22"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-1-2020-08-22"}},[e._v("#")]),e._v(" [1.0.1] - 2020-08-22")]),e._v(" "),_("h3",{attrs:{id:"新增-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增-6"}},[e._v("#")]),e._v(" 新增")]),e._v(" "),_("ul",[_("li",[e._v("增加了新的配置项（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/3214fc88d565ed47daa4bdac4f0edb7d1785ed75",target:"_blank",rel:"noopener noreferrer"}},[e._v("3214fc8"),_("OutboundLink")],1),e._v("）\n"),_("ul",[_("li",[e._v("waf_check_ipv4:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_check_ipv4 [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("on")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：是否启用 IPV4 检查。")])])]),e._v(" "),_("li",[e._v("waf_check_url:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_check_url [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("on")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：是否启用 URL 检查。")])])]),e._v(" "),_("li",[e._v("waf_check_args:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_check_args [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("on")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：是否启用 Args 检查。")])])]),e._v(" "),_("li",[e._v("waf_check_ua:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_check_ua [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("on")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：是否启用 User-Agent 检查。")])])]),e._v(" "),_("li",[e._v("waf_check_referer:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_check_referer [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("on")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：是否启用 Referer 检查。")])])]),e._v(" "),_("li",[e._v("waf_check_cookie:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_check_cookie [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("on")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：是否启用 Cookie 检查。")])])]),e._v(" "),_("li",[e._v("waf_check_post:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_check_post [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("off")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：是否启用 POST 检查。")])])]),e._v(" "),_("li",[e._v("waf_cc_deny:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_cc_deny [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("off")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：是否启用 CC 防御。")])])])])])]),e._v(" "),_("h3",{attrs:{id:"改动-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改动-6"}},[e._v("#")]),e._v(" 改动")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("waf_mult_mount")]),e._v("现在只允许写在"),_("code",[e._v("server")]),e._v("段中（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/3214fc88d565ed47daa4bdac4f0edb7d1785ed75",target:"_blank",rel:"noopener noreferrer"}},[e._v("3214fc8"),_("OutboundLink")],1),e._v("）。\n"),_("ul",[_("li",[e._v("waf_mult_mount:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_mult_mount [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("off")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：进行多阶段检查，当"),_("code",[e._v("nginx.conf")]),e._v("存在地址重写的情况下（如"),_("code",[e._v("rewrite")]),e._v("配置）建议启用，反之建议关闭。")])])])])]),e._v(" "),_("li",[e._v("更改现有的配置项关键字，删除了"),_("code",[e._v("ngx_")]),e._v("前缀（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/8b3e416cdfdc7e073a3392fc9ec027a4138af453",target:"_blank",rel:"noopener noreferrer"}},[e._v("8b3e416"),_("OutboundLink")],1),e._v("）。\n"),_("ul",[_("li",[e._v("waf:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("off")])]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：是否启用本模块。")])])]),e._v(" "),_("li",[e._v("waf_rule_path:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_rule_path dir;")])]),e._v(" "),_("li",[e._v("默认值：无")]),e._v(" "),_("li",[e._v("配置段: server")]),e._v(" "),_("li",[e._v("作用：规则文件所在目录，且必须以"),_("code",[e._v("/")]),e._v("结尾。")])])]),e._v(" "),_("li",[e._v("waf_mult_mount:\n"),_("ul",[_("li",[e._v("配置语法: "),_("code",[e._v("waf_mult_mount [ on | off ];")])]),e._v(" "),_("li",[e._v("默认值："),_("code",[e._v("off")])]),e._v(" "),_("li",[e._v("配置段: http")]),e._v(" "),_("li",[e._v("作用：进行多阶段检查，当"),_("code",[e._v("nginx.conf")]),e._v("存在地址重写的情况下（如"),_("code",[e._v("rewrite")]),e._v("配置）建议启用，反之建议关闭。")])])])])]),e._v(" "),_("li",[e._v("更新 referer 的默认规则，具体一点就是拷贝"),_("code",[e._v("rules/url")]),e._v("的内容到"),_("code",[e._v("rules/referer")]),e._v("中（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/55f5e26b6135af382b1db88057f5143631848ae7",target:"_blank",rel:"noopener noreferrer"}},[e._v("55f5e26"),_("OutboundLink")],1),e._v("）。")])]),e._v(" "),_("h3",{attrs:{id:"修复-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修复-6"}},[e._v("#")]),e._v(" 修复")]),e._v(" "),_("ul",[_("li",[e._v("修复 CC 防御功能检测逻辑的错误，该错误会导致实际的频率限制要远小于用户指定的限制，容易将正常访问识别为 CC 攻击（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/9cb51bba0cdf10c2fd1ac0a482d7435dcfdee93d",target:"_blank",rel:"noopener noreferrer"}},[e._v("9cb51bb"),_("OutboundLink")],1),e._v("）（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/171721cee861022e9f3db5fceeb16051b90a5e54",target:"_blank",rel:"noopener noreferrer"}},[e._v("171721c"),_("OutboundLink")],1),e._v("）。")]),e._v(" "),_("li",[e._v("现在会检查 rules/ipv4 和 rules/white-ipv4 这两个文件中的 IPV4 地址或地址块是否合法（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/fc09f045d1e9ac774a919181a15c20a6c777a276",target:"_blank",rel:"noopener noreferrer"}},[e._v("fc09f04"),_("OutboundLink")],1),e._v("）（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/2e7f624581d8d85a23d6470acced9acc3e2840b2",target:"_blank",rel:"noopener noreferrer"}},[e._v("2e7f624"),_("OutboundLink")],1),e._v("）。")])]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"_1-0-0-2020-08-18"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-0-2020-08-18"}},[e._v("#")]),e._v(" [1.0.0] - 2020-08-18")]),e._v(" "),_("h3",{attrs:{id:"新增-7"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增-7"}},[e._v("#")]),e._v(" 新增")]),e._v(" "),_("ul",[_("li",[e._v("改进日志格式（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/bd112ecacd9356ee1e0731634cfc197034d25c88",target:"_blank",rel:"noopener noreferrer"}},[e._v("bd112ec"),_("OutboundLink")],1),e._v("）。基本格式为"),_("code",[e._v("xxxxx, ngx_waf: [拦截类型][对应规则], xxxxx")]),e._v("，具体可看下面的例子。"),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('2020/01/20 22:56:30 [alert] 24289#0: *30 ngx_waf: [BLACK-URL][(?i)(?:/\\.env$)], client: 192.168.1.1, server: example.com, request: "GET /v1/.env HTTP/1.1", host: "example.com", referrer: "http:/example.com/v1/.env"\n\n2020/01/20 22:58:40 [alert] 24678#0: *11 ngx_waf: [BLACK-POST][(?i)(?:select.*(?:from|limit))], client: 192.168.1.1, server: example.com, request: "POST /xmlrpc.php HTTP/1.1", host: "example.com", referrer: "https://example.com/"\n')])])])]),e._v(" "),_("li",[e._v("新增三个内置变量（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/92d6d847840ada57bbc54ffe2c0980b118a37a30",target:"_blank",rel:"noopener noreferrer"}},[e._v("92d6d84"),_("OutboundLink")],1),e._v("）\n"),_("ul",[_("li",[_("code",[e._v("$waf_blocked")]),e._v(": 本次请求是否被本模块拦截，如果拦截了则其的值为"),_("code",[e._v("'true'")]),e._v(",反之则为"),_("code",[e._v("'false'")]),e._v("。")]),e._v(" "),_("li",[_("code",[e._v("$waf_rule_type")]),e._v("：如果本次请求被本模块拦截，则其值为触发的规则类型。下面是可能的取值。若没有生效则其值为"),_("code",[e._v("'null'")]),e._v("。\n"),_("ul",[_("li",[_("code",[e._v("'BLACK-IPV4'")])]),e._v(" "),_("li",[_("code",[e._v("'BLACK-URL'")])]),e._v(" "),_("li",[_("code",[e._v("'BLACK-ARGS'")])]),e._v(" "),_("li",[_("code",[e._v("'BLACK-USER-AGENT'")])]),e._v(" "),_("li",[_("code",[e._v("'BLACK-REFERER'")])]),e._v(" "),_("li",[_("code",[e._v("'BLACK-COOKIE'")])]),e._v(" "),_("li",[_("code",[e._v("'BLACK-POST'")])])])]),e._v(" "),_("li",[_("code",[e._v("'$waf_rule_details'")]),e._v("：如果本次请求被本模块拦截，则其值为触发的具体的规则的内容。若没有生效则其值为"),_("code",[e._v("'null'")]),e._v("。")])])]),e._v(" "),_("li",[e._v("支持过滤 POST 请求（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/b46641eb8473c6dcb6afe9ed73f94712300d176f",target:"_blank",rel:"noopener noreferrer"}},[e._v("b46641e"),_("OutboundLink")],1),e._v("）。")]),e._v(" "),_("li",[e._v("新配置项"),_("code",[e._v("ngx_waf_mult_mount")]),e._v("用于增加拦截面（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/e1b500de349e017b67f334878342bdd6a34d22b8",target:"_blank",rel:"noopener noreferrer"}},[e._v("e1b500d"),_("OutboundLink")],1),e._v("），典型的应用场景是存在"),_("code",[e._v("rewrite")]),e._v("的情况下重写前后均会对 URL 进行一次检测。")]),e._v(" "),_("li",[e._v("支持 CC 防御功能（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/3a93e190b8cb78fcd7a0197f76298c010169d113",target:"_blank",rel:"noopener noreferrer"}},[e._v("3a93e19"),_("OutboundLink")],1),e._v("）。")])]),e._v(" "),_("h3",{attrs:{id:"改动-7"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改动-7"}},[e._v("#")]),e._v(" 改动")]),e._v(" "),_("ul",[_("li",[e._v("增加默认的 POST 过滤规则（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/68dd102e011acfd819669d60a35d315365d26a16",target:"_blank",rel:"noopener noreferrer"}},[e._v("68dd102"),_("OutboundLink")],1),e._v("）")]),e._v(" "),_("li",[e._v("更新默认规则（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/55f0a4824bafb67f562909bdb58292cfce1059ae",target:"_blank",rel:"noopener noreferrer"}},[e._v("55f0a48"),_("OutboundLink")],1),e._v("）。")]),e._v(" "),_("li",[e._v("修改规则优先级（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/3c388c85e30528b66306ca780524c7d663277f07",target:"_blank",rel:"noopener noreferrer"}},[e._v("3c388c8"),_("OutboundLink")],1),e._v("）（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/248958d3a0ef27dd14acc63a503e97931841f18a",target:"_blank",rel:"noopener noreferrer"}},[e._v("248958d"),_("OutboundLink")],1),e._v("）（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/b46641eb8473c6dcb6afe9ed73f94712300d176f",target:"_blank",rel:"noopener noreferrer"}},[e._v("b46641e"),_("OutboundLink")],1),e._v("）（(92447a3)[https://github.com/ADD-SP/ngx_waf/commit/92447a39d6a36ab027b0ead0daa0fe2b3b74ff29]），现在的优先级为（靠上的优先生效）：\n"),_("ol",[_("li",[e._v("IP 白名单")]),e._v(" "),_("li",[e._v("IP 黑名单")]),e._v(" "),_("li",[e._v("CC 防御")]),e._v(" "),_("li",[e._v("URL 白名单")]),e._v(" "),_("li",[e._v("URL 黑名单")]),e._v(" "),_("li",[e._v("Args 黑名单")]),e._v(" "),_("li",[e._v("UserAgent 黑名单")]),e._v(" "),_("li",[e._v("Referer 白名单")]),e._v(" "),_("li",[e._v("Referer 黑名单")]),e._v(" "),_("li",[e._v("Cookie 黑名单")]),e._v(" "),_("li",[e._v("POST 黑名单")])])])]),e._v(" "),_("h3",{attrs:{id:"修复-7"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修复-7"}},[e._v("#")]),e._v(" 修复")]),e._v(" "),_("ul",[_("li",[e._v("IPV4 黑白名单功能失效（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/231f94aa5383fe8f6cdc0fbc3cd2dcadb7606881",target:"_blank",rel:"noopener noreferrer"}},[e._v("231f94a"),_("OutboundLink")],1),e._v("）。")]),e._v(" "),_("li",[e._v("当 User-agent 为空时会触发 segmentation fault（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/bf33b366232b7f5e05379d5e10ab006696189ea6",target:"_blank",rel:"noopener noreferrer"}},[e._v("bf33b36"),_("OutboundLink")],1),e._v("）。")]),e._v(" "),_("li",[e._v("启用 CC 防御后会有内存泄漏（"),_("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/be58d189b4c95be066623604124b02a9bf174e7f",target:"_blank",rel:"noopener noreferrer"}},[e._v("be58d18"),_("OutboundLink")],1),e._v("）。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);