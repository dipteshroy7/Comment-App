import React from "react";

import "./CommentCard.css";

function CommentCard(arr) {
  let arrr = [];
  Object.values(arr).forEach((data) => {
    arrr.push(data);
  });

  function getDate(creationTime) {
    let commentDate = Math.floor((new Date() - creationTime) / 86400000);
    if (commentDate > 365) commentDate = Math.floor(commentDate / 365) + " year ago";
    else if (commentDate > 30) commentDate = Math.floor(commentDate / 30) + " month ago";
    else if (commentDate >= 7) commentDate = Math.floor(commentDate / 7) + " week ago";
    else if (commentDate > 0) commentDate = commentDate + " day ago";
    else if (commentDate === 0) commentDate = "today";
    return commentDate;
  }

  return (
    <>
      {arrr !== [] &&
        arrr.map(({ name, votes, creationTime, data, comments }, index) => {
          return (
            <div key={name + index} className="comment-card-wrapper">
              <div className="comment-card">
                <div className="profile-pic">{name[0].toUpperCase()}</div>
                <div className="votes-wrapper">
                  <div className="votes">
                    <div className="upvote">+</div>
                    <div className="vote-count">{votes}</div>
                    <div className="downvote">-</div>
                  </div>
                </div>
                <div className="card-heading">
                  <span className="user-name">{name}</span>
                  <span className="card-date">{getDate(creationTime)}</span>
                </div>
                <div className="card-date">{data}</div>
              </div>
              <CommentCard {...comments} />
            </div>
          );
        })}
    </>
  );
}

export default CommentCard;
