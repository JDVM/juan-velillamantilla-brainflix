import ThumbnailPic from '../Assets//Images/Upload-video-preview.jpg'

function uploadPage() {
  return (
    <div className="upload">
      <h1 className="Upload__title">Upload Page</h1>
      <image src={ThumbnailPic} alt="HandleBar" />
      <div>
        <label>
          TITLE YOUR VIDEO
          <input></input>
        </label>
        <label>
          ADD A VIDEO DESCRIPTION
          <textarea></textarea>
        </label>
      </div>
      <div>
        <button>PUBLISH</button>
        <button>CANCEL</button>
      </div>
    </div>
  );
}

export default uploadPage
