import Container from '../Container/Container';
import HeaderActions from '../HeaderActions/HeaderActions';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
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
