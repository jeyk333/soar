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
}) => {
  return (
    <div className={classNames}>
      <label
        htmlFor={name}
        className="block text-[13px] md:text-base leading-[19.36px] mb-[9px] md:mb-[11px] text-text w-full"
      >
        {label}
      </label>
      <input
        required={required}
        readOnly={readOnly}
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        className={`text-text-label w-full border border-card-border rounded-[15px] px-5 py-4 text-xs md:text-[15px] ${readOnly ? 'focus:outline-none' : ''}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Textfield;
