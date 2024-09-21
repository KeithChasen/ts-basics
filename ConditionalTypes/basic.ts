type Test<T> = T extends string ? true : false;

type st = Test<'a'> // true
type nu = Test<1> // false

// ------

interface User {
    id: string
}

interface Message {
    id: number
}

function getId<T extends { id: any }>(obj: T): T extends { id: string } ? string : number {
    return obj.id
}

const uId = getId<User>({ id: '123'} as User)
const mId = getId<Message>({ id: 123 } as Message)

// ------

type NotFalsy<T = null> = T extends (null | undefined | false | 0) ? never : T;

let z: NotFalsy<string>

z = 'Hello'

// ------------

type Filter<T, U> = T extends U ? never : T;

// a|c - filtered b
type R = Filter<'a'|'b'|'c', 'b'>

// the same using utility type
type R2 = Exclude<'a'|'b'|'c', 'b'>

// --------------

type GetStatus<T> = T extends object ? 
                    T extends { status: string } ? 
                    T['status'] : 
                        null : 
                        null;

// "ok"
type Status = GetStatus<{ status: 'ok' }>
// null
type Status2 = GetStatus<{ status: 1 }>

// But we need a way our code recognize the type of status
// we need INFER


type TryInfer<T extends object = object> = T extends infer R ? R : never;

// {a:1, b:2}
type RINF = TryInfer<{a:1, b:2}>


type TryInfer2<T extends object = object> = T extends infer R ? R[keyof R] : never;

// 1|2
type RINF2 = TryInfer2<{a:1, b:2}>

// ------------

function test() {
    return 2;
}

// get the return type of the function we don't know about
type FuncRes<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

//number
type FRES = FuncRes<typeof test>

function returnUserObj() {
    return {
        name: 'Kostya'
    }
}

// { name: string }
type RRES = FuncRes<typeof returnUserObj>

// the same utility type:
type RUT = ReturnType<typeof test>

// -------
// finally use infer with GetStatus

type GetStatusINF<T> = T extends infer U ? 
                    U extends { status: any } ? 
                    U['status'] : 
                        null : 
                        null;

// "ok"
type StatusINF = GetStatusINF<{ status: 'ok' }>
// 1
type StatusINF2 = GetStatusINF<{ status: 1 }>

