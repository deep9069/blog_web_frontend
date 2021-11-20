import "./App.css";
import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { SignUpLogIn } from "./components/Pages/SignUpLogIn";
import { Setting} from "./components/Pages/Setting";
import { Search} from "./components/Pages/Search";
import { Trending } from "./components/Pages/homeComponents/Trending";
import { Recommended } from "./components/Pages/homeComponents/Recommended";
import Post from "./components/Post/index";
import MainPage from './pages';
import Hero from "./components/Hero/index";
import Header from "./components/Header/index"
import PageNotFound from './pages/404';
import { Redirect } from 'react-router';


function App() {
  return (
    <>
      <Router >
        <Header/>
        <NavBar />
        {/* <Hero/> */}

        <div className="pages">
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={About} />
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/contact" component={Contact} />
            <Route path="/signUpLogIn" component={SignUpLogIn} />
            <Route path="/setting" component={Setting}/>
            <Route path="/recommended" component={Recommended}/>
            <Route path="/trending" component={Trending}/>
            <Route path="/search" component={Search}/>
            <Route exact path="/post/:postId" component={Post} />
            <Route  component={PageNotFound} />
          </Switch>
        </div>
      </Router>
     
    </>
  );
}

export default App;