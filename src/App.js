import Header from "./components/Header/Header";
import VideoSection from "./components/VideoSection/VideoSection";
import "./App.scss";
import Body from "./components/Body/Body";
import VideoDetails from "./Data/video-details.json";
import Videos from "./Data/videos.json";
import { useState } from "react";

function App() {
  const [vidId, setVidId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
  function updateVidId(selectedVidId) {
    setVidId(selectedVidId);
  }
  const currentVid = VideoDetails.find(
    (currentVidData) => currentVidData.id === vidId
  );

  return (
    <>
      <Header />
      <VideoSection currentVid={currentVid} />
      <Body currentVid={currentVid} videos={Videos} updateVidId={updateVidId} />
    </>
  );
}

export default App;
