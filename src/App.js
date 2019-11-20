import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Publish from "./containers/Publish";
import SignUp from "./containers/SignUp";
import Header from "./components/home-components/Header";
import Footer from "./components/home-components/Footer";
import Modal from "./components/home-components/Modal";
import "./App.css";

function App() {
  const userCookie = Cookies.get("token");
  const [user, setUser] = useState({ token: userCookie });
  const [showModal, setShowModal] = useState(false);

  const logIn = obj => {
    Cookies.set("token", obj.token);
    setUser({
      token: obj.token,
      username: obj.account.username
    });
  };

  const logOut = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <div style={{ height: "auto" }}>
      <Router>
        {/* Display modal if user not connected */}
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
            <SignUp setShowModal={setShowModal} logIn={logIn} />
          </Route>
          {/* publish an offer */}
          <Route path="/publish/">
            <Publish user={user} />
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
