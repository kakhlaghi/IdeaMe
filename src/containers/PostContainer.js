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
            Posts
        </div>
        )
    }
}



export default PostContainer