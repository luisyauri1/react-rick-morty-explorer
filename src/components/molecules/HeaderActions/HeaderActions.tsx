import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeToggle from '../ThemeToogle/ThemeToggle';
import './HeaderActions.scss';

export default function HeaderActions() {
  return (
    <div className="header-actions">
      <LanguageSelector />
      <ThemeToggle />
    </div>
  );
}
