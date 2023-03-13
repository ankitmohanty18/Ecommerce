import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
  return (
    <div className="col-4 mb-3">
      <div className="special-product-card">
        <div className="d-flex ">
          <div>
            <img
              className="img-fluid"
              src={require("../images/watch.jpg")}
              alt="watch"
            />
          </div>
          <div>
            <div className="special-product-content">
              <h5 className="brand">Havells</h5>
              <h6 className="title">Samsung Galaxy Note 10+</h6>
              <ReactStars
                count={5}
                size={24}
                value={5}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$100 &nbsp;</span>
                <strike> $200</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5&nbsp;</b>days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3">15</span>:
                  <span className="badge rounded-circle p-3">10</span>:
                  <span className="badge rounded-circle p-3">05</span>
                </div>
              </div>
              <div className="prod-count mt-4">
                <p>Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button my-3">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
