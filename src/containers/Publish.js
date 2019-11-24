import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Publish = props => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [offerDescription, setOfferDescription] = useState("");
  const [price, setPrice] = useState();
  const [file, setFile] = useState();

  return (
    <>
      <div className="publish-container">
        <div className="publish-offer-container">
          <div className="publish-offer">
            <h3 style={{ textAlign: "center" }}>Deposer une annonce</h3>
            <form
              className="publish-offer-form"
              onSubmit={async event => {
                event.preventDefault();
                const formData = new FormData();
                formData.append("files", file);
                formData.append("title", title);
                formData.append("description", offerDescription);
                formData.append("price", price);
                try {
                  const response = await axios.post(
                    "http://localhost:4000/offer/publish",
                    formData,
                    {
                      headers: {
                        Authorization: "Bearer " + props.user.token,
                        "Content-Type": "multipart/form-data"
                      }
                    }
                  );
                  console.log(response.data);
                  history.push("/");
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              <p>Titre de l'annonce:</p>
              <input
                className="publish-offer-title"
                type="text"
                value={title}
                placeholder="titre de l'annonce"
                onChange={event => {
                  setTitle(event.target.value);
                }}
              ></input>
              <p>Texte de l'annonce:</p>
              <textarea
                className="publish-offer-description"
                type="text"
                value={offerDescription}
                placeholder="texte de l'annonce"
                onChange={event => {
                  setOfferDescription(event.target.value);
                }}
              ></textarea>
              <p>Prix:</p>

              <span>
                <input
                  className="publish-offer-price"
                  type="number"
                  value={price}
                  placeholder="prix"
                  onChange={event => {
                    setPrice(event.target.value);
                  }}
                ></input>
                $
              </span>
              <p>Photo:</p>
              <input
                className="publish-offer-file"
                type="file"
                placeholder="photo"
                onChange={event => {
                  setFile(event.target.files[0]);
                }}
              ></input>
              <input
                className="offer-validation"
                type="submit"
                value="Valider"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publish;
