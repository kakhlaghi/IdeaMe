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
            title: event.target.title,
            body: event.target.body
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
                    title={this.state.title} onChange={(event) => this.handleOnChange(event)} />
                <textarea className='input' name="body"
                    placeholder='Say Something...' 
                    body={this.state.body} onChange={(event) => this.handleOnChange(event)} >
                </textarea>
                <input type="submit" />
            </form>
            </div>
        )
    }
}

/*
{
    [post][title]
}
*/

