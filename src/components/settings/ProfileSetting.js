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

        <div className="general-information">
          <h2>Informations générales</h2>

          <div className="Information">
            <div className="block-info">
              <p id="titleInformation">Photo</p>
              <div id="click" onClick={this.hello}>
                <p>Ajouter une photo de profile pour votre compte</p>
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

        <div className="parametre">
          <div className="general-pref">
            <h3>Préférences générales</h3>

            <div className="pref">
              <div className="block-pref">
                <p id="titlePref">Téléphone</p>
                <div id="click" onClick={this.hello}>
                  <p>06 05 25 14 58</p>
                  <div className="icon">
                    <IoIosArrowForward size={30} />
                  </div>
                </div>
              </div>
              <div className="line-white"></div>
              <div className="block-pref">
                <p id="titlePref">Téléphone</p>
                <div id="click" onClick={this.hello}>
                  <p>06 05 25 14 58</p>
                  <div className="icon">
                    <IoIosArrowForward size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mdp">
            <h3>Mot de passe</h3>

            <form id="form-mdp">
              <div className="ancien">
                <label>Ancien mot de passe :</label>
                <input
                  type="password"
                  id="password-ancien"
                  placeholder="Votre ancien mot de passe"
                />
              </div>
              <div className="new">
                <label>Nouveau mot de passe :</label>
                <input
                  type="password"
                  id="password-new"
                  placeholder="Votre nouveau mot de passe"
                />
              </div>
              <div className="verification">
                <label>Vérification :</label>
                <input
                  type="password"
                  id="password-verification"
                  placeholder="Verification du mot de passe"
                />
              </div>
              <input type="submit" id="valide" value="Valider" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
