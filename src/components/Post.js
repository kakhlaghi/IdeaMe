import React, {Component} from 'react'
//import PostForm from './PostForm'

//class Post = ({post}) => {
class Post extends Component {   
    constructor(props){
        super(props)
        this.state={
            votes: 0
        }
    }

    addVotes = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }


    render(){
    return (
        <div className="tile" key={this.props.post.id} >
            <h4>{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <button onClick={this.addVotes}>Vote Up!</button>
            <p>{this.state.votes}</p>
        </div>
        )
    }
} 

export default Post
// elixirschool
//warrior.js
