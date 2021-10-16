import { Rule } from "./rules";
import * as React from "react";
import { FieldValidator, ValidityCondition } from "./value-validator";

export class FormValidator {
    private _fieldValidators: FieldValidator[] = [];

    static errorClassName = "validationMessage";

    get fieldValidators() {
        return this._fieldValidators;
    }

    field(value: any, rules: Rule[], condition?: ValidityCondition): JSX.Element;
    field(value: any, rules: Rule[], name?: string): JSX.Element;
    field(value: any, rules: Rule[], condition: ValidityCondition, name: string): JSX.Element;
    field(value: any, rules: Rule[], conditionOrName?: ValidityCondition | string, name?: string) {
        let condition: ValidityCondition | undefined;
        if (typeof conditionOrName == "function") {
            condition = conditionOrName;
        }
        else if (typeof conditionOrName == "string") {
            name = conditionOrName;
        }

        return <FieldValidator value={value} rules={rules} name={name} condition={condition}
            ref={e => {
                if (e == null || this._fieldValidators.indexOf(e) >= 0)
                    return;

                this._fieldValidators.push(e);
            }} />
    }

    check() {
        let r: boolean = true;
        this._fieldValidators.forEach(c => {
            c.validateUndefineValue = true;
            if (c.check() == false) {
                console.error(c.state.errorMessage);
                r = false;
            }
        })

        return r;
    }

    clearErrors() {
        this._fieldValidators.forEach(c => {
            c.setState({ errorMessage: "" });
        })
    }
}