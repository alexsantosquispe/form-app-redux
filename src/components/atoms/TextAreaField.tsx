import cn from 'clsx';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import type { TextAreaProps } from '../../types';
import { INPUT_FIELD_ERROR, INPUT_FIELD_STYLES } from '../../constants';

export const TextAreaField = ({
  label,
  name,
  control,
  placeholder,
  rows = 6,
  cols = 50,
  isDisabled,
  errorMessage = '',
  isRequired = false
}: TextAreaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <div className="flex w-full flex-col">
            <label htmlFor={name} className="mb-0.5 text-sm">
              {label}
              {isRequired && <span className="text-rose-600">&nbsp;*</span>}
            </label>
            <textarea
              id={name}
              name={name}
              placeholder={placeholder}
              disabled={isDisabled}
              onChange={onChange}
              value={value}
              rows={rows}
              cols={cols}
              className={twMerge(
                INPUT_FIELD_STYLES,
                'resize-none py-2',
                cn({
                  'border-rose-600 dark:border-rose-400': !!errorMessage,
                  'bg-gray-100 placeholder:text-gray-200 hover:cursor-not-allowed dark:bg-white/15 dark:placeholder:text-white/10':
                    isDisabled
                })
              )}
            />
            {errorMessage && (
              <span className={INPUT_FIELD_ERROR}>{errorMessage}</span>
            )}
          </div>
        );
      }}
    />
  );
};
