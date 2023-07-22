"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
}

.container {
  margin: 0;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  background: whitesmoke;
}

.to-do-container {
  background: #fff;
  padding-left: 0.2%;
  padding-right: 0.2%;
  margin: 0;
}

.header {
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(168, 154, 154, 0.883);
  padding-left: 1%;
  padding-right: 2%;
}

.form-todo {
  padding-top: 1.5%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(168, 154, 154, 0.883);
  padding-bottom: 1%;
  padding-left: 1%;
  padding-right: 2%;
}

#enter {
  border: transparent;
  background: #fff;
  outline: none;
}

#check {
  outline: none;
}

.task-item {
  list-style-type: none;
}

#inputTask {
  width: 95%;
  outline: none;
  border: transparent;
}

.divTaskContent {
  width: 100%;
}

.taskCheck,
#taskContent {
  padding-top: 1.5%;
  outline-style: none;
  border-color: transparent;
}

#taskContent {
  width: 100%;
  line-height: 20px;
  word-wrap: break-word;
  overflow: hidden;
  resize: none;
  background: transparent;
}

.list-container {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(168, 154, 154, 0.883);
  padding-bottom: 1%;
  padding-left: 1%;
  padding-right: 1%;
}

.task {
  display: grid;
  grid-template-rows: 100fr;
  grid-template-columns: 2fr 96fr 2fr;
  border-top: 0.5px solid rgba(168, 154, 154, 0.883);
  align-items: baseline;
  column-gap: 5px;
}

.taskfield {
  width: 100%;
}

.fields {
  display: grid;
  width: 97%;
  gap: 1%;
}

.clear {
  width: 100%;
}

.clear button {
  padding: 1%;
  width: 100%;
  border: transparent;
}

.clear button:hover {
  text-decoration: underline;
  cursor: pointer;
}

i {
  color: #919499bc;
}

.textEditing {
  background: rgba(249, 230, 123, 0.733);
}
.iconTask i { color: black; }

#trash,
#elipse,
#refresh {
  cursor: pointer;
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,mDAAmD;EACnD,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,gDAAgD;EAChD,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mDAAmD;EACnD,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mCAAmC;EACnC,kDAAkD;EAClD,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,UAAU;EACV,OAAO;AACT;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;AACxC;AACA,cAAc,YAAY,EAAE;;AAE5B;;;EAGE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\r\n\r\n* {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n.container {\r\n  margin: 0;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: whitesmoke;\r\n}\r\n\r\n.to-do-container {\r\n  background: #fff;\r\n  padding-left: 0.2%;\r\n  padding-right: 0.2%;\r\n  margin: 0;\r\n}\r\n\r\n.header {\r\n  margin-top: 15%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #fff;\r\n  border-bottom: 1px solid rgba(168, 154, 154, 0.883);\r\n  padding-left: 1%;\r\n  padding-right: 2%;\r\n}\r\n\r\n.form-todo {\r\n  padding-top: 1.5%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-top: 1px solid rgba(168, 154, 154, 0.883);\r\n  padding-bottom: 1%;\r\n  padding-left: 1%;\r\n  padding-right: 2%;\r\n}\r\n\r\n#enter {\r\n  border: transparent;\r\n  background: #fff;\r\n  outline: none;\r\n}\r\n\r\n#check {\r\n  outline: none;\r\n}\r\n\r\n.task-item {\r\n  list-style-type: none;\r\n}\r\n\r\n#inputTask {\r\n  width: 95%;\r\n  outline: none;\r\n  border: transparent;\r\n}\r\n\r\n.divTaskContent {\r\n  width: 100%;\r\n}\r\n\r\n.taskCheck,\r\n#taskContent {\r\n  padding-top: 1.5%;\r\n  outline-style: none;\r\n  border-color: transparent;\r\n}\r\n\r\n#taskContent {\r\n  width: 100%;\r\n  line-height: 20px;\r\n  word-wrap: break-word;\r\n  overflow: hidden;\r\n  resize: none;\r\n  background: transparent;\r\n}\r\n\r\n.list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-bottom: 1px solid rgba(168, 154, 154, 0.883);\r\n  padding-bottom: 1%;\r\n  padding-left: 1%;\r\n  padding-right: 1%;\r\n}\r\n\r\n.task {\r\n  display: grid;\r\n  grid-template-rows: 100fr;\r\n  grid-template-columns: 2fr 96fr 2fr;\r\n  border-top: 0.5px solid rgba(168, 154, 154, 0.883);\r\n  align-items: baseline;\r\n  column-gap: 5px;\r\n}\r\n\r\n.taskfield {\r\n  width: 100%;\r\n}\r\n\r\n.fields {\r\n  display: grid;\r\n  width: 97%;\r\n  gap: 1%;\r\n}\r\n\r\n.clear {\r\n  width: 100%;\r\n}\r\n\r\n.clear button {\r\n  padding: 1%;\r\n  width: 100%;\r\n  border: transparent;\r\n}\r\n\r\n.clear button:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\ni {\r\n  color: #919499bc;\r\n}\r\n\r\n.textEditing {\r\n  background: rgba(249, 230, 123, 0.733);\r\n}\r\n.iconTask i { color: black; }\r\n\r\n#trash,\r\n#elipse,\r\n#refresh {\r\n  cursor: pointer;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/crud.js */ "./src/module/crud.js");
/* harmony import */ var _module_taskTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/taskTemplate.js */ "./src/module/taskTemplate.js");




(0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.createTaskListener)();
(0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.readTaskListener)();
(0,_module_crud_js__WEBPACK_IMPORTED_MODULE_1__.updateListener)();
(0,_module_taskTemplate_js__WEBPACK_IMPORTED_MODULE_2__.setSubmitIcon)();
(0,_module_taskTemplate_js__WEBPACK_IMPORTED_MODULE_2__.refreshPage)();

/***/ }),

/***/ "./src/module/crud.js":
/*!****************************!*\
  !*** ./src/module/crud.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskListener: () => (/* binding */ createTaskListener),
/* harmony export */   readTaskListener: () => (/* binding */ readTaskListener),
/* harmony export */   updateListener: () => (/* binding */ updateListener)
/* harmony export */ });
/* harmony import */ var _globalvar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalvar.js */ "./src/module/globalvar.js");
/* harmony import */ var _taskTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskTemplate.js */ "./src/module/taskTemplate.js");
/* harmony import */ var _tasksToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksToDo.js */ "./src/module/tasksToDo.js");




const taskController = new _tasksToDo_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

const removeAllChildren = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

const readTask = (tasks) => {
  removeAllChildren(_globalvar_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer);
  tasks.forEach((element) => {
    _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.appendChild((0,_taskTemplate_js__WEBPACK_IMPORTED_MODULE_1__.createTaskTemplate)(element));
  });
};

const deleteTask = (index, value = null, taskIndex) => {
  const updateTaskIndex = (index) => {
    taskController.taskArray.filter((task) => {
      if (task.index > index) {
        task.index -= 1;
      }
      return true;
    });
  };

  if ((value === null) && (index !== null)) {
    taskController.taskArray.splice(index, 1);
    updateTaskIndex(taskIndex);
    localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
  } else {
    taskController.taskArray.filter((el) => {
      if (el.description === value) {
        const taskToDeleteIndex = el.index;
        taskController.taskArray.splice(taskController.taskArray.indexOf(el), 1);
        updateTaskIndex(taskToDeleteIndex);
        localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
      }
      return true;
    });
  }
  readTask(taskController.taskArray);
};

const updateListener = () => {
  const updateTask = (index, newtaskContent, taskIndex) => {
    if (newtaskContent.length === 0) {
      deleteTask(index, null, taskIndex);
    } else {
      const newTask = taskController.taskArray[index];
      newTask.description = newtaskContent;
      taskController.taskArray[index] = newTask;
      localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
    }
  };

  document.querySelectorAll('#taskContent').forEach((taskDescription, index) => {
    const taskValue = taskDescription.textContent;
    const taskIndex = taskController.taskArray[index].index;

    taskDescription.parentElement.addEventListener('click', () => {
      taskDescription.addEventListener('click', () => {
        taskDescription.readOnly = false;
        taskDescription.parentElement.classList.add('textEditing');
        taskDescription.nextSibling.classList.add('hide');
        taskDescription.nextSibling.nextSibling.classList.remove('hide');
      });
    });

    taskDescription.parentElement.addEventListener('dblclick', () => {
      taskDescription.nextSibling.classList.remove('hide');
      taskDescription.nextSibling.nextSibling.classList.add('hide');
      taskDescription.readOnly = true;
      taskDescription.parentElement.classList.remove('textEditing');
      if (taskValue !== taskDescription.value) {
        updateTask(index, taskDescription.value, taskIndex);
        readTask(taskController.taskArray);
        updateListener();
      }
    });

    taskDescription.nextSibling.nextSibling.addEventListener('click', () => {
      deleteTask(null, taskDescription.textContent);
      taskDescription.parentNode.parentNode.remove();
      updateListener();
    });
  });
};

const readTaskListener = () => {
  window.addEventListener('DOMContentLoaded', readTask(taskController.taskArray));
};

const createTask = (task) => {
  taskController.taskArray.push(task);
  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
};

const createTaskListener = () => {
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.formTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = {
      description: _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.fieldTask.value,
      completed: false,
      index: taskController.taskArray.length === 0 ? 1 : taskController.taskArray.length + 1,
    };

    if (task.description.length > 0) {
      createTask(task);
    }
    _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.formTodo.reset();
    readTask(taskController.taskArray);
    updateListener();
  });
};




/***/ }),

/***/ "./src/module/globalvar.js":
/*!*********************************!*\
  !*** ./src/module/globalvar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   btnClear: () => (/* binding */ btnClear),
/* harmony export */   btnSubmit: () => (/* binding */ btnSubmit),
/* harmony export */   fieldTask: () => (/* binding */ fieldTask),
/* harmony export */   formTodo: () => (/* binding */ formTodo),
/* harmony export */   refresh: () => (/* binding */ refresh),
/* harmony export */   tasksContainer: () => (/* binding */ tasksContainer),
/* harmony export */   textAreaContent: () => (/* binding */ textAreaContent)
/* harmony export */ });
const btnSubmit = document.querySelector('#enter');
const btnClear = document.querySelector('#clear');
const fieldTask = document.querySelector('#inputTask');
const formTodo = document.querySelector('.form-todo');
const tasksContainer = document.querySelector('.list-container');
const textAreaContent = document.querySelector('#taskContent');
const refresh = document.querySelector('#refresh');



/***/ }),

/***/ "./src/module/taskTemplate.js":
/*!************************************!*\
  !*** ./src/module/taskTemplate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskTemplate: () => (/* binding */ createTaskTemplate),
/* harmony export */   refreshPage: () => (/* binding */ refreshPage),
/* harmony export */   setSubmitIcon: () => (/* binding */ setSubmitIcon)
/* harmony export */ });
/* harmony import */ var _globalvar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalvar.js */ "./src/module/globalvar.js");
/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enter.png */ "./src/enter.png");



const createTaskTemplate = (task) => {
  const divTask = document.createElement('div');
  divTask.classList.add('task');

  const textArea = document.createElement('textarea');
  textArea.id = 'taskContent';
  textArea.readOnly = true;
  textArea.maxLength = 250;
  textArea.spellcheck = false;
  textArea.autocomplete = false;
  textArea.textContent = task.description;

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.name = 'check';
  const elipseIcon = '<i class=\'fa-solid fa-ellipsis-vertical\' id=\'elipse\'></i>';
  const trashIcon = '<i class=\'fa-solid fa-trash\' id=\'trash\'></i>';

  const span = document.createElement('span');
  span.classList.add('iconTask');
  span.classList.add('elipse');
  span.innerHTML = elipseIcon;

  const trashSpan = document.createElement('span');
  trashSpan.classList.add('iconTask');
  trashSpan.classList.add('trash');
  trashSpan.classList.add('hide');

  trashSpan.innerHTML = trashIcon;

  divTask.append(check, textArea, span, trashSpan);

  const li = document.createElement('li');
  li.classList.add('task-item');
  li.append(divTask);
  return li;
};

const refreshPage = () => {
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.refresh.addEventListener('click', () => {
    window.location.reload();
  });
};

const setSubmitIcon = () => {
  const img = new Image();
  img.src = _enter_png__WEBPACK_IMPORTED_MODULE_1__;
  _globalvar_js__WEBPACK_IMPORTED_MODULE_0__.btnSubmit.appendChild(img);
};




/***/ }),

/***/ "./src/module/tasksToDo.js":
/*!*********************************!*\
  !*** ./src/module/tasksToDo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TasksToDo)
/* harmony export */ });
class TasksToDo {
  constructor() {
    this.taskArray = (JSON.parse(localStorage.getItem('taskDB')) !== null) ? (JSON.parse(localStorage.getItem('taskDB'))) : ([]);
  }
}


/***/ }),

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa544f635765db738d2e.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnSUFBZ0k7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0scUJBQXFCLFFBQVEsVUFBVSxPQUFPLEtBQUssVUFBVSxpSEFBaUgsV0FBVywyQ0FBMkMsc0JBQXNCLEtBQUssb0JBQW9CLGdCQUFnQix3QkFBd0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsNkJBQTZCLEtBQUssMEJBQTBCLHVCQUF1Qix5QkFBeUIsMEJBQTBCLGdCQUFnQixLQUFLLGlCQUFpQixzQkFBc0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsdUJBQXVCLDBEQUEwRCx1QkFBdUIsd0JBQXdCLEtBQUssb0JBQW9CLHdCQUF3QixvQkFBb0IscUNBQXFDLHVEQUF1RCx5QkFBeUIsdUJBQXVCLHdCQUF3QixLQUFLLGdCQUFnQiwwQkFBMEIsdUJBQXVCLG9CQUFvQixLQUFLLGdCQUFnQixvQkFBb0IsS0FBSyxvQkFBb0IsNEJBQTRCLEtBQUssb0JBQW9CLGlCQUFpQixvQkFBb0IsMEJBQTBCLEtBQUsseUJBQXlCLGtCQUFrQixLQUFLLHFDQUFxQyx3QkFBd0IsMEJBQTBCLGdDQUFnQyxLQUFLLHNCQUFzQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIsbUJBQW1CLDhCQUE4QixLQUFLLHlCQUF5QixvQkFBb0IsNkJBQTZCLDBEQUEwRCx5QkFBeUIsdUJBQXVCLHdCQUF3QixLQUFLLGVBQWUsb0JBQW9CLGdDQUFnQywwQ0FBMEMseURBQXlELDRCQUE0QixzQkFBc0IsS0FBSyxvQkFBb0Isa0JBQWtCLEtBQUssaUJBQWlCLG9CQUFvQixpQkFBaUIsY0FBYyxLQUFLLGdCQUFnQixrQkFBa0IsS0FBSyx1QkFBdUIsa0JBQWtCLGtCQUFrQiwwQkFBMEIsS0FBSyw2QkFBNkIsaUNBQWlDLHNCQUFzQixLQUFLLFdBQVcsdUJBQXVCLEtBQUssc0JBQXNCLDZDQUE2QyxLQUFLLGtCQUFrQixlQUFlLHlDQUF5QyxzQkFBc0IsS0FBSyxlQUFlLG9CQUFvQixLQUFLLHVCQUF1QjtBQUM5dUg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN2SjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUNtRTtBQUNsQjs7QUFFdEUsbUVBQWtCO0FBQ2xCLGlFQUFnQjtBQUNoQiwrREFBYztBQUNkLHNFQUFhO0FBQ2Isb0VBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZ0M7QUFDWTtBQUNoQjs7QUFFdkMsMkJBQTJCLHFEQUFTOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHlEQUF1QjtBQUMzQztBQUNBLElBQUkseURBQXVCLGFBQWEsb0VBQWtCO0FBQzFELEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxtREFBaUI7QUFDbkI7QUFDQTtBQUNBLG1CQUFtQixvREFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SGhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNQOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxrREFBZ0I7QUFDbEI7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFlBQVksdUNBQVE7QUFDcEIsRUFBRSxvREFBa0I7QUFDcEI7O0FBRTBEOzs7Ozs7Ozs7Ozs7Ozs7QUNyRDNDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGUvY3J1ZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlL2dsb2JhbHZhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlL3Rhc2tUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlL3Rhc2tzVG9Eby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi50by1kby1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjIlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuMiU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE2OCwgMTU0LCAxNTQsIDAuODgzKTtcclxuICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4uZm9ybS10b2RvIHtcclxuICBwYWRkaW5nLXRvcDogMS41JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjgsIDE1NCwgMTU0LCAwLjg4Myk7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMiU7XHJcbn1cclxuXHJcbiNlbnRlciB7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNjaGVjayB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRhc2staXRlbSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4jaW5wdXRUYXNrIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRpdlRhc2tDb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhc2tDaGVjayxcclxuI3Rhc2tDb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMS41JTtcclxuICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiN0YXNrQ29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNjgsIDE1NCwgMTU0LCAwLjg4Myk7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMSU7XHJcbn1cclxuXHJcbi50YXNrIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgOTZmciAyZnI7XHJcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgcmdiYSgxNjgsIDE1NCwgMTU0LCAwLjg4Myk7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGNvbHVtbi1nYXA6IDVweDtcclxufVxyXG5cclxuLnRhc2tmaWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWVsZHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDk3JTtcclxuICBnYXA6IDElO1xyXG59XHJcblxyXG4uY2xlYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2xlYXIgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2xlYXIgYnV0dG9uOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmkge1xyXG4gIGNvbG9yOiAjOTE5NDk5YmM7XHJcbn1cclxuXHJcbi50ZXh0RWRpdGluZyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDIzMCwgMTIzLCAwLjczMyk7XHJcbn1cclxuLmljb25UYXNrIGkgeyBjb2xvcjogYmxhY2s7IH1cclxuXHJcbiN0cmFzaCxcclxuI2VsaXBzZSxcclxuI3JlZnJlc2gge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbURBQW1EO0VBQ25ELGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnREFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1EQUFtRDtFQUNuRCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLGtEQUFrRDtFQUNsRCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBLGNBQWMsWUFBWSxFQUFFOztBQUU1Qjs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi50by1kby1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC4yJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMiU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTY4LCAxNTQsIDE1NCwgMC44ODMpO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10b2RvIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE2OCwgMTU0LCAxNTQsIDAuODgzKTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuI2VudGVyIHtcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NoZWNrIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0ge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXRUYXNrIHtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdlRhc2tDb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NoZWNrLFxcclxcbiN0YXNrQ29udGVudCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMS41JTtcXHJcXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza0NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTY4LCAxNTQsIDE1NCwgMC44ODMpO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDElO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDElO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDk2ZnIgMmZyO1xcclxcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgcmdiYSgxNjgsIDE1NCwgMTU0LCAwLjg4Myk7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrZmllbGQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5maWVsZHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiA5NyU7XFxyXFxuICBnYXA6IDElO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhciBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jbGVhciBidXR0b246aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgY29sb3I6ICM5MTk0OTliYztcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRFZGl0aW5nIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyMzAsIDEyMywgMC43MzMpO1xcclxcbn1cXHJcXG4uaWNvblRhc2sgaSB7IGNvbG9yOiBibGFjazsgfVxcclxcblxcclxcbiN0cmFzaCxcXHJcXG4jZWxpcHNlLFxcclxcbiNyZWZyZXNoIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlVGFza0xpc3RlbmVyLCByZWFkVGFza0xpc3RlbmVyLCB1cGRhdGVMaXN0ZW5lciB9IGZyb20gJy4vbW9kdWxlL2NydWQuanMnO1xuaW1wb3J0IHsgcmVmcmVzaFBhZ2UsIHNldFN1Ym1pdEljb24gfSBmcm9tICcuL21vZHVsZS90YXNrVGVtcGxhdGUuanMnO1xuXG5jcmVhdGVUYXNrTGlzdGVuZXIoKTtcbnJlYWRUYXNrTGlzdGVuZXIoKTtcbnVwZGF0ZUxpc3RlbmVyKCk7XG5zZXRTdWJtaXRJY29uKCk7XG5yZWZyZXNoUGFnZSgpOyIsImltcG9ydCAqIGFzIHZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsdmFyLmpzJztcbmltcG9ydCB7IGNyZWF0ZVRhc2tUZW1wbGF0ZSB9IGZyb20gJy4vdGFza1RlbXBsYXRlLmpzJztcbmltcG9ydCBUYXNrc1RvRG8gZnJvbSAnLi90YXNrc1RvRG8uanMnO1xuXG5jb25zdCB0YXNrQ29udHJvbGxlciA9IG5ldyBUYXNrc1RvRG8oKTtcblxuY29uc3QgcmVtb3ZlQWxsQ2hpbGRyZW4gPSAocGFyZW50RWxlbWVudCkgPT4ge1xuICB3aGlsZSAocGFyZW50RWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCByZWFkVGFzayA9ICh0YXNrcykgPT4ge1xuICByZW1vdmVBbGxDaGlsZHJlbih2YXJpYWJsZS50YXNrc0NvbnRhaW5lcik7XG4gIHRhc2tzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICB2YXJpYWJsZS50YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrVGVtcGxhdGUoZWxlbWVudCkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgsIHZhbHVlID0gbnVsbCwgdGFza0luZGV4KSA9PiB7XG4gIGNvbnN0IHVwZGF0ZVRhc2tJbmRleCA9IChpbmRleCkgPT4ge1xuICAgIHRhc2tDb250cm9sbGVyLnRhc2tBcnJheS5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgdGFzay5pbmRleCAtPSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKCh2YWx1ZSA9PT0gbnVsbCkgJiYgKGluZGV4ICE9PSBudWxsKSkge1xuICAgIHRhc2tDb250cm9sbGVyLnRhc2tBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHVwZGF0ZVRhc2tJbmRleCh0YXNrSW5kZXgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrREInLCBKU09OLnN0cmluZ2lmeSh0YXNrQ29udHJvbGxlci50YXNrQXJyYXkpKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrQ29udHJvbGxlci50YXNrQXJyYXkuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmRlc2NyaXB0aW9uID09PSB2YWx1ZSkge1xuICAgICAgICBjb25zdCB0YXNrVG9EZWxldGVJbmRleCA9IGVsLmluZGV4O1xuICAgICAgICB0YXNrQ29udHJvbGxlci50YXNrQXJyYXkuc3BsaWNlKHRhc2tDb250cm9sbGVyLnRhc2tBcnJheS5pbmRleE9mKGVsKSwgMSk7XG4gICAgICAgIHVwZGF0ZVRhc2tJbmRleCh0YXNrVG9EZWxldGVJbmRleCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrREInLCBKU09OLnN0cmluZ2lmeSh0YXNrQ29udHJvbGxlci50YXNrQXJyYXkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHJlYWRUYXNrKHRhc2tDb250cm9sbGVyLnRhc2tBcnJheSk7XG59O1xuXG5jb25zdCB1cGRhdGVMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgdXBkYXRlVGFzayA9IChpbmRleCwgbmV3dGFza0NvbnRlbnQsIHRhc2tJbmRleCkgPT4ge1xuICAgIGlmIChuZXd0YXNrQ29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZVRhc2soaW5kZXgsIG51bGwsIHRhc2tJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrQ29udHJvbGxlci50YXNrQXJyYXlbaW5kZXhdO1xuICAgICAgbmV3VGFzay5kZXNjcmlwdGlvbiA9IG5ld3Rhc2tDb250ZW50O1xuICAgICAgdGFza0NvbnRyb2xsZXIudGFza0FycmF5W2luZGV4XSA9IG5ld1Rhc2s7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0RCJywgSlNPTi5zdHJpbmdpZnkodGFza0NvbnRyb2xsZXIudGFza0FycmF5KSk7XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0YXNrQ29udGVudCcpLmZvckVhY2goKHRhc2tEZXNjcmlwdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB0YXNrVmFsdWUgPSB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdGFza0luZGV4ID0gdGFza0NvbnRyb2xsZXIudGFza0FycmF5W2luZGV4XS5pbmRleDtcblxuICAgIHRhc2tEZXNjcmlwdGlvbi5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24ucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGV4dEVkaXRpbmcnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLm5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGFza0Rlc2NyaXB0aW9uLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XG4gICAgICB0YXNrRGVzY3JpcHRpb24ubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgdGFza0Rlc2NyaXB0aW9uLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5yZWFkT25seSA9IHRydWU7XG4gICAgICB0YXNrRGVzY3JpcHRpb24ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0RWRpdGluZycpO1xuICAgICAgaWYgKHRhc2tWYWx1ZSAhPT0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlKSB7XG4gICAgICAgIHVwZGF0ZVRhc2soaW5kZXgsIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSwgdGFza0luZGV4KTtcbiAgICAgICAgcmVhZFRhc2sodGFza0NvbnRyb2xsZXIudGFza0FycmF5KTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRhc2tEZXNjcmlwdGlvbi5uZXh0U2libGluZy5uZXh0U2libGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlbGV0ZVRhc2sobnVsbCwgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50KTtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICB1cGRhdGVMaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlYWRUYXNrTGlzdGVuZXIgPSAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVhZFRhc2sodGFza0NvbnRyb2xsZXIudGFza0FycmF5KSk7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrID0gKHRhc2spID0+IHtcbiAgdGFza0NvbnRyb2xsZXIudGFza0FycmF5LnB1c2godGFzayk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrREInLCBKU09OLnN0cmluZ2lmeSh0YXNrQ29udHJvbGxlci50YXNrQXJyYXkpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tMaXN0ZW5lciA9ICgpID0+IHtcbiAgdmFyaWFibGUuZm9ybVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgIGRlc2NyaXB0aW9uOiB2YXJpYWJsZS5maWVsZFRhc2sudmFsdWUsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgaW5kZXg6IHRhc2tDb250cm9sbGVyLnRhc2tBcnJheS5sZW5ndGggPT09IDAgPyAxIDogdGFza0NvbnRyb2xsZXIudGFza0FycmF5Lmxlbmd0aCArIDEsXG4gICAgfTtcblxuICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIGNyZWF0ZVRhc2sodGFzayk7XG4gICAgfVxuICAgIHZhcmlhYmxlLmZvcm1Ub2RvLnJlc2V0KCk7XG4gICAgcmVhZFRhc2sodGFza0NvbnRyb2xsZXIudGFza0FycmF5KTtcbiAgICB1cGRhdGVMaXN0ZW5lcigpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2tMaXN0ZW5lciwgcmVhZFRhc2tMaXN0ZW5lciwgdXBkYXRlTGlzdGVuZXIgfTtcbiIsImNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbnRlcicpO1xuY29uc3QgYnRuQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXInKTtcbmNvbnN0IGZpZWxkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2snKTtcbmNvbnN0IGZvcm1Ub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdG9kbycpO1xuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcbmNvbnN0IHRleHRBcmVhQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrQ29udGVudCcpO1xuY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoJyk7XG5cbmV4cG9ydCB7XG4gIGJ0bkNsZWFyLFxuICBidG5TdWJtaXQsXG4gIGZpZWxkVGFzayxcbiAgZm9ybVRvZG8sXG4gIHRhc2tzQ29udGFpbmVyLFxuICB0ZXh0QXJlYUNvbnRlbnQsXG4gIHJlZnJlc2gsXG59OyIsImltcG9ydCAqIGFzIHZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsdmFyLmpzJztcbmltcG9ydCBlbnRlckltZyBmcm9tICcuLi9lbnRlci5wbmcnO1xuXG5jb25zdCBjcmVhdGVUYXNrVGVtcGxhdGUgPSAodGFzaykgPT4ge1xuICBjb25zdCBkaXZUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdlRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEuaWQgPSAndGFza0NvbnRlbnQnO1xuICB0ZXh0QXJlYS5yZWFkT25seSA9IHRydWU7XG4gIHRleHRBcmVhLm1heExlbmd0aCA9IDI1MDtcbiAgdGV4dEFyZWEuc3BlbGxjaGVjayA9IGZhbHNlO1xuICB0ZXh0QXJlYS5hdXRvY29tcGxldGUgPSBmYWxzZTtcbiAgdGV4dEFyZWEudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gIGNoZWNrLm5hbWUgPSAnY2hlY2snO1xuICBjb25zdCBlbGlwc2VJY29uID0gJzxpIGNsYXNzPVxcJ2ZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXFwnIGlkPVxcJ2VsaXBzZVxcJz48L2k+JztcbiAgY29uc3QgdHJhc2hJY29uID0gJzxpIGNsYXNzPVxcJ2ZhLXNvbGlkIGZhLXRyYXNoXFwnIGlkPVxcJ3RyYXNoXFwnPjwvaT4nO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnaWNvblRhc2snKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdlbGlwc2UnKTtcbiAgc3Bhbi5pbm5lckhUTUwgPSBlbGlwc2VJY29uO1xuXG4gIGNvbnN0IHRyYXNoU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdHJhc2hTcGFuLmNsYXNzTGlzdC5hZGQoJ2ljb25UYXNrJyk7XG4gIHRyYXNoU3Bhbi5jbGFzc0xpc3QuYWRkKCd0cmFzaCcpO1xuICB0cmFzaFNwYW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gIHRyYXNoU3Bhbi5pbm5lckhUTUwgPSB0cmFzaEljb247XG5cbiAgZGl2VGFzay5hcHBlbmQoY2hlY2ssIHRleHRBcmVhLCBzcGFuLCB0cmFzaFNwYW4pO1xuXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gIGxpLmFwcGVuZChkaXZUYXNrKTtcbiAgcmV0dXJuIGxpO1xufTtcblxuY29uc3QgcmVmcmVzaFBhZ2UgPSAoKSA9PiB7XG4gIHZhcmlhYmxlLnJlZnJlc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldFN1Ym1pdEljb24gPSAoKSA9PiB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gZW50ZXJJbWc7XG4gIHZhcmlhYmxlLmJ0blN1Ym1pdC5hcHBlbmRDaGlsZChpbWcpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVGFza1RlbXBsYXRlLCByZWZyZXNoUGFnZSwgc2V0U3VibWl0SWNvbiB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3NUb0RvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrQXJyYXkgPSAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0RCJykpICE9PSBudWxsKSA/IChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrREInKSkpIDogKFtdKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9