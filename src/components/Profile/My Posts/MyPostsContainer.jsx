import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    debugger;

    let state = props.store.getState().profilePage;
    let addPost = () => {

        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };


    return (
        <MyPosts addPost={addPost} onPostChange={onPostChange} posts={state.posts} newPostText={state.newPostText}/>
    );
};

export default MyPostsContainer;
