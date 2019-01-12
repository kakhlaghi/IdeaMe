import React, {Component} from 'react'
import {fetchPosts} from '../actions/postServices.js'
import {connect} from 'react-redux'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import update from 'immutability-helper'

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
    addNewPost = () => {
        fetch('http://localhost:3001/api/v1/posts',
        {
            method: 'POST',
            mode: "cors",
            body: {post: { title: '', body: ''}}
        })
        .then(response =>{
            const posts = update(this.state.posts, {
                $splice: [[0, 0, response.data]]
              })
            this.setState({
                posts: posts,
                editingPostId: response.data.id
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount(){
        this.props.fetchPosts()
    
    }

   render() {
        const renderPosts = this.props.posts.posts.map((array) => {
         return array.map((post, index) => {
            if(this.props.editingPostId===post.id){
                return(<PostForm post={post} key={post.id} />)
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
