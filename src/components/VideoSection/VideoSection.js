import "./VideoSection.scss";

function VideoSection(props) {

  return (
    <div className="video">
      <video
        className="video__content"
        src={props.currentVid.videos}
        type="video"
        poster={props.currentVid.image}
        controls
      >
        Error Video Did not Load Properly
      </video>
    </div>
  );
}

export default VideoSection;
