import "./VideoSection.scss";
import { useEffect, useState } from "react";
import { getVidDetailsById } from "../../utils/api-utils";
import axios from "axios";

function VideoSection({selectedVid}) {
  const [currentVid, setCurrentVid] = useState(null);
console.log(selectedVid)
  useEffect(() => {
    axios.get(getVidDetailsById(selectedVid)).then(({ data: vidData }) => {
      console.log("vidData: ", vidData)
      setCurrentVid(vidData);
    });
  }, [selectedVid]);
  if (currentVid === null){
    return <h1>Loading Please Wait</h1>
  }
console.log(" current vid ", currentVid)
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
