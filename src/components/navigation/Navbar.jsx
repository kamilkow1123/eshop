import { Link } from "react-router-dom";
//icons
import { FaHeart, FaShoppingCart, FaUser, FaAngleDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <Link to="/" className="nav__logo">
                    LOGO
                </Link>
                <ul className="nav__menu">
                    <li className="nav__item">Categories</li>
                    <li className="nav__item">Payment</li>
                    <li className="nav__item">Warranty</li>
                    <li className="nav__item">Credit</li>
                </ul>
                <div className="nav__item">
                    Catalog <FaAngleDown />
                </div>
                <div className="nav__icons">
                    <div className="nav__icon">
                        <FaHeart />
                    </div>
                    <div className="nav__icon">
                        <FaShoppingCart />
                    </div>
                    <div className="nav__icon">
                        <FaUser />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;