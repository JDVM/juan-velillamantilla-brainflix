import ViewCount from "../../Assets/Icons/views.svg";
import Likes from "../../Assets/Icons/likes.svg";
import "./VideoDescription.scss";

function VideoDescrition({currentVid, descriptionPostDate}) {
  console.log(currentVid.comments.length)
  return (
    <>
      <div className="info-panel">
        <h1 className="info-panel__title">{''}</h1>
        <div className="info-panel__stats">
          <div className="info-panel__by-and-date">
            <span className="info-panel__name">
              By {currentVid.channel}
            </span>
            <span className="info-panel__date">
              {descriptionPostDate}
            </span>
          </div>
          <div className="info-panel__viewstats">
            <section className="info-panel__viewcount">
              <img
                src={ViewCount}
                className="info-panel__viewcount--addedspacing"
                alt=""
              />
              <span>{currentVid.views}</span>
            </section>
            <section className="info-panel__likecount">
              <img
                src={Likes}
                className="info-panel__likecount--addedspacing"
                alt=""
              />
              <span>{currentVid.likes}</span>
            </section>
          </div>
        </div>
        <p className="info-panel__synopsis">{''}</p>
        <span className="info-panel__numbcomments">
          {currentVid.comments.length} Comments
        </span>
      </div>
    </>
  );
}

export default VideoDescrition;
