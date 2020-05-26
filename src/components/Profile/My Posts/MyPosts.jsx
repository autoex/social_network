import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

class MyPosts extends React.Component {
    render() {
        let posts = this.props.posts;


        let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>);
        let newPostElement = React.createRef();
        let addPost = () => {

            this.props.dispatch({type: 'ADD-POST'});
        };

        let onPostChange =()=> {
            debugger;
            let text = newPostElement.current.value;
             this.props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
        };


        return (
            <div className={classes.myPosts}>
                <div>My posts</div>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={this.props.newPostText} onChange={onPostChange} />


                    </div>

                    <button className="btn" onClick={addPost}>Add Post</button>
                </div>
                {postsElements}
            </div>
        );
    }
}

export default MyPosts;
