import Logo from "../Assets/Logo/BrainFlix-logo.svg";
import "./Header.scss";
import UploadIcon from "../Assets/Icons/upload.svg";
import Search from "../Assets/Icons/search.svg"

function Header() {
  const uploadIcon = UploadIcon;
  return (
    <header className="header">
      <img src={Logo} className="header__logo" alt="Logo for BrainFlix" />
      <form className="header__form">
        <div className="header__photo"></div>
        <label className="header__label" hmtlfor="Name">
          <input
            type="text"
            name="nameInput"
            id="Name"
            className="header__input"
            placeholder="Search"
          />
        </label>
        <button type="submit" className="header__button">
          <img src={uploadIcon} className="header__icon" alt="" />
          <div className="header__text">UPLOAD</div>
        </button>
      </form>
    </header>
  );
}

export default Header;
