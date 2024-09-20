
function patchField<
    T extends object,
    U extends keyof T,
    V extends T[U] // data type of a particular property value
>(obj: T, field: U, val: V) {

}

patchField({ f: 1 }, 'f', 3) // ok
patchField({ f: 1 }, 'f', '3') // not ok because initially f is number not a string

