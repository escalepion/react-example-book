import React, { Component } from "react";
import { connect } from 'react-redux';

import MediaItem from './MediaItem';

class Index extends Component {
  renderComments(data) {
    //here, we just map parent comments. If this is not a parent comment, it will map in MediaItem component.
    //since all parent and child components have same template we chose this way. Please checkout MediaItem component.
    //So we can make infinite nested comments with a flatten structure.
    return data.map((comment, index) => comment.parent === 0 && 
    <MediaItem onCommentButtonClick={() => this.onCommentButtonClick(comment.id)} key={comment.id} comment={comment}/>
  );
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">

          {this.renderComments(this.props.comments)}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    comments: state.postComments.commentData
   };
}

export default connect(mapStateToProps, null)(Index);
