import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('should render button with children', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('should apply primary variant by default', () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button--primary');
  });

  it('should apply secondary variant when specified', () => {
    render(<Button variant="secondary">Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button--secondary');
  });

  it('should apply outline variant when specified', () => {
    render(<Button variant="outline">Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button--outline');
  });

  it('should apply ghost variant when specified', () => {
    render(<Button variant="ghost">Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button--ghost');
  });

  it('should apply small size', () => {
    render(<Button size="sm">Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button--sm');
  });

  it('should apply medium size by default', () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button--md');
  });

  it('should apply large size', () => {
    render(<Button size="lg">Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button--lg');
  });

  it('should apply full width class when specified', () => {
    render(<Button fullWidth>Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button--full-width');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Button</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should apply custom className', () => {
    render(<Button className="custom-class">Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('should pass additional props to button element', () => {
    render(<Button type="submit">Button</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
