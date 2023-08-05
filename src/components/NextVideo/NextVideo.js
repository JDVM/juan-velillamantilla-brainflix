import NextVideoEl from "../NextVideoEl/NextVideoEl";
import "./NextVideo.scss";

function NextVideo({filteredVid}) {
  return (
    <div className="nextvid">
      <span className="nextvid__title">NEXT VIDEOS</span>
      <NextVideoEl filteredVid={filteredVid} />
    </div>
  );
}

export default NextVideo;
