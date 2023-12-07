import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Import BrowserRouter and other components from react-router-dom
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import ServicesPage from './components/ServicePage';
import Privacy from './components/Privacy';
import LearnOne from './components/LearnOne';
import LearnTwo from './components/LearnTwo';
import LearnThree from './components/LearnThree';
import Management from './components/Management';
import Consulting from './components/Consulting';
import EducationTraining from './components/Education'
import Tech from './components/Tech';
import Protection from "./components/Protection";
import Compliance from './components/Compliance';
import Development from './components/Development';
import Solutions from './components/Solutions';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/about-pioneering" component={LearnOne} />
        <Route path="/about-security" component={LearnTwo} />
        <Route path="/about-integrity" component={LearnThree} />
        <Route path="/risk-mangement-service" component={Management} />
        <Route path="/security-consulting-service" component={Consulting} />
        <Route path="/security-consulting-service" component={EducationTraining} />
        <Route path="/tech-integration-service" component={Tech} />
        <Route path="/executive-protection-service" component={Protection} />
        <Route path="/compliance-regulatory-service" component={Compliance} />
        <Route path="/business-development-service" component={Development} />
        <Route path="/security-solutions-service" component={Solutions} />
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
