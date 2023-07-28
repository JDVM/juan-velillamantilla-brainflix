function Button(props) {
  return (
    <button type="submit" className="header__button button">
      {props.UploadIcon}
      <div className="button__text">{props.UploadString}</div>
    </button>
  );
}

export default Button;
