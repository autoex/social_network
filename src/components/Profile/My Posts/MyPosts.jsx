import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

class MyPosts extends React.Component {
    render() {
    let postsData = [
        {id:1, message: 'Sick and Tired', likesCount: 11},
        {id:2, message: 'Cat get your tongue', likesCount: 23}
    ];
        return (
            <div className={classes.myPosts}>
                <div>My posts</div>
                <div>
                    <div>
                        <textarea>
                            Some text here...
                        </textarea>
                    </div>

                    <button>Add Post</button>
                </div>
                <Post message={postsData[0].message} likes={postsData[0].likesCount} />
                <Post message={postsData[1].message} likes={postsData[1].likesCount} />
            </div>
        );
    }
}

export default MyPosts;
