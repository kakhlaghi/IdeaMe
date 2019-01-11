export default function postReducer (state = {loading: false, posts: [], errors: null}, action){
    switch(action.type){
        case 'LOADING_CATS':
            return Object.assign({}, state, {loading: true})
        case 'FETCH POSTS':
            return {posts: action.payload}

        default:
            return state
    }
}