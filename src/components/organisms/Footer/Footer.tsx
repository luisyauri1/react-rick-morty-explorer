import Container from '@atoms/Container/Container';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

export default function Footer() {
  const { t } = useTranslation();

  const systemLinks = [
    { label: t('footer.systems.links.directory'), href: '#' },
    { label: t('footer.systems.links.map'), href: '#' },
    { label: t('footer.systems.links.history'), href: '#' },
  ];

  const dataLinks = [
    { label: t('footer.data.links.api'), href: '#', external: true },
    { label: t('footer.data.links.docs'), href: '#' },
    { label: t('footer.data.links.support'), href: '#' },
  ];

  return (
    <footer className="footer">
      <Container className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__badge" aria-hidden="true">
              C
            </div>
            <div className="footer__brand-content">
              <p className="footer__overline">{t('footer.brand.title')}</p>
              <p className="footer__description">{t('footer.brand.description')}</p>
            </div>
          </div>

          <div className="footer__column" aria-label={t('footer.systems.title')}>
            <p className="footer__column-title">{t('footer.systems.title')}</p>
            <ul className="footer__list">
              {systemLinks.map(link => (
                <li key={link.label} className="footer__list-item">
                  <a className="footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column" aria-label={t('footer.data.title')}>
            <p className="footer__column-title">{t('footer.data.title')}</p>
            <ul className="footer__list">
              {dataLinks.map(link => (
                <li key={link.label} className="footer__list-item">
                  <a className="footer__link" href={link.href}>
                    {link.label}
                    {link.external ? (
                      <span aria-hidden="true" className="footer__link-icon">
                        ↗
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__meta">
          <p className="footer__copyright">{t('footer.meta.copyright')}</p>
          <div className="footer__status" aria-live="polite">
            <span className="footer__status-indicator" aria-hidden="true" />
            <span className="footer__status-label">{t('footer.status.label')}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
