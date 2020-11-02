(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{477:function(a,t,s){"use strict";s.r(t);var e=s(25),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"eachparallel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eachparallel"}},[a._v("#")]),a._v(" EachParallel")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"org.kestra.core.tasks.flows.EachParallel"')]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("Execute a tasks for a list of value in parallel.")])]),a._v(" "),s("p",[a._v("For each "),s("code",[a._v("value")]),a._v(", "),s("code",[a._v("tasks")]),a._v(" will be executed"),s("br"),a._v("\nThe value must be valid json string representing an arrays, like "),s("code",[a._v('["value1", "value2"]')]),a._v(" and must be a string"),s("br"),a._v("\nThe current value is available on vars "),s("code",{pre:!0},[a._v("{{  taskrun.value  }}")]),a._v("."),s("br"),a._v("\nThe task list will be executed in parallel, for example if you have a 3 value with each one 2 tasks, all the 6 tasks will be computed in parallel with out any garantee on the order."),s("br"),a._v("\nIf you want to have each value in parallel, but no concurrent task for each value, you need to wrap the tasks with a "),s("code",[a._v("Sequential")]),a._v(" tasks")]),a._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"each_parallel"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"org.kestra.core.tasks.flows.EachParallel"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'["value 1", "value 2", "value 3"]\'')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" each"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("value\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.kestra.core.tasks.debugs.Return\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"{{ task.id }} with current value '{{ taskrun.value }}'\"")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("Handling each value in parralel but only 1 child task for each value at the same time.")])]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"each_parallel"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"org.kestra.core.tasks.flows.EachParallel"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'["value 1", "value 2", "value 3"]\'')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" seq\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.kestra.core.tasks.flows.Sequential\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" t1\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.kestra.core.tasks.scripts.Bash\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("commands")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 'echo \""),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("task.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" parents.0.taskrun.value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'sleep 1'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" t2\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.kestra.core.tasks.scripts.Bash\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("commands")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 'echo \""),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("task.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" parents.0.taskrun.value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'sleep 1'")]),a._v("\n")])])]),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[a._v("#")]),a._v(" Inputs")]),a._v(" "),s("h3",{attrs:{id:"concurrent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concurrent"}},[a._v("#")]),a._v(" "),s("code",[a._v("concurrent")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Type:")]),a._v(" "),s("mark",[a._v("integer")])]),a._v(" "),s("li",[s("strong",[a._v("Dynamic:")]),a._v(" ❓")]),a._v(" "),s("li",[s("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),s("h3",{attrs:{id:"errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[a._v("#")]),a._v(" "),s("code",[a._v("errors")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Type:")]),a._v(" "),s("mark",[a._v("array")])]),a._v(" "),s("li",[s("strong",[a._v("SubType:")]),a._v(" "),s("mark",[a._v("object")])]),a._v(" "),s("li",[s("strong",[a._v("Dynamic:")]),a._v(" ❓")]),a._v(" "),s("li",[s("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),s("h3",{attrs:{id:"tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[a._v("#")]),a._v(" "),s("code",[a._v("tasks")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Type:")]),a._v(" "),s("mark",[a._v("array")])]),a._v(" "),s("li",[s("strong",[a._v("SubType:")]),a._v(" "),s("mark",[a._v("object")])]),a._v(" "),s("li",[s("strong",[a._v("Dynamic:")]),a._v(" ❓")]),a._v(" "),s("li",[s("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),s("h3",{attrs:{id:"value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[a._v("#")]),a._v(" "),s("code",[a._v("value")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Type:")]),a._v(" "),s("mark",[a._v("string")])]),a._v(" "),s("li",[s("strong",[a._v("Dynamic:")]),a._v(" ❓")]),a._v(" "),s("li",[s("strong",[a._v("Required:")]),a._v(" ✔️")]),a._v(" "),s("li",[s("strong",[a._v("Min length:")]),a._v(" "),s("code",[a._v("1")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);