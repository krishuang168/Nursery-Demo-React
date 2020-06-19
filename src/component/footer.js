import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import shoppingBasket from "../shared/svg/shoppingBasketWhite.svg";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about_us">About Us</Link>
              </li>
              <li>
                <Link to="/contact_us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 col-sm-2 offset-1">
            <h5>Shopping</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/catalog">Online Purchase</Link>
              </li>
              <li>
                <Link to="/shopping_basket">
                  Shopping Basket <Image src={shoppingBasket} style={{marginTop: -5}} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-4 offset-2">
            <h5>Contact</h5>
            <a role="button" className="btn-link" href="tel:+142542658778">
              <i className="fa fa-phone" /> +1-(425)-426-8778
            </a>
            <br />
            <a
              role="button"
              className="btn-link"
              href="mailto:notreal@notreal.co"
            >
              <i className="fa fa-envelope-o" /> contact@cottagelakenursery.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
