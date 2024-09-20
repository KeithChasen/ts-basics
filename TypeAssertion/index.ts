let someValue: unknown;

someValue = 'Keith';

const s = (someValue as string).toUpperCase();

// cannot use with JSX
const sd = (<string>someValue).toUpperCase();

// ----------------------------

interface UserData {
    name: string;
    age: number;
}

const user: UserData = {} as UserData;

user.name = 'Kostya';
user.age = 35;

const anotherUser: UserData = <UserData>{}

// --------------

const person = {
    name: 'Keith',
    surname: 'Chasen'
}

// this way -> keys are 
// keys: string[]

// with assertion:
// keys: ("name" | "surname")[]
const keys = Object.keys(person) as Array<keyof typeof person>;

const sameKeys = <Array<keyof typeof person>>Object.keys(person);

keys.forEach(k => {
    person[k]
});

// ---------------------

// make sure treat element as html input 
// which has value property
const element = document.querySelector('#name') as HTMLInputElement;

const { value } = element;

// ----------------------------

type ErrorMessage = string | string[] | Error;

const apiError: ErrorMessage = JSON.parse(JSON.stringify('[]'));

// if we wouldnt assert string[] 
// we couldnt use .map
const formattedMessages = (apiError as string[]).map(e => e.toUpperCase())

// ----------------------

// makes name and age readonly
const cUser = {
    name: 'Kostya',
    age: 35
} as const;

