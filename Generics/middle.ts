
function merge(o1, o2) {
    return {
        ...o1,
        ...o2
    }
}

// type any
const res1 = merge({a:1},{b:2});

function mergeGen<T, V>(o1: T, o2: V): T&V {
    return {
        ...o1,
        ...o2
    }
}

// type {a:number} & {b:number}
const res2 = mergeGen({a:1},{b:2});