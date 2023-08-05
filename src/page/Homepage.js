import VideoSection from "../components/VideoSection/VideoSection";
import Body from "../components/Body/Body";
// import VideoDetails from "../Data/video-details.json";
// import Videos from "../Data/videos.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { getVidDetailsById, getVidDetails } from "../utils/api-utils";

const Homepage = () => {


  const [vid, setVid] = useState(null);
  const { vidId } = useParams();
  
  useEffect(() => {
    axios.get(getVidDetails()).then((res) => {
      const vidDetails = res.data;
      console.log(vidDetails)
      setVid(vidDetails);
    });
  }, []);

  

  if (vid === null){
    return <h1>Loading Please Wait</h1>
  }

  const selectedVid = vidId || vid[0].id;
console.log("selected Vid ", selectedVid)
  const filteredVids = vid.filter((video) => video.id !== selectedVid)
  console.log("filtered vid ",  filteredVids)
//   let descriptionTimeStamp = new Date(currentVid.timestamp);
//   let descriptionDate = descriptionTimeStamp.getDate();
//   let descriptionMonth = descriptionTimeStamp.getMonth() + 1;
//   let descriptionYear = descriptionTimeStamp.getFullYear();
//   if (descriptionDate < 10) {
//     descriptionDate = "0" + descriptionDate;
//   }
//   if (descriptionMonth < 10) {
//     descriptionMonth = "0" + descriptionMonth;
//   }
//   let descriptionPostDate =
//     descriptionMonth + "/" + descriptionDate + "/" + descriptionYear;

  function commentEventHandler(event) {
    event.preventDefault();
    console.log("test sub");
  }

  return (
    <>
      <VideoSection selectedVid={selectedVid} />
      <Body
        selectedVid={selectedVid}
        filteredVids={filteredVids}
        // descriptionPostDate={descriptionPostDate}
        // commentEventHandler={commentEventHandler}
      />
    </>
  );
};

export default Homepage;
