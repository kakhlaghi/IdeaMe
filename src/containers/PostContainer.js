import React, {Component} from 'react'
import {fetchPosts} from '../actions/postServices.js'
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
        //this.setState({posts: })
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


const mapStateToProps = (state) => {
    console.log(state.posts)
    return {posts: state.posts}
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
