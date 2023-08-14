import thumbnailPic from "../../Assets/Images/Upload-video-preview.jpg";
import publishIcon from "../../Assets/Icons/publish.svg";
import "./UploadPage.scss";
import { Link } from "react-router-dom";
import { VidDetails } from "../../utils/api-utils";
import axios from "axios";

function UploadPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      event.target.videotitle.value === "" ||
      event.target.videodescription.value === ""
    ) {
      window.alert("Please fill out all fields");

      if (event.target.videotitle.value === "") {
        event.target.videotitle.classList.add("error");
      }
      if (event.target.videodescription.value === "") {
        event.target.videodescription.classList.add("error");
      }
      return;
    }
    axios
      .post(VidDetails(), {
        title: event.target.videotitle.value,
        description: event.target.videodescription.value,
      })
      .then((response) => {
        console.log("Video posted successfully:", response.data);
        window.alert("Your Video is being processed");
        window.location.href = "/";
      })
      .catch((error) => {
        window.alert.error("Video did not post:", error);
      });

    event.target.reset();
  };

  return (
    <form className="upload" onSubmit={handleSubmit}>
      <h1 className="upload__title">Upload Page</h1>
      <div className="upload__body">
        <span className="upload__thumbnail-lable">
          VIDEO THUMBNAIL
          <img
            src={thumbnailPic}
            alt="HandleBars"
            className="upload__thumbnail"
          />
        </span>
        <div className="upload__inputs-container">
          <label className="upload__video-title">
            TITLE YOUR VIDEO
            <input
              className="upload__text-input-mod input"
              name="videotitle"
              id="videotitle"
              placeholder="Add a title to your video"
            ></input>
          </label>
          <label className="upload__video-description">
            ADD A VIDEO DESCRIPTION
            <textarea
              className="upload__text-input-mod input"
              id="videodescription"
              placeholder="Add a description to your video"
            ></textarea>
          </label>
        </div>
      </div>
      <div className="upload__button-container">
        <button className="upload__publish">
          <img src={publishIcon} alt="" />
          <div className="upload__text">PUBLISH</div>
        </button>
        <Link to={"/"}>
          <button className="upload__cancel">CANCEL</button>
        </Link>
      </div>
    </form>
  );
}

export default UploadPage;
