// domain logic
// objects we get via api
interface User {
    name: string,
    age: number
}

// we use type to work with these objects:
type Nullable<T> = T | null | undefined;

const newUser: Nullable<User> = null;