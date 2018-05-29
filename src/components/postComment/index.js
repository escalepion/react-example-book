import React, { Component } from "react";

import MediaItem from './MediaItem';
import { commentData } from './commentData';

class Index extends Component {
  renderComments() {
    return commentData.map((comment, index) => {
      return <MediaItem key={comment.id} comment={comment}/>
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          {this.renderComments()}
          <div className="media p-3">
            <img
              src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
              alt="John Doe"
              className="mr-3 mt-3 rounded-circle"
              style={{ width: "60px" }}
            />
            <div className="media-body">
              <h4>
                John Doe{" "}
                <small>
                  <i>Posted on February 19, 2016</i>
                </small>
              </h4>
              <p>Lorem ipsum...</p>
              <div className="media p-3">
                <img
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="Jane Doe"
                  className="mr-3 mt-3 rounded-circle"
                  style={{ width: "45px" }}
                />
                <div className="media-body">
                  <h4>
                    Jane Doe{" "}
                    <small>
                      <i>Posted on February 20 2016</i>
                    </small>
                  </h4>
                  <p>Lorem ipsum...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
