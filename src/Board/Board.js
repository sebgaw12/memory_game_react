import {Component} from 'react';
import Card from './Card';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: []
        }

    }

    randomizeCards() {

        const pairs = 6;
        const maxCount = 2;
        const maxNum = 24
        const minNum = 1
        const countInArray = (arr, value) => arr.filter((item) => item === value).length;

        function getRandomNumbersInArray() {
            return () => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        }

        let numbers = Array.from({length: pairs * maxCount}, getRandomNumbersInArray());
        let tab = [];

        while (tab.length < pairs * maxCount) {
            const randomIndex = Math.floor(Math.random() * numbers.length)
            const number = numbers[randomIndex]


            const count = countInArray(tab, number)

            if (count < maxCount) {
                tab.push(number)
            }


            if (count === maxCount) {
                numbers.splice(randomIndex, 1)
            }
        }
        // for(let i = 0; i < 12; i++)
        // {
        //     tab.push(this.randomInteger(0, 5));
        // }
        return tab;
    }


    componentDidMount() {
        let cards = this.randomizeCards();
        this.setState({cards});
    }

    render() {
        return (
            <div className="board">
                { /* this.state.cards.map((card, index) => <p key={index}>{card}</p>)*/}
                {this.state.cards.map((card) => <Card value={card}/>)}
            </div>
        )
    }
}

export default Board;