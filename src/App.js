import QuestionPageContainer from "./components/QuestionPage/QuestionPageContainer/QuestionPageContainer";
import {Routes, Route} from "react-router-dom";

function App() {
  return(
        <Routes>
          <Route path='/' element={<QuestionPageContainer/>} />
        </Routes>
  )
}

export default App;
