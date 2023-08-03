import thumbnailPic from '../Assets//Images/Upload-video-preview.jpg'
import publishIcon from "../Assets/Icons/publish.svg"
import './Upload.scss'

function uploadPage() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Page</h1>
      <span className='upload__thumbnaillable'>VIDEO THUMBNAIL<img src={thumbnailPic} alt="HandleBars" className="upload__thumbnail" /></span>
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
