import { HashRouter, Route, Routes, Link } from "react-router-dom";
import BlogPage from "./components/blog_page/blog_page";
import SignIn from "./components/login/sign_in_page";
import SignUp from "./components/sign_up/sign_up_page";
function App() {
  return (
    <HashRouter>
      <Routes >
        <Route exact path="/" element={
          <div>
            <Link to="sign-in"> Sign in </Link>
            <Link to="sign-up"> Sign up </Link>
            <Link to="/blogs"> blog page </Link>
          </div>
        } />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/blogs" element={<BlogPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
