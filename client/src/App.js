import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// import { Provider } from "react-redux";

import Option from "./pages/Option";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';
import Chores from "./pages/Chores";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import JoinGroup from "./pages/JoinGroup";
import MyGroup from "./pages/MyGroup";
import AddChore from './pages/AddChore';


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

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <div className=""> */}
          {/* <Provider> */}
          <Header />
          <Homepage />
          <div className="">
            <Switch>
              <Route exact path="/option" component={Option} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/chores" component={Chores} />
              <Route exact path="/joingroup" component={JoinGroup} />
              <Route exact path="/mygroup" component={MyGroup} />
              <Route exact path="/addchore" component={AddChore} />
            </Switch>
          </div>
          <Footer />
          {/* </Provider> */}
        {/* </div> */}
      </Router>
    </ApolloProvider>
  );
}