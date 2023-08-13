import VideoSection from "../../components/VideoSection/VideoSection";
import Body from "../../components/Body/Body";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { VidDetails } from "../../utils/api-utils";

const Homepage = () => {
  const [vid, setVid] = useState(null);
  const { vidId } = useParams();

  useEffect(() => {
    axios.get(VidDetails()).then((res) => {
      const vidDetails = res.data;
      console.log(vidDetails);
      setVid(vidDetails);
    });
  }, []);

  if (vid === null) {
    return <h1>Loading Please Wait</h1>;
  }

  const selectedVid = vidId || vid[0].id;
  // console.log("selected Vid ", selectedVid);
  // console.log(vid[0].id);
  // console.log(selectedVid);

  // console.log("selected Vid ", selectedVid)

  const filteredVids = vid.filter((video) => video.id !== selectedVid);
  console.log("filtered vid ", filteredVids);
  

  function commentEventHandler(event) {
    event.preventDefault();
    console.log("test sub");
  }
  console.log("VID!!!!", vid);
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
