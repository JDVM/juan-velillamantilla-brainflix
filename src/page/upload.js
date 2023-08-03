import thumbnailPic from '../Assets//Images/Upload-video-preview.jpg'
import publishIcon from "../Assets/Icons/publish.svg"

function uploadPage() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Page</h1>
      <img src={thumbnailPic} alt="HandleBar" className="upload__image" />
      <div className='upload__inputscontainer'>
        <label className='upload__videotitle'>
          TITLE YOUR VIDEO
          <input className='upload__textinputmod' name='videotitle' id='videotitle' placeholder='Add a title to your video'></input>
        </label>
        <label className='upload__videodescription'>
          ADD A VIDEO DESCRIPTION
          <textarea className='upload__textinputmod' id='videodescription' placeholder='Add a description to your video'></textarea>
        </label>
      </div>
      <div className='upload__buttoncontainer'>
        <button className='upload__button'><img src={publishIcon}/>PUBLISH</button>
        <button className='upload__button'>CANCEL</button>
      </div>
    </div>
  );
}

export default uploadPage



// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import uploadPage from "./page/upload";
// import upload from './page/upload'


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
 