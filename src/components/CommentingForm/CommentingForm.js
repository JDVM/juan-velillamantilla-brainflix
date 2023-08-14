import CommentIcon from '../../Assets/Icons/add_comment.svg'
import './CommentingForm.scss'

function CommentingForm(props) {
  return (
    <form className="comments__form" onSubmit={props.commentEventHandler}>
      <div className="comments__photo"></div>
      <div className="comments__form-container">
      <label className="comments__label" hmtlfor="Name">
       JOIN THE CONVERSATION
     <textarea
          type="text"
          name="nameInput"
          id="Name"
          className="comments__input"
          placeholder="Add a new comment"
        /> 
      </label>
    
      <button type="submit" className="comments__button">
        <img src={CommentIcon} className="comments__icon" alt="" />
        <div className="comments__text">COMMENT</div>
      </button>
      </div>
    </form>
  );
}

export default CommentingForm;
