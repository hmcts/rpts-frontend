!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GOVUKFrontend.Radios",t):(e.GOVUKFrontend=e.GOVUKFrontend||{},e.GOVUKFrontend.Radios=t())}(this,(function(){"use strict";function e(e,t){if(window.NodeList.prototype.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t.call(window,e[n],n,e)}function t(e){this.$module=e,this.$inputs=e.querySelectorAll('input[type="radio"]')}return function(e){var t,n,o,i;"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(e){return!1}}()||(t=Object.defineProperty,n=Object.prototype.hasOwnProperty("__defineGetter__"),o="Getters & setters cannot be defined on this javascript engine",i="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(e,r,c){if(t&&(e===window||e===document||e===Element.prototype||e instanceof Element))return t(e,r,c);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(c instanceof Object))throw new TypeError("Property description must be an object");var a=String(r),l="value"in c||"writable"in c,s="get"in c&&typeof c.get,u="set"in c&&typeof c.set;if(s){if("function"!==s)throw new TypeError("Getter must be a function");if(!n)throw new TypeError(o);if(l)throw new TypeError(i);Object.__defineGetter__.call(e,a,c.get)}else e[a]=c.value;if(u){if("function"!==u)throw new TypeError("Setter must be a function");if(!n)throw new TypeError(o);if(l)throw new TypeError(i);Object.__defineSetter__.call(e,a,c.set)}return"value"in c&&(e[a]=c.value),e})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){var t;"DOMTokenList"in this&&(!("classList"in(t=document.createElement("x")))||!t.classList.toggle("x",!1)&&!t.className)||function(t){var n;"DOMTokenList"in t&&t.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(t.DOMTokenList=function(){var t=!0,n=function(e,n,o,i){Object.defineProperty?Object.defineProperty(e,n,{configurable:!1===t||!!i,get:o}):e.__defineGetter__(n,o)};try{n({},"support")}catch(e){t=!1}return function(t,o){var i=this,r=[],c={},a=0,l=0,s=function(e){n(i,e,(function(){return d(),r[e]}),!1)},u=function(){if(a>=l)for(;l<a;++l)s(l)},d=function(){var e,n,i=arguments,l=/\s+/;if(i.length)for(n=0;n<i.length;++n)if(l.test(i[n]))throw(e=new SyntaxError('String "'+i[n]+'" contains an invalid character')).code=5,e.name="InvalidCharacterError",e;for(""===(r="object"==typeof t[o]?(""+t[o].baseVal).replace(/^\s+|\s+$/g,"").split(l):(""+t[o]).replace(/^\s+|\s+$/g,"").split(l))[0]&&(r=[]),c={},n=0;n<r.length;++n)c[r[n]]=!0;a=r.length,u()};return d(),n(i,"length",(function(){return d(),a})),i.toLocaleString=i.toString=function(){return d(),r.join(" ")},i.item=function(e){return d(),r[e]},i.contains=function(e){return d(),!!c[e]},i.add=function(){d.apply(i,e=arguments);for(var e,n,l=0,s=e.length;l<s;++l)c[n=e[l]]||(r.push(n),c[n]=!0);a!==r.length&&(a=r.length>>>0,"object"==typeof t[o]?t[o].baseVal=r.join(" "):t[o]=r.join(" "),u())},i.remove=function(){d.apply(i,e=arguments);for(var e,n={},l=0,s=[];l<e.length;++l)n[e[l]]=!0,delete c[e[l]];for(l=0;l<r.length;++l)n[r[l]]||s.push(r[l]);r=s,a=s.length>>>0,"object"==typeof t[o]?t[o].baseVal=r.join(" "):t[o]=r.join(" "),u()},i.toggle=function(t,n){return d.apply(i,[t]),e!==n?n?(i.add(t),!0):(i.remove(t),!1):c[t]?(i.remove(t),!1):(i.add(t),!0)},i}}()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function(t){var n=arguments[1];if(n===e){var o=!this.contains(t);return this[o?"add":"remove"](t),o}return this[(n=!!n)?"add":"remove"](t),n})),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a","b"),!e.classList.contains("b"))){var t=e.classList.constructor.prototype.add;e.classList.constructor.prototype.add=function(){for(var e=arguments,n=arguments.length,o=0;o<n;o++)t.call(this,e[o])}}}(),function(){var e=document.createElement("span");if("classList"in e&&(e.classList.add("a"),e.classList.add("b"),e.classList.remove("a","b"),e.classList.contains("b"))){var t=e.classList.constructor.prototype.remove;e.classList.constructor.prototype.remove=function(){for(var e=arguments,n=arguments.length,o=0;o<n;o++)t.call(this,e[o])}}}()}(this)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document))}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var e,t=document.appendChild(document.createElement("body")),n=t.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),i={},r=function(e,t){var n,o,c,a=e.childNodes||[],l=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,i)o=i[n],e[n]=o;for(;c=t&&a[++l];)r(c,t);return e},c=document.getElementsByTagName("*"),a=document.createElement,l=100;o.attachEvent("onpropertychange",(function(e){for(var t,n=e.propertyName,r=!i.hasOwnProperty(n),a=o[n],l=i[n],s=-1;t=c[++s];)1===t.nodeType&&(r||t[n]===l)&&(t[n]=a);i[n]=a})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(e){return null!==this.getAttribute(e)}),s()||(document.onreadystatechange=s,e=setInterval(s,25)),document.createElement=function(e){var t=a(String(e).toLowerCase());return r(t)},document.removeChild(t)}else window.HTMLElement=window.Element;function s(){return l--||clearTimeout(e),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState)||(r(document,!0),e&&document.body.prototype&&clearTimeout(e),!document.body.prototype))}}()}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){var t;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((t=document.createElement("span")).classList.add("a","b"),t.classList.contains("b"))||function(e){var t=!0,n=function(e,n,o,i){Object.defineProperty?Object.defineProperty(e,n,{configurable:!1===t||!!i,get:o}):e.__defineGetter__(n,o)};try{n({},"support")}catch(e){t=!1}var o=function(e,i,r){n(e.prototype,i,(function(){var e,c=this,a="__defineGetter__DEFINE_PROPERTY"+i;if(c[a])return e;if(c[a]=!0,!1===t){for(var l,s=o.mirror||document.createElement("div"),u=s.childNodes,d=u.length,p=0;p<d;++p)if(u[p]._R===c){l=u[p];break}l||(l=s.appendChild(document.createElement("div"))),e=DOMTokenList.call(l,c,r)}else e=new DOMTokenList(c,r);return n(c,i,(function(){return e})),delete c[a],e}),!0)};o(e.Element,"classList","className"),o(e.HTMLElement,"classList","className"),o(e.HTMLLinkElement,"relList","rel"),o(e.HTMLAnchorElement,"relList","rel"),o(e.HTMLAreaElement,"relList","rel")}(this)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=this}(this)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0}catch(e){return!1}})(this)||function(){var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(t,n){if(!t)throw new Error("Not enough arguments");var o;if("createEvent"in document){o=document.createEvent("Event");var i=!(!n||n.bubbles===e)&&n.bubbles,r=!(!n||n.cancelable===e)&&n.cancelable;return o.initEvent(t,i,r),o}return(o=document.createEventObject()).type=t,o.bubbles=!(!n||n.bubbles===e)&&n.bubbles,o.cancelable=!(!n||n.cancelable===e)&&n.cancelable,o},n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,n=arguments[0],i=arguments[1];if(e===window&&n in t)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[n]||(e._events[n]=function(t){var n,i=e._events[t.type].list,r=i.slice(),c=-1,a=r.length;for(t.preventDefault=function(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function(){t.cancelBubble=!0},t.stopImmediatePropagation=function(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++c<a&&!t.cancelImmediate;)c in r&&-1!==o(i,n=r[c])&&"function"==typeof n&&n.call(e,t)},e._events[n].list=[],e.attachEvent&&e.attachEvent("on"+n,e._events[n])),e._events[n].list.push(i)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var e,t=this,n=arguments[0],i=arguments[1];t._events&&t._events[n]&&t._events[n].list&&-1!==(e=o(t._events[n].list,i))&&(t._events[n].list.splice(e,1),t._events[n].list.length||(t.detachEvent&&t.detachEvent("on"+n,t._events[n]),delete t._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,e)}catch(o){e.target=t;do{e.currentTarget=t,"_events"in t&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),t=9===t.nodeType?t.parentWindow:t.parentNode}while(t&&!e.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))})))}function o(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1}}()}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function(e){var t,n=Array,o=Object,i=o.prototype,r=n.prototype,c=function(){},a=i.toString,l="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,s=Function.prototype.toString;t=function(e){if("function"!=typeof e)return!1;if(l)return function(e){try{return s.call(e),!0}catch(e){return!1}}(e);var t=a.call(e);return"[object Function]"===t||"[object GeneratorFunction]"===t};var u=r.slice,d=r.concat,p=r.push,f=Math.max,m=this;if(!t(m))throw new TypeError("Function.prototype.bind called on incompatible "+m);for(var y,b=u.call(arguments,1),v=f(0,m.length-b.length),h=[],w=0;w<v;w++)p.call(h,"$"+w);return y=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")((function(){if(this instanceof y){var t=m.apply(this,d.call(b,u.call(arguments)));return o(t)===t?t:this}return m.apply(e,d.call(b,u.call(arguments)))})),m.prototype&&(c.prototype=m.prototype,y.prototype=new c,c.prototype=null),y}})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),t.prototype.init=function(){var t=this.$module;e(this.$inputs,(function(e){var t=e.getAttribute("data-aria-controls");t&&document.getElementById(t)&&(e.setAttribute("aria-controls",t),e.removeAttribute("data-aria-controls"))})),"onpageshow"in window?window.addEventListener("pageshow",this.syncAllConditionalReveals.bind(this)):window.addEventListener("DOMContentLoaded",this.syncAllConditionalReveals.bind(this)),this.syncAllConditionalReveals(),t.addEventListener("click",this.handleClick.bind(this))},t.prototype.syncAllConditionalReveals=function(){e(this.$inputs,this.syncConditionalRevealWithInputState.bind(this))},t.prototype.syncConditionalRevealWithInputState=function(e){var t=document.getElementById(e.getAttribute("aria-controls"));if(t&&t.classList.contains("govuk-radios__conditional")){var n=e.checked;e.setAttribute("aria-expanded",n),t.classList.toggle("govuk-radios__conditional--hidden",!n)}},t.prototype.handleClick=function(t){var n=t.target;"radio"===n.type&&e(document.querySelectorAll('input[type="radio"][aria-controls]'),function(e){var t=e.form===n.form;e.name===n.name&&t&&this.syncConditionalRevealWithInputState(e)}.bind(this))},t}));