import axios from "axios";
import * as React from "react";
import "../../css/components/settings/Securite.css";

export default class Securite extends React.Component {

  constructor(props) {
    super(props)
    this.deleteAccount = this.deleteAccount.bind(this)
  }

  componentDidMount() {

  }


  deleteAccount() {

    let token = localStorage.getItem('user_token')

    axios.get('http://localhost:8000/api/settings/remove_account', {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "*/*",
        'Access-Control-Allow-Origin': '*'
      }
    }).then((res) => {
      let data = res.data

      if (data.status === 'success') {
        localStorage.removeItem('user_token')
        window.location = '/'
      }

    })
  }

  render() {
    return (
      <div className="securite-container">
        <h1>Sécurité</h1>
        <div className="securite-general">
          <h2>Sécurité du compte</h2>
          <div className="secu">
            <div className="double-identification">
              <p>A2F</p>
              <div className="btn-double-identification">
                <button type="button" className="A2F">
                  Activer l'authentification à double facteur
                </button>
              </div>
            </div>
            <div className="line-black"></div>
            <div className="last-connexion">
              <p>Dernière connexion le :</p>
              <p>17/02/2022</p>
            </div>
          </div>
          <button type="button" className="supression" onClick={this.deleteAccount}>
            Suprimer le compte
          </button>
        </div>
      </div>
    );
  }
}
