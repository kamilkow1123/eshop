import { useState } from "react";
import { Link } from "react-router-dom";
//icons
import {
    FaHeart,
    FaShoppingCart,
    FaUser,
    FaAngleDown,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
    const [ isSubmenuOpen, setSubmenuOpen ] = useState(false);

    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <div className="nav__group">
                    <Link to="/" className="nav__logo">
                        LOGO
                    </Link>
                    <ul className="nav__menu">
                        <li className="nav__item">Categories</li>
                        <li className="nav__item">Payment</li>
                        <li className="nav__item">Warranty</li>
                        <li className="nav__item">Credit</li>
                    </ul>
                </div>
                <div className="nav__group">
                    <div className="nav__dropdown">
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
                    <div className="nav__hamburger" onClick={toggleSidebar}>
                        <FaBars />
                    </div>
                    <div
                        className="nav__hamburger nav__hamburger--submenu"
                        onClick={() => setSubmenuOpen(!isSubmenuOpen)}
                    >
                        <FaBars />
                    </div>
                </div>
                <div
                    className="nav__submenu"
                    style={{
                        transform : `${isSubmenuOpen ? "translateY(0)" : ""}`,
                    }}
                >
                    <div
                        className="nav__submenu__close-icon"
                        onClick={() => setSubmenuOpen(!isSubmenuOpen)}
                    >
                        <FaTimes />
                    </div>
                    <div className="nav__submenu__dropdown">
                        Catalog <FaAngleDown />
                    </div>
                    <ul className="nav__submenu__list">
                        <li className="nav__submenu__item">Categories</li>
                        <li className="nav__submenu__item">Payment</li>
                        <li className="nav__submenu__item">Warranty</li>
                        <li className="nav__submenu__item">Credit</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
