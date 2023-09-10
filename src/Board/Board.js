import { Component } from 'react';
import Card  from './Card';

class Board extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            cards : []
        }
        
    }

    randomizeCards() {
        var tab = [];
        for(let i = 0; i < 12; i++)
        {
            tab.push(this.randomInteger(0, 5));
        }
        return tab;
    }


    componentDidMount()
    {
        var abs = this.randomizeCards();
        console.log(abs);
        this.setState({cards : abs});
    }

    
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    render() {
        return (
            <div class="board">
                { /* this.state.cards.map((card, index) => <p key={index}>{card}</p>)*/ }
                { this.state.cards.map((card) => <Card value={card} />) }
            </div>
        )
    }
}

export default Board;