import '@/test/mocks/i18n';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render search input', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('should render search icon', () => {
    const { container } = render(<SearchBar />);
    const icon = container.querySelector('.search-bar__icon');

    expect(icon).toBeInTheDocument();
  });

  it('should have correct aria-label', () => {
    render(<SearchBar />);
    const input = screen.getByLabelText('Buscar personajes');

    expect(input).toBeInTheDocument();
  });

  it('should use default placeholder from translations', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Identificar espécimen...');

    expect(input).toBeInTheDocument();
  });

  it('should use custom placeholder when provided', () => {
    render(<SearchBar placeholder="Custom placeholder" />);
    const input = screen.getByPlaceholderText('Custom placeholder');

    expect(input).toBeInTheDocument();
  });

  it('should call onSearch when typing', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'Rick');

    expect(onSearch).toHaveBeenCalled();
  });

  it('should call onSearch with correct value', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'a');

    expect(onSearch).toHaveBeenCalledWith('a');
  });

  it('should have search-bar wrapper class', () => {
    const { container } = render(<SearchBar />);
    const wrapper = container.querySelector('.search-bar');

    expect(wrapper).toBeInTheDocument();
  });

  it('should have search-bar__input class on input', () => {
    const { container } = render(<SearchBar />);
    const input = container.querySelector('.search-bar__input');

    expect(input).toBeInTheDocument();
  });

  it('should have text type on input', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'text');
  });
});
