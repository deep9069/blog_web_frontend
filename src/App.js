import { HashRouter, Route, Routes, Link } from "react-router-dom";
import BlogPage from "./components/blog_page/blog_page";
import SignIn from "./components/sign_in/sign_in_page";
import SignUp from "./components/sign_up/sign_up_page";
import { useAuth } from "./context/authContext";

function App() {
  const [auth] = useAuth(useAuth);

  return (
    <HashRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div>
              <h1> {auth.userSignIn === true ? "YES" : "no"}</h1>
              <br />
              <button>Change auth</button>
              <br />
              <Link to='/signIn'> Sign in </Link>
              <br />
              <Link to='/signUp'> Sign up </Link>
              <br />
              <Link to='/blogs'> blog page </Link>
            </div>
          }
        />
        <Route exact path='/signUp' element={<SignUp />} />
        <Route
          exact
          path='/signIn'
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
