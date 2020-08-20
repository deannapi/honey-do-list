import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from 'react-redux';
import store from './utils/store';

import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Chores from "./pages/Chores";
import Nav from "./pages/Header";
import Signup from './pages/Signup';
import Login from './pages/Login';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
