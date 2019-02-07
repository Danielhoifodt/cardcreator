import React, { Component } from 'react';
import './CardEditor.css';



class CardEditor extends Component {
    constructor (props) {
        super(props);
        this.state = {
            front: "",
            back: ""
        }
    }
    warning = () => {
        if (this.props.cards.toString() === "" ) {
        alert('Fill in a card before moving to viewer');
        }else {
            return null;
        }
    }

    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    addCard = () => {
        this.props.addCard(this.state.front, this.state.back);
        this.setState({
            front : "",
            back: ""
        });
    }
    deleteCard = (event) => {
        this.props.deleteCard(event.target.dataset.index);
    }
    showButton = (event) => {
        let showButton = event.target.value;
        this.setState({showButton});
    }

  render() {
    
    const row = this.props.cards.map((card, index) => {
        return (
            <tr key={index}>
                <td>{card.front}</td>
                <td>{card.back}</td>
                <td><button data-index={index} onClick={this.deleteCard}>Delete</button></td>
            </tr>
        );
    })

    

    return (
      <div>
        <h2>Card Editor</h2>
        <table>
            <thead>
                <tr>
                    <th>Front</th>
                    <th>Back</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
       </table>
       <br />
       <input onChange={this.handleChange} name="front" placeholder="front of card" value={this.state.front}/>
       <input onChange={this.handleChange} name="back" placeholder="back of card" value={this.state.back}/>
       <button onClick={this.addCard}>Add card</button>
        <button onMouseOver={this.warning} onClick={this.props.switchMode}>Go to viewer</button>
        
      </div>
    );
  }
}

export default CardEditor;