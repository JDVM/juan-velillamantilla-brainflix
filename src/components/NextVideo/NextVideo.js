import NextVideoEl from "../NextVideoEl/NextVideoEl";
import "./NextVideo.scss";

function NextVideo(props) {
  return (
    <div className="nextvid">
      <NextVideoEl  videos={props.videos} updateVidId={props.updateVidId} vidId={props.vidId}/>
    </div>
  );
}

export default NextVideo;
