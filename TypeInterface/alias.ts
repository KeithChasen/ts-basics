// only type
type UniqueId = string;

interface User {
    id: UniqueId;
}

// also interface
type Names = string[];

interface NamesB {
    [key: number]: string
}

// Tuple only type
type State = [number, (n: number) => void];

const s: State = [10, n => {}];
