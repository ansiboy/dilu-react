import { ClassAttributes } from "react";
import { Rule } from "./rules";
import * as React from "react";
export declare type ValidityCondition = () => boolean;
export interface FieldValidatorProps extends ClassAttributes<FieldValidator> {
    value: any;
    rules: Rule[];
    name?: string;
    condition?: ValidityCondition;
    errorClassName?: string;
}
export interface FieldValidatorState {
    errorMessage?: string;
    value: any;
}
export declare class FieldValidator extends React.Component<FieldValidatorProps, FieldValidatorState> {
    private _validateUndefineValue;
    constructor(props: FieldValidatorProps);
    static getDerivedStateFromProps(props: FieldValidatorProps, prevState: FieldValidatorState): FieldValidatorState;
    check(): boolean;
    get validateUndefineValue(): boolean;
    set validateUndefineValue(value: boolean);
    private static checkValue;
    render(): JSX.Element;
}
