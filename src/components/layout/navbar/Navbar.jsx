import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header>
      <div className="container-nav">
        <div className="container-nav__brand">
          <img
            src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
            alt="Logo"
          />
          <h1>React Store Gaming</h1>
        </div>
        <ul>
          <li className="container-nav__item-list">Inicio</li>
          <li className="container-nav__item-list">Componentes</li>
          <li className="container-nav__item-list">PC armadas</li>
          <li className="container-nav__item-list">Periféricos</li>
        </ul>
        <CartWidget />
      </div>
    </header>
  );
};
