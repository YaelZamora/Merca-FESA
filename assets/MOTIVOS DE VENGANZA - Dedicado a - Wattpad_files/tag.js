!function(){"use strict";function a(e,a,c,l){return new(c=c||Promise)(function(n,t){function o(e){try{i(l.next(e))}catch(e){t(e)}}function r(e){try{i(l.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(o,r)}i((l=l.apply(e,a||[])).next())})}function m(n,o){var r,i,a,e,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,i=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){c.label=t[1];break}if(6===t[0]&&c.label<a[1]){c.label=a[1],a=t;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(t);break}a[2]&&c.ops.pop(),c.trys.pop();continue}t=o.call(n,c)}catch(e){t=[6,e],i=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var c="https://ad-delivery.net/px.gif?ch=2",l="https://ad.doubleclick.net/favicon.ico?ad=300x250&ad_box_=1&adnet=1&showad=1&size=250x250",s="https://ad-delivery.net/px.gif?ch=1&e="+Math.random();function u(r,i){return void 0===i&&(i="img"),new Promise(function(t){var e=document.createElement(i);e.style.setProperty("display","none","important"),e.style.setProperty("width","1px","important"),e.style.setProperty("height","1px","important");var n=!1;function o(e){n||(n=!0,t(e))}e.addEventListener("error",function(e){o(!0)}),e.addEventListener("load",function(e){o(!1)}),e.src=r,(window.document.body||window.document.documentElement).appendChild(e)})}function d(){return a(this,void 0,void 0,function(){var t,n,o,r,i;return m(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),window.__bt=window.__bt||{},"function"!=typeof window.__bt.customDetectAdBlock?[3,2]:[4,window.__bt.customDetectAdBlock()];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return t=e.sent(),console.log("Error in customDetectAdblock:",t),[3,4];case 4:return[4,Promise.all([u(c),u(l)])];case 5:return n=e.sent(),o=n[0],r=n[1],i=function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="ads ad adsbox doubleclick ad-placement carbon-ads adglare",e.setAttribute("id","bt-bait-element"),e.style.cssText="width: 1px !important; height: 1px !important; position: absolute !important; left: -5000px !important; top: -5000px !important;";try{(window.document.body||window.document.documentElement).appendChild(e);var t=document.getElementById("bt-bait-element");if(0===t.offsetHeight||0===t.clientHeight)return!0;if(void 0!==window.getComputedStyle){var n=window.getComputedStyle(t,null);if(n&&("none"===n.getPropertyValue("display")||"hidden"===n.getPropertyValue("visibility")))return!0}(window.document.body||window.document.documentElement).removeChild(e)}catch(e){return null}return!1}(),[2,o?i||r:i&&r]}})})}var b=function(){var e=window;try{if(top.document)return top}catch(e){}try{for(;e.parent.document;)e=e.parent}catch(e){}return e}();var n=function(){try{return""!==document.location.hostname&&document.location.hostname!==window.parent.location.hostname}catch(e){return!0}}();function e(e){return n?b.sessionStorage.getItem(e):null}function p(e,t){n&&b.sessionStorage.setItem(e,t)}var t,w,f,v,h,g;function o(e,t){return function(e,t,n){if(!e||"number"!=typeof t||"number"!=typeof n||t<=0||n<=0||n<t)throw new TypeError;for(var o=Math.floor(Math.random()*(n+1-t))+t,r="",i=0;i<o;i++)r+=e.charAt(Math.floor(Math.random()*e.length));return r}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e,t)}w="5678011876638720",f="btloader.com",v="api.btloader.com",h="2.1.06-2-g014272c",g="";var r,i,y={"wattpad.com":{"content_enabled":false,"mobile_content_enabled":false,"website_id":"5748987236188160"}};r="BT_pvSent",i="BT_traceID",n?b.addEventListener("unload",function(){b.sessionStorage.removeItem(r),b.sessionStorage.removeItem(i)}):(b.sessionStorage.removeItem(r),b.sessionStorage.removeItem(i));var _=(null===(t=b.__bt_intrnl)||void 0===t?void 0:t.traceID)||e("BT_traceID")||o(8,10);p("BT_traceID",_);var I=b.sessionStorage.getItem("BT_sid");I||(I=o(8,10),b.sessionStorage.setItem("BT_sid",I));var E={traceID:_,sessionID:I},x={websiteID:void 0,contentEnabled:!1,mobileContentEnabled:!1};!function(){a(this,void 0,void 0,function(){var i,t,n,a,c,l,s,u,d;return m(this,function(e){switch(e.label){case 0:if(i=function(e,t){e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},t=function(){var e,t=b.location.hostname;try{"5668174786723840"===w&&(t=(t=(t=new URL(window.document.referrer).hostname).replace(/^.+\.yahoo.com$/,"yahoo.com")).replace(/^.+\.aol\.(.+)$/,"aol.$1"))}catch(e){t=b.location.hostname}try{if("disqusservice.com"===t){var n=b.location.href,o=i("sourceUrl",n);t=(null!=(e=o.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i))&&2<e.length&&"string"==typeof e[2]&&0<e[2].length?e[2]:null)+"-disqus"}}catch(e){t=b.location.hostname}return 0===t.indexOf("www.")&&(t=t.replace("www.","")),t}(),n=!1,t&&t in y)x.websiteID=y[t].website_id,x.contentEnabled=y[t].content_enabled,x.mobileContentEnabled=y[t].mobile_content_enabled,n=!0;else for(a in y)(-1<t.indexOf(a.toLowerCase())||-1<b.location.hostname.indexOf(a.toLowerCase()))&&(n=!0,x.websiteID=y[a].website_id,x.contentEnabled=y[a].content_enabled,x.mobileContentEnabled=y[a].mobile_content_enabled);if(n)return[2];if(!(Math.floor(100*Math.random())<1))return[3,2];if(c={event:"unknownDomain",orgID:w,meta:{hostname:t},severity:1},l=void 0,window.TextEncoder)l=(new window.TextEncoder).encode(JSON.stringify(c)).buffer;else{for(s=unescape(encodeURIComponent(JSON.stringify(c))),u=new Uint8Array(s.length),d=0;d<s.length;d++)u[d]=s.charCodeAt(d);l=u.buffer}return[4,(o="https://"+v+"/log?upapi=true&tid="+encodeURIComponent(E.traceID)+"&cv="+encodeURIComponent(h),r=l,new Promise(function(e,t){var n=new window.XMLHttpRequest;n.open("POST",o,!0),n.onerror=function(){t("Error in get request")},n.onload=function(){e(n.responseText)},n.send(r)}))];case 1:e.sent(),e.label=2;case 2:return[2]}var o,r})})}(),window.__bt_tag_d={orgID:w,domain:f,apiDomain:v,version:h,websitesData:y,siteInfo:x};var k,S,D,C="w",T="o",O="r",M="aa",P="tid",B="cv",A="bv",R="rt",j="vr",L="sid";function U(n,r,i){return a(this,void 0,void 0,function(){var t;return m(this,function(e){switch(e.label){case 0:return(t={})[P]=E.traceID,t[C]=x.websiteID,t[T]=w,t[B]=h,i&&(t[A]=i),t[O]=n,t[j]=window.innerWidth+"x"+window.innerHeight,t.pageURL=b.location.href,t[L]=E.sessionID,n&&(t[R]=0,t[M]=r),[4,(o=function(e,t){void 0===t&&(t={}),(e=e||"/").startsWith("/")||(e="/"+e),t.upapi=!0;var n="",o="?";for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=t[r];n+=""+o+r+"="+encodeURIComponent(i),o="&"}return"https://"+v+e+n}("/pv",t),new Promise(function(e,t){var n=new window.XMLHttpRequest;n.open("GET",o,!0),n.onerror=function(){console.log("Error in get request for "+o),t()},n.onload=function(){e(n.responseText)},n.send()}))];case 1:return e.sent(),[2]}var o})})}function N(n){if(!n)return null;var o=0,r={};return Object.keys(n).sort().forEach(function(e){var t=n[e];r[e]={min:Math.trunc(100*o),max:Math.trunc(100*(o+t))},o+=t}),r}function z(e,t,n){if(void 0===n&&(n="latest"),!e)return null;if(!t||"object"!=typeof t||Object.keys(t).length<=0)return null;var o={},r=t[e],i=t[0],a=t.global;if(null!=r&&r.bundles?o=N(r.bundles):null!=i&&i.bundles?o=N(i.bundles):null!=a&&a.bundles&&(o=N(a.bundles)),Object.keys(o).length<=0)return null;var c=function(e){if(!e)return 0;var t=0;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n].max;t<o&&(t=o)}return t/100}(o);return c<1&&(o[n]={min:Math.trunc(100*c),max:100}),o}function q(){var e="latest",t="BT_BUNDLE_VERSION",n="BT_DIGEST_VERSION",o=z(x.websiteID,k,e);if(window.__bt_tag_d&&(window.__bt_tag_d.probabilities=o),o&&!(Object.keys(o).length<=0)){var r=k[x.websiteID]||k[0]||k.global;if(r){var i=r.digest;b.localStorage.getItem(n)!=i&&(b.localStorage.setItem(n,i),b.localStorage.removeItem(t));var a=b.localStorage.getItem(t);if(!a)a=function(e,t){if("number"!=typeof e||e<0||100<e)return null;if(!t||"object"!=typeof t)return null;for(var n=Object.keys(t),o=0;o<n.length;o++){var r=n[o],i=t[r];if(i.min<=e&&i.max>e)return r}return null}(Math.trunc(100*Math.random()),o)||e,b.localStorage.setItem(t,a);return a===e?void 0:a}}}var H=!(k={}),V=Boolean(localStorage.getItem("BT_AM_SOFTWALL_RENDERED")),W="";try{var J=new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}}),$={"Websites":{},"Script":"https://btmessage.com/script/b8177ff-am.js"},F=null===(D=null===(S=window.__bt_tag_d)||void 0===S?void 0:S.siteInfo)||void 0===D?void 0:D.websiteID,G=null===$?void 0:$.Websites[F],X="stage"===J.bt_env?null==G?void 0:G.Stg:null==G?void 0:G.Prod;H=null==X?void 0:X.Enabled,W=$.Script,window.__bt_tag_am={settings:X}}catch(e){}function Q(e){if(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e,t.crossOrigin="anonymous",(window.document.head||window.document.body||window.document.documentElement).appendChild(t)}}function K(e){var t=e.eventName,n=e.payload||{bubbles:!1,cancelable:!1,detail:void 0};if(window.CustomEvent)try{var o=new window.CustomEvent(t,n);return void window.dispatchEvent(o)}catch(e){}var r=document.createEvent("CustomEvent");r.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),window.dispatchEvent(r)}b.__bt_intrnl=b.__bt_intrnl||{traceID:E.traceID,pvSent:!!e("BT_pvSent"),stopFlag:!1},window.__bt_intrnl=b.__bt_intrnl;try{!function(){a(this,void 0,void 0,function(){var t,n,o,r,i;return m(this,function(e){switch(e.label){case 0:return window.__bt_already_invoked||!x.websiteID?[2]:(window.__bt_already_invoked=!0,[4,function(){return a(this,void 0,void 0,function(){return m(this,function(e){return[2,new Promise(function(n){var o="BT_AA_DETECTION",r=JSON.parse(b.localStorage.getItem(o));r&&r.ab&&r.acceptable&&n(r),Promise.all([d(),function(t){return void 0===t&&(t=s),a(this,void 0,void 0,function(){return m(this,function(e){switch(e.label){case 0:return[4,u(t)];case 1:return[2,!e.sent()]}})})}()]).then(function(e){var t={ab:e[0],acceptable:e[1]};b.localStorage.setItem(o,JSON.stringify(t)),!(r&&r.ab&&r.acceptable)||t.ab&&t.acceptable||(b.__bt_intrnl.stopFlag=!0),n(t)})})]})})}()]);case 1:if(t=e.sent(),b.localStorage.getItem("btUserCountry")||fetch("https://api.btloader.com/country").then(function(e){return e.json()}).then(function(e){return b.localStorage.setItem("btUserCountry",e.country)}),o=V,t.ab&&(window.disableUponit||((0<=b.location.href.indexOf("bt_debug=true")||"true"==b.localStorage.getItem("bt_debug"))&&(x.contentEnabled="true"==b.localStorage.getItem("forceContent")||x.contentEnabled,x.mobileContentEnabled="true"==b.localStorage.getItem("forceMobileContent")||x.mobileContentEnabled),x.websiteID&&x.contentEnabled&&(!(i="function"==typeof window.bt_isMobileCustom?window.bt_isMobileCustom():/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))||i&&x.mobileContentEnabled)&&(t.acceptable?(n=!0,r=q()):H&&(o=!0)))),b.__bt_intrnl.pvSent||(b.__bt_intrnl.pvSent=!0,p("BT_pvSent","true"),U(t.ab,t.acceptable,r)),n)Q(function(e){var t="https://"+f+"/recovery?w="+x.websiteID+"&upapi=true";e&&(t=t+"&b="+e);""!==g&&(t=t+"&"+g);return t}(r));else try{K({eventName:"AcceptableAdsInit",payload:{detail:!1}}),K({eventName:"uponitInit",payload:{detail:!1}})}catch(e){}return o&&Q(W),[2]}})})}()}catch(e){}}();
