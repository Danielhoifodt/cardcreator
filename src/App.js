import React, { Component } from 'react';
import CardEditor from './components/CardEditor';
import CardViewer from './components/CardViewer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editor : true,
      cards   : []
    }
  }
  
  switchMode = () => {
    this.setState(state => ({
      editor : !state.editor
    }));
  }
  addCard = (front, back) => {
    this.setState(state => ({
      cards : [...state.cards, {front, back}]     
    }));
  }
  deleteCard = (index) => {
    this.setState(state => {
      const cards = [...state.cards];
      cards.splice(index, 1);
      return {cards};
    })
  }
  
  render() {
    if (this.state.editor) {
      return (
        <CardEditor 
          deleteCard={this.deleteCard} 
          addCard={this.addCard} 
          cards={this.state.cards} 
          switchMode={this.switchMode}
      
        />
      );
    }else{
      return  ( 
        <CardViewer cards={this.state.cards} switchMode={this.switchMode}/>

      );
    }
  }
}

export default App;
