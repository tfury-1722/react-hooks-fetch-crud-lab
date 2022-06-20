import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [quizList, setQuizList] = useState([]);
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm quizList={quizList} /> : <QuestionList quizList={quizList} setQuizList={setQuizList} />}
    </main>
  );
}

export default App;
