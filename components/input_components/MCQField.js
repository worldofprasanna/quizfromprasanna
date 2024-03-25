import React, { useState } from "react";
import PropTypes from "prop-types";

const MCQField = ({ questionId, inputValues, onSubmit }) => {
  console.log("Input Values", inputValues);
  const [selectedValues, setSelectedValues] = useState([]);

  const onSelect = (e, option) => {
    if (selectedValues.includes(option)) {
      // Unselect functionality
      const newValues = selectedValues.filter((e) => e != option);
      setSelectedValues(newValues);
      onSubmit(newValues.join(","));
    } else {
      // Select functionality
      setSelectedValues([...selectedValues, option]);
      if (selectedValues.length == 0) {
        onSubmit(option);
      } else {
        onSubmit([selectedValues, option].join(","));
      }
    }

    // console.log("SelectedValues", selectedValues);
  };

  return (
    <div class="mt-6 space-y-3">
      {inputValues != null &&
        inputValues.map((option) => (
          <div
            className="relative flex items-center"
            key={`${questionId}+${option}`}
          >
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-0"
                onClick={(e) => onSelect(e, option)}
                checked={selectedValues.includes(option)}
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

MCQField.propTypes = {
  options: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MCQField;
