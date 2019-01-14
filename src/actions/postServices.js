

export function fetchPosts (dispatches) {
    return function(dispatch){
        dispatch({type: 'LOADING POSTS'})
        fetch('http://localhost:3001/api/v1/posts.json',
        {
            method: 'GET'
        } )
        .then(response => response.json())
        .then(postCollection => {
            dispatch({type: 'FETCH POSTS', payload: postCollection})
        })
        .catch(error => console.log(error))
    }
} 

export function addNewPost (dispatches){
    return function(dispatch){
        const data = {post: { title: '', body: ''}}
        fetch('http://localhost:3001/api/v1/posts',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(newPost =>{ 
            dispatch({type: 'ADD POST', payload: [newPost]})
        })
        .catch(error => console.log(error))
    }  
}

export function updatePost(dispatches){
    return function(dispatch){
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        //move to action (ALL FETCH REQUESTS)
        fetch(`http://localhost:3001/api/v1/posts/${this.props.post.id}`,{
            method: 'PUT',
            mode: "cors",
            body: JSON.stringify({post: post})
        })
        .then(response => response.json())
        .then(update =>{
            dispatch({type: 'UPDATE POST', payload: update})
        })
        .catch(error => console.log(error))
    }
}

/* function add post
    fetch post

    TYPE: ADD POST
    dispatch payload: response


*/