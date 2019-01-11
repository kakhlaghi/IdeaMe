

export function fetchPosts (dispatches) {
    return function(dispatch){
        dispatch({type: 'LOADING POSTS'})
        fetch('http://localhost:3001/api/v1/posts.json',
        {
            method: 'GET'
        } )
        .then(response => response.json())
        .then(postCollection => {
            console.log('postCollection ', postCollection)
            dispatch({type: 'FETCH POSTS', payload: postCollection})

        })
        .catch(error => console.log(error))
    }
} 