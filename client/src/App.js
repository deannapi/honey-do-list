import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// import { Provider } from "react-redux";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chores from "./pages/Chores";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import JoinGroup from './pages/JoinGroup';
import MyGroup from './pages/MyGroup';

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
        <div className="">
          {/* <Provider> */}
          <Header />
          <div className="">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/chores" page={Chores} />
              <Route exact path="/joingroup" />
              <Route exact path="/mygroup" />
            </Switch>
          </div>
          <Footer />
          {/* </Provider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
