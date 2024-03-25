import React, { useState } from "react";

const InputField = ({ saveAnswer }) => {
  const [answer, setAnswer] = useState("");

  return (
    <div className="mt-2">
      <input
        type="text"
        name=""
        id=""
        placeholder=""
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
          saveAnswer(e.target.value);
        }}
        className="block px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
      />

      {/* <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onSubmit(answer);
        }}
        value="Save"
      >
        
      </input> */}
    </div>
  );
};

export default InputField;
