(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[124],{2772:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(159),o=n(219),i=(n(7294),n(3905)),l=["components"],r={};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Manual Setup"),(0,i.kt)("h2",null,"Install Discord++ and Plugins"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"plugin"},"Add a Plugin")," guide to install at minimum Discord++, a WebSocket module, a REST module, and a ratelimiting module."),(0,i.kt)("h2",null,"In your ",(0,i.kt)("inlineCode",{parentName:"h2"},"main")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Assume ",(0,i.kt)("inlineCode",{parentName:"p"},"using dpp = discordpp;"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a Bot object. e.g.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"auto bot = std::make_shared<DppBot>();\n")),(0,i.kt)("p",null,"For this example, I declared a ",(0,i.kt)("inlineCode",{parentName:"p"},"DppBot")," alias just after the ",(0,i.kt)("inlineCode",{parentName:"p"},"#include")," statements"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"using DppBot =\ndpp::PluginRatelimit<\n    dpp::WebsocketSimpleweb<\n        dpp::RestBeast<\n            dpp::Bot\n        >\n    >\n>;\n")),(0,i.kt)("p",null,"You can also move this statement to a predeclared header and predefine the bot in a separate source file for faster recompile times. Check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DiscordPP/echo-bot"},"Echo")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DiscordPP/build-a-bot"},"Build-A-Bot")," for an example. 2. Add responses to events with ",(0,i.kt)("inlineCode",{parentName:"p"},"handlers.insert")," e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'bot->handlers.insert(\n    {\n        "MESSAGE_CREATE",\n        [&bot](json msg){\n            //Do Stuff\n        }\n    }\n);\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"std::shared_ptr<boost::asio::io_context>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"auto aioc = std::make_shared<asio::io_context>();")))),(0,i.kt)("li",{parentName:"ol"},"Initialize the bot object and any plugins that require it e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"bot->initBot(6, token, aioc)"),". The token should be in the form ",(0,i.kt)("inlineCode",{parentName:"li"},"Bot <token>")," where you replace ",(0,i.kt)("inlineCode",{parentName:"li"},"<token>")," with your token.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"I like to load my tokens from a ",(0,i.kt)("inlineCode",{parentName:"li"},".gitignore"),"d ",(0,i.kt)("inlineCode",{parentName:"li"},"token.dat")))),(0,i.kt)("li",{parentName:"ol"},"Run the bot: ",(0,i.kt)("inlineCode",{parentName:"li"},"bot->run();")," (This will also run the io_context)")))}p.isMDXComponent=!0},7226:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setup/manual",function(){return n(2772)}])},159:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})}},function(e){e.O(0,[774,888,179],(function(){return t=7226,e(e.s=t);var t}));var t=e.O();_N_E=t}]);