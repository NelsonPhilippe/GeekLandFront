import * as React from "react";
import "./../css/components/Contact.css";
import { Link } from "react-router-dom";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="container-contact">
        <h1>Contact</h1>

        <form id="contactForm">
          <div className="name">
            <label>Nom / Prénom</label>
            <input
              type="text"
              id="name"
              placeholder="Entrez votre nom et prénom"
            />
          </div>

          <div className="sujet">
            <label>Sujet</label>
            <input type="text" id="sujet" placeholder="Entrez un sujet" />
          </div>

          <div className="requete">
            <label>Requête</label>
            <textarea
              id="requete"
              placeholder="Entrez votre requête"
            ></textarea>
          </div>

          <input type="submit" id="btn-requete" value="Envoyer la requête" />
        </form>

        <Link to="/settings/faq">F.A.Q?</Link>
      </div>
    );
  }
}
