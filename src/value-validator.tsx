import { ClassAttributes } from "react";
import { Rule } from "maishu-dilu";
import * as React from "react";
import { FormValidator } from "./form-validator";

export type ValidityCondition = () => boolean;

export interface FieldValidatorProps extends ClassAttributes<FieldValidator> {
    value: any,
    rules: Rule[],
    name?: string,
    condition?: ValidityCondition,
    errorClassName?: string,
}

export interface FieldValidatorState {
    errorMessage?: string,
    value: any,
}

export class FieldValidator extends React.Component<FieldValidatorProps, FieldValidatorState> {

    private _validateUndefineValue = false;

    constructor(props: FieldValidatorProps) {
        super(props);

        this.state = { value: props.value };
    }

    static getDerivedStateFromProps(props: FieldValidatorProps, prevState: FieldValidatorState): FieldValidatorState {
        let errorMessage = prevState.errorMessage;
        if (errorMessage) {
            errorMessage = FieldValidator.checkValue(props);
        }
        return { value: props.value, errorMessage }
    }

    check() {
        let errorMessage = FieldValidator.checkValue(this.props);
        this.setState({ errorMessage });

        return errorMessage == undefined;
    }

    get validateUndefineValue() {
        return this._validateUndefineValue;
    }
    set validateUndefineValue(value: boolean) {
        this._validateUndefineValue = value;
    }

    private static checkValue(props: FieldValidatorProps): string | undefined {
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
                let errorMessage: string;
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
        return <span className={this.props.errorClassName || FormValidator.errorClassName}
            style={{ display: errorMessage ? "block" : "none" }}>
            {errorMessage}
        </span>
    }
}