import React from 'react';
import {connect} from 'react-redux'
import { streamList } from '../../actions'

const StreamList = () => {
    return (
        <div>
            Stream
        </div>
    );
};

export default connect(null,{streamList})(formWrapped)
