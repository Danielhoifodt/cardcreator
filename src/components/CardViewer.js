import React, { Component } from 'react';
import './CardViewer.css';



class CardViewer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            frontview : true,
            cardIndex: 0
        }
    }

    flipCard = () => {
        this.setState(state => ({
            frontview: !state.frontview
        }));
    }
    nextCard = () => {
        const numCards = this.props.cards.length;

        this.setState(state => {
            return {cardIndex: (state.cardIndex + 1) % numCards}
        });
    }

  render() {

    const idx = this.state.cardIndex;
    const card = this.props.cards[idx];
    let view = this.state.frontview ? card.front : card.back;

    return (
      <div>
        <div className="card">
            Card #: 
            {this.state.cardIndex} 
            <h2 onClick={this.flipCard}>{view}</h2>
        </div>
        <br />
        <button onClick={this.nextCard} data-index={idx}>Next Card</button>
        <hr/>
        <button onClick={this.props.switchMode}>Go to editor</button>
      </div>
    );
  }
}

export default CardViewer;