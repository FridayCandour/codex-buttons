!function(){function e(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return t};var e,t={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),s=new I(n||[]);return i(a,"_invoke",{value:T(e,r,s)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var p="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function b(){}function w(){}function _(){}var k={};f(k,u,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(O([])));S&&S!==o&&a.call(S,u)&&(k=S);var C=_.prototype=b.prototype=Object.create(k);function E(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,i,s,u){var c=h(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==r(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,s,u)}),(function(e){n("throw",e,s,u)})):t.resolve(f).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,u)}))}u(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}})}function T(t,r,n){var o=p;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var u=A(s,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var c=h(t,r,n);if("normal"===c.type){if(o=n.done?g:v,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=g,n.method="throw",n.arg=c.arg)}}}function A(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,A(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=h(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function O(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return w.prototype=_,i(C,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:w,configurable:!0}),w.displayName=f(_,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,f(e,l,"GeneratorFunction")),e.prototype=Object.create(C),e},t.awrap=function(e){return{__await:e}},E(L.prototype),f(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(d(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(C),f(C,l,"Generator"),f(C,u,(function(){return this})),f(C,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=O,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}function o(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){o(i,n,a,s,u,"next",e)}function u(e){o(i,n,a,s,u,"throw",e)}s(void 0)}))}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function u(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=f(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function f(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register([],(function(o,s){"use strict";return{execute:function(){var o=document.createElement("style");o.textContent=":root{---primary: #369fff;---hover: #0274dc;---secondary: #30343b;---danger: #d32a2a;---dark: #242527;---light: #ffffff}body{background-color:var(---light);color:var(---dark)}body.dark{background-color:var(---dark);color:var(---light)}.button{padding:10px;display:flex;align-items:center;justify-content:center;gap:4px}.button.Small{padding:6px 12px}.button.Medium{padding:10px 20px}.button.Large{padding:14px 28px}.button.primary{background-color:var(---primary);color:#fff;border-radius:9px;border:none;margin:4px;cursor:pointer;pointer-events:all;font-weight:700}.button.secondary{background-color:var(---secondary);color:#fff}.button.danger{background-color:var(---danger);color:#fff}.button.Outline{background-color:transparent;border:1px solid var(---primary);color:var(---primary)}.button.Soft{background-color:#e6f3ff}.button.Ghost{background-color:transparent;color:var(---primary)}.button.state-hover:hover{opacity:.7}.button.state-disabled{opacity:.5;cursor:none;background-color:rgba(48,52,59,.165);color:#94979a}\n",document.head.appendChild(o);var s=function(e){return e instanceof HTMLElement||e instanceof DocumentFragment},c=function(){function e(){i(this,e),this.listeners={}}var t,r;return u(e,[{key:"addEventListener",value:(r=a(n().mark((function e(t,r){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(r);case 2:case"end":return e.stop()}}),e,this)}))),function(e,t){return r.apply(this,arguments)})},{key:"dispatchEvent",value:(t=a(n().mark((function e(t,r){var o,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=this.listeners[t]||[];0!==o.length;)null===(a=o.shift())||void 0===a||a.call(void 0,r);case 2:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),e}(),f=new c;function d(e){var t,n=new DocumentFragment,o=l(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;if(Array.isArray(a))n.appendChild(d(a));else{if(a instanceof p&&(a=a.render(void 0)),"function"==typeof a&&"function"==typeof(a=a())&&(a=a()),"string"==typeof a||"number"==typeof a){n.appendChild(document.createTextNode(a));continue}if(s(a))n.appendChild(a);else if(void 0!==a)throw new Error("  ✘  Cradova err:  invalid child type: "+a+" ("+r(a)+")")}}}catch(i){o.e(i)}finally{o.f()}return n}function h(e){for(var t=0,r=0;r<e.length;r++)t+=e.charCodeAt(r);return t.toString()}var p=function(){function e(t){var r=this;i(this,e),this.effects=[],this.effectuate=null,this.rendered=!1,this.published=!1,this.preRendered=null,this.reference=new y,this._state=[],this._state_track={},this._state_index=0,this.component=t.bind(this),f.addEventListener("onTransition",(function(){r.current_id=h(location.href)}))}var t,r;return u(e,[{key:"preRender",value:function(e,t){this.reference._appendDomForce(this.current_id,this.render(e,t))}},{key:"destroyPreRendered",value:function(){this.preRendered=null}},{key:"render",value:function(e,t){this.effects=[],this.rendered=!1;var r=this.component(e);return"function"==typeof r&&(r=r()),r||(r=this.preRendered),t&&(this.stash=e),s(r)?(this.current_id=h(location.href),this.reference._appendDomForce(this.current_id,r),this.effector.apply(this),this.rendered=!0,this.published=!0):console.error(" ✘  Cradova err :  Invalid html content, got  - "+r),r}},{key:"instance",value:function(){return this.current_id=h(location.href),this.reference[this.current_id]}},{key:"_setExtra",value:function(e){this.Signal=e}},{key:"_roll_state",value:function(e,t){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]||(this._state[t]=e),this._state[t]}},{key:"_effect",value:function(e){this.rendered||this.effects.push(e.bind(this))}},{key:"effector",value:(r=a(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.rendered){e.next=9;break}t=0;case 2:if(!(t<this.effects.length)){e.next=8;break}return e.next=5,this.effects[t].apply(this);case 5:t++,e.next=2;break;case 8:this.effects=[];case 9:this.effectuate&&(this.effectuate(),this.effectuate=null);case 10:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"updateState",value:function(e,t){var r=this;this.rendered?this.published&&this.Activate(e):this.effectuate=function(){r.published&&(r.current_id=h(location.href),r.Activate(e))},t&&(this.stash=e)}},{key:"Activate",value:(t=a(n().mark((function e(t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._state_index=0,this.published=!1,this.rendered){e.next=4;break}return e.abrupt("return");case 4:"function"==typeof(r=this.component(t))&&(r=r()),s(r)?(this.reference[this.current_id].insertAdjacentElement("beforebegin",r),this.reference[this.current_id].remove(),this.published=!0,this.reference._appendDomForce(this.current_id,r),f.dispatchEvent("onmountEvent")):console.error(" ✘  Cradova err :  Invalid html content, got  - "+r);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}(),v=function(e){for(var t=document.createDocumentFragment(),r=0;r<e.length;r++){var n=e[r];if("function"==typeof n&&(n=n()),s(n))t.appendChild(n);else{if(!(n instanceof String))throw console.error(" ✘  Cradova err:   wrong element type"+n),new TypeError(" ✘  Cradova err:   invalid element");t.appendChild(document.createTextNode(n))}}return t},y=function(){function e(){i(this,e)}return u(e,[{key:"bindAs",value:function(e){return[this,e]}},{key:"dom",value:function(e){return this[e]}},{key:"_appendDomForce",value:function(e,t){this[e]=t}}]),e}();function g(e,n){if(e){if("object"===r(n)&&!Array.isArray(n))for(var o in n)if("style"!==o||"object"!==r(n[o])){var a=n;"function"!=typeof e[o]?"text"!==o?"tree"!==o?o.includes("data-")?e.setAttribute(o,a[o]):e[o]=a[o]:(e.innerHTML="",e.appendChild(v([a[o]]))):e.innerText=a[o]:o.startsWith("on")?e[o]=a[o]:e[o].apply(e)}else for(var i=0,s=Object.entries(n[o]);i<s.length;i++){var u=t(s[i],2),c=u[0],l=u[1];if(void 0===e.style[c]||"src"===c||"string"!=typeof l)throw new Error("✘  Cradova err : "+c+" is not a valid css style property");e.style[c]=l}if("string"!=typeof n)if("function"!=typeof n){if(n instanceof HTMLElement&&e.appendChild(n),"object"!==r(n)||Array.isArray(n))throw new Error(" ✘  Cradova err: Cradova got invalid state  => \n"+String(n))}else e.appendChild(v([n]));else e.innerText=n}}var m=function(){function n(e,t){if(i(this,n),this.persistName="",this.actions={},this.ref=[],this.value=e,t&&t.persistName){this.persistName=t.persistName;var o=localStorage.getItem(t.persistName);if(o&&"undefined"!==o&&(this.value=JSON.parse(o)),"object"===r(e))for(var a in e)Object.prototype.hasOwnProperty.call(this.value,a)||(this.value[a]=e[a])}}return u(n,[{key:"set",value:function(e,t){this.value="function"==typeof e?e(this.value):e,this.persistName&&localStorage.setItem(this.persistName,JSON.stringify(this.value)),this.ref.length&&!1!==t&&this._updateState(),this.callback&&this.callback(this.value)}},{key:"setKey",value:function(e,t,n){if("object"!==r(this.value)||Array.isArray(this.value))throw new Error("✘  Cradova err : can't set key ".concat(String(e)," . store.value is not a javascript object"));this.value[e]=t,this.persistName&&localStorage.setItem(this.persistName,JSON.stringify(this.value)),this.ref.length&&!1!==n&&this._updateState(),this.callback&&this.callback(this.value)}},{key:"createAction",value:function(e,t){if("string"!=typeof e||"function"!=typeof t)throw new Error("✘  Cradova err : can't create action, ".concat(e," is not a function"));this.actions[e]=t}},{key:"createActions",value:function(e){for(var r=0,n=Object.entries(e);r<n.length;r++){var o=t(n[r],2),a=o[0],i=o[1];if("string"!=typeof a||"function"!=typeof i)throw new Error("✘  Cradova err : can't create action, ".concat(a," is not a function"));this.actions[a]=i}}},{key:"fireAction",value:function(e,t){if(this._updateState(e,t),"function"==typeof this.actions[e])return this.actions[e].call(this,t);throw Error("✘  Cradova err : action "+e+"  does not exist!")}},{key:"bind",value:function(e){if("object"===r(this.value)&&void 0!==this.value[e])return[this,e];throw new Error("✘  Cradova err : can't bind an unavailable property!  "+e)}},{key:"_updateState",value:function(t,r){if(t&&r)this.ref.map((function(n){if(n._event===t){var o;if(n._element_property&&n._signalProperty)return void(null===(o=n.ref)||void 0===o||o.updateState(e({},n._element_property,r[n._signalProperty])));if(n._element_property)return void n.ref.updateState(e({},n._element_property,r));if(n._signalProperty)return void n.ref.updateState(r[n._signalProperty])}}));else for(var n=0;n<this.ref.length;n++){var o=this.ref[n];o._element_property&&o._signalProperty?o.ref.updateState(e({},o._element_property,this.value[o._signalProperty])):o._element_property?o.ref.updateState(e({},o._element_property,this.value)):o._signalProperty?o.ref.updateState(this.value[o._signalProperty]):o._element_property||o._signalProperty||o.ref.updateState(this.value)}}},{key:"bindRef",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{signalProperty:"",_element_property:""};if(e.render&&(e.render=e.render.bind(e,this.value)),e._setExtra&&e._setExtra(this),!e||!e.updateState)throw new Error("✘  Cradova err :  Invalid parameters for binding ref to Signal");this.ref.push({ref:e,_signalProperty:t.signalProperty,_element_property:t._element_property,_event:t.event})}},{key:"listen",value:function(e){this.callback=e}},{key:"clearPersist",value:function(){this.persistName&&localStorage.removeItem(this.persistName)}}]),n}(),b=new y,w=function(){function e(t){i(this,e),this._errorHandler=null,this._packed=!1,this._template=document.createElement("div"),this._persist=!0,this._delegatedRoutesCount=-1,this._dropped=!1;var r=t.template,n=t.name,o=t.persist,a=t.renderInParallel,s=t.transition;this._html=r,this._name=n,this._transition=s,this._template.setAttribute("id","cradova-screen-set"),!0===a?(this._delegatedRoutesCount=0,this._persist=!1):"boolean"==typeof o&&(this._persist=o)}var t,r,o;return u(e,[{key:"_delegatedRoutes",get:function(){return this._delegatedRoutesCount>100?-1:this._delegatedRoutesCount},set:function(e){e&&(this._delegatedRoutesCount+=1)}},{key:"setErrorHandler",value:function(e){this._errorHandler=e}},{key:"_package",value:(o=a(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof this._html){e.next=15;break}return e.next=3,this._html.apply(this);case 3:if("function"!=typeof(t=e.sent)){e.next=9;break}t=t(),s(t)&&(this._template.innerHTML="",this._template.appendChild(t)),e.next=15;break;case 9:if(!s(t)){e.next=14;break}this._template.innerHTML="",this._template.appendChild(t),e.next=15;break;case 14:throw new Error(" ✘  Cradova err:  template function for the screen with name '".concat(this._name,"' returned ").concat(t," instead of html"));case 15:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"onActivate",value:function(e){this._callBack=e}},{key:"onDeactivate",value:function(e){this._deCallBack=e}},{key:"_deActivate",value:(r=a(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._deCallBack){e.next=3;break}return e.next=3,this._deCallBack();case 3:this._transition&&this._template.classList.remove(this._transition);case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"drop",value:function(e){return"boolean"==typeof e?void(this._dropped=e):this._dropped}},{key:"_Activate",value:(t=a(n().mark((function e(){var t,r=arguments;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]&&r[0],!this._dropped){e.next=4;break}return history.go(-1),e.abrupt("return");case 4:if(this._persist&&!t&&this._packed){e.next=8;break}return e.next=7,this._package();case 7:this._packed=!0;case 8:if(this._transition&&this._template.classList.add(this._transition),document.title=this._name,b.doc.innerHTML="",b.doc.appendChild(this._template),f.dispatchEvent("onmountEvent"),window.scrollTo({top:0,left:0,behavior:"instant"}),!this._callBack){e.next=17;break}return e.next=17,this._callBack();case 17:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),e}(),_={lastNavigatedRouteController:null,nextRouteController:null,lastNavigatedRoute:null,pageShow:null,pageHide:null,errorHandler:null,loadingScreen:null,params:{},routes:{},pageevents:[],paused:!1};_.start_pageevents=function(){var e=a(n().mark((function e(t){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){for(var e=0;e<_.pageevents.length;e++)_.pageevents[e](t)}),100);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var k=function(e){if(_.routes[e])return[_.routes[e],{path:e}];if(_.routes[e+"/"])return[_.routes[e],{path:e}];for(var t in _.routes)if(t.includes(":")){var r=e.split("/"),n=t.split("/");e.endsWith("/")&&r.pop();var o=0,a=0;if(r.shift(),n.shift(),n.length===r.length){for(var i={_path:""},s=0;s<n.length;s++)n[s].includes(":")?a++:r[s]===n[s]&&o++;if(o+a===n.length){for(var u=0;u<n.length;u++)n[u].includes(":")&&(i[n[u].split(":")[1]]=r[u]);return i._path=t,[_.routes[t],i]}}}return[]};_.route=function(e,t){if(void 0!==t){if(t&&!t._Activate)throw console.error(" ✘  Cradova err:  not a valid screen  ",t),new Error(" ✘  Cradova err:  Not a valid cradova screen component");return _.routes[e]=t}},_.router=function(){var e=a(n().mark((function e(r,o){var a,i,s,u,c;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.location.pathname,!_.paused){e.next=4;break}return window.location.hash="paused",e.abrupt("return");case 4:if(a!==_.lastNavigatedRoute){e.next=6;break}return e.abrupt("return");case 6:if(_.nextRouteController?(i=_.nextRouteController,_.nextRouteController=null):(u=k(a),c=t(u,2),i=c[0],s=c[1]),void 0===i){e.next=43;break}if(e.prev=8,"function"!=typeof i){e.next=19;break}if(!_.LoadingScreen||!_.LoadingScreen._Activate){e.next=13;break}return e.next=13,_.LoadingScreen._Activate();case 13:return e.next=15,i();case 15:if(i=e.sent){e.next=19;break}return _.lastNavigatedRoute&&history.pushState({},a,_.lastNavigatedRoute),e.abrupt("return");case 19:return-1!==i._delegatedRoutes&&(i._delegatedRoutes=!0,i=new w({name:i._name,template:i._html}),_.routes[a]=i,f.dispatchEvent("onTransition")),s&&(_.params.params=s),e.next=23,i._Activate(o);case 23:_.start_pageevents(a),_.lastNavigatedRouteController&&_.lastNavigatedRouteController._deActivate(),_.lastNavigatedRoute=a,_.lastNavigatedRouteController=i,e.next=41;break;case 29:if(e.prev=29,e.t0=e.catch(8),!i||!i._errorHandler){e.next=35;break}i._errorHandler(e.t0),e.next=41;break;case 35:if(!_.errorHandler){e.next=39;break}_.errorHandler(e.t0),e.next=41;break;case 39:throw console.error(e.t0),new Error(" ✘  Cradova err:  consider adding error boundary to the specific screen  ");case 41:e.next=46;break;case 43:if(!_.routes["/*"]){e.next=46;break}return e.next=46,_.routes["/*"]._Activate(o);case 46:case"end":return e.stop()}}),e,null,[[8,29]])})));return function(t,r){return e.apply(this,arguments)}}();var x=function(){function e(){i(this,e)}var o;return u(e,null,[{key:"BrowserRoutes",value:function(t){var o=function(e){var o=t[e];"object"===r(o)&&"function"==typeof o.then||"function"==typeof o?_.routes[e]=a(n().mark((function t(){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof o){t.next=6;break}return t.next=3,o();case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,o;case 8:t.t0=t.sent;case 9:return t.next=11,t.t0;case 11:return o=t.sent,t.abrupt("return",_.route(e,(null===(r=o)||void 0===r?void 0:r.default)||o));case 13:case"end":return t.stop()}}),t)}))):_.route(e,o)};for(var i in t)o(i);e._mount()}},{key:"back",value:function(){history.go(-1)}},{key:"forward",value:function(){history.go(1)}},{key:"pauseNaviagtion",value:function(){_.paused=!0,window.location.hash="paused"}},{key:"resumeNaviagtion",value:function(){_.paused=!1,window.location.replace(window.location.pathname+window.location.search),history.go(-1)}},{key:"navigate",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof e)throw new TypeError(" ✘  Cradova err:  href must be a defined path but got "+e+" instead");var o,a=null;if(e.includes("://"))window.location.href=e;else{if(e===window.location.pathname)return;var i=t(k(e),2);a=i[0],o=i[1],a&&(_.nextRouteController=a,window.history.pushState({},"",e)),_.params.params=o,_.params.data=r,_.router(null,n)}}},{key:"navigateNauturally",value:function(e){if("string"!=typeof e)throw new TypeError(" ✘  Cradova err:  pathname must be a defined path but got "+e+" instead");window.location.pathname=e}},{key:"setLoadingScreen",value:function(e){if(!(e instanceof w))throw new Error(" ✘  Cradova err:  Loading Screen should be a cradova screen class");_.LoadingScreen=e}},{key:"onPageEvent",value:function(e){if("function"!=typeof e)throw new Error(" ✘  Cradova err:  callback for pageShow event is not a function");_.pageevents.push(e)}},{key:"packageScreen",value:(o=a(n().mark((function e(r){var o,a,i,s,u,c=arguments;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=c.length>1&&void 0!==c[1]?c[1]:{},_.routes[r]){e.next=4;break}throw console.error(" ✘  Cradova err:  no screen with path "+r),new Error(" ✘  Cradova err:  cradova err: Not a defined screen path");case 4:if(a=k(r),i=t(a,2),s=i[0],u=i[1],s._Activate||"function"!=typeof s){e.next=9;break}return e.next=8,s();case 8:s=e.sent;case 9:-1!==s._delegatedRoutes&&(s._delegatedRoutes=!0,s=new w({name:s._name,template:s._html}),_.routes[r]=s),s._package(Object.assign(o,u||{})),s._packed=!0;case 12:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"getParams",value:function(){return _.params}},{key:"addErrorHandler",value:function(e){if("function"!=typeof e)throw new Error(" ✘  Cradova err:  callback for error event is not a function");_.errorHandler=e}},{key:"_mount",value:function(){var e=document.querySelector("[data-wrapper=app]");e||((e=document.createElement("div")).setAttribute("data-wrapper","app"),document.body.appendChild(e)),b._appendDomForce("doc",e),window.addEventListener("pageshow",_.router),window.addEventListener("popstate",(function(e){e.preventDefault(),_.router()}))}}]),e}(),S=function(e,n){var o={},a=null;if(0===n.length)return e;for(var i=0;i<n.length;i++){var u=n[i];"function"==typeof u&&(u=u()),u instanceof p&&(u=u.render()),s(u)?e.appendChild(u):Array.isArray(u)?e.appendChild(d(u)):"string"!=typeof u&&"number"!=typeof u?"object"!==r(u)||(o=Object.assign(o,u)):a=u}if("object"===r(o)&&e)for(var c=function(){var n=t(h[l],2),a=n[0],i=n[1];if("style"===a&&"object"===r(i))return Object.assign(e.style,i),0;if(Array.isArray(i)){if(i[0]instanceof m)return e.updateState=g.bind(null,e),i[0].bindRef(e,{_element_property:a,signalProperty:i[1]}),0;if("reference"==a&&i[0]instanceof y)return e.updateState=g.bind(null,e),i[0]._appendDomForce(i[1],e),0}if("onmount"===a&&"function"==typeof o.onmount){return f.addEventListener("onmountEvent",(function(){var t;null===(t=o.onmount)||void 0===t||t.apply(e),o.onmount=void 0})),0}if(a.includes("data-"))return e.setAttribute(a,i),0;if(a.includes("aria-"))return e.setAttribute(a,i),0;if("href"===a&&"string"==typeof i){var s=i||"";return s.includes("://")||e.addEventListener("click",(function(t){if(t.preventDefault(),x.navigate(e.pathname),s.includes("#")){var r,n=s.split("#").at(-1);null===(r=document.getElementById("#"+n))||void 0===r||r.scrollIntoView()}})),e.setAttribute(a,i),0}if(void 0!==e.style[a]&&"src"!==a)return e.style[a]=i,0;e[a]=i},l=0,h=Object.entries(o);l<h.length;l++)c();return a&&e.appendChild(document.createTextNode(a)),e},C=function(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return S(document.createElement(e),r)}},E=C("br"),L=C("button"),T=C("div"),A=C("p"),j=function(e,t){var r=document.createElement("span");return r.innerHTML=e,S(r,[t])},N=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=function(e){if("string"!=typeof e)return[];Array.isArray(e)&&(e=e[0]);var r,n="";if(e.includes("|")){var o=t(e.split("|"),2);if(e=o[0],n=o[1],!e)return["P",void 0,void 0,n]}if(!e.includes("#"))return(r=(e=e.split(".")).shift())||(r="DIV"),[r,void 0,e.join(" "),n];if(!e.includes("."))return(r=(e=e.split("#")).shift())||(r="DIV"),e[0].includes(" ")&&(e=[e[0].split(" ")[1]]),[r,e[0],void 0,n];var a=[],i=[];(r=!(e=e.split("."))[0].includes("#")&&e.shift())||(r="DIV");for(var s=0;s<e.length;s++)if(e[s].includes("#")){var u=e[s].split("#");if(i.push(u[1]),0===s){r=u[0];continue}a.push(u[0])}else a.push(e[s]);return[r,i[0],a.join(" "),n]}(r[0]),a=o[0],i=o[1],s=o[2],u=o[3],c=a?document.createElement(a):new DocumentFragment;return a&&(s&&(c.className=s),i&&(c.id=i),u&&(c.innerText=u),r.shift()),S(c,r)},I=new p((function(){var e=t(function(e,t){t._state_index+=1;var r=t._state_index;return t._state_track[r]||(t._roll_state(e,r),t._state_track[r]=!0),[t._roll_state(null,r,!0),function(e){t._roll_state(e,r),t.updateState(e)}]}(!1,this),2),r=e[0],n=e[1];return T(N(".button.primary",{onmount:function(){r?document.body.classList.add("dark"):document.body.classList.remove("dark")},onclick:function(){n(!r)},style:{width:"fit-content",background:r?"var(---secondary)":"var(---primary)"}},r?"Change to light mode":"Change to dark mode"))})),O='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>',P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=["button primary"],n=("string"==typeof e?e:null==e?void 0:e.text)||"Click Me",o=[j(n)];if("object"===r(e)){switch(e.Icon_Type&&!e.Icons&&(e.Icons=[]),e.Icon_Type){case"Leading":o.unshift(j(e.Icons[0]||e["leading-icon"]||""));break;case"LeadingTrailing":o.unshift(j(e.Icons[0]||e["leading-icon"]||"")),o.push(j(e.Icons.at(-1)||e["trailing-icon"]||""));break;case"None":break;case"Standalone":o.length=0,o.push(j(e.Icons[0]||e["leading-icon"]||e["trailing-icon"]||""));break;case"Trailing":o.push(j(e.Icons[0]||e["trailing-icon"]||""))}switch(e.State){case"Disabled":t.push("state-disabled");break;case"Hover":t.push("state-hover");break;default:t.push("default")}switch(e.Type){case"Ghost":t.push("Ghost");break;case"Outline":t.push("Outline");break;case"Soft":t.push("Soft");break;case"Solid":t.push("Solid")}switch(e.Size){case"Large":t.push("Large");break;case"Medium":t.push("Medium");break;case"Small":t.push("Small")}switch(e.Style){case"Primary":t.push("primary");break;case"Secondary":t.push("secondary");break;case"Danger":t.push("danger")}}return L.apply(void 0,o.concat([{className:t.join(" ")}]))},R=new p((function(e){return T(A("Types"),T({style:{display:"flex"}},P({Type:"Solid"}),P({Type:"Outline"}),P({Type:"Soft"}),P({Type:"Ghost"})),A("Sizes"),T({display:"flex"},P({Size:"Small"}),P({Size:"Medium"}),P({Size:"Large"})),A("Style"),T({display:"flex"},P({Style:"Primary"}),P({Style:"Secondary"}),P({Style:"Danger"})),A("State"),T({display:"flex"},P({State:"Default"}),P({State:"Hover"}),P({State:"Disabled"})),A("Icon Type"),T({display:"flex"},P({Icon_Type:"None",Icons:[O]}),P({Icon_Type:"Leading",Icons:[O]}),P({Icon_Type:"Trailing",Icons:['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>']}),P({Icon_Type:"LeadingTrailing",Icons:[O,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>']}),P({Icon_Type:"Standalone",Icons:[O]}),P({Icon_Type:"Trailing",text:"Hold tight while we check",Icons:['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6.99998C9.1747 6.99987 6.99997 9.24998 7 12C7.00003 14.55 9.02119 17 12 17C14.7712 17 17 14.75 17 12"><animateTransform attributeName="transform" attributeType="XML" dur="560ms" from="0,12,12" repeatCount="indefinite" to="360,12,12" type="rotate"/></path></svg>']})))}));document.body.appendChild(T({id:"CODEX"},I,R,N(E,A(" This Button component sample aims to follow Codex buttons design system. available at https://codex.so/button "),E,A("Written in Cradova and CSS by Friday Candour"),E,E))),x.onPageEvent((function(){})),x.addErrorHandler((function(e){console.log(e)}))}}}))}();