import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import wishSVG from "../images/wish.svg";
import prodcompareSVG from "../images/prodcompare.svg";
import viewSVG from "../images/view.svg";
import addcartSVG from "../images/add-cart.svg";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wishSVG} alt="wishlist" />
          </Link>
        </div>
        <div className="product-image py-3">
          <img
            src={require("../images/watch.jpg")}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Boat</h6>
          <h5 className="product-title">
            Kids Headphone Bulk 10 Pack Multi Pack Colored
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={5}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={prodcompareSVG} alt="product compare" />
            </Link>
            <Link>
              <img src={viewSVG} alt="view" />
            </Link>
            <Link>
              <img src={addcartSVG} alt="add cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
