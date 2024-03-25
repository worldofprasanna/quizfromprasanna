import React, { useState } from "react";
import PropTypes from "prop-types";

const RadioInputField = ({ inputValues, onSubmit }) => {
  console.log("Input Values", inputValues);
  const [selectedValue, setSelectedValue] = useState(0);

  const onSelected = (e, option) => {
    setSelectedValue(option);
    onSubmit(option);
  };

  return (
    <div class="mt-6 space-y-3">
      {inputValues != null &&
        inputValues.map((option) => (
          <div className="relative flex items-center" key={option}>
            <div className="flex items-center h-5">
              <input
                type="radio"
                name="terms"
                id="terms"
                class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-0"
                onClick={(e) => onSelected(e, option)}
                checked={selectedValue === option}
              />
            </div>

            <div class="ml-3">
              <p class="text-md font-medium text-gray-700"> {option}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

RadioInputField.propTypes = {
  options: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RadioInputField;
