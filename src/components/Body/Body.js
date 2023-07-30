import "./Body.scss";
import VideoDescrition from "../VideoDescription/VideoDescription"
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import NextVideo from "../NextVideo/NextVideo";

function Body() {
  return (
    <div className="body">
      <div>
        <VideoDescrition />
        <CommentsContainer />
      </div>
      <NextVideo />
    </div>
  );
}

export default Body;
