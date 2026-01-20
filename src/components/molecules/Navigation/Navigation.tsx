import { useTranslation } from 'react-i18next';
import './Navigation.scss';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="/" className="navigation__link navigation__link--active">
            {t('header.nav.characters')}
          </a>
        </li>
      </ul>
    </nav>
  );
}
