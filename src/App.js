import React from 'react'
// import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from "./Home"
import Users from "./Users"
import Posts from "./Posts"
import PostsShow from "./PostsShow"
import UsersShow from "./UsersShow"

function App(props)
{
    return(
        <BrowserRouter>
        <div>
            <h2><center>Welcome to BLOG UI</center></h2>
            <Link to="/">Home </Link>|
            <Link to="/Users">Users</Link>|
            <Link to="/Posts">Posts</Link>

            <Route path="/" component={Home} exact={true}/>
            <Route path="/Users" component={Users} exact={true}/>
            <Route path='/Posts' component={Posts} exact={true}/>

            <Route path="/Users/:id" component={UsersShow}/>
            <Route path="/Posts/:id" component={PostsShow}/>

        </div>     
        </BrowserRouter>
    )
}

export default App

 