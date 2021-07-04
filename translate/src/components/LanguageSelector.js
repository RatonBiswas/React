import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext'
class LanguageSelector extends Component {
  static contextType = LanguageContext
    render() {
        return (
            <div>
          Select A Language :
          <i
            className="flag us"
            onClick={() => this.context.onLanguageChange("english")}
          ></i>
          <i
            className="flag bd"
            onClick={() => this.context.onLanguageChange("bangla")}
          ></i>
        </div>
        );
    }
}

export default LanguageSelector;