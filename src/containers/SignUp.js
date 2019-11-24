import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const SignUp = props => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [cgv, setCgv] = useState(false);

  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleUsernameChange = event => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };

  const handlePassword2Change = event => {
    const value = event.target.value;
    setPassword2(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <div className="create-account-container-page">
      <div className="create-account-container">
        <div className="create-account-infos">
          <h3 style={{ textAlign: "center" }}>Pourquoi creer un compte ?</h3>
          <div className="create-account-infos-block">
            <span>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.9825 3.5C11.3225 3.5 3.5 11.34 3.5 21C3.5 30.66 11.3225 38.5 20.9825 38.5C30.66 38.5 38.5 30.66 38.5 21C38.5 11.34 30.66 3.5 20.9825 3.5ZM21 35C13.265 35 7 28.735 7 21C7 13.265 13.265 7 21 7C28.735 7 35 13.265 35 21C35 28.735 28.735 35 21 35ZM19.25 12.25H21.875V21.4375L29.75 26.11L28.4375 28.2625L19.25 22.75V12.25Z"
                  fill="#4183D7"
                />
              </svg>
            </span>
            <div className="create-account-infos-block-description">
              <h4>Gagner du temps</h4>
              <p>
                Publiez vos annonces rapidement, avec vos informations
                pré-remplies chaque fois que vous souhaitez déposer une nouvelle
                annonce.
              </p>
            </div>
          </div>
          <div className="create-account-infos-block">
            <span>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.5 27.5625V18.8125C31.5 13.44 28.6475 8.9425 23.625 7.7525V6.5625C23.625 5.11 22.4525 3.9375 21 3.9375C19.5475 3.9375 18.375 5.11 18.375 6.5625V7.7525C13.37 8.9425 10.5 13.4225 10.5 18.8125V27.5625L7 31.0625V32.8125H35V31.0625L31.5 27.5625ZM21 38.0625C22.925 38.0625 24.5 36.4875 24.5 34.5625H17.5C17.5 36.4875 19.075 38.0625 21 38.0625ZM14 29.3125H28V18.8125C28 14.4725 25.3575 10.9375 21 10.9375C16.6425 10.9375 14 14.4725 14 18.8125V29.3125Z"
                  fill="#4183D7"
                />
              </svg>
            </span>
            <div className="create-account-infos-block-description">
              <h4>Soyez les premiers informés</h4>
              <p>
                Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce
                qui vous intéresse.
              </p>
            </div>
          </div>
          <div className="create-account-infos-block">
            <span>
              <svg
                width="40"
                height="28"
                viewBox="0 0 40 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 14C3.7775 6.3175 11.25 0.875 20 0.875C28.75 0.875 36.2225 6.3175 39.25 14C36.2225 21.6825 28.75 27.125 20 27.125C11.25 27.125 3.7775 21.6825 0.75 14ZM35.435 14C32.5475 8.1025 26.6325 4.375 20 4.375C13.3675 4.375 7.45254 8.1025 4.56504 14C7.45254 19.8975 13.35 23.625 20 23.625C26.65 23.625 32.5475 19.8975 35.435 14ZM20 9.625C22.415 9.625 24.375 11.585 24.375 14C24.375 16.415 22.415 18.375 20 18.375C17.585 18.375 15.625 16.415 15.625 14C15.625 11.585 17.585 9.625 20 9.625ZM12.125 14C12.125 9.66 15.66 6.125 20 6.125C24.34 6.125 27.875 9.66 27.875 14C27.875 18.34 24.34 21.875 20 21.875C15.66 21.875 12.125 18.34 12.125 14Z"
                  fill="#4183D7"
                />
              </svg>
            </span>
            <div className="create-account-infos-block-description">
              <h4>Visibilité</h4>
              <p>
                Suivez les statistiques de vos annonces (nombre de fois où votre
                annonce a été vue, nombre de contacts reçus).
              </p>
            </div>
          </div>
        </div>
        <aside className="create-account-box" onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center" }}>Creez un compte</h3>
          <p>Pseudo</p>
          <input
            className="pseudo-input"
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          ></input>
          <p>Adresse email</p>
          <input
            className="email-input"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <div className="passwords-block">
            <div className="password-block">
              <p>Mot de passe</p>
              <input
                className="create-account-password"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
              {passwordRegEx.test(password) === false && (
                <p style={{ fontSize: "0.7rem", color: "#4183d7" }}>
                  Pour plus de sécurité, votre mot de passe doit contenir au
                  moins 8 caractères dont 1 chiffre et 1 lettre.
                </p>
              )}
            </div>
            <div className="password-block">
              <p>Confirmer mot de passe</p>
              <input
                className="create-account-password-confirmation"
                type="password"
                name="password"
                value={password2}
                onChange={handlePassword2Change}
              ></input>
              {password !== password2 ? (
                <p style={{ fontSize: "0.7rem", color: "#db4437" }}>
                  Les mots de passe saisis sont différents. Veuillez réessayer.
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="eula-confirmation"
            onClick={() => {
              setCgv(!cgv);
            }}
          >
            {cgv === true ? (
              <span style={{ backgroundColor: "#F56B2A" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="#f56b2a"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z"
                    fill="#F56B2A"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z"
                    fill="black"
                  />
                </svg>
              </span>
            )}

            <span style={{ paddingLeft: "10px" }}>
              J'accepte les conditions
            </span>
          </div>

          {password !== password2 || cgv === false ? (
            <button className="create-account-button-notok">
              Creer mon compte personnel
            </button>
          ) : (
            <button
              className="create-account-button-ok"
              value="Submit"
              onClick={async () => {
                try {
                  await axios
                    .post("http://localhost:4000/user/sign_up", {
                      username: username,
                      email: email,
                      password: password
                    })
                    .then(response => {
                      if (response.data) {
                        props.setShowModal(false);
                        history.push("/");
                        props.logIn(response.data);
                      }
                    });
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              Creer mon compte personnel
            </button>
          )}
        </aside>
      </div>
    </div>
  );
};

export default SignUp;
