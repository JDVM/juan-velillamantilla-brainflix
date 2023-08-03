import Header from "./components/Header/Header";
import VideoSection from "./components/VideoSection/VideoSection";
import "./App.scss";
import Body from "./components/Body/Body";
import VideoDetails from "./Data/video-details.json";
import Videos from "./Data/videos.json";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import uploadPage from "./page/upload";
import upload from './page/upload'


function App() {
  const [vidId, setVidId] = useState(VideoDetails[0].id);

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

  function searchEventHandler(event) {
    event.preventDefault();
    console.log("test sub");
  }

  function commentEventHandler(event) {
    event.preventDefault();
    console.log("test sub");
  }


  // return(
  //   <BrowserRouter>
  //   <Header searchEventHandler={searchEventHandler} />
  //   <Routes>
  //     <Route path="/" element={HomePage}/> //create a page called homepage
  //     <Route path="/upload" element={upload}/>
  //     <Route path="/video/:selectedVid" element={HomePage}/>
  //   </Routes>
  //   </BrowserRouter>
  // )
 
  return (
    <>
      <Header searchEventHandler={searchEventHandler} />
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
}

export default App;
//test comment
