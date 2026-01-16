import { RiMicroscopeFill } from 'react-icons/ri';
import './Logo.scss';

export default function Logo() {
  return (
    <a href="/" className="logo" aria-label="Ir a página principal">
      <div className="logo__icon-wrapper">
        <RiMicroscopeFill className="logo__icon" aria-hidden="true" />
      </div>
      <div className="logo__text">
        <h1 className="logo__title">
          C-137<span>OS</span>
        </h1>
        <p className="logo__subtitle">Intelligence Hub</p>
      </div>
    </a>
  );
}
