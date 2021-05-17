import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const streamReducer = (stream = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return {...stream,[action.payload.id]:action.payload};
    case FETCH_STREAMS:
      return stream;
    case FETCH_STREAM:
      return {...stream,[action.payload.id]:action.payload};
    case EDIT_STREAM:
      return {...stream,[action.payload.id]:action.payload};
    case DELETE_STREAM:
      return stream;
    default:
      return stream;
  }
};

export default streamReducer;
