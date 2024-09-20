function identity(arg) {
    return arg;
}

const s:string = 'Hello'
const n:number = 10;

// both type ANY
const r1 = identity(s);
const r2 = identity(n);

//-----
function newIdentity<T>(arg: T) {
    return arg;
}

// types: string and number
const rT1 = newIdentity(s);
const rT2 = newIdentity(n);