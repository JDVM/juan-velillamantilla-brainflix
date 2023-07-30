import "./NextVideoEl.scss";

function NextVideoEl({ videos }) {
  console.log(videos);
  return videos.map((video) => (
    <div className="nxtvidel" key={video.id}>
      <img
        src={video.image}
        alt="test"
        className="nxtvidel__image"
      />
      <div className="nxtvidel__vidinfo">
        <p className="nxtvidel__title">{video.title}</p>
        <span className="nxtvidel__author">{video.channel}</span>
      </div>
    </div>
  ));
}

export default NextVideoEl;
