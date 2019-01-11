import React, {Component} from 'react'
import fetchPosts from '../actions/postServices.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'


class PostContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.props.fetchPosts()
    }


   render() {
   return(
        <div>
            {this.state.posts.map((post) => {
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

function mapStateToProps(state) {
    console.log('hit mapstatetoprops')
    return {posts: state.posts}
  }
  
  function mapDispatchToProps(dispatch) {
    console.log('mapdispatch to props')
    return {actions: bindActionCreators(fetchPosts, dispatch)}
  }



export default PostContainer = connect( mapStateToProps, {fetchPosts})