import "./CommentEl.scss";
import tiempo from "tiempo";

function CommentEl({ comments }) {
  console.log(comments);
  return comments.map((comment) => (
    <article className="comment-el__element" key={comment.id}>
      <div className="comment-el__profile-pic"></div>
      <div className="comment-el__container">
        <span className="comment-el__element-name comment-el__element-name--bold">
          {comment.name}
        </span>
        <span className="comment-el__element-date">{tiempo.format(new Date(comment.timestamp))}</span>
        <p className="comment-el__element-text">{comment.comment}</p>
      </div>
    </article>
  ));
}

export default CommentEl;
