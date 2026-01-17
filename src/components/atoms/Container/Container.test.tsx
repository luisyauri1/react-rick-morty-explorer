import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Container from './Container';

describe('Container', () => {
  it('should render children', () => {
    const { container } = render(
      <Container>
        <div data-testid="child">Test Content</div>
      </Container>
    );

    expect(container.querySelector('[data-testid="child"]')).toBeInTheDocument();
  });

  it('should have container class', () => {
    const { container } = render(
      <Container>
        <div>Content</div>
      </Container>
    );

    expect(container.firstChild).toHaveClass('container');
  });

  it('should render as div element', () => {
    const { container } = render(
      <Container>
        <div>Content</div>
      </Container>
    );

    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});
