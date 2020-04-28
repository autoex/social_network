import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

class MyPosts extends React.Component {
    render() {
    let posts = this.props.posts;


     let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount} />);
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
                {postsElements}
            </div>
        );
    }
}

export default MyPosts;
