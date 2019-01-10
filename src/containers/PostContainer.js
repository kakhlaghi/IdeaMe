import React, {Component} from 'react'

class PostContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){

    }


   render() {
   return(
        <div>
            {this.state.ideas.map((idea) => {
            return(
                <div className="tile" key={post.id} >
                <h4>{post.title}</h4>
                <p>{post.body}</p>
          </div>
            )       
            })}
        </div>
        )
    }
}



export default PostContainer