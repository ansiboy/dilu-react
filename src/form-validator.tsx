import { Rule } from "maishu-dilu";
import * as React from "react";
import { FieldValidator } from "./value-validator";

export class FormValidator {
    private _fieldValidators: FieldValidator[] = [];

    get fieldValidators() {
        return this._fieldValidators;
    }

    field(value: any, rules: Rule[], name?: string,) {
        return <FieldValidator value={value} rules={rules} name={name}
            ref={e => {
                if (e == null || this._fieldValidators.indexOf(e) >= 0)
                    return;

                this._fieldValidators.push(e);
            }} />
    }

    check() {
        this._fieldValidators.forEach(c => {
            c.validateUndefineValue = true;
            c.check();
        })
    }
}