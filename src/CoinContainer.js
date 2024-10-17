import React, { Component } from "react"
import Coin from './Coin'
import { choice } from './helper'
import "./CoinContainer.css"

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { src: 'https://tinyurl.com/react-coin-heads-jpg', alt: 'heads' },
            { src: 'https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_UF894,1000_QL80_.jpg', alt: 'tails' }]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            flips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                flips: st.flips + 1,
                nHeads: st.nHeads + (newCoin.alt === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.alt === 'tails' ? 1 : 0)
            }
        })
    }
    handleClick() {
        this.flipCoin()
    }
    render() {
        return (
            <div className='CoinContainer'>
                <h2>Lets flip a coin!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip it!</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        )
    }
}

export default CoinContainer;