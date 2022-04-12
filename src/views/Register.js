import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';
import "../css/Register.css"
export default class Register extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            mail: '',
            name: '',
            lastname: '',
            postal_address: '',
            postal_code: '',
            city: '',
            country: '',
            phone: '',
            newsletters: false,
            isLogin: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e) {

        e.preventDefault()
        const username = this.state.username
        const password = this.state.password
        const mail = this.state.mail
        const name = this.state.name
        const lastname = this.state.lastname
        const postal_address = this.state.postal_address
        const postal_code = this.state.postal_code
        const city = this.state.city
        const country = this.state.country
        const phone = this.state.phone

        axios.post('http://localhost:8000/api/auth/register', {
            username: username,
            password: password,
            email: mail,
            name: name,
            newsletter: this.state.newsletters,
            url_image_profile: 'default',
            lastname: lastname,
            postal_address: postal_address,
            postal_code: postal_code,
            city: city,
            country: country,
            phone: phone
        },{ headers: {
            "Content-Type" : "application/json", 
			"Accept": "*/*"
        }}).then((res) => {

            let data = res.data

            if(data.response === 'user exist'){
                alert('L\'utilisateur est déja existant')
                window.location = '/'
                return
            }


            localStorage.setItem('user_token', data.token)
            window.location = '/'
        })


    }

    handleChange(e) {
        e.preventDefault()

        let name = e.target.name
        let value = e.target.value

        switch (name) {
            case 'login':
                this.setState({
                    username: value
                })
                break;
            case 'password':
                this.setState({
                    password: value
                })
                break;

            case 'mailadress':
                this.setState({
                    mail: value
                })
                break;
            case 'name':
                this.setState({
                    name: value
                })
                break;

            case 'surname':
                this.setState({
                    lastname: value
                })
                break;


            case 'adress':
                this.setState({
                    postal_address: value
                })
                break;
            case 'postalcode':
                this.setState({
                    postal_code: value
                })
                break;
            case 'city':
                this.setState({
                    city: value
                })
                break;
            case 'country':
                this.setState({
                    country: value
                })
                break;
            case 'phone':
                this.setState({
                    phone: value
                })
                break;
            case 'newsletter':
                this.setState({
                    newsletters: !this.state.newsletters
                })
            default:
                break;
        }



    }


    render() {
        return (
            <div className="register">

                <div className="fieldreg">

                    <form onSubmit={this.handleSubmit} className="register-form">

                        <div className="username">
                            <label for="login">Nom d'utilisateur: </label>
                            <input type="text" id="login-register" name="login" placeholder="Username" onChange={this.handleChange} />
                        </div>

                        <div className="pw">
                            <label for="password">Mot de passe: </label>
                            <input type="password" id="password-register" name="password" placeholder="Password" onChange={this.handleChange} />
                        </div>

                        <div className="email">
                            <label for="mailadress">Adresse Mail: </label>
                            <input type="email" id="mailadress" name="mailadress" placeholder="E-mail" onChange={this.handleChange} />
                        </div>

                        <div className="name">
                            <div className="nam">
                                <label for="name">Nom: </label>
                                <input type="text" id="name" name="name" placeholder="Name" onChange={this.handleChange} />
                            </div>
                            <div className="surn">
                                <label for="surname">Prénom: </label>
                                <input type="text" id="surname" name="surname" placeholder="Surname" onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="adress">
                            <label for="adress">Adresse: </label>
                            <input type="text" id="adress" name="adress" placeholder="Address" onChange={this.handleChange} />
                        </div>

                        <div className="city">
                            <div className="pc">
                                <label for="postalcode">Code Postal: </label>
                                <input type="tel" id="postalcode" name="postalcode" placeholder="Postal code" onChange={this.handleChange} />
                            </div>
                            <div className="cit">
                                <label for="city">Ville: </label>
                                <input type="text" id="city" name="city" placeholder="City" onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="country">
                            <label for="country">Pays: </label>
                            <input type="text" id="country" name="country" placeholder="Country" onChange={this.handleChange} />
                        </div>

                        <div class="tel-news">
                            <div className="tel">
                                <label for="phone">Téléphone: </label>
                                <input type="tel" id="phone" name="phone" placeholder="Phone Number" onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="news-letter">
                            <input type="checkbox" id="check-news" name="newsletter" checked={this.state.newsletters} onChange={this.handleChange} />
                            <label id="check-news-label" for="login">S'abonner à la Newsletter</label>
                        </div>

                        <div className="reg">
                            <Link id="reg" to='/' params={{ isLogin: this.state.isLogin }}>Créer un compte</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}