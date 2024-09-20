// the same:

interface UserA {
    name: string;
    age: number;
}

const userA: UserA = {
    name: 'Kostya',
    age: 35
}

type UserB = {
    name: string;
    age: number;
}

const userB: UserB = {
    name: 'Keith',
    age: 25
}