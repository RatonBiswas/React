import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = async () =>{
    // bad approach because we found Error: Actions must be plain objects. Use custom middleware for async actions.
    const response = await jsonPlaceholder.get('/posts')
    return {
        type : 'FETCH_POSTS',
        payload: response
    }
}