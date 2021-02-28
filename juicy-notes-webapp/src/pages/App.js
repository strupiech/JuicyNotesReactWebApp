import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { GlobalStyle, Main } from '../styles/GlobalStyles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import JumbotronPage from './JumbotronPage';
import CollectionsPage from './CollectionsPage';
import CollectionPage from './CollectionPage';
import LoginPage from './LoginPage';
import TimelinePage from './TimelinePage';




function App() {
  const [isUserAuthenticated, setUserAutenticated] = useState(false);

  function toggleAuthenticated() {
    setUserAutenticated(!isUserAuthenticated);
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header isUserAuthenticated={isUserAuthenticated} />
        <Main>
          <Switch>
            <Route exact path="/" render={() => {
              return (
                isUserAuthenticated ?
                  <Redirect to="/timeline" /> :
                  <Redirect to="/welcome" />
              );
            }} />
            <Route exact path="/welcome">
              <JumbotronPage toggle={toggleAuthenticated} />
            </Route>
            <Route exact path="/collections">
              <CollectionsPage />
            </Route>
            <Route exact path="/collection">
              <CollectionPage />
            </Route>
            <Route exact path="/login">
              <LoginPage toggle={toggleAuthenticated} />
            </Route>
            <Route exact path="/timeline">
              <TimelinePage />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
