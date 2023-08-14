import { Link } from "react-router-dom";
import "./NextVideoEl.scss";

function NextVideoEl({ filteredVids }) {
  return filteredVids.map((video) => (
    <Link to={`/video/${video.id}`}>
      <div className="next-vid-el" key={video.id}>
        <img src={video.image} alt="test" className="next-vid-el__image" />
        <div className="next-vid-el__vid-info">
          <p className="next-vid-el__title">{video.title}</p>
          <span className="next-vid-el__author">{video.channel}</span>
        </div>
      </div>
    </Link>
  ));
}

export default NextVideoEl;
