import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ContactM from './pages/ContactM';
import Material from './pages/Material';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
         <Route exact path='/contact' component={Contact} />
         <Route exact path='/contactm' component={ContactM} />
         <Route exact path='/m' component={Material} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
