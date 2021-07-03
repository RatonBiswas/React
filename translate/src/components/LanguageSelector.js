import React, { Component } from 'react';

class LanguageSelector extends Component {
    render() {
        return (
            <div>
          Select A Language :
          <i
            className="flag us"
            onClick={() => this.props.onLanguageChange("english")}
          ></i>
          <i
            className="flag bd"
            onClick={() => this.props.onLanguageChange("bangla")}
          ></i>
        </div>
        );
    }
}

export default LanguageSelector;