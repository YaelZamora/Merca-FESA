!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window.__tebootstrap=window._teboostrap||{},window.__tebootstrap.TrackEverything=function(t){var e=function(){this.backup=t.te&&t.te.slice?t.te.slice(0):[],this.XMLHttpFactories=[function(){return new t.XDomainRequest},function(){return new t.XMLHttpRequest},function(){return new t.ActiveXObject("Msxml2.XMLHTTP")},function(){return new t.ActiveXObject("Msxml3.XMLHTTP")},function(){return new t.ActiveXObject("Microsoft.XMLHTTP")}],this.eventList=[],this.created=!1,this.init()};return(e.prototype=[]).init=function(){this.cookieHost=t.location.host.replace(/^[^.]*/g,""),this.baseUrl="//track.wattpad.com/api",this.LSKey="te.backup";for(var e=this.backup.length-1;e>=0;e--)if("create"===this.backup[e][0]){this.create(this.backup.splice(e,1)[0]);break}},e.prototype.create=function(e){var i=e[1],s=e[2],o=e[3],n="useStaging"===e[4];return"(null)"===o&&(o=null),"string"==typeof o&&(o=parseInt(o,10)),"android"!==i&&"ios"!==i&&"mobile-web"!==i&&(i="web"),"string"!=typeof s||""===s?(this.getUUID(i,o),!1):null!==o&&"number"!=typeof o||isNaN(o)?(this.log("improper create, userid must be a number or null",!0,e[3]),!1):(this.client=i,this.uuid=s,this.userid=o,this.useStaging=n,!0===this.isSpecialBrowser(t.navigator.userAgent)&&(this.baseUrl="/v4/prometheus"),!0===this.useStaging&&(this.baseUrl="//track.wattpad.com:8000/api"),!0===this.isDev&&(this.client=this.client+"-dev"),this.created=!0,this.restorePreviousSession(),void this.processBackup())},e.prototype.processBackup=function(){for(var t=0;t<this.backup.length;t++)this.push.apply(this,this.backup[t])},e.prototype.push=function(){if(this.created&&"event"===arguments[0]){var t,e,i,o=!1,n=arguments.length-1;if("object"===s(arguments[n])){var r=arguments[n];r.ts&&(t=r.ts,delete r.ts),r.useGet&&(o=!0,delete r.useGet),0===Object.keys(r).length&&(delete arguments[n],n--)}t=t||1*new Date,"object"===s(arguments[n])||void 0===arguments[n]?(e=Array.prototype.join.call(Array.prototype.slice.call(arguments,1,-1),":"),i=arguments[n]):(e=Array.prototype.join.call(Array.prototype.slice.call(arguments,1),":"),i=null),Array.prototype.push.call(this,{name:e,timestamp:t,details:i,useGet:!!o||void 0}),this.onPush()}else{if(this.created)return this.log("pushing an undefined event"),!1;"create"===arguments[0]?this.create(arguments):this.backup.push(arguments)}},e.prototype.onPush=function(){for(var t,e=[];void 0!==(t=this.shift());)t.useGet?this.sendEvent([{name:[this.client,t.name].join(":"),uuid:this.uuid,userid:this.userid,timestamp:t.timestamp,session_id:this.getSessionId(),details:t.details}],!0):e.push({name:[this.client,t.name].join(":"),uuid:this.uuid,userid:this.userid,timestamp:t.timestamp,session_id:this.getSessionId(),details:t.details});0!==e.length&&this.addEvent(e)},e.prototype.send=function(t,e){var i=this.getxhrObject(),s=this.baseUrl+"/event";if(!i)return!1;"error"===t&&(s=this.baseUrl+"/error"),i.open("post",s,!0);try{i.setRequestHeader("Content-Type","application/json")}catch(t){}JSON&&i.send(JSON.stringify(e))},e.prototype.sendGet=function(t,e){var i=this.getxhrObject(),s=this.baseUrl+"/event/_wts.gif";if(!i)return!1;s+=this.urlEncodeData(t,e),i.open("get",s,!0),i.send()},e.prototype.sendEvent=function(t,e){e?this.sendGet(t[0],1*new Date):this.send("event",{events:t,timestamp:1*new Date})},e.prototype.sendError=function(t,e){this.send("error",{message:t,data:e})},e.prototype.getUUID=function(e,i){if(t.document.cookie.match(/wp_id=([^;]+)/))return this.create(["create",e,t.document.cookie.match(/wp_id=([^;]+)/)[1],i]),!0;var s=this.getxhrObject(),o=this,n=this.baseUrl+"/uuid";if(!s)return!1;s.open("get",n,!0),s.send(),s.onreadystatechange=function(){if(4===s.readyState&&200===s.status){var n=JSON.parse(s.responseText);t.document.cookie="wp_id="+n.uuid+";expires=Fri, 31 Dec 9999 23:59:59 GMT;domain=.wattpad.com;path=/;SameSite=Lax;Secure;",o.create(["create",e,n.uuid,i])}}},e.prototype.getxhrObject=function(){for(var t=!1,e=0;e<this.XMLHttpFactories.length;e++){try{t=this.XMLHttpFactories[e]()}catch(t){continue}break}return t},e.prototype.log=function(e,i,s){t.console&&t.console.log&&t.console.log(e),i&&this.sendError(e,s)},e.prototype.urlEncodeData=function(t,e){var i="?timestamp="+e;for(var s in t)if(t.hasOwnProperty(s))if("name"===s)i+="&name="+t.name;else if("uuid"===s)i+="&uuid="+t.uuid;else if("userid"===s)i+="&userid="+t.userid;else if("details"===s)for(var o in t.details)t.details.hasOwnProperty(o)&&(i+="&"+o+"="+t.details[o]);return i+"&now="+1*new Date},e.prototype.isSpecialBrowser=function(t){return Boolean(t.match(/(Opera Mini)/))||Boolean(t.match(/(MSIE 8.+)/))||Boolean(t.match(/(MSIE 9.+ IEMobile)/))||Boolean(t.match(/(MSIE 7.+ IEMobile)/))},e.prototype.addEvent=function(e){this.eventList=this.eventList.concat(e);try{t.localStorage.setItem(this.LSKey,JSON.stringify(this.eventList))}catch(t){}this.eventList.length>=1?this.processBatch():this.batchTimer||(this.batchTimer=t.setTimeout(this.processBatch.bind(this),6e4))},e.prototype.processBatch=function(){this.eventList.length&&this.sendEvent(this.eventList),this.eventList=[],this.batchTimer&&(t.clearTimeout(this.batchTimer),this.batchTimer=null);try{t.localStorage.removeItem(this.LSKey)}catch(t){}},e.prototype.restorePreviousSession=function(){var e;try{e=JSON.parse(t.localStorage.getItem(this.LSKey))}catch(t){}e&&e.length&&(e.push({name:[this.client,"tracker:::restore_session"].join(":"),uuid:this.uuid,userid:this.userid,timestamp:1*Date.now(),session_id:this.getSessionId(),details:{queue_size:e.length}}),this.eventList=this.eventList.concat(e),this.processBatch())},e.prototype.getSessionId=function(){var e;return this.sessionIdTimeout&&t.clearTimeout(this.sessionIdTimeout),this.sessionIdTimeout=t.setTimeout(this.clearSessionId,9e5),e=t.document.cookie.match(/te_session_id=([^;]+)/)?parseInt(t.document.cookie.match(/te_session_id=([^;]+)/)[1]):1*Date.now(),t.document.cookie="te_session_id="+e+";domain="+this.cookieHost+";path=/;SameSite=Lax;Secure;",e},e.prototype.clearSessionId=function(){t.document.cookie="te_session_id=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+this.cookieHost+"; path=/;SameSite=Lax;Secure;"},e.prototype.getPage=function(){var e=t.location.pathname.split("/"),i=e[1];i.match(/^\d+/)&&(i="reading");var o={stories:"category",myworks:["create","create_story_details"],forgot:"forgot_password",home:"home","invite-friends":"invite_friends",archive:"library",library:"library",login:"sign_in",notifications:"notifications",user:"profile",reading:"reading",list:["reading_list","reading_list_details"],search:["search","search_results"],"":"sign_up",signup:"sign_up",story:"story_details",tags:"tag_page"}[i];return o&&"object"===s(o)&&(o=e[2]&&e[2].length>0?o[1]:o[0]),o||i},e},window.__tebootstrap.start=function(t){var e=t.__tebootstrap.TrackEverything(t);t.te=new e},window.__tebootstrap.start(window)}]);
//# sourceMappingURL=app.0252e2e1.js.map