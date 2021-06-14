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
        <label className="inline-flex items-center mt-3 mr-2">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
            name="gender"
          />
          <span className="ml-2 text-gray-700 cursor-pointer">{gender}</span>
        </label>
      ));
      break;
    default:
      inputElement = <input {...props} />;
  }
  return (
    <div>
      <label className="block text-gray-400 text-lg	 font-bold mb-2">
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};
export default Input;
