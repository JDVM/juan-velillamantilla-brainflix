import Logo from "../../Assets/Logo/BrainFlix-logo.svg";
import "./Header.scss";
import UploadIcon from "../../Assets/Icons/upload.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const uploadIcon = UploadIcon;
  console.log(props);
  return (
    <header className="header">
      <Link to={`/`} className="header__link">
        <img src={Logo} className="header__logo" alt="Logo for BrainFlix" />
      </Link>
      <form className="header__form" onSubmit={props.searchEventHandler}>
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
        <Link to={`/Upload`} className="header__button">
          <button type="submit" className="header__button">
            <img src={uploadIcon} className="header__icon" alt="" />
            <div className="header__text">UPLOAD</div>
          </button>
        </Link>
      </form>
    </header>
  );
}

export default Header;
