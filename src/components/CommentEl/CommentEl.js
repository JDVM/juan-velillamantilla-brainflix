import "./CommentEl.scss";

function CommentEl(props) {
  console.log(props.comments.currentVid);
  return props.comments.currentVid.map((comment) => {
    let commentTimeStamp = new Date(comment.timestamp);

    let commentDate = commentTimeStamp.getDate();
    let commentMonth = commentTimeStamp.getMonth() + 1;
    let commentYear = commentTimeStamp.getFullYear();
    if (commentDate < 10) {
      commentDate = "0" + commentDate;
    }
    if (commentMonth < 10) {
      commentMonth = "0" + commentMonth;
    }
    let commentPostDate = commentDate + "/" + commentMonth + "/" + commentYear;

    return (
      <article className="comment-el__element" key={comment.id}>
        <div className="comment-el__profilePic"></div>
        <div className="comment-el__container">
          <span className="comment-el__elementName comment-el__elementName--bold">
            {comment.name}
          </span>
          <span className="comment-el__elementDate">{commentPostDate}</span>
          <p className="comment-el__elementText">{comment.comment}</p>
        </div>
      </article>
    );
  });
}

export default CommentEl;
