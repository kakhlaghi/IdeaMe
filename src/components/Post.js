import React, {Component} from 'react'
import {votePost} from '../actions/postServices'
import {connect} from 'react-redux'

//import PostForm from './PostForm'

//class Post = ({post}) => {
class Post extends Component {   
    constructor(props){
        super(props)
        this.state={
            id: this.props.post.id,
            votes: this.props.post.votes
        }
    }

    handleOnClick = (event) => {
        this.setState({
            id: this.props.post.id,
            votes: this.props.votes + 1
        })
    }

    addVotes = (event) => {
        /*this.setState({
            votes: this.state.votes + 1
        })*/
        event.preventDefault();
        this.props.votePost(this.state)
        /*this.setState({
            votes: 0
        })*/
    }


    render(){
    return (
        <div className="tile" id={this.props.post.id} >
            <h4>{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <button onClick={this.addVotes}>Vote Up!</button>
            <p>{this.props.post.votes}</p>
        </div>
        )
    }
} 


const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
  }
 
export default connect(mapStateToProps, {votePost})(Post);
  
//export default Post
// elixirschool
//warrior.js
