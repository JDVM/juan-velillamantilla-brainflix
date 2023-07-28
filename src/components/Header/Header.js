import Logo from "../Assets/Logo/BrainFlix-logo.svg";
import Button from "../Button/Button";
import './Header.scss';
import UploadIcon from '../Assets/Icons/upload.svg'
import Input from '../Inputs/Input'


function Header() {
  const uploadIcon = <img src={UploadIcon}/>
  return (
    <header className="header">
      <img src={Logo} className="header__logo" alt="Logo for BrainFlix" />
      <form className="header__form">
        <div className="header__photo"></div>
        
        <Input />
       <Button UploadIcon={uploadIcon} UploadString="UPLOAD"/>
      </form>
    </header>
  );
}

export default Header;
