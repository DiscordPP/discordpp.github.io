(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{1887:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var a=n(159),l=n(219),r=(n(7294),n(3905)),i=["components"],d={};function o(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Sending"),(0,r.kt)("h2",null,"HTTP"),(0,r.kt)("p",null,"Discord++ bots make HTTP REST calls by way of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," series of objects, which abstract away the intricacies of the\nintricacies of the underlying libraries from the bot's developer. If you're using ",(0,r.kt)("a",{parentName:"p",href:"/plugins/native"},"Native")," The\nbase ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," object takes 6 different arguments,\nenumerated here:"),(0,r.kt)("h3",null,(0,r.kt)("inlineCode",{parentName:"h3"},"Call")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"The kind of HTTP operation that the call will be: One of either ",(0,r.kt)("inlineCode",{parentName:"td"},'"GET"')," (for getting something), ",(0,r.kt)("inlineCode",{parentName:"td"},'"POST"')," (for creating something), ",(0,r.kt)("inlineCode",{parentName:"td"},'"PATCH"')," (for modifying something), or ",(0,r.kt)("inlineCode",{parentName:"td"},'"DELETE"'),". (for deleting something)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"The API URL that the call will use. ",(0,r.kt)("inlineCode",{parentName:"td"},'"https://discord.com/api/v#/"')," is appended for you, you just need the direct API path such as ",(0,r.kt)("inlineCode",{parentName:"td"},'"/users/@me"'),"   .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"The MIME type of the body, very likely either ",(0,r.kt)("inlineCode",{parentName:"td"},'"application/json"')," for JSON payloads or ",(0,r.kt)("inlineCode",{parentName:"td"},'"multipart/form-data"')," for file calls. ",(0,r.kt)("inlineCode",{parentName:"td"},"multipart/form-data")," calls also needs a ",(0,r.kt)("inlineCode",{parentName:"td"},"boundary")," used to separate the parts of the body. (",(0,r.kt)("inlineCode",{parentName:"td"},"FileCall")," below handles this automatically.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"body")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"The data payload you're sending to Discord, formatted as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onWrite")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void (const bool)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"The function called after Discord++ sends the ",(0,r.kt)("inlineCode",{parentName:"td"},"Call")," to Discord, primarily for use in ratelimiting- you likely won't need this. If there was an error the ",(0,r.kt)("inlineCode",{parentName:"td"},"const bool")," argument will be ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onRead")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void (const bool, const json)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"The function called with the response Discord has for the ",(0,r.kt)("inlineCode",{parentName:"td"},"Call"),", formatted as an NLohmann JSON object. If there was an error the ",(0,r.kt)("inlineCode",{parentName:"td"},"const bool")," argument will be ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")))),(0,r.kt)("p",null,"In addition, the base library has two ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," abstractions: ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonCall")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FileCall"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonCall")," is set up to easily\ntake and NLohmann JSON object as a payload and ",(0,r.kt)("inlineCode",{parentName:"p"},"FileCall")," allows you to send both a file and an NLohmann JSON object."),(0,r.kt)("h3",null,(0,r.kt)("inlineCode",{parentName:"h3"},"JsonCall")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"As in ",(0,r.kt)("inlineCode",{parentName:"td"},"Call"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"As in ",(0,r.kt)("inlineCode",{parentName:"td"},"Call"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uddd1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"Always ",(0,r.kt)("inlineCode",{parentName:"td"},'"application/json"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"body")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uddd1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"Rendered based on ",(0,r.kt)("inlineCode",{parentName:"td"},"payload"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nlohmann::json")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"The JSON object to send to Discord")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onWrite")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void (const bool)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"As in ",(0,r.kt)("inlineCode",{parentName:"td"},"Call"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onRead")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void (const bool, const json)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"As in ",(0,r.kt)("inlineCode",{parentName:"td"},"Call"))))),(0,r.kt)("h3",null,(0,r.kt)("inlineCode",{parentName:"h3"},"FileCall")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"As in ",(0,r.kt)("inlineCode",{parentName:"td"},"Call"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"As in ",(0,r.kt)("inlineCode",{parentName:"td"},"Call"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uddd1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"Always ",(0,r.kt)("inlineCode",{parentName:"td"},'"multipart/formdata; boundary={generated boundary}"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"body")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\uddd1\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"Rendered based on ",(0,r.kt)("inlineCode",{parentName:"td"},"filename"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"filetype"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"file"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"payload"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the file, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},'"image.jpg"'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filetype")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"The MIME type of the file, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},'"image/jpg"'),". ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"},"There's a list of common MIME types in Mozilla's MDN Web Docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"file")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std::string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"The file encoded as a string, see below for an example of how to create this. There may be a utility function in the future to automate this process. ",(0,r.kt)("em",{parentName:"td"},"Note: The file string could be quite large, take care to not make copies of it if possible."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nlohmann::json")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"The JSON object to send to Discord")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onWrite")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void (const bool)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"As in ",(0,r.kt)("inlineCode",{parentName:"td"},"Call"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onRead")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void (const bool, const json)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"As in ",(0,r.kt)("inlineCode",{parentName:"td"},"Call"))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: this example uses a ",(0,r.kt)("inlineCode",{parentName:"em"},"CreateMessageCall"),", a child class of ",(0,r.kt)("inlineCode",{parentName:"em"},"FileCall")," in the ",(0,r.kt)("a",{parentName:"em",href:"/plugins/native"},"Native")," plugin. It hides the ",(0,r.kt)("inlineCode",{parentName:"em"},"nlohmann::json payload")," and renders it using some other fields- here it uses ",(0,r.kt)("inlineCode",{parentName:"em"},"std::string content"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'# Open the file\nstd::ifstream ifs("image.jpg", std::ios::binary);\nif (!ifs) {\n    std::cerr << "Couldn\'t load file \'image.jpg\'!\\n";\n    return;\n}\n# Seek to the end of the file and get the pointer position to determine the size of the file\nifs.seekg(0, std::ios::end);\nstd::ifstream::pos_type fileSize = ifs.tellg();\n# Seek back to the beginning of the file\nifs.seekg(0, std::ios::beg);\n# Create an appropriately-sized string\nauto file = std::make_shared<std::string>(fileSize, \'\\0\');\n# Read the file into the string\nifs.read(file->data(), fileSize);\n\n# Send the message\nbot->createMessage()\n   ->channel_id(*msg.channel_id)\n   ->content("Look at this photograph")\n   ->filename("image.jpg")\n   ->filetype("image/jpg")\n   ->file(file)\n   ->run();\n')),(0,r.kt)("h2",null,"WebSocket"),(0,r.kt)("p",null,"WebSocket commands are sent by way of ",(0,r.kt)("inlineCode",{parentName:"p"},"Bot::send(const int opcode, std::shared_ptr<const json> payload, std::shared_ptr<const std::function<void()>> callback)"),". If you don't want to deal in ",(0,r.kt)("inlineCode",{parentName:"p"},"std::shared_ptr"),"s the ",(0,r.kt)("a",{parentName:"p",href:"/plugins/overload"},"Overload")," plugin will create them for you. (It may be rolled into the main library in the future, it used to handle calls before the ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," class and its children were created.) ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-commands"},"You can find a list of the gateway commands in the official Discord API docs.")," Here's an example ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#update-presence"},"Update Presence")," command from Echo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'bot->send(3, {\n    {"game", {\n        {"name", "with " + name},\n        {"type", 0}\n    }},\n    {"status", "online"},\n    {"afk", false},\n    {"since", "null"}\n});\n')),(0,r.kt)("h2",null,"Webhook"),(0,r.kt)("p",null,"Discord++ currently doesn't support webhooks, sorry. We're open to PRs, though!"))}o.isMDXComponent=!0},155:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usage/sending",function(){return n(1887)}])},159:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})}},function(t){t.O(0,[774,888,179],(function(){return e=155,t(t.s=e);var e}));var e=t.O();_N_E=e}]);