import NextVideoEl from "../NextVideoEl/NextVideoEl";
import "./NextVideo.scss";

function NextVideo(props) {
  return (
    <div className="nextvid">
      <span className="nextvid__title">NEXT VIDEOS</span>
      {/* <NextVideoEl  videos={props.videos} updateVidId={props.updateVidId} vidId={props.vidId}/> */}
      <NextVideoEl />
    </div>
  );
}

export default NextVideo;
