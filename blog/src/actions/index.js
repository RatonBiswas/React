import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) =>
  {
    const response = jsonPlaceholder.get("/posts");

    await dispatch({
      type: "FETCH_POSTS",
      payload: response,
    });
  };
