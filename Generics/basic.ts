// GENERICS

interface User {
    name: string,
    age: number
}

interface Message {
    id: number,
    text: string
}

interface UserState {
    loading: boolean;
    error: Error | null;
    data: User;
}

interface MessageState {
    loading: boolean;
    error: Error | null;
    data: Message;
}

// UserState and MessageState are the same
// the only diff is data : User or Message
// so this is a good place to use generics

// so we can create generic State
interface State<T> {
    loading: boolean;
    error: Error | null;
    data: T
}

type NewUserState = State<User>;
type NewMessageState = State<Message>;

const messageState: NewMessageState = {
    loading: false,
    error: null,
    data: {
        id: 1,
        text: 'message'
    }
}


