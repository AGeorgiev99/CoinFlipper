import React, { Component } from "react"
import './Coin.css'

class Coin extends Component {
    render() {
        return <div className='Coin'>
            <img src={this.props.info.src} alt={this.props.info.alt} />
        </div>
    }
}

export default Coin;