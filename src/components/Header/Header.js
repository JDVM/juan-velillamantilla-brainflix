import MohanMurugeJpg from "../../Assets/Images/Mohan-muruge.jpg";
import Logo from "../../Assets/Logo/BrainFlix-logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={Logo} className="header__logo" alt="Logo for BrainFlix" />
      <article className="header__name">
        <img
          src={MohanMurugeJpg}
          className="header__photo"
          alt="Mohan Muruge face profile"
        />
        <label className="header__nameLabel bold" hmtlfor="Name">
          NAME
          <input
            type="text"
            name="nameInput"
            id="Name"
            className="header__nameText"
            placeholder="Enter your name"
          />
        </label>
      </article>
      <button type="submit" className="header__button">
        UPLOAD
      </button>
    </header>
  );
}

export default Header;
