(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{642:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"createbucket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createbucket"}},[e._v("#")]),e._v(" CreateBucket")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"org.kestra.task.gcp.gcs.CreateBucket"')]),e._v("\n")])])]),a("blockquote",[a("p",[e._v("Create a bucket or update if it already exists.")])]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("blockquote",[a("p",[e._v("Create a new bucket with some options")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"create_bucket"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"org.kestra.task.gcp.gcs.CreateBucket"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my-bucket"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("versioningEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("my-label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("value\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),a("h3",{attrs:{id:"acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acl"}},[e._v("#")]),e._v(" "),a("code",[e._v("acl")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("array")])]),e._v(" "),a("li",[a("strong",[e._v("SubType:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's access control configuration")])]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://cloud.google.com/storage/docs/access-control#About-Access-Control-Lists"}},[a("br"),e._v("\nAbout Access Control Lists")])]),e._v(" "),a("h3",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" "),a("code",[e._v("cors")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("array")])]),e._v(" "),a("li",[a("strong",[e._v("SubType:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's Cross-Origin Resource Sharing (CORS) configuration")])]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://cloud.google.com/storage/docs/cross-origin"}},[e._v("Cross-Origin Resource"),a("br"),e._v("\nSharing (CORS)")])]),e._v(" "),a("h3",{attrs:{id:"defaultacl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultacl"}},[e._v("#")]),e._v(" "),a("code",[e._v("defaultAcl")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("array")])]),e._v(" "),a("li",[a("strong",[e._v("SubType:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The default access control configuration")])]),e._v(" "),a("p",[e._v("The access control configuration to apply to bucket's blobs when no other"),a("br"),e._v("\nconfiguration is specified.")]),e._v(" "),a("p",[e._v("Ssee "),a("a",{attrs:{href:"https://cloud.google.com/storage/docs/access-control#About-Access-Control-Lists"}},[a("br"),e._v("\nAbout Access Control Lists")])]),e._v(" "),a("h3",{attrs:{id:"defaulteventbasedhold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaulteventbasedhold"}},[e._v("#")]),e._v(" "),a("code",[e._v("defaultEventBasedHold")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("boolean")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The default event-based hold for this bucket")])]),e._v(" "),a("h3",{attrs:{id:"defaultkmskeyname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultkmskeyname"}},[e._v("#")]),e._v(" "),a("code",[e._v("defaultKmsKeyName")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The default Cloud KMS key name for this bucket")])]),e._v(" "),a("h3",{attrs:{id:"iamconfiguration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iamconfiguration"}},[e._v("#")]),e._v(" "),a("code",[e._v("iamConfiguration")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The Bucket's IAM Configuration")])]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://cloud.google.com/storage/docs/uniform-bucket-level-access"}},[e._v("uniform"),a("br"),e._v("\nbucket-level access")])]),e._v(" "),a("h3",{attrs:{id:"iamconfiguration-uniformbucketlevelaccesslockedtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iamconfiguration-uniformbucketlevelaccesslockedtime"}},[e._v("#")]),e._v(" "),a("code",[e._v("iamConfiguration.uniformBucketLevelAccessLockedTime")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("integer")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("h3",{attrs:{id:"ifexists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifexists"}},[e._v("#")]),e._v(" "),a("code",[e._v("ifExists")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")]),e._v(" "),a("li",[a("strong",[e._v("Default:")]),e._v(" "),a("code",[e._v("ERROR")])])]),e._v(" "),a("blockquote",[a("p",[e._v("Policy to apply if a bucket already exists.")])]),e._v(" "),a("h3",{attrs:{id:"indexpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexpage"}},[e._v("#")]),e._v(" "),a("code",[e._v("indexPage")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's website index page")])]),e._v(" "),a("p",[e._v("Behaves as the bucket's directory index where missing"),a("br"),e._v("\nblobs are treated as potential directories.")]),e._v(" "),a("h3",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[e._v("#")]),e._v(" "),a("code",[e._v("labels")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The labels of this bucket")])]),e._v(" "),a("h3",{attrs:{id:"lifecyclerules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lifecyclerules"}},[e._v("#")]),e._v(" "),a("code",[e._v("lifecycleRules")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("array")])]),e._v(" "),a("li",[a("strong",[e._v("SubType:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's lifecycle configuration")])]),e._v(" "),a("p",[e._v("This configuration is expressed as a number of lifecycle rules, consisting of an"),a("br"),e._v("\naction and a condition.")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://cloud.google.com/storage/docs/lifecycle"}},[e._v("Object Lifecycle"),a("br"),e._v("\nManagement")])]),e._v(" "),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" "),a("code",[e._v("location")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's location")])]),e._v(" "),a("p",[e._v("Data for blobs in the bucket resides in physical storage within"),a("br"),e._v("\nthis region. A list of supported values is available "),a("a",{attrs:{href:"https://cloud.google.com/storage/docs/bucket-locations"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" "),a("code",[e._v("logging")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's logging configuration")])]),e._v(" "),a("p",[e._v("This configuration defines the destination bucket and optional name"),a("br"),e._v("\nprefix for the current bucket's logs.")]),e._v(" "),a("h3",{attrs:{id:"logging-logbucket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-logbucket"}},[e._v("#")]),e._v(" "),a("code",[e._v("logging.logBucket")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("h3",{attrs:{id:"logging-logobjectprefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-logobjectprefix"}},[e._v("#")]),e._v(" "),a("code",[e._v("logging.logObjectPrefix")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" "),a("code",[e._v("name")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ✔️")])]),e._v(" "),a("blockquote",[a("p",[e._v("Bucket's unique name")])]),e._v(" "),a("h3",{attrs:{id:"notfoundpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notfoundpage"}},[e._v("#")]),e._v(" "),a("code",[e._v("notFoundPage")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The custom object to return when a requested resource is not found")])]),e._v(" "),a("h3",{attrs:{id:"projectid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[e._v("#")]),e._v(" "),a("code",[e._v("projectId")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The GCP project id")])]),e._v(" "),a("h3",{attrs:{id:"requesterpays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requesterpays"}},[e._v("#")]),e._v(" "),a("code",[e._v("requesterPays")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("boolean")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("Whether the requester pays or not.")])]),e._v(" "),a("p",[e._v("Whether a user accessing the bucket or an object it contains should assume the transit"),a("br"),e._v("\ncosts related to the access.")]),e._v(" "),a("h3",{attrs:{id:"retentionperiod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retentionperiod"}},[e._v("#")]),e._v(" "),a("code",[e._v("retentionPeriod")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("integer")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("Retention period")])]),e._v(" "),a("p",[e._v("If policy is not locked this value can be cleared, increased, and decreased. If policy is"),a("br"),e._v("\nlocked the retention period can only be increased.")]),e._v(" "),a("h3",{attrs:{id:"storageclass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storageclass"}},[e._v("#")]),e._v(" "),a("code",[e._v("storageClass")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's storage class")])]),e._v(" "),a("p",[e._v("This defines how blobs in the bucket are stored and"),a("br"),e._v("\ndetermines the SLA and the cost of storage. A list of supported values is available "),a("a",{attrs:{href:"https://cloud.google.com/storage/docs/storage-classes"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"versioningenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versioningenabled"}},[e._v("#")]),e._v(" "),a("code",[e._v("versioningEnabled")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("boolean")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("Whether versioning should be enabled for this bucket")])]),e._v(" "),a("p",[e._v("When set to true, versioning is"),a("br"),e._v("\nfully enabled.")]),e._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),a("h3",{attrs:{id:"bucket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bucket"}},[e._v("#")]),e._v(" "),a("code",[e._v("bucket")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's unique name")])]),e._v(" "),a("h3",{attrs:{id:"bucketuri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bucketuri"}},[e._v("#")]),e._v(" "),a("code",[e._v("bucketUri")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("object")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's URI.")])]),e._v(" "),a("h3",{attrs:{id:"indexpage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexpage-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("indexPage")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's website index page.")])]),e._v(" "),a("h3",{attrs:{id:"location-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("location")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The bucket's location")])]),e._v(" "),a("h3",{attrs:{id:"notfoundpage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notfoundpage-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("notFoundPage")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The custom object to return when a requested resource is not found.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);