import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Modal = props => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="modal">
      <div className="modal-connection">
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem"
          }}
        >
          Connexion
        </p>
        <div className="modal-connexion-container">
          <div
            className="modal-connexion-container-login"
            onSubmit={handleSubmit}
          >
            <p>Adresse email</p>
            <input
              className="modal-connexion-container-login-email"
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
            ></input>
            <p>Mot de passe</p>
            <input
              className="modal-connexion-container-login-password"
              type="text"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            ></input>
            <br />
            <button
              className="modal-connexion-container-login-button"
              type="submit"
              value="Submit"
              onClick={async () => {
                try {
                  await axios
                    .post(
                      "https://leboncoin-api.herokuapp.com/api/user/log_in",
                      {
                        email: email,
                        password: password
                      }
                    )
                    .then(response => {
                      if (response.data.token) {
                        props.setShowModal(false);
                        history.push("/");
                        props.logIn(response.data);
                        console.log(response.data);
                      }
                    });
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              Se connecter
            </button>
          </div>
          <div className="modal-connexion-container-create-account">
            <p style={{ textAlign: "center" }}>Vous n'avez pas de compte ?</p>

            <button
              className="modal-connexion-container-create-account-button"
              onClick={() => {
                props.setShowModal(false);
                history.push("/createAccount/");
              }}
            >
              Creer un compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
