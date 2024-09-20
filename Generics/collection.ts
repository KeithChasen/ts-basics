class DataCollection<T extends { id: string }> {
    // public data -> creates this.data
    constructor(public data: T[]) {}
    search(id: string) {
        this.data.find(d => d.id === id)
    }
}

type UserT = {
    id: string,
    name: string
}

type MessageT = {
    id: string,
    text: string
}

const user: UserT = {
    id: '1',
    name: 'Kostya'
}

const users = new DataCollection([user])

const message: MessageT = {
    id: '2',
    text: 'Message'
}

const messages = new DataCollection([message])

users.search('1')
messages.search('2');