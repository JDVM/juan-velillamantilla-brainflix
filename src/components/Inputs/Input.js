import "./Input.scss"

function Input() {
  return (
    <label className="label" hmtlfor="Name">
      <input
        type="text"
        name="nameInput"
        id="Name"
        className="input"
        placeholder="Search"
      />
    </label>
  );
}

export default Input;
