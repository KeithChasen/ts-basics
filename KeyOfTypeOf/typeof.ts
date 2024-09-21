const message = {
    id: 1,
    text: 'JS'
}

// object
const t = typeof message;

// with type
// { id: number, text: string }
type MessageType = typeof message;

const userMessage: MessageType = {
    id: 123,
    text: 'hi'
}

// id | text
type MessageKeys = keyof MessageType;


