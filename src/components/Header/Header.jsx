import 'react';
import './Header.css'
import image from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className="header">
            <img src={image} alt="" />
            <div className="visit-sites">
                <a href="/shop">Shop</a>
                <a href="/order">Order </a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;