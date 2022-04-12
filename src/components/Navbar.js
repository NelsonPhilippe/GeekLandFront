import * as React from "react";
import './../css/components/Nav.css'
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'
import ProfileNC from './ProfileMenuNC'
import Profile from './ProfileMenu'

import ProductType from "./categories/ProdcutType";

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visibility_profile: false,
            visibility_cat: false
        }

        this.profile = this.profile.bind(this)
        this.categorie = this.categorie.bind(this)
        this.profileRender = this.profileRender.bind(this)
    }





    profile() {

        let visibility = this.state.visibility_profile
        // let element = document.querySelector('.menu-profile')

        

        if (visibility) {
            
            return this.setState({
                visibility_profile: false
            })
        }
        this.setState({
            visibility_profile: true
        })

    }


    categorie() {

        let visibility = this.state.visibility_cat
        // let element = document.querySelector('.menu-profile')

        

        if (visibility) {
            
            return this.setState({
                visibility_cat: false
            })
        }
        this.setState({
            visibility_cat: true
        })

    }

    profileRender(){
        console.log(this.props.isLogin);
        
        if(localStorage.getItem('user_token') != null){
            return <Profile />
        }

        return <ProfileNC />
    }


    render() {
        return (
            <div className='Nav'>
                <Link id='logo' to='/'><img src="/img/logo.png" alt="logo" /></Link>
                <SearchBar />
                <img id="menu" src='/img/Menu.png' alt='menu_btn' onClick={this.categorie}  />
                <img id="profile" src='/img/profile.png' alt='profile_btn'
                    onClick={this.profile} 
                />
                {this.state.visibility_profile ? this.profileRender() : null}
                {this.state.visibility_cat ? <ProductType /> : null}

            </div>
        );
    }
}

export default Navbar;
