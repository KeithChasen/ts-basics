
// this type can only be string "Admin"
// that's why literal
type Role = 'Admin';

// can be one of three
type Roles = 'Admin' | 'Moderator' | 'User';

// ---------------------

interface User {
    name: string,
    age: number
}

type UserKeys = keyof User;

let prop: UserKeys;

prop = 'name';
prop = 'age';
