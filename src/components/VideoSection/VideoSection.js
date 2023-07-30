import "./VideoSection.scss";

function VideoSection(props) {
  return (
    <div className="video">
      <video
        className="video__content"
        src={props.currentVid.video}
        type="video"
        poster={props.currentVid.image}
      >
        Error Video Did not Load Properly
      </video>
    </div>
  );
}

export default VideoSection;
