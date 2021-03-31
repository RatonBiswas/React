/* eslint-disable no-unused-vars */
import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch,getState) =>{
  console.log('about to fetch post');
  await dispatch(fetchPosts())
  // console.log(getState().posts);
  _.map(getState().posts,'userId')
}

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

export const fetchUser = id=>  async dispatch =>{
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}

// const _fetchUser = _.memoize(async(id,dispatch)=>{
  // const response = await jsonPlaceholder.get(`/users/${id}`)
  // dispatch({
  //   type: 'FETCH_USER',
  //   payload: response.data
  // })
// })

// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//       type: "FETCH_USER",
//       payload: response.data,
//     });
//   });
// };
