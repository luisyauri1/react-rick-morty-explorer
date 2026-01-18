import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Select from './Select';

describe('Select', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('should render select element', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render label when provided', () => {
    render(<Select label="Test Label" options={mockOptions} />);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should not render label when not provided', () => {
    const { container } = render(<Select options={mockOptions} />);

    expect(container.querySelector('.select-label')).not.toBeInTheDocument();
  });

  it('should render default placeholder', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getByText('Seleccionar')).toBeInTheDocument();
  });

  it('should render custom placeholder when provided', () => {
    render(<Select options={mockOptions} placeholder="Elige una opción" />);

    expect(screen.getByText('Elige una opción')).toBeInTheDocument();
  });

  it('should render all options', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('should render correct number of options including placeholder', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getAllByRole('option')).toHaveLength(4);
  });

  it('should apply custom id when provided', () => {
    render(<Select id="custom-id" options={mockOptions} label="Label" />);

    expect(screen.getByRole('combobox')).toHaveAttribute('id', 'custom-id');
  });

  it('should have select-container class', () => {
    const { container } = render(<Select options={mockOptions} />);

    expect(container.firstChild).toHaveClass('select-container');
  });

  it('should pass additional props to select element', () => {
    render(<Select options={mockOptions} disabled />);

    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('should render option with correct value attribute', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getByText('Option 1')).toHaveAttribute('value', 'option1');
  });

  it('should render placeholder option with empty value', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getByText('Seleccionar')).toHaveAttribute('value', '');
  });
});
