// namespace dilu {
export let errors = {
    argumentNull(parameterName: string) {
        let msg = `Parameter ${parameterName} can not be null or empty.`
        return new Error(msg);
    },
    elementValidateRuleNotSet(element: HTMLInputElement) {
        let msg = `元素'${element.name}'没有设置验证规则`;
        return new Error(msg);
    },
    fieldElementCanntNull(fieldIndex?: number) {
        // if (fieldIndex != null)
        let msg = fieldIndex != null ?
            `The element value in the field cannt be null, field index is ${fieldIndex}.` :
            `The element in the field is null`;
        return new Error(msg);
    },
    elementNotExists(name: string) {
        let msg = `Element ${name} is not exits in the form.`;
        return new Error(msg);
    },
    fieldResultExpectBooleanType(name: string) {
        let msg = `Result of ${name} field is expected boolean.`;
        return new Error(msg);
    }
}
// }

