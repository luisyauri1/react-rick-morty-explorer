import type { JSX, SelectHTMLAttributes } from 'react';
import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import './Select.scss';

interface SelectOption {
  readonly value: string;
  readonly labelKey: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'placeholder'> {
  labelKey?: string;
  options: readonly SelectOption[];
  placeholderKey?: string;
}

export default function Select({
  labelKey,
  options,
  placeholderKey,
  id,
  ...props
}: SelectProps): JSX.Element {
  const { t } = useTranslation();
  const generatedId = useId();
  const selectId = id || generatedId;

  return (
    <div className="select-container">
      {labelKey && (
        <label htmlFor={selectId} className="select-label">
          {t(labelKey)}
        </label>
      )}
      <div className="select-wrapper">
        <select className="select" id={selectId} {...props}>
          {placeholderKey && <option value="">{t(placeholderKey)}</option>}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {t(option.labelKey)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
