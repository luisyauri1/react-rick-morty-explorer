import type { CharacterFilters } from '@/types/character';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import CharacterLayout from './CharacterLayout';

vi.mock('@pages/Characters/components/CharacterFiltersPanel/CharacterFiltersPanel', () => ({
  __esModule: true,
  default: ({
    filters,
    onFilterChange,
    onReset,
  }: {
    filters: CharacterFilters;
    onFilterChange: (key: Exclude<keyof CharacterFilters, 'page'>, value: string) => void;
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

vi.mock('@pages/Characters/components/CharacterList/CharacterList', () => ({
  __esModule: true,
  default: ({ filters }: { filters?: CharacterFilters }) => (
    <div data-testid="results">{JSON.stringify(filters ?? {})}</div>
  ),
}));

describe('CharacterLayout', () => {
  const Wrapper = () => {
    const [filters, setFilters] = useState<CharacterFilters>({});

    const handleFilterChange = (key: Exclude<keyof CharacterFilters, 'page'>, value: string) => {
      setFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleReset = () => setFilters({});

    return (
      <CharacterLayout
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
      />
    );
  };

  it('pasa filtros iniciales vacíos al resultado', () => {
    render(<Wrapper />);

    expect(screen.getByTestId('results').textContent).toBe('{}');
  });

  it('actualiza filtros cuando cambia un select', async () => {
    const user = userEvent.setup();
    render(<Wrapper />);

    await user.click(screen.getByTestId('set-status'));

    expect(screen.getByTestId('results').textContent).toContain('"status":"alive"');
  });

  it('restablece filtros al presionar reset', async () => {
    const user = userEvent.setup();
    render(<Wrapper />);

    await user.click(screen.getByTestId('set-status'));
    await user.click(screen.getByTestId('reset-filters'));

    expect(screen.getByTestId('results').textContent).toBe('{}');
  });
});
