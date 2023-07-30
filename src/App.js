import Header from "./components/Header/Header";
import VideoSection from "./components/VideoSection/VideoSection";
import "./App.scss";
import Body from "./components/Body/Body";
import VideoDetails from "./Data/video-details.json";
import Videos from "./Data/videos.json";
import { useState } from "react";

function App() {
  const [vidId, setVidId] = useState(VideoDetails[0].id);
  
  function updateVidId(vidId) {
    // selectedVidId.preventDefault();
    setVidId(vidId);
    console.log("APP.JS SELECTEDVID  " + vidId)
    
  }
  let currentVid = VideoDetails.find(
    (currentVidData) => currentVidData.id === vidId
  );

  return (
    <>
      <Header />
      <VideoSection currentVid={currentVid} />
      <Body currentVid={currentVid} videos={Videos} updateVidId={updateVidId} vidId={vidId} />
    </>
  );
}

export default App;
