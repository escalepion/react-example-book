import React, { Component, Fragment } from "react";
import * as actions from '../../actions/postComment/comments';
import { connect } from 'react-redux';

const renderComments = (data, props) => {
  //we pass props bcoz redux wont connect if we dont do that. So we pass mapStateToProps to children components.
  //you can try that by removing to pass props and you can see that redux this.props.state (gloabal state) is undefined.
  return data.map((comment, index) => {
    return <MediaItem key={comment.id} {...props} comment={comment} isChild={true}/>
  });
}

class MediaItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCommentable: false,
      commentTerm: ''
    }  

    this.onCommentButtonClick = this.onCommentButtonClick.bind(this);
  }

  onCommentButtonClick() {
    this.setState({ isCommentable: !this.state.isCommentable });
  }

  renderChildren (commentId) {
    return this.props.comments.filter(comment => comment.parent === commentId);
  }

  onCommentSubmit(id) {
    // yorumu commentDataya ekleyen action ve comment data reduceri yapılacak
    this.props.addComment(this.state.commentTerm, this.props.comment.id);
    this.setState({ isCommentable: false, commentTerm: '' });
  }

  removeComment(id) {
    this.props.removeComment(id);
  }

  onCommentTextChange(e) {
    this.setState({ commentTerm: e.target.value });
  }

  render () {
    const {comment, isChild} = this.props;
    return (
      <div className="media p-3">
        <img
          src= {comment.imgSrc}
          alt="Jane Doe"
          className="mr-3 mt-3 rounded-circle"
          style={{ width : isChild ? '45px' : '60px' }}
        />
        <div className="media-body">
          <h4>
            {comment.name}
            <small>
              <i>{comment.date}</i>
            </small>
          </h4>
          <p>{comment.text} 
            <span className="commentBox__comment-icon" onClick={this.onCommentButtonClick}>
              <i className="fas fa-comments"></i>
            </span>
            <span onClick={() => this.removeComment(comment.id)}>
              <i style={style.trashIcon} className="fas fa-trash"></i>
            </span>
          </p>

          {this.state.isCommentable && (
            <Fragment>
              <textarea name="" id="" cols="70" rows="10" value={this.state.commentTerm} onChange={this.onCommentTextChange.bind(this)}></textarea>
              <button onClick={() => this.onCommentSubmit()} className="btn btn-primary">Add</button>
            </Fragment>
          )
          }
            
          {this.renderChildren(comment.id).length > 0 && renderComments(this.renderChildren(comment.id), this.props)}          
        </div>
      </div>
    );
  }
}

const style = {
  trashIcon: {
    cursor: 'pointer',
    marginLeft: '10px'
  }
}

const mapStateToProps = (state) => {
  return { 
    comments: state.postComments.commentData
   };
}

export default connect(mapStateToProps, actions)(MediaItem);
