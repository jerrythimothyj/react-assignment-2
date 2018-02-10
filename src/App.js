import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    personName: ''
  }

  handleChange = (event) => {
    this.setState({
      personName: event.target.value
    })
  }

  deleteCharComponent = (event, index) => {
    const personNameArr = this.state.personName.split('');
    personNameArr.splice(index, 1)
    const updatedPersonName = personNameArr.join('');
    this.setState({
      personName: updatedPersonName
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text"
               onChange={this.handleChange}
               value={this.state.personName} />
        <ValidationComponent textLength={this.state.personName.length} />
        {this.state.personName.split('').map((eachChar, index) => {
          return (
            <CharComponent char={eachChar}
                           key={index}
                           deleteChar={(event) => this.deleteCharComponent(event, index)} />
          )
        })}
      </div>
    );
  }
}

export default App;
