function postReducer (state = {posts: [], errors: null}, action){
    switch(action.type){
        case 'FETCH POSTS':
            return {posts: action.payload}

        default:
            return state
    }
}