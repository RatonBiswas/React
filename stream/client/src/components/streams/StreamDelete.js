import React, { Component } from "react";
import Modal from "../Modal";
import {connect} from 'react-redux'
import history from '../../history';
import { fetchStream } from '../../actions'

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  renderAction() {
    <React.Fragment>
      <button className="ui primary button">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>;
  } 
  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderAction()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default connect(null,{fetchStream})(StreamDelete);
