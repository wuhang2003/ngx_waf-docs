(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{303:function(e,t,a){"use strict";a.r(t);var r=a(13),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("h2",{attrs:{id:"how-does-this-module-perform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-does-this-module-perform"}},[e._v("#")]),e._v(" How does this module perform?")]),e._v(" "),t("p",[e._v("IP inspection and CC defense take constant time, other inspections take "),t("code",[e._v("O(nm)")]),e._v(", where "),t("code",[e._v("n")]),e._v(" is the number of relevant rules and "),t("code",[e._v("m")]),e._v(" is the time complexity to perform regular matching, but the results of this inspection are automatically cached after each inspection, so that the next time the same target is inspected, the cache can be used instead of checking all the rules. The result of the POST request body check is not cached.")]),e._v(" "),t("h2",{attrs:{id:"cache-policy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-policy"}},[e._v("#")]),e._v(" Cache Policy")]),e._v(" "),t("p",[e._v("LRU")]),e._v(" "),t("h2",{attrs:{id:"embedded-variables-and-directive-if"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#embedded-variables-and-directive-if"}},[e._v("#")]),e._v(" Embedded variables and directive "),t("code",[e._v("if")])]),e._v(" "),t("p",[e._v("In short, due to NGINX's state machine model, you cannot use any embedded variables from this module (such as "),t("code",[e._v("$waf_rule_type")]),e._v(") for the directive "),t("code",[e._v("if")]),e._v(", except for the parameter "),t("code",[e._v("if")]),e._v(" of the directive "),t("code",[e._v("access_log")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"ngx-http-access-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ngx-http-access-module"}},[e._v("#")]),e._v(" "),t("code",[e._v("ngx_http_access_module")])]),e._v(" "),t("p",[e._v("When this module is used with "),t("code",[e._v("ngx_http_access_module")]),e._v(", "),t("code",[e._v("ngx_http_access_module")]),e._v(" will run before this module.")]),e._v(" "),t("h2",{attrs:{id:"post-inspection-failure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-inspection-failure"}},[e._v("#")]),e._v(" Post Inspection Failure")]),e._v(" "),t("p",[e._v("For performance reasons, this module will inspect whether it is in the memory before inspecting the request body. If it is, it will inspect normally, otherwise skip the inspection. You can try to edit nginx.conf.")]),e._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("http")])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    ...\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("client_body_buffer_size")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10M")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("client_body_in_file_only")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("off")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    ...\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[t("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_buffer_size",target:"_blank",rel:"noopener noreferrer"}},[e._v("client_body_buffer_size"),t("OutboundLink")],1),e._v("\nand "),t("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_file_only",target:"_blank",rel:"noopener noreferrer"}},[e._v("client_body_in_file_only"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"can-i-change-the-rules-at-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-change-the-rules-at-runtime"}},[e._v("#")]),e._v(" Can I change the rules at runtime?")]),e._v(" "),t("p",[e._v("No, this module will only read the rules when nginx reads the configuration.\nnginx will read the configuration on startup and reload.")]),e._v(" "),t("h2",{attrs:{id:"is-ip-inspection-affected-by-cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is-ip-inspection-affected-by-cdn"}},[e._v("#")]),e._v(" Is IP inspection affected by CDN?")]),e._v(" "),t("p",[e._v("If you use the "),t("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_realip_module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ngx_http_realip_module"),t("OutboundLink")],1),e._v(" module to get the real IP, then this module will use the real IP for inspection.")]),e._v(" "),t("h2",{attrs:{id:"regular-expression-denial-of-service-redos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regular-expression-denial-of-service-redos"}},[e._v("#")]),e._v(" Regular expression Denial of Service (ReDoS)")]),e._v(" "),t("blockquote",[t("p",[e._v("The regular expression denial of service (ReDoS) is an algorithmic complexity attack that produces a denial-of-service by providing a regular expression that takes a very long time to evaluate. "),t("br"),t("br"),e._v(" "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/ReDoS",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReDoS - Wikipedia"),t("OutboundLink")],1)])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("This module uses the PCRE library to execute regular expressions. The PCRE library can specify the upper limit of the main loop counter at compile time and stop automatically when the upper limit is exceeded. The default limit is 500000. You can also adjust it manually at compile time, see the "),t("a",{attrs:{href:"https://www.pcre.org/current/doc/html/pcre2build.html#SEC11",target:"_blank",rel:"noopener noreferrer"}},[e._v("pcre2 build man page"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("This module caches all regular inspections (except POST inspections), so that the next time you encounter a string for an attack, you do not need to execute the regular expression again without triggering the cache cleanup process.")])])]),e._v(" "),t("h2",{attrs:{id:"fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[e._v("#")]),e._v(' fork() failed while spawning "worker process" (12: Cannot allocate memory)')]),e._v(" "),t("p",[e._v("It may be caused by excessive use of "),t("code",[e._v("nginx -s reload")]),e._v(". The module requests some memory when reading the configuration, but somehow the memory is not released immediately after "),t("code",[e._v("nginx -s reload")]),e._v(", so frequent "),t("code",[e._v("nginx -s reload")]),e._v(" in a short period of time will most likely cause this error.")]),e._v(" "),t("h2",{attrs:{id:"panic-unprotected-error-in-call-to-lua-api-attempt-to-index-a-nil-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#panic-unprotected-error-in-call-to-lua-api-attempt-to-index-a-nil-value"}},[e._v("#")]),e._v(" PANIC: unprotected error in call to Lua API (attempt to index a nil value)")]),e._v(" "),t("p",[e._v("Please check the version of "),t("code",[e._v("libmodsecurity")]),e._v(". After testing, "),t("code",[e._v("libmodsecurity v3.0.3")]),e._v(" has this bug, please update to "),t("code",[e._v("libmodsecurity v3.0.5")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);