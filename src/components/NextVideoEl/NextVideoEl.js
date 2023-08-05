import { Link } from "react-router-dom";
import "./NextVideoEl.scss";

function NextVideoEl({ filteredVids }) {
  console.log(filteredVids);
  return filteredVids.map((video) => (
     <Link to={`/video/${video.id}`} > 
     <div className="nxtvidel" key={video.id}>
      <img src={video.image} alt="test" className="nxtvidel__image" />
      <div className="nxtvidel__vidinfo">
        <p className="nxtvidel__title">{video.title}</p>
        <span className="nxtvidel__author">{video.channel}</span>
      </div>
    </div>
    </Link>
  ));
}

export default NextVideoEl;
