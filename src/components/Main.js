import React from 'react'
import { Switch, Route } from 'react-router-dom';
import PostContainer from '../containers/PostContainer'
import PostForm from '../components/PostForm'
import About from './About'
import NoMatch from './NoMatch'

const Main = () => {
    
   return( 
    <div> 
    <Switch>
        <Route exact path='/' component={PostContainer} />
        <Route path='/about' component={About} />
        <Route path='/newpost' component={PostForm} />
        <Route component={NoMatch} /> 
    </Switch>
    </div>
   )
}

export default Main