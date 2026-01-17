import LanguageSelector from '@molecules/LanguageSelector/LanguageSelector';
import ThemeToggle from '@molecules/ThemeToogle/ThemeToggle';
import './HeaderActions.scss';

export default function HeaderActions() {
  return (
    <div className="header-actions">
      <LanguageSelector />
      <ThemeToggle />
    </div>
  );
}
