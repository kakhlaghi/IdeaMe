import {combineReducers} from 'redux'
import postReducer from './postReducer'


const rootReducer = combineReducers({
    posts: postReducer,
    //users: userReducer
    //postForm: postFormReducer,
    //loginForm: loginFormReducer
})

export default rootReducer