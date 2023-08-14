import "./VideoSection.scss";
import { useEffect, useState } from "react";
import { getVidDetailsById } from "../../utils/api-utils";
import axios from "axios";

function VideoSection({selectedVid}) {
  const [currentVid, setCurrentVid] = useState(null);
  useEffect(() => {
    axios.get(getVidDetailsById(selectedVid)).then(({ data: vidData }) => {
      setCurrentVid(vidData);
    });
  }, [selectedVid]);
  if (currentVid === null){
    return <h1>Loading Please Wait</h1>
  }
  return (
    <div className="video">
      <video
        className="video__content"
        src={currentVid.video}
        type="video"
        poster={currentVid.image}
        controls
      >
        Error Video Did not Load Properly
      </video>
    </div>
  );
}

export default VideoSection;
