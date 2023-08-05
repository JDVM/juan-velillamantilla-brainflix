import VideoSection from "../components/VideoSection/VideoSection";
import Body from "../components/Body/Body";
// import VideoDetails from "../Data/video-details.json";
// import Videos from "../Data/videos.json";
import { useState, useEffect} from "react";
import { useParams } from "react-router";

import { getVidDetailsById, getVidDetails } from "../utils/api-utils";

const Homepage = () => {
  const [vidId, setVidId] = useState(null);

  function updateVidId(vidId) {
    setVidId(vidId);
  }
  let currentVid = VideoDetails.find(
    (currentVidData) => currentVidData.id === vidId
  );

  let descriptionTimeStamp = new Date(currentVid.timestamp);
  let descriptionDate = descriptionTimeStamp.getDate();
  let descriptionMonth = descriptionTimeStamp.getMonth() + 1;
  let descriptionYear = descriptionTimeStamp.getFullYear();
  if (descriptionDate < 10) {
    descriptionDate = "0" + descriptionDate;
  }
  if (descriptionMonth < 10) {
    descriptionMonth = "0" + descriptionMonth;
  }
  let descriptionPostDate =
    descriptionMonth + "/" + descriptionDate + "/" + descriptionYear;

  function commentEventHandler(event) {
    event.preventDefault();
    console.log("test sub");
  }

  return (
    <>
      <VideoSection currentVid={currentVid} />
      <Body
        currentVid={currentVid}
        videos={Videos}
        updateVidId={updateVidId}
        vidId={vidId}
        descriptionPostDate={descriptionPostDate}
        commentEventHandler={commentEventHandler}
      />
    </>
  );
};

export default Homepage;
