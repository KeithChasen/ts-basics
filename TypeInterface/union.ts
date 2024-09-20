// Union only type
type Age = {
    age: number
}

type Name = {
    name: string
}

type UserUnion = Age | Name;

const obj1: UserUnion = {
    age: 35
}

const obj2: UserUnion = {
    name: 'Kostya'
}

const obj3: UserUnion = {
    age: 25,
    name: 'Keith'
}