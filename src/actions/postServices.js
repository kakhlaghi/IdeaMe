

export default function fetchPosts (dispatches) {
    return function(dispatch){
        dispatch({type: 'LOADING POSTS'})
        fetch('http://localhost:3001/api/v1/posts.json')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => console.log(error))
    }
} 