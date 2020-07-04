/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(120),
    authenticate = _require.authenticate,
    generateAccessToken = _require.generateAccessToken;

var _require2 = __webpack_require__(123),
    multer = _require2.multer;

var _require3 = __webpack_require__(125),
    uploadImage = _require3.uploadImage;

var _require4 = __webpack_require__(126),
    sendOne = _require4.sendOne,
    sendList = _require4.sendList,
    sendCreated = _require4.sendCreated,
    sendUpdated = _require4.sendUpdated,
    sendDeleted = _require4.sendDeleted,
    sendAccepted = _require4.sendAccepted,
    withoutErrors = _require4.withoutErrors;

module.exports = {
    authenticate: authenticate,
    generateAccessToken: generateAccessToken,
    multer: multer,
    uploadImage: uploadImage,
    sendOne: sendOne,
    sendList: sendList,
    sendCreated: sendCreated,
    sendUpdated: sendUpdated,
    sendDeleted: sendDeleted,
    sendAccepted: sendAccepted,
    withoutErrors: withoutErrors
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.media = exports.sizes = exports.setShadow = exports.setLetterSpacing = exports.setRem = exports.setFont = exports.setGradient = exports.setColor = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    @media (min-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', 'em) {\n      ', '\n    }\n  ']);

var _styledComponents = __webpack_require__(2);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var setColor = exports.setColor = {
	primaryColorMain: '#03A9F4',
	primaryColorLight: '#67DAFF',
	primaryColorDark: '#007AC1',

	secondaryColorMain: '#7ED321',
	secondaryColorLight: '#B3FF5B',
	secondaryColorDark: '#48A100',

	tertiaryColorMain: '#7755FE',
	tertiaryColorLight: '#AF84FF',
	tertiaryColorDark: '#3928CA',

	accentColour1: '#CC0000',
	accentColour2: '#0000CC',
	accentColour3: '#00CC00',

	black: '#111',
	greyMain: '#4A5B6D',
	greyLight: '#B3C0CE',
	greyFaint: '#E7EDF3',
	greyUltraFaint: '#EEF2F4',
	white: '#fff',

	error: '#CC0000',
	errorDark: '#CC2222',

	warning: '#FF9800'
};

var setGradient = exports.setGradient = {
	dark: 'background: linear-gradient(180deg, rgba(19, 33, 68, 0.85) 0%, #132144 100%), #FFFFFF;'
};

var setFont = exports.setFont = {
	main: "font-family: 'Open Sans', sans-serif;"
};

var setRem = exports.setRem = function setRem() {
	var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;

	return number / 16 + 'rem';
};

var setLetterSpacing = exports.setLetterSpacing = function setLetterSpacing() {
	var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

	return 'letter-spacing:' + number + 'px';
};

var setShadow = exports.setShadow = {
	main: 'box-shadow: 0px 12px 22px 0px rgba(82, 87, 104, 0.10), 0px -12px 22px 0px rgba(82, 87, 104, 0.05)',
	dark: 'box-shadow: -8px 12px 18px 0px rgba(25, 42, 70, 0.12)',
	faint: 'box-shadow: -1px 1px 4px 0px rgba(55, 70, 95, 0.12)'
};

var sizes = exports.sizes = {
	large: 1200,
	desktop: 992,
	tablet: 768,
	phone: 576,
	menuChange: 800,
	hideSidebar: 960,
	minimumManageSize: 900
};

// Iterate through the sizes and create a media template
var media = exports.media = Object.keys(sizes).reduce(function (acc, label) {
	acc[label] = function () {
		return (0, _styledComponents.css)(_templateObject, sizes[label] / 16, _styledComponents.css.apply(undefined, arguments));
	};
	return acc;
}, {});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	GLOBAL_LIMIT_PER_PAGE: 12
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(89),
    Storage = _require.Storage;

var storage = new Storage();

var bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

module.exports = {
    config: {
        passport: {
            tokenTime: 2592000, // 60*60*24*30 -> 30 days
            secretAuthToken: process.env.SECRET_TOKEN,
            resetPasswordExpires: 3600000 * 24 // 24 hour
        },
        bucket: bucket
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Hero = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\n  font-family: \'Roboto Condensed\', \'Montserrat\', sans-serif;\n  \n  color: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  \n  ', ';\n'], ['\n\n  font-family: \'Roboto Condensed\', \'Montserrat\', sans-serif;\n  \n  color: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  \n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\tfont-family: \'Montserrat\', sans-serif;\n\t'], ['\n\t\tfont-family: \'Montserrat\', sans-serif;\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n      color: inherit;\n    '], ['\n      color: inherit;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n          font-weight: 300;\n        '], ['\n          font-weight: 300;\n        ']),
    _templateObject5 = _taggedTemplateLiteral(['\n          font-weight: 600;\n        '], ['\n          font-weight: 600;\n        ']),
    _templateObject6 = _taggedTemplateLiteral(['\n      text-align: center;\n    '], ['\n      text-align: center;\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n      text-align: left;\n    '], ['\n      text-align: left;\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n      margin-left: 15px;\n    '], ['\n      margin-left: 15px;\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n      border-bottom: 3px solid;\n      width: fit-content;\n\t'], ['\n      border-bottom: 3px solid;\n      width: fit-content;\n\t']),
    _templateObject10 = _taggedTemplateLiteral(['\n  ', ';\n\n  font-size: 64px;\n  letter-spacing: -0.5px;\n  line-height: 72px;\n\n  @media only screen and (max-width: ', 'px) {\n    font-size: 48px;\n    letter-spacing: -0.38px;\n    line-height: 56px;\n  }\n'], ['\n  ', ';\n\n  font-size: 64px;\n  letter-spacing: -0.5px;\n  line-height: 72px;\n\n  @media only screen and (max-width: ', 'px) {\n    font-size: 48px;\n    letter-spacing: -0.38px;\n    line-height: 56px;\n  }\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  ', ';\n\n  font-size: 48px;\n  letter-spacing: -0.32px;\n  line-height: 56px;\n\n  @media only screen and (max-width: ', 'px) {\n    font-size: 36px;\n    letter-spacing: -0.24px;\n    line-height: 40px;\n  }\n'], ['\n  ', ';\n\n  font-size: 48px;\n  letter-spacing: -0.32px;\n  line-height: 56px;\n\n  @media only screen and (max-width: ', 'px) {\n    font-size: 36px;\n    letter-spacing: -0.24px;\n    line-height: 40px;\n  }\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  ', ';\n  font-size: 36px;\n  letter-spacing: -0.15px;\n  line-height: 40px;\n  @media only screen and (max-width: ', 'px) {\n    font-size: 32px;\n    letter-spacing: -0.12px;\n    line-height: 36px;\n  }\n'], ['\n  ', ';\n  font-size: 36px;\n  letter-spacing: -0.15px;\n  line-height: 40px;\n  @media only screen and (max-width: ', 'px) {\n    font-size: 32px;\n    letter-spacing: -0.12px;\n    line-height: 36px;\n  }\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  ', ';\n  font-size: 28px;\n  letter-spacing: -0.24px;\n  line-height: 36px;\n  @media only screen and (max-width: ', 'px) {\n    font-size: 24px;\n    letter-spacing: -0.21px;\n    line-height: 32px;\n  }\n'], ['\n  ', ';\n  font-size: 28px;\n  letter-spacing: -0.24px;\n  line-height: 36px;\n  @media only screen and (max-width: ', 'px) {\n    font-size: 24px;\n    letter-spacing: -0.21px;\n    line-height: 32px;\n  }\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  ', ';\n  font-size: 20px;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  padding-top: 5px;\n  display: block;\n'], ['\n  ', ';\n  font-size: 20px;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  padding-top: 5px;\n  display: block;\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  ', ';\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  display: block;\n  padding-top: 2px\n'], ['\n  ', ';\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  display: block;\n  padding-top: 2px\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n  ', ';\n  font-size: 12px;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n  line-height: 16px;\n  margin-bottom: 0;\n'], ['\n  ', ';\n  font-size: 12px;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n  line-height: 16px;\n  margin-bottom: 0;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderStyles = (0, _styledComponents.css)(_templateObject, function (props) {
  if (props.color) {
    switch (props.color) {
      case 'highlight':
        return props.theme.highlight;
      case 'secondary':
        return props.theme.secondary;
      default:
        return props.color;
    }
  } else {
    return props.theme.palette.text.primary;
  }
}, function (_ref) {
  var montserrat = _ref.montserrat;
  return montserrat && (0, _styledComponents.css)(_templateObject2);
}, function (_ref2) {
  var inherit = _ref2.inherit;
  return inherit && (0, _styledComponents.css)(_templateObject3);
}, function (_ref3) {
  var thin = _ref3.thin;
  return thin ? (0, _styledComponents.css)(_templateObject4) : (0, _styledComponents.css)(_templateObject5);
}, function (_ref4) {
  var center = _ref4.center;
  return center && (0, _styledComponents.css)(_templateObject6);
}, function (_ref5) {
  var left = _ref5.left;
  return left && (0, _styledComponents.css)(_templateObject7);
}, function (_ref6) {
  var padded = _ref6.padded;
  return padded && (0, _styledComponents.css)(_templateObject8);
}, function (_ref7) {
  var underline = _ref7.underline;
  return underline && (0, _styledComponents.css)(_templateObject9);
});

var Hero = exports.Hero = _styledComponents2.default.h1(_templateObject10, HeaderStyles, _index.sizes.phone);

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject11, HeaderStyles, _index.sizes.phone);

var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject12, HeaderStyles, _index.sizes.phone);

var H3 = exports.H3 = _styledComponents2.default.h3(_templateObject13, HeaderStyles, _index.sizes.phone);

var H4 = exports.H4 = _styledComponents2.default.h4(_templateObject14, HeaderStyles);

var H5 = exports.H5 = _styledComponents2.default.h5(_templateObject15, HeaderStyles);

var H6 = exports.H6 = _styledComponents2.default.h6(_templateObject16, HeaderStyles);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// Book Review Types
var GET_FIRST_PAGE_BOOK_REVIEWS = exports.GET_FIRST_PAGE_BOOK_REVIEWS = 'GET_FIRST_PAGE_BOOK_REVIEWS';

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(36);

var _App2 = _interopRequireDefault(_App);

var _BookReviews = __webpack_require__(39);

var _BookReviews2 = _interopRequireDefault(_BookReviews);

var _PublicWrapper = __webpack_require__(76);

var _PublicWrapper2 = _interopRequireDefault(_PublicWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
	routes: [_extends({}, _PublicWrapper2.default, {
		routes: [_extends({}, _BookReviews2.default, {
			path: '/bookReviews'
		})]
	})]
})];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SvgIconContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n\n  & > svg {\n    display: block;\n\n    ', ';\n  }\n\n  ', ';\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n\n  & > svg {\n    display: block;\n\n    ', ';\n  }\n\n  ', ';\n\n  &:hover {\n    color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      height: ', 'px;\n      width: ', 'px;\n    '], ['\n      height: ', 'px;\n      width: ', 'px;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      cursor: pointer;\n    '], ['\n      cursor: pointer;\n    ']);

var _lodash = __webpack_require__(11);

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = __webpack_require__(44);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _svgs = __webpack_require__(45);

var ICONS = _interopRequireWildcard(_svgs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // eslint-disable-next-line import/no-extraneous-dependencies


console.log('icons: ', ICONS);
console.log('ICONs: ', ICONS.AngelList);
console.log('angellist: ', _svgs.AngelList);

var SvgIconContainer = exports.SvgIconContainer = _styledComponents2.default.span(_templateObject, function (_ref) {
	var color = _ref.color;
	return color || 'inherit';
}, function (_ref2) {
	var size = _ref2.size,
	    _ref2$height = _ref2.height,
	    height = _ref2$height === undefined ? size : _ref2$height,
	    _ref2$width = _ref2.width,
	    width = _ref2$width === undefined ? size : _ref2$width;
	return (0, _styledComponents.css)(_templateObject2, height, width);
}, function (_ref3) {
	var hover = _ref3.hover;
	return hover && (0, _styledComponents.css)(_templateObject3);
}, function (_ref4) {
	var hoverColor = _ref4.hoverColor,
	    color = _ref4.color;
	return hoverColor || color;
});

function SvgIcon(_ref5) {
	var icon = _ref5.icon,
	    props = _objectWithoutProperties(_ref5, ['icon']);

	if (!icon) {
		// return <div style={{ height: props.size || '16px', width: props.size || '16px' }} />;
		return null;
	}
	var IconElement = void 0;
	if (_lodash2.default.isString(icon)) {
		if (!(icon in ICONS)) return null;
		IconElement = ICONS[icon];
	} else {
		IconElement = icon;
	}

	return _react2.default.createElement(
		SvgIconContainer,
		props,
		_react2.default.createElement(IconElement, null)
	);
}

SvgIcon.propTypes = {
	icon: _propTypes2.default.elementType,
	size: _propTypes2.default.number,
	height: _propTypes2.default.number,
	width: _propTypes2.default.number,
	color: _propTypes2.default.string
};

SvgIcon.defaultProps = {
	size: 16
};

exports.default = SvgIcon;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M0 0h24v24H0V0z"
});

var _ref2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  fill: "#fff",
  d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
});

function SvgDownCaret(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    height: 24,
    width: 24
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgDownCaret);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TinyParagraph = exports.SmallParagraph = exports.InlineLinkParagraph = exports.LinkParagraph = exports.TextLinkParagraph = exports.BodyParagraph = exports.LeadParagraph = exports.paragraphStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: Roboto, sans-serif;\n  font-weight: normal;\n  color: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  margin-bottom: 0;\n'], ['\n  font-family: Roboto, sans-serif;\n  font-weight: normal;\n  color: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  margin-bottom: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      color: inherit;\n      font-family: inherit;\n    '], ['\n      color: inherit;\n      font-family: inherit;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      font-weight: bold;\n    '], ['\n      font-weight: bold;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      text-align: center;\n    '], ['\n      text-align: center;\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n      font-weight: lighter;\n    '], ['\n      font-weight: lighter;\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', ';\n  font-size: 16px;\n  letter-spacing: 0.32px;\n  line-height: 24px;\n'], ['\n  ', ';\n  font-size: 16px;\n  letter-spacing: 0.32px;\n  line-height: 24px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', ';\n  font-size: 14px;\n  letter-spacing: 0.32px;\n  line-height: 20px;\n'], ['\n  ', ';\n  font-size: 14px;\n  letter-spacing: 0.32px;\n  line-height: 20px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', ';\n  color: ', ' !important;\n  font-size: 14px;\n  letter-spacing: 0.32px;\n  line-height: 20px;\n  cursor: pointer;\n  margin-left: 8px;\n  margin-right: 8px;\n  &:hover {\n    text-decoration: underline !important;\n  }\n'], ['\n  ', ';\n  color: ', ' !important;\n  font-size: 14px;\n  letter-spacing: 0.32px;\n  line-height: 20px;\n  cursor: pointer;\n  margin-left: 8px;\n  margin-right: 8px;\n  &:hover {\n    text-decoration: underline !important;\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  font-family: Roboto, sans-serif;\n  font-weight: bold;\n  color: ', ' !important;\n  font-size: 14px;\n  letter-spacing: 0.32px;\n  line-height: 20px;\n  cursor: pointer;\n  margin-left: 8px;\n  margin-right: 8px;\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  font-family: Roboto, sans-serif;\n  font-weight: bold;\n  color: ', ' !important;\n  font-size: 14px;\n  letter-spacing: 0.32px;\n  line-height: 20px;\n  cursor: pointer;\n  margin-left: 8px;\n  margin-right: 8px;\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n      color: inherit !important;\n      font-family: inherit;\n    '], ['\n      color: inherit !important;\n      font-family: inherit;\n    ']),
    _templateObject11 = _taggedTemplateLiteral(['\n      &:hover {\n        text-decoration: underline !important;\n      }\n    '], ['\n      &:hover {\n        text-decoration: underline !important;\n      }\n    ']),
    _templateObject12 = _taggedTemplateLiteral(['\n  font-family: Roboto, sans-serif;\n  color: ', ' !important;\n  font-size: 14px;\n  letter-spacing: 0.32px;\n  line-height: 20px;\n  cursor: pointer;\n  margin-left: 4px;\n  margin-right: 4px;\n  ', ';\n  ', ';\n'], ['\n  font-family: Roboto, sans-serif;\n  color: ', ' !important;\n  font-size: 14px;\n  letter-spacing: 0.32px;\n  line-height: 20px;\n  cursor: pointer;\n  margin-left: 4px;\n  margin-right: 4px;\n  ', ';\n  ', ';\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n      cursor: default;\n    '], ['\n      cursor: default;\n    ']),
    _templateObject14 = _taggedTemplateLiteral(['\n  ', ';\n  font-size: 12px;\n  letter-spacing: 0.24px;\n  line-height: 18px;\n'], ['\n  ', ';\n  font-size: 12px;\n  letter-spacing: 0.24px;\n  line-height: 18px;\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  ', ';\n  font-size: 10px;\n  letter-spacing: 0.32px;\n  line-height: 16px;\n'], ['\n  ', ';\n  font-size: 10px;\n  letter-spacing: 0.32px;\n  line-height: 16px;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var paragraphStyles = exports.paragraphStyles = (0, _styledComponents.css)(_templateObject, function (props) {
  if (props.color) {
    switch (props.color) {
      case 'primary':
        return props.theme.primary;
      case 'highlight':
        return props.theme.highlight;
      case 'secondary':
        return props.theme.secondary;
      default:
        return props.color;
    }
  } else {
    return props.theme.palette.text.secondary;
  }
}, function (_ref) {
  var inherit = _ref.inherit;
  return inherit && (0, _styledComponents.css)(_templateObject2);
}, function (_ref2) {
  var bold = _ref2.bold;
  return bold && (0, _styledComponents.css)(_templateObject3);
}, function (_ref3) {
  var center = _ref3.center;
  return center && (0, _styledComponents.css)(_templateObject4);
}, function (_ref4) {
  var thin = _ref4.thin;
  return thin && (0, _styledComponents.css)(_templateObject5);
});

var LeadParagraph = exports.LeadParagraph = _styledComponents2.default.p(_templateObject6, paragraphStyles);

var BodyParagraph = exports.BodyParagraph = _styledComponents2.default.p(_templateObject7, paragraphStyles);

var TextLinkParagraph = exports.TextLinkParagraph = _styledComponents2.default.a(_templateObject8, paragraphStyles, function (props) {
  return props.theme.palette.text.highlight;
});

var LinkParagraph = exports.LinkParagraph = _styledComponents2.default.a(_templateObject9, function (props) {
  return props.theme.palette.text.highlight;
}, function (_ref5) {
  var inherit = _ref5.inherit;
  return inherit && (0, _styledComponents.css)(_templateObject10);
}, function (_ref6) {
  var thin = _ref6.thin;
  return thin && (0, _styledComponents.css)(_templateObject5);
}, function (_ref7) {
  var underline = _ref7.underline;
  return underline && (0, _styledComponents.css)(_templateObject11);
});

var InlineLinkParagraph = exports.InlineLinkParagraph = _styledComponents2.default.a(_templateObject12, function (props) {
  return props.theme.palette.text.highlight;
}, function (_ref8) {
  var underline = _ref8.underline;
  return underline && (0, _styledComponents.css)(_templateObject11);
}, function (_ref9) {
  var noHover = _ref9.noHover;
  return noHover && (0, _styledComponents.css)(_templateObject13);
});

var SmallParagraph = exports.SmallParagraph = _styledComponents2.default.p(_templateObject14, paragraphStyles);

var TinyParagraph = exports.TinyParagraph = _styledComponents2.default.p(_templateObject15, paragraphStyles);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BookReviewRatingWrapper = exports.BookReviewsWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    min-height: 80vh;\n    ", ";\n    \n    .bookReviewHeader {\n\t    display: flex;\n\t    align-content: center;\n\t    justify-content: space-between;\n\t    \n        @media only screen and (max-width: ", "px) {\n            margin-left: 0;\n            margin-right: 0;\n        }\n\t}\n\t\n\t.bookReviewFilters {\n\t    display: flex;\n\t}\n\n"], ["\n    min-height: 80vh;\n    ", ";\n    \n    .bookReviewHeader {\n\t    display: flex;\n\t    align-content: center;\n\t    justify-content: space-between;\n\t    \n        @media only screen and (max-width: ", "px) {\n            margin-left: 0;\n            margin-right: 0;\n        }\n\t}\n\t\n\t.bookReviewFilters {\n\t    display: flex;\n\t}\n\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    width: fit-content;\n    align-items: center;\n\n    & > * + * {\n        margin-left: 8px;\n    }\n"], ["\n    display: flex;\n    width: fit-content;\n    align-items: center;\n\n    & > * + * {\n        margin-left: 8px;\n    }\n"]);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = __webpack_require__(21);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BookReviewsWrapper = exports.BookReviewsWrapper = _styledComponents2.default.div(_templateObject, _globalStyles.clearHeader, _styles.sizes.phone);

var BookReviewRatingWrapper = exports.BookReviewRatingWrapper = _styledComponents2.default.div(_templateObject2);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});
exports.BackArrow = exports.LoadMoreButtonContainer = exports.GutteredRow = exports.HeroRow = exports.clearHeader = exports.ButtonRow = undefined;

var _templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t", ";\n\t", ";\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t", ";\n\t", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["margin-top: ", "px"], ["margin-top: ", "px"]),
    _templateObject3 = _taggedTemplateLiteral(["margin-bottom: ", "px"], ["margin-bottom: ", "px"]),
    _templateObject4 = _taggedTemplateLiteral(["\n\tmargin-top: 53px;\n\tpadding-top: 24px;\n\tpadding-bottom: 40px;\n"], ["\n\tmargin-top: 53px;\n\tpadding-top: 24px;\n\tpadding-bottom: 40px;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n\tmargin-left: -15px;\n\tmargin-right: -15px;\n\t\n    // @media only screen and (max-width: ", "px) {\n\t//     margin-left: 0;\n\t//     margin-right: 0;\n\t// }\n"], ["\n\tmargin-left: -15px;\n\tmargin-right: -15px;\n\t\n    // @media only screen and (max-width: ", "px) {\n\t//     margin-left: 0;\n\t//     margin-right: 0;\n\t// }\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n    // 15px for row, 12px for project preview\n\tmargin-left: -27px;\n\tmargin-right: -27px;\n\t\n    \n    @media only screen and (max-width: ", "px) {\n\t    margin-left: -12px;\n\t    margin-right: -12px;\n\t}\n"], ["\n    // 15px for row, 12px for project preview\n\tmargin-left: -27px;\n\tmargin-right: -27px;\n\t\n    \n    @media only screen and (max-width: ", "px) {\n\t    margin-left: -12px;\n\t    margin-right: -12px;\n\t}\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n\n    margin: 40px auto;\n    text-align: center;\n\n\t& > button {\n\t    display: inline;\n\t    text-transform: uppercase;\n\t    font-weight: 600;\n\t    cursor: pointer;\n\t    background: transparent;\n\t    border: none;\n\t    border-bottom: 2px solid transparent;\n\t    outline: none;\n\t    \n\t    &:hover {   \t\n\t    \tborder-bottom: 2px solid #000;\n\t    }\n    }\n    \n"], ["\n\n    margin: 40px auto;\n    text-align: center;\n\n\t& > button {\n\t    display: inline;\n\t    text-transform: uppercase;\n\t    font-weight: 600;\n\t    cursor: pointer;\n\t    background: transparent;\n\t    border: none;\n\t    border-bottom: 2px solid transparent;\n\t    outline: none;\n\t    \n\t    &:hover {   \t\n\t    \tborder-bottom: 2px solid #000;\n\t    }\n    }\n    \n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n\tcolor: ", ";\n\t\n    display: flex;\n    max-width: 780px;\n    margin: 0 auto;\n    font-size: 16px;\n    align-items: center;\n    cursor: pointer;\n    \n    h6 {\n\t    margin-bottom: 0;\n\t}\n"], ["\n\tcolor: ", ";\n\t\n    display: flex;\n    max-width: 780px;\n    margin: 0 auto;\n    font-size: 16px;\n    align-items: center;\n    cursor: pointer;\n    \n    h6 {\n\t    margin-bottom: 0;\n\t}\n"]);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonRow = exports.ButtonRow = _styledComponents2.default.div(_templateObject, function (_ref) {
			var top = _ref.top;
			return top && (0, _styledComponents.css)(_templateObject2, top);
}, function (_ref2) {
			var bottom = _ref2.bottom;
			return bottom && (0, _styledComponents.css)(_templateObject3, bottom);
});

var clearHeader = exports.clearHeader = (0, _styledComponents.css)(_templateObject4);

var HeroRow = exports.HeroRow = _styledComponents2.default.div(_templateObject5, _index.sizes.phone);

var GutteredRow = exports.GutteredRow = _styledComponents2.default.div(_templateObject6, _index.sizes.phone);

var LoadMoreButtonContainer = exports.LoadMoreButtonContainer = _styledComponents2.default.div(_templateObject7);

var BackArrow = exports.BackArrow = _styledComponents2.default.div(_templateObject8, function (_ref3) {
			var theme = _ref3.theme;
			return theme.secondary;
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(91),
    User = _require.User;

module.exports = { User: User };

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("rest-api-errors");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createBookReview = function createBookReview(_ref) {
    var BookReview = _ref.BookReview;
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var _req$body, category, content, contentPreview, title, isPublished, coverURL, rating, recommended, urlString, author, reviewData, setBookReview;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _req$body = req.body, category = _req$body.category, content = _req$body.content, contentPreview = _req$body.contentPreview, title = _req$body.title, isPublished = _req$body.isPublished, coverURL = _req$body.coverURL, rating = _req$body.rating, recommended = _req$body.recommended, urlString = _req$body.urlString, author = _req$body.author;
                            _context.prev = 1;
                            reviewData = {
                                category: category,
                                content: content,
                                contentPreview: contentPreview,
                                title: title,
                                coverURL: coverURL,
                                rating: rating,
                                isPublished: isPublished,
                                recommended: recommended,
                                urlString: urlString || title.replace(/ /g, '-').toLowerCase(),
                                author: author,
                                owner: req.user.id
                            };


                            if (isPublished) {
                                reviewData.publishDate = new Date();
                            }
                            setBookReview = new BookReview(reviewData);
                            _context.next = 7;
                            return setBookReview.save();

                        case 7:
                            return _context.abrupt('return', res.status(200).send({
                                bookReviewId: setBookReview._id
                            }));

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](1);


                            console.error('There was an error creating this book review: ', _context.t0);
                            return _context.abrupt('return', res.status(400).send({
                                message: "Could not create book review"
                            }));

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[1, 10]]);
        }));

        return function (_x, _x2) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var addBookImage = function addBookImage(req, res) {
    res.status(200).send({
        coverURL: req.imageURL
    });
};

module.exports = {
    createBookReview: createBookReview,
    addBookImage: addBookImage
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    GLOBAL_LIMIT_PER_PAGE = _require.GLOBAL_LIMIT_PER_PAGE;

module.exports = {
    LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
    propertiesToProject: {
        created: 1,
        title: 1,
        author: 1,
        category: 1,
        rating: 1,
        contentPreview: 1,
        urlString: 1,
        isPublished: 1,
        publishDate: 1,
        coverURL: 1,
        recommended: 1
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    GLOBAL_LIMIT_PER_PAGE = _require.GLOBAL_LIMIT_PER_PAGE;

module.exports = {
	LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
	propertiesToProject: {
		created: 1,
		title: 1,
		contentPreview: 1,
		category: 1,
		techStack: 1,
		liveLink: 1,
		spotlight: 1,
		heroURL: 1,
		previewImageURL: 1,
		isPublished: 1,
		urlString: 1,
		publishDate: 1
	}
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    GLOBAL_LIMIT_PER_PAGE = _require.GLOBAL_LIMIT_PER_PAGE;

module.exports = {
	LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
	propertiesToProject: {
		created: 1,
		title: 1,
		contentPreview: 1,
		month: 1,
		year: 1,
		heroURL: 1,
		previewImageURL: 1,
		isPublished: 1,
		urlString: 1,
		publishDate: 1
	}
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    GLOBAL_LIMIT_PER_PAGE = _require.GLOBAL_LIMIT_PER_PAGE;

module.exports = {
	LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
	propertiesToProject: {
		title: 1,
		created: 1,
		contentPreview: 1,
		eventDate: 1,
		urlString: 1,
		keyInfo: 1,

		heroURL: 1,
		isPublished: 1,
		publishDate: 1,
		lastUpdated: 1
	}
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

var _reactRouterConfig = __webpack_require__(8);

var _createStore = __webpack_require__(32);

var _createStore2 = _interopRequireDefault(_createStore);

var _Routes = __webpack_require__(14);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(81);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(84);

var express = __webpack_require__(3);
var bodyParser = __webpack_require__(87);
var cookieParser = __webpack_require__(88);

var config = __webpack_require__(7);
var api = __webpack_require__(90);

var _require = __webpack_require__(165),
    passport = _require.passport;

var _require2 = __webpack_require__(170),
    mongoManager = _require2.mongoManager;

var app = express();
var cors = __webpack_require__(172);

var port = process.env.PORT || 8000;

// Server side rendering stuff


// Connect to the mongodb
mongoManager.connect().then(function () {
    console.log('successfully connected to mongodb');
}).catch(function (e) {
    console.error('connection error', e);
});

// Use the json middleware
app.use(bodyParser.json({
    // Because Stripe needs the raw body, we compute it but only when hitting the Stripe callback URL.
    verify: function verify(req, res, buf) {
        var url = req.originalUrl;
        if (url.includes('/v1/stripe_hooks')) {
            req.rawBody = buf.toString();
        }
    },
    limit: '15MB'
}));

app.use(bodyParser.urlencoded({
    limit: '15MB',
    extended: true,
    parameterLimit: 1500000
}));

app.use(cors());

app.use(passport.init());

app.use(cookieParser());

app.use('/api/', api(config));

app.get('/api/', function (req, res) {
    res.send('Successfully hit endpoint.');
});

app.get('/_ah/stop', function (req, res) {
    res.status(200).send();
});

app.get('/_ah/start', function (req, res) {
    res.status(200).send();
});

app.use(express.static('public'));

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);

    // load data to store
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function () {

        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(port, function () {
    return console.log('App is listening on ' + port);
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(33);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(34);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {

	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

	return store;
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(12);

var _bookReviewReducer = __webpack_require__(35);

var _bookReviewReducer2 = _interopRequireDefault(_bookReviewReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	bookReviews: _bookReviewReducer2.default
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(13);

var INITIAL_STATE = {
	bookReviews: [],
	anotherPage: false,
	numToSkip: 0
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	var action = arguments[1];


	switch (action.type) {
		case _types.GET_FIRST_PAGE_BOOK_REVIEWS:
			return _extends({}, state, action.payload);
		default:
			return state;

	}
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(8);

var _reactToastify = __webpack_require__(15);

var _mainTheme = __webpack_require__(37);

var _mainTheme2 = _interopRequireDefault(_mainTheme);

var _styledComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
	var route = _ref.route;

	return _react2.default.createElement(
		_styledComponents.ThemeProvider,
		{ theme: _mainTheme2.default },
		_react2.default.createElement(
			'h1',
			null,
			'App'
		),
		(0, _reactRouterConfig.renderRoutes)(route.routes),
		_react2.default.createElement(_reactToastify.ToastContainer, {
			pauseOnFocusLoss: false,
			autoClose: 1000,
			transition: _reactToastify.Zoom
		})
	);
};

exports.default = {
	component: App
	// loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(38);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = {

  primary: _colors2.default.black,
  secondary: _colors2.default.grey,
  highlight: _colors2.default.white,
  link: _colors2.default.red['500'],

  palette: {
    text: {
      primary: _colors2.default.black,
      secondary: _colors2.default.darkGrey['500'],
      highlight: _colors2.default.black,
      special: _colors2.default.lightGrey['300']
    },

    divider: _colors2.default.divider,

    button: {
      primary: {
        default: {
          text: _colors2.default.white,
          background: _colors2.default.black
        },
        hover: {
          text: _colors2.default.white,
          background: _colors2.default.black
        },
        active: {
          text: _colors2.default.white,
          background: _colors2.default.black
        },
        disabled: {
          text: _colors2.default.lightGrey['500'],
          background: _colors2.default.darkGrey['500']
        }
      },
      secondary: {
        default: {
          text: _colors2.default.white,
          border: _colors2.default.red['500']
        },
        hover: {
          text: _colors2.default.red['500'],
          border: _colors2.default.red['500']
        },
        active: {
          text: _colors2.default.white,
          background: _colors2.default.red['500']
        },
        disabled: {
          text: _colors2.default.lightGrey['500'],
          background: _colors2.default.darkGrey['500']
        }
      }
    },

    form: {
      input: {
        label: _colors2.default.inputs.light.label,
        border: _colors2.default.inputs.light.default.border,
        background: _colors2.default.inputs.light.default.background,
        text: _colors2.default.inputs.light.default.text,
        activeText: _colors2.default.inputs.light.active.text,
        helperText: _colors2.default.inputs.light.helperText,
        focusBackground: _colors2.default.inputs.light.focus.background,
        focusBorder: _colors2.default.inputs.light.focus.border,
        errorText: _colors2.default.inputs.light.error.text,
        errorBackground: _colors2.default.inputs.light.error.background,
        errorBorder: _colors2.default.inputs.light.error.border,
        errorHelperText: _colors2.default.inputs.light.error.errorText,
        disabledText: _colors2.default.inputs.light.disabled
      },
      checkbox: {
        color: _colors2.default.inputs.light.checkbox,
        checked: _colors2.default.inputs.light.checkbox,
        unchecked: _colors2.default.inputs.light.default.background,
        label: _colors2.default.inputs.light.label
      },
      radio: {
        color: _colors2.default.inputs.light.checkbox,
        label: _colors2.default.inputs.light.label
      },
      timeInput: {
        focus: _colors2.default.red['500'],
        pickerBackground: _colors2.default.red['500']
      },
      addImage: {
        background: _colors2.default.inputs.light.default.background,
        textBackground: _colors2.default.lightGrey['400'],
        highlight: _colors2.default.inputs.light.highlight
      },
      sectionLabel: _colors2.default.section.label
    },

    sidebar: {
      background: _colors2.default.darkGrey['700'],
      hover: _colors2.default.red['700'],
      active: _colors2.default.red['500']
    },

    header: {
      background: _colors2.default.darkGrey['600']
    },

    application: {
      background: _colors2.default.darkGrey['500'],
      lightBackground: _colors2.default.lightGrey['300']
    },

    cards: {
      background: _colors2.default.darkGrey['400'],
      border: _colors2.default.lightGrey['500']
    },

    modals: {
      background: _colors2.default.darkGrey['600'],
      mainText: _colors2.default.white,
      secondaryText: _colors2.default.lightGrey['500'],
      closeBackground: _colors2.default.black,
      closeIcon: _colors2.default.white
    },

    price: {
      positive: _colors2.default.price.positive,
      negative: _colors2.default.price.negative
    },

    plans: {
      primary: _colors2.default.lightGrey['100'],
      divider: '#d8d8d8'
    }

    // common: {
    //   black: '#132144',
    //   white: '#fff',
    // },
    // type: 'light',
    // primary: {
    //   light: '#EDF2FF',
    //   main: '#5d9df5',
    //   dark: '#326fc3',
    //   contrastText: '#fff',
    // },
    // secondary: {
    //   light: '#EEF3F6',
    //   main: '#DEE9ED',
    //   dark: '#8C94A6',
    //   contrastText: '#132144',
    // },
    // error: {
    //   light: '#FEEEF1',
    //   main: '#e91e63',
    //   dark: '#b5003d',
    //   contrastText: '#fff',
    // },
    // grey: {
    //   light: '#8da2b5',
    //   faint: '#d4d9e6',
    // },
    // text: {
    //   primary: '#fff',
    //   secondary: '#8C94A6',
    //   disabled: '',
    //   hint: '',
    // },
    // divider: {
    //   light: '#d4d9e6',
    //   strong: '#8C94A6',
    // },
    // background: {
    //   default: '#f7f9fb',
    //   highlight: '#fff',
    // },
    // link: {
    //   active: '',
    //   hover: '',
    //   selected: '',
    //   disabled: '',
    // },
  }
};

exports.default = theme;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// A set of colors for use in the style guide

var colors = {
	white: '#fff',
	grey: '#A1AEB7',
	black: '#000',

	red: {
		50: '#F9DFE3',
		100: '#F9B6C0',
		200: '#F9889B',
		300: '#F95B75',
		400: '#F93857',
		500: '#FF0039',
		600: '#DA0031',
		700: '#CB002D',
		800: '#AB0026',
		900: '#8B001F'
	},
	blue: {
		50: '#DCE5F9',
		100: '#B0C6FA',
		200: '#7FA3FB',
		300: '#4F81FC',
		400: '#2965FC',
		500: '#0149FF',
		600: '#0047E9',
		700: '#0041CF',
		800: '#003CB7',
		900: '#00328C'
	},
	lightGrey: {
		50: '#F5F9FB',
		100: '#E5EBF0',
		200: '#BCCAD0',
		300: '#94A7AF',
		400: '#758993',
		500: '#5D6C76',
		600: '#4E5D67',
		700: '#3F4C55',
		800: '#282D33',
		900: '#212428'
	},
	darkGrey: {
		50: '#C5C6CD',
		100: '#A1A2A9',
		200: '#61646A',
		300: '#3E4046',
		400: '#1D1E23',
		500: '#1A1B1F',
		600: '#15161A',
		700: '#121317',
		800: '#0D0E11',
		900: '#000000'
	},
	feedback: {
		success: '#00E65A',
		alert: '#FFB201',
		error: '#FF0000'
	},
	divider: '#303030',
	inputs: {
		dark: {
			checkbox: '#FF0039',
			label: '#5D6C76',
			highlight: '#303030',
			helperText: '#9FAFB5',
			// Focus is for a border color when the input is focused
			default: {
				background: '#212428',
				text: '#9FAFB5'
			},
			active: {
				background: '#212428',
				text: '#fff'
			},
			focus: {
				// Focus text color is determined by if it is active or not
				background: '#5D6C76',
				border: '#5D6C76'
			},
			disabled: {
				text: '#2D373C'
			},
			error: {
				background: '#FF000020',
				text: '#fff',
				border: '#f00',
				errorText: '#FF3333'
			}
		},
		light: {
			checkbox: '#FF0039',
			label: '#5D6C76',
			highlight: '#303030',
			helperText: '#9FAFB5',
			// Focus is for a border color when the input is focused
			default: {
				background: '#fff',
				border: '#000',
				text: '#000'
			},
			active: {
				background: '#fff',
				text: '#000'
			},
			focus: {
				// Focus text color is determined by if it is active or not
				background: '#fff',
				border: '#000'
			},
			disabled: {
				text: '#2D373C'
			},
			error: {
				background: '#FF000020',
				text: '#fff',
				border: '#f00',
				errorText: '#FF3333'
			}
		}
	},
	section: {
		label: '#595959'
	},
	price: {
		positive: '#00BC4A',
		negative: '#B02040'
	}
};

exports.default = colors;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

var _BookReviewPreview = __webpack_require__(40);

var _BookReviewPreview2 = _interopRequireDefault(_BookReviewPreview);

var _Dropdown = __webpack_require__(70);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _constants = __webpack_require__(72);

var _Headers = __webpack_require__(9);

var _styles = __webpack_require__(20);

var _globalStyles = __webpack_require__(21);

var _actions = __webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookReviews = function (_Component) {
    _inherits(BookReviews, _Component);

    function BookReviews(props) {
        _classCallCheck(this, BookReviews);

        var _this = _possibleConstructorReturn(this, (BookReviews.__proto__ || Object.getPrototypeOf(BookReviews)).call(this, props));

        _this.state = {
            bookReviews: [],
            anotherPage: false,
            numToSkip: 0,
            filterCategory: 'all'
        };
        return _this;
    }

    _createClass(BookReviews, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getFirstPageBookReviews('all');
            // window.scrollTo(0, 0);
        }
    }, {
        key: 'loadNextPage',
        value: function loadNextPage() {
            // try {
            //     const { bookReviews, numToSkip } = this.state;
            //
            //     let filteredCategory = this.state.filterCategory;
            //     if (filteredCategory === 'all') {
            //         filteredCategory = '';
            //     }
            //
            //     const newBookReviews = [...bookReviews];
            //     const response = (await axios.get(`/bookReview/getRecentBookReviews?numSkip=${numToSkip}&category=${filteredCategory}`)).data;
            //     newBookReviews.push(...response.allReviews);
            //
            //     this.setState({
            //         bookReviews: newBookReviews,
            //         anotherPage: response.anotherPage,
            //         numToSkip: response.numToSkip
            //     });
            //
            // } catch (error) {
            //     toast.error('There was an error getting the first page.')
            // }
        }
    }, {
        key: 'selectFilter',
        value: function selectFilter(option) {
            // if (option === this.state.filterCategory) {
            //     return;
            // } else {
            //     this.props.getFirstPageBookReviews('all');
            // }
            // this.setState({
            //     filterCategory: option
            // });
        }
    }, {
        key: 'render',
        value: function render() {
            var filterCategory = this.state.filterCategory;
            var _props = this.props,
                anotherPage = _props.anotherPage,
                bookReviews = _props.bookReviews;


            console.log('book reviews: ', bookReviews);

            return _react2.default.createElement(
                _styles.BookReviewsWrapper,
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'bookReviewHeader row' },
                    _react2.default.createElement(
                        _Headers.H4,
                        null,
                        'All Books'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bookReviewFilters' },
                        _react2.default.createElement(_Dropdown2.default, { value: filterCategory, options: ['all'].concat(_toConsumableArray(_constants.BOOK_REVIEW_CATEGORY_OPTIONS)), onChange: this.selectFilter })
                    )
                ),
                _react2.default.createElement(
                    _globalStyles.GutteredRow,
                    { className: 'row no-gutters' },
                    bookReviews.map(function (bookReview) {
                        return _react2.default.createElement(_BookReviewPreview2.default, { bookReview: bookReview, key: bookReview._id });
                    })
                ),
                anotherPage && _react2.default.createElement(
                    _globalStyles.LoadMoreButtonContainer,
                    null,
                    _react2.default.createElement(
                        'button',
                        { onClick: this.loadNextPage },
                        'Load More'
                    )
                )
            );
        }
    }]);

    return BookReviews;
}(_react.Component);

function mapStateToProps(state) {
    return {
        bookReviews: state.bookReviews.bookReviews,
        anotherPage: state.bookReviews.anotherPage
    };
}

function loadData(store) {
    return store.dispatch((0, _actions.getFirstPageBookReviews)('all'));
}

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { getFirstPageBookReviews: _actions.getFirstPageBookReviews })(BookReviews),
    loadData: loadData
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TypeLabel = __webpack_require__(41);

var _TypeLabel2 = _interopRequireDefault(_TypeLabel);

var _SvgIcon = __webpack_require__(17);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _Headers = __webpack_require__(9);

var _styles = __webpack_require__(68);

var _P = __webpack_require__(19);

var _styles2 = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BookReviewPreview = function BookReviewPreview(_ref) {
	var bookReview = _ref.bookReview,
	    editable = _ref.editable;
	var title = bookReview.title,
	    coverURL = bookReview.coverURL,
	    category = bookReview.category,
	    contentPreview = bookReview.contentPreview,
	    author = bookReview.author,
	    recommended = bookReview.recommended;


	var goToDetails = function goToDetails() {
		// if (editable) {
		// 	history.push('/admin/bookReview/edit/' + bookReview._id);
		// } else {
		//
		// 	if (bookReview.urlString) {
		// 		history.push('/bookReviews/' + bookReview.urlString);
		// 	} else {
		// 		history.push('/bookReviews/id/' + bookReview._id);
		// 	}
		// }
	};

	return _react2.default.createElement(
		"div",
		{ className: "col-md-3" },
		_react2.default.createElement(
			_styles.BookReviewPreviewWrapper,
			{ onClick: goToDetails },
			_react2.default.createElement(_styles.BookPreviewCover, { bg: coverURL }),
			_react2.default.createElement(
				_styles.BookPreviewContent,
				null,
				_react2.default.createElement(
					_styles.BookPreviewTypeAndRating,
					null,
					_react2.default.createElement(_TypeLabel2.default, { type: category, author: author }),
					_react2.default.createElement(_styles2.BookReviewRatingWrapper, null)
				),
				_react2.default.createElement(
					_Headers.H5,
					null,
					title
				),
				_react2.default.createElement(
					_P.BodyParagraph,
					null,
					contentPreview
				)
			)
		)
	);
};

exports.default = BookReviewPreview;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(42);

var _Headers = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeLabel = function TypeLabel(_ref) {
	var type = _ref.type,
	    author = _ref.author;


	// let backgroundColor;
	// let iconBackgroundColor;
	// let icon;
	var text = void 0;

	switch (type) {
		case 'fantasy':
			text = 'Fantasy';
			// backgroundColor = '#F68FE8';
			// iconBackgroundColor = '#9D59B8';
			// icon = 'Dragon';
			break;
		case 'sci-fi':
			text = 'Sci-Fi';
			// backgroundColor = '#6DD8C0';
			// iconBackgroundColor = '#41B79D';
			// icon = 'Atom';
			break;
		case 'memoir':
			text = 'Memoir';
			// backgroundColor = '#6ABBD7';
			// iconBackgroundColor = '#008ABA';
			// icon = 'Fingerprint';
			break;
		case 'self-help':
			text = 'Self Help';
			// backgroundColor = '#FECA57';
			// iconBackgroundColor = '#FF9F43';
			// icon = 'SelfHelp';
			break;
		default:
			text = type;
		// backgroundColor = '#6DD8C0';
		// iconBackgroundColor = '#41B79D';
		// icon = 'Atom';
	}

	// const appliedStyles = {
	// 	backgroundColor
	// };

	if (author) {
		return _react2.default.createElement(
			_Headers.H6,
			{ color: 'secondary' },
			author,
			' - ',
			text
		);
	}

	return _react2.default.createElement(
		_Headers.H6,
		{ color: 'secondary' },
		text
	);

	// return (
	// 	<TypeLabelWrapper style={appliedStyles}>
	// 		<TypeLabelName>{text}</TypeLabelName>
	// 		<TypeIconWrapper backgroundColor={iconBackgroundColor}>
	// 			<SvgIcon size={21} icon={icon} />
	// 		</TypeIconWrapper>
	// 	</TypeLabelWrapper>
	// )
};

exports.default = TypeLabel;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(43);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".typeLabel {\n    border-radius: 8px;\n    height: 16px;\n    width: fit-content;\n    padding: 4px 0 4px 6px;\n\n    display: flex;\n    align-items: center;\n}\n\n.typeName {\n    text-transform: uppercase;\n    font-family: Montserrat, sans-serif;\n    color: #fff;\n    font-size: 9px;\n    letter-spacing: 1px;\n    font-weight: 600;\n    margin-bottom: 0;\n    margin-top: -1px;\n}\n\n.typeIconWrapper {\n    height: 16px;\n    width: 16px;\n    border-radius: 100%;\n    margin-left: 4px;\n\n    color: #fff;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AngelList = __webpack_require__(46);

Object.defineProperty(exports, 'AngelList', {
  enumerable: true,
  get: function get() {
    return _AngelList.ReactComponent;
  }
});

var _Email = __webpack_require__(47);

Object.defineProperty(exports, 'Email', {
  enumerable: true,
  get: function get() {
    return _Email.ReactComponent;
  }
});

var _Github = __webpack_require__(48);

Object.defineProperty(exports, 'Github', {
  enumerable: true,
  get: function get() {
    return _Github.ReactComponent;
  }
});

var _Instagram = __webpack_require__(49);

Object.defineProperty(exports, 'Instagram', {
  enumerable: true,
  get: function get() {
    return _Instagram.ReactComponent;
  }
});

var _LinkedIn = __webpack_require__(50);

Object.defineProperty(exports, 'LinkedIn', {
  enumerable: true,
  get: function get() {
    return _LinkedIn.ReactComponent;
  }
});

var _Medium = __webpack_require__(51);

Object.defineProperty(exports, 'Medium', {
  enumerable: true,
  get: function get() {
    return _Medium.ReactComponent;
  }
});

var _Twitter = __webpack_require__(52);

Object.defineProperty(exports, 'Twitter', {
  enumerable: true,
  get: function get() {
    return _Twitter.ReactComponent;
  }
});

var _Youtube = __webpack_require__(53);

Object.defineProperty(exports, 'Youtube', {
  enumerable: true,
  get: function get() {
    return _Youtube.ReactComponent;
  }
});

var _Atom = __webpack_require__(54);

Object.defineProperty(exports, 'Atom', {
  enumerable: true,
  get: function get() {
    return _Atom.ReactComponent;
  }
});

var _Dragon = __webpack_require__(55);

Object.defineProperty(exports, 'Dragon', {
  enumerable: true,
  get: function get() {
    return _Dragon.ReactComponent;
  }
});

var _Fingerprint = __webpack_require__(56);

Object.defineProperty(exports, 'Fingerprint', {
  enumerable: true,
  get: function get() {
    return _Fingerprint.ReactComponent;
  }
});

var _SelfHelp = __webpack_require__(57);

Object.defineProperty(exports, 'SelfHelp', {
  enumerable: true,
  get: function get() {
    return _SelfHelp.ReactComponent;
  }
});

var _headerTitle = __webpack_require__(58);

Object.defineProperty(exports, 'headerTitle', {
  enumerable: true,
  get: function get() {
    return _headerTitle.ReactComponent;
  }
});

var _AlignLeft = __webpack_require__(59);

Object.defineProperty(exports, 'AlignLeft', {
  enumerable: true,
  get: function get() {
    return _AlignLeft.ReactComponent;
  }
});

var _AlignCenter = __webpack_require__(60);

Object.defineProperty(exports, 'AlignCenter', {
  enumerable: true,
  get: function get() {
    return _AlignCenter.ReactComponent;
  }
});

var _AlignRight = __webpack_require__(61);

Object.defineProperty(exports, 'AlignRight', {
  enumerable: true,
  get: function get() {
    return _AlignRight.ReactComponent;
  }
});

var _Camera = __webpack_require__(62);

Object.defineProperty(exports, 'Camera', {
  enumerable: true,
  get: function get() {
    return _Camera.ReactComponent;
  }
});

var _Search = __webpack_require__(63);

Object.defineProperty(exports, 'Search', {
  enumerable: true,
  get: function get() {
    return _Search.ReactComponent;
  }
});

var _Star = __webpack_require__(64);

Object.defineProperty(exports, 'Star', {
  enumerable: true,
  get: function get() {
    return _Star.ReactComponent;
  }
});

var _BackCaret = __webpack_require__(65);

Object.defineProperty(exports, 'BackCaret', {
  enumerable: true,
  get: function get() {
    return _BackCaret.ReactComponent;
  }
});

var _Close = __webpack_require__(66);

Object.defineProperty(exports, 'Close', {
  enumerable: true,
  get: function get() {
    return _Close.ReactComponent;
  }
});

var _OpenInNew = __webpack_require__(67);

Object.defineProperty(exports, 'OpenInNew', {
  enumerable: true,
  get: function get() {
    return _OpenInNew.ReactComponent;
  }
});

var _DownCaret = __webpack_require__(18);

Object.defineProperty(exports, 'DownCaret', {
  enumerable: true,
  get: function get() {
    return _DownCaret.ReactComponent;
  }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M-3 0h24v24H-3z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M14.378 10.097c.558-1.528 2.168-5.949 2.168-7.364 0-1.247-.75-2.292-2.087-2.292-2.13 0-4.041 6.173-4.638 7.645C9.357 6.75 7.189 0 5.278 0 3.793 0 3.095 1.073 3.095 2.423c0 1.655 1.634 5.944 2.226 7.594-.3-.108-.626-.201-.955-.201-1.118 0-2.307 1.364-2.307 2.465 0 .417.234 1.003.382 1.392C.678 14.143 0 15.295 0 17.034-.005 20.42 3.262 24 7.858 24 13.494 24 17 19.847 17 14.49c0-2.021-.33-3.845-2.622-4.393zm-1.691-5.034c.19-.577 1.008-3.015 1.772-3.015.41 0 .52.418.52.75 0 .896-1.843 5.841-2.25 6.938l-1.623-.281 1.58-4.393zM4.595 2.264c0-.558.693-2.142 2.212 2.208l1.652 4.701c-.745-.06-1.323-.14-1.69.066-.521-1.35-2.174-5.61-2.174-6.975zm-.11 9.174c1.4 0 3.205 4.434 3.205 5.034 0 .239-.234.534-.506.534-.998 0-3.673-3.604-3.673-4.58.005-.36.606-.989.974-.989zm8.804 8.732c-1.39 1.5-3.167 2.278-5.24 2.278-2.838 0-5.078-1.528-6.157-4.139-.817-2.034.181-3.201.984-3.201.544 0 2.593 2.826 2.593 3.426 0 .23-.368.39-.559.39-.769 0-1.07-.727-2.44-2.41-1.42 1.392.979 4.073 2.784 4.073 1.247 0 2.059-1.134 1.815-1.968.177 0 .397.014.56-.028.052 1.27.434 2.784 1.991 2.892 0-.042.096-.333.096-.347 0-.816-.507-1.528-.507-2.358 0-1.326 1.037-2.61 2.088-3.36.382-.282.845-.455 1.294-.615.464-.173.956-.375 1.309-.722-.053-.525-.272-.989-.807-.989-1.323 0-5.76.188-5.76-1.86 0-.315.004-.615.83-.615 1.543 0 5.46.375 6.606 1.364.865.755 1.161 5.307-1.48 8.19zm-4.71-5.906c.463.145.94.188 1.418.281a6.181 6.181 0 00-.97.896c-.133-.399-.295-.788-.448-1.177z",
  fill: "currentColor"
}));

function SvgAngelList(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 17,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAngelList);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M-2-4h24v24H-2z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M18 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z",
  fill: "currentColor"
}));

function SvgEmail(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 20,
    height: 16
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgEmail);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M12 0C5.383 0 0 5.383 0 12c0 5.738 3.95 10.78 9.392 11.988A.5.5 0 0010 23.5v-3a.5.5 0 00-.5-.5h-1c-1.248 0-2.097-1.183-2.847-2.226-.077-.107-.153-.214-.23-.318.355.188.66.414.962.637.601.446 1.23.884 2.053.903.02.003.128.008.149.008.652 0 1.413-.394 1.413-1.504v-.349a.5.5 0 00-.364-.481C6.863 15.885 5 13.807 5 11.5c0-1.2.493-2.345 1.425-3.312a.5.5 0 00.094-.558c-.372-.802-.293-1.893.148-2.548.584.227 1.341.704 1.833 1.288.135.16.357.22.554.148a8.668 8.668 0 015.892 0c.199.073.42.013.554-.148.492-.584 1.249-1.061 1.833-1.288.441.655.52 1.746.148 2.548a.5.5 0 00.094.558C18.507 9.155 19 10.3 19 11.5c0 2.422-2.07 4.591-5.033 5.274a.498.498 0 00-.33.721c.248.468.363 1.106.363 2.005v4a.5.5 0 00.608.488C20.05 22.78 24 17.738 24 12c0-6.617-5.383-12-12-12",
  fill: "currentColor"
}));

function SvgGithub(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", props, _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgGithub);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 4.5c-2.037 0-2.292.009-3.092.045-.799.037-1.344.163-1.82.349a3.677 3.677 0 00-1.33.865 3.677 3.677 0 00-.864 1.328c-.186.477-.312 1.022-.349 1.82C4.51 9.708 4.5 9.964 4.5 12s.009 2.292.045 3.092c.037.799.163 1.344.349 1.82.191.494.448.912.865 1.33.417.416.835.673 1.328.864.477.186 1.022.312 1.82.349.8.036 1.056.045 3.093.045s2.292-.009 3.092-.045c.799-.037 1.344-.163 1.82-.349a3.677 3.677 0 001.33-.865c.416-.417.673-.835.864-1.328.186-.477.312-1.022.349-1.82.036-.8.045-1.056.045-3.093s-.009-2.292-.045-3.092c-.037-.799-.163-1.344-.349-1.82a3.677 3.677 0 00-.865-1.33 3.677 3.677 0 00-1.328-.864c-.477-.186-1.022-.312-1.82-.349-.8-.036-1.056-.045-3.093-.045zm0 1.351c2.003 0 2.24.008 3.03.044.732.033 1.129.156 1.393.258.35.136.6.299.863.561.262.263.425.513.56.863.103.264.226.661.259 1.392.036.791.044 1.028.044 3.031s-.008 2.24-.044 3.03c-.033.732-.156 1.129-.258 1.393-.136.35-.299.6-.561.863a2.322 2.322 0 01-.863.56c-.264.103-.661.226-1.392.259-.791.036-1.028.044-3.031.044s-2.24-.008-3.03-.044c-.732-.033-1.129-.156-1.393-.258-.35-.136-.6-.299-.863-.561a2.323 2.323 0 01-.56-.863c-.103-.264-.226-.661-.259-1.392-.036-.791-.044-1.028-.044-3.031s.008-2.24.044-3.03c.033-.732.156-1.129.258-1.393.136-.35.299-.6.561-.863.263-.262.513-.425.863-.56.264-.103.661-.226 1.392-.259.791-.036 1.028-.044 3.031-.044zm0 2.298a3.851 3.851 0 100 7.702 3.851 3.851 0 000-7.702zm0 6.351a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm4.904-6.503a.9.9 0 11-1.8 0 .9.9 0 011.8 0z",
  fill: "currentColor",
  fillRule: "evenodd"
});

function SvgInstagram(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgInstagram);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zM8.248 18.744V9.373H5.133v9.371h3.115zm11.232 0V13.37c0-2.879-1.536-4.218-3.586-4.218-1.652 0-2.393.91-2.807 1.548V9.373H9.972c.041.879 0 9.371 0 9.371h3.115V13.51c0-.28.02-.56.102-.76.225-.56.738-1.139 1.599-1.139 1.126 0 1.578.86 1.578 2.119v5.014h3.114zM6.712 4.854c-1.066 0-1.763.7-1.763 1.62 0 .898.675 1.618 1.721 1.618h.02c1.087 0 1.763-.72 1.763-1.619-.02-.918-.676-1.62-1.741-1.62z",
  fill: "currentColor",
  fillRule: "evenodd"
});

function SvgLinkedIn(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLinkedIn);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm7.005 18.324v-.236l-1.096-1.076a.328.328 0 01-.125-.315v-7.91a.328.328 0 01.125-.314l1.122-1.077V7.16h-3.886l-2.77 6.911-3.152-6.91H5.146v.236l1.313 1.581a.544.544 0 01.177.46v6.215a.716.716 0 01-.19.617l-1.477 1.792v.236h4.188v-.236L7.68 16.27a.742.742 0 01-.203-.617v-5.375l3.676 8.02h.427l3.158-8.02v6.392c0 .171 0 .204-.112.315l-1.136 1.103v.236h5.515z",
  fill: "currentColor",
  fillRule: "evenodd"
});

function SvgMedium(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMedium);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zM9.886 18.382c5.31 0 8.214-4.4 8.214-8.213 0-.126 0-.252-.006-.371A5.914 5.914 0 0019.537 8.3a5.858 5.858 0 01-1.659.455 2.885 2.885 0 001.27-1.598 5.847 5.847 0 01-1.832.7 2.887 2.887 0 00-4.915 2.634 8.189 8.189 0 01-5.95-3.017c-.246.425-.39.922-.39 1.449 0 1 .509 1.885 1.287 2.4a2.836 2.836 0 01-1.305-.359v.036c0 1.4.994 2.562 2.317 2.832a2.88 2.88 0 01-1.305.047 2.882 2.882 0 002.694 2.006 5.803 5.803 0 01-4.275 1.191 8.043 8.043 0 004.412 1.305z",
  fill: "currentColor",
  fillRule: "evenodd"
});

function SvgTwitter(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgTwitter);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm7.187 8.39a1.878 1.878 0 00-1.326-1.327C16.69 6.75 12 6.75 12 6.75s-4.69 0-5.86.314A1.879 1.879 0 004.812 8.39C4.5 9.56 4.5 12 4.5 12s0 2.44.313 3.61c.173.646.681 1.154 1.326 1.327 1.17.313 5.861.313 5.861.313s4.69 0 5.86-.313a1.878 1.878 0 001.327-1.327C19.5 14.44 19.5 12 19.5 12s0-2.44-.313-3.61zM10.5 14.25v-4.5L14.397 12 10.5 14.25z",
  fill: "currentColor",
  fillRule: "evenodd"
});

function SvgYoutube(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgYoutube);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M23.53 6.015c-1.606-2.516-6.014-1.853-6.564-1.78C15.88 1.742 14.213 0 12 0S8.12 1.74 7.034 4.235C6.484 4.162 2.075 3.5.47 6.015-.545 7.607.128 9.788 2.062 12 .128 14.212-.545 16.393.47 17.985c1.634 2.56 6.148 1.828 6.561 1.773C8.116 22.256 9.785 24 12 24c2.215 0 3.884-1.744 4.969-4.242.415.055 4.927.787 6.56-1.773 1.016-1.592.343-3.773-1.592-5.985 1.935-2.212 2.608-4.393 1.592-5.985zM2.72 16.89c-.397-.62-.024-1.796 1.096-3.18a23.222 23.222 0 001.977 1.507c.116.81.28 1.599.482 2.356-1.093.113-3.019.162-3.556-.683zm3.073-8.107a23.32 23.32 0 00-1.977 1.506C2.696 8.905 2.323 7.73 2.719 7.11c.197-.31.939-.96 3.557-.687-.208.778-.37 1.566-.483 2.36zM12 2.25c.765 0 1.697.903 2.454 2.51a25.34 25.34 0 00-2.453.785 25.25 25.25 0 00-2.455-.787C10.303 3.153 11.236 2.25 12 2.25zm0 19.5c-.764 0-1.695-.9-2.452-2.503.8-.214 1.62-.481 2.452-.797a25.53 25.53 0 002.451.797C13.694 20.85 12.764 21.75 12 21.75zm3.77-7.747a25.974 25.974 0 01-3.77 1.97 25.969 25.969 0 01-3.77-1.97c-.073-.8-.164-2.208 0-4.006A25.848 25.848 0 0112 8.027c1.003.431 2.164.966 3.77 1.97.073.8.164 2.208 0 4.006zm5.51 2.887c-.536.844-2.46.796-3.555.683a20.19 20.19 0 00.482-2.356 23.32 23.32 0 001.977-1.507c1.12 1.384 1.492 2.56 1.097 3.18zm-1.097-6.6a23.222 23.222 0 00-1.977-1.507 20.245 20.245 0 00-.483-2.36c2.618-.272 3.36.378 3.557.688.396.62.024 1.795-1.097 3.179zM12 10.5c-.948 0-1.717.672-1.717 1.5s.769 1.5 1.717 1.5c.948 0 1.716-.672 1.716-1.5s-.768-1.5-1.716-1.5z",
  fill: "currentColor",
  fillRule: "evenodd"
});

function SvgAtom(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAtom);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M0-3h24v24H0z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M18.014 4.452c.558.032 1.024-.367 1.156-.912l-2.188-.57c-.243 1.006.581 1.457 1.032 1.482zm3.09 5.08l-3.526-1.64a.368.368 0 01-.172-.174h.7l.458.293c.618.398.929.598 1.597.598h1.043c.863 0 1.64-.467 2.03-1.219l.483-.93a2.199 2.199 0 00-.22-2.356L20.987.878A2.308 2.308 0 0019.175 0h-8.002c-1.396 0-1.981 1.736-.935 2.56l.468.37c-.166.067-.133.053-.177.074a1.439 1.439 0 000 2.601l1.452.556v.48L5.703 5.088a2.09 2.09 0 00-2.192.808L.188 10.581c-.538.839.152 1.944 1.238 1.79l3.427-.638c-.551.864.197 1.93 1.191 1.794l6.768-.899c.184.38.396.742.637 1.083-5.507.374-9.256 1.205-12.036 1.8-.818.176-1.413.9-1.413 1.723C0 18.207.806 19 1.796 19L18.614 19c2.848 0 5.194-2.072 5.341-4.718.11-1.997-1.008-3.861-2.85-4.75zm-18.557.82l2.434-3.43a.263.263 0 01.288-.105l2.614.643-1.55 2.185-3.786.707zm4.607 1.23l2.597-3.66 2.23.556c0 .789.005 1.365.252 2.43l-5.08.675zm11.46 5.637l-16.82.033c3.444-.738 7.37-1.616 14.346-1.893a.645.645 0 00.348-1.18c-2.718-1.919-2.71-4.577-2.71-5.309V4.935l-1.689-.64 2.147-.862-2.099-1.652h7.047a.48.48 0 01.38.185l2.513 3.229c.1.13.117.305.041.45l-.482.93a.486.486 0 01-.432.252h-1.043c-.135 0-.135 0-.618-.31-.192-.124-.92-.581-.92-.581h-3.047v1.637c0 .823.471 1.562 1.238 1.931l3.504 1.63c1.209.582 1.914 1.75 1.842 3.049-.092 1.675-1.683 3.036-3.546 3.036z",
  fill: "currentColor"
}));

function SvgDragon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 19
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgDragon);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M-3-2h24v24H-3z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M14.81 2.47c-.08 0-.16-.02-.23-.06C12.66 1.42 11 1 9.01 1c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2a.506.506 0 01.2-.68C4.82.52 6.86 0 9.01 0c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67a.49.49 0 01-.44.28zM.5 7.72a.499.499 0 01-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C6.98 2.04 11 2.03 14.15 3.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 01-.12.7c-.23.16-.54.11-.7-.12a9.388 9.388 0 00-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07a.47.47 0 01-.35-.15c-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM11.91 20c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1a7.297 7.297 0 01-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29a11.14 11.14 0 01-.73-3.96c0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94-1.7 0-3.08-1.32-3.08-2.94 0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z",
  fill: "currentColor"
}));

function SvgFingerprint(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 18,
    height: 20
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgFingerprint);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "currentColor",
  fillRule: "nonzero"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M15.093 11.942c1.33-.063 2.149-.896 2.149-2.205a2.46 2.46 0 00-.018-.294C18.116 8.89 18.5 8.15 18.5 7c0-1.148-.384-1.89-1.276-2.443.012-.098.018-.196.018-.294 0-1.309-.819-2.142-2.15-2.205C14.737 1.412 14.04 1.01 13.235 1c-.47-.006-.855.131-1.145.41-.031.029-.06.06-.089.092a1.41 1.41 0 00-.089-.093c-.29-.278-.675-.415-1.145-.409-.805.011-1.502.412-1.859 1.058-1.33.063-2.149.896-2.149 2.205 0 .098.006.196.018.294C5.884 5.11 5.5 5.85 5.5 7c0 1.148.384 1.89 1.276 2.443a2.461 2.461 0 00-.018.294c0 1.309.819 2.142 2.15 2.205.356.646 1.052 1.047 1.858 1.058h.031c.456 0 .83-.138 1.114-.41.031-.029.06-.06.089-.093.028.033.058.064.089.094.283.271.658.409 1.113.409h.031c.807-.011 1.503-.412 1.86-1.058zm-3.555-1.012c0 .496-.095.85-.275 1.022-.11.105-.268.154-.484.151-.48-.006-.888-.244-1.078-.623a.75.75 0 01.843-.355c.246.064.499-.078.565-.317a.447.447 0 00-.326-.55 1.691 1.691 0 00-1.261.162c-.268.15-.483.366-.628.624-.805-.056-1.212-.495-1.212-1.307 0-.104.01-.207.03-.309a.625.625 0 00-.313-.666c-.72-.403-.976-.864-.976-1.762s.256-1.359.976-1.761a.626.626 0 00.313-.668 1.585 1.585 0 01-.03-.308c0-.87.468-1.313 1.392-1.313h.046c.236.096.37.352.301.601a.447.447 0 00.328.549.46.46 0 00.565-.318 1.388 1.388 0 00-.487-1.456c.217-.265.56-.424.952-.429.217-.003.375.046.484.15.18.173.275.527.275 1.023v7.86zm3.04-.481a.447.447 0 00-.327-.549.463.463 0 00-.565.318 1.388 1.388 0 00.487 1.456c-.217.265-.56.424-.952.429-.217.004-.375-.046-.484-.151-.18-.172-.275-.526-.275-1.022V3.07c0-.496.095-.85.275-1.022.11-.105.267-.154.484-.151.48.006.888.244 1.078.623a.75.75 0 01-.843.355.463.463 0 00-.565.317c-.066.24.08.485.326.55a1.688 1.688 0 001.261-.161c.268-.152.483-.367.628-.625.805.056 1.212.495 1.212 1.307 0 .104-.01.207-.03.309a.625.625 0 00.313.666c.72.403.976.864.976 1.762s-.256 1.359-.975 1.761a.626.626 0 00-.314.668c.02.1.03.204.03.308 0 .87-.468 1.313-1.392 1.313h-.046a.507.507 0 01-.301-.601z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M9.991 6c-.601 0-1.124.254-1.365.662-.239.406-.134.859.274 1.182l.06.046c.1.073.23.11.36.11a.61.61 0 00.36-.11c.198-.147.197-.385-.001-.532a1.227 1.227 0 01-.035-.026c-.191-.152-.113-.322-.085-.37.03-.05.146-.21.432-.21.281 0 .509-.169.509-.376 0-.208-.228-.376-.509-.376zM14.321 7.358c-.198.147-.199.385 0 .532.1.073.23.11.36.11a.61.61 0 00.42-.156c.407-.323.512-.776.273-1.182-.24-.408-.764-.662-1.365-.662-.281 0-.509.168-.509.376 0 .207.228.376.509.376.286 0 .403.16.432.21.028.048.106.218-.085.37a1.172 1.172 0 01-.035.026zM8.054 13.642l-3.16-3.145V7.111c0-.765-.616-1.388-1.373-1.388l-.048.001a1.352 1.352 0 00-.23.028v-.338c0-.757-.574-1.378-1.307-1.412a1.454 1.454 0 00-1.062.393c-.234.226-.363.52-.363.828a5357.977 5357.977 0 01-.01 7.796 4.215 4.215 0 001.373 3.008l3.534 2.88v3.635c0 .253.203.458.453.458h3.186c.25 0 .453-.205.453-.458v-5.41a4.956 4.956 0 00-1.446-3.49zM3.502 6.639h.019a.47.47 0 01.467.472v2.864a1.445 1.445 0 00-.745.073V6.73a.459.459 0 01.259-.092zm5.092 15.445h-2.28v-3.396a.46.46 0 00-.168-.356l-3.691-3.008a3.29 3.29 0 01-1.049-2.413c.005-1.575.011-6.608.011-7.688 0-.057.028-.113.083-.166a.554.554 0 01.393-.14c.245.01.444.234.444.497v5.627a1.5 1.5 0 00.365 1.437l3.193 3.374a.45.45 0 00.64.015.461.461 0 00.015-.648l-3.194-3.375a.567.567 0 01-.01-.795l.059-.055a.554.554 0 01.746.049l.005.004 3.261 3.247a4.03 4.03 0 011.177 2.839v4.951zM23.49 5.223c0-.308-.13-.602-.364-.828a1.455 1.455 0 00-1.062-.393c-.733.034-1.307.655-1.307 1.412v.338a1.346 1.346 0 00-.23-.028h-.048c-.757 0-1.373.622-1.373 1.387v3.386l-3.16 3.145a4.956 4.956 0 00-1.446 3.49v5.41c0 .253.203.458.453.458h3.186c.25 0 .453-.205.453-.458v-3.635l3.534-2.88a4.215 4.215 0 001.374-3.119c-.004-1.574-.01-6.605-.01-7.685zm-3.014 1.416h.023a.458.458 0 01.258.092v3.317a1.445 1.445 0 00-.745-.073V7.11c0-.26.21-.472.464-.472zm2.117 6.363a3.29 3.29 0 01-1.047 2.322l-3.691 3.008a.46.46 0 00-.17.356v3.396h-2.279v-4.951a4.03 4.03 0 011.177-2.839l3.261-3.247a.554.554 0 01.81 0 .567.567 0 01-.01.794l-1.609 1.693a.461.461 0 00.013.648.45.45 0 00.64-.013l1.61-1.69a1.5 1.5 0 00.365-1.438V5.414c0-.263.2-.486.444-.498a.554.554 0 01.393.141c.055.053.083.109.083.166a5366.34 5366.34 0 00.01 7.779z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M18.462 15.31a.505.505 0 00-.507-.308.505.505 0 00-.438.369c-.053.2.024.416.192.536.169.122.404.124.576.005a.504.504 0 00.177-.603z"
})), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M0 0h24v24H0z"
}));

function SvgSelfHelp(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSelfHelp);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("text", {
  transform: "translate(-208 -7)",
  fill: "#FFF",
  fillRule: "evenodd",
  fontFamily: "BradleyHandITCTT-Bold, Bradley Hand",
  fontSize: 56,
  fontStyle: "expanded",
  fontWeight: "bold"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tspan", {
  x: 206,
  y: 48
}, "William Huang"));

function SvgHeaderTitle(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 393,
    height: 57
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgHeaderTitle);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var _ref2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  fill: "currentColor",
  d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"
});

function SvgAlignLeft(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    height: 24,
    width: 24
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAlignLeft);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var _ref2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  fill: "currentColor",
  d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"
});

function SvgAlignCenter(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    height: 24,
    width: 24
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAlignCenter);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var _ref2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  fill: "currentColor",
  d: "M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"
});

function SvgAlignRight(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    height: 24,
    width: 24
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAlignRight);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M-2-3h24v24H-2z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M13 0l1.83 2H18c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3.17L7 0h6zm-3 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 1.8a3.2 3.2 0 110 6.4 3.2 3.2 0 010-6.4z",
  fill: "#000"
}));

function SvgCamera(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 20,
    height: 18
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCamera);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M-3-3h24v24H-3z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M12.5 11h-.79l-.28-.27A6.471 6.471 0 0013 6.5 6.5 6.5 0 106.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z",
  fill: "#000"
}));

function SvgSearch(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 18,
    height: 18
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSearch);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M-2-2h24v24H-2z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M10 0l2.81 6.62 7.19.62-5.45 4.73L16.18 19 10 15.27 3.82 19l1.64-7.03L0 7.24l7.19-.61L10 0z",
  fill: "#FFC107"
}));

function SvgStar(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 20,
    height: 19
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgStar);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  fill: "currentColor",
  fillRule: "nonzero",
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"
}));

function SvgBackCaret(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgBackCaret);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  d: "M1.757.343L6 4.585 10.243.343a1 1 0 111.414 1.414L7.414 6l4.243 4.244a1 1 0 11-1.414 1.414L5.999 7.414l-4.242 4.243a1 1 0 11-1.414-1.414l4.242-4.244L.343 1.757A1 1 0 111.757.343z",
  fill: "currentColor",
  fillRule: "evenodd"
});

function SvgClose(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    viewBox: "0 0 12 12"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgClose);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
  fill: "currentColor",
  d: "M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
});

function SvgOpenInNew(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgOpenInNew);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BookPreviewTypeAndRating = exports.BookPreviewContent = exports.BookPreviewCover = exports.BookReviewPreviewWrapper = exports.DEFAULT_BOOK_REVIEW_ICON = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    padding: 12px;\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n\n    max-width: 940px;\n\n    border-radius: 5px;\n    cursor: pointer;\n    \n    h6 {\n    \tmargin-top: 4px;\n    }\n"], ["\n    padding: 12px;\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n\n    max-width: 940px;\n\n    border-radius: 5px;\n    cursor: pointer;\n    \n    h6 {\n    \tmargin-top: 4px;\n    }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n\n\tbackground-image: url(", "); \n\t\n    padding-top: 100%;\n    width: 100%;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    \n    @media only screen and (max-width: ", "px) {\n\t\tbackground-image: url(", ");\n\t}\n"], ["\n\n\tbackground-image: url(", "); \n\t\n    padding-top: 100%;\n    width: 100%;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    \n    @media only screen and (max-width: ", "px) {\n\t\tbackground-image: url(", ");\n\t}\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    position: relative;\n"], ["\n    width: 100%;\n    position: relative;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n\t\n    margin: 12px 0 6px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    \n"], ["\n\t\n    margin: 12px 0 6px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    \n"]);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _getImageUrl = __webpack_require__(69);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DEFAULT_BOOK_REVIEW_ICON = exports.DEFAULT_BOOK_REVIEW_ICON = 'https://storage.googleapis.com/global_images/Default_Images/error404.jpg';

var BookReviewPreviewWrapper = exports.BookReviewPreviewWrapper = _styledComponents2.default.div(_templateObject);

var BookPreviewCover = exports.BookPreviewCover = _styledComponents2.default.div(_templateObject2, function (_ref) {
    var bg = _ref.bg;
    return bg ? (0, _getImageUrl.getImageUrl)(bg, 'medium') : DEFAULT_BOOK_REVIEW_ICON;
}, _styles.sizes.phone, function (_ref2) {
    var bg = _ref2.bg;
    return bg ? (0, _getImageUrl.getImageUrl)(bg, 'small') : DEFAULT_BOOK_REVIEW_ICON;
});

var BookPreviewContent = exports.BookPreviewContent = _styledComponents2.default.div(_templateObject3);

var BookPreviewTypeAndRating = exports.BookPreviewTypeAndRating = _styledComponents2.default.div(_templateObject4);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var getImageUrl = exports.getImageUrl = function getImageUrl(url, size) {

	if (!url) {
		return url;
	}

	var imageNameParts = url.split('/');
	var imageName = imageNameParts.pop();

	switch (size) {
		case 'large':
			return imageNameParts.join('/') + '/resize_2048_' + imageName;
		case 'medium':
			return imageNameParts.join('/') + '/resize_1024_' + imageName;
		case 'small':
			return imageNameParts.join('/') + '/resize_512_' + imageName;
		case 'tiny':
			return imageNameParts.join('/') + '/resize_256_' + imageName;
		default:
			return url;
	}
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function Dropdown(_ref) {
	var value = _ref.value,
	    options = _ref.options,
	    onChange = _ref.onChange;


	return _react2.default.createElement(
		"div",
		{ className: "dropdown open" },
		_react2.default.createElement(
			_styles.DropdownWrapper,
			{ type: "button", id: "dropdownMenu1",
				"data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
			value
		),
		_react2.default.createElement(
			"div",
			{ className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "dropdownMenu1" },
			options.map(function (option) {
				return _react2.default.createElement(
					_styles.DropdownItem,
					{ className: "dropdown-item", key: option, onClick: function onClick() {
							return onChange(option);
						} },
					option
				);
			})
		)
	);
};

exports.default = Dropdown;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.DropdownItem = exports.DropdownWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tpadding: 6px 24px;\n    background-color: transparent;\n    border: 1px solid #ddd;\n    color: #000;\n    text-transform: uppercase;\n    min-width: 40px;\n    font-size: 14px;\n    display: block;\n    box-sizing: content-box;\n    \n    &:hover,\n    &:focus {\n    \toutline: none;\n    }\n'], ['\n\tpadding: 6px 24px;\n    background-color: transparent;\n    border: 1px solid #ddd;\n    color: #000;\n    text-transform: uppercase;\n    min-width: 40px;\n    font-size: 14px;\n    display: block;\n    box-sizing: content-box;\n    \n    &:hover,\n    &:focus {\n    \toutline: none;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\n    cursor: pointer;\n    text-transform: uppercase;\n    \n    &:active {\n\t    background-color: #f8f9fa;\n\t    color: #000;\n    }\n    \n    &:hover,\n    &:focus {\n    \toutline: none;\n    }\n'], ['\n\t\n    cursor: pointer;\n    text-transform: uppercase;\n    \n    &:active {\n\t    background-color: #f8f9fa;\n\t    color: #000;\n    }\n    \n    &:hover,\n    &:focus {\n    \toutline: none;\n    }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownWrapper = exports.DropdownWrapper = _styledComponents2.default.button(_templateObject);

var DropdownItem = exports.DropdownItem = _styledComponents2.default.button(_templateObject2);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var BOOK_REVIEW_CATEGORY_OPTIONS = exports.BOOK_REVIEW_CATEGORY_OPTIONS = ['recommended', 'fantasy', 'sci-fi', 'horror', 'memoir', 'self-help', 'analysis'];

var PROJECT_CATEGORY_OPTIONS = exports.PROJECT_CATEGORY_OPTIONS = ['web', 'hardware'];

var VALID_YEARS = exports.VALID_YEARS = [2020];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getFirstPageBookReviews = undefined;

var _axios = __webpack_require__(74);

var _axios2 = _interopRequireDefault(_axios);

var _reactToastify = __webpack_require__(15);

var _types = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getFirstPageBookReviews = exports.getFirstPageBookReviews = function getFirstPageBookReviews(option) {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
			var filteredCategory, response;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							filteredCategory = option;

							if (filteredCategory === 'all') {
								filteredCategory = '';
							}

							_context.next = 5;
							return _axios2.default.get("/bookReview/getRecentBookReviews?category=" + filteredCategory);

						case 5:
							response = _context.sent.data;


							dispatch({
								type: _types.GET_FIRST_PAGE_BOOK_REVIEWS,
								payload: {
									bookReviews: response.allReviews,
									anotherPage: response.anotherPage,
									numToSkip: response.numToSkip
								}
							});
							_context.next = 12;
							break;

						case 9:
							_context.prev = 9;
							_context.t0 = _context["catch"](0);

							_reactToastify.toast.error('There was an error getting the first page.');

						case 12:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 9]]);
		}));

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	}();
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(75);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = _axios2.default.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://williamhuang.uc.r.appspot.com/api/' : '/api/'
});

exports.default = instance;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _reactRouterConfig = __webpack_require__(8);

var _Header = __webpack_require__(77);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(79);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublicWrapper = function PublicWrapper(_ref) {
	var route = _ref.route,
	    location = _ref.location;


	return _react2.default.createElement(
		'div',
		null,
		(0, _reactRouterDom.matchPath)(location.pathname, '/').isExact ? null : _react2.default.createElement(_Header2.default, null),
		(0, _reactRouterConfig.renderRoutes)(route.routes),
		_react2.default.createElement(_Footer2.default, null)
	);
};

exports.default = {
	component: PublicWrapper
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
	var sticky = _ref.sticky;


	return _react2.default.createElement(
		"nav",
		{ className: "navbar navbar-expand-md navbar-dark bg-dark" + (sticky ? " sticky-top" : ' fixed-top') },
		_react2.default.createElement(
			_styles.HeaderWrapper,
			{ className: "container" },
			_react2.default.createElement(
				_styles.NavBarLink,
				{ to: "/", className: "navbar-left" },
				"William Huang"
			),
			_react2.default.createElement(
				"button",
				{ className: "navbar-toggler collapsed", type: "button", "data-toggle": "collapse",
					"data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false",
					"aria-label": "Toggle navigation" },
				_react2.default.createElement("span", { className: "navbar-toggler-icon" })
			),
			_react2.default.createElement(
				"div",
				{ className: "collapse navbar-collapse", id: "navbarSupportedContent" },
				_react2.default.createElement(
					"ul",
					{ className: "navbar-nav mr-auto" },
					_react2.default.createElement(
						"li",
						{ className: "nav-item", "data-toggle": "collapse", "data-target": ".navbar-collapse.show" },
						_react2.default.createElement(
							_styles.NavBarLink,
							{ to: "/projects" },
							"Projects"
						)
					),
					_react2.default.createElement(
						"li",
						{ className: "nav-item", "data-toggle": "collapse", "data-target": ".navbar-collapse.show" },
						_react2.default.createElement(
							_styles.NavBarLink,
							{ to: "/bookReviews" },
							"Book Reviews"
						)
					),
					_react2.default.createElement(
						"li",
						{ className: "nav-item", "data-toggle": "collapse", "data-target": ".navbar-collapse.show" },
						_react2.default.createElement(
							_styles.NavBarLink,
							{ to: "/monthlyFives" },
							"The Monthly 5"
						)
					),
					_react2.default.createElement(
						"li",
						{ className: "nav-item", "data-toggle": "collapse", "data-target": ".navbar-collapse.show" },
						_react2.default.createElement(
							_styles.NavBarLink,
							{ to: "/guides" },
							"Guides"
						)
					)
				),
				_react2.default.createElement(
					"ul",
					{ className: "navbar-nav navbar-right" },
					_react2.default.createElement(
						"li",
						{ className: "nav-item", "data-toggle": "collapse", "data-target": ".navbar-collapse.show" },
						_react2.default.createElement(
							_styles.NavBarLink,
							{ to: "/events" },
							"Events"
						)
					)
				)
			)
		)
	);
};

exports.default = Header;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NavBarLink = exports.HeaderWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n\t\n\tposition: relative;\n\tpadding-left: 0;\n\tpadding-right: 0;\n\t\n\t.navbar-left {\n\t\tmargin-left: -1rem;\n\t}\n\t.navbar-right {\n\t\tmargin-right: -1rem;\n\t}\n\t\n\t.navbar-toggler {\n\t\toutline: none;\n\t\tborder: 0;\n\t}\n\t\n\t.navbar-toggler > .navbar-toggler-icon {\n\t\tbackground-image: url(", ");\n  \t\ttransform: rotate(180deg);\n\t  \ttransition: transform 0.3s;\n\t}\n\t\n\t.navbar-toggler.collapsed > .navbar-toggler-icon {\n\t\ttransform: rotate(0deg);\n\t}\n\t\n\t\n\t@media only screen and (max-width: ", "px) {\n\t\t.navbar-right {\n\t\t\tmargin-right: 0;\n\t\t}\n\t}\n\t\n"], ["\n\t\n\tposition: relative;\n\tpadding-left: 0;\n\tpadding-right: 0;\n\t\n\t.navbar-left {\n\t\tmargin-left: -1rem;\n\t}\n\t.navbar-right {\n\t\tmargin-right: -1rem;\n\t}\n\t\n\t.navbar-toggler {\n\t\toutline: none;\n\t\tborder: 0;\n\t}\n\t\n\t.navbar-toggler > .navbar-toggler-icon {\n\t\tbackground-image: url(", ");\n  \t\ttransform: rotate(180deg);\n\t  \ttransition: transform 0.3s;\n\t}\n\t\n\t.navbar-toggler.collapsed > .navbar-toggler-icon {\n\t\ttransform: rotate(0deg);\n\t}\n\t\n\t\n\t@media only screen and (max-width: ", "px) {\n\t\t.navbar-right {\n\t\t\tmargin-right: 0;\n\t\t}\n\t}\n\t\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n\n\tfont-weight: 600;\n    font-size: 13px;\n    color: #fff;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-bottom: 2px solid transparent;\n    border-top: 2px solid transparent;\n\tpadding: 0.5rem 1rem;\n\tdisplay: block;\n\t\n\t&:hover {\n\t\tcolor: #fff;\n\t\tborder-bottom: 2px solid #fff;\n\t\ttext-decoration: none;\n\t}\n\n"], ["\n\n\tfont-weight: 600;\n    font-size: 13px;\n    color: #fff;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-bottom: 2px solid transparent;\n    border-top: 2px solid transparent;\n\tpadding: 0.5rem 1rem;\n\tdisplay: block;\n\t\n\t&:hover {\n\t\tcolor: #fff;\n\t\tborder-bottom: 2px solid #fff;\n\t\ttext-decoration: none;\n\t}\n\n"]);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(10);

var _DownCaret = __webpack_require__(18);

var _DownCaret2 = _interopRequireDefault(_DownCaret);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = exports.HeaderWrapper = _styledComponents2.default.div(_templateObject, _DownCaret2.default, _styles.sizes.phone);

var NavBarLink = exports.NavBarLink = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject2);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = __webpack_require__(17);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _Headers = __webpack_require__(9);

var _P = __webpack_require__(19);

var _styles = __webpack_require__(80);

var _reactRouterDom = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
	var history = _ref.history;


	return _react2.default.createElement(
		_styles.FooterWrapper,
		null,
		_react2.default.createElement(
			"div",
			{ className: "container" },
			_react2.default.createElement(
				"div",
				{ className: "row footerInfoRow" },
				_react2.default.createElement(
					"div",
					{ className: "col-sm-8" },
					_react2.default.createElement(
						_Headers.H3,
						{ color: "highlight", onClick: function onClick() {
								return history.push('/');
							} },
						"The blog of Will"
					),
					_react2.default.createElement(
						_P.BodyParagraph,
						{ color: "highlight" },
						"A Brain Dump"
					),
					_react2.default.createElement(
						_styles.FooterSocialIcons,
						null,
						_react2.default.createElement(_SvgIcon2.default, { size: 24, icon: "Github", hover: true,
							onClick: function onClick() {
								return window.open("https://github.com/william2958", "_blank");
							} }),
						_react2.default.createElement(_SvgIcon2.default, { size: 24, icon: "AngelList",
							onClick: function onClick() {
								return window.open("https://angel.co/u/william-huang-18");
							} }),
						_react2.default.createElement(_SvgIcon2.default, { size: 24, icon: "LinkedIn",
							onClick: function onClick() {
								return window.open("https://www.linkedin.com/in/william-h-902213139/");
							} })
					)
				),
				_react2.default.createElement("div", { className: "col-sm-2" }),
				_react2.default.createElement(
					_styles.FooterLinksColumn,
					{ className: "col-sm-2" },
					_react2.default.createElement(
						_Headers.H5,
						{ color: "highlight" },
						"Contact"
					),
					_react2.default.createElement(
						_styles.FooterLink,
						{
							href: "mailto: william2958@gmail.com" },
						"Email Me"
					),
					_react2.default.createElement("hr", null),
					_react2.default.createElement(
						_Headers.H5,
						{ color: "highlight" },
						"My Resume"
					),
					_react2.default.createElement(
						_styles.FooterLink,
						{
							href: "https://storage.googleapis.com/global-resources/resume/WilliamHuang_FullStackDeveloper.pdf",
							highlight: true,
							download: true,
							target: "_blank",
							rel: "noopener noreferrer"
						},
						"Download"
					)
				)
			),
			_react2.default.createElement(
				"div",
				{ className: "row" },
				_react2.default.createElement(
					"div",
					{ className: "col-sm-12 terms" },
					_react2.default.createElement(
						"h5",
						null,
						"TERMS AND CONDITIONS"
					),
					_react2.default.createElement(
						"h5",
						null,
						"\xA92020 - WILLIAMHUANG.CA | ALL RIGHTS RESERVED"
					)
				)
			)
		)
	);
};

exports.default = (0, _reactRouterDom.withRouter)(Footer);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FooterLink = exports.FooterLinksColumn = exports.FooterSocialIcons = exports.FooterWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\n    text-align: left;\n    padding-top: 24px;\n    background-color: #000;\n    color: #fff;\n    \n    .terms {\n\t    display: flex;\n\t    justify-content: space-between;\n\t    padding: 16px 0;\n\t    border-top: 1px solid #ddd;\n\t    margin-top: 35px;\n\t    \n\t    & > h5 {\n\t\t    font-weight: normal;\n\t\t    font-size: 11px;\n\t\t    text-transform: uppercase;\n\t\t}\n\t}\n\t\n\t.footerInfoRow {\n\t\tmargin-left: -30px;\n\t\tmargin-right: -30px;\n\t}\n    \n\t@media only screen and (max-width: ', 'px) {\n\t\t.terms {\n\t\t\tpadding-left: 12px;\n\t\t\tpadding-right: 12px;\n\t\t\tdisplay: block;\n\t\t}\n\t\t.footerInfoRow {\n\t\t\tmargin-left: -15px;\n\t\t\tmargin-right: -15px;\n\t\t}\n\t}\n'], ['\n\n    text-align: left;\n    padding-top: 24px;\n    background-color: #000;\n    color: #fff;\n    \n    .terms {\n\t    display: flex;\n\t    justify-content: space-between;\n\t    padding: 16px 0;\n\t    border-top: 1px solid #ddd;\n\t    margin-top: 35px;\n\t    \n\t    & > h5 {\n\t\t    font-weight: normal;\n\t\t    font-size: 11px;\n\t\t    text-transform: uppercase;\n\t\t}\n\t}\n\t\n\t.footerInfoRow {\n\t\tmargin-left: -30px;\n\t\tmargin-right: -30px;\n\t}\n    \n\t@media only screen and (max-width: ', 'px) {\n\t\t.terms {\n\t\t\tpadding-left: 12px;\n\t\t\tpadding-right: 12px;\n\t\t\tdisplay: block;\n\t\t}\n\t\t.footerInfoRow {\n\t\t\tmargin-left: -15px;\n\t\t\tmargin-right: -15px;\n\t\t}\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\n    display: flex;\n    margin-top: 24px;\n    color: #fff;\n    \n    & > * + * {\n\t    margin-left: 40px;\n\t}\n\t\n\t@media only screen and (max-width: ', 'px) {\n\t\twidth: fit-content;\n\t\tmargin: 24px 0;\n\t}\n'], ['\n\t\n    display: flex;\n    margin-top: 24px;\n    color: #fff;\n    \n    & > * + * {\n\t    margin-left: 40px;\n\t}\n\t\n\t@media only screen and (max-width: ', 'px) {\n\t\twidth: fit-content;\n\t\tmargin: 24px 0;\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\n\ttext-align: right;\n\t\n\t@media only screen and (max-width: ', 'px) {\n\t\ttext-align: left;\t\n\t}\n\t\n'], ['\n\t\n\ttext-align: right;\n\t\n\t@media only screen and (max-width: ', 'px) {\n\t\ttext-align: left;\t\n\t}\n\t\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  \tfont-family: \'Roboto Condensed\', \'Montserrat\', sans-serif;\n    display: block;\n    font-size: 13px;\n    font-weight: 500;\n    color: ', ';\n    text-transform: uppercase;\n    margin: 8px 0;\n    \n    &:hover {\n    \ttext-decoration: none;\n    \tcolor: ', ';\n    }\n'], ['\n  \tfont-family: \'Roboto Condensed\', \'Montserrat\', sans-serif;\n    display: block;\n    font-size: 13px;\n    font-weight: 500;\n    color: ', ';\n    text-transform: uppercase;\n    margin: 8px 0;\n    \n    &:hover {\n    \ttext-decoration: none;\n    \tcolor: ', ';\n    }\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterWrapper = exports.FooterWrapper = _styledComponents2.default.div(_templateObject, _styles.sizes.phone);

var FooterSocialIcons = exports.FooterSocialIcons = _styledComponents2.default.div(_templateObject2, _styles.sizes.phone);

var FooterLinksColumn = exports.FooterLinksColumn = _styledComponents2.default.div(_templateObject3, _styles.sizes.phone);

var FooterLink = exports.FooterLink = _styledComponents2.default.a(_templateObject4, function (_ref) {
	var highlight = _ref.highlight;
	return highlight ? '#c00' : '#A1AEB7';
}, function (_ref2) {
	var highlight = _ref2.highlight;
	return highlight ? '#c00' : '#A1AEB7';
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(82);

var _reactRouterDom = __webpack_require__(10);

var _reactRedux = __webpack_require__(16);

var _reactRouterConfig = __webpack_require__(8);

var _serializeJavascript = __webpack_require__(83);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(14);

var _Routes2 = _interopRequireDefault(_Routes);

var _styledComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sheet = new _styledComponents.ServerStyleSheet();

exports.default = function (req, store, context) {
	var content = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: context },
			_react2.default.createElement(
				'div',
				null,
				(0, _reactRouterConfig.renderRoutes)(_Routes2.default)
			)
		)
	)));
	var styleTags = sheet.getStyleTags();

	return '\n    <html>\n      <head>\n      \n\t    <meta charset="utf-8" />\n\t    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\n<!--\t    <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png">-->\n<!--\t    <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png">-->\n<!--\t    <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png">-->\n\t    <meta name="msapplication-TileColor" content="#da532c">\n\t    <meta name="theme-color" content="#ffffff">\n\t    <!--\n\t      manifest.json provides metadata used when your web app is installed on a\n\t      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n\t    -->\n<!--\t    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />-->\n\t    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">\n\t    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet">\n\t    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">\n\t    <!--\n\t      Notice the use of %PUBLIC_URL% in the tags above.\n\t      It will be replaced with the URL of the `public` folder during the build.\n\t      Only files inside the `public` folder can be referenced from the HTML.\n\t\n\t      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will\n\t      work correctly both with client-side routing and a non-root public URL.\n\t      Learn how to configure a non-root public URL by running `npm run build`.\n\t    -->\n\t\n\t    <meta property="og:title" content="Home | William Huang" />\n\t    <meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />\n\t    <meta property="description" content="Explore my blog, reviews, guides, and more." />\n\t    <meta property="og:url" content="https://www.williamhuang.ca" />\n\t\n\t    <title>Will H.</title>\n\t</head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n        ' + styleTags + '\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(85);
var dotenv = __webpack_require__(86);

if (process.env.NODE_ENV && fs.existsSync('./.env.' + process.env.NODE_ENV)) {
    if (process.env.NODE_ENV !== 'test') console.log('Running in ' + process.env.NODE_ENV + ' environment');
    dotenv.config({ path: './.env.' + process.env.NODE_ENV });
} else if (fs.existsSync('./.env')) {
    console.log('No environment set! Running default .env file');
    dotenv.config();
} else {
    console.log('No environment set! Hope you have your environment declared.');
}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("@google-cloud/storage");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = __webpack_require__(22),
    User = _require.User;

var _require2 = __webpack_require__(95),
    Token = _require2.Token;

var _require3 = __webpack_require__(98),
    BookReview = _require3.BookReview;

var _require4 = __webpack_require__(101),
    Blog = _require4.Blog;

var _require5 = __webpack_require__(104),
    Project = _require5.Project;

var _require6 = __webpack_require__(107),
    MonthlyFive = _require6.MonthlyFive;

var _require7 = __webpack_require__(110),
    Guide = _require7.Guide;

var _require8 = __webpack_require__(113),
    Event = _require8.Event;

var _require9 = __webpack_require__(116),
    Highlight = _require9.Highlight;

var express = __webpack_require__(3);

var auth = __webpack_require__(119);
var core = __webpack_require__(129);
var bookReview = __webpack_require__(130);
var project = __webpack_require__(136);
var blog = __webpack_require__(141);
var guide = __webpack_require__(147);
var monthlyFive = __webpack_require__(153);
var event = __webpack_require__(158);
var highlight = __webpack_require__(162);

var models = {
    User: User,
    BookReview: BookReview,
    Token: Token,
    Blog: Blog,
    Project: Project,
    MonthlyFive: MonthlyFive,
    Guide: Guide,
    Event: Event,
    Highlight: Highlight
};

var routersInit = function routersInit(config) {

    var router = express();

    router.use('/auth', auth(models, _extends({}, config)));
    router.use('/core', core(models, _extends({}, config)));
    router.use('/bookReview', bookReview(models, _extends({}, config)));
    router.use('/project', project(models, _extends({}, config)));
    router.use('/blog', blog(models, _extends({}, config)));
    router.use('/guide', guide(models, _extends({}, config)));
    router.use('/monthlyFive', monthlyFive(models, _extends({}, config)));
    router.use('/event', event(models, _extends({}, config)));
    router.use('/highlight', highlight(models, _extends({}, config)));

    return router;
};

module.exports = routersInit;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(7),
    config = _require.config;

var mongoose = __webpack_require__(1);
var passportLocalMongoose = __webpack_require__(92);

var _require2 = __webpack_require__(93),
    schema = _require2.schema;

schema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

schema.statics.upsertGoogleUser = function (accessToken, refreshToken, profile, cb) {
  var that = this;
  // try {
  //   const user = await this.findOne({ 'googleProvider.id': profile.id });
  //   if (!user) {
  //     const registeredUser = await this.findOne({
  //       email: profile.emails[0].value,
  //     });
  //     if (registeredUser) {
  //       return cb('User already has an account.', null);
  //     }
  //     const newUser = new that({
  //       profile: {
  //         firstName: profile.displayName.split(' ')[0],
  //         lastName: profile.displayName.split(' ')[1],
  //         profilePictureUrl: profile._json.picture,
  //       },
  //       email: profile.emails[0].value,
  //       googleProvider: {
  //         id: profile.id,
  //         token: accessToken,
  //       },
  //       restaurantOwner: {
  //         isOwner: true,
  //       },
  //       isVerified: profile._json.verified_email,
  //     });
  //
  //     const savedUser = await newUser.save();
  //
  //     return cb(null, savedUser);
  //   } else {
  //     return cb(null, user);
  //   }
  // } catch (err) {
  //   console.error('There was an error creating this use: ', err);
  //   return cb(err, null);
  // }
  return this.findOne({
    'googleProvider.id': profile.id
  }, function (err, user) {
    // No user was found, lets create a new one
    if (!user) {
      // No google user was found, but we need to check if a user with this email has already
      // created an account
      that.findOne({
        email: profile.emails[0].value
      }, function (err, user) {
        if (user) {
          return cb({ message: 'There already exists a user with this email' }, null);
        } else {
          var newUser = new that({
            profile: {
              firstName: profile.displayName.split(' ')[0],
              lastName: profile.displayName.split(' ')[1],
              profilePictureUrl: profile._json.picture
            },
            email: profile.emails[0].value,
            googleProvider: {
              id: profile.id,
              token: accessToken
            },
            restaurantOwner: {
              isOwner: true
            },
            isVerified: profile._json.verified_email
          });

          newUser.save(function (error, savedUser) {
            if (error) {
              console.error('Error saving new google user: ', error);
            }
            // Add the user to our mailchimp
            // No need to wait for this to complete
            config.mailchimp.post('/lists/' + config.mailchimpListId + '/members', {
              email_address: profile.emails[0].value,
              status: 'subscribed',
              merge_fields: {
                FNAME: profile.displayName.split(' ')[0],
                LNAME: profile.displayName.split(' ')[1]
              }
            });
            return cb(error, savedUser);
          });
        }
      });
    } else {
      return cb(err, user);
    }
  });
};

var User = mongoose.model('User', schema);
module.exports = { User: User };

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("passport-local-mongoose");

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var _require = __webpack_require__(94),
    EMAIL = _require.EMAIL;

var Schema = mongoose.Schema;

var schema = new Schema({
  email: {
    type: String,
    required: [true],
    unique: true,
    validate: {
      validator: function validator(email) {
        return EMAIL.test(email);
      },
      message: 'Field [email] wrong format.'
    }
  },
  profile: {
    firstName: {
      type: String,
      required: [true]
    },
    lastName: {
      type: String,
      required: [true]
    }
  },

  googleProvider: {
    type: {
      id: String,
      token: String
    },
    select: false
  },

  admin: {
    type: Number,
    default: 0
  }

});

module.exports = { schema: schema };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EMAIL = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var PASSWORD = /[a-zA-Z-0-9]{6,20}/;

module.exports = {
	EMAIL: EMAIL,
	PASSWORD: PASSWORD
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(96),
    Token = _require.Token;

module.exports = { Token: Token };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var _require = __webpack_require__(97),
    schema = _require.schema;

var Token = mongoose.model('Token', schema);
module.exports = { Token: Token };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var schema = new Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

module.exports = { schema: schema };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(99),
    BookReview = _require.BookReview;

module.exports = { BookReview: BookReview };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var _require = __webpack_require__(100),
    schema = _require.schema;

var BookReview = mongoose.model('BookReview', schema);
module.exports = { BookReview: BookReview };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
	owner: {
		type: ObjectId,
		ref: 'User',
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	},

	title: String,
	author: String,
	recommended: {
		type: Boolean,
		default: false
	},
	category: String,
	coverURL: String,
	urlString: {
		type: String,
		required: true,
		index: true
	},

	rating: {
		type: String
	},

	contentPreview: {
		type: String
	},
	content: {
		type: String
	},

	isPublished: {
		type: Boolean,
		default: false
	},
	publishDate: {
		type: Date
	}

});

module.exports = { schema: schema };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(102),
    Blog = _require.Blog;

module.exports = { Blog: Blog };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var _require = __webpack_require__(103),
    schema = _require.schema;

var Blog = mongoose.model('Blog', schema);
module.exports = { Blog: Blog };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
	owner: {
		type: ObjectId,
		ref: 'User',
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	},

	title: String,
	contentPreview: String,

	heroURL: String,
	previewImageURL: String,
	urlString: {
		type: String,
		required: true,
		index: true
	},

	// DraftJS content saved as string json
	content: {
		type: String
	},

	isPublished: {
		type: Boolean,
		default: false
	},
	publishDate: {
		type: Date
	}

});

module.exports = { schema: schema };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(105),
    Project = _require.Project;

module.exports = { Project: Project };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var _require = __webpack_require__(106),
    schema = _require.schema;

var Project = mongoose.model('Project', schema);
module.exports = { Project: Project };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
	owner: {
		type: ObjectId,
		ref: 'User',
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	},

	title: String,
	contentPreview: String,

	category: String,
	techStack: [String],
	liveLink: String,
	spotlight: {
		type: Boolean,
		default: false
	},
	urlString: {
		type: String,
		required: true,
		index: true
	},

	heroURL: String,
	previewImageURL: String,

	// DraftJS content saved as string json
	content: {
		type: String
	},

	isPublished: {
		type: Boolean,
		default: false
	},
	publishDate: {
		type: Date
	}

});

module.exports = { schema: schema };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(108),
    MonthlyFive = _require.MonthlyFive;

module.exports = { MonthlyFive: MonthlyFive };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var _require = __webpack_require__(109),
    schema = _require.schema;

var MonthlyFive = mongoose.model('MonthlyFive', schema);
module.exports = { MonthlyFive: MonthlyFive };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
	owner: {
		type: ObjectId,
		ref: 'User',
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	},

	urlString: {
		type: String,
		required: true,
		index: true
	},

	title: String,
	contentPreview: String,

	month: Number,
	year: Number,

	heroURL: String,
	previewImageURL: String,

	// DraftJS content saved as string json
	content: {
		type: String
	},

	isPublished: {
		type: Boolean,
		default: false
	},
	publishDate: {
		type: Date
	}

});

module.exports = { schema: schema };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(111),
    Guide = _require.Guide;

module.exports = { Guide: Guide };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var _require = __webpack_require__(112),
    schema = _require.schema;

var Guide = mongoose.model('Guide', schema);
module.exports = { Guide: Guide };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
	owner: {
		type: ObjectId,
		ref: 'User',
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	},

	title: String,
	contentPreview: String,
	technology: [String],
	urlString: {
		type: String,
		required: true,
		index: true
	},

	social: {
		facebook: String
	},

	iconURL: String,
	previewImageURL: String,

	// DraftJS content saved as string json
	content: {
		type: String
	},

	isPublished: {
		type: Boolean,
		default: false
	},
	publishDate: {
		type: Date
	}

});

module.exports = { schema: schema };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(114),
    Event = _require.Event;

module.exports = { Event: Event };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var _require = __webpack_require__(115),
    schema = _require.schema;

var Event = mongoose.model('Event', schema);
module.exports = { Event: Event };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({

	owner: {
		type: ObjectId,
		ref: 'User',
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	},

	title: String,
	contentPreview: String,
	eventDate: Date,
	keyInfo: {
		type: [String],
		default: []
	},

	urlString: {
		type: String,
		required: true,
		index: true
	},

	heroURL: String,

	content: {
		type: String
	},

	recap: {
		type: String
	},

	lastUpdated: {
		type: Date
	},
	isPublished: {
		type: Boolean,
		default: false
	},
	publishDate: {
		type: Date
	}

});

module.exports = { schema: schema };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(117),
    Highlight = _require.Highlight;

module.exports = { Highlight: Highlight };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);

var _require = __webpack_require__(118),
    schema = _require.schema;

var Highlight = mongoose.model('Highlight', schema);
module.exports = { Highlight: Highlight };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({

	owner: {
		type: ObjectId,
		ref: 'User',
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	},

	dataType: {
		type: String,
		required: true
	},

	dataRef: {
		type: ObjectId,
		required: true
	}

});

module.exports = { schema: schema };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(3),
    router = _require.Router;

var passport = __webpack_require__(23);

var _require2 = __webpack_require__(4),
    authenticate = _require2.authenticate,
    generateAccessToken = _require2.generateAccessToken;

var _require3 = __webpack_require__(127),
    getAdmin = _require3.getAdmin;

var signIn = __webpack_require__(128);

// const {
//     adminSignUp
// } = require('./post');

module.exports = function (models, _ref) {
    var config = _ref.config;


    var api = new router();

    api.get('/getAdmin', authenticate, getAdmin(models));

    api.post('/adminSignIn', passport.authenticate('local', { session: false, scope: [] }), generateAccessToken, signIn);

    // Prevent sign ups - only 1 admin
    // api.post(
    //     '/adminSignUp',
    //     adminSignUp(models),
    //     passport.authenticate('local', { session: false, scope: [] }),
    //     generateAccessToken,
    //     signIn,
    // );

    return api;
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jwt = __webpack_require__(121);
var expressJwt = __webpack_require__(122);

var _require = __webpack_require__(7),
    config = _require.config;

var authenticate = function authenticate(req, res, next) {
  return expressJwt({
    secret: config.passport.secretAuthToken,
    getToken: function getToken(req) {
      return req.cookies.token;
    }
  })(req, res, next);
};

var generateAccessToken = function generateAccessToken(req, res, next) {
  if (!req.user) {
    return res.status(401).send({
      message: 'User not authenticated'
    });
  }
  req.token = req.token || {};
  var token = jwt.sign({
    id: req.user.id
  }, config.passport.secretAuthToken, {
    expiresIn: config.passport.tokenTime
  });

  req.token = token;
  res.cookie('token', token, { httpOnly: true });

  next();
};

module.exports = {
  authenticate: authenticate,
  generateAccessToken: generateAccessToken
};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Multer = __webpack_require__(124);

var MAX_FILE_SIZE = 15;

var multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: MAX_FILE_SIZE * 1024 * 1024 // no larger than 15mb, you can change as needed.
    }
});

module.exports = {
    multer: multer
};

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var uploadImage = function uploadImage(_ref, _ref2) {
    var bucket = _ref2.bucket;

    _objectDestructuringEmpty(_ref);

    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
            var formattedPath, formattedName, blob, blobStream;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (req.file) {
                                _context.next = 2;
                                break;
                            }

                            return _context.abrupt('return', res.status(400).send({
                                message: 'No file uploaded!'
                            }));

                        case 2:
                            if (req.body.path) {
                                _context.next = 4;
                                break;
                            }

                            return _context.abrupt('return', res.status(401).send({
                                message: 'Uploads to the root directory are forbidden'
                            }));

                        case 4:
                            _context.prev = 4;

                            // Get a reference to the bucket file, and make sure to save in the right directory
                            formattedPath = req.body.path.replace(/ /g, '_');
                            formattedName = void 0;

                            if (req.file.originalname) {
                                formattedName = req.file.originalname.replace(/ /g, '_');
                            } else {
                                formattedName = 'unnamed_file';
                            }
                            blob = bucket.file(formattedPath + Date.now() + '_' + formattedName);
                            // Start the upload

                            _context.next = 11;
                            return blob.createWriteStream({
                                metadata: {
                                    contentType: req.file.mimetype
                                }
                            });

                        case 11:
                            blobStream = _context.sent;


                            blobStream.on('error', function (err) {
                                console.error('There was an error uploading that file: ', err);
                                return res.status(400).send({
                                    message: 'Could not upload that file'
                                });
                            });

                            blobStream.on('finish', function () {
                                // The public URL can be used to access the file via HTTP.
                                var publicUrl = 'https://storage.googleapis.com/' + bucket.name + '/' + blob.name;

                                // Make the image public to the web
                                blob.makePublic().then(function () {
                                    req.imageURL = publicUrl;
                                    next();
                                    // res.status(200).send({
                                    //   message: `Success!\n Image uploaded to ${publicUrl}`,
                                    //   url: publicUrl
                                    // });
                                });
                            });

                            blobStream.end(req.file.buffer);
                            _context.next = 20;
                            break;

                        case 17:
                            _context.prev = 17;
                            _context.t0 = _context['catch'](4);

                            res.status(400).send({
                                message: 'There was an error uploading that file',
                                error: _context.t0
                            });

                        case 20:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[4, 17]]);
        }));

        return function (_x, _x2, _x3) {
            return _ref3.apply(this, arguments);
        };
    }();
};

module.exports = { uploadImage: uploadImage };

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(11),
    curry = _require.curry;

var _require2 = __webpack_require__(24),
    NotFoundError = _require2.NotFoundError;

var STATUSES = {
	SUCCESS: 200,
	CREATED: 201,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
	BAD_GATEWAY: 502
};

var sendResponse = function sendResponse(res, data) {
	var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STATUSES.SUCCESS;
	return res.status(status).json(data).end();
};

var withoutErrors = function withoutErrors(next, callback) {
	return function (err, updatedTank) {
		if (err) {
			return next(err);
		}
		return callback && callback(updatedTank);
	};
};

var sendOne = curry(function (res, entity) {
	if (!entity) {
		throw new NotFoundError();
	}

	return sendResponse(res, entity);
});

var sendList = curry(function (res, entityList) {
	return sendResponse(res, entityList);
});
var sendCreated = curry(function (res, entity) {
	return sendResponse(res, entity);
});
var sendUpdated = curry(function (res, updatedEntity) {
	return sendResponse(res, updatedEntity);
});
var sendDeleted = curry(function (res) {
	return sendResponse(res, null, STATUSES.NO_CONTENT);
});
var sendAccepted = function sendAccepted(res) {
	return function () {
		return sendResponse(res, null);
	};
};

module.exports = {
	sendOne: sendOne,
	sendList: sendList,
	sendCreated: sendCreated,
	sendUpdated: sendUpdated,
	sendDeleted: sendDeleted,
	sendAccepted: sendAccepted,
	withoutErrors: withoutErrors
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getAdmin = function getAdmin(_ref) {
    var User = _ref.User;
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var user;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:

                            if (!req.user) {
                                res.status(404).send({
                                    message: 'Could not find user'
                                });
                            }
                            _context.prev = 1;
                            _context.next = 4;
                            return User.findById(req.user.id);

                        case 4:
                            user = _context.sent;


                            res.status(200).send({
                                user: user
                            });
                            _context.next = 11;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](1);

                            res.status(401).send({
                                message: 'User not found'
                            });

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[1, 8]]);
        }));

        return function (_x, _x2) {
            return _ref2.apply(this, arguments);
        };
    }();
};

module.exports = {
    getAdmin: getAdmin
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    sendOne = _require.sendOne;

var signIn = function signIn(req, res) {
	var token = req.token,
	    user = req.user;

	return sendOne(res, { user: user, token: token });
};

module.exports = signIn;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    uploadImage = _require.uploadImage,
    multer = _require.multer,
    authenticate = _require.authenticate;

var addImage = function addImage(req, res) {
	res.status(200).send({
		imageURL: req.imageURL
	});
};

var _require2 = __webpack_require__(3),
    router = _require2.Router;

module.exports = function (models, _ref) {
	var config = _ref.config;


	var api = new router();

	api.post('/uploadImage', authenticate, multer.single('file'), uploadImage(models, config), addImage);

	return api;
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    uploadImage = _require.uploadImage,
    multer = _require.multer;

var _require2 = __webpack_require__(25),
    addBookImage = _require2.addBookImage;

var _require3 = __webpack_require__(3),
    router = _require3.Router;

var _require4 = __webpack_require__(4),
    authenticate = _require4.authenticate;

var _require5 = __webpack_require__(131),
    getBookReview = _require5.getBookReview,
    getFilteredBookReviews = _require5.getFilteredBookReviews,
    getRecentBookReviews = _require5.getRecentBookReviews,
    getBookReviewAdmin = _require5.getBookReviewAdmin,
    getNumRecentBookReviews = _require5.getNumRecentBookReviews,
    getBookReviewFromString = _require5.getBookReviewFromString;

var _require6 = __webpack_require__(25),
    createBookReview = _require6.createBookReview;

var _require7 = __webpack_require__(134),
    updateBookReview = _require7.updateBookReview;

var _require8 = __webpack_require__(135),
    deleteBookReview = _require8.deleteBookReview;

module.exports = function (models, _ref) {
    var config = _ref.config;


    var api = new router();

    api.get('/getBookReviewFromString', getBookReviewFromString(models));

    api.get('/getBookReview', getBookReview(models));

    api.get('/getFilteredBookReviews', getFilteredBookReviews(models));

    // Get a certain number of book reviews
    api.get('/getNumRecentBookReviews', getNumRecentBookReviews(models));
    // This is to get book reviews based on skipNum and category
    api.get('/getRecentBookReviews', getRecentBookReviews(models));

    api.get('/getBookReviewAdmin', authenticate, getBookReviewAdmin(models));

    api.post('/createBookReview', authenticate, createBookReview(models));

    api.post('/uploadBookImage', authenticate, multer.single('file'), uploadImage(models, config), addBookImage);

    api.put('/updateBookReview', authenticate, updateBookReview(models));

    api.delete('/deleteBookReview', authenticate, deleteBookReview(models));

    return api;
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(132),
    getBookReview = _require.getBookReview,
    getFilteredBookReviews = _require.getFilteredBookReviews,
    getRecentBookReviews = _require.getRecentBookReviews,
    getNumRecentBookReviews = _require.getNumRecentBookReviews,
    getBookReviewFromString = _require.getBookReviewFromString;

var _require2 = __webpack_require__(133),
    getBookReviewAdmin = _require2.getBookReviewAdmin;

module.exports = {
    getBookReview: getBookReview,
    getFilteredBookReviews: getFilteredBookReviews,
    getRecentBookReviews: getRecentBookReviews,
    getBookReviewAdmin: getBookReviewAdmin,
    getNumRecentBookReviews: getNumRecentBookReviews,
    getBookReviewFromString: getBookReviewFromString
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = __webpack_require__(26),
    LIMIT_PER_PAGE = _require.LIMIT_PER_PAGE,
    propertiesToProject = _require.propertiesToProject;

var getBookReview = function getBookReview(_ref) {
    var BookReview = _ref.BookReview;
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var bookReviewId, bookReview;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            bookReviewId = req.query.bookReviewId;
                            _context.prev = 1;
                            _context.next = 4;
                            return BookReview.findOne({ _id: bookReviewId });

                        case 4:
                            bookReview = _context.sent;

                            if (!bookReview) {
                                _context.next = 9;
                                break;
                            }

                            return _context.abrupt("return", res.status(200).send({
                                bookReview: bookReview
                            }));

                        case 9:
                            return _context.abrupt("return", res.status(401).send({
                                message: "There is no book review with that id."
                            }));

                        case 10:
                            _context.next = 15;
                            break;

                        case 12:
                            _context.prev = 12;
                            _context.t0 = _context["catch"](1);
                            return _context.abrupt("return", res.status(400).send({
                                message: "There was an error getting the book review."
                            }));

                        case 15:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[1, 12]]);
        }));

        return function (_x, _x2) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var getBookReviewFromString = function getBookReviewFromString(_ref3) {
    var BookReview = _ref3.BookReview;
    return function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            var urlString, bookReview;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            urlString = req.query.urlString;
                            _context2.prev = 1;
                            _context2.next = 4;
                            return BookReview.findOne({ urlString: urlString });

                        case 4:
                            bookReview = _context2.sent;

                            if (!bookReview) {
                                _context2.next = 9;
                                break;
                            }

                            return _context2.abrupt("return", res.status(200).send({
                                bookReview: bookReview
                            }));

                        case 9:
                            return _context2.abrupt("return", res.status(401).send({
                                message: "There is no book review with that id."
                            }));

                        case 10:
                            _context2.next = 15;
                            break;

                        case 12:
                            _context2.prev = 12;
                            _context2.t0 = _context2["catch"](1);
                            return _context2.abrupt("return", res.status(400).send({
                                message: "There was an error getting the book review."
                            }));

                        case 15:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[1, 12]]);
        }));

        return function (_x3, _x4) {
            return _ref4.apply(this, arguments);
        };
    }();
};

var getNumRecentBookReviews = function getNumRecentBookReviews(_ref5) {
    var BookReview = _ref5.BookReview;
    return function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
            var numReviews, allReviews;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            numReviews = req.query.numReviews;
                            _context3.prev = 1;

                            if (!(!numReviews || isNaN(numReviews))) {
                                _context3.next = 4;
                                break;
                            }

                            return _context3.abrupt("return", res.status(400).send({
                                message: "Please include how many items to return."
                            }));

                        case 4:
                            _context3.next = 6;
                            return BookReview.aggregate([{
                                $match: {
                                    isPublished: true
                                }
                            }, {
                                $sort: {
                                    publishDate: -1
                                }
                            }, {
                                $limit: parseInt(numReviews)
                            }, {
                                $project: propertiesToProject
                            }]);

                        case 6:
                            allReviews = _context3.sent;


                            res.status(200).send({
                                allReviews: allReviews
                            });
                            _context3.next = 13;
                            break;

                        case 10:
                            _context3.prev = 10;
                            _context3.t0 = _context3["catch"](1);
                            return _context3.abrupt("return", res.status(400).send({
                                message: "There was an error getting the book reviews."
                            }));

                        case 13:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[1, 10]]);
        }));

        return function (_x5, _x6) {
            return _ref6.apply(this, arguments);
        };
    }();
};

var getRecentBookReviews = function getRecentBookReviews(_ref7) {
    var BookReview = _ref7.BookReview;
    return function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
            var _req$query, numSkip, category, options, allReviews, numToSkip, anotherPage;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _req$query = req.query, numSkip = _req$query.numSkip, category = _req$query.category;
                            options = {
                                isPublished: true
                            };


                            if (category === 'recommended') {
                                options.recommended = true;
                            } else if (category) {
                                options.category = category;
                            }

                            _context4.prev = 3;
                            allReviews = void 0;
                            numToSkip = void 0;

                            if (!(!numSkip || isNaN(numSkip))) {
                                _context4.next = 13;
                                break;
                            }

                            _context4.next = 9;
                            return BookReview.aggregate([{
                                $match: options
                            }, {
                                $sort: {
                                    publishDate: -1
                                }
                            }, {
                                $limit: LIMIT_PER_PAGE + 1
                            }, {
                                $project: propertiesToProject
                            }]);

                        case 9:
                            allReviews = _context4.sent;

                            numToSkip = LIMIT_PER_PAGE;
                            _context4.next = 17;
                            break;

                        case 13:
                            _context4.next = 15;
                            return BookReview.aggregate([{
                                $match: _extends({
                                    isPublished: true
                                }, category && { category: category })
                            }, {
                                $sort: {
                                    publishDate: -1
                                }
                            }, {
                                $skip: parseInt(numSkip)
                            }, {
                                $limit: LIMIT_PER_PAGE + 1
                            }, {
                                $project: propertiesToProject
                            }]);

                        case 15:
                            allReviews = _context4.sent;


                            numToSkip = parseInt(numSkip) + LIMIT_PER_PAGE;

                        case 17:
                            anotherPage = false;

                            if (allReviews.length > LIMIT_PER_PAGE) {
                                // There is another page
                                anotherPage = true;
                                allReviews.pop();
                            }

                            res.status(200).send({
                                allReviews: allReviews,
                                anotherPage: anotherPage,
                                numToSkip: numToSkip
                            });
                            _context4.next = 25;
                            break;

                        case 22:
                            _context4.prev = 22;
                            _context4.t0 = _context4["catch"](3);
                            return _context4.abrupt("return", res.status(400).send({
                                message: "There was an error getting the book reviews."
                            }));

                        case 25:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined, [[3, 22]]);
        }));

        return function (_x7, _x8) {
            return _ref8.apply(this, arguments);
        };
    }();
};

var getFilteredBookReviews = function getFilteredBookReviews(_ref9) {
    var BookReview = _ref9.BookReview;
    return function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
            var category, allReviews;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            category = req.query.category;

                            if (category) {
                                _context5.next = 3;
                                break;
                            }

                            return _context5.abrupt("return", res.status(400).send({
                                message: "Please specify the category"
                            }));

                        case 3:
                            _context5.prev = 3;
                            _context5.next = 6;
                            return BookReview.aggregate([{
                                $match: {
                                    isPublished: true,
                                    category: category
                                }
                            }, {
                                $sort: {
                                    publishDate: -1
                                }
                            }, {
                                $project: propertiesToProject
                            }]);

                        case 6:
                            allReviews = _context5.sent;

                            res.status(200).send({
                                allReviews: allReviews
                            });
                            _context5.next = 13;
                            break;

                        case 10:
                            _context5.prev = 10;
                            _context5.t0 = _context5["catch"](3);
                            return _context5.abrupt("return", res.status(400).send({
                                message: "There was an error getting the book reviews."
                            }));

                        case 13:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined, [[3, 10]]);
        }));

        return function (_x9, _x10) {
            return _ref10.apply(this, arguments);
        };
    }();
};

module.exports = {
    getBookReview: getBookReview,
    getFilteredBookReviews: getFilteredBookReviews,
    getRecentBookReviews: getRecentBookReviews,
    getNumRecentBookReviews: getNumRecentBookReviews,
    getBookReviewFromString: getBookReviewFromString
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = __webpack_require__(26),
    propertiesToProject = _require.propertiesToProject;

var getBookReviewAdmin = function getBookReviewAdmin(_ref) {
    var BookReview = _ref.BookReview;
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var isPublished, bookReviews;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            isPublished = req.query.isPublished;
                            _context.next = 4;
                            return BookReview.aggregate([{
                                $match: {
                                    isPublished: isPublished === 'true'
                                }
                            }, {
                                $sort: {
                                    created: -1
                                }
                            }, {
                                $project: propertiesToProject
                            }]);

                        case 4:
                            bookReviews = _context.sent;


                            res.status(200).send({
                                bookReviews: bookReviews
                            });
                            _context.next = 11;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](0);
                            return _context.abrupt('return', res.status(400).send({
                                message: "There was an error getting the book drafts."
                            }));

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 8]]);
        }));

        return function (_x, _x2) {
            return _ref2.apply(this, arguments);
        };
    }();
};

module.exports = {
    getBookReviewAdmin: getBookReviewAdmin
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var updateBookReview = function updateBookReview(_ref) {
    var BookReview = _ref.BookReview;
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var _req$body, category, content, contentPreview, title, isPublished, coverURL, rating, bookReviewId, recommended, urlString, author, prevBookReview, updateData, setBookReview;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _req$body = req.body, category = _req$body.category, content = _req$body.content, contentPreview = _req$body.contentPreview, title = _req$body.title, isPublished = _req$body.isPublished, coverURL = _req$body.coverURL, rating = _req$body.rating, bookReviewId = _req$body.bookReviewId, recommended = _req$body.recommended, urlString = _req$body.urlString, author = _req$body.author;
                            _context.prev = 1;
                            _context.next = 4;
                            return BookReview.findOne({ _id: bookReviewId });

                        case 4:
                            prevBookReview = _context.sent;
                            updateData = _extends({}, category && { category: category }, content && { content: content }, contentPreview && { contentPreview: contentPreview }, title && { title: title }, coverURL && { coverURL: coverURL }, rating && { rating: rating }, typeof isPublished !== 'undefined' && { isPublished: isPublished }, typeof recommended !== 'undefined' && { recommended: recommended }, urlString && { urlString: urlString }, author && { author: author });


                            if (isPublished && !prevBookReview.isPublished) {
                                updateData.publishDate = new Date();
                            }
                            _context.next = 9;
                            return BookReview.findOneAndUpdate({ _id: bookReviewId }, {
                                $set: updateData
                            }, {
                                new: true
                            });

                        case 9:
                            setBookReview = _context.sent;
                            return _context.abrupt('return', res.status(200).send({
                                bookReview: setBookReview
                            }));

                        case 13:
                            _context.prev = 13;
                            _context.t0 = _context['catch'](1);
                            return _context.abrupt('return', res.status(400).send({
                                message: "Could not update book review"
                            }));

                        case 16:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[1, 13]]);
        }));

        return function (_x, _x2) {
            return _ref2.apply(this, arguments);
        };
    }();
};

module.exports = {
    updateBookReview: updateBookReview
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var deleteBookReview = function deleteBookReview(_ref) {
    var BookReview = _ref.BookReview;
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var bookReviewId, deletedReview;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            bookReviewId = req.body.bookReviewId;

                            if (bookReviewId) {
                                _context.next = 3;
                                break;
                            }

                            return _context.abrupt("return", res.status(404).send({
                                message: "Could not find that book review."
                            }));

                        case 3:
                            _context.prev = 3;
                            _context.next = 6;
                            return BookReview.findOneAndDelete({
                                _id: bookReviewId
                            });

                        case 6:
                            deletedReview = _context.sent;
                            return _context.abrupt("return", res.status(200).send({
                                deletedReview: deletedReview
                            }));

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context["catch"](3);
                            return _context.abrupt("return", res.status(400).send({
                                message: "Could not delete book review"
                            }));

                        case 13:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[3, 10]]);
        }));

        return function (_x, _x2) {
            return _ref2.apply(this, arguments);
        };
    }();
};

module.exports = {
    deleteBookReview: deleteBookReview
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    authenticate = _require.authenticate;

var _require2 = __webpack_require__(3),
    router = _require2.Router;

var _require3 = __webpack_require__(137),
    getProject = _require3.getProject,
    getRecentProjects = _require3.getRecentProjects,
    getNumRecentProjects = _require3.getNumRecentProjects,
    getProjectAdmin = _require3.getProjectAdmin,
    getSpotlightProject = _require3.getSpotlightProject,
    getProjectFromString = _require3.getProjectFromString;

var _require4 = __webpack_require__(138),
    createProject = _require4.createProject;

var _require5 = __webpack_require__(139),
    updateProject = _require5.updateProject;

var _require6 = __webpack_require__(140),
    deleteProject = _require6.deleteProject;

module.exports = function (models, _ref) {
	var config = _ref.config;


	var api = new router();

	api.get('/getProject', getProject(models));

	api.get('/getProjectFromString', getProjectFromString(models));

	// Get certain number of book reviews
	api.get('/getNumRecentProjects', getNumRecentProjects(models));
	// Based on num skip and category
	api.get('/getRecentProjects', getRecentProjects(models));

	api.get('/getSpotlightProject', getSpotlightProject(models));

	// Get either published projects or drafts
	api.get('/getProjectAdmin', authenticate, getProjectAdmin(models));

	api.post('/createProject', authenticate, createProject(models));

	api.put('/updateProject', authenticate, updateProject(models));

	api.delete('/deleteProject', authenticate, deleteProject(models));

	return api;
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = __webpack_require__(27),
    propertiesToProject = _require.propertiesToProject,
    LIMIT_PER_PAGE = _require.LIMIT_PER_PAGE;

var getProjectAdmin = function getProjectAdmin(_ref) {
	var Project = _ref.Project;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var isPublished, projects;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							isPublished = req.query.isPublished;
							_context.next = 4;
							return Project.aggregate([{
								$match: {
									isPublished: isPublished === 'true'
								}
							}, {
								$sort: {
									created: -1
								}
							}, {
								$project: propertiesToProject
							}]);

						case 4:
							projects = _context.sent;


							res.status(200).send({
								projects: projects
							});

							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context['catch'](0);
							return _context.abrupt('return', res.status(400).send({
								message: "there was an error getting the admin projects."
							}));

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 8]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var getProject = function getProject(_ref3) {
	var Project = _ref3.Project;
	return function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var projectId, project;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							projectId = req.query.projectId;
							_context2.prev = 1;
							_context2.next = 4;
							return Project.findOne({ _id: projectId });

						case 4:
							project = _context2.sent;

							if (!project) {
								_context2.next = 9;
								break;
							}

							return _context2.abrupt('return', res.status(200).send({
								project: project
							}));

						case 9:
							return _context2.abrupt('return', res.status(401).send({
								message: "There is no Project with that id."
							}));

						case 10:
							_context2.next = 16;
							break;

						case 12:
							_context2.prev = 12;
							_context2.t0 = _context2['catch'](1);

							console.error('Error on getting Project: ', _context2.t0);
							return _context2.abrupt('return', res.status(400).send({
								message: "There was an error getting the Project."
							}));

						case 16:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined, [[1, 12]]);
		}));

		return function (_x3, _x4) {
			return _ref4.apply(this, arguments);
		};
	}();
};

var getProjectFromString = function getProjectFromString(_ref5) {
	var Project = _ref5.Project;
	return function () {
		var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
			var urlString, project;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							urlString = req.query.urlString;
							_context3.prev = 1;
							_context3.next = 4;
							return Project.findOne({ urlString: urlString });

						case 4:
							project = _context3.sent;

							if (!project) {
								_context3.next = 9;
								break;
							}

							return _context3.abrupt('return', res.status(200).send({
								project: project
							}));

						case 9:
							return _context3.abrupt('return', res.status(401).send({
								message: "There is no book review with that id."
							}));

						case 10:
							_context3.next = 15;
							break;

						case 12:
							_context3.prev = 12;
							_context3.t0 = _context3['catch'](1);
							return _context3.abrupt('return', res.status(400).send({
								message: "There was an error getting the book review."
							}));

						case 15:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined, [[1, 12]]);
		}));

		return function (_x5, _x6) {
			return _ref6.apply(this, arguments);
		};
	}();
};

var getNumRecentProjects = function getNumRecentProjects(_ref7) {
	var Project = _ref7.Project;
	return function () {
		var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
			var numProjects, allProjects;
			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							numProjects = req.query.numProjects;
							_context4.prev = 1;

							if (!(!numProjects || isNaN(numProjects))) {
								_context4.next = 4;
								break;
							}

							return _context4.abrupt('return', res.status(400).send({
								message: "Please include how many items to return."
							}));

						case 4:
							_context4.next = 6;
							return Project.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$limit: parseInt(numProjects)
							}, {
								$project: propertiesToProject
							}]);

						case 6:
							allProjects = _context4.sent;


							res.status(200).send({
								allProjects: allProjects
							});
							_context4.next = 14;
							break;

						case 10:
							_context4.prev = 10;
							_context4.t0 = _context4['catch'](1);

							console.error('Error getting num recent projects: ', _context4.t0);
							return _context4.abrupt('return', res.status(400).send({
								message: "There was an error getting the projects."
							}));

						case 14:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, undefined, [[1, 10]]);
		}));

		return function (_x7, _x8) {
			return _ref8.apply(this, arguments);
		};
	}();
};

var getRecentProjects = function getRecentProjects(_ref9) {
	var Project = _ref9.Project;
	return function () {
		var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
			var _req$query, numSkip, category, allProjects, numToSkip, anotherPage;

			return regeneratorRuntime.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_req$query = req.query, numSkip = _req$query.numSkip, category = _req$query.category;
							_context5.prev = 1;
							allProjects = void 0;
							numToSkip = void 0;

							if (!(!numSkip || isNaN(numSkip))) {
								_context5.next = 11;
								break;
							}

							_context5.next = 7;
							return Project.aggregate([{
								$match: _extends({
									isPublished: true
								}, category && { category: category })
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$limit: LIMIT_PER_PAGE + 1
							}, {
								$project: propertiesToProject
							}]);

						case 7:
							allProjects = _context5.sent;

							numToSkip = LIMIT_PER_PAGE;
							_context5.next = 15;
							break;

						case 11:
							_context5.next = 13;
							return Project.aggregate([{
								$match: _extends({
									isPublished: true
								}, category && { category: category })
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$skip: parseInt(numSkip)
							}, {
								$limit: LIMIT_PER_PAGE + 1
							}, {
								$project: propertiesToProject
							}]);

						case 13:
							allProjects = _context5.sent;


							numToSkip = parseInt(numSkip) + LIMIT_PER_PAGE;

						case 15:
							anotherPage = false;

							if (allProjects.length > LIMIT_PER_PAGE) {
								// There is another page
								anotherPage = true;
								allProjects.pop();
							}

							res.status(200).send({
								allProjects: allProjects,
								anotherPage: anotherPage,
								numToSkip: numToSkip
							});
							_context5.next = 24;
							break;

						case 20:
							_context5.prev = 20;
							_context5.t0 = _context5['catch'](1);

							console.error('Error filtering projects: ', _context5.t0);
							return _context5.abrupt('return', res.status(400).send({
								message: "There was an error getting the projects."
							}));

						case 24:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, undefined, [[1, 20]]);
		}));

		return function (_x9, _x10) {
			return _ref10.apply(this, arguments);
		};
	}();
};

var getFilteredProjects = function getFilteredProjects(_ref11) {
	var Project = _ref11.Project;
	return function () {
		var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
			var category, allProjects;
			return regeneratorRuntime.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							category = req.query.category;

							if (category) {
								_context6.next = 3;
								break;
							}

							return _context6.abrupt('return', res.status(400).send({
								message: "Please specify the category"
							}));

						case 3:
							_context6.prev = 3;
							_context6.next = 6;
							return Project.aggregate([{
								$match: {
									isPublished: true,
									category: category
								}
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$project: propertiesToProject
							}]);

						case 6:
							allProjects = _context6.sent;

							res.status(200).send({
								allProjects: allProjects
							});
							_context6.next = 14;
							break;

						case 10:
							_context6.prev = 10;
							_context6.t0 = _context6['catch'](3);

							console.error('Error filtering projects: ', _context6.t0);
							return _context6.abrupt('return', res.status(400).send({
								message: "There was an error getting the projects."
							}));

						case 14:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, undefined, [[3, 10]]);
		}));

		return function (_x11, _x12) {
			return _ref12.apply(this, arguments);
		};
	}();
};

var getSpotlightProject = function getSpotlightProject(_ref13) {
	var Project = _ref13.Project;
	return function () {
		var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
			var mostRecentSpotlight;
			return regeneratorRuntime.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							_context7.prev = 0;
							_context7.next = 3;
							return Project.aggregate([{
								$match: {
									isPublished: true,
									spotlight: true
								}
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$limit: 1
							}, {
								$project: propertiesToProject
							}]);

						case 3:
							mostRecentSpotlight = _context7.sent;


							res.status(200).send({
								spotlightProject: mostRecentSpotlight.length ? mostRecentSpotlight[0] : null
							});

							_context7.next = 11;
							break;

						case 7:
							_context7.prev = 7;
							_context7.t0 = _context7['catch'](0);

							console.error('Error getting the spotlight: ', _context7.t0);
							return _context7.abrupt('return', res.status(400).send({
								message: "There was an error getting the project spotlight."
							}));

						case 11:
						case 'end':
							return _context7.stop();
					}
				}
			}, _callee7, undefined, [[0, 7]]);
		}));

		return function (_x13, _x14) {
			return _ref14.apply(this, arguments);
		};
	}();
};

module.exports = {
	getProjectAdmin: getProjectAdmin,
	getProject: getProject,
	getNumRecentProjects: getNumRecentProjects,
	getRecentProjects: getRecentProjects,
	getFilteredProjects: getFilteredProjects,
	getSpotlightProject: getSpotlightProject,
	getProjectFromString: getProjectFromString
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createProject = function createProject(_ref) {
	var Project = _ref.Project;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, category, content, contentPreview, title, isPublished, techStack, liveLink, spotlight, heroURL, urlString, previewImageURL, reviewData, setProject;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, category = _req$body.category, content = _req$body.content, contentPreview = _req$body.contentPreview, title = _req$body.title, isPublished = _req$body.isPublished, techStack = _req$body.techStack, liveLink = _req$body.liveLink, spotlight = _req$body.spotlight, heroURL = _req$body.heroURL, urlString = _req$body.urlString, previewImageURL = _req$body.previewImageURL;
							_context.prev = 1;
							reviewData = {
								category: category,
								content: content,
								contentPreview: contentPreview,
								title: title,
								techStack: techStack,
								liveLink: liveLink,
								heroURL: heroURL,
								spotlight: spotlight,
								urlString: urlString || title.replace(/ /g, '-').toLowerCase(),
								previewImageURL: previewImageURL,
								isPublished: isPublished,
								owner: req.user.id
							};


							if (isPublished) {
								reviewData.publishDate = new Date();
							}
							setProject = new Project(reviewData);
							_context.next = 7;
							return setProject.save();

						case 7:
							return _context.abrupt('return', res.status(200).send({
								projectId: setProject._id
							}));

						case 10:
							_context.prev = 10;
							_context.t0 = _context['catch'](1);


							console.error('There was an error creating this project: ', _context.t0);
							return _context.abrupt('return', res.status(400).send({
								message: "Could not create project"
							}));

						case 14:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 10]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	createProject: createProject
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var updateProject = function updateProject(_ref) {
	var Project = _ref.Project;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, projectId, category, content, contentPreview, title, isPublished, techStack, liveLink, spotlight, heroURL, previewImageURL, urlString, author, prevProject, updateData, setProject;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, projectId = _req$body.projectId, category = _req$body.category, content = _req$body.content, contentPreview = _req$body.contentPreview, title = _req$body.title, isPublished = _req$body.isPublished, techStack = _req$body.techStack, liveLink = _req$body.liveLink, spotlight = _req$body.spotlight, heroURL = _req$body.heroURL, previewImageURL = _req$body.previewImageURL, urlString = _req$body.urlString, author = _req$body.author;
							_context.prev = 1;
							_context.next = 4;
							return Project.findOne({ _id: projectId });

						case 4:
							prevProject = _context.sent;
							updateData = _extends({}, category && { category: category }, content && { content: content }, contentPreview && { contentPreview: contentPreview }, title && { title: title }, techStack && { techStack: techStack }, liveLink && { liveLink: liveLink }, typeof spotlight !== 'undefined' && { spotlight: spotlight }, heroURL && { heroURL: heroURL }, previewImageURL && { previewImageURL: previewImageURL }, urlString && { urlString: urlString }, typeof isPublished !== 'undefined' && { isPublished: isPublished }, author && { author: author });


							if (isPublished && !prevProject.isPublished) {
								updateData.publishDate = new Date();
							}
							_context.next = 9;
							return Project.findOneAndUpdate({ _id: projectId }, {
								$set: updateData
							}, {
								new: true
							});

						case 9:
							setProject = _context.sent;
							return _context.abrupt('return', res.status(200).send({
								project: setProject
							}));

						case 13:
							_context.prev = 13;
							_context.t0 = _context['catch'](1);
							return _context.abrupt('return', res.status(400).send({
								message: "Could not update project"
							}));

						case 16:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 13]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	updateProject: updateProject
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var deleteProject = function deleteProject(_ref) {
	var Project = _ref.Project;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var projectId, deletedProject;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							projectId = req.body.projectId;

							if (projectId) {
								_context.next = 3;
								break;
							}

							return _context.abrupt("return", res.status(404).send({
								message: "Could not find that project."
							}));

						case 3:
							_context.prev = 3;
							_context.next = 6;
							return Project.findOneAndDelete({
								_id: projectId
							});

						case 6:
							deletedProject = _context.sent;
							return _context.abrupt("return", res.status(200).send({
								deletedProject: deletedProject
							}));

						case 10:
							_context.prev = 10;
							_context.t0 = _context["catch"](3);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not delete project"
							}));

						case 13:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[3, 10]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	deleteProject: deleteProject
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    authenticate = _require.authenticate;

var _require2 = __webpack_require__(3),
    router = _require2.Router;

var _require3 = __webpack_require__(142),
    getNumRecentBlogs = _require3.getNumRecentBlogs,
    getRecentBlogs = _require3.getRecentBlogs,
    getBlogAdmin = _require3.getBlogAdmin,
    getBlog = _require3.getBlog,
    getBlogFromString = _require3.getBlogFromString;

var _require4 = __webpack_require__(144),
    createBlog = _require4.createBlog;

var _require5 = __webpack_require__(145),
    updateBlog = _require5.updateBlog;

var _require6 = __webpack_require__(146),
    deleteBlog = _require6.deleteBlog;

module.exports = function (models, _ref) {
	var config = _ref.config;


	var api = new router();

	api.get('/getBlog', getBlog(models));

	api.get('/getBlogFromString', getBlogFromString(models));

	// Get certain number of book reviews
	api.get('/getNumRecentBlogs', getNumRecentBlogs(models));
	// Based on num skip and category
	api.get('/getRecentBlogs', getRecentBlogs(models));

	// Get either published projects or drafts
	api.get('/getBlogAdmin', authenticate, getBlogAdmin(models));

	api.post('/createBlog', authenticate, createBlog(models));

	api.put('/updateBlog', authenticate, updateBlog(models));

	api.delete('/deleteBlog', authenticate, deleteBlog(models));

	return api;
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = __webpack_require__(143),
    propertiesToProject = _require.propertiesToProject,
    LIMIT_PER_PAGE = _require.LIMIT_PER_PAGE;

var getBlogAdmin = function getBlogAdmin(_ref) {
	var Blog = _ref.Blog;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var isPublished, blogs;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							isPublished = req.query.isPublished;
							_context.next = 4;
							return Blog.aggregate([{
								$match: {
									isPublished: isPublished === 'true'
								}
							}, {
								$sort: {
									created: -1
								}
							}, {
								$project: propertiesToProject
							}]);

						case 4:
							blogs = _context.sent;


							res.status(200).send({
								blogs: blogs
							});

							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context['catch'](0);
							return _context.abrupt('return', res.status(400).send({
								message: "there was an error getting the admin blogs."
							}));

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 8]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var getBlog = function getBlog(_ref3) {
	var Blog = _ref3.Blog;
	return function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var blogId, blog;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							blogId = req.query.blogId;
							_context2.prev = 1;
							_context2.next = 4;
							return Blog.findOne({ _id: blogId });

						case 4:
							blog = _context2.sent;

							if (!blog) {
								_context2.next = 9;
								break;
							}

							return _context2.abrupt('return', res.status(200).send({
								blog: blog
							}));

						case 9:
							return _context2.abrupt('return', res.status(401).send({
								message: "There is no Blog with that id."
							}));

						case 10:
							_context2.next = 16;
							break;

						case 12:
							_context2.prev = 12;
							_context2.t0 = _context2['catch'](1);

							console.error('Error on getting Blog: ', _context2.t0);
							return _context2.abrupt('return', res.status(400).send({
								message: "There was an error getting the Blog."
							}));

						case 16:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined, [[1, 12]]);
		}));

		return function (_x3, _x4) {
			return _ref4.apply(this, arguments);
		};
	}();
};

var getBlogFromString = function getBlogFromString(_ref5) {
	var Blog = _ref5.Blog;
	return function () {
		var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
			var urlString, blog;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							urlString = req.query.urlString;
							_context3.prev = 1;
							_context3.next = 4;
							return Blog.findOne({ urlString: urlString });

						case 4:
							blog = _context3.sent;

							if (!blog) {
								_context3.next = 9;
								break;
							}

							return _context3.abrupt('return', res.status(200).send({
								blog: blog
							}));

						case 9:
							return _context3.abrupt('return', res.status(401).send({
								message: "There is no book review with that id."
							}));

						case 10:
							_context3.next = 15;
							break;

						case 12:
							_context3.prev = 12;
							_context3.t0 = _context3['catch'](1);
							return _context3.abrupt('return', res.status(400).send({
								message: "There was an error getting the book review."
							}));

						case 15:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined, [[1, 12]]);
		}));

		return function (_x5, _x6) {
			return _ref6.apply(this, arguments);
		};
	}();
};

var getNumRecentBlogs = function getNumRecentBlogs(_ref7) {
	var Blog = _ref7.Blog;
	return function () {
		var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
			var numBlogs, allBlogs;
			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							numBlogs = req.query.numBlogs;
							_context4.prev = 1;

							if (!(!numBlogs || isNaN(numBlogs))) {
								_context4.next = 4;
								break;
							}

							return _context4.abrupt('return', res.status(400).send({
								message: "Please include how many items to return."
							}));

						case 4:
							_context4.next = 6;
							return Blog.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$limit: parseInt(numBlogs)
							}, {
								$project: propertiesToProject
							}]);

						case 6:
							allBlogs = _context4.sent;


							res.status(200).send({
								allBlogs: allBlogs
							});
							_context4.next = 14;
							break;

						case 10:
							_context4.prev = 10;
							_context4.t0 = _context4['catch'](1);

							console.error('Error getting num recent blogs: ', _context4.t0);
							return _context4.abrupt('return', res.status(400).send({
								message: "There was an error getting the blogs."
							}));

						case 14:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, undefined, [[1, 10]]);
		}));

		return function (_x7, _x8) {
			return _ref8.apply(this, arguments);
		};
	}();
};

var getRecentBlogs = function getRecentBlogs(_ref9) {
	var Blog = _ref9.Blog;
	return function () {
		var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
			var numSkip, allBlogs, numToSkip, anotherPage;
			return regeneratorRuntime.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							numSkip = req.query.numSkip;
							_context5.prev = 1;
							allBlogs = void 0;
							numToSkip = void 0;

							if (!(!numSkip || isNaN(numSkip))) {
								_context5.next = 11;
								break;
							}

							_context5.next = 7;
							return Blog.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$limit: LIMIT_PER_PAGE + 1
							}, {
								$project: propertiesToProject
							}]);

						case 7:
							allBlogs = _context5.sent;

							numToSkip = LIMIT_PER_PAGE;
							_context5.next = 15;
							break;

						case 11:
							_context5.next = 13;
							return Blog.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$skip: parseInt(numSkip)
							}, {
								$limit: LIMIT_PER_PAGE + 1
							}, {
								$project: propertiesToProject
							}]);

						case 13:
							allBlogs = _context5.sent;


							numToSkip = parseInt(numSkip) + LIMIT_PER_PAGE;

						case 15:
							anotherPage = false;

							if (allBlogs.length > LIMIT_PER_PAGE) {
								// There is another page
								anotherPage = true;
								allBlogs.pop();
							}

							res.status(200).send({
								allBlogs: allBlogs,
								anotherPage: anotherPage,
								numToSkip: numToSkip
							});
							_context5.next = 24;
							break;

						case 20:
							_context5.prev = 20;
							_context5.t0 = _context5['catch'](1);

							console.error('Error filtering blogs: ', _context5.t0);
							return _context5.abrupt('return', res.status(400).send({
								message: "There was an error getting the blogs."
							}));

						case 24:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, undefined, [[1, 20]]);
		}));

		return function (_x9, _x10) {
			return _ref10.apply(this, arguments);
		};
	}();
};

module.exports = {
	getBlogAdmin: getBlogAdmin,
	getBlog: getBlog,
	getNumRecentBlogs: getNumRecentBlogs,
	getRecentBlogs: getRecentBlogs,
	getBlogFromString: getBlogFromString
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    GLOBAL_LIMIT_PER_PAGE = _require.GLOBAL_LIMIT_PER_PAGE;

module.exports = {
	LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
	propertiesToProject: {
		created: 1,
		title: 1,
		contentPreview: 1,
		urlString: 1,

		heroURL: 1,
		previewImageURL: 1,
		isPublished: 1,
		publishDate: 1
	}
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createBlog = function createBlog(_ref) {
	var Blog = _ref.Blog;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, title, contentPreview, content, isPublished, urlString, heroURL, previewImageURL, reviewData, setBlog;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, title = _req$body.title, contentPreview = _req$body.contentPreview, content = _req$body.content, isPublished = _req$body.isPublished, urlString = _req$body.urlString, heroURL = _req$body.heroURL, previewImageURL = _req$body.previewImageURL;
							_context.prev = 1;
							reviewData = {
								title: title,
								contentPreview: contentPreview,

								content: content,
								isPublished: isPublished,
								urlString: urlString || title.replace(/ /g, '-').toLowerCase(),

								heroURL: heroURL,
								previewImageURL: previewImageURL,
								owner: req.user.id
							};


							if (isPublished) {
								reviewData.publishDate = new Date();
							}
							setBlog = new Blog(reviewData);
							_context.next = 7;
							return setBlog.save();

						case 7:
							return _context.abrupt('return', res.status(200).send({
								blogId: setBlog._id
							}));

						case 10:
							_context.prev = 10;
							_context.t0 = _context['catch'](1);


							console.error('There was an error creating this blog: ', _context.t0);
							return _context.abrupt('return', res.status(400).send({
								message: "Could not create blog"
							}));

						case 14:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 10]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	createBlog: createBlog
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var updateBlog = function updateBlog(_ref) {
	var Blog = _ref.Blog;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, title, contentPreview, content, isPublished, heroURL, previewImageURL, urlString, blogId, prevBlog, updateData, setBlog;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, title = _req$body.title, contentPreview = _req$body.contentPreview, content = _req$body.content, isPublished = _req$body.isPublished, heroURL = _req$body.heroURL, previewImageURL = _req$body.previewImageURL, urlString = _req$body.urlString, blogId = _req$body.blogId;
							_context.prev = 1;
							_context.next = 4;
							return Blog.findOne({ _id: blogId });

						case 4:
							prevBlog = _context.sent;
							updateData = _extends({}, title && { title: title }, contentPreview && { contentPreview: contentPreview }, content && { content: content }, typeof isPublished !== 'undefined' && { isPublished: isPublished }, urlString && { urlString: urlString }, heroURL && { heroURL: heroURL }, previewImageURL && { previewImageURL: previewImageURL });


							if (isPublished && !prevBlog.isPublished) {
								updateData.publishDate = new Date();
							}
							_context.next = 9;
							return Blog.findOneAndUpdate({ _id: blogId }, {
								$set: updateData
							}, {
								new: true
							});

						case 9:
							setBlog = _context.sent;
							return _context.abrupt("return", res.status(200).send({
								blog: setBlog
							}));

						case 13:
							_context.prev = 13;
							_context.t0 = _context["catch"](1);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not update blog"
							}));

						case 16:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 13]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	updateBlog: updateBlog
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var deleteBlog = function deleteBlog(_ref) {
	var Blog = _ref.Blog;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var blogId, deletedBlog;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							blogId = req.body.blogId;

							if (blogId) {
								_context.next = 3;
								break;
							}

							return _context.abrupt("return", res.status(404).send({
								message: "Could not find that blog."
							}));

						case 3:
							_context.prev = 3;
							_context.next = 6;
							return Blog.findOneAndDelete({
								_id: blogId
							});

						case 6:
							deletedBlog = _context.sent;
							return _context.abrupt("return", res.status(200).send({
								deletedBlog: deletedBlog
							}));

						case 10:
							_context.prev = 10;
							_context.t0 = _context["catch"](3);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not delete blog"
							}));

						case 13:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[3, 10]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	deleteBlog: deleteBlog
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    authenticate = _require.authenticate;

var _require2 = __webpack_require__(3),
    router = _require2.Router;

var _require3 = __webpack_require__(148),
    getNumRecentGuides = _require3.getNumRecentGuides,
    getRecentGuides = _require3.getRecentGuides,
    getGuideAdmin = _require3.getGuideAdmin,
    getGuide = _require3.getGuide,
    getGuideFromString = _require3.getGuideFromString;

var _require4 = __webpack_require__(150),
    createGuide = _require4.createGuide;

var _require5 = __webpack_require__(151),
    updateGuide = _require5.updateGuide;

var _require6 = __webpack_require__(152),
    deleteGuide = _require6.deleteGuide;

module.exports = function (models, _ref) {
	var config = _ref.config;


	var api = new router();

	api.get('/getGuide', getGuide(models));

	api.get('/getGuideFromString', getGuideFromString(models));

	// Get certain number of book reviews
	api.get('/getNumRecentGuides', getNumRecentGuides(models));
	// Based on num skip and category
	api.get('/getRecentGuides', getRecentGuides(models));

	// Get either published projects or drafts
	api.get('/getGuideAdmin', authenticate, getGuideAdmin(models));

	api.post('/createGuide', authenticate, createGuide(models));

	api.put('/updateGuide', authenticate, updateGuide(models));

	api.delete('/deleteGuide', authenticate, deleteGuide(models));

	return api;
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = __webpack_require__(149),
    propertiesToProject = _require.propertiesToProject,
    LIMIT_PER_PAGE = _require.LIMIT_PER_PAGE;

var getGuideAdmin = function getGuideAdmin(_ref) {
	var Guide = _ref.Guide;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var isPublished, guides;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							isPublished = req.query.isPublished;
							_context.next = 4;
							return Guide.aggregate([{
								$match: {
									isPublished: isPublished === 'true'
								}
							}, {
								$sort: {
									created: -1
								}
							}, {
								$project: propertiesToProject
							}]);

						case 4:
							guides = _context.sent;


							res.status(200).send({
								guides: guides
							});

							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context['catch'](0);
							return _context.abrupt('return', res.status(400).send({
								message: "there was an error getting the admin guides."
							}));

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 8]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var getGuide = function getGuide(_ref3) {
	var Guide = _ref3.Guide;
	return function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var guideId, guide;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							guideId = req.query.guideId;
							_context2.prev = 1;
							_context2.next = 4;
							return Guide.findOne({ _id: guideId });

						case 4:
							guide = _context2.sent;

							if (!guide) {
								_context2.next = 9;
								break;
							}

							return _context2.abrupt('return', res.status(200).send({
								guide: guide
							}));

						case 9:
							return _context2.abrupt('return', res.status(404).send({
								message: "There is no Guide with that id."
							}));

						case 10:
							_context2.next = 16;
							break;

						case 12:
							_context2.prev = 12;
							_context2.t0 = _context2['catch'](1);

							console.error('Error on getting Guide: ', _context2.t0);
							return _context2.abrupt('return', res.status(400).send({
								message: "There was an error getting the Guide."
							}));

						case 16:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined, [[1, 12]]);
		}));

		return function (_x3, _x4) {
			return _ref4.apply(this, arguments);
		};
	}();
};

var getGuideFromString = function getGuideFromString(_ref5) {
	var Guide = _ref5.Guide;
	return function () {
		var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
			var urlString, guide;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							urlString = req.query.urlString;
							_context3.prev = 1;
							_context3.next = 4;
							return Guide.findOne({ urlString: urlString });

						case 4:
							guide = _context3.sent;

							if (!guide) {
								_context3.next = 9;
								break;
							}

							return _context3.abrupt('return', res.status(200).send({
								guide: guide
							}));

						case 9:
							return _context3.abrupt('return', res.status(404).send({
								message: "There is no guide with that id."
							}));

						case 10:
							_context3.next = 15;
							break;

						case 12:
							_context3.prev = 12;
							_context3.t0 = _context3['catch'](1);
							return _context3.abrupt('return', res.status(400).send({
								message: "There was an error getting the guide."
							}));

						case 15:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined, [[1, 12]]);
		}));

		return function (_x5, _x6) {
			return _ref6.apply(this, arguments);
		};
	}();
};

var getNumRecentGuides = function getNumRecentGuides(_ref7) {
	var Guide = _ref7.Guide;
	return function () {
		var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
			var numGuides, allGuides;
			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							numGuides = req.query.numGuides;
							_context4.prev = 1;

							if (!(!numGuides || isNaN(numGuides))) {
								_context4.next = 4;
								break;
							}

							return _context4.abrupt('return', res.status(400).send({
								message: "Please include how many items to return."
							}));

						case 4:
							_context4.next = 6;
							return Guide.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$limit: parseInt(numGuides)
							}, {
								$project: propertiesToProject
							}]);

						case 6:
							allGuides = _context4.sent;


							res.status(200).send({
								allGuides: allGuides
							});
							_context4.next = 14;
							break;

						case 10:
							_context4.prev = 10;
							_context4.t0 = _context4['catch'](1);

							console.error('Error getting num recent guides: ', _context4.t0);
							return _context4.abrupt('return', res.status(400).send({
								message: "There was an error getting the guides."
							}));

						case 14:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, undefined, [[1, 10]]);
		}));

		return function (_x7, _x8) {
			return _ref8.apply(this, arguments);
		};
	}();
};

var getRecentGuides = function getRecentGuides(_ref9) {
	var Guide = _ref9.Guide;
	return function () {
		var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
			var numSkip, allGuides, numToSkip, anotherPage;
			return regeneratorRuntime.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							numSkip = req.query.numSkip;
							_context5.prev = 1;
							allGuides = void 0;
							numToSkip = void 0;

							if (!(!numSkip || isNaN(numSkip))) {
								_context5.next = 11;
								break;
							}

							_context5.next = 7;
							return Guide.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$limit: LIMIT_PER_PAGE + 1
							}, {
								$project: propertiesToProject
							}]);

						case 7:
							allGuides = _context5.sent;

							numToSkip = LIMIT_PER_PAGE;
							_context5.next = 15;
							break;

						case 11:
							_context5.next = 13;
							return Guide.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									publishDate: -1
								}
							}, {
								$skip: parseInt(numSkip)
							}, {
								$limit: LIMIT_PER_PAGE + 1
							}, {
								$project: propertiesToProject
							}]);

						case 13:
							allGuides = _context5.sent;


							numToSkip = parseInt(numSkip) + LIMIT_PER_PAGE;

						case 15:
							anotherPage = false;

							if (allGuides.length > LIMIT_PER_PAGE) {
								// There is another page
								anotherPage = true;
								allGuides.pop();
							}

							res.status(200).send({
								allGuides: allGuides,
								anotherPage: anotherPage,
								numToSkip: numToSkip
							});
							_context5.next = 24;
							break;

						case 20:
							_context5.prev = 20;
							_context5.t0 = _context5['catch'](1);

							console.error('Error filtering guides: ', _context5.t0);
							return _context5.abrupt('return', res.status(400).send({
								message: "There was an error getting the guides."
							}));

						case 24:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, undefined, [[1, 20]]);
		}));

		return function (_x9, _x10) {
			return _ref10.apply(this, arguments);
		};
	}();
};

module.exports = {
	getGuideAdmin: getGuideAdmin,
	getGuide: getGuide,
	getNumRecentGuides: getNumRecentGuides,
	getRecentGuides: getRecentGuides,
	getGuideFromString: getGuideFromString
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6),
    GLOBAL_LIMIT_PER_PAGE = _require.GLOBAL_LIMIT_PER_PAGE;

module.exports = {
	LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
	propertiesToProject: {
		created: 1,
		title: 1,
		contentPreview: 1,
		technology: 1,
		urlString: 1,

		iconURL: 1,
		previewImageURL: 1,
		isPublished: 1,
		publishDate: 1
	}
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createGuide = function createGuide(_ref) {
	var Guide = _ref.Guide;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, title, contentPreview, technology, content, isPublished, urlString, iconURL, previewImageURL, reviewData, setGuide;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, title = _req$body.title, contentPreview = _req$body.contentPreview, technology = _req$body.technology, content = _req$body.content, isPublished = _req$body.isPublished, urlString = _req$body.urlString, iconURL = _req$body.iconURL, previewImageURL = _req$body.previewImageURL;
							_context.prev = 1;
							reviewData = {
								title: title,
								contentPreview: contentPreview,
								technology: technology,

								content: content,
								isPublished: isPublished,
								urlString: urlString || title.replace(/ /g, '-').toLowerCase(),

								iconURL: iconURL,
								previewImageURL: previewImageURL,
								owner: req.user.id
							};


							if (isPublished) {
								reviewData.publishDate = new Date();
							}
							setGuide = new Guide(reviewData);
							_context.next = 7;
							return setGuide.save();

						case 7:
							return _context.abrupt("return", res.status(200).send({
								guideId: setGuide._id
							}));

						case 10:
							_context.prev = 10;
							_context.t0 = _context["catch"](1);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not create guide"
							}));

						case 13:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 10]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	createGuide: createGuide
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var updateGuide = function updateGuide(_ref) {
	var Guide = _ref.Guide;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, title, contentPreview, technology, content, isPublished, urlString, iconURL, previewImageURL, guideId, prevGuide, updateData, setGuide;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, title = _req$body.title, contentPreview = _req$body.contentPreview, technology = _req$body.technology, content = _req$body.content, isPublished = _req$body.isPublished, urlString = _req$body.urlString, iconURL = _req$body.iconURL, previewImageURL = _req$body.previewImageURL, guideId = _req$body.guideId;
							_context.prev = 1;
							_context.next = 4;
							return Guide.findOne({ _id: guideId });

						case 4:
							prevGuide = _context.sent;
							updateData = _extends({}, title && { title: title }, contentPreview && { contentPreview: contentPreview }, technology && { technology: technology }, content && { content: content }, typeof isPublished !== 'undefined' && { isPublished: isPublished }, urlString && { urlString: urlString }, iconURL && { iconURL: iconURL }, previewImageURL && { previewImageURL: previewImageURL });


							if (isPublished && !prevGuide.isPublished) {
								updateData.publishDate = new Date();
							}
							_context.next = 9;
							return Guide.findOneAndUpdate({ _id: guideId }, {
								$set: updateData
							}, {
								new: true
							});

						case 9:
							setGuide = _context.sent;
							return _context.abrupt("return", res.status(200).send({
								guide: setGuide
							}));

						case 13:
							_context.prev = 13;
							_context.t0 = _context["catch"](1);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not update guide"
							}));

						case 16:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 13]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	updateGuide: updateGuide
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var deleteGuide = function deleteGuide(_ref) {
	var Guide = _ref.Guide;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var guideId, deletedGuide;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							guideId = req.body.guideId;

							if (guideId) {
								_context.next = 3;
								break;
							}

							return _context.abrupt("return", res.status(404).send({
								message: "Could not find that guide."
							}));

						case 3:
							_context.prev = 3;
							_context.next = 6;
							return Guide.findOneAndDelete({
								_id: guideId
							});

						case 6:
							deletedGuide = _context.sent;
							return _context.abrupt("return", res.status(200).send({
								deletedGuide: deletedGuide
							}));

						case 10:
							_context.prev = 10;
							_context.t0 = _context["catch"](3);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not delete guide"
							}));

						case 13:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[3, 10]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	deleteGuide: deleteGuide
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    authenticate = _require.authenticate;

var _require2 = __webpack_require__(3),
    router = _require2.Router;

var _require3 = __webpack_require__(154),
    getNumRecentMonthlyFives = _require3.getNumRecentMonthlyFives,
    getRecentMonthlyFives = _require3.getRecentMonthlyFives,
    getMonthlyFiveAdmin = _require3.getMonthlyFiveAdmin,
    getMonthlyFive = _require3.getMonthlyFive,
    getMonthlyFiveFromString = _require3.getMonthlyFiveFromString;

var _require4 = __webpack_require__(155),
    createMonthlyFive = _require4.createMonthlyFive;

var _require5 = __webpack_require__(156),
    updateMonthlyFive = _require5.updateMonthlyFive;

var _require6 = __webpack_require__(157),
    deleteMonthlyFive = _require6.deleteMonthlyFive;

module.exports = function (models, _ref) {
	var config = _ref.config;


	var api = new router();

	api.get('/getMonthlyFive', getMonthlyFive(models));

	api.get('/getMonthlyFiveFromString', getMonthlyFiveFromString(models));

	// Get certain number of book reviews
	api.get('/getNumRecentMonthlyFives', getNumRecentMonthlyFives(models));
	// Based on num skip and category
	api.get('/getRecentMonthlyFives', getRecentMonthlyFives(models));

	// Get either published projects or drafts
	api.get('/getMonthlyFiveAdmin', authenticate, getMonthlyFiveAdmin(models));

	api.post('/createMonthlyFive', authenticate, createMonthlyFive(models));

	api.put('/updateMonthlyFive', authenticate, updateMonthlyFive(models));

	api.delete('/deleteMonthlyFive', authenticate, deleteMonthlyFive(models));

	return api;
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = __webpack_require__(28),
    propertiesToProject = _require.propertiesToProject,
    LIMIT_PER_PAGE = _require.LIMIT_PER_PAGE;

var getMonthlyFiveAdmin = function getMonthlyFiveAdmin(_ref) {
	var MonthlyFive = _ref.MonthlyFive;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var isPublished, monthlyFives;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							isPublished = req.query.isPublished;
							_context.next = 4;
							return MonthlyFive.aggregate([{
								$match: {
									isPublished: isPublished === 'true'
								}
							}, {
								$sort: {
									created: -1
								}
							}, {
								$project: propertiesToProject
							}]);

						case 4:
							monthlyFives = _context.sent;


							res.status(200).send({
								monthlyFives: monthlyFives
							});

							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context['catch'](0);
							return _context.abrupt('return', res.status(400).send({
								message: "there was an error getting the admin monthlyFives."
							}));

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 8]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var getMonthlyFive = function getMonthlyFive(_ref3) {
	var MonthlyFive = _ref3.MonthlyFive;
	return function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var monthlyFiveId, monthlyFive;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							monthlyFiveId = req.query.monthlyFiveId;
							_context2.prev = 1;
							_context2.next = 4;
							return MonthlyFive.findOne({ _id: monthlyFiveId });

						case 4:
							monthlyFive = _context2.sent;

							if (!monthlyFive) {
								_context2.next = 9;
								break;
							}

							return _context2.abrupt('return', res.status(200).send({
								monthlyFive: monthlyFive
							}));

						case 9:
							return _context2.abrupt('return', res.status(401).send({
								message: "There is no MonthlyFive with that id."
							}));

						case 10:
							_context2.next = 16;
							break;

						case 12:
							_context2.prev = 12;
							_context2.t0 = _context2['catch'](1);

							console.error('Error on getting MonthlyFive: ', _context2.t0);
							return _context2.abrupt('return', res.status(400).send({
								message: "There was an error getting the MonthlyFive."
							}));

						case 16:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined, [[1, 12]]);
		}));

		return function (_x3, _x4) {
			return _ref4.apply(this, arguments);
		};
	}();
};

var getMonthlyFiveFromString = function getMonthlyFiveFromString(_ref5) {
	var MonthlyFive = _ref5.MonthlyFive;
	return function () {
		var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
			var urlString, monthlyFive;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							urlString = req.query.urlString;
							_context3.prev = 1;
							_context3.next = 4;
							return MonthlyFive.findOne({ urlString: urlString });

						case 4:
							monthlyFive = _context3.sent;

							if (!monthlyFive) {
								_context3.next = 9;
								break;
							}

							return _context3.abrupt('return', res.status(200).send({
								monthlyFive: monthlyFive
							}));

						case 9:
							return _context3.abrupt('return', res.status(401).send({
								message: "There is no book review with that id."
							}));

						case 10:
							_context3.next = 15;
							break;

						case 12:
							_context3.prev = 12;
							_context3.t0 = _context3['catch'](1);
							return _context3.abrupt('return', res.status(400).send({
								message: "There was an error getting the book review."
							}));

						case 15:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined, [[1, 12]]);
		}));

		return function (_x5, _x6) {
			return _ref6.apply(this, arguments);
		};
	}();
};

var getNumRecentMonthlyFives = function getNumRecentMonthlyFives(_ref7) {
	var MonthlyFive = _ref7.MonthlyFive;
	return function () {
		var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
			var numMonthlyFives, allMonthlyFives;
			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							numMonthlyFives = req.query.numMonthlyFives;
							_context4.prev = 1;

							if (!(!numMonthlyFives || isNaN(numMonthlyFives))) {
								_context4.next = 4;
								break;
							}

							return _context4.abrupt('return', res.status(400).send({
								message: "Please include how many items to return."
							}));

						case 4:
							_context4.next = 6;
							return MonthlyFive.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									year: -1,
									month: -1
								}
							}, {
								$limit: parseInt(numMonthlyFives)
							}, {
								$project: propertiesToProject
							}]);

						case 6:
							allMonthlyFives = _context4.sent;


							res.status(200).send({
								allMonthlyFives: allMonthlyFives
							});
							_context4.next = 14;
							break;

						case 10:
							_context4.prev = 10;
							_context4.t0 = _context4['catch'](1);

							console.error('Error getting num recent monthlyFives: ', _context4.t0);
							return _context4.abrupt('return', res.status(400).send({
								message: "There was an error getting the monthlyFives."
							}));

						case 14:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, undefined, [[1, 10]]);
		}));

		return function (_x7, _x8) {
			return _ref8.apply(this, arguments);
		};
	}();
};

var getRecentMonthlyFives = function getRecentMonthlyFives(_ref9) {
	var MonthlyFive = _ref9.MonthlyFive;
	return function () {
		var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
			var year, allMonthlyFives;
			return regeneratorRuntime.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							year = req.query.year;
							_context5.prev = 1;
							allMonthlyFives = void 0;

							if (!(!year || isNaN(year))) {
								_context5.next = 7;
								break;
							}

							return _context5.abrupt('return', res.status(400).send({
								message: 'Incorrectly formatted year.'
							}));

						case 7:
							_context5.next = 9;
							return MonthlyFive.aggregate([{
								$match: {
									isPublished: true,
									year: parseInt(year)
								}
							}, {
								$sort: {
									month: -1
								}
							}, {
								$project: propertiesToProject
							}]);

						case 9:
							allMonthlyFives = _context5.sent;

						case 10:

							res.status(200).send({
								allMonthlyFives: allMonthlyFives
							});
							_context5.next = 17;
							break;

						case 13:
							_context5.prev = 13;
							_context5.t0 = _context5['catch'](1);

							console.error('Error filtering monthlyFives: ', _context5.t0);
							return _context5.abrupt('return', res.status(400).send({
								message: "There was an error getting the monthlyFives."
							}));

						case 17:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, undefined, [[1, 13]]);
		}));

		return function (_x9, _x10) {
			return _ref10.apply(this, arguments);
		};
	}();
};

module.exports = {
	getMonthlyFiveAdmin: getMonthlyFiveAdmin,
	getMonthlyFive: getMonthlyFive,
	getNumRecentMonthlyFives: getNumRecentMonthlyFives,
	getRecentMonthlyFives: getRecentMonthlyFives,
	getMonthlyFiveFromString: getMonthlyFiveFromString
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var MONTHS = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var createMonthlyFive = function createMonthlyFive(_ref) {
	var MonthlyFive = _ref.MonthlyFive;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, title, contentPreview, month, year, content, isPublished, heroURL, previewImageURL, reviewData, setMonthlyFive;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, title = _req$body.title, contentPreview = _req$body.contentPreview, month = _req$body.month, year = _req$body.year, content = _req$body.content, isPublished = _req$body.isPublished, heroURL = _req$body.heroURL, previewImageURL = _req$body.previewImageURL;
							_context.prev = 1;
							reviewData = {
								title: title,
								contentPreview: contentPreview,

								month: month,
								year: year,
								urlString: MONTHS[month] + "-" + year,

								content: content,
								isPublished: isPublished,

								heroURL: heroURL,
								previewImageURL: previewImageURL,
								owner: req.user.id
							};


							if (isPublished) {
								reviewData.publishDate = new Date();
							}
							setMonthlyFive = new MonthlyFive(reviewData);
							_context.next = 7;
							return setMonthlyFive.save();

						case 7:
							return _context.abrupt("return", res.status(200).send({
								monthlyFiveId: setMonthlyFive._id
							}));

						case 10:
							_context.prev = 10;
							_context.t0 = _context["catch"](1);


							console.error('There was an error creating this monthlyFive: ', _context.t0);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not create monthlyFive"
							}));

						case 14:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 10]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	createMonthlyFive: createMonthlyFive
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var updateMonthlyFive = function updateMonthlyFive(_ref) {
	var MonthlyFive = _ref.MonthlyFive;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, title, contentPreview, month, year, urlString, content, isPublished, heroURL, previewImageURL, monthlyFiveId, prevMonthlyFive, updateData, setMonthlyFive;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, title = _req$body.title, contentPreview = _req$body.contentPreview, month = _req$body.month, year = _req$body.year, urlString = _req$body.urlString, content = _req$body.content, isPublished = _req$body.isPublished, heroURL = _req$body.heroURL, previewImageURL = _req$body.previewImageURL, monthlyFiveId = _req$body.monthlyFiveId;
							_context.prev = 1;
							_context.next = 4;
							return MonthlyFive.findOne({ _id: monthlyFiveId });

						case 4:
							prevMonthlyFive = _context.sent;
							updateData = _extends({}, title && { title: title }, contentPreview && { contentPreview: contentPreview }, month && { month: month }, year && { year: year }, urlString && { urlString: urlString }, content && { content: content }, typeof isPublished !== 'undefined' && { isPublished: isPublished }, heroURL && { heroURL: heroURL }, previewImageURL && { previewImageURL: previewImageURL });


							if (isPublished && !prevMonthlyFive.isPublished) {
								updateData.publishDate = new Date();
							}
							_context.next = 9;
							return MonthlyFive.findOneAndUpdate({ _id: monthlyFiveId }, {
								$set: updateData
							}, {
								new: true
							});

						case 9:
							setMonthlyFive = _context.sent;
							return _context.abrupt("return", res.status(200).send({
								monthlyFive: setMonthlyFive
							}));

						case 13:
							_context.prev = 13;
							_context.t0 = _context["catch"](1);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not update monthlyFive"
							}));

						case 16:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 13]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	updateMonthlyFive: updateMonthlyFive
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var deleteMonthlyFive = function deleteMonthlyFive(_ref) {
	var MonthlyFive = _ref.MonthlyFive;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var monthlyFiveId, deletedMonthlyFive;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							monthlyFiveId = req.body.monthlyFiveId;

							if (monthlyFiveId) {
								_context.next = 3;
								break;
							}

							return _context.abrupt("return", res.status(404).send({
								message: "Could not find that monthlyFive."
							}));

						case 3:
							_context.prev = 3;
							_context.next = 6;
							return MonthlyFive.findOneAndDelete({
								_id: monthlyFiveId
							});

						case 6:
							deletedMonthlyFive = _context.sent;
							return _context.abrupt("return", res.status(200).send({
								deletedMonthlyFive: deletedMonthlyFive
							}));

						case 10:
							_context.prev = 10;
							_context.t0 = _context["catch"](3);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not delete monthlyFive"
							}));

						case 13:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[3, 10]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	deleteMonthlyFive: deleteMonthlyFive
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    authenticate = _require.authenticate;

var _require2 = __webpack_require__(3),
    router = _require2.Router;

var _require3 = __webpack_require__(159),
    getEvent = _require3.getEvent,
    getEventFromString = _require3.getEventFromString,
    getEventAdmin = _require3.getEventAdmin,
    getRecentEvents = _require3.getRecentEvents;

var _require4 = __webpack_require__(160),
    createEvent = _require4.createEvent;

var _require5 = __webpack_require__(161),
    updateEvent = _require5.updateEvent,
    setEventUpdated = _require5.setEventUpdated;

module.exports = function (models, _ref) {
	var config = _ref.config;


	var api = new router();

	api.get('/getEvent', getEvent(models));

	api.get('/getEventFromString', getEventFromString(models));

	// Based on num skip and category
	api.get('/getRecentEvents', getRecentEvents(models));

	// Get either published projects or drafts
	api.get('/getEventAdmin', authenticate, getEventAdmin(models));

	api.post('/createEvent', authenticate, createEvent(models));

	api.put('/updateEvent', authenticate, updateEvent(models));
	api.put('/setEventUpdated', authenticate, setEventUpdated(models));

	return api;
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = __webpack_require__(29),
    propertiesToProject = _require.propertiesToProject,
    LIMIT_PER_PAGE = _require.LIMIT_PER_PAGE;

var getEventAdmin = function getEventAdmin(_ref) {
	var Event = _ref.Event;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var isPublished, events;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							isPublished = req.query.isPublished;
							_context.next = 4;
							return Event.aggregate([{
								$match: {
									isPublished: isPublished === 'true'
								}
							}, {
								$sort: {
									created: -1
								}
							}, {
								$project: propertiesToProject
							}]);

						case 4:
							events = _context.sent;


							res.status(200).send({
								events: events
							});

							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context['catch'](0);
							return _context.abrupt('return', res.status(400).send({
								message: "there was an error getting the admin events."
							}));

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 8]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var getEvent = function getEvent(_ref3) {
	var Event = _ref3.Event;
	return function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var eventId, event;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							eventId = req.query.eventId;
							_context2.prev = 1;
							_context2.next = 4;
							return Event.findOne({ _id: eventId });

						case 4:
							event = _context2.sent;

							if (!event) {
								_context2.next = 9;
								break;
							}

							return _context2.abrupt('return', res.status(200).send({
								event: event
							}));

						case 9:
							return _context2.abrupt('return', res.status(404).send({
								message: "There is no event with that id."
							}));

						case 10:
							_context2.next = 15;
							break;

						case 12:
							_context2.prev = 12;
							_context2.t0 = _context2['catch'](1);
							return _context2.abrupt('return', res.status(400).send({
								message: "There was an error getting the event."
							}));

						case 15:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined, [[1, 12]]);
		}));

		return function (_x3, _x4) {
			return _ref4.apply(this, arguments);
		};
	}();
};

var getEventFromString = function getEventFromString(_ref5) {
	var Event = _ref5.Event;
	return function () {
		var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
			var urlString, event;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							urlString = req.query.urlString;
							_context3.prev = 1;
							_context3.next = 4;
							return Event.findOne({ urlString: urlString });

						case 4:
							event = _context3.sent;

							if (!event) {
								_context3.next = 9;
								break;
							}

							return _context3.abrupt('return', res.status(200).send({
								event: event
							}));

						case 9:
							return _context3.abrupt('return', res.status(404).send({
								message: "There is no event with that id."
							}));

						case 10:
							_context3.next = 15;
							break;

						case 12:
							_context3.prev = 12;
							_context3.t0 = _context3['catch'](1);
							return _context3.abrupt('return', res.status(400).send({
								message: "There was an error getting the event."
							}));

						case 15:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined, [[1, 12]]);
		}));

		return function (_x5, _x6) {
			return _ref6.apply(this, arguments);
		};
	}();
};

var getRecentEvents = function getRecentEvents(_ref7) {
	var Event = _ref7.Event;
	return function () {
		var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
			var numSkip, allEvents, numToSkip, anotherPage;
			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							numSkip = req.query.numSkip;
							_context4.prev = 1;
							allEvents = void 0;
							numToSkip = void 0;

							if (!(!numSkip || isNaN(numSkip))) {
								_context4.next = 11;
								break;
							}

							_context4.next = 7;
							return Event.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									eventDate: -1
								}
							}, {
								$limit: LIMIT_PER_PAGE + 1
							}, {
								$project: propertiesToProject
							}]);

						case 7:
							allEvents = _context4.sent;

							numToSkip = LIMIT_PER_PAGE;
							_context4.next = 15;
							break;

						case 11:
							_context4.next = 13;
							return Event.aggregate([{
								$match: {
									isPublished: true
								}
							}, {
								$sort: {
									eventDate: -1
								}
							}, {
								$skip: parseInt(numSkip)
							}, {
								$limit: LIMIT_PER_PAGE + 1
							}, {
								$project: propertiesToProject
							}]);

						case 13:
							allEvents = _context4.sent;


							numToSkip = parseInt(numSkip) + LIMIT_PER_PAGE;

						case 15:
							anotherPage = false;

							if (allEvents.length > LIMIT_PER_PAGE) {
								// There is another page
								anotherPage = true;
								allEvents.pop();
							}

							res.status(200).send({
								allEvents: allEvents,
								anotherPage: anotherPage,
								numToSkip: numToSkip
							});
							_context4.next = 24;
							break;

						case 20:
							_context4.prev = 20;
							_context4.t0 = _context4['catch'](1);

							console.error('Error filtering events: ', _context4.t0);
							return _context4.abrupt('return', res.status(400).send({
								message: "There was an error getting the events."
							}));

						case 24:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, undefined, [[1, 20]]);
		}));

		return function (_x7, _x8) {
			return _ref8.apply(this, arguments);
		};
	}();
};

module.exports = {
	getEvent: getEvent,
	getEventFromString: getEventFromString,
	getRecentEvents: getRecentEvents,
	getEventAdmin: getEventAdmin
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createEvent = function createEvent(_ref) {
	var Event = _ref.Event;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, title, contentPreview, eventDate, heroURL, content, recap, keyInfo, urlString, isPublished, eventData, setEvent;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, title = _req$body.title, contentPreview = _req$body.contentPreview, eventDate = _req$body.eventDate, heroURL = _req$body.heroURL, content = _req$body.content, recap = _req$body.recap, keyInfo = _req$body.keyInfo, urlString = _req$body.urlString, isPublished = _req$body.isPublished;
							_context.prev = 1;
							eventData = {
								title: title,
								contentPreview: contentPreview,
								eventDate: eventDate,

								content: content,
								recap: recap,
								keyInfo: keyInfo,
								isPublished: isPublished,
								urlString: urlString || title.replace(/ /g, '-').toLowerCase(),

								heroURL: heroURL,
								owner: req.user.id
							};


							if (isPublished) {
								eventData.publishDate = new Date();
							}
							eventData.lastUpdated = new Date();
							setEvent = new Event(eventData);
							_context.next = 8;
							return setEvent.save();

						case 8:
							return _context.abrupt("return", res.status(200).send({
								eventId: setEvent._id
							}));

						case 11:
							_context.prev = 11;
							_context.t0 = _context["catch"](1);
							return _context.abrupt("return", res.status(400).send({
								message: "Could not create event"
							}));

						case 14:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 11]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	createEvent: createEvent
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var setEventUpdated = function setEventUpdated(_ref) {
	var Event = _ref.Event;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var eventId, newDate, newEvent;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							eventId = req.body.eventId;
							_context.prev = 1;
							newDate = new Date();
							_context.next = 5;
							return Event.findOneAndUpdate({ _id: eventId }, {
								$set: {
									lastUpdated: newDate
								}
							}, {
								new: true
							});

						case 5:
							newEvent = _context.sent;


							console.log('event id: ', eventId);

							return _context.abrupt('return', res.status(200).send({
								event: newEvent
							}));

						case 10:
							_context.prev = 10;
							_context.t0 = _context['catch'](1);
							return _context.abrupt('return', res.status(400).send({
								message: "Could not update event"
							}));

						case 13:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 10]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var updateEvent = function updateEvent(_ref3) {
	var Event = _ref3.Event;
	return function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var _req$body, title, contentPreview, eventDate, content, recap, isPublished, urlString, keyInfo, heroURL, eventId, prevEvent, updateData, setEvent;

			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_req$body = req.body, title = _req$body.title, contentPreview = _req$body.contentPreview, eventDate = _req$body.eventDate, content = _req$body.content, recap = _req$body.recap, isPublished = _req$body.isPublished, urlString = _req$body.urlString, keyInfo = _req$body.keyInfo, heroURL = _req$body.heroURL, eventId = _req$body.eventId;
							_context2.prev = 1;
							_context2.next = 4;
							return Event.findOne({ _id: eventId });

						case 4:
							prevEvent = _context2.sent;
							updateData = _extends({}, title && { title: title }, contentPreview && { contentPreview: contentPreview }, eventDate && { eventDate: eventDate }, content && { content: content }, recap && { recap: recap }, keyInfo && { keyInfo: keyInfo }, typeof isPublished !== 'undefined' && { isPublished: isPublished }, urlString && { urlString: urlString }, heroURL && { heroURL: heroURL });


							if (isPublished && !prevEvent.isPublished) {
								updateData.publishDate = new Date();
							}
							_context2.next = 9;
							return Event.findOneAndUpdate({ _id: eventId }, {
								$set: updateData
							}, {
								new: true
							});

						case 9:
							setEvent = _context2.sent;
							return _context2.abrupt('return', res.status(200).send({
								event: setEvent
							}));

						case 13:
							_context2.prev = 13;
							_context2.t0 = _context2['catch'](1);
							return _context2.abrupt('return', res.status(400).send({
								message: "Could not update event"
							}));

						case 16:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined, [[1, 13]]);
		}));

		return function (_x3, _x4) {
			return _ref4.apply(this, arguments);
		};
	}();
};

module.exports = {
	updateEvent: updateEvent,
	setEventUpdated: setEventUpdated
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    authenticate = _require.authenticate;

var _require2 = __webpack_require__(3),
    router = _require2.Router;

var _require3 = __webpack_require__(163),
    getHighlight = _require3.getHighlight;

var _require4 = __webpack_require__(164),
    updateHighlight = _require4.updateHighlight;

module.exports = function (models, _ref) {
	var config = _ref.config;


	var api = new router();

	api.get('/getHighlight', getHighlight(models));

	api.put('/updateHighlight', authenticate, updateHighlight(models));

	return api;
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = __webpack_require__(29),
    eventPropertiesToProject = _require.propertiesToProject;

var _require2 = __webpack_require__(28),
    monthlyFivePropertiesToProject = _require2.propertiesToProject;

var _require3 = __webpack_require__(27),
    projectPropertiesToProject = _require3.propertiesToProject;

var getHighlight = function getHighlight(_ref) {
	var Highlight = _ref.Highlight,
	    Event = _ref.Event,
	    MonthlyFive = _ref.MonthlyFive,
	    Project = _ref.Project;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var highlight, highlightObject;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return Highlight.findOne();

						case 3:
							highlight = _context.sent;

							if (!highlight) {
								_context.next = 25;
								break;
							}

							// process what type of highlight it is and fill in the data
							highlightObject = void 0;
							_context.t0 = highlight.dataType;
							_context.next = _context.t0 === 'event' ? 9 : _context.t0 === 'monthlyFive' ? 13 : _context.t0 === 'project' ? 17 : 21;
							break;

						case 9:
							_context.next = 11;
							return Event.aggregate([{
								$match: { _id: highlight.dataRef }
							}, {
								$project: eventPropertiesToProject
							}]);

						case 11:
							highlightObject = _context.sent;
							return _context.abrupt('break', 21);

						case 13:
							_context.next = 15;
							return MonthlyFive.aggregate([{
								$match: { _id: highlight.dataRef }
							}, {
								$project: monthlyFivePropertiesToProject
							}]);

						case 15:
							highlightObject = _context.sent;
							return _context.abrupt('break', 21);

						case 17:
							_context.next = 19;
							return Project.aggregate([{
								$match: { _id: highlight.dataRef }
							}, {
								$project: projectPropertiesToProject
							}]);

						case 19:
							highlightObject = _context.sent;
							return _context.abrupt('break', 21);

						case 21:
							if (highlightObject && highlightObject.length) highlightObject = highlightObject[0];
							return _context.abrupt('return', res.status(200).send({
								highlight: highlight,
								highlightObject: highlightObject
							}));

						case 25:
							return _context.abrupt('return', res.status(400).send({
								message: 'Highlight not set.'
							}));

						case 26:
							_context.next = 32;
							break;

						case 28:
							_context.prev = 28;
							_context.t1 = _context['catch'](0);

							console.error('error: ', _context.t1);
							return _context.abrupt('return', res.status(400).send({
								message: "There was an error getting the highlight."
							}));

						case 32:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 28]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	getHighlight: getHighlight
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mongoose = __webpack_require__(1);

var HIGHLIGHT_TYPES = ['event', 'project', 'monthlyFive'];
var updateHighlight = function updateHighlight(_ref) {
	var Highlight = _ref.Highlight,
	    Event = _ref.Event,
	    Project = _ref.Project,
	    MonthlyFive = _ref.MonthlyFive;
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$body, type, id, highlightObject, highlight, newHighlight, updatedHighlight;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$body = req.body, type = _req$body.type, id = _req$body.id;

							if (HIGHLIGHT_TYPES.includes(type)) {
								_context.next = 3;
								break;
							}

							return _context.abrupt('return', res.status(400).send({
								message: 'This is not a type that is allowed to be a highlight.'
							}));

						case 3:
							_context.prev = 3;


							// Find the entry that is being referenced by id
							highlightObject = void 0;
							_context.t0 = type;
							_context.next = _context.t0 === 'event' ? 8 : _context.t0 === 'monthlyFive' ? 12 : _context.t0 === 'project' ? 16 : 20;
							break;

						case 8:
							_context.next = 10;
							return Event.findOne({ _id: id });

						case 10:
							highlightObject = _context.sent;
							return _context.abrupt('break', 20);

						case 12:
							_context.next = 14;
							return MonthlyFive.findOne({ _id: id });

						case 14:
							highlightObject = _context.sent;
							return _context.abrupt('break', 20);

						case 16:
							_context.next = 18;
							return Project.findOne({ _id: id });

						case 18:
							highlightObject = _context.sent;
							return _context.abrupt('break', 20);

						case 20:
							if (highlightObject) {
								_context.next = 22;
								break;
							}

							return _context.abrupt('return', res.status(400).send({
								message: 'Could not find an object with that id.'
							}));

						case 22:
							_context.next = 24;
							return Highlight.findOne();

						case 24:
							highlight = _context.sent;

							if (highlight) {
								_context.next = 30;
								break;
							}

							// No highlight has been created

							newHighlight = new Highlight({
								dataType: type,
								dataRef: mongoose.Types.ObjectId(id),
								owner: req.user.id
							});
							_context.next = 29;
							return newHighlight.save();

						case 29:
							return _context.abrupt('return', res.status(200).send({
								highlight: newHighlight
							}));

						case 30:
							_context.next = 32;
							return Highlight.findOneAndUpdate({}, {
								$set: {
									dataType: type,
									dataRef: mongoose.Types.ObjectId(id)
								}
							}, {
								new: true
							});

						case 32:
							updatedHighlight = _context.sent;


							res.status(200).send({
								highlight: updatedHighlight
							});

							_context.next = 40;
							break;

						case 36:
							_context.prev = 36;
							_context.t1 = _context['catch'](3);

							console.error('Error updating highlight: ', _context.t1);
							return _context.abrupt('return', res.status(400).send({
								message: "Could not update Highlight"
							}));

						case 40:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[3, 36]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

module.exports = {
	updateHighlight: updateHighlight
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(166),
    passport = _require.passport;

module.exports = { passport: passport };

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var passportNPM = __webpack_require__(23);

var _require = __webpack_require__(167),
    LocalStrategy = _require.Strategy;

var GoogleTokenStrategy = __webpack_require__(168).Strategy;

var _require2 = __webpack_require__(22),
    User = _require2.User;

var _require3 = __webpack_require__(169),
    PassportStrategies = _require3.PassportStrategies;

var config = __webpack_require__(7);

var _require4 = __webpack_require__(7),
    configObject = _require4.config;

/**
 * Provide passport authenticate logic
 *
 *  @example
 *         ./index.js
 *         app.use(passport.init())
 * **/

var Passport = function () {
  function Passport(config) {
    _classCallCheck(this, Passport);

    this._passport = passportNPM;
    this._strategies = new PassportStrategies(config, User);

    this._passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, this._strategies.local));

    // this._passport.use(
    //   new GoogleTokenStrategy(
    //     {
    //       clientID: configObject.passport.googleClientId,
    //       clientSecret: configObject.passport.googleClientSecret,
    //     },
    //     this._strategies.google,
    //   ),
    // );
  }

  _createClass(Passport, [{
    key: 'init',
    value: function init() {
      this._passport.serializeUser(User.serializeUser());
      this._passport.deserializeUser(User.deserializeUser());

      return this._passport.initialize();
    }
  }]);

  return Passport;
}();

var passport = new Passport(config);

module.exports = { passport: passport };

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = require("passport-google-token");

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = __webpack_require__(11);

var _require = __webpack_require__(24),
    Unauthorized = _require.Unauthorized;

/**
 * Provide passport authenticate strategies
 *
 *   here you should register your strategies callbacks to create ne user
 *   and use it in ./Passport.js
 *
 * **/

var PassportStrategies = function () {
  function PassportStrategies(config, User) {
    _classCallCheck(this, PassportStrategies);

    this._User = User;
    this.google = this.google.bind(this);
    this.local = this.local.bind(this);
    this.facebook = this.facebook.bind(this);
    this.instagram = this.instagram.bind(this);
  }

  _createClass(PassportStrategies, [{
    key: 'local',
    value: function local(username, password, done) {
      var error = new Unauthorized(401, 'Incorrect username or password.');
      this._User.findOne({ email: username }).then(function (user) {
        return user ? user.authenticate(password, function (err, userData) {
          return userData ? done(null, user) : done(error, false);
        }) : done(error, false);
      }).catch(done);
    }
    // extend if needed

  }, {
    key: 'google',
    value: function google(accessToken, refreshToken, profile, done) {
      this._User.upsertGoogleUser(accessToken, refreshToken, profile, function (err, user) {
        return done(err, user);
      });
    }
  }, {
    key: 'facebook',
    value: function facebook(accessToken, refreshToken, profile, done) {}
  }, {
    key: 'instagram',
    value: function instagram(req, accessToken, refreshToken, profile, done) {}
  }]);

  return PassportStrategies;
}();

module.exports = { PassportStrategies: PassportStrategies };

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(171),
    mongoManager = _require.mongoManager;

module.exports = { mongoManager: mongoManager };

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mongoose = __webpack_require__(1);

var MongoManager = function () {
  function MongoManager() {
    _classCallCheck(this, MongoManager);
  }

  _createClass(MongoManager, [{
    key: 'getMongoUrl',
    value: function getMongoUrl() {
      if (!process.env.MONGODB_URI) {
        console.error('No mongo uri set!');
      }
      return process.env.MONGODB_URI;
    }
  }, {
    key: 'connect',
    value: function connect() {
      return mongoose.connect(this.getMongoUrl(), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
        // useUnifiedTopology: true,
      });
    }
  }]);

  return MongoManager;
}();

var mongoManager = new MongoManager();

module.exports = { mongoManager: mongoManager };

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ]);