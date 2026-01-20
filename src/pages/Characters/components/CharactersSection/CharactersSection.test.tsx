import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { CharacterFilters } from '@/types/character';
import { describe, expect, it, vi } from 'vitest';
import CharactersSection from './CharactersSection';

vi.mock('@pages/Characters/components/CharactersFilters/CharactersFilters', () => ({
  __esModule: true,
  default: ({
    filters,
    onFilterChange,
    onReset,
  }: {
    filters: CharacterFilters;
    onFilterChange: (key: 'status', value: string) => void;
    onReset: () => void;
  }) => (
    <div>
      <span data-testid="filters-prop">{JSON.stringify(filters)}</span>
      <button data-testid="set-status" onClick={() => onFilterChange('status', 'alive')}>
        set status
      </button>
      <button data-testid="reset-filters" onClick={onReset}>
        reset
      </button>
    </div>
  ),
}));

vi.mock('@pages/Characters/components/CharacterResults/CharacterResults', () => ({
  __esModule: true,
  default: ({ filters }: { filters?: CharacterFilters }) => (
    <div data-testid="results">{JSON.stringify(filters ?? {})}</div>
  ),
}));

describe('CharactersSection', () => {
  it('pasa filtros iniciales vacíos al resultado', () => {
    render(<CharactersSection />);

    expect(screen.getByTestId('results').textContent).toBe('{}');
  });

  it('actualiza filtros cuando cambia un select', async () => {
    const user = userEvent.setup();
    render(<CharactersSection />);

    await user.click(screen.getByTestId('set-status'));

    expect(screen.getByTestId('results').textContent).toContain('"status":"alive"');
  });

  it('restablece filtros al presionar reset', async () => {
    const user = userEvent.setup();
    render(<CharactersSection />);

    await user.click(screen.getByTestId('set-status'));
    await user.click(screen.getByTestId('reset-filters'));

    expect(screen.getByTestId('results').textContent).toBe('{}');
  });
});
