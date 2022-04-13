import * as React from "react";
import "../../css/components/settings/ProfileSettings.css";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

export default class ProfileSettings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      birthday: '00 Janvier 0000',
      mail: '',
      phone: ''
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData() {

    let token = localStorage.getItem('user_token')

    axios.get('http://localhost:8000/api/settings/profile', {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "*/*",
        'Access-Control-Allow-Origin': '*'

      }
    }).then((res) => {

      let data = res.data
      this.setState({
        name: data.name,
        lastname: data.last_name,
        mail: data.email,
        phone: data.phone
      })
    })
  }

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
                <p>{`${this.state.lastname} ${this.state.name}`}</p>
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
                <p>{`${this.state.mail}`}</p>
                <div className="icon">
                  <IoIosArrowForward size={30} />
                </div>
              </div>
            </div>
            <div className="line-white"></div>
            <div className="block-cord">
              <p id="titleCord">Téléphone</p>
              <div id="click" onClick={this.hello}>
                <p> 0{this.state.phone}</p>
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
            <h2>Préférences générales</h2>

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
              <div className="ancien-mdp">
                <label>Ancien mot de passe :</label>
                <input type="password" id="password-ancien" />
              </div>
              <div className="new-mdp">
                <label>Nouveau mot de passe :</label>
                <input type="password" id="password-new" />
              </div>
              <div className="verification-mdp">
                <label>Vérification :</label>
                <input type="password" id="password-verification" />
              </div>
              <div className="btn-valide">
                <input type="submit" id="valide" value="Valider" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
