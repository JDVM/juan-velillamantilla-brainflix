import NextVideoEl from "../NextVideoEl/NextVideoEl";
import "./NextVideo.scss";

function NextVideo({filteredVids}) {
  return (
    <div className="nextvid">
      <span className="nextvid__title">NEXT VIDEOS</span>
      <NextVideoEl filteredVids={filteredVids} />
    </div>
  );
}

export default NextVideo;
