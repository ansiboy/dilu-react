"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = void 0;
const React = require("react");
const value_validator_1 = require("./value-validator");
class FormValidator {
    constructor() {
        this._fieldValidators = [];
    }
    get fieldValidators() {
        return this._fieldValidators;
    }
    field(value, rules, name) {
        return React.createElement(value_validator_1.FieldValidator, { value: value, rules: rules, name: name, ref: e => {
                if (e == null || this._fieldValidators.indexOf(e) >= 0)
                    return;
                this._fieldValidators.push(e);
            } });
    }
    check() {
        this._fieldValidators.forEach(c => {
            c.validateUndefineValue = true;
            c.check();
        });
    }
}
exports.FormValidator = FormValidator;
