import "./Body.scss";
import VideoDescrition from "../VideoDescription/VideoDescription";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import NextVideo from "../NextVideo/NextVideo";
import UploadPage from "../../page/Upload";

function Body(props) {
  console.log(props.currentVid.comments);
  return (
    <div className="body">
      <div className="body__vidinfo">
        <VideoDescrition
          currentVid={props.currentVid}
          descriptionPostDate={props.descriptionPostDate}
        />
        <CommentsContainer
          currentVid={props.currentVid.comments}
          commentEventHandler={props.commentEventHandler}
        />
      </div>
      <NextVideo
        videos={props.videos}
        updateVidId={props.updateVidId}
        vidId={props.vidId}
      />
      <UploadPage />
    </div>
  );
}

export default Body;
