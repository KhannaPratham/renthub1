import "../styles/Footer.scss";
import { LocalPhone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="DreamNest logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/terms">Terms and Conditions</a></li>
          <li><a href="/refund-policy">Return and Refund Policy</a></li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+1 234 567 890</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>dreamnest@support.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment methods" />
      </div>
    </footer>
  );
};

export default Footer;
