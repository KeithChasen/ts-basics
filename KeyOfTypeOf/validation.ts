const formData = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,

    // added
    id: 1
}

// interface ValidationResult {
//     firstName: boolean,
//     lastName: boolean,
//     age: boolean
// }

type ValidationResult = {
    [key in keyof typeof formData]: boolean
}

declare function validate<T>(data:T): ValidationResult

const r = validate(formData)

// validation for any type
declare function uniValidate<T>(data: T): { [key in keyof T]: boolean }

const r1 = uniValidate<typeof formData>(formData)
const r2 = uniValidate({ type: 'ok' });