import "./Body.scss";
import VideoDescrition from "../VideoDescription/VideoDescription"
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import NextVideo from "../NextVideo/NextVideo";
function Body(props) {

  console.log(props)
  console.log(props.currentVid)
  console.log(props.currentVid.comments)
  console.log(props.videos)
  console.log(props.updateVidId)


  return (
    <div className="body">
      <div>
        <VideoDescrition currentVid={props.currentVid}/>
        <CommentsContainer currentVid={props.currentVid.comments}/>
      </div>
      <NextVideo videos={props.videos} updateVidId={props.updateVidId} vidId={props.vidId}/>
    </div>
  );
}

export default Body;
