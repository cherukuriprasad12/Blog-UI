import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PostsShow extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: {},
            comments: [],
            user: {}
        }
    }
    componentDidMount() {
        const id1 = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id1}`)
            .then(response => {
                const posts = response.data
                this.setState({ posts })
                // console.log(posts) 
                axios.get(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
                    .then(response => {
                        const user = response.data
                        this.setState({ posts, user })
                    })
            })
            .catch(err => {
                alert(err)
            })

        const id2 = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/comments?postsId=/${id2}`)
            .then(response => {
                const comments = response.data
                this.setState({ comments })
            })
            .catch((err) => {
                alert(err)
            })
    }
    render() {
        const id = this.props.match.params.id
        return (
            <div>
                <h1>USERS NAME:{this.state.user.name}</h1>

                <h2>TITLE:{this.state.posts.title}</h2>

                <h2>BODY: {this.state.posts.body}</h2>

                <h2>COMMENTS:{this.state.posts.comments}</h2>
                <ul>{
                    this.state.comments.map((comment) => {
                    return <li key={comment.id}>{comment.body}</li>
                    })}
                </ul>
                <h2> More about Author :<Link to={`/users/${this.state.user.id}`}> {this.state.user.name}</Link></h2>
            </div>
        )
    }
}
export default PostsShow
