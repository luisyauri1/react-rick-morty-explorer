import Container from '../../atoms/Container/Container';
import Logo from '../../atoms/Logo/Logo';
import HeaderActions from '../../molecules/HeaderActions/HeaderActions';
import Navigation from '../../molecules/Navigation/Navigation';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <Logo />
          <Navigation />
          <HeaderActions />
        </div>
      </Container>
    </header>
  );
}
