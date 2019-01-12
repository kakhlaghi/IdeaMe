export default function postReducer (state = {loading: false, posts: [], errors: null}, action){
    switch(action.type){
        case 'LOADING POSTS':
            return Object.assign({}, state, {loading: true})
        case 'FETCH POSTS':
            return {
                ...state,
                posts: [action.payload],
                loading: false
            }

        default:
            return state
    }
}