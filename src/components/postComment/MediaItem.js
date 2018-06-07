import React, { Component } from "react";
import { commentData } from './commentData';
import { connect } from 'react-redux';

const renderComments = (data, props) => {
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
    return commentData.filter(comment => comment.parent === commentId);
  }

  onCommentTextSubmit(id) {
    // yorumu commentDataya ekleyen action ve comment data reduceri yapılacak
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
          </p>
  
          {this.state.isCommentable && <textarea name="" id="" cols="70" rows="10" value={this.state.commentTerm} onChange={this.onCommentTextChange.bind(this)}></textarea>}
          
          {this.renderChildren(comment.id).length > 0 && renderComments(this.renderChildren(comment.id), this.props)}
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
}

export default connect(mapStateToProps, null)(MediaItem);
