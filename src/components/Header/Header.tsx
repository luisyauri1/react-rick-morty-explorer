import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <Logo />
          <nav>Navegation</nav>
          <section>adicional</section>
        </div>
      </Container>
    </header>
  );
}
