import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Posts extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data
                this.setState({ posts })
            })
            .catch((err) => {
                alert(err)
            })
    }
    render() {
        return (
            <div>
                <h1>Listing Posts - {this.state.posts.length}</h1>
                <ul>
                    {this.state.posts.map(post => {
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Posts