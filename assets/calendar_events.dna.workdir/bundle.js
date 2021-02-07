/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e=new WeakMap,t=t=>(...r)=>{const o=t(...r);return e.set(o,!0),o},r=t=>"function"==typeof t&&e.has(t),o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},i={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${s}`);class c{constructor(e,t){this.parts=[],this.element=t;const r=[],o=[],n=document.createTreeWalker(t.content,133,null,!1);let i=0,a=-1,s=0;const{strings:c,values:{length:p}}=e;for(;s<p;){const e=n.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let o=0;for(let e=0;e<r;e++)f(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=c[s],r=u.exec(t)[2],o=r.toLowerCase()+"$lit$",n=e.getAttribute(o);e.removeAttribute(o);const i=n.split(d);this.parts.push({type:"attribute",index:a,name:r,strings:i}),s+=i.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const o=e.parentNode,n=t.split(d),i=n.length-1;for(let t=0;t<i;t++){let r,i=n[t];if(""===i)r=m();else{const e=u.exec(i);null!==e&&f(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),r=document.createTextNode(i)}o.insertBefore(r,e),this.parts.push({type:"node",index:++a})}""===n[i]?(o.insertBefore(m(),e),r.push(e)):e.data=n[i],s+=i}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&a!==i||(a++,t.insertBefore(m(),e)),i=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(r.push(e),a--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),s++}}else n.currentNode=o.pop()}for(const e of r)e.parentNode.removeChild(e)}}const f=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},p=e=>-1!==e.index,m=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class h{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,a=0,l=0,s=n.nextNode();for(;a<r.length;)if(i=r[a],p(i)){for(;l<i.index;)l++,"TEMPLATE"===s.nodeName&&(t.push(s),n.currentNode=s.content),null===(s=n.nextNode())&&(n.currentNode=t.pop(),s=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,i.name,i.strings,this.options));a++}else this.__parts.push(void 0),a++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),b=` ${l} `;class v{constructor(e,t,r,o){this.strings=e,this.values=t,this.type=r,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let o=0;o<e;o++){const e=this.strings[o],n=e.lastIndexOf("\x3c!--");r=(n>-1||r)&&-1===e.indexOf("--\x3e",n+1);const i=u.exec(e);t+=null===i?e+(r?b:s):e.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+l}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==g&&(t=g.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=e=>null===e||!("object"==typeof e||"function"==typeof e),y=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1,r=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=r[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!y(e))return e}let o="";for(let n=0;n<t;n++){o+=e[n];const t=r[n];if(void 0!==t){const e=t.value;if(x(e)||!y(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===i||x(e)&&e===this.value||(this.value=e,r(e)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const e=this.value;this.value=i,e(this)}this.value!==i&&this.committer.commit()}}class _{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i,e(this)}const e=this.__pendingValue;e!==i&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):y(e)?this.__commitIterable(e):e===a?(this.value=a,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof h&&this.value.template===t)this.value.update(e.values);else{const r=new h(t,e.processor,this.options),o=r._clone();r.update(e.values),this.__commitNode(o),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,o=0;for(const n of e)r=t[o],void 0===r&&(r=new _(this.options),t.push(r),0===o?r.appendIntoPart(this):r.insertAfterPart(t[o-1])),r.setValue(n),r.commit(),o++;o<t.length&&(t.length=o,this.clear(r&&r.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i,e(this)}if(this.__pendingValue===i)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=i}}class A extends w{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends k{}let S=!1;(()=>{try{const e={get capture(){return S=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class D{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i,e(this)}if(this.__pendingValue===i)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=i}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(S?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const R=new class{handleAttributeExpressions(e,t,r,o){const n=t[0];if("."===n){return new A(e,t.slice(1),r).parts}if("@"===n)return[new D(e,t.slice(1),o.eventContext)];if("?"===n)return[new E(e,t.slice(1),r)];return new w(e,t,r).parts}handleTextExpression(e){return new _(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function I(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(l);return r=t.keyString.get(o),void 0===r&&(r=new c(e,e.getTemplateElement()),t.keyString.set(o,r)),t.stringsArray.set(e.strings,r),r}const M=new Map,O=new WeakMap,z=(e,t,r)=>{let o=O.get(t);void 0===o&&(n(t,t.firstChild),O.set(t,o=new _(Object.assign({templateFactory:I},r))),o.appendInto(t)),o.setValue(e),o.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const N=(e,...t)=>new v(e,t,"html",R)
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */;var P=function(e,t){return(P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function H(e,t){function r(){this.constructor=e}P(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var L=function(){return(L=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function B(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function F(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,n++)o[n]=i[a];return o}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function U(e,t){const{element:{content:r},parts:o}=e,n=document.createTreeWalker(r,133,null,!1);let i=j(o),a=o[i],l=-1,s=0;const d=[];let c=null;for(;n.nextNode();){l++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&s++;void 0!==a&&a.index===l;)a.index=null!==c?-1:a.index-s,i=j(o,i),a=o[i]}d.forEach((e=>e.parentNode.removeChild(e)))}const V=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},j=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(p(t))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=(e,t)=>`${e}--${t}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const G=e=>t=>{const r=W(t.type,e);let o=M.get(r);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},M.set(r,o));let n=o.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(l);if(n=o.keyString.get(i),void 0===n){const r=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(r,e),n=new c(t,r),o.keyString.set(i,n)}return o.stringsArray.set(t.strings,n),n},Y=["html","svg"],$=new Set,Q=(e,t,r)=>{$.add(e);const o=r?r.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:i}=n;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let e=0;e<i;e++){const t=n[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{Y.forEach((t=>{const r=M.get(W(t,e));void 0!==r&&r.keyString.forEach((e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{r.add(e)})),U(e,r)}))}))})(e);const l=o.content;r?function(e,t,r=null){const{element:{content:o},parts:n}=e;if(null==r)return void o.appendChild(t);const i=document.createTreeWalker(o,133,null,!1);let a=j(n),l=0,s=-1;for(;i.nextNode();)for(s++,i.currentNode===r&&(l=V(t),r.parentNode.insertBefore(t,r));-1!==a&&n[a].index===s;){if(l>0){for(;-1!==a;)n[a].index+=l,a=j(n,a);return}a=j(n,a)}}(r,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const s=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==s)t.insertBefore(s.cloneNode(!0),t.firstChild);else if(r){l.insertBefore(a,l.firstChild);const e=new Set;e.add(a),U(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const X={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Z=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Z};class K extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,r)=>{const o=this._attributeNameForProperty(r,t);void 0!==o&&(this._attributeToPropertyMap.set(o,r),e.push(o))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,r,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdateInternal(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=Z){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,o=t.converter||X,n="function"==typeof o?o:o.fromAttribute;return n?n(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,o=t.converter;return(o&&o.toAttribute||X.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=J){const o=this.constructor,n=o._attributeNameForProperty(e,r);if(void 0!==n){const e=o._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,o=r._attributeToPropertyMap.get(e);if(void 0!==o){const e=r.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,r){let o=!0;if(void 0!==e){const n=this.constructor;r=r||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}K.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ee=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function te(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):ee(e,t)}function re(e){return te({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}function oe(e,t){return(r,o)=>{const n={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():`__${o}`;n.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(e)),this[t]}}return void 0!==o?ie(n,r,o):ae(n,r)}}function ne(e){return(t,r)=>{const o={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?ie(o,t,r):ae(o,t)}}const ie=(e,t,r)=>{Object.defineProperty(t,r,e)},ae=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function le(e){return(t,r)=>void 0!==r?((e,t,r)=>{Object.assign(t[r],e)})(e,t,r):((e,t)=>Object.assign(Object.assign({},t),{finisher(r){Object.assign(r.prototype[t.key],e)}}))(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const se=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol();class ce{constructor(e,t){if(t!==de)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const fe=(e,...t)=>{const r=t.reduce(((t,r,o)=>t+(e=>{if(e instanceof ce)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[o+1]),e[0]);return new ce(r,de)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const pe={};class me extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,r)=>e.reduceRight(((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e)),r),r=t(e,new Set),o=[];r.forEach((e=>o.unshift(e))),this._styles=o}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!se){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new ce(String(t),de)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==pe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return pe}}me.finalized=!0,me.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const o=r.scopeName,i=O.has(t),a=q&&11===t.nodeType&&!!t.host,l=a&&!$.has(o),s=l?document.createDocumentFragment():t;if(z(e,s,Object.assign({templateFactory:G(o)},r)),l){const e=O.get(s);O.delete(s);const r=e.value instanceof h?e.value.template:void 0;Q(o,s,r),n(t,t.firstChild),t.appendChild(s),O.set(t,e)}!i&&a&&window.ShadyCSS.styleElement(t.host)};var ue,he,ge,be,ve,xe={},ye=[],we=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function ke(e,t){for(var r in t)e[r]=t[r];return e}function _e(e){var t=e.parentNode;t&&t.removeChild(e)}function Ee(e,t,r){var o,n,i,a=arguments,l={};for(i in t)"key"==i?o=t[i]:"ref"==i?n=t[i]:l[i]=t[i];if(arguments.length>3)for(r=[r],i=3;i<arguments.length;i++)r.push(a[i]);if(null!=r&&(l.children=r),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return Ae(e,l,o,n,null)}function Ae(e,t,r,o,n){var i={type:e,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==n?++ue.__v:n};return null!=ue.vnode&&ue.vnode(i),i}function Ce(e){return e.children}function Se(e,t){this.props=e,this.context=t}function De(e,t){if(null==t)return e.__?De(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e)return r.__e;return"function"==typeof e.type?De(e):null}function Te(e){var t,r;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e){e.__e=e.__c.base=r.__e;break}return Te(e)}}function Re(e){(!e.__d&&(e.__d=!0)&&he.push(e)&&!Ie.__r++||be!==ue.debounceRendering)&&((be=ue.debounceRendering)||ge)(Ie)}function Ie(){for(var e;Ie.__r=he.length;)e=he.sort((function(e,t){return e.__v.__b-t.__v.__b})),he=[],e.some((function(e){var t,r,o,n,i,a;e.__d&&(i=(n=(t=e).__v).__e,(a=t.__P)&&(r=[],(o=ke({},n)).__v=n.__v+1,Be(a,n,o,t.__n,void 0!==a.ownerSVGElement,null!=n.__h?[i]:null,r,null==i?De(n):i,n.__h),Fe(r,n),n.__e!=i&&Te(n)))}))}function Me(e,t,r,o,n,i,a,l,s,d){var c,f,p,m,u,h,g,b=o&&o.__k||ye,v=b.length;for(r.__k=[],c=0;c<t.length;c++)if(null!=(m=r.__k[c]=null==(m=t[c])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?Ae(null,m,null,null,m):Array.isArray(m)?Ae(Ce,{children:m},null,null,null):m.__b>0?Ae(m.type,m.props,m.key,null,m.__v):m)){if(m.__=r,m.__b=r.__b+1,null===(p=b[c])||p&&m.key==p.key&&m.type===p.type)b[c]=void 0;else for(f=0;f<v;f++){if((p=b[f])&&m.key==p.key&&m.type===p.type){b[f]=void 0;break}p=null}Be(e,m,p=p||xe,n,i,a,l,s,d),u=m.__e,(f=m.ref)&&p.ref!=f&&(g||(g=[]),p.ref&&g.push(p.ref,null,m),g.push(f,m.__c||u,m)),null!=u?(null==h&&(h=u),"function"==typeof m.type&&null!=m.__k&&m.__k===p.__k?m.__d=s=Oe(m,s,e):s=ze(e,m,p,b,u,s),d||"option"!==r.type?"function"==typeof r.type&&(r.__d=s):e.value=""):s&&p.__e==s&&s.parentNode!=e&&(s=De(p))}for(r.__e=h,c=v;c--;)null!=b[c]&&("function"==typeof r.type&&null!=b[c].__e&&b[c].__e==r.__d&&(r.__d=De(o,c+1)),je(b[c],b[c]));if(g)for(c=0;c<g.length;c++)Ve(g[c],g[++c],g[++c])}function Oe(e,t,r){var o,n;for(o=0;o<e.__k.length;o++)(n=e.__k[o])&&(n.__=e,t="function"==typeof n.type?Oe(n,t,r):ze(r,n,n,e.__k,n.__e,t));return t}function ze(e,t,r,o,n,i){var a,l,s;if(void 0!==t.__d)a=t.__d,t.__d=void 0;else if(null==r||n!=i||null==n.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(n),a=null;else{for(l=i,s=0;(l=l.nextSibling)&&s<o.length;s+=2)if(l==n)break e;e.insertBefore(n,i),a=i}return void 0!==a?a:n.nextSibling}function Ne(e,t,r){"-"===t[0]?e.setProperty(t,r):e[t]=null==r?"":"number"!=typeof r||we.test(t)?r:r+"px"}function Pe(e,t,r,o,n){var i;e:if("style"===t)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)r&&t in r||Ne(e.style,t,"");if(r)for(t in r)o&&r[t]===o[t]||Ne(e.style,t,r[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?o||e.addEventListener(t,i?Le:He,i):e.removeEventListener(t,i?Le:He,i);else if("dangerouslySetInnerHTML"!==t){if(n)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==r?"":r;break e}catch(e){}"function"==typeof r||(null!=r&&(!1!==r||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,r):e.removeAttribute(t))}}function He(e){this.l[e.type+!1](ue.event?ue.event(e):e)}function Le(e){this.l[e.type+!0](ue.event?ue.event(e):e)}function Be(e,t,r,o,n,i,a,l,s){var d,c,f,p,m,u,h,g,b,v,x,y=t.type;if(void 0!==t.constructor)return null;null!=r.__h&&(s=r.__h,l=t.__e=r.__e,t.__h=null,i=[l]),(d=ue.__b)&&d(t);try{e:if("function"==typeof y){if(g=t.props,b=(d=y.contextType)&&o[d.__c],v=d?b?b.props.value:d.__:o,r.__c?h=(c=t.__c=r.__c).__=c.__E:("prototype"in y&&y.prototype.render?t.__c=c=new y(g,v):(t.__c=c=new Se(g,v),c.constructor=y,c.render=We),b&&b.sub(c),c.props=g,c.state||(c.state={}),c.context=v,c.__n=o,f=c.__d=!0,c.__h=[]),null==c.__s&&(c.__s=c.state),null!=y.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=ke({},c.__s)),ke(c.__s,y.getDerivedStateFromProps(g,c.__s))),p=c.props,m=c.state,f)null==y.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==y.getDerivedStateFromProps&&g!==p&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(g,v),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(g,c.__s,v)||t.__v===r.__v){c.props=g,c.state=c.__s,t.__v!==r.__v&&(c.__d=!1),c.__v=t,t.__e=r.__e,t.__k=r.__k,c.__h.length&&a.push(c);break e}null!=c.componentWillUpdate&&c.componentWillUpdate(g,c.__s,v),null!=c.componentDidUpdate&&c.__h.push((function(){c.componentDidUpdate(p,m,u)}))}c.context=v,c.props=g,c.state=c.__s,(d=ue.__r)&&d(t),c.__d=!1,c.__v=t,c.__P=e,d=c.render(c.props,c.state,c.context),c.state=c.__s,null!=c.getChildContext&&(o=ke(ke({},o),c.getChildContext())),f||null==c.getSnapshotBeforeUpdate||(u=c.getSnapshotBeforeUpdate(p,m)),x=null!=d&&d.type===Ce&&null==d.key?d.props.children:d,Me(e,Array.isArray(x)?x:[x],t,r,o,n,i,a,l,s),c.base=t.__e,t.__h=null,c.__h.length&&a.push(c),h&&(c.__E=c.__=null),c.__e=!1}else null==i&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Ue(r.__e,t,r,o,n,i,a,s);(d=ue.diffed)&&d(t)}catch(e){t.__v=null,(s||null!=i)&&(t.__e=l,t.__h=!!s,i[i.indexOf(l)]=null),ue.__e(e,t,r)}}function Fe(e,t){ue.__c&&ue.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){ue.__e(e,t.__v)}}))}function Ue(e,t,r,o,n,i,a,l){var s,d,c,f,p=r.props,m=t.props,u=t.type,h=0;if("svg"===u&&(n=!0),null!=i)for(;h<i.length;h++)if((s=i[h])&&(s===e||(u?s.localName==u:3==s.nodeType))){e=s,i[h]=null;break}if(null==e){if(null===u)return document.createTextNode(m);e=n?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,m.is&&m),i=null,l=!1}if(null===u)p===m||l&&e.data===m||(e.data=m);else{if(i=i&&ye.slice.call(e.childNodes),d=(p=r.props||xe).dangerouslySetInnerHTML,c=m.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(c||d)&&(c&&(d&&c.__html==d.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(function(e,t,r,o,n){var i;for(i in r)"children"===i||"key"===i||i in t||Pe(e,i,null,r[i],o);for(i in t)n&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||r[i]===t[i]||Pe(e,i,t[i],r[i],o)}(e,m,p,n,l),c)t.__k=[];else if(h=t.props.children,Me(e,Array.isArray(h)?h:[h],t,r,o,n&&"foreignObject"!==u,i,a,e.firstChild,l),null!=i)for(h=i.length;h--;)null!=i[h]&&_e(i[h]);l||("value"in m&&void 0!==(h=m.value)&&(h!==e.value||"progress"===u&&!h)&&Pe(e,"value",h,p.value,!1),"checked"in m&&void 0!==(h=m.checked)&&h!==e.checked&&Pe(e,"checked",h,p.checked,!1))}return e}function Ve(e,t,r){try{"function"==typeof e?e(t):e.current=t}catch(e){ue.__e(e,r)}}function je(e,t,r){var o,n,i;if(ue.unmount&&ue.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Ve(o,null,t)),r||"function"==typeof e.type||(r=null!=(n=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){ue.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&je(o[i],t,r);null!=n&&_e(n)}function We(e,t,r){return this.constructor(e,r)}function qe(e,t,r){var o,n,i;ue.__&&ue.__(e,t),n=(o="function"==typeof r)?null:r&&r.__k||t.__k,i=[],Be(t,e=(!o&&r||t).__k=Ee(Ce,null,[e]),n||xe,xe,void 0!==t.ownerSVGElement,!o&&r?[r]:n?null:t.firstChild?ye.slice.call(t.childNodes):null,i,!o&&r?r:n?n.__e:t.firstChild,o),Fe(i,e)}ue={__e:function(e,t){for(var r,o,n;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),n=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e),n=r.__d),n)return r.__E=r}catch(t){e=t}throw e},__v:0},Se.prototype.setState=function(e,t){var r;r=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=ke({},this.state),"function"==typeof e&&(e=e(ke({},r),this.props)),e&&ke(r,e),null!=e&&this.__v&&(t&&this.__h.push(t),Re(this))},Se.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Re(this))},Se.prototype.render=Ce,he=[],ge="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ie.__r=0,ve=0;var Ge="undefined"!=typeof globalThis?globalThis:window;Ge.FullCalendarVDom?console.warn("FullCalendar VDOM already loaded"):Ge.FullCalendarVDom={Component:Se,createElement:Ee,render:qe,createRef:function(){return{current:null}},Fragment:Ce,createContext:function(e){var t=function(e,t){var r={__c:t="__cC"+ve++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o;return this.getChildContext||(r=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&r.some(Re)},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return r.Provider.__=r.Consumer.contextType=r}(e),r=t.Provider;return t.Provider=function(){var e=this,t=!this.getChildContext,o=r.apply(this,arguments);if(t){var n=[];this.shouldComponentUpdate=function(t){e.props.value!==t.value&&n.forEach((function(e){e.context=t.value,e.forceUpdate()}))},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}}return o},t},flushToDom:function(){var e=ue.debounceRendering,t=[];function r(e){t.push(e)}ue.debounceRendering=r,qe(Ee(Ye,{}),document.createElement("div"));for(;t.length;)t.shift()();ue.debounceRendering=e},unmountComponentAtNode:function(e){qe(null,e)}};var Ye=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){return Ee("div",{})},t.prototype.componentDidMount=function(){this.setState({})},t}(Se);var $e=fe`
/* classes attached to <body> */

.fc-not-allowed,
.fc-not-allowed .fc-event { /* override events' custom cursors */
  cursor: not-allowed;
}

.fc-unselectable {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.fc {
  /* layout of immediate children */
  display: flex;
  flex-direction: column;

  font-size: 1em
}
.fc,
  .fc *,
  .fc *:before,
  .fc *:after {
    box-sizing: border-box;
  }
.fc table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1em; /* normalize cross-browser */
  }
.fc th {
    text-align: center;
  }
.fc th,
  .fc td {
    vertical-align: top;
    padding: 0;
  }
.fc a[data-navlink] {
    cursor: pointer;
  }
.fc a[data-navlink]:hover {
    text-decoration: underline;
  }
.fc-direction-ltr {
  direction: ltr;
  text-align: left;
}
.fc-direction-rtl {
  direction: rtl;
  text-align: right;
}
.fc-theme-standard td,
  .fc-theme-standard th {
    border: 1px solid #ddd;
    border: 1px solid var(--fc-border-color, #ddd);
  }
/* for FF, which doesn't expand a 100% div within a table cell. use absolute positioning */
/* inner-wrappers are responsible for being absolute */
/* TODO: best place for this? */
.fc-liquid-hack td,
  .fc-liquid-hack th {
    position: relative;
  }

@font-face {
  font-family: 'fcicons';
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format('truetype');
  font-weight: normal;
  font-style: normal;
}

.fc-icon {
  /* added for fc */
  display: inline-block;
  width: 1em;
  height: 1em;
  text-align: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;

  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'fcicons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fc-icon-chevron-left:before {
  content: "\\e900";
}

.fc-icon-chevron-right:before {
  content: "\\e901";
}

.fc-icon-chevrons-left:before {
  content: "\\e902";
}

.fc-icon-chevrons-right:before {
  content: "\\e903";
}

.fc-icon-minus-square:before {
  content: "\\e904";
}

.fc-icon-plus-square:before {
  content: "\\e905";
}

.fc-icon-x:before {
  content: "\\e906";
}
/*
Lots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css

These styles only apply when the standard-theme is activated.
When it's NOT activated, the fc-button classes won't even be in the DOM.
*/
.fc {

  /* reset */

}
.fc .fc-button {
    border-radius: 0;
    overflow: visible;
    text-transform: none;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
.fc .fc-button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
.fc .fc-button {
    -webkit-appearance: button;
  }
.fc .fc-button:not(:disabled) {
    cursor: pointer;
  }
.fc .fc-button::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
.fc {

  /* theme */

}
.fc .fc-button {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.4em 0.65em;
    font-size: 1em;
    line-height: 1.5;
    border-radius: 0.25em;
  }
.fc .fc-button:hover {
    text-decoration: none;
  }
.fc .fc-button:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);
  }
.fc .fc-button:disabled {
    opacity: 0.65;
  }
.fc {

  /* "primary" coloring */

}
.fc .fc-button-primary {
    color: #fff;
    color: var(--fc-button-text-color, #fff);
    background-color: #2C3E50;
    background-color: var(--fc-button-bg-color, #2C3E50);
    border-color: #2C3E50;
    border-color: var(--fc-button-border-color, #2C3E50);
  }
.fc .fc-button-primary:hover {
    color: #fff;
    color: var(--fc-button-text-color, #fff);
    background-color: #1e2b37;
    background-color: var(--fc-button-hover-bg-color, #1e2b37);
    border-color: #1a252f;
    border-color: var(--fc-button-hover-border-color, #1a252f);
  }
.fc .fc-button-primary:disabled { /* not DRY */
    color: #fff;
    color: var(--fc-button-text-color, #fff);
    background-color: #2C3E50;
    background-color: var(--fc-button-bg-color, #2C3E50);
    border-color: #2C3E50;
    border-color: var(--fc-button-border-color, #2C3E50); /* overrides :hover */
  }
.fc .fc-button-primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);
  }
.fc .fc-button-primary:not(:disabled):active,
  .fc .fc-button-primary:not(:disabled).fc-button-active {
    color: #fff;
    color: var(--fc-button-text-color, #fff);
    background-color: #1a252f;
    background-color: var(--fc-button-active-bg-color, #1a252f);
    border-color: #151e27;
    border-color: var(--fc-button-active-border-color, #151e27);
  }
.fc .fc-button-primary:not(:disabled):active:focus,
  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);
  }
.fc {

  /* icons within buttons */

}
.fc .fc-button .fc-icon {
    vertical-align: middle;
    font-size: 1.5em; /* bump up the size (but don't make it bigger than line-height of button, which is 1.5em also) */
  }
.fc .fc-button-group {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }
.fc .fc-button-group > .fc-button {
    position: relative;
    flex: 1 1 auto;
  }
.fc .fc-button-group > .fc-button:hover {
    z-index: 1;
  }
.fc .fc-button-group > .fc-button:focus,
  .fc .fc-button-group > .fc-button:active,
  .fc .fc-button-group > .fc-button.fc-button-active {
    z-index: 1;
  }
.fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
.fc-direction-rtl .fc-button-group > .fc-button:not(:first-child) {
    margin-right: -1px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
.fc-direction-rtl .fc-button-group > .fc-button:not(:last-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
.fc .fc-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 1.5em;
  }
.fc .fc-toolbar.fc-footer-toolbar {
    margin-top: 1.5em;
  }
.fc .fc-toolbar-title {
    font-size: 1.75em;
    margin: 0;
  }
.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
    margin-left: .75em; /* space between */
  }
.fc-direction-rtl .fc-toolbar > * > :not(:first-child) {
    margin-right: .75em; /* space between */
  }
.fc-direction-rtl .fc-toolbar-ltr { /* when the toolbar-chunk positioning system is explicitly left-to-right */
    flex-direction: row-reverse;
  }
.fc .fc-scroller {
    -webkit-overflow-scrolling: touch;
    position: relative; /* for abs-positioned elements within */
  }
.fc .fc-scroller-liquid {
    height: 100%;
  }
.fc .fc-scroller-liquid-absolute {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
.fc .fc-scroller-harness {
    position: relative;
    overflow: hidden;
    direction: ltr;
      /* hack for chrome computing the scroller's right/left wrong for rtl. undone below... */
      /* TODO: demonstrate in codepen */
  }
.fc .fc-scroller-harness-liquid {
    height: 100%;
  }
.fc-direction-rtl .fc-scroller-harness > .fc-scroller { /* undo above hack */
    direction: rtl;
  }
.fc-theme-standard .fc-scrollgrid {
    border: 1px solid #ddd;
    border: 1px solid var(--fc-border-color, #ddd); /* bootstrap does this. match */
  }
.fc .fc-scrollgrid,
    .fc .fc-scrollgrid table { /* all tables (self included) */
      width: 100%; /* because tables don't normally do this */
      table-layout: fixed;
    }
.fc .fc-scrollgrid table { /* inner tables */
      border-top-style: hidden;
      border-left-style: hidden;
      border-right-style: hidden;
    }
.fc .fc-scrollgrid {

    border-collapse: separate;
    border-right-width: 0;
    border-bottom-width: 0;

  }
.fc .fc-scrollgrid-liquid {
    height: 100%;
  }
.fc .fc-scrollgrid-section { /* a <tr> */
    height: 1px /* better than 0, for firefox */

  }
.fc .fc-scrollgrid-section > td {
      height: 1px; /* needs a height so inner div within grow. better than 0, for firefox */
    }
.fc .fc-scrollgrid-section table {
      height: 1px;
        /* for most browsers, if a height isn't set on the table, can't do liquid-height within cells */
        /* serves as a min-height. harmless */
    }
.fc .fc-scrollgrid-section-liquid {
    height: auto

  }
.fc .fc-scrollgrid-section-liquid > td {
      height: 100%; /* better than \`auto\`, for firefox */
    }
.fc .fc-scrollgrid-section > * {
    border-top-width: 0;
    border-left-width: 0;
  }
.fc .fc-scrollgrid-section-header > *,
  .fc .fc-scrollgrid-section-footer > * {
    border-bottom-width: 0;
  }
.fc .fc-scrollgrid-section-body table,
  .fc .fc-scrollgrid-section-footer table {
    border-bottom-style: hidden; /* head keeps its bottom border tho */
  }
.fc {

  /* stickiness */

}
.fc .fc-scrollgrid-section-sticky > * {
    background: #fff;
    background: var(--fc-page-bg-color, #fff);
    position: -webkit-sticky;
    position: sticky;
    z-index: 2; /* TODO: var */
    /* TODO: box-shadow when sticking */
  }
.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky > * {
    top: 0; /* because border-sharing causes a gap at the top */
      /* TODO: give safari -1. has bug */
  }
.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky > * {
    bottom: 0; /* known bug: bottom-stickiness doesn't work in safari */
  }
.fc .fc-scrollgrid-sticky-shim { /* for horizontal scrollbar */
    height: 1px; /* needs height to create scrollbars */
    margin-bottom: -1px;
  }
.fc-sticky { /* no .fc wrap because used as child of body */
  position: -webkit-sticky;
  position: sticky;
}
.fc .fc-view-harness {
    flex-grow: 1; /* because this harness is WITHIN the .fc's flexbox */
    position: relative;
  }
.fc {

  /* when the harness controls the height, make the view liquid */

}
.fc .fc-view-harness-active > .fc-view {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
.fc .fc-col-header-cell-cushion {
    display: inline-block; /* x-browser for when sticky (when multi-tier header) */
    padding: 2px 4px;
  }
.fc .fc-bg-event,
  .fc .fc-non-business,
  .fc .fc-highlight {
    /* will always have a harness with position:relative/absolute, so absolutely expand */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
.fc .fc-non-business {
    background: rgba(215, 215, 215, 0.3);
    background: var(--fc-non-business-color, rgba(215, 215, 215, 0.3));
  }
.fc .fc-bg-event {
    background: rgb(143, 223, 130);
    background: var(--fc-bg-event-color, rgb(143, 223, 130));
    opacity: 0.3;
    opacity: var(--fc-bg-event-opacity, 0.3)
  }
.fc .fc-bg-event .fc-event-title {
      margin: .5em;
      font-size: .85em;
      font-size: var(--fc-small-font-size, .85em);
      font-style: italic;
    }
.fc .fc-highlight {
    background: rgba(188, 232, 241, 0.3);
    background: var(--fc-highlight-color, rgba(188, 232, 241, 0.3));
  }
.fc .fc-cell-shaded,
  .fc .fc-day-disabled {
    background: rgba(208, 208, 208, 0.3);
    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));
  }
/* link resets */
/* ---------------------------------------------------------------------------------------------------- */
a.fc-event,
a.fc-event:hover {
  text-decoration: none;
}
/* cursor */
.fc-event[href],
.fc-event.fc-event-draggable {
  cursor: pointer;
}
/* event text content */
/* ---------------------------------------------------------------------------------------------------- */
.fc-event .fc-event-main {
    position: relative;
    z-index: 2;
  }
/* dragging */
/* ---------------------------------------------------------------------------------------------------- */
.fc-event-dragging:not(.fc-event-selected) { /* MOUSE */
    opacity: 0.75;
  }
.fc-event-dragging.fc-event-selected { /* TOUCH */
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  }
/* resizing */
/* ---------------------------------------------------------------------------------------------------- */
/* (subclasses should hone positioning for touch and non-touch) */
.fc-event .fc-event-resizer {
    display: none;
    position: absolute;
    z-index: 4;
  }
.fc-event:hover, /* MOUSE */
.fc-event-selected { /* TOUCH */

}
.fc-event:hover .fc-event-resizer, .fc-event-selected .fc-event-resizer {
    display: block;
  }
.fc-event-selected .fc-event-resizer {
    border-radius: 4px;
    border-radius: calc(var(--fc-event-resizer-dot-total-width, 8px) / 2);
    border-width: 1px;
    border-width: var(--fc-event-resizer-dot-border-width, 1px);
    width: 8px;
    width: var(--fc-event-resizer-dot-total-width, 8px);
    height: 8px;
    height: var(--fc-event-resizer-dot-total-width, 8px);
    border-style: solid;
    border-color: inherit;
    background: #fff;
    background: var(--fc-page-bg-color, #fff)

    /* expand hit area */

  }
.fc-event-selected .fc-event-resizer:before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
    }
/* selecting (always TOUCH) */
/* ---------------------------------------------------------------------------------------------------- */
.fc-event-selected {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)

  /* expand hit area (subclasses should expand) */

}
.fc-event-selected:before {
    content: "";
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
.fc-event-selected {

  /* dimmer effect */

}
.fc-event-selected:after {
    content: "";
    background: rgba(0, 0, 0, 0.25);
    background: var(--fc-event-selected-overlay-color, rgba(0, 0, 0, 0.25));
    position: absolute;
    z-index: 1;

    /* assume there's a border on all sides. overcome it. */
    /* sometimes there's NOT a border, in which case the dimmer will go over */
    /* an adjacent border, which looks fine. */
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
  }
/*
A HORIZONTAL event
*/
.fc-h-event { /* allowed to be top-level */
  display: block;
  border: 1px solid #3788d8;
  border: 1px solid var(--fc-event-border-color, #3788d8);
  background-color: #3788d8;
  background-color: var(--fc-event-bg-color, #3788d8)

}
.fc-h-event .fc-event-main {
    color: #fff;
    color: var(--fc-event-text-color, #fff);
  }
.fc-h-event .fc-event-main-frame {
    display: flex; /* for make fc-event-title-container expand */
  }
.fc-h-event .fc-event-time {
    max-width: 100%; /* clip overflow on this element */
    overflow: hidden;
  }
.fc-h-event .fc-event-title-container { /* serves as a container for the sticky cushion */
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0; /* important for allowing to shrink all the way */
  }
.fc-h-event .fc-event-title {
    display: inline-block; /* need this to be sticky cross-browser */
    vertical-align: top; /* for not messing up line-height */
    left: 0;  /* for sticky */
    right: 0; /* for sticky */
    max-width: 100%; /* clip overflow on this element */
    overflow: hidden;
  }
.fc-h-event.fc-event-selected:before {
    /* expand hit area */
    top: -10px;
    bottom: -10px;
  }
/* adjust border and border-radius (if there is any) for non-start/end */
.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),
.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-width: 0;
}
.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),
.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
}
/* resizers */
.fc-h-event:not(.fc-event-selected) .fc-event-resizer {
  top: 0;
  bottom: 0;
  width: 8px;
  width: var(--fc-event-resizer-thickness, 8px);
}
.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,
.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end {
  cursor: w-resize;
  left: -4px;
  left: calc(var(--fc-event-resizer-thickness, 8px) / -2);
}
.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,
.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start {
  cursor: e-resize;
  right: -4px;
  right: calc(var(--fc-event-resizer-thickness, 8px) / -2);
}
/* resizers for TOUCH */
.fc-h-event.fc-event-selected .fc-event-resizer {
  top: 50%;
  margin-top: -4px;
  margin-top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);
}
.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,
.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end {
  left: -4px;
  left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);
}
.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,
.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start {
  right: -4px;
  right: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);
}
`;if("undefined"==typeof FullCalendarVDom)throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");var Qe=FullCalendarVDom.Component,Xe=FullCalendarVDom.createElement,Ze=FullCalendarVDom.render,Je=FullCalendarVDom.createRef,Ke=FullCalendarVDom.Fragment,et=FullCalendarVDom.createContext,tt=FullCalendarVDom.flushToDom,rt=FullCalendarVDom.unmountComponentAtNode,ot=function(){function e(e,t){this.context=e,this.internalEventSource=t}return e.prototype.remove=function(){this.context.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},e.prototype.refetch=function(){this.context.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId]})},Object.defineProperty(e.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"format",{get:function(){return this.internalEventSource.meta.format},enumerable:!1,configurable:!0}),e}();function nt(e){e.parentNode&&e.parentNode.removeChild(e)}function it(e,t){if(e.closest)return e.closest(t);if(!document.documentElement.contains(e))return null;do{if(at(e,t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}function at(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector).call(e,t)}var lt=/(top|left|right|bottom|width|height)$/i;function st(e,t){for(var r in t)dt(e,r,t[r])}function dt(e,t,r){null==r?e.style[t]="":"number"==typeof r&&lt.test(t)?e.style[t]=r+"px":e.style[t]=r}function ct(e){e.preventDefault()}function ft(e,t){return function(r){var o=it(r.target,e);o&&t.call(o,r,o)}}function pt(e,t,r,o){var n=ft(r,o);return e.addEventListener(t,n),function(){e.removeEventListener(t,n)}}var mt=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"];var ut=0;function ht(){return String(ut+=1)}function gt(){document.body.classList.add("fc-not-allowed")}function bt(){document.body.classList.remove("fc-not-allowed")}function vt(e,t,r){var o,n;for(o=0;o<r.length;o+=1)if(n=xt(e,t,r[o]))return n;return 0}function xt(e,t,r){return r.func?r.func(e,t):function(e,t){if(!e&&!t)return 0;if(null==t)return-1;if(null==e)return 1;if("string"==typeof e||"string"==typeof t)return String(e).localeCompare(String(t));return e-t}(e[r.field],t[r.field])*(r.order||1)}function yt(e,t){var r=String(e);return"000".substr(0,t-r.length)+r}function wt(e,t){return e-t}function kt(e){return e%1==0}function _t(e){var t=e.querySelector(".fc-scrollgrid-shrink-frame"),r=e.querySelector(".fc-scrollgrid-shrink-cushion");if(!t)throw new Error("needs fc-scrollgrid-shrink-frame className");if(!r)throw new Error("needs fc-scrollgrid-shrink-cushion className");return e.getBoundingClientRect().width-t.getBoundingClientRect().width+r.getBoundingClientRect().width}var Et=["sun","mon","tue","wed","thu","fri","sat"];function At(e,t){var r=Nt(e);return r[2]+=7*t,Pt(r)}function Ct(e,t){var r=Nt(e);return r[2]+=t,Pt(r)}function St(e,t){var r=Nt(e);return r[6]+=t,Pt(r)}function Dt(e,t){return(t.valueOf()-e.valueOf())/864e5}function Tt(e,t){return Lt(e)===Lt(t)?Math.round(Dt(e,t)):null}function Rt(e){return Pt([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function It(e,t,r,o){var n=Pt([t,0,1+Mt(t,r,o)]),i=Rt(e),a=Math.round(Dt(n,i));return Math.floor(a/7)+1}function Mt(e,t,r){var o=7+t-r;return-((7+Pt([e,0,o]).getUTCDay()-t)%7)+o-1}function Ot(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function zt(e){return new Date(e[0],e[1]||0,null==e[2]?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function Nt(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function Pt(e){return 1===e.length&&(e=e.concat([0])),new Date(Date.UTC.apply(Date,e))}function Ht(e){return!isNaN(e.valueOf())}function Lt(e){return 1e3*e.getUTCHours()*60*60+1e3*e.getUTCMinutes()*60+1e3*e.getUTCSeconds()+e.getUTCMilliseconds()}function Bt(e,t,r,o){return{instanceId:ht(),defId:e,range:t,forcedStartTzo:null==r?null:r,forcedEndTzo:null==o?null:o}}var Ft=Object.prototype.hasOwnProperty;function Ut(e,t){var r={};if(t)for(var o in t){for(var n=[],i=e.length-1;i>=0;i-=1){var a=e[i][o];if("object"==typeof a&&a)n.unshift(a);else if(void 0!==a){r[o]=a;break}}n.length&&(r[o]=Ut(n))}for(i=e.length-1;i>=0;i-=1){var l=e[i];for(var s in l)s in r||(r[s]=l[s])}return r}function Vt(e,t){var r={};for(var o in e)t(e[o],o)&&(r[o]=e[o]);return r}function jt(e,t){var r={};for(var o in e)r[o]=t(e[o],o);return r}function Wt(e){for(var t={},r=0,o=e;r<o.length;r++){t[o[r]]=!0}return t}function qt(e){var t=[];for(var r in e)t.push(e[r]);return t}function Gt(e,t){if(e===t)return!0;for(var r in e)if(Ft.call(e,r)&&!(r in t))return!1;for(var r in t)if(Ft.call(t,r)&&e[r]!==t[r])return!1;return!0}function Yt(e,t){var r=[];for(var o in e)Ft.call(e,o)&&(o in t||r.push(o));for(var o in t)Ft.call(t,o)&&e[o]!==t[o]&&r.push(o);return r}function $t(e,t,r){if(void 0===r&&(r={}),e===t)return!0;for(var o in t)if(!(o in e)||!Qt(e[o],t[o],r[o]))return!1;for(var o in e)if(!(o in t))return!1;return!0}function Qt(e,t,r){return e===t||!0===r||!!r&&r(e,t)}function Xt(e,t,r){var o=r.dateEnv,n=r.pluginHooks,i=r.options,a=e.defs,l=e.instances;for(var s in l=Vt(l,(function(e){return!a[e.defId].recurringDef})),a){var d=a[s];if(d.recurringDef){var c=d.recurringDef.duration;c||(c=d.allDay?i.defaultAllDayEventDuration:i.defaultTimedEventDuration);for(var f=0,p=Zt(d,c,t,o,n.recurringTypes);f<p.length;f++){var m=p[f],u=Bt(s,{start:m,end:o.add(m,c)});l[u.instanceId]=u}}}return{defs:a,instances:l}}function Zt(e,t,r,o,n){var i=n[e.recurringDef.typeId].expand(e.recurringDef.typeData,{start:o.subtract(r.start,t),end:r.end},o);return e.allDay&&(i=i.map(Rt)),i}var Jt=["years","months","days","milliseconds"],Kt=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;function er(e,t){var r;return"string"==typeof e?function(e){var t=Kt.exec(e);if(t){var r=t[1]?-1:1;return{years:0,months:0,days:r*(t[2]?parseInt(t[2],10):0),milliseconds:r*(60*(t[3]?parseInt(t[3],10):0)*60*1e3+60*(t[4]?parseInt(t[4],10):0)*1e3+1e3*(t[5]?parseInt(t[5],10):0)+(t[6]?parseInt(t[6],10):0))}}return null}(e):"object"==typeof e&&e?tr(e):"number"==typeof e?tr(((r={})[t||"milliseconds"]=e,r)):null}function tr(e){var t={years:e.years||e.year||0,months:e.months||e.month||0,days:e.days||e.day||0,milliseconds:60*(e.hours||e.hour||0)*60*1e3+60*(e.minutes||e.minute||0)*1e3+1e3*(e.seconds||e.second||0)+(e.milliseconds||e.millisecond||e.ms||0)},r=e.weeks||e.week;return r&&(t.days+=7*r,t.specifiedWeeks=!0),t}function rr(e,t){return{years:e.years+t.years,months:e.months+t.months,days:e.days+t.days,milliseconds:e.milliseconds+t.milliseconds}}function or(e){return nr(e)/864e5}function nr(e){return 31536e6*e.years+2592e6*e.months+864e5*e.days+e.milliseconds}function ir(e,t){for(var r=null,o=0;o<Jt.length;o+=1){var n=Jt[o];if(t[n]){var i=e[n]/t[n];if(!kt(i)||null!==r&&r!==i)return null;r=i}else if(e[n])return null}return r}function ar(e){var t=e.milliseconds;if(t){if(t%1e3!=0)return{unit:"millisecond",value:t};if(t%6e4!=0)return{unit:"second",value:t/1e3};if(t%36e5!=0)return{unit:"minute",value:t/6e4};if(t)return{unit:"hour",value:t/36e5}}return e.days?e.specifiedWeeks&&e.days%7==0?{unit:"week",value:e.days/7}:{unit:"day",value:e.days}:e.months?{unit:"month",value:e.months}:e.years?{unit:"year",value:e.years}:{unit:"millisecond",value:0}}function lr(e){return e.toISOString().replace(/T.*$/,"")}function sr(e){return yt(e.getUTCHours(),2)+":"+yt(e.getUTCMinutes(),2)+":"+yt(e.getUTCSeconds(),2)}function dr(e,t){void 0===t&&(t=!1);var r=e<0?"-":"+",o=Math.abs(e),n=Math.floor(o/60),i=Math.round(o%60);return t?r+yt(n,2)+":"+yt(i,2):"GMT"+r+n+(i?":"+yt(i,2):"")}function cr(e,t,r){if(e===t)return!0;var o,n=e.length;if(n!==t.length)return!1;for(o=0;o<n;o+=1)if(!(r?r(e[o],t[o]):e[o]===t[o]))return!1;return!0}function fr(e,t,r){var o,n;return function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(o){if(!cr(o,i)){r&&r(n);var l=e.apply(this,i);t&&t(l,n)||(n=l)}}else n=e.apply(this,i);return o=i,n}}function pr(e,t,r){var o,n,i=this;return function(a){if(o){if(!Gt(o,a)){r&&r(n);var l=e.call(i,a);t&&t(l,n)||(n=l)}}else n=e.call(i,a);return o=a,n}}var mr={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},ur={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},hr=/\s*([ap])\.?m\.?/i,gr=/,/g,br=/\s+/g,vr=/\u200e/g,xr=/UTC|GMT/,yr=function(){function e(e){var t={},r={},o=0;for(var n in e)n in mr?(r[n]=e[n],o=Math.max(mr[n],o)):(t[n]=e[n],n in ur&&(o=Math.max(ur[n],o)));this.standardDateProps=t,this.extendedSettings=r,this.severity=o,this.buildFormattingFunc=fr(wr)}return e.prototype.format=function(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)},e.prototype.formatRange=function(e,t,r,o){var n=this.standardDateProps,i=this.extendedSettings,a=function(e,t,r){if(r.getMarkerYear(e)!==r.getMarkerYear(t))return 5;if(r.getMarkerMonth(e)!==r.getMarkerMonth(t))return 4;if(r.getMarkerDay(e)!==r.getMarkerDay(t))return 2;if(Lt(e)!==Lt(t))return 1;return 0}(e.marker,t.marker,r.calendarSystem);if(!a)return this.format(e,r);var l=a;!(l>1)||"numeric"!==n.year&&"2-digit"!==n.year||"numeric"!==n.month&&"2-digit"!==n.month||"numeric"!==n.day&&"2-digit"!==n.day||(l=1);var s=this.format(e,r),d=this.format(t,r);if(s===d)return s;var c=wr(function(e,t){var r={};for(var o in e)(!(o in ur)||ur[o]<=t)&&(r[o]=e[o]);return r}(n,l),i,r),f=c(e),p=c(t),m=function(e,t,r,o){var n=0;for(;n<e.length;){var i=e.indexOf(t,n);if(-1===i)break;var a=e.substr(0,i);n=i+t.length;for(var l=e.substr(n),s=0;s<r.length;){var d=r.indexOf(o,s);if(-1===d)break;var c=r.substr(0,d);s=d+o.length;var f=r.substr(s);if(a===c&&l===f)return{before:a,after:l}}}return null}(s,f,d,p),u=i.separator||o||r.defaultSeparator||"";return m?m.before+f+u+p+m.after:s+u+d},e.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year";case 4:return"month";case 3:return"week";case 2:return"day";default:return"time"}},e}();function wr(e,t,r){var o=Object.keys(e).length;return 1===o&&"short"===e.timeZoneName?function(e){return dr(e.timeZoneOffset)}:0===o&&t.week?function(e){return function(e,t,r,o){var n=[];"narrow"===o?n.push(t):"short"===o&&n.push(t," ");n.push(r.simpleNumberFormat.format(e)),"rtl"===r.options.direction&&n.reverse();return n.join("")}(r.computeWeekNumber(e.marker),r.weekText,r.locale,t.week)}:function(e,t,r){e=L({},e),t=L({},t),function(e,t){e.timeZoneName&&(e.hour||(e.hour="2-digit"),e.minute||(e.minute="2-digit"));"long"===e.timeZoneName&&(e.timeZoneName="short");t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}(e,t),e.timeZone="UTC";var o,n=new Intl.DateTimeFormat(r.locale.codes,e);if(t.omitZeroMinute){var i=L({},e);delete i.minute,o=new Intl.DateTimeFormat(r.locale.codes,i)}return function(i){var a=i.marker;return function(e,t,r,o,n){e=e.replace(vr,""),"short"===r.timeZoneName&&(e=function(e,t){var r=!1;e=e.replace(xr,(function(){return r=!0,t})),r||(e+=" "+t);return e}(e,"UTC"===n.timeZone||null==t.timeZoneOffset?"UTC":dr(t.timeZoneOffset)));o.omitCommas&&(e=e.replace(gr,"").trim());o.omitZeroMinute&&(e=e.replace(":00",""));!1===o.meridiem?e=e.replace(hr,"").trim():"narrow"===o.meridiem?e=e.replace(hr,(function(e,t){return t.toLocaleLowerCase()})):"short"===o.meridiem?e=e.replace(hr,(function(e,t){return t.toLocaleLowerCase()+"m"})):"lowercase"===o.meridiem&&(e=e.replace(hr,(function(e){return e.toLocaleLowerCase()})));return e=(e=e.replace(br," ")).trim()}((o&&!a.getUTCMinutes()?o:n).format(a),i,e,t,r)}}(e,t,r)}function kr(e,t){var r=t.markerToArray(e.marker);return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:r,year:r[0],month:r[1],day:r[2],hour:r[3],minute:r[4],second:r[5],millisecond:r[6]}}function _r(e,t,r,o){var n=kr(e,r.calendarSystem);return{date:n,start:n,end:t?kr(t,r.calendarSystem):null,timeZone:r.timeZone,localeCodes:r.locale.codes,defaultSeparator:o||r.defaultSeparator}}var Er=function(){function e(e){this.cmdStr=e}return e.prototype.format=function(e,t,r){return t.cmdFormatter(this.cmdStr,_r(e,null,t,r))},e.prototype.formatRange=function(e,t,r,o){return r.cmdFormatter(this.cmdStr,_r(e,t,r,o))},e}(),Ar=function(){function e(e){this.func=e}return e.prototype.format=function(e,t,r){return this.func(_r(e,null,t,r))},e.prototype.formatRange=function(e,t,r,o){return this.func(_r(e,t,r,o))},e}();function Cr(e){return"object"==typeof e&&e?new yr(e):"string"==typeof e?new Er(e):"function"==typeof e?new Ar(e):null}var Sr={navLinkDayClick:Pr,navLinkWeekClick:Pr,duration:er,bootstrapFontAwesome:Pr,buttonIcons:Pr,customButtons:Pr,defaultAllDayEventDuration:er,defaultTimedEventDuration:er,nextDayThreshold:er,scrollTime:er,slotMinTime:er,slotMaxTime:er,dayPopoverFormat:Cr,slotDuration:er,snapDuration:er,headerToolbar:Pr,footerToolbar:Pr,defaultRangeSeparator:String,titleRangeSeparator:String,forceEventDuration:Boolean,dayHeaders:Boolean,dayHeaderFormat:Cr,dayHeaderClassNames:Pr,dayHeaderContent:Pr,dayHeaderDidMount:Pr,dayHeaderWillUnmount:Pr,dayCellClassNames:Pr,dayCellContent:Pr,dayCellDidMount:Pr,dayCellWillUnmount:Pr,initialView:String,aspectRatio:Number,weekends:Boolean,weekNumberCalculation:Pr,weekNumbers:Boolean,weekNumberClassNames:Pr,weekNumberContent:Pr,weekNumberDidMount:Pr,weekNumberWillUnmount:Pr,editable:Boolean,viewClassNames:Pr,viewDidMount:Pr,viewWillUnmount:Pr,nowIndicator:Boolean,nowIndicatorClassNames:Pr,nowIndicatorContent:Pr,nowIndicatorDidMount:Pr,nowIndicatorWillUnmount:Pr,showNonCurrentDates:Boolean,lazyFetching:Boolean,startParam:String,endParam:String,timeZoneParam:String,timeZone:String,locales:Pr,locale:Pr,themeSystem:String,dragRevertDuration:Number,dragScroll:Boolean,allDayMaintainDuration:Boolean,unselectAuto:Boolean,dropAccept:Pr,eventOrder:function(e){var t,r,o=[],n=[];for("string"==typeof e?n=e.split(/\s*,\s*/):"function"==typeof e?n=[e]:Array.isArray(e)&&(n=e),t=0;t<n.length;t+=1)"string"==typeof(r=n[t])?o.push("-"===r.charAt(0)?{field:r.substring(1),order:-1}:{field:r,order:1}):"function"==typeof r&&o.push({func:r});return o},handleWindowResize:Boolean,windowResizeDelay:Number,longPressDelay:Number,eventDragMinDistance:Number,expandRows:Boolean,height:Pr,contentHeight:Pr,direction:String,weekNumberFormat:Cr,eventResizableFromStart:Boolean,displayEventTime:Boolean,displayEventEnd:Boolean,weekText:String,progressiveEventRendering:Boolean,businessHours:Pr,initialDate:Pr,now:Pr,eventDataTransform:Pr,stickyHeaderDates:Pr,stickyFooterScrollbar:Pr,viewHeight:Pr,defaultAllDay:Boolean,eventSourceFailure:Pr,eventSourceSuccess:Pr,eventDisplay:String,eventStartEditable:Boolean,eventDurationEditable:Boolean,eventOverlap:Pr,eventConstraint:Pr,eventAllow:Pr,eventBackgroundColor:String,eventBorderColor:String,eventTextColor:String,eventColor:String,eventClassNames:Pr,eventContent:Pr,eventDidMount:Pr,eventWillUnmount:Pr,selectConstraint:Pr,selectOverlap:Pr,selectAllow:Pr,droppable:Boolean,unselectCancel:String,slotLabelFormat:Pr,slotLaneClassNames:Pr,slotLaneContent:Pr,slotLaneDidMount:Pr,slotLaneWillUnmount:Pr,slotLabelClassNames:Pr,slotLabelContent:Pr,slotLabelDidMount:Pr,slotLabelWillUnmount:Pr,dayMaxEvents:Pr,dayMaxEventRows:Pr,dayMinWidth:Number,slotLabelInterval:er,allDayText:String,allDayClassNames:Pr,allDayContent:Pr,allDayDidMount:Pr,allDayWillUnmount:Pr,slotMinWidth:Number,navLinks:Boolean,eventTimeFormat:Cr,rerenderDelay:Number,moreLinkText:Pr,selectMinDistance:Number,selectable:Boolean,selectLongPressDelay:Number,eventLongPressDelay:Number,selectMirror:Boolean,eventMinHeight:Number,slotEventOverlap:Boolean,plugins:Pr,firstDay:Number,dayCount:Number,dateAlignment:String,dateIncrement:er,hiddenDays:Pr,monthMode:Boolean,fixedWeekCount:Boolean,validRange:Pr,visibleRange:Pr,titleFormat:Pr,noEventsText:String},Dr={eventDisplay:"auto",defaultRangeSeparator:" - ",titleRangeSeparator:" – ",defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",dayHeaders:!0,initialView:"",aspectRatio:1.35,headerToolbar:{start:"title",center:"",end:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,nowIndicator:!1,scrollTime:"06:00:00",slotMinTime:"00:00:00",slotMaxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",locales:[],locale:"",themeSystem:"standard",dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5,expandRows:!1,navLinks:!1,selectable:!1},Tr={datesSet:Pr,eventsSet:Pr,eventAdd:Pr,eventChange:Pr,eventRemove:Pr,windowResize:Pr,eventClick:Pr,eventMouseEnter:Pr,eventMouseLeave:Pr,select:Pr,unselect:Pr,loading:Pr,_unmount:Pr,_beforeprint:Pr,_afterprint:Pr,_noEventDrop:Pr,_noEventResize:Pr,_resize:Pr,_scrollRequest:Pr},Rr={buttonText:Pr,views:Pr,plugins:Pr,initialEvents:Pr,events:Pr,eventSources:Pr},Ir={headerToolbar:Mr,footerToolbar:Mr,buttonText:Mr,buttonIcons:Mr};function Mr(e,t){return"object"==typeof e&&"object"==typeof t&&e&&t?Gt(e,t):e===t}var Or={type:String,component:Pr,buttonText:String,buttonTextKey:String,dateProfileGeneratorClass:Pr,usesMinMaxTime:Boolean,classNames:Pr,content:Pr,didMount:Pr,willUnmount:Pr};function zr(e){return Ut(e,Ir)}function Nr(e,t){var r={},o={};for(var n in t)n in e&&(r[n]=t[n](e[n]));for(var n in e)n in t||(o[n]=e[n]);return{refined:r,extra:o}}function Pr(e){return e}function Hr(e,t,r,o){for(var n={defs:{},instances:{}},i=Kr(r),a=0,l=e;a<l.length;a++){var s=Zr(l[a],t,r,o,i);s&&Lr(s,n)}return n}function Lr(e,t){return void 0===t&&(t={defs:{},instances:{}}),t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function Br(e,t){var r=e.instances[t];if(r){var o=e.defs[r.defId],n=Ur(e,(function(e){return t=o,r=e,Boolean(t.groupId&&t.groupId===r.groupId);var t,r}));return n.defs[o.defId]=o,n.instances[r.instanceId]=r,n}return{defs:{},instances:{}}}function Fr(e,t){return{defs:L(L({},e.defs),t.defs),instances:L(L({},e.instances),t.instances)}}function Ur(e,t){var r=Vt(e.defs,t),o=Vt(e.instances,(function(e){return r[e.defId]}));return{defs:r,instances:o}}function Vr(e){return Array.isArray(e)?e:"string"==typeof e?e.split(/\s+/):[]}var jr={display:String,editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:Pr,overlap:Pr,allow:Pr,className:Vr,classNames:Vr,color:String,backgroundColor:String,borderColor:String,textColor:String},Wr={display:null,startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]};function qr(e,t){var r=function(e,t){return Array.isArray(e)?Hr(e,null,t,!0):"object"==typeof e&&e?Hr([e],null,t,!0):null!=e?String(e):null}(e.constraint,t);return{display:e.display||null,startEditable:null!=e.startEditable?e.startEditable:e.editable,durationEditable:null!=e.durationEditable?e.durationEditable:e.editable,constraints:null!=r?[r]:[],overlap:null!=e.overlap?e.overlap:null,allows:null!=e.allow?[e.allow]:[],backgroundColor:e.backgroundColor||e.color||"",borderColor:e.borderColor||e.color||"",textColor:e.textColor||"",classNames:(e.className||[]).concat(e.classNames||[])}}function Gr(e){return e.reduce(Yr,Wr)}function Yr(e,t){return{display:null!=t.display?t.display:e.display,startEditable:null!=t.startEditable?t.startEditable:e.startEditable,durationEditable:null!=t.durationEditable?t.durationEditable:e.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:"boolean"==typeof t.overlap?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}var $r={id:String,groupId:String,title:String,url:String},Qr={start:Pr,end:Pr,date:Pr,allDay:Boolean},Xr=L(L(L({},$r),Qr),{extendedProps:Pr});function Zr(e,t,r,o,n){void 0===n&&(n=Kr(r));var i=Jr(e,r,n),a=i.refined,l=i.extra,s=function(e,t){var r=null;e&&(r=e.defaultAllDay);null==r&&(r=t.options.defaultAllDay);return r}(t,r),d=function(e,t,r,o){for(var n=0;n<o.length;n+=1){var i=o[n].parse(e,r);if(i){var a=e.allDay;return null==a&&null==(a=t)&&null==(a=i.allDayGuess)&&(a=!1),{allDay:a,duration:i.duration,typeData:i.typeData,typeId:n}}}return null}(a,s,r.dateEnv,r.pluginHooks.recurringTypes);if(d)return(c=eo(a,l,t?t.sourceId:"",d.allDay,Boolean(d.duration),r)).recurringDef={typeId:d.typeId,typeData:d.typeData,duration:d.duration},{def:c,instance:null};var c,f=function(e,t,r,o){var n,i,a=e.allDay,l=null,s=!1,d=null,c=null!=e.start?e.start:e.date;if(n=r.dateEnv.createMarkerMeta(c))l=n.marker;else if(!o)return null;null!=e.end&&(i=r.dateEnv.createMarkerMeta(e.end));null==a&&(a=null!=t?t:(!n||n.isTimeUnspecified)&&(!i||i.isTimeUnspecified));a&&l&&(l=Rt(l));i&&(d=i.marker,a&&(d=Rt(d)),l&&d<=l&&(d=null));d?s=!0:o||(s=r.options.forceEventDuration||!1,d=r.dateEnv.add(l,a?r.options.defaultAllDayEventDuration:r.options.defaultTimedEventDuration));return{allDay:a,hasEnd:s,range:{start:l,end:d},forcedStartTzo:n?n.forcedTzo:null,forcedEndTzo:i?i.forcedTzo:null}}(a,s,r,o);return f?{def:c=eo(a,l,t?t.sourceId:"",f.allDay,f.hasEnd,r),instance:Bt(c.defId,f.range,f.forcedStartTzo,f.forcedEndTzo)}:null}function Jr(e,t,r){return void 0===r&&(r=Kr(t)),Nr(e,r)}function Kr(e){return L(L(L({},jr),Xr),e.pluginHooks.eventRefiners)}function eo(e,t,r,o,n,i){for(var a={title:e.title||"",groupId:e.groupId||"",publicId:e.id||"",url:e.url||"",recurringDef:null,defId:ht(),sourceId:r,allDay:o,hasEnd:n,ui:qr(e,i),extendedProps:L(L({},e.extendedProps||{}),t)},l=0,s=i.pluginHooks.eventDefMemberAdders;l<s.length;l++){var d=s[l];L(a,d(e))}return Object.freeze(a.ui.classNames),Object.freeze(a.extendedProps),a}function to(e){var t=Math.floor(Dt(e.start,e.end))||1,r=Rt(e.start);return{start:r,end:Ct(r,t)}}function ro(e,t){void 0===t&&(t=er(0));var r=null,o=null;if(e.end){o=Rt(e.end);var n=e.end.valueOf()-o.valueOf();n&&n>=nr(t)&&(o=Ct(o,1))}return e.start&&(r=Rt(e.start),o&&o<=r&&(o=Ct(r,1))),{start:r,end:o}}function oo(e,t,r,o){return"year"===o?er(r.diffWholeYears(e,t),"year"):"month"===o?er(r.diffWholeMonths(e,t),"month"):(i=t,a=Rt(n=e),l=Rt(i),{years:0,months:0,days:Math.round(Dt(a,l)),milliseconds:i.valueOf()-l.valueOf()-(n.valueOf()-a.valueOf())});var n,i,a,l}function no(e,t){var r,o,n=[],i=t.start;for(e.sort(io),r=0;r<e.length;r+=1)(o=e[r]).start>i&&n.push({start:i,end:o.start}),o.end>i&&(i=o.end);return i<t.end&&n.push({start:i,end:t.end}),n}function io(e,t){return e.start.valueOf()-t.start.valueOf()}function ao(e,t){var r=e.start,o=e.end,n=null;return null!==t.start&&(r=null===r?t.start:new Date(Math.max(r.valueOf(),t.start.valueOf()))),null!=t.end&&(o=null===o?t.end:new Date(Math.min(o.valueOf(),t.end.valueOf()))),(null===r||null===o||r<o)&&(n={start:r,end:o}),n}function lo(e,t){return(null===e.end||null===t.start||e.end>t.start)&&(null===e.start||null===t.end||e.start<t.end)}function so(e,t){return(null===e.start||null!==t.start&&t.start>=e.start)&&(null===e.end||null!==t.end&&t.end<=e.end)}function co(e,t){return(null===e.start||t>=e.start)&&(null===e.end||t<e.end)}function fo(e,t,r,o){var n={},i={},a={},l=[],s=[],d=uo(e.defs,t);for(var c in e.defs){"inverse-background"===(m=d[(y=e.defs[c]).defId]).display&&(y.groupId?(n[y.groupId]=[],a[y.groupId]||(a[y.groupId]=y)):i[c]=[])}for(var f in e.instances){var p=e.instances[f],m=d[(y=e.defs[p.defId]).defId],u=p.range,h=!y.allDay&&o?ro(u,o):u,g=ao(h,r);g&&("inverse-background"===m.display?y.groupId?n[y.groupId].push(g):i[p.defId].push(g):"none"!==m.display&&("background"===m.display?l:s).push({def:y,ui:m,instance:p,range:g,isStart:h.start&&h.start.valueOf()===g.start.valueOf(),isEnd:h.end&&h.end.valueOf()===g.end.valueOf()}))}for(var b in n)for(var v=0,x=no(n[b],r);v<x.length;v++){var y,w=x[v];m=d[(y=a[b]).defId];l.push({def:y,ui:m,instance:null,range:w,isStart:!1,isEnd:!1})}for(var c in i)for(var k=0,_=no(i[c],r);k<_.length;k++){w=_[k];l.push({def:e.defs[c],ui:d[c],instance:null,range:w,isStart:!1,isEnd:!1})}return{bg:l,fg:s}}function po(e,t){e.fcSeg=t}function mo(e){return e.fcSeg||e.parentNode.fcSeg||null}function uo(e,t){return jt(e,(function(e){return ho(e,t)}))}function ho(e,t){var r=[];return t[""]&&r.push(t[""]),t[e.defId]&&r.push(t[e.defId]),r.push(e.ui),Gr(r)}function go(e,t){var r=e.map(bo);return r.sort((function(e,r){return vt(e,r,t)})),r.map((function(e){return e._seg}))}function bo(e){var t=e.eventRange,r=t.def,o=t.instance?t.instance.range:t.range,n=o.start?o.start.valueOf():0,i=o.end?o.end.valueOf():0;return L(L(L({},r.extendedProps),r),{id:r.publicId,start:n,end:i,duration:i-n,allDay:Number(r.allDay),_seg:e})}function vo(e,t){for(var r=t.pluginHooks.isDraggableTransformers,o=e.eventRange,n=o.def,i=o.ui,a=i.startEditable,l=0,s=r;l<s.length;l++){a=(0,s[l])(a,n,i,t)}return a}function xo(e,t){return e.isStart&&e.eventRange.ui.durationEditable&&t.options.eventResizableFromStart}function yo(e,t){return e.isEnd&&e.eventRange.ui.durationEditable}function wo(e,t,r,o,n,i,a){var l=r.dateEnv,s=r.options,d=s.displayEventTime,c=s.displayEventEnd,f=e.eventRange.def,p=e.eventRange.instance;if(null==d&&(d=!1!==o),null==c&&(c=!1!==n),d&&!f.allDay&&(e.isStart||e.isEnd)){var m=i||(e.isStart?p.range.start:e.start||e.eventRange.range.start),u=a||(e.isEnd?p.range.end:e.end||e.eventRange.range.end);return c&&f.hasEnd?l.formatRange(m,u,t,{forcedStartTzo:i?null:p.forcedStartTzo,forcedEndTzo:a?null:p.forcedEndTzo}):l.format(m,t,{forcedTzo:i?null:p.forcedStartTzo})}return""}function ko(e,t,r){var o=e.eventRange.range;return{isPast:o.end<(r||t.start),isFuture:o.start>=(r||t.end),isToday:t&&co(t,o.start)}}function _o(e){return e.instance?e.instance.instanceId:e.def.defId+":"+e.range.start.toISOString()}var Eo={start:Pr,end:Pr,allDay:Boolean};function Ao(e,t,r){var o=function(e,t){var r=Nr(e,Eo),o=r.refined,n=r.extra,i=o.start?t.createMarkerMeta(o.start):null,a=o.end?t.createMarkerMeta(o.end):null,l=o.allDay;null==l&&(l=i&&i.isTimeUnspecified&&(!a||a.isTimeUnspecified));return L({range:{start:i?i.marker:null,end:a?a.marker:null},allDay:l},n)}(e,t),n=o.range;if(!n.start)return null;if(!n.end){if(null==r)return null;n.end=t.add(n.start,r)}return o}function Co(e,t,r){return L(L({},So(e,t,r)),{timeZone:t.timeZone})}function So(e,t,r){return{start:t.toDate(e.start),end:t.toDate(e.end),startStr:t.formatIso(e.start,{omitTime:r}),endStr:t.formatIso(e.end,{omitTime:r})}}function Do(e,t,r){var o=Jr({editable:!1},r),n=eo(o.refined,o.extra,"",e.allDay,!0,r);return{def:n,ui:ho(n,t),instance:Bt(n.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}function To(e,t,r){r.emitter.trigger("select",L(L({},Ro(e,r)),{jsEvent:t?t.origEvent:null,view:r.viewApi||r.calendarApi.view}))}function Ro(e,t){for(var r,o,n={},i=0,a=t.pluginHooks.dateSpanTransforms;i<a.length;i++){var l=a[i];L(n,l(e,t))}return L(n,(r=e,o=t.dateEnv,L(L({},So(r.range,o,r.allDay)),{allDay:r.allDay}))),n}function Io(e,t,r){var o=r.dateEnv,n=r.options,i=t;return e?(i=Rt(i),i=o.add(i,n.defaultAllDayEventDuration)):i=o.add(i,n.defaultTimedEventDuration),i}function Mo(e,t,r,o){var n=uo(e.defs,t),i={defs:{},instances:{}};for(var a in e.defs){var l=e.defs[a];i.defs[a]=Oo(l,n[a],r,o)}for(var s in e.instances){var d=e.instances[s];l=i.defs[d.defId];i.instances[s]=zo(d,l,n[d.defId],r,o)}return i}function Oo(e,t,r,o){var n=r.standardProps||{};null==n.hasEnd&&t.durationEditable&&(r.startDelta||r.endDelta)&&(n.hasEnd=!0);var i=L(L(L({},e),n),{ui:L(L({},e.ui),n.ui)});r.extendedProps&&(i.extendedProps=L(L({},i.extendedProps),r.extendedProps));for(var a=0,l=o.pluginHooks.eventDefMutationAppliers;a<l.length;a++){(0,l[a])(i,r,o)}return!i.hasEnd&&o.options.forceEventDuration&&(i.hasEnd=!0),i}function zo(e,t,r,o,n){var i=n.dateEnv,a=o.standardProps&&!0===o.standardProps.allDay,l=o.standardProps&&!1===o.standardProps.hasEnd,s=L({},e);return a&&(s.range=to(s.range)),o.datesDelta&&r.startEditable&&(s.range={start:i.add(s.range.start,o.datesDelta),end:i.add(s.range.end,o.datesDelta)}),o.startDelta&&r.durationEditable&&(s.range={start:i.add(s.range.start,o.startDelta),end:s.range.end}),o.endDelta&&r.durationEditable&&(s.range={start:s.range.start,end:i.add(s.range.end,o.endDelta)}),l&&(s.range={start:s.range.start,end:Io(t.allDay,s.range.start,n)}),t.allDay&&(s.range={start:Rt(s.range.start),end:Rt(s.range.end)}),s.range.end<s.range.start&&(s.range.end=Io(t.allDay,s.range.start,n)),s}var No=function(){function e(e,t,r){this.type=e,this.getCurrentData=t,this.dateEnv=r}return Object.defineProperty(e.prototype,"calendar",{get:function(){return this.getCurrentData().calendarApi},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this.getCurrentData().viewTitle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)},enumerable:!1,configurable:!0}),e.prototype.getOption=function(e){return this.getCurrentData().options[e]},e}(),Po={id:String,defaultAllDay:Boolean,url:String,format:String,events:Pr,eventDataTransform:Pr,success:Pr,failure:Pr};function Ho(e,t,r){var o;if(void 0===r&&(r=Lo(t)),"string"==typeof e?o={url:e}:"function"==typeof e||Array.isArray(e)?o={events:e}:"object"==typeof e&&e&&(o=e),o){var n=Nr(o,r),i=n.refined,a=n.extra,l=function(e,t){for(var r=t.pluginHooks.eventSourceDefs,o=r.length-1;o>=0;o-=1){var n=r[o].parseMeta(e);if(n)return{sourceDefId:o,meta:n}}return null}(i,t);if(l)return{_raw:e,isFetching:!1,latestFetchId:"",fetchRange:null,defaultAllDay:i.defaultAllDay,eventDataTransform:i.eventDataTransform,success:i.success,failure:i.failure,publicId:i.id||"",sourceId:ht(),sourceDefId:l.sourceDefId,meta:l.meta,ui:qr(i,t),extendedProps:a}}return null}function Lo(e){return L(L(L({},jr),Po),e.pluginHooks.eventSourceRefiners)}function Bo(e,t){return"function"==typeof e&&(e=e()),null==e?t.createNowMarker():t.createMarker(e)}var Fo=function(){function e(){}return e.prototype.getCurrentData=function(){return this.currentDataManager.getCurrentData()},e.prototype.dispatch=function(e){return this.currentDataManager.dispatch(e)},Object.defineProperty(e.prototype,"view",{get:function(){return this.getCurrentData().viewApi},enumerable:!1,configurable:!0}),e.prototype.batchRendering=function(e){e()},e.prototype.updateSize=function(){this.trigger("_resize",!0)},e.prototype.setOption=function(e,t){this.dispatch({type:"SET_OPTION",optionName:e,rawOptionValue:t})},e.prototype.getOption=function(e){return this.currentDataManager.currentCalendarOptionsInput[e]},e.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.getCurrentData().availableRawLocales)},e.prototype.on=function(e,t){var r=this.currentDataManager;r.currentCalendarOptionsRefiners[e]?r.emitter.on(e,t):console.warn("Unknown listener name '"+e+"'")},e.prototype.off=function(e,t){this.currentDataManager.emitter.off(e,t)},e.prototype.trigger=function(e){for(var t,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];(t=this.currentDataManager.emitter).trigger.apply(t,F([e],r))},e.prototype.changeView=function(e,t){var r=this;this.batchRendering((function(){if(r.unselect(),t)if(t.start&&t.end)r.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e}),r.dispatch({type:"SET_OPTION",optionName:"visibleRange",rawOptionValue:t});else{var o=r.getCurrentData().dateEnv;r.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e,dateMarker:o.createMarker(t)})}else r.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e})}))},e.prototype.zoomTo=function(e,t){var r;t=t||"day",r=this.getCurrentData().viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),r?this.dispatch({type:"CHANGE_VIEW_TYPE",viewType:r.type,dateMarker:e}):this.dispatch({type:"CHANGE_DATE",dateMarker:e})},e.prototype.getUnitViewSpec=function(e){var t,r,o=this.getCurrentData(),n=o.viewSpecs,i=o.toolbarConfig,a=[].concat(i.viewsWithButtons);for(var l in n)a.push(l);for(t=0;t<a.length;t+=1)if((r=n[a[t]])&&r.singleUnit===e)return r;return null},e.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},e.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},e.prototype.prevYear=function(){var e=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:e.dateEnv.addYears(e.currentDate,-1)})},e.prototype.nextYear=function(){var e=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:e.dateEnv.addYears(e.currentDate,1)})},e.prototype.today=function(){var e=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:Bo(e.calendarOptions.now,e.dateEnv)})},e.prototype.gotoDate=function(e){var t=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:t.dateEnv.createMarker(e)})},e.prototype.incrementDate=function(e){var t=this.getCurrentData(),r=er(e);r&&(this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:t.dateEnv.add(t.currentDate,r)}))},e.prototype.getDate=function(){var e=this.getCurrentData();return e.dateEnv.toDate(e.currentDate)},e.prototype.formatDate=function(e,t){var r=this.getCurrentData().dateEnv;return r.format(r.createMarker(e),Cr(t))},e.prototype.formatRange=function(e,t,r){var o=this.getCurrentData().dateEnv;return o.formatRange(o.createMarker(e),o.createMarker(t),Cr(r),r)},e.prototype.formatIso=function(e,t){var r=this.getCurrentData().dateEnv;return r.formatIso(r.createMarker(e),{omitTime:t})},e.prototype.select=function(e,t){var r;r=null==t?null!=e.start?e:{start:e,end:null}:{start:e,end:t};var o=this.getCurrentData(),n=Ao(r,o.dateEnv,er({days:1}));n&&(this.dispatch({type:"SELECT_DATES",selection:n}),To(n,null,o))},e.prototype.unselect=function(e){var t=this.getCurrentData();t.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),function(e,t){t.emitter.trigger("unselect",{jsEvent:e?e.origEvent:null,view:t.viewApi||t.calendarApi.view})}(e,t))},e.prototype.addEvent=function(e,t){if(e instanceof Uo){var r=e._def,o=e._instance;return this.getCurrentData().eventStore.defs[r.defId]||(this.dispatch({type:"ADD_EVENTS",eventStore:Lr({def:r,instance:o})}),this.triggerEventAdd(e)),e}var n,i=this.getCurrentData();if(t instanceof ot)n=t.internalEventSource;else if("boolean"==typeof t)t&&(n=qt(i.eventSources)[0]);else if(null!=t){var a=this.getEventSourceById(t);if(!a)return console.warn('Could not find an event source with ID "'+t+'"'),null;n=a.internalEventSource}var l=Zr(e,n,i,!1);if(l){var s=new Uo(i,l.def,l.def.recurringDef?null:l.instance);return this.dispatch({type:"ADD_EVENTS",eventStore:Lr(l)}),this.triggerEventAdd(s),s}return null},e.prototype.triggerEventAdd=function(e){var t=this;this.getCurrentData().emitter.trigger("eventAdd",{event:e,relatedEvents:[],revert:function(){t.dispatch({type:"REMOVE_EVENTS",eventStore:Vo(e)})}})},e.prototype.getEventById=function(e){var t=this.getCurrentData(),r=t.eventStore,o=r.defs,n=r.instances;for(var i in e=String(e),o){var a=o[i];if(a.publicId===e){if(a.recurringDef)return new Uo(t,a,null);for(var l in n){var s=n[l];if(s.defId===a.defId)return new Uo(t,a,s)}}}return null},e.prototype.getEvents=function(){var e=this.getCurrentData();return jo(e.eventStore,e)},e.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},e.prototype.getEventSources=function(){var e=this.getCurrentData(),t=e.eventSources,r=[];for(var o in t)r.push(new ot(e,t[o]));return r},e.prototype.getEventSourceById=function(e){var t=this.getCurrentData(),r=t.eventSources;for(var o in e=String(e),r)if(r[o].publicId===e)return new ot(t,r[o]);return null},e.prototype.addEventSource=function(e){var t=this.getCurrentData();if(e instanceof ot)return t.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e.internalEventSource]}),e;var r=Ho(e,t);return r?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[r]}),new ot(t,r)):null},e.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},e.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES"})},e.prototype.scrollToTime=function(e){var t=er(e);t&&this.trigger("_scrollRequest",{time:t})},e}(),Uo=function(){function e(e,t,r){this._context=e,this._def=t,this._instance=r||null}return e.prototype.setProp=function(e,t){var r,o;if(e in Qr)console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");else if(e in $r)t=$r[e](t),this.mutate({standardProps:(r={},r[e]=t,r)});else if(e in jr){var n=jr[e](t);"color"===e?n={backgroundColor:t,borderColor:t}:"editable"===e?n={startEditable:t,durationEditable:t}:((o={})[e]=t,n=o),this.mutate({standardProps:{ui:n}})}else console.warn("Could not set prop '"+e+"'. Use setExtendedProp instead.")},e.prototype.setExtendedProp=function(e,t){var r;this.mutate({extendedProps:(r={},r[e]=t,r)})},e.prototype.setStart=function(e,t){void 0===t&&(t={});var r=this._context.dateEnv,o=r.createMarker(e);if(o&&this._instance){var n=oo(this._instance.range.start,o,r,t.granularity);t.maintainDuration?this.mutate({datesDelta:n}):this.mutate({startDelta:n})}},e.prototype.setEnd=function(e,t){void 0===t&&(t={});var r,o=this._context.dateEnv;if((null==e||(r=o.createMarker(e)))&&this._instance)if(r){var n=oo(this._instance.range.end,r,o,t.granularity);this.mutate({endDelta:n})}else this.mutate({standardProps:{hasEnd:!1}})},e.prototype.setDates=function(e,t,r){void 0===r&&(r={});var o,n,i,a=this._context.dateEnv,l={allDay:r.allDay},s=a.createMarker(e);if(s&&((null==t||(o=a.createMarker(t)))&&this._instance)){var d=this._instance.range;!0===r.allDay&&(d=to(d));var c=oo(d.start,s,a,r.granularity);if(o){var f=oo(d.end,o,a,r.granularity);i=f,(n=c).years===i.years&&n.months===i.months&&n.days===i.days&&n.milliseconds===i.milliseconds?this.mutate({datesDelta:c,standardProps:l}):this.mutate({startDelta:c,endDelta:f,standardProps:l})}else l.hasEnd=!1,this.mutate({datesDelta:c,standardProps:l})}},e.prototype.moveStart=function(e){var t=er(e);t&&this.mutate({startDelta:t})},e.prototype.moveEnd=function(e){var t=er(e);t&&this.mutate({endDelta:t})},e.prototype.moveDates=function(e){var t=er(e);t&&this.mutate({datesDelta:t})},e.prototype.setAllDay=function(e,t){void 0===t&&(t={});var r={allDay:e},o=t.maintainDuration;null==o&&(o=this._context.options.allDayMaintainDuration),this._def.allDay!==e&&(r.hasEnd=o),this.mutate({standardProps:r})},e.prototype.formatRange=function(e){var t=this._context.dateEnv,r=this._instance,o=Cr(e);return this._def.hasEnd?t.formatRange(r.range.start,r.range.end,o,{forcedStartTzo:r.forcedStartTzo,forcedEndTzo:r.forcedEndTzo}):t.format(r.range.start,o,{forcedTzo:r.forcedStartTzo})},e.prototype.mutate=function(t){var r=this._instance;if(r){var o=this._def,n=this._context,i=n.getCurrentData().eventStore,a=Br(i,r.instanceId);a=Mo(a,{"":{display:"",startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}},t,n);var l=new e(n,o,r);this._def=a.defs[o.defId],this._instance=a.instances[r.instanceId],n.dispatch({type:"MERGE_EVENTS",eventStore:a}),n.emitter.trigger("eventChange",{oldEvent:l,event:this,relatedEvents:jo(a,n,r),revert:function(){n.dispatch({type:"RESET_EVENTS",eventStore:i})}})}},e.prototype.remove=function(){var e=this._context,t=Vo(this);e.dispatch({type:"REMOVE_EVENTS",eventStore:t}),e.emitter.trigger("eventRemove",{event:this,relatedEvents:[],revert:function(){e.dispatch({type:"MERGE_EVENTS",eventStore:t})}})},Object.defineProperty(e.prototype,"source",{get:function(){var e=this._def.sourceId;return e?new ot(this._context,this._context.getCurrentData().eventSources[e]):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this._instance?this._context.dateEnv.toDate(this._instance.range.start):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._context.dateEnv.toDate(this._instance.range.end):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startStr",{get:function(){var e=this._instance;return e?this._context.dateEnv.formatIso(e.range.start,{omitTime:this._def.allDay,forcedTzo:e.forcedStartTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"endStr",{get:function(){var e=this._instance;return e&&this._def.hasEnd?this._context.dateEnv.formatIso(e.range.end,{omitTime:this._def.allDay,forcedTzo:e.forcedEndTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._def.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._def.title},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._def.url},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"display",{get:function(){return this._def.ui.display||"auto"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!1,configurable:!0}),e.prototype.toPlainObject=function(e){void 0===e&&(e={});var t=this._def,r=t.ui,o=this.startStr,n=this.endStr,i={};return t.title&&(i.title=t.title),o&&(i.start=o),n&&(i.end=n),t.publicId&&(i.id=t.publicId),t.groupId&&(i.groupId=t.groupId),t.url&&(i.url=t.url),r.display&&"auto"!==r.display&&(i.display=r.display),e.collapseColor&&r.backgroundColor&&r.backgroundColor===r.borderColor?i.color=r.backgroundColor:(r.backgroundColor&&(i.backgroundColor=r.backgroundColor),r.borderColor&&(i.borderColor=r.borderColor)),r.textColor&&(i.textColor=r.textColor),r.classNames.length&&(i.classNames=r.classNames),Object.keys(t.extendedProps).length&&(e.collapseExtendedProps?L(i,t.extendedProps):i.extendedProps=t.extendedProps),i},e.prototype.toJSON=function(){return this.toPlainObject()},e}();function Vo(e){var t,r,o=e._def,n=e._instance;return{defs:(t={},t[o.defId]=o,t),instances:n?(r={},r[n.instanceId]=n,r):{}}}function jo(e,t,r){var o=e.defs,n=e.instances,i=[],a=r?r.instanceId:"";for(var l in n){var s=n[l],d=o[s.defId];s.instanceId!==a&&i.push(new Uo(t,d,s))}return i}var Wo={};var qo,Go=function(){function e(){}return e.prototype.getMarkerYear=function(e){return e.getUTCFullYear()},e.prototype.getMarkerMonth=function(e){return e.getUTCMonth()},e.prototype.getMarkerDay=function(e){return e.getUTCDate()},e.prototype.arrayToMarker=function(e){return Pt(e)},e.prototype.markerToArray=function(e){return Nt(e)},e}();qo=Go,Wo["gregory"]=qo;var Yo=/^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;var $o=function(){function e(e){var t=this.timeZone=e.timeZone,r="local"!==t&&"UTC"!==t;e.namedTimeZoneImpl&&r&&(this.namedTimeZoneImpl=new e.namedTimeZoneImpl(t)),this.canComputeOffset=Boolean(!r||this.namedTimeZoneImpl),this.calendarSystem=function(e){return new Wo[e]}(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,"ISO"===e.weekNumberCalculation&&(this.weekDow=1,this.weekDoy=4),"number"==typeof e.firstDay&&(this.weekDow=e.firstDay),"function"==typeof e.weekNumberCalculation&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekText=null!=e.weekText?e.weekText:e.locale.options.weekText,this.cmdFormatter=e.cmdFormatter,this.defaultSeparator=e.defaultSeparator}return e.prototype.createMarker=function(e){var t=this.createMarkerMeta(e);return null===t?null:t.marker},e.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker((new Date).valueOf()):Pt(Ot(new Date))},e.prototype.createMarkerMeta=function(e){if("string"==typeof e)return this.parse(e);var t=null;return"number"==typeof e?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=Pt(e)),null!==t&&Ht(t)?{marker:t,isTimeUnspecified:!1,forcedTzo:null}:null},e.prototype.parse=function(e){var t=function(e){var t=Yo.exec(e);if(t){var r=new Date(Date.UTC(Number(t[1]),t[3]?Number(t[3])-1:0,Number(t[5]||1),Number(t[7]||0),Number(t[8]||0),Number(t[10]||0),t[12]?1e3*Number("0."+t[12]):0));if(Ht(r)){var o=null;return t[13]&&(o=("-"===t[15]?-1:1)*(60*Number(t[16]||0)+Number(t[18]||0))),{marker:r,isTimeUnspecified:!t[6],timeZoneOffset:o}}}return null}(e);if(null===t)return null;var r=t.marker,o=null;return null!==t.timeZoneOffset&&(this.canComputeOffset?r=this.timestampToMarker(r.valueOf()-60*t.timeZoneOffset*1e3):o=t.timeZoneOffset),{marker:r,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:o}},e.prototype.getYear=function(e){return this.calendarSystem.getMarkerYear(e)},e.prototype.getMonth=function(e){return this.calendarSystem.getMarkerMonth(e)},e.prototype.add=function(e,t){var r=this.calendarSystem.markerToArray(e);return r[0]+=t.years,r[1]+=t.months,r[2]+=t.days,r[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(r)},e.prototype.subtract=function(e,t){var r=this.calendarSystem.markerToArray(e);return r[0]-=t.years,r[1]-=t.months,r[2]-=t.days,r[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(r)},e.prototype.addYears=function(e,t){var r=this.calendarSystem.markerToArray(e);return r[0]+=t,this.calendarSystem.arrayToMarker(r)},e.prototype.addMonths=function(e,t){var r=this.calendarSystem.markerToArray(e);return r[1]+=t,this.calendarSystem.arrayToMarker(r)},e.prototype.diffWholeYears=function(e,t){var r=this.calendarSystem;return Lt(e)===Lt(t)&&r.getMarkerDay(e)===r.getMarkerDay(t)&&r.getMarkerMonth(e)===r.getMarkerMonth(t)?r.getMarkerYear(t)-r.getMarkerYear(e):null},e.prototype.diffWholeMonths=function(e,t){var r=this.calendarSystem;return Lt(e)===Lt(t)&&r.getMarkerDay(e)===r.getMarkerDay(t)?r.getMarkerMonth(t)-r.getMarkerMonth(e)+12*(r.getMarkerYear(t)-r.getMarkerYear(e)):null},e.prototype.greatestWholeUnit=function(e,t){var r=this.diffWholeYears(e,t);return null!==r?{unit:"year",value:r}:null!==(r=this.diffWholeMonths(e,t))?{unit:"month",value:r}:null!==(r=function(e,t){var r=Tt(e,t);return null!==r&&r%7==0?r/7:null}(e,t))?{unit:"week",value:r}:null!==(r=Tt(e,t))?{unit:"day",value:r}:kt(r=function(e,t){return(t.valueOf()-e.valueOf())/36e5}(e,t))?{unit:"hour",value:r}:kt(r=function(e,t){return(t.valueOf()-e.valueOf())/6e4}(e,t))?{unit:"minute",value:r}:kt(r=function(e,t){return(t.valueOf()-e.valueOf())/1e3}(e,t))?{unit:"second",value:r}:{unit:"millisecond",value:t.valueOf()-e.valueOf()}},e.prototype.countDurationsBetween=function(e,t,r){var o;return r.years&&null!==(o=this.diffWholeYears(e,t))?o/(or(r)/365):r.months&&null!==(o=this.diffWholeMonths(e,t))?o/function(e){return or(e)/30}(r):r.days&&null!==(o=Tt(e,t))?o/or(r):(t.valueOf()-e.valueOf())/nr(r)},e.prototype.startOf=function(e,t){return"year"===t?this.startOfYear(e):"month"===t?this.startOfMonth(e):"week"===t?this.startOfWeek(e):"day"===t?Rt(e):"hour"===t?function(e){return Pt([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}(e):"minute"===t?function(e){return Pt([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}(e):"second"===t?function(e){return Pt([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}(e):null},e.prototype.startOfYear=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])},e.prototype.startOfMonth=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])},e.prototype.startOfWeek=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])},e.prototype.computeWeekNumber=function(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):function(e,t,r){var o=e.getUTCFullYear(),n=It(e,o,t,r);if(n<1)return It(e,o-1,t,r);var i=It(e,o+1,t,r);return i>=1?Math.min(n,i):n}(e,this.weekDow,this.weekDoy)},e.prototype.format=function(e,t,r){return void 0===r&&(r={}),t.format({marker:e,timeZoneOffset:null!=r.forcedTzo?r.forcedTzo:this.offsetForMarker(e)},this)},e.prototype.formatRange=function(e,t,r,o){return void 0===o&&(o={}),o.isEndExclusive&&(t=St(t,-1)),r.formatRange({marker:e,timeZoneOffset:null!=o.forcedStartTzo?o.forcedStartTzo:this.offsetForMarker(e)},{marker:t,timeZoneOffset:null!=o.forcedEndTzo?o.forcedEndTzo:this.offsetForMarker(t)},this,o.defaultSeparator)},e.prototype.formatIso=function(e,t){void 0===t&&(t={});var r=null;return t.omitTimeZoneOffset||(r=null!=t.forcedTzo?t.forcedTzo:this.offsetForMarker(e)),function(e,t,r){void 0===r&&(r=!1);var o=e.toISOString();return o=o.replace(".000",""),r&&(o=o.replace("T00:00:00Z","")),o.length>10&&(null==t?o=o.replace("Z",""):0!==t&&(o=o.replace("Z",dr(t,!0)))),o}(e,r,t.omitTime)},e.prototype.timestampToMarker=function(e){return"local"===this.timeZone?Pt(Ot(new Date(e))):"UTC"!==this.timeZone&&this.namedTimeZoneImpl?Pt(this.namedTimeZoneImpl.timestampToArray(e)):new Date(e)},e.prototype.offsetForMarker=function(e){return"local"===this.timeZone?-zt(Nt(e)).getTimezoneOffset():"UTC"===this.timeZone?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(Nt(e)):null},e.prototype.toDate=function(e,t){return"local"===this.timeZone?zt(Nt(e)):"UTC"===this.timeZone?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-1e3*this.namedTimeZoneImpl.offsetForArray(Nt(e))*60):new Date(e.valueOf()-(t||0))},e}(),Qo=[],Xo={code:"en",week:{dow:0,doy:4},direction:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekText:"W",allDayText:"all-day",moreLinkText:"more",noEventsText:"No events to display"};function Zo(e){for(var t=e.length>0?e[0].code:"en",r=Qo.concat(e),o={en:Xo},n=0,i=r;n<i.length;n++){var a=i[n];o[a.code]=a}return{map:o,defaultCode:t}}function Jo(e,t){return"object"!=typeof e||Array.isArray(e)?function(e,t){var r=[].concat(e||[]),o=function(e,t){for(var r=0;r<e.length;r+=1)for(var o=e[r].toLocaleLowerCase().split("-"),n=o.length;n>0;n-=1){var i=o.slice(0,n).join("-");if(t[i])return t[i]}return null}(r,t)||Xo;return Ko(e,r,o)}(e,t):Ko(e.code,[e.code],e)}function Ko(e,t,r){var o=Ut([Xo,r],["buttonText"]);delete o.code;var n=o.week;return delete o.week,{codeArg:e,codes:t,week:n,simpleNumberFormat:new Intl.NumberFormat(e),options:o}}var en,tn={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],display:"inverse-background",classNames:"fc-non-business",groupId:"_businessHours"};function rn(e,t){return Hr(function(e){var t;t=!0===e?[{}]:Array.isArray(e)?e.filter((function(e){return e.daysOfWeek})):"object"==typeof e&&e?[e]:[];return t=t.map((function(e){return L(L({},tn),e)}))}(e),null,t)}function on(e,t){return e.left>=t.left&&e.left<t.right&&e.top>=t.top&&e.top<t.bottom}function nn(){return null==en&&(en=function(){if("undefined"==typeof document)return!0;var e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.innerHTML="<table><tr><td><div></div></td></tr></table>",e.querySelector("table").style.height="100px",e.querySelector("div").style.height="100%",document.body.appendChild(e);var t=e.querySelector("div").offsetHeight>0;return document.body.removeChild(e),t}()),en}var an={defs:{},instances:{}},ln=function(){function e(){this.getKeysForEventDefs=fr(this._getKeysForEventDefs),this.splitDateSelection=fr(this._splitDateSpan),this.splitEventStore=fr(this._splitEventStore),this.splitIndividualUi=fr(this._splitIndividualUi),this.splitEventDrag=fr(this._splitInteraction),this.splitEventResize=fr(this._splitInteraction),this.eventUiBuilders={}}return e.prototype.splitProps=function(e){var t=this,r=this.getKeyInfo(e),o=this.getKeysForEventDefs(e.eventStore),n=this.splitDateSelection(e.dateSelection),i=this.splitIndividualUi(e.eventUiBases,o),a=this.splitEventStore(e.eventStore,o),l=this.splitEventDrag(e.eventDrag),s=this.splitEventResize(e.eventResize),d={};for(var c in this.eventUiBuilders=jt(r,(function(e,r){return t.eventUiBuilders[r]||fr(sn)})),r){var f=r[c],p=a[c]||an,m=this.eventUiBuilders[c];d[c]={businessHours:f.businessHours||e.businessHours,dateSelection:n[c]||null,eventStore:p,eventUiBases:m(e.eventUiBases[""],f.ui,i[c]),eventSelection:p.instances[e.eventSelection]?e.eventSelection:"",eventDrag:l[c]||null,eventResize:s[c]||null}}return d},e.prototype._splitDateSpan=function(e){var t={};if(e)for(var r=0,o=this.getKeysForDateSpan(e);r<o.length;r++){t[o[r]]=e}return t},e.prototype._getKeysForEventDefs=function(e){var t=this;return jt(e.defs,(function(e){return t.getKeysForEventDef(e)}))},e.prototype._splitEventStore=function(e,t){var r=e.defs,o=e.instances,n={};for(var i in r)for(var a=0,l=t[i];a<l.length;a++){n[p=l[a]]||(n[p]={defs:{},instances:{}}),n[p].defs[i]=r[i]}for(var s in o)for(var d=o[s],c=0,f=t[d.defId];c<f.length;c++){var p;n[p=f[c]]&&(n[p].instances[s]=d)}return n},e.prototype._splitIndividualUi=function(e,t){var r={};for(var o in e)if(o)for(var n=0,i=t[o];n<i.length;n++){var a=i[n];r[a]||(r[a]={}),r[a][o]=e[o]}return r},e.prototype._splitInteraction=function(e){var t={};if(e){var r=this._splitEventStore(e.affectedEvents,this._getKeysForEventDefs(e.affectedEvents)),o=this._getKeysForEventDefs(e.mutatedEvents),n=this._splitEventStore(e.mutatedEvents,o),i=function(o){t[o]||(t[o]={affectedEvents:r[o]||an,mutatedEvents:n[o]||an,isEvent:e.isEvent})};for(var a in r)i(a);for(var a in n)i(a)}return t},e}();function sn(e,t,r){var o=[];e&&o.push(e),t&&o.push(t);var n={"":Gr(o)};return r&&L(n,r),n}function dn(e,t,r,o){return{dow:e.getUTCDay(),isDisabled:Boolean(o&&!co(o.activeRange,e)),isOther:Boolean(o&&!co(o.currentRange,e)),isToday:Boolean(t&&co(t,e)),isPast:Boolean(r?e<r:!!t&&e<t.start),isFuture:Boolean(r?e>r:!!t&&e>=t.end)}}function cn(e,t){var r=["fc-day","fc-day-"+Et[e.dow]];return e.isDisabled?r.push("fc-day-disabled"):(e.isToday&&(r.push("fc-day-today"),r.push(t.getClass("today"))),e.isPast&&r.push("fc-day-past"),e.isFuture&&r.push("fc-day-future"),e.isOther&&r.push("fc-day-other")),r}function fn(e,t){return void 0===t&&(t="day"),JSON.stringify({date:lr(e),type:t})}var pn,mn=null;function un(){return null===mn&&(mn=function(){var e=document.createElement("div");st(e,{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}),e.innerHTML="<div></div>",document.body.appendChild(e);var t=e.firstChild.getBoundingClientRect().left>e.getBoundingClientRect().left;return nt(e),t}()),mn}function hn(){return pn||(pn=function(){var e=document.createElement("div");e.style.overflow="scroll",e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",document.body.appendChild(e);var t=gn(e);return document.body.removeChild(e),t}()),pn}function gn(e){return{x:e.offsetHeight-e.clientHeight,y:e.offsetWidth-e.clientWidth}}function bn(e,t,r){void 0===t&&(t=!1);var o=r?e.getBoundingClientRect():vn(e),n=function(e,t){void 0===t&&(t=!1);var r=window.getComputedStyle(e),o=parseInt(r.borderLeftWidth,10)||0,n=parseInt(r.borderRightWidth,10)||0,i=parseInt(r.borderTopWidth,10)||0,a=parseInt(r.borderBottomWidth,10)||0,l=gn(e),s=l.y-o-n,d={borderLeft:o,borderRight:n,borderTop:i,borderBottom:a,scrollbarBottom:l.x-i-a,scrollbarLeft:0,scrollbarRight:0};return un()&&"rtl"===r.direction?d.scrollbarLeft=s:d.scrollbarRight=s,t&&(d.paddingLeft=parseInt(r.paddingLeft,10)||0,d.paddingRight=parseInt(r.paddingRight,10)||0,d.paddingTop=parseInt(r.paddingTop,10)||0,d.paddingBottom=parseInt(r.paddingBottom,10)||0),d}(e,t),i={left:o.left+n.borderLeft+n.scrollbarLeft,right:o.right-n.borderRight-n.scrollbarRight,top:o.top+n.borderTop,bottom:o.bottom-n.borderBottom-n.scrollbarBottom};return t&&(i.left+=n.paddingLeft,i.right-=n.paddingRight,i.top+=n.paddingTop,i.bottom-=n.paddingBottom),i}function vn(e){var t=e.getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset}}var xn=function(){function e(){this.handlers={},this.thisContext=null}return e.prototype.setThisContext=function(e){this.thisContext=e},e.prototype.setOptions=function(e){this.options=e},e.prototype.on=function(e,t){!function(e,t,r){(e[t]||(e[t]=[])).push(r)}(this.handlers,e,t)},e.prototype.off=function(e,t){!function(e,t,r){r?e[t]&&(e[t]=e[t].filter((function(e){return e!==r}))):delete e[t]}(this.handlers,e,t)},e.prototype.trigger=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var o=this.handlers[e]||[],n=this.options&&this.options[e],i=[].concat(n||[],o),a=0,l=i;a<l.length;a++){var s=l[a];s.apply(this.thisContext,t)}},e.prototype.hasHandlers=function(e){return this.handlers[e]&&this.handlers[e].length||this.options&&this.options[e]},e}();var yn=function(){function e(e,t,r,o){this.els=t;var n=this.originClientRect=e.getBoundingClientRect();r&&this.buildElHorizontals(n.left),o&&this.buildElVerticals(n.top)}return e.prototype.buildElHorizontals=function(e){for(var t=[],r=[],o=0,n=this.els;o<n.length;o++){var i=n[o].getBoundingClientRect();t.push(i.left-e),r.push(i.right-e)}this.lefts=t,this.rights=r},e.prototype.buildElVerticals=function(e){for(var t=[],r=[],o=0,n=this.els;o<n.length;o++){var i=n[o].getBoundingClientRect();t.push(i.top-e),r.push(i.bottom-e)}this.tops=t,this.bottoms=r},e.prototype.leftToIndex=function(e){var t,r=this.lefts,o=this.rights,n=r.length;for(t=0;t<n;t+=1)if(e>=r[t]&&e<o[t])return t},e.prototype.topToIndex=function(e){var t,r=this.tops,o=this.bottoms,n=r.length;for(t=0;t<n;t+=1)if(e>=r[t]&&e<o[t])return t},e.prototype.getWidth=function(e){return this.rights[e]-this.lefts[e]},e.prototype.getHeight=function(e){return this.bottoms[e]-this.tops[e]},e}(),wn=function(){function e(){}return e.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},e.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},e.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},e.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},e.prototype.canScrollUp=function(){return this.getScrollTop()>0},e.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},e.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},e.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},e}(),kn=function(e){function t(t){var r=e.call(this)||this;return r.el=t,r}return H(t,e),t.prototype.getScrollTop=function(){return this.el.scrollTop},t.prototype.getScrollLeft=function(){return this.el.scrollLeft},t.prototype.setScrollTop=function(e){this.el.scrollTop=e},t.prototype.setScrollLeft=function(e){this.el.scrollLeft=e},t.prototype.getScrollWidth=function(){return this.el.scrollWidth},t.prototype.getScrollHeight=function(){return this.el.scrollHeight},t.prototype.getClientHeight=function(){return this.el.clientHeight},t.prototype.getClientWidth=function(){return this.el.clientWidth},t}(wn),_n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.getScrollTop=function(){return window.pageYOffset},t.prototype.getScrollLeft=function(){return window.pageXOffset},t.prototype.setScrollTop=function(e){window.scroll(window.pageXOffset,e)},t.prototype.setScrollLeft=function(e){window.scroll(e,window.pageYOffset)},t.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},t.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},t.prototype.getClientHeight=function(){return document.documentElement.clientHeight},t.prototype.getClientWidth=function(){return document.documentElement.clientWidth},t}(wn),En=function(){function e(e){this.iconOverrideOption&&this.setIconOverride(e[this.iconOverrideOption])}return e.prototype.setIconOverride=function(e){var t,r;if("object"==typeof e&&e){for(r in t=L({},this.iconClasses),e)t[r]=this.applyIconOverridePrefix(e[r]);this.iconClasses=t}else!1===e&&(this.iconClasses={})},e.prototype.applyIconOverridePrefix=function(e){var t=this.iconOverridePrefix;return t&&0!==e.indexOf(t)&&(e=t+e),e},e.prototype.getClass=function(e){return this.classes[e]||""},e.prototype.getIconClass=function(e,t){var r;return(r=t&&this.rtlIconClasses&&this.rtlIconClasses[e]||this.iconClasses[e])?this.baseIconClass+" "+r:""},e.prototype.getCustomButtonIconClass=function(e){var t;return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(t):""},e}();En.prototype.classes={},En.prototype.iconClasses={},En.prototype.baseIconClass="",En.prototype.iconOverridePrefix="";var An=function(){function e(e,t,r){var o=this;this.execFunc=e,this.emitter=t,this.scrollTime=r,this.handleScrollRequest=function(e){o.queuedRequest=L({},o.queuedRequest||{},e),o.drain()},t.on("_scrollRequest",this.handleScrollRequest),this.fireInitialScroll()}return e.prototype.detach=function(){this.emitter.off("_scrollRequest",this.handleScrollRequest)},e.prototype.update=function(e){e?this.fireInitialScroll():this.drain()},e.prototype.fireInitialScroll=function(){this.handleScrollRequest({time:this.scrollTime})},e.prototype.drain=function(){this.queuedRequest&&this.execFunc(this.queuedRequest)&&(this.queuedRequest=null)},e}(),Cn=et({});function Sn(e,t,r,o,n,i,a,l,s,d,c,f,p){return{dateEnv:n,options:r,pluginHooks:a,emitter:d,dispatch:l,getCurrentData:s,calendarApi:c,viewSpec:e,viewApi:t,dateProfileGenerator:o,theme:i,isRtl:"rtl"===r.direction,addResizeHandler:function(e){d.on("_resize",e)},removeResizeHandler:function(e){d.off("_resize",e)},createScrollResponder:function(e){return new An(e,d,er(r.scrollTime))},registerInteractiveComponent:f,unregisterInteractiveComponent:p}}var Dn=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.debug&&console.log(Yt(e,this.props),Yt(t,this.state)),!$t(this.props,e,this.propEquality)||!$t(this.state,t,this.stateEquality)},t.addPropsEquality=Rn,t.addStateEquality=In,t.contextType=Cn,t}(Qe);Dn.prototype.propEquality={},Dn.prototype.stateEquality={};var Tn=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.contextType=Cn,t}(Dn);function Rn(e){var t=Object.create(this.prototype.propEquality);L(t,e),this.prototype.propEquality=t}function In(e){var t=Object.create(this.prototype.stateEquality);L(t,e),this.prototype.stateEquality=t}function Mn(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function On(e,t,r,o,n){switch(t.type){case"RECEIVE_EVENTS":return function(e,t,r,o,n,i){if(t&&r===t.latestFetchId){var a=Hr(function(e,t,r){var o=r.options.eventDataTransform,n=t?t.eventDataTransform:null;n&&(e=zn(e,n));o&&(e=zn(e,o));return e}(n,t,i),t,i);return o&&(a=Xt(a,o,i)),Fr(Nn(e,t.sourceId),a)}return e}(e,r[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,n);case"ADD_EVENTS":return function(e,t,r,o){r&&(t=Xt(t,r,o));return Fr(e,t)}(e,t.eventStore,o?o.activeRange:null,n);case"RESET_EVENTS":return t.eventStore;case"MERGE_EVENTS":return Fr(e,t.eventStore);case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return o?Xt(e,o.activeRange,n):e;case"REMOVE_EVENTS":return function(e,t){var r=e.defs,o=e.instances,n={},i={};for(var a in r)t.defs[a]||(n[a]=r[a]);for(var l in o)!t.instances[l]&&n[o[l].defId]&&(i[l]=o[l]);return{defs:n,instances:i}}(e,t.eventStore);case"REMOVE_EVENT_SOURCE":return Nn(e,t.sourceId);case"REMOVE_ALL_EVENT_SOURCES":return Ur(e,(function(e){return!e.sourceId}));case"REMOVE_ALL_EVENTS":return{defs:{},instances:{}};default:return e}}function zn(e,t){var r;if(t){r=[];for(var o=0,n=e;o<n.length;o++){var i=n[o],a=t(i);a?r.push(a):null==a&&r.push(i)}}else r=e;return r}function Nn(e,t){return Ur(e,(function(e){return e.sourceId!==t}))}function Pn(e,t){var r=t.getCurrentData(),o=L({businessHours:r.businessHours,dateSelection:"",eventStore:r.eventStore,eventUiBases:r.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},e);return(t.pluginHooks.isPropsValid||Hn)(o,t)}function Hn(e,t,r,o){return void 0===r&&(r={}),!(e.eventDrag&&!function(e,t,r,o){var n=t.getCurrentData(),i=e.eventDrag,a=i.mutatedEvents,l=a.defs,s=a.instances,d=uo(l,i.isEvent?e.eventUiBases:{"":n.selectionConfig});o&&(d=jt(d,o));var c=(u=e.eventStore,h=i.affectedEvents.instances,{defs:u.defs,instances:Vt(u.instances,(function(e){return!h[e.instanceId]}))}),f=c.defs,p=c.instances,m=uo(f,e.eventUiBases);var u,h;for(var g in s){var b=s[g],v=b.range,x=d[b.defId],y=l[b.defId];if(!Ln(x.constraints,v,c,e.businessHours,t))return!1;var w=t.options.eventOverlap,k="function"==typeof w?w:null;for(var _ in p){var E=p[_];if(lo(v,E.range)){if(!1===m[E.defId].overlap&&i.isEvent)return!1;if(!1===x.overlap)return!1;if(k&&!k(new Uo(t,f[E.defId],E),new Uo(t,y,b)))return!1}}for(var A=n.eventStore,C=0,S=x.allows;C<S.length;C++){var D=S[C],T=L(L({},r),{range:b.range,allDay:y.allDay}),R=A.defs[y.defId],I=A.instances[g],M=void 0;if(M=R?new Uo(t,R,I):new Uo(t,y),!D(Ro(T,t),M))return!1}}return!0}(e,t,r,o))&&!(e.dateSelection&&!function(e,t,r,o){var n=e.eventStore,i=n.defs,a=n.instances,l=e.dateSelection,s=l.range,d=t.getCurrentData().selectionConfig;o&&(d=o(d));if(!Ln(d.constraints,s,n,e.businessHours,t))return!1;var c=t.options.selectOverlap,f="function"==typeof c?c:null;for(var p in a){var m=a[p];if(lo(s,m.range)){if(!1===d.overlap)return!1;if(f&&!f(new Uo(t,i[m.defId],m),null))return!1}}for(var u=0,h=d.allows;u<h.length;u++){if(!(0,h[u])(Ro(L(L({},r),l),t),null))return!1}return!0}(e,t,r,o))}function Ln(e,t,r,o,n){for(var i=0,a=e;i<a.length;i++){if(!Un(Bn(a[i],t,r,o,n),t))return!1}return!0}function Bn(e,t,r,o,n){return"businessHours"===e?Fn(Xt(o,t,n)):"string"==typeof e?Fn(Ur(r,(function(t){return t.groupId===e}))):"object"==typeof e&&e?Fn(Xt(e,t,n)):[]}function Fn(e){var t=e.instances,r=[];for(var o in t)r.push(t[o].range);return r}function Un(e,t){for(var r=0,o=e;r<o.length;r++){if(so(o[r],t))return!0}return!1}var Vn=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.uid=ht(),t}return H(t,e),t.prototype.prepareHits=function(){},t.prototype.queryHit=function(e,t,r,o){return null},t.prototype.isInteractionValid=function(e){var t=this.props.dateProfile,r=e.mutatedEvents.instances;if(t)for(var o in r)if(!so(t.validRange,r[o].range))return!1;return function(e,t){return Pn({eventDrag:e},t)}(e,this.context)},t.prototype.isDateSelectionValid=function(e){var t,r,o=this.props.dateProfile;return!(o&&!so(o.validRange,e.range))&&(t=e,r=this.context,Pn({dateSelection:t},r))},t.prototype.isValidSegDownEl=function(e){return!this.props.eventDrag&&!this.props.eventResize&&!it(e,".fc-event-mirror")},t.prototype.isValidDateDownEl=function(e){return!(it(e,".fc-event:not(.fc-bg-event)")||it(e,".fc-daygrid-more-link")||it(e,"a[data-navlink]")||it(e,".fc-popover"))},t}(Tn);function jn(e){return{id:ht(),deps:e.deps||[],reducers:e.reducers||[],isLoadingFuncs:e.isLoadingFuncs||[],contextInit:[].concat(e.contextInit||[]),eventRefiners:e.eventRefiners||{},eventDefMemberAdders:e.eventDefMemberAdders||[],eventSourceRefiners:e.eventSourceRefiners||{},isDraggableTransformers:e.isDraggableTransformers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],views:e.views||{},viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],eventResizeJoinTransforms:e.eventResizeJoinTransforms||[],viewContainerAppends:e.viewContainerAppends||[],eventDropTransformers:e.eventDropTransformers||[],componentInteractions:e.componentInteractions||[],calendarInteractions:e.calendarInteractions||[],themeClasses:e.themeClasses||{},eventSourceDefs:e.eventSourceDefs||[],cmdFormatter:e.cmdFormatter,recurringTypes:e.recurringTypes||[],namedTimeZonedImpl:e.namedTimeZonedImpl,initialView:e.initialView||"",elementDraggingImpl:e.elementDraggingImpl,optionChangeHandlers:e.optionChangeHandlers||{},scrollGridImpl:e.scrollGridImpl||null,contentTypeHandlers:e.contentTypeHandlers||{},listenerRefiners:e.listenerRefiners||{},optionRefiners:e.optionRefiners||{},propSetHandlers:e.propSetHandlers||{}}}function Wn(){var e,t=[],r=[];return function(o,n){return e&&cr(o,t)&&cr(n,r)||(e=function(e,t){var r={},o={reducers:[],isLoadingFuncs:[],contextInit:[],eventRefiners:{},eventDefMemberAdders:[],eventSourceRefiners:{},isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],eventResizeJoinTransforms:[],viewContainerAppends:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,initialView:"",elementDraggingImpl:null,optionChangeHandlers:{},scrollGridImpl:null,contentTypeHandlers:{},listenerRefiners:{},optionRefiners:{},propSetHandlers:{}};function n(e){for(var t=0,i=e;t<i.length;t++){var a=i[t];r[a.id]||(r[a.id]=!0,n(a.deps),s=a,o={reducers:(l=o).reducers.concat(s.reducers),isLoadingFuncs:l.isLoadingFuncs.concat(s.isLoadingFuncs),contextInit:l.contextInit.concat(s.contextInit),eventRefiners:L(L({},l.eventRefiners),s.eventRefiners),eventDefMemberAdders:l.eventDefMemberAdders.concat(s.eventDefMemberAdders),eventSourceRefiners:L(L({},l.eventSourceRefiners),s.eventSourceRefiners),isDraggableTransformers:l.isDraggableTransformers.concat(s.isDraggableTransformers),eventDragMutationMassagers:l.eventDragMutationMassagers.concat(s.eventDragMutationMassagers),eventDefMutationAppliers:l.eventDefMutationAppliers.concat(s.eventDefMutationAppliers),dateSelectionTransformers:l.dateSelectionTransformers.concat(s.dateSelectionTransformers),datePointTransforms:l.datePointTransforms.concat(s.datePointTransforms),dateSpanTransforms:l.dateSpanTransforms.concat(s.dateSpanTransforms),views:L(L({},l.views),s.views),viewPropsTransformers:l.viewPropsTransformers.concat(s.viewPropsTransformers),isPropsValid:s.isPropsValid||l.isPropsValid,externalDefTransforms:l.externalDefTransforms.concat(s.externalDefTransforms),eventResizeJoinTransforms:l.eventResizeJoinTransforms.concat(s.eventResizeJoinTransforms),viewContainerAppends:l.viewContainerAppends.concat(s.viewContainerAppends),eventDropTransformers:l.eventDropTransformers.concat(s.eventDropTransformers),calendarInteractions:l.calendarInteractions.concat(s.calendarInteractions),componentInteractions:l.componentInteractions.concat(s.componentInteractions),themeClasses:L(L({},l.themeClasses),s.themeClasses),eventSourceDefs:l.eventSourceDefs.concat(s.eventSourceDefs),cmdFormatter:s.cmdFormatter||l.cmdFormatter,recurringTypes:l.recurringTypes.concat(s.recurringTypes),namedTimeZonedImpl:s.namedTimeZonedImpl||l.namedTimeZonedImpl,initialView:l.initialView||s.initialView,elementDraggingImpl:l.elementDraggingImpl||s.elementDraggingImpl,optionChangeHandlers:L(L({},l.optionChangeHandlers),s.optionChangeHandlers),scrollGridImpl:s.scrollGridImpl||l.scrollGridImpl,contentTypeHandlers:L(L({},l.contentTypeHandlers),s.contentTypeHandlers),listenerRefiners:L(L({},l.listenerRefiners),s.listenerRefiners),optionRefiners:L(L({},l.optionRefiners),s.optionRefiners),propSetHandlers:L(L({},l.propSetHandlers),s.propSetHandlers)})}var l,s}return e&&n(e),n(t),o}(o,n)),t=o,r=n,e}}var qn=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t}(En);function Gn(e,t,r,o){if(t[e])return t[e];var n=function(e,t,r,o){var n=r[e],i=o[e],a=function(e){return n&&null!==n[e]?n[e]:i&&null!==i[e]?i[e]:null},l=a("component"),s=a("superType"),d=null;if(s){if(s===e)throw new Error("Can't have a custom view type that references itself");d=Gn(s,t,r,o)}!l&&d&&(l=d.component);if(!l)return null;return{type:e,component:l,defaults:L(L({},d?d.defaults:{}),n?n.rawOptions:{}),overrides:L(L({},d?d.overrides:{}),i?i.rawOptions:{})}}(e,t,r,o);return n&&(t[e]=n),n}qn.prototype.classes={root:"fc-theme-standard",tableCellShaded:"fc-cell-shaded",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active"},qn.prototype.baseIconClass="fc-icon",qn.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"},qn.prototype.rtlIconClasses={prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"},qn.prototype.iconOverrideOption="buttonIcons",qn.prototype.iconOverrideCustomButtonOption="icon",qn.prototype.iconOverridePrefix="fc-icon-";var Yn=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=Je(),t.handleRootEl=function(e){Mn(t.rootElRef,e),t.props.elRef&&Mn(t.props.elRef,e)},t}return H(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.hookProps;return Xe(Zn,{hookProps:r,didMount:t.didMount,willUnmount:t.willUnmount,elRef:this.handleRootEl},(function(o){return Xe(Qn,{hookProps:r,content:t.content,defaultContent:t.defaultContent,backupElRef:e.rootElRef},(function(e,n){return t.children(o,Kn(t.classNames,r),e,n)}))}))},t}(Tn),$n=et(0);function Qn(e){return Xe($n.Consumer,null,(function(t){return Xe(Xn,L({renderId:t},e))}))}var Xn=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.innerElRef=Je(),t}return H(t,e),t.prototype.render=function(){return this.props.children(this.innerElRef,this.renderInnerContent())},t.prototype.componentDidMount=function(){this.updateCustomContent()},t.prototype.componentDidUpdate=function(){this.updateCustomContent()},t.prototype.componentWillUnmount=function(){this.customContentInfo&&this.customContentInfo.destroy&&this.customContentInfo.destroy()},t.prototype.renderInnerContent=function(){var e=this.context.pluginHooks.contentTypeHandlers,t=this.props,r=this.customContentInfo,o=ei(t.content,t.hookProps),n=null;if(void 0===o&&(o=ei(t.defaultContent,t.hookProps)),void 0!==o){if(r)r.contentVal=o[r.contentKey];else if("object"==typeof o)for(var i in e)if(void 0!==o[i]){var a=e[i]();r=this.customContentInfo=L({contentKey:i,contentVal:o[i]},a);break}n=r?[]:o}return n},t.prototype.updateCustomContent=function(){this.customContentInfo&&this.customContentInfo.render(this.innerElRef.current||this.props.backupElRef.current,this.customContentInfo.contentVal)},t}(Tn),Zn=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleRootEl=function(e){t.rootEl=e,t.props.elRef&&Mn(t.props.elRef,e)},t}return H(t,e),t.prototype.render=function(){return this.props.children(this.handleRootEl)},t.prototype.componentDidMount=function(){var e=this.props.didMount;e&&e(L(L({},this.props.hookProps),{el:this.rootEl}))},t.prototype.componentWillUnmount=function(){var e=this.props.willUnmount;e&&e(L(L({},this.props.hookProps),{el:this.rootEl}))},t}(Tn);function Jn(){var e,t,r=[];return function(o,n){return t&&Gt(t,n)&&o===e||(e=o,t=n,r=Kn(o,n)),r}}function Kn(e,t){return"function"==typeof e&&(e=e(t)),Vr(e)}function ei(e,t){return"function"==typeof e?e(t,Xe):e}var ti=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.normalizeClassNames=Jn(),t}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context,r=t.options,o={view:t.viewApi},n=this.normalizeClassNames(r.viewClassNames,o);return Xe(Zn,{hookProps:o,didMount:r.viewDidMount,willUnmount:r.viewWillUnmount,elRef:e.elRef},(function(t){return e.children(t,["fc-"+e.viewSpec.type+"-view","fc-view"].concat(n))}))},t}(Tn);function ri(e){return jt(e,oi)}function oi(e){var t,r="function"==typeof e?{component:e}:e,o=r.component;return r.content&&(t=r,o=function(e){return Xe(Cn.Consumer,null,(function(r){return Xe(ti,{viewSpec:r.viewSpec},(function(o,n){var i=L(L({},e),{nextDayThreshold:r.options.nextDayThreshold});return Xe(Yn,{hookProps:i,classNames:t.classNames,content:t.content,didMount:t.didMount,willUnmount:t.willUnmount,elRef:o},(function(e,t,r,o){return Xe("div",{className:n.concat(t).join(" "),ref:e},o)}))}))}))}),{superType:r.type,component:o,rawOptions:r}}function ni(e,t,r,o){var n=ri(e),i=ri(t.views);return jt(function(e,t){var r,o={};for(r in e)Gn(r,o,e,t);for(r in t)Gn(r,o,e,t);return o}(n,i),(function(e){return function(e,t,r,o,n){var i=e.overrides.duration||e.defaults.duration||o.duration||r.duration,a=null,l="",s="",d={};if(i&&(a=function(e){var t=JSON.stringify(e),r=ii[t];void 0===r&&(r=er(e),ii[t]=r);return r}(i))){var c=ar(a);l=c.unit,1===c.value&&(s=l,d=t[l]?t[l].rawOptions:{})}var f=function(t){var r=t.buttonText||{},o=e.defaults.buttonTextKey;return null!=o&&null!=r[o]?r[o]:null!=r[e.type]?r[e.type]:null!=r[s]?r[s]:null};return{type:e.type,component:e.component,duration:a,durationUnit:l,singleUnit:s,optionDefaults:e.defaults,optionOverrides:L(L({},d),e.overrides),buttonTextOverride:f(o)||f(r)||e.overrides.buttonText,buttonTextDefault:f(n)||e.defaults.buttonText||f(Dr)||e.type}}(e,i,t,r,o)}))}var ii={};var ai=function(){function e(e){this.props=e,this.nowDate=Bo(e.nowInput,e.dateEnv),this.initHiddenDays()}return e.prototype.buildPrev=function(e,t,r){var o=this.props.dateEnv,n=o.subtract(o.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(n,-1,r)},e.prototype.buildNext=function(e,t,r){var o=this.props.dateEnv,n=o.add(o.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(n,1,r)},e.prototype.build=function(e,t,r){void 0===r&&(r=!0);var o,n,i,a,l,s,d,c,f=this.props;return o=this.buildValidRange(),o=this.trimHiddenDays(o),r&&(d=e,e=null!=(c=o).start&&d<c.start?c.start:null!=c.end&&d>=c.end?new Date(c.end.valueOf()-1):d),n=this.buildCurrentRangeInfo(e,t),i=/^(year|month|week|day)$/.test(n.unit),a=this.buildRenderRange(this.trimHiddenDays(n.range),n.unit,i),l=a=this.trimHiddenDays(a),f.showNonCurrentDates||(l=ao(l,n.range)),l=ao(l=this.adjustActiveRange(l),o),s=lo(n.range,o),{validRange:o,currentRange:n.range,currentRangeUnit:n.unit,isRangeAllDay:i,activeRange:l,renderRange:a,slotMinTime:f.slotMinTime,slotMaxTime:f.slotMaxTime,isValid:s,dateIncrement:this.buildDateIncrement(n.duration)}},e.prototype.buildValidRange=function(){var e=this.props.validRangeInput,t="function"==typeof e?e.call(this.props.calendarApi,this.nowDate):e;return this.refineRange(t)||{start:null,end:null}},e.prototype.buildCurrentRangeInfo=function(e,t){var r,o=this.props,n=null,i=null,a=null;return o.duration?(n=o.duration,i=o.durationUnit,a=this.buildRangeFromDuration(e,t,n,i)):(r=this.props.dayCount)?(i="day",a=this.buildRangeFromDayCount(e,t,r)):(a=this.buildCustomVisibleRange(e))?i=o.dateEnv.greatestWholeUnit(a.start,a.end).unit:(i=ar(n=this.getFallbackDuration()).unit,a=this.buildRangeFromDuration(e,t,n,i)),{duration:n,unit:i,range:a}},e.prototype.getFallbackDuration=function(){return er({day:1})},e.prototype.adjustActiveRange=function(e){var t=this.props,r=t.dateEnv,o=t.usesMinMaxTime,n=t.slotMinTime,i=t.slotMaxTime,a=e.start,l=e.end;return o&&(or(n)<0&&(a=Rt(a),a=r.add(a,n)),or(i)>1&&(l=Ct(l=Rt(l),-1),l=r.add(l,i))),{start:a,end:l}},e.prototype.buildRangeFromDuration=function(e,t,r,o){var n,i,a,l=this.props,s=l.dateEnv,d=l.dateAlignment;if(!d){var c=this.props.dateIncrement;d=c&&nr(c)<nr(r)?ar(c).unit:o}function f(){n=s.startOf(e,d),i=s.add(n,r),a={start:n,end:i}}return or(r)<=1&&this.isHiddenDay(n)&&(n=Rt(n=this.skipHiddenDays(n,t))),f(),this.trimHiddenDays(a)||(e=this.skipHiddenDays(e,t),f()),a},e.prototype.buildRangeFromDayCount=function(e,t,r){var o,n=this.props,i=n.dateEnv,a=n.dateAlignment,l=0,s=e;a&&(s=i.startOf(s,a)),s=Rt(s),o=s=this.skipHiddenDays(s,t);do{o=Ct(o,1),this.isHiddenDay(o)||(l+=1)}while(l<r);return{start:s,end:o}},e.prototype.buildCustomVisibleRange=function(e){var t=this.props,r=t.visibleRangeInput,o="function"==typeof r?r.call(t.calendarApi,t.dateEnv.toDate(e)):r,n=this.refineRange(o);return!n||null!=n.start&&null!=n.end?n:null},e.prototype.buildRenderRange=function(e,t,r){return e},e.prototype.buildDateIncrement=function(e){var t,r=this.props.dateIncrement;return r||((t=this.props.dateAlignment)?er(1,t):e||er({days:1}))},e.prototype.refineRange=function(e){if(e){var t=(r=e,o=this.props.dateEnv,n=null,i=null,r.start&&(n=o.createMarker(r.start)),r.end&&(i=o.createMarker(r.end)),n||i?n&&i&&i<n?null:{start:n,end:i}:null);return t&&(t=ro(t)),t}var r,o,n,i;return null},e.prototype.initHiddenDays=function(){var e,t=this.props.hiddenDays||[],r=[],o=0;for(!1===this.props.weekends&&t.push(0,6),e=0;e<7;e+=1)(r[e]=-1!==t.indexOf(e))||(o+=1);if(!o)throw new Error("invalid hiddenDays");this.isHiddenDayHash=r},e.prototype.trimHiddenDays=function(e){var t=e.start,r=e.end;return t&&(t=this.skipHiddenDays(t)),r&&(r=this.skipHiddenDays(r,-1,!0)),null==t||null==r||t<r?{start:t,end:r}:null},e.prototype.isHiddenDay=function(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]},e.prototype.skipHiddenDays=function(e,t,r){for(void 0===t&&(t=1),void 0===r&&(r=!1);this.isHiddenDayHash[(e.getUTCDay()+(r?t:0)+7)%7];)e=Ct(e,t);return e},e}();function li(e,t,r){var o=t?t.activeRange:null;return ci({},function(e,t){var r=Lo(t),o=[].concat(e.eventSources||[]),n=[];e.initialEvents&&o.unshift(e.initialEvents);e.events&&o.unshift(e.events);for(var i=0,a=o;i<a.length;i++){var l=Ho(a[i],t,r);l&&n.push(l)}return n}(e,r),o,r)}function si(e,t,r,o){var n,i,a=r?r.activeRange:null;switch(t.type){case"ADD_EVENT_SOURCES":return ci(e,t.sources,a,o);case"REMOVE_EVENT_SOURCE":return n=e,i=t.sourceId,Vt(n,(function(e){return e.sourceId!==i}));case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return r?fi(e,a,o):e;case"FETCH_EVENT_SOURCES":return pi(e,t.sourceIds?Wt(t.sourceIds):ui(e,o),a,o);case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return function(e,t,r,o){var n,i=e[t];if(i&&r===i.latestFetchId)return L(L({},e),((n={})[t]=L(L({},i),{isFetching:!1,fetchRange:o}),n));return e}(e,t.sourceId,t.fetchId,t.fetchRange);case"REMOVE_ALL_EVENT_SOURCES":return{};default:return e}}function di(e){for(var t in e)if(e[t].isFetching)return!0;return!1}function ci(e,t,r,o){for(var n={},i=0,a=t;i<a.length;i++){var l=a[i];n[l.sourceId]=l}return r&&(n=fi(n,r,o)),L(L({},e),n)}function fi(e,t,r){return pi(e,Vt(e,(function(e){return function(e,t,r){if(!hi(e,r))return!e.latestFetchId;return!r.options.lazyFetching||!e.fetchRange||e.isFetching||t.start<e.fetchRange.start||t.end>e.fetchRange.end}(e,t,r)})),t,r)}function pi(e,t,r,o){var n={};for(var i in e){var a=e[i];t[i]?n[i]=mi(a,r,o):n[i]=a}return n}function mi(e,t,r){var o=r.options,n=r.calendarApi,i=r.pluginHooks.eventSourceDefs[e.sourceDefId],a=ht();return i.fetch({eventSource:e,range:t,context:r},(function(i){var l=i.rawEvents;o.eventSourceSuccess&&(l=o.eventSourceSuccess.call(n,l,i.xhr)||l),e.success&&(l=e.success.call(n,l,i.xhr)||l),r.dispatch({type:"RECEIVE_EVENTS",sourceId:e.sourceId,fetchId:a,fetchRange:t,rawEvents:l})}),(function(i){console.warn(i.message,i),o.eventSourceFailure&&o.eventSourceFailure.call(n,i),e.failure&&e.failure(i),r.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:e.sourceId,fetchId:a,fetchRange:t,error:i})})),L(L({},e),{isFetching:!0,latestFetchId:a})}function ui(e,t){return Vt(e,(function(e){return hi(e,t)}))}function hi(e,t){return!t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange}function gi(e,t){switch(t.type){case"UNSELECT_DATES":return null;case"SELECT_DATES":return t.selection;default:return e}}function bi(e,t){switch(t.type){case"UNSELECT_EVENT":return"";case"SELECT_EVENT":return t.eventInstanceId;default:return e}}function vi(e,t){var r;switch(t.type){case"UNSET_EVENT_DRAG":return null;case"SET_EVENT_DRAG":return{affectedEvents:(r=t.state).affectedEvents,mutatedEvents:r.mutatedEvents,isEvent:r.isEvent};default:return e}}function xi(e,t){var r;switch(t.type){case"UNSET_EVENT_RESIZE":return null;case"SET_EVENT_RESIZE":return{affectedEvents:(r=t.state).affectedEvents,mutatedEvents:r.mutatedEvents,isEvent:r.isEvent};default:return e}}function yi(e,t,r,o,n){var i=[];return{headerToolbar:e.headerToolbar?wi(e.headerToolbar,e,t,r,o,n,i):null,footerToolbar:e.footerToolbar?wi(e.footerToolbar,e,t,r,o,n,i):null,viewsWithButtons:i}}function wi(e,t,r,o,n,i,a){return jt(e,(function(e){return function(e,t,r,o,n,i,a){var l="rtl"===t.direction,s=t.customButtons||{},d=r.buttonText||{},c=t.buttonText||{};return(e?e.split(" "):[]).map((function(e){return e.split(",").map((function(e){return"title"===e?{buttonName:e}:((t=s[e])?(f=function(e){t.click&&t.click.call(e.target,e,e.target)},(p=o.getCustomButtonIconClass(t))||(p=o.getIconClass(e,l))||(m=t.text)):(r=n[e])?(a.push(e),f=function(){i.changeView(e)},(m=r.buttonTextOverride)||(p=o.getIconClass(e,l))||(m=r.buttonTextDefault)):i[e]&&(f=function(){i[e]()},(m=d[e])||(p=o.getIconClass(e,l))||(m=c[e])),{buttonName:e,buttonClick:f,buttonIcon:p,buttonText:m});var t,r,f,p,m}))}))}(e,t,r,o,n,i,a)}))}function ki(e,t,r,o,n){var i=null;"GET"===(e=e.toUpperCase())?t=function(e,t){return e+(-1===e.indexOf("?")?"?":"&")+_i(t)}(t,r):i=_i(r);var a=new XMLHttpRequest;a.open(e,t,!0),"GET"!==e&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onload=function(){if(a.status>=200&&a.status<400){var e=!1,t=void 0;try{t=JSON.parse(a.responseText),e=!0}catch(e){}e?o(t,a):n("Failure parsing JSON",a)}else n("Request failed",a)},a.onerror=function(){n("Request failed",a)},a.send(i)}function _i(e){var t=[];for(var r in e)t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")}function Ei(e,t){for(var r=qt(t.getCurrentData().eventSources),o=[],n=0,i=e;n<i.length;n++){for(var a=i[n],l=!1,s=0;s<r.length;s+=1)if(r[s]._raw===a){r.splice(s,1),l=!0;break}l||o.push(a)}for(var d=0,c=r;d<c.length;d++){var f=c[d];t.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:f.sourceId})}for(var p=0,m=o;p<m.length;p++){var u=m[p];t.calendarApi.addEventSource(u)}}var Ai=[jn({eventSourceDefs:[{ignoreRange:!0,parseMeta:function(e){return Array.isArray(e.events)?e.events:null},fetch:function(e,t){t({rawEvents:e.eventSource.meta})}}]}),jn({eventSourceDefs:[{parseMeta:function(e){return"function"==typeof e.events?e.events:null},fetch:function(e,t,r){var o=e.context.dateEnv;!function(e,t,r){var o=!1,n=function(){o||(o=!0,t.apply(this,arguments))},i=function(){o||(o=!0,r&&r.apply(this,arguments))},a=e(n,i);a&&"function"==typeof a.then&&a.then(n,i)}(e.eventSource.meta.bind(null,Co(e.range,o)),(function(e){t({rawEvents:e})}),r)}}]}),jn({eventSourceRefiners:{method:String,extraParams:Pr,startParam:String,endParam:String,timeZoneParam:String},eventSourceDefs:[{parseMeta:function(e){return!e.url||"json"!==e.format&&e.format?null:{url:e.url,format:"json",method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}},fetch:function(e,t,r){var o=e.eventSource.meta,n=function(e,t,r){var o,n,i,a,l=r.dateEnv,s=r.options,d={};null==(o=e.startParam)&&(o=s.startParam);null==(n=e.endParam)&&(n=s.endParam);null==(i=e.timeZoneParam)&&(i=s.timeZoneParam);a="function"==typeof e.extraParams?e.extraParams():e.extraParams||{};L(d,a),d[o]=l.formatIso(t.start),d[n]=l.formatIso(t.end),"local"!==l.timeZone&&(d[i]=l.timeZone);return d}(o,e.range,e.context);ki(o.method,o.url,n,(function(e,r){t({rawEvents:e,xhr:r})}),(function(e,t){r({message:e,xhr:t})}))}}]}),jn({recurringTypes:[{parse:function(e,t){if(e.daysOfWeek||e.startTime||e.endTime||e.startRecur||e.endRecur){var r={daysOfWeek:e.daysOfWeek||null,startTime:e.startTime||null,endTime:e.endTime||null,startRecur:e.startRecur?t.createMarker(e.startRecur):null,endRecur:e.endRecur?t.createMarker(e.endRecur):null},o=void 0;return e.duration&&(o=e.duration),!o&&e.startTime&&e.endTime&&(n=e.endTime,i=e.startTime,o={years:n.years-i.years,months:n.months-i.months,days:n.days-i.days,milliseconds:n.milliseconds-i.milliseconds}),{allDayGuess:Boolean(!e.startTime&&!e.endTime),duration:o,typeData:r}}var n,i;return null},expand:function(e,t,r){var o=ao(t,{start:e.startRecur,end:e.endRecur});return o?function(e,t,r,o){var n=e?Wt(e):null,i=Rt(r.start),a=r.end,l=[];for(;i<a;){var s=void 0;n&&!n[i.getUTCDay()]||(s=t?o.add(i,t):i,l.push(s)),i=Ct(i,1)}return l}(e.daysOfWeek,e.startTime,o,r):[]}}],eventRefiners:{daysOfWeek:Pr,startTime:er,endTime:er,duration:er,startRecur:Pr,endRecur:Pr}}),jn({optionChangeHandlers:{events:function(e,t){Ei([e],t)},eventSources:Ei}}),jn({isLoadingFuncs:[function(e){return di(e.eventSources)}],contentTypeHandlers:{html:function(){return{render:Ci}},domNodes:function(){return{render:Si}}},propSetHandlers:{dateProfile:function(e,t){t.emitter.trigger("datesSet",L(L({},Co(e.activeRange,t.dateEnv)),{view:t.viewApi}))},eventStore:function(e,t){var r=t.emitter;r.hasHandlers("eventsSet")&&r.trigger("eventsSet",jo(e,t))}}})];function Ci(e,t){e.innerHTML=t}function Si(e,t){var r=Array.prototype.slice.call(e.childNodes),o=Array.prototype.slice.call(t);if(!cr(r,o)){for(var n=0,i=o;n<i.length;n++){var a=i[n];e.appendChild(a)}r.forEach(nt)}}var Di=function(){function e(e){this.drainedOption=e,this.isRunning=!1,this.isDirty=!1,this.pauseDepths={},this.timeoutId=0}return e.prototype.request=function(e){this.isDirty=!0,this.isPaused()||(this.clearTimeout(),null==e?this.tryDrain():this.timeoutId=setTimeout(this.tryDrain.bind(this),e))},e.prototype.pause=function(e){void 0===e&&(e="");var t=this.pauseDepths;t[e]=(t[e]||0)+1,this.clearTimeout()},e.prototype.resume=function(e,t){void 0===e&&(e="");var r=this.pauseDepths;if(e in r){if(t)delete r[e];else r[e]-=1,r[e]<=0&&delete r[e];this.tryDrain()}},e.prototype.isPaused=function(){return Object.keys(this.pauseDepths).length},e.prototype.tryDrain=function(){if(!this.isRunning&&!this.isPaused()){for(this.isRunning=!0;this.isDirty;)this.isDirty=!1,this.drained();this.isRunning=!1}},e.prototype.clear=function(){this.clearTimeout(),this.isDirty=!1,this.pauseDepths={}},e.prototype.clearTimeout=function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=0)},e.prototype.drained=function(){this.drainedOption&&this.drainedOption()},e}(),Ti=function(){function e(e,t){this.runTaskOption=e,this.drainedOption=t,this.queue=[],this.delayedRunner=new Di(this.drain.bind(this))}return e.prototype.request=function(e,t){this.queue.push(e),this.delayedRunner.request(t)},e.prototype.pause=function(e){this.delayedRunner.pause(e)},e.prototype.resume=function(e,t){this.delayedRunner.resume(e,t)},e.prototype.drain=function(){for(var e=this.queue;e.length;){for(var t=[],r=void 0;r=e.shift();)this.runTask(r),t.push(r);this.drained(t)}},e.prototype.runTask=function(e){this.runTaskOption&&this.runTaskOption(e)},e.prototype.drained=function(e){this.drainedOption&&this.drainedOption(e)},e}();function Ri(e,t,r){var o;return o=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,r.formatRange(o.start,o.end,Cr(t.titleFormat||function(e){var t=e.currentRangeUnit;if("year"===t)return{year:"numeric"};if("month"===t)return{year:"numeric",month:"long"};var r=Tt(e.currentRange.start,e.currentRange.end);if(null!==r&&r>1)return{year:"numeric",month:"short",day:"numeric"};return{year:"numeric",month:"long",day:"numeric"}}(e)),{isEndExclusive:e.isRangeAllDay,defaultSeparator:t.titleRangeSeparator})}var Ii=function(){function e(e){var t=this;this.computeOptionsData=fr(this._computeOptionsData),this.computeCurrentViewData=fr(this._computeCurrentViewData),this.organizeRawLocales=fr(Zo),this.buildLocale=fr(Jo),this.buildPluginHooks=Wn(),this.buildDateEnv=fr(Mi),this.buildTheme=fr(Oi),this.parseToolbars=fr(yi),this.buildViewSpecs=fr(ni),this.buildDateProfileGenerator=pr(zi),this.buildViewApi=fr(Ni),this.buildViewUiProps=pr(Li),this.buildEventUiBySource=fr(Pi,Gt),this.buildEventUiBases=fr(Hi),this.parseContextBusinessHours=pr(Fi),this.buildTitle=fr(Ri),this.emitter=new xn,this.actionRunner=new Ti(this._handleAction.bind(this),this.updateData.bind(this)),this.currentCalendarOptionsInput={},this.currentCalendarOptionsRefined={},this.currentViewOptionsInput={},this.currentViewOptionsRefined={},this.currentCalendarOptionsRefiners={},this.getCurrentData=function(){return t.data},this.dispatch=function(e){t.actionRunner.request(e)},this.props=e,this.actionRunner.pause();var r={},o=this.computeOptionsData(e.optionOverrides,r,e.calendarApi),n=o.calendarOptions.initialView||o.pluginHooks.initialView,i=this.computeCurrentViewData(n,o,e.optionOverrides,r);e.calendarApi.currentDataManager=this,this.emitter.setThisContext(e.calendarApi),this.emitter.setOptions(i.options);var a,l,s,d=(a=o.calendarOptions,l=o.dateEnv,null!=(s=a.initialDate)?l.createMarker(s):Bo(a.now,l)),c=i.dateProfileGenerator.build(d);co(c.activeRange,d)||(d=c.currentRange.start);for(var f={dateEnv:o.dateEnv,options:o.calendarOptions,pluginHooks:o.pluginHooks,calendarApi:e.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},p=0,m=o.pluginHooks.contextInit;p<m.length;p++){(0,m[p])(f)}for(var u=li(o.calendarOptions,c,f),h={dynamicOptionOverrides:r,currentViewType:n,currentDate:d,dateProfile:c,businessHours:this.parseContextBusinessHours(f),eventSources:u,eventUiBases:{},eventStore:{defs:{},instances:{}},renderableEventStore:{defs:{},instances:{}},dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null,selectionConfig:this.buildViewUiProps(f).selectionConfig},g=L(L({},f),h),b=0,v=o.pluginHooks.reducers;b<v.length;b++){var x=v[b];L(h,x(null,null,g))}Bi(h,f)&&this.emitter.trigger("loading",!0),this.state=h,this.updateData(),this.actionRunner.resume()}return e.prototype.resetOptions=function(e,t){var r=this.props;r.optionOverrides=t?L(L({},r.optionOverrides),e):e,this.actionRunner.request({type:"NOTHING"})},e.prototype._handleAction=function(e){var t=this,r=t.props,o=t.state,n=t.emitter,i=function(e,t){var r;switch(t.type){case"SET_OPTION":return L(L({},e),((r={})[t.optionName]=t.rawOptionValue,r));default:return e}}(o.dynamicOptionOverrides,e),a=this.computeOptionsData(r.optionOverrides,i,r.calendarApi),l=function(e,t){switch(t.type){case"CHANGE_VIEW_TYPE":e=t.viewType}return e}(o.currentViewType,e),s=this.computeCurrentViewData(l,a,r.optionOverrides,i);r.calendarApi.currentDataManager=this,n.setThisContext(r.calendarApi),n.setOptions(s.options);var d={dateEnv:a.dateEnv,options:a.calendarOptions,pluginHooks:a.pluginHooks,calendarApi:r.calendarApi,dispatch:this.dispatch,emitter:n,getCurrentData:this.getCurrentData},c=o.currentDate,f=o.dateProfile;this.data&&this.data.dateProfileGenerator!==s.dateProfileGenerator&&(f=s.dateProfileGenerator.build(c)),f=function(e,t,r,o){var n;switch(t.type){case"CHANGE_VIEW_TYPE":return o.build(t.dateMarker||r);case"CHANGE_DATE":if(!e.activeRange||!co(e.currentRange,t.dateMarker))return o.build(t.dateMarker);break;case"PREV":if((n=o.buildPrev(e,r)).isValid)return n;break;case"NEXT":if((n=o.buildNext(e,r)).isValid)return n}return e}(f,e,c=function(e,t){switch(t.type){case"CHANGE_DATE":return t.dateMarker;default:return e}}(c,e),s.dateProfileGenerator),co(f.currentRange,c)||(c=f.currentRange.start);for(var p=si(o.eventSources,e,f,d),m=On(o.eventStore,e,p,f,d),u=di(p)&&!s.options.progressiveEventRendering&&o.renderableEventStore||m,h=this.buildViewUiProps(d),g=h.eventUiSingleBase,b=h.selectionConfig,v=this.buildEventUiBySource(p),x={dynamicOptionOverrides:i,currentViewType:l,currentDate:c,dateProfile:f,eventSources:p,eventStore:m,renderableEventStore:u,selectionConfig:b,eventUiBases:this.buildEventUiBases(u.defs,g,v),businessHours:this.parseContextBusinessHours(d),dateSelection:gi(o.dateSelection,e),eventSelection:bi(o.eventSelection,e),eventDrag:vi(o.eventDrag,e),eventResize:xi(o.eventResize,e)},y=L(L({},d),x),w=0,k=a.pluginHooks.reducers;w<k.length;w++){var _=k[w];L(x,_(o,e,y))}var E=Bi(o,d),A=Bi(x,d);!E&&A?n.trigger("loading",!0):E&&!A&&n.trigger("loading",!1),this.state=x,r.onAction&&r.onAction(e)},e.prototype.updateData=function(){var e,t,r,o,n,i,a,l,s,d=this.props,c=this.state,f=this.data,p=this.computeOptionsData(d.optionOverrides,c.dynamicOptionOverrides,d.calendarApi),m=this.computeCurrentViewData(c.currentViewType,p,d.optionOverrides,c.dynamicOptionOverrides),u=this.data=L(L(L({viewTitle:this.buildTitle(c.dateProfile,m.options,p.dateEnv),calendarApi:d.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},p),m),c),h=p.pluginHooks.optionChangeHandlers,g=f&&f.calendarOptions,b=p.calendarOptions;if(g&&g!==b)for(var v in g.timeZone!==b.timeZone&&(c.eventSources=u.eventSources=(i=u.eventSources,a=c.dateProfile,l=u,s=a?a.activeRange:null,pi(i,ui(i,l),s,l)),c.eventStore=u.eventStore=(e=u.eventStore,t=f.dateEnv,r=u.dateEnv,o=e.defs,n=jt(e.instances,(function(e){var n=o[e.defId];return n.allDay||n.recurringDef?e:L(L({},e),{range:{start:r.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:r.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:r.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:r.canComputeOffset?null:e.forcedEndTzo})})),{defs:o,instances:n})),h)g[v]!==b[v]&&h[v](b[v],u);d.onData&&d.onData(u)},e.prototype._computeOptionsData=function(e,t,r){var o=this.processRawCalendarOptions(e,t),n=o.refinedOptions,i=o.pluginHooks,a=o.localeDefaults,l=o.availableLocaleData;Ui(o.extra);var s=this.buildDateEnv(n.timeZone,n.locale,n.weekNumberCalculation,n.firstDay,n.weekText,i,l,n.defaultRangeSeparator),d=this.buildViewSpecs(i.views,e,t,a),c=this.buildTheme(n,i);return{calendarOptions:n,pluginHooks:i,dateEnv:s,viewSpecs:d,theme:c,toolbarConfig:this.parseToolbars(n,e,c,d,r),localeDefaults:a,availableRawLocales:l.map}},e.prototype.processRawCalendarOptions=function(e,t){var r=zr([Dr,e,t]),o=r.locales,n=r.locale,i=this.organizeRawLocales(o),a=i.map,l=this.buildLocale(n||i.defaultCode,a).options,s=this.buildPluginHooks(e.plugins||[],Ai),d=this.currentCalendarOptionsRefiners=L(L(L(L(L({},Sr),Tr),Rr),s.listenerRefiners),s.optionRefiners),c={},f=zr([Dr,l,e,t]),p={},m=this.currentCalendarOptionsInput,u=this.currentCalendarOptionsRefined,h=!1;for(var g in f)"plugins"!==g&&(f[g]===m[g]||Ir[g]&&g in m&&Ir[g](m[g],f[g])?p[g]=u[g]:d[g]?(p[g]=d[g](f[g]),h=!0):c[g]=m[g]);return h&&(this.currentCalendarOptionsInput=f,this.currentCalendarOptionsRefined=p),{rawOptions:this.currentCalendarOptionsInput,refinedOptions:this.currentCalendarOptionsRefined,pluginHooks:s,availableLocaleData:i,localeDefaults:l,extra:c}},e.prototype._computeCurrentViewData=function(e,t,r,o){var n=t.viewSpecs[e];if(!n)throw new Error('viewType "'+e+"\" is not available. Please make sure you've loaded all neccessary plugins");var i=this.processRawViewOptions(n,t.pluginHooks,t.localeDefaults,r,o),a=i.refinedOptions;return Ui(i.extra),{viewSpec:n,options:a,dateProfileGenerator:this.buildDateProfileGenerator({dateProfileGeneratorClass:n.optionDefaults.dateProfileGeneratorClass,duration:n.duration,durationUnit:n.durationUnit,usesMinMaxTime:n.optionDefaults.usesMinMaxTime,dateEnv:t.dateEnv,calendarApi:this.props.calendarApi,slotMinTime:a.slotMinTime,slotMaxTime:a.slotMaxTime,showNonCurrentDates:a.showNonCurrentDates,dayCount:a.dayCount,dateAlignment:a.dateAlignment,dateIncrement:a.dateIncrement,hiddenDays:a.hiddenDays,weekends:a.weekends,nowInput:a.now,validRangeInput:a.validRange,visibleRangeInput:a.visibleRange,monthMode:a.monthMode,fixedWeekCount:a.fixedWeekCount}),viewApi:this.buildViewApi(e,this.getCurrentData,t.dateEnv)}},e.prototype.processRawViewOptions=function(e,t,r,o,n){var i=zr([Dr,e.optionDefaults,r,o,e.optionOverrides,n]),a=L(L(L(L(L(L({},Sr),Tr),Rr),Or),t.listenerRefiners),t.optionRefiners),l={},s=this.currentViewOptionsInput,d=this.currentViewOptionsRefined,c=!1,f={};for(var p in i)i[p]===s[p]?l[p]=d[p]:(i[p]===this.currentCalendarOptionsInput[p]?p in this.currentCalendarOptionsRefined&&(l[p]=this.currentCalendarOptionsRefined[p]):a[p]?l[p]=a[p](i[p]):f[p]=i[p],c=!0);return c&&(this.currentViewOptionsInput=i,this.currentViewOptionsRefined=l),{rawOptions:this.currentViewOptionsInput,refinedOptions:this.currentViewOptionsRefined,extra:f}},e}();function Mi(e,t,r,o,n,i,a,l){var s=Jo(t||a.defaultCode,a.map);return new $o({calendarSystem:"gregory",timeZone:e,namedTimeZoneImpl:i.namedTimeZonedImpl,locale:s,weekNumberCalculation:r,firstDay:o,weekText:n,cmdFormatter:i.cmdFormatter,defaultSeparator:l})}function Oi(e,t){return new(t.themeClasses[e.themeSystem]||qn)(e)}function zi(e){return new(e.dateProfileGeneratorClass||ai)(e)}function Ni(e,t,r){return new No(e,t,r)}function Pi(e){return jt(e,(function(e){return e.ui}))}function Hi(e,t,r){var o={"":t};for(var n in e){var i=e[n];i.sourceId&&r[i.sourceId]&&(o[n]=r[i.sourceId])}return o}function Li(e){var t=e.options;return{eventUiSingleBase:qr({display:t.eventDisplay,editable:t.editable,startEditable:t.eventStartEditable,durationEditable:t.eventDurationEditable,constraint:t.eventConstraint,overlap:"boolean"==typeof t.eventOverlap?t.eventOverlap:void 0,allow:t.eventAllow,backgroundColor:t.eventBackgroundColor,borderColor:t.eventBorderColor,textColor:t.eventTextColor,color:t.eventColor},e),selectionConfig:qr({constraint:t.selectConstraint,overlap:"boolean"==typeof t.selectOverlap?t.selectOverlap:void 0,allow:t.selectAllow},e)}}function Bi(e,t){for(var r=0,o=t.pluginHooks.isLoadingFuncs;r<o.length;r++){if((0,o[r])(e))return!0}return!1}function Fi(e){return rn(e.options.businessHours,e)}function Ui(e,t){for(var r in e)console.warn("Unknown option '"+r+"'"+(t?" for view '"+t+"'":""))}!function(e){function t(t){var r=e.call(this,t)||this;return r.handleData=function(e){r.dataManager?r.setState(e):r.state=e},r.dataManager=new Ii({optionOverrides:t.optionOverrides,calendarApi:t.calendarApi,onData:r.handleData}),r}H(t,e),t.prototype.render=function(){return this.props.children(this.state)},t.prototype.componentDidUpdate=function(e){var t=this.props.optionOverrides;t!==e.optionOverrides&&this.dataManager.resetOptions(t)}}(Qe);var Vi=function(){function e(e){this.component=e.component}return e.prototype.destroy=function(){},e}();function ji(e,t){return{component:e,el:t.el,useEventCenter:null==t.useEventCenter||t.useEventCenter}}function Wi(e){var t;return(t={})[e.component.uid]=e,t}var qi={},Gi=function(){function e(e,t){this.emitter=new xn}return e.prototype.destroy=function(){},e.prototype.setMirrorIsVisible=function(e){},e.prototype.setMirrorNeedsRevert=function(e){},e.prototype.setAutoScrollEnabled=function(e){},e}(),Yi={},$i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this,t=this.props.widgetGroups.map((function(t){return e.renderWidgetGroup(t)}));return Xe.apply(void 0,F(["div",{className:"fc-toolbar-chunk"}],t))},t.prototype.renderWidgetGroup=function(e){for(var t=this.props,r=this.context.theme,o=[],n=!0,i=0,a=e;i<a.length;i++){var l=a[i],s=l.buttonName,d=l.buttonClick,c=l.buttonText,f=l.buttonIcon;if("title"===s)n=!1,o.push(Xe("h2",{className:"fc-toolbar-title"},t.title));else{var p=f?{"aria-label":s}:{},m=["fc-"+s+"-button",r.getClass("button")];s===t.activeButton&&m.push(r.getClass("buttonActive"));var u=!t.isTodayEnabled&&"today"===s||!t.isPrevEnabled&&"prev"===s||!t.isNextEnabled&&"next"===s;o.push(Xe("button",L({disabled:u,className:m.join(" "),onClick:d,type:"button"},p),c||(f?Xe("span",{className:f}):"")))}}if(o.length>1){var h=n&&r.getClass("buttonGroup")||"";return Xe.apply(void 0,F(["div",{className:h}],o))}return o[0]},t}(Tn),Qi=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e,t,r=this.props,o=r.model,n=r.extraClassName,i=!1,a=o.center;return o.left?(i=!0,e=o.left):e=o.start,o.right?(i=!0,t=o.right):t=o.end,Xe("div",{className:[n||"","fc-toolbar",i?"fc-toolbar-ltr":""].join(" ")},this.renderSection("start",e||[]),this.renderSection("center",a||[]),this.renderSection("end",t||[]))},t.prototype.renderSection=function(e,t){var r=this.props;return Xe($i,{key:e,widgetGroups:t,title:r.title,activeButton:r.activeButton,isTodayEnabled:r.isTodayEnabled,isPrevEnabled:r.isPrevEnabled,isNextEnabled:r.isNextEnabled})},t}(Tn),Xi=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={availableWidth:null},t.handleEl=function(e){t.el=e,Mn(t.props.elRef,e),t.updateAvailableWidth()},t.handleResize=function(){t.updateAvailableWidth()},t}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.state,r=e.aspectRatio,o=["fc-view-harness",r||e.liquid||e.height?"fc-view-harness-active":"fc-view-harness-passive"],n="",i="";return r?null!==t.availableWidth?n=t.availableWidth/r:i=1/r*100+"%":n=e.height||"",Xe("div",{ref:this.handleEl,onClick:e.onClick,className:o.join(" "),style:{height:n,paddingBottom:i}},e.children)},t.prototype.componentDidMount=function(){this.context.addResizeHandler(this.handleResize)},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleResize)},t.prototype.updateAvailableWidth=function(){this.el&&this.props.aspectRatio&&this.setState({availableWidth:this.el.offsetWidth})},t}(Tn),Zi=function(e){function t(t){var r=e.call(this,t)||this;return r.handleSegClick=function(e,t){var o=r.component,n=o.context,i=mo(t);if(i&&o.isValidSegDownEl(e.target)){var a=it(e.target,".fc-event-forced-url"),l=a?a.querySelector("a[href]").href:"";n.emitter.trigger("eventClick",{el:t,event:new Uo(o.context,i.eventRange.def,i.eventRange.instance),jsEvent:e,view:n.viewApi}),l&&!e.defaultPrevented&&(window.location.href=l)}},r.destroy=pt(t.el,"click",".fc-event",r.handleSegClick),r}return H(t,e),t}(Vi),Ji=function(e){function t(t){var r,o,n,i,a,l=e.call(this,t)||this;return l.handleEventElRemove=function(e){e===l.currentSegEl&&l.handleSegLeave(null,l.currentSegEl)},l.handleSegEnter=function(e,t){mo(t)&&(l.currentSegEl=t,l.triggerEvent("eventMouseEnter",e,t))},l.handleSegLeave=function(e,t){l.currentSegEl&&(l.currentSegEl=null,l.triggerEvent("eventMouseLeave",e,t))},l.removeHoverListeners=(r=t.el,o=".fc-event",n=l.handleSegEnter,i=l.handleSegLeave,pt(r,"mouseover",o,(function(e,t){if(t!==a){a=t,n(e,t);var r=function(e){a=null,i(e,t),t.removeEventListener("mouseleave",r)};t.addEventListener("mouseleave",r)}}))),l}return H(t,e),t.prototype.destroy=function(){this.removeHoverListeners()},t.prototype.triggerEvent=function(e,t,r){var o=this.component,n=o.context,i=mo(r);t&&!o.isValidSegDownEl(t.target)||n.emitter.trigger(e,{el:r,event:new Uo(n,i.eventRange.def,i.eventRange.instance),jsEvent:t,view:n.viewApi})},t}(Vi),Ki=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildViewContext=fr(Sn),t.buildViewPropTransformers=fr(ta),t.buildToolbarProps=fr(ea),t.handleNavLinkClick=ft("a[data-navlink]",t._handleNavLinkClick.bind(t)),t.headerRef=Je(),t.footerRef=Je(),t.interactionsStore={},t.registerInteractiveComponent=function(e,r){var o=ji(e,r),n=[Zi,Ji].concat(t.props.pluginHooks.componentInteractions).map((function(e){return new e(o)}));t.interactionsStore[e.uid]=n,qi[e.uid]=o},t.unregisterInteractiveComponent=function(e){for(var r=0,o=t.interactionsStore[e.uid];r<o.length;r++){o[r].destroy()}delete t.interactionsStore[e.uid],delete qi[e.uid]},t.resizeRunner=new Di((function(){t.props.emitter.trigger("_resize",!0),t.props.emitter.trigger("windowResize",{view:t.props.viewApi})})),t.handleWindowResize=function(e){var r=t.props.options;r.handleWindowResize&&e.target===window&&t.resizeRunner.request(r.windowResizeDelay)},t}return H(t,e),t.prototype.render=function(){var e,t=this.props,r=t.toolbarConfig,o=t.options,n=this.buildToolbarProps(t.viewSpec,t.dateProfile,t.dateProfileGenerator,t.currentDate,Bo(t.options.now,t.dateEnv),t.viewTitle),i=!1,a="";t.isHeightAuto||t.forPrint?a="":null!=o.height?i=!0:null!=o.contentHeight?a=o.contentHeight:e=Math.max(o.aspectRatio,.5);var l=this.buildViewContext(t.viewSpec,t.viewApi,t.options,t.dateProfileGenerator,t.dateEnv,t.theme,t.pluginHooks,t.dispatch,t.getCurrentData,t.emitter,t.calendarApi,this.registerInteractiveComponent,this.unregisterInteractiveComponent);return Xe(Cn.Provider,{value:l},r.headerToolbar&&Xe(Qi,L({ref:this.headerRef,extraClassName:"fc-header-toolbar",model:r.headerToolbar},n)),Xe(Xi,{liquid:i,height:a,aspectRatio:e,onClick:this.handleNavLinkClick},this.renderView(t),this.buildAppendContent()),r.footerToolbar&&Xe(Qi,L({ref:this.footerRef,extraClassName:"fc-footer-toolbar",model:r.footerToolbar},n)))},t.prototype.componentDidMount=function(){var e=this.props;this.calendarInteractions=e.pluginHooks.calendarInteractions.map((function(t){return new t(e)})),window.addEventListener("resize",this.handleWindowResize);var t=e.pluginHooks.propSetHandlers;for(var r in t)t[r](e[r],e)},t.prototype.componentDidUpdate=function(e){var t=this.props,r=t.pluginHooks.propSetHandlers;for(var o in r)t[o]!==e[o]&&r[o](t[o],t)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWindowResize),this.resizeRunner.clear();for(var e=0,t=this.calendarInteractions;e<t.length;e++){t[e].destroy()}this.props.emitter.trigger("_unmount")},t.prototype._handleNavLinkClick=function(e,t){var r=this.props,o=r.dateEnv,n=r.options,i=r.calendarApi,a=t.getAttribute("data-navlink");a=a?JSON.parse(a):{};var l=o.createMarker(a.date),s=a.type,d="day"===s?n.navLinkDayClick:"week"===s?n.navLinkWeekClick:null;"function"==typeof d?d.call(i,o.toDate(l),e):("string"==typeof d&&(s=d),i.zoomTo(l,s))},t.prototype.buildAppendContent=function(){var e=this.props,t=e.pluginHooks.viewContainerAppends.map((function(t){return t(e)}));return Xe.apply(void 0,F([Ke,{}],t))},t.prototype.renderView=function(e){for(var t=e.pluginHooks,r=e.viewSpec,o={dateProfile:e.dateProfile,businessHours:e.businessHours,eventStore:e.renderableEventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,isHeightAuto:e.isHeightAuto,forPrint:e.forPrint},n=0,i=this.buildViewPropTransformers(t.viewPropsTransformers);n<i.length;n++){var a=i[n];L(o,a.transform(o,e))}var l=r.component;return Xe(l,L({},o))},t}(Dn);function ea(e,t,r,o,n,i){var a=r.build(n,void 0,!1),l=r.buildPrev(t,o,!1),s=r.buildNext(t,o,!1);return{title:i,activeButton:e.type,isTodayEnabled:a.isValid&&!co(t.currentRange,n),isPrevEnabled:l.isValid,isNextEnabled:s.isValid}}function ta(e){return e.map((function(e){return new e}))}var ra=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={forPrint:!1},t.handleBeforePrint=function(){t.setState({forPrint:!0})},t.handleAfterPrint=function(){t.setState({forPrint:!1})},t}return H(t,e),t.prototype.render=function(){var e=this.props,t=e.options,r=this.state.forPrint,o=r||"auto"===t.height||"auto"===t.contentHeight,n=o||null==t.height?"":t.height,i=["fc",r?"fc-media-print":"fc-media-screen","fc-direction-"+t.direction,e.theme.getClass("root")];return nn()||i.push("fc-liquid-hack"),e.children(i,n,o,r)},t.prototype.componentDidMount=function(){var e=this.props.emitter;e.on("_beforeprint",this.handleBeforePrint),e.on("_afterprint",this.handleAfterPrint)},t.prototype.componentWillUnmount=function(){var e=this.props.emitter;e.off("_beforeprint",this.handleBeforePrint),e.off("_afterprint",this.handleAfterPrint)},t}(Tn);var oa="fc-col-header-cell";function na(e){return e.text}var ia=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this.context,t=e.dateEnv,r=e.options,o=e.theme,n=e.viewApi,i=this.props,a=i.date,l=i.dateProfile,s=dn(a,i.todayRange,null,l),d=[oa].concat(cn(s,o)),c=t.format(a,i.dayHeaderFormat),f=r.navLinks&&!s.isDisabled&&i.colCnt>1?{"data-navlink":fn(a),tabIndex:0}:{},p=L(L(L({date:t.toDate(a),view:n},i.extraHookProps),{text:c}),s);return Xe(Yn,{hookProps:p,classNames:r.dayHeaderClassNames,content:r.dayHeaderContent,defaultContent:na,didMount:r.dayHeaderDidMount,willUnmount:r.dayHeaderWillUnmount},(function(e,t,r,o){return Xe("th",L({ref:e,className:d.concat(t).join(" "),"data-date":s.isDisabled?void 0:lr(a),colSpan:i.colSpan},i.extraDataAttrs),Xe("div",{className:"fc-scrollgrid-sync-inner"},!s.isDisabled&&Xe("a",L({ref:r,className:["fc-col-header-cell-cushion",i.isSticky?"fc-sticky":""].join(" ")},f),o)))}))},t}(Tn),aa=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context,r=t.dateEnv,o=t.theme,n=t.viewApi,i=t.options,a=Ct(new Date(2592e5),e.dow),l={dow:e.dow,isDisabled:!1,isFuture:!1,isPast:!1,isToday:!1,isOther:!1},s=[oa].concat(cn(l,o),e.extraClassNames||[]),d=r.format(a,e.dayHeaderFormat),c=L(L(L(L({date:a},l),{view:n}),e.extraHookProps),{text:d});return Xe(Yn,{hookProps:c,classNames:i.dayHeaderClassNames,content:i.dayHeaderContent,defaultContent:na,didMount:i.dayHeaderDidMount,willUnmount:i.dayHeaderWillUnmount},(function(t,r,o,n){return Xe("th",L({ref:t,className:s.concat(r).join(" "),colSpan:e.colSpan},e.extraDataAttrs),Xe("div",{className:"fc-scrollgrid-sync-inner"},Xe("a",{className:["fc-col-header-cell-cushion",e.isSticky?"fc-sticky":""].join(" "),ref:o},n)))}))},t}(Tn),la=function(e){function t(t,r){var o=e.call(this,t,r)||this;return o.initialNowDate=Bo(r.options.now,r.dateEnv),o.initialNowQueriedMs=(new Date).valueOf(),o.state=o.computeTiming().currentState,o}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.state;return e.children(t.nowDate,t.todayRange)},t.prototype.componentDidMount=function(){this.setTimeout()},t.prototype.componentDidUpdate=function(e){e.unit!==this.props.unit&&(this.clearTimeout(),this.setTimeout())},t.prototype.componentWillUnmount=function(){this.clearTimeout()},t.prototype.computeTiming=function(){var e=this.props,t=this.context,r=St(this.initialNowDate,(new Date).valueOf()-this.initialNowQueriedMs),o=t.dateEnv.startOf(r,e.unit),n=t.dateEnv.add(o,er(1,e.unit)),i=n.valueOf()-r.valueOf();return i=Math.min(864e5,i),{currentState:{nowDate:o,todayRange:sa(o)},nextState:{nowDate:n,todayRange:sa(n)},waitMs:i}},t.prototype.setTimeout=function(){var e=this,t=this.computeTiming(),r=t.nextState,o=t.waitMs;this.timeoutId=setTimeout((function(){e.setState(r,(function(){e.setTimeout()}))}),o)},t.prototype.clearTimeout=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.contextType=Cn,t}(Qe);function sa(e){var t=Rt(e);return{start:t,end:Ct(t,1)}}var da=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.createDayHeaderFormatter=fr(ca),t}return H(t,e),t.prototype.render=function(){var e=this.context,t=this.props,r=t.dates,o=t.dateProfile,n=t.datesRepDistinctDays,i=t.renderIntro,a=this.createDayHeaderFormatter(e.options.dayHeaderFormat,n,r.length);return Xe(la,{unit:"day"},(function(e,t){return Xe("tr",null,i&&i("day"),r.map((function(e){return n?Xe(ia,{key:e.toISOString(),date:e,dateProfile:o,todayRange:t,colCnt:r.length,dayHeaderFormat:a}):Xe(aa,{key:e.getUTCDay(),dow:e.getUTCDay(),dayHeaderFormat:a})})))}))},t}(Tn);function ca(e,t,r){return e||function(e,t){return Cr(!e||t>10?{weekday:"short"}:t>1?{weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}:{weekday:"long"})}(t,r)}var fa=function(){function e(e,t){for(var r=e.start,o=e.end,n=[],i=[],a=-1;r<o;)t.isHiddenDay(r)?n.push(a+.5):(a+=1,n.push(a),i.push(r)),r=Ct(r,1);this.dates=i,this.indices=n,this.cnt=i.length}return e.prototype.sliceRange=function(e){var t=this.getDateDayIndex(e.start),r=this.getDateDayIndex(Ct(e.end,-1)),o=Math.max(0,t),n=Math.min(this.cnt-1,r);return(o=Math.ceil(o))<=(n=Math.floor(n))?{firstIndex:o,lastIndex:n,isStart:t===o,isEnd:r===n}:null},e.prototype.getDateDayIndex=function(e){var t=this.indices,r=Math.floor(Dt(this.dates[0],e));return r<0?t[0]-1:r>=t.length?t[t.length-1]+1:t[r]},e}(),pa=function(){function e(e,t){var r,o,n,i=e.dates;if(t){for(o=i[0].getUTCDay(),r=1;r<i.length&&i[r].getUTCDay()!==o;r+=1);n=Math.ceil(i.length/r)}else n=1,r=i.length;this.rowCnt=n,this.colCnt=r,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return e.prototype.buildCells=function(){for(var e=[],t=0;t<this.rowCnt;t+=1){for(var r=[],o=0;o<this.colCnt;o+=1)r.push(this.buildCell(t,o));e.push(r)}return e},e.prototype.buildCell=function(e,t){var r=this.daySeries.dates[e*this.colCnt+t];return{key:r.toISOString(),date:r}},e.prototype.buildHeaderDates=function(){for(var e=[],t=0;t<this.colCnt;t+=1)e.push(this.cells[0][t].date);return e},e.prototype.sliceRange=function(e){var t=this.colCnt,r=this.daySeries.sliceRange(e),o=[];if(r)for(var n=r.firstIndex,i=r.lastIndex,a=n;a<=i;){var l=Math.floor(a/t),s=Math.min((l+1)*t,i+1);o.push({row:l,firstCol:a%t,lastCol:(s-1)%t,isStart:r.isStart&&a===n,isEnd:r.isEnd&&s-1===i}),a=s}return o},e}(),ma=function(){function e(){this.sliceBusinessHours=fr(this._sliceBusinessHours),this.sliceDateSelection=fr(this._sliceDateSpan),this.sliceEventStore=fr(this._sliceEventStore),this.sliceEventDrag=fr(this._sliceInteraction),this.sliceEventResize=fr(this._sliceInteraction),this.forceDayIfListItem=!1}return e.prototype.sliceProps=function(e,t,r,o){for(var n=[],i=4;i<arguments.length;i++)n[i-4]=arguments[i];var a=e.eventUiBases,l=this.sliceEventStore.apply(this,F([e.eventStore,a,t,r],n));return{dateSelectionSegs:this.sliceDateSelection.apply(this,F([e.dateSelection,a,o],n)),businessHourSegs:this.sliceBusinessHours.apply(this,F([e.businessHours,t,r,o],n)),fgEventSegs:l.fg,bgEventSegs:l.bg,eventDrag:this.sliceEventDrag.apply(this,F([e.eventDrag,a,t,r],n)),eventResize:this.sliceEventResize.apply(this,F([e.eventResize,a,t,r],n)),eventSelection:e.eventSelection}},e.prototype.sliceNowDate=function(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return this._sliceDateSpan.apply(this,F([{range:{start:e,end:St(e,1)},allDay:!1},{},t],r))},e.prototype._sliceBusinessHours=function(e,t,r,o){for(var n=[],i=4;i<arguments.length;i++)n[i-4]=arguments[i];return e?this._sliceEventStore.apply(this,F([Xt(e,ua(t,Boolean(r)),o),{},t,r],n)).bg:[]},e.prototype._sliceEventStore=function(e,t,r,o){for(var n=[],i=4;i<arguments.length;i++)n[i-4]=arguments[i];if(e){var a=fo(e,t,ua(r,Boolean(o)),o);return{bg:this.sliceEventRanges(a.bg,n),fg:this.sliceEventRanges(a.fg,n)}}return{bg:[],fg:[]}},e.prototype._sliceInteraction=function(e,t,r,o){for(var n=[],i=4;i<arguments.length;i++)n[i-4]=arguments[i];if(!e)return null;var a=fo(e.mutatedEvents,t,ua(r,Boolean(o)),o);return{segs:this.sliceEventRanges(a.fg,n),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent}},e.prototype._sliceDateSpan=function(e,t,r){for(var o=[],n=3;n<arguments.length;n++)o[n-3]=arguments[n];if(!e)return[];for(var i=Do(e,t,r),a=this.sliceRange.apply(this,F([e.range],o)),l=0,s=a;l<s.length;l++){var d=s[l];d.eventRange=i}return a},e.prototype.sliceEventRanges=function(e,t){for(var r=[],o=0,n=e;o<n.length;o++){var i=n[o];r.push.apply(r,this.sliceEventRange(i,t))}return r},e.prototype.sliceEventRange=function(e,t){var r=e.range;this.forceDayIfListItem&&"list-item"===e.ui.display&&(r={start:r.start,end:Ct(r.start,1)});for(var o=this.sliceRange.apply(this,F([r],t)),n=0,i=o;n<i.length;n++){var a=i[n];a.eventRange=e,a.isStart=e.isStart&&a.isStart,a.isEnd=e.isEnd&&a.isEnd}return o},e}();function ua(e,t){var r=e.activeRange;return t?r:{start:St(r.start,e.slotMinTime.milliseconds),end:St(r.end,e.slotMaxTime.milliseconds-864e5)}}var ha=/^(visible|hidden)$/,ga=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleEl=function(e){t.el=e,Mn(t.props.elRef,e)},t}return H(t,e),t.prototype.render=function(){var e=this.props,t=e.liquid,r=e.liquidIsAbsolute,o=t&&r,n=["fc-scroller"];return t&&(r?n.push("fc-scroller-liquid-absolute"):n.push("fc-scroller-liquid")),Xe("div",{ref:this.handleEl,className:n.join(" "),style:{overflowX:e.overflowX,overflowY:e.overflowY,left:o&&-(e.overcomeLeft||0)||"",right:o&&-(e.overcomeRight||0)||"",bottom:o&&-(e.overcomeBottom||0)||"",marginLeft:!o&&-(e.overcomeLeft||0)||"",marginRight:!o&&-(e.overcomeRight||0)||"",marginBottom:!o&&-(e.overcomeBottom||0)||"",maxHeight:e.maxHeight||""}},e.children)},t.prototype.needsXScrolling=function(){if(ha.test(this.props.overflowX))return!1;for(var e=this.el,t=this.el.getBoundingClientRect().width-this.getYScrollbarWidth(),r=e.children,o=0;o<r.length;o+=1){if(r[o].getBoundingClientRect().width>t)return!0}return!1},t.prototype.needsYScrolling=function(){if(ha.test(this.props.overflowY))return!1;for(var e=this.el,t=this.el.getBoundingClientRect().height-this.getXScrollbarWidth(),r=e.children,o=0;o<r.length;o+=1){if(r[o].getBoundingClientRect().height>t)return!0}return!1},t.prototype.getXScrollbarWidth=function(){return ha.test(this.props.overflowX)?0:this.el.offsetHeight-this.el.clientHeight},t.prototype.getYScrollbarWidth=function(){return ha.test(this.props.overflowY)?0:this.el.offsetWidth-this.el.clientWidth},t}(Tn),ba=function(){function e(e){var t=this;this.masterCallback=e,this.currentMap={},this.depths={},this.callbackMap={},this.handleValue=function(e,r){var o=t,n=o.depths,i=o.currentMap,a=!1,l=!1;null!==e?(a=r in i,i[r]=e,n[r]=(n[r]||0)+1,l=!0):(n[r]-=1,n[r]||(delete i[r],delete t.callbackMap[r],a=!0)),t.masterCallback&&(a&&t.masterCallback(null,String(r)),l&&t.masterCallback(e,String(r)))}}return e.prototype.createRef=function(e){var t=this,r=this.callbackMap[e];return r||(r=this.callbackMap[e]=function(r){t.handleValue(r,String(e))}),r},e.prototype.collect=function(e,t,r){return function(e,t,r,o){void 0===t&&(t=0),void 0===o&&(o=1);var n=[];null==r&&(r=Object.keys(e).length);for(var i=t;i<r;i+=o){var a=e[i];void 0!==a&&n.push(a)}return n}(this.currentMap,e,t,r)},e.prototype.getAll=function(){return qt(this.currentMap)},e}();function va(e){for(var t=0,r=0,o=function(e,t){for(var r=e instanceof HTMLElement?[e]:e,o=[],n=0;n<r.length;n+=1)for(var i=r[n].querySelectorAll(t),a=0;a<i.length;a+=1)o.push(i[a]);return o}(e,".fc-scrollgrid-shrink");r<o.length;r++){var n=o[r];t=Math.max(t,_t(n))}return Math.ceil(t)}function xa(e,t){return e.liquid&&t.liquid}function ya(e,t){return cr(e,t,Gt)}function wa(e,t){for(var r=[],o=0,n=e;o<n.length;o++)for(var i=n[o],a=i.span||1,l=0;l<a;l+=1)r.push(Xe("col",{style:{width:"shrink"===i.width?ka(t):i.width||"",minWidth:i.minWidth||""}}));return Xe.apply(void 0,F(["colgroup",{}],r))}function ka(e){return null==e?4:e}function _a(e,t){var r=["fc-scrollgrid-section","fc-scrollgrid-section-"+e.type,e.className];return t&&e.liquid&&null==e.maxHeight&&r.push("fc-scrollgrid-section-liquid"),e.isSticky&&r.push("fc-scrollgrid-section-sticky"),r}function Ea(e){return Xe("div",{className:"fc-scrollgrid-sticky-shim",style:{width:e.clientWidth,minWidth:e.tableMinWidth}})}function Aa(e){var t=e.stickyHeaderDates;return null!=t&&"auto"!==t||(t="auto"===e.height||"auto"===e.viewHeight),t}function Ca(e){var t=e.stickyFooterScrollbar;return null!=t&&"auto"!==t||(t="auto"===e.height||"auto"===e.viewHeight),t}var Sa=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processCols=fr((function(e){return e}),ya),t.renderMicroColGroup=fr(wa),t.scrollerRefs=new ba,t.scrollerElRefs=new ba(t._handleScrollerEl.bind(t)),t.state={shrinkWidth:null,forceYScrollbars:!1,scrollerClientWidths:{},scrollerClientHeights:{}},t.handleSizing=function(){t.setState(L({shrinkWidth:t.computeShrinkWidth()},t.computeScrollerDims()))},t}return H(t,e),t.prototype.render=function(){for(var e,t=this,r=t.props,o=t.state,n=t.context,i=r.sections||[],a=this.processCols(r.cols),l=this.renderMicroColGroup(a,o.shrinkWidth),s=function(e,t){var r=["fc-scrollgrid",t.theme.getClass("table")];return e&&r.push("fc-scrollgrid-liquid"),r}(r.liquid,n),d=i.length,c=0,f=[],p=[],m=[];c<d&&"header"===(e=i[c]).type;)f.push(this.renderSection(e,l)),c+=1;for(;c<d&&"body"===(e=i[c]).type;)p.push(this.renderSection(e,l)),c+=1;for(;c<d&&"footer"===(e=i[c]).type;)m.push(this.renderSection(e,l)),c+=1;var u=!nn();return Xe("table",{className:s.join(" "),style:{height:r.height}},Boolean(!u&&f.length)&&Xe.apply(void 0,F(["thead",{}],f)),Boolean(!u&&p.length)&&Xe.apply(void 0,F(["tbody",{}],p)),Boolean(!u&&m.length)&&Xe.apply(void 0,F(["tfoot",{}],m)),u&&Xe.apply(void 0,F(["tbody",{}],f,p,m)))},t.prototype.renderSection=function(e,t){return"outerContent"in e?Xe(Ke,{key:e.key},e.outerContent):Xe("tr",{key:e.key,className:_a(e,this.props.liquid).join(" ")},this.renderChunkTd(e,t,e.chunk))},t.prototype.renderChunkTd=function(e,t,r){if("outerContent"in r)return r.outerContent;var o=this.props,n=this.state,i=n.forceYScrollbars,a=n.scrollerClientWidths,l=n.scrollerClientHeights,s=function(e,t){return null!=t.maxHeight||xa(e,t)}(o,e),d=xa(o,e),c=o.liquid?i?"scroll":s?"auto":"hidden":"visible",f=e.key,p=function(e,t,r){var o=r.expandRows;return"function"==typeof t.content?t.content(r):Xe("table",{className:[t.tableClassName,e.syncRowHeights?"fc-scrollgrid-sync-table":""].join(" "),style:{minWidth:r.tableMinWidth,width:r.clientWidth,height:o?r.clientHeight:""}},r.tableColGroupNode,Xe("tbody",{},"function"==typeof t.rowContent?t.rowContent(r):t.rowContent))}(e,r,{tableColGroupNode:t,tableMinWidth:"",clientWidth:void 0!==a[f]?a[f]:null,clientHeight:void 0!==l[f]?l[f]:null,expandRows:e.expandRows,syncRowHeights:!1,rowSyncHeights:[],reportRowHeightChange:function(){}});return Xe("td",{ref:r.elRef},Xe("div",{className:"fc-scroller-harness"+(d?" fc-scroller-harness-liquid":"")},Xe(ga,{ref:this.scrollerRefs.createRef(f),elRef:this.scrollerElRefs.createRef(f),overflowY:c,overflowX:o.liquid?"hidden":"visible",maxHeight:e.maxHeight,liquid:d,liquidIsAbsolute:!0},p)))},t.prototype._handleScrollerEl=function(e,t){var r=function(e,t){for(var r=0,o=e;r<o.length;r++){var n=o[r];if(n.key===t)return n}return null}(this.props.sections,t);r&&Mn(r.chunk.scrollerElRef,e)},t.prototype.componentDidMount=function(){this.handleSizing(),this.context.addResizeHandler(this.handleSizing)},t.prototype.componentDidUpdate=function(){this.handleSizing()},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleSizing)},t.prototype.computeShrinkWidth=function(){return function(e){for(var t=0,r=e;t<r.length;t++)if("shrink"===r[t].width)return!0;return!1}(this.props.cols)?va(this.scrollerElRefs.getAll()):0},t.prototype.computeScrollerDims=function(){var e=hn(),t=this.scrollerRefs,r=this.scrollerElRefs,o=!1,n={},i={};for(var a in t.currentMap){var l=t.currentMap[a];if(l&&l.needsYScrolling()){o=!0;break}}for(var s=0,d=this.props.sections;s<d.length;s++){a=d[s].key;var c=r.currentMap[a];if(c){var f=c.parentNode;n[a]=Math.floor(f.getBoundingClientRect().width-(o?e.y:0)),i[a]=Math.floor(f.getBoundingClientRect().height)}}return{forceYScrollbars:o,scrollerClientWidths:n,scrollerClientHeights:i}},t}(Tn);Sa.addStateEquality({scrollerClientWidths:Gt,scrollerClientHeights:Gt});var Da=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.elRef=Je(),t}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context,r=t.options,o=e.seg,n=o.eventRange,i=n.ui,a={event:new Uo(t,n.def,n.instance),view:t.viewApi,timeText:e.timeText,textColor:i.textColor,backgroundColor:i.backgroundColor,borderColor:i.borderColor,isDraggable:!e.disableDragging&&vo(o,t),isStartResizable:!e.disableResizing&&xo(o,t),isEndResizable:!e.disableResizing&&yo(o),isMirror:Boolean(e.isDragging||e.isResizing||e.isDateSelecting),isStart:Boolean(o.isStart),isEnd:Boolean(o.isEnd),isPast:Boolean(e.isPast),isFuture:Boolean(e.isFuture),isToday:Boolean(e.isToday),isSelected:Boolean(e.isSelected),isDragging:Boolean(e.isDragging),isResizing:Boolean(e.isResizing)},l=function(e){var t=["fc-event"];return e.isMirror&&t.push("fc-event-mirror"),e.isDraggable&&t.push("fc-event-draggable"),(e.isStartResizable||e.isEndResizable)&&t.push("fc-event-resizable"),e.isDragging&&t.push("fc-event-dragging"),e.isResizing&&t.push("fc-event-resizing"),e.isSelected&&t.push("fc-event-selected"),e.isStart&&t.push("fc-event-start"),e.isEnd&&t.push("fc-event-end"),e.isPast&&t.push("fc-event-past"),e.isToday&&t.push("fc-event-today"),e.isFuture&&t.push("fc-event-future"),t}(a).concat(i.classNames);return Xe(Yn,{hookProps:a,classNames:r.eventClassNames,content:r.eventContent,defaultContent:e.defaultContent,didMount:r.eventDidMount,willUnmount:r.eventWillUnmount,elRef:this.elRef},(function(t,r,o,n){return e.children(t,l.concat(r),o,n,a)}))},t.prototype.componentDidMount=function(){po(this.elRef.current,this.props.seg)},t.prototype.componentDidUpdate=function(e){var t=this.props.seg;t!==e.seg&&po(this.elRef.current,t)},t}(Tn),Ta=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context,r=e.seg,o=t.options.eventTimeFormat||e.defaultTimeFormat,n=wo(r,o,t,e.defaultDisplayEventTime,e.defaultDisplayEventEnd);return Xe(Da,{seg:r,timeText:n,disableDragging:e.disableDragging,disableResizing:e.disableResizing,defaultContent:e.defaultContent||Ra,isDragging:e.isDragging,isResizing:e.isResizing,isDateSelecting:e.isDateSelecting,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(t,o,n,i,a){return Xe("a",L({className:e.extraClassNames.concat(o).join(" "),style:{borderColor:a.borderColor,backgroundColor:a.backgroundColor},ref:t},function(e){var t=e.eventRange.def.url;return t?{href:t}:{}}(r)),Xe("div",{className:"fc-event-main",ref:n,style:{color:a.textColor}},i),a.isStartResizable&&Xe("div",{className:"fc-event-resizer fc-event-resizer-start"}),a.isEndResizable&&Xe("div",{className:"fc-event-resizer fc-event-resizer-end"}))}))},t}(Tn);function Ra(e){return Xe("div",{className:"fc-event-main-frame"},e.timeText&&Xe("div",{className:"fc-event-time"},e.timeText),Xe("div",{className:"fc-event-title-container"},Xe("div",{className:"fc-event-title fc-sticky"},e.event.title||Xe(Ke,null," "))))}var Ia=function(e){return Xe(Cn.Consumer,null,(function(t){var r=t.options,o={isAxis:e.isAxis,date:t.dateEnv.toDate(e.date),view:t.viewApi};return Xe(Yn,{hookProps:o,classNames:r.nowIndicatorClassNames,content:r.nowIndicatorContent,didMount:r.nowIndicatorDidMount,willUnmount:r.nowIndicatorWillUnmount},e.children)}))},Ma=Cr({day:"numeric"}),Oa=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context,r=t.options,o=za({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv});return Xe(Qn,{hookProps:o,content:r.dayCellContent,defaultContent:e.defaultContent},e.children)},t}(Tn);function za(e){var t=e.date,r=e.dateEnv,o=dn(t,e.todayRange,null,e.dateProfile);return L(L(L({date:r.toDate(t),view:e.viewApi},o),{dayNumberText:e.showDayNumber?r.format(t,Ma):""}),e.extraProps)}var Na=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refineHookProps=pr(za),t.normalizeClassNames=Jn(),t}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context,r=t.options,o=this.refineHookProps({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv}),n=cn(o,t.theme).concat(o.isDisabled?[]:this.normalizeClassNames(r.dayCellClassNames,o)),i=o.isDisabled?{}:{"data-date":lr(e.date)};return Xe(Zn,{hookProps:o,didMount:r.dayCellDidMount,willUnmount:r.dayCellWillUnmount,elRef:e.elRef},(function(t){return e.children(t,n,i,o.isDisabled)}))},t}(Tn);function Pa(e){return Xe("div",{className:"fc-"+e})}var Ha=function(e){return Xe(Da,{defaultContent:La,seg:e.seg,timeText:"",disableDragging:!0,disableResizing:!0,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(e,t,r,o,n){return Xe("div",{ref:e,className:["fc-bg-event"].concat(t).join(" "),style:{backgroundColor:n.backgroundColor}},o)}))};function La(e){return e.event.title&&Xe("div",{className:"fc-event-title"},e.event.title)}var Ba=function(e){return Xe(Cn.Consumer,null,(function(t){var r=t.dateEnv,o=t.options,n=e.date,i=o.weekNumberFormat||e.defaultFormat,a=r.computeWeekNumber(n),l=r.format(n,i);return Xe(Yn,{hookProps:{num:a,text:l,date:n},classNames:o.weekNumberClassNames,content:o.weekNumberContent,defaultContent:Fa,didMount:o.weekNumberDidMount,willUnmount:o.weekNumberWillUnmount},e.children)}))};function Fa(e){return e.text}
/*!
FullCalendar v5.5.1
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/var Ua=function(e){function t(t,r){void 0===r&&(r={});var o=e.call(this)||this;return o.isRendering=!1,o.isRendered=!1,o.currentClassNames=[],o.customContentRenderId=0,o.handleAction=function(e){switch(e.type){case"SET_EVENT_DRAG":case"SET_EVENT_RESIZE":o.renderRunner.tryDrain()}},o.handleData=function(e){o.currentData=e,o.renderRunner.request(e.calendarOptions.rerenderDelay)},o.handleRenderRequest=function(){if(o.isRendering){o.isRendered=!0;var e=o.currentData;Ze(Xe(ra,{options:e.calendarOptions,theme:e.theme,emitter:e.emitter},(function(t,r,n,i){return o.setClassNames(t),o.setHeight(r),Xe($n.Provider,{value:o.customContentRenderId},Xe(Ki,L({isHeightAuto:n,forPrint:i},e)))})),o.el)}else o.isRendered&&(o.isRendered=!1,rt(o.el),o.setClassNames([]),o.setHeight(""));tt()},o.el=t,o.renderRunner=new Di(o.handleRenderRequest),new Ii({optionOverrides:r,calendarApi:o,onAction:o.handleAction,onData:o.handleData}),o}return H(t,e),Object.defineProperty(t.prototype,"view",{get:function(){return this.currentData.viewApi},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this.isRendering;e?this.customContentRenderId+=1:this.isRendering=!0,this.renderRunner.request(),e&&this.updateSize()},t.prototype.destroy=function(){this.isRendering&&(this.isRendering=!1,this.renderRunner.request())},t.prototype.updateSize=function(){e.prototype.updateSize.call(this),tt()},t.prototype.batchRendering=function(e){this.renderRunner.pause("batchRendering"),e(),this.renderRunner.resume("batchRendering")},t.prototype.pauseRendering=function(){this.renderRunner.pause("pauseRendering")},t.prototype.resumeRendering=function(){this.renderRunner.resume("pauseRendering",!0)},t.prototype.resetOptions=function(e,t){this.currentDataManager.resetOptions(e,t)},t.prototype.setClassNames=function(e){if(!cr(e,this.currentClassNames)){for(var t=this.el.classList,r=0,o=this.currentClassNames;r<o.length;r++){var n=o[r];t.remove(n)}for(var i=0,a=e;i<a.length;i++){n=a[i];t.add(n)}this.currentClassNames=e}},t.prototype.setHeight=function(e){dt(this.el,"height",e)},t}(Fo);
/*!
FullCalendar v5.5.0
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/Yi.touchMouseIgnoreWait=500;var Va=0,ja=0,Wa=!1,qa=function(){function e(e){var t=this;this.subjectEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!t.shouldIgnoreMouse()&&function(e){return 0===e.button&&!e.ctrlKey}(e)&&t.tryStart(e)){var r=t.createEventFromMouse(e,!0);t.emitter.trigger("pointerdown",r),t.initScrollWatch(r),t.shouldIgnoreMove||document.addEventListener("mousemove",t.handleMouseMove),document.addEventListener("mouseup",t.handleMouseUp)}},this.handleMouseMove=function(e){var r=t.createEventFromMouse(e);t.recordCoords(r),t.emitter.trigger("pointermove",r)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",t.handleMouseMove),document.removeEventListener("mouseup",t.handleMouseUp),t.emitter.trigger("pointerup",t.createEventFromMouse(e)),t.cleanup()},this.handleTouchStart=function(e){if(t.tryStart(e)){t.isTouchDragging=!0;var r=t.createEventFromTouch(e,!0);t.emitter.trigger("pointerdown",r),t.initScrollWatch(r);var o=e.target;t.shouldIgnoreMove||o.addEventListener("touchmove",t.handleTouchMove),o.addEventListener("touchend",t.handleTouchEnd),o.addEventListener("touchcancel",t.handleTouchEnd),window.addEventListener("scroll",t.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var r=t.createEventFromTouch(e);t.recordCoords(r),t.emitter.trigger("pointermove",r)},this.handleTouchEnd=function(e){if(t.isDragging){var r=e.target;r.removeEventListener("touchmove",t.handleTouchMove),r.removeEventListener("touchend",t.handleTouchEnd),r.removeEventListener("touchcancel",t.handleTouchEnd),window.removeEventListener("scroll",t.handleTouchScroll,!0),t.emitter.trigger("pointerup",t.createEventFromTouch(e)),t.cleanup(),t.isTouchDragging=!1,Va+=1,setTimeout((function(){Va-=1}),Yi.touchMouseIgnoreWait)}},this.handleTouchScroll=function(){t.wasTouchScroll=!0},this.handleScroll=function(e){if(!t.shouldIgnoreMove){var r=window.pageXOffset-t.prevScrollX+t.prevPageX,o=window.pageYOffset-t.prevScrollY+t.prevPageY;t.emitter.trigger("pointermove",{origEvent:e,isTouch:t.isTouchDragging,subjectEl:t.subjectEl,pageX:r,pageY:o,deltaX:r-t.origPageX,deltaY:o-t.origPageY})}},this.containerEl=e,this.emitter=new xn,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),1===(ja+=1)&&window.addEventListener("touchmove",Ga,{passive:!1})}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),(ja-=1)||window.removeEventListener("touchmove",Ga,{passive:!1})},e.prototype.tryStart=function(e){var t=this.querySubjectEl(e),r=e.target;return!(!t||this.handleSelector&&!it(r,this.handleSelector))&&(this.subjectEl=t,this.isDragging=!0,this.wasTouchScroll=!1,!0)},e.prototype.cleanup=function(){Wa=!1,this.isDragging=!1,this.subjectEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?it(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return Va||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(Wa=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e.prototype.createEventFromMouse=function(e,t){var r=0,o=0;return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(r=e.pageX-this.origPageX,o=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:r,deltaY:o}},e.prototype.createEventFromTouch=function(e,t){var r,o,n=e.touches,i=0,a=0;return n&&n.length?(r=n[0].pageX,o=n[0].pageY):(r=e.pageX,o=e.pageY),t?(this.origPageX=r,this.origPageY=o):(i=r-this.origPageX,a=o-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:r,pageY:o,deltaX:i,deltaY:a}},e}();function Ga(e){Wa&&e.preventDefault()}var Ya=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,r){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=r-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var r=this,o=function(){r.cleanup(),t()};e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(o,this.revertDuration):setTimeout(o,0)},e.prototype.doRevertAnimation=function(e,t){var r=this.mirrorEl,o=this.sourceEl.getBoundingClientRect();r.style.transition="top "+t+"ms,left "+t+"ms",st(r,{left:o.left,top:o.top}),function(e,t){var r=function(o){t(o),mt.forEach((function(t){e.removeEventListener(t,r)}))};mt.forEach((function(t){e.addEventListener(t,r)}))}(r,(function(){r.style.transition="",e()}))},e.prototype.cleanup=function(){this.mirrorEl&&(nt(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&st(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,t=this.mirrorEl;return t||((t=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),t.classList.add("fc-event-dragging"),st(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t},e}(),$a=function(e){function t(t,r){var o=e.call(this)||this;return o.handleScroll=function(){o.scrollTop=o.scrollController.getScrollTop(),o.scrollLeft=o.scrollController.getScrollLeft(),o.handleScrollChange()},o.scrollController=t,o.doesListening=r,o.scrollTop=o.origScrollTop=t.getScrollTop(),o.scrollLeft=o.origScrollLeft=t.getScrollLeft(),o.scrollWidth=t.getScrollWidth(),o.scrollHeight=t.getScrollHeight(),o.clientWidth=t.getClientWidth(),o.clientHeight=t.getClientHeight(),o.clientRect=o.computeClientRect(),o.doesListening&&o.getEventTarget().addEventListener("scroll",o.handleScroll),o}return H(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(wn),Qa=function(e){function t(t,r){return e.call(this,new kn(t),r)||this}return H(t,e),t.prototype.getEventTarget=function(){return this.scrollController.el},t.prototype.computeClientRect=function(){return bn(this.scrollController.el)},t}($a),Xa=function(e){function t(t){return e.call(this,new _n,t)||this}return H(t,e),t.prototype.getEventTarget=function(){return window},t.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},t.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},t}($a),Za="function"==typeof performance?performance.now:Date.now,Ja=function(){function e(){var e=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset);if(t){var r=Za();e.handleSide(t,(r-e.msSinceRequest)/1e3),e.requestAnimation(r)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t){this.isEnabled&&(this.scrollCaches=this.buildCaches(),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var r=e-window.pageXOffset,o=t-window.pageYOffset,n=null===this.pointerScreenY?0:o-this.pointerScreenY,i=null===this.pointerScreenX?0:r-this.pointerScreenX;n<0?this.everMovedUp=!0:n>0&&(this.everMovedDown=!0),i<0?this.everMovedLeft=!0:i>0&&(this.everMovedRight=!0),this.pointerScreenX=r,this.pointerScreenY=o,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(Za()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var r=e.scrollCache,o=this.edgeThreshold,n=o-e.distance,i=n*n/(o*o)*this.maxVelocity*t,a=1;switch(e.name){case"left":a=-1;case"right":r.setScrollLeft(r.getScrollLeft()+i*a);break;case"top":a=-1;case"bottom":r.setScrollTop(r.getScrollTop()+i*a)}},e.prototype.computeBestEdge=function(e,t){for(var r=this.edgeThreshold,o=null,n=0,i=this.scrollCaches;n<i.length;n++){var a=i[n],l=a.clientRect,s=e-l.left,d=l.right-e,c=t-l.top,f=l.bottom-t;s>=0&&d>=0&&c>=0&&f>=0&&(c<=r&&this.everMovedUp&&a.canScrollUp()&&(!o||o.distance>c)&&(o={scrollCache:a,name:"top",distance:c}),f<=r&&this.everMovedDown&&a.canScrollDown()&&(!o||o.distance>f)&&(o={scrollCache:a,name:"bottom",distance:f}),s<=r&&this.everMovedLeft&&a.canScrollLeft()&&(!o||o.distance>s)&&(o={scrollCache:a,name:"left",distance:s}),d<=r&&this.everMovedRight&&a.canScrollRight()&&(!o||o.distance>d)&&(o={scrollCache:a,name:"right",distance:d}))}return o},e.prototype.buildCaches=function(){return this.queryScrollEls().map((function(e){return e===window?new Xa(!1):new Qa(e,!1)}))},e.prototype.queryScrollEls=function(){for(var e=[],t=0,r=this.scrollQuery;t<r.length;t++){var o=r[t];"object"==typeof o?e.push(o):e.push.apply(e,Array.prototype.slice.call(document.querySelectorAll(o)))}return e},e}(),Ka=function(e){function t(t,r){var o=e.call(this,t)||this;o.delay=null,o.minDistance=0,o.touchScrollAllowed=!0,o.mirrorNeedsRevert=!1,o.isInteracting=!1,o.isDragging=!1,o.isDelayEnded=!1,o.isDistanceSurpassed=!1,o.delayTimeoutId=null,o.onPointerDown=function(e){var t;o.isDragging||(o.isInteracting=!0,o.isDelayEnded=!1,o.isDistanceSurpassed=!1,(t=document.body).classList.add("fc-unselectable"),t.addEventListener("selectstart",ct),function(e){e.addEventListener("contextmenu",ct)}(document.body),e.isTouch||e.origEvent.preventDefault(),o.emitter.trigger("pointerdown",e),o.isInteracting&&!o.pointer.shouldIgnoreMove&&(o.mirror.setIsVisible(!1),o.mirror.start(e.subjectEl,e.pageX,e.pageY),o.startDelay(e),o.minDistance||o.handleDistanceSurpassed(e)))},o.onPointerMove=function(e){if(o.isInteracting){if(o.emitter.trigger("pointermove",e),!o.isDistanceSurpassed){var t=o.minDistance,r=e.deltaX,n=e.deltaY;r*r+n*n>=t*t&&o.handleDistanceSurpassed(e)}o.isDragging&&("scroll"!==e.origEvent.type&&(o.mirror.handleMove(e.pageX,e.pageY),o.autoScroller.handleMove(e.pageX,e.pageY)),o.emitter.trigger("dragmove",e))}},o.onPointerUp=function(e){var t;o.isInteracting&&(o.isInteracting=!1,(t=document.body).classList.remove("fc-unselectable"),t.removeEventListener("selectstart",ct),function(e){e.removeEventListener("contextmenu",ct)}(document.body),o.emitter.trigger("pointerup",e),o.isDragging&&(o.autoScroller.stop(),o.tryStopDrag(e)),o.delayTimeoutId&&(clearTimeout(o.delayTimeoutId),o.delayTimeoutId=null))};var n=o.pointer=new qa(t);return n.emitter.on("pointerdown",o.onPointerDown),n.emitter.on("pointermove",o.onPointerMove),n.emitter.on("pointerup",o.onPointerUp),r&&(n.selector=r),o.mirror=new Ya,o.autoScroller=new Ja,o}return H(t,e),t.prototype.destroy=function(){this.pointer.destroy(),this.onPointerUp({})},t.prototype.startDelay=function(e){var t=this;"number"==typeof this.delay?this.delayTimeoutId=setTimeout((function(){t.delayTimeoutId=null,t.handleDelayEnd(e)}),this.delay):this.handleDelayEnd(e)},t.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},t.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},t.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},t.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},t.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},t.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},t.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},t.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},t}(Gi),el=function(){function e(e){this.origRect=vn(e),this.scrollCaches=function(e){for(var t=[];e instanceof HTMLElement;){var r=window.getComputedStyle(e);if("fixed"===r.position)break;/(auto|scroll)/.test(r.overflow+r.overflowY+r.overflowX)&&t.push(e),e=e.parentNode}return t}(e).map((function(e){return new Qa(e,!0)}))}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}},e.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,r=this.scrollCaches;t<r.length;t++){var o=r[t];e+=o.origScrollLeft-o.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,r=this.scrollCaches;t<r.length;t++){var o=r[t];e+=o.origScrollTop-o.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,t){for(var r,o,n={left:e,top:t},i=0,a=this.scrollCaches;i<a.length;i++){var l=a[i];if(r=l.getEventTarget(),o=void 0,"HTML"!==(o=r.tagName)&&"BODY"!==o&&!on(n,l.clientRect))return!1}return!0},e}();var tl=function(){function e(e,t){var r=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=r.dragging;r.initialHit=null,r.movingHit=null,r.finalHit=null,r.prepareHits(),r.processFirstCoord(e),r.initialHit||!r.requireInitial?(t.setIgnoreMove(!1),r.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){r.emitter.trigger("dragstart",e),r.handleMove(e,!0)},this.handleDragMove=function(e){r.emitter.trigger("dragmove",e),r.handleMove(e)},this.handlePointerUp=function(e){r.releaseHits(),r.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){r.movingHit&&r.emitter.trigger("hitupdate",null,!0,e),r.finalHit=r.movingHit,r.movingHit=null,r.emitter.trigger("dragend",e)},this.droppableStore=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new xn}return e.prototype.processFirstCoord=function(e){var t,r,o,n={left:e.pageX,top:e.pageY},i=n,a=e.subjectEl;a!==document&&(t=vn(a),r=i,o=t,i={left:Math.min(Math.max(r.left,o.left),o.right),top:Math.min(Math.max(r.top,o.top),o.bottom)});var l,s,d,c,f,p=this.initialHit=this.queryHitForOffset(i.left,i.top);if(p){if(this.useSubjectCenter&&t){var m=(d=t,c=p.rect,(f={left:Math.max(d.left,c.left),right:Math.min(d.right,c.right),top:Math.max(d.top,c.top),bottom:Math.min(d.bottom,c.bottom)}).left<f.right&&f.top<f.bottom&&f);m&&(i=function(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}}(m))}this.coordAdjust=(s=n,{left:(l=i).left-s.left,top:l.top-s.top})}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var r=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);!t&&rl(this.movingHit,r)||(this.movingHit=r,this.emitter.trigger("hitupdate",r,!1,e))},e.prototype.prepareHits=function(){this.offsetTrackers=jt(this.droppableStore,(function(e){return e.component.prepareHits(),new el(e.el)}))},e.prototype.releaseHits=function(){var e=this.offsetTrackers;for(var t in e)e[t].destroy();this.offsetTrackers={}},e.prototype.queryHitForOffset=function(e,t){var r=this.droppableStore,o=this.offsetTrackers,n=null;for(var i in r){var a=r[i].component,l=o[i];if(l&&l.isWithinClipping(e,t)){var s=l.computeLeft(),d=l.computeTop(),c=e-s,f=t-d,p=l.origRect,m=p.right-p.left,u=p.bottom-p.top;if(c>=0&&c<m&&f>=0&&f<u){var h=a.queryHit(c,f,m,u),g=a.context.getCurrentData().dateProfile;h&&so(g.activeRange,h.dateSpan.range)&&(!n||h.layer>n.layer)&&(h.rect.left+=s,h.rect.right+=s,h.rect.top+=d,h.rect.bottom+=d,n=h)}}}return n},e}();function rl(e,t){return!e&&!t||Boolean(e)===Boolean(t)&&(r=e.dateSpan,o=t.dateSpan,n=r.range,i=o.range,(null===n.start?null:n.start.valueOf())===(null===i.start?null:i.start.valueOf())&&(null===n.end?null:n.end.valueOf())===(null===i.end?null:i.end.valueOf())&&r.allDay===o.allDay&&function(e,t){for(var r in t)if("range"!==r&&"allDay"!==r&&e[r]!==t[r])return!1;for(var r in e)if(!(r in t))return!1;return!0}(r,o));var r,o,n,i}function ol(e,t){for(var r,o,n={},i=0,a=t.pluginHooks.datePointTransforms;i<a.length;i++){var l=a[i];L(n,l(e,t))}return L(n,(r=e,{date:(o=t.dateEnv).toDate(r.range.start),dateStr:o.formatIso(r.range.start,{omitTime:r.allDay}),allDay:r.allDay})),n}var nl=function(e){function t(t){var r=e.call(this,t)||this;r.handlePointerDown=function(e){var t=r.dragging,o=e.origEvent.target;t.setIgnoreMove(!r.component.isValidDateDownEl(o))},r.handleDragEnd=function(e){var t=r.component;if(!r.dragging.pointer.wasTouchScroll){var o=r.hitDragging,n=o.initialHit,i=o.finalHit;if(n&&i&&rl(n,i)){var a=t.context,l=L(L({},ol(n.dateSpan,a)),{dayEl:n.dayEl,jsEvent:e.origEvent,view:a.viewApi||a.calendarApi.view});a.emitter.trigger("dateClick",l)}}},r.dragging=new Ka(t.el),r.dragging.autoScroller.isEnabled=!1;var o=r.hitDragging=new tl(r.dragging,Wi(t));return o.emitter.on("pointerdown",r.handlePointerDown),o.emitter.on("dragend",r.handleDragEnd),r}return H(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(Vi),il=function(e){function t(t){var r=e.call(this,t)||this;r.dragSelection=null,r.handlePointerDown=function(e){var t=r,o=t.component,n=t.dragging,i=o.context.options.selectable&&o.isValidDateDownEl(e.origEvent.target);n.setIgnoreMove(!i),n.delay=e.isTouch?function(e){var t=e.context.options,r=t.selectLongPressDelay;null==r&&(r=t.longPressDelay);return r}(o):null},r.handleDragStart=function(e){r.component.context.calendarApi.unselect(e)},r.handleHitUpdate=function(e,t){var o=r.component.context,n=null,i=!1;e&&((n=function(e,t,r){var o=e.dateSpan,n=t.dateSpan,i=[o.range.start,o.range.end,n.range.start,n.range.end];i.sort(wt);for(var a={},l=0,s=r;l<s.length;l++){var d=(0,s[l])(e,t);if(!1===d)return null;d&&L(a,d)}return a.range={start:i[0],end:i[3]},a.allDay=o.allDay,a}(r.hitDragging.initialHit,e,o.pluginHooks.dateSelectionTransformers))&&r.component.isDateSelectionValid(n)||(i=!0,n=null)),n?o.dispatch({type:"SELECT_DATES",selection:n}):t||o.dispatch({type:"UNSELECT_DATES"}),i?gt():bt(),t||(r.dragSelection=n)},r.handlePointerUp=function(e){r.dragSelection&&(To(r.dragSelection,e,r.component.context),r.dragSelection=null)};var o=t.component.context.options,n=r.dragging=new Ka(t.el);n.touchScrollAllowed=!1,n.minDistance=o.selectMinDistance||0,n.autoScroller.isEnabled=o.dragScroll;var i=r.hitDragging=new tl(r.dragging,Wi(t));return i.emitter.on("pointerdown",r.handlePointerDown),i.emitter.on("dragstart",r.handleDragStart),i.emitter.on("hitupdate",r.handleHitUpdate),i.emitter.on("pointerup",r.handlePointerUp),r}return H(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(Vi);var al=function(e){function t(r){var o=e.call(this,r)||this;o.subjectEl=null,o.subjectSeg=null,o.isDragging=!1,o.eventRange=null,o.relevantEvents=null,o.receivingContext=null,o.validMutation=null,o.mutatedRelevantEvents=null,o.handlePointerDown=function(e){var t=e.origEvent.target,r=o,n=r.component,i=r.dragging,a=i.mirror,l=n.context.options,s=n.context;o.subjectEl=e.subjectEl;var d=o.subjectSeg=mo(e.subjectEl),c=(o.eventRange=d.eventRange).instance.instanceId;o.relevantEvents=Br(s.getCurrentData().eventStore,c),i.minDistance=e.isTouch?0:l.eventDragMinDistance,i.delay=e.isTouch&&c!==n.props.eventSelection?function(e){var t=e.context.options,r=t.eventLongPressDelay;null==r&&(r=t.longPressDelay);return r}(n):null,l.fixedMirrorParent?a.parentNode=l.fixedMirrorParent:a.parentNode=it(t,".fc"),a.revertDuration=l.dragRevertDuration;var f=n.isValidSegDownEl(t)&&!it(t,".fc-event-resizer");i.setIgnoreMove(!f),o.isDragging=f&&e.subjectEl.classList.contains("fc-event-draggable")},o.handleDragStart=function(e){var t=o.component.context,r=o.eventRange,n=r.instance.instanceId;e.isTouch?n!==o.component.props.eventSelection&&t.dispatch({type:"SELECT_EVENT",eventInstanceId:n}):t.dispatch({type:"UNSELECT_EVENT"}),o.isDragging&&(t.calendarApi.unselect(e),t.emitter.trigger("eventDragStart",{el:o.subjectEl,event:new Uo(t,r.def,r.instance),jsEvent:e.origEvent,view:t.viewApi}))},o.handleHitUpdate=function(e,t){if(o.isDragging){var r=o.relevantEvents,n=o.hitDragging.initialHit,i=o.component.context,a=null,l=null,s=null,d=!1,c={affectedEvents:r,mutatedEvents:{defs:{},instances:{}},isEvent:!0};if(e){var f=e.component,p=(a=f.context).options;i===a||p.editable&&p.droppable?(l=function(e,t,r){var o=e.dateSpan,n=t.dateSpan,i=o.range.start,a=n.range.start,l={};o.allDay!==n.allDay&&(l.allDay=n.allDay,l.hasEnd=t.component.context.options.allDayMaintainDuration,n.allDay&&(i=Rt(i)));var s=oo(i,a,e.component.context.dateEnv,e.component===t.component?e.component.largeUnit:null);s.milliseconds&&(l.allDay=!1);for(var d={datesDelta:s,standardProps:l},c=0,f=r;c<f.length;c++){(0,f[c])(d,e,t)}return d}(n,e,a.getCurrentData().pluginHooks.eventDragMutationMassagers))&&(s=Mo(r,a.getCurrentData().eventUiBases,l,a),c.mutatedEvents=s,f.isInteractionValid(c)||(d=!0,l=null,s=null,c.mutatedEvents={defs:{},instances:{}})):a=null}o.displayDrag(a,c),d?gt():bt(),t||(i===a&&rl(n,e)&&(l=null),o.dragging.setMirrorNeedsRevert(!l),o.dragging.setMirrorIsVisible(!e||!document.querySelector(".fc-event-mirror")),o.receivingContext=a,o.validMutation=l,o.mutatedRelevantEvents=s)}},o.handlePointerUp=function(){o.isDragging||o.cleanup()},o.handleDragEnd=function(e){if(o.isDragging){var t=o.component.context,r=t.viewApi,n=o,i=n.receivingContext,a=n.validMutation,l=o.eventRange.def,s=o.eventRange.instance,d=new Uo(t,l,s),c=o.relevantEvents,f=o.mutatedRelevantEvents,p=o.hitDragging.finalHit;if(o.clearDrag(),t.emitter.trigger("eventDragStop",{el:o.subjectEl,event:d,jsEvent:e.origEvent,view:r}),a){if(i===t){var m=new Uo(t,f.defs[l.defId],s?f.instances[s.instanceId]:null);t.dispatch({type:"MERGE_EVENTS",eventStore:f});for(var u={oldEvent:d,event:m,relatedEvents:jo(f,t,s),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:c})}},h={},g=0,b=t.getCurrentData().pluginHooks.eventDropTransformers;g<b.length;g++){var v=b[g];L(h,v(a,t))}t.emitter.trigger("eventDrop",L(L(L({},u),h),{el:e.subjectEl,delta:a.datesDelta,jsEvent:e.origEvent,view:r})),t.emitter.trigger("eventChange",u)}else if(i){var x={event:d,relatedEvents:jo(c,t,s),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:c})}};t.emitter.trigger("eventLeave",L(L({},x),{draggedEl:e.subjectEl,view:r})),t.dispatch({type:"REMOVE_EVENTS",eventStore:c}),t.emitter.trigger("eventRemove",x);var y=f.defs[l.defId],w=f.instances[s.instanceId],k=new Uo(i,y,w);i.dispatch({type:"MERGE_EVENTS",eventStore:f});var _={event:k,relatedEvents:jo(f,i,w),revert:function(){i.dispatch({type:"REMOVE_EVENTS",eventStore:f})}};i.emitter.trigger("eventAdd",_),e.isTouch&&i.dispatch({type:"SELECT_EVENT",eventInstanceId:s.instanceId}),i.emitter.trigger("drop",L(L({},ol(p.dateSpan,i)),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:p.component.context.viewApi})),i.emitter.trigger("eventReceive",L(L({},_),{draggedEl:e.subjectEl,view:p.component.context.viewApi}))}}else t.emitter.trigger("_noEventDrop")}o.cleanup()};var n=o.component.context.options,i=o.dragging=new Ka(r.el);i.pointer.selector=t.SELECTOR,i.touchScrollAllowed=!1,i.autoScroller.isEnabled=n.dragScroll;var a=o.hitDragging=new tl(o.dragging,qi);return a.useSubjectCenter=r.useEventCenter,a.emitter.on("pointerdown",o.handlePointerDown),a.emitter.on("dragstart",o.handleDragStart),a.emitter.on("hitupdate",o.handleHitUpdate),a.emitter.on("pointerup",o.handlePointerUp),a.emitter.on("dragend",o.handleDragEnd),o}return H(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.displayDrag=function(e,t){var r=this.component.context,o=this.receivingContext;o&&o!==e&&(o===r?o.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:t.affectedEvents,mutatedEvents:{defs:{},instances:{}},isEvent:!0}}):o.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},t.prototype.clearDrag=function(){var e=this.component.context,t=this.receivingContext;t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},t.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingContext=null,this.validMutation=null,this.mutatedRelevantEvents=null},t.SELECTOR=".fc-event-draggable, .fc-event-resizable",t}(Vi);var ll=function(e){function t(t){var r=e.call(this,t)||this;r.draggingSegEl=null,r.draggingSeg=null,r.eventRange=null,r.relevantEvents=null,r.validMutation=null,r.mutatedRelevantEvents=null,r.handlePointerDown=function(e){var t=r.component,o=mo(r.querySegEl(e)),n=r.eventRange=o.eventRange;r.dragging.minDistance=t.context.options.eventDragMinDistance,r.dragging.setIgnoreMove(!r.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&r.component.props.eventSelection!==n.instance.instanceId)},r.handleDragStart=function(e){var t=r.component.context,o=r.eventRange;r.relevantEvents=Br(t.getCurrentData().eventStore,r.eventRange.instance.instanceId);var n=r.querySegEl(e);r.draggingSegEl=n,r.draggingSeg=mo(n),t.calendarApi.unselect(),t.emitter.trigger("eventResizeStart",{el:n,event:new Uo(t,o.def,o.instance),jsEvent:e.origEvent,view:t.viewApi})},r.handleHitUpdate=function(e,t,o){var n=r.component.context,i=r.relevantEvents,a=r.hitDragging.initialHit,l=r.eventRange.instance,s=null,d=null,c=!1,f={affectedEvents:i,mutatedEvents:{defs:{},instances:{}},isEvent:!0};e&&(s=function(e,t,r,o,n){for(var i=e.component.context.dateEnv,a=e.dateSpan.range.start,l=t.dateSpan.range.start,s=oo(a,l,i,e.component.largeUnit),d={},c=0,f=n;c<f.length;c++){var p=(0,f[c])(e,t);if(!1===p)return null;p&&L(d,p)}if(r){if(i.add(o.start,s)<o.end)return d.startDelta=s,d}else if(i.add(o.end,s)>o.start)return d.endDelta=s,d;return null}(a,e,o.subjectEl.classList.contains("fc-event-resizer-start"),l.range,n.pluginHooks.eventResizeJoinTransforms)),s&&(d=Mo(i,n.getCurrentData().eventUiBases,s,n),f.mutatedEvents=d,r.component.isInteractionValid(f)||(c=!0,s=null,d=null,f.mutatedEvents=null)),d?n.dispatch({type:"SET_EVENT_RESIZE",state:f}):n.dispatch({type:"UNSET_EVENT_RESIZE"}),c?gt():bt(),t||(s&&rl(a,e)&&(s=null),r.validMutation=s,r.mutatedRelevantEvents=d)},r.handleDragEnd=function(e){var t=r.component.context,o=r.eventRange.def,n=r.eventRange.instance,i=new Uo(t,o,n),a=r.relevantEvents,l=r.mutatedRelevantEvents;if(t.emitter.trigger("eventResizeStop",{el:r.draggingSegEl,event:i,jsEvent:e.origEvent,view:t.viewApi}),r.validMutation){var s=new Uo(t,l.defs[o.defId],n?l.instances[n.instanceId]:null);t.dispatch({type:"MERGE_EVENTS",eventStore:l});var d={oldEvent:i,event:s,relatedEvents:jo(l,t,n),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:a})}};t.emitter.trigger("eventResize",L(L({},d),{el:r.draggingSegEl,startDelta:r.validMutation.startDelta||er(0),endDelta:r.validMutation.endDelta||er(0),jsEvent:e.origEvent,view:t.viewApi})),t.emitter.trigger("eventChange",d)}else t.emitter.trigger("_noEventResize");r.draggingSeg=null,r.relevantEvents=null,r.validMutation=null};var o=t.component,n=r.dragging=new Ka(t.el);n.pointer.selector=".fc-event-resizer",n.touchScrollAllowed=!1,n.autoScroller.isEnabled=o.context.options.dragScroll;var i=r.hitDragging=new tl(r.dragging,Wi(t));return i.emitter.on("pointerdown",r.handlePointerDown),i.emitter.on("dragstart",r.handleDragStart),i.emitter.on("hitupdate",r.handleHitUpdate),i.emitter.on("dragend",r.handleDragEnd),r}return H(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.querySegEl=function(e){return it(e.subjectEl,".fc-event")},t}(Vi);var sl=function(){function e(e){var t=this;this.context=e,this.isRecentPointerDateSelect=!1,this.matchesCancel=!1,this.matchesEvent=!1,this.onSelect=function(e){e.jsEvent&&(t.isRecentPointerDateSelect=!0)},this.onDocumentPointerDown=function(e){var r=t.context.options.unselectCancel,o=e.origEvent.target;t.matchesCancel=!!it(o,r),t.matchesEvent=!!it(o,al.SELECTOR)},this.onDocumentPointerUp=function(e){var r=t.context,o=t.documentPointer,n=r.getCurrentData();if(!o.wasTouchScroll){if(n.dateSelection&&!t.isRecentPointerDateSelect){var i=r.options.unselectAuto;!i||i&&t.matchesCancel||r.calendarApi.unselect(e)}n.eventSelection&&!t.matchesEvent&&r.dispatch({type:"UNSELECT_EVENT"})}t.isRecentPointerDateSelect=!1};var r=this.documentPointer=new qa(document);r.shouldIgnoreMove=!0,r.shouldWatchScroll=!1,r.emitter.on("pointerdown",this.onDocumentPointerDown),r.emitter.on("pointerup",this.onDocumentPointerUp),e.emitter.on("select",this.onSelect)}return e.prototype.destroy=function(){this.context.emitter.off("select",this.onSelect),this.documentPointer.destroy()},e}(),dl={fixedMirrorParent:Pr},cl={dateClick:Pr,eventDragStart:Pr,eventDragStop:Pr,eventDrop:Pr,eventResizeStart:Pr,eventResizeStop:Pr,eventResize:Pr,drop:Pr,eventReceive:Pr,eventLeave:Pr};Yi.dataAttrPrefix="",function(e){function t(t){var r=e.call(this,t)||this;r.shouldIgnoreMove=!1,r.mirrorSelector="",r.currentMirrorEl=null,r.handlePointerDown=function(e){r.emitter.trigger("pointerdown",e),r.shouldIgnoreMove||r.emitter.trigger("dragstart",e)},r.handlePointerMove=function(e){r.shouldIgnoreMove||r.emitter.trigger("dragmove",e)},r.handlePointerUp=function(e){r.emitter.trigger("pointerup",e),r.shouldIgnoreMove||r.emitter.trigger("dragend",e)};var o=r.pointer=new qa(t);return o.emitter.on("pointerdown",r.handlePointerDown),o.emitter.on("pointermove",r.handlePointerMove),o.emitter.on("pointerup",r.handlePointerUp),r}H(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}}}(Gi);var fl=jn({componentInteractions:[nl,il,al,ll],calendarInteractions:[sl],elementDraggingImpl:Ka,optionRefiners:dl,listenerRefiners:cl}),pl=fe`
:root {
  --fc-daygrid-event-dot-width: 8px;
}
.fc .fc-popover {
    position: fixed;
    top: 0; /* for when not positioned yet */
    box-shadow: 0 2px 6px rgba(0,0,0,.15);
  }
.fc .fc-popover-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3px 4px;
  }
.fc .fc-popover-title {
    margin: 0 2px;
  }
.fc .fc-popover-close {
    cursor: pointer;
    opacity: 0.65;
    font-size: 1.1em;
  }
.fc-theme-standard .fc-popover {
    border: 1px solid #ddd;
    border: 1px solid var(--fc-border-color, #ddd);
    background: #fff;
    background: var(--fc-page-bg-color, #fff);
  }
.fc-theme-standard .fc-popover-header {
    background: rgba(208, 208, 208, 0.3);
    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));
  }
/* help things clear margins of inner content */
.fc-daygrid-day-frame,
.fc-daygrid-day-events,
.fc-daygrid-event-harness { /* for event top/bottom margins */
}
.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {
  content: "";
  clear: both;
  display: table; }
.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {
  content: "";
  clear: both;
  display: table; }
.fc .fc-daygrid-body { /* a <div> that wraps the table */
    position: relative;
    z-index: 1; /* container inner z-index's because <tr>s can't do it */
  }
.fc .fc-daygrid-day.fc-day-today {
      background-color: rgba(255, 220, 40, 0.15);
      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));
    }
.fc .fc-daygrid-day-frame {
    position: relative;
    min-height: 100%; /* seems to work better than \`height\` because sets height after rows/cells naturally do it */
  }
.fc {

  /* cell top */

}
.fc .fc-daygrid-day-top {
    display: flex;
    flex-direction: row-reverse;
  }
.fc .fc-day-other .fc-daygrid-day-top {
    opacity: 0.3;
  }
.fc {

  /* day number (within cell top) */

}
.fc .fc-daygrid-day-number {
    position: relative;
    z-index: 4;
    padding: 4px;
  }
.fc {

  /* event container */

}
.fc .fc-daygrid-day-events {
    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */
  }
.fc {

  /* positioning for balanced vs natural */

}
.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {
      position: absolute;
      left: 0;
      right: 0;
    }
.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
      position: relative; /* for containing abs positioned event harnesses */
      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */
    }
.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */
  }
.fc .fc-daygrid-body-natural .fc-daygrid-day-events {
      margin-bottom: 1em;
    }
.fc {

  /* event harness */

}
.fc .fc-daygrid-event-harness {
    position: relative;
  }
.fc .fc-daygrid-event-harness-abs {
    position: absolute;
    top: 0; /* fallback coords for when cannot yet be computed */
    left: 0; /* */
    right: 0; /* */
  }
.fc .fc-daygrid-bg-harness {
    position: absolute;
    top: 0;
    bottom: 0;
  }
.fc {

  /* bg content */

}
.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }
.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }
.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }
.fc {

  /* events */

}
.fc .fc-daygrid-event {
    z-index: 6;
    margin-top: 1px;
  }
.fc .fc-daygrid-event.fc-event-mirror {
    z-index: 7;
  }
.fc {

  /* cell bottom (within day-events) */

}
.fc .fc-daygrid-day-bottom {
    font-size: .85em;
    margin: 2px 3px 0;
  }
.fc .fc-daygrid-more-link {
    position: relative;
    z-index: 4;
    cursor: pointer;
  }
.fc {

  /* week number (within frame) */

}
.fc .fc-daygrid-week-number {
    position: absolute;
    z-index: 5;
    top: 0;
    padding: 2px;
    min-width: 1.5em;
    text-align: center;
    background-color: rgba(208, 208, 208, 0.3);
    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));
    color: #808080;
    color: var(--fc-neutral-text-color, #808080);
  }
.fc {

  /* popover */

}
.fc .fc-more-popover {
    z-index: 8;
  }
.fc .fc-more-popover .fc-popover-body {
    min-width: 220px;
    padding: 10px;
  }
.fc-direction-ltr .fc-daygrid-event.fc-event-start,
.fc-direction-rtl .fc-daygrid-event.fc-event-end {
  margin-left: 2px;
}
.fc-direction-ltr .fc-daygrid-event.fc-event-end,
.fc-direction-rtl .fc-daygrid-event.fc-event-start {
  margin-right: 2px;
}
.fc-direction-ltr .fc-daygrid-week-number {
    left: 0;
    border-radius: 0 0 3px 0;
  }
.fc-direction-rtl .fc-daygrid-week-number {
    right: 0;
    border-radius: 0 0 0 3px;
  }
.fc-liquid-hack .fc-daygrid-day-frame {
    position: static; /* will cause inner absolute stuff to expand to <td> */
  }
.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */
  position: relative; /* for z-indexes assigned later */
  white-space: nowrap;
  border-radius: 3px; /* dot event needs this to when selected */
  font-size: .85em;
  font-size: var(--fc-small-font-size, .85em);
}
/* --- the rectangle ("block") style of event --- */
.fc-daygrid-block-event .fc-event-time {
    font-weight: bold;
  }
.fc-daygrid-block-event .fc-event-time,
  .fc-daygrid-block-event .fc-event-title {
    padding: 1px;
  }
/* --- the dot style of event --- */
.fc-daygrid-dot-event {
  display: flex;
  align-items: center;
  padding: 2px 0

}
.fc-daygrid-dot-event .fc-event-title {
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0; /* important for allowing to shrink all the way */
    overflow: hidden;
    font-weight: bold;
  }
.fc-daygrid-dot-event:hover,
  .fc-daygrid-dot-event.fc-event-mirror {
    background: rgba(0, 0, 0, 0.1);
  }
.fc-daygrid-dot-event.fc-event-selected:before {
    /* expand hit area */
    top: -10px;
    bottom: -10px;
  }
.fc-daygrid-event-dot { /* the actual dot */
  margin: 0 4px;
  box-sizing: content-box;
  width: 0;
  height: 0;
  border: 4px solid #3788d8;
  border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8);
  border-radius: 4px;
  border-radius: calc(var(--fc-daygrid-event-dot-width, 8px) / 2);
}
/* --- spacing between time and title --- */
.fc-direction-ltr .fc-daygrid-event .fc-event-time {
    margin-right: 3px;
  }
.fc-direction-rtl .fc-daygrid-event .fc-event-time {
    margin-left: 3px;
  }
`,ml=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.headerElRef=Je(),t}return H(t,e),t.prototype.renderSimpleLayout=function(e,t){var r=this.props,o=this.context,n=[],i=Aa(o.options);return e&&n.push({type:"header",key:"header",isSticky:i,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),n.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),Xe(ti,{viewSpec:o.viewSpec},(function(e,t){return Xe("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},Xe(Sa,{liquid:!r.isHeightAuto&&!r.forPrint,cols:[],sections:n}))}))},t.prototype.renderHScrollLayout=function(e,t,r,o){var n=this.context.pluginHooks.scrollGridImpl;if(!n)throw new Error("No ScrollGrid implementation");var i=this.props,a=this.context,l=!i.forPrint&&Aa(a.options),s=!i.forPrint&&Ca(a.options),d=[];return e&&d.push({type:"header",key:"header",isSticky:l,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),d.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),s&&d.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:Ea}]}),Xe(ti,{viewSpec:a.viewSpec},(function(e,t){return Xe("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},Xe(n,{liquid:!i.isHeightAuto&&!i.forPrint,colGroups:[{cols:[{span:r,minWidth:o}]}],sections:d}))}))},t}(Vn);function ul(e,t){for(var r=[],o=0;o<t;o+=1)r[o]=[];for(var n=0,i=e;n<i.length;n++){var a=i[n];r[a.row].push(a)}return r}function hl(e,t){for(var r=[],o=0;o<t;o+=1)r[o]=[];for(var n=0,i=e;n<i.length;n++){var a=i[n];r[a.firstCol].push(a)}return r}function gl(e,t){var r=[];if(e){for(a=0;a<t;a+=1)r[a]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]};for(var o=0,n=e.segs;o<n.length;o++){var i=n[o];r[i.row].segs.push(i)}}else for(var a=0;a<t;a+=1)r[a]=null;return r}var bl=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context.options.navLinks?{"data-navlink":fn(e.date),tabIndex:0}:{};return Xe(Oa,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraHookProps:e.extraHookProps,defaultContent:vl},(function(r,o){return(o||e.forceDayTop)&&Xe("div",{className:"fc-daygrid-day-top",ref:r},Xe("a",L({className:"fc-daygrid-day-number"},t),o||Xe(Ke,null," ")))}))},t}(Tn);function vl(e){return e.dayNumberText}var xl=Cr({week:"narrow"}),yl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleRootEl=function(e){t.rootEl=e,Mn(t.props.elRef,e)},t.handleMoreLinkClick=function(e){var r=t.props;if(r.onMoreClick){var o=r.segsByEachCol,n=o.filter((function(e){return r.segIsHidden[e.eventRange.instance.instanceId]}));r.onMoreClick({date:r.date,allSegs:o,hiddenSegs:n,moreCnt:r.moreCnt,dayEl:t.rootEl,ev:e})}},t}return H(t,e),t.prototype.render=function(){var e=this,t=this.context,r=t.options,o=t.viewApi,n=this.props,i=n.date,a=n.dateProfile,l={num:n.moreCnt,text:n.buildMoreLinkText(n.moreCnt),view:o},s=r.navLinks?{"data-navlink":fn(i,"week"),tabIndex:0}:{};return Xe(Na,{date:i,dateProfile:a,todayRange:n.todayRange,showDayNumber:n.showDayNumber,extraHookProps:n.extraHookProps,elRef:this.handleRootEl},(function(t,o,d,c){return Xe("td",L({ref:t,className:["fc-daygrid-day"].concat(o,n.extraClassNames||[]).join(" ")},d,n.extraDataAttrs),Xe("div",{className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",ref:n.innerElRef},n.showWeekNumber&&Xe(Ba,{date:i,defaultFormat:xl},(function(e,t,r,o){return Xe("a",L({ref:e,className:["fc-daygrid-week-number"].concat(t).join(" ")},s),o)})),!c&&Xe(bl,{date:i,dateProfile:a,showDayNumber:n.showDayNumber,forceDayTop:n.forceDayTop,todayRange:n.todayRange,extraHookProps:n.extraHookProps}),Xe("div",{className:"fc-daygrid-day-events",ref:n.fgContentElRef,style:{paddingBottom:n.fgPaddingBottom}},n.fgContent,Boolean(n.moreCnt)&&Xe("div",{className:"fc-daygrid-day-bottom",style:{marginTop:n.moreMarginTop}},Xe(Yn,{hookProps:l,classNames:r.moreLinkClassNames,content:r.moreLinkContent,defaultContent:wl,didMount:r.moreLinkDidMount,willUnmount:r.moreLinkWillUnmount},(function(t,r,o,n){return Xe("a",{ref:t,className:["fc-daygrid-more-link"].concat(r).join(" "),onClick:e.handleMoreLinkClick},n)})))),Xe("div",{className:"fc-daygrid-day-bg"},n.bgContent)))}))},t}(Vn);function wl(e){return e.text}yl.addPropsEquality({onMoreClick:!0});var kl=Cr({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function _l(e){var t=e.eventRange.ui.display;return"list-item"===t||"auto"===t&&!e.eventRange.def.allDay&&e.firstCol===e.lastCol&&e.isStart&&e.isEnd}var El=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context,r=t.options.eventTimeFormat||kl,o=wo(e.seg,r,t,!0,e.defaultDisplayEventEnd);return Xe(Da,{seg:e.seg,timeText:o,defaultContent:Al,isDragging:e.isDragging,isResizing:!1,isDateSelecting:!1,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(t,r,o,n){return Xe("a",L({className:["fc-daygrid-event","fc-daygrid-dot-event"].concat(r).join(" "),ref:t},(i=e.seg,(a=i.eventRange.def.url)?{href:a}:{})),n);var i,a}))},t}(Tn);function Al(e){return Xe(Ke,null,Xe("div",{className:"fc-daygrid-event-dot",style:{borderColor:e.borderColor||e.backgroundColor}}),e.timeText&&Xe("div",{className:"fc-event-time"},e.timeText),Xe("div",{className:"fc-event-title"},e.event.title||Xe(Ke,null," ")))}var Cl=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this.props;return Xe(Ta,L({},e,{extraClassNames:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:kl,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))},t}(Tn);function Sl(e,t,r,o,n,i,a,l){for(var s=[],d=[],c={},f={},p={},m={},u={},h=0;h<a;h+=1)s.push([]),d.push(0);for(var g=0,b=t=go(t,l);g<b.length;g++){A(_=b[g],n[_.eventRange.instance.instanceId+":"+_.firstCol]||0)}!0===r||!0===o?function(e,t,r,o){Tl(e,t,r,!0,(function(e){return e.bottom<=o}))}(d,c,s,i):"number"==typeof r?function(e,t,r,o){Tl(e,t,r,!1,(function(e,t){return t<o}))}(d,c,s,r):"number"==typeof o&&function(e,t,r,o){Tl(e,t,r,!0,(function(e,t){return t<o}))}(d,c,s,o);for(var v=0;v<a;v+=1){for(var x=0,y=0,w=0,k=s[v];w<k.length;w++){var _,E=k[w];c[(_=E.seg).eventRange.instance.instanceId]||(f[_.eventRange.instance.instanceId]=E.top,_.firstCol===_.lastCol&&_.isStart&&_.isEnd?(p[_.eventRange.instance.instanceId]=E.top-x,y=0,x=E.bottom):y=E.bottom-x)}y&&(d[v]?m[v]=y:u[v]=y)}function A(e,t){if(!C(e,t,0))for(var r=e.firstCol;r<=e.lastCol;r+=1)for(var o=0,n=s[r];o<n.length;o++){if(C(e,t,n[o].bottom))return}}function C(e,t,r){if(function(e,t,r){for(var o=e.firstCol;o<=e.lastCol;o+=1)for(var n=0,i=s[o];n<i.length;n++){var a=i[n];if(r<a.bottom&&r+t>a.top)return!1}return!0}(e,t,r)){for(var o=e.firstCol;o<=e.lastCol;o+=1){for(var n=s[o],i=0;i<n.length&&r>=n[i].top;)i+=1;n.splice(i,0,{seg:e,top:r,bottom:r+t})}return!0}return!1}for(var S in n)n[S]||(c[S.split(":")[0]]=!0);return{segsByFirstCol:s.map(Dl),segsByEachCol:s.map((function(t,r){var o=function(e){for(var t=[],r=0,o=e;r<o.length;r++){var n=o[r];t.push(n.seg)}return t}(t);return o=function(e,t,r){for(var o=t,n=Ct(o,1),i={start:o,end:n},a=[],l=0,s=e;l<s.length;l++){var d=s[l],c=d.eventRange,f=c.range,p=ao(f,i);p&&a.push(L(L({},d),{firstCol:r,lastCol:r,eventRange:{def:c.def,ui:L(L({},c.ui),{durationEditable:!1}),instance:c.instance,range:p},isStart:d.isStart&&p.start.valueOf()===f.start.valueOf(),isEnd:d.isEnd&&p.end.valueOf()===f.end.valueOf()}))}return a}(o,e[r].date,r)})),segIsHidden:c,segTops:f,segMarginTops:p,moreCnts:d,moreTops:m,paddingBottoms:u}}function Dl(e,t){for(var r=[],o=0,n=e;o<n.length;o++){var i=n[o];i.seg.firstCol===t&&r.push(i.seg)}return r}function Tl(e,t,r,o,n){for(var i=e.length,a={},l=[],s=0;s<i;s+=1)l.push([]);for(s=0;s<i;s+=1)for(var d=0,c=0,f=r[s];c<f.length;c++){var p=f[c];n(p,d)?m(p):u(p,d,o),p.top!==p.bottom&&(d+=1)}function m(e){var t=e.seg,r=t.eventRange.instance.instanceId;if(!a[r]){a[r]=!0;for(var o=t.firstCol;o<=t.lastCol;o+=1){for(var n=l[o],i=0;i<n.length&&e.top>=n[i].top;)i+=1;n.splice(i,0,e)}}}function u(r,o,n){var i=r.seg,a=i.eventRange.instance.instanceId;if(!t[a]){t[a]=!0;for(var s=i.firstCol;s<=i.lastCol;s+=1){e[s]+=1;var d=e[s];if(n&&1===d&&o>0)for(var c=o-1;l[s].length>c;)u(l[s].pop(),l[s].length,!1)}}}}var Rl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cellElRefs=new ba,t.frameElRefs=new ba,t.fgElRefs=new ba,t.segHarnessRefs=new ba,t.rootElRef=Je(),t.state={framePositions:null,maxContentHeight:null,segHeights:{}},t}return H(t,e),t.prototype.render=function(){var e=this,t=this,r=t.props,o=t.state,n=t.context,i=r.cells.length,a=hl(r.businessHourSegs,i),l=hl(r.bgEventSegs,i),s=hl(this.getHighlightSegs(),i),d=hl(this.getMirrorSegs(),i),c=Sl(r.cells,r.fgEventSegs,r.dayMaxEvents,r.dayMaxEventRows,o.segHeights,o.maxContentHeight,i,n.options.eventOrder),f=c.paddingBottoms,p=c.segsByFirstCol,m=c.segsByEachCol,u=c.segIsHidden,h=c.segTops,g=c.segMarginTops,b=c.moreCnts,v=c.moreTops,x=r.eventDrag&&r.eventDrag.affectedInstances||r.eventResize&&r.eventResize.affectedInstances||{};return Xe("tr",{ref:this.rootElRef},r.renderIntro&&r.renderIntro(),r.cells.map((function(t,o){var n=e.renderFgSegs(p[o],u,h,g,x,r.todayRange),i=e.renderFgSegs(d[o],{},h,{},{},r.todayRange,Boolean(r.eventDrag),Boolean(r.eventResize),!1);return Xe(yl,{key:t.key,elRef:e.cellElRefs.createRef(t.key),innerElRef:e.frameElRefs.createRef(t.key),dateProfile:r.dateProfile,date:t.date,showDayNumber:r.showDayNumbers,showWeekNumber:r.showWeekNumbers&&0===o,forceDayTop:r.showWeekNumbers,todayRange:r.todayRange,extraHookProps:t.extraHookProps,extraDataAttrs:t.extraDataAttrs,extraClassNames:t.extraClassNames,moreCnt:b[o],buildMoreLinkText:r.buildMoreLinkText,onMoreClick:function(e){r.onMoreClick(L(L({},e),{fromCol:o}))},segIsHidden:u,moreMarginTop:v[o],segsByEachCol:m[o],fgPaddingBottom:f[o],fgContentElRef:e.fgElRefs.createRef(t.key),fgContent:Xe(Ke,null,Xe(Ke,null,n),Xe(Ke,null,i)),bgContent:Xe(Ke,null,e.renderFillSegs(s[o],"highlight"),e.renderFillSegs(a[o],"non-business"),e.renderFillSegs(l[o],"bg-event"))})})))},t.prototype.componentDidMount=function(){this.updateSizing(!0)},t.prototype.componentDidUpdate=function(e,t){var r=this.props;this.updateSizing(!Gt(e,r))},t.prototype.getHighlightSegs=function(){var e=this.props;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs},t.prototype.getMirrorSegs=function(){var e=this.props;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]},t.prototype.renderFgSegs=function(e,t,r,o,n,i,a,l,s){var d=this.context,c=this.props.eventSelection,f=this.state.framePositions,p=1===this.props.cells.length,m=[];if(f)for(var u=0,h=e;u<h.length;u++){var g=h[u],b=g.eventRange.instance.instanceId,v=a||l||s,x=n[b],y=t[b]||x,w=t[b]||v||g.firstCol!==g.lastCol||!g.isStart||!g.isEnd,k=void 0,_=void 0,E=void 0,A=void 0;w?(_=r[b],d.isRtl?(A=0,E=f.lefts[g.lastCol]-f.lefts[g.firstCol]):(E=0,A=f.rights[g.firstCol]-f.rights[g.lastCol])):k=o[b],m.push(Xe("div",{className:"fc-daygrid-event-harness"+(w?" fc-daygrid-event-harness-abs":""),key:b,ref:v?null:this.segHarnessRefs.createRef(b+":"+g.firstCol),style:{visibility:y?"hidden":"",marginTop:k||"",top:_||"",left:E||"",right:A||""}},_l(g)?Xe(El,L({seg:g,isDragging:a,isSelected:b===c,defaultDisplayEventEnd:p},ko(g,i))):Xe(Cl,L({seg:g,isDragging:a,isResizing:l,isDateSelecting:s,isSelected:b===c,defaultDisplayEventEnd:p},ko(g,i)))))}return m},t.prototype.renderFillSegs=function(e,t){var r=this.context.isRtl,o=this.props.todayRange,n=this.state.framePositions,i=[];if(n)for(var a=0,l=e;a<l.length;a++){var s=l[a],d=r?{right:0,left:n.lefts[s.lastCol]-n.lefts[s.firstCol]}:{left:0,right:n.rights[s.firstCol]-n.rights[s.lastCol]};i.push(Xe("div",{key:_o(s.eventRange),className:"fc-daygrid-bg-harness",style:d},"bg-event"===t?Xe(Ha,L({seg:s},ko(s,o))):Pa(t)))}return Xe.apply(void 0,F([Ke,{}],i))},t.prototype.updateSizing=function(e){var t=this.props,r=this.frameElRefs;if(null!==t.clientWidth){if(e){var o=t.cells.map((function(e){return r.currentMap[e.key]}));if(o.length){var n=this.rootElRef.current;this.setState({framePositions:new yn(n,o,!0,!1)})}}var i=!0===t.dayMaxEvents||!0===t.dayMaxEventRows;this.setState({segHeights:this.computeSegHeights(),maxContentHeight:i?this.computeMaxContentHeight():null})}},t.prototype.computeSegHeights=function(){return jt(this.segHarnessRefs.currentMap,(function(e){return e.getBoundingClientRect().height}))},t.prototype.computeMaxContentHeight=function(){var e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],r=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-r.getBoundingClientRect().top},t.prototype.getCellEls=function(){var e=this.cellElRefs.currentMap;return this.props.cells.map((function(t){return e[t.key]}))},t}(Vn);Rl.addPropsEquality({onMoreClick:!0}),Rl.addStateEquality({segHeights:Gt});var Il=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.repositioner=new Di(t.updateSize.bind(t)),t.handleRootEl=function(e){t.rootEl=e,t.props.elRef&&Mn(t.props.elRef,e)},t.handleDocumentMousedown=function(e){var r=t.props.onClose;r&&!t.rootEl.contains(e.target)&&r()},t.handleDocumentScroll=function(){t.repositioner.request(10)},t.handleCloseClick=function(){var e=t.props.onClose;e&&e()},t}return H(t,e),t.prototype.render=function(){var e=this.context.theme,t=this.props,r=["fc-popover",e.getClass("popover")].concat(t.extraClassNames||[]);return Xe("div",L({className:r.join(" ")},t.extraAttrs,{ref:this.handleRootEl}),Xe("div",{className:"fc-popover-header "+e.getClass("popoverHeader")},Xe("span",{className:"fc-popover-title"},t.title),Xe("span",{className:"fc-popover-close "+e.getIconClass("close"),onClick:this.handleCloseClick})),Xe("div",{className:"fc-popover-body "+e.getClass("popoverContent")},t.children))},t.prototype.componentDidMount=function(){document.addEventListener("mousedown",this.handleDocumentMousedown),document.addEventListener("scroll",this.handleDocumentScroll),this.updateSize()},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleDocumentMousedown),document.removeEventListener("scroll",this.handleDocumentScroll)},t.prototype.updateSize=function(){var e=this.props,t=e.alignmentEl,r=e.topAlignmentEl,o=this.rootEl;if(o){var n,i=o.getBoundingClientRect(),a=t.getBoundingClientRect(),l=r?r.getBoundingClientRect().top:a.top;l=Math.min(l,window.innerHeight-i.height-10),l=Math.max(l,10),n=this.context.isRtl?a.right-i.width:a.left,n=Math.min(n,window.innerWidth-i.width-10),st(o,{top:l,left:n=Math.max(n,10)})}},t}(Tn),Ml=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=Je(),t}return H(t,e),t.prototype.render=function(){var e=this.context,t=e.options,r=e.dateEnv,o=this.props,n=o.date,i=o.hiddenInstances,a=o.todayRange,l=o.dateProfile,s=o.selectedInstanceId,d=r.format(n,t.dayPopoverFormat);return Xe(Na,{date:n,dateProfile:l,todayRange:a,elRef:this.rootElRef},(function(e,t,r){return Xe(Il,{elRef:e,title:d,extraClassNames:["fc-more-popover"].concat(t),extraAttrs:r,onClose:o.onCloseClick,alignmentEl:o.alignmentEl,topAlignmentEl:o.topAlignmentEl},Xe(Oa,{date:n,dateProfile:l,todayRange:a},(function(e,t){return t&&Xe("div",{className:"fc-more-popover-misc",ref:e},t)})),o.segs.map((function(e){var t=e.eventRange.instance.instanceId;return Xe("div",{className:"fc-daygrid-event-harness",key:t,style:{visibility:i[t]?"hidden":""}},_l(e)?Xe(El,L({seg:e,isDragging:!1,isSelected:t===s,defaultDisplayEventEnd:!1},ko(e,a))):Xe(Cl,L({seg:e,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:t===s,defaultDisplayEventEnd:!1},ko(e,a))))})))}))},t.prototype.positionToHit=function(e,t,r){var o=this.rootElRef.current;if(!r||!o)return null;var n=r.getBoundingClientRect(),i=o.getBoundingClientRect(),a=i.left-n.left,l=i.top-n.top,s=e-a,d=t-l,c=this.props.date;return s>=0&&s<i.width&&d>=0&&d<i.height?{dateSpan:{allDay:!0,range:{start:c,end:Ct(c,1)}},dayEl:o,relativeRect:{left:a,top:l,right:i.width,bottom:i.height},layer:1}:null},t}(Vn),Ol=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.splitBusinessHourSegs=fr(ul),t.splitBgEventSegs=fr(ul),t.splitFgEventSegs=fr(ul),t.splitDateSelectionSegs=fr(ul),t.splitEventDrag=fr(gl),t.splitEventResize=fr(gl),t.buildBuildMoreLinkText=fr(zl),t.morePopoverRef=Je(),t.rowRefs=new ba,t.state={morePopoverState:null},t.handleRootEl=function(e){t.rootEl=e,Mn(t.props.elRef,e)},t.handleMoreLinkClick=function(e){var r=t.context,o=r.dateEnv,n=r.options.moreLinkClick;function i(e){var t=e.eventRange,n=t.def,i=t.instance,a=t.range;return{event:new Uo(r,n,i),start:o.toDate(a.start),end:o.toDate(a.end),isStart:e.isStart,isEnd:e.isEnd}}"function"==typeof n&&(n=n({date:o.toDate(e.date),allDay:!0,allSegs:e.allSegs.map(i),hiddenSegs:e.hiddenSegs.map(i),jsEvent:e.ev,view:r.viewApi})),n&&"popover"!==n?"string"==typeof n&&r.calendarApi.zoomTo(e.date,n):t.setState({morePopoverState:L(L({},e),{currentFgEventSegs:t.props.fgEventSegs,fromRow:e.fromRow,fromCol:e.fromCol})})},t.handleMorePopoverClose=function(){t.setState({morePopoverState:null})},t}return H(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.dateProfile,o=t.dayMaxEventRows,n=t.dayMaxEvents,i=t.expandRows,a=this.state.morePopoverState,l=t.cells.length,s=this.splitBusinessHourSegs(t.businessHourSegs,l),d=this.splitBgEventSegs(t.bgEventSegs,l),c=this.splitFgEventSegs(t.fgEventSegs,l),f=this.splitDateSelectionSegs(t.dateSelectionSegs,l),p=this.splitEventDrag(t.eventDrag,l),m=this.splitEventResize(t.eventResize,l),u=this.buildBuildMoreLinkText(this.context.options.moreLinkText),h=!0===n||!0===o;return h&&!i&&(h=!1,o=null,n=null),Xe("div",{className:["fc-daygrid-body",h?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",i?"":"fc-daygrid-body-natural"].join(" "),ref:this.handleRootEl,style:{width:t.clientWidth,minWidth:t.tableMinWidth}},Xe(la,{unit:"day"},(function(h,g){return Xe(Ke,null,Xe("table",{className:"fc-scrollgrid-sync-table",style:{width:t.clientWidth,minWidth:t.tableMinWidth,height:i?t.clientHeight:""}},t.colGroupNode,Xe("tbody",null,t.cells.map((function(i,a){return Xe(Rl,{ref:e.rowRefs.createRef(a),key:i.length?i[0].date.toISOString():a,showDayNumbers:l>1,showWeekNumbers:t.showWeekNumbers,todayRange:g,dateProfile:r,cells:i,renderIntro:t.renderRowIntro,businessHourSegs:s[a],eventSelection:t.eventSelection,bgEventSegs:d[a].filter(Nl),fgEventSegs:c[a],dateSelectionSegs:f[a],eventDrag:p[a],eventResize:m[a],dayMaxEvents:n,dayMaxEventRows:o,clientWidth:t.clientWidth,clientHeight:t.clientHeight,buildMoreLinkText:u,onMoreClick:function(t){e.handleMoreLinkClick(L(L({},t),{fromRow:a}))}})})))),!t.forPrint&&a&&a.currentFgEventSegs===t.fgEventSegs&&Xe(Ml,{ref:e.morePopoverRef,date:a.date,dateProfile:r,segs:a.allSegs,alignmentEl:a.dayEl,topAlignmentEl:1===l?t.headerAlignElRef.current:null,onCloseClick:e.handleMorePopoverClose,selectedInstanceId:t.eventSelection,hiddenInstances:(t.eventDrag?t.eventDrag.affectedInstances:null)||(t.eventResize?t.eventResize.affectedInstances:null)||{},todayRange:g}))})))},t.prototype.prepareHits=function(){this.rowPositions=new yn(this.rootEl,this.rowRefs.collect().map((function(e){return e.getCellEls()[0]})),!1,!0),this.colPositions=new yn(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)},t.prototype.positionToHit=function(e,t){var r=this.morePopoverRef.current,o=r?r.positionToHit(e,t,this.rootEl):null,n=this.state.morePopoverState;if(o)return L({row:n.fromRow,col:n.fromCol},o);var i=this.colPositions,a=this.rowPositions,l=i.leftToIndex(e),s=a.topToIndex(t);return null!=s&&null!=l?{row:s,col:l,dateSpan:{range:this.getCellRange(s,l),allDay:!0},dayEl:this.getCellEl(s,l),relativeRect:{left:i.lefts[l],right:i.rights[l],top:a.tops[s],bottom:a.bottoms[s]}}:null},t.prototype.getCellEl=function(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]},t.prototype.getCellRange=function(e,t){var r=this.props.cells[e][t].date;return{start:r,end:Ct(r,1)}},t}(Vn);function zl(e){return"function"==typeof e?e:function(t){return"+"+t+" "+e}}function Nl(e){return e.eventRange.def.allDay}var Pl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.forceDayIfListItem=!0,t}return H(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(ma),Hl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicer=new Pl,t.tableRef=Je(),t.handleRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context;return Xe(Ol,L({ref:this.tableRef,elRef:this.handleRootEl},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))},t.prototype.prepareHits=function(){this.tableRef.current.prepareHits()},t.prototype.queryHit=function(e,t){var r=this.tableRef.current.positionToHit(e,t);return r?{component:this,dateSpan:r.dateSpan,dayEl:r.dayEl,rect:{left:r.relativeRect.left,right:r.relativeRect.right,top:r.relativeRect.top,bottom:r.relativeRect.bottom},layer:0}:null},t}(Vn);function Ll(e,t){var r=new fa(e.renderRange,t);return new pa(r,/year|month|week/.test(e.currentRangeUnit))}var Bl=jn({initialView:"dayGridMonth",optionRefiners:{moreLinkClick:Pr,moreLinkClassNames:Pr,moreLinkContent:Pr,moreLinkDidMount:Pr,moreLinkWillUnmount:Pr},views:{dayGrid:{component:function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildDayTableModel=fr(Ll),t.headerRef=Je(),t.tableRef=Je(),t}return H(t,e),t.prototype.render=function(){var e=this,t=this.context,r=t.options,o=t.dateProfileGenerator,n=this.props,i=this.buildDayTableModel(n.dateProfile,o),a=r.dayHeaders&&Xe(da,{ref:this.headerRef,dateProfile:n.dateProfile,dates:i.headerDates,datesRepDistinctDays:1===i.rowCnt}),l=function(t){return Xe(Hl,{ref:e.tableRef,dateProfile:n.dateProfile,dayTableModel:i,businessHours:n.businessHours,dateSelection:n.dateSelection,eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,nextDayThreshold:r.nextDayThreshold,colGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,dayMaxEvents:r.dayMaxEvents,dayMaxEventRows:r.dayMaxEventRows,showWeekNumbers:r.weekNumbers,expandRows:!n.isHeightAuto,headerAlignElRef:e.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:n.forPrint})};return r.dayMinWidth?this.renderHScrollLayout(a,l,i.colCnt,r.dayMinWidth):this.renderSimpleLayout(a,l)},t}(ml),dateProfileGeneratorClass:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.buildRenderRange=function(t,r,o){var n,i=this.props.dateEnv,a=e.prototype.buildRenderRange.call(this,t,r,o),l=a.start,s=a.end;(/^(year|month)$/.test(r)&&(l=i.startOfWeek(l),(n=i.startOfWeek(s)).valueOf()!==s.valueOf()&&(s=At(n,1))),this.props.monthMode&&this.props.fixedWeekCount)&&(s=At(s,6-Math.ceil(Dt(l,s)/7)));return{start:l,end:s}},t}(ai)},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}}),Fl=fe`
/*
A VERTICAL event
*/

.fc-v-event { /* allowed to be top-level */
  display: block;
  border: 1px solid #3788d8;
  border: 1px solid var(--fc-event-border-color, #3788d8);
  background-color: #3788d8;
  background-color: var(--fc-event-bg-color, #3788d8)

}

.fc-v-event .fc-event-main {
    color: #fff;
    color: var(--fc-event-text-color, #fff);
    height: 100%;
  }

.fc-v-event .fc-event-main-frame {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

.fc-v-event .fc-event-time {
    flex-grow: 0;
    flex-shrink: 0;
    max-height: 100%;
    overflow: hidden;
  }

.fc-v-event .fc-event-title-container { /* a container for the sticky cushion */
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 0; /* important for allowing to shrink all the way */
  }

.fc-v-event .fc-event-title { /* will have fc-sticky on it */
    top: 0;
    bottom: 0;
    max-height: 100%; /* clip overflow */
    overflow: hidden;
  }

.fc-v-event:not(.fc-event-start) {
    border-top-width: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

.fc-v-event:not(.fc-event-end) {
    border-bottom-width: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

.fc-v-event.fc-event-selected:before {
    /* expand hit area */
    left: -10px;
    right: -10px;
  }

.fc-v-event {

  /* resizer (mouse AND touch) */

}

.fc-v-event .fc-event-resizer-start {
    cursor: n-resize;
  }

.fc-v-event .fc-event-resizer-end {
    cursor: s-resize;
  }

.fc-v-event {

  /* resizer for MOUSE */

}

.fc-v-event:not(.fc-event-selected) .fc-event-resizer {
      height: 8px;
      height: var(--fc-event-resizer-thickness, 8px);
      left: 0;
      right: 0;
    }

.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start {
      top: -4px;
      top: calc(var(--fc-event-resizer-thickness, 8px) / -2);
    }

.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end {
      bottom: -4px;
      bottom: calc(var(--fc-event-resizer-thickness, 8px) / -2);
    }

.fc-v-event {

  /* resizer for TOUCH (when event is "selected") */

}

.fc-v-event.fc-event-selected .fc-event-resizer {
      left: 50%;
      margin-left: -4px;
      margin-left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);
    }

.fc-v-event.fc-event-selected .fc-event-resizer-start {
      top: -4px;
      top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);
    }

.fc-v-event.fc-event-selected .fc-event-resizer-end {
      bottom: -4px;
      bottom: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);
    }
.fc .fc-timegrid .fc-daygrid-body { /* the all-day daygrid within the timegrid view */
    z-index: 2; /* put above the timegrid-body so that more-popover is above everything. TODO: better solution */
  }
.fc .fc-timegrid-divider {
    padding: 0 0 2px; /* browsers get confused when you set height. use padding instead */
  }
.fc .fc-timegrid-body {
    position: relative;
    z-index: 1; /* scope the z-indexes of slots and cols */
    min-height: 100%; /* fill height always, even when slat table doesn't grow */
  }
.fc .fc-timegrid-axis-chunk { /* for advanced ScrollGrid */
    position: relative /* offset parent for now-indicator-container */

  }
.fc .fc-timegrid-axis-chunk > table {
      position: relative;
      z-index: 1; /* above the now-indicator-container */
    }
.fc .fc-timegrid-slots {
    position: relative;
    z-index: 1;
  }
.fc .fc-timegrid-slot { /* a <td> */
    height: 1.5em;
    border-bottom: 0 /* each cell owns its top border */
  }
.fc .fc-timegrid-slot:empty:before {
      content: '\\00a0'; /* make sure there's at least an empty space to create height for height syncing */
    }
.fc .fc-timegrid-slot-minor {
    border-top-style: dotted;
  }
.fc .fc-timegrid-slot-label-cushion {
    display: inline-block;
    white-space: nowrap;
  }
.fc .fc-timegrid-slot-label {
    vertical-align: middle; /* vertical align the slots */
  }
.fc {


  /* slots AND axis cells (top-left corner of view including the "all-day" text) */

}
.fc .fc-timegrid-axis-cushion,
  .fc .fc-timegrid-slot-label-cushion {
    padding: 0 4px;
  }
.fc {


  /* axis cells (top-left corner of view including the "all-day" text) */
  /* vertical align is more complicated, uses flexbox */

}
.fc .fc-timegrid-axis-frame-liquid {
    height: 100%; /* will need liquid-hack in FF */
  }
.fc .fc-timegrid-axis-frame {
    overflow: hidden;
    display: flex;
    align-items: center; /* vertical align */
    justify-content: flex-end; /* horizontal align. matches text-align below */
  }
.fc .fc-timegrid-axis-cushion {
    max-width: 60px; /* limits the width of the "all-day" text */
    flex-shrink: 0; /* allows text to expand how it normally would, regardless of constrained width */
  }
.fc-direction-ltr .fc-timegrid-slot-label-frame {
    text-align: right;
  }
.fc-direction-rtl .fc-timegrid-slot-label-frame {
    text-align: left;
  }
.fc-liquid-hack .fc-timegrid-axis-frame-liquid {
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  }
.fc .fc-timegrid-col.fc-day-today {
      background-color: rgba(255, 220, 40, 0.15);
      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));
    }
.fc .fc-timegrid-col-frame {
    min-height: 100%; /* liquid-hack is below */
    position: relative;
  }
.fc-liquid-hack .fc-timegrid-col-frame {
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  }
.fc-media-screen .fc-timegrid-cols {
    position: absolute; /* no z-index. children will decide and go above slots */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
  }
.fc-media-screen .fc-timegrid-cols > table {
      height: 100%;
    }
.fc-media-screen .fc-timegrid-col-bg,
  .fc-media-screen .fc-timegrid-col-events,
  .fc-media-screen .fc-timegrid-now-indicator-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
.fc-media-screen .fc-timegrid-event-harness {
    position: absolute; /* top/left/right/bottom will all be set by JS */
  }
.fc {

  /* bg */

}
.fc .fc-timegrid-col-bg {
    z-index: 2; /* TODO: kill */
  }
.fc .fc-timegrid-col-bg .fc-non-business { z-index: 1 }
.fc .fc-timegrid-col-bg .fc-bg-event { z-index: 2 }
.fc .fc-timegrid-col-bg .fc-highlight { z-index: 3 }
.fc .fc-timegrid-bg-harness {
    position: absolute; /* top/bottom will be set by JS */
    left: 0;
    right: 0;
  }
.fc {

  /* fg events */
  /* (the mirror segs are put into a separate container with same classname, */
  /* and they must be after the normal seg container to appear at a higher z-index) */

}
.fc .fc-timegrid-col-events {
    z-index: 3;
    /* child event segs have z-indexes that are scoped within this div */
  }
.fc {

  /* now indicator */

}
.fc .fc-timegrid-now-indicator-container {
    bottom: 0;
    overflow: hidden; /* don't let overflow of lines/arrows cause unnecessary scrolling */
    /* z-index is set on the individual elements */
  }
.fc-direction-ltr .fc-timegrid-col-events {
    margin: 0 2.5% 0 2px;
  }
.fc-direction-rtl .fc-timegrid-col-events {
    margin: 0 2px 0 2.5%;
  }
.fc-timegrid-event-harness-inset .fc-timegrid-event,
.fc-timegrid-event.fc-event-mirror {
  box-shadow: 0px 0px 0px 1px #fff;
  box-shadow: 0px 0px 0px 1px var(--fc-page-bg-color, #fff);
}
.fc-timegrid-event { /* events need to be root */

  font-size: .85em;

  font-size: var(--fc-small-font-size, .85em);
  border-radius: 3px

}
.fc-timegrid-event .fc-event-main {
    padding: 1px 1px 0;
  }
.fc-timegrid-event .fc-event-time {
    white-space: nowrap;
    font-size: .85em;
    font-size: var(--fc-small-font-size, .85em);
    margin-bottom: 1px;
  }
.fc-timegrid-event-condensed .fc-event-main-frame {
    flex-direction: row;
    overflow: hidden;
  }
.fc-timegrid-event-condensed .fc-event-time:after {
    content: '\\00a0-\\00a0'; /* dash surrounded by non-breaking spaces */
  }
.fc-timegrid-event-condensed .fc-event-title {
    font-size: .85em;
    font-size: var(--fc-small-font-size, .85em)
  }
.fc-media-screen .fc-timegrid-event {
    position: absolute; /* absolute WITHIN the harness */
    top: 0;
    bottom: 1px; /* stay away from bottom slot line */
    left: 0;
    right: 0;
  }
.fc {

  /* line */

}
.fc .fc-timegrid-now-indicator-line {
    position: absolute;
    z-index: 4;
    left: 0;
    right: 0;
    border-style: solid;
    border-color: red;
    border-color: var(--fc-now-indicator-color, red);
    border-width: 1px 0 0;
  }
.fc {

  /* arrow */

}
.fc .fc-timegrid-now-indicator-arrow {
    position: absolute;
    z-index: 4;
    margin-top: -5px; /* vertically center on top coordinate */
    border-style: solid;
    border-color: red;
    border-color: var(--fc-now-indicator-color, red);
  }
.fc-direction-ltr .fc-timegrid-now-indicator-arrow {
    left: 0;

    /* triangle pointing right. TODO: mixin */
    border-width: 5px 0 5px 6px;
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
.fc-direction-rtl .fc-timegrid-now-indicator-arrow {
    right: 0;

    /* triangle pointing left. TODO: mixin */
    border-width: 5px 6px 5px 0;
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
`
/*!
FullCalendar v5.5.1
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/,Ul=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},t.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},t.prototype.getKeysForEventDef=function(e){return e.allDay?"background"===(t=e).ui.display||"inverse-background"===t.ui.display?["timed","allDay"]:["allDay"]:["timed"];var t},t}(ln),Vl=Cr({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"});function jl(e){var t=["fc-timegrid-slot","fc-timegrid-slot-label",e.isLabeled?"fc-scrollgrid-shrink":"fc-timegrid-slot-minor"];return Xe(Cn.Consumer,null,(function(r){if(!e.isLabeled)return Xe("td",{className:t.join(" "),"data-time":e.isoTimeStr});var o=r.dateEnv,n=r.options,i=r.viewApi,a=null==n.slotLabelFormat?Vl:Array.isArray(n.slotLabelFormat)?Cr(n.slotLabelFormat[0]):Cr(n.slotLabelFormat),l={level:0,time:e.time,date:o.toDate(e.date),view:i,text:o.format(e.date,a)};return Xe(Yn,{hookProps:l,classNames:n.slotLabelClassNames,content:n.slotLabelContent,defaultContent:Wl,didMount:n.slotLabelDidMount,willUnmount:n.slotLabelWillUnmount},(function(r,o,n,i){return Xe("td",{ref:r,className:t.concat(o).join(" "),"data-time":e.isoTimeStr},Xe("div",{className:"fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"},Xe("div",{className:"fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",ref:n},i)))}))}))}function Wl(e){return e.text}var ql=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){return this.props.slatMetas.map((function(e){return Xe("tr",{key:e.key},Xe(jl,L({},e)))}))},t}(Tn),Gl=Cr({week:"short"}),Yl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.allDaySplitter=new Ul,t.headerElRef=Je(),t.rootElRef=Je(),t.scrollerElRef=Je(),t.state={slatCoords:null},t.handleScrollTopRequest=function(e){var r=t.scrollerElRef.current;r&&(r.scrollTop=e)},t.renderHeadAxis=function(e,r){void 0===r&&(r="");var o=t.context.options,n=t.props.dateProfile.renderRange,i=Dt(n.start,n.end),a=o.navLinks&&1===i?{"data-navlink":fn(n.start,"week"),tabIndex:0}:{};return o.weekNumbers&&"day"===e?Xe(Ba,{date:n.start,defaultFormat:Gl},(function(e,t,o,n){return Xe("th",{ref:e,className:["fc-timegrid-axis","fc-scrollgrid-shrink"].concat(t).join(" ")},Xe("div",{className:"fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",style:{height:r}},Xe("a",L({ref:o,className:"fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"},a),n)))})):Xe("th",{className:"fc-timegrid-axis"},Xe("div",{className:"fc-timegrid-axis-frame",style:{height:r}}))},t.renderTableRowAxis=function(e){var r=t.context,o=r.options,n=r.viewApi,i={text:o.allDayText,view:n};return Xe(Yn,{hookProps:i,classNames:o.allDayClassNames,content:o.allDayContent,defaultContent:$l,didMount:o.allDayDidMount,willUnmount:o.allDayWillUnmount},(function(t,r,o,n){return Xe("td",{ref:t,className:["fc-timegrid-axis","fc-scrollgrid-shrink"].concat(r).join(" ")},Xe("div",{className:"fc-timegrid-axis-frame fc-scrollgrid-shrink-frame"+(null==e?" fc-timegrid-axis-frame-liquid":""),style:{height:e}},Xe("span",{className:"fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",ref:o},n)))}))},t.handleSlatCoords=function(e){t.setState({slatCoords:e})},t}return H(t,e),t.prototype.renderSimpleLayout=function(e,t,r){var o=this.context,n=this.props,i=[],a=Aa(o.options);return e&&i.push({type:"header",key:"header",isSticky:a,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),t&&(i.push({type:"body",key:"all-day",chunk:{content:t}}),i.push({type:"body",key:"all-day-divider",outerContent:Xe("tr",{className:"fc-scrollgrid-section"},Xe("td",{className:"fc-timegrid-divider "+o.theme.getClass("tableCellShaded")}))})),i.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(o.options.expandRows),chunk:{scrollerElRef:this.scrollerElRef,content:r}}),Xe(ti,{viewSpec:o.viewSpec,elRef:this.rootElRef},(function(e,t){return Xe("div",{className:["fc-timegrid"].concat(t).join(" "),ref:e},Xe(Sa,{liquid:!n.isHeightAuto&&!n.forPrint,cols:[{width:"shrink"}],sections:i}))}))},t.prototype.renderHScrollLayout=function(e,t,r,o,n,i,a){var l=this,s=this.context.pluginHooks.scrollGridImpl;if(!s)throw new Error("No ScrollGrid implementation");var d=this.context,c=this.props,f=!c.forPrint&&Aa(d.options),p=!c.forPrint&&Ca(d.options),m=[];e&&m.push({type:"header",key:"header",isSticky:f,syncRowHeights:!0,chunks:[{key:"axis",rowContent:function(e){return Xe("tr",null,l.renderHeadAxis("day",e.rowSyncHeights[0]))}},{key:"cols",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),t&&(m.push({type:"body",key:"all-day",syncRowHeights:!0,chunks:[{key:"axis",rowContent:function(e){return Xe("tr",null,l.renderTableRowAxis(e.rowSyncHeights[0]))}},{key:"cols",content:t}]}),m.push({key:"all-day-divider",type:"body",outerContent:Xe("tr",{className:"fc-scrollgrid-section"},Xe("td",{colSpan:2,className:"fc-timegrid-divider "+d.theme.getClass("tableCellShaded")}))}));var u=d.options.nowIndicator;return m.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(d.options.expandRows),chunks:[{key:"axis",content:function(e){return Xe("div",{className:"fc-timegrid-axis-chunk"},Xe("table",{style:{height:e.expandRows?e.clientHeight:""}},e.tableColGroupNode,Xe("tbody",null,Xe(ql,{slatMetas:i}))),Xe("div",{className:"fc-timegrid-now-indicator-container"},Xe(la,{unit:u?"minute":"day"},(function(e){var t=u&&a&&a.safeComputeTop(e);return"number"==typeof t?Xe(Ia,{isAxis:!0,date:e},(function(e,r,o,n){return Xe("div",{ref:e,className:["fc-timegrid-now-indicator-arrow"].concat(r).join(" "),style:{top:t}},n)})):null}))))}},{key:"cols",scrollerElRef:this.scrollerElRef,content:r}]}),p&&m.push({key:"footer",type:"footer",isSticky:!0,chunks:[{key:"axis",content:Ea},{key:"cols",content:Ea}]}),Xe(ti,{viewSpec:d.viewSpec,elRef:this.rootElRef},(function(e,t){return Xe("div",{className:["fc-timegrid"].concat(t).join(" "),ref:e},Xe(s,{liquid:!c.isHeightAuto&&!c.forPrint,colGroups:[{width:"shrink",cols:[{width:"shrink"}]},{cols:[{span:o,minWidth:n}]}],sections:m}))}))},t.prototype.getAllDayMaxEventProps=function(){var e=this.context.options,t=e.dayMaxEvents,r=e.dayMaxEventRows;return!0!==t&&!0!==r||(t=void 0,r=5),{dayMaxEvents:t,dayMaxEventRows:r}},t}(Vn);function $l(e){return e.text}var Ql=function(){function e(e,t,r){this.positions=e,this.dateProfile=t,this.slotDuration=r}return e.prototype.safeComputeTop=function(e){var t=this.dateProfile;if(co(t.currentRange,e)){var r=Rt(e),o=e.valueOf()-r.valueOf();if(o>=nr(t.slotMinTime)&&o<nr(t.slotMaxTime))return this.computeTimeTop(er(o))}return null},e.prototype.computeDateTop=function(e,t){return t||(t=Rt(e)),this.computeTimeTop(er(e.valueOf()-t.valueOf()))},e.prototype.computeTimeTop=function(e){var t,r,o=this.positions,n=this.dateProfile,i=o.els.length,a=(e.milliseconds-nr(n.slotMinTime))/nr(this.slotDuration);return a=Math.max(0,a),a=Math.min(i,a),t=Math.floor(a),r=a-(t=Math.min(t,i-1)),o.tops[t]+o.getHeight(t)*r},e}(),Xl=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context,r=t.options,o=e.slatElRefs;return Xe("tbody",null,e.slatMetas.map((function(n,i){var a={time:n.time,date:t.dateEnv.toDate(n.date),view:t.viewApi},l=["fc-timegrid-slot","fc-timegrid-slot-lane",n.isLabeled?"":"fc-timegrid-slot-minor"];return Xe("tr",{key:n.key,ref:o.createRef(n.key)},e.axis&&Xe(jl,L({},n)),Xe(Yn,{hookProps:a,classNames:r.slotLaneClassNames,content:r.slotLaneContent,didMount:r.slotLaneDidMount,willUnmount:r.slotLaneWillUnmount},(function(e,t,r,o){return Xe("td",{ref:e,className:l.concat(t).join(" "),"data-time":n.isoTimeStr},o)})))})))},t}(Tn),Zl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=Je(),t.slatElRefs=new ba,t}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.context;return Xe("div",{className:"fc-timegrid-slots",ref:this.rootElRef},Xe("table",{className:t.theme.getClass("table"),style:{minWidth:e.tableMinWidth,width:e.clientWidth,height:e.minHeight}},e.tableColGroupNode,Xe(Xl,{slatElRefs:this.slatElRefs,axis:e.axis,slatMetas:e.slatMetas})))},t.prototype.componentDidMount=function(){this.updateSizing()},t.prototype.componentDidUpdate=function(){this.updateSizing()},t.prototype.componentWillUnmount=function(){this.props.onCoords&&this.props.onCoords(null)},t.prototype.updateSizing=function(){var e,t=this.context,r=this.props;r.onCoords&&null!==r.clientWidth&&(this.rootElRef.current.offsetHeight&&r.onCoords(new Ql(new yn(this.rootElRef.current,(e=this.slatElRefs.currentMap,r.slatMetas.map((function(t){return e[t.key]}))),!1,!0),this.props.dateProfile,t.options.slotDuration)))},t}(Tn);function Jl(e,t){var r,o=[];for(r=0;r<t;r+=1)o.push([]);if(e)for(r=0;r<e.length;r+=1)o[e[r].col].push(e[r]);return o}function Kl(e,t){var r=[];if(e){for(a=0;a<t;a+=1)r[a]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]};for(var o=0,n=e.segs;o<n.length;o++){var i=n[o];r[i.col].segs.push(i)}}else for(var a=0;a<t;a+=1)r[a]=null;return r}function es(e,t,r,o,n){return ts(e,t,r,o),function(e,t){for(var r=0,o=e;r<o.length;r++){(c=o[r]).level=null,c.forwardCoord=null,c.backwardCoord=null,c.forwardPressure=null}var n,i=function(e){var t,r,o,n=[];for(t=0;t<e.length;t+=1){for(r=e[t],o=0;o<n.length&&rs(r,n[o]).length;o+=1);r.level=o,(n[o]||(n[o]=[])).push(r)}return n}(e=go(e,t));if(function(e){var t,r,o,n,i;for(t=0;t<e.length;t+=1)for(r=e[t],o=0;o<r.length;o+=1)for((n=r[o]).forwardSegs=[],i=t+1;i<e.length;i+=1)rs(n,e[i],n.forwardSegs)}(i),n=i[0]){for(var a=0,l=n;a<l.length;a++){os(c=l[a])}for(var s=0,d=n;s<d.length;s++){var c;ns(c=d[s],0,0,t)}}return e}(e,n)}function ts(e,t,r,o){for(var n=0,i=e;n<i.length;n++){var a=i[n];a.top=r.computeDateTop(a.start,t),a.bottom=Math.max(a.top+(o||0),r.computeDateTop(a.end,t))}}function rs(e,t,r){void 0===r&&(r=[]);for(var o=0;o<t.length;o+=1)n=e,i=t[o],n.bottom>i.top&&n.top<i.bottom&&r.push(t[o]);var n,i;return r}function os(e){var t,r,o=e.forwardSegs,n=0;if(null==e.forwardPressure){for(t=0;t<o.length;t+=1)os(r=o[t]),n=Math.max(n,1+r.forwardPressure);e.forwardPressure=n}}function ns(e,t,r,o){var n,i=e.forwardSegs;if(null==e.forwardCoord)for(i.length?(!function(e,t){var r=e.map(is),o=[{field:"forwardPressure",order:-1},{field:"backwardCoord",order:1}].concat(t);r.sort((function(e,t){return vt(e,t,o)})),r.map((function(e){return e._seg}))}(i,o),ns(i[0],t+1,r,o),e.forwardCoord=i[0].backwardCoord):e.forwardCoord=1,e.backwardCoord=e.forwardCoord-(e.forwardCoord-r)/(t+1),n=0;n<i.length;n+=1)ns(i[n],0,e.forwardCoord,o)}function is(e){var t=bo(e);return t.forwardPressure=e.forwardPressure,t.backwardCoord=e.backwardCoord,t}var as=Cr({hour:"numeric",minute:"2-digit",meridiem:!1}),ls=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=["fc-timegrid-event","fc-v-event"];return this.props.isCondensed&&e.push("fc-timegrid-event-condensed"),Xe(Ta,L({},this.props,{defaultTimeFormat:as,extraClassNames:e}))},t}(Tn),ss=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this.props;return Xe(Oa,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,extraHookProps:e.extraHookProps},(function(e,t){return t&&Xe("div",{className:"fc-timegrid-col-misc",ref:e},t)}))},t}(Tn);Yi.timeGridEventCondensedHeight=30;var ds=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.render=function(){var e=this,t=this.props,r=this.context.options.selectMirror,o=t.eventDrag&&t.eventDrag.segs||t.eventResize&&t.eventResize.segs||r&&t.dateSelectionSegs||[],n=t.eventDrag&&t.eventDrag.affectedInstances||t.eventResize&&t.eventResize.affectedInstances||{};return Xe(Na,{elRef:t.elRef,date:t.date,dateProfile:t.dateProfile,todayRange:t.todayRange,extraHookProps:t.extraHookProps},(function(i,a,l){return Xe("td",L({ref:i,className:["fc-timegrid-col"].concat(a,t.extraClassNames||[]).join(" ")},l,t.extraDataAttrs),Xe("div",{className:"fc-timegrid-col-frame"},Xe("div",{className:"fc-timegrid-col-bg"},e.renderFillSegs(t.businessHourSegs,"non-business"),e.renderFillSegs(t.bgEventSegs,"bg-event"),e.renderFillSegs(t.dateSelectionSegs,"highlight")),Xe("div",{className:"fc-timegrid-col-events"},e.renderFgSegs(t.fgEventSegs,n)),Xe("div",{className:"fc-timegrid-col-events"},e.renderFgSegs(o,{},Boolean(t.eventDrag),Boolean(t.eventResize),Boolean(r))),Xe("div",{className:"fc-timegrid-now-indicator-container"},e.renderNowIndicator(t.nowIndicatorSegs)),Xe(ss,{date:t.date,dateProfile:t.dateProfile,todayRange:t.todayRange,extraHookProps:t.extraHookProps})))}))},t.prototype.renderFgSegs=function(e,t,r,o,n){var i=this.props;return i.forPrint?this.renderPrintFgSegs(e):i.slatCoords?this.renderPositionedFgSegs(e,t,r,o,n):null},t.prototype.renderPrintFgSegs=function(e){var t=this.props;return(e=go(e,this.context.options.eventOrder)).map((function(e){return Xe("div",{className:"fc-timegrid-event-harness",key:e.eventRange.instance.instanceId},Xe(ls,L({seg:e,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,isCondensed:!1},ko(e,t.todayRange,t.nowDate))))}))},t.prototype.renderPositionedFgSegs=function(e,t,r,o,n){var i=this,a=this.context,l=this.props;return(e=es(e,l.date,l.slatCoords,a.options.eventMinHeight,a.options.eventOrder)).map((function(e){var a=e.eventRange.instance.instanceId,s=r||o||n?L({left:0,right:0},i.computeSegTopBottomCss(e)):i.computeFgSegPositionCss(e);return Xe("div",{className:"fc-timegrid-event-harness"+(e.level>0?" fc-timegrid-event-harness-inset":""),key:a,style:L({visibility:t[a]?"hidden":""},s)},Xe(ls,L({seg:e,isDragging:r,isResizing:o,isDateSelecting:n,isSelected:a===l.eventSelection,isCondensed:e.bottom-e.top<Yi.timeGridEventCondensedHeight},ko(e,l.todayRange,l.nowDate))))}))},t.prototype.renderFillSegs=function(e,t){var r=this,o=this.context,n=this.props;if(!n.slatCoords)return null;ts(e,n.date,n.slatCoords,o.options.eventMinHeight);var i=e.map((function(e){return Xe("div",{key:_o(e.eventRange),className:"fc-timegrid-bg-harness",style:r.computeSegTopBottomCss(e)},"bg-event"===t?Xe(Ha,L({seg:e},ko(e,n.todayRange,n.nowDate))):Pa(t))}));return Xe(Ke,null,i)},t.prototype.renderNowIndicator=function(e){var t=this.props,r=t.slatCoords,o=t.date;return r?e.map((function(e,t){return Xe(Ia,{isAxis:!1,date:o,key:t},(function(t,n,i,a){return Xe("div",{ref:t,className:["fc-timegrid-now-indicator-line"].concat(n).join(" "),style:{top:r.computeDateTop(e.start,o)}},a)}))})):null},t.prototype.computeFgSegPositionCss=function(e){var t,r,o=this.context,n=o.isRtl,i=o.options.slotEventOverlap,a=e.backwardCoord,l=e.forwardCoord;i&&(l=Math.min(1,a+2*(l-a))),n?(t=1-l,r=a):(t=a,r=1-l);var s={zIndex:e.level+1,left:100*t+"%",right:100*r+"%"};return i&&e.forwardPressure&&(s[n?"marginLeft":"marginRight"]=20),L(L({},s),this.computeSegTopBottomCss(e))},t.prototype.computeSegTopBottomCss=function(e){return{top:e.top,bottom:-e.bottom}},t}(Tn),cs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.splitFgEventSegs=fr(Jl),t.splitBgEventSegs=fr(Jl),t.splitBusinessHourSegs=fr(Jl),t.splitNowIndicatorSegs=fr(Jl),t.splitDateSelectionSegs=fr(Jl),t.splitEventDrag=fr(Kl),t.splitEventResize=fr(Kl),t.rootElRef=Je(),t.cellElRefs=new ba,t}return H(t,e),t.prototype.render=function(){var e=this,t=this.props,r=this.context.options.nowIndicator&&t.slatCoords&&t.slatCoords.safeComputeTop(t.nowDate),o=t.cells.length,n=this.splitFgEventSegs(t.fgEventSegs,o),i=this.splitBgEventSegs(t.bgEventSegs,o),a=this.splitBusinessHourSegs(t.businessHourSegs,o),l=this.splitNowIndicatorSegs(t.nowIndicatorSegs,o),s=this.splitDateSelectionSegs(t.dateSelectionSegs,o),d=this.splitEventDrag(t.eventDrag,o),c=this.splitEventResize(t.eventResize,o);return Xe("div",{className:"fc-timegrid-cols",ref:this.rootElRef},Xe("table",{style:{minWidth:t.tableMinWidth,width:t.clientWidth}},t.tableColGroupNode,Xe("tbody",null,Xe("tr",null,t.axis&&Xe("td",{className:"fc-timegrid-col fc-timegrid-axis"},Xe("div",{className:"fc-timegrid-col-frame"},Xe("div",{className:"fc-timegrid-now-indicator-container"},"number"==typeof r&&Xe(Ia,{isAxis:!0,date:t.nowDate},(function(e,t,o,n){return Xe("div",{ref:e,className:["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),style:{top:r}},n)}))))),t.cells.map((function(r,o){return Xe(ds,{key:r.key,elRef:e.cellElRefs.createRef(r.key),dateProfile:t.dateProfile,date:r.date,nowDate:t.nowDate,todayRange:t.todayRange,extraHookProps:r.extraHookProps,extraDataAttrs:r.extraDataAttrs,extraClassNames:r.extraClassNames,fgEventSegs:n[o],bgEventSegs:i[o],businessHourSegs:a[o],nowIndicatorSegs:l[o],dateSelectionSegs:s[o],eventDrag:d[o],eventResize:c[o],slatCoords:t.slatCoords,eventSelection:t.eventSelection,forPrint:t.forPrint})}))))))},t.prototype.componentDidMount=function(){this.updateCoords()},t.prototype.componentDidUpdate=function(){this.updateCoords()},t.prototype.updateCoords=function(){var e,t=this.props;t.onColCoords&&null!==t.clientWidth&&t.onColCoords(new yn(this.rootElRef.current,(e=this.cellElRefs.currentMap,t.cells.map((function(t){return e[t.key]}))),!0,!1))},t}(Tn);var fs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processSlotOptions=fr(ps),t.state={slatCoords:null},t.handleScrollRequest=function(e){var r=t.props.onScrollTopRequest,o=t.state.slatCoords;if(r&&o){if(e.time){var n=o.computeTimeTop(e.time);(n=Math.ceil(n))&&(n+=1),r(n)}return!0}return!1},t.handleColCoords=function(e){t.colCoords=e},t.handleSlatCoords=function(e){t.setState({slatCoords:e}),t.props.onSlatCoords&&t.props.onSlatCoords(e)},t}return H(t,e),t.prototype.render=function(){var e=this.props,t=this.state;return Xe("div",{className:"fc-timegrid-body",ref:e.rootElRef,style:{width:e.clientWidth,minWidth:e.tableMinWidth}},Xe(Zl,{axis:e.axis,dateProfile:e.dateProfile,slatMetas:e.slatMetas,clientWidth:e.clientWidth,minHeight:e.expandRows?e.clientHeight:"",tableMinWidth:e.tableMinWidth,tableColGroupNode:e.axis?e.tableColGroupNode:null,onCoords:this.handleSlatCoords}),Xe(cs,{cells:e.cells,axis:e.axis,dateProfile:e.dateProfile,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,todayRange:e.todayRange,nowDate:e.nowDate,nowIndicatorSegs:e.nowIndicatorSegs,clientWidth:e.clientWidth,tableMinWidth:e.tableMinWidth,tableColGroupNode:e.tableColGroupNode,slatCoords:t.slatCoords,onColCoords:this.handleColCoords,forPrint:e.forPrint}))},t.prototype.componentDidMount=function(){this.scrollResponder=this.context.createScrollResponder(this.handleScrollRequest)},t.prototype.componentDidUpdate=function(e){this.scrollResponder.update(e.dateProfile!==this.props.dateProfile)},t.prototype.componentWillUnmount=function(){this.scrollResponder.detach()},t.prototype.positionToHit=function(e,t){var r=this.context,o=r.dateEnv,n=r.options,i=this.colCoords,a=this.props.dateProfile,l=this.state.slatCoords,s=this.processSlotOptions(this.props.slotDuration,n.snapDuration),d=s.snapDuration,c=s.snapsPerSlot,f=i.leftToIndex(e),p=l.positions.topToIndex(t);if(null!=f&&null!=p){var m=l.positions.tops[p],u=l.positions.getHeight(p),h=(t-m)/u,g=p*c+Math.floor(h*c),b=this.props.cells[f].date,v=rr(a.slotMinTime,function(e,t){return{years:e.years*t,months:e.months*t,days:e.days*t,milliseconds:e.milliseconds*t}}(d,g)),x=o.add(b,v);return{col:f,dateSpan:{range:{start:x,end:o.add(x,d)},allDay:!1},dayEl:i.els[f],relativeRect:{left:i.lefts[f],right:i.rights[f],top:m,bottom:m+u}}}return null},t}(Tn);function ps(e,t){var r=t||e,o=ir(e,r);return null===o&&(r=e,o=1),{snapDuration:r,snapsPerSlot:o}}var ms=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.sliceRange=function(e,t){for(var r=[],o=0;o<t.length;o+=1){var n=ao(e,t[o]);n&&r.push({start:n.start,end:n.end,isStart:n.start.valueOf()===e.start.valueOf(),isEnd:n.end.valueOf()===e.end.valueOf(),col:o})}return r},t}(ma),us=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildDayRanges=fr(hs),t.slicer=new ms,t.timeColsRef=Je(),t.handleRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return H(t,e),t.prototype.render=function(){var e=this,t=this.props,r=this.context,o=t.dateProfile,n=t.dayTableModel,i=r.options.nowIndicator,a=this.buildDayRanges(n,o,r.dateEnv);return Xe(la,{unit:i?"minute":"day"},(function(l,s){return Xe(fs,L({ref:e.timeColsRef,rootElRef:e.handleRootEl},e.slicer.sliceProps(t,o,null,r,a),{forPrint:t.forPrint,axis:t.axis,dateProfile:o,slatMetas:t.slatMetas,slotDuration:t.slotDuration,cells:n.cells[0],tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,clientWidth:t.clientWidth,clientHeight:t.clientHeight,expandRows:t.expandRows,nowDate:l,nowIndicatorSegs:i&&e.slicer.sliceNowDate(l,r,a),todayRange:s,onScrollTopRequest:t.onScrollTopRequest,onSlatCoords:t.onSlatCoords}))}))},t.prototype.queryHit=function(e,t){var r=this.timeColsRef.current.positionToHit(e,t);return r?{component:this,dateSpan:r.dateSpan,dayEl:r.dayEl,rect:{left:r.relativeRect.left,right:r.relativeRect.right,top:r.relativeRect.top,bottom:r.relativeRect.bottom},layer:0}:null},t}(Vn);function hs(e,t,r){for(var o=[],n=0,i=e.headerDates;n<i.length;n++){var a=i[n];o.push({start:r.add(a,t.slotMinTime),end:r.add(a,t.slotMaxTime)})}return o}var gs=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];function bs(e,t,r,o,n){for(var i=new Date(0),a=e,l=er(0),s=r||function(e){var t,r,o;for(t=gs.length-1;t>=0;t-=1)if(null!==(o=ir(r=er(gs[t]),e))&&o>1)return r;return e}(o),d=[];nr(a)<nr(t);){var c=n.add(i,a),f=null!==ir(l,s);d.push({date:c,time:a,key:c.toISOString(),isoTimeStr:sr(c),isLabeled:f}),a=rr(a,o),l=rr(l,o)}return d}var vs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildTimeColsModel=fr(xs),t.buildSlatMetas=fr(bs),t}return H(t,e),t.prototype.render=function(){var e=this,t=this.context,r=t.options,o=t.dateEnv,n=t.dateProfileGenerator,i=this.props,a=i.dateProfile,l=this.buildTimeColsModel(a,n),s=this.allDaySplitter.splitProps(i),d=this.buildSlatMetas(a.slotMinTime,a.slotMaxTime,r.slotLabelInterval,r.slotDuration,o),c=r.dayMinWidth,f=!c,p=c,m=r.dayHeaders&&Xe(da,{dates:l.headerDates,dateProfile:a,datesRepDistinctDays:!0,renderIntro:f?this.renderHeadAxis:null}),u=!1!==r.allDaySlot&&function(t){return Xe(Hl,L({},s.allDay,{dateProfile:a,dayTableModel:l,nextDayThreshold:r.nextDayThreshold,tableMinWidth:t.tableMinWidth,colGroupNode:t.tableColGroupNode,renderRowIntro:f?e.renderTableRowAxis:null,showWeekNumbers:!1,expandRows:!1,headerAlignElRef:e.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:i.forPrint},e.getAllDayMaxEventProps()))},h=function(t){return Xe(us,L({},s.timed,{dayTableModel:l,dateProfile:a,axis:f,slotDuration:r.slotDuration,slatMetas:d,forPrint:i.forPrint,tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,clientWidth:t.clientWidth,clientHeight:t.clientHeight,onSlatCoords:e.handleSlatCoords,expandRows:t.expandRows,onScrollTopRequest:e.handleScrollTopRequest}))};return p?this.renderHScrollLayout(m,u,h,l.colCnt,c,d,this.state.slatCoords):this.renderSimpleLayout(m,u,h)},t}(Yl);function xs(e,t){var r=new fa(e.renderRange,t);return new pa(r,!1)}var ys=jn({initialView:"timeGridWeek",optionRefiners:{allDaySlot:Boolean},views:{timeGrid:{component:vs,usesMinMaxTime:!0,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}}),ws=fe`/*!
 * Bootstrap v4.6.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:not([href]):not([class]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[role="button"] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
  font-size: 2.5rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3, .h3 {
  font-size: 1.75rem;
}

h4, .h4 {
  font-size: 1.5rem;
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
  font-size: 80%;
  font-weight: 400;
}

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d;
}

.blockquote-footer::before {
  content: "\\2014\\00A0";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #6c757d;
}

code {
  font-size: 87.5%;
  color: #e83e8c;
  word-wrap: break-word;
}

a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 700;
}

pre {
  display: block;
  font-size: 87.5%;
  color: #212529;
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container, .container-sm {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container, .container-sm, .container-md {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container, .container-sm, .container-md, .container-lg {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1140px;
  }
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
}

.row-cols-1 > * {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2 > * {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3 > * {
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.row-cols-4 > * {
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5 > * {
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6 > * {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-auto {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  -ms-flex-order: -1;
  order: -1;
}

.order-last {
  -ms-flex-order: 13;
  order: 13;
}

.order-0 {
  -ms-flex-order: 0;
  order: 0;
}

.order-1 {
  -ms-flex-order: 1;
  order: 1;
}

.order-2 {
  -ms-flex-order: 2;
  order: 2;
}

.order-3 {
  -ms-flex-order: 3;
  order: 3;
}

.order-4 {
  -ms-flex-order: 4;
  order: 4;
}

.order-5 {
  -ms-flex-order: 5;
  order: 5;
}

.order-6 {
  -ms-flex-order: 6;
  order: 6;
}

.order-7 {
  -ms-flex-order: 7;
  order: 7;
}

.order-8 {
  -ms-flex-order: 8;
  order: 8;
}

.order-9 {
  -ms-flex-order: 9;
  order: 9;
}

.order-10 {
  -ms-flex-order: 10;
  order: 10;
}

.order-11 {
  -ms-flex-order: 11;
  order: 11;
}

.order-12 {
  -ms-flex-order: 12;
  order: 12;
}

.offset-1 {
  margin-left: 8.333333%;
}

.offset-2 {
  margin-left: 16.666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.333333%;
}

.offset-5 {
  margin-left: 41.666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.333333%;
}

.offset-8 {
  margin-left: 66.666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.333333%;
}

.offset-11 {
  margin-left: 91.666667%;
}

@media (min-width: 576px) {
  .col-sm {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-sm-1 > * {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-sm-2 > * {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-sm-3 > * {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .row-cols-sm-4 > * {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-sm-5 > * {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-sm-6 > * {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-sm-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-sm-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-sm-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-sm-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-sm-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-sm-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-sm-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-sm-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-sm-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-sm-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-sm-first {
    -ms-flex-order: -1;
    order: -1;
  }
  .order-sm-last {
    -ms-flex-order: 13;
    order: 13;
  }
  .order-sm-0 {
    -ms-flex-order: 0;
    order: 0;
  }
  .order-sm-1 {
    -ms-flex-order: 1;
    order: 1;
  }
  .order-sm-2 {
    -ms-flex-order: 2;
    order: 2;
  }
  .order-sm-3 {
    -ms-flex-order: 3;
    order: 3;
  }
  .order-sm-4 {
    -ms-flex-order: 4;
    order: 4;
  }
  .order-sm-5 {
    -ms-flex-order: 5;
    order: 5;
  }
  .order-sm-6 {
    -ms-flex-order: 6;
    order: 6;
  }
  .order-sm-7 {
    -ms-flex-order: 7;
    order: 7;
  }
  .order-sm-8 {
    -ms-flex-order: 8;
    order: 8;
  }
  .order-sm-9 {
    -ms-flex-order: 9;
    order: 9;
  }
  .order-sm-10 {
    -ms-flex-order: 10;
    order: 10;
  }
  .order-sm-11 {
    -ms-flex-order: 11;
    order: 11;
  }
  .order-sm-12 {
    -ms-flex-order: 12;
    order: 12;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.333333%;
  }
  .offset-sm-2 {
    margin-left: 16.666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.333333%;
  }
  .offset-sm-5 {
    margin-left: 41.666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.333333%;
  }
  .offset-sm-8 {
    margin-left: 66.666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.333333%;
  }
  .offset-sm-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 768px) {
  .col-md {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-md-1 > * {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-md-2 > * {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-md-3 > * {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .row-cols-md-4 > * {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-md-5 > * {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-md-6 > * {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-md-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-md-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-md-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-md-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-md-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-md-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-md-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-md-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-md-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-md-first {
    -ms-flex-order: -1;
    order: -1;
  }
  .order-md-last {
    -ms-flex-order: 13;
    order: 13;
  }
  .order-md-0 {
    -ms-flex-order: 0;
    order: 0;
  }
  .order-md-1 {
    -ms-flex-order: 1;
    order: 1;
  }
  .order-md-2 {
    -ms-flex-order: 2;
    order: 2;
  }
  .order-md-3 {
    -ms-flex-order: 3;
    order: 3;
  }
  .order-md-4 {
    -ms-flex-order: 4;
    order: 4;
  }
  .order-md-5 {
    -ms-flex-order: 5;
    order: 5;
  }
  .order-md-6 {
    -ms-flex-order: 6;
    order: 6;
  }
  .order-md-7 {
    -ms-flex-order: 7;
    order: 7;
  }
  .order-md-8 {
    -ms-flex-order: 8;
    order: 8;
  }
  .order-md-9 {
    -ms-flex-order: 9;
    order: 9;
  }
  .order-md-10 {
    -ms-flex-order: 10;
    order: 10;
  }
  .order-md-11 {
    -ms-flex-order: 11;
    order: 11;
  }
  .order-md-12 {
    -ms-flex-order: 12;
    order: 12;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.333333%;
  }
  .offset-md-2 {
    margin-left: 16.666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.333333%;
  }
  .offset-md-5 {
    margin-left: 41.666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.333333%;
  }
  .offset-md-8 {
    margin-left: 66.666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.333333%;
  }
  .offset-md-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 992px) {
  .col-lg {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-lg-1 > * {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-lg-2 > * {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-lg-3 > * {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .row-cols-lg-4 > * {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-lg-5 > * {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-lg-6 > * {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-lg-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-lg-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-lg-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-lg-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-lg-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-lg-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-lg-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-lg-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-lg-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-lg-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-lg-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-lg-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-lg-first {
    -ms-flex-order: -1;
    order: -1;
  }
  .order-lg-last {
    -ms-flex-order: 13;
    order: 13;
  }
  .order-lg-0 {
    -ms-flex-order: 0;
    order: 0;
  }
  .order-lg-1 {
    -ms-flex-order: 1;
    order: 1;
  }
  .order-lg-2 {
    -ms-flex-order: 2;
    order: 2;
  }
  .order-lg-3 {
    -ms-flex-order: 3;
    order: 3;
  }
  .order-lg-4 {
    -ms-flex-order: 4;
    order: 4;
  }
  .order-lg-5 {
    -ms-flex-order: 5;
    order: 5;
  }
  .order-lg-6 {
    -ms-flex-order: 6;
    order: 6;
  }
  .order-lg-7 {
    -ms-flex-order: 7;
    order: 7;
  }
  .order-lg-8 {
    -ms-flex-order: 8;
    order: 8;
  }
  .order-lg-9 {
    -ms-flex-order: 9;
    order: 9;
  }
  .order-lg-10 {
    -ms-flex-order: 10;
    order: 10;
  }
  .order-lg-11 {
    -ms-flex-order: 11;
    order: 11;
  }
  .order-lg-12 {
    -ms-flex-order: 12;
    order: 12;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.333333%;
  }
  .offset-lg-2 {
    margin-left: 16.666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.333333%;
  }
  .offset-lg-5 {
    margin-left: 41.666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.333333%;
  }
  .offset-lg-8 {
    margin-left: 66.666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.333333%;
  }
  .offset-lg-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 1200px) {
  .col-xl {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-xl-1 > * {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-xl-2 > * {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-xl-3 > * {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .row-cols-xl-4 > * {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-xl-5 > * {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-xl-6 > * {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-xl-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-xl-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-xl-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-xl-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xl-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-xl-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-xl-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xl-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-xl-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-xl-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xl-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-xl-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-xl-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-xl-first {
    -ms-flex-order: -1;
    order: -1;
  }
  .order-xl-last {
    -ms-flex-order: 13;
    order: 13;
  }
  .order-xl-0 {
    -ms-flex-order: 0;
    order: 0;
  }
  .order-xl-1 {
    -ms-flex-order: 1;
    order: 1;
  }
  .order-xl-2 {
    -ms-flex-order: 2;
    order: 2;
  }
  .order-xl-3 {
    -ms-flex-order: 3;
    order: 3;
  }
  .order-xl-4 {
    -ms-flex-order: 4;
    order: 4;
  }
  .order-xl-5 {
    -ms-flex-order: 5;
    order: 5;
  }
  .order-xl-6 {
    -ms-flex-order: 6;
    order: 6;
  }
  .order-xl-7 {
    -ms-flex-order: 7;
    order: 7;
  }
  .order-xl-8 {
    -ms-flex-order: 8;
    order: 8;
  }
  .order-xl-9 {
    -ms-flex-order: 9;
    order: 9;
  }
  .order-xl-10 {
    -ms-flex-order: 10;
    order: 10;
  }
  .order-xl-11 {
    -ms-flex-order: 11;
    order: 11;
  }
  .order-xl-12 {
    -ms-flex-order: 12;
    order: 12;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.333333%;
  }
  .offset-xl-2 {
    margin-left: 16.666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.333333%;
  }
  .offset-xl-5 {
    margin-left: 41.666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.333333%;
  }
  .offset-xl-8 {
    margin-left: 66.666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.333333%;
  }
  .offset-xl-11 {
    margin-left: 91.666667%;
  }
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  color: #212529;
  background-color: rgba(0, 0, 0, 0.075);
}

.table-primary,
.table-primary > th,
.table-primary > td {
  background-color: #b8daff;
}

.table-primary th,
.table-primary td,
.table-primary thead th,
.table-primary tbody + tbody {
  border-color: #7abaff;
}

.table-hover .table-primary:hover {
  background-color: #9fcdff;
}

.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
  background-color: #9fcdff;
}

.table-secondary,
.table-secondary > th,
.table-secondary > td {
  background-color: #d6d8db;
}

.table-secondary th,
.table-secondary td,
.table-secondary thead th,
.table-secondary tbody + tbody {
  border-color: #b3b7bb;
}

.table-hover .table-secondary:hover {
  background-color: #c8cbcf;
}

.table-hover .table-secondary:hover > td,
.table-hover .table-secondary:hover > th {
  background-color: #c8cbcf;
}

.table-success,
.table-success > th,
.table-success > td {
  background-color: #c3e6cb;
}

.table-success th,
.table-success td,
.table-success thead th,
.table-success tbody + tbody {
  border-color: #8fd19e;
}

.table-hover .table-success:hover {
  background-color: #b1dfbb;
}

.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
  background-color: #b1dfbb;
}

.table-info,
.table-info > th,
.table-info > td {
  background-color: #bee5eb;
}

.table-info th,
.table-info td,
.table-info thead th,
.table-info tbody + tbody {
  border-color: #86cfda;
}

.table-hover .table-info:hover {
  background-color: #abdde5;
}

.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
  background-color: #abdde5;
}

.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #ffeeba;
}

.table-warning th,
.table-warning td,
.table-warning thead th,
.table-warning tbody + tbody {
  border-color: #ffdf7e;
}

.table-hover .table-warning:hover {
  background-color: #ffe8a1;
}

.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
  background-color: #ffe8a1;
}

.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #f5c6cb;
}

.table-danger th,
.table-danger td,
.table-danger thead th,
.table-danger tbody + tbody {
  border-color: #ed969e;
}

.table-hover .table-danger:hover {
  background-color: #f1b0b7;
}

.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
  background-color: #f1b0b7;
}

.table-light,
.table-light > th,
.table-light > td {
  background-color: #fdfdfe;
}

.table-light th,
.table-light td,
.table-light thead th,
.table-light tbody + tbody {
  border-color: #fbfcfc;
}

.table-hover .table-light:hover {
  background-color: #ececf6;
}

.table-hover .table-light:hover > td,
.table-hover .table-light:hover > th {
  background-color: #ececf6;
}

.table-dark,
.table-dark > th,
.table-dark > td {
  background-color: #c6c8ca;
}

.table-dark th,
.table-dark td,
.table-dark thead th,
.table-dark tbody + tbody {
  border-color: #95999c;
}

.table-hover .table-dark:hover {
  background-color: #b9bbbe;
}

.table-hover .table-dark:hover > td,
.table-hover .table-dark:hover > th {
  background-color: #b9bbbe;
}

.table-active,
.table-active > th,
.table-active > td {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
  background-color: rgba(0, 0, 0, 0.075);
}

.table .thead-dark th {
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
}

.table .thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.table-dark {
  color: #fff;
  background-color: #343a40;
}

.table-dark th,
.table-dark td,
.table-dark thead th {
  border-color: #454d55;
}

.table-dark.table-bordered {
  border: 0;
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

.table-dark.table-hover tbody tr:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.075);
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-sm > .table-bordered {
    border: 0;
  }
}

@media (max-width: 767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-md > .table-bordered {
    border: 0;
  }
}

@media (max-width: 991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-lg > .table-bordered {
    border: 0;
  }
}

@media (max-width: 1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-xl > .table-bordered {
    border: 0;
  }
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-responsive > .table-bordered {
  border: 0;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

input[type="date"].form-control,
input[type="time"].form-control,
input[type="datetime-local"].form-control,
input[type="month"].form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.form-control-file,
.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
  line-height: 1.5;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.form-control-lg {
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

select.form-control[size], select.form-control[multiple] {
  height: auto;
}

textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
}

.form-row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row > .col,
.form-row > [class*="col-"] {
  padding-right: 5px;
  padding-left: 5px;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}

.form-check-input[disabled] ~ .form-check-label,
.form-check-input:disabled ~ .form-check-label {
  color: #6c757d;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check-inline {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 0;
  margin-right: 0.75rem;
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: 0.3125rem;
  margin-left: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #28a745;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: .1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(40, 167, 69, 0.9);
  border-radius: 0.25rem;
}

.form-row > .col > .valid-tooltip,
.form-row > [class*="col-"] > .valid-tooltip {
  left: 5px;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: #28a745;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .custom-select:valid, .custom-select.is-valid {
  border-color: #28a745;
  padding-right: calc(0.75em + 2.3125rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right 0.75rem center/8px 10px no-repeat, #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat;
}

.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #28a745;
}

.was-validated .form-check-input:valid ~ .valid-feedback,
.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,
.form-check-input.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {
  color: #28a745;
}

.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {
  border-color: #28a745;
}

.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {
  border-color: #34ce57;
  background-color: #34ce57;
}

.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #28a745;
}

.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {
  border-color: #28a745;
}

.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: .1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.25rem;
}

.form-row > .col > .invalid-tooltip,
.form-row > [class*="col-"] > .invalid-tooltip {
  left: 5px;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .custom-select:invalid, .custom-select.is-invalid {
  border-color: #dc3545;
  padding-right: calc(0.75em + 2.3125rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right 0.75rem center/8px 10px no-repeat, #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat;
}

.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}

.was-validated .form-check-input:invalid ~ .invalid-feedback,
.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,
.form-check-input.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {
  color: #dc3545;
}

.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {
  border-color: #dc3545;
}

.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
  border-color: #e4606d;
  background-color: #e4606d;
}

.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #dc3545;
}

.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {
  border-color: #dc3545;
}

.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.form-inline {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-align: center;
  align-items: center;
}

.form-inline .form-check {
  width: 100%;
}

@media (min-width: 576px) {
  .form-inline label {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 0;
  }
  .form-inline .form-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 0;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-plaintext {
    display: inline-block;
  }
  .form-inline .input-group,
  .form-inline .custom-select {
    width: auto;
  }
  .form-inline .form-check {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: auto;
    padding-left: 0;
  }
  .form-inline .form-check-input {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-top: 0;
    margin-right: 0.25rem;
    margin-left: 0;
  }
  .form-inline .custom-control {
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .form-inline .custom-control-label {
    margin-bottom: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover {
  color: #212529;
  text-decoration: none;
}

.btn:focus, .btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn.disabled, .btn:disabled {
  opacity: 0.65;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:focus, .btn-primary.focus {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.btn-primary.disabled, .btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-secondary:focus, .btn-secondary.focus {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-success:focus, .btn-success.focus {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
}

.btn-success.disabled, .btn-success:disabled {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #1e7e34;
  border-color: #1c7430;
}

.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:hover {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
}

.btn-info:focus, .btn-info.focus {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
}

.btn-info.disabled, .btn-info:disabled {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,
.show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #117a8b;
  border-color: #10707f;
}

.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
}

.btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:hover {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
}

.btn-warning:focus, .btn-warning.focus {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
}

.btn-warning.disabled, .btn-warning:disabled {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,
.show > .btn-warning.dropdown-toggle {
  color: #212529;
  background-color: #d39e00;
  border-color: #c69500;
}

.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,
.show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-danger:focus, .btn-danger.focus {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
}

.btn-danger.disabled, .btn-danger:disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,
.show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}

.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}

.btn-light:focus, .btn-light.focus {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
}

.btn-light.disabled, .btn-light:disabled {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,
.show > .btn-light.dropdown-toggle {
  color: #212529;
  background-color: #dae0e5;
  border-color: #d3d9df;
}

.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,
.show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);
}

.btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
}

.btn-dark:focus, .btn-dark.focus {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
}

.btn-dark.disabled, .btn-dark:disabled {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,
.show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1d2124;
  border-color: #171a1d;
}

.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,
.show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:focus, .btn-outline-primary.focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-outline-primary.disabled, .btn-outline-primary:disabled {
  color: #007bff;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:focus, .btn-outline-secondary.focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,
.show > .btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:focus, .btn-outline-success.focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-outline-success.disabled, .btn-outline-success:disabled {
  color: #28a745;
  background-color: transparent;
}

.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,
.show > .btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:focus, .btn-outline-info.focus {
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-outline-info.disabled, .btn-outline-info:disabled {
  color: #17a2b8;
  background-color: transparent;
}

.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,
.show > .btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:hover {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:focus, .btn-outline-warning.focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.btn-outline-warning.disabled, .btn-outline-warning:disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,
.show > .btn-outline-warning.dropdown-toggle {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:focus, .btn-outline-danger.focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.btn-outline-danger.disabled, .btn-outline-danger:disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,
.show > .btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:hover {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:focus, .btn-outline-light.focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.btn-outline-light.disabled, .btn-outline-light:disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,
.show > .btn-outline-light.dropdown-toggle {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.btn-outline-dark {
  color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:hover {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:focus, .btn-outline-dark.focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.btn-outline-dark.disabled, .btn-outline-dark:disabled {
  color: #343a40;
  background-color: transparent;
}

.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,
.show > .btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.btn-link {
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
}

.btn-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.btn-link:focus, .btn-link.focus {
  text-decoration: underline;
}

.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
  pointer-events: none;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block + .btn-block {
  margin-top: 0.5rem;
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}

.fade {
  transition: opacity 0.15s linear;
}

@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}

.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}

@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropright,
.dropdown,
.dropleft {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-left {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-right {
    right: 0;
    left: auto;
  }
}

@media (min-width: 768px) {
  .dropdown-menu-md-left {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-right {
    right: 0;
    left: auto;
  }
}

@media (min-width: 992px) {
  .dropdown-menu-lg-left {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-right {
    right: 0;
    left: auto;
  }
}

@media (min-width: 1200px) {
  .dropdown-menu-xl-left {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-right {
    right: 0;
    left: auto;
  }
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-toggle::after {
  vertical-align: 0;
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}

.dropleft .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}

.dropleft .dropdown-toggle::after {
  display: none;
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover, .dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #e9ecef;
}

.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #007bff;
}

.dropdown-item.disabled, .dropdown-item:disabled {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1.5rem;
  color: #212529;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover {
  z-index: 1;
}

.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}

.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}

.dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after,
.dropright .dropdown-toggle-split::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: center;
  justify-content: center;
}

.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}

.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}

.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle > .btn,
.btn-group-toggle > .btn-group > .btn {
  margin-bottom: 0;
}

.btn-group-toggle > .btn input[type="radio"],
.btn-group-toggle > .btn input[type="checkbox"],
.btn-group-toggle > .btn-group > .btn input[type="radio"],
.btn-group-toggle > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100%;
}

.input-group > .form-control,
.input-group > .form-control-plaintext,
.input-group > .custom-select,
.input-group > .custom-file {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;
}

.input-group > .form-control + .form-control,
.input-group > .form-control + .custom-select,
.input-group > .form-control + .custom-file,
.input-group > .form-control-plaintext + .form-control,
.input-group > .form-control-plaintext + .custom-select,
.input-group > .form-control-plaintext + .custom-file,
.input-group > .custom-select + .form-control,
.input-group > .custom-select + .custom-select,
.input-group > .custom-select + .custom-file,
.input-group > .custom-file + .form-control,
.input-group > .custom-file + .custom-select,
.input-group > .custom-file + .custom-file {
  margin-left: -1px;
}

.input-group > .form-control:focus,
.input-group > .custom-select:focus,
.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {
  z-index: 3;
}

.input-group > .custom-file .custom-file-input:focus {
  z-index: 4;
}

.input-group > .form-control:not(:first-child),
.input-group > .custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group > .custom-file {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.input-group > .custom-file:not(:last-child) .custom-file-label,
.input-group > .custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group:not(.has-validation) > .form-control:not(:last-child),
.input-group:not(.has-validation) > .custom-select:not(:last-child),
.input-group:not(.has-validation) > .custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group.has-validation > .form-control:nth-last-child(n + 3),
.input-group.has-validation > .custom-select:nth-last-child(n + 3),
.input-group.has-validation > .custom-file:nth-last-child(n + 3) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group-prepend,
.input-group-append {
  display: -ms-flexbox;
  display: flex;
}

.input-group-prepend .btn,
.input-group-append .btn {
  position: relative;
  z-index: 2;
}

.input-group-prepend .btn:focus,
.input-group-append .btn:focus {
  z-index: 3;
}

.input-group-prepend .btn + .btn,
.input-group-prepend .btn + .input-group-text,
.input-group-prepend .input-group-text + .input-group-text,
.input-group-prepend .input-group-text + .btn,
.input-group-append .btn + .btn,
.input-group-append .btn + .input-group-text,
.input-group-append .input-group-text + .input-group-text,
.input-group-append .input-group-text + .btn {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.input-group-text input[type="radio"],
.input-group-text input[type="checkbox"] {
  margin-top: 0;
}

.input-group-lg > .form-control:not(textarea),
.input-group-lg > .custom-select {
  height: calc(1.5em + 1rem + 2px);
}

.input-group-lg > .form-control,
.input-group-lg > .custom-select,
.input-group-lg > .input-group-prepend > .input-group-text,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-append > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.input-group-sm > .form-control:not(textarea),
.input-group-sm > .custom-select {
  height: calc(1.5em + 0.5rem + 2px);
}

.input-group-sm > .form-control,
.input-group-sm > .custom-select,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.input-group-lg > .custom-select,
.input-group-sm > .custom-select {
  padding-right: 1.75rem;
}

.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text,
.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .btn,
.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .input-group-text,
.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .btn,
.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .input-group-text,
.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .input-group-append > .btn,
.input-group > .input-group-append > .input-group-text,
.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.custom-control {
  position: relative;
  z-index: 1;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}

.custom-control-inline {
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1rem;
  height: 1.25rem;
  opacity: 0;
}

.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #007bff;
  background-color: #007bff;
}

.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #80bdff;
}

.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  color: #fff;
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {
  color: #6c757d;
}

.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {
  background-color: #e9ecef;
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}

.custom-control-label::before {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  background-color: #fff;
  border: #adb5bd solid 1px;
}

.custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background: 50% / 50% 50% no-repeat;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0.25rem;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
  border-color: #007bff;
  background-color: #007bff;
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-switch {
  padding-left: 2.25rem;
}

.custom-switch .custom-control-label::before {
  left: -2.25rem;
  width: 1.75rem;
  pointer-events: all;
  border-radius: 0.5rem;
}

.custom-switch .custom-control-label::after {
  top: calc(0.25rem + 2px);
  left: calc(-2.25rem + 2px);
  width: calc(1rem - 4px);
  height: calc(1rem - 4px);
  background-color: #adb5bd;
  border-radius: 0.5rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .custom-switch .custom-control-label::after {
    transition: none;
  }
}

.custom-switch .custom-control-input:checked ~ .custom-control-label::after {
  background-color: #fff;
  -webkit-transform: translateX(0.75rem);
  transform: translateX(0.75rem);
}

.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right 0.75rem center/8px 10px no-repeat;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-select:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.custom-select[multiple], .custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: 0.75rem;
  background-image: none;
}

.custom-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}

.custom-select::-ms-expand {
  display: none;
}

.custom-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}

.custom-select-sm {
  height: calc(1.5em + 0.5rem + 2px);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}

.custom-select-lg {
  height: calc(1.5em + 1rem + 2px);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin: 0;
  overflow: hidden;
  opacity: 0;
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-file-input[disabled] ~ .custom-file-label,
.custom-file-input:disabled ~ .custom-file-label {
  background-color: #e9ecef;
}

.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Browse";
}

.custom-file-input ~ .custom-file-label[data-browse]::after {
  content: attr(data-browse);
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  overflow: hidden;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + 0.75rem);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: inherit;
  border-radius: 0 0.25rem 0.25rem 0;
}

.custom-range {
  width: 100%;
  height: 1.4rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-range:focus {
  outline: 0;
}

.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range::-moz-focus-outer {
  border: 0;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}

.custom-range::-webkit-slider-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}

.custom-range::-moz-range-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-ms-thumb {
    -ms-transition: none;
    transition: none;
  }
}

.custom-range::-ms-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-ms-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 0.5rem;
}

.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-webkit-slider-runnable-track {
  cursor: default;
}

.custom-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-moz-range-track {
  cursor: default;
}

.custom-range:disabled::-ms-thumb {
  background-color: #adb5bd;
}

.custom-control-label::before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .custom-control-label::before,
  .custom-file-label,
  .custom-select {
    transition: none;
  }
}

.nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}

.nav-link:hover, .nav-link:focus {
  text-decoration: none;
}

.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-link {
  margin-bottom: -1px;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #007bff;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  text-align: center;
}

.tab-content > .tab-pane {
  display: none;
}

.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.navbar .container,
.navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:hover, .navbar-brand:focus {
  text-decoration: none;
}

.navbar-nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-align: center;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.navbar-toggler:hover, .navbar-toggler:focus {
  text-decoration: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: 50% / 100% 100% no-repeat;
}

.navbar-nav-scroll {
  max-height: 75vh;
  overflow-y: auto;
}

@media (max-width: 575.98px) {
  .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}

@media (max-width: 767.98px) {
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 768px) {
  .navbar-expand-md {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}

@media (max-width: 991.98px) {
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}

@media (max-width: 1199.98px) {
  .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 1200px) {
  .navbar-expand-xl {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}

.navbar-expand {
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {
  padding-right: 0;
  padding-left: 0;
}

.navbar-expand .navbar-nav {
  -ms-flex-direction: row;
  flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}

.navbar-expand .navbar-collapse {
  display: -ms-flexbox !important;
  display: flex !important;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-text a {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}

.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}

.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark .navbar-text a {
  color: #fff;
}

.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {
  color: #fff;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card > hr {
  margin-right: 0;
  margin-left: 0;
}

.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}

.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link + .card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  border-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-deck .card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-deck {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .card-deck .card {
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }
}

.card-group > .card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
  }
  .card-group > .card {
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
  .card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
  .card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
  .card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
  .card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.card-columns .card {
  margin-bottom: 0.75rem;
}

@media (min-width: 576px) {
  .card-columns {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}

.accordion {
  overflow-anchor: none;
}

.accordion > .card {
  overflow: hidden;
}

.accordion > .card:not(:last-of-type) {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.accordion > .card:not(:first-of-type) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.accordion > .card > .card-header {
  border-radius: 0;
  margin-bottom: -1px;
}

.breadcrumb {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: underline;
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.page-link:hover {
  z-index: 2;
  color: #0056b3;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-link:focus {
  z-index: 3;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5;
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .badge {
    transition: none;
  }
}

a.badge:hover, a.badge:focus {
  text-decoration: none;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.badge-primary {
  color: #fff;
  background-color: #007bff;
}

a.badge-primary:hover, a.badge-primary:focus {
  color: #fff;
  background-color: #0062cc;
}

a.badge-primary:focus, a.badge-primary.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.badge-secondary {
  color: #fff;
  background-color: #6c757d;
}

a.badge-secondary:hover, a.badge-secondary:focus {
  color: #fff;
  background-color: #545b62;
}

a.badge-secondary:focus, a.badge-secondary.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.badge-success {
  color: #fff;
  background-color: #28a745;
}

a.badge-success:hover, a.badge-success:focus {
  color: #fff;
  background-color: #1e7e34;
}

a.badge-success:focus, a.badge-success.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.badge-info {
  color: #fff;
  background-color: #17a2b8;
}

a.badge-info:hover, a.badge-info:focus {
  color: #fff;
  background-color: #117a8b;
}

a.badge-info:focus, a.badge-info.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.badge-warning {
  color: #212529;
  background-color: #ffc107;
}

a.badge-warning:hover, a.badge-warning:focus {
  color: #212529;
  background-color: #d39e00;
}

a.badge-warning:focus, a.badge-warning.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}

a.badge-danger:hover, a.badge-danger:focus {
  color: #fff;
  background-color: #bd2130;
}

a.badge-danger:focus, a.badge-danger.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.badge-light {
  color: #212529;
  background-color: #f8f9fa;
}

a.badge-light:hover, a.badge-light:focus {
  color: #212529;
  background-color: #dae0e5;
}

a.badge-light:focus, a.badge-light.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.badge-dark {
  color: #fff;
  background-color: #343a40;
}

a.badge-dark:hover, a.badge-dark:focus {
  color: #fff;
  background-color: #1d2124;
}

a.badge-dark:focus, a.badge-dark.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 4rem;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.alert-primary hr {
  border-top-color: #9fcdff;
}

.alert-primary .alert-link {
  color: #002752;
}

.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}

.alert-secondary hr {
  border-top-color: #c8cbcf;
}

.alert-secondary .alert-link {
  color: #202326;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-success hr {
  border-top-color: #b1dfbb;
}

.alert-success .alert-link {
  color: #0b2e13;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.alert-info hr {
  border-top-color: #abdde5;
}

.alert-info .alert-link {
  color: #062c33;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.alert-warning hr {
  border-top-color: #ffe8a1;
}

.alert-warning .alert-link {
  color: #533f03;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-danger hr {
  border-top-color: #f1b0b7;
}

.alert-danger .alert-link {
  color: #491217;
}

.alert-light {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe;
}

.alert-light hr {
  border-top-color: #ececf6;
}

.alert-light .alert-link {
  color: #686868;
}

.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca;
}

.alert-dark hr {
  border-top-color: #b9bbbe;
}

.alert-dark .alert-link {
  color: #040505;
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

.progress {
  display: -ms-flexbox;
  display: flex;
  height: 1rem;
  overflow: hidden;
  line-height: 0;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.progress-bar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}

.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}

.media-body {
  -ms-flex: 1;
  flex: 1;
}

.list-group {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}

.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}

.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}

.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.list-group-item + .list-group-item {
  border-top-width: 0;
}

.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  -ms-flex-direction: row;
  flex-direction: row;
}

.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}

.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}

.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}

.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}

.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}

@media (min-width: 768px) {
  .list-group-horizontal-md {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}

@media (min-width: 992px) {
  .list-group-horizontal-lg {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}

@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}

.list-group-flush {
  border-radius: 0;
}

.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}

.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #004085;
  background-color: #b8daff;
}

.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #004085;
  background-color: #9fcdff;
}

.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #004085;
  border-color: #004085;
}

.list-group-item-secondary {
  color: #383d41;
  background-color: #d6d8db;
}

.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #383d41;
  background-color: #c8cbcf;
}

.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #383d41;
  border-color: #383d41;
}

.list-group-item-success {
  color: #155724;
  background-color: #c3e6cb;
}

.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #155724;
  background-color: #b1dfbb;
}

.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #155724;
  border-color: #155724;
}

.list-group-item-info {
  color: #0c5460;
  background-color: #bee5eb;
}

.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #0c5460;
  background-color: #abdde5;
}

.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #0c5460;
  border-color: #0c5460;
}

.list-group-item-warning {
  color: #856404;
  background-color: #ffeeba;
}

.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #856404;
  background-color: #ffe8a1;
}

.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #856404;
  border-color: #856404;
}

.list-group-item-danger {
  color: #721c24;
  background-color: #f5c6cb;
}

.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #721c24;
  background-color: #f1b0b7;
}

.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #721c24;
  border-color: #721c24;
}

.list-group-item-light {
  color: #818182;
  background-color: #fdfdfe;
}

.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #818182;
  background-color: #ececf6;
}

.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #818182;
  border-color: #818182;
}

.list-group-item-dark {
  color: #1b1e21;
  background-color: #c6c8ca;
}

.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #1b1e21;
  background-color: #b9bbbe;
}

.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #1b1e21;
  border-color: #1b1e21;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
}

.close:hover {
  color: #000;
  text-decoration: none;
}

.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {
  opacity: .75;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}

a.close.disabled {
  pointer-events: none;
}

.toast {
  -ms-flex-preferred-size: 350px;
  flex-basis: 350px;
  max-width: 350px;
  font-size: 0.875rem;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  opacity: 0;
  border-radius: 0.25rem;
}

.toast:not(:last-child) {
  margin-bottom: 0.75rem;
}

.toast.showing {
  opacity: 1;
}

.toast.show {
  display: block;
  opacity: 1;
}

.toast.hide {
  display: none;
}

.toast-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.25rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.toast-body {
  padding: 0.75rem;
}

.modal-open {
  overflow: hidden;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal.fade .modal-dialog {
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  -webkit-transform: translate(0, -50px);
  transform: translate(0, -50px);
}

@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}

.modal.show .modal-dialog {
  -webkit-transform: none;
  transform: none;
}

.modal.modal-static .modal-dialog {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  display: -ms-flexbox;
  display: flex;
  max-height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}

.modal-dialog-scrollable .modal-header,
.modal-dialog-scrollable .modal-footer {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  content: "";
}

.modal-dialog-centered.modal-dialog-scrollable {
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}

.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}

.modal-content {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}

.modal-footer > * {
  margin: 0.25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  .modal-dialog-scrollable {
    max-height: calc(100% - 3.5rem);
  }
  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
  }
  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
  }
  .modal-sm {
    max-width: 300px;
  }
}

@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    max-width: 800px;
  }
}

@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip.show {
  opacity: 0.9;
}

.tooltip .arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}

.tooltip .arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"] {
  padding: 0.4rem 0;
}

.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^="top"] .arrow {
  bottom: 0;
}

.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
  top: 0;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"] {
  padding: 0 0.4rem;
}

.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^="right"] .arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
  right: 0;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"] {
  padding: 0.4rem 0;
}

.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^="bottom"] .arrow {
  top: 0;
}

.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
  bottom: 0;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"] {
  padding: 0 0.4rem;
}

.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^="left"] .arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
  left: 0;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}

.popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.3rem;
}

.popover .arrow::before, .popover .arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top, .bs-popover-auto[x-placement^="top"] {
  margin-bottom: 0.5rem;
}

.bs-popover-top > .arrow, .bs-popover-auto[x-placement^="top"] > .arrow {
  bottom: calc(-0.5rem - 1px);
}

.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^="top"] > .arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^="top"] > .arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-right, .bs-popover-auto[x-placement^="right"] {
  margin-left: 0.5rem;
}

.bs-popover-right > .arrow, .bs-popover-auto[x-placement^="right"] > .arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}

.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^="right"] > .arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^="right"] > .arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"] {
  margin-top: 0.5rem;
}

.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^="bottom"] > .arrow {
  top: calc(-0.5rem - 1px);
}

.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^="bottom"] > .arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^="bottom"] > .arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}

.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f7f7f7;
}

.bs-popover-left, .bs-popover-auto[x-placement^="left"] {
  margin-right: 0.5rem;
}

.bs-popover-left > .arrow, .bs-popover-auto[x-placement^="left"] > .arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}

.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^="left"] > .arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^="left"] > .arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 0.5rem 0.75rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-left),
.active.carousel-item-right {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-right),
.active.carousel-item-left {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  -webkit-transform: none;
  transform: none;
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
  z-index: 1;
  opacity: 1;
}

.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-right {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
  .carousel-control-next {
    transition: none;
  }
}

.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: 50% / 100% 100% no-repeat;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}

.carousel-indicators li {
  box-sizing: content-box;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-indicators li {
    transition: none;
  }
}

.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}

@-webkit-keyframes spinner-border {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spinner-border {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: .75s linear infinite spinner-border;
  animation: .75s linear infinite spinner-border;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: .75s linear infinite spinner-grow;
  animation: .75s linear infinite spinner-grow;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
  .spinner-grow {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.bg-primary {
  background-color: #007bff !important;
}

a.bg-primary:hover, a.bg-primary:focus,
button.bg-primary:hover,
button.bg-primary:focus {
  background-color: #0062cc !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

a.bg-secondary:hover, a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
  background-color: #545b62 !important;
}

.bg-success {
  background-color: #28a745 !important;
}

a.bg-success:hover, a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
  background-color: #1e7e34 !important;
}

.bg-info {
  background-color: #17a2b8 !important;
}

a.bg-info:hover, a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #117a8b !important;
}

.bg-warning {
  background-color: #ffc107 !important;
}

a.bg-warning:hover, a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #d39e00 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

a.bg-danger:hover, a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #bd2130 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

a.bg-light:hover, a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
  background-color: #dae0e5 !important;
}

.bg-dark {
  background-color: #343a40 !important;
}

a.bg-dark:hover, a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
  background-color: #1d2124 !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-right {
  border-right: 1px solid #dee2e6 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-left {
  border-left: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-right-0 {
  border-right: 0 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-left-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #007bff !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #28a745 !important;
}

.border-info {
  border-color: #17a2b8 !important;
}

.border-warning {
  border-color: #ffc107 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #343a40 !important;
}

.border-white {
  border-color: #fff !important;
}

.rounded-sm {
  border-radius: 0.2rem !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-right {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-left {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-lg {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}

.d-inline-flex {
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}

@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-md-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}

@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}

@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}

@media print {
  .d-print-none {
    display: none !important;
  }
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-print-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.embed-responsive::before {
  display: block;
  content: "";
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.857143%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.flex-row {
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}

.flex-column {
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

.flex-row-reverse {
  -ms-flex-direction: row-reverse !important;
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  -ms-flex-direction: column-reverse !important;
  flex-direction: column-reverse !important;
}

.flex-wrap {
  -ms-flex-wrap: wrap !important;
  flex-wrap: wrap !important;
}

.flex-nowrap {
  -ms-flex-wrap: nowrap !important;
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  -ms-flex-wrap: wrap-reverse !important;
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  -ms-flex-positive: 0 !important;
  flex-grow: 0 !important;
}

.flex-grow-1 {
  -ms-flex-positive: 1 !important;
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  -ms-flex-negative: 0 !important;
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  -ms-flex-negative: 1 !important;
  flex-shrink: 1 !important;
}

.justify-content-start {
  -ms-flex-pack: start !important;
  justify-content: flex-start !important;
}

.justify-content-end {
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}

.justify-content-center {
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.justify-content-between {
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
}

.justify-content-around {
  -ms-flex-pack: distribute !important;
  justify-content: space-around !important;
}

.align-items-start {
  -ms-flex-align: start !important;
  align-items: flex-start !important;
}

.align-items-end {
  -ms-flex-align: end !important;
  align-items: flex-end !important;
}

.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}

.align-items-baseline {
  -ms-flex-align: baseline !important;
  align-items: baseline !important;
}

.align-items-stretch {
  -ms-flex-align: stretch !important;
  align-items: stretch !important;
}

.align-content-start {
  -ms-flex-line-pack: start !important;
  align-content: flex-start !important;
}

.align-content-end {
  -ms-flex-line-pack: end !important;
  align-content: flex-end !important;
}

.align-content-center {
  -ms-flex-line-pack: center !important;
  align-content: center !important;
}

.align-content-between {
  -ms-flex-line-pack: justify !important;
  align-content: space-between !important;
}

.align-content-around {
  -ms-flex-line-pack: distribute !important;
  align-content: space-around !important;
}

.align-content-stretch {
  -ms-flex-line-pack: stretch !important;
  align-content: stretch !important;
}

.align-self-auto {
  -ms-flex-item-align: auto !important;
  align-self: auto !important;
}

.align-self-start {
  -ms-flex-item-align: start !important;
  align-self: flex-start !important;
}

.align-self-end {
  -ms-flex-item-align: end !important;
  align-self: flex-end !important;
}

.align-self-center {
  -ms-flex-item-align: center !important;
  align-self: center !important;
}

.align-self-baseline {
  -ms-flex-item-align: baseline !important;
  align-self: baseline !important;
}

.align-self-stretch {
  -ms-flex-item-align: stretch !important;
  align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-sm-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-sm-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-sm-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-sm-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-sm-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-sm-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-sm-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-sm-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-sm-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-sm-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-sm-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-sm-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-sm-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
}

@media (min-width: 768px) {
  .flex-md-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-md-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-md-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-md-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-md-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-md-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-md-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-md-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-md-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-md-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-md-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-md-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-md-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-md-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-md-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-md-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-md-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-md-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-md-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-md-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
}

@media (min-width: 992px) {
  .flex-lg-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-lg-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-lg-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-lg-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-lg-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-lg-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-lg-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-lg-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-lg-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-lg-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-lg-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-lg-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-lg-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
}

@media (min-width: 1200px) {
  .flex-xl-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-xl-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-xl-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-xl-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-xl-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-xl-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-xl-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-xl-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-xl-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-xl-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-xl-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-xl-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-xl-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
}

.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}

@media (min-width: 576px) {
  .float-sm-left {
    float: left !important;
  }
  .float-sm-right {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
}

@media (min-width: 768px) {
  .float-md-left {
    float: left !important;
  }
  .float-md-right {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
}

@media (min-width: 992px) {
  .float-lg-left {
    float: left !important;
  }
  .float-lg-right {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
}

@media (min-width: 1200px) {
  .float-xl-left {
    float: left !important;
  }
  .float-xl-right {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
}

.user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  -ms-user-select: auto !important;
  user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.m-n1 {
  margin: -0.25rem !important;
}

.mt-n1,
.my-n1 {
  margin-top: -0.25rem !important;
}

.mr-n1,
.mx-n1 {
  margin-right: -0.25rem !important;
}

.mb-n1,
.my-n1 {
  margin-bottom: -0.25rem !important;
}

.ml-n1,
.mx-n1 {
  margin-left: -0.25rem !important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.mt-n2,
.my-n2 {
  margin-top: -0.5rem !important;
}

.mr-n2,
.mx-n2 {
  margin-right: -0.5rem !important;
}

.mb-n2,
.my-n2 {
  margin-bottom: -0.5rem !important;
}

.ml-n2,
.mx-n2 {
  margin-left: -0.5rem !important;
}

.m-n3 {
  margin: -1rem !important;
}

.mt-n3,
.my-n3 {
  margin-top: -1rem !important;
}

.mr-n3,
.mx-n3 {
  margin-right: -1rem !important;
}

.mb-n3,
.my-n3 {
  margin-bottom: -1rem !important;
}

.ml-n3,
.mx-n3 {
  margin-left: -1rem !important;
}

.m-n4 {
  margin: -1.5rem !important;
}

.mt-n4,
.my-n4 {
  margin-top: -1.5rem !important;
}

.mr-n4,
.mx-n4 {
  margin-right: -1.5rem !important;
}

.mb-n4,
.my-n4 {
  margin-bottom: -1.5rem !important;
}

.ml-n4,
.mx-n4 {
  margin-left: -1.5rem !important;
}

.m-n5 {
  margin: -3rem !important;
}

.mt-n5,
.my-n5 {
  margin-top: -3rem !important;
}

.mr-n5,
.mx-n5 {
  margin-right: -3rem !important;
}

.mb-n5,
.my-n5 {
  margin-bottom: -3rem !important;
}

.ml-n5,
.mx-n5 {
  margin-left: -3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto,
.my-auto {
  margin-top: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }
  .mt-sm-0,
  .my-sm-0 {
    margin-top: 0 !important;
  }
  .mr-sm-0,
  .mx-sm-0 {
    margin-right: 0 !important;
  }
  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 0 !important;
  }
  .ml-sm-0,
  .mx-sm-0 {
    margin-left: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .mt-sm-1,
  .my-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mr-sm-1,
  .mx-sm-1 {
    margin-right: 0.25rem !important;
  }
  .mb-sm-1,
  .my-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-sm-1,
  .mx-sm-1 {
    margin-left: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .mt-sm-2,
  .my-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mr-sm-2,
  .mx-sm-2 {
    margin-right: 0.5rem !important;
  }
  .mb-sm-2,
  .my-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-sm-2,
  .mx-sm-2 {
    margin-left: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .mt-sm-3,
  .my-sm-3 {
    margin-top: 1rem !important;
  }
  .mr-sm-3,
  .mx-sm-3 {
    margin-right: 1rem !important;
  }
  .mb-sm-3,
  .my-sm-3 {
    margin-bottom: 1rem !important;
  }
  .ml-sm-3,
  .mx-sm-3 {
    margin-left: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .mt-sm-4,
  .my-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }
  .mb-sm-4,
  .my-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-sm-4,
  .mx-sm-4 {
    margin-left: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .mt-sm-5,
  .my-sm-5 {
    margin-top: 3rem !important;
  }
  .mr-sm-5,
  .mx-sm-5 {
    margin-right: 3rem !important;
  }
  .mb-sm-5,
  .my-sm-5 {
    margin-bottom: 3rem !important;
  }
  .ml-sm-5,
  .mx-sm-5 {
    margin-left: 3rem !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .pt-sm-0,
  .py-sm-0 {
    padding-top: 0 !important;
  }
  .pr-sm-0,
  .px-sm-0 {
    padding-right: 0 !important;
  }
  .pb-sm-0,
  .py-sm-0 {
    padding-bottom: 0 !important;
  }
  .pl-sm-0,
  .px-sm-0 {
    padding-left: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .pt-sm-1,
  .py-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pr-sm-1,
  .px-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pb-sm-1,
  .py-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-sm-1,
  .px-sm-1 {
    padding-left: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .pt-sm-2,
  .py-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pr-sm-2,
  .px-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pb-sm-2,
  .py-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-sm-2,
  .px-sm-2 {
    padding-left: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .pt-sm-3,
  .py-sm-3 {
    padding-top: 1rem !important;
  }
  .pr-sm-3,
  .px-sm-3 {
    padding-right: 1rem !important;
  }
  .pb-sm-3,
  .py-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pl-sm-3,
  .px-sm-3 {
    padding-left: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .pt-sm-4,
  .py-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pr-sm-4,
  .px-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pb-sm-4,
  .py-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-sm-4,
  .px-sm-4 {
    padding-left: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .pt-sm-5,
  .py-sm-5 {
    padding-top: 3rem !important;
  }
  .pr-sm-5,
  .px-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-5,
  .py-sm-5 {
    padding-bottom: 3rem !important;
  }
  .pl-sm-5,
  .px-sm-5 {
    padding-left: 3rem !important;
  }
  .m-sm-n1 {
    margin: -0.25rem !important;
  }
  .mt-sm-n1,
  .my-sm-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-sm-n1,
  .mx-sm-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-sm-n1,
  .my-sm-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-sm-n1,
  .mx-sm-n1 {
    margin-left: -0.25rem !important;
  }
  .m-sm-n2 {
    margin: -0.5rem !important;
  }
  .mt-sm-n2,
  .my-sm-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-sm-n2,
  .mx-sm-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-sm-n2,
  .my-sm-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-sm-n2,
  .mx-sm-n2 {
    margin-left: -0.5rem !important;
  }
  .m-sm-n3 {
    margin: -1rem !important;
  }
  .mt-sm-n3,
  .my-sm-n3 {
    margin-top: -1rem !important;
  }
  .mr-sm-n3,
  .mx-sm-n3 {
    margin-right: -1rem !important;
  }
  .mb-sm-n3,
  .my-sm-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-sm-n3,
  .mx-sm-n3 {
    margin-left: -1rem !important;
  }
  .m-sm-n4 {
    margin: -1.5rem !important;
  }
  .mt-sm-n4,
  .my-sm-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-sm-n4,
  .mx-sm-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-sm-n4,
  .my-sm-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-sm-n4,
  .mx-sm-n4 {
    margin-left: -1.5rem !important;
  }
  .m-sm-n5 {
    margin: -3rem !important;
  }
  .mt-sm-n5,
  .my-sm-n5 {
    margin-top: -3rem !important;
  }
  .mr-sm-n5,
  .mx-sm-n5 {
    margin-right: -3rem !important;
  }
  .mb-sm-n5,
  .my-sm-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-sm-n5,
  .mx-sm-n5 {
    margin-left: -3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mt-sm-auto,
  .my-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-auto,
  .mx-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-auto,
  .my-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-auto,
  .mx-sm-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }
  .mt-md-0,
  .my-md-0 {
    margin-top: 0 !important;
  }
  .mr-md-0,
  .mx-md-0 {
    margin-right: 0 !important;
  }
  .mb-md-0,
  .my-md-0 {
    margin-bottom: 0 !important;
  }
  .ml-md-0,
  .mx-md-0 {
    margin-left: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .mt-md-1,
  .my-md-1 {
    margin-top: 0.25rem !important;
  }
  .mr-md-1,
  .mx-md-1 {
    margin-right: 0.25rem !important;
  }
  .mb-md-1,
  .my-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-md-1,
  .mx-md-1 {
    margin-left: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .mt-md-2,
  .my-md-2 {
    margin-top: 0.5rem !important;
  }
  .mr-md-2,
  .mx-md-2 {
    margin-right: 0.5rem !important;
  }
  .mb-md-2,
  .my-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-md-2,
  .mx-md-2 {
    margin-left: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .mt-md-3,
  .my-md-3 {
    margin-top: 1rem !important;
  }
  .mr-md-3,
  .mx-md-3 {
    margin-right: 1rem !important;
  }
  .mb-md-3,
  .my-md-3 {
    margin-bottom: 1rem !important;
  }
  .ml-md-3,
  .mx-md-3 {
    margin-left: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .mt-md-4,
  .my-md-4 {
    margin-top: 1.5rem !important;
  }
  .mr-md-4,
  .mx-md-4 {
    margin-right: 1.5rem !important;
  }
  .mb-md-4,
  .my-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-md-4,
  .mx-md-4 {
    margin-left: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .mt-md-5,
  .my-md-5 {
    margin-top: 3rem !important;
  }
  .mr-md-5,
  .mx-md-5 {
    margin-right: 3rem !important;
  }
  .mb-md-5,
  .my-md-5 {
    margin-bottom: 3rem !important;
  }
  .ml-md-5,
  .mx-md-5 {
    margin-left: 3rem !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .pt-md-0,
  .py-md-0 {
    padding-top: 0 !important;
  }
  .pr-md-0,
  .px-md-0 {
    padding-right: 0 !important;
  }
  .pb-md-0,
  .py-md-0 {
    padding-bottom: 0 !important;
  }
  .pl-md-0,
  .px-md-0 {
    padding-left: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .pt-md-1,
  .py-md-1 {
    padding-top: 0.25rem !important;
  }
  .pr-md-1,
  .px-md-1 {
    padding-right: 0.25rem !important;
  }
  .pb-md-1,
  .py-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-md-1,
  .px-md-1 {
    padding-left: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .pt-md-2,
  .py-md-2 {
    padding-top: 0.5rem !important;
  }
  .pr-md-2,
  .px-md-2 {
    padding-right: 0.5rem !important;
  }
  .pb-md-2,
  .py-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-md-2,
  .px-md-2 {
    padding-left: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .pt-md-3,
  .py-md-3 {
    padding-top: 1rem !important;
  }
  .pr-md-3,
  .px-md-3 {
    padding-right: 1rem !important;
  }
  .pb-md-3,
  .py-md-3 {
    padding-bottom: 1rem !important;
  }
  .pl-md-3,
  .px-md-3 {
    padding-left: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .pt-md-4,
  .py-md-4 {
    padding-top: 1.5rem !important;
  }
  .pr-md-4,
  .px-md-4 {
    padding-right: 1.5rem !important;
  }
  .pb-md-4,
  .py-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-md-4,
  .px-md-4 {
    padding-left: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .pt-md-5,
  .py-md-5 {
    padding-top: 3rem !important;
  }
  .pr-md-5,
  .px-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-5,
  .py-md-5 {
    padding-bottom: 3rem !important;
  }
  .pl-md-5,
  .px-md-5 {
    padding-left: 3rem !important;
  }
  .m-md-n1 {
    margin: -0.25rem !important;
  }
  .mt-md-n1,
  .my-md-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-md-n1,
  .mx-md-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-md-n1,
  .my-md-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-md-n1,
  .mx-md-n1 {
    margin-left: -0.25rem !important;
  }
  .m-md-n2 {
    margin: -0.5rem !important;
  }
  .mt-md-n2,
  .my-md-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-md-n2,
  .mx-md-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-md-n2,
  .my-md-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-md-n2,
  .mx-md-n2 {
    margin-left: -0.5rem !important;
  }
  .m-md-n3 {
    margin: -1rem !important;
  }
  .mt-md-n3,
  .my-md-n3 {
    margin-top: -1rem !important;
  }
  .mr-md-n3,
  .mx-md-n3 {
    margin-right: -1rem !important;
  }
  .mb-md-n3,
  .my-md-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-md-n3,
  .mx-md-n3 {
    margin-left: -1rem !important;
  }
  .m-md-n4 {
    margin: -1.5rem !important;
  }
  .mt-md-n4,
  .my-md-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-md-n4,
  .mx-md-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-md-n4,
  .my-md-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-md-n4,
  .mx-md-n4 {
    margin-left: -1.5rem !important;
  }
  .m-md-n5 {
    margin: -3rem !important;
  }
  .mt-md-n5,
  .my-md-n5 {
    margin-top: -3rem !important;
  }
  .mr-md-n5,
  .mx-md-n5 {
    margin-right: -3rem !important;
  }
  .mb-md-n5,
  .my-md-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-md-n5,
  .mx-md-n5 {
    margin-left: -3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mt-md-auto,
  .my-md-auto {
    margin-top: auto !important;
  }
  .mr-md-auto,
  .mx-md-auto {
    margin-right: auto !important;
  }
  .mb-md-auto,
  .my-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-auto,
  .mx-md-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }
  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important;
  }
  .mr-lg-0,
  .mx-lg-0 {
    margin-right: 0 !important;
  }
  .mb-lg-0,
  .my-lg-0 {
    margin-bottom: 0 !important;
  }
  .ml-lg-0,
  .mx-lg-0 {
    margin-left: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .mt-lg-1,
  .my-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mr-lg-1,
  .mx-lg-1 {
    margin-right: 0.25rem !important;
  }
  .mb-lg-1,
  .my-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-lg-1,
  .mx-lg-1 {
    margin-left: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .mt-lg-2,
  .my-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mr-lg-2,
  .mx-lg-2 {
    margin-right: 0.5rem !important;
  }
  .mb-lg-2,
  .my-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-lg-2,
  .mx-lg-2 {
    margin-left: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .mt-lg-3,
  .my-lg-3 {
    margin-top: 1rem !important;
  }
  .mr-lg-3,
  .mx-lg-3 {
    margin-right: 1rem !important;
  }
  .mb-lg-3,
  .my-lg-3 {
    margin-bottom: 1rem !important;
  }
  .ml-lg-3,
  .mx-lg-3 {
    margin-left: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .mt-lg-4,
  .my-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mr-lg-4,
  .mx-lg-4 {
    margin-right: 1.5rem !important;
  }
  .mb-lg-4,
  .my-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-lg-4,
  .mx-lg-4 {
    margin-left: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .mt-lg-5,
  .my-lg-5 {
    margin-top: 3rem !important;
  }
  .mr-lg-5,
  .mx-lg-5 {
    margin-right: 3rem !important;
  }
  .mb-lg-5,
  .my-lg-5 {
    margin-bottom: 3rem !important;
  }
  .ml-lg-5,
  .mx-lg-5 {
    margin-left: 3rem !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .pt-lg-0,
  .py-lg-0 {
    padding-top: 0 !important;
  }
  .pr-lg-0,
  .px-lg-0 {
    padding-right: 0 !important;
  }
  .pb-lg-0,
  .py-lg-0 {
    padding-bottom: 0 !important;
  }
  .pl-lg-0,
  .px-lg-0 {
    padding-left: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .pt-lg-1,
  .py-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pr-lg-1,
  .px-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pb-lg-1,
  .py-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-lg-1,
  .px-lg-1 {
    padding-left: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .pt-lg-2,
  .py-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pr-lg-2,
  .px-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pb-lg-2,
  .py-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-lg-2,
  .px-lg-2 {
    padding-left: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .pt-lg-3,
  .py-lg-3 {
    padding-top: 1rem !important;
  }
  .pr-lg-3,
  .px-lg-3 {
    padding-right: 1rem !important;
  }
  .pb-lg-3,
  .py-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pl-lg-3,
  .px-lg-3 {
    padding-left: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .pt-lg-4,
  .py-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pr-lg-4,
  .px-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pb-lg-4,
  .py-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-lg-4,
  .px-lg-4 {
    padding-left: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .pt-lg-5,
  .py-lg-5 {
    padding-top: 3rem !important;
  }
  .pr-lg-5,
  .px-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-5,
  .py-lg-5 {
    padding-bottom: 3rem !important;
  }
  .pl-lg-5,
  .px-lg-5 {
    padding-left: 3rem !important;
  }
  .m-lg-n1 {
    margin: -0.25rem !important;
  }
  .mt-lg-n1,
  .my-lg-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-lg-n1,
  .mx-lg-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-lg-n1,
  .my-lg-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-lg-n1,
  .mx-lg-n1 {
    margin-left: -0.25rem !important;
  }
  .m-lg-n2 {
    margin: -0.5rem !important;
  }
  .mt-lg-n2,
  .my-lg-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-lg-n2,
  .mx-lg-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-lg-n2,
  .my-lg-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-lg-n2,
  .mx-lg-n2 {
    margin-left: -0.5rem !important;
  }
  .m-lg-n3 {
    margin: -1rem !important;
  }
  .mt-lg-n3,
  .my-lg-n3 {
    margin-top: -1rem !important;
  }
  .mr-lg-n3,
  .mx-lg-n3 {
    margin-right: -1rem !important;
  }
  .mb-lg-n3,
  .my-lg-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-lg-n3,
  .mx-lg-n3 {
    margin-left: -1rem !important;
  }
  .m-lg-n4 {
    margin: -1.5rem !important;
  }
  .mt-lg-n4,
  .my-lg-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-lg-n4,
  .mx-lg-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-lg-n4,
  .my-lg-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-lg-n4,
  .mx-lg-n4 {
    margin-left: -1.5rem !important;
  }
  .m-lg-n5 {
    margin: -3rem !important;
  }
  .mt-lg-n5,
  .my-lg-n5 {
    margin-top: -3rem !important;
  }
  .mr-lg-n5,
  .mx-lg-n5 {
    margin-right: -3rem !important;
  }
  .mb-lg-n5,
  .my-lg-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-lg-n5,
  .mx-lg-n5 {
    margin-left: -3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mt-lg-auto,
  .my-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-auto,
  .mx-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-auto,
  .my-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-auto,
  .mx-lg-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }
  .mt-xl-0,
  .my-xl-0 {
    margin-top: 0 !important;
  }
  .mr-xl-0,
  .mx-xl-0 {
    margin-right: 0 !important;
  }
  .mb-xl-0,
  .my-xl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xl-0,
  .mx-xl-0 {
    margin-left: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .mt-xl-1,
  .my-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mr-xl-1,
  .mx-xl-1 {
    margin-right: 0.25rem !important;
  }
  .mb-xl-1,
  .my-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-xl-1,
  .mx-xl-1 {
    margin-left: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .mt-xl-2,
  .my-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xl-2,
  .mx-xl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xl-2,
  .my-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xl-2,
  .mx-xl-2 {
    margin-left: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .mt-xl-3,
  .my-xl-3 {
    margin-top: 1rem !important;
  }
  .mr-xl-3,
  .mx-xl-3 {
    margin-right: 1rem !important;
  }
  .mb-xl-3,
  .my-xl-3 {
    margin-bottom: 1rem !important;
  }
  .ml-xl-3,
  .mx-xl-3 {
    margin-left: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .mt-xl-4,
  .my-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xl-4,
  .mx-xl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xl-4,
  .my-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xl-4,
  .mx-xl-4 {
    margin-left: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .mt-xl-5,
  .my-xl-5 {
    margin-top: 3rem !important;
  }
  .mr-xl-5,
  .mx-xl-5 {
    margin-right: 3rem !important;
  }
  .mb-xl-5,
  .my-xl-5 {
    margin-bottom: 3rem !important;
  }
  .ml-xl-5,
  .mx-xl-5 {
    margin-left: 3rem !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .pt-xl-0,
  .py-xl-0 {
    padding-top: 0 !important;
  }
  .pr-xl-0,
  .px-xl-0 {
    padding-right: 0 !important;
  }
  .pb-xl-0,
  .py-xl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xl-0,
  .px-xl-0 {
    padding-left: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .pt-xl-1,
  .py-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pr-xl-1,
  .px-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pb-xl-1,
  .py-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-xl-1,
  .px-xl-1 {
    padding-left: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .pt-xl-2,
  .py-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xl-2,
  .px-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xl-2,
  .py-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xl-2,
  .px-xl-2 {
    padding-left: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .pt-xl-3,
  .py-xl-3 {
    padding-top: 1rem !important;
  }
  .pr-xl-3,
  .px-xl-3 {
    padding-right: 1rem !important;
  }
  .pb-xl-3,
  .py-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pl-xl-3,
  .px-xl-3 {
    padding-left: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .pt-xl-4,
  .py-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xl-4,
  .px-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xl-4,
  .py-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xl-4,
  .px-xl-4 {
    padding-left: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .pt-xl-5,
  .py-xl-5 {
    padding-top: 3rem !important;
  }
  .pr-xl-5,
  .px-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-5,
  .py-xl-5 {
    padding-bottom: 3rem !important;
  }
  .pl-xl-5,
  .px-xl-5 {
    padding-left: 3rem !important;
  }
  .m-xl-n1 {
    margin: -0.25rem !important;
  }
  .mt-xl-n1,
  .my-xl-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-xl-n1,
  .mx-xl-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-xl-n1,
  .my-xl-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-xl-n1,
  .mx-xl-n1 {
    margin-left: -0.25rem !important;
  }
  .m-xl-n2 {
    margin: -0.5rem !important;
  }
  .mt-xl-n2,
  .my-xl-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-xl-n2,
  .mx-xl-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-xl-n2,
  .my-xl-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-xl-n2,
  .mx-xl-n2 {
    margin-left: -0.5rem !important;
  }
  .m-xl-n3 {
    margin: -1rem !important;
  }
  .mt-xl-n3,
  .my-xl-n3 {
    margin-top: -1rem !important;
  }
  .mr-xl-n3,
  .mx-xl-n3 {
    margin-right: -1rem !important;
  }
  .mb-xl-n3,
  .my-xl-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-xl-n3,
  .mx-xl-n3 {
    margin-left: -1rem !important;
  }
  .m-xl-n4 {
    margin: -1.5rem !important;
  }
  .mt-xl-n4,
  .my-xl-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-xl-n4,
  .mx-xl-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-xl-n4,
  .my-xl-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-xl-n4,
  .mx-xl-n4 {
    margin-left: -1.5rem !important;
  }
  .m-xl-n5 {
    margin: -3rem !important;
  }
  .mt-xl-n5,
  .my-xl-n5 {
    margin-top: -3rem !important;
  }
  .mr-xl-n5,
  .mx-xl-n5 {
    margin-right: -3rem !important;
  }
  .mb-xl-n5,
  .my-xl-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-xl-n5,
  .mx-xl-n5 {
    margin-left: -3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mt-xl-auto,
  .my-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-auto,
  .mx-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-auto,
  .my-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-auto,
  .mx-xl-auto {
    margin-left: auto !important;
  }
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}

.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}

.text-justify {
  text-align: justify !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }
  .text-sm-right {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}

@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }
  .text-md-right {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}

@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }
  .text-lg-right {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}

@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }
  .text-xl-right {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-lighter {
  font-weight: lighter !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-bolder {
  font-weight: bolder !important;
}

.font-italic {
  font-style: italic !important;
}

.text-white {
  color: #fff !important;
}

.text-primary {
  color: #007bff !important;
}

a.text-primary:hover, a.text-primary:focus {
  color: #0056b3 !important;
}

.text-secondary {
  color: #6c757d !important;
}

a.text-secondary:hover, a.text-secondary:focus {
  color: #494f54 !important;
}

.text-success {
  color: #28a745 !important;
}

a.text-success:hover, a.text-success:focus {
  color: #19692c !important;
}

.text-info {
  color: #17a2b8 !important;
}

a.text-info:hover, a.text-info:focus {
  color: #0f6674 !important;
}

.text-warning {
  color: #ffc107 !important;
}

a.text-warning:hover, a.text-warning:focus {
  color: #ba8b00 !important;
}

.text-danger {
  color: #dc3545 !important;
}

a.text-danger:hover, a.text-danger:focus {
  color: #a71d2a !important;
}

.text-light {
  color: #f8f9fa !important;
}

a.text-light:hover, a.text-light:focus {
  color: #cbd3da !important;
}

.text-dark {
  color: #343a40 !important;
}

a.text-dark:hover, a.text-dark:focus {
  color: #121416 !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-break {
  word-break: break-word !important;
  word-wrap: break-word !important;
}

.text-reset {
  color: inherit !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media print {
  *,
  *::before,
  *::after {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  a:not(.btn) {
    text-decoration: underline;
  }
  abbr[title]::after {
    content: " (" attr(title) ")";
  }
  pre {
    white-space: pre-wrap !important;
  }
  pre,
  blockquote {
    border: 1px solid #adb5bd;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  @page {
    size: a3;
  }
  body {
    min-width: 992px !important;
  }
  .container {
    min-width: 992px !important;
  }
  .navbar {
    display: none;
  }
  .badge {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #dee2e6 !important;
  }
  .table-dark {
    color: inherit;
  }
  .table-dark th,
  .table-dark td,
  .table-dark thead th,
  .table-dark tbody + tbody {
    border-color: #dee2e6;
  }
  .table .thead-dark th {
    color: inherit;
    border-color: #dee2e6;
  }
}`,ks=fe`/*!
 * Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
.fa,
.fas,
.far,
.fal,
.fad,
.fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1; }

.fa-lg {
  font-size: 1.33333em;
  line-height: 0.75em;
  vertical-align: -.0667em; }

.fa-xs {
  font-size: .75em; }

.fa-sm {
  font-size: .875em; }

.fa-1x {
  font-size: 1em; }

.fa-2x {
  font-size: 2em; }

.fa-3x {
  font-size: 3em; }

.fa-4x {
  font-size: 4em; }

.fa-5x {
  font-size: 5em; }

.fa-6x {
  font-size: 6em; }

.fa-7x {
  font-size: 7em; }

.fa-8x {
  font-size: 8em; }

.fa-9x {
  font-size: 9em; }

.fa-10x {
  font-size: 10em; }

.fa-fw {
  text-align: center;
  width: 1.25em; }

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0; }
  .fa-ul > li {
    position: relative; }

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit; }

.fa-border {
  border: solid 0.08em #eee;
  border-radius: .1em;
  padding: .2em .25em .15em; }

.fa-pull-left {
  float: left; }

.fa-pull-right {
  float: right; }

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: .3em; }

.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: .3em; }

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear; }

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8); }

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg); }

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg); }

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg); }

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1); }

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1); }

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1); }

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none; }

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em; }

.fa-stack-1x,
.fa-stack-2x {
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%; }

.fa-stack-1x {
  line-height: inherit; }

.fa-stack-2x {
  font-size: 2em; }

.fa-inverse {
  color: #fff; }

/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
readers do not read off random characters that represent icons */
.fa-500px:before {
  content: "\\f26e"; }

.fa-accessible-icon:before {
  content: "\\f368"; }

.fa-accusoft:before {
  content: "\\f369"; }

.fa-acquisitions-incorporated:before {
  content: "\\f6af"; }

.fa-ad:before {
  content: "\\f641"; }

.fa-address-book:before {
  content: "\\f2b9"; }

.fa-address-card:before {
  content: "\\f2bb"; }

.fa-adjust:before {
  content: "\\f042"; }

.fa-adn:before {
  content: "\\f170"; }

.fa-adversal:before {
  content: "\\f36a"; }

.fa-affiliatetheme:before {
  content: "\\f36b"; }

.fa-air-freshener:before {
  content: "\\f5d0"; }

.fa-airbnb:before {
  content: "\\f834"; }

.fa-algolia:before {
  content: "\\f36c"; }

.fa-align-center:before {
  content: "\\f037"; }

.fa-align-justify:before {
  content: "\\f039"; }

.fa-align-left:before {
  content: "\\f036"; }

.fa-align-right:before {
  content: "\\f038"; }

.fa-alipay:before {
  content: "\\f642"; }

.fa-allergies:before {
  content: "\\f461"; }

.fa-amazon:before {
  content: "\\f270"; }

.fa-amazon-pay:before {
  content: "\\f42c"; }

.fa-ambulance:before {
  content: "\\f0f9"; }

.fa-american-sign-language-interpreting:before {
  content: "\\f2a3"; }

.fa-amilia:before {
  content: "\\f36d"; }

.fa-anchor:before {
  content: "\\f13d"; }

.fa-android:before {
  content: "\\f17b"; }

.fa-angellist:before {
  content: "\\f209"; }

.fa-angle-double-down:before {
  content: "\\f103"; }

.fa-angle-double-left:before {
  content: "\\f100"; }

.fa-angle-double-right:before {
  content: "\\f101"; }

.fa-angle-double-up:before {
  content: "\\f102"; }

.fa-angle-down:before {
  content: "\\f107"; }

.fa-angle-left:before {
  content: "\\f104"; }

.fa-angle-right:before {
  content: "\\f105"; }

.fa-angle-up:before {
  content: "\\f106"; }

.fa-angry:before {
  content: "\\f556"; }

.fa-angrycreative:before {
  content: "\\f36e"; }

.fa-angular:before {
  content: "\\f420"; }

.fa-ankh:before {
  content: "\\f644"; }

.fa-app-store:before {
  content: "\\f36f"; }

.fa-app-store-ios:before {
  content: "\\f370"; }

.fa-apper:before {
  content: "\\f371"; }

.fa-apple:before {
  content: "\\f179"; }

.fa-apple-alt:before {
  content: "\\f5d1"; }

.fa-apple-pay:before {
  content: "\\f415"; }

.fa-archive:before {
  content: "\\f187"; }

.fa-archway:before {
  content: "\\f557"; }

.fa-arrow-alt-circle-down:before {
  content: "\\f358"; }

.fa-arrow-alt-circle-left:before {
  content: "\\f359"; }

.fa-arrow-alt-circle-right:before {
  content: "\\f35a"; }

.fa-arrow-alt-circle-up:before {
  content: "\\f35b"; }

.fa-arrow-circle-down:before {
  content: "\\f0ab"; }

.fa-arrow-circle-left:before {
  content: "\\f0a8"; }

.fa-arrow-circle-right:before {
  content: "\\f0a9"; }

.fa-arrow-circle-up:before {
  content: "\\f0aa"; }

.fa-arrow-down:before {
  content: "\\f063"; }

.fa-arrow-left:before {
  content: "\\f060"; }

.fa-arrow-right:before {
  content: "\\f061"; }

.fa-arrow-up:before {
  content: "\\f062"; }

.fa-arrows-alt:before {
  content: "\\f0b2"; }

.fa-arrows-alt-h:before {
  content: "\\f337"; }

.fa-arrows-alt-v:before {
  content: "\\f338"; }

.fa-artstation:before {
  content: "\\f77a"; }

.fa-assistive-listening-systems:before {
  content: "\\f2a2"; }

.fa-asterisk:before {
  content: "\\f069"; }

.fa-asymmetrik:before {
  content: "\\f372"; }

.fa-at:before {
  content: "\\f1fa"; }

.fa-atlas:before {
  content: "\\f558"; }

.fa-atlassian:before {
  content: "\\f77b"; }

.fa-atom:before {
  content: "\\f5d2"; }

.fa-audible:before {
  content: "\\f373"; }

.fa-audio-description:before {
  content: "\\f29e"; }

.fa-autoprefixer:before {
  content: "\\f41c"; }

.fa-avianex:before {
  content: "\\f374"; }

.fa-aviato:before {
  content: "\\f421"; }

.fa-award:before {
  content: "\\f559"; }

.fa-aws:before {
  content: "\\f375"; }

.fa-baby:before {
  content: "\\f77c"; }

.fa-baby-carriage:before {
  content: "\\f77d"; }

.fa-backspace:before {
  content: "\\f55a"; }

.fa-backward:before {
  content: "\\f04a"; }

.fa-bacon:before {
  content: "\\f7e5"; }

.fa-bacteria:before {
  content: "\\e059"; }

.fa-bacterium:before {
  content: "\\e05a"; }

.fa-bahai:before {
  content: "\\f666"; }

.fa-balance-scale:before {
  content: "\\f24e"; }

.fa-balance-scale-left:before {
  content: "\\f515"; }

.fa-balance-scale-right:before {
  content: "\\f516"; }

.fa-ban:before {
  content: "\\f05e"; }

.fa-band-aid:before {
  content: "\\f462"; }

.fa-bandcamp:before {
  content: "\\f2d5"; }

.fa-barcode:before {
  content: "\\f02a"; }

.fa-bars:before {
  content: "\\f0c9"; }

.fa-baseball-ball:before {
  content: "\\f433"; }

.fa-basketball-ball:before {
  content: "\\f434"; }

.fa-bath:before {
  content: "\\f2cd"; }

.fa-battery-empty:before {
  content: "\\f244"; }

.fa-battery-full:before {
  content: "\\f240"; }

.fa-battery-half:before {
  content: "\\f242"; }

.fa-battery-quarter:before {
  content: "\\f243"; }

.fa-battery-three-quarters:before {
  content: "\\f241"; }

.fa-battle-net:before {
  content: "\\f835"; }

.fa-bed:before {
  content: "\\f236"; }

.fa-beer:before {
  content: "\\f0fc"; }

.fa-behance:before {
  content: "\\f1b4"; }

.fa-behance-square:before {
  content: "\\f1b5"; }

.fa-bell:before {
  content: "\\f0f3"; }

.fa-bell-slash:before {
  content: "\\f1f6"; }

.fa-bezier-curve:before {
  content: "\\f55b"; }

.fa-bible:before {
  content: "\\f647"; }

.fa-bicycle:before {
  content: "\\f206"; }

.fa-biking:before {
  content: "\\f84a"; }

.fa-bimobject:before {
  content: "\\f378"; }

.fa-binoculars:before {
  content: "\\f1e5"; }

.fa-biohazard:before {
  content: "\\f780"; }

.fa-birthday-cake:before {
  content: "\\f1fd"; }

.fa-bitbucket:before {
  content: "\\f171"; }

.fa-bitcoin:before {
  content: "\\f379"; }

.fa-bity:before {
  content: "\\f37a"; }

.fa-black-tie:before {
  content: "\\f27e"; }

.fa-blackberry:before {
  content: "\\f37b"; }

.fa-blender:before {
  content: "\\f517"; }

.fa-blender-phone:before {
  content: "\\f6b6"; }

.fa-blind:before {
  content: "\\f29d"; }

.fa-blog:before {
  content: "\\f781"; }

.fa-blogger:before {
  content: "\\f37c"; }

.fa-blogger-b:before {
  content: "\\f37d"; }

.fa-bluetooth:before {
  content: "\\f293"; }

.fa-bluetooth-b:before {
  content: "\\f294"; }

.fa-bold:before {
  content: "\\f032"; }

.fa-bolt:before {
  content: "\\f0e7"; }

.fa-bomb:before {
  content: "\\f1e2"; }

.fa-bone:before {
  content: "\\f5d7"; }

.fa-bong:before {
  content: "\\f55c"; }

.fa-book:before {
  content: "\\f02d"; }

.fa-book-dead:before {
  content: "\\f6b7"; }

.fa-book-medical:before {
  content: "\\f7e6"; }

.fa-book-open:before {
  content: "\\f518"; }

.fa-book-reader:before {
  content: "\\f5da"; }

.fa-bookmark:before {
  content: "\\f02e"; }

.fa-bootstrap:before {
  content: "\\f836"; }

.fa-border-all:before {
  content: "\\f84c"; }

.fa-border-none:before {
  content: "\\f850"; }

.fa-border-style:before {
  content: "\\f853"; }

.fa-bowling-ball:before {
  content: "\\f436"; }

.fa-box:before {
  content: "\\f466"; }

.fa-box-open:before {
  content: "\\f49e"; }

.fa-box-tissue:before {
  content: "\\e05b"; }

.fa-boxes:before {
  content: "\\f468"; }

.fa-braille:before {
  content: "\\f2a1"; }

.fa-brain:before {
  content: "\\f5dc"; }

.fa-bread-slice:before {
  content: "\\f7ec"; }

.fa-briefcase:before {
  content: "\\f0b1"; }

.fa-briefcase-medical:before {
  content: "\\f469"; }

.fa-broadcast-tower:before {
  content: "\\f519"; }

.fa-broom:before {
  content: "\\f51a"; }

.fa-brush:before {
  content: "\\f55d"; }

.fa-btc:before {
  content: "\\f15a"; }

.fa-buffer:before {
  content: "\\f837"; }

.fa-bug:before {
  content: "\\f188"; }

.fa-building:before {
  content: "\\f1ad"; }

.fa-bullhorn:before {
  content: "\\f0a1"; }

.fa-bullseye:before {
  content: "\\f140"; }

.fa-burn:before {
  content: "\\f46a"; }

.fa-buromobelexperte:before {
  content: "\\f37f"; }

.fa-bus:before {
  content: "\\f207"; }

.fa-bus-alt:before {
  content: "\\f55e"; }

.fa-business-time:before {
  content: "\\f64a"; }

.fa-buy-n-large:before {
  content: "\\f8a6"; }

.fa-buysellads:before {
  content: "\\f20d"; }

.fa-calculator:before {
  content: "\\f1ec"; }

.fa-calendar:before {
  content: "\\f133"; }

.fa-calendar-alt:before {
  content: "\\f073"; }

.fa-calendar-check:before {
  content: "\\f274"; }

.fa-calendar-day:before {
  content: "\\f783"; }

.fa-calendar-minus:before {
  content: "\\f272"; }

.fa-calendar-plus:before {
  content: "\\f271"; }

.fa-calendar-times:before {
  content: "\\f273"; }

.fa-calendar-week:before {
  content: "\\f784"; }

.fa-camera:before {
  content: "\\f030"; }

.fa-camera-retro:before {
  content: "\\f083"; }

.fa-campground:before {
  content: "\\f6bb"; }

.fa-canadian-maple-leaf:before {
  content: "\\f785"; }

.fa-candy-cane:before {
  content: "\\f786"; }

.fa-cannabis:before {
  content: "\\f55f"; }

.fa-capsules:before {
  content: "\\f46b"; }

.fa-car:before {
  content: "\\f1b9"; }

.fa-car-alt:before {
  content: "\\f5de"; }

.fa-car-battery:before {
  content: "\\f5df"; }

.fa-car-crash:before {
  content: "\\f5e1"; }

.fa-car-side:before {
  content: "\\f5e4"; }

.fa-caravan:before {
  content: "\\f8ff"; }

.fa-caret-down:before {
  content: "\\f0d7"; }

.fa-caret-left:before {
  content: "\\f0d9"; }

.fa-caret-right:before {
  content: "\\f0da"; }

.fa-caret-square-down:before {
  content: "\\f150"; }

.fa-caret-square-left:before {
  content: "\\f191"; }

.fa-caret-square-right:before {
  content: "\\f152"; }

.fa-caret-square-up:before {
  content: "\\f151"; }

.fa-caret-up:before {
  content: "\\f0d8"; }

.fa-carrot:before {
  content: "\\f787"; }

.fa-cart-arrow-down:before {
  content: "\\f218"; }

.fa-cart-plus:before {
  content: "\\f217"; }

.fa-cash-register:before {
  content: "\\f788"; }

.fa-cat:before {
  content: "\\f6be"; }

.fa-cc-amazon-pay:before {
  content: "\\f42d"; }

.fa-cc-amex:before {
  content: "\\f1f3"; }

.fa-cc-apple-pay:before {
  content: "\\f416"; }

.fa-cc-diners-club:before {
  content: "\\f24c"; }

.fa-cc-discover:before {
  content: "\\f1f2"; }

.fa-cc-jcb:before {
  content: "\\f24b"; }

.fa-cc-mastercard:before {
  content: "\\f1f1"; }

.fa-cc-paypal:before {
  content: "\\f1f4"; }

.fa-cc-stripe:before {
  content: "\\f1f5"; }

.fa-cc-visa:before {
  content: "\\f1f0"; }

.fa-centercode:before {
  content: "\\f380"; }

.fa-centos:before {
  content: "\\f789"; }

.fa-certificate:before {
  content: "\\f0a3"; }

.fa-chair:before {
  content: "\\f6c0"; }

.fa-chalkboard:before {
  content: "\\f51b"; }

.fa-chalkboard-teacher:before {
  content: "\\f51c"; }

.fa-charging-station:before {
  content: "\\f5e7"; }

.fa-chart-area:before {
  content: "\\f1fe"; }

.fa-chart-bar:before {
  content: "\\f080"; }

.fa-chart-line:before {
  content: "\\f201"; }

.fa-chart-pie:before {
  content: "\\f200"; }

.fa-check:before {
  content: "\\f00c"; }

.fa-check-circle:before {
  content: "\\f058"; }

.fa-check-double:before {
  content: "\\f560"; }

.fa-check-square:before {
  content: "\\f14a"; }

.fa-cheese:before {
  content: "\\f7ef"; }

.fa-chess:before {
  content: "\\f439"; }

.fa-chess-bishop:before {
  content: "\\f43a"; }

.fa-chess-board:before {
  content: "\\f43c"; }

.fa-chess-king:before {
  content: "\\f43f"; }

.fa-chess-knight:before {
  content: "\\f441"; }

.fa-chess-pawn:before {
  content: "\\f443"; }

.fa-chess-queen:before {
  content: "\\f445"; }

.fa-chess-rook:before {
  content: "\\f447"; }

.fa-chevron-circle-down:before {
  content: "\\f13a"; }

.fa-chevron-circle-left:before {
  content: "\\f137"; }

.fa-chevron-circle-right:before {
  content: "\\f138"; }

.fa-chevron-circle-up:before {
  content: "\\f139"; }

.fa-chevron-down:before {
  content: "\\f078"; }

.fa-chevron-left:before {
  content: "\\f053"; }

.fa-chevron-right:before {
  content: "\\f054"; }

.fa-chevron-up:before {
  content: "\\f077"; }

.fa-child:before {
  content: "\\f1ae"; }

.fa-chrome:before {
  content: "\\f268"; }

.fa-chromecast:before {
  content: "\\f838"; }

.fa-church:before {
  content: "\\f51d"; }

.fa-circle:before {
  content: "\\f111"; }

.fa-circle-notch:before {
  content: "\\f1ce"; }

.fa-city:before {
  content: "\\f64f"; }

.fa-clinic-medical:before {
  content: "\\f7f2"; }

.fa-clipboard:before {
  content: "\\f328"; }

.fa-clipboard-check:before {
  content: "\\f46c"; }

.fa-clipboard-list:before {
  content: "\\f46d"; }

.fa-clock:before {
  content: "\\f017"; }

.fa-clone:before {
  content: "\\f24d"; }

.fa-closed-captioning:before {
  content: "\\f20a"; }

.fa-cloud:before {
  content: "\\f0c2"; }

.fa-cloud-download-alt:before {
  content: "\\f381"; }

.fa-cloud-meatball:before {
  content: "\\f73b"; }

.fa-cloud-moon:before {
  content: "\\f6c3"; }

.fa-cloud-moon-rain:before {
  content: "\\f73c"; }

.fa-cloud-rain:before {
  content: "\\f73d"; }

.fa-cloud-showers-heavy:before {
  content: "\\f740"; }

.fa-cloud-sun:before {
  content: "\\f6c4"; }

.fa-cloud-sun-rain:before {
  content: "\\f743"; }

.fa-cloud-upload-alt:before {
  content: "\\f382"; }

.fa-cloudflare:before {
  content: "\\e07d"; }

.fa-cloudscale:before {
  content: "\\f383"; }

.fa-cloudsmith:before {
  content: "\\f384"; }

.fa-cloudversify:before {
  content: "\\f385"; }

.fa-cocktail:before {
  content: "\\f561"; }

.fa-code:before {
  content: "\\f121"; }

.fa-code-branch:before {
  content: "\\f126"; }

.fa-codepen:before {
  content: "\\f1cb"; }

.fa-codiepie:before {
  content: "\\f284"; }

.fa-coffee:before {
  content: "\\f0f4"; }

.fa-cog:before {
  content: "\\f013"; }

.fa-cogs:before {
  content: "\\f085"; }

.fa-coins:before {
  content: "\\f51e"; }

.fa-columns:before {
  content: "\\f0db"; }

.fa-comment:before {
  content: "\\f075"; }

.fa-comment-alt:before {
  content: "\\f27a"; }

.fa-comment-dollar:before {
  content: "\\f651"; }

.fa-comment-dots:before {
  content: "\\f4ad"; }

.fa-comment-medical:before {
  content: "\\f7f5"; }

.fa-comment-slash:before {
  content: "\\f4b3"; }

.fa-comments:before {
  content: "\\f086"; }

.fa-comments-dollar:before {
  content: "\\f653"; }

.fa-compact-disc:before {
  content: "\\f51f"; }

.fa-compass:before {
  content: "\\f14e"; }

.fa-compress:before {
  content: "\\f066"; }

.fa-compress-alt:before {
  content: "\\f422"; }

.fa-compress-arrows-alt:before {
  content: "\\f78c"; }

.fa-concierge-bell:before {
  content: "\\f562"; }

.fa-confluence:before {
  content: "\\f78d"; }

.fa-connectdevelop:before {
  content: "\\f20e"; }

.fa-contao:before {
  content: "\\f26d"; }

.fa-cookie:before {
  content: "\\f563"; }

.fa-cookie-bite:before {
  content: "\\f564"; }

.fa-copy:before {
  content: "\\f0c5"; }

.fa-copyright:before {
  content: "\\f1f9"; }

.fa-cotton-bureau:before {
  content: "\\f89e"; }

.fa-couch:before {
  content: "\\f4b8"; }

.fa-cpanel:before {
  content: "\\f388"; }

.fa-creative-commons:before {
  content: "\\f25e"; }

.fa-creative-commons-by:before {
  content: "\\f4e7"; }

.fa-creative-commons-nc:before {
  content: "\\f4e8"; }

.fa-creative-commons-nc-eu:before {
  content: "\\f4e9"; }

.fa-creative-commons-nc-jp:before {
  content: "\\f4ea"; }

.fa-creative-commons-nd:before {
  content: "\\f4eb"; }

.fa-creative-commons-pd:before {
  content: "\\f4ec"; }

.fa-creative-commons-pd-alt:before {
  content: "\\f4ed"; }

.fa-creative-commons-remix:before {
  content: "\\f4ee"; }

.fa-creative-commons-sa:before {
  content: "\\f4ef"; }

.fa-creative-commons-sampling:before {
  content: "\\f4f0"; }

.fa-creative-commons-sampling-plus:before {
  content: "\\f4f1"; }

.fa-creative-commons-share:before {
  content: "\\f4f2"; }

.fa-creative-commons-zero:before {
  content: "\\f4f3"; }

.fa-credit-card:before {
  content: "\\f09d"; }

.fa-critical-role:before {
  content: "\\f6c9"; }

.fa-crop:before {
  content: "\\f125"; }

.fa-crop-alt:before {
  content: "\\f565"; }

.fa-cross:before {
  content: "\\f654"; }

.fa-crosshairs:before {
  content: "\\f05b"; }

.fa-crow:before {
  content: "\\f520"; }

.fa-crown:before {
  content: "\\f521"; }

.fa-crutch:before {
  content: "\\f7f7"; }

.fa-css3:before {
  content: "\\f13c"; }

.fa-css3-alt:before {
  content: "\\f38b"; }

.fa-cube:before {
  content: "\\f1b2"; }

.fa-cubes:before {
  content: "\\f1b3"; }

.fa-cut:before {
  content: "\\f0c4"; }

.fa-cuttlefish:before {
  content: "\\f38c"; }

.fa-d-and-d:before {
  content: "\\f38d"; }

.fa-d-and-d-beyond:before {
  content: "\\f6ca"; }

.fa-dailymotion:before {
  content: "\\e052"; }

.fa-dashcube:before {
  content: "\\f210"; }

.fa-database:before {
  content: "\\f1c0"; }

.fa-deaf:before {
  content: "\\f2a4"; }

.fa-deezer:before {
  content: "\\e077"; }

.fa-delicious:before {
  content: "\\f1a5"; }

.fa-democrat:before {
  content: "\\f747"; }

.fa-deploydog:before {
  content: "\\f38e"; }

.fa-deskpro:before {
  content: "\\f38f"; }

.fa-desktop:before {
  content: "\\f108"; }

.fa-dev:before {
  content: "\\f6cc"; }

.fa-deviantart:before {
  content: "\\f1bd"; }

.fa-dharmachakra:before {
  content: "\\f655"; }

.fa-dhl:before {
  content: "\\f790"; }

.fa-diagnoses:before {
  content: "\\f470"; }

.fa-diaspora:before {
  content: "\\f791"; }

.fa-dice:before {
  content: "\\f522"; }

.fa-dice-d20:before {
  content: "\\f6cf"; }

.fa-dice-d6:before {
  content: "\\f6d1"; }

.fa-dice-five:before {
  content: "\\f523"; }

.fa-dice-four:before {
  content: "\\f524"; }

.fa-dice-one:before {
  content: "\\f525"; }

.fa-dice-six:before {
  content: "\\f526"; }

.fa-dice-three:before {
  content: "\\f527"; }

.fa-dice-two:before {
  content: "\\f528"; }

.fa-digg:before {
  content: "\\f1a6"; }

.fa-digital-ocean:before {
  content: "\\f391"; }

.fa-digital-tachograph:before {
  content: "\\f566"; }

.fa-directions:before {
  content: "\\f5eb"; }

.fa-discord:before {
  content: "\\f392"; }

.fa-discourse:before {
  content: "\\f393"; }

.fa-disease:before {
  content: "\\f7fa"; }

.fa-divide:before {
  content: "\\f529"; }

.fa-dizzy:before {
  content: "\\f567"; }

.fa-dna:before {
  content: "\\f471"; }

.fa-dochub:before {
  content: "\\f394"; }

.fa-docker:before {
  content: "\\f395"; }

.fa-dog:before {
  content: "\\f6d3"; }

.fa-dollar-sign:before {
  content: "\\f155"; }

.fa-dolly:before {
  content: "\\f472"; }

.fa-dolly-flatbed:before {
  content: "\\f474"; }

.fa-donate:before {
  content: "\\f4b9"; }

.fa-door-closed:before {
  content: "\\f52a"; }

.fa-door-open:before {
  content: "\\f52b"; }

.fa-dot-circle:before {
  content: "\\f192"; }

.fa-dove:before {
  content: "\\f4ba"; }

.fa-download:before {
  content: "\\f019"; }

.fa-draft2digital:before {
  content: "\\f396"; }

.fa-drafting-compass:before {
  content: "\\f568"; }

.fa-dragon:before {
  content: "\\f6d5"; }

.fa-draw-polygon:before {
  content: "\\f5ee"; }

.fa-dribbble:before {
  content: "\\f17d"; }

.fa-dribbble-square:before {
  content: "\\f397"; }

.fa-dropbox:before {
  content: "\\f16b"; }

.fa-drum:before {
  content: "\\f569"; }

.fa-drum-steelpan:before {
  content: "\\f56a"; }

.fa-drumstick-bite:before {
  content: "\\f6d7"; }

.fa-drupal:before {
  content: "\\f1a9"; }

.fa-dumbbell:before {
  content: "\\f44b"; }

.fa-dumpster:before {
  content: "\\f793"; }

.fa-dumpster-fire:before {
  content: "\\f794"; }

.fa-dungeon:before {
  content: "\\f6d9"; }

.fa-dyalog:before {
  content: "\\f399"; }

.fa-earlybirds:before {
  content: "\\f39a"; }

.fa-ebay:before {
  content: "\\f4f4"; }

.fa-edge:before {
  content: "\\f282"; }

.fa-edge-legacy:before {
  content: "\\e078"; }

.fa-edit:before {
  content: "\\f044"; }

.fa-egg:before {
  content: "\\f7fb"; }

.fa-eject:before {
  content: "\\f052"; }

.fa-elementor:before {
  content: "\\f430"; }

.fa-ellipsis-h:before {
  content: "\\f141"; }

.fa-ellipsis-v:before {
  content: "\\f142"; }

.fa-ello:before {
  content: "\\f5f1"; }

.fa-ember:before {
  content: "\\f423"; }

.fa-empire:before {
  content: "\\f1d1"; }

.fa-envelope:before {
  content: "\\f0e0"; }

.fa-envelope-open:before {
  content: "\\f2b6"; }

.fa-envelope-open-text:before {
  content: "\\f658"; }

.fa-envelope-square:before {
  content: "\\f199"; }

.fa-envira:before {
  content: "\\f299"; }

.fa-equals:before {
  content: "\\f52c"; }

.fa-eraser:before {
  content: "\\f12d"; }

.fa-erlang:before {
  content: "\\f39d"; }

.fa-ethereum:before {
  content: "\\f42e"; }

.fa-ethernet:before {
  content: "\\f796"; }

.fa-etsy:before {
  content: "\\f2d7"; }

.fa-euro-sign:before {
  content: "\\f153"; }

.fa-evernote:before {
  content: "\\f839"; }

.fa-exchange-alt:before {
  content: "\\f362"; }

.fa-exclamation:before {
  content: "\\f12a"; }

.fa-exclamation-circle:before {
  content: "\\f06a"; }

.fa-exclamation-triangle:before {
  content: "\\f071"; }

.fa-expand:before {
  content: "\\f065"; }

.fa-expand-alt:before {
  content: "\\f424"; }

.fa-expand-arrows-alt:before {
  content: "\\f31e"; }

.fa-expeditedssl:before {
  content: "\\f23e"; }

.fa-external-link-alt:before {
  content: "\\f35d"; }

.fa-external-link-square-alt:before {
  content: "\\f360"; }

.fa-eye:before {
  content: "\\f06e"; }

.fa-eye-dropper:before {
  content: "\\f1fb"; }

.fa-eye-slash:before {
  content: "\\f070"; }

.fa-facebook:before {
  content: "\\f09a"; }

.fa-facebook-f:before {
  content: "\\f39e"; }

.fa-facebook-messenger:before {
  content: "\\f39f"; }

.fa-facebook-square:before {
  content: "\\f082"; }

.fa-fan:before {
  content: "\\f863"; }

.fa-fantasy-flight-games:before {
  content: "\\f6dc"; }

.fa-fast-backward:before {
  content: "\\f049"; }

.fa-fast-forward:before {
  content: "\\f050"; }

.fa-faucet:before {
  content: "\\e005"; }

.fa-fax:before {
  content: "\\f1ac"; }

.fa-feather:before {
  content: "\\f52d"; }

.fa-feather-alt:before {
  content: "\\f56b"; }

.fa-fedex:before {
  content: "\\f797"; }

.fa-fedora:before {
  content: "\\f798"; }

.fa-female:before {
  content: "\\f182"; }

.fa-fighter-jet:before {
  content: "\\f0fb"; }

.fa-figma:before {
  content: "\\f799"; }

.fa-file:before {
  content: "\\f15b"; }

.fa-file-alt:before {
  content: "\\f15c"; }

.fa-file-archive:before {
  content: "\\f1c6"; }

.fa-file-audio:before {
  content: "\\f1c7"; }

.fa-file-code:before {
  content: "\\f1c9"; }

.fa-file-contract:before {
  content: "\\f56c"; }

.fa-file-csv:before {
  content: "\\f6dd"; }

.fa-file-download:before {
  content: "\\f56d"; }

.fa-file-excel:before {
  content: "\\f1c3"; }

.fa-file-export:before {
  content: "\\f56e"; }

.fa-file-image:before {
  content: "\\f1c5"; }

.fa-file-import:before {
  content: "\\f56f"; }

.fa-file-invoice:before {
  content: "\\f570"; }

.fa-file-invoice-dollar:before {
  content: "\\f571"; }

.fa-file-medical:before {
  content: "\\f477"; }

.fa-file-medical-alt:before {
  content: "\\f478"; }

.fa-file-pdf:before {
  content: "\\f1c1"; }

.fa-file-powerpoint:before {
  content: "\\f1c4"; }

.fa-file-prescription:before {
  content: "\\f572"; }

.fa-file-signature:before {
  content: "\\f573"; }

.fa-file-upload:before {
  content: "\\f574"; }

.fa-file-video:before {
  content: "\\f1c8"; }

.fa-file-word:before {
  content: "\\f1c2"; }

.fa-fill:before {
  content: "\\f575"; }

.fa-fill-drip:before {
  content: "\\f576"; }

.fa-film:before {
  content: "\\f008"; }

.fa-filter:before {
  content: "\\f0b0"; }

.fa-fingerprint:before {
  content: "\\f577"; }

.fa-fire:before {
  content: "\\f06d"; }

.fa-fire-alt:before {
  content: "\\f7e4"; }

.fa-fire-extinguisher:before {
  content: "\\f134"; }

.fa-firefox:before {
  content: "\\f269"; }

.fa-firefox-browser:before {
  content: "\\e007"; }

.fa-first-aid:before {
  content: "\\f479"; }

.fa-first-order:before {
  content: "\\f2b0"; }

.fa-first-order-alt:before {
  content: "\\f50a"; }

.fa-firstdraft:before {
  content: "\\f3a1"; }

.fa-fish:before {
  content: "\\f578"; }

.fa-fist-raised:before {
  content: "\\f6de"; }

.fa-flag:before {
  content: "\\f024"; }

.fa-flag-checkered:before {
  content: "\\f11e"; }

.fa-flag-usa:before {
  content: "\\f74d"; }

.fa-flask:before {
  content: "\\f0c3"; }

.fa-flickr:before {
  content: "\\f16e"; }

.fa-flipboard:before {
  content: "\\f44d"; }

.fa-flushed:before {
  content: "\\f579"; }

.fa-fly:before {
  content: "\\f417"; }

.fa-folder:before {
  content: "\\f07b"; }

.fa-folder-minus:before {
  content: "\\f65d"; }

.fa-folder-open:before {
  content: "\\f07c"; }

.fa-folder-plus:before {
  content: "\\f65e"; }

.fa-font:before {
  content: "\\f031"; }

.fa-font-awesome:before {
  content: "\\f2b4"; }

.fa-font-awesome-alt:before {
  content: "\\f35c"; }

.fa-font-awesome-flag:before {
  content: "\\f425"; }

.fa-font-awesome-logo-full:before {
  content: "\\f4e6"; }

.fa-fonticons:before {
  content: "\\f280"; }

.fa-fonticons-fi:before {
  content: "\\f3a2"; }

.fa-football-ball:before {
  content: "\\f44e"; }

.fa-fort-awesome:before {
  content: "\\f286"; }

.fa-fort-awesome-alt:before {
  content: "\\f3a3"; }

.fa-forumbee:before {
  content: "\\f211"; }

.fa-forward:before {
  content: "\\f04e"; }

.fa-foursquare:before {
  content: "\\f180"; }

.fa-free-code-camp:before {
  content: "\\f2c5"; }

.fa-freebsd:before {
  content: "\\f3a4"; }

.fa-frog:before {
  content: "\\f52e"; }

.fa-frown:before {
  content: "\\f119"; }

.fa-frown-open:before {
  content: "\\f57a"; }

.fa-fulcrum:before {
  content: "\\f50b"; }

.fa-funnel-dollar:before {
  content: "\\f662"; }

.fa-futbol:before {
  content: "\\f1e3"; }

.fa-galactic-republic:before {
  content: "\\f50c"; }

.fa-galactic-senate:before {
  content: "\\f50d"; }

.fa-gamepad:before {
  content: "\\f11b"; }

.fa-gas-pump:before {
  content: "\\f52f"; }

.fa-gavel:before {
  content: "\\f0e3"; }

.fa-gem:before {
  content: "\\f3a5"; }

.fa-genderless:before {
  content: "\\f22d"; }

.fa-get-pocket:before {
  content: "\\f265"; }

.fa-gg:before {
  content: "\\f260"; }

.fa-gg-circle:before {
  content: "\\f261"; }

.fa-ghost:before {
  content: "\\f6e2"; }

.fa-gift:before {
  content: "\\f06b"; }

.fa-gifts:before {
  content: "\\f79c"; }

.fa-git:before {
  content: "\\f1d3"; }

.fa-git-alt:before {
  content: "\\f841"; }

.fa-git-square:before {
  content: "\\f1d2"; }

.fa-github:before {
  content: "\\f09b"; }

.fa-github-alt:before {
  content: "\\f113"; }

.fa-github-square:before {
  content: "\\f092"; }

.fa-gitkraken:before {
  content: "\\f3a6"; }

.fa-gitlab:before {
  content: "\\f296"; }

.fa-gitter:before {
  content: "\\f426"; }

.fa-glass-cheers:before {
  content: "\\f79f"; }

.fa-glass-martini:before {
  content: "\\f000"; }

.fa-glass-martini-alt:before {
  content: "\\f57b"; }

.fa-glass-whiskey:before {
  content: "\\f7a0"; }

.fa-glasses:before {
  content: "\\f530"; }

.fa-glide:before {
  content: "\\f2a5"; }

.fa-glide-g:before {
  content: "\\f2a6"; }

.fa-globe:before {
  content: "\\f0ac"; }

.fa-globe-africa:before {
  content: "\\f57c"; }

.fa-globe-americas:before {
  content: "\\f57d"; }

.fa-globe-asia:before {
  content: "\\f57e"; }

.fa-globe-europe:before {
  content: "\\f7a2"; }

.fa-gofore:before {
  content: "\\f3a7"; }

.fa-golf-ball:before {
  content: "\\f450"; }

.fa-goodreads:before {
  content: "\\f3a8"; }

.fa-goodreads-g:before {
  content: "\\f3a9"; }

.fa-google:before {
  content: "\\f1a0"; }

.fa-google-drive:before {
  content: "\\f3aa"; }

.fa-google-pay:before {
  content: "\\e079"; }

.fa-google-play:before {
  content: "\\f3ab"; }

.fa-google-plus:before {
  content: "\\f2b3"; }

.fa-google-plus-g:before {
  content: "\\f0d5"; }

.fa-google-plus-square:before {
  content: "\\f0d4"; }

.fa-google-wallet:before {
  content: "\\f1ee"; }

.fa-gopuram:before {
  content: "\\f664"; }

.fa-graduation-cap:before {
  content: "\\f19d"; }

.fa-gratipay:before {
  content: "\\f184"; }

.fa-grav:before {
  content: "\\f2d6"; }

.fa-greater-than:before {
  content: "\\f531"; }

.fa-greater-than-equal:before {
  content: "\\f532"; }

.fa-grimace:before {
  content: "\\f57f"; }

.fa-grin:before {
  content: "\\f580"; }

.fa-grin-alt:before {
  content: "\\f581"; }

.fa-grin-beam:before {
  content: "\\f582"; }

.fa-grin-beam-sweat:before {
  content: "\\f583"; }

.fa-grin-hearts:before {
  content: "\\f584"; }

.fa-grin-squint:before {
  content: "\\f585"; }

.fa-grin-squint-tears:before {
  content: "\\f586"; }

.fa-grin-stars:before {
  content: "\\f587"; }

.fa-grin-tears:before {
  content: "\\f588"; }

.fa-grin-tongue:before {
  content: "\\f589"; }

.fa-grin-tongue-squint:before {
  content: "\\f58a"; }

.fa-grin-tongue-wink:before {
  content: "\\f58b"; }

.fa-grin-wink:before {
  content: "\\f58c"; }

.fa-grip-horizontal:before {
  content: "\\f58d"; }

.fa-grip-lines:before {
  content: "\\f7a4"; }

.fa-grip-lines-vertical:before {
  content: "\\f7a5"; }

.fa-grip-vertical:before {
  content: "\\f58e"; }

.fa-gripfire:before {
  content: "\\f3ac"; }

.fa-grunt:before {
  content: "\\f3ad"; }

.fa-guilded:before {
  content: "\\e07e"; }

.fa-guitar:before {
  content: "\\f7a6"; }

.fa-gulp:before {
  content: "\\f3ae"; }

.fa-h-square:before {
  content: "\\f0fd"; }

.fa-hacker-news:before {
  content: "\\f1d4"; }

.fa-hacker-news-square:before {
  content: "\\f3af"; }

.fa-hackerrank:before {
  content: "\\f5f7"; }

.fa-hamburger:before {
  content: "\\f805"; }

.fa-hammer:before {
  content: "\\f6e3"; }

.fa-hamsa:before {
  content: "\\f665"; }

.fa-hand-holding:before {
  content: "\\f4bd"; }

.fa-hand-holding-heart:before {
  content: "\\f4be"; }

.fa-hand-holding-medical:before {
  content: "\\e05c"; }

.fa-hand-holding-usd:before {
  content: "\\f4c0"; }

.fa-hand-holding-water:before {
  content: "\\f4c1"; }

.fa-hand-lizard:before {
  content: "\\f258"; }

.fa-hand-middle-finger:before {
  content: "\\f806"; }

.fa-hand-paper:before {
  content: "\\f256"; }

.fa-hand-peace:before {
  content: "\\f25b"; }

.fa-hand-point-down:before {
  content: "\\f0a7"; }

.fa-hand-point-left:before {
  content: "\\f0a5"; }

.fa-hand-point-right:before {
  content: "\\f0a4"; }

.fa-hand-point-up:before {
  content: "\\f0a6"; }

.fa-hand-pointer:before {
  content: "\\f25a"; }

.fa-hand-rock:before {
  content: "\\f255"; }

.fa-hand-scissors:before {
  content: "\\f257"; }

.fa-hand-sparkles:before {
  content: "\\e05d"; }

.fa-hand-spock:before {
  content: "\\f259"; }

.fa-hands:before {
  content: "\\f4c2"; }

.fa-hands-helping:before {
  content: "\\f4c4"; }

.fa-hands-wash:before {
  content: "\\e05e"; }

.fa-handshake:before {
  content: "\\f2b5"; }

.fa-handshake-alt-slash:before {
  content: "\\e05f"; }

.fa-handshake-slash:before {
  content: "\\e060"; }

.fa-hanukiah:before {
  content: "\\f6e6"; }

.fa-hard-hat:before {
  content: "\\f807"; }

.fa-hashtag:before {
  content: "\\f292"; }

.fa-hat-cowboy:before {
  content: "\\f8c0"; }

.fa-hat-cowboy-side:before {
  content: "\\f8c1"; }

.fa-hat-wizard:before {
  content: "\\f6e8"; }

.fa-hdd:before {
  content: "\\f0a0"; }

.fa-head-side-cough:before {
  content: "\\e061"; }

.fa-head-side-cough-slash:before {
  content: "\\e062"; }

.fa-head-side-mask:before {
  content: "\\e063"; }

.fa-head-side-virus:before {
  content: "\\e064"; }

.fa-heading:before {
  content: "\\f1dc"; }

.fa-headphones:before {
  content: "\\f025"; }

.fa-headphones-alt:before {
  content: "\\f58f"; }

.fa-headset:before {
  content: "\\f590"; }

.fa-heart:before {
  content: "\\f004"; }

.fa-heart-broken:before {
  content: "\\f7a9"; }

.fa-heartbeat:before {
  content: "\\f21e"; }

.fa-helicopter:before {
  content: "\\f533"; }

.fa-highlighter:before {
  content: "\\f591"; }

.fa-hiking:before {
  content: "\\f6ec"; }

.fa-hippo:before {
  content: "\\f6ed"; }

.fa-hips:before {
  content: "\\f452"; }

.fa-hire-a-helper:before {
  content: "\\f3b0"; }

.fa-history:before {
  content: "\\f1da"; }

.fa-hive:before {
  content: "\\e07f"; }

.fa-hockey-puck:before {
  content: "\\f453"; }

.fa-holly-berry:before {
  content: "\\f7aa"; }

.fa-home:before {
  content: "\\f015"; }

.fa-hooli:before {
  content: "\\f427"; }

.fa-hornbill:before {
  content: "\\f592"; }

.fa-horse:before {
  content: "\\f6f0"; }

.fa-horse-head:before {
  content: "\\f7ab"; }

.fa-hospital:before {
  content: "\\f0f8"; }

.fa-hospital-alt:before {
  content: "\\f47d"; }

.fa-hospital-symbol:before {
  content: "\\f47e"; }

.fa-hospital-user:before {
  content: "\\f80d"; }

.fa-hot-tub:before {
  content: "\\f593"; }

.fa-hotdog:before {
  content: "\\f80f"; }

.fa-hotel:before {
  content: "\\f594"; }

.fa-hotjar:before {
  content: "\\f3b1"; }

.fa-hourglass:before {
  content: "\\f254"; }

.fa-hourglass-end:before {
  content: "\\f253"; }

.fa-hourglass-half:before {
  content: "\\f252"; }

.fa-hourglass-start:before {
  content: "\\f251"; }

.fa-house-damage:before {
  content: "\\f6f1"; }

.fa-house-user:before {
  content: "\\e065"; }

.fa-houzz:before {
  content: "\\f27c"; }

.fa-hryvnia:before {
  content: "\\f6f2"; }

.fa-html5:before {
  content: "\\f13b"; }

.fa-hubspot:before {
  content: "\\f3b2"; }

.fa-i-cursor:before {
  content: "\\f246"; }

.fa-ice-cream:before {
  content: "\\f810"; }

.fa-icicles:before {
  content: "\\f7ad"; }

.fa-icons:before {
  content: "\\f86d"; }

.fa-id-badge:before {
  content: "\\f2c1"; }

.fa-id-card:before {
  content: "\\f2c2"; }

.fa-id-card-alt:before {
  content: "\\f47f"; }

.fa-ideal:before {
  content: "\\e013"; }

.fa-igloo:before {
  content: "\\f7ae"; }

.fa-image:before {
  content: "\\f03e"; }

.fa-images:before {
  content: "\\f302"; }

.fa-imdb:before {
  content: "\\f2d8"; }

.fa-inbox:before {
  content: "\\f01c"; }

.fa-indent:before {
  content: "\\f03c"; }

.fa-industry:before {
  content: "\\f275"; }

.fa-infinity:before {
  content: "\\f534"; }

.fa-info:before {
  content: "\\f129"; }

.fa-info-circle:before {
  content: "\\f05a"; }

.fa-innosoft:before {
  content: "\\e080"; }

.fa-instagram:before {
  content: "\\f16d"; }

.fa-instagram-square:before {
  content: "\\e055"; }

.fa-instalod:before {
  content: "\\e081"; }

.fa-intercom:before {
  content: "\\f7af"; }

.fa-internet-explorer:before {
  content: "\\f26b"; }

.fa-invision:before {
  content: "\\f7b0"; }

.fa-ioxhost:before {
  content: "\\f208"; }

.fa-italic:before {
  content: "\\f033"; }

.fa-itch-io:before {
  content: "\\f83a"; }

.fa-itunes:before {
  content: "\\f3b4"; }

.fa-itunes-note:before {
  content: "\\f3b5"; }

.fa-java:before {
  content: "\\f4e4"; }

.fa-jedi:before {
  content: "\\f669"; }

.fa-jedi-order:before {
  content: "\\f50e"; }

.fa-jenkins:before {
  content: "\\f3b6"; }

.fa-jira:before {
  content: "\\f7b1"; }

.fa-joget:before {
  content: "\\f3b7"; }

.fa-joint:before {
  content: "\\f595"; }

.fa-joomla:before {
  content: "\\f1aa"; }

.fa-journal-whills:before {
  content: "\\f66a"; }

.fa-js:before {
  content: "\\f3b8"; }

.fa-js-square:before {
  content: "\\f3b9"; }

.fa-jsfiddle:before {
  content: "\\f1cc"; }

.fa-kaaba:before {
  content: "\\f66b"; }

.fa-kaggle:before {
  content: "\\f5fa"; }

.fa-key:before {
  content: "\\f084"; }

.fa-keybase:before {
  content: "\\f4f5"; }

.fa-keyboard:before {
  content: "\\f11c"; }

.fa-keycdn:before {
  content: "\\f3ba"; }

.fa-khanda:before {
  content: "\\f66d"; }

.fa-kickstarter:before {
  content: "\\f3bb"; }

.fa-kickstarter-k:before {
  content: "\\f3bc"; }

.fa-kiss:before {
  content: "\\f596"; }

.fa-kiss-beam:before {
  content: "\\f597"; }

.fa-kiss-wink-heart:before {
  content: "\\f598"; }

.fa-kiwi-bird:before {
  content: "\\f535"; }

.fa-korvue:before {
  content: "\\f42f"; }

.fa-landmark:before {
  content: "\\f66f"; }

.fa-language:before {
  content: "\\f1ab"; }

.fa-laptop:before {
  content: "\\f109"; }

.fa-laptop-code:before {
  content: "\\f5fc"; }

.fa-laptop-house:before {
  content: "\\e066"; }

.fa-laptop-medical:before {
  content: "\\f812"; }

.fa-laravel:before {
  content: "\\f3bd"; }

.fa-lastfm:before {
  content: "\\f202"; }

.fa-lastfm-square:before {
  content: "\\f203"; }

.fa-laugh:before {
  content: "\\f599"; }

.fa-laugh-beam:before {
  content: "\\f59a"; }

.fa-laugh-squint:before {
  content: "\\f59b"; }

.fa-laugh-wink:before {
  content: "\\f59c"; }

.fa-layer-group:before {
  content: "\\f5fd"; }

.fa-leaf:before {
  content: "\\f06c"; }

.fa-leanpub:before {
  content: "\\f212"; }

.fa-lemon:before {
  content: "\\f094"; }

.fa-less:before {
  content: "\\f41d"; }

.fa-less-than:before {
  content: "\\f536"; }

.fa-less-than-equal:before {
  content: "\\f537"; }

.fa-level-down-alt:before {
  content: "\\f3be"; }

.fa-level-up-alt:before {
  content: "\\f3bf"; }

.fa-life-ring:before {
  content: "\\f1cd"; }

.fa-lightbulb:before {
  content: "\\f0eb"; }

.fa-line:before {
  content: "\\f3c0"; }

.fa-link:before {
  content: "\\f0c1"; }

.fa-linkedin:before {
  content: "\\f08c"; }

.fa-linkedin-in:before {
  content: "\\f0e1"; }

.fa-linode:before {
  content: "\\f2b8"; }

.fa-linux:before {
  content: "\\f17c"; }

.fa-lira-sign:before {
  content: "\\f195"; }

.fa-list:before {
  content: "\\f03a"; }

.fa-list-alt:before {
  content: "\\f022"; }

.fa-list-ol:before {
  content: "\\f0cb"; }

.fa-list-ul:before {
  content: "\\f0ca"; }

.fa-location-arrow:before {
  content: "\\f124"; }

.fa-lock:before {
  content: "\\f023"; }

.fa-lock-open:before {
  content: "\\f3c1"; }

.fa-long-arrow-alt-down:before {
  content: "\\f309"; }

.fa-long-arrow-alt-left:before {
  content: "\\f30a"; }

.fa-long-arrow-alt-right:before {
  content: "\\f30b"; }

.fa-long-arrow-alt-up:before {
  content: "\\f30c"; }

.fa-low-vision:before {
  content: "\\f2a8"; }

.fa-luggage-cart:before {
  content: "\\f59d"; }

.fa-lungs:before {
  content: "\\f604"; }

.fa-lungs-virus:before {
  content: "\\e067"; }

.fa-lyft:before {
  content: "\\f3c3"; }

.fa-magento:before {
  content: "\\f3c4"; }

.fa-magic:before {
  content: "\\f0d0"; }

.fa-magnet:before {
  content: "\\f076"; }

.fa-mail-bulk:before {
  content: "\\f674"; }

.fa-mailchimp:before {
  content: "\\f59e"; }

.fa-male:before {
  content: "\\f183"; }

.fa-mandalorian:before {
  content: "\\f50f"; }

.fa-map:before {
  content: "\\f279"; }

.fa-map-marked:before {
  content: "\\f59f"; }

.fa-map-marked-alt:before {
  content: "\\f5a0"; }

.fa-map-marker:before {
  content: "\\f041"; }

.fa-map-marker-alt:before {
  content: "\\f3c5"; }

.fa-map-pin:before {
  content: "\\f276"; }

.fa-map-signs:before {
  content: "\\f277"; }

.fa-markdown:before {
  content: "\\f60f"; }

.fa-marker:before {
  content: "\\f5a1"; }

.fa-mars:before {
  content: "\\f222"; }

.fa-mars-double:before {
  content: "\\f227"; }

.fa-mars-stroke:before {
  content: "\\f229"; }

.fa-mars-stroke-h:before {
  content: "\\f22b"; }

.fa-mars-stroke-v:before {
  content: "\\f22a"; }

.fa-mask:before {
  content: "\\f6fa"; }

.fa-mastodon:before {
  content: "\\f4f6"; }

.fa-maxcdn:before {
  content: "\\f136"; }

.fa-mdb:before {
  content: "\\f8ca"; }

.fa-medal:before {
  content: "\\f5a2"; }

.fa-medapps:before {
  content: "\\f3c6"; }

.fa-medium:before {
  content: "\\f23a"; }

.fa-medium-m:before {
  content: "\\f3c7"; }

.fa-medkit:before {
  content: "\\f0fa"; }

.fa-medrt:before {
  content: "\\f3c8"; }

.fa-meetup:before {
  content: "\\f2e0"; }

.fa-megaport:before {
  content: "\\f5a3"; }

.fa-meh:before {
  content: "\\f11a"; }

.fa-meh-blank:before {
  content: "\\f5a4"; }

.fa-meh-rolling-eyes:before {
  content: "\\f5a5"; }

.fa-memory:before {
  content: "\\f538"; }

.fa-mendeley:before {
  content: "\\f7b3"; }

.fa-menorah:before {
  content: "\\f676"; }

.fa-mercury:before {
  content: "\\f223"; }

.fa-meteor:before {
  content: "\\f753"; }

.fa-microblog:before {
  content: "\\e01a"; }

.fa-microchip:before {
  content: "\\f2db"; }

.fa-microphone:before {
  content: "\\f130"; }

.fa-microphone-alt:before {
  content: "\\f3c9"; }

.fa-microphone-alt-slash:before {
  content: "\\f539"; }

.fa-microphone-slash:before {
  content: "\\f131"; }

.fa-microscope:before {
  content: "\\f610"; }

.fa-microsoft:before {
  content: "\\f3ca"; }

.fa-minus:before {
  content: "\\f068"; }

.fa-minus-circle:before {
  content: "\\f056"; }

.fa-minus-square:before {
  content: "\\f146"; }

.fa-mitten:before {
  content: "\\f7b5"; }

.fa-mix:before {
  content: "\\f3cb"; }

.fa-mixcloud:before {
  content: "\\f289"; }

.fa-mixer:before {
  content: "\\e056"; }

.fa-mizuni:before {
  content: "\\f3cc"; }

.fa-mobile:before {
  content: "\\f10b"; }

.fa-mobile-alt:before {
  content: "\\f3cd"; }

.fa-modx:before {
  content: "\\f285"; }

.fa-monero:before {
  content: "\\f3d0"; }

.fa-money-bill:before {
  content: "\\f0d6"; }

.fa-money-bill-alt:before {
  content: "\\f3d1"; }

.fa-money-bill-wave:before {
  content: "\\f53a"; }

.fa-money-bill-wave-alt:before {
  content: "\\f53b"; }

.fa-money-check:before {
  content: "\\f53c"; }

.fa-money-check-alt:before {
  content: "\\f53d"; }

.fa-monument:before {
  content: "\\f5a6"; }

.fa-moon:before {
  content: "\\f186"; }

.fa-mortar-pestle:before {
  content: "\\f5a7"; }

.fa-mosque:before {
  content: "\\f678"; }

.fa-motorcycle:before {
  content: "\\f21c"; }

.fa-mountain:before {
  content: "\\f6fc"; }

.fa-mouse:before {
  content: "\\f8cc"; }

.fa-mouse-pointer:before {
  content: "\\f245"; }

.fa-mug-hot:before {
  content: "\\f7b6"; }

.fa-music:before {
  content: "\\f001"; }

.fa-napster:before {
  content: "\\f3d2"; }

.fa-neos:before {
  content: "\\f612"; }

.fa-network-wired:before {
  content: "\\f6ff"; }

.fa-neuter:before {
  content: "\\f22c"; }

.fa-newspaper:before {
  content: "\\f1ea"; }

.fa-nimblr:before {
  content: "\\f5a8"; }

.fa-node:before {
  content: "\\f419"; }

.fa-node-js:before {
  content: "\\f3d3"; }

.fa-not-equal:before {
  content: "\\f53e"; }

.fa-notes-medical:before {
  content: "\\f481"; }

.fa-npm:before {
  content: "\\f3d4"; }

.fa-ns8:before {
  content: "\\f3d5"; }

.fa-nutritionix:before {
  content: "\\f3d6"; }

.fa-object-group:before {
  content: "\\f247"; }

.fa-object-ungroup:before {
  content: "\\f248"; }

.fa-octopus-deploy:before {
  content: "\\e082"; }

.fa-odnoklassniki:before {
  content: "\\f263"; }

.fa-odnoklassniki-square:before {
  content: "\\f264"; }

.fa-oil-can:before {
  content: "\\f613"; }

.fa-old-republic:before {
  content: "\\f510"; }

.fa-om:before {
  content: "\\f679"; }

.fa-opencart:before {
  content: "\\f23d"; }

.fa-openid:before {
  content: "\\f19b"; }

.fa-opera:before {
  content: "\\f26a"; }

.fa-optin-monster:before {
  content: "\\f23c"; }

.fa-orcid:before {
  content: "\\f8d2"; }

.fa-osi:before {
  content: "\\f41a"; }

.fa-otter:before {
  content: "\\f700"; }

.fa-outdent:before {
  content: "\\f03b"; }

.fa-page4:before {
  content: "\\f3d7"; }

.fa-pagelines:before {
  content: "\\f18c"; }

.fa-pager:before {
  content: "\\f815"; }

.fa-paint-brush:before {
  content: "\\f1fc"; }

.fa-paint-roller:before {
  content: "\\f5aa"; }

.fa-palette:before {
  content: "\\f53f"; }

.fa-palfed:before {
  content: "\\f3d8"; }

.fa-pallet:before {
  content: "\\f482"; }

.fa-paper-plane:before {
  content: "\\f1d8"; }

.fa-paperclip:before {
  content: "\\f0c6"; }

.fa-parachute-box:before {
  content: "\\f4cd"; }

.fa-paragraph:before {
  content: "\\f1dd"; }

.fa-parking:before {
  content: "\\f540"; }

.fa-passport:before {
  content: "\\f5ab"; }

.fa-pastafarianism:before {
  content: "\\f67b"; }

.fa-paste:before {
  content: "\\f0ea"; }

.fa-patreon:before {
  content: "\\f3d9"; }

.fa-pause:before {
  content: "\\f04c"; }

.fa-pause-circle:before {
  content: "\\f28b"; }

.fa-paw:before {
  content: "\\f1b0"; }

.fa-paypal:before {
  content: "\\f1ed"; }

.fa-peace:before {
  content: "\\f67c"; }

.fa-pen:before {
  content: "\\f304"; }

.fa-pen-alt:before {
  content: "\\f305"; }

.fa-pen-fancy:before {
  content: "\\f5ac"; }

.fa-pen-nib:before {
  content: "\\f5ad"; }

.fa-pen-square:before {
  content: "\\f14b"; }

.fa-pencil-alt:before {
  content: "\\f303"; }

.fa-pencil-ruler:before {
  content: "\\f5ae"; }

.fa-penny-arcade:before {
  content: "\\f704"; }

.fa-people-arrows:before {
  content: "\\e068"; }

.fa-people-carry:before {
  content: "\\f4ce"; }

.fa-pepper-hot:before {
  content: "\\f816"; }

.fa-perbyte:before {
  content: "\\e083"; }

.fa-percent:before {
  content: "\\f295"; }

.fa-percentage:before {
  content: "\\f541"; }

.fa-periscope:before {
  content: "\\f3da"; }

.fa-person-booth:before {
  content: "\\f756"; }

.fa-phabricator:before {
  content: "\\f3db"; }

.fa-phoenix-framework:before {
  content: "\\f3dc"; }

.fa-phoenix-squadron:before {
  content: "\\f511"; }

.fa-phone:before {
  content: "\\f095"; }

.fa-phone-alt:before {
  content: "\\f879"; }

.fa-phone-slash:before {
  content: "\\f3dd"; }

.fa-phone-square:before {
  content: "\\f098"; }

.fa-phone-square-alt:before {
  content: "\\f87b"; }

.fa-phone-volume:before {
  content: "\\f2a0"; }

.fa-photo-video:before {
  content: "\\f87c"; }

.fa-php:before {
  content: "\\f457"; }

.fa-pied-piper:before {
  content: "\\f2ae"; }

.fa-pied-piper-alt:before {
  content: "\\f1a8"; }

.fa-pied-piper-hat:before {
  content: "\\f4e5"; }

.fa-pied-piper-pp:before {
  content: "\\f1a7"; }

.fa-pied-piper-square:before {
  content: "\\e01e"; }

.fa-piggy-bank:before {
  content: "\\f4d3"; }

.fa-pills:before {
  content: "\\f484"; }

.fa-pinterest:before {
  content: "\\f0d2"; }

.fa-pinterest-p:before {
  content: "\\f231"; }

.fa-pinterest-square:before {
  content: "\\f0d3"; }

.fa-pizza-slice:before {
  content: "\\f818"; }

.fa-place-of-worship:before {
  content: "\\f67f"; }

.fa-plane:before {
  content: "\\f072"; }

.fa-plane-arrival:before {
  content: "\\f5af"; }

.fa-plane-departure:before {
  content: "\\f5b0"; }

.fa-plane-slash:before {
  content: "\\e069"; }

.fa-play:before {
  content: "\\f04b"; }

.fa-play-circle:before {
  content: "\\f144"; }

.fa-playstation:before {
  content: "\\f3df"; }

.fa-plug:before {
  content: "\\f1e6"; }

.fa-plus:before {
  content: "\\f067"; }

.fa-plus-circle:before {
  content: "\\f055"; }

.fa-plus-square:before {
  content: "\\f0fe"; }

.fa-podcast:before {
  content: "\\f2ce"; }

.fa-poll:before {
  content: "\\f681"; }

.fa-poll-h:before {
  content: "\\f682"; }

.fa-poo:before {
  content: "\\f2fe"; }

.fa-poo-storm:before {
  content: "\\f75a"; }

.fa-poop:before {
  content: "\\f619"; }

.fa-portrait:before {
  content: "\\f3e0"; }

.fa-pound-sign:before {
  content: "\\f154"; }

.fa-power-off:before {
  content: "\\f011"; }

.fa-pray:before {
  content: "\\f683"; }

.fa-praying-hands:before {
  content: "\\f684"; }

.fa-prescription:before {
  content: "\\f5b1"; }

.fa-prescription-bottle:before {
  content: "\\f485"; }

.fa-prescription-bottle-alt:before {
  content: "\\f486"; }

.fa-print:before {
  content: "\\f02f"; }

.fa-procedures:before {
  content: "\\f487"; }

.fa-product-hunt:before {
  content: "\\f288"; }

.fa-project-diagram:before {
  content: "\\f542"; }

.fa-pump-medical:before {
  content: "\\e06a"; }

.fa-pump-soap:before {
  content: "\\e06b"; }

.fa-pushed:before {
  content: "\\f3e1"; }

.fa-puzzle-piece:before {
  content: "\\f12e"; }

.fa-python:before {
  content: "\\f3e2"; }

.fa-qq:before {
  content: "\\f1d6"; }

.fa-qrcode:before {
  content: "\\f029"; }

.fa-question:before {
  content: "\\f128"; }

.fa-question-circle:before {
  content: "\\f059"; }

.fa-quidditch:before {
  content: "\\f458"; }

.fa-quinscape:before {
  content: "\\f459"; }

.fa-quora:before {
  content: "\\f2c4"; }

.fa-quote-left:before {
  content: "\\f10d"; }

.fa-quote-right:before {
  content: "\\f10e"; }

.fa-quran:before {
  content: "\\f687"; }

.fa-r-project:before {
  content: "\\f4f7"; }

.fa-radiation:before {
  content: "\\f7b9"; }

.fa-radiation-alt:before {
  content: "\\f7ba"; }

.fa-rainbow:before {
  content: "\\f75b"; }

.fa-random:before {
  content: "\\f074"; }

.fa-raspberry-pi:before {
  content: "\\f7bb"; }

.fa-ravelry:before {
  content: "\\f2d9"; }

.fa-react:before {
  content: "\\f41b"; }

.fa-reacteurope:before {
  content: "\\f75d"; }

.fa-readme:before {
  content: "\\f4d5"; }

.fa-rebel:before {
  content: "\\f1d0"; }

.fa-receipt:before {
  content: "\\f543"; }

.fa-record-vinyl:before {
  content: "\\f8d9"; }

.fa-recycle:before {
  content: "\\f1b8"; }

.fa-red-river:before {
  content: "\\f3e3"; }

.fa-reddit:before {
  content: "\\f1a1"; }

.fa-reddit-alien:before {
  content: "\\f281"; }

.fa-reddit-square:before {
  content: "\\f1a2"; }

.fa-redhat:before {
  content: "\\f7bc"; }

.fa-redo:before {
  content: "\\f01e"; }

.fa-redo-alt:before {
  content: "\\f2f9"; }

.fa-registered:before {
  content: "\\f25d"; }

.fa-remove-format:before {
  content: "\\f87d"; }

.fa-renren:before {
  content: "\\f18b"; }

.fa-reply:before {
  content: "\\f3e5"; }

.fa-reply-all:before {
  content: "\\f122"; }

.fa-replyd:before {
  content: "\\f3e6"; }

.fa-republican:before {
  content: "\\f75e"; }

.fa-researchgate:before {
  content: "\\f4f8"; }

.fa-resolving:before {
  content: "\\f3e7"; }

.fa-restroom:before {
  content: "\\f7bd"; }

.fa-retweet:before {
  content: "\\f079"; }

.fa-rev:before {
  content: "\\f5b2"; }

.fa-ribbon:before {
  content: "\\f4d6"; }

.fa-ring:before {
  content: "\\f70b"; }

.fa-road:before {
  content: "\\f018"; }

.fa-robot:before {
  content: "\\f544"; }

.fa-rocket:before {
  content: "\\f135"; }

.fa-rocketchat:before {
  content: "\\f3e8"; }

.fa-rockrms:before {
  content: "\\f3e9"; }

.fa-route:before {
  content: "\\f4d7"; }

.fa-rss:before {
  content: "\\f09e"; }

.fa-rss-square:before {
  content: "\\f143"; }

.fa-ruble-sign:before {
  content: "\\f158"; }

.fa-ruler:before {
  content: "\\f545"; }

.fa-ruler-combined:before {
  content: "\\f546"; }

.fa-ruler-horizontal:before {
  content: "\\f547"; }

.fa-ruler-vertical:before {
  content: "\\f548"; }

.fa-running:before {
  content: "\\f70c"; }

.fa-rupee-sign:before {
  content: "\\f156"; }

.fa-rust:before {
  content: "\\e07a"; }

.fa-sad-cry:before {
  content: "\\f5b3"; }

.fa-sad-tear:before {
  content: "\\f5b4"; }

.fa-safari:before {
  content: "\\f267"; }

.fa-salesforce:before {
  content: "\\f83b"; }

.fa-sass:before {
  content: "\\f41e"; }

.fa-satellite:before {
  content: "\\f7bf"; }

.fa-satellite-dish:before {
  content: "\\f7c0"; }

.fa-save:before {
  content: "\\f0c7"; }

.fa-schlix:before {
  content: "\\f3ea"; }

.fa-school:before {
  content: "\\f549"; }

.fa-screwdriver:before {
  content: "\\f54a"; }

.fa-scribd:before {
  content: "\\f28a"; }

.fa-scroll:before {
  content: "\\f70e"; }

.fa-sd-card:before {
  content: "\\f7c2"; }

.fa-search:before {
  content: "\\f002"; }

.fa-search-dollar:before {
  content: "\\f688"; }

.fa-search-location:before {
  content: "\\f689"; }

.fa-search-minus:before {
  content: "\\f010"; }

.fa-search-plus:before {
  content: "\\f00e"; }

.fa-searchengin:before {
  content: "\\f3eb"; }

.fa-seedling:before {
  content: "\\f4d8"; }

.fa-sellcast:before {
  content: "\\f2da"; }

.fa-sellsy:before {
  content: "\\f213"; }

.fa-server:before {
  content: "\\f233"; }

.fa-servicestack:before {
  content: "\\f3ec"; }

.fa-shapes:before {
  content: "\\f61f"; }

.fa-share:before {
  content: "\\f064"; }

.fa-share-alt:before {
  content: "\\f1e0"; }

.fa-share-alt-square:before {
  content: "\\f1e1"; }

.fa-share-square:before {
  content: "\\f14d"; }

.fa-shekel-sign:before {
  content: "\\f20b"; }

.fa-shield-alt:before {
  content: "\\f3ed"; }

.fa-shield-virus:before {
  content: "\\e06c"; }

.fa-ship:before {
  content: "\\f21a"; }

.fa-shipping-fast:before {
  content: "\\f48b"; }

.fa-shirtsinbulk:before {
  content: "\\f214"; }

.fa-shoe-prints:before {
  content: "\\f54b"; }

.fa-shopify:before {
  content: "\\e057"; }

.fa-shopping-bag:before {
  content: "\\f290"; }

.fa-shopping-basket:before {
  content: "\\f291"; }

.fa-shopping-cart:before {
  content: "\\f07a"; }

.fa-shopware:before {
  content: "\\f5b5"; }

.fa-shower:before {
  content: "\\f2cc"; }

.fa-shuttle-van:before {
  content: "\\f5b6"; }

.fa-sign:before {
  content: "\\f4d9"; }

.fa-sign-in-alt:before {
  content: "\\f2f6"; }

.fa-sign-language:before {
  content: "\\f2a7"; }

.fa-sign-out-alt:before {
  content: "\\f2f5"; }

.fa-signal:before {
  content: "\\f012"; }

.fa-signature:before {
  content: "\\f5b7"; }

.fa-sim-card:before {
  content: "\\f7c4"; }

.fa-simplybuilt:before {
  content: "\\f215"; }

.fa-sink:before {
  content: "\\e06d"; }

.fa-sistrix:before {
  content: "\\f3ee"; }

.fa-sitemap:before {
  content: "\\f0e8"; }

.fa-sith:before {
  content: "\\f512"; }

.fa-skating:before {
  content: "\\f7c5"; }

.fa-sketch:before {
  content: "\\f7c6"; }

.fa-skiing:before {
  content: "\\f7c9"; }

.fa-skiing-nordic:before {
  content: "\\f7ca"; }

.fa-skull:before {
  content: "\\f54c"; }

.fa-skull-crossbones:before {
  content: "\\f714"; }

.fa-skyatlas:before {
  content: "\\f216"; }

.fa-skype:before {
  content: "\\f17e"; }

.fa-slack:before {
  content: "\\f198"; }

.fa-slack-hash:before {
  content: "\\f3ef"; }

.fa-slash:before {
  content: "\\f715"; }

.fa-sleigh:before {
  content: "\\f7cc"; }

.fa-sliders-h:before {
  content: "\\f1de"; }

.fa-slideshare:before {
  content: "\\f1e7"; }

.fa-smile:before {
  content: "\\f118"; }

.fa-smile-beam:before {
  content: "\\f5b8"; }

.fa-smile-wink:before {
  content: "\\f4da"; }

.fa-smog:before {
  content: "\\f75f"; }

.fa-smoking:before {
  content: "\\f48d"; }

.fa-smoking-ban:before {
  content: "\\f54d"; }

.fa-sms:before {
  content: "\\f7cd"; }

.fa-snapchat:before {
  content: "\\f2ab"; }

.fa-snapchat-ghost:before {
  content: "\\f2ac"; }

.fa-snapchat-square:before {
  content: "\\f2ad"; }

.fa-snowboarding:before {
  content: "\\f7ce"; }

.fa-snowflake:before {
  content: "\\f2dc"; }

.fa-snowman:before {
  content: "\\f7d0"; }

.fa-snowplow:before {
  content: "\\f7d2"; }

.fa-soap:before {
  content: "\\e06e"; }

.fa-socks:before {
  content: "\\f696"; }

.fa-solar-panel:before {
  content: "\\f5ba"; }

.fa-sort:before {
  content: "\\f0dc"; }

.fa-sort-alpha-down:before {
  content: "\\f15d"; }

.fa-sort-alpha-down-alt:before {
  content: "\\f881"; }

.fa-sort-alpha-up:before {
  content: "\\f15e"; }

.fa-sort-alpha-up-alt:before {
  content: "\\f882"; }

.fa-sort-amount-down:before {
  content: "\\f160"; }

.fa-sort-amount-down-alt:before {
  content: "\\f884"; }

.fa-sort-amount-up:before {
  content: "\\f161"; }

.fa-sort-amount-up-alt:before {
  content: "\\f885"; }

.fa-sort-down:before {
  content: "\\f0dd"; }

.fa-sort-numeric-down:before {
  content: "\\f162"; }

.fa-sort-numeric-down-alt:before {
  content: "\\f886"; }

.fa-sort-numeric-up:before {
  content: "\\f163"; }

.fa-sort-numeric-up-alt:before {
  content: "\\f887"; }

.fa-sort-up:before {
  content: "\\f0de"; }

.fa-soundcloud:before {
  content: "\\f1be"; }

.fa-sourcetree:before {
  content: "\\f7d3"; }

.fa-spa:before {
  content: "\\f5bb"; }

.fa-space-shuttle:before {
  content: "\\f197"; }

.fa-speakap:before {
  content: "\\f3f3"; }

.fa-speaker-deck:before {
  content: "\\f83c"; }

.fa-spell-check:before {
  content: "\\f891"; }

.fa-spider:before {
  content: "\\f717"; }

.fa-spinner:before {
  content: "\\f110"; }

.fa-splotch:before {
  content: "\\f5bc"; }

.fa-spotify:before {
  content: "\\f1bc"; }

.fa-spray-can:before {
  content: "\\f5bd"; }

.fa-square:before {
  content: "\\f0c8"; }

.fa-square-full:before {
  content: "\\f45c"; }

.fa-square-root-alt:before {
  content: "\\f698"; }

.fa-squarespace:before {
  content: "\\f5be"; }

.fa-stack-exchange:before {
  content: "\\f18d"; }

.fa-stack-overflow:before {
  content: "\\f16c"; }

.fa-stackpath:before {
  content: "\\f842"; }

.fa-stamp:before {
  content: "\\f5bf"; }

.fa-star:before {
  content: "\\f005"; }

.fa-star-and-crescent:before {
  content: "\\f699"; }

.fa-star-half:before {
  content: "\\f089"; }

.fa-star-half-alt:before {
  content: "\\f5c0"; }

.fa-star-of-david:before {
  content: "\\f69a"; }

.fa-star-of-life:before {
  content: "\\f621"; }

.fa-staylinked:before {
  content: "\\f3f5"; }

.fa-steam:before {
  content: "\\f1b6"; }

.fa-steam-square:before {
  content: "\\f1b7"; }

.fa-steam-symbol:before {
  content: "\\f3f6"; }

.fa-step-backward:before {
  content: "\\f048"; }

.fa-step-forward:before {
  content: "\\f051"; }

.fa-stethoscope:before {
  content: "\\f0f1"; }

.fa-sticker-mule:before {
  content: "\\f3f7"; }

.fa-sticky-note:before {
  content: "\\f249"; }

.fa-stop:before {
  content: "\\f04d"; }

.fa-stop-circle:before {
  content: "\\f28d"; }

.fa-stopwatch:before {
  content: "\\f2f2"; }

.fa-stopwatch-20:before {
  content: "\\e06f"; }

.fa-store:before {
  content: "\\f54e"; }

.fa-store-alt:before {
  content: "\\f54f"; }

.fa-store-alt-slash:before {
  content: "\\e070"; }

.fa-store-slash:before {
  content: "\\e071"; }

.fa-strava:before {
  content: "\\f428"; }

.fa-stream:before {
  content: "\\f550"; }

.fa-street-view:before {
  content: "\\f21d"; }

.fa-strikethrough:before {
  content: "\\f0cc"; }

.fa-stripe:before {
  content: "\\f429"; }

.fa-stripe-s:before {
  content: "\\f42a"; }

.fa-stroopwafel:before {
  content: "\\f551"; }

.fa-studiovinari:before {
  content: "\\f3f8"; }

.fa-stumbleupon:before {
  content: "\\f1a4"; }

.fa-stumbleupon-circle:before {
  content: "\\f1a3"; }

.fa-subscript:before {
  content: "\\f12c"; }

.fa-subway:before {
  content: "\\f239"; }

.fa-suitcase:before {
  content: "\\f0f2"; }

.fa-suitcase-rolling:before {
  content: "\\f5c1"; }

.fa-sun:before {
  content: "\\f185"; }

.fa-superpowers:before {
  content: "\\f2dd"; }

.fa-superscript:before {
  content: "\\f12b"; }

.fa-supple:before {
  content: "\\f3f9"; }

.fa-surprise:before {
  content: "\\f5c2"; }

.fa-suse:before {
  content: "\\f7d6"; }

.fa-swatchbook:before {
  content: "\\f5c3"; }

.fa-swift:before {
  content: "\\f8e1"; }

.fa-swimmer:before {
  content: "\\f5c4"; }

.fa-swimming-pool:before {
  content: "\\f5c5"; }

.fa-symfony:before {
  content: "\\f83d"; }

.fa-synagogue:before {
  content: "\\f69b"; }

.fa-sync:before {
  content: "\\f021"; }

.fa-sync-alt:before {
  content: "\\f2f1"; }

.fa-syringe:before {
  content: "\\f48e"; }

.fa-table:before {
  content: "\\f0ce"; }

.fa-table-tennis:before {
  content: "\\f45d"; }

.fa-tablet:before {
  content: "\\f10a"; }

.fa-tablet-alt:before {
  content: "\\f3fa"; }

.fa-tablets:before {
  content: "\\f490"; }

.fa-tachometer-alt:before {
  content: "\\f3fd"; }

.fa-tag:before {
  content: "\\f02b"; }

.fa-tags:before {
  content: "\\f02c"; }

.fa-tape:before {
  content: "\\f4db"; }

.fa-tasks:before {
  content: "\\f0ae"; }

.fa-taxi:before {
  content: "\\f1ba"; }

.fa-teamspeak:before {
  content: "\\f4f9"; }

.fa-teeth:before {
  content: "\\f62e"; }

.fa-teeth-open:before {
  content: "\\f62f"; }

.fa-telegram:before {
  content: "\\f2c6"; }

.fa-telegram-plane:before {
  content: "\\f3fe"; }

.fa-temperature-high:before {
  content: "\\f769"; }

.fa-temperature-low:before {
  content: "\\f76b"; }

.fa-tencent-weibo:before {
  content: "\\f1d5"; }

.fa-tenge:before {
  content: "\\f7d7"; }

.fa-terminal:before {
  content: "\\f120"; }

.fa-text-height:before {
  content: "\\f034"; }

.fa-text-width:before {
  content: "\\f035"; }

.fa-th:before {
  content: "\\f00a"; }

.fa-th-large:before {
  content: "\\f009"; }

.fa-th-list:before {
  content: "\\f00b"; }

.fa-the-red-yeti:before {
  content: "\\f69d"; }

.fa-theater-masks:before {
  content: "\\f630"; }

.fa-themeco:before {
  content: "\\f5c6"; }

.fa-themeisle:before {
  content: "\\f2b2"; }

.fa-thermometer:before {
  content: "\\f491"; }

.fa-thermometer-empty:before {
  content: "\\f2cb"; }

.fa-thermometer-full:before {
  content: "\\f2c7"; }

.fa-thermometer-half:before {
  content: "\\f2c9"; }

.fa-thermometer-quarter:before {
  content: "\\f2ca"; }

.fa-thermometer-three-quarters:before {
  content: "\\f2c8"; }

.fa-think-peaks:before {
  content: "\\f731"; }

.fa-thumbs-down:before {
  content: "\\f165"; }

.fa-thumbs-up:before {
  content: "\\f164"; }

.fa-thumbtack:before {
  content: "\\f08d"; }

.fa-ticket-alt:before {
  content: "\\f3ff"; }

.fa-tiktok:before {
  content: "\\e07b"; }

.fa-times:before {
  content: "\\f00d"; }

.fa-times-circle:before {
  content: "\\f057"; }

.fa-tint:before {
  content: "\\f043"; }

.fa-tint-slash:before {
  content: "\\f5c7"; }

.fa-tired:before {
  content: "\\f5c8"; }

.fa-toggle-off:before {
  content: "\\f204"; }

.fa-toggle-on:before {
  content: "\\f205"; }

.fa-toilet:before {
  content: "\\f7d8"; }

.fa-toilet-paper:before {
  content: "\\f71e"; }

.fa-toilet-paper-slash:before {
  content: "\\e072"; }

.fa-toolbox:before {
  content: "\\f552"; }

.fa-tools:before {
  content: "\\f7d9"; }

.fa-tooth:before {
  content: "\\f5c9"; }

.fa-torah:before {
  content: "\\f6a0"; }

.fa-torii-gate:before {
  content: "\\f6a1"; }

.fa-tractor:before {
  content: "\\f722"; }

.fa-trade-federation:before {
  content: "\\f513"; }

.fa-trademark:before {
  content: "\\f25c"; }

.fa-traffic-light:before {
  content: "\\f637"; }

.fa-trailer:before {
  content: "\\e041"; }

.fa-train:before {
  content: "\\f238"; }

.fa-tram:before {
  content: "\\f7da"; }

.fa-transgender:before {
  content: "\\f224"; }

.fa-transgender-alt:before {
  content: "\\f225"; }

.fa-trash:before {
  content: "\\f1f8"; }

.fa-trash-alt:before {
  content: "\\f2ed"; }

.fa-trash-restore:before {
  content: "\\f829"; }

.fa-trash-restore-alt:before {
  content: "\\f82a"; }

.fa-tree:before {
  content: "\\f1bb"; }

.fa-trello:before {
  content: "\\f181"; }

.fa-tripadvisor:before {
  content: "\\f262"; }

.fa-trophy:before {
  content: "\\f091"; }

.fa-truck:before {
  content: "\\f0d1"; }

.fa-truck-loading:before {
  content: "\\f4de"; }

.fa-truck-monster:before {
  content: "\\f63b"; }

.fa-truck-moving:before {
  content: "\\f4df"; }

.fa-truck-pickup:before {
  content: "\\f63c"; }

.fa-tshirt:before {
  content: "\\f553"; }

.fa-tty:before {
  content: "\\f1e4"; }

.fa-tumblr:before {
  content: "\\f173"; }

.fa-tumblr-square:before {
  content: "\\f174"; }

.fa-tv:before {
  content: "\\f26c"; }

.fa-twitch:before {
  content: "\\f1e8"; }

.fa-twitter:before {
  content: "\\f099"; }

.fa-twitter-square:before {
  content: "\\f081"; }

.fa-typo3:before {
  content: "\\f42b"; }

.fa-uber:before {
  content: "\\f402"; }

.fa-ubuntu:before {
  content: "\\f7df"; }

.fa-uikit:before {
  content: "\\f403"; }

.fa-umbraco:before {
  content: "\\f8e8"; }

.fa-umbrella:before {
  content: "\\f0e9"; }

.fa-umbrella-beach:before {
  content: "\\f5ca"; }

.fa-uncharted:before {
  content: "\\e084"; }

.fa-underline:before {
  content: "\\f0cd"; }

.fa-undo:before {
  content: "\\f0e2"; }

.fa-undo-alt:before {
  content: "\\f2ea"; }

.fa-uniregistry:before {
  content: "\\f404"; }

.fa-unity:before {
  content: "\\e049"; }

.fa-universal-access:before {
  content: "\\f29a"; }

.fa-university:before {
  content: "\\f19c"; }

.fa-unlink:before {
  content: "\\f127"; }

.fa-unlock:before {
  content: "\\f09c"; }

.fa-unlock-alt:before {
  content: "\\f13e"; }

.fa-unsplash:before {
  content: "\\e07c"; }

.fa-untappd:before {
  content: "\\f405"; }

.fa-upload:before {
  content: "\\f093"; }

.fa-ups:before {
  content: "\\f7e0"; }

.fa-usb:before {
  content: "\\f287"; }

.fa-user:before {
  content: "\\f007"; }

.fa-user-alt:before {
  content: "\\f406"; }

.fa-user-alt-slash:before {
  content: "\\f4fa"; }

.fa-user-astronaut:before {
  content: "\\f4fb"; }

.fa-user-check:before {
  content: "\\f4fc"; }

.fa-user-circle:before {
  content: "\\f2bd"; }

.fa-user-clock:before {
  content: "\\f4fd"; }

.fa-user-cog:before {
  content: "\\f4fe"; }

.fa-user-edit:before {
  content: "\\f4ff"; }

.fa-user-friends:before {
  content: "\\f500"; }

.fa-user-graduate:before {
  content: "\\f501"; }

.fa-user-injured:before {
  content: "\\f728"; }

.fa-user-lock:before {
  content: "\\f502"; }

.fa-user-md:before {
  content: "\\f0f0"; }

.fa-user-minus:before {
  content: "\\f503"; }

.fa-user-ninja:before {
  content: "\\f504"; }

.fa-user-nurse:before {
  content: "\\f82f"; }

.fa-user-plus:before {
  content: "\\f234"; }

.fa-user-secret:before {
  content: "\\f21b"; }

.fa-user-shield:before {
  content: "\\f505"; }

.fa-user-slash:before {
  content: "\\f506"; }

.fa-user-tag:before {
  content: "\\f507"; }

.fa-user-tie:before {
  content: "\\f508"; }

.fa-user-times:before {
  content: "\\f235"; }

.fa-users:before {
  content: "\\f0c0"; }

.fa-users-cog:before {
  content: "\\f509"; }

.fa-users-slash:before {
  content: "\\e073"; }

.fa-usps:before {
  content: "\\f7e1"; }

.fa-ussunnah:before {
  content: "\\f407"; }

.fa-utensil-spoon:before {
  content: "\\f2e5"; }

.fa-utensils:before {
  content: "\\f2e7"; }

.fa-vaadin:before {
  content: "\\f408"; }

.fa-vector-square:before {
  content: "\\f5cb"; }

.fa-venus:before {
  content: "\\f221"; }

.fa-venus-double:before {
  content: "\\f226"; }

.fa-venus-mars:before {
  content: "\\f228"; }

.fa-vest:before {
  content: "\\e085"; }

.fa-vest-patches:before {
  content: "\\e086"; }

.fa-viacoin:before {
  content: "\\f237"; }

.fa-viadeo:before {
  content: "\\f2a9"; }

.fa-viadeo-square:before {
  content: "\\f2aa"; }

.fa-vial:before {
  content: "\\f492"; }

.fa-vials:before {
  content: "\\f493"; }

.fa-viber:before {
  content: "\\f409"; }

.fa-video:before {
  content: "\\f03d"; }

.fa-video-slash:before {
  content: "\\f4e2"; }

.fa-vihara:before {
  content: "\\f6a7"; }

.fa-vimeo:before {
  content: "\\f40a"; }

.fa-vimeo-square:before {
  content: "\\f194"; }

.fa-vimeo-v:before {
  content: "\\f27d"; }

.fa-vine:before {
  content: "\\f1ca"; }

.fa-virus:before {
  content: "\\e074"; }

.fa-virus-slash:before {
  content: "\\e075"; }

.fa-viruses:before {
  content: "\\e076"; }

.fa-vk:before {
  content: "\\f189"; }

.fa-vnv:before {
  content: "\\f40b"; }

.fa-voicemail:before {
  content: "\\f897"; }

.fa-volleyball-ball:before {
  content: "\\f45f"; }

.fa-volume-down:before {
  content: "\\f027"; }

.fa-volume-mute:before {
  content: "\\f6a9"; }

.fa-volume-off:before {
  content: "\\f026"; }

.fa-volume-up:before {
  content: "\\f028"; }

.fa-vote-yea:before {
  content: "\\f772"; }

.fa-vr-cardboard:before {
  content: "\\f729"; }

.fa-vuejs:before {
  content: "\\f41f"; }

.fa-walking:before {
  content: "\\f554"; }

.fa-wallet:before {
  content: "\\f555"; }

.fa-warehouse:before {
  content: "\\f494"; }

.fa-watchman-monitoring:before {
  content: "\\e087"; }

.fa-water:before {
  content: "\\f773"; }

.fa-wave-square:before {
  content: "\\f83e"; }

.fa-waze:before {
  content: "\\f83f"; }

.fa-weebly:before {
  content: "\\f5cc"; }

.fa-weibo:before {
  content: "\\f18a"; }

.fa-weight:before {
  content: "\\f496"; }

.fa-weight-hanging:before {
  content: "\\f5cd"; }

.fa-weixin:before {
  content: "\\f1d7"; }

.fa-whatsapp:before {
  content: "\\f232"; }

.fa-whatsapp-square:before {
  content: "\\f40c"; }

.fa-wheelchair:before {
  content: "\\f193"; }

.fa-whmcs:before {
  content: "\\f40d"; }

.fa-wifi:before {
  content: "\\f1eb"; }

.fa-wikipedia-w:before {
  content: "\\f266"; }

.fa-wind:before {
  content: "\\f72e"; }

.fa-window-close:before {
  content: "\\f410"; }

.fa-window-maximize:before {
  content: "\\f2d0"; }

.fa-window-minimize:before {
  content: "\\f2d1"; }

.fa-window-restore:before {
  content: "\\f2d2"; }

.fa-windows:before {
  content: "\\f17a"; }

.fa-wine-bottle:before {
  content: "\\f72f"; }

.fa-wine-glass:before {
  content: "\\f4e3"; }

.fa-wine-glass-alt:before {
  content: "\\f5ce"; }

.fa-wix:before {
  content: "\\f5cf"; }

.fa-wizards-of-the-coast:before {
  content: "\\f730"; }

.fa-wodu:before {
  content: "\\e088"; }

.fa-wolf-pack-battalion:before {
  content: "\\f514"; }

.fa-won-sign:before {
  content: "\\f159"; }

.fa-wordpress:before {
  content: "\\f19a"; }

.fa-wordpress-simple:before {
  content: "\\f411"; }

.fa-wpbeginner:before {
  content: "\\f297"; }

.fa-wpexplorer:before {
  content: "\\f2de"; }

.fa-wpforms:before {
  content: "\\f298"; }

.fa-wpressr:before {
  content: "\\f3e4"; }

.fa-wrench:before {
  content: "\\f0ad"; }

.fa-x-ray:before {
  content: "\\f497"; }

.fa-xbox:before {
  content: "\\f412"; }

.fa-xing:before {
  content: "\\f168"; }

.fa-xing-square:before {
  content: "\\f169"; }

.fa-y-combinator:before {
  content: "\\f23b"; }

.fa-yahoo:before {
  content: "\\f19e"; }

.fa-yammer:before {
  content: "\\f840"; }

.fa-yandex:before {
  content: "\\f413"; }

.fa-yandex-international:before {
  content: "\\f414"; }

.fa-yarn:before {
  content: "\\f7e3"; }

.fa-yelp:before {
  content: "\\f1e9"; }

.fa-yen-sign:before {
  content: "\\f157"; }

.fa-yin-yang:before {
  content: "\\f6ad"; }

.fa-yoast:before {
  content: "\\f2b1"; }

.fa-youtube:before {
  content: "\\f167"; }

.fa-youtube-square:before {
  content: "\\f431"; }

.fa-zhihu:before {
  content: "\\f63f"; }

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px; }

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto; }
@font-face {
  font-family: 'Font Awesome 5 Brands';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("../webfonts/fa-brands-400.eot");
  src: url("../webfonts/fa-brands-400.eot?#iefix") format("embedded-opentype"), url("../webfonts/fa-brands-400.woff2") format("woff2"), url("../webfonts/fa-brands-400.woff") format("woff"), url("../webfonts/fa-brands-400.ttf") format("truetype"), url("../webfonts/fa-brands-400.svg#fontawesome") format("svg"); }

.fab {
  font-family: 'Font Awesome 5 Brands';
  font-weight: 400; }
@font-face {
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("../webfonts/fa-regular-400.eot");
  src: url("../webfonts/fa-regular-400.eot?#iefix") format("embedded-opentype"), url("../webfonts/fa-regular-400.woff2") format("woff2"), url("../webfonts/fa-regular-400.woff") format("woff"), url("../webfonts/fa-regular-400.ttf") format("truetype"), url("../webfonts/fa-regular-400.svg#fontawesome") format("svg"); }

.far {
  font-family: 'Font Awesome 5 Free';
  font-weight: 400; }
@font-face {
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url("../webfonts/fa-solid-900.eot");
  src: url("../webfonts/fa-solid-900.eot?#iefix") format("embedded-opentype"), url("../webfonts/fa-solid-900.woff2") format("woff2"), url("../webfonts/fa-solid-900.woff") format("woff"), url("../webfonts/fa-solid-900.ttf") format("truetype"), url("../webfonts/fa-solid-900.svg#fontawesome") format("svg"); }

.fa,
.fas {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900; }
`;
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _s{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach((t=>e+=t+" ")),this.element.setAttribute("class",e)}}}const Es=new WeakMap,As=t((e=>t=>{if(!(t instanceof k)||t instanceof C||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:r}=t,{element:o}=r;let n=Es.get(t);void 0===n&&(o.setAttribute("class",r.strings.join(" ")),Es.set(t,n=new Set));const i=o.classList||new _s(o);n.forEach((t=>{t in e||(i.remove(t),n.delete(t))}));for(const t in e){const r=e[t];r!=n.has(t)&&(r?(i.add(t),n.add(t)):(i.remove(t),n.delete(t)))}"function"==typeof i.commit&&i.commit()}));
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
function Cs(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}const Ss=()=>{},Ds={get passive(){return!1}};document.addEventListener("x",Ss,Ds),document.removeEventListener("x",Ss);const Ts=(e=window.document)=>{let t=e.activeElement;const r=[];if(!t)return r;for(;t&&(r.push(t),t.shadowRoot);)t=t.shadowRoot.activeElement;return r};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Rs extends me{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Is=new WeakMap,Ms=t((e=>t=>{if(!(t instanceof k)||t instanceof C||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=t,{style:o}=r.element;let n=Is.get(t);void 0===n&&(o.cssText=r.strings.join(" "),Is.set(t,n=new Set)),n.forEach((t=>{t in e||(n.delete(t),-1===t.indexOf("-")?o[t]=null:o.removeProperty(t))}));for(const t in e)n.add(t),-1===t.indexOf("-")?o[t]=e[t]:o.setProperty(t,e[t])})),Os=e=>(t,r)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,r)=>t.constructor._observers.set(r,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const r=this.constructor._observers.get(t);void 0!==r&&r.call(this,this[t],e)}))}}t.constructor._observers.set(r,e)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;var zs,Ns,Ps={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Hs={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Ls={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(e){e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER",e[e.RIGHT=4]="RIGHT",e[e.FLIP_RTL=8]="FLIP_RTL"}(zs||(zs={})),function(e){e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=4]="TOP_RIGHT",e[e.BOTTOM_LEFT=1]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",e[e.TOP_START=8]="TOP_START",e[e.TOP_END=12]="TOP_END",e[e.BOTTOM_START=9]="BOTTOM_START",e[e.BOTTOM_END=13]="BOTTOM_END"}(Ns||(Ns={}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bs=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),Fs=function(e){function t(r){var o=e.call(this,L(L({},t.defaultAdapter),r))||this;return o.isSurfaceOpen=!1,o.isQuickOpen=!1,o.isHoistedElement=!1,o.isFixedPosition=!1,o.openAnimationEndTimerId=0,o.closeAnimationEndTimerId=0,o.animationRequestId=0,o.anchorCorner=Ns.TOP_START,o.originCorner=Ns.TOP_START,o.anchorMargin={top:0,right:0,bottom:0,left:0},o.position={x:0,y:0},o}return H(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Ps},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Hs},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Ls},enumerable:!0,configurable:!0}),Object.defineProperty(t,"Corner",{get:function(){return Ns},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=t.cssClasses,r=e.ROOT,o=e.OPEN;if(!this.adapter.hasClass(r))throw new Error(r+" class required in root element.");this.adapter.hasClass(o)&&(this.isSurfaceOpen=!0)},t.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},t.prototype.setAnchorCorner=function(e){this.anchorCorner=e},t.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^zs.RIGHT},t.prototype.setAnchorMargin=function(e){this.anchorMargin.top=e.top||0,this.anchorMargin.right=e.right||0,this.anchorMargin.bottom=e.bottom||0,this.anchorMargin.left=e.left||0},t.prototype.setIsHoisted=function(e){this.isHoistedElement=e},t.prototype.setFixedPosition=function(e){this.isFixedPosition=e},t.prototype.setAbsolutePosition=function(e,t){this.position.x=this.isFinite(e)?e:0,this.position.y=this.isFinite(t)?t:0},t.prototype.setQuickOpen=function(e){this.isQuickOpen=e},t.prototype.isOpen=function(){return this.isSurfaceOpen},t.prototype.open=function(){var e=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(t.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(t.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){e.adapter.addClass(t.cssClasses.OPEN),e.dimensions=e.adapter.getInnerDimensions(),e.autoposition(),e.openAnimationEndTimerId=setTimeout((function(){e.openAnimationEndTimerId=0,e.adapter.removeClass(t.cssClasses.ANIMATING_OPEN),e.adapter.notifyOpen()}),Ls.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},t.prototype.close=function(e){var r=this;void 0===e&&(e=!1),this.isSurfaceOpen&&(this.isQuickOpen?(this.isSurfaceOpen=!1,e||this.maybeRestoreFocus(),this.adapter.removeClass(t.cssClasses.OPEN),this.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose()):(this.adapter.addClass(t.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){r.adapter.removeClass(t.cssClasses.OPEN),r.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),r.closeAnimationEndTimerId=setTimeout((function(){r.closeAnimationEndTimerId=0,r.adapter.removeClass(t.cssClasses.ANIMATING_CLOSED),r.adapter.notifyClose()}),Ls.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,e||this.maybeRestoreFocus()))},t.prototype.handleBodyClick=function(e){var t=e.target;this.adapter.isElementInContainer(t)||this.close()},t.prototype.handleKeydown=function(e){var t=e.keyCode;("Escape"===e.key||27===t)&&this.close()},t.prototype.autoposition=function(){var e;this.measurements=this.getAutoLayoutmeasurements();var r=this.getoriginCorner(),o=this.getMenuSurfaceMaxHeight(r),n=this.hasBit(r,zs.BOTTOM)?"bottom":"top",i=this.hasBit(r,zs.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(r),l=this.getVerticalOriginOffset(r),s=this.measurements,d=s.anchorSize,c=s.surfaceSize,f=((e={})[i]=a,e[n]=l,e);d.width/c.width>Ls.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(i="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(f),this.adapter.setTransformOrigin(i+" "+n),this.adapter.setPosition(f),this.adapter.setMaxHeight(o?o+"px":""),this.hasBit(r,zs.BOTTOM)||this.adapter.addClass(t.cssClasses.IS_OPEN_BELOW)},t.prototype.getAutoLayoutmeasurements=function(){var e=this.adapter.getAnchorDimensions(),t=this.adapter.getBodyDimensions(),r=this.adapter.getWindowDimensions(),o=this.adapter.getWindowScroll();return e||(e={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:e,bodySize:t,surfaceSize:this.dimensions,viewportDistance:{top:e.top,right:r.width-e.right,bottom:r.height-e.bottom,left:e.left},viewportSize:r,windowScroll:o}},t.prototype.getoriginCorner=function(){var e,r,o=this.originCorner,n=this.measurements,i=n.viewportDistance,a=n.anchorSize,l=n.surfaceSize,s=t.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,zs.BOTTOM)?(e=i.top-s+a.height+this.anchorMargin.bottom,r=i.bottom-s-this.anchorMargin.bottom):(e=i.top-s+this.anchorMargin.top,r=i.bottom-s+a.height-this.anchorMargin.top),!(r-l.height>0)&&e>=r&&(o=this.setBit(o,zs.BOTTOM));var d,c,f=this.adapter.isRtl(),p=this.hasBit(this.anchorCorner,zs.FLIP_RTL),m=this.hasBit(this.anchorCorner,zs.RIGHT)||this.hasBit(o,zs.RIGHT),u=!1;(u=f&&p?!m:m)?(d=i.left+a.width+this.anchorMargin.right,c=i.right-this.anchorMargin.right):(d=i.left+this.anchorMargin.left,c=i.right+a.width-this.anchorMargin.left);var h=d-l.width>0,g=c-l.width>0,b=this.hasBit(o,zs.FLIP_RTL)&&this.hasBit(o,zs.RIGHT);return g&&b&&f||!h&&b?o=this.unsetBit(o,zs.RIGHT):(h&&u&&f||h&&!u&&m||!g&&d>=c)&&(o=this.setBit(o,zs.RIGHT)),o},t.prototype.getMenuSurfaceMaxHeight=function(e){var r=this.measurements.viewportDistance,o=0,n=this.hasBit(e,zs.BOTTOM),i=this.hasBit(this.anchorCorner,zs.BOTTOM),a=t.numbers.MARGIN_TO_EDGE;return n?(o=r.top+this.anchorMargin.top-a,i||(o+=this.measurements.anchorSize.height)):(o=r.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,i&&(o-=this.measurements.anchorSize.height)),o},t.prototype.getHorizontalOriginOffset=function(e){var t=this.measurements.anchorSize,r=this.hasBit(e,zs.RIGHT),o=this.hasBit(this.anchorCorner,zs.RIGHT);if(r){var n=o?t.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?n-(this.measurements.viewportSize.width-this.measurements.bodySize.width):n}return o?t.width-this.anchorMargin.right:this.anchorMargin.left},t.prototype.getVerticalOriginOffset=function(e){var t=this.measurements.anchorSize,r=this.hasBit(e,zs.BOTTOM),o=this.hasBit(this.anchorCorner,zs.BOTTOM);return r?o?t.height-this.anchorMargin.top:-this.anchorMargin.bottom:o?t.height+this.anchorMargin.bottom:this.anchorMargin.top},t.prototype.adjustPositionForHoistedElement=function(e){var t,r,o=this.measurements,n=o.windowScroll,i=o.viewportDistance,a=Object.keys(e);try{for(var l=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],o=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(a),s=l.next();!s.done;s=l.next()){var d=s.value,c=e[d]||0;c+=i[d],this.isFixedPosition||("top"===d?c+=n.y:"bottom"===d?c-=n.y:"left"===d?c+=n.x:c-=n.x),e[d]=c}}catch(e){t={error:e}}finally{try{s&&!s.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}},t.prototype.maybeRestoreFocus=function(){var e=this.adapter.isFocused(),t=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(e||t)&&this.adapter.restoreFocus()},t.prototype.hasBit=function(e,t){return Boolean(e&t)},t.prototype.setBit=function(e,t){return e|t},t.prototype.unsetBit=function(e,t){return e^t},t.prototype.isFinite=function(e){return"number"==typeof e&&isFinite(e)},t}(Bs);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Us={TOP_LEFT:Ns.TOP_LEFT,TOP_RIGHT:Ns.TOP_RIGHT,BOTTOM_LEFT:Ns.BOTTOM_LEFT,BOTTOM_RIGHT:Ns.BOTTOM_RIGHT,TOP_START:Ns.TOP_START,TOP_END:Ns.TOP_END,BOTTOM_START:Ns.BOTTOM_START,BOTTOM_END:Ns.BOTTOM_END};class Vs extends Rs{constructor(){super(...arguments),this.mdcFoundationClass=Fs,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.bitwiseCorner=Ns.TOP_START,this.previousMenuCorner=null,this.menuCorner="START",this.corner="TOP_START",this.styleTop="",this.styleLeft="",this.styleRight="",this.styleBottom="",this.styleMaxHeight="",this.styleTransformOrigin="",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const e={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth},t={top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin};return N`
      <div
          class="mdc-menu-surface ${As(e)}"
          style="${Ms(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},Cs(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const e=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(e)},notifyOpen:()=>{const e=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(e)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:e=>{this.mdcRoot&&(this.styleTransformOrigin=e)},isFocused:()=>(e=>{const t=Ts();if(!t.length)return!1;const r=t[t.length-1],o=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const i=e=>{n=e.composedPath()};return document.body.addEventListener("check-if-focused",i),r.dispatchEvent(o),document.body.removeEventListener("check-if-focused",i),-1!==n.indexOf(e)})(this),saveFocus:()=>{const e=Ts(),t=e.length;t||(this.previouslyFocused=null),this.previouslyFocused=e[t-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const e=this.mdcRoot;return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const e=this.anchor;return e?e.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:e=>{this.mdcRoot&&(this.styleLeft="left"in e?`${e.left}px`:"",this.styleRight="right"in e?`${e.right}px`:"",this.styleTop="top"in e?`${e.top}px`:"",this.styleBottom="bottom"in e?`${e.bottom}px`:"")},setMaxHeight:async e=>{this.mdcRoot&&(this.styleMaxHeight=e,await this.updateComplete,this.styleMaxHeight=`var(--mdc-menu-max-height, ${e})`)}})}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onBodyClick(e){-1===e.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}close(){this.open=!1}show(){this.open=!0}}B([oe(".mdc-menu-surface")],Vs.prototype,"mdcRoot",void 0),B([oe("slot")],Vs.prototype,"slotElement",void 0),B([te({type:Boolean}),Os((function(e){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(e)}))],Vs.prototype,"absolute",void 0),B([te({type:Boolean})],Vs.prototype,"fullwidth",void 0),B([te({type:Boolean}),Os((function(e){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setIsHoisted(e)}))],Vs.prototype,"fixed",void 0),B([te({type:Number}),Os((function(e){this.mdcFoundation&&null!==this.y&&null!==e&&(this.mdcFoundation.setAbsolutePosition(e,this.y),this.mdcFoundation.setAnchorMargin({left:e,top:this.y,right:-e,bottom:this.y}))}))],Vs.prototype,"x",void 0),B([te({type:Number}),Os((function(e){this.mdcFoundation&&null!==this.x&&null!==e&&(this.mdcFoundation.setAbsolutePosition(this.x,e),this.mdcFoundation.setAnchorMargin({left:this.x,top:e,right:-this.x,bottom:e}))}))],Vs.prototype,"y",void 0),B([te({type:Boolean}),Os((function(e){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(e)}))],Vs.prototype,"quick",void 0),B([te({type:Boolean,reflect:!0}),Os((function(e,t){this.mdcFoundation&&(e?this.mdcFoundation.open():void 0!==t&&this.mdcFoundation.close())}))],Vs.prototype,"open",void 0),B([re(),Os((function(e){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(e)}))],Vs.prototype,"bitwiseCorner",void 0),B([te({type:String}),Os((function(e){if(this.mdcFoundation){const t="START"===e||"END"===e,r=null===this.previousMenuCorner,o=!r&&e!==this.previousMenuCorner,n=r&&"END"===e;t&&(o||n)&&(this.bitwiseCorner=this.bitwiseCorner^zs.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=e)}}))],Vs.prototype,"menuCorner",void 0),B([te({type:String}),Os((function(e){if(this.mdcFoundation&&e){let t=Us[e];"END"===this.menuCorner&&(t^=zs.RIGHT),this.bitwiseCorner=t}}))],Vs.prototype,"corner",void 0),B([re()],Vs.prototype,"styleTop",void 0),B([re()],Vs.prototype,"styleLeft",void 0),B([re()],Vs.prototype,"styleRight",void 0),B([re()],Vs.prototype,"styleBottom",void 0),B([re()],Vs.prototype,"styleMaxHeight",void 0),B([re()],Vs.prototype,"styleTransformOrigin",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const js=fe`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px))}`;class Ws extends Vs{}Ws.styles=js;
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const qs=new WeakMap,Gs=t((e=>t=>{const r=qs.get(t);if(void 0===e&&t instanceof k){if(void 0!==r||!qs.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else e!==r&&t.setValue(e);qs.set(t,e)}));class Ys extends me{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.buffer=1,this.reverse=!1,this.closed=!1,this.ariaLabel="",this.stylePrimaryHalf="",this.stylePrimaryFull="",this.styleSecondaryQuarter="",this.styleSecondaryHalf="",this.styleSecondaryFull="",this.animationReady=!0,this.closedAnimationOff=!1,this.resizeObserver=null}connectedCallback(){super.connectedCallback(),this.rootEl&&this.attachResizeObserver()}render(){const e={"mdc-linear-progress--closed":this.closed,"mdc-linear-progress--closed-animation-off":this.closedAnimationOff,"mdc-linear-progress--indeterminate":this.indeterminate,"mdc-linear-progress--reversed":this.reverse,"mdc-linear-progress--animation-ready":this.animationReady},t={"--mdc-linear-progress-primary-half":this.stylePrimaryHalf,"--mdc-linear-progress-primary-half-neg":""!==this.stylePrimaryHalf?`-${this.stylePrimaryHalf}`:"","--mdc-linear-progress-primary-full":this.stylePrimaryFull,"--mdc-linear-progress-primary-full-neg":""!==this.stylePrimaryFull?`-${this.stylePrimaryFull}`:"","--mdc-linear-progress-secondary-quarter":this.styleSecondaryQuarter,"--mdc-linear-progress-secondary-quarter-neg":""!==this.styleSecondaryQuarter?`-${this.styleSecondaryQuarter}`:"","--mdc-linear-progress-secondary-half":this.styleSecondaryHalf,"--mdc-linear-progress-secondary-half-neg":""!==this.styleSecondaryHalf?`-${this.styleSecondaryHalf}`:"","--mdc-linear-progress-secondary-full":this.styleSecondaryFull,"--mdc-linear-progress-secondary-full-neg":""!==this.styleSecondaryFull?`-${this.styleSecondaryFull}`:""},r={"flex-basis":this.indeterminate?"100%":100*this.buffer+"%"},o={transform:this.indeterminate?"scaleX(1)":`scaleX(${this.progress})`};return N`
      <div
          role="progressbar"
          class="mdc-linear-progress ${As(e)}"
          style=${Ms(t)}
          aria-label=${Gs(this.ariaLabel?this.ariaLabel:void 0)}
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow=${Gs(this.indeterminate?void 0:this.progress)}
        @transitionend=${this.syncClosedState}>
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${Ms(r)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${Ms(o)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`}update(e){!e.has("closed")||this.closed&&void 0!==e.get("closed")||this.syncClosedState(),super.update(e)}async firstUpdated(e){super.firstUpdated(e),this.attachResizeObserver()}syncClosedState(){this.closedAnimationOff=this.closed}updated(e){!e.has("indeterminate")&&e.has("reverse")&&this.indeterminate&&this.restartAnimation(),e.has("indeterminate")&&void 0!==e.get("indeterminate")&&this.indeterminate&&window.ResizeObserver&&this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth),super.updated(e)}disconnectedCallback(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),super.disconnectedCallback()}attachResizeObserver(){if(window.ResizeObserver)return this.resizeObserver=new ResizeObserver((e=>{if(this.indeterminate)for(const t of e)if(t.contentRect){const e=t.contentRect.width;this.calculateAndSetAnimationDimensions(e)}})),void this.resizeObserver.observe(this.rootEl);this.resizeObserver=null}calculateAndSetAnimationDimensions(e){const t=.8367142*e,r=2.00611057*e,o=.37651913*e,n=.84386165*e,i=1.60277782*e;this.stylePrimaryHalf=`${t}px`,this.stylePrimaryFull=`${r}px`,this.styleSecondaryQuarter=`${o}px`,this.styleSecondaryHalf=`${n}px`,this.styleSecondaryFull=`${i}px`,this.restartAnimation()}async restartAnimation(){this.animationReady=!1,await this.updateComplete,await new Promise(requestAnimationFrame),this.animationReady=!0,await this.updateComplete}open(){this.closed=!1}close(){this.closed=!0}}B([oe(".mdc-linear-progress")],Ys.prototype,"rootEl",void 0),B([te({type:Boolean,reflect:!0})],Ys.prototype,"indeterminate",void 0),B([te({type:Number})],Ys.prototype,"progress",void 0),B([te({type:Number})],Ys.prototype,"buffer",void 0),B([te({type:Boolean,reflect:!0})],Ys.prototype,"reverse",void 0),B([te({type:Boolean,reflect:!0})],Ys.prototype,"closed",void 0),B([te()],Ys.prototype,"ariaLabel",void 0),B([re()],Ys.prototype,"stylePrimaryHalf",void 0),B([re()],Ys.prototype,"stylePrimaryFull",void 0),B([re()],Ys.prototype,"styleSecondaryQuarter",void 0),B([re()],Ys.prototype,"styleSecondaryHalf",void 0),B([re()],Ys.prototype,"styleSecondaryFull",void 0),B([re()],Ys.prototype,"animationReady",void 0),B([re()],Ys.prototype,"closedAnimationOff",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const $s=fe`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--reversed .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress--reversed.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;order:0;transform:rotate(0)}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-bar{order:1}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;class Qs extends Ys{}function Xs(e){return{id:e.hash,title:e.content.title,start:new Date(e.content.startTime).toISOString(),end:new Date(e.content.endTime).toISOString()}}Qs.styles=[$s];const Zs=new WeakMap;function Js(e){return t=>{if(function(e,t){let r=t;for(;r;){if(Zs.get(r)===e)return!0;r=Object.getPrototypeOf(r)}return!1}(e,t))return t;const r=e(t);return Zs.set(r,e),r}}class Ks{constructor(e){this._parent=e,this._cache=new Map}has(e){return!!(this._cache.has(e)||this._parent&&this._parent._cache.has(e))}set(e,t){return this._cache.set(e,t),this}get(e){return this._cache.get(e)||this._parent&&this._parent._cache.get(e)}}let ed=Math.round(1e5*Math.random());const td="-|\\.|[0-9]|[a-z]",rd=new RegExp(`[a-z](${td})*-(${td})*`),od=(e,t)=>{const r=`${e}-${ed+=1}`;return((e,t)=>!!t.get(e))(r,t)?od(e,t):r};function nd(e,t=customElements){if(r=e,null===rd.exec(r))throw new Error("tagName is invalid");var r;return od(e,t)}const id=new WeakMap,ad=(e,t)=>id.set(t,e),ld=(e,t,r=customElements)=>{ad(e,t),r.define(e,class extends t{})},sd=(e,t,r)=>{const o=customElements;if(!(e=>Object.prototype.isPrototypeOf.call(HTMLElement,e))(t))return((e,t,r)=>{const o=nd(e,t);if(!r)throw new Error("Lazy scoped elements requires the use of tags cache");return r.set(e,o),o})(e,o,r);if(t===customElements.get(e))return ad(e,t),e;const n=nd(e,o);return ld(n,t,o),n};function dd(e,t,r){return(e=>id.get(e))(t)||r&&r.get(e)||sd(e,t,r)}const cd=new RegExp("<\\/?([a-z](-|\\.|[0-9]|[a-z])*-(-|\\.|[0-9]|[a-z])*)","g"),fd=new Ks,pd=(e,t,r,o)=>{const n=e.map((e=>{let r=e;const n=(e=>{const t=[];let r;for(;null!==(r=cd.exec(e));)t.push(r);return t})(e);for(let e=n.length-1;e>=0;e-=1){const i=n[e],[a,l]=i,s=dd(l,t[l],o),d=i.index+a.length-l.length,c=d+l.length,f=0===a.indexOf("</");r=r.slice(0,d)+(f?s:`${s} data-tag-name="${l}"`)+r.slice(c)}return r}));return r.set(e,n),n};let md=!0;const{ShadyCSS:ud}=window;(void 0===ud||void 0===ud.prepareTemplateDom)&&(md=!1);const hd=new WeakMap,gd=new WeakMap,bd=e=>(gd.has(e)||gd.set(e,new Ks(gd.get(e.constructor))),gd.get(e)),vd=(e,t,r,o)=>e.map((e=>e instanceof v?xd(e,t,r,o):Array.isArray(e)?vd(e,t,r,o):e)),xd=(e,t,r,o)=>new v(function(e,t,r=fd,o){return r.get(e)||pd(e,t,r,o)}(e.strings,t,r,o),vd(e.values,t,r,o),e.type,e.processor),yd=(e,t,r,o)=>n=>{const i=xd(n,t,r,o);return(e=>t=>{const r=((e,t)=>`${e}--${t}`)(t.type,e);let o=M.get(r);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},M.set(r,o));let n=o.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(l);if(n=o.keyString.get(i),void 0===n){const r=t.getTemplateElement();md&&ud.prepareTemplateDom(r,e),n=new c(t,r),o.keyString.set(i,n)}return o.stringsArray.set(t.strings,n),n})(e)(i)},wd=Js((e=>class extends e{static get scopedElements(){return{}}static render(e,t,r){if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const{scopeName:o,eventContext:n}=r,i=(a=n,hd.has(a)||hd.set(a,new Ks(hd.get(a.constructor))),hd.get(a));var a;const l=bd(n),{scopedElements:s}=this;return super.render(e,t,{...r,templateFactory:yd(o,s,i,l)})}defineScopedElement(e,t){return function(e,t,r){const o=r.get(e);o?void 0===customElements.get(o)&&ld(o,t,customElements):r.set(e,dd(e,t,r))}(e,t,bd(this))}static getScopedTagName(e){const t=this.scopedElements[e];return t?dd(e,t,bd(this)):bd(this).get(e)}getScopedTagName(e){const t=this.constructor.scopedElements[e];return t?dd(e,t,bd(this)):bd(this).get(e)}}));
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class kd extends Rs{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _d={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Ed={NOTCH_ELEMENT_PADDING:8},Ad={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},Cd=function(e){function t(r){return e.call(this,L(L({},t.defaultAdapter),r))||this}return H(t,e),Object.defineProperty(t,"strings",{get:function(){return _d},enumerable:!0,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return Ad},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Ed},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),t.prototype.notch=function(e){var r=t.cssClasses.OUTLINE_NOTCHED;e>0&&(e+=Ed.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(e),this.adapter.addClass(r)},t.prototype.closeNotch=function(){var e=t.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(e),this.adapter.removeNotchWidthProperty()},t}(Bs);class Sd extends Rs{constructor(){super(...arguments),this.mdcFoundationClass=Cd,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:e=>this.mdcRoot.classList.add(e),removeClass:e=>this.mdcRoot.classList.remove(e),setNotchWidthProperty:e=>this.notchElement.style.setProperty("width",`${e}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(e,t){this.mdcFoundation&&(e&&void 0!==t?this.mdcFoundation.notch(t):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const e=As({"mdc-notched-outline--notched":this.open});return N`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}B([oe(".mdc-notched-outline")],Sd.prototype,"mdcRoot",void 0),B([te({type:Number})],Sd.prototype,"width",void 0),B([te({type:Boolean,reflect:!0})],Sd.prototype,"open",void 0),B([oe(".mdc-notched-outline__notch")],Sd.prototype,"notchElement",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Dd=fe`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;class Td extends Sd{}Td.styles=Dd;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Rd={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},Id=function(e){function t(r){var o=e.call(this,L(L({},t.defaultAdapter),r))||this;return o.shakeAnimationEndHandler_=function(){return o.handleShakeAnimationEnd_()},o}return H(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Rd},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},t.prototype.getWidth=function(){return this.adapter.getWidth()},t.prototype.shake=function(e){var r=t.cssClasses.LABEL_SHAKE;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.float=function(e){var r=t.cssClasses,o=r.LABEL_FLOAT_ABOVE,n=r.LABEL_SHAKE;e?this.adapter.addClass(o):(this.adapter.removeClass(o),this.adapter.removeClass(n))},t.prototype.setRequired=function(e){var r=t.cssClasses.LABEL_REQUIRED;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.handleShakeAnimationEnd_=function(){var e=t.cssClasses.LABEL_SHAKE;this.adapter.removeClass(e)},t}(Bs),Md={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},Od=function(e){function t(r){var o=e.call(this,L(L({},t.defaultAdapter),r))||this;return o.transitionEndHandler_=function(e){return o.handleTransitionEnd(e)},o}return H(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Md},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler_)},t.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler_)},t.prototype.activate=function(){this.adapter.removeClass(Md.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Md.LINE_RIPPLE_ACTIVE)},t.prototype.setRippleCenter=function(e){this.adapter.setStyle("transform-origin",e+"px center")},t.prototype.deactivate=function(){this.adapter.addClass(Md.LINE_RIPPLE_DEACTIVATING)},t.prototype.handleTransitionEnd=function(e){var t=this.adapter.hasClass(Md.LINE_RIPPLE_DEACTIVATING);"opacity"===e.propertyName&&t&&(this.adapter.removeClass(Md.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Md.LINE_RIPPLE_DEACTIVATING))},t}(Bs);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let zd=class extends Sd{};zd.styles=Dd,zd=B([e=>"function"==typeof e?e:((e,t)=>{const{kind:r,elements:o}=t;return{kind:r,elements:o,finisher(e){}}})(0,e)],zd);const Nd=new WeakMap,Pd=t((e=>t=>{if(!Nd.get(t)){const r=t.committer.element;r.classList.add("mdc-floating-label");const o=(e=>({addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),getWidth:()=>e.scrollWidth,registerInteractionHandler:(t,r)=>{e.addEventListener(t,r)},deregisterInteractionHandler:(t,r)=>{e.removeEventListener(t,r)}}))(r),n=new Id(o);n.init(),t.setValue(n),Nd.set(t,{label:e,foundation:n})}})),Hd=new WeakMap,Ld=t((()=>e=>{if(!Hd.get(e)){const t=e.committer.element;t.classList.add("mdc-line-ripple");const r=(e=>({addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),hasClass:t=>e.classList.contains(t),setStyle:(t,r)=>e.style.setProperty(t,r),registerEventHandler:(t,r)=>{e.addEventListener(t,r)},deregisterEventHandler:(t,r)=>{e.removeEventListener(t,r)}}))(t),o=new Od(r);o.init(),e.setValue(o),Hd.set(e,o)}}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bd={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},Fd={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},Ud={LABEL_SCALE:.75},Vd=["pattern","min","max","required","step","minlength","maxlength"],jd=["color","date","datetime-local","month","range","time","week"],Wd=["mousedown","touchstart"],qd=["click","keydown"],Gd=function(e){function t(r,o){void 0===o&&(o={});var n=e.call(this,L(L({},t.defaultAdapter),r))||this;return n.isFocused_=!1,n.receivedUserInput_=!1,n.isValid_=!0,n.useNativeValidation_=!0,n.validateOnValueChange_=!0,n.helperText_=o.helperText,n.characterCounter_=o.characterCounter,n.leadingIcon_=o.leadingIcon,n.trailingIcon_=o.trailingIcon,n.inputFocusHandler_=function(){return n.activateFocus()},n.inputBlurHandler_=function(){return n.deactivateFocus()},n.inputInputHandler_=function(){return n.handleInput()},n.setPointerXOffset_=function(e){return n.setTransformOrigin(e)},n.textFieldInteractionHandler_=function(){return n.handleTextFieldInteraction()},n.validationAttributeChangeHandler_=function(e){return n.handleValidationAttributeChange(e)},n}return H(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Fd},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Bd},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Ud},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shouldAlwaysFloat_",{get:function(){var e=this.getNativeInput_().type;return jd.indexOf(e)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this;this.adapter.hasLabel()&&this.getNativeInput_().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler_():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating_(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler_),Wd.forEach((function(t){e.adapter.registerInputInteractionHandler(t,e.setPointerXOffset_)})),qd.forEach((function(t){e.adapter.registerTextFieldInteractionHandler(t,e.textFieldInteractionHandler_)})),this.validationObserver_=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},t.prototype.destroy=function(){var e=this;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler_),Wd.forEach((function(t){e.adapter.deregisterInputInteractionHandler(t,e.setPointerXOffset_)})),qd.forEach((function(t){e.adapter.deregisterTextFieldInteractionHandler(t,e.textFieldInteractionHandler_)})),this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_)},t.prototype.handleTextFieldInteraction=function(){var e=this.adapter.getNativeInput();e&&e.disabled||(this.receivedUserInput_=!0)},t.prototype.handleValidationAttributeChange=function(e){var t=this;e.some((function(e){return Vd.indexOf(e)>-1&&(t.styleValidity_(!0),t.adapter.setLabelRequired(t.getNativeInput_().required),!0)})),e.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},t.prototype.notchOutline=function(e){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(e){var t=this.adapter.getLabelWidth()*Ud.LABEL_SCALE;this.adapter.notchOutline(t)}else this.adapter.closeOutline()},t.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText_||!this.helperText_.isPersistent()&&this.helperText_.isValidation()&&this.isValid_||this.helperText_.showToScreenReader()},t.prototype.setTransformOrigin=function(e){if(!this.isDisabled()&&!this.adapter.hasOutline()){var t=e.touches,r=t?t[0]:e,o=r.target.getBoundingClientRect(),n=r.clientX-o.left;this.adapter.setLineRippleTransformOrigin(n)}},t.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},t.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},t.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter.deactivateLineRipple();var e=this.isValid();this.styleValidity_(e),this.styleFocused_(this.isFocused_),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},t.prototype.getValue=function(){return this.getNativeInput_().value},t.prototype.setValue=function(e){if(this.getValue()!==e&&(this.getNativeInput_().value=e),this.setCharacterCounter_(e.length),this.validateOnValueChange_){var t=this.isValid();this.styleValidity_(t)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.validateOnValueChange_&&this.adapter.shakeLabel(this.shouldShake))},t.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},t.prototype.setValid=function(e){this.isValid_=e,this.styleValidity_(e);var t=!e&&!this.isFocused_&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(t)},t.prototype.setValidateOnValueChange=function(e){this.validateOnValueChange_=e},t.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange_},t.prototype.setUseNativeValidation=function(e){this.useNativeValidation_=e},t.prototype.isDisabled=function(){return this.getNativeInput_().disabled},t.prototype.setDisabled=function(e){this.getNativeInput_().disabled=e,this.styleDisabled_(e)},t.prototype.setHelperTextContent=function(e){this.helperText_&&this.helperText_.setContent(e)},t.prototype.setLeadingIconAriaLabel=function(e){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(e)},t.prototype.setLeadingIconContent=function(e){this.leadingIcon_&&this.leadingIcon_.setContent(e)},t.prototype.setTrailingIconAriaLabel=function(e){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(e)},t.prototype.setTrailingIconContent=function(e){this.trailingIcon_&&this.trailingIcon_.setContent(e)},t.prototype.setCharacterCounter_=function(e){if(this.characterCounter_){var t=this.getNativeInput_().maxLength;if(-1===t)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(e,t)}},t.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},t.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},t.prototype.styleValidity_=function(e){var r=t.cssClasses.INVALID;if(e?this.adapter.removeClass(r):this.adapter.addClass(r),this.helperText_){if(this.helperText_.setValidity(e),!this.helperText_.isValidation())return;var o=this.helperText_.isVisible(),n=this.helperText_.getId();o&&n?this.adapter.setInputAttr(Bd.ARIA_DESCRIBEDBY,n):this.adapter.removeInputAttr(Bd.ARIA_DESCRIBEDBY)}},t.prototype.styleFocused_=function(e){var r=t.cssClasses.FOCUSED;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.styleDisabled_=function(e){var r=t.cssClasses,o=r.DISABLED,n=r.INVALID;e?(this.adapter.addClass(o),this.adapter.removeClass(n)):this.adapter.removeClass(o),this.leadingIcon_&&this.leadingIcon_.setDisabled(e),this.trailingIcon_&&this.trailingIcon_.setDisabled(e)},t.prototype.styleFloating_=function(e){var r=t.cssClasses.LABEL_FLOATING;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.getNativeInput_=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},t}(Bs);
/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Yd=t((e=>t=>{let r;if(t instanceof D||t instanceof _)throw new Error("The `live` directive is not allowed on text or event bindings");if(t instanceof E)$d(t.strings),r=t.element.hasAttribute(t.name),t.value=r;else{const{element:o,name:n,strings:i}=t.committer;if($d(i),t instanceof C){if(r=o[n],r===e)return}else t instanceof k&&(r=o.getAttribute(n));if(r===String(e))return}t.setValue(e)})),$d=e=>{if(2!==e.length||""!==e[0]||""!==e[1])throw new Error("`live` bindings can only contain a single expression")},Qd=["touchstart","touchmove","scroll","mousewheel"],Xd=(e={})=>{const t={};for(const r in e)t[r]=e[r];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},t)};class Zd extends kd{constructor(){super(...arguments),this.mdcFoundationClass=Gd,this.value="",this.type="text",this.placeholder="",this.label="",this.icon="",this.iconTrailing="",this.disabled=!1,this.required=!1,this.minLength=-1,this.maxLength=-1,this.outlined=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.autoValidate=!1,this.pattern="",this.min="",this.max="",this.step=null,this.size=null,this.helperPersistent=!1,this.charCounter=!1,this.endAligned=!1,this.prefix="",this.suffix="",this.name="",this.readOnly=!1,this.autocapitalize="",this.outlineOpen=!1,this.outlineWidth=0,this.isUiValid=!0,this.focused=!1,this._validity=Xd(),this._outlineUpdateComplete=null,this.validityTransform=null}get validity(){return this._checkValidity(this.value),this._validity}get willValidate(){return this.formElement.willValidate}get selectionStart(){return this.formElement.selectionStart}get selectionEnd(){return this.formElement.selectionEnd}focus(){const e=new CustomEvent("focus");this.formElement.dispatchEvent(e),this.formElement.focus()}blur(){const e=new CustomEvent("blur");this.formElement.dispatchEvent(e),this.formElement.blur()}select(){this.formElement.select()}setSelectionRange(e,t,r){this.formElement.setSelectionRange(e,t,r)}update(e){e.has("autoValidate")&&this.mdcFoundation&&this.mdcFoundation.setValidateOnValueChange(this.autoValidate),e.has("value")&&"string"!=typeof this.value&&(this.value=`${this.value}`),super.update(e)}render(){const e=this.charCounter&&-1!==this.maxLength,t=!!this.helper||!!this.validationMessage||e,r={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing,"mdc-text-field--end-aligned":this.endAligned};return N`
      <label class="mdc-text-field ${As(r)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(t)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t,e)}
    `}updated(e){e.has("value")&&void 0!==e.get("value")&&(this.mdcFoundation.setValue(this.value),this.autoValidate&&this.reportValidity())}renderRipple(){return this.outlined?"":N`
      <span class="mdc-text-field__ripple"></span>
    `}renderOutline(){return this.outlined?N`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:""}renderLabel(){return this.label?N`
      <span
          .floatingLabelFoundation=${Pd(this.label)}
          id="label">${this.label}</span>
    `:""}renderLeadingIcon(){return this.icon?this.renderIcon(this.icon):""}renderTrailingIcon(){return this.iconTrailing?this.renderIcon(this.iconTrailing,!0):""}renderIcon(e,t=!1){return N`<i class="material-icons mdc-text-field__icon ${As({"mdc-text-field__icon--leading":!t,"mdc-text-field__icon--trailing":t})}">${e}</i>`}renderPrefix(){return this.prefix?this.renderAffix(this.prefix):""}renderSuffix(){return this.suffix?this.renderAffix(this.suffix,!0):""}renderAffix(e,t=!1){return N`<span class="mdc-text-field__affix ${As({"mdc-text-field__affix--prefix":!t,"mdc-text-field__affix--suffix":t})}">
        ${e}</span>`}renderInput(e){const t=-1===this.minLength?void 0:this.minLength,r=-1===this.maxLength?void 0:this.maxLength,o=this.autocapitalize?this.autocapitalize:void 0,n=this.validationMessage&&!this.isUiValid,i=e?"helper-text":void 0,a=this.focused||this.helperPersistent||n?"helper-text":void 0,l=n?"helper-text":void 0;return N`
      <input
          aria-labelledby="label"
          aria-controls="${Gs(i)}"
          aria-describedby="${Gs(a)}"
          aria-errortext="${Gs(l)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Yd(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${Gs(t)}"
          maxlength="${Gs(r)}"
          pattern="${Gs(this.pattern?this.pattern:void 0)}"
          min="${Gs(""===this.min?void 0:this.min)}"
          max="${Gs(""===this.max?void 0:this.max)}"
          step="${Gs(null===this.step?void 0:this.step)}"
          size="${Gs(null===this.size?void 0:this.size)}"
          name="${Gs(""===this.name?void 0:this.name)}"
          inputmode="${Gs(this.inputMode)}"
          autocapitalize="${Gs(o)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`}renderLineRipple(){return this.outlined?"":N`
      <span .lineRippleFoundation=${Ld()}></span>
    `}renderHelperText(e,t){const r=this.validationMessage&&!this.isUiValid,o={"mdc-text-field-helper-text--persistent":this.helperPersistent,"mdc-text-field-helper-text--validation-msg":r},n=this.focused||this.helperPersistent||r?void 0:"true",i=r?this.validationMessage:this.helper;return e?N`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${Gs(n)}"
             class="mdc-text-field-helper-text ${As(o)}"
             >${i}</div>
        ${this.renderCharCounter(t)}
      </div>`:""}renderCharCounter(e){const t=Math.min(this.value.length,this.maxLength);return e?N`
      <span class="mdc-text-field-character-counter"
            >${t} / ${this.maxLength}</span>`:""}onInputFocus(){this.focused=!0}onInputBlur(){this.focused=!1,this.reportValidity()}checkValidity(){const e=this._checkValidity(this.value);if(!e){const e=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(e)}return e}reportValidity(){const e=this.checkValidity();return this.mdcFoundation.setValid(e),this.isUiValid=e,e}_checkValidity(e){const t=this.formElement.validity;let r=Xd(t);if(this.validityTransform){const t=this.validityTransform(e,r);r=Object.assign(Object.assign({},r),t),this.mdcFoundation.setUseNativeValidation(!1)}else this.mdcFoundation.setUseNativeValidation(!0);return this._validity=r,this._validity.valid}setCustomValidity(e){this.validationMessage=e,this.formElement.setCustomValidity(e)}handleInputChange(){this.value=this.formElement.value}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}createAdapter(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods())}getRootAdapterMethods(){return Object.assign({registerTextFieldInteractionHandler:(e,t)=>this.addEventListener(e,t),deregisterTextFieldInteractionHandler:(e,t)=>this.removeEventListener(e,t),registerValidationAttributeChangeHandler:e=>{const t=new MutationObserver((t=>{e((e=>e.map((e=>e.attributeName)).filter((e=>e)))(t))}));return t.observe(this.formElement,{attributes:!0}),t},deregisterValidationAttributeChangeHandler:e=>e.disconnect()},Cs(this.mdcRoot))}getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,setInputAttr:()=>{},removeInputAttr:()=>{},isFocused:()=>!!this.shadowRoot&&this.shadowRoot.activeElement===this.formElement,registerInputInteractionHandler:(e,t)=>this.formElement.addEventListener(e,t,{passive:e in Qd}),deregisterInputInteractionHandler:(e,t)=>this.formElement.removeEventListener(e,t)}}getLabelAdapterMethods(){return{floatLabel:e=>this.labelElement&&this.labelElement.floatingLabelFoundation.float(e),getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasLabel:()=>Boolean(this.labelElement),shakeLabel:e=>this.labelElement&&this.labelElement.floatingLabelFoundation.shake(e),setLabelRequired:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(e)}}}getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},setLineRippleTransformOrigin:e=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)}}}async _getUpdateComplete(){await super._getUpdateComplete(),await this._outlineUpdateComplete}async firstUpdated(){const e=this.outlineElement;e&&(this._outlineUpdateComplete=e.updateComplete,await this._outlineUpdateComplete),super.firstUpdated(),this.mdcFoundation.setValidateOnValueChange(this.autoValidate),this.validateOnInitialRender&&this.reportValidity()}getOutlineAdapterMethods(){return{closeOutline:()=>this.outlineElement&&(this.outlineOpen=!1),hasOutline:()=>Boolean(this.outlineElement),notchOutline:e=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=e,this.outlineOpen=!0)}}}async layout(){await this.updateComplete;const e=this.labelElement;if(!e)return void(this.outlineOpen=!1);const t=!!this.label&&!!this.value;if(e.floatingLabelFoundation.float(t),!this.outlined)return;this.outlineOpen=t,await this.updateComplete;const r=e.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=r)}}B([oe(".mdc-text-field")],Zd.prototype,"mdcRoot",void 0),B([oe("input")],Zd.prototype,"formElement",void 0),B([oe(".mdc-floating-label")],Zd.prototype,"labelElement",void 0),B([oe(".mdc-line-ripple")],Zd.prototype,"lineRippleElement",void 0),B([oe("mwc-notched-outline")],Zd.prototype,"outlineElement",void 0),B([oe(".mdc-notched-outline__notch")],Zd.prototype,"notchElement",void 0),B([te({type:String})],Zd.prototype,"value",void 0),B([te({type:String})],Zd.prototype,"type",void 0),B([te({type:String})],Zd.prototype,"placeholder",void 0),B([te({type:String}),Os((function(e,t){void 0!==t&&this.label!==t&&this.layout()}))],Zd.prototype,"label",void 0),B([te({type:String})],Zd.prototype,"icon",void 0),B([te({type:String})],Zd.prototype,"iconTrailing",void 0),B([te({type:Boolean,reflect:!0})],Zd.prototype,"disabled",void 0),B([te({type:Boolean})],Zd.prototype,"required",void 0),B([te({type:Number})],Zd.prototype,"minLength",void 0),B([te({type:Number})],Zd.prototype,"maxLength",void 0),B([te({type:Boolean,reflect:!0}),Os((function(e,t){void 0!==t&&this.outlined!==t&&this.layout()}))],Zd.prototype,"outlined",void 0),B([te({type:String})],Zd.prototype,"helper",void 0),B([te({type:Boolean})],Zd.prototype,"validateOnInitialRender",void 0),B([te({type:String})],Zd.prototype,"validationMessage",void 0),B([te({type:Boolean})],Zd.prototype,"autoValidate",void 0),B([te({type:String})],Zd.prototype,"pattern",void 0),B([te({type:String})],Zd.prototype,"min",void 0),B([te({type:String})],Zd.prototype,"max",void 0),B([te({type:Number})],Zd.prototype,"step",void 0),B([te({type:Number})],Zd.prototype,"size",void 0),B([te({type:Boolean})],Zd.prototype,"helperPersistent",void 0),B([te({type:Boolean})],Zd.prototype,"charCounter",void 0),B([te({type:Boolean})],Zd.prototype,"endAligned",void 0),B([te({type:String})],Zd.prototype,"prefix",void 0),B([te({type:String})],Zd.prototype,"suffix",void 0),B([te({type:String})],Zd.prototype,"name",void 0),B([te({type:String})],Zd.prototype,"inputMode",void 0),B([te({type:Boolean})],Zd.prototype,"readOnly",void 0),B([te({type:String})],Zd.prototype,"autocapitalize",void 0),B([te({type:Boolean})],Zd.prototype,"outlineOpen",void 0),B([te({type:Number})],Zd.prototype,"outlineWidth",void 0),B([te({type:Boolean})],Zd.prototype,"isUiValid",void 0),B([re()],Zd.prototype,"focused",void 0),B([le({passive:!0})],Zd.prototype,"handleInputChange",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Jd=fe`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;class Kd extends(wd(Zd)){static get scopedElements(){return{"mwc-notched-outline":Td}}}Kd.styles=Jd,B([oe(".mdc-notched-outline")],Kd.prototype,"outlineElement",void 0);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class ec{constructor(e){this.startPress=t=>{e().then((e=>{e&&e.startPress(t)}))},this.endPress=()=>{e().then((e=>{e&&e.endPress()}))},this.startFocus=()=>{e().then((e=>{e&&e.startFocus()}))},this.endFocus=()=>{e().then((e=>{e&&e.endFocus()}))},this.startHover=()=>{e().then((e=>{e&&e.startHover()}))},this.endHover=()=>{e().then((e=>{e&&e.endHover()}))}}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const tc=fe`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;class rc extends(wd(me)){render(){return N`<slot></slot>`}}rc.styles=tc;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var oc={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},nc={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},ic={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ac=["touchstart","pointerdown","mousedown","keydown"],lc=["touchend","pointerup","mouseup","contextmenu"],sc=[],dc=function(e){function t(r){var o=e.call(this,L(L({},t.defaultAdapter),r))||this;return o.activationAnimationHasEnded_=!1,o.activationTimer_=0,o.fgDeactivationRemovalTimer_=0,o.fgScale_="0",o.frame_={width:0,height:0},o.initialSize_=0,o.layoutFrame_=0,o.maxRadius_=0,o.unboundedCoords_={left:0,top:0},o.activationState_=o.defaultActivationState_(),o.activationTimerCallback_=function(){o.activationAnimationHasEnded_=!0,o.runDeactivationUXLogicIfReady_()},o.activateHandler_=function(e){return o.activate_(e)},o.deactivateHandler_=function(){return o.deactivate_()},o.focusHandler_=function(){return o.handleFocus()},o.blurHandler_=function(){return o.handleBlur()},o.resizeHandler_=function(){return o.layout()},o}return H(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return oc},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return nc},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return ic},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this,r=this.supportsPressRipple_();if(this.registerRootHandlers_(r),r){var o=t.cssClasses,n=o.ROOT,i=o.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(n),e.adapter.isUnbounded()&&(e.adapter.addClass(i),e.layoutInternal_())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var r=t.cssClasses,o=r.ROOT,n=r.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(o),e.adapter.removeClass(n),e.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},t.prototype.activate=function(e){this.activate_(e)},t.prototype.deactivate=function(){this.deactivate_()},t.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},t.prototype.setUnbounded=function(e){var r=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers_=function(e){var t=this;e&&(ac.forEach((function(e){t.adapter.registerInteractionHandler(e,t.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},t.prototype.registerDeactivationHandlers_=function(e){var t=this;"keydown"===e.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):lc.forEach((function(e){t.adapter.registerDocumentInteractionHandler(e,t.deactivateHandler_)}))},t.prototype.deregisterRootHandlers_=function(){var e=this;ac.forEach((function(t){e.adapter.deregisterInteractionHandler(t,e.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},t.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),lc.forEach((function(t){e.adapter.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)}))},t.prototype.removeCssVars_=function(){var e=this,r=t.strings;Object.keys(r).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter.updateCssVariable(r[t],null)}))},t.prototype.activate_=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState_;if(!r.isActivated){var o=this.previousActivationEvent_;if(!(o&&void 0!==e&&o.type!==e.type))r.isActivated=!0,r.isProgrammatic=void 0===e,r.activationEvent=e,r.wasActivatedByPointer=!r.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&sc.length>0&&sc.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState_():(void 0!==e&&(sc.push(e.target),this.registerDeactivationHandlers_(e)),r.wasElementMadeActive=this.checkElementMadeActive_(e),r.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){sc=[],r.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(r.wasElementMadeActive=t.checkElementMadeActive_(e),r.wasElementMadeActive&&t.animateActivation_()),r.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())})))}}},t.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},t.prototype.animateActivation_=function(){var e=this,r=t.strings,o=r.VAR_FG_TRANSLATE_START,n=r.VAR_FG_TRANSLATE_END,i=t.cssClasses,a=i.FG_DEACTIVATION,l=i.FG_ACTIVATION,s=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var d="",c="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates_(),p=f.startPoint,m=f.endPoint;d=p.x+"px, "+p.y+"px",c=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(o,d),this.adapter.updateCssVariable(n,c),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer_=setTimeout((function(){return e.activationTimerCallback_()}),s)},t.prototype.getFgTranslationCoordinates_=function(){var e,t=this.activationState_,r=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,r){if(!e)return{x:0,y:0};var o,n,i=t.x,a=t.y,l=i+r.left,s=a+r.top;if("touchstart"===e.type){var d=e;o=d.changedTouches[0].pageX-l,n=d.changedTouches[0].pageY-s}else{var c=e;o=c.pageX-l,n=c.pageY-s}return{x:o,y:n}}(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:e.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},t.prototype.runDeactivationUXLogicIfReady_=function(){var e=this,r=t.cssClasses.FG_DEACTIVATION,o=this.activationState_,n=o.hasDeactivationUXRun,i=o.isActivated;(n||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(r),this.fgDeactivationRemovalTimer_=setTimeout((function(){e.adapter.removeClass(r)}),ic.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses_=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState_=function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return e.previousActivationEvent_=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivate_=function(){var e=this,t=this.activationState_;if(t.isActivated){var r=L({},t);t.isProgrammatic?(requestAnimationFrame((function(){return e.animateDeactivation_(r)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(r),e.resetActivationState_()})))}},t.prototype.animateDeactivation_=function(e){var t=e.wasActivatedByPointer,r=e.wasElementMadeActive;(t||r)&&this.runDeactivationUXLogicIfReady_()},t.prototype.layoutInternal_=function(){var e=this;this.frame_=this.adapter.computeBoundingRect();var r=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?r:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+t.numbers.PADDING;var o=Math.floor(r*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&o%2!=0?this.initialSize_=o-1:this.initialSize_=o,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},t.prototype.updateLayoutCssVars_=function(){var e=t.strings,r=e.VAR_FG_SIZE,o=e.VAR_LEFT,n=e.VAR_TOP,i=e.VAR_FG_SCALE;this.adapter.updateCssVariable(r,this.initialSize_+"px"),this.adapter.updateCssVariable(i,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(o,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords_.top+"px"))},t}(Bs);class cc extends Rs{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=dc}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation((()=>{this.mdcFoundation.activate(e)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),r={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded};return N`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${As(r)}"
          style="${Ms({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}B([oe(".mdc-ripple-surface")],cc.prototype,"mdcRoot",void 0),B([te({type:Boolean})],cc.prototype,"primary",void 0),B([te({type:Boolean})],cc.prototype,"accent",void 0),B([te({type:Boolean})],cc.prototype,"unbounded",void 0),B([te({type:Boolean})],cc.prototype,"disabled",void 0),B([te({type:Boolean})],cc.prototype,"activated",void 0),B([te({type:Boolean})],cc.prototype,"selected",void 0),B([re()],cc.prototype,"hovering",void 0),B([re()],cc.prototype,"bgFocused",void 0),B([re()],cc.prototype,"fgActivation",void 0),B([re()],cc.prototype,"fgDeactivation",void 0),B([re()],cc.prototype,"fgScale",void 0),B([re()],cc.prototype,"fgSize",void 0),B([re()],cc.prototype,"translateStart",void 0),B([re()],cc.prototype,"translateEnd",void 0),B([re()],cc.prototype,"leftPos",void 0),B([re()],cc.prototype,"topPos",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const fc=fe`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}`;class pc extends(wd(cc)){}pc.styles=fc;class mc extends me{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new ec((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderOverlay(){return N``}renderRipple(){const e=this.raised||this.unelevated;return this.shouldRenderRipple?N`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}getRenderClasses(){return As({"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense})}render(){return N`
      <button
          id="button"
          class="mdc-button ${this.getRenderClasses()}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${As({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return N`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}B([te({type:Boolean,reflect:!0})],mc.prototype,"raised",void 0),B([te({type:Boolean,reflect:!0})],mc.prototype,"unelevated",void 0),B([te({type:Boolean,reflect:!0})],mc.prototype,"outlined",void 0),B([te({type:Boolean})],mc.prototype,"dense",void 0),B([te({type:Boolean,reflect:!0})],mc.prototype,"disabled",void 0),B([te({type:Boolean,attribute:"trailingicon"})],mc.prototype,"trailingIcon",void 0),B([te({type:Boolean,reflect:!0})],mc.prototype,"fullwidth",void 0),B([te({type:String})],mc.prototype,"icon",void 0),B([te({type:String})],mc.prototype,"label",void 0),B([te({type:Boolean})],mc.prototype,"expandContent",void 0),B([oe("#button")],mc.prototype,"buttonElement",void 0),B([ne("mwc-ripple")],mc.prototype,"ripple",void 0),B([re()],mc.prototype,"shouldRenderRipple",void 0),B([le({passive:!0})],mc.prototype,"handleRippleActivate",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const uc=fe`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color: #fff;--mdc-ripple-focus-opacity: 0.24;--mdc-ripple-hover-opacity: 0.08;--mdc-ripple-press-opacity: 0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;class hc extends(wd(mc)){static get scopedElements(){return{"mwc-icon":rc,"mwc-ripple":pc}}}hc.styles=uc,B([ne(".ripple")],hc.prototype,"ripple",void 0);const gc=fe`
  .column {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
`;"function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder&&new TextEncoder;const bc=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="];function vc(e){return[Math.floor(e/1e3),e%1e3*1e3]}function xc(e){return 1e3*e[0]+Math.floor(e[1]/1e3)}(e=>{let t={};bc.forEach(((e,r)=>t[e]=r))})(),String.fromCharCode.bind(String),"function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array);wd(me);class yc{constructor(e,t,r="calendar_events"){this.appWebsocket=e,this.cellId=t,this.zomeName=r}async getAllCalendarEvents(){return(await this.callZome("get_my_calendar_events",null)).map((({entry_hash:e,entry:t})=>({hash:e,content:this.entryToEvent(t)})))}async createCalendarEvent({title:e,startTime:t,endTime:r,location:o,invitees:n}){const{entry_hash:i,entry:a}=await this.callZome("create_calendar_event",{title:e,startTime:vc(t),endTime:vc(r),location:o,invitees:n});return{hash:i,content:this.entryToEvent(a)}}async getCalendarEvent(e){const t=await this.callZome("get_calendar_event",e);return{hash:e,content:this.entryToEvent(t)}}async callZome(e,t){return this.appWebsocket.callZome({cap:null,cell_id:this.cellId,zome_name:this.zomeName,fn_name:e,payload:t,provenance:this.cellId[1]})}entryToEvent(e){return{...e,startTime:xc(e.startTime),endTime:xc(e.endTime)}}}const wc=Js((e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._injectedContexts=new Map;for(const e of this.constructor.inject)this._injectContext(e)}_injectContext(e){const t=new CustomEvent("context.connectEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{key:e,connected:!1,callback:(t,r)=>{this._contextValueChanged(e,t,r)}}});this.dispatchEvent(t),t.detail.connected&&this._injectedContexts.set(e,{unsubscribe:t.detail.unsubscribe})}_contextValueChanged(e,t,r){t!==r&&(this[e]=t)}disconnectedCallback(){for(const e of this._injectedContexts.values())e.unsubscribe();super.disconnectedCallback&&super.disconnectedCallback()}})),kc=Js((e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._providedContexts=new Map;for(const e of this.constructor.provide)this._provideContext(e)}_provideContext(e){const t=t=>{const{detail:r}=t;if(r.key===e){t.stopPropagation();const o=this._providedContexts.get(e);o.callbacks.add(r.callback),r.connected=!0,r.unsubscribe=()=>{o.callbacks.delete(r.callback)},r.callback(this[e])}};this.addEventListener("context.connectEvent",t),this._providedContexts.set(e,{listener:t,callbacks:new Set})}_updateContextValue(e,t,r){if(this._providedContexts.has(e)){const o=this._providedContexts.get(e);for(const e of o.callbacks)e(t,r)}}shouldUpdate(e){const t=super.shouldUpdate(e);for(const[t,r]of e.entries())this.constructor.provide.includes(t)&&this._updateContextValue(t,this[t],r);return t}disconnectedCallback(){for(const e of this._providedContexts.values())this.removeEventListener("context.connectEvent",e.listener);super.disconnectedCallback&&super.disconnectedCallback()}}));class _c extends(kc(me)){static get provide(){return["membraneContext"]}updated(e){super.updated(e),(e.has("cellId")||e.has("appWebsocket")||e.has("adminWebsocket"))&&(this.membraneContext={cellId:this.cellId,appWebsocket:this.appWebsocket,adminWebsocket:this.adminWebsocket})}static get styles(){return fe`
      :host {
        display: contents;
      }
    `}render(){return N`<slot></slot>`}}B([te({type:Object})],_c.prototype,"membraneContext",void 0),B([te({type:Array})],_c.prototype,"cellId",void 0),B([te({type:Object})],_c.prototype,"appWebsocket",void 0),B([te({type:Object})],_c.prototype,"adminWebsocket",void 0);class Ec extends((e=>{class t extends(wc(e)){static get inject(){return["membraneContext"]}}return B([te({type:Object})],t.prototype,"membraneContext",void 0),t})(wd(me))){get calendarEventsService(){return new yc(this.membraneContext.appWebsocket,this.membraneContext.cellId)}}class Ac extends Ec{constructor(){super(...arguments),this.initialEventProperties=void 0}static get styles(){return gc}static get scopedElements(){return{"mwc-textfield":Kd,"mwc-button":hc}}async createEvent(){const e=await this.calendarEventsService.createCalendarEvent({title:this._titleField.value,startTime:this.initialEventProperties?.startTime,endTime:this.initialEventProperties?.endTime,location:void 0,invitees:[]});this.dispatchEvent(new CustomEvent("event-created",{detail:{event:e},composed:!0,bubbles:!0}))}render(){return N`
      <div class="column">
        <mwc-textfield
          id="event-title"
          placeholder="Event title"
          .value=${this.initialEventProperties?.title||""}
          part="event-title"
        ></mwc-textfield>

        <span style="margin-top: 16px">
          Start Time:
          ${new Date(this.initialEventProperties?.startTime).toLocaleString()}
        </span>
        <span style="margin-top: 8px">
          End Time:
          ${new Date(this.initialEventProperties?.endTime).toLocaleString()}
        </span>

        <div class="row" style="align-self: flex-end; margin-top: 16px;">
          <mwc-button
            id="create-event-button"
            label="CREATE"
            @click=${()=>this.createEvent()}
          ></mwc-button>
        </div>
      </div>
    `}clear(){this._titleField.value=""}}B([te({type:Object,attribute:!1})],Ac.prototype,"initialEventProperties",void 0),B([oe("#event-title")],Ac.prototype,"_titleField",void 0);class Cc extends Ec{constructor(){super(...arguments),this.initialView="timeGridWeek",this._loading=!0,this._myCalendarEvents=void 0}static get styles(){return[$e,pl,Fl,ws,ks,fe`
        :host {
          display: flex;
        }
      `]}async loadCalendarEvents(){if(this._loading=!0,this._myCalendarEvents=await this.calendarEventsService.getAllCalendarEvents(),this._myCalendarEvents){const e=this._myCalendarEvents.map(Xs);this._calendar.removeAllEventSources(),this._calendar.addEventSource(e),this._calendar.render()}this._loading=!1}getEventBeingCreated(){let e;return this._calendarEl.querySelectorAll(".fc-timegrid-event-harness").forEach((t=>{""===t.style.zIndex&&(e=t)})),e}openCreateEventMenu(e){this._createEventMenu.open=!0;const t=this.getEventBeingCreated();t&&(this._createEventMenu.anchor=t),this._createEvent.clear(),this._createEvent.initialEventProperties={startTime:e.start.valueOf(),endTime:e.end.valueOf()}}setupCalendar(){this._calendar=new Ua(this._calendarEl,{plugins:[fl,Bl,ys],initialView:this.initialView,themeSystem:"bootstrap",selectable:!0,selectMirror:!0,unselectAuto:!1,headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},select:e=>{this._createEventMenu.open?setTimeout((()=>this.openCreateEventMenu(e)),100):this.openCreateEventMenu(e)}}),this._calendar.render()}async firstUpdated(){this.setupCalendar()}updated(e){super.updated(e),e.has("membraneContext")&&this.membraneContext&&this.membraneContext.appWebsocket&&this.loadCalendarEvents()}renderCreateEventCard(){return N` <mwc-menu-surface
      id="create-event-menu"
      absolute
      corner="TOP_END"
    >
      <div style="padding: 16px;">
        <hod-create-calendar-event
          id="create-calendar-event"
          @event-created=${e=>{this._createEventMenu.open=!1,this.loadCalendarEvents()}}
        ></hod-create-calendar-event>
      </div>
    </mwc-menu-surface>`}render(){return N`
      <div
        style="position: relative; flex: 1; display: flex;"
        class=${As({})}
      >
        ${this.renderCreateEventCard()}
        ${this._loading?N`<mwc-linear-progress indeterminate></mwc-linear-progress>`:N``}

        <div id="calendar" style="flex: 1;" part="calendar"></div>
      </div>
    `}static get scopedElements(){return{"mwc-menu-surface":Ws,"mwc-linear-progress":Qs,"hod-create-calendar-event":Ac}}}B([te({type:String,attribute:"initial-view"})],Cc.prototype,"initialView",void 0),B([te({type:Boolean,attribute:!1})],Cc.prototype,"_loading",void 0),B([te({type:Array,attribute:!1})],Cc.prototype,"_myCalendarEvents",void 0),B([oe("#calendar")],Cc.prototype,"_calendarEl",void 0),B([oe("#create-event-menu")],Cc.prototype,"_createEventMenu",void 0),B([oe("#create-calendar-event")],Cc.prototype,"_createEvent",void 0);class Sc extends me{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1,this.ariaLabel=""}open(){this.closed=!1}close(){this.closed=!0}render(){const e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},t=48+4*this.density,r={width:`${t}px`,height:`${t}px`};return N`
      <div
        class="mdc-circular-progress ${As(e)}"
        style="${Ms(r)}"
        role="progressbar"
        aria-label="${this.ariaLabel}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${Gs(this.indeterminate?void 0:this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`}renderDeterminateContainer(){const e=48+4*this.density,t=e/2,r=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,o=6.2831852*r,n=(1-this.progress)*o,i=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return N`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${e} ${e}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${t}" cy="${t}" r="${r}"
                  stroke-width="${i}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${t}" cy="${t}" r="${r}"
                  stroke-dasharray="${6.2831852*r}"
                  stroke-dashoffset="${n}"
                  stroke-width="${i}"></circle>
        </svg>
      </div>`}renderIndeterminateContainer(){return N`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`}renderIndeterminateSpinnerLayer(){const e=48+4*this.density,t=e/2,r=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,o=6.2831852*r,n=.5*o,i=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return N`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${r}"
                    stroke-dasharray="${o}"
                    stroke-dashoffset="${n}"
                    stroke-width="${i}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${r}"
                    stroke-dasharray="${o}"
                    stroke-dashoffset="${n}"
                    stroke-width="${.8*i}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${r}"
                    stroke-dasharray="${o}"
                    stroke-dashoffset="${n}"
                    stroke-width="${i}"></circle>
          </svg>
        </div>`}update(e){super.update(e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}B([te({type:Boolean,reflect:!0})],Sc.prototype,"indeterminate",void 0),B([te({type:Number,reflect:!0})],Sc.prototype,"progress",void 0),B([te({type:Number,reflect:!0})],Sc.prototype,"density",void 0),B([te({type:Boolean,reflect:!0})],Sc.prototype,"closed",void 0),B([te({type:String})],Sc.prototype,"ariaLabel",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Dc=fe`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;class Tc extends Sc{}Tc.styles=Dc;class Rc extends Ec{constructor(){super(...arguments),this._calendarEvent=void 0}static get styles(){return gc}static get scopedElements(){return{"mwc-circular-progress":Tc}}firstUpdated(){this.loadEvent()}async loadEvent(){this._calendarEvent=await this.calendarEventsService.getCalendarEvent(this.calendarEventHash)}render(){return this._calendarEvent?N`
      <div class="column">
        <span> ${this._calendarEvent.content.title} </span>
        <span> Created By: ${this._calendarEvent.content.createdBy} </span>

        <span style="margin-top: 16px">
          Start Time:
          ${new Date(this._calendarEvent.content.startTime).toLocaleString()}
        </span>
        <span style="margin-top: 8px">
          End Time:
          ${new Date(this._calendarEvent.content.endTime).toLocaleString()}
        </span>
      </div>
    `:N`<mwc-circular-progress></mwc-circular-progress>`}}function Ic(e,t){return{standalone:[{name:"My Events Calendar",render(r){const o=nd("hod-my-calendar",customElements),n=nd("membrane-context-provider",customElements);customElements.define(n,class extends _c{}),r.innerHTML=`\n            <link\n              href="https://fonts.googleapis.com/icon?family=Material+Icons"\n              rel="stylesheet"\n            />\n            <${n} id="context">\n              <${o}></${o}>\n            </${n}>`;const i=r.getElementById("context");i.appWebsocket=e,i.cellId=t,customElements.define(o,class extends Cc{})}}],entryLenses:{calendar_event:{name:"Calendar Event",render:(r,o)=>{customElements.define("hod-calendar-event",Rc),z(N`<hod-calendar-event
              .cellId=${t}
              .appWebsocket=${e}
              .calendarEventHash="${o}"
            ></hod-calendar-event>`,r)}}},attachmentsLenses:[]}}B([te({type:String,attribute:!1})],Rc.prototype,"calendarEventHash",void 0),B([te({type:Object})],Rc.prototype,"_calendarEvent",void 0);export default Ic;
//# sourceMappingURL=bundle.js.map
