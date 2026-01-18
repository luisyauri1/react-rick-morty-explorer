import type { JSX, SelectHTMLAttributes } from 'react';
import { useId } from 'react';
import './Select.scss';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
}

export default function Select({
  label,
  options,
  placeholder = 'Seleccionar',
  id,
  ...props
}: SelectProps): JSX.Element {
  const generatedId = useId();
  const selectId = id || generatedId;

  return (
    <div className="select-container">
      {label && (
        <label htmlFor={selectId} className="select-label">
          {label}
        </label>
      )}
      <div className="select-wrapper">
        <select className="select" id={selectId} {...props}>
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
