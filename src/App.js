import './App.css';
import './App.scss';
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import { Switch, Route } from 'react-router-dom'
import Portfolio from './Pages/Portfolio'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className="App">

      <div className="sidebar">
        <NavBar />
      </div>


      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/blogs" exact component={Blogs} />
            <Route path="/contact" exact component={Contact} />
          </Switch>

        </div>
      </div>
    </div>
  );
}

export default App;
