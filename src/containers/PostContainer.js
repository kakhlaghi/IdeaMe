import React, {Component} from 'react'
import {fetchPosts, addNewPost} from '../actions/postServices.js'
import {connect} from 'react-redux'
import Post from '../components/Post'
import PostForm from './containers/PostForm'
import update from 'immutability-helper'
import axios from 'axios'

//import { bindActionCreators } from 'redux'


class PostContainer extends Component {
//i dont know if i need a constructor here.
    constructor(props){
        super(props)
        this.state={

    }
}

    componentDidMount(){
        this.props.fetchPosts()
    }

    handleOnClick = (event) =>{
        this.setState({
            viewForm: true 
        })
    }

   render() {
       //getting it from the store! not the state!
        const renderPosts = this.props.posts.posts.map((array) => {
           return array.map((post, index) => {  
                return(<Post post={post} key={post.id}/>)    
        })
    })
   return(
        <div>
            {renderPosts}
        </div>
        )
    }
}
//<PostForm addNewPost={this.props.addNewPost} />


const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
  }


  
  export default connect(mapStateToProps, {fetchPosts, addNewPost})(PostContainer);
