import React, { Component } from 'react';
import CardEditor from './components/CardEditor';
import CardViewer from './components/CardViewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        Hello world!
        <CardEditor />
        <CardViewer />
      </div>
    );
  }
}

export default App;
