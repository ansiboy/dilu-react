/// <reference types="react" />
import { Rule } from "maishu-dilu";
import { FieldValidator } from "./value-validator";
export declare class FormValidator {
    private _fieldValidators;
    get fieldValidators(): FieldValidator[];
    field(value: any, rules: Rule[], name?: string): JSX.Element;
    check(): void;
}
