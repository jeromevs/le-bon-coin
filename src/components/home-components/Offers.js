import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const Offers = props => {
  return (
    <section className="offers-list">
      {props.offers.map(item => {
        const newdate = format(new Date(item.created), "PPPPpppp");
        return (
          <Link
            key={item._id}
            to={"/offer/" + item._id}
            style={{ textDecoration: "none" }}
          >
            <div className="offer-card" key={item._id}>
              <div className="image-card">
                {item.pictures[0] !== undefined ? (
                  <img src={item.pictures[0]} alt="" />
                ) : (
                  " "
                )}
              </div>
              <div className="offer-description" key={item._id}>
                <div className="offer-description-header">
                  <div className="offer-title" style={{ color: "black" }}>
                    {item.title}
                  </div>
                  <div className="offer-price">
                    {item.price}
                    <span>$</span>
                  </div>
                </div>

                <div className="offer-date" style={{ color: "black" }}>
                  {newdate}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Offers;
