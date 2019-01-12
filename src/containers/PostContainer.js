import React, {Component} from 'react'
import {fetchPosts} from '../actions/postServices.js'
import {connect} from 'react-redux'
import Post from '../components/Post'
//import { bindActionCreators } from 'redux'


class PostContainer extends Component {
//i dont know if i need a constructor here.
constructor(props){
    super(props)
    this.state={
        posts: []
    }
}
    
    componentDidMount(){
        this.props.fetchPosts()
    
    }

   render() {
        const renderPosts = this.props.posts.posts.map((array) => {
         return array.map((post, index) => {
            return(
                <Post post={post} key={post.id}/>
                )    
            })   
        })
    

   return(
        <div>
            <button className='newPostButton'>New Post +</button>

            {renderPosts}
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {posts: state.posts}
  }
  
  /*const mapDispatchToProps=dispatch=> {
    console.log('actions' + dispatch)
    return {
        fetchPosts: ()=> {
            dispatch(fetchPosts())
        }
    }
  }*/

  export default connect(mapStateToProps, {fetchPosts})(PostContainer);
