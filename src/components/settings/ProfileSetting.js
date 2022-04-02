import * as React from "react";
import "../../css/components/settings/ProfileSettings.css";
import { IoIosArrowForward } from "react-icons/io";

export default class ProfileSettings extends React.Component {
  hello() {
    console.log("Hey !");
  }

  render() {
    return (
      <div className="profile-settings-container">
        <h1>Informations</h1>

        {/* Information général du profile */}

        <div className="general-information">
          <h2>Informations générales</h2>

          <div className="Information">
            <div className="block-info">
              <p id="titleInformation">Photo</p>
              <div id="click" onClick={this.hello}>
                <p>Ajouter une photo de profile</p>
                <div className="icon">
                  <IoIosArrowForward size={30} />
                </div>
              </div>
            </div>
            <div className="line-white"></div>
            <div className="block-info">
              <p id="titleInformation">Nom</p>
              <div id="click" onClick={this.hello}>
                <p>Name Lastname</p>
                <div className="icon">
                  <IoIosArrowForward size={30} />
                </div>
              </div>
            </div>
            <div className="line-white"></div>
            <div className="block-info">
              <p id="titleInformation">Anniversaire</p>
              <div id="click" onClick={this.hello}>
                <p>01 janvier 2022</p>
                <div className="icon">
                  <IoIosArrowForward size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Changement des coordonnées */}

        <div className="general-coordonnes">
          <h2>Coordonnées</h2>

          <div className="coordonnees">
            <div className="block-cord">
              <p id="titleCord">Adresse email</p>
              <div id="click" onClick={this.hello}>
                <p>pornhub@hotmail.fr</p>
                <div className="icon">
                  <IoIosArrowForward size={30} />
                </div>
              </div>
            </div>
            <div className="line-white"></div>
            <div className="block-cord">
              <p id="titleCord">Téléphone</p>
              <div id="click" onClick={this.hello}>
                <p>06 05 25 14 58</p>
                <div className="icon">
                  <IoIosArrowForward size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Différent paramètres */}

        <div className="parametre">
          <div className="general-pref">
            <h3>Préférences générales</h3>

            <div className="pref">
              <div className="block-pref">
                <p id="titlePref">Téléphone</p>
                <div id="langue" onClick={this.hello}>
                  <p>06 05 25 14 58</p>
                  <div className="icon">
                    <IoIosArrowForward size={30} />
                  </div>
                </div>
              </div>
              <div className="line-white"></div>
              <div className="block-pref">
                <p id="titlePref">Téléphone</p>
                <div id="save-mdp" onClick={this.hello}>
                  <p>06 05 25 14 58</p>
                  <div className="icon">
                    <IoIosArrowForward size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Changement de mot de passe */}

          <div className="mdp">
            <h2>Mot de passe</h2>

            <form id="form-mdp">
              <div className="ancien">
                <label>Ancien mot de passe :</label>
                <input type="password" id="password-ancien" />
              </div>
              <div className="new">
                <label>Nouveau mot de passe :</label>
                <input type="password" id="password-new" />
              </div>
              <div className="verification">
                <label>Vérification :</label>
                <input type="password" id="password-verification" />
              </div>
              <input type="submit" id="valide" value="Valider" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
