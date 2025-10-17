export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        const suits = ['hearts', 'diamonds', 'clubs', 'ace'];
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

        for (let suit of suits) {
            for (let value of values) {
                this.stack.push(`${suit}_${value}`);
            }
        }

        shuffle(this.stack);
    }
}

function shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

