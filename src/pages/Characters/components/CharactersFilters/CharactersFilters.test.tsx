import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CharactersFilters from './CharactersFilters';

describe('CharactersFilters', () => {
  it('should render title', () => {
    render(<CharactersFilters />);

    expect(screen.getByText('filters.title')).toBeInTheDocument();
  });

  it('should render status select', () => {
    render(<CharactersFilters />);

    expect(screen.getByRole('combobox', { name: 'filters.status.label' })).toBeInTheDocument();
  });

  it('should render gender select', () => {
    render(<CharactersFilters />);

    expect(screen.getByRole('combobox', { name: 'filters.gender.label' })).toBeInTheDocument();
  });

  it('should render species select', () => {
    render(<CharactersFilters />);

    expect(screen.getByRole('combobox', { name: 'filters.species.label' })).toBeInTheDocument();
  });

  it('should render reset button', () => {
    render(<CharactersFilters />);

    expect(screen.getByRole('button', { name: 'filters.resetButton' })).toBeInTheDocument();
  });

  it('should have characters-filters class', () => {
    const { container } = render(<CharactersFilters />);

    expect(container.firstChild).toHaveClass('characters-filters');
  });

  it('should render status select with correct id', () => {
    render(<CharactersFilters />);

    expect(screen.getByRole('combobox', { name: 'filters.status.label' })).toHaveAttribute(
      'id',
      'status'
    );
  });

  it('should render gender select with correct id', () => {
    render(<CharactersFilters />);

    expect(screen.getByRole('combobox', { name: 'filters.gender.label' })).toHaveAttribute(
      'id',
      'gender'
    );
  });

  it('should render species select with correct id', () => {
    render(<CharactersFilters />);

    expect(screen.getByRole('combobox', { name: 'filters.species.label' })).toHaveAttribute(
      'id',
      'species'
    );
  });

  it('should render button with outline variant', () => {
    render(<CharactersFilters />);

    expect(screen.getByRole('button')).toHaveClass('button--outline');
  });

  it('should render all three selects', () => {
    render(<CharactersFilters />);

    expect(screen.getAllByRole('combobox')).toHaveLength(3);
  });

  it('should render title as h2 element', () => {
    render(<CharactersFilters />);

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
