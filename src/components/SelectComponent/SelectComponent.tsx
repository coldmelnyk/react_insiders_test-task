import React from 'react';
import { Dropdown } from 'primereact/dropdown';

interface Props<T> {
  nameOfSelect: string;
  selectValue: T;
  handleSelectValue: React.Dispatch<React.SetStateAction<T>>;
  selectOptions: T[];
}

export const SelectComponent = <T,>({
  nameOfSelect,
  selectValue,
  handleSelectValue,
  selectOptions
}: Props<T>) => {
  return (
    <div>
      <p
        className={
          'font-[400] text-[14px] tracking-[0.2px] mb-1 text-[#5E626B]'
        }
      >
        {nameOfSelect}
      </p>
      <div className="card flex justify-content-center">
        <Dropdown
          value={selectValue}
          onChange={e => handleSelectValue(e.value)}
          options={selectOptions}
          optionLabel="name"
          placeholder="Select name"
          className="w-[500px] md:w-[500px] text-[#5E626B] border-[#E3E8EE]"
        />
      </div>
    </div>
  );
};
