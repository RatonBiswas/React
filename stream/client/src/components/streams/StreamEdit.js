import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream,createStream } from "../../actions";
import StreamForm from "./StreamForm"

// import { fetchStream } from '../../actions'
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.createStream(formValues)

  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
    <div>
        <h3>Edit A Stream</h3>
        <StreamForm initialValues={this.props.stream}
         onSubmit={this.onSubmit}/>
    </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit);
