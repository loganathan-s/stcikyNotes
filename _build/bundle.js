!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(1),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var l=r.get;if(void 0!==l)return l.call(o)};!function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}i(e,t),a(e,[{key:"init",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this)}}])}(l.a);window.addEventListener("load",function(){(new l.a).init()})},function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=function(){function t(){var e,n;r(this,t),this.noteContainer=document.querySelector("#newNote"),this.allnotes=document.querySelector("#notes-section-title"),this.noteTemplate='  <div>\n\t\t\t        <div class="mdl-card__title mdl-color--blue-grey-200">\n\t\t\t          <h2 class="mdl-card__title-text">Add new note</h2>\n\t\t\t        </div>\n\t\t\t        <div class="mdl-card__supporting-text mdl-color-text--grey-600">\n\t\t\t            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\n\t\t\t              <textarea class="mdl-textfield__input" rows= "3" id="userNote"></textarea>\n\t\t\t              <label class="mdl-textfield__label" for="message">Message text...</label>\n\t\t\t            </div>\n\t\t\t            <button id="saveNote" disabled class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--color">\n\t\t\t              Add\n\t\t\t            </button>\n\t\t\t        </div>\n\t\t\t      </div>\n\t ',this.newNoteClassList=["mdl-card","mdl-shadow--2dp","mdl-cell"],(e=this.noteContainer.classList).add.apply(e,o(this.newNoteClassList)),(n=this.allnotes.classList).add.apply(n,o(this.newNoteClassList)),this.noteContainer.innerHTML=this.noteTemplate,this.userNote=document.querySelector("#userNote"),this.saveButton=document.querySelector("#saveNote"),this.date=(new Date).toString().split(" ").splice(1,3).join(" ")}return i(t,[{key:"init",value:function(){this.userNote.addEventListener("keyup",this.toggleSaveButton.bind(this),!0),this.saveButton.addEventListener("click",this.createNote.bind(this),!0)}},{key:"toggleSaveButton",value:function(){this.userNote.value?this.saveButton.removeAttribute("disabled"):this.saveButton.setAttribute("disabled","true")}},{key:"createNote",value:function(){if(localStorage){var t=(new Date).getTime(),e=this.userNote.value;localStorage.setItem(t,e),this.resetnoteTemplate(),this.listNote(t,e)}else alert("localStorage Not present")}},{key:"listNote",value:function(t,e){var n='<div class="mdl-cell--4-col-desktop mdl-card__supporting-text mdl-cell--12-col mdl-shadow--2dp mdl-cell--4-col-tablet mdl-card mdl-cell sticky-note">\n\t\t    <div class="message">'+e+'</div>\n\t\t    <div class="date">Created on '+this.date+"</div>\n\t\t    <button id=note-"+t+' class="delete mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Delete\n\t\t\t    <span class="mdl-button__ripple-container">\n\t\t\t\t    <span class="mdl-ripple">\n\t\t\t\t    </span>\n\t\t\t    </span>\n\t\t    </button>\n\t\t    </div>';this.allnotes.innerHTML+=n,document.querySelector("#note-"+t).addEventListener("click",this.deleteNote)}},{key:"deleteNote",value:function(){localStorage.removeItem(this.id),this.parentNode.remove()}},{key:"resetnoteTemplate",value:function(){this.userNote.value=""}}]),t}();e.a=l}]);
//# sourceMappingURL=bundle.js.map