import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

class MyPosts extends React.Component {
    render() {
        let posts = this.props.posts;


        let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>);
        let newPostElement = React.createRef();
        let addPost = () => {
            let text = newPostElement.current.value;
            this.props.addPost(text);
            newPostElement.current.value = '';
        };


        return (
            <div className={classes.myPosts}>
                <div>My posts</div>
                <div>
                    <div>
                        <textarea ref={newPostElement}>

                        </textarea>
                    </div>

                    <button className="btn" onClick={addPost}>Add Post</button>
                </div>
                {postsElements}
            </div>
        );
    }
}

export default MyPosts;
