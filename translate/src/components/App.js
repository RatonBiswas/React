import React, { Component } from "react";
import UserCreate from "./UserCreate"
import LanguageContext from '../contexts/LanguageContext';

class App extends Component {
  state = { language: 'english' }

  onLanguageChange = language =>{
      this.setState({ language})
  }
  render() {
    return (
      <div className="ui container">
        <div>
          Select A Language : 
          <i className="flag us" onClick = {()=> this.onLanguageChange('english')}></i>
          <i className="flag bd" onClick = {()=> this.onLanguageChange('bangla')}></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate/>
        </LanguageContext.Provider>
        {console.log(this.state.language)}
      </div>
    );
  }
}

export default App;