import {
    FaTimes,
    FaAngleDown,
    FaHeart,
    FaShoppingCart,
    FaUser,
    FaSistrix,
} from "react-icons/fa";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <aside
            className="sidebar"
            style={{ transform: `${isSidebarOpen ? "translateY(0)" : ""}` }}
        >
            <div className="sidebar__close-icon" onClick={toggleSidebar}>
                <FaTimes />
            </div>
            <div className="sidebar__wrapper">
                <div className="sidebar__input">
                    <input placeholder="Product name" />
                    <FaSistrix />
                </div>
                <div className="sidebar__dropdown">
                    Catalog <FaAngleDown />
                </div>
                <ul className="sidebar__menu">
                    <li className="sidebar__item">Categories</li>
                    <li className="sidebar__item">Payment</li>
                    <li className="sidebar__item">Warranty</li>
                    <li className="sidebar__item">Credit</li>
                    <li className="sidebar__item">Delivery</li>
                </ul>
                <div className="sidebar__icons">
                    <div className="sidebar__icon">
                        <FaHeart />
                    </div>
                    <div className="sidebar__icon">
                        <FaShoppingCart />
                    </div>
                    <div className="sidebar__icon">
                        <FaUser />
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
