import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({quizList, setQuizList}) {
  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(questions => setQuizList(questions))
  }, [setQuizList])

  let questionsView = quizList.map(questions => {
    return(
      <QuestionItem
      key={questions.id}
      question={questions}
      handleNewAnswer={handleNewAnswer}
      onDelete={handleDelete}
      />
    )
  })

  function handleNewAnswer(id, correctIndex) {
    let newChoice = {
      correctIndex: correctIndex
    }
    fetch(`http://localhost4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newChoice)
    })
    .then(r => r.json())
    .then(data => {
      let modifiedQuiz = quizList.map(question => {
        if (question.id === id) {
            question.correctIndex = correctIndex
            return question
        }
      })
      setQuizList(modifiedQuiz)
    })
  }

  function handleDelete(id) {
    let newRefArray = [...quizList];
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => setQuizList(newRefArray.filter(question => question.id !== id)))
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsView}</ul>
    </section>
  );
}

export default QuestionList;
