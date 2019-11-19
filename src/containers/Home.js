import React, { useState, useEffect } from "react";

import axios from "axios";

import Offers from "../components/home-components/Offers";

import Hero from "../components/home-components/Hero";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [counter, setCounter] = useState(0);
  const [paging, setPaging] = useState(0);

  let limit = 5; // nbre d elements par page
  const arrayPaging = [];
  let arrayPagingLength = paging / limit; // 38 / 3 = 12.66

  let element = 0;
  for (let i = 0; i < arrayPagingLength; i++) {
    element = element + 1;
    arrayPaging.push(element);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=" +
            counter +
            "&limit=" +
            limit
        );
        setOffers(response.data.offers);
        setPaging(response.data.count);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [counter]);

  return (
    <>
      <div>
        <Hero />

        {isLoading === true ? (
          <p>Downloading: please wait...</p>
        ) : (
          <Offers offers={offers} />
        )}

        <div className="paging">
          {counter <= 0 ? (
            ""
          ) : (
            <span
              onClick={() => {
                setCounter(counter - 3);
              }}
            >
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.835 1.87001L10.055 0.100006L0.165009 10L10.065 19.9L11.835 18.13L3.70501 10L11.835 1.87001Z"
                  fill="#4183d7"
                  fillOpacity="0.7"
                />
              </svg>
            </span>
          )}
          <div className="change-page-buttons">
            {arrayPaging.map((pageNb, index) => {
              return (
                <button
                  className="button-paging"
                  key={index}
                  onClick={() => {
                    setCounter(pageNb * limit - limit);
                  }}
                >
                  {pageNb}
                </button>
              );
            })}
          </div>

          {counter >= paging - limit ? (
            ""
          ) : (
            <span
              onClick={() => {
                setCounter(counter + 3);
              }}
            >
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.165009 18.13L1.93501 19.9L11.835 10L1.93501 0.100006L0.165009 1.87001L8.29501 10L0.165009 18.13H0.165009Z"
                  fill="#4183d7"
                  fillOpacity="0.7"
                />
              </svg>
            </span>
          )}
        </div>
        <div className="counter">Page actuelle {counter / limit + 1}</div>
      </div>
    </>
  );
};

export default Home;
