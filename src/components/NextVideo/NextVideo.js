import NextVideoEl from "../NextVideoEl/NextVideoEl";
import "./NextVideo.scss";

function NextVideo({filteredVids}) {
  return (
    <div className="next-vid">
      <span className="next-vid__title">NEXT VIDEOS</span>
      <NextVideoEl filteredVids={filteredVids} />
    </div>
  );
}

export default NextVideo;
