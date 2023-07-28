import ViewCount from "../Assets/Icons/views.svg";
import Likes from "../Assets/Icons/likes.svg";
import "./VideoDescription.scss";

function VideoDescrition() {
  return (
    <>
      <div className="info-panel">
        <h1 className="info-panel__title">placehldr</h1>
        <div className="info-panel__stats">
          <div className="info-panel__by-and-date">
            <span className="info-panel__name">video by</span>
            <span className="info-panel__date">date created placehldr</span>
          </div>
          <div className="info-panel__viewstats">
            <section className="info-panel__viewcount">
              <img
                src={ViewCount}
                className="info-panel__viewcount--addedspacing"
              />
              <span>viewcouint</span>
            </section>
            <section className="info-panel__likecount">
              <img
                src={Likes}
                className="info-panel__likecount--addedspacing"
              />
              <span>viewcouint</span>
            </section>
          </div>
        </div>
        <p className="info-panel__synopsis">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title{" "}
        </p>
      </div>
    </>
  );
}

export default VideoDescrition;
