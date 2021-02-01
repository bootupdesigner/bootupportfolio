import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Banner from './components/Banner';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Menu from './components/Menu';
import BootUpDesigner from './components/BootUpDesigner';

function App() {
  return (
    <Router>
      <Menu sticky="top"/>
      <Banner />
      <Switch className="main-pages">
        <Route exact path="/" component={BootUpDesigner} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;