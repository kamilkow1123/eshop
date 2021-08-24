import chairImg from "../../images/chair.png";
import chairImg2 from "../../images/chair2.png";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
    return (
        <div className="product">
            <h1 className="product__header">Product</h1>
            <div className="product__container">
                <div className="product__card">
                    <div className="product__topbar">
                        <div className="product__reviews">
                            <span className="product__icon">
                                <FaStar />
                            </span>
                            <span className="product__review">4.5</span>
                            10
                            <span className="product__note">Reviews</span>
                        </div>
                        <div className="product__code">
                            <span className="product__note">Code</span> 555555
                        </div>
                    </div>
                    <div className="product__img">
                        <img src={chairImg} alt="product" />
                    </div>
                    <div className="product__info">
                        <p className="product__name">Pear chair</p>
                        <div className="product__prices">
                            <p className="product__price">599.00</p>
                            <p className="product__price--old">699.99</p>
                        </div>
                    </div>
                </div>
                <div className="product__images">
                    <div className="product__image">
                        <img src={chairImg} alt="product" />
                    </div>
                    <div className="product__image">
                        <img src={chairImg2} alt="product" />
                    </div>
                    <div className="product__image">
                        <img src={chairImg} alt="product" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
