import CommentingForm from "../CommentingForm/CommentingForm";
import CommentEl from "../CommentEl/CommentEl";

function CommentsContainer({currentVidComments}) {
  console.log(currentVidComments)


  return (
    <>
      <CommentingForm />
      <div>
        <CommentEl comments={currentVidComments} />
      </div>
    </>
  );
}
export default CommentsContainer;
