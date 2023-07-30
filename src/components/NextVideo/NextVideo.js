import NextVideoEl from "../NextVideoEl/NextVideoEl";
import "./NextVideo.scss";

function NextVideo(props) {
  return (
    <div className="nextvid">
      <NextVideoEl  videos={props.video}/>
    </div>
  );
}

export default NextVideo;
