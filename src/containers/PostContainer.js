import React, {Component} from 'react'
import {fetchPosts} from '../actions/postServices.js'
import {connect} from 'react-redux'
//import { bindActionCreators } from 'redux'


class PostContainer extends Component {
//i dont know if i need a constructor here.
    constructor(props){
        super(props)
        this.state={
            posts: []
        }
    }

    
    componentWillMount(){
        this.props.fetchPosts()
    }

   render() {
    console.log('props ', this.props.posts)
    console.log('state ', this.state)

    let renderPosts = this.state.posts.map((post, index) => {
        return(
            <div className="tile" key={post.id} >
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
            )       
        })

   return(
        <div>
            {renderPosts}
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log('mapstate to props state', state.posts.posts[0])
    return {posts: state.posts.posts[0]}
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
