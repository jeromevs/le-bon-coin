import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./containers/Home";

import Offer from "./containers/Offer";
import Header from "./components/home-components/Header";
import Footer from "./components/home-components/Footer";
import Modal from "./components/home-components/Modal";
import SignUp from "./containers/SignUp";

import "./App.css";

function App() {
  const userCookie = Cookies.get("token");
  const [user, setUser] = useState(userCookie);
  const [showModal, setShowModal] = useState(false);
  console.log("console log user" + user);

  const logIn = obj => {
    Cookies.set("token", obj.token);
    setUser(obj);
  };

  const logOut = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <div style={{ height: "auto" }}>
      <Router>
        {showModal === true && (
          <Modal setShowModal={setShowModal} logIn={logIn} />
        )}
        <Header
          user={user}
          showModal={showModal}
          setShowModal={setShowModal}
          logOut={logOut}
        />

        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/createAccount/">
            <SignUp
              setShowModal={setShowModal}
              logIn={obj => {
                Cookies.set("user", obj.account.username);
                setUser(obj);
              }}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
