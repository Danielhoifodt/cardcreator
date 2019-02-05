import React, { Component } from 'react';



class CardViewer extends Component {
  render() {
    return (
      <div>
        <input name="card" />
        <br />
        <button>New Card</button>
        <hr/>
        <button onClick={this.props.switchMode}>Go to editor</button>
      </div>
    );
  }
}

export default CardViewer;