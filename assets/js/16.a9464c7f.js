(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{385:function(e,t,a){"use strict";a.r(t);var s=a(9),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),a("p",[e._v("MeiliSearch uses a key-based authentication. There are three types of keys:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("strong",[e._v("Master")]),e._v(" key grants access to all routes.")]),e._v(" "),a("li",[e._v("The "),a("strong",[e._v("Private")]),e._v(" key grants access to all routes except the "),a("code",[e._v("/keys")]),e._v(" routes.")]),e._v(" "),a("li",[e._v("The "),a("strong",[e._v("Public")]),e._v(" key only grants access to the following routes:\n"),a("ul",[a("li",[a("code",[e._v("GET /indexes/:index_uid/search")])]),e._v(" "),a("li",[a("code",[e._v("GET /indexes/:index_uid/documents")])]),e._v(" "),a("li",[a("code",[e._v("GET /indexes/:index_uid/documents/:doc_id")])])])])]),e._v(" "),a("p",[e._v("When a master key is provided to MeiliSearch, both the private and the public keys are automatically generated. "),a("strong",[e._v("You cannot create any additional keys")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"master-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-key"}},[e._v("#")]),e._v(" Master Key")]),e._v(" "),a("p",[e._v("When launching an instance, you have the option of giving a master key. By doing so, all routes will be protected and will require a key to be accessed.")]),e._v(" "),a("p",[e._v("You can specify it by passing the "),a("code",[e._v("MEILI_MASTER_KEY")]),e._v(" environment variable, or using the command line argument "),a("code",[e._v("--master-key")]),e._v(".")]),e._v(" "),a("p",[e._v("You can retrieve both the private and the public keys using the master key on the "),a("RouterLink",{attrs:{to:"/references/keys.html"}},[e._v("keys route")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"no-master-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-master-key"}},[e._v("#")]),e._v(" No master key")]),e._v(" "),a("p",[e._v("If no master key is provided, all routes can be accessed without requiring any key.")]),e._v(" "),a("h2",{attrs:{id:"api-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-key"}},[e._v("#")]),e._v(" API Key")]),e._v(" "),a("p",[e._v("If a master key is set, on each API call, a key must be added to "),a("RouterLink",{attrs:{to:"/references/#authentication"}},[e._v("the header")]),e._v(".")],1),e._v(" "),a("p",[e._v("If no or a wrong API key is provided in the header you will have no access to any route and you will receive the"),a("br"),e._v(" "),a("code",[e._v("HTTP/1.1 403 Forbidden")]),e._v(" status code.")]),e._v(" "),a("h2",{attrs:{id:"reset-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-key"}},[e._v("#")]),e._v(" Reset Key")]),e._v(" "),a("p",[e._v("Since both the private and the public keys are generated based on your master key, changing the master key will result in the modification of the two other keys.")]),e._v(" "),a("p",[e._v("After having changed your master key, it is mandatory to restart the MeiliSearch server to ensure the renewal of the private and the public keys.")]),e._v(" "),a("p",[a("strong",[e._v("All keys will be changed")]),e._v(". Therefore, it is not possible to change only one of the keys.")])])}),[],!1,null,null,null);t.default=r.exports}}]);