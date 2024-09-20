
function len(collection) {
    return collection.length;
}

const len1 = len('Hello');
const len2 = len([1,2,3,4]);
const len3 = len(3); //Error not accepted

function lenG<T extends { length: number }>(collection: T) {
    return collection.length;
}

const len1G = lenG('Hello');
const len2G = lenG([1,2,3,4]);
const len3G = lenG(3); //Error accepted by TS



