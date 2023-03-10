import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import ContactForm from './components/contact/EmailInput';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route path="/work">
                    <Portfolio />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path={'/contact'}>
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
