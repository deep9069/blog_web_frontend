import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/login/sign_in_page";
import SignUp from "./components/sign_up/sign_up_page";
function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
