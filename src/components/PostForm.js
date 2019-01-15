import React, {Component} from 'react'
import axios from 'axios'


export default class PostForm extends Component {
    constructor(props){
        super(props)
        this.state={
            title: '', //this.props.post.title
             body: '' //this.props.post.body
        }
    }

    handleOnChange(event){
        this.setState({
            title: event.target.value,
            body: event.target.value
        });
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.props.addNewPost(this.state);
        this.setState({
            title: '',
            body: ''
        });
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

    render(){
        return(
            <div className="tile">
            <form onSubmit={(event) => this.handleOnSubmit(event)} >
                <input className='input' type="text"
                    name="title" placeholder='Enter a Title'
                    value={this.state.title} onChange={(event) => this.handleOnChange(event)} />
                <textarea className='input' name="body"
                    placeholder='Say Something...' 
                    value={this.state.body} onChange={(event) => this.handleOnChange(event)} >
                </textarea>
                <input type="submit" />
            </form>
            </div>
        )
    }
}



 /*handleBlur = () => {
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        //move to action (ALL FETCH REQUESTS)
        fetch(`http://localhost:3001/api/v1/posts/${this.props.post.id}`,{
            method: 'PUT',
            mode: "cors",
            body: JSON.stringify({post: post})
        })
        .then(response => {
            console.log(response)
            this.props.updatePost(response.data)
          })
        .catch(error => console.log(error))
    }*/