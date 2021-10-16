"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValidator = void 0;
const React = require("react");
const form_validator_1 = require("./form-validator");
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
