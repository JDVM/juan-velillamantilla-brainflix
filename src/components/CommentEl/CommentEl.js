import './CommentEl.scss'

function CommentEl(){
  return(
    <article class="comment-el__element">
  <div class="comment-el__profilePic"></div>
  <div class="comment-el__container">
    <span class="comment-el__elementName comment-el__elementName--bold">Emilie Beach</span>
    <span class="comment-el__elementDate">09/01/2021</span>
    <p class="comment-el__elementText">
      I feel blessed to have seen them in person. What a show! They were just
      perfection. If there was one day of my life I could relive, this would be
      it. What an incredible day.
    </p>
  </div>
</article>
  )
}

export default CommentEl;

