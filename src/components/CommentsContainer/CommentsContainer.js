import CommentingForm from "../CommentingForm/CommentingForm";
import CommentEl from "../CommentEl/CommentEl";

function CommentsContainer() {
    return (
        <>
        <CommentingForm />
        <div>
           <CommentEl /> 
        </div>
        
        </>
        
    )
}
export default CommentsContainer;