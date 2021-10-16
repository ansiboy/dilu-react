/*!
 * 
 *  maishu-dilu-react v1.6.6
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["dilu-react"] = factory(require("react"));
	else
		root["dilu-react"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/form-validator.js":
/*!*******************************!*\
  !*** ./out/form-validator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = void 0;
const React = __webpack_require__(/*! react */ "react");
const value_validator_1 = __webpack_require__(/*! ./value-validator */ "./out/value-validator.js");
class FormValidator {
    constructor() {
        this._fieldValidators = [];
    }
    get fieldValidators() {
        return this._fieldValidators;
    }
    field(value, rules, conditionOrName, name) {
        let condition;
        if (typeof conditionOrName == "function") {
            condition = conditionOrName;
        }
        else if (typeof conditionOrName == "string") {
            name = conditionOrName;
        }
        return React.createElement(value_validator_1.FieldValidator, { value: value, rules: rules, name: name, condition: condition, ref: e => {
                if (e == null || this._fieldValidators.indexOf(e) >= 0)
                    return;
                this._fieldValidators.push(e);
            } });
    }
    check() {
        let r = true;
        this._fieldValidators.forEach(c => {
            c.validateUndefineValue = true;
            if (c.check() == false) {
                console.error(c.state.errorMessage);
                r = false;
            }
        });
        return r;
    }
    clearErrors() {
        this._fieldValidators.forEach(c => {
            c.setState({ errorMessage: "" });
        });
    }
}
exports.FormValidator = FormValidator;
FormValidator.errorClassName = "validationMessage";


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = exports.FieldValidator = exports.rules = void 0;
var rules_1 = __webpack_require__(/*! ./rules */ "./out/rules.js");
Object.defineProperty(exports, "rules", { enumerable: true, get: function () { return rules_1.rules; } });
var value_validator_1 = __webpack_require__(/*! ./value-validator */ "./out/value-validator.js");
Object.defineProperty(exports, "FieldValidator", { enumerable: true, get: function () { return value_validator_1.FieldValidator; } });
var form_validator_1 = __webpack_require__(/*! ./form-validator */ "./out/form-validator.js");
Object.defineProperty(exports, "FormValidator", { enumerable: true, get: function () { return form_validator_1.FormValidator; } });


/***/ }),

/***/ "./out/rules.js":
/*!**********************!*\
  !*** ./out/rules.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
// namespace dilu {
var ruleRegex = /^(.+?)\[(.+)\]$/, numericRegex = /^[0-9]+$/, integerRegex = /^\-?[0-9]+$/, decimalRegex = /^\-?[0-9]*\.?[0-9]+$/, emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, alphaRegex = /^[a-z]+$/i, alphaNumericRegex = /^[a-z0-9]+$/i, alphaDashRegex = /^[a-z0-9_\-]+$/i, naturalRegex = /^[0-9]+$/i, naturalNoZeroRegex = /^[1-9][0-9]*$/i, ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i, base64Regex = /[^a-zA-Z0-9\/\+=]/i, numericDashRegex = /^[\d\-\s]+$/, urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, mobileRegex = /^1[34578]\d{9}$/, dateRegex = /\d{4}-\d{1,2}-\d{1,2}/;
let msgs = {
    required: '%s不能为空',
    matches: '%s与%s不匹配',
    "default": 'The %s field is still set to default, please change.',
    equal: '%s和%s必须相同',
    email: '不是有效的邮箱地址',
    valid_emails: 'The %s field must contain all valid email addresses.',
    minLength: '%s至少包含%s个字符',
    maxLength: '%s不能超过%s字符',
    exact_length: 'The %s field must be exactly %s characters in length.',
    greater_than: 'The %s field must contain a number greater than %s.',
    less_than: 'The %s field must contain a number less than %s.',
    alpha: 'The %s field must only contain alphabetical characters.',
    alpha_numeric: 'The %s field must only contain alpha-numeric characters.',
    alpha_dash: 'The %s field must only contain alpha-numeric characters, underscores, and dashes.',
    numeric: '请数入数字',
    integer: 'The %s field must contain an integer.',
    decimal: 'The %s field must contain a decimal number.',
    is_natural: 'The %s field must contain only positive numbers.',
    is_natural_no_zero: 'The %s field must contain a number greater than zero.',
    ip: 'The %s field must contain a valid IP.',
    valid_base64: 'The %s field must contain a base64 string.',
    valid_credit_card: 'The %s field must contain a valid credit card number.',
    is_file_type: 'The %s field must contain only %s files.',
    valid_url: 'The %s field must contain a valid URL.',
    greater_than_date: 'The %s field must contain a more recent date than %s.',
    less_than_date: 'The %s field must contain an older date than %s.',
    greater_than_or_equal_date: 'The %s field must contain a date that\'s at least as recent as %s.',
    less_than_or_equal_date: 'The %s field must contain a date that\'s %s or older.',
    mobile: '请输入正确的手机号码',
    custom: '请输入正确制',
};
function createValidation(validate, error) {
    return {
        validate: validate,
        error: error
    };
}
function calc(value) {
    if (typeof value == 'function') {
        return value();
    }
    return value;
}
/**
 * 表单验证规则
 */
exports.rules = {
    /**
     * 验证必填字段
     * @param error 错误提示文字
     */
    required(error) {
        let validate = (value) => (value || "") != '';
        return createValidation(validate, error || msgs.required);
    },
    /**
     * 验证两个字段值是否相等
     * @param otherElement 另外一个字段
     * @param error 错误提示文字
     */
    matches(otherElement, error) {
        var validate = (value) => value == otherElement.value;
        return createValidation(validate, error || msgs.required);
    },
    /**
     * 验证邮箱
     * @param error 错误提示文字
     */
    email(error) {
        var validate = (value) => emailRegex.test(value);
        return createValidation(validate, error || msgs.required);
    },
    /**
     * 验证字段最小长度
     * @param length 最小长度
     * @param error 错误提示文字
     */
    minLength(length, error) {
        var validate = (value) => (value || '').length >= calc(length);
        return createValidation(validate, error || msgs.minLength);
    },
    /**
     * 验证字段的最大长度
     * @param length 最大长度
     * @param error 错误提示文字
     */
    maxLength(length, error) {
        var validate = (value) => (value || '').length <= calc(length);
        return createValidation(validate, error || msgs.matches);
    },
    /**
     * 验证字段大于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    greaterThan(value, error) {
        var validate = (o) => elementValueCompare(o, calc(value)) == 'greaterThan';
        return createValidation(validate, error || msgs.greater_than);
    },
    /**
     * 验证字段小于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    lessThan(value, error) {
        var validate = (o) => elementValueCompare(o, calc(value)) == 'lessThan';
        return createValidation(validate, error || msgs.less_than);
    },
    /**
     * 验证字段等于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    equal(value, error) {
        var validate = (o) => elementValueCompare(o, calc(value)) == 'equal';
        return createValidation(validate, error || msgs.equal);
    },
    /**
     * 验证字段为 IP
     * @param error 错误提示文字
     */
    ip(error) {
        var validate = (value) => ipRegex.test(value);
        return createValidation(validate, error || msgs.ip);
    },
    /**
     * 验证字段为 URL
     * @param error 错误提示文字
     */
    url(error) {
        var validate = (value) => urlRegex.test(value);
        return createValidation(validate, error || msgs.valid_url);
    },
    /**
     * 验证字段为手机号码
     * @param error 错误提示文字
     */
    mobile(error) {
        var validate = (value) => mobileRegex.test(value);
        return createValidation(validate, error || msgs.mobile);
    },
    /**
     * 验证字段为数字
     * @param error 错误提示文字
     */
    numeric(error) {
        var validate = (value) => numericRegex.test(value);
        return createValidation(validate, error || msgs.numeric);
    },
    /**
     * 自定义验证
     * @param validate 自定义验证的方法
     * @param error 错误提示文字
     */
    custom(validate, error) {
        return createValidation(validate, error || msgs.custom);
    }
};
function elementValueCompare(value, otherValue) {
    let elementValue;
    if (typeof otherValue == 'number') {
        elementValue = decimalRegex.test(value) ? parseFloat(value) : null;
    }
    else if (typeof otherValue == 'string') {
        elementValue = value;
    }
    else {
        elementValue = getValidDate(value);
    }
    if (elementValue == null) {
        if (otherValue == null)
            return "equal";
        else
            return "lessThan";
    }
    if (elementValue < otherValue)
        return 'lessThan';
    else if (elementValue > otherValue)
        return 'greaterThan';
    else
        return 'equal';
}
/**
 * private function _getValidDate: helper function to convert a string date to a Date object
 * @param date (String) must be in format yyyy-mm-dd or use keyword: today
 * @returns {Date} returns false if invalid
 */
function getValidDate(date) {
    if (!date.match('today') && !date.match(dateRegex)) {
        return null;
    }
    var validDate = new Date();
    var validDateArray;
    if (!date.match('today')) {
        validDateArray = date.split('-').map(o => Number.parseInt(o));
        validDate.setFullYear(validDateArray[0]);
        validDate.setMonth(validDateArray[1] - 1);
        validDate.setDate(validDateArray[2]);
    }
    return validDate;
}
;
// }


/***/ }),

/***/ "./out/value-validator.js":
/*!********************************!*\
  !*** ./out/value-validator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValidator = void 0;
const React = __webpack_require__(/*! react */ "react");
const form_validator_1 = __webpack_require__(/*! ./form-validator */ "./out/form-validator.js");
class FieldValidator extends React.Component {
    constructor(props) {
        super(props);
        this._validateUndefineValue = false;
        this.state = { value: props.value };
    }
    static getDerivedStateFromProps(props, prevState) {
        let errorMessage = prevState.errorMessage;
        if (errorMessage) {
            errorMessage = FieldValidator.checkValue(props);
        }
        return { value: props.value, errorMessage };
    }
    check() {
        let errorMessage = FieldValidator.checkValue(this.props);
        this.setState({ errorMessage });
        return errorMessage == undefined;
    }
    get validateUndefineValue() {
        return this._validateUndefineValue;
    }
    set validateUndefineValue(value) {
        this._validateUndefineValue = value;
    }
    static checkValue(props) {
        let { value, rules } = props;
        if (props.condition != null && props.condition() == false) {
            // this.setState({ errorMessage: "" })
            // return true;
            return undefined;
        }
        for (let i = 0; i < rules.length; i++) {
            var r = rules[i].validate(value);
            if (r === false) {
                let error = rules[i].error;
                let errorMessage;
                if (typeof error == "string") {
                    errorMessage = error;
                }
                else if (typeof error == "function") {
                    errorMessage = error();
                }
                else {
                    errorMessage = "Unknonw Error";
                }
                // this.setState({ errorMessage })
                return errorMessage;
            }
            else if (r === true) {
                // this.setState({ errorMessage: "" })
                if (i < rules.length - 1)
                    continue;
                return undefined;
            }
            else {
                throw new Error('Please use checkValueAsync method.');
            }
        }
        return undefined;
    }
    // private validateValue(props: FieldValidatorProps) {
    //     let { value, rules } = props;
    //     if (value === undefined && this.validateUndefineValue == false) {
    //         this.setState({ errorMessage: "" })
    //         return;
    //     }
    //     this.checkValue(props);
    // }
    // componentDidMount() {
    //     this.validateValue(this.props);
    // }
    render() {
        let { errorMessage } = this.state || {};
        return React.createElement("span", { className: this.props.errorClassName || form_validator_1.FormValidator.errorClassName, style: { display: errorMessage ? "block" : "none" } }, errorMessage);
    }
}
exports.FieldValidator = FieldValidator;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map