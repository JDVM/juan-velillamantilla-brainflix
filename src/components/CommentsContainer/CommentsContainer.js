import CommentingForm from "../CommentingForm/CommentingForm";
import CommentEl from "../CommentEl/CommentEl";

function CommentsContainer({ currentVidComments, commentEventHandler }) {
  return (
    <>
      <CommentingForm commentEventHandler={commentEventHandler} />
      <div>
        <CommentEl comments={currentVidComments} />
      </div>
    </>
  );
}
export default CommentsContainer;
