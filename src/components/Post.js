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

    /*componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.posts.votes !== prevProps.post.votes) {
            this.props.votePost(this.state)
        }
    }*/

    /*handleOnClick(event){
        this.setState({
            votes: this.state.votes + 1
        })
        this.addVotes(this.state)
    }*/

    addVotes = (event) => {
        event.preventDefault();
        let newVotes = 0
        if(event.target.className == 'upvote'){
            newVotes = this.state.votes + 1
        } else {
            newVotes = this.state.votes - 1
        }    
        this.setState({ votes: newVotes}, () => this.props.votePost(this.state))

    }
        /*changeTitle: function (event) {
            this.setState({ title: event.target.value }, () => this.APICallFunction());
          }*/
        

    render(){
    return (
        <div className="tile" id={this.props.post.id} >
            <h4>{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <button className="upvote" onClick={(event) => this.addVotes(event)}><img src='https://img.4plebs.org/boards/s4s/image/1385/00/1385006781269.png' alt='Upvote'/></button>
            <button className="downvote" onClick={(event) => this.addVotes(event)}>Downvote</button>
            <p>{this.props.post.votes}</p>
        </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
  }
 
export default connect(mapStateToProps, {votePost})(Post);
  
//export default Post
// elixirschool
//warrior.js
