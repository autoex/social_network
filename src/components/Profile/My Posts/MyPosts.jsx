import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


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
let maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Type here...'} name={'newPostText'}
                       validate={[required, maxLength10]}/>

            </div>


            <div>
                <button>Add Post</button>
            </div>

        </form>
    )
};

const AddNewPostReduxForm = reduxForm({form: 'myPostsForm'})(AddNewPostForm);

export default MyPosts;
