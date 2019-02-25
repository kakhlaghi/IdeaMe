export default function postReducer (state = {loading: false, posts: [], editingPostId: null, errors: null}, action){
    switch(action.type){
        case 'LOADING POSTS':
            return Object.assign({}, state, {loading: true})
        case 'FETCH POSTS':
            return {
                ...state,
                posts: [action.payload],
                loading: false
            }
        case 'ADD POST':
            return{
                ...state,
                //posts: [action.payload, ...state.posts],
                loading: false
            }
        case 'CHANGE VOTE':
            let newPosts = state.posts[0].map((post) => {
                if(post.id === action.payload.id){
                    return action.payload
                } else {
                    return post
                }
            })
            return{
                ...state,
                posts: [newPosts],
                loading: false
            }
        case 'UPDATE POST':
            return{
                ...state,
                posts: []
            }    
        case 'DELETE POST':
            return{

            }

        default:
            return state
    }
}