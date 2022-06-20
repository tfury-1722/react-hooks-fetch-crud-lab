import React from "react";

function QuestionItem({ question, onDelete, handleNewAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function anotherChose(e) {
    handleNewAnswer(id, parseInt(e.target.value))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={anotherChose} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => onDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
