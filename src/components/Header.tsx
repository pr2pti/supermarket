import { Component } from "react";
import Navbar from "../../components/Navbar";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

class Header extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="agileits_header">
          <div className="container">
            <div className="w3l_offers">
              <p>
                SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
                <Link to="/products">SHOP NOW</Link>
              </p>
            </div>
            <div className="agile-login">
              <ul>
                <li>
                  <Link to="/register">Create Account</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/contact">Help</Link>
                </li>
              </ul>
            </div>
            <div className="product_list_header">
              <form action="#" method="post" className="last">
                <input type="hidden" name="cmd" value="_cart" />
                <input type="hidden" name="display" value="1" />
                <button
                  className="w3view-cart"
                  type="submit"
                  name="submit"
                  value=""
                >
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="logo_products">
          <div className="container">
            <div className="w3ls_logo_products_left1">
              <ul className="phone_email">
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>Order online
                  or call us : (+0123) 234 567
                </li>
              </ul>
            </div>
            <div className="w3ls_logo_products_left">
              <h1>
                <Link to="/">Home</Link>
              </h1>
            </div>
            <SearchBar />
            <div className="clearfix"> </div>
          </div>
        </div>
        <Navbar />
      </>
    );
  }
}
export default Header;
