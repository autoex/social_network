import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'


const MyPosts = (props) => {

    let posts = props.posts;
    let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {

        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };


    return (
        <div className={classes.myPosts}>
            <div>My posts</div>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} placeholder={'Type here...'}/>



                </div>

                <button className="btn" onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;
