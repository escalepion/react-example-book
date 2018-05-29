import React from "react";

const MediaItem = ({comment}) => {
  return (
    <div className="media p-3">
      <img
        src= {comment.imgSrc}
        alt="Jane Doe"
        className="mr-3 mt-3 rounded-circle"
        style={{ width: "60px" }}
      />
      <div className="media-body">
        <h4>
          {comment.name}
          <small>
            <i>{comment.date}</i>
          </small>
        </h4>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default MediaItem;
