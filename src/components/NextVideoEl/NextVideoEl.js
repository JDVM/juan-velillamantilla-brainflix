import "./NextVideoEl.scss";

function NextVideoEl() {
  return (
    <div className="nxtvidel">
      <img src= "https://i.imgur.com/l2Xfgpl.jpg" alt="test"  className="nxtvidel__image"/>
      <div className="nxtvidel__vidinfo">
        <p className="nxtvidel__title">video title</p>
        <span className="nxtvidel__author">video by</span>
      </div>
    </div>
  );
}

export default NextVideoEl;
