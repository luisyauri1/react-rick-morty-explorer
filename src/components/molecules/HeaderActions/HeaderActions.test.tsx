import '@/test/mocks/i18n';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HeaderActions from './HeaderActions';

describe('HeaderActions', () => {
  it('should render header actions container', () => {
    const { container } = render(<HeaderActions />);
    const actionsDiv = container.querySelector('.header-actions');

    expect(actionsDiv).toBeInTheDocument();
  });

  it('should render language selector', () => {
    render(<HeaderActions />);

    expect(screen.getByText('ES')).toBeInTheDocument();
  });

  it('should render theme toggle', () => {
    render(<HeaderActions />);
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(2);
  });

  it('should render both components in correct order', () => {
    render(<HeaderActions />);
    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveAttribute('aria-label', 'Seleccionar idioma');
  });
});
