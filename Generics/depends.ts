function getValue(obj, prop) {
    return obj[prop];
}

// TS doesn't know which keys has given object
const result1 = getValue({ name: 'Kostya' }, 'age');


function getValueT<T extends object, U extends keyof T>(obj: T, prop: U) {
    return obj[prop];
}

// now TS knows that 2nd param should be some key of first param
// so now it's error
const result1T = getValueT({ name: 'Kostya' }, 'age');
const result2T = getValueT({ name: 'Kostya' }, 'name');


// --------------------------------

function getKey(obj, value) {
    const key = Object.keys(obj).find(k => obj[k] === value)
    return key;
}

function getKeyT<T extends object, U extends keyof T>(obj: T, value: T[U]): U | null {
    const key = (Object.keys(obj) as Array<U>).find(k => obj[k] === value)
    return key || null;
}