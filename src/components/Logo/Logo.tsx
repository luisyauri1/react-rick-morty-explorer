import { useTranslation } from 'react-i18next';
import { RiMicroscopeFill } from 'react-icons/ri';
import './Logo.scss';

export default function Logo() {
  const { t } = useTranslation();

  return (
    <a href="/" className="logo" aria-label={t('header.logo.ariaLabel')}>
      <div className="logo__icon-wrapper">
        <RiMicroscopeFill className="logo__icon" aria-hidden="true" />
      </div>
      <div className="logo__text">
        <h1 className="logo__title">
          {t('header.logo.title')}
          <span>OS</span>
        </h1>
        <p className="logo__subtitle">{t('header.logo.subtitle')}</p>
      </div>
    </a>
  );
}
