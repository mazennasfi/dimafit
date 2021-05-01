const Input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input {...props} />;
      break;
    case "textarea":
      inputElement = <textarea {...props} />;
      break;
    case "radio":
      inputElement = props.values.map((gender) => (
        <div key={gender}>
          <input type="radio" name="gender" value={gender} />
          <label>{gender}</label>
        </div>
      ));
      break;
    default:
      inputElement = <input {...props} />;
  }
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default Input;
