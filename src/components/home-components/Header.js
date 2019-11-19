import React from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = props => {
  console.log(props);

  return (
    <header className="header">
      <Link style={{ border: "none" }} to={"/"}>
        <img className="logo-header" src={Logo} alt="logo bon coin" />
      </Link>

      <button className="offer-submit">
        <span className="offer-submit-button">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9583 0.625H3.04167C1.70042 0.625 0.625 1.7125 0.625 3.04167V19.9583C0.625 21.2875 1.70042 22.375 3.04167 22.375H19.9583C21.2875 22.375 22.375 21.2875 22.375 19.9583V3.04167C22.375 1.7125 21.2875 0.625 19.9583 0.625ZM19.9583 19.9583H3.04167V3.04167H19.9583V19.9583ZM12.7083 17.5417H10.2917V12.7083H5.45833V10.2917H10.2917V5.45833H12.7083V10.2917H17.5417V12.7083H12.7083V17.5417Z"
              fill="white"
            />
          </svg>
        </span>
        <span className="offer-submit-text">Deposer une annonce</span>
      </button>
      <div className="search">
        <span className="search-logo">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9417 18.7584H21.2583L29.575 27.0917L27.0917 29.575L18.7583 21.2584V19.9417L18.3083 19.475C16.4083 21.1084 13.9417 22.0917 11.2583 22.0917C5.275 22.0917 0.424997 17.2417 0.424997 11.2584C0.424997 5.27502 5.275 0.425018 11.2583 0.425018C17.2417 0.425018 22.0917 5.27502 22.0917 11.2584C22.0917 13.9417 21.1083 16.4084 19.475 18.3083L19.9417 18.7584ZM3.75833 11.2584C3.75833 15.4084 7.10833 18.7584 11.2583 18.7584C15.4083 18.7584 18.7583 15.4084 18.7583 11.2584C18.7583 7.10835 15.4083 3.75835 11.2583 3.75835C7.10833 3.75835 3.75833 7.10835 3.75833 11.2584Z"
              fill="black"
            />
          </svg>
        </span>
        <input className="search-zone-header" placeholder="Rechercher"></input>
      </div>
      {props.user ? (
        <div
          onClick={() => {
            props.setShowModal(false);
            props.logOut();
          }}
          className="login"
        >
          <span className="login-logo">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0ZM12.625 5C12.625 3.55 11.45 2.375 9.99999 2.375C8.54999 2.375 7.37499 3.55 7.37499 5C7.37499 6.45 8.54999 7.625 9.99999 7.625C11.45 7.625 12.625 6.45 12.625 5ZM17.625 16.25C17.625 15.45 13.7125 13.625 10 13.625C6.2875 13.625 2.375 15.45 2.375 16.25V17.625H17.625V16.25ZM0 16.25C0 12.925 6.6625 11.25 10 11.25C13.3375 11.25 20 12.925 20 16.25V20H0V16.25Z"
                fill="black"
              />
            </svg>
          </span>
          <button className="login-button">Se deconnecter</button>
        </div>
      ) : (
        <div
          onClick={() => {
            props.setShowModal(true);
          }}
          className="login"
        >
          <span className="login-logo">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0ZM12.625 5C12.625 3.55 11.45 2.375 9.99999 2.375C8.54999 2.375 7.37499 3.55 7.37499 5C7.37499 6.45 8.54999 7.625 9.99999 7.625C11.45 7.625 12.625 6.45 12.625 5ZM17.625 16.25C17.625 15.45 13.7125 13.625 10 13.625C6.2875 13.625 2.375 15.45 2.375 16.25V17.625H17.625V16.25ZM0 16.25C0 12.925 6.6625 11.25 10 11.25C13.3375 11.25 20 12.925 20 16.25V20H0V16.25Z"
                fill="black"
              />
            </svg>
          </span>
          <button className="login-button">Se connecter</button>
        </div>
      )}
    </header>
  );
};

export default Header;
