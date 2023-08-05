import "./CommentEl.scss";
import tiempo from "tiempo";

function CommentEl({ comments }) {
  console.log(comments);
  return comments.map((comment) => (
    <article className="comment-el__element" key={comment.id}>
      <div className="comment-el__profilePic"></div>
      <div className="comment-el__container">
        <span className="comment-el__elementName comment-el__elementName--bold">
          {comment.name}
        </span>
        <span className="comment-el__elementDate">{tiempo.format(new Date(comment.timestamp))}</span>
        <p className="comment-el__elementText">{comment.comment}</p>
      </div>
    </article>
  ));
}

export default CommentEl;
