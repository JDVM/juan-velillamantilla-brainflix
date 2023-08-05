import "./NextVideoEl.scss";

function NextVideoEl({ videos, updateVidId, vidId}) {
  
  return( 
  // videos.filter((videos) => videos.id !== vidId).map((video) => (
    <div className="nxtvidel" key={''}>
      <img
        src={''}
        alt="test"
        className="nxtvidel__image"
      />
      <div className="nxtvidel__vidinfo">
        <p className="nxtvidel__title">{''}</p>
        <span className="nxtvidel__author">{''}</span>
      </div>
    </div>
  )
  // );
}

export default NextVideoEl;
