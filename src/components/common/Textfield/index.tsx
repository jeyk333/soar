import { ChangeEvent, FC } from 'react';

interface PropType {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  label: string;
  type?: string;
  classNames?: string;
  readOnly?: boolean;
  required?: boolean;
  errorMessage?: string;
}

const Textfield: FC<PropType> = ({
  value,
  onChange,
  name,
  placeholder,
  label,
  type = 'text',
  classNames,
  readOnly = false,
  required = false,
  errorMessage,
}) => {
  return (
    <div className={`${classNames} relative`}>
      <label
        htmlFor={name}
        className="block text-[13px] md:text-base leading-[19.36px] mb-[9px] md:mb-[11px] text-text w-full"
      >
        {label}
      </label>
      <input
        aria-labelledby={name}
        aria-invalid={!!errorMessage}
        required={required}
        readOnly={readOnly}
        aria-required={required}
        type={type}
        aria-readonly={readOnly}
        id={name}
        aria-placeholder={placeholder}
        placeholder={placeholder}
        name={name}
        className={`text-text-label w-full border ${errorMessage ? 'border-error' : 'border-card-border'} rounded-[15px] px-5 py-4 text-xs md:text-[15px] ${readOnly ? 'focus:outline-none' : ''}`}
        value={value}
        onChange={onChange}
      />
      {errorMessage ? (
        <p aria-live="assertive" className="text-[10px] absolute text-error">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default Textfield;
