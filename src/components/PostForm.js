import React, {Component} from 'react'


export default class PostForm extends Component {
    constructor(props){
        super(props)
        this.state={
            title: this.props.post.title,
             body: this.props.post.body
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

    handleBlur = () => {
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch(`http://localhost:3001/api/v1/posts/${this.props.post.id}`,{
            method: 'PUT',
            mode: "cors",
            body: {post: post}
        })
        .then(response => {
            console.log(response)
            this.props.updatePost(response.data)
          })
        .catch(error => console.log(error))
    }
    


    render(){
        return(
            <div className="tile">
            <form onBlur={this.handleBlur} >
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