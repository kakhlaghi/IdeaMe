import React, {Component} from 'react'
import {addNewPost} from '../actions/postServices.js'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';


class PostForm extends Component {
    constructor(props){
        super(props)
        this.state={
            title: '', //this.props.post.title
            body: '', //this.props.post.body
            redirectToHomePage: false
        }
    }

    handleOnChange(event){
        const field = event.target.name
        let state = this.state
        state[field] = event.target.value
        this.setState(state)
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.props.addNewPost(this.state);
        this.setState({
            title: '',
            body: '',
            redirectToHomePage: true
        });
    }

    /*handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }*/

    render(){
        if (this.state.redirectToHomePage) {
            return (
            <Redirect to="/" />
            )
          }
        return(
            <div className="form">
            <form onSubmit={(event) => this.handleOnSubmit(event)} >
                <input className='input' type="text"
                    name="title" placeholder='Enter a Title'
                    title={this.state.title} onChange={(event) => this.handleOnChange(event)} />
                <textarea className='textarea' name="body"
                    placeholder='Say Something...' 
                    body={this.state.body} onChange={(event) => this.handleOnChange(event)} >
                </textarea>
                <input type="submit" />
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
  }

export default connect(mapStateToProps, { addNewPost })(PostForm);
