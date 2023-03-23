/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Js/modules/create-newmessage.js":
/*!*********************************************!*\
  !*** ./src/Js/modules/create-newmessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _servises_servises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servises/servises */ "./src/Js/servises/servises.js");

function createNewMessage() {
  function addNewItem(data) {
    data.forEach(_ref => {
      let {
        message,
        author,
        dateTime
      } = _ref;
      const parent = document.querySelector('.messages');
      const newItem = document.createElement('div');
      newItem.innerHTML = `
            <div class="messages__item">
            <div class="text">${message}</div>
            <div class="message__td">
                <div class="author">${author}</div>
                <div class="message__date">${dateTime}</div>
            </div>`;
      parent.append(newItem);
    });
  }
  (0,_servises_servises__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/message').then(data => addNewItem(data));
}
/* harmony default export */ __webpack_exports__["default"] = (createNewMessage);

/***/ }),

/***/ "./src/Js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/Js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _servises_servises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servises/servises */ "./src/Js/servises/servises.js");
/* harmony import */ var _create_newmessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-newmessage */ "./src/Js/modules/create-newmessage.js");


function forms() {
  //!FORMS REQUEST
  const forms = document.querySelectorAll('form');
  forms.forEach(item => {
    bindPostData(item);
  });
  function bindPostData(form) {
    form.addEventListener('submit', e => {
      const formData = new FormData(form);
      let today = new Date();
      let now = today.toLocaleString();
      formData.append('dateTime', now);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      (0,_servises_servises__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/message', json).then(data => {
        console.log(data);
      }).catch(() => {}).finally(() => {
        form.reset();
      });
    });
    (0,_create_newmessage__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/Js/servises/servises.js":
/*!*************************************!*\
  !*** ./src/Js/servises/servises.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": function() { return /* binding */ getData; },
/* harmony export */   "postData": function() { return /* binding */ postData; }
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'Post',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};
const getData = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`не вдалося виконати запит`);
  }
  return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/Js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ "./src/Js/modules/forms.js");

document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map