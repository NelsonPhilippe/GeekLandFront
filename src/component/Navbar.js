import Search from './../component/SearchBar'

function Navbar(){
    return (
        <div className='Nav'>
            <img src="/img/logo.png" alt="logo" />
            <Search />
            <img src='/img/Menu.png' alt='menu_btn' /> 
        </div>
    );
}

export default Navbar;