import Container from '../Container/Container';
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
          <section>adicional</section>
        </div>
      </Container>
    </header>
  );
}
