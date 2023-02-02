import facebook from "./icons/facebook.svg";
import twitter from "./icons/twitter.svg";
import google from "./icons/google.svg";
import instagram from "./icons/instagram.svg";
import linkedin from "./icons/linkedin.svg";

function Footer() {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center pb-2 mt-3 gap-1">
      <h5 className="fs-3">Contact Us</h5>
      <div>
        <a href="" className="me-4 text-reset">
          <img
            className="h-25 bg-primary border border-dark border-2 rounded-circle p-1"
            src={facebook}
            alt="facebook icon"
            style={{ width: 40 }}
          />
        </a>
        <a href="" className="me-4 text-reset">
          <img
            src={twitter}
            alt="twitter icon"
            style={{ width: 40 }}
            className="h-25 bg-primary border border-dark border-2 rounded-circle p-1"
          />
        </a>
        <a href="" className="me-4 text-reset">
          <img
            src={google}
            alt="google icon"
            style={{ width: 40 }}
            className="h-25 bg-primary border border-dark border-2 rounded-circle p-1"
          />
        </a>
        <a href="" className="me-4 text-reset">
          <img
            src={instagram}
            alt="instagram icon"
            style={{ width: 40 }}
            className="h-25 bg-primary border border-dark border-2 rounded-circle p-1"
          />
        </a>
        <a href="" className="me-4 text-reset">
          <img
            src={linkedin}
            alt="linkedin icon"
            style={{ width: 40 }}
            className="h-25 bg-primary border border-dark border-2 rounded-circle p-1"
          />
        </a>
      </div>
      <p className="mt-3">Copyright © ArmBrain Tutoring</p>
    </footer>
  );
}

export default Footer;
