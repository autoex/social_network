import React from "react";
import classes from "./Post.module.css";

class Post extends React.Component {
  render() {
    return (
      <div className={classes.post}>
        <div className={classes.post__ava}></div>
        <div className={classes.post__text}> {this.props.message}</div>
        <div className={classes.post__like}>{this.props.likes}</div>
      </div>
    );
  }
}

export default Post;
