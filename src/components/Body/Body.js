import "./Body.scss";
import VideoDescrition from "../VideoDescription/VideoDescription";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import NextVideo from "../NextVideo/NextVideo";
import { useState, useEffect } from "react";
import { getVidDetailsById } from "../../utils/api-utils";
import axios from "axios";

function Body({ selectedVid, filteredVids, commentEventHandler }) {
  const [currentVid, setCurrentVid] = useState(null);

  useEffect(() => {
    axios.get(getVidDetailsById(selectedVid)).then(({ data: vidData }) => {
      setCurrentVid(vidData);
    });
  }, [selectedVid]);
  if (currentVid === null) {
    return <h1>Loading Please Wait</h1>;
  }

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

  return (
    <div className="body">
      <div className="body__vid-info">
        <VideoDescrition
          currentVid={currentVid}
          descriptionPostDate={descriptionPostDate}
        />
        <CommentsContainer
          currentVidComments={currentVid.comments}
          commentEventHandler={commentEventHandler}
        />
      </div>
      <NextVideo filteredVids={filteredVids} />
    </div>
  );
}

export default Body;
