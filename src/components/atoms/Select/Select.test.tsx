import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Select from './Select';

describe('Select', () => {
  const mockOptions = [
    { value: 'option1', labelKey: 'test.option1' },
    { value: 'option2', labelKey: 'test.option2' },
    { value: 'option3', labelKey: 'test.option3' },
  ];

  it('should render select element', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render label when provided', () => {
    render(<Select labelKey="test.label" options={mockOptions} />);

    expect(screen.getByText('test.label')).toBeInTheDocument();
  });

  it('should not render label when not provided', () => {
    const { container } = render(<Select options={mockOptions} />);

    expect(container.querySelector('.select-label')).not.toBeInTheDocument();
  });

  it('should render placeholder when provided', () => {
    render(<Select options={mockOptions} placeholderKey="test.placeholder" />);

    expect(screen.getByText('test.placeholder')).toBeInTheDocument();
  });

  it('should not render placeholder option when placeholderKey not provided', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  it('should render all options', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getByText('test.option1')).toBeInTheDocument();
  });

  it('should render correct number of options including placeholder', () => {
    render(<Select options={mockOptions} placeholderKey="test.placeholder" />);

    expect(screen.getAllByRole('option')).toHaveLength(4);
  });

  it('should apply custom id when provided', () => {
    render(<Select id="custom-id" options={mockOptions} labelKey="test.label" />);

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

    expect(screen.getByText('test.option1')).toHaveAttribute('value', 'option1');
  });

  it('should render placeholder option with empty value', () => {
    render(<Select options={mockOptions} placeholderKey="test.placeholder" />);

    expect(screen.getByText('test.placeholder')).toHaveAttribute('value', '');
  });
});
