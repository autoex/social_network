import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

class MyPosts extends React.Component {
    render() {

        return (
            <div className={classes.myPosts}>
                <div>My posts</div>
                <div>New post</div>
                <Post message='Sick and Tired' likes='11'/>
                <Post message='Cat get your tongue' likes='23'/>
            </div>
        );
    }
}

export default MyPosts;
