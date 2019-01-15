import React, {Component} from 'react'
import {fetchPosts, addNewPost} from '../actions/postServices.js'
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
        viewForm: false
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
/*
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
            //ASYNC isnt working because of update from immutability helper
            
            //could use $splice: [[0,0,response.data]]
            //const posts = update(this.state.posts, {$push: [[response.data]]})
              //const posts = this.state.posts.push(response.data)
            console.log('posts', posts)
            //setState should update auto but doesnt?
            this.setState({
                posts: posts,
                editingPostId: response.data.id
            }, () =>  {console.log(this.state.posts, ' state posts')})
        })
        .catch(error => console.log(error))
    }*/

//update move to actions and mapDispatchToProps
    /*updatePost = (post) => {
        debugger
        const postIndex = this.state.posts.findIndex(x => x.id === post.id)
        const posts = update(this.state.posts, {
          [postIndex]: { $set: post }
        })
        this.setState({posts: posts})
      }*/

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


const mapStateToProps = (state) => {
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

  export default connect(mapStateToProps, {fetchPosts, addNewPost})(PostContainer);
