import CommentingForm from "../CommentingForm/CommentingForm";
import CommentEl from "../CommentEl/CommentEl";

function CommentsContainer(props) {
    return (
        <>
        <CommentingForm />
        <div>
           <CommentEl comments={props}/> 
        </div>
        </>
    )
}
export default CommentsContainer;