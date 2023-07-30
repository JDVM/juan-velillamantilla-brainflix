import ViewCount from "../Assets/Icons/views.svg";
import Likes from "../Assets/Icons/likes.svg";
import "./VideoDescription.scss";

function VideoDescrition(props) {
  console.log(props)
  return (
    <>
      <div className="info-panel">
        <h1 className="info-panel__title">{props.currentVid.title}</h1>
        <div className="info-panel__stats">
          <div className="info-panel__by-and-date">
            <span className="info-panel__name">By {props.currentVid.channel}</span>
            <span className="info-panel__date">date created placehldr</span>
          </div>
          <div className="info-panel__viewstats">
            <section className="info-panel__viewcount">
              <img
                src={ViewCount}
                className="info-panel__viewcount--addedspacing"
                alt=""
              />
              <span>{props.currentVid.likes}</span>
            </section>
            <section className="info-panel__likecount">
              <img
                src={Likes}
                className="info-panel__likecount--addedspacing"
                alt=""
              />
              <span>{props.currentVid.views}</span>
            </section>
          </div>
        </div>
        <p className="info-panel__synopsis">
          {props.currentVid.description}
        </p>
        <span className="info-panel__numbcomments">{props.currentVid.comments.length} Comment</span>
      </div>
    </>
  );
}

export default VideoDescrition;
