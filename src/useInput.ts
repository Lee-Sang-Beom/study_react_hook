import React, { useState } from "react";

export default function UseInput(
  initialValue: String,
  submitActionFunction: Function,
  setText: Function
) {
  const [inputValue, setInputValue] = useState<String>(initialValue);

  const handleChange = (e: React.FormEvent) => {
    const targetTag = e.target as HTMLInputElement;
    setInputValue(targetTag.value);
  };

  const handleSubmit = () => {
    submitActionFunction(inputValue);
    setText(inputValue);
    setInputValue("");
  };

  return [inputValue, handleChange, handleSubmit];
}
