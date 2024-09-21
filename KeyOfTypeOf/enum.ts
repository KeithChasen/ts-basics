enum Colors {
    white = '#fff',
    black = '#000'
}

// white | black
type AvailableColors = keyof typeof Colors;

let color: AvailableColors = 'white';
