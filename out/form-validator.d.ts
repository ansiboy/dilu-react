/// <reference types="react" />
import { Rule } from "maishu-dilu";
import { FieldValidator, ValidityCondition } from "./value-validator";
export declare class FormValidator {
    private _fieldValidators;
    static errorClassName: string;
    get fieldValidators(): FieldValidator[];
    field(value: any, rules: Rule[], condition?: ValidityCondition): JSX.Element;
    field(value: any, rules: Rule[], name?: string): JSX.Element;
    field(value: any, rules: Rule[], condition: ValidityCondition, name: string): JSX.Element;
    check(): boolean;
    clearErrors(): void;
}
