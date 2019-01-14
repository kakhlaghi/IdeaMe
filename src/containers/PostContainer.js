import React, {Component} from 'react'
import {fetchPosts} from '../actions/postServices.js'
import {connect} from 'react-redux'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import update from 'immutability-helper'
import axios from 'axios'

//import { bindActionCreators } from 'redux'


class PostContainer extends Component {
//i dont know if i need a constructor here.
constructor(props){
    super(props)
    this.state={
        posts: [],
        editingPostId: null
    }
}

//move addNewPost to actions/postServices
  /*  addNewPost = () => {
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
        .then(response =>{
            debugger
            const posts = update(this.state.posts, {
                $splice: [[0, 0, response.data]]
              })
            this.setState({
                posts: posts,
                editingPostId: response.data.id
            })
        })
        .catch(error => console.log(error))
    }*/

    addNewPost = () => {
        axios.post(
          'http://localhost:3001/api/v1/posts',
          { post:
            {
              title: '',
              body: ''
            }
          }
        )
        .then(response => {
            const posts = update(this.state.posts, {
                $splice: [[0, 0, response.data]]
              })
            this.setState({
                posts: posts,
                editingPostId: response.data.id
            })
            debugger
        })
        .catch(error => console.log(error))
    }




//update move to actions and mapDispatchToProps
    updatePost = (post) => {
        debugger
        const postIndex = this.state.posts.findIndex(x => x.id === post.id)
        const posts = update(this.state.posts, {
          [postIndex]: { $set: post }
        })
        this.setState({posts: posts})
      }

    componentDidMount(){
        this.props.fetchPosts()
    }

   render() {
        const renderPosts = this.props.posts.posts.map((array) => {
         return array.map((post, index) => {
            if(this.props.editingPostId===post.id){
                return(<PostForm post={post} key={post.id} updatePost={this.updatePost}/>)
            }else{    
                return(<Post post={post} key={post.id}/>)    
            }   
        })
    })
   return(
        <div>
            <button className='newPostButton' onClick={this.addNewPost}>New Post +</button>
            {renderPosts}
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    debugger
    return {
        posts: state.posts,
        editingPostId: state.editingPostId
    }
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
