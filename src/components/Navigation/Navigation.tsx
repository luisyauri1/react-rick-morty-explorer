import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="/" className="navigation__link navigation__link--active">
            PERSONAJES
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            UBICACIONES
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            EPISODIOS
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            FAVORITOS
          </a>
        </li>
      </ul>
    </nav>
  );
}
