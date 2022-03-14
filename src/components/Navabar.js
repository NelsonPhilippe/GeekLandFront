import * as React from "react";
import './../css/components/Nav.css'
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'
import Profile from './ProfileMenuNC'

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visibility: 'none'
        }
    }


    hoverProfile() {
        
        let visibility = this.state.visibility
        let element = document.querySelector('.menu-profile')

        if(visibility === 'none'){
            this.setState({visibility: 'show'})
            element.classList.add('show')
            element.classList.remove('none')
            
        }

        if(visibility === 'show'){
            this.setState({visibility: 'none'})
            element.classList.add('none')
            element.classList.remove('show')
        }

    }

    render(){
        return (
            <div className='Nav'>
                <Link id='logo' to='/'><img src="/img/logo.png" alt="logo" /></Link>
                <SearchBar />
                <img id="menu" src='/img/Menu.png' alt='menu_btn' />
                <img id="profile" src='/img/profile.png' alt='profile_btn'
                onClick={() => this.hoverProfile()}
                />
                <Profile />
            </div>
        );
    }
}

export default Navbar;
