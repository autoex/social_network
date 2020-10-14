import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let posts = props.posts;
    let postsElements = posts.map((p, index) => <Post message={p.message} likes={p.likesCount} key={index}/>);


    let newPost = (d) => {
        props.addPost(d.newPostText);
    };


    return (
        <div className={classes.myPosts}>
            <div>My posts</div>
            <AddNewPostReduxForm onSubmit={newPost}/>
            {postsElements}
        </div>
    );
};
const AddNewPostForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <p>
                <Field component={"textarea"} placeholder={'Type here...'} name={'newPostText'}/>

            </p>


            <p>
                <button>Add Post</button>
            </p>

        </form>
    )
};

const AddNewPostReduxForm = reduxForm({form: 'myPostsForm'})(AddNewPostForm);

export default MyPosts;
