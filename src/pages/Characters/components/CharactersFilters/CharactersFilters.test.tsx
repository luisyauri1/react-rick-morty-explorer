import type { CharacterFilters } from '@/types/character';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import CharactersFilters from './CharactersFilters';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const baseProps = (overrides: Partial<CharacterFilters> = {}) => ({
  filters: { ...overrides },
  onFilterChange: vi.fn(),
  onReset: vi.fn(),
});

describe('CharactersFilters', () => {
  it('renderiza el título', () => {
    render(<CharactersFilters {...baseProps()} />);

    expect(screen.getByText('filters.title')).toBeInTheDocument();
  });

  it('muestra los tres selects', () => {
    render(<CharactersFilters {...baseProps()} />);

    expect(screen.getAllByRole('combobox')).toHaveLength(3);
  });

  it('llama onFilterChange al cambiar status', async () => {
    const props = baseProps();
    render(<CharactersFilters {...props} />);

    await userEvent.selectOptions(screen.getByLabelText('filters.status.label'), 'alive');

    expect(props.onFilterChange).toHaveBeenCalledWith('status', 'alive');
  });

  it('llama onReset al presionar el botón', async () => {
    const props = baseProps({ status: 'alive' });
    render(<CharactersFilters {...props} />);

    await userEvent.click(screen.getByRole('button', { name: 'filters.resetButton' }));

    expect(props.onReset).toHaveBeenCalled();
  });
});
