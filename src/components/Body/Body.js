import "./Body.scss";
import VideoDescrition from "../VideoDescription/VideoDescription"
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import NextVideo from "../NextVideo/NextVideo";
function Body(props) {
  return (
    <div className="body">
      <div>
        <VideoDescrition currentVid={props.currentVid}/>
        <CommentsContainer currentVid={props.currentVid.comments}/>
      </div>
      <NextVideo video={props.videos}/>
    </div>
  );
}

export default Body;
