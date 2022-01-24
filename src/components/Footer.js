import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
<footer className="footer">
  <nav>
    <ul>
      <li className="footer__menu-item">
        <NavLink className={(isActive) =>
                "footer__menu-link" + (isActive ? "" : "active")
              } to="/">A jugar</NavLink>
      </li>
      <li className="footer__menu-item">
        <NavLink className={(isActive) =>
                "footer__menu-link" + (isActive ? "" : "active")
              } to="/instructions">¿Cómo se juega?</NavLink>
      </li>
      <li className="footer__menu-item">
        <NavLink className={(isActive) =>
                "footer__menu-link" + (isActive ? "" : "active")
              } to="/options">Más opciones</NavLink>
      </li>
      

    </ul>
  </nav>
  <small className="footer__copy">© Adalab</small>
</footer> );
}

export default Footer;