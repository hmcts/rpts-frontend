!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend.Details",t):(e.GOVUKFrontend=e.GOVUKFrontend||{},e.GOVUKFrontend.Details=t())}(this,(function(){"use strict";function e(e){this.$module=e}return function(e){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=this}(this)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document))}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var e,t=document.appendChild(document.createElement("body")),n=t.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),r={},i=function(e,t){var n,o,c,a=e.childNodes||[],l=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,r)o=r[n],e[n]=o;for(;c=t&&a[++l];)i(c,t);return e},c=document.getElementsByTagName("*"),a=document.createElement,l=100;o.attachEvent("onpropertychange",(function(e){for(var t,n=e.propertyName,i=!r.hasOwnProperty(n),a=o[n],l=r[n],u=-1;t=c[++u];)1===t.nodeType&&(i||t[n]===l)&&(t[n]=a);r[n]=a})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(e){return null!==this.getAttribute(e)}),u()||(document.onreadystatechange=u,e=setInterval(u,25)),document.createElement=function(e){var t=a(String(e).toLowerCase());return i(t)},document.removeChild(t)}else window.HTMLElement=window.Element;function u(){return l--||clearTimeout(e),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState)||(i(document,!0),e&&document.body.prototype&&clearTimeout(e),!document.body.prototype))}}()}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){var t,n,o,r;"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(e){return!1}}()||(t=Object.defineProperty,n=Object.prototype.hasOwnProperty("__defineGetter__"),o="Getters & setters cannot be defined on this javascript engine",r="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(e,i,c){if(t&&(e===window||e===document||e===Element.prototype||e instanceof Element))return t(e,i,c);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(c instanceof Object))throw new TypeError("Property description must be an object");var a=String(i),l="value"in c||"writable"in c,u="get"in c&&typeof c.get,s="set"in c&&typeof c.set;if(u){if("function"!==u)throw new TypeError("Getter must be a function");if(!n)throw new TypeError(o);if(l)throw new TypeError(r);Object.__defineGetter__.call(e,a,c.get)}else e[a]=c.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!n)throw new TypeError(o);if(l)throw new TypeError(r);Object.__defineSetter__.call(e,a,c.set)}return"value"in c&&(e[a]=c.value),e})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0}catch(e){return!1}})(this)||function(){var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(t,n){if(!t)throw new Error("Not enough arguments");var o;if("createEvent"in document){o=document.createEvent("Event");var r=!(!n||n.bubbles===e)&&n.bubbles,i=!(!n||n.cancelable===e)&&n.cancelable;return o.initEvent(t,r,i),o}return(o=document.createEventObject()).type=t,o.bubbles=!(!n||n.bubbles===e)&&n.bubbles,o.cancelable=!(!n||n.cancelable===e)&&n.cancelable,o},n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,n=arguments[0],r=arguments[1];if(e===window&&n in t)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[n]||(e._events[n]=function(t){var n,r=e._events[t.type].list,i=r.slice(),c=-1,a=i.length;for(t.preventDefault=function(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function(){t.cancelBubble=!0},t.stopImmediatePropagation=function(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++c<a&&!t.cancelImmediate;)c in i&&-1!==o(r,n=i[c])&&"function"==typeof n&&n.call(e,t)},e._events[n].list=[],e.attachEvent&&e.attachEvent("on"+n,e._events[n])),e._events[n].list.push(r)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var e,t=this,n=arguments[0],r=arguments[1];t._events&&t._events[n]&&t._events[n].list&&-1!==(e=o(t._events[n].list,r))&&(t._events[n].list.splice(e,1),t._events[n].list.length||(t.detachEvent&&t.detachEvent("on"+n,t._events[n]),delete t._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,e)}catch(o){e.target=t;do{e.currentTarget=t,"_events"in t&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),t=9===t.nodeType?t.parentWindow:t.parentNode}while(t&&!e.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))})))}function o(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1}}()}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function(e){var t,n=Array,o=Object,r=o.prototype,i=n.prototype,c=function(){},a=r.toString,l="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,u=Function.prototype.toString;t=function(e){if("function"!=typeof e)return!1;if(l)return function(e){try{return u.call(e),!0}catch(e){return!1}}(e);var t=a.call(e);return"[object Function]"===t||"[object GeneratorFunction]"===t};var s=i.slice,p=i.concat,d=i.push,f=Math.max,m=this;if(!t(m))throw new TypeError("Function.prototype.bind called on incompatible "+m);for(var y,b=s.call(arguments,1),w=f(0,m.length-b.length),v=[],h=0;h<w;h++)d.call(v,"$"+h);return y=Function("binder","return function ("+v.join(",")+"){ return binder.apply(this, arguments); }")((function(){if(this instanceof y){var t=m.apply(this,p.call(b,s.call(arguments)));return o(t)===t?t:this}return m.apply(e,p.call(b,s.call(arguments)))})),m.prototype&&(c.prototype=m.prototype,y.prototype=new c,c.prototype=null),y}})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),e.prototype.init=function(){this.$module&&("boolean"==typeof this.$module.open||this.polyfillDetails())},e.prototype.polyfillDetails=function(){var e,t=this.$module,n=this.$summary=t.getElementsByTagName("summary").item(0),o=this.$content=t.getElementsByTagName("div").item(0);n&&o&&(o.id||(o.id="details-content-"+(e=(new Date).getTime(),void 0!==window.performance&&"function"==typeof window.performance.now&&(e+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})))),t.setAttribute("role","group"),n.setAttribute("role","button"),n.setAttribute("aria-controls",o.id),n.tabIndex=0,this.$module.hasAttribute("open")?n.setAttribute("aria-expanded","true"):(n.setAttribute("aria-expanded","false"),o.style.display="none"),this.polyfillHandleInputs(this.polyfillSetAttributes.bind(this)))},e.prototype.polyfillSetAttributes=function(){return this.$module.hasAttribute("open")?(this.$module.removeAttribute("open"),this.$summary.setAttribute("aria-expanded","false"),this.$content.style.display="none"):(this.$module.setAttribute("open","open"),this.$summary.setAttribute("aria-expanded","true"),this.$content.style.display=""),!0},e.prototype.polyfillHandleInputs=function(e){this.$summary.addEventListener("keypress",(function(t){var n=t.target;13!==t.keyCode&&32!==t.keyCode||"summary"===n.nodeName.toLowerCase()&&(t.preventDefault(),n.click?n.click():e(t))})),this.$summary.addEventListener("keyup",(function(e){var t=e.target;32===e.keyCode&&"summary"===t.nodeName.toLowerCase()&&e.preventDefault()})),this.$summary.addEventListener("click",e)},e}));