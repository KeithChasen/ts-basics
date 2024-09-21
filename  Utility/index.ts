
// READONLY
// makes all properties readonly
type Task = {
    id: number;
    text: string;
    isCompleted?: boolean;
    completedDate?: Date | undefined;
}

type ReadonlyTask = Readonly<Task>

const task: ReadonlyTask = {
    id: 1,
    text: 'Text'
}

// -----------------

//PARTIAL
// makes all properties not required
type OptionalTask = Partial<Task>

// REQUIRED
// makes all properties required
type RequiredTask = Required<Task>

// --------------

//PICK
// pick some fields
type UserSchema = {
    username: string,
    email: string,
    bio: string,
    image: string
    password: string,
    id: string
}

type PublicUserFields = Pick<UserSchema, 'username' | 'bio' | 'image'>

// OMIT
// omit some properties
type PublicUserF = Omit<UserSchema, 'password' | 'id'>

// RECORD<K, T>
// K - type of keys
// T - type of values

type Obj = Record<string, string>
type ObjN = Record<number, string>

type O = Record<'A' | 'B' | 'C', string>


type ThemeParams = {
    fontSize: number;
    color: string
}

type Theme = 'light' | 'dark'

type AppTheme = Record<Theme, ThemeParams>

const theme: AppTheme = {
    light: { fontSize: 3, color: 'yellow'},
    dark: { fontSize: 2, color: 'grey'},
}

// EXCLUDE
//Exclude<T, U>
// exclude U from T
type UserSchemaN = {
    username: string,
    email: string,
    bio: string,
    image: string
    password: string,
    id: string
}

type PublicUserN = Exclude<keyof UserSchemaN, 'password' | 'id'>

// EXTRACT
// Extract<T,U>
// common properties for T and U
type Intersection = Extract<'id'|'name', 'name'>

// NONNULLABLE
// deletes null and undefined
type T = NonNullable<'string' | null | undefined>

// RETURNTYPE
// return type of the function

function getInt(n: string) {
    return parseInt(n)
}

type Rt = ReturnType<typeof getInt>

// PARAMETERS
// get parameters types of a function
type fP = Parameters<typeof getInt>

// CONSTRUCTOR PARAMETERS
class PersonP {
    constructor(
        public name: string,
        public surname: string,
        public age: number
    ) {}
}

type PersonInpt = ConstructorParameters<typeof PersonP>

// AWAITED<T>
// performs deployment of promises

// even if Promise<Promise<string>>
declare function fetch(): Promise<string>

type FetchResult = Awaited<ReturnType<typeof fetch>>


// types for manipulating with strings:
// UPPERCASE | LOWERCASE | CAPITALIZE | UNCAPITALIZE

const user = {
    name: 'John',
    age: 35
}
type UserD = typeof user;

type WithGetters<T extends string> = Record<`get${Capitalize<T>}`, () => string>
declare function createGetters(u: UserD): WithGetters<keyof User>

const userWithGetters = createGetters(user)

userWithGetters.getName()
userWithGetters.getAge();