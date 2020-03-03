(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{222:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mailsend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mailsend"}},[t._v("#")]),t._v(" MailSend")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.notifications.mail.MailSend"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Generic task to send a mail.")])]),t._v(" "),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),a("code",[t._v("from")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"String"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The address of the sender of this email")])]),t._v(" "),a("h3",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" "),a("code",[t._v("host")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"String"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The mail server host")])]),t._v(" "),a("h3",{attrs:{id:"htmltextcontent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmltextcontent"}},[t._v("#")]),t._v(" "),a("code",[t._v("htmlTextContent")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"String"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The optional email message body in HTML text")])]),t._v(" "),a("p",[t._v("Both text and HTML can be provided, which will be offered to the email client as alternative content. Email clients that support it, will favor HTML over plain text and ignore the text body completely")]),t._v(" "),a("h3",{attrs:{id:"password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[t._v("#")]),t._v(" "),a("code",[t._v("password")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"String"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The mail server password")])]),t._v(" "),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" "),a("code",[t._v("port")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"Integer"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The mail server port")])]),t._v(" "),a("h3",{attrs:{id:"sessiontimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessiontimeout"}},[t._v("#")]),t._v(" "),a("code",[t._v("sessionTimeout")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"Integer"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Controls the timeout to use when sending emails")])]),t._v(" "),a("p",[t._v("It affects socket connect-, read- and write timeouts")]),t._v(" "),a("h3",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[t._v("#")]),t._v(" "),a("code",[t._v("subject")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"String"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The optional subject of this email")])]),t._v(" "),a("h3",{attrs:{id:"to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to"}},[t._v("#")]),t._v(" "),a("code",[t._v("to")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"String"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The recipient email address")])]),t._v(" "),a("p",[t._v("Note that the email address must be an RFC2822 format compliant address.")]),t._v(" "),a("h3",{attrs:{id:"transportstrategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transportstrategy"}},[t._v("#")]),t._v(" "),a("code",[t._v("transportStrategy")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"Enum"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Possible Values:")]),t._v(" "),a("ul",[a("li",[t._v("SMTP")]),t._v(" "),a("li",[t._v("SMTPS")]),t._v(" "),a("li",[t._v("SMTP_TLS")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("The optional transport strategy")])]),t._v(" "),a("p",[t._v("Will default to SMTPS if left empty.")]),t._v(" "),a("h3",{attrs:{id:"username"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[t._v("#")]),t._v(" "),a("code",[t._v("username")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("Badge",{attrs:{vertical:"middle",text:"String"}})],1),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The mail server username")])])])}),[],!1,null,null,null);e.default=r.exports}}]);