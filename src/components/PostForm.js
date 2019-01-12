import React, {Component} from 'react'


export default class PostForm extends Component {
    constructor(props){
        super(props)
        this.state={
            title: this.props.post.title,
             body: this.props.post.body
        }
    }


    render(){
        return(
            <div className="tile">
            <form>
                <input className='input' type="text"
                    name="title" placeholder='Enter a Title'
                    value={this.state.title} onChange={this.handleInput} />
                <textarea className='input' name="body"
                    placeholder='Say Something...' 
                    value={this.state.body} onChange={this.handleInput}>
                </textarea>
            </form>
            </div>
        )
    }
}