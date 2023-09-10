import './Board.css';
import { Component } from 'react';

/* const Card = (props) => <div class='tile'><p>{props.value}</p></div>; */

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reversed: true,
            matched: false
        }
    }

    render() {
        return (
            <div class='tile'><p>{this.props.value}</p></div>
        )
    }
}

export default Card;