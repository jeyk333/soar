import { ChangeEvent, FC, useRef } from 'react';

import Dropdown from '@/assets/images/dropdown.png';

interface PropType {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  label: string;
  classNames?: string;
  required?: boolean;
}

const DateField: FC<PropType> = ({
  value,
  onChange,
  name,
  placeholder,
  label,
  classNames,
  required = false,
}) => {
  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <div className={classNames}>
      <label
        htmlFor={name}
        className="block text-[13px] md:text-base leading-[19.36px] mb-[9px] md:mb-[11px] text-text w-full"
      >
        {label}
      </label>
      <div
        className="inline-flex items-center relative w-full"
        onClick={handleClick}
      >
        <input
          className={`date-input text-text-label w-full border border-card-border rounded-[15px] px-5 py-4 text-xs md:text-[15px]`}
          required={required}
          type="date"
          id={name}
          name={name}
          placeholder={placeholder}
          ref={dateInputRef}
          value={value}
          onChange={onChange}
          onFocus={handleClick}
        />
        <span className="absolute right-[25px] pointer-events-none">
          <img src={Dropdown} alt="Down" className="w-3 h-[6px]" />
        </span>
      </div>
    </div>
  );
};

export default DateField;
