import * as React from "react";
import "./../css/components/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="imgfooter">
          <img src="/img/logo1.png" alt="logo" />
        </div>
        <div className="separator1"></div>
        <div className="linkfooter">
          <Link to="/">Cookies</Link>
          <Link to="/">Vos données personnelles</Link>
          <Link to="/">Coditions générales de vente</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
