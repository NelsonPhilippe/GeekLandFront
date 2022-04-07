import * as React from "react";
import './../css/components/Nav.css'
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'
import Profile from './ProfileMenuNC'

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }

        this.profile = this.profile.bind(this)
    }


    profile(e) {

        let visibility = this.state.visibility
        // let element = document.querySelector('.menu-profile')

        

        if (visibility) {
            
            return this.setState({
                visibility: false
            })
        }
        this.setState({
            visibility: true
        })

    }

    render() {
        return (
            <div className='Nav'>
                <Link id='logo' to='/'><img src="/img/logo.png" alt="logo" /></Link>
                <SearchBar />
                <img id="menu" src='/img/Menu.png' alt='menu_btn' />
                <img id="profile" src='/img/profile.png' alt='profile_btn'
                    onClick={this.profile} 
                />
                {this.state.visibility ? <Profile /> : null}
            </div>
        );
    }
}

export default Navbar;
