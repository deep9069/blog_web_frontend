import { HashRouter, Route, Routes, Link } from "react-router-dom";
import BlogPage from "./components/blog_page/blog_page";
import SignIn from "./components/sign_in/sign_in_page";
import SignUp from "./components/sign_up/sign_up_page";
// import ErrorModel from "./models/error_model/error_model";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div>
              <Link to='sign-in'> Sign in </Link>
              <br />
              <Link to='/sign-up'> Sign up </Link>
              <br />
              <Link to='/blogs'> blog page </Link>
            </div>
          }
        />
        <Route exact path='/sign-up' element={<SignUp />} />
        <Route
          exact
          path='/sign-in'
          element={
            <div>
              <SignIn />
              {/* <ErrorModel /> */}
            </div>
          }
        />
        <Route exact path='/blogs' element={<BlogPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
