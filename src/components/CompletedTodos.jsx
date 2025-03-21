import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import React, { useState } from 'react';

const CompletedTodos = ({ todo, completion }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);

  // Toggle checkbox state and update the todo completion status
  const checkbox = () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    completion(todo, newCheckedStatus); // Call completion with the new status
  };

  return (
    <div>
      <div onClick={checkbox}>
        {isChecked ? <IoMdCheckbox /> : <MdOutlineCheckBoxOutlineBlank />}
      </div>
    </div>
  );
};

export default CompletedTodos;
