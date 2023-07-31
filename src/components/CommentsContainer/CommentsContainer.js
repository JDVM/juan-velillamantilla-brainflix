import CommentingForm from "../CommentingForm/CommentingForm";
import CommentEl from "../CommentEl/CommentEl";

function CommentsContainer(props) {
  return (
    <>
      <CommentingForm commentEventHandler={props.commentEventHandler} />
      <div>
        <CommentEl comments={props} />
      </div>
    </>
  );
}
export default CommentsContainer;
